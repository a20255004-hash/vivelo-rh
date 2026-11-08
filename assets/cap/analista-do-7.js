// Analista de Desarrollo Organizacional · Capítulo 7 · «La conversación» · Semana 2, martes.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 30 b), texto modificado por la Ley 30709: «la reducción de la categoría y de
//   la remuneración» es acto de hostilidad; se aplica a la rebaja dispuesta unilateralmente. Ya citada en el capítulo 2.
//   https://lpderecho.pe/jurisprudencia-articulo-30-tuo-decreto-legislativo-728-despido-hostilidad
//   https://lpderecho.pe/rebajar-categoria-trabajador-califica-acto-hostilidad-cas-lab-1744-2017-lima
// Empresas y personas son ficticias.

export const CAP = {
  n: 7, titulo: 'La conversación', dia: 'Semana 2, martes', foto: 'assets/foto/acuerdo.webp',
  lugar: 'Cooperativa del Sur · Sede de Cayma, Arequipa',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Anoche, el panel de evaluación (Linares, Ernesto y una consejera) eligió a Gabriel para la jefatura de créditos. Hoy alguien tiene que decírselo a Rocío, que lleva 20 años en Characato. Ernesto te pide que prepares la conversación y que estés con él.', boton: 'Preparar la conversación',
  kusi: 'Hay conversaciones que nadie quiere tener. Prepararlas bien es una forma de respeto.',
  lead: 'Limpiaste un guion que lastimaba, preparaste la conversación, le dijiste a Rocío la verdad, la escuchaste, cuidaste la reserva frente a Kevin y dejaste los acuerdos por escrito.',
  reflexion: '¿Cómo te gustaría que te dijeran que no te eligieron para algo que querías?',
  siguiente: { n: 8, titulo: 'El taller', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'rocio', p: 'Conversación con Rocío', j: 'Ernesto · Gestión Humana', d: 0, e: 'Hoy a las 11' },
  { id: 'sistema', p: 'Adopción del sistema nuevo en créditos', j: 'Luz · Sistemas', d: 0, e: 'Plan de acompañamiento' },
  { id: 'taller', p: 'Taller de integración', j: 'Ernesto', d: 0, e: 'Mañana' },
  { id: 'consejo', p: 'Organigrama para el consejo', j: 'Gerencia general', d: 0, e: 'Este jueves' },
  { id: 'encuesta', p: 'Encuesta de clima', j: 'Gestión Humana', d: 0, e: '61 % de respuesta' },
];

