// Jefe/a de Relaciones Laborales · Capítulo 10 · «Dos semanas» · Semana 2, viernes. Final abierto: gancho a la Semana 3.
// Hilo: el acta está firmada (o no), el piquete se suspendió hasta la asamblea del lunes y la planta vuelve por turnos.
// Hoy se cierra lo pendiente, se mira atrás… y llega la convocatoria a una asamblea que puede tumbarlo todo.
// Normas citadas:
// - Constitución, art. 28: libertad sindical, negociación colectiva y huelga; fuerza vinculante de lo concertado
//   (docs/normas/txt).
// - D.S. 019-2006-TR, art. 25.10: utilizar contratos sujetos a modalidad para afectar la libertad sindical, la
//   negociación colectiva y el ejercicio del derecho de huelga; art. 25.12: discriminación por actividad sindical
//   (docs/normas/txt).
// - TUO de la LRCT (D.S. 010-2003-TR): el acuerdo y su ratificación por los trabajadores según su estatuto (principio).
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Fundición del Sur · Ilo, Moquegua',
  inicio: '06:30', fin: '19:30', cierreHora: '19:20',
  apertura: 'Viernes de la semana 2. A las seis, el primer turno volvió a cruzar la garita. Sin banderas, sin olla común: solo cascos naranjas y caras cansadas. El horno empieza a subir de temperatura. Tú también.', boton: 'Ver entrar al primer turno',
  kusi: 'Dos semanas entre la gerencia, dos sindicatos y un horno que no se apaga. Hoy toca mirar atrás… y un poquito adelante.',
  lead: 'Cerraste los pendientes del retorno, limpiaste tu informe al directorio, hiciste un balance honesto, preguntaste por el oficio, te preguntaste si es para ti… y al final del día llegó una convocatoria que abre la Semana 3.',
  reflexion: '¿Te ves en este puesto? ¿Qué te dijeron estas dos semanas sobre ti?',
  siguiente: { n: 11, titulo: 'La asamblea', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'retorno', p: 'Retorno por turnos', j: 'Ing. Wilber Chambi', d: 0, e: 'Primer turno, 06:00' },
  { id: 'informe', p: 'Informe de cierre al directorio', j: 'Relaciones Laborales', d: 0, e: 'Para las 12:00' },
  { id: 'balance', p: 'Tu balance de las dos semanas', j: 'Tú', d: 0, e: 'Por escribir' },
  { id: 'asamblea', p: 'Asamblea de ratificación', j: 'Sindicato mayoritario', d: 0, e: 'Lunes' },
  { id: 'mantenimiento', p: 'Negociación de mantenimiento', j: 'Marleny Quispe', d: 0, e: 'Enero' },
];

export const FUTURO = {
  asamblea_si: ['Aceptaste ir a la asamblea del lunes a explicar el acuerdo con números.', 'Te toca dar la cara frente a 700 personas. Capítulo 11.'],
  asamblea_no: ['Decidiste no ir a la asamblea y mandar un documento.', 'Kevin y el turno C hablarán sin contrapeso. Capítulo 11.'],
  informe_limpio: ['Tu informe al directorio cuenta hechos, errores y aprendizajes, sin listas ni culpables.', 'Lima lo usará como referencia para la próxima negociación. Capítulo 11.'],
  informe_sucio: ['Tu informe al directorio recomendó medidas contra quienes hicieron huelga.', 'Si llega al sindicato, la asamblea se cae. Capítulo 11.'],
  balance_honesto: ['Tu balance reconoce aciertos, errores y lo que viene.', 'Te servirá frente a la asamblea. Capítulo 11.'],
  te_ves_si: ['Te ves en este puesto.', 'La Semana 3 te encontrará con ganas.'],
  te_ves_dudas: ['Todavía no sabes si este puesto es para ti.', 'La asamblea te ayudará a decidirlo. Capítulo 11.'],
  te_ves_no: ['Sientes que este puesto no es para ti.', 'Igual te toca el lunes. Capítulo 11.'],
  equipo_agradecido: ['Le agradeciste al equipo con hechos concretos.', 'Jhon y Silvia llegarán al lunes contigo. Capítulo 11.'],
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
  { chat: 'wilber', t: '06:20', de: 'Wilber', txt: 'Primer turno adentro. Charla dada. Nadie silbó. El horno sube despacio, como debe ser.', si: 'retorno_seguro' },
  { chat: 'wilber', t: '06:20', de: 'Wilber', txt: 'Entraron todos de golpe. Estoy con el corazón en la mano.', no: 'retorno_seguro' },
  { chat: 'marleny', t: '10:10', de: 'Marleny', txt: 'Llegó la ropa térmica. Primera vez en dos años que algo llega antes de que lo reclamemos. En enero conversamos.', si: 'marleny_respeto' },
  { chat: 'marleny', t: '10:10', de: 'Marleny', txt: 'Por la cláusula que firmamos, el aumento también es nuestro. Le mando la carta el lunes.', si: 'clausula_espejo' },
  { chat: 'gerencia', t: '16:40', de: 'Ing. Paredes', txt: 'Lima leyó tu informe. La presidenta preguntó tu nombre. Eso es bueno, creo.', si: 'informe_limpio' },
  { chat: 'sindicato', t: '18:05', de: 'Teodoro Cutipa', txt: 'Le mandé la convocatoria. El lunes va a estar difícil. Pero si usted viene, yo también doy la cara.', si: 'presion_resistida' },
];

