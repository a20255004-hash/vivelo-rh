// Asistente de Selección · Capítulo 1 · «Sesenta técnicas» · Clínica del Misti, Arequipa.
// Normas: Ley 26772 (avisos sin discriminación); Ley 29733 (datos personales); Ley 28456 (trabajo del técnico de enfermería).
export const CAP = {
  n: 1, titulo: 'Sesenta técnicas', dia: 'Semana 1, lunes', foto: 'assets/foto2/entrevista-cv.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '07:30', fin: '18:30', cierreHora: '18:20',
  apertura: 'Arequipa, Clínica del Misti. El piso nuevo abre en tres semanas y faltan 60 técnicas de enfermería: la selección tiene que cerrarse en dos. Hoy empiezas como asistente de Selección.', boton: 'Entrar por Emergencia',
  kusi: 'En una clínica, contratar bien es cuidar pacientes. ¡Dale!',
  lead: 'Entendiste el plan, ordenaste los CV con criterio, cuidaste datos ajenos y escuchaste a quien de verdad conoce el puesto.',
  reflexion: '¿Qué te dijo Sor Elena que no está en ningún perfil?',
  siguiente: { n: 2, titulo: 'El aviso', dia: 'Semana 1, martes' },
};
export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Selección en 10 días hábiles' },
  { id: 'cv', p: 'Bandeja de CV', j: 'Milena · Selección', d: 0, e: '214 sin revisar' },
];
export const FUTURO = {
  filtro_criterio: ['Filtraste por requisitos reales.', 'Te servirá con el aviso del capítulo 2.'],
  dni_grupo: ['Mandaste CV con DNI al grupo de supervisoras.', 'Milena lo verá en el capítulo 2.'],
  sor_escuchada: ['Sor Elena te dijo qué hace buena a una técnica.', 'Lo usarás en el aviso del capítulo 2.'],
};
export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  sup: { n: 'Supervisoras de piso', sub: 'Grupo de Enfermería', c: '#7CC6EA' },
};
export const WSP = [
  { chat: 'milena', t: '07:35', de: 'Milena', txt: 'Te espero en Emergencia con café ☕ Hoy arrancamos con todo.' },
  { chat: 'sup', t: '10:10', de: 'Lic. Rosario', txt: '¿Nos pasan los CV que lleguen para ir viendo? Así avanzamos.' },
  { chat: 'sor', t: '17:10', de: 'Sor Elena', txt: 'Gracias por preguntar, hija. Pocos lo hacen.', si: 'sor_escuchada' },
];
export const CORREOS = [
  { t: '07:40', de: 'Milena Cáceres', asunto: 'Plan de las dos semanas', html: '<p>Bienvenida. Piso nuevo de hospitalización: 60 técnicas en 10 días hábiles. Semana 1: aviso, filtro, verificación de títulos, agenda y evaluaciones. Semana 2: entrevistas con Enfermería, referencias, cierre y papeles de ingreso. El lunes de la semana 3 entran las primeras.</p><p>Milena</p>' },
];
export const QUIZ = [
  { q: '¿Qué ley prohíbe requisitos discriminatorios en un aviso?', ops: ['Ley 26772', 'Ley 31110', 'Ley 28518', 'Ley 27942'], ok: 0, por: 'La Ley 26772 prohíbe la discriminación en las ofertas de empleo.' },
  { q: 'Las supervisoras piden los CV por WhatsApp. ¿Qué haces?', ops: ['Los mandas todos', 'Compartes un resumen sin datos sensibles por el canal de la clínica', 'Te niegas sin explicar', 'Los publicas'], ok: 1, por: 'Los datos personales se comparten solo lo necesario y por canales controlados (Ley 29733).' },
  { q: '¿Quién conoce mejor lo que exige el puesto?', ops: ['El portal de empleos', 'La jefatura que dirige ese trabajo', 'Un formato antiguo', 'Nadie'], ok: 1, por: 'Quien supervisa el trabajo sabe qué separa a una buena técnica.' },
  { q: 'Para filtrar 214 CV primero…', ops: ['Lees por orden de llegada', 'Defines requisitos indispensables y deseables', 'Eliges por la foto', 'Llamas a todos'], ok: 1, por: 'Sin criterios claros, el filtro es arbitrario.' },
];
const LEY = 'ley', BP = 'bp';
export const ESCENAS = [
  { id: 'a1', t: '07:45', ch: 'presencial', who: 'milena', titulo: 'Café en Emergencia', banner: 'assets/foto/cafe.webp', show: ['confianza', 'tiempo'],
    body: () => `<p>Milena te da un café mientras pasan dos camillas. «Sesenta técnicas en dos semanas. <mark class="clave">Pregúntame lo que quieras</mark>, tengo diez minutos.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'urg', label: '¿Qué es lo más urgente?', info: '«Filtrar los 214 CV hoy: mañana sale el aviso grande.»' },
      { id: 'quien', label: '¿Con quién debo llevarme bien?', info: '«Con Sor Elena, la jefa de Enfermería. Si ella no confía en ti, no aprueba a nadie.»' },
      { id: 'error', label: '¿Qué salió mal la última vez?', info: '«Contratamos rápido y 9 renunciaron en el primer mes: no sabían lo que era el turno noche.»' },
    ],
    res: p => ({ q: null, fx: { confianza: 2 }, rel: { milena: 1 }, out: 'Milena se va a una reunión. Te deja 214 CV y una frase: «Rápido, pero sin repetir lo de la vez pasada».', kusi: ['curioso', 'Ya sabes dónde se cayó antes.'] }),
    mirada: { ve: 'Preguntar qué falló antes te ahorra repetir el error.' } },
  { id: 'a2', t: '09:30', ch: 'documento', who: null, titulo: '214 CV', banner: 'assets/foto/cv-mano.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>Para no leer 214 CV a ciegas, eliges <mark class="clave">tres criterios</mark> de filtro.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres criterios.', boton: 'Filtrar', resumen: 'Filtraste por',
    cols: ['Criterio', 'Por qué'], rows: [
      { id: 'titulo', cells: ['Título de técnico en enfermería', 'Requisito del puesto'] },
      { id: 'exp', cells: ['Experiencia en hospitalización', 'El piso es de hospitalización'] },
      { id: 'noche', cells: ['Disponibilidad para turno noche', 'Lo que falló la vez pasada'] },
      { id: 'edad', cells: ['Menores de 30 años', 'Más energía'] },
      { id: 'foto', cells: ['CV con foto', 'Ver presencia'] },
    ], score: { titulo: 3, exp: 2, noche: 2, edad: -4, foto: -3 },
    res: (p, sc) => ({ q: sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa', fx: { calidad: sc >= 6 ? 5 : 0, cumplimiento: p.includes('edad') || p.includes('foto') ? -5 : 2 }, flags: sc >= 6 ? ['filtro_criterio'] : [],
      out: sc >= 6 ? 'Quedan 71 CV que cumplen lo esencial. Milena asiente al verlos.' : 'Tu filtro deja fuera gente por razones que no tienen que ver con el trabajo.',
      kusi: [sc >= 6 ? 'feliz' : 'preocupado', sc >= 6 ? '¡Filtro con criterio!' : 'Edad y foto no dicen si alguien cuida bien.'] }),
    rules: [[LEY, 'Ley 26772: no se puede filtrar por edad o apariencia sin justificación objetiva.']],
    mirada: { ve: 'Un filtro justo usa requisitos del puesto, no preferencias.', visual: { tipo: 'embudo', titulo: 'Tu filtro', niveles: [['CV recibidos', 214], ['Con título', 120], ['Con criterio completo', 71]] } } },
  { id: 'a3', t: '10:15', ch: 'whatsapp', who: null, titulo: 'El grupo de supervisoras', banner: 'assets/foto2/mesa-mujeres.webp', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Las supervisoras de piso te piden por WhatsApp <mark class="clave">«todos los CV para ir viendo»</mark>. Los CV tienen DNI, dirección y estado de salud declarado.</p>`,
    type: 'choice', dilema: true, choices: [
      { id: 'a', label: 'Mandarles un resumen por el correo de la clínica: nombre, experiencia y turno, sin DNI ni salud.', res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, tiempo: -1 }, envia: ['sup', 'Les dejo en su correo un resumen de candidatas (experiencia y turno). Los CV completos quedan en Selección por protección de datos 🙏'], out: 'Lic. Rosario responde «ok, mejor así». Tienen lo que necesitan para opinar.', kusi: ['animo', 'Lo justo, por el canal correcto.'] } },
      { id: 'b', label: 'Mandarles los 71 CV completos al grupo: son jefas de la clínica y van a trabajar con ellas.', res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -6, tiempo: 2 }, flags: ['dni_grupo'], envia: ['sup', '📎 71 CV_candidatas.pdf'], out: 'En minutos, 71 DNI y datos de salud están en 12 celulares.', kusi: ['preocupado', 'Eso ya no se puede borrar…'] } },
    ], rules: [[LEY, 'Ley 29733: los datos de salud son sensibles y se comparten solo lo necesario.']],
    mirada: { ve: 'Las jefaturas necesitan opinar, no tener los datos completos de cada postulante.' } },
  { id: 'a4', t: '14:00', ch: 'presencial', who: 'sor', titulo: 'Sor Elena', banner: 'assets/foto/mentora.webp', lugar: 'Estación de Enfermería, piso 3', show: ['personas', 'calidad'],
    body: () => `<p>Sor Elena lleva 30 años en la clínica. Te recibe de pie, sin dejar de revisar un kárdex. «¿Qué quieres saber, hija? <mark class="clave">Tengo cinco minutos</mark>.»</p>`,
    type: 'choice', cotidiano: true, choices: [
      { id: 'a', label: 'Preguntarle qué hace buena a una técnica en su piso.', res: { q: null, fx: { personas: 4, calidad: 3 }, rel: { sor: 1 }, flags: ['sor_escuchada'], out: 'Deja el kárdex: «Que avise cuando algo no está bien, aunque sea tímida. Y que no se asuste con el turno noche». Lo anotas.', kusi: ['celebra', '¡Eso no lo dice ningún perfil!'] } },
      { id: 'b', label: 'Contarle el cronograma de selección.', res: { q: null, fx: { personas: 0 }, out: 'Asiente y vuelve a su kárdex. «Avísame cuando tengas candidatas.»', kusi: ['pensando', 'Podías aprender algo de ella.'] } },
    ], mirada: { ve: 'Quien dirige el trabajo sabe qué conducta separa a una buena técnica de una que renuncia.' } },
  { id: 'a5', t: '18:00', ch: 'correo', who: null, titulo: 'El cierre', banner: 'assets/esc/meta.webp', show: ['confianza'],
    mail: { from: 'Milena Cáceres', to: 'Asistente de Selección', asunto: '¿Cómo vamos?' },
    body: () => `<p>Dime en corto <mark class="clave">cómo quedó el filtro</mark>.</p><p>Milena</p>`,
    type: 'choice', choices: [
      { id: 'a', label: 'Cifra, hallazgo y siguiente paso.', res: { q: 'buena', fx: { confianza: 4 }, rel: { milena: 1 }, responde: '71 de 214 cumplen título, experiencia en hospitalización y turno noche. Sor Elena pide que sepan avisar cuando algo va mal: propongo incluirlo en el aviso de mañana.', out: 'Milena: «Perfecto. Mañana lo escribimos juntas».', kusi: ['feliz', '¡Corto y útil!'] } },
      { id: 'b', label: 'Que avanzaste bastante.', res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Avancé bastante con los CV 👍', out: 'Milena responde con un pulgar. No sabe qué encontraste.', kusi: ['pensando', '¿Y el dato?'] } },
    ], mirada: { ve: 'Un reporte útil tiene un número y un siguiente paso.' } },
];
