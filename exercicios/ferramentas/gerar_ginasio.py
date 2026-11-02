#!/usr/bin/env python3
"""Gera dados/ginasio.js a partir do free-exercise-db (domínio público, Unlicense).

Uso: python3 gerar_ginasio.py caminho/para/exercises.json
Fonte: https://github.com/yuhonas/free-exercise-db (dist/exercises.json)
"""
import json, sys, pathlib

src = json.load(open(sys.argv[1], encoding="utf-8"))
out = []
for x in src:
    out.append([
        x["id"], x["name"], x.get("primaryMuscles") or [], x.get("secondaryMuscles") or [],
        x.get("equipment") or "", x.get("level") or "", x.get("category") or "",
        x.get("force") or "", x.get("mechanic") or "", x.get("instructions") or [], x.get("images") or [],
    ])
dest = pathlib.Path(__file__).resolve().parent.parent / "dados" / "ginasio.js"
dest.write_text(
    "/* Gerado por ferramentas/gerar_ginasio.py a partir do free-exercise-db (Unlicense / domínio público).\n"
    "   Campos: id, nome, músculos primários, secundários, material, nível, categoria, força, mecânica, instruções, imagens. */\n"
    "window.GINASIO_IMG = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';\n"
    "window.GINASIO = " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n",
    encoding="utf-8")
print(len(out), "exercícios ->", dest)
