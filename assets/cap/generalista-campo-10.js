// Generalista de RR.HH. en operación minera · Capítulo 10 · «Dos semanas arriba» · Semana 2, viernes.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Final abierto: balance de las dos semanas, «¿te ves en este puesto?» y gancho para la Semana 3 (la inspección).
// Normas citadas (ya verificadas en capítulos anteriores):
// - D.S. 007-2002-TR: jornadas atípicas (el promedio del ciclo no puede superar la jornada máxima) y art. 9 (sobretiempo).
//   https://lpderecho.pe/horas-extras-derecho-laboral
// - Ley 26790 y D.S. 003-98-SA (SCTR) y Ley 29245 (tercerización).
// - SUNAFIL fiscaliza el cumplimiento de las normas sociolaborales; no se citan plazos ni multas.

export const CAP = {
  n: 10, titulo: 'Dos semanas arriba', dia: 'Semana 2, viernes', foto: 'assets/3d/scenes/mineria.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '05:30', fin: '20:30', cierreHora: '20:15',
  apertura: 'Tu día 12 de 14. A las 5:30 la carretera está libre y el paradero se llena de cascos, maletas y risas. La guardia B baja por fin. Tú te quedas: tu relevo no pudo subir por el bloqueo.', boton: 'Ir al paradero',
  kusi: 'Dos semanas. ¿Te acuerdas del bus de Abancay y del dolor de cabeza? Mira todo lo que pasó desde entonces.',
  lead: 'En dos semanas atendiste un reclamo colectivo, controlaste a una contratista, revisaste un perfil y un examen médico con justicia, frenaste un rumor, sostuviste a 903 personas varadas y redactaste el acta que abrió la carretera. El lunes empieza otra prueba.',
  reflexion: '¿Te ves haciendo RR.HH. a cuatro mil metros? ¿Qué te atrae y qué te pesa?',
  siguiente: { n: 11, titulo: 'La inspección', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'bajada', p: 'Bajada de la guardia B', j: 'RR.HH. · Logística', d: 0, e: 'Buses de las 6 y las 8' },
  { id: 'acta', p: 'Acta de la mesa de diálogo', j: 'Comité de monitoreo', d: 0, e: 'Se instala el lunes' },
  { id: 'contratistas', p: 'Contratistas', j: 'Ing. Mario Salas', d: 0, e: 'Licitación en preparación' },
  { id: 'inspeccion', p: 'Visita de SUNAFIL', j: 'Percy · RR.HH.', d: 0, e: 'El lunes' },
];

export const FUTURO = {
  carpeta_inspeccion: ['Empezaste a ordenar la carpeta para la inspección.', 'El lunes tendrás a mano tareos, pólizas y el plan de continuidad.'],
  inspeccion_sorpresa: ['Dejaste la inspección para el lunes.', 'Empezarás la semana 3 buscando papeles.'],
  informe_quincena: ['Le mandaste a Percy un informe de las dos semanas.', 'Percy lo usará para pedir más personal de RR.HH. en campo.'],
  te_ves_si: ['Te ves en este puesto.', 'Percy te propondrá liderar el comité de monitoreo.'],
  te_ves_duda: ['Todavía no sabes si te ves en este puesto.', 'La semana 3 te ayudará a decidirlo.'],
  te_ves_no: ['No te ves en este puesto por mucho tiempo.', 'Percy te propondrá alternar campo y oficina en Abancay.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de Movitierra', who: 'contratista' },
  delegado: { n: 'Wilber Mamani', sub: 'Delegado de los operadores de mina', c: '#2F6B3F' },
  walter: { n: 'Wálter Ccahua', sub: 'Ayudante de Movitierra · en recuperación', c: '#C05621' },
};

