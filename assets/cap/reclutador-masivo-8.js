// Reclutador/a de selección masiva · Capítulo 8 · «La feria» · Semana 2, miércoles.
// Hilo: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú. La evaluación sale a San Juan de Lurigancho.
// Normas citadas:
// - D.S. 005-2003-TR, que crea el Registro Nacional de Agencias Privadas de Empleo (RENAPE), y R.M. 151-2007-TR (directiva de inscripción).
//   https://sni.org.pe/aprueban-directiva-que-regula-el-procedimiento-para-la-inscripcion-en-el-reglamento-para-la-inscripcion-en-el-registro-nacional-de-agencias-privadas-de-empleo-renape-r-m-n-151-2007/
//   (No pude verificar en una norma peruana la prohibición expresa de cobrar al postulante: se presenta como buena práctica, sin citar artículo.)
// - Ley 29973, art. 50 (ajustes razonables en la selección), ya citada en el capítulo 3.
// - Ley 26772, modificada por la Ley 27270 (sin requisitos discriminatorios), ya citada en capítulos anteriores.

export const CAP = {
  n: 8, titulo: 'La feria', dia: 'Semana 2, miércoles', foto: 'assets/foto2/caminan.webp',
  lugar: 'Feria de empleo · losa deportiva de San Juan de Lurigancho',
  inicio: '07:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Miércoles, 7:00 a. m. Bajas de la Línea 1 en la estación San Carlos con dos cajas de fichas, un banner enrollado y un termo de café. La feria abre a las 9:00.', boton: 'Armar el stand',
  kusi: 'Hoy no esperas a que la gente llegue: vas tú a donde vive. ¡Dale!',
  lead: 'Armaste un stand que evalúa en el mismo lugar, protegiste a postulantes de un cobro dudoso, elegiste con evidencia, enviaste ofertas claras y le dijiste a Bruno cuándo pueden entrar los nuevos.',
  reflexion: '¿Qué cambia cuando evalúas en el barrio de los postulantes y no en tu oficina?',
  siguiente: { n: 9, titulo: 'Primer día en piso', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'stand', p: 'Stand de la feria', j: 'Jessica · Reclutamiento', d: 0, e: 'Por armar' },
  { id: 'cobro', p: 'El stand del costado', j: 'Organización de la feria', d: 0, e: 'Cobran «el curso»' },
  { id: 'aprobados', p: 'Aprobados de la feria', j: 'Jessica · Reclutamiento', d: 0, e: 'Por decidir' },
  { id: 'ofertas', p: 'Ofertas por WhatsApp', j: 'Jessica · Reclutamiento', d: 0, e: 'Pendientes' },
  { id: 'ingreso', p: 'Ingreso de la segunda tanda', j: 'Bruno · Operaciones', d: 5, e: 'Por definir' },
];

