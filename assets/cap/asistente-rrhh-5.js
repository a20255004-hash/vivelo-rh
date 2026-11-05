// Asistente de RR.HH. · Capítulo 5 · «La inducción» · Semana 1, viernes.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas (texto de la Ley 29783 y su Reglamento, D.S. 005-2012-TR, en «Normas legales actualizadas»):
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - Ley 29783, art. 27: programas de capacitación como parte de la jornada laboral.
// - Ley 29783, art. 35 a) y c): entregar copia del Reglamento Interno de SST y adjuntar al contrato las recomendaciones de SST.
// - Ley 29783, art. 49 g) 1: capacitación en SST al momento de la contratación, cualquiera sea la modalidad o duración.
// - Ley 29783, art. 29: empleadores con 20 o más trabajadores constituyen un comité de SST.
// - Ley 29783, art. 72: todo trabajador puede comunicarse libremente con los inspectores de trabajo.
// - Reglamento, art. 27-A (D.S. 001-2021-TR): la capacitación al momento de la contratación es presencial.
// - Reglamento, art. 28: la capacitación se realiza dentro de la jornada y su costo nunca recae en los trabajadores.
// - Reglamento, art. 75: el RISST se pone en conocimiento de todos, por medio físico o digital, bajo cargo.
// - Reglamento, art. 98: las capacitaciones fuera de la jornada se remuneran.

