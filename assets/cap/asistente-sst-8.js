// Asistente de SST · Capítulo 8 · «La víspera» · Semana 2, miércoles.
// Hilo de las dos semanas: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas (Norma G.050, Seguridad durante la construcción, D.S. 010-2009-VIVIENDA):
// - Elementos del plan de SST de la obra: procedimientos de trabajo para las actividades de alto riesgo y plan de respuesta
//   ante emergencias (puntos 4.4 y 4.8).
// - Punto 20: debajo de los trabajos en altura se evita la circulación de personas, con acordonamiento y señalización
//   «CAÍDA DE OBJETOS - NO PASAR».
// - Anexo J.2: el permiso de trabajo en altura es diario y se revisa antes de empezar (capítulo 4).
// - Las operaciones de izaje se suspenden con vientos superiores a 80 km/h (se menciona solo como referencia de izaje; para la
//   bomba de concreto manda el manual del fabricante).
//   Texto de la norma: https://buenaventura.com/wp-content/uploads/2024/10/NORMA-G.050-Seguridad-durante-la-construccion-DS-N°-010-2009.pdf
// - Acuerdos del comité de SST (capítulo 7).

export const CAP = {
  n: 8, titulo: 'La víspera', dia: 'Semana 2, miércoles', foto: 'assets/esc/reloj.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '07:00', fin: '18:40', cierreHora: '18:20',
  apertura: 'Miércoles. Mañana se vacía el piso 12. Hoy se decide si ese día sale bien.', boton: 'Empezar la víspera',
  kusi: 'Los trabajos críticos se ganan la víspera. ¡Hoy se prepara todo!',
  lead: 'Averiguaste el límite de viento de la bomba, corregiste el plan de vaciado, practicaste un rescate, cuidaste el descanso de Jhonatan, negociaste qué pasa si hay que parar y dejaste lista la obra para las 5:30.',
  reflexion: '¿Qué parte de un trabajo crítico se decide antes de empezarlo?',
  siguiente: { n: 9, titulo: 'El vaciado', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'piso12', p: 'Vaciado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Mañana' },
  { id: 'plan', p: 'Plan de vaciado', j: 'Oficina técnica', d: 0, e: 'Borrador de Renzo' },
  { id: 'rescate', p: 'Rescate en altura', j: 'Ingrid · SSOMA', d: 0, e: 'Simulacro hoy 10:00' },
  { id: 'viento', p: 'Viento y bomba de concreto', j: 'Operador de la bomba', d: 0, e: 'Límite sin confirmar' },
  { id: 'comite', p: 'Acuerdos del comité', j: 'Marleny · Trabajadores', d: 0, e: 'Agua, guardas, rescate' },
  { id: 'accidente', p: 'Jhonatan', j: 'Ingrid · SSOMA', d: 0, e: 'Descanso médico hasta el viernes' },
];

