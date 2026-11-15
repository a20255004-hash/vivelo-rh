// Información ampliada de cada empresa del Piso 5 (la lee assets/lab/empresas.js).
// Reglas: solo datos que aparecen en la fuente enlazada; cada cifra, hito y reconocimiento lleva su URL y su año.
// Si un dato no se pudo verificar, no está. «queHace» es una descripción general, no una cita.
export const CONSULTADO = '15 de noviembre de 2026';

const PR_MERCO26 = 'https://www.peru-retail.com/ranking-merco-2026-estas-son-las-10-mejores-empresas-para-atraer-y-retener-talento-en-peru/';
const FORBES_GPTW26 = 'https://forbes.pe/capital-humano/2026-02-20/ranking-great-place-to-work-estos-son-los-mejores-lugares-para-trabajar-en-peru-en-2026/';
const BPL25 = 'https://elperuano.pe/noticia/284851-premio-a-empresas-con-rostro-humano';
const BPL24 = 'https://andina.pe/ingles/noticia-mtpe-premio-a-empresas-y-mypes-promueven-buenas-practicas-laborales-1008773.aspx';

export const EXTRA = {
  interbank: {
    queHace: 'Banco peruano del grupo Intercorp, con atención a personas y empresas en todo el país.',
    datos: [
      { v: '#1', t: 'GPTW Perú 2026, más de 1,000 colaboradores', u: FORBES_GPTW26 },
      { v: '#2', t: 'Merco Talento Perú 2026 (8,839 puntos)', u: PR_MERCO26 },
    ],
    reconocimientos: [{ a: '2026', t: 'Merco Talento Perú 2026 · puesto 2', u: PR_MERCO26 }],
  },
  compartamos: {
    queHace: 'Entidad de microfinanzas: crédito y ahorro para pequeños negocios y familias.',
    datos: [{ v: '#2', t: 'GPTW Perú 2026, más de 1,000 colaboradores', u: FORBES_GPTW26 }],
  },
  viru: {
    queHace: 'Agroindustria peruana que cultiva, procesa y exporta conservas y productos frescos.',
    datos: [
      { v: '19,000+', t: 'colaboradores, la «Familia Viru» (2025)', u: 'https://agraria.pe/noticias/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-p-40964' },
      { v: '6', t: 'regiones donde opera (2025)', u: 'https://agraria.pe/noticias/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-p-40964' },
      { v: '3', t: 'premios ABE 2025 en un solo año', u: 'https://agraria.pe/noticias/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-p-40964' },
    ],
    hitos: [
      { a: '2024', t: 'Primer lugar en GPTW Perú (más de 1,000 colaboradores).', u: 'https://www.portalfruticola.com/noticias/2025/03/04/viru-premio-gptw/' },
      { a: '2025', t: 'Repite el primer lugar de GPTW Perú y recibe el Premio Especial Confianza.', u: 'https://www.portalfruticola.com/noticias/2025/03/04/viru-premio-gptw/' },
      { a: 'Oct. 2025', t: 'Tres primeros lugares en el Premio ABE: beneficios, employee experience y comunidad. ADEX la nombra empresa agroexportadora del año.', u: 'https://agraria.pe/noticias/viru-s-a-es-reconocida-con-tres-premios-abe-por-sus-buenas-p-40964' },
    ],
  },
  'caja-arequipa': {
    queHace: 'Caja municipal de ahorro y crédito con origen en Arequipa y agencias en casi todo el país.',
    datos: [
      { v: '6,000+', t: 'colaboradores (2026)', u: 'https://www.ey.com/es_pe/insights/revista-execution/entrevistas/caja-arequipa-formacion-cultura-ia-potenciar-talento' },
      { v: '230+', t: 'agencias (2026)', u: 'https://www.ey.com/es_pe/insights/revista-execution/entrevistas/caja-arequipa-formacion-cultura-ia-potenciar-talento' },
      { v: '125+', t: 'analistas promovidos', u: 'https://www.ey.com/es_pe/insights/revista-execution/entrevistas/caja-arequipa-formacion-cultura-ia-potenciar-talento' },
      { v: '10,000+', t: 'consultas al mes a «Mi Bonito»', u: 'https://www.ey.com/es_pe/insights/revista-execution/entrevistas/caja-arequipa-formacion-cultura-ia-potenciar-talento' },
    ],
    hitos: [
      { a: '2025', t: 'Doble ganadora del Premio ABE: aprendizaje y desarrollo, y tecnología e IA en RR.HH.', u: 'https://www.corresponsables.com/per/actualidad/caja-arequipa-es-doble-ganadora-en-el-premio-abe-2025-por-impulsar-el-crecimiento-y-la-innovacion-en-la-gestion-de-su-talento/' },
      { a: '2026', t: 'Según EY Perú, la mentoría entre analistas bajó la renuncia temprana de juniors de 6 a 2 de cada 10, y la curva de aprendizaje de 11 a 6 meses.', u: 'https://www.ey.com/es_pe/insights/revista-execution/entrevistas/caja-arequipa-formacion-cultura-ia-potenciar-talento' },
    ],
    perfiles: ['Analistas de crédito'],
  },
  ferreyros: {
    queHace: 'Vende, alquila y da mantenimiento a maquinaria Caterpillar para minería, construcción y otras industrias.',
    datos: [
      { v: '4,700', t: 'colaboradores, aprox. (2026)', u: 'https://energiminas.com/2026/06/10/merco-talento-ferreyros-en-el-top-10-peru-por-13-anos-consecutivos/' },
      { v: '#8', t: 'Merco Talento Perú 2026', u: PR_MERCO26 },
      { v: '13', t: 'años seguidos en el top 10 de Merco Talento', u: 'https://energiminas.com/2026/06/10/merco-talento-ferreyros-en-el-top-10-peru-por-13-anos-consecutivos/' },
    ],
    reconocimientos: [{ a: '2026', t: 'Merco Talento 2026 · única industrial del top 10', u: 'https://energiminas.com/2026/06/10/merco-talento-ferreyros-en-el-top-10-peru-por-13-anos-consecutivos/' }],
  },
  metso: {
    queHace: 'Fabrica equipos y presta servicios para el procesamiento de minerales en las operaciones mineras.',
    reconocimientos: [
      { a: '2024', t: 'GPTW Perú, evaluación del periodo 2024–2025', u: 'https://energiminas.com/2024/09/11/metso-en-peru-entre-las-mejores-empresas-para-trabajar' },
    ],
  },
  antamina: {
    queHace: 'Mina de cobre y zinc a tajo abierto en Huari, Áncash.',
    hitos: [
      { a: '2023', t: 'Primer lugar del sector minero en Merco Talento, dentro del top 5 nacional.', u: 'https://energiminas.com/2023/06/09/antamina-entre-las-cinco-mejores-empresas-en-atraccion-y-retencion-de-talento-en-el-pais' },
      { a: '2024', t: 'Puesto 4 de Merco Talento; once años seguidos entre las cinco primeras.', u: 'https://energiminas.com/2024/06/14/por-11-anos-consecutivos-antamina-se-ubica-entre-las-cinco-mejores-empresas-del-pais-en-atraer-y-retener-talento' },
      { a: 'Set. 2024', t: 'Lanza «Más Talento Antamina», su portal único de ofertas. Recuerda que no cobra por postular.', u: 'https://energiminas.com/2024/09/24/antamina-estrena-nuevo-y-unico-portal-de-ofertas-laborales' },
    ],
    perfiles: ['Practicantes de ingeniería', 'Mantenimiento', 'Mejora del negocio'],
  },
  'plaza-vea': {
    queHace: 'Cadena de supermercados del grupo Intercorp; Vivanda es su formato de supermercado premium.',
    datos: [{ v: '#4', t: 'GPTW Perú 2026, más de 1,000 colaboradores', u: FORBES_GPTW26 }],
  },
  konecta: {
    queHace: 'Atiende a clientes de otras empresas: centros de contacto, ventas y servicios digitales.',
    datos: [{ v: '#11', t: 'GPTW Perú 2026, más de 1,000 colaboradores', u: FORBES_GPTW26 }],
  },
  servir: {
    queHace: 'Ente rector del sistema de gestión de recursos humanos del Estado peruano.',
    datos: [
      { v: '326', t: 'entidades acompañadas por Enlace SERVIR, primer bloque (2026)', u: 'https://www.gob.pe/institucion/servir/noticias/1426768-servir-supera-meta-de-enlace-servir-y-fortalece-la-gestion-de-recursos-humanos-en-326-entidades-publicas' },
      { v: '30.4%', t: 'por encima de la meta de ese bloque', u: 'https://www.gob.pe/institucion/servir/noticias/1426768-servir-supera-meta-de-enlace-servir-y-fortalece-la-gestion-de-recursos-humanos-en-326-entidades-publicas' },
    ],
    hitos: [
      { a: 'Mar. 2026', t: 'Anuncia que Enlace SERVIR asistirá a 394 entidades públicas entre marzo y agosto.', u: 'https://www.gob.pe/institucion/servir/noticias/1369810-servir-despliega-estrategia-nacional-para-asistir-a-394-entidades-de-18-regiones' },
      { a: 'Ago. 2026', t: 'Supera la meta del primer bloque e inicia el segundo en Puno, con entidades de Puno, Moquegua y Tacna.', u: 'https://www.gob.pe/institucion/servir/noticias/1426768-servir-supera-meta-de-enlace-servir-y-fortalece-la-gestion-de-recursos-humanos-en-326-entidades-publicas' },
    ],
    trabaja: { t: 'Ofertas del Estado en Talento Perú', u: 'https://www.gob.pe/institucion/servir/campa%C3%B1as/4782-talento-peru' },
  },
  // Empresas añadidas en noviembre de 2026 (casos del concurso Buenas Prácticas Laborales del MTPE)
  pluspetrol: {
    queHace: 'Empresa de energía; opera el yacimiento de gas de Camisea, en Cusco.',
    datos: [
      { v: '+30', t: 'días sobre la licencia de maternidad legal', u: 'https://proactivo.com.pe/pluspetrol-recibe-reconocimiento-del-ministerio-de-trabajo-por-buenas-practicas-laborales/' },
      { v: '21', t: 'días de licencia de paternidad', u: 'https://proactivo.com.pe/pluspetrol-recibe-reconocimiento-del-ministerio-de-trabajo-por-buenas-practicas-laborales/' },
    ],
  },
  tcs: {
    queHace: 'Empresa de servicios y consultoría de tecnología, con sucursal en Lima.',
    datos: [
      { v: '61', t: 'personas reubicadas en vez de despedidas (2025)', u: BPL25 },
      { v: '48%', t: 'de vacantes cubiertas con talento interno (2025)', u: BPL25 },
    ],
  },
  sodexo: {
    queHace: 'Servicios de alimentación y gestión de instalaciones para empresas e instituciones.',
    datos: [{ v: '500+', t: 'personas acompañadas hacia su jubilación desde 2021', u: BPL25 }],
  },
  tanos: {
    queHace: 'Pequeña constructora de Lima (EIRL), registrada como mype.',
    datos: [{ v: '0', t: 'casos formales de hostigamiento reportados', u: BPL25 }],
  },
  southern: {
    queHace: 'Minera de cobre con operaciones en el sur del Perú (Tacna y Moquegua).',
  },
  abb: {
    queHace: 'Empresa de tecnología eléctrica y automatización industrial.',
  },
};
