// Practicante de RR.HH. · Capítulo 1 · «Bienvenida a planta» · Semana 1, lunes.
// Hilo de la quincena: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.

export const CAP = {
  n: 1, titulo: 'Bienvenida a planta', dia: 'Semana 1, lunes', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'Hilandería Andina · Parque Industrial de Arequipa',
  inicio: '07:30', fin: '20:30', cierreHora: '19:55',
  apertura: 'Hilandería Andina, Parque Industrial de Arequipa. Hoy empiezan tus prácticas profesionales en RR.HH.', boton: 'Entrar a la planta',
  kusi: '¡Primer día de prácticas! Aquí se aprende mirando y haciendo. ¡Dale!',
  lead: 'Firmaste (o corregiste) tu convenio, ordenaste lo urgente, cuidaste datos que no son tuyos y ayudaste a una operaria nueva a no firmar a ciegas.',
  reflexion: '¿Qué tarea de hoy te pareció pequeña pero resultó importante?',
  siguiente: { n: 2, titulo: 'Los legajos', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'legajos', p: 'Archivo de legajos', j: 'Carla · RR.HH.', d: 0, e: '300 legajos sin orden' },
  { id: 'ingresos', p: 'Ingreso de 40 operarias', j: 'Carla · Producción', d: 0, e: 'Entran por grupos desde el jueves' },
  { id: 'credenciales', p: 'Credenciales', j: 'Don Teófilo · Producción', d: 0, e: 'Pendiente: fotos y datos' },
  { id: 'induccion', p: 'Inducción de operarias', j: 'Carla · RR.HH.', d: 0, e: 'Semana 2' },
  { id: 'asistencia', p: 'Reporte de asistencia', j: 'Carla · RR.HH.', d: 0, e: 'Cada viernes' },
];

export const FUTURO = {
  convenio_corregido: ['Tu convenio se corrigió antes de firmarlo.', 'Ya sabes qué derechos tienes como practicante.'],
  convenio_firmado: ['Firmaste un convenio con condiciones que la ley no permite.', 'Carla lo revisará en el capítulo 2.'],
  dni_wsp: ['Enviaste por WhatsApp los DNI de 40 personas.', 'Volverá en el capítulo 2, cuando ordenes los legajos.'],
  dni_carpeta: ['Los DNI viajaron por la carpeta de la empresa, con permisos.', 'Don Teófilo tendrá sus credenciales mañana.'],
  teofilo_molesto: ['Don Teófilo se quedó molesto con «la practicante».', 'Lo verás en el capítulo 3.'],
  rosa_informada: ['Rosa entendió qué firma y tiene tiempo para elegir su sistema de pensiones.', 'Te buscará en la inducción del capítulo 4.'],
  rosa_onp: ['Le dijiste a Rosa qué sistema de pensiones elegir.', 'Esa decisión era suya. Capítulo 4.'],
  asistencia_diego: ['Le pasaste a Diego un Excel con datos de todo el personal.', 'Capítulo 5.'],
  sensibles_primero: ['Separaste los documentos médicos en sobres cerrados.', 'Te servirá ante la auditoría del capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria nueva', who: 'rosa' },
};

export const WSP = [
  { chat: 'grupo', t: '07:32', de: 'Carla', txt: 'Bienvenida a la manada 🦙 Hoy empieza nuestra nueva practicante de RR.HH.' },
  { chat: 'grupo', t: '07:35', de: 'Diego', txt: '¡Por fin alguien más joven que yo en este grupo! 😄' },
  { chat: 'teofilo', t: '10:32', de: 'Don Teófilo', txt: 'Señorita, ¿usted es la nueva de RR.HH.? Voy para allá.' },
  { chat: 'diego', t: '12:10', de: 'Diego', txt: '¿Almorzamos? Hoy hay adobo 🍲' },
  { chat: 'carla', t: '16:40', de: 'Carla', txt: 'Don Teófilo me contó que le mandaste los DNI por WhatsApp. Mañana conversamos, ¿ok?', si: 'dni_wsp' },
  { chat: 'carla', t: '16:40', de: 'Carla', txt: 'Bien con lo de los DNI. Así se hace 👌', si: 'dni_carpeta' },
  { chat: 'rosa', t: '17:30', de: 'Rosa', txt: 'Gracias señorita por explicarme 🙏', si: 'rosa_informada' },
  { chat: 'diego', t: '19:40', de: 'Diego', txt: 'Oye, ¿me pasas el Excel de asistencia de todo el personal? Mi jefa me lo pide para cruzar horas extra y no lo encuentro 😅' },
];

