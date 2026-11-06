// Jefe/a de RR.HH. · Capítulo 10 · «Dos semanas en Mantaro» · Semana 2, viernes. Final abierto.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 29783 y D.S. 005-2012-TR, art. 49 (elección e instalación del comité de SST), capítulo 9.
//   https://cdn.www.gob.pe/uploads/document/file/5686893/5050275-informe-tecnico-1380-2018-servir-gpgsc.pdf
// - Ley 28806, art. 14 (medida de requerimiento), capítulo 5.
// - D.S. 039-91-TR (RIT), capítulo 7. D.S. 017-2009-MTC, art. 30, capítulo 2.
// - Libertad sindical: derecho constitucional de los trabajadores a sindicarse; la empresa no debe impedirlo ni
//   condicionarlo (principio, sin citar artículos ni plazos de registro).

export const CAP = {
  n: 10, titulo: 'Dos semanas en Mantaro', dia: 'Semana 2, viernes', foto: 'assets/foto/oficina-abierta.webp',
  lugar: 'Transportes Mantaro · Terminal de Huancayo',
  inicio: '07:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Viernes. Hace dos semanas entraste a este terminal con un llavero de tres llaves y un archivo en cajas. Hoy el bus de las 7 a Lima sale con dos conductores. Y en tu correo hay un mensaje de Néstor que todavía no has contestado.', boton: 'Abrir el último día',
  kusi: 'Dos semanas intensas. Hoy mira hacia atrás… y hacia el lunes.',
  lead: 'Escuchaste cómo quedaron las cosas, respondiste al sindicato con respeto, hiciste el balance de las dos semanas, ordenaste la semana 3 y te preguntaste si este puesto es para ti.',
  reflexion: 'En dos semanas pasaste de un archivo en cajas a un área con reglas, un comité elegido y un sindicato que pide reunión. ¿Te ves en este puesto?',
  siguiente: { n: 11, titulo: 'El sindicato', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'sindicato', p: 'Sindicato de conductores', j: 'Néstor y compañeros', d: 0, e: 'Se registra el lunes' },
  { id: 'sunafil', p: 'Medida de requerimiento', j: 'Inspectora Villanueva', d: 0, e: 'Plazo en curso' },
  { id: 'rit', p: 'Reglamento Interno', j: 'Tú', d: 0, e: 'En revisión legal' },
  { id: 'comite', p: 'Comité de SST', j: 'Representantes electos', d: 0, e: 'Se instala la próxima semana' },
  { id: 'balance', p: 'Balance de dos semanas', j: 'Tú', d: 0, e: 'Hoy' },
];

