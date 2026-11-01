// Datos de la temporada «Analista de Selección». Mismo formato para los demás puestos.

export const PUESTO = {
  id: 'analista-seleccion',
  nombre: 'Analista de Selección',
  temporada: 'El supervisor que faltaba',
  foto: 'assets/cargos/analista-seleccion.webp',
  completa: true, listos: 7, primero: 'rocio',
  ciudad: 'Tacna', nota: ['Tacna', 'Distribuidora de consumo masivo, 180 trabajadores.'],
  correo: 'seleccion@pacificosur.pe',
  rel0: { rocio: 0, walter: -1, fernando: 0, kelly: 0 },
  fin: { hora: '07:52', titulo: 'Tu primer día empieza ya', txt: 'Rocío te espera en la oficina de RR.HH., al fondo del almacén. Lleva prisa: a las nueve tiene comité.' },
  sinopsis: 'Llegas como analista nueva a una distribuidora de Tacna. Heredas siete procesos a medias, un jefe de almacén que perdió la paciencia y un gerente con «favorcitos». Tienes un mes para cubrir al supervisor que falta antes del inventario, sin perder a las personas en el camino.',
  escenario: 'Distribuidora Pacífico Sur S.A.C. (ficticia) · Parque Industrial de Tacna · 180 trabajadores · régimen laboral general',
  duracion: 'Cuatro semanas en la historia, nueve capítulos y unas cuatro horas para vivirlo, a tu ritmo.',
  piel: [
    ['Nunca llevas una sola vacante.', 'Lo normal es tener varias abiertas a la vez, cada una en una etapa distinta y con un jefe que cree que la suya es la urgente.'],
    ['La mayor parte del día es coordinar.', 'Llamar, escribir, reprogramar, actualizar el seguimiento y perseguir a los jefes para que den su opinión.'],
    ['WhatsApp es tu herramienta principal.', 'Con los candidatos casi todo pasa por ahí: confirmaciones, dudas a deshora y audios.'],
    ['Esperar también es trabajo.', 'Muchas veces el proceso no avanza porque el jefe que pidió la vacante tarda días en dar su opinión.'],
    ['No todos llegan.', 'Citas a varios candidatos y algunos no se presentan; a veces alguien acepta la oferta y no llega el primer día.'],
    ['El que pide no siempre sabe qué necesita.', 'Pide «alguien proactivo con experiencia» y tu trabajo es convertir eso en un perfil real.'],
    ['Dices «no» muchas veces al día.', 'A candidatos que se ilusionaron, a gerentes con recomendados y a plazos imposibles.'],
    ['La recompensa es real.', 'Ver que alguien que elegiste se queda, crece y lo hace bien.'],
  ],
  fuentesPiel: 'Basado en avisos de empleo de analistas de selección en Perú y en lo que cuentan reclutadores en foros como r/recruiting.',
  mercado: {
    comun: 'Común: se publican ofertas todas las semanas, en Lima y regiones.',
    nombres: 'Analista de Reclutamiento y Selección · Analista de Atracción de Talento · Reclutador/a',
    formacion: 'Psicología, Administración, Relaciones Industriales o Ingeniería Industrial.',
    donde: 'Empresas medianas y grandes, consultoras de selección, retail y centros de contacto (estos últimos con mucho reclutamiento masivo).',
    sueldo: 'Varía mucho según ciudad y empresa. En reclutamiento masivo hay avisos con sueldo básico desde S/ 1,500 más bonos por metas. Lo verificaremos por ciudad antes de publicar.',
  },
  capitulos: [
    { n: 1, semana: 1, dia: 'Semana 1, lunes', titulo: 'Primer día', comp: 'Entender el proceso y tu cartera', resumen: 'Inducción con Rocío, accesos que no funcionan, siete procesos heredados y el correo molesto de Walter.' },
    { n: 2, semana: 1, dia: 'Semana 1, miércoles', titulo: 'El perfil', comp: 'Levantar un perfil real', resumen: 'Vas al almacén a ver el puesto en persona, Walter te pide algo que no puedes aceptar y don Julio te cuenta lo que nadie escribe.' },
    { n: 3, semana: 1, dia: 'Semana 1, viernes', titulo: 'Salir a buscar', comp: 'Atraer candidatos', resumen: 'Aviso, canales y un presupuesto que no alcanza para todo.' },
    { n: 4, semana: 2, dia: 'Semana 2, martes', titulo: 'El filtro', comp: 'Filtrar con criterios', resumen: '140 postulaciones, llamadas que nadie contesta y el sobrino de Fernando en la lista.' },
    { n: 5, semana: 2, dia: 'Semana 2, jueves', titulo: 'Las entrevistas', comp: 'Evaluar con evidencia', resumen: 'Tres candidatos muy distintos y una pregunta que Walter no debió hacer.' },
    { n: 6, semana: 3, dia: 'Semana 3, martes', titulo: 'La terna', comp: 'Decidir con datos y con personas', resumen: 'Una referencia que no cuadra y una decisión entre experiencia y encaje.' },
    { n: 7, semana: 3, dia: 'Semana 3, viernes', titulo: 'La oferta', comp: 'Negociar y cerrar', resumen: 'El elegido pide más que la banda y su empleador le hace una contraoferta.' },
    { n: 8, semana: 4, dia: 'Semana 4, martes', titulo: 'El ingreso', comp: 'Incorporar cumpliendo la ley', resumen: 'Contrato, alta el mismo día, inducción y un ingreso que no se presenta.' },
    { n: 9, semana: 4, dia: 'Semana 4, viernes', titulo: 'Fin de mes', comp: 'Medir y mirar atrás', resumen: 'Tus indicadores, el inventario con supervisor nuevo y una pregunta: ¿te ves en este puesto?' },
  ],
  competencias: [
    ['Conocer el proceso y la política', [1, 2, 9]],
    ['Levantar perfiles', [2, 3]],
    ['Atraer y filtrar', [3, 4, 9]],
    ['Evaluar con evidencia', [5, 6]],
    ['Negociar y cerrar', [7]],
    ['Cumplir la ley', [1, 2, 3, 5, 7, 8]],
    ['Gestionar varios procesos', [1, 2, 4, 7]],
    ['Trabajar con personas', [1, 2, 5, 6, 7, 9]],
    ['Analizar y proponer mejoras', [7, 9]],
  ],
  entregables: ['Perfil de puesto', 'Aviso de empleo', 'Plan de reclutamiento', 'Matriz de preselección', 'Guía de entrevista', 'Informe de terna', 'Sustento de oferta', 'Carta oferta', 'Checklist de ingreso', 'Plan de inducción', 'Reporte del mes'],
};

