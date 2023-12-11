import Handlebars from 'handlebars';
import {readFileSync, writeFileSync} from 'fs';
import { resolve } from 'path';
import { DB } from '../src/lib/supabaseClient'
import type { Tables } from '../src/lib/database.types'

function render(source: string, destination: string, data: any) {
    source = resolve(__dirname, source);
    destination = resolve(__dirname, destination);
    const content = readFileSync(source).toString('utf8');
    const template = Handlebars.compile(content);
    const html = template(data);
    writeFileSync(destination, html, 'utf-8');
}


async function do_render() {
    const concursos = await DB.concursos();
    const anexos: {[id: string]: Tables<'concurso_anexo'>[]} = {};
    (await DB.anexos(null)).forEach(a=>{
        if (anexos[a.concurso]==null) anexos[a.concurso] = [];
        anexos[a.concurso].push(a);
    })
    render(
        'concurso.hbs',
        '../index.html',
        {
            concursos: concursos,
            anexos: anexos
        }
    )
}

export {do_render};