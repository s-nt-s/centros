import * as L from "leaflet";
import { SBMap } from "../../mapsidebar/leaflet-sidebar";
import { DBConcurso, Centro } from "../../lib/supabaseClient";
import { set_transpo_layer } from "./transporte"
import { set_area_layer } from './areas'
import type { SchemaName } from "../../lib/supabaseClient";
import { State } from "../../lib/state";

import {
  getVal,
  Mail,
  dateToString,
  dedent,
  get_distance,
} from "../../lib/util";

const DONAR = import.meta.env.VITE_DONAR;
const id_concurso = (() => {
  const href = window.location.pathname.replace(/\/(index\.html)?$/, "");
  const path = href.split("/");
  const conc = path[path.length - 1];
  return conc as SchemaName;
})()!;

const myweb = (() => {
  let href = window.location.origin + window.location.pathname;
  //href = href.substring(document.location.protocol.length + 2);
  if (href.endsWith("/")) href = href.substring(0, href.length - 1);
  return href;
})();

const _get = (s: string) => Array.from(document.querySelectorAll(s));

const DB = new DBConcurso();
const DST = new Map<number, number[]>();

const MSG_MAIL = Object.freeze({
  subject: "Consulta en relación al concurso de traslados",
  body: dedent(`
  Buenas tardes
  
  Soy ... y quería preguntarles ...
  
  Muchas gracias.
  `),
});

class CentroManager {
  private _c: { [id: number]: Centro } = {};
  private _ok: number[] = [];
  private _ko: number[] = [];
  get all() {
    return Object.values(this._c);
  }
  get ok() {
    return this._ok;
  }
  get ko() {
    return this._ko;
  }
  get_distancias() {
    const cursorMarker = window.MAP.idlayer.get("marker");
    if (!(cursorMarker instanceof L.CircleMarker)) return null;
    const ll = cursorMarker.getLatLng();
    const distance = Object.fromEntries(
      this.all.map((c) => {
        const d = get_distance(c.latitud, c.longitud, ll.lat, ll.lng);
        return [c.id, d];
      })
    ) as {[id:number]: number};
    return {
      latitud: ll.lat,
      longitud: ll.lng,
      centro: distance,
    };
  }
  get_ok() {
    return this._ok.map((id) => this.get(id));
  }
  get_ko() {
    return this._ko.map((id) => this.get(id));
  }
  filter() {
    const fnc = mk_filter();
    this._ok = [];
    this._ko = [];
    this.all.forEach((c) => (fnc(c) ? this._ok : this._ko).push(c.id));
  }
  get(id: number) {
    const c = this._c[id];
    if (c == null) throw id + " not fund";
    return c;
  }
  set(centros: Centro[]) {
    const latlon = new Set();
    this._c = Object.fromEntries(
      centros.map((c) => {
        const ll = c.latlon;
        while (latlon.has(c.latlon.toString())) {
          c.longitud = c.longitud + 0.0001;
        }
        if (ll[1] != c.longitud)
          console.log(c.id, `latlon ${ll} -> ${c.latlon}`);
        latlon.add(c.latlon.toString());
        return [c.id, c];
      })
    );
  }

  get_estadistica() {
    let seleccionados: Centro[] = [];
    let descartados: Centro[] = [];
    let hidden: Centro[] = [];
    let shown: Centro[] = [];

    this.all.forEach((c) => {
      const marca = State.getState().getMarca(c.id);
      if (marca == State.SELECCIONADO) {
        seleccionados.push(c);
        return;
      }
      if (marca == State.DESCARTADO) {
        descartados.push(c);
        return;
      }
      if (this.ok.includes(c.id)) {
        shown.push(c);
        return;
      }
      if (this.ko.includes(c.id)) {
        hidden.push(c);
        return;
      }
    });

    const dist = this.get_distancias();
    if (dist != null) {
      const d = dist.centro;
      const cmp = (c1: Centro, c2: Centro) => d[c1.id] - d[c2.id];
      seleccionados = seleccionados.sort(cmp);
      descartados = descartados.sort(cmp);
      hidden = hidden.sort(cmp);
      shown = shown.sort(cmp);
    }

    return {
      seleccionados: seleccionados,
      descartados: descartados,
      hidden: hidden,
      shown: shown,
      distancias: dist,
    };
  }
}

