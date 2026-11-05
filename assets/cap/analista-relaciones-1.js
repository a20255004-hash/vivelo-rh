// Analista de Relaciones Laborales · Capítulo 1 · «El pliego» · Semana 1, lunes.
// Hilo de las dos semanas: la negociación colectiva con el sindicato de Conservas del Pacífico.
// Normas citadas: TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): presentación del pliego,
// inicio del trato directo dentro de los diez días calendario de recibido, información económica a pedido de los
// trabajadores y protección de la libertad sindical (fuero sindical).

export const CAP = {
  n: 1, titulo: 'El pliego', dia: 'Semana 1, lunes', foto: 'assets/foto2/tension.webp',
  lugar: 'Conservas del Pacífico · Zona industrial de Chimbote',
  inicio: '07:30', fin: '19:30', cierreHora: '19:20',
  apertura: 'Chimbote, zona industrial. Huele a mar y a conserva. Hoy empiezas como analista de Relaciones Laborales y el sindicato llega con su pliego.', boton: 'Ir a la puerta de la planta',
  kusi: 'En relaciones laborales la confianza vale tanto como la ley. ¡Con calma y con respeto!',
  lead: 'Recibiste el pliego como corresponde, entendiste los plazos de la negociación, frenaste una represalia disfrazada y propusiste una primera reunión sin poner a nadie a la defensiva.',
  reflexion: '¿En qué momento de hoy sentiste que estabas «entre dos fuegos»?',
  siguiente: { n: 2, titulo: 'La falta', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'pliego', p: 'Pliego de reclamos 2026-2027', j: 'Arturo · Relaciones Laborales', d: 0, e: '18 pedidos' },
  { id: 'trato', p: 'Inicio del trato directo', j: 'Arturo · Relaciones Laborales', d: 0, e: 'Plazo: 10 días calendario' },
  { id: 'costeo', p: 'Costeo de los pedidos', j: 'Finanzas', d: 0, e: 'Sin empezar' },
  { id: 'turnos', p: 'Cambios de turno en la línea 2', j: 'Gladys · Planta', d: 0, e: 'Pedido de hoy' },
  { id: 'comunicado', p: 'Comunicado al personal', j: 'Arturo · Gerencia', d: 0, e: 'Para mañana' },
];

