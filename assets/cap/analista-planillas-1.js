// Analista de Planillas · Capítulo 1 · «Migrar» · Semana 1, lunes.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas:
// - D.S. 018-2007-TR: la Planilla Electrónica está conformada por el T-Registro y la PLAME.
//   https://charlas.sunat.gob.pe/sites/default/files/2024-09/Planillas%20T%20registro%20-%20Plame%20Web%202024.pdf
//   https://busquedas.elperuano.pe/dispositivo/NL/2218000-1
// - Ley 29733, de protección de datos personales: los datos del personal se tratan con medidas de seguridad y por canales controlados.

export const CAP = {
  n: 1, titulo: 'Migrar', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'Andes Logística · Centro de distribución de la avenida Gambetta, Callao',
  inicio: '08:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Callao, cielo panza de burro y camiones que entran y salen del centro de distribución desde las cinco de la mañana. Es tu primer día como analista de planillas de Andes Logística: 1,100 personas que cobran gracias a lo que pase en tu pantalla.', boton: 'Entrar a la oficina',
  kusi: 'Un sistema nuevo no se estrena: se prueba, se duda y recién se confía. ¡Dale!',
  lead: 'Entendiste el cronograma, ordenaste el plan de migración, defendiste (o no) la prueba en paralelo, elegiste qué datos limpiar primero y escuchaste a quien vino a preguntar por su sueldo.',
  reflexion: 'Si mañana el sistema nuevo calculara mal a una sola persona, ¿cómo te enterarías?',
  siguiente: { n: 2, titulo: 'Los conceptos', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'migracion', p: 'Migración a Nómina360', j: 'Patricia · Compensaciones', d: 0, e: 'Salida en vivo: viernes de la próxima semana' },
  { id: 'datos', p: 'Datos maestros de 1,100 trabajadores', j: 'Mili · Planillas', d: 0, e: 'Excel sin revisar' },
  { id: 'conceptos', p: 'Mapa de conceptos de pago', j: 'Diego · Consultor', d: 0, e: '140 conceptos sin documentar' },
  { id: 'paralelo', p: 'Prueba en paralelo de octubre', j: 'Tú', d: 0, e: 'Por decidir' },
  { id: 'consultas', p: 'Consultas del personal', j: 'Sindicato · Teodoro', d: 0, e: 'Sin registro' },
];