let CNT = new CentroManager();

function get_icon(c: Centro) {
  const color = (() => {
    if (c.dificultad) return "red";
    if (c.nocturno) return "blue";
    return "green";
  })();
  const especial = [
    c.aleman,
    c.ingles,
    c.frances,
    c.innovacion,
    c.excelencia,
  ].includes(true);
  const url = (() => {
    const marca = State.getState().getMarca(c.id);
    if (marca == State.SELECCIONADO) {
      if (color == "green")
        return "http://maps.google.com/mapfiles/ms/micons/grn-pushpin.png";
      return `http://maps.google.com/mapfiles/ms/micons/${color}-pushpin.png`;
    }
    if (especial)
      return `http://maps.google.com/mapfiles/ms/micons/${color}-dot.png`;
    return `https://maps.google.com/mapfiles/ms/micons/${color}.png`;
  })();
  return {
    color: color,
    especial: especial,
    url: url,
  };
}

export function dwnConcurso() {
  DB.get_concurso_centros(id_concurso).then((centros) => {
    CNT.set(centros);
    updateCentros(true);
    return centros;
  });
  const st = State.getState();
  const cMarker = st.getCircleMarker();
  if (cMarker != null) setMark(cMarker);
  window.MAP.on("click", function (this: SBMap, e) {
    if (!e || !e.originalEvent || !e.originalEvent.ctrlKey) return;
    setMark.apply(this, [e]);
  }).on("contextmenu", function (this: SBMap, e) {
    setMark.apply(this, [e]);
  });
}

function updateCentros(centrar: boolean|undefined) {
  if (DST.size==0) {
    const km = getVal("#kms");
    if (typeof km == "string" && !isNaN(parseFloat(km))) {
      fetch(myweb+"/distancias.json").then(r => r.json()).then((data:{[id:string]:number[]})=>{
        Object.entries(data).forEach(([k, v])=>DST.set(Number(k), v));
        updateCentros(centrar);
      })
      return;
    }
  }
  CNT.filter();
  document.getElementById("count")!.textContent = CNT.ok.length.toString();
  addMailLink();
  addCentrosLayer();
  updateList();
  if (centrar === true && !window.MAP.center()) {
    window.MAP.setView([40.4165, -3.70256], 12);
  }
  const l = document.getElementById('loading-overlay');
  if (l != null) l.remove();
}

function addMailLink() {
  const a = document.getElementById("maillink") as HTMLAnchorElement;
  const mails = [...new Set(CNT.get_ok().flatMap((c) => c.emails))].sort();
  if (mails.length == 0) {
    a.href = "#";
    a.setAttribute("onclick", "return false");
    a.setAttribute("disabled", "disabled");
    a.title = "No se visualiza ningún centro con correo electrónico";
    return;
  }
  a.removeAttribute("disabled");
  a.removeAttribute("onclick");
  a.href = Mail.mail_tobcc(mails, MSG_MAIL.subject, MSG_MAIL.body);
}



