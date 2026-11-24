// Supervisor/a de SST · Capítulo 5 · «El pedido urgente» · Semana 1, viernes.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR, art. 99: la interrupción de actividades en caso de inminente peligro (prevista en el art. 63 de la
//   Ley 29783) no debe originar perjuicio económico al trabajador. Art. 27: la formación se centra en el puesto específico
//   y en los cambios de funciones. Art. 82: identificar peligros, evaluar riesgos y aplicar medidas.
// - D.S. 019-2006-TR, art. 27.9: incumplimientos en materia de máquinas y medidas de protección colectiva de los que se derive
//   un riesgo grave son infracción grave.
// - Ley 29783: principio de prevención (explicado como principio, sin número de artículo).

export const CAP = {
  n: 5, titulo: 'El pedido urgente', dia: 'Semana 1, viernes', foto: 'assets/foto/taller.webp',
  lugar: 'Productos Mar de Piura · Línea de anillas',
  inicio: '06:20', fin: '19:30', cierreHora: '19:10',
  apertura: 'Viernes. A las 18:00 cierra el contenedor de pota en anillas para Busan, Corea. Faltan siete toneladas. Y el sensor de la guarda de la cortadora falla desde el martes.', boton: 'Ir a la línea de anillas',
  kusi: 'Los días de pedido urgente son los días en que más gente se lastima. ¡Hoy se ve de qué estás hecho/a!',
  lead: 'Leíste el plan de contingencia de Carlos, llamaste a quienes sabían del sensor, encontraste la cinta, decidiste qué hacer con la línea, buscaste cómo recuperar producción y cerraste el día con Julio y con Carlos.',
  reflexion: '¿Cómo dices «alto» sin convertirte en el enemigo de la producción?',
  siguiente: { n: 6, titulo: 'El incidente', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'busan', p: 'Contenedor de anillas a Busan', j: 'Carlos Ruiz · Producción', d: 0, e: 'Cierra hoy 18:00 · faltan 7 t' },
  { id: 'sensor', p: 'Sensor de la guarda de la cortadora', j: 'Segundo Sosa · Mantenimiento', d: 0, e: 'Falla por humedad desde el martes' },
  { id: 'bloqueo', p: 'Bloqueo y etiquetado', j: 'Mantenimiento', d: 0, e: 'Acuerdo del comité: candados personales hoy' },
  { id: 'drenaje', p: 'Drenaje de eviscerado', j: 'Carlos Ruiz · Producción', d: 0, e: 'Acuerdo del comité: dos semanas' },
];

