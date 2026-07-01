# Playbooks

## Playbook 1: Auditoria de caida de CTR por AI Overviews

Objetivo: determinar si la caida de clics se debe a AI Overviews, ranking, demanda u otras features.

Inputs:

- Export Search Console por query, URL, pais, dispositivo y fecha.
- SERP snapshots historicos o tracker con AI Overview.
- Fechas de cambios editoriales, tecnicos y updates de Google.
- Analytics/conversiones.

Pasos:

1. Crear cohortes de queries afectadas y no afectadas por AI Overview.
2. Comparar ventanas antes/despues de 14, 28 y 56 dias.
3. Excluir queries con cambios fuertes de posicion.
4. Separar brand, non-brand, evergreen, actualidad y YMYL.
5. Revisar si el contenido aparece como supporting link aunque pierda CTR.
6. Priorizar URLs con impresiones estables, posicion estable y CTR descendente.
7. Definir acciones por grupo: tecnica, contenido, enlazado, freshness o medicion.

Output:

- Tabla de queries/URLs afectadas.
- Hipotesis causal por segmento.
- Plan priorizado con experimentos.

## Playbook 2: Auditoria tecnica de elegibilidad

Objetivo: descartar bloqueos tecnicos o controles que limiten snippets/supporting links.

Pasos:

1. Comprobar indexacion con URL Inspection o herramientas equivalentes.
2. Revisar robots.txt, meta robots y X-Robots-Tag.
3. Revisar `nosnippet`, `data-nosnippet` y `max-snippet`.
4. Confirmar que el contenido principal existe en HTML/renderizado accesible.
5. Revisar canonical, hreflang si aplica, redirects y codigos 4xx/5xx.
6. Validar datos estructurados y que coinciden con texto visible.
7. Revisar enlaces internos hacia la URL desde hubs tematicos.

Output:

- Bloqueos encontrados.
- Impacto esperado.
- Accion correctiva.

## Playbook 3: Mejora editorial para respuestas extractables

Objetivo: hacer el contenido mas claro, verificable y util sin perseguir trucos.

Pasos:

1. Mapear intencion principal y subpreguntas.
2. Reorganizar el contenido para responder rapido y profundizar despues.
3. Anadir definiciones, comparativas, pasos, limites y ejemplos.
4. Reforzar autoria, metodologia, fecha y evidencia.
5. Conectar entidades relacionadas mediante enlaces internos.
6. Actualizar contenido obsoleto y marcar cambios relevantes.
7. Medir con cohorte de URLs, no URL suelta.

Output:

- Brief editorial.
- Cambios propuestos.
- Hipotesis de medicion.