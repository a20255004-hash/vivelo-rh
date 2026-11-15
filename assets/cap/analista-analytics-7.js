// Analista de People Analytics · Capítulo 7 · «La otra versión» · Semana 2, martes.
// Normas citadas (texto oficial en docs/normas/txt):
// - Constitución Política del Perú, art. 25: jornada máxima de 8 horas diarias o 48 semanales; derecho a descanso semanal remunerado.
// - D.S. 007-2002-TR (TUO de la Ley de Jornada de Trabajo): art. 1 (jornada máxima), art. 6 (el empleador puede modificar el horario
//   sin alterar el número de horas), art. 7 (refrigerio no menor de 45 minutos en horario corrido).
// - D.S. 003-97-TR, art. 30 e) (faltamiento grave de palabra como acto de hostilidad).
// - Ley 29733, art. 17 (confidencialidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf

export const CAP = {
  n: 7, titulo: 'La otra versión', dia: 'Semana 2, martes', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'HogarPlus · Tienda Santa Anita',
  inicio: '08:30', fin: '19:00', cierreHora: '18:40',
  apertura: 'Martes. Dejas la oficina y cruzas Lima hasta la tienda de Santa Anita, en la Carretera Central. El supervisor que aparece en tus números te espera.', boton: 'Entrar a la tienda',
  kusi: 'Detrás de cada punto del gráfico hay una persona. Hoy la conoces. ¡Oídos abiertos!',
  lead: 'Escuchaste a Renzo sin juzgarlo, encontraste en sus horarios lo que el número no decía, cuidaste a un vendedor joven y actualizaste tu hallazgo con lo que viste.',
  reflexion: '¿Qué parte de tu análisis cambió después de escuchar a la persona que aparecía en él?',
  siguiente: { n: 8, titulo: 'La presentación', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'visita', p: 'Visita a Santa Anita', j: 'Lucía · HRBP', d: 6, e: 'Hoy 10:00' },
  { id: 'horarios', p: 'Horarios del equipo de Renzo', j: 'Renzo', d: 6, e: 'Por revisar' },
  { id: 'hallazgo', p: 'Hallazgo de supervisores', j: 'Tú', d: 6, e: 'Por contrastar' },
  { id: 'comite', p: 'Comité de gerencia', j: 'Mónica', d: 6, e: 'Mañana 10:00' },
];

