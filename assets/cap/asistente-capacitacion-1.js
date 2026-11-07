// Asistente de Capacitación · Capítulo 1 · «La escuela de cajeros» · Semana 1, lunes.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas (texto de la Ley 29783 y su Reglamento, D.S. 005-2012-TR, ya verificados en el proyecto):
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
//   https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
// - Ley 29783, art. 49 g): capacitación en SST al momento de la contratación.
// - Reglamento, art. 27-A (D.S. 001-2021-TR): la capacitación al momento de la contratación es presencial.
// - Reglamento, art. 28: la capacitación se realiza dentro de la jornada y su costo no recae en los trabajadores.
// - Reglamento, art. 98: las capacitaciones fuera de la jornada se remuneran.
// Empresa, personas, locales y cifras son ficticios.

export const CAP = {
  n: 1, titulo: 'La escuela de cajeros', dia: 'Semana 1, lunes', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Boticas del Norte · Sede de capacitación, Av. España, Trujillo',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Trujillo, lunes. El sol ya pega fuerte sobre la avenida España. En el segundo piso del local central, encima de la botica, está el aula de la «escuela de cajeros»: treinta sillas, un proyector y cero enchufes. Mañana empiezan los primeros 40.', boton: 'Subir al aula',
  kusi: 'Ciento veinte personas nuevas, seis grupos y tú en medio. ¡Dale, que la logística también enseña!',
  lead: 'Entendiste qué quiere Karen, armaste el cronograma de grupos, salvaste el aula que se inundó, le pusiste un límite a Mario y avisaste a los primeros 40 qué traer mañana.',
  reflexion: 'Si mañana fallara una sola cosa de la logística, ¿cuál le arruinaría el día a más personas?',
  siguiente: { n: 2, titulo: 'La plataforma', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'cronograma', p: 'Cronograma de los seis grupos', j: 'Karen · Capacitación', d: 0, e: 'Por armar' },
  { id: 'aula', p: 'Aula de la Av. España', j: 'Mantenimiento', d: 0, e: 'Sin revisar' },
  { id: 'plataforma', p: 'AulaNorte (plataforma virtual)', j: 'Fiorella · Sistemas', d: 0, e: '120 usuarios por crear' },
  { id: 'materiales', p: 'Manuales, credenciales de práctica y refrigerios', j: 'Logística', d: 0, e: 'Pedido sin confirmar' },
  { id: 'locales', p: 'Liberación de personal en 18 locales', j: 'Jefes de local', d: 0, e: 'Sin respuesta de 6' },
];

