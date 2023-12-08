#!/bin/bash
set -e

cd "$(dirname "$0")"

rm -f db.sqlite
curl -s https://raw.githubusercontent.com/s-nt-s/centros-db/main/out/db.sql | sqlite3 db.sqlite
sqlite3 db.sqlite < filter.sql
pgloader config.load