function dwnTxtCentros(this: HTMLAnchorElement) {
  const estadistica = CNT.get_estadistica();
  let date = dateToString(new Date());
  this.download = date + "_centros.txt";
  let txt = "Fecha: " + date + "\n";
  if (estadistica.distancias != null) {
    txt =
      txt +
      `Punto de refrencia: ${estadistica.distancias.latitud},${estadistica.distancias.longitud}\n`;
  }

  const filtro = (()=>{
    const st = State.getState();
    const invertir = st.invertir.get() === true;
    const tipos = (invertir?st.tipo.getKoInputs():st.tipo.getOkInputs()).map(i=>i.title);
    if (tipos.length == 0) return "Ocultar todos";
    const kms = st.kms.get();
    const filtro = [];
    const accesibilidad = st.accesible.get() === (!invertir);
    if (accesibilidad) {
      filtro.push("* Centros sin barreras arquitectónicas");
    }
    if (kms!=null) {
      filtro.push("* Centros a "+(invertir?"más":"menos")+" de " + kms + " metros de una estación");
    }
    _get("#settings select").forEach(s=>{
      if (!(s instanceof HTMLSelectElement) || s.value.trim().length == 0) return [];
      const opts = Array.from(s.options).filter(o=>o.value.trim().length > 0);
      const label = s.getAttribute("data-label")||"";
      const opt = s.selectedOptions[0];
      if (opts.length == 2) {
        const o = invertir?opts.filter(o=>!o.selected)[0]:opt;
        filtro.push("* " +label+ o.textContent);
        return;
      }
      if (invertir) {
        filtro.push("* " +label+"Cualquiera menos: " +opt.textContent);
        return 
      }
      filtro.push("* " +label+opt.textContent);
    });
    filtro.push("* Tipos de centro:");
    tipos.forEach(t=>{
      filtro.push("    * " + t);
    })
    let excepto = true;
    _get("fieldset.uncheck_to_hide").forEach(f=>{
      const inputs = Array.from(f.querySelectorAll("input:not(.check_to_hide)")).flatMap(i=>{
        if (!(i instanceof HTMLInputElement)) return [];
        let isChecked = i.checked;
        if (invertir) isChecked = !isChecked;
        if (isChecked) return [];
        return (i.getAttribute("data-label")||i.title||i.textContent?.trim())??"";
      })
      if (inputs.length == 0) return;
      if (excepto) {
        excepto = false;
        filtro.push("\nExcepto aquellos centros que cumplan:");
      }
      //const legend = f.querySelector("legend")!.textContent!.trim()??"";
      //filtro.push("* "+legend);
      inputs.forEach(i=>{
        filtro.push("* "+i);
      })
    })
    return "\n"+filtro.join("\n").trim();
  })();

  txt = txt + "\nFiltro: " + filtro + "\n";
  let cols = [
    ["Centros seleccionados por mi", estadistica.seleccionados],
    ["Centros seleccionados por el filtro", estadistica.shown],
    ["Centros descartados por el filtro", estadistica.hidden],
    ["Centros descartados por mi", estadistica.descartados],
  ];
  const datos = Array.from(document.querySelectorAll("#dwn_datos input[id]:enabled:checked")).map(i=>i.id.substring(4));
  cols.forEach((item) => {
    let col = item[1] as Centro[];
    if (col.length == 0) return;
    txt = txt + "\n" + item[0] + ":\n";
    col.forEach((c) => {
      txt = txt + `\n* ${c.id} ${c.tp.abr} ${c.nombre}`;
      if (estadistica.distancias != null) {
        const dis = (() => {
          const dis_to_mrk = estadistica.distancias.centro[c.id];
          if (dis_to_mrk <= 1) return Math.round(dis_to_mrk * 1000) + "m";
          const d = Math.round(dis_to_mrk * 100) / 100 + "km";
          return d.replace(".", ",");
        })();
        txt = txt + ` (${dis})`;
      }
      datos.forEach(d=>{
        let v = c.getAttribute(d as keyof Centro);
        if (Array.isArray(v) && v.length>0) v = v.join(" ");
        if (typeof v != "string" || v.length==0) return;
        txt = txt + `\n  ${v}`;
      })
    });
    txt = txt + "\n";
  });
  txt = txt.replace(/<.*?>/g, "");
  txt = txt + "\n---\n" + document.location.href;
  txt = txt + "\n¿Te hay sido útil?. Considera donar para mantener este proyecto\n"+DONAR;
  txt = txt.trim();
  txt = txt.replace(/\n/g, "\r\n");
  this.href = "data:text/plain;charset=utf-8," + encodeURIComponent(txt);
}

