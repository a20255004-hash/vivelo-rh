// Gerente/a de Gestión Humana · Capítulo 9 · «El directorio» · Semana 2, jueves.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida. Hoy se presenta y se defiende la propuesta.
// Normas citadas (textos oficiales en docs/normas/txt):
// - Ley 29733, art. 17: confidencialidad de los datos personales y sus antecedentes.
// - Constitución Política del Perú, art. 28: la convención colectiva tiene fuerza vinculante en lo concertado (ya citado).
// - Ley 27942 y su Reglamento (D.S. 014-2019-MIMP): reserva del procedimiento de hostigamiento (principio; ver cap. 6).
// Las cifras de la propuesta son ficticias.

export const CAP = {
  n: 9, titulo: 'El directorio', dia: 'Semana 2, jueves', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Clínica Vida San Isidro · Sala de directorio del piso 2',
  inicio: '07:30', fin: '19:30', cierreHora: '19:10',
  apertura: 'Jueves. Dormiste cuatro horas. La sala del piso 2 huele a café recién hecho y a madera encerada. El cuadro del fundador sigue en la pared. A las 10, cinco personas decidirán qué pasa con 3,000. Doris te deja el termo en la mesa sin decir nada.', boton: 'Entrar a la sala',
  kusi: 'Hoy no defiendes una cifra: defiendes un criterio. ¡Dale, que tu equipo está contigo!',
  lead: 'Abriste con tres datos que nadie había visto juntos, respondiste el riesgo con un plan B, cuidaste la reserva de un caso frente al directorio, convertiste una aprobación en condiciones medibles, cumpliste tu palabra con Nora y corregiste un comunicado antes de que saliera.',
  reflexion: '¿Qué aprendiste hoy sobre la diferencia entre convencer y rendir cuentas?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Propuesta al directorio', j: 'Gestión Humana', d: 0, e: 'Hoy 10:00' },
  { id: 'acta', p: 'Acta con el sindicato', j: 'Relaciones Laborales', d: 0, e: 'Depende de hoy' },
  { id: 'denuncia', p: 'Denuncia de Kiara Saavedra', j: 'Instancia investigadora', d: 0, e: 'Descargos en curso' },
  { id: 'seguimiento', p: 'Indicadores de seguimiento', j: 'Compensaciones', d: 0, e: 'Por definir' },
  { id: 'comunicado', p: 'Comunicado interno', j: 'Comunicaciones', d: 0, e: 'Borrador' },
];

export const FUTURO = {
  apertura_datos: ['Abriste la sesión con los tres datos que explican el problema.', 'La Dra. Carrión los citó dos veces.'],
  plan_b: ['Respondiste el riesgo con hitos y un plan B automático.', 'El Ing. Mendoza votó a favor.'],
  reserva_caso: ['En la sesión, dijiste solo que hay un procedimiento en curso y con reserva.', 'La doctora Rossi se abstuvo de opinar.'],
  caso_expuesto: ['En la sesión se habló del caso del Dr. Ugaz con detalles.', 'Alguien del directorio se lo contará a él.'],
  aprobacion_condicionada: ['El directorio aprobó las fases 1 y 2 y condicionó las 3 y 4 a indicadores de junio.', 'Tienes seis meses para demostrarlo.'],
  nora_primero: ['Nora supo la decisión por ti antes que nadie.', 'La huelga sigue suspendida.'],
  comunicado_limpio: ['El comunicado interno dice lo decidido, sin promesas ni datos del caso.', 'Sale mañana a las 8.'],
};

export const CHATS = {
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  carmen: { n: 'Dra. Carmen Rossi', sub: 'Presidenta del directorio', who: 'directorio' },
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  kiara: { n: 'Kiara Saavedra', sub: 'Enfermera · Clínica Miraflores', c: '#B83B5E' },
  comunica: { n: 'Comunicaciones · Grupo Vida', sub: 'Comunicación interna', c: '#5C6B73' },
};

