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

sqlite3 db.sqlite "SELECT 'DROP VIEW ' || name || ';' FROM sqlite_master WHERE type='view'; SELECT sql || ';' FROM sqlite_master WHERE type='view'" > view.sql
sqlite3 db.sqlite < filter.sql
sqlite3 db.sqlite < view.sql