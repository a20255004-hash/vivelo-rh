// Jefe/a de Relaciones Laborales · Capítulo 3 · «El segundo sindicato» · Semana 1, miércoles.
// Hilo: con la huelga anunciada para el martes de la semana 2 y la mesa del jueves en preparación, el sindicato de
// mantenimiento (minoritario) pide el mismo trato. La gerencia ve una oportunidad para dividir.
// Normas citadas:
// - D.S. 019-2006-TR, art. 25.10: actos que afecten la libertad sindical, incluida «cualquier otro acto de interferencia
//   en la organización de sindicatos»; art. 25.12: discriminación por el ejercicio de la actividad sindical (docs/normas/txt).
// - Constitución, art. 28: garantiza la libertad sindical (docs/normas/txt).
// - D.S. 003-97-TR, art. 29: nulidad del despido por afiliación o actividades sindicales (docs/normas/txt).
// Las cifras y los convenios de la empresa son ficticios.

export const CAP = {
  n: 3, titulo: 'El segundo sindicato', dia: 'Semana 1, miércoles', foto: 'assets/foto2/mesa-mujeres.webp',
  lugar: 'Fundición del Sur · Taller de mantenimiento y oficinas',
  inicio: '07:30', fin: '19:20', cierreHora: '19:10',
  apertura: 'Miércoles. A las 7:15 ya hay un mensaje de Marleny Quispe: «La espero a las 9:30 en el taller. No en su oficina». En Ilo amanece despejado, pero en la planta el aire está pesado.', boton: 'Prepararte para el taller',
  kusi: 'Dos sindicatos, dos historias, una misma regla: tratar igual sin usar a uno contra el otro. ¡Vamos!',
  lead: 'Te preparaste para escuchar al sindicato de mantenimiento, no usaste su posición contra el mayoritario, frenaste un plan para dividir y contaste lo que hacías antes de que se volviera rumor.',
  reflexion: '¿En qué momento sentiste que dividir habría sido más fácil que negociar?',
  siguiente: { n: 4, titulo: 'La mesa', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'marleny', p: 'Reunión con el sindicato de mantenimiento', j: 'Marleny Quispe', d: 0, e: '09:30 en el taller' },
  { id: 'plan', p: '«Plan Mantenimiento» del gerente', j: 'Ing. Paredes', d: 0, e: 'Borrador recibido' },
  { id: 'rumor', p: 'Rumor de un acuerdo a escondidas', j: 'Teodoro Cutipa', d: 0, e: 'Corre desde la mañana' },
  { id: 'electricos', p: 'Electricistas para los servicios mínimos', j: 'Ing. Wilber Chambi', d: 0, e: 'Sin coordinar' },
  { id: 'mesa', p: 'Mesa del jueves con el sindicato mayoritario', j: 'Comisión de la empresa', d: 0, e: 'Mañana 10:00' },
];

