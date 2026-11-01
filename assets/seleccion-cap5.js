// Capítulo 5 · «Las entrevistas» · Semana 2, jueves.
// Lucía, Marco y Patricia aparecen desde este capítulo. Recibe las decisiones de los capítulos 1 a 4.
//
// Normas citadas y fuentes consultadas:
// - Ley 26772 y su reglamento (D.S. 002-98-TR), con el art. 4-A incorporado por el D.S. 002-2018-TR: no se puede exigir
//   una prueba de embarazo en la selección; el trato diferenciado por sexo o estado civil es discriminatorio.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
//   https://elperuano.pe/suplementosflipping/juridica/699/web/index.html
//   https://elperuano.pe/noticia/305582-necesitas-personal-y-vas-a-publicar-un-aviso-de-empleo-recomendaciones-para-evitar-discriminacion
// - Ley 30709 y D.S. 002-2018-TR (contexto de igualdad entre mujeres y hombres): https://www.leyes.congreso.gob.pe/Documentos/2016_2021/ADLP/Texto_Consolidado/30709-TXM.pdf
// - Ley 29733, de Protección de Datos Personales (finalidad): https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf

export const CAP = {
  n: 5, titulo: 'Las entrevistas', dia: 'Semana 2, jueves', foto: 'assets/foto/entrevista.webp',
  lugar: 'Sala de reuniones · Distribuidora Pacífico Sur',
  inicio: '07:30', fin: '20:00', cierreHora: '19:30',
  apertura: 'Hoy conoces a las personas detrás de los códigos. Walter llega a las nueve. Tú, antes.', boton: 'Preparar la sala',
  kusi: 'Hoy se evalúa con evidencia: lo que la persona hizo, no lo que nos pareció. ¡Dale!',
  lead: 'Entrevistaste a tres personas muy distintas, cuidaste a una candidata de una pregunta que no debió hacerse y separaste lo que viste de lo que te pareció.',
  reflexion: '¿Qué candidato te cayó mejor? ¿Es también el que mostró más evidencia?',
  rel: { lucia: 0, marco: 0, patricia: 0 },
  siguiente: { n: 6, titulo: 'La terna', dia: 'Semana 3, martes' },
};

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 32, e: 'Hoy: entrevistas con Walter' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 19, e: '2 aprobados, faltan 2' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 25, e: 'Final con Fernando el lunes' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 50, e: '18 postulaciones' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 15, e: 'Entrevistas el viernes' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 13, e: 'Convenio con universidad en trámite' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 70, e: 'Proceso reabierto' },
];
export const CARTERA = (F, prev) => BASE.map(c => {
  const antes = prev?.cartera?.find(x => x.id === c.id);
  return antes && c.id !== 'supervisor' && antes.e !== c.e ? { ...c, e: antes.e } : c;
});

