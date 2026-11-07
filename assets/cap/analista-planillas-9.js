// Analista de Planillas · Capítulo 9 · «Salida en vivo» · Semana 2, jueves.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas (ya verificadas en capítulos anteriores):
// - D.S. 001-97-TR (CTS): depósitos en la cuenta CTS de cada trabajador; el reintegro se deposita con sus intereses.
//   https://lpderecho.pe/tuo-ley-de-compensacion-por-tiempo-de-servicios-ds-1-97-tr
// - Ley 29733 (datos personales), ya citada en el capítulo 1: el archivo del banco viaja por el canal seguro de la empresa.
// Este capítulo no cita normas nuevas: trata del archivo de pago, la contingencia y el acta de salida en vivo.

export const CAP = {
  n: 9, titulo: 'Salida en vivo', dia: 'Semana 2, jueves', foto: 'assets/foto2/celebra-tablet.webp',
  lugar: 'Andes Logística · Oficina de Compensaciones, Callao',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves. La planilla de noviembre está aprobada en Nómina360. Hoy sale el archivo de pago al banco: si llega antes de las cuatro, mañana 1,100 personas ven su sueldo en el celular a primera hora. Si no, cobran el lunes.', boton: 'Abrir el archivo del banco',
  kusi: 'Salir en vivo es soltar el timón… con las dos manos cerca. ¡Tú puedes!',
  lead: 'Firmaste el acta de salida en vivo, validaste el archivo del banco, resolviste el caso de Oriana, ordenaste la tarde de los reintegros y confirmaste que el pago estaba en camino.',
  reflexion: '¿Qué te dio más tranquilidad hoy: el sistema nuevo o los controles que pusiste alrededor de él?',
  siguiente: { n: 10, titulo: 'Día de pago', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'banco', p: 'Archivo de pago al banco', j: 'Tú · Tesorería', d: 0, e: 'Corte del banco: 4:00 p. m.' },
  { id: 'acta', p: 'Acta de salida en vivo', j: 'Patricia · Diego · Tú', d: 0, e: 'Por firmar' },
  { id: 'bono', p: 'Reintegro del bono', j: 'Rosa · Tesorería', d: 0, e: 'Según el calendario' },
  { id: 'sunafil', p: 'Comparecencia ante SUNAFIL', j: 'Inspector Cuba', d: 0, e: 'Lunes 9:00' },
  { id: 'boletas', p: 'Boletas de noviembre', j: 'Tú · Mili', d: 0, e: 'Se envían mañana' },
];

