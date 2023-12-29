import "./map.css";

import { SBMap } from "../../mapsidebar/leaflet-sidebar";
import { dwnConcurso } from './centros'
import { set_transpo_layer } from './transporte'


document.addEventListener("DOMContentLoaded", function () {
  window.MAP = new SBMap("map", "sidebar");
  window.MAP.setView([40.4165, -3.70256], 12);
  dwnConcurso();
  set_transpo_layer();
});
