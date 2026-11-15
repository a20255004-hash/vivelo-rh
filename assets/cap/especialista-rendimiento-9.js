// Analista de Gestión del Desempeño · Capítulo 9 · «El nuevo formato» · Semana 2, jueves.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (textos oficiales en docs/normas/txt; SPIJ: https://spij.minjus.gob.pe):
// - Constitución, art. 26 inc. 1: igualdad sin discriminación (ya citada).
// - Ley 30709, art. 6: protección por embarazo y lactancia (ya citada).
// - Ley 29733: solo los datos necesarios; los datos de salud son sensibles (ya citada).
// - D.S. 003-97-TR, art. 23 a): ajustes razonables para personas con discapacidad (texto modificado por la Ley 29973).

export const CAP = {
  n: 9, titulo: 'El nuevo formato', dia: 'Semana 2, jueves', foto: 'assets/foto2/tablet-equipo.webp',
  lugar: 'Alimentos Lima S.A. · Talento y sala de directorio',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. A las 15:00 presentas el formato nuevo ante la Gerencia General. Todo lo que salió mal en estas dos semanas cabe en una sola pregunta: ¿cómo se evita el año que viene?', boton: 'Empezar el día',
  kusi: 'Hoy conviertes dos semanas de problemas en una herramienta para 1,500 personas.',
  lead: 'Escuchaste qué necesita la gerencia, diseñaste un formato que corrige lo que viste, cerraste con Lucía el reclamo, armaste un calendario nuevo y defendiste tu propuesta frente a quien más dudaba.',
  reflexion: 'Si tuvieras que evaluar tus dos semanas con tu propio formato, ¿qué nota te pondrías?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'formato', p: 'Formato nuevo', j: 'Talento · Gerencia General', d: 0, e: 'Hoy 15:00' },
  { id: 'calendario', p: 'Calendario del ciclo', j: 'Talento', d: 0, e: 'Sin armar' },
  { id: 'reclamo', p: 'Reclamo de Lucía Paredes', j: 'Talento', d: 0, e: 'Reunión 10:00' },
  { id: 'bonos', p: 'Bonos', j: 'Mónica · Finanzas', d: 0, e: 'Planilla mañana' },
  { id: 'andres', p: 'Caso de Andrés', j: 'Paola · Auditoría', d: 0, e: 'Pedido de marzo en revisión' },
];

