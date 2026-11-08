// Analista de Desarrollo Organizacional · Capítulo 5 · «El rumor» · Semana 1, viernes.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - D.S. 003-97-TR (TUO del D. Leg. 728), arts. 46 b) y 48: el cese colectivo por motivos económicos, tecnológicos,
//   estructurales o análogos procede solo cuando comprende a no menos del 10 % del personal y sigue un procedimiento ante
//   la Autoridad Administrativa de Trabajo (información y nómina de afectados, negociación, pericia, reuniones de conciliación).
//   https://www.tc.gob.pe/jurisprudencia/2007/08141-2006-AA.pdf
//   https://lpderecho.pe/cese-colectivo-supuestos-procede/
// Empresas y personas son ficticias.

export const CAP = {
  n: 5, titulo: 'El rumor', dia: 'Semana 1, viernes', foto: 'assets/foto2/tension.webp',
  lugar: 'Cooperativa del Sur · Sede de Cayma, Arequipa',
  inicio: '07:00', fin: '19:30', cierreHora: '19:00',
  apertura: 'Viernes. A las siete de la mañana ya circula un audio por los grupos de WhatsApp: «El lunes botan a 50, la lista ya está hecha». En las agencias, los socios notan las caras largas en ventanilla.', boton: 'Abrir el WhatsApp',
  kusi: 'Un rumor corre más rápido que cualquier comunicado. Hoy toca alcanzarlo con la verdad.',
  lead: 'Respondiste al rumor sin alimentarlo, averiguaste qué era cierto, corregiste un comunicado peligroso, armaste el plan de comunicación y frenaste una lista de «voluntarios».',
  reflexion: '¿Qué necesitas saber tú, en un cambio, para dejar de creerle al rumor?',
  siguiente: { n: 6, titulo: 'La resistencia', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'rumor', p: 'Rumor de los 50 despidos', j: 'Ernesto · Gerencia', d: 0, e: 'Corriendo desde las 7' },
  { id: 'comunicacion', p: 'Plan de comunicación del cambio', j: 'Ernesto', d: 0, e: 'Sin plan' },
  { id: 'duplicados', p: 'Análisis de puestos duplicados', j: 'Ernesto · Gerencia', d: 0, e: 'Créditos el lunes' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Ernesto', d: 0, e: 'Asesor listo; siguen créditos y caja' },
  { id: 'encuesta', p: 'Encuesta de clima', j: 'Gestión Humana', d: 0, e: 'Sale el lunes' },
];

export const FUTURO = {
  rumor_atendido: ['Respondiste el rumor con lo que sabías y una fecha.', 'Kevin ayudó a calmar el grupo de Characato.'],
  rumor_desmentido: ['Dijiste que «nadie sale» para apagar el rumor.', 'Si algún puesto cambia, nadie te creerá.'],
  comunicado_honesto: ['El comunicado de Gerencia dice lo que se sabe, lo que no y cuándo se sabrá.', 'Las agencias tendrán un mensaje común el lunes.'],
  comunicado_promesa: ['El comunicado promete que «nadie será despedido».', 'Esa frase volverá en el consejo.'],
  plan_comunicacion: ['Hay un plan: jefes primero, luego todos, con preguntas frecuentes.', 'Los jefes de agencia sabrán qué responder.'],
  retiro_limpio: ['Propusiste un retiro voluntario abierto, sin lista ni presión, después de aprobar la estructura.', 'Linares lo llevará al consejo como opción.'],
  lista_presion: ['Aceptaste armar una lista de 50 personas para «invitarlas» a renunciar.', 'Alguien de la lista lo contará el lunes.'],
  cese_apurado: ['Propusiste iniciar ya un cese colectivo ante la Autoridad de Trabajo.', 'El consejo no lo ha aprobado y el rumor se volvió verdad.'],
  jefes_informados: ['Los jefes de agencia tienen un mensaje claro para su gente.', 'Hilda lo repetirá en ventanilla el lunes.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  hilda: { n: 'Hilda Mamani', sub: 'Cajera · Agencia Characato', c: '#8A4FBF' },
  jefes: { n: 'Jefes de agencia · Coop. del Sur', sub: '11 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'kevin', t: '06:58', de: 'Kevin', txt: '🎤 Audio reenviado: «Dicen que el lunes botan a 50, que la lista ya está hecha y que casi todos son de Characato…»' },
  { chat: 'kevin', t: '07:01', de: 'Kevin', txt: 'Usted me dijo que nadie salía. ¿Qué pasó?', si: 'kevin_promesa' },
  { chat: 'hilda', t: '07:40', de: 'Hilda', txt: 'Doctorcita, una socia de Chiguata me preguntó si iban a cerrar la agencia y llevarse sus ahorros. Ya no sé qué decirles 😟' },
  { chat: 'gh', t: '08:15', de: 'Luz', txt: 'El audio salió del grupo «Characato de corazón». Ya lo tienen 300 personas, calculo 😬' },
  { chat: 'rocio', t: '12:30', de: 'Rocío', txt: 'Mi equipo no ha trabajado nada hoy. Necesitan escuchar algo oficial, no de mí.' },
  { chat: 'jefes', t: '17:50', de: 'Jefe Cayma', txt: 'Recibido. Lo leo en la reunión de las 8 del lunes.', si: 'jefes_informados' },
  { chat: 'kevin', t: '18:30', de: 'Kevin', txt: 'Puse en el grupo lo que me explicó. Se calmaron bastante. No del todo, pero bastante.', si: 'rumor_atendido' },
];

export const CORREOS = [
  { t: '09:10', de: 'Fernando Linares · Gerencia General', para: 'Ernesto Valdivia; Analista de DO', asunto: 'Comunicado urgente', html: '<p>Adjunto el comunicado para todo el personal. Revísenlo y que salga antes del mediodía.</p><p>F. Linares</p>' },
  { t: '13:40', de: 'Finanzas', para: 'Fernando Linares; Ernesto Valdivia', asunto: 'Escenarios de ahorro', html: '<p>Como pidió la gerencia, adjuntamos tres escenarios de ahorro en personal: 0, 25 y 50 puestos. Son solo escenarios de costo, no una propuesta de estructura.</p>' },
];

export const QUIZ = [
  { q: 'El cese colectivo por motivos económicos o estructurales, según el art. 48 del D.S. 003-97-TR, procede cuando comprende…', ops: ['A cualquier número de trabajadores', 'A no menos del 10 % del personal, con procedimiento ante la Autoridad de Trabajo', 'Solo a trabajadores con menos de un año', 'A quien el gerente elija, sin trámite'], ok: 1, por: 'Para motivos económicos, tecnológicos, estructurales o análogos (art. 46 b), exige un umbral del 10 % y un procedimiento ante la Autoridad Administrativa de Trabajo.' },
  { q: 'Corre el rumor de 50 despidos y no hay decisión tomada. ¿Qué dice un buen comunicado?', ops: ['«Nadie será despedido»', 'Lo que se sabe, lo que no y cuándo se sabrá', 'Nada: mejor no hablar', '«Los que no se adapten saldrán»'], ok: 1, por: 'No prometes lo que no controlas, pero llenas el vacío que alimenta al rumor.' },
  { q: '¿A quién se informa primero en un plan de comunicación del cambio?', ops: ['A la prensa', 'A los jefes, que recibirán las preguntas de sus equipos', 'A los socios', 'A nadie hasta el final'], ok: 1, por: 'Los jefes son el primer canal: si no saben qué decir, el rumor gana.' },
  { q: 'El gerente quiere una lista de 50 personas para «invitarlas» a renunciar. ¿Cuál es el riesgo?', ops: ['Ninguno: es voluntario', 'Que la presión vuelva involuntaria la renuncia y se cuestione', 'Que cueste poco', 'Que sea demasiado rápido'], ok: 1, por: 'Un retiro con lista y presión deja de ser voluntario; lo voluntario es abierto y sin presión.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '07:10', ch: 'whatsapp', who: 'analista', titulo: 'El audio de las siete', banner: 'assets/foto2/callcenter.webp', lugar: 'Combi a Cayma', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Vas en la combi, apretada entre dos estudiantes de la San Agustín, cuando Kevin te reenvía el audio. Una voz de mujer dice que <mark class="clave">el lunes botan a 50 y la lista ya está hecha</mark>.</p><p>${F.has('kevin_promesa') ? 'Debajo, Kevin agrega: «Usted me dijo que nadie salía». La frase del lunes te pesa.' : 'Debajo, Kevin agrega: «¿Es cierto?».'}</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle que no conoces ninguna lista ni decisión, que vas a preguntar a Ernesto apenas llegues y que hoy mismo habrá información oficial.',
        res: { q: 'buena', fx: { personas: 3, confianza: 3 }, rel: { analista: 1 }, flags: ['rumor_atendido'],
          envia: [['kevin', 'Kevin, no conozco ninguna lista ni ninguna decisión de despidos. Llego a la sede a las 8 y lo primero que hago es preguntarle a Ernesto. Hoy mismo va a haber información oficial. Te escribo apenas la tenga.']],
          out: 'Kevin responde con un pulgar y un «ya». Es poco, pero es más que lo que tenía.',
          pro: { ok: 'No niegas lo que no sabes y te comprometes a algo que sí puedes cumplir.', info: 'Pídele a Ernesto que el mensaje oficial salga hoy, aunque sea corto.' },
          kusi: ['animo', 'Lo que sabes, lo que no y cuándo. ¡Así!'] } },
      { id: 'b', label: 'Responderle que es falso, que nadie va a salir y que no reenvíe esas cosas.',
        res: { q: 'riesgosa', fx: { confianza: -3, etica: -2 }, flags: ['rumor_desmentido'],
          envia: [['kevin', 'Es falso, Kevin. Nadie va a salir. No reenvíes esas cosas, porfa.']],
          out: 'Kevin pega tu mensaje en el grupo. A las diez, alguien responde con una foto de los escenarios de Finanzas: «¿Y esto qué es?».',
          pro: { ok: 'Intentas calmarlo rápido.', risk: 'Negar algo que no conoces te deja sin credibilidad cuando aparece un dato parcial.' },
          kusi: ['preocupado', '¿Y si había algo de cierto?'] } },
      { id: 'c', label: 'No responder hasta saber qué pasa: no quieres decir nada que después tengas que corregir.',
        res: { q: 'aceptable', fx: { personas: -2, confianza: -1 },
          out: 'Kevin ve el doble check azul. En el grupo escribe: «La de DO tampoco dice nada».',
          pro: { ok: 'No dices nada incorrecto.', risk: 'En medio de un rumor, el silencio se lee como confirmación.' },
          kusi: ['pensando', 'Callar también comunica.'] } },
    ],
    rules: [[BP, 'Ante un rumor: lo que sabes, lo que no y cuándo habrá información.']],
    mirada: {
      ve: 'Los rumores crecen en el vacío. La gente no necesita todas las respuestas para calmarse: necesita saber que alguien está buscándolas y que llegarán pronto. Desmentir sin saber es tan peligroso como callar.',
      visual: { tipo: 'cambio', titulo: 'Responder un rumor', pares: [['«Es falso»', '«No conozco ninguna decisión»'], ['Silencio', '«Pregunto y te escribo»'], ['Esperar', '«Hoy habrá información oficial»']] },
    },
  },
  {
    id: 'r2', t: '08:10', ch: 'presencial', who: 'ernesto', titulo: '¿Qué es cierto?', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Ernesto', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>Ernesto está de pie, con el celular en la mano y el audio sonando por tercera vez. «Ya lo escuché. Siéntate.»</p><p>Tienes diez minutos antes de que lo llame Linares. <mark class="clave">Elige qué preguntarle</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Ernesto.',
    opts: [
      { id: 'lista', label: '¿Existe una lista?', info: '«No que yo sepa. Lo que existe es un pedido de Linares a Finanzas: escenarios de costo con 0, 25 y 50 puestos menos. Alguien vio el número y armó la historia.»' },
      { id: 'ley', label: 'Si fueran 50, ¿qué dice la ley?', info: '«50 de 480 es más del 10 %. Eso sería un cese colectivo por causas objetivas: un procedimiento ante la Autoridad de Trabajo, con motivos, nómina de afectados y reuniones de conciliación. No es algo que se haga un lunes.»' },
      { id: 'quien', label: '¿Quién puede comunicar algo oficial hoy?', info: '«Linares. Ya preparó un comunicado. Me da miedo lo que dice: lo escribió anoche, molesto.»' },
      { id: 'consejo', label: '¿El consejo ya decidió algo?', info: '«Nada. El consejo ve la estructura el jueves. Ningún despido masivo puede decidirse sin ellos.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('ley') ? 3 : 1, confianza: 2, cumplimiento: picks.includes('ley') ? 2 : 0 }, rel: { ernesto: 1 },
      out: 'Sales con una certeza: no hay lista, hay un escenario de costos. Y un comunicado que hay que leer antes de que salga.',
      kusi: ['curioso', 'De dónde salió el 50 ya lo sabes. ¡Eso desarma un rumor!'],
    }),
    rules: [[LEY, 'El cese colectivo por motivos económicos, tecnológicos, estructurales o análogos requiere que comprenda al menos al 10 % del personal y un procedimiento ante la Autoridad Administrativa de Trabajo (D.S. 003-97-TR, art. 48).']],
    mirada: {
      ve: 'Casi todos los rumores tienen un grano de verdad deformado. Aquí el grano es un escenario de costos de Finanzas. Saber de dónde salió el número te permite comunicar con precisión: no hay lista, hay un análisis que todavía no es una decisión.',
      visual: { tipo: 'embudo', titulo: 'Del escenario al rumor', niveles: [['Escenarios de Finanzas: 0, 25 y 50', 3], ['Alguien ve «50»', 1], ['Audio: «botan a 50 el lunes»', 1]] },
      normas: [{ ley: 'D.S. 003-97-TR (TUO del D. Leg. 728), art. 48', dice: 'El cese colectivo por motivos económicos, tecnológicos, estructurales o análogos (art. 46 b) procede cuando comprende a no menos del 10 % del personal, y sigue un procedimiento ante la Autoridad Administrativa de Trabajo con información, nómina y conciliación.', practica: 'Nadie puede «botar a 50 el lunes»: ni la ley lo permite así, ni el consejo lo ha decidido.' }],
    },
  },
  {
    id: 'r3', t: '09:20', ch: 'documento', who: null, titulo: 'El comunicado de Linares', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'confianza', 'etica'],
    body: () => `<p>El comunicado de Linares llega a las 9:10. Quiere que salga antes del mediodía. Lo escribió molesto, y se nota: <mark class="clave">algunas frases echarían gasolina al fuego</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que no son buena práctica.',
    doc: { t: 'Comunicado a todo el personal', sub: 'Gerencia General · borrador de las 9:10' },
    lines: [
      { id: 'k1', t: 'Ninguna decisión sobre la nueva estructura ha sido tomada. El consejo la revisará el jueves.' },
      { id: 'k2', t: 'Les garantizo que nadie será despedido como consecuencia de la fusión.', bad: BP, why: 'Promete algo que el consejo todavía no ha decidido. Si algún puesto cambia, la gerencia perderá toda credibilidad.' },
      { id: 'k3', t: 'Quienes difundan rumores serán sancionados.', bad: BP, why: 'Amenazar a quien tiene miedo aumenta el miedo y no detiene el rumor. Además, compartir una preocupación no es una falta.' },
      { id: 'k4', t: 'Si en el futuro hubiera reducciones de personal, se harán según la ley y se informará primero a cada persona.' },
      { id: 'k5', t: 'Los trabajadores que no se adapten a la nueva cultura serán los primeros en salir.', bad: LEY, why: 'Anuncia un criterio de salida que no es una causa justa ni objetiva de despido, y lo dirige a quienes expresan dudas.' },
      { id: 'k6', t: 'Pueden enviar sus preguntas a Gestión Humana; las respuestas se publicarán cada viernes.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Ernesto lleva tus comentarios a Linares. Se quita la amenaza de sanción, pero la frase sobre «los que no se adapten» sale publicada. En Characato la leen como una lista disfrazada.' : `Marcas las frases peligrosas. Ernesto y tú se sientan con Linares a las once. Él refunfuña con la promesa: «¿Entonces qué les digo?». «Lo que sabemos, lo que no y cuándo.» El comunicado sale a las 12:40, con las líneas 1, 4 y 6.`,
      flags: [missLey ? 'comunicado_promesa' : 'comunicado_honesto'], rel: { ernesto: missLey ? 0 : 1 },
      cartera: { rumor: missLey ? 'Comunicado con frases de riesgo' : 'Comunicado honesto publicado a las 12:40' },
      pro: { ok: 'Un comunicado sin promesas ni amenazas es el que mejor resiste el tiempo.', risk: 'Prometer que nadie sale o amenazar a quien duda son las dos formas más comunes de empeorar un rumor.', info: 'Las preguntas de cada semana son una mina de información para DO.' },
      kusi: missLey ? ['preocupado', 'Esa frase va a doler…'] : ['celebra', '¡Ni promesas ni amenazas! Bacán.'],
    }),
    rules: [[BP, 'Un comunicado en un cambio no promete lo que no se ha decidido ni amenaza a quien tiene miedo.']],
    mirada: {
      ve: 'Linares está cansado y quiere que el rumor pare ya. Su borrador tiene las dos tentaciones de todo gerente bajo presión: prometer para calmar y amenazar para controlar. Ninguna de las dos funciona.',
      visual: { tipo: 'balanza', a: { t: 'El borrador', items: ['«Nadie será despedido»', '«Serán sancionados»', '«Los que no se adapten»'] }, b: { t: 'El comunicado final', items: ['No hay decisión tomada', 'Se hará según la ley', 'Preguntas cada viernes'] } },
    },
  },
  {
    id: 'r4', t: '11:00', ch: 'documento', who: null, titulo: 'El plan de comunicación', banner: 'assets/esc/idea.webp', lugar: 'Sala 2', show: ['calidad', 'personas'],
    body: () => `<p>Un comunicado no basta. Ernesto te pide un plan para las próximas dos semanas, hasta que el consejo decida. <mark class="clave">Elige las piezas</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan.', boton: 'Guardar el plan',
    bloques: [
      { id: 'quien', t: 'A quién y en qué orden', n: 2, ops: [
        { id: 'q1', t: 'Primero a los 11 jefes de agencia, con un guion y preguntas frecuentes.', ok: true, por: 'Son los que reciben las preguntas de su gente cada día.' },
        { id: 'q2', t: 'Reuniones presenciales en las agencias de la campiña y Caylloma, no solo correo.', ok: true, por: 'Allí el correo de Characato todavía no se migra.' },
        { id: 'q3', t: 'Todo por el grupo de WhatsApp general, que es más rápido.', ok: false, por: 'Rápido, pero sin conversación y fácil de deformar.' },
      ] },
      { id: 'que', t: 'Qué se dice', n: 2, ops: [
        { id: 'w1', t: 'Un calendario: qué se decide, cuándo y quién lo decide.', ok: true, por: 'Las fechas bajan la ansiedad.' },
        { id: 'w2', t: 'Preguntas frecuentes en lenguaje sencillo, también para responder a socios en ventanilla.', ok: true, por: 'Los socios también están preguntando.' },
        { id: 'w3', t: 'Mensajes motivadores: «¡Juntos somos más!».', ok: false, por: 'Sin información concreta, suena vacío.' },
      ] },
      { id: 'vuelta', t: 'Cómo escuchar de vuelta', n: 1, ops: [
        { id: 'v1', t: 'Un buzón de preguntas y respuestas publicadas cada viernes.', ok: true, por: 'La comunicación es de ida y vuelta.' },
        { id: 'v2', t: 'Monitorear los grupos de WhatsApp personales para ver quién habla mal.', ok: false, por: 'Vigilar chats personales destruye la confianza y no es tu función.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'riesgosa' ? -3 : 3 },
        flags: q === 'riesgosa' ? [] : ['plan_comunicacion'], cartera: { comunicacion: q === 'riesgosa' ? 'Plan con riesgos' : 'Plan: jefes primero, visitas, calendario y buzón' },
        out: q === 'buena' ? 'Tu plan cabe en una lámina: quién, qué, cuándo y cómo escuchar. Ernesto agenda la visita a Chiguata y Chivay para la próxima semana.' : 'El plan avanza, pero hay piezas que suenan bien y no informan, o que vigilan en vez de escuchar.',
        pro: { ok: 'Jefes primero, presencial donde hace falta, fechas claras y un canal de vuelta.', risk: 'Vigilar los chats personales convierte a Gestión Humana en policía.', info: 'Prepara respuestas para socios: el miedo también llega a la ventanilla.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un plan que llega hasta Chivay!' : 'Algunas piezas no ayudan.'],
      };
    },
    rules: [[BP, 'Comunica primero a los jefes, con calendario y preguntas frecuentes, y abre un canal de vuelta.']],
    mirada: {
      ve: 'Comunicar un cambio no es mandar un correo: es preparar a quienes van a responder las preguntas cada día. En una cooperativa, eso incluye a la cajera que atiende a una socia preocupada por sus ahorros.',
      visual: { tipo: 'flujo', titulo: 'El plan de comunicación', pasos: ['Jefes de agencia', 'Reuniones presenciales', 'Calendario', 'Preguntas frecuentes', 'Buzón y respuestas cada viernes'] },
    },
  },
  {
    id: 'r5', t: '14:10', ch: 'presencial', who: null, titulo: 'Los «voluntarios»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Despacho del gerente general', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Linares te recibe con los escenarios de Finanzas sobre el escritorio. Ernesto está en Chiguata.</p><p>«No voy a hacer un cese colectivo: es lento y sale en el periódico. Arma una lista de 50 personas, las de menor desempeño, y las invitamos a un <mark class="clave">retiro "voluntario"</mark> con un bono. Antes del lunes.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un programa de retiro voluntario abierto a todos, con condiciones claras y sin lista ni presión, que se lance solo después de que el consejo apruebe la estructura.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 1 }, flags: ['retiro_limpio'], cartera: { rumor: 'Retiro voluntario: opción abierta para el consejo, sin lista' },
          out: 'Linares golpea el lápiz contra la mesa. «¿Y si se van los buenos?» «Ese es el riesgo de lo voluntario. Por eso va después de la estructura: sabremos qué puestos sí necesitamos.» Acepta llevarlo como opción al consejo.',
          pro: { ok: 'Un retiro realmente voluntario es abierto, informado y sin presión.', risk: 'Puede irse gente que la cooperativa necesita.', info: 'Pide que Legal revise las condiciones del programa.' },
          kusi: ['animo', 'Voluntario de verdad. ¡Bien defendido!'] } },
      { id: 'b', label: 'Armar la lista con las evaluaciones de desempeño: al menos así se elige con datos y el bono hace la salida más digna.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, flags: ['lista_presion'],
          out: 'Empiezas a cruzar evaluaciones. Descubres que Characato no evaluaba desde 2021. La lista termina armada con lo que dicen los jefes. Y tiene 38 nombres de Characato.',
          pro: { ok: 'Le das al gerente lo que pide.', risk: 'Una lista de «invitados» a renunciar, con presión y antes del lunes, deja de ser voluntaria. Y confirma exactamente el rumor.' },
          kusi: ['triste', 'El audio tenía razón… por tu culpa.'] } },
      { id: 'c', label: 'Recomendarle iniciar ya el cese colectivo ante la Autoridad de Trabajo: si hay que reducir, que sea por la vía legal.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -4, confianza: -2 }, flags: ['cese_apurado'],
          out: 'Linares lo considera. Pero el consejo no ha aprobado ninguna estructura, y no sabes todavía qué puestos sobran. Si se inicia hoy, el rumor se vuelve verdad el lunes.',
          pro: { ok: 'Respetas el procedimiento legal.', risk: 'Iniciar un cese colectivo antes de definir la estructura es decidir primero cuántos salen y después para qué.' },
          kusi: ['pensando', 'Legal, sí… pero ¿ya sabemos qué sobra?'] } },
    ],
    rules: [[LEY, 'El cese colectivo por causas objetivas requiere un procedimiento ante la Autoridad Administrativa de Trabajo (D.S. 003-97-TR, art. 48).'], [BP, 'Un retiro voluntario es abierto, informado y sin presión.']],
    mirada: {
      ve: 'Linares busca una salida rápida y discreta a un problema real de costos. Pero «voluntario» y «lista» no pueden ir en la misma frase. DO tiene que recordar el orden: primero la estructura, después cuántas personas y con qué mecanismo legal.',
      visual: { tipo: 'matriz', x: 'Rapidez', y: 'Legitimidad', cuadrantes: ['Legítimo y rápido', 'Legítimo pero lento', 'Ni uno ni otro', 'Rápido pero frágil'], items: [['Retiro abierto tras la estructura', .4, .85], ['Lista de 50 antes del lunes', .9, .1], ['Cese colectivo ya', .3, .45]] },
    },
  },
  {
    id: 'r6', t: '17:30', ch: 'whatsapp', who: null, titulo: 'El mensaje para los jefes', banner: 'assets/esc/camino.webp', lugar: 'Sede de Cayma, con la oficina vaciándose', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Es viernes y la oficina se vacía. ${F.has('plan_comunicacion') ? 'Según tu plan, los jefes de agencia deben tener hoy su guion para la reunión del lunes.' : 'Ernesto te pide algo para los jefes de agencia antes del fin de semana.'}</p><p>Le escribes al grupo de los 11 jefes. <mark class="clave">Lo que digas, lo repetirán el lunes a las 8</mark>.</p>`,
    type: 'compose', enviaA: 'jefes', para: 'Para: Jefes de agencia · Coop. del Sur', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Lo que se sabe', ops: [
        { id: 'h1', t: 'No hay ninguna lista de despidos. Hubo un análisis de costos de Finanzas, que no es una decisión.', ok: true, por: 'Explica de dónde salió el número.' },
        { id: 'h2', t: 'El audio es falso y quien lo difundió será identificado.', ok: false, por: 'Amenaza y desvía la conversación.' },
      ] },
      { id: 'fecha', t: 'Lo que viene', ops: [
        { id: 'f1', t: 'El consejo verá la estructura el jueves. Cualquier cambio se comunicará primero a cada persona, y según la ley.', ok: true, por: 'Fecha, quién decide y cómo.' },
        { id: 'f2', t: 'Pronto se sabrá todo.', ok: null, por: '«Pronto» no calma a nadie.' },
      ] },
      { id: 'socios', t: 'Para la ventanilla', ops: [
        { id: 's1', t: 'Si un socio pregunta: sus ahorros siguen en la cooperativa, que sigue supervisada por la SBS, y todas las agencias atienden normalmente.', ok: true, por: 'Una respuesta simple para un miedo real.' },
        { id: 's2', t: 'Si un socio pregunta, que llame a la sede.', ok: false, por: 'Le pasa el miedo a otro y deja a la cajera sin respuesta.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.socios === 's2', buenas = ['h1', 'f1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 0, confianza: mal ? -3 : 2 },
        flags: q === 'buena' ? ['jefes_informados'] : [], cartera: { comunicacion: q === 'buena' ? 'Guion para jefes de agencia enviado' : 'Mensaje a jefes enviado' },
        out: q === 'buena' ? 'Los jefes confirman uno por uno. Hilda te manda un audio: «Así sí les puedo explicar a mis socias». Sales a las siete, con el Misti rosado al fondo.' : mal ? 'Dos jefes reenvían tu mensaje a sus equipos. La palabra «identificado» es la que todos recuerdan.' : 'Los jefes lo reciben. El lunes, cada uno lo contará a su manera.',
        pro: { ok: 'Le das a cada jefe qué decir a su equipo y a los socios.', risk: 'Amenazar o derivar a los socios a la sede deja a los jefes solos con el miedo.', info: 'El lunes, pregunta a tres jefes cómo les fue.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'indignado' : 'pensando', q === 'buena' ? '¡Once jefes con la misma verdad!' : mal ? '¡Eso asusta más!' : 'Le faltó algo concreto.'],
      };
    },
    rules: [[BP, 'Prepara a los jefes con hechos, fechas y respuestas para los socios.']],
    mirada: {
      ve: 'El viernes de un rumor es el día más peligroso: la gente se va a su casa con el miedo y lo comparte el fin de semana. Un mensaje claro a los jefes antes de que se vayan es lo que hace que el lunes empiece con información y no con ansiedad.',
      visual: { tipo: 'mensaje', titulo: 'Guion para los jefes', txt: 'No hay lista de despidos: hubo un análisis de costos que no es una decisión. El consejo verá la estructura el jueves. A los socios: sus ahorros siguen en la cooperativa, supervisada por la SBS.' },
    },
  },
];
