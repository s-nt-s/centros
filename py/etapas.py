from core.dblite import DBLite
import argparse
import logging
import re
from typing import Dict, Set, NamedTuple


parser = argparse.ArgumentParser(
    description='Trata la información sobre las etapas',
)
parser.add_argument(
    '--db', type=str, default="../db/db.sqlite"
)

ARG = parser.parse_args()

re_sp = re.compile(r"\s+")

open("etapas.log", "w").close()
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(name)s - %(levelname)s - %(message)s',
    datefmt='%d-%m-%Y %H:%M:%S',
    handlers=[
        logging.FileHandler("etapas.log"),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)


def read(file: str, *args, **kwargs):
    with open(file, "r") as f:
        txt = f.read()
        if args or kwargs:
            txt = txt.format(*args, **kwargs)
        return txt


def title(s: str):
    if s.lower() != s:
        return s
    return s[0].upper()+s[1:].lower()


class Etapa(NamedTuple):
    familia: str
    txt: str

    def to_str(self):
        txt = str(self.txt)
        if txt == txt.lower():
            txt = title(txt)
        if len(self.familia) == 0:
            return txt
        return self.familia+': '+txt

    def get_txt(self):
        txt = str(self.txt)
        if self.familia == "Adultos" and not re.search(r"\b(adult[oa]s|mayores)\b", self.txt):
            txt = txt + " (adultos)"
        if txt == txt.lower():
            txt = title(txt)
        return txt

    def __get_cuerpo(self):
        if self.familia == "Secundaría":
            return "0590 0511"
        if self.familia == "EOI":
            return "0592 0512"
        if self.familia == "Magisterio":
            return "0597"
        if self.familia in ("Música", "Arte", "Danza"):
            return "0594 0593"
        if self.familia in ("Diseño", "Conservación y restauración"):
            return "0596 0595 0513"
        if self.familia == "Master Enseñanzas Artísticas":
            return "0594 0593 0596 0595 0513"
        #if self.familia == "FP":
        #    return "0590 0511 0591 0598"

    def get_cuerpo(self):
        c = self.__get_cuerpo()
        if c is not None:
            return " ".join(sorted(set(c.split())))

    def merge(self, **kwargs):
        return Etapa(**{**self._asdict(), **kwargs})


def fp_family(etp: str):
    if "artes plásticas y diseño" in etp:
        return "Diseño"
    return "FP"


SECUNDARIA = Etapa(
    familia="Secundaría",
    txt="ESO y/o Bachillerato"
)
MAGISTERIO = Etapa(
    familia="Magisterio",
    txt="Infantil y/o Primaria"
)
EBO = Etapa(
    familia="Educación especial",
    txt="Educación básica obligatoria"
)


