// Jefe/a de RR.HH. · Capítulo 1 · «Ordenar la casa» · Semana 1, lunes.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas: D.S. 039-91-TR (Reglamento Interno de Trabajo obligatorio con más de 100 trabajadores);
// Ley 29783 (comité de SST con 20 o más trabajadores); D.S. 004-2006-TR (registro de control de asistencia);
// TUO del D.Leg. 728, art. 77 (el contrato sujeto a modalidad se desnaturaliza si se sigue trabajando después de su
// vencimiento); Ley 27942 y su reglamento (procedimiento frente al hostigamiento sexual).

export const CAP = {
  n: 1, titulo: 'Ordenar la casa', dia: 'Semana 1, lunes', foto: 'assets/foto/oficina-abierta.webp',
  lugar: 'Transportes Mantaro · Terminal de Huancayo',
  inicio: '07:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'Huancayo, terminal de Transportes Mantaro. Suenan los motores. Hoy empiezas como la primera jefa de RR.HH. de la empresa.', boton: 'Entrar al terminal',
  kusi: 'Ahora tienes un equipo y una casa por ordenar. ¡Una cosa a la vez!',
  lead: 'Escuchaste al fundador, hiciste un diagnóstico con la ley en la mano, frenaste un despido por represalia, empezaste a liderar a Patty y priorizaste un plan realista.',
  reflexion: '¿Qué cambia cuando ya no solo haces el trabajo, sino que diriges a alguien que lo hace?',
  siguiente: { n: 2, titulo: 'Las jornadas', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'diagnostico', p: 'Diagnóstico legal del área', j: 'Don Alberto · Gerencia', d: 0, e: 'Archivo en cajas' },
  { id: 'contratos', p: 'Contratos de conductores', j: 'Patty · RR.HH.', d: 0, e: '40 vencidos' },
  { id: 'rit', p: 'Reglamento Interno de Trabajo', j: 'Gerencia', d: 0, e: 'No existe' },
  { id: 'nestor', p: 'Caso Néstor Poma', j: 'Gonzalo · Operaciones', d: 0, e: 'Quieren despedirlo' },
  { id: 'equipo', p: 'Tu equipo: Patty', j: 'Tú', d: 0, e: 'Sobrecargada' },
];

