// Analista de People Analytics · Capítulo 5 · «La privacidad» · Semana 1, viernes.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 2 num. 5 (datos sensibles), art. 6 (finalidad), art. 9 (seguridad), art. 17 (confidencialidad),
//   art. 23 (derecho al tratamiento objetivo). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS (El Peruano, 30/11/2024): art. 34 (notificación de incidentes a la Autoridad dentro de las 48 horas en los supuestos
//   que señala), art. 35 (documentación de incidentes), art. 37 (Oficial de Datos Personales), art. 46 (gestión de accesos),
//   art. 87 (derecho a no ser objeto de decisiones que evalúen o predigan aspectos personales sin intervención humana).

export const CAP = {
  n: 5, titulo: 'La privacidad', dia: 'Semana 1, viernes', foto: 'assets/foto2/tension.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo',
  inicio: '08:30', fin: '19:00', cierreHora: '18:40',
  apertura: 'Viernes. Mónica vio tus gráficos y tiene una idea: «Hazme una lista de quién se va a ir». Y a media tarde, un enlace que no debió compartirse.', boton: 'Subir al piso 5',
  kusi: 'Son datos de personas. Hoy se nota más que nunca. ¡Firmeza y calma!',
  lead: 'Dijiste que no a una lista que podía dañar a personas, ofreciste algo mejor, y cuando un enlace se filtró, actuaste en orden.',
  reflexion: 'Si un algoritmo dijera que tú te vas a ir, ¿te gustaría que tu jefe lo supiera antes que tú?',
  siguiente: { n: 6, titulo: 'El tablero', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'lista', p: 'Pedido de «lista de fuga»', j: 'Mónica · Tiendas', d: 4, e: 'Pedido hoy' },
  { id: 'propuesta', p: 'Alternativa por equipos', j: 'Tú', d: 4, e: 'Por armar' },
  { id: 'accesos', p: 'Accesos al borrador de Power BI', j: 'Pedro · TI', d: 4, e: 'Sin revisar' },
  { id: 'comite', p: 'Comité de gerencia', j: 'Mónica', d: 4, e: 'Miércoles' },
];

export const FUTURO = {
  lista_negada: ['No entregaste una lista individual de «quién se va a ir».', 'Mónica estará molesta el lunes, pero tendrá tu alternativa.'],
  lista_retencion: ['Entregaste una lista individual «solo para retener».', 'Alguien la usará para otra cosa.'],
  lista_entregada: ['Entregaste la lista de riesgo individual.', 'Dos contratos no se renovarán el lunes.'],
  pedido_revisado: ['Marcaste los problemas legales del requerimiento.', 'Diego lo llevará al Oficial de Datos.'],
  alternativa_lista: ['Armaste una alternativa por equipos, con acciones.', 'Será la base del tablero del lunes.'],
  incidente_ordenado: ['Ante el enlace filtrado, contuviste, evaluaste e informaste.', 'El Oficial de Datos lo documentará.'],
  incidente_tapado: ['Cerraste el enlace sin informar a nadie.', 'Si alguien lo descargó, nadie lo sabrá a tiempo.'],
  yesenia_tranquila: ['Le explicaste a Yesenia qué pasará con lo que contó.', 'Te recomendará a otras exvendedoras.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  pedro: { n: 'Pedro Caycho', sub: 'Analista de TI', who: 'ti' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Exvendedora · tienda Santa Anita', c: '#C0572B' },
  gino: { n: 'Gino Paredes', sub: 'Asistente de la Gerencia de Tiendas', c: '#4F6D2E' },
};