export const WSP = [
  { chat: 'jefaturas', t: '07:45', de: 'Jorge', txt: 'Ensayo a las 8 en la sala. Traje mi corbata de la suerte 👔' },
  { chat: 'kiara', t: '08:20', de: 'Kiara', txt: 'Hoy declaré ante la instancia. Fue duro pero me trataron bien. Suerte en su reunión, licenciada.' },
  { chat: 'gg', t: '12:40', de: 'Fernando', txt: 'Mendoza me dijo en el ascensor: «Esa gerente no me vendió nada, me mostró todo». En su idioma es un elogio.', si: 'plan_b' },
  { chat: 'nora', t: '13:50', de: 'Nora', txt: 'Gracias por avisar primero. La huelga sigue suspendida. Nos vemos en la mesa de enero, con datos.', si: 'nora_primero' },
  { chat: 'carmen', t: '18:30', de: 'Carmen Rossi', txt: 'Buena presentación. No me gustó todo lo que dijo esta semana. Pero lo dijo de frente. Eso lo respeto.' },
];

export const CORREOS = [
  { t: '07:30', de: 'Secretaría del Directorio', para: 'Gerencias', asunto: 'Agenda de la sesión de hoy', html: '<p>10:00 Gerencia de Finanzas · 10:20 Gerencia de Gestión Humana · 10:40 Gerencia de Operaciones · 11:00 Deliberación. Tiempo por gerencia: veinte minutos, incluidas preguntas.</p>' },
  { t: '15:30', de: 'Comunicaciones · Grupo Vida', para: 'Gerencia de Gestión Humana', asunto: 'Borrador de comunicado interno', html: '<p>Les comparto el borrador del comunicado sobre los acuerdos del directorio, para su visto bueno. Saldría mañana a las 8 por correo y por los grupos de las clínicas.</p>' },
];

