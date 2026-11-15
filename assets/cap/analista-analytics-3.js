// Analista de People Analytics · Capítulo 3 · «Las entrevistas de salida» · Semana 1, miércoles.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 2 num. 5 (datos sensibles), art. 13.5 (consentimiento previo, informado, expreso e inequívoco), art. 17 (confidencialidad).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS (El Peruano, 30/11/2024): art. 3 (consentimiento libre; condicionar beneficios afecta la libertad, num. 3.2),
//   art. 6 (consentimiento informado: finalidad y carácter facultativo de las respuestas).

export const CAP = {
  n: 3, titulo: 'Las entrevistas de salida', dia: 'Semana 1, miércoles', foto: 'assets/foto2/callcenter.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo',
  inicio: '08:20', fin: '19:00', cierreHora: '18:50',
  apertura: 'Miércoles. De 540 renuncias, solo 205 tienen entrevista de salida. Y 146 dicen lo mismo: «motivos personales».', boton: 'Abrir las entrevistas',
  kusi: 'Hoy los números hablan bajito. Hay que escuchar a las personas. ¡Dale!',
  lead: 'Ordenaste los comentarios en categorías, encontraste por qué el formato no dice la verdad y escuchaste a una exvendedora sin exponerla.',
  reflexion: '¿Qué le dirías tú al supervisor que te entrevista el día que renuncias?',
  siguiente: { n: 4, titulo: 'El hallazgo', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'salida', p: 'Entrevistas de salida', j: 'Lucía · HRBP', d: 2, e: '205 de 540 renuncias' },
  { id: 'codigos', p: 'Categorías de motivos', j: 'Tú', d: 2, e: 'Por definir' },
  { id: 'llamadas', p: 'Llamadas a exvendedores', j: 'Tú', d: 2, e: 'Sin empezar' },
  { id: 'rotacion', p: 'Rotación de vendedores', j: 'Tú', d: 2, e: 'Base limpia' },
];

export const FUTURO = {
  codigos_ok: ['Tus categorías salen de los comentarios y se revisan entre dos.', 'Podrás contar cuántas veces aparece cada motivo.'],
  codigos_flojos: ['Tus categorías mezclan motivos y culpas.', 'El conteo será discutible.'],
  formato_critico: ['Viste que el supervisor llenaba la entrevista de salida.', 'Es la primera pista de lo que encontrarás mañana.'],
  yesenia_confia: ['Yesenia te contó su historia y aceptó que la cites sin su nombre.', 'Volverá a escribirte.'],
  yesenia_grabada: ['Grabaste a Yesenia sin decírselo.', 'Si se entera, nadie más te contestará.'],
  citas_cuidadas: ['Elegiste citas que no identifican a nadie.', 'Mónica no podrá adivinar quién habló.'],
  cita_identificable: ['Una de tus citas permite saber quién la dijo.', 'Alguien en tienda lo sabrá.'],
  monica_explicada: ['Le explicaste a Mónica por qué llamaste a exvendedores.', 'Ella empieza a confiar en el método.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Exvendedora · tienda Santa Anita', c: '#C0572B' },
};

export const WSP = [
  { chat: 'lucia', t: '08:25', de: 'Lucía', txt: 'Me enteré de lo de la columna de correos 😬 Gracias por avisarme. Ya pedí que el sistema no la exporte más.', si: 'encuesta_anonima' },
  { chat: 'lucia', t: '08:25', de: 'Lucía', txt: 'Diego me contó que uniste la encuesta con los correos. Yo les prometí a las tiendas que era anónima. Hablemos, por favor.', si: 'encuesta_rota' },
  { chat: 'equipo', t: '09:10', de: 'Diego', txt: 'Hoy cuantitativo poco y escucha mucha. Lo que no está en la base también es dato.' },
  { chat: 'yesenia', t: '12:30', de: 'Yesenia', txt: 'Gracias por llamarme, señorita. Nadie me preguntó nada cuando me fui. Ojalá sirva para las chicas que siguen ahí.', si: 'yesenia_confia' },
  { chat: 'monica', t: '17:55', de: 'Mónica', txt: 'Ya, entiendo. Pero que no se vuelva un buzón de quejas, ¿ok?', si: 'monica_explicada' },
];

