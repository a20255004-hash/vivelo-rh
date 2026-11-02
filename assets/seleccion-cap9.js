// Capítulo 9 · «El día después» · Semana 2, jueves.
// Une el ingreso del capítulo 8 con el inventario del capítulo 10. Recibe las decisiones de los capítulos 1 a 8.
// La supervisión nueva depende del capítulo 6: elegido_marco (por defecto), elegido_lucia o elegido_patricia.
//
// Normas citadas (todas verificadas en capítulos anteriores):
// - Ley 30709 y D.S. 002-2018-TR: diferencias salariales explicadas con criterios objetivos aplicados al caso.
//   https://cdn.www.gob.pe/uploads/document/file/154890/2018-03-08_002-2018-TR__6353.pdf
// - Ley 29733, de Protección de Datos Personales: finalidad, consentimiento y datos no excesivos.
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Ley 26772 y su reglamento (art. 4-A, D.S. 002-2018-TR): no se pregunta por embarazo ni se discrimina por sexo o religión.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
// - Ley 28991 y D.S. 009-2008-TR: Boletín Informativo de pensiones para quien ingresa sin estar afiliado.
//   https://andina.pe/ingles/noticia-empleadores-deben-informar-a-trabajadores-para-libre-eleccion-afp-u-onp-769189.aspx
// - Ley 29783, art. 27: capacitación en seguridad al ingreso y cuando cambian las funciones.

export const CAP = {
  n: 9, titulo: 'El día después', dia: 'Semana 2, jueves', foto: 'assets/foto/supervisa.webp',
  lugar: 'Oficina de RR.HH. y almacén · Distribuidora Pacífico Sur',
  inicio: '07:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'El segundo día de alguien nuevo casi nunca sale en las fotos. Es el día en que se nota lo que la empresa prometió.', boton: 'Empezar el seguimiento',
  kusi: 'Contratar no termina en el ingreso. Hoy toca acompañar lo que elegiste. ¡Dale!',
  lead: 'Acompañaste el segundo día de los nuevos, sostuviste la equidad frente a una pregunta incómoda y dejaste todo listo para el inventario de mañana.',
  reflexion: '¿Qué promesa del proceso se puso a prueba hoy?',
  siguiente: { n: 10, titulo: 'El inventario', dia: 'Semana 2, viernes' },
};

const E = F => F?.has('elegido_lucia')
  ? { n: 'Lucía', ella: true, reto: 'el WMS' }
  : F?.has('elegido_patricia') ? { n: 'Patricia', ella: true, reto: 'conocer al equipo' } : { n: 'Marco', ella: false, reto: 'ganarse al turno noche' };

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 32, e: 'Ingresó ayer · seguimiento' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 19, e: '3 ingresaron · 1 pendiente' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 25, e: 'Ingresaron ayer' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 50, e: 'Hoy: oferta' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 15, e: 'Cerrado' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 13, e: 'Hoy: entrevistas' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 70, e: 'Terna lista para Walter' },
];
export const CARTERA = (F, prev) => BASE.map(c => (c.id === 'operarios' && F.has('wilber_reemplazo') ? { ...c, e: '3 ingresaron · Jhon entra hoy' } : c));

