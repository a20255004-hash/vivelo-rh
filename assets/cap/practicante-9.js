// Practicante de RR.HH. · Capítulo 9 · «Fin de mes» · Semana 4, viernes.
// Hilo del mes: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias. Hoy sale el contenedor.
// Normas citadas:
// - Ley 28518, de modalidades formativas laborales: el convenio de prácticas incluye un plan de aprendizaje, y al terminar
//   la empresa entrega un certificado (ya citada en el capítulo 1). Texto en SPIJ: https://spij.minjus.gob.pe/
// - D.S. 003-97-TR, art. 18: la renuncia es una decisión del trabajador; aviso de 30 días y posible exoneración.
//   https://lpderecho.pe/jurisprudencia-articulo-18-tuo-decreto-legislativo-728-renuncia-retiro-voluntario/
// - Ley 29733, de Protección de Datos Personales (traspaso ordenado del archivo y de los accesos). Texto en SPIJ: https://spij.minjus.gob.pe/

export const CAP = {
  n: 9, titulo: 'Fin de mes', dia: 'Semana 4, viernes', foto: 'assets/foto2/celebra-brazos.webp',
  lugar: 'Hilandería Andina · Parque Industrial de Arequipa',
  inicio: '07:20', fin: '20:00', cierreHora: '19:30',
  apertura: 'Último viernes del mes. Hoy sale el contenedor con las chompas de Hamburgo y Carla te espera para tu evaluación.', boton: 'Entrar por última vez este mes',
  kusi: 'Un mes entero. Hoy toca mirar atrás… y un poquito adelante.',
  lead: 'Cerraste tus pendientes, te evaluaste con honestidad, escuchaste a Carla, viste salir el pedido, acompañaste a Rosa en su decisión y te preguntaste si este oficio es para ti.',
  reflexion: '¿Te ves en este puesto? ¿Qué te dijo este mes sobre ti?',
};

export const CARTERA = [
  { id: 'pedido', p: 'Pedido de Hamburgo', j: 'Don Teófilo · Producción', d: 0, e: 'El contenedor sale a las 12:00' },
  { id: 'evaluacion', p: 'Tu evaluación del primer mes', j: 'Carla · RR.HH.', d: 0, e: 'Hoy, 10:30' },
  { id: 'pendientes', p: 'Pendientes del mes', j: 'Carla · RR.HH.', d: 0, e: 'Por cerrar' },
  { id: 'piloto', p: 'Piloto de madrinas', j: 'Carla · Don Teófilo', d: 0, e: 'Empieza el lunes con el grupo 3' },
  { id: 'rosa', p: 'El caso de Rosa', j: 'Carla · RR.HH.', d: 0, e: 'Su decisión' },
];

export const FUTURO = {
  traspaso_ordenado: ['Dejaste tus pendientes cerrados o documentados.', 'El mes siguiente empieza sin sorpresas.'],
  autoevaluacion_honesta: ['Te evaluaste con evidencias, incluidos tus errores.', 'Carla confía en tu criterio.'],
  feedback_recibido: ['Recibiste la crítica de Carla con preguntas y un plan.', 'Tu segundo mes empieza con metas claras.'],
  rosa_decide: ['Rosa tomó su decisión, informada y por sí misma.', 'Fin de la temporada.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria · tejido', who: 'rosa' },
  justina: { n: 'Sra. Justina Mamani', sub: 'Supervisora de urdido · madrina', c: '#9C6B30' },
};

export const WSP = [
  { chat: 'grupo', t: '07:25', de: 'Carla', txt: 'Hoy sale el contenedor 📦 A las 12:00 todos al patio. Hasta Gerencia va a bajar.' },
  { chat: 'diego', t: '07:40', de: 'Diego', txt: 'Último viernes del mes. ¿Sobrevivimos? Yo creo que sí 😄 Hoy es chupe, por si acaso.' },
  { chat: 'justina', t: '09:10', de: 'Justina', txt: 'Hijita, ya conocí a mis tres ahijadas del grupo 3. Una es de Cabanaconde, como mi mamá 🙂', si: 'justina_madrina' },
  { chat: 'teofilo', t: '12:40', de: 'Don Teófilo', txt: 'Salió el contenedor. Completo y a tiempo. Gracias, señorita. Lo digo una sola vez.' },
  { chat: 'rosa', t: '16:30', de: 'Rosa', txt: 'Gracias por todo este mes, señorita. Por explicarme y por no decidir por mí 🙏', si: 'rosa_decide' },
  { chat: 'carla', t: '19:35', de: 'Carla', txt: 'Buen primer mes. El lunes empieza el segundo. Descansa este fin de semana, de verdad 🦙' },
];

