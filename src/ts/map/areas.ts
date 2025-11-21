export function set_area_layer() {
  const id = "areas";
  window.MAP.removeLayerById(id);
  if (document.querySelectorAll("#areas:checked").length==0) return;
  window.MAP.addGeoJson(
    "https://raw.githubusercontent.com/s-nt-s/centros-db/refs/heads/main/out/areas.geojson",
    {
        id: id,
        style: function (f) {
            return {
              color: f!.properties!.fill,
              weight: 3,
              opacity: 0.7,
              lineJoin: "round",
            };
        }
    }
  )
}
