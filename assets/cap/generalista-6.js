// Generalista de RR.HH. · Capítulo 6 · «Wendy» · Semana 2, lunes.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas:
// - Ley 29783, de Seguridad y Salud en el Trabajo, art. 56: el empleador previene que la exposición a agentes
//   psicosociales cause daño a la salud de los trabajadores.
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
//   https://lpderecho.pe/prevencion-de-riesgos-psicosociales-una-obligacion-laboral-poco-conocida-por-los-empleadores/
//   https://elperuano.pe/noticia/295058-suplemento-legal-juridica-riesgos-psicosociales-son-obligacion-empresarial-inmediata-y-fiscalizable
// - D.Leg. 713: 30 días de vacaciones por año; la fecha se acuerda (ya citado en el capítulo 1).
// - Jornada máxima de 8 horas diarias o 48 semanales (Constitución, art. 25; ya citada en el capítulo 4).

export const CAP = {
  n: 6, titulo: 'Wendy', dia: 'Semana 2, lunes', foto: 'assets/foto2/pasillo.webp',
  lugar: 'Recepción del Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Cusco, lunes de la segunda semana. Falta poco para que arranque la temporada alta. El sábado salió la boda de los Pacheco y el hotel amaneció al 92 %. En recepción suena el teléfono antes de que se encienda la computadora.', boton: 'Empezar la semana',
  kusi: 'Hoy no se trata de un Excel. Se trata de alguien que lleva demasiado tiempo diciendo que sí.',
  lead: 'Ordenaste la fila del día de pago, escuchaste a Wendy, viste en su registro lo que nadie había mirado, negociaste con Verónica su descanso, armaste un plan de cuidado para todo el equipo y le escribiste a Wendy al final del día.',
  reflexion: '¿Cómo te darías cuenta de que alguien de tu equipo está al límite si nunca se queja?',
  siguiente: { n: 7, titulo: 'La certificación', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'pago', p: 'Dudas del día de pago', j: 'Personal', d: 0, e: 'Hoy' },
  { id: 'wendy', p: 'Wendy', j: 'Recepción', d: 0, e: 'Hoy' },
  { id: 'cuidado', p: 'Plan de cuidado del equipo', j: 'Verónica · Gerencia', d: 0, e: 'Antes de la temporada' },
];