export const PERSONAS = {
  rocio: { n: 'Rocío Mamani', r: 'Jefa de RR.HH. · tu jefa', quiere: 'Que resuelvas sin escalar todo.', preocupa: 'Que la gerencia vea a RR.HH. como el área lenta.', habla: 'Directa y cálida. Frases cortas.', av: { skin: '#A8714A', hair: 'mono', hc: '#2A1A12', top: '#2F6B3F', gl: true, bg: '#CFE6D5' } },
  walter: { n: 'Ing. Walter Quispe', r: 'Jefe de Operaciones', quiere: 'Un supervisor antes del inventario.', preocupa: 'Seguir cubriendo el almacén él mismo.', habla: 'Seco y apurado. Escribe en mayúsculas cuando se estresa.', av: { skin: '#8D5A3B', hair: 'corto', hc: '#3B3B3B', top: '#7CC6EA', vest: true, bg: '#FBE3A6' } },
  fernando: { n: 'Fernando Salas', r: 'Gerente Comercial', quiere: 'Contratar rápido a «su gente».', preocupa: 'Perder ventas en la campaña.', habla: 'Encantador. «Colega», «tú dale nomás».', av: { skin: '#C68B5E', hair: 'peinado', hc: '#1C1410', top: '#FFFFFF', tie: '#F2A900', bg: '#D7ECF8' } },
  kelly: { n: 'Kelly Ramos', r: 'Asistente de planillas · tu compañera', quiere: 'Recibir los datos de ingreso a tiempo.', preocupa: 'Las altas de último minuto.', habla: 'Amable y práctica.', av: { skin: '#C68B5E', hair: 'cola', hc: '#3A2418', top: '#7CC6EA', bg: '#E4F1E7' } },
  julio: { n: 'Don Julio Cutipa', r: 'Operario de almacén · 20 años en la empresa', quiere: 'Un supervisor que conozca el almacén.', preocupa: 'Que manden a alguien que solo sepa de oficina.', habla: 'Pausado, con anécdotas.', av: { skin: '#7A4A2E', hair: 'gorra', hc: '#9A9A9A', top: '#2F6B3F', vest: true, bg: '#FBE3A6' } },
  lucia: { desde: 5, n: 'Lucía Flores', r: 'Candidata · jefa de turno en retail', quiere: 'Dar el salto a supervisión.', preocupa: 'Que su poca experiencia en almacén pese más que su liderazgo.', habla: 'Preparada, algo nerviosa.', av: { skin: '#B07A52', hair: 'largo', hc: '#22150F', top: '#F2A900', bg: '#D7ECF8' } },
  marco: { desde: 5, n: 'Marco Ticona', r: 'Candidato · supervisor con 6 años', quiere: 'Estabilidad cerca de su familia.', preocupa: 'Ganar menos que en su trabajo actual.', habla: 'Seguro, algo confiado.', av: { skin: '#8D5A3B', hair: 'corto', hc: '#16100C', top: '#CFE6D5', beard: true, bg: '#E4F1E7' } },
  patricia: { desde: 5, n: 'Patricia Huanca', r: 'Candidata · supervisora en una agroexportadora de Ica', quiere: 'Mudarse a Tacna por su familia.', preocupa: 'La mudanza y el preaviso con su empresa actual.', habla: 'Clara, con datos.', av: { skin: '#A8714A', hair: 'trenza', hc: '#1E130D', top: '#2F6B3F', bg: '#FBE3A6' } },
};

