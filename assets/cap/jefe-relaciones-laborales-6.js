// Jefe/a de Relaciones Laborales · Capítulo 6 · «La comunicación» · Semana 2, lunes.
// Hilo: mañana empieza la huelga anunciada. El fin de semana circularon audios de WhatsApp con información falsa
// sobre despidos, reemplazos y acuerdos secretos. Hoy hay que comunicar a 1,300 personas y volver a la mesa a las 16:00.
// Normas citadas:
// - D.S. 003-97-TR, TUO de la LPCL, art. 29: es nulo el despido por participar en actividades sindicales (docs/normas/txt).
// - D.S. 019-2006-TR, art. 25.9 (sustitución de huelguistas) y 25.10 (actos que afecten la libertad sindical)
//   (docs/normas/txt).
// - TUO de la LRCT (D.S. 010-2003-TR): durante una huelga válida se suspenden los contratos de quienes la acatan,
//   sin pago de esos días; se explica el principio sin artículo.
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa
// - Constitución, art. 28 (docs/normas/txt).

export const CAP = {
  n: 6, titulo: 'La comunicación', dia: 'Semana 2, lunes', foto: 'assets/foto2/callcenter.webp',
  lugar: 'Fundición del Sur · Oficina de Relaciones Laborales',
  inicio: '07:00', fin: '19:40', cierreHora: '19:30',
  apertura: 'Lunes de la semana 2, víspera de la huelga. Tu celular tiene 214 mensajes sin leer. Jhon te espera en la puerta con tres audios de WhatsApp y cara de no haber dormido.', boton: 'Escuchar los audios',
  kusi: 'Cuando el miedo corre más rápido que los hechos, tu trabajo es correr con los hechos. ¡Con calma!',
  lead: 'Entendiste de dónde venían los audios, separaste lo falso de lo cierto, frenaste una respuesta que habría sido otra amenaza, comunicaste hechos por los canales correctos y protegiste a un dirigente de un rumor.',
  reflexion: '¿Qué te dio más miedo hoy: lo que decían los audios o lo que la gerencia quería responder?',
  siguiente: { n: 7, titulo: 'El primer día', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'audios', p: 'Audios con información falsa', j: 'Jhon · Relaciones Laborales', d: 0, e: '3 audios desde el sábado' },
  { id: 'comunicado', p: 'Comunicado a todo el personal', j: 'Relaciones Laborales · Gerencia', d: 0, e: 'Antes del mediodía' },
  { id: 'canales', p: 'Canales para llegar a la base', j: 'Comunicaciones internas', d: 0, e: 'Por elegir' },
  { id: 'mesa', p: 'Reunión de trato directo', j: 'Ambas comisiones', d: 0, e: 'Hoy 16:00' },
  { id: 'radio', p: 'Pedido de la radio local', j: 'Prensa de Ilo', d: 0, e: 'Llamaron dos veces' },
];

