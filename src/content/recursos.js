/* Videos y canales de YouTube para reforzar el aprendizaje.
   Solo canales oficiales de entidades públicas peruanas y una universidad, o videos publicados por ellas,
   cuya existencia se comprobó en resultados de búsqueda el 22/10/2026. No se incrustan reproductores
   (privacidad y uso sin conexión): las vistas muestran tarjetas con enlace externo.
   Los videos pueden ser antiguos o quedar desactualizados ante cambios normativos: indícalo al usarlos. */

export const recursos = {
  updated: "2026-10-22",
  note: "Enlaces externos: no forman parte de VÍVELO RH; revisados el 22/10/2026",
  items: [
    { id: "servirtv", t: "ServirTV", by: "SERVIR · Autoridad Nacional del Servicio Civil", url: "https://www.youtube.com/@ServirTV", kind: "canal", topics: ["servir", "sectores", "cas", "capacitacion"],
      d: "Canal oficial de SERVIR: conferencias, webinars y cursos sobre el servicio civil, regímenes laborales del Estado y gestión de recursos humanos en el sector público." },
    { id: "servir-gdr-lista", t: "Gestión del Rendimiento", by: "SERVIR · ServirTV", url: "https://www.youtube.com/playlist?list=PLF1cLZO8dRvKWiaBDY5BhBo0sSiILPnom", kind: "lista", topics: ["servir", "desempeno"],
      d: "Lista de reproducción sobre el subsistema de Gestión del Rendimiento (GDR) en las entidades públicas: metas, seguimiento y evaluación." },
    { id: "servir-gdr-2024", t: "Conferencia «Conociendo la gestión del rendimiento 2024»", by: "SERVIR · ServirTV", url: "https://www.youtube.com/watch?v=N-xwLPP86WQ", kind: "video", topics: ["servir", "desempeno"],
      d: "Introducción al ciclo de gestión del rendimiento en el Estado, útil antes de leer las directivas de SERVIR." },
    { id: "servir-perfiles", t: "Webinar: MOOC «Diseño de perfiles de puestos para regímenes distintos a la ley del servicio civil»", by: "SERVIR · ServirTV", url: "https://www.youtube.com/watch?v=V94YovB2Shs", kind: "video", topics: ["servir", "cas", "seleccion"],
      d: "Cómo se diseña un perfil de puesto en entidades con regímenes como el CAS o el 276: la base de un buen concurso público." },
    { id: "servir-estadosinacoso", t: "#EstadoSinAcoso: Hostigamiento sexual laboral", by: "SERVIR · ServirTV", url: "https://www.youtube.com/playlist?list=PLF1cLZO8dRvJsKi52oVCjtlAGxdGK1BCZ", kind: "lista", topics: ["hostigamiento", "servir", "sectores"],
      d: "Dramatizaciones e instructivos para prevenir y atender denuncias de hostigamiento sexual laboral en las entidades públicas." },
    { id: "servir-hostigamiento-simposio", t: "Desafíos y aprendizajes en la prevención, atención e investigación del hostigamiento sexual laboral", by: "SERVIR · ServirTV", url: "https://www.youtube.com/watch?v=MQ7I-6RMg8Q", kind: "video", topics: ["hostigamiento", "servir"],
      d: "Simposio internacional organizado por SERVIR en febrero de 2025, por el Día de la Lucha contra el Hostigamiento Sexual en el Ámbito Laboral." },
    { id: "servir-plataforma-denuncias", t: "Video tutorial de la plataforma de denuncias por hostigamiento sexual laboral", by: "SERVIR · ServirTV", url: "https://www.youtube.com/watch?v=PxJakxuZtUI", kind: "video", topics: ["hostigamiento", "servir"],
      d: "Muestra cómo las entidades públicas registran y reportan los casos de hostigamiento sexual laboral en la plataforma de SERVIR." },
    { id: "sunafil", t: "SUNAFIL Oficial", by: "SUNAFIL · Superintendencia Nacional de Fiscalización Laboral", url: "https://www.youtube.com/channel/UCkErzTe3jdeBSF1h0a7QVFQ", kind: "canal", topics: ["sunafil", "seguridad", "planilla"],
      d: "Canal de la entidad que fiscaliza el cumplimiento de las normas laborales y de seguridad y salud en el trabajo." },
    { id: "mtpe", t: "Ministerio de Trabajo y Promoción del Empleo", by: "MTPE", url: "https://www.youtube.com/c/MTPEPer%C3%BA/videos", kind: "canal", topics: ["sectores", "seleccion", "empleabilidad"],
      d: "Canal del ente rector de las políticas de trabajo y empleabilidad: servicios, programas de empleo y orientación." },
    { id: "mtpe-servicios", t: "Conoce los Servicios Virtuales del MTPE", by: "MTPE", url: "https://www.youtube.com/watch?v=LtUiBzUSjKY", kind: "video", topics: ["sectores", "empleabilidad"],
      d: "Recorrido por los servicios en línea del Ministerio de Trabajo para trabajadores y empleadores." },
    { id: "mtpe-empleosperu", t: "¿Cómo crear una cuenta en Empleos Perú?", by: "MTPE", url: "https://www.youtube.com/watch?v=YT65uDB8HBQ", kind: "video", topics: ["seleccion", "empleabilidad"],
      d: "Tutorial de la bolsa de trabajo pública Empleos Perú: útil para entender cómo publican y buscan vacantes empresas y postulantes." },
    { id: "sunat", t: "SUNAT", by: "SUNAT · Superintendencia Nacional de Aduanas y de Administración Tributaria", url: "https://www.youtube.com/@SUNATOficial", kind: "canal", topics: ["planilla"],
      d: "Canal oficial de SUNAT con videos de orientación organizados por tema; útil para buscar orientación sobre la planilla electrónica (T-Registro y PLAME)." },
    { id: "essalud", t: "EsSalud Perú", by: "EsSalud · Seguro Social de Salud", url: "https://www.youtube.com/essaludvideos", kind: "canal", topics: ["planilla", "seguridad", "bienestar"],
      d: "Canal oficial del Seguro Social de Salud: derechos de los asegurados, prestaciones y trámites que RR.HH. suele explicar a los trabajadores." },
    { id: "onp", t: "ONP Oficial", by: "ONP · Oficina de Normalización Previsional", url: "https://www.youtube.com/@ONPCanalOficial", kind: "canal", topics: ["planilla", "pensiones"],
      d: "Canal oficial de la ONP sobre el Sistema Nacional de Pensiones: aportes, jubilación y trámites en línea." },
    { id: "up", t: "Universidad del Pacífico", by: "Universidad del Pacífico", url: "https://www.youtube.com/@UPacificoUP", kind: "canal", topics: ["capacitacion", "liderazgo"],
      d: "Canal de la universidad, con conferencias de economía y gestión; busca en él charlas sobre gestión de personas y liderazgo." }
  ]
};
