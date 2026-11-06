// Asistente de Selección · Capítulo 7 · «Las referencias» · Semana 2, martes · Clínica del Misti, Arequipa.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 29733 (datos personales): en una referencia se pregunta solo lo necesario para la finalidad; los datos de salud son sensibles. Capítulo 1.
// - Ley 26772 y D.S. 002-98-TR: no discriminación en el acceso al empleo. Capítulo 2.
// Este capítulo no cita normas nuevas: el criterio de verificar referencias con varias fuentes es buena práctica.

export const CAP = {
  n: 7, titulo: 'Las referencias', dia: 'Semana 2, martes', foto: 'assets/foto2/callcenter.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '07:20', fin: '18:40', cierreHora: '18:25',
  apertura: 'Martes. Las entrevistas siguen a las seis y a las tres; entre medio, tú llamas referencias. En la lista hay una candidata excelente, Ruth Calderón, con una referencia que dice lo contrario de lo que ella contó.', boton: 'Tomar el teléfono',
  kusi: 'Una referencia es una versión, no la verdad completa. ¡Dale!',
  lead: 'Hiciste preguntas que sirven, cruzaste fuentes, escuchaste a Ruth antes de decidir y limpiaste un informe que hablaba de más.',
  reflexion: '¿Qué pierde una clínica cuando cree la primera versión que escucha?',
  siguiente: { n: 8, titulo: 'El rechazo', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Selección en 4 días hábiles' },
  { id: 'ref', p: 'Referencias laborales', j: 'Tú', d: 0, e: '38 por llamar' },
  { id: 'ruth', p: 'Caso Ruth Calderón', j: 'Tú', d: 0, e: 'Referencia contradictoria' },
  { id: 'jhon', p: 'Caso Jhon Ccori', j: 'Milena', d: 0, e: 'Respuesta de la GRE' },
];

export const FUTURO = {
  preguntas_ref: ['Tienes un guion de referencias con preguntas sobre el trabajo.', 'Lo usarás con cada candidata.'],
  referencia_cruzada: ['No te quedaste con una sola versión sobre Ruth.', 'Tienes tres fuentes, no una.'],
  ruth_escuchada: ['Ruth te contó por qué salió de su trabajo anterior.', 'Volverá a confiar en Selección.'],
  ruth_descartada: ['Ruth quedó fuera por una sola referencia.', 'Ella sabrá por qué, tarde o temprano.'],
  ruth_reservada: ['Lo que Ruth te contó quedó en reserva, solo con Milena.', 'Nadie en el piso lo sabe.'],
  informe_limpio: ['El informe de referencias recoge hechos laborales, sin salud ni chismes.', 'Lo leerá Linares el jueves.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  ruth: { n: 'Ruth Calderón', sub: 'Candidata', who: 'ruth' },
  sup: { n: 'Supervisoras de piso', sub: 'Grupo de Enfermería', c: '#7CC6EA' },
  jhon: { n: 'Jhon Ccori', sub: 'Postulante · Juliaca', c: '#5B7A99' },
};

export const WSP = [
  { chat: 'milena', t: '07:25', de: 'Milena', txt: '¡La GRE Puno respondió! El título de Jhon es válido, registrado en 2014. Bien hecho no descartarlo 👏', si: 'jhon_verificado' },
  { chat: 'milena', t: '07:25', de: 'Milena', txt: 'Jhon está en la agenda de hoy y nadie verificó su título. Escribí yo a la GRE Puno. Hasta que respondan, no hay oferta.', si: 'jhon_pasa' },
  { chat: 'jhon', t: '07:50', de: 'Jhon', txt: 'Buenos días. Me escribió la señorita Milena para entrevista. Gracias por revisar mi título, de verdad 🙏', si: 'jhon_verificado' },
  { chat: 'sup', t: '10:15', de: 'Lic. Rosario', txt: 'Ya borré las fotos de mis hojas 👍 Hoy escribo en la tablet.', si: 'notas_guardadas' },
  { chat: 'ruth', t: '16:30', de: 'Ruth', txt: 'Gracias por preguntarme antes de decidir. En mi otro trabajo nadie me preguntó nada.', si: 'ruth_escuchada' },
];

export const CORREOS = [
  { t: '07:35', de: 'Milena Cáceres', para: 'Asistente de Selección', asunto: 'Referencias', html: '<p>Hoy llamas las referencias de las 38 recomendadas. Dos por candidata como mínimo, idealmente una jefatura directa. Lo que no es del trabajo, no se pregunta.</p><p>Milena</p>' },
  { t: '12:00', de: 'Jhon Ccori', para: 'Selección', asunto: 'Sigo interesado', html: '<p>Buenas tardes. Me dijeron que no paso porque mi título no aparece. Me titulé en 2014 y está en la GRE Puno. ¿Pueden revisarlo, por favor?</p><p>Jhon</p>', si: 'jhon_descartado' },
];

export const QUIZ = [
  { q: '¿Qué pregunta es válida en una referencia laboral?', ops: ['¿Tuvo licencias por enfermedad?', '¿Qué funciones tenía y cómo manejaba un paciente que empeoraba?', '¿Está casada?', '¿Estaba en el sindicato?'], ok: 1, por: 'Se pregunta por el trabajo, no por la salud, la vida personal o la afiliación sindical.' },
  { q: 'Una exjefa dice «no la recontrataría», sin dar razones. ¿Qué haces?', ops: ['La descartas', 'Pides hechos concretos, cruzas con otras fuentes y escuchas a la candidata', 'Lo ignoras', 'Se lo cuentas al grupo'], ok: 1, por: 'Una sola versión no basta: se piden hechos y se contrasta.' },
  { q: 'Ruth te cuenta algo muy personal sobre por qué dejó su trabajo. ¿Con quién lo compartes?', ops: ['Con el grupo de supervisoras', 'Solo con quien necesita saberlo para decidir, con reserva', 'Con nadie, aunque afecte la decisión', 'Con Linares por WhatsApp'], ok: 1, por: 'Reserva: solo lo necesario, con quien decide.' },
  { q: '¿Qué no va en un informe de referencias?', ops: ['Fechas y funciones confirmadas', 'Quién dio la referencia', 'Que «tuvo depresión» según un excompañero', 'Lo que coincide entre fuentes'], ok: 2, por: 'Un dato de salud contado por un tercero no va en un informe.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:40', ch: 'documento', who: null, titulo: 'El guion', banner: 'assets/esc/idea.webp', lugar: 'Oficina de Selección', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Antes de levantar el teléfono, armas un guion corto. Tienes cinco minutos por llamada y jefas de enfermería que contestan entre paciente y paciente.</p><p>Elige <mark class="clave">tres preguntas</mark> para todas las referencias.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres preguntas del guion.', boton: 'Guardar el guion', resumen: 'Tu guion pregunta',
    cols: ['Pregunta', 'Para qué'],
    rows: [
      { id: 'func', cells: ['¿Qué funciones tenía y en qué servicio?', 'Confirmar experiencia'] },
      { id: 'caso', cells: ['¿Recuerda cómo actuó cuando un paciente empeoró?', 'Lo que pide Sor Elena'] },
      { id: 'recon', cells: ['¿La volvería a contratar? ¿Por qué?', 'Opinión con razones'] },
      { id: 'salud', cells: ['¿Faltaba mucho por enfermedad?', 'Saber si es «sana»'] },
      { id: 'hijos', cells: ['¿Tiene hijos pequeños? ¿Eso la afectaba?', 'Disponibilidad'] },
      { id: 'sind', cells: ['¿Era de las que reclamaban o se sindicalizaban?', 'Ver si es «problemática»'] },
    ],
    score: { func: 3, caso: 3, recon: 2, salud: -4, hijos: -4, sind: -4 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: q === 'riesgosa' ? -6 : 3 }, flags: q === 'buena' ? ['preguntas_ref'] : [],
        out: q === 'buena' ? 'Tu guion cabe en un post-it. Las referencias responden en tres minutos lo que importa.' : 'Tu guion pregunta cosas que no deberían salir de tu boca en una llamada de la clínica.',
        pro: { ok: 'Preguntas sobre el trabajo, iguales para todas.', risk: 'Preguntar por salud, hijos o sindicato es discriminatorio, aunque lo diga otra persona.', info: 'Pide siempre el «por qué» detrás de un sí o un no.' },
        kusi: [q === 'buena' ? 'celebra' : 'indignado', q === 'buena' ? '¡Guion de trabajo!' : '¡Eso no se pregunta!'],
      };
    },
    rules: [[LEY, 'Ley 26772 y Ley 29733: en una referencia no se pregunta por salud, hijos ni afiliación sindical.']],
    mirada: { ve: 'Una referencia no es un permiso para averiguar la vida de alguien. Si no preguntarías algo en la entrevista, tampoco lo preguntes por teléfono a un exjefe.' },
  },
  {
    id: 'g2', t: '09:20', ch: 'llamada', who: null, titulo: 'Las referencias de Ruth', banner: 'assets/foto/llamada.webp', show: ['calidad', 'etica', 'tiempo'],
    body: () => `<p>Ruth Calderón, 33 años, siete años en Emergencia de una clínica de Arequipa. Sor Elena la entrevistó ayer y escribió: «la mejor de la semana». En su entrevista dijo que «renunció para crecer».</p><p>Llamas a sus referencias. <mark class="clave">Algo no cuadra</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Exjefa de Emergencia · Clínica anterior', 'Contesta cortante', '«¿Calderón? No la recontrataría. Tenía problemas con el equipo. No le puedo decir más.» Cuando le preguntas qué problemas, responde: «Mejor no me meta».'],
      ['Licenciada Norma · excompañera de turno', 'Contesta en su día libre, amable', '«Ruth era la que sacaba el turno de noche cuando todo se caía. Una vez reanimó a un niño hasta que llegó el médico. Se fue después de un problema con un supervisor, pero eso pregúntele a ella.»'],
      ['RR.HH. de la clínica anterior', 'Contesta una asistente', '«Confirmo: trabajó de 2017 a 2024 como técnica de Emergencia. Renuncia voluntaria. No damos más información.»'],
    ],
    prompt: '¿Qué haces con estas tres versiones?',
    choices: [
      { id: 'a', label: 'Anotar lo que cada fuente dijo, marcar la contradicción y pedirle a Ruth una conversación hoy, antes de decidir nada.',
        res: { q: 'buena', fx: { calidad: 5, etica: 3, tiempo: -2 }, flags: ['referencia_cruzada'], cartera: { ruth: 'Tres fuentes; conversación con Ruth hoy' },
          out: 'Ruth acepta venir a las 11. Por teléfono suena tensa: «Ya sé lo que le dijeron».',
          pro: { ok: 'Una contradicción se aclara con más información, no con la versión más dura.', info: 'Un «no la recontrataría» sin hechos vale menos que una fecha confirmada.' },
          kusi: ['curioso', 'Tres versiones. Falta la de ella.'] } },
      { id: 'b', label: 'Descartarla: si su jefa directa no la recontrataría, es una señal clara.',
        res: { q: 'riesgosa', fx: { calidad: -3, etica: -4, tiempo: 2 }, flags: ['ruth_descartada'], cartera: { ruth: 'Descartada por una referencia' },
          out: 'Marcas a Ruth como «no recomendada». En la nota de Sor Elena sigue diciendo «la mejor de la semana».',
          pro: { ok: 'Te tomas en serio a la jefatura.', risk: 'Una referencia sin hechos, contra otras dos que la contradicen, no debería decidir sola.' },
          kusi: ['preocupado', '¿Y lo que dijo Norma?'] } },
    ],
    rules: [[BP, 'Cruza fuentes y pide hechos. Escucha a la persona antes de decidir por una sola versión.']],
    mirada: { ve: 'Las referencias negativas sin hechos a veces dicen más de quien las da que de quien es evaluado. Lo único confirmado es que Ruth trabajó siete años y renunció. El resto es una pregunta abierta.', visual: { tipo: 'balanza', a: { t: 'Exjefa', items: ['«No la recontrataría»', 'Sin hechos', '«Mejor no me meta»'] }, b: { t: 'Otras fuentes', items: ['7 años confirmados', 'Renuncia voluntaria', 'Reanimó a un niño', 'Problema con un supervisor'] } } },
  },
  {
    id: 'g3', t: '11:00', ch: 'presencial', who: 'ruth', titulo: 'Ruth', banner: 'assets/foto2/tension.webp', lugar: 'Sala pequeña de Selección', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Ruth llega puntual, con los brazos cruzados. ${F.has('referencia_cruzada') ? '' : 'Milena le pidió venir.'} Antes de que preguntes, dice: «Ya sé que la señora Vargas le dijo que no me recontrataría».</p><p>Respira. «Denuncié a un supervisor por acoso. La investigación no llegó a nada y a mí me cambiaron de turno tres veces. Renuncié. <mark class="clave">No quería contarlo en la entrevista porque siempre me descartan</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle la confianza, explicarle que lo que contó queda en reserva con Milena, y que la decisión se tomará por su trabajo, que las otras fuentes confirman.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, confianza: 2 }, rel: { ruth: 1, milena: 1 }, flags: ['ruth_escuchada', 'ruth_reservada'], cartera: { ruth: 'Recomendada; motivo de salida en reserva' },
          out: 'Ruth descruza los brazos. «¿Así nomás?» Le explicas que sí: la referencia negativa no tiene hechos y las demás confirman su trabajo. Se le humedecen los ojos y se ríe para disimular.',
          pro: { ok: 'Escuchas, cuidas la reserva y vuelves al criterio: el trabajo.', risk: 'Tienes que contarle a Milena lo justo, sin detalles que Ruth no autorizó.', info: 'Haber denunciado un acoso no es un antecedente negativo.' },
          kusi: ['animo', 'Le creíste lo suficiente para seguir mirando.'] } },
      { id: 'b', label: 'Decirle que le crees, pero que con una referencia así no puedes recomendarla: la clínica no quiere conflictos.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -5 }, rel: { ruth: -1 }, flags: ['ruth_descartada'], cartera: { ruth: 'Descartada' },
          out: 'Ruth se levanta. «Ya. Lo mismo de siempre.» La puerta se cierra despacio.',
          pro: { ok: 'Eres honesta con ella.', risk: 'Castigas a una persona por haber denunciado. Así se enseña a todas a callar.' },
          kusi: ['triste', 'Denunciar no debería costar un trabajo.'] } },
      { id: 'c', label: 'Pedirle el número del supervisor denunciado para escuchar también su versión.',
        res: { q: 'aceptable', fx: { etica: -2, personas: -2 }, rel: { ruth: -1 },
          out: 'Ruth se pone pálida. «¿Lo va a llamar a él?» Te das cuenta de que esa investigación no te toca a ti.',
          pro: { ok: 'Quieres oír a ambas partes.', risk: 'No estás investigando ese caso: estás evaluando a Ruth para un puesto. Y la expones.' },
          kusi: ['preocupado', 'Esa investigación no es tuya.'] } },
    ],
    rules: [[BP, 'Lo que una candidata cuenta en confianza se comparte solo con quien decide, y solo lo necesario.']],
    mirada: { ve: 'Ruth estaba a la defensiva porque aprendió que contar la verdad le cierra puertas. Tu trabajo no es juzgar el caso de su clínica anterior: es evaluar su trabajo con las fuentes que tienes y cuidar lo que te confió.', visual: { tipo: 'flujo', titulo: 'Qué haces con lo que te contó', pasos: ['Agradecer', 'Explicar la reserva', 'Volver al criterio: su trabajo', 'Contar a Milena solo lo necesario'] } },
  },
  {
    id: 'g4', t: '13:30', ch: 'whatsapp', who: 'sor', titulo: '«Si hay duda, no»', banner: 'assets/foto/mentora.webp', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>Almuerzas un adobo de la carretilla de la esquina, de pie, cuando escribe Sor Elena: «Me dicen que hay una referencia mala de la Calderón. En salud, hija, si hay duda, no».</p><p>${F.has('ruth_reservada') ? 'Sabes lo que Ruth te contó, y que no puedes contarlo.' : 'Sor Elena la recomendó ayer.'} <mark class="clave">Respóndele</mark>.</p>`,
    type: 'compose', enviaA: 'sor', para: 'Para: Sor Elena Paz', boton: 'Enviar',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Lo que sabes', ops: [
        { id: 'h1', t: 'Sor, tengo tres fuentes: RR.HH. confirma siete años y renuncia voluntaria; una excompañera cuenta que reanimó a un niño; su exjefa dice que no la recontrataría, pero no da ningún hecho.', ok: true, por: 'Hechos y el peso de cada fuente.' },
        { id: 'h2', t: 'Sor, es que a Ruth la acosaron en su otro trabajo, por eso la jefa habla mal.', ok: false, por: 'Revelas algo que Ruth contó en confianza.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: '¿Le parece que decida con lo que usted vio ayer y con estas fuentes?', ok: true, por: 'Le devuelves la decisión, con información.' },
        { id: 'p2', t: 'Mejor la descartamos para no tener problemas.', ok: false, por: 'Cedes sin dar la información.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Lo que ella contó del motivo de su salida lo conversé con Milena, con reserva.', ok: true, por: 'Dices que existe, sin revelarlo.' },
        { id: 'c2', t: 'Usted decide 🙏', ok: null, por: 'Correcto, pero breve.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.pide === 'p2', buenas = ['h1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, etica: sel.hecho === 'h2' ? -6 : 2 }, rel: { sor: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Sor Elena tarda en responder. «Tienes razón. Una frase sin hechos no pesa más que lo que vi con mis ojos. Que siga.»' : sel.hecho === 'h2' ? 'Sor Elena responde «ah, ya». Lo que Ruth te contó ahora lo sabe alguien más, sin su permiso.' : 'Sor Elena responde: «Ya, lo pienso».',
        pro: { ok: 'Das hechos sin revelar lo confidencial.', risk: 'Contar un caso de acoso para «ayudar» a alguien también es exponerla.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'indignado' : 'pensando', q === 'buena' ? '¡Hechos que convencen!' : mal ? 'Eso era reservado…' : 'Le faltó contexto.'],
      };
    },
    mirada: { ve: '«Si hay duda, no» es un buen principio en salud cuando la duda es sobre el título o una práctica peligrosa. Pero una frase sin hechos de una exjefa no es una duda clínica: es una versión. Ayudar a Sor Elena a ver la diferencia es parte de tu trabajo.' },
  },
  {
    id: 'g5', t: '15:40', ch: 'documento', who: null, titulo: 'El informe de referencias', banner: 'assets/foto/revisa.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Milena te pide revisar el informe de referencias que armó un practicante de la mañana, antes de que vaya a Linares el jueves.</p><p><mark class="clave">Marca lo que no debe ir</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que no deberían estar en el informe.',
    doc: { t: 'Informe de referencias · lote 1', sub: 'Para Gerencia de Operaciones' },
    lines: [
      { id: 'jhon', t: 'Jhon Ccori: Clínica de Puno confirma 2016-2024 en hospitalización (por correo).' },
      { id: 'dep', t: 'Elvira Huanca: una excompañera comenta que «tuvo depresión el año pasado».', bad: LEY, why: 'Dato de salud contado por un tercero. No se pregunta ni se registra.' },
      { id: 'emb', t: 'Doris Quispe: su exjefe cuenta que «salió embarazada y faltaba».', bad: LEY, why: 'El embarazo no es un criterio. Registrarlo así invita a discriminar.' },
      { id: 'ruth', t: 'Ruth Calderón: tres fuentes; dos confirman funciones y desempeño, una opinión negativa sin hechos.' },
      { id: 'rumor', t: 'Kevin Arce: «dicen que era bien fiestero».', bad: BP, why: 'Un rumor no es una referencia.' },
      { id: 'mar', t: 'Marleny Ccama: jefa de Camaná la volvería a contratar: «nunca deja solo a un paciente».' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, calidad: hitsBp ? 3 : 0 },
      flags: missLey ? [] : ['informe_limpio'], cartera: { ref: missLey ? 'Informe con datos sensibles' : 'Informe limpio para Linares' },
      out: missLey ? 'Corriges algo, pero un dato de salud sigue en el informe que leerá el gerente.' : `Tachas ${hitsLey + (hitsBp || 0)} líneas y llamas al practicante para explicarle por qué. Se pone rojo: «Pensé que mientras más info, mejor».`,
      pro: { ok: 'Un informe dice lo que se puede usar para decidir.', risk: 'Lo que está escrito se usa, aunque nadie lo diga.', info: 'Enséñale al practicante, no solo corrijas: así no se repite.' },
      kusi: missLey ? ['preocupado', 'Ese dato llegaría a Linares…'] : ['celebra', '¡Informe sin chismes!'],
    }),
    rules: [[LEY, 'Ley 29733: los datos de salud son sensibles.'], [LEY, 'Ley 26772: el embarazo no es un criterio de selección.']],
    mirada: { ve: '«Más información» no es mejor si es información que no se puede usar. Un dato de salud o un embarazo en un informe para gerencia es una invitación a decidir mal, aunque nadie lo quiera.' },
  },
  {
    id: 'g6', t: '18:00', ch: 'presencial', who: 'milena', titulo: 'Las que no siguen', banner: 'assets/foto/cafe.webp', lugar: 'Oficina de Selección', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Milena cierra la laptop. ${F.has('jhon_verificado') ? '«Lo de Jhon salió bien gracias a que no lo descartaste.»' : ''} «Mañana viene lo que nadie quiere: avisar a las que no siguen. Son <mark class="clave">más de 40</mark>.»</p><p>«¿Cómo te sientes con eso?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Nerviosa. Pero prefiero que se enteren por nosotras, con respeto, a que se queden esperando.»',
        res: { q: null, fx: { confianza: 3, personas: 2 }, rel: { milena: 1 }, out: 'Milena sonríe: «Eso es lo más importante. Mañana armamos el mensaje juntas, y tú decides el tono».', kusi: ['animo', 'Decir que no también es cuidar.'] } },
      { id: 'b', label: '«Tranquila. Es un correo masivo y listo.»',
        res: { q: null, fx: { confianza: 0 }, out: 'Milena levanta una ceja: «Masivo, sí. Y listo, no tanto. Mañana te cuento por qué».', kusi: ['pensando', '¿Solo un correo?'] } },
    ],
    mirada: { ve: 'Comunicar un «no» es la parte más olvidada de la selección. Las postulantes recuerdan a la clínica por cómo las trató cuando no las eligió.' },
  },
];