export const FUTURO = {
  guia_solida: ['Tu guía pregunta por hechos del pasado, igual para todos.', 'Las notas del capítulo 6 serán comparables.'],
  guia_floja: ['Tu guía mezcla preguntas que no sirven para comparar.', 'Te costará sustentar la terna en el capítulo 6.'],
  pregunta_corregida: ['Reconduciste la pregunta de Walter sobre los hijos de Patricia, en el momento.', 'Patricia lo recordará. Capítulo 7.'],
  pregunta_tolerada: ['Dejaste pasar la pregunta de Walter sobre los hijos de Patricia.', 'Patricia se quedó con la duda. Capítulo 6.'],
  pregunta_expuesta: ['Corregiste a Walter delante de la candidata.', 'Walter se sintió expuesto. Capítulo 6.'],
  notas_limpias: ['Tus notas de Marco separan evidencia de impresiones.', 'Base del informe de terna. Capítulo 6.'],
  notas_sesgo: ['Tus notas de Marco tienen datos que no deberían pesar.', 'Rocío las leerá en el capítulo 6.'],
  puntaje_independiente: ['Walter y tú puntuaron por separado antes de comparar.', 'La terna del capítulo 6 tendrá dos miradas.'],
  walter_marco: ['Walter ya dijo «me quedo con Marco», antes de puntuar.', 'Capítulo 6.'],
  patricia_tranquila: ['Le aclaraste a Patricia que su familia no forma parte de la evaluación.', 'Capítulo 6.'],
  patricia_dudosa: ['Patricia no sabe si lo de sus hijos le restó puntos.', 'Capítulo 6.'],
  rocio_informada: ['Rocío sabe lo que preguntó Walter y propondrá una guía para todos los jefes.', 'Capítulo 9.'],
  marco_alto: ['Marco pidió S/ 4,400: más que el tope de la banda.', 'La negociación será dura. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  patricia: { n: 'Patricia Huanca', sub: 'Candidata a supervisora', who: 'patricia' },
  lucia: { n: 'Lucía Flores', sub: 'Candidata a supervisora', who: 'lucia' },
  marco: { n: 'Marco Ticona', sub: 'Candidato a supervisor', who: 'marco' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
};

export const CORREOS = [
  { t: '07:35', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Para hoy', html: '<p>Recuerda: en la entrevista se evalúa lo que la persona hizo. Nada de vida personal. Si Walter se sale del guion, reconduce con calma.</p>' },
  { t: '12:50', de: 'Hugo Cárdenas', para: 'seleccion@pacificosur.pe', asunto: 'Gracias por la entrevista', html: '<p>Gracias por la videollamada con subtítulos. Fue la primera entrevista en meses donde pude responder sin estar adivinando las preguntas.</p><p>Hugo</p>', si: 'ajuste_hugo' },
  { t: '16:20', de: 'Fernando Salas', para: 'Analista de Selección', asunto: 'Final de vendedores', html: '<p>Colega, el lunes entrevisto a los finalistas. Rosa me gusta. Lo de Kevin… ya conversamos. 😅</p>', si: 'kevin_igual' },
];

export const WSP = [
  { chat: 'walter', t: '07:50', de: 'Walter', txt: 'Leí la guía. Está bien. Llego 8:55.', si: 'guia_prometida' },
  { chat: 'walter', t: '07:50', de: 'Walter', txt: 'Llego a las 9. Yo pregunto lo mío nomás.', si: 'sin_guia' },
  { chat: 'lucia', t: '08:31', de: 'Lucía', txt: 'Buenos días, ya estoy en el portón azul 🙂 llegué temprano por si acaso' },
  { chat: 'patricia', t: '09:52', de: 'Patricia', txt: 'Buenos días. Ya estoy conectada. Disculpe, aquí en el fundo la señal a veces se va.' },
  { chat: 'patricia', t: '12:15', de: 'Patricia', txt: 'Disculpe que le escriba. Se cortó la llamada al final. ¿Lo de mis hijos influye en la evaluación? Me quedé preocupada.' },
  { chat: 'marco', t: '13:05', de: 'Marco', txt: 'Gracias por la entrevista. El ingeniero Walter es buena gente 👍' },
  { chat: 'lucia', t: '17:40', de: 'Lucía', txt: 'Muchas gracias por hoy. Estaba nerviosa, pero me sentí escuchada 🙏' },
  { chat: 'grupo', t: '18:05', de: 'Kelly', txt: '¿Cómo te fue con las entrevistas? Te vi pasar con cara de maratón 😅' },
  { chat: 'rocio', t: '18:40', de: 'Rocío', txt: '¿Cómo te fue hoy? Cuéntame algo antes de irte.' },
];

export const QUIZ = [
  { q: '¿Qué tipo de pregunta da más evidencia en una entrevista?', ops: ['«¿Se considera un buen líder?»', '«Cuénteme de una vez en que tuvo que corregir a alguien de su equipo. ¿Qué hizo?»', '«¿Qué haría si un operario no le hace caso?»', '«¿Cuál es su mayor defecto?»'], ok: 1, por: 'Las preguntas sobre hechos pasados muestran cómo actuó la persona, no cómo cree que actuaría.' },
  { q: 'El jefe pregunta a una candidata si tiene hijos. ¿Qué haces?', ops: ['Nada: es su entrevista', 'Reconduces con calma hacia lo que el puesto sí exige', 'Terminas la entrevista', 'Anotas la respuesta para la evaluación'], ok: 1, por: 'La vida familiar no se evalúa. Reconducir en el momento protege a la candidata y al jefe.' },
  { q: '¿Cuál de estas notas sí sirve para evaluar?', ops: ['«Me cayó bien»', '«Es casado y tiene hijos: estable»', '«Contó cómo concilió el WMS con el conteo físico cada semana»', '«Parece seguro, típico de minero»'], ok: 2, por: 'Una buena nota describe una conducta concreta que la persona contó o mostró.' },
  { q: '¿Por qué conviene que el jefe y RR.HH. puntúen por separado antes de comparar?', ops: ['Para que gane el que tenga más rango', 'Para evitar que la opinión del primero contagie al segundo', 'Porque así lo exige la ley', 'Para terminar más rápido'], ok: 1, por: 'Dos miradas independientes detectan sesgos que una sola no ve.' },
  { q: 'Durante la entrevista, una candidata te contó datos familiares que no pediste. ¿Qué haces con ellos?', ops: ['Los usas si ayudan a decidir', 'No los registras ni los usas para evaluar', 'Se los cuentas al jefe', 'Los guardas por si acaso'], ok: 1, por: 'Esos datos no tienen relación con el puesto y no deben pesar en la decisión.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:40', ch: 'documento', who: null, titulo: 'Cómo va a ser cada entrevista', banner: 'assets/esc/reloj.webp', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>La sala de reuniones huele a desinfectante y a cartón. Pones agua, tres sillas y la pizarra con la hora de cada entrevista: <mark class="clave">cuarenta y cinco minutos por persona</mark>.</p><p>${F.has('guia_prometida') ? 'Ayer le mandaste a Walter la guía de preguntas, como le prometiste.' : 'Walter no tiene guía. Llegará con «lo suyo».'} Antes de que entre, ordenas cómo va a ser cada entrevista para que las tres sean iguales.</p>`,
    type: 'secuencia', prompt: 'Ordena las partes de una entrevista.', boton: 'Pegar el orden en la pizarra',
    items: [
      { id: 'encuadre', t: 'Saludar, presentarse y explicar cuánto dura y cómo será', por: 'Baja los nervios y hace que todos empiecen igual.' },
      { id: 'puesto', t: 'Contar en dos minutos qué hace el puesto y en qué condiciones', por: 'La persona responde mejor si sabe a qué postula.' },
      { id: 'compet', t: 'Preguntar por hechos concretos de cada competencia', por: 'Es el corazón de la entrevista: evidencia.' },
      { id: 'condic', t: 'Confirmar turnos, fecha posible de ingreso y expectativa de sueldo', por: 'Lo práctico va al final, cuando ya hay confianza.' },
      { id: 'dudas', t: 'Escuchar las preguntas del candidato', por: 'Lo que pregunta también es información.' },
      { id: 'pasos', t: 'Decir cuándo y cómo recibirá una respuesta', por: 'La regla de la casa: a todo entrevistado se le responde.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 2 : 0 }, flags: [q === 'riesgosa' ? 'estructura_floja' : 'estructura_clara'],
        out: q === 'buena' ? 'Pegas la hoja en la pizarra. Cuando llega Walter, la mira: «Así ordenado está mejor».' : 'Walter mira la pizarra y frunce el ceño: «¿Primero el sueldo y después las preguntas?». Lo corriges rápido.',
        pro: { ok: 'Una estructura fija hace que las tres entrevistas sean comparables.', risk: 'Si cada entrevista va por su lado, terminarás comparando simpatías.', info: 'Avisa a cada candidato, al inicio, que tomarás notas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Mismo camino para todos. Así se compara.' : 'Lo práctico va al final.'],
      };
    },
    rules: [[BP, 'Usa la misma estructura y el mismo tiempo con cada candidato.']],
    mirada: {
      ve: 'Una entrevista no es una conversación libre. Si una dura veinte minutos y otra una hora, no comparas personas: comparas conversaciones. Una profesional diseña el escenario para que la única diferencia sea el candidato.',
      visual: { tipo: 'flujo', titulo: 'La entrevista', pasos: ['Encuadre', 'El puesto', 'Competencias', 'Condiciones', 'Sus preguntas', 'Próximos pasos'], aqui: 2 },
    },
  },
  {
    id: 'e2', t: '08:15', ch: 'documento', who: null, titulo: 'La guía de preguntas', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Quedan cuarenta minutos. Revisas la guía por última vez: ${F.has('guia_prometida') ? 'Walter le hizo dos marcas con lapicero rojo, que hay que mirar.' : 'tienes que dejarla impresa para Walter, aunque no la haya pedido.'}</p><p>Cada pregunta tiene que traer <mark class="clave">un hecho, no una opinión</mark>.</p>`,
    type: 'builder', prompt: 'Elige las preguntas de la guía.', boton: 'Imprimir la guía',
    bloques: [
      { id: 'lid', t: 'Liderazgo de equipos operativos', n: 2, ops: [
        { id: 'l1', t: 'Cuénteme de una vez en que un operario no siguió una instrucción. ¿Qué hizo usted y qué pasó después?', ok: true, por: 'Pide un hecho real y su resultado.' },
        { id: 'l2', t: 'Hábleme de un turno que se le estaba cayendo. ¿Cómo lo sacó adelante?', ok: true, por: 'Muestra cómo reacciona bajo presión.' },
        { id: 'l3', t: '¿Se considera un buen líder?', ok: false, por: 'Todos dirán que sí. No trae evidencia.' },
        { id: 'l4', t: '¿Qué haría si un operario no le hace caso?', ok: null, por: 'Hipotética: dice lo que la persona cree que haría, no lo que hizo.' },
      ] },
      { id: 'inv', t: 'Organización, inventario y WMS', n: 1, ops: [
        { id: 'i1', t: 'Cuénteme del último inventario que le tocó. ¿Qué diferencias encontró y cómo las resolvió?', ok: true, por: 'El inventario del 28 es la prueba de fuego del puesto.' },
        { id: 'i2', t: '¿Sabe usar un WMS?', ok: false, por: 'Se responde con un sí o un no.' },
      ] },
      { id: 'otra', t: 'Otra pregunta', n: 1, ops: [
        { id: 'o1', t: 'Cuénteme de un conflicto con un transportista o con otra área. ¿Cómo lo resolvió?', ok: true, por: 'El supervisor coordina con transportistas todos los días.' },
        { id: 'o2', t: '¿Tiene hijos? ¿Quién los cuida cuando le toca turno de noche?', ok: false, por: 'Pregunta sobre la vida familiar: no mide el trabajo y es un trato diferenciado.' },
        { id: 'o3', t: '¿Cuál es su mayor defecto?', ok: null, por: 'Clásica, pero las respuestas suelen ser ensayadas.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .74 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: Math.round((k - .5) * 14), cumplimiento: k >= .74 ? 2 : -4 }, flags: [q === 'riesgosa' ? 'guia_floja' : 'guia_solida'],
        out: q === 'buena' ? 'Cuatro preguntas, cuatro hechos por pedir. Imprimes dos copias: una para ti, otra para Walter.' : q === 'aceptable' ? 'La guía funciona, aunque alguna pregunta traerá opiniones en lugar de hechos.' : 'La guía tiene preguntas que no se pueden hacer o que no traen evidencia. Walter la va a seguir al pie de la letra.',
        pro: { ok: 'Preguntar por el pasado es la mejor forma de predecir cómo actuará la persona.', risk: 'Una pregunta personal en la guía la convierte en algo «oficial».', info: 'Deja espacio para repreguntar: «¿Y qué hizo usted, exactamente?».' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Guía de lujo! Puro hecho.' : 'Mira cuáles traen opinión en vez de hechos.'],
      };
    },
    rules: [[BP, 'Pregunta por hechos pasados vinculados a cada competencia del perfil.'], [LEY, 'Las preguntas sobre hijos, embarazo o estado civil no miden el trabajo y son un trato diferenciado (Ley 26772 y su reglamento).']],
    mirada: {
      ve: 'Las preguntas hipotéticas premian a quien habla bien; las preguntas sobre hechos premian a quien hizo bien. Una profesional elige estas últimas y repregunta hasta que aparezcan el qué, el cómo y el resultado.',
      visual: { tipo: 'cambio', titulo: 'De la opinión al hecho', pares: [['¿Se considera un buen líder?', 'Cuénteme de un operario que no siguió una instrucción'], ['¿Sabe usar un WMS?', 'Cuénteme de su último inventario'], ['¿Tiene hijos?', 'Cuénteme de un conflicto con un transportista']] },
    },
  },
  {
    id: 'e3', t: '09:00', ch: 'presencial', who: 'lucia', titulo: 'Lucía', banner: 'assets/foto2/entrevista-cv.webp', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => `<p>Lucía Flores, 31 años, llegó a las 8:30 en combi desde Gregorio Albarracín. Trae una carpeta con sus certificados, aunque nadie se los pidió. Le tiemblan un poco las manos al servirse agua.</p><p>Es jefa de turno en un supermercado: <mark class="clave">quince personas a su cargo, nunca un almacén</mark>. ${F.has('rescate_lucia') ? 'Tú la habías dejado fuera; Rocío la rescató.' : 'La elegiste por su liderazgo.'} Walter la mira con los brazos cruzados.</p>`,
    type: 'ask', max: 2, prompt: 'Walter ya hizo su primera pregunta. Elige tus dos repreguntas.',
    opts: [
      { id: 'operario', label: '¿Qué hizo exactamente con el reponedor que llegaba tarde, y qué pasó después?', info: '«Primero le pregunté qué pasaba. Cuidaba a su mamá en las mañanas. Le cambié el turno a la tarde, con su acuerdo, y le dejé claro que una tardanza más iba a ser falta. No volvió a llegar tarde. Ahora es el que capacita a los nuevos.»' },
      { id: 'inventario', label: 'En el último inventario de su tienda, ¿qué diferencias encontraron y qué hizo usted?', info: '«Teníamos faltantes en abarrotes. Revisé las guías de ingreso contra el sistema y encontré que un proveedor entregaba menos cajas de las que facturaba. Desde entonces, cada recepción se cuenta en el momento. No sé de WMS, pero el principio es el mismo: lo que el sistema dice tiene que estar en la percha.»' },
      { id: 'almacen', label: '¿Qué le preocupa de pasar de una tienda a un almacén?', info: '«Que me miren como «la de la tienda». Sé que tengo que aprender del WMS y del montacargas, aunque no lo maneje. Pero gente sé llevar. Por eso postulé.»' },
      { id: 'porque', label: '¿Por qué quiere dejar su trabajo actual?', info: '«En la cadena no hay más arriba para mí en Tacna. Jefa de tienda solo hay una, y tiene veinte años en el puesto.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('operario') || picks.includes('inventario') ? 4 : 1, personas: 2 },
      rel: { lucia: 1 },
      flags: picks.map(p => 'lucia_' + p),
      out: picks.includes('inventario') ? 'Walter descruza los brazos cuando Lucía habla de las guías de ingreso. Anota algo en su hoja.' : 'Lucía responde con ejemplos claros. Walter sigue con los brazos cruzados, pero escucha.',
      kusi: ['curioso', 'Nerviosa por fuera, ordenada por dentro.'],
    }),
    mirada: {
      ve: 'Lucía no tiene el CV que Walter imaginaba, pero tiene evidencia de lo que el puesto exige: liderar gente difícil y cuadrar lo que dice el sistema con lo que hay en la percha. Una profesional repregunta donde está la evidencia, no donde está la duda que ya traía.',
      visual: { tipo: 'balanza', a: { t: 'Lo que le falta', items: ['Nunca trabajó en un almacén', 'No conoce un WMS'] }, b: { t: 'Lo que mostró', items: ['Resolvió un problema de puntualidad sin perder a la persona', 'Encontró un faltante revisando guías', 'Sabe lo que tiene que aprender'] } },
    },
  },
  {
    id: 'e4', t: '10:05', ch: 'llamada', who: 'patricia', titulo: 'La pregunta de Walter', banner: 'assets/foto2/tension.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Patricia Huanca se conecta por videollamada desde un fundo de Ica; detrás de ella se ven cajas de uva apiladas. ${F.has('rescate_patricia') ? 'Rocío insistió en entrevistarla aunque vive lejos.' : 'Ocho años de supervisora y hablando de indicadores desde el primer minuto.'} Responde con datos y sin rodeos.</p><p>Cuando habla de mudarse a Tacna, Walter se inclina hacia la cámara: «¿Y usted tiene hijos? <mark class="clave">¿Con quién se quedan si le toca turno de noche?</mark>». La imagen de Patricia se congela un segundo. Vuelve. Está esperando.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Intervenir con calma: «Patricia, eso no forma parte de la evaluación. Lo que sí necesitamos saber es si puede trabajar en turnos rotativos y desde cuándo podría empezar».',
        res: { q: 'buena', fx: { etica: 7, cumplimiento: 6, confianza: 1 }, rel: { patricia: 1, walter: 0 }, flags: ['pregunta_corregida'],
          out: 'Patricia respira. «Sí, puedo rotar. Necesitaría treinta días por mi preaviso.» Walter se echa para atrás y no dice nada. Al terminar, le comentas en privado por qué no se pregunta. «Ya, ya. Es costumbre», dice, algo avergonzado.',
          pro: { ok: 'Proteges a la candidata sin humillar a Walter frente a ella, y conviertes la pregunta en una que sí mide el puesto.', risk: 'Walter puede sentirse corregido. Por eso la conversación de fondo es en privado.', info: 'Si la candidata ya respondió algo personal, no lo registres ni lo uses.' },
          kusi: ['celebra', '¡Qué bacán! Reconduciste sin incendiar la sala.'] } },
      { id: 'b', label: 'Dejar que Patricia responda para no cortar a Walter delante de la candidata, y conversarlo con él después.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, rel: { patricia: -1 }, flags: ['pregunta_tolerada'],
          out: 'Patricia responde, incómoda: «Tengo dos hijos. Mi mamá vive en Tacna y nos ayudaría». Ahora esa información está en la sala y en la cabeza de Walter.',
          pro: { ok: 'Evitas un momento tenso.', risk: 'El silencio se lee como que la empresa aprueba la pregunta. Y ya no se puede «des-escuchar».', info: 'Hablar con Walter después está bien, pero no repara lo que Patricia vivió.' },
          kusi: ['triste', 'Esa respuesta no debió pedirse.'] } },
      { id: 'c', label: 'Decirle a Walter, ahí mismo, que esa pregunta es discriminatoria y no se puede hacer.',
        res: { q: 'aceptable', fx: { etica: 4, cumplimiento: 4, confianza: -4 }, rel: { walter: -1, patricia: 1 }, flags: ['pregunta_expuesta'],
          out: 'Walter se pone rojo. Patricia dice «no se preocupe», incómoda por el momento que vivieron los dos. El resto de la entrevista él no vuelve a hablar.',
          pro: { ok: 'Dejas claro el límite.', risk: 'Exponer al jefe frente a la candidata le pasa el mal rato a ella también.', info: 'Reconducir hacia lo que sí importa protege a todos y deja la corrección para después.' },
          kusi: ['pensando', 'El límite estuvo bien. El escenario, no tanto.'] } },
    ],
    rules: [[LEY, 'Preguntar por hijos, embarazo o estado civil supone un trato diferenciado; el reglamento de la Ley 26772 prohíbe además exigir pruebas de embarazo en la selección (art. 4-A, D.S. 002-2018-TR).'], [BP, 'Si alguien sale del guion, reconduce hacia una pregunta que mida el puesto.']],
    mirada: {
      ve: 'Walter no quiso discriminar: quiso saber si Patricia podría con los turnos. Pero su pregunta pone el peso en la vida familiar de una mujer, algo que casi nunca se le pregunta a un hombre. Una profesional rescata la preocupación legítima (los turnos) y descarta la pregunta.',
      visual: { tipo: 'cambio', titulo: 'De la pregunta personal a la pregunta del puesto', pares: [['¿Tiene hijos?', '¿Puede trabajar en turnos rotativos?'], ['¿Quién se los cuida?', '¿Desde cuándo podría empezar?'], ['¿Su esposo está de acuerdo con la mudanza?', '¿Qué necesitaría para incorporarse en Tacna?']] },
      normas: [{ ley: 'Ley 26772 y su reglamento (art. 4-A, incorporado por el D.S. 002-2018-TR)', dice: 'En los procesos de selección no se pueden establecer requisitos ni tratos diferenciados por motivos como el sexo o el estado civil, y no se puede exigir a las candidatas una prueba de embarazo.', practica: 'La pregunta sobre hijos y su cuidado coloca a Patricia en desventaja por ser madre: la empresa es responsable de lo que se pregunta en su nombre.' }],
    },
  },
  {
    id: 'e5', t: '11:50', ch: 'documento', who: 'marco', titulo: 'Tus notas de Marco', banner: 'assets/foto/entrevista-cv.webp', show: ['calidad', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Marco Ticona, 38 años, supervisor de almacén en un operador logístico minero de Moquegua. Llegó puntual, saludó a Walter por su nombre y habló con seguridad durante cuarenta minutos. ${F.has('referido_walter') ? 'Es el recomendado de Walter.' : ''}</p><p>Antes de la siguiente entrevista, relees lo que anotaste. Escribiste rápido, <mark class="clave">mezclando lo que viste con lo que te pareció</mark>.</p>`,
    type: 'flag', prompt: 'Marca las notas que no deberían pesar en la evaluación. Si alguna te hace dudar, márcala también.',
    doc: { t: 'Notas de entrevista · Marco Ticona', sub: 'Jueves · 11:00 a 11:45 · con Walter Quispe' },
    lines: [
      { id: 'wms', t: 'Contó cómo concilió el WMS con el conteo físico cada semana y bajó las diferencias del almacén.' },
      { id: 'tacna', t: 'Es tacneño como yo: se nota que se va a quedar.', bad: BP, why: 'Es afinidad, no evidencia. Que alguien se parezca a ti no predice que se quede.' },
      { id: 'familia', t: 'Casado, con dos hijos en Tacna: perfil estable.', bad: LEY, why: 'El estado civil y los hijos no se evalúan. Si pesan para Marco, también pesaron contra Patricia.' },
      { id: 'conflicto', t: 'Ejemplo de conflicto: un transportista llegó sin guía; no lo dejó descargar y escaló con su jefe ese mismo día.' },
      { id: 'minero', t: 'Muy seguro de sí mismo, típico de minero.', bad: BP, why: 'Es un estereotipo. Anota lo que hizo o dijo, no a qué grupo «se parece».' },
      { id: 'jefe', t: 'Dijo que su jefe actual «no sabe nada de almacén».', duda: 'No es un descarte por sí solo, pero merece una repregunta: ¿cómo maneja los desacuerdos con un jefe?' },
      { id: 'sueldo', t: 'Gana S/ 4,200 más bonos. Pide S/ 4,400 para moverse.' },
      { id: 'turno', t: 'Hoy trabaja catorce días seguidos y descansa siete; quiere un horario que le permita volver a casa.' },
    ],
    res: v => ({
      flags: [v.missLey || v.hitsBp < 2 ? 'notas_sesgo' : 'notas_limpias', 'marco_alto'],
      out: v.missLey ? 'Tus notas dicen que Marco es «estable» por estar casado y tener hijos. Si eso suma para él, es lo mismo que Walter le preguntó a Patricia.' : 'Tachas lo que es impresión y te quedas con hechos: la conciliación del WMS, el transportista sin guía, el sueldo que pide.',
      pro: { ok: 'Unas notas limpias te permiten comparar a los tres con los mismos criterios.', risk: 'La afinidad («es como yo») es uno de los sesgos más comunes al entrevistar, y casi nunca se nota desde adentro.', info: 'Escribe las notas en tres columnas: lo que hizo, cómo lo hizo, qué resultado tuvo.' },
      kusi: v.missLey ? ['indignado', '¡Lo de la familia no puede sumar puntos!'] : ['feliz', 'Hechos a la izquierda, impresiones a la basura.'],
    }),
    rules: [[LEY, 'El estado civil y la situación familiar no pueden ser criterio de selección (Ley 26772).'], [BP, 'Anota conductas y resultados, no adjetivos ni parecidos.']],
    mirada: {
      ve: 'Las notas de una entrevista viajan: las leerá Rocío, se usarán para el informe de terna y quizás alguien las revise en una inspección. Una profesional escribe cada nota como si tuviera que defenderla. Lo que no puede defender, no lo escribe.',
      visual: { tipo: 'balanza', a: { t: 'Lo que te pareció', items: ['Tacneño como tú', 'Casado y con hijos', 'Seguro, típico de minero'] }, b: { t: 'Lo que hizo', items: ['Concilió el WMS cada semana', 'Frenó una descarga sin guía', 'Pide S/ 4,400 y un horario para volver a casa'] } },
    },
  },
  {
    id: 'e6', t: '13:15', ch: 'presencial', who: 'walter', titulo: '«Me quedo con Marco»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Comedor · Distribuidora Pacífico Sur', show: ['calidad', 'confianza', 'etica'],
    body: (n, F) => `<p>${F.has('ajuste_hugo') ? 'A las 12:00 entrevistaron a Hugo por videollamada con subtítulos; Walter salió diciendo «el muchacho sabe». ' : ''}${F.has('julio_evaluado') ? 'Don Julio entró a las 12:30 con su mejor camisa. ' : ''}Almuerzas un menú de dieta de pollo con Walter, a las apuradas.</p><p>Él ni ha terminado la sopa: «Ya está. <mark class="clave">Me quedo con Marco</mark>. Sabe de SAP, es de aquí y viene de minería. Arme el papeleo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle que cada uno puntúe a los candidatos por separado con la guía y que comparen mañana antes de decidir.',
        res: { q: 'buena', fx: { calidad: 6, confianza: 2, etica: 2 }, rel: { walter: 1 }, flags: ['puntaje_independiente'],
          out: '«¿Por separado? Ya sé a quién quiero.» Le recuerdas que el martes presentas la terna con sustento. Acepta, a regañadientes. En la noche te manda su hoja: Marco primero, pero Lucía apenas un punto debajo.',
          pro: { ok: 'Dos miradas independientes antes de comparar evitan que la opinión del jefe contagie la tuya, y al revés.', risk: 'Walter puede sentir que dudas de su criterio. Explícale que también dudas del tuyo.', info: 'Comparar puntajes no es votar: es ver dónde difieren y por qué.' },
          kusi: ['celebra', 'Walter puntuó a Lucía casi igual que a Marco. ¡Ajá!'] } },
      { id: 'b', label: 'Aceptar a Marco: es el jefe, tiene experiencia y el inventario se acerca.',
        res: { q: 'riesgosa', fx: { calidad: -5, tiempo: 3, confianza: 3 }, rel: { walter: 1 }, flags: ['walter_marco'],
          out: 'Walter sonríe por primera vez en dos semanas. Pero ni siquiera has verificado una referencia, y Marco pide S/ 500 más que el tope de la banda.',
          pro: { ok: 'Walter queda contento y la decisión es rápida.', risk: 'Decides antes de evaluar a todos, sin referencias y sin saber si la empresa puede pagarle.' },
          kusi: ['preocupado', '¿Y las referencias? ¿Y la banda?'] } },
      { id: 'c', label: 'Decirle que Lucía mostró más evidencia de liderazgo y que tú la recomendarías.',
        res: { q: 'aceptable', fx: { calidad: 1, confianza: -3 }, rel: { walter: -1 }, flags: ['walter_marco'],
          out: 'Walter frunce el ceño: «¿La de la tienda?». Ahora están en dos bandos, con un día de entrevistas y ninguna puntuación.',
          pro: { ok: 'Tienes un argumento basado en evidencia.', risk: 'Adelantar tu favorita convierte la decisión en un pulso entre ustedes dos.', info: 'Primero el método, después las opiniones.' },
          kusi: ['pensando', 'Tienes razón en el qué. El cuándo, todavía no.'] } },
    ],
    rules: [[BP, 'Puntúa a cada candidato por separado, con la misma guía, antes de comparar.'], [POL, 'En esta empresa la terna se presenta con un informe escrito, con copia a Rocío.']],
    mirada: {
      ve: '«Es de aquí y viene de minería» no son competencias del perfil. Walter está decidiendo con el primer instinto, que suele ser el más parecido a él. Una profesional no discute el instinto: le pone un método al lado y deja que los datos hablen.',
      visual: { tipo: 'matriz', x: 'Experiencia en almacén', y: 'Evidencia de liderazgo en la entrevista', cuadrantes: ['Fuertes en todo', 'Liderazgo por desarrollar en almacén', 'Experiencia a confirmar', 'No avanzan'], items: [['Marco', .8, .62], ['Patricia', .88, .7], ['Lucía', .25, .85], ['Hugo', .6, .55]] },
    },
  },
  {
    id: 'e7', t: '15:00', ch: 'whatsapp', who: 'patricia', titulo: 'Patricia escribe', banner: 'assets/foto2/mesa-mujeres.webp', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Recién ves el mensaje de Patricia, de las 12:15. ${F.has('pregunta_tolerada') ? 'Respondió lo de sus hijos porque nadie la detuvo.' : F.has('pregunta_expuesta') ? 'Vivió el momento incómodo entre Walter y tú.' : 'Aunque reconduciste la pregunta, se quedó pensando.'}</p><p>«¿Lo de mis hijos <mark class="clave">influye en la evaluación</mark>? Me quedé preocupada.»</p>`,
    type: 'compose', enviaA: 'patricia', para: 'Para: Patricia Huanca', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Patricia, gracias por escribir y disculpa la demora.', ok: true, por: 'Reconoces su mensaje y su espera.' },
        { id: 'a2', t: 'Hola Patricia 😊', ok: null, por: 'Cordial, pero no reconoce que te escribió preocupada hace tres horas.' },
      ] },
      { id: 'aclara', t: 'Sobre la pregunta', ops: [
        { id: 'c1', t: 'Tu situación familiar no forma parte de la evaluación; te evaluamos por tu experiencia y por lo que el puesto exige.', ok: true, por: 'Claro y verdadero. Le devuelves la tranquilidad.' },
        { id: 'c2', t: 'No te preocupes, a Walter le caíste muy bien.', ok: false, por: 'No responde su pregunta, y sugiere que lo que cuenta es caer bien.' },
        { id: 'c3', t: 'Fue una pregunta del ingeniero, no de RR.HH.', ok: false, por: 'La pregunta se hizo en nombre de la empresa. Culpar a Walter no la protege a ella.' },
      ] },
      { id: 'disculpa', t: 'Lo que pasó', ops: [
        { id: 'd1', t: 'Lamento que hayas tenido que escuchar esa pregunta; no debió hacerse.', ok: true, por: 'Asumes la responsabilidad de la empresa sin exponer a nadie.' },
        { id: 'd2', t: 'Fue un malentendido.', ok: false, por: 'Minimiza lo que vivió.' },
        { id: 'd3', t: 'Igual tu respuesta fue muy buena.', ok: false, por: 'Le confirmas que su respuesta sobre sus hijos se evaluó.' },
      ] },
      { id: 'pasos', t: 'Próximos pasos', ops: [
        { id: 'p1', t: 'El martes te escribo para contarte cómo sigue el proceso.', ok: true, por: 'Una fecha concreta.' },
        { id: 'p2', t: 'Cualquier novedad te aviso.', ok: null, por: 'Amable, pero sin fecha.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'c1', 'd1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = ['c2', 'c3', 'd3'].some(x => Object.values(sel).includes(x)) ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, etica: q === 'riesgosa' ? -3 : 3, confianza: 1 }, rel: { patricia: q === 'riesgosa' ? -1 : 1 },
        flags: [q === 'riesgosa' ? 'patricia_dudosa' : 'patricia_tranquila'],
        out: q === 'buena' ? 'Patricia responde a los cinco minutos: «Gracias. Eso me deja tranquila. Espero su mensaje el martes».' : q === 'aceptable' ? 'Patricia responde con un «gracias». Sigues sin saber si quedó tranquila.' : 'Patricia responde «ok». Una supervisora con ocho años de experiencia se queda pensando si su familia le restó puntos.',
        pro: { ok: 'Una respuesta clara después de un mal momento puede salvar la relación con una buena candidata.', risk: 'Sugerir que la respuesta familiar «fue buena» confirma que se evaluó.', info: 'Si ella decide presentar una queja, la empresa debe atenderla con seriedad.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Reparaste lo que se pudo reparar.' : 'Ojo con lo que tu mensaje confirma sin querer.'],
      };
    },
    rules: [[BP, 'Si un candidato vivió una situación incorrecta en tu proceso, reconócela y aclara cómo se evalúa.'], [LEY, 'Lo que la persona contó sobre su familia no debe registrarse ni usarse para evaluar (Ley 29733: solo datos para la finalidad del proceso).']],
    mirada: {
      ve: 'Patricia no está pidiendo un puesto: está preguntando si la trataron justo. Una profesional responde esa pregunta con honestidad, porque de eso depende si la empresa parece un buen lugar para trabajar. Y porque la respuesta correcta es la verdad: la familia no se evalúa.',
      visual: { tipo: 'mensaje', titulo: 'Una respuesta que repara', txt: 'Patricia, gracias por escribir y disculpa la demora. Tu situación familiar no forma parte de la evaluación; te evaluamos por tu experiencia y por lo que el puesto exige. Lamento que hayas tenido que escuchar esa pregunta; no debió hacerse. El martes te escribo para contarte cómo sigue el proceso.' },
    },
  },
  {
    id: 'e8', t: '18:45', ch: 'whatsapp', who: 'rocio', titulo: 'Rocío pregunta cómo te fue', banner: 'assets/foto/mentora.webp', show: ['confianza', 'etica', 'tiempo'],
    body: (n, F) => `<p>Estás apagando la laptop. Afuera, el viento de la tarde levanta el polvo del parque industrial. Rocío te escribe.</p>${F.has('pregunta_corregida') ? '' : '<p>Lo que pasó con Patricia te sigue dando vueltas.</p>'}`,
    chat: ['¿Cómo te fue hoy? Cuéntame algo antes de irte.'],
    type: 'choice',
    choices: [
      { id: 'a', label: 'Contarle lo de la pregunta de Walter y proponerle una guía corta de entrevista para todos los jefes.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, cumplimiento: 3 }, rel: { rocio: 1 }, flags: ['rocio_informada'], envia: ['rocio', 'Bien, en general. Pero Walter le preguntó a Patricia por sus hijos. Lo reconduje y le escribí a ella. ¿Armamos una guía corta de entrevista para todos los jefes? Así no depende de quién esté en la sala.'],
          out: 'Rocío responde: «Gracias por contarme. Sí, armemos esa guía. Y el lunes hablo con Walter, sin que suene a que lo acusaste». Cierras la laptop más liviana.',
          pro: { ok: 'Un riesgo legal que se informa a tiempo se convierte en una mejora para toda la empresa.', risk: 'Walter puede sentir que lo acusaste. Rocío sabrá manejarlo.' },
          kusi: ['animo', 'Contarlo no es acusar. Es cuidar a la empresa.'] } },
      { id: 'b', label: 'Contarle solo lo bueno: tres buenos candidatos y Walter involucrado. Lo de la pregunta ya lo resolviste tú.',
        res: { q: 'aceptable', fx: { confianza: 2, etica: -2 }, envia: ['rocio', 'Bien. Tres buenos candidatos y Walter muy involucrado 💪'],
          out: 'Rocío responde con un 👏. Si Patricia comenta lo que pasó, Rocío se enterará por otra persona.',
          pro: { ok: 'Rocío ve el avance.', risk: 'Lo que tú resolviste hoy puede repetirse con otro jefe mañana.' },
          kusi: ['pensando', 'Lo resolviste hoy. ¿Y la próxima entrevista?'] } },
    ],
    rules: [[BP, 'Informa a tu jefa de los incidentes con riesgo legal, aunque los hayas resuelto.']],
    mirada: {
      ve: 'Una analista resuelve el problema del día; una profesional se pregunta por qué ocurrió. La pregunta de Walter no es un error de Walter: es la falta de una regla que oriente a todos los jefes que entrevistan.',
      visual: { tipo: 'embudo', titulo: 'Tu jueves en números', niveles: [['Entrevistas', 5], ['Con evidencia sólida', 3], ['Preguntas que no debieron hacerse', 1], ['Candidatos con respuesta prometida', 5]] },
    },
  },
];
