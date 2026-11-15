// Analista de People Analytics · Capítulo 1 · «Sesenta por ciento» · Semana 1, lunes.
// Hilo de las dos semanas: HogarPlus (ficticia) pierde al 60 % de sus vendedores en un año y la gerencia quiere saber por qué.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733, Ley de Protección de Datos Personales: art. 2 num. 5 (datos sensibles), art. 6 (finalidad), art. 7 (proporcionalidad).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS, Reglamento de la Ley 29733 (El Peruano, 30/11/2024): art. 46 (control y gestión de accesos).
// La fórmula de rotación (salidas del periodo entre plantilla promedio) es una buena práctica, no una norma.

export const CAP = {
  n: 1, titulo: 'Sesenta por ciento', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/retail.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo, Lima',
  inicio: '08:30', fin: '18:45', cierreHora: '18:30',
  apertura: 'Lima, lunes de garúa. Entras a HogarPlus, una cadena de mejoramiento del hogar con 34 tiendas y 4,000 colaboradores. Eres la nueva analista de People Analytics.', boton: 'Pasar la credencial',
  kusi: 'Hoy no se analiza nada: hoy se aprende a preguntar. ¡Dale!',
  lead: 'Entendiste qué quiere de verdad la gerencia, convertiste un «¿por qué se van?» en una pregunta que se puede responder y pediste solo los datos que hacen falta.',
  reflexion: '¿Qué decisión se tomará con tu análisis? Si no lo sabes, todavía no tienes una pregunta.',
  siguiente: { n: 2, titulo: 'Los datos sucios', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'pregunta', p: 'Pregunta de análisis', j: 'Diego · People Analytics', d: 0, e: 'Por definir' },
  { id: 'datos', p: 'Bases de datos', j: 'Pedro · TI / Rocío · Planillas', d: 0, e: 'Sin pedir' },
  { id: 'comite', p: 'Comité de gerencia', j: 'Mónica · Tiendas', d: 0, e: 'Miércoles de la próxima semana' },
  { id: 'rotacion', p: 'Rotación de vendedores', j: 'Tú', d: 0, e: '«60 %» sin fórmula conocida' },
];

