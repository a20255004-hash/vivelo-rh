// Coordinador/a de Gestión Humana · Capítulo 4 · «La renuncia» · Semana 1, jueves.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 18: renuncia con aviso escrito de 30 días; el empleador puede exonerar el
//   plazo; si el trabajador lo pide, la solicitud se entiende aceptada si no es rechazada por escrito dentro del tercer día.
//   https://www.gob.pe/institucion/mtpe/normas-legales/
// - D.S. 005-2012-TR (Reglamento de la Ley 29783), art. 101 b): el examen médico ocupacional de salida se genera con la
//   solicitud escrita del trabajador y lo paga el empleador.
// - Ley 30709, art. 2: las empresas mantienen o elaboran cuadros de categorías y funciones; art. 3: las remuneraciones de cada
//   categoría las fija el empleador sin discriminación. https://www.leyes.congreso.gob.pe/

export const CAP = {
  n: 4, titulo: 'La renuncia', dia: 'Semana 1, jueves', foto: 'assets/foto2/tension.webp',
  lugar: 'Lácteos del Altiplano · Juliaca y, por teléfono, Ayaviri',
  inicio: '07:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves, siete de la mañana. Afuera cae granizo menudo sobre los techos de calamina. En tu bandeja hay un correo de las 6:58 con un PDF escaneado: «Carta de renuncia – Freddy Choque».', boton: 'Abrir la carta',
  kusi: 'Cuando se va alguien clave, todo el mundo mira a Gestión Humana. Respira. Primero escucha, luego ordena.',
  lead: 'Escuchaste a Freddy, ayudaste a Mariela a decidir sin subastas, respondiste la renuncia a tiempo y por escrito, pusiste en orden los riesgos de Ayaviri y empezaste el plan de sucesión.',
  reflexion: 'Si Freddy hubiera tenido una respuesta hace dos años, ¿se estaría yendo hoy?',
  siguiente: { n: 5, titulo: 'Los turnos', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'renuncia', p: 'Renuncia de Freddy Choque', j: 'Tú · Mariela', d: 3, e: 'Responder exoneración' },
  { id: 'ayaviri', p: 'Planta de Ayaviri sin jefe', j: 'Tú · Edwin · Yesenia', d: 3, e: 'Riesgos sin mapear' },
  { id: 'sucesion', p: 'Plan de sucesión', j: 'Tú', d: 3, e: 'No existe' },
  { id: 'planilla', p: 'Planilla de noviembre', j: 'Estudio Huanca', d: 3, e: 'Versión final en camino' },
  { id: 'turnos', p: 'Mediación de turnos', j: 'Tú', d: 3, e: 'Mañana 6 a. m.' },
];

export const FUTURO = {
  retencion_honesta: ['Le ofrecieron a Freddy lo que su categoría justificaba, sin subasta.', 'Freddy se va, pero sin portazo.'],
  contraoferta_subasta: ['La empresa ofreció a Freddy un aumento grande para retenerlo.', 'El jefe de la planta de Juliaca se enterará. Capítulo 8.'],
  sin_conversar: ['La renuncia se aceptó sin una conversación.', 'Freddy se va sintiendo lo mismo que hace dos años.'],
  renuncia_ordenada: ['Respondiste la exoneración por escrito, dentro del plazo, con fecha de cese y entrega de cargo.', 'Freddy se va el viernes de la próxima semana, con todo en orden.'],
  sucesion_plan: ['Hay un plan de sucesión con interino y fechas.', 'El miércoles te tocará decidir el reemplazo.'],
  rumor_controlado: ['Yesenia tiene palabras claras para responder en Ayaviri.', 'El rumor de cierre se apaga antes del fin de semana.'],
  rumor_suelto: ['En Ayaviri ya se dice que cierran la planta.', 'Lo escucharás el jueves en la asamblea.'],
  freddy_aliado: ['Freddy aceptó ayudar en la transición.', 'Te dejará una entrega de cargo completa.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Jefe de la planta de Ayaviri', who: 'jefe' },
  edwin: { n: 'Edwin Calsín', sub: 'Jefe de producción · Ayaviri', c: '#9C6B1E' },
};

