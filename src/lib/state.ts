import { InputBoolean, InputGroupBoolean, SelectNumber, InputNumber, SelectString, FormField } from "./form";
import { decodeArray, encodeArray } from "./query_number";
import { Centro } from "./supabaseClient";
import { get_distance } from "./util";
import type { Distancias, EstadoCentros } from './tp'
import * as L from "leaflet";

const DELTA=28000000;


export class State {
    public static readonly SELECCIONADO = 1;
    public static readonly DESCARTADO = 2;
    private readonly __marca = new Map<number, number>();
    private static __instance: State | null = null;
    public readonly tipo = new InputGroupBoolean("#tipos input", [], "", "t");
    public readonly kms = new InputNumber("#kms", null, "km");
    public readonly jornada = new SelectString("#jornada", null, 'j');
    public readonly etapa = new SelectNumber("#etapa", null, 'e');
    public readonly fpdual = new SelectString("#fpdual", null, 'fp');
    public readonly nocturno = new InputBoolean("#nocturno", true, 'noc');
    public readonly dificultad = new InputBoolean("#dificultad", true, 'dif');
    public readonly excelencia = new InputBoolean("#excelencia", true, 'exc');
    public readonly innovacion = new InputBoolean("#innovacion", true, 'inn');
    public readonly idioma = new InputGroupBoolean("input[name='idioma']", [], "");
    public readonly accesible = new InputBoolean("#accesible", false, "acc");
    public readonly invertir = new InputBoolean("#invertir", false, "inv");
    public readonly areas = new InputBoolean("#areas", false, "are");
    public readonly estaciones = new InputBoolean("#estaciones", false, "e");
    public readonly transporte = new InputGroupBoolean(".metro input, .cercanias input, .metro_ligero input", [], "t");
    private __circleMarker: null|[number, number] = null;
    private readonly __onchange: EventListener[] = [];
    private readonly __centros = new Map<number, Centro>();
    private __ok: number[] = [];
    private __ko: number[] = [];

    static getState() {
        if (State.__instance == null) {
            State.__instance = new State();
            State.__instance.__init();
        }
        return State.__instance;
    }

    public getCircleMarker() {
        return this.__circleMarker;
    }

    public setCircleMarker(lat: number| null, lng: number | null) {
        if (lat == null || lng == null) {
            if (this.__circleMarker == null) return;
            this.__circleMarker = null;
        } else {
            if (this.__circleMarker!=null && this.__circleMarker[0] == lat && this.__circleMarker[1] == lng) return false;
            this.__circleMarker = [lat, lng];
        }
        this.toQuerty();
        return true;
    }

    public setMarca(id: number, val:number|null) {
        if (val === null) {
            if (!this.__marca.has(id)) return false;
            this.__marca.delete(id)
        } else {
            if (this.__marca.get(id) === val) return false;
            this.__marca.set(id, val)
        }
        this.toQuerty();
        return true;
    }

    public getMarca(id: number) {
        return this.__marca.get(id)
    }

    private __getImputs() {
        const arr: FormField<any, any>[] = [];
        for (const [k, v] of Object.entries(this)) {
            if (v instanceof FormField) {
                arr.push(v)
            }
        }
        return arr;
    }

    private __init() {
        this.__addEventListener(
            () => {this.toQuerty()},
            ...this.__getImputs().flatMap(i=>i.node),
        );
        window.addEventListener(
            "popstate",
            () => {this.toForm()}
        );
        this.toForm()
    }

