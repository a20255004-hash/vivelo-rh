// Analista de Comunicación Interna y Employer Branding · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Final abierto: el lunes llega la consultora de la encuesta de clima y Marketing quiere «preparar» a las agencias.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 6 (finalidad), art. 7 (proporcionalidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 007-2002-TR: art. 10-A (registro del sobretiempo). Archivo: DS-007-2002_LP.txt

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, piso 9',
  inicio: '08:15', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. Hace diez días leíste una reseña de una estrella: «Nunca salgo a mi hora». Hoy toca mirar los números, hacer un balance y descubrir qué llega el lunes.', boton: 'Abrir el tablero',
  kusi: 'Hoy se mira atrás… y un poquito adelante. ¡Dale!',
  lead: 'Leíste los números sin dejarte engañar por ellos, elegiste qué medir de aquí en adelante, hiciste un balance honesto, le pediste permiso a Jhoselyn antes de contar su avance y te preparaste para la encuesta de clima del lunes.',
  reflexion: '¿Te ves en este puesto? ¿Qué parte de estas dos semanas te dijo que sí, y cuál te hizo dudar?',
  siguiente: { n: 11, titulo: 'La encuesta de clima', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'medir', p: 'Resultados de la campaña', j: 'Tú · Marco', d: 9, e: 'Hoy' },
  { id: 'balance', p: 'Balance de dos semanas', j: 'Tú · Fiorella', d: 9, e: 'Hoy a las 5' },
  { id: 'cuadre', p: 'Registro y pago del sobretiempo', j: 'Renzo · Operaciones', d: 9, e: 'Empieza el lunes' },
  { id: 'clima', p: 'Encuesta de clima para certificación', j: 'Gerencia General · consultora', d: 9, e: 'Lunes 9:00' },
];