export const FUTURO = {
  paralelo_ok: ['Defendiste correr octubre en los dos sistemas.', 'El miércoles verás diferencias que, sin esa prueba, habrían salido en las boletas.'],
  paralelo_saltado: ['Aceptaste probar solo 20 boletas al azar.', 'Patricia te pedirá el miércoles una prueba completa, con menos tiempo.'],
  postergar_pedido: ['Pediste postergar la salida en vivo un mes.', 'Gerencia respondió que la licencia del sistema viejo vence a fin de mes.'],
  datos_clave: ['Limpiaste lo que de verdad mueve el cálculo: DNI, cuentas y fechas.', 'El jueves agradecerás tener bien las fechas de ingreso.'],
  datos_flojos: ['Tu limpieza de datos se fue en detalles que no mueven el pago.', 'Algunas cuentas bancarias darán problemas el jueves de la próxima semana.'],
  mili_ordenada: ['Mili sabe dónde guardar, cómo registrar cambios y qué no mandar por WhatsApp.', 'Será tu mejor aliada en el cierre.'],
  teodoro_escuchado: ['Teodoro, del sindicato, te contó que «la CTS salió baja» y anotaste el caso.', 'Esa nota volverá a tu escritorio esta semana.'],
  teodoro_despachado: ['Le dijiste a Teodoro que nada cambia y que no se preocupe.', 'El sindicato buscará respuestas por otro lado.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  mili: { n: 'Mili Sotelo', sub: 'Asistente de Planillas', c: '#C05621' },
  proyecto: { n: 'Proyecto Nómina360', sub: 'Diego, Patricia, Sistemas y tú', c: '#2B6CB0' },
};

export const WSP = [
  { chat: 'equipo', t: '07:58', de: 'Patricia', txt: 'Bienvenida 🙂 Estoy en la sala de vidrio. Trae tu café, que hoy hay mucho que mirar.' },
  { chat: 'equipo', t: '08:05', de: 'Mili', txt: 'Holaa, bienvenida!! Soy Mili, la asistente 🙋🏽‍♀️ Tu escritorio es el de la planta, la que se está muriendo 🌱' },
  { chat: 'proyecto', t: '10:40', de: 'Diego', txt: 'Buenos días, equipo 🚀 Estamos al 85 %. Ya casi. Hoy les presento el plan de salida.' },
  { chat: 'proyecto', t: '13:05', de: 'Diego', txt: 'Ok, mantenemos la prueba en paralelo de octubre. Corro la carga el miércoles temprano 👍', si: 'paralelo_ok' },
  { chat: 'mili', t: '15:40', de: 'Mili', txt: 'Listo, ya creé la carpeta y la pestaña de cambios. Perdón por lo del WhatsApp, siempre lo hacíamos así 🙈', si: 'mili_ordenada' },
  { chat: 'equipo', t: '18:35', de: 'Patricia', txt: 'Buen primer día. Mañana: conceptos. Trae paciencia, son 140.' },
];

export const CORREOS = [
  { t: '08:20', de: 'Patricia Gómez', para: 'Analista de Planillas', asunto: 'Nómina360 · lo que viene', html: '<p>Hola y bienvenida. Como te conté en la entrevista, cambiamos de sistema de planillas. La licencia del sistema actual vence a fin de mes, así que <b>la planilla de noviembre, que pagamos el viernes de la próxima semana, sale con Nómina360</b>.</p><p>Tenemos tres planillas: empleados, operarios de almacén (con turnos de noche) y practicantes. Tu tarea es que nadie cobre mal por el cambio. Diego, el consultor, configura; nosotras validamos.</p><p>Patricia</p>' },
  { t: '11:50', de: 'Diego Arana', para: 'Proyecto Nómina360', asunto: 'Plan de salida en vivo (propuesta)', html: '<p>Equipo: para llegar a tiempo propongo <b>reemplazar la prueba en paralelo de octubre por una muestra de 20 boletas</b>. Nómina360 está probado en más de 200 empresas. Si están de acuerdo, ganamos tres días.</p><p>Saludos, Diego</p>' },
];

export const QUIZ = [
  { q: '¿Qué componentes forman la Planilla Electrónica?', ops: ['El T-Registro y la PLAME', 'La boleta y el contrato', 'El libro de remuneraciones y el de asistencia', 'La CTS y las gratificaciones'], ok: 0, por: 'El D.S. 018-2007-TR establece que la Planilla Electrónica está formada por el T-Registro y la PLAME.' },
  { q: '¿Para qué sirve correr una planilla en paralelo en los dos sistemas?', ops: ['Para pagar dos veces', 'Para comparar resultados de un mismo mes y explicar cada diferencia antes de pagar', 'Para que el consultor descanse', 'Para cumplir con SUNAFIL'], ok: 1, por: 'La prueba en paralelo calcula un mes ya conocido en los dos sistemas: cada diferencia tiene que tener una explicación antes de confiar en el nuevo.' },
  { q: 'De estos datos, ¿cuál mueve directamente el cálculo de la CTS y las vacaciones?', ops: ['La talla de uniforme', 'La fecha de ingreso', 'El correo personal', 'La foto'], ok: 1, por: 'La fecha de ingreso define el tiempo de servicios: un error ahí cambia CTS, vacaciones y gratificaciones.' },
  { q: 'La asistente te manda por WhatsApp un Excel con DNI y cuentas bancarias. ¿Qué haces?', ops: ['Nada, es más rápido', 'Le pides que lo suba a la carpeta de la empresa y que lo borre del chat', 'Lo reenvías al consultor', 'Lo imprimes'], ok: 1, por: 'Los datos personales del personal se manejan por canales controlados, con medidas de seguridad (Ley 29733).' },
  { q: 'Un dirigente sindical te dice que «la CTS salió baja». Lo mejor es…', ops: ['Decirle que nada cambió', 'Anotar los casos concretos, revisarlos y darle una fecha de respuesta', 'Mandarlo a hablar con Patricia', 'Explicarle la fórmula y despedirlo'], ok: 1, por: 'Un reclamo concreto es un dato: puede esconder un error real. Registrar y responder con fecha genera confianza.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '08:15', ch: 'presencial', who: 'patricia-g', titulo: 'El cronograma en la pared', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de vidrio · segundo piso', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Desde la sala de vidrio se ven los montacargas cruzando el almacén. En la pared, un cronograma impreso: diez días hábiles y una estrella roja en el último viernes.</p><p>«Bienvenida${n ? ', ' + n : ''}. Ese viernes 1,100 personas cobran con un sistema que nunca ha pagado a nadie aquí. <mark class="clave">Pregúntame lo que necesites saber hoy</mark>, que a las nueve tengo comité.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Decide qué te sirve más para empezar.',
    opts: [
      { id: 'miedo', label: '¿Qué es lo que más te preocupa del cambio?', info: '«Que alguien cobre menos y nadie lo note hasta que llegue a su casa. Los operarios del turno noche viven al día: un error de cien soles es el pasaje del mes.»' },
      { id: 'quien', label: '¿Quién decide qué en este proyecto?', info: '«Diego configura, Sistemas migra los datos, nosotras validamos y yo firmo la salida en vivo. Si tú no validas un cálculo, yo no firmo. Así de simple.»' },
      { id: 'viejo', label: '¿Por qué cambian de sistema?', info: '«El viejo tiene quince años. Nadie sabe bien cómo calcula algunas cosas: el que lo configuró se fue en 2019. Y la licencia vence a fin de mes.»' },
      { id: 'tres', label: '¿Qué tienen de distinto las tres planillas?', info: '«Empleados cobran fijo. Operarios tienen turnos de noche, horas extras y un bono de productividad mensual. Practicantes reciben subvención, no sueldo. Cada una calcula distinto.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('quien') ? 2 : 0, tiempo: -1, personas: picks.includes('miedo') ? 1 : 0 }, rel: { 'patricia-g': picks.includes('viejo') ? 1 : 0 },
      cartera: { migracion: 'Cronograma entendido: 10 días hábiles' },
      out: 'Patricia se va a su comité y te deja la clave del sistema viejo pegada en un pósit… que despegas y guardas en tu cajón.',
      kusi: ['curioso', '«Nadie sabe cómo calcula algunas cosas.» Anota eso.'],
    }),
    mirada: {
      ve: 'En un cambio de sistema, la pregunta clave no es «cómo funciona el nuevo» sino «qué hacía el viejo que nadie recuerda». Las reglas escondidas en un sistema antiguo son las que más sustos dan.',
      visual: { tipo: 'linea', titulo: 'Diez días hasta el pago', hitos: [['Lunes S1', 'Plan'], ['Martes', 'Conceptos'], ['Miércoles', 'Paralelo'], ['Miércoles S2', 'Cierre'], ['Jueves S2', 'Banco'], ['Viernes S2', 'Pago']] },
    },
  },
  {
    id: 'm2', t: '09:30', ch: 'documento', who: null, titulo: 'El plan de migración', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, junto a la planta moribunda', show: ['calidad', 'tiempo'],
    body: () => `<p>Diego dejó un plan en PowerPoint con colores bonitos y los pasos desordenados. Patricia te pide que lo conviertas en <mark class="clave">una secuencia que se pueda firmar</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la migración. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'inv', t: 'Inventariar conceptos de pago y datos maestros del sistema viejo', por: 'Sin inventario no sabes qué estás migrando.' },
      { id: 'limp', t: 'Limpiar datos: DNI, cuentas, sistema de pensiones, fechas de ingreso', por: 'Basura que entra, basura que se paga.' },
      { id: 'carga', t: 'Cargar el maestro de trabajadores en Nómina360', por: 'Recién con datos limpios.' },
      { id: 'conf', t: 'Configurar conceptos y fórmulas, uno por uno', por: 'Cada concepto con su regla y su sustento.' },
      { id: 'par', t: 'Correr octubre en los dos sistemas y explicar cada diferencia', por: 'La prueba de fuego.' },
      { id: 'acta', t: 'Firmar el acta de salida en vivo', por: 'Alguien decide, con evidencia.' },
      { id: 'vivo', t: 'Calcular y pagar noviembre con Nómina360', por: 'El día de la verdad.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: q === 'riesgosa' ? -2 : 1 },
        cartera: { migracion: q === 'riesgosa' ? 'Plan con pasos cruzados' : 'Plan de migración en 7 pasos' },
        out: q === 'buena' ? 'Imprimes el plan en una hoja y lo pegas al lado del cronograma. Patricia, al volver, solo dice: «Esto sí lo firmo».' : 'El plan se entiende, pero Patricia mueve un paso: «Si cargas antes de limpiar, migras los errores».',
        pro: { ok: 'Ordenar es decidir qué depende de qué.', risk: 'Configurar sin inventario o cargar sin limpiar traslada los problemas viejos al sistema nuevo.', info: 'Cada paso debería tener dueño y fecha en el cronograma.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un plan que se puede firmar!' : 'El orden también es control.'],
      };
    },
    mirada: {
      ve: 'Una migración de planillas no es copiar y pegar: es traducir quince años de decisiones a un sistema nuevo. El orden de los pasos protege contra el error más común, que es migrar los errores viejos con fórmulas nuevas.',
      visual: { tipo: 'flujo', titulo: 'La migración', pasos: ['Inventariar', 'Limpiar', 'Cargar', 'Configurar', 'Paralelo', 'Acta', 'Pagar'], aqui: 0 },
    },
  },
  {
    id: 'm3', t: '11:55', ch: 'correo', who: 'consultor', titulo: '«Ya casi»: el atajo de Diego', banner: 'assets/foto2/tension.webp', show: ['calidad', 'tiempo', 'confianza'],
    mail: { from: 'Diego Arana', to: 'Proyecto Nómina360', asunto: 'Plan de salida en vivo (propuesta)' },
    body: () => `<p>Diego propone reemplazar la prueba en paralelo de octubre por <b>20 boletas al azar</b>: «Nómina360 está probado en 200 empresas».</p><p>Correr octubre completo en los dos sistemas toma tres días que no sobran. Pero 20 boletas de 1,100 <mark class="clave">es menos del 2 %</mark>, y casi ninguna sería de operarios con turno de noche.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mantener la prueba en paralelo completa y recortar otra cosa: los reportes gerenciales nuevos pueden esperar a diciembre.',
        res: { q: 'buena', fx: { calidad: 5, tiempo: -2, confianza: 2 }, rel: { consultor: -1, 'patricia-g': 1 }, flags: ['paralelo_ok'], cartera: { paralelo: 'Octubre completo, miércoles' },
          responde: 'Diego: gracias por la propuesta. Prefiero no saltar la prueba en paralelo: el sistema está probado, pero nuestras reglas no. Propongo mover los reportes gerenciales a diciembre y usar esos tres días para correr octubre completo.',
          out: 'Diego responde con un «ok 👍» seco. Patricia te reenvía el correo con una sola palabra: «Bien».',
          pro: { ok: 'Proteges la prueba que importa y ofreces una salida al cronograma.', risk: 'Diego puede sentir que no confías en su trabajo.', info: 'Probar no es desconfiar: es parte del trabajo de quien firma.' },
          kusi: ['animo', '¡Recortaste lo que podía esperar, no lo que protege!'] } },
      { id: 'b', label: 'Aceptar las 20 boletas, pero elegirlas tú: 10 de operarios de noche, 5 empleados y 5 practicantes.',
        res: { q: 'aceptable', fx: { calidad: 1, tiempo: 2 }, rel: { consultor: 1 }, flags: ['paralelo_saltado'], cartera: { paralelo: 'Muestra de 20 boletas elegidas' },
          responde: 'Diego: de acuerdo con la muestra, pero yo elijo las 20 boletas para que estén los casos difíciles: turno noche, horas extras, bono y practicantes.',
          out: 'Diego celebra con tres emojis. Una muestra bien elegida es mejor que una al azar, pero sigue siendo una muestra.',
          pro: { ok: 'Mejoras la muestra con casos difíciles.', risk: 'Las reglas raras, las que nadie recuerda, casi nunca caen en una muestra.' },
          kusi: ['pensando', 'Mejor muestra… pero muestra al fin.'] } },
      { id: 'c', label: 'Pedir a Patricia que postergue la salida en vivo un mes para hacer todo con calma.',
        res: { q: 'aceptable', fx: { tiempo: -1, confianza: -1 }, flags: ['postergar_pedido', 'paralelo_ok'], cartera: { paralelo: 'Octubre completo, miércoles' },
          responde: 'Patricia: con estos plazos no llegamos a probar bien. ¿Podemos evaluar postergar la salida en vivo a diciembre?',
          out: 'Patricia lo consulta en el comité. A las doce y media vuelve: «La licencia vence a fin de mes y renovarla cuesta lo de un año. Hacemos el paralelo igual, con estos plazos».',
          pro: { ok: 'Pones el riesgo sobre la mesa.', risk: 'Postergar no siempre es posible: hay contratos, licencias y presupuestos detrás.' },
          kusi: ['sorpresa', 'Plan B descartado. ¡A probar igual!'] } },
    ],
    rules: [[BP, 'Una prueba en paralelo completa es la única forma de encontrar reglas que nadie recuerda.']],
    mirada: {
      ve: 'El consultor tiene razón en algo: el sistema funciona en otras empresas. Lo que no está probado es la configuración de esta empresa. Por eso, quien responde por el pago no delega la validación.',
      visual: { tipo: 'balanza', a: { t: '20 boletas al azar', items: ['Tres días ganados', 'Consultor contento'] }, b: { t: 'Octubre completo', items: ['1,100 casos comparados', 'Reglas escondidas a la luz', 'Firma con evidencia'] } },
    },
  },
  {
    id: 'm4', t: '13:40', ch: 'documento', who: null, titulo: 'Los datos maestros', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Almuerzas un pan con chicharrón frente al Excel del maestro: 1,100 filas, 46 columnas y una pestaña llamada «NO TOCAR». Sistemas carga los datos el jueves.</p><p>Esta tarde alcanza para <mark class="clave">tres revisiones</mark>. Las demás, después de la salida en vivo.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres revisiones que haces esta tarde.', boton: 'Revisar estas', resumen: 'Revisaste',
    cols: ['Revisión', 'Lo que sabes'],
    rows: [
      { id: 'dni', cells: ['DNI y carnés de extranjería duplicados o incompletos', '14 filas con el mismo número, 9 sin dígito'] },
      { id: 'cta', cells: ['Cuentas sueldo contra el último archivo del banco', 'El banco rechazó 23 abonos en octubre'] },
      { id: 'fecha', cells: ['Fechas de ingreso contra los contratos', 'Definen CTS, vacaciones y gratificaciones'] },
      { id: 'dir', cells: ['Direcciones y distritos', 'Muchos dicen solo «Callao»'] },
      { id: 'epp', cells: ['Tallas de botas y chalecos', 'Seguridad las pidió para el lunes'] },
      { id: 'cel', cells: ['Celulares para el grupo de WhatsApp de boletas', 'Mili quiere avisar a todos por ahí'] },
    ],
    score: { dni: 3, cta: 3, fecha: 3, dir: 0, epp: -2, cel: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: picks.includes('dni') ? 2 : -1, tiempo: -1 },
        flags: [q === 'buena' ? 'datos_clave' : 'datos_flojos'], cartera: { datos: q === 'buena' ? 'DNI, cuentas y fechas revisados' : 'Revisión parcial del maestro' },
        out: q === 'buena' ? 'A las cinco tienes 14 DNI duplicados resueltos, 23 cuentas por confirmar y 6 fechas de ingreso que no cuadran con el contrato. Seis personas a las que el sistema viejo les contaba menos tiempo de servicios.' : 'Avanzas, pero lo que más mueve el pago sigue sin revisar.',
        pro: { ok: 'Primero lo que cambia cuánto y a quién se paga.', risk: 'Un DNI duplicado bloquea el alta; una cuenta mala, el abono; una fecha mala, la CTS.', info: 'Las tallas de botas son importantes, pero no son tu revisión.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Seis fechas mal! Eso era plata.' : '¿Qué revisión mueve el pago?'],
      };
    },
    mirada: {
      ve: 'El maestro de trabajadores es la base de todo cálculo. Las columnas que importan son pocas: identidad, cuenta, sistema de pensiones y fechas. Limpiarlas antes de migrar evita trasladar al sistema nuevo los errores del viejo.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Impacto en el pago', cuadrantes: ['Hazlo ya', 'Planifícalo', 'Si sobra tiempo', 'No es tuyo'], items: [['DNI', .3, .9], ['Cuentas', .5, .9], ['Fechas', .6, .85], ['Direcciones', .6, .2], ['Tallas', .3, .05], ['Celulares', .2, .3]] },
    },
  },
  {
    id: 'm5', t: '15:15', ch: 'whatsapp', who: null, titulo: 'El Excel «FINAL_v3_ahora_si»', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'personas', 'calidad'],
    body: () => `<p>Mili te manda por WhatsApp el archivo «maestro_FINAL_v3_ahora_si.xlsx», con DNI, cuentas y sueldos de toda la empresa. Mili tiene 23 años, estudia contabilidad de noche en un instituto de la Colonial y es rapidísima. <mark class="clave">Demasiado rápida, a veces.</mark></p>`,
    type: 'compose', enviaA: 'mili', para: 'Para: Mili Sotelo · Asistente de Planillas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'canal', t: 'Sobre el canal', ops: [
        { id: 'c1', t: 'Mili, gracias. Súbelo a la carpeta de Planillas y bórralo de este chat, porfa: tiene DNI, cuentas y sueldos.', ok: true, por: 'Le dices qué hacer y por qué.' },
        { id: 'c2', t: 'Mili, ¿estás loca? Eso no se manda por aquí.', ok: false, por: 'Tiene razón en el fondo, pero humilla a quien recién conoces.' },
      ] },
      { id: 'version', t: 'Sobre las versiones', ops: [
        { id: 'v1', t: 'Dejemos un solo archivo maestro y una pestaña de cambios: quién cambió qué y por qué.', ok: true, por: 'Trazabilidad para la migración.' },
        { id: 'v2', t: 'Ponle «FINAL_v4» para saber que es el último.', ok: false, por: 'El problema no es el nombre: es no saber qué cambió.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'k1', t: 'Mañana te enseño cómo vamos a validar los conceptos. Tu ojo me va a servir.', ok: true, por: 'La incluyes en lo que viene.' },
        { id: 'k2', t: 'Desde ahora el maestro lo veo solo yo.', ok: null, por: 'Protege los datos, pero te quedas sin ayuda en la semana más dura.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'v1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.canal === 'c2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { cumplimiento: sel.canal === 'c1' ? 4 : 1, personas: q === 'buena' ? 3 : q === 'riesgosa' ? -3 : 0, calidad: sel.version === 'v1' ? 3 : 0 },
        flags: q === 'buena' ? ['mili_ordenada'] : [], cartera: { datos: sel.version === 'v1' ? 'Un solo maestro con registro de cambios' : 'Maestro en varias versiones' },
        out: q === 'buena' ? 'Mili sube el archivo, borra el chat y arma la pestaña de cambios en diez minutos. Te manda un sticker de un gato saludando.' : q === 'riesgosa' ? 'Mili deja el chat en visto. El resto de la tarde te habla con monosílabos.' : 'Mili corrige el canal. Lo demás queda a medias.',
        pro: { ok: 'Corriges el hábito sin cortar la relación.', risk: 'Un archivo con datos de 1,100 personas en un chat personal es una filtración esperando ocurrir.', info: 'Un registro de cambios te salvará cuando alguien pregunte «¿quién cambió mi cuenta?».' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Datos protegidos y equipo contento. ¡Bacán!' : 'El cómo también importa.'],
      };
    },
    rules: [[LEY, 'Los datos personales del personal se tratan por canales controlados y con medidas de seguridad (Ley 29733).']],
    mirada: {
      ve: 'El riesgo de los datos en planillas casi nunca es un hacker: es un Excel que viaja por WhatsApp. Corregirlo con respeto y con un método es lo que convierte un mal hábito en un proceso.',
      visual: { tipo: 'cambio', titulo: 'Del chat al control', pares: [['Excel por WhatsApp', 'Carpeta con permisos'], ['FINAL_v3_ahora_si', 'Un solo maestro'], ['Nadie sabe qué cambió', 'Pestaña de cambios']] },
    },
  },
  {
    id: 'm6', t: '17:10', ch: 'presencial', who: null, titulo: 'Teodoro llega sin cita', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Puerta de la oficina de Compensaciones', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>Un señor con chaleco naranja y casco en la mano toca la puerta. Es Teodoro Quispe, montacarguista desde hace 22 años y secretario general del sindicato. Nació en Huancavelica y habla despacio, eligiendo cada palabra.</p><p>«Señorita, dicen que con el sistema nuevo nos van a bajar el sueldo. Y otra cosa: <mark class="clave">los compañeros dicen que la CTS de noviembre salió baja</mark>. ¿Usted sabe algo?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle que el cambio de sistema no cambia sueldos, pedirle tres casos concretos de la CTS y comprometerte a responderle el viernes.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3, calidad: 2 }, flags: ['teodoro_escuchado'], cartera: { consultas: 'CTS baja: 3 casos de Teodoro, respuesta el viernes' },
          out: 'Teodoro saca un papel doblado de su chaleco con tres nombres, tres DNI y una nota: «todos operarios, todos con bono». Lo guardas en tu agenda.',
          pro: { ok: 'Le das una respuesta clara sobre el sistema y conviertes un rumor en casos que se pueden revisar.', risk: 'Te comprometiste a una fecha: ahora tienes que cumplirla.', info: 'Un reclamo con nombres y DNI es un dato, no una queja.' },
          kusi: ['curioso', '«Todos con bono»… guarda ese papel.'] } },
      { id: 'b', label: 'Decirle que se quede tranquilo: el sistema nuevo calcula igual y la CTS ya se depositó bien.',
        res: { q: 'riesgosa', fx: { personas: -2, confianza: -3 }, flags: ['teodoro_despachado'],
          out: 'Teodoro asiente sin creerte y se va. Afirmaste algo que todavía no has revisado.',
          pro: { ok: 'Lo calmas por hoy.', risk: 'Diste por buena una CTS que no revisaste, a quien representa a 400 operarios.' },
          kusi: ['preocupado', '¿Cómo sabes que se depositó bien?'] } },
      { id: 'c', label: 'Decirle que eso lo ve Patricia y que le pida una cita.',
        res: { q: 'aceptable', fx: { personas: -1, confianza: -1 },
          out: 'Teodoro se va a buscar a Patricia, que está en comité hasta las siete. La pregunta queda en el aire.',
          pro: { ok: 'Respetas la jerarquía.', risk: 'Pierdes la oportunidad de recoger los casos y le das a entender que el cálculo no es asunto tuyo.' },
          kusi: ['pensando', 'El cálculo es tuyo, ¿no?'] } },
    ],
    rules: [[BP, 'Ante un reclamo de pago, pide casos concretos y da una fecha de respuesta.']],
    mirada: {
      ve: 'Los rumores sobre el sueldo crecen rápido en un cambio de sistema. El dirigente que pregunta no es un enemigo: es una alerta temprana. A veces, detrás del rumor hay un error real.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le dices a Teodoro', txt: 'El cambio de sistema no cambia sueldos. Sobre la CTS, deme tres casos con nombre y DNI. Los reviso y le respondo el viernes.' },
    },
  },
  {
    id: 'm7', t: '18:30', ch: 'correo', who: 'patricia-g', titulo: 'Tu primer reporte', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Patricia Gómez', to: 'Analista de Planillas', asunto: '¿Cómo te fue?' },
    body: (n, F) => `<p>Antes de irte, Patricia te escribe: «Cuéntame en tres líneas cómo ves el proyecto».</p><p>Afuera ya cambió el turno: entran los operarios de la noche${F.has('teodoro_escuchado') ? ' y tú tienes en la agenda el papel doblado de Teodoro' : ''}. <mark class="clave">¿Qué le cuentas?</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Plan, datos y un riesgo concreto.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { 'patricia-g': 1 },
          responde: 'Patricia: plan de migración ordenado en 7 pasos. Revisé DNI, cuentas y fechas del maestro. Riesgo: el sistema viejo tiene reglas que nadie documentó, y el sindicato reporta que la CTS salió baja en operarios con bono. Lo reviso esta semana.',
          out: 'Patricia responde en dos minutos: «Eso del bono, míralo con lupa. Mañana empiezas por los conceptos».', kusi: ['celebra', 'Riesgo nombrado el primer día.'] } },
      { id: 'b', label: 'Que todo está en orden y que llegan a tiempo.',
        res: { q: 'aceptable', fx: { confianza: 0 },
          responde: 'Patricia: todo en orden, llegamos 💪',
          out: 'Patricia responde con un pulgar. Mañana no sabrá por dónde empezar a preocuparse.', kusi: ['pensando', '¿Y lo que te contó Teodoro?'] } },
    ],
    mirada: { ve: 'Un buen reporte del primer día no dice «todo bien»: dice qué hiciste, qué viste y qué te preocupa. Así tu jefa decide con información y no con optimismo.' },
  },
];
