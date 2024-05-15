#!/bin/bash
set -e

SRC="$1"
if [ -f "$1" ]; then
    SRC="$(realpath "$SRC")"
else
    SRC="https://raw.githubusercontent.com/s-nt-s/centros-db/main/out/db.sql"
fi


cd "$(dirname "$0")"
rm -rf aux/ db.sqlite
mkdir -p aux/

echo "public: build local $SRC"
if [[ $SRC == http* ]]; then
    curl -s "$SRC" | sqlite3 db.sqlite
else
    cat "$SRC" | sqlite3 db.sqlite
fi
sqlite3 db.sqlite < filter.sql

function mk_schema () {
    echo ""
    cp db.sqlite "aux/db.sqlite"
    cp "config.load" "aux/config.load"
    sed -e '/^\s*;*\s*$/d' -i "aux/config.load"
    if [ "$1" != "public" ]; then
        echo "$1: build local"
        sed "s/MI_CONCURSO/$1/" concurso.sql | sqlite3 "aux/db.sqlite"
        sed "s/DROP SCHEMA IF EXISTS public CASCADE/DROP SCHEMA IF EXISTS $1 CASCADE/" -i "aux/config.load"
    fi
    for t in $(sqlite3 "aux/db.sqlite" "SELECT name FROM sqlite_schema WHERE type='table';"); do
        for c in $(sqlite3 "aux/db.sqlite" "select name from pragma_table_info('$t') where \"notnull\"=1;"); do
            echo "  DO \$\$ ALTER TABLE $t ALTER COLUMN $c SET NOT NULL; \$\$ " >> "aux/config.load"
        done
    done
    if [ "$1" != "public" ]; then
        echo "  DO \$\$ ALTER SCHEMA public RENAME TO $1; \$\$" >> "aux/config.load"
    fi
    if [ "$1" == "public" ]; then
        for c in $(sqlite3 db.sqlite 'select id from concurso'); do
            echo "  DO \$\$ CREATE VIEW ${c}_ctr AS (select distinct centro as id from concurso_anexo_centro where concurso='${c}' order by centro); \$\$" >> "aux/config.load"
            echo "  DO \$\$ CREATE VIEW ${c}_centro AS (select * from centro where id in (select id from ${c}_ctr)); \$\$" >> "aux/config.load"

            for tb in $(sqlite3 "aux/db.sqlite" "SELECT name FROM sqlite_schema WHERE type='table';"); do
                for col in $(sqlite3 "aux/db.sqlite" "select name from pragma_table_info('$tb') where name='centro'"); do
            echo "  DO \$\$ CREATE VIEW ${c}_${tb} AS (select * from ${tb} where ${col} in (select id from ${c}_ctr)); \$\$" >> "aux/config.load"
                done
            done
        done
    fi
    echo ";" >> "aux/config.load"
    echo "$1: build remote"
    cat "aux/config.load"
    pgloader "aux/config.load"
} 

#for c in $(sqlite3 db.sqlite 'select id from concurso'); do
#    mk_schema $c
#done

mk_schema "public"