export const WSP = [
  { chat: 'yesenia', t: '07:20', de: 'Yesenia', txt: 'Ya sabe, ¿no? Aquí ya todos saben. El chofer de la cisterna le contó a medio mundo 😔' },
  { chat: 'mariela', t: '07:25', de: 'Mariela', txt: 'Ayer hablé con don Alfonso. Iba a llamar a Freddy hoy a las 9. Llegamos tarde.', si: 'freddy_confia' },
  { chat: 'mariela', t: '07:25', de: 'Mariela', txt: '¿Tú sabías algo de esto?', no: 'freddy_confia' },
  { chat: 'edwin', t: '11:05', de: 'Edwin', txt: 'Buenos días. Le cuento que los ganaderos ya preguntan si se les va a seguir pagando igual. ¿Qué les digo?' },
  { chat: 'nely', t: '12:40', de: 'Nely', txt: 'La versión final de la planilla llegó a la carpeta, con clave 🔐. El nocturno ya sale con 1,660.50.', si: 'nocturna_corregida' },
  { chat: 'yesenia', t: '14:10', de: 'Yesenia', txt: 'Ya les dije lo que me pasó. Se calmaron. Don Celestino dice que si se va el inge, que venga uno que sepa de vacas 😅', si: 'rumor_controlado' },
  { chat: 'freddy', t: '18:55', de: 'Freddy', txt: 'Gracias por preguntarme lo que nadie me preguntó. Cuente conmigo para la entrega.', si: 'freddy_aliado' },
];