    toForm() {
        this.__getImputs().forEach(i=>i.reset());
        this.__marca.clear()
        const old = this.getQuerty()
        const qr = new URLSearchParams((new URL(document.location.href)).search);
        const gt = (k:string) => (qr.get(k)??"").split(',').flatMap((i) => {return (i=i.trim()).length?i:[]});
        [
            this.jornada,
            this.etapa,
            this.kms,
            this.fpdual
        ].forEach((i) => {
            const v = qr.get(i.qr);
            if(v!=null) return i.set(v);
        });
        const qr_trans = gt(this.transporte.qr).flatMap((i) => {
            if (i == 'e') {
                this.estaciones.set(true);
                return [];
            }
            if (i.match(/^\d+$/)) return `metro_${i}`;
            if (i.match(/^C\d+$/)) return `cercanias_${i}`; 
            if (i.match(/^ML\d+$/)) return `metro_ligero_${i}`; 
            return [];
        });
        if (qr_trans.length) {
            this.transporte.set(qr_trans);
        }
        const center_filter = (marca: number) => {
            return (i: string) => {
                const m = i.match(/^ctr(.+)$/);
                if (m == null) return true;
                decodeArray(m[1]).forEach(c=>this.__marca.set(c+DELTA, marca));
                return false;
            }
        }
        const ko = gt('ko').filter(center_filter(State.DESCARTADO));
        const ok = gt('ok').filter(center_filter(State.SELECCIONADO));
        [
            this.nocturno,
            this.dificultad,
            this.excelencia,
            this.innovacion,
            this.accesible,
            this.invertir,
            this.areas,
        ].forEach((i) => {
            if (ko.includes(i.qr)) i.set(false);
            if (ok.includes(i.qr)) i.set(true);
        })
        this.tipo.set(this.tipo.getOptions().filter(i=>!ko.includes(i)));
        this.idioma.set(this.idioma.getOptions().filter(i=>!ko.includes(i)));
        const ll = gt("ll").flatMap(i=>{
            const x = parseFloat(i);
            return isNaN(x)?[]:x;
        });
        this.__circleMarker = ll.length==2?[ll[0],ll[1]]:null;
        const nw = this.getQuerty()
        if (old == nw) return;
        this.__onchange.forEach(f=>f(new Event("change")));
        
    }
    getQuerty() {
        const qr: string[] = [];
        const ok: string[] = [];
        const ko: string[] = [];
        [
            this.jornada,
            this.etapa,
            this.kms,
            this.fpdual
        ].forEach((i) => {
            const v = i.get()
            if(v!=null) return qr.push(`${i.qr}=${v}`);
        });
        let qr_trans = this.transporte.get().map(x=>x.replace(/.*_/, "")).join(',');
        if (qr_trans.length) {
            if (this.estaciones.get() === true) qr_trans = `${this.estaciones.qr},${qr_trans}`;
            qr.push(`${this.transporte.qr}=${qr_trans}`);
        }
        [
            ...this.tipo.getKo(),
            ...this.idioma.getKo()
        ].forEach(t=>{
            ko.push(t);
        });
        [
            this.nocturno,
            this.dificultad,
            this.excelencia,
            this.innovacion
        ].forEach((i) => {
            if(i.get() === false) ko.push(i.qr);
        });
        [
            this.accesible,
            this.invertir,
            this.areas,
        ].forEach((i) => {
            if(i.get() === true) ok.push(i.qr);
        })
        const ok_centro: number[] = [];
        const ko_centro: number[] = [];
        this.__marca.forEach((v, k) => {
            if (v === State.SELECCIONADO) ok_centro.push(k-DELTA);
            if (v === State.DESCARTADO) ko_centro.push(k-DELTA);
        });
        if (ok_centro.length) ok.push("ctr"+encodeArray(ok_centro));
        if (ko_centro.length) ko.push("ctr"+encodeArray(ko_centro));
        if (ok.length) qr.push("ok="+ok.join(','));
        if (ko.length) qr.push("ko="+ko.join(','));
        if (this.__circleMarker) qr.push(`ll=${this.__circleMarker[0]},${this.__circleMarker[1]}`);
        const query = qr.length==0?"":("?"+qr.join("&"));
        return query;
    }
    toQuerty() {
        const query = this.getQuerty();
        if (document.location.search == query) return;
        const url = document.location.href.replace(/\?.*$/, "");
        history.pushState({}, "", url + query);
    }