export const FUTURO = {
  sensor_respetado: ['No dejaste trabajar la cortadora con el sensor puenteado: se cambió por el de la línea vieja.', 'El contenedor cerró tarde, pero cerró. Capítulo 6.'],
  sensor_puenteado: ['La cortadora trabajó el viernes con el sensor puenteado con cinta.', 'Alguien lo verá. Capítulo 9.'],
  turno_sabado: ['Para recuperar producción se armó un turno extra el sábado en la noche.', 'Eviscerado trabajará cansado. Capítulo 6.'],
  julio_respalda: ['Julio respaldó tu decisión delante de Carlos.', 'Lo necesitarás en la investigación. Capítulo 7.'],
  carlos_tregua: ['Le escribiste a Carlos reconociendo su presión y proponiendo trabajar juntos.', 'Carlos llega menos a la defensiva al capítulo 7.'],
  carlos_resentido: ['Carlos terminó la semana sintiéndose derrotado por SST.', 'Escribirá su propia versión del incidente. Capítulo 7.'],
  arranque_seguro: ['El cambio de sensor se hizo con bloqueo y prueba antes de liberar la máquina.', 'Será el ejemplo de la capacitación. Capítulo 8.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  segundo: { n: 'Segundo Sosa', sub: 'Mecánico · miembro del comité', c: '#6B4FA0' },
  yesenia: { n: 'Yesenia Távara', sub: 'Asistente de SST', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'segundo', t: '06:05', de: 'Segundo', txt: 'Inge, el sensor de la guarda se dispara solo con el vapor. El repuesto de Lima llega el lunes. Tengo una idea, la espero en la línea.' },
  { chat: 'carlos', t: '06:15', de: 'Carlos', txt: 'Te mandé mi plan para hoy. Léelo antes de opinar, por favor.' },
  { chat: 'julio', t: '09:30', de: 'Julio', txt: 'Busan es el cliente más grande del año. No me pares la planta. Y no me lastimes a nadie. Confío en ti.' },
  { chat: 'flor', t: '11:05', de: 'Flor', txt: 'Inge, las de anillas dicen que paró la máquina usted. Algunas están molestas porque es destajo… y otras aliviadas.', si: 'sensor_respetado' },
  { chat: 'yesenia', t: '17:55', de: 'Yesenia', txt: 'Inge, el contenedor va cerrando 😅 Los de anillas aplaudieron cuando pasó la última caja.' },
];

export const CORREOS = [
  { t: '06:10', de: 'Carlos Ruiz', para: 'Supervisor/a de SST; Ing. Julio Zapata', asunto: 'Plan de contingencia · contenedor Busan', html: '<p>Para cumplir con Busan hoy:</p><p>1) Turno de anillas extendido a 14 horas. 2) Sensor de la guarda puenteado provisionalmente, con un operario supervisando. 3) Limpieza rápida de la cortadora sin parar la línea. 4) Paso a Kevin Chiroque y otro operario de cámaras a anillas. 5) Se suspenden las pausas de cámaras hasta el cierre.</p><p>Es solo por hoy. Carlos</p>' },
];

export const QUIZ = [
  { q: 'Un sensor de seguridad falla y Producción propone puentearlo «solo por hoy». ¿Qué es lo más correcto?', ops: ['Aceptar si alguien vigila', 'No operar con la protección anulada y buscar una solución que la mantenga', 'Aceptar si el gerente firma', 'Que lo decida el operario'], ok: 1, por: 'Una guarda anulada deja la máquina como estaba cuando ocurrió el accidente grave.' },
  { q: 'Si se interrumpe una tarea por inminente peligro, ¿el trabajador pierde su pago?', ops: ['Sí, siempre', 'No debe originarle perjuicio económico, salvo caso fortuito o fuerza mayor', 'Solo si es destajo', 'Depende del jefe'], ok: 1, por: 'Art. 99 del D.S. 005-2012-TR.' },
  { q: 'Mueven a un operario de cámaras a la cortadora para el día. ¿Qué exige el reglamento?', ops: ['Nada, es temporal', 'Formación centrada en el puesto específico y en los cambios de funciones', 'Solo firmar una lista', 'Que mire a otro'], ok: 1, por: 'Art. 27 del D.S. 005-2012-TR.' },
  { q: 'Antes de devolver a producción una máquina a la que se le cambió el sensor…', ops: ['Se arranca y se ve', 'Se prueba que la guarda detiene la máquina, se retiran los candados y se registra', 'Se espera al lunes', 'Basta con que el mecánico diga que está bien'], ok: 1, por: 'La prueba de la protección es lo que confirma que la máquina es segura antes de liberarla.' },
  { q: 'Decir «alto» a Producción funciona mejor cuando…', ops: ['Se dice a gritos', 'Viene con una alternativa para seguir produciendo de forma segura', 'Se manda por correo al día siguiente', 'Se dice solo al gerente'], ok: 1, por: 'Un «no» con alternativa se convierte en una decisión compartida.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '06:30', ch: 'correo', who: 'produccion', titulo: 'El plan de Carlos', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de SST', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Lees el correo de Carlos con el primer café del día, todavía de pie. Está escrito a las 6:10, con copia a Julio. ${F.has('comite_en_jornada') ? 'Carlos ya perdió contigo dos veces esta semana: lo del candado y lo del comité.' : 'Carlos sabe que esta semana le pusiste reparos.'}</p><p>El plan tiene cinco puntos. <mark class="clave">Marca los que no pueden pasar así</mark>.</p>`,
    type: 'flag', prompt: 'Marca los puntos del plan que incumplen la norma o que conviene corregir.',
    doc: { t: 'Plan de contingencia · contenedor Busan', sub: 'Carlos Ruiz · Jefe de producción · 06:10' },
    lines: [
      { id: 'turno', t: '1) Turno de anillas extendido a 14 horas.', bad: BP, why: 'Catorce horas en una línea con cuchillas multiplican la fatiga y los errores. Si se extiende, debe ser con relevos y pausas.' },
      { id: 'sensor', t: '2) Sensor de la guarda puenteado provisionalmente, con un operario supervisando.', bad: LEY, why: 'Anular una protección de una máquina que ya mutiló a alguien crea un riesgo grave; los incumplimientos en máquinas y protecciones con riesgo grave son infracción grave (D.S. 019-2006-TR, art. 27.9).' },
      { id: 'limpieza', t: '3) Limpieza rápida de la cortadora sin parar la línea.', bad: LEY, why: 'Es exactamente la condición del accidente de Hugo. Las medidas de prevención del empleador deben evitarlo (principio de prevención, Ley 29783).' },
      { id: 'kevin', t: '4) Kevin Chiroque y otro operario de cámaras pasan a anillas.', bad: LEY, why: 'Un cambio de puesto exige formación centrada en el puesto específico (art. 27 del reglamento). Kevin no conoce la cortadora.' },
      { id: 'pausas', t: '5) Se suspenden las pausas de cámaras hasta el cierre.', bad: BP, why: 'Contradice la IPERC de cámaras de ayer. Las pausas son control del frío, no un premio.' },
      { id: 'cliente', t: 'Nota: el cliente de Busan es el más grande del año.', duda: 'Es verdad, y es una presión legítima. La pregunta es cómo se cumple sin repetir el accidente.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Respondes al correo con observaciones generales. Carlos contesta: «¿Cuál de todos es el problema?».' : `Encontraste ${hitsLey} problemas legales y dos malas prácticas. El plan no es malicioso: es lo que hace alguien con miedo de fallarle al cliente más grande del año.`,
      cartera: { busan: missLey ? 'Plan de Carlos con observaciones vagas' : 'Plan observado: sensor, limpieza, Kevin, pausas y 14 horas' },
      pro: { ok: 'Leer el plan antes de opinar te permite responder punto por punto.', risk: 'Si solo dices «no» a todo, Carlos irá directo a Julio.', info: 'Detrás de cada punto riesgoso hay una necesidad real: capacidad, tiempo y gente.' },
      kusi: missLey ? ['pensando', 'Hay puntos que no pueden pasar…'] : ['curioso', '¡Cinco puntos, cinco problemas, una presión real!'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, art. 27: formación centrada en el puesto específico y en los cambios de funciones.'], [LEY, 'D.S. 019-2006-TR, art. 27.9: infracción grave por incumplimientos en máquinas y protecciones de los que derive riesgo grave.']],
    mirada: {
      ve: 'Los planes de contingencia se escriben con apuro y suelen sacrificar primero lo que «no produce»: pausas, guardas, inducciones. Leerlos con calma y separar lo legítimo de lo peligroso es la mitad de la negociación.',
      visual: { tipo: 'cambio', titulo: 'La necesidad detrás de cada punto', pares: [['Puentear el sensor', 'Necesito la cortadora funcionando'], ['Limpiar sin parar', 'Necesito no perder minutos'], ['Pasar a Kevin', 'Necesito más manos'], ['Suspender pausas', 'Necesito sacar cajas más rápido']] },
    },
  },
  {
    id: 'e2', t: '07:30', ch: 'llamada', who: null, titulo: 'El sensor', banner: 'assets/foto/llamada.webp', lugar: 'Línea de anillas', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>La línea de anillas hace un ruido metálico continuo. Cada vez que el vapor del lavado sube, el sensor de la guarda corta la máquina y alguien grita «¡otra vez!». Carlos mira el reloj.</p><p>Antes de decidir, <mark class="clave">llamas a quienes saben del sensor</mark>.</p>`,
    type: 'calls',
    calls: [['Segundo Sosa · mecánico y miembro del comité', 'Contesta desde debajo de la cortadora', '«La línea vieja, la que está parada en el galpón, tiene un sensor del mismo modelo pero con carcasa sellada. Si bloqueamos la máquina, en dos horas lo cambio. No es lo ideal, pero protege.»'], ['Técnico del proveedor · Lima', 'Contesta con eco de oficina', '«Puentearlo es dejar la guarda decorativa. El sensor de la línea vieja sirve si se prueba antes de liberar la máquina. El repuesto nuevo sale hoy, llega el lunes.»'], ['Ing. Julio Zapata · gerente', 'Contesta caminando', '«¿Dos horas parada la cortadora? ¿Y las anillas de dónde salen?» Silencio. «¿No se puede cortar a mano mientras tanto?»']],
    prompt: '¿Qué propones para las próximas dos horas?',
    choices: [
      { id: 'a', label: 'Bloquear la cortadora dos horas para que Segundo cambie el sensor, y mientras tanto cortar anillas a mano en dos mesas de eviscerado, con las fileteadoras más rápidas.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 4, tiempo: -2 }, rel: { 'julio-sst': 1 }, flags: ['sensor_respetado'], cartera: { sensor: 'Cambio por el sensor sellado de la línea vieja · 2 horas', busan: 'Anillas a mano mientras se cambia el sensor' },
          out: 'Julio lo piensa tres segundos: «Hazlo». Flor organiza a cuatro fileteadoras para cortar anillas a mano. Carlos no dice nada, pero tampoco se opone.',
          pro: { ok: 'Mantienes la protección y le das a Producción una forma de seguir avanzando.', risk: 'El corte manual es más lento: el contenedor puede cerrar tarde.', info: 'La idea del corte a mano fue de Julio. Dale el crédito: así es más suya que tuya.' },
          kusi: ['celebra', '¡Un «no» con alternativa!'] } },
      { id: 'b', label: 'Aceptar el puente del sensor solo hasta mediodía, con Segundo vigilando la máquina.',
        res: { q: 'riesgosa', fx: { calidad: -3, cumplimiento: -5, tiempo: 3 }, rel: { produccion: 1 }, flags: ['sensor_puenteado'], cartera: { sensor: 'Puenteado con cinta hasta mediodía' },
          out: 'Segundo pone la cinta con cara de pocos amigos. A las 11:00 lo llaman para un compresor de la cámara 2 y la cortadora sigue sola, sin guarda efectiva, con Kevin alimentándola.',
          pro: { ok: 'La línea no se detiene.', risk: 'Un vigía se distrae o lo llaman. La guarda anulada sigue anulada.' },
          kusi: ['triste', 'Kevin, solo, frente a la cortadora sin guarda…'] } },
    ],
    rules: [[BP, 'Una protección de máquina no se anula: se repara o se reemplaza por otra equivalente, y se prueba.']],
    mirada: {
      ve: 'Las mejores soluciones en un día de presión casi nunca son tuyas: son del mecánico que conoce la máquina y del gerente que conoce la producción. Tu trabajo es poner el límite y abrir la conversación.',
      visual: { tipo: 'balanza', a: { t: 'Puentear el sensor', items: ['Cero minutos parados', 'Guarda decorativa', 'Como el día de Hugo'] }, b: { t: 'Cambiar el sensor y cortar a mano', items: ['Dos horas más lentas', 'Máquina protegida', 'Contenedor tarde, pero seguro'] } },
    },
  },
  {
    id: 'e3', t: '10:45', ch: 'presencial', who: 'produccion', titulo: 'La cinta', banner: 'assets/foto2/grito.webp', lugar: 'Línea de anillas', show: ['etica', 'cumplimiento', 'personas', 'tiempo'],
    body: (n, F) => `<p>${F.has('sensor_respetado') ? 'Vuelves a la línea a ver cómo va el cambio. La cortadora debería estar bloqueada.' : 'Pasas por la línea a las 10:45.'} La cortadora está funcionando. Sobre el sensor de la guarda hay <mark class="clave">un pedazo de cinta gris</mark>. Kevin alimenta la máquina con pota; tiene la mano a treinta centímetros de la cuchilla.</p><p>Carlos está a tu lado: «${F.has('sensor_respetado') ? 'Segundo se demoraba. Era solo media hora' : 'Ya lo habíamos hablado'}, ${n}. No me hagas esto delante de todos».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir que se detenga la cortadora ahora, en voz calmada, quitar la cinta, bloquearla y decirle a Kevin que no perderá su pago por la parada. Hablar con Carlos después, a solas.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, tiempo: -2, personas: 3 }, rel: { produccion: -1 }, flags: ['sensor_respetado'], cartera: { sensor: 'Cinta retirada; máquina bloqueada hasta probar el sensor' },
          out: 'La cortadora se detiene con un chirrido. La línea se queda en silencio. Kevin retrocede y se mira la mano. Carlos aprieta la mandíbula y se va a su oficina. Una operaria mayor, sin mirarte, dice bajito: «Así se para, inge».',
          pro: { ok: 'Ante un peligro inminente se interrumpe la tarea. Hacerlo con calma y sin humillar a nadie es lo que la planta recuerda.', risk: 'Carlos fue expuesto delante de su gente. Esa herida la tendrás que atender hoy mismo.', info: 'La interrupción por inminente peligro no debe causar perjuicio económico al trabajador (art. 99 del reglamento). En destajo, eso hay que decirlo en voz alta.' },
          kusi: ['animo', 'Alto, con calma y con una mano a salvo.'] } },
      { id: 'b', label: 'No hacer escándalo: esperar a que terminen la tanda de media hora y pedirle a Carlos, en privado, que no vuelva a pasar.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { produccion: 1 }, flags: ['sensor_puenteado'], cartera: { sensor: 'Media hora más con la cinta' },
          out: 'Durante media hora miras la mano de Kevin cada vez que se acerca a la cuchilla. No pasa nada. Carlos te agradece «la discreción». En la línea, todos vieron que viste la cinta y no hiciste nada.',
          pro: { ok: 'Cuidas la autoridad de Carlos frente a su gente.', risk: 'Treinta centímetros. La autoridad de Carlos no vale una mano.' },
          kusi: ['preocupado', 'La línea entera vio que no hiciste nada…'] } },
      { id: 'c', label: 'Detener la máquina y enviarle a Julio, con copia a gerencia general, una foto de la cinta.',
        res: { q: 'aceptable', fx: { etica: 3, cumplimiento: 3, personas: -2 }, rel: { produccion: -1, 'julio-sst': -1 }, flags: ['sensor_respetado', 'carlos_resentido'], cartera: { sensor: 'Máquina detenida; foto escalada a gerencia general' },
          out: 'La máquina se detiene. La foto llega a Lima en un minuto. Julio te llama, molesto: «¿A gerencia general? ¿Sin hablar conmigo?». Carlos ya no te saluda.',
          pro: { ok: 'Detienes el peligro y dejas evidencia.', risk: 'Saltar a tu jefe en tu primera semana te quita un aliado justo cuando más lo necesitas.' },
          kusi: ['pensando', 'Detuviste bien… ¿pero era para Lima?'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 99: la interrupción de actividades en caso de inminente peligro no debe originar perjuicio económico al trabajador.'], [BP, 'Se detiene el peligro en público y se corrige a las personas en privado.']],
    mirada: {
      ve: 'Decir «alto» frente a una línea entera es el momento más visible del puesto. La forma importa tanto como la decisión: calma, una razón clara y ningún culpable señalado en público.',
      visual: { tipo: 'flujo', titulo: 'Decir «alto» bien', pasos: ['Detener', 'Bloquear', 'Tranquilizar a quien opera', 'Explicar el porqué', 'Hablar con el jefe a solas'] },
      normas: [{ ley: 'D.S. 005-2012-TR, art. 99', dice: 'La interrupción de las actividades en caso de inminente peligro, prevista en el art. 63 de la Ley 29783, no debe originar perjuicio económico al trabajador, salvo caso fortuito o fuerza mayor.', practica: 'Si la línea trabaja a destajo, la parada por seguridad no puede salir del bolsillo de Kevin.' }],
    },
  },
  {
    id: 'e4', t: '12:30', ch: 'documento', who: null, titulo: 'Recuperar el tiempo', banner: 'assets/esc/piensa.webp', lugar: 'Oficina de Producción', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Con la cortadora en cambio de sensor, el contenedor va dos toneladas atrasado. Julio, Carlos y tú se sientan frente a una pizarra blanca con un plumón que Carlos aprieta como si fuera un cuchillo.</p><p>Hay seis ideas. <mark class="clave">Elige las dos que propones tú</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos ideas que propones para recuperar producción.', boton: 'Proponer estas dos', resumen: 'Propusiste',
    cols: ['Idea', 'Efecto en seguridad'],
    rows: [
      { id: 'relevo', cells: ['Turno extendido con relevo del segundo turno a las 14:00, en vez de 14 horas seguidas', 'Mantiene gente descansada en la cortadora'] },
      { id: 'naviera', cells: ['Pedir a la naviera recibir el contenedor hasta el sábado 6:00 (el corte real del buque)', 'Quita presión sin tocar la seguridad'] },
      { id: 'manual', cells: ['Seguir cortando a mano en mesas de eviscerado', 'Riesgo de cortes leves, conocido y controlado'] },
      { id: 'pausas', cells: ['Suspender las pausas de cámaras', 'Contradice la IPERC: frío sin recuperación'] },
      { id: 'sabado', cells: ['Turno extra el sábado en la noche para eviscerado', 'Gente cansada después de una semana dura'] },
      { id: 'cinta', cells: ['Volver a poner la cinta «solo una hora»', 'Guarda anulada'] },
    ],
    score: { relevo: 3, naviera: 3, manual: 2, sabado: 1, pausas: 0, cinta: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, tiempo: q === 'buena' ? 3 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { 'julio-sst': q === 'buena' ? 1 : 0 },
        flags: picks.includes('sabado') ? ['turno_sabado'] : (q === 'buena' ? [] : ['turno_sabado']),
        cartera: { busan: picks.includes('naviera') ? 'Naviera consultada: corte real sábado 06:00' : 'Cierre hoy 18:00 sin margen' },
        out: picks.includes('naviera') ? 'Carlos llama a la agencia de aduanas delante de todos. Cuelga y se queda callado un momento: «El buque sale el domingo. Nos reciben hasta el sábado a las seis». Por primera vez en la semana, se ríe.' : 'Las ideas ayudan, pero el plazo sigue apretando. Julio decide un turno extra de eviscerado el sábado en la noche para adelantar el siguiente pedido.',
        pro: { ok: 'Parte del trabajo de SST es ayudar a resolver el problema de producción sin sacrificar controles.', info: 'Muchas veces el plazo «imposible» tiene margen: preguntar por el corte real de la naviera cambió el día.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Carlos se rió!' : 'Hay plazo detrás del plazo.'],
      };
    },
    rules: [[BP, 'Antes de sacrificar un control, pregunta si el plazo es real.']],
    mirada: {
      ve: 'Un/a supervisor/a de SST que solo dice «no» se queda sola/o. Uno/a que ayuda a encontrar margen en el plazo, relevos y alternativas se vuelve parte de la solución.',
      visual: { tipo: 'matriz', x: 'Ayuda a producir', y: 'Mantiene la seguridad', cuadrantes: ['Proponer', 'Proponer con cuidado', 'Descartar', 'Descartar'], items: [['Relevo a las 14:00', .7, .85], ['Corte real de la naviera', .8, .95], ['Corte a mano', .5, .65], ['Turno sábado noche', .6, .35], ['Sin pausas en cámaras', .6, .1], ['Cinta «una hora»', .9, .02]] },
    },
  },
  {
    id: 'e5', t: '14:20', ch: 'documento', who: null, titulo: 'Devolver la máquina', banner: 'assets/foto/supervisa.webp', lugar: 'Línea de anillas', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Segundo sale de debajo de la cortadora con la cara manchada de grasa y el sensor sellado de la línea vieja ya instalado. ${F.has('limpieza_parada') ? 'En la cortadora cuelgan los candados que compraste el lunes, ahora con etiquetas con nombre.' : 'Mantenimiento usa el único candado que tiene.'}</p><p>Carlos quiere arrancar ya. <mark class="clave">Antes, la máquina se devuelve en orden</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena cómo se devuelve la cortadora a producción.', boton: 'Liberar la cortadora',
    items: [
      { id: 'verifica', t: 'Segundo verifica que no queden herramientas ni personas dentro de la guarda', por: 'Nadie dentro antes de energizar.' },
      { id: 'candados', t: 'Cada persona retira su propio candado y etiqueta', por: 'Solo quien puso el candado lo quita.' },
      { id: 'vacio', t: 'Se arranca la máquina en vacío y se abre la guarda: la cuchilla debe detenerse', por: 'La prueba que importa: que la protección funcione.' },
      { id: 'registro', t: 'Se anota el cambio y la prueba en el registro de mantenimiento, con firma', por: 'Queda evidencia de que la máquina se liberó segura.' },
      { id: 'libera', t: 'Se entrega la máquina a Producción', por: 'Recién ahora vuelve la pota.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 }, flags: q === 'riesgosa' ? [] : ['arranque_seguro'],
        cartera: { sensor: q === 'riesgosa' ? 'Máquina liberada sin prueba' : 'Sensor sellado instalado y probado · registro firmado' },
        out: q === 'buena' ? 'Segundo abre la guarda con la máquina en vacío. La cuchilla se detiene en menos de un segundo. Kevin, que mira desde atrás, suelta el aire. Carlos firma el registro sin decir nada.' : q === 'aceptable' ? 'La máquina queda liberada, aunque Segundo te corrige: «La prueba va antes de firmar, inge. Si no, ¿qué firmamos?».' : 'La máquina arranca sin prueba. Funciona… o eso parece.',
        pro: { ok: 'Una máquina reparada no es segura hasta que se prueba su protección.', info: 'Este procedimiento, hecho hoy con nombre y apellido, es el mejor material para tu capacitación de la próxima semana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La cuchilla se detuvo!' : 'Primero probar, después firmar.'],
      };
    },
    rules: [[BP, 'Solo quien coloca un candado lo retira; la protección se prueba antes de liberar la máquina.']],
    mirada: {
      ve: 'El momento más peligroso de un mantenimiento no siempre es la reparación: es el arranque, cuando todos tienen prisa y alguien asume que «ya está».',
      visual: { tipo: 'flujo', titulo: 'Liberar una máquina', pasos: ['Nadie adentro', 'Cada uno quita su candado', 'Prueba en vacío', 'Registro', 'Entrega'] },
    },
  },
  {
    id: 'e6', t: '16:40', ch: 'presencial', who: 'julio-sst', titulo: 'Julio y Carlos', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Operaciones', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Julio los cita a los dos. Carlos llega con los brazos cruzados. ${F.has('sensor_puenteado') ? 'La cortadora trabajó media mañana con cinta y nadie lo ha dicho en voz alta.' : 'La cortadora trabaja desde las 14:30 con el sensor nuevo.'}</p><p>Julio te mira: «A ver, ${n}. <mark class="clave">¿Cómo cuentas tú lo de hoy?</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Contar los hechos sin culpar a nadie y reconocer que la idea de la naviera fue de Carlos y la del corte a mano fue de Julio. Proponer que el sensor sellado sea el estándar.',
        res: { q: null, fx: { confianza: 5, personas: 3 }, rel: { 'julio-sst': 1, produccion: 1 }, flags: ['julio_respalda'], cartera: { sensor: 'Propuesta: sensores sellados como estándar' },
          out: 'Carlos descruza los brazos. Julio asiente: «Hoy no se cortó nadie y el contenedor sale. Así quiero que se trabaje. Y lo de la cinta, Carlos, no vuelve a pasar». Carlos responde: «No vuelve a pasar».', kusi: ['feliz', '¡El mérito repartido suma aliados!'] } },
      { id: 'b', label: 'Contar lo de la cinta con detalle, para que Julio sepa quién la puso.',
        res: { q: null, fx: { confianza: 1, personas: -3 }, rel: { produccion: -1 }, flags: ['carlos_resentido'],
          out: 'Julio escucha en silencio y luego dice: «Ya entendí». Carlos sale de la oficina antes que tú. Lo que dijiste era verdad, pero hoy Carlos solo escuchó que lo acusaste.', kusi: ['pensando', 'Verdad… pero ¿qué ganaste?'] } },
    ],
    mirada: {
      ve: 'Después de un día de tensión, cómo se cuenta lo que pasó define las próximas semanas. Repartir el mérito no es adular: es construir la alianza que necesitarás cuando pase algo de verdad.',
      visual: { tipo: 'balanza', a: { t: 'Contar quién falló', items: ['Verdad', 'Carlos a la defensiva'] }, b: { t: 'Contar qué funcionó', items: ['Verdad', 'Mérito repartido', 'La regla queda clara'] } },
    },
  },
  {
    id: 'e7', t: '18:40', ch: 'whatsapp', who: null, titulo: 'Para Carlos', banner: 'assets/esc/meta.webp', lugar: 'Patio de carga', show: ['personas', 'confianza'],
    body: (n, F) => `<p>El contenedor refrigerado se cierra a las 18:35 con un golpe metálico y un precinto amarillo. ${F.has('turno_sabado') ? 'Julio confirma por el grupo un turno extra de eviscerado mañana sábado en la noche.' : 'Los de anillas se van a casa con el último sol de la semana.'}</p><p>Carlos fuma solo junto a la balanza de camiones. <mark class="clave">Le escribes antes de irte</mark>.</p>`,
    type: 'compose', enviaA: 'carlos', para: 'Para: Carlos Ruiz · Jefe de producción', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'reconoce', t: 'Qué reconoces', ops: [
        { id: 'r1', t: 'Carlos, sé que esta semana fue dura contigo y que el contenedor dependía de ti.', ok: true, por: 'Reconoces su presión real.' },
        { id: 'r2', t: 'Carlos, espero que hayas aprendido la lección.', ok: false, por: 'Suena a sermón.' },
      ] },
      { id: 'propone', t: 'Qué le propones', ops: [
        { id: 'p1', t: 'El lunes, ¿revisamos juntos el plan de la próxima semana para que la seguridad esté desde el inicio y no al final?', ok: true, por: 'Le ofreces trabajar juntos, antes del problema.' },
        { id: 'p2', t: 'El lunes te mando un memo con las reglas.', ok: false, por: 'Otro memo, otra pared.' },
      ] },
      { id: 'cierra', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Lo de la naviera fue tuyo. Buen fin de semana.', ok: true, por: 'Cierras con su logro.' },
        { id: 'c2', t: 'Saludos.', ok: null, por: 'Correcto, pero frío.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 3 : 0 }, rel: { produccion: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'buena' ? ['carlos_tregua'] : q === 'riesgosa' ? ['carlos_resentido'] : [],
        out: q === 'buena' ? 'Carlos tarda veinte minutos en responder. Cuando lo hace, es un audio corto: «Ya. El lunes vemos. Y gracias por lo de la naviera». Se escucha el viento de fondo.' : q === 'aceptable' ? 'Carlos responde: «Ok».' : 'Carlos lo lee y no responde.',
        pro: { ok: 'Reparar la relación el mismo día evita que el conflicto se vuelva personal.', risk: 'Si Carlos se siente derrotado, el próximo problema te lo esconderá.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Tregua con Carlos!' : 'Mañana también hay que trabajar juntos.'],
      };
    },
    mirada: { ve: 'Las relaciones con Producción se reparan rápido o se rompen despacio. Un mensaje el mismo día, que reconoce la presión del otro, vale más que tener la razón.' },
  },
];
