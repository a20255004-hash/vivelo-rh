// Analista de Compensaciones y Beneficios · Capítulo 10 · «Las conversaciones» · Semana 2, viernes.
// Hilo: se entregan las cartas, Claudia recibe su respuesta y llega una pregunta: ¿te ves en este puesto?
// Final abierto: el lunes llega un requerimiento de SUNAFIL sobre igualdad salarial.
// Normas citadas:
// - Ley 30709 y D.S. 002-2018-TR; SUNAFIL fiscaliza la política salarial y su comunicación (infracción muy grave si falta).
//   https://elperuano.pe/noticia/246869-sunafil-fiscaliza-normas-sobre-politica-salarial-atiende-estos-consejos-para-evitar-riesgos
//   https://elperuano.pe/noticia/305005-igualdad-salarial-estas-son-las-reglas-que-deben-considerar-las-empresas-al-determinar-las-remuneraciones
// - Ley 29733, Ley de Protección de Datos Personales: https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011

export const CAP = {
  n: 10, titulo: 'Las conversaciones', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-laptop.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. A las 9:00 salen 1,200 cartas. Desde las 6 de la mañana, en Huachipa, Wilber entrega las primeras. Tu celular ya tiene once mensajes y todavía no terminas el café.', boton: 'Ver cómo amanece AndesTel',
  kusi: 'Hoy los números se vuelven conversaciones. ¡Y tú estás en el centro!',
  lead: 'Seguiste la entrega en campo, acompañaste la conversación de Claudia, respondiste un reclamo, dejaste lista la semana que viene, escuchaste a tu jefe y te hiciste la pregunta del puesto.',
  reflexion: 'Después de dos semanas, ¿qué te pesó más: los números o las conversaciones?',
  siguiente: { n: 11, titulo: 'La inspección', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'entrega', p: 'Entrega de las 1,200 cartas', j: 'Jefes de área', d: 0, e: 'Hoy 9:00' },
  { id: 'claudia', p: 'Conversación con Claudia', j: 'Claudia · Redes', d: 0, e: 'Hoy 11:00' },
  { id: 'reclamos', p: 'Consultas y reclamos', j: 'compensaciones@andestel.pe', d: 0, e: 'Bandeja abierta' },
  { id: 'semana3', p: 'Pendientes de la semana 3', j: 'Gustavo · Compensaciones', d: 0, e: 'Por definir' },
];