export const FUTURO = {
  turno_aclarado: ['Yesenia trabajará en el turno que se le ofreció en la entrevista.', 'Capítulo 10.'],
  turno_impuesto: ['Yesenia quedó en el turno noche, aunque le ofrecieron mañana.', 'Puede renunciar en el periodo de prueba. Capítulo 10.'],
  plan_90: ['La nueva supervisión tiene un plan de 30, 60 y 90 días firmado con Walter.', 'Capítulo 10.'],
  plan_flojo: ['El plan de la nueva supervisión es una lista de tareas sin metas.', 'Capítulo 10.'],
  silvia_criterio: ['Le explicaste a Silvia el criterio salarial y se comprometió una revisión.', 'Capítulo 10.'],
  silvia_negado: ['A Silvia le dijiste que «no hay diferencias».', 'Lo comprobará por su cuenta. Capítulo 10.'],
  silvia_cifra: ['Le contaste a Silvia cuánto gana la nueva supervisión.', 'Capítulo 10.'],
  ficha_limpia: ['La ficha de datos de ingreso pide solo lo necesario.', 'Gina la usará el lunes.'],
  ficha_excesiva: ['La ficha de datos de ingreso pide datos que no corresponden.', 'Capítulo 10.'],
  cartera_priorizada: ['Dejaste lista para el viernes la cartera que sigue abierta.', 'Capítulo 10.'],
  checkin_nuevo: ['La nueva supervisión sabe que puede contarte lo que no funciona.', 'Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  kelly: { n: 'Kelly Ramos', sub: 'Planillas', who: 'kelly' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  nuevo: { n: 'Supervisión de almacén', sub: 'Ingresó ayer', c: '#C2703D' },
  wilber: { n: 'Wilber Mamani', sub: 'Operario nuevo', c: '#B5838D' },
  yesenia: { n: 'Yesenia Apaza', sub: 'Operaria nueva', c: '#7CC6EA' },
  gina: { n: 'Gina Velásquez', sub: 'Contadora general', c: '#6D597A' },
};

export const CORREOS = [
  { t: '07:40', de: 'Kelly Ramos', para: 'Analista de Selección', asunto: 'Altas de ayer', html: '<p>Te adjunto las constancias de T-Registro de ayer. Todas dentro del día. Gracias por quedarte. 🙏</p>', si: 'altas_a_tiempo' },
  { t: '07:40', de: 'Kelly Ramos', para: 'Analista de Selección', asunto: 'Alta corregida', html: '<p>Registré a primera hora el alta que quedó pendiente ayer. El sistema guarda la fecha real. Si hay una inspección, va a aparecer.</p>', si: 'alta_atrasada' },
  { t: '16:10', de: 'Gina Velásquez', para: 'Analista de Selección', asunto: 'Mi asistente', html: '<p>Aceptó. Entra el lunes. Cincuenta días, pero llegó la persona correcta. Gracias.</p><p>Gina</p>', si: 'cierra_gina' },
];

export const WSP = [
  { chat: 'grupo', t: '07:35', de: 'Kelly', txt: 'Mañana inventario: el comedor dará desayuno para todos desde las 6 ☕' },
  { chat: 'wilber', t: '09:05', de: 'Wilber', txt: 'Buenos días señorita. Confirmo: el lunes entro. Mi mamá ya está en casa 🙏', si: 'wilber_reprograma' },
  { chat: 'walter', t: '12:40', de: 'Walter', txt: 'Plan revisado. Lo firmo. Que mañana empiece a cumplirlo 😄', si: 'plan_90' },
  { chat: 'nuevo', t: '17:55', de: 'Supervisión', txt: 'Gracias por preguntar. Le cuento mañana después del primer conteo 💪', si: 'checkin_nuevo' },
  { chat: 'rocio', t: '18:30', de: 'Rocío', txt: 'Mañana, después del inventario, conversamos de tus dos semanas. Trae tus números.' },
];

export const QUIZ = [
  { q: 'Al día siguiente del ingreso, una operaria dice que le dieron un turno distinto al que le ofrecieron. ¿Qué haces?', ops: ['Le dices que así es el almacén', 'Revisas qué se le ofreció y lo conversas con el jefe para cumplirlo o acordar un cambio', 'Esperas a que pase el periodo de prueba', 'Le pides que renuncie si no le gusta'], ok: 1, por: 'Lo prometido en la selección es parte de la oferta. Si cambia, se conversa y se acuerda, no se impone.' },
  { q: '¿Qué debería tener un plan de inducción de 30, 60 y 90 días?', ops: ['Solo la lista de tareas', 'Metas concretas, quién acompaña y cuándo se revisa', 'Las vacaciones del año', 'El sueldo de los demás supervisores'], ok: 1, por: 'Metas, acompañamiento y fechas de revisión: así la persona sabe qué se espera de ella.' },
  { q: 'Una supervisora pregunta por qué el nuevo gana más que ella. ¿Qué corresponde?', ops: ['Decirle la cifra exacta del otro', 'Negar que haya diferencia', 'Explicarle los criterios objetivos de la política salarial y revisar su caso', 'Pedirle que no pregunte'], ok: 2, por: 'La Ley 30709 pide criterios objetivos, aplicados al caso concreto. El sueldo de cada persona es un dato suyo.' },
  { q: '¿Qué dato no debería pedir una ficha de datos de ingreso?', ops: ['Contacto de emergencia', 'Cuenta de sueldo', 'Religión', 'Sistema de pensiones'], ok: 2, por: 'La religión no tiene relación con el trabajo y es un dato sensible.' },
  { q: 'El día antes del inventario tienes siete pendientes y tiempo para tres. ¿Con qué criterio eliges?', ops: ['Por orden alfabético', 'Lo que vence antes, lo que afecta a más personas y lo que se destraba rápido', 'Lo que te pide el gerente más insistente', 'Lo más fácil'], ok: 1, por: 'Impacto, plazo y esfuerzo: el mismo criterio del primer día.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '08:10', ch: 'llamada', who: null, titulo: 'Las llamadas del segundo día', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Rocío tiene una regla: al día siguiente de un ingreso, se llama a cada persona nueva. Cinco minutos, para preguntar cómo le fue.</p><p>${F.has('bienvenida_expuesta') ? 'Todavía se comenta en el comedor lo que se publicó en el grupo ayer. ' : ''}Empiezas por los operarios, antes de que entren al turno.</p>`,
    type: 'calls',
    calls: [['Elmer Choque', 'Contesta, le interesa seguir: «Todo bien, señorita. Don Julio me enseñó el lector»', 'Todo bien, señorita. Don Julio me enseñó a usar el lector. Ya me ubico.'], ['Yesenia Apaza', 'Contesta: «Me pusieron en el turno noche. En la entrevista me dijeron mañana»', 'Señorita, me pusieron en el turno noche. En la entrevista me dijeron que era de mañana, y yo dejo a mi hijo en el jardín a las siete.'], ['Rosa Ccama · vendedora', 'Contesta, le interesa seguir: «Ya tengo mi ruta en Ciudad Nueva»', 'Ya tengo mi ruta en Ciudad Nueva, señorita. Contenta.']],
    prompt: 'Yesenia espera en la línea. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Decirle que vas a revisar qué se le ofreció por escrito y hablar hoy con Walter para que el turno sea el acordado, o se converse un cambio con ella.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3, cumplimiento: 3 }, rel: { walter: 0 }, flags: ['turno_aclarado'],
          out: 'Tu correo de la oferta decía «turno mañana». Walter se rasca la cabeza: «Me faltaba gente en la noche». Acepta moverla a la mañana desde el lunes; esta semana, Ramiro le cubre. Yesenia te manda un audio, emocionada.',
          pro: { ok: 'Lo que se ofrece en la selección es parte del acuerdo. Cumplirlo dice más de la empresa que cualquier inducción.', risk: 'Walter tiene un problema real en la noche. Ayúdalo a resolverlo, no solo a ceder.', info: 'Desde ahora, escribe el turno en la carta oferta de cada operario.' },
          kusi: ['celebra', '¡Lo prometido es deuda!'] } },
      { id: 'b', label: 'Explicarle que en un almacén los turnos rotan y que, por ahora, tendrá que adaptarse.',
        res: { q: 'riesgosa', fx: { personas: -5, confianza: -2 }, flags: ['turno_impuesto'],
          out: 'Yesenia dice «ya, señorita» con la voz apagada. No te dice que ya está mirando otros avisos.',
          pro: { ok: 'Es verdad que los turnos rotan.', risk: 'Cambiar lo ofrecido sin conversarlo es la forma más rápida de perder a alguien en su periodo de prueba.' },
          kusi: ['triste', 'El turno noche y un hijo en el jardín…'] } },
      { id: 'c', label: 'Decirle que lo hable directamente con Walter, que es su jefe.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 1 }, flags: ['turno_derivado'],
          out: 'Yesenia no se anima a hablar con Walter en su segundo día. El tema queda flotando.',
          pro: { ok: 'Es cierto que su jefe decide los turnos.', risk: 'La promesa la hizo el proceso de selección: te toca acompañar la conversación.' },
          kusi: ['pensando', 'En su segundo día, ¿con Walter? Uy.'] } },
    ],
    rules: [[BP, 'Lo ofrecido en la selección (turno, horario, funciones) se cumple o se renegocia con la persona.'], [POL, 'En esta empresa, RR.HH. llama a cada ingreso al día siguiente.']],
    mirada: {
      ve: 'El segundo día es cuando aparecen las diferencias entre lo que se prometió y lo que pasa. Una profesional las busca a propósito, porque una diferencia que se arregla el jueves es una renuncia que no llega en el mes dos.',
      visual: { tipo: 'cambio', titulo: 'De lo ofrecido a lo que pasó', pares: [['Turno mañana', 'Turno noche sin aviso'], ['«Te acompaña alguien»', 'Don Julio le enseñó el lector'], ['Ruta de ventas', 'Ruta asignada en Ciudad Nueva']] },
    },
  },
  {
    id: 'k2', t: '09:40', ch: 'documento', who: 'walter', titulo: 'El plan de 30, 60 y 90 días', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Operaciones', show: ['calidad', 'confianza', 'personas'],
    body: (n, F) => { const e = E(F); return `<p>Walter te recibe con el tablero del inventario pegado en la pared. ${F.has('induccion_mixta') ? 'Ayer funcionó lo de don Julio.' : F.has('induccion_saltada') ? 'Ayer no hubo inducción y se nota: el lector del pasillo 4 sigue sin usarse.' : ''}</p><p>Toca dejar por escrito qué se espera de ${e.n} en sus primeros tres meses. Su reto, dice Walter, es ${e.reto}. <mark class="clave">Si no está escrito, cada uno recordará algo distinto.</mark></p>`; },
    type: 'builder', prompt: 'Arma el plan eligiendo las piezas de cada etapa.', boton: 'Mandar el plan a firmar',
    bloques: [
      { id: 'd30', t: 'Primeros 30 días', n: 2, ops: [
        { id: 'a1', t: 'Liderar el inventario con don Julio como acompañante y cerrar las diferencias por escrito.', ok: true, por: 'Meta concreta, con apoyo y evidencia.' },
        { id: 'a2', t: 'Completar la capacitación en el WMS y en seguridad del almacén.', ok: true, por: 'Lo obligatorio y lo que más necesita.' },
        { id: 'a3', t: 'Demostrar compromiso y buena actitud.', ok: false, por: 'Nadie puede decir el día 30 si eso se cumplió o no.' },
      ] },
      { id: 'd60', t: 'A los 60 días', n: 1, ops: [
        { id: 'b1', t: 'Turnos asignados con una semana de anticipación y sin cambios de último minuto.', ok: true, por: 'Se puede medir, y resuelve lo que le pasó a Yesenia.' },
        { id: 'b2', t: 'Cubrir como chofer cuando falte alguno.', ok: false, por: 'Justo lo que cansó a Pacheco.' },
      ] },
      { id: 'd90', t: 'A los 90 días', n: 1, ops: [
        { id: 'c1', t: 'Reunión con Walter y RR.HH. para revisar metas antes de que termine el periodo de prueba.', ok: true, por: 'La decisión sobre el periodo de prueba se toma con datos, no con impresiones.' },
        { id: 'c2', t: 'Si nadie se queja, sigue.', ok: false, por: 'El silencio no es una evaluación.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .7 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: Math.round((k - .5) * 14), confianza: 3, personas: 2 }, rel: { walter: 1 },
        flags: [q === 'riesgosa' ? 'plan_flojo' : 'plan_90'],
        out: q === 'buena' ? 'Walter lo lee dos veces. «Esto lo firmo. Y que me lo recuerden a los 90 días.» Por primera vez, el supervisor de almacén tiene metas escritas.' : q === 'aceptable' ? 'Walter lo firma, aunque alguna meta quedará a interpretación.' : 'Walter lo firma sin leer mucho. Es una lista de buenas intenciones.',
        pro: { ok: 'Un plan con metas, acompañamiento y fechas protege a la persona nueva y al jefe.', risk: 'Las metas vagas convierten el periodo de prueba en una decisión de simpatía.', info: 'Agenda desde hoy la reunión de los 90 días en el calendario de Walter.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Metas que se pueden revisar!' : 'Mira qué meta no se puede medir.'],
      };
    },
    rules: [[LEY, 'La capacitación en seguridad va al ingreso y cuando cambian las funciones (Ley 29783, art. 27).'], [BP, 'Define metas a 30, 60 y 90 días antes de que termine el periodo de prueba.']],
    mirada: {
      ve: 'El periodo de prueba no sirve si nadie sabe qué se está probando. Una profesional convierte «a ver cómo le va» en metas que el jefe y la persona nueva pueden revisar juntos.',
      visual: { tipo: 'linea', titulo: 'Los primeros tres meses', hitos: [['Día 2', 'Plan firmado'], ['Día 30', 'Inventario cerrado y WMS'], ['Día 60', 'Turnos estables'], ['Día 90', 'Revisión antes del fin de la prueba']] },
    },
  },
  {
    id: 'k3', t: '11:10', ch: 'correo', who: null, titulo: 'Silvia pregunta', banner: 'assets/foto2/tension.webp', show: ['etica', 'cumplimiento', 'confianza'],
    mail: { from: 'Silvia Coaquira · Supervisora de Transporte', to: 'Analista de Selección', asunto: 'Una consulta' },
    body: (n, F) => `<p>Hola. Me dicen que la nueva supervisión de almacén gana más que yo. Llevo siete años. <mark class="clave">¿Me puedes explicar cómo se decide eso?</mark></p><p>Silvia</p><p><small>${F.has('bienvenida_expuesta') ? 'El dato salió del comentario que corrió ayer en el grupo.' : F.has('contra_puja') ? 'Igualaste la contraoferta sin aprobación: la diferencia no tiene sustento escrito.' : F.has('oferta_excepcion') ? 'Gerencia ya aprobó revisar el sueldo de Silvia el próximo trimestre.' : 'La oferta quedó dentro de la banda; aun así, la pregunta merece respuesta.'}</small></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responderle que el sueldo de cada persona es reservado, explicarle los criterios de la política salarial y proponerle revisar su caso con Rocío esta semana.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 2 }, rel: { rocio: 1 }, flags: ['silvia_criterio'],
          responde: 'Silvia, gracias por preguntar. No puedo compartir el sueldo de otra persona, pero sí cómo se decide: la política salarial usa criterios como experiencia, desempeño y escasez del perfil. Te propongo revisar tu caso con Rocío esta semana, con tu antigüedad y tus resultados sobre la mesa.',
          out: 'Silvia responde: «Gracias. Nadie me lo había explicado así». Rocío agenda la reunión para el martes.',
          pro: { ok: 'Proteges un dato personal y cumples lo que pide la Ley 30709: explicar con criterios y revisar el caso.', risk: 'Si la revisión no llega, la confianza se pierde el doble.', info: 'Lleva a la reunión su antigüedad y sus indicadores: la Ley 30709 pide aplicar los criterios al caso concreto.' },
          kusi: ['celebra', 'Reservada con el dato, transparente con el criterio.'] } },
      { id: 'b', label: 'Decirle que no hay diferencias, para no abrir un problema el día antes del inventario.',
        res: { q: 'riesgosa', fx: { etica: -6, confianza: -3 }, flags: ['silvia_negado'],
          responde: 'Silvia, no hay diferencias entre supervisores. Saludos.',
          out: 'Silvia no responde. En Planillas todo se sabe, y algún día lo comprobará.',
          pro: { ok: 'Evitas una conversación incómoda hoy.', risk: 'Negar una diferencia que existe la convierte en un problema de confianza, y quizá en una denuncia.' },
          kusi: ['indignado', '¡Eso no es cierto, y ella lo va a saber!'] } },
      { id: 'c', label: 'Contarle cuánto gana la nueva supervisión, para ser transparente.',
        res: { q: 'aceptable', fx: { etica: -2, cumplimiento: -4 }, flags: ['silvia_cifra'],
          responde: 'Silvia, la nueva supervisión gana más que tú. Te paso la cifra en privado.',
          out: 'Silvia ya tiene la cifra. La nueva supervisión no sabe que su sueldo se compartió.',
          pro: { ok: 'Quieres ser honesta.', risk: 'El sueldo de una persona es un dato suyo. La transparencia está en el criterio, no en la cifra ajena.' },
          kusi: ['pensando', 'Transparencia… con el dato de otra persona.'] } },
    ],
    rules: [[LEY, 'Las diferencias dentro de una categoría deben explicarse con criterios objetivos aplicados al caso (Ley 30709 y D.S. 002-2018-TR).'], [LEY, 'El sueldo de un trabajador es un dato personal (Ley 29733).']],
    mirada: {
      ve: 'Silvia no pregunta por chisme: pregunta si en esta empresa siete años valen algo. Una profesional no esconde la diferencia ni la expone: explica cómo se decide y abre la puerta a revisar su caso. Lo que decidiste en la oferta llega hoy a su escritorio.',
      visual: { tipo: 'rango', titulo: 'La banda de supervisores (S/ mensuales)', min: 3000, max: 4600, banda: [3200, 3900], marcas: [['Raúl', 3400], ['Silvia', 3700], ['Tope', 3900]] },
    },
  },
  {
    id: 'k4', t: '13:20', ch: 'documento', who: null, titulo: 'Lo que sigue abierto', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'calidad', 'confianza'],
    body: (n, F) => `<p>Almuerzas en tu escritorio un arroz chaufa del comedor. Mañana el inventario se come el día: <mark class="clave">te alcanza la tarde para tres pendientes</mark>.</p><p>${F.has('wilber_reprograma') ? 'Wilber confirmó esta mañana que entra el lunes.' : F.has('wilber_reemplazo') ? 'Jhon entra hoy en lugar de Wilber.' : ''}</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que cierras hoy.', boton: 'Planificar la tarde', resumen: 'Cierras hoy',
    cols: ['Pendiente', 'Quién espera', 'Qué pasa si espera'],
    rows: [
      { id: 'gina', cells: ['Oferta de la asistente contable', 'Gina', 'Lleva 50 días esperando; la candidata tiene otra oferta'] },
      { id: 'kelly', cells: ['Datos del ingreso del lunes a Planillas', 'Kelly', 'El lunes se repite la carrera de ayer'] },
      { id: 'despacho', cells: ['Terna del auxiliar de despacho', 'Walter', 'Puede esperar al lunes: Walter está en el inventario'] },
      { id: 'practicante', cells: ['Entrevistas de la practicante de marketing', 'Comercial', 'Se pueden mover al lunes'] },
      { id: 'base', cells: ['Responder a los 135 postulantes que no quedaron', 'Postulantes', 'El portal puede enviar el aviso hoy en diez minutos'] },
      { id: 'excel', cells: ['Rediseñar el Excel de seguimiento', 'Nadie', 'Mejor con calma, el viernes por la tarde'] },
      { id: 'linkedin', cells: ['Publicar en LinkedIn que el puesto se cubrió', 'Comercial', 'No cambia nada'] },
    ],
    score: { gina: 3, kelly: 3, base: 2, despacho: 0, practicante: 0, excel: -1, linkedin: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, tiempo: q === 'buena' ? 3 : 0, personas: picks.includes('base') ? 3 : 0 },
        flags: ['cartera_priorizada', ...picks.map(p => 'cierra_' + p)],
        cartera: picks.includes('gina') ? { contable: 'Oferta aceptada · ingresa el lunes' } : {},
        out: picks.includes('gina') ? 'A las 16:10 llega el correo de Gina: «Aceptó. Entra el lunes». Cincuenta días después, alguien en Contabilidad respira.' : 'La tarde se va en pendientes que podían esperar. Gina sigue sin noticias.',
        pro: { ok: 'Lo urgente es lo que vence y lo que afecta a personas que esperan: Gina, Kelly y 135 postulantes.', risk: 'Lo que se ve bien (LinkedIn) o lo que te gusta hacer (el Excel) no siempre es lo que toca hoy.', info: 'Lo que dejes para el lunes, anótalo con fecha en tu tabla.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Mismo criterio que el primer lunes, pero ya sin dudar.' : 'Mira quién lleva más tiempo esperando.'],
      };
    },
    rules: [[BP, 'Prioriza por impacto, plazo y esfuerzo.'], [POL, 'A todo postulante entrevistado se le responde; a los demás, el portal les avisa el cierre.']],
    mirada: {
      ve: 'El primer lunes elegiste tres procesos de siete sin conocer a nadie. Hoy eliges tres pendientes conociendo a cada persona que espera. La pregunta es la misma; lo que cambió es cuánto sabes de lo que cuesta no moverlo.',
      visual: { tipo: 'matriz', x: 'Esfuerzo hoy', y: 'Impacto en personas que esperan', cuadrantes: ['Hazlo hoy', 'Empieza hoy', 'Si sobra tiempo', 'Para después'], items: [['Gina', .3, .9], ['Kelly', .2, .8], ['135 respuestas', .15, .6], ['Despacho', .5, .45], ['Practicante', .6, .35], ['Excel', .85, .3], ['LinkedIn', .1, .05]] },
    },
  },
  {
    id: 'k5', t: '15:00', ch: 'documento', who: 'kelly', titulo: 'La ficha de datos', banner: 'assets/esc/planilla.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Kelly está rehaciendo la ficha de datos que llena cada persona que ingresa. ${F.has('wilber_llamado') ? '«Después de lo del número de emergencia de Wilber, esto no pasa otra vez.»' : '«Ayer faltaron datos en tres fichas.»'}</p><p>Te pide revisarla antes de imprimirla para el ingreso del lunes. <mark class="clave">Cada casilla es un dato que la empresa tendrá que cuidar.</mark></p>`,
    type: 'flag', prompt: 'Marca lo que no debería pedir la ficha. Si alguna línea te hace dudar, márcala también.',
    doc: { t: 'Ficha de datos del trabajador · Ingreso', sub: 'Borrador de Kelly · v2' },
    lines: [
      { id: 'dni', t: 'Nombres, apellidos, DNI y dirección.' },
      { id: 'emergencia', t: 'Contacto de emergencia, con un segundo número verificado al llenar la ficha.' },
      { id: 'cuenta', t: 'Banco y número de cuenta de sueldo.' },
      { id: 'pension', t: 'Sistema de pensiones; si nunca estuvo afiliado, se le entrega el Boletín Informativo.' },
      { id: 'religion', t: 'Religión que profesa.', bad: LEY, why: 'No tiene relación con el trabajo y es un dato sensible. Ninguna finalidad la justifica.' },
      { id: 'hijos', t: '¿Planea tener hijos en los próximos años?', bad: LEY, why: 'Es una pregunta sobre embarazo futuro: un trato diferenciado por sexo.' },
      { id: 'clave', t: 'Usuario y contraseña de su correo personal, «para enviarle las boletas».', bad: LEY, why: 'Nadie debe entregar sus claves. Las boletas se envían a un correo, no se entra a él.' },
      { id: 'sangre', t: 'Grupo sanguíneo.', duda: 'Puede servir en una emergencia, pero es un dato de salud: que sea voluntario y con su consentimiento.' },
      { id: 'autoriza', t: 'Autorizo a la empresa a usar mis datos para cualquier fin.', bad: BP, why: 'Un consentimiento «para cualquier fin» no cumple la idea de finalidad. Hay que decir para qué.' },
    ],
    res: v => ({
      flags: [v.missLey ? 'ficha_excesiva' : 'ficha_limpia'],
      out: v.missLey ? 'La ficha sale con preguntas que no corresponden. El lunes, la asistente contable de Gina tendrá que responder si piensa tener hijos.' : 'Kelly tacha cuatro líneas y reescribe el consentimiento: «para la relación laboral, la planilla y la seguridad en el trabajo». «Mucho mejor. Y más corta.»',
      pro: { ok: 'Una ficha que pide solo lo necesario protege a la persona y a la empresa.', risk: 'Las fichas viejas suelen acumular preguntas que nadie se atreve a borrar.', info: 'El contacto de emergencia verificado es la lección de ayer convertida en regla.' },
      kusi: v.missLey ? ['indignado', '¡¿Si piensa tener hijos?!'] : ['celebra', 'Ficha corta, limpia y útil.'],
    }),
    rules: [[LEY, 'Los datos deben ser adecuados, pertinentes y no excesivos para su finalidad (Ley 29733).'], [LEY, 'No se discrimina por sexo ni religión (Ley 26772).'], [LEY, 'A quien ingresa sin estar afiliado se le entrega el Boletín Informativo de pensiones (Ley 28991).']],
    mirada: {
      ve: 'La ficha de ingreso es el primer documento que la persona llena como trabajadora. Una profesional la lee como si fuera ella quien la llena: ¿por qué me preguntan esto?, ¿qué harán con este dato?',
      visual: { tipo: 'cambio', titulo: 'De la ficha vieja a la ficha nueva', pares: [['Religión', '(se elimina)'], ['¿Planea tener hijos?', '(se elimina)'], ['Para cualquier fin', 'Para la relación laboral, la planilla y la seguridad'], ['Un número de emergencia', 'Dos números, verificados al llenar']] },
    },
  },
  {
    id: 'k6', t: '17:30', ch: 'whatsapp', who: null, titulo: 'Un mensaje antes del inventario', banner: 'assets/foto2/caminan.webp', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => { const e = E(F); return `<p>${e.n} sale del almacén con el casco en la mano; mañana empieza a las 6:00. Antes de que se vaya, le escribes.</p><p>Lo que digas hoy decide si mañana, cuando algo no cuadre, <mark class="clave">te lo cuenta a ti o se lo calla</mark>.</p>`; },
    type: 'compose', enviaA: 'nuevo', para: 'Para: la nueva supervisión de almacén', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: '¿Cómo vas con estos dos primeros días?', ok: true, por: 'Una pregunta abierta, que invita a contar.' },
        { id: 'a2', t: 'Espero que todo esté perfecto.', ok: false, por: 'Invita a decir «sí, todo bien», aunque no lo esté.' },
      ] },
      { id: 'plan', t: 'Lo que ya quedó', ops: [
        { id: 'p1', t: 'Walter firmó tu plan de 30, 60 y 90 días; te lo dejo en tu correo.', ok: true, por: 'Le confirmas qué se espera de su trabajo.' },
        { id: 'p2', t: 'Walter está contento, así que tranqui.', ok: null, por: 'Bien intencionado, pero no le dice qué se espera.' },
      ] },
      { id: 'canal', t: 'La puerta', ops: [
        { id: 'c1', t: 'Si mañana algo no cuadra, con el equipo o con lo que te ofrecimos, cuéntamelo: para eso es este seguimiento.', ok: true, por: 'Abres un canal para lo que no funciona, no solo para lo que sale bien.' },
        { id: 'c2', t: 'Cualquier problema, mejor resuélvelo con Walter.', ok: false, por: 'Le cierras la puerta a RR.HH. justo cuando más la puede necesitar.' },
      ] },
      { id: 'cierra', t: 'El cierre', ops: [
        { id: 'z1', t: 'Mucho éxito mañana. Don Julio y tú van a hacer un buen equipo.', ok: true, por: 'Cálido y concreto.' },
        { id: 'z2', t: 'No me falles mañana 😅', ok: false, por: 'En broma, pero le pone el peso del inventario encima.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'p1', 'c1', 'z1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.canal === 'c2' || sel.cierra === 'z2' ? 'aceptable' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: 2 },
        flags: sel.canal === 'c1' ? ['checkin_nuevo'] : [],
        out: q === 'buena' ? 'La respuesta llega a las 17:55: «Gracias por preguntar. Le cuento mañana después del primer conteo 💪».' : 'La respuesta es un pulgar. Mañana, si algo no cuadra, tal vez no te enteres.',
        pro: { ok: 'Las personas nuevas casi nunca cuentan lo que no funciona si nadie les abre la puerta.', risk: 'Un seguimiento que solo pregunta «¿todo bien?» recibe siempre «sí».', info: 'Anota lo que te cuente: es el insumo de la reunión de los 30 días.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Puerta abierta antes del inventario.' : 'Pregunta para escuchar, no para tranquilizarte.'],
      };
    },
    rules: [[BP, 'En el seguimiento de un ingreso, pregunta de forma abierta y ofrece un canal para lo que no funciona.']],
    mirada: {
      ve: 'Lo que la persona nueva calla en la primera semana es lo que la hace renunciar en el tercer mes. Una profesional abre la puerta antes de que haga falta.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje que abre la puerta', txt: '¿Cómo vas con estos dos primeros días? Walter firmó tu plan de 30, 60 y 90 días; te lo dejo en tu correo. Si mañana algo no cuadra, con el equipo o con lo que te ofrecimos, cuéntamelo. Mucho éxito mañana. Don Julio y tú van a hacer un buen equipo.' },
    },
  },
  {
    id: 'k7', t: '18:40', ch: 'whatsapp', who: 'kelly', titulo: 'Kelly pide una mano', banner: 'assets/foto2/collage.webp', show: ['tiempo', 'confianza', 'personas'],
    body: () => `<p>Ya estás con la casaca puesta cuando Kelly te escribe desde su escritorio, a diez metros.</p><div class="chat" aria-label="Mensaje de WhatsApp"><p>¿Me ayudas con las credenciales provisionales de los doce de Comercial que apoyan mañana en el inventario? Son veinte minutos 🙏</p></div><p>Tu combi sale a las 19:00 y mañana entras a las 6:00. <mark class="clave">Mañana también te toca el balance con Rocío.</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Quedarte veinte minutos: mañana nadie de Comercial entrará al almacén sin credencial.',
        res: { q: null, fx: { personas: 2, tiempo: -2 }, rel: { kelly: 1 }, flags: ['credenciales'], out: 'A las 19:05 están listas las doce credenciales. Pierdes la combi y tomas la siguiente. Kelly te regala un chocolate de su cajón.', kusi: ['feliz', 'Veinte minutos que mañana ahorran una hora en el portón.'] } },
      { id: 'b', label: 'Decirle que mañana a las 6:00 la ayudas, antes de que lleguen: hoy necesitas descansar.',
        res: { q: null, fx: { tiempo: 2 }, rel: { kelly: 0 }, out: 'Kelly responde: «Dale, a las 6 te espero con café». Duermes temprano. Mañana será un día largo.', kusi: ['animo', 'Cuidar tu descanso también es planificar.'] } },
    ],
    mirada: { ve: 'Al final de dos semanas intensas, decidir cuándo quedarte y cuándo irte también es parte del oficio. Las dos respuestas son razonables; lo que importa es que sea una decisión y no una costumbre.' },
  },
];
