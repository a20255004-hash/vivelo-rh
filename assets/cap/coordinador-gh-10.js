// Coordinador/a de Gestión Humana · Capítulo 10 · «Dos semanas» · Semana 2, viernes. Final abierto: el lunes llega una carta de Ayaviri.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 27735, art. 5: la gratificación de diciembre se paga en la primera quincena de diciembre.
// - D.S. 007-2002-TR, art. 8 y D.S. 015-2026-TR: mínimo nocturno = RMV (S/ 1,230) + 35 % = S/ 1,660.50.
// - Constitución Política del Perú, art. 28: el Estado garantiza la libertad sindical y fomenta la negociación colectiva.
//   https://www.congreso.gob.pe/constitucion/
// - Ley 29733, art. 2 num. 5: la afiliación sindical es dato sensible. https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Lácteos del Altiplano · Juliaca',
  inicio: '07:40', fin: '19:00', cierreHora: '18:50',
  apertura: 'Viernes. Hace dos semanas llegaste a un área sin coordinación, con un Excel, un cuaderno y una carta sin responder. Hoy es el último día de Freddy, Mariela quiere tu balance y en Ayaviri algo se está moviendo.', boton: 'Pasar la credencial',
  kusi: 'Hoy se mira atrás… y un poquito adelante. ¡Dale!',
  lead: 'Escuchaste la devolución de Mariela, armaste tu balance, revisaste la planilla que antes nadie revisaba, despediste a Freddy y recibiste con calma una noticia que llega el lunes.',
  reflexion: '¿Te ves en este puesto? ¿Qué parte de estas dos semanas te dijo que sí, y cuál te hizo dudar?',
  siguiente: { n: 11, titulo: 'El sindicato de Ayaviri', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'balance', p: 'Balance de dos semanas', j: 'Tú · Mariela', d: 9, e: 'Hoy' },
  { id: 'planilla', p: 'Planilla y gratificación de diciembre', j: 'Estudio Huanca', d: 9, e: 'Preliminar para revisar' },
  { id: 'freddy', p: 'Último día de Freddy', j: 'Tú · Ayaviri', d: 9, e: 'Despedida a la 1' },
  { id: 'ayaviri', p: 'Planta de Ayaviri', j: 'Nueva jefatura · Yesenia', d: 9, e: 'Lunes: carta de los trabajadores' },
];

export const FUTURO = {
  balance_honesto: ['Tu balance dice lo que salió bien, lo que salió mal y lo que falta.', 'Mariela lo usará para el plan de la Semana 3.'],
  planilla_revisada: ['La planilla de diciembre salió revisada, con la gratificación a tiempo.', 'Rubén ya trabaja con la lista de verificación.'],
  freddy_despedido: ['Freddy se fue con una despedida digna y una puerta abierta.', 'Quizá vuelva a llamar.'],
  sindicato_calma: ['Recibiste la noticia del sindicato con respeto y sin buscar nombres.', 'El lunes empezarás con la carta en la mano.'],
  sindicato_alarma: ['Pediste averiguar quiénes están detrás del sindicato.', 'El lunes, eso ya se sabrá en Ayaviri.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Último día en Ayaviri', who: 'jefe' },
  ruben: { n: 'CPC Rubén Huanca', sub: 'Estudio Huanca & Asociados', c: '#5B4A8C' },
};

export const WSP = [
  { chat: 'equipo', t: '07:45', de: 'Nely', txt: 'Constancias revisadas y firmadas ✅ ¿Hoy vemos lo de mi plan a las 4?' },
  { chat: 'ruben', t: '08:30', de: 'Rubén', txt: 'Preliminar de diciembre y gratificación en la carpeta segura. Pasé la lista de verificación, pero revísela igual 🙂', si: 'estudio_acuerdo' },
  { chat: 'ruben', t: '08:30', de: 'Rubén', txt: 'Le mandé la preliminar de diciembre al correo de Mariela.', no: 'estudio_acuerdo' },
  { chat: 'freddy', t: '12:10', de: 'Freddy', txt: 'Ya entregué las llaves. Me voy tranquilo. Cuide a Edwin y a Yesenia, que son la planta.' },
  { chat: 'yesenia', t: '16:05', de: 'Yesenia', txt: 'Señorita/señor, ¿me puede llamar? Es importante. No es malo… pero es importante.' },
  { chat: 'mariela', t: '18:40', de: 'Mariela', txt: 'El lunes a las 8 en mi oficina, con la carta. Descansa este fin de semana. Te lo ganaste.' },
];

