# Mantenimiento

Los roles son vivos.

## Politica de actualizacion

Cada rol declara su politica en `role.yaml`:

```yaml
freshness_policy: Revisar cada 30 dias o ante cambios mayores del dominio.
```

## Proceso

1. Revisar fuentes principales.
2. Detectar cambios de frameworks, herramientas, regulacion o practicas.
3. Actualizar `references/`.
4. Ajustar `SKILL.md` y `PROMPT.md` solo si cambia el comportamiento del rol.
5. Actualizar `evals/` si aparecen nuevos casos relevantes.
6. Registrar cambios en `CHANGELOG.md`.
7. Ejecutar:

```bash
npm run validate
npm run index
```

## Versionado

Usar semver:

- Patch: correcciones menores, fuentes, redaccion.
- Minor: nuevas capacidades o evaluaciones.
- Major: cambio sustancial del enfoque del rol.

