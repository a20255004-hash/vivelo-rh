// Asistente de Bienestar Social · Capítulo 2 · «El subsidio» · Semana 1, miércoles.
// Hilo del mes: Don Héctor lleva más de 40 días de descanso médico y el subsidio no llega.
// Normas citadas:
// - Ley 26790, de Modernización de la Seguridad Social en Salud: los primeros 20 días de incapacidad los paga el
//   empleador; desde el día 21, subsidio por incapacidad temporal de EsSalud.
//   https://www.gob.pe/423-subsidio-para-el-trabajador-por-incapacidad-temporal-solicitar-y-cobrar-el-subsidio-por-incapacidad-temporal
// - EsSalud (gob.pe): en asegurados regulares y agrarios dependientes, el empleador paga el subsidio al trabajador
//   en la misma forma y oportunidad que su remuneración y luego solicita el reembolso a EsSalud (plataforma ViVa).
//   El certificado médico particular debe canjearse por el CITT (Certificado de Incapacidad Temporal para el Trabajo).
//   https://www.gob.pe/423-subsidio-para-el-trabajador-por-incapacidad-temporal-solicitar-y-cobrar-el-subsidio-por-incapacidad-temporal
// - Indecopi, Resolución 0011-2025/SEL-INDECOPI: cuestionó como barreras algunas exigencias de EsSalud para el
//   reembolso (plazo y CITT). Por eso aquí no se citan plazos exactos de reembolso ni de canje.
//   https://lpderecho.pe/indecopi-declara-ilegal-requisito-exigido-essalud-validacion-certificados-medicos-resolucion-0011-2025-sel-indecopi/
// - Ley 29733, de Protección de Datos Personales: los datos de salud son datos sensibles.

export const CAP = {
  n: 2, titulo: 'El subsidio', dia: 'Semana 1, miércoles', foto: 'assets/3d/scenes/agro.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '07:15', fin: '18:15', cierreHora: '18:00',
  apertura: 'Miércoles. Llovizna de ceniza: anoche quemaron caña cerca de la planta. Don Héctor ya está en la puerta, con su bolsa de papeles.', boton: 'Abrir el caso de Don Héctor',
  kusi: 'Hoy toca seguir un papel hasta donde se trabó. ¡Paciencia y lupa!',
  lead: 'Seguiste el trámite de Don Héctor de la puerta a Planillas, de Planillas a EsSalud y de vuelta a su casa, y dejaste un expediente que cualquiera puede continuar.',
  reflexion: '¿Qué sentiste cuando entendiste que a Don Héctor le debían plata que nadie le había pagado?',
  siguiente: { n: 3, titulo: 'La visita', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'hector', p: 'Subsidio de Don Héctor', j: 'Planillas · EsSalud', d: 0, e: 'Sin pagar desde el día 21' },
  { id: 'certificado', p: 'Certificado particular sin canjear', j: 'Héctor · EsSalud', d: 0, e: '10 días sin CITT' },
  { id: 'planillas', p: 'Acuerdo con Planillas', j: 'Wilmer · Planillas', d: 0, e: '«Pagamos cuando EsSalud devuelve»' },
  { id: 'familia', p: 'Situación de la familia Llontop', j: 'Bienestar', d: 0, e: 'Por conocer' },
  { id: 'visita', p: 'Visita del viernes', j: 'Nelly · Bienestar', d: 0, e: 'Por coordinar' },
];

