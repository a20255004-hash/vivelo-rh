// Asistente de Planillas · Capítulo 9 · «El pago» · Semana 2, jueves.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - D.S. 001-98-TR, art. 19: la boleta de pago se entrega al trabajador a más tardar el tercer día hábil siguiente a la fecha
//   de pago. La entrega por medios electrónicos es válida con acuerdo previo del trabajador (D.Leg. 1310, art. 3).
//   https://lpderecho.pe/trabajador-boleta-pago-conceptos-abonaron/
//   https://lpderecho.pe/descargue-pdf-guia-boletas-pago/
//   https://modelo.pe/modelo-de-boleta-de-pago-de-remuneraciones/
// - MTPE: la firma o recepción de la boleta no implica aceptación de su contenido.
//   https://www.elperuano.pe/noticia/220856-mtpe-firma-o-recepcion-de-la-boleta-de-pago-no-implica-aceptacion-de-su-contenido
// - Ley 27735, art. 5: pago de la gratificación en la primera quincena de diciembre, ya citada.
// Empresas, personas y montos son ficticios.

export const CAP = {
  n: 9, titulo: 'El pago', dia: 'Semana 2, jueves', foto: 'assets/foto2/celebra-laptop.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '06:45', fin: '19:30', cierreHora: '19:15',
  apertura: 'Jueves. Día de pago. Llegas a las 6:45, cuando todavía están baldeando la vereda del local de Lince. A las 7 en punto el banco manda el reporte de abonos de la gratificación de 700 personas.', boton: 'Abrir el reporte del banco',
  kusi: 'Hoy setecientas personas miran su celular esperando una notificación del banco. ¡Que llegue!',
  lead: 'Resolviste los abonos rechazados, revisaste las boletas antes de enviarlas, avisaste cómo descargarlas, defendiste una entrega sin condiciones y respondiste a quienes más lo necesitaban.',
  reflexion: 'De todo lo que pasó estas dos semanas, ¿qué llegó hoy a la boleta de alguien gracias a ti?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'abonos', p: 'Abonos de la gratificación', j: 'Banco · Tesorería', d: 0, e: 'Reporte a las 7:00' },
  { id: 'boletas', p: 'Boletas de la gratificación', j: 'Tú', d: 0, e: 'Plazo: tercer día hábil' },
  { id: 'consultas', p: 'Consultas del día de pago', j: 'Tú', d: 0, e: 'Bandeja llena' },
  { id: 'reintegros', p: 'Reintegros de Yesenia, Wilder y otros', j: 'Hugo · Planillas', d: 0, e: 'En la planilla de hoy' },
];

export const FUTURO = {
  rechazos_resueltos: ['Los abonos rechazados se pagaron hoy por otra vía, con constancia.', 'Nadie se quedó sin gratificación.'],
  rechazos_mañana: ['Dejaste los abonos rechazados para mañana.', 'Algunas personas pasarán la noche sin su gratificación.'],
  boletas_revisadas: ['Revisaste las boletas antes de enviarlas.', 'Hubo menos consultas en la tarde.'],
  boletas_sin_revisar: ['Enviaste las boletas sin revisar una muestra.', 'Un error llegó a varias personas.'],
  aviso_boletas: ['Los locales saben cómo descargar sus boletas y quién recibe impresa.', 'Pocas consultas de «no me llegó».'],
  entrega_sin_condicion: ['Las boletas se entregaron con cargo de recepción, sin renuncias.', 'Nadie firmó algo que no correspondía.'],
  entrega_conformidad: ['Se pidió firmar «conformidad y nada que reclamar» para recibir la boleta.', 'Ese formato no impide reclamar. Y alguien lo fotografió.'],
  consultas_bien: ['Respondiste primero a quienes tenían un problema real con su pago.', 'Cerraste el día con la bandeja casi vacía.'],
  pendientes_escritos: ['Dejaste por escrito los pendientes antes de salir.', 'El lunes empiezas sabiendo dónde estás.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  ines: { n: 'Inés Quiroz', sub: 'Contadora general', who: 'contadora' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Moza · local San Miguel', c: '#B83280' },
  nelly: { n: 'Nelly Ccahuana', sub: 'Ex lavaplatos · local Miraflores', c: '#975A16' },
};