    getInputsFiltro() {
        return  [
            ...this.tipo.node,
            this.kms.node,
            this.jornada.node,
            this.etapa.node,
            this.nocturno.node,
            this.dificultad.node,
            this.excelencia.node,
            this.innovacion.node,
            ...this.idioma.node,
            this.accesible.node,
            this.invertir.node,
            this.fpdual.node
        ]
    }
    getInputsTransporte() {
        return [
            ...this.transporte.node,
            this.estaciones.node,
        ]
    }

    onFiltro(fnc: EventListener) {
        this.__addEventListener(
            fnc,
            ...this.getInputsFiltro()
        );
    }

    onTransporte(fnc: EventListener) {
        this.__addEventListener(
            fnc,
            ...this.getInputsTransporte()
        )
    }

    onAreas(fnc: EventListener) {
        this.__addEventListener(
            fnc,
            this.areas.node,
        );
    }

    private __addEventListener(fnc: EventListener, ...nodes: (HTMLElement|null)[]) {
        const done = nodes.flatMap((i) => {
            if (i === null) return [];
            const e = i.getAttribute("type") == "checkbox" ? "click" : "change";
            i.addEventListener(e, fnc);
            return i;
        });
        if (done.length) this.__onchange.push(fnc);
    }

  public setCentros(centros: Centro[]) {
    this.__centros.clear()
    const latlon = new Set();
    centros.forEach((c) => {
        const ll = c.latlon;
        while (latlon.has(c.latlon.toString())) {
            c.longitud = c.longitud + 0.0001;
        }
        if (ll[1] != c.longitud)
            console.log(c.id, `latlon ${ll} -> ${c.latlon}`);
        latlon.add(c.latlon.toString());
        this.__centros.set(c.id, c);
    });
  }
  public get ok() {
    return this.__ok;
  }
  public get ko() {
    return this.__ko;
  }
  public get_distancias(): Distancias|null {
    const cursorMarker = window.MAP.idlayer.get("marker");
    if (!(cursorMarker instanceof L.CircleMarker)) return null;
    const ll = cursorMarker.getLatLng();
    const distance = new Map<number, number>()
    this.__centros.forEach((c) => {
        const d = get_distance(c.latitud, c.longitud, ll.lat, ll.lng);
        distance.set(c.id, d)
    });
    return {
      latitud: ll.lat,
      longitud: ll.lng,
      centro: distance,
    };
  }
  public get_ok() {
    return this.__ok.map((c) => this.getCentro(c));
  }
  public get_ko() {
    return this.__ko.map((c) => this.getCentro(c));
  }
  public filter(fnc: ((c: Centro) => boolean)) {
    this.__ok = [];
    this.__ko = [];
    this.__centros.forEach((c) => (fnc(c) ? this.__ok : this.__ko).push(c.id));
  }
  public getCentro(id: number) {
    const c = this.__centros.get(id);
    if (c == null) throw id + " not fund";
    return c;
  }

  public get_estadistica(): EstadoCentros {
    let seleccionados: Centro[] = [];
    let descartados: Centro[] = [];
    let hidden: Centro[] = [];
    let shown: Centro[] = [];

    this.__centros.forEach((c) => {
      const marca = this.getMarca(c.id);
      if (marca == State.SELECCIONADO) {
        seleccionados.push(c);
        return;
      }
      if (marca == State.DESCARTADO) {
        descartados.push(c);
        return;
      }
      if (this.__ok.includes(c.id)) {
        shown.push(c);
        return;
      }
      if (this.__ko.includes(c.id)) {
        hidden.push(c);
        return;
      }
    });

    const dist = this.get_distancias();
    if (dist != null) {
      const d = dist.centro;
      const cmp = (c1: Centro, c2: Centro) => d.get(c1.id)! - d.get(c2.id)!;
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