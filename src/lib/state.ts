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
        if (State.__instance == null) State.__instance = new State();
        return State.__instance;
    }

    toQuerty() {
        
    }

    onFiltro(fnc: EventListenerOrEventListenerObject) {
        this.__addEventListener(
            fnc,
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
        );
    }

    onTransporte(fnc: EventListenerOrEventListenerObject) {
        this.__addEventListener(
            fnc,
            ...this.transporte.nodes,
            this.estaciones.node,
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