export const FUTURO = {
  guion_limpio: ['El guion de la conversación no impone un cambio de cargo ni presiona una renuncia.', 'Rocío recibirá opciones, no órdenes.'],
  guion_duro: ['El guion dice que el cambio de cargo «ya está firmado».', 'Legal tendrá que corregirlo después.'],
  conversacion_preparada: ['Preparaste la conversación con apertura, criterios, opciones y apoyo.', 'Ernesto dijo que la usará de modelo.'],
  rocio_verdad: ['Le explicaste a Rocío por qué no fue elegida, con los criterios reales.', 'Le dolió, pero no se sintió engañada.'],
  rocio_escuchada: ['Preguntaste a Rocío qué necesitaba antes de decidir.', 'Pidió el cambio por escrito y 48 horas.'],
  kevin_reserva: ['No le contaste a Kevin nada de Rocío antes del anuncio.', 'Kevin entendió que contigo las cosas se cuidan.'],
  acuerdo_escrito: ['Los acuerdos con Rocío están por escrito: sueldo, opciones y plazo.', 'Rocío responderá el jueves.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  gabriel: { n: 'Gabriel Cornejo', sub: 'Jefe de créditos · ex Misti', c: '#C05621' },
};

export const WSP = [
  { chat: 'gh', t: '07:35', de: 'Ernesto', txt: 'A las 11 con Rocío, en mi oficina. Prepárame todo. Y por favor: nada de esto sale de nosotros hasta el anuncio.' },
  { chat: 'rocio', t: '07:50', de: 'Rocío', txt: 'Lo pensé toda la noche. Me interesa lo de la cartera agrícola. Pero primero quiero saber lo de hoy.', si: 'rocio_lidera' },
  { chat: 'gabriel', t: '09:00', de: 'Gabriel', txt: 'Me avisaron. Gracias por insistir en los criterios: así nadie podrá decir que fue a dedo.', si: 'perfil_por_funciones' },
  { chat: 'gabriel', t: '09:00', de: 'Gabriel', txt: 'Me avisaron. Te debo una 😉', si: 'perfil_a_medida' },
  { chat: 'kevin', t: '13:45', de: 'Kevin', txt: 'La señora Rocío salió de la oficina de Ernesto con los ojos rojos. ¿Qué pasó? ¿Se va?' },
  { chat: 'kevin', t: '18:20', de: 'Kevin', txt: 'Entendido. Gracias por no hacerme el chisme. Igual estoy preocupado por ella.', si: 'kevin_reserva' },
];

export const CORREOS = [
  { t: '07:40', de: 'Fernando Linares · Gerencia General', para: 'Ernesto Valdivia; Analista de DO', asunto: 'Guion para Bedoya', html: '<p>Les paso lo que quiero que le digan a la señora Bedoya. Corto y claro. No quiero dramas.</p><p>F. Linares</p>' },
  { t: '10:00', de: 'Ernesto Valdivia', para: 'Analista de DO', asunto: 'Resultados del panel', html: '<p>Para que lo tengas: Gabriel sacó mejor puntaje en liderazgo de equipos y gestión con el sistema; Rocío, en conocimiento de cartera agrícola y relación con socios. El total favoreció a Gabriel por poco. Las notas están en la carpeta restringida.</p>' },
];

export const QUIZ = [
  { q: 'A una jefa que no fue elegida se le ofrece un cargo de menor categoría. ¿Cómo se hace?', ops: ['Se le notifica que «ya está firmado»', 'Se le ofrece, se le explica y se acuerda por escrito', 'Se le pide que renuncie', 'Se cambia su cargo en el sistema sin avisar'], ok: 1, por: 'Reducir la categoría de forma unilateral puede ser un acto de hostilidad (art. 30 b del D.S. 003-97-TR). Se ofrece y se acuerda.' },
  { q: 'Rocío pregunta «¿por qué él?». Lo mejor es…', ops: ['Decir que fue decisión del gerente', 'Explicar los criterios y en cuáles salió mejor cada uno', 'Decir que ella lo merecía más', 'No responder'], ok: 1, por: 'La verdad sobre los criterios duele menos que la sensación de haber sido descartada sin razones.' },
  { q: 'En una conversación difícil, lo primero es…', ops: ['Hablar del clima', 'Decir el mensaje principal pronto y con claridad', 'Leer las fortalezas durante diez minutos', 'Mostrar el organigrama completo'], ok: 1, por: 'Rodear el mensaje aumenta la ansiedad. Se dice pronto, con respeto.' },
  { q: 'Un analista te pregunta si su jefa se va, antes del anuncio oficial. ¿Qué respondes?', ops: ['Le cuentas todo', 'Le dices que lo que conversa cada persona con Gestión Humana es reservado y que habrá anuncio', 'Le dices que no sabes nada', 'Le pides que le pregunte a ella'], ok: 1, por: 'La reserva protege a Rocío y se aplica igual para todos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 't1', t: '07:55', ch: 'documento', who: null, titulo: 'El guion de Linares', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Linares mandó el guion que quiere que se use con Rocío. «Corto y claro», dice. <mark class="clave">Algunas frases van a lastimar o a meter a la cooperativa en problemas</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que no son buena práctica.',
    doc: { t: 'Guion · conversación con R. Bedoya', sub: 'Gerencia General · borrador' },
    lines: [
      { id: 'g1', t: 'El panel evaluó a los dos candidatos con los mismos criterios: cartera, liderazgo, gestión con el sistema y relación con socios.' },
      { id: 'g2', t: 'Lamentablemente, usted no dio la talla.', bad: BP, why: 'Es un juicio sobre la persona, no un resultado. Y después de 20 años, humilla.' },
      { id: 'g3', t: 'A partir de mañana pasa a coordinadora; el cambio ya está firmado.', bad: LEY, why: 'Bajar la categoría por decisión unilateral puede ser un acto de hostilidad (art. 30 b del D.S. 003-97-TR). Se ofrece y se acuerda.' },
      { id: 'g4', t: 'Su remuneración se mantiene sin cambios.' },
      { id: 'g5', t: 'Si no está de acuerdo, puede acogerse al retiro con un bono, pero tiene que decidir hoy.', bad: LEY, why: 'Poner un plazo de horas para una renuncia «voluntaria» es presión: la renuncia podría cuestionarse.' },
      { id: 'g6', t: 'Le pedimos reserva hasta el anuncio oficial del jueves.', duda: 'Es razonable pedirlo, pero también hay que decirle qué podrá contar a su familia y a su equipo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Ernesto suaviza el tono del guion, pero la frase «ya está firmado» sigue ahí.' : `Marcas ${hitsLey} riesgos legales y el juicio sobre la persona. Ernesto llama a Linares: «Si le decimos que ya está firmado, nos puede denunciar por hostilidad, y con razón». Linares cede: «Háganlo a su manera, pero que acepte».`,
      flags: [missLey ? 'guion_duro' : 'guion_limpio'], rel: { ernesto: missLey ? 0 : 1 },
      cartera: { rocio: missLey ? 'Guion con riesgos' : 'Guion sin imposiciones ni plazos de horas' },
      pro: { ok: 'Un guion que informa, ofrece y da tiempo.', risk: 'Imponer un cambio de categoría o presionar una renuncia expone a la cooperativa a un reclamo.', info: 'Pide que Legal revise la carta de ofrecimiento.' },
      kusi: missLey ? ['preocupado', 'Eso de «ya está firmado»…'] : ['celebra', '¡Guion humano y legal!'],
    }),
    rules: [[LEY, 'Reducir la categoría o la remuneración de forma unilateral puede ser un acto de hostilidad (D.S. 003-97-TR, art. 30 b).'], [BP, 'En una conversación difícil se habla de resultados y criterios, no de la valía de la persona.']],
    mirada: {
      ve: 'Linares quiere terminar rápido con algo incómodo. Pero las conversaciones mal hechas se pagan después: en reclamos, en desconfianza del equipo y en la historia que se cuenta en los pasillos durante años.',
      visual: { tipo: 'cambio', titulo: 'Del guion de Linares al guion final', pares: [['«No dio la talla»', 'El panel eligió por puntaje'], ['«Ya está firmado»', 'Te ofrecemos un cargo'], ['«Decida hoy»', 'Tómate dos días']] },
      normas: [{ ley: 'D.S. 003-97-TR (TUO del D. Leg. 728), art. 30 b)', dice: 'Entre los actos de hostilidad equiparables al despido está «la reducción de la categoría y de la remuneración» (texto modificado por la Ley 30709).', practica: 'A Rocío no se le notifica un cargo menor: se le ofrece, se le explica y se acuerda por escrito.' }],
    },
  },
  {
    id: 't2', t: '09:20', ch: 'documento', who: 'ernesto', titulo: 'Preparar la conversación', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de Ernesto', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Ernesto ha hecho esto otras veces, y nunca le ha resultado fácil. «Ayúdame a ordenarla. ${F.has('estructura_primero') ? 'Tenemos para ofrecerle la coordinación de créditos rurales y agrícolas.' : 'Tenemos para ofrecerle un cargo de analista sénior.'} <mark class="clave">¿Qué decimos y en qué orden?</mark>»</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la conversación.', boton: 'Guardar la preparación',
    bloques: [
      { id: 'abre', t: 'Cómo se abre', n: 1, ops: [
        { id: 'a1', t: 'Ir al punto en el primer minuto: «Rocío, el panel eligió a Gabriel para la jefatura de créditos».', ok: true, por: 'Rodear el mensaje aumenta la angustia.' },
        { id: 'a2', t: 'Diez minutos de fortalezas antes de dar la noticia.', ok: false, por: 'Ella siente lo que viene y cada elogio le suena a anestesia.' },
      ] },
      { id: 'por', t: 'Por qué', n: 2, ops: [
        { id: 'p1', t: 'Los criterios del panel y en cuáles salió mejor cada uno, sin leer las notas de Gabriel.', ok: true, por: 'Verdad sobre el proceso sin exponer al otro.' },
        { id: 'p2', t: 'Lo que la cooperativa necesita de ella: su conocimiento de la cartera agrícola.', ok: true, por: 'Es cierto y le da un lugar.' },
        { id: 'p3', t: 'Que fue una decisión «de arriba» que tú no compartes.', ok: false, por: 'Desautoriza el proceso y te pone de su lado.' },
      ] },
      { id: 'sigue', t: 'Qué sigue', n: 2, ops: [
        { id: 's1', t: 'Las opciones por escrito, con su remuneración, y 48 horas para pensarlo.', ok: true, por: 'Le das tiempo y claridad.' },
        { id: 's2', t: 'Ofrecerle conversar con alguien de confianza o con el programa de apoyo de la cooperativa.', ok: true, por: 'Una mala noticia también se acompaña.' },
        { id: 's3', t: 'Pedirle que firme ahí mismo para cerrar el tema.', ok: false, por: 'Una firma bajo presión no es un acuerdo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : -1 }, rel: { ernesto: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['conversacion_preparada'] : [], cartera: { rocio: q === 'buena' ? 'Conversación preparada: mensaje, criterios, opciones y apoyo' : 'Conversación con huecos' },
        out: q === 'buena' ? 'Ernesto la lee dos veces. «Esto lo voy a usar para las otras 17 conversaciones.» Faltan veinte minutos.' : 'La preparación ayuda, pero alguna pieza puede hacer más larga o más dura la conversación.',
        pro: { ok: 'Claridad al inicio, razones verdaderas, opciones con tiempo y apoyo.', risk: 'Rodear el mensaje, desautorizar el proceso o pedir una firma inmediata empeoran todo.', info: 'Lleva pañuelos y agua. Parece poca cosa; no lo es.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Preparada con cabeza y corazón!' : 'Revisa el orden.'],
      };
    },
    rules: [[BP, 'Mensaje claro al inicio, razones verdaderas, opciones por escrito y tiempo para decidir.']],
    mirada: {
      ve: 'Una conversación difícil tiene una estructura: el mensaje, el porqué, lo que viene y el apoyo. Prepararla no la vuelve fría; al contrario, permite que la persona escuche lo importante en vez de perderse en rodeos.',
      visual: { tipo: 'flujo', titulo: 'Una conversación difícil', pasos: ['El mensaje', 'Los criterios', 'Lo que se necesita de ella', 'Opciones y tiempo', 'Apoyo'] },
    },
  },
  {
    id: 't3', t: '11:10', ch: 'presencial', who: 'jefa', titulo: '«¿Por qué él?»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Ernesto', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Ernesto da el mensaje en el primer minuto. Rocío se queda inmóvil, con las manos sobre la libreta de tapa verde que lleva a todas partes. Afuera se escucha la fotocopiadora.</p><p>Después de un silencio largo, te mira a ti, no a Ernesto: «<mark class="clave">¿Por qué él? Dímelo de verdad</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle con calma los criterios del panel: que ella salió mejor en cartera agrícola y relación con socios, y Gabriel en liderazgo de equipos grandes y gestión con el sistema; y que el total fue cercano.',
        res: { q: 'buena', fx: { etica: 4, personas: 3, confianza: 3 }, rel: { jefa: 1 }, flags: ['rocio_verdad'],
          out: 'Rocío baja la vista. «El sistema. Siempre el sistema.» Se le quiebra la voz, pero asiente. «Al menos me lo dices sin cuentos.»',
          pro: { ok: 'Le das razones reales, sin exponer las notas de Gabriel.', risk: 'La verdad duele, y la conversación se pone más emotiva.', info: 'Deja el silencio. No lo llenes.' },
          kusi: ['animo', 'Verdad con respeto. Difícil y necesario.'] } },
      { id: 'b', label: 'Decirle que fue una decisión de la gerencia y que tú no participaste en la evaluación.',
        res: { q: 'riesgosa', fx: { etica: -2, confianza: -3 }, rel: { jefa: -1 },
          out: 'Rocío asiente despacio. Sabe que tú armaste los criterios. Desde hoy, para ella, eres alguien que se lava las manos.',
          pro: { ok: 'Te proteges de su enojo.', risk: 'No es del todo cierto y le quita las razones que necesita para entender.' },
          kusi: ['triste', 'Se lavó las manos…'] } },
      { id: 'c', label: 'Decirle que para ti ella era la mejor candidata, pero que el panel vio otra cosa.',
        res: { q: 'aceptable', fx: { personas: 2, etica: -2 }, rel: { jefa: 1 },
          out: 'Rocío se siente acompañada por un momento. Esa tarde le cuenta a su equipo: «Hasta la de DO dice que me robaron el puesto».',
          pro: { ok: 'La consuelas.', risk: 'Tu opinión personal deslegitima el proceso que tú misma ayudaste a construir.' },
          kusi: ['pensando', 'Consolar no es tomar partido.'] } },
    ],
    rules: [[BP, 'Explica los criterios y el resultado sin exponer los datos del otro candidato.']],
    mirada: {
      ve: 'Rocío no pide que cambien la decisión: pide entenderla. Las personas aceptan mejor un resultado que no les gusta cuando conocen las razones y sienten que el proceso fue limpio. Lo que más duele es sentirse descartada sin explicación.',
      visual: { tipo: 'balanza', a: { t: 'Rocío', items: ['Cartera agrícola', 'Relación con socios', '20 años de historia'] }, b: { t: 'Gabriel', items: ['Liderazgo de equipos grandes', 'Gestión con el sistema', 'Banca digital'] } },
    },
  },
  {
    id: 't4', t: '11:40', ch: 'presencial', who: 'jefa', titulo: 'Lo que ella necesita', banner: 'assets/foto/acuerdo.webp', lugar: 'Oficina de Ernesto', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Ernesto le explica la oferta y le entrega la carta${F.has('guion_limpio') ? ', sin plazos de horas' : ''}. Rocío la dobla sin leerla.</p><p>Antes de cerrar, quieres saber <mark class="clave">qué necesita ella</mark>. Eliges dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Rocío.',
    opts: [
      { id: 'tiempo', label: '¿Qué necesitas para decidir con tranquilidad?', info: '«Tiempo. Y que esté por escrito qué cambia y qué no: sueldo, título, a quién reporto. Ya me pasó una vez que me prometieron algo de palabra.»' },
      { id: 'equipo', label: '¿Cómo quieres que se entere tu equipo?', info: '«Por mí. Antes del anuncio del jueves. No quiero que se enteren por un correo masivo ni por el chofer.»' },
      { id: 'agricola', label: '¿Qué te haría sentir que tu experiencia sigue contando?', info: '«Que la cartera agrícola no la manejen chiquillos que nunca han visto una helada en Chiguata. Si la coordino yo, con autonomía real, me quedo.»' },
      { id: 'enojo', label: '¿Estás enojada con Gabriel?', info: '«No es con él. Es con la sensación de que Characato perdió. Pero eso no es tu problema.» Se arrepiente de haberlo dicho.' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, confianza: 2 }, rel: { jefa: picks.includes('enojo') ? 0 : 1 },
      flags: ['rocio_escuchada'],
      out: picks.includes('equipo') ? 'Acuerdan que Rocío hablará con su equipo el jueves a las 8, antes del anuncio. Ella se va con la carta en la mano y la espalda recta.' : 'Rocío se va con la carta y con 48 horas. Te quedas con lo que pidió anotado en tu libreta.',
      kusi: ['animo', 'Le preguntaste qué necesita. Eso devuelve un poco de control.'],
    }),
    rules: [[BP, 'Después de una mala noticia, pregunta qué necesita la persona para decidir.']],
    mirada: {
      ve: 'Cuando alguien recibe una mala noticia en el trabajo, pierde la sensación de control. Preguntarle qué necesita, cómo quiere contarlo y qué haría que su experiencia siga valiendo le devuelve una parte de ese control.',
      visual: { tipo: 'flujo', titulo: 'Lo que pidió Rocío', pasos: ['Todo por escrito', 'Contarlo ella a su equipo', 'Autonomía en la cartera agrícola', '48 horas'] },
    },
  },
  {
    id: 't5', t: '13:50', ch: 'whatsapp', who: 'analista', titulo: '«¿Se va?»', banner: 'assets/foto2/pasillo.webp', lugar: 'Comedor de la sede', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>Estás comiendo un adobo recalentado en el comedor cuando te escribe Kevin: «La señora Rocío salió de la oficina de Ernesto con los ojos rojos. <mark class="clave">¿Qué pasó? ¿Se va?</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que lo que cada persona conversa con Gestión Humana es reservado, que el jueves habrá un anuncio y que, si está preocupado por su propio puesto, puede hablar contigo.',
        res: { q: 'buena', fx: { etica: 4, confianza: 2 }, flags: ['kevin_reserva'],
          envia: [['kevin', 'Kevin, lo que cada persona conversa con Gestión Humana es reservado, igual que lo tuyo. El jueves habrá un anuncio oficial. Si estás preocupado por tu propio puesto, conversemos cuando quieras.']],
          out: 'Kevin tarda en responder. Luego entiende: lo mismo que lo protegió a él en el grupo focal, ahora protege a Rocío.',
          pro: { ok: 'Aplicas la reserva igual para todos y le ofreces un espacio.', info: 'Avisa a Rocío de que su equipo ya está preguntando.' },
          kusi: ['animo', 'La reserva vale para todos. ¡Así!'] } },
      { id: 'b', label: 'Contarle que no la eligieron, pero que se queda: así evitas que corra un rumor peor.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -3 }, rel: { jefa: -1 },
          out: 'A las tres, todo el equipo de créditos lo sabe. Rocío se entera por Kevin de que la noticia ya corre, antes de poder contarla ella.',
          pro: { ok: 'Quieres evitar un rumor.', risk: 'Le quitaste a Rocío lo único que pidió: contarlo ella misma.' },
          kusi: ['triste', 'Ella quería decirlo primero…'] } },
      { id: 'c', label: 'Decirle que no sabes nada.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: -1 },
          out: 'Kevin no te cree: te vio entrar a la oficina con ella. Pero no insiste.',
          pro: { ok: 'No revelas nada.', risk: 'Mentir, aunque sea un poco, te quita credibilidad para la próxima.' },
          kusi: ['pensando', 'Reservado no es «no sé».'] } },
    ],
    rules: [[BP, 'Lo que una persona conversa con Gestión Humana es reservado, para todos.']],
    mirada: {
      ve: 'Kevin pregunta por cariño y por miedo: si Rocío se va, ¿quién lo protege a él? La reserva no es frialdad: es la promesa que hace posible que cada persona confíe en Gestión Humana, incluida la que pregunta.',
      visual: { tipo: 'mensaje', titulo: 'Reserva y puerta abierta', txt: 'Lo que cada persona conversa con Gestión Humana es reservado, igual que lo tuyo. El jueves habrá un anuncio oficial. Si estás preocupado por tu puesto, conversemos.' },
    },
  },
  {
    id: 't6', t: '17:30', ch: 'whatsapp', who: 'ernesto', titulo: 'Los acuerdos por escrito', banner: 'assets/esc/escritorio.webp', lugar: 'Sede de Cayma', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>Ernesto se va a Characato a hablar con el jefe de agencia. Te pide: «Mándame el resumen de lo acordado con Rocío, que lo paso a Legal para la carta formal. <mark class="clave">Que no falte nada</mark>».</p>`,
    type: 'compose', enviaA: 'ernesto', para: 'Para: Ernesto Valdivia · Jefe de Gestión Humana', boton: 'Enviar el resumen',
    prompt: 'Arma el resumen eligiendo una frase de cada parte.',
    slots: [
      { id: 'oferta', t: 'La oferta', ops: [
        { id: 'o1', t: 'Se le ofreció la coordinación de créditos rurales y agrícolas, con la misma remuneración, reportando a la jefatura de créditos.', ok: true, por: 'Concreto y completo.' },
        { id: 'o2', t: 'Se le ofreció «algo en créditos».', ok: false, por: 'Nada de eso puede ir a una carta.' },
      ] },
      { id: 'pedido', t: 'Lo que pidió', ops: [
        { id: 'p1', t: 'Pidió todo por escrito, autonomía real sobre la cartera agrícola y comunicar ella misma a su equipo el jueves a las 8.', ok: true, por: 'Sus pedidos quedan registrados.' },
        { id: 'p2', t: 'Se puso emotiva, pero se le pasará.', ok: false, por: 'Es una opinión, no un acuerdo.' },
      ] },
      { id: 'plazo', t: 'El plazo', ops: [
        { id: 'z1', t: 'Tiene 48 horas, hasta el jueves a las 11. Si no acepta, se conversan otras opciones; no se cambia nada sin su acuerdo.', ok: true, por: 'Deja claro que el cambio no es unilateral.' },
        { id: 'z2', t: 'Si no responde, se entiende que acepta.', ok: false, por: 'El silencio no es aceptación de un cambio de categoría.' },
      ] },
    ],
    res: sel => {
      const mal = Object.values(sel).some(x => ['o2', 'p2', 'z2'].includes(x)), buenas = ['o1', 'p1', 'z1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: mal ? -4 : 3, confianza: q === 'buena' ? 2 : 0 }, rel: { ernesto: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['acuerdo_escrito'] : [], cartera: { rocio: q === 'buena' ? 'Oferta por escrito; respuesta el jueves a las 11' : 'Acuerdos incompletos' },
        out: q === 'buena' ? 'Ernesto responde desde la combi: «Perfecto. Legal lo tiene mañana a primera hora».' : mal ? 'Legal responde: «Con esto no podemos hacer una carta. Y eso del silencio como aceptación, ni hablar».' : 'Ernesto lo recibe. Legal tendrá que preguntarte detalles mañana.',
        pro: { ok: 'Oferta, pedidos y plazo, sin ambigüedades.', risk: 'Un acuerdo vago o el «silencio es aceptación» invalidan lo que se conversó.', info: 'Guarda copia del resumen en la carpeta restringida.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'indignado' : 'pensando', q === 'buena' ? '¡Todo por escrito, como ella pidió!' : mal ? '¡El silencio no firma nada!' : 'Faltan detalles.'],
      };
    },
    rules: [[LEY, 'Un cambio de categoría se acuerda; no se impone (D.S. 003-97-TR, art. 30 b).'], [BP, 'Lo que se acuerda en una conversación difícil se escribe el mismo día.']],
    mirada: {
      ve: 'Rocío pidió una sola cosa con insistencia: que todo quede por escrito. Lo que se acuerda de palabra en un día emotivo se olvida o se reinterpreta. Escribirlo bien es cumplir la primera promesa de la nueva etapa.',
      visual: { tipo: 'linea', titulo: 'Lo que viene con Rocío', hitos: [['Martes', 'Conversación y oferta'], ['Miércoles', 'Carta formal de Legal'], ['Jueves 8:00', 'Rocío habla con su equipo'], ['Jueves 11:00', 'Su respuesta']] },
    },
  },
];
