// Generalista de RR.HH. · Capítulo 9 · «El periodo de prueba» · Semana 2, jueves.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas:
// - TUO del D.Leg. 728 (D.S. 003-97-TR), art. 29 e), modificado por la Ley 31152: es nulo el despido por embarazo,
//   nacimiento y sus consecuencias o lactancia, también durante el periodo de prueba, siempre que el empleador haya
//   sido notificado documentalmente del embarazo antes del despido; no impide despedir por causa justa.
//   https://busquedas.elperuano.pe/normaslegales/ley-que-modifica-el-inciso-e-del-articulo-29-del-texto-unic-ley-n-31152-1940365-1/
//   https://img.lpderecho.pe/wp-content/uploads/2021/04/Ley-31152-LP.pdf
//   https://lpderecho.pe/ley-31152-trabajadoras-embarazadas-despedidas-solicitar-reposicion-pago-indemnizacion/
// - Periodo de prueba de tres meses (art. 10; citado en el capítulo 2).
// - Descanso médico sustentado (Ley 26790; citado en el capítulo 8).

export const CAP = {
  n: 9, titulo: 'El periodo de prueba', dia: 'Semana 2, jueves', foto: 'assets/foto/entrevista.webp',
  lugar: 'Oficina de RR.HH. · Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Cusco, jueves. Hace una semana entraron los primeros ingresos de la temporada. Verónica quiere saber «quién se queda y quién no», y el chef ya tiene una opinión. Amaneció con neblina sobre el Saqsaywaman.', boton: 'Abrir las evaluaciones',
  kusi: 'Evaluar es mirar lo que alguien hace, no lo que imaginas de él. ¡Con lupa y con justicia!',
  lead: 'Definiste criterios de evaluación, detectaste un comentario que no se podía usar, escuchaste a Luz Clarita sin invadirla, frenaste un despido nulo, le diste retroalimentación a Milagros y pensaste el futuro de Wendy.',
  reflexion: '¿Qué diferencia hay entre evaluar el desempeño de alguien y juzgar su vida?',
  siguiente: { n: 10, titulo: 'Dos semanas después', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'evaluaciones', p: 'Evaluación de los primeros ingresos', j: 'Verónica · Gerencia', d: 0, e: 'Hoy' },
  { id: 'luz', p: 'Luz Clarita · cocina', j: 'Chef Rolando', d: 0, e: 'Hoy' },
  { id: 'milagros', p: 'Milagros · recepción', j: 'Wendy', d: 0, e: 'Hoy' },
  { id: 'wendy', p: 'El futuro de Wendy', j: 'Verónica · Gerencia', d: 0, e: 'Esta semana' },
];

