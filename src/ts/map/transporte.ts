import * as L from "leaflet";
import transporte from "@/assets/geo/transporte.geojson?url";
import { yJoin, getVal } from "../../lib/util"

const isChecked = (qr:string) => getVal(qr) as boolean;

export function set_transpo_layer() {
  const id = "transporte";
  window.MAP.removeLayerById(id);
  if (document.querySelectorAll("#transporte fieldset input:checked").length==0) return;
  window.MAP.addGeoJson(transporte, {
    id: id,
    style: function (f) {
      return {
        color: f!.properties!.color,
        weight: 3,
        opacity: 0.7,
        lineJoin: "round",
      };
    },
    pointToLayer: function (f, latlng) {
      const options = {
        radius: 4,
        fillColor: "black",
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.5,
      };
      return L.circleMarker(latlng, options);
    },
    onEachFeature: function (f, l) {
      const p = f.properties!;
      if (f.geometry.type == "LineString") {
        let tp = p.tipo.replace("_", " ");
        tp = tp.charAt(0).toUpperCase() + tp.slice(1);
        l.bindPopup("Linea " + p.linea + " de " + tp);
      } else if (f.geometry.type == "Point") {
        const lns = p.lineas.map((ln:[string, number])=>ln[1]);
        const txt = "Linea"+(lns.length == 1?'':'s')+" "+yJoin(lns);
        const body = `<h1>${p.nombre}</h1><p>${txt}</p>`;
        l.bindPopup(body);
      }
    },
    filter: function (f) {
      const p = f.properties!;
      if (f.geometry.type == "LineString") return isChecked("#" + p.tipo + "_" + p.linea);
      if (f.geometry.type == "Point") {
        const isEstaciones = getVal("#estaciones") as boolean;
        if (!isEstaciones) return false;
        let ln, id;
        for (let i = 0; i < p.lineas.length; i++) {
          ln = p.lineas[i];
          id = "#" + ln[0] + "_" + ln[1];
          if (isChecked(id)) return true;
        }
      }
      return false;
    },
  });
}
