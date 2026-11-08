// Asistente de RR.HH. · Capítulo 2 · «Los exámenes médicos» · Semana 1, martes.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas (texto de «Normas legales actualizadas», Ley 29783 y su Reglamento, D.S. 005-2012-TR):
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - Ley 29783, art. 49 d) (modificado por Ley 30222): los costos de los exámenes médicos los asume el empleador.
// - Reglamento D.S. 005-2012-TR, art. 101: en ningún caso el costo del examen médico lo asume el trabajador.
// - Ley 29783, art. 71 b): los resultados son confidenciales y no pueden usarse para discriminar.
// - Reglamento, art. 102 (mod. D.S. 001-2021-TR): el médico entrega los resultados al trabajador e informa al
//   empleador solo las condiciones generales de salud colectiva.
// - Ley 29733 (datos de salud como datos sensibles), ya citada en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'Los exámenes médicos', dia: 'Semana 1, martes', foto: 'assets/3d/scenes/hospital.webp',
  lugar: 'Clínica San Miguel · Av. Grau, Piura',
  inicio: '07:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Piura, 7:00 de la mañana. El sol ya pica y el mototaxi te deja en la puerta de la Clínica San Miguel. Hoy se hacen los primeros 10 exámenes de ingreso de la tienda 13.', boton: 'Entrar a la clínica',
  kusi: 'Un examen médico no es un trámite: es la primera vez que la empresa cuida a alguien. ¡Dale!',
  lead: 'Ordenaste la agenda de 45 exámenes con 10 cupos al día, resolviste lo de Karina, cuidaste los resultados médicos de miradas ajenas y defendiste un ajuste para un maestro panadero.',
  reflexion: '¿Qué información de salud de otra persona viste hoy y a quién no se la deberías contar?',
  siguiente: { n: 3, titulo: 'Los contratos', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Faltan 8 días' },
  { id: 'examenes', p: 'Exámenes médicos de ingreso', j: 'Clínica San Miguel', d: 0, e: 'Primer grupo hoy' },
  { id: 'contratos', p: 'Contratos', j: 'Betty · Legal', d: 0, e: 'Firma mañana' },
  { id: 'uniformes', p: 'Uniformes y credenciales', j: 'Logística', d: 0, e: 'Tallas sin pedir' },
  { id: 'induccion', p: 'Inducción', j: 'Betty · RR.HH.', d: 0, e: 'Este viernes' },
];

export const FUTURO = {
  agenda_ordenada: ['Tu agenda de exámenes tiene fechas, recordatorios y lista de espera.', 'Los 45 terminarán antes de la apertura.'],
  agenda_suelta: ['Tu agenda de exámenes depende de la suerte.', 'Llegarás a la apertura con exámenes pendientes.'],
  karina_cuidada: ['Karina no perdió su examen por un pan con camote.', 'Te tendrá confianza cuando la necesite. Capítulo 6.'],
  examenes_confidenciales: ['Los diagnósticos se quedaron con la clínica.', 'Nadie en la tienda sabrá lo que no debe saber.'],
  examenes_expuestos: ['Recibiste diagnósticos que no debías tener.', 'Ese archivo te traerá problemas más adelante.'],
  wilmer_sin_diagnosticos: ['Wilmer recibió solo lo que necesita para organizar turnos.', 'Refunfuñó, pero lo volverá a preguntar.'],
  teodoro_ajuste: ['Don Teodoro entra con un ajuste de turno.', 'Su pan será el primero que se venda en la tienda 13.'],
  teodoro_fuera: ['Sacaste a don Teodoro por su presión.', 'Betty lo descubrirá al revisar los contratos.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera nueva', who: 'karina' },
  pamela: { n: 'Pamela Ruesta', sub: 'Coordinadora · Clínica San Miguel', c: '#2B6CB0' },
};