export const CORREOS = [
  { t: '08:30', de: 'Lucía Ccori', para: 'Analista de People Analytics', asunto: 'Entrevistas de salida 12 meses', html: '<p>Te adjunto lo que hay en la carpeta: 205 entrevistas. Te soy honesta: en tienda casi nadie la llena, y cuando la llenan, la hace el supervisor el último día, al entregar la credencial.</p><p>Lucía</p>' },
  { t: '17:30', de: 'Mónica Larrea', para: 'Analista de People Analytics; Diego Paz', asunto: '¿Llamadas a exvendedores?', html: '<p>Me dicen de Santa Anita que estás llamando a gente que ya se fue. ¿Quién autorizó eso? No quiero que esto se convierta en un buzón de quejas ni que me llamen de SUNAFIL por una conversación mal llevada.</p><p>Mónica</p>' },
];

export const QUIZ = [
  { q: 'Si el 71 % de las entrevistas de salida dice «motivos personales», lo más probable es que…', ops: ['La gente se va por su vida privada', 'El instrumento no está capturando el motivo real', 'Los datos estén perfectos', 'Haya que eliminar la pregunta'], ok: 1, por: 'Cuando casi todos marcan la opción vaga, el problema suele estar en cómo, cuándo y quién pregunta.' },
  { q: '¿Quién no debería aplicar la entrevista de salida de un vendedor?', ops: ['Una HRBP', 'Una persona de RR.HH. fuera de la tienda', 'Su supervisor directo', 'Un formulario anónimo'], ok: 2, por: 'Si el motivo es el supervisor, nadie se lo va a decir a él en la cara.' },
  { q: 'Condicionar la entrega de la liquidación a que la persona llene la entrevista…', ops: ['Es una buena forma de subir la tasa de respuesta', 'Afecta la libertad del consentimiento', 'Es obligatorio', 'Es indiferente'], ok: 1, por: 'El reglamento de la Ley 29733 (art. 3.2) dice que condicionar beneficios afecta la libertad de quien consiente.' },
  { q: 'Para citar a una exvendedora en tu informe, necesitas…', ops: ['Nada, ya no trabaja aquí', 'Explicarle para qué la citarás, que es voluntario, y su aceptación', 'Solo su DNI', 'Permiso de la gerenta'], ok: 1, por: 'El consentimiento debe ser previo, informado, expreso e inequívoco (Ley 29733, art. 13.5).' },
  { q: 'Una cita «anónima» puede identificar a alguien cuando…', ops: ['Es muy larga', 'Incluye detalles que solo tiene una persona del equipo', 'Está entre comillas', 'Es negativa'], ok: 1, por: 'En grupos chicos, un detalle (embarazo, turno, sección) basta para saber quién habló.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:40', ch: 'documento', who: null, titulo: 'El libro de códigos', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Además de la casilla, 118 entrevistas tienen un comentario escrito: «el horario no me daba», «me cambiaban de turno sin avisar», «el supervisor grita», «encontré algo más cerca de mi casa en Huaycán».</p><p>Para contar lo que dicen, primero hay que <mark class="clave">ponerle nombre a cada motivo</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu libro de códigos.', boton: 'Guardar el libro de códigos',
    bloques: [
      { id: 'cat', t: 'Categorías', n: 3, ops: [
        { id: 'k1', t: 'Trato del supervisor (gritos, favoritismo, humillación).', ok: true },
        { id: 'k2', t: 'Horarios y cambios de turno.', ok: true },
        { id: 'k3', t: 'Sueldo y comisiones.', ok: true, por: 'La hipótesis de Mónica también se mide.' },
        { id: 'k4', t: 'Poca tolerancia a la presión.', ok: false, por: 'No es un motivo que la persona dio: es un juicio sobre ella.' },
        { id: 'k5', t: 'Gente que no aguanta, la nueva generación.', ok: false, por: 'Un prejuicio no es una categoría.' },
      ] },
      { id: 'reglas', t: 'Reglas de codificación', n: 2, ops: [
        { id: 'r1', t: 'Un comentario puede tener más de un código si menciona varios motivos.', ok: true },
        { id: 'r2', t: 'Diego codifica 30 comentarios por su lado y comparan.', ok: true, por: 'Dos lecturas reducen el sesgo de una.' },
        { id: 'r3', t: 'Si no queda claro, se codifica como «motivo personal».', ok: false, por: 'Así vuelves a esconder lo que querías encontrar. Usa «no clasificable».' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: [q === 'buena' ? 'codigos_ok' : 'codigos_flojos'], cartera: { codigos: q === 'buena' ? 'Libro de códigos con doble revisión' : 'Categorías discutibles' },
        out: q === 'buena' ? 'Diego y tú coinciden en 26 de 30 comentarios. Al terminar, «trato del supervisor» aparece en 40 de los 118.' : 'Al codificar, la mitad de los comentarios termina en categorías que hablan de la persona y no de lo que le pasó.',
        pro: { ok: 'Las categorías nacen de lo que dice la gente, no de lo que pensamos de ella.', risk: 'Una categoría como «no aguanta presión» culpa a quien se fue y oculta lo que lo empujó.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Las palabras ya se pueden contar!' : 'Ojo con los juicios disfrazados de categoría.'],
      };
    },
    mirada: {
      ve: 'Codificar es transformar frases en datos sin traicionarlas. La prueba de una buena categoría: si la persona que escribió el comentario la leyera, ¿se reconocería en ella?',
      visual: { tipo: 'embudo', titulo: 'Lo que se sabe de 540 renuncias', niveles: [['Renuncias', 540], ['Con entrevista de salida', 205], ['Con comentario escrito', 118], ['Mencionan al supervisor', 40]] },
    },
  },
  {
    id: 'c2', t: '10:10', ch: 'documento', who: null, titulo: 'El formato que nadie cuestionó', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>¿Por qué tantos «motivos personales»? Abres el formato de entrevista de salida, una hoja de 2019 que se imprime en cada tienda.</p><p>Lo lees como si fueras tú la que renuncia. <mark class="clave">¿Qué hace que nadie diga la verdad?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o hace que la entrevista no capte la verdad.',
    doc: { t: 'Formato RH-07 · Entrevista de salida', sub: 'HogarPlus · versión 2019' },
    lines: [
      { id: 'quien', t: 'La aplica el supervisor directo el último día de trabajo.', bad: BP, why: 'Si el motivo es el supervisor, nadie se lo dirá a él.' },
      { id: 'liq', t: 'Sin este formato firmado no se entrega la liquidación de beneficios sociales.', bad: LEY, why: 'Condicionar un beneficio a que la persona entregue sus datos afecta la libertad del consentimiento (D.S. 016-2024-JUS, art. 3.2). Además, la liquidación no puede depender de una encuesta.' },
      { id: 'opc', t: 'Primera opción, ya marcada por defecto: «Motivos personales».', bad: BP, why: 'La opción preseleccionada es la que más se elige.' },
      { id: 'salud', t: '«¿Tiene alguna enfermedad o tratamiento que haya influido en su decisión? Detalle.»', bad: LEY, why: 'Pide información de salud, un dato sensible, sin necesidad ni consentimiento por escrito.' },
      { id: 'info', t: 'No dice para qué se usarán las respuestas ni si responder es voluntario.', bad: LEY, why: 'Al recoger datos se debe informar la finalidad y si las respuestas son obligatorias o facultativas (D.S. 016-2024-JUS, art. 6).' },
      { id: 'rec', t: '«¿Recomendaría HogarPlus como lugar para trabajar? Del 0 al 10.»' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Señalas lo del supervisor y la opción marcada, pero se te pasan problemas legales del formato.' : `Encuentras ${hitsLey} problemas legales y entiendes el 71 %: la entrevista la hace el jefe, con la liquidación en juego y la respuesta ya marcada.`,
      flags: ['formato_critico'],
      cartera: { salida: missLey ? 'Formato RH-07 revisado a medias' : 'Formato RH-07: rediseño necesario' },
      pro: { ok: 'Un instrumento mal diseñado produce datos falsos con apariencia de verdad.', risk: 'Analizar el 71 % de «motivos personales» como si fuera real te llevaría a la conclusión equivocada.', info: 'Propón que la entrevista la haga RR.HH. o un formulario fuera de la tienda.' },
      kusi: missLey ? ['pensando', 'Había más de un problema legal ahí…'] : ['sorpresa', '¡Con razón todos dicen lo mismo!'],
    }),
    rules: [[LEY, 'Condicionar beneficios al consentimiento afecta su libertad (D.S. 016-2024-JUS, art. 3.2).'], [LEY, 'Al recoger datos se informa la finalidad y si responder es facultativo (D.S. 016-2024-JUS, art. 6).'], [LEY, 'La información de salud es un dato sensible (Ley 29733, art. 2, num. 5).']],
    mirada: {
      ve: 'El «71 % de motivos personales» no era un hallazgo: era el efecto del formato. Antes de analizar las respuestas, pregúntate siempre cómo se obtuvieron. Un dato mal recogido no se arregla con estadística.',
      visual: { tipo: 'cambio', titulo: 'Del formato viejo al que capta la verdad', pares: [['La hace el supervisor', 'La hace RR.HH. o un formulario externo'], ['Con la liquidación en juego', 'Voluntaria y explicada'], ['«Motivos personales» marcado', 'Opciones sin marcar y espacio libre']] },
      normas: [{ ley: 'D.S. 016-2024-JUS, art. 3.2', dice: 'Condicionar la prestación de un servicio o amenazar con negar beneficios afecta la libertad de quien da su consentimiento, si los datos no son indispensables.', practica: 'La liquidación no puede depender de que la persona responda una encuesta.' }],
    },
  },
  {
    id: 'c3', t: '11:30', ch: 'llamada', who: null, titulo: 'Las llamadas', banner: 'assets/foto/llamada.webp', show: ['personas', 'etica', 'calidad'],
    body: () => `<p>Diego aprobó llamar a una muestra de exvendedores de distintas tiendas que dejaron un teléfono para contacto. Te pones los audífonos y empiezas.</p>`,
    type: 'calls',
    calls: [['Kevin Torres · ex Callao', 'Contesta: está manejando moto', 'Ahorita no puedo, estoy con un delivery. ¿Me escribe?'], ['Marleny Apaza · ex Arequipa', 'Contesta: se fue por estudios', 'Me fui porque empecé a estudiar enfermería en la noche y no me respetaban el horario.'], ['Yesenia Huamán · ex Santa Anita', 'Contesta: quiere hablar', 'En el papel puse motivos personales porque me lo llenó mi supervisor delante de mí. ¿De verdad quiere saber por qué me fui?'], ['Jhon Ccahua · ex Santa Anita', 'Número fuera de servicio']],
    prompt: 'Yesenia quiere contarte qué pasó. ¿Cómo sigues la conversación?',
    choices: [
      { id: 'a', label: 'Explicarle para qué es la conversación, que es voluntaria, que no la nombrarás, y preguntarle si acepta que cites lo que diga sin su nombre.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, calidad: 3 }, flags: ['yesenia_confia'], cartera: { llamadas: '3 conversaciones, 1 en profundidad (con consentimiento)' },
          out: 'Yesenia habla 20 minutos. Cambios de turno por WhatsApp a las 11 de la noche, gritos delante de clientes, «a ti no te toca descanso este domingo». Acepta que la cites sin nombre.',
          pro: { ok: 'Informas y pides permiso antes de usar su testimonio.', info: 'Cuéntale qué pasará con lo que dijo y cuándo verá algún cambio, sin prometer de más.' },
          kusi: ['feliz', 'Te habló porque la trataste con respeto.'] } },
      { id: 'b', label: 'Grabar la llamada sin avisarle para no perder detalles: luego anonimizas la transcripción.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -4, calidad: 2 }, flags: ['yesenia_grabada'],
          out: 'Tienes cada palabra. Y un audio con su voz contando cosas que, si se escuchan, la identifican sin necesidad de su nombre.',
          pro: { ok: 'No pierdes detalles.', risk: 'Su voz es un dato personal. Grabar sin informar ni pedir consentimiento la expone y rompe la confianza.' },
          kusi: ['indignado', '¿Y si ella se entera?'] } },
      { id: 'c', label: 'Sugerirle que presente una denuncia formal contra el supervisor: así su testimonio tendría valor.',
        res: { q: 'aceptable', fx: { personas: -1, etica: 2 },
          out: 'Yesenia se incomoda: «Yo ya me fui. No quiero problemas, solo quería que alguien supiera». Te cuenta poco más.',
          pro: { ok: 'Le muestras un camino formal.', risk: 'Confundes tu papel: estás entendiendo un patrón, no investigando una denuncia. Ella no vino a eso.', info: 'Puedes informarle que existe ese canal, sin presionarla.' },
          kusi: ['pensando', 'Ella quería ser escuchada, no un trámite.'] } },
    ],
    rules: [[LEY, 'El consentimiento debe ser previo, informado, expreso e inequívoco (Ley 29733, art. 13.5).'], [BP, 'Una entrevista de análisis no es una investigación disciplinaria.']],
    mirada: {
      ve: 'Las personas que se fueron no le deben nada a la empresa. Si te cuentan algo, es por confianza. Explicar el propósito, pedir permiso y no prometer más de lo que puedes cumplir es lo mínimo para merecerla.',
      visual: { tipo: 'flujo', titulo: 'Una conversación con consentimiento', pasos: ['Quién eres', 'Para qué es', 'Es voluntaria', 'Cómo la citarás', 'Su permiso', 'Qué pasará después'] },
    },
  },
  {
    id: 'c4', t: '13:20', ch: 'presencial', who: null, titulo: 'Almuerzo con Lucía', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del piso 1', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Lucía llega de la tienda de Ate con la casaca naranja de HogarPlus todavía puesta. Es de Cusco, lleva seis años en tiendas y conoce a cada supervisor por su nombre. ${F.has('encuesta_rota') ? 'Está seria: lo de la encuesta le dolió.' : 'Te recibe con un ají de gallina y una sonrisa.'}</p><p>«Pregúntame. <mark class="clave">Lo que no está en tus Excel</mark>, yo lo veo todos los días.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'sup', label: '¿Cómo se elige a los supervisores?', info: '«Al mejor vendedor lo ascienden. Sin curso, sin nada. El lunes vende taladros y el martes maneja catorce personas. Algunos aprenden; otros mandan como les mandaron a ellos.»' },
      { id: 'turno', label: '¿Cómo se arman los turnos?', info: '«Cada supervisor los arma en un Excel y los manda por WhatsApp, a veces el mismo día. Para una mamá o para alguien que estudia, eso es imposible.»' },
      { id: 'sueldo', label: '¿La competencia paga más?', info: '«Algo más en el básico, sí, pero no tanto. La gente se va por cien soles cuando ya está cansada por otra cosa. Nadie se va por cien soles si está contento.»' },
      { id: 'nuevos', label: '¿Qué pasa en los primeros meses?', info: '«La inducción es un video de una hora. Al día siguiente ya estás en el pasillo de pinturas sin saber qué es un látex. Muchos no llegan al tercer mes.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: 2, confianza: 2 },
      out: picks.includes('sup') ? 'Anotas en tu cuaderno: «¿cuánto tiempo lleva cada supervisor en el puesto?». Mañana lo cruzas.' : 'Anotas lo que Lucía te cuenta. Algo te dice que mañana habrá que mirar a los supervisores.',
      kusi: ['curioso', 'Lucía acaba de darte una hipótesis.'],
    }),
    mirada: {
      ve: 'Las HRBP y los jefes de tienda tienen hipótesis valiosas: ven lo que no llega a las bases. Tu trabajo es convertir lo que te cuentan en algo que se pueda probar con datos, sin descartarlo ni creerlo a ciegas.',
      visual: { tipo: 'mensaje', titulo: 'Hipótesis de Lucía', txt: 'Al mejor vendedor lo ascienden sin formación. Algunos aprenden; otros mandan como les mandaron.' },
    },
  },
  {
    id: 'c5', t: '15:30', ch: 'documento', who: null, titulo: 'Las citas para el informe', banner: 'assets/esc/piensa.webp', show: ['etica', 'calidad', 'personas'],
    body: () => `<p>Diego te pide <mark class="clave">tres citas</mark> que representen lo que encontraste, para el informe que leerán Mónica y el comité.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres citas que irán al informe.', boton: 'Usar estas', resumen: 'Elegiste',
    cols: ['Cita', 'De dónde sale'],
    rows: [
      { id: 'turno', cells: ['«Me cambiaban el turno por WhatsApp a las once de la noche.»', 'Se repite en 22 comentarios'] },
      { id: 'grito', cells: ['«Te gritan delante del cliente y después te piden que sonrías.»', 'Yesenia, con su permiso, sin nombre'] },
      { id: 'estud', cells: ['«Empecé a estudiar en la noche y no me respetaban el horario.»', 'Marleny y otros 9 comentarios'] },
      { id: 'embar', cells: ['«Era la única embarazada de pinturas en Santa Anita y me ponían a cargar galones.»', 'Un solo comentario'] },
      { id: 'sueldo', cells: ['«En la otra tienda me pagan cien soles más.»', 'Se repite en 15 comentarios'] },
      { id: 'flojo', cells: ['«No me gustaba levantarme temprano.»', 'Un comentario'] },
    ],
    score: { turno: 3, grito: 3, estud: 2, sueldo: 2, embar: -4, flojo: -2 },
    res: (picks, sc) => {
      const ident = picks.includes('embar');
      const q = ident ? 'riesgosa' : sc >= 7 ? 'buena' : 'aceptable';
      return {
        q, fx: { etica: ident ? -5 : 3, calidad: q === 'buena' ? 4 : 1, personas: ident ? -3 : 2 },
        flags: [ident ? 'cita_identificable' : 'citas_cuidadas'],
        out: ident ? 'Diego lee la cita y se queda quieto: «En pinturas de Santa Anita hubo una sola embarazada este año. Cualquiera sabe quién es».' : q === 'buena' ? 'Tus tres citas se repiten en muchos comentarios y no delatan a nadie. Diego las pega tal cual.' : 'Las citas sirven, aunque alguna representa a muy pocas personas.',
        pro: { ok: 'Una buena cita es frecuente, concreta y no identifica a nadie.', risk: 'En equipos pequeños, un detalle basta para reidentificar a la persona, y exponerla a represalias o a que se conozca su embarazo.', info: 'Esa experiencia grave merece otro canal: avísale a Lucía sin ponerla en el informe.' },
        kusi: [ident ? 'preocupado' : 'feliz', ident ? 'Sin nombre… pero con dirección.' : 'Voces reales, nadie expuesto.'],
      };
    },
    rules: [[LEY, 'Quien trata datos personales debe guardar confidencialidad sobre ellos (Ley 29733, art. 17).'], [BP, 'Una cita se usa si representa a muchas personas y no permite saber quién la dijo.']],
    mirada: {
      ve: 'Las citas le dan rostro al número, y por eso son peligrosas. «Anónimo» no es quitar el nombre: es asegurarse de que nadie pueda adivinarlo. Lo grave que no puede ir en el informe no se ignora: se lleva por el canal adecuado.',
      visual: { tipo: 'matriz', x: 'Riesgo de identificar', y: 'Cuántos lo dicen', cuadrantes: ['Úsala', 'Reformúlala', 'Como contexto', 'No la uses'], items: [['Turno por WhatsApp', .15, .9], ['Gritos ante clientes', .3, .75], ['Estudios', .2, .5], ['Cien soles', .1, .6], ['La única embarazada', .95, .1], ['Levantarse temprano', .2, .05]] },
    },
  },
  {
    id: 'c6', t: '17:10', ch: 'whatsapp', who: null, titulo: 'Lo que dicen las palabras', banner: 'assets/esc/cerebro.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Diego está en una reunión y te pide un resumen por WhatsApp. Tienes tus conteos: de 118 comentarios, 40 mencionan al supervisor, 22 los turnos, 15 el sueldo. Y casi la mitad de las renuncias ocurre antes del tercer mes.</p><p><mark class="clave">Cuidado con decir más de lo que sabes</mark>.</p>`,
    type: 'compose', enviaA: 'diego', para: 'Para: Diego Paz', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'De 118 comentarios, el trato del supervisor aparece en 40, los turnos en 22 y el sueldo en 15.', ok: true, por: 'Conteos con su base.' },
        { id: 'd2', t: 'Se van por los supervisores, ya está claro.', ok: false, por: 'Es una pista, no una conclusión: 118 comentarios no son 540 renuncias.' },
      ] },
      { id: 'lim', t: 'El límite', ops: [
        { id: 'l1', t: 'Ojo: solo el 22 % de las renuncias dejó comentario, y el formato lo aplicaba el supervisor.', ok: true, por: 'Dices qué tan representativo es.' },
        { id: 'l2', t: 'Son pocos, pero seguro representan a todos.', ok: false, por: 'No lo sabes.' },
      ] },
      { id: 'sig', t: 'El paso siguiente', ops: [
        { id: 's1', t: 'Mañana lo pruebo con la base completa: rotación por supervisor y por antigüedad del supervisor.', ok: true, por: 'Convierte la pista en una prueba.' },
        { id: 's2', t: 'Mañana le cuento a Mónica.', ok: false, por: 'Todavía no hay nada que contarle.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'l1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { 'diego-pa': q === 'buena' ? 1 : 0 },
        cartera: { codigos: '40 de 118 comentarios mencionan al supervisor' },
        out: q === 'buena' ? 'Diego responde desde su reunión: «Así se reporta una pista. Mañana la probamos».' : 'Diego responde: «Calma. Con 118 comentarios tenemos una hipótesis, no un veredicto».',
        pro: { ok: 'Dato, límite y siguiente paso: un resumen honesto.', risk: 'Presentar una pista como conclusión es como más se equivoca un analista.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Pista con prudencia. ¡Bacán!' : 'Aún no es veredicto.'],
      };
    },
    mirada: {
      ve: 'Los datos cualitativos señalan dónde mirar, pero rara vez permiten generalizar solos. La disciplina está en decir «encontré una pista y así la voy a probar», no «ya sé por qué se van».',
      visual: { tipo: 'embudo', titulo: 'Motivos en 118 comentarios', niveles: [['Comentarios', 118], ['Trato del supervisor', 40], ['Horarios y turnos', 22], ['Sueldo', 15]] },
    },
  },
  {
    id: 'c7', t: '17:45', ch: 'correo', who: null, titulo: '«¿Quién autorizó eso?»', banner: 'assets/foto2/tension.webp', show: ['confianza', 'cumplimiento'],
    mail: { from: 'Mónica Larrea', to: 'Analista de People Analytics; Diego Paz', asunto: '¿Llamadas a exvendedores?' },
    body: () => `<p>Me dicen de Santa Anita que estás llamando a gente que ya se fue. ¿Quién autorizó eso? <mark class="clave">No quiero un buzón de quejas</mark>.</p><p>Mónica</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder con calma: Diego lo aprobó, cuál es el propósito, cómo se cuidan los datos y qué sí y qué no se hará con lo que digan.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 2 }, rel: { gerente: 1 }, flags: ['monica_explicada'], responde: 'Mónica: las llamadas las aprobó Diego. Son voluntarias, a una muestra que dejó teléfono de contacto, y sirven para entender motivos que el formato de salida no capta. No se usan para sancionar a nadie y en el informe no habrá nombres. El viernes te cuento lo que encontremos.',
          out: 'Mónica responde por WhatsApp media hora después. Más suave.', kusi: ['feliz', 'Explicar el método también construye confianza.'] } },
      { id: 'b', label: 'Dejar que Diego responda: es su jefa de igual a igual y tú recién llegas.',
        res: { q: 'aceptable', fx: { confianza: -1 }, responde: 'Mónica, le dejo la respuesta a Diego, que aprobó las llamadas.',
          out: 'Diego responde por ti. Mónica sigue sin saber quién eres ni cómo trabajas.', kusi: ['pensando', 'También era tu oportunidad.'] } },
    ],
    mirada: { ve: 'La desconfianza de Mónica es razonable: teme que el análisis se convierta en un juicio a sus tiendas. Explicar el método, los límites y el cuidado de los datos, antes de tener resultados, es lo que hará que los acepte cuando lleguen.' },
  },
];
