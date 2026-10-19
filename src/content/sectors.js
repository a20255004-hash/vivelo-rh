/* Contenido migrado desde la versión original (legacy/index-original.html) y ampliado. */
export const sectors = {
 dims:[
  {n:"Para qué existe RR.HH.", pri:"Que la empresa tenga el talento que necesita para ser rentable y competitiva.", pub:"Que la entidad cuente con servidores idóneos para brindar servicios a la ciudadanía, con mérito y legalidad."},
  {n:"Autonomía", pri:"Alta: la empresa decide políticas, sueldos y procesos dentro de la ley.", pub:"Baja: casi todo está regulado por normas, directivas de SERVIR y la Ley de Presupuesto de cada año."},
  {n:"Cómo se ingresa", pri:"Selección con el método que la empresa elija, sin discriminar.", pub:"Concurso público de méritos con bases, cronograma, comité y resultados publicados (salvo cargos de confianza)."},
  {n:"Documentación", pri:"La necesaria para cumplir la ley y controlar; varía mucho por tamaño.", pub:"Todo es expediente: informes técnicos, resoluciones, oficios, foliación. Lo que no está escrito no existe."},
  {n:"Plazos", pri:"Los fija el negocio; suelen ser cortos y cambiantes.", pub:"Los fijan las normas (procedimiento administrativo, concursos, PAD); suelen ser largos pero estrictos."},
  {n:"Presupuesto", pri:"Se negocia con finanzas según resultados.", pub:"Fijado por la Ley de Presupuesto y el presupuesto institucional; contratar exige certificación y registro en el AIRHSP."},
  {n:"Relación con directivos", pri:"Gerentes que piden velocidad y resultados.", pub:"Autoridades políticas y funcionarios de confianza que cambian con cada gestión; presión en años electorales."},
  {n:"Responsabilidad", pri:"Laboral y civil para la empresa; reputacional para el profesional.", pub:"Además, responsabilidad administrativa (y eventualmente penal) personal del servidor por lo que firma."},
  {n:"Lo mejor", pri:"Velocidad, innovación, variedad de prácticas, más margen para proponer.", pub:"Impacto público, estabilidad relativa, aprendizaje normativo profundo, rutas de carrera en el Estado."},
  {n:"Lo difícil", pri:"Presión por costos, rotación, a veces informalidad en empresas pequeñas.", pub:"Trámite, poca autonomía, normas que cambian, coexistencia de regímenes y presión política."}
 ],
 regimenes:[
  {code:"728", n:"Régimen de la actividad privada", who:"Empresas privadas; también algunas entidades públicas y los obreros municipales.", in:"Contratación directa (privado). En entidades públicas, concurso.", ben:"Gratificaciones (julio y diciembre), CTS, vacaciones de 30 días, asignación familiar.", note:"Regla general del sector privado; en el Estado se aplica con las restricciones presupuestales del sector público."},
  {code:"276", n:"Carrera administrativa", who:"Servidores nombrados de entidades públicas.", in:"Concurso público para nombramiento; en la práctica, el ingreso a este régimen está muy restringido.", ben:"Régimen propio de remuneraciones, beneficios y carrera por niveles.", note:"Régimen en extinción progresiva conforme se implemente la Ley 30057."},
  {code:"1057", n:"Contratación Administrativa de Servicios (CAS)", who:"El régimen con más servidores del Estado.", in:"Concurso público de méritos, salvo CAS de confianza.", ben:"Tras la Ley 32563 (2026): gratificaciones de julio y diciembre y CTS al término del vínculo, con implementación progresiva hasta 2030 según el D.S. 142-2026-EF. Contratos indeterminados para labores permanentes; determinados hasta 5 años.", note:"Ley 31131 había dispuesto que los contratos vigentes fueran indeterminados; la Ley 32563 ratifica esa condición."},
  {code:"30057", n:"Servicio Civil", who:"Entidades que culminaron su tránsito y servidores que concursan a esos puestos.", in:"Concurso público de méritos.", ben:"Régimen único con gratificaciones y CTS, gestión del rendimiento y capacitación como derechos y obligaciones.", note:"El tránsito es progresivo; SERVIR publica el avance por entidad."}
 ],
 entities:[
  {n:"Ministerio", d:"Oficina General de Recursos Humanos con equipos especializados, alta exposición a Control y al Congreso. Gestiona miles de servidores en varios regímenes."},
  {n:"Gobierno regional", d:"Sede central más direcciones regionales (educación, salud, agricultura) con ORH propias. Regímenes especiales como los de docentes y salud conviven con 276, 728 y CAS."},
  {n:"Municipalidad", d:"Subgerencia o unidad de RR.HH. pequeña; obreros en régimen 728, mucho CAS, alto peso del trámite y de la gestión política de turno. En distritos pequeños, una o dos personas hacen todo."},
  {n:"Organismo público", d:"Organismos técnicos (supervisores, reguladores, ejecutores) con mayor especialización y, en algunos casos, avance en el tránsito a la Ley 30057."}
 ],
 cases:[
  {n:"Cubrir una vacante urgente", pri:[["Día 1","El jefe pide; RR.HH. valida perfil y banda"],["Días 2–7","Aviso, filtro, entrevistas"],["Días 8–12","Terna, entrevista final, oferta"],["Días 13–20","Examen médico, documentos, ingreso"]], pub:[["Semana 1","Requerimiento con perfil; certificación presupuestal"],["Semana 2","Aprobación de bases y cronograma"],["Semanas 2–3","Difusión pública de la convocatoria"],["Semanas 3–5","Evaluación curricular, entrevista, resultados, contrato"]], lesson:"En el privado, la urgencia acelera; en el público, la urgencia se planifica antes: el procedimiento no se puede saltar."},
  {n:"Un trabajador comete una falta", pri:[["Hecho","Acta y pruebas"],["Imputación","Carta de preaviso (≥ 6 días naturales)"],["Descargo","Análisis"],["Decisión","Despido o sanción motivada"]], pub:[["Hecho","Reporte a la Secretaría Técnica"],["Precalificación","Informe de la Secretaría Técnica"],["Instrucción","Órgano instructor, descargos"],["Sanción","Órgano sancionador; apelación ante el Tribunal del Servicio Civil cuando corresponde"]], lesson:"En ambos hay derecho de defensa; en el público, además, autoridades definidas por ley y plazos de prescripción."},
  {n:"Pagar un beneficio nuevo", pri:[["Ley","Se publica la norma"],["Cálculo","RR.HH. calcula impacto"],["Pago","Se paga desde la vigencia"]], pub:[["Ley","Se publica la norma"],["Reglamento","Se espera el reglamento y lineamientos del MEF"],["Presupuesto","Se verifica disponibilidad y se registra en AIRHSP"],["Pago","Según cronograma de implementación"]], lesson:"Ejemplo real 2026: la Ley 32563 reconoce gratificaciones a los CAS, pero su pago sigue un cronograma progresivo fijado por reglamento."}
 ],
 privSizes:[
  {n:"Pequeña", d:"El dueño decide. RR.HH. (si existe) es una persona multifunción. Riesgo frecuente: informalidad, contratos mal usados, SST sin comité."},
  {n:"Mediana", d:"Equipo pequeño con funciones mezcladas. Empieza la formalización: perfiles, bandas, plan de capacitación. Mucho trabajo operativo."},
  {n:"Grande", d:"Áreas especializadas, sistemas, HRBPs, sindicatos y políticas corporativas. Más carrera, más política interna."}
 ]
};
