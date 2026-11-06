// Asistente de Planillas · Capítulo 1 · «Diciembre» · Semana 1, lunes.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - Ley 27735, art. 5: las gratificaciones se abonan en la primera quincena de julio y de diciembre; su reglamento
//   (D.S. 005-2002-TR) dice que ese plazo es indisponible para las partes.
//   https://lpderecho.pe/ley-gratificaciones-fiestas-patrias-navidad-ley-27735/
//   https://lpderecho.pe/reglamento-ley-gratificiaciones-fiestas-patrias-navidad-decreto-supremo-005-2002-tr/
//   https://cdn.www.gob.pe/uploads/document/file/5690429/5053106-informe-tecnico-482-2017-servir-gpgsc.pdf
// - EsSalud es un aporte a cargo del empleador; el trabajador aporta a un solo sistema de pensiones (ONP o AFP). Principios
//   generales; no se citan cifras.
// Empresas, personas y montos son ficticios.

export const CAP = {
  n: 1, titulo: 'Diciembre', dia: 'Semana 1, lunes', foto: 'assets/foto/oficina-abierta.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lima, primera semana de diciembre. La oficina central de Sabor del Perú está en el segundo piso, encima del local de Lince: a las ocho ya huele a caldo de gallina y a panetón recién abierto. Es tu primer día en Planillas.', boton: 'Subir a la oficina',
  kusi: 'Setecientas personas esperan su gratificación. ¡Y tú vas a ayudar a que llegue bien!',
  lead: 'Entendiste el calendario de diciembre, revisaste tu primera boleta con lupa, resolviste un pedido de adelanto y pediste a los locales que mandaran sus horas extra en un mismo formato.',
  reflexion: '¿Qué fecha de este calendario te daría más miedo que se te pase, y por qué?',
  siguiente: { n: 2, titulo: 'Las horas extra', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'grati', p: 'Gratificación de diciembre · 700 personas', j: 'Hugo · Planillas', d: 0, e: 'Límite: primera quincena' },
  { id: 'horas', p: 'Horas extra pendientes de 14 locales', j: 'Administradores', d: 0, e: 'Sin formato común' },
  { id: 'ceses', p: 'Cierre del local de Miraflores', j: 'Fiorella · Administración', d: 0, e: 'Contratos vencen el viernes' },
  { id: 'plame', p: 'PLAME de noviembre', j: 'Hugo · Contabilidad', d: 0, e: 'Según cronograma SUNAT' },
  { id: 'consultas', p: 'Consultas de trabajadores', j: 'Tú', d: 0, e: 'Bandeja abierta' },
];

