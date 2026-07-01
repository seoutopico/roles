# Output Contract

Todo rol generado debe contener:

```text
role.yaml
SKILL.md
PROMPT.md
references/sources.md
references/frameworks.md
references/bibliography.md
references/glossary.md
references/playbooks.md
evals/cases.md
evals/rubric.md
CHANGELOG.md
```

## Control final

Antes de terminar, comprobar:

- No hay `__PLACEHOLDER__`.
- `role.yaml` y carpeta tienen el mismo id.
- `SKILL.md` tiene frontmatter valido.
- `PROMPT.md` se puede usar fuera del repositorio.
- `evals/` incluye situaciones que detectan respuestas genericas.
- `npm run validate` pasa.
