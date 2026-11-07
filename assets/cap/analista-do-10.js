// Analista de Desarrollo Organizacional · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Final abierto: el consejo encargó analizar la red de agencias rurales, empezando por Chivay. Sigue en la Semana 3.
// Normas citadas (ya verificadas en capítulos anteriores):
// - D.S. 003-97-TR, art. 30 b): un cambio de categoría se acuerda, no se impone.
//   https://lpderecho.pe/jurisprudencia-articulo-30-tuo-decreto-legislativo-728-despido-hostilidad
// - Ley 30822 (Ley COOPAC): supervisión de la SBS. https://www.sbs.gob.pe/coopac_nuevo
// Empresas y personas son ficticias.

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Cooperativa del Sur · Sede de Cayma, Arequipa',
  inicio: '07:30', fin: '19:30', cierreHora: '19:00',
  apertura: 'Viernes. Hace dos semanas llegaste con dos organigramas impresos y una pregunta: ¿cómo hacemos uno solo? Hoy hay una estructura aprobada, nueve conversaciones por delante y un encargo nuevo del consejo esperando el lunes.', boton: 'Empezar el último día',
  kusi: 'Dos semanas no cierran una fusión. Pero sí te dicen si este trabajo es para ti.',
  lead: 'Acompañaste las conversaciones de la mañana, pediste a Ernesto una devolución sincera, miraste lo que te llevas, almorzaste con las dos cooperativas, respondiste a todos y aceptaste el encargo de Chivay sin la respuesta escrita de antemano.',
  reflexion: 'Después de dos semanas: ¿te ves en este puesto? ¿Qué parte te dio más energía y cuál te la quitó?',
  siguiente: { n: 11, titulo: 'La agencia de Chivay', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'nueve', p: 'Conversaciones con las nueve personas', j: 'Ernesto · Gestión Humana', d: 0, e: 'Hoy desde las 8' },
  { id: 'respuesta', p: 'Respuesta semanal a todo el personal', j: 'Gestión Humana', d: 0, e: 'Hoy a las 4' },
  { id: 'sistema', p: 'Adopción del sistema nuevo en créditos', j: 'Luz · Sistemas', d: 0, e: 'Semana 1 de 3' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Ernesto', d: 0, e: 'Faltan los de soporte' },
  { id: 'chivay', p: 'Análisis de la red de agencias rurales', j: 'Consejo de administración', d: 0, e: 'Empieza el lunes' },
];