export const FUTURO = {
  calendario_ok: ['Ordenaste bien el calendario de diciembre.', 'Sabrás qué va primero cuando todo llegue junto.'],
  boleta_ojo: ['Encontraste los errores graves de una boleta de prueba.', 'Hugo te dará boletas reales para revisar.'],
  adelanto_formal: ['El adelanto de Kevin quedó por escrito, con su firma.', 'Se descontará de la gratificación sin sorpresas. Capítulo 3.'],
  adelanto_informal: ['Le diste a Kevin un adelanto «de palabra» desde la caja del local.', 'Nadie sabrá cómo descontarlo. Capítulo 3.'],
  formato_unico: ['Pediste las horas extra en una plantilla única, con DNI y marcaciones.', 'Mañana el consolidado será más fácil.'],
  formato_libre: ['Pediste las horas extra «como puedan».', 'Mañana te llegarán fotos, audios y Excel distintos.'],
  wilder_cita: ['Le diste a Wilder una hora para revisar su boleta con datos.', 'Wilder confía un poco más en Planillas.'],
  wilder_esperando: ['Le dijiste a Wilder que «ya lo verías».', 'Wilder volverá a escribir, más molesto.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
};

export const WSP = [
  { chat: 'grupo', t: '07:55', de: 'Hugo', txt: 'Bienvenida 🙌 Sube nomás, estoy en la esquina de las tres pantallas. Trae casaca, que el aire acondicionado no perdona.' },
  { chat: 'admins', t: '08:30', de: 'Fiorella (Miraflores)', txt: 'Buenos días. ¿Alguien de Planillas me confirma qué pasa con mi gente el viernes? Están preguntando y no sé qué decirles 😟' },
  { chat: 'gaby', t: '12:38', de: 'Gaby', txt: '🎤 Audio · 1:12' },
  { chat: 'admins', t: '15:40', de: 'Ítalo (Surco)', txt: 'Ya, plantilla recibida. Mañana la mando antes de las 12 👍', si: 'formato_unico' },
  { chat: 'admins', t: '15:42', de: 'Ítalo (Surco)', txt: '¿Le puedo mandar foto del cuaderno de marcaciones? Es que el Excel no me abre en la tablet.', si: 'formato_libre' },
  { chat: 'wilder', t: '17:15', de: 'Wilder', txt: 'Señorita, buenas tardes. ¿Usted es la nueva de Planillas? Quiero saber por qué en noviembre cobré menos que mi compañero. Ya pregunté dos veces.' },
  { chat: 'wilder', t: '18:30', de: 'Wilder', txt: 'Ya. Mañana a las 3 la llamo. Gracias por responder, al menos.', si: 'wilder_cita' },
];

export const CORREOS = [
  { t: '08:05', de: 'Hugo Salazar', para: 'Asistente de Planillas', asunto: 'Diciembre en una hoja', html: '<p>Bienvenida. Te resumo diciembre:</p><p>1) Gratificación de Navidad para 700 personas: la ley dice primera quincena; nosotros queremos pagar el jueves de la próxima semana. 2) Horas extra de fin de noviembre que todavía no llegan de algunos locales. 3) El local de Miraflores cierra por remodelación: 18 contratos vencen este viernes. 4) La PLAME de noviembre, según el cronograma de SUNAT.</p><p>No te asustes. Vamos por partes.</p><p>Hugo</p>' },
  { t: '11:20', de: 'Gerencia de Operaciones', para: 'Planillas', asunto: 'Diciembre: más turnos', html: '<p>Estimados: por la campaña de Navidad y las cenas de empresa, los locales extenderán su horario hasta la medianoche los viernes y sábados. Coordinen con Planillas el registro de horas.</p><p>Operaciones</p>' },
];

export const QUIZ = [
  { q: '¿Hasta cuándo debe pagarse la gratificación de diciembre?', ops: ['Hasta el 31 de diciembre', 'En la primera quincena de diciembre', 'Cuando la empresa tenga caja', 'En enero, con la planilla'], ok: 1, por: 'La Ley 27735 dice que se abona en la primera quincena de diciembre, y el reglamento añade que ese plazo no se puede cambiar por acuerdo.' },
  { q: 'Una boleta descuenta ONP y AFP al mismo tiempo. ¿Qué pasa?', ops: ['Nada, es normal', 'Es un error: el trabajador aporta a un solo sistema', 'Es legal si el trabajador firma', 'Solo pasa en diciembre'], ok: 1, por: 'El trabajador está afiliado a un sistema de pensiones: el público (ONP) o el privado (AFP), no a los dos.' },
  { q: 'El aporte a EsSalud de un trabajador en planilla…', ops: ['Se descuenta de su sueldo', 'Lo paga el empleador', 'Lo paga cada quien si quiere', 'Se paga solo en julio'], ok: 1, por: 'EsSalud es un aporte a cargo del empleador; no se descuenta de la boleta del trabajador.' },
  { q: 'Un administrador pide darle un adelanto a un mozo «de palabra», con plata de caja. Lo mejor es…', ops: ['Darlo y anotarlo en un papelito', 'Tramitarlo como adelanto formal, con autorización escrita del trabajador', 'Negarlo siempre', 'Que lo pague el administrador'], ok: 1, por: 'Un adelanto por escrito permite descontarlo después con claridad y sin conflictos.' },
  { q: '¿Por qué pedir las horas extra en una plantilla única?', ops: ['Para que se vea ordenado', 'Para poder cruzarlas con las marcaciones y no digitar 14 formatos distintos', 'Porque lo pide SUNAT', 'Para pagar menos'], ok: 1, por: 'Un formato común con DNI, fecha y horas reduce errores de digitación y permite verificar.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '08:15', ch: 'presencial', who: 'hugo', titulo: 'Las tres pantallas', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de Planillas', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Hugo tiene tres pantallas: en una, el sistema de planillas; en otra, un Excel con pestañas que se llaman «grati final», «grati final 2» y «NO TOCAR»; en la tercera, el WhatsApp. En la pared, un calendario de diciembre lleno de círculos rojos.</p><p>«Bienvenida${n ? ', ' + n : ''}. Tengo un cuarto de hora antes de que empiecen a llamar los locales. <mark class="clave">Pregúntame lo que más te sirva</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'error', label: '¿Cuál es el error que más reclamos trae?', info: '«Las horas extra. Cada local las manda a su manera y siempre falta alguna. El trabajador se acuerda de cada hora que se quedó; nosotros no.»' },
      { id: 'fechas', label: '¿Qué fechas no se pueden mover?', info: '«La gratificación va en la primera quincena: eso es ley y no se negocia. La PLAME vence según el último dígito del RUC. Y si alguien cesa, su liquidación no puede esperar a que nos acordemos.»' },
      { id: 'sistema', label: '¿Cómo es el sistema de planillas?', info: '«Se llama PlanMax. Calcula bien si le das bien los datos. Y se pone lento justo cuando todos lo usamos a la vez… o sea, siempre en diciembre.»' },
      { id: 'gente', label: '¿Con quién tengo que llevarme bien?', info: '«Con los catorce administradores. Gaby, de San Miguel, te va a mandar audios a toda hora; es buena gente y defiende a su personal. Y con Contabilidad, que cruza todo lo que hacemos.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('fechas') ? 2 : 0, tiempo: -1 }, rel: { hugo: picks.includes('error') ? 1 : 0 },
      cartera: { grati: 'Plazo claro: primera quincena' },
      out: 'Suena el teléfono fijo. Hugo contesta y te hace una seña: «Siéntate a mi lado, que esto se aprende mirando».',
      kusi: ['curioso', 'Ya sabes dónde duele. Eso es medio camino.'],
    }),
    mirada: {
      ve: 'Planillas es un trabajo de calendario: hay fechas que pone la ley y fechas que pone la empresa. La primera pregunta útil no es «cómo se calcula», sino «qué no se puede mover».',
      visual: { tipo: 'flujo', titulo: 'El ciclo de una planilla', pasos: ['Recoger datos', 'Calcular', 'Revisar', 'Pagar', 'Boletas', 'Declarar'] },
    },
  },
  {
    id: 'a2', t: '09:10', ch: 'documento', who: null, titulo: 'El calendario de diciembre', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Hugo te pide pasar el calendario de la pared a un Excel compartido, en el orden en que hay que hacer las cosas. <mark class="clave">Si una tarea depende de otra, va después</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las tareas de diciembre. Usa las flechas.', boton: 'Guardar el calendario',
    items: [
      { id: 'he', t: 'Recibir y consolidar las horas extra pendientes de los 14 locales', por: 'Sin horas extra completas no hay cálculo confiable.' },
      { id: 'calc', t: 'Calcular la gratificación y la bonificación de cada persona', por: 'Depende de los datos del mes y del semestre.' },
      { id: 'ceses', t: 'Liquidar a las 18 personas de Miraflores apenas venzan sus contratos', por: 'Los beneficios del cese tienen plazo propio.' },
      { id: 'plame', t: 'Declarar la PLAME de noviembre según el cronograma de SUNAT', por: 'La fecha la pone el último dígito del RUC.' },
      { id: 'pago', t: 'Pagar la gratificación antes de que termine la primera quincena', por: 'Plazo de ley.' },
      { id: 'boletas', t: 'Entregar las boletas de la gratificación', por: 'Después del pago, nunca antes.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['calendario_ok'] : [], cartera: { grati: q === 'riesgosa' ? 'Calendario desordenado' : 'Calendario de diciembre listo' },
        out: q === 'buena' ? 'Hugo mira tu Excel: «Así. Y ponle alarma al celular para la PLAME, que ese día siempre pasa algo».' : 'Hugo mueve un par de filas: «Ojo, si pagas antes de cerrar horas extra, después tienes que reintegrar».',
        pro: { ok: 'Un calendario ordenado por dependencias evita trabajar dos veces.', risk: 'Pagar o declarar con datos incompletos obliga a rectificar.', info: 'Marca en rojo lo que pone la ley y en azul lo que decide la empresa.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Diciembre bajo control!' : 'Revisa qué depende de qué.'],
      };
    },
    rules: [[LEY, 'La gratificación de Navidad se abona en la primera quincena de diciembre; el plazo es indisponible para las partes (Ley 27735, art. 5; D.S. 005-2002-TR).']],
    mirada: {
      ve: 'El calendario de Planillas no es una lista de pendientes: es una cadena. Un dato que llega tarde al inicio empuja todo lo demás hacia el borde del plazo legal.',
      visual: { tipo: 'linea', titulo: 'Diciembre en Sabor del Perú', hitos: [['Semana 1', 'Horas extra, cálculo y ceses'], ['Semana 2', 'PLAME, pago y boletas'], ['Primera quincena', 'Límite legal de la gratificación']] },
      normas: [{ ley: 'Ley 27735 y D.S. 005-2002-TR', dice: 'La gratificación de diciembre se paga en la primera quincena del mes, y ese plazo no se puede cambiar por acuerdo.', practica: 'Ni una buena razón de caja permite pagarla en la segunda quincena.' }],
    },
  },
  {
    id: 'a3', t: '10:30', ch: 'documento', who: null, titulo: 'Tu primera boleta', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Hugo te pasa una boleta de prueba, armada con errores que ha visto en años de trabajo. «Si encuentras los graves, te doy boletas de verdad.» El café se te enfría al lado del teclado.</p><p><mark class="clave">Marca lo que está mal</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas de la boleta que incumplen la ley o que están mal hechas.',
    doc: { t: 'Boleta de pago · noviembre (prueba)', sub: 'Jhoan Rivas · Mozo · local Surco' },
    lines: [
      { id: 'basico', t: 'Remuneración básica: S/ 1,230.00' },
      { id: 'doble', t: 'Descuento ONP · Descuento AFP (ambos en el mismo mes)', bad: LEY, why: 'El trabajador aporta a un solo sistema de pensiones: ONP o AFP, no a los dos.' },
      { id: 'essalud', t: 'Descuento al trabajador: aporte a EsSalud', bad: LEY, why: 'EsSalud es un aporte del empleador. No se descuenta al trabajador.' },
      { id: 'doc', t: 'Documento: DNI 004512387', bad: BP, why: 'Jhoan es venezolano y tiene carné de extranjería. Un tipo de documento mal registrado traba el pago y las declaraciones.' },
      { id: 'uniforme', t: 'Descuento «uniforme»: S/ 80.00 (sin detalle)', bad: BP, why: 'Un descuento sin sustento ni autorización del trabajador es el inicio de un reclamo seguro.' },
      { id: 'he', t: 'Horas extra 25 %: 6 horas' },
      { id: 'firma', t: 'Firma del empleador y fecha de pago', duda: 'Está bien que aparezcan: la boleta identifica al empleador y el periodo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -2 : 4, cumplimiento: missLey ? -2 : 4 }, rel: { hugo: missLey ? 0 : 1 },
      flags: missLey ? [] : ['boleta_ojo'], cartera: { consultas: missLey ? 'Boleta de prueba: errores sin ver' : 'Boleta de prueba aprobada' },
      out: missLey ? 'Hugo señala con el lapicero la línea de EsSalud: «Esto le cuesta plata al trabajador. Es de los que más duelen».' : `Encontraste ${hitsLey} errores de ley. Hugo sonríe: «El del carné de extranjería casi nadie lo ve. Tenemos treinta y tantos compañeros venezolanos».`,
      pro: { ok: 'Leer una boleta línea por línea es la base del puesto.', risk: 'Un descuento indebido se repite en cada boleta hasta que alguien lo ve.', info: 'Pide a Hugo la lista de conceptos del sistema y qué significa cada uno.' },
      kusi: missLey ? ['preocupado', 'Ese descuento salía del bolsillo de Jhoan…'] : ['celebra', '¡Ojo de planillera!'],
    }),
    rules: [[LEY, 'El aporte a EsSalud es de cargo del empleador.'], [LEY, 'El trabajador está afiliado a un solo sistema de pensiones: ONP o AFP.']],
    mirada: {
      ve: 'Una boleta es la única explicación escrita que recibe el trabajador sobre su sueldo. Si tiene un error, el trabajador no lo ve como un error del sistema: lo ve como que la empresa le quitó plata.',
      visual: { tipo: 'balanza', a: { t: 'Lo que paga el trabajador', items: ['ONP o AFP (uno solo)', 'Impuesto, si corresponde', 'Descuentos que autorizó'] }, b: { t: 'Lo que paga el empleador', items: ['EsSalud', 'Su remuneración y beneficios'] } },
    },
  },
  {
    id: 'a4', t: '12:40', ch: 'whatsapp', who: 'gaby', titulo: 'El audio de Gaby', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio, con un menú de 12 soles', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>Abres el táper del menú (seco con frejoles) y entra el audio de Gaby, con ruido de cocina y platos de fondo.</p><p>«Hola, amiga, bienvenida. Oye, Kevin, mi mozo, tiene a su mamá internada en el Loayza y necesita 400 soles hoy. <mark class="clave">Se los doy de la caja del local y que se lo descuenten de la gratificación</mark>, ¿ya? Sin tanto papel, que el chico está mal.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que sí se puede adelantar, pero como adelanto formal: Kevin firma una autorización con el monto y el descuento, y Planillas lo registra hoy.',
        res: { q: 'buena', fx: { cumplimiento: 4, etica: 3, tiempo: -2 }, rel: { gaby: 1 }, flags: ['adelanto_formal'], cartera: { grati: 'Adelanto de Kevin registrado' },
          envia: [['gaby', 'Gaby, sí se puede. Que Kevin firme el formato de adelanto (te lo mando ahora) con el monto y que autoriza descontarlo de la gratificación. Me lo envías escaneado y hoy queda registrado. Así no hay sorpresas en su boleta.']],
          out: 'A las dos, Gaby te manda la foto del formato firmado. «Gracias, amiga. Kevin ya fue al hospital.» Hugo lo registra contigo en el sistema.',
          pro: { ok: 'Ayudas a Kevin y el descuento queda claro y autorizado.', risk: 'Te toma media hora más.', info: 'Pregunta a Hugo si la empresa tiene un tope para adelantos.' },
          kusi: ['feliz', 'Rápido y con papel. ¡Así se cuida a todos!'] } },
      { id: 'b', label: 'Aceptar como lo pide: es urgente, es poco dinero y Gaby lo anota en su cuaderno.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: 2 }, rel: { gaby: 1 }, flags: ['adelanto_informal'],
          out: 'Kevin recibe los 400 soles. En la caja de San Miguel queda un faltante «por explicar» y en Planillas no hay nada registrado.',
          pro: { ok: 'Kevin tiene la plata hoy.', risk: 'Sin autorización escrita, descontarlo después puede leerse como un descuento indebido. Y la caja del local queda descuadrada.' },
          kusi: ['preocupado', '¿Y cómo lo vas a descontar sin papel?'] } },
      { id: 'c', label: 'Decirle que no se dan adelantos de gratificación: que Kevin espere al pago.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, personas: -4 }, rel: { gaby: -1 },
          out: 'Gaby te responde con un audio de tres segundos: «Ya, ok». Esa tarde, Kevin le pide plata a un prestamista del mercado.',
          pro: { ok: 'No hay descuadres.', risk: 'Diste por hecho que no se podía sin preguntar. Hugo te cuenta después que sí hay un formato de adelanto.' },
          kusi: ['triste', '¿De verdad no había otra forma?'] } },
    ],
    rules: [[BP, 'Todo adelanto se documenta con el monto y la autorización escrita del trabajador para descontarlo.']],
    mirada: {
      ve: 'Gaby no pide algo malo: pide ayudar rápido. El riesgo no está en adelantar, sino en hacerlo sin papel. En Planillas, la buena intención sin documento se convierte, un mes después, en un reclamo.',
      visual: { tipo: 'cambio', titulo: 'Del favor al adelanto', pares: [['Plata de caja', 'Adelanto registrado'], ['Anotado en un cuaderno', 'Autorización firmada'], ['«Ya veremos cómo se descuenta»', 'Descuento claro en la boleta']] },
    },
  },
  {
    id: 'a5', t: '15:00', ch: 'whatsapp', who: null, titulo: 'Las horas extra que faltan', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Hugo te muestra cómo llegaron las horas extra el mes pasado: un Excel, tres fotos de cuaderno, un audio y un correo que decía «igual que siempre».</p><p>Te toca escribir al grupo de administradores para pedir <mark class="clave">las horas extra pendientes de fin de noviembre</mark>.</p>`,
    type: 'compose', enviaA: 'admins', para: 'Para: Administradores Sabor del Perú', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pides', ops: [
        { id: 'q1', t: 'Buenas tardes. Para cerrar las horas extra del 21 al 30 de noviembre, les dejo una plantilla en la carpeta compartida: nombre, DNI o carné, fecha y horas por día.', ok: true, por: 'Un formato con documento y fecha por día permite cruzar con marcaciones.' },
        { id: 'q2', t: 'Buenas tardes. Mándenme las horas extra que falten, como puedan 🙏', ok: false, por: '«Como puedan» es la receta de catorce formatos distintos.' },
      ] },
      { id: 'sustento', t: 'Sustento', ops: [
        { id: 's1', t: 'Adjunten el reporte de marcaciones del reloj del local.', ok: true, por: 'La hora extra se sustenta con el registro de asistencia.' },
        { id: 's2', t: 'Con su visto bueno basta.', ok: false, por: 'El visto bueno no reemplaza la marcación.' },
      ] },
      { id: 'plazo', t: 'Plazo', ops: [
        { id: 'p1', t: 'Lo necesito mañana a las 12. Si algo no cuadra, los llamo.', ok: true, por: 'Fecha concreta y canal de dudas.' },
        { id: 'p2', t: 'Cuando tengan un tiempito.', ok: false, por: 'Sin plazo no hay calendario.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 's1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, tiempo: q === 'buena' ? 2 : -1 },
        flags: [q === 'riesgosa' || sel.que === 'q2' ? 'formato_libre' : 'formato_unico'], cartera: { horas: sel.que === 'q2' ? 'Pedido sin formato' : 'Plantilla enviada · mañana 12:00' },
        out: q === 'buena' ? 'En diez minutos, ocho administradores ponen el pulgar. Gaby escribe: «Por fin una plantilla, amiga».' : 'Los administradores responden con stickers. Mañana sabrás qué entendió cada uno.',
        pro: { ok: 'Pedir bien es la mitad de recibir bien.', risk: 'Sin marcaciones, pagarás lo que te digan, no lo que pasó.', info: 'Guarda la plantilla con fecha en el nombre del archivo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una plantilla para gobernarlos a todos!' : 'Mañana vas a ver fotos de cuadernos…'],
      };
    },
    rules: [[BP, 'Las horas extra se sustentan con el registro de asistencia del local.']],
    mirada: {
      ve: 'Catorce locales son catorce formas de trabajar. Una plantilla común no es burocracia: es lo que te permite revisar 700 personas en un día y no en una semana.',
      visual: { tipo: 'embudo', titulo: 'Cómo llegan las horas extra', niveles: [['Locales', 14], ['Con plantilla', 8], ['Con marcaciones', 6]] },
    },
  },
  {
    id: 'a6', t: '17:20', ch: 'whatsapp', who: 'wilder', titulo: '«Ya pregunté dos veces»', banner: 'assets/esc/dudas.webp', lugar: 'Tu escritorio', show: ['personas', 'confianza'],
    body: () => `<p>Ya casi es hora de salir. Afuera empieza a oscurecer sobre la avenida Arequipa y el Metropolitano pasa repleto.</p><p>Te escribe Wilder Pinto, cocinero de Barranco: quiere saber por qué en noviembre cobró menos que su compañero. Hugo, poniéndose la casaca, te dice: «Wilder siempre reclama. <mark class="clave">Pero a veces tiene razón</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle hoy: que ya viste su mensaje, que mañana revisas su boleta con sus marcaciones y que lo llamas a las 3 con los datos.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, tiempo: -1 }, rel: { wilder: 1 }, flags: ['wilder_cita'], cartera: { consultas: 'Wilder: revisar boleta mañana 15:00' },
          envia: [['wilder', 'Buenas tardes, Wilder. Sí, soy la nueva asistente de Planillas. Ya vi tu mensaje. Mañana reviso tu boleta de noviembre con tus marcaciones y te llamo a las 3 con lo que encuentre.']],
          out: 'Wilder responde a la hora: «Ya. Gracias por responder, al menos». En tu libreta anotas: «Wilder · Barranco · ¿horas extra?».',
          pro: { ok: 'Le das una fecha y no prometes un resultado.', info: 'Antes de llamarlo, mira su boleta y la de su compañero: las diferencias suelen tener explicación… o no.' },
          kusi: ['animo', 'Una fecha concreta calma más que mil disculpas.'] } },
      { id: 'b', label: 'Decirle que lo vas a ver apenas puedas: hoy es tu primer día y no conoces el sistema.',
        res: { q: 'aceptable', fx: { personas: -1, confianza: -2 }, flags: ['wilder_esperando'],
          envia: [['wilder', 'Hola, Wilder. Hoy es mi primer día, apenas pueda lo veo 🙏']],
          out: 'Wilder deja el mensaje en visto. Es la tercera vez que alguien le dice «apenas pueda».',
          pro: { ok: 'Eres honesta.', risk: 'Sin una fecha, para Wilder es la misma respuesta de siempre.' },
          kusi: ['pensando', '¿«Apenas pueda» cuándo es?'] } },
    ],
    mirada: {
      ve: 'Para Wilder, cada sol de diferencia es una pregunta sobre si la empresa lo respeta. Quien atiende consultas de planilla aprende pronto que la velocidad de la respuesta pesa casi tanto como la respuesta misma.',
    },
  },
];
