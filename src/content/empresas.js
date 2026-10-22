/* Empresas que inspiran · organizaciones con reconocimientos públicos a su gestión de personas en el Perú.
   Reglas de este archivo:
   - Solo hechos que aparecen en fuentes públicas consultadas el 22/10/2026; cada reconocimiento y cada práctica lleva su URL.
   - Redacción prudente («según…», «la nota indica…»). Sin cifras inventadas, sin citas textuales, sin testimonios.
   - Si un dato no se pudo contrastar (por ejemplo, el puesto exacto en un ranking que solo cita una fuente), se omite o se señala.
   - «learn» es una síntesis pedagógica de VÍVELO RH, no una afirmación de la empresa.
   - VÍVELO RH no está afiliado a estas organizaciones; los nombres y marcas pertenecen a sus titulares.
   coords: coordenadas aproximadas de la ciudad o zona principal (solo para ubicar el punto en el mapa). */

export const AREAS = {
  capacitacion: { n: "Capacitación y desarrollo", s: "Desarrollo", d: "Aprendizaje, mentoría y línea de carrera." },
  bienestar: { n: "Bienestar y beneficios", s: "Bienestar", d: "Salud, beneficios, familia y entornos seguros." },
  liderazgo: { n: "Liderazgo y cultura", s: "Liderazgo", d: "Modelos de liderazgo, confianza y cultura." },
  diversidad: { n: "Diversidad, equidad e inclusión", s: "Inclusión", d: "Igualdad de oportunidades y grupos subrepresentados." },
  desempeno: { n: "Gestión del desempeño", s: "Desempeño", d: "Metas, seguimiento y mejora continua." },
  tecnologia: { n: "Tecnología y datos de personas", s: "Tecnología", d: "Herramientas digitales y analítica para RR.HH." },
  experiencia: { n: "Experiencia del colaborador", s: "Experiencia", d: "El recorrido completo de la persona en la organización." },
  comunidad: { n: "Comunidad y familias", s: "Comunidad", d: "Impacto en familias y comunidades cercanas." },
  atraccion: { n: "Atracción de talento joven", s: "Talento joven", d: "Prácticas preprofesionales y profesionales." }
};

export const RECOG = {
  gptw: { n: "Great Place to Work® Perú", d: "Ranking basado en una encuesta anónima de clima (Trust Index) y una auditoría de cultura (Culture Audit)." },
  merco: { n: "Merco Talento Perú", d: "Ranking de empresas que mejor atraen y retienen talento, a partir de encuestas a trabajadores, expertos, universitarios y público." },
  abe: { n: "Premio ABE (AmCham Perú)", d: "Premio de la Asociación de Buenos Empleadores a buenas prácticas laborales, por categorías." },
  mtpe: { n: "Buenas Prácticas Laborales · MTPE", d: "Concurso del Ministerio de Trabajo y Promoción del Empleo que reconoce prácticas que van más allá de la ley." },
  otro: { n: "Otros espacios", d: "Presentaciones o distinciones fuera de los rankings anteriores." }
};

