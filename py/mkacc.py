from core.github import GH
import json

with open("../src/assets/accesibilidad.json", "w") as f:
    json.dump(
        GH.get_accesibilidad(),
        f,
        indent=2
    )
