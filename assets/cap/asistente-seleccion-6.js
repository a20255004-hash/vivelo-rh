// Asistente de Selección · Capítulo 6 · «La entrevista» · Semana 2, lunes · Clínica del Misti, Arequipa.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 26772 y D.S. 002-98-TR: no discriminación en el acceso al empleo (edad, sexo, origen, entre otros). Capítulo 2.
// - Ley 29733 (datos personales): las notas de entrevista son datos personales y se guardan con acceso restringido. Capítulo 1.
// - Ley 29973, art. 50: ajustes razonables también en los métodos de entrevista. Capítulo 5.

export const CAP = {
  n: 6, titulo: 'La entrevista', dia: 'Semana 2, lunes', foto: 'assets/foto/entrevista.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '05:50', fin: '18:30', cierreHora: '18:15',
  apertura: 'Semana 2, lunes, seis menos diez. Hace siete grados, el Misti tiene un poco de nieve en la punta y en la sala de reuniones del piso 3 Sor Elena ya tiene sus cuatro preguntas impresas. Hoy empiezan las entrevistas.', boton: 'Entrar a la sala',
  kusi: 'Hoy tu trabajo es mirar y escribir lo que ves, no lo que crees. ¡Dale!',
  lead: 'Escuchaste a las postulantes, escribiste notas con hechos, defendiste a una técnica que no encajaba en la foto de nadie y le diste a un postulante nervioso la oportunidad de mostrar lo que sabe.',
  reflexion: '¿Qué escribiste hoy que fuera un juicio disfrazado de dato?',
  siguiente: { n: 7, titulo: 'Las referencias', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Selección en 5 días hábiles' },
  { id: 'entrev', p: 'Entrevistas', j: 'Sor Elena y supervisoras', d: 0, e: '21 hoy' },
  { id: 'notas', p: 'Notas de entrevista', j: 'Tú', d: 0, e: 'Por escribir' },
  { id: 'jhon', p: 'Caso Jhon Ccori', j: 'Milena', d: 0, e: 'Pendiente GRE Puno' },
];

export const FUTURO = {
  notas_objetivas: ['Tus notas de entrevista recogen hechos y frases textuales.', 'Las usarán para decidir el jueves.'],
  notas_juicio: ['Tus notas mezclan hechos con impresiones.', 'Alguien las leerá y no sabrá qué pasó en la sala.'],
  ofelia_defendida: ['Pediste que a Ofelia se la evalúe por lo que respondió, no por su edad.', 'Ofelia sigue en el proceso.'],
  ofelia_fuera: ['Ofelia quedó fuera «por la edad», sin que nadie lo dijera así.', 'Ella lo va a sospechar.'],
  angel_pregunta: ['Le diste a Ángel una segunda forma de responder y contó su caso.', 'Sor Elena quiere verlo en el piso.'],
  angel_cortado: ['La entrevista de Ángel se cortó a los cinco minutos.', 'No contó lo que sabía.'],
  notas_guardadas: ['Las notas están en la carpeta restringida de Selección.', 'Nadie las tiene en el celular.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  sup: { n: 'Supervisoras de piso', sub: 'Grupo de Enfermería', c: '#7CC6EA' },
  angel: { n: 'Ángel Mamani', sub: 'Postulante', who: 'angel' },
};

export const WSP = [
  { chat: 'milena', t: '05:40', de: 'Milena', txt: 'Ánimo 💪 Hoy solo escuchas y anotas. Sor Elena decide; tú haces que su decisión quede bien escrita.' },
  { chat: 'milena', t: '05:42', de: 'Milena', txt: 'Ah: el viernes revisé lo de Ángel. La práctica fue buena; lo devolví a la lista para que lo vea Enfermería.', si: 'angel_fuera' },
  { chat: 'sup', t: '09:20', de: 'Lic. Pilar', txt: 'Oigan, la señora Ofelia que entrevistó Sor Elena… ¿no es muy mayor para noches? Pregunto nomás 👀' },
  { chat: 'angel', t: '15:10', de: 'Ángel', txt: 'Gracias, señorita. Cuando me preguntó de otra forma, me acordé de todo 🙏', si: 'angel_pregunta' },
  { chat: 'sor', t: '17:45', de: 'Sor Elena', txt: 'Tus notas de hoy las leí en dos minutos y entendí todo. Así quiero las de mañana.', si: 'notas_objetivas' },
];

export const CORREOS = [
  { t: '07:40', de: 'Dr. Fernando Linares', para: 'Selección', asunto: 'Avance', html: '<p>¿Cuántas aprobadas van? Necesito un número hoy a las 5.</p><p>F. Linares</p>' },
  { t: '12:10', de: 'Milena Cáceres', para: 'Asistente de Selección', asunto: 'Jhon', html: '<p>La GRE Puno todavía no responde. Jhon tiene entrevista mañana con la condición de presentar la confirmación antes de cualquier oferta.</p><p>Milena</p>', si: 'jhon_verificado' },
];

export const QUIZ = [
  { q: '¿Cuál es una nota de entrevista objetiva?', ops: ['«Se le ve mayor para noches»', '«Contó un caso de hipoglucemia: avisó a la enfermera a los 5 minutos y controló glucosa»', '«Muy simpática»', '«No me convenció»'], ok: 1, por: 'Una nota objetiva recoge lo que la persona dijo o hizo.' },
  { q: 'Una supervisora pregunta si una postulante de 52 años «no es muy mayor». ¿Qué respondes?', ops: ['Que sí', 'Que la edad no es criterio y que se evalúa lo que respondió', 'Que no sabes', 'Que lo decida Linares'], ok: 1, por: 'La edad no es un criterio de selección (Ley 26772). Se evalúa la competencia.' },
  { q: 'Un postulante se bloquea con una pregunta. Lo mejor es…', ops: ['Cortar la entrevista', 'Reformular la pregunta de forma concreta y darle un momento', 'Responder por él', 'Burlarse para relajar'], ok: 1, por: 'Reformular sin cambiar lo que se evalúa permite ver lo que sabe.' },
  { q: '¿Dónde se guardan las notas de entrevista?', ops: ['En el WhatsApp del grupo', 'En la carpeta restringida de Selección', 'En una libreta que llevas a tu casa', 'En el mural'], ok: 1, por: 'Son datos personales: acceso restringido (Ley 29733).' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '06:00', ch: 'presencial', who: 'sor', titulo: 'La primera: Ofelia', banner: 'assets/foto/entrevista-cv.webp', lugar: 'Sala de reuniones, piso 3', show: ['calidad', 'personas'],
    body: () => `<p>Ofelia Quispe, 52 años, de Ilave, Puno. Veinte años como técnica en el Hospital de Puno; se mudó a Arequipa para estar cerca de su nieta. Viene con chompa de alpaca y las manos frías.</p><p>Sor Elena le hace su pregunta: «Cuénteme de un paciente que empeoró». Tú <mark class="clave">escuchas y tomas nota</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Respuesta 1 · el caso', 'Ofelia habla despacio, mirando sus manos', '«Un señor diabético, de noche. Estaba sudando y hablaba raro. Le tomé la glucosa: 45. Avisé a la enfermera de turno y seguí controlando cada quince minutos hasta que se recuperó.»'],
      ['Respuesta 2 · la familia', 'Sonríe por primera vez', '«Su esposa solo hablaba quechua y estaba asustada. Le expliqué en quechua lo que pasaba. Se calmó y nos ayudó a que él tome el jugo.»'],
      ['Respuesta 3 · lo difícil', 'Se le quiebra un poco la voz', '«Las noches me cansan más que antes, para qué le voy a mentir. Pero nunca he faltado a un turno. Me organizo y duermo de día.»'],
    ],
    prompt: '¿Qué anotas en tu libreta?',
    choices: [
      { id: 'a', label: 'Lo que contó, con sus palabras: el caso de glucosa 45, el aviso, los controles cada 15 minutos, el quechua con la familia y que nunca faltó a un turno.',
        res: { q: 'buena', fx: { calidad: 5, personas: 3 }, rel: { sor: 1 },
          out: 'Sor Elena ve tu libreta de reojo cuando Ofelia sale. «Eso. Eso es lo que me importa.»',
          pro: { ok: 'Anotas hechos y frases textuales: quien lea entiende qué pasó.', info: 'Anota también lo difícil que la persona cuenta: no para usarlo en su contra, sino para que se evalúe completo.' },
          kusi: ['celebra', '¡Hechos, no impresiones!'] } },
      { id: 'b', label: '«Mayor, cansada para noches, buena con quechua.»',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -3 },
          out: 'Tres palabras que cualquiera que lea entenderá como «no». Pero Ofelia contó un caso impecable que no está en tu nota.',
          pro: { ok: 'Breve.', risk: '«Mayor» no es un hecho de la entrevista: es un prejuicio.' },
          kusi: ['preocupado', '¿Y el caso de la glucosa?'] } },
    ],
    rules: [[BP, 'Anota lo que la persona dijo o hizo, no lo que te pareció.']],
    mirada: { ve: 'Ofelia dijo algo honesto: que las noches la cansan. Una nota con juicios convierte esa honestidad en una razón para descartarla. Una nota con hechos muestra lo que importa: que reconoció una hipoglucemia, avisó y no ha faltado nunca.' },
  },
  {
    id: 'f2', t: '07:15', ch: 'documento', who: null, titulo: 'Pasar en limpio', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de Selección', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Terminaron las tres de la mañana. Pasas tus notas al formato de la clínica mientras te tomas un té de anís que ya se enfrió.</p><p>Cada nota tiene tres partes. <mark class="clave">Elige qué entra en cada una</mark>.</p>`,
    type: 'builder', prompt: 'Arma la nota de entrevista de Ofelia.', boton: 'Guardar la nota',
    bloques: [
      { id: 'hechos', t: 'Lo que respondió', n: 2, ops: [
        { id: 'h1', t: 'Caso real: hipoglucemia nocturna (glucosa 45), avisó a la enfermera, controles cada 15 minutos.', ok: true },
        { id: 'h2', t: 'Explicó en quechua a la familia y logró su colaboración.', ok: true },
        { id: 'h3', t: 'Parece una persona humilde y de su casa.', ok: false, por: 'Impresión personal, no un hecho de la entrevista.' },
      ] },
      { id: 'criterio', t: 'Frente a los criterios', n: 2, ops: [
        { id: 'c1', t: 'Reconoce signos de alarma y avisa a tiempo: cumple.', ok: true, por: 'El criterio de Sor Elena, aplicado a lo que dijo.' },
        { id: 'c2', t: 'Turno noche: dice que la cansa, se organiza y no ha faltado en 20 años.', ok: true, por: 'Recoges lo difícil y lo que hace con eso.' },
        { id: 'c3', t: 'Por su edad, podría tener problemas de salud a futuro.', ok: false, por: 'Suposición por edad. Discriminatoria y sin base.' },
      ] },
      { id: 'cierre', t: 'Cierre', n: 1, ops: [
        { id: 'k1', t: 'Recomendación de la evaluadora (Sor Elena): pasa a la siguiente etapa.', ok: true, por: 'Quien decide, decide; tú registras.' },
        { id: 'k2', t: 'Mi opinión: no sé si encaja con el equipo joven del piso.', ok: false, por: '«Encajar» sin explicar qué significa suele esconder un prejuicio.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'riesgosa' ? -3 : 2 },
        flags: [q === 'riesgosa' ? 'notas_juicio' : 'notas_objetivas'], cartera: { notas: q === 'riesgosa' ? 'Notas con juicios personales' : 'Notas con hechos y criterios' },
        out: q === 'buena' ? 'La nota de Ofelia cabe en media página. Cualquiera que la lea sabe qué contó y por qué Sor Elena dijo que sí.' : q === 'aceptable' ? 'La nota está bien, aunque se coló una frase que no es un hecho.' : 'La nota dice más de ti que de Ofelia.',
        pro: { ok: 'Hechos, criterio y decisión de quien evalúa.', risk: 'Las notas con juicios pueden usarse para descartar a alguien sin decir la razón real.', info: 'Lee tu nota como si fueras la postulante: ¿te parecería justa?' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Nota que cualquiera entiende!' : 'Revisa esa frase.'],
      };
    },
    rules: [[LEY, 'Ley 26772: la edad no es un criterio de selección.']],
    mirada: { ve: 'Las notas de entrevista viajan: las lee Milena, Linares, quizá un inspector algún día. Una buena nota permite a otra persona entender por qué se decidió lo que se decidió.', visual: { tipo: 'flujo', titulo: 'Una nota de entrevista', pasos: ['Lo que respondió', 'Frente a cada criterio', 'Decisión de quien evalúa'] } },
  },
  {
    id: 'f3', t: '09:30', ch: 'whatsapp', who: null, titulo: '«¿No es muy mayor?»', banner: 'assets/foto2/mesa-mujeres.webp', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>En el grupo de supervisoras, la Lic. Pilar pregunta si Ofelia «no es muy mayor para noches». Dos responden con caritas pensativas. Sor Elena no está en el grupo.</p><p><mark class="clave">Responde al grupo</mark>.</p>`,
    type: 'compose', enviaA: 'sup', para: 'Para: Supervisoras de piso', boton: 'Enviar al grupo',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'crit', t: 'El criterio', ops: [
        { id: 'c1', t: 'La edad no es criterio de selección: evaluamos lo que cada persona responde y hace.', ok: true, por: 'Claro y sin acusar.' },
        { id: 'c2', t: 'Jaja, yo también pensé lo mismo 😅', ok: false, por: 'Validas el prejuicio en un grupo de evaluadoras.' },
      ] },
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'Ofelia contó un caso de hipoglucemia nocturna bien manejado y no ha faltado a un turno en 20 años.', ok: true, por: 'Respondes con hechos, sin revelar datos personales.' },
        { id: 'd2', t: 'Les mando su CV para que vean.', ok: false, por: 'El CV no va al grupo.' },
      ] },
      { id: 'invita', t: 'Cierre', ops: [
        { id: 'i1', t: 'Si alguna tiene dudas sobre un criterio, lo vemos con las preguntas de Sor Elena 🙌', ok: true, por: 'Llevas la duda al formato común.' },
        { id: 'i2', t: 'Igual Sor Elena decide.', ok: null, por: 'Cierto, pero no corrige la idea.' },
      ] },
    ],
    res: sel => {
      const mal = sel.crit === 'c2' || sel.dato === 'd2', buenas = ['c1', 'd1', 'i1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { etica: mal ? -5 : 4, cumplimiento: mal ? -3 : 3, personas: q === 'buena' ? 2 : 0 }, flags: [mal ? 'ofelia_fuera' : 'ofelia_defendida'],
        out: q === 'buena' ? 'Pilar responde: «Tienes razón, disculpen». La Lic. Rosario pone un 👏. El tema se cierra.' : mal ? 'El grupo sigue con bromas sobre la edad. En la tarde, alguien propone «priorizar a las jóvenes».' : 'Pilar responde «ok». No queda claro que la edad no se mira.',
        pro: { ok: 'Corriges un prejuicio en público, con respeto y con un hecho.', risk: 'Lo que se tolera en un grupo de evaluadoras termina en la decisión.' },
        kusi: [q === 'buena' ? 'animo' : mal ? 'indignado' : 'pensando', q === 'buena' ? 'Firme y amable.' : mal ? '¡Eso no se valida!' : 'Faltó decirlo claro.'],
      };
    },
    rules: [[LEY, 'Ley 26772: no se discrimina por edad en el acceso al empleo.']],
    mirada: { ve: 'Pilar no es mala persona: tiene una idea que mucha gente tiene. Corregirla con un dato, sin humillarla, es más eficaz que callarse o que pelear. Y protege a Ofelia sin exponer su CV.' },
  },
  {
    id: 'f4', t: '11:40', ch: 'sistema', who: null, titulo: 'La matriz de la mañana', banner: 'assets/esc/planilla.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Linares quiere un número a las 5. Sor Elena te pide que marques en la matriz <mark class="clave">las tres señales</mark> que más pesan para recomendar a alguien.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres señales.', boton: 'Marcar', resumen: 'Marcaste',
    cols: ['Señal', 'De dónde sale'],
    rows: [
      { id: 'caso', cells: ['Cuenta un caso real con lo que hizo', 'Pregunta 1 de Sor Elena'] },
      { id: 'avisa', cells: ['Dice cuándo y a quién avisa', 'Pregunta del error'] },
      { id: 'noche', cells: ['Explica cómo maneja el turno noche', 'Pregunta 3'] },
      { id: 'seguro', cells: ['Habla con seguridad y sin pausas', 'Impresión de la sala'] },
      { id: 'joven', cells: ['Se ve con energía', 'Impresión de la sala'] },
      { id: 'parecido', cells: ['Se parece a las técnicas que ya tenemos', 'Impresión de la sala'] },
    ],
    score: { caso: 3, avisa: 3, noche: 2, seguro: -1, joven: -3, parecido: -3 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : -1, etica: picks.includes('joven') || picks.includes('parecido') ? -3 : 1 },
        cartera: { entrev: q === 'buena' ? 'Matriz con señales del trabajo' : 'Matriz con impresiones' },
        out: q === 'buena' ? 'Tus tres señales salen de las preguntas, no de la sala. A las 5, Linares recibe: «9 entrevistadas, 6 recomendadas».' : 'La matriz premia a quien habla bonito o se parece al equipo actual.',
        pro: { ok: 'Las señales salen de respuestas, no de impresiones.', risk: '«Se parece a las que ya tenemos» es la forma más común de excluir sin darse cuenta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Señales que se pueden explicar!' : 'Hablar seguro no es cuidar bien.'],
      };
    },
    mirada: { ve: 'Hablar con seguridad no es lo mismo que saber. Muchas buenas técnicas son tímidas: avisan cuando algo va mal, que es justo lo que Sor Elena pidió el primer día.', visual: { tipo: 'matriz', x: 'Fácil de impresionar', y: 'Dice algo del trabajo', cuadrantes: ['Señal real', 'Señal real y vistosa', 'Ruido', 'Ruido vistoso'], items: [['Caso real', .2, .9], ['A quién avisa', .15, .85], ['Turno noche', .3, .7], ['Habla seguro', .8, .35], ['Se ve con energía', .85, .1], ['Se parece al equipo', .7, .05]] } },
  },
  {
    id: 'f5', t: '14:30', ch: 'presencial', who: 'angel', titulo: 'Ángel se bloquea', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de reuniones, piso 3', show: ['personas', 'calidad', 'etica'],
    body: (n, F) => `<p>Cambio de turno de la tarde. La Lic. Rosario entrevista a Ángel. ${F.has('angel_segunda_mirada') || F.has('angel_fuera') ? 'En la nota del viernes dice: «explorar cómo maneja la presión con un caso real».' : ''}</p><p>Rosario pregunta: «Cuénteme de un paciente que empeoró». Ángel abre la boca y no sale nada. Pasan diez segundos. Rosario mira su reloj y <mark class="clave">empieza a cerrar la carpeta</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirle a Rosario permiso para reformular: «Ángel, en tus prácticas en el Honorio Delgado, ¿hubo algún paciente que te preocupó? ¿Qué hiciste?».',
        res: { q: 'buena', fx: { personas: 5, calidad: 3 }, rel: { angel: 1 }, flags: ['angel_pregunta'],
          out: 'Ángel respira. Cuenta de una señora con fiebre alta en la madrugada: la vio temblando, le tomó la temperatura, avisó a la enfermera y no se movió de su lado. Rosario vuelve a abrir la carpeta y escribe.',
          pro: { ok: 'Cambias la forma de la pregunta, no lo que se evalúa.', risk: 'Interrumpir a la evaluadora puede molestarla: pide permiso.', info: 'Muchas personas nerviosas responden mejor a una pregunta concreta que a una abstracta.' },
          kusi: ['celebra', '¡Ahí estaba lo que sabía!'] } },
      { id: 'b', label: 'Dejar que Rosario cierre: ella es la evaluadora y el piso tiene presión.',
        res: { q: 'aceptable', fx: { tiempo: 1, personas: -3 }, flags: ['angel_cortado'],
          out: 'La entrevista dura cinco minutos. En la nota queda: «no responde la pregunta del caso». Ángel sale mirando el piso.',
          pro: { ok: 'Respetas el rol de la evaluadora.', risk: 'Una entrevista cortada no mide lo que sabe: mide cuánto lo asusta una entrevista.' },
          kusi: ['triste', 'No alcanzó a mostrar nada.'] } },
      { id: 'c', label: 'Ayudarlo: «Seguro has visto pacientes con fiebre, ¿no? ¿Avisarías a la enfermera, verdad?».',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -2 }, flags: ['angel_pregunta'],
          out: 'Ángel dice «sí, sí, avisaría». Rosario te mira seria: «Eso se lo dijiste tú». La respuesta no vale.',
          pro: { ok: 'Intentas ayudarlo.', risk: 'Darle la respuesta lo perjudica: ahora nadie sabe qué habría hecho él.' },
          kusi: ['preocupado', 'Le diste la respuesta…'] } },
    ],
    rules: [[BP, 'Reformular una pregunta para hacerla concreta es válido; sugerir la respuesta, no.']],
    mirada: { ve: 'Ángel se bloquea en las entrevistas, no necesariamente con los pacientes. Una pregunta concreta, sobre algo que vivió, permite separar el miedo a la entrevista de la falta de conocimiento. Lo que no puedes hacer es responder por él.', visual: { tipo: 'cambio', titulo: 'La misma pregunta, otra forma', pares: [['«Cuénteme de un paciente que empeoró»', '«En tus prácticas, ¿algún paciente te preocupó?»'], ['Silencio', '«¿Qué hiciste?»'], ['«¿Avisarías, verdad?»', 'Esperar su respuesta']] } },
  },
  {
    id: 'f6', t: '17:50', ch: 'correo', who: null, titulo: 'Las notas en el celular', banner: 'assets/esc/meta.webp', show: ['cumplimiento', 'confianza'],
    mail: { from: 'Milena Cáceres', to: 'Asistente de Selección', asunto: 'Notas de hoy' },
    body: (n, F) => `<p>${F.has('notas_objetivas') ? 'Leí tus notas: impecables.' : 'Leí tus notas. Hay frases que tenemos que conversar.'} Una cosa: Rosario me dice que tomó fotos de sus hojas de entrevista con el celular «para pasarlas en limpio en su casa».</p><p><mark class="clave">¿Qué hacemos?</mark></p><p>Milena</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Proponer que mañana las notas se escriban directo en la tablet de Selección o en hojas que se quedan en la carpeta, y pedirle a Rosario que borre las fotos.',
        res: { q: 'buena', fx: { cumplimiento: 4, confianza: 3 }, rel: { milena: 1 }, flags: ['notas_guardadas'], cartera: { notas: 'Notas en carpeta restringida' },
          responde: 'Propongo que mañana todas escriban en la tablet de Selección o en hojas que se quedan en la carpeta. Le pido a Rosario, con cariño, que borre las fotos: son datos de postulantes.',
          out: 'Milena: «Perfecto. Mañana llevo la tablet. Prepárate: mañana toca llamar referencias, y siempre hay una que no cuadra».', kusi: ['animo', 'Datos cuidados, sin regañar a nadie.'] } },
      { id: 'b', label: 'No decir nada: Rosario está ayudando y no hay que incomodarla.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4 },
          responde: 'Mejor no le digamos nada, que nos está ayudando un montón.',
          out: 'Milena responde: «Entiendo, pero son datos de 12 postulantes en un celular. Mañana lo hablo yo».', kusi: ['preocupado', 'La ayuda no justifica el riesgo.'] } },
    ],
    rules: [[LEY, 'Ley 29733: las notas de entrevista son datos personales y se guardan con acceso restringido.']],
    mirada: { ve: 'Rosario lo hizo con buena intención. Pero las notas de entrevista hablan de personas, y un celular se pierde, se comparte o se olvida en una combi. La solución no es regañar: es darle una forma más fácil y segura de hacerlo.' },
  },
];