export const empresas = {
  updated: "2026-10-22",
  consulted: "22 de octubre de 2026",
  disclaimer: "Información recopilada de fuentes públicas (notas de prensa, medios especializados y páginas institucionales) consultadas el 22 de octubre de 2026. Los rankings y programas cambian cada año: verifica siempre en la fuente original. VÍVELO RH no está afiliado a ninguna de estas organizaciones ni recibió nada a cambio; los nombres y marcas pertenecen a sus titulares. Varias fuentes son comunicados de las propias empresas difundidos por la prensa.",
  sources: [
    { t: "Forbes Perú · Ranking Great Place to Work: los mejores lugares para trabajar en el Perú en 2026", u: "https://forbes.pe/capital-humano/2026-02-20/ranking-great-place-to-work-estos-son-los-mejores-lugares-para-trabajar-en-peru-en-2026/" },
    { t: "Perú Retail · Conoce a las mejores empresas para trabajar en el Perú en 2026 según Great Place to Work", u: "https://www.peru-retail.com/conoce-a-las-mejores-empresas-para-trabajar-en-peru-en-2026-segun-great-place-to-work/" },
    { t: "Forbes Perú · Ranking Great Place to Work 2025", u: "https://forbes.pe/capital-humano/2025-02-25/ranking-great-place-to-work-estos-son-los-mejores-lugares-para-trabajar-en-peru-en-2025" },
    { t: "Perú Retail · Ranking Merco 2025: las 10 mejores empresas para atraer y retener talento en el Perú", u: "https://www.peru-retail.com/ranking-merco-2025-estas-son-las-10-mejores-empresas-para-atraer-y-retener-talento-en-peru/" },
    { t: "Gestión · Premio ABE 2025: AmCham reconocerá a empresas que impulsan el bienestar laboral", u: "https://gestion.pe/economia/management-empleo/premio-abe-2025-amcham-reconocera-a-empresas-que-impulsan-el-bienestar-laboral-noticia/" },
    { t: "Gestión · Estas fueron las 14 empresas reconocidas en los Premios ABE 2026", u: "https://gestion.pe/economia/empresas/estas-fueron-las-14-empresas-reconocidas-en-los-premios-abe-2026-noticia/" },
    { t: "Andina · MTPE premió a empresas y mypes que promueven Buenas Prácticas Laborales", u: "https://andina.pe/ingles/noticia-mtpe-premio-a-empresas-y-mypes-promueven-buenas-practicas-laborales-1008773.aspx" }
  ],
  list: [
    {
      id: "interbank", n: "Interbank", mono: "IB", sector: "Banca", sectorIcon: "banco", scene: "corporativo", tone: "atraer",
      region: "Lima · red de tiendas a nivel nacional", city: "Lima", coords: [-12.046, -77.043],
      recognitions: [
        { k: "gptw", name: "Los mejores lugares para trabajar Perú 2026 · 1.er lugar, más de 1.000 colaboradores", year: 2026, url: "https://www.peru-retail.com/conoce-a-las-mejores-empresas-para-trabajar-en-peru-en-2026-segun-great-place-to-work/" },
        { k: "gptw", name: "Los mejores lugares para trabajar para mujeres 2026", year: 2026, url: "https://ifs.com.pe/interbank-interseguro-and-inteligo-recognized-in-the-great-place-to-work-for-women-2026-ranking" }
      ],
      practices: [
        { area: "bienestar", t: "INFamily: una idea amplia de familia", d: "Según Intercorp Financial Services (IFS), el programa INFamily amplía la idea tradicional de familia en la relación con sus colaboradores; IFS lo vincula con un mejor equilibrio entre vida personal y trabajo.", url: "https://ifs.com.pe/ifs-among-the-best-places-to-work-in-peru-in-2026" },
        { area: "capacitacion", t: "Talent Day: aprendizaje y línea de carrera", d: "La misma nota de IFS menciona «Talent Day», jornadas con sesiones de aprendizaje y de línea de carrera para el crecimiento profesional.", url: "https://ifs.com.pe/ifs-among-the-best-places-to-work-in-peru-in-2026" },
        { area: "diversidad", t: "Educación financiera para colaboradoras", d: "En el comunicado sobre el ranking para mujeres 2026, IFS destaca acciones de educación financiera dirigidas a mujeres como parte de su cultura de equidad y desarrollo del talento femenino.", url: "https://ifs.com.pe/interbank-interseguro-and-inteligo-recognized-in-the-great-place-to-work-for-women-2026-ranking" },
        { area: "bienestar", t: "Salud preventiva para mujeres", d: "El mismo comunicado menciona un programa de salud preventiva para colaboradoras mayores de 40 años que no cuentan con seguro privado.", url: "https://ifs.com.pe/interbank-interseguro-and-inteligo-recognized-in-the-great-place-to-work-for-women-2026-ranking" }
      ],
      learn: "Un beneficio se vuelve estratégico cuando responde a quién es realmente tu gente: reconocer distintos tipos de familia o cubrir un vacío de salud (colaboradoras sin seguro privado) parte de un diagnóstico, no de un catálogo. Pregúntate siempre qué necesidad concreta resuelve cada beneficio y cómo medirás si funcionó."
    },
    {
      id: "compartamos", n: "Compartamos Banco", mono: "CB", sector: "Microfinanzas", sectorIcon: "banco", scene: "reunion", tone: "desarrollar",
      region: "Lima · agencias en varias regiones", city: "Lima", coords: [-12.046, -77.043],
      recognitions: [
        { k: "gptw", name: "Los mejores lugares para trabajar Perú 2025 · puesto 4, más de 1.000 colaboradores (octavo año consecutivo en el ranking, como Compartamos Financiera)", year: 2025, url: "https://www.revistaeconomia.com/compartamos-financiera-es-reconocida-por-octavo-ano-consecutivo-en-el-ranking-great-place-to-work/" },
        { k: "gptw", name: "Los mejores lugares para trabajar Perú 2026 · 2.º lugar, más de 1.000 colaboradores", year: 2026, url: "https://www.peru-retail.com/conoce-a-las-mejores-empresas-para-trabajar-en-peru-en-2026-segun-great-place-to-work/" }
      ],
      practices: [
        { area: "liderazgo", t: "«Serviazgo»: liderazgo desde el servicio", d: "Según un contenido de marca publicado en Forbes Perú (2023), la entonces Compartamos Financiera trabaja un modelo de liderazgo propio, el «Serviazgo», con el que busca que sus colaboradores se conviertan en líderes inspiradores.", url: "https://forbes.pe/brand-voice/2023-03-02/great-place-to-work-compartamos-financiera-buscamos-que-nuestros-colaboradores-y-colaboradoras-se-conviertan-en-lideres-inspiradores/" },
        { area: "bienestar", t: "Una oferta integral de beneficios", d: "La misma publicación describe una oferta de bienestar con beneficios adicionales a los que exige la ley, orientados a dar flexibilidad y apoyo a colaboradores y familias.", url: "https://forbes.pe/brand-voice/2023-03-02/great-place-to-work-compartamos-financiera-buscamos-que-nuestros-colaboradores-y-colaboradoras-se-conviertan-en-lideres-inspiradores/" },
        { area: "bienestar", t: "Salud física y mental", d: "La empresa señala en esa publicación su preocupación por la salud física y mental de sus colaboradores y de sus familias. Es un texto de 2023: los programas pueden haber cambiado.", url: "https://forbes.pe/brand-voice/2023-03-02/great-place-to-work-compartamos-financiera-buscamos-que-nuestros-colaboradores-y-colaboradoras-se-conviertan-en-lideres-inspiradores/" }
      ],
      learn: "Ponerle nombre propio a un modelo de liderazgo (como el «Serviazgo») ayuda a que todos hablen el mismo idioma, pero solo funciona si se traduce en conductas observables, se enseña a los jefes y se evalúa. Ojo como analista: un «brand voice» es contenido pagado por la empresa; úsalo como pista, no como prueba."
    },
    {
      id: "viru", n: "Virú", mono: "V", sector: "Agroindustria", sectorIcon: "agro", scene: "agro", tone: "desarrollar",
      region: "Virú, La Libertad · opera en seis regiones", city: "Virú", coords: [-8.414, -78.752],
      recognitions: [
        { k: "gptw", name: "Los mejores lugares para trabajar Perú 2025 · 1.er lugar, más de 1.000 colaboradores, y Premio Especial Confianza", year: 2025, url: "https://www.portalfruticola.com/noticias/2025/03/04/viru-premio-gptw/" },
        { k: "abe", name: "Premio ABE 2025 · primer lugar en Programa de Beneficios, Employee Experience y Desarrollo de la comunidad", year: 2025, url: "https://agraria.pe/noticias/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-p-40964" },
        { k: "gptw", name: "Los mejores lugares para trabajar en América Latina 2025 · puesto 21", year: 2025, url: "https://www.corresponsables.com/per/actualidad/viru-s-a-es-reconocida-por-gptw-como-uno-de-los-mejores-lugares-para-trabajar-en-america-latina-2025/" }
      ],
      practices: [
        { area: "bienestar", t: "Programa de beneficios premiado", d: "Según Agraria.pe, Virú obtuvo el primer lugar del Premio ABE 2025 en la categoría Programa de Beneficios.", url: "https://agraria.pe/noticias/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-p-40964" },
        { area: "experiencia", t: "Employee Experience", d: "En la misma edición ganó la categoría Employee Experience, que reconoce cómo se diseña la vivencia del colaborador en la organización.", url: "https://agraria.pe/noticias/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-p-40964" },
        { area: "comunidad", t: "Colaboradores, familias y comunidades", d: "La nota de Revista Economía vincula los premios con su compromiso con el bienestar y desarrollo de colaboradores, sus familias y las comunidades de las seis regiones donde opera; también ganó la categoría Desarrollo de la comunidad.", url: "https://www.revistaeconomia.com/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-practicas-laborales-y-de-rse/" },
        { area: "liderazgo", t: "Una cultura de confianza", d: "Además del primer lugar en su categoría, GPTW le otorgó en 2025 el Premio Especial Confianza, según Portal Frutícola; era su segundo año consecutivo en el primer puesto.", url: "https://www.portalfruticola.com/noticias/2025/03/04/viru-premio-gptw/" }
      ],
      learn: "En agroindustria la plantilla suele ser grande, estacional y lejos de Lima. Que una empresa así lidere un ranking de clima muestra que la gestión de personas no es un lujo de oficinas corporativas: beneficios, experiencia y relación con la comunidad se diseñan pensando en el campo, en las familias y en la temporada."
    },
    {
      id: "caja-arequipa", n: "Caja Arequipa", mono: "CA", sector: "Microfinanzas · caja municipal", sectorIcon: "banco", scene: "cooperativa", tone: "cuidar",
      region: "Arequipa · agencias en todo el país", city: "Arequipa", coords: [-16.409, -71.537],
      recognitions: [
        { k: "abe", name: "Premio ABE 2025 · Aprendizaje y Desarrollo de Personas, y Aplicación de Tecnología e IA en RR.HH.", year: 2025, url: "https://www.corresponsables.com/per/actualidad/caja-arequipa-es-doble-ganadora-en-el-premio-abe-2025-por-impulsar-el-crecimiento-y-la-innovacion-en-la-gestion-de-su-talento/" },
        { k: "merco", name: "Merco Talento 2025 · puesto 31 nacional y top 5 del sector financiero", year: 2025, url: "https://www.corresponsables.com/per/social/caja-arequipa-consolida-su-liderazgo-como-una-de-las-organizaciones-mas-valoradas-para-atraer-y-retener-talento-en-el-peru/" }
      ],
      practices: [
        { area: "capacitacion", t: "«Comité Formativo Imparable»: mentoría entre generaciones", d: "Según Corresponsables, responde al cambio generacional de su fuerza comercial: analistas de crédito con experiencia acompañan a analistas nuevos de sus agencias. En una entrevista con EY Perú, la entidad lo presenta como un modelo de aprendizaje acelerado que también busca reducir la rotación.", url: "https://www.ey.com/es_pe/insights/revista-execution/entrevistas/caja-arequipa-formacion-cultura-ia-potenciar-talento" },
        { area: "tecnologia", t: "«Mi Bonito»: desempeño en tiempo real", d: "Plataforma desarrollada por su equipo de Desarrollo Humano para que los analistas de crédito sigan su desempeño en tiempo real y reciban recomendaciones basadas en datos; según EY Perú, también simplifica el cálculo de bonos.", url: "https://www.corresponsables.com/per/actualidad/caja-arequipa-es-doble-ganadora-en-el-premio-abe-2025-por-impulsar-el-crecimiento-y-la-innovacion-en-la-gestion-de-su-talento/" },
        { area: "liderazgo", t: "Formación para analistas senior en el sur", d: "En abril de 2025 organizó en Puno un taller para fortalecer habilidades comerciales y de liderazgo de analistas senior de Cusco, Apurímac, Puno, Arequipa, Moquegua y Tacna, según Corresponsables.", url: "https://www.corresponsables.com/per/actualidad/caja-arequipa-realiza-taller-de-negocios-en-el-sur-del-peru/" }
      ],
      learn: "Dos ideas que puedes llevar a cualquier organización: la mentoría convierte la experiencia de los veteranos en un activo que no se va cuando ellos se van, y los datos de desempeño sirven más cuando la propia persona los ve a tiempo para corregir, no solo cuando el jefe los revisa a fin de mes."
    },
    {
      id: "ferreyros", n: "Ferreyros", mono: "F", sector: "Maquinaria y servicios · minería y construcción", sectorIcon: "engranaje", scene: "planta", tone: "admin",
      region: "Lima · sedes y talleres en el país", city: "Lima", coords: [-12.046, -77.043],
      recognitions: [
        { k: "merco", name: "Merco Talento 2025 · puesto 7; doce años consecutivos entre las diez primeras", year: 2025, url: "https://energiminas.com/2025/06/11/ferreyros-suma-12-anos-consecutivos-entre-las-10-de-mejores-empresas-para-trabajar-en-el-peru/" },
        { k: "abe", name: "Premio ABE, X edición · estrategia de bienestar integral", year: 2024, url: "https://energiminas.com/2024/10/09/ferreyros-reconocida-por-sus-mejores-practicas-en-responsabilidad-social-laboral" },
        { k: "mtpe", name: "Buenas Prácticas Laborales 2022 · 1.er lugar en «Beneficios a los trabajadores»", year: 2022, url: "https://proactivo.com.pe/ministerio-de-trabajo-reconoce-a-ferreyros-y-ferreycorp-por-sus-buenas-practicas-laborales/" }
      ],
      practices: [
        { area: "bienestar", t: "Un área dedicada al bienestar", d: "Según Energiminas, la empresa cuenta con un Área de Bienestar que adapta programas en vivienda, salud, educación y finanzas, entre otros ámbitos.", url: "https://energiminas.com/2024/10/09/ferreyros-reconocida-por-sus-mejores-practicas-en-responsabilidad-social-laboral" },
        { area: "comunidad", t: "«Bienestar Ferreyros», también para las familias", d: "El programa con el que ganó en el concurso del MTPE busca una mejora integral —social, personal, física, recreativa, financiera y emocional— de sus colaboradores en todo el país e incluso de sus familiares, según ProActivo.", url: "https://proactivo.com.pe/ministerio-de-trabajo-reconoce-a-ferreyros-y-ferreycorp-por-sus-buenas-practicas-laborales/" },
        { area: "diversidad", t: "Igualdad de oportunidades en el grupo", d: "En ese mismo concurso, su matriz Ferreycorp obtuvo el segundo lugar en Promoción de la Igualdad de Oportunidades entre Hombres y Mujeres.", url: "https://proactivo.com.pe/ministerio-de-trabajo-reconoce-a-ferreyros-y-ferreycorp-por-sus-buenas-practicas-laborales/" }
      ],
      learn: "El bienestar integral deja de ser una lista de actividades cuando tiene un área responsable, dimensiones claras (salud, finanzas, vivienda, educación) y llega a la familia. La constancia también enseña: aparecer doce años seguidos en un ranking de talento habla de una política sostenida, no de una campaña."
    },
    {
      id: "metso", n: "Metso Perú", mono: "M", sector: "Equipos y servicios para minería", sectorIcon: "pico", scene: "mineria", tone: "estrategia",
      region: "Lima · operaciones en zonas mineras", city: "Lima", coords: [-12.046, -77.043],
      recognitions: [
        { k: "mtpe", name: "Buenas Prácticas Laborales 2023 · 1.er lugar en Igualdad de oportunidades entre mujeres y hombres y 2.º lugar en Desarrollo profesional y acceso a la capacitación", year: 2023, url: "https://mineriaenergia.com/metso-recibe-1er-y-2do-lugar-en-concurso-de-buenas-practicas-laborales-2023-del-ministerio-del-trabajo/" }
      ],
      practices: [
        { area: "diversidad", t: "Política de Igualdad de Oportunidades y Diversidad", d: "La práctica premiada con el primer lugar fue la implementación de su Política de Igualdad de Oportunidades y Diversidad, que según la nota desarrolla desde 2020.", url: "https://mineriaenergia.com/metso-recibe-1er-y-2do-lugar-en-concurso-de-buenas-practicas-laborales-2023-del-ministerio-del-trabajo/" },
        { area: "capacitacion", t: "Desarrollo profesional y capacitación", d: "En la misma edición del concurso del MTPE obtuvo el segundo lugar en la categoría Desarrollo Profesional y Acceso a la Capacitación.", url: "https://mineriaenergia.com/metso-recibe-1er-y-2do-lugar-en-concurso-de-buenas-practicas-laborales-2023-del-ministerio-del-trabajo/" },
        { area: "diversidad", t: "Mentorías con WIM Perú", d: "Según Energiminas, Metso se integró a WIM Perú tras una evaluación de sus políticas de equidad de género; la alianza incluye mentorías a estudiantes en las que sus colaboradoras participan como tutoras.", url: "https://energiminas.com/2024/12/03/la-mineria-tiene-espacio-para-todos-los-suenos-y-todas-las-personas-ejecutiva-de-metso-recibe-reconocimiento-en-cumbre-de-mujeres-lideres" }
      ],
      learn: "En sectores con poca presencia femenina, como la minería, la igualdad avanza cuando hay una política escrita, metas, y puentes hacia afuera (mentorías a estudiantes) que amplían la cantera futura. Fíjate en la secuencia: primero la política, luego las prácticas que la hacen realidad."
    },
    {
      id: "antamina", n: "Antamina", mono: "A", sector: "Minería", sectorIcon: "pico", scene: "mineria", tone: "admin",
      region: "San Marcos, Huari (Áncash) y Lima", city: "Áncash", coords: [-9.54, -77.05],
      recognitions: [
        { k: "merco", name: "Merco Talento 2024 · puesto 4; once años consecutivos entre las cinco primeras", year: 2024, url: "https://energiminas.com/2024/06/14/por-11-anos-consecutivos-antamina-se-ubica-entre-las-cinco-mejores-empresas-del-pais-en-atraer-y-retener-talento" },
        { k: "merco", name: "Merco Talento 2023 · primer lugar del sector minero, dentro del top 5 nacional", year: 2023, url: "https://energiminas.com/2023/06/09/antamina-entre-las-cinco-mejores-empresas-en-atraccion-y-retencion-de-talento-en-el-pais" }
      ],
      practices: [
        { area: "atraccion", t: "Prácticas profesionales en Huari y Lima", d: "Según una convocatoria difundida por ProActivo, su programa de prácticas está dirigido a egresados y bachilleres, con vacantes en ingeniería, mejora del negocio y mantenimiento, en Huari (Áncash) y Lima.", url: "https://proactivo.com.pe/oportunidad-laboral-realiza-tus-practicas-profesionales-en-antamina/" },
        { area: "capacitacion", t: "Mentoría y habilidades para practicantes", d: "La misma convocatoria señala que la empresa se enfoca en el desarrollo integral de sus practicantes, con capacitación continua, mentoría y oportunidades para desarrollar habilidades técnicas y blandas.", url: "https://proactivo.com.pe/oportunidad-laboral-realiza-tus-practicas-profesionales-en-antamina/" }
      ],
      learn: "Las prácticas preprofesionales son la primera puerta de la marca empleadora: si el practicante aprende de verdad (mentoría, tareas reales, habilidades blandas), se convierte en candidato y en embajador. Para una operación en altura y lejos de las ciudades, cultivar talento joven es también una estrategia de retención."
    },
    {
      id: "plaza-vea", n: "Plaza Vea y Vivanda", mono: "PV", sector: "Retail · supermercados", sectorIcon: "carrito", scene: "retail", tone: "cuidar",
      region: "Lima · tiendas en todo el país", city: "Lima", coords: [-12.046, -77.043],
      recognitions: [
        { k: "gptw", name: "Los mejores lugares para trabajar para mujeres en el Perú 2025", year: 2025, url: "https://www.peru-retail.com/estos-son-los-23-mejores-lugares-para-trabajar-para-las-mujeres-en-peru-segun-gptw-2025/" },
        { k: "gptw", name: "Los mejores lugares para trabajar Perú 2025 · entre los primeros puestos de más de 1.000 colaboradores (según Mercado Negro, 3.er lugar)", year: 2025, url: "https://www.mercadonegro.pe/actualidad/great-place-to-work-revela-las-mejores-empresas-para-trabajar-en-peru-en-2025" },
        { k: "abe", name: "Premio ABE 2025 · finalista en Diversidad, Equidad e Inclusión", year: 2025, url: "https://gestion.pe/economia/management-empleo/premio-abe-2025-amcham-reconocera-a-empresas-que-impulsan-el-bienestar-laboral-noticia/" }
      ],
      practices: [
        { area: "liderazgo", t: "«Mujeres Líderes»", d: "Según Perú Retail, el programa ofrece talleres de liderazgo, charlas y formación para colaboradoras, y fue destacado en el ranking de GPTW para mujeres 2025.", url: "https://www.peru-retail.com/estos-son-los-23-mejores-lugares-para-trabajar-para-las-mujeres-en-peru-segun-gptw-2025/" },
        { area: "diversidad", t: "«No me felicites, lucha conmigo»", d: "La misma nota menciona esta campaña interna sobre igualdad de género como una de sus prácticas destacadas.", url: "https://www.peru-retail.com/estos-son-los-23-mejores-lugares-para-trabajar-para-las-mujeres-en-peru-segun-gptw-2025/" },
        { area: "capacitacion", t: "Seguridad y desarrollo en tienda", d: "En su reconocimiento en el ranking latinoamericano de GPTW 2024, Perú Retail destacó la seguridad en el trabajo y el desarrollo personal y profesional de sus colaboradores.", url: "https://www.peru-retail.com/gptw-2024-seis-empresas-peruanas-entre-los-mejores-lugares-para-trabajar-en-latinoamerica/" }
      ],
      learn: "En retail la mayoría trabaja en turnos, de pie y frente al cliente. Programas de liderazgo para mujeres y campañas de igualdad funcionan cuando llegan a la tienda y no solo a la oficina central. Observa el mensaje de la campaña: pasar del saludo simbólico a la acción concreta."
    },
    {
      id: "konecta", n: "Konecta Perú", mono: "K", sector: "Servicios de experiencia de cliente (BPO)", sectorIcon: "auricular", scene: "oficina", tone: "estrategia",
      region: "Lima · centros de contacto", city: "Lima", coords: [-12.046, -77.043],
      recognitions: [
        { k: "gptw", name: "Ranking de Diversidad, Equidad e Inclusión 2025 de GPTW Perú · 4.º lugar, según Forbes Perú", year: 2025, url: "https://forbes.pe/mentes-sostenibles/2025-08-25/mentes-sostenibles-rossina-castagnola/" }
      ],
      practices: [
        { area: "diversidad", t: "«Inkluye»: inclusión de grupos en riesgo de exclusión", d: "Según Forbes Perú (2024), el programa promueve la inclusión laboral de grupos en riesgo de exclusión social, como la comunidad LGBTIQ+ y las personas con discapacidad.", url: "https://forbes.pe/capital-humano/2024-03-04/estrategias-si-acciones-aisladas-no-asi-avanzan-las-empresas-en-peru-en-su-camino-a-ser-mas-diversas-e-inclusivas" },
        { area: "diversidad", t: "Un modelo con varios pilares", d: "La misma nota describe un modelo de diversidad con ocho pilares que incluye empoderamiento de mujeres, comunidad LGBTIQ+, personas con discapacidad, personas migrantes y adultos mayores, entre otros.", url: "https://forbes.pe/capital-humano/2024-03-04/estrategias-si-acciones-aisladas-no-asi-avanzan-las-empresas-en-peru-en-su-camino-a-ser-mas-diversas-e-inclusivas" }
      ],
      learn: "Fíjate en el título de la nota de Forbes: «estrategias, sí; acciones aisladas, no». La diversidad funciona como sistema (pilares, responsables, procesos de selección accesibles) y no como una fecha conmemorativa. En centros de contacto, con alta rotación y mucho talento joven, la inclusión también amplía de dónde reclutas."
    },
    {
      id: "servir", n: "SERVIR", mono: "S", sector: "Sector público · Autoridad Nacional del Servicio Civil", sectorIcon: "estado", scene: "municipalidad", tone: "atraer", public: true,
      region: "Lima · rectoría para entidades de todo el país", city: "Lima", coords: [-12.046, -77.043],
      recognitions: [
        { k: "otro", name: "«La Liga del Rendimiento», presentada como caso de innovación en el IV Simposio Iberoamericano de Innovación Pública (CLAD, INA de Portugal e INAP de España), Oporto. No es un premio: es una presentación que la nota describe como reconocimiento internacional.", year: 2025, url: "https://proactivo.com.pe/presidente-de-servir-presenta-la-liga-del-rendimiento-en-el-iv-simposio-iberoamericano-de-innovacion-publica-en-portugal/" }
      ],
      practices: [
        { area: "desempeno", t: "La Liga del Rendimiento", d: "Comunidad de práctica de bajo costo para que las entidades intercambien experiencias exitosas en gestión del rendimiento; según ProActivo, ya se replicó dentro de SERVIR en Gestión de la Capacitación y en Seguridad y Salud en el Trabajo.", url: "https://proactivo.com.pe/presidente-de-servir-presenta-la-liga-del-rendimiento-en-el-iv-simposio-iberoamericano-de-innovacion-publica-en-portugal/" },
        { area: "desempeno", t: "Feria de buenas prácticas en gestión del rendimiento", d: "SERVIR reunió a más de cincuenta entidades públicas para compartir experiencias de evaluación del desempeño; entidades como Pensión 65, el Ministerio de Educación y la ONP presentaron sus prácticas.", url: "https://www.gob.pe/institucion/servir/noticias/1395230-servir-destaca-liderazgo-y-compromiso-de-las-entidades-que-impulsan-buenas-practicas-en-gestion-del-rendimiento" },
        { area: "capacitacion", t: "Enlace SERVIR: acompañamiento a las oficinas de RR.HH.", d: "Estrategia de acompañamiento técnico lanzada en el Segundo Encuentro de Jefes de Recursos Humanos 2025; en su primera fase acompaña a 72 entidades del Gobierno Nacional, gobiernos regionales y municipalidades provinciales.", url: "https://proactivo.com.pe/enlace-servir-busca-fortalecer-la-gestion-de-recursos-humanos-en-el-estado/" },
        { area: "bienestar", t: "#EstadoSinAcoso", d: "Campaña con dramatizaciones e instructivos para prevenir y atender denuncias de hostigamiento sexual laboral en las entidades públicas, publicada en su canal de YouTube.", url: "https://www.youtube.com/playlist?list=PLF1cLZO8dRvJsKi52oVCjtlAGxdGK1BCZ" }
      ],
      learn: "En el Estado, buena parte de la gestión de personas se aprende entre pares: una comunidad de práctica permite copiar lo que ya funcionó en otra entidad sin grandes presupuestos. Si te interesa el sector público, la gestión del rendimiento, la capacitación y la prevención del hostigamiento son espacios donde RR.HH. cambia el servicio al ciudadano."
    }
  ]
};

export const empresa = id => empresas.list.find(e => e.id === id);
