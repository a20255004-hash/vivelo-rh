// Practicante profesional en una ORH del Estado · Capítulo 9 · «Los resultados» · Semana 2, jueves.
// Hilo: entrevistas y resultados finales del CAS 012-2026; el profesor Víctor recoge por fin su constancia de servicios.
// Normas citadas (ya verificadas en capítulos anteriores):
// - D.Leg. 1057 y su reglamento (D.S. 075-2008-PCM): la entrevista es etapa obligatoria; las bases fijan cómo se califica (capítulo 4).
//   https://cdn.www.gob.pe/uploads/document/file/6532302/5693975-bases-proceso-cas-n-012-2024.pdf
// - Ley 29973, art. 48, y D.S. 002-2014-MIMP, num. 51.1: 15 % sobre el puntaje final aprobatorio (capítulo 5).
//   https://cdn.www.gob.pe/uploads/document/file/8090935/6784703-informe-tecnico-n-121-2025-servir-gpgsc.pdf
// - TUO de la Ley 27444: la notificación cierra el procedimiento para el administrado (capítulo 3).
//   https://cdn.www.gob.pe/uploads/document/file/5320370/4770872-decreto-supremo-n-004-2019-jus.pdf
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 9, titulo: 'Los resultados', dia: 'Semana 2, jueves', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Sala de reuniones de la ORH · Wanchaq, Cusco',
  inicio: '07:45', fin: '18:00', cierreHora: '17:50',
  apertura: 'Jueves. Día de entrevistas y de resultados finales. A las siete y media ya hay dos postulantes sentados en la banca del pasillo, con terno prestado y su DNI en la mano. Y a las diez viene el profesor Víctor.', boton: 'Preparar la sala',
  kusi: 'Hoy se cierran dos historias. ¡Que cierren bien!',
  lead: 'Confirmaste a los entrevistados, registraste entrevistas con hechos, sostuviste la regla de calificación frente a un miembro del comité, revisaste el cuadro final y le entregaste al profesor Víctor su constancia.',
  reflexion: '¿Qué se siente cerrar un trámite que alguien esperó tres meses? ¿Y por qué no debería tardar tanto?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'entrevistas', p: 'Entrevistas del CAS 012-2026 · 8 postulantes', j: 'Comité de selección', d: 0, e: 'Desde las 8:30' },
  { id: 'resultados', p: 'Resultados finales', j: 'Comité de selección', d: 0, e: 'Hoy, 17:00' },
  { id: 'victor', p: 'Constancia del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Firmada; recojo hoy' },
  { id: 'acceso', p: 'Respuesta a la Sra. Elvira Condori', j: 'Responsable de acceso', d: 0, e: 'Entregada ayer' },
];