export const CORREOS = [
  { t: '07:30', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Tu evaluación de hoy', html: '<p>A las 10:30 conversamos sobre tu primer mes. Antes, llena tu autoevaluación: qué hiciste bien, qué no y con qué evidencias. Sé honesta: yo también lo voy a ser.</p><p>Carla</p>' },
  { t: '13:20', de: 'Gerencia de Planta', para: 'Todo el personal', asunto: 'Pedido de Hamburgo despachado', html: '<p>Hoy salió hacia el puerto de Matarani el contenedor con el pedido de Hamburgo, completo y a tiempo. Gracias a cada persona de esta planta, en especial a las 40 compañeras que se sumaron este mes.</p>' },
  { t: '17:00', de: 'Equipo auditor', para: 'Gerencia de Planta', asunto: 'Plan de acción recibido', html: '<p>Recibimos el plan de acción con fechas. Programaremos la visita de seguimiento en seis meses.</p>', si: 'hallazgo_asumido' },
];

export const QUIZ = [
  { q: '¿Qué entrega la empresa al practicante cuando termina su convenio?', ops: ['Nada', 'Un certificado de prácticas', 'Una liquidación de CTS', 'Un contrato indefinido'], ok: 1, por: 'La Ley 28518 prevé que, al terminar, el practicante reciba un certificado.' },
  { q: 'Una buena autoevaluación…', ops: ['Solo cuenta lo que salió bien', 'Usa evidencias e incluye errores y aprendizajes', 'Es lo más larga posible', 'Repite lo que la jefa quiere oír'], ok: 1, por: 'Las evidencias y la honestidad hacen creíble una autoevaluación.' },
  { q: 'Tu jefa te da una crítica que te parece injusta. ¿Qué haces primero?', ops: ['Defenderte de inmediato', 'Pedir un ejemplo concreto y entender antes de responder', 'Quedarte callada y molesta', 'Contarlo en el grupo del área'], ok: 1, por: 'Pedir un ejemplo convierte una crítica en algo que se puede trabajar.' },
  { q: 'Rosa te pregunta «¿qué haría usted en mi lugar?». ¿Qué corresponde?', ops: ['Decirle qué hacer', 'Ayudarla a ver sus opciones y respetar que decida ella', 'Cambiar de tema', 'Decirle que lo decida su familia'], ok: 1, por: 'Igual que con su sistema de pensiones el primer día: informar, no decidir por ella.' },
  { q: '¿Qué deberías dejar antes de cerrar tu primer mes?', ops: ['Nada, el lunes sigues', 'Tus pendientes cerrados o documentados para que otra persona pueda seguirlos', 'Solo tus archivos personales', 'Una carta de despedida'], ok: 1, por: 'Un buen traspaso hace que el trabajo no dependa de tu memoria.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '07:40', ch: 'documento', who: null, titulo: 'Los pendientes', banner: 'assets/esc/mesa.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>Tu escritorio tiene post-its de cuatro semanas. Algunos ya no significan nada; otros son promesas que hiciste.</p><p>El lunes empieza el piloto y llega el grupo 3. Antes de la evaluación, <mark class="clave">solo te da para cerrar tres cosas</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que cerrarás esta mañana.', boton: 'Cerrar estos tres', resumen: 'Cerraste',
    cols: ['Pendiente', 'Por qué importa'],
    rows: [
      { id: 'dni', cells: ['Los tres DNI vencidos que faltan en los legajos', 'Prometiste hacerles seguimiento'] },
      { id: 'manual', cells: ['Una guía de una página del archivo: secciones, préstamo y sobres médicos', 'Que no dependa de tu memoria'] },
      { id: 'formato', cells: ['El formato de horas extra voluntarias, firmado antes de cada sobretiempo', 'Lo comprometieron ante la auditoría'] },
      { id: 'escritorio', cells: ['Ordenar tu escritorio y botar los post-its', 'Se ve bien'] },
      { id: 'fotos', cells: ['Las fotos del contenedor para las redes de la empresa', 'Le encantaría a Gerencia'] },
    ],
    score: { dni: 2, manual: 3, formato: 3, escritorio: 0, fotos: 0 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: picks.includes('formato') ? 4 : 0 },
        flags: q === 'buena' ? ['traspaso_ordenado'] : [], cartera: { pendientes: q === 'buena' ? 'Cerrados o documentados' : 'Algunos abiertos' },
        out: q === 'buena' ? 'A las 10:15 tienes la guía del archivo pegada junto a tu plan, el formato de horas extra aprobado por Legal y dos DNI nuevos escaneados. El tercero llega el lunes.' : 'Tu escritorio quedó impecable. El formato de horas extra que se prometió a las auditoras sigue sin existir.',
        pro: { ok: 'Cierra lo que prometiste y documenta lo que otros necesitarán.', risk: 'Lo que se promete en una auditoría y no se hace aparece en la visita de seguimiento.', info: 'Una guía de una página vale más que tu memoria: tú no estarás siempre.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cabos atados!' : '¿Y lo que prometimos a las auditoras?'],
      };
    },
    rules: [[BP, 'Antes de cerrar un ciclo, cumple lo prometido y documenta lo que otra persona necesitará.']],
    mirada: {
      ve: 'Terminar bien un mes es dejar el trabajo de forma que otra persona pueda seguirlo. Las promesas hechas a una auditora, a una trabajadora o a tu jefa se cumplen o se documentan. Lo que solo existe en tu cabeza se pierde el día que faltas.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Importancia', cuadrantes: ['Hazlo ya', 'Planifícalo', 'Si te sobra tiempo', 'Déjalo'], items: [['Formato de horas extra', .4, .9], ['Guía del archivo', .5, .85], ['DNI vencidos', .3, .6], ['Fotos para redes', .3, .2], ['Ordenar escritorio', .2, .1]] },
    },
  },
  {
    id: 'i2', t: '09:30', ch: 'documento', who: null, titulo: 'Tu autoevaluación', banner: 'assets/esc/escalera.webp', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>El formato de autoevaluación tiene cinco competencias y un espacio para evidencias. Te tomas el café caliente por primera vez en semanas.</p><p>${F.has('error_asumido') || F.has('error_escondido') || F.has('error_culpa_reloj') ? 'Te acuerdas del jueves de las horas extra. ' : ''}<mark class="clave">Lo que escribas aquí, Carla lo va a comparar con lo que vio</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué escribirás en cada parte de tu autoevaluación.', boton: 'Entregar la autoevaluación',
    bloques: [
      { id: 'logros', t: 'Lo que hice bien', n: 2, ops: [
        { id: 'l1', t: 'Con evidencias: el plan de archivo pegado en la puerta, la matriz de filtro y la regla de turnos.', ok: true, por: 'Los logros con evidencia se pueden verificar.' },
        { id: 'l2', t: 'Mi propuesta de madrinas, aprobada como piloto por la Gerencia.', ok: true, por: 'Un resultado concreto, con fecha.' },
        { id: 'l3', t: 'Fui la mejor practicante que ha tenido el área.', ok: false, por: 'Es una opinión, no una evidencia. Y no es tuya para darla.' },
      ] },
      { id: 'errores', t: 'Lo que no salió bien', n: 2, ops: [
        { id: 'e1', t: 'Mi reporte de horas extra tenía cuatro errores. Lo aprendido: formato fijo y doble control.', ok: true, por: 'Nombras el error y lo que cambió.' },
        { id: 'e2', t: 'Hubo momentos en que decidí rápido por cansancio o por presión.', ok: true, por: 'Reconoces un patrón, no solo un hecho.' },
        { id: 'e3', t: 'Nada importante: todo salió bien.', ok: false, por: 'Nadie tiene un primer mes sin errores. Decir esto le quita credibilidad a todo lo demás.' },
      ] },
      { id: 'metas', t: 'Para el segundo mes', n: 1, ops: [
        { id: 'm1', t: 'Aprender planillas con Diego y medir el piloto de madrinas al día 30.', ok: true, por: 'Metas concretas y conectadas con tu plan de aprendizaje.' },
        { id: 'm2', t: 'Seguir mejorando en general.', ok: false, por: 'Una meta vaga no se puede evaluar.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['autoevaluacion_honesta'] : [], cartera: { evaluacion: q === 'buena' ? 'Autoevaluación con evidencias' : 'Autoevaluación sin evidencias' },
        out: q === 'buena' ? 'Entregas una hoja con logros, errores y metas, todo con ejemplos. Te sientes rara al escribir tus errores con tu nombre. Pero también más tranquila.' : 'Tu autoevaluación suena bien, pero le faltan pruebas y le sobra optimismo.',
        pro: { ok: 'Una autoevaluación honesta te protege: tu jefa ve que sabes dónde estás.', risk: 'Esconder errores en una evaluación hace que tu jefa dude también de tus logros.', info: 'Conecta tus metas con tu plan de aprendizaje: es la razón de ser de tus prácticas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Honesta y con pruebas. ¡Qué bacán!' : '¿Y los errores?'],
      };
    },
    rules: [[LEY, 'Las prácticas profesionales se rigen por un plan de aprendizaje (Ley 28518).'], [BP, 'Autoevalúate con evidencias, incluidos tus errores.']],
    mirada: {
      ve: 'Evaluarse a uno mismo es una competencia profesional. No se trata de castigarse ni de venderse, sino de mostrar lo que hiciste con pruebas, lo que no salió y qué aprendiste. Quien se evalúa con honestidad recibe más confianza, no menos.',
      visual: { tipo: 'cambio', titulo: 'De una autoevaluación vaga a una honesta', pares: [['«Fui la mejor»', 'Plan de archivo, matriz y regla de turnos'], ['«Nada salió mal»', 'Cuatro errores y un doble control'], ['«Seguir mejorando»', 'Planillas con Diego y medir el piloto']] },
    },
  },
  {
    id: 'i3', t: '10:30', ch: 'presencial', who: 'carla', titulo: 'La evaluación', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de RR.HH.', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => {
      const bien = [F.has('convenio_corregido') && 'leíste tu convenio antes de firmarlo', F.has('prueba_reportada') && 'encontraste la prueba de embarazo', (F.has('matriz_buena') || F.has('preseleccion_diversa')) && 'sostuviste una selección justa', F.has('error_asumido') && 'me contaste tu error a tiempo', F.has('rosa_escuchada') && 'escuchaste a Rosa', F.has('propuesta_solida') && 'hiciste una propuesta que la Gerencia aprobó'].filter(Boolean);
      const mejorar = [F.has('dni_wsp') && 'los DNI por WhatsApp', F.has('asistencia_diego') && 'el Excel que le pasaste a Diego', F.has('vecina_copia') && 'el legajo de Marleni', F.has('registro_inflado') && 'el registro que firmaste con horas de más', F.has('evidencia_fabricada') && 'el formato con fecha atrasada', F.has('error_escondido') && 'que no me contaras lo del reporte'].filter(Boolean);
      return `<p>Carla tiene tu autoevaluación y su propia hoja. Se quita los lentes.</p><p>«Lo bueno: ${bien.length ? bien.join(', ') : 'llegaste todos los días y no te rendiste'}. ${mejorar.length ? 'Lo que me preocupa: ' + mejorar.join(', ') + '.' : 'Y una cosa para mejorar: a veces decides rápido cuando estás cansada.'}»</p><p><mark class="clave">Te mira esperando tu respuesta</mark>.</p>`;
    },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle, pedirle un ejemplo de lo que más le preocupa y proponer qué harías distinto.',
        res: { q: 'buena', fx: { confianza: 5, personas: 3 }, rel: { carla: 1 }, flags: ['feedback_recibido'], cartera: { evaluacion: 'Conversada, con metas para el mes 2' },
          out: 'Carla te da un ejemplo y tú propones una regla para ti misma: «Si estoy cansada, no mando nada que afecte a otra persona hasta revisarlo». Carla lo anota en tu plan del segundo mes.',
          pro: { ok: 'Recibir una crítica con preguntas y un plan es tan importante como hacer bien el trabajo.', info: 'Pide que la próxima evaluación revise esa meta: así la crítica se vuelve aprendizaje.' },
          kusi: ['celebra', 'Escuchaste la crítica sin romperte. ¡Bien!'] } },
      { id: 'b', label: 'Explicarle por qué hiciste cada cosa: estabas aprendiendo, nadie te había explicado y había mucha presión.',
        res: { q: 'riesgosa', fx: { confianza: -3, personas: -1 },
          out: 'Carla te deja terminar. «Todo eso es cierto. Pero no te pregunté por qué. Te pregunté qué harías distinto.» La conversación se enfría.',
          pro: { ok: 'Das contexto real.', risk: 'Justificar cada punto hace que tu jefa sienta que no escuchaste.' },
          kusi: ['pensando', 'El contexto importa, pero ella pedía otra cosa.'] } },
      { id: 'c', label: 'Asentir en silencio y firmar la evaluación.',
        res: { q: 'aceptable', fx: { confianza: 0 },
          out: 'Firmas. Carla te mira un segundo de más: «¿Nada que decir?». Sales con la evaluación firmada y una conversación pendiente.',
          pro: { ok: 'Aceptas la crítica.', risk: 'Una evaluación sin conversación desaprovecha lo más valioso: el plan para mejorar.' },
          kusi: ['pensando', 'Firmar no es lo mismo que conversar.'] } },
    ],
    rules: [[BP, 'Ante una crítica: agradece, pide un ejemplo y propone qué harás distinto.']],
    mirada: {
      ve: 'La evaluación de prácticas no es un examen: es una conversación sobre cómo seguir aprendiendo. Una buena supervisora dice lo bueno y lo que preocupa. Una buena practicante escucha, pregunta y convierte lo que escuchó en una meta.',
      visual: { tipo: 'linea', titulo: 'Tu primer mes, según Carla', hitos: [['Semana 1', 'Convenio, legajos y cien CV'], ['Semana 2', 'Tu primera charla y tu primer error'], ['Semana 3', 'Rosa y la auditoría'], ['Semana 4', 'Tu propuesta y esta conversación']] },
    },
  },
  {
    id: 'i4', t: '12:00', ch: 'presencial', who: 'teofilo', titulo: 'Sale el contenedor', banner: 'assets/foto2/chocan-manos.webp', lugar: 'Patio de despacho', show: ['personas', 'confianza'],
    body: (n, F) => `<p>En el patio, el sol de mediodía rebota en el contenedor azul. Las operarias aplauden cuando el camión arranca rumbo a Matarani. ${F.has('preseleccion_diversa') ? 'Edith y Yolanda se toman una foto juntas. ' : ''}La señora Justina llora un poquito y dice que es el polvo.</p><p>Don Teófilo se para a tu lado, con el casco bajo el brazo. <mark class="clave">«Señorita… ¿se toma un tecito conmigo?»</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Aceptar y preguntarle cómo vivió él este mes.',
        res: { q: null, fx: { personas: 4 }, rel: { teofilo: 1 }, out: 'En la cafetería, con un té de anís, Don Teófilo te cuenta que hace treinta años entró como operario, igual que Javier. «Usted me hizo renegar. Pero las nuevas que me trajo se quedaron.» Es lo más cerca de un elogio que vas a escuchar de él.', kusi: ['feliz', '¡Don Teófilo sí tenía corazón!'] } },
      { id: 'b', label: 'Agradecerle, pero volver a la oficina: Carla te espera.',
        res: { q: null, fx: { tiempo: 1 }, out: 'Don Teófilo asiente: «Otro día, entonces». Mientras subes, lo ves en el patio, solo, mirando el camino por donde se fue el camión.', kusi: ['pensando', 'Algunas invitaciones no se repiten.'] } },
    ],
    mirada: { ve: 'Los jefes difíciles también son personas con historia. Las relaciones de trabajo se construyen en las crisis, pero se consolidan en los momentos tranquilos, como un té después del despacho. Ahí se entiende por qué alguien es como es.' },
  },
  {
    id: 'i5', t: '15:00', ch: 'presencial', who: 'rosa', titulo: '«¿Qué haría usted?»', banner: 'assets/esc/carrera.webp', lugar: 'Ventanilla de RR.HH.', show: ['etica', 'personas'],
    body: (n, F) => `<p>Rosa llega a la ventanilla con su credencial y una hoja doblada.${F.has('rosa_se_queda') ? ' «Señorita, la señora Justina me dijo que podría ser madrina el próximo año. Pero me ofrecieron un trabajo en un taller cerca de mi casa, de día, sin rotar.»' : ' «Señorita, sigo en la noche. Pedí el cambio por la regla, pero no hay nadie más que quiera la noche. Y me ofrecieron un trabajo en un taller cerca de mi casa.»'}</p><p>Te mira directo, por primera vez sin bajar la vista: <mark class="clave">«¿Qué haría usted en mi lugar?»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Ayudarla a comparar las dos opciones con preguntas, recordarle cómo se renuncia si lo decide, y dejar que elija ella.',
        res: { q: 'buena', fx: { etica: 5, personas: 5 }, rel: { rosa: 1 }, flags: ['rosa_decide'],
          out: 'Le preguntas por el sueldo, el horario, el seguro y lo que le gusta de cada trabajo. Rosa lo anota en la hoja doblada. «Ya sé lo que voy a hacer», dice al final. No te lo cuenta. Y está bien.',
          pro: { ok: 'Igual que el primer día con su sistema de pensiones: informas y respetas su decisión.', risk: 'Si se va, no es un fracaso tuyo. Si se queda, tampoco es mérito tuyo.', info: 'Pregúntale si el otro trabajo tiene contrato y seguro: es la pregunta que muchas olvidan.' },
          kusi: ['celebra', 'Rosa decidió por ella misma. ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle que se quede: la planta la necesita, aquí tiene seguro, y tú ya hiciste mucho por ella.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -3 },
          out: 'Rosa dice «ya, señorita», como el primer día. Guarda la hoja doblada sin escribir nada más.',
          pro: { ok: 'Quieres que se quede en un trabajo formal.', risk: 'Decidir por ella, y además recordarle lo que hiciste, la presiona con la gratitud.' },
          kusi: ['triste', 'Esa decisión era de Rosa…'] } },
      { id: 'c', label: 'Decirle que en su lugar te irías al taller, porque su hijo es lo primero.',
        res: { q: 'aceptable', fx: { etica: -1, personas: 1 },
          out: 'Rosa asiente, aliviada de que alguien le diga algo. Pero no le preguntaste si el taller tiene contrato, seguro ni sueldo fijo.',
          pro: { ok: 'Validas lo que ella siente.', risk: 'Tu opinión pesa mucho para ella. Sin información, la decisión sigue siendo a ciegas.' },
          kusi: ['pensando', 'Tu opinión pesa… ¿y la información?'] } },
    ],
    rules: [[LEY, 'La renuncia es una decisión del trabajador, con aviso de 30 días y posible exoneración (D.S. 003-97-TR, art. 18).'], [BP, 'Informa, no decidas por la persona. Igual el primer día que el último.']],
    mirada: {
      ve: 'El mes empezó con Rosa preguntando «¿firmo nomás?» y termina con Rosa preguntando «¿qué haría usted?». Lo que cambió no es la pregunta, sino que ahora sabe que puede preguntar. Tu trabajo no es decidir por ella: es que decida con información, sin miedo y sin deudas de gratitud.',
      visual: { tipo: 'balanza', a: { t: 'Hilandería Andina', items: ['Contrato y seguro', 'Regla de turnos', 'Madrinas y gente conocida'] }, b: { t: 'El taller cerca de casa', items: ['Horario fijo de día', 'Más tiempo con Joaquín', '¿Tiene contrato y seguro?'] } },
    },
  },
  {
    id: 'i6', t: '16:00', ch: 'presencial', who: 'carla', titulo: 'Preguntas sobre el oficio', banner: 'assets/3d/scenes/brujula.webp', lugar: 'Oficina de RR.HH.', show: ['confianza', 'personas'],
    body: () => `<p>La oficina está tranquila por primera vez en el mes. Carla ordena su escritorio y te ofrece lo que queda del pan de tres puntas.</p><p>«Antes de que te vayas a tu fin de semana: <mark class="clave">pregúntame lo que quieras sobre este trabajo</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Carla.',
    opts: [
      { id: 'como', label: '¿Cómo llegaste a ser jefa de RR.HH.?', info: '«Empecé como practicante en una minera de Cerro Verde, archivando. Lloré varias veces en el baño. Luego fui asistente, analista, y aquí estoy. Nadie me regaló nada, pero muchos me enseñaron.»' },
      { id: 'dificil', label: '¿Qué es lo más difícil de este trabajo?', info: '«Que siempre estás entre dos lados: la empresa y las personas. Y casi nunca te agradece ninguno. Pero cuando haces bien las cosas, los dos ganan.»' },
      { id: 'siguiente', label: '¿Qué podría aprender después de estas prácticas?', info: '«Planillas, selección, seguridad, bienestar o relaciones laborales. Prueba varias. Este mes vi que te va bien con la gente y que no te callas lo que está mal. Eso no se enseña.»' },
      { id: 'consejo', label: '¿Qué consejo me darías?', info: '«Lee antes de firmar, pregunta antes de decidir y avisa antes de que te descubran. Con eso ya llevas la mitad del oficio.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, personas: 2 }, rel: { carla: 1 },
      out: 'Carla se ríe cuando le dices que también lloraste una vez en el baño, el jueves de las horas extra. «Bienvenida al oficio», dice.',
      kusi: ['curioso', 'Las historias de quienes llegaron antes ayudan a imaginar el camino.'],
    }),
    mirada: {
      ve: 'Preguntar por la trayectoria de alguien con experiencia ayuda a ver que los oficios se construyen paso a paso, con errores y personas que enseñan. RR.HH. tiene muchos caminos: planillas, selección, seguridad, bienestar o relaciones laborales. Un primer mes sirve para empezar a saber cuál te llama.',
      visual: { tipo: 'flujo', titulo: 'Algunos caminos después de las prácticas', pasos: ['Practicante', 'Asistente de RR.HH.', 'Analista: planillas, selección, SST o bienestar', 'Jefatura o especialista'] },
    },
  },
  {
    id: 'i7', t: '17:30', ch: 'documento', who: null, titulo: 'Tu mes, en orden', banner: 'assets/esc/logro.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Antes de apagar la computadora, abres la carpeta «Mis reportes». Ahí está todo el mes, en desorden, como la pizarra de post-its del primer día.</p><p>Quieres guardarlo bien. <mark class="clave">Ordénalo como ocurrió</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los momentos de tu mes. Usa las flechas.', boton: 'Guardar mi mes',
    items: [
      { id: 'convenio', t: 'Leer tu convenio y ordenar la pizarra de Carla', por: 'Semana 1, lunes.' },
      { id: 'legajos', t: 'Revisar la caja 14 y cuidar el legajo de Marleni', por: 'Semana 1, miércoles.' },
      { id: 'cv', t: 'Corregir el aviso y filtrar cien CV', por: 'Semana 1, viernes.' },
      { id: 'charla', t: 'Dar tu primera charla al grupo 1', por: 'Semana 2, martes.' },
      { id: 'error', t: 'Corregir tu reporte de horas extra', por: 'Semana 2, jueves.' },
      { id: 'rosa', t: 'Escuchar a Rosa y escribir la regla de turnos', por: 'Semana 3, martes.' },
      { id: 'auditoria', t: 'Atender la auditoría de Hamburgo', por: 'Semana 3, viernes.' },
      { id: 'propuesta', t: 'Presentar el piloto de madrinas', por: 'Semana 4, martes.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 3 : 1, confianza: 2 },
        out: q === 'buena' ? 'Guardas el mes en ocho carpetas, una por momento. Te das cuenta de que cada semana usaste algo que aprendiste la anterior.' : 'Guardas el mes. Algunas cosas se te mezclan: fueron cuatro semanas muy intensas.',
        pro: { ok: 'Mirar el recorrido completo ayuda a ver cómo se conectan las decisiones.', info: 'Guarda tus reportes: son tu portafolio para la próxima entrevista.' },
        kusi: [q === 'buena' ? 'celebra' : 'feliz', q === 'buena' ? '¡Un mes completo, bien guardado!' : 'Fue un mes intenso, ¿no?'],
      };
    },
    mirada: {
      ve: 'El primer día ordenaste los pasos para que una persona entre a la empresa. Hoy ordenas tu propio mes. En RR.HH., casi todo es proceso: las decisiones de una semana preparan la siguiente. Ver ese hilo es empezar a pensar como profesional.',
      visual: { tipo: 'linea', titulo: 'Tu mes en Hilandería Andina', hitos: [['Semana 1', 'Convenio, legajos y CV'], ['Semana 2', 'Charla y error'], ['Semana 3', 'Rosa y auditoría'], ['Semana 4', 'Propuesta y evaluación']] },
    },
  },
  {
    id: 'i8', t: '19:00', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Paradero del Parque Industrial', show: ['personas', 'confianza'],
    body: () => `<p>Esperas la combi con el casco blanco en la mochila. El Misti se pone rosado y luego morado. Huele a pan de la panadería de la esquina.</p><p>Un mes. Trescientos legajos, cien CV, doce operarias en tu primera charla, un error, una auditoría, una propuesta y Rosa. <mark class="clave">¿Te ves en este puesto?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Me gusta estar cerca de la gente y de los procesos de una planta.',
        res: { q: null, fx: { confianza: 2 }, out: 'Sonríes sola en el paradero. El lunes empieza tu segundo mes y ya sabes qué quieres aprender: planillas con Diego y el piloto con Justina.', kusi: ['celebra', '¡Bienvenida al oficio! Qué bacán.'] } },
      { id: 'b', label: 'Sí, pero quizá en otra área de RR.HH.: selección, seguridad o bienestar.',
        res: { q: null, fx: { confianza: 2 }, out: 'Piensas en la matriz de filtro, en el registro de capacitación y en las tarjetas de opinión. Cada una te gustó por razones distintas. Tienes cinco meses para descubrir cuál.', kusi: ['curioso', 'RR.HH. tiene muchas puertas. ¡A explorarlas!'] } },
      { id: 'c', label: 'Todavía no lo sé. Necesito más tiempo.',
        res: { q: null, fx: { confianza: 1 }, out: 'Y está bien no saberlo. La combi llega llena. Subes, encuentras un asiento y, por primera vez en el mes, te quedas dormida antes de llegar.', kusi: ['animo', 'No saber todavía también es una respuesta honesta.'] } },
      { id: 'd', label: 'Creo que no. Pero aprendí cosas que me servirán en cualquier trabajo.',
        res: { q: null, fx: { confianza: 1 }, out: 'Leer antes de firmar, preguntar antes de decidir, avisar antes de que te descubran. Te lo llevas a donde vayas.', kusi: ['feliz', 'Lo aprendido se queda contigo. ¡Gracias por vivirlo!'] } },
    ],
    mirada: { ve: 'Las prácticas no sirven solo para aprender un oficio: sirven para saber si ese oficio es para ti. En RR.HH. se trabaja entre la empresa y las personas, con papeles que son vidas y decisiones pequeñas que tienen consecuencias. Saber si eso te mueve es el aprendizaje más importante del mes.' },
  },
];
