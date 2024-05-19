import * as L from "leaflet";
import { SBMap } from "../../mapsidebar/leaflet-sidebar";
import { DBConcurso, Centro } from "../../lib/supabaseClient";
import { set_transpo_layer } from "./transporte"
import type { SchemaName } from "../../lib/supabaseClient";
import {
  getVal,
  Mail,
  dateToString,
  dedent,
  get_distance,
} from "../../lib/util";

const DONAR = import.meta.env.VITE_DONAR;
const id_concurso = (() => {
  const href = window.location.href.replace(/\/(index\.html)?$/, "");
  const path = href.split("/");
  const conc = path[path.length - 1];
  return conc as SchemaName;
})()!;

const myweb = (() => {
  let href = window.location.href;
  //href = href.substring(document.location.protocol.length + 2);
  if (href.endsWith("/")) href = href.substring(0, href.length - 1);
  return href;
})();

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
    let showen: Centro[] = [];

    this.all.forEach((c) => {
      const marca = MARCA.CENTRO[c.id];
      if (marca == MARCA.SELECCIONADO) {
        seleccionados.push(c);
        return;
      }
      if (marca == MARCA.DESCARTADO) {
        descartados.push(c);
        return;
      }
      if (this.ok.includes(c.id)) {
        showen.push(c);
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
      showen = showen.sort(cmp);
    }

    return {
      seleccionados: seleccionados,
      descartados: descartados,
      hidden: hidden,
      showen: showen,
      distancias: dist,
    };
  }
}

let CNT = new CentroManager();