export const FUTURO = {
  acta_firme: ['El acta de salida en vivo dice qué se probó, qué riesgos quedan y qué hacer si algo falla.', 'El lunes podrás mostrarla si alguien pregunta.'],
  acta_floja: ['El acta de salida en vivo es solo una hoja con firmas.', 'Si algo falla mañana, nadie sabrá qué hacer.'],
  archivo_validado: ['El archivo del banco salió validado contra la planilla aprobada.', 'Mañana casi nadie tendrá un rechazo.'],
  archivo_con_errores: ['El archivo del banco salió con errores.', 'Mañana habrá rechazos y reclamos.'],
  oriana_resuelta: ['Oriana cobrará mañana por orden de pago en ventanilla, con su propio documento.', 'Te escribirá cuando tenga la plata en la mano.'],
  oriana_tercero: ['Le pagaste a Oriana en la cuenta de su pareja.', 'Si algo pasa entre ellos, la empresa no podrá probar que le pagó a ella.'],
  oriana_espera: ['Oriana cobrará cuando actualice sus datos en el banco.', 'Este mes pagará tarde el alquiler.'],
  reintegros_en_marcha: ['Los depósitos del reintegro de CTS y el pago a los cesados salieron hoy.', 'El lunes tendrás constancias para el inspector.'],
  reintegros_tarde: ['Los reintegros no salieron hoy.', 'El lunes solo tendrás el calendario.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  rosa: { n: 'Rosa Chumpitaz', sub: 'Jefa de Tesorería', who: 'tesoreria' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  oriana: { n: 'Oriana Mendoza', sub: 'Operaria de picking · turno día', c: '#B83280' },
  teodoro: { n: 'Teodoro Quispe', sub: 'Secretario general del sindicato', c: '#975A16' },
};

export const WSP = [
  { chat: 'diego', t: '07:40', de: 'Diego', txt: 'Buenos días 🚀 Nómina360 generó el archivo del banco. 1,100 registros. ¡Hoy es el día!' },
  { chat: 'diego', t: '07:41', de: 'Diego', txt: 'Hice el ajuste de redondeo anoche, el total cambió 3 soles, nada grave 🙈', si: 'planilla_abierta' },
  { chat: 'oriana', t: '10:50', de: 'Oriana', txt: 'Buenos días, señorita. El banco me dice que mi cuenta está bloqueada. Mañana tengo que pagar el cuarto 😟' },
  { chat: 'rosa', t: '15:20', de: 'Rosa', txt: 'Archivo aceptado por el banco. 1,097 abonos programados para mañana 6 a. m. Tres por ventanilla.', si: 'archivo_validado' },
  { chat: 'rosa', t: '15:58', de: 'Rosa', txt: 'El banco aceptó el archivo con 14 rechazos. Revisa.', si: 'archivo_con_errores' },
  { chat: 'teodoro', t: '17:45', de: 'Teodoro', txt: 'Los compañeros cesados me llaman: dicen que les llegó un depósito. Algunos no lo creen 😊', si: 'reintegros_en_marcha' },
];

export const CORREOS = [
  { t: '08:10', de: 'Patricia Gómez', para: 'Analista de Planillas; Diego Arana', asunto: 'Acta de salida en vivo', html: '<p>Antes de mandar el archivo al banco, quiero firmar el acta de salida en vivo. Tú la redactas, Diego la revisa y yo firmo. Que diga la verdad, incluido lo que no salió perfecto.</p><p>Patricia</p>' },
];

export const QUIZ = [
  { q: '¿Qué debe tener un acta de salida en vivo?', ops: ['Solo las firmas', 'Qué se probó, qué diferencias quedaron, qué riesgos se aceptan y el plan si algo falla', 'Una felicitación al consultor', 'El logo de la empresa'], ok: 1, por: 'El acta registra con qué evidencia se decidió salir en vivo y qué hacer si algo falla.' },
  { q: 'Antes de enviar el archivo al banco, lo más importante es…', ops: ['Mandarlo rápido', 'Comparar su total y su número de registros con la planilla aprobada', 'Cambiarle el nombre', 'Imprimirlo'], ok: 1, por: 'El archivo del banco debe ser exactamente la planilla aprobada: mismos registros, mismo total.' },
  { q: 'Una trabajadora pide que su sueldo se deposite en la cuenta de su pareja. ¿Qué haces?', ops: ['Lo depositas, ella lo pidió', 'Buscas que cobre ella misma, por ejemplo con una orden de pago en ventanilla con su documento', 'Le pagas en efectivo sin recibo', 'No le pagas'], ok: 1, por: 'La remuneración se paga a la persona trabajadora: así la empresa puede probar el pago y ella mantiene el control de su dinero.' },
  { q: '¿Por qué conviene sacar hoy los depósitos del reintegro de CTS?', ops: ['Por nada', 'Porque el lunes el inspector querrá ver pagos hechos, no promesas', 'Porque el banco cierra en diciembre', 'Para cansar a Tesorería'], ok: 1, por: 'Una regularización con constancias de pago pesa mucho más que un calendario.' },
  { q: 'El archivo trae una persona cesada en octubre con sueldo completo de noviembre. Eso es…', ops: ['Normal', 'Un error: se le pagaría un mes que no trabajó', 'Un reintegro', 'Un bono'], ok: 1, por: 'Los ceses del mes deben estar cargados antes de generar el archivo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'v1', t: '08:20', ch: 'documento', who: null, titulo: 'El acta de salida en vivo', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de vidrio', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Patricia quiere firmar un acta antes de que el archivo salga al banco. «Que diga la verdad, incluido lo que no salió perfecto.» ${F.has('cuadre_forzado') ? 'Te acuerdas del concepto de cuadre de la semana pasada.' : 'Tienes tu cuadro de diferencias y tu lista de control.'} <mark class="clave">Una página que alguien podría leer dentro de un año.</mark></p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte del acta.', boton: 'Guardar el acta',
    bloques: [
      { id: 'evid', t: 'Evidencia', n: 2, ops: [
        { id: 'e1', t: 'Paralelo de octubre: diferencias explicadas y corregidas en su origen.', ok: true },
        { id: 'e2', t: 'Cierre de noviembre: 47 variaciones revisadas y 2 errores corregidos.', ok: true },
        { id: 'e3', t: 'El sistema está probado en más de 200 empresas.', ok: false, por: 'Es publicidad, no evidencia de esta empresa.' },
      ] },
      { id: 'ries', t: 'Riesgos aceptados', n: 2, ops: [
        { id: 'r1', t: 'El cálculo masivo se cuelga: se calcula por partes hasta que el proveedor amplíe la memoria.', ok: true },
        { id: 'r2', t: 'Reintegro del bono de productividad en curso, según el calendario de Tesorería.', ok: true },
        { id: 'r3', t: 'Ninguno.', ok: false, por: 'Siempre hay riesgos. Escribir «ninguno» es lo menos creíble.' },
      ] },
      { id: 'cont', t: 'Si algo falla', n: 2, ops: [
        { id: 'c1', t: 'Abonos rechazados: orden de pago en ventanilla el mismo día.', ok: true },
        { id: 'c2', t: 'Reclamos de boleta: mesa de atención el viernes y el lunes, con respuesta en 48 horas.', ok: true },
        { id: 'c3', t: 'Volver al sistema viejo.', ok: false, por: 'Su licencia vence y calcula con los errores corregidos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { 'patricia-g': q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'acta_firme' : 'acta_floja'], cartera: { acta: q === 'buena' ? 'Acta firmada: evidencia, riesgos y contingencia' : 'Acta con huecos' },
        out: q === 'buena' ? 'Patricia firma. Diego también, después de leer dos veces la parte de la memoria: «Es justo». Lo escaneas y lo subes a la carpeta del proyecto.' : 'Patricia firma, pero comenta: «Si mañana algo falla, esta hoja no nos dice qué hacer».',
        pro: { ok: 'El acta registra con qué evidencia se decidió y qué hacer si algo falla.', risk: 'Un acta sin riesgos ni contingencia es una foto de grupo con firmas.', info: 'Guárdala con el cuadro de diferencias: van juntos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Acta de verdad!' : '¿Y si algo falla?'],
      };
    },
    mirada: {
      ve: 'El acta de salida en vivo es el documento donde una organización dice: «decidimos confiar en este sistema, por estas razones, sabiendo estos riesgos». Su valor aparece el día en que algo falla.',
      visual: { tipo: 'flujo', titulo: 'Salir en vivo', pasos: ['Evidencia', 'Riesgos', 'Contingencia', 'Firma', 'Banco'], aqui: 3 },
    },
  },
  {
    id: 'v2', t: '09:40', ch: 'sistema', who: null, titulo: 'El archivo del banco', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Abres el archivo de pago que generó Nómina360 y lo comparas con la planilla aprobada. ${F.has('carga_pendiente') ? 'Los errores de la carga del viernes asoman aquí.' : 'La carga del viernes quedó limpia, pero igual miras.'} <mark class="clave">Cada línea es una persona que mañana mira su celular.</mark></p>`,
    type: 'flag', prompt: 'Marca lo que no puede salir así al banco.',
    doc: { t: 'Archivo de abonos · planilla de noviembre', sub: 'Nómina360 · 1,100 registros · fecha de abono: viernes' },
    lines: [
      { id: 'tot', t: 'Total del archivo: igual al neto de la planilla aprobada.' },
      { id: 'reg', t: 'Registros: 1,100, igual a la planilla.' },
      { id: 'ces', t: 'Un operario cesado el 31 de octubre aparece con sueldo completo de noviembre.', bad: BP, why: 'Su cese no se cargó en Nómina360: se le pagaría un mes que no trabajó.' },
      { id: 'dup', t: 'Una trabajadora aparece dos veces, con su DNI y con un carné de extranjería antiguo.', bad: BP, why: 'Pago duplicado: la misma persona con dos documentos.' },
      { id: 'oriana', t: 'Oriana Mendoza: cuenta bloqueada según el último rechazo del banco.', duda: 'Hay que buscarle otra forma de pago antes de mañana.' },
      { id: 'canal', t: 'Envío: por la banca por internet de Tesorería, con doble firma.' },
    ],
    res: ({ hitsBp }) => {
      const q = hitsBp >= 2 ? 'buena' : hitsBp === 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, cumplimiento: q === 'buena' ? 2 : -1 },
        flags: [q === 'riesgosa' ? 'archivo_con_errores' : 'archivo_validado'], cartera: { banco: q === 'buena' ? 'Archivo validado: 2 errores corregidos' : q === 'aceptable' ? 'Archivo con un error corregido' : 'Archivo sin validar' },
        out: q === 'buena' ? 'Sacas al cesado, unes a la trabajadora duplicada y recalculas el archivo. Ahora son 1,098 registros y el total coincide con la planilla corregida. Lo envías a Tesorería a las 11:30.' : 'Corriges algo, pero una línea que no debía salir sale.',
        pro: { ok: 'Validas el archivo contra la planilla, no contra la confianza en el sistema.', risk: 'Un pago a un cesado o un duplicado es plata que hay que pedir de vuelta, con una conversación incómoda.', info: 'Total y número de registros: los dos controles más simples y más útiles.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Archivo limpio!' : 'Algo se va al banco mal…'],
      };
    },
    mirada: {
      ve: 'El archivo del banco es el último punto en que un error todavía es barato. Después del abono, cada error se convierte en una llamada, un reclamo o un pedido de devolución.',
      visual: { tipo: 'embudo', titulo: 'Del cálculo al abono', niveles: [['Boletas aprobadas', 1100], ['Registros válidos', 1098], ['Abonos en cuenta', 1097], ['Por ventanilla', 1]] },
    },
  },
  {
    id: 'v3', t: '11:00', ch: 'llamada', who: null, titulo: 'La cuenta de Oriana', banner: 'assets/foto/llamada.webp', show: ['personas', 'cumplimiento', 'etica'],
    body: () => `<p>Llamas a Oriana Mendoza, operaria de picking, venezolana, cinco años en Lima. Su carné de extranjería se renovó, pero el banco todavía tiene el antiguo y le bloqueó la cuenta. Mañana vence el alquiler de su cuarto en Bellavista.</p><p>«Señorita, ¿me lo puede depositar en la cuenta de mi pareja? <mark class="clave">Él sí tiene cuenta.</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que el pago tiene que ser a ella, y emitir una orden de pago para que cobre mañana en ventanilla con su carné nuevo; mientras, actualizan juntas sus datos en el banco.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 4, tiempo: -2 }, flags: ['oriana_resuelta'],
          envia: [['oriana', 'Oriana, mañana desde las 9 puedes cobrar tu sueldo en cualquier agencia del banco con tu carné de extranjería nuevo: va por orden de pago a tu nombre. Te mando el código por aquí a las 8. El lunes te acompaño a actualizar tus datos para que tu cuenta se desbloquee.']],
          out: 'Oriana suspira: «¿De verdad mañana?». Sí. Le dices que el lunes la acompañas al banco del centro comercial de la avenida Colonial, a la hora del almuerzo.',
          pro: { ok: 'Cobra a tiempo, a su nombre y con su documento.', risk: 'Te toma una gestión extra con Tesorería.', info: 'Pagar a la propia trabajadora protege a la empresa y le da a ella el control de su dinero.' },
          kusi: ['feliz', 'A tiempo y a su nombre.'] } },
      { id: 'b', label: 'Depositar en la cuenta de su pareja, con una autorización firmada por ella.',
        res: { q: 'riesgosa', fx: { personas: 1, cumplimiento: -4, etica: -1 }, flags: ['oriana_tercero'],
          out: 'Oriana firma la autorización en una hoja de cuaderno. El dinero llega mañana a la cuenta de su pareja.',
          pro: { ok: 'Resuelves rápido.', risk: 'El sueldo de una persona a la cuenta de otra: si mañana hay un problema entre ellos, la empresa no puede probar que le pagó a ella.' },
          kusi: ['preocupado', '¿Y si no le llega a ella?'] } },
      { id: 'c', label: 'Pedirle que regularice sus datos con el banco y pagarle cuando la cuenta esté activa.',
        res: { q: 'aceptable', fx: { personas: -3, cumplimiento: 1 }, flags: ['oriana_espera'],
          out: 'Oriana va al banco el sábado. La cuenta se desbloquea el martes. Le pide plazo a su casera, que no se lo da con buena cara.',
          pro: { ok: 'Sigues el procedimiento.', risk: 'Un problema del banco termina siendo el problema de la trabajadora, y tú tenías una alternativa.' },
          kusi: ['pensando', '¿No había otra forma para mañana?'] } },
    ],
    rules: [[BP, 'La remuneración se paga a la persona trabajadora, a su nombre.']],
    mirada: {
      ve: 'Cuando una persona migrante tiene un problema con su documento en el banco, la salida fácil es pagar a otra persona. La salida correcta es buscar que cobre ella, a tiempo, con su propio documento.',
      visual: { tipo: 'balanza', a: { t: 'Cuenta de la pareja', items: ['Rápido', 'Sin trámite'] }, b: { t: 'Orden de pago a su nombre', items: ['Cobra mañana ella misma', 'Prueba de pago para la empresa', 'Su dinero, su control'] } },
    },
  },
  {
    id: 'v4', t: '13:30', ch: 'documento', who: null, titulo: 'La tarde de los reintegros', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Almuerzas un ají de gallina mirando el reloj. El corte del banco es a las cuatro. ${F.has('calendario_justo') ? 'Según el calendario que negociaste, hoy deben salir el pago a los cesados y los depósitos del reintegro de CTS.' : 'El calendario de Tesorería no pone el reintegro esta semana, pero algo puedes adelantar.'} Tienes tiempo para <mark class="clave">tres cosas</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que haces antes de las cuatro.', boton: 'Hacer estas', resumen: 'Hiciste',
    cols: ['Tarea', 'Lo que sabes'],
    rows: [
      { id: 'cts', cells: ['Archivos de depósito del reintegro de CTS para 23 entidades', 'El inspector quiere ver pagos el lunes'] },
      { id: 'ces', cells: ['Pago del reintegro a los 61 cesados', 'Mili ubicó a 54; 7 sin cuenta vigente'] },
      { id: 'ori', cells: ['Orden de pago de Oriana', 'Tesorería la necesita antes de las 4'] },
      { id: 'bol', cells: ['Programar el envío de boletas para mañana', 'Se mandan a primera hora'] },
      { id: 'ppt', cells: ['Presentación del proyecto para el directorio', 'Es para el próximo mes'] },
      { id: 'cafe', cells: ['Organizar el brindis de salida en vivo', 'Diego trajo un panetón'] },
    ],
    score: { cts: 3, ces: 3, ori: 2, bol: 1, ppt: -2, cafe: -1 },
    res: (picks, sc) => {
      const ambos = picks.includes('cts') && picks.includes('ces');
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: ambos ? 5 : -2, tiempo: q === 'buena' ? 2 : -1, personas: picks.includes('ori') ? 2 : -1 },
        flags: [ambos ? 'reintegros_en_marcha' : 'reintegros_tarde'], cartera: { bono: ambos ? 'CTS: 23 archivos enviados · 54 cesados pagados · 7 por ubicar' : 'Reintegros sin salir hoy' },
        out: ambos ? 'A las 3:52 Rosa envía los 23 archivos de CTS y el pago a 54 cesados. Para los 7 sin cuenta, Mili prepara cartas con orden de pago.' : 'Avanzas, pero los reintegros quedan para la próxima semana. El lunes solo tendrás un calendario.',
        pro: { ok: 'Cumples el calendario y llegas al lunes con constancias.', risk: 'Lo que no sale hoy, sale después de la comparecencia.', info: 'Si no eliges la orden de pago de Oriana, pídele a Tesorería que la saque igual: es un minuto.' },
        kusi: [ambos ? 'celebra' : 'pensando', ambos ? '¡Los cesados ya están cobrando!' : 'El lunes te preguntarán qué se pagó.'],
      };
    },
    mirada: {
      ve: 'Una regularización se vuelve real cuando el dinero llega. Los cesados, que ya no ven a nadie de la empresa, suelen ser los últimos de la fila. Ponerlos primero dice mucho de un área de planillas.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Urgencia', cuadrantes: ['Ya', 'Hoy', 'Mañana', 'No'], items: [['Reintegro CTS', .7, .9], ['Cesados', .5, .9], ['Orden de Oriana', .1, .8], ['Boletas', .3, .5], ['Presentación', .6, .1], ['Brindis', .2, .2]] },
    },
  },
  {
    id: 'v5', t: '16:10', ch: 'whatsapp', who: 'tesoreria', titulo: '«Archivo enviado»', banner: 'assets/foto2/celebra-laptop.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>${F.has('archivo_validado') ? 'El banco aceptó el archivo de la planilla.' : 'El banco aceptó el archivo… con rechazos.'} Rosa te pide una confirmación por escrito antes de irse: <mark class="clave">qué se pagará mañana y qué no</mark>.</p>`,
    type: 'compose', enviaA: 'rosa', para: 'Para: Rosa Chumpitaz · Jefa de Tesorería', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Lo que sale', ops: [
        { id: 'q1', t: 'Rosa, confirmo: 1,097 abonos mañana a las 6 a. m. por el total de la planilla aprobada.', ok: true, por: 'Número y total.' },
        { id: 'q2', t: 'Rosa, ya está todo, gracias 🙌', ok: false, por: 'Rosa necesita números.' },
      ] },
      { id: 'exc', t: 'Las excepciones', ops: [
        { id: 'e1', t: 'Una orden de pago en ventanilla (Oriana Mendoza) y siete cartas para cesados sin cuenta.', ok: true, por: 'Las excepciones con nombre.' },
        { id: 'e2', t: 'Hay algunos casos especiales que vemos después.', ok: false, por: '¿Cuáles? ¿Cuántos?' },
      ] },
      { id: 'grac', t: 'Cierre', ops: [
        { id: 'g1', t: 'Gracias por sacar hoy los reintegros. El lunes los llevo a SUNAFIL con tus constancias.', ok: true, por: 'Reconoces su parte.' },
        { id: 'g2', t: 'Cualquier cosa me escribes.', ok: null, por: 'Correcto, pero frío.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'e1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 2 : -1 }, rel: { tesoreria: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Rosa responde con un pulgar y, dos minutos después: «Buen trabajo esta semana». Mili, que lee por encima de tu hombro, grita: «¡Rosa dijo buen trabajo!».' : 'Rosa responde: «¿Cuántos son los casos especiales?».',
        pro: { ok: 'Número, total, excepciones con nombre y reconocimiento.', risk: '«Casos especiales» sin número son los que se olvidan.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Rosa dijo «buen trabajo»!' : 'Ponle número a todo.'],
      };
    },
    mirada: { ve: 'Al final de una salida en vivo, la confirmación escrita a Tesorería cierra el círculo: qué se paga, qué no y por qué. Es también un buen momento para reconocer a quien hizo posible lo difícil.' },
  },
  {
    id: 'v6', t: '17:40', ch: 'llamada', who: null, titulo: 'La última ronda', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Pasillo del almacén, cambio de turno', show: ['personas', 'confianza'],
    body: () => `<p>Antes de irte, haces tres llamadas cortas. Afuera, Diego corta su panetón en la mesa de la cafetería y el turno noche entra con chalecos naranjas.</p>`,
    type: 'calls',
    calls: [['Yesenia Vargas', 'Turno noche', 'Mi gente vio su boleta de prueba en el correo. Dicen que por fin el sueldo base está bien. ¿Mañana sale igual?'], ['Teodoro Quispe', 'Sindicato', 'Los cesados están llamando contentos. Pero algunos operarios activos preguntan cuándo les llega lo de la gratificación.'], ['Carmen Ñahui', 'Legal', 'Para el lunes trae las constancias de hoy, el cálculo persona por persona y el acta de salida en vivo. Llegamos a las 8:30.']],
    prompt: 'Teodoro pregunta por la gratificación. ¿Qué le respondes?',
    choices: [
      { id: 'a', label: 'Que el reintegro de las gratificaciones sale con la gratificación de diciembre, como dice el comunicado, y que el detalle irá en su boleta.',
        res: { q: 'buena', fx: { personas: 3, confianza: 3 },
          out: 'Teodoro: «Entonces en la primera quincena de diciembre. Lo anoto». Cuelga con un «sulpayki» que ya reconoces.',
          pro: { ok: 'Una fecha clara, coherente con lo que se comunicó.', info: 'Repetir exactamente lo que dice el comunicado evita versiones distintas.' },
          kusi: ['feliz', 'Misma fecha, mismo mensaje.'] } },
      { id: 'b', label: 'Que «pronto», que estás viendo con Tesorería.',
        res: { q: 'aceptable', fx: { personas: -1, confianza: -2 },
          out: 'Teodoro se queda callado. «Pronto» es la palabra que los operarios llevan dos años escuchando.',
          pro: { ok: 'No te comprometes de más.', risk: 'Ya había una fecha: no decirla genera desconfianza.' },
          kusi: ['pensando', 'Ya había fecha, ¿no?'] } },
    ],
    mirada: { ve: 'La víspera del pago, las conversaciones cortas con supervisores, sindicato y Legal son las que evitan sorpresas. Cada una confirma una pieza: que el cálculo se entiende, que la fecha se cumple y que la defensa está lista.' },
  },
];
