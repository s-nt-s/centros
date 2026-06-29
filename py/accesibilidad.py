from core.dblite import DBLite, dict_factory
from os.path import isfile
from urllib.request import urlretrieve
import json


def get_db():
    out = "/tmp/centros_db.sqlite"
    if not isfile(out):
        urlretrieve("https://s-nt-s.github.io/centros/db.sqlite", out)
    return DBLite(out, readonly=True)


def read_json(path: str):
    with open(path, "r") as f:
        return json.load(f)


def read_acc():
    data: dict = read_json("../src/assets/accesibilidad.json")
    return {int(k): v for k, v in data.items()}


DB = get_db()
AC = read_acc()

for c in DB.to_tuple('''
    select
        c.id, t.abr, c.nombre, c.municipio
    from
        centro c join tipo t on c.tipo=t.id
    where
        c.tipo not in ('036', '020')
        and
        c.id in (
            select centro from concurso_anexo_centro
        )
        and
        c.id not in (
            select centro
            from QUERY_CENTRO
            where query in (
                'accesibilidad=0',
                'accesibilidad=1',
                'accesibilidad=2',
                'checkIntegraM=S'
            )
        )
    order by t.abr, c.nombre, c.id, c.municipio
''', row_factory=dict_factory):
    if c['id'] in AC:
        continue
    if c['abr'].startswith("EOEP"):
        continue
    print("{id} {abr} {nombre} ({municipio})".format(**c))