export const WSP = [
  { chat: 'monica', t: '08:20', de: 'Mónica', txt: 'Te espero a las 9. Tengo una idea que nos va a salvar el comité.' },
  { chat: 'gino', t: '14:55', de: 'Gino', txt: 'Hola, soy Gino, asistente de Mónica. Puse el enlace de tu tablero en la carpeta de Tiendas para que los jefes lo vayan viendo. ¿Está bien, no? 🙂' },
  { chat: 'pedro', t: '15:10', de: 'Pedro', txt: '🚨 El enlace de tu borrador de Power BI está en una carpeta que ven 34 jefes de tienda. Tiene DNI y comentarios de salida. ¿Lo cierro?' },
  { chat: 'monica', t: '17:45', de: 'Mónica', txt: 'No es lo que pedí. Pero lo leo el fin de semana.', si: 'alternativa_lista' },
  { chat: 'monica', t: '17:45', de: 'Mónica', txt: 'Gracias por la lista. El lunes empiezo con los de Santa Anita.', si: 'lista_entregada' },
  { chat: 'equipo', t: '18:45', de: 'Diego', txt: 'Semana difícil y bien llevada. El lunes, tablero. Desconecta, en serio.' },
];

export const CORREOS = [
  { t: '11:00', de: 'Gino Paredes', para: 'Analista de People Analytics', asunto: 'Requerimiento de la Gerencia de Tiendas', html: '<p>Por encargo de Mónica, te envío el requerimiento formal del «Modelo de riesgo de fuga» para revisarlo con Diego. Lo necesitamos antes del comité.</p><p>Gino</p>' },
  { t: '16:30', de: 'Oficial de Datos Personales · HogarPlus', para: 'Analista de People Analytics; Pedro Caycho; Diego Paz', asunto: 'Registro del incidente', html: '<p>Gracias por informar dentro del mismo día. Registro el incidente, la contención y la evaluación. Con los accesos revisados, evaluaremos si corresponde notificar a la Autoridad Nacional de Protección de Datos Personales dentro del plazo del reglamento.</p>', si: 'incidente_ordenado' },
];

