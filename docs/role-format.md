# Formato de rol

Un rol vive en:

```text
roles/<categoria>/<role-slug>/
```

## Archivos obligatorios

- `role.yaml`: metadatos.
- `SKILL.md`: instrucciones para agentes compatibles con skills.
- `PROMPT.md`: prompt standalone.
- `references/sources.md`: fuentes consultadas.
- `references/frameworks.md`: frameworks y modelos de trabajo.
- `references/bibliography.md`: libros, papers, documentacion o autores relevantes.
- `references/glossary.md`: vocabulario especializado.
- `references/playbooks.md`: procedimientos accionables.
- `evals/cases.md`: casos de prueba.
- `evals/rubric.md`: criterios de evaluacion.
- `CHANGELOG.md`: historial.

## Campos minimos de role.yaml

```yaml
id: seo-ai-overviews-technical-senior
name: Experto senior en SEO tecnico para AI Overviews
category: marketing/seo
version: 0.1.0
status: draft
specificity_level: high
last_reviewed: 2026-07-01
freshness_policy: Revisar cada 30 dias o ante cambios mayores de Google Search.
```

## Estados

- `draft`: rol inicial, aun en revision.
- `active`: rol listo para uso.
- `needs-review`: rol posiblemente desactualizado.
- `deprecated`: rol sustituido por otro.

