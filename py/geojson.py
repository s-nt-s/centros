from core.dblite import DBLite
import argparse
import logging
import re
from typing import Dict, Set, Tuple
import geopandas as gpd
from shapely.geometry import Point
import json
from collections import defaultdict
from types import MappingProxyType
from shapely import to_geojson


parser = argparse.ArgumentParser(
    description='Crear ficheros GeoJSON',
)
parser.add_argument(
    '--db', type=str, default="../db/db.sqlite"
)

ARG = parser.parse_args()

re_sp = re.compile(r"\s+")

open("etapas.log", "w").close()
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(name)s - %(levelname)s - %(message)s',
    datefmt='%d-%m-%Y %H:%M:%S',
    handlers=[
        logging.FileHandler("etapas.log"),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)


def get_points():
    points: Dict[str, Set[Tuple[float, float]]] = defaultdict(set)
    with DBLite(ARG.db, readonly=True) as db:
        for area in db.to_tuple("select distinct area from centro"):
            for lat, lon in db.select("""
                select distinct latitud, longitud from centro where area = ? and
                (latitud is not null and latitud!=0) and
                (longitud is not null and longitud!=0) and
                id in (select centro from CONCURSO_ANEXO_CENTRO)
                """,
                area
            ):
                points[area].add((lon, lat))
    data: Dict[str, Tuple[Point, ...]] = {}
    for area, pts in points.items():
        data[area] = tuple(map(Point, sorted(pts)))
    return MappingProxyType(data)


POINTS = get_points()
COLORS = {
    "C": "#ffb469",
    "N": "#e41a1c",
    "S": "#377eb8",
    "E": "#4daf4a",
    "O": "#984ea3"
}
NAMES = {
    "C": "Centro",
    "N": "Norte",
    "S": "Sur",
    "E": "Este",
    "O": "Oeste"
}

features = []
for k, points in POINTS.items():
    multipoint = gpd.GeoSeries(points).union_all(method="disjoint_subset")
    poly = multipoint.convex_hull

    # Centroid
    centroid = poly.centroid

    # Feature del polígono
    features.append({
        "type": "Feature",
        "geometry": json.loads(to_geojson(poly)),
        "properties": {
            "name": NAMES[k],
            "fill": COLORS[k],
            "stroke": COLORS[k],
        }
    })

    # Feature del texto/etiqueta centrada
    features.append({
        "type": "Feature",
        "geometry": json.loads(to_geojson(centroid)),
        "properties": {
            "name": k + "_label",
            "text": NAMES[k]
        }
    })

    
geo = {
    "type": "FeatureCollection",
    "features": features
}

with open("dat.geojson", "w", encoding="utf-8") as f:
    json.dump(geo, f, ensure_ascii=False, indent=2)