function getPopUp(c: Centro) {
  let body = [
    `Código: <b>${c.id}</b>`,
    `<a href="geo:${c.latitud},${c.longitud}" title="Coordenadas: ${c.latitud}, ${c.longitud}">${c.direccion}</a>`,
  ];
  let links = c.web.map(lk=>{
    if (lk.match(/www\.madrid\.es/)) return `<a href="${lk}">madrid.es</a>`;
    return `<a href="${lk}">Web</a>`;
  });
  if (c.emails.length) {
    const mailto = Mail.mail_tobcc(c.emails, MSG_MAIL.subject, MSG_MAIL.body);
    links.push(`<a href='${mailto}' title="${c.emails.join(" ")}">Mail</a>`);
  }
  c.telefonos.forEach((t) => {
    if (t.length == 9) {
      if (t.startsWith("91")) t = t.replace(/(..)(...)(..)(..)/, "$1 $2 $3 $4");
      else t = t.replace(/(...)(...)(...)/, "$1 $2 $3");
    }
    links.push(`<a href="tel:${t}" title="Teléfono: ${t}">${t}</a>`);
  });
  body.push(links.join(" - "));

  const ficha = import.meta.env.VITE_FICHA + c.id;
  let html = `
  <h1><a href="${ficha}">${c.abr_nombre}</a></h1>
  <p>${body.join("<br/>")}</p>
  `;

  body = [];
  if (c.accesible === true) body.push('<a title="¡OJO! Función experimental, puede inducir a error" class="acc_ico" href="https://github.com/s-nt-s/centros/issues/9">♿ Accesible</a>');
  if (c.accesible === false) body.push('<a title="¡OJO! Función experimental, puede inducir a error" class="acc_ico" href="https://github.com/s-nt-s/centros/issues/9">😞 No accesible</a>');
  if (c.dificultad) body.push("<b>Centro de especial dificultad</b>");
  if (c.nocturno) body.push("<b>Nocturno</b>");
  const tags = [];
  if (c.excelencia) tags.push("<b>&#35;excelencia</b>");
  if (c.innovacion) tags.push("<b>&#35;tecnológico</b>");
  c.idiomas.forEach(function (i) {
    const n = document.querySelector(
      "#otros input[name=idioma][id=" + i + "]"
    )!;
    const t = n.getAttribute("title")!.trim();
    tags.push(`<b class="tag_${i} flag" title="${t}">&#35;${i}</b>`);
  });
  if (c.jornada.length) {
    const o =document.querySelector("#jornada option[value='"+c.jornada+"']");
    if (o != null) tags.push(o.textContent?.trim())
  }
  if (c.fpdual) tags.push("FP Dual");
  if (tags.length) {
    body.push("\n" + tags.join(", "));
  }
  if (body.length) {
    html = html + `<p>${body.join("<br/>")}</p>`;
  }
  /*
  html = html + "<p>Estación más cercana a ";
  if (c.min_distance<1000) {
    html = html + Math.round(c.min_distance) + " metros</p>"
  } else {
    let km = Math.round(c.min_distance / 100)/10;
    km = km.toString().replace(".", ",");
    html = html + km + " kms</p>"
  }
  */
  const marca = State.getState().getMarca(c.id);
  let chk1 = "";
  let chk2 = "";
  let chk3 = "checked='checked'";
  if (marca == State.SELECCIONADO) {
    chk1 = chk3;
    chk3 = "";
  } else if (marca == State.DESCARTADO) {
    chk2 = chk3;
    chk3 = "";
  }
  html =
    html +
    `
    <p>
      <input value="${State.SELECCIONADO}" class="marcar" type="radio" id="sel${c.id}" ${chk1}/> <label for="sel${c.id}">Marcar como seleccionado</label><br/>
      <input value="${State.DESCARTADO}" class="marcar" type="radio" id="des${c.id}" ${chk2}/> <label for="des${c.id}">Marcar como descartado</label><br/>
      <input value="" class="marcar" type="radio" id="no${c.id}" ${chk3}/> <label for="no${c.id}">No marcar</label>
    </p>
  `;
  html = html.trim();
  const div = document.createElement("div");
  div.innerHTML = html;
  div.querySelectorAll("input[type=radio]").forEach((e) =>
    e.addEventListener("change", function (this: HTMLInputElement) {
      if (!this.checked) return;
      const marca = parseInt(this.value);
      if (isNaN(marca)) State.getState().setMarca(c.id, null);
      else State.getState().setMarca(c.id, marca);
      setCentroMarker(c, true);
      updateList();
    })
  );
  return div;
}

