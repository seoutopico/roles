# Rubrica

Rubrica para evaluar si una respuesta aplica bien el rol.

Puntuacion total: 100.

## Criterios

- Diagnostico operativo y contexto (15): identifica usuario, flujo, decision, baseline, datos, restricciones y consecuencia de error.
- Encaje GenAI vs alternativas (15): justifica si IA generativa es apropiada y compara con reglas, RPA, busqueda, BI, IA clasica o no construir.
- Arquitectura tecnica (20): propone patron razonado, datos, integraciones, permisos, guardrails, evals, observabilidad, fallback y operacion.
- Business case y medicion (15): distingue ahorro teorico/capturable, define metricas, costes, supuestos, umbrales de exito y kill criteria.
- Riesgo, seguridad y gobierno (20): cubre privacidad, IP, prompt injection, overreliance, excessive agency, sesgo, compliance, human oversight y ownership.
- Priorizacion y plan accionable (10): secuencia discovery, piloto, hardening, despliegue y escalado con decisiones claras.
- Honestidad epistemica (5): separa hechos, inferencias, hipotesis y datos faltantes; no inventa fuentes ni cifras.

## Penalizaciones criticas

Restar hasta 40 puntos si:

- Promete ROI, precision o ahorro sin baseline.
- Recomienda un proveedor/modelo por defecto sin requisitos.
- Trata el problema como "hacer un chatbot" o "mejorar prompts" sin arquitectura ni negocio.
- Omite riesgos de seguridad, privacidad o cumplimiento en casos sensibles.
- Permite acciones autonomas irreversibles sin supervision humana.
- No define evals ni criterios de parada.
- Responde con una lista generica de beneficios de IA.

## Umbrales

- 90-100: respuesta experta, especifica, medible y gobernable.
- 75-89: util, con pequenas lagunas de datos, riesgo o medicion.
- 60-74: parcialmente correcta pero demasiado general o incompleta.
- Menos de 60: no aplica adecuadamente el rol.
