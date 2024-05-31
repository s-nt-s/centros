#!/bin/bash
set -e

cd "$(dirname "$0")"

./get_db.sh "$1"
./set_db.sh