export const FUTURO = {
  audios_entendidos: ['Sabes de dónde vienen los audios y qué parte tiene algo de verdad.', 'Te servirá para el reporte a la Autoridad. Capítulo 8.'],
  falso_separado: ['Separaste lo falso de lo cierto en los audios antes de responder.', 'El comunicado no repitió ningún rumor. Capítulo 7.'],
  comunicado_hechos: ['El comunicado explicó hechos, derechos y servicios mínimos, sin atacar a nadie.', 'Lo leerán en el piquete. Capítulo 7.'],
  comunicado_amenaza: ['El comunicado advirtió consecuencias para quienes hagan huelga.', 'El sindicato lo llevará a la Autoridad de Trabajo. Capítulo 8.'],
  audio_gerente: ['El gerente grabó su propio audio para «calmar» a la gente.', 'Se viralizó con otra lectura. Capítulo 7.'],
  canales_cercanos: ['Usaste canales cercanos: cambio de turno, murales y supervisores con un mensaje único.', 'La base distingue la voz de la empresa de los rumores. Capítulo 7.'],
  desmentido_conjunto: ['Propusiste a Cutipa desmentir juntos el audio que lo acusaba de «venderse».', 'Cutipa no lo olvidará. Capítulos 8 y 9.'],
  cutipa_expuesto: ['Dejaste correr el audio que acusaba a Cutipa de «venderse».', 'Cutipa llegará a la mesa más duro, para no parecer débil. Capítulo 9.'],
  radio_hechos: ['Diste a la radio local una declaración breve y de hechos.', 'Ilo escuchó a la empresa con un tono sereno. Capítulo 7.'],
  radio_ataque: ['En la radio dijiste que la huelga «no tiene sentido».', 'El sindicato respondió en el mismo programa. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  personal: { n: 'Comunicado a todo el personal', sub: 'Murales, correo y supervisores', c: '#7A1F2B' },
  marleny: { n: 'Marleny Quispe', sub: 'Secretaria general · sindicato de mantenimiento', c: '#5B3E8C' },
};

export const WSP = [
  { chat: 'grupo', t: '06:50', de: 'Jhon', txt: 'Jefa, son tres audios. Uno dice que van a botar a todos los que paren. Otro, que vienen 200 de una service de Arequipa. Ya lo escuchó mi papá.' },
  { chat: 'grupo', t: '06:52', de: 'Jhon', txt: 'Y hay una captura del grupo de supervisores preguntando quién va a parar. Esa sí es real.', si: 'lista_armada' },
  { chat: 'marleny', t: '09:40', de: 'Marleny', txt: 'Uno de los audios dice que mantenimiento ya firmó S/ 8. Eso es mentira y me están insultando por WhatsApp.', no: 'adelanto_divisor' },
  { chat: 'marleny', t: '09:40', de: 'Marleny', txt: 'El audio dice que nos compraron. Y lo peor es que algo de razón tiene, por lo del aumento adelantado.', si: 'adelanto_divisor' },
  { chat: 'sindicato', t: '13:10', de: 'Teodoro Cutipa', txt: 'Leí el comunicado. No dice nada contra nosotros. Bien. La lista de servicios mínimos se la paso a las 3.', si: 'comunicado_hechos' },
  { chat: 'sindicato', t: '13:10', de: 'Teodoro Cutipa', txt: 'Leí el comunicado. Lo vamos a presentar a la Autoridad de Trabajo.', si: 'comunicado_amenaza' },
  { chat: 'gerencia', t: '18:50', de: 'Ing. Paredes', txt: 'Mañana a las 5:30 en la garita. Quiero estar ahí.' },
];

export const CORREOS = [
  { t: '07:30', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Jefatura de Relaciones Laborales', asunto: 'Los audios', html: '<p>No respondas a los audios con otro audio, y no busques a quién los reenvió: eso sería vigilar a la gente por lo que habla.</p><p>Responde con hechos: nadie puede ser despedido por participar en una huelga (LPCL, art. 29); la empresa no puede reemplazar a los huelguistas (D.S. 019-2006-TR, art. 25.9); durante una huelga válida se suspende el contrato de quien la acata y esos días no se pagan; los servicios mínimos ya están acordados.</p><p>Silvia</p>' },
];

export const QUIZ = [
  { q: 'Frente a un audio falso que circula entre los trabajadores, lo más eficaz es…', ops: ['Buscar a quién lo reenvió', 'Responder rápido con hechos verificables por canales cercanos', 'Mandar un audio del gerente', 'No decir nada'], ok: 1, por: 'Los rumores se combaten con hechos, rápido y por los canales donde la gente realmente se informa.' },
  { q: '¿Puede la empresa despedir a quien participe en una huelga?', ops: ['Sí, siempre', 'No: el despido por actividad sindical es nulo (LPCL, art. 29)', 'Solo si la huelga dura más de 3 días', 'Solo a los dirigentes'], ok: 1, por: 'El art. 29 del D.S. 003-97-TR declara nulo el despido por participar en actividades sindicales.' },
  { q: 'Durante una huelga que cumple la ley, a quien la acata…', ops: ['Se le paga normal', 'Se le suspende el contrato y no se le pagan esos días', 'Se le despide', 'Se le cambia de puesto'], ok: 1, por: 'La huelga válida suspende el contrato: no hay trabajo ni pago esos días, pero el vínculo sigue.' },
  { q: 'Un comunicado que dice «quien pare asumirá las consecuencias»…', ops: ['Es una buena advertencia', 'Puede leerse como amenaza y afectar la libertad sindical', 'Es obligatorio', 'Tranquiliza a la base'], ok: 1, por: 'Una frase así, en vísperas de huelga, presiona a no ejercer un derecho (D.S. 019-2006-TR, art. 25.10).' },
  { q: 'Si un audio ataca al dirigente con quien negocias, a la empresa le conviene…', ops: ['Dejarlo correr', 'No aprovecharlo: un dirigente debilitado endurece a la base', 'Reenviarlo', 'Pedir su cambio'], ok: 1, por: 'Un dirigente que necesita demostrar que no «se vendió» no puede firmar un acuerdo razonable.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '07:15', ch: 'whatsapp', who: null, titulo: 'Tres audios', banner: 'assets/esc/alarma.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'personas', 'etica'],
    body: () => `<p>Jhon pone los audios en el parlante. Una voz de hombre, agitada, con ruido de carro: «Compañeros, me han confirmado de arriba…». El primero se reenvió más de cuarenta veces, según el contador de WhatsApp.</p><p>Antes de responder, <mark class="clave">entiende qué tienes entre manos</mark>. Dos preguntas para Jhon.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Jhon.',
    opts: [
      { id: 'origen', label: '¿De dónde salieron?', info: '«El primero lo mandó un número de Tacna que nadie conoce, a un grupo de padres de familia del colegio de Pampa Inalámbrica. De ahí saltó a todos lados.»' },
      { id: 'cierto', label: '¿Hay algo cierto en lo que dicen?', info: '«Que los días de huelga no se pagan, eso sí. Lo demás —despidos, la service de Arequipa, que mantenimiento firmó S/ 8— no tiene base. Y el tercero dice que Cutipa “ya se vendió”.»' },
      { id: 'quienes', label: '¿Quiénes los están reenviando en la planta?', info: 'Jhon duda. «Mucha gente, jefa. Mi papá también. ¿Quiere que le pase nombres?» Le dices que no: lo que importa es qué dicen, no quién los reenvía.' },
      { id: 'efecto', label: '¿Qué está provocando en la gente?', info: '«Miedo. Las esposas están llamando a la oficina del sindicato. Unos dicen que no van a parar por miedo al despido; otros, que ahora sí van a parar por rabia.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: 3, personas: 2, etica: picks.includes('quienes') ? 0 : 1 },
      flags: ['audios_entendidos'],
      cartera: { audios: picks.includes('cierto') ? 'Solo es cierto que los días de huelga no se pagan' : 'Origen y efecto identificados' },
      out: 'Jhon guarda los audios en una carpeta con fecha. «Para el informe», dice. Afuera, la neblina de la mañana empieza a levantarse sobre el mar.',
      kusi: ['curioso', 'El miedo viaja en audios de un minuto…'],
    }),
    rules: [[BP, 'Ante un rumor, investiga qué dice y qué efecto tiene; no persigas a quienes lo reenvían.']],
    mirada: {
      ve: 'Un audio de WhatsApp en una ciudad mediana llega en horas a todas las familias. Para responder bien hay que saber qué dice, qué parte es cierta y qué miedo está tocando.',
      visual: { tipo: 'flujo', titulo: 'Cómo viaja un audio', pasos: ['Número desconocido', 'Grupo de padres del colegio', 'Grupos de la planta', 'Familias', 'Garita'] },
    },
  },
  {
    id: 'f2', t: '08:30', ch: 'documento', who: null, titulo: 'Lo falso y lo cierto', banner: 'assets/esc/lupa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'confianza'],
    body: () => `<p>Jhon transcribió los tres audios en una hoja. Silvia pidió que, antes de escribir una sola línea del comunicado, <mark class="clave">marques lo que es falso</mark>: el comunicado solo puede decir lo que es cierto.</p>`,
    type: 'flag', prompt: 'Marca las afirmaciones falsas o que no puedes confirmar.',
    doc: { t: 'Transcripción de audios · sábado y domingo', sub: 'Preparada por Jhon · uso interno' },
    lines: [
      { id: 'despido', t: '«La empresa va a botar a todos los que paren, ya tienen la lista.»', bad: LEY, why: 'Falso: el despido por participar en actividades sindicales es nulo (D.S. 003-97-TR, art. 29).' },
      { id: 'service', t: '«Vienen 200 de una service de Arequipa para reemplazarnos.»', bad: LEY, why: 'Falso: la empresa no puede sustituir a los huelguistas (D.S. 019-2006-TR, art. 25.9) y no hay ninguna contratación de ese tipo.' },
      { id: 'pago', t: '«Los días de huelga no se pagan.»' },
      { id: 'mantenimiento', t: '«Mantenimiento ya firmó un aumento de S/ 8.»', bad: BP, why: 'No es cierto: mantenimiento tendrá su propia negociación. Repetirlo, aunque sea para desmentirlo, le da más vida.' },
      { id: 'minimos', t: '«Habrá gente adentro cuidando el horno, eso lo acordó el sindicato.»' },
      { id: 'cierre', t: '«Si hay huelga, la fundición cierra para siempre.»', bad: BP, why: 'Nadie puede afirmarlo. Es un miedo, no un hecho, y la empresa no debe alimentarlo.' },
      { id: 'cutipa', t: '«Cutipa ya se vendió, por eso aceptó los servicios mínimos.»', bad: BP, why: 'No hay ningún hecho que lo respalde. Es un ataque al dirigente con el que necesitas cerrar un acuerdo.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: missLey ? -3 : 3, confianza: q === 'buena' ? 2 : 0 },
        flags: missLey ? [] : ['falso_separado'],
        cartera: { audios: q === 'buena' ? 'Clasificados: 2 cosas ciertas, 5 falsas o sin base' : 'Clasificados a medias' },
        out: q === 'buena' ? 'Dos afirmaciones ciertas y cinco que no. Silvia lo resume así: «Diremos las dos ciertas, desmentiremos con hechos las dos legales, y no repetiremos las otras».' : 'Dejas pasar un rumor como si fuera posible. Si el comunicado lo menciona a medias, lo confirmas sin querer.',
        pro: { ok: 'Saber qué es cierto te permite responder sin mentir y sin amplificar.', risk: 'Desmentir un rumor repitiéndolo a veces lo hace más fuerte.', info: 'Lo cierto también tranquiliza: los servicios mínimos ya están acordados.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Hechos separados del miedo!' : 'Ojo: algo se te pasó…'],
      };
    },
    rules: [[LEY, 'D.S. 003-97-TR, art. 29: nulidad del despido por actividad sindical.'], [LEY, 'D.S. 019-2006-TR, art. 25.9: prohibición de sustituir a trabajadores en huelga.']],
    mirada: {
      ve: 'No todos los rumores se desmienten igual. Los que tocan derechos se responden con la ley; los que son puro miedo, no se repiten. Y lo que es cierto se dice sin rodeos.',
      visual: { tipo: 'balanza', a: { t: 'Falso o sin base', items: ['Despidos masivos', 'Service de Arequipa', 'Mantenimiento firmó S/ 8', 'Cierre definitivo', 'Cutipa se vendió'] }, b: { t: 'Cierto', items: ['Los días de huelga no se pagan', 'Hay servicios mínimos acordados'] } },
    },
  },
  {
    id: 'f3', t: '09:50', ch: 'presencial', who: 'gerencia', titulo: 'La respuesta del gerente', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Gerencia General', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>El gerente escuchó los audios en su camioneta. Está pálido. ${F.has('bono_leales') ? '«Ya anunciamos el bono para los que no paren. Ahora hay que reforzarlo.»' : '«Esto se nos fue de las manos.»'}</p><p>«Quiero responder hoy, con fuerza. <mark class="clave">Que la gente sepa que el que para, pierde</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un comunicado de preguntas y respuestas, firmado por Relaciones Laborales: qué pasa con el sueldo, el empleo, los servicios mínimos y la negociación. Sin advertencias.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, cumplimiento: 3 }, rel: { gerencia: 0 }, flags: ['comunicado_hechos'], cartera: { comunicado: 'Preguntas y respuestas, sin advertencias' },
          out: 'El gerente duda. «¿No es muy blando?» Le dices que lo duro es la verdad: los días no se pagan. Lo demás, no. «Ya. Pero que salga antes de las doce.»',
          pro: { ok: 'Respondes al miedo con información, no con más miedo.', risk: 'El gerente puede sentir que no «marcaste posición».', info: 'Ponlo en los murales del comedor y en la garita, no solo en el correo.' },
          kusi: ['feliz', 'Lo firme es lo cierto. ¡Bien!'] } },
      { id: 'b', label: 'Proponerle que grabe él mismo un audio, en su voz, explicando que nadie será despedido.',
        res: { q: 'aceptable', fx: { confianza: 2, calidad: -1 }, flags: ['audio_gerente'], cartera: { comunicado: 'Audio del gerente' },
          out: 'El gerente graba tres veces. En la tercera se le escapa: «…y el que quiera parar, que piense en su familia». Se viraliza esa frase, no la otra.',
          pro: { ok: 'Una voz con autoridad puede calmar.', risk: 'Un audio sin guion, en caliente, es tan fácil de malinterpretar como los que querías desmentir.' },
          kusi: ['sorpresa', 'Esa última frase…'] } },
      { id: 'c', label: 'Redactar lo que pide: «La empresa respeta el derecho de huelga, pero quien pare asumirá las consecuencias en su evaluación anual».',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -6, confianza: -3 }, rel: { gerencia: 1 }, flags: ['comunicado_amenaza'], cartera: { comunicado: 'Con advertencia sobre la evaluación anual' },
          out: 'El comunicado sale a las 11:00. A las 11:20, Cutipa lo tiene impreso y subrayado. A las 11:30, Silvia te llama sin saludar.',
          pro: { ok: 'Cumples lo que pidió el gerente.', risk: 'Atar la evaluación anual a la huelga es presionar contra un derecho: es material para una inspección (D.S. 019-2006-TR, art. 25.10).' },
          kusi: ['indignado', '¡Eso es una amenaza con corbata!'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.10: actos que afecten la libertad sindical.'], [BP, 'En crisis, comunica hechos y derechos; evita las advertencias.']],
    mirada: {
      ve: 'Cuando el miedo se extiende, la gerencia quiere responder con fuerza. Pero en una huelga, la fuerza de la empresa está en ser la fuente más confiable de información, no la más amenazante.',
      visual: { tipo: 'cambio', titulo: 'De la advertencia a la información', pares: [['«El que para, pierde»', '«Los días de huelga no se pagan»'], ['«Asumirá las consecuencias»', '«Nadie puede ser despedido por hacer huelga»'], ['Audio en caliente', 'Preguntas y respuestas por escrito']] },
    },
  },
  {
    id: 'f4', t: '11:00', ch: 'whatsapp', who: null, titulo: 'El comunicado', banner: 'assets/foto2/presentacion.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('comunicado_amenaza') ? 'El comunicado con la advertencia ya salió. Lo único que puedes hacer es una segunda versión para los murales, más clara.' : F.has('audio_gerente') ? 'El audio del gerente ya circula. Necesitas algo por escrito que ordene todo.' : 'El gerente aprobó el formato de preguntas y respuestas.'}</p><p>Cuatro preguntas, cuatro respuestas. <mark class="clave">Que se entienda en el comedor</mark>.</p>`,
    type: 'compose', enviaA: 'personal', para: 'Para: Todo el personal · murales, correo y supervisores', boton: 'Publicar el comunicado',
    prompt: 'Elige una respuesta para cada pregunta.',
    slots: [
      { id: 'empleo', t: '¿Me pueden despedir si hago huelga?', ops: [
        { id: 'e1', t: 'No. Nadie puede ser despedido por participar en una huelga.', ok: true, por: 'Claro y cierto (LPCL, art. 29).' },
        { id: 'e2', t: 'Depende de cómo se desarrolle la medida.', ok: false, por: 'La ambigüedad alimenta el miedo.' },
      ] },
      { id: 'sueldo', t: '¿Me pagan los días de huelga?', ops: [
        { id: 's1', t: 'No. Durante una huelga válida, el contrato de quien la acata se suspende y esos días no se pagan. Tu empleo sigue.', ok: true, por: 'Dice lo duro sin esconderlo, y lo que no cambia.' },
        { id: 's2', t: 'Piensa bien cuánto pierde tu familia.', ok: false, por: 'Una frase emocional que suena a presión.' },
      ] },
      { id: 'reemplazo', t: '¿Van a traer gente de afuera?', ops: [
        { id: 'r1', t: 'No. La empresa no reemplazará a nadie. Solo trabajará el personal de servicios mínimos acordado con el sindicato, para la seguridad del horno, los gases, la energía y el agua.', ok: true, por: 'Desmiente con un hecho verificable.' },
        { id: 'r2', t: 'La empresa tomará las medidas necesarias para operar.', ok: false, por: 'Justo lo que el rumor quiere oír.' },
      ] },
      { id: 'mesa', t: '¿Se sigue negociando?', ops: [
        { id: 'm1', t: 'Sí. Hoy a las 16:00 hay reunión con el sindicato. La empresa seguirá buscando un acuerdo, haya o no huelga.', ok: true, por: 'Muestra que la puerta sigue abierta.' },
        { id: 'm2', t: 'Eso depende del sindicato.', ok: null, por: 'Culpa a la otra parte; no informa.' },
      ] },
    ],
    res: sel => {
      const malo = ['e2', 's2', 'r2'].some(x => Object.values(sel).includes(x));
      const buenas = ['e1', 's1', 'r1', 'm1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : -2, personas: q === 'buena' ? 4 : -2, cumplimiento: malo ? -3 : 3 },
        flags: q === 'buena' ? ['comunicado_hechos'] : [],
        cartera: { comunicado: q === 'buena' ? 'Publicado: empleo, sueldo, reemplazos y mesa' : 'Publicado con frases ambiguas' },
        out: q === 'buena' ? 'A la una, un operador lo fotografía en el mural del comedor y lo sube al grupo del turno C con un comentario: «Por lo menos esto es claro».' : 'El comunicado se lee como más de lo mismo. En los grupos lo pegan al lado de los audios, como si dijeran lo mismo.',
        pro: { ok: 'Un comunicado de preguntas y respuestas responde al miedo en el idioma del miedo.', risk: 'Una sola respuesta ambigua confirma el rumor que querías apagar.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Claro como el agua de Ilo!' : 'Esa ambigüedad le da la razón al audio…'],
      };
    },
    rules: [[LEY, 'D.S. 003-97-TR, art. 29: nulidad del despido por actividad sindical.'], [LEY, 'D.S. 019-2006-TR, art. 25.9: prohibición de sustituir a huelguistas.']],
    mirada: {
      ve: 'La gente no lee comunicados largos: busca respuesta a su miedo. Si el comunicado responde «¿me botan?», «¿me pagan?» y «¿me reemplazan?», le quita aire al rumor.',
      visual: { tipo: 'mensaje', titulo: 'Preguntas y respuestas', txt: '¿Me pueden despedir si hago huelga? No. ¿Me pagan los días de huelga? No: el contrato se suspende y esos días no se pagan; tu empleo sigue. ¿Van a traer gente de afuera? No. Solo trabajará el personal de servicios mínimos acordado. ¿Se sigue negociando? Sí, hoy a las 16:00.' },
    },
  },
  {
    id: 'f5', t: '13:30', ch: 'documento', who: null, titulo: 'Por dónde llega', banner: 'assets/foto2/collage.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>Almuerzas un picante de mariscos frente a la computadora. El correo corporativo lo leen los de oficina. Los operadores, no. Comunicaciones internas te ofrece seis canales para la tarde.</p><p><mark class="clave">Elige tres</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres canales para que el comunicado llegue a la base.', boton: 'Usar estos', resumen: 'Usarás',
    cols: ['Canal', 'A quién llega'],
    rows: [
      { id: 'turno', cells: ['Charla de cinco minutos en el cambio de turno de las 15:00, en la garita', 'A los operadores, cara a cara'] },
      { id: 'murales', cells: ['Murales del comedor y de los vestuarios', 'A todos los que comen y se cambian'] },
      { id: 'supervisores', cells: ['Grupo de supervisores, con el texto exacto para leer', 'A cada cuadrilla, con una sola versión'] },
      { id: 'radio', cells: ['Aviso pagado en la radio local', 'A las familias de Ilo'] },
      { id: 'facebook', cells: ['Responder comentarios en el Facebook «Ilo al Día»', 'A la ciudad, en la pelea pública'] },
    ],
    score: { turno: 3, murales: 2, supervisores: 3, radio: 0, facebook: -3 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0, confianza: picks.includes('facebook') ? -3 : 1 },
        flags: q === 'buena' ? ['canales_cercanos'] : [],
        cartera: { canales: q === 'buena' ? 'Cambio de turno, murales y supervisores con texto único' : 'Canales lejanos o riesgosos' },
        out: picks.includes('turno') ? 'A las 15:00, en la garita, lees el comunicado frente a sesenta operadores. Nadie aplaude. Pero un señor mayor te pregunta en voz baja: «¿Entonces no me botan?». «No», le dices. Asiente y se va.' : 'El comunicado está en todas partes, menos donde la gente conversa.',
        pro: { ok: 'Cara a cara y con una sola versión: así compite la información con los audios.', risk: 'Pelear en Facebook te mete en una conversación que no controlas.', info: 'Las familias también escuchan: a veces el mejor canal es el que llega a casa.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Donde la gente está!' : '¿Ese canal llega a la base?'],
      };
    },
    rules: [[BP, 'En crisis, usa canales cercanos y una sola versión del mensaje.']],
    mirada: {
      ve: 'El mejor comunicado no sirve si no llega. En una planta, la información viaja por el cambio de turno, el comedor y el supervisor directo. Ahí tiene que estar la voz de la empresa.',
      visual: { tipo: 'matriz', x: 'Alcance', y: 'Confianza que genera', cuadrantes: ['Úsalo', 'Úsalo con cuidado', 'Complemento', 'Evítalo'], items: [['Cambio de turno', .5, .9], ['Supervisores con texto', .75, .7], ['Murales', .6, .55], ['Radio local', .85, .4], ['Facebook', .9, .1]] },
    },
  },
  {
    id: 'f6', t: '16:30', ch: 'presencial', who: 'sindicato', titulo: 'El audio contra Cutipa', banner: 'assets/foto2/tension.webp', lugar: 'Sala de capacitación', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>La reunión de las 16:00 avanza poco. El sindicato baja a S/ 8 y un bono por cierre de S/ 2,000; tú ofreces la movilidad de madrugada. ${F.has('oferta_todo') ? 'Ya no tienes margen económico.' : 'Guardas el resto del margen.'} No hay acuerdo: la huelga va mañana.</p><p>Al final, Cutipa se queda. «El tercer audio dice que me vendí. Mi hija lo escuchó en el colegio.» Se le quiebra la voz un segundo. <mark class="clave">¿Qué haces?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle que la empresa diga públicamente que los servicios mínimos se acordaron por seguridad, con argumentos técnicos, y que no hubo ningún pago ni acuerdo oculto con nadie.',
        res: { q: 'buena', fx: { confianza: 5, etica: 4, personas: 3 }, rel: { sindicato: 1 }, flags: ['desmentido_conjunto'],
          out: 'Cutipa te mira largo. «¿Por qué haría eso la empresa?» Le dices que porque es verdad, y porque necesitas un dirigente que pueda firmar. Asiente. «No le voy a dar las gracias. Pero me acordaré.»',
          pro: { ok: 'Proteger la legitimidad del dirigente con el que negocias es proteger el acuerdo.', risk: 'El gerente puede pensar que estás defendiendo al sindicato.', info: 'Agrégalo al mural como una línea más del comunicado, sin nombrarlo.' },
          kusi: ['celebra', '¡Eso es negociar a largo plazo!'] } },
      { id: 'b', label: 'Decirle que lo sientes, pero que la empresa no puede meterse en los asuntos internos del sindicato.',
        res: { q: 'aceptable', fx: { confianza: 1, etica: 1 },
          out: 'Cutipa asiente sin mirarte. «Ya.» Mañana, para demostrar que no se vendió, tendrá que ser el más duro del piquete.',
          pro: { ok: 'Respetas la autonomía sindical.', risk: 'Desmentir un hecho falso sobre la empresa no es meterse en el sindicato.' },
          kusi: ['pensando', 'Neutral… pero el audio también habla de la empresa.'] } },
      { id: 'c', label: 'No decir nada: un dirigente con su base dividida podría aceptar menos.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -3 }, rel: { sindicato: -1 }, flags: ['cutipa_expuesto'],
          out: 'Cutipa se va sin despedirse. Esa noche, en asamblea, pide a gritos «huelga hasta el final». Nadie vuelve a decir que se vendió.',
          pro: { ok: 'Ninguno real.', risk: 'Un dirigente debilitado no acepta menos: se endurece para sobrevivir.' },
          kusi: ['triste', 'Un dirigente acorralado no firma nada…'] } },
    ],
    rules: [[BP, 'Un dirigente legítimo es condición para un acuerdo que la base acepte.']],
    mirada: {
      ve: 'Parece contraintuitivo, pero a la empresa le conviene un dirigente fuerte: solo quien tiene la confianza de su base puede firmar un acuerdo razonable y hacerlo cumplir.',
      visual: { tipo: 'balanza', a: { t: 'Dirigente debilitado', items: ['Se endurece para no parecer vendido', 'La base desconfía de cualquier acuerdo', 'El conflicto se alarga'] }, b: { t: 'Dirigente legítimo', items: ['Puede explicar un acuerdo', 'La base le cree', 'El convenio se cumple'] } },
    },
  },
  {
    id: 'f7', t: '18:10', ch: 'llamada', who: null, titulo: 'La radio', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'calidad', 'etica'],
    body: () => `<p>La radio local ha llamado tres veces. El programa de la noche, el más escuchado del puerto, quiere la versión de la empresa antes de la huelga. El gerente dice que hables tú.</p><p><mark class="clave">Escucha antes de salir al aire</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Marleny Quispe · Sindicato de mantenimiento', 'Contesta en su casa', '«Si va a la radio, diga que mantenimiento no firmó nada. Me están insultando en la calle.»'],
      ['Dra. Silvia Medina · Legal', 'Contesta manejando', '«Tres frases, y ninguna sobre el sindicato. Lo que digas en la radio lo va a repetir el sindicato mañana en la garita.»'],
      ['Productora de la radio', 'Contesta con la cortina musical de fondo', '«Estamos al aire en dos minutos. El secretario general ya habló. ¿Qué dice la empresa?»'],
    ],
    prompt: 'Estás al aire. ¿Qué dices?',
    choices: [
      { id: 'a', label: '«La empresa respeta el derecho de huelga. Nadie será despedido ni reemplazado. Hay servicios mínimos acordados para la seguridad y seguimos buscando un acuerdo.»',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, flags: ['radio_hechos'], cartera: { radio: 'Declaración breve y de hechos' },
          out: 'El conductor insiste: «¿Y cuánto ofrecen?». Le dices que los números se conversan en la mesa. Al colgar, Jhon te escribe: «Mi mamá dice que sonó tranquila».',
          pro: { ok: 'Tres frases de hechos bajan la temperatura de toda la ciudad.', risk: 'Te pedirán números; no los des fuera de la mesa.' },
          kusi: ['feliz', '¡Serena y clara al aire!'] } },
      { id: 'b', label: '«La huelga no tiene sentido: la empresa ofreció una propuesta seria y el sindicato no quiere escuchar.»',
        res: { q: 'riesgosa', fx: { confianza: -4, etica: -2 }, rel: { sindicato: -1 }, flags: ['radio_ataque'], cartera: { radio: 'Declaración contra el sindicato' },
          out: 'El conductor sonríe: tiene programa. Cutipa pide la palabra en la misma línea y responde durante cinco minutos. La ciudad escucha una pelea.',
          pro: { ok: 'Defiendes la posición de la empresa.', risk: 'Descalificar al sindicato en la radio la víspera de la huelga endurece a la base y a sus familias.' },
          kusi: ['preocupado', 'Eso fue echarle leña al fuego…'] } },
      { id: 'c', label: '«La empresa no va a declarar.»',
        res: { q: 'aceptable', fx: { confianza: -2 },
          out: 'El conductor dice: «La empresa prefirió no hablar». En Ilo, el silencio se lee como que hay algo que esconder.',
          pro: { ok: 'No te expones.', risk: 'Si no hablas, el único relato de la noche será el del sindicato y el de los audios.' },
          kusi: ['pensando', 'El silencio también comunica…'] } },
    ],
    rules: [[BP, 'Con la prensa: pocas frases, hechos verificables y nada contra la contraparte.']],
    mirada: {
      ve: 'En una ciudad donde casi todas las familias tienen a alguien en la fundición, la radio de la noche es parte del conflicto. Lo que digas ahí llega a la mesa del comedor de cada casa.',
      visual: { tipo: 'cambio', titulo: 'Hablar en la radio', pares: [['«La huelga no tiene sentido»', '«Respetamos el derecho de huelga»'], ['«No vamos a declarar»', '«Nadie será despedido ni reemplazado»'], ['Números al aire', '«Los números, en la mesa»']] },
    },
  },
];