export const FUTURO = {
  pasado_a_legal: ['Llevaste la pregunta de Claudia sobre los años anteriores a Legal y Gestión Humana, con tu análisis.', 'Tendrá respuesta en la semana 3.'],
  promesa_reintegro: ['Le prometiste a Claudia algo que no podías decidir tú.', 'Esa promesa volverá en la semana 3.'],
  reclamo_atendido: ['Respondiste el reclamo del técnico con su cálculo y su porqué.', 'Wilber lo usará como ejemplo.'],
  semana3_lista: ['Dejaste lista la agenda de la semana 3: equidad de toda la planilla, plan de técnicos y regla de excepciones.', 'Llegarás al lunes con un plan.'],
  te_ves: ['Te ves en el puesto de Compensaciones.', 'La semana 3 empieza con una inspección.'],
  sunafil_lista: ['Ante el aviso de SUNAFIL, propusiste reunir el cuadro, la política, las cartas y el análisis de brecha.', 'El lunes empiezas con la carpeta en orden.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  claudia: { n: 'Claudia Puma', sub: 'Ingeniera de redes', who: 'claudia' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
};

export const WSP = [
  { chat: 'wilber', t: '07:40', de: 'Wilber', txt: 'Ya entregué 120 cartas, una por una en la caseta. Yesenia lloró. De alegría, ingeniera 😊', si: 'entrega_ordenada' },
  { chat: 'wilber', t: '07:40', de: 'Wilber', txt: 'Ya entregué 120 cartas. Algunos dicen que esperaban S/ 400 justos. Les dije que es promedio… no sé si me creyeron.', si: 'wilber_cifras' },
  { chat: 'fiorella', t: '08:10', de: 'Fiorella', txt: 'Firma renovada a las 7:35. Las cartas salen a las 9:00 como acordamos 👍', si: 'firma_ok' },
  { chat: 'fiorella', t: '08:10', de: 'Fiorella', txt: 'Vi mi firma pegada en las cartas. Hablamos el lunes, temprano.', si: 'firma_pegada' },
  { chat: 'renzo', t: '12:20', de: 'Renzo', txt: 'Lo de Claudia salió bien. Me dijo algo que no esperaba: que gracias por no haberla hecho sentir problemática. No fui yo, pero gracias.', si: 'claudia_con_jefe' },
  { chat: 'grupo', t: '17:50', de: 'Gustavo', txt: 'Cerramos la revisión. Dos semanas. Hay pollo a la brasa otra vez, esta vez para celebrar 🍗' },
];

export const CORREOS = [
  { t: '12:55', de: 'Jhon Ccahuana · Técnico de campo', para: 'compensaciones@andestel.pe', asunto: 'Mi aumento', html: '<p>Buenas tardes. El jefe dijo que eran S/ 400 y a mí me sale S/ 310. ¿Me equivocaron?</p><p>Jhon Ccahuana, técnico FTTH, San Juan de Lurigancho</p>' },
  { t: '18:05', de: 'Fiorella Gamarra', para: 'Analista de Compensaciones · cc: Gustavo Herrera', asunto: 'URGENTE · SUNAFIL', html: '<p>Acaba de llegar una notificación de SUNAFIL: inician una fiscalización sobre igualdad salarial en AndesTel. Piden, entre otros documentos, el cuadro de categorías y funciones, la política salarial y la prueba de que se comunicó.</p><p>El lunes a las 8:00 nos reunimos. Necesito tu ayuda.</p><p>F.</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador esperaba S/ 400 y recibió S/ 310 porque S/ 400 era el promedio. Lo mejor es…', ops: ['Decirle que se equivocó él', 'Explicarle su cálculo con sus criterios y reconocer que el promedio se comunicó como si fuera para todos', 'Subirle a S/ 400 para que no reclame', 'No responder'], ok: 1, por: 'La respuesta muestra su caso y reconoce el error de comunicación.' },
  { q: 'Si una trabajadora pregunta por las diferencias de años anteriores y tú no puedes decidirlo…', ops: ['Prometerle que se las pagarán', 'Decirle que no corresponde', 'Llevar la pregunta, con tu análisis, a quien puede decidir y darle una fecha de respuesta', 'Cambiar de tema'], ok: 2, por: 'No prometes lo que no te toca decidir, pero tampoco cierras la puerta.' },
  { q: 'Ante una fiscalización de SUNAFIL sobre igualdad salarial, la empresa debería poder mostrar…', ops: ['Solo las boletas', 'El cuadro de categorías y funciones, la política salarial y la prueba de que se comunicó', 'Una carta de buena fe', 'Nada, si nadie reclamó'], ok: 1, por: 'Son los documentos que la Ley 30709 y su reglamento exigen.' },
  { q: 'Lo que más hace un analista de Compensaciones en el día a día es…', ops: ['Solo Excel', 'Combinar análisis de datos, normas y conversaciones con personas', 'Aprobar aumentos', 'Hacer la planilla'], ok: 1, por: 'Los números sirven solo si alguien los entiende y confía en ellos.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:30', ch: 'llamada', who: null, titulo: 'Cómo amanece el campo', banner: 'assets/foto2/callcenter.webp', lugar: 'Tu escritorio, con el celular vibrando', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Antes de que salgan las cartas digitales, ya hay noticias de las áreas que entregaron temprano. ${F.has('entrega_ordenada') ? 'Todas siguieron la guía.' : 'No todas siguieron la misma guía.'}</p><p>Haces tres llamadas rápidas. <mark class="clave">Quieres saber qué necesita atención hoy</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Wilber Ccori · Huachipa', 'Contesta con el ruido de las camionetas saliendo', '«Los chicos están contentos, la mayoría. Dos me preguntaron por qué les tocó menos que al compañero. Les dije que escriban a Compensaciones. ¿Hice bien?»'],
      ['Supervisora de call center', 'Contesta en un pasillo', '«Le di la carta a la asesora con 0 %. Lloró, pero me pidió el plan de mejora por escrito. Quiere intentarlo. Yo no sé cómo armarlo.»'],
      ['Rocío Benavides · Selección', 'Contesta con una sonrisa en la voz', '«Te cuento algo: dos técnicos que habían renunciado la semana pasada me escribieron preguntando si pueden volver.»'],
    ],
    prompt: '¿A qué le das prioridad hoy?',
    choices: [
      { id: 'a', label: 'Decirle a Wilber que hizo bien y responder hoy a quien escriba; ayudar a la supervisora a armar el plan de mejora; y pasarle a Wilber y a Selección el caso de los que quieren volver, con las mismas reglas que para cualquier postulante.',
        res: { q: 'buena', fx: { personas: 5, calidad: 3 }, cartera: { entrega: 'Entrega en campo con seguimiento' },
          out: 'A las 10 ya tienes un borrador de plan de mejora para la asesora: tres metas, un mes, una revisión. La supervisora lo imprime.',
          pro: { ok: 'Atiendes lo que pide respuesta hoy y devuelves cada tema a quien corresponde.', info: 'Registra cuántas consultas llegan y de qué tipo: sirve para la próxima revisión.' },
          kusi: ['feliz', '¡Seguimiento fino!'] } },
      { id: 'b', label: 'Concentrarte en la reunión de Claudia a las 11: lo demás puede esperar al lunes.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 2 },
          out: 'Llegas a la reunión de Claudia preparada. La asesora del call center pasa el fin de semana sin su plan.',
          pro: { ok: 'Priorizas el caso más delicado.', risk: 'Hay respuestas pequeñas que hoy valen más que el lunes.' },
          kusi: ['pensando', 'La asesora esperaba hoy.'] } },
    ],
    rules: [[BP, 'El día de entrega, responde rápido las consultas y acompaña a los jefes con los casos difíciles.']],
    mirada: {
      ve: 'La revisión no termina cuando se aprueba ni cuando se envía la carta: termina cuando las personas entienden lo que recibieron. Ese día, tu teléfono es parte del trabajo.',
    },
  },
  {
    id: 'j2', t: '11:20', ch: 'presencial', who: 'claudia', titulo: '«¿Y los años anteriores?»', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala 9B, con la persiana levantada', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('claudia_con_jefe') ? 'Renzo habla primero, más despacio que nunca. Luego tú explicas el ajuste de equidad.' : 'Claudia recibió su carta y pidió verte después.'} Claudia lee: categoría 6, ajuste de equidad en dos tramos y el compromiso por escrito para 2028.</p><p>Respira hondo. «Gracias. Pero tengo que preguntarlo: <mark class="clave">¿y los seis años que gané menos?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que es una pregunta legítima que tú no puedes decidir, que la llevarás hoy a Legal y a Gestión Humana con tu análisis, y que tendrá una respuesta por escrito la próxima semana.',
        res: { q: 'buena', fx: { etica: 4, personas: 3, cumplimiento: 3 }, rel: { claudia: 1, fiorella: 1 }, flags: ['pasado_a_legal'], cartera: { claudia: 'Consulta sobre años anteriores elevada a Legal' },
          out: 'Claudia asiente. «Es justo. No esperaba que lo resolvieras hoy; esperaba que no me dijeras que no de frente.» Al salir, te da un abrazo corto.',
          pro: { ok: 'No prometes lo que no te toca, pero tampoco cierras una pregunta que tiene sustento.', info: 'Manda hoy mismo el análisis a Legal, con la cronología del caso.' },
          kusi: ['animo', 'Honesta y con fecha.'] } },
      { id: 'b', label: 'Decirle que sí, que le pagarán la diferencia de esos años: es lo justo.',
        res: { q: 'riesgosa', fx: { etica: 1, cumplimiento: -4, confianza: -2 }, rel: { claudia: 1 }, flags: ['promesa_reintegro'], cartera: { claudia: 'Prometido un pago que nadie aprobó' },
          out: 'Claudia sonríe. Gustavo, a tu lado, se pone tenso. Acabas de comprometer a la empresa con algo que no está aprobado ni calculado.',
          pro: { ok: 'Le reconoces el daño.', risk: 'Una promesa así, si no se cumple, destruye la confianza que construiste en dos semanas.' },
          kusi: ['preocupado', '¿Eso lo puedes decidir tú?'] } },
      { id: 'c', label: 'Decirle que la revisión corrige hacia adelante y que lo anterior no se puede revisar.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, personas: -3 }, rel: { claudia: -1 },
          out: 'Claudia guarda la carta. «Entiendo», dice, pero ya no te mira igual. Esa tarde busca en internet «SUNAFIL igualdad salarial».',
          pro: { ok: 'Eres clara.', risk: 'Cierras sin consultar una pregunta que no te corresponde responder sola.' },
          kusi: ['triste', 'Cerraste una puerta que no era tuya.'] } },
    ],
    rules: [[BP, 'Si una pregunta supera tu rol, llévala a quien decide, con tu análisis, y da una fecha de respuesta.']],
    mirada: {
      ve: 'Corregir una brecha abre una pregunta inevitable: ¿y antes? No hay una respuesta que puedas dar sola. Lo profesional es no prometer y no negar: llevarla a quien decide, con datos.',
      visual: { tipo: 'linea', titulo: 'El caso de Claudia', hitos: [['Semana 1, jueves', 'Pregunta'], ['Semana 1, viernes', 'Brecha sin criterio: 17 puntos'], ['Hoy', 'Categoría 6 y plan de equidad'], ['Semana 3', 'Respuesta sobre los años anteriores']] },
    },
  },
  {
    id: 'j3', t: '13:15', ch: 'correo', who: null, titulo: 'El reclamo de Jhon', banner: 'assets/esc/dudas.webp', lugar: 'Bandeja de compensaciones@andestel.pe', show: ['personas', 'calidad'],
    mail: { from: 'Jhon Ccahuana', to: 'compensaciones@andestel.pe', asunto: 'Mi aumento' },
    body: (n, F) => `<p>«El jefe dijo que eran S/ 400 y a mí me sale S/ 310. ¿Me equivocaron?»</p><p>${F.has('wilber_cifras') ? 'Sabes de dónde salieron los S/ 400: del promedio que le diste a Wilber.' : 'Los S/ 400 eran el promedio, y alguien lo repitió como si fuera para todos.'} Jhon está en el 0.86 de su banda y su desempeño es «cumple». <mark class="clave">Respóndele</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Explicarle su cálculo con sus dos criterios (mercado y desempeño), aclarar que S/ 400 era un promedio y ofrecerle una llamada.',
        res: { q: 'buena', fx: { personas: 4, calidad: 3 }, flags: ['reclamo_atendido'], cartera: { reclamos: 'Reclamo de Jhon respondido con su cálculo' }, responde: 'Hola Jhon: no hubo error. Los S/ 400 eran el promedio de todos los técnicos; a cada uno le toca según su posición en la banda y su desempeño. En tu caso, el ajuste de mercado es de S/ 250 y el de desempeño de S/ 60: total S/ 310. El próximo año continúa el plan para acercarlos al mercado. Si quieres, te llamo hoy y lo vemos juntos.',
          out: 'Jhon responde: «Ah, ya entendí. Gracias por explicarme, nadie me había explicado nunca mi sueldo».', kusi: ['celebra', '¡Un número que ahora tiene sentido!'] } },
      { id: 'b', label: 'Responderle que su incremento es correcto según la política.',
        res: { q: 'aceptable', fx: { personas: -1 }, responde: 'Estimado Jhon: su incremento es correcto según la política salarial vigente. Saludos.',
          out: 'Jhon no responde. El lunes, otros tres técnicos escriben lo mismo.', kusi: ['pensando', '¿Y el porqué?'] } },
    ],
    mirada: { ve: 'Un reclamo bien respondido es una explicación que nadie había dado. Muchas veces la gente no reclama el monto, sino no entender de dónde sale.' },
  },
  {
    id: 'j4', t: '15:00', ch: 'documento', who: 'gustavo', titulo: 'Lo que queda para el lunes', banner: 'assets/esc/meta.webp', lugar: 'Pizarra de Compensaciones', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Gustavo borra la pizarra de la semana y escribe arriba: «SEMANA 3». ${F.has('respuesta_honesta') ? 'Debajo anota: «Revisión de equidad de toda la planilla: 30 días».' : ''}</p><p>«Elige <mark class="clave">las tres prioridades</mark> con las que empezamos el lunes.»</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres prioridades para la semana 3.', boton: 'Escribirlas en la pizarra', resumen: 'Priorizaste',
    cols: ['Prioridad', 'Por qué'],
    rows: [
      { id: 'eq', cells: ['Revisión de equidad de las 74 categorías', 'Lo que no pudimos asegurar en el comité'] },
      { id: 'tec', cells: ['Plan a dos años para técnicos, por escrito', 'Para que no dependa de quién esté en el puesto'] },
      { id: 'carp', cells: ['Carpeta de evidencias: cuadro, política, comunicación y análisis', 'Si alguien nos pide pruebas, que estén juntas'] },
      { id: 'vac', cells: ['Descansar hasta que haya otro problema', 'Fue una semana pesada'] },
      { id: 'nuevo', cells: ['Rediseñar el logo del área', 'Se ve viejo'] },
    ],
    score: { eq: 3, tec: 3, carp: 3, vac: -2, nuevo: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: picks.includes('carp') ? 3 : 0 },
        flags: q === 'buena' ? ['semana3_lista'] : [],
        cartera: { semana3: q === 'buena' ? 'Equidad total, plan de técnicos y carpeta de evidencias' : 'Agenda incompleta' },
        out: q === 'buena' ? 'Gustavo subraya «carpeta de evidencias». «Nunca se sabe cuándo nos la van a pedir.» No sabe cuánta razón tiene.' : 'Gustavo te mira: «Descansar sí, pero el lunes alguien va a preguntar por lo que dejamos pendiente».',
        pro: { ok: 'Terminas la revisión dejando escrito lo que falta.', info: 'Pon fecha a cada prioridad.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lunes con plan!' : 'Algo queda colgando.'],
      };
    },
    mirada: {
      ve: 'Una revisión salarial nunca termina del todo: deja brechas por cerrar, planes por cumplir y preguntas por responder. Dejarlo escrito es lo que convierte una buena revisión en un buen sistema.',
    },
  },
  {
    id: 'j5', t: '16:30', ch: 'presencial', who: 'gustavo', titulo: 'El balance de Gustavo', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de Gustavo, con la puerta abierta', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Gustavo cierra la laptop por primera vez en dos semanas. «Siéntate. Pregúntame lo que quieras de estas dos semanas. Te contesto con honestidad.»</p><p>${F.has('respuesta_honesta') && F.has('cartas_revisadas') ? 'Se le nota contento.' : 'Se le nota cansado, pero tranquilo.'} <mark class="clave">Tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: '¿Qué le preguntas a Gustavo?',
    opts: [
      { id: 'bien', label: '¿Qué hice bien?', info: '«Preguntaste antes de calcular. Eso no se enseña fácil. Cuando dudaste, lo dijiste. Y trataste a Claudia y a Yesenia con el mismo cuidado que a la gerente general.»' },
      { id: 'mejorar', label: '¿Qué debo mejorar?', info: '«A veces quieres resolver todo el mismo día. En compensaciones hay cosas que se resuelven en un año. Aprende a dejar escrito el plan y a soltar.»' },
      { id: 'el', label: '¿Por qué te quedaste tantos años en esto?', info: '«Porque cada año alguien como Claudia pregunta, y cada año podemos responder un poco mejor. No es glamoroso. Pero es justo.»' },
      { id: 'futuro', label: '¿Qué viene ahora?', info: '«Ahora viene lo aburrido: documentar. Y lo aburrido es lo que te salva cuando llega una inspección.» Se ríe. No sabe lo que llega en dos horas.' },
    ],
    res: picks => ({
      q: null,
      fx: { confianza: 3, personas: 2 },
      rel: { gustavo: 1 },
      out: picks.includes('mejorar') ? 'Anotas en tu cuaderno: «dejar escrito el plan y soltar». Lo subrayas.' : 'Sales de la oficina con la sensación de que alguien vio tu trabajo de verdad.',
      kusi: ['feliz', 'Un buen jefe también es un buen espejo.'],
    }),
    mirada: {
      ve: 'Pedir retroalimentación al cerrar un ciclo es una costumbre que separa a quien solo trabaja de quien crece. Lo que Gustavo ve en ti también te dice si este puesto es para ti.',
    },
  },
  {
    id: 'j6', t: '17:30', ch: 'documento', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'Tu escritorio, con el cuaderno cuadriculado abierto', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Pasas las páginas de tu cuaderno: el post-it de «abril → enero», «mismo puesto» subrayado dos veces, la tabla de criterios de Claudia, el cálculo de Jhon.</p><p>${F.has('analistas_todas') ? 'Once analistas tendrán su brecha corregida.' : 'Claudia tendrá su brecha corregida.'} ${F.has('entrega_ordenada') ? 'Yesenia lloró de alegría en una caseta de Huachipa.' : ''} <mark class="clave">¿Te ves en este puesto?</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Sí: me gusta que detrás de cada número haya una conversación y que mi trabajo pueda corregir una injusticia.',
        res: { q: null, fx: { confianza: 3 }, flags: ['te_ves'],
          out: 'Cierras el cuaderno. Afuera, San Isidro se llena de oficinistas que salen temprano por ser viernes.', kusi: ['celebra', '¡Qué bacán! Compensaciones te queda.'] } },
      { id: 'b', label: 'Sí, pero en la parte de análisis: las conversaciones difíciles me cansan mucho.',
        res: { q: null, fx: { confianza: 1 },
          out: 'Es una respuesta honesta. Hay puestos de Total Rewards más analíticos, como el diseño de bandas o las encuestas.', kusi: ['pensando', 'Conocerte también es aprender.'] } },
      { id: 'c', label: 'No estoy segura: me gustó, pero quiero probar otras áreas de RR.HH. antes de decidir.',
        res: { q: null, fx: { confianza: 1 },
          out: 'Dos semanas son poco para decidir una carrera. Lo que aprendiste de criterios y equidad te servirá en cualquier área.', kusi: ['animo', '¡Dale! Sigue explorando.'] } },
    ],
    mirada: {
      ve: 'Compensaciones es Excel, ley y personas al mismo tiempo. A quien le gusta este puesto suele gustarle encontrar el porqué de un número y explicarlo a quien lo vive.',
      visual: { tipo: 'mensaje', titulo: 'Dos semanas en Compensaciones', txt: 'Un presupuesto de 4 %, una encuesta, un cuadro de 74 puestos, una brecha de 18 % y 1,200 cartas. Y en cada una, una persona.' },
    },
  },
  {
    id: 'j7', t: '18:15', ch: 'whatsapp', who: 'fiorella', titulo: 'Un correo a las 6 de la tarde', banner: 'assets/esc/alarma.webp', lugar: 'Ascensor del piso 9, bajando', show: ['cumplimiento', 'confianza'],
    body: (n, F) => `<p>Ya tenías la mochila puesta cuando llega el correo de Fiorella: <mark class="clave">SUNAFIL inicia una fiscalización sobre igualdad salarial en AndesTel</mark>. Piden el cuadro de categorías, la política salarial y la prueba de que se comunicó.</p><p>${F.has('semana3_lista') ? 'La «carpeta de evidencias» de la pizarra acaba de volverse urgente.' : 'Piensas en todo lo que todavía no está ordenado.'} Fiorella pide respuesta por WhatsApp.</p>`,
    type: 'compose', enviaA: 'fiorella', para: 'Para: Fiorella Gamarra', boton: 'Enviar el WhatsApp',
    prompt: 'Elige una frase de cada parte.',
    slots: [
      { id: 'calma', t: 'Respuesta', ops: [
        { id: 'c1', t: 'Recibido. Lunes 8:00 estoy ahí.', ok: true, por: 'Corta, clara y con hora.' },
        { id: 'c2', t: '¡¿Qué?! ¿Nos van a multar?', ok: false, por: 'Contagia pánico a quien necesita calma.' },
      ] },
      { id: 'carpeta', t: 'Qué llevas', ops: [
        { id: 'k1', t: 'Llevo la carpeta: cuadro actualizado, política, cartas con la política adjunta y el análisis de brecha de redes.', ok: true, por: 'Los documentos que piden, ya reunidos.' },
        { id: 'k2', t: 'Veo qué encuentro el lunes.', ok: false, por: 'Llegarías sin preparar nada.' },
      ] },
      { id: 'honesto', t: 'Lo que falta', ops: [
        { id: 'h1', t: 'Lo que falta es la revisión de las otras categorías; propongo priorizarla esa misma semana.', ok: true, por: 'Dices lo que falta antes de que lo encuentre el inspector.' },
        { id: 'h2', t: 'Tranquila, está todo perfecto.', ok: false, por: 'No lo está, y lo sabes.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'k1', 'h1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 4 : 0 }, rel: { fiorella: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['sunafil_lista'] : [],
        out: q === 'buena' ? 'Fiorella responde: «Gracias. Contigo al lado, esto se puede». Sales a Camino Real. La garúa empieza otra vez. El lunes empieza la semana 3.' : 'Fiorella responde: «Ok. Lunes 8:00». Te vas a casa con el estómago apretado.',
        pro: { ok: 'Respondes con calma, con lo que tienes y con lo que falta.', info: 'Este fin de semana, descansa. El lunes vas a necesitar la cabeza fresca.' },
        kusi: [q === 'buena' ? 'animo' : 'preocupado', q === 'buena' ? '¡Semana 3, allá vamos!' : 'El lunes será intenso.'],
      };
    },
    rules: [[LEY, 'Ley 30709 y D.S. 002-2018-TR: no contar con política salarial o no comunicarla es infracción muy grave; SUNAFIL la fiscaliza.']],
    mirada: {
      ve: 'Todo lo que hiciste en dos semanas (el cuadro, la política, las cartas, el análisis) es también la evidencia de que la empresa cumple. El lunes empieza otra historia: demostrarlo.',
      normas: [{ ley: 'Ley 30709 y D.S. 002-2018-TR', dice: 'El empleador debe contar con un cuadro de categorías y funciones y una política salarial, y comunicarla a sus trabajadores.', practica: 'La carpeta de evidencias reúne justamente esos documentos.' }],
    },
  },
];
