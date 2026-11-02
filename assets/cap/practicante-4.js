// Practicante de RR.HH. · Capítulo 4 · «Tu primera charla» · Semana 1, jueves.
// Hilo de la quincena: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.
// Normas citadas:
// - Ley 29783, de Seguridad y Salud en el Trabajo: el empleador capacita en seguridad al momento de la contratación (art. 35, inc. b, según el texto consolidado).
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - D.S. 005-2012-TR, reglamento de la Ley 29783: el registro de inducción, capacitación, entrenamiento y simulacros es uno de los registros obligatorios del sistema de gestión (formatos aprobados por R.M. 050-2013-TR).
//   https://modelo.pe/registro-de-induccion-capacitacion-y-entrega-de-epp/
//   https://lpderecho.pe/jurisprudencia-relevante-capacitaciones-seguridad-salud-trabajo/
// - D.S. 039-91-TR, Reglamento Interno de Trabajo: el RIT se entrega a cada trabajador. Texto en SPIJ: https://spij.minjus.gob.pe/
// - Ley 27942, de Prevención y Sanción del Hostigamiento Sexual, y su reglamento (D.S. 014-2019-MIMP): el empleador informa y capacita para prevenirlo. Texto en SPIJ: https://spij.minjus.gob.pe/

export const CAP = {
  n: 4, titulo: 'Tu primera charla', dia: 'Semana 1, jueves', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Hilandería Andina · Sala de capacitación',
  inicio: '07:20', fin: '20:00', cierreHora: '19:20',
  apertura: 'Jueves. A las 9:00 tienes delante a 12 operarias nuevas y una pizarra. Es tu primera charla.', boton: 'Entrar a la sala',
  kusi: 'Nervios normales. Lo que importa es que te entiendan. ¡Dale!',
  lead: 'Armaste tu guion, sobreviviste a un proyector rebelde, te diste cuenta de que Rosa no entendía y le escribiste en simple lo que nadie le había explicado.',
  reflexion: '¿Cómo supiste, hoy, si alguien de verdad te había entendido?',
  siguiente: { n: 5, titulo: 'El error', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'induccion', p: 'Inducción del grupo 1', j: 'Carla · RR.HH.', d: 0, e: '12 operarias, 9:00 a 12:00' },
  { id: 'registro', p: 'Registro de capacitación', j: 'Carla · SST', d: 0, e: 'Firmas el mismo día' },
  { id: 'asistencia', p: 'Reporte de horas extra', j: 'Diego · Planillas', d: 0, e: 'Para mañana viernes' },
  { id: 'seleccion', p: 'Segunda convocatoria', j: 'Carla · Don Teófilo', d: 0, e: '15 aprobadas en la prueba' },
  { id: 'legajos', p: 'Archivo de legajos', j: 'Carla · RR.HH.', d: 0, e: 'Plan en revisión de Legal' },
];

export const FUTURO = {
  guion_bueno: ['Tu guion de inducción tenía seguridad, derechos y a quién acudir.', 'Carla lo usará para el grupo 2. Capítulo 8.'],
  guion_flojo: ['A tu guion le faltaron temas clave.', 'La auditoría del capítulo 7 revisará qué se explicó.'],
  comprension_real: ['Verificaste que entendieran con demostraciones y preguntas en parejas.', 'Rosa confía en ti. Capítulo 6.'],
  rosa_expuesta: ['Le preguntaste a Rosa delante de todas y se quedó en blanco.', 'Rosa no volverá a preguntarte nada. Capítulo 6.'],
  rosa_mensaje: ['Le escribiste a Rosa un resumen simple de la inducción.', 'Te escribirá cuando tenga un problema. Capítulo 6.'],
  registro_limpio: ['El registro de capacitación quedó con fecha, horas reales y firmas del día.', 'Es evidencia para la auditoría del capítulo 7.'],
  registro_inflado: ['Firmaste un registro con horas y temas que no se dieron.', 'La auditoría del capítulo 7 lo cruzará con otros papeles.'],
  permisos_explicados: ['Agregaste a la inducción cómo pedir permisos y cambios de turno.', 'Rosa sabrá que existe esa puerta. Capítulo 6.'],
  he_bus: ['Armaste el reporte de horas extra en el celular, en el bus y cansada.', 'Capítulo 5.'],
  he_manana: ['Dejaste el reporte de horas extra para hacerlo con calma.', 'Capítulo 5.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria nueva', who: 'rosa' },
  edith: { n: 'Edith Coaquira', sub: 'Operaria nueva · tejido', c: '#B5563C' },
};