export const FUTURO = {
  monica_reencuadre: ['Le preguntaste a Mónica qué decisión tomará con tu análisis.', 'Ella recordará que la escuchaste. Capítulo 8.'],
  monica_sueldo: ['Aceptaste «confirmar que es el sueldo».', 'Esa promesa te pesará cuando los datos digan otra cosa.'],
  pregunta_clara: ['Tu pregunta de análisis tiene población, métrica, periodo y decisión.', 'Sabrás qué datos limpiar en el capítulo 2.'],
  pregunta_vaga: ['Tu pregunta quedó amplia.', 'Mañana no sabrás qué columnas importan.'],
  fuentes_invasivas: ['Pediste datos que no hacen falta (biométricos o correos).', 'Pedro te lo recordará.'],
  acceso_minimo: ['Pediste a TI solo los campos necesarios, con su finalidad.', 'Pedro te tendrá confianza.'],
  acceso_todo: ['Pediste «toda la base».', 'Pedro frenará tu acceso y perderás un día.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  pedro: { n: 'Pedro Caycho', sub: 'Analista de TI', who: 'ti' },
  rocio: { n: 'Rocío Quispe', sub: 'Analista de Planillas', c: '#8A5A2B' },
};

export const WSP = [
  { chat: 'equipo', t: '08:35', de: 'Diego', txt: 'Bienvenida 👋 Estoy en el piso 3, al fondo, al lado del dispensador que gotea.' },
  { chat: 'monica', t: '09:40', de: 'Mónica', txt: '¿Tú eres la de los datos? Te espero a las 10 en mi oficina. Cinco minutos, tengo visita de tiendas.' },
  { chat: 'rocio', t: '13:05', de: 'Rocío', txt: 'Hola, hijita. Diego me dijo que vas a necesitar los ceses. Yo los tengo desde 2019, pero cada año en un formato distinto 😅' },
  { chat: 'pedro', t: '16:40', de: 'Pedro', txt: 'Gracias por decirme para qué es cada campo. Así sí lo puedo aprobar rápido 👍', si: 'acceso_minimo' },
  { chat: 'pedro', t: '16:40', de: 'Pedro', txt: '¿Toda la base? Eso no lo puedo dar sin el visto de Diego y del Oficial de Datos. Mándame qué campos y para qué.', si: 'acceso_todo' },
  { chat: 'equipo', t: '18:35', de: 'Diego', txt: 'Buen primer día. Mañana empieza lo feo: limpiar 😄' },
];

export const CORREOS = [
  { t: '08:32', de: 'Diego Paz', para: 'Analista de People Analytics', asunto: 'Tu primera semana', html: '<p>¡Bienvenida! El encargo es uno solo: la rotación de vendedores llegó a 60 % y la Gerencia de Tiendas quiere entender por qué. Tenemos dos semanas: el miércoles de la próxima semana Mónica lo presenta en el comité de gerencia.</p><p>Una advertencia: aquí todos tienen ya su respuesta. Nuestro trabajo es tener la pregunta correcta.</p><p>Diego</p>' },
  { t: '12:10', de: 'Mónica Larrea', para: 'Analista de People Analytics; Diego Paz', asunto: 'RV: Rotación tiendas', html: '<p>Les reenvío lo que me mandó Finanzas: «Rotación anual de vendedores: 60 %». Cada vendedor que se va nos cuesta reclutar, capacitar y meses de ventas bajas. Necesito saber qué hacer, no un estudio.</p><p>Mónica</p>' },
];

export const QUIZ = [
  { q: '¿Qué hace que una pregunta de People Analytics sea útil?', ops: ['Que sea amplia, para no dejar nada fuera', 'Que diga población, métrica, periodo y qué decisión se tomará', 'Que confirme lo que cree la gerencia', 'Que use muchas variables'], ok: 1, por: 'Una pregunta útil está atada a una decisión y define a quién, qué y cuándo se mide.' },
  { q: 'La rotación anual se suele calcular como…', ops: ['Salidas del año entre plantilla promedio del año', 'Salidas entre ingresos', 'Plantilla de diciembre entre plantilla de enero', 'Renuncias entre despidos'], ok: 0, por: 'Es la fórmula más común. Lo importante es decir siempre cuál usas.' },
  { q: 'Según la Ley 29733, los datos personales deben recopilarse…', ops: ['Por si algún día sirven', 'Para una finalidad determinada, explícita y lícita', 'Solo si son públicos', 'Solo con orden judicial'], ok: 1, por: 'Es el principio de finalidad (art. 6).' },
  { q: '¿Cuál de estos es un dato sensible según la Ley 29733?', ops: ['El código de vendedor', 'La tienda donde trabaja', 'La huella digital del marcador biométrico', 'La fecha de ingreso'], ok: 2, por: 'Los datos biométricos que identifican a la persona son sensibles (art. 2, num. 5).' },
  { q: 'Para tu análisis, pedir «toda la base de personal» a TI…', ops: ['Es lo más eficiente', 'Va contra la proporcionalidad: se pide lo adecuado y no excesivo', 'Está bien si es para RR.HH.', 'Solo es un problema si sale de la empresa'], ok: 1, por: 'Principio de proporcionalidad (art. 7): adecuado, relevante y no excesivo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '08:45', ch: 'presencial', who: 'diego-pa', titulo: 'El piso 3, al fondo', banner: 'assets/foto/oficina-abierta.webp', show: ['confianza', 'calidad'],
    body: (n) => `<p>Diego tiene dos monitores, una taza que dice «correlación no es causalidad» y una planta medio seca. Te pasa una silla con una rueda floja.</p><p>«Bienvenida${n ? ', ' + n : ''}. Antes de abrir un solo Excel, <mark class="clave">pregúntame lo que necesites</mark>. Tengo hasta las nueve y media.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'antes', label: '¿Alguien ya intentó explicar esta rotación?', info: '«Sí. El año pasado una consultora hizo una encuesta y concluyó que era "el mercado". Nadie hizo nada. Por eso esta vez quiero algo que termine en una decisión.»' },
      { id: 'numero', label: '¿De dónde sale el 60 %?', info: '«De Finanzas. No sé con qué fórmula. Anota eso: si no sabes cómo se calculó un número, todavía no es tuyo.»' },
      { id: 'monica', label: '¿Qué espera Mónica?', info: '«Que confirmemos que es el sueldo y que Finanzas le apruebe un aumento. Puede que tenga razón. O no. Ella está bajo presión: el directorio la mide por la rotación.»' },
      { id: 'herram', label: '¿Con qué herramientas trabajamos?', info: '«Excel, un poco de SQL para sacar datos y Power BI para el tablero. Y paciencia para las bases de Planillas.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('numero') ? 2 : 1, calidad: picks.includes('numero') ? 2 : 0 }, rel: { 'diego-pa': picks.includes('antes') || picks.includes('numero') ? 1 : 0 },
      cartera: picks.includes('numero') ? { rotacion: '60 % de Finanzas: fórmula por confirmar' } : undefined,
      out: 'Diego mira el reloj: «Mónica te va a llamar. Escúchala bien, pero no le prometas resultados».',
      kusi: ['curioso', 'Ya sabes que el 60 % todavía no es tuyo.'],
    }),
    mirada: {
      ve: 'En People Analytics, el primer día no se analiza: se averigua qué se intentó antes, de dónde salen los números y qué espera cada persona. La mitad de los análisis fracasan por una pregunta mal entendida, no por un cálculo.',
      visual: { tipo: 'flujo', titulo: 'Antes de abrir el Excel', pasos: ['Historia del problema', 'Origen del número', 'Quién decide', 'Qué decidirá'] },
    },
  },
  {
    id: 'a2', t: '10:00', ch: 'presencial', who: 'gerente', titulo: '«Ya sé por qué se van»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la Gerencia de Tiendas', show: ['confianza', 'etica', 'calidad'],
    body: () => `<p>Mónica habla mientras firma vales de caja chica. En la pared hay un mapa de Lima con alfileres rojos: las 34 tiendas.</p><p>«Mira, yo conozco mis tiendas. Se van porque la competencia paga más. <mark class="clave">Solo necesito que me lo confirmes con números</mark> para el comité. ¿Puedes?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Preguntarle qué haría con la respuesta: si es el sueldo, ¿qué decide?; y si no lo es, ¿qué otra cosa estaría dispuesta a cambiar?',
        res: { q: 'buena', fx: { calidad: 4, confianza: 2, etica: 2 }, rel: { gerente: 1 }, flags: ['monica_reencuadre'],
          out: 'Mónica deja de firmar. «Si es el sueldo, pido un aumento de comisiones. Si no… no sé. Capacitar supervisores, quizás. Ya, búscalo todo, pero rápido.»',
          pro: { ok: 'Atas el análisis a una decisión real sin descartar su hipótesis.', risk: 'Puede sentir que dudas de ella.', info: 'La hipótesis de la gerencia es un buen punto de partida, no una conclusión.' },
          kusi: ['celebra', '¡Ahora sí hay pregunta!'] } },
      { id: 'b', label: 'Decirle que sí: ella conoce las tiendas y es una hipótesis razonable; buscarás los números del sueldo.',
        res: { q: 'riesgosa', fx: { confianza: 3, etica: -3, calidad: -3 }, rel: { gerente: 1 }, flags: ['monica_sueldo'],
          out: '«Perfecto, así me gusta.» Sales con una conclusión antes de tener un dato.',
          pro: { ok: 'Mónica queda contenta.', risk: 'Si buscas solo lo que confirma, encontrarás solo eso. Y si los datos dicen otra cosa, quedarás atrapada.' },
          kusi: ['preocupado', '¿Y si no es el sueldo?'] } },
      { id: 'c', label: 'Explicarle que no puedes confirmar nada hasta tener los datos, y que te dé dos semanas sin opinar.',
        res: { q: 'aceptable', fx: { calidad: 2, confianza: -3 }, rel: { gerente: -1 },
          out: 'Mónica sonríe sin ganas: «Dos semanas es lo que tienes. Ni un día más». No te preguntó nada más.',
          pro: { ok: 'No prometes resultados.', risk: 'Pierdes la oportunidad de saber qué decisión espera tomar.' },
          kusi: ['pensando', 'Cierto, pero un poco seco…'] } },
    ],
    rules: [[BP, 'Antes de analizar, pregunta qué decisión se tomará con el resultado.']],
    mirada: {
      ve: 'Mónica no es enemiga de los datos: está presionada y ya tiene una explicación. El buen analista no le dice «se equivoca» ni «tiene razón»: convierte su hipótesis en una de varias que se van a poner a prueba.',
      visual: { tipo: 'balanza', a: { t: 'Confirmar lo que ya cree', items: ['Respuesta rápida', 'Gerenta contenta'] }, b: { t: 'Poner a prueba varias hipótesis', items: ['Sueldo', 'Supervisor', 'Primeros meses', 'Horarios'] } },
    },
  },
  {
    id: 'a3', t: '11:30', ch: 'documento', who: null, titulo: 'La pregunta de análisis', banner: 'assets/esc/idea.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('monica_sueldo') ? 'En tu cuaderno escribiste «confirmar sueldo». Diego lo lee y tacha con cuidado la palabra confirmar.' : 'Diego te pasa un post-it amarillo: «Escribe la pregunta en una sola oración».'}</p><p>Abres un documento en blanco. <mark class="clave">Una pregunta que se pueda responder</mark> tiene piezas precisas.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu pregunta de análisis.', boton: 'Guardar la pregunta',
    bloques: [
      { id: 'pob', t: 'A quiénes miras', n: 1, ops: [
        { id: 'p1', t: 'Vendedores de las 34 tiendas que salieron en los últimos 12 meses, comparados con los que se quedaron.', ok: true, por: 'Sin el grupo que se quedó, no sabes qué es distinto.' },
        { id: 'p2', t: 'Todos los colaboradores de HogarPlus.', ok: false, por: 'Mezclas almacén, oficina y tiendas: el problema es de vendedores.' },
      ] },
      { id: 'met', t: 'Qué mides', n: 2, ops: [
        { id: 'm1', t: 'Rotación = salidas del periodo / plantilla promedio, separando renuncias de despidos y fin de contrato.', ok: true, por: 'No es lo mismo que alguien renuncie a que no le renueven.' },
        { id: 'm2', t: 'En qué mes de permanencia se van (antes de 3 meses, de 3 a 12, más de 12).', ok: true },
        { id: 'm3', t: 'Cuántos se van, sin fórmula: el número habla solo.', ok: false, por: 'Un número sin fórmula no se puede comparar con nada.' },
      ] },
      { id: 'dec', t: 'Para qué decisión', n: 1, ops: [
        { id: 'd1', t: 'Para elegir en qué acción invertir: sueldo y comisiones, supervisores, inducción u horarios.', ok: true, por: 'La pregunta termina en algo que alguien hará.' },
        { id: 'd2', t: 'Para saber quién tiene la culpa.', ok: false, por: 'Buscar culpables cierra la conversación antes de entender.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: [q === 'buena' ? 'pregunta_clara' : 'pregunta_vaga'], cartera: { pregunta: q === 'buena' ? 'Definida: quiénes, qué, cuándo y para qué' : 'Definida a medias' },
        out: q === 'buena' ? 'Diego lee tu oración dos veces. «Esto lo pego en la primera diapositiva del comité.»' : 'Diego frunce el ceño: «Con esto mañana vas a querer limpiar todas las columnas del mundo».',
        pro: { ok: 'Una buena pregunta te dice qué datos necesitas y cuáles no.', risk: 'Una pregunta vaga hace que pidas de más y analices de menos.', info: 'Separa siempre renuncias de despidos: son problemas distintos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una oración que ordena dos semanas!' : 'Le faltan piezas…'],
      };
    },
    mirada: {
      ve: '«¿Por qué se van?» es una pregunta de pasillo. «¿Qué distingue a los vendedores que renunciaron en el último año de los que se quedaron, para decidir en qué acción invertir?» es una pregunta de análisis. La diferencia decide todo lo que viene.',
      visual: { tipo: 'cambio', titulo: 'De la pregunta de pasillo a la de análisis', pares: [['¿Por qué se van?', '¿Qué distingue a quienes renuncian de quienes se quedan?'], ['60 %', 'Salidas / plantilla promedio, por tipo de salida'], ['¿Quién tiene la culpa?', '¿En qué acción invertimos?']] },
    },
  },
  {
    id: 'a4', t: '14:30', ch: 'documento', who: null, titulo: 'Qué datos pedir', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Almuerzas un menú de pollo a la plancha en la calle de atrás y vuelves con la garúa en el pelo. Diego te deja elegir: <mark class="clave">tres fuentes</mark> para empezar. Lo demás, después.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres fuentes que vas a pedir.', boton: 'Pedir estas', resumen: 'Pediste',
    cols: ['Fuente', 'Quién la tiene'],
    rows: [
      { id: 'ceses', cells: ['Planilla de ingresos y ceses con tienda, cargo, supervisor y motivo de cese', 'Rocío · Planillas'] },
      { id: 'comis', cells: ['Ventas y comisiones mensuales por código de vendedor', 'Pedro · TI'] },
      { id: 'salida', cells: ['Encuestas de salida de los últimos 12 meses', 'Lucía · HRBP de tiendas'] },
      { id: 'clima', cells: ['Encuesta de clima anónima del año pasado, por tienda', 'Diego'] },
      { id: 'bio', cells: ['Huellas y marcaciones del reloj biométrico', 'Seguridad'] },
      { id: 'mails', cells: ['Correos y chats corporativos de los vendedores', 'Pedro · TI'] },
    ],
    score: { ceses: 3, comis: 2, salida: 3, clima: 2, bio: -3, mails: -4 },
    res: (picks, sc) => {
      const inv = picks.includes('bio') || picks.includes('mails');
      const q = inv ? 'riesgosa' : sc >= 7 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, etica: inv ? -5 : 2, cumplimiento: inv ? -4 : 2 },
        flags: inv ? ['fuentes_invasivas'] : [], cartera: { datos: inv ? 'Pedido con fuentes que no corresponden' : 'Pedido: ' + picks.length + ' fuentes necesarias' },
        out: inv ? 'Diego te mira por encima de los lentes: «¿Para qué quieres las huellas o los correos de la gente? Eso no responde tu pregunta y nos mete en un problema».' : picks.includes('ceses') ? 'Con los ceses y las encuestas tienes el corazón del análisis. Diego asiente.' : 'Sin la planilla de ceses no sabes ni quién se fue. Diego te sugiere pedirla igual.',
        pro: { ok: 'Pides lo que responde tu pregunta.', risk: 'Más datos no es mejor análisis: es más riesgo y más trabajo.', info: 'La huella del biométrico es un dato sensible: para marcar asistencia sirve; para tu análisis, no.' },
        kusi: [inv ? 'indignado' : 'feliz', inv ? '¡¿Sus correos?! No, pues.' : 'Lo justo y necesario. ¡Bacán!'],
      };
    },
    rules: [[LEY, 'Los datos se tratan solo para una finalidad determinada y explícita (Ley 29733, art. 6).'], [LEY, 'El tratamiento debe ser adecuado, relevante y no excesivo (Ley 29733, art. 7).'], [LEY, 'Los datos biométricos que identifican a la persona son datos sensibles (Ley 29733, art. 2, num. 5).']],
    mirada: {
      ve: 'La tentación de quien analiza es pedirlo todo «por si acaso». La Ley 29733 pide lo contrario: cada dato tiene que servir a una finalidad clara. Además, cada columna extra es una columna más que limpiar.',
      visual: { tipo: 'matriz', x: 'Riesgo para las personas', y: 'Utilidad para la pregunta', cuadrantes: ['Pídelo', 'Con cuidado', 'Después', 'No lo pidas'], items: [['Ceses', .15, .95], ['Encuesta de salida', .3, .9], ['Comisiones', .25, .7], ['Clima por tienda', .2, .55], ['Huellas', .9, .1], ['Correos', .95, .15]] },
      normas: [{ ley: 'Ley 29733, arts. 6 y 7', dice: 'Los datos se recopilan para una finalidad determinada, explícita y lícita, y su tratamiento debe ser adecuado, relevante y no excesivo.', practica: 'Para saber por qué se van los vendedores no necesitas sus huellas ni sus correos.' }],
    },
  },
  {
    id: 'a5', t: '16:05', ch: 'whatsapp', who: null, titulo: 'El pedido a TI', banner: 'assets/esc/dedos.webp', show: ['cumplimiento', 'confianza', 'tiempo'],
    body: (n, F) => `<p>${F.has('fuentes_invasivas') ? 'Corregiste tu lista después de hablar con Diego. ' : ''}Para sacar las comisiones necesitas que Pedro, de TI, te dé acceso a la base de ventas. Pedro tiene fama de decir «no» primero y preguntar después.</p><p>Le escribes. <mark class="clave">Que pueda decirte que sí</mark>.</p>`,
    type: 'compose', enviaA: 'pedro', para: 'Para: Pedro Caycho · TI', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pides', ops: [
        { id: 'q1', t: 'Pedro, necesito de la base de ventas solo código de vendedor, tienda, mes, venta y comisión de los últimos 12 meses.', ok: true, por: 'Campos precisos y periodo definido.' },
        { id: 'q2', t: 'Pedro, ¿me das acceso a toda la base de ventas y de personal? Así no te molesto más.', ok: false, por: 'Pedir todo es lo que hace que TI diga que no.' },
      ] },
      { id: 'para', t: 'Para qué', ops: [
        { id: 'f1', t: 'Es para el análisis de rotación que pidió la Gerencia de Tiendas; lo supervisa Diego.', ok: true, por: 'Finalidad y responsable.' },
        { id: 'f2', t: 'Es para un tema de RR.HH., confidencial.', ok: false, por: '«Confidencial» sin explicar no le da a Pedro con qué aprobar.' },
      ] },
      { id: 'cuidado', t: 'Cómo lo cuidarás', ops: [
        { id: 'c1', t: 'Lo trabajo en la carpeta restringida de People Analytics, no en mi escritorio ni en USB.', ok: true, por: 'Le dices dónde vivirá el dato.' },
        { id: 'c2', t: 'Si quieres mándamelo por aquí nomás, es más rápido.', ok: false, por: 'Una base por WhatsApp sale del control de la empresa.' },
      ] },
    ],
    res: sel => {
      const malas = ['q2', 'f2', 'c2'].filter(x => Object.values(sel).includes(x)).length;
      const todo = sel.que === 'q2', q = malas === 0 ? 'buena' : todo || sel.cuidado === 'c2' ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'riesgosa' ? -4 : 1, confianza: q === 'buena' ? 3 : 0, tiempo: q === 'buena' ? 2 : -2 }, rel: { ti: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: [todo ? 'acceso_todo' : 'acceso_minimo'], cartera: { datos: q === 'buena' ? 'Acceso a ventas aprobado (campos mínimos)' : 'Acceso a ventas en revisión' },
        out: q === 'buena' ? 'Pedro aprueba el acceso en media hora, con fecha de vencimiento: dentro de 30 días.' : todo ? 'Pedro no responde. A las 4:40 llega un mensaje seco.' : 'Pedro pide más detalles antes de aprobar. Mañana, quizás.',
        pro: { ok: 'Un pedido con campos, finalidad y lugar de trabajo se aprueba rápido.', risk: 'Pedir «todo» o pedir la base por WhatsApp vuelve a TI tu obstáculo.', info: 'El reglamento de la Ley 29733 pide gestionar los accesos a los datos personales, con altas, bajas y privilegios revisados.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'TI de tu lado. ¡Qué divino!' : 'Pedro no es el obstáculo…'],
      };
    },
    rules: [[LEY, 'Los sistemas que tratan datos personales deben gestionar accesos y privilegios de cada usuario (D.S. 016-2024-JUS, art. 46).']],
    mirada: {
      ve: 'Pedro no es el enemigo del análisis: es quien responde si la base se filtra. Cuando le dices qué campos, para qué y dónde, le das lo que necesita para decir que sí.',
      visual: { tipo: 'flujo', titulo: 'Un pedido de datos que se aprueba', pasos: ['Campos mínimos', 'Periodo', 'Finalidad', 'Responsable', 'Dónde se guarda', 'Vencimiento del acceso'] },
      normas: [{ ley: 'D.S. 016-2024-JUS, art. 46', dice: 'Los sistemas que tratan datos personales deben tener documentado e implementado el control de acceso: registro y baja de usuarios y gestión de privilegios revisada periódicamente.', practica: 'Que tu acceso tenga fecha de vencimiento no es desconfianza: es la regla.' }],
    },
  },
  {
    id: 'a6', t: '18:10', ch: 'correo', who: null, titulo: 'El cierre del día', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Diego Paz', to: 'Analista de People Analytics', asunto: '¿Cómo terminaste?' },
    body: () => `<p>Antes de irte, cuéntame en tres líneas dónde estamos y <mark class="clave">qué te preocupa</mark>.</p><p>Diego</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'La pregunta, lo pedido y un riesgo: el 60 % de Finanzas puede no usar la misma fórmula que tú.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { 'diego-pa': 1 }, responde: 'Diego: la pregunta está escrita; pedí ceses, comisiones y encuestas de salida. Riesgo: si Finanzas calculó el 60 % con otra fórmula, el comité verá dos números distintos. Mañana pido a Finanzas cómo lo calcularon.',
          out: 'Diego responde con un pulgar y una línea: «Eso que viste del 60 % le ha pasado a más de un analista frente al directorio».', kusi: ['feliz', 'Viste la trampa del número antes de caer en ella.'] } },
      { id: 'b', label: 'Que todo va bien y que el miércoles de la próxima semana tendrás la respuesta.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Diego: todo bien, ya pedí los datos. ¡Vamos con todo!',
          out: 'Diego responde «ok». Nadie sabe todavía que hay dos «sesenta por ciento».', kusi: ['pensando', '¿Y la fórmula del 60 %?'] } },
    ],
    mirada: { ve: 'Si Finanzas divide salidas entre la plantilla de diciembre y tú entre la plantilla promedio, tendrán dos números distintos para lo mismo. En un comité, eso basta para que nadie crea en ninguno. Por eso la primera preocupación de un analista es la definición.' },
  },
];