export const FUTURO = {
  numeros_honestos: ['Tu informe de resultados separa lo que logró la campaña de lo que logró la verdad.', 'Gerencia confiará en tus números.'],
  numeros_inflados: ['El informe atribuyó a la campaña lo que no logró.', 'Alguien hará la pregunta incómoda.'],
  tablero_vivo: ['El tablero mensual mide salidas reales, postulaciones y permanencia.', 'Lo verás por primera vez en la Semana 3.'],
  balance_honesto: ['Tu balance dice lo que salió bien, lo que salió mal y lo que falta.', 'Fiorella lo usará en tu evaluación.'],
  jhoselyn_permiso: ['Le pediste permiso a Jhoselyn antes de contar su avance.', 'Sigue siendo tu voz de las agencias.'],
  clima_limpia: ['Le dijiste a Marco que nadie «prepara» a las agencias para la encuesta.', 'El lunes empieza esa pelea. Semana 3.'],
  clima_preparada: ['Aceptaste «motivar» a las agencias antes de la encuesta.', 'El lunes, la consultora preguntará cómo se comunicó. Semana 3.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  rocio: { n: 'Rocío Paredes', sub: 'Excajera · mensaje privado en LinkedIn', c: '#9B2C2C' },
  difusion: { n: 'Andino Contigo · Agencias', sub: 'Canal de difusión · 46 supervisores', c: '#2F6B3F' },
  abel: { n: 'Abel Huamán', sub: 'Supervisor de la agencia Comas', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'rocio', t: '08:20', de: 'Rocío', txt: 'Hablé con Relaciones Laborales. Van a revisar mi caso. Voy a subir una segunda parte del video contando eso. No es para defenderlos, es porque es verdad.', si: 'respuesta_humana' },
  { chat: 'rocio', t: '08:20', de: 'Rocío', txt: 'Escribí a Relaciones Laborales. Veremos si es verdad lo que dicen.', si: 'rocio_contactada' },
  { chat: 'abel', t: '09:00', de: 'Abel', txt: 'Ayer salimos 6:40. Y el lunes empezamos a registrar el cuadre. En veinte años nunca había visto esto, señorita.' },
  { chat: 'equipo', t: '12:30', de: 'Kiara', txt: 'Mi práctica termina en diciembre y… ¿saben qué? Quiero quedarme en esto 🥹' },
  { chat: 'marco', t: '15:40', de: 'Marco', txt: 'Lunes 9 a. m. llega la consultora de la encuesta de clima. Tenemos el fin de semana para «animar» a las agencias 😉' },
  { chat: 'difusion', t: '17:00', de: 'Abel', txt: 'Señorita, ¿la encuesta del lunes es anónima de verdad? Mi gente pregunta.' },
  { chat: 'fiorella', t: '18:50', de: 'Fiorella', txt: 'Dos semanas. Gracias por no endulzar nada. Descansa: el lunes empieza lo difícil de verdad 💛' },
];

export const CORREOS = [
  { t: '08:30', de: 'Marketing · Agencia de medios', para: 'Marco Delgado; Comunicación Interna', asunto: 'Informe de resultados · campaña «Tu primer gran trabajo»', html: '<p>Adjuntamos el informe de resultados de la primera semana de campaña. Resumen: alcance de 1.2 millones, postulaciones +38 %, calificación promedio en portales de empleo en alza.</p>' },
  { t: '15:30', de: 'Gabriela Soto · Gerencia General', para: 'Fiorella Chávez; Marco Delgado; Comunicación Interna', asunto: 'Lunes 9:00 · encuesta de clima', html: '<p>El lunes llega la consultora que aplicará la encuesta de clima para la certificación de «gran lugar para trabajar». El Sr. Bellido quiere saber cómo vamos a comunicarla a las 46 agencias. Reunión a las 9 en el piso 14.</p>' },
];

export const QUIZ = [
  { q: 'Las postulaciones subieron 38 %, pero el 70 % llegó en las 48 horas después de la respuesta pública al video. ¿Qué concluyes?', ops: ['La campaña funcionó', 'La honestidad pública atrajo más que la publicidad; hay que separar las fuentes', 'Los números están mal', 'Hay que repetir el video'], ok: 1, por: 'Atribuir todo a la campaña es inflar los resultados. Medir bien es separar qué causó qué.' },
  { q: 'Para saber si la marca empleadora mejora de verdad, el indicador más honesto es…', ops: ['Seguidores en redes', 'La hora real de salida en agencias y cuánta gente nueva se queda a los 90 días', 'Likes por publicación', 'Cantidad de posts de los embajadores'], ok: 1, por: 'Una marca empleadora mejora cuando mejora la experiencia, y eso se mide adentro.' },
  { q: 'El registro del cuadre desde el lunes cumple con…', ops: ['Una buena práctica opcional', 'La obligación del empleador de registrar el sobretiempo (D.S. 007-2002-TR, art. 10-A)', 'Una norma de Marketing', 'Nada'], ok: 1, por: 'El art. 10-A obliga al empleador a registrar el trabajo en sobretiempo.' },
  { q: 'Marketing quiere «animar» a las agencias a responder bien la encuesta de clima. Eso…', ops: ['Mejora el resultado', 'Le quita valor a la encuesta y a la certificación', 'Es lo que hacen todos', 'Es obligatorio'], ok: 1, por: 'Una encuesta que se «prepara» mide la obediencia, no el clima.' },
  { q: 'Quieres contar que Jhoselyn ya llega a tiempo a su instituto. Primero…', ops: ['Lo publicas: es buena noticia', 'Le preguntas si quiere que se cuente', 'Se lo cuentas a Marco', 'Lo pones en el boletín sin nombre'], ok: 1, por: 'Su historia es suya, también cuando mejora.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:40', ch: 'documento', who: null, titulo: 'Los números raros', banner: 'assets/esc/lupa.webp', show: ['calidad', 'etica'],
    body: (n, F) => `<p>El informe de la agencia de medios tiene gráficos de colores y una flecha verde enorme: «Postulaciones +38 %». Abres los datos crudos con tu café.</p><p>${F.has('respuesta_humana') ? 'El 70 % de las postulaciones llegó en las 48 horas después de la respuesta pública del jueves.' : 'Las postulaciones subieron, pero casi todas llegaron en un solo día.'} <mark class="clave">Los números dicen algo raro</mark>.</p>`,
    type: 'flag', prompt: 'Marca las afirmaciones del informe que no se sostienen o son un riesgo.',
    doc: { t: 'Informe de resultados · semana 1', sub: 'Agencia de medios · campaña «Tu primer gran trabajo»' },
    lines: [
      { id: 'atrib', t: '«La campaña elevó las postulaciones en 38 %».', bad: BP, why: 'El 70 % llegó después de la respuesta pública al video, no de los anuncios. Atribuirlo todo a la campaña es inflar resultados.' },
      { id: 'estrellas', t: '«La calificación en portales subió de 3.1 a 3.4 estrellas gracias a la campaña».', bad: BP, why: 'Parte de la subida vino de reseñas pedidas por correo la primera semana o de días puntuales. Hay que separar las reseñas espontáneas.' },
      { id: 'alcance', t: '«1.2 millones de personas alcanzadas».' },
      { id: 'testi', t: '«El testimonio de la cajera de Comas es la pieza más compartida (41 % de las interacciones)».' },
      { id: 'perfil', t: '«Se recomienda cruzar los datos de los postulantes con sus redes sociales para perfilar su afinidad con la marca».', bad: LEY, why: 'Tratamiento excesivo y para una finalidad que los postulantes no aceptaron (Ley 29733, arts. 6 y 7).' },
      { id: 'modelos', t: '«Las piezas con colaboradores reales tienen el doble de clics que el promedio del sector».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Dejas pasar la recomendación de perfilar postulantes. Fiorella la ve y la tacha con plumón rojo.' : `Marcas ${hitsLey} riesgo legal y dos conclusiones infladas. Tu versión dice: «La campaña llegó lejos; lo que más atrajo postulantes fue que el banco dijo la verdad».`,
      flags: missLey ? ['numeros_inflados'] : ['numeros_honestos'],
      fx: { calidad: missLey ? -2 : 5, etica: missLey ? -1 : 4 },
      cartera: { medir: missLey ? 'Informe con conclusiones infladas' : 'Informe que separa campaña y verdad' },
      pro: { ok: 'Mides lo que pasó, no lo que te habría gustado que pasara.', risk: 'Un informe inflado te obliga a inflar el siguiente.' },
      kusi: missLey ? ['pensando', 'Esa recomendación no podía pasar.'] : ['sorpresa', '¡Lo que más atrajo fue la verdad!'],
    }),
    rules: [[LEY, 'Los datos de postulantes se usan solo para la finalidad que aceptaron y en lo necesario (Ley 29733, arts. 6 y 7).'], [BP, 'Separa qué causó qué antes de atribuir un resultado.']],
    mirada: {
      ve: 'Lo raro de los números es lo más importante de estas dos semanas: los anuncios llegaron a más de un millón de personas, pero lo que hizo postular a la gente fue ver a un banco reconocer un problema. La marca empleadora no se inventa: se cuenta.',
      visual: { tipo: 'embudo', titulo: 'De dónde vinieron las postulaciones', niveles: [['Postulaciones de la semana', 1240], ['Llegaron tras la respuesta pública', 868], ['Por el testimonio de Jhoselyn', 310], ['Solo por anuncios', 120]] },
    },
  },
  {
    id: 'j2', t: '10:00', ch: 'documento', who: null, titulo: 'Qué medir desde ahora', banner: 'assets/esc/meta.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Fiorella quiere un tablero mensual de marca empleadora para Gerencia. Una sola página, <mark class="clave">tres indicadores</mark>.</p><p>Los que elijas serán los que todo el mundo mire.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres indicadores del tablero.', boton: 'Armar el tablero', resumen: 'Mides',
    cols: ['Indicador', 'Qué dice'],
    rows: [
      { id: 'salida', cells: ['Minutos promedio entre el cierre y la salida, por agencia', 'Si el cambio llega de verdad'] },
      { id: 'reten', cells: ['Personas nuevas que siguen a los 90 días', 'Si la promesa de la feria se cumplió'] },
      { id: 'fuente', cells: ['Postulaciones por fuente: testimonios, anuncios, ferias, referidos', 'Qué atrae de verdad'] },
      { id: 'estrellas', cells: ['Estrellas promedio en portales de empleo', 'La reputación afuera'] },
      { id: 'seguid', cells: ['Seguidores de la página de empleos', 'El alcance'] },
      { id: 'posts', cells: ['Publicaciones de los embajadores por semana', 'La actividad del programa'] },
    ],
    score: { salida: 3, reten: 3, fuente: 3, estrellas: 1, seguid: -1, posts: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3 },
        flags: q === 'buena' ? ['tablero_vivo'] : [],
        cartera: { medir: q === 'buena' ? 'Tablero: salidas, permanencia a 90 días y fuentes' : 'Tablero con indicadores de vanidad' },
        out: q === 'buena' ? 'Fiorella pega tu tablero en la pizarra. «Si el primer indicador no baja, todo lo demás es maquillaje.»' : picks.includes('posts') ? 'Medir los posts de los embajadores convierte el programa en una meta. Fiorella lo cambia.' : 'El tablero mide algo, pero no lo que define si el banco es un buen lugar para trabajar.',
        pro: { ok: 'Mides la experiencia, la promesa y lo que atrae.', risk: 'Lo que se mide se vuelve meta: si mides posts, tendrás posts, no verdad.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Minutos después del cierre como indicador! Genial.' : 'Eso es vanidad, no marca.'],
      };
    },
    rules: [[LEY, 'El registro del sobretiempo es obligación del empleador (D.S. 007-2002-TR, art. 10-A); desde el lunes, también es tu mejor dato.']],
    mirada: {
      ve: 'Hace diez días, las marcaciones te mostraron la fiebre. Desde el lunes, el registro del cuadre te dará el termómetro oficial. Un tablero de marca empleadora que empieza por la hora de salida es uno que no se puede maquillar.',
      visual: { tipo: 'matriz', x: 'Fácil de inflar', y: 'Dice la verdad sobre la experiencia', cuadrantes: ['Difícil de inflar y verdadero', 'Fácil de inflar pero verdadero', 'Difícil y poco útil', 'Vanidad'], items: [['Minutos tras el cierre', .1, .95], ['Permanencia a 90 días', .15, .85], ['Fuentes de postulación', .3, .7], ['Estrellas', .7, .5], ['Seguidores', .8, .15], ['Posts de embajadores', .9, .1]] },
    },
  },
  {
    id: 'j3', t: '11:30', ch: 'documento', who: null, titulo: 'Tu balance', banner: 'assets/foto2/celebra-tablet.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Fiorella te pidió un balance de una página para la reunión de las 5. Lo escribes en la mesa de la cocina del piso 9, con un alfajor de la máquina.</p><p><mark class="clave">Lo bueno, lo malo y lo que falta</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu balance.', boton: 'Mandar a Fiorella',
    bloques: [
      { id: 'bien', t: 'Lo que salió bien', n: 2, ops: [
        { id: 'b1', t: 'Diagnosticamos el problema real, el cuadre fuera de horario, y llegó a quien podía corregirlo.', ok: true },
        { id: 'b2', t: 'La campaña muestra a gente real que cuenta lo bueno y lo que falta.', ok: true },
        { id: 'b3', t: 'Subimos a 4 estrellas en todos los portales.', ok: false, por: 'No es verdad, y no era el objetivo.' },
      ] },
      { id: 'mal', t: 'Lo que salió mal o me costó', n: 2, ops: [
        { id: 'm1', t: 'Nos enteramos del problema por reseñas y por un video, no por nuestros propios canales.', ok: true, por: 'Esa es la lección más dura.' },
        { id: 'm2', t: 'Jhoselyn quedó expuesta en los comentarios: hay que preparar mejor a los embajadores.', ok: true },
        { id: 'm3', t: 'Nada importante: todo salió según lo planeado.', ok: false, por: 'Un balance sin errores no es un balance.' },
      ] },
      { id: 'falta', t: 'Lo que falta', n: 2, ops: [
        { id: 'f1', t: 'Que el registro y el pago del sobretiempo se cumplan desde el lunes, y contarlo cuando se vea en las boletas.', ok: true },
        { id: 'f2', t: 'Que la encuesta de clima del lunes mida la verdad, aunque el resultado no guste.', ok: true },
        { id: 'f3', t: 'Lanzar ya el lema «Aquí sales a tu hora».', ok: false, por: 'Recién cuando el tablero lo demuestre.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, calidad: q === 'buena' ? 3 : 0 }, rel: { fiorella: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['balance_honesto'],
        cartera: { balance: q === 'riesgosa' ? 'Balance demasiado optimista' : 'Balance honesto de dos semanas' },
        out: q === 'buena' ? 'Fiorella lo lee de pie. Se detiene en «nos enteramos por reseñas y por un video». «Esa frase la voy a decir en el comité. Es la razón por la que existe tu puesto.»' : 'El balance cuenta la historia, pero se salta algo que costó.',
        pro: { ok: 'Un balance honesto incluye lo que te costó.', risk: 'Un balance perfecto le quita credibilidad a todo lo bueno que dice.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lo bueno, lo malo y lo que falta! ¡Así!' : 'Algo te costó y no está.'],
      };
    },
    rules: [[BP, 'Un balance útil dice lo que salió bien, lo que salió mal y lo que falta, en ese orden.']],
    mirada: {
      ve: 'En dos semanas pasaste de leer reseñas a empujar un cambio que se verá en las boletas. No lo hiciste sola ni todo salió bien. Un balance honesto es la última pieza de tu trabajo: la marca empleadora también se cuenta hacia adentro.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['L1', 'Las reseñas'], ['X1', 'Comas'], ['V1', 'El cierre de agencias'], ['L2', 'El audio'], ['J2', 'El video de Rocío'], ['V2', 'Los números']] },
    },
  },
  {
    id: 'j4', t: '13:30', ch: 'whatsapp', who: 'cajera', titulo: 'Jhoselyn llegó a su clase', banner: 'assets/foto2/celebra-brazos.webp', show: ['personas', 'etica'],
    body: () => `<p>Jhoselyn te manda una foto: la puerta de su instituto en Independencia, a las 6:58 p. m. «¡Llegué a tiempo a Costos! Dos veces esta semana. El profe no me reconocía 😂».</p><p>Marco, que ve la foto en tu pantalla, dice: «Eso es oro. <mark class="clave">Hagamos un post</mark>».</p>`,
    type: 'compose', enviaA: 'jhoselyn', para: 'Para: Jhoselyn Ccori · Cajera, agencia Comas', boton: 'Enviar',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'cel', t: 'Celebrar', ops: [
        { id: 'c1', t: '¡Jhoselyn, qué alegría! Esto es lo mejor que me ha pasado en dos semanas 🎉', ok: true, por: 'Celebras con ella, no con la campaña.' },
        { id: 'c2', t: '¡Buenísimo! Justo lo que necesitábamos para la campaña 🙌', ok: false, por: 'Su logro se vuelve material.' },
      ] },
      { id: 'pide', t: 'La pregunta', ops: [
        { id: 'p1', t: 'Una pregunta sin presión: ¿te gustaría que contemos esto, o prefieres que quede entre nosotras? Las dos respuestas están bien.', ok: true, por: 'Le pides permiso de verdad.' },
        { id: 'p2', t: 'Marco va a hacer un post con tu foto, ¿ya?', ok: false, por: 'No es una pregunta.' },
      ] },
      { id: 'real', t: 'Lo que no olvidas', ops: [
        { id: 'r1', t: 'Y si algún día vuelves a salir tarde, también quiero saberlo.', ok: true, por: 'La verdad también cuando empeora.' },
        { id: 'r2', t: '¡Ahora sí, a sacar 20 en Costos!', ok: null, por: 'Cariñoso, sin más.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'p1', 'r1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.pide === 'p2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 2, etica: q === 'riesgosa' ? -3 : 2 }, rel: { cajera: q === 'riesgosa' ? -1 : 1 },
        flags: q === 'riesgosa' ? [] : ['jhoselyn_permiso'],
        out: q === 'buena' ? 'Jhoselyn responde: «Que quede entre nosotras por ahora. Cuando me paguen las horas extras, ahí sí lo contamos». Le dices a Marco que no. Él levanta las manos: «Ok, ok. Aprendí».' : q === 'riesgosa' ? 'Jhoselyn tarda en responder: «Ya, señorita». No suena feliz.' : 'Jhoselyn responde con un audio riéndose. Lo del post queda pendiente.',
        pro: { ok: 'Su historia es suya, también cuando mejora.', risk: 'Convertir cada logro de alguien en contenido cansa y aleja.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '«Cuando me paguen, ahí sí». ¡Qué sabia!' : 'Era una pregunta, no un aviso.'],
      };
    },
    rules: [[LEY, 'Usar la imagen y la historia de alguien requiere su consentimiento para ese uso concreto (Ley 29733, arts. 5 y 6).']],
    mirada: {
      ve: 'Jhoselyn te dio la mejor regla para la Semana 3: «Cuando me paguen, ahí sí lo contamos». Es la misma que defendiste con Marco desde el jueves pasado. Se cuenta lo que es verdad, cuando es verdad, y con permiso de quien lo vive.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le escribes', txt: '¡Jhoselyn, qué alegría! Una pregunta sin presión: ¿te gustaría que contemos esto, o prefieres que quede entre nosotras? Y si algún día vuelves a salir tarde, también quiero saberlo.' },
    },
  },
  {
    id: 'j5', t: '15:50', ch: 'llamada', who: 'gerente', titulo: 'Lo que llega el lunes', banner: 'assets/foto/reunion-jefa.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Acaba de llegar el correo de Gabriela: el lunes a las 9 aterriza la consultora de la encuesta de clima para la certificación de «gran lugar para trabajar». Marco te llama al toque.</p><p>«Tenemos el fin de semana. Mandemos al canal de agencias un mensaje motivador: <mark class="clave">"Esta es nuestra oportunidad de demostrar que somos un gran equipo"</mark>, y que los supervisores animen a su gente a responder bien.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no: una encuesta que se «anima» mide obediencia, no clima, y la certificación perdería valor. Propones comunicar solo tres cosas: que es anónima de verdad, para qué sirve y que los resultados se compartirán, sean buenos o malos.',
        res: { q: 'buena', fx: { etica: 5, confianza: 2 }, rel: { gerente: -1 }, flags: ['clima_limpia'],
          out: 'Marco suspira largo. «Contigo nunca es fácil.» Pausa. «Pero tienes razón: si el lunes sale mal, por lo menos sabremos dónde estamos. Lo discutimos con Bellido a las 9.»',
          pro: { ok: 'Proteges el único instrumento que dirá la verdad de todo el banco.', risk: 'Si el resultado es malo, alguien buscará culpables en Comunicación.', info: 'Don Abel ya preguntó si es anónima de verdad: averígualo con la consultora antes de responderle.' },
          kusi: ['animo', 'Una encuesta limpia vale más que una certificación bonita.'] } },
      { id: 'b', label: 'Aceptar un mensaje motivador, pero sin pedir a los supervisores que intervengan.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: 1 }, rel: { gerente: 1 }, flags: ['clima_preparada'],
          out: 'El mensaje sale el sábado. El domingo, en un grupo de cajeros, alguien escribe: «¿"Demostrar que somos un gran equipo"? O sea, respondan bonito».',
          pro: { ok: 'No hay presión directa de los jefes.', risk: 'El tono ya le dice a la gente qué respuesta se espera.' },
          kusi: ['pensando', 'El tono también presiona.'] } },
      { id: 'c', label: 'Aceptar la propuesta completa: es una certificación importante para el banco y Marco tiene el apoyo de Gerencia Comercial.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -2 }, rel: { gerente: 1, fiorella: -1 }, flags: ['clima_preparada'],
          out: 'Fiorella se entera por el canal. Te escribe una sola línea: «¿Después de estas dos semanas?».',
          pro: { ok: 'Marco queda contento.', risk: 'Una encuesta preparada por los jefes es la reseña de cinco estrellas con vale de cine, en versión interna.' },
          kusi: ['triste', 'Es el correo de las reseñas otra vez.'] } },
    ],
    rules: [[BP, 'Una encuesta de clima se comunica con tres cosas: es anónima, para qué sirve y que sus resultados se compartirán.']],
    mirada: {
      ve: 'Las dos semanas terminan donde empezaron: con alguien que quiere mejorar un número sin mejorar lo que mide. Las reseñas compradas del primer lunes y la encuesta «animada» del próximo son la misma tentación. La Semana 3 empieza con esa pelea.',
      visual: { tipo: 'balanza', a: { t: 'Encuesta «animada»', items: ['Mejor puntaje', 'Certificación rápida', 'Nadie sabe dónde está el banco'] }, b: { t: 'Encuesta limpia', items: ['Puntaje real', 'Datos para corregir', 'Una certificación que vale'] } },
    },
  },
  {
    id: 'j6', t: '17:30', ch: 'presencial', who: 'fiorella', titulo: '¿Te ves en este puesto?', banner: 'assets/foto/mentora.webp', lugar: 'Sofá naranja, piso 9', show: ['confianza'],
    body: (n, F) => `<p>El piso 9 se vacía. Fiorella se sienta en el sofá naranja, con los zapatos en la mano. ${F.has('balance_honesto') ? 'Tiene tu balance doblado en el bolsillo de la casaca.' : ''}</p><p>«En diez días leíste reseñas, fuiste a Comas, contaste un cierre, frenaste un rumor, armaste embajadores, fuiste a una feria y respondiste un video viral. El lunes viene la encuesta. Antes de irte: <mark class="clave">¿te ves en este puesto?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Sí. Lo que más me gustó fue Comas: ver con mis ojos lo que los números decían. Y lo que más me costó, decirle que no a Marco tantas veces.»',
        res: { q: null, fx: { confianza: 3 }, rel: { fiorella: 1 },
          out: 'Fiorella sonríe. «A mí también me costaba. Al tercer año, Marco empezó a llamarme antes de decidir. Ya verás.»',
          kusi: ['celebra', '¡Nos vemos el lunes en el piso 14!'] } },
      { id: 'b', label: '«No sé todavía. Me gusta escribir y escuchar, pero me pesa estar siempre entre la gerencia y la gente.»',
        res: { q: null, fx: { confianza: 2 }, rel: { fiorella: 1 },
          out: '«Eso es exactamente el puesto», dice Fiorella. «Si un día deja de pesarte, preocúpate.» Te acompaña al ascensor.',
          kusi: ['pensando', 'Dudar también es una respuesta honesta.'] } },
      { id: 'c', label: '«Creo que me iría mejor en Relaciones Laborales: lo que de verdad cambió las cosas fue el pago del sobretiempo, no la campaña.»',
        res: { q: null, fx: { confianza: 2 },
          out: 'Fiorella se ríe. «Renzo dice lo mismo de nosotras. Las dos cosas hacen falta: sin el cambio no hay nada que contar, y sin contarlo, nadie se entera.»',
          kusi: ['curioso', 'Interesante… ¿y si se pudiera las dos?'] } },
    ],
    mirada: {
      ve: 'Eso fueron dos semanas como Analista de Comunicación Interna y Employer Branding: escribir mucho, escuchar más, decir que no con propuestas y entender que una marca empleadora se construye en la ventanilla 4 de Comas antes que en LinkedIn. El lunes a las 9, en el piso 14, la encuesta de clima te espera.',
      visual: { tipo: 'flujo', titulo: 'Lo que llega el lunes', pasos: ['9:00 · Reunión en el piso 14', 'La consultora de clima', 'El registro del cuadre arranca', 'Don Abel pregunta si es anónima'], aqui: 0 },
    },
  },
];