def get_etapa(abr: str, etp: str):
    etp = etp.lower()
    etp = re.sub(r"\(.*?\)", " ", etp)
    etp = re_sp.sub(r" ", etp).strip()
    etp = re.sub(r"\binformatica\b", "informática", etp)
    etp = re.sub(r"\bhosteleria\b", "hostelería", etp)
    etp = re.sub(r"\bedcuación\b", "educación", etp)
    etp = re.sub(r"\boblicatoria\b", "obligatoria", etp)
    etp = re.sub(r"\bceramica\b", "cerámica", etp)
    etp = re.sub(r"\bvioloncello\b", "violonchelo", etp)
    etp = re.sub(r"\binformática\. ofimática\b", "informática", etp)
    etp = re.sub(r"\binstrumentos de cuerda pulsada[^>]+", "instrumentos de cuerda pulsada -", etp).strip("- ")
    etp = re.sub(r" -> (a distancia|presencial|semipresencial)$", "", etp)

    spl = etp.split(" -> ")

    def _re(r: str, g=-1):
        m = re.search(r, etp)
        if m is None or g < 0:
            return m
        return m.group(g)

    if _re(r"aula mentor"):
        return None

    if spl[-1] in ("enseñanzas para el desarrollo personal y la participación", "ampliación cultural", "técnico profesional"):
        return None

    isAdultos = abr in ("CEPA", "CARCEL") or _re(r"\b(adultos|adultas)\b")

    if _re(r'\beducación secundaria obligatoria\b'):
        return SECUNDARIA
    if abr in ('EOI', 'EXEOI'):
        i = _re(r"\b(alemán|chino|danés|español|euskera|finés|francés|griego|italiano|japonés|neerlandés|polaco|portugués|rumano|ruso|sueco|árabe|catalán|gallego|irlandés|húngaro|inglés|english)\b", 1)
        if i:
            i = {"english": "inglés"}.get(i, i)
            return Etapa(
                familia="EOI",
                txt=i
            )
    if isAdultos:
        m = _re(r"\b(aula mentor|español para extranjeros)\b", 1)
        if m:
            return Etapa(
                familia="Adultos",
                txt=m
            )
    if _re(r"curso.*prueba (de )?acceso.*(grado superior|f.p.g.s.)|preparación acceso ciclos formativos gs"):
        return Etapa(
            familia="Adultos",
            txt="Curso preparatorio prueba de acceso grado superior"
        )
    if spl[0] in ("enseñanzas para el desarrollo personal y la participación", "educación personas adultas") or spl[-1] in ("enseñanzas iniciales básicas para personas adultas", ):
        return Etapa(
            familia="Adultos",
            txt=spl[-1]
        )
    m = _re(r'(de|artísticas) arte dramático -> ([^>]+)', 2)
    if m:
        return Etapa(
            familia="Arte",
            txt=m.rstrip(" -")
        )
    m = _re(r'(de|artísticas) conservación y restauración de bienes culturales -> ([^>]+)', 2)
    if m:
        return Etapa(
            familia="Conservación y restauración",
            txt=m.rstrip(" -")
        )
    m = _re(r'superiores de diseño -> ([^>]+)', 1)
    if m:
        return Etapa(
            familia="Diseño",
            txt=m.rstrip(" -")
        )
    if _re(r"\bmaster (en )?enseñanzas artísticas"):
        return Etapa(
            familia="Master Enseñanzas Artísticas",
            txt=spl[-1]
        )
    if _re(r"^\b(formación profesional|programas profesionales|ciclos)\b.*? -> (.+)"):
        avoid = ('general', 'especial')
        if spl[-1] in avoid:
            return None
        txt = spl[1] if spl[1] not in avoid else spl[2]
        return Etapa(
            familia=fp_family(etp),
            txt=txt
        )
    m = _re(r'ciclos formativos -> .*? -> ([^>]+)', 1)
    if m:
        return Etapa(
            familia=fp_family(etp),
            txt=m.rstrip(" -")
        )
    if _re(r"^artísticas -> música y danza -> música -> ([^>]+) -> interpretación -> itinerario .*? -> "):
        return Etapa(
            familia="Música",
            txt=spl[6]
        )
    if _re(r"^artísticas -> música y danza -> música -> ([^>]+) -> .*"):
        return Etapa(
            familia="Música",
            txt=spl[4]
        )
    if _re(r"^enseñanzas artísticas música -> ([^>]+) -> .*"):
        return Etapa(
            familia="Música",
            txt=spl[2]
        )
    if _re(r"^artísticas -> música y danza -> danza -> ([^>]+) -> .*"):
        return Etapa(
            familia="Danza",
            txt=spl[4]
        )
    if _re(r"^enseñanzas artísticas danza -> ([^>]+) -> .*"):
        return Etapa(
            familia="Danza",
            txt=spl[2]
        )
    m = _re(r'grado (medio|superior|e|a) -> .*? -> ([^>]+)', 2)
    if m:
        return Etapa(
            familia=fp_family(etp),
            txt=m.rstrip(" -")
        )
    if _re(r"^técnico profesional -> .+"):
        return Etapa(
            familia=fp_family(etp),
            txt=spl[1]
        )
    if _re(r"grado .*? -> capacitación digital"):
        return Etapa(
            familia=fp_family(etp),
            txt="capacitación digital"
        )
    if _re(r"\b(bachibac|bachillerato|secundaria|eso)\b"):
        return SECUNDARIA
    if _re(r"\b(infantil|primaria)\b"):
        return MAGISTERIO
    if _re(r".*educación básica obligatoria.*"):
        return EBO
    m = _re(r'educación especial -> ([^>]+)', 1)
    if m:
        return Etapa(
            familia="Educación especial",
            txt=m.rstrip(" -")
        )
    if _re(r"\bthat's english\b"):
        return Etapa(
            familia="EOI",
            txt="That's Inglés"
        )


