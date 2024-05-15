import { createClient } from "@supabase/supabase-js";
import { smart_title, to_dict, toTitle } from "./util";
import type { Database } from "./database.types";
import type { Tables } from "./database.types";
import type { PostgrestSingleResponse, PostgrestError } from "@supabase/supabase-js";

type TableName = "centro" | "tipo" | "concurso";
type SchemaName = keyof Database;

function filter(arr: any[], func: Function) {
  const ok: any[] = [];
  const ko: any[] = [];
  arr.forEach((a) => {
    (func(a) ? ok : ko).push(a);
  });
  return {
    ok: ok,
    ko: ko,
  };
}

class DBConcurso {
  private readonly onerror: ((e:PostgrestError)=>void) | null;
  private readonly supabase;

  constructor(onerror: ((e:PostgrestError)=>void) |null = null) {
    this.supabase = createClient<Database>(
      "https://xlrdvrcjntdcrgfzmtaq.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscmR2cmNqbnRkY3JnZnptdGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNDI2MjEsImV4cCI6MjAxNzYxODYyMX0.xgbmhobSUnqailUi8PSZVZD2Jyj3XpWghYoJx4OYzU8",
    );
    this.onerror = onerror;
  }

  from(relation: string) {
    relation = relation.replace("-", "_");
    return this.supabase.from(relation);
  }

  private get_data(log: string, obj: PostgrestSingleResponse<any[]>) {
    if (obj.error) {
      console.error(log, obj);
      if (this.onerror) this.onerror(obj.error);
      throw obj.error;
    }
    console.log(log+': '+obj.data.length+' resultados');
    return obj.data;
  }

  private async get_one(table: TableName, id: number | string) {
    const r = await this.get(table, id);
    if (r.length == 1) return r[0];
    throw `${table}[id=${id}] devuelve ${r.length} resultados`;
  }

  private async get(table: TableName, ...ids: (number | string)[]) {
    let prm = this.from(table).select();
    if (ids.length == 1) prm = prm.eq('id', ids[0]);
    else if (ids.length>1) prm = prm.in('id', ids);
    return this.get_data(
      ids.length==0?table:`${table}[id=${ids}]`,
      await prm
    );
  }

  async get_concursos() {
    const cpn = ((await this.get('concurso')) as Tables<"concurso">[]).sort((c1, c2)=>{
      if (c1.convocatoria != c2.convocatoria) return c1.convocatoria.localeCompare(c2.convocatoria);
      if (c1.tipo != c2.tipo) return -c1.tipo.localeCompare(c2.tipo);
      return c1.txt.localeCompare(c2.txt);
    });
    const obj: Concurso[] = [];
    for (let i = 0; i < cpn.length; i++) {
      obj.push((await this.get_concurso(cpn[i])));
    }
    return obj
  }

  async get_concurso(c: string|Tables<"concurso">) {
    if (typeof c == "string") c=(await this.get_one("concurso", c)) as Tables<"concurso">
    const anx = this.get_data(
      `anexo[concurso=${c.id}`,
      await this.from("concurso_anexo").select().eq("concurso", c.id)
    );
    return new Concurso(
      c,
      anx as Tables<'concurso_anexo'>[],
      (await this.get_concurso_centros(c.id, false))
    );
  }
  async get_concurso_centros(id: string, with_latlon: boolean = true) {
    const cetrs = await this._get_concurso_centros(id, with_latlon);
    const tipos = to_dict(await this.get('tipo', ...Array.from(new Set(cetrs.map(c=>c.tipo)))));
    const query = await this._get_concurso_query(id);
    const {etapa_centro, etapa_nombre} = await this._get_concurso_etapa(id);
    const _is = (obj:{[id:string]:number[]}, id:number) => Object.entries(obj).flatMap(([k, v])=>v.includes(id)?k:[]);
    return cetrs.map(c=>{
      const t = tipos[c.tipo] as Tables<'tipo'>;
      const q = _is(query, c.id)
      const e1 = _is(etapa_centro, c.id)
      const e2 = _is(etapa_nombre, c.id)
      return new Centro(c, t, q, e1);
    }) as Centro[]
  }