// Retrato ilustrado provisional (SVG). Las ilustraciones finales se encargan aparte.
let uid = 0;
export function avatar(p, size = 96, label = '') {
  const a = p.av, s = a.skin, h = a.hc, cid = 'av' + (++uid);
  const hairBack = {
    largo: `<path d="M34 52c0-22 12-34 26-34s26 12 26 34v40H34z" fill="${h}"/>`,
    trenza: `<path d="M74 60c8 10 10 24 6 36" stroke="${h}" stroke-width="9" fill="none" stroke-linecap="round"/>`,
    cola: `<path d="M80 40c12 4 14 20 8 30" stroke="${h}" stroke-width="10" fill="none" stroke-linecap="round"/>`,
    mono: `<circle cx="60" cy="20" r="9" fill="${h}"/>`,
  }[a.hair] || '';
  const hairTop = {
    mono: `<path d="M38 48c0-16 10-25 22-25s22 9 22 25c-6-8-14-11-22-11s-16 3-22 11z" fill="${h}"/>`,
    corto: `<path d="M38 46c0-15 10-23 22-23s22 8 22 23c-4-5-10-8-22-8s-18 3-22 8z" fill="${h}"/>`,
    peinado: `<path d="M37 47c0-17 11-25 24-25 12 0 22 8 22 22-8-9-20-10-32-6-6 2-10 5-14 9z" fill="${h}"/>`,
    cola: `<path d="M38 50c0-17 10-27 22-27s22 10 22 27c-5-9-12-13-22-13s-17 4-22 13z" fill="${h}"/>`,
    largo: `<path d="M38 52c0-18 10-28 22-28s22 10 22 28c-4-10-12-15-22-15s-18 5-22 15z" fill="${h}"/>`,
    trenza: `<path d="M38 50c0-17 10-27 22-27s22 10 22 27c-5-9-12-13-22-13s-17 4-22 13z" fill="${h}"/>`,
    gorra: `<path d="M37 44c0-14 10-21 23-21s23 7 23 21z" fill="#F2A900"/><path d="M60 41h30c0 4-4 6-10 6H60z" fill="#C98C00"/><path d="M40 52c0-3 1-6 3-8M80 52c0-3-1-6-3-8" stroke="${h}" stroke-width="4"/>`,
  }[a.hair] || '';
  const vest = a.vest ? `<path d="M30 120V102c0-10 8-16 18-18l12 18 12-18c10 2 18 8 18 18v18z" fill="#F2A900"/><path d="M36 108h14M70 108h14" stroke="#EEF7FC" stroke-width="3"/>` : '';
  const tie = a.tie ? `<path d="M60 86l-4 8 4 18 4-18z" fill="${a.tie}"/>` : '';
  const beard = a.beard ? `<path d="M44 62c2 12 8 18 16 18s14-6 16-18c-4 6-10 8-16 8s-12-2-16-8z" fill="${h}" opacity=".85"/>` : '';
  const gl = a.gl ? `<g fill="none" stroke="#0F2A3D" stroke-width="2"><circle cx="51" cy="54" r="6"/><circle cx="69" cy="54" r="6"/><path d="M57 54h6"/></g>` : '';
  return `<svg viewBox="0 0 120 120" width="${size}" height="${size}" role="img" aria-label="${label || 'Retrato ilustrado de ' + p.n}">
    <circle class="bg" cx="60" cy="60" r="58" fill="${a.bg}"/>
    <clipPath id="${cid}"><circle cx="60" cy="60" r="60"/></clipPath>
    <g clip-path="url(#${cid})">
      ${hairBack}
      <path d="M22 124c0-22 16-38 38-38s38 16 38 38z" fill="${a.top}"/>${vest}${tie}
      <rect x="53" y="72" width="14" height="16" rx="6" fill="${s}"/>
      <ellipse cx="60" cy="54" rx="21" ry="25" fill="${s}"/>
      ${beard}${hairTop}
      <circle cx="51" cy="55" r="2.4" fill="#1A1210"/><circle cx="69" cy="55" r="2.4" fill="#1A1210"/>
      <path d="M53 66c4 3 10 3 14 0" stroke="#5A2E22" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      ${gl}
    </g></svg>`;
}

