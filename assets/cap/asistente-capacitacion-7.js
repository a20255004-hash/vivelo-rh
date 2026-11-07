// Asistente de Capacitación · Capítulo 7 · «La constancia» · Semana 2, martes.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 98: las capacitaciones fuera de la jornada se remuneran;
//   art. 28: dentro de la jornada. https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - TUO de la Ley de Jornada (D.S. 007-2002-TR), arts. 9 y 10: sobretiempo voluntario, que se paga con recargo o se
//   compensa con descanso. https://lpderecho.pe/tuo-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-007-2002-tr
// - Ley 29733, Ley de Protección de Datos Personales: una constancia lleva solo los datos necesarios; la condición de
//   discapacidad es un dato sensible.
// No se cita ninguna norma que obligue a emitir constancias de capacitación: es un compromiso interno de la escuela.
// Personas, horas y documentos son ficticios.

export const CAP = {
  n: 7, titulo: 'La constancia', dia: 'Semana 2, martes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Boticas del Norte · Sede de capacitación, Av. España',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. El grupo 5 hace hoy su día virtual y el grupo 6 empieza con Jorge. En la pizarra del aula alguien escribió con plumón: «¿Y la constancia?». Karen la prometió el primer día. AulaNorte solo emite un «certificado de módulo» con el logo pixelado del proveedor.', boton: 'Abrir AulaNorte',
  kusi: 'Una constancia es una promesa en papel. ¡Que diga la verdad!',
  lead: 'Diseñaste una constancia que dice lo que pasó, te negaste a inflar horas, ordenaste cómo emitirlas, limpiaste la lista y atendiste un reclamo con el registro en la mano.',
  reflexion: '¿Qué vale más en una constancia: que diga muchas horas o que diga la verdad?',
  siguiente: { n: 8, titulo: 'En el local', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'plantilla', p: 'Plantilla de constancia', j: 'Karen y tú', d: 0, e: 'No existe' },
  { id: 'lista', p: 'Lista de constancias de los grupos 1 a 4', j: 'Tú', d: 0, e: '71 por revisar' },
  { id: 'reexamen', p: 'Refuerzo y reexamen', j: 'Jorge y tú', d: 0, e: 'Jueves' },
  { id: 'visita', p: 'Visita al local de La Esperanza', j: 'Karen · Capacitación', d: 0, e: 'Mañana' },
  { id: 'reclamos', p: 'Reclamos de participantes', j: 'Tú', d: 0, e: 'Uno en camino' },
];