export const FUTURO = {
  pliego_cargo: ['Recibiste el pliego con sello, fecha y hora.', 'Esa fecha marca el plazo del trato directo. Capítulo 4.'],
  pliego_rechazado: ['Te negaste a recibir el pliego en la puerta.', 'El sindicato lo dejó por notario. Lucho lo recordará en el capítulo 4.'],
  bono_prometido: ['Insinuaste un bono antes de negociar.', 'Lucho lo mencionará frente a 20 trabajadores en el capítulo 4.'],
  turno_frenado: ['Frenaste el cambio de turno de Lucho.', 'Gladys sigue molesta. Capítulo 2.'],
  turno_cambiado: ['Aceptaste mover a Lucho al turno noche.', 'El sindicato lo denunciará ante SUNAFIL en el capítulo 7.'],
  lucho_respeto: ['Lucho recibió una propuesta de reunión clara y respetuosa.', 'Llegará a la primera reunión con menos guardia. Capítulo 4.'],
  comunicado_neutral: ['El comunicado informó sin atacar al sindicato.', 'Valeria lo usará de ejemplo en el capítulo 9.'],
  comunicado_ataque: ['El comunicado dijo que el sindicato «pide imposibles».', 'La base se endureció. Capítulo 4.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
};

export const WSP = [
  { chat: 'grupo', t: '07:20', de: 'Arturo', txt: 'Buenos días. El sindicato entrega el pliego a las 7:30 en la puerta 1. Ve tú, yo llego a las 8.' },
  { chat: 'grupo', t: '07:22', de: 'Valeria', txt: 'Importante: que quede constancia de la fecha y la hora de recepción.' },
  { chat: 'gladys', t: '10:15', de: 'Gladys', txt: 'Necesito hablar contigo de la línea 2. Ya.' },
  { chat: 'lucho', t: '16:05', de: 'Lucho', txt: 'Recibido. Lo consulto con la junta directiva y le confirmo mañana.', si: 'lucho_respeto' },
  { chat: 'gladys', t: '16:40', de: 'Gladys', txt: 'Ok, no lo muevo. Pero si se duerme otra vez en la línea, me vas a escuchar.', si: 'turno_frenado' },
  { chat: 'arturo', t: '18:50', de: 'Arturo', txt: 'Buen primer día. Mañana a las 8 vemos el costeo con Finanzas.' },
];

export const CORREOS = [
  { t: '07:15', de: 'Dr. Arturo Benavides', para: 'Analista de Relaciones Laborales', asunto: 'Bienvenida', html: '<p>Bienvenida. Llegas en el mejor y en el peor momento: hoy empieza la negociación colectiva del año.</p><p>Te pido tres cosas: que todo quede por escrito, que no prometas nada que no esté aprobado y que trates al sindicato con el mismo respeto que a la gerencia.</p><p>Dr. Arturo Benavides</p>' },
  { t: '11:40', de: 'Valeria Castro · Abogada laboralista', para: 'Analista de Relaciones Laborales', asunto: 'Plazos de la negociación', html: '<p>Te resumo lo urgente: según el TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR), el trato directo debe iniciarse dentro de los diez días calendario de recibido el pliego. Además, si el sindicato pide información económica de la empresa, hay que proporcionarla.</p><p>Valeria</p>' },
];

export const QUIZ = [
  { q: '¿Qué norma regula la negociación colectiva en el sector privado?', ops: ['El TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR)', 'La Ley 29783', 'La Ley 30709', 'La Ley 28518'], ok: 0, por: 'El D.S. 010-2003-TR aprueba el TUO de la Ley de Relaciones Colectivas de Trabajo.' },
  { q: 'Recibido el pliego, ¿cuándo debe empezar el trato directo?', ops: ['Cuando la gerencia quiera', 'Dentro de los diez días calendario', 'Al año siguiente', 'Solo si hay huelga'], ok: 1, por: 'El trato directo se inicia dentro de los diez días calendario de recibido el pliego.' },
  { q: 'La jefa de planta quiere mover al dirigente sindical al turno noche «para que no agite». Eso es…', ops: ['Una decisión operativa normal', 'Un posible acto contra la libertad sindical', 'Obligatorio en negociación', 'Una sanción disciplinaria'], ok: 1, por: 'Perjudicar a un trabajador por su actividad sindical vulnera la libertad sindical.' },
  { q: 'Si el sindicato pide información económica de la empresa para negociar…', ops: ['Se le niega siempre', 'La empresa debe proporcionar la información pertinente', 'Se le da solo si paga', 'Se publica en redes'], ok: 1, por: 'El TUO obliga al empleador a proporcionar, a pedido, información sobre su situación económica y financiera.' },
  { q: 'En un comunicado al personal durante la negociación, lo más prudente es…', ops: ['Decir que el sindicato pide imposibles', 'Informar hechos y plazos sin descalificar a la contraparte', 'No decir nada nunca', 'Publicar el pliego con comentarios'], ok: 1, por: 'La comunicación debe informar sin atacar: el sindicato es la contraparte con la que firmarás.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '07:35', ch: 'presencial', who: 'lucho', titulo: 'Puerta 1', banner: 'assets/foto2/grito.webp', lugar: 'Puerta 1 de la planta', show: ['cumplimiento', 'confianza', 'personas'],
    body: () => `<p>En la puerta 1 hay treinta trabajadores con polos blancos y un cartel: «Trabajo digno, bono justo». Un celular graba todo.</p><p>Lucho Paredes, secretario general del sindicato, te extiende un sobre manila: «Este es nuestro pliego. <mark class="clave">¿Lo va a recibir o vamos a tener que buscar un notario?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recibirlo, sellar el cargo con fecha y hora, y decirle que la empresa responderá dentro de los plazos de ley.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 3, personas: 2 }, rel: { lucho: 1 }, flags: ['pliego_cargo'], cartera: { pliego: 'Recibido: lunes 07:38', trato: 'Vence en 10 días calendario' },
          out: 'Lucho revisa el sello y asiente. Alguien detrás dice «al menos esta vez nos reciben». El celular deja de grabar.',
          pro: { ok: 'Recibir con cargo protege a las dos partes: todos saben desde cuándo corren los plazos.', risk: 'Desde este minuto corre el plazo del trato directo.', info: 'Pide una copia digital del pliego para no transcribir 18 pedidos a mano.' },
          kusi: ['celebra', 'Formal y respetuoso desde el minuto uno.'] } },
      { id: 'b', label: 'Decirle que no puedes recibir nada hasta que llegue el Dr. Benavides.',
        res: { q: 'aceptable', fx: { cumplimiento: -2, confianza: -3 }, rel: { lucho: -1 }, flags: ['pliego_rechazado'],
          out: '«Como siempre», dice Lucho, y da media vuelta. A las 10:00 llega la carta notarial con el mismo pliego.',
          pro: { ok: 'No te comprometes sin tu jefe.', risk: 'Recibir un documento no es aceptarlo. Negarte solo agranda el conflicto.' },
          kusi: ['pensando', 'Recibir no es aceptar…'] } },
      { id: 'c', label: 'Recibirlo y decirle que, entre nos, la gerencia está pensando en un bono, para calmar a la gente y empezar con buen ánimo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, etica: -4, confianza: -2 }, rel: { lucho: 1 }, flags: ['pliego_cargo', 'bono_prometido'], cartera: { pliego: 'Recibido: lunes 07:38', trato: 'Vence en 10 días calendario' },
          out: 'Lucho sonríe y lo repite en voz alta: «¡Ya hay bono!». Acabas de negociar sin mandato y frente a una cámara.',
          pro: { ok: 'Bajas la tensión por un momento.', risk: 'Todo lo que dices en una negociación se vuelve un compromiso, sobre todo si no estaba aprobado.' },
          kusi: ['preocupado', 'Eso no lo podías ofrecer…'] } },
    ],
    rules: [[LEY, 'El pliego se presenta al empleador y su recepción marca el inicio de los plazos (D.S. 010-2003-TR).'], [POL, 'En Conservas del Pacífico, solo la comisión negociadora puede hacer ofrecimientos al sindicato.']],
    mirada: {
      ve: 'El primer contacto define el tono de semanas de negociación. Recibir con respeto y con cargo no es ceder: es reconocer a la contraparte y dejar claro desde cuándo corren los plazos.',
      visual: { tipo: 'balanza', a: { t: 'Negarte a recibir', items: ['Ganas tiempo', 'Esperas al jefe'] }, b: { t: 'Recibir con cargo', items: ['Constancia de fecha y hora', 'Mensaje de respeto', 'El conflicto no escala en la puerta'] } },
    },
  },
  {
    id: 'r2', t: '08:40', ch: 'presencial', who: 'arturo', titulo: 'Cómo sigue esto', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>El Dr. Benavides lee el pliego con el lapicero en la boca. «Dieciocho pedidos. Lo de siempre: bono de producción, uniformes, movilidad, comedor…»</p><p>Te pasa unas tarjetas: «Para que no te pierdas estas semanas, <mark class="clave">ordena cómo avanza una negociación colectiva</mark> si no hay acuerdo rápido».</p>`,
    type: 'secuencia', prompt: 'Ordena las etapas de la negociación colectiva. Usa las flechas.', boton: 'Mostrarle el orden al Dr. Benavides',
    items: [
      { id: 'pliego', t: 'El sindicato presenta el pliego de reclamos', por: 'Hoy, en la puerta 1.' },
      { id: 'trato', t: 'Trato directo entre la comisión de la empresa y la del sindicato', por: 'Debe iniciarse dentro de los diez días calendario de recibido el pliego.' },
      { id: 'conc', t: 'Conciliación con apoyo de la Autoridad de Trabajo', por: 'Si el trato directo no llega a acuerdo.' },
      { id: 'arb', t: 'Arbitraje o huelga', por: 'Cuando las etapas anteriores no resuelven.' },
      { id: 'conv', t: 'Convenio colectivo (por acuerdo o por laudo)', por: 'Lo firmado obliga a ambas partes durante su vigencia.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { arturo: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? '«Exacto. Y nuestro trabajo es que esto termine en la segunda tarjeta», dice el doctor.' : 'El doctor mueve una tarjeta: «La huelga o el arbitraje no son el inicio: son lo que pasa cuando todo lo demás falló».',
        pro: { ok: 'Conocer las etapas te ayuda a saber qué está en juego en cada reunión.', info: 'Revisa el convenio anterior: muchos pedidos de hoy vienen de acuerdos que no se cumplieron.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Mapa claro!' : 'Primero se conversa.'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT (D.S. 010-2003-TR): trato directo, conciliación, y arbitraje o huelga como etapas posteriores.']],
    mirada: {
      ve: 'Una negociación colectiva es un proceso con reglas y plazos, no una pelea. Cada etapa que se salta o se incumple se convierte después en un argumento en contra.',
      visual: { tipo: 'flujo', titulo: 'Etapas de la negociación colectiva', pasos: ['Pliego', 'Trato directo', 'Conciliación', 'Arbitraje o huelga', 'Convenio'], aqui: 1 },
      normas: [{ ley: 'TUO de la Ley de Relaciones Colectivas de Trabajo, D.S. 010-2003-TR', dice: 'Regula la presentación del pliego, el trato directo, la conciliación, el arbitraje, la huelga y el convenio colectivo.', practica: 'El reloj del trato directo empezó a correr a las 7:38.' }],
    },
  },
  {
    id: 'r3', t: '10:20', ch: 'presencial', who: 'gladys', titulo: 'La línea 2', banner: 'assets/foto2/tension.webp', lugar: 'Planta de envasado', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Gladys te espera junto a la línea 2, con el ruido de las latas de fondo. Conoce a cada operario por su nombre y no le gusta perder producción.</p><p>«Lucho se pasa medio turno en reuniones. A partir de mañana lo paso al <mark class="clave">turno noche, para que no esté agitando a mi gente</mark>. Solo necesito que RR.HH. firme el cambio.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que ese cambio, justo ahora y por ese motivo, puede ser una represalia sindical, y ofrecerle ordenar los permisos sindicales con Lucho.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: -1 }, rel: { gladys: -1 }, flags: ['turno_frenado'], cartera: { turnos: 'Cambio frenado; se ordenarán los permisos' },
          out: 'Gladys se cruza de brazos: «Entonces que me avisen sus reuniones con tiempo». Es razonable, y se lo puedes pedir al sindicato.',
          pro: { ok: 'Atiendes el problema real de Gladys (la producción) sin dañar la libertad sindical.', risk: 'Gladys siente que RR.HH. protege al sindicato.', info: 'Revisa si el convenio anterior regula las licencias sindicales.' },
          kusi: ['animo', 'Lo justo, aunque no sea lo cómodo.'] } },
      { id: 'b', label: 'Firmar el cambio: los turnos son una decisión de la jefa de planta, ella conoce su línea y además es verdad que Lucho falta mucho.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -7 }, rel: { gladys: 1 }, flags: ['turno_cambiado'], cartera: { turnos: 'Lucho pasa al turno noche' },
          out: 'Gladys te agradece. Mañana, en plena negociación, el secretario general aparecerá en el turno noche. Todos sabrán por qué.',
          pro: { ok: 'Gladys queda contenta.', risk: 'Una decisión «operativa» con un motivo sindical es un acto antisindical, y en plena negociación se nota.' },
          kusi: ['indignado', 'Eso parece un castigo por ser dirigente…'] } },
      { id: 'c', label: 'Decirle que lo consultarás con el Dr. Benavides.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, tiempo: -2 },
          out: 'Gladys bufa. El doctor te dirá lo mismo que ya sabías, dos horas después.',
          pro: { ok: 'Consultar es prudente cuando hay dudas.', risk: 'Si sabes que algo es riesgoso, decirlo a tiempo también es tu trabajo.' },
          kusi: ['pensando', 'Ya sabías la respuesta, ¿no?'] } },
    ],
    rules: [[LEY, 'La libertad sindical protege a los trabajadores contra actos que los perjudiquen por su actividad sindical (D.S. 010-2003-TR).'], [BP, 'Separa el problema operativo (permisos) de la persona (el dirigente).']],
    mirada: {
      ve: 'Muchos actos antisindicales no se ven como tales: se ven como un cambio de turno, una reasignación o una «decisión de la jefa». Lo que los delata es el momento y el motivo.',
      visual: { tipo: 'cambio', titulo: 'Del castigo a una solución', pares: [['Mover a Lucho al turno noche', 'Acordar un aviso previo para las reuniones sindicales'], ['«Para que no agite»', '«Para planificar la línea»']] },
      normas: [{ ley: 'TUO de la LRCT, D.S. 010-2003-TR (libertad sindical y fuero sindical)', dice: 'Protege a los trabajadores, y en especial a los dirigentes, frente a actos que los perjudiquen por su afiliación o actividad sindical.', practica: 'Cambiar de turno al secretario general en plena negociación sería difícil de defender ante una inspección.' }],
    },
  },
  {
    id: 'r4', t: '12:10', ch: 'documento', who: null, titulo: 'Preparar la mesa', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'tiempo', 'etica'],
    body: () => `<p>Antes del trato directo hay que preparar a la comisión de la empresa. Tienes la tarde para <mark class="clave">dos encargos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos encargos con los que vas a empezar.', boton: 'Empezar por aquí', resumen: 'Empezaste por',
    cols: ['Encargo', 'Para qué sirve'],
    rows: [
      { id: 'costeo', cells: ['Costear los 18 pedidos con Finanzas', 'Saber cuánto cuesta cada punto'] },
      { id: 'convenio', cells: ['Revisar qué se cumplió del convenio anterior', 'Saber dónde la empresa falló'] },
      { id: 'info', cells: ['Preparar la información económica que el sindicato puede pedir', 'Tenerla lista y ordenada'] },
      { id: 'afiliados', cells: ['Hacer una lista de quiénes están afiliados al sindicato', 'Saber «quién es quién»'] },
      { id: 'redes', cells: ['Revisar los Facebook de los dirigentes', 'Conocer a la contraparte'] },
    ],
    score: { costeo: 3, convenio: 3, info: 2, afiliados: -3, redes: -3 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.some(p => ['afiliados', 'redes'].includes(p)) ? -5 : 2 },
        cartera: { costeo: picks.includes('costeo') ? 'Costeo en marcha con Finanzas' : 'Sin empezar' },
        out: picks.includes('convenio') ? 'Descubres que la empresa no cumplió dos puntos del convenio anterior: uniformes y movilidad de madrugada. Ahí está la desconfianza.' : 'Avanzas con números, pero no sabes por qué el sindicato desconfía.',
        pro: { ok: 'Negociar bien es llegar con números y con memoria.', risk: 'Fichar a los afiliados o vigilar sus redes puede leerse como hostilidad o discriminación sindical.', info: 'Lo que la empresa no cumplió antes pesará más que cualquier cifra.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Números y memoria. ¡Bien!' : 'Ojo con vigilar al sindicato.'],
      };
    },
    rules: [[LEY, 'A pedido del sindicato, la empresa debe proporcionar información sobre su situación económica y financiera (D.S. 010-2003-TR).'], [BP, 'Llega al trato directo sabiendo qué cuesta cada pedido y qué no se cumplió antes.']],
    mirada: {
      ve: 'Una comisión negociadora mal preparada improvisa, promete o se cierra. La preparación tiene dos partes: cuánto cuesta lo que se pide y qué historia de confianza hay detrás.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Valor para negociar', cuadrantes: ['Hazlo hoy', 'Planifícalo', 'Si sobra tiempo', 'No lo hagas'], items: [['Costeo', .7, .9], ['Convenio anterior', .3, .85], ['Información económica', .5, .6], ['Lista de afiliados', .35, .08], ['Redes de dirigentes', .25, .05]] },
    },
  },
  {
    id: 'r5', t: '15:30', ch: 'whatsapp', who: null, titulo: 'La primera reunión', banner: 'assets/foto2/acuerdo-manos.webp', show: ['confianza', 'cumplimiento', 'personas'],
    body: () => `<p>El Dr. Benavides te pide coordinar con Lucho la fecha de la primera reunión de trato directo. Tienes su número desde la mañana.</p>`,
    type: 'compose', enviaA: 'lucho', para: 'Para: Lucho Paredes · Sindicato', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Saludo', ops: [
        { id: 's1', t: 'Buenas tardes, señor Paredes. Le escribe la analista de Relaciones Laborales.', ok: true, por: 'Formal y claro: es una comunicación entre comisiones.' },
        { id: 's2', t: 'Hola Lucho 👋', ok: false, por: 'Demasiado familiar para una comunicación oficial de la empresa.' },
      ] },
      { id: 'fecha', t: 'La propuesta', ops: [
        { id: 'f1', t: 'Le proponemos iniciar el trato directo el jueves a las 10:00 en la sala de reuniones de la planta.', ok: true, por: 'Fecha dentro del plazo de diez días, hora y lugar concretos.' },
        { id: 'f2', t: 'Cuando la gerencia tenga tiempo le avisamos para reunirnos.', ok: false, por: 'Sin fecha y fuera de tu control: el plazo legal sigue corriendo.' },
        { id: 'f3', t: 'Le proponemos reunirnos en tres semanas, cuando tengamos todo listo.', ok: false, por: 'Excede los diez días calendario para iniciar el trato directo.' },
      ] },
      { id: 'agenda', t: 'Agenda', ops: [
        { id: 'a1', t: 'En esa reunión podríamos acordar la metodología: frecuencia de reuniones, actas y orden de los puntos.', ok: true, por: 'Empezar por las reglas del juego baja la tensión.' },
        { id: 'a2', t: 'Ya le adelanto que el bono no va.', ok: false, por: 'Cierras un punto antes de abrir la mesa, y por WhatsApp.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Quedamos atentos a su confirmación o a una fecha alternativa dentro de la semana.', ok: true, por: 'Le das espacio para consultar a su junta.' },
        { id: 'c2', t: 'Confirme hoy, por favor.', ok: null, por: 'Presionar a un dirigente que debe consultar a su base suele jugar en contra.' },
      ] },
    ],
    res: sel => {
      const malo = sel.fecha !== 'f1' || sel.agenda === 'a2';
      const buenas = ['s1', 'f1', 'a1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : -2, cumplimiento: sel.fecha === 'f1' ? 4 : -5, personas: sel.agenda === 'a2' ? -4 : 2 },
        rel: { lucho: q === 'buena' ? 1 : malo ? -1 : 0 }, flags: q === 'buena' ? ['lucho_respeto'] : [],
        cartera: { trato: sel.fecha === 'f1' ? 'Primera reunión propuesta: jueves 10:00' : 'Sin fecha dentro del plazo' },
        out: q === 'buena' ? 'Lucho responde en media hora: «Recibido. Lo consulto con la junta directiva y le confirmo mañana».' : malo ? 'Lucho reenvía tu mensaje al grupo del sindicato. Las respuestas no son amables.' : 'Lucho responde con un «ok». Frío, pero responde.',
        pro: { ok: 'Fecha dentro del plazo, lugar, metodología y espacio para consultar: así se abre una mesa.', risk: 'Lo que escribes por WhatsApp también es un documento.', info: 'Confirma luego la reunión por escrito y deja constancia de que se inició dentro del plazo.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Mesa abierta con el pie derecho!' : 'Ese mensaje cerró puertas…'],
      };
    },
    rules: [[LEY, 'El trato directo se inicia dentro de los diez días calendario de recibido el pliego (D.S. 010-2003-TR).'], [BP, 'Antes de discutir montos, acuerda la metodología: frecuencia, actas y orden de los puntos.']],
    mirada: {
      ve: 'La primera reunión no es para negociar el bono: es para ponerse de acuerdo en cómo se va a negociar. Quien propone reglas claras gana confianza sin ceder nada.',
      visual: { tipo: 'mensaje', titulo: 'Una convocatoria que abre la mesa', txt: 'Buenas tardes, señor Paredes. Le proponemos iniciar el trato directo el jueves a las 10:00 en la sala de reuniones de la planta. En esa reunión podríamos acordar la metodología: frecuencia de reuniones, actas y orden de los puntos. Quedamos atentos a su confirmación o a una fecha alternativa dentro de la semana.' },
    },
  },
  {
    id: 'r6', t: '17:40', ch: 'presencial', who: 'arturo', titulo: 'El comunicado', banner: 'assets/foto2/revisan.webp', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>El gerente general llamó al Dr. Benavides. Quiere un comunicado para todo el personal mañana a primera hora.</p><p>El doctor te dicta la idea: «Que la gente sepa que <mark class="clave">el sindicato pide imposibles</mark> y que si se exceden, la planta podría no ser viable». Te mira: «Redáctalo tú, que escribes mejor que yo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un comunicado que informe que se recibió el pliego, cuándo empieza el trato directo y que la empresa negociará de buena fe.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, personas: 3 }, rel: { arturo: 1 }, flags: ['comunicado_neutral'], cartera: { comunicado: 'Borrador informativo aprobado' },
          out: 'El doctor lo lee dos veces. «El gerente va a decir que es muy blando». Lo piensa. «Pero no nos va a explotar en la cara. Va así.»',
          pro: { ok: 'Informas hechos y plazos sin descalificar a la contraparte con la que vas a firmar.', risk: 'La gerencia puede sentir que no defendiste su posición.', info: 'Lo que se comunica durante una negociación termina leyéndose en la mesa.' },
          kusi: ['feliz', 'Informar no es atacar. ¡Bien!'] } },
      { id: 'b', label: 'Redactarlo como lo pidió: el doctor sabe más, es la gerencia quien lo ordena y la gente tiene derecho a saber la posición de la empresa.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -2, personas: -4 }, rel: { arturo: 0 }, flags: ['comunicado_ataque'], cartera: { comunicado: 'Comunicado: «el sindicato pide imposibles»' },
          out: 'Mañana, el comunicado estará pegado en el comedor. Por la tarde, alguien le habrá escrito encima con plumón.',
          pro: { ok: 'Cumples la orden de tu jefe.', risk: 'Descalificar al sindicato frente a toda la planta endurece a la base y complica cualquier acuerdo.' },
          kusi: ['triste', 'Ahora será más difícil sentarse a conversar.'] } },
    ],
    rules: [[BP, 'Durante una negociación, comunica hechos y plazos; no descalifiques a la contraparte.']],
    mirada: {
      ve: 'En relaciones laborales, lo que dices en el comedor pesa en la mesa. La empresa puede explicar su posición, pero hacerlo atacando al sindicato convierte una negociación en una pelea pública.',
      visual: { tipo: 'cambio', titulo: 'Del ataque a la información', pares: [['«El sindicato pide imposibles»', '«Recibimos el pliego el lunes»'], ['«La planta podría cerrar»', '«El trato directo empieza el jueves»'], ['Tono de amenaza', 'Compromiso de negociar de buena fe']] },
    },
  },
  {
    id: 'r7', t: '19:05', ch: 'correo', who: null, titulo: 'El resumen del día', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Dr. Arturo Benavides', to: 'Analista de Relaciones Laborales', asunto: 'Resumen para gerencia' },
    body: () => `<p>Necesito un resumen corto del día para el gerente general. <mark class="clave">Solo lo que tiene que saber</mark>.</p><p>A. B.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Hechos, plazos y un riesgo.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { arturo: 1 }, responde: 'Doctor: 1) Pliego recibido hoy a las 7:38 (18 pedidos). 2) El trato directo debe iniciarse dentro de 10 días calendario; propusimos el jueves 10:00. 3) Riesgo: dos puntos del convenio anterior no se cumplieron (uniformes y movilidad) y serán lo primero que el sindicato reclame.',
          out: 'El doctor lo reenvía tal cual al gerente, con una sola línea: «Así estamos».', kusi: ['feliz', 'Hechos, plazos y un riesgo. Perfecto.'] } },
      { id: 'b', label: 'Una descripción de todo lo que pasó en la puerta 1, con lo que dijo cada trabajador.',
        res: { q: 'aceptable', fx: { confianza: 0, tiempo: -2 }, responde: 'Doctor: a las 7:30 llegamos a la puerta 1. Había unas treinta personas con polos blancos. Uno de ellos gritó que… (40 líneas más)',
          out: 'El doctor lo resume él mismo, a las 10 de la noche.', kusi: ['pensando', '¿Qué necesitaba saber el gerente?'] } },
    ],
    mirada: { ve: 'La gerencia no necesita la crónica: necesita saber qué plazos corren y qué riesgos vienen. Un buen resumen permite decidir.' },
  },
];
