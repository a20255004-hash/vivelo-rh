// Jefe/a de Relaciones Laborales · Capítulo 8 · «El Ministerio» · Semana 2, miércoles.
// Hilo: segundo día de huelga. La Dirección Regional de Trabajo de Moquegua convocó a una reunión extraproceso.
// Todo lo que hiciste en los capítulos 1 a 7 llega a la mesa de la conciliadora.
// Normas citadas:
// - Constitución, art. 28: el Estado fomenta la negociación colectiva y promueve formas de solución pacífica de los
//   conflictos laborales (docs/normas/txt).
// - D.S. 019-2006-TR, arts. 25.9, 25.10 y 25.12 (sustitución de huelguistas, actos contra la libertad sindical,
//   discriminación sindical) y art. 25.11 (garantías de los miembros de comisiones negociadoras) (docs/normas/txt).
// - D.S. 003-97-TR, art. 29: nulidad del despido por actividad sindical (docs/normas/txt).
// - TUO de la LRCT (D.S. 010-2003-TR): la Autoridad de Trabajo puede promover la solución del conflicto; se explica
//   la reunión extraproceso como práctica de apoyo, sin citar artículo.
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa
// La conciliadora, sus propuestas y las cifras son ficticias.

export const CAP = {
  n: 8, titulo: 'El Ministerio', dia: 'Semana 2, miércoles', foto: 'assets/3d/scenes/municipalidad.webp',
  lugar: 'Dirección Regional de Trabajo y Promoción del Empleo · Moquegua',
  inicio: '07:30', fin: '19:45', cierreHora: '19:30',
  apertura: 'Miércoles, segundo día de huelga. Hora y media de carretera entre cerros pelados y olivares, de Ilo a Moquegua. Silvia maneja, el gerente duerme en el asiento de atrás y tú repasas las actas con el celular sin señal.', boton: 'Abrir la carpeta',
  kusi: 'Hoy un tercero mira todo lo que hiciste. ¡Lo bueno y lo que no tanto! Con honestidad se llega más lejos.',
  lead: 'Llegaste con una postura clara, respondiste a las acusaciones sin negar lo evidente, entendiste lo que veía la conciliadora, limpiaste una fórmula de acuerdo y ordenaste el camino hasta el cierre.',
  reflexion: '¿Qué sentiste cuando la conciliadora leyó en voz alta lo que la empresa había hecho?',
  siguiente: { n: 9, titulo: 'El acuerdo', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'postura', p: 'Postura de la empresa', j: 'Comisión de la empresa', d: 0, e: 'Por definir en la carretera' },
  { id: 'acusaciones', p: 'Reclamos del sindicato ante la Autoridad', j: 'Teodoro Cutipa', d: 0, e: 'Se leerán en la reunión' },
  { id: 'formula', p: 'Fórmula de la conciliadora', j: 'Dra. Rocío Apaza · DRTPE', d: 0, e: 'Se espera' },
  { id: 'lima', p: 'Aprobación del directorio', j: 'Ing. Paredes · Lima', d: 0, e: 'Pendiente' },
  { id: 'cierre', p: 'Camino al cierre', j: 'Ambas partes', d: 0, e: 'Sin ordenar' },
];