export const WSP = [
  { chat: 'delegado', t: '05:40', de: 'Wilber', txt: 'Bajamos, ingeniera. Gracias por lo del comedor y por lo de las horas. Nos vemos en 7 días 🙏' },
  { chat: 'walter', t: '08:20', de: 'Wálter', txt: 'Señorita, ya me operaron la mano. El doctor dice que voy a poder trabajar. Mi mamá le manda una bendición.', si: 'accidente_atendido' },
  { chat: 'contratista', t: '09:30', de: 'Ing. Salas', txt: 'Ingeniera, la póliza de Wálter: la aseguradora la rechazó por fecha. Ya sabe usted. Necesito que hablemos.', si: 'sctr_cede' },
  { chat: 'presidenta', t: '12:00', de: 'Doña Juana', txt: 'Señorita, el lunes a las 10 el comité. Vamos tres de la comunidad. Usted no falte.' },
  { chat: 'yuri', t: '18:30', de: 'Yuri', txt: 'Ingeniera, mi mamá dice que el cuy queda para cuando baje usted. No se olvide 😄' },
  { chat: 'percy', t: '19:50', de: 'Percy', txt: 'Mañana dormimos hasta las 7. Es una orden 😅' },
];

export const CORREOS = [
  { t: '07:00', de: 'Dra. Inés Garro · Relaciones Comunitarias', para: 'Generalista de RR.HH. · Campo; Percy Huillca', asunto: 'Gracias', html: '<p>Llevo 25 años en esto. Pocas veces una mesa se arma tan rápido, y fue porque alguien en campo conocía a la gente. Gracias.</p><p>Inés</p>' },
  { t: '17:05', de: 'Intendencia Regional de SUNAFIL', para: 'Minera Puquio S.A. · RR.HH.', asunto: 'Comunicación de visita de inspección', html: '<p>Se comunica que el lunes se realizará una visita de inspección en la unidad minera, a raíz de denuncias recibidas. Materias: jornada y sobretiempo durante la paralización de la vía de acceso; seguridad y salud en el trabajo de personal de empresas contratistas.</p><p>Se solicita tener disponible la documentación correspondiente.</p>' },
];