export const WSP = [
  { chat: 'grupo', t: '06:50', de: 'Hugo', txt: 'Día D 🎄 Estoy llegando. Si el banco rechaza algo, no te asustes: siempre rechaza algo.' },
  { chat: 'yesenia', t: '09:40', de: 'Yesenia', txt: 'Señorita!!! Me llegó la grati completa y el reintegro de octubre y noviembre 😭 Gracias. Le compré su primer juguete a mi bebé.', si: 'lactancia_total' },
  { chat: 'yesenia', t: '09:40', de: 'Yesenia', txt: 'Señorita, me llegó la grati y lo de noviembre. ¿Y lo de octubre? También me descontaron.', si: 'lactancia_parcial' },
  { chat: 'nelly', t: '10:05', de: 'Nelly', txt: 'Buenos días señorita. Ya retiré mi CTS con la carta. Ahora tengo para la Navidad de mis nietos. Gracias', si: 'nelly_clara' },
  { chat: 'wilder', t: '11:15', de: 'Wilder', txt: 'Llegó. Grati, horas y lo del menú. Mi esposa revisó todo con su mensaje al lado. Cuadra. Gracias de verdad.', si: 'wilder_explicado' },
  { chat: 'gaby', t: '12:40', de: 'Gaby', txt: '🎤 Audio · 0:40 — «Amiga, Kevin está preguntando por qué le descontaron 400 si nunca firmó nada. Ayúdame, porfa.»', si: 'kevin_turbio' },
  { chat: 'admins', t: '13:20', de: 'Lucho (Barranco)', txt: 'Edson está molesto: dice que Wilder sabe cuánto gana él. ¿Quién le contó?', si: 'boleta_ajena' },
  { chat: 'ines', t: '17:30', de: 'Inés', txt: 'Vi el reporte de abonos. Cero pendientes. No me pasaba desde hace tres años.', si: 'rechazos_resueltos' },
];

export const CORREOS = [
  { t: '07:00', de: 'Banco · Pagos masivos', para: 'Tesorería Sabor del Perú', asunto: 'Resultado del proceso de abonos', html: '<p>Proceso «GRATIFICACIÓN DICIEMBRE»: 700 registros enviados. Abonos exitosos: 688. Rechazados: 12 (cuenta inexistente: 5; cuenta cerrada: 4; documento no coincide: 3).</p>' },
  { t: '11:40', de: 'Gerencia de Operaciones', para: 'Planillas', asunto: 'Entrega de boletas', html: '<p>Para evitar reclamos, adjunto el formato de recepción de boletas que usaremos: «Declaro estar conforme con mi pago y no tener nada que reclamar». Que lo firmen todos al recibir su boleta.</p><p>Operaciones</p>' },
];