  private async _get_concurso_centros(id: string, with_latlon: boolean = true) {
    let prm = this.from(id+'_centro').select().order('id');
    if (with_latlon) prm = prm.neq('latitud', 0);
    return this.get_data(
      `centro[${id}]`,
      (await prm),
    ) as Tables<'centro'>[];
  }
  private async _get_concurso_query(id: string) {
    const obj: {[id:string]: number[]} = {}
    const qrs = [
      "itRegimenNocturno=4",
      "itCentroExcelencia=S",
      "itAulaExcelencia=S",
      "itInTecno=S",
      "checkCentroBilingue=S",
      "checkCentroConvenio=S",
      "checkSeccionesLinguisticasFr=S",
      "checkSeccionesLinguisticasAl=S",
    ];
    this.get_data(
      `query_centro[${id}][query=${qrs}]`,
      await this.from(id+'_query_centro').select('query, centro').in('query', qrs)
    ).forEach(e=>{
      if (obj[e.query]==null) obj[e.query]=[];
      obj[e.query].push(e.centro);
    })
    return Object.freeze(obj);
  }
  private async _get_concurso_etapa(id: string) {
    let obj: {[id:string]: number[]} = {};
    this.get_data(
      `etapa_centro[${id}]`,
      await this.from(id+'_etapa_centro').select('etapa, centro').eq('hoja', 1)
    ).forEach(e=>{
      if (obj[e.etapa]==null) obj[e.etapa]=[];
      obj[e.etapa].push(e.centro);
    })
    const etapa_centro = Object.freeze(obj);
    obj = {};
    this.get_data(
      `etapa_nombre_centro[${id}]`,
      await this.from(id+'_etapa_nombre_centro').select('nombre, centro').eq('hoja', 1)
    ).forEach(e=>{
      if (obj[e.etapa]==null) obj[e.etapa]=[];
      obj[e.etapa].push(e.centro);
    })
    const etapa_nombre = Object.freeze(obj);
    return {etapa_centro, etapa_nombre}
  }
}

class Concurso {
  private readonly _c: Tables<"concurso">;
  public readonly anexos: readonly Tables<"concurso_anexo">[];
  public readonly centros: readonly Centro[];
  public readonly desubicados: readonly Centro[];
  public readonly tipos: readonly Tables<"tipo">[];
  public readonly nocturos: readonly number[];
  public readonly dificultad: readonly number[];
  public readonly excelencia: readonly number[]
  public readonly innovacion: readonly number[];
  public readonly ingles: readonly number[];
  public readonly frances: readonly number[];
  public readonly aleman: readonly number[];

  constructor(
    concurso: Tables<"concurso">,
    anexos: Tables<'concurso_anexo'>[],
    centros: Centro[]
  ) {
    this._c = concurso;
    this.anexos = Object.freeze(anexos);
    const {ok, ko} = filter(centros, (c:Centro) => (c.latitud??0)>0);
    this.centros = Object.freeze(ok as Centro[]);
    this.desubicados = Object.freeze(ko as Centro[]);
    this.tipos = Object.freeze((()=>{
      const tipos:Tables<'tipo'>[] = [];
      const ids:string[] = [];
      this.centros.forEach(c=>{
        if (ids.includes(c.tp.id)) return;
        ids.push(c.tp.id);
        tipos.push(c.tp);
      })
      return tipos.sort((a, b)=>a.txt.localeCompare(b.txt));
    })());
    const _gids = (fnc: (c:Centro)=>boolean) => Object.freeze(this.centros.filter(fnc).map(c=>c.id));
    this.nocturos = _gids(c=>c.nocturno);
    this.dificultad = _gids(c=>c.dificultad);
    this.excelencia = _gids(c=>c.excelencia);
    this.innovacion = _gids(c=>c.innovacion);
    this.ingles = _gids(c=>c.ingles);
    this.frances = _gids(c=>c.frances);
    this.aleman = _gids(c=>c.aleman);
  }

  get id() {
    return this._c.id;
  }

  get cuerpo() {
    return this._c.cuerpo;
  }

  get txt() {
    return this._c.txt;
  }

  get name() {
    const txt = this._c.convocatoria+' '+this._c.txt;
    if (this._c.tipo != 'concursillo') return txt;
    return txt + ' (concursillo)';
  }

  get tipo() {
    return this._c.tipo;
  }

  get convocatoria() {
    return this._c.convocatoria;
  }

  get tipo_convocatoria() {
    return toTitle(this.tipo)+' '+this.convocatoria;
  }

  get url() {
    return this._c.url;
  }

  get isEspecial() {
    return (
      [
        this.nocturos,
        this.dificultad,
        this.innovacion,
        this.excelencia,
        this.ingles,
        this.aleman,
        this.frances,
      ].filter((arr) => arr.length > 0).length > 0
    );
  }
}

class Centro {
  private readonly _c: Tables<"centro">;
  private readonly _t: Tables<"tipo">;
  readonly queries: readonly string[];
  readonly etapas: readonly string[];

  constructor(
    centro: Tables<"centro">,
    tipo: Tables<"tipo">,
    queries: string[],
    etapas: string[]
  ) {
    this._c = centro;
    this._t = tipo;
    this.queries = Object.freeze(queries);
    this.etapas = Object.freeze(etapas);
  }

  get id(): number {
    return this._c.id;
  }

  get latlon(): readonly [number, number] {
    const ll: readonly [number, number] = [this._c.latitud, this._c.longitud];
    return ll;
  }

