// Analista de Clima y Cultura · Capítulo 8 · «El desayuno» · Semana 2, miércoles.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales: los datos sensibles (entre ellos, los de salud) son objeto de
//   especial protección; arts. 6 y 7 (finalidad y proporcionalidad), ya citados en el capítulo 1.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Ley 27942 y su Reglamento, ya citados en los capítulos 5 y 6: el procedimiento reservado sigue su curso aparte.

export const CAP = {
  n: 8, titulo: 'El desayuno', dia: 'Semana 2, miércoles', foto: 'assets/foto/cafe.webp',
  lugar: 'AseguraPlus · Sala de reuniones del piso 6',
  inicio: '08:20', fin: '19:00', cierreHora: '18:50',
  apertura: 'Miércoles. A las diez te sientas con Gonzalo a trabajar el plan. Ayer anunció que traería «algo para levantar la moral». En el piso 6 ya corre el rumor: habrá desayuno con panes con chicharrón y polos con el logo.', boton: 'Subir al piso 6',
  kusi: 'Hoy toca distinguir lo que cambia algo de lo que solo se ve bonito en una foto.',
  lead: 'Escuchaste la idea de Gonzalo sin burlarte, la pasaste por los mismos criterios que tus acciones, sostuviste el cambio de la reunión de los lunes y lograste que lo bueno de su propuesta entrara al plan sin que el desayuno se volviera la solución.',
  reflexion: '¿Cuándo un gesto es una acción, y cuándo es solo un adorno?',
  siguiente: { n: 9, titulo: 'Comunicar', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan de acción de Siniestros', j: 'Sofía · Gonzalo', d: 0, e: 'Trabajo con Gonzalo hoy' },
  { id: 'lunes', p: 'Reunión de los lunes', j: 'Gonzalo · supervisores', d: 0, e: 'En discusión' },
  { id: 'sistema', p: 'Sistema de siniestros', j: 'TI', d: 0, e: 'Cambio de horario por aprobar' },
  { id: 'devolucion', p: 'Devolución al equipo', j: 'Cultura · Gonzalo', d: 0, e: 'Mañana' },
];

export const FUTURO = {
  rosa_aliada: ['Rosa Mamani, la supervisora más antigua, te contó cómo convencer a Gonzalo.', 'Será tu aliada en la devolución.'],
  lunes_cambia: ['Gonzalo aceptó que los errores se conversen en privado desde el próximo lunes.', 'Es la acción que más se va a notar.'],
  lunes_suave: ['La reunión de los lunes seguirá, pero «con más cuidado».', 'El equipo no notará la diferencia.'],
  desayuno_plan: ['El desayuno quedó como una acción principal del plan.', 'El comité verá fotos. El equipo verá lo de siempre.'],
  desayuno_conversatorio: ['El desayuno se transformó en un espacio mensual de preguntas abiertas con el gerente, como complemento.', 'Gonzalo siente que su idea entró.'],
  ficha_salud: ['Frenaste la ficha de salud mental del taller de «resiliencia».', 'Nadie tendrá que contar su medicación a un coach.'],
  plan_final: ['El plan final tiene tres acciones medibles y un complemento.', 'Lo presentará Gonzalo en el comité.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  hernan: { n: 'Hernán Díaz', sub: 'Supervisor de Siniestros', who: 'supervisor' },
  rosa: { n: 'Rosa Mamani', sub: 'Supervisora de Siniestros', c: '#B5651D' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'lucia', t: '08:30', de: 'Lucía', txt: '¿Es verdad que el plan es un desayuno? Aquí ya se están riendo. «Otra vez pan con chicharrón y foto.»' },
  { chat: 'rosa', t: '09:10', de: 'Rosa', txt: 'Si quieres que Gonzalo cambie lo de los lunes, no se lo pidas: muéstrale cuánto tiempo pierde.', si: 'rosa_aliada' },
  { chat: 'gonzalo', t: '13:20', de: 'Gonzalo', txt: 'Ya firmé lo de TI para mover el proceso a las 8. Que conste que eso salió de mi reunión con ustedes 😉', si: 'ti_cierre' },
  { chat: 'renzo', t: '14:00', de: 'Renzo', txt: 'Lo de la ficha de salud mental del taller me dio escalofríos. En la U justo vimos datos sensibles.', si: 'ficha_salud' },
  { chat: 'sofia', t: '18:10', de: 'Sofía', txt: 'Gonzalo me dijo «tu analista es terca». Viniendo de él, es un elogio.', si: 'lunes_cambia' },
];

export const CORREOS = [
  { t: '09:30', de: 'Gonzalo Ferreyra', para: 'Sofía Ledesma; Analista de Clima y Cultura', asunto: 'Propuesta «Siniestros Unido»', html: '<p>Les adelanto mi propuesta para incluir en el plan: desayuno de integración con todo el equipo, polos con el lema «Siniestros Unido» y un taller de resiliencia con un coach que conozco. Creo que la gente necesita sentirse parte de algo.</p><p>Gonzalo</p>' },
  { t: '17:50', de: 'Carmen Villavicencio', para: 'Analista de Clima y Cultura', asunto: 'Breve', html: '<p>Solo para que lo sepas: el procedimiento sigue en plazo y con las garantías para ambas partes. Si el Sr. Díaz te busca para hablar del tema, no lo atiendas y avísame. Gracias.</p>' },
];

export const QUIZ = [
  { q: 'Un gerente propone un desayuno como solución a un mal clima. Lo mejor es…', ops: ['Aceptarlo para no pelear', 'Preguntarle qué causa ataca y cómo se medirá', 'Burlarse en la reunión', 'Rechazarlo sin explicar'], ok: 1, por: 'Aplicar los mismos criterios a todas las propuestas deja que la persona vea por sí misma si es acción o adorno.' },
  { q: 'Un taller pide a cada participante su diagnóstico de salud mental y su medicación. Eso…', ops: ['Es buena práctica', 'Recoge datos sensibles sin necesidad y va contra la proporcionalidad', 'Es obligatorio', 'Solo es un tema del coach'], ok: 1, por: 'Los datos de salud son sensibles y tienen especial protección (Ley 29733).' },
  { q: '¿Cuándo puede servir un desayuno con el gerente?', ops: ['Nunca', 'Como complemento, si es un espacio para escuchar y no reemplaza las acciones de fondo', 'Como la acción principal', 'Solo si hay foto'], ok: 1, por: 'Un gesto puede sumar si acompaña cambios reales; no si los reemplaza.' },
  { q: 'Para convencer a un gerente de cambiar una práctica suya, suele funcionar mejor…', ops: ['Decirle que está mal', 'Mostrarle el costo que esa práctica tiene para sus propios objetivos', 'Pedírselo a su jefe', 'Esperar a que lo note'], ok: 1, por: 'Cuando el cambio también le sirve, el gerente lo defiende.' },
  { q: 'Un taller «obligatorio» de resiliencia un sábado, para un equipo agotado, comunica…', ops: ['Que la empresa los cuida', 'Que el problema son ellos y no las condiciones', 'Que habrá horas extra', 'Nada'], ok: 1, por: 'Pedirle al equipo que aguante más no ataca las causas del agotamiento.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:45', ch: 'presencial', who: null, titulo: 'Rosa, antes de la reunión', banner: 'assets/foto/mentora.webp', lugar: 'Cafetería del piso 3', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Rosa Mamani te espera en la cafetería con un mate de coca. Lleva veinte años en Siniestros; empezó archivando expedientes en papel. ${F.has('supervisores_escuchados') ? 'El lunes fue ella quien contó que la pantalla de los lunes la pide Gonzalo.' : 'El lunes casi no habló.'}</p><p>«Conozco a Gonzalo desde que era ajustador. <mark class="clave">Pregúntame lo que quieras antes de entrar</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Rosa.',
    opts: [
      { id: 'porque', label: '¿Por qué Gonzalo hace la reunión de los lunes así?', info: '«Porque a él lo formaron así. Su primer jefe lo exponía igual, y él cree que gracias a eso aprendió. Para él no es humillar: es “exigencia”.»' },
      { id: 'como', label: '¿Qué lo convence a él?', info: '«Los números. Si le dices que algo está mal, se defiende. Si le muestras cuántos casos se atrasan por eso, lo cambia al día siguiente.»' },
      { id: 'desayuno', label: '¿Qué piensa el equipo del desayuno?', info: '«Que es lo del año pasado. Pero ojo: si se hace bien, a la gente le gustaría hablar con Gonzalo sin que esté la pantalla.»' },
      { id: 'hernan', label: '¿Qué sabes de lo que pasa con Hernán?', info: 'Rosa te mira largo. «Eso no te lo voy a contestar, y tú tampoco deberías preguntarlo.» Tiene razón.' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('como') ? 3 : 1, calidad: picks.includes('porque') ? 2 : 0, etica: picks.includes('hernan') ? -3 : 0 },
      flags: picks.includes('hernan') ? [] : ['rosa_aliada'],
      out: picks.includes('hernan') ? 'Rosa se termina el mate en silencio y se despide. Perdiste una aliada por una pregunta que no te tocaba.' : 'Rosa se despide con una palmada: «Muéstrale el tiempo, no la culpa». Sacas tu laptop y buscas cuántos casos se reabren después de la reunión de los lunes.',
      kusi: picks.includes('hernan') ? ['preocupado', 'Esa pregunta no era tuya…'] : ['curioso', 'Una aliada vale más que diez diapositivas.'],
    }),
    mirada: {
      ve: 'Conocer la historia de un líder ayuda a entender sus prácticas sin justificarlas. Gonzalo repite lo que vivió. Mostrarle el costo con sus propios números le permite cambiar sin tener que admitir que «estaba mal».',
      visual: { tipo: 'flujo', titulo: 'De dónde viene la pantalla de los lunes', pasos: ['El jefe de Gonzalo lo exponía', 'Gonzalo lo llama «exigencia»', 'Lo repite con su equipo', 'El equipo lo vive como humillación'] },
    },
  },
  {
    id: 'd2', t: '10:10', ch: 'documento', who: null, titulo: '«Siniestros Unido»', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de reuniones del piso 6', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Gonzalo reparte su propuesta impresa, a color, con el logo de la empresa. Está orgulloso: la trabajó con su asistente hasta tarde. Sofía te pasa la hoja por debajo de la mesa con una sola palabra escrita a lápiz: «Revisa». <mark class="clave">Antes de opinar, léela con lupa</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o lo que no ataca ninguna causa.',
    doc: { t: 'Propuesta «Siniestros Unido»', sub: 'Gerencia de Siniestros · para incluir en el plan de acción' },
    lines: [
      { id: 'desay', t: 'Desayuno de integración con todo el equipo, con fotos para el Facebook interno.', bad: BP, why: 'No ataca ninguna de las causas: ni la reunión de los lunes, ni la carga, ni el reconocimiento.' },
      { id: 'polos', t: 'Polos con el lema «Siniestros Unido» para cada colaborador.', bad: BP, why: 'Un lema no cambia el trato. Puede leerse como «el problema es que no estamos unidos».' },
      { id: 'taller', t: 'Taller obligatorio de resiliencia, sábado de 8 a 1, con coach externo.', bad: BP, why: 'Le pide al equipo agotado que aguante más, en su día libre. Ataca a las personas, no a las causas.' },
      { id: 'ficha', t: 'Antes del taller, cada participante llena una ficha con su diagnóstico de salud mental y la medicación que toma.', bad: LEY, why: 'Los datos de salud son datos sensibles, con especial protección. Pedirlos para un taller no es necesario ni proporcional (Ley 29733).' },
      { id: 'reco', t: 'Reconocer cada mes los casos difíciles bien resueltos.' },
      { id: 'charla', t: 'Un desayuno mensual del gerente con grupos pequeños, para preguntas abiertas.', duda: 'Puede servir como espacio de escucha, si es voluntario, sin pantalla y no reemplaza las acciones de fondo.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? `Señalas ${hitsBp} cosas que no atacan causas, pero la ficha de salud se te pasa. El coach la enviará la próxima semana.` : 'Pones el dedo sobre la ficha de salud. Gonzalo frunce el ceño: «Eso lo pidió el coach». Sofía: «Entonces el coach no trabaja con nosotros». Se tacha.',
      flags: missLey ? [] : ['ficha_salud'], cartera: { plan: missLey ? 'Propuesta de Gonzalo revisada a medias' : 'Propuesta de Gonzalo revisada: una línea ilegal, dos ideas rescatables' },
      pro: { ok: 'Leer con lupa una propuesta ajena permite rescatar lo útil y frenar lo que daña.', risk: 'Una ficha de salud mental para un taller expone datos sensibles sin ninguna necesidad.', info: 'Dos líneas de su propuesta, el reconocimiento y el desayuno en grupos pequeños, son rescatables.' },
      kusi: missLey ? ['preocupado', 'La ficha de salud se escapó…'] : ['celebra', '¡Ojo de lince con los datos sensibles!'],
    }),
    rules: [[LEY, 'Ley 29733: los datos sensibles, como los de salud, son objeto de especial protección.'], [LEY, 'Ley 29733, art. 7: el tratamiento de datos debe ser adecuado, relevante y no excesivo.']],
    mirada: {
      ve: 'Las propuestas decorativas suelen traer escondido algo que sí importa: aquí, una ficha de salud mental que nadie había pensado. Y también algo rescatable: el reconocimiento y la idea de hablar con el gerente sin pantalla.',
      visual: { tipo: 'balanza', a: { t: 'Adorno', items: ['Desayuno con foto', 'Polos con lema', 'Taller el sábado'] }, b: { t: 'Rescatable', items: ['Reconocer casos difíciles', 'Conversación del gerente en grupos pequeños'] } },
      normas: [{ ley: 'Ley 29733, Ley de Protección de Datos Personales', dice: 'Los datos sensibles son objeto de especial protección, y todo tratamiento debe ser adecuado, relevante y no excesivo.', practica: 'Un taller de resiliencia no necesita saber qué medicación toma cada persona.' }],
    },
  },
  {
    id: 'd3', t: '10:50', ch: 'presencial', who: 'gerente', titulo: 'La reunión de los lunes', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de reuniones del piso 6', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => `<p>Llegan a la acción 1. Gonzalo apoya las dos manos en la mesa. «La reunión de los lunes es mi forma de controlar los plazos. Si no muestro quién se atrasó, nadie se apura. <mark class="clave">Eso no lo saco</mark>.» ${F.has('rosa_aliada') ? 'Tienes en tu laptop el dato que buscaste después de hablar con Rosa.' : ''}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrarle sus propios números: después de cada reunión de los lunes, los casos expuestos se reabren más por errores de apuro. Proponerle probar cuatro semanas: errores en privado, indicadores del equipo en pantalla, y medir.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3, personas: 3 }, rel: { gerente: 1 }, flags: ['lunes_cambia'], cartera: { lunes: 'Desde el lunes: errores en privado, prueba de 4 semanas' },
          out: 'Gonzalo mira el gráfico un buen rato. «¿Cuatro semanas?» «Cuatro. Y si los plazos empeoran, lo revisamos.» «Ya. Pero si empeoran, vuelvo a la pantalla.» Es un sí.',
          pro: { ok: 'Le muestras el costo para sus propios objetivos y le ofreces una prueba acotada, no una renuncia.', risk: 'Si los plazos empeoran por otra razón, culpará al cambio.', info: 'Una prueba con fecha de revisión es más fácil de aceptar que un cambio «para siempre».' },
          kusi: ['celebra', '¡Con sus números y con una prueba! Así se cambia.'] } },
      { id: 'b', label: 'Ceder: la reunión sigue igual, pero con el compromiso de que los supervisores «tengan más tacto».',
        res: { q: 'riesgosa', fx: { calidad: -4, personas: -3 }, rel: { gerente: 1 }, flags: ['lunes_suave'], cartera: { lunes: 'Sigue igual, «con más tacto»' },
          out: 'Gonzalo sonríe. La acción 1 queda escrita como «reuniones con mayor tacto». El lunes, el nombre de alguien volverá a aparecer en la pantalla.',
          pro: { ok: 'Evitas el choque.', risk: 'La causa que más pesa en el clima del área queda intacta.' },
          kusi: ['triste', 'Era la acción con más palanca…'] } },
      { id: 'c', label: 'Decirle que si no cambia la reunión, Cultura informará en el comité que el gerente se negó.',
        res: { q: 'aceptable', fx: { calidad: 2, confianza: -4 }, rel: { gerente: -1 }, flags: ['lunes_cambia'],
          out: 'Gonzalo acepta, con la mandíbula apretada. «Ya. Pero quedo como el malo.» Cambiará la reunión, y te lo cobrará en cada reunión que venga.',
          pro: { ok: 'Consigues el cambio.', risk: 'Un cambio por amenaza se sostiene mientras alguien vigila.' },
          kusi: ['pensando', 'Ganaste hoy. ¿Y mañana?'] } },
    ],
    rules: [[BP, 'Un cambio de práctica se negocia mejor como prueba acotada y medida que como renuncia.']],
    mirada: {
      ve: 'Las prácticas que dañan el clima suelen tener una lógica para quien las sostiene: aquí, controlar plazos. Atacar la lógica no funciona; mostrar que esa práctica perjudica justamente lo que el gerente quiere cuidar, sí.',
      visual: { tipo: 'cambio', titulo: 'La reunión de los lunes', pares: [['Nombre del atrasado en pantalla', 'Indicadores del equipo en pantalla'], ['Error expuesto delante de todos', 'Error conversado en privado'], ['Para siempre', 'Prueba de 4 semanas con medición']] },
    },
  },
  {
    id: 'd4', t: '11:40', ch: 'documento', who: null, titulo: 'Lo que entra al plan', banner: 'assets/esc/decide.webp', lugar: 'Sala de reuniones del piso 6', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Queda media hora. ${F.has('lunes_cambia') ? 'La acción 1 está salvada.' : 'La acción 1 quedó débil.'} Gonzalo pregunta: «¿Y qué de lo mío entra?». Es una pregunta legítima: <mark class="clave">un plan donde nada suyo entra es un plan que no defenderá</mark>. El comité acepta tres acciones y un complemento.</p>`,
    type: 'pick', n: 4, prompt: 'Elige las cuatro piezas del plan final.', boton: 'Cerrar el plan', resumen: 'El plan final tiene',
    cols: ['Pieza', 'De dónde viene'],
    rows: [
      { id: 'lunes', cells: ['Errores en privado; indicadores del equipo en pantalla', 'Tu borrador'] },
      { id: 'ti', cells: ['Mover la conciliación a las 8 p. m. y medir cierres tardíos', 'Tu borrador, firmado por Gonzalo'] },
      { id: 'reco', cells: ['Reconocimiento semanal de casos difíciles bien resueltos', 'Tu borrador y la propuesta de Gonzalo'] },
      { id: 'charla', cells: ['Desayuno mensual de Gonzalo con grupos pequeños, voluntario y sin pantalla (complemento)', 'Propuesta de Gonzalo, transformada'] },
      { id: 'desay', cells: ['Desayuno de integración con fotos, como acción principal', 'Propuesta de Gonzalo'] },
      { id: 'taller', cells: ['Taller de resiliencia el sábado', 'Propuesta de Gonzalo'] },
    ],
    score: { lunes: 3, ti: 3, reco: 2, charla: 2, desay: -3, taller: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, confianza: picks.includes('charla') || picks.includes('reco') ? 3 : -1 }, rel: { gerente: picks.includes('charla') ? 1 : 0 },
        flags: [...(picks.includes('desay') ? ['desayuno_plan'] : []), ...(picks.includes('charla') ? ['desayuno_conversatorio'] : []), ...(q === 'buena' ? ['plan_final'] : [])],
        cartera: { plan: q === 'buena' ? 'Plan final: 3 acciones medibles + complemento' : 'Plan con adornos' },
        out: q === 'buena' ? 'Gonzalo lee la página final. «El desayuno se quedó, pero distinto.» «Se quedó para escucharlos, no para la foto.» Por primera vez, se ríe: «Ya. Sin foto».' : picks.includes('desay') ? 'El desayuno con fotos queda como acción principal. Gonzalo está feliz. El comité verá una foto bonita en la próxima presentación.' : 'El plan tiene huecos o piezas que no atacan causas.',
        pro: { ok: 'Transformar la idea del gerente en algo útil hace que el plan también sea suyo, sin que el adorno reemplace a la acción.', risk: 'Si el desayuno es la acción principal, el equipo confirmará que «otra vez no pasa nada».', info: 'Un complemento bien diseñado puede ser el espacio donde el gerente escuche sin pantalla.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Su idea entró, pero al servicio del plan!' : 'Revisa qué pieza ataca qué causa.'],
      };
    },
    mirada: {
      ve: 'Rechazar todo lo que propone un gerente garantiza que no defienda el plan. Aceptar todo garantiza que el plan sea decorativo. El trabajo fino está en transformar su idea en algo que sume sin reemplazar lo de fondo.',
      visual: { tipo: 'embudo', titulo: 'De la propuesta al plan', niveles: [['Ideas en la mesa', 6], ['Atacan una causa', 4], ['En el plan final', 4]] },
    },
  },
  {
    id: 'd5', t: '16:30', ch: 'presencial', who: 'supervisor', titulo: 'Hernán en el pasillo', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo del piso 6', show: ['etica', 'confianza'],
    body: (n, F) => `<p>Al salir del baño te cruzas con Hernán. Está más delgado que la semana pasada y tiene ojeras. ${F.has('lunes_cambia') ? '«Me dicen que desde el lunes los errores se ven en privado. ¿Eso es por mí?»' : '«Me dicen que van a cambiar cosas en el área.»'} Baja la voz: «<mark class="clave">Y lo otro… tú sabes de qué hablo. ¿Me puedes decir algo?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que el cambio de los lunes es para todos los supervisores y que viene del plan del área; y que de lo otro no puedes hablar, que lo vea con quien lleva el procedimiento.',
        res: { q: 'buena', fx: { etica: 5, personas: 1 }, rel: { supervisor: 0 },
          out: 'Hernán asiente sin mirarte. «Ya. Gracias por no mentirme.» Se va. Le escribes a la Dra. Villavicencio, como te pidió: «Hernán me buscó; no hablé del tema».',
          pro: { ok: 'Separas lo que es del clima de lo que es del procedimiento, y avisas al canal.', risk: 'Él sigue con su angustia, pero no es tu rol aliviarla con información.', info: 'El denunciado también tiene derecho a defenderse en el procedimiento; por eso no se le «adelanta» nada por pasillo.' },
          kusi: ['animo', 'Clara, humana y sin cruzar carriles.'] } },
      { id: 'b', label: 'Decirle, por compasión, que «está todo en investigación, que tranquilo, que seguro sale bien».',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 },
          out: '«¿Sale bien? ¿O sea que no hay pruebas?» Hernán se queda con una frase tuya que puede usar. La Dra. Villavicencio no estará contenta.',
          pro: { ok: 'Te nace ser amable.', risk: 'Cualquier opinión sobre el procedimiento, en cualquier sentido, lo contamina.' },
          kusi: ['preocupado', 'Hasta un «tranquilo» dice algo.'] } },
    ],
    rules: [[BP, 'Quien no lleva el procedimiento no opina sobre él, ni a favor ni en contra.']],
    mirada: {
      ve: 'El presunto hostigador también es una persona con miedo, y eso puede despertar compasión. Por eso las reglas de reserva son iguales para todos: protegen a la víctima, a quien informó y también el derecho de defensa del denunciado.',
      visual: { tipo: 'mensaje', titulo: 'Lo que puedes decir', txt: '«El cambio de los lunes es para todos los supervisores. De lo otro no puedo hablar: eso lo ves con quien lleva el procedimiento.»' },
    },
  },
  {
    id: 'd6', t: '17:20', ch: 'whatsapp', who: 'colaboradora', titulo: '¿Es solo un desayuno?', banner: 'assets/foto2/tablet-equipo.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Lucía te vuelve a escribir: «Me dicen que salió humo blanco del piso 6. ${F.has('desayuno_plan') ? 'Y que hay desayuno con fotos.' : 'Pero nadie sabe qué.'} <mark class="clave">¿Nos van a contar o nos enteramos por el chisme?</mark>»</p><p>La devolución al equipo es mañana. No puedes adelantar el plan, pero tampoco dejarla con el chisme.</p>`,
    type: 'compose', enviaA: 'lucia', para: 'Para: Lucía Ramos · Siniestros', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'cuando', t: 'Cuándo se enteran', ops: [
        { id: 'c1', t: 'Mañana a las 4 habrá una reunión con toda el área para contarles lo que dijeron y qué se hará.', ok: true, por: 'Fecha clara: corta el chisme.' },
        { id: 'c2', t: 'Pronto les contaremos.', ok: false, por: 'Vago: alimenta el rumor.' },
      ] },
      { id: 'que', t: 'Qué adelantas', ops: [
        { id: 'q1', t: 'No te puedo adelantar el plan antes que al resto, pero sí te digo que no es solo un desayuno.', ok: true, por: 'Le das tranquilidad sin privilegiarla.' },
        { id: 'q2', t: 'Te cuento: los errores se verán en privado y se mueve el proceso del sistema. No lo digas.', ok: false, por: 'Le das información antes que a su equipo; si se filtra, ella queda como la que «sabía».' },
      ] },
      { id: 'pide', t: 'Qué le pides', ops: [
        { id: 'p1', t: 'Si quieres, mañana trae una pregunta: va a haber espacio para preguntar sin nombres.', ok: true },
        { id: 'p2', t: 'Ayúdame a calmar a la gente.', ok: false, por: 'No es su tarea, y la expone.' },
      ] },
    ],
    res: sel => {
      const fuga = sel.que === 'q2', buenas = ['c1', 'q1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = fuga ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, etica: fuga ? -3 : 1, confianza: q === 'buena' ? 2 : 0 }, rel: { colaboradora: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Lucía responde: «Ok. Mañana a las 4 entonces. Igual llevo mi pregunta». Media hora después, el grupo de WhatsApp de Siniestros (en el que no estás) ya tiene la hora.' : fuga ? 'Lucía se lo cuenta a Milagros «en confianza». A las 7, medio piso sabe el plan antes que el gerente lo anuncie.' : 'Lucía responde con un «ya». El chisme sigue.',
        pro: { ok: 'Dar una fecha y decir «no puedo adelantarte» con honestidad corta el rumor sin privilegiar a nadie.', risk: 'Adelantar el plan a una persona la vuelve vocera sin quererlo.', info: 'Invitar a traer preguntas anticipa una devolución participativa.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Fecha clara, rumor apagado.' : 'Ojo con los adelantos.'],
      };
    },
    rules: [[BP, 'La devolución se hace a todo el equipo a la vez; nadie se entera antes por canales informales.']],
    mirada: {
      ve: 'Entre la decisión y la comunicación oficial siempre hay un vacío, y el chisme lo llena. Dar una fecha concreta es la manera más simple de cerrarlo.',
      visual: { tipo: 'linea', titulo: 'Del plan al equipo', hitos: [['Hoy 11:40', 'Plan cerrado con Gonzalo'], ['Hoy 17:20', 'Lucía pregunta'], ['Mañana 16:00', 'Devolución a toda el área'], ['Viernes', 'Comité']] },
    },
  },
];