const MARCA = Object.freeze({
  SELECCIONADO: 1,
  DESCARTADO: 2,
  CENTRO: {} as { [id: number]: number },
});

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
    const marca = MARCA.CENTRO[c.id];
    if (marca == MARCA.SELECCIONADO) {
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
  const invertir = getVal("#invertir") as boolean;
  const transporte = parseInt(getVal("#kms") as string);

  const ok: (HTMLInputElement|HTMLOptionElement)[] = [];
  const ko: (HTMLInputElement|HTMLOptionElement)[] = [];
  document.querySelectorAll("#settings input").forEach((i) => {
    if (!(i instanceof HTMLInputElement) || i.type != "checkbox") return;
    if (i.id=="invertir") return;
    (i.checked ? ok : ko).push(i);
  });
  document.querySelectorAll("#settings select").forEach((i) => {
    if (!(i instanceof HTMLSelectElement) || i.value.length == 0) return;
    Array.from(i.options).forEach(o=>{
      if (o.value.length == 0) return;
      (o.selected ? ok : ko).push(o);
    })
  });

  if (ko.length == 0 && isNaN(transporte)) {
    const ver = invertir ? "Ocultar" : "Ver";
    txt = txt + "Filtro: " + ver + " todos\n";
  } else if (ok.length == 0) {
    const ocultar = invertir ? "Ver" : "Ocultar";
    txt = txt + "Filtro: " + ocultar + " todos\n";
  } else {
    const ver = invertir ? "Ocultar" : "Ver";
    txt = txt + "Filtro => " + ver + " todos menos:";
    let lastLegend = "";
    ko.forEach((i) => {
      const legend = i
        .closest("fieldset")!
        .querySelector("legend")!
        .textContent!.trim()??"";
      const item = (i.title||i.textContent?.trim())??"";
      if (legend.length && item.startsWith(legend)) {
        txt = txt + "\n* " + item;
      } else {
        if (legend != lastLegend) txt = txt + "\n* " + legend + ":";
        txt = txt + "\n    * " + item;
      }
      lastLegend = legend;
    });
    if (!isNaN(transporte)) {
      txt =
        txt + "\n* Centros a más de " + transporte + " metros de una estación";
    }
    txt = txt + "\n";
  }
  let cols = [
    ["Centros seleccionados por mi", estadistica.seleccionados],
    ["Centros seleccionados por el filtro", estadistica.showen],
    ["Centros descartados por el filtro", estadistica.hidden],
    ["Centros descartados por mi", estadistica.descartados],
  ];
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
    });
    txt = txt + "\n";
  });
  txt = txt.replace(/<.*?>/g, "");
  txt = txt + "\n---\n" + myweb;
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
  let links = [];
  if (c.web) links.push(`<a href="http://${c.web}">Web</a>`);
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
  const marca = MARCA.CENTRO[c.id];
  let chk1 = "";
  let chk2 = "";
  let chk3 = "checked='checked'";
  if (marca == MARCA.SELECCIONADO) {
    chk1 = chk3;
    chk3 = "";
  } else if (marca == MARCA.DESCARTADO) {
    chk2 = chk3;
    chk3 = "";
  }
  html =
    html +
    `
    <p>
      <input value="${MARCA.SELECCIONADO}" class="marcar" type="radio" id="sel${c.id}" ${chk1}/> <label for="sel${c.id}">Marcar como seleccionado</label><br/>
      <input value="${MARCA.DESCARTADO}" class="marcar" type="radio" id="des${c.id}" ${chk2}/> <label for="des${c.id}">Marcar como descartado</label><br/>
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
      if (isNaN(marca)) delete MARCA.CENTRO[c.id];
      else MARCA.CENTRO[c.id] = marca;
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
    if (MARCA.CENTRO[centro.id] == MARCA.DESCARTADO) {
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

type idbool = { [id: string]: boolean };

function mk_filter() {
  const _get = (s: string) => Array.from(document.querySelectorAll(s));
  const invertir = getVal("#invertir") as boolean;
  const jornada = (getVal("#jornada", "")??"") as string;
  const innovacion = getVal("#innovacion", true) as boolean;
  const dificultad = getVal("#dificultad", true) as boolean;
  const excelencia = getVal("#excelencia", true) as boolean;
  const nocturno = getVal("#nocturno", true) as boolean;
  const transporte = parseInt(getVal("#kms") as string);
  const ok_tipo = _get("#tipos input").flatMap((i) => {
    return (getVal(i) as boolean) ? i.id.substring(1) : [];
  });
  const ko_idio = _get("#otros input[name=idioma]").flatMap((i) => {
    return (getVal(i) as boolean) ? [] : i.id;
  });
  const _isOk = (c: Centro) => {
    let i;
    if (!ok_tipo.includes(c.tp.id)) return false;
    for (i = 0; i < ko_idio.length; i++) {
      if (c.idiomas.includes(ko_idio[i])) return false;
    }
    if (c.excelencia && !excelencia) return false;
    if (c.nocturno && !nocturno) return false;
    if (c.innovacion && !innovacion) return false;
    if (c.dificultad && !dificultad) return false;
    if (jornada.length>0 && c.jornada.length>0 && c.jornada!=jornada) return false;
    if (!isNaN(transporte)) {
      for (const [km, ids] of DST) if (km>transporte && ids.includes(c.id)) return false;
    }
    return true;
  };
  const isOk = (c: Centro) => {
    if (MARCA.CENTRO[c.id] == MARCA.SELECCIONADO) return true;
    let b = _isOk(c);
    if (invertir) b = !b;
    //if (!b) console.log(c.id, "descartado");
    return b;
  };
  return isOk;
}

function setMark(e: L.LeafletMouseEvent) {
  window.MAP.removeLayerById("marker");
  const options: L.CircleOptions = {
    radius: 10,
    fillColor: "yellow",
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  console.log(e.latlng.lat + "," + e.latlng.lng);
  const cursorMarker = L.circleMarker(e.latlng, options);
  window.MAP.addIdLayer("marker", cursorMarker);
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
      estadistica.showen,
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
  const onChange = (qr:string, fnc: EventListenerOrEventListenerObject) => {
    document.querySelectorAll(qr).forEach((i) => {
      const e = i.getAttribute("type") == "checkbox" ? "click" : "change";
      i.addEventListener(e, fnc);
    });
  }
  onChange("#settings input, #settings select", ()=>updateCentros(false));
  onChange("#transporte input", set_transpo_layer);
});
