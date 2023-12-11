import {compile} from 'handlebars';
import {readFileSync, writeFileSync} from 'fs';

function render(source: string, destination: string, data: any) {
    const content = readFileSync(source).toString('utf8');
    const template = compile(content);
    const html = template(data);
    writeFileSync(destination, html, 'utf-8');
}


function do_render() {
    render(
        'concurso.hbs',
        'concurso.html',
        {}
    )
}

export {do_render};