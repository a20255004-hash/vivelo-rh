// Analista de Clima y Cultura · Capítulo 1 · «Los resultados» · Semana 1, lunes.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales: art. 6 (principio de finalidad: los datos se recopilan para una
//   finalidad determinada, explícita y lícita, y no se usan para otra) y art. 7 (principio de proporcionalidad:
//   tratamiento adecuado, relevante y no excesivo).
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Umbral mínimo de respuestas para reportar un grupo: buena práctica de las encuestas de clima, no una norma.

export const CAP = {
  n: 1, titulo: 'Los resultados', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'AseguraPlus · Oficina central, San Isidro',
  inicio: '08:15', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lima, lunes, cielo panza de burro. En el piso 9 de AseguraPlus, frente al Centro Financiero de San Isidro, te espera una laptop nueva y un archivo que se llama «Clima_RESULTADOS_NO_COMPARTIR».', boton: 'Abrir el archivo',
  kusi: 'Los números no hablan solos. Hoy aprendes a escucharlos sin hacerles decir lo que no dicen.',
  lead: 'Leíste los resultados de 900 personas, separaste lo que el dato dice de lo que no dice, protegiste a los grupos pequeños y respondiste a un gerente que ya quería saber quién había hablado.',
  reflexion: '¿Qué harías si un número te dijera algo que alguien poderoso no quiere oír?',
  siguiente: { n: 2, titulo: 'Los comentarios', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'informe', p: 'Informe de resultados de clima', j: 'Sofía · Cultura', d: 0, e: 'Datos recién llegados' },
  { id: 'siniestros', p: 'Área de Siniestros', j: 'Gonzalo Ferreyra', d: 0, e: '42 % de favorabilidad' },
  { id: 'comentarios', p: 'Comentarios abiertos', j: 'Cultura', d: 0, e: 'Sin leer' },
  { id: 'reunion', p: 'Reunión con el gerente de Siniestros', j: 'Sofía · Gonzalo', d: 0, e: 'Por agendar' },
];

