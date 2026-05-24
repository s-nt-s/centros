from core.github import GH
import json


def write(name: str, data:dict):
    with open(f"../src/assets/{name}.json", "w") as f:
        json.dump(
            data,
            f,
            indent=2
        )


write("accesibilidad", GH.get_accesibilidad())
write("jornada", GH.get_jornada())
