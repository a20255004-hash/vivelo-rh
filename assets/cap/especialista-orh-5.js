// Especialista en RR.HH. de entidad pública · Capítulo 5 · «El reclamo» · Semana 1, viernes.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas:
// - TUO de la Ley 27806, Ley de Transparencia y Acceso a la Información Pública (D.S. 021-2019-JUS), art. 11:
//   la entidad atiende la solicitud en un plazo no mayor de diez días hábiles; puede prorrogarlo de forma excepcional
//   comunicando una fecha fundamentada; sin respuesta, el solicitante puede considerar denegado su pedido y apelar.
//   https://cdn.www.gob.pe/uploads/document/file/3763313/Resoluci%C3%B3n%20N%C2%B0%20002487-2021-JUS-TTAIP-SEGUNDA%20SALA.pdf.pdf
//   https://cdn.www.gob.pe/uploads/document/file/5587337/4962848-resolucion-n-003835-2023-jus-ttaip-segunda-sala.pdf
// - Ley 29733, Ley de Protección de Datos Personales: los datos personales de terceros (domicilio, teléfono, DNI)
//   se protegen al entregar documentos.
// - D.Leg. 1057, art. 1 (principios de méritos y capacidad e igualdad de oportunidades; de ahí el concurso público), ya citado en el capítulo 1.

export const CAP = {
  n: 5, titulo: 'El reclamo', dia: 'Semana 1, viernes', foto: 'assets/esc/dudas.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '08:00', fin: '17:30', cierreHora: '17:15',
  apertura: 'Viernes. El primer viernes en la ORH. Afuera, en la plaza de armas, ya arman el estrado para la serenata del fin de semana y suenan las pruebas de sonido. En mesa de partes hay cola desde las siete.', boton: 'Ir a mesa de partes',
  kusi: 'Un reclamo no es un ataque: es alguien que quiere entender. Respóndele con papeles, no con nervios.',
  lead: 'Corregiste una respuesta que no se sostenía, ordenaste la atención de una solicitud de información, entregaste lo público cuidando lo privado y te preparaste para la llegada de la Contraloría.',
  reflexion: '¿Qué te hace confiar en una institución: que nunca se equivoque o que te explique cuando lo hace?',
  siguiente: { n: 6, titulo: 'El pariente', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'reclamo', p: 'Escrito de Eder Rojas', j: 'Mesa de partes', d: 0, e: 'Ingresó hoy' },
  { id: 'acceso', p: 'Solicitud de acceso a la información', j: 'ORH · Responsable de transparencia', d: 0, e: 'Plazo: diez días hábiles' },
  { id: 'oci', p: 'Oficio de la Contraloría', j: 'Comisión de control', d: 0, e: 'Llega el martes' },
  { id: 'concurso', p: 'Concurso CAS: 12 plazas', j: 'Marisol · ORH', d: 0, e: 'Bases en Asesoría Legal' },
];

