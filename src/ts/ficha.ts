import { DBConcurso, Centro, parseName } from "../lib/dbconcurso";
import nunjucks from "nunjucks"
import listTemplate from "../template/lista-centros.njk?raw";
import fichaTemplate from "../template/ficha-centro.njk?raw";


const DB = new DBConcurso();

class FullCentro extends Centro {

}

const render = (source: string, data: object) => {
    const html = nunjucks.renderString(source, data);
    const tpl = document.createElement("template");
    tpl.innerHTML = html;
    return tpl.content;
}


const myweb = (() => {
  let href = window.location.origin + window.location.pathname;
  //href = href.substring(document.location.protocol.length + 2);
  if (href.endsWith("/")) href = href.substring(0, href.length - 1);
  return href;
})();

function getIds(s: string) {
  if (s == null) return []
  return Array.from(s.matchAll(/\b28\d{6}\b/g)).flatMap(x=>x.map(parseInt));
}

document.addEventListener("DOMContentLoaded", function () {
    const ids = getIds(document.location.search);
    if (ids.length == 0) return printList();
    return printCentros(ids);
});

function printList() {
    if (document.location.href != myweb) {
        history.pushState({}, "", myweb);
    }
    const main = document.querySelector("main")!;
    main.innerHTML = "";
    Promise.all([
        DB.get_dict("tipo"),
        DB.get("centro")
    ]).then(([tipos, centros])=>{
        main.append(render(listTemplate, {
            data: centros.map(c=> {
                const t = tipos.get(c.tipo)!;
                return {
                    nombre: parseName(c, t),
                    centro: c,
                    tipo: t
                }
            })
        }));
    })
}

async function printCentros(ids: number[]) {
    const main = document.querySelector("main")!;
    main.innerHTML = "";
    const [tipos, jornadas] = await Promise.all([
        DB.get_dict("tipo"),
        DB.get_dict("jornada"),
    ]);
    ids.forEach(async (id)=>{
        const c = await DB.get_one("centro", id);
        const ctr = new FullCentro(
            c,
            tipos.get(c.tipo)!,
            (await DB.getWhere("query_centro", "centro", id)).map(q=>q.query),
            (await DB.getWhere("macro_etapa_centro", "centro", id)).map(q=>q.etapa),
            (await DB.getWhere("alumnado", "centro", id)),
        );
        main.append(render(fichaTemplate, {
            centro: ctr,
        }));
    })
}