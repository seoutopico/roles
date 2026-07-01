# Casos de evaluacion

## Caso 1: Chatbot de atencion al cliente sin baseline

### Input

"Somos una empresa SaaS B2B con 12.000 tickets mensuales. Queremos un chatbot con IA generativa para reducir costes de soporte. Tenemos base de conocimiento en Notion, tickets historicos en Zendesk y clientes enterprise. Que modelo usamos y cuanto ROI podemos prometer?"

### Respuesta esperada

Debe:

- Rechazar prometer ROI sin baseline y separar ahorro teorico de ahorro capturable.
- Pedir datos: coste por ticket, tiempos, categorias, resolucion en primer contacto, CSAT, escalados, idiomas, contratos enterprise, sensibilidad de datos y calidad de la KB.
- Comparar alternativas: mejora de KB, deflection asistida, copilot para agentes, chatbot externo y automatizaciones deterministas.
- Proponer piloto estrecho por categorias de bajo riesgo, con RAG, permisos, citas, handoff humano, evals de factualidad y medicion A/B.
- Incluir riesgos: alucinaciones, datos sensibles, prompt injection, overreliance, experiencia de cliente, integracion Zendesk/Notion y coste variable.

### Errores criticos

- Elegir modelo o proveedor sin requisitos.
- Prometer porcentaje de ahorro.
- Recomendar "chatbot" sin evals, datos, fallback ni supervision.
- Ignorar clientes enterprise, privacidad o integraciones.

## Caso 2: Automatizacion agentica de operaciones financieras

### Input

"Quiero que un agente lea facturas, revise contratos, apruebe pagos menores a 5.000 euros y escriba en nuestro ERP. Asi quitamos trabajo manual de finanzas. Como lo montamos rapido?"

### Respuesta esperada

Debe:

- Clasificar el caso como alto riesgo operativo/financiero por acciones en ERP y pagos.
- Limitar autonomia: lectura y recomendacion primero; aprobacion humana obligatoria para pagos; permisos minimos y logs.
- Proponer arquitectura con OCR/document understanding si aplica, extraccion estructurada, reglas deterministas para umbrales, validacion contra proveedores/PO/contrato, tool calling con scopes y colas de aprobacion.
- Definir evals: precision de extraccion, falsos positivos, discrepancias, fraude, latencia, coste, trazabilidad y auditoria.
- Incluir controles OWASP: prompt injection en documentos, output validation, excessive agency, sensitive information disclosure y supply chain.
- Plantear piloto con datos historicos y shadow mode antes de escribir en ERP.

### Errores criticos

- Permitir pagos autonomos desde el inicio.
- Omitir segregacion de funciones, auditoria o rollback.
- Tratar el problema solo como prompt engineering.
- Ignorar fraude, contratos, datos sensibles y permisos.

## Caso 3: CEO pide roadmap corporativo de IA generativa

### Input

"Soy CEO de una empresa industrial de 800 empleados. Todo el mundo propone ideas de IA: ventas, compras, mantenimiento, RRHH y legal. Necesito un roadmap para 2026 y una forma de priorizar sin abrir 30 pilotos."

### Respuesta esperada

Debe:

- Proponer cartera limitada y gobierno de demanda, no una lista generica de casos.
- Definir criterios de priorizacion: valor, frecuencia, viabilidad de datos, riesgo, adopcion, coste total y reutilizacion.
- Recomendar 2-4 dominios iniciales con discovery, no 30 pilotos paralelos.
- Identificar capacidades plataforma: datos, identity, seguridad, evals, observabilidad, legal/compliance, formacion y vendor management.
- Pedir datos: estrategia, P&L, procesos dolorosos, sistemas, madurez de datos, restricciones regulatorias, geografias y presupuesto.
- Definir cadencia: discovery, pilotos medibles, kill criteria, comite liviano y reporte ejecutivo.

### Errores criticos

- Dar un catalogo generico de use cases.
- Confundir roadmap con calendario de demos.
- Ignorar cambio organizativo, owners y capacidades comunes.
- No incluir criterios para matar iniciativas.

## Caso 4: Equipo tecnico quiere fine-tuning por defecto

### Input

"Tenemos respuestas inconsistentes en un asistente interno de ventas. El equipo propone fine-tuning de un modelo grande. Tenemos CRM, PDFs de producto y playbooks comerciales. Que opinas?"

### Respuesta esperada

Debe:

- No aceptar fine-tuning por defecto.
- Diagnosticar si el problema es contexto, instrucciones, retrieval, datos contradictorios, evals insuficientes, temperatura, formato o falta de guardrails.
- Comparar prompting, RAG, plantillas, tool calling al CRM, reranking, evals y solo despues fine-tuning.
- Pedir ejemplos de fallos, dataset de preguntas, versiones de documentos, permisos CRM, metricas de calidad y coste/latencia.
- Proponer plan: taxonomia de fallos, eval offline, mejoras de contexto, pruebas contra baseline y decision posterior de fine-tuning si persiste un patron repetible.

### Errores criticos

- Recomendar fine-tuning sin dataset ni evals.
- Omitir RAG y permisos de CRM.
- No distinguir conocimiento actualizado de estilo/formato.
- No definir metrica de mejora.

## Caso 5: Propuesta de herramienta GenAI externa

### Input

"Un proveedor nos vende una plataforma de agentes para RRHH que resume entrevistas, puntua candidatos y recomienda contrataciones. Dice que cumple todo. Que preguntas hacemos antes de comprar?"

### Respuesta esperada

Debe:

- Marcar RRHH/reclutamiento como caso de alto riesgo en muchas jurisdicciones, especialmente en contexto UE.
- Separar resumen asistido de puntuacion/recomendacion de contratacion.
- Pedir informacion sobre datos de entrenamiento, validacion, sesgo, explicabilidad, logs, retencion, seguridad, DPA, subprocesadores, residencia de datos y auditorias.
- Exigir pruebas con datos propios, human oversight, derecho de revision, documentacion de limitaciones y evaluacion de impacto.
- Incluir preguntas de procurement: SLA, exportabilidad, lock-in, incidentes, roadmap, cambios de modelo, indemnidades y apagado.
- Recomendar involucrar legal, DPO/compliance, seguridad, RRHH y representantes internos antes de piloto.

### Errores criticos

- Aceptar claims del proveedor sin evidencia.
- Tratar RRHH como bajo riesgo.
- Omitir sesgo, explicabilidad, derechos de candidatos o AI Act.
- Recomendar compra directa sin piloto controlado.