export const FUTURO = {
  postura_clara: ['Llegaste a Moquegua con una postura: paquete, margen y lo que no se negocia.', 'Te dará firmeza mañana con la gerencia. Capítulo 9.'],
  acusacion_reconocida: ['Reconociste lo que la empresa hizo mal y mostraste cómo lo corregiste.', 'La conciliadora confía en tu palabra. Capítulo 9.'],
  acusacion_negada: ['Negaste o minimizaste lo que el sindicato denunció.', 'La conciliadora desconfía; el sindicato también. Capítulo 9.'],
  contraataque: ['Pediste que la Autoridad revise la huelga en plena reunión de conciliación.', 'El clima se rompió por una hora. Capítulo 9.'],
  conciliadora_escuchada: ['Entendiste qué ve la conciliadora y qué valora el sindicato.', 'Lo usarás para convencer a la gerencia. Capítulo 9.'],
  formula_limpia: ['La fórmula de acuerdo quedó sin cláusulas ilegales ni trampas.', 'Mañana se firma sobre esa base. Capítulo 9.'],
  formula_sucia: ['La fórmula de acuerdo quedó con una cláusula que afecta derechos.', 'El sindicato la descubrirá antes de firmar. Capítulo 9.'],
  formula_base: ['La empresa aceptó la fórmula como base, sujeta al directorio.', 'Mañana hay que convencer a Lima. Capítulo 9.'],
  formula_rechazada: ['La empresa rechazó la fórmula en la mesa.', 'La huelga sigue y el gerente queda sin salida. Capítulo 9.'],
  camino_claro: ['El camino al cierre está ordenado: directorio, junta, acta, asamblea y levantamiento.', 'Capítulos 9 y 10.'],
  cutipa_confirmado: ['Confirmaste con Cutipa la reunión de mañana para revisar el acta final.', 'Llega con la junta completa. Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  oscar: { n: 'Óscar Valdivia', sub: 'Controller · Finanzas', c: '#2F6B3F' },
  marleny: { n: 'Marleny Quispe', sub: 'Secretaria general · sindicato de mantenimiento', c: '#5B3E8C' },
};

export const WSP = [
  { chat: 'grupo', t: '07:05', de: 'Jhon', txt: 'Jefa, segundo día de piquete. Menos gente que ayer, pero más cansada. Los 18 de servicios mínimos entraron normal.', si: 'minimos_acordados' },
  { chat: 'grupo', t: '07:05', de: 'Jhon', txt: 'Jefa, el video de la policía en la garita ya lo pasó un canal de Arequipa.', si: 'policia_llamada' },
  { chat: 'oscar', t: '14:10', de: 'Óscar', txt: 'Dos días de huelga: unos S/ 8 millones de margen perdido. La fórmula, con todo, sale más barata que tres días más.' },
  { chat: 'marleny', t: '15:30', de: 'Marleny', txt: 'Me cuentan que están en Moquegua. Recuerde lo que firmamos: lo que les den, nos lo dan.', si: 'clausula_espejo' },
  { chat: 'abogado', t: '19:00', de: 'Dra. Medina', txt: 'Hoy hiciste lo difícil: decir «nos equivocamos» frente a la autoridad. Eso no se enseña en la universidad.', si: 'acusacion_reconocida' },
];

export const CORREOS = [
  { t: '07:00', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Comisión de la empresa', asunto: 'Reglas para hoy', html: '<p>La reunión extraproceso no es un juicio: la conciliadora busca una salida. Tres reglas: 1) no negamos hechos documentados; 2) no hacemos ofertas sin el gerente; 3) nadie habla de «ilegalidad de la huelga» en medio de la conciliación, salvo que lo decidamos antes.</p><p>Silvia</p>' },
];

