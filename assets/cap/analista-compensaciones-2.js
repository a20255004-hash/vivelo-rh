// Analista de Compensaciones y Beneficios · Capítulo 2 · «La encuesta» · Semana 1, miércoles.
// Hilo: cruzas la encuesta de mercado con la planilla; los técnicos de campo están muy por debajo.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales (titular y encargado del tratamiento; medidas de seguridad y
//   confidencialidad): https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
//   y su reglamento vigente, D.S. 016-2024-JUS (que derogó el D.S. 003-2013-JUS). Ley 29733, arts. 16 (seguridad) y 17
//   (confidencialidad del titular y del encargado).
// - Ley 30709 (igualdad remunerativa), ya citada en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'La encuesta', dia: 'Semana 1, martes', foto: 'assets/foto/revisa.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:20', fin: '19:30', cierreHora: '19:15',
  apertura: 'Martes. El Corredor Rojo por Javier Prado avanza a paso de tortuga y llegas con el café a medio tomar. Sobre tu teclado hay un USB con una etiqueta: «Encuesta 2026 · CONFIDENCIAL».', boton: 'Abrir la encuesta',
  kusi: 'Hoy el mercado te dice cuánto vale cada puesto afuera. ¡A escucharlo con lupa!',
  lead: 'Interrogaste una encuesta de mercado, corregiste un match de puestos, escuchaste a campo, cuidaste datos confidenciales y armaste tu primer análisis de mercado.',
  reflexion: 'Si tú fueras técnica de campo y supieras que el mercado paga 25 % más, ¿qué esperarías de tu empresa?',
  siguiente: { n: 3, titulo: 'El cuadro de categorías', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'encuesta', p: 'Encuesta de mercado 2026', j: 'Gustavo · Compensaciones', d: 0, e: 'Recién recibida' },
  { id: 'match', p: 'Match de puestos con la encuesta', j: 'Consultora Pulso Salarial', d: 0, e: 'Por revisar' },
  { id: 'tecnicos', p: 'Técnicos de campo', j: 'Wilber · Operaciones de Campo', d: 0, e: 'Rotación alta' },
  { id: 'analisis', p: 'Análisis de mercado para el comité', j: 'Gustavo · Compensaciones', d: 0, e: 'Por armar' },
];