export const QUIZ = [
  { q: 'Tu relevo no pudo subir y te quedas días de más. En una jornada atípica…', ops: ['No importa', 'El promedio del ciclo no puede superar la jornada máxima: los días de más se compensan', 'Se pierden', 'Solo cuenta para los operadores'], ok: 1, por: 'El D.S. 007-2002-TR permite jornadas atípicas si el promedio del ciclo respeta la jornada máxima.' },
  { q: 'SUNAFIL anuncia una inspección sobre sobretiempo durante el bloqueo. ¿Qué necesitas?', ops: ['Nada, fue fuerza mayor', 'El registro de horas, el plan de continuidad y la prueba del pago', 'Una carta de disculpa', 'Que no venga'], ok: 1, por: 'La fuerza mayor puede justificar el sobretiempo obligatorio, pero se registra y se paga.' },
  { q: 'Mirando atrás, ¿cuál fue el hilo de estas dos semanas?', ops: ['La comida', 'Que comedor, contratistas, comunidad y seguridad están conectados', 'Los papeles', 'La altura'], ok: 1, por: 'En campo, un reclamo pequeño puede terminar en un bloqueo si nadie lo atiende a tiempo.' },
  { q: 'Lo que más protege la relación con una comunidad es…', ops: ['Prometer mucho', 'Cumplir cada fecha de lo acordado y contar con transparencia', 'Evitar hablar con ella', 'Dar regalos'], ok: 1, por: 'La confianza se construye cumpliendo, mes a mes.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '06:20', ch: 'documento', who: null, titulo: 'La mañana después', banner: 'assets/esc/camino.webp', lugar: 'Paradero del campamento', show: ['tiempo', 'personas', 'cumplimiento'],
    body: () => `<p>El bus de las 6 se va con 70 personas que te saludan desde la ventana. Wilber levanta la copia doblada del acta del comedor. Te quedas en el paradero con el café en la mano y una lista larga.</p><p>Tienes la mañana para <mark class="clave">tres frentes</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes de tu mañana.', boton: 'Ir por estos', resumen: 'Atendiste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'buses', cells: ['Confirmar que los 140 de la guardia B tienen bus y conexión', 'Algunos pierden el bus a Cusco'] },
      { id: 'horas', cells: ['Cerrar el registro de horas de los días de bloqueo', 'Se pagan en la próxima planilla'] },
      { id: 'rosa', cells: ['Inducción de Rosa y los primeros aptos de la comunidad', 'Empiezan el lunes'] },
      { id: 'lima', cells: ['Reporte de asistencia semanal para Lima', 'Se atrasó por el bloqueo'] },
      { id: 'fotos', cells: ['Elegir fotos de la mesa para la revista interna', 'Comunicaciones las pidió'] },
      { id: 'mural', cells: ['El mural de cumpleaños pendiente', 'La señora de Bienestar insiste'] },
    ],
    score: { buses: 3, horas: 3, rosa: 3, lima: 1, fotos: -1, mural: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: picks.includes('horas') ? 4 : -2, personas: picks.includes('buses') ? 3 : 0, tiempo: q === 'buena' ? 2 : 0 },
        cartera: { bajada: picks.includes('buses') ? 'Guardia B en camino' : 'Bajada sin confirmar' },
        out: q === 'buena' ? 'A las 11, el registro de horas está cerrado y firmado por los supervisores, los 140 tienen bus y Rosa sabe a qué hora es su inducción el lunes.' : 'Avanzas, pero algo que importa para la semana que viene se queda sin hacer.',
        pro: { ok: 'El día después de una crisis también es parte de la crisis: lo que no se registra hoy, se discute mañana.', info: 'Las horas del bloqueo deben estar registradas con nombre, fecha y firma.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mañana ordenada!' : '¿Y el registro de horas?'],
      };
    },
    rules: [[LEY, 'El sobretiempo, aun obligatorio por fuerza mayor (D.S. 007-2002-TR, art. 9), se paga y se registra (arts. 10 y 10-A).']],
    mirada: {
      ve: 'Después de una crisis, todos quieren descansar. Pero lo que no se cierra hoy —las horas, los buses, los ingresos nuevos— es el próximo reclamo. La generalista de campo cierra antes de celebrar.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Importancia para la semana 3', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Puede esperar', 'No es urgente'], items: [['Registro de horas', .5, .95], ['Buses de la guardia B', .3, .85], ['Inducción de Rosa', .4, .8], ['Reporte a Lima', .3, .4], ['Mural', .2, .1], ['Fotos', .2, .05]] },
    },
  },
  {
    id: 'k2', t: '08:40', ch: 'llamada', who: null, titulo: 'La llamada a Wálter', banner: 'assets/foto/llamada.webp', show: ['personas', 'etica'],
    body: (n, F) => `<p>Llamas al hospital de Abancay. ${F.has('sctr_cede') ? 'El Ing. Salas ya te avisó: la aseguradora rechazó la cobertura de Wálter porque el accidente fue antes de que la póliza estuviera vigente. Su atención la está garantizando la minera.' : 'Wálter está cubierto por su SCTR: lo operaron anoche.'}</p><p>Wálter contesta con voz de anestesia. «Señorita… <mark class="clave">¿voy a poder volver a trabajar?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad: que eso lo dirá su médico, que su tratamiento está asegurado y que tú harás seguimiento con Movitierra para su regreso cuando esté listo.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, etica: 2 },
          out: 'Wálter se queda en silencio y luego dice: «Gracias por llamar. Nadie de la mina me había llamado nunca». Anotas en tu agenda: «Wálter · llamar cada viernes».',
          pro: { ok: 'Honestidad sobre lo que no sabes y compromiso con lo que sí puedes hacer.', info: 'El seguimiento a un trabajador accidentado también es parte del trabajo de RR.HH.' },
          kusi: ['animo', 'Una llamada que vale mucho.'] } },
      { id: 'b', label: 'Decirle que no se preocupe, que seguro vuelve en dos semanas.',
        res: { q: 'aceptable', fx: { personas: 1, confianza: -1 },
          out: 'Wálter se ríe bajito. «Ojalá, señorita.» Si en dos semanas no puede, tu promesa será lo primero que recuerde.',
          pro: { ok: 'Le das ánimo.', risk: 'Prometer plazos médicos que no conoces genera expectativas falsas.' },
          kusi: ['pensando', 'Eso lo dice el médico…'] } },
    ],
    rules: [[LEY, 'El SCTR cubre salud y pensiones ante accidentes de trabajo en actividades de riesgo (Ley 26790 y D.S. 003-98-SA).']],
    mirada: {
      ve: 'Wálter es la prueba de que en la mina las decisiones de garita tienen consecuencias reales. Lo que decidiste el primer lunes sobre los ocho de Movitierra hoy tiene nombre, mano operada y una mamá en Chalhuanca.',
      visual: { tipo: 'linea', titulo: 'Los ocho de Movitierra', hitos: [['Lunes 1', 'Lista con SCTR «en trámite»'], ['Miércoles 1', 'Póliza'], ['Lunes 2', 'Accidente de Wálter'], ['Viernes 2', 'Operado en Abancay']] },
    },
  },
  {
    id: 'k3', t: '11:30', ch: 'documento', who: null, titulo: 'Tu bitácora de dos semanas', banner: 'assets/esc/escritorio.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'confianza'],
    body: () => `<p>Percy te pide algo antes del almuerzo: «Ordena lo que pasó. Si no lo escribes ahora, en un mes lo cuentas al revés».</p><p>Abres tu libreta llena de manchas de mate. <mark class="clave">Ordena tus dos semanas</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena lo que pasó, del primer día al último. Usa las flechas.', boton: 'Guardar la bitácora',
    items: [
      { id: 'sub', t: 'La subida, Yuri y los ocho de Movitierra sin SCTR', por: 'Lunes 1.' },
      { id: 'com', t: 'Cuarenta operadores en el bus y el acta del comedor', por: 'Martes 1.' },
      { id: 'mov', t: 'El expediente de Movitierra y el saldo de Elmer', por: 'Miércoles 1.' },
      { id: 'lis', t: 'La lista de Doña Juana y las dos cifras del 30 %', por: 'Jueves 1.' },
      { id: 'eva', t: 'El examen médico de los treinta y la ruta del «todavía no»', por: 'Viernes 1.' },
      { id: 'rum', t: 'El rumor, el comunicado y el accidente de Wálter', por: 'Lunes 2.' },
      { id: 'blo', t: 'El bloqueo, los varados y la mesa de diálogo', por: 'Martes a jueves 2.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: 2 },
        out: q === 'buena' ? 'Lees la bitácora de corrido y lo ves claro: cada día preparó el siguiente. La cena fría terminó en una mesa de diálogo.' : 'Algunos días se te mezclan. Normal: fueron dos semanas que parecieron dos meses.',
        pro: { ok: 'Escribir lo vivido te ayuda a ver el sistema, no solo los incendios.', info: 'Guarda la bitácora: te servirá cuando llegue el siguiente conflicto.' },
        kusi: ['curioso', 'Todo estaba conectado.'],
      };
    },
    mirada: {
      ve: 'Dos semanas, un solo hilo: un reclamo pequeño que nadie atendía, una contratista que pagaba tarde, un convenio ambiguo, un examen que dolía y un rumor sin respuesta. Cada uno, solo, era manejable. Juntos, cerraron una carretera.',
      visual: { tipo: 'flujo', titulo: 'Dos semanas, un solo hilo', pasos: ['Comedor', 'Contratistas', 'Comunidad', 'Examen médico', 'Rumor', 'Bloqueo', 'Mesa'] },
    },
  },
  {
    id: 'k4', t: '13:30', ch: 'presencial', who: 'percy', titulo: 'La conversación con Percy', banner: 'assets/foto/mentora.webp', lugar: 'Mirador del tajo', show: ['confianza', 'calidad'],
    body: () => `<p>Percy te lleva al mirador del tajo con dos sándwiches de pollo. Abajo, los volquetes parecen juguetes amarillos. Hace sol y viento.</p><p>«Primera evaluación. <mark class="clave">Pregúntame lo que quieras</mark>. Hoy contesto todo.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Percy.',
    opts: [
      { id: 'bien', label: '«¿Qué hice bien?»', info: '«Escuchar antes de decidir. Volver a revisar lo que prometiste. Y no dejar que nadie suba sin seguro ni sin examen. Eso aquí arriba vale oro.»' },
      { id: 'mejorar', label: '«¿Qué tengo que mejorar?»', info: '«Cuidarte. Y pelear menos sola: a veces decides cosas que deberías compartir con Operaciones antes. Valdivia no es tu enemigo. Es tu cliente más difícil.»' },
      { id: 'el', label: '«¿Por qué sigues tú aquí arriba después de tantos años?»', info: 'Percy mira el tajo un rato. «Porque soy de Chumbivilcas. Mi papá fue minero sin casco ni seguro. Aquí arriba puedo hacer que eso no le pase a nadie.»' },
      { id: 'futuro', label: '«¿Qué viene en la semana 3?»', info: '«El comité, la reevaluación de los jóvenes, la licitación de contratistas. Y algo más que todavía no sé. Aquí siempre hay algo más.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 4, calidad: 2 }, rel: { percy: 1 },
      out: picks.includes('el') ? 'Te quedas callada. Percy se termina su sándwich y dice: «Ya. Vámonos, que el viento te va a dar soroche otra vez».' : 'Percy te da una palmada en el hombro. «Lo hiciste bien. Y lo que no, lo aprendiste.»',
      kusi: ['feliz', 'Un buen jefe también se deja preguntar.'],
    }),
    rules: [[BP, 'Pide retroalimentación concreta: qué hiciste bien y qué mejorar.']],
    mirada: {
      ve: 'Percy no es solo tu jefe: es quien te mostró que RR.HH. en campo es estar presente. Preguntarle qué mejorar es la forma más rápida de crecer en un puesto donde nadie tiene tiempo de enseñarte.',
      visual: { tipo: 'balanza', a: { t: 'Lo que hiciste bien', items: ['Escuchar primero', 'Revisar lo prometido', 'No negociar la seguridad'] }, b: { t: 'Lo que toca mejorar', items: ['Cuidarte', 'Compartir decisiones', 'Trabajar con Operaciones'] } },
    },
  },
  {
    id: 'k5', t: '15:30', ch: 'correo', who: null, titulo: 'El informe de la quincena', banner: 'assets/foto2/celebra-laptop.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'confianza'],
    body: () => `<p>Percy te pide un informe corto para Lima: lo que pasó, lo que se logró y lo que falta. «Que lo lea el gerente en cinco minutos.»</p><p>Escribes con la estufa encendida y la ventana del contenedor empañada. <mark class="clave">Corto y con datos</mark>.</p>`,
    type: 'compose', enviaA: 'percy', para: 'Para: Percy Huillca · con copia a Gerencia', boton: 'Enviar el informe',
    prompt: 'Arma tu informe eligiendo una frase de cada parte.',
    slots: [
      { id: 'paso', t: 'Lo que pasó', ops: [
        { id: 'p1', t: 'En dos semanas hubo un reclamo colectivo, un atraso de pagos en una contratista, un accidente y un bloqueo de tres días.', ok: true, por: 'Hechos, sin adjetivos.' },
        { id: 'p2', t: 'Fueron dos semanas terribles por culpa de la comunidad.', ok: false, por: 'Culpar no informa.' },
      ] },
      { id: 'logro', t: 'Lo que se logró', ops: [
        { id: 'l1', t: 'Se firmaron dos actas con fechas, se reabrió la vía sin heridos y se acordó contar el empleo local con dos cifras.', ok: true, por: 'Resultados concretos.' },
        { id: 'l2', t: 'Todo salió bien gracias al equipo.', ok: null, por: 'Amable, pero no dice qué.' },
      ] },
      { id: 'falta', t: 'Lo que falta', ops: [
        { id: 'f1', t: 'Falta: comité de monitoreo, reevaluación de jóvenes, criterio local en la licitación y una persona más de RR.HH. en campo.', ok: true, por: 'Lo pendiente y lo que necesitas.' },
        { id: 'f2', t: 'No falta nada: el conflicto está cerrado.', ok: false, por: 'No lo está: ahora empieza el cumplimiento.' },
      ] },
    ],
    res: sel => {
      const mal = sel.paso === 'p2' || sel.falta === 'f2', buenas = ['p1', 'l1', 'f1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : mal ? -2 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { percy: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['informe_quincena'] : [],
        out: q === 'buena' ? 'Percy lo reenvía a Lima sin cambios. A la hora, el gerente responde: «Aprobada la plaza adicional de RR.HH. en campo».' : mal ? 'Percy te lo devuelve: «Esto en Lima se lee como que todo terminó. No terminó».' : 'Percy lo envía, pero Lima pregunta: «¿Qué se logró exactamente?».',
        pro: { ok: 'Un informe corto, con hechos, logros y pendientes, consigue recursos.', risk: 'Culpar o dar por cerrado un conflicto confunde a quien decide lejos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una plaza más en campo!' : 'Hechos, logros y pendientes.'],
      };
    },
    rules: [[BP, 'Un informe para la gerencia dice qué pasó, qué se logró y qué falta, en pocas líneas.']],
    mirada: {
      ve: 'Lima no estuvo en el bus, ni en el comedor, ni en el km 42. Tu informe es lo único que verán. Si dice bien lo que pasó y lo que falta, la próxima vez habrá más manos aquí arriba.',
      visual: { tipo: 'mensaje', titulo: 'El informe de la quincena', txt: 'Hubo un reclamo colectivo, un atraso de pagos, un accidente y un bloqueo de tres días. Se firmaron dos actas, se reabrió la vía sin heridos y se acordó contar el empleo local con dos cifras. Falta el comité, la reevaluación, la licitación y una persona más en campo.' },
    },
  },
  {
    id: 'k6', t: '17:15', ch: 'correo', who: null, titulo: 'SUNAFIL, el lunes', banner: 'assets/esc/lupa.webp', lugar: 'Contenedor de RR.HH.', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: (n, F) => `<p>Llega un correo de la Intendencia Regional de SUNAFIL: <mark class="clave">el lunes habrá una visita de inspección</mark> por denuncias sobre el sobretiempo durante el bloqueo y la seguridad del personal de contratistas.</p><p>${F.has('movitierra_sunafil') ? 'Piensas en Elmer y en el enlace que alguien subió al grupo de Movitierra.' : F.has('sctr_cede') ? 'Piensas en Wálter y en la póliza que no estaba vigente.' : 'No sabes quién denunció. Tampoco importa: lo que importa es qué vas a mostrar.'} Son las cinco de la tarde de un viernes.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Empezar hoy la carpeta: registro de horas del bloqueo, plan de continuidad corregido, pólizas SCTR y expedientes de contratistas, y la investigación del accidente. Avisar a Percy.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 3, tiempo: -2 }, rel: { percy: 1 }, flags: ['carpeta_inspeccion'], cartera: { inspeccion: 'Carpeta en preparación' },
          responde: 'Percy, llegó la comunicación de SUNAFIL para el lunes. Ya estoy armando la carpeta: horas del bloqueo, plan de continuidad, SCTR y expedientes de contratistas, e investigación del accidente de Wálter. Mañana la revisamos juntos.',
          out: 'A las 8 de la noche tienes una carpeta con separadores de colores. Te das cuenta de que tu matriz de control de contratistas, la del primer miércoles, es justo lo que te van a pedir.',
          pro: { ok: 'La mejor preparación para una inspección es el trabajo bien registrado de antes.', risk: 'Lo que no se registró no aparecerá por arte de magia.', info: 'No escondas nada: muestra lo que hiciste y lo que corregiste.' },
          kusi: ['animo', 'Lo que registraste te va a salvar.'] } },
      { id: 'b', label: 'Dejarlo para el lunes temprano: hoy ya no das más y mañana es sábado.',
        res: { q: 'aceptable', fx: { tiempo: 2, cumplimiento: -2 }, flags: ['inspeccion_sorpresa'], cartera: { inspeccion: 'Pendiente para el lunes' },
          out: 'Cierras la laptop. El sábado duermes hasta las 9. Pero el domingo en la noche no puedes dormir pensando en dónde quedó el tareo de Movitierra.',
          pro: { ok: 'Descansar también es necesario.', risk: 'Una inspección a primera hora del lunes no deja tiempo para buscar papeles.' },
          kusi: ['pensando', 'El lunes llega rápido…'] } },
    ],
    rules: [[LEY, 'El sobretiempo, aun obligatorio por fuerza mayor (D.S. 007-2002-TR, art. 9), se paga y se registra (arts. 10 y 10-A).'], [LEY, 'Tercerización: responsabilidad solidaria de la empresa principal en ciertos supuestos (Ley 29245).']],
    mirada: {
      ve: 'Una inspección no es un castigo: es una pregunta de la autoridad sobre lo que hiciste. Si registraste las horas, corregiste el plan y controlaste a las contratistas, la respuesta está en tus carpetas. Si no, el lunes será largo.',
      visual: { tipo: 'flujo', titulo: 'La carpeta para SUNAFIL', pasos: ['Registro de horas', 'Plan de continuidad', 'Pólizas SCTR', 'Expedientes de contratistas', 'Investigación del accidente'] },
    },
  },
  {
    id: 'k7', t: '19:40', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/meta.webp', lugar: 'Afuera del comedor, bajo las estrellas', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Sales del comedor con un mate de muña. Hace cuatro bajo cero y el cielo está lleno de estrellas. ${F.has('acta_mesa') ? 'En el mural, alguien pegó una copia del acta de la mesa al lado del acta del comedor.' : 'En el mural, el comunicado de la unidad sigue pegado.'} Yuri pasa y te saluda con la mano antes de entrar a su turno.</p><p>Dos semanas arriba. Doce días de catorce. <mark class="clave">¿Te ves en este puesto?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Me gusta estar donde pasan las cosas, aunque cueste el frío, la distancia y el cansancio.',
        res: { q: null, fx: { confianza: 3 }, flags: ['te_ves_si'],
          out: 'Te quedas mirando las luces del tajo. Piensas en Elmer, en Rosa, en Don Teodoro, en Wálter. Mañana es sábado, pero aquí arriba también se trabaja. Y el lunes llega SUNAFIL.',
          kusi: ['celebra', '¡Qué bacán! Cuatro mil metros te sientan bien.'] } },
      { id: 'b', label: 'Todavía no lo sé. Me gustó lo que hice, pero me pesa vivir lejos de todo.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves_duda'],
          out: 'Te sientas en la banca del comedor. No hay respuesta correcta. Hay una semana más para pensarlo, y un lunes con inspección para ponerte a prueba.',
          kusi: ['pensando', 'Dudar también es parte de elegir.'] } },
      { id: 'c', label: 'No por mucho tiempo. Aprendí muchísimo, pero quiero hacer RR.HH. más cerca de mi gente.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves_no'],
          out: 'Lo dices en voz alta y te sorprende lo tranquila que te sientes. Percy, que te escuchó desde la puerta, dice: «Hay generalistas que alternan campo y oficina. Lo conversamos». Pero primero, el lunes.',
          kusi: ['animo', 'Saber lo que quieres también es aprender.'] } },
    ],
    mirada: {
      ve: 'RR.HH. en campo no es para todos, y no tiene que serlo. Es un puesto donde se vive donde se trabaja, donde los conflictos tienen nombre y apellido y donde una decisión en la garita puede cambiar una vida. Dos semanas bastan para saber si eso te mueve. La tercera dirá cuánto.',
      visual: { tipo: 'cambio', titulo: 'De la subida a hoy', pares: [['Soroche y dudas', 'Conoces a todos por su nombre'], ['Un contenedor desconocido', 'Tu oficina con tu carpeta azul'], ['Una comunidad desconfiada', 'Un comité que se instala el lunes']] },
    },
  },
];