export const CORREOS = [
  { t: '08:00', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Jefatura de Relaciones Laborales', asunto: 'Lo que queda', html: '<p>El acta está firmada, pero no es convenio hasta que la ratifique la asamblea. Hasta entonces: nada de anuncios triunfales, nada de medidas contra nadie y todo cumplido al pie de la letra (comité de gases, movilidad, descuento fraccionado).</p><p>Y una cosa más: si en tu informe a Lima alguien te pide «aprendizajes», que no sean listas de personas.</p><p>Silvia</p>' },
  { t: '18:30', de: 'Sindicato de Trabajadores de Fundición del Sur · Junta Directiva', para: 'Jefatura de Relaciones Laborales', asunto: 'Convocatoria a asamblea general', html: '<p>Se informa que el lunes a las 07:00, en el coliseo municipal de Ilo, se realizará la asamblea general para ratificar o rechazar el acta de acuerdo firmada el jueves.</p><p>Un grupo de afiliados del turno C ha presentado una moción para rechazarla. La junta invita a la jefatura de Relaciones Laborales a exponer el contenido del acta durante veinte minutos y a responder preguntas.</p><p>Teodoro Cutipa · Secretario general</p>' },
];

export const QUIZ = [
  { q: 'Un acta de acuerdo firmada por las comisiones, antes de la asamblea…', ops: ['Ya es convenio definitivo', 'Debe ser ratificada por los trabajadores según su estatuto', 'No vale nada', 'Necesita una sentencia'], ok: 1, por: 'Quien votó la huelga decide, según su estatuto, si acepta el acuerdo.' },
  { q: 'Recomendar no renovar los contratos temporales de quienes hicieron huelga…', ops: ['Es una decisión de gestión', 'Usa contratos sujetos a modalidad para afectar la libertad sindical: infracción muy grave', 'Es obligatorio', 'Es legal si el contrato vence'], ok: 1, por: 'El D.S. 019-2006-TR, art. 25.10, menciona expresamente usar contratos sujetos a modalidad para afectar la libertad sindical y el derecho de huelga.' },
  { q: 'Un buen informe de cierre de un conflicto incluye…', ops: ['La lista de agitadores', 'Hechos, costos, errores de la empresa y aprendizajes', 'Solo los logros', 'Las opiniones del gerente'], ok: 1, por: 'Un informe útil sirve para la próxima negociación, no para buscar culpables.' },
  { q: 'Una cláusula espejo con otro sindicato…', ops: ['No tiene efectos', 'Obliga a extender lo acordado al otro sindicato y suma costo', 'Es ilegal', 'Vence con la huelga'], ok: 1, por: 'Lo que se firma se cumple: todo lo acordado en una mesa se suma a la otra.' },
  { q: 'Lo que más define a la jefatura de Relaciones Laborales es…', ops: ['Ganar cada discusión', 'Sostener la confianza de partes que desconfían entre sí, dentro de la ley', 'Obedecer siempre a la gerencia', 'Ponerse del lado del sindicato'], ok: 1, por: 'Representas a la empresa, pero tu valor está en que ambas partes puedan creerte.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '07:00', ch: 'llamada', who: null, titulo: 'El primer día de vuelta', banner: 'assets/foto/llamada.webp', lugar: 'Garita principal', show: ['personas', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Desde la garita ves al primer turno entrar en fila. ${F.has('piquete_cuidado') ? 'El operador que se desmayó el martes te saluda con la cabeza.' : 'Nadie te mira.'} Tienes el café en una mano y el celular en la otra.</p><p><mark class="clave">Tres llamadas</mark> antes de subir a la oficina.</p>`,
    type: 'calls',
    calls: [
      ['Ing. Wilber Chambi · Fundición', 'Contesta desde la sala de control', '«Charla dada, comité presentado. Un operador preguntó si de verdad puede detener una tarea si no es segura. Le dije que sí. Ahora tengo que cumplirlo.»'],
      ['Dra. Silvia Medina · Legal', 'Contesta desde Moquegua', '«La conciliadora me llamó para saber cómo iba el retorno. Le dije que bien. No me hagas quedar mal.»'],
      ['Teodoro Cutipa · Sindicato', 'Contesta en la garita, a veinte metros de ti', '«Jefa, el lunes hay asamblea. El turno C quiere tumbar el acta. La junta quiere que usted venga a explicarla. ¿Viene?»'],
    ],
    prompt: 'Cutipa espera tu respuesta. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que sí vas: veinte minutos para explicar el acta con números simples, y luego respondes preguntas sin pelear con nadie.',
        res: { q: 'buena', fx: { confianza: 5, personas: 3 }, rel: { sindicato: 1 }, flags: ['asamblea_si'], cartera: { asamblea: 'Lunes 07:00, coliseo: vas a exponer' },
          out: 'Cutipa cruza los veinte metros y te da la mano. «No va a ser fácil. Kevin va a preguntar todo.» Le dices que para eso vas.',
          pro: { ok: 'Dar la cara ante la base es la forma más fuerte de sostener un acuerdo.', risk: 'Te expones a preguntas duras frente a cientos de personas.', info: 'Prepara cuánto suma el aumento en un año para un operador típico.' },
          kusi: ['celebra', '¡Eso es dar la cara!'] } },
      { id: 'b', label: 'Que la empresa no debe meterse en una asamblea sindical; le mandarás un resumen escrito del acta.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -2 }, flags: ['asamblea_no'], cartera: { asamblea: 'Lunes: solo un resumen escrito' },
          out: '«Entiendo», dice Cutipa. Lo dice como quien ya sabe que el lunes va a estar solo.',
          pro: { ok: 'Respetas la autonomía sindical.', risk: 'Si la junta te invita, ir no es intromisión; no ir deja el micrófono solo a quienes quieren tumbar el acta.' },
          kusi: ['pensando', 'Te invitaron… y elegiste el papel.'] } },
    ],
    rules: [[LEY, 'Constitución, art. 28: garantiza la libertad sindical; la asamblea decide según su estatuto.']],
    mirada: {
      ve: 'Una invitación de la junta a la asamblea no es una intromisión: es una oportunidad. La empresa no vota, pero puede explicar, con la cara al frente, lo que firmó.',
      visual: { tipo: 'flujo', titulo: 'Del acta al convenio', pasos: ['Acta firmada', 'Comunicado', 'Asamblea', 'Ratificación o rechazo'], aqui: 2 },
    },
  },
  {
    id: 'j2', t: '09:30', ch: 'documento', who: null, titulo: 'El informe a Lima', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Relaciones Laborales', show: ['etica', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>El directorio quiere un informe de cierre con «aprendizajes». ${F.has('jhon_protegido') ? 'Jhon armó un borrador con lo que dictó el gerente ayer.' : 'El gerente dictó un borrador ayer en la noche.'}</p><p>Antes de firmarlo con tu nombre, <mark class="clave">marca lo que no puede ir</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir en el informe.',
    doc: { t: 'Informe de cierre · Conflicto colectivo y huelga', sub: 'Borrador para el directorio · Relaciones Laborales' },
    lines: [
      { id: 'hechos', t: 'Cronología: comunicación de huelga, trato directo, servicios mínimos, tres días de huelga, reunión extraproceso, acta.' },
      { id: 'costos', t: 'Costo de la huelga frente al costo del acuerdo en su primer año.' },
      { id: 'errores', t: 'Errores de la empresa: la promesa de seguridad incumplida el año pasado y decisiones que el sindicato llevó a la Autoridad.' },
      { id: 'temporales', t: 'Recomendación: no renovar los contratos a plazo fijo de quienes acataron la huelga.', bad: LEY, why: 'Usar contratos sujetos a modalidad para castigar la huelga es infracción muy grave (D.S. 019-2006-TR, art. 25.10).' },
      { id: 'vigilar', t: 'Recomendación: mantener identificados a los dirigentes del turno C para la próxima negociación.', bad: LEY, why: 'Fichar dirigentes por su actividad sindical es hostilidad y discriminación (D.S. 019-2006-TR, arts. 25.10 y 25.12).' },
      { id: 'agitadores', t: 'Causa principal del conflicto: un grupo de agitadores.', bad: BP, why: 'Es falso y no ayuda: el conflicto tuvo causas reales (seguridad, salarios, promesas incumplidas). Un informe que culpa a «agitadores» repite el error.' },
      { id: 'aprendizaje', t: 'Aprendizaje: cumplir lo pactado y negociar con margen real evita que la próxima negociación empiece con huelga.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { etica: missLey ? -5 : 4, cumplimiento: missLey ? -5 : 5, calidad: q === 'buena' ? 4 : 1 },
        flags: missLey ? ['informe_sucio'] : ['informe_limpio'],
        cartera: { informe: missLey ? 'Con recomendaciones contra huelguistas' : 'Hechos, costos, errores y aprendizajes' },
        out: missLey ? 'El informe sale a Lima con tu firma. Los informes, en las empresas grandes, viajan. Este puede viajar hasta el coliseo.' : 'Tachas tres líneas y escribes una nueva: «La empresa también se equivocó». El gerente la lee dos veces y no la borra.',
        pro: { ok: 'Un informe de cierre sirve para la próxima negociación, no para la próxima represalia.', risk: 'Una recomendación contra huelguistas firmada por ti es una prueba en tu contra.' },
        kusi: missLey ? ['indignado', 'Tu firma no debería ir ahí…'] : ['celebra', '¡Un informe que enseña de verdad!'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.10: utilizar contratos sujetos a modalidad para afectar la libertad sindical o el derecho de huelga.']],
    mirada: {
      ve: 'Después de una huelga, la tentación es «aprender» quién paró. El aprendizaje útil es otro: qué hizo la empresa para que el conflicto llegara hasta ahí.',
      visual: { tipo: 'cambio', titulo: 'Del informe que castiga al que enseña', pares: [['No renovar a huelguistas', 'Cumplir lo pactado'], ['Identificar dirigentes', 'Negociar con margen real'], ['«Agitadores»', 'Promesas incumplidas']] },
    },
  },
  {
    id: 'j3', t: '11:40', ch: 'documento', who: null, titulo: 'Tu balance', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'personas'],
    body: () => `<p>Silvia te pidió, para la tarde, un balance tuyo: no de la empresa, tuyo. Abres una hoja en blanco. Afuera, la chimenea vuelve a echar su penacho blanco.</p><p><mark class="clave">Un balance honesto tiene tres partes</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu balance.', boton: 'Guardar el balance',
    bloques: [
      { id: 'bien', t: 'Lo que hice bien', n: 1, ops: [
        { id: 'b1', t: 'Mantener abiertos los canales con Cutipa, Marleny y la gerencia, aun en los peores días.', ok: true, por: 'Concreto y verificable.' },
        { id: 'b2', t: 'Ganarle al sindicato.', ok: false, por: 'Nadie le ganó a nadie: se llegó a un acuerdo.' },
      ] },
      { id: 'mal', t: 'Lo que haría distinto', n: 1, ops: [
        { id: 'm1', t: 'Llegar antes a lo que no estaba en el pliego: la historia de Germán y lo que la base sentía.', ok: true, por: 'Un aprendizaje que sirve para la próxima.' },
        { id: 'm2', t: 'Nada: todo salió como lo planeé.', ok: false, por: 'Un balance sin errores no es un balance.' },
      ] },
      { id: 'viene', t: 'Lo que viene', n: 2, ops: [
        { id: 'v1', t: 'La asamblea del lunes y el cumplimiento del acta.', ok: true, por: 'El acuerdo todavía no está cerrado.' },
        { id: 'v2', t: 'La negociación de mantenimiento en enero.', ok: true, por: 'El segundo sindicato también espera.' },
        { id: 'v3', t: 'Vacaciones.', ok: false, por: 'Ojalá. Pero no esta semana.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: 2 },
        flags: q !== 'riesgosa' ? ['balance_honesto'] : [],
        cartera: { balance: q === 'buena' ? 'Aciertos, errores y lo que viene' : 'Balance a medias' },
        out: q === 'buena' ? 'Lees tu balance y te sorprende una cosa: lo más difícil no fue la ley, fue escuchar a tiempo.' : 'Tu balance tiene más deseos que hechos. Lo vas a reescribir el fin de semana.',
        pro: { ok: 'Un balance honesto mira aciertos, errores y pendientes.', info: 'Guárdalo: la próxima negociación empieza con lo que aprendiste en esta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Balance con los pies en la tierra!' : 'Te falta mirarte con más honestidad…'],
      };
    },
    mirada: {
      ve: 'Dos semanas de conflicto dejan cansancio y también aprendizaje. Escribirlo con honestidad, incluidos los errores, es lo que convierte una crisis en oficio.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes 1', 'El anuncio'], ['Martes 1', 'La estrategia'], ['Jueves 1', 'La mesa'], ['Lunes 2', 'Los audios'], ['Martes 2', 'La huelga'], ['Miércoles 2', 'Moquegua'], ['Jueves 2', 'El acta']] },
    },
  },
  {
    id: 'j4', t: '13:40', ch: 'presencial', who: 'abogado', titulo: 'Silvia, con un café', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería frente al malecón de Ilo', show: ['personas', 'calidad'],
    body: () => `<p>Silvia te invita a almorzar en el malecón: un cebiche de pejerrey y una chicha morada. Lleva veinte años en relaciones laborales, en minas, fundiciones y pesqueras del sur.</p><p>«Hazme <mark class="clave">dos preguntas sobre el oficio</mark>. Hoy contesto todo.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Silvia.',
    opts: [
      { id: 'cansa', label: '¿Cómo se aguanta estar siempre en el medio?', info: '«No estás en el medio: estás de un lado, el de la empresa. Lo que pasa es que tu trabajo es que el otro lado te pueda creer. Eso cansa. Yo descanso los domingos sin celular, sin excepción.»' },
      { id: 'error', label: '¿Cuál fue tu peor error en este trabajo?', info: '«Firmar un acta sin leerla con la junta. Se cayó en la asamblea y hubo veinte días más de huelga. Desde entonces, leo todo dos veces con todos sentados.»' },
      { id: 'futuro', label: '¿Qué viene para alguien en este puesto?', info: '«Superintendencias, gerencias de relaciones laborales, consultoría. Pero lo más valioso es que en Ilo, Moquegua y Tacna se va a saber cómo manejaste esta huelga. Eso abre o cierra puertas.»' },
      { id: 'lunes', label: '¿Cómo me preparo para la asamblea?', info: '«Números simples, nada de leyes. Cuánto gana un operador con el aumento en un año, qué cambia en convertidores y qué pasa si rechazan. Y nunca discutas con Kevin: respóndele.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, calidad: 3 },
      out: 'Silvia paga la cuenta antes de que puedas sacar la billetera. «Para eso sirven las abogadas viejas.» El mar está quieto y huele a sal.',
      kusi: ['curioso', picks.includes('lunes') ? '¡Ya tienes plan para el lunes!' : 'Preguntar por el oficio también es aprender.'],
    }),
    mirada: {
      ve: 'Relaciones Laborales se aprende en los libros, pero se domina conversando con quienes vivieron otras huelgas. Preguntar por los errores ajenos ahorra los propios.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Silvia', txt: 'No estás en el medio: estás de un lado. Tu trabajo es que el otro lado te pueda creer.' },
    },
  },
  {
    id: 'j5', t: '15:30', ch: 'presencial', who: 'gerencia', titulo: '¿Te ves aquí?', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Gerencia General', show: ['personas', 'confianza'],
    body: (n, F) => `<p>El gerente te llama a su oficina. Por primera vez en dos semanas no hay tazas vacías. ${F.has('gerente_convencido') ? '«Me hiciste firmar algo que no quería, y tenías razón. No me pasa seguido.»' : '«Fueron dos semanas duras. Para todos.»'}</p><p>«Lima quiere saber si te quedas para lo que viene. Yo también. <mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Sí. Me cansó, pero entendí que aquí puedo hacer que una empresa y su gente se crean un poco más.',
        res: { q: null, fx: { personas: 3, confianza: 3 }, rel: { gerencia: 1 }, flags: ['te_ves_si'],
          out: 'El gerente asiente. «Entonces el lunes vas al coliseo. Yo no puedo; a mí me silban.» Por primera vez, se ríe.',
          kusi: ['celebra', '¡Qué bacán! Te ves aquí.'] } },
      { id: 'b', label: 'Todavía no lo sé. Me gusta el oficio, pero no sé si quiero vivir con el celular encendido.',
        res: { q: null, fx: { personas: 2 }, flags: ['te_ves_dudas'],
          out: '«Honesta», dice el gerente. «Eso también sirve en este puesto.» Te da hasta después de la asamblea para pensarlo.',
          kusi: ['pensando', 'Dudar también es saber algo de ti.'] } },
      { id: 'c', label: 'Creo que no. Prefiero un trabajo donde no tenga que estar entre dos desconfianzas.',
        res: { q: null, fx: { personas: 1 }, flags: ['te_ves_no'],
          out: 'El gerente se queda callado. «Respeto eso. Pero el lunes te necesito igual.» Asientes: la asamblea no espera a nadie.',
          kusi: ['animo', 'Saber lo que no quieres también vale.'] } },
    ],
    mirada: {
      ve: 'Este puesto pide estar de un lado sin perder la confianza del otro, con plazos de ley, hornos que no se apagan y familias que escuchan la radio. No es para todos, y está bien preguntárselo.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pesa', items: ['El celular encendido', 'Dos desconfianzas', 'La presión de Lima'] }, b: { t: 'Lo que da', items: ['Acuerdos que cambian vidas', 'Un oficio con criterio propio', 'Gente que te cree'] } },
    },
  },
  {
    id: 'j6', t: '17:10', ch: 'whatsapp', who: null, titulo: 'Al equipo', banner: 'assets/foto2/celebra-tablet.webp', lugar: 'Oficina de Relaciones Laborales', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('jhon_protegido') ? 'Jhon sigue en su escritorio, ordenando las carpetas para el lunes.' : 'Jhon volvió el lunes y no ha parado desde entonces.'} Silvia manda fotos del malecón al grupo.</p><p>Antes de irte, un mensaje al equipo. <mark class="clave">Que diga algo de verdad</mark>.</p>`,
    type: 'compose', enviaA: 'grupo', para: 'Para: Relaciones Laborales (Silvia y Jhon)', boton: 'Enviar',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Agradecer', ops: [
        { id: 'g1', t: 'Jhon: sin tus actas ordenadas y el papel de febrero, los servicios mínimos habrían sido una pelea. Silvia: gracias por decirme que no a tiempo, varias veces.', ok: true, por: 'Agradecimiento con hechos concretos.' },
        { id: 'g2', t: 'Gracias a todos por todo.', ok: null, por: 'Amable, pero no dice nada.' },
      ] },
      { id: 'lunes', t: 'El lunes', ops: [
        { id: 'l1', t: 'El lunes a las 6:30 nos vemos en el coliseo. Llevo los números; ustedes, paciencia.', ok: true, por: 'Claro y con humor.' },
        { id: 'l2', t: 'El lunes nos jugamos todo.', ok: false, por: 'Dramatiza justo cuando necesitan calma.' },
      ] },
      { id: 'descanso', t: 'Cierre', ops: [
        { id: 'd1', t: 'Este fin de semana, celular apagado el domingo. Lo dice Silvia y lo cumplo yo.', ok: true, por: 'Cuidar al equipo también es parte del puesto.' },
        { id: 'd2', t: 'Estén atentos al celular todo el fin de semana.', ok: false, por: 'Dos semanas así cansan a cualquiera.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'l1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['equipo_agradecido'] : [],
        out: q === 'buena' ? 'Jhon responde con un audio corto: «Gracias, jefa. Mi papá dice que usted es la primera de Relaciones Laborales que él respeta». Silvia manda un sticker de una llama con lentes de sol.' : 'Llegan dos «ok». El equipo está cansado y tu mensaje no ayuda a descansar.',
        pro: { ok: 'Agradecer con hechos concretos y cuidar el descanso es liderar.', info: 'El lunes los vas a necesitar enteros.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Qué divino! Equipo cuidado.' : 'Tu equipo también necesita aire.'],
      };
    },
    mirada: {
      ve: 'En una crisis, el equipo pequeño que sostiene todo suele ser invisible. Nombrar lo que cada uno hizo es parte de cerrar bien.',
      visual: { tipo: 'mensaje', titulo: 'Al equipo', txt: 'Jhon: sin tus actas ordenadas y el papel de febrero, los servicios mínimos habrían sido una pelea. Silvia: gracias por decirme que no a tiempo, varias veces. El lunes a las 6:30 en el coliseo. Este domingo, celular apagado.' },
    },
  },
  {
    id: 'j7', t: '18:40', ch: 'correo', who: null, titulo: 'La convocatoria', banner: 'assets/esc/meta.webp', show: ['confianza', 'personas'],
    mail: { from: 'Sindicato de Trabajadores de Fundición del Sur · Junta Directiva', to: 'Jefatura de Relaciones Laborales', asunto: 'Convocatoria a asamblea general' },
    body: (n, F) => `<p>Lunes 07:00, coliseo municipal de Ilo: asamblea para ratificar o rechazar el acta. <mark class="clave">El turno C presentó una moción para rechazarla</mark>. ${F.has('asamblea_si') ? 'La junta confirma tus veinte minutos de exposición.' : 'La junta insiste: quiere que vengas a exponer.'}</p><p>T. Cutipa</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Confirmar tu asistencia y pedir que también estén presentes Wilber y un miembro del comité paritario, para responder sobre seguridad.',
        res: { q: 'buena', fx: { confianza: 4, personas: 3 }, rel: { sindicato: 1 }, flags: ['asamblea_si'], responde: 'Señor Cutipa: confirmo mi asistencia el lunes a las 07:00 para exponer el contenido del acta y responder preguntas. Si la junta lo considera útil, me acompañará el Ing. Wilber Chambi para responder sobre el monitoreo de gases. Gracias por la invitación.',
          out: 'Cierras la laptop a las 19:15. En el estacionamiento, Kevin Mamani te espera apoyado en una moto. «El lunes le voy a preguntar todo», dice. «Ahí estaré», le contestas. Se va sin sonreír. El lunes dirá si el acuerdo vive.', kusi: ['animo', '¡El lunes, con la cara al frente!'] } },
      { id: 'b', label: 'Responder que la empresa respeta la autonomía de la asamblea y enviará un resumen escrito.',
        res: { q: 'aceptable', fx: { confianza: -1 }, flags: ['asamblea_no'], responde: 'Señor Cutipa: la empresa respeta la autonomía de la asamblea. Le enviaremos el lunes temprano un resumen escrito del acta. Atentamente.',
          out: 'Cierras la laptop a las 19:15. En el estacionamiento, Kevin Mamani te ve pasar y no dice nada. El lunes hablará él.', kusi: ['pensando', '¿Y quién explicará el acta?'] } },
    ],
    mirada: { ve: 'Dos semanas después del anuncio, la historia no terminó: un acuerdo no vale hasta que la base lo acepta. Lo que pase el lunes en el coliseo depende de todo lo que hiciste… y de lo que hagas ese día.' },
  },
];
