// Supervisor/a de SST · Capítulo 2 · «Los registros» · Semana 1, martes.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR, art. 33: registros obligatorios del sistema de gestión (accidentes, enfermedades, incidentes peligrosos
//   e incidentes, con investigación y medidas; exámenes médicos; monitoreo de agentes; inspecciones; estadísticas; equipos
//   de emergencia; inducción, capacitación y simulacros; auditorías). Art. 34: el empleador principal registra también los
//   accidentes de trabajadores de empresas tercerizadas que trabajan en sus instalaciones. Art. 35: los registros de accidentes
//   e incidentes peligrosos se conservan 10 años; archivo activo de 12 meses. Art. 110: el empleador notifica los incidentes
//   peligrosos en un máximo de 24 horas; los accidentes no mortales los notifica el centro médico asistencial. Art. 111:
//   la notificación se hace en el sistema informático del MTPE. Glosario: accidente leve, accidente incapacitante, incidente.
// - D.S. 019-2006-TR (Reglamento de la Ley General de Inspección del Trabajo), art. 27.2 y 27.6: infracciones graves por no
//   notificar incidentes peligrosos o no investigar, y por no mantener actualizados los registros.

export const CAP = {
  n: 2, titulo: 'Los registros', dia: 'Semana 1, martes', foto: 'assets/esc/planilla.webp',
  lugar: 'Productos Mar de Piura · Planta de Paita',
  inicio: '06:55', fin: '18:20', cierreHora: '18:00',
  apertura: 'Martes. En la entrada de la planta, una pizarra verde dice «212 días sin accidentes». Hoy abres los registros para ver si es verdad.', boton: 'Abrir los archivadores',
  kusi: 'Los registros no son papeles: son la memoria de lo que pasó. ¡Y la memoria no se maquilla!',
  lead: 'Revisaste los ocho registros obligatorios, encontraste un accidente escondido, una fuga sin notificar y un corte de la contrata que nadie anotó, y decidiste qué hacer con la pizarra de los 212 días.',
  reflexion: '¿Qué pierde una empresa cuando su registro de accidentes dice lo que conviene y no lo que pasó?',
  siguiente: { n: 3, titulo: 'El comité', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'registros', p: 'Registros obligatorios', j: 'Yesenia · SST', d: 0, e: '8 registros, 3 al día' },
  { id: 'tablero', p: 'Pizarra «días sin accidentes»', j: 'Ing. Julio Zapata', d: 0, e: '212 días' },
  { id: 'fuga', p: 'Fuga de amoníaco de hace 9 días', j: 'Wilson · Frío', d: 0, e: 'Sin registro ni notificación' },
  { id: 'contrata', p: 'Contrata de limpieza', j: 'Juana · Servilimp Norte', d: 0, e: 'Fuera de los registros' },
  { id: 'comite', p: 'Comité de SST', j: 'Flor Chunga · Trabajadores', d: 0, e: 'Sin sesión desde junio' },
];

