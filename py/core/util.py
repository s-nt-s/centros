from hashlib import sha1
from typing import Union, Tuple, Any
import functools
import logging
import re

logger = logging.getLogger(__name__)


def hashme(s):
    return sha1(str(s).encode("utf-8")).hexdigest()


def must_one(arr):
    arr = set(arr)
    if len(arr) == 0:
        raise ValueError("Must one but is empty")
    if len(arr) > 1:
        raise ValueError("Must one but is more: "+", ".join(sorted(arr)))
    val = arr.pop()
    if val is None:
        raise ValueError("Must one but is None")
    return val


def read_file(file: str, *args, **kwargs):
    with open(file, "r") as f:
        txt = f.read().strip()
        txt = txt.format(*args, **kwargs)
        return txt


def to_set_tuple(s: Union[str, list]) -> Tuple[str]:
    if s is None:
        return tuple()
    if isinstance(s, str):
        s = s.split()
    arr = []
    for i in s:
        if i not in arr:
            arr.append(i)
    return tuple(arr)


def tp_join(t: Union[Any, Tuple]):
    if not isinstance(t, tuple):
        return t
    if len(t) == 0:
        return None
    return " ".join(map(str, t))


def fix_char(txt: str):
    if txt is None:
        return None
    for k, v in (
        "ńñ",
        "įá",
        "şª",
        "ŗº",
        "ˇ¡",
        "ķí"
    ):
        txt = txt.replace(k, v)
        txt = txt.replace(k.upper(), v.upper())
    return txt


def logme(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        logger.info(f"{func.__name__}()")
        return func(*args, **kwargs)
    return wrapper


def get_abr_dir(w1: str):
    w1 = w1.lower()
    if w1 == "avenida":
        return "Av."
    if w1 == "bulevar":
        return "Blvr."
    if w1 == "calle":
        return "C/"
    if w1 == "callejon":
        return None
    if w1 == "camino":
        return None
    if w1 == "carrera":
        return None
    if w1 == "carretera":
        return "Ctra."
    if w1 == "paraje":
        return None
    if w1 == "parcela":
        return None
    if w1 == "pasaje":
        return None
    if w1 == "paseo":
        return None
    if w1 == "plaza":
        return "Pl."
    if w1 == "ronda":
        return "Rda."
    if w1 == "senda":
        return None
    if w1 == "urbanizacion":
        return "Urb."
    return None


def parse_dir(dire: str):
    if dire is None:
        return None
    dire = dire.strip()
    if len(dire) == 0:
        return None
    rst = dire.split()
    for i, w in enumerate(rst):
        w = w.lower()
        if w in ("de", "del", "la", "el", "lo", "los"):
            rst[i] = w
    rst[0] = get_abr_dir(rst[0]) or rst[0]
    dire = " ".join(rst)
    dire = re.sub(
        r"\b(s/n|c/v)\b",
        lambda x: x.group().upper(),
        dire,
        flags=re.IGNORECASE
    )
    return dire


def unupper(s: str, rstrip=None):
    if s is None:
        return None
    if rstrip:
        s = s.rstrip(rstrip)
    s = s.strip()
    if len(s) == 0:
        return None
    if s.upper() != s:
        return s
    s = s[0] + s[1:].lower()
    s = re.sub(r"españa\b", "España", s)
    s = re.sub(
        r"psicopedagógica\. ([a-z])",
        lambda x: 'psicopedagógica: '+x.group(1).upper(),
        s,
        flags=re.IGNORECASE
    )
    return s