export const QUIZ = [
  { q: 'Para abrir una presentación a un directorio, ¿qué funciona mejor?', ops: ['Una frase emotiva sin datos', 'Pocos datos que explican el problema que preocupa al directorio', 'El organigrama del área', 'Los agradecimientos'], ok: 1, por: 'El directorio escucha cuando le hablas de su preocupación con datos que no conocía.' },
  { q: 'Un director pregunta «¿y si no se cumple el supuesto?». La mejor respuesta es…', ops: ['«Se va a cumplir»', 'Hitos medibles y una medida que se activa si no se cumplen', '«Entonces despedimos»', 'Cambiar de tema'], ok: 1, por: 'Un plan B con disparadores concretos convierte una promesa en un compromiso que se puede vigilar.' },
  { q: 'En la sesión, un director pregunta por la denuncia contra el director médico. ¿Qué dices?', ops: ['Todos los detalles: es el directorio', 'Que hay un procedimiento en curso, con reserva, y que se informará el resultado por el canal que corresponda', 'Que no existe', 'El nombre de la denunciante'], ok: 1, por: 'La reserva protege a la víctima, a los testigos y al propio denunciado. El directorio no es la instancia que investiga.' },
  { q: 'El directorio aprueba con condiciones. ¿Qué necesitas para que la condición sea justa?', ops: ['Que sea vaga', 'Indicadores, metas, fechas y responsables acordados desde hoy', 'Que la defina Finanzas después', 'No aceptar condiciones'], ok: 1, por: 'Una condición sin indicadores claros se decide por opinión; con indicadores, se decide por datos.' },
  { q: 'Le prometiste al sindicato que sabría la decisión antes que nadie. Hoy…', ops: ['Esperas al comunicado oficial', 'Le informas tú, apenas termina la sesión, lo decidido y lo que sigue', 'Que se entere por las jefas', 'No le dices nada hasta enero'], ok: 1, por: 'Cumplir lo que prometiste en el orden prometido es lo que sostiene un acuerdo colectivo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:30', ch: 'documento', who: null, titulo: 'Las tres cifras', banner: 'assets/esc/meta.webp', lugar: 'Sala de directorio del piso 2', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Ensayo con tu equipo. ${F.has('equipo_en_escena') ? 'Jorge, Silvia y Mariela tienen su lámina cada uno.' : 'Tu equipo espera afuera, por si hay preguntas.'} Fernando te da un último consejo: «Los primeros noventa segundos deciden si te escuchan».</p><p>Tu primera lámina tiene espacio para <mark class="clave">tres cifras</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cifras de la primera lámina.', boton: 'Fijar la lámina', resumen: 'Abres con',
    cols: ['Cifra', 'Qué dice'],
    rows: [
      { id: 'he', cells: ['S/ 620 mil al mes en horas extra, 72 % en enfermería', 'El costo que nadie estaba mirando.'] },
      { id: 'vac', cells: ['42 vacantes de enfermería sin cubrir', 'La causa de las horas extra.'] },
      { id: 'rot', cells: ['44 de 61 enfermeras que se fueron tenían menos de un año', 'El círculo que se repite.'] },
      { id: 'her', cells: ['«Nuestras enfermeras son heroínas»', 'Una frase, no una cifra.'] },
      { id: 'sind', cells: ['600 enfermeras amenazaron con huelga', 'Suena a culpa del sindicato.'] },
      { id: 'brecha', cells: ['Faltan 1.7 puntos para el 10 %', 'Va al final, no al inicio.'] },
    ],
    score: { he: 3, vac: 3, rot: 3, her: -1, sind: -2, brecha: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['apertura_datos'] : [], cartera: { recorte: q === 'buena' ? 'Apertura: horas extra, vacantes y rotación' : 'Apertura floja' },
        out: q === 'buena' ? 'A las 10:21 proyectas la lámina. La Dra. Carrión, la directora independiente, se pone los lentes. El Ing. Mendoza deja de mirar su celular.' : 'Proyectas la lámina. La doctora Rossi mira el reloj de la pared.',
        pro: { ok: 'Tres cifras que cuentan una cadena: vacantes, horas extra, renuncias.', risk: 'Empezar culpando al sindicato o con frases emotivas pierde a quien decide con números.', info: 'Di las tres cifras y calla dos segundos. Deja que las lean.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Te están escuchando!' : 'Los primeros noventa segundos…'],
      };
    },
    mirada: {
      ve: 'Una presentación a un directorio se gana o se pierde al inicio. Tres datos que se conectan entre sí cuentan una historia que nadie había visto: el ahorro no está en recortar personas, sino en dejar de pagar lo que cuesta que falten.',
      visual: { tipo: 'flujo', titulo: 'Tu primera lámina', pasos: ['42 vacantes', 'S/ 620 mil en horas extra al mes', '44 renuncias en el primer año', 'Más vacantes'] },
    },
  },
  {
    id: 'i2', t: '10:32', ch: 'presencial', who: 'directorio', titulo: '«¿Y si no se cumple?»', banner: 'assets/foto2/revisan.webp', lugar: 'Sala de directorio del piso 2', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>${F.has('propuesta_honesta') ? 'Llegas a la lámina de la brecha: 8.3 % en 2027, 10 % en 18 meses.' : F.has('propuesta_maquillada') ? 'Llegas a la lámina del 10 %. Rodrigo, en la segunda fila, se mueve en la silla.' : 'Llegas a la lámina del 10 %, con los 60 despidos al pie.'} El Ing. Mendoza, del fondo de inversión, levanta la mano.</p><p>«Todo muy bonito. Su modelo depende de que la rotación baje. <mark class="clave">¿Y si no baja?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrar los hitos trimestrales: si en junio la rotación del primer año y las horas extra no bajan lo previsto, se suspenden las fases 3 y 4 y se activa un congelamiento ampliado de plazas administrativas.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 4 }, rel: { directorio: 1 }, flags: ['plan_b'], cartera: { seguimiento: 'Hitos trimestrales con disparador en junio' },
          out: 'Mendoza anota algo. «O sea, si fallan, nos enteramos en junio y no en diciembre.» «Exacto.» Asiente. La Dra. Carrión dice: «Y si funciona, también lo sabremos en junio».',
          pro: { ok: 'Respondes al riesgo con un mecanismo, no con una promesa.', info: 'Ese disparador debe quedar escrito en el acuerdo.' },
          kusi: ['celebra', '¡Plan B con fecha! Mendoza compró.'] } },
      { id: 'b', label: '«Va a bajar. Los datos de la inducción lo demuestran.»',
        res: { q: 'aceptable', fx: { confianza: -1 },
          out: '«Una muestra de 147 enfermeras no demuestra nada, señora.» Mendoza se recuesta. Tu siguiente lámina la escucha a medias.',
          pro: { ok: 'Confías en tus datos.', risk: 'Ante un director de riesgo, la seguridad sin un plan B suena a fe.' },
          kusi: ['pensando', 'Él no pidió fe: pidió un plan.'] } },
      { id: 'c', label: '«Si no baja, ajustamos con despidos administrativos.»',
        res: { q: 'riesgosa', fx: { confianza: 1, personas: -4 }, rel: { sindicato: -1 },
          out: 'Mendoza asiente satisfecho. La Dra. Carrión te mira con decepción. Esa frase, en un acta del directorio, la leerá alguien del sindicato algún día.',
          pro: { ok: 'Das una respuesta concreta.', risk: 'Anuncias despidos como plan B en un acta, días después de firmar un acuerdo de confianza.' },
          kusi: ['preocupado', 'Eso quedó en el acta.'] } },
    ],
    rules: [[BP, 'Responde al riesgo con hitos medibles y una medida que se activa si no se cumplen.']],
    mirada: {
      ve: 'Las preguntas de riesgo no son ataques: son el trabajo de un directorio. Quien presenta bien no promete que todo saldrá bien, sino que el directorio se enterará a tiempo si no sale, y qué pasará entonces.',
      visual: { tipo: 'linea', titulo: 'Los hitos que pediste vigilar', hitos: [['Marzo', 'Fase 1 cubierta'], ['Junio', 'Primer disparador: rotación y horas extra'], ['Septiembre', 'Fase 3, si se cumplió'], ['Diciembre', '8.3 %'], ['Junio 2028', '10 %']] },
    },
  },
  {
    id: 'i3', t: '10:38', ch: 'presencial', who: 'directorio', titulo: 'La pregunta que nadie esperaba', banner: 'assets/foto2/tension.webp', lugar: 'Sala de directorio del piso 2', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Cuando estás por cerrar, el director más joven, hijo de uno de los socios fundadores, pregunta como si nada: «Una cosa más. ¿Es verdad que hay una denuncia contra Alfredo Ugaz? Me lo comentaron en el club».</p><p>La doctora Rossi se pone rígida. Todos te miran. <mark class="clave">El acta de la sesión está grabando</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: '«Existe un procedimiento en curso, con reserva, a cargo de una instancia independiente. No corresponde discutir su contenido en esta sesión. El resultado se informará por el canal que corresponda.»',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, flags: ['reserva_caso'], cartera: { denuncia: 'Reserva mantenida ante el directorio' },
          out: 'Un silencio. La doctora Rossi dice, sin mirarte: «La gerente tiene razón. Y yo me abstengo de cualquier opinión sobre ese tema». Es la primera vez que la ves ceder en público.',
          pro: { ok: 'Mantienes la reserva incluso ante la máxima autoridad, y das la información mínima que corresponde.', info: 'Que quede en el acta tal cual lo dijiste.' },
          kusi: ['animo', 'Reserva hasta en la sala más poderosa.'] } },
      { id: 'b', label: 'Contar lo esencial: que una enfermera de Miraflores lo denunció por hostigamiento y que hay otras dos declaraciones.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, personas: -3 }, flags: ['caso_expuesto'], cartera: { denuncia: 'Caso expuesto en sesión de directorio' },
          out: 'La sala se queda helada. La doctora Rossi sale de la sala diez minutos. A la tarde, el Dr. Ugaz ya sabe que «una de Miraflores y otras dos» hablaron.',
          pro: { ok: 'Respondes con transparencia al directorio.', risk: 'Un detalle en la sala equivocada es suficiente para identificar a la denunciante y a los testigos.' },
          kusi: ['indignado', 'Eso iba a llegar a él.'] } },
      { id: 'c', label: '«No tengo información sobre eso.»',
        res: { q: 'aceptable', fx: { etica: -2, confianza: -1 },
          out: 'El director se encoge de hombros. Fernando te mira de reojo. Si el caso sale a la luz, en el acta quedará que dijiste no saber.',
          pro: { ok: 'Proteges el caso.', risk: 'Negar lo que existe, en un acta, es una mentira que se puede probar.' },
          kusi: ['pensando', 'Reserva no es negar.'] } },
    ],
    rules: [[LEY, 'Los datos del procedimiento son confidenciales (Ley 29733, art. 17).'], [BP, 'Reserva no es negar: se reconoce que existe un procedimiento, sin dar su contenido.']],
    mirada: {
      ve: 'La reserva de un caso de hostigamiento se pone a prueba en los lugares donde hay más poder. Reconocer que existe un procedimiento sin revelar su contenido protege a todos y no miente a nadie. Es una frase que conviene tener preparada.',
      visual: { tipo: 'mensaje', titulo: 'La frase de la reserva', txt: 'Existe un procedimiento en curso, con reserva, a cargo de una instancia independiente. No corresponde discutir su contenido aquí. El resultado se informará por el canal que corresponda.' },
    },
  },
  {
    id: 'i4', t: '12:10', ch: 'documento', who: null, titulo: 'El acuerdo del directorio', banner: 'assets/esc/decide.webp', lugar: 'Sala de directorio del piso 2', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Deliberación de una hora, a puerta cerrada. A las 12:05 te llaman de vuelta. ${F.has('propuesta_maquillada') ? 'Mendoza pidió revisar los supuestos de rotación y Rodrigo tuvo que admitir que eran optimistas. El directorio aprueba igual, pero con más condiciones.' : F.has('propuesta_despidos') ? 'La Dra. Carrión votó en contra de los 60 despidos: quedan en suspenso.' : 'La doctora lee el acuerdo.'}</p><p>«Se aprueban las fases 1 y 2 de inmediato. Las fases 3 y 4, sujetas a los resultados de junio. <mark class="clave">Gestión Humana propone hoy los indicadores</mark>.»</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de las condiciones.', boton: 'Entregar las condiciones',
    bloques: [
      { id: 'ind', t: 'Indicadores', n: 3, ops: [
        { id: 'i1', t: 'Horas extra de enfermería por clínica, mensual.', ok: true },
        { id: 'i2', t: 'Renuncias de enfermeras con menos de un año, trimestral.', ok: true },
        { id: 'i3', t: 'Ausentismo en turnos de noche, mensual.', ok: true },
        { id: 'i4', t: 'Satisfacción del directorio con Gestión Humana.', ok: false, por: 'No se puede medir con objetividad y convierte la condición en una opinión.' },
      ] },
      { id: 'quien', t: 'Quién y cómo', n: 1, ops: [
        { id: 'q1', t: 'Reporte mensual de Compensaciones y Finanzas, con los mismos datos que se comparten en la mesa con el sindicato.', ok: true, por: 'Un solo dato para todos: nadie puede decir que le mostraron otro.' },
        { id: 'q2', t: 'Reporte que Gestión Humana elabora solo para el directorio.', ok: false, por: 'Dos versiones de los datos son la semilla del próximo conflicto.' },
      ] },
      { id: 'si', t: 'Si no se cumple', n: 1, ops: [
        { id: 's1', t: 'En junio se suspenden las fases 3 y 4, se informa al sindicato y se activa el congelamiento ampliado de plazas administrativas.', ok: true },
        { id: 's2', t: 'En junio se decide qué hacer.', ok: false, por: 'Una condición sin consecuencia escrita se discute desde cero.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['aprobacion_condicionada'], cartera: { seguimiento: q === 'riesgosa' ? 'Condiciones vagas' : 'Tres indicadores, reporte común y consecuencia en junio', recorte: 'Aprobado: fases 1 y 2; 3 y 4 en junio' },
        out: q === 'buena' ? 'La secretaria del directorio transcribe tus condiciones al acta. Mendoza: «Esto es lo más claro que hemos aprobado este año». La doctora firma. Son las 12:40.' : 'Las condiciones quedan en el acta, aunque alguna se podrá interpretar a gusto de quien la lea en junio.',
        pro: { ok: 'Una aprobación condicionada con indicadores claros te protege a ti, al directorio y al acuerdo con el sindicato.', risk: 'Condiciones vagas se deciden en junio por la opinión del más fuerte.', info: 'Manda el acta a Silvia: el sindicato debe ver los mismos indicadores.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Aprobado, con reglas claras!' : 'En junio alguien va a interpretar eso.'],
      };
    },
    mirada: {
      ve: 'Un «sí, pero» del directorio no es una derrota: es un contrato. Si lo redactas tú, con indicadores objetivos y una consecuencia escrita, en junio la decisión dependerá de los datos y no del humor de la sala.',
      visual: { tipo: 'cambio', titulo: 'De la propuesta al acuerdo', pares: [['42 plazas en cuatro fases', 'Fases 1 y 2 aprobadas'], ['Fases 3 y 4', 'Sujetas a indicadores de junio'], ['Brecha de 1.7 %', 'Plazo de 18 meses aceptado']] },
    },
  },
  {
    id: 'i5', t: '13:30', ch: 'whatsapp', who: null, titulo: 'Primero, Nora', banner: 'assets/foto2/acuerdo-manos.webp', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>${F.has('acta_firmada') || F.has('mesa_propuesta') ? 'Le prometiste a Nora que sabría la decisión por ti antes que nadie.' : 'Nora no espera nada de ti, pero el acuerdo la afecta directamente.'} El comunicado oficial sale mañana. Las jefas de enfermería ya preguntan en el grupo.</p><p>Le escribes a Nora antes que a nadie. <mark class="clave">Lo que digas lo va a leer su junta en diez minutos</mark>.</p>`,
    type: 'compose', enviaA: 'nora', para: 'Para: Lic. Nora Huamán', boton: 'Enviar',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dec', t: 'La decisión', ops: [
        { id: 'd1', t: 'Nora: el directorio aprobó hoy las fases 1 y 2 (UCI, emergencia, neonatología y la siguiente). Las fases 3 y 4 dependen de indicadores de junio.', ok: true, por: 'Exacto: lo aprobado y lo condicionado.' },
        { id: 'd2', t: 'Nora: ¡el directorio aprobó las 42 plazas!', ok: false, por: 'No es verdad: dos fases están condicionadas. En junio te lo recordará.' },
      ] },
      { id: 'ind', t: 'Los indicadores', ops: [
        { id: 'i1', t: 'Los indicadores son los mismos que vemos en la mesa: horas extra, renuncias del primer año y ausentismo de noche. Les llegarán los mismos reportes.', ok: true, por: 'El sindicato ve lo mismo que el directorio.' },
        { id: 'i2', t: 'Los indicadores los verá el directorio.', ok: false, por: 'Si el sindicato no los ve, desconfiará de los resultados.' },
      ] },
      { id: 'pide', t: 'Lo que pides', ops: [
        { id: 'p1', t: 'El plan de ausentismo de noche es ahora parte de la condición. Lo necesito con ustedes en enero.', ok: true, por: 'Recuerdas que el acuerdo tiene dos lados.' },
        { id: 'p2', t: 'Ahora les toca a ustedes no fallar.', ok: null, por: 'Cierto, pero suena a amenaza.' },
      ] },
    ],
    res: sel => {
      const malas = ['d2', 'i2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? (malas === 2 ? 'riesgosa' : 'aceptable') : sel.pide === 'p1' ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 1, etica: sel.dec === 'd2' ? -3 : 2 }, rel: { sindicato: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['nora_primero'], cartera: { acta: q === 'riesgosa' ? 'Sindicato informado con imprecisiones' : 'Sindicato informado primero y con exactitud' },
        out: q === 'buena' ? 'Nora responde en diez minutos. La huelga sigue suspendida. En el grupo de las enfermeras, alguien publica tu mensaje con un comentario: «Por fin alguien que avisa antes».' : q === 'riesgosa' ? 'En el grupo de enfermeras celebran «las 42 plazas». En junio, alguien sacará la captura.' : 'Nora responde con un «ok, gracias». El tono importa.',
        pro: { ok: 'Cumples tu palabra en el orden prometido y con exactitud.', risk: 'Redondear una buena noticia hoy es abrir el conflicto de junio.', info: 'Manda a Silvia copia del mensaje.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Palabra cumplida. ¡Qué divino!' : 'Exactitud, siempre.'],
      };
    },
    mirada: {
      ve: 'La confianza con un sindicato no se gana en la mesa: se gana cuando, después de la mesa, haces exactamente lo que dijiste en el orden que dijiste. Avisar primero y con precisión, incluso lo que está condicionado, es lo que hace que la próxima negociación empiece mejor.',
    },
  },
  {
    id: 'i6', t: '16:00', ch: 'documento', who: null, titulo: 'El comunicado', banner: 'assets/esc/lupa.webp', lugar: 'Tu oficina · piso 7', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Comunicaciones te manda el borrador del comunicado para las 3,000 personas. Lo escribió una practicante con mucho entusiasmo y poca información.</p><p>Sale mañana a las 8. <mark class="clave">Revisas cada línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería salir o debería corregirse en el comunicado.',
    doc: { t: 'Comunicado interno · «Un Grupo Vida más fuerte»', sub: 'Borrador de Comunicaciones' },
    lines: [
      { id: 'dec', t: 'El directorio aprobó un plan para cubrir vacantes de enfermería en fases, empezando por los servicios críticos.' },
      { id: 'he', t: 'Desde esta semana, las horas extra se ofrecen y se registran en todo el grupo.' },
      { id: 'cero', t: 'Gracias al esfuerzo de todos, nadie perderá su trabajo en 2027.', bad: BP, why: 'Nadie aprobó eso. Es una promesa que el grupo no puede garantizar.' },
      { id: 'ugaz', t: 'Asimismo, informamos que se investiga al director médico por una denuncia, en muestra de nuestra transparencia.', bad: LEY, why: 'El procedimiento es reservado (Ley 29733, art. 17). Publicarlo expone a la denunciante, a los testigos y al denunciado.' },
      { id: 'bono', t: 'Quienes no cumplan las metas de asistencia perderán su bono anual.', bad: BP, why: 'No se decidió nada de eso. Y convertiría el plan conjunto de ausentismo en una amenaza.' },
      { id: 'cap', t: 'La capacitación en seguridad y la inducción de enfermería se mantienen.' },
      { id: 'sind', t: 'Agradecemos al sindicato de enfermería por su participación en la mesa técnica.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : (hitsLey + (hitsBp || 0)) >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 4, etica: missLey ? -3 : 3, personas: missLey ? -2 : 2 },
      flags: missLey ? [] : ['comunicado_limpio'], cartera: { comunicado: missLey ? 'Comunicado con datos del caso' : 'Comunicado corregido: sale mañana a las 8' },
      out: missLey ? 'El comunicado sale mañana a las 8 con una línea que no debía existir. A las 8:05, el Dr. Ugaz llama a su abogado.' : 'Devuelves el borrador con tres líneas tachadas y una nota para la practicante: «Buen trabajo; solo decimos lo que se decidió». Ella te responde con un «¡gracias, aprendí!».',
      pro: { ok: 'Un comunicado dice lo decidido, sin promesas ni datos reservados.', risk: 'Una línea de más en un comunicado masivo puede deshacer dos semanas de trabajo.', info: 'Pide que el comunicado llegue primero a las jefas de enfermería.' },
      kusi: missLey ? ['indignado', '¡Eso no podía salir!'] : ['celebra', 'Lo decidido, nada más. ¡Bacán!'],
    }),
    rules: [[LEY, 'Los datos de un procedimiento de hostigamiento son confidenciales (Ley 29733, art. 17).'], [BP, 'Un comunicado masivo solo contiene lo que se decidió.']],
    mirada: {
      ve: 'Lo último que hace una gerencia en una crisis es comunicar, y es lo primero que la gente recuerda. Las promesas de más y la «transparencia» mal entendida suelen colarse en los comunicados escritos con buena intención.',
    },
  },
];