export const FUTURO = {
  sindicato_respeto: ['La empresa recibió la noticia del sindicato con respeto y aceptó reunirse.', 'El lunes empieza el diálogo.'],
  sindicato_presion: ['La empresa intentó desanimar el sindicato.', 'El lunes llega con desconfianza.'],
  balance_honesto: ['Tu balance mostró logros y pendientes sin maquillar.', 'El directorio lo usará en la revisión mensual.'],
  semana3_ordenada: ['Tienes un orden claro para la semana 3.', 'El lunes no empezarás de cero.'],
  me_veo: ['Te ves en este puesto.', 'La semana 3 te espera.'],
  dudo: ['Todavía no sabes si este puesto es para ti.', 'La semana 3 te ayudará a decidir.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  familia: { n: 'Directorio Rojas', sub: 'Don Alberto, Gonzalo, Mariela, Rubén y tú', c: '#8A5A2B' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  freddy: { n: 'Freddy Quispe', sub: 'Conductor · en descanso médico', c: '#B5561E' },
  mariela: { n: 'Mariela Rojas', sub: 'Gerente de Administración y Finanzas · hija', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'freddy', t: '07:10', de: 'Freddy', txt: 'Jefa, mi bebita ya se ríe. Cuando me quiten el yeso, ¿puedo volver al nocturno de Lima con relevo? 👶' },
  { chat: 'mariela', t: '08:00', de: 'Mariela', txt: '¿Leíste lo del sindicato? Esto nos va a costar. Necesito saber qué van a pedir.' },
  { chat: 'gonzalo', t: '10:30', de: 'Gonzalo', txt: 'Mi papá está nervioso con lo del sindicato. Yo… creo que está bien. Prefiero hablar con alguien que me diga las cosas de frente.', si: 'gonzalo_confia' },
  { chat: 'patty', t: '17:50', de: 'Patty', txt: 'Jefa, gracias por estas dos semanas. Hace un mes no sabía qué era urgente. Ahora sí 💪', si: 'patty_respaldada' },
  { chat: 'nestor', t: '18:40', de: 'Néstor', txt: 'Señora, gracias por contestarme. El lunes a las 8 nos vemos. Llevaremos nuestra lista.', si: 'sindicato_respeto' },
];

export const CORREOS = [
  { t: '07:00', de: 'Néstor Poma', para: 'Jefa de RR.HH.', asunto: 'RE: Algo que debe saber', html: '<p>Señora, ¿recibió mi correo de ayer? Los compañeros quieren saber si la empresa nos va a recibir el lunes, después de registrar el sindicato.</p><p>Néstor</p>' },
  { t: '15:20', de: 'SUNAFIL · Intendencia Regional de Junín', para: 'Transportes Mantaro S.A.C.', asunto: 'Verificación de la medida de requerimiento', html: '<p>Se comunica que la verificación del cumplimiento de la medida de requerimiento se realizará al vencimiento del plazo otorgado. Se le recuerda mantener los registros de jornada a disposición.</p>' },
  { t: '18:55', de: 'Sindicato de Trabajadores de Transportes Mantaro (en formación)', para: 'Gerencia General; Jefa de RR.HH.', asunto: 'Solicitud de reunión · lunes 8:00', html: '<p>Por medio de la presente, comunicamos que el lunes registraremos nuestra organización sindical y solicitamos una reunión ese mismo día a las 8:00 para presentar nuestro pliego de puntos.</p><p>Entre otros: pago por hora de conducción para todos, descanso para tripulación en Lima y continuidad de los conductores mayores.</p><p>Junta directiva provisional</p>' },
];

export const QUIZ = [
  { q: 'Los trabajadores anuncian que formarán un sindicato. La empresa debe…', ops: ['Despedir a los organizadores', 'Respetar su derecho y prepararse para dialogar', 'Ofrecer un bono a quienes no se afilien', 'Ignorarlos'], ok: 1, por: 'La libertad sindical es un derecho: la empresa no debe impedirla ni condicionarla.' },
  { q: 'Un buen balance de las dos primeras semanas de un área nueva incluye…', ops: ['Solo los logros', 'Lo logrado, lo pendiente y lo aprendido, con datos', 'Solo lo que falta', 'Una lista de culpables'], ok: 1, por: 'Un balance honesto orienta lo que viene.' },
  { q: 'Para la semana 3, lo primero en orden de riesgo es…', ops: ['Cambiar el logo', 'Cumplir la medida de requerimiento y sostener el relevo nocturno', 'Hacer una fiesta', 'Comprar software'], ok: 1, por: 'Primero lo que protege vidas y lo que exige la autoridad.' },
  { q: 'Lo más difícil de ser jefa de RR.HH. en una empresa familiar suele ser…', ops: ['Imprimir boletas', 'Mantener la independencia frente a la familia dueña', 'Ordenar el archivo', 'Hablar con proveedores'], ok: 1, por: 'La independencia es lo que da valor a RR.HH. en una empresa familiar.' },
];

const BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '07:30', ch: 'llamada', who: null, titulo: 'Cómo quedaron las cosas', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio, con un café caliente esta vez', show: ['personas', 'confianza'],
    body: (n, F) => `<p>El café está caliente por primera vez en dos semanas. ${F.has('patty_renuncia') ? 'El escritorio de Patty está vacío; hoy es su último día y llegará a las 9 a entregar sus llaves.' : 'Patty llega con pan de Sapallanga.'} Antes de la reunión con Don Alberto, haces tres llamadas.</p><p><mark class="clave">Cada una te dice cómo quedó una parte de la historia</mark>.</p>`,
    type: 'calls',
    calls: [['Freddy Quispe · en su casa', 'Contesta con la bebita de fondo', '«Jefa, me quitan el yeso en tres semanas. Rosa dice que ya no quiere que maneje de noche. Yo sí quiero, pero con relevo. ¿Eso se va a mantener, no?»'], ['Lucía Ramos · terramoza, suplente del comité', 'Contesta en el terminal de Yerbateros', '«Ya nos dieron una salita en Lima para descansar. Es chiquita, pero tiene un sofá. Las chicas lloraron, jefa. Y el lunes empiezo a leer lo del comité.»'], ['Don Teófilo Huaringa · jefe de taller', 'Contesta con las manos ocupadas', '«Ayer frené el bus 17 por los frenos y nadie me gritó. En 22 años, primera vez. Eso es lo que cambió, señora.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que oíste?',
    choices: [
      { id: 'a', label: 'Anotar las tres cosas como logros reales para el balance, y lo de Freddy como un compromiso: el relevo nocturno no puede depender de quién esté de jefe.',
        res: { q: 'buena', fx: { personas: 3, calidad: 3 }, cartera: { balance: 'Tres logros que se sienten en el terminal' },
          out: 'Escribes en tu cuaderno: «Freddy, Lucía, Don Teófilo». Son tres personas que hace dos semanas no te conocían.',
          pro: { ok: 'Los logros que cuentan son los que siente la gente.', info: 'Que el relevo esté en el reglamento es lo que lo hace durar.' },
          kusi: ['feliz', '¡Lo que cambió tiene nombre y apellido!'] } },
      { id: 'b', label: 'Agradecerles y pasar al balance con los indicadores del Excel.',
        res: { q: 'aceptable', fx: { calidad: 2 }, cartera: { balance: 'Indicadores del Excel' },
          out: 'Tienes buenos números. Pero el sofá en Lima y el bus 17 no aparecen en ninguna columna.',
          pro: { ok: 'Los indicadores son necesarios.', risk: 'Lo que más cambió no siempre cabe en un Excel.' },
          kusi: ['pensando', 'Lo del sofá también es un logro.'] } },
    ],
    mirada: { ve: 'Al final de dos semanas intensas, lo que de verdad cambió no siempre está en un indicador. Una terramoza con dónde descansar y un mecánico que puede frenar un bus sin miedo son señales de que el área ya existe.' },
  },
  {
    id: 'f2', t: '09:15', ch: 'presencial', who: 'don-alberto', titulo: '«¿Nos traicionaron?»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de la gerencia', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Don Alberto leyó el correo de Néstor. Tiene la foto del primer bus en la mano. «Treinta años. Les di trabajo a sus papás. ¿Y ahora un sindicato? <mark class="clave">¿Nos traicionaron?</mark>»</p><p>${F.has('sucesion_proceso') ? 'Mariela, en la puerta, propone «conversar» con los organizadores antes del lunes.' : 'Mariela, en la puerta, propone ofrecer un bono a quienes no se afilien.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no es traición sino un derecho, que el sindicato busca que lo logrado no dependa de una persona, y proponer contestar a Néstor hoy aceptando la reunión del lunes.',
        res: { q: 'buena', fx: { etica: 6, confianza: 2, cumplimiento: 3 }, rel: { 'don-alberto': 1, nestor: 1 }, flags: ['sindicato_respeto'], cartera: { sindicato: 'Reunión aceptada para el lunes' },
          envia: ['nestor', 'Néstor, recibimos su correo. La empresa los recibirá el lunes a las 8 con Don Alberto. Es su derecho organizarse y queremos escucharlos.'],
          out: 'Don Alberto se queda mucho rato callado. «Mi papá fue dirigente en la mina de Morococha. Lo había olvidado.» Te pide que lo acompañes el lunes.',
          pro: { ok: 'Respetas la libertad sindical y abres el diálogo desde el primer día.', risk: 'Mariela teme el costo del pliego.', info: 'Prepara para el lunes: datos de horas, del nuevo pago y del presupuesto aprobado.' },
          kusi: ['celebra', '¡Diálogo desde el día uno!'] } },
      { id: 'b', label: 'Apoyar la idea de Mariela: conversar con los organizadores antes del lunes para entender qué quieren y, si se puede, que lo piensen mejor.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -2 }, rel: { nestor: -1 }, flags: ['sindicato_presion'], cartera: { sindicato: 'Conversaciones previas' },
          out: 'Mariela llama a Néstor a su oficina. Él sale a los diez minutos, sin hablar. En la tarde, el grupo de conductores tiene un mensaje: «Ya empezó la presión».',
          pro: { ok: 'Buscas información.', risk: 'Una «conversación» de la gerencia antes del registro se lee como presión para desistir.' },
          kusi: ['indignado', '¡Eso suena a presión!'] } },
    ],
    rules: [[BP, 'La libertad sindical es un derecho: la empresa no debe impedirla, condicionarla ni presionar a sus organizadores.']],
    mirada: {
      ve: 'Para un fundador, un sindicato puede sentirse como una ofensa personal. Para los trabajadores, es la forma de que lo logrado en estas dos semanas no dependa de quién esté de jefa. RR.HH. ayuda al dueño a ver que dialogar con una organización es más fácil que con 90 miedos sueltos.',
      visual: { tipo: 'balanza', a: { t: 'Desanimar el sindicato', items: ['Control a corto plazo', 'Desconfianza', 'Riesgo legal'] }, b: { t: 'Recibirlo y dialogar', items: ['Un interlocutor', 'Acuerdos que duran', 'Confianza'] } },
    },
  },
  {
    id: 'f3', t: '11:30', ch: 'documento', who: null, titulo: 'El balance de dos semanas', banner: 'assets/esc/logro.webp', lugar: 'Tu escritorio', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Mariela quiere el balance para su informe mensual. ${F.has('error_oculto') ? 'Sabes que hay algo que todavía no has contado: el Excel de horas recortadas sigue en el expediente de SUNAFIL.' : 'Tienes los datos ordenados.'}</p><p>Una página. <mark class="clave">Elige las piezas de cada bloque</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del balance.', boton: 'Enviar el balance',
    bloques: [
      { id: 'logros', t: 'Lo logrado', n: 2, ops: [
        { id: 'l1', t: 'Relevo nocturno, registro de horas en toda la flota y comité de SST elegido por los trabajadores.', ok: true },
        { id: 'l2', t: 'Política de adelantos, descanso para tripulación en Lima y derecho del taller a frenar buses.', ok: true, por: 'Logros que la gente siente.' },
        { id: 'l3', t: 'Ninguna multa hasta hoy.', ok: false, por: 'Todavía no hay resolución: no es un logro, es una espera.' },
      ] },
      { id: 'pend', t: 'Lo pendiente', n: 2, ops: [
        { id: 'p1', t: 'Cumplir la medida de requerimiento dentro del plazo y regularizar los contratos vencidos.', ok: true },
        { id: 'p2', t: 'Reglamento Interno en revisión legal y consulta; contratación de conductores en curso.', ok: true },
        { id: 'p3', t: 'Nada importante: lo urgente está resuelto.', ok: false, por: 'Falso, y el directorio lo sabe.' },
      ] },
      { id: 'apr', t: 'Lo aprendido', n: 1, ops: [
        { id: 'a1', t: 'Los riesgos más graves estaban a la vista: hacía falta registrarlos y escuchar a quien los vivía.', ok: true },
        { id: 'a2', t: 'Los conductores exageraban un poco.', ok: false, por: 'Las 14 horas estaban en las hojas de ruta.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['balance_honesto'], cartera: { balance: q === 'riesgosa' ? 'Balance optimista' : 'Balance de una página' },
        out: q === 'buena' ? 'Mariela responde: «Es la primera vez que un informe me dice lo que falta sin que yo tenga que preguntar». Lo reenvía al directorio sin cambiar una coma.' : 'El balance sale, aunque suena más bonito de lo que es.',
        pro: { ok: 'Logros, pendientes y aprendizaje: así se sostiene la confianza mes a mes.', info: 'Guarda este balance: en 90 días lo compararás.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Dos semanas en una página!' : 'Algo suena demasiado bonito.'],
      };
    },
    mirada: {
      ve: 'Un balance honesto al final de las primeras semanas marca el tono de todos los que vienen. Si hoy maquillas, cada informe siguiente tendrá que sostener esa versión. Si hoy cuentas lo pendiente, el directorio aprenderá a confiar en tus números.',
      visual: { tipo: 'linea', titulo: 'Dos semanas en Mantaro', hitos: [['Lunes 1', 'Archivo en cajas'], ['Jueves 1', 'Accidente del bus 22'], ['Viernes 1', 'Inspección de SUNAFIL'], ['Miércoles 2', 'Plan aprobado'], ['Jueves 2', 'Primera elección'], ['Lunes 3', 'El sindicato']] },
    },
  },
  {
    id: 'f4', t: '14:30', ch: 'documento', who: null, titulo: 'El orden de la semana 3', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Es la reunión de los viernes. ${F.has('patty_renuncia') ? 'Esta vez la haces sola, con la lista de pendientes que te dejó Patty.' : F.has('patty_sola') ? 'Patty volvió hoy del descanso médico. Se ve mejor.' : 'Patty trae su cuaderno y un lapicero de cada color.'}</p><p>El lunes llegan muchas cosas a la vez. <mark class="clave">Ordena la semana 3 por riesgo</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las prioridades de la semana 3. Usa las flechas.', boton: 'Guardar la semana',
    items: [
      { id: 'relevo', t: 'Sostener el relevo nocturno y revisar el registro de horas del fin de semana', por: 'Lo que protege vidas, primero.' },
      { id: 'sindicato', t: 'Reunión con el sindicato, con datos de horas, pago y presupuesto', por: 'El diálogo empieza con información.' },
      { id: 'sunafil', t: 'Evidencia del cumplimiento de la medida de requerimiento', por: 'Lo que exige la autoridad.' },
      { id: 'comite', t: 'Instalar el comité de SST con sus representantes', por: 'Que la elección se convierta en trabajo.' },
      { id: 'rit', t: 'Recoger las observaciones del estudio laboral al reglamento', por: 'Importante, pero puede esperar unos días.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 3 : 0 }, rel: { patty: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['semana3_ordenada'], cartera: { balance: q === 'riesgosa' ? 'Semana 3 sin orden' : 'Semana 3 ordenada' },
        out: q === 'buena' ? 'La pizarra de la oficina tiene cinco líneas. La primera, subrayada dos veces: «Relevo nocturno». Por primera vez, sabes cómo empieza el lunes.' : 'Ordenas la semana, aunque algo importante quedó más abajo de lo que debía.',
        pro: { ok: 'Vida, diálogo, autoridad, comité, reglamento: un orden que se puede defender.', info: 'Comparte la pizarra con tu equipo: lo que todos ven, todos lo cuidan.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡El lunes ya tiene forma!' : '¿Y lo que protege vidas?'],
      };
    },
    rules: [[BP, 'Prioriza por riesgo: vida, luego obligaciones con la autoridad, luego construcción del área.']],
    mirada: {
      ve: 'Una jefa de RR.HH. no termina nunca la semana con todo resuelto. Lo que sí puede hacer es dejar claro qué va primero. Ordenar por riesgo es la misma regla del primer lunes, ahora con un área que la entiende.',
      visual: { tipo: 'flujo', titulo: 'La semana 3', pasos: ['Relevo', 'Sindicato', 'SUNAFIL', 'Comité', 'Reglamento'] },
    },
  },
  {
    id: 'f5', t: '17:30', ch: 'whatsapp', who: null, titulo: 'El último mensaje de la semana', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['confianza', 'personas'],
    body: () => `<p>Afuera empieza la lluvia de todas las tardes. El patio se llena de buses que vuelven y de choferes que se cuentan la semana.</p><p>Escribes al grupo de jefaturas antes de irte. <mark class="clave">Corto, agradecido y mirando al lunes</mark>.</p>`,
    type: 'compose', enviaA: 'grupo', para: 'Para: Jefaturas Mantaro', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'grac', t: 'El agradecimiento', ops: [
        { id: 'g1', t: 'Don Alberto, Gonzalo: gracias por estas dos semanas. Fueron duras y las enfrentamos juntos.', ok: true, por: 'Reconoce lo vivido sin adornos.' },
        { id: 'g2', t: 'Gracias por dejarme trabajar a mi manera.', ok: false, por: 'Pone el foco en ti.' },
      ] },
      { id: 'lun', t: 'El lunes', ops: [
        { id: 'l1', t: 'El lunes a las 8 nos reunimos con el sindicato. Llevaré los datos de horas, pago y presupuesto.', ok: true, por: 'Prepara a la gerencia con hechos.' },
        { id: 'l2', t: 'El lunes hay que ver qué quieren los del sindicato.', ok: null, por: 'Correcto, pero sin preparación.' },
      ] },
      { id: 'cierre', t: 'El cierre', ops: [
        { id: 'c1', t: 'Que descansen. El relevo nocturno sale igual esta noche.', ok: true, por: 'Recuerda lo que no se negocia.' },
        { id: 'c2', t: '¡Buen fin de semana! 🚌', ok: null, por: 'Amable, sin más.' },
      ] },
    ],
    res: sel => {
      const mal = sel.grac === 'g2', buenas = ['g1', 'l1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -1 : 1 }, rel: { 'don-alberto': q === 'buena' ? 1 : 0, gonzalo: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Don Alberto responde con una foto: el retrato del primer bus de 1996, y debajo: «Ahora sí tiene quien lo cuide». Gonzalo pone un pulgar. Es la primera vez.' : mal ? 'Don Alberto responde «gracias a usted». Gonzalo no responde.' : 'Llegan dos pulgares.',
        pro: { ok: 'Cerrar la semana reconociendo, preparando y recordando lo esencial.', risk: 'Un mensaje centrado en ti resta en un equipo que recién se forma.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡El primer bus, en buenas manos!' : 'Podía decir algo más.'],
      };
    },
    mirada: {
      ve: 'El último mensaje de una semana difícil enseña cómo se trabaja aquí: se agradece, se prepara lo que viene y se recuerda lo que no se negocia. Esas tres cosas, repetidas cada viernes, son una cultura.',
      visual: { tipo: 'mensaje', titulo: 'Reconocer, preparar, cuidar', txt: 'Gracias por estas dos semanas. El lunes a las 8 nos reunimos con el sindicato; llevaré los datos. Que descansen: el relevo nocturno sale igual esta noche.' },
    },
  },
  {
    id: 'f6', t: '19:00', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Ferrocarril', show: ['personas', 'etica'],
    body: (n, F) => `<p>Esperas la combi a El Tambo. El bus de las 22:00 a Lima calienta motores con dos conductores en la cabina. ${F.has('sindicato_respeto') ? 'En tu celular está la respuesta de Néstor: «El lunes a las 8 nos vemos».' : 'En tu celular, el grupo de conductores sigue molesto.'} Y un correo nuevo: el sindicato pide reunión el lunes a las 8.</p><p>Hace dos semanas no conocías a nadie aquí. Hoy sabes el nombre de la bebita de Freddy. <mark class="clave">¿Te ves en este puesto?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Es duro, pero aquí lo que haces se nota en la carretera, y quieres ver qué pasa el lunes.',
        res: { q: null, fx: { personas: 2 }, flags: ['me_veo'],
          out: 'Subes a la combi con una sonrisa cansada. El lunes empieza la semana 3, y ya sabes con qué abrirla.',
          pro: { ok: 'Una jefa de RR.HH. que se ve en el puesto aguanta mejor los días difíciles.', info: 'Lo que viene es diálogo colectivo: una habilidad nueva para ti.' },
          kusi: ['celebra', '¡Te ves! ¡Qué bacán! El lunes, el sindicato.'] } },
      { id: 'b', label: 'Todavía no lo sé. Me gusta lo que se logró, pero me pesa estar siempre en medio de una familia.',
        res: { q: null, fx: { personas: 1 }, flags: ['dudo'],
          out: 'Subes a la combi pensando en Don Alberto, en sus hijos y en ti. La duda también es una respuesta honesta.',
          pro: { ok: 'Reconocer lo que pesa es parte de elegir bien tu camino.', info: 'Muchas personas descubren en la semana 3 si un puesto es para ellas.' },
          kusi: ['pensando', 'Dudar está bien. La semana 3 te dirá más.'] } },
      { id: 'c', label: 'Me veo, pero no así de sola: necesito un equipo más grande y límites más claros con la familia.',
        res: { q: null, fx: { personas: 2, calidad: 1 }, flags: ['me_veo'],
          out: 'Anotas en el celular: «Semana 3: pedir una analista más y acordar con Don Alberto cómo entra la familia a RR.HH.». Ya es un plan.',
          pro: { ok: 'Saber qué necesitas para quedarte es una forma de liderar tu propia carrera.', info: 'Pedir recursos con datos es parte del puesto.' },
          kusi: ['animo', '¡Te ves, con condiciones! Así se crece.'] } },
    ],
    mirada: {
      ve: 'Ser jefa de RR.HH. en una empresa familiar es estar todos los días entre el dueño, sus hijos y la gente que maneja los buses. No es para todos. Pero cuando funciona, se nota en algo tan concreto como un bus nocturno que sale con dos conductores. El lunes, la historia sigue con un sindicato que pide sentarse a la mesa.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pesa', items: ['Estar en medio de una familia', 'Crisis sin aviso', 'Decisiones que nadie quiere tomar'] }, b: { t: 'Lo que vale', items: ['Vidas en la carretera', 'Un área que antes no existía', 'Gente que vuelve a hablar'] } },
    },
  },
];