export const CORREOS = [
  { t: '06:58', de: 'Ing. Freddy Choque', para: 'Gerencia General; Administración; Gestión Humana', asunto: 'Carta de renuncia – Freddy Choque', html: '<p>Por medio de la presente, presento mi renuncia voluntaria al cargo de Jefe de Planta de Ayaviri, con el aviso de treinta días que establece la ley.</p><p>Asimismo, solicito que se me exonere parcialmente de dicho plazo, de modo que mi último día de labores sea el viernes de la próxima semana, por motivos de incorporación a un nuevo empleo.</p><p>Agradezco los doce años en esta empresa.</p><p>Freddy Choque</p>' },
  { t: '08:30', de: 'Alfonso Pacheco · Gerencia General', para: 'Administración; Gestión Humana', asunto: 'RE: Carta de renuncia', html: '<p>Política de la casa: con quien renuncia no se negocia. Que se cumpla la ley y que Ayaviri no se detenga. Quiero un plan el lunes.</p><p>A. Pacheco</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador renuncia y pide salir antes de los 30 días. Si la empresa no responde, ¿qué pasa?', ops: ['Debe cumplir los 30 días', 'La solicitud se entiende aceptada si no se rechaza por escrito dentro del tercer día', 'Pierde sus beneficios', 'Se descuenta lo que falte'], ok: 1, por: 'Lo dice el art. 18 del D.S. 003-97-TR.' },
  { q: '¿Quién paga el examen médico ocupacional de salida, si el trabajador lo pide por escrito?', ops: ['El trabajador', 'El empleador', 'EsSalud', 'La nueva empresa'], ok: 1, por: 'D.S. 005-2012-TR, art. 101: la obligación se genera con la solicitud escrita y lo paga el empleador.' },
  { q: 'Para responder a una renuncia clave, lo primero es…', ops: ['Ofrecer más dinero', 'Escuchar por qué se va y qué pasaría si se queda', 'Buscar reemplazo ese mismo día', 'Prohibirle hablar del tema'], ok: 1, por: 'Escuchar te dice si hay algo que corregir, para él y para quienes se quedan.' },
  { q: '¿Para qué sirve un cuadro de categorías y funciones?', ops: ['Para decorar el reglamento', 'Para fijar remuneraciones por categoría con criterios objetivos y sin discriminación', 'Para que todos ganen igual', 'Solo para empresas públicas'], ok: 1, por: 'La Ley 30709 obliga a tenerlo y a fijar las remuneraciones de cada categoría sin discriminación.' },
  { q: 'Se corre el rumor de que la planta cierra. ¿Qué es lo mejor?', ops: ['No decir nada hasta tener todo resuelto', 'Decir lo que se sabe, lo que no se sabe y cuándo habrá más información', 'Negar todo con firmeza', 'Pedir que nadie hable del tema'], ok: 1, por: 'El silencio alimenta el rumor; la verdad parcial con fecha lo apaga.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:35', ch: 'llamada', who: 'jefe', titulo: 'La primera llamada', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Llamas a Freddy antes de que lo llame nadie más. ${F.has('freddy_confia') ? 'Él sabe que tú sabías; tú sabes que Mariela iba a llamarlo hoy.' : F.has('freddy_expuesto') ? 'Desde ayer sabe que le contaste a Mariela. Contesta igual.' : 'Contesta con voz de no haber dormido.'}</p><p>«Me pidieron respuesta hasta hoy. <mark class="clave">No podía seguir esperando.</mark>» Tienes tiempo para dos preguntas antes de que llegue su camioneta.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. No hay tiempo para más.',
    opts: [
      { id: 'porque', label: '¿Qué te hizo decidir, además del sueldo?', info: '«En doce años nadie de Juliaca vino a Ayaviri a ver cómo estábamos. Pedí un supervisor de calidad tres veces. Lo del sueldo es lo último que se cae.»' },
      { id: 'quedar', label: '¿Hay algo que te haría quedarte?', info: '«Ya firmé allá. Pero si me hubieran respondido hace dos años… No sé. Ya no importa.»' },
      { id: 'quien', label: '¿Quién podría sostener la planta si te vas?', info: '«Edwin. Conoce cada máquina y a cada ganadero, habla quechua con ellos. No es ingeniero, y aquí eso pesa. Pero la planta la mueve él cuando yo no estoy.»' },
      { id: 'ayuda', label: '¿Me ayudarías a que la transición salga bien?', info: '«Claro. No me voy peleado con la planta: me voy peleado con el silencio. Le dejo todo ordenado.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('porque') ? 3 : 1, confianza: 1 }, rel: { jefe: picks.includes('ayuda') ? 1 : 0 },
      flags: picks.includes('ayuda') ? ['freddy_aliado'] : [],
      out: picks.includes('quien') ? 'Anotas un nombre en tu libreta y lo subrayas dos veces: Edwin Calsín.' : 'Freddy cuelga. Te quedas con lo que te dijo y con la sensación de que hubo algo más por preguntar.',
      kusi: ['pensando', 'A veces la renuncia es la última señal, no la primera.'],
    }),
    mirada: {
      ve: 'La primera conversación después de una renuncia no es para convencer: es para entender. Lo que Freddy cuenta hoy explica la rotación de Ayaviri mejor que cualquier indicador.',
      visual: { tipo: 'linea', titulo: 'Las señales que nadie leyó', hitos: [['2024', 'Pide revisión de sueldo'], ['2025', 'Pide supervisor de calidad (3 veces)'], ['Lunes', '«Necesito respuesta»'], ['Hoy', 'Renuncia']] },
    },
  },
  {
    id: 'd2', t: '08:45', ch: 'presencial', who: 'mariela', titulo: '«Con quien renuncia no se negocia»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Mariela', show: ['confianza', 'etica', 'cumplimiento'],
    body: () => `<p>Mariela tiene impreso el correo del gerente general. Abre el cuadro de categorías: el jefe de la planta de Juliaca y Freddy están en la misma categoría, con funciones parecidas, pero Freddy gana bastante menos. <mark class="clave">Nadie sabe explicar por qué.</mark></p><p>«Don Alfonso dice que no se negocia. Yo no quiero perderlo. ¿Qué le propongo?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer corregir la diferencia que su categoría no justifica, ofrecérselo con honestidad y aceptar con respeto si decide irse igual.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, cumplimiento: 3 }, rel: { mariela: 1 }, flags: ['retencion_honesta'],
          out: 'Don Alfonso acepta «corregir, no negociar». Freddy agradece, pero ya firmó en Arequipa. Al menos se va sabiendo que tenía razón. Y queda una tarea: revisar el cuadro completo.',
          pro: { ok: 'Corriges una inequidad real, no compras una permanencia.', info: 'Si la diferencia no tenía justificación, también debe corregirse para quien llegue después.' },
          kusi: ['pensando', 'Se va igual… pero se corrigió algo que estaba mal.'] } },
      { id: 'b', label: 'Proponer una contraoferta fuerte, por encima de la de Arequipa: Ayaviri no aguanta perderlo.',
        res: { q: 'riesgosa', fx: { etica: -2, confianza: -1 }, flags: ['contraoferta_subasta'],
          out: 'Don Alfonso cede a regañadientes. Freddy lo piensa una noche y dice que no. Pero la cifra ya circuló por correo y el jefe de la planta de Juliaca la vio.',
          pro: { ok: 'Intentas retenerlo.', risk: 'Una subasta enseña que la forma de ganar más es amenazar con irse, y rompe la equidad con los demás.' },
          kusi: ['preocupado', 'Esa cifra ya dio la vuelta a la empresa…'] } },
      { id: 'c', label: 'Aceptar la renuncia sin más: es política de la casa y nadie es indispensable.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -3 }, flags: ['sin_conversar'],
          out: 'Mariela firma la aceptación. La diferencia del cuadro de categorías queda guardada en un cajón, esperando al próximo que se vaya.',
          pro: { ok: 'Cumples la política del gerente.', risk: 'Si no corriges la causa, la próxima renuncia ya está en camino.' },
          kusi: ['triste', '¿Y la diferencia en el cuadro?'] } },
    ],
    rules: [[LEY, 'Las remuneraciones de cada categoría las fija el empleador sin discriminación (Ley 30709, art. 3).'], [BP, 'Corrige inequidades con criterios objetivos; no subastes la permanencia.']],
    mirada: {
      ve: 'Las contraofertas casi nunca retienen por mucho tiempo y enseñan una mala lección. Pero «no negociar» tampoco puede ser excusa para ignorar una injusticia. La salida está en el cuadro de categorías: si la diferencia no tiene razón objetiva, se corrige, se quede quien se quede.',
      visual: { tipo: 'balanza', a: { t: 'Contraoferta', items: ['Retiene, quizás, unos meses', 'Premia la amenaza de irse', 'Rompe la equidad'] }, b: { t: 'Corregir la categoría', items: ['Repara una injusticia real', 'Vale para quien llegue', 'Se puede explicar a todos'] } },
    },
  },
  {
    id: 'd3', t: '10:00', ch: 'documento', who: null, titulo: 'La respuesta por escrito', banner: 'assets/esc/escritorio.webp', show: ['cumplimiento', 'calidad', 'personas'],
    body: () => `<p>Freddy pidió salir el viernes de la próxima semana. Vuelves a leer la carta y luego el artículo 18: si la empresa no rechaza por escrito la exoneración dentro del tercer día, <mark class="clave">se entiende aceptada</mark>.</p><p>Mejor responder hoy, claro y completo.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la respuesta.', boton: 'Guardar la respuesta',
    bloques: [
      { id: 'acuse', t: 'Lo que se responde', n: 2, ops: [
        { id: 'a1', t: 'Acusamos recibo de su carta, con la fecha en que llegó.', ok: true },
        { id: 'a2', t: 'Aceptamos la exoneración parcial: su último día será el viernes de la próxima semana.', ok: true },
        { id: 'a3', t: 'Lo pensaremos y le responderemos la próxima semana.', ok: false, por: 'Pasado el tercer día sin rechazo escrito, la solicitud ya se entiende aceptada. Mejor decidir y decirlo.' },
      ] },
      { id: 'salida', t: 'Lo que viene', n: 3, ops: [
        { id: 's1', t: 'Entrega de cargo el jueves de la próxima semana, con un acta.', ok: true },
        { id: 's2', t: 'Liquidación de beneficios sociales y certificado de trabajo.', ok: true },
        { id: 's3', t: 'Si lo desea, puede pedir por escrito un examen médico de salida, a cargo de la empresa.', ok: true, por: 'D.S. 005-2012-TR, art. 101.' },
        { id: 's4', t: 'Le descontaremos los días que no complete del aviso.', ok: false, por: 'Si la empresa acepta la exoneración, no hay plazo incumplido que reclamar.' },
      ] },
      { id: 'tono', t: 'Tono', n: 1, ops: [
        { id: 't1', t: 'Gracias por doce años. Le deseamos éxito y contamos con usted para la transición.', ok: true },
        { id: 't2', t: 'Lamentamos su falta de compromiso con la empresa.', ok: false, por: 'Renunciar es un derecho. Además, Freddy seguirá aquí ocho días más.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: q !== 'riesgosa' ? ['renuncia_ordenada'] : [], cartera: { renuncia: q === 'riesgosa' ? 'Respuesta con problemas' : 'Exoneración aceptada por escrito: último día viernes' },
        out: q === 'buena' ? 'Mariela firma y la carta sale a las 11. Freddy responde con un «recibido, gracias» y una lista de pendientes que ya había empezado a escribir.' : 'La carta sale, pero con frases que Freddy va a recordar más que los doce años.',
        pro: { ok: 'Responder por escrito y a tiempo evita ambigüedades sobre la fecha de cese.', risk: 'Dejar pasar el plazo o amenazar con descuentos convierte una salida ordenada en un conflicto.', info: 'Con la fecha de cese clara, ya puedes planificar la entrega de cargo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Clara, a tiempo y con gratitud!' : 'Revisa el tono y los plazos.'],
      };
    },
    rules: [[LEY, 'La renuncia requiere aviso escrito de 30 días; el empleador puede exonerar el plazo (D.S. 003-97-TR, art. 18).'], [LEY, 'Si el trabajador pide la exoneración, se entiende aceptada si no se rechaza por escrito dentro del tercer día (art. 18).'], [LEY, 'El examen médico de salida se realiza si el trabajador lo pide por escrito, a cargo del empleador (D.S. 005-2012-TR, art. 101).']],
    mirada: {
      ve: 'Una salida ordenada empieza con una carta bien hecha: fecha de cese, entrega de cargo, liquidación y gratitud. Lo que se escribe en ese documento es lo que el trabajador contará de la empresa durante años.',
      visual: { tipo: 'flujo', titulo: 'Una salida ordenada', pasos: ['Carta de renuncia', 'Respuesta escrita', 'Entrega de cargo', 'Último día', 'Liquidación y certificado'], aqui: 1 },
      normas: [{ ley: 'D.S. 003-97-TR, art. 18', dice: 'El empleador puede exonerar el plazo de 30 días; si lo pide el trabajador, la solicitud se entenderá aceptada si no es rechazada por escrito dentro del tercer día.', practica: 'Si no quieres exonerar, tienes que decirlo por escrito y rápido. Si quieres, dilo igual de claro.' }],
    },
  },
  {
    id: 'd4', t: '11:30', ch: 'documento', who: null, titulo: 'Ayaviri sin jefe', banner: 'assets/3d/scenes/planta.webp', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>Edwin te escribió: los ganaderos preguntan si se les va a seguir pagando igual. Freddy tiene en su cabeza, y en su celular, media planta.</p><p>Haces una lista de riesgos y eliges <mark class="clave">tres para atender antes de que se vaya</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres riesgos que atiendes primero.', boton: 'Atender estos', resumen: 'Atendiste',
    cols: ['Riesgo', 'Lo que sabes'],
    rules: [[BP, 'Antes de que se vaya un jefe, asegura lo que solo él sabe o controla.']],
    rows: [
      { id: 'acopio', cells: ['Pagos y precios del acopio de leche', 'Solo Freddy conoce los acuerdos con 60 ganaderos'] },
      { id: 'accesos', cells: ['Claves del sistema de acopio y de la cámara de quesos', 'Las tiene Freddy en su celular'] },
      { id: 'interino', cells: ['Quién firma y decide desde el lunes siguiente', 'No hay nadie designado'] },
      { id: 'despedida', cells: ['Organizar la despedida de Freddy', 'Yesenia ya está juntando cuota'] },
      { id: 'aviso', cells: ['Publicar ya el aviso para reemplazarlo', 'Mariela lo sugirió'] },
      { id: 'foto', cells: ['Actualizar el organigrama en la intranet', 'Está desactualizado desde 2022'] },
    ],
    score: { acopio: 3, accesos: 3, interino: 3, despedida: -1, aviso: 0, foto: -1 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, tiempo: q === 'buena' ? 2 : -1, cumplimiento: picks.includes('accesos') ? 2 : -1 },
        cartera: { ayaviri: q === 'buena' ? 'Acopio, accesos e interino en marcha' : 'Riesgos a medias' },
        out: q === 'buena' ? 'Freddy acepta pasar los acuerdos de acopio a un documento y cambiar las claves con Edwin presente. Mariela designa a Edwin como responsable desde el lunes siguiente, mientras se decide el reemplazo.' : picks.includes('aviso') ? 'Publicas el aviso. En una hora hay 30 postulantes de Lima y Arequipa… y nadie sabe todavía qué pasa con los ganaderos.' : 'Te ocupas de cosas visibles. Lo que solo sabe Freddy sigue solo en su cabeza.',
        pro: { ok: 'Lo que solo una persona sabe o controla es lo primero que hay que asegurar.', risk: 'Publicar el aviso antes de definir el perfil y el interino es correr en la dirección equivocada.', info: 'El aviso puede salir la próxima semana, con un perfil pensado para Ayaviri.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La memoria de la planta, a salvo!' : '¿Qué pasa si Freddy se va con las claves?'],
      };
    },
    mirada: {
      ve: 'Cuando se va un jefe de planta, se van también relaciones, claves y acuerdos que nunca se escribieron. El riesgo no es quedarse sin jefe por unos días: es quedarse sin la memoria de cómo funciona la planta.',
      visual: { tipo: 'matriz', x: 'Facilidad para reemplazar', y: 'Lo que se pierde si se va', cuadrantes: ['Asegúralo ya', 'Planifícalo', 'Puede esperar', 'No ahora'], items: [['Acuerdos de acopio', .15, .95], ['Claves', .2, .9], ['Interino', .35, .85], ['Aviso', .7, .5], ['Organigrama', .9, .15], ['Despedida', .85, .2]] },
    },
  },
  {
    id: 'd5', t: '13:30', ch: 'whatsapp', who: null, titulo: '«Dicen que cierran la planta»', banner: 'assets/esc/alarma.webp', show: ['personas', 'confianza'],
    body: () => `<p>Yesenia te reenvía un audio en quechua y castellano de un operario: «Dicen que se va el inge porque van a cerrar Ayaviri y llevarse todo a Juliaca».</p><p>Le escribes a Yesenia lo que puede decir en la planta. <mark class="clave">Sin mentir y sin prometer lo que no sabes.</mark></p>`,
    type: 'compose', enviaA: 'yesenia', para: 'Para: Yesenia Condori · Ayaviri', boton: 'Enviar a Yesenia',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Lo que se sabe', ops: [
        { id: 'h1', t: 'Yesenia, lo cierto es esto: el Ing. Freddy renunció por una oferta en Arequipa. Su último día es el viernes de la próxima semana.', ok: true, por: 'El hecho, sin adornos.' },
        { id: 'h2', t: 'Yesenia, diles que el inge se va por temas personales.', ok: false, por: 'Es medio cierto y suena a que se esconde algo.' },
      ] },
      { id: 'cierre', t: 'Sobre el rumor', ops: [
        { id: 'c1', t: 'No hay ningún plan de cerrar Ayaviri. La planta sigue y el acopio a los ganaderos sigue igual.', ok: true, por: 'Mariela te lo confirmó en la mañana: puedes decirlo.' },
        { id: 'c2', t: 'Que nadie se preocupe, que todo va a mejorar.', ok: false, por: 'No responde la pregunta que tienen: ¿cierran o no?' },
      ] },
      { id: 'cuando', t: 'Qué viene', ops: [
        { id: 'w1', t: 'Mientras se decide quién lo reemplaza, Edwin coordina. El jueves voy a Ayaviri a conversar con todos.', ok: true, por: 'Fecha y presencia: lo que más calma.' },
        { id: 'w2', t: 'Cuando haya novedades, les avisamos.', ok: null, por: 'Correcto, pero sin fecha el rumor sigue creciendo.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'c1', 'w1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: [q === 'buena' ? 'rumor_controlado' : 'rumor_suelto'],
        out: q === 'buena' ? 'Yesenia lo traduce al quechua para los de quesería y lo lee en el cambio de turno. A las 2:10 te escribe: se calmaron.' : 'Yesenia transmite el mensaje, pero las preguntas siguen. En la garita, el rumor ya tiene fecha de cierre.',
        pro: { ok: 'Lo que se sabe, lo que no es cierto y cuándo habrá más: así se apaga un rumor.', risk: 'Las frases vagas dejan espacio para que el rumor se quede.', info: 'Que lo diga Yesenia, en su idioma y con su voz, vale más que un comunicado.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Verdad, fecha y en quechua. ¡Qué divino!' : 'El rumor sigue vivo…'],
      };
    },
    rules: [[BP, 'Contra un rumor: el hecho, lo que no es cierto y cuándo habrá más información.']],
    mirada: {
      ve: 'En una planta pequeña, una renuncia se convierte en rumor en una hora. La gente no necesita saberlo todo: necesita saber qué es cierto, qué no y cuándo sabrá más. Y lo cree más si lo escucha de alguien en quien confía.',
      visual: { tipo: 'cambio', titulo: 'Del rumor a la información', pares: [['«Cierran Ayaviri»', 'La planta sigue'], ['«Algo esconden»', 'Freddy se va por una oferta'], ['«Nadie dice nada»', 'El jueves viene Gestión Humana']] },
    },
  },
  {
    id: 'd6', t: '15:40', ch: 'documento', who: null, titulo: 'El plan de sucesión', banner: 'assets/esc/escalera.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Don Alfonso quiere un plan el lunes. Lo escribes hoy, mientras la salida de Freddy está fresca. <mark class="clave">Primero lo que la planta necesita, después los nombres.</mark></p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del plan de sucesión. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'func', t: 'Mapear qué hace realmente el jefe de Ayaviri y qué solo sabe él', por: 'El puesto real, no el del papel.' },
      { id: 'inter', t: 'Designar a un responsable interino con autoridad clara', por: 'La planta no puede esperar.' },
      { id: 'perfil', t: 'Definir el perfil: lo indispensable y lo deseable', por: 'Antes de mirar candidatos.' },
      { id: 'int', t: 'Evaluar a los candidatos internos con ese perfil', por: 'Los de adentro primero, con el mismo criterio.' },
      { id: 'ext', t: 'Si hace falta, convocar afuera con el mismo perfil', por: 'Comparar con la misma vara.' },
      { id: 'trans', t: 'Acordar la transición: entrega de cargo y acompañamiento', por: 'Que la persona nueva no empiece sola.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 1 : -1 },
        flags: q !== 'riesgosa' ? ['sucesion_plan'] : [], cartera: { sucesion: q === 'riesgosa' ? 'Plan desordenado' : 'Plan de sucesión listo para el lunes' },
        out: q === 'buena' ? 'El plan cabe en una página. Mariela lo lee y dice: «Esto se lo mando a don Alfonso tal cual».' : 'El plan tiene todos los pasos, pero empieza por los nombres. Así cualquier perfil terminará pareciéndose al candidato favorito.',
        pro: { ok: 'Perfil antes que nombres: así se compara a todos con la misma vara.', risk: 'Elegir primero a la persona y después escribir el perfil es una forma elegante de favoritismo.', info: 'El interino no es un premio: es una responsabilidad con fecha.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Plan con cabeza fría!' : 'Ojo: el perfil va antes que los nombres.'],
      };
    },
    rules: [[BP, 'Define el perfil antes de evaluar candidatos, internos y externos con la misma vara.']],
    mirada: {
      ve: 'La mayoría de empresas medianas no tiene planes de sucesión hasta que alguien clave se va. Hacerlo en caliente tiene una ventaja: todos entienden por qué importa. Y un riesgo: elegir rápido a quien está más cerca.',
      visual: { tipo: 'flujo', titulo: 'El plan de sucesión', pasos: ['Funciones reales', 'Interino', 'Perfil', 'Internos', 'Externos', 'Transición'] },
    },
  },
  {
    id: 'd7', t: '18:20', ch: 'llamada', who: 'jefe', titulo: 'Doce años', banner: 'assets/esc/camino.webp', show: ['personas', 'confianza'],
    body: () => `<p>Freddy te llama desde la carretera, de regreso a Ayaviri. Se escucha el viento contra la camioneta.</p><p>«Doce años. ¿Sabe qué es lo más raro? Hoy, que ya me voy, es el primer día que alguien de Gestión Humana me pregunta algo. <mark class="clave">¿Qué quiere que le deje?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle que el día de la entrega de cargo cuente también qué cambiaría de la planta y de la empresa.',
        res: { q: 'buena', fx: { personas: 3, calidad: 3 }, rel: { jefe: 1 }, flags: ['freddy_aliado'],
          out: 'Freddy se ríe por primera vez en el día. «Eso le va a tomar más de una hoja.» Promete traerlo escrito el jueves.',
          pro: { ok: 'Conviertes una salida en aprendizaje para quienes se quedan.', info: 'Lo que dice quien se va es la información más honesta que recibirás.' },
          kusi: ['feliz', 'Que se vaya enseñando. ¡Bacán!'] } },
      { id: 'b', label: 'Pedirle solo la lista de pendientes y claves, sin más.',
        res: { q: 'aceptable', fx: { calidad: 2, personas: -1 },
          out: 'Freddy dice que sí. Te dejará una lista ordenada. Lo que pensaba de la planta se irá con él a Arequipa.',
          pro: { ok: 'Aseguras lo operativo.', risk: 'Te pierdes lo que podría evitar la próxima renuncia.' },
          kusi: ['pensando', 'Lo operativo, sí. ¿Y lo demás?'] } },
    ],
    mirada: { ve: 'La entrevista de salida más útil no es un formulario: es una conversación con alguien que ya no tiene nada que perder. Freddy puede explicar en una hora por qué Ayaviri pierde gente desde hace años.' },
  },
];