export const FUTURO = {
  anemometro: ['Conseguiste un anemómetro y adelantaste el inicio a las 5:30 para terminar antes del viento de la tarde.', 'Mañana tendrás un número, no una impresión. Capítulo 9.'],
  a_ojo: ['El viento de mañana se medirá «a ojo».', 'Capítulo 9.'],
  plan_corregido: ['El plan de vaciado tiene zona de exclusión, relevos, rescate y permiso antes de empezar.', 'Capítulo 9.'],
  rescate_practicado: ['El simulacro mostró que la obra puede bajar a alguien colgado en pocos minutos.', 'Capítulo 9.'],
  junta_prevista: ['El ingeniero estructural marcó dónde se puede cortar el vaciado si hay que parar.', 'Parar mañana no arruina la losa. Capítulo 9.'],
  terminar_igual: ['Aceptaste que «si viene viento, se termina igual».', 'Mañana a las dos de la tarde lo vas a lamentar. Capítulo 9.'],
  jhonatan_descansa: ['Convenciste a Jhonatan de terminar su descanso médico.', 'Te escribirá mañana para saber cómo va. Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  comite: { n: 'Comité SST · Los Algarrobos', sub: '6 miembros y tú', c: '#2F6B3F' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  jhonatan: { n: 'Jhonatan Ñique', sub: 'Ayudante de obra', who: 'jhonatan' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
};

export const WSP = [
  { chat: 'comite', t: '06:45', de: 'Rocío', txt: 'El agua para los pisos altos llega a las 9: dos bidones por piso 💧', si: 'acta_enviada' },
  { chat: 'grupo', t: '06:50', de: 'Ingrid', txt: 'Simulacro de rescate a las 10 en el piso 11. Trae el cronómetro.' },
  { chat: 'renzo', t: '08:10', de: 'Renzo', txt: 'Te mando el plan de vaciado. El cliente lo quiere aprobado hoy.' },
  { chat: 'renzo', t: '08:12', de: 'Renzo', txt: 'Y ya sé que el acta dice lo que dice. Lo vamos a cumplir. No me lo recuerdes.', si: 'acuerdo_condiciones' },
  { chat: 'jhonatan', t: '12:05', de: 'Jhonatan', txt: 'Ingeniera, estoy en la puerta. ¿Puedo pasar un ratito? 🙏' },
];

export const CORREOS = [
  { t: '07:00', de: 'Ing. Renzo Cáceres', para: 'SSOMA · Oficina técnica · Supervisión del cliente', asunto: 'Vaciado losa piso 12 · jueves', html: '<p>Se confirma el vaciado de la losa del piso 12 para mañana jueves, con bomba pluma y 20 personas. Concreto premezclado desde las 8:00.</p><p>Se adjunta el plan de trabajo. Les pido observaciones antes de las 12:00.</p><p>Renzo Cáceres · Residente de obra</p>' },
];

export const QUIZ = [
  { q: 'Según la Norma G.050, ¿qué debe incluir el plan de seguridad de una obra para las actividades de alto riesgo?', ops: ['Solo fotos', 'Procedimientos de trabajo y un plan de respuesta ante emergencias', 'La firma del cliente', 'Nada especial'], ok: 1, por: 'La G.050 lista entre los elementos del plan los procedimientos para actividades de alto riesgo y el plan de respuesta ante emergencias.' },
  { q: 'Debajo de un trabajo en altura, como el de la pluma de una bomba, se debe…', ops: ['Permitir el paso con cuidado', 'Acordonar y señalizar para evitar la circulación de personas', 'Poner a los ayudantes a esperar', 'Nada'], ok: 1, por: 'La G.050 pide evitar la circulación bajo los trabajos en altura, con cintas y letreros de caída de objetos.' },
  { q: 'Si alguien queda suspendido de su arnés, ¿qué es lo más importante?', ops: ['Esperar a los bomberos', 'Rescatarlo rápido y de forma controlada, con un plan practicado', 'Que se suelte solo', 'Tomarle una foto'], ok: 1, por: 'Quedar colgado del arnés es peligroso aunque la caída se haya detenido: el rescate debe estar planificado y practicado.' },
  { q: '¿Quién define el límite de viento para operar la pluma de una bomba de concreto?', ops: ['El maestro de obra a ojo', 'El fabricante, en el manual del equipo', 'El cliente', 'Nadie'], ok: 1, por: 'Los límites de operación de un equipo los fija su fabricante; el operador debe conocerlos y medir.' },
  { q: 'Si hay que parar un vaciado, ¿qué permite hacerlo sin arruinar la losa?', ops: ['Nada: se termina siempre', 'Una junta de construcción prevista por el ingeniero estructural', 'Echar agua', 'Dejarlo para el lunes sin aviso'], ok: 1, por: 'Prever dónde se puede cortar le quita al «hay que terminar» su principal argumento.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'v1', t: '07:10', ch: 'llamada', who: null, titulo: '¿Cuánto viento aguanta la pluma?', banner: 'assets/foto/llamada.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Amanece con brisa. En el celular, el pronóstico dice viento moderado del sur en la tarde, con ráfagas. ${F.has('viento_bomba') ? 'Marleny dijo en el comité que el operador de la bomba sabe el límite de su máquina, pero nadie le pregunta.' : 'Nadie en la obra sabe cuánto viento aguanta la pluma de la bomba.'}</p><p>Antes de leer el plan de Renzo, haces tres llamadas. <mark class="clave">Un trabajo crítico no se planifica con «más o menos»</mark>.</p>`,
    type: 'calls',
    calls: [['Ángel Vásquez · operador de la bomba pluma (Trujillo)', 'Contesta mientras maneja', '«El manual tiene una tabla de viento, ingeniera. Pasado ese límite, la pluma no se despliega o se recoge. Yo lo mido con el anemómetro de la cabina… que está malogrado desde agosto.»'], ['Ing. Ingrid Delgado', 'Contesta desde el piso 11', '«No tenemos anemómetro en obra. Uno de mano cuesta poco y en Chiclayo lo venden en la avenida Balta. Si lo quieres para mañana, cómpralo hoy.»'], ['Planta de concreto premezclado', 'Contesta la programadora', '«Los mixers pueden salir desde las 5:30 si me confirman hoy antes de las 4. Pero si se cancela con el concreto en camino, se pierde la carga.»']],
    prompt: '¿Qué control propones para el viento?',
    choices: [
      { id: 'a', label: 'Comprar hoy un anemómetro de mano, pedirle a Ángel la tabla del manual y proponer empezar a las 5:30 para terminar antes de las ráfagas de la tarde.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 4, tiempo: -2 }, flags: ['anemometro'], cartera: { viento: 'Anemómetro comprado; límite del manual; inicio 5:30' },
          out: 'A las 11 tienes en la mano un anemómetro amarillo que costó menos que un almuerzo para seis. Ángel te manda por WhatsApp la foto de la tabla del manual. Ya hay un número.',
          pro: { ok: 'Conviertes una sensación en una medida y mueves el horario hacia las horas sin viento.', info: 'Avisa a la planta antes de las 4 para que los mixers salgan a las 5:30.' },
          kusi: ['celebra', '¡Ya no es «a ojo»! Qué bacán.'] } },
      { id: 'b', label: 'Confiar en la experiencia de Ángel y de Don Segundo: si sopla mucho, lo van a notar.',
        res: { q: 'riesgosa', fx: { calidad: -3, cumplimiento: -3 }, flags: ['a_ojo'], cartera: { viento: 'Viento «a ojo»' },
          out: 'Ángel dice que sí, que él se da cuenta. Don Segundo también. Ninguno de los dos podrá decir un número mañana a las dos de la tarde.',
          pro: { ok: 'Respetas la experiencia de quienes operan.', risk: 'Sin una medida, la decisión de parar será una discusión entre opiniones, y la opinión del que tiene más prisa suele ganar.' },
          kusi: ['preocupado', '¿Y cuándo es «mucho»?'] } },
    ],
    rules: [[BP, 'Los límites de operación de un equipo los fija su fabricante: se conocen, se miden y se escriben en el plan.'], [LEY, 'Norma G.050: las operaciones de izaje se suspenden con vientos superiores a 80 km/h. Para otros equipos, como la bomba pluma, manda el manual del fabricante.']],
    mirada: {
      ve: 'Un criterio de parada solo sirve si se puede medir. «Si sopla mucho, paramos» deja la decisión a quien tenga más presión ese día. Un anemómetro y una tabla del fabricante convierten la discusión en un dato.',
      visual: { tipo: 'cambio', titulo: 'De la impresión al dato', pares: [['«Si sopla mucho, paramos»', 'Límite del manual de la bomba'], ['Anemómetro malogrado', 'Anemómetro de mano en obra'], ['Inicio 8:00', 'Inicio 5:30, antes de las ráfagas']] },
    },
  },
  {
    id: 'v2', t: '08:40', ch: 'documento', who: null, titulo: 'El plan de Renzo', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de obra', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>El plan de vaciado tiene cuatro páginas y un cronograma en Excel con celdas de colores.${F.has('acuerdo_condiciones') ? ' Lo lees con el acta del comité al lado.' : F.has('acta_suavizada') ? ' El acta del comité solo «recomienda»; el plan no menciona el viento.' : ''}</p><p>Renzo quiere observaciones antes de las 12. <mark class="clave">Lo que no esté en este papel, mañana no va a existir</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que falta o debe corregirse en el plan de vaciado.',
    doc: { t: 'Plan de trabajo · Vaciado de losa piso 12', sub: 'Oficina técnica · Edificio Los Algarrobos · versión 1' },
    lines: [
      { id: 'horario', t: 'Horario: inicio 8:00, fin «al término del vaciado».', bad: BP, why: 'Empezar a las 8 lleva el trabajo a las horas de viento, y «al término» deja la jornada sin límite para veinte personas.' },
      { id: 'exclusion', t: 'Zona bajo la pluma: «tener cuidado».', bad: LEY, why: 'La G.050 pide evitar la circulación bajo los trabajos en altura, con acordonamiento y señalización.' },
      { id: 'rescate', t: 'Emergencias: «llamar al 116».', bad: LEY, why: 'La G.050 pide un plan de respuesta ante emergencias. Los bomberos no llegan a tiempo para bajar a alguien colgado en el piso 12: hace falta un rescate propio y practicado.' },
      { id: 'permiso', t: 'Permiso de trabajo en altura: se firmará al finalizar la jornada.', bad: LEY, why: 'El permiso se revisa y se firma antes de empezar, cada día (Anexo J.2 de la G.050).' },
      { id: 'bomba', t: 'Bomba pluma con certificado de operatividad vigente y operador acreditado.' },
      { id: 'relevos', t: 'Personal: 20 personas, sin relevos ni horario de refrigerio.', bad: BP, why: 'Catorce horas sin descanso es fatiga, y la fatiga es un peligro más en el borde.' },
      { id: 'parada', t: 'Criterios para detener el vaciado: no se indican.', bad: BP, why: 'Sin criterios escritos, parar será una discusión. El comité ya acordó cuáles son.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Mandas observaciones sobre el horario y los relevos. Renzo las acepta rápido. Algo importante se quedó igual.' : `Devuelves el plan con ${hitsLey} observaciones legales y tres de buenas prácticas. La oficina técnica lo corrige al mediodía: zona de exclusión de 10 metros, rescate propio, permiso antes de empezar, dos turnos con refrigerio y criterios de parada.`,
      flags: missLey ? [] : ['plan_corregido'], rel: {},
      cartera: { plan: missLey ? 'Plan con vacíos' : 'Plan versión 2: exclusión, rescate, permiso, relevos, parada' },
      pro: { ok: 'Un procedimiento de trabajo de alto riesgo dice quién, cuándo, cómo, cuándo se para y qué se hace si algo falla.', risk: '«Llamar al 116» no es un plan de rescate en un piso 12.', info: 'Que el plan cite el acta del comité le da fuerza a los criterios de parada.' },
      kusi: missLey ? ['preocupado', '¿Y si alguien queda colgado?'] : ['celebra', '¡Un plan que se puede cumplir!'],
    }),
    rules: [[LEY, 'Norma G.050: el plan de la obra incluye procedimientos para las actividades de alto riesgo y un plan de respuesta ante emergencias.']],
    mirada: {
      ve: 'El plan de un trabajo crítico se escribe pensando en lo que puede salir mal: quién está debajo, qué pasa si alguien queda colgado, cuándo se para. Si eso no está escrito el día anterior, el día del trabajo se improvisa bajo presión.',
      visual: { tipo: 'flujo', titulo: 'Un plan de vaciado', pasos: ['Horario sin viento', 'Zona de exclusión', 'Permiso antes de empezar', 'Relevos y refrigerio', 'Criterios de parada', 'Rescate propio'] },
      normas: [{ ley: 'Norma G.050, puntos 4.4, 4.8 y 20', dice: 'El plan de la obra incluye procedimientos para actividades de alto riesgo y un plan de respuesta ante emergencias. Bajo los trabajos en altura se evita la circulación, con cintas y letreros de caída de objetos.', practica: 'Bajo la pluma de la bomba no pasa nadie, y el rescate del piso 12 no depende de los bomberos.' }],
    },
  },
  {
    id: 'v3', t: '10:00', ch: 'presencial', who: 'ingrid', titulo: 'El simulacro', banner: 'assets/esc/escalera.webp', lugar: 'Piso 11, borde de losa', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('rescate_pendiente') ? 'En el comité nadie supo decir quién baja a alguien colgado. Hoy se practica.' : 'Ingrid leyó el acta y vio que nadie sabía cómo rescatar a alguien colgado. Hoy se practica.'} Teodoro hace de víctima: queda suspendido de su arnés bajo el borde del 11, a un metro y medio de la losa del 10, con una línea de seguridad extra por si acaso. Hay diez obreros mirando.</p><p>Ingrid tiene el cronómetro. «Tú diriges.» <mark class="clave">Cada minuto colgado cuenta</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del rescate.', boton: 'Iniciar el simulacro',
    items: [
      { id: 'alarma', t: 'Dar la alarma por radio y llamar al equipo de rescate', por: 'Todos saben que hay una emergencia y quién responde.' },
      { id: 'hablar', t: 'Hablar con Teodoro y pedirle que mueva las piernas', por: 'Saber si está consciente y ayudar a la circulación mientras llega la ayuda.' },
      { id: 'equipo', t: 'Llevar el equipo de descenso al punto de anclaje, enganchados', por: 'Nadie se convierte en segunda víctima.' },
      { id: 'bajar', t: 'Descenderlo de forma controlada hasta la losa del 10', por: 'Rápido, pero sin tirones.' },
      { id: 'auxilios', t: 'Primeros auxilios y evaluación en el tópico', por: 'Aunque «se sienta bien».' },
      { id: 'registro', t: 'Anotar el tiempo y lo que falló, y corregirlo antes de mañana', por: 'Un simulacro sirve por lo que se aprende.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 4 : 0, tiempo: -1 }, rel: { ingrid: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['rescate_practicado'], cartera: { rescate: q === 'buena' ? 'Simulacro: 6 minutos; falta una cuerda más larga' : 'Simulacro con desorden; repetir' },
        out: q === 'buena' ? 'Seis minutos y diez segundos. Teodoro baja riéndose: «Ya, ya, sí aguanta el arnés». Encuentran un problema: la cuerda de descenso es corta para el borde del 12. Ingrid pide otra para la tarde.' : q === 'aceptable' ? 'Lo bajan en once minutos. Dos rescatistas se desengancharon para alcanzarlo más rápido. Ingrid lo anota en rojo.' : 'El equipo de descenso estaba en el almacén con llave. Pasan dieciocho minutos antes de que Teodoro toque la losa.',
        pro: { ok: 'Un rescate practicado convierte un plan en algo que la gente sabe hacer.', risk: 'Si el equipo de rescate no está a mano o se desengancha, el rescate crea una segunda víctima.', info: 'Repetir el simulacro con la cuerda nueva vale la pena antes de mañana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Seis minutos! Y encontraron lo que faltaba.' : 'Practicar es encontrar lo que falla.'],
      };
    },
    rules: [[LEY, 'Norma G.050, punto 4.8: el plan de la obra incluye un plan de respuesta ante emergencias.'], [BP, 'Un trabajador suspendido de su arnés necesita un rescate rápido y planificado: no basta con que la caída se haya detenido.']],
    mirada: {
      ve: 'El arnés detiene la caída, pero no termina la emergencia: alguien colgado necesita que lo bajen pronto. Por eso el rescate se planifica y se practica antes del trabajo, cuando nadie está en riesgo y se puede descubrir que la cuerda es corta.',
      visual: { tipo: 'linea', titulo: 'El simulacro', hitos: [['0:00', 'Alarma'], ['0:40', 'Hablarle a Teodoro'], ['3:00', 'Equipo en el anclaje'], ['6:10', 'En la losa del 10']] },
    },
  },
  {
    id: 'v4', t: '12:10', ch: 'presencial', who: 'jhonatan', titulo: '«Aunque sea a pasar herramientas»', banner: 'assets/foto2/pasillo.webp', lugar: 'Portón de la obra', show: ['personas', 'etica'],
    body: (n, F) => `<p>Jhonatan está en el portón con la mano vendada y la mochila al hombro. Vino en combi desde Monsefú. Su descanso médico vence el viernes.</p><p>«Ingeniera, mañana es el vaciado del 12. Todos van a estar. <mark class="clave">Déjeme venir, aunque sea a pasar herramientas con la otra mano</mark>. En mi casa no alcanza.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que no: su mano necesita terminar el descanso, sus días están pagados y el lunes lo esperan. Invitarlo a ver el vaciado desde la vereda de enfrente si quiere.',
        res: { q: null, fx: { personas: 3, etica: 3 }, rel: { jhonatan: 1 }, flags: ['jhonatan_descansa'], cartera: { accidente: 'Jhonatan termina su descanso médico' },
          out: 'Jhonatan mira la venda. «¿Seguro que me pagan los días?» «Seguro. Ingrid lo confirmó con planillas.» Se va con un «gracias» bajito. Antes de doblar la esquina, se voltea: «Mañana le escribo para saber cómo va».', kusi: ['feliz', 'Lo cuidaste incluso de sus ganas de ayudar.'] } },
      { id: 'b', label: 'Dejarlo venir mañana a una tarea liviana en el almacén, para que no se sienta excluido.',
        res: { q: null, fx: { personas: 1, etica: -3, cumplimiento: -3 }, cartera: { accidente: 'Jhonatan vendrá con descanso médico vigente' },
          out: 'Jhonatan sonríe. Ingrid se entera en la tarde y te llama: «Tiene descanso médico. Si se golpea la mano en el almacén, ¿quién responde?». Tienes que llamarlo de nuevo para decirle que no.', kusi: ['pensando', 'Buena intención… mal momento.'] } },
    ],
    rules: [[BP, 'Un descanso médico se respeta, aunque el trabajador quiera volver antes: la recuperación también es prevención.']],
    mirada: { ve: 'Muchos trabajadores de obra viven del jornal y sienten que un día sin trabajar es un día sin comer. Explicarle que sus días están cubiertos es tan importante como decirle que no venga.' },
  },
  {
    id: 'v5', t: '15:00', ch: 'presencial', who: null, titulo: '«Si viene viento, terminamos igual»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de obra', show: ['etica', 'cumplimiento', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Renzo, Ingrid, Don Segundo y la ingeniera Patricia Salazar, de la supervisión del cliente, alrededor del plano.${F.has('auditoria_honesta') ? ' Patricia te saluda por tu nombre: se acuerda de tu hoja de arneses.' : ''} Ya se aprobó el horario de las 5:30.</p><p>Renzo: «Una cosa clara: una losa no se deja a medias. <mark class="clave">Si viene el viento a la una, terminamos igual</mark>. Una junta fría en el 12 nos cuesta más que cualquier cosa».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer que el ingeniero estructural defina hoy dónde se puede cortar el vaciado con una junta de construcción, para que parar mañana sea posible sin dañar la losa.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 5, confianza: 3, tiempo: -1 }, flags: ['junta_prevista'], cartera: { plan: 'Junta de construcción prevista en el eje 5' },
          out: 'Patricia asiente: «Eso es lo técnico». Renzo llama al estructural; a las 5 llega un plano con una línea roja en el eje 5. Don Segundo lo mira y dice: «Ahí se puede, sí». Ya nadie puede decir que parar es imposible.',
          pro: { ok: 'Le quitas al «hay que terminar» su argumento técnico, con una solución de ingeniería.', info: 'Que el corte posible esté en el plano evita discutirlo mañana bajo presión.' },
          kusi: ['celebra', '¡Ahora parar también tiene plano!'] } },
      { id: 'b', label: 'Aceptarlo: es verdad que una junta fría es un problema estructural, y ya adelantaron el horario.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -5 }, flags: ['terminar_igual'], cartera: { plan: '«Si viene viento, se termina igual»' },
          out: 'Renzo cierra el plano. Patricia anota algo en su tablet, en silencio. El acuerdo del comité dice una cosa y la reunión de hoy, otra.',
          pro: { ok: 'Reconoces un problema técnico real.', risk: 'Dejas los criterios de parada sin efecto antes de empezar. Si mañana sopla fuerte, ya está decidido que se sigue.' },
          kusi: ['preocupado', '¿Y el acuerdo del comité?'] } },
      { id: 'c', label: 'Proponer postergar el vaciado hasta la próxima semana, cuando el pronóstico sea mejor.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -3, tiempo: -3 }, rel: { segundo: -1 }, cartera: { plan: 'Propuesta de postergar rechazada' },
          out: 'Renzo se ríe sin ganas. Patricia dice que el pronóstico es moderado, no extremo, y que con horario temprano es razonable seguir. Te quedas sin propuesta para el caso de que el viento llegue antes.',
          pro: { ok: 'Priorizas la seguridad.', risk: 'Pediste más de lo que el riesgo justificaba y perdiste la oportunidad de definir cómo parar si hace falta.' },
          kusi: ['pensando', 'No había que cancelar: había que poder parar.'] } },
    ],
    rules: [[BP, 'Un criterio de parada necesita una forma técnica de parar. Si no se prevé, la presión del día lo anula.']],
    mirada: {
      ve: 'En construcción, «no se puede parar» suele tener una razón técnica real. El trabajo de Seguridad no es negarla, sino buscar con los ingenieros la forma de parar sin causar otro problema. Así, el día del trabajo, parar es una opción y no una pelea.',
      visual: { tipo: 'balanza', a: { t: '«Terminamos igual»', items: ['Sin junta fría', 'Cliente tranquilo', 'El viento decide'] }, b: { t: 'Junta prevista', items: ['Se puede parar', 'Plano firmado por el estructural', 'El comité se cumple'] } },
    },
  },
  {
    id: 'v6', t: '16:40', ch: 'documento', who: null, titulo: 'Lo que falta antes de las seis', banner: 'assets/esc/reloj.webp', lugar: 'Patio de la obra', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Quedan poco más de dos horas de luz. Tienes una lista de cinco pendientes y solo te alcanza para hacer bien dos; los demás los delegas por WhatsApp y esperas que salgan.${F.has('plan_corregido') ? ' El plan corregido ya está impreso y firmado.' : ''}</p><p><mark class="clave">Elige lo que, si falla, puede costar más mañana</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos pendientes que harás tú misma.', boton: 'Hacer estos dos', resumen: 'Hiciste',
    cols: ['Pendiente', 'Si no se hace'],
    rows: [
      { id: 'exclusion', cells: ['Acordonar y señalizar la zona de exclusión bajo la pluma', 'Alguien camina bajo una tubería de concreto a 35 metros'] },
      { id: 'cuerda', cells: ['Probar la cuerda de descenso nueva en el borde del 12', 'El rescate de mañana falla por un metro'] },
      { id: 'charla', cells: ['Preparar la charla de las 5:30', 'La charla sale improvisada'] },
      { id: 'radios', cells: ['Cargar y probar las seis radios', 'Hay que gritar de piso en piso'] },
      { id: 'fotos', cells: ['Tomar fotos del encofrado para el informe del cliente', 'El informe sale sin fotos'] },
    ],
    score: { exclusion: 3, cuerda: 3, radios: 2, charla: 1, fotos: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 0, tiempo: -1 },
        flags: [...(picks.includes('exclusion') ? ['zona_exclusion'] : []), ...(picks.includes('cuerda') ? ['cuerda_probada'] : [])],
        cartera: { piso12: q === 'buena' ? 'Exclusión señalizada y cuerda de rescate probada' : 'Pendientes críticos delegados' },
        out: q === 'buena' ? 'A las 6:10 el patio tiene cinta roja, conos y dos letreros de «CAÍDA DE OBJETOS – NO PASAR». La cuerda nueva llega justo a la losa del 11. Wilmer te avisa que las radios están cargando.' : 'Hiciste dos cosas útiles, pero una de las críticas quedó en un mensaje de WhatsApp que nadie confirmó.',
        pro: { ok: 'Priorizas lo que protege la vida: lo que está debajo y lo que te permite rescatar.', risk: 'Delegar lo crítico sin confirmar es dejarlo al azar.', info: 'Pide foto de lo delegado: las radios, la charla.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lo crítico, hecho con tus manos!' : '¿Qué cuesta más si falla?'],
      };
    },
    rules: [[LEY, 'Norma G.050, punto 20: acordonar y señalizar bajo los trabajos en altura.'], [BP, 'Lo que puede costar una vida no se delega sin confirmación.']],
    mirada: {
      ve: 'La víspera de un trabajo crítico siempre falta tiempo. Elegir qué haces tú y qué delegas es parte de la prevención: lo que protege la vida va primero y se verifica con los propios ojos.',
      visual: { tipo: 'matriz', x: 'Probabilidad de que falle si se delega', y: 'Gravedad si falla', cuadrantes: ['Hazlo tú', 'Hazlo tú', 'Delega y confirma', 'Delega'], items: [['Zona de exclusión', .6, .95], ['Cuerda de rescate', .7, .9], ['Radios', .4, .6], ['Charla', .3, .4], ['Fotos', .2, .05]] },
    },
  },
  {
    id: 'v7', t: '18:10', ch: 'whatsapp', who: null, titulo: 'Para Don Segundo', banner: 'assets/esc/meta.webp', lugar: 'Combi de regreso', show: ['personas', 'confianza'],
    body: (n, F) => `<p>En la combi, una señora lleva una bolsa de pan de Monsefú y el olor llena todo. Tienes que dormir temprano: mañana a las 4:45 suena el despertador.${F.has('terminar_igual') ? ' No te sacas de la cabeza la frase de Renzo: «terminamos igual».' : F.has('junta_prevista') ? ' En tu mochila va una copia del plano con la línea roja en el eje 5.' : ''}</p><p>Don Segundo manda a la cuadrilla. <mark class="clave">Le escribes para que mañana a las 5:30 estén en la misma página</mark>.</p>`,
    type: 'compose', enviaA: 'segundo', para: 'Para: Don Segundo Vílchez · Maestro de obra', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hora', t: 'Lo práctico', ops: [
        { id: 'h1', t: 'Don Segundo, mañana charla a las 5:30 en el patio y permiso firmado antes de que suba nadie.', ok: true, por: 'Hora y condición, claras.' },
        { id: 'h2', t: 'Don Segundo, mañana temprano nos vemos.', ok: false, por: '«Temprano» no es una hora.' },
      ] },
      { id: 'parada', t: 'Cómo se para', ops: [
        { id: 'p1', t: 'Si el anemómetro pasa el límite de la bomba, Ángel recoge la pluma y cortamos en la junta que se pueda. Usted y yo lo decidimos juntos.', ok: true, por: 'Criterio claro y decisión compartida.' },
        { id: 'p2', t: 'Si yo digo que paramos, paramos.', ok: false, por: 'Suena a orden, y él manda a la cuadrilla.' },
      ] },
      { id: 'gente', t: 'La gente', ops: [
        { id: 'g1', t: 'Dos turnos, refrigerio a las 11 y agua en cada piso. Que nadie suba cansado.', ok: true, por: 'Cuida a la cuadrilla y a él le resuelve el día.' },
        { id: 'g2', t: 'Que todos traigan su almuerzo.', ok: false, por: 'No dice cuándo comen ni quién releva.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'p1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 4 : 0 }, rel: { segundo: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['segundo_en_plan'], cartera: { piso12: q === 'riesgosa' ? 'Sin coordinar con Segundo' : 'Segundo informado: 5:30, permiso, parada y turnos' },
        out: q === 'buena' ? 'Don Segundo responde con un audio a las 9 de la noche: «Ya, ingeniera. Usted mide, yo paro a mi gente. Duerma, que mañana es largo».' : q === 'aceptable' ? 'Don Segundo responde: «Ok. Mañana vemos».' : 'Don Segundo responde: «Ya sé, ingeniera. Treinta años vaciando losas».',
        pro: { ok: 'Un mensaje claro la noche antes evita discusiones a las seis de la mañana.', risk: 'Si la regla de parada suena a orden tuya, mañana será una pulseada.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '«Usted mide, yo paro a mi gente.» ¡Qué divino!' : 'Hora, criterio y gente.'],
      };
    },
    rules: [[BP, 'La noche antes de un trabajo crítico, confirma con quien dirige la cuadrilla la hora, el criterio de parada y los turnos.']],
    mirada: {
      ve: 'La víspera termina con una conversación con quien manda a la cuadrilla. Si mañana el maestro de obra y Seguridad dicen lo mismo, los obreros saben a quién seguir.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje', txt: 'Charla a las 5:30 y permiso firmado antes de subir. Si el anemómetro pasa el límite, Ángel recoge la pluma y cortamos en la junta. Lo decidimos juntos. Dos turnos, refrigerio a las 11 y agua en cada piso.' },
    },
  },
];
