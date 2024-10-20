#!/bin/bash
set -e

cd "$(dirname "$0")"

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
            cc=$(echo "$c" | sed 's/-/_/g')
            echo "  DO \$\$ CREATE VIEW ${cc}_ctr with (security_invoker=on) AS (select distinct centro as id from concurso_anexo_centro where concurso='${c}' order by centro); \$\$" >> "aux/config.load"
            echo "  DO \$\$ CREATE VIEW ${cc}_centro with (security_invoker=on) AS (select * from centro where id in (select id from ${cc}_ctr)); \$\$" >> "aux/config.load"

            for tb in $(sqlite3 "aux/db.sqlite" "SELECT name FROM sqlite_schema WHERE type='table';"); do
                for col in $(sqlite3 "aux/db.sqlite" "select name from pragma_table_info('$tb') where name='centro'"); do
                if [ "$tb" == "MACRO_ETAPA_CENTRO" ]; then
            echo "  DO \$\$ CREATE VIEW ${cc}_${tb} with (security_invoker=on) AS (SELECT * FROM ${tb} WHERE ${col} IN (SELECT id FROM ${cc}_ctr) AND ${tb}.etapa IN (SELECT macro_etapa.id FROM macro_etapa WHERE macro_etapa.cuerpo IS NULL OR EXISTS (SELECT 1 FROM (SELECT unnest(string_to_array(macro_etapa.cuerpo, ' ')) AS palabra) macro_etapa_palabras WHERE macro_etapa_palabras.palabra IN (SELECT unnest(string_to_array(concurso.cuerpo, ' ')) FROM concurso WHERE concurso.id = '${c}')))); \$\$" >> "aux/config.load"
                else
            echo "  DO \$\$ CREATE VIEW ${cc}_${tb} with (security_invoker=on) AS (select * from ${tb} where ${col} in (select id from ${cc}_ctr)); \$\$" >> "aux/config.load"
                fi
                done
            done
        done
    fi
    for t in $(sqlite3 "aux/db.sqlite" "SELECT name FROM sqlite_schema WHERE type='table';"); do
            echo "  DO \$\$ ALTER TABLE $t ENABLE ROW LEVEL SECURITY; \$\$ " >> "aux/config.load"
            echo "  DO \$\$ ALTER TABLE $t FORCE ROW LEVEL SECURITY; \$\$ " >> "aux/config.load"
            echo "  DO \$\$ CREATE POLICY read_policy ON $t FOR SELECT USING (true); \$\$ " >> "aux/config.load"
    done
    echo ";" >> "aux/config.load"
    echo "$1: build remote"
    cat "aux/config.load"
    pgloader "aux/config.load"
} 

#for c in $(sqlite3 db.sqlite 'select id from concurso'); do
#    mk_schema $c
#done

mk_schema "public"