export const FUTURO = {
  grupos_turno: ['Armaste los grupos según los turnos de cada local.', 'Los jefes de local tendrán menos excusas el jueves.'],
  grupos_rigidos: ['Los grupos salieron por orden alfabético, sin mirar turnos.', 'Varios locales se quedarán sin cajero el mismo día. Capítulo 4.'],
  aula_respaldo: ['Tienes un aula de respaldo en el almacén de la Av. Húsares de Junín.', 'Te salvará más de una vez.'],
  aula_hotel: ['Reservaste un salón de hotel con el presupuesto de refrigerios.', 'Karen tendrá que explicar el gasto el viernes.'],
  jornada_respetada: ['Le dijiste a Mario que la capacitación va dentro de la jornada.', 'Mario no lo olvidará: es su primer roce contigo.'],
  domingo_sin_pago: ['Aceptaste que la gente de Mario se capacite en su día libre, sin pago.', 'Alguien lo reclamará en el capítulo 7.'],
  mensaje_claro: ['Los primeros 40 saben dónde, a qué hora y qué traer.', 'Mañana llegarán casi todos puntuales.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  mario: { n: 'Mario Infante', sub: 'Jefe del local de La Esperanza', who: 'local' },
  grupo1: { n: 'Escuela de cajeros · Grupos 1 y 2', sub: '40 participantes', c: '#2F6B3F' },
  tito: { n: 'Sr. Tito Alayo', sub: 'Mantenimiento', c: '#6B4F2F' },
};

export const WSP = [
  { chat: 'area', t: '08:03', de: 'Karen', txt: '¡Bienvenida a la escuela! 💊🧾 Estoy subiendo, compré dos cafés en la esquina.' },
  { chat: 'area', t: '08:20', de: 'Fiorella', txt: 'Hola 👋 Soy de Sistemas. Para crear usuarios en AulaNorte necesito la lista con DNI y correo. Sin eso no hay plataforma.' },
  { chat: 'tito', t: '09:40', de: 'Sr. Tito', txt: 'Señorita, se reventó el tubo del baño del segundo piso. El agua está entrando al aula. Ya cerré la llave 🙏' },
  { chat: 'mario', t: '11:15', de: 'Mario', txt: 'Señorita, soy Mario, de La Esperanza. Tengo seis nuevos en la lista. Llámeme, porfa.' },
  { chat: 'jorge', t: '14:30', de: 'Jorge', txt: 'Colega, mañana llego 7:30. Traigo unas diapositivas nuevitas 😉', },
  { chat: 'grupo1', t: '18:10', de: 'Yanet', txt: 'Gracias, señorita. ¿Puedo llevar a mi bebé si no tengo con quién dejarlo? 🙈', si: 'mensaje_claro' },
  { chat: 'mario', t: '18:30', de: 'Mario', txt: 'Ya, señorita. Pero si me falta gente en caja, la llamo a usted.', si: 'jornada_respetada' },
];

export const CORREOS = [
  { t: '08:10', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Escuela de cajeros · lo que viene', html: '<p>¡Hola! Bienvenida al equipo. Estas dos semanas capacitamos a 120 cajeros nuevos para la campaña de fin de año y los 12 locales que abrimos en Trujillo.</p><p>Son seis grupos de 20. Cada grupo tiene tres días: uno presencial (inducción de seguridad y caja), uno virtual en AulaNorte y uno de caja simulada con examen. Los grupos 1 y 2 empiezan mañana.</p><p>Tu misión: que cada persona llegue, entre, aprenda y salga con su constancia. Lo que no se ve también enseña.</p><p>Karen</p>' },
  { t: '12:40', de: 'Logística · Boticas del Norte', para: 'Capacitación', asunto: 'Pedido de refrigerios y manuales', html: '<p>Para entregar mañana necesitamos la cantidad exacta por día y por sede antes de las 5 p. m. Los manuales impresos salen el miércoles.</p>' },
];

export const QUIZ = [
  { q: 'La inducción de seguridad y salud de una persona recién contratada debe ser…', ops: ['Virtual, para ahorrar tiempo', 'Presencial', 'Opcional', 'Solo un video'], ok: 1, por: 'El art. 27-A del Reglamento de la Ley 29783 dispone que la capacitación al momento de la contratación es presencial.' },
  { q: 'Un jefe de local quiere que su gente se capacite en su día libre, sin pago. ¿Qué dice la norma de SST?', ops: ['Que está bien si firman', 'Que la capacitación va dentro de la jornada y, si es fuera, se remunera', 'Que solo los domingos', 'Nada'], ok: 1, por: 'El Reglamento de la Ley 29783 (arts. 28 y 98) ubica la capacitación dentro de la jornada y remunera la que se hace fuera de ella.' },
  { q: '¿Quién paga la capacitación de SST?', ops: ['El trabajador', 'Se divide', 'El empleador: su costo no recae en los trabajadores', 'EsSalud'], ok: 2, por: 'Reglamento de la Ley 29783, art. 28.' },
  { q: 'Para armar grupos de capacitación en una cadena de locales, lo primero que miras es…', ops: ['El orden alfabético', 'Los turnos y la cobertura de caja de cada local', 'Quién vive más cerca', 'La edad'], ok: 1, por: 'Si un local se queda sin cajeros el mismo día, el jefe no liberará a nadie.' },
  { q: 'Se inunda el aula un día antes de empezar. ¿Qué es lo más útil?', ops: ['Postergar todo una semana', 'Tener un aula de respaldo y avisar a tiempo el cambio', 'Dictar en el pasillo', 'Esperar que seque'], ok: 1, por: 'La logística se planifica con un plan B.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '08:15', ch: 'presencial', who: 'karen', titulo: 'Treinta sillas y cero enchufes', banner: 'assets/foto2/presentacion.webp', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Karen entra con dos cafés y una laptop con stickers de pastillas sonrientes. Pone el proyector sobre una silla porque no hay mesa. «Bienvenida${n ? ', ' + n : ''}. Esta escuela la propuse yo y gerencia me la aprobó a medias: <mark class="clave">si sale bien es de todos, si sale mal es mía</mark>.»</p><p>Tienes unos minutos antes de que la llamen de Operaciones.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Karen.',
    opts: [
      { id: 'antes', label: '¿Cómo se capacitaba a los cajeros antes?', info: '«Nada. El cajero nuevo aprendía mirando al de al lado. El año pasado tuvimos faltantes de caja en casi todos los locales nuevos y dos cajeras recomendando antibióticos. Por eso existe la escuela.»' },
      { id: 'exito', label: '¿Cómo sabremos que funcionó?', info: '«Que aprueben el examen de caja, sí. Pero lo que de verdad quiero ver es menos faltantes y colas más cortas en diciembre. Eso lo veremos en los locales, no en el aula.»' },
      { id: 'quien', label: '¿Quiénes pueden complicarnos?', info: '«Los jefes de local. Necesitan gente en caja para la campaña y cada hora que su cajero está aquí es una hora que no vende. Mario Infante, de La Esperanza, ya me dijo que "hoy no puede".»' },
      { id: 'refri', label: '¿Qué se da de refrigerio?', info: '«Un sándwich y una chicha. Lo pide Logística con la cantidad exacta. Si pides de más, me jalan las orejas a mí.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('exito') ? 2 : 0, tiempo: -1 }, rel: { karen: picks.includes('antes') || picks.includes('exito') ? 1 : 0 },
      out: 'A Karen la llaman. Antes de irse te deja el Excel «ESCUELA_FINAL_v3_ahorasi.xlsx»: 120 nombres, 18 locales y una columna de turnos medio vacía.',
      kusi: ['curioso', 'Ya sabes para qué existe la escuela. Eso te va a guiar.'],
    }),
    mirada: {
      ve: 'Preguntar para qué existe una capacitación cambia todo lo demás: no es llenar un aula, es que haya menos faltantes de caja y nadie recomiende un antibiótico. La logística sirve a ese propósito.',
      visual: { tipo: 'flujo', titulo: 'Los tres días de cada grupo', pasos: ['Día 1: presencial (seguridad y caja)', 'Día 2: virtual en AulaNorte', 'Día 3: caja simulada y examen'] },
    },
  },
  {
    id: 'e2', t: '09:05', ch: 'documento', who: null, titulo: 'El cronograma de grupos', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Abres el Excel. Hay que repartir a 120 personas en seis grupos de 20 sin dejar a ningún local sin caja. <mark class="clave">Cada decisión del cronograma es una conversación con un jefe de local</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del cronograma.', boton: 'Guardar el cronograma',
    bloques: [
      { id: 'armar', t: 'Cómo armas los grupos', n: 2, ops: [
        { id: 'a1', t: 'Mezclar en cada grupo personas de distintos locales, para que ningún local quede sin cajero el mismo día.', ok: true, por: 'Así el jefe libera a uno o dos, no a todos.' },
        { id: 'a2', t: 'Respetar el turno de cada persona: los de tarde, en grupos de mañana; los de mañana, después.', ok: true },
        { id: 'a3', t: 'Ordenar por apellido: es más fácil de leer.', ok: false, por: 'El abecedario no sabe quién atiende la caja a las 9 de la mañana.' },
      ] },
      { id: 'horario', t: 'Horario', n: 2, ops: [
        { id: 'h1', t: 'De 8:30 a 4:30 con una hora de almuerzo: es su jornada de trabajo.', ok: true, por: 'La capacitación es parte de la jornada.' },
        { id: 'h2', t: 'Inducción de seguridad presencial el día 1, antes de tocar una caja.', ok: true, por: 'Al ingresar, la capacitación en SST es presencial.' },
        { id: 'h3', t: 'Día 1 virtual desde casa, para ahorrar aula.', ok: false, por: 'La inducción de SST de ingreso no puede ser virtual.' },
      ] },
      { id: 'detalle', t: 'Detalles que salvan el día', n: 2, ops: [
        { id: 'd1', t: 'Una columna con el celular de cada persona y de su jefe de local.', ok: true },
        { id: 'd2', t: 'Dos cupos libres por grupo para rezagados.', ok: true, por: 'Siempre alguien falta y hay que recuperarlo.' },
        { id: 'd3', t: 'La foto de cada participante en el Excel compartido con los 18 jefes.', ok: false, por: 'No hace falta y expone datos personales a quien no los necesita.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : -2, personas: q === 'buena' ? 2 : 0 },
        flags: [q === 'riesgosa' ? 'grupos_rigidos' : 'grupos_turno'], cartera: { cronograma: q === 'riesgosa' ? 'Cronograma por apellido' : 'Cronograma por turnos y locales' },
        out: q === 'buena' ? 'El cronograma cabe en una hoja: seis grupos, cada uno con gente de varios locales, horarios dentro de la jornada y dos cupos de rescate.' : 'El cronograma está, pero algunos locales quedarán sin caja el mismo día.',
        pro: { ok: 'Un cronograma bien hecho anticipa las excusas de los jefes de local.', risk: 'Si un local se queda sin cajeros, el jefe no manda a nadie.', info: 'Confirma los turnos con cada jefe antes de publicar el cronograma.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Seis grupos que no vacían ningún local!' : 'Revisa los turnos…'],
      };
    },
    rules: [[LEY, 'La capacitación en SST al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).'], [LEY, 'La capacitación se realiza dentro de la jornada de trabajo (Reglamento, art. 28).']],
    mirada: {
      ve: 'Un cronograma de capacitación es, en el fondo, un acuerdo con la operación. Si respeta turnos y cobertura, los jefes de local colaboran; si no, la escuela se queda vacía aunque el aula esté lista.',
      visual: { tipo: 'cambio', titulo: 'Del Excel al cronograma', pares: [['Por apellido', 'Por turnos y locales'], ['Día 1 virtual', 'Inducción de SST presencial'], ['Sin margen', 'Dos cupos de rescate por grupo']] },
    },
  },
  {
    id: 'e3', t: '09:45', ch: 'whatsapp', who: null, titulo: 'El agua entra al aula', banner: 'assets/esc/alarma.webp', show: ['tiempo', 'calidad', 'confianza'],
    body: () => `<p>El señor Tito te manda un audio con ruido de balde: se reventó el tubo del baño del segundo piso y hay un charco que avanza hacia el proyector. Mañana a las 8:30 llegan 40 personas.</p><p>Tienes tres salidas y el presupuesto de Karen es corto. <mark class="clave">Decide antes de que Logística cierre el pedido</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedir prestado el salón del almacén de la Av. Húsares de Junín, que tiene sillas y enchufes, y avisar a Tito que el aula se repara para el jueves.',
        res: { q: 'buena', fx: { tiempo: 2, calidad: 3, confianza: 2 }, flags: ['aula_respaldo'], cartera: { aula: 'Grupos 1 y 2 en el almacén de Húsares de Junín' },
          envia: [['tito', 'Gracias, señor Tito, por cerrar la llave tan rápido. Mañana usamos el almacén de Húsares de Junín. ¿Cree que el aula estará lista para el jueves?']],
          out: 'El jefe del almacén acepta si dejas todo limpio. Tiene ventiladores, buena luz y está a dos cuadras del paradero de la B.',
          pro: { ok: 'Resuelves con lo que la empresa ya tiene, sin gasto.', info: 'Anota este salón como aula de respaldo para todas las semanas.' },
          kusi: ['feliz', '¡Plan B con enchufes!'] } },
      { id: 'b', label: 'Reservar un salón en un hotel de la Plaza de Armas: se ve profesional y la gente nueva se lleva una buena impresión.',
        res: { q: 'aceptable', fx: { calidad: 2, tiempo: 1, confianza: -2 }, flags: ['aula_hotel'], cartera: { aula: 'Salón de hotel reservado' },
          out: 'El salón es bonito, con aire acondicionado. Cuesta casi lo mismo que los refrigerios de una semana.',
          pro: { ok: 'Tienes aula mañana.', risk: 'Usaste un presupuesto que no era para eso sin consultarlo.' },
          kusi: ['pensando', '¿Y quién paga los sándwiches?'] } },
      { id: 'c', label: 'Hacer el día 1 virtual y pasar la parte presencial para la otra semana.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, calidad: -2 }, cartera: { aula: 'Día 1 pasado a virtual' },
          out: 'Karen lo lee y te llama de inmediato: «La inducción de seguridad de ingreso no puede ser virtual. Busca un aula».',
          pro: { ok: 'Ahorras el problema del aula.', risk: 'La capacitación de SST al momento de la contratación debe ser presencial.' },
          kusi: ['preocupado', 'Eso no se puede pasar a virtual.'] } },
    ],
    rules: [[LEY, 'La capacitación al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).'], [BP, 'Ten siempre un aula de respaldo identificada.']],
    mirada: {
      ve: 'En capacitación, la logística se rompe por lo más simple: un tubo, un enchufe, una llave. Quien tiene un plan B y conoce los espacios de la empresa resuelve sin gastar y sin incumplir.',
      visual: { tipo: 'balanza', a: { t: 'Salón de hotel', items: ['Se ve bien', 'Gasta lo de los refrigerios'] }, b: { t: 'Almacén de la empresa', items: ['Sin costo', 'Enchufes y ventiladores', 'Respaldo para otras semanas'] } },
    },
  },
  {
    id: 'e4', t: '11:20', ch: 'llamada', who: 'local', titulo: '«Hoy no puedo, señorita»', banner: 'assets/foto/frente-a-frente.webp', show: ['cumplimiento', 'etica', 'confianza'],
    body: () => `<p>Mario Infante contesta con el ruido de la caja registradora de fondo y una cola que se oye impaciente.</p><p>«Señorita, tengo seis nuevos en su lista y estamos en campaña. Hagamos así: <mark class="clave">que vengan el domingo, que es su día libre</mark>, y yo no pierdo gente en la semana. Total, es para ellos, ¿no? Aprenden gratis.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que la capacitación es parte de la jornada, y ofrecerle mandar a sus seis en tres grupos distintos, de dos en dos.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: -1 }, rel: { local: 0 }, flags: ['jornada_respetada'],
          out: 'Mario resopla: «¿De dos en dos? Ya, pues». No queda contento, pero tampoco se queda sin caja. Anotas sus seis nombres en los grupos 3, 4 y 6.',
          pro: { ok: 'Cumples la norma y le das una salida a su urgencia.', risk: 'Mario te verá como una traba más.', info: 'Confírmale por escrito los nombres y fechas.' },
          kusi: ['animo', 'La ley y una salida práctica. ¡Así!'] } },
      { id: 'b', label: 'Aceptar: es un local en campaña y los seis igual ganan aprendiendo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3, personas: -2 }, rel: { local: 1 }, flags: ['domingo_sin_pago'],
          out: 'Mario se despide feliz. Tú te quedas con seis personas que trabajarán un domingo sin que nadie se los pague.',
          pro: { ok: 'Mario queda contento.', risk: 'La capacitación fuera de la jornada se remunera. Un domingo sin pago es un reclamo esperando a salir.' },
          kusi: ['preocupado', '¿Gratis para quién?'] } },
      { id: 'c', label: 'Decirle que lo consultarás con Karen y llamarlo mañana.',
        res: { q: 'aceptable', fx: { tiempo: -1, confianza: -1 },
          out: 'Mario dice «ya» y cuelga. Karen está en reuniones todo el día. El tema queda flotando.',
          pro: { ok: 'No decides algo que no te toca sola.', risk: 'Mario sigue creyendo que el domingo es una opción.' },
          kusi: ['pensando', 'Esto tú ya lo podías responder.'] } },
    ],
    rules: [[LEY, 'La capacitación se realiza dentro de la jornada; la que se hace fuera de ella se remunera (Reglamento de la Ley 29783, arts. 28 y 98).']],
    mirada: {
      ve: 'Mario no es un villano: tiene una cola en la caja y una meta de diciembre. Pero «aprenden gratis» no existe: el tiempo que un trabajador pasa capacitándose por orden de la empresa es trabajo. Tu tarea es decirlo y ofrecer una salida que no vacíe su local.',
      normas: [{ ley: 'Reglamento de la Ley 29783 (D.S. 005-2012-TR), arts. 28 y 98', dice: 'La capacitación se realiza dentro de la jornada de trabajo; las capacitaciones fuera de la jornada se remuneran.', practica: 'Un domingo de capacitación sin pago no es un favor al trabajador: es un incumplimiento.' }],
      visual: { tipo: 'balanza', a: { t: 'Domingo sin pago', items: ['Mario no pierde gente', 'Seis personas trabajan gratis'] }, b: { t: 'De dos en dos, en la semana', items: ['Dentro de la jornada', 'El local no se vacía', 'Nadie reclama después'] } },
    },
  },
  {
    id: 'e5', t: '15:30', ch: 'documento', who: null, titulo: 'Lo que entra al pedido', banner: 'assets/foto/mesa-papeles.webp', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>Logística cierra a las cinco. Tu escritorio provisional es una mesa plegable con una bolsa de humitas que trajo Karen. Solo te da tiempo de <mark class="clave">resolver tres cosas</mark> antes del cierre.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que dejas resueltas hoy.', boton: 'Resolver estas', resumen: 'Resolviste',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'refri', cells: ['Pedido exacto de refrigerios por día y sede', 'Logística cierra a las 5'] },
      { id: 'lista', cells: ['Mandar a Fiorella la lista de los 40 con DNI y correo', 'Sin eso no hay usuarios en AulaNorte'] },
      { id: 'aviso', cells: ['Avisar a los 40 del cambio de sede', 'Mañana empiezan a las 8:30'] },
      { id: 'logo', cells: ['Diseñar un logo para la escuela', 'A Karen le haría ilusión'] },
      { id: 'mandil', cells: ['Contar mandiles de práctica', 'Llegan el miércoles'] },
    ],
    score: { refri: 3, lista: 3, aviso: 3, logo: -2, mandil: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 3 : -1 },
        cartera: { materiales: picks.includes('refri') ? 'Refrigerios pedidos: 40 por día en Húsares' : 'Pedido de refrigerios sin enviar', plataforma: picks.includes('lista') ? 'Lista de grupos 1 y 2 enviada a Sistemas' : 'Sistemas sigue sin lista' },
        out: q === 'buena' ? 'A las 4:55 Logística confirma 40 sándwiches y 40 chichas para Húsares. Fiorella responde: «Recibido, esta noche creo los usuarios».' : 'Algo con hora de cierre se quedó sin hacer. Mañana lo vas a sentir.',
        pro: { ok: 'Lo que tiene hora de cierre va primero.', risk: 'Un logo no da de comer a 40 personas a las 11 de la mañana.', info: 'Pregúntale a Fiorella qué datos suelen venir mal.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Sándwiches, usuarios y aviso!' : '¿Qué tenía hora de cierre?'],
      };
    },
    mirada: {
      ve: 'La logística de una capacitación tiene relojes ajenos: Logística cierra a las cinco, Sistemas crea usuarios de noche. Ordenar por hora de cierre, y no por lo que más gusta, es la mitad del oficio.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Urgencia', cuadrantes: ['Ya', 'Hoy', 'Después', 'No ahora'], items: [['Refrigerios', .3, .95], ['Lista a Sistemas', .2, .9], ['Aviso de sede', .25, .85], ['Mandiles', .3, .3], ['Logo', .7, .1]] },
    },
  },
  {
    id: 'e6', t: '17:40', ch: 'whatsapp', who: null, titulo: 'El mensaje a los primeros 40', banner: 'assets/foto2/tablet-equipo.webp', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Abres el grupo «Escuela de cajeros · Grupos 1 y 2». Cuarenta personas nuevas, muchas en su primer trabajo con planilla, esperan saber qué pasa mañana. <mark class="clave">Un mensaje mal escrito son cuarenta llamadas esta noche</mark>.</p>`,
    type: 'compose', enviaA: 'grupo1', para: 'Para: Escuela de cajeros · Grupos 1 y 2', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'donde', t: 'Dónde y cuándo', ops: [
        { id: 'd1', t: 'Mañana martes, 8:30 a. m., en el almacén de Av. Húsares de Junín 450 (a dos cuadras del paradero de la B). Cambiamos de sede por una reparación.', ok: true, por: 'Hora, dirección y una referencia de transporte.' },
        { id: 'd2', t: 'Mañana empezamos temprano, la dirección se las paso luego 😊', ok: false, por: '«Luego» son cuarenta mensajes privados.' },
      ] },
      { id: 'traer', t: 'Qué traer', ops: [
        { id: 't1', t: 'Traigan DNI o carné de extranjería, un lapicero y su celular con carga: el miércoles entramos a la plataforma.', ok: true },
        { id: 't2', t: 'Vengan con camisa blanca y zapatos negros, sin excepción.', ok: null, por: 'Nadie lo pidió y algunos no tendrán.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Es su jornada de trabajo: el día se paga normal e incluye refrigerio. Dudas, aquí mismo o al 949 xxx xxx.', ok: true, por: 'Les quita la duda que más pesa.' },
        { id: 'c2', t: 'La asistencia es obligatoria: quien falte queda fuera de la escuela.', ok: false, por: 'Amenazar el primer día no ayuda, y no es cierto: hay cupos de rescate.' },
      ] },
    ],
    res: sel => {
      const mal = sel.donde === 'd2' || sel.cierre === 'c2', buenas = ['d1', 't1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -3 : 1, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['mensaje_claro'] : [], cartera: { locales: q === 'buena' ? 'Grupos 1 y 2 avisados' : 'Aviso con dudas' },
        out: q === 'buena' ? 'En diez minutos llueven pulgares. Solo hay tres preguntas, y una es de Yanet, que no tiene con quién dejar a su bebé.' : mal ? 'El grupo se llena de preguntas nerviosas: «¿Y si falto por mi hijo enfermo me botan?».' : 'El mensaje sale. Algunos preguntan si tienen que comprar camisa blanca.',
        pro: { ok: 'Dónde, cuándo, qué traer y que se paga: las cuatro dudas de siempre.', risk: 'Las amenazas el primer día generan miedo, no puntualidad.', info: 'Fija el mensaje en el grupo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Claro y con cariño. ¡Qué bacán!' : 'Algo de eso va a generar dudas.'],
      };
    },
    rules: [[BP, 'En un aviso a participantes: hora, dirección con referencia, qué traer y quién responde dudas.']],
    mirada: {
      ve: 'Para alguien en su primer empleo formal, la pregunta «¿ese día me pagan?» pesa tanto como la dirección. Un aviso que responde lo que nadie se atreve a preguntar ahorra llamadas y baja la ansiedad.',
      visual: { tipo: 'mensaje', titulo: 'Lo que debe decir el aviso', txt: 'Martes 8:30 a. m., almacén de Av. Húsares de Junín 450, a dos cuadras del paradero de la B. Traigan DNI o carné de extranjería, lapicero y celular con carga. Es su jornada: se paga normal e incluye refrigerio.' },
    },
  },
];
