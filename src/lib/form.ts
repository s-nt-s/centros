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

export class SelectString {
    public readonly node: HTMLSelectElement | null;
    private __default: string | null;

    constructor(slc: string, defVal: string | null = null) {
        const i = document.querySelector(slc);
        this.node = i==null? null :_assertSelect(i, "select-one");
        this.__default = defVal;
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
}


export class SelectNumber {
    public readonly node: HTMLSelectElement | null;
    private __default: number | null;

    constructor(slc: string, defVal: number | null = null) {
        const i = document.querySelector(slc);
        this.node = i==null? null :_assertSelect(i, "select-one");
        this.__default = defVal;
    }
    get() {
        if (this.node == null) return this.__default;
        const v = _tirmnull(this.node.value);
        if (v == null) return null;
        const n = Number(v);
        if (isNaN(n)) return null;
        return n;
    }
    set(v: number | null) {
        if (this.node == null) return false;
        if (v == null || isNaN(v)) {
            this.node.value = "";
            return true;
        }
        if (typeof v !== "number") throw `${v} is not a number`;
        this.node.value = v.toString();
        return true;
    }
}

export class InputString {
    public readonly node: HTMLInputElement | null;
    private __default: string | null;

    constructor(slc: string, defVal: string | null = null) {
        const i = document.querySelector(slc);
        this.node = i==null? null :_assertInput(i, "text");
        this.__default = defVal;
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
}


export class InputNumber {
    public readonly node: HTMLInputElement | null;
    private __default: number | null;

    constructor(slc: string, defVal: number | null = null) {
        const i = document.querySelector(slc);
        this.node = i==null? null :_assertInput(i, "number");
        this.__default = defVal;
    }
    get() {
        if (this.node == null) return this.__default;
        const v = _tirmnull(this.node.value);
        if (v == null) return null;
        const n = Number(v);
        if (isNaN(n)) return null;
        return n;
    }
    set(v: number | null) {
        if (this.node == null) return false;
        if (v == null || isNaN(v)) {
            this.node.value = "";
            return true;
        }
        if (typeof v !== "number") throw `${v} is not a number`;
        this.node.value = v.toString();
        return true;
    }
}


export class InputBoolean {
    public readonly node: HTMLInputElement | null;
    private __default: boolean | null;

    constructor(slc: string, defVal: boolean | null = null) {
        const i = document.querySelector(slc);
        this.node = i==null? null :_assertInput(i, "checkbox", "radio");
        this.__default = defVal;
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
}


export class InputGroupBoolean {
    public readonly nodes: HTMLInputElement[];
    private __default: string[];
    private __prefix: string;

    constructor(slc: string, defVal: string[] = [], prefix: string = "") {
        this.nodes = Array.from(document.querySelectorAll(slc)).map(
            (e) => _assertInput(e, "checkbox", "radio")
        );
        const okValues = this.nodes.map((i) => i.id.substring(prefix.length));
        this.__default = defVal.filter((v) => !okValues.includes(v));
        this.__prefix = prefix;
    }
    get() {
        return this.__default.concat(
            this.nodes.flatMap((i) => i.checked ? [i.id.substring(this.__prefix.length)] : [])
        );
    }
    getKo() {
        return this.__default.concat(
            this.nodes.flatMap((i) => i.checked ? [] : [i.id.substring(this.__prefix.length)])
        );
    }
    set(v: string[]) {
        this.nodes.forEach((i) => i.checked = v.includes(i.id.substring(this.__prefix.length)));
        return true;
    }
    getQuery(name: string) {
        const ok = this.get().join(",");
        const ko = this.getKo().join(",");
        if (ok.length == 0 && ko.length == 0) return null;
        if (ok.length <= ko.length) return `${name}=${ok}`;
        return `!${name}=${ko}`;
    }
}
