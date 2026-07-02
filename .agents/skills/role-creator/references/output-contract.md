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

## Control final obligatorio

Antes de terminar, comprobar:

- No hay `__PLACEHOLDER__`.
- No hay `PENDIENTE_VERIFICAR` salvo que se explique como gap real.
- `role.yaml` y carpeta tienen el mismo id.
- `role.yaml` declara `anti_generic_scope` claro.
- `SKILL.md` tiene frontmatter valido y describe cuando usar el rol.
- `PROMPT.md` se puede usar fuera del repositorio.
- `references/sources.md` incluye URL, tipo de fuente, fecha de consulta, utilidad y estado.
- `references/frameworks.md` contiene frameworks accionables, no listas decorativas.
- `references/playbooks.md` contiene procesos operativos que el rol puede ejecutar.
- `references/glossary.md` contiene terminos que reducen ambiguedad real.
- `evals/cases.md` incluye casos dificiles que detectan respuestas genericas.
- `evals/rubric.md` premia evidencia, criterio experto, limites y uso de contexto.
- `CHANGELOG.md` explica que se creo o cambio.
- `npm run validate` pasa.

## Control si hubo research

Si se activo `references/research-protocol.md`, comprobar ademas:

- Hay role brief claro.
- Hay matriz de fuentes.
- Hay claims ligados a fuentes.
- Hay contradicciones, drift o limites documentados.
- Hay gaps documentados y clasificados como bloqueantes o no bloqueantes.
- Los frameworks, playbooks y evals derivan de la investigacion.
- El rol no queda como `active` si falta evidencia critica.

## Control de cierre

La respuesta final al usuario debe incluir:

- ruta del rol;
- id del rol;
- validaciones ejecutadas;
- si hubo subagentes;
- fuentes/gaps relevantes;
- como usarlo con `$use-role`.

