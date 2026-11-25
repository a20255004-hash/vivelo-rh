// Jefe/a de Relaciones Laborales · Capítulo 7 · «El primer día» · Semana 2, martes.
// Hilo: la mesa del lunes no alcanzó y la huelga indefinida empieza hoy. Servicios mínimos, piquete en la garita,
// un gerente bajo presión de Lima y la Autoridad de Trabajo que convoca para mañana.
// Normas citadas:
// - D.S. 019-2006-TR, art. 25.9: sustitución de trabajadores en huelga mediante contratación directa (contratos
//   indeterminados o sujetos a modalidad) o indirecta (intermediación, contratas); art. 34.3: usar la intermediación o
//   la subcontratación para sustituir a trabajadores en huelga; art. 25.12: discriminación por actividad sindical
//   (docs/normas/txt).
// - TUO de la LRCT (D.S. 010-2003-TR), art. 82: servicios mínimos a cargo de los trabajadores en conflicto.
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa
// - Ley 29783, Ley de Seguridad y Salud en el Trabajo: deber de prevención del empleador respecto de quienes trabajan
//   en sus instalaciones (docs/normas/txt), como contexto.
// - Constitución, art. 28 (docs/normas/txt).

export const CAP = {
  n: 7, titulo: 'El primer día', dia: 'Semana 2, martes', foto: 'assets/foto2/grito.webp',
  lugar: 'Fundición del Sur · Garita principal y planta',
  inicio: '05:30', fin: '19:40', cierreHora: '19:30',
  apertura: 'Martes, 5:30 de la mañana. Todavía está oscuro y hace frío de mar. En la garita hay doscientas personas con banderas, una olla común humeando y un parlante. La huelga empezó.', boton: 'Bajar a la garita',
  kusi: 'Hoy se prueba todo lo que preparaste. ¡Respira, que la huelga también es un derecho!',
  lead: 'Respetaste el piquete sin perder el control, frenaste dos formas de reemplazo, limpiaste un parte que habría sido prueba en tu contra, cuidaste a las personas en la puerta y llegas a la Autoridad con la comisión correcta.',
  reflexion: '¿Qué viste hoy en la garita que no esperabas ver?',
  siguiente: { n: 8, titulo: 'El Ministerio', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'garita', p: 'Ingreso por la garita', j: 'Seguridad patrimonial · piquete', d: 0, e: 'Piquete desde las 5:00' },
  { id: 'minimos', p: 'Servicios mínimos en operación', j: 'Ing. Wilber Chambi', d: 0, e: 'Turno A' },
  { id: 'contratas', p: 'Contratas dentro de la planta', j: 'Relaciones Laborales', d: 0, e: 'Por verificar' },
  { id: 'parte', p: 'Parte diario de supervisión', j: 'Supervisores', d: 0, e: 'Llega a las 9:00' },
  { id: 'autoridad', p: 'Convocatoria de la Autoridad de Trabajo', j: 'Dra. Silvia Medina', d: 0, e: 'Se espera' },
];

