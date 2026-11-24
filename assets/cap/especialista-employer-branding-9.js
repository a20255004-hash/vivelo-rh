// Analista de Comunicación Interna y Employer Branding · Capítulo 9 · «El comentario» · Semana 2, jueves.
// Hilo de las dos semanas: lo que dices afuera debe ser verdad adentro. Hoy una excolaboradora pone a prueba todo lo que dijiste.
// Normas citadas (texto oficial en docs/normas/txt):
// - Constitución Política del Perú, art. 2 inc. 4 (libertades de opinión y expresión). Archivo: Constitucion-Politica-del-Peru-1993.txt
// - Ley 29733: art. 6 (finalidad), art. 7 (proporcionalidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 007-2002-TR: art. 9 (sobretiempo acreditado aun sin orden expresa: procede su pago). Archivo: DS-007-2002_LP.txt

export const CAP = {
  n: 9, titulo: 'El comentario', dia: 'Semana 2, jueves', foto: 'assets/foto2/tension.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, piso 9',
  inicio: '07:40', fin: '19:30', cierreHora: '19:10',
  apertura: 'Jueves, 7:30. Kiara te manda un enlace con tres signos de exclamación. Rocío Paredes, excajera del banco, publicó un video: «Trabajé tres años en Banco Andino. Salía a las ocho y nunca me pagaron una hora extra. Y ahora veo su campaña…». Tiene 60,000 vistas.', boton: 'Ver el video',
  kusi: 'Responder en redes es responder a una persona, aunque te lean miles. ¡Calma y verdad!',
  lead: 'Averiguaste qué había de cierto antes de responder, frenaste una respuesta que exponía datos de Rocío, convenciste a Marco y a Legal de no borrar nada, le escribiste a ella como a una persona, cuidaste a tus embajadores y publicaste una respuesta que reconoce y compromete.',
  reflexion: '¿Qué le responderías tú a alguien que dice en público una verdad incómoda sobre tu empresa?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'video', p: 'Video de Rocío Paredes', j: 'Tú · Fiorella · Marco · Legal', d: 8, e: '60,000 vistas y subiendo' },
  { id: 'embajadores', p: 'Embajadores en los comentarios', j: 'Tú', d: 8, e: 'Jhoselyn mencionada' },
  { id: 'cuadre', p: 'Sobretiempo en agencias', j: 'Renzo · Operaciones', d: 8, e: 'En revisión' },
  { id: 'medir', p: 'Resultados de la campaña', j: 'Tú · Marco', d: 8, e: 'Mañana' },
];

