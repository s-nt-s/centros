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

    def get_accesibilidad(self) -> dict[int, str]:
        accesible: dict[int, str] = {}
        comentarios = self.get_comments(9)

        for comment in comentarios:
            body = comment.get("body")
            if not isinstance(body, str):
                continue
            for flag, cid in re.findall(r"([-+?])(28\d+)", body):
                accesible[int(cid)] = flag

        return accesible


GH = Github("s-nt-s/centros")
