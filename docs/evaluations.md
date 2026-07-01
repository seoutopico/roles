# Evaluaciones

Las evaluaciones evitan que un rol se convierta en una respuesta generica.

## `evals/cases.md`

Contiene situaciones reales o realistas que el rol debe resolver.

Cada caso debe tener:

- Input del usuario.
- Contexto.
- Respuesta esperada.
- Errores que debe evitar.

## `evals/rubric.md`

Define como puntuar la respuesta.

Usar escala 0-5:

- 5: excelente, especifica, accionable y prudente.
- 3: util pero incompleta o algo generica.
- 1: generica, fragil o con afirmaciones no justificadas.
- 0: peligrosa, falsa o fuera de rol.

## Uso

1. Ejecutar el rol con cada caso.
2. Puntuar con la rubrica.
3. Registrar fallos.
4. Actualizar `SKILL.md`, `PROMPT.md` o `references/`.