export const CAP = {
  n: 5, titulo: 'La inducción', dia: 'Semana 1, viernes', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Tienda 13 · Almacén, Castilla',
  inicio: '06:30', fin: '19:00', cierreHora: '18:30',
  apertura: 'Castilla, 6:30 de la mañana. El almacén de la tienda 13 es un galpón de techo alto, con un proyector prestado, un parlante con pilas y cero sillas. A las 8:00 llegan 45 personas.', boton: 'Entrar al almacén',
  kusi: 'El primer día en un trabajo no se olvida nunca. ¡Que el de ellos sea bueno!',
  lead: 'Armaste el programa de inducción, conseguiste dónde sentar a 45 personas, defendiste la capacitación de seguridad y le diste a cada persona una forma clara de pedir ayuda.',
  reflexion: '¿Qué te habría gustado que te dijeran en tu primer día de trabajo?',
  siguiente: { n: 6, titulo: 'La queja', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Faltan 5 días' },
  { id: 'examenes', p: 'Exámenes médicos de ingreso', j: 'Clínica San Miguel', d: 0, e: 'Grupos 4 y 5 la próxima semana' },
  { id: 'contratos', p: 'Contratos', j: 'Betty · Legal', d: 0, e: 'Casi todos firmados' },
  { id: 'uniformes', p: 'Uniformes y credenciales', j: 'Logística', d: 0, e: 'Entrega hoy' },
  { id: 'induccion', p: 'Inducción', j: 'Betty · RR.HH.', d: 0, e: 'Hoy, de 8:00 a 14:00' },
];

export const FUTURO = {
  programa_bueno: ['Tu programa de inducción tiene lo que de verdad hace falta.', 'Betty lo usará en las próximas aperturas.'],
  programa_flojo: ['Tu programa de inducción se quedó corto en lo práctico.', 'Llegarán más dudas a tu WhatsApp la próxima semana.'],
  induccion_sentados: ['La inducción se hizo con todos sentados y a tiempo.', 'La gente lo comentará bien.'],
  sst_completa: ['Nadie salió de la inducción sin la capacitación de seguridad.', 'Wilmer se quedó con la descarga a medias.'],
  sst_saltada: ['Diez reponedores descargaron sin capacitación de seguridad.', 'Eso se notará en el simulacro del capítulo 7.'],
  canales_claros: ['Cada persona sabe a quién acudir si tiene un problema.', 'Alguien usará ese canal en el capítulo 6.'],
  canal_jefe: ['Dijiste que todo problema va primero al jefe de tienda.', 'En el capítulo 6, alguien no sabrá a quién contarle.'],
  santos_oral: ['Don Santos rindió su evaluación de forma oral.', 'Ahora sabe dónde está el extintor más cercano a su pasillo.'],
  cierre_claro: ['Tu mensaje de cierre dejó claro qué viene.', 'Menos personas preguntarán lo mismo.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera nueva', who: 'karina' },
  nuevos: { n: 'Tienda 13 · Nuevos ingresos', sub: '45 participantes', c: '#C05621' },
  sillas: { n: 'Sra. Maritza · Alquiler de sillas', sub: 'Castilla', c: '#B7791F' },
};

export const WSP = [
  { chat: 'grupo', t: '06:20', de: 'Betty', txt: 'Hoy es el día 🙌 Llego a las 8:15 para la bienvenida. El jefe de SST de la cadena da su parte a las 8:45.' },
  { chat: 'grupo', t: '06:35', de: 'César', txt: 'Llevo la boleta de ejemplo en grande, impresa en A3. Que nadie diga que no entiende su boleta 🧾' },
  { chat: 'nuevos', t: '06:50', de: 'Karina', txt: 'Buenos días 🙂 Ya estoy saliendo. ¿Hay que llevar lapicero?' },
  { chat: 'nuevos', t: '07:05', de: 'Valentina', txt: 'Buenos días a todos 🙋‍♀️ Nos vemos en la tienda.', si: 'credencial_nombre' },
  { chat: 'nuevos', t: '07:10', de: 'Jhonatan', txt: '¿El polo XL igual me lo pongo? 😂', si: 'tallas_xl' },
  { chat: 'wilmer', t: '09:20', de: 'Wilmer', txt: 'Llegó el camión de abarrotes. Necesito gente. YA.' },
  { chat: 'betty', t: '15:10', de: 'Betty', txt: 'Hoy se sintió como una empresa de verdad. Gracias. Descansa este fin de semana, ¿ya? 💚', si: 'induccion_sentados' },
];

export const CORREOS = [
  { t: '06:40', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Inducción · horario', html: '<p>La inducción es hoy de 8:00 a 14:00, dentro de la jornada de todos. No quiero a nadie después de las 2 sin que se le pague esa hora. El almacén ya está libre, pero Logística se llevó las sillas a la tienda 9.</p><p>Betty</p>' },
  { t: '16:30', de: 'Ing. Óscar Alvarado · SST', para: 'RR.HH. Supermercados Norte', asunto: 'Cargos de RISST', html: '<p>Necesito los cargos firmados de la entrega del Reglamento Interno de Seguridad y Salud en el Trabajo de los 45. Los que faltaron hoy reciben su capacitación presencial antes de su primer turno.</p><p>Óscar</p>' },
];

export const QUIZ = [
  { q: '¿Cuándo debe darse la capacitación en seguridad y salud a una persona nueva?', ops: ['Cuando tenga tiempo', 'Al momento de la contratación, cualquiera sea la modalidad o duración', 'Al cumplir tres meses', 'Solo si su puesto es de riesgo'], ok: 1, por: 'La Ley 29783 (art. 49 g) pide capacitar al momento de la contratación.' },
  { q: 'La inducción se alarga hasta las 4 de la tarde y la jornada terminaba a las 2. Esas dos horas…', ops: ['No se pagan porque es capacitación', 'Se pagan: la capacitación es parte de la jornada', 'Se compensan con un refrigerio', 'Las paga quien llegó tarde'], ok: 1, por: 'La capacitación se realiza dentro de la jornada; si se hace fuera, se remunera (Reglamento, arts. 28 y 98).' },
  { q: 'Tres personas faltaron a la inducción. Para la parte de seguridad, lo correcto es…', ops: ['Mandarles el PDF del RISST por WhatsApp y darla por hecha', 'Darles la capacitación presencial antes de su primer turno y entregarles el RISST bajo cargo', 'Que les cuente un compañero', 'Dejarlo para el próximo año'], ok: 1, por: 'La capacitación al momento de la contratación es presencial (Reglamento, art. 27-A), y el RISST se entrega bajo cargo (art. 75).' },
  { q: 'Un jefe de tienda pide sacar a diez personas de la parte de seguridad para descargar un camión. ¿Qué haces?', ops: ['Las mandas: la mercadería no espera', 'Le propones que descarguen después del módulo de seguridad, con las indicaciones de carga', 'Mandas solo a los que tienen experiencia', 'Cancelas la inducción'], ok: 1, por: 'Nadie debería hacer una tarea de esfuerzo sin la capacitación de seguridad de su puesto.' },
  { q: 'En la tarjeta de «a quién acudir», ¿qué NO conviene poner como única vía?', ops: ['RR.HH., con número y horario', 'El canal confidencial de la empresa', 'Que todo problema se habla primero con el jefe de tienda', 'El comité de seguridad y salud'], ok: 2, por: 'Si el problema es con el jefe, esa vía deja a la persona sin salida.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '06:45', ch: 'documento', who: null, titulo: 'El programa de la mañana', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina provisional de la tienda 13', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Antes de que llegue nadie, te sientas en la mesa plegable con un café de termo que ya está tibio. Tienes seis horas, de 8:00 a 14:00, para que 45 personas salgan sabiendo trabajar aquí.</p><p>Betty te pidió el programa final. <mark class="clave">Elige qué entra en cada bloque</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del programa de inducción.', boton: 'Imprimir el programa',
    bloques: [
      { id: 'bien', t: 'Bienvenida', n: 2, ops: [
        { id: 'b1', t: 'Betty: quiénes somos, la tienda 13 y qué esperamos de cada puesto (20 minutos).', ok: true },
        { id: 'b2', t: 'Presentación de cada persona: nombre, puesto y de dónde viene.', ok: true, por: 'Hoy se conocen quienes trabajarán juntos.' },
        { id: 'b3', t: 'Video de una hora sobre la historia del fundador.', ok: false, por: 'Una hora de video en un almacén caluroso es tiempo que no aprende nadie.' },
      ] },
      { id: 'sst', t: 'Seguridad y salud', n: 2, ops: [
        { id: 's1', t: 'Capacitación presencial del jefe de SST: riesgos del puesto, extintores y rutas de evacuación.', ok: true, por: 'La capacitación al momento de la contratación es presencial.' },
        { id: 's2', t: 'Entrega del Reglamento Interno de SST a cada persona, con su firma de cargo.', ok: true, por: 'Ley 29783, art. 35 a), y Reglamento, art. 75.' },
        { id: 's3', t: 'Mandar el RISST en PDF al grupo para que lo lean en su casa.', ok: false, por: 'El RISST puede ser digital, pero se entrega bajo cargo, y la capacitación de ingreso no se reemplaza con un PDF.' },
      ] },
      { id: 'prac', t: 'Lo práctico', n: 3, ops: [
        { id: 'p1', t: 'César explica la boleta: sueldo, descuentos de ley, fecha de pago y cuenta sueldo.', ok: true },
        { id: 'p2', t: 'Horarios, turnos y cómo se marcan las asistencias.', ok: true },
        { id: 'p3', t: 'A quién acudir si tienes un problema, con nombres y números.', ok: true, por: 'La pregunta que nadie hace en voz alta el primer día.' },
        { id: 'p4', t: 'Una práctica de caja y de reposición para todos, a las 15:00.', ok: false, por: 'Pasa la hora de salida: fuera de la jornada, habría que pagarla.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -2, personas: q === 'buena' ? 2 : 0 },
        flags: [q === 'buena' ? 'programa_bueno' : 'programa_flojo'], cartera: { induccion: q === 'buena' ? 'Programa de inducción listo' : 'Programa con huecos' },
        out: q === 'buena' ? 'Imprimes el programa en una hoja. Cabe todo antes de las 14:00, con 20 minutos de refrigerio.' : 'El programa se ve completo, pero algo se pasa de la hora o se queda sin explicar.',
        pro: { ok: 'Un buen programa combina lo legal (seguridad), lo práctico (boleta, horarios) y lo humano (presentarse y saber a quién acudir).', risk: 'Lo que se hace fuera de la jornada se paga, y una capacitación de seguridad no se reemplaza con un PDF.', info: 'Deja 15 minutos libres: siempre hay preguntas que no estaban en el programa.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Seis horas bien pensadas!' : 'Algo no cuadra con el reloj…'],
      };
    },
    rules: [[LEY, 'La capacitación en SST se da al momento de la contratación (Ley 29783, art. 49 g) y es presencial (Reglamento, art. 27-A).'], [LEY, 'La capacitación se realiza dentro de la jornada (Reglamento, art. 28).'], [LEY, 'El RISST se entrega a cada trabajador bajo cargo (Ley 29783, art. 35 a; Reglamento, art. 75).']],
    mirada: {
      ve: 'Una inducción no es una charla de bienvenida: es la primera capacitación del trabajador, con partes que exige la ley y partes que exige el sentido común. Si sale bien, la gente llega a su primer turno sabiendo qué hacer y a quién preguntar.',
      visual: { tipo: 'linea', titulo: 'La mañana de la inducción', hitos: [['8:00', 'Bienvenida y presentaciones'], ['8:45', 'Seguridad y salud'], ['10:45', 'Refrigerio'], ['11:05', 'Boleta y horarios'], ['12:30', 'Uniformes y credenciales'], ['13:30', 'A quién acudir y cierre']] },
      normas: [
        { ley: 'Ley 29783, art. 49 g)', dice: 'El empleador garantiza la capacitación en SST al momento de la contratación, cualquiera sea la modalidad o duración del contrato.', practica: 'Un contrato temporal por la apertura no exime de la capacitación.' },
        { ley: 'Reglamento de la Ley 29783 (D.S. 005-2012-TR), arts. 27-A y 28', dice: 'La capacitación al momento de la contratación es presencial. Se realiza dentro de la jornada y su costo nunca recae en el trabajador.', practica: 'La inducción de seguridad no puede hacerse por PDF ni fuera del horario sin pagar.' },
      ],
    },
  },
  {
    id: 'i2', t: '07:15', ch: 'llamada', who: null, titulo: 'Cuarenta y cinco personas de pie', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Almacén de la tienda 13', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>El almacén está limpio, pero vacío: Logística se llevó las sillas a la tienda 9. Ya hay ocho personas esperando en la puerta, entre ellas una señora de 60 años con un táper de cancha.</p><p>Tienes 45 minutos. Llamas.</p>`,
    type: 'calls',
    calls: [['Martín · Logística', 'Contesta: las sillas vuelven a las 10:00', 'Te las mando en el camión de las diez, hija. Antes no tengo chofer.'], ['Sra. Maritza · alquiler de sillas', 'Contesta: puede llegar en 40 minutos', '¿Cincuenta sillas? Tengo de las blancas de fiesta. En mi motocarguera te las llevo en 40 minutos. Un sol cada una.'], ['Wilmer Sosa', 'No contesta']],
    prompt: 'Las sillas de la empresa llegan a las 10:00. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Alquilar las 50 sillas a la señora Maritza con la caja chica, y empezar con el recorrido de pie por la tienda mientras llegan.',
        res: { q: 'buena', fx: { personas: 5, tiempo: 1, calidad: 2 }, flags: ['induccion_sentados'], cartera: { induccion: 'Sillas alquiladas · inducción a tiempo' },
          envia: [['sillas', 'Señora Maritza, confirmo 50 sillas para la tienda 13 de Supermercados Norte, en Castilla. Le pagamos al llegar con caja chica y le pido su boleta, por favor. ¡Gracias!']],
          out: 'A las 8:05, las sillas blancas de fiesta ya están en filas. Alguien bromea que parece un matrimonio. Betty llega y se ríe: «Para mí, es una boda: la de la tienda 13 con su gente».',
          pro: { ok: 'Resuelves con un gasto pequeño y reordenas el programa para no perder tiempo.', info: 'Pide la boleta de venta para rendir la caja chica.' },
          kusi: ['celebra', '¡Sillas de fiesta para un día de fiesta!'] } },
      { id: 'b', label: 'Hacer la inducción de pie hasta las 10:00: son tres horas y casi todos son jóvenes.',
        res: { q: 'riesgosa', fx: { personas: -5, calidad: -3 }, cartera: { induccion: 'Inducción de pie hasta las 10' },
          out: 'A las 9:30, la señora de la cancha está sentada en una caja de leche y un chico se marea con el calor. Nadie recuerda lo que dijo el jefe de SST.',
          pro: { ok: 'No gastas nada.', risk: 'Tres horas de pie en un galpón caluroso no es una inducción: es una prueba de resistencia.' },
          kusi: ['preocupado', 'Así nadie aprende nada…'] } },
      { id: 'c', label: 'Partir el grupo en dos: 22 por la mañana y 23 en la tarde, cuando ya estén las sillas.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: -4 }, cartera: { induccion: 'Inducción en dos grupos' },
          out: 'Funciona, pero el grupo de la tarde sale a las 6, fuera de su horario. Tendrás que pedir a César que pague esas horas y Betty tendrá que repetir su bienvenida.',
          pro: { ok: 'Todos se sientan.', risk: 'El grupo de la tarde termina fuera de la jornada: esas horas se pagan.' },
          kusi: ['pensando', 'Funciona… al doble de costo.'] } },
    ],
    rules: [[BP, 'Antes de una actividad masiva, revisa lo básico el día anterior: sillas, enchufes, agua, baños y sombra.']],
    mirada: {
      ve: 'Las inducciones se arruinan por cosas pequeñas: sillas, agua, un parlante sin pilas. Resolver lo logístico rápido, con criterio y con un gasto razonable, es parte del trabajo de RR.HH. tanto como explicar la boleta.',
      visual: { tipo: 'balanza', a: { t: 'Esperar las sillas de la empresa', items: ['Sin gasto extra', 'Tres horas de pie'] }, b: { t: 'Alquilar sillas', items: ['50 soles de caja chica', 'Inducción a tiempo', 'Gente que puede escuchar'] } },
    },
  },
  {
    id: 'i3', t: '09:30', ch: 'presencial', who: 'wilmer', titulo: 'El camión de abarrotes', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Puerta del almacén', show: ['cumplimiento', 'etica', 'confianza'],
    body: (n, F) => `<p>El Ing. Alvarado, jefe de SST de la cadena, está explicando cómo levantar una caja sin dañarse la espalda cuando entra Wilmer, sudando.</p><p>«Llegó el camión de abarrotes y el chofer no espera. <mark class="clave">Dame diez reponedores ahorita</mark>. Lo de seguridad lo leen después.» ${F.has('vacante_recomendado') ? 'Richard, su amigo, ya está afuera con una carretilla.' : ''}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle que el chofer espere 40 minutos: los reponedores terminan la parte de seguridad, que incluye cómo cargar, y salen a descargar con Martín.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: -1 }, rel: { wilmer: -1 }, flags: ['sst_completa'], cartera: { induccion: 'SST completa para todos' },
          out: 'Wilmer patea una caja vacía y sale a hablar con el chofer, que acepta esperar a cambio de una gaseosa. A las 10:15, diez reponedores descargan con la espalda recta, tal como acaban de aprender.',
          pro: { ok: 'Atiendes la urgencia de Wilmer sin saltarte la capacitación que protege a su propio equipo.', risk: 'Wilmer siente que RR.HH. otra vez le dice que no.', info: 'Pide que el Ing. Alvarado acompañe la primera descarga: es la mejor práctica.' },
          kusi: ['animo', 'Cuarenta minutos que pueden salvar una espalda.'] } },
      { id: 'b', label: 'Mandarle los diez: la mercadería no puede esperar y el RISST lo firman al regresar.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -2 }, rel: { wilmer: 1 }, flags: ['sst_saltada'], cartera: { induccion: '10 reponedores sin la parte de seguridad' },
          out: 'Diez reponedores descargan sacos de arroz de 50 kilos sin haber escuchado cómo cargarlos. Firman el cargo del RISST a la 1, sin haber oído una palabra de lo que dice.',
          pro: { ok: 'El camión se descarga rápido.', risk: 'Firmar un cargo de capacitación que no se recibió es un registro falso, y una lesión en la primera semana cae sobre la empresa.' },
          kusi: ['indignado', '¡Sacos de 50 kilos sin capacitación!'] } },
      { id: 'c', label: 'Mandar solo a los cuatro que ya trabajaron antes en un supermercado: ellos ya saben cargar.',
        res: { q: 'aceptable', fx: { cumplimiento: -2, etica: 0 }, rel: { wilmer: 0 }, cartera: { induccion: '4 reponedores salieron de la parte de SST' },
          out: 'Los cuatro descargan y Wilmer se queda medio contento. Pero no conocen las rutas de evacuación de esta tienda ni dónde están sus extintores.',
          pro: { ok: 'Mandas a quienes tienen experiencia.', risk: 'La capacitación es sobre esta tienda y este puesto: la experiencia previa no la reemplaza.' },
          kusi: ['pensando', 'Saber cargar no es conocer esta tienda.'] } },
    ],
    rules: [[LEY, 'La capacitación en SST se da al momento de la contratación, cualquiera sea la modalidad o duración (Ley 29783, art. 49 g).'], [BP, 'Cuando digas que no, ofrece un sí: «en 40 minutos, y bien hechos».']],
    mirada: {
      ve: 'Wilmer tiene un problema real: un chofer que no espera. Pero el riesgo de sacar a diez personas sin capacitación lo pagaría él mismo si alguien se lesiona. Negociar tiempos es mejor que elegir entre «sí» y «no».',
      visual: { tipo: 'flujo', titulo: 'Descargar bien la primera vez', pasos: ['Módulo de seguridad', 'Cómo cargar sin lesionarse', 'Descarga acompañada', 'Firma del cargo del RISST'], aqui: 0 },
    },
  },
  {
    id: 'i4', t: '11:40', ch: 'documento', who: null, titulo: 'La lista de asistencia', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>En el refrigerio, el Ing. Alvarado te deja el formato de asistencia y cargo del RISST para que lo hagas firmar a todos. ${F.has('acta_descuento') ? 'Mientras tanto, una cajera pregunta en voz alta por qué el acta de uniformes dice que se los descuentan. Se hace un silencio incómodo.' : ''}</p><p>Antes de pasarlo por las filas, <mark class="clave">lo revisas</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la norma o lo que debería corregirse en el formato.',
    doc: { t: 'Registro de inducción y cargo de entrega del RISST', sub: 'Tienda 13 · Capacitación de ingreso en SST' },
    lines: [
      { id: 'tema', t: 'Tema: inducción en seguridad y salud en el trabajo · Capacitador: Ing. Óscar Alvarado.' },
      { id: 'hora', t: 'Fecha y horario: viernes, de 8:45 a 10:45, presencial.' },
      { id: 'cols', t: 'Columnas: nombre, DNI, puesto y firma.' },
      { id: 'cargo', t: '«Recibí copia del Reglamento Interno de Seguridad y Salud en el Trabajo.»' },
      { id: 'faltan', t: 'Nota al pie: «Los que faltaron reciben el RISST por WhatsApp y la capacitación se da por cumplida».', bad: LEY, why: 'La capacitación al momento de la contratación es presencial. Los que faltaron deben recibirla antes de su primer turno.' },
      { id: 'sabado', t: '«Repaso obligatorio el sábado de 15:00 a 17:00, sin pago, por ser capacitación.»', bad: LEY, why: 'La capacitación se hace dentro de la jornada. Si se hace fuera, se remunera.' },
      { id: 'anticipado', t: 'Diez firmas de reponedores ya puestas en la lista, de las 9:30.', bad: BP, why: 'Si salieron antes de la parte de seguridad, su firma dice algo que no pasó. Cada persona firma cuando recibe la capacitación.' },
      { id: 'eval', t: 'Evaluación breve al final, con repaso para quien no la apruebe.', duda: 'Está bien: la evaluación sirve para saber si se entendió, no para castigar.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, calidad: missLey ? -2 : 3 },
      out: missLey ? 'El formato circula tal cual. El sábado, cinco personas aparecen a un repaso que nadie les va a pagar.' : 'Tachas la nota al pie y el repaso del sábado, y lo conversas con el Ing. Alvarado. Él lo corrige a mano y firma la corrección: «Tienes razón; ese formato es de otra empresa».',
      pro: { ok: 'Un registro de capacitación debe decir lo que realmente pasó, cuándo y cómo.', risk: 'Firmas anticipadas y repasos sin pago convierten un registro en un problema ante una inspección.', info: 'Coordina con SST una fecha para los que faltaron, antes de su primer turno.' },
      kusi: missLey ? ['preocupado', 'Ese formato prometía cosas que no se pueden.'] : ['feliz', '¡Registro limpio, capacitación de verdad!'],
    }),
    rules: [[LEY, 'Las capacitaciones fuera de la jornada se remuneran (Reglamento, art. 98).'], [LEY, 'El RISST se entrega bajo cargo, en físico o digital (Reglamento, art. 75).']],
    mirada: {
      ve: 'Los registros de capacitación son la prueba de que la empresa cumplió. Por eso deben ser verdaderos: quién estuvo, cuándo y qué recibió. Un registro «arreglado» protege menos que uno honesto con pendientes.',
      visual: { tipo: 'cambio', titulo: 'Del formato de SST a un registro honesto', pares: [['RISST por WhatsApp para los ausentes', 'Capacitación presencial antes de su primer turno'], ['Repaso del sábado sin pago', 'Repaso dentro de la jornada'], ['Firmas puestas antes', 'Cada uno firma cuando la recibe']] },
    },
  },
  {
    id: 'i5', t: '13:00', ch: 'documento', who: null, titulo: 'A quién acudir', banner: 'assets/foto2/presentacion.webp', lugar: 'Almacén de la tienda 13', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Último bloque. Vas a repartir una tarjeta pequeña que entrará en el portacredencial: «Si tienes un problema, ¿a quién acudes?». ${F.has('credencial_nombre') ? 'Valentina está en la primera fila, con su credencial puesta.' : ''}</p><p>Karina está al fondo, callada. Cabe poco: <mark class="clave">elige las tres vías que van en la tarjeta</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres vías que vas a poner en la tarjeta.', boton: 'Imprimir las tarjetas', resumen: 'Pusiste',
    cols: ['Vía', 'Para qué sirve'],
    rows: [
      { id: 'rrhh', cells: ['RR.HH.: tu nombre, tu número y tu horario', 'Dudas, problemas y quejas'] },
      { id: 'canal', cells: ['El correo confidencial de la empresa para denuncias', 'Cuando no te sientes seguro hablando con nadie de la tienda'] },
      { id: 'comite', cells: ['El comité de seguridad y salud, con el nombre de su representante', 'Riesgos y accidentes'] },
      { id: 'jefe', cells: ['«Todo problema se habla primero con el jefe de tienda»', 'Mantener el orden'] },
      { id: 'grupo', cells: ['El grupo de WhatsApp de la tienda', 'Todos se enteran'] },
    ],
    score: { rrhh: 3, canal: 3, comite: 2, jefe: -3, grupo: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, etica: picks.includes('jefe') ? -3 : 2, confianza: q === 'buena' ? 2 : 0 },
        flags: [picks.includes('jefe') ? 'canal_jefe' : 'canales_claros'], cartera: { induccion: picks.includes('jefe') ? 'Tarjeta: problemas al jefe de tienda' : 'Tarjeta de a quién acudir entregada' },
        out: q === 'buena' ? 'Cuando lees la tarjeta en voz alta, Karina levanta la mirada por primera vez en el día. Al salir, la guarda detrás de su credencial.' : picks.includes('jefe') ? 'La tarjeta dice que todo va primero a Wilmer. Karina la lee dos veces y la guarda en el fondo de su mochila.' : 'La tarjeta ayuda, aunque deja a algunos sin una vía confidencial.',
        pro: { ok: 'Varias vías, una de ellas confidencial, para que nadie dependa de una sola persona.', risk: 'Si la única vía es el jefe, quien tiene un problema con el jefe se queda en silencio.', info: 'Diles también que pueden comunicarse con la inspección de trabajo: es un derecho de todo trabajador.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Una tarjetita que puede cambiarlo todo.' : '¿Y si el problema es el jefe?'],
      };
    },
    rules: [[LEY, 'Todo trabajador puede comunicarse libremente con los inspectores de trabajo (Ley 29783, art. 72).'], [LEY, 'Los empleadores con 20 o más trabajadores tienen un comité de SST (Ley 29783, art. 29).'], [BP, 'Ofrece siempre una vía confidencial que no pase por el jefe directo.']],
    mirada: {
      ve: 'El primer día, nadie cuenta sus problemas. Pero la próxima semana, cuando aparezcan, la persona recordará si alguien le dijo a quién acudir. Una tarjeta pequeña es una puerta que se deja abierta.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dice tu tarjeta', txt: '¿Tienes un problema? Escríbele a RR.HH. (lunes a viernes, de 8 a 6), usa el correo confidencial de la empresa o busca al comité de seguridad. Nadie te puede castigar por preguntar.' },
    },
  },
  {
    id: 'i6', t: '13:40', ch: 'presencial', who: null, titulo: 'La evaluación de don Santos', banner: 'assets/foto/mentora.webp', lugar: 'Almacén de la tienda 13', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Para cerrar, el Ing. Alvarado reparte una evaluación escrita de diez preguntas sobre seguridad. Don Santos Chero, reponedor de 57 años, de Morropón, se acerca con la hoja en blanco.</p><p>Te dice en voz bajita: «Señorita, yo leo poquito. Llegué hasta tercero de primaria. Pero <mark class="clave">todo lo que dijo el ingeniero lo entendí</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle al Ing. Alvarado que lo evalúe de forma oral, a un costado y con las mismas preguntas.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, cumplimiento: 2 }, flags: ['santos_oral'],
          out: 'Don Santos responde nueve de diez. Señala sin dudar el extintor de su pasillo y la salida de emergencia. El ingeniero anota: «Evaluación oral. Aprobado».',
          pro: { ok: 'Evalúas lo que importa (que sepa qué hacer) y no su nivel de lectura.', info: 'Avisa a SST: los avisos de seguridad de la tienda deberían tener íconos, no solo texto.' },
          kusi: ['celebra', '¡Nueve de diez! Lo sabía todo.'] } },
      { id: 'b', label: 'Pedirle a un compañero que le lea las preguntas y marque por él.',
        res: { q: 'riesgosa', fx: { personas: -2, etica: -3 },
          out: 'El compañero termina marcando lo que él cree. Don Santos firma una hoja que no sabe qué dice, y todo el grupo se entera de que no lee.',
          pro: { ok: 'Lo ayudas rápido.', risk: 'Lo expones frente al grupo y la evaluación ya no dice lo que él sabe.' },
          kusi: ['triste', 'Eso lo dejó expuesto.'] } },
      { id: 'c', label: 'Decirle que no se preocupe, que no la haga: es solo un trámite.',
        res: { q: 'aceptable', fx: { personas: 1, cumplimiento: -2 },
          out: 'Don Santos se va tranquilo, pero nadie sabe si de verdad entendió dónde están las salidas de emergencia.',
          pro: { ok: 'Le evitas un mal rato.', risk: 'La evaluación no es un trámite: es la forma de saber si la capacitación funcionó.' },
          kusi: ['pensando', '¿Y si no entendió algo importante?'] } },
    ],
    rules: [[BP, 'Adapta la forma de evaluar a la persona, no el contenido de lo que tiene que saber.']],
    mirada: {
      ve: 'En un supermercado trabajan personas con estudios muy distintos. Una inducción bien hecha no da por sentado que todos leen igual: evalúa si la persona sabe qué hacer, con la forma que le permita mostrarlo.',
      visual: { tipo: 'balanza', a: { t: 'Evaluación solo escrita', items: ['Mide si lee', 'Igual para todos'] }, b: { t: 'Evaluación adaptada', items: ['Mide si sabe qué hacer', 'Discreta', 'Mismas preguntas'] } },
    },
  },
  {
    id: 'i7', t: '17:15', ch: 'whatsapp', who: null, titulo: 'El mensaje de cierre', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Combi de regreso al centro', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Vuelves en combi por el puente Cáceres, con la espalda molida y las sillas de la señora Maritza ya devueltas. ${F.has('induccion_sentados') ? 'Fue un buen día.' : 'Fue un día largo.'} En el grupo de nuevos ingresos ya hay 14 mensajes con la misma pregunta: «¿Y ahora qué?».</p><p>Les escribes <mark class="clave">un solo mensaje para todos</mark>.</p>`,
    type: 'compose', enviaA: 'nuevos', para: 'Para: Tienda 13 · Nuevos ingresos', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'grac', t: 'Cómo abres', ops: [
        { id: 'g1', t: '¡Gracias por el día de hoy! Ya son parte del equipo de la tienda 13.', ok: true, por: 'Cálido y breve.' },
        { id: 'g2', t: 'Recuerden que todavía están en periodo de prueba, así que cuidado.', ok: false, por: 'Es verdad, pero dicho así suena a amenaza el primer día.' },
      ] },
      { id: 'que', t: 'Qué viene', ops: [
        { id: 'q1', t: 'El lunes les llega su horario. Los polos que faltan llegan el martes, y los entregamos en la tienda.', ok: true, por: 'Fechas concretas para las dudas más repetidas.' },
        { id: 'q2', t: 'Ya les iremos avisando todo.', ok: false, por: 'No responde a nadie y vuelven las mismas preguntas.' },
      ] },
      { id: 'donde', t: 'Para dudas', ops: [
        { id: 'd1', t: 'Si tienen una duda personal, escríbanme por interno, no por el grupo. Su tarjeta tiene las otras vías.', ok: true, por: 'Cuida la privacidad de quien pregunta.' },
        { id: 'd2', t: 'Cualquier duda, la ponen aquí en el grupo.', ok: null, por: 'Práctico para lo general, pero nadie contará algo personal frente a 45 personas.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'q1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, calidad: q === 'buena' ? 3 : 0, confianza: q === 'riesgosa' ? -2 : 1 },
        flags: q === 'buena' ? ['cierre_claro'] : [],
        out: q === 'buena' ? 'Llueven stickers de aplausos. A las 9 de la noche te llega un mensaje por interno de Karina: «Gracias por todo, señorita. Me sentí bien hoy». Lo lees dos veces.' : q === 'riesgosa' ? 'Tras tu mensaje, el grupo se queda en silencio. Al día siguiente, tres personas te escriben preguntando si las van a botar.' : 'El grupo se calma un poco, aunque las preguntas por el horario siguen llegando.',
        pro: { ok: 'Un mensaje con fechas concretas y una vía privada evita cuarenta respuestas sueltas.', risk: 'El periodo de prueba no se usa como advertencia el primer día.', info: 'Fija el mensaje en el grupo para que lo vean los que entren tarde.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Qué divino cerrar así!' : 'Las palabras del primer día pesan.'],
      };
    },
    rules: [[BP, 'En los grupos, información general. Lo personal, por interno.']],
    mirada: {
      ve: 'El día termina, pero la experiencia de la persona nueva sigue en su celular. Un mensaje de cierre claro, cálido y con fechas convierte la inducción en el inicio de una relación de confianza con RR.HH.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje de cierre', txt: '¡Gracias por el día de hoy! Ya son parte del equipo de la tienda 13. El lunes les llega su horario y los polos que faltan llegan el martes. Si tienen una duda personal, escríbanme por interno.' },
    },
  },
];