export const FUTURO = {
  diagnostico_completo: ['Tu diagnóstico encontró los incumplimientos más graves.', 'Don Alberto lo leerá en el capítulo 3.'],
  nestor_protegido: ['Frenaste el despido de Néstor por haber reclamado.', 'Gonzalo estará en tu contra en el capítulo 4.'],
  nestor_fuera: ['Aceptaste despedir a Néstor por «insolente».', 'Los conductores lo recordarán en el capítulo 2.'],
  patty_lidera: ['Patty sabe qué se espera de ella y tiene tu apoyo.', 'Rendirá distinto desde el capítulo 2.'],
  patty_sola: ['Patty siguió sola con todo.', 'Se enfermará de estrés en el capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
};

export const WSP = [
  { chat: 'grupo', t: '07:35', de: 'Don Alberto', txt: 'Les presento a nuestra nueva jefa de RR.HH. Por fin alguien que ponga orden 🚌' },
  { chat: 'grupo', t: '07:40', de: 'Gonzalo', txt: 'Bienvenida. Necesito hablar contigo hoy de un conductor problemático.' },
  { chat: 'patty', t: '14:10', de: 'Patty', txt: 'Jefa, ¿tiene un minuto? Tengo 30 boletas por imprimir y 40 contratos que nadie renovó 😰' },
  { chat: 'nestor', t: '17:30', de: 'Néstor', txt: 'Gracias por escuchar, señora. 18 años aquí y nadie nos había preguntado nada.', si: 'nestor_protegido' },
  { chat: 'patty', t: '18:40', de: 'Patty', txt: '¡Gracias jefa! Mañana empiezo con la lista de contratos como acordamos 💪', si: 'patty_lidera' },
];

export const CORREOS = [
  { t: '07:30', de: 'Don Alberto Rojas', para: 'Jefa de RR.HH.', asunto: 'Bienvenida', html: '<p>Bienvenida a Transportes Mantaro. Empecé con un solo bus hace 30 años; hoy somos 280 personas y 90 conductores.</p><p>Nunca tuvimos un área de RR.HH. Lo hacía la contadora y, últimamente, Patty. Quiero ordenar la casa antes de que un inspector o un accidente la ordene por nosotros.</p><p>Alberto Rojas</p>' },
];

export const QUIZ = [
  { q: '¿A partir de cuántos trabajadores es obligatorio tener un Reglamento Interno de Trabajo?', ops: ['10', 'Más de 100', '20', '500'], ok: 1, por: 'El D.S. 039-91-TR lo exige a empleadores con más de 100 trabajadores.' },
  { q: 'Un conductor con contrato a plazo vencido sigue trabajando. ¿Qué ocurre?', ops: ['Nada', 'El contrato se desnaturaliza y se considera de duración indeterminada', 'Se renueva solo por un año', 'Debe renunciar'], ok: 1, por: 'El art. 77 del TUO del D.Leg. 728 lo considera de duración indeterminada.' },
  { q: 'Despedir a un trabajador por haber reclamado en una reunión…', ops: ['Es una causa justa', 'Puede ser un despido por represalia, nulo o arbitrario', 'Es legal si se le paga', 'Es un cese colectivo'], ok: 1, por: 'Reclamar no es una falta grave; un despido por represalia puede ser nulo.' },
  { q: 'Como jefa recién llegada, lo mejor con tu asistente sobrecargada es…', ops: ['Darle más tareas', 'Priorizar juntas, quitarle lo que no suma y acordar qué se espera', 'Hacerlo todo tú', 'Esperar a ver si mejora'], ok: 1, por: 'Liderar es dar dirección, prioridades y apoyo.' },
  { q: '¿Qué empresas deben tener un comité de SST?', ops: ['Las que tienen 20 o más trabajadores', 'Solo las mineras', 'Las de más de 500', 'Ninguna'], ok: 0, por: 'La Ley 29783 lo exige con 20 o más trabajadores.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '07:45', ch: 'presencial', who: 'don-alberto', titulo: 'El fundador', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de la gerencia', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Don Alberto sirve café de un termo. En la pared hay una foto en blanco y negro de su primer bus, en 1996.</p><p>«Bienvenida${n ? ', ' + n : ''}. Aquí todo se hizo con confianza y palabra. Funcionó… hasta que crecimos. <mark class="clave">¿Por dónde empezamos?</mark>»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Don Alberto.',
    opts: [
      { id: 'miedo', label: '¿Qué es lo que más le preocupa?', info: '«Los conductores. Manejan muchas horas, algunos están cansados y yo no sé cuántas horas hacen de verdad. Si un bus se accidenta, se acaba todo lo que construí.»' },
      { id: 'familia', label: '¿Cómo es trabajar en una empresa familiar?', info: '«Mi hijo Gonzalo maneja Operaciones. Es trabajador, pero tiene mal genio. Algunos conductores le tienen miedo. Yo prefiero no meterme… pero sé que a veces debería.»' },
      { id: 'patty', label: '¿Qué hace Patty hoy?', info: '«De todo: boletas, contratos, vacaciones, certificados. Está cansada. Necesita que alguien le diga qué es lo importante.»' },
      { id: 'exito', label: '¿Qué tendría que pasar para que esté satisfecho en seis meses?', info: '«Que si viene un inspector, no me dé vergüenza. Y que los conductores no se vayan a la competencia.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, tiempo: -1 }, rel: { 'don-alberto': 1 },
      out: 'Don Alberto te entrega un llavero con tres llaves: oficina, archivo y armario. «El archivo está en cajas. Suerte.»',
      kusi: ['curioso', 'Una empresa con historia… y con cajas.'],
    }),
    mirada: {
      ve: 'Llegar como la primera jefa de RR.HH. a una empresa familiar es entrar a una casa donde todo funcionaba con confianza. El primer paso es entender qué teme el dueño y qué no se atreve a decir.',
      visual: { tipo: 'flujo', titulo: 'Tus primeros 90 días', pasos: ['Escuchar', 'Diagnosticar', 'Priorizar', 'Ordenar lo legal', 'Construir el equipo'] },
    },
  },
  {
    id: 'j2', t: '09:30', ch: 'documento', who: null, titulo: 'El diagnóstico', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Archivo', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Abres las cajas del archivo y armas una lista de cómo está la empresa frente a sus obligaciones laborales. <mark class="clave">Marca lo que debe corregirse</mark>.</p>`,
    type: 'flag', prompt: 'Marca las situaciones que incumplen la ley o son riesgosas.',
    doc: { t: 'Diagnóstico inicial de RR.HH.', sub: 'Transportes Mantaro S.A.C. · 280 trabajadores' },
    lines: [
      { id: 'rit', t: 'Reglamento Interno de Trabajo: no existe.', bad: LEY, why: 'Con más de 100 trabajadores, el RIT es obligatorio (D.S. 039-91-TR).' },
      { id: 'comite', t: 'Comité de SST: nunca se conformó.', bad: LEY, why: 'Con 20 o más trabajadores, la Ley 29783 exige un comité de SST.' },
      { id: 'asist', t: 'Asistencia de conductores: no se registra; «ellos saben sus horarios».', bad: LEY, why: 'Todo empleador debe llevar un registro de control de asistencia (D.S. 004-2006-TR). En transporte, además, es clave para controlar la fatiga.' },
      { id: 'vencidos', t: '40 conductores con contrato a plazo fijo vencido que siguen trabajando.', bad: LEY, why: 'Si se sigue trabajando después del vencimiento, el contrato se considera de duración indeterminada (TUO D.Leg. 728, art. 77).' },
      { id: 'boletas', t: 'Boletas de pago entregadas cada mes, con firma de recepción.' },
      { id: 'hostig', t: 'Hostigamiento sexual: no hay política ni procedimiento.', bad: LEY, why: 'La Ley 27942 y su reglamento obligan a contar con un procedimiento de prevención y sanción del hostigamiento sexual.' },
      { id: 'planilla', t: 'Los 280 trabajadores están en planilla electrónica.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Tu diagnóstico deja fuera algunos riesgos importantes. Si llega un inspector, los encontrará él.' : `Tu diagnóstico tiene ${hitsLey} incumplimientos claros. Es duro de leer, pero ahora sabes por dónde empezar.`,
      flags: missLey ? [] : ['diagnostico_completo'], cartera: { diagnostico: missLey ? 'Diagnóstico incompleto' : `${hitsLey} incumplimientos identificados` },
      pro: { ok: 'Un diagnóstico honesto es la base de cualquier plan.', risk: 'Lo que no se diagnostica no se prioriza.', info: 'Ordénalos por riesgo: primero lo que puede costar una vida o una multa grave.' },
      kusi: missLey ? ['pensando', 'Quedaron cosas fuera…'] : ['celebra', '¡Ahora sí conoces la casa!'],
    }),
    rules: [[LEY, 'RIT obligatorio con más de 100 trabajadores (D.S. 039-91-TR).'], [LEY, 'Contrato modal desnaturalizado si se trabaja después de su vencimiento (TUO D.Leg. 728, art. 77).']],
    mirada: {
      ve: 'Una empresa que creció sin RR.HH. suele cumplir lo visible (pagar, entregar boletas) y olvidar lo estructural (reglamento, comité, registros). Una jefa de RR.HH. empieza por ver todo, aunque duela.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Riesgo', cuadrantes: ['Ya', 'Planificar ya', 'Este trimestre', 'Después'], items: [['Registro de asistencia', .35, .9], ['Comité de SST', .4, .8], ['Contratos vencidos', .55, .7], ['Procedimiento de hostigamiento', .3, .65], ['Reglamento Interno', .75, .55]] },
    },
  },
  {
    id: 'j3', t: '11:30', ch: 'presencial', who: 'gonzalo', titulo: '«Ese conductor es un insolente»', banner: 'assets/foto2/tension.webp', lugar: 'Patio de buses', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Gonzalo, el hijo mayor de Don Alberto, te lleva al patio de buses. Habla fuerte.</p><p>«Néstor Poma. Dieciocho años aquí. En la reunión del sábado dijo delante de todos que los hacemos manejar 14 horas. Me faltó el respeto. <mark class="clave">Quiero que lo despidas esta semana</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que reclamar por las horas de manejo no es una falta, que despedirlo así sería riesgoso e injusto, y que primero quieres escuchar a Néstor.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: -2 }, rel: { gonzalo: -1, nestor: 1 }, flags: ['nestor_protegido'], cartera: { nestor: 'Despido frenado; conversarás con él' },
          out: 'Gonzalo se pone rojo: «¿Tú trabajas para mi papá o para los choferes?». Le respondes que para la empresa, y que la empresa no puede despedir a alguien por decir algo que podría ser verdad.',
          pro: { ok: 'Frenas un despido por represalia y conviertes la queja en información.', risk: 'Te ganaste la desconfianza del hijo del dueño.', info: 'Si Néstor tiene razón sobre las 14 horas, tienes un problema de seguridad, no de disciplina.' },
          kusi: ['animo', 'Valiente y justa. ¡Así!'] } },
      { id: 'b', label: 'Aceptar: es el gerente de Operaciones, lo desautorizó frente a todos y la disciplina en el terminal es importante.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -6 }, rel: { gonzalo: 1 }, flags: ['nestor_fuera'], cartera: { nestor: 'Despido en preparación' },
          out: 'Gonzalo te da la mano: «Por fin alguien que entiende». Los otros 89 conductores aprenderán esta semana que reclamar cuesta el trabajo.',
          pro: { ok: 'Ganas el apoyo de Gonzalo.', risk: 'Un despido por reclamar puede ser declarado nulo o arbitrario, y silencia justo la información que necesitas.' },
          kusi: ['indignado', 'Lo despiden por decir la verdad…'] } },
    ],
    rules: [[LEY, 'El despido requiere causa justa; un despido por represalia ante un reclamo puede ser nulo (TUO D.Leg. 728).'], [BP, 'Una queja incómoda puede ser la mejor información sobre un riesgo.']],
    mirada: {
      ve: 'En una empresa familiar, RR.HH. pone a prueba su independencia muy pronto. Lo que Néstor dijo en voz alta es lo mismo que más temía Don Alberto: conductores cansados. Despedirlo sería apagar la alarma, no el incendio.',
      visual: { tipo: 'balanza', a: { t: 'Despedir a Néstor', items: ['Gonzalo satisfecho', 'Mensaje de «orden»'] }, b: { t: 'Escuchar a Néstor', items: ['Información sobre fatiga', 'Sin despido por represalia', 'Conductores que vuelven a hablar'] } },
    },
  },
  {
    id: 'j4', t: '14:20', ch: 'presencial', who: 'patty', titulo: 'Patty', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Patty tiene el escritorio cubierto de papeles. Imprime boletas una por una y las firma a mano. Tiene los ojos cansados.</p><p>«Jefa, hago todo yo desde hace dos años. <mark class="clave">No sé qué es lo urgente porque todo es urgente</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Sentarte con ella, listar todo lo que hace, decidir juntas tres prioridades y lo que dejará de hacer o pasará a ti.',
        res: { q: 'buena', fx: { personas: 5, calidad: 3, tiempo: -2 }, rel: { patty: 1 }, flags: ['patty_lidera'], cartera: { equipo: 'Patty: 3 prioridades acordadas' },
          out: 'La lista tiene 27 tareas. Acuerdan tres prioridades: contratos vencidos, registro de asistencia y boletas digitales. Patty se ríe por primera vez en el día: «Nadie me había preguntado qué hago».',
          pro: { ok: 'Liderar es dar dirección y quitar peso, no solo repartir tareas.', info: 'Revisa con ella cada viernes cómo van las tres prioridades.' },
          kusi: ['celebra', '¡Ahora Patty tiene jefa de verdad!'] } },
      { id: 'b', label: 'Agradecerle y pedirle que siga como siempre mientras tú haces el diagnóstico.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 2 }, flags: ['patty_sola'],
          out: 'Patty asiente y vuelve a imprimir boletas. Sigue sin saber qué es lo urgente.',
          pro: { ok: 'Ganas tiempo para tu diagnóstico.', risk: 'Tu primer equipo se siente igual que antes de que llegaras.' },
          kusi: ['pensando', 'Patty necesitaba algo de ti hoy.'] } },
    ],
    rules: [[BP, 'Como jefa, tu primer trabajo con tu equipo es dar prioridades claras y quitar lo que no suma.']],
    mirada: {
      ve: 'El salto de especialista a jefa es pasar de hacer a lograr que otros hagan bien. Una persona sobrecargada no necesita más tareas: necesita prioridades, permiso para dejar cosas y alguien que la respalde.',
      visual: { tipo: 'embudo', titulo: 'Las tareas de Patty', niveles: [['Todo lo que hace', 27], ['Lo que aporta valor', 12], ['Prioridades de estas semanas', 3]] },
    },
  },
  {
    id: 'j5', t: '17:30', ch: 'documento', who: null, titulo: 'El plan de 90 días', banner: 'assets/esc/decide.webp', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>Don Alberto quiere ver tu plan mañana. No puedes hacerlo todo a la vez: eliges <mark class="clave">las dos prioridades</mark> de los primeros 30 días.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos prioridades de los primeros 30 días.', boton: 'Proponer estas dos', resumen: 'Priorizaste',
    cols: ['Prioridad', 'Qué protege'],
    rows: [
      { id: 'fatiga', cells: ['Registrar las horas reales de manejo y frenar jornadas excesivas', 'Vidas en la carretera'] },
      { id: 'contratos', cells: ['Regularizar los 40 contratos vencidos', 'Derechos de los conductores'] },
      { id: 'rit', cells: ['Redactar el Reglamento Interno completo', 'Orden y reglas claras'] },
      { id: 'clima', cells: ['Encuesta de clima a los 280', 'Conocer la opinión del personal'] },
      { id: 'logo', cells: ['Nuevo uniforme para conductores', 'Imagen'] },
    ],
    score: { fatiga: 3, contratos: 3, rit: 1, clima: 0, logo: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 2 : 0 },
        out: picks.includes('fatiga') ? 'Tu plan empieza por lo que más temía Don Alberto: saber cuántas horas manejan de verdad. Mañana empezarás por ahí.' : 'Tu plan ordena papeles, pero los conductores seguirán manejando sin control.',
        pro: { ok: 'Primero lo que puede costar una vida; luego, lo que puede costar un juicio.', info: 'El reglamento interno tomará meses: empiézalo, pero no lo pongas como primera meta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Vidas primero, papeles después.' : '¿Qué podía costar una vida?'],
      };
    },
    rules: [[BP, 'Prioriza por riesgo: vida, luego multas y juicios, luego orden y mejora.']],
    mirada: {
      ve: 'Un plan de 90 días no es una lista de todo lo que está mal: es una apuesta por lo que más importa primero. En una empresa de transporte, la fatiga de los conductores está antes que cualquier documento.',
      visual: { tipo: 'linea', titulo: 'Los primeros 90 días', hitos: [['Días 1 a 30', 'Horas de manejo y contratos'], ['Días 31 a 60', 'Comité de SST y procedimiento de hostigamiento'], ['Días 61 a 90', 'Reglamento Interno y clima'], ['Día 90', 'Revisión con Don Alberto']] },
    },
  },
];