export const FUTURO = {
  nueve_acompanadas: ['Las nueve personas supieron su situación antes que nadie, con opciones por escrito.', 'Una de ellas pidió tiempo, y se lo dieron.'],
  devolucion_pedida: ['Le pediste a Ernesto que te dijera qué mejorar.', 'Te dijo: «Apúrate menos en defender; pregunta más».'],
  almuerzo_mixto: ['Almorzaste chupe con gente de las dos cooperativas.', 'Rocío y Valeria se sentaron juntas.'],
  respuesta_semanal: ['La respuesta del viernes dijo lo aprobado, lo que falta y la fecha de Chivay.', 'En Chivay ya saben que vas el lunes.'],
  chivay_abierta: ['Irás a Chivay a analizar, no a confirmar un cierre decidido.', 'Wilber te espera en el paradero.'],
  chivay_cierre: ['Aceptaste ir a Chivay a «justificar el cierre».', 'Wilber ya lo sabe por el chofer.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Coordinadora de créditos rurales', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos', who: 'analista' },
  hilda: { n: 'Hilda Mamani', sub: 'Cajera · Agencia Characato', c: '#8A4FBF' },
  wilber: { n: 'Wilber Huamaní', sub: 'Asesor · Agencia Chivay', c: '#2B6CB0' },
  todos: { n: 'Cooperativa del Sur · Comunicados', sub: '480 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'gh', t: '07:35', de: 'Ernesto', txt: 'Hoy cerramos tu segunda semana. Y tú que pensabas que DO era hacer organigramas bonitos 😅' },
  { chat: 'rocio', t: '08:40', de: 'Rocío', txt: 'Lunes empiezo con Valeria la cartera agrícola en el sistema. Quién me hubiera dicho.', si: 'acuerdo_escrito' },
  { chat: 'gh', t: '09:50', de: 'Luz', txt: 'Adopción del sistema en Characato: de 12 a 41 de cada 100 en una semana. ¡Los padrinos funcionan! 🚀', si: 'padrinos' },
  { chat: 'kevin', t: '12:15', de: 'Kevin', txt: 'Ayer salí a las seis. Mi hija no me reconocía de día 😂 Gracias.', si: 'acompanamiento' },
  { chat: 'hilda', t: '16:20', de: 'Hilda', txt: 'Leí el comunicado en voz alta en la agencia. Una socia de Chiguata me dijo: «Ahora sí entiendo». 🙏', si: 'respuesta_semanal' },
  { chat: 'wilber', t: '18:30', de: 'Wilber', txt: 'Ya me contaron que viene el lunes. Traiga chompa, que acá en Chivay a las seis de la mañana hace cero grados 🥶', si: 'chivay_abierta' },
  { chat: 'wilber', t: '18:30', de: 'Wilber', txt: 'Me dijo el chofer que viene a cerrarnos. ¿Es verdad?', si: 'chivay_cierre' },
];

export const CORREOS = [
  { t: '07:40', de: 'Ernesto Valdivia', para: 'Analista de DO', asunto: 'Las nueve', html: '<p>Tengo las nueve cartas revisadas por Legal: cada una con las vacantes a las que puede postular, el programa de retiro voluntario y un plazo para decidir. Empezamos a las 8.</p><p>Ernesto</p>' },
  { t: '17:20', de: 'Fernando Linares · Gerencia General', para: 'Analista de DO', asunto: 'Chivay', html: '<p>Felicitaciones por el consejo. El lunes vas a Chivay. Sé honesta: yo creo que no da los números. Quiero tu recomendación en dos semanas.</p><p>F. Linares</p>' },
];

export const QUIZ = [
  { q: 'Después de que un consejo aprueba una estructura, ¿quién debe enterarse primero?', ops: ['Todo el personal a la vez', 'Las personas directamente afectadas, una por una', 'La prensa', 'Los socios'], ok: 1, por: 'Primero quienes cambian; luego el resto.' },
  { q: 'El gerente te pide ir a una agencia «a confirmar que hay que cerrarla». Lo correcto es…', ops: ['Ir con la respuesta ya decidida', 'Ir a analizar con criterios conocidos y llegar a la recomendación después', 'Negarte a ir', 'Pedir que vaya otro'], ok: 1, por: 'Un análisis con la conclusión escrita de antemano no es un análisis.' },
  { q: 'Una de las nueve personas pide más tiempo para decidir entre una vacante y el retiro voluntario. ¿Qué haces?', ops: ['Le das el plazo que fija la carta y te ofreces a resolver sus dudas', 'Le exiges que decida hoy', 'Decides por ella', 'Le dices que el silencio es aceptación'], ok: 0, por: 'Decidir con información y tiempo es parte de que la decisión sea realmente voluntaria.' },
  { q: '¿Qué es lo que más distingue el trabajo de DO en una fusión?', ops: ['Dibujar organigramas', 'Que la estructura funcione para las personas que la viven', 'Reducir costos a cualquier precio', 'Organizar fiestas de integración'], ok: 1, por: 'La estructura en el papel es el comienzo; lo difícil es que funcione en el día a día.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'z1', t: '08:00', ch: 'presencial', who: 'ernesto', titulo: 'Las conversaciones de la mañana', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Ernesto', show: ['personas', 'etica', 'tiempo'],
    body: (n, F) => `<p>Ernesto conduce las conversaciones; tú acompañas y tomas nota. ${F.has('conversacion_preparada') ? 'Usan la misma estructura que con Rocío: mensaje claro, criterios, opciones por escrito y apoyo.' : 'Improvisan un poco, conversación a conversación.'}</p><p>A media mañana repasas cómo van <mark class="clave">las primeras cuatro</mark>.</p>`,
    type: 'calls',
    calls: [['Contador de Characato', 'Acepta postular a la vacante de riesgos', 'Prefiero cambiar de área que irme. A mis 50 años, ¿quién me contrata?'], ['Asistente de créditos de Misti', 'Elige el retiro voluntario', 'La verdad, ya tenía una oferta en Lima. Esto me ayuda a decidir.'], ['Jefa de operaciones de Characato', 'Pide tiempo', 'Necesito conversarlo con mi esposo. ¿Puedo responder el miércoles?'], ['Analista de marketing de Misti', 'Se molesta', '¿Y por qué yo? ¿Quién decidió que marketing de Characato era mejor?']],
    prompt: 'La jefa de operaciones pide hasta el miércoles; el plazo de la carta vence el martes. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Proponerle a Ernesto darle hasta el miércoles y ofrecerle una conversación el lunes para resolver sus dudas sobre la vacante y el retiro.',
        res: { q: 'buena', fx: { personas: 4, etica: 3, tiempo: -1 }, flags: ['nueve_acompanadas'], cartera: { nueve: '4 de 9: una vacante, un retiro, una con plazo hasta el miércoles, una con dudas' },
          out: 'Ernesto acepta. La jefa de operaciones sale con los ojos húmedos, pero con la carta bien doblada. Al analista de marketing le explicas los criterios, como a Rocío. No sale contento, pero sale con razones.',
          pro: { ok: 'Un día más hace que la decisión sea realmente suya.', info: 'Deja por escrito el nuevo plazo.' },
          kusi: ['animo', 'Un día más puede valer una decisión libre.'] } },
      { id: 'b', label: 'Mantener el martes: si se le da más plazo a una, todas lo pedirán.',
        res: { q: 'aceptable', fx: { tiempo: 1, personas: -3 },
          out: 'La jefa de operaciones asiente en silencio. El martes, firma el retiro sin haber conversado con nadie. Nunca sabrás si fue lo que quería.',
          pro: { ok: 'Mantienes el plazo para todos.', risk: 'Un plazo rígido para una decisión de vida puede volver menos libre una elección voluntaria.' },
          kusi: ['pensando', '¿Era tan importante el martes?'] } },
    ],
    rules: [[BP, 'Una decisión voluntaria necesita información y tiempo razonable.']],
    mirada: {
      ve: 'Las nueve conversaciones son el lado menos visible de un organigrama. Cada persona reacciona distinto: alivio, rabia, miedo, una oferta en Lima. DO no decide por ellas: se asegura de que cada una decida con información y tiempo.',
      visual: { tipo: 'embudo', titulo: 'Las nueve conversaciones', niveles: [['Personas sin puesto equivalente', 9], ['Conversaciones de esta mañana', 4], ['Con una decisión hoy', 2]] },
    },
  },
  {
    id: 'z2', t: '11:30', ch: 'presencial', who: 'ernesto', titulo: 'La devolución de Ernesto', banner: 'assets/foto/mentora.webp', lugar: 'Terraza de la sede, frente al Misti', show: ['confianza', 'calidad'],
    body: () => `<p>Ernesto te invita un café en la terraza. El Misti está despejado, sin su gorrito de nubes. «Dos semanas. ¿Qué quieres saber de mí?»</p><p>Tienes tiempo para <mark class="clave">dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Ernesto.',
    opts: [
      { id: 'mejorar', label: '¿Qué debería hacer distinto?', info: '«A veces te apuras en defender a la gente y te olvidas de preguntarle al gerente qué le preocupa. Linares no es tu enemigo: tiene miedo de que esto fracase. Pregunta más, defiende después.»' },
      { id: 'bien', label: '¿Qué hice bien?', info: '«No elegiste un bando. Eso, en una fusión, es lo más difícil. Los de Characato te dicen "doctorcita" y los de Misti te escriben con emojis. Las dos cosas son buena señal.»' },
      { id: 'futuro', label: '¿Qué viene para DO en la cooperativa?', info: '«Cultura, perfiles de soporte, bandas salariales con el cuadro de categorías y, desde el lunes, la red rural. Hay trabajo para un año, si quieres quedarte.»' },
      { id: 'el', label: '¿Cómo estás tú?', info: 'Ernesto se ríe, sorprendido. «Cansado. Hace treinta años que hago esto y nunca se vuelve fácil decirle a alguien que su puesto cambia. Gracias por preguntar.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, calidad: picks.includes('mejorar') ? 3 : 1 }, rel: { ernesto: 1 },
      flags: picks.includes('mejorar') ? ['devolucion_pedida'] : [],
      out: picks.includes('mejorar') ? 'Anotas la frase en tu libreta: «Pregunta más, defiende después». Te va a servir el lunes.' : 'Terminan el café en silencio, mirando el volcán. Es un silencio cómodo.',
      kusi: ['feliz', '¡Pedir devolución es de valientes!'],
    }),
    rules: [[BP, 'Pide devolución a tu jefe: lo que haces bien y lo que puedes mejorar.']],
    mirada: {
      ve: 'Al final de un proyecto intenso, la devolución de quien te vio trabajar vale más que cualquier evaluación formal. Y preguntarle a tu jefe cómo está también es parte del oficio: en una fusión, todos cargan algo.',
      visual: { tipo: 'balanza', a: { t: 'Lo que hiciste bien', items: ['No elegir bando', 'Criterios antes que nombres', 'La voz de abajo llegó arriba'] }, b: { t: 'Lo que puedes mejorar', items: ['Preguntar antes de defender', 'Entender el miedo del gerente'] } },
    },
  },
  {
    id: 'z3', t: '12:20', ch: 'documento', who: null, titulo: 'Lo que te llevas', banner: 'assets/esc/logro.webp', lugar: 'Tu escritorio, junto a la fotocopiadora', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Ordenas tu escritorio. ${F.has('mapa_bueno') ? 'El mapa A3 del primer día ya tiene manchas de café y anotaciones en tres colores.' : 'Los dos organigramas del primer día siguen sujetos con el clip de Ernesto.'}</p><p>De todo lo que hiciste, eliges <mark class="clave">tres cosas</mark> que quieres seguir haciendo igual en la Semana 3.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres prácticas que te llevas.', boton: 'Llevarme estas', resumen: 'Te llevas',
    cols: ['Práctica', 'Dónde la aprendiste'],
    rows: [
      { id: 'mirar', cells: ['Describir lo que hay antes de diseñar', 'El mapa del primer día'] },
      { id: 'criterios', cells: ['Criterios antes que nombres', 'Los duplicados y los perfiles'] },
      { id: 'reserva', cells: ['Cuidar lo que la gente cuenta', 'El grupo focal y la conversación con Rocío'] },
      { id: 'primero', cells: ['Primero a quienes les toca', 'El rumor y las nueve conversaciones'] },
      { id: 'rapido', cells: ['Dar respuestas rápidas aunque no sean seguras', 'Cuando el rumor apretaba'] },
      { id: 'gerente', cells: ['Hacer lo que pide el gerente sin discutir', 'Cuando Linares presionaba'] },
    ],
    score: { mirar: 3, criterios: 3, reserva: 3, primero: 3, rapido: -2, gerente: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 },
        out: q === 'buena' ? 'Las escribes en un pósit amarillo y lo pegas en la pantalla. Junto a la frase de Ernesto: «Pregunta más, defiende después».' : 'Tu lista mezcla prácticas que te sirvieron con otras que te pusieron en riesgo. Vale la pena revisarla.',
        pro: { ok: 'Mirar, criterios, reserva y primero a los afectados: el corazón de DO en un cambio.', risk: 'Responder rápido sin certeza o seguir al gerente sin discutir fueron, justamente, las trampas de estas dos semanas.', info: 'Revisa la lista dentro de un mes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Esas prácticas ya son tuyas!' : 'Algunas fueron trampas…'],
      };
    },
    rules: [[BP, 'Cerrar un proyecto incluye decidir qué prácticas conservas.']],
    mirada: {
      ve: 'Las dos semanas te dejan un oficio más que una lista de entregables: mirar antes de diseñar, fijar criterios antes de ver nombres, cuidar lo que te cuentan y avisar primero a quien le toca. Eso sirve en cualquier cambio, no solo en esta fusión.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes 1', 'La fusión: el mapa'], ['Martes 1', 'Los duplicados'], ['Miércoles 1', 'Dos culturas'], ['Jueves 1', 'Los perfiles'], ['Viernes 1', 'El rumor'], ['Lunes 2', 'La resistencia'], ['Martes 2', 'La conversación'], ['Miércoles 2', 'El taller'], ['Jueves 2', 'El organigrama'], ['Viernes 2', 'Dos semanas']] },
    },
  },
  {
    id: 'z4', t: '13:15', ch: 'presencial', who: 'jefa', titulo: 'Chupe de viernes', banner: 'assets/foto2/celebra-brazos.webp', lugar: 'Picantería en Cayma', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Es viernes y en Arequipa los viernes son de chupe de camarones. ${F.has('rocio_escuchada') ? 'Rocío te invita a almorzar «con los de créditos».' : 'Kevin te invita a almorzar «con los de créditos».'} Al mismo tiempo, Valeria y los de Cayma te escriben para ir a otra picantería.</p><p><mark class="clave">¿Con quién almuerzas?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Proponer juntar las dos mesas en una sola picantería.',
        res: { q: 'buena', fx: { personas: 4, confianza: 2 }, rel: { jefa: 1, analista: 1 }, flags: ['almuerzo_mixto'],
          out: 'Terminan doce personas en una mesa larga, con tres fuentes de chupe y una de rocoto relleno. Rocío y Valeria hablan de garantías de alpacas como si se conocieran de años. Kevin enseña fotos de su hija a todos.',
          pro: { ok: 'Haces lo mismo que en el taller, pero sin papelógrafo.', info: 'Lo informal también integra: a veces más que lo formal.' },
          kusi: ['celebra', '¡Una sola mesa! ¡Qué divino!'] } },
      { id: 'b', label: 'Ir con los de créditos de Characato: te invitaron primero.',
        res: { q: 'aceptable', fx: { personas: 2 }, rel: { analista: 1 },
          out: 'El almuerzo es cálido. Valeria te manda una foto de su mesa con un «te extrañamos 😢».',
          pro: { ok: 'Respetas la primera invitación.', risk: 'Un almuerzo también se lee como señal en una fusión.' },
          kusi: ['pensando', '¿Y la otra mesa?'] } },
      { id: 'c', label: 'Almorzar sola en tu escritorio: después de dos semanas, necesitas un rato de silencio.',
        res: { q: 'aceptable', fx: { personas: 0, tiempo: 1 },
          out: 'Comes un sánguche mirando el Misti por la ventana. Te hace falta, y está bien.',
          pro: { ok: 'Cuidar tu energía también es parte del trabajo.', risk: 'Te pierdes un momento que pocas veces se repite.' },
          kusi: ['curioso', 'Descansar también vale.'] } },
    ],
    rules: [[BP, 'Los espacios informales también construyen la integración.']],
    mirada: {
      ve: 'Una fusión se consolida en lo pequeño: quién almuerza con quién, a quién se invita, quién se ríe con quién. Lo que no logra un organigrama lo logra a veces una mesa larga con chupe de camarones.',
      visual: { tipo: 'cambio', titulo: 'Del primer día al último', pares: [['Dos credenciales de colores', 'Una mesa larga'], ['«Los de Misti» y «los de Characato»', '«Los de créditos»'], ['Un almuerzo que se leía como alianza', 'Un almuerzo de todos']] },
    },
  },
  {
    id: 'z5', t: '15:30', ch: 'whatsapp', who: null, titulo: 'La respuesta del viernes', banner: 'assets/foto2/celebra-laptop.webp', lugar: 'Sede de Cayma', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Las nueve personas ya conversaron con Gestión Humana. Ahora toca la respuesta semanal a los 480, ${F.has('plan_comunicacion') ? 'como dice tu plan de comunicación' : 'como quedó en el comunicado del viernes pasado'}.</p><p><mark class="clave">Arma el mensaje</mark>.</p>`,
    type: 'compose', enviaA: 'todos', para: 'Para: Cooperativa del Sur · Comunicados', boton: 'Publicar',
    prompt: 'Arma la respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Lo aprobado', ops: [
        { id: 'q1', t: 'El consejo aprobó la nueva estructura de la Cooperativa del Sur. La pueden ver en la intranet y en el panel de cada agencia.', ok: true, por: 'Claro y accesible para todos.' },
        { id: 'q2', t: '¡Ya somos oficialmente una sola familia! 🎉', ok: null, por: 'Alegre, pero no informa.' },
      ] },
      { id: 'personas', t: 'Las personas', ops: [
        { id: 'p1', t: 'Las personas cuyo puesto cambia ya conversaron hoy con Gestión Humana, una por una. Respetemos su tiempo para decidir.', ok: true, por: 'Dice lo justo, sin nombres.' },
        { id: 'p2', t: 'Las nueve personas afectadas son de contabilidad, marketing y operaciones.', ok: false, por: 'En áreas pequeñas, eso identifica a cada una.' },
      ] },
      { id: 'sigue', t: 'Lo que sigue', ops: [
        { id: 's1', t: 'Desde el lunes, Gestión Humana analizará con cada agencia rural cómo servir mejor a sus socios, empezando por Chivay. Ninguna decisión se tomará sin escucharlas.', ok: true, por: 'Anuncia el encargo sin alarmar.' },
        { id: 's2', t: 'Próximamente se revisarán las agencias que no son rentables.', ok: false, por: 'Es una invitación al próximo rumor.' },
      ] },
    ],
    res: sel => {
      const mal = sel.personas === 'p2' || sel.sigue === 's2', buenas = ['q1', 'p1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -4 : 1, personas: q === 'buena' ? 3 : mal ? -3 : 0 },
        flags: q === 'buena' ? ['respuesta_semanal'] : [], cartera: { respuesta: q === 'buena' ? 'Respuesta semanal publicada' : 'Respuesta publicada con riesgos' },
        out: q === 'buena' ? 'Por primera vez en dos semanas, el grupo «Characato de corazón» comparte un comunicado oficial sin comentarios de miedo.' : mal ? 'En diez minutos, alguien adivina los nombres. Y otro pregunta: «¿Qué agencias no son rentables?».' : 'El mensaje llega. Varios preguntan por Chivay en los comentarios.',
        pro: { ok: 'Lo aprobado, el cuidado de las personas y lo que sigue, sin alarmar.', risk: 'Áreas pequeñas o palabras como «no rentables» reabren el rumor.', info: 'Contesta tú las preguntas del buzón la próxima semana.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡El rumor perdió esta vez!' : mal ? 'Ahí viene otro audio…' : 'Faltó algo.'],
      };
    },
    rules: [[BP, 'Comunica lo aprobado sin identificar a las personas afectadas.']],
    mirada: {
      ve: 'El primer viernes, el rumor llegó antes que la verdad. El segundo viernes, la verdad llega primero. Esa diferencia es buena parte de lo que DO aporta en un cambio.',
      visual: { tipo: 'cambio', titulo: 'De un viernes al otro', pares: [['Audio: «botan a 50»', 'Comunicado: estructura aprobada'], ['Nadie sabía nada', 'Cada afectado lo supo primero'], ['Miedo por las agencias', 'Chivay: escuchar antes de decidir']] },
    },
  },
  {
    id: 'z6', t: '17:30', ch: 'correo', who: null, titulo: 'El encargo de Chivay', banner: 'assets/3d/scenes/agro.webp', show: ['etica', 'calidad', 'confianza'],
    mail: { from: 'Fernando Linares · Gerencia General', to: 'Analista de DO', asunto: 'Chivay' },
    body: () => `<p>Felicitaciones por el consejo. El lunes vas a Chivay. Sé honesta: <mark class="clave">yo creo que no da los números</mark>. Quiero tu recomendación en dos semanas.</p><p>F. Linares</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecer y proponer los criterios del análisis antes de viajar: socios atendidos, cartera, distancia a la agencia más cercana, costo y alternativas (agencia más chica, días de atención, agentes). La recomendación saldrá de ahí.',
        res: { q: 'buena', fx: { etica: 4, calidad: 4, confianza: 2 }, flags: ['chivay_abierta'], cartera: { chivay: 'Criterios del análisis enviados a Linares' },
          responde: 'Dr. Linares: gracias. Antes de viajar le propongo los criterios: socios atendidos, cartera y mora, distancia a la agencia más cercana, costo y alternativas como una agencia más pequeña o días fijos de atención. La recomendación saldrá de ese análisis, y la tendrá en dos semanas.',
          out: 'Linares responde a la media hora: «De acuerdo. Pero que el análisis sea serio». En la ventana, el cielo se pone naranja sobre el Chachani.',
          pro: { ok: 'Vas a analizar, no a confirmar.', risk: 'Linares puede sentir que no compartes su intuición.', info: 'Aplica la frase de Ernesto: pregúntale qué le preocupa de Chivay.' },
          kusi: ['animo', 'Criterios primero, conclusión después. ¡Como siempre!'] } },
      { id: 'b', label: 'Responder que entiendes y que irás a reunir la información para respaldar el cierre.',
        res: { q: 'riesgosa', fx: { etica: -4, calidad: -3 }, flags: ['chivay_cierre'], cartera: { chivay: 'Análisis con conclusión escrita de antemano' },
          responde: 'Dr. Linares: entendido. Iré a reunir la información para respaldar el cierre de Chivay.',
          out: 'Linares responde con un «perfecto». A las seis, su chofer ya lo comenta en el paradero. A Chivay la noticia llega antes que tú.',
          pro: { ok: 'Alineas con el gerente.', risk: 'Un análisis con la conclusión decidida pierde toda credibilidad, incluso si al final la conclusión es la correcta.' },
          kusi: ['preocupado', '¿Y lo que dijo don Teodoro en el consejo?'] } },
    ],
    rules: [[BP, 'Un análisis empieza con criterios, no con la conclusión.']],
    mirada: {
      ve: 'Linares puede tener razón: quizás Chivay no da los números. Pero también puede ser la única agencia en tres horas de camino para cientos de criadoras de alpacas. Tu valor está en llegar a la respuesta con un método que cualquiera, en Cayma o en Chivay, pueda revisar.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice Linares', items: ['No da los números', 'Queda lejos', 'Cuesta mantenerla'] }, b: { t: 'Lo que hay que mirar', items: ['Socios que atiende', 'Distancia a la siguiente agencia', 'Alternativas a cerrar'] } },
    },
  },
  {
    id: 'z7', t: '18:40', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Ejército', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Esperas el colectivo con la mochila llena de papeles y el celular sin batería. Dos semanas: un mapa, 18 duplicados, dos culturas, un rumor, un taller, una conversación que no olvidarás y un organigrama aprobado. ${F.has('chivay_abierta') ? 'El lunes, a las cinco de la mañana, sale el bus a Chivay.' : 'El lunes te espera Chivay, y Chivay ya sabe a qué vas.'}</p><p>Antes de subir, te haces la pregunta de verdad: <mark class="clave">¿te ves en este puesto?</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Sí. Lo que más me movió fue ver que una estructura bien pensada cambia el día de la gente.',
        res: { q: null, fx: { confianza: 3 },
          out: 'Sube el colectivo. Te sientas junto a la ventana y, sin darte cuenta, empiezas a pensar en los criterios para Chivay.',
          kusi: ['celebra', '¡El lunes, a la puna!'] } },
      { id: 'b', label: 'Sí, pero me cuesta cargar las conversaciones difíciles. Tengo que aprender a cuidarme también.',
        res: { q: null, fx: { personas: 2, confianza: 2 },
          out: 'Te acuerdas de Ernesto: «Nunca se vuelve fácil». Quizás eso es lo que lo hace bien hecho.',
          kusi: ['animo', 'Sentirlo es parte del oficio. Cuidarte, también.'] } },
      { id: 'c', label: 'Todavía no lo sé. Me gustó entender a las personas, pero no sé si quiero vivir en medio del conflicto.',
        res: { q: null, fx: { confianza: 1 },
          out: 'Es una respuesta honesta. Chivay te dará más pistas.',
          kusi: ['pensando', 'No saber también es una respuesta. ¡Sigue mirando!'] } },
    ],
    mirada: {
      ve: 'Desarrollo Organizacional es un trabajo que tarda en verse y que se nota cuando falta. Estas dos semanas fueron solo el comienzo de una fusión que tomará meses. El lunes empieza otra pregunta, a 3,600 metros de altura: ¿qué necesita de verdad una agencia rural para servir a sus socios?',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Lunes, 5:00', 'Bus a Chivay'], ['Semana 3', 'Análisis de la red rural'], ['Semana 4', 'Recomendación al gerente y al consejo']] },
    },
  },
];
