import os
import sqlite3
import logging
import errno
from os.path import isfile
from functools import cache
import re


logger = logging.getLogger(__name__)


def dict_factory(cursor: sqlite3.Cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def ResultIter(cursor: sqlite3.Cursor, size=1000):
    while True:
        results = cursor.fetchmany(size)
        if not results:
            break
        for result in results:
            yield result


class EmptyInsertException(sqlite3.OperationalError):
    pass


class DBLite:
    @staticmethod
    def get_connection(file, *extensions, readonly=False):
        logger.info(f"DBLite({file})")
        if readonly:
            file = "file:" + file + "?mode=ro"
            con = sqlite3.connect(file, uri=True)
        else:
            con = sqlite3.connect(file)
        if extensions:
            con.enable_load_extension(True)
            for e in extensions:
                con.load_extension(e)
        return con

    @classmethod
    def do_sql_backup(cls, path: str, out: str = None):
        if out is None:
            out = path.rsplit(".", 1)[0]+".sql"
        with cls(path, readonly=True) as db:
            db.sql_backup(out)

    def __init__(self, file, extensions=None, reload=False, readonly=False):
        self.readonly = readonly
        self.file = file
        if reload and isfile(self.file):
            os.remove(self.file)
        if self.readonly and not isfile(self.file):
            raise FileNotFoundError(errno.ENOENT, os.strerror(errno.ENOENT), file)
        self.extensions = extensions or []
        self.__in_transaction = False
        self.con = DBLite.get_connection(self.file, *self.extensions, readonly=self.readonly)

    def __enter__(self, *args, **kwargs):
        return self

    def __exit__(self, *args, **kwargs):
        self.close()

    def openTransaction(self):
        if self.__in_transaction:
            self.con.execute("END TRANSACTION")
        self.con.execute("BEGIN TRANSACTION")
        self.__in_transaction = True

    def closeTransaction(self):
        if self.__in_transaction:
            self.con.execute("END TRANSACTION")
            self.__in_transaction = False

    def execute(self, sql: str, *args):
        if isfile(sql):
            logger.info(f"DBLite.execute({sql})")
            with open(sql, "r") as f:
                sql = f.read()
        try:
            if len(args) > 0:
                self.con.execute(sql, args)
            else:
                self.con.executescript(sql)
        except sqlite3.OperationalError:
            logger.error(sql)
            raise
        self.con.commit()
        self.clear_cache()

    def clear_cache(self):
        self.get_cols.cache_clear()
        self.get_sql_table.cache_clear()

    @property
    def tables(self) -> tuple[str]:
        return self.to_tuple("SELECT name FROM sqlite_master WHERE type='table' order by name")

    @property
    def indices(self):
        return self.to_tuple("SELECT name FROM sqlite_master WHERE type='index' order by name")

    @cache
    def get_sql_table(self, table: str):
        return self.one("SELECT sql FROM sqlite_master WHERE type='table' AND name=?", table)

    @cache
    def get_cols(self, sql: str) -> tuple[str]:
        _sql = sql.lower().split()
        if len(_sql) == 1:
            sql = f"select * from {sql} limit 0"
        elif _sql[-1] != "limit":
            sql = sql + " limit 0"
        cursor = self.con.cursor()
        cursor.execute(sql)
        cols = tuple(col[0] for col in cursor.description)
        cursor.close()
        return cols

    def insert(self, table: str, _or="", **kwargs):
        if _or is None:
            _or = ""
        elif len(_or):
            _or = "or "+_or
        ok_keys = tuple(k.lower() for k in self.get_cols(table))
        keys = []
        vals = []
        for k, v in kwargs.items():
            if v is None or (isinstance(v, str) and len(v) == 0):
                continue
            if k.lower() not in ok_keys:
                continue
            keys.append('"' + k + '"')
            vals.append(v)
        if len(keys) == 0:
            raise EmptyInsertException(f"insert into {table} malformed: give {kwargs}, needed {ok_keys}")
        keys = ', '.join(keys)
        prm = ', '.join(['?'] * len(vals))
        sql = f"insert {_or} into {table} ({keys}) values ({prm})"
        try:
            self.con.execute(sql, vals)
        except sqlite3.IntegrityError as e:
            msg = re.sub(r"\?", '{}', sql).format(*vals)
            raise sqlite3.DatabaseError(msg) from e

    def _build_select(self, sql: str):
        sql = sql.strip()
        if not sql.lower().startswith("select"):
            field = "*"
            if "." in sql:
                sql, field = sql.rsplit(".", 1)
            sql = "select " + field + " from " + sql
        return sql

    def commit(self):
        self.con.commit()

    def close(self, vacuum=True):
        if self.readonly:
            self.con.close()
            return
        self.closeTransaction()
        self.con.commit()
        if vacuum:
            c = self.con.execute("pragma integrity_check")
            c = c.fetchone()
            if c:
                logger.info(f"integrity_check = {c[0]}")
            else:
                logger.info("integrity_check = ¿?")
            c = self.con.execute("pragma foreign_key_check")
            c = c.fetchall()
            logger.info("foreign_key_check = " + ("ko" if c else "ok"))
            for table, parent in set((i[0], i[2]) for i in c):
                logger.info(f"  {table} -> {parent}")
            self.con.execute("VACUUM")
        self.con.commit()
        self.con.close()

    def select(self, sql: str, *args, row_factory=None, **kwargs):
        sql = self._build_select(sql)
        self.con.row_factory = row_factory
        cursor = self.con.cursor()
        try:
            if len(args):
                cursor.execute(sql, args)
            else:
                cursor.execute(sql)
        except sqlite3.OperationalError:
            logger.error(sql)
            raise
        for r in ResultIter(cursor):
            yield r
        cursor.close()
        self.con.row_factory = None

    def to_tuple(self, *args, **kwargs):
        arr = []
        for i in self.select(*args, **kwargs):
            if isinstance(i, (tuple, list)) and len(i) == 1:
                i = i[0]
            arr.append(i)
        return tuple(arr)

    def one(self, sql: str, *args, row_factory=None):
        sql = self._build_select(sql)
        self.con.row_factory = row_factory
        cursor = self.con.cursor()
        if len(args):
            cursor.execute(sql, args)
        else:
            cursor.execute(sql)
        r = cursor.fetchone()
        cursor.close()
        self.con.row_factory = None
        if not r:
            return None
        if isinstance(r, (tuple, list)) and len(r) == 1:
            return r[0]
        return r

    def iter_sql_backup(self, width_values=-1, multiple_limit=-1):
        re_insert = re.compile(r'^INSERT\s+INTO\s+(.+)\s+VALUES\s*\((.*)\);$')
        yield 'PRAGMA foreign_keys=OFF;'
        yield 'BEGIN TRANSACTION;'
        for lines in self.con.iterdump():
            for line in lines.split("\n"):
                ln = line.strip().upper()
                if ln in ("", "COMMIT;", "BEGIN TRANSACTION;"):
                    continue
                if ln.startswith("INSERT INTO ") or ln.startswith("--"):
                    continue
                yield line
        table = None
        lsttb = None
        count = 0
        values = []

        def val_to_str(vls, end):
            return ",".join(vls)+end

        for line in self.con.iterdump():
            m = re_insert.match(line)
            if m is None:
                continue
            if multiple_limit == 1:
                yield line
                continue
            table = m.group(1).strip('"')
            if table != lsttb or count == 0:
                if values:
                    yield val_to_str(values, ";")
                    values = []
                yield f"INSERT INTO {table} VALUES"
                count = multiple_limit
            values.append("("+m.group(2)+")")
            if len(values) > 1 and len(",".join(values)) > width_values:
                yield val_to_str(values[:-1], ",")
                values = [values[-1]]
            count = count - 1
            lsttb = table
        if values:
            yield val_to_str(values, ";")
            values = []
        yield 'COMMIT;'
        yield 'VACUUM;'
        yield 'PRAGMA foreign_keys=ON;'
        yield 'pragma integrity_check;'
        yield 'pragma foreign_key_check;'

    def sql_backup(self, file, *args, **kwargs):
        with open(file, "w") as f:
            for line in self.iter_sql_backup(*args, **kwargs):
                f.write(line+"\n")