// Glosario: se marca en el texto la primera vez que aparece cada término en una escena.
export const GLOSARIO = {
  'terna': 'Los tres candidatos finalistas que se presentan al jefe para que elija a uno.',
  'T-Registro': 'Registro de SUNAT donde la empresa da de alta a cada trabajador. Se hace dentro del día en que la persona empieza a trabajar.',
  'perfil del puesto': 'Documento que describe qué hace el puesto y qué conocimientos, experiencia y competencias necesita quien lo ocupe.',
  'perfil de puesto': 'Documento que describe qué hace el puesto y qué conocimientos, experiencia y competencias necesita quien lo ocupe.',
  'requerimiento': 'Pedido formal que hace un jefe a RR.HH. para cubrir una vacante.',
  'banda salarial': 'Rango de sueldo, con un mínimo y un máximo, aprobado para un puesto.',
  'llamada de filtro': 'Llamada corta para confirmar interés, disponibilidad y datos básicos antes de citar a una entrevista.',
  'portal de empleo': 'Página web donde se publican avisos y llegan las postulaciones, como Computrabajo o Bumeran.',
  'cliente interno': 'Jefe o área de la misma empresa al que RR.HH. le presta un servicio, como cubrir una vacante.',
  'referido': 'Candidato recomendado por alguien de la empresa.',
  'nepotismo': 'Favorecer a familiares en una contratación. En el sector público está prohibido por ley.',
  'WMS': 'Sistema de gestión de almacén: controla ingresos, ubicaciones y despachos de la mercadería.',
  'inventario': 'Conteo físico de toda la mercadería del almacén. Suele hacerse una o dos veces al año y paraliza buena parte de la operación.',
  'turnos rotativos': 'Horarios que cambian por semanas o por días: mañana, tarde o noche.',
  'postulante': 'Persona que se presenta a un proceso de selección.',
  'Planillas': 'Área que calcula y paga sueldos, beneficios y aportes, y registra a los trabajadores ante SUNAT.',
  'datos personales': 'Información que identifica a una persona: nombre, DNI, teléfono o su CV. La Ley 29733 regula cómo se protegen.',
  'inducción': 'Proceso para que una persona nueva conozca la empresa, su puesto y sus normas al ingresar.',
  'preaviso': 'Plazo con que un trabajador avisa que renuncia antes de irse. En el régimen general son 30 días, aunque el empleador puede exonerarlo.',
  'comité': 'Reunión periódica de jefes para revisar los temas de la empresa.',
  'Excel de seguimiento': 'Hoja donde se registra en qué etapa está cada proceso de selección.',
  'competencias': 'Conocimientos, habilidades y actitudes que se ven en lo que una persona hace.',
  'montacargas': 'Vehículo para levantar y mover carga pesada en un almacén. Para operarlo se necesita capacitación y autorización.',
  'buena presencia': 'Expresión común en avisos antiguos. Es ambigua y suele esconder preferencias por apariencia.',
  'Ley 26772': 'Ley que prohíbe requisitos discriminatorios en las ofertas de empleo, por ejemplo por sexo, edad o estado civil.',
  'Ley 29733': 'Ley de Protección de Datos Personales. Obliga a cuidar y usar solo para su fin los datos de las personas.',
  'Ley 26771': 'Ley que prohíbe el nepotismo en el sector público.',
  'misión del puesto': 'Una frase que resume para qué existe el puesto: qué resultado aporta a la empresa.',
  'PLAME': 'Planilla Mensual de Pagos: declaración que la empresa presenta cada mes a SUNAT con los sueldos, aportes y retenciones de sus trabajadores.',
  'guías de remisión': 'Documentos que acompañan el traslado de mercadería y sustentan qué sale del almacén y hacia dónde.',
  'equidad interna': 'Que personas con el mismo trabajo y desempeño ganen de forma coherente dentro de la empresa.',
  'Ley 30709': 'Ley que prohíbe la discriminación salarial entre hombres y mujeres y obliga a tener un cuadro de categorías y funciones.',
  'requisito objetivo': 'Requisito que se justifica por la naturaleza del puesto y se puede verificar, no por preferencias personales.',
  'movilidad interna': 'Cubrir una vacante con alguien que ya trabaja en la empresa, por ascenso o cambio de área.',
};