def parse_etapa(e: Etapa):
    if e.txt == "electricidad y electrónica y fabricación mecánica":
        yield e.merge(txt="electricidad y electrónica")
        yield e.merge(txt="fabricación mecánica")
        return
    if e.txt == "fabricación mecánica e instalación y mantenimiento":
        yield e.merge(txt="fabricación mecánica")
        yield e.merge(txt="instalación y mantenimiento")
        return
    if e.txt.startswith("talleres ocupacionales"):
        yield e.merge(txt="talleres ocupacionales")
        return
    if e.txt == "actividades agrarias":
        yield e.merge(txt="agraria")
        return

    if e.familia == "Diseño":
        if e.txt in ("estilismo de indumentaria", "modelismo de indumentaria"):
            yield e.merge(txt="artes aplicadas a la indumentaria")
            return
        if e.txt == "grabado y técnicas de estampación":
            yield e.merge(txt="artes aplicadas al libro")
            return
        if e.txt == "estilismo de indumentaria":
            yield e.merge(txt="artes aplicadas a la indumentaria")
            return
        if e.txt == "grabado y técnicas de estampación":
            yield e.merge(txt="artes aplicadas al libro")
            return
        if len(e.txt.split()) == 1:
            if e.txt.lower() == "gráfico":
                yield e.merge(txt="Diseño gráfico")
                return
            yield e.merge(txt="diseño de "+e.txt.lower())
            return
    if e.familia == "Música" and e.txt.lower() == "dirección":
        yield e.merge(txt="dirección (música)")
        return
    yield e


def simplificar(etps: Set[Etapa]):
    if len(set((SECUNDARIA, MAGISTERIO, EBO)).difference(etps)) == 0:
        etps.remove(EBO)
    return tuple(sorted(etps))


CT: Dict[int, Set[Etapa]] = {}
OK: Dict[Etapa, Dict[str, Set[str]]] = {}
KO = set()
with DBLite(ARG.db) as db:
    db.execute("sql/etapas.sql")
    for c, abr, etp in db.to_tuple('''
        select 
            e.centro,
            t.abr,
            e.txt
        from
            ETAPA_AUX2 e
            join centro c on e.centro=c.id
            join tipo t on c.tipo=t.id
    '''):
        new_etp = get_etapa(abr, etp)
        if new_etp is None:
            #logger.warning(f"https://gestiona.comunidad.madrid/wpad_pub/run/j/MostrarFichaCentro.icm?cdCentro={c}: {abr} - {etp}")
            KO.add((abr, etp))
            continue
        for e in parse_etapa(new_etp):
            if e not in OK:
                OK[e] = {}
            if etp not in OK[e]:
                OK[e][etp] = set()
            OK[e][etp].add(abr)
            if c not in CT:
                CT[c] = set()
            CT[c].add(e)

    all_etp = sorted(set([e for sub_list in CT.values() for e in sub_list]))
    for c, etps in sorted(CT.items()):
        for e in simplificar(etps):
            db.insert("MACRO_ETAPA", familia=e.familia, txt=e.get_txt(), cuerpo=e.get_cuerpo(), id=all_etp.index(e), _or="ignore")
            db.insert("MACRO_ETAPA_CENTRO", centro=c, etapa=all_etp.index(e))

    for new_etp, abretp in sorted(OK.items()):
        #print(new_etp.to_str())
        for etp, abrs in sorted(abretp.items()):
            #print("  ", ",".join(sorted(abrs)), etp)
            db.insert("MACRO_ETAPA_SUB", etapa=all_etp.index(new_etp), subetapa=etp, _or="ignore")

    #print("")
    for abr, etp in sorted(KO):
        #print(abr, etp)
        db.insert("MACRO_ETAPA_SUB", etapa=-1, subetapa=etp, _or="ignore")

    db.execute('''
        DROP VIEW IF EXISTS ETAPA_AUX2;
        DROP VIEW IF EXISTS ETAPA_AUX1;
    ''')