export const CORREOS = [
  { t: '07:50', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Tu plan de prácticas', html: '<p>¡Bienvenida! En estas dos semanas vas a apoyar el ingreso de 40 operarias para el pedido de Hamburgo.</p><p>Semana 1: legajos, selección, inducción y asistencia.<br>Semana 2: bienestar, auditoría, una propuesta tuya y el cierre de la quincena.</p><p>Carla</p>' },
  { t: '15:10', de: 'Mesa de ayuda', para: 'Practicante de RR.HH.', asunto: 'Tu acceso a la carpeta de RR.HH.', html: '<p>Ya tienes acceso de lectura y escritura a la carpeta «RR.HH. / Legajos». Recuerda: los documentos no se envían por canales personales.</p>' },
];

export const QUIZ = [
  { q: '¿Qué norma regula las prácticas profesionales en el Perú?', ops: ['Ley 28518, de modalidades formativas', 'Ley 29783, de seguridad y salud', 'Ley 30709, de igualdad salarial', 'Ley 26771, de nepotismo'], ok: 0, por: 'La Ley 28518 regula los convenios de prácticas: subvención, jornada, seguro y plan de aprendizaje.' },
  { q: 'En tu convenio de prácticas profesionales, ¿quién debe asegurarte?', ops: ['Tú, con tu propio seguro', 'La empresa', 'La universidad, siempre', 'Nadie: no es obligatorio'], ok: 1, por: 'La empresa debe darte un seguro que cubra enfermedad y accidentes.' },
  { q: 'Un jefe te pide los DNI de 40 personas por WhatsApp. ¿Qué haces?', ops: ['Se los mandas: es un jefe', 'Los compartes por la carpeta de la empresa, con permisos y con tu jefa al tanto', 'Le dices que nunca podrá verlos', 'Los publicas en el grupo del área'], ok: 1, por: 'Los datos personales se comparten solo para su finalidad y por canales controlados.' },
  { q: '¿Qué documento suele considerarse dato sensible en un legajo?', ops: ['La constancia de estudios', 'El certificado médico', 'El contrato', 'La foto del credencial'], ok: 1, por: 'La información de salud es un dato sensible y necesita más protección.' },
  { q: 'Una operaria nueva no sabe si elegir AFP u ONP. ¿Qué te toca?', ops: ['Elegir por ella para no demorar', 'Darle información clara y respetar que ella decida en su plazo', 'Decirle que firme la ONP porque es la más común', 'Mandarla a buscar en internet'], ok: 1, por: 'La decisión es de la trabajadora. Tu rol es informar con claridad y a tiempo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '07:45', ch: 'presencial', who: 'carla', titulo: 'Carla te recibe', banner: 'assets/foto2/pasillo.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: (n) => `<p>El ruido de las máquinas de hilado se oye hasta la oficina de RR.HH. Carla te entrega un casco blanco y tu credencial de practicante.</p><p>«Bienvenida${n ? ', ' + n : ''}. Estas dos semanas viene el pedido más grande del año: chompas de alpaca para una tienda de Hamburgo. Tenemos que contratar e inducir a <mark class="clave">40 operarias en dos semanas</mark>.»</p><p>Señala una pizarra con post-its desordenados: «Los pegó la practicante anterior. Antes de cualquier cosa, ordénalos: así sabré si entiendes cómo entra una persona a esta empresa».</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para que una operaria nueva entre a trabajar. Usa las flechas.', boton: 'Mostrarle la pizarra a Carla',
    items: [
      { id: 'req', t: 'Producción pide las operarias que necesita', por: 'Todo empieza con un requerimiento.' },
      { id: 'sel', t: 'Selección: aviso, filtro y entrevistas', por: 'Se busca y se evalúa.' },
      { id: 'med', t: 'Examen médico de ingreso', por: 'Antes del contrato: confirma que puede hacer el trabajo.' },
      { id: 'doc', t: 'Firma del contrato y entrega de documentos', por: 'Se arma su legajo.' },
      { id: 'alta', t: 'Alta en T-Registro el día que empieza', por: 'Dentro del día de ingreso.' },
      { id: 'ind', t: 'Inducción y entrega del puesto', por: 'Conoce la planta, las normas y su línea.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 4 : 0 },
        rel: { carla: q === 'buena' ? 1 : 0 }, flags: [q === 'buena' ? 'proceso_claro' : 'proceso_dudas'],
        out: q === 'buena' ? 'Carla asiente: «Bien. Ahora ya sabes dónde encaja cada cosa que hagas en estas dos semanas». Te deja tu convenio para que lo leas antes de firmarlo.' : 'Carla reordena dos post-its y te explica por qué. «No pasa nada, para eso estás aquí.» Te deja tu convenio para que lo leas antes de firmarlo.',
        pro: { ok: 'Conocer el orden del proceso te permite ver qué se atrasa y a quién afecta.', risk: 'Si el contrato o el examen médico llegan tarde, el alta y la inducción se caen con ellos.', info: 'Pregunta cuánto tarda cada paso: así sabrás si 40 ingresos en un mes son posibles.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Perfecto! Ya tienes el mapa de la quincena.' : 'Casi. Ahora ya tienes el mapa de la quincena.'],
      };
    },
    rules: [[LEY, 'El alta en T-Registro se hace dentro del día en que la persona empieza a trabajar (SUNAT).'], [BP, 'Antes de hacer tareas sueltas, entiende el proceso completo en el que encajan.']],
    mirada: {
      ve: 'Una practicante que entiende el proceso completo deja de ver tareas sueltas y empieza a ver consecuencias: un legajo incompleto atrasa un alta, y un alta tardía es un incumplimiento. Por eso Carla empieza por la pizarra y no por el archivo.',
      visual: { tipo: 'flujo', titulo: 'Cómo entra una persona a Hilandería Andina', pasos: ['Requerimiento', 'Selección', 'Examen médico', 'Contrato y legajo', 'Alta en T-Registro', 'Inducción'] },
    },
  },
  {
    id: 'a2', t: '08:30', ch: 'documento', who: null, titulo: 'Tu convenio', banner: 'assets/foto/acuerdo.webp', show: ['cumplimiento', 'confianza', 'etica'],
    body: () => `<p>Lees el borrador de tu convenio de prácticas profesionales. Lo preparó el área legal con un formato de hace años. Carla te dijo: <mark class="clave">«Léelo con calma; si algo no cuadra, dímelo»</mark>.</p>`,
    type: 'flag', prompt: 'Marca las cláusulas que crees que no cumplen la ley o que deberían corregirse.',
    doc: { t: 'Convenio de prácticas profesionales', sub: 'Borrador · Hilandería Andina S.A.C.' },
    lines: [
      { id: 'dur', t: 'Duración: 6 meses, renovable.' },
      { id: 'tareas', t: 'Actividades: apoyo en legajos, selección, inducción y asistencia.' },
      { id: 'jornada', t: 'Horario: de lunes a sábado, de 8:00 a 18:00, con una hora de almuerzo.', bad: LEY, why: 'Son 9 horas diarias y 54 a la semana. Para prácticas profesionales, la jornada no puede superar 8 horas diarias ni 48 semanales.' },
      { id: 'sub', t: 'Subvención mensual: S/ 600.', bad: LEY, why: 'Con jornada completa, la subvención no puede ser menor a la remuneración mínima vital.' },
      { id: 'seguro', t: 'El practicante contratará su propio seguro de salud.', bad: LEY, why: 'La empresa debe asegurar al practicante contra enfermedades y accidentes.' },
      { id: 'plan', t: 'Plan de aprendizaje: por definir.', bad: BP, why: 'El plan de aprendizaje es la razón de ser de las prácticas. Sin él, el convenio se parece a un empleo barato.' },
      { id: 'cert', t: 'Al terminar, la empresa entregará un certificado de prácticas.' },
      { id: 'conf', t: 'El practicante guardará reserva sobre la información de la empresa y del personal.', duda: 'Es razonable y además te protege: en RR.HH. manejarás datos personales de todo el personal.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Firmas un convenio con cláusulas que la ley no permite. Nadie se dio cuenta… todavía.' : 'Le muestras a Carla lo que encontraste. Ella se sorprende, llama al área legal y corrigen el convenio antes de que lo firmes.',
      flags: [missLey ? 'convenio_firmado' : 'convenio_corregido'],
      rel: { carla: missLey ? 0 : 1 },
      pro: { ok: 'Leer antes de firmar es una costumbre de profesional, empezando por tu propio convenio.', risk: 'Un formato viejo no significa que esté bien. Las condiciones de las prácticas están en la ley.', info: 'Pregunta también cuánto dura tu descanso y cómo se registra tu asistencia.' },
      kusi: missLey ? ['preocupado', 'Uy… ese convenio tenía trampas.'] : ['celebra', '¡Qué bacán! Te defendiste desde el primer día.'],
    }),
    rules: [[LEY, 'Las prácticas profesionales se rigen por la Ley 28518 de modalidades formativas.'], [BP, 'Lee cualquier documento antes de firmarlo, incluso si «siempre se hizo así».']],
    mirada: {
      ve: 'Las prácticas no son un contrato de trabajo, pero tampoco son un favor. La ley fija mínimos: subvención, jornada, seguro y un plan de aprendizaje. Una profesional de RR.HH. empieza conociendo los derechos que le tocan a ella misma.',
      visual: { tipo: 'cambio', titulo: 'Del borrador a un convenio correcto', pares: [['Lunes a sábado, 8:00 a 18:00', 'Máximo 8 horas diarias y 48 semanales'], ['Subvención de S/ 600', 'No menos que la remuneración mínima, con jornada completa'], ['Seguro a cargo del practicante', 'Seguro a cargo de la empresa'], ['Plan de aprendizaje: por definir', 'Plan con lo que aprenderás cada mes']] },
      normas: [{ ley: 'Ley 28518, de modalidades formativas laborales', dice: 'Fija los derechos del practicante: una subvención mensual, una jornada máxima, un seguro a cargo de la empresa, descanso y un certificado al terminar.', practica: 'Un convenio que no respeta esos mínimos expone a la empresa a que la relación se considere laboral.' }],
    },
  },
  {
    id: 'a3', t: '09:20', ch: 'documento', who: null, titulo: 'Trescientos legajos', banner: 'assets/esc/escritorio.webp', lugar: 'Archivo de RR.HH.', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>El archivo de RR.HH. es un cuarto sin ventanas con 300 legajos en cajas. Algunos tienen etiqueta, otros no. Hay certificados médicos sueltos entre los contratos.</p><p>Hoy solo te alcanza para <mark class="clave">dos tareas</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos tareas con las que vas a empezar.', boton: 'Empezar por aquí', resumen: 'Empezaste por',
    cols: ['Tarea', 'Por qué importa'],
    rows: [
      { id: 'nuevas', cells: ['Preparar los legajos de las 40 operarias que entran desde el jueves', 'Sin legajo completo no hay alta ni contrato'] },
      { id: 'medicos', cells: ['Separar los certificados médicos en sobres cerrados', 'Son información de salud'] },
      { id: 'dni', cells: ['Listar los legajos con DNI vencido', 'Datos desactualizados'] },
      { id: 'alfa', cells: ['Ordenar todo alfabéticamente desde la A', 'Se ve ordenado'] },
      { id: 'cesados', cells: ['Revisar los legajos de cesados de 2019', 'Ocupan espacio'] },
    ],
    score: { nuevas: 3, medicos: 3, dni: 1, alfa: -1, cesados: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: picks.includes('medicos') ? 4 : -1, tiempo: picks.includes('alfa') ? -4 : 0 },
        flags: picks.includes('medicos') ? ['sensibles_primero'] : [], cartera: { legajos: picks.includes('nuevas') ? 'Legajos nuevos en preparación' : 'Ordenando el archivo' },
        out: picks.includes('nuevas') ? 'Armas una carpeta por cada operaria nueva, con una lista de lo que falta. Carla la mira y sonríe.' : 'El archivo empieza a verse ordenado, pero los ingresos del lunes siguen sin legajo.',
        pro: { ok: 'Lo urgente (los ingresos) y lo delicado (los datos de salud) van primero.', risk: 'Ordenar alfabéticamente se ve bien, pero no resuelve nada hoy.', info: 'Pregunta cuánto tiempo deben guardarse los legajos de cesados antes de tocarlos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Urgente y delicado primero. ¡Buen criterio!' : 'Se ve bonito, pero ¿qué urgía?'],
      };
    },
    rules: [[LEY, 'Los datos de salud son datos sensibles y requieren más protección (Ley 29733).'], [BP, 'Prioriza lo que tiene fecha y lo que puede dañar a alguien.']],
    mirada: {
      ve: 'Un archivo de RR.HH. no es papel: es la vida laboral de 300 personas. Una profesional ordena primero lo que tiene fecha límite y lo que puede hacer daño si cae en malas manos, como un certificado médico.',
      visual: { tipo: 'matriz', x: 'Esfuerzo hoy', y: 'Urgencia o riesgo', cuadrantes: ['Hazlo hoy', 'Empieza hoy y planifica', 'Si te sobra tiempo', 'Para después'], items: [['Legajos nuevos', .7, .92], ['Certificados médicos', .25, .8], ['DNI vencidos', .35, .45], ['Orden alfabético', .85, .15], ['Cesados 2019', .6, .1]] },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Los datos de salud son datos sensibles. Su tratamiento exige medidas de seguridad reforzadas.', practica: 'Un certificado médico suelto entre contratos puede leerlo cualquiera que abra la caja.' }],
    },
  },
  {
    id: 'a4', t: '10:40', ch: 'presencial', who: 'teofilo', titulo: 'Don Teófilo', banner: 'assets/foto/supervisa.webp', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Don Teófilo entra sin tocar, con el casco en la mano y polvo de fibra en el chaleco.</p><p>«Señorita, necesito los DNI de las 40 nuevas para hacer los credenciales. <mark class="clave">Mándemelos ahorita por WhatsApp</mark>, que el proveedor los recoge al mediodía.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Dejarlos en la carpeta compartida de la empresa y avisar a Carla.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, tiempo: -2 }, rel: { teofilo: 0 }, flags: ['dni_carpeta'], cartera: { credenciales: 'DNI en la carpeta de la empresa' }, envia: ['teofilo', 'Don Teófilo, le dejé los datos para los credenciales en la carpeta «Producción / Credenciales». Carla está al tanto. 👍'],
          out: 'Don Teófilo refunfuña: «Tanto trámite». Pero a las 11:30 el proveedor tiene lo que necesita, y solo lo que necesita: nombre y foto.',
          pro: { ok: 'Compartes lo justo, por un canal de la empresa y con tu jefa informada.', risk: 'Puede sentir que le pones trabas. Explícale que lo haces para cuidarlo también a él.', info: '¿El proveedor necesita el DNI completo o solo nombre, cargo y foto? Casi siempre basta con lo segundo.' },
          kusi: ['animo', 'Rápido y seguro a la vez. ¡Se puede!'] } },
      { id: 'b', label: 'Enviárselos por WhatsApp, porque es el jefe de producción, lo pide con urgencia y, al final, son documentos que la empresa ya tiene.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -7, tiempo: 3 }, rel: { teofilo: 1 }, flags: ['dni_wsp'], envia: ['teofilo', '📎 40 archivos: DNI_operarias.pdf'],
          out: 'Don Teófilo te agradece. Ahora los DNI de 40 personas están en su celular, en el del proveedor y quién sabe en cuántos más.',
          pro: { ok: 'Resuelves la urgencia de Don Teófilo en un minuto.', risk: 'Que la empresa tenga los datos no significa que cualquiera pueda moverlos por cualquier canal.' },
          kusi: ['preocupado', 'Esos DNI ya no sabemos dónde terminan…'] } },
      { id: 'c', label: 'Decirle que no se puede.',
        res: { q: 'aceptable', fx: { etica: 3, cumplimiento: 3, personas: -3 }, rel: { teofilo: -1 }, flags: ['teofilo_molesto'],
          out: '«¿Y entonces cómo hago los credenciales?», dice, y se va molesto. El proveedor pasa al mediodía y se va con las manos vacías.',
          pro: { ok: 'Proteges los datos.', risk: 'Un «no» sin alternativa bloquea el trabajo de otra área.', info: 'La alternativa existía: compartir solo lo necesario por un canal seguro.' },
          kusi: ['pensando', 'Bien el fondo, pero faltó el «cómo sí».'] } },
    ],
    rules: [[LEY, 'Los datos personales se usan solo para la finalidad para la que se entregaron (Ley 29733).'], [POL, 'En esta empresa, los documentos del personal se comparten solo por la carpeta institucional.']],
    mirada: {
      ve: 'Don Teófilo no quiere los DNI: quiere credenciales a tiempo. Una profesional separa la necesidad del pedido y entrega solo los datos que hacen falta, por un canal controlado. Así resuelve sin exponer a nadie.',
      visual: { tipo: 'balanza', a: { t: 'Mandarlo por WhatsApp', items: ['Resuelves en un minuto', 'Don Teófilo queda contento'] }, b: { t: 'Carpeta de la empresa', items: ['Solo los datos necesarios', 'Sabes quién accede', 'Las 40 operarias protegidas'] } },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Quien trata datos personales debe usarlos solo para su finalidad y protegerlos de accesos no autorizados.', practica: 'Un PDF con 40 DNI reenviado por WhatsApp deja de estar bajo el control de la empresa.' }],
    },
  },
  {
    id: 'a5', t: '12:30', ch: 'presencial', who: 'diego', titulo: 'Almuerzo con Diego', banner: 'assets/foto/cafe.webp', lugar: 'Comedor de la planta', show: ['personas', 'confianza', 'tiempo'],
    body: () => `<p>En el comedor, Diego, el practicante de Contabilidad, te hace espacio en su mesa.</p><p>«¿Primer día? Te cuento algo: aquí a los practicantes nos ponen a archivar y fotocopiar. <mark class="clave">No esperes aprender mucho</mark>», dice, entre risas y adobo.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntarle qué ha aprendido él en seis meses.',
        res: { q: null, fx: { personas: 2, confianza: 1 }, rel: { diego: 1 }, out: 'Diego lo piensa: «Bueno… sé hacer una planilla de principio a fin. Y a hablar con el contador sin miedo». Se queda callado. Luego sonríe: «Ya, sí he aprendido».', kusi: ['feliz', 'A veces aprendemos más de lo que creemos.'] } },
      { id: 'b', label: 'Darle la razón.',
        res: { q: null, fx: { personas: 0 }, out: 'Pasan el almuerzo quejándose. Vuelves a la oficina con menos ganas.', kusi: ['triste', 'El ánimo también se contagia.'] } },
    ],
    mirada: { ve: 'Las prácticas son lo que haces con ellas. Archivar parece poco, pero ahí aprendes cómo se ve la vida laboral de una persona en papeles. Preguntar qué aprendió alguien convierte una queja en una conversación útil.' },
  },
  {
    id: 'a6', t: '15:30', ch: 'presencial', who: 'rosa', titulo: '«¿Firmo nomás?»', banner: 'assets/esc/dudas.webp', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Rosa Huamaní, una de las operarias nuevas, viene a dejar sus documentos. Mira el formulario de elección de sistema de pensiones como si fuera un examen.</p><p>«Señorita… ¿qué es esto de AFP u ONP? <mark class="clave">¿Firmo nomás?</mark> Es que no quiero demorarme, mi hijo está con la vecina.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle lo básico con calma y decirle que tiene un plazo para elegir.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, tiempo: -2 }, rel: { rosa: 1 }, flags: ['rosa_informada'],
          out: 'Le das el boletín informativo, le explicas en dos minutos la diferencia y le dices que no tiene que decidir hoy. Rosa se va más tranquila, con el papel en su bolso.',
          pro: { ok: 'Informas sin decidir por ella y respetas su plazo.', risk: 'Si no sabes algo, no lo inventes: derívala a Planillas para los detalles.', info: 'Pregúntale si alguna vez aportó a un sistema: cambia lo que le conviene saber.' },
          kusi: ['celebra', 'Rosa se fue entendiendo lo que firma. ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle que firme la ONP, que es lo que firman casi todas, así no se demora y total después puede cambiarse si quiere.',
        res: { q: 'riesgosa', fx: { personas: -2, etica: -6, tiempo: 2 }, flags: ['rosa_onp'],
          out: 'Rosa firma aliviada. Acabas de decidir por ella algo que afecta su jubilación, y le dijiste algo que no sabes si es cierto.',
          pro: { ok: 'Rosa se va rápido.', risk: 'La elección es de la trabajadora. Y cambiarse no siempre es tan sencillo como suena.' },
          kusi: ['triste', 'Esa decisión era de Rosa, no nuestra.'] } },
      { id: 'c', label: 'Mandarla a Planillas.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: 1 }, out: 'Diego no está en su sitio. Rosa espera veinte minutos y se va sin preguntar.',
          pro: { ok: 'Derivar a quien sabe más es correcto.', risk: 'Derivar sin acompañar a veces es dejar sola a la persona.', info: 'Podías explicarle lo básico y luego derivarla.' },
          kusi: ['pensando', 'Derivar está bien… si alguien la recibe.'] } },
    ],
    rules: [[LEY, 'Quien empieza a trabajar puede elegir su sistema de pensiones y debe recibir información para hacerlo (Ley 28991).'], [BP, 'Informa, no decidas por la persona.']],
    mirada: {
      ve: 'En RR.HH. muchas personas firman lo que no entienden porque tienen prisa o vergüenza de preguntar. Una profesional reconoce ese momento y da información clara sin quitarle a la persona su decisión.',
      visual: { tipo: 'linea', titulo: 'Lo que debería pasar cuando alguien elige su sistema de pensiones', hitos: [['Al ingresar', 'Recibe el boletín informativo'], ['Días siguientes', 'Pregunta y compara'], ['Dentro del plazo', 'Elige y firma'], ['Si no elige', 'Se aplica lo que dice la norma']] },
      normas: [{ ley: 'Ley 28991 y normas sobre el boletín informativo', dice: 'El trabajador que se incorpora debe recibir información sobre los sistemas de pensiones y tiene un plazo para elegir.', practica: 'Decirle «firma nomás» le quita a Rosa el derecho a decidir informada.' }],
    },
  },
  {
    id: 'a7', t: '17:20', ch: 'correo', who: null, titulo: 'Tu primer reporte', banner: 'assets/esc/meta.webp', show: ['calidad', 'confianza', 'tiempo'],
    mail: { from: 'Carla Zegarra · Jefa de RR.HH.', to: 'Practicante de RR.HH.', asunto: 'Antes de irte' },
    body: () => `<p>Hola. Antes de irte, mándame un reporte corto de tu día: qué avanzaste, qué quedó pendiente y <mark class="clave">si necesitas algo de mí</mark>.</p><p>Carla</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Tres líneas: avances, pendientes y una pregunta.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3 }, rel: { carla: 1 }, responde: 'Carla: hoy armé las carpetas de las 40 operarias nuevas y separé los documentos médicos. Pendiente: 12 legajos sin DNI vigente. Pregunta: ¿cuánto tiempo se guardan los legajos de cesados?',
          out: 'Carla responde: «Perfecto. Mañana te respondo lo de los cesados». Corto, claro, útil.',
          pro: { ok: 'Un buen reporte se lee en 30 segundos y termina en una acción.', info: 'Si algo salió mal hoy, el reporte es el mejor lugar para contarlo.' },
          kusi: ['feliz', 'Corto y claro. ¡Así!'] } },
      { id: 'b', label: 'Un correo largo contando todo lo que hiciste desde las 7:45, con detalles de cada conversación, para que vea que trabajaste mucho.',
        res: { q: 'aceptable', fx: { confianza: 1, tiempo: -3 }, responde: 'Carla: te cuento mi día desde el principio. A las 7:45 llegué y me diste el casco. Luego leí el convenio. Luego fui al archivo… (24 líneas más)',
          out: 'Carla lo lee en la noche. Le cuesta encontrar qué necesitas de ella.',
          pro: { ok: 'Muestras compromiso.', risk: 'Un reporte largo esconde lo importante.' },
          kusi: ['pensando', 'Mucho texto… ¿qué querías que hiciera ella?'] } },
      { id: 'c', label: 'No responder: mañana le cuentas en persona.',
        res: { q: 'riesgosa', fx: { confianza: -5 }, rel: { carla: -1 },
          out: 'Carla esperó tu reporte para planificar el martes. No llegó.',
          pro: { ok: 'Ahorras cinco minutos.', risk: 'Cuando tu jefa te pide algo concreto, no responder también comunica.' },
          kusi: ['sorpresa', 'Carla se quedó esperando…'] } },
    ],
    rules: [[BP, 'Un reporte útil dice qué avanzaste, qué falta y qué necesitas.']],
    mirada: {
      ve: 'Tu jefa no puede ver todo lo que haces. El reporte corto es tu forma de hacer visible tu trabajo y de pedir ayuda a tiempo. Su valor está en lo que permite decidir, no en su longitud.',
      visual: { tipo: 'mensaje', titulo: 'Un reporte de tres líneas', txt: 'Avancé: carpetas de las 40 operarias nuevas y documentos médicos en sobres cerrados. Pendiente: 12 legajos sin DNI vigente. Necesito: saber cuánto tiempo se guardan los legajos de cesados.' },
    },
  },
  {
    id: 'a8', t: '19:40', ch: 'whatsapp', who: null, titulo: 'Diego pide un Excel', banner: 'assets/esc/pendulo.webp', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>Ya en el bus de regreso, te escribe Diego.</p>`,
    chat: ['Oye, ¿me pasas el Excel de asistencia de todo el personal? Mi jefa me lo pide para cruzar horas extra y no lo encuentro 😅'],
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que lo pida por correo a Carla.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3 }, envia: ['diego', 'Diego, ese Excel tiene datos de todo el personal. Pídeselo por correo a Carla y ella te da el acceso. ¡Mañana te ayudo si quieres! 🙌'],
          out: 'Diego responde: «Uy, cierto. Ya le escribo». Al día siguiente su jefa recibe solo las columnas que necesitaba.',
          pro: { ok: 'Ayudas a Diego sin saltarte el canal correcto.', info: 'Muchas veces quien pide «todo el Excel» necesita solo dos columnas.' },
          kusi: ['animo', 'Ayudar también es mostrar el camino correcto.'] } },
      { id: 'b', label: 'Pasárselo ahora desde tu celular, porque es tu amigo, lo necesita para su trabajo y además los dos son practicantes de la misma empresa.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -5, personas: 2 }, rel: { diego: 1 }, flags: ['asistencia_diego'], envia: ['diego', '📎 Asistencia_personal_octubre.xlsx'],
          out: 'Diego te agradece con tres emojis. El Excel, con nombres, DNI, faltas y descansos médicos de 320 personas, ya está en otro celular.',
          pro: { ok: 'Ayudas a un compañero.', risk: 'Que trabajen en la misma empresa no significa que deba tener acceso a todo.' },
          kusi: ['preocupado', 'Ese Excel tenía más de lo que Diego necesitaba…'] } },
    ],
    rules: [[LEY, 'Comparte datos personales solo con quien los necesita para su finalidad (Ley 29733).'], [POL, 'Los accesos a la información del personal los autoriza la jefatura de RR.HH.']],
    mirada: {
      ve: 'Los riesgos con datos casi nunca llegan como un hacker: llegan como un amigo que pide un favor. Una profesional puede ser amable y firme a la vez, y ofrecer el camino correcto.',
      visual: { tipo: 'embudo', titulo: 'Lo que pedía Diego y lo que necesitaba', niveles: [['Columnas del Excel', 18], ['Columnas que necesitaba', 3]] },
    },
  },
];