export const FUTURO = {
  renzo_escuchado: ['Renzo te contó lo que nadie le había preguntado.', 'Sus correos pidiendo capacitación irán al comité.'],
  horarios_vistos: ['Viste en los horarios descansos y refrigerios que no se respetan.', 'Se suma al plan de acción.'],
  brayan_cuidado: ['Brayan aceptó hablar con Lucía, a su ritmo.', 'Lucía lo acompañará.'],
  brayan_expuesto: ['Le contaste a Renzo lo que dijo Brayan.', 'Brayan renunciará el viernes.'],
  hallazgo_ampliado: ['Tu hallazgo ahora incluye metas, dotación y pedidos de formación ignorados.', 'La presentación contará la historia completa.'],
  hallazgo_impresion: ['Agregaste al análisis tu impresión personal de Renzo.', 'Alguien en el comité lo notará.'],
  monica_sin_cabeza: ['Le dijiste a Mónica que sacar a Renzo no resuelve el patrón.', 'Llegará al comité sin buscar un culpable.'],
  monica_cabeza: ['Mónica cree que el problema se arregla cambiando a Renzo.', 'Lo propondrá en el comité.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
  renzo: { n: 'Renzo Villanueva', sub: 'Supervisor de ventas · Santa Anita', c: '#B5651D' },
};

export const WSP = [
  { chat: 'lucia', t: '08:15', de: 'Lucía', txt: 'Ya estoy en la puerta de la tienda. Trae casaca, que aquí la garúa es fea 🥶' },
  { chat: 'renzo', t: '09:20', de: 'Renzo', txt: 'Estoy en el patio constructor, bajando un pedido. Ya voy.', si: 'visita_escucha' },
  { chat: 'renzo', t: '09:20', de: 'Renzo', txt: 'Ya llegaron los auditores. Ahí voy.', si: 'visita_auditoria' },
  { chat: 'lucia', t: '14:10', de: 'Lucía', txt: 'Hablé con Brayan. Está más tranquilo. Lo voy a acompañar yo, sin apurarlo.', si: 'brayan_cuidado' },
  { chat: 'monica', t: '17:30', de: 'Mónica', txt: 'Entonces, ¿qué propones? Mañana no quiero llegar solo con problemas.', si: 'monica_sin_cabeza' },
  { chat: 'renzo', t: '18:30', de: 'Renzo', txt: 'Gracias por venir. Es la primera vez que alguien de la oficina me pregunta cómo estoy.', si: 'renzo_escuchado' },
];

export const CORREOS = [
  { t: '12:40', de: 'Renzo Villanueva', para: 'Analista de People Analytics', asunto: 'RV: Solicitud de capacitación para supervisores nuevos', html: '<p>Como le conté, le reenvío los dos correos que mandé en junio y en agosto pidiendo un curso de manejo de equipos. Nunca tuve respuesta.</p><p>Renzo</p><hr><p><i>Junio:</i> «Buenas tardes, soy supervisor nuevo en Santa Anita. Quisiera saber si hay algún curso para aprender a manejar al equipo…»</p>' },
];

export const QUIZ = [
  { q: 'Al visitar a un supervisor que aparece en tus números, lo mejor es…', ops: ['Mostrarle el ranking', 'Preguntarle cómo ve a su equipo y qué le falta', 'Pedirle que se defienda', 'No avisarle a qué vas'], ok: 1, por: 'Escuchar primero da información que los datos no tienen.' },
  { q: 'Según la Constitución, la jornada ordinaria máxima es…', ops: ['10 horas diarias', '8 horas diarias o 48 semanales', '12 horas los fines de semana', 'La que fije el supervisor'], ok: 1, por: 'Constitución, art. 25; D.S. 007-2002-TR, art. 1.' },
  { q: 'En horario corrido, el refrigerio no puede ser menor de…', ops: ['15 minutos', '30 minutos', '45 minutos', 'Una hora'], ok: 2, por: 'D.S. 007-2002-TR, art. 7.' },
  { q: 'Un vendedor te cuenta algo grave y te pide que no se lo digas a su supervisor. Lo mejor es…', ops: ['Contárselo al supervisor para que cambie', 'Respetar su pedido y ofrecerle el canal de RR.HH., con su acuerdo', 'Ignorarlo', 'Publicarlo en el informe'], ok: 1, por: 'Lo que te confían se cuida; el canal adecuado se ofrece, no se impone.' },
  { q: 'Después de la visita, ¿qué agregas a tu análisis?', ops: ['Tu impresión de si Renzo es buena persona', 'Hechos verificables: metas, dotación, pedidos de capacitación sin respuesta', 'Rumores de la tienda', 'Nada: los datos ya estaban'], ok: 1, por: 'El terreno aporta contexto verificable, no opiniones.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '09:40', ch: 'presencial', who: null, titulo: 'Renzo', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Tienda Santa Anita · oficina de supervisión', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>Renzo tiene 29 años, casaca naranja con polvo de cemento y un celular que vibra sin parar. Hace cinco meses era el tercer mejor vendedor del país. ${F.has('visita_auditoria') ? 'Se sienta con los brazos cruzados: «Pregunten lo que quieran».' : 'Les sirve café en vasitos de plástico.'}</p><p>Lucía te mira: <mark class="clave">tú preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'asc', label: '¿Cómo fue tu paso de vendedor a supervisor?', info: '«Un lunes me dijeron "desde hoy eres supervisor". Me dieron las llaves y el Excel de horarios. Nada más. Mandé dos correos pidiendo un curso. Nadie respondió. Se los paso.»' },
      { id: 'meta', label: '¿Qué te piden y con qué gente?', info: '«La meta subió 20 % este año y la dotación bajó de 16 a 13. Si alguien falta, cubro yo o muevo a otro de turno. A veces a las 11 de la noche, sí. No me siento orgulloso.»' },
      { id: 'grito', label: 'Algunas personas hablan de gritos. ¿Qué pasa ahí?', info: 'Renzo se queda callado. «A mí me gritaron toda la vida en tienda y pensé que así se manda. Sé que no está bien. A veces llego a mi casa y mi hija me pregunta por qué estoy así.»' },
      { id: 'nec', label: '¿Qué necesitarías para que tu equipo se quede?', info: '«Horarios que lleguen con una semana de anticipación, que me completen la gente y que alguien me enseñe a dar feedback sin gritar. No pido más.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, calidad: 2, confianza: 2 }, flags: picks.includes('asc') || picks.includes('nec') || picks.includes('grito') ? ['renzo_escuchado'] : [],
      cartera: { visita: 'Renzo escuchado: ascenso sin formación, metas y dotación' },
      out: 'Renzo te pasa su laptop con el Excel de horarios: «Mírenlo ustedes. Yo ya no sé cómo arreglarlo».',
      kusi: ['pensando', 'El «villano» también pidió ayuda.'],
    }),
    mirada: {
      ve: 'Renzo no niega los gritos ni los cambios de turno: los explica. Explicar no es justificar, pero sí muestra dónde actuar: a nadie le enseñaron a ser jefe, la meta subió y la gente bajó. El patrón que viste en los datos tiene aquí su mecanismo.',
      visual: { tipo: 'flujo', titulo: 'Cómo se fabrica un equipo que rota', pasos: ['Ascenso sin formación', 'Meta +20 %', 'Dotación de 16 a 13', 'Turnos cambiados de noche', 'Gritos', 'Renuncias'] },
    },
  },
  {
    id: 'g2', t: '10:40', ch: 'documento', who: null, titulo: 'El Excel de horarios', banner: 'assets/foto/revisa.webp', show: ['cumplimiento', 'calidad', 'personas'],
    body: () => `<p>El archivo se llama <i>HORARIOS STA ANITA nuevo nuevo.xlsx</i>. Cada semana es una pestaña; cada cambio, una celda pintada de amarillo.</p><p>Lo revisas con Lucía. <mark class="clave">¿Qué no se puede hacer así?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o es mala práctica en los horarios.',
    doc: { t: 'Horarios · tienda Santa Anita', sub: 'Semanas 36 a 48 · equipo de 13 vendedores' },
    lines: [
      { id: 'desc', t: 'Maritza trabajó tres semanas seguidas sin un día de descanso.', bad: LEY, why: 'Los trabajadores tienen derecho a descanso semanal remunerado (Constitución, art. 25).' },
      { id: 'refri', t: 'En cierre de campaña, «refrigerio de 20 minutos y regresan».', bad: LEY, why: 'En horario corrido, el refrigerio no puede ser menor de 45 minutos (D.S. 007-2002-TR, art. 7).' },
      { id: 'jorn', t: 'Brayan figura con turnos de 7 a. m. a 7 p. m. cuatro días seguidos.', bad: LEY, why: 'Aun descontando el refrigerio, son más de 11 horas diarias: supera la jornada ordinaria máxima de 8 horas, y lo que exceda es sobretiempo, con sus propias reglas (D.S. 007-2002-TR, art. 1).' },
      { id: 'wsp', t: 'Los cambios se avisan por WhatsApp, muchas veces después de las 10 p. m.', bad: BP, why: 'El empleador puede modificar el horario, pero avisar de noche para el día siguiente hace imposible organizar la vida, el estudio o el cuidado de los hijos.' },
      { id: 'rot', t: 'Los domingos se rotan entre todo el equipo, salvo dos personas que «siempre pueden».', bad: BP, why: 'Las dos personas «que siempre pueden» suelen ser las que no se atreven a decir que no.' },
      { id: 'pub', t: 'El horario de cada semana se publica en el panel del comedor.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Ves los cambios de noche, pero se te pasan problemas legales que Lucía sí marca.' : `Marcan ${hitsLey} incumplimientos legales. Lucía resopla: «Esto no es solo Renzo: el Excel lo armó así su antecesor y nadie lo revisó nunca».`,
      flags: missLey ? [] : ['horarios_vistos'],
      fx: { cumplimiento: missLey ? 0 : 5, calidad: missLey ? 1 : 3 },
      cartera: { horarios: missLey ? 'Revisados a medias' : 'Descansos, refrigerio y jornada por corregir' },
      pro: { ok: 'Los horarios son un dato de rotación y también un tema de cumplimiento.', risk: 'Un análisis que no mira horarios explica la mitad de la historia.', info: 'Avisa a Lucía para que lo corrija con Renzo; no es tu papel sancionar.' },
      kusi: missLey ? ['pensando', 'Hay más debajo de lo amarillo…'] : ['sorpresa', '¡El Excel también cuenta la historia!'],
    }),
    rules: [[LEY, 'Jornada máxima de 8 horas diarias o 48 semanales y derecho a descanso semanal remunerado (Constitución, art. 25).'], [LEY, 'El empleador puede modificar el horario sin alterar el número de horas trabajadas (D.S. 007-2002-TR, art. 6).'], [LEY, 'En horario corrido, el refrigerio no es menor de 45 minutos (D.S. 007-2002-TR, art. 7).']],
    mirada: {
      ve: 'Las bases de la oficina dicen quién se fue; el Excel de horarios dice cómo se vivía antes de irse. Muchos de los «motivos personales» estaban aquí: el domingo que nunca llegaba, el refrigerio de 20 minutos, el turno cambiado a las once de la noche.',
      visual: { tipo: 'cambio', titulo: 'Del Excel amarillo a un horario que se respeta', pares: [['Tres semanas sin descanso', 'Un día de descanso cada semana'], ['Refrigerio de 20 minutos', 'Al menos 45 minutos'], ['Cambio por WhatsApp a las 11 p. m.', 'Horario publicado con una semana de anticipación']] },
      normas: [{ ley: 'D.S. 007-2002-TR, arts. 1, 6 y 7', dice: 'La jornada ordinaria es de 8 horas diarias o 48 semanales como máximo; el empleador puede modificar el horario sin alterar el número de horas; el refrigerio en horario corrido no puede ser inferior a 45 minutos.', practica: 'Cambiar un horario es posible; hacerlo de noche, sin descanso y recortando el refrigerio, no.' }],
    },
  },
  {
    id: 'g3', t: '11:45', ch: 'presencial', who: null, titulo: 'Brayan, en el comedor', banner: 'assets/foto/cafe.webp', lugar: 'Tienda Santa Anita · comedor', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Mientras Lucía habla con Renzo, tomas agua en el comedor. Brayan, 19 años, en su segundo mes, come un tupper de arroz con huevo frito. Te reconoce la credencial de la oficina.</p><p>En voz baja: «Hoy me gritó delante de una clienta porque me equivoqué de látex. <mark class="clave">Pero no le diga nada, por favor</mark>. Necesito este trabajo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle la confianza, no decirle nada a Renzo, y preguntarle si aceptaría hablar con Lucía, que puede acompañarlo sin exponerlo.',
        res: { q: 'buena', fx: { personas: 5, etica: 4 }, flags: ['brayan_cuidado'],
          out: 'Brayan duda, mira la puerta, y al final dice que sí: «Pero que sea afuera de la tienda». Le pasas el número de Lucía.',
          pro: { ok: 'Respetas lo que te confió y le ofreces un camino, sin imponérselo.', risk: 'Puede decidir no hacer nada. Es su decisión.', info: 'Si hubiera un riesgo grave e inmediato, RR.HH. tiene que actuar igual: díselo con honestidad.' },
          kusi: ['feliz', 'Lo cuidaste y le diste una salida.'] } },
      { id: 'b', label: 'Decírselo a Renzo ahora mismo, sin dar el nombre de Brayan: así se corrige de inmediato.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -3 }, flags: ['brayan_expuesto'],
          out: 'Renzo no necesita el nombre: solo Brayan se equivocó de látex esta mañana. A la salida, Brayan te mira desde la caja y baja la vista.',
          pro: { ok: 'Querías frenar el maltrato.', risk: 'En un equipo de 13, «sin nombre» no protege. Rompiste lo que te pidió.' },
          kusi: ['triste', 'Él te pidió una sola cosa.'] } },
      { id: 'c', label: 'Anotarlo como un dato más para tu análisis y no hacer nada aparte: tu trabajo es el patrón, no los casos.',
        res: { q: 'aceptable', fx: { personas: -2, calidad: 1 },
          out: 'Lo anotas en tu cuaderno. Brayan vuelve al pasillo de pinturas. Nadie más sabe que hoy lo pasó mal.',
          pro: { ok: 'No lo expones.', risk: 'Tu análisis no es el único lugar donde puede vivir lo que te contó. Alguien de RR.HH. debería poder acompañarlo.' },
          kusi: ['pensando', 'El patrón importa… y él también.'] } },
    ],
    rules: [[LEY, 'El faltamiento grave de palabra al trabajador es acto de hostilidad (D.S. 003-97-TR, art. 30, e).'], [LEY, 'Quien conoce datos de otras personas en su trabajo debe guardar confidencialidad (Ley 29733, art. 17).']],
    mirada: {
      ve: 'Lo que Brayan te cuenta no es un dato: es una persona que está pasándola mal hoy. Tu análisis se ocupa del patrón, pero tú también eres parte de RR.HH. Lo que corresponde es cuidar su confianza y ponerlo en contacto con quien puede acompañarlo.',
      visual: { tipo: 'balanza', a: { t: 'Hablar con Renzo ya', items: ['Se corrige rápido', 'Brayan queda expuesto'] }, b: { t: 'Canal con su acuerdo', items: ['Brayan decide', 'Lucía acompaña', 'Renzo recibe formación'] } },
    },
  },
  {
    id: 'g4', t: '13:30', ch: 'documento', who: null, titulo: 'Lo que vuelve contigo', banner: 'assets/esc/piensa.webp', lugar: 'Corredor de la Carretera Central', show: ['calidad', 'etica'],
    body: () => `<p>Vuelves en el corredor rojo, con el cuaderno en las rodillas y un pan con chicharrón a medio comer. Tienes muchas notas, pero solo <mark class="clave">tres</mark> entrarán al análisis de mañana.</p>`,
    type: 'pick', n: 3, prompt: 'Elige qué agregas al análisis.', boton: 'Agregar estas', resumen: 'Agregaste',
    cols: ['Nota', 'De dónde sale'],
    rows: [
      { id: 'mail', cells: ['Dos pedidos de capacitación de Renzo sin respuesta (junio y agosto)', 'Correos reenviados'] },
      { id: 'dot', cells: ['La dotación bajó de 16 a 13 mientras la meta subía 20 %', 'Planilla y metas comerciales'] },
      { id: 'hor', cells: ['Descansos, refrigerios y jornadas que no se respetan', 'Excel de horarios'] },
      { id: 'buena', cells: ['«Renzo parece buena persona, no creo que sea su culpa»', 'Tu impresión'] },
      { id: 'rumor', cells: ['«Dicen que el jefe de tienda tiene favoritos»', 'Comentario en el comedor'] },
      { id: 'hija', cells: ['Renzo tiene una hija y está estresado', 'Conversación'] },
    ],
    score: { mail: 3, dot: 3, hor: 3, buena: -3, rumor: -2, hija: -3 },
    res: (picks, sc) => {
      const op = picks.includes('buena') || picks.includes('rumor') || picks.includes('hija');
      const q = sc >= 9 ? 'buena' : op ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : op ? -3 : 1, etica: picks.includes('hija') ? -3 : 1 },
        flags: [q === 'buena' ? 'hallazgo_ampliado' : op ? 'hallazgo_impresion' : 'hallazgo_ampliado'], cartera: { hallazgo: q === 'buena' ? 'Patrón + mecanismo: formación, metas, dotación, horarios' : 'Hallazgo con notas discutibles' },
        out: q === 'buena' ? 'Tu hallazgo ya no es «supervisores nuevos». Es: «ascendemos sin formar, subimos metas, bajamos dotación y nadie revisa los horarios».' : op ? 'Diego lee tus notas en la noche: «Tu impresión de Renzo y su vida familiar no van en un análisis. Saca eso».' : 'Agregas contexto útil, aunque te falta una pieza verificable.',
        pro: { ok: 'Del terreno traes hechos que se pueden comprobar.', risk: 'Opiniones, rumores o datos de la vida privada debilitan el análisis y exponen a la persona.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ya sabes por qué pasa!' : 'Hechos, no impresiones.'],
      };
    },
    mirada: {
      ve: 'La visita no cambió el número: cambió su explicación. Lo que trajiste son hechos verificables que muestran que el problema lo fabrica la organización. Lo que sentiste por Renzo es real, pero no es evidencia.',
      visual: { tipo: 'matriz', x: 'Verificable', y: 'Relevante', cuadrantes: ['Al análisis', 'Contexto', 'Fuera', 'Verificar primero'], items: [['Correos de capacitación', .9, .9], ['Dotación 16→13', .95, .85], ['Horarios', .85, .8], ['«Buena persona»', .1, .4], ['Rumor de favoritos', .15, .55], ['Su hija', .3, .1]] },
    },
  },
  {
    id: 'g5', t: '15:10', ch: 'llamada', who: 'gerente', titulo: '«¿Lo saco?»', banner: 'assets/foto/llamada.webp', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>${F.has('ranking_publico') ? 'Mónica vio el ranking que circuló ayer.' : 'Mónica supo por Lucía que fueron a Santa Anita.'} Te llama mientras esperas el ascensor.</p><p>«Dime la verdad. ¿Es Renzo? Si es él, <mark class="clave">mañana lo regreso a vendedor</mark> y se acabó el problema.»</p>`,
    type: 'calls',
    calls: [['Mónica Larrea · Gerenta de Tiendas', 'Contesta: quiere una respuesta corta', '¿Sí o no? Tengo cinco minutos.']],
    prompt: '¿Qué le respondes?',
    choices: [
      { id: 'a', label: 'Que regresarlo a vendedor no resuelve el patrón: seis supervisores más están igual. Que mañana le muestras qué cambiar para todos, empezando por la formación que Renzo pidió.',
        res: { q: 'buena', fx: { confianza: 3, etica: 4, personas: 3 }, rel: { gerente: 1 }, flags: ['monica_sin_cabeza'],
          out: 'Mónica suspira. «¿Él pidió capacitación? ¿Y a quién?» Le dices: a su área, dos veces. Se queda callada.',
          pro: { ok: 'Le das una salida que resuelve más que un cambio de persona.', risk: 'Que Renzo pidió ayuda y no la recibió incomoda a la gerencia. Dilo sin acusar.' },
          kusi: ['celebra', 'Del culpable al sistema. ¡Así!'] } },
      { id: 'b', label: 'Que sí, que el equipo de Renzo es el que más rota y que la decisión es suya.',
        res: { q: 'riesgosa', fx: { confianza: 2, etica: -4, personas: -4 }, flags: ['monica_cabeza'],
          out: '«Listo. Mañana lo anuncio.» Cuelga. Tu análisis acaba de convertirse en la razón para degradar a alguien que nadie formó.',
          pro: { ok: 'Respuesta corta, como pidió.', risk: 'El problema seguirá en los otros seis equipos. Y Renzo pagará por un sistema que lo puso ahí sin ayuda.' },
          kusi: ['triste', 'Y los otros seis…'] } },
    ],
    mirada: { ve: 'Cambiar a una persona es la solución que más se ve y la que menos cambia. Si el patrón es «ascendemos sin formar», el siguiente supervisor nuevo de Santa Anita repetirá la historia. El trabajo del analista es que la decisión apunte a la causa.' },
  },
  {
    id: 'g6', t: '16:30', ch: 'whatsapp', who: null, titulo: 'Actualizar a Diego', banner: 'assets/esc/cerebro.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Diego está terminando las diapositivas. Le escribes lo que cambia después de la visita. <mark class="clave">Mañana es el comité</mark>.</p>`,
    type: 'compose', enviaA: 'diego', para: 'Para: Diego Paz', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cambia', t: 'Qué cambia', ops: [
        { id: 'c1', t: 'El patrón se confirma y ahora sabemos por qué: ascenso sin formación, meta +20 %, dotación de 16 a 13 y horarios sin control.', ok: true, por: 'Patrón con mecanismo.' },
        { id: 'c2', t: 'Renzo es buena gente, no es su culpa.', ok: false, por: 'Opinión, no análisis.' },
      ] },
      { id: 'evid', t: 'La evidencia', ops: [
        { id: 'e1', t: 'Tengo sus dos correos pidiendo capacitación, sin respuesta, y los horarios con incumplimientos de descanso y refrigerio.', ok: true, por: 'Documentos que se pueden mostrar.' },
        { id: 'e2', t: 'Me lo contaron varios en la tienda.', ok: false, por: 'Sin fuente verificable.' },
      ] },
      { id: 'pide', t: 'Lo que propones', ops: [
        { id: 'p1', t: 'Propongo que la acción principal sea un programa de formación para supervisores nuevos, no cambios de personas.', ok: true },
        { id: 'p2', t: 'Propongo no mencionar a Santa Anita.', ok: null, por: 'Prudente, pero es el caso que hace entender el patrón.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'e1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 }, rel: { 'diego-pa': q === 'buena' ? 1 : 0 },
        cartera: { hallazgo: q === 'buena' ? 'Hallazgo final con evidencia documental' : 'Hallazgo por pulir' },
        out: q === 'buena' ? 'Diego responde: «Cambio la diapositiva 4. Ahora la historia se entiende sola».' : 'Diego responde: «Necesito hechos, no impresiones. ¿Qué tienes que pueda mostrar?».',
        pro: { ok: 'Patrón, mecanismo, evidencia y propuesta.', risk: 'Sin documentos, mañana será tu palabra contra la de la gerencia.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Lista para el comité!' : 'Faltan hechos.'],
      };
    },
    mirada: {
      ve: 'Un análisis mejora cuando choca con la realidad. La visita no debilitó tu hallazgo: le dio el «por qué», que es lo que necesita una gerencia para decidir qué cambiar.',
      visual: { tipo: 'cambio', titulo: 'El hallazgo, antes y después del terreno', pares: [['Supervisores nuevos rotan más', 'Ascendemos sin formar'], ['Un equipo con 150 %', 'Siete equipos con el mismo mecanismo'], ['¿Quién?', '¿Qué cambiamos?']] },
    },
  },
  {
    id: 'g7', t: '18:25', ch: 'whatsapp', who: null, titulo: 'El mensaje de Renzo', banner: 'assets/esc/camino.webp', lugar: 'Paradero de Angamos', show: ['personas', 'etica'],
    body: (n, F) => `<p>Bajas del bus con las piernas cansadas. ${F.has('monica_cabeza') ? 'Te escribe Renzo: «Me dijeron que mañana me regresan a vendedor. ¿Es por su análisis?».' : 'Te escribe Renzo: «¿Mañana van a hablar de mí en el comité?».'}</p><p><mark class="clave">No puedes contarle todo</mark>. Tampoco quieres mentirle.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que el análisis habla de cómo se asciende y se forma a todos los supervisores, no de él, y que su pedido de capacitación será parte de la propuesta.',
        res: { q: 'buena', fx: { personas: 4, etica: 3 },
          envia: [['renzo', 'Renzo, el análisis habla de cómo ascendemos y formamos a todos los supervisores nuevos, no de una persona. Tus correos pidiendo capacitación van a ser parte de la propuesta. Las decisiones las toma la gerencia, pero no voy a presentar a nadie como culpable.']],
          out: 'Renzo responde con un «gracias» y, después, una foto: su equipo armando una pirámide de pinturas para la campaña de diciembre.',
          pro: { ok: 'Le dices lo que es verdad y lo que depende de ti.', risk: 'No le prometas lo que decidirá la gerencia.' },
          kusi: ['feliz', 'Honesta y sin prometer de más.'] } },
      { id: 'b', label: 'No responderle hasta después del comité: cualquier cosa que digas puede ser malinterpretada.',
        res: { q: 'aceptable', fx: { personas: -2, etica: 1 },
          out: 'Renzo ve el doble check azul. Esa noche no duerme bien, y mañana llegará a la tienda con eso encima.',
          pro: { ok: 'No dices nada indebido.', risk: 'El silencio también es un mensaje, y no el que quieres.' },
          kusi: ['pensando', 'El silencio también habla.'] } },
    ],
    mirada: { ve: 'Las personas que aparecen en un análisis tienen derecho a no enterarse por rumores. No siempre puedes darles el detalle, pero sí puedes decirles qué tipo de análisis es, qué no es y qué depende de ti.' },
  },
];