export const FUTURO = {
  respuesta_humana: ['La respuesta pública reconoció el problema y dijo qué se está haciendo.', 'El video de Rocío tuvo una segunda parte. Capítulo 10.'],
  respuesta_fria: ['La respuesta pública fue institucional y fría.', 'Los comentarios siguieron creciendo.'],
  contenido_borrado: ['El banco pidió retirar el video.', 'Apareció una captura del pedido. Capítulo 10.'],
  rocio_contactada: ['Le escribiste a Rocío en privado, sin pedirle nada a cambio.', 'Te respondió. Capítulo 10.'],
  jhoselyn_protegida: ['Acompañaste a Jhoselyn cuando la atacaron en los comentarios.', 'Ella decidió no borrar su testimonio.'],
  jhoselyn_sola: ['Jhoselyn enfrentó sola los comentarios.', 'Pidió retirar su testimonio.'],
  compromiso_publico: ['El banco se comprometió en público a revisar y pagar el sobretiempo acreditado.', 'Ahora hay que cumplirlo. Semana 3.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  renzo: { n: 'Renzo Salas', sub: 'Relaciones Laborales', c: '#4A5568' },
  rocio: { n: 'Rocío Paredes', sub: 'Excajera · mensaje privado en LinkedIn', c: '#9B2C2C' },
  embajadores: { n: 'Embajadores Andino', sub: '8 voluntarios y tú', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'equipo', t: '07:32', de: 'Kiara', txt: 'Ya son 60 mil vistas 😰 Y al final del video sale la foto de Jhoselyn de nuestra campaña.' },
  { chat: 'equipo', t: '07:45', de: 'Kiara', txt: 'Y ojo: en los comentarios alguien subió la captura del correo de las reseñas de cinco estrellas con vale de cine 😬', si: 'resenas_compradas' },
  { chat: 'equipo', t: '07:46', de: 'Kiara', txt: 'Y otro dice que «ahora el banco revisa nuestros grupos de WhatsApp» 😬', si: 'grupos_vigilados' },
  { chat: 'marco', t: '08:10', de: 'Marco', txt: 'Hay que bajar ese video YA. Legal puede pedirle a la plataforma que lo retire.' },
  { chat: 'jhoselyn', t: '10:20', de: 'Jhoselyn', txt: 'Señorita, me están diciendo «vendida» en los comentarios. Mi prima me mandó capturas. No sé qué hacer 😞' },
  { chat: 'embajadores', t: '12:10', de: 'Wilson', txt: 'Lo que dice Rocío es verdad, eh. Yo también salía tarde en Ate. Pero también es verdad lo de Jhoselyn. Las dos cosas.' },
  { chat: 'rocio', t: '19:00', de: 'Rocío', txt: 'No esperaba que me escribieran sin abogado. Gracias. Lo voy a pensar.', si: 'rocio_contactada' },
];

export const CORREOS = [
  { t: '08:20', de: 'Gabriela Soto · Gerencia General', para: 'Fiorella Chávez; Comunicación Interna; Marketing; Legal', asunto: 'Video viral', html: '<p>El Sr. Bellido vio el video. Pide una propuesta de respuesta antes del mediodía. Dice textualmente: «Que no parezca que nos defendemos de algo que es verdad».</p>' },
  { t: '16:30', de: 'Renzo Salas · Relaciones Laborales', para: 'Fiorella Chávez; Comunicación Interna', asunto: 'Sobretiempo · avance', html: '<p>Gerencia aprobó hoy revisar el sobretiempo acreditado por marcaciones en las 31 agencias y pagar lo que corresponda. El registro del cuadre empieza el lunes. Ya pueden decirlo.</p>' },
];

export const QUIZ = [
  { q: 'Una excolaboradora publica una crítica viral que en parte es verdad. Lo primero es…', ops: ['Pedir que la retiren', 'Averiguar qué hay de cierto y qué se está haciendo', 'Responder que es falsa', 'Ignorarla'], ok: 1, por: 'Antes de responder, hay que saber qué es verdad. Si lo es, la respuesta tiene que reconocerlo.' },
  { q: 'Marketing propone responder: «Según nuestros registros, tuviste tres llamadas de atención». Eso…', ops: ['Defiende al banco con datos', 'Usa datos de su legajo para otra finalidad y la expone', 'Es lo más transparente', 'Es obligatorio'], ok: 1, por: 'Los datos de su relación laboral se recopilaron para gestionar esa relación, no para defenderse en redes (Ley 29733, art. 6).' },
  { q: 'Pedir a la plataforma que retire un video que critica a la empresa con hechos verificables…', ops: ['Es lo recomendable', 'Suele empeorar la crisis y choca con la libertad de expresión', 'Es obligatorio', 'No tiene ningún riesgo'], ok: 1, por: 'La libertad de opinión y expresión está reconocida en la Constitución (art. 2 inc. 4). Y el pedido de retiro suele hacerse público.' },
  { q: 'Una embajadora es atacada en los comentarios. Lo correcto es…', ops: ['Pedirle que responda defendiendo al banco', 'Acompañarla, ofrecerle opciones y respetar lo que decida, incluso retirar su testimonio', 'Borrar los comentarios', 'Ignorarlo: ella aceptó participar'], ok: 1, por: 'Ella aceptó contar su historia, no ser escudo del banco.' },
  { q: 'El sobretiempo acreditado que nadie ordenó por escrito…', ops: ['No se paga', 'Se entiende otorgado tácitamente y procede su pago', 'Se compensa con un vale', 'Solo se paga si lo reclama un juez'], ok: 1, por: 'El art. 9 del D.S. 007-2002-TR dice que se entiende otorgado tácitamente y procede el pago.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:30', ch: 'presencial', who: 'fiorella', titulo: 'Antes de responder', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de Experiencia del Colaborador', show: ['calidad', 'tiempo'],
    body: () => `<p>Fiorella reúne a Renzo, a alguien de Legal y a ti alrededor del sofá naranja. Marco llama por altavoz, desde su auto.</p><p>«Tenemos hasta el mediodía. <mark class="clave">¿Qué necesitas saber antes de escribir una palabra?</mark>»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para la sala.',
    opts: [
      { id: 'cierto', label: 'A Renzo: «¿Lo que dice Rocío es verdad?»', info: '«En lo central, sí. Sus marcaciones en Ate muestran salidas promedio de 7:40 durante años. Y no se le pagó sobretiempo. Igual que a muchos.»' },
      { id: 'hace', label: 'A Renzo: «¿Qué se está haciendo hoy?»', info: '«Operaciones repuso ventanillas y Gerencia evalúa hoy revisar y pagar el sobretiempo acreditado. Si se aprueba, se puede decir.»' },
      { id: 'legajo', label: 'A Legal: «¿Qué dice su legajo? ¿Tuvo problemas?»', info: 'Legal se incomoda. «Tuvo amonestaciones por tardanzas. Pero eso no tiene nada que ver con su video y no se puede usar para responderle.» Te quedas con un dato que no debiste pedir.' },
      { id: 'borrar', label: 'A Marco: «¿Se puede pedir que lo retiren?»', info: '«Se puede pedir a la plataforma», dice Marco. Legal lo corta: «Podemos pedirlo, pero no hay ninguna base: no difama, cuenta su experiencia. Y si se sabe, es peor».' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('cierto') || picks.includes('hace') ? 3 : 0, etica: picks.includes('legajo') ? -3 : 1, tiempo: -1 },
      out: picks.includes('cierto') && picks.includes('hace') ? 'Tienes lo que necesitas: lo que es verdad y lo que se está haciendo. Fiorella resume: «Entonces no nos defendemos. Reconocemos».' : 'Sabes algo más, aunque no todo lo que necesitas para responder bien.',
      kusi: picks.includes('legajo') ? ['preocupado', 'Su legajo no es tu tema.'] : ['pensando', 'Primero, qué es verdad.'],
    }),
    rules: [[BP, 'Antes de responder una crítica: qué es verdad, qué se está haciendo y qué no se puede decir.']],
    mirada: {
      ve: 'La reacción natural de una empresa ante una crítica viral es defenderse. Pero si lo que se dice es verdad, defenderse es lo peor que se puede hacer. Por eso la primera pregunta no es «cómo respondemos», sino «qué hay de cierto».',
      visual: { tipo: 'flujo', titulo: 'Antes de escribir', pasos: ['¿Es verdad?', '¿Qué se está haciendo?', '¿Qué no se puede decir?', 'Recién entonces, responder'], aqui: 0 },
    },
  },
  {
    id: 'i2', t: '09:30', ch: 'documento', who: null, titulo: 'La respuesta de Marketing', banner: 'assets/foto/mesa-papeles.webp', show: ['etica', 'cumplimiento', 'calidad'],
    body: () => `<p>Marketing manda un borrador de respuesta pública para comentar debajo del video. Lo escribió alguien de la agencia de redes, a las 6 de la mañana.</p><p>Lo lees con el estómago apretado. <mark class="clave">Hay frases que harían explotar todo</mark>.</p>`,
    type: 'flag', prompt: 'Marca las frases que son un riesgo legal o una mala práctica.',
    doc: { t: 'Respuesta pública · borrador', sub: 'Agencia de redes · para comentar en el video' },
    lines: [
      { id: 'lamenta', t: '«Lamentamos tu experiencia, Rocío. En Banco Andino valoramos a nuestra gente.»', bad: BP, why: 'Es la misma frase copiada que ya circula en capturas. Suena a robot.' },
      { id: 'legajo', t: '«Según nuestros registros, tuviste llamadas de atención por tardanzas durante tu permanencia.»', bad: LEY, why: 'Usa datos de su legajo para una finalidad distinta: defenderse en público (Ley 29733, art. 6). Y la convierte en víctima.' },
      { id: 'falso', t: '«La información difundida no se ajusta a la realidad.»', bad: BP, why: 'Renzo acaba de confirmar que en lo central es verdad. Esta frase se desmiente en una captura.' },
      { id: 'priv', t: '«Nos gustaría conversar contigo directamente, si tú quieres.»' },
      { id: 'legal', t: '«Nos reservamos el derecho de iniciar las acciones legales correspondientes.»', bad: LEY, why: 'Amenazar a alguien por contar su experiencia choca con su libertad de expresión (Constitución, art. 2 inc. 4) y multiplica el video.' },
      { id: 'hace', t: '«Estamos revisando cómo se registra el tiempo de cierre en nuestras agencias.»' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Se te pasa una frase peligrosa. Fiorella la ve a tiempo, pero te dice: «Esa sola línea nos hundía».' : `Marcas ${hitsLey} riesgos legales y dos frases que se desmienten solas. Del borrador rescatas lo único humano: «nos gustaría conversar contigo, si tú quieres» y lo que se está revisando.`,
      fx: { cumplimiento: missLey ? -4 : 5, etica: missLey ? -2 : 4 },
      cartera: { video: missLey ? 'Borrador con un riesgo grave' : 'Borrador limpio: sin legajo, sin amenazas, sin negar' },
      pro: { ok: 'No usas lo que sabes de ella contra ella, ni la amenazas, ni niegas lo que es verdad.', risk: 'Una respuesta que expone el legajo de una excolaboradora sería el tema del día siguiente.' },
      kusi: missLey ? ['preocupado', 'Esa línea era una bomba.'] : ['indignado', '¿Sacar su legajo en público? ¡Jamás!'],
    }),
    rules: [[LEY, 'Los datos de la relación laboral no se usan para otra finalidad (Ley 29733, art. 6).'], [LEY, 'Toda persona tiene libertad de opinión y expresión (Constitución, art. 2 inc. 4).']],
    mirada: {
      ve: 'Cuando una empresa se siente atacada, busca en sus archivos algo para responder. Pero lo que sabes de una persona porque trabajó contigo no te pertenece para defenderte. Y una respuesta que ataca a quien critica le da la razón frente a miles.',
      visual: { tipo: 'cambio', titulo: 'De la defensa al reconocimiento', pares: [['«Valoramos a nuestra gente»', 'Lo que cuentas pasó y lo estamos corrigiendo'], ['«Tuviste llamadas de atención»', '(nada de su legajo)'], ['«Acciones legales»', '«Nos gustaría conversar contigo, si quieres»']] },
      normas: [{ ley: 'Ley 29733, art. 6', dice: 'Los datos personales deben ser recopilados para una finalidad determinada, explícita y lícita, y su tratamiento no debe extenderse a otra finalidad.', practica: 'Las amonestaciones de Rocío se registraron para gestionar su relación laboral, no para responderle en un video.' }],
    },
  },
  {
    id: 'i3', t: '11:00', ch: 'presencial', who: 'gerente', titulo: '«Bájenlo»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de directorio, piso 14', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Marco llega agitado. «Cada minuto que el video está arriba nos cuesta. ${F.has('resenas_compradas') ? 'Y encima ya circula la captura del correo de las reseñas. ' : ''}<mark class="clave">Pidamos que lo retiren</mark> y respondamos con algo corto.»</p><p>Fiorella te mira. Gabriela, de Gerencia General, toma nota.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No pedir retiro. Responder en público reconociendo lo que es verdad y lo que se está haciendo, y escribirle a Rocío en privado, sin pedirle nada.',
        res: { q: 'buena', fx: { etica: 5, confianza: 3 }, rel: { fiorella: 1 },
          out: 'Gabriela levanta la vista: «Es exactamente lo que pidió el señor Bellido: que no parezca que nos defendemos de algo que es verdad». Marco se sienta. «Ok. Pero que sea hoy.»',
          pro: { ok: 'Respondes al hecho, no a la persona.', risk: 'Reconocer en público tiene costo: hay que cumplir lo que se dice.', info: 'Antes de publicar, espera la confirmación de Renzo sobre el pago.' },
          kusi: ['celebra', '¡Reconocer! El camino difícil y el único que funciona.'] } },
      { id: 'b', label: 'Pedir el retiro a la plataforma y, mientras tanto, responder con una frase institucional corta.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -3 }, flags: ['contenido_borrado'],
          out: 'La plataforma no retira el video. Pero Rocío recibe la notificación y sube otro: «El banco intentó borrarme». A las 3, tiene 150,000 vistas.',
          pro: { ok: 'Intentas contener.', risk: 'Pedir que borren una crítica verdadera casi siempre la multiplica.' },
          kusi: ['triste', 'Ahora el tema es que intentaron borrarla.'] } },
      { id: 'c', label: 'No hacer nada en público: cualquier respuesta le da más visibilidad. Esperar a que pase.',
        res: { q: 'aceptable', fx: { tiempo: 2, confianza: -3 }, flags: ['respuesta_fria'],
          out: 'El video sigue creciendo, con un comentario repetido: «¿Y el banco no dice nada?». Dentro del banco, la gente de agencias espera una señal.',
          pro: { ok: 'No echas leña.', risk: 'Tu silencio lo leen afuera los postulantes y adentro las 2,000 personas que saben que es verdad.' },
          kusi: ['pensando', 'Adentro también están mirando.'] } },
    ],
    rules: [[BP, 'Ante una crítica verdadera: no borres, no ataques, reconoce y di qué estás haciendo.']],
    mirada: {
      ve: 'Lo que el banco responda no lo leerá solo Rocío: lo leerán los 214 estudiantes de ayer, los postulantes de diciembre y, sobre todo, los cajeros que saben que es verdad. Para ellos, esta respuesta vale más que toda la campaña.',
      visual: { tipo: 'matriz', x: 'Visibilidad del tema', y: 'Credibilidad del banco', cuadrantes: ['Silencioso y creíble', 'Visible y creíble', 'Silencioso y dudoso', 'Visible y dudoso'], items: [['Reconocer y actuar', .7, .85], ['Esperar en silencio', .4, .25], ['Pedir retiro', .95, .05]] },
    },
  },
  {
    id: 'i4', t: '12:30', ch: 'whatsapp', who: null, titulo: 'Un mensaje para Rocío', banner: 'assets/foto2/entrevista-cv.webp', show: ['personas', 'etica'],
    body: () => `<p>Le escribes a Rocío por mensaje privado. No eres Legal ni Relaciones Laborales: eres la persona que lleva dos semanas tratando de que el banco diga la verdad.</p><p><mark class="clave">No le pidas que borre nada</mark>.</p>`,
    type: 'compose', enviaA: 'rocio', para: 'Para: Rocío Paredes · mensaje privado', boton: 'Enviar',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'quien', t: 'Quién eres', ops: [
        { id: 'q1', t: 'Hola, Rocío. Trabajo en Comunicación Interna del banco. Vi tu video.', ok: true, por: 'Claro y sin esconderte.' },
        { id: 'q2', t: 'Hola, Rocío. Te escribo de parte del área legal y de la gerencia.', ok: false, por: 'Suena a amenaza, y no es verdad.' },
      ] },
      { id: 'reco', t: 'Qué reconoces', ops: [
        { id: 'r1', t: 'Lo que cuentas del cierre de caja pasó, y no solo a ti. Hoy se está revisando cómo se registra y cómo se paga.', ok: true, por: 'Reconoces y dices qué pasa.' },
        { id: 'r2', t: 'Entendemos que tu experiencia fue distinta a la de la mayoría.', ok: false, por: 'Minimiza lo que es un patrón.' },
      ] },
      { id: 'pide', t: 'Qué le ofreces', ops: [
        { id: 'p1', t: 'No te escribo para pedirte nada. Si quieres revisar tu caso de horas extras, te paso el contacto de Relaciones Laborales.', ok: true, por: 'Le ofreces un camino real, sin condiciones.' },
        { id: 'p2', t: 'Te agradeceríamos mucho si consideras retirar el video mientras lo resolvemos.', ok: false, por: 'Convierte el mensaje en una negociación.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.pide === 'p2' || sel.quien === 'q2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, etica: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1 },
        flags: q === 'riesgosa' ? [] : ['rocio_contactada'],
        cartera: { video: q === 'buena' ? 'Rocío contactada sin condiciones' : q === 'riesgosa' ? 'Mensaje a Rocío que suena a presión' : 'Rocío contactada' },
        out: q === 'buena' ? 'Rocío lo lee a las 12:40 y no responde. Pero a las 7 de la noche: «No esperaba que me escribieran sin abogado. Gracias. Lo voy a pensar».' : q === 'riesgosa' ? 'Rocío sube una captura de tu mensaje a su historia con la frase: «Así responden».' : 'Rocío lo lee y no responde. Está en su derecho.',
        pro: { ok: 'Le hablas como a una persona, le das un camino y no le pides nada.', risk: 'Cualquier mensaje privado puede hacerse público. Escríbelo pensando en eso.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Sin abogado y sin condiciones. ¡Así!' : 'Ese mensaje podía ser una captura.'],
      };
    },
    rules: [[LEY, 'Si el sobretiempo se acredita, aun sin orden expresa, procede su pago (D.S. 007-2002-TR, art. 9).'], [BP, 'Escribe cada mensaje privado como si mañana fuera público.']],
    mirada: {
      ve: 'Rocío no es una enemiga: es una excajera que cuenta lo que vivió, igual que Jhoselyn. La diferencia es que a una el banco la escuchó a tiempo y a la otra no. Escribirle sin pedirle nada es la única forma de que el mensaje no se convierta en otro video.',
      visual: { tipo: 'mensaje', titulo: 'A Rocío', txt: 'Hola, Rocío. Trabajo en Comunicación Interna del banco. Lo que cuentas del cierre de caja pasó, y no solo a ti. No te escribo para pedirte nada. Si quieres revisar tu caso de horas extras, te paso el contacto de Relaciones Laborales.' },
    },
  },
  {
    id: 'i5', t: '14:00', ch: 'llamada', who: null, titulo: 'Tus embajadores', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>En los comentarios del video, alguien escribió debajo de la foto de Jhoselyn: «Vendida». ${F.has('testimonio_honesto') ? 'Otros le responden: «Lee bien, ella dice que todavía falta».' : 'Nadie la defiende.'}</p><p>Llamas a tus embajadores para saber <mark class="clave">cómo están</mark>.</p>`,
    type: 'calls',
    calls: [['Jhoselyn · Comas', 'Contesta', 'Estoy en el baño, señorita. Me dicen vendida. Mi mamá no entiende nada. ¿Borro mi testimonio?'], ['Wilson · Ate', 'Contesta', 'Yo estoy bien. Lo de Rocío es verdad y lo de Jhoselyn también. Si quiere, digo eso en un comentario.'], ['Rosa · Huancayo', 'Contesta', 'Acá ni se enteraron, señorita. Pero si necesita algo, avise.'], ['Carlos · sede', 'No contesta']],
    prompt: 'Jhoselyn está mal y pregunta si borra su testimonio. Wilson ofrece comentar. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Decirle a Jhoselyn que no tiene que responder a nadie, que puede retirar su testimonio hoy mismo si quiere y que tú la acompañas en lo que decida. A Wilson, que comente solo si le nace.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, rel: { cajera: 1 }, flags: ['jhoselyn_protegida'], cartera: { embajadores: 'Jhoselyn acompañada; Wilson comenta por su cuenta' },
          out: 'Jhoselyn se queda callada. «Si lo borro, parece que mentí. No lo borro. Pero no voy a contestar a nadie.» A las 5, Wilson comenta: «Las dos tienen razón. Yo salía tarde y esta semana salgo más temprano. Falta».',
          pro: { ok: 'La cuidas a ella primero, no a la campaña.', info: 'Ofrécele que el banco desactive los comentarios en su publicación del banco, no en sus redes.' },
          kusi: ['feliz', 'Ella decidió. Tú la acompañaste.'] } },
      { id: 'b', label: 'Pedirle a Jhoselyn que no borre nada y a Wilson que comente defendiendo al banco: es el momento de que los embajadores muestren la otra cara.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -3 }, rel: { cajera: -1 }, flags: ['jhoselyn_sola'],
          out: 'Jhoselyn no te responde más. A las 6 te escribe: «Por favor, saquen mi testimonio». Wilson no comenta.',
          pro: { ok: 'La campaña no pierde su testimonio por hoy.', risk: 'Ella aceptó contar su historia, no ser escudo del banco.' },
          kusi: ['triste', 'Ella no firmó para ser escudo.'] } },
    ],
    rules: [[BP, 'Un embajador cuenta su experiencia; no defiende a la empresa. Cuando lo atacan, primero se le cuida.']],
    mirada: {
      ve: 'Cuando un programa de embajadores se pone a prueba, se ve si era un programa de personas o de publicidad. Si es de personas, lo primero es cuidarlas; si era de publicidad, se les pide que defiendan la marca. Wilson dijo la frase de toda esta historia: «Las dos tienen razón».',
      visual: { tipo: 'balanza', a: { t: 'Rocío', items: ['Salía a las 8', 'Nunca le pagaron', 'Es verdad'] }, b: { t: 'Jhoselyn', items: ['Esta semana sale 6:50', 'Todavía falta', 'También es verdad'] } },
    },
  },
  {
    id: 'i6', t: '16:45', ch: 'documento', who: null, titulo: 'La respuesta pública', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Llega el correo de Renzo: Gerencia aprobó revisar y pagar el sobretiempo acreditado en las 31 agencias, y el registro del cuadre empieza el lunes. «Ya pueden decirlo.»</p><p>Fiorella te pide <mark class="clave">la respuesta pública</mark>. La firmará el Gerente General.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la respuesta.', boton: 'Mandar a Gerencia General',
    bloques: [
      { id: 'reco', t: 'Reconocer', n: 2, ops: [
        { id: 'r1', t: 'Rocío tiene razón en lo central: en muchas agencias, el cierre de caja se extendía después del horario y no se registraba como sobretiempo.', ok: true, por: 'Directo, sin rodeos.' },
        { id: 'r2', t: 'Gracias por contarlo. Le escribimos en privado, sin pedirle nada.', ok: true },
        { id: 'r3', t: 'Lamentamos que su experiencia no haya sido la de la mayoría.', ok: false, por: 'Minimiza un patrón que los datos confirman.' },
      ] },
      { id: 'hace', t: 'Qué se hace', n: 2, ops: [
        { id: 'h1', t: 'Desde el lunes, el tiempo de cierre se registra como sobretiempo en todas las agencias.', ok: true },
        { id: 'h2', t: 'Revisaremos y pagaremos el sobretiempo acreditado, también a quienes ya no trabajan con nosotros.', ok: true, por: 'Incluye a Rocío sin nombrarla.' },
        { id: 'h3', t: 'A partir de hoy, nadie volverá a salir tarde.', ok: false, por: 'No se puede garantizar. Promete lo que sí se hará.' },
      ] },
      { id: 'campana', t: 'Sobre la campaña', n: 1, ops: [
        { id: 'c1', t: 'Nuestra campaña muestra a colaboradores reales, que cuentan lo bueno y lo que falta. Ellas y ellos no son responsables de lo que el banco debe corregir.', ok: true, por: 'Protege a Jhoselyn y a los demás.' },
        { id: 'c2', t: 'Suspendemos la campaña hasta nuevo aviso.', ok: false, por: 'Castiga a quienes dijeron la verdad y parece que la campaña mentía.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 4 : 0 },
        flags: q === 'riesgosa' ? ['respuesta_fria'] : ['respuesta_humana', 'compromiso_publico'],
        cartera: { video: q === 'riesgosa' ? 'Respuesta con promesas que no se pueden cumplir' : 'Respuesta pública firmada por el Gerente General', cuadre: 'Registro y pago del sobretiempo desde el lunes' },
        out: q === 'buena' ? 'La respuesta sale a las 6:30, firmada por Ernesto Bellido. A las 8, el comentario más votado dice: «Primera vez que veo a un banco reconocer algo». En el canal de agencias, don Abel escribe solo una palabra: «Gracias».' : 'La respuesta sale, pero alguna frase se convierte en el nuevo blanco de los comentarios.',
        pro: { ok: 'Reconoces, compromete lo que sí se hará y proteges a tu gente.', risk: 'Lo que el Gerente General firmó hoy se medirá desde el lunes.', info: 'Ahora tu trabajo es que la gente de agencias vea el cambio en su boleta.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Reconocer en público! Dos semanas para llegar aquí.' : 'Esa promesa no la puedes cumplir.'],
      };
    },
    rules: [[LEY, 'El sobretiempo acreditado, aun sin orden expresa, se paga (D.S. 007-2002-TR, art. 9).'], [BP, 'Una respuesta pública reconoce, compromete acciones verificables y no culpa a quien dijo la verdad.']],
    mirada: {
      ve: 'Hace dos semanas escribiste en tu primer correo que el problema no era de comunicación. Hoy se demuestra: lo que calmó la crisis no fue una frase bonita, sino una decisión de Gerencia que tú ayudaste a empujar desde el miércoles en Comas. La comunicación solo la contó bien.',
      visual: { tipo: 'linea', titulo: 'De la reseña a la respuesta', hitos: [['Lunes S1', 'Reseñas: «nunca salgo a mi hora»'], ['Miércoles S1', 'El cuadre, minuto a minuto'], ['Lunes S2', 'Comas sale 6:50'], ['Jueves S2', 'Registro y pago del sobretiempo']] },
    },
  },
];