export const FUTURO = {
  formato_solido: ['El formato nuevo tiene metas al inicio, anclas, ajuste por licencias y comentarios obligatorios.', 'Corrige lo que viste en estas dos semanas.'],
  formato_flojo: ['El formato nuevo repite parte de los problemas del viejo.', 'El próximo ciclo traerá los mismos reclamos.'],
  lucia_cerrado: ['El reclamo de Lucía se cerró en persona, con Carla y con reparación.', 'Lucía siente que hablar sirvió.'],
  calendario_ok: ['El ciclo nuevo tiene metas en enero y una conversación a mitad de año.', 'Nadie llegará a noviembre sin saber cómo va.'],
  formato_aprobado: ['La Gerencia General aprobó el formato con metas y comportamientos.', 'Empieza en enero.'],
  formato_recortado: ['La gerencia aprobó un formato solo de metas.', 'Lo que pasó con Andrés podría repetirse.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  lucia: { n: 'Lucía Paredes', sub: 'Analista de Marketing', c: '#2C7A7B' },
  gerentes: { n: 'Comité de calibración', sub: '7 gerentes, Paola y tú', c: '#1F5C99' },
};

export const WSP = [
  { chat: 'talento', t: '08:05', de: 'Wendy', txt: 'Te imprimí el formato viejo en A3 para que lo rompas en la presentación 😂 (es broma… ¿o no?)' },
  { chat: 'andres', t: '09:40', de: 'Andrés', txt: 'Ayer el señor Sáenz me pidió que lo acompañe a una reunión con un cliente grande. Primera vez en el año.', si: 'reunion_andres_bien' },
  { chat: 'andres', t: '09:40', de: 'Andrés', txt: 'Hablé con Paola. Me dijo que lo de marzo lo está viendo Auditoría. Gracias por no dejarlo pasar.', si: 'reunion_andres_mal' },
  { chat: 'lucia', t: '11:20', de: 'Lucía', txt: 'Gracias. Me voy más tranquila. Ojalá lo de las metas les sirva a otras mamás.', si: 'lucia_cerrado' },
  { chat: 'alberto', t: '14:30', de: 'Alberto', txt: 'Voy a la presentación. Te advierto que voy a preguntar.' },
  { chat: 'gerentes', t: '17:10', de: 'Rafael (Planta)', txt: 'Que el formato tenga versión en papel para planta. Y que alguien nos ayude en enero. Con eso, yo firmo.' },
];

export const CORREOS = [
  { t: '08:10', de: 'Carmen Lozada · Gerencia General', para: 'Paola Ríos; Analista de Gestión del Desempeño', asunto: 'Presentación de hoy', html: '<p>Quiero una propuesta que podamos aplicar en enero, que los gerentes entiendan y que Finanzas pueda presupuestar. Quince minutos. Carmen</p>' },
  { t: '17:50', de: 'Carmen Lozada · Gerencia General', para: 'Paola Ríos; Analista de Gestión del Desempeño', asunto: 'RE: Formato nuevo', html: '<p>Aprobado para enero. Gracias por un trabajo serio. Mañana les escribo sobre otro tema relacionado.</p><p>Carmen</p>', si: 'formato_aprobado' },
];

export const QUIZ = [
  { q: '¿Cuándo deben fijarse las metas de un ciclo de desempeño?', ops: ['Al evaluar, en noviembre', 'Al inicio del ciclo, acordadas con el jefe', 'Nunca: se evalúa la actitud', 'Cuando lo pida el trabajador'], ok: 1, por: 'Una meta que no se conoce durante el año no orienta el trabajo de nadie.' },
  { q: 'Un ancla de comportamiento bien escrita…', ops: ['«Tiene buena actitud»', '«Comparte con su equipo lo que aprende y ayuda a otros a cerrar sus pedidos»', '«Es proactivo»', '«Se pone la camiseta»'], ok: 1, por: 'Describe algo que se puede ver y contar con ejemplos.' },
  { q: '¿Por qué incluir una conversación a mitad de año?', ops: ['Para tener más reuniones', 'Para que nadie llegue al final sin saber cómo va', 'Porque lo exige la ley', 'Para cambiar las metas de todos'], ok: 1, por: 'La sorpresa en noviembre es el origen de muchos reclamos.' },
  { q: 'El formato debe prever ajustes razonables para un trabajador con discapacidad porque…', ops: ['Es un favor', 'La ley pide realizar ajustes razonables antes de juzgar su desempeño', 'No hace falta', 'Solo si lo pide el sindicato'], ok: 1, por: 'El art. 23 a) del D.S. 003-97-TR, modificado por la Ley 29973, se refiere a la deficiencia que impide el desempeño una vez realizados los ajustes razonables.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:20', ch: 'presencial', who: 'paola', titulo: 'Qué quiere la gerencia', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Paola', show: ['confianza', 'calidad'],
    body: () => `<p>Paola lee el correo de Carmen Lozada, la gerenta general, en voz alta: «Quince minutos». Se ríe. «Carmen fue gerenta de planta veinte años. <mark class="clave">Odia los formatos bonitos que nadie usa</mark>.» Tienes tiempo para dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Paola.',
    opts: [
      { id: 'carmen', label: '¿Qué le preocupa a Carmen?', info: '«Que el formato funcione en planta igual que en oficina. Y que nadie vuelva a decirle que una mamá salió mal por estar de licencia: eso le dolió de verdad.»' },
      { id: 'alberto', label: '¿Qué va a objetar Alberto?', info: '«Que los comportamientos son subjetivos y que a un vendedor solo lo deben medir por ventas. Tiene parte de razón: si los comportamientos no tienen anclas, son subjetivos.»' },
      { id: 'costo', label: '¿Cuánto podemos cambiar?', info: '«El sistema permite cambiar los factores y agregar comentarios obligatorios sin costo. Una versión en papel para planta, sí. Un sistema nuevo, ni lo sueñes este año.»' },
      { id: 'error', label: '¿Qué salió mal la última vez que se cambió el formato?', info: '«En 2019 se cambió sin capacitar a los jefes. A los tres meses todos usaban el viejo en Excel.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, calidad: picks.includes('alberto') ? 2 : 1 }, rel: { paola: picks.includes('carmen') ? 1 : 0 },
      out: 'Paola te deja su plumón de la suerte, uno verde mordido. «Tú lo presentas. Yo te cubro las preguntas difíciles.»',
      kusi: ['curioso', 'Ya sabes quién pregunta qué.'],
    }),
    mirada: {
      ve: 'Un formato no se diseña en el vacío: se diseña para quien decide, quien lo usa y quien lo va a criticar. Saber qué le preocupa a cada uno antes de presentarlo ahorra la mitad de la discusión.',
      visual: { tipo: 'matriz', x: 'Poder en la decisión', y: 'Interés en el cambio', cuadrantes: ['Aliados', 'Convencer', 'Informar', 'Cuidar'], items: [['Carmen', .95, .8], ['Alberto', .7, .3], ['Giancarlo', .6, .7], ['Rafael', .3, .8]] },
    },
  },
  {
    id: 'i2', t: '09:00', ch: 'documento', who: null, titulo: 'El formato, pieza por pieza', banner: 'assets/esc/idea.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Pones el formato viejo a un lado, con tus marcas de la primera semana. ${F.has('formato_leido') ? 'La línea de la licencia de maternidad sigue subrayada en rojo.' : 'Ahora sabes lo que se te escapó el primer día: la línea de la licencia.'}</p><p>Armas el nuevo con <mark class="clave">lo que aprendiste en estas dos semanas</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del formato.', boton: 'Guardar el formato',
    bloques: [
      { id: 'metas', t: 'Metas (60 %)', n: 2, ops: [
        { id: 'm1', t: 'De tres a cinco metas acordadas con el jefe en enero, medibles.', ok: true },
        { id: 'm2', t: 'Metas ajustadas al tiempo trabajado cuando hay licencias o descansos médicos.', ok: true, por: 'Lo que le pasó a Lucía y a otras 13.' },
        { id: 'm3', t: 'Metas que el jefe puede cambiar en noviembre según cómo terminó el año.', ok: false, por: 'Cambiar la meta al final la vuelve inútil.' },
      ] },
      { id: 'comp', t: 'Comportamientos (40 %)', n: 2, ops: [
        { id: 'c1', t: 'Cuatro comportamientos, cada uno con anclas observables por nivel.', ok: true },
        { id: 'c2', t: 'Ajustes razonables previstos para trabajadores con discapacidad.', ok: true, por: 'Se evalúa a la persona con los apoyos que necesita.' },
        { id: 'c3', t: '«Actitud positiva con el jefe», de 1 a 5.', ok: false, por: 'Premia caerle bien al jefe.' },
      ] },
      { id: 'proceso', t: 'Proceso', n: 2, ops: [
        { id: 'p1', t: 'Comentarios obligatorios con al menos un ejemplo en cada nota extrema.', ok: true },
        { id: 'p2', t: 'Versión en papel para planta, digitada con apoyo de Talento.', ok: true, por: 'Lo que aprendiste con Rafael.' },
        { id: 'p3', t: 'Campo para anotar diagnósticos médicos que expliquen el desempeño.', ok: false, por: 'Los datos de salud son sensibles y no van en una evaluación.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : -1 },
        flags: [q === 'riesgosa' ? 'formato_flojo' : 'formato_solido'], cartera: { formato: q === 'riesgosa' ? 'Formato con problemas heredados' : 'Formato: metas, anclas, ajustes y comentarios' },
        out: q === 'buena' ? 'El formato cabe en dos páginas. Wendy lo compara con el viejo y cuenta: «Corrige siete cosas de las que nos quejamos esta semana».' : 'El formato mejora, pero arrastra piezas que causaron problemas.',
        pro: { ok: 'Cada pieza del formato responde a un problema real que viste.', risk: 'Un campo para diagnósticos o metas cambiables repite los errores del viejo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Dos semanas de problemas, convertidas en dos páginas!' : 'Algunas piezas vienen del formato viejo…'],
      };
    },
    rules: [[LEY, 'D.S. 003-97-TR, art. 23 a): los ajustes razonables se realizan antes de juzgar si una deficiencia impide el desempeño.'], [LEY, 'Ley 29733: los datos de salud son sensibles.']],
    mirada: {
      ve: 'El mejor formato no es el más completo, sino el que cierra las puertas por donde entró la injusticia: metas tardías, anclas vagas, licencias castigadas, notas sin comentarios.',
      visual: { tipo: 'cambio', titulo: 'Del formato de 2019 al nuevo', pares: [['Metas al evaluar', 'Metas en enero'], ['−1 punto por licencia', 'Metas ajustadas al tiempo trabajado'], ['Comentarios opcionales', 'Ejemplos obligatorios'], ['Actitud con el jefe', 'Comportamientos con anclas']] },
    },
  },
  {
    id: 'i3', t: '10:00', ch: 'presencial', who: null, titulo: 'La reunión con Lucía', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala pequeña junto al comedor', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Lucía llega con una foto de su hija en el fondo de pantalla del celular. Carla se sienta frente a ella, nerviosa. ${F.has('criterio_todas') ? 'Sabes que trece madres más tendrán su nota corregida.' : 'Sabes que la corrección fue solo para ella.'}</p><p>Le explicas el resultado. Lucía escucha y pregunta: «<mark class="clave">¿Y esto va a volver a pasar el próximo año?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Contarle que el formato nuevo ajusta las metas por licencias, y pedirle permiso para usar su caso, sin su nombre, como ejemplo en la capacitación.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, flags: ['lucia_cerrado'], cartera: { reclamo: 'Cerrado en persona, con reparación' },
          out: 'Lucía asiente. Carla dice, sin que nadie se lo pida: «Lo de tu hija no debí decirlo. Perdóname». Lucía se queda en silencio un momento. «Gracias por decirlo.»',
          pro: { ok: 'Le muestras que su reclamo cambió algo para otras, y le preguntas antes de usar su historia.' },
          kusi: ['feliz', 'Su reclamo dejó huella. ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle que no puedes asegurarle nada: el formato depende de la gerencia.',
        res: { q: 'aceptable', fx: { personas: 0, confianza: -1 },
          out: 'Lucía agradece y se va. Es verdad lo que dijiste, pero se queda con la idea de que nada cambió más allá de su nota.',
          pro: { ok: 'No prometes lo que no depende de ti.', risk: 'Podías decirle lo que sí estás proponiendo.' },
          kusi: ['pensando', 'Algo sí podías contarle.'] } },
    ],
    rules: [[BP, 'Cuenta a quien reclamó qué cambió gracias a su reclamo. Pide permiso antes de usar su caso.']],
    mirada: { ve: 'La pregunta «¿va a volver a pasar?» es la que más importa a quien reclama. Poder responder «esto cambió» convierte un reclamo en una mejora para todas.' },
  },
  {
    id: 'i4', t: '11:40', ch: 'documento', who: null, titulo: 'El ciclo de doce meses', banner: 'assets/esc/reloj.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Carmen pidió algo que se pueda aplicar en enero. El formato sin calendario es una hoja más. Armas <mark class="clave">el ciclo del año que viene</mark>, mes por mes.</p>`,
    type: 'secuencia', prompt: 'Ordena el ciclo del año. Usa las flechas.', boton: 'Guardar el calendario',
    items: [
      { id: 'ene', t: 'Enero: capacitación de jefes y metas acordadas con cada persona', por: 'Lo que faltó en 2019.' },
      { id: 'jun', t: 'Junio: conversación de mitad de año para revisar avances', por: 'Nadie llega a noviembre sin saber cómo va.' },
      { id: 'oct', t: 'Octubre: autoevaluación y evaluación del jefe con ejemplos', por: 'Con tiempo, no el último día.' },
      { id: 'nov', t: 'Noviembre: calibración por áreas con la referencia de distribución', por: 'Antes de cerrar presupuesto.' },
      { id: 'dic', t: 'Diciembre: retroalimentación y luego el pago del bono', por: 'Primero la conversación, después la boleta.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 2 : 0 }, flags: q === 'buena' ? ['calendario_ok'] : [],
        cartera: { calendario: q === 'buena' ? 'Ciclo de enero a diciembre' : 'Calendario por ajustar' },
        out: q === 'buena' ? 'Mónica pide una copia: «Por fin sabré en noviembre cuánto voy a necesitar en diciembre».' : 'Paola ajusta: «Si el bono sale antes de la conversación, la conversación ya no importa».',
        pro: { ok: 'Un calendario claro reparte el esfuerzo y evita el último día.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Un año entero sin sorpresas!' : 'El orden cuenta.'],
      };
    },
    mirada: {
      ve: 'Casi todos los problemas de estas dos semanas vinieron de hacer todo al final: metas, evaluación, calibración y bono en un mes. Repartir el ciclo en el año es la mejora más barata y la más difícil de sostener.',
      visual: { tipo: 'linea', titulo: 'El ciclo nuevo', hitos: [['Enero', 'Metas'], ['Junio', 'Conversación'], ['Octubre', 'Evaluación'], ['Noviembre', 'Calibración'], ['Diciembre', 'Retro y bono']] },
    },
  },
  {
    id: 'i5', t: '15:10', ch: 'presencial', who: 'gerente', titulo: '«Los comportamientos son subjetivos»', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala de directorio', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>Carmen escucha con los brazos cruzados. Vas por la segunda lámina cuando Alberto levanta la mano. ${F.has('alberto_trato') ? 'Te mira como recordándote que te ofreció su voto.' : 'Es la pregunta que Paola te anticipó.'}</p><p>«A un vendedor lo mides por lo que vende. <mark class="clave">Lo de los comportamientos es subjetivo</mark>: es darle al jefe una excusa para castigar a quien no le cae.» Carmen te mira: «¿Qué respondes?».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Darle la razón a medias: sin anclas son subjetivos. Mostrar las anclas observables y que toda nota extrema exige ejemplos.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3 }, rel: { gerente: 0, paola: 1 }, flags: ['formato_aprobado'], cartera: { formato: 'Aprobado: metas y comportamientos con anclas' },
          out: 'Alberto lee las anclas de «colaboración». «Ya. Así escrito, se puede discutir.» Carmen cierra la carpeta: «Aprobado para enero. Con la versión en papel para planta».',
          pro: { ok: 'Reconocer la parte de razón del otro hace más fuerte tu propuesta.', info: 'Las mismas anclas que protegen a Andrés también protegen a los jefes de reclamos injustos.' },
          kusi: ['celebra', '¡Aprobado! Y con el gerente más duro a bordo.'] } },
      { id: 'b', label: 'Aceptar: quedarse solo con metas, que son lo más objetivo, para que el formato se apruebe hoy.',
        res: { q: 'aceptable', fx: { confianza: 2, calidad: -2 }, flags: ['formato_recortado'], cartera: { formato: 'Aprobado: solo metas' },
          out: 'Se aprueba en cinco minutos. Pero un vendedor que llegue a la meta inflando pedidos tendrá la misma nota que Andrés, que se negó a hacerlo.',
          pro: { ok: 'Sale aprobado.', risk: 'Solo metas mide el qué, no el cómo: premia llegar al número de cualquier forma.' },
          kusi: ['pensando', 'Aprobado… pero ¿completo?'] } },
      { id: 'c', label: 'Recordarle que, con este formato, lo que hizo con Andrés no habría pasado.',
        res: { q: 'riesgosa', fx: { confianza: -4, etica: 1 }, rel: { gerente: -1 },
          out: 'La sala se queda en silencio. Carmen corta: «No vamos a discutir casos aquí». La presentación pierde diez minutos y el formato se posterga a la próxima semana.',
          pro: { ok: 'Lo que dices puede ser cierto.', risk: 'Exponer un caso individual delante de la gerencia convierte una propuesta en un ataque.' },
          kusi: ['preocupado', 'Tenías razón, pero no era el lugar.'] } },
    ],
    rules: [[BP, 'Un comportamiento evaluable se describe con conductas observables por nivel.']],
    mirada: {
      ve: 'Los críticos de un formato suelen tener parte de razón. Medir solo resultados premia llegar al número de cualquier forma; medir comportamientos sin anclas abre la puerta a la simpatía. Las anclas son el punto de encuentro.',
      visual: { tipo: 'balanza', a: { t: 'Solo metas', items: ['Simple', 'Difícil de discutir'] }, b: { t: 'Metas y comportamientos con anclas', items: ['Mide qué y cómo', 'Protege a quien se niega a hacer trampa', 'Exige ejemplos'] } },
    },
  },
  {
    id: 'i6', t: '17:20', ch: 'whatsapp', who: null, titulo: 'El mensaje a los gerentes', banner: 'assets/foto2/aplausos-verde.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Rafael ya escribió en el grupo que «con papel y ayuda, firma». ${F.has('formato_aprobado') ? 'El formato está aprobado para enero.' : F.has('formato_recortado') ? 'Se aprobó una versión solo de metas.' : 'El formato se postergó a la próxima semana.'}</p><p>Toca contarle al comité qué sigue, <mark class="clave">en un mensaje que no suene a victoria de nadie</mark>.</p>`,
    type: 'compose', enviaA: 'gerentes', para: 'Para: Comité de calibración · 7 gerentes', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué se decidió', ops: [
        { id: 'q1', t: 'Buenas tardes. Gracias por las preguntas de hoy: el formato mejoró con ellas.', ok: true, por: 'Reconoce a quienes objetaron.' },
        { id: 'q2', t: 'Buenas tardes. ¡Se aprobó nuestra propuesta! 🎉', ok: false, por: 'Suena a que alguien ganó y alguien perdió.' },
      ] },
      { id: 'sigue', t: 'Qué sigue', ops: [
        { id: 's1', t: 'En enero hacemos la capacitación por áreas y acordamos metas con cada equipo. Planta tendrá versión en papel.', ok: true },
        { id: 's2', t: 'En enero les mandamos el formato por correo.', ok: false, por: 'Así fracasó el cambio de 2019.' },
      ] },
      { id: 'pide', t: 'Qué les pides', ops: [
        { id: 'p1', t: '¿Me proponen hasta el 15 de diciembre a un jefe de su área para probarlo antes?', ok: true },
        { id: 'p2', t: 'Cualquier duda, me escriben.', ok: null, por: 'Correcto, pero no compromete a nadie.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 's1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 2 : 0 }, rel: { gerente: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Alberto es el primero en responder: «Propongo a Huerta para probarlo». Te quedas mirando la pantalla un rato.' : 'Los gerentes ponen sus pulgares. Nadie propone a nadie.',
        pro: { ok: 'Agradecer a quien objetó y pedir algo concreto suma aliados para enero.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? '¿Alberto propuso a Andrés? ¡No lo puedo creer!' : 'Se puede comprometer más.'],
      };
    },
    mirada: { ve: 'Un cambio aprobado todavía no es un cambio hecho. El mensaje del día después decide si los gerentes lo sienten suyo o impuesto.' },
  },
];