  get direccion(): string {
    return [
      this._c.domicilio,
      this._c.cp,
      this._c.municipio,
    ].filter(i=>i!=null).join(" ")
  }

  get web(): string|null {
    return this._c.web;
  }

  get latitud(): number {
    return this._c.latitud;
  }

  get longitud(): number {
    return this._c.longitud;
  }

  set longitud(l: number) {
    this._c.longitud = l;
  }

  get tipo(): string {
    return this._c.tipo;
  }

  get tp(): Tables<"tipo"> {
    return this._t;
  }

  get dificultad(): boolean {
    return this._c.dificultad == 1;
  }

  isQuery(...qrs:string[]) {
    for (let i=0; i<qrs.length; i++) if (this.queries.includes(qrs[i])) return true;
    return false;
  }

  get nocturno() {
    return this.isQuery("itRegimenNocturno=4");
  }
  get excelencia() {
    return this.isQuery("itCentroExcelencia=S", "itAulaExcelencia=S");
  }
  get innovacion() {
    return this.isQuery("itInTecno=S");
  }
  get ingles() {
    return this.isQuery(
      "checkCentroBilingue=S",
      "checkCentroConvenio=S"
    );
  }
  get frances() {
    return this.isQuery("checkSeccionesLinguisticasFr=S");
  }
  get aleman() {
    return this.isQuery("checkSeccionesLinguisticasAl=S");
  }

  get emails() {
    return (this._c.email??'').trim().split(/\s+/);
  }

  get idiomas(): string[] {
    const arr = [];
    if (this.ingles) arr.push("EN");
    if (this.aleman) arr.push("DE");
    if (this.frances) arr.push("FR");
    return arr;
  }

  get telefonos(): string[] {
    return (this._c.telefono??'').trim().split(/\s+/);
  }

  get nombre(): string {
    const abr = this._t.abr;
    let nom = this._c.nombre;
    if (abr == "AH") {
      nom = nom.replace(
        /^(Aula Hospitalaria Hosp\.|Aula Hospitalaria|Hospital) /i,
        ""
      );
    }
    if (abr.startsWith("EOEP")) {
      nom = nom.replace(/^(Equipo General|Equipo Gral\.|Equipo) /i, "");
      nom = nom.replace(
        /^(E\. a\. Temprana|Eq\. Aten\.temprana|Eq\. At\.temp\.|Equipo At\. Temp\.|Eoep de At\.tna|Eq\. Aten\. Temprana|At\. Temp\.|E\.a\.temprana|Atencion Temprana) /i,
        ""
      );
      nom = nom.replace(/^(E.e\.?) /i, "");
      nom = nom;
    }
    if (abr == "EOEP-AT") {
      nom = nom.replace(/^(Atencíon Temprana) /i, "");
    }
    if (abr == "SIES") {
      nom = nom.replace(/^(Seccion del Ies) /i, "");
    }
    if (abr == "EOI") {
      nom = nom.replace(/^(e\.o\.i\. de) /i, "");
    }
    if (abr == "EXEOI") {
      nom = nom.replace(/^(Extension de la Escuela Oficial de Idiomas de) /i, "");
    }
    if (abr == "E ARTE") {
      nom = nom.replace(/^(Escuela de Arte de) /i, "");
    }
    if (abr == "ES CANTO") {
      nom = nom.replace(/^(Real )?Escuela Superior de Canto de /i, "");
    }
    if (abr == "CPROF DANZA") {
      nom = nom.replace(/^(Real )?Conservatorio Profesional de Danza( de)? /i, "");
    }
    if (abr == "CSU MUS") {
      nom = nom.replace(/^(Real )?Conservatorio Superior de Musica de /i, "");
    }
    if (abr == "CPROF MUS") {
      nom = nom.replace(/^(Real )?Conservatorio Profesional de Musica de /i, "");
    }
    if (this.id == 28034428 && abr=="ES ARTE DRA" && nom.toLocaleLowerCase()=="real escuela superior de arte dramatico") {
      nom = "Madrid";
    }
    if (this.id == 28037821 && abr=="ES CRBC" && nom.toLocaleLowerCase()=="escuela superior conservacion y restauracion bienes culturales") {
      nom = "Madrid";
    }
    if (this.id == 28072508 && abr=="ESC SUP DISEÑO" && nom.toLocaleLowerCase()=="escuela superior de diseño") {
      nom = "Madrid";
    }
    nom = smart_title(nom);
    nom = nom.replace(/\bS\./i, "S.");
    nom = nom.replace(/\bS\./i, "S.");
    nom = nom.replace(/\bS\.mart/i, "S. Mart");
    return nom;
  }

  get abr_nombre(): string {
    return `<abbr title="${this.tp.txt}">${this.tp.abr}</abbr> ${this.nombre}`;
  }
}

export {
  DBConcurso,
  Centro,
  Concurso
};
export type {
  SchemaName
}
