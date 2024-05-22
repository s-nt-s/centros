import nunjucks from 'nunjucks'
import { writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { dirname } from 'path'
import { glob } from "glob";
import { DBConcurso, Centro } from '../lib/supabaseClient'
import { Mail, get_distance, yJoin, toTitle } from "../lib/util";
import transporte from "../assets/transporte/transporte.json";
import accesos from "../assets/transporte/accesos.json";
import estaciones from "../assets/transporte/estaciones.json";

const DB = new DBConcurso();

const env = nunjucks.configure('src/template', { autoescape: true });
env.addFilter('yjoin', yJoin);
env.addFilter('toTitle', toTitle);

function save(destination: string, content: string|object) {
    const dir = dirname(destination);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
    if (typeof content == "object") content = JSON.stringify(content, null, 2);
    writeFileSync(destination, content, 'utf-8');
}

function render(source: string, destination: string, data: any) {
    let html: string = nunjucks.render(source, data);
    html = html.replace(/\n\s+\n/g, "\n");
    save(destination, html);
}

const no_concurso = (to: string) => Mail.mail_to(
    to,
    'Concurso de traslados necesita ser actualizado',
    `
    Hola

    Soy ... y quería informar de que hay un nuevo concurso...
    Puedes verlo en este enlace...

    Muchas gracias
    `
);
const desubicados = (to: string) => Mail.mail_to(
    to,
    'Concurso de traslados necesita ser actualizado',
    `
    Hola

    Soy ... y quería informar de la ubicación de...
    
    Muchas gracias
    `
)

function get_latlons() {
    const latlons: [number, number][] = [];
    const done = new Set();/*
    accesos.forEach(a=>{
        const ll = a.lat+","+a.lon;
        if (done.has(ll)) return;
        latlons.push([a.lat, a.lon])
        done.add(ll);
    })*/
    estaciones.forEach(a=>{
        const ll = a.lat+","+a.lon;
        if (done.has(ll)) return;
        latlons.push([a.lat, a.lon])
        done.add(ll);
    })
    return latlons;
}

function get_min_idstance(latlons: [number, number][], c: Centro): number|null {
    if (c.latitud==null || c.longitud==null || latlons.length==0) return null;
    let m:number = -1;
    latlons.forEach(([lat, lon])=>{
        const d = get_distance(lat, lon, c.latitud, c.longitud);
        if (m==-1 || d<m) m=d;
    })
    return m*1000;
}


async function do_render(env: Record<string, string>) {
    const jornadas = (await DB.get_jornadas()).sort((j1, j2)=>j1.txt.localeCompare(j2.txt));
    const concursos = (await DB.get_concursos()).sort((c1, c2)=>{
        if (c1.convocatoria != c2.convocatoria) return -c1.convocatoria.localeCompare(c2.convocatoria);
        if (c1.tipo != c2.tipo) return -c1.tipo.localeCompare(c2.tipo);
        if (c1.centros.length!=c2.centros.length) return c2.centros.length-c1.centros.length;
        return c1.txt.localeCompare(c2.txt);
      });
    const latlons = get_latlons();
    const tipo_convocatoria = Array.from(new Set(concursos.map(c=>c.tipo_convocatoria)));
    const convocatorias = concursos.filter((v, i, arr)=>{
        if (i==0) return true;
        return (arr[i-1].tipo_convocatoria != v.tipo_convocatoria)
    })
    render(
        'concurso.njk',
        'index.html',
        {
            concursos: concursos,
            tipo_convocatoria: tipo_convocatoria,
            convocatorias: convocatorias,
            mail: {
                no_concurso: no_concurso(env.VITE_EMAIL),
                desubicados: desubicados(env.VITE_EMAIL)
            }
        }
    );
    (new Set(glob.sync("**/concurso.txt").map(dirname))).forEach(d=>{
        rmSync(d, { recursive: true, force: true });
    })
    concursos.forEach(c=>{
        const dist_step = 100;
        const distancias: {[km: number]: number[]} = {}
        c.centros.forEach(ct=>{
            let dist = get_min_idstance(latlons, ct);
            if (dist == null) return;
            dist = (Math.round(dist/dist_step)*dist_step)+dist_step;
            if (distancias[dist]==null) distancias[dist] = [];
            distancias[dist].push(ct.id);
        })
        const dst = Object.keys(distancias).map(k=>Number(k));
        let min = Math.min(...dst);
        let max = Math.max(...dst);
        if ((max%dist_step)!=0) max=Math.floor((max+dist_step)/dist_step)*dist_step;
        render(
            'map.njk',
            `${c.id}/index.html`,
            {
                concurso: c,
                jornadas: jornadas,
                distancia: {
                    min: min,
                    max: max,
                    step: dist_step
                },
                transporte: transporte,
                mail: {
                    desubicados: desubicados(env.VITE_EMAIL)
                }
            }
        )
        save(`${c.id}/concurso.txt`, c.id);
        const json = JSON.stringify(distancias, null, 2).replace(/\s+(\d+|])/g, "$1");
        save(`public/${c.id}/distancias.json`, json);
        save(`public/${c.id}/concurso.txt`, c.id);
    });
}

export {do_render};