function setCentroMarker(centro:Centro, refresh: boolean = false) {
  const layer_id = "centro_"+centro.id;
  const layer_old = window.MAP.idlayer.get(layer_id);
  if (layer_old!=null) {
    if (!refresh) return layer_old;
    window.MAP.removeLayer(layer_old);
    window.MAP.idlayer.delete(layer_id);
  }
  const icon = get_icon(centro);
  const latlng: L.LatLng = new L.LatLng(centro.latitud, centro.longitud);
  const marker = (()=>{
    if (State.getState().getMarca(centro.id) === State.DESCARTADO) {
      const options: L.CircleOptions = {
        radius: 5,
        fill: true,
        fillColor: icon.color,
        fillOpacity: 0.8,
        color: "black",
        opacity: 1,
        weight: 1
      };
      return L.circleMarker(latlng, options);
    }
    const conf = {
      icon: L.icon({
        iconUrl: icon.url,
        iconSize: [32, 32],
      }),
    };
    return L.marker(latlng, conf);
  })();
  marker.bindPopup(() => getPopUp(centro));
  marker.bindTooltip(centro.tp.abr + " " + centro.nombre);
  window.MAP.addIdLayer(layer_id, marker);
}

function addCentrosLayer() {
  CNT.get_ok().forEach((c) => {
    setCentroMarker(c);
  });
  CNT.ko.forEach((id) => {
    window.MAP.removeLayerById("centro_"+id)
  });
}

function mk_filter() {
  const st = State.getState();
  const ok_tipo = st.tipo.get();
  const ko_idio = st.idioma.getKo();
  const jornada = st.jornada.get();
  const etapa = st.etapa.get();
  const fpdual = st.fpdual.get();
  const transporte = st.kms.get();
  const invertir = st.invertir.get();
  const _isOk = (c: Centro) => {
    let i;
    if (!ok_tipo.includes(c.tp.id)) return false;
    for (i = 0; i < ko_idio.length; i++) {
      if (c.idiomas.includes(ko_idio[i])) return false;
    }
    if (st.excelencia.get() === false && c.excelencia) return false;
    if (st.nocturno.get() === false && c.nocturno) return false;
    if (st.accesible.get() === true && !c.accesible) return false;
    if (st.innovacion.get() === false && c.innovacion) return false;
    if (st.dificultad.get() === false &&c.dificultad) return false;
    if (jornada != null && c.jornada!=jornada) return false;
    if (etapa != null && !c.hasEtapa(etapa)) return false;
    if (fpdual != null){
      if (fpdual == "con" && c.fpdual == false) return false;
      if (fpdual == "sin" && c.fpdual == true) return false;
    }
    if (transporte != null) {
      for (const [km, ids] of DST) if (km>transporte && ids.includes(c.id)) return false;
    }
    return true;
  };
  const isOk = (c: Centro) => {
    if (State.getState().getMarca(c.id) === State.SELECCIONADO) return true;
    let b = _isOk(c);
    if (invertir) b = !b;
    //if (!b) console.log(c.id, "descartado");
    return b;
  };
  return isOk;
}

