function _tirmnull(s: string | null) {
  if (s == null) return null;
  s = s.trim();
  if (s.length == 0) return null;
  return s;
}

function _assertInput(i: Element, ...tp: string[]) {
    if (!(i instanceof HTMLInputElement)) throw `${i} is not a HTMLInputElement`;
    if (!tp.includes(i.type)) throw `${i.id || i.name}:HTMLInputElement[${i.type}] is not a HTMLInputElement[${tp.join('|')}]`;
    return i;
}

function _assertSelect(i: Element, ...tp: string[]) {
    if (!(i instanceof HTMLSelectElement)) throw `${i} is not a HTMLSelectElement`;
    if (!tp.includes(i.type)) throw `${i.id || i.name}: HTMLSelectElement[${i.type}] is not a HTMLSelectElement[${tp.join('|')}]`;
    return i;
}


export abstract class FormField<T, N> {
    public readonly node: N;
    public readonly qr: string;
    protected __default: T;

    constructor(node: N, defVal: T, qr: string) {
        this.node = node;
        this.__default = defVal;
        this.qr = qr;
    }

    abstract get(): T;
    abstract set(v: T): boolean;
    abstract reset(): boolean;
}

export class SelectString extends FormField<string | null, HTMLSelectElement | null> {
    constructor(slc: string, defVal: string | null, qr: string) {
        const i = document.querySelector(slc);
        super(
             i==null? null :_assertSelect(i, "select-one"),
             defVal,
             qr
        );
    }
    get() {
        if (this.node == null) return this.__default;
        return _tirmnull(this.node.value);
    }
    set(v: string) {
        if (this.node == null) return false;
        if (typeof v !== "string") throw `${v} is not a string`;
        this.node.value = v;
        return true;
    }
    reset() {
        if (this.node == null) return false;
        this.node.value = this.__default??"";
        return true;
    }
}


export class SelectNumber extends FormField<number | null, HTMLSelectElement | null> {
    constructor(slc: string, defVal: number | null, qr: string) {
        const i = document.querySelector(slc);
        super(
             i==null? null :_assertSelect(i, "select-one"),
             defVal,
             qr
        );
    }
    get() {
        if (this.node == null) return this.__default;
        const v = _tirmnull(this.node.value);
        if (v == null) return null;
        const n = Number(v);
        if (isNaN(n)) return null;
        return n;
    }
    set(v: number | string | null) {
        if (this.node == null) return false;
        if (v != null && typeof v === "string") v = parseFloat(v);
        if (v == null || isNaN(v)) {
            this.node.value = "";
            return true;
        }
        if (typeof v !== "number") throw `${v} is not a number`;
        this.node.value = v.toString();
        return true;
    }
    reset() {
        if (this.node == null) return false;
        this.node.value = this.__default?.toString()??"";
        return true;
    }
}

export class InputString extends FormField<string | null, HTMLInputElement | null> {
    constructor(slc: string, defVal: string | null, qr: string) {
        const i = document.querySelector(slc);
        super(
             i==null? null : _assertInput(i, "text"),
             defVal,
             qr
        );
    }
    get() {
        if (this.node == null) return this.__default;
        return _tirmnull(this.node.value);
    }
    set(v: string) {
        if (this.node == null) return false;
        if (typeof v !== "string") throw `${v} is not a string`;
        this.node.value = v;
        return true;
    }
    reset() {
        if (this.node == null) return false;
        this.node.value = this.__default??"";
        return true;
    }
}


export class InputNumber extends FormField<number | null, HTMLInputElement | null> {
    constructor(slc: string, defVal: number | null, qr: string) {
        const i = document.querySelector(slc);
        super(
             i==null? null : _assertInput(i, "number"),
             defVal,
             qr
        );
    }
    get() {
        if (this.node == null) return this.__default;
        const v = _tirmnull(this.node.value);
        if (v == null) return null;
        const n = Number(v);
        if (isNaN(n)) return null;
        return n;
    }
    set(v: number | string |null) {
        if (this.node == null) return false;
        if (v != null && typeof v === "string") v = parseFloat(v);
        if (v == null || isNaN(v)) {
            this.node.value = "";
            return true;
        }
        if (typeof v !== "number") throw `${v} is not a number`;
        this.node.value = v.toString();
        return true;
    }
    reset() {
        if (this.node == null) return false;
        this.node.value = this.__default?.toString()??"";
        return true;
    }
}


export class InputBoolean extends FormField<boolean | null, HTMLInputElement | null> {
    constructor(slc: string, defVal: boolean | null, qr: string) {
        const i = document.querySelector(slc);
        super(
             i==null? null : _assertInput(i, "checkbox", "radio"),
             defVal,
             qr
        );
    }
    get() {
        if (this.node == null) return this.__default;
        return this.node.checked;
    }
    set(v: boolean | null) {
        if (this.node == null) return false;
        if (v == null) v = false;
        if (typeof v !== "boolean") throw `${v} is not a boolean`;
        this.node.checked = v;
        return true;
    }
    reset() {
        if (this.node == null) return false;
        this.node.checked = this.__default??false;
        return true;
    }
}


export class InputGroupBoolean extends FormField<string[], HTMLInputElement[]> {
    private __prefix: string;

    constructor(slc: string, defVal: string[], qr: string, prefix: string = "") {
        const nodes = Array.from(document.querySelectorAll(slc)).map(
            (e) => _assertInput(e, "checkbox", "radio")
        );
        const okValues = nodes.map((i) => i.id.substring(prefix.length));
        defVal = defVal.filter((v) => !okValues.includes(v));
        super(
            nodes,
             defVal,
             qr
        );
        this.__prefix = prefix;
    }
    get() {
        return this.__default.concat(
            this.node.flatMap((i) => i.checked ? [i.id.substring(this.__prefix.length)] : [])
        );
    }
    getOptions() {
        return this.node.map((i) => i.id.substring(this.__prefix.length));
    }
    getKo() {
        return this.__default.concat(
            this.node.flatMap((i) => i.checked ? [] : [i.id.substring(this.__prefix.length)])
        );
    }
    set(v: string[]) {
        this.node.forEach((i) => i.checked = v.includes(i.id.substring(this.__prefix.length)));
        return true;
    }
    reset() {
        if (this.node.length == 0) return false;
        this.node.forEach(i => {
            i.checked = this.__default.includes(i.id.substring(this.__prefix.length))
        })
        return true;
    }
}