export const WSP = [
  { chat: 'grupo', t: '06:40', de: 'Betty', txt: 'Buenos días 🌞 Hoy primer grupo en la clínica. Cualquier cosa me llamas, estoy en el comité de gerencia hasta las 11.' },
  { chat: 'grupo', t: '06:52', de: 'César', txt: 'Recuerda: el alta va el día de ingreso. Y sin aptitud, Betty no deja entrar a nadie a un turno. Ni a mi mamá 😐' },
  { chat: 'cesar', t: '07:02', de: 'César', txt: 'Ya cargué las 20 fichas que me mandaste. Cero rebotes por ahora. Sigue así.', si: 'cesar_ok' },
  { chat: 'cesar', t: '07:02', de: 'César', txt: 'Tres fichas tienen la fecha de nacimiento al revés. Te las devuelvo en un ratito.', no: 'cesar_ok' },
  { chat: 'karina', t: '07:10', de: 'Karina', txt: 'Señorita, ya estoy llegando. Me vine en combi desde Veintiséis de Octubre 🙈', si: 'llamadas_wsp' },
  { chat: 'wilmer', t: '08:15', de: 'Wilmer', txt: 'Brayan ya postuló. Que lo llamen rápido, oe.', si: 'sobrino_proceso' },
  { chat: 'wilmer', t: '08:15', de: 'Wilmer', txt: 'Mete a Brayan en el grupo de hoy en la clínica, ¿ya?', si: 'sobrino_dentro' },
  { chat: 'pamela', t: '09:05', de: 'Pamela', txt: 'Buenos días. Les voy enviando el consolidado de resultados al mediodía.' },
  { chat: 'betty', t: '12:40', de: 'Betty', txt: 'Salí del comité. ¿Cómo va todo por la clínica? 🙏' },
];