export const FUTURO = {
  registro_corregido: ['Corregiste el registro: la quemadura de Rosa es un accidente incapacitante, no un incidente.', 'El comité lo verá mañana. Capítulo 3.'],
  tablero_honesto: ['La pizarra volvió a 34 días y explicaste por qué en la charla de la tarde.', 'La planta empieza a creer en los números. Capítulos 3 y 9.'],
  tablero_maquillado: ['Dejaste la pizarra en 212 días aunque el registro dice otra cosa.', 'Alguien de la planta lo sabe. Capítulo 9.'],
  fuga_regularizada: ['Registraste la fuga de amoníaco, la notificaste aunque tarde y abriste su investigación.', 'Wilson y la cámara 3 aparecen en el capítulo 4.'],
  contrata_registrada: ['Incluiste a la contrata de limpieza en el registro de accidentes.', 'Juana confiará en ti en el capítulo 6.'],
  yesenia_aliada: ['Yesenia te contó por qué los registros se dejaron de llenar.', 'Será tu mano derecha en la fiscalización. Capítulo 9.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  yesenia: { n: 'Yesenia Távara', sub: 'Asistente de SST', c: '#2E7D6B' },
  wilson: { n: 'Wilson Ipanaqué', sub: 'Técnico de frío', c: '#3B6EA8' },
};

export const WSP = [
  { chat: 'yesenia', t: '06:50', de: 'Yesenia', txt: 'Inge, los archivadores están en el estante de abajo. El de accidentes tiene humedad, disculpe 🙈' },
  { chat: 'carlos', t: '07:30', de: 'Carlos', txt: 'Ya llegaron tus candados de ayer a mantenimiento. Para que sepas.', si: 'limpieza_parada' },
  { chat: 'wilson', t: '09:40', de: 'Wilson', txt: 'Inge, lo de la cámara 3 ya lo tengo anotado. Lo vemos el jueves que entro temprano.', si: 'puerta_reportada' },
  { chat: 'julio', t: '12:30', de: 'Julio', txt: 'Piénsalo bien. El cliente de Corea viene en tres semanas y mira esa pizarra.' },
  { chat: 'flor', t: '18:05', de: 'Flor', txt: 'Ya avisé a las compañeras del comité. Mañana a las 3, ¿no? 💪' },
];

export const CORREOS = [
  { t: '07:15', de: 'Dra. Milagros Seminario', para: 'Supervisor/a de SST', asunto: 'Atenciones del tópico · último trimestre', html: '<p>Hola, bienvenido/a. Te paso el resumen del tópico: 41 atenciones en el trimestre. La mayoría son cortes leves en eviscerado y dolores de espalda en conservas.</p><p>Ojo con la atención de Rosa Purizaca del mes pasado: quemadura en el antebrazo en autoclaves, la derivamos a la clínica y le dieron tres días de descanso. No sé cómo quedó registrada.</p><p>Milagros · Médica ocupacional</p>' },
];

export const QUIZ = [
  { q: 'Una operaria se quema, va a la clínica y recibe tres días de descanso. ¿Qué es según el reglamento?', ops: ['Un incidente', 'Un accidente leve', 'Un accidente incapacitante', 'Nada que registrar'], ok: 2, por: 'El incidente solo requiere primeros auxilios; el accidente leve vuelve al día siguiente; si hay descanso y tratamiento, es incapacitante.' },
  { q: '¿En qué plazo debe el empleador notificar un incidente peligroso?', ops: ['Un mes', 'Siete días', 'Veinticuatro horas', 'No se notifica'], ok: 2, por: 'El art. 110 del D.S. 005-2012-TR fija un máximo de 24 horas para accidentes mortales e incidentes peligrosos.' },
  { q: 'Un trabajador de la contrata de limpieza se corta dentro de tu planta. ¿Va en tu registro?', ops: ['No, es de otra empresa', 'Sí: el empleador principal registra también a tercerizados que trabajan en sus instalaciones', 'Solo si es grave', 'Solo si lo pide la contrata'], ok: 1, por: 'El art. 34 del reglamento lo pide para tercerizados que trabajan total o parcialmente en tus instalaciones.' },
  { q: '¿Cuánto tiempo se conserva el registro de accidentes de trabajo?', ops: ['Un año', 'Cinco años', 'Diez años', 'Veinte años'], ok: 2, por: 'Art. 35: diez años los de accidentes e incidentes peligrosos; veinte los de enfermedades ocupacionales; cinco los demás.' },
  { q: 'La pizarra de «días sin accidentes» sirve de verdad cuando…', ops: ['Muestra el número más alto posible', 'Coincide con el registro y se explica cuando vuelve a cero', 'Se actualiza una vez al año', 'La firma el gerente'], ok: 1, por: 'Un indicador que no coincide con el registro enseña a esconder accidentes.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '07:10', ch: 'documento', who: null, titulo: 'Ocho archivadores', banner: 'assets/foto/revisa.webp', lugar: 'Oficina de SST', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Yesenia baja del estante ocho archivadores de palanca, uno por cada registro obligatorio. Algunos tienen el lomo nuevo; otros, manchas de humedad y una etiqueta escrita con plumón. ${F.has('informe_criticado') ? 'Después de lo que leíste ayer en la carpeta de Hugo, empiezas sin confiar en las tapas.' : ''}</p><p>Revisas el estado de cada uno. <mark class="clave">Esta semana solo puedes poner al día dos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos registros que pondrás al día primero.', boton: 'Empezar por estos dos', resumen: 'Priorizaste',
    cols: ['Registro', 'Cómo está'],
    rows: [
      { id: 'accidentes', cells: ['Accidentes, incidentes peligrosos e incidentes', 'Último registro hace 4 meses; varias hojas sin investigación'] },
      { id: 'capacitacion', cells: ['Inducción, capacitación y simulacros', 'Listas firmadas, sin temas ni evaluación'] },
      { id: 'medicos', cells: ['Exámenes médicos ocupacionales', 'Al día: lo lleva la Dra. Milagros'] },
      { id: 'monitoreo', cells: ['Monitoreo de agentes (frío, ruido, amoníaco)', 'Un informe de ruido de hace dos años'] },
      { id: 'inspecciones', cells: ['Inspecciones internas', 'Vacío desde junio'] },
      { id: 'emergencia', cells: ['Equipos de seguridad o emergencia', 'Lista de extintores, sin fechas de recarga'] },
    ],
    score: { accidentes: 3, monitoreo: 2, inspecciones: 2, capacitacion: 1, emergencia: 1, medicos: 0 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0 },
        cartera: { registros: picks.includes('accidentes') ? 'Prioridad: registro de accidentes e incidentes' : 'Prioridad: ' + picks.join(' y ') },
        out: picks.includes('accidentes') ? 'Abres primero el de accidentes. La primera hoja tiene una mancha de café sobre la palabra «investigación».' : 'Empiezas por otros registros. El de accidentes se queda en el estante, con su humedad.',
        pro: { ok: 'El registro de accidentes e incidentes es el corazón del sistema: ahí deben constar la investigación y las medidas.', info: 'Los exámenes médicos están al día: no todo está mal, y conviene decirlo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Primero la memoria de lo que pasó!' : '¿Y el de accidentes?'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 33: son ocho los registros obligatorios del sistema de gestión de SST.']],
    mirada: {
      ve: 'Los registros obligatorios parecen burocracia hasta que hace falta reconstruir qué pasó. En una planta grande, el registro de accidentes e incidentes dice si la empresa aprende o solo archiva.',
      visual: { tipo: 'embudo', titulo: 'Los ocho registros', niveles: [['Registros obligatorios', 8], ['Con información', 6], ['Al día', 3]] },
      normas: [{ ley: 'D.S. 005-2012-TR, art. 33', dice: 'Son registros obligatorios: accidentes, enfermedades, incidentes peligrosos e incidentes (con investigación y medidas); exámenes médicos; monitoreo de agentes; inspecciones internas; estadísticas; equipos de seguridad o emergencia; inducción, capacitación y simulacros; y auditorías.', practica: 'No basta con tener el archivador: cada registro debe estar al día y con la información mínima de los formatos del MTPE.' }],
    },
  },
  {
    id: 'b2', t: '08:30', ch: 'documento', who: null, titulo: 'El registro de accidentes', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de SST', show: ['cumplimiento', 'calidad'],
    body: () => `<p>El registro tiene doce hojas para los últimos doce meses. Cruzas cada línea con el correo de la Dra. Milagros, el cuaderno de turno de mantenimiento y lo que Yesenia recuerda.</p><p><mark class="clave">Busca lo que está mal anotado y lo que no está</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del registro que incumplen la norma o que conviene corregir.',
    doc: { t: 'Registro de accidentes, incidentes peligrosos e incidentes', sub: 'Productos Mar de Piura S.A.C. · últimos 12 meses' },
    lines: [
      { id: 'hugo', t: 'Hace 12 meses · Hugo Ayala · amputación de dos dedos · Accidente incapacitante parcial permanente · Investigación adjunta.' },
      { id: 'rosa', t: 'Hace 34 días · Rosa Purizaca · quemadura en antebrazo, autoclaves · Clasificación: incidente · Sin investigación.', bad: LEY, why: 'Tuvo tres días de descanso médico: es un accidente incapacitante. Y el registro debe incluir la investigación y las medidas (art. 33).' },
      { id: 'cortes', t: 'Cortes leves en eviscerado atendidos en tópico · «varios» · Sin detalle.', bad: BP, why: 'Si se juntan como «varios», nadie verá que se repiten en la misma mesa y con el mismo cuchillo.' },
      { id: 'fuga', t: 'Hace 9 días · (sin anotar) · Según el cuaderno de mantenimiento: fuga de amoníaco en la sala de compresores, evacuación de 20 minutos.', bad: LEY, why: 'Es un incidente peligroso: debía registrarse, investigarse y notificarse en un máximo de 24 horas (art. 110).' },
      { id: 'contrata', t: 'Hace 2 meses · (sin anotar) · Según Yesenia: trabajador de la contrata de limpieza se cortó con una lata en el patio.', bad: LEY, why: 'El art. 34 pide registrar también a los trabajadores tercerizados que trabajan en tus instalaciones.' },
      { id: 'espalda', t: 'Dolores de espalda en conservas · derivados a la médica ocupacional para evaluación.', duda: 'No es un accidente, pero puede ser el inicio de una enfermedad ocupacional. Conviene vigilarlo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges la clasificación de una línea, pero hay sucesos que siguen fuera del registro.' : `Encontraste ${hitsLey} problemas legales. El registro no estaba incompleto por descuido: estaba incompleto justo donde la pizarra de la entrada habría tenido que volver a cero.`,
      flags: missLey ? [] : ['registro_corregido'], rel: { 'julio-sst': 0 },
      cartera: { registros: missLey ? 'Registro de accidentes corregido a medias' : 'Rosa reclasificada; fuga y corte de la contrata por registrar', tablero: missLey ? '212 días' : 'El último accidente fue hace 34 días' },
      pro: { ok: 'Un registro sirve si cuenta todo lo que pasó, incluidos los tercerizados, y si cada caso tiene investigación y medidas.', risk: 'Reclasificar a Rosa tiene una consecuencia incómoda: la pizarra de la entrada está mal.', info: 'Las infracciones por no mantener registros al día o no notificar incidentes peligrosos están tipificadas como graves en el reglamento de inspección.' },
      kusi: missLey ? ['preocupado', 'Hay cosas que pasaron y no están…'] : ['sorpresa', '¡No eran 212 días!'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, arts. 33 y 34: el registro incluye investigación y medidas, y también a trabajadores tercerizados en tus instalaciones.'], [LEY, 'D.S. 019-2006-TR, art. 27.6: no mantener actualizados los registros es infracción grave.']],
    mirada: {
      ve: 'Clasificar mal un accidente parece un detalle técnico. En la práctica, es la forma más común de que una empresa «no tenga accidentes». La diferencia entre incidente, accidente leve e incapacitante está en la norma, no en la conveniencia.',
      visual: { tipo: 'flujo', titulo: '¿Qué fue lo de Rosa?', pasos: ['¿Solo primeros auxilios? → incidente', '¿Vuelve al día siguiente? → accidente leve', '¿Descanso y tratamiento? → incapacitante'], aqui: 2 },
      normas: [{ ley: 'D.S. 005-2012-TR, glosario', dice: 'Incidente: el afectado no sufre lesiones o solo requiere primeros auxilios. Accidente leve: descanso breve con retorno al día siguiente. Accidente incapacitante: da lugar a descanso, ausencia justificada y tratamiento.', practica: 'Tres días de descanso médico no caben en «incidente».' }],
    },
  },
  {
    id: 'b3', t: '10:05', ch: 'llamada', who: null, titulo: 'Tres llamadas', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de SST', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>El celular de la oficina tiene la batería hinchada y hay que tenerlo enchufado. Llamas sentado/a junto al tomacorriente.</p><p>Antes de corregir nada, <mark class="clave">quieres escuchar a quienes estuvieron ahí</mark>.</p>`,
    type: 'calls',
    calls: [['Wilson Ipanaqué · técnico de frío', 'Contesta con el ruido de los compresores', '«Fue una empaquetadura de una válvula, inge. Olió fuerte, sacamos a la gente de conservas veinte minutos y lo cambiamos. Nadie se intoxicó. Carlos dijo que no era para tanto, que no lo anotara. Yo lo puse en mi cuaderno nomás.»'], ['Dra. Milagros Seminario · médica ocupacional', 'Contesta entre dos pacientes', '«A Rosa le dieron tres días. Volvió con el brazo vendado y la pusieron en etiquetado. La clínica me dijo que ellos hacen su notificación, pero en nuestro registro alguien la puso como incidente. Yo avisé por correo, nadie me respondió.»'], ['Juana Yarlequé · supervisora de Servilimp Norte', 'Contesta en voz baja', '«Mi muchacho se cortó con una lata en el patio de desechos. Lo llevamos a la posta. Nadie de la planta nos preguntó nada, inge. Nosotros somos «los de afuera».»']],
    prompt: '¿Qué haces con lo que escuchaste?',
    choices: [
      { id: 'a', label: 'Registrar los tres casos completos —Rosa como incapacitante, la fuga como incidente peligroso y el corte de la contrata— y abrir una investigación para cada uno.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 3, personas: 2, tiempo: -2 }, flags: ['contrata_registrada'], cartera: { contrata: 'Corte del trabajador de Servilimp registrado; Juana entrega su reporte', fuga: 'Registrada como incidente peligroso; investigación abierta' },
          out: 'Juana te manda una foto del parte de la posta en diez minutos, con un «gracias» que parece sorprendido. Wilson te pasa la foto de su cuaderno. Tu tarde ya tiene dueño.',
          pro: { ok: 'Un registro completo incluye a todos los que trabajan en tus instalaciones y lo que casi pasa.', info: 'Las investigaciones no tienen que ser largas: tienen que encontrar causas y medidas.' },
          kusi: ['celebra', '¡Ahora el registro cuenta lo que pasó!'] } },
      { id: 'b', label: 'Corregir lo de Rosa, que es de la planta, y dejar fuera la fuga (nadie se lesionó) y el corte de la contrata (no es personal propio).',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, calidad: -1, personas: -2 }, cartera: { contrata: 'Fuera del registro', fuga: 'Solo en el cuaderno de Wilson' },
          out: 'El registro queda más corto. La fuga sigue en el cuaderno de Wilson y la contrata sigue siendo «los de afuera».',
          pro: { ok: 'Corriges el caso más claro.', risk: 'Una fuga de amoníaco sin lesionados es justo lo que hay que investigar para que la próxima no tenga lesionados. Y el corte del tercerizado también es tu registro.' },
          kusi: ['preocupado', '¿Y la fuga? ¿Y Juana?'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 110: el empleador notifica los incidentes peligrosos en un máximo de 24 horas; los accidentes no mortales los notifica el centro médico que atiende.'], [BP, 'Escucha a quien estuvo ahí antes de corregir un registro.']],
    mirada: {
      ve: 'Detrás de cada línea vacía de un registro hay una conversación en la que alguien dijo «no es para tanto». Rehacer el registro es también rehacer esa conversación.',
      visual: { tipo: 'balanza', a: { t: 'Registro corto', items: ['Pizarra intacta', 'Menos trabajo hoy'] }, b: { t: 'Registro completo', items: ['Se investiga la fuga', 'La contrata cuenta', 'La planta aprende'] } },
    },
  },
  {
    id: 'b4', t: '11:50', ch: 'presencial', who: 'julio-sst', titulo: 'La pizarra', banner: 'assets/foto2/tension.webp', lugar: 'Entrada de la planta, frente a la pizarra', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Julio te espera frente a la pizarra verde. Las operarias pasan a marcar su entrada al segundo turno y miran el número: 212.</p><p>«${F.has('registro_corregido') ? 'Ya vi que reclasificaste lo de Rosa' : 'Me dicen que estás moviendo el registro'}. Te entiendo, ${n}. Pero el cliente de Corea viene en tres semanas y esa pizarra es lo primero que ve. <mark class="clave">Arregla el papel si quieres, pero la pizarra déjala</mark>. No hagamos olas.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle cambiar la pizarra a 34 días hoy y explicarlo en la charla de la tarde: «contamos la verdad para cuidarnos mejor». Ofrecerle preparar tú lo que se le dirá al cliente.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 1 }, rel: { 'julio-sst': 0 }, flags: ['tablero_honesto'], cartera: { tablero: '34 días · explicado en la charla' },
          out: 'Julio resopla y se queda mirando el número. «34. Qué vergüenza.» Luego: «Ya. Pero tú le explicas al cliente». En la charla de la tarde, una operaria de conservas levanta la mano: «¿O sea que lo de Rosa sí contaba?».',
          pro: { ok: 'El indicador vuelve a coincidir con el registro y la planta ve que contar no trae castigo.', risk: 'Julio quedó incómodo y te va a medir por cómo manejes al cliente.', info: 'Muchas empresas cambian «días sin accidentes» por indicadores que premian reportar, como observaciones registradas o medidas cerradas.' },
          kusi: ['animo', '34 de verdad valen más que 212 de mentira.'] } },
      { id: 'b', label: 'Dejar la pizarra en 212 y corregir solo el registro: total, nadie compara las dos cosas.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -2, confianza: 2 }, rel: { 'julio-sst': 1 }, flags: ['tablero_maquillado'], cartera: { tablero: '212 días · no coincide con el registro' },
          out: 'Julio te da una palmada en el hombro. Rosa pasa frente a la pizarra con su brazo todavía rosado y la mira un segundo más de lo normal.',
          pro: { ok: 'Evitas el choque con tu jefe en tu segundo día.', risk: 'Un número que todos saben que es falso enseña que aquí los accidentes se esconden. Y alguien, algún día, lo va a comparar.' },
          kusi: ['triste', 'Rosa sabe que no son 212…'] } },
      { id: 'c', label: 'Quitar la pizarra hasta que haya un indicador mejor, sin decir nada.',
        res: { q: 'aceptable', fx: { etica: 1, confianza: -2, personas: -1 }, cartera: { tablero: 'Pizarra retirada sin explicación' },
          out: 'La pizarra desaparece. En el comedor corre el rumor de que «pasó algo grave». Julio te pregunta por qué no le avisaste.',
          pro: { ok: 'No sostienes un número falso.', risk: 'Lo que se quita sin explicar se llena de rumores.' },
          kusi: ['pensando', 'Sin explicación, la gente imagina lo peor.'] } },
    ],
    rules: [[BP, 'Un indicador de seguridad visible debe coincidir con el registro oficial.']],
    mirada: {
      ve: 'Las pizarras de «días sin accidentes» tienen un efecto perverso: cuando el número es alto, nadie quiere ser quien lo baje. Entonces los accidentes se esconden. Un/a supervisor/a de SST cuida que lo que se muestra sea verdad, aunque duela.',
      visual: { tipo: 'cambio', titulo: 'Qué enseña la pizarra', pares: [['212 días falsos', '«Aquí no se reporta»'], ['34 días con explicación', '«Aquí se cuenta lo que pasa»'], ['Pizarra quitada en silencio', '«Algo nos esconden»']] },
    },
  },
  {
    id: 'b5', t: '14:40', ch: 'documento', who: null, titulo: 'La fuga, nueve días después', banner: 'assets/3d/scenes/planta-sq.webp', lugar: 'Sala de compresores', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>La sala de compresores huele a aceite y, muy de fondo, a amoníaco. Wilson te muestra la válvula cambiada y la empaquetadura vieja, que guardó en una bolsa «por si acaso».${F.has('puerta_reportada') ? ' De paso te dice que el repuesto de la manija de la cámara 3 sigue sin llegar de Lima.' : ''}</p><p>El plazo de 24 horas para notificar pasó hace ocho días. <mark class="clave">Igual hay que poner esto en orden</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena cómo regularizas la fuga de amoníaco.', boton: 'Regularizar la fuga',
    items: [
      { id: 'hechos', t: 'Confirmar los hechos con Wilson y las evidencias: hora, duración, cuántas personas evacuaron', por: 'Primero se reconstruye qué pasó.' },
      { id: 'registro', t: 'Anotarla en el registro como incidente peligroso', por: 'Lo que no está en el registro no existe para el sistema.' },
      { id: 'notifica', t: 'Notificarla en el sistema del MTPE, aunque sea fuera de plazo, y dejar constancia de por qué', por: 'Regularizar tarde es mejor que esconder.' },
      { id: 'investiga', t: 'Investigar por qué falló la empaquetadura y por qué no se reportó', por: 'La segunda pregunta es tan importante como la primera.' },
      { id: 'comite', t: 'Llevarla al comité con las medidas propuestas', por: 'El comité conoce y vigila las medidas.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 6 : 2, calidad: q === 'buena' ? 3 : 0 }, flags: q === 'riesgosa' ? [] : ['fuga_regularizada'],
        cartera: { fuga: q === 'riesgosa' ? 'Pasos en desorden: notificación pendiente' : 'Registrada, notificada tarde con constancia, investigación abierta' },
        out: q === 'buena' ? 'Wilson te mira llenar el formulario en la laptop. «O sea que mi cuaderno sí servía.» Te cuenta que la empaquetadura de la cámara 3 «también está para cambio».' : q === 'aceptable' ? 'Lo regularizas, aunque Yesenia te hace notar que notificaste antes de tener claros los hechos: hay que corregir la hora.' : 'Llevas la fuga al comité sin registro ni notificación. Flor te preguntará dónde está el papel.',
        pro: { ok: 'Regularizar con transparencia muestra que la empresa corrige, no que esconde.', risk: 'Notificar tarde tiene un costo. Esconder, si se descubre, cuesta mucho más.', info: 'No notificar un incidente peligroso o no investigarlo es una infracción grave en el reglamento de inspección (art. 27.2 del D.S. 019-2006-TR).' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tarde, pero en orden y sin esconder!' : 'Primero los hechos, luego el formulario.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, arts. 110 y 111: incidentes peligrosos, máximo 24 horas, en el sistema informático del MTPE.'], [LEY, 'D.S. 019-2006-TR, art. 27.2: no notificar incidentes peligrosos o no investigar es infracción grave.']],
    mirada: {
      ve: 'Una fuga de amoníaco sin heridos es una advertencia gratis. Si no se registra, se pierde lo único bueno que tenía: la oportunidad de evitar la siguiente.',
      visual: { tipo: 'linea', titulo: 'La fuga', hitos: [['Día 0', 'Fuga y evacuación de 20 minutos'], ['Día 1', 'Vence el plazo de 24 horas'], ['Día 9', 'La encuentras en un cuaderno'], ['Hoy', 'Registro, notificación e investigación']] },
    },
  },
  {
    id: 'b6', t: '16:15', ch: 'presencial', who: null, titulo: 'Yesenia', banner: 'assets/foto/cafe.webp', lugar: 'Oficina de SST', show: ['personas', 'confianza'],
    body: () => `<p>Yesenia tiene 24 años, es técnica en seguridad industrial del instituto de Sullana y lleva un año en la planta. Te trae un pan con camote de la cafetería y se sienta a ordenar fotocopias.</p><p>Notas que no te mira cuando hablas de los registros. <mark class="clave">Le haces dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Yesenia.',
    opts: [
      { id: 'porque', label: '¿Por qué se dejaron de llenar los registros?', info: '«Porque cuando anoté lo de Rosa como accidente, Carlos me hizo cambiarlo. Me dijo que yo no era médica. Después ya no quise anotar nada sin preguntar.» Se le quiebra un poco la voz. «Perdón, inge.»' },
      { id: 'jefe', label: '¿Quién estaba a cargo de SST antes de mí?', info: '«Nadie, seis meses. El anterior se fue después de lo de Hugo. Yo hacía lo que podía con las charlas y las listas.»' },
      { id: 'quieres', label: '¿Qué te gustaría hacer aquí?', info: '«Inspecciones. Me gusta caminar la planta. Pero siempre me ponían a sacar fotocopias de listas.»' },
      { id: 'rosa', label: '¿Rosa sabe cómo quedó registrado lo suyo?', info: '«Sí. Me preguntó por qué decía «incidente» si a ella le dolió tres días. No supe qué decirle.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, confianza: 3 }, flags: picks.includes('porque') || picks.includes('quieres') ? ['yesenia_aliada'] : [],
      cartera: { registros: picks.includes('porque') ? 'Causa: presión de Producción para reclasificar' : 'Yesenia lleva los registros sola' },
      out: picks.includes('porque') ? 'Le dices que lo que hizo era lo correcto y que desde ahora los registros los firma SST, no Producción. Yesenia se limpia los ojos con la manga del mandil y asiente.' : 'Yesenia sonríe por primera vez en el día. «Si quiere, mañana le enseño los atajos de la planta. Hay sitios donde nadie mira.»',
      kusi: ['feliz', '¡Tienes equipo!'],
    }),
    mirada: {
      ve: 'Los registros incompletos rara vez son pereza. Casi siempre hay alguien que intentó anotar la verdad y aprendió que no convenía. Recuperar a esa persona vale tanto como recuperar el registro.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Yesenia', txt: 'Cuando anoté lo de Rosa como accidente, me hicieron cambiarlo. Después ya no quise anotar nada sin preguntar.' },
    },
  },
  {
    id: 'b7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'Para Flor', banner: 'assets/esc/meta.webp', lugar: 'Oficina de SST', show: ['personas', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Por la ventana ves el sol bajar sobre la bahía de Paita, naranja entre las grúas del puerto. ${F.has('tablero_honesto') ? 'La pizarra de la entrada ya dice 34.' : 'La pizarra de la entrada sigue diciendo 212.'}</p><p>Mañana es el comité, el primero en cuatro meses. <mark class="clave">Le escribes a Flor para prepararlo</mark>.</p>`,
    type: 'compose', enviaA: 'flor', para: 'Para: Flor Chunga · Representante en el comité', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cuenta', t: 'Lo que le cuentas', ops: [
        { id: 'c1', t: 'Flor, revisé los registros: hay un accidente mal clasificado, una fuga sin registrar y un corte de la contrata que no se anotó.', ok: true, por: 'El comité tiene derecho a conocer estos documentos.' },
        { id: 'c2', t: 'Flor, todo bien con los registros, solo detalles.', ok: false, por: 'Le ocultas al comité lo que debe vigilar.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: '¿Puedes traer lo que dicen las compañeras de eviscerado y conservas sobre los cortes y la espalda?', ok: true, por: 'La voz de los trabajadores completa el registro.' },
        { id: 'p2', t: 'Mañana solo firmamos el acta y ya.', ok: false, por: 'El comité no es para firmar.' },
      ] },
      { id: 'cierra', t: 'Cómo cierras', ops: [
        { id: 'k1', t: 'Te mando el registro corregido esta noche para que lo leas antes.', ok: true, por: 'Leer antes permite opinar.' },
        { id: 'k2', t: 'Mañana te explico, no te preocupes.', ok: null, por: 'Amable, pero llega sin preparación.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'p1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0, cumplimiento: q === 'buena' ? 2 : 0 }, rel: { delegada: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        cartera: { comite: q === 'buena' ? 'Flor lleva la voz de eviscerado y conservas' : 'Comité mañana a las 15:00' },
        out: q === 'buena' ? 'Flor responde con un audio: «Inge, Rosa es mi comadre. Mañana llevo todo. Por fin alguien nos cuenta las cosas antes».' : q === 'aceptable' ? 'Flor responde: «Ya, inge. Mañana vemos».' : 'Flor responde: «Ok». Nada más.',
        pro: { ok: 'El comité puede conocer los documentos e informes sobre condiciones de trabajo (art. 42 del reglamento).', risk: 'Si el comité llega a ciegas, solo puede aplaudir o desconfiar.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mañana el comité llega preparado!' : 'Que Flor llegue sabiendo.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42 a): el comité conoce los documentos e informes relativos a las condiciones de trabajo.']],
    mirada: { ve: 'Compartir con el comité lo que encontraste antes de la reunión es la diferencia entre un comité que aprueba lo que le traen y uno que vigila de verdad.' },
  },
];