export const FUTURO = {
  piquete_respetado: ['Manejaste el piquete conversando con su delegado, sin policía ni empujones.', 'La Autoridad preguntará por el primer día y no habrá incidentes que contar. Capítulo 8.'],
  policia_llamada: ['Llamaste a la policía para abrir paso en la garita.', 'Hay un video del forcejeo. Capítulo 8.'],
  limpieza_frenada: ['Frenaste que la contrata de limpieza hiciera trabajos de los huelguistas.', 'El sindicato no tendrá esa prueba. Capítulo 8.'],
  contrata_usada: ['El personal de una contrata hizo labores de los huelguistas.', 'El sindicato lo denunciará ante SUNAFIL. Capítulos 8 y 10.'],
  parte_limpio: ['El parte diario quedó en hechos: ingresos, servicios mínimos, incidentes. Sin fotos ni nombres de «agitadores».', 'Lo podrás mostrar a la Autoridad. Capítulo 8.'],
  parte_fotos: ['El parte diario incluyó fotos y nombres de huelguistas «agitadores».', 'Si llega al sindicato, es prueba de hostilidad. Capítulo 8.'],
  temporales_frenados: ['Frenaste la contratación de temporales para cubrir a los huelguistas.', 'El gerente aceptó pedir apoyo a la Autoridad. Capítulo 8.'],
  temporales_contratados: ['Se contrató personal temporal para cubrir puestos de los huelguistas.', 'Es infracción muy grave y llegará a la mesa de la Autoridad. Capítulos 8 y 10.'],
  piquete_cuidado: ['Ofreciste agua y el tópico al piquete cuando un trabajador se desmayó por el sol.', 'Cutipa lo contará en la asamblea. Capítulo 10.'],
  comision_completa: ['Irás a la Autoridad con una comisión que puede decidir: gerente, abogada y tú.', 'La reunión extraproceso podrá avanzar. Capítulo 8.'],
  comision_debil: ['Irás a la Autoridad sin nadie que pueda decidir.', 'La conciliadora lo notará. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  wilber: { n: 'Ing. Wilber Chambi', sub: 'Superintendente de Fundición', c: '#8A3B12' },
  yolanda: { n: 'Yolanda Ccama', sub: 'Contrata de limpieza', c: '#2E6F8E' },
};

export const WSP = [
  { chat: 'wilber', t: '05:50', de: 'Wilber', txt: 'Entraron los 18 del turno A. El horno en espera, todo estable. Gracias por el protocolo.', si: 'minimos_acordados' },
  { chat: 'wilber', t: '05:50', de: 'Wilber', txt: 'Solo entraron 10. Si falla una bomba, no tengo relevo. Estoy rezando.', si: 'minimos_cortos' },
  { chat: 'wilber', t: '05:50', de: 'Wilber', txt: 'En la garita no dejan pasar a los 40 que puso la empresa. Están discutiendo.', si: 'minimos_impuestos' },
  { chat: 'grupo', t: '06:30', de: 'Jhon', txt: 'Jefa, en el Facebook «Ilo al Día» hay un live del piquete. Tranquilo por ahora. Cantan y hay olla común.' },
  { chat: 'yolanda', t: '07:20', de: 'Yolanda', txt: 'Señorita, usted me dijo que le contara. Mi supervisora nos dice que hoy vamos a limpiar y ayudar a cargar en el patio de ánodos.', si: 'yolanda_orientada' },
  { chat: 'sindicato', t: '15:20', de: 'Teodoro Cutipa', txt: 'Gracias por lo del compañero. Eso no cambia la huelga. Pero se agradece.', si: 'piquete_cuidado' },
  { chat: 'abogado', t: '19:10', de: 'Dra. Medina', txt: 'Mañana salimos a las 7:30 a Moquegua. Lleva las actas, el plan de servicios mínimos y los comunicados. Todo.' },
];

export const CORREOS = [
  { t: '05:15', de: 'Ing. Ricardo Paredes · Gerencia General', para: 'Jefatura de Relaciones Laborales', asunto: 'Hoy', html: '<p>Lima está nerviosa. El embarque del 5 está en riesgo. Quiero opciones hoy mismo. Todas las opciones.</p><p>R. P.</p>' },
  { t: '17:40', de: 'Dirección Regional de Trabajo y Promoción del Empleo de Moquegua', para: 'Fundición del Sur S.A. · Sindicato de Trabajadores', asunto: 'Convocatoria a reunión extraproceso', html: '<p>Se convoca a los representantes de la empresa y del sindicato a una reunión extraproceso el día de mañana, a las 10:00, en el local de la Dirección Regional, Moquegua, con el fin de contribuir a la solución del conflicto.</p><p>Se solicita que asistan representantes con facultades para adoptar acuerdos.</p>' },
];

export const QUIZ = [
  { q: 'Contratar personal temporal para cubrir los puestos de los huelguistas es…', ops: ['Legal si es por un mes', 'Infracción muy grave (D.S. 019-2006-TR, art. 25.9)', 'Obligatorio si hay embarque', 'Legal si lo hace una contrata'], ok: 1, por: 'El art. 25.9 incluye la sustitución por contratación directa (indeterminada o sujeta a modalidad) o indirecta (intermediación o contratas).' },
  { q: 'Pedir a una contrata de limpieza que haga labores de los huelguistas…', ops: ['Es parte de su servicio', 'Puede configurar sustitución por subcontratación (arts. 25.9 y 34.3)', 'Es un servicio mínimo', 'No tiene consecuencias'], ok: 1, por: 'El D.S. 019-2006-TR sanciona usar la intermediación o la subcontratación para sustituir a trabajadores en huelga.' },
  { q: 'Un parte de supervisión con fotos y nombres de «agitadores» del piquete…', ops: ['Es buena evidencia para la empresa', 'Puede ser prueba de hostilidad sindical', 'Es obligatorio', 'Lo pide la Autoridad'], ok: 1, por: 'Identificar y fichar a quienes ejercen un derecho colectivo puede leerse como discriminación o hostilidad (art. 25.12).' },
  { q: 'Si la Autoridad pide que asistan «representantes con facultades para adoptar acuerdos», conviene…', ops: ['Mandar solo a la abogada', 'Ir con quien pueda decidir por la empresa', 'Pedir que lo posterguen', 'No ir'], ok: 1, por: 'Sin alguien que pueda decidir, la reunión no puede avanzar.' },
  { q: 'Un trabajador del piquete se desmaya por el sol frente a la garita. Lo correcto es…', ops: ['No intervenir: está en huelga', 'Ofrecer el tópico y agua sin condiciones', 'Llamar a la policía', 'Tomar foto para el parte'], ok: 1, por: 'La huelga suspende el contrato, no la humanidad. Ofrecer atención es lo correcto y no afecta el derecho de nadie.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '05:45', ch: 'presencial', who: 'gerencia', titulo: 'La garita', banner: 'assets/foto2/caminan.webp', lugar: 'Garita principal', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>El gerente llegó en su camioneta y no puede entrar: el piquete ocupa la vía. ${F.has('protocolo_garita') ? 'Los de servicios mínimos entraron según el protocolo, con la lista en manos del delegado.' : 'Nadie tiene claro quién debe entrar y quién no.'} ${F.has('produccion_encubierta') ? 'Alguien del piquete grita: «¡Y el camión de ánodos de anoche!».' : ''}</p><p>Treinta empleados de oficina esperan en la carretera. El gerente marca un número: «Llamo a la comisaría para que <mark class="clave">abran paso</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirle que espere diez minutos: hablas con el delegado del piquete para que el personal de oficina entre en fila por un costado, sin banderas de por medio.',
        res: { q: 'buena', fx: { confianza: 4, personas: 4, cumplimiento: 2 }, rel: { gerencia: 0, sindicato: 1 }, flags: ['piquete_respetado'], cartera: { garita: 'Ingreso acordado con el delegado del piquete' },
          out: 'El delegado, un soldador de Ite, lo consulta con Cutipa por celular. «Que pasen. Pero sin el gerente adelante, que provoca.» El gerente entra al final, mirando al piso. Nadie lo insulta.',
          pro: { ok: 'Un piquete pacífico es parte del derecho de huelga; negociar el paso evita un enfrentamiento.', risk: 'El gerente se siente humillado: lo vas a pagar más tarde.', info: 'Deja anotada la hora y el acuerdo en el parte del día.' },
          kusi: ['celebra', '¡Diez minutos que evitaron un video viral!'] } },
      { id: 'b', label: 'Apoyarlo: si el piquete bloquea la vía, la policía tiene que garantizar el libre tránsito.',
        res: { q: 'riesgosa', fx: { confianza: -5, personas: -4 }, rel: { gerencia: 1, sindicato: -1 }, flags: ['policia_llamada'], cartera: { garita: 'Policía en la garita' },
          out: 'Llegan dos patrulleros. Hay empujones, una bandera en el suelo y un operador de 60 años sentado en la vereda. El live de Facebook pasa de 300 a 4,000 personas.',
          pro: { ok: 'El personal de oficina entra.', risk: 'Llevar la policía al piquete del primer día convierte un conflicto laboral en un problema de orden público, con video.' },
          kusi: ['triste', 'Ese video va a llegar a Moquegua…'] } },
      { id: 'c', label: 'Mandar al personal de oficina a trabajar desde casa hoy y que el gerente se instale en el hotel de Ilo.',
        res: { q: 'aceptable', fx: { personas: 2, tiempo: -2, confianza: 1 }, cartera: { garita: 'Oficinas en casa; solo servicios mínimos' },
          out: 'Evitas el choque. Pero el gerente, desde el hotel, te llamará cada media hora, y la planta se queda sin gestión.',
          pro: { ok: 'No hay enfrentamiento.', risk: 'Resuelves hoy, pero no estableces cómo se entra mañana.' },
          kusi: ['pensando', 'Sin choque… y sin acuerdo para mañana.'] } },
    ],
    rules: [[LEY, 'Constitución, art. 28: el Estado reconoce la huelga y regula su ejercicio en armonía con el interés social.'], [BP, 'Conversa con el delegado del piquete antes de llamar a cualquier autoridad.']],
    mirada: {
      ve: 'El primer día de huelga define el tono de los siguientes. Un piquete pacífico y una empresa que conversa producen un conflicto tenso pero manejable; una patrulla en la garita produce un conflicto nuevo.',
      visual: { tipo: 'balanza', a: { t: 'Llamar a la policía', items: ['Abres paso rápido', 'Video del forcejeo', 'La huelga se endurece'] }, b: { t: 'Negociar el paso', items: ['Diez minutos de espera', 'Ingreso sin incidentes', 'Un canal con el piquete'] } },
    },
  },
  {
    id: 'g2', t: '07:30', ch: 'llamada', who: null, titulo: 'El patio de ánodos', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'etica', 'personas'],
    body: (n, F) => `<p>${F.has('yolanda_orientada') ? 'Yolanda te escribió a las 7:20. Su mensaje te dejó el café a medio tomar.' : 'Jhon te pasa un dato: hay movimiento raro en el patio de ánodos.'} Tres llamadas para entender qué pasa adentro.</p><p><mark class="clave">Alguien está cubriendo a los huelguistas</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Ing. Wilber Chambi · Fundición', 'Contesta desde la sala de control', '«Los míos están en sus puestos: horno, ácido, agua, energía. Yo no mandé a nadie al patio de ánodos.»'],
      ['Administradora de la contrata de limpieza', 'Contesta en la oficina de la contrata', '«Un supervisor de la fundición nos pidió apoyo para ordenar y cargar en el patio. Nosotros cumplimos lo que nos piden, señora.»'],
      ['Hugo Arce · Supervisor del patio de ánodos', 'Contesta nervioso', '«Jefa, el gerente dijo que teníamos que despachar algo. Pensé que las de limpieza podían ayudar un rato.»'],
    ],
    prompt: '¿Qué haces?',
    choices: [
      { id: 'a', label: 'Ordenar que la contrata vuelva solo a su servicio de limpieza, que el supervisor detenga el despacho y dejarlo por escrito; luego informar al gerente.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 4 }, rel: { gerencia: -1 }, flags: ['limpieza_frenada'], cartera: { contratas: 'Contrata de vuelta a limpieza; despacho detenido' },
          out: 'Hugo suspira de alivio: «Gracias, jefa, no quería hacerlo». Las trabajadoras de limpieza dejan la grúa horquilla y vuelven a sus carritos. Yolanda te manda un pulgar.',
          pro: { ok: 'Cortas una sustitución antes de que se vuelva costumbre.', risk: 'El gerente sentirá que lo desautorizaste frente a un supervisor.', info: 'Revisa con todas las contratas qué servicios prestan durante la huelga.' },
          kusi: ['celebra', '¡Cortaste la sustitución a tiempo!'] } },
      { id: 'b', label: 'Dejar que terminen de cargar este camión, por ser el único, y prohibirlo desde mañana.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -3 }, flags: ['contrata_usada'], cartera: { contratas: 'Un camión cargado por la contrata' },
          out: 'El camión sale a las 9:15. El piquete lo graba desde la carretera. Una trabajadora de limpieza aparece en el video, bajándose de la grúa.',
          pro: { ok: 'Salvas una parte del despacho.', risk: 'Usar una contrata para hacer el trabajo de los huelguistas es sustitución (D.S. 019-2006-TR, arts. 25.9 y 34.3), aunque sea «un solo camión».' },
          kusi: ['indignado', '«Solo uno» es suficiente para una sanción…'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.9: sustitución de huelguistas por contratación directa o indirecta.'], [LEY, 'D.S. 019-2006-TR, art. 34.3: usar la intermediación o la subcontratación para sustituir trabajadores en huelga.']],
    mirada: {
      ve: 'La sustitución casi nunca llega como una decisión formal: llega como un «apoyo de un rato» que pide un supervisor bajo presión. Quien está adentro de una contrata, además, rara vez puede decir que no.',
      visual: { tipo: 'cambio', titulo: 'Qué hace cada uno durante la huelga', pares: [['Limpieza carga ánodos', 'Limpieza limpia'], ['Supervisor despacha', 'Supervisor cuida los servicios mínimos'], ['«Un ratito»', 'Nada de labores de los huelguistas']] },
      normas: [{ ley: 'D.S. 019-2006-TR, arts. 25.9 y 34.3', dice: 'Sancionan la sustitución de trabajadores en huelga, incluso por contratación indirecta, y el uso de la intermediación o la subcontratación para sustituirlos.', practica: 'La contrata de limpieza no puede hacer el trabajo de los operadores en huelga.' }],
    },
  },
  {
    id: 'g3', t: '09:20', ch: 'documento', who: null, titulo: 'El parte del día', banner: 'assets/foto/revisa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>${F.has('supervisores_instruidos') ? 'Los supervisores siguieron las reglas del martes pasado, casi todos.' : 'Nadie le dijo a la supervisión cómo escribir un parte en huelga.'} El parte del turno A llega por correo, con siete puntos y fotos adjuntas.</p><p>Va a ir a Lima y quizás a la Autoridad. <mark class="clave">Marca lo que no puede quedar</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede quedar en el parte.',
    doc: { t: 'Parte diario · Turno A · Primer día de huelga', sub: 'Supervisión de Fundición' },
    lines: [
      { id: 'ingreso', t: 'Ingresaron 18 trabajadores de servicios mínimos a las 05:40, según la lista entregada por el sindicato.' },
      { id: 'estado', t: 'Horno en espera, planta de ácido estable, energía y agua sin novedad.' },
      { id: 'piquete', t: 'Piquete pacífico en la garita desde las 05:00, con olla común.' },
      { id: 'fotos', t: 'Se adjuntan 23 fotos de los trabajadores del piquete, con sus nombres, para identificar a los más activos.', bad: LEY, why: 'Fichar con fotos y nombres a quienes ejercen un derecho colectivo puede leerse como hostilidad y discriminación sindical (D.S. 019-2006-TR, arts. 25.10 y 25.12).' },
      { id: 'agitadores', t: 'Los «agitadores» identificados son los operadores del turno C (ver lista adjunta).', bad: LEY, why: 'Una lista de «agitadores» es la lista que no debe existir. Si llega a una inspección, es prueba directa.' },
      { id: 'descuento', t: 'Planillas aplicará el descuento de los días no laborados solo a quienes acataron la huelga, no a los de servicios mínimos.' },
      { id: 'opinion', t: 'Opinión del supervisor: «Esta huelga es política y la manejan desde afuera».', bad: BP, why: 'Una opinión sin hechos en un documento oficial te expone y no ayuda a decidir.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: missLey ? -6 : 6, etica: missLey ? -3 : 3, calidad: q === 'buena' ? 3 : 1 },
        flags: missLey ? ['parte_fotos'] : ['parte_limpio'],
        cartera: { parte: missLey ? 'Con fotos y lista de «agitadores»' : 'Hechos: ingresos, estado, piquete, descuento' },
        out: missLey ? 'El parte llega a Lima con las fotos. Un gerente de Lima lo reenvía a otro con un comentario: «Ubicados». El reenvío va a terminar donde no debe.' : 'Le devuelves el parte al supervisor con una plantilla nueva: hechos, horas y números. Las fotos se borran del correo. Él responde: «Entendido. No sabía que eso estaba mal».',
        pro: { ok: 'Un parte de hechos protege a la empresa y a la supervisión.', risk: 'Todo lo que se escribe durante una huelga puede terminar en un expediente.', info: 'Verifica que el descuento de días se aplique solo a quienes acataron la huelga.' },
        kusi: missLey ? ['preocupado', 'Ese parte es una prueba en tu contra…'] : ['feliz', '¡Parte limpio, empresa protegida!'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, arts. 25.10 y 25.12: actos contra la libertad sindical y discriminación por actividad sindical.'], [BP, 'Un parte de huelga registra hechos: ingresos, estado de los equipos, incidentes.']],
    mirada: {
      ve: 'Los documentos que se producen durante una huelga son los que se leerán después. Un parte con fotos de «agitadores» no informa: acusa. Y quien acusa sin hechos, se expone.',
      visual: { tipo: 'cambio', titulo: 'Del parte que acusa al parte que informa', pares: [['23 fotos con nombres', '18 ingresos según la lista'], ['«Agitadores del turno C»', 'Piquete pacífico desde las 5:00'], ['«Huelga política»', 'Horno en espera, sin novedad']] },
    },
  },
  {
    id: 'g4', t: '11:10', ch: 'presencial', who: 'gerencia', titulo: '«Todas las opciones»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Gerencia General', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El gerente tiene ojeras y tres tazas vacías en el escritorio. ${F.has('limpieza_frenada') ? '«Me paraste el camión. Bien. Entonces dame algo.»' : '«Salió un camión. Uno. Necesito diez.»'} Lima le dio hasta el jueves.</p><p>«Hay una agencia en Arequipa que me consigue 30 operadores con experiencia, con contrato por un mes. <mark class="clave">Es legal: son contratos, no una service</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no es legal: contratar gente, con cualquier tipo de contrato, para cubrir a los huelguistas es sustitución. Le propones pedir hoy la prórroga del embarque y prepararse para la Autoridad de Trabajo.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 5, confianza: 1 }, rel: { gerencia: 0 }, flags: ['temporales_frenados', 'contrata_frenada'],
          out: 'El gerente se queda mirando el mar por la ventana. «Silvia me dijo lo mismo hace una hora. Quería ver si tú me decías otra cosa.» Llama al cliente para pedir la prórroga.',
          pro: { ok: 'Le das al gerente la razón legal y una alternativa concreta.', risk: 'La presión de Lima sigue: necesitas un camino hacia el acuerdo.', info: 'Sin reemplazos, la empresa llega a la Autoridad con las manos limpias.' },
          kusi: ['animo', 'Le dijiste la verdad cuando más le costaba oírla.'] } },
      { id: 'b', label: 'Aceptar, pero solo para la planta de oxígeno, que no estaba en la comunicación de febrero.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -4 }, rel: { gerencia: 1, sindicato: -1 }, flags: ['temporales_contratados'],
          out: 'Llegan diez operadores de Arequipa en una combi blanca a las 16:00. El piquete los ve bajar. A las 16:05, Cutipa llama a la Autoridad de Trabajo.',
          pro: { ok: 'Cubres un vacío real de la lista.', risk: 'Lo que faltaba en la lista se resolvía por acuerdo o divergencia, no contratando reemplazos: es sustitución (D.S. 019-2006-TR, art. 25.9).' },
          kusi: ['indignado', '¡Un contrato no cambia lo que es!'] } },
      { id: 'c', label: 'Proponer que el personal de mantenimiento «voluntario» entre a convertidores.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -4 }, rel: { gerencia: 1 }, flags: ['temporales_contratados'],
          out: 'Marleny te llama a gritos: «¡Le dije que no nos usara!». Ningún electricista entra, pero la propuesta ya circula en el piquete.',
          pro: { ok: 'Evitas traer gente de afuera.', risk: 'Usar a otros trabajadores para hacer el trabajo de los huelguistas también es sustitución, y rompe lo que acordaste con mantenimiento.' },
          kusi: ['triste', 'Rompiste una confianza que costó mucho…'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.9: la sustitución de huelguistas «bajo contratación directa a través de contratos indeterminados o sujetos a modalidad» es infracción muy grave.']],
    mirada: {
      ve: 'La presión del costo empuja a buscar formas «legales» de reemplazar. El reglamento de inspección fue escrito justamente para cerrar esas puertas: contrato temporal, contrata, intermediación o compañeros de otra área.',
      visual: { tipo: 'balanza', a: { t: '30 temporales de Arequipa', items: ['Producción parcial', 'Infracción muy grave', 'Huelga más dura'] }, b: { t: 'Prórroga y Autoridad', items: ['Pierdes tiempo de embarque', 'Empresa con las manos limpias', 'Camino al acuerdo'] } },
      normas: [{ ley: 'D.S. 019-2006-TR, art. 25.9', dice: 'Es infracción muy grave la sustitución de trabajadores en huelga, bajo contratación directa (contratos indeterminados o sujetos a modalidad) o indirecta (intermediación o contratas).', practica: 'Un contrato por un mes para cubrir a un huelguista es exactamente lo que la norma describe.' }],
    },
  },
  {
    id: 'g5', t: '13:00', ch: 'documento', who: null, titulo: 'Lo que toca hoy', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de Relaciones Laborales', show: ['tiempo', 'calidad', 'personas'],
    body: () => `<p>Media mañana se fue en apagar incendios. Te quedan cinco horas y una lista larga en la pizarra. Jhon trae dos panes con chicharrón de la carretilla de la esquina.</p><p><mark class="clave">Elige tres cosas para la tarde</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres tareas de la tarde.', boton: 'Hacer estas', resumen: 'Harás',
    cols: ['Tarea', 'Para qué'],
    rows: [
      { id: 'reporte', cells: ['Informar al sindicato cuántos entraron por servicios mínimos y en qué puestos', 'Cumplir el protocolo y evitar sospechas'] },
      { id: 'contratas', cells: ['Revisar con cada contrata qué servicio presta durante la huelga', 'Evitar otra sustitución «sin querer»'] },
      { id: 'planilla', cells: ['Verificar con Planillas el descuento de días: solo a quienes acatan', 'No descontar a los de servicios mínimos'] },
      { id: 'carpeta', cells: ['Ordenar actas, comunicados y el plan de servicios mínimos', 'Por si la Autoridad de Trabajo convoca'] },
      { id: 'lista', cells: ['Preparar la lista de huelguistas para la evaluación de desempeño', 'Que Lima sepa quién paró'] },
    ],
    score: { reporte: 2, contratas: 3, planilla: 2, carpeta: 3, lista: -5 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, cumplimiento: picks.includes('lista') ? -6 : 3, etica: picks.includes('lista') ? -4 : 1 },
        cartera: { autoridad: picks.includes('carpeta') ? 'Carpeta lista para la Autoridad' : 'Carpeta desordenada' },
        out: picks.includes('carpeta') ? 'A las 17:00 la carpeta está lista: actas, comunicados, plan de servicios mínimos y la comunicación de febrero, en orden. Silvia la revisa y no le cambia nada.' : 'Avanzas en lo urgente. Si llega una convocatoria, tendrás que armar la carpeta de noche.',
        pro: { ok: 'Lo que haces hoy decide con qué llegas mañana.', risk: 'Una lista de huelguistas para su evaluación es discriminación sindical por escrito.', info: 'Prepárate como si la Autoridad fuera a llamar hoy.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Tarde bien invertida!' : 'Ojo con esa lista…'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.12: discriminación por actividad sindical.']],
    mirada: {
      ve: 'Durante una huelga, el día se va en urgencias. Las tareas que te protegen —ordenar la evidencia, vigilar las contratas, descontar bien— son las que se dejan para después y luego hacen falta.',
      visual: { tipo: 'matriz', x: 'Urgencia', y: 'Protección para la empresa', cuadrantes: ['Hazlo hoy', 'Agéndalo', 'Si sobra tiempo', 'No lo hagas'], items: [['Carpeta para la Autoridad', .6, .9], ['Revisar contratas', .8, .85], ['Descuento correcto', .5, .6], ['Reporte al sindicato', .7, .55], ['Lista de huelguistas', .4, .02]] },
    },
  },
  {
    id: 'g6', t: '14:50', ch: 'whatsapp', who: null, titulo: 'Un desmayo en la garita', banner: 'assets/foto2/pasillo.webp', lugar: 'Garita principal', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>A las 14:40, con el sol de Ilo cayendo de lleno sobre la pista, un operador del piquete se desmaya. Tiene 58 años. Alguien le echa agua de una botella. El tópico de la planta está a cien metros, del otro lado de la garita.</p><p>Le escribes a Cutipa. <mark class="clave">Rápido y sin letra chica</mark>.</p>`,
    type: 'compose', enviaA: 'sindicato', para: 'Para: Teodoro Cutipa · Sindicato mayoritario', boton: 'Enviar',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'oferta', t: 'Qué ofreces', ops: [
        { id: 'o1', t: 'Señor Cutipa: el tópico de la planta está disponible ya para el compañero. La enfermera sale a la garita.', ok: true, por: 'Concreto e inmediato.' },
        { id: 'o2', t: 'Señor Cutipa: si levantan el piquete, podemos atenderlo adentro.', ok: false, por: 'Condicionar la atención de salud a la huelga es inaceptable.' },
      ] },
      { id: 'agua', t: 'Algo más', ops: [
        { id: 'a1', t: 'También podemos dejar bidones de agua en la garita para el piquete, mientras dure el sol.', ok: true, por: 'Un gesto que no cambia la huelga y cuida a las personas.' },
        { id: 'a2', t: 'Recomiendo que la gente mayor se vaya a su casa.', ok: null, por: 'Bienintencionado, pero suena a desalentar la huelga.' },
      ] },
      { id: 'sin', t: 'Sin condiciones', ops: [
        { id: 's1', t: 'Esto no tiene que ver con la negociación.', ok: true, por: 'Deja claro que no es una jugada.' },
        { id: 's2', t: 'Espero que esto ayude a que reconsideren.', ok: false, por: 'Convierte un gesto humano en una moneda.' },
      ] },
    ],
    res: sel => {
      const malo = sel.oferta === 'o2' || sel.sin === 's2';
      const buenas = ['o1', 'a1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: malo ? -5 : 5, confianza: q === 'buena' ? 4 : 0, etica: malo ? -4 : 3 }, rel: { sindicato: q === 'buena' ? 1 : malo ? -1 : 0 },
        flags: q !== 'riesgosa' ? ['piquete_cuidado'] : [],
        out: q === 'buena' ? 'La enfermera cruza la garita con su maletín. El operador se recupera en diez minutos con suero oral y sombra. Media hora después hay cuatro bidones de agua junto a la olla común. Nadie aplaude, pero nadie grita.' : malo ? 'Cutipa responde: «¿Nos está condicionando la salud?». El mensaje termina leído por el parlante del piquete.' : 'La enfermera sale. El operador se recupera.',
        pro: { ok: 'Cuidar a las personas en la puerta de tu planta no es tomar partido: es lo correcto.', risk: 'Cualquier condición convierte un gesto humano en presión.' },
        kusi: [q === 'buena' ? 'celebra' : 'indignado', q === 'buena' ? '¡La huelga no suspende la humanidad!' : '¡La salud no se condiciona!'],
      };
    },
    rules: [[BP, 'Durante una huelga, la atención de salud y el agua no se condicionan.']],
    mirada: {
      ve: 'Una huelga suspende el contrato, pero no el deber de cuidar a quien se desmaya en tu puerta. Los gestos sin condiciones son los que la base recuerda cuando se discute el acuerdo.',
      visual: { tipo: 'mensaje', titulo: 'Sin letra chica', txt: 'Señor Cutipa: el tópico de la planta está disponible ya para el compañero; la enfermera sale a la garita. También podemos dejar bidones de agua para el piquete mientras dure el sol. Esto no tiene que ver con la negociación.' },
    },
  },
  {
    id: 'g7', t: '17:50', ch: 'correo', who: null, titulo: 'La convocatoria', banner: 'assets/3d/scenes/municipalidad.webp', show: ['cumplimiento', 'confianza'],
    mail: { from: 'Dirección Regional de Trabajo y Promoción del Empleo de Moquegua', to: 'Fundición del Sur S.A.', asunto: 'Convocatoria a reunión extraproceso' },
    body: (n, F) => `<p>Se convoca a los representantes de la empresa y del sindicato a una reunión extraproceso mañana a las 10:00, en Moquegua. ${F.has('autoridad_abierta') ? 'El jueves le dijiste a Cutipa que estabas abierta a esto.' : ''}</p><p><mark class="clave">Se solicita que asistan representantes con facultades para adoptar acuerdos</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Confirmar asistencia con el gerente general, la abogada y la jefatura de Relaciones Laborales.',
        res: { q: 'buena', fx: { cumplimiento: 4, confianza: 3 }, rel: { gerencia: 1 }, flags: ['comision_completa'], responde: 'Señores de la Dirección Regional: confirmamos la asistencia de la empresa a la reunión extraproceso de mañana a las 10:00. Asistirán el Ing. Ricardo Paredes, gerente general, con facultades para adoptar acuerdos; la Dra. Silvia Medina, asesora legal; y la jefatura de Relaciones Laborales. Atentamente.',
          out: 'El gerente, al leer el correo, solo dice: «A las 7:30 salimos. Maneja Silvia, que yo no he dormido». Te vas a tu casa a planchar una camisa y a repasar las actas.', kusi: ['feliz', '¡Con quien puede decidir!'] } },
      { id: 'b', label: 'Confirmar solo con la abogada y la jefatura: el gerente debe quedarse en la planta por la huelga.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -1 }, flags: ['comision_debil'], responde: 'Señores: confirmamos la asistencia de la Dra. Silvia Medina y de la jefatura de Relaciones Laborales. Atentamente.',
          out: 'Silvia te mira: «Si piden algo, ¿quién firma?». Llamarás al gerente desde Moquegua cada vez que haya una propuesta.', kusi: ['pensando', '¿Y quién decide allá?'] } },
    ],
    rules: [[BP, 'A una reunión con la Autoridad se va con quien puede decidir.']],
    mirada: { ve: 'La Autoridad de Trabajo puede ayudar a destrabar, pero no puede hacer el trabajo de las partes. Si quien se sienta no puede decidir, la reunión se convierte en un recado.' },
  },
];