export const CORREOS = [
  { t: '07:30', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Segunda clínica', html: '<p>Hola. Ayer hice la cuenta que tú hiciste: con 10 cupos al día no llegamos. Coticé con un segundo centro médico ocupacional en Sullana, pero quedan a 40 minutos y la gente tendría que pagarse el pasaje.</p><p>Por ahora seguimos con San Miguel. Ordena tú la agenda para que nos alcance.</p><p>Betty</p>' },
  { t: '12:05', de: 'Pamela Ruesta · Clínica San Miguel', para: 'RR.HH. Supermercados Norte', asunto: 'Consolidado grupo 1 · tienda 13', html: '<p>Adjunto el consolidado de los 9 evaluados de hoy. Cualquier consulta, a la orden.</p><p>Lic. Pamela Ruesta · Coordinación de Salud Ocupacional</p>' },
  { t: '17:10', de: 'César Chunga', para: 'Asistente de RR.HH.', asunto: 'Certificados de aptitud', html: '<p>Para el alta solo necesito saber si la persona está apta para el puesto. No me mandes resultados médicos, porfa: no los quiero en mi carpeta.</p><p>César</p>' },
];

export const QUIZ = [
  { q: '¿Quién asume el costo del examen médico ocupacional de ingreso?', ops: ['La persona nueva, y se le devuelve con su primer sueldo', 'El empleador', 'Se reparte a medias', 'EsSalud'], ok: 1, por: 'La Ley 29783 y su reglamento señalan que el costo lo asume el empleador y que en ningún caso lo asume el trabajador.' },
  { q: '¿Qué debe recibir RR.HH. de la clínica después de un examen de ingreso?', ops: ['La historia clínica completa', 'Los resultados de laboratorio', 'El resultado de aptitud para el puesto y, si las hay, las restricciones', 'Nada de nada'], ok: 2, por: 'Los resultados son confidenciales. El médico se los entrega a la persona; a la empresa le sirve saber si está apta y en qué condiciones.' },
  { q: 'Un jefe de tienda te pide la lista de «los que salieron enfermos». ¿Qué haces?', ops: ['Se la mandas: es su equipo', 'Le das solo lo que necesita para organizar el trabajo, sin diagnósticos', 'Le dices que no hay nadie enfermo', 'Le pasas el número de la clínica'], ok: 1, por: 'Los resultados no pueden usarse para discriminar (art. 71 de la Ley 29783). Solo se comparten las restricciones que afectan la tarea.' },
  { q: '«Apto con restricciones» significa…', ops: ['Que la persona no puede trabajar', 'Que puede trabajar con ciertos ajustes en sus tareas o condiciones', 'Que debe repetir el examen', 'Que la empresa decide si lo contrata'], ok: 1, por: 'La persona puede trabajar. La empresa debe ver cómo aplicar las restricciones en su puesto.' },
  { q: 'Con 45 exámenes y 10 cupos al día, lo primero que conviene hacer es…', ops: ['Esperar a que la clínica amplíe sus cupos', 'Armar una agenda por días con una lista de espera para llenar las ausencias', 'Mandar a todos el mismo día', 'Que cada persona saque su propia cita'], ok: 1, por: 'Una agenda con lista de espera evita cupos vacíos cuando alguien falla.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '07:05', ch: 'documento', who: null, titulo: 'La cuenta de los cupos', banner: 'assets/esc/reloj.webp', lugar: 'Sala de espera de la Clínica San Miguel', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Llegaste antes que todos. El aire acondicionado de la sala de espera todavía no prende y huele a alcohol en gel. Abres el Excel de ingresos en el celular: 45 filas, 10 cupos al día, de lunes a viernes.</p><p>${F.has('llamadas_wsp') ? 'Gracias a tus WhatsApp de ayer, el grupo de hoy está completo.' : 'El grupo de hoy tiene huecos: ayer no todos confirmaron.'} Betty te pidió que <mark class="clave">la agenda alcance para los 45</mark>. Antes de que lleguen, ordenas cómo vas a trabajarla.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para que la agenda de exámenes funcione. Usa las flechas.', boton: 'Guardar mi plan',
    items: [
      { id: 'grupos', t: 'Repartir a las 45 personas en grupos de 10, por día, empezando por quienes firman contrato primero', por: 'Sin grupos por fecha, todo es improvisar.' },
      { id: 'lista', t: 'Enviar la lista con nombres, DNI y puesto a la clínica 24 horas antes', por: 'Es la condición de la clínica.' },
      { id: 'aviso', t: 'Avisar a cada persona: hora, dirección, ayuno, DNI y que es gratis', por: 'Las cuatro dudas de siempre, resueltas por adelantado.' },
      { id: 'recuerda', t: 'Mandar un recordatorio la noche anterior', por: 'El recordatorio baja las ausencias.' },
      { id: 'espera', t: 'El mismo día, llenar las ausencias con la lista de espera', por: 'Un cupo vacío es un examen que quizá ya no entra antes de la apertura.' },
      { id: 'aptitud', t: 'Registrar en el Excel solo el resultado de aptitud', por: 'Lo demás es información médica confidencial.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'riesgosa' ? -3 : 1 },
        flags: [q === 'riesgosa' ? 'agenda_suelta' : 'agenda_ordenada'], cartera: { examenes: q === 'riesgosa' ? 'Agenda sin orden claro' : 'Agenda por grupos con lista de espera' },
        out: q === 'buena' ? 'Tu plan cabe en una hoja: cinco días, cinco grupos y una lista de espera de seis personas que viven cerca de la clínica.' : 'Tienes un plan, aunque algunos pasos están en un orden que te hará correr más de la cuenta.',
        pro: { ok: 'Planificar con lista de espera convierte las ausencias en un problema pequeño.', risk: 'Sin recordatorios ni reemplazos, cada falta deja un cupo vacío que no vuelve.', info: 'Pon en la lista de espera a quienes viven cerca: pueden llegar en 15 minutos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cinco días, cinco grupos! Así sí alcanza.' : 'Casi. El orden también ahorra tiempo.'],
      };
    },
    rules: [[BP, 'Con cupos limitados, la lista de espera es tan importante como la agenda.']],
    mirada: {
      ve: 'Coordinar con un proveedor es trabajar dentro de sus límites, no pelear contra ellos. Si la clínica atiende 10 por día, tu trabajo es que ningún cupo se pierda.',
      visual: { tipo: 'linea', titulo: 'Agenda de exámenes de la tienda 13', hitos: [['Martes', 'Grupo 1 · 10 personas'], ['Miércoles', 'Grupo 2 · firman contrato'], ['Jueves', 'Grupo 3'], ['Viernes', 'Sin cupos: es la inducción'], ['Lunes', 'Grupo 4 · Rosa'], ['Martes', 'Grupo 5 y rezagados']] },
    },
  },
  {
    id: 'm2', t: '07:35', ch: 'presencial', who: 'karina', titulo: 'El pan con camote', banner: 'assets/foto2/caminan.webp', lugar: 'Recepción de la clínica', show: ['personas', 'calidad', 'etica'],
    body: () => `<p>Karina llega sudando, con su DNI en la mano y una bolsita de pan. Te saluda bajito: «Señorita, perdón… <mark class="clave">me comí un pan con camote en la combi</mark>. Es que me bajó la presión».</p><p>En recepción te dicen que el análisis de sangre necesita ayuno de ocho horas. La fila avanza.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntar a la clínica si puede hacer hoy todo lo demás y dejar solo el análisis de sangre para mañana temprano.',
        res: { q: 'buena', fx: { personas: 4, calidad: 2, tiempo: -1 }, rel: { karina: 1 }, flags: ['karina_cuidada'], cartera: { examenes: 'Karina: análisis mañana 7:30' },
          envia: [['karina', 'Karina, tranquila. Hoy te hacen todo menos el análisis de sangre. Mañana a las 7:30 vuelves solo para eso, en ayunas. Ya está coordinado con la clínica.']],
          out: 'Recepción acepta: le harán el examen físico, la vista y la audiometría hoy. Karina respira y por fin se sienta.',
          pro: { ok: 'Partir el examen en dos evita que pierda su cupo completo.', info: 'Pregunta siempre qué partes del examen se pueden separar: no todas necesitan ayuno.' },
          kusi: ['feliz', 'Un pan con camote no tumba un ingreso.'] } },
      { id: 'b', label: 'Reprogramarle el examen completo para el jueves y llamar a alguien de la lista de espera para usar su cupo.',
        res: { q: 'aceptable', fx: { personas: 0, tiempo: 2 }, rel: { karina: 0 }, cartera: { examenes: 'Karina: reprogramada al jueves' },
          out: 'Luis Yarlequé llega en 15 minutos en mototaxi y ocupa el cupo. Karina se va con la cabeza baja: el jueves tendrá que pedir permiso otra vez en la pollería donde ayuda a su tía.',
          pro: { ok: 'No se pierde el cupo.', risk: 'Karina pierde otra mañana y se va sintiendo que hizo algo mal.' },
          kusi: ['pensando', 'El cupo se salvó. ¿Y ella?'] } },
      { id: 'c', label: 'Decirle bajito que no comente lo del pan: total, fue poquito.',
        res: { q: 'riesgosa', fx: { etica: -4, calidad: -3 }, rel: { karina: 0 },
          out: 'Karina se pone más nerviosa. El análisis sale alterado y la clínica lo observa: habrá que repetirlo de todos modos, y ahora con una duda en su historia.',
          pro: { ok: 'Nadie se entera en el momento.', risk: 'Un resultado alterado puede afectar la evaluación de la persona y obliga a repetir el examen.' },
          kusi: ['preocupado', 'Esconderlo no la ayuda.'] } },
    ],
    rules: [[BP, 'Antes de reprogramar todo, pregunta qué parte del examen se puede hacer igual.']],
    mirada: {
      ve: 'Las personas nuevas llegan nerviosas y con miedo a «quedar mal». Una asistente de RR.HH. que resuelve sin regañar les enseña desde el primer día que pueden decir la verdad.',
      visual: { tipo: 'flujo', titulo: 'El examen de Karina, partido en dos', pasos: ['Hoy: examen físico', 'Hoy: vista y audiometría', 'Mañana 7:30: análisis en ayunas', 'Certificado de aptitud'], aqui: 0 },
    },
  },
  {
    id: 'm3', t: '12:15', ch: 'documento', who: null, titulo: 'El consolidado de la clínica', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica', 'confianza'],
    body: () => `<p>Llega el correo de Pamela Ruesta con el consolidado de los 9 evaluados. Lo abres en la banca de la sala de espera, con el celular al 20 %.</p><p>Antes de reenviarlo a César y archivarlo, lo revisas: <mark class="clave">hay columnas que no deberían estar ahí</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que la clínica no debería enviarle a RR.HH. o lo que debería corregirse.',
    doc: { t: 'Consolidado de evaluaciones de ingreso · Grupo 1', sub: 'Clínica San Miguel · Para: rrhh@supernorte.pe · CC: jefe de la tienda 13' },
    lines: [
      { id: 'nom', t: 'Nombre, DNI y puesto evaluado de cada persona.' },
      { id: 'apto', t: 'Resultado: Apto / Apto con restricciones / No apto.' },
      { id: 'restr', t: 'Restricción de Teodoro Huamán: «Control de presión mensual. Evitar turnos nocturnos consecutivos».', duda: 'Es necesaria: sin conocer la restricción, la empresa no puede aplicarla en su turno.' },
      { id: 'diag', t: 'Columna «Diagnóstico»: hipertensión arterial, lumbalgia, miopía, anemia leve…', bad: LEY, why: 'Los diagnósticos son confidenciales. El médico se los entrega a la persona; a la empresa solo le informa la salud colectiva.' },
      { id: 'lab', t: 'Columnas con la glucosa, la hemoglobina y el colesterol de cada persona.', bad: LEY, why: 'Son datos de salud: datos sensibles que RR.HH. no necesita para el ingreso.' },
      { id: 'gest', t: 'Columna «Gestante: sí / no».', bad: LEY, why: 'Además de ser información médica confidencial, podría usarse para discriminar en la contratación.' },
      { id: 'cc', t: 'Correo con copia al jefe de la tienda 13.', bad: BP, why: 'El jefe de tienda no necesita el consolidado: solo las restricciones que afectan los turnos, y eso se lo da RR.HH.' },
      { id: 'clave', t: 'Archivo protegido con contraseña, enviada por un canal aparte.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 3 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, etica: missLey ? -3 : 4, confianza: missLey ? -1 : 2 },
      flags: [missLey ? 'examenes_expuestos' : 'examenes_confidenciales'],
      cartera: { examenes: missLey ? 'Consolidado con diagnósticos archivado' : 'Solo aptitud y restricciones' },
      out: missLey ? 'Reenvías el consolidado a César tal como llegó. Él te responde seco: «Esto no lo quiero en mi carpeta». El archivo ya está en tres bandejas.' : 'Llamas a Pamela. Ella se disculpa: «Usamos el formato de otra empresa». Te manda una versión solo con aptitud y restricciones, y borras la anterior de tu bandeja.',
      pro: { ok: 'Pedir solo la aptitud protege a las personas y también a la empresa.', risk: 'Un archivo con diagnósticos en manos de RR.HH. o de un jefe es una puerta abierta a la discriminación.', info: 'Acuerda con la clínica, por escrito, el formato del consolidado para los grupos que faltan.' },
      kusi: missLey ? ['preocupado', 'Ese archivo ya viajó demasiado…'] : ['celebra', '¡Qué bacán! Lo médico se queda con el médico.'],
    }),
    rules: [[LEY, 'Los resultados de los exámenes médicos son confidenciales y no pueden usarse para discriminar (Ley 29783, art. 71).'], [LEY, 'El médico entrega los resultados al trabajador e informa al empleador solo la salud colectiva (Reglamento, art. 102).']],
    mirada: {
      ve: 'RR.HH. no necesita saber qué tiene cada persona: necesita saber si puede hacer el trabajo y en qué condiciones. Cuanta menos información médica circule, menos riesgo hay de que alguien la use mal, aunque sea sin querer.',
      visual: { tipo: 'cambio', titulo: 'Del consolidado que llegó al que debía llegar', pares: [['Diagnóstico de cada persona', 'Apto · Apto con restricciones · No apto'], ['Glucosa, hemoglobina, colesterol', 'Solo las restricciones para el puesto'], ['¿Gestante?', 'Nada que no sea necesario'], ['Copia al jefe de tienda', 'RR.HH. informa lo que afecta los turnos']] },
      normas: [
        { ley: 'Ley 29783, de Seguridad y Salud en el Trabajo, art. 71', dice: 'El empleador informa a cada trabajador sus resultados. Al ser confidenciales, no pueden usarse para discriminar en ninguna circunstancia.', practica: 'Una lista de «enfermos» que circula entre jefes es justo lo que esta norma quiere evitar.' },
        { ley: 'Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 102', dice: 'El médico de la vigilancia de la salud entrega el informe al trabajador. Al empleador le informa solo las condiciones generales de salud colectiva.', practica: 'A RR.HH. le llega la aptitud; el diagnóstico se queda entre la persona y su médico.' },
      ],
    },
  },
  {
    id: 'm4', t: '13:05', ch: 'whatsapp', who: 'wilmer', titulo: 'La lista que pide Wilmer', banner: 'assets/foto2/tension.webp', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Te comes un cebiche de carretilla en la vereda de la clínica cuando vibra el celular. Es Wilmer.</p><p>«Oe, ¿cuántos salieron enfermos? <mark class="clave">Pásame la lista para no meter gente con problemas</mark>. Yo no voy a cargar con nadie que se me caiga a la semana.»${F.has('sobrino_dentro') ? ' Y abajo: «¿Y lo de Brayan?».' : ''}</p>`,
    type: 'compose', enviaA: 'wilmer', para: 'Para: Wilmer Sosa · Jefe de la tienda 13', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'Lo que le cuentas', ops: [
        { id: 'd1', t: 'Wilmer, de los 9 de hoy, 8 salieron aptos y 1 apto con una restricción de turno.', ok: true, por: 'Le das el dato que le sirve, sin diagnósticos.' },
        { id: 'd2', t: 'Wilmer, te paso el consolidado de la clínica para que lo veas tú mismo 📎', ok: false, por: 'Los resultados médicos no se reenvían a los jefes.' },
      ] },
      { id: 'porque', t: 'Por qué no le das más', ops: [
        { id: 'p1', t: 'Los diagnósticos son confidenciales: ni yo los tengo, y no se usan para decidir quién entra.', ok: true, por: 'Le explicas la regla y que vale también para RR.HH.' },
        { id: 'p2', t: 'Betty me dijo que no te pase nada.', ok: null, por: 'Es verdad a medias y lo pone en contra de Betty.' },
      ] },
      { id: 'sigue', t: 'Qué viene', ops: [
        { id: 's1', t: 'La restricción afecta el turno de un panadero. ¿Lo vemos mañana con Betty para armar el horario?', ok: true, por: 'Lo involucras en lo que sí le toca: organizar turnos.' },
        { id: 's2', t: 'Cualquier cosa me avisas.', ok: null, por: 'Cierra la conversación, pero no resuelve nada.' },
      ] },
    ],
    res: sel => {
      const mal = sel.dato === 'd2', buenas = ['d1', 'p1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { etica: mal ? -6 : 3, confianza: q === 'buena' ? 3 : 0, personas: mal ? -3 : 2 }, rel: { wilmer: mal ? 1 : q === 'buena' ? 0 : -1 },
        flags: mal ? ['examenes_expuestos'] : ['wilmer_sin_diagnosticos'],
        out: q === 'buena' ? 'Wilmer manda un audio de un minuto quejándose de «tanto misterio». Al final dice: «Ya, mañana lo vemos con Betty».' : mal ? 'Wilmer responde con un pulgar. Diez minutos después, en el grupo de supervisores de la tienda, alguien pregunta quién es «el de la presión».' : 'Wilmer contesta: «Ya, ya». No sabe qué hacer con la restricción del panadero.',
        pro: { ok: 'Le das al jefe lo que necesita para organizar el trabajo, y nada más.', risk: 'Un diagnóstico reenviado a un jefe deja de estar bajo tu control en segundos.', info: 'Cuando digas que no, ofrece algo que sí puedas dar.' },
        kusi: [q === 'buena' ? 'animo' : mal ? 'indignado' : 'pensando', q === 'buena' ? 'Firme y útil a la vez. ¡Así!' : mal ? '¡Eso no se reenvía!' : 'Le faltó saber qué sigue.'],
      };
    },
    rules: [[LEY, 'Los resultados médicos no pueden usarse para discriminar en la contratación (Ley 29783, art. 71).'], [BP, 'Al jefe se le informa la restricción que afecta la tarea, no la enfermedad.']],
    mirada: {
      ve: 'Wilmer no es mala persona: tiene miedo de que lo culpen si alguien se enferma en la apertura. Tu trabajo es separar su preocupación legítima (organizar turnos) de lo que no le corresponde (saber qué tiene cada uno).',
      visual: { tipo: 'mensaje', titulo: 'Lo que sí puedes decirle a un jefe', txt: 'De 9 evaluados, 8 aptos y 1 apto con restricción de turno. Mañana armamos el horario juntos.' },
    },
  },
  {
    id: 'm5', t: '14:30', ch: 'presencial', who: null, titulo: 'Don Teodoro', banner: 'assets/foto/mentora.webp', lugar: 'Pasillo de la clínica', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Teodoro Huamán tiene 54 años, viene de Ayabaca y lleva treinta haciendo pan. Lo contrataron como maestro panadero: el horno de la tienda 13 prende a las 3 de la mañana. Sale del consultorio con su certificado: <mark class="clave">apto con restricciones</mark>.</p><p>«Señorita, es la presión nomás. Tomo mi pastilla todos los días.» ${F.has('wilmer_sin_diagnosticos') ? 'Wilmer ya sabe que hay una restricción de turno, y te llama para decirte que mejor busquen «a alguien joven».' : 'Wilmer se entera por el grupo de supervisores y te llama: «Busquemos a alguien joven y ya».'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle a Betty y a Wilmer un turno rotativo en la panadería para que don Teodoro no haga madrugadas seguidas, y agendar su control de presión.',
        res: { q: 'buena', fx: { etica: 5, personas: 4, cumplimiento: 3, tiempo: -2 }, rel: { wilmer: -1, betty: 1 }, flags: ['teodoro_ajuste'], cartera: { ingresos: 'Don Teodoro: ingreso con ajuste de turno' },
          out: 'Betty aprueba la idea y pide que la panadería tenga dos maestros que se alternen la madrugada. Wilmer protesta porque le cambia el cuadro de turnos, pero no encuentra un argumento contra un certificado médico.',
          pro: { ok: 'Aplicas la restricción en vez de usarla para sacar a alguien.', risk: 'Te toca rehacer turnos con un jefe que no quería.', info: 'Pide al médico ocupacional que explique la restricción en palabras simples para el jefe de panadería.' },
          kusi: ['celebra', '¡Treinta años de pan no se botan por una pastilla!'] } },
      { id: 'b', label: 'Hacerle caso a Wilmer: todavía no firma contrato, así que se puede buscar a otro panadero sin dar explicaciones.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -4, tiempo: 2 }, rel: { wilmer: 1 }, flags: ['teodoro_fuera'], cartera: { ingresos: 'Panadero: buscando reemplazo' },
          out: 'Don Teodoro se va a su casa sin saber por qué ya no lo llaman. La panadería se queda sin maestro y el reemplazo no aparece en una semana.',
          pro: { ok: 'Wilmer queda tranquilo.', risk: 'Sacar a alguien por un resultado médico, cuando está apto, es usar ese resultado para discriminar.' },
          kusi: ['triste', 'Estaba apto. Apto.'] } },
      { id: 'c', label: 'Dejarlo en el turno de madrugada como estaba: está apto y él mismo dice que no es nada.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: -3, personas: -1 }, rel: { wilmer: 0 },
          out: 'Don Teodoro entra al cuadro de turnos de madrugada todos los días. La restricción queda guardada en un cajón… hasta que algún día alguien la lea.',
          pro: { ok: 'No lo excluyes.', risk: 'Una restricción médica que no se aplica deja a la persona y a la empresa expuestas.' },
          kusi: ['pensando', 'Apto, sí. ¿Y la restricción?'] } },
    ],
    rules: [[LEY, 'Los resultados no pueden usarse para discriminar (Ley 29783, art. 71).'], [BP, 'Una restricción médica se aplica en el puesto: es una instrucción, no un descarte.']],
    mirada: {
      ve: '«Apto con restricciones» es un sí. Usarlo como excusa para sacar a alguien es discriminar, e ignorarlo es exponer su salud. El camino del medio, ajustar el turno, es el más trabajoso y el correcto.',
      visual: { tipo: 'balanza', a: { t: '«Busquemos a alguien joven»', items: ['Turnos sin cambios', 'Wilmer contento'] }, b: { t: 'Ajustar el turno', items: ['Un maestro con treinta años de oficio', 'Restricción aplicada', 'Nadie excluido por su salud'] } },
    },
  },
  {
    id: 'm6', t: '16:20', ch: 'documento', who: null, titulo: 'Los cupos de mañana', banner: 'assets/esc/mesa.webp', lugar: 'Oficina central · tu escritorio', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>Vuelves a la oficina en el colectivo, con el polo pegado a la espalda. Tienes hasta las 17:00 para mandarle a Pamela la lista de mañana: 10 cupos.</p><p>Te toca decidir <mark class="clave">a qué tres frentes les das prioridad</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes que vas a priorizar en la lista de mañana.', boton: 'Enviar la lista a la clínica', resumen: 'Priorizaste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'contrato', cells: ['Las personas que firman contrato mañana', 'Necesitan su aptitud antes de su primer turno'] },
      { id: 'nadie', cells: ['Los que todavía no tienen fecha, incluido Jorge Ramos', 'Jorge sigue con el celular apagado'] },
      { id: 'espera', cells: ['Dos personas de la lista de espera, por si alguien falla', 'Viven a 15 minutos de la clínica'] },
      { id: 'vigil', cells: ['Los 4 agentes de seguridad de la tienda', 'Son de la empresa de vigilancia que contrató la cadena'] },
      { id: 'repite', cells: ['Repetir el examen a don Teodoro para ver si cambia', 'Wilmer lo sugirió'] },
    ],
    score: { contrato: 3, nadie: 2, espera: 2, vigil: -1, repite: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, cumplimiento: picks.includes('repite') ? -3 : 1 },
        flags: picks.includes('contrato') ? [] : ['agenda_suelta'], cartera: { examenes: q === 'buena' ? 'Grupo 2 enviado con lista de espera' : 'Grupo 2 enviado' },
        out: q === 'buena' ? 'Pamela confirma a las 16:52: diez cupos más dos de reserva. Le escribes a Jorge un SMS, por si el WhatsApp no le llega.' : picks.includes('vigil') ? 'Pamela te pregunta: «¿Los vigilantes no son de otra empresa? Su examen lo ve su empleador». Pierdes cuatro cupos.' : 'Mandas la lista. Mañana, si alguien falta, no tendrás con quién reemplazarlo.',
        pro: { ok: 'Primero quien tiene fecha de contrato; luego, reservas para no perder cupos.', risk: 'Repetir un examen para «ver si cambia» un resultado no es tu decisión ni corresponde.', info: 'El personal de una empresa de vigilancia tiene su propio empleador, y su examen médico le corresponde a ese empleador.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Diez cupos y dos de reserva. ¡Qué divino!' : 'Revisa quién es tu gente y quién no.'],
      };
    },
    rules: [[BP, 'Prioriza por la fecha que no se mueve: la firma del contrato y el ingreso.']],
    mirada: {
      ve: 'Priorizar no es atender al que más grita, sino al que tiene la fecha más dura. Y también saber qué no es tuyo: el personal de un contratista tiene su propio empleador.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Urgencia', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Si sobra tiempo', 'No es tuyo'], items: [['Firman mañana', .3, .92], ['Sin fecha', .65, .7], ['Lista de espera', .2, .55], ['Vigilantes', .5, .15], ['Repetir examen', .8, .08]] },
    },
  },
  {
    id: 'm7', t: '18:15', ch: 'correo', who: null, titulo: 'El resumen para Betty', banner: 'assets/foto/revisa.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Betty Seminario', to: 'Asistente de RR.HH.', asunto: 'RE: Segunda clínica' },
    body: () => `<p>¿Cómo cerró el primer grupo? Mañana a las 8 tengo que contarle a gerencia cuántos van. <mark class="clave">Dime lo que debo saber</mark>.</p><p>Betty</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Números del día, lo que corregiste con la clínica y la decisión que necesitas de ella.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { betty: 1 }, responde: 'Betty: grupo 1, 9 de 10 evaluados (Karina completa mañana); 8 aptos y 1 apto con restricción de turno. Le pedí a la clínica que solo nos mande aptitud y restricciones, sin diagnósticos. Necesito que veamos mañana con Wilmer el turno de panadería. Grupo 2 ya está confirmado.',
          out: 'Betty responde a las 18:40: «Perfecto. Lo de los diagnósticos, bien visto: que quede así para los cinco grupos». Apagas la computadora con el café frío al lado del teclado.',
          kusi: ['celebra', 'Números, un riesgo cuidado y un pedido. ¡Bacán!'] } },
      { id: 'b', label: 'Que salió todo bien y que mañana va el grupo 2.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Betty: todo bien con el grupo 1. Mañana va el grupo 2 👍',
          out: 'Betty se queda tranquila, pero mañana Wilmer le hablará de «un panadero enfermo» y ella no sabrá de qué le habla.',
          kusi: ['pensando', '¿Y el turno de panadería?'] } },
      { id: 'c', label: 'Mandarle el consolidado de la clínica adjunto para que ella lo revise.',
        res: { q: 'riesgosa', fx: { confianza: -2, cumplimiento: -3 }, responde: 'Betty: te adjunto el consolidado del grupo 1 para que lo revises.',
          out: 'Betty te llama: «No me mandes diagnósticos por correo, por favor. Dime los números y lo que necesitas».',
          kusi: ['preocupado', 'Otra bandeja con datos médicos…'] } },
    ],
    mirada: { ve: 'Un buen resumen le ahorra a la jefa una sorpresa al día siguiente. Lo que Betty necesita no son los papeles: es saber cuánto avanzas, qué riesgo hay y qué decisión le toca tomar a ella.' },
  },
];
