// Generalista de RR.HH. · Capítulo 7 · «La certificación» · Semana 2, martes.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// La certificadora «Andes Sostenible» es ficticia.
// Normas citadas:
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 33: registros obligatorios del sistema de gestión de SST,
//   entre ellos el de accidentes de trabajo, enfermedades ocupacionales e incidentes peligrosos, el de inspecciones
//   internas y el de inducción, capacitación, entrenamiento y simulacros.
//   R.M. 050-2013-TR: formatos referenciales con la información mínima de esos registros.
//   https://dgadcb.unasam.edu.pe/images/marco-legal/28-05-2025_12-17-26_6. RM 050-2013-TR - FORMATOS REFERENCIALES- SGSST -IPERC.pdf
//   https://modelo.pe/registro-de-induccion-capacitacion-y-entrega-de-epp/
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - Contratos modales con causa objetiva (D.S. 003-97-TR, arts. 67 y 72; citados en el capítulo 2).

export const CAP = {
  n: 7, titulo: 'La certificación', dia: 'Semana 2, martes', foto: 'assets/foto/revisa.webp',
  lugar: 'Sala de reuniones · Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Cusco, martes. A las 9:00 llega la auditora de Andes Sostenible, la certificadora de turismo sostenible que el hotel quiere poner en su web antes de la temporada. Revisará contratos, registros y prácticas laborales. Tienes dos horas.', boton: 'Abrir las carpetas',
  kusi: 'Una auditoría no se gana escondiendo: se gana mostrando lo que haces y lo que vas a corregir.',
  lead: 'Elegiste qué evidencias preparar primero, encontraste los huecos de los registros, resististe la tentación de retrofechar firmas, conseguiste lo que faltaba, armaste un plan de acción y decidiste qué contarle a la auditora.',
  reflexion: '¿Qué diferencia hay entre ordenar una evidencia y fabricarla?',
  siguiente: { n: 8, titulo: 'Lleno total', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'evidencias', p: 'Carpeta de evidencias laborales', j: 'Andes Sostenible', d: 0, e: 'Hoy, 9:00' },
  { id: 'registros', p: 'Registros de SST', j: 'RR.HH.', d: 0, e: 'Hoy' },
  { id: 'plan', p: 'Plan de acción para las observaciones', j: 'Verónica · Gerencia', d: 0, e: 'Hoy' },
];