export const CORREOS = [
  { t: '07:50', de: 'Mariela Quispe', para: 'Coordinación de Gestión Humana', asunto: 'Hoy', html: '<p>A las 9 conversamos de estas dos semanas. Trae tu balance: lo bueno, lo malo y lo que falta. Sin adornos, como el primer día.</p><p>Mariela</p>' },
];

export const QUIZ = [
  { q: '¿Qué hace útil un balance de dos semanas para tu jefatura?', ops: ['Que solo cuente logros', 'Que diga qué salió bien, qué salió mal, qué falta y qué propones', 'Que sea largo', 'Que culpe al equipo anterior'], ok: 1, por: 'Un balance honesto es una herramienta para decidir, no un adorno.' },
  { q: 'Con la RMV de S/ 1,230, el mínimo para la jornada nocturna es…', ops: ['S/ 1,230', 'S/ 1,525.50', 'S/ 1,660.50', 'S/ 1,700'], ok: 2, por: 'D.S. 007-2002-TR, art. 8: RMV + 35 %.' },
  { q: 'La gratificación de diciembre debe pagarse…', ops: ['Con la planilla de diciembre', 'En la primera quincena de diciembre', 'En enero', 'Cuando lo diga el estudio'], ok: 1, por: 'Ley 27735, art. 5.' },
  { q: 'Te avisan que los trabajadores de una planta formarán un sindicato. Lo primero es…', ops: ['Averiguar quiénes son', 'Respetar el derecho, no buscar nombres y prepararte para dialogar', 'Pedir que lo piensen mejor', 'Adelantar ascensos para dividirlos'], ok: 1, por: 'La Constitución (art. 28) garantiza la libertad sindical y la afiliación sindical es dato sensible (Ley 29733, art. 2 num. 5).' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '09:00', ch: 'presencial', who: 'mariela', titulo: 'La devolución de Mariela', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Mariela', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Mariela sirve otra vez mate de coca, como el primer día. ${F.has('tablero_honesto') ? 'Tiene sobre la mesa el tablero del directorio, con el 29 % de Ayaviri subrayado.' : 'Tiene sobre la mesa tu diagnóstico del primer viernes.'}</p><p>«Antes de que me cuentes tu balance, te doy el mío. <mark class="clave">Pregúntame lo que quieras saber.</mark>»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Mariela.',
    opts: [
      { id: 'bien', label: '¿Qué hice bien en estas dos semanas?', info: '«Me dijiste las cosas como eran. Lo del turno noche, lo de Freddy, lo del 29 %. Y no me trajiste problemas solos: siempre con una propuesta.»' },
      { id: 'mejorar', label: '¿Qué debo mejorar?', info: '«Todavía cargas mucho. Te vi revisando cosas de Nely que ya estaban bien. Y a veces decides rápido cuando te presionan. Respira antes.»' },
      { id: 'equipo', label: '¿Cómo ves a Nely y a Yesenia?', info: '«Nely ya no me pregunta todo: te pregunta a ti, y luego decide. Yesenia… hace años que no la veía reírse en una reunión.»' },
      { id: 'futuro', label: '¿Qué espera de mí en la tercera semana?', info: '«Que Ayaviri deje de ser «la planta lejana». Y que me ayudes con lo que viene, porque viene algo. Lo siento en el aire.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, personas: picks.includes('equipo') ? 2 : 1 }, rel: { mariela: 1 },
      out: picks.includes('mejorar') ? 'Anotas en tu libreta: «Respirar antes de decidir». Lo subrayas.' : 'Mariela sonríe. Hay cosas que no te dijo, pero te las dirá si se las preguntas otro día.',
      kusi: ['feliz', 'Una devolución honesta es un regalo.'],
    }),
    mirada: {
      ve: 'Pedir retroalimentación a la jefatura es tan importante como darla al equipo. Las preguntas que eliges dicen mucho de ti: si solo preguntas qué hiciste bien, aprendes poco.',
      visual: { tipo: 'cambio', titulo: 'Gestión Humana en dos semanas', pares: [['Sin coordinación', 'Una matriz de responsabilidades'], ['Planilla firmada a ciegas', 'Planilla revisada'], ['Ayaviri invisible', 'Ayaviri con datos y con voz']] },
    },
  },
  {
    id: 'j2', t: '10:10', ch: 'documento', who: null, titulo: 'Tu balance', banner: 'assets/esc/logro.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Ahora te toca a ti. Abres el documento que empezaste el primer lunes, «Diagnóstico GH · v1», y lo conviertes en balance. <mark class="clave">Lo bueno, lo malo y lo que falta.</mark></p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del balance.', boton: 'Guardar el balance',
    bloques: [
      { id: 'bien', t: 'Lo que salió bien', n: 2, ops: [
        { id: 'b1', t: 'El turno noche cobra el mínimo nocturno correcto y la planilla tiene reglas con el estudio.', ok: true },
        { id: 'b2', t: 'La línea de yogurt tiene traslape y checklist firmado.', ok: true },
        { id: 'b3', t: 'Todo el mundo está contento con Gestión Humana.', ok: false, por: 'No lo sabes, y no es un resultado medible.' },
      ] },
      { id: 'mal', t: 'Lo que salió mal o tarde', n: 2, ops: [
        { id: 'm1', t: 'Llegamos tarde con Freddy: la señal estaba desde hace dos años.', ok: true },
        { id: 'm2', t: 'El procedimiento de descansos médicos se escribió recién después del tercer error.', ok: true, por: 'Reconocer tu parte da credibilidad.' },
        { id: 'm3', t: 'Nada salió mal.', ok: false, por: 'Un balance sin errores no es creíble.' },
      ] },
      { id: 'falta', t: 'Lo que falta', n: 2, ops: [
        { id: 'f1', t: 'Un solo registro de las dos plantas y la nueva inducción de Ayaviri.', ok: true },
        { id: 'f2', t: 'Revisar el cuadro de categorías completo, no solo el de Freddy.', ok: true },
        { id: 'f3', t: 'Reescribir el reglamento interno de 84 páginas este mes.', ok: false, por: 'Importa, pero no es lo que más pesa ahora.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['balance_honesto'] : [], cartera: { balance: q === 'buena' ? 'Balance honesto entregado' : 'Balance con adornos' },
        out: q === 'buena' ? 'Mariela lo lee en silencio y dice: «Esto es lo que voy a llevarle a don Alfonso. Tal cual, con lo malo incluido».' : 'El balance suena bien, pero Mariela pregunta: «¿Y lo de Freddy? ¿Y lo de Nely?».',
        pro: { ok: 'Un balance creíble reconoce errores propios y prioriza lo que falta.', risk: 'Solo logros hace que nadie crea los logros.', info: 'Guarda el balance: dentro de un mes compáralo con lo que pase.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Honesto de punta a punta!' : '¿Y lo que salió mal?'],
      };
    },
    rules: [[BP, 'Un balance útil dice lo que salió bien, lo que salió mal y lo que falta.']],
    mirada: {
      ve: 'Mirar atrás con honestidad es lo que convierte dos semanas intensas en aprendizaje. La coordinación que reconoce lo que llegó tarde gana algo que no se compra: que le crean cuando dice que algo salió bien.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes 1', 'Diagnóstico'], ['Miércoles 1', 'El nocturno mal pagado'], ['Jueves 1', 'Renuncia de Freddy'], ['Martes 2', 'El 29 %'], ['Jueves 2', 'Ayaviri en persona']] },
    },
  },
  {
    id: 'j3', t: '11:30', ch: 'documento', who: null, titulo: 'La planilla de diciembre', banner: 'assets/esc/planilla.webp', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Revisas la preliminar de diciembre con la gratificación. ${F.has('estudio_acuerdo') ? 'Esta vez llegó a la carpeta segura, con la lista de verificación de Rubén.' : 'Otra vez llegó al correo de Mariela.'}</p><p>Mismo resaltador, misma regla: <mark class="clave">nada se aprueba sin revisar</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que tiene un problema.',
    doc: { t: 'PLLA_DIC_PRELIM_LDA.xlsx', sub: 'Planilla preliminar y gratificación · dos plantas · 350 trabajadores' },
    lines: [
      { id: 'noct', t: 'Turno noche: S/ 1,660.50 de remuneración mínima.' },
      { id: 'grati', t: 'Gratificación: fecha de pago programada para el 28 de diciembre.', bad: 'ley', why: 'La gratificación de diciembre se paga en la primera quincena de diciembre (Ley 27735, art. 5).' },
      { id: 'freddy', t: 'Freddy Choque figura con remuneración completa en diciembre.', bad: 'bp', why: 'Su último día es hoy: lo que corresponde es su liquidación, no un mes completo.' },
      { id: 'edwin', t: 'Nueva jefatura de Ayaviri con la remuneración de su puesto anterior.', bad: 'bp', why: 'El cambio de categoría tiene que reflejarse desde que asume el puesto.' },
      { id: 'temp', t: 'Los tres operarios de quesería ya figuran con contrato escrito.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Corriges a Freddy y a la nueva jefatura, pero la fecha de la gratificación se te pasa.' : 'Le mandas tres observaciones a Rubén. Responde en veinte minutos: «Corregido. La gratificación sale el lunes 14».',
      flags: missLey ? [] : ['planilla_revisada'],
      cartera: { planilla: missLey ? 'Gratificación con fecha tardía' : 'Diciembre revisado: gratificación en la primera quincena' },
      pro: { ok: 'La revisión que empezaste en la semana 1 ya es costumbre.', risk: 'Pagar la gratificación fuera de plazo es incumplir la ley con 350 personas a la vez.', info: 'La liquidación de Freddy va aparte: revísala con el mismo cuidado.' },
      kusi: missLey ? ['preocupado', 'Esa fecha…'] : ['celebra', '¡El turno noche bien pagado y la grati a tiempo!'],
    }),
    rules: [[LEY, 'La gratificación de diciembre se paga en la primera quincena de diciembre (Ley 27735, art. 5).'], [LEY, 'Mínimo nocturno: RMV vigente más 35 % (D.S. 007-2002-TR, art. 8).']],
    mirada: {
      ve: 'Lo que hace dos semanas fue un hallazgo (el nocturno mal pagado), hoy es una línea que ya sale bien. Así se ve una mejora real: deja de ser noticia.',
      visual: { tipo: 'flujo', titulo: 'El cierre que ya funciona', pasos: ['Tareo en fecha', 'Preliminar segura', 'Revisión con lista', 'Correcciones', 'Pago a tiempo'], aqui: 2 },
    },
  },
  {
    id: 'j4', t: '13:00', ch: 'llamada', who: 'jefe', titulo: 'La despedida de Freddy', banner: 'assets/foto2/aplausos-verde.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Por videollamada, ves el patio de Ayaviri: una mesa con queso, pan de Pucará y una torta con «Gracias, Inge». ${F.has('datos_ganaderos_protegidos') ? 'Ayer borró el USB delante de ti; hoy te saluda igual de cálido.' : 'Freddy sonríe a la cámara.'}</p><p>Te pasan el celular: <mark class="clave">«Diga unas palabras, de parte de Juliaca»</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecerle algo concreto de estos días y decirle, delante de todos, que la empresa aprendió de su salida.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { jefe: 1 }, flags: ['freddy_despedido'],
          out: 'Dices que Freddy dejó la planta mejor de lo que la encontró y que su salida obligó a revisar cosas que debían revisarse. Hay aplausos. Freddy se limpia los ojos con la manga.',
          pro: { ok: 'Una despedida honesta cuida a quien se va y a quienes se quedan mirando.', info: 'Los que se quedan aprenden cómo trata la empresa a quien se va.' },
          kusi: ['feliz', 'Una despedida digna. ¡Qué divino!'] } },
      { id: 'b', label: 'Decir algo breve y general: «Gracias por todo y éxitos».',
        res: { q: 'aceptable', fx: { personas: 1 },
          out: 'Aplausos corteses. Freddy asiente. Se cuelga la llamada y la torta se reparte.',
          pro: { ok: 'Cumples.', risk: 'Una frase de trámite, después de doce años, suena a trámite.' },
          kusi: ['pensando', 'Corto… ¿y lo que aprendimos?'] } },
    ],
    mirada: { ve: 'La forma en que una empresa despide a alguien es un mensaje para todos los que se quedan. En Ayaviri, ese mensaje importa más que en ningún lado.' },
  },
  {
    id: 'j5', t: '16:10', ch: 'llamada', who: null, titulo: 'Lo que llega el lunes', banner: 'assets/esc/alarma.webp', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Llamas a Yesenia. Habla bajito. «Los muchachos de quesería y del turno noche se reunieron ayer después de la asamblea. ${F.has('sindicato_respetado') ? 'Dicen que usted dijo que era un derecho.' : 'Dicen que la empresa esquivó la pregunta.'} <mark class="clave">El lunes van a entregar una carta: están formando un sindicato.</mark>»</p><p>Hace una pausa. «¿Quiere que le diga quiénes son?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no necesitas nombres: es su derecho. El lunes recibirás la carta con respeto y prepararás con Mariela cómo dialogar.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 3 }, flags: ['sindicato_calma'], cartera: { ayaviri: 'Lunes: recibir la carta del sindicato y preparar el diálogo' },
          out: '«Ya», dice Yesenia, y suena aliviada. «Les voy a decir que Juliaca va a estar el lunes.» Cuelgas y abres un documento nuevo: «Semana 3».',
          pro: { ok: 'Respetas la libertad sindical y proteges un dato sensible.', info: 'Muchas de las razones ya las conoces: salidas tempranas, sueldos sin explicar, una planta que se sintió lejos.' },
          kusi: ['pensando', 'Se viene algo grande… y empezaste bien.'] } },
      { id: 'b', label: 'Pedirle la lista para saber con quiénes hablar antes del lunes y «calmar las cosas».',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5, confianza: -3 }, flags: ['sindicato_alarma'], cartera: { ayaviri: 'Lunes: sindicato… y una lista que no debía existir' },
          out: 'Yesenia te dicta seis nombres. Para el lunes, en Ayaviri ya se sabe que «Juliaca pidió los nombres».',
          pro: { ok: 'Crees que te adelantas.', risk: 'Pedir nombres de quienes se organizan se lee como represalia, aunque no lo sea, y la afiliación sindical es dato sensible.' },
          kusi: ['indignado', '¡Una lista de nombres, justo ahora!'] } },
    ],
    rules: [[LEY, 'El Estado garantiza la libertad sindical y fomenta la negociación colectiva (Constitución, art. 28).'], [LEY, 'La afiliación sindical es dato sensible (Ley 29733, art. 2 num. 5).']],
    mirada: {
      ve: 'Un sindicato no es un fracaso de Gestión Humana: es una forma legítima de que los trabajadores hablen con una sola voz. Lo que define la relación es cómo responde la empresa en las primeras horas.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pide el miedo', items: ['Saber quiénes son', 'Adelantarse', 'Calmar las cosas'] }, b: { t: 'Lo que pide la ley y la confianza', items: ['Respetar el derecho', 'No buscar nombres', 'Prepararse para dialogar'] } },
    },
  },
  {
    id: 'j6', t: '18:20', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Oficina de Gestión Humana, ya vacía', show: ['personas', 'confianza'],
    body: () => `<p>La oficina se quedó vacía. En la pared están la matriz, el calendario del cierre y el acta de los turnos. El sol se esconde detrás del cerro Huaynarroque y la temperatura cae de golpe.</p><p>Dos semanas. Dos plantas. Un equipo. <mark class="clave">¿Te ves en este puesto?</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Sí: me gusta hacer que otros puedan hacer bien su trabajo.',
        res: { q: null, fx: { confianza: 2 }, out: 'Apagas la luz pensando en Nely firmando como autora y en Yesenia con su cuaderno nuevo. Coordinar es eso.', kusi: ['celebra', '¡Coordinación de corazón!'] } },
      { id: 'b', label: 'Todavía no sé: me pesó estar entre la empresa y las personas.',
        res: { q: null, fx: { personas: 1 }, out: 'Es una respuesta honesta. Ese peso no desaparece con los años; se aprende a llevarlo. El lunes lo pondrás a prueba.', kusi: ['pensando', 'Dudar también es mirarse bien.'] } },
      { id: 'c', label: 'Prefiero un puesto más especializado: planillas, datos o selección.',
        res: { q: null, fx: { calidad: 1 }, out: 'También es valioso saberlo. Muchas personas encuentran su lugar en una sola parte de lo que hoy hiciste a la vez.', kusi: ['curioso', '¿Cuál de todas te gustó más?'] } },
    ],
    mirada: { ve: 'Coordinar Gestión Humana en regiones es ver todo a la vez y viajar entre lo que pasa en una planta y lo que se decide en otra. No es para todo el mundo, y saberlo también es aprender. El lunes, en Ayaviri, empieza otra historia.' },
  },
];