function setMark(e: L.LeafletMouseEvent | [number, number] | null) {
  const latlng = (() => {
    if (e == null) return null;
    if (Array.isArray(e)) return new L.LatLng(e[0], e[1]);
    return e.latlng
  })();
  window.MAP.removeLayerById("marker");
  if (latlng == null) {
    State.getState().setCircleMarker(null, null);
  } else {
    const options: L.CircleOptions = {
      radius: 10,
      fillColor: "yellow",
      color: "black",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    State.getState().setCircleMarker(latlng.lat, latlng.lng);
    console.log(latlng.lat + "," + latlng.lng);
    const cursorMarker = L.circleMarker(latlng, options);
    window.MAP.addIdLayer("marker", cursorMarker);
  }
  updateList();
}

function updateList() {
  const estadistica = CNT.get_estadistica();
  const set_html = (id: string, html:string) =>
    (document.getElementById(id)!.innerHTML = html);
  set_html(
    "cSel",
    list_centros(
      "Aún no has seleccionado ningún centro",
      estadistica.seleccionados,
      estadistica.distancias?.centro
    )
  );
  set_html(
    "cShw",
    list_centros(
      "Tu filtro oculta todos los centros",
      estadistica.shown,
      estadistica.distancias?.centro
    )
  );
  set_html(
    "cHdn",
    list_centros(
      "Tu filtro muestra todos los centros",
      estadistica.hidden,
      estadistica.distancias?.centro
    )
  );
  set_html(
    "cDsc",
    list_centros(
      "Aún no has descartado ningún centro",
      estadistica.descartados,
      estadistica.distancias?.centro
    )
  );
  document.querySelectorAll("#cSel, #cShw, #cHdn, #cDsc").forEach(h=>{
    const count = h.querySelectorAll("li").length;
    const h2 = h.previousElementSibling;
    if (h2==null || h2.tagName!="H2") return;
    const small = h2.querySelector("small");
    if (small!=null) small.textContent=`(${count})`;
    else h2.innerHTML = h2.innerHTML+=` <small>(${count})</small>`;
  })
  /*
  set_html("#cSel,#cShw,#cHdn,#cDsc").each(function () {
    let t = $(this);
    let count = t.find("li").length;
    let h2 = t.prev("h2");
    if (count == 0) {
      h2.find("small").remove();
    } else {
      let small = h2.find("small");
      if (small.length) small.text("(" + count + ")");
      else h2.append(" <small>(" + count + ")</small>");
    }
  });
  */
}

function list_centros(
  msg: string,
  centros: Centro[],
  distancia: { [id: number]: number } | undefined
) {
  if (centros.length == 0) {
    return "<p>" + msg + "</p>";
  }
  const mails: Set<string> = new Set();
  let html = "<ul class='listCentros'>";
  let lis: string[] = [];
  centros.forEach(function (c) {
    c.emails.forEach((m) => mails.add(m));
    let distance = "";
    let d = 0;
    if (distancia != undefined) {
      let title = "";
      d = distancia[c.id];
      if (d > 1) {
        distance = Math.round(d) + "km";
        title = Math.round(d * 100) / 100 + "km";
        title = title.replace(".", ",");
        title = " title='" + title + "'";
      } else if (d <= 1) {
        distance = Math.round(d * 1000) + "m";
      }
      distance = ` <small${title}>(${distance})</small>`;
    }
    const icon = get_icon(c);
    lis.push(`
      <li><img src="${icon.url}" onclick="window.MAP.flyTo([${c.latitud}, ${c.longitud}], 15);"/><span>${c.id} ${c.abr_nombre}${distance}</span></li>
    `);
  });
  html = html + lis.join("");
  html = html + "</ul>";
  if (mails.size) {
    const arr = [...mails].sort();
    const mailto = Mail.mail_tobcc(arr, MSG_MAIL.subject, MSG_MAIL.body);
    html =
      html +
      `
    <p><a href="${mailto}">Pincha aquí para mandar un email a todos los centros de esta lista que tienen correo electrónico</a></p>
    `;
  }
  return html;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("download")!.addEventListener("click", dwnTxtCentros);
  const st = State.getState();
  st.onFiltro(()=>updateCentros(false));
  st.onTransporte(set_transpo_layer);
  st.onAreas(set_area_layer);
});
