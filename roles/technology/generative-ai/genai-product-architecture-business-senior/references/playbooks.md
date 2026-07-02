# Playbooks

Procedimientos accionables para aplicar el rol.
## Inputs necesarios generales

- Problema operativo, audiencia y owner del caso.
- Baseline cuantitativo o evidencia de situacion actual.
- Restricciones de datos, seguridad, compliance, presupuesto e integraciones.
- Criterios de exito, umbrales de parada y horizonte de decision.

## Senales de error generales

- Se propone GenAI sin baseline ni alternativa no GenAI.
- Se confunde demo con producto operable.
- No hay owner claro de negocio, tecnico o riesgo.
- No se definen evals, fallback, logging o revision humana.
- El caso depende de datos, permisos o regulacion no verificados.

## Playbook 1: Discovery de oportunidad GenAI

Objetivo: convertir una idea vaga en una decision de inversion.

1. Definir el problema operativo en una frase: "Para [usuario], reducir/mejorar [metrica] en [flujo] sin superar [riesgo/coste]".
2. Mapear el flujo actual: entradas, decisiones, sistemas, personas, tiempos, errores y coste.
3. Medir baseline: volumen, tiempo por tarea, calidad, retrabajo, escalados, ingresos o perdida.
4. Identificar restricciones: datos, permisos, privacidad, compliance, latencia, integraciones, presupuesto y vendor policy.
5. Evaluar si GenAI encaja usando el filtro de `frameworks.md`.
6. Escribir tres opciones: no construir, piloto minimo, solucion objetivo.
7. Definir decision final: construir, prototipar, pausar o resolver de otra forma.

Salida: ficha de caso de uso, supuestos, metricas, riesgos, decision recomendada y datos faltantes.

## Playbook 2: Diseno de piloto medible

Objetivo: aprender con usuarios reales sin confundir demo con producto.

1. Formular hipotesis: "Si [solucion] entonces [metrica] mejora de [baseline] a [objetivo] para [usuarios]".
2. Seleccionar alcance estrecho: una tarea, un grupo de usuarios, un dataset, un flujo y una ventana temporal.
3. Crear dataset de eval con casos normales, borde, adversariales y errores historicos.
4. Definir metrica de exito y umbral de parada.
5. Implementar arquitectura minima con logging, control de coste, permisos, guardrails y fallback.
6. Ejecutar eval offline antes de usuarios.
7. Ejecutar piloto online con supervision humana y canal de feedback.
8. Comparar contra baseline y calcular ahorro capturable, no solo tiempo percibido.
9. Decidir: escalar, iterar, pivotar, pausar o retirar.

Salida: decision document con resultados, costes, riesgos residuales y siguiente inversion.

## Playbook 3: Arquitectura de solucion empresarial

Objetivo: pasar de prototipo a sistema operable.

1. Definir requisitos no funcionales: latencia, disponibilidad, privacidad, auditoria, coste, seguridad y soporte.
2. Elegir patron: prompting, RAG, tools, agentes, fine-tuning, modelo local o alternativa no GenAI.
3. Disenar datos: fuentes, permisos, calidad, actualizacion, retencion, PII, lineage y controles.
4. Disenar ejecucion: modelo, orquestador, herramientas, colas, cache, model routing y fallbacks.
5. Disenar seguridad: autenticacion, autorizacion, aislamiento, secrets, prompt injection, output validation y limites de accion.
6. Disenar evals: calidad, riesgo, regresion, coste, latencia y negocio.
7. Disenar operacion: trazas, alertas, revision humana, incidentes, rollback, SLA y owner.
8. Documentar dependencias: proveedor, modelo, costes variables, licencias y cambios regulatorios.

Salida: arquitectura objetivo, tradeoffs, riesgos, coste estimado, plan de hardening y criterios de go-live.

## Playbook 4: Priorizacion de cartera GenAI

Objetivo: ordenar muchas ideas y evitar dispersion.

1. Agrupar ideas por dominio operativo y plataforma reutilizable.
2. Descartar casos sin owner, sin baseline, sin usuario real o con riesgo no aceptado.
3. Puntuar valor, frecuencia, viabilidad, riesgo, adopcion y coste total.
4. Separar apuestas: quick wins controlados, capacidades plataforma, casos estrategicos y experimentos.
5. Identificar dependencias comunes: datos, identity, seguridad, evals, observabilidad, legal, change management.
6. Definir roadmap trimestral con limites de WIP.
7. Revisar cada ciclo con evidencia: metricas, aprendizaje, coste y deuda acumulada.

Salida: backlog priorizado, mapa de dependencias, presupuesto, owners y kill criteria.

## Playbook 5: Revision de riesgo y gobierno

Objetivo: asegurar que una iniciativa puede operar sin riesgo desproporcionado.

1. Clasificar el sistema: uso interno/externo, impacto en personas, sector, datos sensibles y autonomia.
2. Revisar riesgos NIST: confabulacion, privacidad, informacion, seguridad, sesgo, IP, cadena de valor y configuracion humano-IA.
3. Revisar OWASP: prompt injection, output handling, supply chain, sensitive disclosure, excessive agency y overreliance.
4. Revisar cumplimiento: EU AI Act si aplica, GDPR, contratos, politicas internas y regulacion sectorial.
5. Definir controles: human-in-the-loop, logging, permisos, red teaming, aprobaciones, contenido permitido, fallback y respuesta a incidentes.
6. Documentar responsabilidad: owner de producto, owner tecnico, legal/compliance, seguridad, soporte y negocio.
7. Programar revision periodica por drift, cambios de modelo, nuevos datos o nuevos usos.

Salida: registro de riesgos, controles, responsables, decision de salida a produccion y revisiones.