export const FUTURO = {
  subsidio_pagado: ['Planillas pagará el subsidio de Don Héctor en la planilla y pedirá el reembolso a EsSalud.', 'El viernes la familia ya sabrá cuándo entra la plata.'],
  subsidio_prestamo: ['Don Héctor recibirá un préstamo del fondo de emergencia mientras Planillas espera el reembolso.', 'El viernes verás que el préstamo también se descuenta.'],
  planillas_dolida: ['Escalaste el caso a Gerencia y Wilmer, de Planillas, se sintió expuesto.', 'Te costará pedirle favores en los próximos capítulos.'],
  gota_a_gota: ['Doña Rosa te contó que pidieron un préstamo «gota a gota».', 'Lo verás con tus propios ojos en la visita del viernes.'],
  citt_en_marcha: ['Don Héctor irá el viernes a canjear su certificado particular, con movilidad de la empresa.', 'Te contará cómo le fue en la visita.'],
  expediente_ordenado: ['Dejaste un expediente de subsidio con qué se debe, qué falta y quién hace qué.', 'Nelly lo usará como modelo para otros casos.'],
  hector_informado: ['Don Héctor sabe exactamente qué pasa con su plata y qué le toca hacer.', 'Te recibirá en su casa con confianza.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  wilmer: { n: 'Wilmer Sandoval', sub: 'Analista de Planillas · 26 años en Sipán', c: '#5B6C8F' },
  rosa: { n: 'Rosa Ñiquén', sub: 'Esposa de Don Héctor', c: '#B5651D' },
};

export const WSP = [
  { chat: 'grupo', t: '07:10', de: 'Nelly', txt: 'Hoy estoy en Chiclayo con lo del préstamo del operario de ayer 🙏 Cualquier cosa con Planillas, pregunta por Wilmer. Es gruñón pero sabe.' },
  { chat: 'hector', t: '07:12', de: 'Don Héctor', txt: 'Señorita ya estoy afuera. Traje todos los papeles como me dijo.', si: 'hector_claro' },
  { chat: 'hector', t: '07:12', de: 'Don Héctor', txt: 'Señorita disculpe, mi señora me hizo venir. Estoy en la puerta.', no: 'hector_claro' },
  { chat: 'maribel', t: '12:50', de: 'Maribel', txt: 'Hoy pude a las 10:30 😊 Pero en el depósito hace un calor terrible y no hay dónde guardar la leche.', si: 'maribel_hora' },
  { chat: 'maribel', t: '12:50', de: 'Maribel', txt: 'Todo bien, gracias. Me estoy acostumbrando.', si: 'maribel_fin' },
  { chat: 'augusto', t: '14:20', de: 'Augusto', txt: 'Lo del depósito junto al tópico lo veo la otra semana. Ahorita estamos con la caldera 2 parada.' },
  { chat: 'wilmer', t: '16:45', de: 'Wilmer', txt: 'Ya lo cargué. Si se cuelga el sistema otra vez lo vuelvo a meter mañana a las 6. No me lo vayan a reclamar a mí después.', si: 'subsidio_pagado' },
  { chat: 'rosa', t: '17:55', de: 'Rosa', txt: 'Señorita gracias, Héctor llegó hablando más tranquilo. Aquí la esperamos el viernes.', si: 'hector_informado' },
];

export const CORREOS = [
  { t: '07:40', de: 'Wilmer Sandoval', para: 'Asistente de Bienestar Social', asunto: 'RE: Subsidio Llontop', html: '<p>Buenos días. El caso del Sr. Llontop está en «pendiente EsSalud». Aquí el subsidio se paga cuando EsSalud reembolsa, así lo hacemos desde hace años.</p><p>Si quiere conversarlo, estoy en Planillas hasta las 11. Después cierro la quincena.</p><p>W. Sandoval</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador con descanso médico ya pasó el día 20. ¿Quién le paga el subsidio en su planilla?', ops: ['EsSalud, directamente en su cuenta', 'El empleador, en la misma oportunidad que su remuneración, y luego pide el reembolso', 'Nadie, hasta que EsSalud apruebe', 'El propio trabajador debe cobrarlo en ventanilla'], ok: 1, por: 'En asegurados regulares, el empleador paga el subsidio como paga la remuneración y luego solicita el reembolso a EsSalud.' },
  { q: '¿Qué pasa con un certificado médico de un médico particular?', ops: ['Vale igual que el CITT para todo', 'Se tira', 'Debe canjearse o validarse ante EsSalud para obtener el CITT', 'Solo sirve si lo firma el supervisor'], ok: 2, por: 'EsSalud trabaja con el CITT: el certificado particular se canjea para obtener ese documento.' },
  { q: 'Planillas dice «pagamos cuando EsSalud devuelve». ¿Qué es lo más útil que haces?', ops: ['Aceptarlo: siempre se hizo así', 'Explicar con la norma quién paga y cuándo, y proponer cómo ordenar el reembolso', 'Denunciarlo en el grupo de supervisores', 'Pagarle tú al trabajador'], ok: 1, por: 'Cambiar una práctica antigua requiere la norma y una salida concreta para el miedo de Planillas.' },
  { q: '¿Por dónde solicita hoy el empleador el reembolso del subsidio a EsSalud?', ops: ['Por correo al gerente de EsSalud', 'Por la plataforma ViVa de EsSalud', 'En la municipalidad', 'Por el T-Registro'], ok: 1, por: 'La solicitud de reembolso se hace en la plataforma virtual ViVa de EsSalud.' },
  { q: 'En un expediente de subsidio, ¿qué no debe faltar?', ops: ['Qué días cubre cada certificado, qué se pagó, qué falta y quién hace qué', 'La opinión del supervisor sobre si el trabajador «se hace»', 'El diagnóstico detallado en el asunto del correo', 'Solo la copia del DNI'], ok: 0, por: 'Un buen expediente permite que cualquier persona continúe el trámite sin depender de la memoria de alguien.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 's1', t: '07:20', ch: 'presencial', who: 'hector', titulo: 'La bolsa de papeles', banner: 'assets/foto2/pasillo.webp', lugar: 'Banca de la puerta de Bienestar', show: ['personas', 'confianza', 'tiempo'],
    body: (n, F) => `<p>${F.has('hector_claro') ? 'Don Héctor llegó en la primera combi desde Tumán, como quedaron el lunes.' : 'Don Héctor llegó en la primera combi desde Tumán. El lunes se fue sin entender bien qué pasaba, y su señora lo mandó de vuelta.'} Tiene ceniza de caña en los hombros de la camisa y una bolsa de plástico del mercado Modelo llena de papeles doblados.</p><p>Wilmer, de Planillas, solo te atiende hasta las once. <mark class="clave">Tienes tiempo para dos preguntas</mark> antes de abrir los papeles.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Don Héctor.',
    opts: [
      { id: 'donde', label: '¿Dónde lo operaron y quién le dio cada descanso?', info: '«En el Almanzor, de EsSalud, ahí me dieron el primer papel. Después me dolía mucho y fui donde un traumatólogo particular en Chiclayo, por la Balta. Él me dio diez días más en un papelito de su consultorio.»' },
      { id: 'entrego', label: '¿A quién le entregó los certificados?', info: '«Al supervisor de turno, el ingeniero Cieza. Se los di en la mano, en la garita. No me firmó nada, ¿tenía que firmarme?»' },
      { id: 'casa', label: '¿Cómo están en su casa con la plata de este mes?', info: 'Baja la mirada. «Mi señora vende en la puerta. Mi hijo dejó la universidad este ciclo y está manejando mototaxi de noche. Y nos prestaron… pero eso ya lo estamos viendo.»' },
      { id: 'rodilla', label: '¿Qué le ha dicho el médico sobre su rodilla?', info: '«Que me falta terapia. Que la molienda es pesada, que vamos a ver.» Se le quiebra la voz un segundo y se compone. «Pero yo vuelvo, señorita. Veintidós años.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('casa') || picks.includes('rodilla') ? 3 : 1, calidad: picks.includes('donde') || picks.includes('entrego') ? 3 : 0, tiempo: -1 },
      rel: { hector: picks.includes('casa') ? 1 : 0 },
      cartera: { certificado: picks.includes('donde') ? '10 días con certificado particular, sin canjear' : 'Por revisar en la carpeta', familia: picks.includes('casa') ? 'Hijo dejó la universidad; hubo un préstamo' : 'Por conocer' },
      out: picks.includes('donde') ? 'Anotas en tu libreta: «EsSalud + particular. ¿Se canjeó?». Ya tienes la primera pista.' : 'Don Héctor te alcanza la bolsa con las dos manos. «Ahí está todo, señorita. Creo.»',
      kusi: ['curioso', 'Cada papel tiene su historia…'],
    }),
    rules: [[BP, 'Antes de revisar documentos, pregunta cómo se generaron: quién los emitió y a quién se entregaron.']],
    mirada: {
      ve: 'Un trámite atascado casi nunca tiene una sola causa. Las preguntas sobre el origen de cada papel te dan la pista técnica; las preguntas sobre la casa te dicen cuánto urge.',
      visual: { tipo: 'mensaje', titulo: 'Lo que anotaste', txt: 'Operado en el Almanzor (EsSalud). Diez días más con un médico particular. Entregó todo en la garita, sin cargo. En casa: el hijo dejó la universidad.' },
    },
  },
  {
    id: 's2', t: '08:15', ch: 'documento', who: null, titulo: 'Lo que dice la carpeta', banner: 'assets/esc/planilla.webp', lugar: 'Escritorio de Bienestar', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Despliegas los papeles sobre el escritorio y abres en la laptop la ficha de Don Héctor en el sistema de planillas. El ventilador mueve las hojas; las sujetas con la engrapadora.</p><p>La ficha tiene una nota de Planillas en rojo. <mark class="clave">Algo no cuadra entre lo que dice la ley y lo que se hizo</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal en el expediente.',
    doc: { t: 'Expediente · Llontop Cumpén, Héctor', sub: 'Sistema de planillas + papeles de la bolsa' },
    lines: [
      { id: 'citt', t: 'CITT de EsSalud (Hospital Almanzor Aguinaga) por 30 días, desde la operación.' },
      { id: 'veinte', t: 'Primeros 20 días: pagados por la empresa como remuneración, en la planilla anterior.' },
      { id: 'cero', t: 'Planilla de este mes: días de subsidio registrados, monto pagado S/ 0.00.', bad: LEY, why: 'Desde el día 21 corresponde el subsidio, y el empleador debe pagarlo en la misma oportunidad que la remuneración.' },
      { id: 'nota', t: 'Nota de Planillas: «Pagar cuando EsSalud reembolse».', bad: LEY, why: 'El reembolso es un trámite entre la empresa y EsSalud. El trabajador no tiene que esperarlo para cobrar.' },
      { id: 'particular', t: 'Certificado del consultorio particular por 10 días más, sin canjear.', bad: BP, why: 'EsSalud trabaja con el CITT. Si nadie canjea el certificado particular, esos días quedan sin respaldo para el reembolso.' },
      { id: 'cargo', t: 'Observación: «El trabajador no entregó a tiempo». Sin cargo de recepción ni fecha.', bad: BP, why: 'Culpa a Don Héctor sin prueba. Él entregó en la garita y nadie le dio un cargo.' },
      { id: 'cuenta', t: 'Cuenta de sueldo activa en el banco de siempre.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Cierras la carpeta pensando que el problema es EsSalud. Vas a la reunión con Planillas sin el argumento principal.' : 'Lo ves claro: la empresa debía pagarle el subsidio este mes y no lo hizo porque «espera» a EsSalud. Lo imprimes para llevarlo a Planillas.',
      flags: missLey ? [] : ['error_visto'],
      cartera: { hector: missLey ? 'Atribuido a EsSalud' : 'La empresa no pagó el subsidio en la planilla' },
      pro: { ok: 'Separas dos trámites: el pago al trabajador y el reembolso a la empresa.', risk: 'Si los mezclas, el trabajador termina financiando con su hambre la demora de un trámite que no es suyo.', info: 'Pide que los certificados se reciban siempre con cargo: fecha, hora y firma.' },
      kusi: missLey ? ['preocupado', '¿Y si no era culpa de EsSalud?'] : ['indignado', '¡Le debían su plata desde el día 21!'],
    }),
    rules: [[LEY, 'En asegurados regulares, el empleador paga el subsidio en la misma forma y oportunidad que la remuneración, y luego solicita el reembolso a EsSalud.'], [POL, 'En Sipán, los certificados médicos se entregan en Bienestar o en Planillas, nunca solo en la garita.']],
    mirada: {
      ve: 'Muchas empresas confunden el pago del subsidio con su reembolso. Son dos momentos distintos: primero se le paga a la persona, luego la empresa recupera lo que le corresponde de EsSalud.',
      visual: { tipo: 'linea', titulo: 'Dos trámites, no uno', hitos: [['Días 1 a 20', 'La empresa paga la remuneración'], ['Desde el día 21', 'La empresa paga el subsidio en la planilla'], ['Después', 'La empresa pide el reembolso a EsSalud'], ['Hoy', 'Nadie pagó: «esperamos a EsSalud»']] },
      normas: [{ ley: 'Ley 26790 y procedimiento de EsSalud (gob.pe)', dice: 'Desde el día 21 de incapacidad corresponde el subsidio. En asegurados regulares, el empleador lo paga en la misma oportunidad que la remuneración y luego solicita el reembolso.', practica: 'La nota «pagar cuando EsSalud reembolse» deja a Don Héctor sin ingreso por un trámite que no le toca.' }],
    },
  },
  {
    id: 's3', t: '10:05', ch: 'presencial', who: null, titulo: 'Wilmer, de Planillas', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Planillas', show: ['cumplimiento', 'confianza', 'personas'],
    body: (n, F) => `<p>Wilmer Sandoval tiene 58 años, es de Sullana y lleva 26 en Sipán. Tiene tres pantallas, un termo de café y una estampita del Señor Cautivo de Ayabaca pegada al monitor. ${F.has('error_visto') ? 'Le muestras la planilla impresa.' : 'Le preguntas por qué el subsidio no sale.'}</p><p>«Mire, señorita. El año pasado EsSalud nos observó once reembolsos y la empresa se los comió. Al jefe de Planillas lo jalonearon en el comité. Desde ahí <mark class="clave">pagamos cuando EsSalud devuelve</mark>. No es maldad, es que nadie quiere volver a perder esa plata».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que el pago al trabajador no puede esperar al reembolso, y ofrecerle que Bienestar arme y revise cada expediente antes de que él lo suba a ViVa, para que no vuelvan a observarlos.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 4, tiempo: -3 }, flags: ['subsidio_pagado'], cartera: { planillas: 'Pago en la planilla; Bienestar revisa expedientes', hector: 'Subsidio cargado en la planilla de esta quincena' },
          out: 'Wilmer se rasca la cabeza un buen rato. «Si ustedes me pasan el expediente limpio, yo lo pago y lo subo.» Abre la ficha de Don Héctor y empieza a cargar los días.',
          pro: { ok: 'No solo dices que está mal: te haces cargo de la causa de su miedo, los expedientes observados.', risk: 'Te acabas de sumar trabajo para todos los casos de subsidio de la planta.', info: 'Un expediente completo antes de subirlo a ViVa reduce las observaciones.' },
          kusi: ['celebra', '¡Wilmer no era el villano: tenía miedo!'] } },
      { id: 'b', label: 'Respetar su forma de trabajo y pedirle a Nelly un préstamo del fondo de emergencia para Don Héctor mientras llega el reembolso.',
        res: { q: 'aceptable', fx: { personas: 2, cumplimiento: -3 }, flags: ['subsidio_prestamo'], cartera: { planillas: 'Se mantiene «pagar cuando EsSalud devuelva»', hector: 'Préstamo del fondo mientras espera' },
          out: 'Nelly aprueba el préstamo por teléfono. Don Héctor tendrá algo esta semana. Pero firmará un préstamo por una plata que la empresa ya le debía, y los otros casos seguirán igual.',
          pro: { ok: 'Alivias la urgencia de la familia hoy.', risk: 'Convertiste una deuda de la empresa en una deuda del trabajador.' },
          kusi: ['pensando', 'Le prestaron su propia plata…'] } },
      { id: 'c', label: 'Escribir un correo a la gerente de Recursos Humanos, con copia a Wilmer, diciendo que Planillas incumple la ley con los subsidios.',
        res: { q: 'riesgosa', fx: { cumplimiento: 3, confianza: -5, personas: -1 }, flags: ['planillas_dolida'], cartera: { planillas: 'Escalado a Gerencia; relación tensa' },
          out: 'La gerente responde en una hora: «Wilmer, regularízalo hoy». Wilmer lo carga sin mirarte. A la salida le dice a otra analista, sin bajar la voz: «Tres días tiene y ya me acusa».',
          pro: { ok: 'Consigues el pago rápido.', risk: 'Expusiste a alguien que tenía razones y que necesitarás todo el mes.', info: 'Antes de escalar, intenta resolver el miedo que sostiene la mala práctica.' },
          kusi: ['preocupado', 'Ganaste el caso, perdiste un aliado.'] } },
    ],
    rules: [[LEY, 'El subsidio se paga al trabajador en la oportunidad de su remuneración; el reembolso es un trámite posterior entre la empresa y EsSalud.'], [BP, 'Para cambiar una práctica, atiende el miedo que la sostiene.']],
    mirada: {
      ve: 'Las malas prácticas casi siempre tienen una historia: alguien perdió plata, alguien fue regañado. Si solo citas la ley, la práctica vuelve. Si además resuelves la causa, cambia de verdad.',
      visual: { tipo: 'balanza', a: { t: 'El miedo de Planillas', items: ['Once reembolsos observados', 'Un jefe regañado', 'Plata que la empresa perdió'] }, b: { t: 'Lo que vive Don Héctor', items: ['Un mes sin ingreso', 'Un hijo fuera de la universidad', 'Un préstamo que no debía pedir'] } },
    },
  },
  {
    id: 's4', t: '11:30', ch: 'llamada', who: null, titulo: 'Tres llamadas', banner: 'assets/foto/llamada.webp', lugar: 'Escritorio de Bienestar', show: ['calidad', 'personas', 'etica'],
    body: () => `<p>Falta resolver los diez días del certificado particular. Haces tres llamadas desde el anexo de Bienestar, con el celular cargando porque el tuyo se quedó en 8 %.</p><p>En la central de EsSalud <mark class="clave">la música de espera dura dieciocho minutos</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Central de EsSalud · orientación al asegurado', 'Después de 18 minutos de espera', 'La operadora te explica que el reembolso lo solicita el empleador por ViVa, y que el certificado particular debe canjearse para obtener el CITT. «El asegurado tiene que acercarse con su DNI, el certificado original y su informe médico.»'],
      ['Consultorio del traumatólogo · Av. Balta, Chiclayo', 'Contesta la secretaria', '«El informe médico se lo damos al paciente o a quien venga con su autorización firmada. Por teléfono no le puedo dar nada del paciente, disculpe.»'],
      ['Rosa Ñiquén · esposa de Don Héctor', 'Contesta con ruido de mototaxis', '«Sí señorita, él ya me contó. Mire, le digo nomás a usted: hace dos semanas un señor nos prestó al “gota a gota”. Viene todas las mañanas a cobrar. Héctor no quiere que nadie sepa.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué haces ahora?',
    choices: [
      { id: 'a', label: 'Pedir la camioneta de la empresa para que Don Héctor vaya el viernes a canjear su certificado, y anotar lo del préstamo para conversarlo con calma en la visita, sin contárselo a nadie más.',
        res: { q: 'buena', fx: { calidad: 4, personas: 4, etica: 3, tiempo: -2 }, flags: ['citt_en_marcha', 'gota_a_gota'], cartera: { certificado: 'Canje el viernes, con movilidad de la empresa', familia: 'Préstamo «gota a gota»: conversarlo en la visita', visita: 'Viernes, después del canje' },
          out: 'Logística te da la camioneta de las 8. Don Héctor no tendrá que ir parado en la combi con la rodilla operada. Lo del préstamo queda en tu libreta, con una sola palabra: «viernes».',
          pro: { ok: 'Quitas una barrera concreta y guardas lo que te confiaron para el lugar y el momento adecuados.', info: 'Los préstamos «gota a gota» suelen cobrar intereses muy altos y presionar a las familias. Averigua qué alternativas formales existen.' },
          kusi: ['feliz', 'Un problema a la vez, y con cuidado.'] } },
      { id: 'b', label: 'Ir tú misma al consultorio con copias de su DNI para sacar el informe y adelantar el canje.',
        res: { q: 'riesgosa', fx: { tiempo: -3, etica: -3, cumplimiento: -2 }, flags: ['gota_a_gota'], cartera: { certificado: 'Intentaste el trámite sin autorización' },
          out: 'La secretaria te mira con desconfianza: «¿Usted es familiar?». Vuelves sin informe y con una hora perdida en el tráfico de la Balta.',
          pro: { ok: 'Quieres ahorrarle el viaje.', risk: 'La información médica es de Don Héctor. Sin su autorización, no puedes pedirla.' },
          kusi: ['preocupado', 'Querer ayudar no te da permiso.'] } },
      { id: 'c', label: 'Llamar a Don Héctor y decirle que vaya a EsSalud por su cuenta cuando pueda, y avisarle a Nelly lo del préstamo por el grupo.',
        res: { q: 'riesgosa', fx: { personas: -3, etica: -4 }, rel: { hector: -1 }, cartera: { certificado: 'Por cuenta del trabajador' },
          out: 'Don Héctor dice «ya, señorita» con voz apagada. Esa noche Rosa lee en el celular de Nelly, por error, el mensaje del grupo. Ya no te va a contar nada más.',
          pro: { ok: 'Le das la información correcta.', risk: 'Lo que Rosa te confió no era para un grupo. Y el viaje sigue siendo una barrera.' },
          kusi: ['triste', 'Rosa confió en ti…'] } },
    ],
    rules: [[LEY, 'El certificado particular se canjea ante EsSalud para obtener el CITT; el asegurado debe autorizar el uso de su información médica.'], [LEY, 'Los datos de salud son datos sensibles (Ley 29733).']],
    mirada: {
      ve: 'En bienestar, un trámite se traba muchas veces por cosas pequeñas: un viaje que la persona no puede hacer, una firma que falta. Y a veces una llamada técnica te revela algo que no estabas buscando.',
      visual: { tipo: 'flujo', titulo: 'Los diez días sin respaldo', pasos: ['Certificado particular', 'Autorización de Don Héctor', 'Canje en EsSalud', 'CITT', 'Reembolso por ViVa'], aqui: 1 },
    },
  },
  {
    id: 's5', t: '13:20', ch: 'documento', who: null, titulo: 'La ruta en la pizarra', banner: 'assets/esc/camino.webp', lugar: 'Comedor de empleados', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Arroz con pato y chicha morada. Comes la mitad: el comedor cierra a las dos y tienes que dejar escrita la ruta del trámite para que Nelly la revise.${F.has('subsidio_pagado') ? ' Wilmer te pidió «la secuencia, para pegarla en mi pared».' : ''}</p><p>Abres una servilleta y la conviertes en pizarra. <mark class="clave">El orden importa: si un paso se salta, el siguiente se cae</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la ruta de un subsidio por incapacidad temporal.', boton: 'Guardar la ruta',
    items: [
      { id: 'dias', t: 'Revisar qué días cubre cada certificado', por: 'Los 30 días del CITT y los 10 del particular.' },
      { id: 'canje', t: 'Canjear el certificado particular para obtener su CITT', por: 'Con el asegurado, su DNI y su informe médico.' },
      { id: 'pago', t: 'Pagar el subsidio en la planilla, como la remuneración', por: 'El trabajador no espera al reembolso.' },
      { id: 'plame', t: 'Declarar esos días como subsidiados en la PLAME', por: 'Para que la declaración cuadre con lo pagado.' },
      { id: 'viva', t: 'Solicitar el reembolso a EsSalud por ViVa', por: 'Con el expediente completo.' },
      { id: 'segui', t: 'Hacer seguimiento y archivar el expediente', por: 'Para que no se pierda si alguien se va.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 1 : -1 },
        out: q === 'buena' ? 'Le tomas foto a la servilleta y se la mandas a Nelly. Ella responde con un pulgar y: «Esto lo plastificamos».' : 'Nelly te corrige por WhatsApp: «Ojo, primero se le paga a la persona. El reembolso es lo último».',
        pro: { ok: 'Una ruta clara evita que el pago al trabajador dependa de quién esté de turno.', info: 'Pega la ruta donde se reciben los certificados, no solo en Planillas.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Ruta perfecta!' : 'Primero la persona, después el reembolso.'],
      };
    },
    rules: [[BP, 'El pago al trabajador va antes que el reembolso; el reembolso no condiciona el pago.']],
    mirada: {
      ve: 'Cuando un proceso vive solo en la cabeza de una persona, se rompe cuando esa persona se enferma, se va o se cansa. Escribirlo es una forma concreta de cuidar a los que vienen.',
      visual: { tipo: 'flujo', titulo: 'Ruta del subsidio', pasos: ['Días por certificado', 'Canje a CITT', 'Pago en planilla', 'PLAME', 'Reembolso ViVa', 'Archivo'] },
    },
  },
  {
    id: 's6', t: '15:40', ch: 'sistema', who: null, titulo: 'El expediente', banner: 'assets/foto/revisa.webp', lugar: 'Sistema de planillas · se cuelga cada diez minutos', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El sistema de planillas se cuelga cada vez que alguien de Contabilidad genera un reporte. ${F.has('planillas_dolida') ? 'Wilmer no te avisa cuando vuelve: te enteras porque deja de escucharse su resoplido.' : 'Wilmer te grita desde su oficina cada vez que vuelve: «¡Ya, ya, ya entra!».'}</p><p>Nelly quiere un expediente que sirva de modelo. <mark class="clave">Que cualquiera pueda continuarlo sin llamarte</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del expediente.', boton: 'Guardar el expediente',
    bloques: [
      { id: 'dias', t: 'Qué días y con qué respaldo', n: 2, ops: [
        { id: 'd1', t: '30 días con CITT de EsSalud desde la operación.', ok: true, por: 'Dato verificable.' },
        { id: 'd2', t: '10 días con certificado particular, pendiente de canje el viernes.', ok: true, por: 'Dice qué falta y cuándo se resuelve.' },
        { id: 'd3', t: 'Diagnóstico completo y medicación que toma.', ok: false, por: 'No hace falta para el trámite y es un dato sensible.' },
      ] },
      { id: 'pago', t: 'Qué se pagó y qué no', n: 1, ops: [
        { id: 'p1', t: 'Días 1 a 20 pagados como remuneración. Subsidio desde el día 21: monto según cálculo de Planillas.', ok: true, por: 'No inventas el monto: lo calcula quien tiene la base.' },
        { id: 'p2', t: 'Subsidio: aproximadamente lo mismo que su sueldo.', ok: false, por: 'Una cifra al ojo en un expediente genera reclamos.' },
      ] },
      { id: 'quien', t: 'Quién hace qué', n: 2, ops: [
        { id: 'q1', t: 'Don Héctor: canje del certificado el viernes, con movilidad de la empresa.', ok: true, por: 'Tarea concreta con fecha.' },
        { id: 'q2', t: 'Planillas: pago en la planilla y solicitud de reembolso por ViVa con el expediente completo.', ok: true, por: 'Deja claro que el pago no espera.' },
        { id: 'q3', t: 'Supervisor: confirmar si el trabajador de verdad está enfermo.', ok: false, por: 'El certificado médico ya lo acredita. No es tarea del supervisor.' },
      ] },
      { id: 'leccion', t: 'Lo que se corrige', n: 1, ops: [
        { id: 'l1', t: 'Los certificados se reciben con cargo, en Bienestar o Planillas, no en la garita.', ok: true, por: 'Evita el «no entregó a tiempo».' },
        { id: 'l2', t: 'El trabajador debe ser más responsable con sus papeles.', ok: false, por: 'Don Héctor sí entregó. Falló el circuito.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 }, rel: { nelly: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['expediente_ordenado'] : [],
        cartera: { hector: q === 'riesgosa' ? 'Expediente con huecos' : 'Expediente completo, con responsables' },
        out: q === 'buena' ? 'Nelly lo lee desde Chiclayo: «Este va a ser el modelo para los otros seis casos de descanso largo».' : q === 'aceptable' ? 'Nelly responde: «Bien, pero saca lo que no hace falta y no pongas montos al ojo».' : 'Nelly responde: «Esto tiene datos de más y responsables de menos. Lo vemos mañana».',
        pro: { ok: 'Un buen expediente separa lo necesario de lo sensible y deja tareas con nombre y fecha.', risk: 'Un monto al ojo o una opinión del supervisor pueden convertirse en un reclamo.', info: 'Guarda la versión con diagnóstico solo en la carpeta física de Bienestar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un expediente que se entiende solo!' : '¿Qué sobra y qué falta?'],
      };
    },
    rules: [[LEY, 'Los datos de salud son datos sensibles: en el expediente de trámite va solo lo necesario (Ley 29733).'], [BP, 'Un expediente debe poder continuarlo otra persona sin depender de tu memoria.']],
    mirada: {
      ve: 'El expediente es el entregable más humilde y más útil de bienestar. Bien hecho, protege al trabajador cuando tú no estás y protege a la empresa cuando llega la observación.',
      visual: { tipo: 'embudo', titulo: 'Qué va en cada lugar', niveles: [['Expediente de trámite: días, pagos, tareas', 3], ['Carpeta física de Bienestar: el caso completo', 2], ['Nadie más', 0]] },
    },
  },
  {
    id: 's7', t: '17:20', ch: 'whatsapp', who: null, titulo: 'Para Don Héctor', banner: 'assets/esc/reloj.webp', lugar: 'Paradero de la planta', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Esperas la movilidad de regreso a Chiclayo bajo el último sol, que todavía quema. Don Héctor no lee bien los mensajes largos: su hijo se los lee en la noche, antes de salir con la mototaxi.${F.has('subsidio_prestamo') ? ' Hoy tienes que explicarle también lo del préstamo del fondo.' : ''}</p><p><mark class="clave">Corto, claro y sin palabras de oficina</mark>.</p>`,
    type: 'compose', enviaA: 'hector', para: 'Para: Don Héctor Llontop', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo abres', ops: [
        { id: 'a1', t: 'Don Héctor, buenas tardes. Ya revisé todo su caso.', ok: true, por: 'Cálido y directo.' },
        { id: 'a2', t: 'Estimado colaborador: le informamos el estado de su trámite.', ok: false, por: 'Suena a carta de banco.' },
      ] },
      { id: 'que', t: 'Qué pasó', ops: [
        { id: 'q1', t: 'Usted no hizo nada mal: la empresa tenía que pagarle el subsidio y lo estaba esperando de EsSalud. Ya lo estamos corrigiendo.', ok: true, por: 'Le quitas la culpa y le dices qué pasa.' },
        { id: 'q2', t: 'Hubo un retraso administrativo en el reembolso del subsidio por incapacidad temporal.', ok: null, por: 'Es cierto, pero no se entiende.' },
      ] },
      { id: 'toca', t: 'Qué le toca', ops: [
        { id: 't1', t: 'El viernes a las 8 lo recoge la camioneta para ir a EsSalud. Lleve su DNI y el papel del doctor particular.', ok: true, por: 'Una tarea, una hora, dos cosas que llevar.' },
        { id: 't2', t: 'Debe regularizar su certificado particular a la brevedad.', ok: false, por: 'No dice dónde, cuándo ni cómo.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Después paso por su casa a conversar con usted y la señora Rosa.', ok: true, por: 'Anuncias la visita sin sorpresa.' },
        { id: 'c2', t: 'Le aseguro que el viernes ya tiene su plata completa.', ok: false, por: 'No prometas lo que depende de otros.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'q1', 't1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { hector: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['hector_informado'] : [],
        cartera: { visita: q === 'buena' ? 'Viernes, anunciada y esperada' : 'Viernes, por confirmar' },
        out: q === 'buena' ? 'A las nueve de la noche llega un audio. Es el hijo de Don Héctor: «Señorita, mi papá dice gracias. Que el viernes lo espera listo».' : sel.cierre === 'c2' ? 'Don Héctor responde con un «Dios le pague». Ahora el viernes tiene que llegar la plata completa, o perderás su confianza.' : 'Don Héctor responde «ok». Al día siguiente llama a Nelly para preguntarle qué quisiste decir.',
        pro: { ok: 'Le quitas la culpa, le das una sola tarea con hora y no prometes lo que no controlas.', info: 'Si la persona no lee bien, un audio corto también es buena idea.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Corto, claro y con cariño. ¡Qué bacán!' : '¿Lo entendería su hijo a las once de la noche?'],
      };
    },
    rules: [[BP, 'Comunica en palabras de la persona: qué pasó, qué le toca y qué viene, sin prometer lo que no depende de ti.']],
    mirada: {
      ve: 'Un trabajador que no recibe su pago suele pensar que hizo algo mal o que lo van a despedir. El primer alivio es quitarle esa culpa. El segundo, darle una sola tarea clara.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje que se entiende', txt: 'Don Héctor, buenas tardes. Ya revisé todo su caso. Usted no hizo nada mal: la empresa tenía que pagarle el subsidio y lo estaba esperando de EsSalud. Ya lo estamos corrigiendo. El viernes a las 8 lo recoge la camioneta para ir a EsSalud. Lleve su DNI y el papel del doctor particular. Después paso por su casa a conversar con usted y la señora Rosa.' },
    },
  },
];
