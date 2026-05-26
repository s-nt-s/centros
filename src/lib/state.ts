import { InputBoolean, InputGroupBoolean, SelectNumber, InputNumber, SelectString } from "./form";

export class State {
    private static __instance: State | null = null;
    public readonly tipo = new InputGroupBoolean("#tipos input", undefined, "t");
    public readonly kms = new InputNumber("#kms");
    public readonly jornada = new SelectString("#jornada");
    public readonly etapa = new SelectNumber("#etapa");
    public readonly fpdual = new SelectString("#fpdual");
    public readonly nocturno = new InputBoolean("#nocturno", true);
    public readonly dificultad = new InputBoolean("#dificultad", true);
    public readonly excelencia = new InputBoolean("#excelencia", true);
    public readonly innovacion = new InputBoolean("#innovacion", true);
    public readonly idioma = new InputGroupBoolean("input[name='idioma']");
    public readonly accesible = new InputBoolean("#accesible", false);
    public readonly invertir = new InputBoolean("#invertir", false);
    public readonly areas = new InputBoolean("#areas", false);
    public readonly estaciones = new InputBoolean("#estaciones", false);
    public readonly transporte = new InputGroupBoolean(".metro input, .cercanias input, .metro_ligero input");

    static getState() {
        if (State.__instance == null) {
            State.__instance = new State();
            State.__instance.__init();
        }
        return State.__instance;
    }

    private __init() {
        this.__addEventListener(
            () => {this.toQuerty()},
            ...this.getInputsFiltro(),
            ...this.getInputsTransporte(),
            this.areas.node,
        );
    }

    toQuerty() {
        const qr: string[] = [];
        const ok: string[] = [];
        const ko: string[] = [];
        Object.entries({
            'j': this.jornada.get(),
            'e': this.etapa.get(),
            'k': this.kms.get(),
        }).forEach(([k, v]) => {
            if(v!=null) qr.push(`${k}=${v}`);
        });
        [
            ...this.tipo.getKo(),
            ...this.idioma.getKo()
        ].forEach(t=>{
            ko.push(t);
        })
        Object.entries({
            'noc': this.nocturno.get(),
            'dif': this.dificultad.get(),
            'exc': this.excelencia.get(),
            'inn': this.innovacion.get()
        }).forEach(([k, v]) => {
            if(v === false) ko.push(k);
        })
        Object.entries({
            'acc': this.accesible.get(),
            'inv': this.invertir.get(),
            'are': this.areas.get()
        }).forEach(([k, v]) => {
            if(v === true) ok.push(k);
        })
        if (ok.length) qr.push("ok="+ok.join(','));
        if (ko.length) qr.push("ko="+ko.join(','));
        const query = qr.length==0?"":("?"+qr.join("&"));
        if (document.location.search == query) return;
        const url = document.location.href.replace(/\?.*$/, "");
        history.pushState({}, "", url + query);
    }

    getInputsFiltro() {
        return  [
            ...this.tipo.nodes,
            this.kms.node,
            this.jornada.node,
            this.etapa.node,
            this.nocturno.node,
            this.dificultad.node,
            this.excelencia.node,
            this.innovacion.node,
            ...this.idioma.nodes,
            this.accesible.node,
            this.invertir.node,
            this.fpdual.node
        ]
    }
    getInputsTransporte() {
        return [
            ...this.transporte.nodes,
            this.estaciones.node,
        ]
    }

    onFiltro(fnc: EventListenerOrEventListenerObject) {
        this.__addEventListener(
            fnc,
            ...this.getInputsFiltro()
        );
    }

    onTransporte(fnc: EventListenerOrEventListenerObject) {
        this.__addEventListener(
            fnc,
            ...this.getInputsTransporte()
        )
    }

    onAreas(fnc: EventListenerOrEventListenerObject) {
        this.__addEventListener(
            fnc,
            this.areas.node,
        );
    }

    private __addEventListener(fnc: EventListenerOrEventListenerObject, ...nodes: (HTMLElement|null)[]) {
        nodes.forEach((i) => {
            if (i === null) return;
            const e = i.getAttribute("type") == "checkbox" ? "click" : "change";
            i.addEventListener(e, fnc);
        });
    }
}