export const FUTURO = {
  encuesta_envejecida: ['Detectaste que los datos de la encuesta eran de abril y había que actualizarlos.', 'Gustavo lo usará en el simulador del capítulo 7.'],
  datos_protegidos: ['Frenaste el envío de la planilla con DNI por correo sin protección.', 'La consultora cambiará su forma de pedir datos.'],
  datos_expuestos: ['La planilla completa salió por correo sin protección.', 'Fiorella te pedirá explicaciones más adelante.'],
  confidencial_ok: ['No mandaste los sueldos de Tecnología a quien no debía verlos.', 'Patricia de Finanzas lo recordará.'],
  sueldos_filtrados: ['Mandaste sueldos individuales a Finanzas sin autorización.', 'El archivo circulará donde no debía.'],
  tecnicos_honesto: ['Le diste a Wilber un mensaje honesto para los técnicos, sin prometer cifras.', 'Wilber confiará en ti en el comité.'],
  tecnicos_promesa: ['Dejaste que Wilber prometiera un aumento a los técnicos.', 'Los técnicos esperarán una cifra que nadie aprobó.'],
  paquete_total: ['Miraste la compensación total de los técnicos, no solo el sueldo base.', 'Te servirá para los escenarios del capítulo 7.'],
  mercado_solido: ['Tu análisis de mercado tiene fuente, fecha y advertencias.', 'Será la base del cuadro del capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
  patricia: { n: 'Patricia Lozada', sub: 'Analista de Finanzas · Presupuesto', c: '#E4572E' },
};

export const WSP = [
  { chat: 'grupo', t: '08:21', de: 'Gustavo', txt: 'Te dejé el USB de la encuesta. No sale de la oficina, ni en foto 🙏' },
  { chat: 'gustavo', t: '08:24', de: 'Gustavo', txt: 'Lo de ayer con Renzo sigue dando vueltas: Diego ya firmó su aumento. Hoy no es tema, pero tenlo en cuenta.', si: 'renzo_cede' },
  { chat: 'fiorella', t: '08:30', de: 'Fiorella', txt: 'La política corregida ya está con los gerentes. Nadie preguntó por la cláusula que quitamos. Mejor así.', si: 'politica_limpia' },
  { chat: 'patricia', t: '13:12', de: 'Patricia', txt: 'Holaa, soy Patricia de Presupuesto 😊 ¿Me pasas rapidito los sueldos de todo Tecnología? Es para cuadrar 2027, lo necesito antes de las 3.' },
  { chat: 'wilber', t: '16:05', de: 'Wilber', txt: 'Ingeniera, ¿tiene 5 minutos? Estoy en el piso 2, acabo de llegar de Huachipa.' },
  { chat: 'gustavo', t: '18:40', de: 'Gustavo', txt: 'Buen día de mercado. Mañana me cuentas cómo vas a presentar lo de los técnicos.' },
];

export const CORREOS = [
  { t: '08:35', de: 'Pulso Salarial · Consultora', para: 'Compensaciones AndesTel', asunto: 'Entrega · Encuesta Telecomunicaciones 2026', html: '<p>Estimados:</p><p>Adjuntamos los resultados de la Encuesta de Remuneraciones del sector telecomunicaciones 2026: 18 empresas participantes, información recogida en abril.</p><p>Para el «match» de puestos del próximo año, les pediremos el archivo de planilla. Quedamos atentos.</p><p>Equipo Pulso Salarial</p>' },
  { t: '12:10', de: 'Gustavo Herrera', para: 'Analista de Compensaciones', asunto: 'RV: Entrega · Encuesta', html: '<p>Revisa con cuidado el match antes de sacar conclusiones. El año pasado comparamos a los técnicos con «soporte de escritorio» y casi nos equivocamos con todo el presupuesto.</p><p>G.</p>' },
];

export const QUIZ = [
  { q: 'En una encuesta salarial, el «match» de puestos consiste en…', ops: ['Comparar nombres de cargo idénticos', 'Asociar cada puesto propio con el de la encuesta que tiene funciones y nivel equivalentes', 'Elegir la empresa que más paga', 'Cruzar DNI con la SUNAT'], ok: 1, por: 'Se compara por contenido del puesto, no por cómo se llama.' },
  { q: 'Si los técnicos ganan S/ 2,400 y el P50 del mercado es S/ 3,200, la empresa paga…', ops: ['El 133 % del mercado', 'El 75 % del mercado: 25 % por debajo', 'Igual que el mercado', 'El 80 % del mercado'], ok: 1, por: '2,400 ÷ 3,200 = 0.75.' },
  { q: 'La encuesta se levantó en abril y la revisión rige desde enero. ¿Qué haces?', ops: ['Nada, el dato es el dato', 'Actualizar («envejecer») los datos a la fecha de la revisión con un supuesto explícito', 'Descartar la encuesta', 'Usar solo la intuición de los gerentes'], ok: 1, por: 'Los datos de mercado se mueven: se proyectan a la fecha en que regirá el sueldo y se dice qué supuesto se usó.' },
  { q: 'Enviar a un tercero la planilla con nombres, DNI y sueldos…', ops: ['Está prohibido siempre', 'Exige cuidar la Ley 29733: solo los datos necesarios, con medidas de seguridad y un encargo claro', 'Es libre si el tercero es una consultora', 'Solo requiere avisar por WhatsApp'], ok: 1, por: 'La Ley 29733 obliga al titular del banco de datos y al encargado a proteger los datos y a guardar confidencialidad.' },
  { q: 'Alguien de otra área te pide sueldos individuales «para cuadrar el presupuesto». Lo más adecuado es…', ops: ['Enviarlo todo para ayudar', 'Dar la información agregada que necesita, por el canal autorizado', 'Ignorarlo', 'Mandarle solo los de los gerentes'], ok: 1, por: 'Para presupuestar basta el costo total por área; los sueldos individuales son confidenciales.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '08:40', ch: 'presencial', who: 'gustavo', titulo: 'Interrogar a la encuesta', banner: 'assets/esc/lupa.webp', lugar: 'Piso 9, cubículo de Compensaciones', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Gustavo abre el informe: 412 páginas, tablas en soles, percentiles P25, P50 y P75. ${F.has('compa_bien') ? '«Con el compa-ratio de ayer ya sabes mirar adentro. Hoy miramos afuera.»' : '«El lunes miramos adentro. Hoy miramos afuera.»'}</p><p>«Antes de creerle a un número, <mark class="clave">pregúntale de dónde sale</mark>. Tienes tiempo para dos preguntas; a las nueve tengo comité.»</p>`,
    type: 'ask', max: 2, prompt: '¿Qué le preguntas a Gustavo sobre la encuesta?',
    opts: [
      { id: 'fecha', label: '¿Cuándo se recogieron los datos?', info: '«En abril. Y nuestra revisión rige desde enero. Entre abril y enero el mercado sigue moviéndose: hay que proyectar el dato, con un supuesto que todos puedan ver.»' },
      { id: 'quien', label: '¿Qué empresas participan?', info: '«Dieciocho: operadoras, dos contratistas grandes de instalación y algunas empresas de fibra. Ojo: las contratistas son justo las que se están llevando a nuestros técnicos.»' },
      { id: 'perc', label: '¿Contra qué percentil nos comparamos?', info: '«La política dice P50: pagar como la mediana del mercado. Algunos gerentes quieren P75 para su gente. Todos quieren P75 para su gente.» Se ríe, cansado.' },
      { id: 'match', label: '¿Quién hizo el match de puestos?', info: '«La consultora, con lo que le mandamos el año pasado. Por eso te pedí revisarlo: un mal match y comparas peras con manzanas.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('fecha') || picks.includes('match') ? 4 : 2, tiempo: 1 },
      rel: { gustavo: 1 },
      flags: picks.includes('fecha') ? ['encuesta_envejecida'] : [],
      cartera: { encuesta: picks.includes('fecha') ? 'Datos de abril: hay que proyectarlos a enero' : 'Leída, sin revisar la fecha' },
      out: picks.includes('fecha') ? 'Anotas en un post-it amarillo: «abril → enero: proyectar». Gustavo lo ve y sonríe camino al comité.' : 'Te quedas con dos buenas pistas. La fecha de los datos no aparece en tus notas.',
      kusi: ['curioso', 'Un número sin fecha es medio número.'],
    }),
    rules: [[BP, 'Antes de usar una encuesta, revisa su fecha, sus participantes y cómo se hizo el match de puestos.']],
    mirada: {
      ve: 'Una encuesta de mercado no es la verdad: es una foto tomada en cierto momento, con ciertas empresas y con cierto criterio para comparar puestos. La analista que pregunta eso antes de usarla evita conclusiones equivocadas.',
      visual: { tipo: 'rango', titulo: 'Percentiles del mercado · Técnico de campo FTTH (S/ mensuales)', min: 2000, max: 4200, banda: [2800, 3700], marcas: [['P25', 2800], ['P50', 3200], ['P75', 3700], ['AndesTel', 2400]] },
    },
  },
  {
    id: 'e2', t: '09:50', ch: 'sistema', who: null, titulo: 'El archivo del match', banner: 'assets/3d/scenes/corporativo.webp', lugar: 'Carpeta compartida · «MATCH_2026_final(2).xlsx»', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Abres el archivo que la consultora armó con lo que AndesTel envió el año pasado. Tiene tres pestañas: «Hoja1», «Hoja1 (2)» y «NO BORRAR».</p><p>En la última está el match de puestos y unas notas sobre el envío de datos. <mark class="clave">Algo aquí no cuadra</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal o debe corregirse.',
    doc: { t: 'Match de puestos · AndesTel vs. Encuesta 2026', sub: 'Pestaña «NO BORRAR»' },
    lines: [
      { id: 'tec', t: 'Técnico de campo FTTH (instala fibra en domicilios) = «Técnico de soporte de escritorio».', bad: BP, why: 'No es el mismo trabajo: uno sube a postes y maneja fusionadoras, el otro atiende computadoras en oficina. El match debe hacerse por funciones y nivel.' },
      { id: 'ing', t: 'Ingeniero(a) de redes = «Ingeniero de redes · nivel intermedio».' },
      { id: 'anual', t: 'Los sueldos de la encuesta se compararon con los mensuales de AndesTel, sin dividir los montos anuales entre el número de pagos.', bad: BP, why: 'Comparar un monto anual con uno mensual infla o desinfla todo. Ambos deben estar en la misma unidad.' },
      { id: 'dni', t: 'Para 2027, enviar a la consultora la planilla completa con nombres, DNI, dirección y sueldo, por correo y sin contraseña.', bad: LEY, why: 'Son datos personales. La Ley 29733 exige medidas de seguridad y confidencialidad; para un match basta enviar puesto, nivel y sueldo, sin identificar a nadie.' },
      { id: 'sup', t: 'Supervisor de call center = «Supervisor de atención al cliente».' },
      { id: 'nuevo', t: 'Los puestos sin equivalente claro se marcan «sin match» y no se comparan.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'El match se corrige a medias. La nota del envío de 2027 queda igual: el próximo año la planilla completa saldrá por correo.' : `Corriges ${hitsLey + hitsBp} problemas y le escribes a la consultora: «Para 2027 enviaremos datos sin nombres ni DNI, en archivo protegido».`,
      flags: [missLey ? 'datos_expuestos' : 'datos_protegidos'],
      cartera: { match: missLey ? 'Match corregido; envío de datos sin cambios' : 'Match corregido y envío de datos protegido' },
      pro: { ok: 'Un match bien hecho es la mitad del análisis.', risk: 'Una planilla con DNI viajando por correo abierto es un incidente esperando ocurrir.', info: 'Pregunta a la consultora cómo guarda y cuándo borra los datos que recibe.' },
      kusi: missLey ? ['preocupado', '¿Y los DNI por correo?'] : ['celebra', '¡Peras con peras!'],
    }),
    rules: [[LEY, 'Ley 29733: el titular del banco de datos y el encargado del tratamiento deben adoptar medidas de seguridad y guardar confidencialidad.'], [BP, 'El match se hace por funciones y nivel, no por el nombre del cargo.']],
    mirada: {
      ve: 'El error del año pasado no estaba en la encuesta, sino en el match: los técnicos se compararon con un puesto de oficina que paga distinto. Y en compensaciones, cuidar los datos de las personas es tan importante como cuidar los números.',
      normas: [{ ley: 'Ley 29733, Ley de Protección de Datos Personales, arts. 16 y 17, y D.S. 016-2024-JUS', dice: 'El titular del banco de datos y el encargado deben proteger los datos personales con medidas técnicas, organizativas y legales, y guardar confidencialidad.', practica: 'Para un estudio salarial basta enviar datos sin identificar a las personas.' }],
    },
  },
  {
    id: 'e3', t: '11:15', ch: 'llamada', who: null, titulo: 'Lo que dice el campo', banner: 'assets/foto/llamada.webp', lugar: 'Sala pequeña del piso 9', show: ['personas', 'calidad'],
    body: () => `<p>Con el match corregido, los técnicos de campo ganan en promedio <mark class="clave">S/ 2,400; el P50 del mercado es S/ 3,200</mark>. Antes de escribirlo en un informe, quieres oírlo de la gente.</p><p>Te encierras en la sala pequeña, la del proyector que nadie sabe prender, y haces tres llamadas.</p>`,
    type: 'calls',
    calls: [
      ['Wilber Ccori · jefe de Operaciones de Campo · 19 años en la empresa', 'Contesta desde la camioneta, con radio de fondo', '«Este mes se me fueron seis técnicos. Seis. A una contratista que paga S/ 3,000 más un bono por instalación. Los chicos me dicen: “Jefe, allá me pagan el pasaje”. Yo soy de Abancay, empecé subiendo postes. Sé lo que es.»'],
      ['Yesenia Huamán · técnica FTTH · 2 años · Ate', 'Contesta en un descanso, con el viento en el micrófono', '«Me gusta AndesTel, tengo seguro y mi planilla completa, eso allá no siempre es así. Pero mi mamá está enferma y los S/ 600 de diferencia… Igual no he renunciado, ¿ah? No vaya a pensar.»'],
      ['Ejecutiva de Pulso Salarial', 'Contesta en altavoz, apurada', '«Sí, los técnicos subieron bastante en el año por el despliegue de fibra. Pero ojo: las contratistas reportan sueldo y bono juntos, y no siempre tienen a todos en planilla.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué concluyes?',
    choices: [
      { id: 'a', label: 'La brecha es real y explica la rotación, pero hay que comparar el paquete completo: planilla, seguro y bonos, no solo el sueldo base.',
        res: { q: 'buena', fx: { calidad: 5, personas: 3 }, flags: ['paquete_total'], cartera: { tecnicos: 'Brecha de 25 % en sueldo; ventaja en beneficios' },
          out: 'Anotas: «Sueldo: −25 %. Paquete: menos brecha, pero brecha. Seis renuncias en un mes». Ahora el número tiene cara y contexto.',
          pro: { ok: 'Contrastas el dato con la gente y con la fuente, y miras la compensación total.', info: 'Pide a Wilber el costo de reemplazar a un técnico: selección, capacitación y meses hasta ser productivo.' },
          kusi: ['feliz', 'El número ahora tiene nombre: Yesenia.'] } },
      { id: 'b', label: 'Las contratistas inflan los datos: la brecha no es tan grave, mejor esperar a la próxima encuesta.',
        res: { q: 'riesgosa', fx: { calidad: -3, personas: -3 }, cartera: { tecnicos: 'Brecha minimizada' },
          out: 'Cierras la laptop tranquila. En Huachipa, Wilber entrevista hoy a dos reemplazos para los que se fueron.',
          pro: { ok: 'Dudas de la fuente, que es sano.', risk: 'Seis renuncias en un mes son un dato que no viene de ninguna encuesta.' },
          kusi: ['triste', '¿Y las seis renuncias?'] } },
      { id: 'c', label: 'Hay que subir a todos los técnicos al P50 de inmediato, cueste lo que cueste.',
        res: { q: 'aceptable', fx: { personas: 3, calidad: -1 }, cartera: { tecnicos: 'Brecha confirmada; propuesta sin costear' },
          out: 'Haces la cuenta rápida: subir a los 380 técnicos al P50 se comería buena parte del 4 %. La intención es buena; el número todavía no.',
          pro: { ok: 'Tomas en serio la rotación.', risk: 'Una propuesta sin costear no pasa del primer minuto del comité.' },
          kusi: ['pensando', '¿Y cuánto cuesta eso?'] } },
    ],
    rules: [[BP, 'Compara la compensación total (sueldo, bonos y beneficios), no solo el sueldo base.']],
    mirada: {
      ve: 'Las encuestas dicen cuánto, pero no por qué. Escuchar al jefe de campo y a una técnica te da lo que ningún percentil muestra: qué valoran, qué los empuja a irse y qué los hace quedarse.',
      visual: { tipo: 'balanza', a: { t: 'Contratista', items: ['S/ 3,000 de sueldo', 'Bono por instalación', 'Pasajes'] }, b: { t: 'AndesTel', items: ['S/ 2,400 de sueldo', 'Planilla completa y seguro', 'Estabilidad'] } },
    },
  },
  {
    id: 'e4', t: '13:15', ch: 'whatsapp', who: null, titulo: '«Rapidito, antes de las 3»', banner: 'assets/esc/dudas.webp', lugar: 'Un menú en la calle Las Begonias', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Estás a la mitad de un ají de gallina de S/ 16 cuando vibra el celular. Es Patricia, de Presupuesto: te pide <mark class="clave">los sueldos de todo Tecnología</mark>, nombre por nombre, «rapidito».</p><p>Ella es amable, siempre ayuda a todos y de verdad tiene que cuadrar el presupuesto 2027 hoy. Tú tienes el Excel abierto en el celular.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Mandarle el costo total de planilla de Tecnología por puesto, sin nombres, y decirle que si necesita más detalle lo pida Gustavo.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3, confianza: 1 }, flags: ['confidencial_ok'], envia: ['patricia', 'Hola Patricia 😊 Te paso el costo total de Tecnología por puesto, sin nombres: con eso cuadras el presupuesto. Si necesitas el detalle individual, que lo coordine Gustavo con tu jefe.'],
          out: 'Patricia responde: «Ah, ¡con esto me basta! No sabía que se podía así». Terminas tu ají frío, pero tranquila.',
          pro: { ok: 'Das lo que la tarea necesita sin exponer a nadie.', info: 'Propón a Finanzas un reporte agregado mensual: así nadie tendrá que pedir sueldos por WhatsApp.' },
          kusi: ['celebra', '¡Ayudaste sin exponer a nadie!'] } },
      { id: 'b', label: 'Mandarle el Excel completo: es de la empresa, es para el presupuesto y Patricia es de confianza.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, flags: ['sueldos_filtrados'], envia: ['patricia', 'Te paso el Excel de Tecnología 👍 Cuídalo porfa.'],
          out: 'Patricia agradece con tres emojis. A las 4 p. m. el archivo ya está en una carpeta compartida de Finanzas donde entran doce personas.',
          pro: { ok: 'Ayudas rápido a una compañera.', risk: 'Los sueldos individuales son datos confidenciales: una vez enviados, ya no controlas quién los ve.' },
          kusi: ['preocupado', 'Ese Excel ya no es tuyo…'] } },
      { id: 'c', label: 'No responder hasta volver a la oficina y preguntarle a Gustavo.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -2 }, flags: ['confidencial_ok'],
          out: 'A las 2:50 Patricia te escribe «¿?». Gustavo te ayuda a mandarle algo agregado, pero ella ya escaló el pedido a su gerente.',
          pro: { ok: 'No expones datos.', risk: 'El silencio también comunica: alguien con un plazo real se queda sin respuesta.' },
          kusi: ['pensando', 'Cuidaste los datos, pero dejaste a Patricia colgada.'] } },
    ],
    rules: [[BP, 'Entrega información salarial agregada a quien la necesita; los sueldos individuales solo por el canal autorizado.']],
    mirada: {
      ve: 'En compensaciones conoces el sueldo de todos. La confidencialidad no es desconfiar de los compañeros: es entender que casi siempre hay una forma de ayudar sin mostrar lo que no hace falta.',
      visual: { tipo: 'cambio', titulo: 'Qué necesita Finanzas', pares: [['Sueldo de cada persona', 'Costo total por puesto'], ['Excel por WhatsApp', 'Reporte por el canal autorizado'], ['Pedido urgente', 'Proceso mensual acordado']] },
    },
  },
  {
    id: 'e5', t: '15:10', ch: 'documento', who: null, titulo: 'Tu primer análisis de mercado', banner: 'assets/esc/idea.webp', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Gustavo quiere una lámina, solo una, para el comité: <mark class="clave">dónde está AndesTel frente al mercado</mark>. ${F.has('encuesta_envejecida') ? 'Tu post-it amarillo («abril → enero») sigue pegado en el monitor.' : 'Revisas otra vez el informe de 412 páginas.'}</p><p>Cada bloque tiene frases útiles y otras que suenan bien pero no dicen nada.</p>`,
    type: 'builder', prompt: 'Arma la lámina eligiendo las piezas de cada bloque.', boton: 'Guardar la lámina',
    bloques: [
      { id: 'fuente', t: 'Fuente', n: 1, ops: [
        { id: 'f1', t: 'Encuesta Pulso Salarial 2026 · 18 empresas de telecomunicaciones · datos de abril, proyectados a enero.', ok: true, por: 'Quién, cuántas empresas y de cuándo: el comité sabe qué tan fresco es el dato.' },
        { id: 'f2', t: 'Fuente: estudio de mercado.', ok: false, por: 'No dice qué estudio, ni de cuándo.' },
      ] },
      { id: 'hallazgos', t: 'Hallazgos', n: 2, ops: [
        { id: 'h1', t: 'Técnicos de campo: 25 % debajo del P50 (S/ 2,400 vs. S/ 3,200); seis renuncias este mes.', ok: true, por: 'Brecha y consecuencia juntas.' },
        { id: 'h2', t: 'Ingenieros de redes: en línea con el P50, pero con diferencias internas grandes.', ok: true, por: 'Afuera está bien; adentro hay algo que mirar (y se llama Claudia).' },
        { id: 'h3', t: 'Somos una empresa que paga bien.', ok: false, por: 'Una opinión, no un hallazgo.' },
        { id: 'h4', t: 'Los gerentes piden pagar en P75.', ok: false, por: 'Es una presión, no un dato del mercado.' },
      ] },
      { id: 'cuidado', t: 'Advertencia', n: 1, ops: [
        { id: 'c1', t: 'Las contratistas reportan sueldo y bono juntos: la brecha en compensación total es menor que en sueldo base.', ok: true, por: 'Mostrar el límite del dato te hace más creíble, no menos.' },
        { id: 'c2', t: 'Los datos son 100 % exactos.', ok: false, por: 'Ninguna encuesta lo es.' },
      ] },
      { id: 'reco', t: 'Siguiente paso', n: 1, ops: [
        { id: 'r1', t: 'Costear dos escenarios para los técnicos (cerrar toda la brecha o parte de ella) dentro del 4 %.', ok: true, por: 'Propones algo que el comité pueda decidir.' },
        { id: 'r2', t: 'Subir a todos al P75 para ser los mejores del mercado.', ok: false, por: 'No cabe en el 4 % y nadie lo pidió con datos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['mercado_solido'] : [],
        cartera: { analisis: q === 'buena' ? 'Lámina lista: fuente, brecha y advertencia' : 'Lámina con huecos' },
        out: q === 'buena' ? 'Gustavo la lee en treinta segundos: «Esto se entiende sin que yo esté al lado. Así se presenta».' : 'Gustavo la lee y pregunta: «¿Y de cuándo es esto? ¿Y qué le pedimos al comité?».',
        pro: { ok: 'Fuente, hallazgo, límite y pedido: la estructura de cualquier análisis que convence.', info: 'Guarda una versión con el detalle por puesto por si el comité pregunta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una lámina que se defiende sola!' : 'Le faltan piezas.'],
      };
    },
    rules: [[BP, 'Todo análisis de mercado indica fuente, fecha, hallazgo, límites del dato y una decisión que pedir.']],
    mirada: {
      ve: 'El comité no va a leer 412 páginas. Tu trabajo es convertir la encuesta en una decisión posible, sin esconder sus límites.',
      visual: { tipo: 'flujo', titulo: 'Una lámina que convence', pasos: ['Fuente y fecha', 'Hallazgo', 'Límite del dato', 'Decisión que se pide'] },
    },
  },
  {
    id: 'e6', t: '16:15', ch: 'presencial', who: null, titulo: '«Dígame algo para los chicos»', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo del piso 2, junto a la máquina de café', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Wilber llega con el chaleco naranja todavía puesto y polvo de obra en las botas. Habla bajito, junto a la máquina de café que solo da café aguado.</p><p>«Ingeniera, mañana tengo reunión con los técnicos a las seis de la mañana. <mark class="clave">Si les digo que viene un aumento, se me quedan</mark>. ¿Les puedo decir que sí?»</p><p>La revisión no está aprobada. Nadie sabe todavía cuánto tocará a los técnicos.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que puede contar que la empresa está revisando los sueldos de campo frente al mercado y que en unos diez días habrá respuesta, sin dar cifras ni prometer montos.',
        res: { q: 'buena', fx: { etica: 4, personas: 2, confianza: 2 }, flags: ['tecnicos_honesto'], cartera: { tecnicos: 'Mensaje honesto acordado con Wilber' },
          out: 'Wilber lo piensa. «No es lo que quería… pero es verdad. Prefiero eso a mentirles.» Anota la frase en su libreta de tapa dura.',
          pro: { ok: 'Das una señal real sin comprometer lo que no está aprobado.', risk: 'Puede que alguno se vaya igual esta semana.', info: 'Cuéntale a Gustavo y a Fiorella qué se dirá: que nadie se sorprenda.' },
          kusi: ['animo', 'Verdad sin promesas vacías.'] } },
      { id: 'b', label: 'Decirle que sí, que les diga que viene un aumento: con seis renuncias, la retención es urgente.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: 2, confianza: -2 }, flags: ['tecnicos_promesa'], cartera: { tecnicos: 'Aumento prometido sin aprobación' },
          out: 'Wilber se va contento. Mañana a las seis, 380 técnicos escucharán «viene un aumento». Cada uno imaginará su propia cifra.',
          pro: { ok: 'Buscas frenar la rotación.', risk: 'Una promesa sin cifra crea expectativas que el 4 % quizá no pueda cumplir.' },
          kusi: ['preocupado', '¿Y si el aumento es menor de lo que imaginan?'] } },
      { id: 'c', label: 'Pedirle que no diga nada: es información confidencial hasta que el comité apruebe.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -3, confianza: -1 }, rel: { gustavo: 0 },
          out: 'Wilber asiente, serio. «Ya. Entonces sigo entrevistando reemplazos.» Se va sin terminar el café.',
          pro: { ok: 'No comprometes nada que no esté aprobado.', risk: 'El silencio total, con seis renuncias, también es un mensaje: «a nadie le importa».' },
          kusi: ['triste', 'Wilber se fue con las manos vacías.'] } },
    ],
    rules: [[BP, 'No prometas incrementos antes de su aprobación; sí puedes comunicar que hay una revisión en curso y cuándo habrá respuesta.']],
    mirada: {
      ve: 'Entre el secreto total y la promesa hay un punto medio honesto: decir lo que es verdad hoy. Los equipos aguantan la incertidumbre mejor que una promesa incumplida.',
      visual: { tipo: 'linea', titulo: 'Qué se puede decir y cuándo', hitos: [['Hoy', 'Hay una revisión en curso'], ['Semana 2', 'El comité decide'], ['Fin de la semana 2', 'Cada técnico recibe su carta']] },
    },
  },
  {
    id: 'e7', t: '18:50', ch: 'whatsapp', who: 'gustavo', titulo: 'El resumen para Gustavo', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con el piso casi vacío', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>El piso se vacía. Afuera, Javier Prado ya es una fila de luces rojas. ${F.has('tecnicos_promesa') ? 'Sigues pensando en la reunión de mañana a las seis.' : 'Wilber te mandó un pulgar desde la camioneta.'}</p><p>Gustavo pidió saber cómo presentarás lo de los técnicos. <mark class="clave">Arma el mensaje</mark>.</p>`,
    type: 'compose', enviaA: 'gustavo', para: 'Para: Gustavo Herrera', boton: 'Enviar el WhatsApp',
    prompt: 'Elige una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'Con el match corregido, los técnicos de campo están 25 % debajo del P50.', ok: true, por: 'Dato preciso y con el match ya corregido.' },
        { id: 'd2', t: 'Los técnicos ganan poquísimo.', ok: false, por: 'Es una impresión, no un dato.' },
      ] },
      { id: 'contexto', t: 'El contexto', ops: [
        { id: 'c1', t: 'Seis renuncias este mes, casi todas a contratistas; en beneficios estamos mejor.', ok: true, por: 'Consecuencia y matiz juntos.' },
        { id: 'c2', t: 'Wilber está desesperado.', ok: null, por: 'Es cierto, pero el comité necesita el dato, no el ánimo de Wilber.' },
      ] },
      { id: 'propuesta', t: 'La propuesta', ops: [
        { id: 'p1', t: 'Propongo costear dos escenarios para cerrar la brecha, y antes ordenar el cuadro de categorías.', ok: true, por: 'Un siguiente paso concreto y en orden.' },
        { id: 'p2', t: 'Hay que darles el 4 % completo a ellos.', ok: false, por: 'Dejas sin presupuesto a todos los demás y a las brechas internas.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { gustavo: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Gustavo responde: «Perfecto. Y sí: antes de repartir, mañana ordenamos el cuadro de categorías. Vas a ver qué desorden».' : 'Gustavo responde: «Ok. Mañana lo afinamos». Sales a buscar el bus con la sensación de que faltó algo.',
        pro: { ok: 'Dato, contexto y propuesta: tres líneas que un jefe puede reenviar tal cual.', info: 'Guarda este mensaje: será el borrador de tu presentación al comité.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Mensaje redondo!' : 'Casi: dato, contexto y propuesta.'],
      };
    },
    mirada: { ve: 'Un buen mensaje de compensaciones cabe en tres líneas: qué dice el dato, qué está pasando por eso y qué se propone hacer.' },
  },
];