export const FUTURO = {
  plantilla_ok: ['La constancia dice curso, fechas, horas reales y un código para verificarla.', 'Nadie podrá falsificarla ni inflarla.'],
  constancia_real: ['Le dijiste a Mario que la constancia solo certifica lo que pasó.', 'Mario lo sabrá cuando lo visites mañana.'],
  constancia_inflada: ['Emitiste constancias con horas que no se dictaron.', 'Karen lo descubrirá en el balance del viernes.'],
  constancias_ordenadas: ['Tienes un procedimiento para emitir constancias desde el registro.', 'El grupo 6 recibirá la suya el mismo jueves.'],
  lista_limpia: ['La lista de constancias no tiene errores ni datos sensibles.', 'Las 71 salen sin reclamos.'],
  lista_errores: ['Algunas constancias salieron con datos mal o de más.', 'Te las devolverán en el capítulo 9.'],
  reclamo_atendido: ['Atendiste el reclamo con el registro de asistencia y lo derivaste a Planillas.', 'La persona confiará en la escuela.'],
  constancias_entregadas: ['Los grupos 1 a 4 recibieron sus constancias por el correo de la empresa.', 'Varios la usarán para su legajo.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  mario: { n: 'Mario Infante', sub: 'Jefe del local de La Esperanza', who: 'local' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  grupo1: { n: 'Escuela de cajeros · Grupos 1 a 4', sub: '71 participantes', c: '#2F6B3F' },
  daniela: { n: 'Daniela Rondón', sub: 'Participante · Grupo 2', c: '#C53030' },
};

export const WSP = [
  { chat: 'daniela', t: '08:20', de: 'Daniela', txt: 'Buenos días 🌞 ¿La constancia saldrá con mi carné de extranjería? Quiero postular a técnica en farmacia en un instituto y me la piden.' },
  { chat: 'area', t: '08:45', de: 'Fiorella', txt: 'AulaNorte puede exportar horas conectadas y notas, pero NO las horas presenciales. Eso lo tienes tú en tu registro 👀' },
  { chat: 'mario', t: '09:30', de: 'Mario', txt: 'Señorita, necesito las constancias de mis chicos con las 24 horas completas. El zonal las va a pedir en su visita.' },
  { chat: 'jorge', t: '12:10', de: 'Jorge', txt: 'Grupo 6 avanza bien. El arqueo ya va antes del almuerzo, como acordamos ⏱️', si: 'anonimato_jorge' },
  { chat: 'daniela', t: '17:40', de: 'Daniela', txt: '¡Me llegó! Con mi CE bien escrito y el código para verificar. Mañana voy al instituto 🥹', si: 'constancias_entregadas' },
];

export const CORREOS = [
  { t: '08:05', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Constancias', html: '<p>El primer día prometí constancias y hoy me las están pidiendo. AulaNorte no las emite. ¿Puedes armar una plantilla y sacar las de los grupos 1 a 4? Yo las firmo.</p><p>Las de quienes van al reexamen, cuando lo aprueben.</p><p>Karen</p>' },
];

export const QUIZ = [
  { q: 'Una constancia de capacitación debe decir…', ops: ['Las horas que el jefe pida', 'Las horas y fechas reales según el registro', 'Siempre 40 horas', 'Solo el nombre del curso'], ok: 1, por: 'Una constancia certifica lo que pasó. Si no, es un documento falso.' },
  { q: '¿Se debe mencionar en la constancia que la persona tiene una discapacidad?', ops: ['Sí, siempre', 'No: es un dato sensible que no hace falta para certificar el curso', 'Solo si aprobó', 'Solo si el jefe lo pide'], ok: 1, por: 'Solo se ponen los datos necesarios (Ley 29733).' },
  { q: 'Seis personas se capacitaron un domingo, su día libre, sin pago. ¿Qué corresponde?', ops: ['Nada, ya pasó', 'Revisar el registro y que Planillas pague esas horas', 'Darles una constancia como compensación', 'Que lo olviden'], ok: 1, por: 'Las capacitaciones fuera de la jornada se remuneran (Reglamento de la Ley 29783, art. 98).' },
  { q: 'Alguien desaprobó y va al reexamen. ¿Qué constancia recibe hoy?', ops: ['La de aprobado, para no desanimarlo', 'Ninguna o una de participación, y la de aprobación cuando apruebe', 'Una con nota inventada', 'La misma que todos'], ok: 1, por: 'La constancia refleja el estado real.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:30', ch: 'documento', who: null, titulo: 'La plantilla', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Abres un Word en blanco con el logo de Boticas del Norte. Daniela necesita la suya para un instituto; otros la quieren para su legajo. <mark class="clave">Lo que pongas aquí lo van a leer personas que no estuvieron en el aula</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la constancia.', boton: 'Guardar la plantilla',
    bloques: [
      { id: 'quien', t: 'Datos de la persona', n: 2, ops: [
        { id: 'q1', t: 'Nombre completo y número de documento (DNI o carné de extranjería).', ok: true, por: 'Identifica sin pedir más.' },
        { id: 'q2', t: 'Local y puesto: cajero(a).', ok: true },
        { id: 'q3', t: 'Edad, distrito y estado civil.', ok: false, por: 'No hacen falta para certificar un curso.' },
      ] },
      { id: 'que', t: 'Lo que certifica', n: 2, ops: [
        { id: 'c1', t: 'Nombre del curso, fechas y horas reales: presenciales y virtuales por separado.', ok: true, por: 'Sale del registro de asistencia y de AulaNorte.' },
        { id: 'c2', t: 'Temas: seguridad y salud, rol del cajero, caja y boleta, arqueo, derivación al químico farmacéutico.', ok: true },
        { id: 'c3', t: '«Apto para atender en botica».', ok: false, por: 'La escuela no puede certificar eso: atender en botica no es solo cobrar.' },
      ] },
      { id: 'valid', t: 'Validez', n: 2, ops: [
        { id: 'v1', t: 'Firma de Karen y un código para verificarla escribiendo a capacitacion@boticasnorte.pe.', ok: true, por: 'El instituto podrá confirmar que es real.' },
        { id: 'v2', t: 'Firma escaneada de gerencia, pegada como imagen, sin código.', ok: false, por: 'Cualquiera la copia.' },
        { id: 'v3', t: 'Estado: «aprobado» o «participó», según el examen.', ok: true, por: 'Dice la verdad sobre el resultado.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : -1 },
        flags: q === 'buena' ? ['plantilla_ok'] : [], cartera: { plantilla: q === 'buena' ? 'Plantilla con horas reales y código' : 'Plantilla con fallas' },
        out: q === 'buena' ? 'La plantilla ocupa media página. Karen la lee y dice: «Por fin una constancia que no da vergüenza».' : 'La plantilla sirve, pero dice cosas que no debería o le falta cómo verificarla.',
        pro: { ok: 'Una buena constancia dice quién, qué, cuántas horas reales y cómo verificarla.', risk: 'Prometer lo que la escuela no certifica, o poner datos de más, convierte un papel en un problema.', info: 'Guarda un código por persona en el registro.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una constancia que dice la verdad!' : 'Algo de eso no va.'],
      };
    },
    rules: [[LEY, 'Una constancia lleva solo los datos necesarios (Ley 29733).'], [BP, 'Las horas de la constancia salen del registro, no de lo prometido.']],
    mirada: {
      ve: 'Para muchos participantes, esta es la primera constancia laboral de su vida. La van a mostrar en un instituto o en otro trabajo. Que diga la verdad, y que se pueda verificar, es lo que le da valor.',
      visual: { tipo: 'flujo', titulo: 'Lo que dice una constancia', pasos: ['Quién', 'Qué curso', 'Fechas y horas reales', 'Resultado', 'Firma y código'] },
    },
  },
  {
    id: 'c2', t: '09:40', ch: 'whatsapp', who: 'local', titulo: '«Con las 24 horas completas»', banner: 'assets/foto/frente-a-frente.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Mario insiste por audio, con el ruido de la avenida Gonzales Prada de fondo. ${F.has('mario_tolerado') ? '«Mis cuatro ya aprendieron mirando, señorita. Póngales las 24 horas y listo.»' : '«Brenda y Josué recién van un día. Póngales las 24 horas, total igual van a terminar.»'}</p><p>«El zonal viene la próxima semana y <mark class="clave">si no tengo las constancias, me jala las orejas a mí</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que la constancia solo puede decir las horas que el registro muestra, y ofrecerle una carta para el zonal con el estado de su gente y las fechas que faltan.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 3, confianza: 1 }, rel: { local: 0 }, flags: ['constancia_real'], cartera: { lista: 'La Esperanza: constancias cuando terminen; carta para el zonal' },
          out: 'Mario se queda callado. «¿Una carta? Ya, eso me sirve.» A los diez minutos manda: «Gracias. Y perdón por insistir».',
          pro: { ok: 'Le resuelves su problema real (el zonal) sin falsear un documento.', risk: 'Mario tendrá que explicar por qué su gente va atrasada.', info: 'Que la carta la firme Karen.' },
          kusi: ['animo', 'Verdad, con una salida práctica.'] } },
      { id: 'b', label: 'Hacerle el favor: son unas pocas horas y igual van a terminar el jueves.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { local: 1 }, flags: ['constancia_inflada'], cartera: { lista: 'La Esperanza: constancias con horas no dictadas' },
          out: 'Mario recibe sus constancias. Una dice que Josué hizo un examen que todavía no rinde.',
          pro: { ok: 'Mario queda contento.', risk: 'Una constancia con horas que no ocurrieron es un documento falso con la firma de Karen.' },
          kusi: ['indignado', '¡Eso no pasó!'] } },
      { id: 'c', label: 'Decirle que no hay constancias para nadie hasta que terminen todos los grupos.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -2 },
          out: 'Mario no insiste. Pero Daniela y otras 70 personas que sí terminaron tendrán que esperar semanas.',
          pro: { ok: 'No falseas nada.', risk: 'Castigas a quienes sí cumplieron por lo que falta de otros.' },
          kusi: ['pensando', '¿Y los que ya terminaron?'] } },
    ],
    rules: [[BP, 'Una constancia certifica lo que el registro muestra. Nada más.']],
    mirada: {
      ve: 'Mario no busca engañar por gusto: tiene miedo de su jefe. Pero una constancia inflada no lo protege: lo expone a él, a Karen y a la escuela. Entender su miedo real te permite ofrecerle algo que sí le sirve.',
      visual: { tipo: 'balanza', a: { t: 'Constancia con 24 horas', items: ['Mario tranquilo hoy', 'Documento falso', 'Firma de Karen en riesgo'] }, b: { t: 'Carta con el estado real', items: ['El zonal entiende', 'Constancias reales el jueves', 'Nadie miente'] } },
    },
  },
  {
    id: 'c3', t: '11:10', ch: 'sistema', who: null, titulo: 'Cómo se emite una constancia', banner: 'assets/esc/planilla.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>Fiorella te deja exportar de AulaNorte las horas virtuales y las notas. Las presenciales están en tu registro. <mark class="clave">Hay que juntar las dos cosas sin que se cruce un dato</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para emitir las constancias. Usa las flechas.', boton: 'Guardar el procedimiento',
    items: [
      { id: 'exp', t: 'Exportar de AulaNorte horas virtuales y notas', por: 'Lo que la plataforma sí sabe.' },
      { id: 'cruz', t: 'Cruzarlas con el registro de asistencia presencial', por: 'Por número de documento, no por nombre.' },
      { id: 'est', t: 'Marcar el estado de cada persona: aprobó, va al reexamen o no terminó', por: 'Define qué constancia corresponde.' },
      { id: 'gen', t: 'Generar las constancias con la plantilla y un código por persona', por: 'Combinación de correspondencia.' },
      { id: 'rev', t: 'Revisar una muestra antes de que Karen firme', por: 'Diez constancias al azar.' },
      { id: 'env', t: 'Enviarlas al correo de cada persona desde la cuenta de Capacitación', por: 'Por un canal de la empresa.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['constancias_ordenadas'] : [], cartera: { plantilla: q === 'buena' ? 'Procedimiento de emisión listo' : 'Emisión sin orden claro' },
        out: q === 'buena' ? 'A las 12:40 tienes 71 constancias en PDF. La muestra de diez te salva de un error: dos personas con el mismo apellido tenían las horas cruzadas.' : 'Las constancias salen, pero sin revisar una muestra. Algún error se va a escapar.',
        pro: { ok: 'Cruzar por documento y revisar una muestra evita que la constancia de una persona diga lo de otra.', risk: 'Enviar sin revisar es firmar a ciegas.', info: 'Anota este procedimiento para Chiclayo o cualquier otra escuela.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡71 constancias sin cruzar datos!' : 'Revisa el orden…'],
      };
    },
    mirada: {
      ve: 'Cuando la plataforma no hace algo, la asistente lo hace con lo que tiene: un export, un registro y una plantilla. Lo importante no es la herramienta, sino que el dato de cada persona sea el suyo.',
      visual: { tipo: 'flujo', titulo: 'De dos fuentes a una constancia', pasos: ['AulaNorte: virtual y notas', 'Registro: presencial', 'Estado', 'Plantilla', 'Muestra', 'Correo'], aqui: 1 },
    },
  },
  {
    id: 'c4', t: '13:30', ch: 'documento', who: null, titulo: 'La lista antes de firmar', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Almuerzas un ceviche de caballa con canchita en el mercado de la esquina y vuelves con la lista final impresa. Karen firma a las tres. <mark class="clave">Lo que pase de aquí, sale con su firma</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que tienen errores o datos que no deben ir.',
    doc: { t: 'Lista de constancias · Grupos 1 a 4', sub: 'Escuela de cajeros · para firma de Karen Vásquez' },
    lines: [
      { id: 'dan', t: 'Daniela Rondón · DNI 001234567 · 24 h · Aprobó.', bad: BP, why: 'Es carné de extranjería, no DNI. El instituto podría rechazarla.' },
      { id: 'yan', t: 'Yanet Chávez · DNI 4xxxxxx8 · 24 h · Aprobó.', bad: BP, why: 'Yanet va al reexamen del jueves. Hoy le corresponde «participó».' },
      { id: 'kev', t: 'Kevin Rodríguez · DNI 7xxxxxx3 · 24 h · Aprobó · Persona con discapacidad auditiva.', bad: LEY, why: 'La condición de discapacidad es un dato sensible que no hace falta para certificar el curso (Ley 29733).' },
      { id: 'mar', t: 'Maritza Vera · DNI 4xxxxxx1 · 24 h · Aprobó.' },
      { id: 'jhon', t: 'Jhon Cueva · DNI 7xxxxxx0 · 24 h · Aprobó.', bad: BP, why: 'Jhon solo hizo el día 1 con el grupo 3; le faltan dos días.' },
      { id: 'ros', t: 'Rosa Gamboa · DNI 7xxxxxx5 · 22.5 h (llegó 9:20 el día 1) · Aprobó.' },
      { id: 'cod', t: 'Cada constancia lleva un código único verificable.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Corriges algunos datos, pero en la constancia de Kevin queda su discapacidad escrita. Kevin la ve y no dice nada, pero no la usa.' : `Corriges ${hitsLey + hitsBp} líneas. Karen firma a las tres y comenta: «La de Rosa con 22.5 horas me encanta: eso es decir la verdad».`,
      flags: [missLey ? 'lista_errores' : 'lista_limpia'],
      cartera: { lista: missLey ? 'Constancias firmadas con errores' : '71 constancias limpias y firmadas' },
      pro: { ok: 'Revisar antes de la firma es proteger a quien firma y a quien recibe.', risk: 'Un dato sensible en una constancia acompaña a la persona a cada trabajo donde la muestre.', info: 'Las de reexamen se emiten el jueves, con el resultado nuevo.' },
      kusi: missLey ? ['preocupado', 'Ese dato no tenía que ir…'] : ['feliz', '¡Lista limpia, firma tranquila!'],
    }),
    rules: [[LEY, 'Una constancia no debe incluir datos sensibles innecesarios, como la condición de discapacidad (Ley 29733).']],
    mirada: {
      ve: 'En una lista de 71, los errores se esconden en lo cotidiano: un carné tomado por DNI, una aprobación que aún no ocurre, un dato que nadie pidió. Revisar es el último filtro antes de que el error tenga firma.',
      visual: { tipo: 'cambio', titulo: 'Antes y después de revisar', pares: [['Daniela con DNI', 'Daniela con carné de extranjería'], ['Yanet «aprobó»', 'Yanet «participó», reexamen el jueves'], ['Kevin con su discapacidad', 'Kevin sin datos sensibles']] },
    },
  },
  {
    id: 'c5', t: '15:30', ch: 'presencial', who: null, titulo: 'El reclamo en la puerta', banner: 'assets/foto2/grito.webp', lugar: 'Puerta del aula', show: ['personas', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>${F.has('domingo_sin_pago') ? 'Sandra, de La Esperanza, llega sin cita. «Señorita, el domingo vinimos los seis a capacitarnos, como dijo el señor Mario. Era nuestro día libre. En la boleta no sale nada.»' : F.has('sobretiempo_forzado') ? 'Maritza, del grupo 3, llega sin cita. «Señorita, el miércoles nos quedamos hasta las 6:15. Mi vecina me cobró por recoger a mi hijo. ¿Eso se paga?»' : 'Jhon, del grupo 3, llega sin cita. «Señorita, ¿por qué a mí no me llegó la constancia? Yo sí vine.»'}</p><p>Habla bajito, pero <mark class="clave">no se va a ir sin una respuesta</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Abrir el registro con la persona, mostrarle lo que dice, y si se le deben horas, derivarlo hoy a Planillas con la copia del registro.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4, confianza: 2 }, flags: ['reclamo_atendido'], cartera: { reclamos: 'Reclamo atendido con el registro y derivado' },
          out: 'Juntos ven el registro. Le dices qué consta, qué le corresponde y qué pasa ahora. Mandas el correo a Planillas con copia a Karen. Se va con la foto del correo en su celular.',
          pro: { ok: 'El registro es la prueba; la derivación, la solución.', risk: 'Karen tendrá que explicar por qué pasó.', info: 'Las horas de capacitación fuera de la jornada se pagan; el sobretiempo, con recargo o descanso.' },
          kusi: ['animo', '¡Para eso servía el registro!'] } },
      { id: 'b', label: 'Decirle que eso lo tiene que ver con su jefe de local.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3 },
          out: 'La persona se va sin mirar atrás. Si su jefe fue parte del problema, no habrá respuesta.',
          pro: { ok: 'No te metes en lo que no es tuyo.', risk: 'Lo que pasó en la escuela es responsabilidad de la escuela.' },
          kusi: ['triste', 'Vino a buscarte a ti.'] } },
      { id: 'c', label: 'Prometerle que se lo vas a solucionar esta semana.',
        res: { q: 'aceptable', fx: { personas: 2, confianza: -1 },
          out: 'Se va más tranquila. Pero el pago no depende de ti, y no anotaste nada.',
          pro: { ok: 'La calmas.', risk: 'Prometer sin derivar ni registrar es dejarla esperando.' },
          kusi: ['pensando', '¿Y quién lo va a pagar?'] } },
    ],
    rules: [[LEY, 'Las capacitaciones fuera de la jornada se remuneran (Reglamento de la Ley 29783, art. 98).'], [LEY, 'El sobretiempo se paga con recargo o se compensa con descanso (D.S. 007-2002-TR, art. 10).']],
    mirada: {
      ve: 'Un reclamo en la puerta es la prueba de fuego del registro. Si dice la verdad, en cinco minutos sabes qué corresponde. Si no existe o está maquillado, la palabra de la persona queda contra la de la empresa.',
      visual: { tipo: 'flujo', titulo: 'Atender un reclamo', pasos: ['Escuchar', 'Abrir el registro con la persona', 'Decir qué consta', 'Derivar a Planillas', 'Avisar a Karen'] },
    },
  },
  {
    id: 'c6', t: '17:15', ch: 'whatsapp', who: null, titulo: 'El aviso de las constancias', banner: 'assets/foto2/celebra-laptop.webp', show: ['personas', 'calidad', 'cumplimiento'],
    body: () => `<p>Karen firmó. Las 71 constancias están listas para salir. Antes de enviarlas por correo, avisas en el grupo. <mark class="clave">Lo que no expliques hoy, lo preguntarán uno por uno</mark>.</p>`,
    type: 'compose', enviaA: 'grupo1', para: 'Para: Escuela de cajeros · Grupos 1 a 4', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'por', t: 'Por dónde llega', ops: [
        { id: 'p1', t: 'En la próxima hora les llega su constancia al correo que registraron, desde capacitacion@boticasnorte.pe.', ok: true, por: 'Canal oficial y cuándo.' },
        { id: 'p2', t: 'Aquí les dejo las 71 constancias en un zip 📎', ok: false, por: 'Todos verían los documentos y datos de todos.' },
      ] },
      { id: 'que', t: 'Qué dice', ops: [
        { id: 'q1', t: 'Dice sus horas reales, presenciales y virtuales. Quienes van al reexamen reciben la de participación hoy y la de aprobación el jueves.', ok: true, por: 'Explica por qué algunas dicen distinto.' },
        { id: 'q2', t: 'Todas dicen 24 horas y aprobado 🎉', ok: false, por: 'No es cierto para todos.' },
      ] },
      { id: 'err', t: 'Si hay un error', ops: [
        { id: 'e1', t: 'Si ven un error, escríbanme por privado y la corrijo en el día.', ok: true },
        { id: 'e2', t: 'Si hay errores, ya no se pueden cambiar.', ok: false, por: 'Falso y desalentador.' },
      ] },
    ],
    res: sel => {
      const mal = sel.por === 'p2' || sel.que === 'q2', buenas = ['p1', 'q1', 'e1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -3 : 1, cumplimiento: sel.por === 'p2' ? -4 : 2, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['constancias_entregadas'] : [], cartera: { lista: q === 'buena' ? '71 constancias enviadas por correo' : 'Constancias enviadas con dudas' },
        out: q === 'buena' ? 'El grupo se llena de fotos de constancias en pantallas de celular. Rosa escribe: «Es la primera que tengo con mi nombre».' : mal ? 'En diez minutos, alguien comparte en otro grupo la constancia de una compañera.' : 'Las constancias llegan. Tres personas preguntan por qué la suya dice distinto.',
        pro: { ok: 'Canal oficial, explicación de las diferencias y una puerta para corregir.', risk: 'Un zip con todas expone 71 documentos de identidad.', info: 'Archiva las constancias en la carpeta del grupo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La primera constancia de muchos!' : 'Ojo con el canal.'],
      };
    },
    rules: [[LEY, 'Los documentos con datos personales se envían a cada titular, por canales de la empresa (Ley 29733).']],
    mirada: {
      ve: 'Prometer constancias el primer día fue fácil; cumplirlo exigió una plantilla, un registro, un cruce de datos y un aviso claro. Cumplir lo prometido es lo que hace que la próxima escuela tenga participantes que confían.',
      visual: { tipo: 'mensaje', titulo: 'El aviso de las constancias', txt: 'En la próxima hora les llega su constancia al correo, desde capacitacion@boticasnorte.pe. Dice sus horas reales. Quienes van al reexamen reciben hoy la de participación y el jueves la de aprobación. Si ven un error, escríbanme por privado.' },
    },
  },
];