export const FUTURO = {
  fila_ordenada: ['Atendiste las dudas del pago en un horario y lugar fijos.', 'El personal sabe dónde encontrarte.'],
  wendy_escuchada: ['Wendy te contó lo que de verdad le pasa.', 'Confía en ti.'],
  registro_wendy: ['Viste en el registro las jornadas de Wendy y las horas que nadie le pagaba.', 'Iván deberá revisarlas.'],
  wendy_descansa: ['Wendy tiene dos días de descanso ahora y sus vacaciones aseguradas.', 'Volverá el jueves.'],
  wendy_bono: ['Le diste un bono a Wendy para que aguante la temporada.', 'El cansancio sigue ahí.'],
  wendy_sola: ['Dejaste que Wendy decidiera sola si descansaba.', 'Decidió no descansar.'],
  plan_cuidado: ['Dejaste un plan de cuidado del equipo: carga, descansos, apoyo y seguimiento.', 'Es tu entregable de la semana.'],
  alertas_atendidas: ['Revisaste a otras personas con señales de agotamiento.', 'Yaneth y Haydée lo notaron.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción, housekeeping y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  milagros: { n: 'Milagros Torres', sub: 'Recepcionista de la temporada', c: '#0E7C86' },
  yaneth: { n: 'Yaneth Huallpa', sub: 'Recepcionista nocturna', c: '#6B5BA8' },
};

export const WSP = [
  { chat: 'contador', t: '06:50', de: 'Iván', txt: 'Pagos enviados al banco esta madrugada. Boletas en su correo. 🙌', si: 'planilla_corregida' },
  { chat: 'chef', t: '07:20', de: 'Chef Rolando', txt: 'Boda salió perfecta. 120 platos y nadie se quemó. Ni yo 😏', si: 'banquete_repartido' },
  { chat: 'chef', t: '07:20', de: 'Chef Rolando', txt: 'Boda salió. Kevin terminó muerto. Hoy no rinde.', si: 'kevin_doble' },
  { chat: 'milagros', t: '09:35', de: 'Milagros', txt: 'Disculpe que le escriba. Wendy está en el baño hace veinte minutos y la escucho llorar. No sé qué hacer 😟' },
  { chat: 'wendy', t: '17:30', de: 'Wendy', txt: 'Ya tengo pasaje: salgo a Sicuani en el bus de las 7. Mi mamá me va a preparar caldo de cordero 💛', si: 'wendy_descansa' },
  { chat: 'yaneth', t: '18:00', de: 'Yaneth', txt: 'Gracias por preguntar cómo estoy. Nadie me había preguntado eso aquí.', si: 'alertas_atendidas' },
];

export const CORREOS = [
  { t: '07:30', de: 'Andes Sostenible · certificadora', para: 'Gerencia Inti Wasi', asunto: 'Visita de auditoría: mañana 9:00', html: '<p>Confirmamos la visita de auditoría para la certificación de turismo sostenible. Revisaremos, entre otros, contratos, registros de seguridad y salud en el trabajo y evidencias de buenas prácticas laborales.</p>' },
  { t: '11:40', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Wendy', html: '<p>Me dijo Milagros lo de Wendy. Me preocupa, pero esta semana no puede faltar: mañana viene la certificadora y el viernes, la agencia francesa. Pasa por mi oficina a las 12.</p><p>V.</p>' },
];

export const QUIZ = [
  { q: '¿Qué dice la Ley 29783 sobre los riesgos psicosociales?', ops: ['Nada', 'Que el empleador debe prevenir que dañen la salud de los trabajadores', 'Que son asunto personal', 'Que solo aplican a mineras'], ok: 1, por: 'La Ley 29783, art. 56, obliga al empleador a prevenir que la exposición a agentes psicosociales cause daño a la salud.' },
  { q: 'Wendy trabaja 11 horas diarias, seis días por semana. ¿Cuántas horas suma?', ops: ['48', '55', '66', '72'], ok: 2, por: 'Son 66 horas: muy por encima del máximo de 48 semanales.' },
  { q: 'Una persona agotada que «nunca dice que no»… ¿qué conviene?', ops: ['Dejarla decidir sola', 'Decidir con ella y cambiar la carga, no solo pedirle que se cuide', 'Darle un bono', 'Esperar a que se queje'], ok: 1, por: 'Quien no sabe decir que no necesita que el sistema cambie, no solo un consejo.' },
  { q: '¿Qué señal suele aparecer antes del agotamiento?', ops: ['Más risas', 'Responder mensajes de trabajo fuera de hora y saltarse el almuerzo', 'Pedir vacaciones', 'Llegar tarde una vez'], ok: 1, por: 'Trabajar fuera de hora y sin pausas es una señal temprana.' },
  { q: '¿Qué debe tener un plan de cuidado del equipo?', ops: ['Un afiche motivacional', 'Carga redistribuida, descansos, apoyo y seguimiento con fecha', 'Un bono para todos', 'Una charla'], ok: 1, por: 'Sin cambios en la carga ni seguimiento, es solo una buena intención.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'w1', t: '07:15', ch: 'presencial', who: null, titulo: 'La fila del día de pago', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo de servicio, frente a tu oficina', show: ['tiempo', 'personas'],
    body: (n, F) => `<p>${F.has('planilla_corregida') ? 'Hoy salió el pago que se reprocesó el viernes.' : 'Hoy es día de boletas.'} Cuando llegas, ya hay cinco personas en el pasillo: Edwin con su boleta doblada, una camarera que no entiende un descuento, Teófilo que viene después de su turno de noche.</p><p>Tienes la mañana llena. <mark class="clave">¿Cómo atiendes la fila?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Atender ahora a Teófilo, que sale de su turno de noche, y poner un horario fijo para las dudas del pago: hoy de 12:00 a 13:00, aquí mismo.',
        res: { q: 'buena', fx: { personas: 3, tiempo: 2 }, flags: ['fila_ordenada'], cartera: { pago: 'Horario fijo de 12:00 a 13:00' },
          out: 'Teófilo se va a dormir con su boleta explicada. Pegas un papel en la puerta: «Dudas de boletas: hoy de 12 a 1». Los demás asienten y vuelven a sus áreas.',
          pro: { ok: 'Priorizas a quien no puede esperar y ordenas al resto sin despacharlos.', info: 'Un horario fijo para dudas de pago evita que te interrumpan todo el día.' },
          kusi: ['feliz', '¡Orden sin portazo!'] } },
      { id: 'b', label: 'Atender a todos según llegan, uno por uno, hasta terminar.',
        res: { q: 'aceptable', fx: { personas: 2, tiempo: -3 }, cartera: { pago: 'Atendidos uno por uno' },
          out: 'Terminas a las 9:20. Todos se van contentos, pero llegas tarde a todo lo demás.',
          pro: { ok: 'Nadie se va sin respuesta.', risk: 'Una fila sin horario se come la mañana entera.' },
          kusi: ['pensando', 'Muy amable… y muy tarde.'] } },
      { id: 'c', label: 'Pedirles que te escriban sus dudas por correo.',
        res: { q: 'riesgosa', fx: { personas: -2, tiempo: 1 }, cartera: { pago: 'Dudas por correo' },
          out: 'Edwin no usa correo. Teófilo se va a dormir sin entender su boleta.',
          pro: { ok: 'Ganas tiempo.', risk: 'No todo el personal usa correo, y una duda de pago sin respuesta se vuelve desconfianza.' },
          kusi: ['triste', '¿Correo? Edwin ni tiene.'] } },
    ],
    mirada: { ve: 'El día de pago llena la oficina de RR.HH. de preguntas que, para quien las hace, son urgentes. Ordenarlas sin despachar a nadie es parte del oficio.' },
  },
  {
    id: 'w2', t: '09:45', ch: 'presencial', who: 'wendy', titulo: 'La puerta del baño', banner: 'assets/foto/mentora.webp', lugar: 'Tu oficina, con la puerta cerrada', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Wendy sale del baño con los ojos hinchados y una sonrisa de recepción. «No es nada, ya pasó.» La llevas a tu oficina y le sirves agua.${F.has('wendy_no') ? ' Sigue sin vacaciones desde hace dos años.' : F.has('wendy_acuerdo') ? ' Sus vacaciones están aprobadas, pero falta para que lleguen.' : ''}</p><p>Tienes tiempo para <mark class="clave">dos preguntas</mark>. Que sean las que la dejen hablar.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'como', label: '¿Cómo estás de verdad, Wendy?', info: '«Cansada. Duermo cinco horas. Cuando cierro los ojos escucho el timbre de recepción.» Se ríe y vuelve a llorar.' },
      { id: 'que', label: '¿Qué pasó hoy, justo antes?', info: '«Un huésped me gritó por una reserva que hizo mal la agencia. Y no sé, me quebré. Antes eso no me pasaba.»' },
      { id: 'carga', label: '¿Qué cosas haces que no te tocan?', info: '«Todo lo que es en inglés o en quechua me lo pasan a mí. Traduzco para cocina, para housekeeping, contesto el WhatsApp de los huéspedes hasta las once de la noche… y estoy entrenando a Milagros.»' },
      { id: 'casa', label: '¿Cómo están las cosas en tu casa?', info: '«Mi mamá está mal en Sicuani y no he podido ir. Le mando plata, pero no es lo mismo.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: 2 }, rel: { wendy: 1 }, flags: ['wendy_escuchada'],
      out: picks.includes('carga') ? 'Ahora sabes algo que no estaba en ningún cuadro: Wendy hace el trabajo de tres personas porque es la única que habla tres idiomas.' : 'Wendy se desahoga. Sabes cómo se siente, aunque todavía no sabes bien qué la está aplastando.',
      kusi: ['pensando', 'Cuando alguien nunca dice que no, todos le pasan todo.'],
    }),
    mirada: {
      ve: 'Las personas que mejor trabajan suelen ser las primeras en quemarse, porque todos les pasan lo difícil. Preguntar qué hacen que no les toca revela la carga invisible.',
      visual: { tipo: 'embudo', titulo: 'Lo que le llega a Wendy en un día', niveles: [['Huéspedes en recepción', 120], ['Traducciones para otras áreas', 25], ['WhatsApp de huéspedes fuera de hora', 18], ['Horas entrenando a Milagros', 3]] },
    },
  },
  {
    id: 'w3', t: '10:40', ch: 'documento', who: null, titulo: 'La semana de Wendy', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'personas', 'calidad'],
    body: (n, F) => `<p>${F.has('cuadro_legal') ? 'Abres el registro de asistencia que empezó el jueves.' : 'No hay registro de asistencia; reconstruyes la semana de Wendy con Haydée, el sistema de reservas y sus mensajes.'}</p><p>Lo pones en una tabla. <mark class="clave">En números, el agotamiento se ve clarito</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no se puede quedar así.',
    doc: { t: 'Semana de Wendy Condori · recepción', sub: 'Reconstruida por RR.HH.' },
    lines: [
      { id: 'horas', t: 'Lunes a sábado: de 7:00 a 18:00. Las horas extra no figuran en la planilla.', bad: LEY, why: 'Son 66 horas semanales: muy por encima del máximo de 48. Y las horas extra que trabajó deben pagarse con sobretasa.' },
      { id: 'noche', t: 'Jueves: cubrió además la recepción de 19:00 a 23:00 porque faltó alguien.', bad: LEY, why: 'Quince horas en un día, sin registro ni autorización.' },
      { id: 'wsp', t: 'Contesta desde su celular el WhatsApp de los huéspedes hasta las 23:00.', bad: BP, why: 'Trabajo fuera de jornada que nadie le pidió formalmente, pero que todos esperan. Es carga invisible.' },
      { id: 'almuerzo', t: 'Almuerza de pie en el counter de recepción, en diez minutos.', bad: BP, why: 'Sin una pausa real, el cansancio se acumula.' },
      { id: 'traduce', t: 'Traduce para cocina y housekeeping cuando hay huéspedes que hablan inglés o quechua.', duda: 'Es valioso, pero hoy no está en su puesto ni se reconoce. Conviene repartirlo o reconocerlo.' },
      { id: 'reserva', t: 'Usa el sistema de reservas Opera, versión 2014.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Concluyes que Wendy «está pasando una mala racha». La tabla se queda en tu escritorio.' : `Marcas ${hitsLey} filas. Le mandas a Iván la lista de horas de Wendy para que las revise antes del próximo cierre.`,
      flags: missLey ? [] : ['registro_wendy'], cartera: { wendy: missLey ? 'Visto como un mal día' : 'Jornadas de 66 horas y trabajo fuera de hora' },
      pro: { ok: 'Los números muestran que el problema no es Wendy: es cómo está armado su trabajo.', risk: 'Si solo ves la emoción, la solución será un consejo. Si ves las horas, la solución será un cambio.', info: 'Revisa a quién más le pasa lo mismo: quien hace el trabajo de los que faltan.' },
      kusi: missLey ? ['preocupado', '¿Mala racha? ¡Son 66 horas!'] : ['sorpresa', '¡Sesenta y seis horas!'],
    }),
    rules: [[LEY, 'Jornada máxima de 8 horas diarias o 48 semanales (Constitución, art. 25).'], [LEY, 'El empleador debe prevenir que la exposición a agentes psicosociales dañe la salud (Ley 29783, art. 56).']],
    mirada: {
      ve: 'El agotamiento no empieza con el llanto: empieza con horas extra que nadie registra, almuerzos de diez minutos y mensajes a las once de la noche. La generalista lo mira con datos para que la conversación con la gerencia no sea sobre «el carácter» de alguien.',
      visual: { tipo: 'rango', titulo: 'Horas semanales de Wendy', min: 0, max: 80, banda: [0, 48], marcas: [['Máximo', 48], ['Wendy', 66]] },
    },
  },
  {
    id: 'w4', t: '12:00', ch: 'presencial', who: 'veronica', titulo: '«Esta semana no puede faltar»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la gerencia', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>Verónica tiene sobre el escritorio la agenda de la certificadora y el programa de la agencia francesa. «Wendy es mi mejor recepcionista. Mañana viene la auditoría y el viernes, los franceses. <mark class="clave">Que aguante esta semana y después descansa</mark>. ¿Qué le ofrezco?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Darle un bono de reconocimiento y pedirle que aguante hasta que pase la apertura.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: 2 }, rel: { veronica: 1, wendy: 0 }, flags: ['wendy_bono'], cartera: { wendy: 'Bono y a seguir' },
          out: 'Verónica firma el bono con alivio. Wendy lo recibe, da las gracias y vuelve al counter. A las seis contesta el primer WhatsApp de un huésped.',
          pro: { ok: 'Reconoces su esfuerzo con algo concreto.', risk: 'El bono paga el cansancio, no lo reduce. Y una recepcionista quebrada en plena auditoría es un riesgo mayor.' },
          kusi: ['preocupado', 'La plata no se duerme.'] } },
      { id: 'b', label: 'Proponerle dos días de descanso ahora, repartir su carga entre Milagros y Sonia, cortar el WhatsApp después de su turno y fijar sus vacaciones apenas pase la apertura.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 3, confianza: 1, tiempo: -2 }, rel: { veronica: 0, wendy: 1 }, flags: ['wendy_descansa'], cartera: { wendy: 'Dos días libres, carga repartida, vacaciones fijadas' },
          out: 'Verónica tamborilea en el escritorio: «¿Y si Milagros no puede sola?». Le muestras el cuadro: con Sonia en la noche, la mañana queda cubierta. «Ya. Pero vuelve el jueves para preparar lo del viernes.» Wendy acepta llorando otra vez, esta vez de alivio.',
          pro: { ok: 'Cambias la carga, no solo le das un respiro.', risk: 'Milagros tendrá dos días difíciles: acompáñala.', info: 'El WhatsApp del hotel debe tener un responsable por turno, no el celular de una persona.' },
          kusi: ['celebra', '¡Dos días para Wendy y para su mamá!'] } },
      { id: 'c', label: 'Preguntarle a Wendy qué prefiere y respetar lo que ella decida.',
        res: { q: 'aceptable', fx: { personas: 1, etica: 1 }, rel: { wendy: 0 }, flags: ['wendy_sola'], cartera: { wendy: 'La decisión queda en Wendy' },
          out: 'Wendy dice lo que siempre dice: «No se preocupe, yo puedo». Verónica respira aliviada. Nada cambia.',
          pro: { ok: 'Respetas su autonomía.', risk: 'Preguntarle a alguien que nunca dice que no es casi lo mismo que no preguntar. La carga es responsabilidad del empleador.' },
          kusi: ['pensando', '«Yo puedo»… ¿hasta cuándo?'] } },
    ],
    rules: [[LEY, 'Ley 29783, art. 56: el empleador previene que la exposición a agentes psicosociales dañe la salud.'], [BP, 'Ante el agotamiento, cambia la carga y fija descansos con fecha; un bono no lo reemplaza.']],
    mirada: {
      ve: 'Verónica no es insensible: tiene una auditoría y un cliente grande en la misma semana. Pero «que aguante y después descansa» es la frase que precede a muchas renuncias. La generalista convierte el cuidado en un plan operativo que la gerencia pueda aceptar.',
      visual: { tipo: 'balanza', a: { t: 'Que aguante esta semana', items: ['Auditoría con Wendy', 'Franceses con Wendy', 'Un bono'] }, b: { t: 'Descanso ahora', items: ['Dos días libres', 'Carga repartida', 'Vacaciones con fecha', 'Wendy de vuelta el jueves'] } },
      normas: [{ ley: 'Ley 29783, art. 56', dice: 'El empleador debe prevenir que la exposición a los agentes físicos, químicos, biológicos, ergonómicos y psicosociales concurrentes en el centro de trabajo genere daños en la salud de los trabajadores.', practica: 'Jornadas de 66 horas y mensajes hasta medianoche son un riesgo psicosocial que el hotel debe gestionar, no un problema personal de Wendy.' }],
    },
  },
  {
    id: 'w5', t: '14:30', ch: 'documento', who: null, titulo: 'El plan de cuidado', banner: 'assets/esc/idea.webp', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Comes un pan con chicharrón en tu escritorio. ${F.has('siete_dias') ? 'En el corcho sigue el cuadro con las camareras trabajando siete días.' : F.has('descanso_rotativo') ? 'En el corcho, el cuadro con descansos rotativos ya tiene una semana.' : ''}</p><p>Wendy no es la única. <mark class="clave">Armas un plan para todo el equipo antes de que empiece la temporada</mark>.</p>`,
    type: 'builder', prompt: 'Elige lo que va en cada parte del plan.', boton: 'Enviar el plan a Verónica',
    bloques: [
      { id: 'carga', t: 'Carga de trabajo', n: 1, ops: [
        { id: 'c1', t: 'Repartir las tareas «de todos» que hoy hace una persona: traducciones, WhatsApp de huéspedes y entrenamiento de los nuevos.', ok: true, por: 'Ataca la carga invisible.' },
        { id: 'c2', t: 'Pedirle a cada uno que se organice mejor.', ok: false, por: 'Pone el problema en la persona.' },
      ] },
      { id: 'descanso', t: 'Descansos', n: 1, ops: [
        { id: 'd1', t: 'Día libre semanal respetado, almuerzo de 45 minutos fuera del puesto y rol de vacaciones del año.', ok: true, por: 'Pausas reales y con fecha.' },
        { id: 'd2', t: 'Descansos «cuando baje el trabajo».', ok: false, por: 'En temporada, el trabajo no baja.' },
      ] },
      { id: 'apoyo', t: 'Apoyo', n: 1, ops: [
        { id: 'a1', t: 'Conversaciones de cinco minutos de RR.HH. con cada área cada semana, y a quién acudir si alguien está mal.', ok: true, por: 'Un canal simple y conocido.' },
        { id: 'a2', t: 'Un afiche sobre el estrés en el comedor.', ok: false, por: 'Informa, pero no cambia nada.' },
      ] },
      { id: 'seguimiento', t: 'Seguimiento', n: 1, ops: [
        { id: 's1', t: 'Revisar cada viernes las horas extra y los días libres trabajados por persona.', ok: true, por: 'Los números avisan antes que el llanto.' },
        { id: 's2', t: 'Esperar a que alguien se queje.', ok: false, por: 'Quien está peor suele ser quien no se queja.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan_cuidado'], cartera: { cuidado: q === 'riesgosa' ? 'Plan de buenas intenciones' : 'Plan de cuidado en una hoja' },
        out: q === 'buena' ? 'El plan cabe en una hoja. Verónica responde: «Lo de los WhatsApp de huéspedes no lo había pensado».' : q === 'aceptable' ? 'El plan ayuda, aunque deja una parte librada a la buena voluntad.' : 'El plan suena bien, pero nadie hará nada distinto el lunes.',
        pro: { ok: 'Un plan de cuidado cambia la carga y mide, no solo aconseja.', risk: 'Sin seguimiento, el plan se olvida en la primera semana de temporada.', info: 'Mide lo que se puede contar: horas, días libres, vacaciones pendientes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un plan con fechas y números!' : '¿Qué va a cambiar el lunes?'],
      };
    },
    rules: [[BP, 'Un plan de cuidado redistribuye carga, protege descansos, ofrece un canal de apoyo y se revisa con datos.']],
    mirada: {
      ve: 'El plan de cuidado del equipo es uno de los entregables de las dos semanas. En un hotel en temporada alta, cuidar al equipo es también cuidar las reseñas.',
      visual: { tipo: 'flujo', titulo: 'Del cansancio al plan', pasos: ['Ver los números', 'Repartir la carga', 'Proteger descansos', 'Dar un canal de apoyo', 'Revisar cada viernes'] },
    },
  },
  {
    id: 'w6', t: '16:30', ch: 'llamada', who: null, titulo: '¿Quién más?', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad'],
    body: () => `<p>Si a Wendy le pasó, puede estar pasándole a otros. Haces tres llamadas cortas mientras afuera cae granizo sobre la calamina.</p><p><mark class="clave">Escucha lo que dicen y lo que no dicen</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Yaneth Huallpa · recepcionista nocturna', 'Contesta antes de entrar a su turno', '«Estoy bien… bueno, mi hijito se enferma y no duermo de día. Pero ya me acostumbré.»'],
      ['Haydée Mamani · gobernanta', 'Contesta en voz baja, en un pasillo', '«Yo estoy bien, hija. Las chicas son las que están cansadas. Rocío se durmió ayer sentada en el carrito de la ropa.»'],
      ['Kevin · ayudante de cocina', 'Contesta con ruido de ollas', '«Bien, bien. La mano ya casi no me duele. El chef dice que soy el más rápido.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Anotar las tres señales y conversarlas esta semana: con Yaneth, un turno fijo que le deje dormir; con Haydée, cuántas habitaciones le toca a cada camarera; con Kevin, cómo está de verdad la mano.',
        res: { q: 'buena', fx: { personas: 4, calidad: 2 }, flags: ['alertas_atendidas'],
          out: 'Programas tres conversaciones cortas para el martes y el miércoles. Nadie te dijo «estoy mal», pero los tres te dieron una pista.',
          pro: { ok: 'Lees entre líneas y conviertes cada pista en una conversación con fecha.', info: '«Ya me acostumbré» suele ser una señal, no una buena noticia.' },
          kusi: ['animo', 'Escuchar lo que no dicen. ¡Eso es oficio!'] } },
      { id: 'b', label: 'Quedarte tranquila: los tres dijeron que están bien.',
        res: { q: 'riesgosa', fx: { personas: -3 },
          out: 'Cierras la libreta. Mañana Rocío volverá a dormirse en el carrito.',
          pro: { ok: 'Respetas lo que dicen.', risk: 'En un hotel en temporada, casi nadie dice «estoy mal» en voz alta.' },
          kusi: ['preocupado', '«Bien» no siempre es bien.'] } },
    ],
    mirada: { ve: 'Las señales de agotamiento suelen venir disfrazadas: «ya me acostumbré», «yo no, las chicas», «el chef dice que soy el más rápido». La generalista aprende a escucharlas.' },
  },
  {
    id: 'w7', t: '18:20', ch: 'whatsapp', who: 'wendy', titulo: 'Para Wendy', banner: 'assets/esc/meta.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('wendy_descansa') ? 'Wendy ya está en el bus a Sicuani.' : 'Wendy sigue en recepción; su turno terminaba a las tres.'} Le escribes antes de irte.</p>`,
    chat: ['Gracias por lo de hoy. Perdón por el show en el baño 🙈'],
    type: 'compose', enviaA: 'wendy', para: 'Para: Wendy Condori · Recepcionista bilingüe', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'valida', t: 'Lo primero', ops: [
        { id: 'v1', t: 'No hay nada que perdonar, Wendy. Lo que te pasó tiene que ver con cómo está armado tu trabajo, no contigo.', ok: true, por: 'Le quitas la culpa.' },
        { id: 'v2', t: 'Tranquila, a todos nos pasa 😊', ok: null, por: 'Amable, pero le resta importancia.' },
      ] },
      { id: 'cambio', t: 'Lo que cambia', ops: [
        { id: 'c1', t: 'Desde mañana, el WhatsApp de huéspedes lo contesta quien esté de turno, no tu celular.', ok: true, por: 'Un cambio concreto.' },
        { id: 'c2', t: 'Trata de no hacer tanto, ¿ya?', ok: false, por: 'Le devuelves la responsabilidad a ella.' },
      ] },
      { id: 'sigue', t: 'Qué sigue', ops: [
        { id: 's1', t: 'Cuando vuelvas, conversamos 15 minutos para ver cómo vas. Y tus vacaciones ya tienen fecha.', ok: true, por: 'Seguimiento con fecha.' },
        { id: 's2', t: 'Cualquier cosa me escribes.', ok: null, por: 'Wendy nunca escribe para pedir ayuda.' },
      ] },
    ],
    res: sel => {
      const mal = sel.cambio === 'c2', buenas = ['v1', 'c1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -2 : 1, confianza: q === 'buena' ? 2 : 0 }, rel: { wendy: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Wendy responde con un audio corto: «Es la primera vez que alguien me dice que no es mi culpa». Apagas la computadora.' : mal ? 'Wendy responde: «Sí, voy a tratar 😊». Lo dice como lo dice todo: sin decir que no.' : 'Wendy responde con un corazón. Ojalá escriba si lo necesita.',
        pro: { ok: 'Le quitas la culpa y le das un cambio concreto con seguimiento.', risk: 'Pedirle a una persona agotada que «haga menos» sin cambiar nada es otra tarea más.', info: 'Cumple la conversación que prometiste: es lo que más confianza construye.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'triste' : 'pensando', q === 'buena' ? '¡Qué divino!' : mal ? 'Otra tarea más para Wendy…' : 'Le faltó un cambio concreto.'],
      };
    },
    mirada: { ve: 'Cerrar el día con un mensaje claro le dice a la persona que lo que pasó no se olvidó al salir de la oficina.' },
  },
];
