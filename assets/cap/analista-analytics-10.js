// Analista de People Analytics · Capítulo 10 · «Dos semanas» · Semana 2, viernes. Final abierto: el lunes llega TalentScope.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 2 num. 5 (datos sensibles), art. 6 (finalidad), art. 7 (proporcionalidad), art. 11 (nivel de protección adecuado
//   en el flujo transfronterizo), art. 23 (tratamiento objetivo). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS (El Peruano, 30/11/2024): art. 29 (tratamiento por medios tecnológicos tercerizados: el prestador no asume la
//   titularidad del banco de datos y debe garantizar su destrucción al concluir), art. 40 (evaluación de impacto, facultativa y
//   recomendada para perfiles y datos sensibles), art. 87 (decisiones sin intervención humana).

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo',
  inicio: '08:20', fin: '19:00', cierreHora: '18:50',
  apertura: 'Viernes. Diez días después del «sesenta por ciento», el plan está aprobado y el lunes empieza otra historia: un software que promete predecir renuncias.', boton: 'Pasar la credencial',
  kusi: 'Hoy se mira atrás… y un poquito adelante. ¡Dale!',
  lead: 'Cerraste dos semanas con un balance honesto, escuchaste la devolución de Diego, preparaste las preguntas para un proveedor que promete demasiado y frenaste un envío de datos que no debía salir.',
  reflexion: '¿Te ves en este puesto? ¿Qué parte de estas dos semanas te dijo que sí, y cuál te hizo dudar?',
  siguiente: { n: 11, titulo: 'El algoritmo que promete', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'balance', p: 'Balance de dos semanas', j: 'Tú y Diego', d: 9, e: 'Hoy' },
  { id: 'plan', p: 'Plan «Primer Equipo»', j: 'Mónica · Lucía', d: 9, e: 'Aprobado: oleada 1 en diciembre' },
  { id: 'proveedor', p: 'Evaluación de TalentScope', j: 'Tú · Oficial de Datos', d: 9, e: 'Lunes 9:00' },
  { id: 'datos', p: 'Base de 4,000 colaboradores', j: 'Pedro · TI', d: 9, e: 'Pedido del proveedor' },
];

export const FUTURO = {
  balance_honesto: ['Tu balance dice lo que salió bien, lo que salió mal y lo que falta.', 'Diego lo usará en tu evaluación de periodo de prueba.'],
  brochure_leido: ['Marcaste los riesgos del folleto de TalentScope.', 'El lunes llegarás con preguntas, no con prejuicios.'],
  ruta_evaluacion: ['Tienes una ruta para evaluar herramientas de IA con datos de personas.', 'La usarás el lunes.'],
  datos_frenados: ['Frenaste el envío de la base de 4,000 personas al proveedor.', 'TalentScope llegará el lunes con datos de prueba… o molesto.'],
  datos_enviados: ['Aceptaste que TI envíe la base al proveedor antes de evaluarlo.', 'El lunes, los datos de 4,000 personas ya estarán fuera.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  pedro: { n: 'Pedro Caycho', sub: 'Analista de TI', who: 'ti' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Exvendedora · tienda Santa Anita', c: '#C0572B' },
  renzo: { n: 'Renzo Villanueva', sub: 'Supervisor de ventas · Santa Anita', c: '#B5651D' },
};

export const WSP = [
  { chat: 'monica', t: '08:10', de: 'Mónica', txt: 'Arturo aprobó todo. Gracias por no dejarme llegar con una lista. Te lo digo solo una vez 😄', si: 'lista_negada' },
  { chat: 'monica', t: '08:10', de: 'Mónica', txt: 'Arturo aprobó el plan. Lo de Milagros y Jairo me lo reclamó. Tenías razón el viernes. Ya hablé con Legal.', si: 'lista_entregada' },
  { chat: 'renzo', t: '09:30', de: 'Renzo', txt: 'Hoy publiqué el horario de la próxima semana con siete días de anticipación. Maritza me dijo «milagro» 😂', si: 'renzo_invitado' },
  { chat: 'lucia', t: '12:15', de: 'Lucía', txt: 'Mañana me reúno con Brayan. Y el lunes empiezo a armar las entrevistas de permanencia. ¡Qué semana!', si: 'brayan_cuidado' },
  { chat: 'pedro', t: '17:50', de: 'Pedro', txt: 'Recibido. No sale nada sin contrato ni visto del Oficial. Gracias por respaldarme 🙏', si: 'datos_frenados' },
  { chat: 'pedro', t: '17:50', de: 'Pedro', txt: 'Ok… mando la base el domingo. Que conste que lo pidió Gerencia General.', si: 'datos_enviados' },
  { chat: 'equipo', t: '18:55', de: 'Diego', txt: 'Dos semanas. Lunes 8:30 aquí, con café, para preparar lo de TalentScope. Buen fin de semana 🙌' },
];