export const QUIZ = [
  { q: '¿Hasta cuándo hay para entregar la boleta de pago?', ops: ['El mismo día', 'A más tardar el tercer día hábil siguiente a la fecha de pago', 'A fin de mes', 'Cuando el trabajador la pida'], ok: 1, por: 'El D.S. 001-98-TR (art. 19) fija la entrega a más tardar el tercer día hábil siguiente al pago.' },
  { q: '¿Se puede entregar la boleta por correo o por una plataforma?', ops: ['Sí, siempre', 'Sí, con acuerdo previo del trabajador', 'No, solo impresa', 'Solo a gerentes'], ok: 1, por: 'La entrega electrónica es válida con acuerdo previo del trabajador.' },
  { q: 'Si un trabajador firma la recepción de su boleta…', ops: ['Ya no puede reclamar', 'Solo acredita que la recibió: no implica aceptar su contenido', 'Acepta todos los descuentos', 'Renuncia a sus beneficios'], ok: 1, por: 'El MTPE ha precisado que la firma o recepción de la boleta no implica aceptación de su contenido.' },
  { q: 'El banco rechaza 12 abonos de la gratificación. Lo mejor es…', ops: ['Esperar a enero', 'Resolver hoy cada caso por otra vía (cuenta correcta, cheque o transferencia) y dejar constancia', 'Pagar en efectivo sin recibo', 'Culpar al banco'], ok: 1, por: 'El plazo de la gratificación vence en la primera quincena: los rechazos se resuelven antes, con constancia.' },
  { q: 'En la bandeja hay 40 mensajes el día de pago. ¿A quién respondes primero?', ops: ['Al que escribió primero', 'A quien no recibió su pago o tiene un error en él', 'Al que agradece', 'Al administrador que más insiste'], ok: 1, por: 'Prioriza a quien tiene un problema real con su dinero.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '07:10', ch: 'llamada', who: null, titulo: 'Doce rechazados', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio, con el primer café', show: ['tiempo', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>El banco abonó 688 de 700. Rechazó 12: cinco cuentas que no existen, cuatro cerradas y tres con documento que no coincide. ${F.has('corrida2_revisada') ? 'Diez de esas cuentas eran las que pediste el martes; dos administradores mandaron números con un dígito de más.' : 'Son, casi todas, las cuentas que nadie persiguió.'}</p><p>Entre los tres «documento no coincide» está Jhoan, con su carné de extranjería. <mark class="clave">Agarras el teléfono</mark>.</p>`,
    type: 'calls',
    calls: [['Banco · banca empresa', 'Contesta el ejecutivo', 'Les podemos reprocesar hoy hasta la 1 p. m. si nos mandan los datos correctos. Lo de documento distinto, que el trabajador venga con su carné a la agencia.'], ['Tesorería', 'Contesta Rubén', 'Para los que no tengan cuenta hoy, puedo hacer transferencia a otra cuenta a su nombre o cheque. Necesito la lista antes de las 12.'], ['Jhoan Rivas', 'Contesta medio dormido', '¿Rechazado? Pucha… mi cuenta la abrieron con mi pasaporte venezolano, no con el carné. ¿Voy al banco?']],
    prompt: 'El banco reprocesa hasta la 1, Tesorería puede transferir o hacer cheque y Jhoan necesita ir a la agencia. ¿Cómo lo resuelves?',
    choices: [
      { id: 'a', label: 'Mandar al banco los datos corregidos de los que tienen cuenta, a Tesorería la lista de los que no, y acompañar a Jhoan con una carta para la agencia. Todo antes de las 12.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 4, tiempo: -2 }, flags: ['rechazos_resueltos'], cartera: { abonos: '12 rechazos resueltos hoy' },
          out: 'A la 1:30, los 12 tienen su gratificación: 7 por reproceso, 4 por transferencia y Jhoan con su cuenta corregida en la agencia de la avenida Benavides.',
          pro: { ok: 'Cada rechazo tiene una salida distinta; todas antes del plazo.', info: 'Guarda la constancia de cada pago y corrige los datos en PlanMax para la próxima.' },
          kusi: ['celebra', '¡Setecientos de setecientos!'] } },
      { id: 'b', label: 'Pedir a los 12 que verifiquen su cuenta y reprocesar todo mañana, con más calma.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, personas: -4 }, flags: ['rechazos_mañana'], cartera: { abonos: '12 rechazos para mañana' },
          out: 'Doce personas se quedan sin su gratificación hoy, mientras sus compañeros ya están en Gamarra. El grupo de Surco se llena de «¿y yo?».',
          pro: { ok: 'Evitas errores de apuro.', risk: 'Doce personas pagan el error de un dato. Y el plazo es la primera quincena.' },
          kusi: ['triste', 'Doce celulares sin notificación…'] } },
    ],
    rules: [[LEY, 'La gratificación se paga en la primera quincena de diciembre (Ley 27735, art. 5).']],
    mirada: {
      ve: 'Que el banco rechace abonos es normal; lo que no es normal es que alguien pase la Navidad sin su gratificación por un dígito. Cada rechazo es una persona concreta, y cada una tiene una salida distinta.',
      visual: { tipo: 'embudo', titulo: 'Abonos de la gratificación', niveles: [['Enviados', 700], ['Abonados a las 7:00', 688], ['Resueltos antes de la 1:30', 12]] },
    },
  },
  {
    id: 'i2', t: '09:10', ch: 'documento', who: null, titulo: 'Antes de enviar las boletas', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Las 700 boletas electrónicas están listas para enviarse por la plataforma. Antes de apretar «Enviar a todos», abres una muestra. Hugo pasa detrás: <mark class="clave">«La boleta es lo que el trabajador va a leer. Que diga la verdad»</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal en la muestra de boletas.',
    doc: { t: 'Boletas de la gratificación · muestra', sub: 'Plataforma de boletas · 6 de 700' },
    lines: [
      { id: 'yes', t: 'Yesenia: «Gratificación S/ 1,300.00 · Bonificación extraordinaria S/ 117.00 · Reintegro remuneración (lactancia oct.-nov.) S/ 227.50».' },
      { id: 'wil', t: 'Wilder: «Reintegro horas extra» y «Devolución descuento menú» en un solo concepto llamado «Otros».', bad: BP, why: '«Otros» no le explica nada. Cada reintegro va con su nombre, que es lo que le prometiste.' },
      { id: 'kev', t: 'Kevin: «Descuento adelanto S/ 400.00».', duda: 'Es correcto si hay autorización firmada en su legajo.' },
      { id: 'imp', t: 'Envío electrónico a los 700, incluidas 45 personas que no aceptaron la boleta electrónica.', bad: LEY, why: 'La entrega electrónica requiere acuerdo previo del trabajador. A esas 45 se les entrega impresa.' },
      { id: 'fecha', t: 'Fecha de envío programada: el lunes de la próxima semana.', duda: 'Está dentro del tercer día hábil siguiente al pago, pero ¿por qué esperar si ya están listas?' },
      { id: 'jhoan', t: 'Jhoan: documento «DNI».', bad: BP, why: 'Jhoan tiene carné de extranjería. Lo corregiste en el T-Registro, falta en la boleta.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 4 },
      flags: [missLey ? 'boletas_sin_revisar' : 'boletas_revisadas'], cartera: { boletas: missLey ? 'Enviadas sin corregir' : `Corregidas · ${hitsLey} errores de ley · 45 impresas` },
      out: missLey ? 'Las boletas salen a los 700. A la hora, una moza de Callao escribe: «Me llegó una boleta al correo y yo no tengo correo, me lo creó mi sobrino».' : 'Separas a los 45 que reciben impresa, renombras los conceptos de Wilder y corriges el documento de Jhoan. A las 10:20 salen las boletas.',
      pro: { ok: 'Revisar una muestra antes de enviar evita 700 consultas.', risk: 'Enviar por correo a quien no lo aceptó no es entregar la boleta.', info: 'Lleva la lista de los 45 impresos a cada local con cargo de recepción.' },
      kusi: missLey ? ['preocupado', 'Cuarenta y cinco personas sin su boleta…'] : ['celebra', '¡Boletas que dicen la verdad!'],
    }),
    rules: [[LEY, 'La boleta se entrega a más tardar el tercer día hábil siguiente al pago (D.S. 001-98-TR, art. 19).'], [LEY, 'La entrega electrónica requiere acuerdo previo del trabajador.']],
    mirada: {
      ve: 'Una boleta con conceptos claros responde las preguntas antes de que lleguen. «Otros» es la palabra más cara de una planilla: cada «otros» es una consulta en la bandeja de mañana.',
      visual: { tipo: 'cambio', titulo: 'De «otros» a conceptos claros', pares: [['Otros S/ 192.75', 'Reintegro horas extra · Devolución menú'], ['Correo a todos', 'Electrónica a quien aceptó, impresa al resto'], ['DNI', 'Carné de extranjería']] },
      normas: [{ ley: 'D.S. 001-98-TR, art. 19', dice: 'La boleta de pago se entrega a más tardar el tercer día hábil siguiente a la fecha de pago.', practica: 'Si ya están listas el día del pago, no hay motivo para esperar al límite.' }],
    },
  },
  {
    id: 'i3', t: '10:30', ch: 'whatsapp', who: null, titulo: '«¿Dónde veo mi boleta?»', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['personas', 'confianza'],
    body: () => `<p>La bandeja ya tiene 23 mensajes iguales: «¿Dónde veo mi boleta?». <mark class="clave">Escribe un solo mensaje</mark> para que los 14 administradores lo compartan con su gente.</p>`,
    type: 'compose', enviaA: 'admins', para: 'Para: Administradores Sabor del Perú', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'donde', t: 'Dónde', ops: [
        { id: 'd1', t: 'Buenos días. Las boletas de la gratificación ya están en la plataforma: entran con su número de documento y la clave que usan para ver su boleta de cada mes.', ok: true, por: 'Dónde y cómo entrar.' },
        { id: 'd2', t: 'Buenos días. Las boletas ya están en el sistema.', ok: false, por: '¿Qué sistema? ¿Cómo entran?' },
      ] },
      { id: 'impresa', t: 'Quién la recibe impresa', ops: [
        { id: 'i1', t: 'Quienes no aceptaron la boleta electrónica la reciben impresa en su local esta semana, con cargo de recepción.', ok: true, por: 'Nadie se queda fuera.' },
        { id: 'i2', t: 'Al que no le llegue, que se cree un correo.', ok: false, por: 'No puedes obligar a nadie a la boleta electrónica.' },
      ] },
      { id: 'dudas', t: 'Dudas', ops: [
        { id: 'u1', t: 'Si alguien tiene una diferencia en su pago, que me escriba con su nombre y local: lo reviso hoy.', ok: true, por: 'Un canal y un compromiso.' },
        { id: 'u2', t: 'Las boletas están bien revisadas, no debería haber errores 😊', ok: false, por: 'Prometer cero errores invita a la desconfianza al primer error.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'i1', 'u1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['aviso_boletas'] : [], cartera: { consultas: q === 'buena' ? 'Aviso de boletas enviado' : 'Consultas siguen llegando' },
        out: q === 'buena' ? 'En una hora, los mensajes de «¿dónde veo mi boleta?» bajan de 23 a 3. Los que quedan son consultas de verdad.' : 'Los mensajes siguen llegando. Ítalo: «¿Qué sistema? Mis chicos no saben».',
        pro: { ok: 'Un mensaje claro, reenviado por cada administrador, responde 700 preguntas.', risk: 'Un aviso vago multiplica las consultas.', info: 'Guarda este mensaje como plantilla para la planilla de cada mes.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Un mensaje, setecientas respuestas.' : 'Faltó el cómo.'],
      };
    },
    mirada: {
      ve: 'El día de pago, la mitad de las consultas no son sobre el monto: son sobre dónde ver la boleta. Un buen aviso libera tiempo para las consultas que sí necesitan tu atención.',
    },
  },
  {
    id: 'i4', t: '11:50', ch: 'presencial', who: 'hugo', titulo: '«Conforme y nada que reclamar»', banner: 'assets/foto2/tension.webp', lugar: 'Escritorio de Hugo', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Operaciones mandó un formato para que los 45 que reciben boleta impresa firmen: «Declaro estar conforme con mi pago y <mark class="clave">no tener nada que reclamar</mark>». Hugo lo lee, se rasca la cabeza y te lo pasa: «Bustamante quiere que lo usemos. Tú vas a repartir las boletas. ¿Qué opinas?».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer un cargo de recepción simple: nombre, fecha y firma de que recibió la boleta, sin «conformidad» ni renuncias. Y explicarle a Bustamante por qué.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 1 }, rel: { hugo: 1 }, flags: ['entrega_sin_condicion'], cartera: { boletas: 'Cargo de recepción simple' },
          out: 'Hugo le escribe a Bustamante con tu explicación. Responde a los veinte minutos: «Ok. No quiero problemas». El formato nuevo dice solo: «Recibí mi boleta».',
          pro: { ok: 'El cargo acredita la entrega, que es lo que se necesita.', risk: 'Bustamante siente que Planillas le corrige otra vez.', info: 'La firma o recepción de la boleta no implica aceptación de su contenido, según el MTPE.' },
          kusi: ['celebra', 'Recibir no es renunciar.'] } },
      { id: 'b', label: 'Usar el formato de Operaciones: si firman, mejor para la empresa.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -3 }, flags: ['entrega_conformidad'], cartera: { boletas: 'Formato de «conformidad»' },
          out: 'En Callao, una ayudante le toma foto al formato y lo sube a un grupo de Facebook de trabajadores de restaurantes: «Miren lo que nos hacen firmar».',
          pro: { ok: 'Cumples lo que pidió Operaciones.', risk: 'Ese texto no quita el derecho a reclamar, pero sí da una imagen de presión.' },
          kusi: ['indignado', '¡Una boleta no se cambia por una renuncia!'] } },
      { id: 'c', label: 'No pedir ninguna firma: entregar las boletas y ya.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: -2 }, cartera: { boletas: 'Entregadas sin constancia' },
          out: 'Las boletas se entregan, pero no tienes cómo probar que las 45 personas las recibieron.',
          pro: { ok: 'No hay presión.', risk: 'Sin cargo de recepción, no puedes acreditar que entregaste la boleta en el plazo.' },
          kusi: ['pensando', 'Sin cargo, ¿cómo lo pruebas?'] } },
    ],
    rules: [[LEY, 'La firma o recepción de la boleta no implica aceptación de su contenido (MTPE).'], [BP, 'El cargo de recepción acredita la entrega; no debe incluir renuncias.']],
    mirada: {
      ve: 'Bustamante quiere evitar reclamos, y es razonable. Pero la forma de evitarlos no es hacer firmar una renuncia: es pagar bien y explicar bien. Lo que pasó estas dos semanas es la mejor prueba.',
      visual: { tipo: 'balanza', a: { t: '«Conforme y nada que reclamar»', items: ['Da imagen de presión', 'No quita el derecho a reclamar'] }, b: { t: '«Recibí mi boleta»', items: ['Acredita la entrega', 'Respeta al trabajador'] } },
    },
  },
  {
    id: 'i5', t: '15:00', ch: 'documento', who: null, titulo: 'La bandeja de la tarde', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con un panetón abierto entre todos', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>Alguien abrió un panetón en la oficina y todos pasan a sacar un pedazo. En tu bandeja quedan seis mensajes y te alcanza para responder bien a tres antes de las 5. <mark class="clave">Elige a quiénes</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres consultas que respondes primero.', boton: 'Responder estas', resumen: 'Respondiste',
    cols: ['Consulta', 'Lo que sabes'],
    rows: [
      { id: 'callao', cells: ['Una ayudante de Callao: «No me llegó nada»', 'Es de las 12 rechazadas; su caso está en Tesorería'] },
      { id: 'kevin', cells: ['Kevin, por Gaby: «¿Por qué me descontaron 400?»', 'Depende de si hay autorización firmada'] },
      { id: 'surco', cells: ['Un mozo de Surco: «¿Por qué el 9 % no es 10 %?»', 'Duda sobre la bonificación extraordinaria'] },
      { id: 'gracias', cells: ['Tres mensajes de agradecimiento', 'Wilder, doña Nelly, Yesenia'] },
      { id: 'meme', cells: ['Ítalo manda un meme de Navidad al grupo', 'Pide «reacciones»'] },
      { id: 'enero', cells: ['Un cocinero de Los Olivos: «¿Cuándo es la próxima grati?»', 'La respuesta es julio'] },
    ],
    score: { callao: 3, kevin: 3, surco: 2, gracias: 1, meme: -2, enero: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: picks.includes('kevin') ? 2 : 0, tiempo: q === 'buena' ? 2 : -1 },
        flags: q === 'buena' ? ['consultas_bien'] : [], cartera: { consultas: q === 'buena' ? 'Problemas reales atendidos' : 'Consultas urgentes pendientes' },
        out: q === 'buena' ? 'La ayudante de Callao recibe su transferencia a las 4:10. A Kevin le explicas su descuento con el formato que firmó (o le pides que lo firme si no existe). Al mozo de Surco le cuentas que el 9 % es lo que se aportaría a EsSalud.' : 'Respondes cosas amables, pero la ayudante de Callao sigue sin saber qué pasa con su plata.',
        pro: { ok: 'El dinero que no llegó y el descuento que no se entiende van primero.', risk: 'Los agradecimientos pueden esperar una hora; una persona sin pago, no.', info: 'Responde los agradecimientos al final del día: también importan.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Bandeja con prioridades!' : '¿Quién seguía sin su plata?'],
      };
    },
    mirada: {
      ve: 'El día de pago, todo parece urgente. Pero hay una regla simple: primero quien no recibió su dinero, luego quien no entiende lo que recibió, y después todo lo demás.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Impacto en el pago', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Más tarde', 'No ahora'], items: [['No me llegó nada', .3, .95], ['Descuento de Kevin', .4, .85], ['¿Por qué 9 %?', .2, .55], ['Agradecimientos', .1, .3], ['Próxima grati', .1, .15], ['Meme', .05, .02]] },
    },
  },
  {
    id: 'i6', t: '18:40', ch: 'presencial', who: 'hugo', titulo: '«Vamos por un chicharrón»', banner: 'assets/foto2/chocan-manos.webp', lugar: 'Oficina de Planillas', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>Hugo apaga sus tres pantallas por primera vez en dos semanas. «Setecientas personas cobraron. Abajo nos invitan un chicharrón con camote. <mark class="clave">¿Vienes?</mark>» Te quedan dos pendientes pequeños para mañana.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Escribir en cinco minutos la lista de pendientes para mañana, con responsable y hora, y bajar con Hugo.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 2, tiempo: 1 }, rel: { hugo: 1 }, flags: ['pendientes_escritos'],
          out: 'Pegas un post-it en tu monitor: «1. Constancias de los 12 rechazos. 2. Lista de las 45 boletas impresas por local». Abajo, el chicharrón está crocante y alguien pone una cumbia de Agua Marina.',
          pro: { ok: 'Cerrar el día por escrito te deja descansar de verdad.', info: 'Celebrar también es parte del trabajo: el equipo lo necesita.' },
          kusi: ['celebra', '¡Chicharrón merecido!'] } },
      { id: 'b', label: 'Quedarte a terminar los pendientes: mejor salir con todo cerrado.',
        res: { q: 'aceptable', fx: { calidad: 2, confianza: -1, tiempo: -2 },
          out: 'Terminas a las 8:30. Cuando bajas, ya se acabó el chicharrón. Hugo te dejó un pan con camote envuelto en servilleta.',
          pro: { ok: 'Dejas todo listo.', risk: 'Dos pendientes pequeños no justificaban perderte el único momento de celebrar en dos semanas.' },
          kusi: ['pensando', 'A veces el pendiente puede esperar al post-it.'] } },
    ],
    mirada: {
      ve: 'Planillas es un trabajo de ciclos: cuando uno termina, el siguiente ya empezó. Por eso las pausas cuentan. Saber cerrar un día por escrito es lo que te permite celebrar sin culpa.',
    },
  },
];
