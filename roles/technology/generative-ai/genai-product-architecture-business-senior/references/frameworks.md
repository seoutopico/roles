# Frameworks

Marcos de decision accionables para el rol.

## 1. Filtro de encaje GenAI

Usar antes de proponer arquitectura.

1. Tarea: la salida requiere lenguaje, razonamiento, resumen, generacion, transformacion semantica, multimodalidad o interaccion natural.
2. Variabilidad: hay suficientes casos no triviales donde reglas rigidas serian costosas o fragiles.
3. Tolerancia al error: el negocio puede aceptar incertidumbre con supervision, evaluacion y fallback.
4. Datos/contexto: existe informacion accesible, autorizada y de calidad suficiente para aterrizar respuestas.
5. Valor capturable: el beneficio se convierte en ahorro real, ingreso, calidad, velocidad o reduccion de riesgo.
6. Operabilidad: hay owner, flujo de soporte, monitorizacion, presupuesto y plan de cambio.
7. Riesgo: privacidad, IP, seguridad, cumplimiento y reputacion son controlables.

Salida: `Construir`, `Prototipar`, `Resolver sin GenAI`, `Pausar por datos/riesgo`, o `Necesita discovery`.

## 2. Matriz valor-viabilidad-riesgo

Puntuar de 1 a 5:

- Valor economico: ahorro capturable, ingreso incremental, retencion, calidad o reduccion de riesgo.
- Frecuencia y escala: volumen de tareas, usuarios afectados y repetibilidad.
- Viabilidad tecnica: datos, integraciones, latencia, calidad esperada y madurez del patron.
- Adopcion: claridad del usuario, cambio de proceso, incentivos y entrenamiento.
- Riesgo residual: impacto de errores, privacidad, regulacion, sesgo, seguridad y proveedor.
- Coste total: inferencia, almacenamiento, evaluacion, soporte, integraciones y mantenimiento.

Priorizar casos con alto valor, alta repetibilidad, riesgo controlable y aprendizaje reutilizable. Evitar quick wins que crean deuda de gobierno o costes variables sin valor capturable.

## 3. Canvas de producto GenAI

Completar para cada caso:

- Usuario y job-to-be-done.
- Momento del flujo donde entra la IA.
- Inputs, fuentes de contexto y permisos.
- Output esperado y accion posterior.
- Humano responsable de aprobar, corregir o auditar.
- Metricas de calidad, negocio, coste y riesgo.
- Dataset de evaluacion y casos borde.
- Fallback cuando el modelo falla o no sabe.
- Riesgo maximo aceptable y criterios de parada.

## 4. Decision de patron tecnico

- Prompting simple: tareas acotadas, contexto pequeno, bajo riesgo y salida no critica.
- RAG: conocimiento privado, actualizado o verificable que no conviene meter en el prompt manualmente.
- Function calling/tools: cuando el sistema debe consultar sistemas, calcular, escribir datos o ejecutar acciones con permisos.
- Agentes: cuando hay planificacion multi-paso, herramientas, estado y decisiones intermedias; exigir limites de autonomia y aprobaciones.
- Fine-tuning: cuando hay formato, estilo, clasificacion o comportamiento repetible que no se resuelve bien con prompt/RAG; exigir dataset, eval y coste de mantenimiento.
- Modelos pequenos/locales: cuando privacidad, coste, latencia o despliegue offline pesan mas que capacidad maxima.
- No GenAI: cuando la tarea requiere determinismo, reglas claras, baja variabilidad o explicabilidad estricta.

## 5. Evals antes de escala

Separar cuatro niveles:

- Evals de tarea: exactitud util, completitud, formato, factualidad, citas, accionabilidad.
- Evals de riesgo: datos sensibles, instrucciones maliciosas, sesgo, toxicidad, IP, overreliance.
- Evals de sistema: latencia, coste por tarea, disponibilidad, trazas, fallbacks, errores de integracion.
- Evals de negocio: ahorro capturable, adopcion, conversion, reduccion de retrabajo, NPS interno, calidad revisada por humanos.

Ningun piloto pasa a produccion solo por demos cualitativas.

## 6. Gobierno ligero por nivel de riesgo

- Bajo riesgo: uso interno, sin datos sensibles, sin decisiones sobre personas, con revision humana informal.
- Medio riesgo: datos internos, impacto operativo, acciones reversibles; requiere logging, owner, evals y controles de acceso.
- Alto riesgo: impacto legal, financiero, laboral, medico, educativo, seguridad o derechos; requiere revision legal/compliance, documentacion formal, human-in-the-loop y auditoria.
- Inaceptable o no autorizado: manipulacion, vigilancia indebida, decisiones prohibidas, datos sin base legal o acciones autonomas peligrosas.

## 7. Business case honesto

Distinguir:

- Ahorro teorico: tiempo bruto que una tarea podria reducir.
- Ahorro capturable: reduccion que realmente baja coste, libera capacidad vendible o evita contratacion.
- Valor de calidad: menos errores, menos retrabajo, mejor experiencia o decisiones mas consistentes.
- Valor estrategico: aprendizaje, plataforma reutilizable, ventaja de datos, velocidad de lanzamiento.
- Costes ocultos: evaluacion, supervision, cambio, soporte, seguridad, vendor management y drift.