export const FUTURO = {
  marleny_respeto: ['Le diste al sindicato de mantenimiento un trato serio: información, calendario propio y ninguna promesa a cambio.', 'Marleny ayudará con los electricistas de los servicios mínimos. Capítulo 5.'],
  clausula_espejo: ['Firmaste con mantenimiento un compromiso de darles automáticamente lo que obtenga el otro sindicato.', 'Cada sol en la mesa del jueves costará el doble. Capítulos 4 y 9.'],
  adelanto_divisor: ['Ofreciste a mantenimiento un aumento adelantado para mostrar que «quien no para, gana».', 'Cutipa lo llamará compra de voluntades. Capítulos 4 y 8.'],
  plan_frenado: ['Tachaste del «Plan Mantenimiento» todo lo que buscaba dividir a los sindicatos.', 'El gerente quedó molesto, pero no hubo interferencia. Capítulo 4.'],
  plan_divisor: ['El «Plan Mantenimiento» salió con acciones para enfrentar a los sindicatos.', 'La Autoridad de Trabajo lo preguntará. Capítulo 8.'],
  cutipa_transparencia: ['Le contaste a Cutipa que te reuniste con mantenimiento y para qué.', 'Llega a la mesa sin la sospecha del acuerdo a escondidas. Capítulo 4.'],
  cutipa_sospecha: ['No aclaraste el rumor de la reunión con mantenimiento.', 'Cutipa abrirá la mesa con eso. Capítulo 4.'],
  yolanda_orientada: ['Orientaste a una trabajadora de la contrata de limpieza sin presionarla.', 'Ella te avisará de algo el primer día de huelga. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  wilber: { n: 'Ing. Wilber Chambi', sub: 'Superintendente de Fundición', c: '#8A3B12' },
  marleny: { n: 'Marleny Quispe', sub: 'Secretaria general · sindicato de mantenimiento', c: '#5B3E8C' },
};

export const WSP = [
  { chat: 'marleny', t: '07:15', de: 'Marleny', txt: 'La espero a las 9:30 en el taller. No en su oficina.' },
  { chat: 'grupo', t: '08:05', de: 'Jhon', txt: 'Jefa, en el grupo del comedor dicen que la empresa «ya arregló» con mantenimiento para dejar solos a los de Cutipa.' },
  { chat: 'gerencia', t: '08:30', de: 'Ing. Paredes', txt: 'Te mandé el Plan Mantenimiento. Es la oportunidad. Lima lo vio con buenos ojos.', si: 'mandato_real' },
  { chat: 'gerencia', t: '08:30', de: 'Ing. Paredes', txt: 'Te mandé el Plan Mantenimiento. Si el mayoritario no se mueve, el de mantenimiento nos sirve.', no: 'mandato_real' },
  { chat: 'sindicato', t: '15:10', de: 'Teodoro Cutipa', txt: 'Gracias por avisar de frente. Mañana a las 10, entonces.', si: 'cutipa_transparencia' },
  { chat: 'marleny', t: '17:45', de: 'Marleny', txt: 'Mis electricistas no van a dejar el horno sin energía, haya huelga o no. Pero que nadie diga que lo hacemos para romper la huelga.', si: 'marleny_respeto' },
  { chat: 'abogado', t: '18:30', de: 'Dra. Medina', txt: 'Revisé lo de hoy. Si alguien pregunta, la empresa no negoció a escondidas con nadie. Que siga así.', no: 'adelanto_divisor' },
];

export const CORREOS = [
  { t: '08:25', de: 'Ing. Ricardo Paredes · Gerencia General', para: 'Jefatura de Relaciones Laborales', asunto: 'Plan Mantenimiento', html: '<p>Adjunto una idea. Mantenimiento no votó huelga: tratémoslos como aliados. Revisa y ajusta lo que quieras, pero quiero que el mayoritario vea que la empresa premia a quien conversa.</p><p>R. P.</p>' },
  { t: '12:40', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Jefatura de Relaciones Laborales', asunto: 'Dos sindicatos', html: '<p>Tratar bien a un sindicato está perfecto. Usarlo para debilitar al otro es interferir en la organización sindical, que el D.S. 019-2006-TR (art. 25.10) considera infracción muy grave.</p><p>Cada sindicato negocia lo suyo, en su momento. Lo que no puede haber es un trato distinto como premio o castigo por hacer huelga.</p><p>Silvia</p>' },
];

export const QUIZ = [
  { q: 'Usar a un sindicato minoritario para debilitar al mayoritario puede ser…', ops: ['Una buena estrategia legal', 'Un acto de interferencia en la organización sindical', 'Obligatorio por ley', 'Una forma de conciliación'], ok: 1, por: 'El D.S. 019-2006-TR, art. 25.10, incluye como infracción muy grave cualquier acto de interferencia en la organización de sindicatos.' },
  { q: 'Adelantar un aumento a un sindicato para mostrar que «quien no hace huelga gana»…', ops: ['Es un incentivo válido', 'Puede leerse como discriminación por actividad sindical', 'Es lo que manda la Constitución', 'Solo es un tema de presupuesto'], ok: 1, por: 'Dar un trato distinto como premio por no ejercer la huelga es discriminación sindical (art. 25.12).' },
  { q: 'Comprometerse a darle a un sindicato automáticamente lo que obtenga el otro…', ops: ['No tiene costo', 'Duplica el costo de cada concesión en la otra mesa', 'Está prohibido', 'Es obligatorio'], ok: 1, por: 'No es ilegal, pero cada sol que ofrezcas en una mesa se multiplica: tu margen real se achica.' },
  { q: 'Si corre el rumor de que la empresa negocia a escondidas con otro sindicato, conviene…', ops: ['Ignorarlo', 'Aclararlo con hechos ante el dirigente, antes de la mesa', 'Desmentirlo con una amenaza', 'Confirmarlo para presionar'], ok: 1, por: 'La transparencia temprana evita que la mesa empiece con una acusación.' },
  { q: 'Una trabajadora de una contrata pregunta si debe sumarse a la huelga. Lo correcto es…', ops: ['Decirle que no o la despiden', 'Explicarle que es su decisión y quién la representa', 'Pedirle que espíe', 'Ignorarla'], ok: 1, por: 'Nadie debe presionar en un sentido u otro. Orientar es explicar derechos y canales, no decidir por ella.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:50', ch: 'documento', who: null, titulo: 'Antes del taller', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'etica', 'tiempo'],
    body: (n, F) => `<p>${F.has('jhon_protegido') ? 'Jhon llegó temprano, con las actas del sindicato de mantenimiento ya ordenadas por fecha.' : 'El escritorio de Jhon está vacío: pidió el día. Te toca buscar las actas sola.'} El sindicato de mantenimiento tiene unos 180 afiliados: electricistas, mecánicos, soldadores. Su convenio vence en marzo.</p><p>Tienes una hora antes del taller. <mark class="clave">Prepara dos cosas</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige qué preparas antes de ver a Marleny.', boton: 'Preparar esto', resumen: 'Preparaste',
    cols: ['Qué preparas', 'Para qué'],
    rows: [
      { id: 'convenio', cells: ['Su convenio vigente y lo que quedó pendiente', 'Saber qué le debe la empresa a mantenimiento'] },
      { id: 'roles', cells: ['Qué puestos de mantenimiento sostienen el horno', 'Pensar en los servicios mínimos'] },
      { id: 'calendario', cells: ['Una fecha para iniciar su propia negociación', 'Que tengan su propio espacio'] },
      { id: 'pases', cells: ['Quiénes se pasaron del mayoritario a mantenimiento este año', 'Saber de qué lado está cada uno'] },
      { id: 'oferta', cells: ['Una oferta económica para mantenimiento, antes que al mayoritario', 'Ganar su lealtad'] },
    ],
    score: { convenio: 3, roles: 3, calendario: 2, pases: -4, oferta: -4 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.some(p => ['pases', 'oferta'].includes(p)) ? -4 : 2 },
        cartera: { marleny: q === 'buena' ? 'Vas preparada: convenio, puestos y calendario' : 'Vas con una agenda riesgosa' },
        out: picks.includes('convenio') ? 'En el convenio de mantenimiento hay una cláusula de ropa térmica que nunca se compró. Marleny lo va a mencionar, seguro.' : 'Vas al taller sin saber qué le debe la empresa a mantenimiento.',
        pro: { ok: 'Escuchar a un sindicato empieza por saber qué se le prometió antes.', risk: 'Rastrear afiliaciones o llevar una oferta para «ganar lealtad» es preparar una interferencia.', info: 'Los electricistas son clave para los servicios mínimos del viernes.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Preparación limpia!' : 'Ojo: eso huele a dividir…'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.10: interferir en la organización de sindicatos es infracción muy grave.']],
    mirada: {
      ve: 'Con dos sindicatos, cada movimiento se lee dos veces. Prepararse para escuchar al segundo no es lo mismo que prepararse para usarlo.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Valor para la reunión', cuadrantes: ['Hazlo hoy', 'Planifícalo', 'Si sobra tiempo', 'No lo hagas'], items: [['Convenio vigente', .3, .85], ['Puestos del horno', .4, .8], ['Calendario propio', .2, .6], ['Rastrear afiliaciones', .5, .05], ['Oferta para ganar lealtad', .3, .1]] },
    },
  },
  {
    id: 'c2', t: '09:35', ch: 'presencial', who: null, titulo: 'El taller de Marleny', banner: 'assets/foto/taller.webp', lugar: 'Taller de mantenimiento eléctrico', show: ['confianza', 'etica', 'personas'],
    body: () => `<p>Marleny Quispe, 44 años, electricista, nacida en Juli y criada en Ilo, te recibe entre tableros abiertos. Le habla en aimara por teléfono a su mamá y luego a ti en castellano, sin rodeos.</p><p>«Nosotros no vamos a parar. Pero no somos tontos: <mark class="clave">lo que le den a Cutipa lo queremos nosotros, y por escrito, hoy</mark>. Si no, en marzo nos ven en la puerta.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer su postura, comprometer por escrito que su negociación de marzo empezará a tiempo y con la misma información económica, sin adelantar montos ni atarlos a la otra mesa.',
        res: { q: 'buena', fx: { confianza: 4, etica: 4, personas: 2 }, flags: ['marleny_respeto'], cartera: { marleny: 'Compromiso de calendario e información; sin montos' },
          out: 'Marleny se seca las manos en el overol. «No es lo que pedí. Pero es la primera vez que alguien de RR.HH. viene al taller.» Te enseña la ropa térmica que nunca llegó.',
          pro: { ok: 'Le das a su sindicato un espacio propio y un trato serio, sin usarlo en la otra mesa.', risk: 'Marleny puede sentir que no conseguiste nada concreto.', info: 'La ropa térmica pendiente es una deuda fácil de pagar: hazlo esta semana.' },
          kusi: ['celebra', 'Respeto sin comprar a nadie. ¡Bacán!'] } },
      { id: 'b', label: 'Firmarle hoy un compromiso: todo aumento que obtenga el mayoritario se extenderá automáticamente a mantenimiento.',
        res: { q: 'aceptable', fx: { confianza: 3, calidad: -4 }, flags: ['clausula_espejo'], cartera: { marleny: 'Cláusula espejo firmada' },
          out: 'Marleny firma feliz. Esa noche, Óscar hace la cuenta: cada sol que ofrezcas mañana ahora cuesta para 870 personas, no para 690.',
          pro: { ok: 'Es legal y calma a mantenimiento.', risk: 'Te amarras las manos en la otra mesa: tu margen real se achica sin que nadie lo haya decidido.' },
          kusi: ['pensando', 'Tranquilidad hoy, margen menos mañana…'] } },
      { id: 'c', label: 'Ofrecerle un aumento adelantado para mantenimiento esta misma semana: que la planta vea que quien conversa, gana.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6, confianza: -2 }, flags: ['adelanto_divisor'], cartera: { marleny: 'Aumento adelantado ofrecido' },
          out: 'Marleny te mira fijo. «¿Me quiere usar de ejemplo?» Acepta igual: su gente lo necesita. A las doce ya lo sabe toda la planta, y Cutipa tiene su titular: «La empresa compra voluntades».',
          pro: { ok: 'Mantenimiento queda contento.', risk: 'Premiar a un sindicato por no hacer huelga para presionar al otro es interferir y discriminar por actividad sindical (D.S. 019-2006-TR, arts. 25.10 y 25.12).' },
          kusi: ['indignado', '¡Eso es usar a un sindicato contra otro!'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, arts. 25.10 y 25.12: interferencia en la organización sindical y discriminación por actividad sindical.'], [BP, 'Cada sindicato negocia en su espacio, con la misma información y sin premios por la postura del otro.']],
    mirada: {
      ve: 'El segundo sindicato es la tentación clásica de una gerencia en conflicto: «tratemos bien a los que no paran». Hay una línea fina entre respetar a un sindicato y usarlo como ejemplo contra el otro.',
      visual: { tipo: 'balanza', a: { t: 'Usar a mantenimiento', items: ['Presión sobre Cutipa', 'Riesgo de interferencia', 'Dos sindicatos desconfiados'] }, b: { t: 'Respetar a mantenimiento', items: ['Calendario propio', 'Misma información', 'Un aliado para los servicios mínimos'] } },
    },
  },
  {
    id: 'c3', t: '11:20', ch: 'documento', who: 'gerencia', titulo: 'El «Plan Mantenimiento»', banner: 'assets/foto/revisa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>El documento del gerente tiene seis puntos y un título en negrita. ${F.has('adelanto_divisor') ? 'Ya hiciste en el taller lo que propone el punto tres.' : 'Algunos puntos son razonables. Otros, no.'}</p><p>Silvia te pidió que lo revises tú antes de que llegue a Lima. <mark class="clave">Tacha lo que no puede quedar</mark>.</p>`,
    type: 'flag', prompt: 'Marca los puntos que no pueden quedar en el plan.',
    doc: { t: 'Plan Mantenimiento', sub: 'Borrador del Ing. Ricardo Paredes · Confidencial' },
    lines: [
      { id: 'ropa', t: '1. Comprar esta semana la ropa térmica pendiente del convenio de mantenimiento.' },
      { id: 'info', t: '2. Entregar a ambos sindicatos la misma información económica de la empresa.' },
      { id: 'premio', t: '3. Anunciar un aumento a mantenimiento antes de la mesa del jueves, para que el mayoritario vea que «conversar paga».', bad: LEY, why: 'Un premio diseñado para presionar al otro sindicato es interferencia y discriminación por actividad sindical (D.S. 019-2006-TR, arts. 25.10 y 25.12).' },
      { id: 'cubrir', t: '4. Si hay huelga, pedir a mantenimiento que opere los convertidores en lugar de los operadores en huelga.', bad: LEY, why: 'Cubrir los puestos de quienes están en huelga con otros trabajadores es sustitución, infracción muy grave (D.S. 019-2006-TR, art. 25.9). Mantenimiento puede sostener servicios mínimos, no reemplazar huelguistas.' },
      { id: 'afiliacion', t: '5. Facilitar el traslado de afiliados del mayoritario a mantenimiento «a quien lo pida».', bad: LEY, why: 'Promover la desafiliación de un sindicato es una de las conductas que el art. 25.10 del D.S. 019-2006-TR menciona expresamente.' },
      { id: 'cronograma', t: '6. Acordar con mantenimiento la fecha de inicio de su negociación de marzo.' },
      { id: 'foto', t: '7. Tomarse una foto con la junta de mantenimiento para el boletín interno de esta semana.', bad: BP, why: 'No es ilegal, pero en plena víspera de huelga se leerá como una campaña contra el mayoritario. Espera a que haya algo real que comunicar.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: missLey ? -6 : 6, etica: missLey ? -4 : 3, calidad: q === 'buena' ? 3 : 1 }, rel: { gerencia: missLey ? 1 : -1 },
        flags: missLey ? ['plan_divisor'] : ['plan_frenado'],
        cartera: { plan: missLey ? 'Sale a Lima con acciones divisorias' : 'Reducido a ropa térmica, información y cronograma' },
        out: missLey ? 'El plan llega a Lima con el punto 4 intacto. Si el martes alguien de mantenimiento entra a convertidores, ya está escrito que fue idea de la empresa.' : 'Le devuelves al gerente un plan de tres puntos. «Me lo dejaste en nada.» Le respondes: «Le dejé lo que no se le puede volver en contra». No contesta, pero lo firma.',
        pro: { ok: 'Lo que queda es trato justo, información pareja y cumplir lo pendiente.', risk: 'Una sola línea de este plan, en manos de un inspector, alcanza para una sanción muy grave.', info: 'Mantenimiento sí puede ser parte de los servicios mínimos: eso se acuerda el viernes, con el sindicato en huelga.' },
        kusi: missLey ? ['indignado', 'Ese plan es una bomba de tiempo…'] : ['feliz', '¡Plan limpio, aunque corto!'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.9: sustitución de trabajadores en huelga.'], [LEY, 'D.S. 019-2006-TR, art. 25.10: promover la desafiliación o interferir en la organización sindical.']],
    mirada: {
      ve: 'Los planes para «dividir» casi nunca se escriben con esa palabra: se escriben como premios, traslados, fotos o «apoyo operativo». Tu trabajo es leer qué efecto tiene cada línea, no qué intención declara.',
      visual: { tipo: 'cambio', titulo: 'Del plan para dividir al plan para cumplir', pares: [['Premio antes de la mesa', 'Ropa térmica que se debía'], ['Mantenimiento opera convertidores', 'Mantenimiento en servicios mínimos acordados'], ['Facilitar traslados', 'Respetar cada afiliación']] },
      normas: [{ ley: 'D.S. 019-2006-TR, art. 25.10', dice: 'Son infracción muy grave los actos que afecten la libertad sindical, como promover la desafiliación, obstaculizar la representación sindical o cualquier otro acto de interferencia en la organización de sindicatos.', practica: 'Usar a mantenimiento para presionar al mayoritario es interferencia aunque nadie lo llame así.' }],
    },
  },
  {
    id: 'c4', t: '13:40', ch: 'llamada', who: 'sindicato', titulo: 'El rumor', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: () => `<p>Comes un pan con palta mirando el celular. Tres llamadas seguidas, y la última es la más difícil.</p><p><mark class="clave">Mañana hay mesa</mark>. Lo que digas hoy se escucha mañana.</p>`,
    type: 'calls',
    calls: [
      ['Ing. Wilber Chambi · Fundición', 'Contesta desde la sala de control', '«Para el viernes necesito a dos electricistas por turno en la subestación del horno. Son de mantenimiento. Si Marleny se molesta, me quedo sin ellos.»'],
      ['Óscar Valdivia · Finanzas', 'Contesta con la calculadora sonando', '«Me dijeron que hay un compromiso con mantenimiento. ¿Lo cuento en el costo de mañana o no? Necesito saberlo antes de las cinco.»'],
      ['Teodoro Cutipa · Sindicato', 'Contesta en el comedor, con bulla de fondo', '«Jefa, me dicen que hoy estuvo en el taller con Marleny. ¿Ya arreglaron a nuestras espaldas? Porque si es así, mañana no me siento.»'],
    ],
    prompt: 'Cutipa espera tu respuesta. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que sí te reuniste con Marleny, que fue para hablar de su propio convenio y de los servicios mínimos, y que nada de lo que se negocie con él dependerá de lo que se converse con mantenimiento.',
        res: { q: 'buena', fx: { confianza: 5, cumplimiento: 2 }, rel: { sindicato: 1 }, flags: ['cutipa_transparencia'], cartera: { rumor: 'Aclarado con Cutipa', mesa: 'Confirmada, sin sospechas' },
          out: 'Cutipa tarda en responder. «Ya. Gracias por decirlo de frente. Mañana a las diez.» No es confianza todavía, pero ya no es acusación.',
          pro: { ok: 'Contar lo que hiciste antes de que te lo pregunten en la mesa quita munición al rumor.', risk: 'Si en el taller hiciste algo que no puedes contar, esta respuesta no te salva.', info: 'A Óscar, dile la verdad sobre cualquier compromiso: el costo de mañana depende de eso.' },
          kusi: ['celebra', '¡Transparencia que desarma!'] } },
      { id: 'b', label: 'Que la empresa conversa con todos los sindicatos y que no tienes por qué dar explicaciones de cada reunión.',
        res: { q: 'aceptable', fx: { confianza: -3, cumplimiento: 1 }, rel: { sindicato: -1 }, flags: ['cutipa_sospecha'],
          out: '«O sea que sí», dice Cutipa, y cuelga. Mañana abrirá la mesa con esa frase.',
          pro: { ok: 'Es cierto que no necesitas su permiso para hablar con otro sindicato.', risk: 'En la víspera de una mesa, la respuesta formal deja vivo el rumor.' },
          kusi: ['pensando', 'Cierto… pero deja la puerta al rumor.'] } },
      { id: 'c', label: 'Negar que te hayas reunido con Marleny: es mejor no darle argumentos.',
        res: { q: 'riesgosa', fx: { confianza: -6, etica: -4 }, rel: { sindicato: -1 }, flags: ['cutipa_sospecha'],
          out: 'A los diez minutos, Cutipa te manda una foto: tú, en el taller, con Marleny. «¿Y esto, jefa?»',
          pro: { ok: 'Ninguno.', risk: 'Mentir a un dirigente en una planta donde todos se conocen es perder la credibilidad para el resto del conflicto.' },
          kusi: ['triste', 'En Ilo todo se sabe…'] } },
    ],
    rules: [[BP, 'En un conflicto con dos sindicatos, di lo que haces antes de que se vuelva rumor.']],
    mirada: {
      ve: 'Con dos sindicatos, el rumor del acuerdo a escondidas aparece siempre. La única vacuna es contar, con hechos, qué hiciste y qué no, antes de que te lo pregunten en público.',
      visual: { tipo: 'cambio', titulo: 'Responder al rumor', pares: [['«No tengo que darle explicaciones»', '«Me reuní, para esto, y no cambia nuestra mesa»'], ['Negar', 'Contar con hechos']] },
    },
  },
  {
    id: 'c5', t: '16:10', ch: 'whatsapp', who: null, titulo: 'Lo mismo para los dos', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>${F.has('clausula_espejo') ? 'Ya firmaste la cláusula espejo. Ahora tienes que explicarle a Marleny qué viene, sin prometer más.' : 'Le prometiste a Marleny información pareja y un calendario.'} Silvia sugiere un mensaje corto, que se pueda reenviar sin vergüenza.</p><p><mark class="clave">Escríbelo como si lo fuera a leer Cutipa</mark>.</p>`,
    type: 'compose', enviaA: 'marleny', para: 'Para: Marleny Quispe · Sindicato de mantenimiento', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Saludo', ops: [
        { id: 's1', t: 'Señora Quispe, gracias por recibirme hoy en el taller.', ok: true, por: 'Cordial y formal.' },
        { id: 's2', t: 'Marle, gracias por el apoyo 😉', ok: false, por: 'Un guiño que, reenviado, parece complicidad.' },
      ] },
      { id: 'info', t: 'Información', ops: [
        { id: 'i1', t: 'Le enviaré la misma información económica que recibe el otro sindicato, apenas esté lista.', ok: true, por: 'Trato parejo, verificable.' },
        { id: 'i2', t: 'A ustedes les adelanto los números antes que a ellos.', ok: false, por: 'Información privilegiada para un sindicato es trato desigual.' },
      ] },
      { id: 'cal', t: 'Calendario', ops: [
        { id: 'k1', t: 'Propongo que fijemos la primera reunión de su negociación la segunda semana de enero, antes de que venza su convenio.', ok: true, por: 'Espacio propio, con fecha.' },
        { id: 'k2', t: 'Su negociación la vemos cuando se resuelva lo de Cutipa.', ok: false, por: 'Les dices que su mesa depende de la otra.' },
      ] },
      { id: 'minimos', t: 'Servicios mínimos', ops: [
        { id: 'm1', t: 'El viernes coordinaremos los servicios mínimos con ambos sindicatos; su apoyo en la subestación es para seguridad, no para cubrir a nadie.', ok: true, por: 'Deja claro el límite que Marleny pidió.' },
        { id: 'm2', t: 'Cuento con ustedes si los otros paran.', ok: null, por: 'Ambiguo: ¿contar con ellos para qué?' },
      ] },
    ],
    res: sel => {
      const malo = sel.info === 'i2' || sel.cal === 'k2';
      const buenas = ['s1', 'i1', 'k1', 'm1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : -1, cumplimiento: malo ? -4 : 3, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['marleny_respeto'] : [],
        cartera: { electricos: sel.minimos === 'm1' ? 'Marleny entiende el límite: seguridad, no reemplazo' : 'Por aclarar' },
        out: q === 'buena' ? 'Marleny responde con un audio corto: «Así sí. Y que conste que lo de la subestación es por el horno, no por la empresa».' : malo ? 'Marleny no responde. Una hora después, su mensaje reenviado aparece en el grupo del comedor.' : 'Marleny responde con un «visto». Habrá que volver a hablar el viernes.',
        pro: { ok: 'Un mensaje que puede leer el otro sindicato sin escándalo es un mensaje bien escrito.', risk: 'Todo lo que le das a un sindicato y no al otro, el otro lo sabrá.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Reenviable sin vergüenza!' : 'Ese mensaje no aguanta un reenvío…'],
      };
    },
    rules: [[BP, 'Escribe a cada sindicato como si el otro fuera a leerlo.']],
    mirada: {
      ve: 'En una planta con dos sindicatos, cada mensaje es potencialmente público. La prueba es simple: si lo reenvían al otro sindicato, ¿te avergüenza?',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje reenviable', txt: 'Señora Quispe, gracias por recibirme hoy. Le enviaré la misma información económica que recibe el otro sindicato. Propongo fijar la primera reunión de su negociación la segunda semana de enero. El viernes coordinaremos los servicios mínimos con ambos sindicatos; su apoyo en la subestación es para seguridad, no para cubrir a nadie.' },
    },
  },
  {
    id: 'c6', t: '17:30', ch: 'presencial', who: null, titulo: 'Yolanda, sin cita', banner: 'assets/foto/cafe.webp', lugar: 'Puerta de la oficina', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Ya guardabas la laptop cuando alguien toca la puerta. Yolanda Ccama, 31 años, de la contrata de limpieza, con el uniforme celeste y una bolsa de pan para su hijo. Viene de Pampa Inalámbrica en combi todos los días.</p><p>«Señorita, ¿yo también tengo que hacer huelga? Mi supervisora dice que si paro me botan, y los del sindicato dicen que si no paro soy rompehuelga.» <mark class="clave">No es de ningún sindicato</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle que la huelga es del sindicato de la fundición y que es decisión de cada quien sumarse; que nadie puede botarla por eso, y que si su contrata la presiona, puede contártelo o acudir a SUNAFIL.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, cumplimiento: 2 }, flags: ['yolanda_orientada'],
          out: 'Yolanda repite «es mi decisión» dos veces, como para no olvidarlo. Se va a la combi con el pan bajo el brazo. Anotas el nombre de su contrata.',
          pro: { ok: 'Orientas sin presionar en ningún sentido.', info: 'Las contratas también tienen supervisores nerviosos: habla con su administrador antes del martes.' },
          kusi: ['celebra', '¡Información que da tranquilidad!'] } },
      { id: 'b', label: 'Decirle que mejor no pare: ella no es de la fundición y no tiene nada que ganar.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -2 },
          out: 'Yolanda asiente, aliviada. Mañana dirá en el comedor que «la de Relaciones Laborales» le dijo que no parara. Ya tienes otro rumor.',
          pro: { ok: 'Quieres protegerla.', risk: 'Aconsejar no ejercer un derecho, desde la jefatura, es presionar aunque suene amable.' },
          kusi: ['preocupado', 'Le decidiste algo que era suyo…'] } },
      { id: 'c', label: 'Decirle que no es tu tema y que lo vea con su contrata.',
        res: { q: 'aceptable', fx: { tiempo: 1, personas: -3 },
          out: 'Yolanda se va con la misma pregunta. Su supervisora le volverá a decir lo mismo.',
          pro: { ok: 'Formalmente, no es tu trabajadora.', risk: 'Lo que pasa en tu planta con las contratas también es tu problema en una huelga.' },
          kusi: ['pensando', 'No es tu planilla… pero sí tu planta.'] } },
    ],
    rules: [[LEY, 'Constitución, art. 28: la huelga es un derecho; nadie debe ser presionado en un sentido u otro.'], [BP, 'Las contratas que trabajan en tu planta también necesitan reglas claras durante un conflicto.']],
    mirada: {
      ve: 'En una huelga, los más expuestos suelen ser los que no están en ningún sindicato: el personal de las contratas. Lo que les dices se repite en el comedor como si fuera la posición de la empresa.',
      visual: { tipo: 'mensaje', titulo: 'Lo que Yolanda necesitaba oír', txt: 'La huelga es del sindicato de la fundición. Sumarse o no es tu decisión. Nadie puede despedirte por eso. Si te presionan, puedes contármelo o acudir a SUNAFIL.' },
    },
  },
  {
    id: 'c7', t: '18:45', ch: 'correo', who: null, titulo: 'Nota para el gerente', banner: 'assets/3d/scenes/oficina.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Ing. Ricardo Paredes', to: 'Jefatura de Relaciones Laborales', asunto: '¿Y mantenimiento?' },
    body: () => `<p>¿Cómo quedamos con mantenimiento? Lima me lo va a preguntar mañana. <mark class="clave">Corto</mark>.</p><p>R. P.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Qué se acordó, qué se descartó y por qué.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { gerencia: 1 }, responde: 'Ingeniero: 1) Mantenimiento no se suma a la huelga y tendrá su propia negociación desde enero, con la misma información que el mayoritario. 2) Compramos esta semana la ropa térmica pendiente de su convenio. 3) Sus electricistas apoyarán la seguridad del horno en los servicios mínimos, que se acuerdan el viernes. 4) Descartamos premios, traslados y que mantenimiento opere convertidores: serían infracciones muy graves y el sindicato mayoritario lo usaría en la mesa.',
          out: 'El gerente responde a las 19:30: «Ok. No me gusta, pero lo entiendo». Te vas en la última movilidad, con la ventana abierta y olor a mar.', kusi: ['feliz', 'Claro, corto y con el porqué.'] } },
      { id: 'b', label: 'Una nota optimista: «Mantenimiento está con nosotros».',
        res: { q: 'riesgosa', fx: { confianza: -2, calidad: -3 }, responde: 'Ingeniero: mantenimiento está con nosotros. No se suman a la huelga.',
          out: 'El gerente lo repite en Lima tal cual. «Están con nosotros» suena a bando. Si Marleny lo escucha, deja de estarlo.', kusi: ['preocupado', 'Mantenimiento no es un bando…'] } },
    ],
    mirada: { ve: 'Explicarle a la gerencia por qué descartaste algo es tan importante como contarle lo que hiciste: así la próxima vez no lo vuelve a proponer.' },
  },
];
