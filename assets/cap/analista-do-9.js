// Analista de Desarrollo Organizacional · Capítulo 9 · «El organigrama» · Semana 2, jueves.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 30822 (Ley COOPAC): supervisión de la SBS. https://www.sbs.gob.pe/coopac_nuevo
// - Ley 30709 y D.S. 002-2018-TR: cuadro de categorías y funciones. https://www.rsm.global/peru/sites/default/files/media/ley_30709.pdf
// - D.S. 003-97-TR, art. 48: el cese colectivo por causas objetivas exige un procedimiento ante la Autoridad
//   Administrativa de Trabajo. https://www.tc.gob.pe/jurisprudencia/2007/08141-2006-AA.pdf
// - Ley 29733, art. 7 (proporcionalidad): no se exponen nombres en documentos que no los necesitan.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
// Empresas y personas son ficticias.

export const CAP = {
  n: 9, titulo: 'El organigrama', dia: 'Semana 2, jueves', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Cooperativa del Sur · Sala del consejo, sede de Cayma',
  inicio: '07:00', fin: '19:30', cierreHora: '19:00',
  apertura: 'Jueves. A las tres de la tarde, el consejo de administración ve la nueva estructura de la Cooperativa del Sur: siete consejeros, cuatro de Characato y tres de Misti. Ernesto presenta; tú armaste todo lo que está detrás.', boton: 'Abrir la propuesta',
  kusi: 'Hoy se ve tu trabajo de dos semanas en una lámina. Que la lámina diga la verdad.',
  lead: 'Armaste el organigrama, limpiaste las láminas de Linares, ordenaste la presentación, respondiste con verdad la pregunta más dura y llevaste al consejo la voz del taller.',
  reflexion: '¿Qué pregunta te daría más miedo responder frente a un consejo? ¿Cómo te prepararías?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'consejo', p: 'Organigrama para el consejo', j: 'Gerencia general', d: 0, e: 'Hoy a las 3 p. m.' },
  { id: 'rocio', p: 'Respuesta de Rocío', j: 'Ernesto', d: 0, e: 'Hoy a las 11' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Ernesto', d: 0, e: 'Créditos, caja y duplicados' },
  { id: 'taller', p: 'Acuerdos del taller', j: 'Ernesto', d: 0, e: 'Van como anexo' },
  { id: 'encuesta', p: 'Encuesta de clima', j: 'Gestión Humana', d: 0, e: 'Cierra hoy' },
];

export const FUTURO = {
  organigrama_bueno: ['El organigrama propone una sola cooperativa, con red de agencias y créditos por segmento.', 'El consejo lo discutirá en serio.'],
  laminas_limpias: ['Las láminas no llevan nombres de personas ni promesas imposibles.', 'Nadie saldrá del consejo con una lista.'],
  laminas_nombres: ['Las láminas llevaron nombres de personas en la columna de «excedentes».', 'La foto de esa lámina circulará esta noche.'],
  cifra_honesta: ['Dijiste al consejo cuántos puestos no tienen equivalente y qué se hará con cada persona.', 'El consejo confía en la propuesta.'],
  cifra_cero: ['Dijiste al consejo que nadie sale.', 'Un consejero pidió que conste en actas.'],
  voz_taller: ['Llevaste al consejo «cercanos y rápidos» y la pregunta de Chivay.', 'El consejo pidió revisar la red de agencias.'],
  consejo_aprueba: ['El consejo aprobó la estructura con un encargo: revisar las agencias rurales.', 'El lunes empieza el trabajo en Chivay.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Coordinadora de créditos rurales · propuesta', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  hilda: { n: 'Hilda Mamani', sub: 'Cajera · Agencia Characato', c: '#8A4FBF' },
};

export const WSP = [
  { chat: 'gh', t: '07:05', de: 'Ernesto', txt: 'Día D. Yo presento, tú me cubres las preguntas difíciles. Café doble ☕☕' },
  { chat: 'rocio', t: '08:10', de: 'Rocío', txt: 'Hablé con mi equipo a las 8, como acordamos. Lloraron un poco. Yo también. Pero lo dije yo.', si: 'rocio_escuchada' },
  { chat: 'rocio', t: '11:02', de: 'Rocío', txt: 'Acepto la coordinación de créditos rurales y agrícolas, con lo que está en la carta. Y quiero liderar el paso de la cartera al sistema.', si: 'acuerdo_escrito' },
  { chat: 'rocio', t: '11:02', de: 'Rocío', txt: 'Necesito unos días más para decidir. No tengo nada por escrito todavía.', no: 'acuerdo_escrito' },
  { chat: 'kevin', t: '13:30', de: 'Kevin', txt: 'Suerte en el consejo. Ojalá se acuerden de que acá abajo también hay gente.' },
  { chat: 'hilda', t: '19:10', de: 'Hilda', txt: '¿Y Chivay, doctorcita? Mi sobrina trabaja ahí.', si: 'voz_taller' },
];

export const CORREOS = [
  { t: '07:15', de: 'Fernando Linares · Gerencia General', para: 'Ernesto Valdivia; Analista de DO', asunto: 'Láminas del consejo', html: '<p>Les paso mis láminas para que las integren con las suyas. La 6 es la más importante: el consejo quiere ver ahorro.</p><p>F. Linares</p>' },
  { t: '18:40', de: 'Secretaría del Consejo de Administración', para: 'Gerencia General; Gestión Humana', asunto: 'Acuerdo del consejo', html: '<p>El consejo aprobó la estructura propuesta, con un encargo: presentar en dos semanas un análisis de la red de agencias rurales, empezando por Chivay, antes de cualquier cambio en ellas.</p>', si: 'cifra_honesta' },
  { t: '18:40', de: 'Secretaría del Consejo de Administración', para: 'Gerencia General; Gestión Humana', asunto: 'Acuerdo del consejo', html: '<p>El consejo aprobó la estructura en lo general y pidió una nueva presentación con el detalle de las personas sin puesto equivalente. También encargó analizar la red de agencias rurales, empezando por Chivay.</p>', no: 'cifra_honesta' },
];

export const QUIZ = [
  { q: '¿Qué NO debe aparecer en las láminas de una propuesta de estructura para el consejo?', ops: ['El organigrama propuesto', 'El costo de cada opción', 'Una lista con nombres de las personas «excedentes»', 'Los riesgos'], ok: 2, por: 'Los nombres no son necesarios para aprobar una estructura y su difusión expone a las personas (Ley 29733, proporcionalidad).' },
  { q: 'Un consejero pregunta «¿cuántos salen?». La mejor respuesta es…', ops: ['«Nadie»', 'La cifra real de puestos sin equivalente y qué se hará con cada persona', '«Eso lo verá la gerencia»', 'Cambiar de tema'], ok: 1, por: 'Al consejo se le dice la verdad con su contexto: cuántos, qué opciones y bajo qué reglas.' },
  { q: 'En una presentación al consejo, ¿qué va primero?', ops: ['Los detalles de cada perfil', 'El problema y la decisión que se pide', 'Los agradecimientos', 'Las fotos del taller'], ok: 1, por: 'El consejo necesita saber primero qué se le pide decidir.' },
  { q: '¿Por qué llevar al consejo las frases del taller?', ops: ['Para que se vea bonito', 'Porque muestran lo que las personas necesitan para que la estructura funcione', 'Para identificar quién habló', 'No sirven'], ok: 1, por: 'Una estructura funciona si las personas la viven bien; el taller es evidencia de eso.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'o1', t: '07:30', ch: 'documento', who: null, titulo: 'Una sola cooperativa en una lámina', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala 2, con la pizarra llena', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>En la pizarra todavía están los seis pasos del método y la frase «cercanos y rápidos». ${F.has('mapa_bueno') ? 'Tu mapa del primer día, con sus 18 duplicados en amarillo, está pegado al costado.' : 'El mapa del primer día tiene huecos que hoy se notan.'}</p><p>Armas el organigrama que verá el consejo. <mark class="clave">Elige qué entra</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del organigrama.', boton: 'Guardar el organigrama',
    bloques: [
      { id: 'neg', t: 'Negocio', n: 2, ops: [
        { id: 'n1', t: 'Una jefatura de créditos con dos coordinaciones: urbana y rural-agrícola.', ok: true, por: 'Responde a los dos negocios que encontraste.' },
        { id: 'n2', t: 'Una red de 11 agencias por zonas (urbana, campiña, Caylloma), sin cerrar ninguna hasta analizarlas.', ok: true, por: 'No se decide lo rural desde la sede.' },
        { id: 'n3', t: 'Las agencias de Characato reportan a las de Misti.', ok: false, por: 'Convierte la fusión en una absorción en el papel.' },
      ] },
      { id: 'sop', t: 'Soporte', n: 1, ops: [
        { id: 's1', t: 'Áreas de soporte unificadas (contabilidad, riesgos, Gestión Humana, sistemas), cada una con un solo responsable.', ok: true },
        { id: 's2', t: 'Mantener las dos contabilidades separadas un año más.', ok: false, por: 'La SBS revisa una sola cooperativa.' },
      ] },
      { id: 'trans', t: 'Transición', n: 2, ops: [
        { id: 't1', t: 'Un comité de integración por seis meses, con personas de las dos cooperativas.', ok: true, por: 'La fusión no termina con el organigrama.' },
        { id: 't2', t: 'Cada puesto ubicado en un solo cuadro de categorías y funciones.', ok: true, por: 'Lo exige la Ley 30709.' },
        { id: 't3', t: 'Una columna de «excedentes» con los nombres de las personas.', ok: false, por: 'Una estructura se aprueba sin nombres. Exponerlos no es necesario.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: q === 'buena' ? ['organigrama_bueno'] : [], cartera: { consejo: q === 'buena' ? 'Organigrama: créditos por segmento, red por zonas, soporte único' : 'Organigrama con riesgos' },
        out: q === 'buena' ? 'El organigrama cabe en una lámina: ningún color de Misti ni de Characato, solo el verde de la Cooperativa del Sur. Ernesto lo mira largo: «Esto ya es una sola».' : 'El organigrama está, pero alguna pieza repite las dos cooperativas o expone a las personas.',
        pro: { ok: 'Una estructura que responde al negocio, unifica el soporte y cuida la transición.', risk: 'Reportes de una cooperativa a la otra o listas de nombres arruinan la propuesta.', info: 'Prepara el costo de la estructura frente a la situación actual.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una sola cooperativa en una lámina!' : 'Revisa qué colores siguen separados.'],
      };
    },
    rules: [[LEY, 'Cada puesto se ubica en el cuadro de categorías y funciones (Ley 30709).'], [LEY, 'La cooperativa fusionada sigue supervisada por la SBS (Ley 30822).']],
    mirada: {
      ve: 'El organigrama es el entregable más visible de DO, pero es la punta del iceberg: debajo están el mapa, los duplicados, los perfiles, el diagnóstico y el taller. Si el trabajo de abajo está bien, el organigrama casi se dibuja solo.',
      visual: { tipo: 'flujo', titulo: 'Lo que hay debajo del organigrama', pasos: ['Mapa', 'Duplicados', 'Cultura', 'Perfiles', 'Taller', 'Organigrama'], aqui: 5 },
    },
  },
  {
    id: 'o2', t: '08:40', ch: 'documento', who: null, titulo: 'Las láminas de Linares', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'etica', 'confianza'],
    body: () => `<p>Linares mandó sus láminas para integrarlas. La 6 es «la más importante». <mark class="clave">Revísalas antes de que se impriman</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que no son buena práctica.',
    doc: { t: 'Láminas de Gerencia General', sub: 'Sesión del consejo de administración · borrador' },
    lines: [
      { id: 'm1', t: 'Lámina 3: la cooperativa fusionada tiene 480 colaboradores, 11 agencias y más de 60 mil socios.' },
      { id: 'm2', t: 'Lámina 6: «Excedentes»: tabla con los nombres de las 50 personas del escenario de Finanzas.', bad: LEY, why: 'Poner nombres en una lámina que verán siete consejeros y que se imprimirá no es necesario para aprobar una estructura (Ley 29733, art. 7). Y el escenario de 50 ni siquiera es la propuesta.' },
      { id: 'm3', t: 'Lámina 6: ahorro estimado de la nueva estructura frente a la actual, en soles anuales.' },
      { id: 'm4', t: 'Lámina 7: las salidas se ejecutarán el lunes por cese colectivo.', bad: LEY, why: 'Un cese colectivo exige un procedimiento ante la Autoridad Administrativa de Trabajo (D.S. 003-97-TR, art. 48); no se «ejecuta el lunes». Además, la propuesta no lo contempla.' },
      { id: 'm5', t: 'Lámina 8: las agencias de Chiguata y Chivay se cierran en enero.', duda: 'Puede ser una opción, pero no hay análisis de socios, distancia ni cartera. No debería presentarse como decidido.' },
      { id: 'm6', t: 'Lámina 9: transición del sistema en créditos de Characato en tres semanas, con acompañamiento.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Ernesto saca la lámina 7, pero la 6 se imprime con los nombres. A las cinco, alguien la fotografía sobre la mesa del consejo.' : `Marcas ${hitsLey} problemas legales. Linares protesta: «El consejo quiere números». «Los tendrá: el ahorro y cuántos puestos. Los nombres no se votan.» La lámina 6 queda solo con cifras; la 8 se convierte en una pregunta para el consejo.`,
      flags: [missLey ? 'laminas_nombres' : 'laminas_limpias'], rel: { ernesto: missLey ? 0 : 1 },
      cartera: { consejo: missLey ? 'Láminas con nombres de personas' : 'Láminas sin nombres ni anuncios imposibles' },
      pro: { ok: 'El consejo recibe números, opciones y riesgos, sin exponer a nadie.', risk: 'Una lámina con nombres se fotografía y se reenvía en minutos.', info: 'Lo que se proyecta en un consejo debe poder leerse en voz alta en cualquier agencia.' },
      kusi: missLey ? ['preocupado', 'Esa lámina va a viajar…'] : ['celebra', '¡Números sí, nombres no!'],
    }),
    rules: [[LEY, 'El tratamiento de datos personales debe ser proporcional a su finalidad (Ley 29733, art. 7).'], [LEY, 'El cese colectivo por causas objetivas requiere un procedimiento ante la Autoridad Administrativa de Trabajo (D.S. 003-97-TR, art. 48).']],
    mirada: {
      ve: 'Linares tiene razón en que el consejo debe ver el ahorro: es su responsabilidad con los socios. Pero una estructura se aprueba con cifras y criterios, no con nombres. Las personas se conversan una por una, como con Rocío.',
      visual: { tipo: 'cambio', titulo: 'De las láminas de Linares a las finales', pares: [['Nombres de 50 «excedentes»', 'Puestos sin equivalente, en cifras'], ['Cese colectivo el lunes', 'Opciones según la ley'], ['Cierre de Chiguata y Chivay', 'Pregunta: ¿qué hacemos con lo rural?']] },
    },
  },
  {
    id: 'o3', t: '10:20', ch: 'documento', who: 'ernesto', titulo: 'El orden de la presentación', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala del consejo, ensayo', show: ['calidad', 'confianza'],
    body: () => `<p>Ernesto ensaya frente a las sillas vacías del consejo. Tiene 25 minutos. «Si empiezo por los perfiles, me duermen a la tercera lámina. <mark class="clave">Ordénamela</mark>.»</p>`,
    type: 'secuencia', prompt: 'Ordena la presentación al consejo. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'dec', t: 'Qué decisión se le pide hoy al consejo', por: 'Lo primero que necesitan saber.' },
      { id: 'pro', t: 'El problema: dos estructuras, 18 puestos repetidos y dos culturas', por: 'Por qué hace falta.' },
      { id: 'org', t: 'La estructura propuesta y por qué', por: 'La propuesta.' },
      { id: 'per', t: 'Qué pasa con las personas: cifras, opciones y reglas', por: 'La pregunta que todos tienen.' },
      { id: 'cos', t: 'Costo, ahorro y riesgos', por: 'Lo que el consejo debe cuidar.' },
      { id: 'voz', t: 'Lo que dijeron los trabajadores en el diagnóstico y el taller', por: 'Para que la estructura funcione de verdad.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 }, rel: { ernesto: q === 'buena' ? 1 : 0 },
        cartera: { consejo: q === 'riesgosa' ? 'Presentación sin orden claro' : 'Presentación de 25 minutos ensayada' },
        out: q === 'buena' ? 'Ernesto la ensaya dos veces y termina en 23 minutos. «Me sobran dos para las preguntas que me vas a contestar tú», bromea. No es broma.' : 'Ernesto mueve una lámina: «Si no digo al inicio qué les pido, van a discutir todo».',
        pro: { ok: 'Decisión primero, problema, propuesta, personas, costos y la voz de la gente.', risk: 'Empezar por detalles hace que el consejo se pierda antes de llegar a lo importante.', info: 'Ten a mano el mapa y el método: alguien preguntará cómo se decidió.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡25 minutos que se entienden!' : 'Casi: primero lo que se pide.'],
      };
    },
    rules: [[BP, 'Ante un órgano de gobierno, di primero qué decisión se pide.']],
    mirada: {
      ve: 'Un consejo de cooperativa está formado por socios elegidos, no necesariamente expertos en estructuras. Presentarles bien no es simplificar: es ordenar para que puedan decidir con responsabilidad.',
      visual: { tipo: 'flujo', titulo: 'La presentación', pasos: ['Decisión', 'Problema', 'Propuesta', 'Personas', 'Costos', 'Voz de los trabajadores'] },
    },
  },
  {
    id: 'o4', t: '15:40', ch: 'presencial', who: null, titulo: '«¿Cuántos salen?»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala del consejo', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Ernesto termina. Don Teodoro Málaga, consejero de Characato, 72 años, socio fundador, se quita los lentes. ${F.has('laminas_nombres') ? 'Tiene en la mano la lámina con los nombres.' : 'No tiene ninguna lámina en la mano.'}</p><p>«Muy bonito todo. Pero díganme con número, señorita, porque usted hizo los cálculos: <mark class="clave">¿cuántos salen?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder con la cifra real: de 18 puestos duplicados, 9 personas no tienen puesto equivalente en la estructura; se les ofrecerán reubicaciones en vacantes y un retiro voluntario abierto, y cualquier salida se hará según la ley.',
        res: { q: 'buena', fx: { etica: 5, confianza: 4, cumplimiento: 3 }, rel: { ernesto: 1 }, flags: ['cifra_honesta', 'consejo_aprueba'],
          out: 'Don Teodoro asiente despacio. «Nueve. No cincuenta.» Una consejera de Misti pregunta cuántas vacantes hay: once. Se hace un silencio distinto. El consejo pasa a votar.',
          pro: { ok: 'Dices la verdad con su contexto: cifra, opciones y reglas.', risk: 'La cifra saldrá del consejo y circulará.', info: 'Las nueve personas deben saberlo por Gestión Humana antes que por el pasillo.' },
          kusi: ['animo', 'Verdad con número. ¡Así se gana un consejo!'] } },
      { id: 'b', label: 'Decirle que nadie va a salir: hay vacantes suficientes y no hace falta alarmar al consejo.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -4 }, flags: ['cifra_cero'],
          out: '«Que conste en actas», dice don Teodoro. Si una sola de las nueve personas no acepta una reubicación, el acta dirá que mentiste.',
          pro: { ok: 'Calmas la sala.', risk: 'No es cierto, y ahora es un compromiso formal del consejo.' },
          kusi: ['preocupado', 'En actas, nada menos…'] } },
      { id: 'c', label: 'Decirle que eso lo definirá la gerencia caso por caso, después de aprobar la estructura.',
        res: { q: 'aceptable', fx: { confianza: -2, etica: 0 },
          out: 'Don Teodoro se pone los lentes de nuevo: «O sea que no saben, o no quieren decir». El consejo aprueba en lo general y pide otra sesión con el detalle.',
          pro: { ok: 'No adelantas decisiones individuales.', risk: 'Una cifra que tú tienes y no das parece ocultamiento.' },
          kusi: ['pensando', 'Tenías el número…'] } },
    ],
    rules: [[LEY, 'Cualquier salida se hace según la ley; el cese colectivo exige un procedimiento ante la Autoridad de Trabajo (D.S. 003-97-TR, art. 48).'], [BP, 'Ante el consejo: cifra real, opciones y reglas.']],
    mirada: {
      ve: 'Don Teodoro no pregunta por morbo: es socio fundador y conoce a muchas de esas familias. Ocultarle la cifra lo pone en contra; inventarle un cero lo traiciona. La verdad con contexto, nueve personas, once vacantes y reglas claras, es lo que le permite votar.',
      visual: { tipo: 'embudo', titulo: 'Del rumor a la cifra real', niveles: [['El audio del viernes', 50], ['Puestos duplicados', 18], ['Personas sin puesto equivalente', 9]] },
    },
  },
  {
    id: 'o5', t: '16:20', ch: 'presencial', who: 'ernesto', titulo: 'La voz del taller', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala del consejo', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Quedan diez minutos. Ernesto te cede la palabra para la última lámina: lo que dijeron los trabajadores. ${F.has('acuerdos_taller') ? 'Tienes el papelógrafo con treinta firmas enrollado bajo el brazo.' : 'Tienes tus notas del taller.'}</p><p>El tiempo alcanza para <mark class="clave">tres mensajes</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres mensajes que llevas al consejo.', boton: 'Presentar estos', resumen: 'Presentaste',
    cols: ['Mensaje', 'De dónde sale'],
    rows: [
      { id: 'cerca', cells: ['«Cercanos y rápidos»: lo que cada cooperativa aporta a la otra', 'El taller'] },
      { id: 'chivay', cells: ['El miedo de las agencias rurales a ser cerradas desde la sede', 'El mapa, las llamadas y el taller'] },
      { id: 'primero', cells: ['«Que nos digan las cosas primero a nosotros»', 'El taller y el rumor del viernes'] },
      { id: 'clima', cells: ['El resultado de la encuesta de clima, por zona', 'La encuesta anónima'] },
      { id: 'kevin', cells: ['El caso del analista que se quedaba hasta las nueve', 'El grupo focal'] },
      { id: 'queso', cells: ['Lo bien que salió el almuerzo del taller', 'Tus fotos'] },
    ],
    score: { cerca: 3, chivay: 3, primero: 3, clima: 2, queso: 0, kevin: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0, etica: picks.includes('kevin') ? -4 : 1 },
        flags: picks.includes('chivay') ? ['voz_taller'] : [], cartera: { taller: q === 'buena' ? 'Voz del taller presentada al consejo' : 'Voz del taller a medias' },
        out: picks.includes('chivay') ? 'Cuando hablas de las agencias rurales, don Teodoro levanta la mano: «Chivay no se toca sin estudiarla». El consejo lo convierte en un encargo: un análisis de la red rural en dos semanas, empezando por Chivay.' : picks.includes('kevin') ? 'Al contar «el caso del analista de las nueve», un consejero pregunta: «¿Quién es?». Te das cuenta tarde de que todos lo saben.' : 'El consejo escucha con atención, aunque no pregunta nada.',
        pro: { ok: 'Llevas al consejo lo que las personas necesitan para que la estructura funcione.', risk: 'Un caso individual reconocible expone a la persona, aunque no digas su nombre.', info: 'La encuesta de clima, por zona, será tu mejor dato para el seguimiento.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La voz de abajo llegó arriba!' : 'Elige lo que el consejo puede usar.'],
      };
    },
    rules: [[BP, 'Lleva al consejo la voz de los trabajadores, agrupada y sin casos reconocibles.']],
    mirada: {
      ve: 'Un consejo decide sobre estructuras, pero las estructuras las viven personas. La última lámina es la que recuerda eso. Y a veces, como con Chivay, la voz de abajo cambia lo que se decide arriba.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijeron los trabajadores', txt: 'Cercanos y rápidos. Que nos digan las cosas primero a nosotros. Y que lo rural no se decida desde la sede.' },
    },
  },
  {
    id: 'o6', t: '18:50', ch: 'whatsapp', who: 'ernesto', titulo: 'Después del consejo', banner: 'assets/esc/camino.webp', lugar: 'Puerta de la sede de Cayma', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Salen del consejo cuando ya es de noche y el Misti es solo una silueta. ${F.has('cifra_honesta') ? 'La estructura se aprobó.' : 'La estructura se aprobó en lo general, con una nueva sesión pendiente.'} Ernesto te escribe desde su auto:</p><p>«Mañana es viernes y la gente espera la respuesta semanal. ¿Qué hacemos primero con las nueve personas sin puesto equivalente? <mark class="clave">Dime tu prioridad</mark>.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Conversar mañana temprano, una por una, con las nueve personas, con sus opciones por escrito, antes de publicar la respuesta semanal a todos.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, rel: { ernesto: 1 },
          envia: [['ernesto', 'Ernesto: primero las nueve personas, una por una, mañana temprano y con sus opciones por escrito. Recién después publicamos la respuesta semanal a todos. Que nadie se entere por el comunicado de algo que le toca.']],
          out: 'Ernesto responde: «De acuerdo. A las 8 empezamos. Trae las cartas». Llegas a tu casa con los pies hinchados y una sensación rara: cansancio y orgullo a la vez.',
          pro: { ok: 'Cumples el acuerdo del taller: primero los afectados.', info: 'Prepara cada conversación como la de Rocío.' },
          kusi: ['animo', 'Primero las personas. ¡Así lo prometieron!'] } },
      { id: 'b', label: 'Publicar a primera hora el comunicado con el organigrama aprobado, para que nadie se entere por otro lado.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 },
          out: 'Ernesto lo duda: «Si lo publicamos antes, las nueve se van a enterar por el organigrama». Lo dejan para pensarlo mañana a las 7.',
          pro: { ok: 'Evitas que la noticia salga por el pasillo.', risk: 'Las nueve personas se enterarían por un documento masivo.' },
          kusi: ['pensando', '¿Y lo de «primero a nosotros»?'] } },
    ],
    rules: [[BP, 'Las personas afectadas por un cambio se enteran antes que el resto.']],
    mirada: {
      ve: 'La aprobación del consejo no es el final: es el comienzo de 9 conversaciones difíciles y 471 explicaciones. La primera regla que aprendiste en el taller vale hoy más que nunca: primero a quienes les toca.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Viernes 8:00', 'Conversaciones con las nueve personas'], ['Viernes 16:00', 'Respuesta semanal a todos'], ['Dos semanas', 'Análisis de la red rural, desde Chivay']] },
    },
  },
];