export const FUTURO = {
  stand_ordenado: ['Armaste un stand que evalúa y responde el mismo día.', 'La feria se convertirá en el canal con más aprobados por hora. Capítulo 10.'],
  cobro_frenado: ['Advertiste a los postulantes sobre el cobro y avisaste a la organización.', 'Luis entró al proceso de Contacta. Capítulo 10.'],
  feria_evidencia: ['Elegiste en la feria con lo que observaste, incluida la persona con audífono.', 'Edgar empezará la capacitación con el ajuste listo. Semana 3.'],
  feria_sesgo: ['En la feria pesó la edad o la simpatía más que la prueba.', 'Una postulante mayor publicará su experiencia. Capítulo 10.'],
  ofertas_claras: ['Las ofertas dijeron turno, fecha y qué traer.', 'Casi todos llegarán el lunes. Semana 3.'],
  tanda2_lunes: ['La segunda tanda empieza su capacitación el lunes de la semana 3.', 'El día 21 depende de ella. Semana 3.'],
  tanda2_piso: ['Mandaste a los nuevos al piso sin capacitación.', 'Mañana verás qué pasa. Capítulo 9.'],
  walter_reconocido: ['Reconociste en público el aporte de Wálter.', 'Wálter traerá a su equipo a la próxima feria. Semana 3.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  aprobados: { n: 'Aprobados Feria SJL', sub: '28 participantes', c: '#00838F' },
  walter: { n: 'Wálter Ccori', sub: 'Supervisor de piso', c: '#6D4C41' },
  luis: { n: 'Luis Paredes', sub: 'Postulante', c: '#455A64' },
  asesores: { n: 'Asesores Contacta · Piso 3', sub: '212 participantes', c: '#00838F' },
};

export const WSP = [
  { chat: 'grupo', t: '07:05', de: 'Jessica', txt: 'Voy en la Línea 1, llego 7:30 con las mesas plegables 🚇', si: 'pide_ayuda' },
  { chat: 'grupo', t: '07:05', de: 'Jessica', txt: '¡Suerte en la feria! Hoy no puedo ir, tengo comité con Bruno. Escríbeme cualquier cosa.', no: 'pide_ayuda' },
  { chat: 'walter', t: '08:40', de: 'Wálter', txt: 'Ya llegué. Traje a dos de mi equipo que viven aquí, en Canto Grande. Ellos cuentan mejor que yo.', si: 'walter_feria' },
  { chat: 'bruno', t: '09:15', de: 'Bruno', txt: 'Recuerda: prioridad a los jóvenes, como pidió el banco.', si: 'edad_aceptada' },
  { chat: 'luis', t: '12:30', de: 'Luis', txt: 'Gracias por avisarme lo del cobro, señorita. Casi pago otra vez. Ya me registré en su stand.', si: 'cobro_frenado' },
  { chat: 'bruno', t: '17:40', de: 'Bruno', txt: 'Si son buenos, que empiecen el lunes. Pero que sean buenos.', si: 'tanda2_lunes' },
];

export const CORREOS = [
  { t: '07:10', de: 'Municipalidad · Feria de Empleo', para: 'Empresas participantes', asunto: 'Indicaciones para el día de hoy', html: '<p>Estimadas empresas: el ingreso de postulantes es a las 9:00. <b>Recuerden que la participación en la feria es gratuita para los postulantes.</b> Cada empresa cuenta con una mesa, dos sillas y un punto de electricidad.</p><p>Organización</p>' },
  { t: '18:00', de: 'Jessica Torres', para: 'Equipo de Reclutamiento', asunto: 'Números de la feria', html: '<p>Feria SJL: <b>150 registrados, 61 evaluados y 28 aprobados</b> en un solo día. Es la mejor tasa de la campaña.</p><p>Mañana el grupo piloto sale al piso. Estén atentos al celular desde las 8:00.</p><p>Jessica</p>' },
];

export const QUIZ = [
  { q: 'En una feria, un stand cobra S/ 30 «por el curso» antes de contratar. ¿Qué haces?', ops: ['Nada, no es tu stand', 'Adviertes a los postulantes que un proceso serio no cobra y avisas a la organización', 'Le cobras tú también', 'Le gritas por megáfono'], ok: 1, por: 'Es una de las principales razones por las que los postulantes desconfían de los centros de contacto.' },
  { q: '¿Qué es el RENAPE?', ops: ['Un portal de empleo', 'El Registro Nacional de Agencias Privadas de Empleo del MTPE', 'Un sindicato', 'Un examen'], ok: 1, por: 'El D.S. 005-2003-TR creó el registro de agencias privadas de empleo: sirve para saber si una agencia está inscrita.' },
  { q: 'Un postulante usa audífono. ¿Qué haces en la simulación?', ops: ['Lo descartas: el puesto es telefónico', 'Le preguntas qué ajuste necesita, por ejemplo una vincha compatible o más volumen, y lo evalúas igual', 'Le pides que no lo use', 'Lo evalúas sin decirle nada'], ok: 1, por: 'La Ley 29973 reconoce ajustes razonables en la selección; muchas veces basta con preguntar.' },
  { q: '¿Por qué conviene evaluar en el mismo lugar de la feria?', ops: ['Porque es más bonito', 'Porque cada paso que se posterga pierde gente', 'Porque es obligatorio', 'Porque así no hay que llamar'], ok: 1, por: 'Cada cita adicional es una oportunidad para que la persona no llegue o acepte otra oferta.' },
  { q: 'Bruno quiere que los aprobados de la feria vayan mañana al piso, sin capacitación. ¿Qué dices?', ops: ['Que sí', 'Que deben pasar primero la capacitación, aunque eso los cuente para la semana 3', 'Que vayan solo a escuchar llamadas sin decirles', 'Que se capaciten solos con un video'], ok: 1, por: 'Sin capacitación, el primer día en piso es el día con más renuncias y reclamos.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:30', ch: 'presencial', who: null, titulo: 'Armar el stand', banner: 'assets/foto2/collage.webp', show: ['calidad', 'tiempo', 'personas'],
    body: (n, F) => `<p>La losa deportiva todavía huele a lejía. Al costado, una señora vende emoliente y pan con camote. Tienes una mesa, dos sillas y un enchufe. ${F.has('walter_feria') ? 'Wálter llegará a las 8:40 con dos asesores de su equipo.' : ''}</p><p>Antes de que abran la reja, <mark class="clave">ordena cómo pasará cada postulante por tu stand</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena el recorrido del postulante, de la llegada a la respuesta.', boton: 'Pegar el recorrido en el stand',
    items: [
      { id: 'registro', t: 'Registro en la ficha, con la pregunta «¿necesitas algún ajuste?»', por: 'Así sabes desde el inicio quién necesita algo distinto.' },
      { id: 'charla', t: 'Charla de dos minutos: qué es cobranza, turno, sueldo y cómo llegar', por: 'La verdad del puesto antes de evaluar.' },
      { id: 'filtro', t: 'Filtro rápido: turno y tiempo de traslado', por: 'Solo sigue quien puede cumplir.' },
      { id: 'simulacion', t: 'Simulación de llamada de 15 minutos', por: 'La misma prueba que en la oficina.' },
      { id: 'resultado', t: 'Resultado antes de que se vaya', por: 'Nadie se va con un «te llamamos».' },
      { id: 'oferta', t: 'Oferta por WhatsApp esa misma tarde', por: 'Con turno, fecha y qué traer.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['stand_ordenado'] : [], cartera: { stand: q === 'buena' ? 'Recorrido de seis pasos, con resultado el mismo día' : 'Armado, con pasos cruzados' },
        out: q === 'buena' ? 'Pegas el recorrido con cinta en el banner. A las 9:05 ya hay cola, y la gente lee los pasos mientras espera.' : 'A las 10:00 tienes gente evaluada que no puede cumplir el turno. Reordenas sobre la marcha.',
        pro: { ok: 'Un recorrido claro evalúa a más gente por hora y no deja a nadie esperando una llamada.', info: 'Cuenta cuántas personas salen en cada paso: así sabrás dónde se pierde la gente en una feria.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Stand de profesional!' : 'Sobre la marcha también se aprende.'],
      };
    },
    rules: [[BP, 'En una feria, evalúa y responde en el mismo lugar: cada paso que se posterga pierde gente.']],
    mirada: {
      ve: 'Una feria de empleo concentra en pocas horas lo que en la oficina toma una semana: aviso, citación, evaluación y oferta. Si el stand solo recoge CV, la gente se pierde en el camino; si evalúa en el momento, la feria se vuelve el mejor canal.',
      visual: { tipo: 'flujo', titulo: 'El recorrido en la feria', pasos: ['Registro', 'Charla del puesto', 'Filtro', 'Simulación', 'Resultado', 'Oferta'] },
    },
  },
  {
    id: 'g2', t: '10:20', ch: 'presencial', who: null, titulo: 'El stand del costado', banner: 'assets/foto2/grito.webp', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>En el stand vecino, «Call Center Xpress» tiene un parlante con reguetón y un cartel: «Contrato inmediato · S/ 1,500». Les cobran S/ 30 a los postulantes «por el curso». En la cola reconoces a Luis Paredes, el de Comas que no llegó a tu evaluación porque <mark class="clave">otro «call» ya le había cobrado una vez</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Acercarte a Luis y decirle, sin hablar mal de nadie, que un proceso serio no cobra; invitarlo a tu stand y avisar a la organización, que pidió que la feria sea gratuita.',
        res: { q: 'buena', fx: { etica: 5, personas: 4 }, flags: ['cobro_frenado'], cartera: { cobro: 'Postulantes advertidos; organización avisada' },
          out: 'Luis sale de la cola. La coordinadora de la municipalidad revisa el stand y les pide retirar el cartel del cobro. Tres personas más se pasan a tu cola.',
          pro: { ok: 'Proteges a los postulantes y usas el canal de la organización, sin pelear en público.', risk: 'El stand vecino te mira mal el resto del día.', info: 'Si una empresa dice ser agencia de empleo, se puede consultar si está inscrita en el RENAPE del Ministerio de Trabajo.' },
          kusi: ['celebra', 'Luis no vuelve a pagar por una ilusión.'] } },
      { id: 'b', label: 'No meterte: no sabes si es una estafa y cada empresa es responsable de su stand.',
        res: { q: 'aceptable', fx: { etica: -2, tiempo: 1 }, cartera: { cobro: 'Sin intervenir' },
          out: 'Luis paga los S/ 30. A la una de la tarde lo ves sentado en la vereda, revisando un papel que no dice nada.',
          pro: { ok: 'Evitas un conflicto con otra empresa.', risk: 'Esa desconfianza es la que luego hace que la gente no llegue a tus evaluaciones.' },
          kusi: ['triste', 'Otra vez Luis…'] } },
      { id: 'c', label: 'Agarrar el micrófono de tu stand y avisar a toda la cola que en el stand de al lado estafan.',
        res: { q: 'riesgosa', fx: { etica: 1, confianza: -3 }, cartera: { cobro: 'Acusación pública' },
          out: 'Se arma un lío. El encargado de Xpress te reclama a gritos y la organización les pide a los dos stands que bajen el volumen. Luis se va de la feria.',
          pro: { ok: 'Quieres proteger a todos.', risk: 'Acusar en público sin pruebas te expone y no ayuda a los postulantes.' },
          kusi: ['sorpresa', 'Mucho volumen, poca ayuda.'] } },
    ],
    rules: [[BP, 'Un proceso de selección serio no le cobra al postulante.'], [LEY, 'D.S. 005-2003-TR: las agencias privadas de empleo se inscriben en el RENAPE del MTPE.']],
    mirada: {
      ve: 'Los cobros «por el curso» o «por el uniforme» son una de las razones por las que los postulantes de Lima desconfían de los centros de contacto y no llegan a las evaluaciones. Proteger a un postulante también protege tu embudo.',
      normas: [{ ley: 'D.S. 005-2003-TR y R.M. 151-2007-TR', dice: 'Crean y regulan el Registro Nacional de Agencias Privadas de Empleo (RENAPE), en el que se inscriben las agencias que intermedian empleo.', practica: 'Antes de confiar en una agencia, el postulante puede preguntar si está inscrita.' }],
    },
  },
  {
    id: 'g3', t: '12:40', ch: 'presencial', who: null, titulo: 'Las simulaciones de la mañana', banner: 'assets/foto/entrevista.webp', show: ['calidad', 'etica', 'personas'],
    body: (n, F) => `<p>Al mediodía el sol pega fuerte sobre la losa. Hiciste simulaciones con ocho personas en tu mesa y tienes cupo para cinco en la tanda del lunes. ${F.has('edad_aceptada') ? 'En tu celular está el mensaje de Bruno: «prioridad a los jóvenes».' : ''}</p><p>Tus notas están en la guía, <mark class="clave">con los criterios que revisaste ayer</mark>.</p>`,
    type: 'pick', n: 5, prompt: 'Elige a las cinco personas que pasan a la tanda del lunes.', boton: 'Pasar a estas cinco', resumen: 'Pasaron',
    cols: ['Postulante', 'Lo que observaste'],
    rows: [
      { id: 'edgar', cells: ['Edgar Llanos, 58 · usa audífono', 'Con la vincha adaptada, acordó monto y fecha; muy cordial.'] },
      { id: 'yorgelis', cells: ['Yorgelis Mora, 27 · venezolana', 'Clara, verificó al titular y se negó a llamar de noche.'] },
      { id: 'luis', cells: ['Luis Paredes, 24', 'Nervioso al inicio; en el repechaje lo hizo bien.'] },
      { id: 'milagros', cells: ['Milagros Tito, 33 · mamá de dos', 'Escucha excelente; solo puede el turno tarde, que tiene cupos.'] },
      { id: 'kevin', cells: ['Kevin Rojas, 19', 'Muy rápido con el sistema; amenazó con la central de riesgo.'] },
      { id: 'andrea', cells: ['Andrea Soto, 21', 'Simpática, se quedó en blanco cuando el cliente se molestó.'] },
      { id: 'pedro', cells: ['Pedro Huamaní, 41 · quechuahablante', 'Calmó al cliente con paciencia; un poco lento con la pantalla.'] },
      { id: 'jair', cells: ['Jair Medina, 22', 'Llegó con la hoja de otro stand; no quería cobranza.'] },
    ],
    score: { edgar: 2, yorgelis: 3, luis: 2, milagros: 3, kevin: -2, andrea: -1, pedro: 2, jair: -2 },
    res: (picks, sc) => {
      const q = sc >= 11 ? 'buena' : sc >= 6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: picks.includes('edgar') && picks.includes('pedro') ? 3 : -1 },
        flags: [q === 'buena' ? 'feria_evidencia' : 'feria_sesgo'],
        cartera: { aprobados: picks.map(p => ({ edgar: 'Edgar', yorgelis: 'Yorgelis', luis: 'Luis', milagros: 'Milagros', kevin: 'Kevin', andrea: 'Andrea', pedro: 'Pedro', jair: 'Jair' })[p]).join(', ') },
        out: q === 'buena' ? 'Edgar se saca el audífono para limpiarlo y se ríe: «Hace diez años que nadie me evaluaba sin mirarme la edad». Pedro llama a su esposa en quechua para contarle.' : 'Pasa alguien que amenazó o que no quería cobranza. El lunes lo verás en la capacitación… o no lo verás.',
        pro: { ok: 'Eliges con la simulación y con los criterios no negociables.', risk: 'La rapidez con el sistema se entrena; amenazar al cliente, mucho menos.', info: 'Para Edgar, coordina con Rubén la vincha compatible desde el primer día.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cinco elegidos con evidencia!' : '¿Qué pesó más: la prueba o la impresión?'],
      };
    },
    rules: [[LEY, 'Ley 29973, art. 50: ajustes razonables en la selección.'], [LEY, 'Ley 26772: la edad u otros rasgos sin relación con el puesto no son criterio.']],
    mirada: {
      ve: 'En la feria aparece la diversidad real de Lima: gente mayor, migrantes, madres con horarios fijos, quechuahablantes. La simulación y los criterios no negociables permiten elegir por lo que cada persona hace, no por cómo se ve o de dónde viene.',
      visual: { tipo: 'matriz', x: 'Rapidez con el sistema', y: 'Criterio con el cliente', cuadrantes: ['Pasa con refuerzo', 'Pasa', 'No pasa', 'Riesgo: rápido pero presiona'], items: [['Yorgelis', .7, .9], ['Milagros', .55, .85], ['Edgar', .3, .75], ['Pedro', .25, .8], ['Luis', .5, .65], ['Kevin', .95, .1], ['Andrea', .6, .3], ['Jair', .4, .15]] },
    },
  },
  {
    id: 'g4', t: '15:10', ch: 'whatsapp', who: null, titulo: 'La oferta de la tarde', banner: 'assets/foto2/celebra-tablet.webp', show: ['personas', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Creas un grupo de WhatsApp con los 28 aprobados del día. ${F.has('proceso_realista') ? 'El lunes ordenaste que la oferta diga el turno exacto.' : ''} Lo que escribas ahora es lo que cada uno le va a mostrar a su familia en la noche: <mark class="clave">tiene que estar todo</mark>.</p>`,
    type: 'compose', enviaA: 'aprobados', para: 'Para: Aprobados Feria SJL', boton: 'Enviar la oferta',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'felicita', t: 'Apertura', ops: [
        { id: 'f1', t: '¡Felicitaciones! Aprobaste la evaluación de Contacta Perú para asesor/a de cobranza telefónica de la campaña Banco Sur.', ok: true, por: 'Puesto y campaña con su nombre: sin sorpresas.' },
        { id: 'f2', t: '¡Felicitaciones, ya eres parte de la familia Contacta! 🎉', ok: false, por: 'Cálido, pero no dice a qué puesto entra.' },
      ] },
      { id: 'cuando', t: 'Cuándo y dónde', ops: [
        { id: 'c1', t: 'La capacitación empieza el lunes a las 8:00 (turno mañana) o 14:00 (turno tarde), según lo que marcaste en tu ficha, en Av. Nicolás de Piérola 860, piso 2.', ok: true, por: 'Fecha, hora, turno y dirección.' },
        { id: 'c2', t: 'Pronto te avisamos la fecha de inicio.', ok: false, por: 'Cada día sin fecha es un día para aceptar otra oferta.' },
      ] },
      { id: 'condiciones', t: 'Condiciones', ops: [
        { id: 'd1', t: 'Estás en planilla desde el primer día de capacitación, con sueldo desde S/ 1,230 más bonos.', ok: true, por: 'Corta el rumor de que «el primer mes no pagan».' },
        { id: 'd2', t: 'El sueldo se conversa al final de la capacitación.', ok: false, por: 'Siembra desconfianza.' },
      ] },
      { id: 'traer', t: 'Qué traer', ops: [
        { id: 't1', t: 'Trae tu DNI y el número de tu cuenta, si tienes. Cualquier duda, escríbeme aquí. ¡Te esperamos!', ok: true, por: 'Corto y concreto.' },
        { id: 't2', t: 'Trae todos tus documentos.', ok: false, por: '¿Cuáles? Cada uno traerá algo distinto.' },
      ] },
    ],
    res: sel => {
      const buenas = ['f1', 'c1', 'd1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : -1, cumplimiento: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['ofertas_claras'] : [], cartera: { ofertas: q === 'buena' ? '28 ofertas con turno, fecha y condiciones' : 'Ofertas incompletas' },
        out: q === 'buena' ? 'En una hora hay 26 «confirmo» en el grupo. Milagros pregunta si puede llevar a su bebé el primer día; le respondes por privado.' : 'Llegan 40 preguntas en una hora: «¿A qué hora?», «¿Qué turno?», «¿Pagan?».',
        pro: { ok: 'Una oferta completa reduce las preguntas y la deserción antes del primer día.', info: 'Pide que cada uno confirme con un «confirmo»: así sabes con quién contar el lunes.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡26 confirmados!' : 'Uy, cuántas preguntas…'],
      };
    },
    rules: [[LEY, 'RMV de S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).'], [BP, 'Una oferta dice puesto, fecha, turno, condiciones y qué traer.']],
    mirada: {
      ve: 'Entre el «aprobaste» y el primer día hay un fin de semana entero. Una oferta clara y completa es lo que hace que la persona rechace otras propuestas y llegue el lunes.',
      visual: { tipo: 'mensaje', titulo: 'Una oferta completa', txt: '¡Felicitaciones! Aprobaste la evaluación de Contacta Perú para asesor/a de cobranza telefónica de la campaña Banco Sur. La capacitación empieza el lunes a las 8:00 (turno mañana) o 14:00 (turno tarde), según lo que marcaste en tu ficha, en Av. Nicolás de Piérola 860, piso 2. Estás en planilla desde el primer día de capacitación, con sueldo desde S/ 1,230 más bonos. Trae tu DNI y el número de tu cuenta, si tienes. Cualquier duda, escríbeme aquí. ¡Te esperamos!' },
    },
  },
  {
    id: 'g5', t: '16:40', ch: 'llamada', who: 'bruno', titulo: '«Mándalos mañana al piso»', banner: 'assets/foto/llamada.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>Bruno te llama mientras desarmas el stand. Se escucha la central de fondo. «¡28 en un día! Bacán. Ahora escúchame: <mark class="clave">mañana el piloto sale al piso. Que los 28 entren también, a escuchar y a aprender en vivo</mark>. Así el banco ve más gente conectada.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que entran a la capacitación el lunes y que, con tres días, estarán en piso el jueves de la semana 3, antes del día 21. Ofrecerle el número exacto para el banco.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3 }, rel: { bruno: 1 }, flags: ['tanda2_lunes'], cartera: { ingreso: 'Capacitación el lunes; en piso el jueves de la semana 3' },
          out: 'Bruno resopla, pero hace la cuenta en voz alta: «31 del piloto más los de la tanda del lunes… Ya. Mándame eso por escrito para el banco».',
          pro: { ok: 'Le das un número real con fecha, en lugar de gente sin capacitar en el piso.', risk: 'Todo depende de que la tanda del lunes llegue completa.', info: 'El día 21 cae el domingo de la semana 3: la tanda del lunes es la última que llega a tiempo.' },
          kusi: ['celebra', 'Fecha, número y criterio.'] } },
      { id: 'b', label: 'Aceptar: que vayan mañana solo a escuchar llamadas junto a un asesor, sin tocar el sistema. Así ven el trabajo real antes de empezar.',
        res: { q: 'aceptable', fx: { personas: 1, calidad: -1, tiempo: -2 }, rel: { bruno: 1 }, cartera: { ingreso: 'Escucha de llamadas mañana; capacitación el lunes' },
          out: 'Es una buena forma de mostrar el trabajo real. Pero lo coordinas a las 17:00 para mañana a las 8:00, y la mitad no podrá ir con un día de aviso.',
          pro: { ok: 'Escuchar llamadas reales es una buena presentación del puesto.', risk: 'Con tan poco aviso, se convierte en otra cita a la que la mitad no llega.' },
          kusi: ['pensando', 'Buena idea… ¿para mañana a las 8?'] } },
      { id: 'c', label: 'Mandarlos mañana al piso para que el banco vea más gente conectada; la capacitación la hacen en paralelo.',
        res: { q: 'riesgosa', fx: { calidad: -5, cumplimiento: -3, personas: -3 }, rel: { bruno: 1 }, flags: ['tanda2_piso'], cartera: { ingreso: 'Al piso mañana, sin capacitación' },
          out: 'Bruno cuelga contento. Mañana habrá 28 personas en el piso que no saben usar el sistema, el mismo día que el piloto hace sus primeras llamadas reales.',
          pro: { ok: 'El banco verá más gente conectada mañana.', risk: 'Sin capacitación, el primer día en piso es el que más renuncias produce.' },
          kusi: ['preocupado', '¿Al piso sin saber qué hacer?'] } },
    ],
    rules: [[BP, 'Nadie sale al piso sin capacitación: el primer día real es el más frágil.']],
    mirada: {
      ve: 'Cuando la feria trae buenos números, la tentación es mostrarlos de inmediato. Pero una persona sin capacitar en el piso es una persona expuesta a fracasar el primer día. Dar al gerente una fecha y un número es mejor que darle gente conectada sin saber qué hacer.',
      visual: { tipo: 'linea', titulo: 'Hacia el día 21', hitos: [['Jueves S2', 'El piloto sale al piso'], ['Lunes S3', 'Capacitación de la tanda 2'], ['Jueves S3', 'Tanda 2 en piso'], ['Domingo S3', 'Día 21']] },
    },
  },
  {
    id: 'g6', t: '18:30', ch: 'whatsapp', who: 'jessica', titulo: 'El mensaje del día', banner: 'assets/foto2/aplausos-verde.webp', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Vas de regreso en la Línea 1, con el banner enrollado entre las piernas y olor a emoliente en la casaca. ${F.has('walter_feria') ? 'Wálter y sus dos asesores contaron el trabajo real a más de cien personas.' : 'Contaste el puesto tú sola a más de cien personas.'}</p>`,
    chat: ['¿Qué ponemos en el grupo del piso sobre la feria? 28 aprobados es récord 🔥'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Dar el número y reconocer con nombre a quienes ayudaron en la feria.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { jessica: 1 }, flags: ['walter_reconocido'],
          envia: ['asesores', '¡Feria SJL: 150 registrados y 28 aprobados en un día! Gracias a cada asesor y supervisor que contó el trabajo de verdad en el stand, y a Jessica por el apoyo de todo el día. El lunes los recibimos en el piso 2.'],
          out: 'Wálter responde con un audio corto: «Para la próxima feria avísenme, que traigo a cinco de mi equipo». Jessica fija el mensaje en el grupo.', kusi: ['celebra', '¡El mérito compartido pesa doble!'] } },
      { id: 'b', label: 'Dar solo el número: los resultados hablan por sí solos.',
        res: { q: 'aceptable', fx: { confianza: 2 },
          envia: ['asesores', '¡Feria SJL: 28 aprobados en un día! 🔥'],
          out: 'Llegan muchos aplausos. Wálter no comenta nada.', kusi: ['pensando', '¿Y quién te ayudó?'] } },
    ],
    mirada: { ve: 'El reclutamiento masivo depende de mucha gente: supervisores que cuentan el trabajo, asesores que recomiendan, coordinadoras que cargan mesas. Reconocerlos con nombre hace que vuelvan a ayudar.' },
  },
];
