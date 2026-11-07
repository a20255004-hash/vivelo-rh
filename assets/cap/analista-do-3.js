// Analista de Desarrollo Organizacional · Capítulo 3 · «Dos culturas» · Semana 1, miércoles.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - Ley 29733 (protección de datos personales), art. 6 (finalidad) y art. 7 (proporcionalidad: el tratamiento debe ser
//   adecuado, relevante y no excesivo a la finalidad).
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// Empresas y personas son ficticias.

export const CAP = {
  n: 3, titulo: 'Dos culturas', dia: 'Semana 1, miércoles', foto: 'assets/foto2/mesa-mujeres.webp',
  lugar: 'Agencia Characato y sede de Cayma · Arequipa',
  inicio: '07:15', fin: '19:00', cierreHora: '18:40',
  apertura: 'Miércoles. Tomas la combi a la campiña antes de que el sol apriete. En la agencia de Characato te dicen «doctorcita» aunque no seas doctora; en la sede de Cayma, el gerente de Misti firma sus correos con un emoji. Hoy toca entender a las dos.', boton: 'Bajar en la plaza de Characato',
  kusi: 'La cultura no está en la misión pegada en la pared. Está en cómo se saludan a las ocho de la mañana.',
  lead: 'Te adaptaste a cada casa, armaste una guía de grupo focal, escuchaste a Characato, limpiaste una encuesta que exponía a la gente, protegiste la confidencialidad y le entregaste a Ernesto un diagnóstico claro.',
  reflexion: '¿Qué costumbre de tu trabajo actual extrañarías si mañana te fusionan con otra empresa?',
  siguiente: { n: 4, titulo: 'Los perfiles', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'mapa', p: 'Mapa de la fusión', j: 'Ernesto · Gestión Humana', d: 0, e: 'Listo' },
  { id: 'duplicados', p: 'Análisis de puestos duplicados', j: 'Ernesto · Gerencia', d: 0, e: 'Créditos en revisión' },
  { id: 'cultura', p: 'Diagnóstico cultural', j: 'Ernesto', d: 0, e: 'Grupos focales hoy' },
  { id: 'encuesta', p: 'Encuesta de clima de la fusión', j: 'Gestión Humana', d: 0, e: 'Borrador de Misti' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Ernesto', d: 0, e: 'Empiezan mañana' },
];

export const FUTURO = {
  trato_adaptado: ['Hablaste a cada equipo en su propio idioma de trato.', 'Hilda te recibirá con queso helado la próxima vez.'],
  tuteo_impuesto: ['Le dijiste a la agencia de Characato que en la cooperativa nueva todos se tutean.', 'Hilda se sintió corregida delante de sus socios.'],
  guia_buena: ['Tu guía de grupo focal protege a quienes hablan.', 'La gente dijo cosas que no diría frente a su jefe.'],
  encuesta_anonima: ['La encuesta de clima no pide DNI ni identifica a equipos pequeños.', 'La respuesta será alta.'],
  encuesta_expuesta: ['La encuesta de clima puede identificar a quien responde.', 'Casi nadie de Characato la contestará con sinceridad.'],
  diagnostico_agregado: ['Le negaste al gerente los nombres del grupo focal y le diste los hallazgos.', 'Kevin sabrá, sin saberlo, que su crítica está a salvo.'],
  nombres_entregados: ['Le diste al gerente quién dijo qué en el grupo focal.', 'Kevin quedará marcado como «el que se resiste».'],
  cultura_clara: ['Ernesto tiene un diagnóstico de cultura con lo que cada casa aporta.', 'Lo usarás en el taller.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  hilda: { n: 'Hilda Mamani', sub: 'Cajera · Agencia Characato', c: '#8A4FBF' },
};

export const WSP = [
  { chat: 'gh', t: '07:20', de: 'Ernesto', txt: 'Linares aceptó darnos hasta el lunes para lo de créditos. Ni un día más 😅', si: 'estructura_primero' },
  { chat: 'gh', t: '07:22', de: 'Ernesto', txt: 'Linares ya le dijo a Gabriel que «seguramente» se queda. Characato está que arde 🔥', si: 'gabriel_recomendado' },
  { chat: 'kevin', t: '08:10', de: 'Kevin', txt: 'Oiga, ¿el grupo focal de hoy es anónimo de verdad? Porque hay cosas que quiero decir.' },
  { chat: 'gh', t: '11:40', de: 'Luz', txt: 'Dato de cultura: en Misti 9 de cada 10 usan el chat del sistema. En Characato, el teléfono fijo y el papel. Y les funciona 🤷‍♀️' },
  { chat: 'hilda', t: '16:30', de: 'Hilda', txt: 'Doctorcita, gracias por escucharnos con paciencia. Le guardé queso helado para la próxima 😊', si: 'trato_adaptado' },
  { chat: 'kevin', t: '18:15', de: 'Kevin', txt: 'Me dijeron que el gerente pidió nombres. ¿Usted los dio?', no: 'diagnostico_agregado' },
];

export const CORREOS = [
  { t: '07:30', de: 'Analista de Bienestar · ex Misti', para: 'Analista de DO', asunto: 'Encuesta de clima de la fusión', html: '<p>¡Hola! Te paso la encuesta que usábamos en Misti, ajustada a la fusión. La idea es mandarla el lunes a los 480. Revísala, porfa 🙌</p>' },
  { t: '14:50', de: 'Fernando Linares · Gerencia General', para: 'Analista de DO', asunto: 'Grupo focal de Characato', html: '<p>Me dicen que en el grupo focal de Characato hubo críticas fuertes a la fusión. Llámame.</p><p>F. Linares</p>' },
];

export const QUIZ = [
  { q: 'En una agencia te llaman «doctorcita» aunque no seas doctora. ¿Qué haces?', ops: ['Les corriges en público', 'Aceptas el trato de esa casa y mantienes tu forma respetuosa', 'Les dices que en la cooperativa nueva todos se tutean', 'Dejas de ir a esa agencia'], ok: 1, por: 'El diagnóstico cultural empieza por respetar cómo se relaciona cada grupo, sin juzgarlo.' },
  { q: 'Una encuesta de clima pide DNI «para controlar que nadie responda dos veces». ¿Qué principio de la Ley 29733 se tensiona?', ops: ['Ninguno', 'Proporcionalidad: el dato es excesivo para la finalidad', 'El de calidad del servicio', 'El de libre empresa'], ok: 1, por: 'Art. 7: el tratamiento debe ser adecuado, relevante y no excesivo a la finalidad.' },
  { q: '¿Por qué no se muestran resultados de clima de equipos de tres o cuatro personas?', ops: ['Porque no importan', 'Porque se puede identificar a quién respondió', 'Porque la ley lo prohíbe con esa cifra exacta', 'Porque cuesta imprimir'], ok: 1, por: 'En grupos muy pequeños, el promedio revela la opinión de cada persona.' },
  { q: 'El gerente te pide los nombres de quienes criticaron la fusión en el grupo focal. Lo correcto es…', ops: ['Dárselos: es el gerente', 'Darle los hallazgos agregados y explicarle que la confidencialidad fue la condición para que hablaran', 'Inventar otros nombres', 'Decirle que nadie criticó'], ok: 1, por: 'Si la gente descubre que la confidencialidad no se cumple, no volverá a hablar.' },
  { q: 'En un diagnóstico cultural de una fusión, lo más útil es mostrar…', ops: ['Qué cultura es mejor', 'Qué aporta cada una y dónde chocan', 'Quiénes se resisten', 'Solo lo que el gerente quiere oír'], ok: 1, por: 'La integración funciona mejor cuando cada parte ve que algo suyo se conserva.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:50', ch: 'presencial', who: null, titulo: '«Buenos días, doctorcita»', banner: 'assets/3d/scenes/cooperativa.webp', lugar: 'Agencia Characato · frente a la plaza', show: ['personas', 'confianza'],
    body: () => `<p>La agencia de Characato es una casona de sillar con un crucifijo detrás de la ventanilla y un calendario de la Virgen de Chapi. Doña Hilda Mamani, cajera hace 31 años, te recibe con una sonrisa y una pregunta: «¿Usted es la doctorcita de la fusión?».</p><p>Detrás de ella, un socio de Chiguata le habla en quechua y ella le contesta igual, sin pensarlo. <mark class="clave">Todos te miran</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Saludar de usted, presentarte por tu nombre con calma y preguntarle a doña Hilda cómo prefiere que la llames.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, flags: ['trato_adaptado'],
          out: '«Hilda nomás, doctorcita», se ríe. El socio de Chiguata te da la mano con las dos suyas. Al rato, ya te están contando cómo era la cooperativa cuando la fundaron los agricultores, en 1964.',
          pro: { ok: 'Respetas el trato de la casa sin perder el tuyo.', info: 'En Characato el «usted» no es distancia: es respeto. En Misti, el «tú» tampoco es falta de respeto.' },
          kusi: ['feliz', '¡Entraste por la puerta grande!'] } },
      { id: 'b', label: 'Explicarles, con buena onda, que en la cooperativa nueva todos se van a tutear, para empezar a romper jerarquías.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 }, flags: ['tuteo_impuesto'],
          out: 'Se hace un silencio. Doña Hilda sonríe con la boca, pero no con los ojos: «Ya, señorita». El socio de Chiguata se va sin despedirse.',
          pro: { ok: 'Quieres una cultura más cercana.', risk: 'Imponer las costumbres de una casa a la otra, el primer día, confirma el miedo de que la fusión es una absorción.' },
          kusi: ['preocupado', 'Llegaste a cambiar algo que no entendías todavía.'] } },
      { id: 'c', label: 'Corregir con amabilidad: «No soy doctora, soy analista».',
        res: { q: 'aceptable', fx: { personas: 0, confianza: 1 },
          out: '«Ay, disculpe», dice Hilda, roja. Te siguen llamando «doctorcita» igual, pero en voz más baja.',
          pro: { ok: 'Eres honesta.', risk: 'Corregir en público un trato que es una muestra de respeto puede avergonzar a quien lo usa.' },
          kusi: ['pensando', 'No era un error: era una costumbre.'] } },
    ],
    rules: [[BP, 'Antes de diagnosticar una cultura, obsérvala sin corregirla.']],
    mirada: {
      ve: 'Los primeros minutos en una casa ajena dicen si eres una visitante que viene a entender o una conquistadora que viene a cambiar. En una fusión, la gente de la organización «chica» siempre está atenta a esa señal.',
      visual: { tipo: 'balanza', a: { t: 'Characato', items: ['«Doctor», «usted»', 'Papel y tres firmas', 'Socios de toda la vida', 'Quechua en ventanilla'] }, b: { t: 'Misti', items: ['Tuteo y emojis', 'Todo en el sistema', 'Metas mensuales', 'Gente joven que rota'] } },
    },
  },
  {
    id: 'c2', t: '08:30', ch: 'documento', who: null, titulo: 'La guía del grupo focal', banner: 'assets/esc/escritorio.webp', lugar: 'Trastienda de la agencia', show: ['calidad', 'etica'],
    body: () => `<p>A las diez tienes un grupo focal con ocho personas de Characato: cajeras, asesores y un vigilante. En la trastienda, entre cajas de archivo, terminas tu guía.</p><p><mark class="clave">Elige qué entra</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la guía.', boton: 'Guardar la guía',
    bloques: [
      { id: 'reglas', t: 'Reglas al empezar', n: 2, ops: [
        { id: 'r1', t: 'Lo que se diga aquí se reporta agrupado, sin nombres ni detalles que identifiquen a nadie.', ok: true, por: 'Es la condición para que hablen.' },
        { id: 'r2', t: 'Ningún jefe directo está en la sala.', ok: true, por: 'Con el jefe presente, la conversación es otra.' },
        { id: 'r3', t: 'Grabar en video para que el gerente lo vea completo.', ok: false, por: 'Nadie hablaría con libertad, y un video identifica a todos.' },
      ] },
      { id: 'preg', t: 'Preguntas', n: 2, ops: [
        { id: 'p1', t: '¿Qué es lo que más valoran de trabajar en Characato y no quieren perder?', ok: true, por: 'Empieza por lo que tienen, no por lo que temen.' },
        { id: 'p2', t: 'Cuéntenme una situación de esta semana en que la fusión les complicó el trabajo.', ok: true, por: 'Hechos concretos, no opiniones sueltas.' },
        { id: 'p3', t: '¿Quiénes de sus compañeros creen que no se van a adaptar?', ok: false, por: 'Convierte el grupo en una delación.' },
      ] },
      { id: 'cierre', t: 'Cierre', n: 1, ops: [
        { id: 'c1', t: 'Contarles qué pasará con lo que dijeron y cuándo recibirán una respuesta.', ok: true, por: 'Quien habla quiere saber si sirvió.' },
        { id: 'c2', t: 'Pedirles que no comenten nada con Misti.', ok: false, por: 'No puedes pedir silencio; sí puedes pedir respeto por lo que dijeron otros.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'riesgosa' ? -3 : 2 },
        flags: q === 'buena' ? ['guia_buena'] : [], cartera: { cultura: q === 'buena' ? 'Guía de grupo focal lista' : 'Guía con riesgos' },
        out: q === 'buena' ? 'Tu guía cabe en una hoja: reglas claras, dos preguntas que invitan a contar y un cierre honesto.' : 'La guía tiene buenas preguntas, pero también algunas que pueden cerrar bocas.',
        pro: { ok: 'Las reglas del grupo focal son las que permiten que la gente diga lo que de verdad piensa.', risk: 'Una sola pregunta de delación arruina toda la conversación.', info: 'Empieza por lo que valoran: baja la defensa.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una guía que da confianza!' : 'Alguna pregunta los va a asustar.'],
      };
    },
    rules: [[BP, 'En un grupo focal, confidencialidad primero: se reporta agrupado y sin jefes en la sala.']],
    mirada: {
      ve: 'Un grupo focal no es una encuesta en voz alta: es una conversación donde la gente se anima a decir lo que siente porque confía en las reglas. La guía es tu contrato con ellos.',
      visual: { tipo: 'flujo', titulo: 'Un grupo focal bien hecho', pasos: ['Reglas', 'Lo que valoran', 'Hechos concretos', 'Qué pasará con esto'] },
    },
  },
  {
    id: 'c3', t: '10:10', ch: 'presencial', who: 'analista', titulo: 'Ocho sillas en círculo', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Salón de la agencia Characato', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Ocho personas, termos de mate de coca y una bandeja de pan de tres puntas. ${F.has('guia_buena') ? 'Explicas las reglas y ves cómo se aflojan los hombros.' : 'Explicas cómo será la conversación. Algunos se miran entre sí.'} Kevin está sentado al fondo, con los brazos cruzados.</p><p>Tienes tiempo para <mark class="clave">dos preguntas a fondo</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que vas a hacer.',
    opts: [
      { id: 'valoran', label: '¿Qué valoran de Characato que no quieren perder?', info: 'Hilda: «Que el socio entra y lo conocemos por su nombre. Que el gerente antiguo venía a los velorios de nuestros familiares». El vigilante: «Que aquí nadie se va. Yo tengo 19 años».' },
      { id: 'semana', label: 'Cuéntenme un momento de esta semana en que la fusión les complicó el trabajo.', info: 'Kevin, después de un silencio: «Me piden reportes en el sistema de Misti, que no sé usar, y al mismo tiempo la señora Rocío me pide el de papel. Me quedo hasta las nueve haciendo dos veces lo mismo». Varios asienten.' },
      { id: 'misti', label: '¿Qué saben de cómo trabajan en Misti?', info: '«Que son chiquillos con laptop que no conocen a un socio de la chacra», dice una asesora. Otra la corrige: «Pero aprueban un crédito en un día. Nosotros en una semana».' },
      { id: 'miedo', label: '¿Qué es lo que más les preocupa?', info: '«Que nos traten como de segunda», dice Hilda. «Que la fusión sea en realidad que Misti se nos come.» Nadie la contradice.' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, calidad: picks.includes('semana') ? 3 : 1, tiempo: -1 }, rel: { analista: picks.includes('semana') ? 1 : 0 },
      flags: ['cultura_clara'],
      out: picks.includes('semana') ? 'Al salir, Kevin te alcanza en la puerta: «Gracias por preguntar eso. Nadie había preguntado cómo nos está yendo de verdad».' : 'Sales con frases potentes en tu libreta. Kevin se va sin decir nada.',
      kusi: ['curioso', 'Escuchaste lo que temen y lo que valoran. ¡Eso es diagnóstico!'],
    }),
    rules: [[BP, 'Pregunta por hechos de esta semana: dicen más que las opiniones generales.']],
    mirada: {
      ve: 'Las culturas de las dos cooperativas no son «buena» y «mala»: Characato conoce a sus socios por su nombre; Misti aprueba un crédito en un día. El riesgo de una fusión es quedarse con lo peor de cada una: la lentitud de una y la frialdad de la otra.',
      visual: { tipo: 'matriz', x: 'Rapidez de los procesos', y: 'Cercanía con el socio', cuadrantes: ['Lo que buscamos', 'Characato', 'Lo que tememos', 'Misti'], items: [['Characato hoy', .2, .85], ['Misti hoy', .85, .3], ['Coop. del Sur ideal', .8, .8]] },
    },
  },
  {
    id: 'c4', t: '12:30', ch: 'documento', who: null, titulo: 'La encuesta de Misti', banner: 'assets/foto/revisa.webp', lugar: 'Combi de regreso a Cayma', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>En la combi de regreso, con el celular a punto de apagarse, abres la encuesta de clima que mandó Bienestar. La quieren enviar el lunes a los 480. <mark class="clave">Algunas preguntas no pueden salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que no son buena práctica.',
    doc: { t: 'Encuesta de clima · fusión', sub: 'Cooperativa del Sur · Bienestar · borrador' },
    lines: [
      { id: 'e1', t: 'Pregunta 1: Su DNI (para evitar que alguien responda dos veces).', bad: LEY, why: 'Pedir el DNI en una encuesta de clima es excesivo para su finalidad (Ley 29733, art. 7) y destruye el anonimato.' },
      { id: 'e2', t: 'Pregunta 2: Su agencia y su cargo exacto.', bad: BP, why: 'En agencias de nueve personas, agencia más cargo identifica a cada una. Basta con la zona o el área general.' },
      { id: 'e3', t: 'Pregunta 5: Del 1 al 5, ¿cuánto confía en la información que recibe sobre la fusión?' },
      { id: 'e4', t: 'Pregunta 8: ¿Qué religión profesa? (para organizar actividades de integración).', bad: LEY, why: 'La religión es un dato sensible y no es necesario para medir el clima (Ley 29733).' },
      { id: 'e5', t: 'Pregunta 11: Escriba el nombre de los compañeros que se resisten al cambio.', bad: BP, why: 'Una encuesta de clima no es un buzón de acusaciones.' },
      { id: 'e6', t: 'Los resultados se mostrarán solo para grupos de 10 personas o más.' },
      { id: 'e7', t: 'Solo en español y solo en línea.', duda: 'En Chiguata y Chivay hay personas que prefieren responder en papel, y algunas en quechua. Vale la pena preguntar.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le devuelves la encuesta con comentarios sobre la pregunta 11. Pero el DNI o la religión siguen ahí, y en Characato muchos no la contestarán.' : `Marcas ${hitsLey} problemas legales. Bienestar te responde: «Uy, la usábamos así en Misti y nadie dijo nada». Le propones una versión sin DNI, por zona y con opción en papel.`,
      flags: [missLey ? 'encuesta_expuesta' : 'encuesta_anonima'],
      cartera: { encuesta: missLey ? 'Encuesta con datos que identifican' : 'Encuesta anónima, por zona y en dos formatos' },
      pro: { ok: 'Una encuesta anónima de verdad es la única que dice la verdad.', risk: 'Pedir DNI o religión expone a la cooperativa ante la autoridad de datos personales y espanta las respuestas sinceras.', info: 'Para evitar respuestas dobles, hay plataformas que usan enlaces únicos sin guardar quién respondió.' },
      kusi: missLey ? ['preocupado', 'Así nadie va a decir lo que piensa…'] : ['celebra', '¡Encuesta segura y sincera!'],
    }),
    rules: [[LEY, 'Ley 29733, art. 7: el tratamiento de datos debe ser adecuado, relevante y no excesivo a su finalidad.'], [LEY, 'Ley 29733, art. 6: los datos se recopilan para una finalidad determinada y explícita.']],
    mirada: {
      ve: 'Una encuesta de clima mide confianza. Si la propia encuesta genera desconfianza, el resultado será falso. En una fusión, la gente de la organización más pequeña revisa cada pregunta buscando una trampa.',
      visual: { tipo: 'cambio', titulo: 'De la encuesta de Misti a la de la fusión', pares: [['DNI', 'Enlace sin registro de quién responde'], ['Agencia y cargo', 'Zona: urbana o campiña'], ['Religión', 'Fuera'], ['Nombres de quienes se resisten', 'Fuera']] },
      normas: [{ ley: 'Ley 29733, Ley de Protección de Datos Personales, arts. 6 y 7', dice: 'Los datos se recopilan para una finalidad determinada, y su tratamiento debe ser adecuado, relevante y no excesivo a esa finalidad.', practica: 'Para medir el clima no se necesita saber quién eres ni qué religión tienes.' }],
    },
  },
  {
    id: 'c5', t: '15:00', ch: 'llamada', who: null, titulo: '«Quiero los nombres»', banner: 'assets/foto/frente-a-frente.webp', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>Llamas al Dr. Linares, como pidió en su correo. Va directo:</p><p>«Me cuentan que en Characato hubo gente que habló pestes de la fusión. Necesito saber quiénes son, porque esa gente puede contagiar al resto. <mark class="clave">Mándame los nombres</mark> y lo que dijo cada uno.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que la confidencialidad fue la condición del grupo focal; ofrecerle hoy mismo los hallazgos agregados, con lo que más preocupa y lo que la gente valora.',
        res: { q: 'buena', fx: { etica: 5, confianza: 2, personas: 3 }, rel: { ernesto: 1 }, flags: ['diagnostico_agregado'],
          out: 'Linares se queda callado unos segundos. «¿Y si son los que van a sabotear?» «Si les doy los nombres, la próxima vez nadie me dirá nada, y usted no sabrá qué está pasando.» Acepta el informe agregado. Cuelga seco.',
          pro: { ok: 'Proteges a quienes hablaron y le das al gerente lo que de verdad necesita: saber qué pasa.', risk: 'El gerente puede sentir que le niegas información.', info: 'Avísale a Ernesto antes de que el gerente lo llame.' },
          kusi: ['animo', 'Firme y útil. ¡Así se cuida la confianza!'] } },
      { id: 'b', label: 'Darle los nombres: es el gerente general, la información es de la cooperativa y no quieres empezar mal con él.',
        res: { q: 'riesgosa', fx: { etica: -6, personas: -5, confianza: -3 }, rel: { analista: -1 }, flags: ['nombres_entregados'],
          out: 'Mandas los nombres con las frases. Al día siguiente, Linares menciona «al analista que se queda hasta las nueve» en el comité. En Characato todos entienden de quién habla.',
          pro: { ok: 'Cumples lo que te pide tu gerente.', risk: 'Rompiste la regla con la que la gente aceptó hablar. Nadie volverá a confiar en un grupo focal de Gestión Humana.' },
          kusi: ['triste', 'Ellos confiaron en ti…'] } },
      { id: 'c', label: 'Decirle que nadie criticó la fusión, que fue una reunión tranquila.',
        res: { q: 'riesgosa', fx: { etica: -3, confianza: -4 },
          out: 'Linares sabe que no es cierto: alguien ya le contó. Desde hoy, lo que tú le digas lo va a verificar con otro.',
          pro: { ok: 'Proteges a la gente por un rato.', risk: 'Mentirle a la gerencia te quita la credibilidad que necesitarás para defenderlos.' },
          kusi: ['preocupado', 'Proteger no es mentir.'] } },
    ],
    rules: [[BP, 'Lo que se dice bajo confidencialidad se reporta agrupado. Nunca con nombres.']],
    mirada: {
      ve: 'Linares no es un villano: teme que la fusión fracase y busca a quién culpar. Pero quien critica en un grupo focal suele ser quien más se preocupa por su trabajo. La confidencialidad no protege solo a Kevin: protege la posibilidad de saber la verdad.',
      visual: { tipo: 'balanza', a: { t: 'Dar los nombres', items: ['El gerente queda contento hoy', 'Kevin queda marcado', 'Nadie vuelve a hablar'] }, b: { t: 'Dar los hallazgos', items: ['El gerente sabe qué pasa', 'Las personas siguen confiando', 'Habrá próximos diagnósticos'] } },
    },
  },
  {
    id: 'c6', t: '17:45', ch: 'whatsapp', who: 'ernesto', titulo: 'El diagnóstico en tres líneas', banner: 'assets/esc/idea.webp', lugar: 'Sede de Cayma', show: ['calidad', 'confianza'],
    body: () => `<p>Ernesto tiene mañana a primera hora reunión con Linares. Te pide por WhatsApp: «Mándame en tres líneas qué encontraste hoy. <mark class="clave">Lo que le pueda decir sin papeles</mark>».</p>`,
    type: 'compose', enviaA: 'ernesto', para: 'Para: Ernesto Valdivia · Jefe de Gestión Humana', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'valor', t: 'Lo que cada una aporta', ops: [
        { id: 'v1', t: 'Characato aporta cercanía con el socio y lealtad; Misti, rapidez y sistema. La cooperativa nueva necesita las dos.', ok: true, por: 'Pones en valor a las dos casas.' },
        { id: 'v2', t: 'Characato está atrasada y Misti tiene que enseñarles todo.', ok: false, por: 'Confirma el miedo a la absorción.' },
      ] },
      { id: 'dolor', t: 'Lo que más duele hoy', ops: [
        { id: 'd1', t: 'El doble trabajo: hay analistas haciendo cada reporte en papel y en el sistema.', ok: true, por: 'Un problema concreto que se puede resolver.' },
        { id: 'd2', t: 'Hay gente negativa que contagia al resto.', ok: false, por: 'Etiqueta a las personas en vez de describir el problema.' },
      ] },
      { id: 'pedido', t: 'Lo que propones', ops: [
        { id: 'p1', t: 'Que se defina esta semana un solo formato de reporte para créditos, y que la encuesta de clima salga el lunes, anónima.', ok: true, por: 'Dos acciones concretas con fecha.' },
        { id: 'p2', t: 'Que hagamos una integración con parrillada.', ok: null, por: 'Puede ayudar, pero no resuelve el doble trabajo.' },
      ] },
    ],
    res: sel => {
      const mal = sel.valor === 'v2' || sel.dolor === 'd2', buenas = ['v1', 'd1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 3 : 0, personas: mal ? -3 : 2 }, rel: { ernesto: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['cultura_clara'] : [], cartera: { cultura: q === 'buena' ? 'Diagnóstico: aportes, dolor y dos acciones' : 'Diagnóstico enviado' },
        out: q === 'buena' ? 'Ernesto responde: «Perfecto. Lo del doble reporte se lo digo mañana con nombre y apellido: el de Kevin no, el del formato».' : mal ? 'Ernesto responde: «Cuidado con eso. Si Linares escucha "gente negativa", va a querer nombres otra vez».' : 'Ernesto responde con un «ok». La parrillada no resolverá el reporte doble de mañana.',
        pro: { ok: 'Un diagnóstico útil dice qué aporta cada parte, qué duele y qué hacer.', risk: 'Las etiquetas sobre personas vuelven el diagnóstico una lista negra.', info: 'Las fiestas de integración sirven más cuando ya se resolvió lo que molesta cada día.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'indignado' : 'pensando', q === 'buena' ? '¡Tres líneas que dicen mucho!' : mal ? '¡Eso es etiquetar!' : 'Falta algo concreto.'],
      };
    },
    rules: [[BP, 'Describe problemas, no etiquetes personas.']],
    mirada: {
      ve: 'El diagnóstico cultural más útil no se queda en «son distintos». Encuentra el punto donde las dos culturas chocan cada día, como el reporte doble, y propone algo concreto. Así la cultura deja de ser un tema abstracto.',
      visual: { tipo: 'mensaje', titulo: 'Tu diagnóstico en tres líneas', txt: 'Characato aporta cercanía y lealtad; Misti, rapidez y sistema. Hoy duele el doble trabajo. Propongo un solo formato de reporte esta semana y la encuesta anónima el lunes.' },
    },
  },
];