export const QUIZ = [
  { q: 'En una reunión extraproceso, la Autoridad de Trabajo busca principalmente…', ops: ['Sancionar a la empresa', 'Ayudar a las partes a encontrar una solución', 'Declarar la huelga ilegal', 'Reemplazar a la comisión negociadora'], ok: 1, por: 'Es una instancia de apoyo para destrabar el conflicto, coherente con el fomento de la solución pacífica (Constitución, art. 28).' },
  { q: 'Si el sindicato denuncia un hecho que la empresa sí cometió, lo más útil es…', ops: ['Negarlo', 'Reconocerlo y mostrar cómo se corrigió', 'Contraatacar', 'Retirarse de la reunión'], ok: 1, por: 'Negar lo documentado destruye la credibilidad que necesitas para cerrar.' },
  { q: 'Una cláusula que permite «evaluar» a quienes acataron la huelga…', ops: ['Es válida si la firma el sindicato', 'Afecta la libertad sindical y no debe ir en un acuerdo', 'Es obligatoria', 'Solo aplica a dirigentes'], ok: 1, por: 'Tratar distinto por la actividad sindical es discriminación (D.S. 019-2006-TR, art. 25.12), aunque se firme.' },
  { q: 'Una cláusula de «no represalias» en el acuerdo de fin de huelga sirve para…', ops: ['Nada', 'Dar a la base la seguridad de que nadie será castigado por la huelga', 'Proteger solo a la empresa', 'Renunciar a derechos'], ok: 1, por: 'Es lo que permite a muchos trabajadores aceptar el acuerdo y volver tranquilos.' },
  { q: 'Antes de levantar una huelga, el acuerdo suele necesitar…', ops: ['Solo la firma del gerente', 'La aprobación de la empresa y la ratificación de los trabajadores según su estatuto', 'Una sentencia judicial', 'Nada'], ok: 1, por: 'La empresa decide por sus órganos y el sindicato por los suyos: quien votó la huelga decide levantarla.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:50', ch: 'documento', who: null, titulo: 'La postura, en la carretera', banner: 'assets/esc/camino.webp', lugar: 'Camioneta, carretera Ilo–Moquegua', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>El gerente se despierta a la altura de El Algarrobal. ${F.has('oferta_todo') ? '«Ya dimos seis. ¿Qué nos queda?», pregunta, todavía ronco.' : '«¿Hasta dónde llego hoy?», pregunta, todavía ronco.'} Silvia te pide que lo escribas en una hoja antes de llegar.</p><p><mark class="clave">Una postura que quepa en la guantera</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la postura de la empresa para hoy.', boton: 'Guardar la hoja',
    bloques: [
      { id: 'paq', t: 'Qué llevamos', n: 2, ops: [
        { id: 'p1', t: 'Un paquete: aumento escalonado, monitoreo de gases con comité paritario y movilidad de madrugada.', ok: true, por: 'Un paquete permite mover piezas sin quedarse sin nada.' },
        { id: 'p2', t: 'Una cláusula de no represalias por la huelga.', ok: true, por: 'Es lo que la base necesita para volver tranquila, y no cuesta plata.' },
        { id: 'p3', t: 'Solo el número del aumento.', ok: false, por: 'Con un solo número, cualquier diferencia se vuelve un todo o nada.' },
      ] },
      { id: 'mar', t: 'Margen', n: 1, ops: [
        { id: 'm1', t: 'El límite aprobado por Lima; lo que pase de ahí, se consulta antes de decir sí.', ok: true, por: 'Firmeza sin cerrar puertas.' },
        { id: 'm2', t: 'Lo que pida la conciliadora, para terminar hoy.', ok: false, por: 'Ceder el control de tu margen a un tercero.' },
      ] },
      { id: 'no', t: 'Lo que no se negocia', n: 1, ops: [
        { id: 'n1', t: 'Nada que afecte derechos: ni evaluaciones a huelguistas ni renuncias a reclamar.', ok: true, por: 'Un acuerdo con una cláusula ilegal es un acuerdo frágil.' },
        { id: 'n2', t: 'Que los dirigentes pidan disculpas públicas.', ok: false, por: 'Humillar a la contraparte impide que la base acepte.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 2 : 0 },
        flags: q !== 'riesgosa' ? ['postura_clara'] : [],
        cartera: { postura: q === 'buena' ? 'Paquete, no represalias, margen de Lima, nada ilegal' : 'Postura con huecos' },
        out: q === 'buena' ? 'El gerente lee la hoja y la dobla en cuatro. «Esto lo puedo defender.» Se la guarda en el bolsillo de la camisa.' : 'Silvia mira la hoja por el retrovisor: «Con esto vamos a improvisar».',
        pro: { ok: 'Un paquete, un margen y una línea roja: así se llega a una conciliación.', info: 'La cláusula de no represalias suele destrabar más que un sol de aumento.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Postura de guantera, lista!' : 'Le faltan piezas…'],
      };
    },
    mirada: {
      ve: 'Llegar a una conciliación sin postura es entregarle la negociación al tercero. Llegar con un solo número es convertirla en una apuesta. El paquete te da piezas que mover.',
      visual: { tipo: 'flujo', titulo: 'Postura para la conciliación', pasos: ['Paquete', 'No represalias', 'Margen de Lima', 'Línea roja legal'] },
    },
  },
  {
    id: 'h2', t: '10:30', ch: 'presencial', who: 'sindicato', titulo: 'Lo que lee el sindicato', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de reuniones de la Dirección Regional', show: ['confianza', 'cumplimiento', 'etica'],
    body: (n, F) => {
      const q = [];
      if (F.has('temporales_contratados')) q.push('la contratación de reemplazos');
      if (F.has('contrata_usada') || F.has('produccion_encubierta')) q.push('el despacho de ánodos con otro personal');
      if (F.has('comunicado_amenaza') || F.has('respuesta_dura')) q.push('una comunicación con amenazas');
      if (F.has('policia_llamada')) q.push('la policía en el piquete');
      if (F.has('parte_fotos') || F.has('lista_armada')) q.push('listas y fotos de trabajadores');
      if (F.has('bono_leales') || F.has('adelanto_divisor')) q.push('beneficios para dividir a los trabajadores');
      const lista = q.length ? q.join(', ') : 'la demora de la empresa en moverse y la promesa de seguridad que no se cumplió el año pasado';
      return `<p>La conciliadora, la Dra. Rocío Apaza, 50 años, moqueguana, abre con una pregunta a cada parte. El abogado del sindicato lee una hoja: denuncian ${lista}.</p><p>Todos voltean hacia ti. <mark class="clave">¿Cómo respondes?</mark></p>`;
    },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer lo que es cierto, explicar qué se corrigió y con qué documento, y decir que la empresa vino a cerrar un acuerdo.',
        res: { q: 'buena', fx: { confianza: 5, etica: 4, cumplimiento: 2 }, rel: { sindicato: 1, gerencia: 0 }, flags: ['acusacion_reconocida'], cartera: { acusaciones: 'Respondidas con hechos y correcciones' },
          out: 'La conciliadora toma nota sin levantar la vista. «Pocas empresas empiezan así.» Cutipa no dice nada, pero deja de cruzar los brazos.',
          pro: { ok: 'Reconocer lo evidente te da credibilidad para lo que viene.', risk: 'El gerente puede sentir que expusiste a la empresa.', info: 'Lo que reconoces aquí no te lo pueden usar como sorpresa después.' },
          kusi: ['celebra', '¡Honestidad que abre puertas!'] } },
      { id: 'b', label: 'Responder que la empresa siempre actuó conforme a ley y que las denuncias son exageradas.',
        res: { q: 'riesgosa', fx: { confianza: -5, etica: -3 }, rel: { sindicato: -1 }, flags: ['acusacion_negada'], cartera: { acusaciones: 'Negadas' },
          out: 'El abogado del sindicato saca su celular y pone un video sobre la mesa. La conciliadora lo mira entero. Luego te mira a ti.',
          pro: { ok: 'Defiendes a la empresa.', risk: 'Negar lo que está documentado ante la autoridad destruye tu palabra para el resto del conflicto.' },
          kusi: ['triste', 'El video habló más fuerte…'] } },
      { id: 'c', label: 'Responder que la huelga también tiene problemas y pedir que la Autoridad revise si cumple los requisitos.',
        res: { q: 'aceptable', fx: { confianza: -3, cumplimiento: 0 }, rel: { sindicato: -1 }, flags: ['contraataque'], cartera: { acusaciones: 'Contraataque de la empresa' },
          out: 'La conciliadora cierra su cuaderno. «Para eso hay otro procedimiento. Aquí vinimos a buscar una salida.» Pide un receso de una hora.',
          pro: { ok: 'Es un derecho de la empresa pedir la revisión.', risk: 'En medio de una conciliación, el contraataque rompe el clima y no responde a nada.' },
          kusi: ['pensando', 'Derecho tuyo… mal momento.'] } },
    ],
    rules: [[LEY, 'Constitución, art. 28: el Estado promueve formas de solución pacífica de los conflictos.'], [BP, 'Ante la autoridad, no niegues lo que está documentado.']],
    mirada: {
      ve: 'Ante un tercero, la credibilidad es lo más valioso que tiene una parte. Reconocer un error y mostrar la corrección suele hacer más por el acuerdo que defender cada decisión.',
      visual: { tipo: 'balanza', a: { t: 'Negar o contraatacar', items: ['Proteges la imagen hoy', 'El tercero desconfía', 'El sindicato se endurece'] }, b: { t: 'Reconocer y mostrar', items: ['Te expones un momento', 'Credibilidad ante la Autoridad', 'Espacio para cerrar'] } },
    },
  },
  {
    id: 'h3', t: '12:00', ch: 'presencial', who: null, titulo: 'A solas con la conciliadora', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de la conciliadora', show: ['calidad', 'confianza', 'personas'],
    body: () => `<p>La conciliadora se reúne con cada parte por separado. En su oficina hay un ventilador, un mapa de Moquegua y una foto de sus nietos en Torata. Te sirve un vaso de agua.</p><p>«Tiene dos preguntas antes de que llame al gerente», dice. <mark class="clave">Úsalas bien</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para la conciliadora.',
    opts: [
      { id: 'zona', label: '¿Dónde ve usted el punto de encuentro?', info: '«Entre cinco y seis soles, en dos años. Y el bono por cierre lo pueden aceptar más bajo si el resto les da tranquilidad.»' },
      { id: 'valor', label: '¿Qué es lo que más le importa al sindicato, más allá de la plata?', info: '«Que nadie sea castigado por la huelga y que lo de los gases sea en serio. Cutipa me dijo: “Si eso está, el resto lo explico en la asamblea”.»' },
      { id: 'dias', label: '¿Qué pasa con los días de huelga?', info: '«No se pagan, y la empresa tiene razón en eso. Pero he visto acuerdos donde el descuento se fracciona en varios meses para que no llegue una boleta en cero. Es un gesto barato.»' },
      { id: 'riesgo', label: '¿Qué pasa si hoy no hay acuerdo?', info: '«Sigue la huelga, y cada parte tiene sus caminos ante la Autoridad. Todos más largos, más caros y con más rencor. Yo no los recomiendo.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: 3, confianza: 3 },
      flags: ['conciliadora_escuchada'],
      out: 'La conciliadora asiente. «Ahora sí, llame a su gerente.» En el pasillo, el gerente te pregunta qué te dijo. Le das lo que necesita saber, no más.',
      kusi: ['curioso', picks.includes('valor') ? '¡La llave no era solo plata!' : 'Un tercero ve lo que las partes no ven.'],
    }),
    rules: [[BP, 'En la reunión por separado, pregunta qué ve el tercero; no intentes ganártelo.']],
    mirada: {
      ve: 'La conciliadora conversa con las dos partes por separado: sabe lo que cada una puede aceptar. Preguntarle bien es entender dónde está el acuerdo sin que nadie lo diga en público.',
      visual: { tipo: 'rango', titulo: 'Aumento en dos años (S/ diarios)', min: 0, max: 12, banda: [5, 6], marcas: [['Oferta inicial', 3], ['Zona de la conciliadora', 5.5], ['Pliego', 12]] },
    },
  },
  {
    id: 'h4', t: '13:40', ch: 'documento', who: null, titulo: 'La fórmula', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de reuniones de la Dirección Regional', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Después del almuerzo —un caldo de gallina en un mercado de Moquegua, entre la comisión de la empresa en una mesa y la del sindicato en otra— la conciliadora reparte un borrador de fórmula. Ambas partes proponen cambios.</p><p>Silvia te pasa la versión con los añadidos de todos. <mark class="clave">Marca lo que no puede quedar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las cláusulas que no pueden quedar en la fórmula.',
    doc: { t: 'Fórmula de solución · Borrador de trabajo', sub: 'Reunión extraproceso · con añadidos de las partes' },
    lines: [
      { id: 'aumento', t: '1. Aumento de S/ 5 diarios desde la firma y S/ 1 adicional en doce meses.' },
      { id: 'gases', t: '2. Monitoreo de gases en convertidores con un comité paritario, desde el 1 de diciembre.' },
      { id: 'movilidad', t: '3. Movilidad para el turno de madrugada desde Ilo.' },
      { id: 'bono', t: '4. Bono por cierre de pliego de S/ 1,500 por trabajador comprendido.' },
      { id: 'norepresalias', t: '5. La empresa no adoptará represalias contra ningún trabajador por su participación en la huelga.' },
      { id: 'evalua', t: '6. (Añadido por la empresa) La participación en la huelga podrá considerarse en la evaluación anual de desempeño.', bad: LEY, why: 'Contradice la cláusula 5 y castiga el ejercicio de un derecho: es discriminación sindical (D.S. 019-2006-TR, art. 25.12). No vale aunque se firme.' },
      { id: 'renuncia', t: '7. (Añadido por la empresa) El sindicato desiste de toda denuncia presentada ante SUNAFIL por hechos ocurridos durante la huelga.', bad: BP, why: 'Canjear el retiro de denuncias por el acuerdo se lee como comprar impunidad. Si hubo infracciones, se corrigen; no se negocian.' },
      { id: 'contratas', t: '8. (Añadido por la empresa) El sindicato no afiliará a trabajadores de las contratas durante la vigencia del convenio.', bad: LEY, why: 'Limitar a quién puede afiliar un sindicato afecta la libertad sindical (Constitución, art. 28; D.S. 019-2006-TR, art. 25.10).' },
      { id: 'dias', t: '9. Los días de huelga no se pagan; el descuento se fracciona en tres meses.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: missLey ? -6 : 6, etica: missLey ? -4 : 3, calidad: q === 'buena' ? 4 : 1 }, rel: { gerencia: missLey ? 1 : -1 },
        flags: missLey ? ['formula_sucia'] : ['formula_limpia'],
        cartera: { formula: missLey ? 'Con cláusulas que afectan derechos' : 'Limpia: seis puntos y descuento fraccionado' },
        out: missLey ? 'La fórmula queda con un añadido que nadie del sindicato leyó con calma todavía. Lo van a leer esta noche.' : 'Tachas tres añadidos de la empresa. El gerente protesta por el de las denuncias. Silvia lo calma: «Ingeniero, si hubo algo, se corrige. No se compra». Queda una fórmula de seis puntos y una línea de descuento fraccionado.',
        pro: { ok: 'Una fórmula sin trampas es una fórmula que la asamblea puede ratificar.', risk: 'Una cláusula ilegal escondida es una bomba para el día que alguien la lea.', info: 'El descuento fraccionado cuesta poco y evita boletas en cero.' },
        kusi: missLey ? ['indignado', 'Esa cláusula va a explotar…'] : ['celebra', '¡Fórmula limpia!'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, arts. 25.10 y 25.12: actos contra la libertad sindical y discriminación por actividad sindical.'], [LEY, 'Constitución, art. 28: garantiza la libertad sindical.']],
    mirada: {
      ve: 'En el último tramo, cada parte intenta meter «lo suyo» en el acuerdo. Las cláusulas que limitan derechos son las que después invalidan la confianza en todo lo demás.',
      visual: { tipo: 'embudo', titulo: 'De borrador a fórmula', niveles: [['Cláusulas propuestas', 9], ['Sin las que afectan derechos', 7], ['Sin canjes de denuncias', 6]] },
    },
  },
  {
    id: 'h5', t: '15:30', ch: 'llamada', who: 'gerencia', titulo: 'Lima en el altavoz', banner: 'assets/foto/llamada.webp', lugar: 'Pasillo de la Dirección Regional', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>El gerente pone el celular en altavoz en el pasillo. ${F.has('clausula_espejo') ? 'Óscar recuerda que, por la cláusula espejo, todo vale también para mantenimiento.' : ''} La conciliadora espera una respuesta antes de las cinco.</p><p><mark class="clave">Tres voces y una decisión</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Óscar Valdivia · Finanzas', 'Contesta desde la planta', '«La fórmula cuesta menos que tres días más de huelga. Con el bono incluido. No es barata, pero es la más barata de las caras.»'],
      ['Dra. Silvia Medina · Legal', 'En persona, al lado', '«Sin las cláusulas que tachamos, legalmente está limpia. Si la aceptamos como base, mañana se firma el acta en Ilo.»'],
      ['Presidenta del directorio · Lima', 'En altavoz, fría', '«Seis soles en dos años, más un bono. ¿Eso termina la huelga o es otra etapa? Quiero la opinión de Relaciones Laborales, no la del gerente.»'],
    ],
    prompt: 'La presidenta del directorio espera tu opinión. ¿Qué dices?',
    choices: [
      { id: 'a', label: 'Que la recomiendas como base: está dentro del margen, sin cláusulas ilegales, y atiende lo que más pesa en la base: seguridad y no represalias. Sujeta a ratificación del sindicato.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3 }, rel: { gerencia: 1 }, flags: ['formula_base'], cartera: { lima: 'Aprobada como base; firma mañana', formula: 'Aceptada como base por la empresa' },
          out: 'Silencio de cinco segundos en Lima. «Bien. Aprobada como base. Mañana quiero el acta firmada.» El gerente cuelga y te da la mano, por primera vez en dos semanas.',
          pro: { ok: 'Das una recomendación clara, con razones y con su condición.', risk: 'Si la asamblea no la ratifica, la responsabilidad también será tuya.', info: 'Diles a todos que falta la asamblea: nadie debe cantar victoria.' },
          kusi: ['celebra', '¡Recomendación con nombre y apellido!'] } },
      { id: 'b', label: 'Que conviene rechazarla y esperar dos días más: el sindicato está cansado y bajará.',
        res: { q: 'riesgosa', fx: { confianza: -3, calidad: -2 }, rel: { gerencia: 0, sindicato: -1 }, flags: ['formula_rechazada'], cartera: { lima: 'Rechazada; se espera desgaste', formula: 'Rechazada por la empresa' },
          out: 'Lima acepta. La conciliadora anota «la empresa no acepta la fórmula». Al salir, Cutipa te dice: «Ustedes pensaban que nos íbamos a cansar. Ya veremos».',
          pro: { ok: 'Podría bajar el costo.', risk: 'Apostar al desgaste cuesta S/ 4 millones por día y deja una base resentida que tendrá que firmar después.' },
          kusi: ['preocupado', 'El cansancio también endurece…'] } },
    ],
    rules: [[POL, 'En Fundición del Sur, todo acuerdo económico requiere aprobación del directorio.']],
    mirada: {
      ve: 'Llega un momento en que la jefatura de Relaciones Laborales tiene que dar su opinión con nombre y apellido. No es neutralidad ni obediencia: es criterio profesional.',
      visual: { tipo: 'balanza', a: { t: 'Esperar el desgaste', items: ['Quizás un acuerdo más barato', 'S/ 4 millones por día', 'Base resentida'] }, b: { t: 'Aceptar como base', items: ['Dentro del margen', 'Seguridad y no represalias', 'Huelga cerca de terminar'] } },
    },
  },
  {
    id: 'h6', t: '17:20', ch: 'documento', who: null, titulo: 'De aquí al cierre', banner: 'assets/esc/escalera.webp', lugar: 'Sala de reuniones de la Dirección Regional', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>${F.has('formula_base') ? 'Hay fórmula aceptada como base por ambas partes.' : 'No hay fórmula aceptada, pero la conciliadora deja el camino escrito por si alguien cambia de opinión.'} El acta de la reunión extraproceso tiene cinco líneas; falta todo lo demás.</p><p><mark class="clave">Ordena los pasos hasta que la planta vuelva a operar</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos hasta el levantamiento de la huelga. Usa las flechas.', boton: 'Anotar el camino',
    items: [
      { id: 'acta', t: 'Acta de la reunión extraproceso con la fórmula como base', por: 'Hoy, en Moquegua.' },
      { id: 'directorio', t: 'Aprobación formal del directorio', por: 'La empresa decide por sus órganos.' },
      { id: 'firma', t: 'Firma del acta de acuerdo entre las comisiones, en Ilo', por: 'Mañana.' },
      { id: 'asamblea', t: 'Asamblea del sindicato para ratificar el acuerdo', por: 'Quien votó la huelga decide levantarla, según su estatuto.' },
      { id: 'retorno', t: 'Levantamiento de la huelga y retorno ordenado por turnos', por: 'Con el horno en espera, el retorno también se planifica.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 0, cumplimiento: q === 'buena' ? 3 : 1 },
        flags: q !== 'riesgosa' ? ['camino_claro'] : [],
        cartera: { cierre: q === 'buena' ? 'Acta, directorio, firma, asamblea, retorno' : 'Camino con pasos cruzados' },
        out: q === 'buena' ? 'La conciliadora copia tu orden en el acta como «pasos acordados». «Así nadie se adelanta a cantar victoria», dice.' : 'Silvia corrige: «La asamblea va después de la firma, no antes. Si no, ¿qué ratifican?».',
        pro: { ok: 'Ordenar el cierre evita que alguien levante la huelga o cante victoria antes de tiempo.', info: 'El retorno también es un proceso: el horno no vuelve a plena carga en una hora.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Escalera clara hasta el final!' : 'Casi: primero se firma, luego se ratifica.'],
      };
    },
    mirada: {
      ve: 'Un acuerdo de fin de huelga tiene varios dueños: la comisión, el directorio, la junta y la asamblea. Si alguno se salta, el acuerdo se cae justo cuando parecía hecho.',
      visual: { tipo: 'linea', titulo: 'Del acta al retorno', hitos: [['Miércoles', 'Acta extraproceso'], ['Jueves', 'Directorio y firma'], ['Después', 'Asamblea'], ['Luego', 'Retorno por turnos']] },
    },
  },
  {
    id: 'h7', t: '18:50', ch: 'whatsapp', who: null, titulo: 'De vuelta, en la carretera', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Camioneta, de vuelta a Ilo', show: ['confianza', 'personas'],
    body: () => `<p>Atardece sobre las lomas. El gerente duerme otra vez. Silvia pone una cumbia bajita. Tienes una barra de señal y un mensaje que mandar antes de perderla.</p><p><mark class="clave">Para Cutipa, sobre mañana</mark>.</p>`,
    type: 'compose', enviaA: 'sindicato', para: 'Para: Teodoro Cutipa · Sindicato mayoritario', boton: 'Enviar antes de perder señal',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cita', t: 'La cita', ops: [
        { id: 'c1', t: 'Señor Cutipa: le propongo mañana a las 10:00, en la sala de capacitación, para revisar juntos el texto del acta antes de firmar.', ok: true, por: 'Revisar juntos el texto evita sorpresas.' },
        { id: 'c2', t: 'Señor Cutipa: mañana le mando el acta para que la firme.', ok: false, por: 'Un acta que llega para firmar, sin revisar, despierta sospechas.' },
      ] },
      { id: 'junta', t: 'Quién viene', ops: [
        { id: 'j1', t: 'Si puede, venga con su junta completa: que todos lean lo mismo.', ok: true, por: 'Más ojos ahora, menos dudas en la asamblea.' },
        { id: 'j2', t: 'Mejor venga solo, para avanzar rápido.', ok: false, por: 'Un dirigente solo firmando algo es justo lo que el audio decía.' },
      ] },
      { id: 'tono', t: 'Cierre', ops: [
        { id: 't1', t: 'Hoy fue un día largo para todos. Gracias por la paciencia.', ok: true, por: 'Reconoce el esfuerzo sin cantar victoria.' },
        { id: 't2', t: '¡Ya casi ganamos todos!', ok: null, por: 'Prematuro: falta la asamblea.' },
      ] },
    ],
    res: sel => {
      const malo = sel.cita === 'c2' || sel.junta === 'j2';
      const buenas = ['c1', 'j1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : -1, personas: q === 'buena' ? 2 : 0 }, rel: { sindicato: q === 'buena' ? 1 : 0 },
        flags: q !== 'riesgosa' ? ['cutipa_confirmado'] : [],
        out: q === 'buena' ? 'La respuesta llega justo antes de Ilo: «Mañana 10. Con la junta. Y con el abogado». Se pierde la señal.' : malo ? 'Cutipa responde: «¿Solo? ¿Para que digan que me vendí?». La señal se va antes de que puedas contestar.' : 'Cutipa responde con un «ok».',
        pro: { ok: 'Revisar juntos el texto, con la junta, es proteger el acuerdo y al dirigente.', risk: 'El último tramo es donde más acuerdos se caen por una palabra.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Mañana con todos!' : 'Eso puede leerse mal…'],
      };
    },
    rules: [[BP, 'El texto final de un acuerdo se revisa con la junta completa, no se envía para firmar.']],
    mirada: {
      ve: 'El último tramo es frágil: el cansancio hace querer cerrar rápido, pero un acuerdo que se firma sin que la junta lo lea se cae en la asamblea.',
      visual: { tipo: 'mensaje', titulo: 'Para mañana', txt: 'Señor Cutipa: le propongo mañana a las 10:00, en la sala de capacitación, para revisar juntos el texto del acta antes de firmar. Si puede, venga con su junta completa. Hoy fue un día largo para todos. Gracias por la paciencia.' },
    },
  },
];
