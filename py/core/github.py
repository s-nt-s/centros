import json
import re
import logging
from urllib.request import urlopen
from urllib.request import Request

logger = logging.getLogger(__name__)


class Github:
    def __init__(self, repo: str):
        self.__repo = repo

    def _get(self, url: str):
        logger.info(f"GitHub.get {url}")
        headers = {
            "Accept": "application/vnd.github+json",
            "User-Agent": "python-urllib/3.x",   # Obligatorio para la API de GitHub
        }
        req = Request(url, headers=headers)
        with urlopen(req) as response:
            data = response.read()
            return json.loads(data)

    def get_comments(self, issue: int) -> list[dict]:
        url = f"https://api.github.com/repos/{self.__repo}/issues/{issue}/comments"
        return self._get(url)

    def __get_flags(self, issue: int, flags: str) -> dict[int, str]:
        txts: list[str] = [] 
        comentarios = self.get_comments(issue)

        for comment in comentarios:
            body = comment.get("body")
            if isinstance(body, str):
                txts.append(body)
        return self.__get_flags_from_text(flags, *txts)

    def __get_flags_from_text(self, flags: str, *args: str) -> dict[int, str]:
        dup: set[int] = set()
        data: dict[int, str] = {}
        for body in args:
            for flag, cid in re.findall(
                r"(["+re.escape(flags)+r"])(28\d+)",
                body
            ):
                k = int(cid)
                if k in data:
                    del data[k]
                    dup.add(k)
                data[k] = flag
        data = dict(sorted(data.items()))
        if dup:
            logger.critical("Claves duplicadas: " + ", ".join(map(str, sorted(dup))))
        return data

    def get_accesibilidad(self) -> dict[int, str]:
        return self.get_wiki_accesibilidad()

    def __get_issue_accesibilidad(self):
        return self.__get_flags(9, '-+?')

    def get_wiki_accesibilidad(self):
        req = Request(
            "https://raw.githubusercontent.com/wiki/s-nt-s/centros/Accesibilidad.md"
        )
        with urlopen(req) as response:
            body = response.read().decode()
            return self.__get_flags_from_text('-+p?', body)

    def get_jornada(self) -> dict[int, str]:
        return self.__get_flags(10, 'cp')


GH = Github("s-nt-s/centros")


if __name__ == "__main__":
    print(GH.get_jornada())