export const CORREOS = [
  { t: '08:30', de: 'TalentScope · Equipo comercial', para: 'Arturo Benavides; Analista de People Analytics', asunto: 'Nuestra solución de retención predictiva', html: '<p>Adjuntamos el folleto de TalentScope Predict, la solución que anticipa renuncias antes de que ocurran. ¡Nos vemos el lunes a las 9!</p>' },
  { t: '17:25', de: 'Arturo Benavides · Gerente General', para: 'Analista de People Analytics; Pedro Caycho; Diego Paz', asunto: 'RV: Demo del lunes', html: '<p>TalentScope pide que TI les envíe este fin de semana la base de los 4,000 colaboradores, «para que la demo del lunes sea con nuestros datos reales». Coordinen, por favor.</p><p>Arturo</p>' },
];

export const QUIZ = [
  { q: 'Un proveedor quiere la base de 4,000 colaboradores para una demo. Lo correcto es…', ops: ['Enviarla: es solo una demo', 'No enviar datos personales sin evaluación, contrato y visto del Oficial de Datos; usar datos de prueba', 'Enviar solo los DNI', 'Enviarla por WhatsApp para que sea rápido'], ok: 1, por: 'Una demo no justifica entregar datos de personas a un tercero sin garantías.' },
  { q: 'Si el proveedor procesará los datos fuera del Perú, la Ley 29733 pide…', ops: ['Nada', 'Garantizar un nivel suficiente de protección para esos datos', 'Solo una factura', 'Que los trabajadores viajen'], ok: 1, por: 'Principio de nivel de protección adecuado (art. 11).' },
  { q: 'Según el reglamento, un prestador tecnológico tercerizado…', ops: ['Se vuelve dueño de los datos', 'No asume la titularidad del banco de datos y debe garantizar su destrucción al terminar el servicio', 'Puede usarlos para otros clientes', 'Puede venderlos'], ok: 1, por: 'D.S. 016-2024-JUS, art. 29, nums. 2 y 5.' },
  { q: 'Una evaluación de impacto en protección de datos se recomienda especialmente cuando…', ops: ['Se compran sillas', 'Se crean perfiles de personas o se usan datos sensibles', 'Se cambia de logo', 'Nunca'], ok: 1, por: 'D.S. 016-2024-JUS, art. 40.' },
  { q: 'Al hacer el balance de dos semanas, lo más útil es…', ops: ['Listar solo lo que salió bien', 'Decir lo que salió bien, lo que salió mal y lo que falta, con aprendizajes', 'Culpar a otros', 'No hacerlo'], ok: 1, por: 'Un balance honesto es el insumo de la siguiente etapa.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:40', ch: 'llamada', who: null, titulo: 'Las llamadas del viernes', banner: 'assets/foto/llamada.webp', show: ['personas', 'etica'],
    body: (n, F) => `<p>Viernes de garúa fina. ${F.has('yesenia_confia') ? 'Tienes una llamada perdida de Yesenia de las 7:50.' : 'Tienes dos llamadas pendientes de la semana.'} Antes de abrir el correo, devuelves llamadas.</p>`,
    type: 'calls',
    calls: [['Rocío Quispe · Planillas', 'Contesta: te pasa la tabla actualizada', 'Ya actualicé la tablita de códigos con los ingresos de esta semana. Y le pedí a Pedro que deje de reciclarlos, ¿ah?'], ['Yesenia Huamán · exvendedora', 'Contesta: pregunta por volver', 'Señorita, me contaron de un programa nuevo para supervisores. Si eso cambia… ¿yo podría volver a HogarPlus?']],
    prompt: 'Yesenia pregunta si podría volver. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que puede postular cuando haya convocatoria, como cualquier persona, y que le pasarás el enlace de empleos. Sin prometerle nada.',
        res: { q: 'buena', fx: { personas: 4, etica: 3 },
          envia: [['yesenia', 'Yesenia, te paso el enlace de empleos de HogarPlus. Puedes postular cuando haya convocatoria, como cualquier persona. Yo no decido contrataciones, pero me alegra que lo pienses. Gracias otra vez por tu ayuda.']],
          out: 'Yesenia se ríe: «Ya, con eso me basta. Igual ahora estoy en una ferretería en Ate… pero nunca se sabe».',
          pro: { ok: 'Le das un camino real sin usar tu posición para favorecerla.', info: 'Su testimonio no le da ventaja ni desventaja en un proceso.' },
          kusi: ['feliz', 'Puerta abierta, mismas reglas. ¡Así!'] } },
      { id: 'b', label: 'Decirle que hablarás con Lucía para que la recontraten: ayudó mucho al análisis.',
        res: { q: 'aceptable', fx: { personas: 2, etica: -3 },
          out: 'Yesenia se ilusiona. Lucía, al enterarse, te dice: «No podemos recontratar a alguien como premio por dar su testimonio».',
          pro: { ok: 'Quieres agradecerle.', risk: 'Un testimonio no puede convertirse en un favor: eso contamina la confianza de los próximos.' },
          kusi: ['pensando', 'Agradecer no es devolver favores.'] } },
    ],
    mirada: { ve: 'Las personas que ayudan a un análisis no deben salir perjudicadas, pero tampoco premiadas. Si el testimonio tuviera recompensa, los siguientes dirían lo que creen que la empresa quiere escuchar.' },
  },
  {
    id: 'j2', t: '10:00', ch: 'documento', who: null, titulo: 'El balance', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Diego te pide una página: <mark class="clave">tus dos semanas</mark>, para conversarla a las 11:30. Abres un documento y miras la carpeta: 14 archivos de Excel, una bitácora, un tablero y un plan aprobado.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu balance.', boton: 'Guardar el balance',
    bloques: [
      { id: 'logro', t: 'Lo que salió bien', n: 2, ops: [
        { id: 'l1', t: 'Una pregunta clara y un número con fórmula: 58 %, explicado.', ok: true },
        { id: 'l2', t: 'Un hallazgo probado y explicado en el terreno: ascensos sin formación, primeros 90 días y horarios.', ok: true },
        { id: 'l3', t: 'Que todos quedaron contentos.', ok: false, por: 'No es verdad ni era el objetivo.' },
      ] },
      { id: 'falla', t: 'Lo que salió mal', n: 1, ops: [
        { id: 'f1', t: 'Un borrador con DNI estuvo expuesto el viernes: desde entonces, ningún borrador lleva identificadores.', ok: true, por: 'Error reconocido y con aprendizaje.' },
        { id: 'f2', t: 'Nada salió mal.', ok: false, por: 'Un balance sin errores no es creíble.' },
      ] },
      { id: 'falta', t: 'Lo que falta', n: 1, ops: [
        { id: 'p1', t: 'Rediseñar la entrevista de salida, medir la oleada 1 en marzo y evaluar a TalentScope el lunes.', ok: true },
        { id: 'p2', t: 'Nada: el proyecto terminó.', ok: false, por: 'El trabajo recién empieza: ahora hay que ver si funciona.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['balance_honesto'] : [], cartera: { balance: q === 'buena' ? 'Balance honesto: logros, errores y pendientes' : 'Balance optimista' },
        out: q === 'buena' ? 'Tu página tiene tres partes y ninguna exageración. Al releerla, te sorprende cuánto cabe en diez días.' : 'Tu balance se lee bonito, pero esconde lo que más aprendiste.',
        pro: { ok: 'Un balance honesto muestra criterio, no solo resultados.', risk: 'Ocultar errores en un balance es la mejor forma de repetirlos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Diez días en una página!' : 'Lo que salió mal también enseña.'],
      };
    },
    mirada: {
      ve: 'En dos semanas pasaste de «sesenta por ciento» a un plan con medición. Pero lo más valioso del balance no es la lista de logros: es lo que aprendiste de lo que salió mal y lo que queda por probar.',
      visual: { tipo: 'linea', titulo: 'Tus diez días', hitos: [['Lunes 1', 'La pregunta'], ['Martes 1', 'Los datos sucios'], ['Miércoles 1', 'Las entrevistas'], ['Jueves 1', 'El hallazgo'], ['Viernes 1', 'La privacidad'], ['Lunes 2', 'El tablero'], ['Martes 2', 'Santa Anita'], ['Miércoles 2', 'El comité'], ['Jueves 2', 'El plan'], ['Viernes 2', 'El balance']] },
    },
  },
  {
    id: 'j3', t: '11:30', ch: 'presencial', who: 'diego-pa', titulo: 'La devolución', banner: 'assets/foto/mentora.webp', lugar: 'Cafetería de la esquina', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Diego te invita un café pasado y una empanada en la cafetería de la esquina. Tiene tu balance impreso, con una sola anotación al margen.</p><p>«${F.has('balance_honesto') ? 'Me gustó que pusieras lo del enlace.' : 'Tu balance está muy bonito. Demasiado.'} Ahora pregúntame lo que quieras. <mark class="clave">Hoy respondo sin filtro</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'mejor', label: '¿Qué hice mejor de lo que esperabas?', info: '«Dudar de tus propios hallazgos. La mayoría se enamora del primer gráfico que sorprende. Tú intentaste matarlo.»' },
      { id: 'peor', label: '¿Qué me corregirías?', info: '«A veces quieres proteger tanto a las personas que te olvidas de que la gerencia también tiene que poder decidir. La protección de datos no es esconder: es que cada dato llegue a quien debe.»' },
      { id: 'puesto', label: '¿Qué hace que alguien dure en este puesto?', info: '«Aguantar la incomodidad. Siempre vas a encontrar algo que alguien no quería ver. Si eso te paraliza, no duras. Si te vuelve arrogante, tampoco.»' },
      { id: 'lunes', label: '¿Qué esperas del lunes con TalentScope?', info: '«Que no digamos que no por reflejo. Algunas de esas herramientas sirven para cosas agregadas. El problema es cuando prometen saber quién se va. Ahí hay que preguntar mucho.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, calidad: 2 }, rel: { 'diego-pa': 1 },
      out: 'Diego paga los cafés. «Pasaste tu primera quincena. El lunes empieza la segunda, y viene más difícil.»',
      kusi: ['feliz', 'Una devolución sincera vale oro.'],
    }),
    mirada: {
      ve: 'Pedir una devolución honesta y escucharla sin defenderte es una competencia en sí misma. En People Analytics, donde todo el tiempo dices a otros lo que no quieren oír, también tienes que saber oírlo tú.',
      visual: { tipo: 'balanza', a: { t: 'Lo que salió bien', items: ['Dudar del propio hallazgo', 'Cuidar a las personas', 'Explicar el método'] }, b: { t: 'Lo que mejorar', items: ['Dar a la gerencia lo que necesita para decidir', 'Anticipar incidentes'] } },
    },
  },
  {
    id: 'j4', t: '13:20', ch: 'documento', who: null, titulo: 'El folleto de TalentScope', banner: 'assets/esc/lupa.webp', show: ['etica', 'cumplimiento', 'calidad'],
    body: () => `<p>El folleto de TalentScope Predict es brillante, con fotos de gente sonriendo en oficinas que no se parecen a ninguna tienda de HogarPlus. Promete «saber quién se va antes de que lo sepa él mismo».</p><p>Lo lees con el lápiz de siempre. <mark class="clave">¿Qué preguntarías el lunes?</mark></p>`,
    type: 'flag', prompt: 'Marca las líneas del folleto que son un riesgo legal o una mala práctica.',
    doc: { t: 'TalentScope Predict', sub: 'Folleto comercial · «Retención con inteligencia artificial»' },
    lines: [
      { id: 'mail', t: '«Analizamos correos, chats y calendario de cada colaborador para detectar señales de desmotivación».', bad: LEY, why: 'Es un tratamiento excesivo para la finalidad (Ley 29733, art. 7) y convierte las comunicaciones de trabajo en vigilancia.' },
      { id: 'salud', t: '«Nuestro modelo detecta patrones de ausencias asociados a embarazo o enfermedad».', bad: LEY, why: 'Infiere datos sensibles de salud (Ley 29733, art. 2, num. 5), con un alto riesgo de discriminación.' },
      { id: 'jefe', t: '«Cada jefe recibe semanalmente el puntaje de fuga de cada persona de su equipo».', bad: LEY, why: 'Decisiones que afectan a personas basadas en predecir su conducta, sin intervención humana real (D.S. 016-2024-JUS, art. 87).' },
      { id: 'nube', t: '«Los datos se procesan en servidores fuera del país».', duda: 'No es ilegal en sí, pero hay que exigir un nivel de protección adecuado (Ley 29733, art. 11). Pregúntalo el lunes.' },
      { id: 'dueno', t: '«TalentScope conserva los datos para seguir mejorando su modelo con otros clientes».', bad: LEY, why: 'El prestador no puede asumir la titularidad de los datos y debe garantizar su destrucción al terminar el servicio (D.S. 016-2024-JUS, art. 29).' },
      { id: 'agr', t: '«Reportes agregados de riesgo por tienda y por mes».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Marcas algunas líneas, pero se te pasan riesgos importantes. Diego te devuelve el folleto con dos círculos rojos más.' : `Marcas ${hitsLey} riesgos legales y dejas una pregunta abierta sobre los servidores. De todo el folleto, solo los reportes agregados por tienda se parecen a lo que ya propusiste.`,
      flags: missLey ? [] : ['brochure_leido'],
      fx: { etica: missLey ? 0 : 4, cumplimiento: missLey ? 0 : 4 },
      cartera: { proveedor: missLey ? 'Folleto leído a medias' : 'Riesgos del folleto identificados' },
      pro: { ok: 'Llegarás al lunes con preguntas concretas, no con un «no» de reflejo.', risk: 'Un folleto vende; no informa. Lo que no dice importa tanto como lo que promete.' },
      kusi: missLey ? ['pensando', 'El folleto brilla… y esconde.'] : ['sorpresa', '¡«Saber quién se va antes que él mismo»!'],
    }),
    rules: [[LEY, 'Los datos sensibles incluyen la información de salud (Ley 29733, art. 2, num. 5).'], [LEY, 'En el flujo transfronterizo se garantiza un nivel suficiente de protección (Ley 29733, art. 11).'], [LEY, 'El prestador tercerizado no asume la titularidad de los datos y garantiza su destrucción al concluir (D.S. 016-2024-JUS, art. 29).']],
    mirada: {
      ve: 'Las herramientas de «predicción de renuncias» suelen vender lo mismo que Mónica pidió el viernes pasado, pero con más datos y menos control. No todo en ellas es malo: los reportes agregados pueden servir. El trabajo del lunes es separar una cosa de la otra.',
      visual: { tipo: 'balanza', a: { t: 'Lo que promete', items: ['Saber quién se va', 'Puntaje para cada jefe', 'Leer correos y chats'] }, b: { t: 'Lo que podría servir', items: ['Riesgo agregado por tienda', 'Alertas por mes', 'Sin datos individuales'] } },
      normas: [{ ley: 'D.S. 016-2024-JUS, art. 29', dice: 'En el tratamiento por medios tecnológicos tercerizados, el prestador no puede asumir la titularidad del banco de datos y debe garantizar la destrucción o imposibilidad de acceso a los datos al concluir el servicio.', practica: '«Conservamos sus datos para mejorar nuestro modelo con otros clientes» es justo lo que no se puede aceptar.' }],
    },
  },
  {
    id: 'j5', t: '15:00', ch: 'documento', who: null, titulo: 'La ruta para el lunes', banner: 'assets/3d/scenes/brujula.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>El Oficial de Datos Personales te pide una ruta sencilla para evaluar cualquier herramienta de IA con datos de personas. <mark class="clave">Que sirva para TalentScope y para las que vendrán</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para evaluar la herramienta. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'fin', t: 'Definir la finalidad: ¿qué decisión queremos mejorar?', por: 'Sin finalidad, cualquier dato parece útil.' },
      { id: 'datos', t: 'Revisar qué datos usa y descartar los que no son necesarios', por: 'Proporcionalidad.' },
      { id: 'imp', t: 'Hacer una evaluación de impacto en protección de datos', por: 'Recomendada cuando se crean perfiles o hay datos sensibles.' },
      { id: 'contr', t: 'Exigir un contrato que fije que los datos son de HogarPlus, dónde se procesan y su destrucción al terminar', por: 'Las garantías del tercero, por escrito.' },
      { id: 'pil', t: 'Probar primero con datos ficticios o agregados', por: 'Ningún dato real antes de lo anterior.' },
      { id: 'inf', t: 'Informar al personal qué se usa y para qué', por: 'Transparencia con quienes son analizados.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['ruta_evaluacion'], cartera: { proveedor: q === 'riesgosa' ? 'Evaluación sin orden' : 'Ruta de evaluación en seis pasos' },
        out: q === 'buena' ? 'El Oficial de Datos responde: «La convertimos en procedimiento. El lunes la estrenamos».' : q === 'aceptable' ? 'La ruta sirve, aunque el Oficial te mueve un paso: «Nada de datos reales antes del contrato».' : 'Pones la prueba con datos reales al principio. El Oficial te llama de inmediato.',
        pro: { ok: 'Finalidad, datos, impacto, contrato, prueba y transparencia.', risk: 'Probar con datos reales antes del contrato es entregar la base sin garantías.' },
        kusi: [q === 'riesgosa' ? 'preocupado' : 'celebra', q === 'riesgosa' ? '¡Datos reales al inicio no!' : '¡Una brújula para el lunes!'],
      };
    },
    rules: [[LEY, 'La evaluación de impacto es facultativa y se recomienda especialmente con perfiles personales o datos sensibles (D.S. 016-2024-JUS, art. 40).']],
    mirada: {
      ve: 'Lo que aprendiste en dos semanas cabe en una ruta: para qué, con qué datos, con qué riesgos, con qué garantías y con qué transparencia. Sirve para TalentScope y para cualquier herramienta que llegue después prometiendo leer a las personas.',
      visual: { tipo: 'flujo', titulo: 'Evaluar una herramienta de IA con datos de personas', pasos: ['Finalidad', 'Datos mínimos', 'Evaluación de impacto', 'Contrato', 'Prueba con datos ficticios', 'Transparencia'] },
    },
  },
  {
    id: 'j6', t: '17:30', ch: 'correo', who: null, titulo: '«Con nuestros datos reales»', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'etica', 'confianza'],
    mail: { from: 'Arturo Benavides · Gerente General', to: 'Analista de People Analytics; Pedro Caycho; Diego Paz', asunto: 'RV: Demo del lunes' },
    body: () => `<p>TalentScope pide que TI les envíe este fin de semana <mark class="clave">la base de los 4,000 colaboradores</mark>, «para que la demo del lunes sea con nuestros datos reales». Coordinen, por favor.</p><p>Arturo</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder a Arturo, con copia al Oficial de Datos, que la demo puede hacerse con datos ficticios o agregados, y que la base real solo saldría después del contrato y la evaluación.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 4, confianza: 1 }, rel: { ti: 1 }, flags: ['datos_frenados'], cartera: { datos: 'Envío frenado: demo con datos ficticios' }, responde: 'Arturo: para la demo del lunes podemos darle a TalentScope una base ficticia con la misma estructura, o datos agregados por tienda. La base real de 4,000 personas solo debería salir después de firmar un contrato con las garantías de ley y de la evaluación del Oficial de Datos, que está en copia. Así vemos si la herramienta sirve sin arriesgar a nadie.',
          out: 'Arturo tarda veinte minutos en responder. Luego: «Ok. Que traigan su demo con datos de prueba. Pero el lunes quiero ver qué tan buena es».',
          pro: { ok: 'Le das a la gerencia lo que necesita (ver la herramienta) sin entregar los datos de 4,000 personas.', risk: 'El proveedor puede presionar diciendo que «con datos ficticios no se ve el valor».', info: 'Prepárate para esa frase: es la más común en estas demos.' },
          kusi: ['celebra', '¡4,000 personas protegidas un viernes a las 5!'] } },
      { id: 'b', label: 'Dejar que TI la envíe: lo pide el Gerente General y es solo para una demo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -5 }, rel: { ti: -1 }, flags: ['datos_enviados'], cartera: { datos: 'Base de 4,000 enviada sin contrato' }, responde: 'Arturo: entendido, coordino con Pedro para que la envíe.',
          out: 'El domingo, la base de 4,000 personas sale hacia los servidores de un proveedor sin contrato. El lunes empezará con eso.',
          pro: { ok: 'Cumples la orden rápido.', risk: 'Entregas datos de personas a un tercero sin garantías de dónde se procesan, quién los conserva ni cuándo se destruyen.' },
          kusi: ['indignado', '¡¿La base entera, para una demo?!'] } },
    ],
    rules: [[LEY, 'El prestador no asume la titularidad de los datos y garantiza su destrucción al terminar (D.S. 016-2024-JUS, art. 29).'], [LEY, 'En el flujo transfronterizo se debe garantizar un nivel suficiente de protección (Ley 29733, art. 11).']],
    mirada: {
      ve: 'Una demo es una venta. Entregar la base real para que el vendedor muestre su producto es pagar con los datos de 4,000 personas antes de saber si se va a comprar. La alternativa no frena a la gerencia: le permite ver la herramienta sin arriesgar a nadie.',
      visual: { tipo: 'cambio', titulo: 'Una demo responsable', pares: [['Base real de 4,000', 'Base ficticia con la misma estructura'], ['Envío el fin de semana', 'Después del contrato'], ['Sin el Oficial de Datos', 'Con el Oficial en copia']] },
    },
  },
  {
    id: 'j7', t: '18:40', ch: 'presencial', who: null, titulo: '¿Te ves aquí?', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Piso 3, casi vacío', show: ['confianza', 'personas'],
    body: (n, F) => `<p>El piso 3 está casi vacío. El dispensador sigue goteando. En tu pantalla, el tablero con los tres indicadores; en tu celular, ${F.has('renzo_invitado') ? 'la foto del horario de Santa Anita publicado con una semana de anticipación' : 'el mensaje de Diego: «Lunes 8:30, con café»'}.</p><p>Antes de apagar la laptop, te haces <mark class="clave">la pregunta de estas dos semanas</mark>: ¿te ves en este puesto?</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí: me gusta encontrar lo que los datos esconden y convertirlo en algo que ayude a las personas.',
        res: { q: null, fx: { confianza: 2 },
          out: 'Apagas la laptop. Afuera, la garúa de Surquillo y un lunes que ya tiene nombre: TalentScope.',
          kusi: ['celebra', '¡Nos vemos el lunes, analista!'] } },
      { id: 'b', label: 'Todavía no sé: me gusta el análisis, pero me pesa decirle a la gente lo que no quiere oír.',
        res: { q: null, fx: { personas: 1 },
          out: 'Es una duda honesta, la que tienen casi todos en este puesto. Apagas la laptop. El lunes te dirá un poco más.',
          kusi: ['animo', 'Dudar también es parte del oficio.'] } },
      { id: 'c', label: 'Me veo más del lado de las personas, como HRBP, que frente a un Excel.',
        res: { q: null, fx: { personas: 2 },
          out: 'Lucía te dijo lo mismo el martes: «Tú tienes oído de HRBP». Apagas la laptop. Las dos cosas se necesitan.',
          kusi: ['feliz', 'Conocerse también es un hallazgo.'] } },
    ],
    mirada: {
      ve: 'People Analytics es un puesto de dos lados: el rigor de los datos y el cuidado de las personas que hay detrás. Estas dos semanas fueron solo el comienzo. El lunes, un software promete saber quién se va antes que nadie, y alguien tendrá que hacerle las preguntas correctas.',
      visual: { tipo: 'mensaje', titulo: 'Lo que viene el lunes', txt: 'TalentScope llega a las 9 con su demo. Tienes una ruta de seis pasos, un folleto lleno de círculos rojos y una pregunta: ¿qué promete y qué le hace a las personas?' },
    },
  },
];