export const FUTURO = {
  criterios_objetivos: ['Evaluaste a los ingresos con criterios observables e iguales para todos.', 'Nadie puede decir que fue a dedo.'],
  nota_detectada: ['Detectaste en las notas del chef un comentario sobre un posible embarazo.', 'No se usó para decidir.'],
  pregunta_invasiva: ['Le preguntaste a Luz Clarita si estaba embarazada.', 'Se sintió expuesta.'],
  luz_protegida: ['Luz Clarita sigue en cocina, con tareas ajustadas y evaluada con los mismos criterios.', 'Su embarazo quedó comunicado por escrito.'],
  luz_movida: ['Pasaste a Luz Clarita a lavandería sin explicarle por qué.', 'Lo vivió como un castigo.'],
  luz_cortada: ['Terminaste el contrato de Luz Clarita «por rendimiento» en el periodo de prueba.', 'Puede reclamar la nulidad del despido.'],
  milagros_feedback: ['Le diste a Milagros una retroalimentación clara y con un acuerdo.', 'Llegará puntual.'],
  milagros_confundida: ['Milagros no entendió qué tenía que mejorar.', 'Se lo preguntará a Wendy.'],
  wendy_crece: ['Le propusiste a Verónica un plan para que Wendy crezca sin volver a cargarla de todo.', 'Se decide la próxima semana.'],
  wendy_apurada: ['Wendy fue nombrada supervisora de recepción sin cambiar su carga.', 'Ahora hace lo de siempre y además supervisa.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción, housekeeping y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  milagros: { n: 'Milagros Torres', sub: 'Recepcionista de la temporada', c: '#0E7C86' },
  luz: { n: 'Luz Clarita Apaza', sub: 'Ayudante de cocina de la temporada', c: '#B45309' },
};

export const WSP = [
  { chat: 'wendy', t: '06:50', de: 'Wendy', txt: 'Ya volví 🌞 Dormí tres noches seguidas. Mi mamá le manda saludos y una bolsa de habas.', si: 'wendy_descansa' },
  { chat: 'chef', t: '07:30', de: 'Chef Rolando', txt: 'Ya le dejé mis notas de los nuevos en su escritorio. La chica de Urubamba no va.' },
  { chat: 'luz', t: '13:10', de: 'Luz Clarita', txt: 'Gracias por no contarle a todos. Mañana le traigo el certificado de la posta 🙏', si: 'luz_protegida' },
  { chat: 'milagros', t: '15:40', de: 'Milagros', txt: 'Entendido. Desde mañana salgo 20 minutos antes. ¡Gracias por decírmelo de frente!', si: 'milagros_feedback' },
];

export const CORREOS = [
  { t: '07:10', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Los nuevos', html: '<p>Hace una semana que entraron. Antes de que arranque la temporada quiero saber quién se queda y quién no. El chef me dijo que tiene dudas con una de cocina. Mándame tu evaluación hoy.</p><p>V.</p>' },
];

export const QUIZ = [
  { q: '¿Se puede despedir a una trabajadora embarazada durante el periodo de prueba por estar embarazada?', ops: ['Sí, porque está en prueba', 'No: es un despido nulo, también en el periodo de prueba', 'Sí, si no ha cumplido un mes', 'Solo si lo aprueba la gerencia'], ok: 1, por: 'La Ley 31152 modificó el art. 29 e) del D.S. 003-97-TR: el despido por embarazo es nulo también durante el periodo de prueba, si el empleador fue notificado documentalmente.' },
  { q: '¿Qué condición exige la norma para esa protección?', ops: ['Ninguna', 'Que el empleador haya sido notificado documentalmente del embarazo antes del despido', 'Que tenga un año en la empresa', 'Que lo diga un compañero'], ok: 1, por: 'La protección aplica si el empleador fue notificado documentalmente del embarazo antes del despido.' },
  { q: '«Es muy calladita, no tiene carácter para cocina.» ¿Qué es esta nota?', ops: ['Un criterio objetivo', 'Un juicio sobre la persona, no una observación del trabajo', 'Un hecho', 'Una buena práctica'], ok: 1, por: 'Evaluar es observar conductas del trabajo: tiempos, calidad, seguridad.' },
  { q: 'Un trabajador faltó un día con descanso médico. ¿Cuenta como falta en su evaluación?', ops: ['Sí', 'No: es una ausencia justificada', 'Solo si es nuevo', 'Depende del jefe'], ok: 1, por: 'Un descanso médico sustentado es una ausencia justificada.' },
  { q: 'Para dar una retroalimentación útil sobre tardanzas, conviene…', ops: ['Decir «tienes que mejorar»', 'Dar el hecho, su efecto y un acuerdo concreto', 'Mandar un memo sin conversar', 'Comentarlo en el grupo'], ok: 1, por: 'Hecho, efecto y acuerdo: así la persona sabe qué cambiar.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'q1', t: '07:15', ch: 'documento', who: null, titulo: 'Con qué se evalúa', banner: 'assets/esc/lupa.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'etica'],
    body: (n, F) => `<p>${F.has('reserva_contratada') ? 'Tienes siete ingresos en prueba, incluidas las dos que entraron ayer.' : 'Tienes cinco ingresos en prueba.'} Antes de leer las notas del chef, defines con qué vas a evaluar a todos.</p><p><mark class="clave">Si el criterio no es el mismo para todos, no es un criterio</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada parte de la hoja de evaluación.', boton: 'Guardar la hoja',
    bloques: [
      { id: 'que', t: 'Qué se evalúa', n: 2, ops: [
        { id: 'q1', t: 'Tareas del puesto: tiempos, calidad y cumplimiento de normas de seguridad e higiene.', ok: true, por: 'Observable y del trabajo.' },
        { id: 'q2', t: 'Puntualidad y asistencia, descontando las ausencias justificadas.', ok: true, por: 'Un descanso médico no es una falta.' },
        { id: 'q3', t: 'Carácter y «si encaja» con el equipo.', ok: false, por: 'Es un juicio que deja entrar los prejuicios.' },
      ] },
      { id: 'quien', t: 'Quién evalúa', n: 1, ops: [
        { id: 'w1', t: 'El jefe directo, con ejemplos concretos, y RR.HH. revisa que se usen los mismos criterios para todos.', ok: true, por: 'Dos miradas y un estándar.' },
        { id: 'w2', t: 'Solo el jefe, como le parezca.', ok: false, por: 'Sin estándar, cada uno evalúa distinto.' },
      ] },
      { id: 'como', t: 'Cómo se comunica', n: 1, ops: [
        { id: 'c1', t: 'En una conversación privada, con lo que va bien, lo que debe mejorar y un plazo.', ok: true, por: 'Le das la oportunidad de mejorar.' },
        { id: 'c2', t: 'Con un mensaje de WhatsApp que diga si sigue o no.', ok: false, por: 'Nadie aprende de un «no sigues».' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'riesgosa' ? [] : ['criterios_objetivos'], cartera: { evaluaciones: q === 'riesgosa' ? 'Criterios vagos' : 'Hoja de evaluación con criterios iguales para todos' },
        out: q === 'buena' ? 'La hoja tiene cinco filas y una columna de ejemplos. La imprimes para el chef, Haydée y Wendy.' : q === 'aceptable' ? 'La hoja sirve, aunque deja una puerta abierta a la opinión.' : 'La hoja parece objetiva, pero cada jefe podrá poner lo que quiera.',
        pro: { ok: 'Criterios observables e iguales para todos protegen a los trabajadores y al hotel.', risk: '«Si encaja» es la puerta por donde entra la discriminación.', info: 'Pide siempre un ejemplo concreto detrás de cada calificación.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Mismo criterio para todos!' : '¿Ese criterio se puede observar?'],
      };
    },
    rules: [[BP, 'En el periodo de prueba se evalúa el trabajo con criterios observables, iguales para todos y comunicados en privado.']],
    mirada: {
      ve: 'El periodo de prueba no es un permiso para despedir sin razones: es el tiempo para ver si la persona y el puesto funcionan, con criterios que puedas explicar.',
      visual: { tipo: 'flujo', titulo: 'Evaluar en el periodo de prueba', pasos: ['Criterios iguales', 'Ejemplos concretos', 'Conversación privada', 'Plazo para mejorar', 'Decisión'] },
    },
  },
  {
    id: 'q2', t: '09:00', ch: 'documento', who: null, titulo: 'Las notas del chef', banner: 'assets/foto/mesa-papeles.webp', show: ['etica', 'cumplimiento', 'calidad'],
    body: () => `<p>El chef dejó una hoja de cuaderno, escrita con lapicero azul y una mancha de salsa huancaína. La lees dos veces.</p><p><mark class="clave">Hay notas que sirven para evaluar y otras que no se pueden usar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las notas que no deberían usarse para decidir.',
    doc: { t: 'Notas del chef sobre los nuevos', sub: 'Cocina · primera semana' },
    lines: [
      { id: 'embarazo', t: 'Luz Clarita: lenta en la estación fría, se marea con el olor de la freidora. Seguro está embarazada; mejor cortarla ahora que está en prueba.', bad: LEY, why: 'Decidir por un posible embarazo es discriminación, y despedir por embarazo es nulo, también en el periodo de prueba.' },
      { id: 'postres', t: 'Luz Clarita: buena mano para los postres; el suspiro limeño le sale mejor que a mí.' },
      { id: 'caracter', t: 'Luz Clarita: muy calladita, no tiene carácter para cocina.', bad: BP, why: 'Es un juicio sobre la persona, no una observación del trabajo.' },
      { id: 'kevin', t: 'Kevin: rápido, pero a veces se olvida los guantes en la estación de carnes.', duda: 'Es una observación útil del trabajo: va a la retroalimentación, no a una sanción.' },
      { id: 'ruben', t: 'Rubén (salón): faltó el miércoles.', bad: BP, why: 'Tenía descanso médico: es una ausencia justificada y no cuenta como falta.' },
      { id: 'tiempos', t: 'Ayudantes nuevos: tiempo promedio de mise en place de la mañana, 50 minutos (meta: 40).' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Pasas las notas del chef a tu evaluación tal como están. La palabra «embarazada» queda en un documento del hotel.' : `Marcas ${hitsLey} notas. Las que sirven las pasas a la hoja; las otras, no.`,
      flags: missLey ? [] : ['nota_detectada'], cartera: { luz: missLey ? 'Evaluada con una nota sobre un posible embarazo' : 'Nota discriminatoria detectada' },
      pro: { ok: 'Separar lo que se observa del trabajo de lo que se supone de la vida de alguien es la base de una evaluación justa.', risk: 'Una nota así, archivada, es la prueba de que la decisión tuvo un motivo prohibido.', info: 'Devuélvele al chef la hoja de criterios y pídele ejemplos del trabajo.' },
      kusi: missLey ? ['indignado', '¡Eso no se escribe ni se usa!'] : ['curioso', 'Lupa fina, ¡bien!'],
    }),
    rules: [[LEY, 'Es nulo el despido por embarazo, también durante el periodo de prueba (D.S. 003-97-TR, art. 29 e), modificado por la Ley 31152).']],
    mirada: {
      ve: 'El chef no escribió con mala intención: escribió lo que pensaba. Por eso RR.HH. revisa las evaluaciones antes de que se conviertan en decisiones.',
      visual: { tipo: 'balanza', a: { t: 'Sirve para evaluar', items: ['Buena mano para postres', 'Mise en place en 50 minutos', 'Se olvida los guantes'] }, b: { t: 'No se usa', items: ['«Seguro está embarazada»', '«No tiene carácter»', 'Una falta justificada'] } },
    },
  },
  {
    id: 'q3', t: '10:30', ch: 'presencial', who: null, titulo: 'Luz Clarita', banner: 'assets/foto/mentora.webp', lugar: 'Tu oficina, con la puerta entornada', show: ['personas', 'etica'],
    body: () => `<p>Luz Clarita tiene 21 años, es de Urubamba y llega con el gorro de cocina en la mano. Se sienta en la punta de la silla.</p><p>Es su conversación de la primera semana. <mark class="clave">Elige dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para tu conversación con Luz Clarita.',
    opts: [
      { id: 'siente', label: '¿Cómo te has sentido en la cocina esta semana?', info: '«Me gusta mucho. Pero el olor de la freidora me marea, y en la tarde me canso rápido.»' },
      { id: 'necesita', label: '¿Hay algo que necesites para trabajar mejor?', info: 'Se queda callada un rato. «Si le digo algo… ¿no me van a botar? Estoy embarazada de tres meses. En mi otro trabajo, cuando se enteraron, ya no me renovaron.»' },
      { id: 'embarazada', label: '¿Estás embarazada?', info: 'Se pone roja y mira al piso. «¿Quién le dijo?» Contesta que sí, pero ya no habla más.' },
      { id: 'cuesta', label: '¿Qué te ha costado más?', info: '«La estación fría, porque es de pie toda la mañana. Los postres sí me salen.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('embarazada') ? -2 : 3, etica: picks.includes('embarazada') ? -3 : 2 }, flags: picks.includes('embarazada') ? ['pregunta_invasiva'] : [],
      out: picks.includes('embarazada') ? 'Luz Clarita responde, pero se cierra. Sale de la oficina sin preguntarte nada.' : picks.includes('necesita') ? 'Luz Clarita te lo cuenta porque le diste espacio, no porque le preguntaste. Le explicas que puede comunicarlo por escrito y que eso la protege.' : 'Sabes cómo se siente, aunque todavía no sabes qué necesita.',
      kusi: picks.includes('embarazada') ? ['triste', 'Esa pregunta no te tocaba hacerla.'] : ['pensando', 'Abrir espacio, no interrogar.'],
    }),
    rules: [[BP, 'No preguntes por el embarazo ni por la salud de una persona: abre espacio para que cuente lo que necesite.']],
    mirada: {
      ve: 'Muchas trabajadoras jóvenes esconden su embarazo porque ya perdieron un trabajo por eso. Preguntar directamente las expone; abrir espacio les permite decidir qué contar.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le dirías a Luz Clarita', txt: 'Si quieres, puedes comunicarlo por escrito a RR.HH. con el certificado de la posta. Eso no te pone en riesgo: te protege. Y vamos a ajustar tus tareas para que trabajes bien.' },
    },
  },
  {
    id: 'q4', t: '12:00', ch: 'presencial', who: 'chef', titulo: '«Ahora que está en prueba»', banner: 'assets/foto2/revisan.webp', lugar: 'Cocina, después del servicio de desayuno', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>${F.has('insulto_registrado') ? 'Desde la llamada de atención, el chef mide más sus palabras.' : 'El chef seca un cuchillo con el mandil.'} «¿Ya vio mis notas? Lo de la chica de Urubamba es fácil: <mark class="clave">está en prueba, se le termina y listo</mark>. Necesito gente que aguante el calor en temporada.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Terminarle el contrato en el periodo de prueba «por rendimiento», sin mencionar el embarazo.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6, personas: -4 }, rel: { chef: 1 }, flags: ['luz_cortada'], cartera: { luz: 'Contrato terminado en prueba' },
          out: 'Luz Clarita recibe la carta en tu oficina. No llora. Solo pregunta: «¿Es por lo que le conté?». No sabes qué responder.',
          pro: { ok: 'El chef queda conforme.', risk: 'Si el hotel sabía del embarazo, el despido puede declararse nulo aunque la carta diga «rendimiento». Y la nota del chef es una prueba.' },
          kusi: ['indignado', '¡Eso es un despido nulo!'] } },
      { id: 'b', label: 'Pasarla a lavandería «para que esté más tranquila», sin explicarle por qué.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -3 }, rel: { chef: 1 }, flags: ['luz_movida'], cartera: { luz: 'Movida a lavandería sin explicación' },
          out: 'Luz Clarita dobla sábanas en la lavandería, junto a la secadora. Se pregunta qué hizo mal.',
          pro: { ok: 'La sacas de la freidora.', risk: 'Moverla sin conversarlo, a un puesto distinto del que fue contratada, se parece a un castigo.' },
          kusi: ['triste', 'Sin explicación, parece castigo.'] } },
      { id: 'c', label: 'Decirle que no: despedirla por su embarazo es nulo, también en prueba. Ajustar sus tareas lejos de la freidora y evaluarla como a todos.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, personas: 4 }, rel: { chef: 0 }, flags: ['luz_protegida'], cartera: { luz: 'Sigue en cocina, tareas ajustadas, evaluación igual' },
          out: 'El chef resopla: «¿Y quién hace la freidora?». Le propones a Kevin, con guantes. Lo piensa. «Ya. Que se quede en postres y en la fría. Pero si no da, me lo dice.» Le respondes que sí, con los mismos criterios que a todos.',
          pro: { ok: 'Proteges a la trabajadora, al hotel y al chef de una decisión que no se sostiene.', risk: 'El chef necesita ver que la solución funciona en la operación: acompáñalo la primera semana.', info: 'La protección no impide despedir por causa justa; impide hacerlo por el embarazo.' },
          kusi: ['celebra', '¡Postres para Luz Clarita!'] } },
    ],
    rules: [[LEY, 'Es nulo el despido por embarazo, nacimiento o lactancia, también durante el periodo de prueba, si el empleador fue notificado documentalmente (Ley 31152).']],
    mirada: {
      ve: 'El periodo de prueba no es tierra de nadie. La ley protege a la trabajadora embarazada también ahí. Y el chef tiene una preocupación real, la freidora en temporada, que se resuelve reorganizando la cocina, no sacando a una persona.',
      visual: { tipo: 'cambio', titulo: 'De «se le termina» a «se reorganiza»', pares: [['Cortarla en prueba', 'Seguir con los mismos criterios'], ['Freidora y calor', 'Postres y estación fría'], ['La nota del chef', 'Una evaluación con ejemplos']] },
      normas: [{ ley: 'D.S. 003-97-TR, art. 29 e), modificado por la Ley 31152', dice: 'Es nulo el despido que tenga por motivo el embarazo, el nacimiento y sus consecuencias o la lactancia, también cuando se efectúa durante el periodo de prueba, siempre que el empleador haya sido notificado documentalmente del embarazo antes del despido. No impide despedir por causa justa.', practica: 'Si una trabajadora comunica su embarazo por escrito, cualquier decisión sobre ella debe sostenerse en criterios del trabajo, documentados e iguales para todos.' }],
    },
  },
  {
    id: 'q5', t: '14:30', ch: 'whatsapp', who: null, titulo: 'Milagros', banner: 'assets/foto2/pasillo.webp', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Wendy te cuenta que Milagros es buenísima con los huéspedes, pero llegó tarde tres veces esta semana: 7:05, 7:12 y 7:08.${F.has('milagros_recibo') ? ' Y sigue con recibo por honorarios, aunque tiene horario fijo.' : ''} Milagros está en su descanso y le escribes.</p>`,
    chat: ['Hola 😊 Wendy me dijo que querías hablar conmigo. ¿Hice algo mal?'],
    type: 'compose', enviaA: 'milagros', para: 'Para: Milagros Torres · Recepcionista', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'bien', t: 'Lo que va bien', ops: [
        { id: 'b1', t: 'Nada grave, Milagros. Primero lo bueno: los huéspedes te adoran, y el check-in del grupo de 40 salió gracias a ti.', ok: true, por: 'Concreto y verdadero.' },
        { id: 'b2', t: 'Hola, sí, hay un tema.', ok: null, por: 'La asusta sin decirle nada.' },
      ] },
      { id: 'hecho', t: 'El hecho', ops: [
        { id: 'h1', t: 'Esta semana entraste tres veces después de las 7:00, y a esa hora Sonia se queda sola con el cambio de turno.', ok: true, por: 'Hecho y efecto.' },
        { id: 'h2', t: 'Tienes que ser más responsable.', ok: false, por: 'Un juicio que no dice qué cambiar.' },
      ] },
      { id: 'acuerdo', t: 'El acuerdo', ops: [
        { id: 'a1', t: '¿Qué te está pasando con la hora? Si es el transporte, vemos juntas qué hacer. Lo revisamos el viernes de la próxima semana.', ok: true, por: 'Pregunta la causa y pone una fecha.' },
        { id: 'a2', t: 'Si se repite, se te termina el contrato.', ok: false, por: 'Amenaza antes de entender la causa.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.acuerdo === 'a2', buenas = ['b1', 'h1', 'a1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -3 : 1, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['milagros_feedback'] : ['milagros_confundida'], cartera: { milagros: q === 'buena' ? 'Retroalimentación con acuerdo' : 'Retroalimentación poco clara' },
        out: q === 'buena' ? 'Milagros responde: «La combi de Poroy se llena a las 6:30. Voy a tomar la de las 6:10». Un problema resuelto con una pregunta.' : mal ? 'Milagros responde: «Ok». Una hora después, Wendy te cuenta que Milagros está pensando renunciar.' : 'Milagros responde: «Perdón, voy a tratar». No sabe bien qué tratar.',
        pro: { ok: 'Hecho, efecto y una pregunta por la causa: así una retroalimentación se convierte en un cambio.', risk: 'Amenazar a alguien que hace bien su trabajo por una causa que no conoces hace que la pierdas.', info: 'En Cusco, el transporte desde Poroy, San Jerónimo o Santiago explica muchas tardanzas.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡La combi de las 6:10!' : mal ? 'La asustaste…' : '¿Qué tenía que cambiar?'],
      };
    },
    rules: [[BP, 'Retroalimentación: lo que va bien, el hecho con su efecto, la causa y un acuerdo con fecha.']],
    mirada: { ve: 'En el periodo de prueba, la retroalimentación temprana es lo que permite que alguien que vale la pena se quede.' },
  },
  {
    id: 'q6', t: '16:00', ch: 'presencial', who: 'veronica', titulo: '¿Supervisora?', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la gerencia', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('wendy_descansa') ? 'Wendy volvió hoy con otra cara.' : 'Wendy sigue en recepción, con ojeras.'} Verónica tiene una idea: «Quiero nombrarla supervisora de recepción desde el lunes. Se lo merece, y así se queda con nosotros».</p><p>Es lo que Wendy quiere: crecer en el hotel. <mark class="clave">Pero ¿cómo?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Apoyar el ascenso, pero con un plan: qué tareas deja, quién las toma, su nuevo sueldo por escrito y una conversación con ella antes de anunciarlo.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { veronica: 1, wendy: 1 }, flags: ['wendy_crece'], cartera: { wendy: 'Ascenso con plan de tareas, sueldo y conversación' },
          out: 'Verónica toma nota: «Tienes razón: si la asciendo con todo lo que ya hace, la quemo de nuevo». Lo verán con Wendy la próxima semana.',
          pro: { ok: 'Un ascenso que reparte la carga es un reconocimiento. Uno que la suma es otra trampa.', info: 'Pregúntale a Wendy qué tareas quiere dejar: ella sabe cuáles le pesan.' },
          kusi: ['feliz', '¡Crecer sin quemarse!'] } },
      { id: 'b', label: 'Anunciarlo hoy en el grupo: es una buena noticia y la va a motivar.',
        res: { q: 'riesgosa', fx: { personas: -2, confianza: 1 }, rel: { veronica: 1 }, flags: ['wendy_apurada'], cartera: { wendy: 'Ascendida hoy, con la misma carga' },
          out: 'El grupo se llena de aplausos. Wendy contesta con un corazón. A las 19:00 sigue en recepción, ahora también revisando los turnos de los demás.',
          pro: { ok: 'Reconoces a Wendy de inmediato.', risk: 'Un ascenso sin cambiar su carga ni conversarlo antes puede ser la gota que rebalse el vaso.' },
          kusi: ['preocupado', '¿Supervisora y todo lo demás?'] } },
    ],
    mirada: { ve: 'Ascender a quien se estaba quemando puede ser la mejor o la peor decisión. La diferencia está en qué deja de hacer.' },
  },
  {
    id: 'q7', t: '18:30', ch: 'correo', who: 'veronica', titulo: 'La evaluación, para Verónica', banner: 'assets/foto/revisa.webp', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('luz_protegida') ? 'Luz Clarita se fue a su casa con una bolsa de suspiros que le sobraron.' : F.has('luz_cortada') ? 'Luz Clarita se fue a su casa con su carta en la mochila.' : 'Luz Clarita terminó su turno en silencio.'} Verónica espera tu evaluación.</p><p>Mañana se cumplen dos semanas desde que llegaste. <mark class="clave">Que el correo sea justo con todos</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Quién sigue, qué debe mejorar cada uno con fecha, el caso de Luz Clarita con la regla que aplica y lo que necesitas que ella decida.',
        res: { q: 'buena', fx: { confianza: 4, etica: 2 }, rel: { veronica: 1 }, responde: 'Verónica: los ingresos siguen; Kevin debe usar guantes en carnes, Milagros ajustar su horario de llegada (lo revisamos el próximo viernes). Luz Clarita comunicó su embarazo: sigue en postres y estación fría, evaluada con los mismos criterios; despedirla por eso sería nulo, aun en prueba. Necesito que apruebe el plan de ascenso de Wendy.',
          out: 'Verónica responde: «Gracias por cuidarnos también de nosotros mismos». Mañana es viernes: tu última reunión de la quincena con ella.', kusi: ['celebra', '¡Justa con todos!'] } },
      { id: 'b', label: 'Una tabla con «sigue» o «no sigue» para cada uno.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Verónica: le adjunto la tabla con quién sigue y quién no.',
          out: 'Verónica responde: «¿Y por qué?». Mañana tendrás que explicarlo en persona.', kusi: ['pensando', 'Le faltó el porqué.'] } },
    ],
    mirada: { ve: 'Una evaluación de periodo de prueba bien escrita protege a todos: dice qué se vio, con qué criterio y qué se espera.' },
  },
];