export const QUIZ = [
  { q: 'Mónica quiere una lista de quiénes «se van a ir» para no renovarles el contrato. ¿Qué dice la Ley 29733?', ops: ['Nada, es decisión de la empresa', 'Las personas tienen derecho a no ser objeto de decisiones que les afecten significativamente basadas solo en evaluar su conducta', 'Que solo se puede si la lista es secreta', 'Que se puede si lo aprueba el gerente'], ok: 1, por: 'Es el derecho al tratamiento objetivo (Ley 29733, art. 23; D.S. 016-2024-JUS, art. 87).' },
  { q: 'Una alternativa más segura y útil a la lista individual es…', ops: ['Una lista con iniciales', 'Un indicador de riesgo por equipo y acciones de permanencia para todos', 'No hacer nada', 'Mandar la lista solo a los supervisores'], ok: 1, por: 'El riesgo por equipo orienta acciones sin etiquetar a nadie.' },
  { q: 'Un borrador con DNI y comentarios queda visible para 34 jefes. Lo primero es…', ops: ['Borrar todo y no decir nada', 'Contener: cerrar el acceso', 'Esperar a ver si alguien se queja', 'Enviar un correo a los 34 jefes pidiendo que no lo abran'], ok: 1, por: 'Primero se contiene; luego se evalúa, se informa y se documenta.' },
  { q: 'En ciertos incidentes (por ejemplo, con datos sensibles o que afecten a muchas personas), el reglamento pide notificar a la Autoridad…', ops: ['En un año', 'Como máximo dentro de las 48 horas de conocerlo', 'Solo si hay denuncia', 'Nunca'], ok: 1, por: 'D.S. 016-2024-JUS, art. 34.1.' },
  { q: '¿Quién debería conocer primero un incidente de datos en la empresa?', ops: ['El Oficial de Datos Personales y tu jefe', 'Los jefes de tienda', 'Los afectados por WhatsApp', 'Nadie'], ok: 0, por: 'El Oficial de Datos coordina la evaluación, el registro y la eventual notificación.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '09:00', ch: 'presencial', who: 'gerente', titulo: '«Quién se va a ir»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la Gerencia de Tiendas', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('monica_honesta') ? 'Mónica ya digirió lo del sueldo. Ahora quiere ir un paso más allá.' : 'Mónica tiene tus gráficos impresos y subrayados.'} «Si ya sabes qué hace que la gente se vaya, puedes saber quién se va a ir. Hazme una lista, nombre por nombre.»</p><p>«A los que se van a ir igual, no les renuevo el contrato y me ahorro capacitarlos. A los buenos les doy un bono. <mark class="clave">Es eficiente</mark>, ¿no?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no harás una lista individual para decidir contratos, explicarle por qué, y ofrecerle un indicador de riesgo por equipo con acciones para todos.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: -2 }, rel: { gerente: -1 }, flags: ['lista_negada'], cartera: { lista: 'No: se ofrece riesgo por equipo' },
          out: 'Mónica se recuesta en su silla. «Eres bien principista para tener una semana aquí.» Pero no te corta: «Ya. Mándame esa alternativa hoy».',
          pro: { ok: 'Proteges a las personas de una decisión basada en una predicción sobre ellas.', risk: 'Mónica puede pedírselo a otro.', info: 'Llévalo por escrito y con Diego: no es una opinión tuya, es un límite de la empresa.' },
          kusi: ['celebra', 'Un «no» con alternativa vale doble.'] } },
      { id: 'b', label: 'Aceptar una lista individual, pero solo para dar bonos de retención: nadie sale perjudicado por recibir un bono.',
        res: { q: 'aceptable', fx: { etica: -2, cumplimiento: -2, confianza: 3 }, rel: { gerente: 1 }, flags: ['lista_retencion'], cartera: { lista: 'Lista «solo para retener»' },
          out: 'Mónica sonríe. Pero una lista de «quiénes se van» también es una lista de «quiénes no reciben bono». Y tú no controlas dónde termina.',
          pro: { ok: 'El uso declarado parece positivo.', risk: 'Una vez hecha, la lista sirve para cualquier finalidad. Y no recibir bono también afecta a alguien.' },
          kusi: ['pensando', '¿Y quién la guarda después?'] } },
      { id: 'c', label: 'Hacerle la lista como la pidió: la gerenta decide sobre sus contratos y el análisis es suyo.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6, confianza: 4 }, rel: { gerente: 1 }, flags: ['lista_entregada'], cartera: { lista: 'Lista individual entregada' },
          out: 'A la una le mandas 84 nombres con una «probabilidad de fuga». Ninguna de esas 84 personas sabe que existe.',
          pro: { ok: 'Mónica queda feliz hoy.', risk: 'Decidir no renovar a alguien por una predicción de su conducta, sin intervención humana real ni que la persona lo sepa, va contra el derecho al tratamiento objetivo.' },
          kusi: ['indignado', '¡84 personas que no saben nada!'] } },
    ],
    rules: [[LEY, 'Nadie debe ser objeto de decisiones que le afecten significativamente basadas solo en evaluar su conducta (Ley 29733, art. 23; D.S. 016-2024-JUS, art. 87).'], [LEY, 'Los datos no se usan para una finalidad distinta de aquella para la que se recogieron (Ley 29733, art. 6).']],
    mirada: {
      ve: 'Predecir quién renunciará suena moderno. Pero si la predicción decide quién no tiene contrato, la persona pierde su trabajo por algo que todavía no hizo, sin saberlo ni poder defenderse. El reglamento lo dice claro: nadie debe quedar sometido a decisiones que evalúan o predicen su comportamiento sin intervención humana.',
      visual: { tipo: 'balanza', a: { t: 'Lista individual', items: ['Etiqueta a 84 personas', 'Contratos decididos por un modelo', 'Nadie puede defenderse'] }, b: { t: 'Riesgo por equipo', items: ['Dice dónde actuar', 'Acciones para todos', 'Nadie etiquetado'] } },
      normas: [{ ley: 'D.S. 016-2024-JUS, art. 87', dice: 'El titular tiene derecho a no ser objeto de decisiones, automatizadas o no, que le produzcan efectos jurídicos, discriminación o le afecten significativamente, incluidas las basadas en tratamientos destinados a evaluar o predecir, sin intervención humana, su rendimiento profesional o comportamiento.', practica: 'No renovar un contrato porque «el modelo dice que te vas» encaja exactamente en lo que esa norma busca evitar.' }],
    },
  },
  {
    id: 'e2', t: '10:15', ch: 'presencial', who: 'diego-pa', titulo: 'Bajar al piso 3', banner: 'assets/foto/mentora.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Bajas por las escaleras para pensar. ${F.has('lista_entregada') ? 'Le cuentas a Diego lo que entregaste. Se quita los lentes y se frota los ojos.' : 'Diego te escucha con los brazos cruzados.'}</p><p>«Esto iba a pasar. Siempre pasa. <mark class="clave">Pregúntame</mark> lo que necesites para lo que viene.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'modelo', label: '¿Un modelo así funcionaría de verdad?', info: '«Con 720 salidas, acertaría a veces y se equivocaría mucho. Y lo peor: si a los "riesgosos" les quitas oportunidades, se van más, y el modelo "acierta". Es una profecía que se cumple sola.»' },
      { id: 'quien', label: '¿Quién decide estos límites en la empresa?', info: '«Tenemos un Oficial de Datos Personales desde este año: con nuestro volumen de datos, el reglamento lo pide. Cualquier tratamiento nuevo con datos de personas pasa por él.»' },
      { id: 'monica', label: '¿Por qué Mónica insiste tanto?', info: '«Porque el directorio le pone la rotación como meta y le dio dos semanas. No es mala persona: tiene miedo. Si le das algo que pueda presentar, deja de buscar atajos.»' },
      { id: 'bien', label: '¿Hay usos buenos de la predicción?', info: '«Sí: para saber dónde invertir. Qué equipos necesitan apoyo, qué meses son críticos. Predecir para cuidar, no para descartar.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, calidad: picks.includes('bien') || picks.includes('modelo') ? 2 : 1 }, rel: { 'diego-pa': 1 },
      out: 'Diego te pasa una hoja en blanco: «Arma la alternativa. Que sea mejor que la lista, no solo más ética».',
      kusi: ['curioso', 'Predecir para cuidar, no para descartar.'],
    }),
    mirada: {
      ve: 'Un modelo de «riesgo de fuga» puede crear el problema que dice medir: si al vendedor marcado le niegas bono, turno o contrato, se va, y el modelo parece haber acertado. Por eso en analítica de personas la pregunta no es solo «¿funciona?», sino «¿qué le hace a la gente?».',
      visual: { tipo: 'flujo', titulo: 'La profecía que se cumple sola', pasos: ['El modelo marca a Ana', 'Le niegan el bono', 'Ana se desanima', 'Ana renuncia', '«El modelo acertó»'] },
    },
  },
  {
    id: 'e3', t: '11:20', ch: 'documento', who: null, titulo: 'El requerimiento formal', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Llega el requerimiento por escrito, firmado por Gino «por encargo de la Gerencia». Diego te pide <mark class="clave">marcar cada problema</mark> para llevarlo al Oficial de Datos.</p>`,
    type: 'flag', prompt: 'Marca las líneas del requerimiento que incumplen la ley o son mala práctica.',
    doc: { t: 'Requerimiento: Modelo de riesgo de fuga', sub: 'Gerencia de Tiendas · para el comité' },
    lines: [
      { id: 'contr', t: 'Uso: definir la no renovación de contratos de vendedores con riesgo alto.', bad: LEY, why: 'Una decisión con efecto significativo basada en predecir la conducta de la persona (Ley 29733, art. 23; D.S. 016-2024-JUS, art. 87).' },
      { id: 'salud', t: 'Variables: incluir descansos médicos y diagnósticos de los últimos dos años.', bad: LEY, why: 'Son datos de salud, sensibles, recogidos para otra finalidad.' },
      { id: 'sup', t: 'Distribución: enviar a cada supervisor la lista de su equipo con el puntaje.', bad: BP, why: 'Etiquetar a cada vendedor ante su jefe cambia cómo lo trata. Y multiplica quién tiene la lista.' },
      { id: 'secret', t: 'No informar a los trabajadores sobre el modelo.', bad: LEY, why: 'Cuando se usan datos para decidir sin participación del titular, el reglamento pide informárselo (D.S. 016-2024-JUS, art. 87.2).' },
      { id: 'equipo', t: 'Reporte mensual de rotación por equipo, sin nombres.' },
      { id: 'wsp', t: 'Variables: horas de conexión al WhatsApp del grupo de tienda.', bad: BP, why: 'No responde la pregunta y convierte un grupo de coordinación en un sistema de vigilancia.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Marcas varios problemas, pero se te pasan algunos de los más graves. Diego los agrega en rojo.' : `Marcas ${hitsLey} problemas legales y dos de mala práctica. Diego lo escanea y se lo envía al Oficial de Datos con copia a Mónica.`,
      flags: missLey ? [] : ['pedido_revisado'],
      cartera: { lista: missLey ? 'Requerimiento revisado a medias' : 'Requerimiento observado: va al Oficial de Datos' },
      pro: { ok: 'Un análisis por escrito, línea por línea, despersonaliza el «no».', risk: 'Si solo dices «no se puede», parece capricho tuyo.' },
      kusi: missLey ? ['pensando', 'Algo grave se coló…'] : ['celebra', '¡Línea por línea, sin drama!'],
    }),
    rules: [[LEY, 'La información de salud es un dato sensible (Ley 29733, art. 2, num. 5).'], [LEY, 'Si se tratan datos para decidir sin participación de la persona, hay que informárselo (D.S. 016-2024-JUS, art. 87.2).']],
    mirada: {
      ve: 'El requerimiento mezcla una sola línea razonable (rotación por equipo, sin nombres) con varias que dañan a las personas. Separarlas por escrito permite rescatar lo útil y frenar lo demás sin que sea una pelea personal.',
      visual: { tipo: 'cambio', titulo: 'Lo pedido y lo posible', pares: [['Lista con puntaje por persona', 'Riesgo por equipo, sin nombres'], ['Decidir contratos', 'Decidir dónde apoyar'], ['Diagnósticos médicos', 'Solo datos laborales necesarios'], ['En secreto', 'Explicado al personal']] },
    },
  },
  {
    id: 'e4', t: '13:15', ch: 'documento', who: null, titulo: 'La alternativa', banner: 'assets/esc/idea.webp', show: ['calidad', 'etica', 'tiempo'],
    body: () => `<p>Almuerzas un sándwich de chicharrón frente a la laptop. Tienes hasta las cinco para que la alternativa <mark class="clave">sea mejor que la lista</mark>, no solo más ética.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu propuesta.', boton: 'Guardar la propuesta',
    bloques: [
      { id: 'que', t: 'Qué se mide', n: 2, ops: [
        { id: 'q1', t: 'Riesgo de rotación por equipo: antigüedad del supervisor, salidas de los últimos tres meses y vendedores en sus primeros 90 días.', ok: true, por: 'Señala dónde actuar sin etiquetar a nadie.' },
        { id: 'q2', t: 'Solo equipos de 5 o más personas.', ok: true, por: 'Evita que alguien sea reconocible.' },
        { id: 'q3', t: 'Puntaje individual oculto, «por si acaso».', ok: false, por: 'Si existe, alguien lo pedirá.' },
      ] },
      { id: 'accion', t: 'Qué se hace', n: 2, ops: [
        { id: 'a1', t: 'Acompañamiento a supervisores nuevos en los equipos de riesgo alto.', ok: true },
        { id: 'a2', t: 'Entrevistas de permanencia al mes y a los tres meses, para todos los nuevos.', ok: true, por: 'Preguntar antes de que se vayan, no después.' },
        { id: 'a3', t: 'No renovar a los equipos con más riesgo.', ok: false, por: 'Castigas al equipo por un problema que no creó.' },
      ] },
      { id: 'gob', t: 'Quién lo cuida', n: 1, ops: [
        { id: 'g1', t: 'Lo revisa el Oficial de Datos y solo People Analytics ve el detalle.', ok: true },
        { id: 'g2', t: 'Que cada gerente lo descargue cuando quiera.', ok: false, por: 'Sin control de accesos no hay protección.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, etica: q === 'buena' ? 4 : 0 },
        flags: q === 'riesgosa' ? [] : ['alternativa_lista'], cartera: { propuesta: q === 'buena' ? 'Riesgo por equipo + acciones + gobierno' : 'Propuesta con huecos' },
        out: q === 'buena' ? 'Tu propuesta cabe en una página: dónde está el riesgo, qué se hace y quién cuida el dato. Diego dice: «Esto el lunes es tablero».' : 'La propuesta tiene buenas ideas, pero deja puertas abiertas a lo mismo que querías evitar.',
        pro: { ok: 'Una alternativa sirve si resuelve el problema de quien pide, no solo el tuyo.', risk: 'Un puntaje individual «oculto» termina usándose.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Mejor que la lista y sin etiquetas!' : 'Alguna pieza sobra…'],
      };
    },
    mirada: {
      ve: 'Decir que no es la mitad del trabajo. La otra mitad es ofrecer algo que le sirva más a Mónica que lo que pidió: saber dónde actuar, con qué y cómo medir si funciona.',
      visual: { tipo: 'flujo', titulo: 'Predecir para cuidar', pasos: ['Riesgo por equipo', 'Apoyo al supervisor', 'Entrevista de permanencia', 'Medir en 3 meses'] },
    },
  },
  {
    id: 'e5', t: '15:15', ch: 'whatsapp', who: 'ti', titulo: 'El enlace', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'tiempo', 'confianza'],
    body: () => `<p>Gino, con la mejor intención, puso el enlace de tu borrador de Power BI en la carpeta de Tiendas, que ven los 34 jefes. El borrador tiene DNI de 720 exvendedores y sus comentarios de salida.</p><p>Pedro te escribe en mayúsculas. <mark class="clave">Hay que actuar en orden</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos ante el incidente. Usa las flechas.', boton: 'Actuar',
    items: [
      { id: 'cont', t: 'Cerrar el enlace y quitar el archivo de la carpeta de Tiendas', por: 'Primero se detiene la exposición.' },
      { id: 'log', t: 'Pedir a Pedro el registro de quién abrió o descargó el borrador', por: 'Saber el alcance real.' },
      { id: 'odp', t: 'Informar ese mismo día a Diego y al Oficial de Datos Personales', por: 'Quien evalúa y decide.' },
      { id: 'eval', t: 'Evaluar con el Oficial si corresponde notificar a la Autoridad dentro de las 48 horas', por: 'El reglamento lo exige en ciertos supuestos.' },
      { id: 'doc', t: 'Documentar el incidente y quitar los DNI del borrador', por: 'Para que no vuelva a pasar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -4, confianza: q === 'buena' ? 3 : 0, tiempo: -2 }, rel: { ti: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'incidente_tapado' : 'incidente_ordenado'], cartera: { accesos: q === 'riesgosa' ? 'Enlace cerrado, sin registro' : 'Incidente contenido y registrado' },
        out: q === 'buena' ? 'En 12 minutos el enlace está cerrado. El registro dice que lo abrieron 3 jefes y nadie descargó. El Oficial de Datos lo registra y evalúa los siguientes pasos.' : q === 'aceptable' ? 'El enlace queda cerrado, pero informas tarde. El Oficial de Datos te pide que la próxima vez sea lo primero después de contener.' : 'Cierras el enlace y respiras. No informas a nadie. Nadie sabe si alguno de los 34 lo descargó.',
        pro: { ok: 'Contener, medir, informar, evaluar y documentar.', risk: 'Un incidente tapado no desaparece: solo deja de tener quien lo gestione.', info: 'Desde hoy, ningún borrador con DNI: los identificadores viven aparte.' },
        kusi: [q === 'riesgosa' ? 'preocupado' : 'celebra', q === 'riesgosa' ? 'Cerrar no es resolver.' : '¡Contenido en doce minutos!'],
      };
    },
    rules: [[LEY, 'En ciertos incidentes (grandes volúmenes, muchas personas, datos sensibles o perjuicio evidente), se notifica a la Autoridad como máximo dentro de las 48 horas (D.S. 016-2024-JUS, art. 34.1).'], [LEY, 'Todo incidente de seguridad se documenta (D.S. 016-2024-JUS, art. 35).'], [LEY, 'Quien trata datos debe adoptar medidas de seguridad apropiadas (Ley 29733, art. 9).']],
    mirada: {
      ve: 'Gino no quiso hacer daño: quiso ayudar. Así ocurren casi todos los incidentes. Por eso importan dos cosas: que los borradores no tengan identificadores innecesarios y que, cuando algo pase, haya un orden claro y nadie tenga miedo de avisar.',
      visual: { tipo: 'flujo', titulo: 'Ante un incidente de datos', pasos: ['Contener', 'Medir el alcance', 'Informar al Oficial', 'Evaluar notificación', 'Documentar y corregir'] },
      normas: [{ ley: 'D.S. 016-2024-JUS, art. 34.1', dice: 'Ante un incidente que exponga grandes volúmenes de datos, afecte a muchas personas, involucre datos sensibles o cause perjuicio evidente, se notifica a la Autoridad como máximo dentro de las 48 horas de conocerlo, aun si se considera resuelto internamente.', practica: 'Cerrar el enlace no te exime: quien decide si corresponde notificar es el Oficial, con los datos del alcance.' }],
    },
  },
  {
    id: 'e6', t: '16:45', ch: 'whatsapp', who: null, titulo: 'La alternativa para Mónica', banner: 'assets/esc/dedos.webp', show: ['confianza', 'etica'],
    body: (n, F) => `<p>${F.has('lista_entregada') ? 'Ya le entregaste la lista a Mónica en la mañana. Aun así, Diego te pide que le mandes la alternativa: «Por si todavía hay tiempo de que no la use».' : 'Mónica espera la alternativa. Es viernes y querrá leerla el fin de semana.'}</p><p>Le escribes. <mark class="clave">Que vea lo que gana</mark>, no solo lo que no puede.</p>`,
    type: 'compose', enviaA: 'monica', para: 'Para: Mónica Larrea', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gana', t: 'Qué gana', ops: [
        { id: 'g1', t: 'Mónica, te mando una propuesta que te dice en qué equipos actuar primero y con qué, para presentar el miércoles.', ok: true, por: 'Empiezas por su necesidad.' },
        { id: 'g2', t: 'Mónica, lo que pediste no se puede hacer por ley.', ok: false, por: 'Cierto en parte, pero empiezas por el no.' },
      ] },
      { id: 'por', t: 'Por qué no una lista', ops: [
        { id: 'p1', t: 'Una lista individual nos expone legalmente y además empeora la rotación: quien se siente marcado se va.', ok: true, por: 'Riesgo legal y de negocio, en una línea.' },
        { id: 'p2', t: 'Las listas no son éticas.', ok: false, por: 'Juzga, no explica.' },
      ] },
      { id: 'sig', t: 'Siguiente paso', ops: [
        { id: 's1', t: 'El lunes lo convierto en un tablero que entiendas en un minuto.', ok: true },
        { id: 's2', t: 'Avísame si tienes dudas.', ok: null, por: 'Correcto, pero sin compromiso.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'p1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, etica: 2 }, rel: { gerente: q === 'buena' ? 1 : 0 },
        cartera: { propuesta: 'Enviada a Mónica' },
        out: q === 'buena' ? 'Mónica pone «visto» y, al rato, escribe.' : 'Mónica responde tarde y corto.',
        pro: { ok: 'Lo que ella gana primero; el límite, explicado como riesgo para ella.', risk: 'Un «no se puede» sin alternativa empuja a buscar a alguien que diga que sí.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Le diste algo que presentar.' : 'Empieza por lo que ella necesita.'],
      };
    },
    mirada: {
      ve: 'Las conversaciones éticas con directivos funcionan mejor en su idioma: riesgo, resultados y plazos. No porque la ética no importe, sino porque así es como ella podrá defender tu propuesta frente al directorio.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje', txt: 'Te mando una propuesta que te dice en qué equipos actuar primero. Una lista individual nos expone legalmente y además empeora la rotación. El lunes te la convierto en un tablero.' },
    },
  },
  {
    id: 'e7', t: '18:20', ch: 'whatsapp', who: null, titulo: '«¿Van a despedir a alguien?»', banner: 'assets/esc/camino.webp', lugar: 'Paradero del Metropolitano', show: ['personas', 'etica'],
    body: () => `<p>Esperas el Metropolitano en la estación con olor a lluvia y a anticuchos. Te escribe Yesenia: «Señorita, mi amiga dice que en Santa Anita se comenta que están "investigando". <mark class="clave">¿Lo que le conté va a hacer que despidan a alguien?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que su testimonio se usa sin su nombre para entender un patrón, que el análisis no decide despidos y que, si alguien sufre maltrato hoy, puede acudir a RR.HH.',
        res: { q: 'buena', fx: { personas: 5, etica: 3 }, flags: ['yesenia_tranquila'],
          envia: [['yesenia', 'Yesenia, lo que me contaste se usa sin tu nombre, junto con lo que dijeron muchas otras personas, para entender por qué se va la gente y mejorar cómo se elige y se acompaña a los supervisores. Este análisis no decide despidos. Y si tu amiga o alguien sufre maltrato hoy, puede acudir a Lucía, de RR.HH.']],
          out: 'Yesenia responde: «Ya, gracias. Le paso el contacto de Lucía a mi amiga». Llega tu bus, lleno hasta la puerta.',
          pro: { ok: 'Le dices qué pasa con su testimonio y le das un canal real.', info: 'No le cuentes resultados ni nombres: eso también la protege.' },
          kusi: ['feliz', 'Verdad, cuidado y un canal. ¡Bacán!'] } },
      { id: 'b', label: 'Contarle que el problema sí está en Santa Anita y que pronto habrá cambios.',
        res: { q: 'riesgosa', fx: { personas: 1, etica: -4 },
          envia: [['yesenia', 'Tranqui, Yesenia. Sí encontramos algo en Santa Anita, pronto habrá cambios 😉']],
          out: 'Yesenia se lo reenvía a su amiga. Para el lunes, en Santa Anita todos «saben» algo que todavía no es verdad.',
          pro: { ok: 'La tranquilizas.', risk: 'Compartes un hallazgo no validado, que además identifica una tienda.' },
          kusi: ['preocupado', 'Un mensaje viaja más rápido que el bus.'] } },
    ],
    mirada: { ve: 'Quienes dan su testimonio temen dos cosas: que se sepa que hablaron y que su palabra dañe a alguien. Explicar para qué se usa, sin revelar resultados, cuida a la fuente y al análisis.' },
  },
];
