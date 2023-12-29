import '../style.css'
import './concurso.css'

function set_display(v: string, ...ns: (NodeListOf<Element> | Element | null)[]) {
    ns.forEach(n=>{
        if (n==null) return;
        if (n instanceof HTMLElement) n.style.display = v;
        else if (n instanceof NodeList) n.forEach(x=>set_display(v, x));
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const cnt = document.getElementById("content")! as HTMLDivElement;
    const con = document.getElementById("concurso")! as HTMLSelectElement;
    if (con==null) return;
    function onChangeConcurso() {
        set_display(
            'none',
            cnt, 
            cnt.querySelectorAll(":scope > *")
        )
        set_display(
            '',
            document.getElementById(con.value),
            cnt
        )
    }
    con.addEventListener("change", onChangeConcurso);
    onChangeConcurso();
});