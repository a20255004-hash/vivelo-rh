// Analista de Desarrollo Organizacional · Capítulo 1 · «La fusión» · Semana 1, lunes.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - Ley 30822 (Ley COOPAC): las cooperativas de ahorro y crédito no autorizadas a captar recursos del público pasan a la
//   supervisión de la SBS desde el 1 de enero de 2019.
//   https://www.sbs.gob.pe/coopac_nuevo
//   https://comunicaciones.congreso.gob.pe/noticias/sbs-implementa-ley-para-supervisar-cooperativas/
// Empresas y personas son ficticias.

export const CAP = {
  n: 1, titulo: 'La fusión', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/cooperativa.webp',
  lugar: 'Cooperativa del Sur · Sede de Cayma, Arequipa',
  inicio: '07:50', fin: '19:00', cierreHora: '18:40',
  apertura: 'Arequipa, lunes. El viernes, la Cooperativa Misti y la Cooperativa Characato anunciaron que desde hoy son una sola: la Cooperativa del Sur. Tú eres la nueva analista de Desarrollo Organizacional y nadie sabe todavía a quién reporta.', boton: 'Entrar a la sede',
  kusi: 'Una fusión se firma en un día. Hacerla de verdad toma meses. ¡Hoy empiezas a mirarla por dentro!',
  lead: 'Escuchaste a Ernesto, respondiste a Kevin sin prometer lo que no sabes, armaste el mapa de la fusión, llamaste a las agencias y pusiste tu primer límite.',
  reflexion: '¿Qué necesita saber una persona el primer día de una fusión para poder trabajar tranquila?',
  siguiente: { n: 2, titulo: 'Los duplicados', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'mapa', p: 'Mapa de la fusión', j: 'Ernesto · Gestión Humana', d: 0, e: 'Dos organigramas impresos' },
  { id: 'duplicados', p: 'Análisis de puestos duplicados', j: 'Ernesto · Gerencia', d: 0, e: 'Sin empezar' },
  { id: 'cultura', p: 'Diagnóstico cultural', j: 'Ernesto', d: 0, e: 'Sin empezar' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Ernesto', d: 0, e: 'Unos 40 por escribir' },
  { id: 'consejo', p: 'Organigrama para el consejo', j: 'Gerencia general', d: 0, e: 'Jueves de la próxima semana' },
];

export const FUTURO = {
  kevin_verdad: ['Le dijiste a Kevin lo que sabes y lo que no.', 'Volverá a preguntarte a ti antes que al rumor.'],
  kevin_promesa: ['Le prometiste a Kevin que nadie perderá su puesto.', 'Esa frase te seguirá hasta el viernes.'],
  mapa_bueno: ['Tu mapa de la fusión muestra quién reporta a quién hoy y qué está en duda.', 'Será tu base para encontrar los duplicados.'],
  mapa_flojo: ['Tu mapa de la fusión se quedó en dos organigramas pegados.', 'Mañana te costará encontrar los duplicados.'],
  agencias_llamadas: ['Hablaste con las seis agencias el primer día.', 'Los jefes de agencia sabrán que existes.'],
  rocio_limite: ['Le dijiste a Rocío que tú no decides quién se queda y que todo irá por criterios.', 'Rocío lo recordará mañana.'],
  rocio_almuerzo: ['Almorzaste con Rocío y escuchaste por qué ella debería quedarse.', 'Gabriel se enteró. Y no le gustó.'],
  riesgo_avisado: ['Le avisaste a Ernesto que el miedo ya está corriendo.', 'Ernesto pedirá un mensaje para todos.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  gabriel: { n: 'Gabriel Cornejo', sub: 'Jefe de créditos · ex Misti', c: '#C05621' },
};

export const WSP = [
  { chat: 'gh', t: '07:52', de: 'Ernesto', txt: 'Bienvenida. Estoy en la sala 2, la del ventanal que da al Misti. Trae café, que va para largo ☕' },
  { chat: 'gh', t: '08:05', de: 'Luz', txt: 'Hola, soy Luz, de Sistemas. Tu correo ya funciona: do@cooperativasur.pe. El de Characato todavía no se migra 🙃' },
  { chat: 'kevin', t: '09:40', de: 'Kevin', txt: 'Buenos días. ¿Usted es la de Desarrollo Organizacional? ¿Tiene un minuto?' },
  { chat: 'gabriel', t: '12:10', de: 'Gabriel', txt: 'Hola, bienvenida. Cuando quieras te muestro cómo trabajamos créditos en Misti. Somos 100 % digitales 🚀' },
  { chat: 'gabriel', t: '16:20', de: 'Gabriel', txt: 'Me contaron que almorzaste con Rocío en Yanahuara. Ojalá también tengas tiempo para nosotros 🙂', si: 'rocio_almuerzo' },
  { chat: 'kevin', t: '17:15', de: 'Kevin', txt: 'Gracias por decirme la verdad. Prefiero eso a que me doren la píldora.', si: 'kevin_verdad' },
  { chat: 'rocio', t: '18:05', de: 'Rocío', txt: 'Entendido lo de los criterios. Solo pido que sean los mismos para los dos.', si: 'rocio_limite' },
];

export const CORREOS = [
  { t: '07:30', de: 'Fernando Linares · Gerencia General', para: 'Todo el personal', asunto: 'Bienvenidos a la Cooperativa del Sur', html: '<p>Desde hoy somos una sola cooperativa: 480 colaboradores, 11 agencias y más de 60 mil socios. Seguimos supervisados por la SBS y seguimos al servicio de nuestros socios.</p><p>En las próximas semanas les informaremos la nueva estructura. Mientras tanto, cada uno sigue con sus funciones actuales.</p><p>Fernando Linares, gerente general</p>' },
  { t: '11:20', de: 'Fernando Linares · Gerencia General', para: 'Ernesto Valdivia; Analista de DO', asunto: 'Organigrama para el consejo', html: '<p>Ernesto: el consejo de administración quiere ver la nueva estructura el jueves de la próxima semana. Necesito una propuesta seria, no dos organigramas pegados con cinta.</p><p>F. Linares</p>' },
];

export const QUIZ = [
  { q: '¿Quién supervisa hoy a las cooperativas de ahorro y crédito en el Perú?', ops: ['La SUNAFIL', 'La SBS, desde la Ley 30822', 'Nadie: se autorregulan', 'El MTPE'], ok: 1, por: 'La Ley 30822 pasó la supervisión de las COOPAC a la SBS desde el 1 de enero de 2019.' },
  { q: 'Un analista te pregunta si va a perder su puesto. No sabes la respuesta. Lo mejor es…', ops: ['Decirle que no, para que se calme', 'Decirle lo que sabes, lo que no y cuándo habrá información', 'Decirle que no puedes hablar del tema', 'Mandarlo a preguntarle al gerente'], ok: 1, por: 'En un cambio, una verdad incompleta pero honesta genera más confianza que una promesa que no puedes cumplir.' },
  { q: '¿Qué debe mostrar un buen mapa de la fusión el primer día?', ops: ['Solo el organigrama ideal', 'Quién reporta a quién hoy, qué puestos se repiten y qué está en duda', 'Los nombres de quienes saldrán', 'Los sueldos de todos'], ok: 1, por: 'Primero se entiende lo que hay; el diseño viene después.' },
  { q: 'Una jefa cuyo puesto está duplicado te invita a almorzar para contarte por qué debería quedarse. ¿Qué haces?', ops: ['Aceptas y le das ideas para convencer al gerente', 'Le explicas que tú no decides, que habrá criterios iguales para todos y que la escucharás en la oficina como a cualquiera', 'La ignoras', 'Le cuentas a su competidor'], ok: 1, por: 'Escuchar está bien; lo que importa es que todos tengan el mismo canal y los mismos criterios.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:00', ch: 'presencial', who: 'ernesto', titulo: 'Dos organigramas sobre la mesa', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala 2 · ventanal al Misti', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Ernesto tiene dos organigramas impresos sobre la mesa: uno azul, de la Cooperativa Misti, y otro verde, de Characato. Por el ventanal se ve el Misti con su gorrito de nubes. Te sirve café de un termo.</p><p>«Bienvenida${n ? ', ' + n : ''}. Tú no vienes de ninguna de las dos, y eso es una ventaja. Tengo un cuarto de hora antes del comité. <mark class="clave">Pregúntame lo que necesites</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Ernesto.',
    opts: [
      { id: 'por', label: '¿Por qué se fusionaron?', info: '«Characato tiene 60 años, socios fieles en la campiña y mucha mora. Misti tiene tecnología y socios jóvenes en Cayma y Cerro Colorado, pero poco capital. Con la SBS encima, juntos somos más sólidos que separados.»' },
      { id: 'miedo', label: '¿Qué es lo que más miedo da allá afuera?', info: '«Que hay puestos repetidos. Dos jefes de créditos, dos contadores, dos de todo. La gente hace la cuenta sola y llega a "aquí sobramos".»' },
      { id: 'decide', label: '¿Quién decide la nueva estructura?', info: '«La propone la gerencia, con nuestro trabajo detrás, y la aprueba el consejo de administración. El consejo tiene gente de las dos cooperativas, y cada uno cuida a los suyos.»' },
      { id: 'plazo', label: '¿Para cuándo hay que tenerla?', info: '«El gerente quiere llevarla al consejo el jueves de la próxima semana. Son nueve días hábiles. Ajustados, pero no imposibles.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('miedo') ? 2 : 1, tiempo: -1 }, rel: { ernesto: picks.includes('decide') ? 1 : 0 },
      out: 'Ernesto junta los dos organigramas, los sujeta con un clip y te los entrega. «Tu primer encargo: entender qué tenemos hoy. Antes de dibujar, mirar.»',
      kusi: ['curioso', 'Ya sabes por qué se juntaron y quién decide. ¡Buen comienzo!'],
    }),
    mirada: {
      ve: 'En una fusión, el analista de DO llega cuando la decisión grande ya se tomó. Lo que falta es lo difícil: que dos organizaciones con historia propia funcionen como una sola. Entender por qué se fusionaron te dice qué debe proteger la nueva estructura.',
      visual: { tipo: 'balanza', a: { t: 'Cooperativa Characato', items: ['60 años', 'Socios fieles en la campiña', 'Mora alta'] }, b: { t: 'Cooperativa Misti', items: ['Tecnología', 'Socios jóvenes', 'Poco capital'] } },
    },
  },
  {
    id: 'f2', t: '09:45', ch: 'presencial', who: 'analista', titulo: '«¿A quién le reporto?»', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo del segundo piso', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>Kevin Apaza te alcanza en el pasillo. Lleva la credencial verde de Characato colgada todavía y un fólder de expedientes bajo el brazo.</p><p>«Disculpe. Hoy me llegaron dos correos: uno de la señora Rocío y otro del señor Gabriel, los dos me piden el reporte de mora. ¿A quién le reporto? Y otra cosa… <mark class="clave">¿es cierto que van a sobrar analistas?</mark> Mi hija tiene dos años.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que, por ahora, sigue reportando a Rocío como dice el comunicado; que la estructura nueva aún no existe; y que antes de cualquier cambio se informará a cada persona directamente.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { analista: 1 }, flags: ['kevin_verdad'],
          out: 'Kevin respira. «O sea, nadie sabe todavía.» «Exacto. Y cuando se sepa, no te vas a enterar por un pasillo.» Se va a mandarle el reporte a Rocío.',
          pro: { ok: 'Le das una regla clara para hoy y le dices la verdad sobre lo que no se sabe.', risk: 'No lo calmas del todo: el miedo sigue ahí.', info: 'Pide a Ernesto que confirme por correo a quién reporta cada equipo mientras dure la transición.' },
          kusi: ['animo', 'La verdad, aunque esté incompleta. ¡Así!'] } },
      { id: 'b', label: 'Decirle que se quede tranquilo: en la fusión nadie va a perder su puesto.',
        res: { q: 'riesgosa', fx: { personas: 2, confianza: -3, etica: -2 }, rel: { analista: 1 }, flags: ['kevin_promesa'],
          out: 'Kevin sonríe por primera vez. A las once, en el comedor, le cuenta a su equipo: «La de DO dijo que nadie sale».',
          pro: { ok: 'Lo calmas hoy.', risk: 'Prometiste algo que no depende de ti. Ahora tu palabra circula como si fuera oficial.' },
          kusi: ['preocupado', '¿Y si no es así?'] } },
      { id: 'c', label: 'Decirle que eso lo tiene que ver con su jefa o con Gerencia, no contigo.',
        res: { q: 'aceptable', fx: { personas: -2, confianza: -1 }, rel: { analista: -1 },
          out: 'Kevin asiente y se va. Le pregunta a Rocío, que tampoco sabe. Al mediodía, todo el piso tiene una teoría distinta.',
          pro: { ok: 'No dices nada que no sepas.', risk: 'Lo devuelves al rumor sin ninguna información útil.' },
          kusi: ['pensando', 'Algo sí podías decirle…'] } },
    ],
    rules: [[BP, 'En un cambio, di lo que sabes, lo que no y cuándo habrá información. No prometas resultados.']],
    mirada: {
      ve: 'La pregunta «¿a quién le reporto?» parece administrativa, pero es la forma educada de preguntar «¿sigo teniendo trabajo?». Responder con una regla para hoy y con honestidad sobre lo que falta es lo que más tranquiliza a largo plazo.',
      visual: { tipo: 'cambio', titulo: 'Del rumor a la regla', pares: [['Dos jefes le escriben', 'Hoy reporta a Rocío'], ['«¿Sobran analistas?»', 'Aún no hay estructura'], ['Enterarse por el pasillo', 'Se le informará a él primero']] },
    },
  },
  {
    id: 'f3', t: '10:30', ch: 'documento', who: null, titulo: 'El mapa de la fusión', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, junto a la fotocopiadora', show: ['calidad', 'tiempo'],
    body: () => `<p>Tienes un escritorio prestado junto a la fotocopiadora, que ronca cada cinco minutos. Extiendes los dos organigramas: 210 personas en Misti, 270 en Characato.</p><p>Antes de proponer nada, decides armar un mapa de cómo están las cosas hoy. <mark class="clave">Elige qué debe tener</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del mapa.', boton: 'Guardar el mapa',
    bloques: [
      { id: 'hoy', t: 'Lo que hay hoy', n: 2, ops: [
        { id: 'h1', t: 'Cada área de las dos cooperativas, con cuántas personas tiene y a quién reporta.', ok: true, por: 'Es la foto de partida.' },
        { id: 'h2', t: 'Las agencias de cada una y su ubicación: Cayma, Cerro Colorado, Characato, Chiguata, Socabaya, Chivay…', ok: true, por: 'La estructura no es solo la sede.' },
        { id: 'h3', t: 'Una columna con quién «rinde» y quién no, según lo que se comenta.', ok: false, por: 'Los comentarios de pasillo no son datos y pueden dañar a alguien.' },
      ] },
      { id: 'cruce', t: 'Dónde se cruzan', n: 2, ops: [
        { id: 'c1', t: 'Los puestos que existen en las dos (por ejemplo, jefatura de créditos y contabilidad).', ok: true, por: 'Ahí estará la parte más delicada.' },
        { id: 'c2', t: 'Los procesos que cada una hace distinto (aprobación de créditos, cobranza, atención en caja).', ok: true, por: 'Dos puestos con el mismo nombre pueden hacer cosas distintas.' },
        { id: 'c3', t: 'Los sueldos de cada persona, para saber a quién «conviene» mantener.', ok: false, por: 'El mapa inicial no decide por costo de personas, y esa información es reservada.' },
      ] },
      { id: 'duda', t: 'Lo que está en duda', n: 1, ops: [
        { id: 'd1', t: 'Una lista de preguntas abiertas para Ernesto y la gerencia (por ejemplo: ¿se mantienen todas las agencias?).', ok: true, por: 'Lo que no sabes también se escribe.' },
        { id: 'd2', t: 'Tu propuesta de organigrama final, para adelantar trabajo.', ok: false, por: 'Proponer antes de entender es el error más común de una fusión.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: [q === 'buena' ? 'mapa_bueno' : 'mapa_flojo'], cartera: { mapa: q === 'buena' ? 'Mapa listo: 18 puestos que se repiten y 7 preguntas abiertas' : 'Mapa con huecos' },
        out: q === 'buena' ? 'Tu mapa ocupa una hoja A3: dos colores, 18 puestos que se repiten marcados en amarillo y siete preguntas abiertas. Ernesto lo fotografía con el celular: «Esto es lo que nadie había hecho».' : 'El mapa tiene información, pero mezcla lo que hay con lo que alguien opina o con lo que todavía no toca.',
        pro: { ok: 'Un buen mapa muestra lo que hay, dónde se cruza y lo que falta saber.', risk: 'Meter opiniones o sueldos en un mapa que circulará es exponer a las personas.', info: 'Marca en otro color los puestos únicos: también importan.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que ordena dos cooperativas!' : 'Algunas piezas no tocaban hoy.'],
      };
    },
    rules: [[BP, 'Antes de diseñar una estructura, describe la que existe.']],
    mirada: {
      ve: 'El mapa de la fusión es el primer entregable de DO: no decide nada, pero hace visible lo que todos intuyen. Los duplicados, las agencias lejanas y los procesos distintos son las tres zonas donde se juega el éxito o el fracaso de la integración.',
      visual: { tipo: 'flujo', titulo: 'De dos organigramas a uno', pasos: ['Describir lo que hay', 'Encontrar cruces', 'Listar dudas', 'Diseñar', 'Aprobar en el consejo'], aqui: 0 },
    },
  },
  {
    id: 'f4', t: '11:40', ch: 'llamada', who: null, titulo: 'Las seis agencias', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>Para completar el mapa llamas a los jefes de agencia. Quieres saber cuántas personas tienen hoy y <mark class="clave">qué les preocupa</mark>.</p>`,
    type: 'calls',
    calls: [['Agencia Cayma (Misti)', 'Contesta rápido', 'Somos 14. Aquí todo bien, la gente joven se adapta. Lo que sí: nadie sabe si mañana vendrán socios de Characato a nuestra ventanilla.'], ['Agencia Characato', 'Contesta la cajera Hilda Mamani', 'El jefe salió a una visita, doctorcita. Yo le doy los datos: somos 22. La gente está asustada. Treinta y un años tengo acá.'], ['Agencia Chiguata (Characato)', 'Mala señal', 'Se… corta… somos nueve… los socios preguntan si su ahorro está seguro…'], ['Agencia Cerro Colorado (Misti)', 'Contesta', 'Somos 16. ¿Ya hay sistema único? Porque el de Characato no lo conocemos.'], ['Agencia Chivay (Characato)', 'No contesta']],
    prompt: 'Chivay no contesta y en Chiguata los socios preguntan por sus ahorros. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Escribir a Chivay para volver a llamar mañana temprano y avisarle a Ernesto que en Chiguata los socios están preguntando por sus ahorros.',
        res: { q: 'buena', fx: { personas: 3, calidad: 3, tiempo: -1 }, flags: ['agencias_llamadas'], cartera: { mapa: 'Mapa con las agencias: falta confirmar Chivay' },
          out: 'Ernesto lo lleva al comité: «Si los socios tienen miedo, lo que diga el personal en ventanilla importa mucho». Chivay te responde a las cinco: «Mañana a las 7, doctorcita, antes de que llegue el bus de Arequipa».',
          pro: { ok: 'Completas el mapa y además detectas un riesgo que no es de RR.HH. pero llega por el personal.', info: 'Las agencias lejanas suelen ser las últimas en enterarse de todo.' },
          kusi: ['feliz', '¡Oíste lo que nadie estaba preguntando!'] } },
      { id: 'b', label: 'Dejar Chivay para otro día: es la agencia más lejana y la más chica.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -2 },
          out: 'Tu mapa queda con un hueco a cuatro horas de bus. Chivay se entera de la fusión por la radio local.',
          pro: { ok: 'Ahorras tiempo.', risk: 'Lo lejano también es parte de la estructura, y suele sentirse olvidado.' },
          kusi: ['pensando', 'Lejos no es menos importante.'] } },
    ],
    rules: [[BP, 'En una fusión, llama primero a quienes están más lejos del centro.']],
    mirada: {
      ve: 'Las agencias de la campiña y de Caylloma tienen otra vida: socios agricultores, señal que se corta, buses que tardan horas. Una estructura diseñada solo desde la sede de Cayma corre el riesgo de olvidar a la mitad de la cooperativa.',
      visual: { tipo: 'embudo', titulo: 'Tus llamadas de hoy', niveles: [['Agencias llamadas', 5], ['Contestaron', 4], ['Datos completos', 3]] },
    },
  },
  {
    id: 'f5', t: '13:05', ch: 'whatsapp', who: 'jefa', titulo: 'La invitación de Rocío', banner: 'assets/foto/cafe.webp', show: ['etica', 'confianza'],
    body: () => `<p>Vas a almorzar cuando te escribe Rocío Bedoya, jefa de créditos de la antigua Characato.</p><p>«Hola, bienvenida. Te invito un rocoto relleno en Yanahuara, aquí cerquita. <mark class="clave">Quiero contarte cómo trabajamos créditos</mark>, porque creo que en la sede solo escuchan a Gabriel.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle y proponerle una reunión en la oficina esta semana, como harás con Gabriel; aclararle que tú no decides quién se queda y que habrá criterios iguales para los dos.',
        res: { q: 'buena', fx: { etica: 4, confianza: 2 }, rel: { jefa: 0 }, flags: ['rocio_limite'],
          envia: [['rocio', 'Gracias, Rocío. Me encantaría conocer cómo trabajan créditos en Characato: te propongo el miércoles a las 10 en la sala 2, y haré lo mismo con Gabriel. Te cuento algo para que sea claro desde hoy: yo no decido quién ocupa cada puesto. Mi trabajo es que haya criterios iguales para todos.']],
          out: 'Rocío tarda en responder. Almuerzas sola un menú en la esquina, con el sol arequipeño quemándote el cuello.',
          pro: { ok: 'Escuchas, pero por el mismo canal para los dos.', risk: 'Rocío puede sentir que la estás evitando.', info: 'Anota estas reuniones: en una fusión, la transparencia también es saber con quién conversaste.' },
          kusi: ['animo', 'Mismo canal, mismos criterios. ¡Así!'] } },
      { id: 'b', label: 'Aceptar el almuerzo: conocerla fuera de la oficina te da información que en la sede no tendrás.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: 1 }, rel: { jefa: 1 }, flags: ['rocio_almuerzo'],
          out: 'El rocoto está buenísimo. Rocío te cuenta, con datos, cómo bajó la mora de su equipo en la campiña. Al salir, el chofer de Gabriel las ve en la puerta de la picantería.',
          pro: { ok: 'Aprendes mucho del negocio de Characato.', risk: 'En una fusión, quién almuerza con quién se lee como alianza.' },
          kusi: ['pensando', 'Rico… pero, ¿quién más lo vio?'] } },
      { id: 'c', label: 'No responder: no quieres involucrarte con ninguna de las dos partes.',
        res: { q: 'riesgosa', fx: { confianza: -3, personas: -2 }, rel: { jefa: -1 },
          out: 'Rocío ve el visto azul. En la tarde le comenta a su equipo: «La de DO ya está con los de Misti».',
          pro: { ok: 'Evitas el almuerzo.', risk: 'El silencio también se interpreta, y casi siempre en tu contra.' },
          kusi: ['triste', 'No decir nada también es una respuesta.'] } },
    ],
    rules: [[BP, 'En una fusión, escucha a todas las partes por el mismo canal y con las mismas reglas.']],
    mirada: {
      ve: 'Rocío no es una intrigante: tiene miedo y quiere que su trabajo se vea. Es legítimo. Tu tarea no es evitarla, sino que su voz y la de Gabriel lleguen con las mismas condiciones. La neutralidad se demuestra en los detalles.',
      visual: { tipo: 'matriz', x: 'Riesgo de parecer parcial', y: 'Información que obtienes', cuadrantes: ['Escucha con reglas', 'Escucha, pero se nota', 'No escuchas', 'Te expones sin aprender'], items: [['Reunión en la oficina', .2, .75], ['Almuerzo en Yanahuara', .75, .85], ['No responder', .5, .1]] },
    },
  },
  {
    id: 'f6', t: '18:10', ch: 'correo', who: null, titulo: 'El primer reporte', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Ernesto Valdivia', to: 'Analista de DO', asunto: 'Primer día' },
    body: () => `<p>¿Cómo te fue? Mándame en corto <mark class="clave">qué viste hoy</mark> y qué hacemos mañana.</p><p>Ernesto</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'El mapa, el riesgo que viste y lo que propones para mañana.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { ernesto: 1 }, flags: ['riesgo_avisado'], responde: 'Ernesto: el mapa está listo, con 18 puestos que se repiten. Riesgo: la gente ya hace sus propias cuentas y dos jefes le escriben al mismo analista. Propongo que mañana Gestión Humana confirme por escrito a quién reporta cada equipo durante la transición. Y empiezo con el análisis de duplicados.',
          out: 'Ernesto responde desde el celular: «Mañana lo mandamos. Y empieza por créditos: ahí está lo más caliente».', kusi: ['celebra', '¡Primer día y ya viste dónde arde!'] } },
      { id: 'b', label: 'Que el día fue intenso y que mañana sigues con el mapa.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Ernesto: día intenso, mañana sigo con el mapa 💪',
          out: 'Ernesto responde con un pulgar. Mañana alguien más le escribirá a dos jefes a la vez.', kusi: ['pensando', '¿Y el riesgo que viste?'] } },
    ],
    mirada: { ve: 'El primer reporte a tu jefe dice qué tipo de analista eres: quien cuenta lo que hizo o quien cuenta lo que vio. En una fusión, lo que ves en los pasillos vale tanto como lo que dibujas en un organigrama.',
      normas: [{ ley: 'Ley 30822 (Ley COOPAC)', dice: 'Las cooperativas de ahorro y crédito no autorizadas a captar recursos del público están bajo la supervisión de la SBS desde el 1 de enero de 2019.', practica: 'Una fusión de COOPAC no se hace solo «entre nosotros»: la estructura nueva también debe sostener los controles que la SBS revisa.' }] },
  },
];