export const FUTURO = {
  cortes_bien: ['Empezaste por los cortes que de verdad explican el 42 %.', 'Tu informe tendrá un hilo claro para el miércoles.'],
  umbral_cuidado: ['Ningún grupo de menos de cinco personas aparece en tu informe.', 'Nadie podrá adivinar quién respondió qué.'],
  umbral_roto: ['Dejaste pasar un grupo de tres personas en el informe.', 'En Reembolsos ya se preguntan quién fue.'],
  gonzalo_agregado: ['A Gonzalo le ofreciste resultados por ítem, no la base por persona.', 'Llegará a la reunión molesto, pero sin nombres.'],
  gonzalo_base: ['Le pasaste a Gonzalo la base con el área y el puesto de cada respuesta.', 'Él sabrá leer más de lo que debería.'],
  lucia_confia: ['A Lucía le explicaste con claridad qué es confidencial y qué no.', 'Ella te escribirá de nuevo.'],
  lucia_dudosa: ['Le prometiste a Lucía un anonimato «total» que no puedes garantizar.', 'Si algo se filtra, la perderás.'],
  sofia_informada: ['Sofía sabe qué encontraste y qué riesgo ves.', 'Confiará en tu criterio para los comentarios.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'equipo', t: '08:20', de: 'Sofía', txt: 'Bienvenida 🌱 Te dejé el archivo en la carpeta de Cultura. Ni una captura fuera del equipo, por favor.' },
  { chat: 'equipo', t: '08:24', de: 'Renzo', txt: '¡Hola! Yo armé un primer borrador del informe el viernes. Está en la misma carpeta, revísalo sin piedad 🙈' },
  { chat: 'gonzalo', t: '12:35', de: 'Gonzalo', txt: 'Buenas. Me dicen que tú tienes los resultados. ¿Tienes un minuto? Te llamo.' },
  { chat: 'lucia', t: '14:52', de: 'Lucía', txt: 'Hola, disculpa que te escriba directo. Soy de Siniestros. ¿Puedo preguntarte algo de la encuesta?' },
  { chat: 'lucia', t: '16:40', de: 'Lucía', txt: 'Gracias por la claridad. Es la primera vez que alguien de RR.HH. me lo explica así.', si: 'lucia_confia' },
  { chat: 'renzo', t: '17:10', de: 'Renzo', txt: 'Uy, lo de Reembolsos con 3 personas no lo vi. Gracias por corregirlo antes de que salga 😅', si: 'umbral_cuidado' },
  { chat: 'gonzalo', t: '18:05', de: 'Gonzalo', txt: 'Recibido el archivo. Ya veo quiénes son los de Reembolsos.', si: 'gonzalo_base' },
];

export const CORREOS = [
  { t: '08:10', de: 'Sofía Ledesma', para: 'Analista de Clima y Cultura', asunto: 'La encuesta que nadie quería leer', html: '<p>Hola y bienvenida. Este año respondió el 78 % de la empresa. La favorabilidad general es 71 %, casi igual que el año pasado. Pero Siniestros cayó a 42 %, y es el área que atiende a los clientes cuando chocan, se enferman o pierden algo.</p><p>El viernes tenemos que presentarle los resultados a Gonzalo, el gerente. Antes de eso necesito que entiendas los datos mejor que nadie. Y que no salga un solo número de esta carpeta.</p><p>Sofía</p>' },
  { t: '09:05', de: 'Pulso Consultores · Soporte', para: 'Cultura AseguraPlus', asunto: 'Entrega final · base de resultados', html: '<p>Adjuntamos la base final y el tablero. Recordatorio: por diseño, los grupos con menos de 5 respuestas no se muestran en el tablero. La base cruda contiene área, puesto, sede y antigüedad de cada respuesta; manéjenla con acceso restringido.</p>' },
];

export const QUIZ = [
  { q: 'Un área sale con 42 % de favorabilidad. ¿Qué es lo primero que miras?', ops: ['Quién es el gerente', 'Cuántas personas respondieron y en qué ítems cae', 'El comentario más duro', 'El promedio de la empresa nada más'], ok: 1, por: 'Sin saber cuántos respondieron y dónde está la caída, cualquier conclusión es un salto al vacío.' },
  { q: 'Un subgrupo de 3 personas sale con 0 % en «Me siento respetado». ¿Lo reportas?', ops: ['Sí, es el dato más fuerte', 'No por separado: se suma a un grupo mayor para que nadie sea identificable', 'Sí, pero en color rojo', 'Solo al gerente'], ok: 1, por: 'Con grupos muy pequeños, reportar el resultado es casi decir quién respondió.' },
  { q: 'La base de la encuesta se recopiló para medir el clima. Usarla para identificar quién se quejó…', ops: ['Está bien si lo pide un gerente', 'Va contra el principio de finalidad de la Ley 29733', 'Está permitido si es por poco tiempo', 'Solo es un problema ético'], ok: 1, por: 'Los datos se usan para la finalidad con la que se recopilaron (Ley 29733, art. 6).' },
  { q: '«El 42 % demuestra que el gerente es el problema.» Esta frase…', ops: ['Es correcta', 'Confunde un resultado con una causa', 'Es demasiado suave', 'Debe ir en el titular'], ok: 1, por: 'La encuesta dice qué perciben las personas, no por qué. El porqué se investiga después.' },
  { q: 'Una analista te pregunta si la encuesta es anónima. Lo mejor es…', ops: ['Decirle «100 % anónima, tranquila»', 'Explicarle qué se ve, qué no se ve y quién tiene acceso', 'Decirle que no puedes hablar de eso', 'Pedirle que responda de nuevo'], ok: 1, por: 'Prometer más de lo que puedes cumplir destruye la confianza el día que algo falla.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:30', ch: 'presencial', who: 'sofia', titulo: 'El archivo que nadie quería abrir', banner: 'assets/foto/reunion-jefa.webp', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Sofía tiene una taza de manzanilla y el tablero de la encuesta abierto en dos pantallas. Detrás de ella, por la ventana, el tráfico de la avenida Javier Prado ya está detenido.</p><p>«Bienvenida${n ? ', ' + n : ''}. Tengo una reunión de comité a las nueve. <mark class="clave">Pregúntame lo que necesites para leer bien esto</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Piensa qué te ayuda a no equivocarte con los datos.',
    opts: [
      { id: 'tasa', label: '¿Cuántos respondieron en Siniestros?', info: '«81 %: 97 de 120 personas. No es que respondieron solo los molestos: respondió casi toda el área.»' },
      { id: 'antes', label: '¿Qué pasó con la encuesta del año pasado?', info: '«Siniestros sacó 58 %. Se hizo un desayuno, se tomó una foto para el Facebook interno y no pasó nada más. Este año la gente escribió: “¿para qué respondemos?”.»' },
      { id: 'umbral', label: '¿Hay reglas de anonimato en el reporte?', info: '«Ningún grupo de menos de cinco respuestas se reporta solo. El proveedor lo aplica en el tablero, pero la base cruda no lo tiene. Ojo con la base.»' },
      { id: 'quien', label: '¿Quién va a ver estos resultados?', info: '«Gerencia General ve todo agregado. Cada gerente ve su área. Y los equipos, si lo hacemos bien, reciben una devolución. Esa parte casi nunca se hace.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('tasa') ? 2 : 0, tiempo: -1 }, rel: { sofia: picks.includes('antes') ? 1 : 0 },
      out: 'Sofía se va a su comité. Te quedas con el tablero, la base cruda y el borrador del informe que dejó Renzo, el practicante.',
      kusi: ['curioso', 'Saber cuántos respondieron cambia cómo lees todo lo demás.'],
    }),
    mirada: {
      ve: 'Antes de interpretar un porcentaje, quien analiza clima pregunta cuántas personas hay detrás, qué pasó la vez anterior y quién verá el resultado. Esas tres respuestas definen cómo se cuida el dato.',
      visual: { tipo: 'embudo', titulo: 'Siniestros en la encuesta', niveles: [['Personas en el área', 120], ['Respondieron', 97], ['Respuestas favorables promedio', 41]] },
    },
  },
  {
    id: 'c2', t: '09:40', ch: 'documento', who: null, titulo: '¿Por dónde empiezas?', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo'],
    body: () => `<p>La base tiene 702 filas y 46 preguntas. Podrías cruzarla de cien maneras, pero el viernes Gonzalo te va a preguntar una sola cosa: <mark class="clave">¿por qué mi área salió así?</mark></p><p>Tienes tiempo para tres cortes antes del almuerzo.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres cortes que más te ayudan a entender el 42 %.', boton: 'Analizar estos cortes', resumen: 'Analizaste',
    cols: ['Corte', 'Qué te podría decir'],
    rows: [
      { id: 'items', cells: ['Siniestros por ítem, del más bajo al más alto', 'Dónde está la caída: ¿jefe, carga, pago, reconocimiento?'] },
      { id: 'anio', cells: ['Siniestros 2025 contra 2026, ítem por ítem', 'Qué empeoró este año y qué ya venía mal'] },
      { id: 'empresa', cells: ['Siniestros contra el promedio de la empresa', 'Si el problema es del área o de toda AseguraPlus'] },
      { id: 'reemb', cells: ['Subárea Reembolsos por género (3 respuestas)', 'Un dato muy llamativo… de muy pocas personas'] },
      { id: 'sede', cells: ['Sede San Isidro contra sede Surquillo', 'Las dos sedes del área tienen jefaturas distintas'] },
      { id: 'hora', cells: ['Hora a la que respondió cada persona', 'Curiosidad estadística'] },
    ],
    score: { items: 3, anio: 3, empresa: 2, sede: 2, reemb: -3, hora: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: 1, etica: picks.includes('reemb') ? -3 : 1 },
        flags: q === 'buena' ? ['cortes_bien'] : [], cartera: { informe: q === 'buena' ? 'Tres cortes con hilo claro' : 'Cortes sueltos' },
        out: q === 'buena' ? 'La caída no está en todo: está en «Mi jefe directo me trata con respeto» (31 %), «Puedo decir lo que pienso sin temor» (28 %) y «Mi carga de trabajo es razonable» (35 %). El sueldo, en cambio, está como el resto de la empresa.' : picks.includes('reemb') ? 'El corte de Reembolsos dice 0 % en respeto. Es impactante. Y con tres personas, es casi un nombre propio.' : 'Tienes datos, pero no un hilo que explique la caída.',
        pro: { ok: 'Mirar por ítem, contra el año anterior y contra la empresa, separa lo que es del área de lo que es de todos.', risk: 'Un corte de tres personas no es un hallazgo: es un riesgo de identificarlas.', info: 'Cuando un ítem cae mucho más que el resto, ahí suele estar la historia.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ahí está! Respeto y miedo a hablar, no el sueldo.' : 'Busca dónde está la caída, no el dato más llamativo.'],
      };
    },
    mirada: {
      ve: 'Un 42 % no es un diagnóstico: es una alarma. El trabajo de análisis es encontrar en qué ítems está la caída y si es nueva o vieja. En Siniestros, el sueldo no es el problema; el trato y el miedo a hablar, sí.',
      visual: { tipo: 'rango', titulo: 'Favorabilidad por ítem en Siniestros', min: 0, max: 100, banda: [65, 75], marcas: [['Puedo hablar sin temor', 28], ['Respeto del jefe', 31], ['Carga razonable', 35], ['Sueldo justo', 63], ['Promedio empresa', 71]] },
    },
  },
  {
    id: 'c3', t: '11:20', ch: 'documento', who: null, titulo: 'El borrador de Renzo', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Renzo armó el borrador el viernes, con ganas y sin dormir: tiene gráficos de colores y frases contundentes. Es practicante de Psicología, llegó de Huancayo hace un año y quiere que su primer informe impresione.</p><p>Antes de que llegue a Sofía, <mark class="clave">marca lo que no puede salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que son malas prácticas de análisis.',
    doc: { t: 'Informe de clima 2026 · Siniestros (borrador)', sub: 'Elaborado por Renzo Quispe · versión 1' },
    lines: [
      { id: 'tasa', t: 'Tasa de respuesta del área: 81 % (97 de 120).' },
      { id: 'causa', t: 'El 42 % demuestra que la gestión del gerente es la causa del mal clima.', bad: BP, why: 'La encuesta mide percepciones, no causas. Afirmarlo así cierra la conversación con Gonzalo antes de empezar.' },
      { id: 'reemb', t: 'Subárea Reembolsos (3 respuestas): 0 % de favorabilidad en respeto. Ver detalle por género.', bad: BP, why: 'Un grupo de 3 personas es identificable. Se suma a un grupo mayor o no se reporta.' },
      { id: 'anexo', t: 'Anexo: base completa con área, puesto, sede y antigüedad de cada respuesta, para que el gerente haga seguimiento.', bad: LEY, why: 'Los datos se recopilaron para medir el clima, no para seguir a personas. Ley 29733, arts. 6 y 7: finalidad y proporcionalidad.' },
      { id: 'compara', t: 'Comparado con 2025 (58 %), el área baja 16 puntos.' },
      { id: 'ranking', t: 'Ranking de las 12 áreas, de la peor a la mejor, para enviarlo a toda la empresa.', duda: 'Un ranking público suele generar vergüenza y defensa, no cambio. Puede servir solo para Gerencia.' },
      { id: 'items', t: 'Los ítems más bajos son respeto del jefe directo, hablar sin temor y carga de trabajo.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? `Corriges ${hitsBp} problemas de redacción y análisis, pero el anexo con la base completa sigue ahí. Si llega a Gonzalo, puede reconstruir quién dijo qué.` : 'Le devuelves el borrador a Renzo con comentarios claros. Él lee lo del anexo y se pone pálido: «Yo pensé que así ayudaba al gerente».',
      flags: missLey ? ['umbral_roto'] : ['umbral_cuidado'],
      cartera: { informe: missLey ? 'Borrador con anexo riesgoso' : 'Borrador corregido: sin grupos pequeños ni base cruda' },
      pro: { ok: 'Un informe de clima protege a quienes respondieron tanto como informa a quien decide.', risk: 'Una base con área, puesto y antigüedad permite identificar personas aunque no tenga nombres.', info: 'Pregúntale al proveedor qué umbral usa y aplícalo también a tus cruces.' },
      kusi: missLey ? ['preocupado', 'Sin nombres no siempre significa anónimo…'] : ['celebra', '¡Ojo de analista! Protegiste a 97 personas.'],
    }),
    rules: [[LEY, 'Ley 29733, art. 6: los datos se usan para la finalidad con la que se recopilaron.'], [LEY, 'Ley 29733, art. 7: el tratamiento debe ser adecuado, relevante y no excesivo.'], [BP, 'Ningún grupo con menos de cinco respuestas se reporta por separado.']],
    mirada: {
      ve: 'En una encuesta de clima, el anonimato no se rompe con nombres: se rompe con cruces. «Mujer, Reembolsos, más de cinco años» puede ser una sola persona. Por eso se trabaja con umbrales y la base cruda no sale del equipo.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al informe', pares: [['«Demuestra que el gerente es la causa»', '«Las personas perciben poco respeto y temor a hablar»'], ['Reembolsos con 3 respuestas', 'Reembolsos sumado a Atención de Siniestros'], ['Anexo con la base completa', 'Solo resultados agregados por ítem']] },
      normas: [{ ley: 'Ley 29733, Ley de Protección de Datos Personales', dice: 'Los datos personales se recopilan para una finalidad determinada, explícita y lícita, y su tratamiento debe ser adecuado, relevante y no excesivo.', practica: 'La encuesta se hizo para medir el clima. Entregar la base para «hacer seguimiento» a las personas es otra finalidad.' }],
    },
  },
  {
    id: 'c4', t: '12:40', ch: 'llamada', who: 'gerente', titulo: 'Gonzalo quiere la base', banner: 'assets/foto/llamada.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Gonzalo Ferreyra lleva quince años en AseguraPlus. Empezó como ajustador de choques en la Panamericana y llegó a gerente. Te llama desde su auto.</p><p>«Mira, ya me enteré del 42 %. No te voy a mentir: me duele. Solo quiero entenderlo. <mark class="clave">Mándame la base completa, con puestos y sedes</mark>, y yo veo dónde está el problema. Es mi área, ¿no?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no puedes compartir la base, pero que el viernes le muestras los resultados por ítem, comparados con el año pasado, y que puede preguntar todo lo que quiera.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: -1 }, rel: { gerente: -1 }, flags: ['gonzalo_agregado'],
          out: 'Silencio largo. «Ya. Veo que acá se desconfía de los gerentes.» Cuelga. Pero no insiste.',
          pro: { ok: 'Proteges a quienes respondieron sin negarle información útil al gerente.', risk: 'Gonzalo puede sentirse tratado como sospechoso.', info: 'Ofrecer algo concreto y una fecha baja la sensación de que «le ocultan» algo.' },
          kusi: ['animo', 'Le diste un «no» con una puerta abierta.'] } },
      { id: 'b', label: 'Mandarle la base sin nombres: es el gerente, tiene derecho a conocer su área y así llega preparado al viernes.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, rel: { gerente: 1 }, flags: ['gonzalo_base'],
          out: 'Gonzalo te agradece. Esa tarde abre el archivo y filtra por Reembolsos: tres filas, tres personas que conoce bien.',
          pro: { ok: 'Gonzalo queda contento hoy.', risk: 'Sin nombres no es anónimo: con puesto, sede y antigüedad, un gerente reconoce a su gente. Y nadie volverá a responder con sinceridad.' },
          kusi: ['indignado', '¡Tres filas son tres personas!'] } },
      { id: 'c', label: 'Decirle que el tema lo ve Sofía y que la llame a ella.',
        res: { q: 'aceptable', fx: { confianza: -2, etica: 1 }, rel: { gerente: -1 },
          out: '«Ah, o sea que tú no decides nada.» Gonzalo llama a Sofía, que le dice lo mismo que tú pudiste decirle.',
          pro: { ok: 'No compartes la base.', risk: 'Derivar sin explicar te hace ver como alguien que no maneja su propio trabajo.' },
          kusi: ['pensando', 'Tú también podías explicarle el porqué.'] } },
    ],
    rules: [[LEY, 'Ley 29733, art. 6: usar la base para identificar personas es una finalidad distinta a la de la encuesta.'], [BP, 'Al gerente se le entregan resultados agregados de su área, nunca la base por respuesta.']],
    mirada: {
      ve: 'El gerente tiene derecho a conocer el clima de su área, no a saber quién respondió qué. La diferencia parece fina, pero es la que hace que el próximo año la gente vuelva a responder con la verdad.',
      visual: { tipo: 'balanza', a: { t: 'Darle la base', items: ['Gonzalo contento hoy', 'Llega «preparado»'] }, b: { t: 'Darle resultados agregados', items: ['Nadie identificable', 'Confianza en la próxima encuesta', 'Mismos datos útiles para decidir'] } },
    },
  },
  {
    id: 'c5', t: '15:00', ch: 'whatsapp', who: 'colaboradora', titulo: '¿Es anónima de verdad?', banner: 'assets/foto2/tablet-equipo.webp', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>Lucía Ramos es analista de Siniestros desde hace seis años. Te escribe desde el baño del piso 6, dice, «porque aquí todos ven las pantallas».</p><p>«En mi área dicen que el gerente ya sabe quién respondió mal. <mark class="clave">¿Es verdad que la encuesta es anónima?</mark> Yo escribí cosas y ahora tengo miedo.»</p>`,
    type: 'compose', enviaA: 'lucia', para: 'Para: Lucía Ramos · Siniestros', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'tono', t: 'Cómo empiezas', ops: [
        { id: 't1', t: 'Gracias por preguntarme, Lucía. Es una duda muy razonable.', ok: true, por: 'Validas su miedo sin exagerarlo.' },
        { id: 't2', t: 'Tranquila, no pasa nada, es un rumor.', ok: false, por: 'Minimiza lo que siente y no le explica nada.' },
      ] },
      { id: 'que', t: 'Qué le explicas', ops: [
        { id: 'q1', t: 'Los gerentes solo ven resultados agregados por área, y ningún grupo de menos de cinco personas se muestra por separado.', ok: true, por: 'Le dices exactamente qué se ve.' },
        { id: 'q2', t: 'La encuesta es 100 % anónima, nadie puede saber nada jamás.', ok: false, por: 'Prometes algo absoluto que no controlas del todo.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Si alguien te pregunta qué respondiste, no tienes que decirlo. Y si pasa, puedes contármelo.', ok: true, por: 'Le das una herramienta y un canal.' },
        { id: 'c2', t: 'Si quieres, el viernes lo vemos con tu gerente.', ok: false, por: 'Justo lo que ella teme.' },
      ] },
    ],
    res: sel => {
      const absoluto = sel.que === 'q2', buenas = ['t1', 'q1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = absoluto ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0, etica: absoluto ? -2 : 2 }, rel: { colaboradora: q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'lucia_confia' : absoluto ? 'lucia_dudosa' : 'lucia_confia'],
        out: q === 'buena' ? 'Lucía responde con un pulgar y, minutos después: «Hay cosas que no puse en la encuesta. Quizás algún día te las cuento».' : absoluto ? 'Lucía se calma. Por ahora. Tu promesa queda escrita en su celular.' : 'Lucía responde «ok». No sabes si la convenciste.',
        pro: { ok: 'Explicar con precisión qué es confidencial genera más confianza que prometer un anonimato perfecto.', risk: 'Una promesa absoluta que se rompe destruye la credibilidad de todo el proceso.', info: 'Los rumores de «ya saben quién fue» aparecen en casi todas las encuestas con malos resultados.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Claridad que da tranquilidad. ¡Qué divino!' : 'Ojo con las promesas absolutas.'],
      };
    },
    rules: [[BP, 'Explica qué ve cada persona y quién tiene acceso a qué. No prometas lo que no controlas.']],
    mirada: {
      ve: 'La confidencialidad no es una frase en la portada de la encuesta: es un conjunto de reglas (umbrales, accesos, resultados agregados) que hay que poder explicar en dos líneas a alguien con miedo.',
      visual: { tipo: 'mensaje', titulo: 'Lo que Lucía necesita saber', txt: 'Qué ve el gerente · qué no ve · qué hacer si alguien pregunta · a quién acudir.' },
    },
  },
  {
    id: 'c6', t: '18:10', ch: 'correo', who: null, titulo: 'Cuéntame el día', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Sofía Ledesma', to: 'Analista de Clima y Cultura', asunto: '¿Qué encontraste?' },
    body: () => `<p>Salgo del comité recién. Cuéntame en corto <mark class="clave">qué dicen los datos y qué te preocupa</mark>. Mañana empezamos con los comentarios.</p><p>Sofía</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Hallazgo en tres ítems, lo que no dice el dato y un riesgo.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3 }, rel: { sofia: 1 }, flags: ['sofia_informada'],
          responde: 'Sofía: Siniestros respondió al 81 %, así que el 42 % es representativo. La caída está en respeto del jefe (31 %), hablar sin temor (28 %) y carga (35 %); el sueldo está como el resto. La encuesta no dice por qué: eso hay que escucharlo. Riesgo: Gonzalo pidió la base completa y hay rumores en el área de que ya sabe quién respondió. Propongo que la base cruda no salga de nosotras.',
          out: 'Sofía responde a los diez minutos: «Esto es exactamente lo que necesitaba. Mañana te paso los comentarios. Prepárate: algunos tienen nombres».', kusi: ['celebra', 'Dato, límite y riesgo. ¡Nivel analista!'] } },
      { id: 'b', label: 'Que Siniestros salió mal por culpa de Gonzalo y que hay que actuar ya.',
        res: { q: 'riesgosa', fx: { confianza: -2, calidad: -3 }, rel: { sofia: -1 },
          responde: 'Sofía: Siniestros salió 42 % y está clarísimo que el problema es Gonzalo. Hay que hacer algo ya.',
          out: 'Sofía responde: «Puede ser. Pero si llegamos el viernes con esa frase, Gonzalo deja de escuchar en el primer minuto. Mañana lo conversamos».', kusi: ['preocupado', 'El dato no dice quién tiene la culpa…'] } },
    ],
    mirada: { ve: 'Un buen resumen de clima tiene tres partes: qué dice el dato, qué no dice y qué riesgo ves. La tercera es la que más valoran las jefaturas, porque les permite actuar antes de que el problema llegue solo.' },
  },
];