export const FUTURO = {
  respuesta_fundada: ['Reescribiste la respuesta a Eder con fundamentos y plazos.', 'Eder la mostrará en la publicación del capítulo 9.'],
  respuesta_floja: ['Dejaste salir una respuesta a Eder sin fundamentos.', 'Eder apelará y la auditora lo verá en el capítulo 8.'],
  acceso_parcial: ['Entregaste los puntajes y requisitos del ganador, con sus datos personales protegidos.', 'Eder descubrirá algo raro en esos puntajes en el capítulo 8.'],
  acceso_total: ['Entregaste el CV completo del ganador, con su domicilio y teléfono.', 'El ganador reclamará a la ORH en el capítulo 7.'],
  acceso_negado: ['Negaste toda la información del ganador por datos personales.', 'Eder apelará la denegatoria y la auditora lo sabrá en el capítulo 7.'],
  legajos_listos: ['Preparaste primero las actas y la matriz de puntajes del CAS 004.', 'La auditora empezará por ahí en el capítulo 7.'],
  viernes_tarde: ['Te quedaste hasta tarde el viernes ordenando legajos.', 'El lunes llegarás cansada al capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
  mama: { n: 'Mamá', sub: 'Familia', c: '#B5462C' },
};

export const WSP = [
  { chat: 'grupo', t: '08:10', de: 'Don Segundo', txt: 'Llegó un oficio de Contraloría. Lo tiene Marisol. Cara de velorio, colegas 😬' },
  { chat: 'eder', t: '09:00', de: 'Eder', txt: 'Señorita, presenté un escrito. No es contra usted. Es que quiero ver los puntajes del que ganó mi plaza.', si: 'eder_atendido' },
  { chat: 'eder', t: '09:00', de: 'Eder', txt: 'Ya presenté mi queja por escrito. Que conste que nadie me explicó nada.', si: 'eder_ignorado' },
  { chat: 'marisol', t: '13:00', de: 'Marisol', txt: 'El concejo aprobó el presupuesto de la ORH. El regidor Tello votó en contra, pero pasó igual.', si: 'lista_rechazada' },
  { chat: 'mama', t: '17:20', de: 'Mamá', txt: 'Hijita, ¿vienes a comer? Hice cuy frito para tu primera semana ❤️' },
];

export const CORREOS = [
  { t: '08:15', de: 'Mesa de partes', para: 'ORH', asunto: 'Documento ingresado: Eder Rojas · CAS 004-2026', html: '<p>Se deriva el escrito del Sr. Eder Rojas, quien solicita copia de su evaluación curricular, de los puntajes finales y de los documentos con los que el ganador de la plaza de técnico en informática acreditó los requisitos.</p>' },
  { t: '08:30', de: 'Marisol Chávez', para: 'Especialista de la ORH', asunto: 'Oficio de la Contraloría', html: '<p>Llegó un oficio: una comisión de control revisará desde el martes los legajos de los concursos CAS 003 y 004-2026. Necesitan actas, matrices de puntajes, expedientes de ganadores y publicaciones.</p><p>No es para asustarse. Es para tener todo en orden. Marisol</p>' },
  { t: '14:00', de: 'Mesa de partes', para: 'ORH', asunto: 'Queja: Rosmery Cerdán', html: '<p>Se deriva la queja de la Sra. Rosmery Cerdán, quien señala que «en la ORH revisan los papeles de algunos postulantes antes del concurso y a otros no».</p>', si: 'eder_privilegio' },
];

export const QUIZ = [
  { q: '¿En qué plazo debe atenderse una solicitud de acceso a la información pública?', ops: ['Cuando haya tiempo', 'En un plazo no mayor de diez días hábiles, prorrogable solo por causa justificada y comunicada', 'En 30 días calendario', 'En 24 horas'], ok: 1, por: 'El art. 11 del TUO de la Ley 27806 fija diez días hábiles y una prórroga excepcional fundamentada.' },
  { q: 'Un postulante pide el CV del ganador. ¿Qué le entregas?', ops: ['Todo, con domicilio y teléfono', 'Nada: son datos personales', 'Los documentos que acreditan los requisitos y los puntajes, protegiendo los datos personales', 'Solo el nombre'], ok: 2, por: 'Lo que sustenta el resultado de un concurso es público; el domicilio o el teléfono de una persona no lo son.' },
  { q: '¿Qué le falta a una respuesta que dice «su reclamo es improcedente porque el concurso ya terminó»?', ops: ['Nada', 'Los fundamentos: qué se evaluó, con qué criterio y qué puede hacer el postulante', 'Una firma más', 'Un sello'], ok: 1, por: 'Una respuesta sin fundamentos no explica nada y suele terminar en otra queja.' },
  { q: 'Llega un oficio de la Contraloría. ¿Qué haces primero?', ops: ['Esconder lo que falta', 'Ordenar las actas, puntajes y expedientes pedidos, y anotar lo que no encuentres', 'Llamar al alcalde', 'Esperar a que lleguen'], ok: 1, por: 'Lo que falta también se informa: esconderlo es peor que no tenerlo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '08:40', ch: 'documento', who: null, titulo: 'La respuesta de Don Segundo', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>${F.has('eder_ignorado') ? 'Eder presentó una queja formal: dice que el lunes nadie le explicó nada y que el concurso «estaba arreglado».' : 'Eder pide copia de su evaluación y de los puntajes del ganador de su plaza.'} Don Segundo, servicial como siempre, ya le preparó una respuesta «para salir del paso».</p><p>«Es la que usábamos con JR», dice. <mark class="clave">Antes de firmarla, léela</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede salir así en la respuesta.',
    doc: { t: 'Carta N.° 112-2026-ORH (borrador)', sub: 'Asunto: escrito del Sr. Eder Rojas' },
    lines: [
      { id: 'improc', t: 'Su pedido es improcedente porque el concurso CAS 004-2026 ya concluyó.', bad: LEY, why: 'Que el concurso haya terminado no quita el derecho a pedir información sobre él. La entidad debe atender la solicitud (TUO de la Ley 27806).' },
      { id: 'plazo', t: 'La información se le entregará cuando la oficina tenga disponibilidad.', bad: LEY, why: 'El plazo es de diez días hábiles. Solo se prorroga por causa justificada, comunicando una fecha (art. 11).' },
      { id: 'motivo', t: 'Fue descalificado porque su constancia de experiencia no indicaba la fecha de término, como exigían las bases.' },
      { id: 'nadie', t: 'Le recordamos que ningún postulante ha reclamado antes, por lo que el proceso fue correcto.', bad: BP, why: 'Que nadie haya reclamado no prueba nada. Es un argumento que suena a defensa, no a explicación.' },
      { id: 'copia', t: 'Se adjunta copia de su ficha de evaluación curricular.' },
      { id: 'tono', t: 'Se le exhorta a abstenerse de presentar escritos reiterativos.', bad: BP, why: 'Es su primer escrito formal. Esa frase intimida a un ciudadano que tiene derecho a preguntar.' },
      { id: 'firma', t: 'Atentamente, Oficina de Recursos Humanos.', duda: 'Conviene que firme una persona con su cargo: así el ciudadano sabe a quién dirigirse.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'La carta sale con una frase que niega un derecho. Eder la va a leer tres veces.' : `Reescribes la carta: motivo de la descalificación, copia de su ficha, el plazo de ley para lo demás${hitsBp ? ' y un tono que no intimida' : ''}. Don Segundo la lee y se rasca la cabeza: «Así nunca las hacíamos. Pero así se entiende».`,
      flags: [missLey ? 'respuesta_floja' : 'respuesta_fundada'], rel: { eder: missLey ? -1 : 1 },
      cartera: { reclamo: missLey ? 'Respuesta enviada sin fundamentos' : 'Respuesta fundamentada enviada' },
      pro: { ok: 'Una respuesta explica qué se evaluó, con qué criterio y qué puede hacer la persona.', risk: 'Las respuestas de plantilla generan más quejas que las que cierran.', info: 'Firma con nombre y cargo: el ciudadano sabe a quién escribir.' },
      kusi: missLey ? ['preocupado', 'Esa carta va a volver… con apelación.'] : ['celebra', '¡Respuesta con fundamento!'],
    }),
    rules: [[LEY, 'TUO de la Ley 27806, art. 11: la solicitud de acceso a la información se atiende en un plazo no mayor de diez días hábiles.']],
    mirada: {
      ve: 'Las cartas de plantilla protegen a la oficina por un rato, pero dejan al ciudadano igual de confundido. Una buena respuesta es la que la persona puede entender sin abogado.',
      visual: { tipo: 'cambio', titulo: 'De la plantilla a la respuesta', pares: [['Improcedente: ya concluyó', 'Motivo y criterio de la evaluación'], ['Cuando haya disponibilidad', 'Dentro del plazo de ley'], ['Absténgase de escritos', 'Puede pedir lo que necesite'], ['Firma: ORH', 'Nombre y cargo']] },
      normas: [{ ley: 'TUO de la Ley 27806 (D.S. 021-2019-JUS), art. 11', dice: 'La entidad atiende la solicitud en un plazo no mayor de diez días hábiles. Solo puede prorrogarlo de manera excepcional, comunicando una fecha fundamentada.', practica: 'Que el concurso haya terminado no cambia el plazo ni el derecho a pedir.' }],
    },
  },
  {
    id: 'e2', t: '10:00', ch: 'documento', who: null, titulo: 'La ruta de la solicitud', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Mesa grande de la ORH', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: () => `<p>La solicitud de Eder tiene un sello de mesa de partes: ingresó ayer a las 4:52. Marisol te explica que la municipalidad tiene un responsable de transparencia, pero <mark class="clave">quien tiene los papeles es la ORH</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para atender la solicitud.', boton: 'Guardar la ruta',
    items: [
      { id: 'fecha', t: 'Anotar la fecha de ingreso y calcular el vencimiento', por: 'El plazo corre desde que ingresó, no desde que lo leíste.' },
      { id: 'que', t: 'Identificar qué documentos pide y dónde están', por: 'Ficha de Eder, puntajes finales y expediente del ganador.' },
      { id: 'separar', t: 'Separar lo público de los datos personales de terceros', por: 'El domicilio o el teléfono del ganador no son información pública.' },
      { id: 'copias', t: 'Preparar las copias, con los datos personales tachados', por: 'Se entrega lo que sustenta el resultado.' },
      { id: 'entregar', t: 'Entregar al responsable de transparencia, con cargo, antes del vencimiento', por: 'Que quede prueba de que se cumplió el plazo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 2 : 0 },
        cartera: { acceso: q === 'buena' ? 'Ruta clara: vence en diez días hábiles' : 'Ruta por ajustar' },
        out: q === 'buena' ? 'Anotas el vencimiento en la pizarra con plumón rojo. Marisol le saca foto: «Así lo vamos a hacer siempre».' : 'Marisol cambia un paso de lugar: «Primero la fecha. Si no sabes cuándo vence, lo demás no importa».',
        pro: { ok: 'Saber cuándo vence y qué es público ordena todo lo demás.', info: 'Si no llegas, la prórroga se comunica con fecha y motivo. El silencio no es una opción.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? 'Plazo en la pizarra. ¡Bacán!' : 'La fecha va primero.'],
      };
    },
    mirada: {
      ve: 'El derecho de acceso a la información es la forma en que cualquier ciudadano puede revisar al Estado. Atenderlo bien, y a tiempo, es parte de la confianza en los concursos.',
      visual: { tipo: 'linea', titulo: 'Diez días hábiles', hitos: [['Día 1', 'Ingreso por mesa de partes'], ['Día 3', 'Documentos ubicados'], ['Día 6', 'Copias con datos protegidos'], ['Antes del día 10', 'Entrega con cargo']] },
    },
  },
  {
    id: 'e3', t: '11:15', ch: 'presencial', who: 'eder', titulo: 'El CV del ganador', banner: 'assets/foto/cv-mano.webp', lugar: 'Ventanilla de la ORH', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Eder vino en persona a preguntar por su escrito. ${F.has('eder_ignorado') ? 'Está tenso: «Esta vez no me voy sin respuesta».' : 'Te saluda por tu nombre.'} Tienes en la mano el expediente del ganador de su plaza: un técnico de Baños del Inca, con su CV, su DNI escaneado, su domicilio y su celular.</p><p>«Solo quiero comparar. <mark class="clave">Si él era mejor, lo acepto</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Entregar la ficha de puntajes del ganador y los documentos con los que acreditó cada requisito, tachando DNI, domicilio y teléfono.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, personas: 3 }, rel: { eder: 1 }, flags: ['acceso_parcial'], cartera: { acceso: 'Entregado: puntajes y requisitos, datos personales protegidos' },
          out: 'Eder lee en silencio. Luego frunce el ceño: «¿Y estos diez puntos de bonificación? Él no me dijo que era licenciado del Ejército». Tú tampoco lo sabías. Lo anotas.',
          pro: { ok: 'Entregas lo que sustenta el resultado y proteges lo que es privado.', info: 'Revisa tú también lo que Eder notó: él acaba de ver algo que nadie miró.' },
          kusi: ['curioso', 'Transparencia… y una pregunta nueva.'] } },
      { id: 'b', label: 'Entregarle el expediente completo, tal cual: es información de un concurso público.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, etica: -3, personas: 1 }, rel: { eder: 1 }, flags: ['acceso_total'], cartera: { acceso: 'Entregado completo, con datos personales' },
          out: 'Eder se lleva copias con el domicilio y el celular del ganador. Esa misma tarde, el ganador recibe un mensaje de un número desconocido.',
          pro: { ok: 'Eres transparente.', risk: 'Lo público es lo que sustenta el resultado, no la dirección ni el teléfono de una persona (Ley 29733).' },
          kusi: ['preocupado', 'Transparente con lo ajeno, no.'] } },
      { id: 'c', label: 'Negarle los documentos del ganador. Son de un tercero y no quieres meterte en problemas.',
        res: { q: 'aceptable', fx: { cumplimiento: -1, personas: -3, etica: 1 }, rel: { eder: -1 }, flags: ['acceso_negado'], cartera: { acceso: 'Negado lo del ganador; entregada solo la ficha de Eder' },
          out: 'Eder se lleva solo su ficha. «Entonces sí había algo que esconder.» Te dice que va a apelar.',
          pro: { ok: 'Proteges al tercero.', risk: 'Negar todo lo que sustenta un resultado público alimenta la sospecha y puede terminar en una apelación.' },
          kusi: ['pensando', 'Cuidaste los datos… y cerraste la puerta.'] } },
    ],
    rules: [[LEY, 'Ley 29733: los datos personales de terceros (domicilio, teléfono) se protegen.'], [LEY, 'TUO de la Ley 27806: la información sobre cómo se decidió un concurso público se entrega a quien la pida.']],
    mirada: {
      ve: 'La transparencia y la privacidad no son enemigas. En un concurso, lo que permite comparar (puntajes, requisitos, documentos) es público. Lo que identifica la vida de una persona (domicilio, teléfono) se cuida.',
      visual: { tipo: 'balanza', a: { t: 'Se entrega', items: ['Puntajes de cada etapa', 'Documentos que acreditan requisitos', 'Bonificaciones aplicadas'] }, b: { t: 'Se protege', items: ['DNI y domicilio', 'Celular y correo', 'Datos de familia'] } },
    },
  },
  {
    id: 'e4', t: '12:30', ch: 'documento', who: null, titulo: 'Antes del martes', banner: 'assets/3d/scenes/oficina.webp', lugar: 'Archivo de la ORH, en el sótano', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: (n, F) => `<p>El archivo de la ORH está en el sótano, junto al almacén de Limpieza Pública. Huele a humedad y a papel viejo. Los legajos del CAS 003 y 004 están en cajas de cartón con plumón: «CONCURSOS 2026 – NO TOCAR».</p><p>${F.has('jr_historia') ? 'Te acuerdas de lo que dijo Don Segundo sobre las bonificaciones. ' : ''}La comisión llega el martes. <mark class="clave">Elige con qué empiezas</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que dejas listas hoy.', boton: 'Ordenar estas', resumen: 'Dejaste listo',
    cols: ['Qué', 'Para qué'],
    rows: [
      { id: 'actas', cells: ['Actas firmadas del comité de cada etapa', 'Prueba de quién decidió y cuándo'] },
      { id: 'matriz', cells: ['Matrices de puntajes y cálculo de bonificaciones', 'Cómo se llegó a cada resultado'] },
      { id: 'pub', cells: ['Capturas de las publicaciones en Talento Perú y en el portal', 'Prueba de la difusión'] },
      { id: 'pintar', cells: ['Cambiar las cajas viejas por archivadores nuevos', 'Que se vea ordenado'] },
      { id: 'faltan', cells: ['Lista de lo que no encuentras, con nota a Marisol', 'Que nada falte sin explicación'] },
    ],
    score: { actas: 2, matriz: 3, pub: 1, pintar: -1, faltan: 3 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: picks.includes('matriz') ? 3 : 0, tiempo: -1 },
        flags: picks.includes('matriz') ? ['legajos_listos'] : [],
        cartera: { oci: picks.includes('faltan') ? 'Legajos en orden y lista de faltantes entregada' : 'Legajos en orden, sin lista de faltantes' },
        out: picks.includes('faltan') ? 'Te falta el acta de entrevista del CAS 003 y la matriz de bonificaciones del 004 está en un Excel sin fórmulas, con números escritos a mano. Lo pones en la lista para Marisol.' : 'Las cajas se ven mejor. Pero no sabes todavía qué falta, y eso lo va a descubrir la comisión.',
        pro: { ok: 'Lo que falta se informa antes de que lo encuentren.', risk: 'Un archivo bonito sin lista de faltantes es una sorpresa esperando.', info: 'No completes ni «regularices» actas viejas: eso ya sería otro problema.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Ordenar es también decir qué falta.' : '¿Y lo que no encontraste?'],
      };
    },
    mirada: {
      ve: 'Prepararse para una auditoría no es maquillar el archivo. Es saber qué hay, qué falta y por qué, para poder decirlo con calma cuando pregunten.',
      visual: { tipo: 'embudo', titulo: 'Legajos del CAS 004-2026', niveles: [['Documentos esperados', 48], ['Encontrados', 44], ['Firmados', 41], ['Sin observación', 38]] },
    },
  },
  {
    id: 'e5', t: '15:10', ch: 'whatsapp', who: 'eder', titulo: 'Un mensaje para Eder', banner: 'assets/foto2/caminan.webp', lugar: 'Tu escritorio', show: ['personas', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Eder te escribe: «¿Entonces cuándo me dan lo que falta?». ${F.has('acceso_parcial') ? 'Y añade: «¿Y lo de la bonificación del ganador? ¿Era licenciado o no?».' : ''}</p><p>Le debes una respuesta concreta. <mark class="clave">Sin promesas que no dependan de ti</mark>.</p>`,
    type: 'compose', enviaA: 'eder', para: 'Para: Eder Rojas · Postulante', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'plazo', t: 'El plazo', ops: [
        { id: 'p1', t: 'Eder, tu solicitud ingresó el jueves. La respuesta completa te la entrega el responsable de transparencia dentro del plazo de diez días hábiles.', ok: true, por: 'Fecha y plazo concretos, por el canal formal.' },
        { id: 'p2', t: 'Eder, ya pronto te damos todo, no te preocupes.', ok: false, por: '«Pronto» no es un plazo.' },
      ] },
      { id: 'bonif', t: 'Sobre lo que preguntó', ops: [
        { id: 'b1', t: 'Lo de la bonificación lo estamos revisando. Si hay un error, te lo diremos por escrito.', ok: true, por: 'No niegas ni confirmas; te comprometes a revisar.' },
        { id: 'b2', t: 'Seguro hubo un error con la bonificación, el jefe anterior hacía todo rápido.', ok: false, por: 'Afirmas algo que no has revisado y culpas a alguien.' },
      ] },
      { id: 'canal', t: 'El canal', ops: [
        { id: 'c1', t: 'Cualquier otra consulta, mejor por el correo de la ORH, para que quede registrada.', ok: true, por: 'Llevas la conversación al canal formal.' },
        { id: 'c2', t: 'Escríbeme aquí cuando quieras.', ok: null, por: 'Cordial, pero tu celular no es el canal de la entidad.' },
      ] },
    ],
    res: sel => {
      const mal = sel.plazo === 'p2' || sel.bonif === 'b2', buenas = ['p1', 'b1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 3 : 1, cumplimiento: mal ? -3 : 3, confianza: q === 'buena' ? 2 : 0 }, rel: { eder: q === 'buena' ? 1 : 0 },
        flags: sel.bonif === 'b2' ? ['eder_le_dijiste_error'] : [],
        out: q === 'buena' ? 'Eder responde con un pulgar y un «gracias por decirme las cosas claras». Por primera vez no usa la palabra «arreglado».' : mal ? (sel.bonif === 'b2' ? 'Eder hace captura de tu mensaje. «Hubo un error» ahora es una frase tuya, por escrito.' : 'Eder pregunta: «¿Pronto cuándo?». No tienes respuesta.') : 'Eder agradece. Te seguirá escribiendo al celular.',
        pro: { ok: 'Plazo, compromiso de revisar y canal formal.', risk: 'Una afirmación sin revisar, por escrito, se vuelve prueba.', info: 'Revisa la bonificación antes del martes: la comisión también la verá.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Claro y sin promesas falsas.' : 'Cuidado con lo que afirmas sin revisar.'],
      };
    },
    mirada: {
      ve: 'Con un postulante que desconfía, lo que más ayuda no es la amabilidad: es la precisión. Una fecha concreta y un «lo estamos revisando» honesto valen más que un «no te preocupes».',
      visual: { tipo: 'mensaje', titulo: 'Plazo, revisión y canal', txt: 'Tu solicitud ingresó el jueves y se responde dentro de diez días hábiles. Lo de la bonificación lo estamos revisando. Cualquier consulta, por el correo de la ORH.' },
    },
  },
  {
    id: 'e6', t: '17:15', ch: 'presencial', who: 'marisol', titulo: 'Viernes, 5:15', banner: 'assets/foto2/pasillo.webp', lugar: 'Puerta de la ORH', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>Marisol se pone la casaca y apaga su monitor. «Primera semana. Sobreviviste.» Afuera ya empezó la serenata y suena una cumbia de Los Hermanos Yaipén.</p><p>Te quedan dos cajas por revisar en el sótano. Tu mamá te escribió que hay cuy frito. <mark class="clave">¿Qué haces?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Irte. El lunes llegas temprano y terminas las cajas con la cabeza fresca.',
        res: { q: 'buena', fx: { personas: 3, tiempo: -1, calidad: 1 },
          out: 'Bajas por el jirón Del Comercio con la serenata de fondo. En casa, tu mamá te pregunta cómo es trabajar en la municipalidad. «Es como armar un rompecabezas que todos miran», le dices.',
          pro: { ok: 'Descansar también es parte de hacer bien un trabajo que exige atención al detalle.', info: 'Deja una nota en tu escritorio con lo que falta para el lunes.' },
          kusi: ['feliz', '¡A comer cuy! Te lo ganaste.'] } },
      { id: 'b', label: 'Quedarte hasta terminar las dos cajas. El martes llega la comisión y no quieres sorpresas.',
        res: { q: 'aceptable', fx: { calidad: 3, tiempo: 2, personas: -3 }, flags: ['viernes_tarde'],
          out: 'A las 8:30 terminas. El vigilante te abre la reja. Tu mamá te guardó el cuy en una olla. Comes sola, frío, y te duermes con la ropa puesta.',
          pro: { ok: 'Avanzas lo que preocupa.', risk: 'El cansancio acumulado se nota en los errores pequeños.' },
          kusi: ['pensando', 'Avanzaste… ¿a qué costo?'] } },
    ],
    mirada: { ve: 'En la ORH siempre habrá una caja más por revisar. Aprender a cerrar el día es tan importante como aprender a abrir un expediente.' },
  },
];
