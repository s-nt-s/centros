import { NavigatorLockAcquireTimeoutError } from "@supabase/supabase-js";
import { InputBoolean, InputGroupBoolean, SelectNumber, InputNumber, SelectString, FormField } from "./form";
import { gridLayer } from "leaflet";

export class State {
    public static readonly SELECCIONADO = 1;
    public static readonly DESCARTADO = 2;
    private readonly __centros = new Map<number, number>();
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
    private readonly __onchange: EventListener[] = [];

    static getState() {
        if (State.__instance == null) {
            State.__instance = new State();
            State.__instance.__init();
        }
        return State.__instance;
    }

    public setMarca(id: number, val:number|null) {
        if (val === null) {
            if (!this.__centros.has(id)) return false;
            this.__centros.delete(id)
        } else {
            if (this.__centros.get(id) === val) return false;
            this.__centros.set(id, val)
        }
        this.toQuerty();
        return;
    }

    public getMarca(id: number) {
        return this.__centros.get(id)
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
        this.__centros.clear()
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
        const center_filter = (m: number) => {
            return (i: string) => {
                if (!i.match(/^28\d{6}$/)) return true;
                this.__centros.set(parseInt(i), m);
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
        this.__centros.forEach((v, k) => {
            if (v === State.SELECCIONADO) ok.push(k.toString());
            if (v === State.DESCARTADO) ko.push(k.toString());
        });
        if (ok.length) qr.push("ok="+ok.join(','));
        if (ko.length) qr.push("ko="+ko.join(','));
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
}