export const FUTURO = {
  entrevistas_hechos: ['Tus notas de las entrevistas registraron hechos, no impresiones.', 'El acta del comité se sostiene sola.'],
  calificacion_bases: ['Sostuviste que la entrevista se califica como dicen las bases, con el promedio de los tres miembros.', 'El Ing. Paz te mirará con respeto, aunque no lo diga.'],
  calificacion_cambiada: ['Se aceptó quitar la nota más baja de la entrevista de Kevin Mendoza.', 'El Órgano de Control lo preguntará.'],
  cuadro_correcto: ['El cuadro de resultados finales salió con la bonificación bien aplicada.', 'Edwin y Marleni ganaron; Ana Lucía quedó como accesitaria.'],
  victor_constancia: ['El profesor Víctor recibió su constancia de servicios, con sus 31 años completos.', 'Su expediente se cerró con su firma.'],
  edwin_orientado: ['Le explicaste a Edwin qué necesita para firmar su contrato.', 'Llegará el lunes con todo.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  comite: { n: 'Comité CAS 012-2026', sub: 'Lic. Valer, Gladys y el Ing. Paz', c: '#5B3A8C' },
  edwin: { n: 'Edwin Huamaní', sub: 'Postulante del CAS 012-2026', c: '#2B6CB0' },
  yesenia: { n: 'Yesenia Quispe', sub: 'Nieta del Prof. Víctor', c: '#7A4A2E' },
};

export const WSP = [
  { chat: 'comite', t: '07:40', de: 'Lic. Valer', txt: 'Entrevistas de 8:30 a 12:30. Cuadro final a las 4. Publicación a las 5. Mismo método del lunes.' },
  { chat: 'ruben', t: '07:50', de: 'Rubén', txt: 'Llegué temprano. Si alguien necesita quechua, aquí estoy 💪', si: 'ruben_escuchado' },
  { chat: 'yesenia', t: '09:40', de: 'Yesenia', txt: 'Ya estamos en la puerta con mi abuelito y mi abuelita. Se puso su terno de los domingos 😊' },
  { chat: 'grupo', t: '13:10', de: 'Rubén', txt: 'Dicen en el comedor que el Órgano de Control preguntó por el concurso 👀', si: 'resultado_filtrado' },
  { chat: 'grupo', t: '13:10', de: 'Rubén', txt: 'Dicen en el comedor que el Órgano de Control anda pidiendo expedientes de varios concursos 👀', no: 'resultado_filtrado' },
  { chat: 'edwin', t: '17:15', de: 'Edwin', txt: '¡Señorita! ¡Gané! Mi mamá no lo cree. ¿Qué tengo que hacer ahora?' },
];

export const CORREOS = [
  { t: '07:30', de: 'Gladys Huamán', para: 'Practicante de la ORH', asunto: 'Hoy', html: '<p>Hoy tomas notas en las entrevistas como apoyo del comité. No calificas, no opinas durante la entrevista y no conversas con los postulantes de sus resultados. Al final del día, la constancia del profesor: la entregas tú. Te la ganaste.</p><p>Gladys</p>' },
];

export const QUIZ = [
  { q: '¿Qué debe registrar el acta de una entrevista?', ops: ['Si el postulante «cayó bien»', 'Lo que el postulante respondió y el puntaje de cada miembro, según las bases', 'Su forma de vestir', 'Su lugar de origen'], ok: 1, por: 'El acta registra hechos y puntajes, no impresiones personales.' },
  { q: 'Un miembro del comité propone quitar la nota más baja de un postulante. Las bases dicen promedio simple. ¿Qué pasa?', ops: ['Se quita si el comité vota', 'Se aplica lo que dicen las bases a todos', 'Lo decide el jefe del área usuaria', 'Se quita solo para ese postulante'], ok: 1, por: 'Cambiar el método para un postulante rompe la igualdad del concurso.' },
  { q: 'Ana Lucía alcanzó el puntaje mínimo aprobatorio y tiene discapacidad acreditada. ¿Qué se le aplica?', ops: ['Nada', '15 % sobre su puntaje final aprobatorio', '15 puntos fijos', '10 % sobre la entrevista'], ok: 1, por: 'Ley 29973, art. 48, y su reglamento: 15 % sobre el puntaje final aprobatorio.' },
  { q: '¿Cuándo termina el trámite del profesor Víctor?', ops: ['Cuando se firma la constancia', 'Cuando él la recibe y firma el cargo de notificación', 'Cuando se escanea', 'Cuando se archiva'], ok: 1, por: 'El trámite termina cuando la persona recibe su respuesta.' },
  { q: 'Un postulante quechuahablante se pone nervioso en la entrevista. ¿Qué se puede hacer?', ops: ['Nada, debe hablar castellano', 'Si las bases y el comité lo permiten, que un intérprete lo apoye', 'Bajarle el puntaje', 'Suspender su entrevista'], ok: 1, por: 'Un ajuste razonable, decidido por el comité, permite evaluar lo que importa del puesto.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '07:50', ch: 'llamada', who: null, titulo: 'Los que faltan', banner: 'assets/foto/llamada.webp', lugar: 'Teléfono fijo de la ORH', show: ['tiempo', 'personas', 'cumplimiento'],
    body: () => `<p>De los ocho entrevistados, seis ya confirmaron. Faltan dos, y las bases dicen que deben presentarse con su DNI original. Gladys te da la lista: <mark class="clave">llama a los que faltan</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Hilda Mayta · postulante', 'Contesta al primer timbre', '«Sí, hija, ya estoy en el carro. Pero me olvidé mi DNI en Calca… ¿Sirve una foto en el celular?»'],
      ['Edwin Huamaní · postulante', 'Mucho ruido de carretera', '«¡Señorita! Vengo de Quillabamba, el bus se demoró por un huaico en Abra Málaga. Llego a las 10:30. ¿Me esperan?»'],
    ],
    prompt: 'Hiciste las dos llamadas. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Decirle a Hilda lo que dicen las bases sobre el DNI original y que aún tiene tiempo de pedir que se lo traigan, y llevar el caso de Edwin al comité para que decida, con la constancia del huaico.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 4 }, rel: { 'gladys-orh': 1 },
          out: 'Hilda llama a su sobrino, que llega en moto con el DNI a las 9:50. El comité decide mover a Edwin al último turno: la carretera estuvo cerrada, salió en las noticias.',
          pro: { ok: 'La regla es la misma; el comité decide los casos con causa justificada, por escrito.', info: 'Una decisión así se anota en el acta, con su motivo, para que valga para cualquiera en la misma situación.' },
          kusi: ['animo', 'Regla clara y caso al comité.'] } },
      { id: 'b', label: 'Decirle a Hilda que la foto del DNI sirve y a Edwin que no se preocupe, que lo esperan.',
        res: { q: 'riesgosa', fx: { personas: 3, cumplimiento: -5 },
          out: 'El comité se entera a las nueve: «¿Quién dijo que la foto servía?». Hilda llega sin DNI y no la pueden entrevistar. Se va llorando.',
          pro: { ok: 'Tranquilizas a los dos.', risk: 'Prometiste algo que no te tocaba decidir, y que contradice las bases.' },
          kusi: ['triste', 'Esa promesa no era tuya.'] } },
      { id: 'c', label: 'Decirles a los dos que si no están a su hora con su DNI original, quedan descalificados.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -4 },
          out: 'Hilda consigue su DNI a tiempo. Edwin, desde el bus, se resigna: «Ya, señorita». No sabe que el comité podía considerar su caso.',
          pro: { ok: 'Aplicas las bases.', risk: 'Un huaico no es un descuido. El comité podía decidir sobre una causa así; no te correspondía cerrarle la puerta.' },
          kusi: ['pensando', 'Un huaico no es un olvido.'] } },
    ],
    rules: [[BP, 'Lo que dicen las bases se informa igual a todos; los casos excepcionales los decide el comité, por escrito y con motivo.']],
    mirada: {
      ve: 'Entre «la regla es la regla» y «tranquilo, te esperamos» hay un lugar intermedio: decir la regla con claridad y llevar los casos justificados a quien puede decidir. En Cusco, un huaico en Abra Málaga no es una excusa: es la temporada de lluvias.',
      visual: { tipo: 'balanza', a: { t: 'Hilda: olvidó su DNI', items: ['Descuido', 'Aún tiene tiempo', 'Regla igual para todos'] }, b: { t: 'Edwin: huaico en la carretera', items: ['Causa externa', 'Verificable', 'El comité decide'] } },
    },
  },
  {
    id: 'r2', t: '09:00', ch: 'presencial', who: 'colega', titulo: 'Las notas de la entrevista', banner: 'assets/foto/entrevista-cv.webp', lugar: 'Sala de entrevistas', show: ['calidad', 'etica', 'personas'],
    body: (n, F) => `<p>Tres miembros del comité, una mesa con mantel verde y una silla vacía al frente. Tú tomas notas al costado. ${F.has('ruben_escuchado') ? 'Rubén está en la puerta, por si algún postulante prefiere responder en quechua.' : ''}</p><p>Entra Hilda Mayta, con su DNI recién llegado en la mano. Responde despacio, con ejemplos de veinte años en una cooperativa. <mark class="clave">Arma tus notas</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada parte de tus notas.', boton: 'Guardar las notas',
    bloques: [
      { id: 'resp', t: 'Lo que respondió', n: 2, ops: [
        { id: 'r1', t: 'Pregunta 2: describió cómo organizó el archivo de 600 socios de la cooperativa, con fechas y responsables.', ok: true, por: 'Hecho concreto, ligado al puesto.' },
        { id: 'r2', t: 'Pregunta 4: explicó qué haría si un usuario pide información de otro socio: «se le explica que no se puede y por qué».', ok: true },
        { id: 'r3', t: 'Habló un poco lento; quizás le cueste el ritmo.', ok: false, por: 'Una impresión, no un hecho. Y puede esconder un sesgo por edad.' },
      ] },
      { id: 'punt', t: 'Puntajes', n: 2, ops: [
        { id: 'p1', t: 'Puntaje de cada miembro del comité, tal como lo dio, sin redondear.', ok: true },
        { id: 'p2', t: 'Firma de los tres miembros al pie del formato.', ok: true },
        { id: 'p3', t: 'Tu propio puntaje, «para ayudar».', ok: false, por: 'Tú no calificas: apoyas al comité.' },
      ] },
      { id: 'cuid', t: 'Cuidado', n: 1, ops: [
        { id: 'c1', t: 'Guardar las notas en el expediente del concurso, no en tu cuaderno personal.', ok: true },
        { id: 'c2', t: 'Mandarle a Gladys una foto de tus notas por WhatsApp.', ok: false, por: 'Las notas de un concurso no viajan en fotos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'riesgosa' ? [] : ['entrevistas_hechos'], cartera: { entrevistas: q === 'riesgosa' ? 'Notas con impresiones' : 'Notas con hechos y puntajes firmados' },
        out: q === 'buena' ? 'Al final de la mañana tienes ocho fichas limpias: lo que cada uno respondió y lo que cada miembro calificó. La Lic. Valer las revisa: «Si alguien reclama, esto responde solo».' : 'Tus notas sirven, aunque alguna frase dice más de ti que del postulante.',
        pro: { ok: 'Registrar respuestas y puntajes, no impresiones, protege a los postulantes y al comité.', info: 'Si una frase empieza con «parece» o «quizás», probablemente no va.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Notas de secretaria de comité!' : 'Hechos, no impresiones.'],
      };
    },
    rules: [[LEY, 'D.Leg. 1057 y su reglamento: la entrevista es una etapa obligatoria del concurso CAS y se califica según las bases.'], [BP, 'Las notas de una entrevista registran respuestas y puntajes, no impresiones sobre la persona.']],
    mirada: {
      ve: 'Hilda tiene 52 años y alguien quiso descartarla por su edad la semana pasada. Hoy respondió como alguien que sabe del puesto. Si tus notas dicen «habló lento», el sesgo que corregiste en la matriz vuelve por la puerta de atrás.',
      visual: { tipo: 'cambio', titulo: 'De la impresión al hecho', pares: [['«Habló lento»', 'Describió el archivo de 600 socios'], ['«Se ve mayor»', 'Veinte años de experiencia acreditada'], ['«Me cayó bien»', 'Puntaje de cada miembro, firmado']] },
    },
  },
  {
    id: 'r3', t: '12:45', ch: 'presencial', who: 'gladys-orh', titulo: 'La nota más baja', banner: 'assets/foto2/tension.webp', lugar: 'Sala de entrevistas, al terminar', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El Ing. Rolando Paz, jefe del área usuaria y miembro del comité, revisa las fichas. A Kevin Mendoza le pusieron 18, 12 y 11. «El 11 es injusto, la licenciada estaba cansada. ${F.has('edicion_reportada') || F.has('postit_reportado') ? 'Ya sé lo que van a decir de la Gerencia, pero esto es otra cosa.' : ''} <mark class="clave">Propongo quitar la nota más baja</mark> y promediar las otras dos.»</p><p>La Lic. Valer duda. Gladys te mira: tú tienes las bases en la mano.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Leer en voz alta el numeral de las bases que dice que la entrevista se califica con el promedio simple de los tres miembros, y decir que aplica para los ocho.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 1 }, rel: { 'gladys-orh': 1 }, flags: ['calificacion_bases'], cartera: { entrevistas: 'Calificadas según las bases' },
          out: 'Hay un silencio. El Ing. Paz se rasca la cabeza: «Si lo dicen las bases…». La Lic. Valer firma: «Promedio simple, para todos». Al salir, Gladys te aprieta el brazo.',
          pro: { ok: 'No opinas: lees la regla y recuerdas que es para todos.', risk: 'El Ing. Paz queda incómodo frente a una practicante.', info: 'Si alguien cree que una nota es injusta, el camino es explicarlo en el acta, no cambiar el método para uno.' },
          kusi: ['animo', 'Leíste la regla. Eso basta.'] } },
      { id: 'b', label: 'Quedarte callada: es una decisión del comité y tú solo tomas notas.',
        res: { q: 'aceptable', fx: { etica: -2, cumplimiento: -3 }, flags: ['calificacion_cambiada'],
          out: 'El comité vota dos a uno y quitan el 11. Kevin sube del quinto al tercer lugar en la entrevista. Gladys firma con el ceño fruncido y deja una nota de discrepancia.',
          pro: { ok: 'Respetas que el comité decide.', risk: 'Tenías la información que el comité necesitaba para no romper sus propias bases.' },
          kusi: ['pensando', 'Las bases estaban en tu mano…'] } },
      { id: 'c', label: 'Proponer quitar la nota más baja a todos los postulantes, para que sea parejo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, calidad: -2 }, flags: ['calificacion_cambiada'],
          out: 'La idea suena justa y el comité la acepta. Tres postulantes cambian de lugar. Pero el método ya no es el que se publicó en las bases, y nadie más lo sabía.',
          pro: { ok: 'Buscas igualdad.', risk: 'Cambiar las reglas de calificación después de evaluar, aunque sea para todos, contradice las bases publicadas.' },
          kusi: ['preocupado', 'Las reglas no se cambian a mitad del partido.'] } },
    ],
    rules: [[BP, 'Las bases publicadas no se cambian después de evaluar. Si un miembro discrepa de una nota, lo deja en el acta.']],
    mirada: {
      ve: 'El Ing. Paz quizás no busca favorecer a nadie: tal vez de verdad cree que el 11 fue injusto. Pero la justicia de un concurso no está en cada nota, sino en que todos fueron medidos con la misma vara, la que se publicó antes de empezar.',
      visual: { tipo: 'rango', titulo: 'Entrevista de Kevin Mendoza', min: 0, max: 20, banda: [11, 18], marcas: [['Promedio de las bases', 13.7], ['Sin la nota más baja', 15]] },
    },
  },
  {
    id: 'r4', t: '15:30', ch: 'sistema', who: null, titulo: 'El cuadro final', banner: 'assets/3d/scenes/balanza.webp', lugar: 'Cuadro de resultados finales · versión para firma', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>El cuadro final suma la evaluación curricular y la entrevista, según las bases. Luego viene la bonificación. ${F.has('calificacion_cambiada') ? 'Kevin aparece más arriba que en la mañana.' : ''}</p><p>Antes de que lo firme el comité, <mark class="clave">revísalo línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del cuadro con problemas.',
    doc: { t: 'Resultados finales · CAS 012-2026 · 2 plazas', sub: 'Puntaje mínimo aprobatorio según las bases' },
    lines: [
      { id: 'ok1', t: '1. Edwin Huamaní · final 84 · GANADOR.' },
      { id: 'ok2', t: '2. Marleni Puma · final 81 · GANADORA.' },
      { id: 'bonif', t: '3. Ana Lucía Mayhua · final 70 · bonificación: no aplica.', bad: LEY, why: 'Alcanzó el puntaje mínimo aprobatorio y acreditó su discapacidad: le corresponde el 15 % sobre su puntaje final (80,5).' },
      { id: 'hilda', t: '4. Hilda Mayta · final 76 · «no considerada por edad».', bad: BP, why: 'La nota sobre la edad no tiene sustento en las bases. Debe ir solo su puntaje y su lugar.' },
      { id: 'ok3', t: '5. Kevin Mendoza · final 74.' },
      { id: 'acc', t: 'Accesitario: no se indica.', bad: BP, why: 'Si las bases prevén accesitarios, el cuadro debe indicarlo: es quien entra si un ganador no firma.' },
    ],
    res: ({ missLey, hitsLey, hitsBp, falsos }) => {
      const bien = !missLey && (hitsBp || 0) >= 1 && !falsos;
      return {
        out: bien ? 'Con la bonificación, Ana Lucía sube a 80,5 y queda tercera, como accesitaria. Hilda queda cuarta, sin la nota sobre su edad. El comité firma a las 16:30 y publicas a las 17:00, como el lunes.' : 'El cuadro sale con un error. El viernes, Ana Lucía presenta un reclamo por la bonificación que no le aplicaron.',
        flags: bien ? ['cuadro_correcto'] : [], rel: { 'gladys-orh': bien ? 1 : 0 },
        cartera: { resultados: bien ? 'Publicado a las 17:00: Edwin y Marleni ganan; Ana Lucía accesitaria' : 'Publicado con un error en la bonificación' },
        pro: { ok: 'La bonificación se aplica cuando corresponde, y ninguna nota sin sustento entra al cuadro.', info: 'Revisa siempre quién alcanzó el mínimo aprobatorio antes de aplicar bonificaciones.' },
        kusi: bien ? ['celebra', '¡Cuadro final sin errores!'] : ['preocupado', 'Se escapó la bonificación.'],
      };
    },
    rules: [[LEY, 'Ley 29973, art. 48, y su reglamento (num. 51.1): 15 % sobre el puntaje final aprobatorio a la persona con discapacidad.']],
    mirada: {
      ve: 'La bonificación que el viernes estaba mal puesta ahora debía estar, y no estaba. Un mismo derecho puede violarse por aplicarlo antes de tiempo o por olvidarlo al final. Revisar el cuadro final es la última oportunidad para que la ley llegue a quien le corresponde.',
      visual: { tipo: 'embudo', titulo: 'CAS 012-2026', niveles: [['Postularon', 41], ['Aptos', 26], ['Entrevistados', 8], ['Ganadores', 2], ['Accesitaria', 1]] },
    },
  },
  {
    id: 'r5', t: '16:00', ch: 'presencial', who: 'docente', titulo: 'La constancia', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>El profesor Víctor llega con su terno de los domingos, del brazo de doña Felícitas. Yesenia viene detrás, grabando con el celular. ${F.has('victor_parcial') ? 'Esta vez es la rectificación: la constancia con los cuatro años que faltaban.' : 'Gladys te da el sobre con la constancia firmada.'}</p><p>Es tu turno. <mark class="clave">Entrégala como se debe</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la entrega. Usa las flechas.', boton: 'Entregar la constancia',
    items: [
      { id: 'id', t: 'Verificar su identidad con su DNI', por: 'Se entrega al titular.' },
      { id: 'lee', t: 'Leer la constancia con él, línea por línea, y revisar juntos los años', por: 'Que entienda lo que recibe.' },
      { id: 'dud', t: 'Preguntarle si tiene alguna duda o algo no cuadra', por: 'Mejor corregir hoy que en otro trámite.' },
      { id: 'car', t: 'Que firme el cargo de notificación con fecha y hora', por: 'Prueba de que la recibió.' },
      { id: 'cop', t: 'Archivar una copia en su legajo y cerrar el expediente en el sistema', por: 'El legajo queda completo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 6 : 2, cumplimiento: q === 'buena' ? 4 : 1 }, rel: { docente: 1 },
        flags: ['victor_constancia'], cartera: { victor: 'Entregada y notificada: 31 años, de 1987 a 2018' },
        out: q === 'buena' ? 'El profesor lee despacio, con el dedo: «Mil novecientos noventa y cuatro… Huarocondo». Se le quiebra la voz. Firma el cargo con una letra antigua, inclinada, preciosa. Doña Felícitas te toma las manos: «Sulpayki, wawa».' : 'El profesor recibe su constancia y la guarda en el sobre manila. Firma el cargo. Se va contento, aunque no la revisaron juntos.',
        pro: { ok: 'El trámite termina cuando la persona recibe y entiende su respuesta.', info: 'Cierra el expediente en el sistema hoy mismo: si no, seguirá apareciendo como vencido.' },
        kusi: [q === 'buena' ? 'celebra' : 'feliz', q === 'buena' ? '¡Qué divino! Tres meses, cerrados.' : 'Entregada. ¡Bien!'],
      };
    },
    rules: [[BP, 'Un documento se entrega al titular, se revisa con él y se deja constancia con el cargo de notificación.']],
    mirada: {
      ve: 'Esta constancia empezó con un sello manual el lunes de la semana pasada, cuando el sistema se cayó. Pasó por un legajo con un hueco, un oficio, don Hilario y un cotejo. Ningún paso fue heroico. Todos juntos devolvieron 31 años a un hombre.',
      visual: { tipo: 'flujo', titulo: 'Diez días por una constancia', pasos: ['Cargo manual', 'El hueco', 'El oficio', 'El cotejo', 'La firma', 'La entrega'], aqui: 5 },
    },
  },
  {
    id: 'r6', t: '17:20', ch: 'whatsapp', who: null, titulo: '¡Gané!', banner: 'assets/foto2/celebra-brazos.webp', lugar: 'Tu celular, mientras cierras la ventanilla', show: ['personas', 'cumplimiento', 'confianza'],
    body: () => `<p>Edwin te escribe: «¡Señorita! ¡Gané! Mi mamá no lo cree. <mark class="clave">¿Qué tengo que hacer ahora?</mark>».</p><p>Te alegras de verdad. Y recuerdas que el lunes él vino de Quillabamba por un huaico.</p>`,
    type: 'compose', enviaA: 'edwin', para: 'Para: Edwin Huamaní · ganador del CAS 012-2026', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'fel', t: 'El saludo', ops: [
        { id: 'f1', t: '¡Felicitaciones, Edwin! Lo lograste con tu puntaje.', ok: true, por: 'Celebras sin sugerir que alguien lo ayudó.' },
        { id: 'f2', t: '¡Felicitaciones! Menos mal que corregimos tu experiencia, si no, no pasabas 😅', ok: false, por: 'Revelas detalles internos del concurso.' },
      ] },
      { id: 'paso', t: 'El siguiente paso', ops: [
        { id: 'p1', t: 'Para firmar el contrato tienes que acercarte a la ORH en la fecha que indica el cronograma, con los documentos que piden las bases. Te los marco en la página 15.', ok: true, por: 'Concreto y con la fuente.' },
        { id: 'p2', t: 'Ven cuando puedas, no hay apuro.', ok: false, por: 'Sí hay plazo: si no firma a tiempo, entra la accesitaria.' },
      ] },
      { id: 'canal', t: 'El canal', ops: [
        { id: 'c1', t: 'Cualquier duda formal, al correo de la ORH, para que quede registrada.', ok: true, por: 'El canal oficial.' },
        { id: 'c2', t: 'Escríbeme a mí cuando quieras.', ok: null, por: 'Amable, pero tu WhatsApp no es el canal oficial.' },
      ] },
    ],
    res: sel => {
      const mal = sel.fel === 'f2' || sel.paso === 'p2', buenas = ['f1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, cumplimiento: mal ? -3 : 3 },
        flags: q === 'riesgosa' ? [] : ['edwin_orientado'],
        out: q === 'buena' ? 'Edwin responde con una foto: él y su mamá frente al mural de la sede, con la lista. «El lunes llego con todo, señorita.»' : mal ? 'Edwin responde «¿cómo que corrigieron?». Se lo cuenta a su jefe de obra.' : 'Edwin agradece y te escribe tres veces más esa noche.',
        pro: { ok: 'Celebras, orientas con la fuente y mandas al canal oficial.', risk: 'Revelar detalles internos o restar importancia a los plazos le hace daño a quien quieres ayudar.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡Felicidad con información!' : mal ? 'Eso era interno…' : 'Tu WhatsApp no es la ORH.'],
      };
    },
    mirada: {
      ve: 'Edwin no conocía a nadie en el gobierno regional. Ganó porque una fórmula se corrigió y una regla se sostuvo. Él nunca sabrá todo eso, y está bien: lo importante es que el concurso fue igual para él que para todos.',
      visual: { tipo: 'mensaje', titulo: 'Felicitar y orientar', txt: '¡Felicitaciones, Edwin! Lo lograste con tu puntaje. Para firmar el contrato, acércate en la fecha del cronograma con los documentos de la página 15 de las bases. Dudas formales, al correo de la ORH.' },
    },
  },
];