export const WSP = [
  { chat: 'grupo', t: '07:25', de: 'Carla', txt: 'Hoy es tu charla 🎤 Yo entro a las 11:00 a la parte de pensiones. Tú puedes.' },
  { chat: 'teofilo', t: '07:50', de: 'Don Teófilo', txt: 'La Coaquira y la Ticona sacaron los mejores puntajes de la prueba. Ya. Usted ganó.', si: 'preseleccion_diversa' },
  { chat: 'diego', t: '08:10', de: 'Diego', txt: 'Suerte en tu charla. Tip: nunca preguntes «¿alguna duda?». Nadie responde nunca 😅' },
  { chat: 'rosa', t: '12:20', de: 'Rosa', txt: 'Gracias señorita 🙏 Ya elegí mi AFP, como usted dijo, con calma.', si: 'rosa_informada' },
  { chat: 'edith', t: '13:45', de: 'Edith', txt: 'Gracias por la charla, señorita. Mañana traigo mis tijeras de remallar, que las de aquí están duras 😄', si: 'preseleccion_diversa' },
  { chat: 'diego', t: '18:55', de: 'Diego', txt: 'Oye, ¿me mandas hoy el reporte de horas extra de esta semana? Mi jefa lo cierra mañana 😬' },
];

export const CORREOS = [
  { t: '07:30', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Materiales para la inducción', html: '<p>Te dejé en la sala 12 ejemplares del Reglamento Interno de Trabajo, la cartilla de seguridad y el registro de capacitación. El proyector «a veces» funciona.</p><p>Carla</p>' },
  { t: '15:10', de: 'Seguridad y Salud en el Trabajo', para: 'RR.HH.', asunto: 'Registro de capacitación del grupo 1', html: '<p>Por favor, envíen escaneado el registro de capacitación de hoy antes de las 18:00. Es un registro obligatorio del sistema de gestión.</p>' },
];

export const QUIZ = [
  { q: '¿Cuándo debe recibir una persona nueva su capacitación en seguridad?', ops: ['Cuando haya tiempo', 'Al momento de su contratación, antes de su primer turno', 'Al terminar su periodo de prueba', 'Solo si tiene un accidente'], ok: 1, por: 'La Ley 29783 obliga a capacitar en seguridad al momento de la contratación.' },
  { q: 'Terminas tu charla y preguntas «¿Alguna duda?». Nadie habla. ¿Qué significa?', ops: ['Que todas entendieron', 'Nada seguro: hay que verificar con preguntas concretas o demostraciones', 'Que la charla fue perfecta', 'Que no les interesa'], ok: 1, por: 'El silencio no prueba comprensión. Muchas personas no preguntan por vergüenza.' },
  { q: 'El registro de capacitación dice «4 horas» pero la charla duró 3. ¿Qué haces?', ops: ['Lo firmas: así se cumple la meta', 'Escribes las horas reales', 'Lo dejas en blanco', 'Pones 5 horas, por si acaso'], ok: 1, por: 'Un registro obligatorio con datos falsos es peor que uno con menos horas.' },
  { q: '¿Qué tema no puede faltar en una inducción, además de seguridad?', ops: ['La historia del dueño', 'A quién acudir ante un problema, incluido el hostigamiento sexual', 'El menú del comedor', 'Los resultados financieros'], ok: 1, por: 'Saber a quién acudir protege a la persona desde el primer día.' },
  { q: 'Una operaria nueva asiente a todo pero no toma la cartilla. ¿Qué haces?', ops: ['Nada', 'Te acercas en el descanso, en privado, y le preguntas qué parte le gustaría repasar', 'Le preguntas delante de todas qué entendió', 'Le dices que lea la cartilla en su casa'], ok: 1, por: 'En privado y con una pregunta concreta, la persona puede decir lo que no entiende sin vergüenza.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:35', ch: 'documento', who: null, titulo: 'El guion', banner: 'assets/esc/idea.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Dormiste mal. Repasaste la charla en la combi y ahora tienes un café que ya se enfrió y una hora para cerrar el guion.</p><p>Carla te dio una regla: <mark class="clave">«Tres horas. Si algo no lo van a usar el primer mes, no lo digas»</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu guion de inducción.', boton: 'Imprimir el guion',
    bloques: [
      { id: 'seguridad', t: 'Seguridad', n: 2, ops: [
        { id: 's1', t: 'Recorrido por la línea: máquinas, rutas de evacuación y alarmas.', ok: true, por: 'Se aprende mejor viendo el lugar real.' },
        { id: 's2', t: 'Uso del equipo de protección: tapones, mascarilla para la fibra y zapatos.', ok: true, por: 'Es lo que usarán desde mañana.' },
        { id: 's3', t: 'Leer en voz alta las 40 páginas del reglamento de seguridad.', ok: false, por: 'Nadie retiene 40 páginas leídas. Se entrega y se explica lo esencial.' },
      ] },
      { id: 'derechos', t: 'Derechos y reglas', n: 3, ops: [
        { id: 'd1', t: 'Entrega del Reglamento Interno de Trabajo, explicando horarios, permisos y faltas.', ok: true, por: 'El RIT se entrega a cada trabajador.' },
        { id: 'd2', t: 'Cómo se paga: fechas de pago, boleta y a quién preguntar si algo no cuadra.', ok: true, por: 'Evita colas y malentendidos el día de pago.' },
        { id: 'd3', t: 'Qué es el hostigamiento sexual y a quién acudir si ocurre.', ok: true, por: 'Saber el canal desde el primer día protege a la persona.' },
        { id: 'd4', t: 'La historia de la empresa desde 1987, con fotos del fundador.', ok: false, por: 'Bonito, pero no lo usarán el primer mes.' },
      ] },
      { id: 'verifica', t: 'Cómo verificas que entendieron', n: 2, ops: [
        { id: 'v1', t: 'Que muestren, en la máquina, cómo se detiene en una emergencia.', ok: true, por: 'Hacer es la mejor prueba de haber entendido.' },
        { id: 'v2', t: 'Preguntas en parejas: una explica a la otra un punto de la cartilla.', ok: true, por: 'Explicarle a una compañera da menos vergüenza que hablar en público.' },
        { id: 'v3', t: 'Preguntar al final «¿alguna duda?».', ok: false, por: 'El silencio no prueba nada.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -2 },
        flags: [q === 'buena' ? 'guion_bueno' : 'guion_flojo'], cartera: { induccion: q === 'buena' ? 'Guion en una hoja, con verificación' : 'Guion con huecos' },
        out: q === 'buena' ? 'Tu guion cabe en una hoja doblada. Lo metes en el bolsillo del chaleco como si fuera un amuleto.' : 'Tu guion es largo y le faltan cosas que las nuevas necesitarán mañana.',
        pro: { ok: 'Un guion corto, práctico y con verificación es una charla que se recuerda.', risk: 'Lo que no se explica el primer día se vuelve accidente, falta o reclamo después.', info: 'Cronometra cada bloque: los recorridos siempre duran más de lo previsto.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Guion listo! Corto y útil.' : 'Falta algo que van a necesitar mañana…'],
      };
    },
    rules: [[LEY, 'El empleador capacita en seguridad al momento de la contratación (Ley 29783).'], [LEY, 'El Reglamento Interno de Trabajo se entrega a cada trabajador (D.S. 039-91-TR).']],
    mirada: {
      ve: 'Una inducción no es un discurso: es la primera experiencia real de una persona en la empresa. Lo que no aprende hoy lo aprenderá mal, de un compañero apurado o de un accidente. Por eso se elige poco, se muestra y se verifica.',
      visual: { tipo: 'flujo', titulo: 'Tu inducción en tres horas', pasos: ['Bienvenida', 'Recorrido y seguridad', 'Equipo de protección', 'RIT, pago y a quién acudir', 'Pensiones con Carla', 'Demostración en parejas'] },
    },
  },
  {
    id: 'd2', t: '08:30', ch: 'presencial', who: 'teofilo', titulo: 'Antes de entrar', banner: 'assets/foto/taller.webp', lugar: 'Línea de tejido', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Pasas por la línea para pedirle a Don Teófilo que te deje usar una máquina en la demostración.${F.has('teofilo_choque') ? ' Te mira por encima de los lentes y tarda en contestar.' : F.has('criterios_objetivos') ? ' Te recibe con algo parecido a una sonrisa.' : ''}</p><p>«Cinco minutos, señorita. <mark class="clave">Pregunte lo que tenga que preguntar</mark>, que a las nueve arranca el turno.»</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas. ¿Qué quieres saber antes de tu charla?',
    opts: [
      { id: 'accidentes', label: '¿Qué accidente es el más común con las nuevas?', info: '«Los dedos en la remalladora. Se apuran por quedar bien y meten la mano sin parar la máquina. Dígales que parar no es pecado.»' },
      { id: 'espera', label: '¿Qué espera de ellas la primera semana?', info: '«Que aprendan, no que produzcan. La primera semana nadie llega a la meta. Si se lo dicen, se estresan menos.» Te sorprende: no lo esperabas de él.' },
      { id: 'fibra', label: '¿Por qué hay que usar mascarilla si es alpaca?', info: '«La fibra suelta se mete a la garganta. Las antiguas tosemos todo el invierno. A las nuevas que no les pase.»' },
      { id: 'quien', label: '¿A quién preguntan si tienen un problema en la línea?', info: '«A la supervisora de turno, la señora Justina en el día. De noche, a Hugo, el de mantenimiento, que sabe de todo.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('accidentes') ? 3 : 1, personas: picks.includes('espera') ? 2 : 0, tiempo: -1 }, rel: { teofilo: picks.includes('espera') || picks.includes('accidentes') ? 1 : 0 },
      out: 'Don Teófilo te presta la máquina 3 para la demostración. «No la rompa», dice. Viniendo de él, es casi un cariño.',
      kusi: ['curioso', 'Lo que dijo Don Teófilo vale más que tres diapositivas.'],
    }),
    mirada: {
      ve: 'Quien mejor conoce los riesgos de un puesto es quien lo supervisa todos los días. Preguntarle a Producción antes de una inducción hace que la charla hable del lugar real, y además convierte a un jefe difícil en aliado.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Don Teófilo', txt: 'La primera semana nadie llega a la meta. Si se lo dicen, se estresan menos. Y parar la máquina no es pecado.' },
    },
  },
  {
    id: 'd3', t: '09:15', ch: 'presencial', who: null, titulo: 'El proyector', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala de capacitación', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Doce operarias te miran desde sus sillas de plástico. Rosa está en la segunda fila, con su trenza y la cartilla cerrada sobre las rodillas.${F.has('preseleccion_diversa') ? ' Edith y Yolanda, que aprobaron la prueba de las 7:00, se sumaron como oyentes y se sentaron juntas adelante.' : ''}</p><p>Enciendes el proyector. Parpadea, hace un ruido y <mark class="clave">se apaga</mark>. TI dice que alguien puede venir «en unos 40 minutos».</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Empezar por el recorrido de la línea y usar el papelógrafo para lo demás.',
        res: { q: 'buena', fx: { calidad: 4, tiempo: 2, confianza: 3 },
          out: 'Las sacas a la línea. Frente a la remalladora, todas atienden. Cuando vuelven a la sala, dibujas en el papelógrafo la ruta de evacuación y nadie extraña las diapositivas.',
          pro: { ok: 'Cambias el orden sin perder el contenido.', info: 'Ten siempre un plan sin electricidad: papel, plumones y el lugar real.' },
          kusi: ['celebra', '¡El mejor proyector es la planta misma!'] } },
      { id: 'b', label: 'Esperar a TI conversando con el grupo.',
        res: { q: 'aceptable', fx: { tiempo: -4, personas: 2 },
          out: 'Conversan sobre de dónde viene cada una: Cerro Colorado, Chivay, Juliaca. Es lindo, pero a las 12:00 te faltan dos temas y Carla ya está en la puerta.',
          pro: { ok: 'El grupo se conoce.', risk: 'Tres horas son pocas: perder 40 minutos se paga al final.' },
          kusi: ['pensando', 'Lindo momento… pero el reloj no espera.'] } },
      { id: 'c', label: 'Leer las diapositivas desde tu laptop y mostrar la pantalla a la primera fila.',
        res: { q: 'riesgosa', fx: { calidad: -3, confianza: -2 },
          out: 'Solo la primera fila ve algo. Desde la segunda, Rosa no ve nada y no dice nada.',
          pro: { ok: 'Sigues el guion.', risk: 'Si la mitad no ve, la mitad no aprende.' },
          kusi: ['preocupado', 'La segunda fila se quedó a oscuras…'] } },
    ],
    rules: [[BP, 'Prepara un plan sin tecnología: el lugar real y un papelógrafo enseñan igual.']],
    mirada: {
      ve: 'Las charlas casi nunca salen como en el guion. Lo que distingue a una buena facilitadora no es que todo funcione, sino que el contenido llegue igual. En una planta, el mejor recurso didáctico suele estar a diez metros.',
      visual: { tipo: 'balanza', a: { t: 'Esperar a TI', items: ['Conversación agradable', 'Diapositivas, cuando lleguen'] }, b: { t: 'Cambiar el orden', items: ['Recorrido en la línea real', 'Papelógrafo para la ruta', 'Todo el contenido a tiempo'] } },
    },
  },
  {
    id: 'd4', t: '10:40', ch: 'presencial', who: 'rosa', titulo: 'Rosa no pregunta', banner: 'assets/esc/dudas.webp', lugar: 'Sala de capacitación', show: ['personas', 'etica', 'calidad'],
    body: (n, F) => `<p>Explicas cómo leer la boleta de pago. Todas asienten. Rosa también, pero no ha abierto la cartilla y mira al piso.${F.has('rosa_onp') ? ' En el descanso te pregunta bajito: «¿La ONP era lo mejor, no, señorita?». No sabes qué decirle.' : F.has('rosa_informada') ? ' En el descanso te había dicho, bajito, que ya eligió su sistema de pensiones con calma.' : ''}</p><p>Diego tenía razón: cuando preguntas «¿alguna duda?», <mark class="clave">nadie dice nada</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Formar parejas: cada una le explica a la otra cómo leer su boleta, y tú pasas por cada mesa.',
        res: { q: 'buena', fx: { personas: 5, calidad: 4, tiempo: -2 }, rel: { rosa: 1 }, flags: ['comprension_real'],
          out: 'Rosa queda con Edith, que le explica con paciencia y en quechua una palabra que no entendía: «descuento». Cuando pasas por su mesa, Rosa te pregunta por primera vez algo: «¿Y si me descuentan mal, a quién le digo?».',
          pro: { ok: 'Creas un espacio donde preguntar no da vergüenza.', info: 'Las parejas funcionan mejor si mezclas a una antigua con una nueva, o a dos que hablen la misma lengua.' },
          kusi: ['celebra', '¡Rosa preguntó! Eso vale toda la charla.'] } },
      { id: 'b', label: 'Preguntarle a Rosa delante de todas qué entendió, para animarla a participar y que pierda el miedo de una vez.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -2 }, rel: { rosa: -1 }, flags: ['rosa_expuesta'],
          out: 'Rosa se pone roja. «Sí… todo, señorita», dice, y no vuelve a levantar la vista en toda la mañana.',
          pro: { ok: 'Querías incluirla.', risk: 'Ponerla en evidencia delante del grupo le confirma que preguntar es peligroso.' },
          kusi: ['triste', 'Rosa se cerró más…'] } },
      { id: 'c', label: 'Seguir con la charla y repartir la cartilla para que la lean en casa.',
        res: { q: 'aceptable', fx: { tiempo: 2, calidad: -1 },
          out: 'Terminas a tiempo. Rosa guarda la cartilla en su bolso. No sabes si la va a leer.',
          pro: { ok: 'Cumples el horario.', risk: 'Una cartilla no reemplaza una explicación cuando la persona ya se perdió.', info: 'Podías acercarte a ella en privado durante el descanso.' },
          kusi: ['pensando', '¿La leerá en casa, con su hijo encima?'] } },
    ],
    rules: [[BP, 'Verifica la comprensión con actividades, no con la pregunta «¿alguna duda?».'], [BP, 'Nunca pongas en evidencia a alguien que no entendió.']],
    mirada: {
      ve: 'Las personas que más necesitan preguntar suelen ser las que menos se atreven: por timidez, por idioma o por miedo a parecer lentas. Una buena facilitadora diseña la charla para que preguntar sea fácil, en lugar de esperar que alguien sea valiente.',
      visual: { tipo: 'cambio', titulo: 'De «¿alguna duda?» a comprobar', pares: [['«¿Alguna duda?»', 'Explícale a tu compañera cómo leer tu boleta'], ['Todas asienten', 'Cada una muestra cómo parar su máquina'], ['Rosa callada', 'Rosa pregunta en su mesa']] },
    },
  },
  {
    id: 'd5', t: '12:10', ch: 'documento', who: null, titulo: 'El registro de capacitación', banner: 'assets/esc/planilla.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Carla terminó su parte de pensiones y se fue corriendo a otra reunión. Te queda el registro de capacitación que preparó SST.</p><p>Al pie dice «Firma del responsable». <mark class="clave">Eres tú</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal en el registro antes de firmarlo.',
    doc: { t: 'Registro de inducción, capacitación, entrenamiento y simulacros', sub: 'Hilandería Andina S.A.C. · Grupo 1 de operarias nuevas' },
    lines: [
      { id: 'fecha', t: 'Fecha: martes de la semana 2.' },
      { id: 'horas', t: 'Duración: 4 horas.', bad: LEY, why: 'La charla duró 3 horas. Un registro obligatorio debe decir lo que realmente pasó.' },
      { id: 'temas', t: 'Temas: seguridad en la línea, equipo de protección, RIT, pago y pensiones, prevención del hostigamiento sexual, primeros auxilios.', bad: LEY, why: 'Primeros auxilios no se dio. Registrar un tema que no se enseñó es falsear el registro.' },
      { id: 'capacitador', t: 'Capacitadora: practicante de RR.HH., con apoyo de la jefa de RR.HH.' },
      { id: 'lista', t: 'Lista de 12 participantes con nombre, DNI y área.' },
      { id: 'firmas', t: 'Firmas: 10 firmadas hoy; 2 casillas firmadas «por adelantado» el lunes por Producción.', bad: LEY, why: 'Una firma por adelantado no prueba que esa persona estuvo. Cada participante firma el día de la capacitación.' },
      { id: 'evaluacion', t: 'Evaluación: demostración práctica en la máquina 3.', duda: 'Es correcta: deja constancia de cómo verificaste.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Firmas el registro tal como está. Ahora dice que diste primeros auxilios y que dos personas firmaron una charla a la que quizá no llegaron.' : 'Corriges las horas, tachas primeros auxilios con una nota y averiguas por las dos firmas: una operaria faltó por enfermedad. La reprogramas para el grupo 2. Recién entonces firmas.',
      flags: [missLey ? 'registro_inflado' : 'registro_limpio'], cartera: { registro: missLey ? 'Firmado con datos inflados' : 'Firmado con datos reales' },
      pro: { ok: 'Tu firma vale lo que vale el documento. Firma solo lo que ocurrió.', risk: 'Un registro inflado parece cumplir hoy, pero no resiste una auditoría ni un accidente.', info: 'Si falta un tema obligatorio, programa cuándo se dará. Eso sí es cumplir.' },
      kusi: missLey ? ['preocupado', 'Tu firma está en un papel que no dice la verdad…'] : ['celebra', 'Firmaste la verdad. ¡Bacán!'],
    }),
    rules: [[LEY, 'El registro de inducción, capacitación, entrenamiento y simulacros es un registro obligatorio del sistema de gestión de SST (D.S. 005-2012-TR).'], [BP, 'Antes de firmar, compara el documento con lo que realmente pasó.']],
    mirada: {
      ve: 'Los registros de capacitación parecen un trámite, pero son la prueba de que una persona sabía cómo trabajar seguro. Si hay un accidente, ese papel será lo primero que se revise. Por eso no se infla, no se firma por adelantado y no se completa «para cumplir».',
      visual: { tipo: 'cambio', titulo: 'El registro, corregido', pares: [['4 horas', '3 horas reales'], ['Primeros auxilios', 'Tachado: se dará al grupo 2'], ['2 firmas del lunes', '1 asistió y firmó hoy; 1 reprogramada']] },
      normas: [{ ley: 'Ley 29783 y D.S. 005-2012-TR', dice: 'El empleador capacita en seguridad al contratar y lleva registros obligatorios, entre ellos el de inducción, capacitación, entrenamiento y simulacros.', practica: 'Un registro que no coincide con la realidad no protege a la empresa: la expone.' }],
    },
  },
  {
    id: 'd6', t: '13:40', ch: 'whatsapp', who: null, titulo: 'Un mensaje para Rosa', banner: 'assets/esc/camino.webp', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Almuerzas tarde, con la charla todavía en la cabeza. Piensas en Rosa${F.has('rosa_expuesta') ? ', roja, diciendo «sí, todo»' : ''}. Mañana empieza en la línea y su hijo se queda con la vecina.</p><p>Decides escribirle <mark class="clave">lo esencial, en simple</mark>.</p>`,
    type: 'compose', enviaA: 'rosa', para: 'Para: Rosa Huamaní · Operaria nueva', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Hola, Rosa. Te dejo lo más importante de hoy, por si quieres repasarlo con calma.', ok: true, por: 'Le ofreces ayuda sin decirle que no entendió.' },
        { id: 'a2', t: 'Rosa, como hoy no entendiste, te resumo.', ok: false, por: 'Señalar que no entendió la avergüenza otra vez.' },
      ] },
      { id: 'clave', t: 'Lo esencial', ops: [
        { id: 'c1', t: 'Mañana entras a las 7:00. Tapones y mascarilla siempre puestos. Si algo se traba, para la máquina: no es pecado.', ok: true, por: 'Tres cosas concretas para mañana.' },
        { id: 'c2', t: 'Recuerda revisar el RIT completo y la cartilla de seguridad antes de entrar.', ok: false, por: 'Es demasiado para una noche con un niño pequeño.' },
      ] },
      { id: 'cierra', t: 'A quién acudir', ops: [
        { id: 'p1', t: 'Si tienes cualquier duda, en la línea pregúntale a la señora Justina. Y a mí me puedes escribir aquí.', ok: true, por: 'Le das dos personas reales a quien preguntar.' },
        { id: 'p2', t: 'Cualquier cosa, RR.HH. atiende de 8 a 5.', ok: null, por: 'Correcto, pero impersonal.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length, mal = sel.abre === 'a2';
      const q = mal ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 2 : 0 }, rel: { rosa: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['rosa_mensaje'] : [],
        out: q === 'buena' ? 'Rosa responde a las 20:10: «Gracias señorita. Lo leí dos veces. Mañana me pongo la mascarilla 🙏».' : mal ? 'Rosa deja el mensaje en visto.' : 'Rosa responde con un «ok, gracias».',
        pro: { ok: 'Un mensaje corto, amable y concreto llega donde la charla no llegó.', risk: 'Cualquier frase que suene a «no entendiste» cierra la puerta.', info: 'Este mensaje podría ser parte de la inducción para todas: es una idea para tu propuesta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Rosa lo leyó dos veces. ¡Qué divino!' : 'El tono importa tanto como el contenido.'],
      };
    },
    rules: [[BP, 'Refuerza la inducción por escrito, en lenguaje simple y con nombres de a quién acudir.']],
    mirada: {
      ve: 'La inducción no termina cuando termina la charla. Un mensaje simple esa misma noche, sin juzgar, puede ser la diferencia entre una persona que vuelve al día siguiente y otra que no se atreve a volver.',
      visual: { tipo: 'mensaje', titulo: 'Lo esencial, en simple', txt: 'Hola, Rosa. Te dejo lo más importante de hoy. Mañana entras a las 7:00. Tapones y mascarilla siempre puestos. Si algo se traba, para la máquina. En la línea pregúntale a la señora Justina, y a mí me puedes escribir aquí.' },
    },
  },
  {
    id: 'd7', t: '16:30', ch: 'documento', who: null, titulo: 'Las tarjetas de opinión', banner: 'assets/foto2/mesa-mujeres.webp', show: ['calidad', 'personas', 'confianza'],
    body: () => `<p>Al final repartiste tarjetas para que cada una escribiera, sin nombre, qué mejorar. Las lees en tu escritorio con el sol de la tarde entrando por la ventana.</p><p>Carla quiere <mark class="clave">dos cambios</mark> para la charla del grupo 2.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos cambios que propondrás para el grupo 2.', boton: 'Proponer estos cambios', resumen: 'Propusiste',
    cols: ['Tarjeta', 'Lo que dice'],
    rows: [
      { id: 'quechua', cells: ['Tarjeta 3', '«Algunas palabras no las entendí. Si alguien explica en quechua, mejor.»'] },
      { id: 'practica', cells: ['Tarjeta 7', '«Lo de la máquina me sirvió más que todo. Más práctica, menos hablar.»'] },
      { id: 'refri', cells: ['Tarjeta 1', '«Que haya refrigerio.»'] },
      { id: 'corta', cells: ['Tarjeta 9', '«Muy largo. Que dure una hora.»'] },
      { id: 'hijos', cells: ['Tarjeta 5', '«No sé qué hago si mi hijo se enferma y tengo turno. No lo explicaron.»'] },
    ],
    score: { quechua: 3, practica: 3, hijos: 3, refri: 0, corta: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, personas: picks.includes('hijos') ? 3 : 0 },
        flags: picks.includes('hijos') ? ['permisos_explicados'] : [], cartera: { induccion: 'Grupo 1 listo · 2 cambios para el grupo 2' },
        out: picks.includes('hijos') ? 'Carla lee la tarjeta 5 dos veces. «Esto lo vamos a ver más de una vez en estas semanas», dice. Agrega al guion cómo pedir permisos y cambios de turno.' : 'Carla aprueba tus cambios. La tarjeta 5 queda en el sobre, sin respuesta.',
        pro: { ok: 'Escuchas lo que dicen las participantes, no solo lo que te gustaría oír.', risk: 'Acortar a una hora suena bien, pero dejaría fuera la seguridad.', info: 'La tarjeta 5 no es sobre la charla: es una alerta de lo que puede pasar en el turno de noche.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Escuchaste lo que de verdad necesitan.' : '¿Y la tarjeta 5?'],
      };
    },
    rules: [[BP, 'Pide opinión anónima y cambia algo con ella: si no cambia nada, la próxima vez nadie opina.']],
    mirada: {
      ve: 'Las tarjetas anónimas dicen lo que nadie dice en voz alta. Una de ellas no habla de la charla, sino del miedo de muchas madres trabajadoras: qué pasa si el hijo se enferma y hay turno. Leerla bien es anticiparse a una renuncia.',
      visual: { tipo: 'matriz', x: 'Facilidad de aplicar', y: 'Impacto en las nuevas', cuadrantes: ['Planificar', 'Aplicar ya', 'Dejar', 'Si sobra tiempo'], items: [['Explicar en quechua', .6, .85], ['Más práctica', .8, .8], ['Permisos por hijos', .55, .9], ['Refrigerio', .9, .3], ['Durar una hora', .7, .15]] },
    },
  },
  {
    id: 'd8', t: '19:00', ch: 'whatsapp', who: null, titulo: 'El reporte de Diego', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'calidad', 'personas'],
    body: () => `<p>Vas en la combi de regreso, de pie, apretada entre mochilas. Te duelen los pies y la garganta de tanto hablar.</p><p>Diego te escribe: necesita hoy <mark class="clave">el reporte de horas extra de esta semana</mark>. Su jefa lo cierra mañana.</p>`,
    chat: ['Oye, ¿me mandas hoy el reporte de horas extra de esta semana? Mi jefa lo cierra mañana 😬'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Hacerlo ahora en el celular, copiando del Excel de marcaciones.',
        res: { q: null, fx: { tiempo: 3, calidad: -2 }, flags: ['he_bus'], envia: ['diego', '📎 HE_semana1.xlsx · Listo, revisa por si acaso 🙏'], out: 'Lo armas en veinte minutos, con el celular en una mano y el pasamanos en la otra. Diego te manda un «¡eres lo máximo!». Llegas a tu casa y te duermes vestida.', kusi: ['pensando', 'Rápido… pero muy cansada.'] } },
      { id: 'b', label: 'Decirle que se lo mandas esta noche desde tu casa, revisado con calma.',
        res: { q: null, fx: { tiempo: -1, calidad: 2 }, flags: ['he_manana'], envia: ['diego', 'Diego, en la combi ya no doy más 😅 Llegando a mi casa te lo mando revisado, así llegas a mañana tranquilo.'], out: 'Diego responde: «Ya, dale». Llegas a tu casa, cenas un pan con queso, revisas el reporte con calma y lo mandas a las 21:30.', kusi: ['feliz', 'Descansar también es parte del trabajo.'] } },
    ],
    mirada: { ve: 'El cansancio también es un factor de riesgo, aunque no salga en ninguna matriz. Un reporte con números que afectan sueldos, armado de pie en una combi, tiene más probabilidades de error. Saber cuándo parar es parte del oficio.' },
  },
];