export const FUTURO = {
  evidencias_priorizadas: ['Preparaste primero contratos, asistencia y registros de SST.', 'La auditora encontró lo esencial ordenado.'],
  huecos_detectados: ['Encontraste tú los huecos de los registros antes que la auditora.', 'Llegaste a la reunión sin sorpresas.'],
  induccion_honesta: ['La inducción se registró con la fecha real de la firma y una nota aclaratoria.', 'La auditora lo valoró.'],
  induccion_retrofechada: ['Hiciste firmar la inducción con una fecha pasada.', 'Una trabajadora nueva lo comentará.'],
  evidencias_completas: ['Conseguiste en el día las evidencias que faltaban.', 'La carpeta quedó completa.'],
  plan_correctivo: ['Dejaste un plan de acción con causa, responsable, fecha y evidencia de cierre.', 'Se revisará en un mes.'],
  auditora_transparencia: ['Le contaste a la auditora los pendientes que conocías y cómo los vas a cerrar.', 'El informe saldrá con observaciones, no con hallazgos ocultos.'],
  auditora_silencio: ['Callaste los pendientes que la auditora no preguntó.', 'Si los encuentra después, el informe será peor.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción, housekeeping y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  milagros: { n: 'Milagros Torres', sub: 'Recepcionista de la temporada', c: '#0E7C86' },
};

export const WSP = [
  { chat: 'wendy', t: '07:30', de: 'Wendy', txt: 'Desde Sicuani 🌄 Mi mamá ya está mejor. Gracias. Suerte con la auditoría.', si: 'wendy_descansa' },
  { chat: 'wendy', t: '07:30', de: 'Wendy', txt: 'Ya estoy en recepción. ¿Le imprimo algo para la auditora? 😅', no: 'wendy_descansa' },
  { chat: 'milagros', t: '08:10', de: 'Milagros', txt: 'Ya puse el café y las galletas de quinua en la sala. ¿La auditora habla inglés? Por si acaso 😄' },
  { chat: 'contador', t: '12:20', de: 'Iván', txt: 'Le envié las constancias de alta del T-Registro de los 18. Están todas.', si: 'calendario_cierre' },
  { chat: 'contador', t: '12:20', de: 'Iván', txt: 'Adjunto constancias de alta. Por favor confirme recepción por escrito.', si: 'ivan_amenazado' },
  { chat: 'veronica', t: '17:05', de: 'Verónica', txt: 'La auditora me dijo que es la primera vez que un hotel le cuenta sus pendientes antes de que los encuentre. No sé si eso es bueno o malo 😅', si: 'auditora_transparencia' },
];

export const CORREOS = [
  { t: '07:05', de: 'Andes Sostenible · certificadora', para: 'Gerencia Inti Wasi', asunto: 'Agenda de la auditoría', html: '<p>09:00 Reunión de apertura · 09:30 Revisión documental (contratos, planilla, registros de SST, actas) · 12:00 Recorrido por cocina, lavandería y housekeeping · 15:30 Reunión de cierre.</p><p>Ing. Pilar Arce, auditora líder</p>' },
  { t: '16:10', de: 'Ing. Pilar Arce', para: 'Gerencia Inti Wasi', asunto: 'Resultado preliminar', html: '<p>Gracias por la apertura. El informe preliminar incluirá observaciones en los registros de SST y en la documentación contractual. Tienen 30 días para presentar su plan de acción.</p>' },
];

export const QUIZ = [
  { q: '¿Qué registros obligatorios de SST revisaría una auditoría?', ops: ['Solo el reglamento interno', 'Accidentes e incidentes, inspecciones internas e inducción y capacitación, entre otros', 'Solo las fotos del personal', 'Ninguno: son voluntarios'], ok: 1, por: 'El Reglamento de la Ley 29783 (art. 33) enumera los registros obligatorios del sistema de gestión de SST.' },
  { q: 'Se dio la inducción el jueves, pero nadie firmó. ¿Qué haces?', ops: ['Que firmen con fecha del jueves', 'Que firmen hoy, con la fecha real, y una nota que diga cuándo se dio', 'Decir que se perdió', 'No registrarla'], ok: 1, por: 'Retrofechar una firma es fabricar una evidencia. Registrar tarde con la verdad, no.' },
  { q: 'Un buen plan de acción correctiva incluye…', ops: ['Una disculpa', 'Causa, acción, responsable, fecha y evidencia de cierre', 'Solo la acción', 'El nombre de quien se equivocó'], ok: 1, por: 'Sin causa ni fecha ni evidencia, el problema vuelve.' },
  { q: 'Un accidente de la semana pasada está en un correo, no en el registro. ¿Qué corresponde?', ops: ['Dejarlo así', 'Pasarlo al registro de accidentes con los hechos y la investigación de causas', 'Borrarlo', 'Esperar otro accidente'], ok: 1, por: 'Los accidentes de trabajo se registran e investigan; para eso existe el registro.' },
  { q: 'La auditora no preguntó por un problema que conoces. ¿Qué es lo más sólido?', ops: ['Callar', 'Contarlo con el plan para cerrarlo', 'Negarlo si pregunta', 'Cambiar de tema'], ok: 1, por: 'Un hallazgo que descubre la auditora después pesa más que una observación que reconoces con un plan.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'v1', t: '07:10', ch: 'documento', who: null, titulo: 'Dos horas, tres carpetas', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de RR.HH.', show: ['tiempo', 'calidad'],
    body: (n, F) => `<p>Sobre tu escritorio hay tres archivadores de palanca, uno con el lomo roto. ${F.has('plan_cuidado') ? 'Anoche imprimiste el plan de cuidado del equipo; lo dejas encima.' : ''}</p><p>No llegas a ordenar todo antes de las nueve. <mark class="clave">Eliges tres cosas para tener impecables</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres evidencias que preparas primero.', boton: 'Preparar estas tres', resumen: 'Preparaste',
    cols: ['Evidencia', 'Para qué sirve'],
    rows: [
      { id: 'contratos', cells: ['Contratos de los 18 ingresos y matriz de modalidades', 'Mostrar la causa de cada contrato'] },
      { id: 'asistencia', cells: ['Cuadro de turnos y registro de asistencia', 'Mostrar jornadas y descansos'] },
      { id: 'sst', cells: ['Registros de SST: accidentes, inducción e inspecciones', 'Mostrar el sistema de gestión'] },
      { id: 'fotos', cells: ['Fotos del personal sonriendo en la boda', 'Que se vea bonito'] },
      { id: 'reglamento', cells: ['Reglamento interno de 2015, plastificado', 'Que exista'] },
      { id: 'cursos', cells: ['Certificados de cursos de cocina del chef', 'Mostrar capacitación'] },
    ],
    score: { contratos: 3, asistencia: 3, sst: 3, fotos: 0, reglamento: 1, cursos: 1 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, tiempo: 1 },
        flags: q === 'buena' ? ['evidencias_priorizadas'] : [], cartera: { evidencias: q === 'buena' ? 'Contratos, asistencia y SST ordenados' : 'Carpeta a medias' },
        out: q === 'buena' ? 'A las 8:50 tienes tres carpetas con separadores de colores. Milagros te alcanza un café.' : 'Tienes algo ordenado, pero lo que la auditora revisará primero sigue suelto.',
        pro: { ok: 'Una auditoría laboral empieza por contratos, jornadas y SST.', risk: 'Las fotos bonitas no reemplazan un registro.', info: 'Mira la agenda que mandó la auditora: ahí dice qué revisará primero.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Tres carpetas impecables!' : '¿Eso es lo que van a revisar?'],
      };
    },
    rules: [[BP, 'Prepara primero lo que la agenda de la auditoría dice que revisará.']],
    mirada: {
      ve: 'Una certificación de turismo sostenible no mira solo el reciclaje: revisa cómo trata el hotel a su gente. Para la generalista, es el momento de ver si todo lo que hizo en estas dos semanas quedó por escrito.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Peso en la auditoría', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Si sobra tiempo', 'No suma'], items: [['Contratos', .4, .9], ['Asistencia', .35, .8], ['Registros SST', .6, .9], ['Reglamento 2015', .2, .35], ['Fotos', .1, .05]] },
    },
  },
  {
    id: 'v2', t: '09:30', ch: 'documento', who: null, titulo: 'Lo que hay en las carpetas', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de reuniones', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>La ingeniera Pilar Arce, arequipeña, lentes en la punta de la nariz, abre la primera carpeta. Mientras ella lee contratos, tú repasas las otras.${F.has('contrato_mercado') ? ' Sabes que los contratos dicen «necesidad de mercado».' : ''}${F.has('accidente_ocultado') ? ' Y sabes que el corte de Kevin no está en ninguna parte.' : ''}</p><p><mark class="clave">Mejor encontrar tú los huecos que ella</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que una auditoría observaría.',
    doc: { t: 'Carpeta de evidencias laborales', sub: 'Hotel Inti Wasi · índice' },
    lines: [
      { id: 'induccion', t: 'Inducción de los 18 ingresos: se dio el jueves, pero no hay hoja de asistencia firmada.', bad: LEY, why: 'El registro de inducción, capacitación, entrenamiento y simulacros es obligatorio. Si no se registró, para el sistema no existe.' },
      { id: 'accidente', t: 'Accidentes e incidentes: el corte de la semana pasada en cocina solo está en un correo; el registro está vacío.', bad: LEY, why: 'El registro de accidentes de trabajo e incidentes es obligatorio, con la investigación de causas.' },
      { id: 'asistencia', t: 'Registro de asistencia: existe desde el jueves; antes, Haydée anotaba de memoria.', bad: BP, why: 'Es una mejora reciente. Hay que mostrarla como tal y explicar desde cuándo.' },
      { id: 'examenes', t: 'Exámenes médicos de ingreso: hechos a 12 de los 18 nuevos.', bad: BP, why: 'Faltan seis. Conviene completarlos con fecha y mostrar el avance.' },
      { id: 'mediacion', t: 'Acta de mediación de la cocina, con acuerdos y fecha de revisión.' },
      { id: 'matriz', t: 'Matriz de modalidades de contrato, con la causa de cada uno.' },
      { id: 'tarifario', t: 'Tarifario de habitaciones de la temporada.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Te parece que todo está en orden. A las 10:15, la auditora levanta la vista: «¿Y la hoja de inducción?».' : `Separas ${hitsLey} huecos en una hoja aparte. Cuando la auditora llegue a ellos, ya tendrás una respuesta.`,
      flags: missLey ? [] : ['huecos_detectados'], cartera: { registros: missLey ? 'Huecos sin ver' : 'Inducción y accidentes por registrar' },
      pro: { ok: 'Conocer tus huecos antes que la auditora te permite explicarlos con calma.', risk: 'Lo que se hizo pero no se registró, para una auditoría, no se hizo.', info: 'El Ministerio de Trabajo publicó formatos referenciales con la información mínima de cada registro (R.M. 050-2013-TR).' },
      kusi: missLey ? ['sorpresa', '¡La hoja de inducción!'] : ['curioso', 'Mejor saberlo antes.'],
    }),
    rules: [[LEY, 'Son registros obligatorios del sistema de gestión de SST, entre otros, el de accidentes e incidentes y el de inducción y capacitación (D.S. 005-2012-TR, art. 33).']],
    mirada: {
      ve: 'En empresas que nunca tuvieron RR.HH., muchas cosas buenas se hacen pero no se registran. La auditoría obliga a convertir la práctica en evidencia.',
      visual: { tipo: 'cambio', titulo: 'De lo que se hizo a lo que se puede mostrar', pares: [['«Les dimos la inducción»', 'Hoja firmada con fecha'], ['«Kevin se cortó, ya está bien»', 'Registro e investigación'], ['«Haydée sabe quién vino»', 'Registro de asistencia']] },
    },
  },
  {
    id: 'v3', t: '10:40', ch: 'presencial', who: 'veronica', titulo: '«Con fecha del jueves»', banner: 'assets/foto2/tension.webp', lugar: 'Pasillo, fuera de la sala', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Durante el receso, Verónica te lleva al pasillo. Habla bajito, rápido.</p><p>«La inducción sí se dio, ¿no? Entonces que los 18 firmen la hoja ahorita, <mark class="clave">con fecha del jueves</mark>. No estamos mintiendo: solo estamos ordenando.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Que firmen hoy, con la fecha de hoy, y agregar una nota: «inducción realizada el jueves; registrada hoy». Y decírselo a la auditora.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 3, confianza: 1 }, rel: { veronica: 0 }, flags: ['induccion_honesta'], cartera: { registros: 'Inducción registrada con fecha real y nota' },
          out: 'Verónica suspira: «Va a quedar como una observación». Le dices que sí: una observación, no una evidencia falsa. La auditora lee la nota y anota algo. «Gracias por la honestidad. Que no se repita.»',
          pro: { ok: 'Ordenas la evidencia sin fabricarla.', risk: 'La observación quedará en el informe.', info: 'De ahora en adelante, la hoja de inducción se firma el mismo día, al terminar.' },
          kusi: ['celebra', '¡Ordenar sí, inventar no!'] } },
      { id: 'b', label: 'Hacerlo como dice Verónica: la inducción sí se dio, y la fecha es la real.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -2, confianza: 1 }, rel: { veronica: 1 }, flags: ['induccion_retrofechada'], cartera: { registros: 'Firmas con fecha pasada' },
          out: 'Pasas la hoja por las áreas. Luz Clarita firma, duda y pregunta: «¿Pongo la fecha del jueves? Pero hoy es martes…». Firma igual.',
          pro: { ok: 'La carpeta se ve completa.', risk: 'Una firma con fecha falsa es una evidencia fabricada, aunque el hecho haya ocurrido. Si se descubre, todo el sistema pierde credibilidad.' },
          kusi: ['indignado', '¡Hoy es martes!'] } },
      { id: 'c', label: 'Decirle a la auditora que la hoja se traspapeló y que la enviarás después.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -1 }, cartera: { registros: 'Hoja «traspapelada»' },
          out: 'La auditora asiente sin creerlo del todo: «Envíela esta semana». Ahora tendrás que inventar una hoja o desdecirte.',
          pro: { ok: 'Ganas tiempo.', risk: 'Una excusa abre la puerta a una mentira más grande.' },
          kusi: ['preocupado', '¿Traspapelada? Si nunca existió…'] } },
    ],
    rules: [[BP, 'Una evidencia se registra con la fecha real. Registrar tarde con una nota es ordenar; retrofechar es fabricar.']],
    mirada: {
      ve: 'Verónica tiene razón en algo: la inducción sí se dio. Pero la diferencia entre «ordenar» y «fabricar» está en la fecha. La generalista protege a la empresa justamente al no dejarla cruzar esa línea.',
      visual: { tipo: 'balanza', a: { t: 'Fecha del jueves', items: ['Carpeta completa', 'Sin observación', 'Una firma falsa'] }, b: { t: 'Fecha real y nota', items: ['Una observación', 'Evidencia verdadera', 'Credibilidad intacta'] } },
    },
  },
  {
    id: 'v4', t: '12:00', ch: 'llamada', who: null, titulo: 'Lo que falta, en tres llamadas', banner: 'assets/foto2/callcenter.webp', lugar: 'Oficina de RR.HH., mientras la auditora recorre la cocina', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>Mientras la auditora recorre la cocina con el chef, tienes media hora para conseguir lo que falta.</p><p><mark class="clave">Tres llamadas, tres respuestas distintas</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Clínica San Juan de Dios · exámenes de ingreso', 'Contesta la recepcionista', '«Los seis que faltan pueden venir mañana a las 7:30, en ayunas. Mándenos la lista hoy.»'],
      ['Chef Rolando · desde la cocina', 'Contesta con la auditora al lado', '«¿El corte de Kevin? Fue la tabla mojada. Ya pedí tablas antideslizantes. ¿Eso hay que escribirlo?»'],
      ['CPC Iván Mendoza', 'Contesta al segundo timbre', '«Las constancias de alta del T-Registro de los 18 se las mando en diez minutos.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Mandar hoy la lista a la clínica, pasar el corte de Kevin al registro con la causa y la medida del chef, y sumar las constancias de Iván a la carpeta.',
        res: { q: 'buena', fx: { calidad: 4, cumplimiento: 4, tiempo: -1 }, flags: ['evidencias_completas'], cartera: { evidencias: 'Exámenes agendados, accidente registrado, altas en carpeta' },
          out: 'A las 12:40, la carpeta tiene tres hojas nuevas. El chef te dicta la investigación del corte en dos minutos: «Tabla mojada, cuchillo sin filo, apuro». La auditora la lee al volver.',
          pro: { ok: 'Conviertes lo que se hizo en evidencia, con la fecha real.', info: 'La investigación de un accidente no busca culpables: busca causas y medidas.' },
          kusi: ['animo', '¡Tres huecos menos!'] } },
      { id: 'b', label: 'Dejar todo para después de la auditoría: ya no hay tiempo.',
        res: { q: 'aceptable', fx: { tiempo: 2, cumplimiento: -2 }, cartera: { evidencias: 'Pendientes para después' },
          out: 'La auditora vuelve y encuentra los mismos huecos que en la mañana.',
          pro: { ok: 'No te desbordas.', risk: 'Lo que podías resolver en media hora quedará como observación.' },
          kusi: ['pensando', 'Media hora daba para mucho.'] } },
    ],
    mirada: { ve: 'Muchos huecos de una auditoría se cierran con una llamada a tiempo. La generalista sabe a quién llamar porque conoce a todos los proveedores.' },
  },
  {
    id: 'v5', t: '14:00', ch: 'documento', who: null, titulo: 'El plan de acción', banner: 'assets/esc/escalera.webp', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Almuerzas una sopa de quinua mientras la auditora revisa la planilla con Iván por videollamada.${F.has('honorarios_espera') ? ' Ella ya preguntó por qué hay personas con horario fijo cobrando por recibo.' : ''}${F.has('contrato_mercado') ? ' Y por qué los contratos de temporada dicen «necesidad de mercado».' : ''}</p><p>Para cada observación, <mark class="clave">armas el plan en el orden correcto</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de un plan de acción correctiva. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'describe', t: 'Describir la observación tal como la vio la auditora', por: 'Sin adornos ni excusas.' },
      { id: 'causa', t: 'Encontrar la causa: por qué pasó', por: 'Si no hay causa, se repite.' },
      { id: 'accion', t: 'Definir la acción que ataca esa causa', por: 'No basta con corregir el papel.' },
      { id: 'responsable', t: 'Poner un responsable y una fecha', por: 'Sin nombre ni fecha, nadie lo hace.' },
      { id: 'evidencia', t: 'Definir qué evidencia demostrará que se cerró', por: 'Es lo que revisará la próxima auditoría.' },
      { id: 'revisa', t: 'Revisar en un mes si funcionó', por: 'Un plan que nadie revisa no es un plan.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: 2 },
        flags: q === 'riesgosa' ? [] : ['plan_correctivo'], cartera: { plan: q === 'riesgosa' ? 'Lista de tareas' : 'Plan con causa, responsable, fecha y evidencia' },
        out: q === 'buena' ? 'El plan tiene una fila por observación. En la de inducción escribes: «Causa: no había formato. Acción: hoja firmada al terminar cada inducción. Responsable: RR.HH.».' : 'El plan tiene filas, aunque algún paso quedó en un orden que lo debilita.',
        pro: { ok: 'Un plan con causa y evidencia convierte una observación en una mejora.', risk: 'Si la acción solo corrige el papel, la observación volverá.', info: 'La auditora dio 30 días: pon fechas antes de ese plazo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Causa, acción, responsable y fecha!' : 'El orden también convence.'],
      };
    },
    rules: [[BP, 'Una acción correctiva ataca la causa, tiene responsable, fecha y una evidencia de cierre.']],
    mirada: {
      ve: 'Las observaciones no son un fracaso: son la lista de mejoras que la auditora te deja hecha. Lo que importa es que el plan llegue a la causa.',
      visual: { tipo: 'flujo', titulo: 'De la observación al cierre', pasos: ['Observación', 'Causa', 'Acción', 'Responsable y fecha', 'Evidencia', 'Revisión'] },
    },
  },
  {
    id: 'v6', t: '15:30', ch: 'presencial', who: null, titulo: '«¿Algo más que deba saber?»', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala de reuniones · reunión de cierre', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => {
      const p = [];
      if (F.has('honorarios_espera')) p.push('las tres personas que siguen con recibos por honorarios');
      if (F.has('milagros_recibo')) p.push('Milagros, que entró con recibo');
      if (F.has('contrato_mercado')) p.push('la causa equivocada de los contratos');
      if (F.has('siete_dias')) p.push('las camareras que trabajan siete días');
      if (F.has('accidente_ocultado')) p.push('el corte de Kevin, que se dijo que fue en su casa');
      const lista = p.length ? `Tú sabes de algo que todavía no está en la mesa: ${p.join(', ')}.` : 'Tú sabes que quedan pendientes menores: los seis exámenes y el reglamento interno de 2015.';
      return `<p>La auditora cierra su laptop y mira a Verónica y a ti. «Ya revisé lo que tenía en la agenda. <mark class="clave">¿Hay algo más que deba saber?</mark>»</p><p>${lista}</p>`;
    },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No agregar nada: ella revisó lo que tenía en la agenda.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -1 }, rel: { veronica: 1 }, flags: ['auditora_silencio'],
          out: 'La auditora asiente y guarda sus cosas. Verónica te mira agradecida. Lo que no dijiste sigue ahí, esperando la próxima auditoría o una inspección.',
          pro: { ok: 'La reunión termina rápido y sin tensión.', risk: 'Si la auditora lo descubre después, la confianza en todo lo demás se cae.' },
          kusi: ['preocupado', 'Te preguntó directamente…'] } },
      { id: 'b', label: 'Contarle los pendientes que conoces y cómo los vas a cerrar, con fecha.',
        res: { q: 'buena', fx: { etica: 5, confianza: 3, cumplimiento: 2 }, rel: { veronica: 0 }, flags: ['auditora_transparencia'],
          out: 'Verónica se tensa. La auditora toma nota en silencio y luego dice: «Esto va como observación con plan de acción, no como hallazgo. Lo que me preocupa no es lo que me cuentan: es lo que me esconden».',
          pro: { ok: 'Reconocer un problema con un plan es más sólido que esperar que nadie lo encuentre.', risk: 'El informe tendrá más observaciones, y Verónica no lo disfrutará hoy.', info: 'La transparencia funciona solo si el plan se cumple.' },
          kusi: ['celebra', '¡Con la frente en alto!'] } },
      { id: 'c', label: 'Mencionar solo lo menor, los exámenes y el reglamento, para mostrar buena fe sin abrir lo grande.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: 1 },
          out: 'La auditora agradece y anota. Lo menor queda en el informe; lo mayor, en tu cabeza.',
          pro: { ok: 'Muestras apertura.', risk: 'Una transparencia selectiva es difícil de sostener si alguien pregunta por lo otro.' },
          kusi: ['pensando', 'A medias es casi como nada.'] } },
    ],
    rules: [[BP, 'Ante una pregunta directa de una auditoría, informa lo que conoces con un plan para cerrarlo.']],
    mirada: {
      ve: 'El momento más incómodo de una auditoría es la pregunta abierta del final. La respuesta dice más de la cultura del hotel que cualquier carpeta.',
      visual: { tipo: 'balanza', a: { t: 'Callar', items: ['Reunión tranquila', 'Informe más corto', 'Riesgo de un hallazgo después'] }, b: { t: 'Contar con un plan', items: ['Más observaciones hoy', 'Credibilidad', 'Un plan que hay que cumplir'] } },
    },
  },
  {
    id: 'v7', t: '18:30', ch: 'correo', who: 'veronica', titulo: 'Después de la auditoría', banner: 'assets/foto/revisa.webp', show: ['confianza', 'calidad'],
    body: () => `<p>La auditora se fue a las cinco, en un taxi hacia el aeropuerto. Verónica te pide un correo con «lo que viene» para leerlo en la noche.</p><p>Estás cansada. <mark class="clave">Que el correo sea útil, no largo</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Las observaciones, el plan con fechas, lo que necesitas que ella apruebe y lo que salió bien.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { veronica: 1 }, responde: 'Verónica: la auditora dejará observaciones en registros de SST y en documentación contractual; tenemos 30 días. Mañana van los seis exámenes que faltan; el registro de accidentes ya está al día. Necesito su aprobación para el plan de acción. Lo que salió bien: la matriz de contratos y el acta de mediación.',
          out: 'Verónica responde a las 21:15: «Aprobado. Y gracias por no dejarme firmar con fecha del jueves». Mañana el hotel estará lleno.', kusi: ['feliz', 'Útil, corto y con lo bueno incluido.'] } },
      { id: 'b', label: 'Adjuntar el informe preliminar y el plan para que los revise.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Verónica: le adjunto el informe preliminar de la auditora y el plan de acción.',
          out: 'Verónica responde: «¿Y qué tengo que hacer yo?». Le escribes otra vez a las diez de la noche.', kusi: ['pensando', 'Le faltó lo que tenía que decidir.'] } },
    ],
    mirada: { ve: 'Después de una auditoría, la gerencia necesita saber qué viene, qué le toca decidir y qué salió bien. Lo último importa: el equipo necesita saber que su esfuerzo se vio.' },
  },
];
