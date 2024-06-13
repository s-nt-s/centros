#!/bin/bash
set -e

cd "$(dirname "$0")"

./get_db.sh "$1"
pushd ../py
python3 etapas.py
popd
./set_db.sh