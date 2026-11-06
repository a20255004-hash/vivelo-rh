// Generalista de RR.HH. en operación minera · Capítulo 2 · «El comedor» · Semana 1, martes.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas:
// - D.S. 024-2016-EM, Reglamento de Seguridad y Salud Ocupacional en Minería: entre las actividades conexas que alcanza
//   figuran servicios como comedores, hoteles y campamentos.
//   https://lpderecho.pe/reglamento-de-seguridad-y-salud-ocupacional-en-mineria-ds-024-2016-em/
//   https://sinia.minam.gob.pe/metadatos/316151
// - Ley 26790 y D.S. 003-98-SA (SCTR), ya citadas en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'El comedor', dia: 'Semana 1, martes', foto: 'assets/3d/scenes/mineria.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '05:30', fin: '20:00', cierreHora: '19:45',
  apertura: 'Tu día 2 de 14. Dormiste a ratos, con la boca seca y el corazón acelerado. A las 5:40 suena el celular: cuarenta operadores se sentaron en el bus y no quieren subir a mina.', boton: 'Ir al paradero',
  kusi: 'Percy lo dijo anoche: el comedor iba a explotar. Respira hondo, que hoy toca escuchar mucho.',
  lead: 'Llamaste a quien sabía, escuchaste al delegado, evitaste que el reclamo terminara en sanciones masivas, revisaste el servicio del comedor y dejaste un acta con compromisos y fechas.',
  reflexion: '¿Cuándo un reclamo «pequeño», como la comida, deja de ser pequeño?',
  siguiente: { n: 3, titulo: 'Los contratistas', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'comedor', p: 'Reclamo del comedor', j: 'Percy · RR.HH.', d: 0, e: '40 operadores en el bus' },
  { id: 'contratistas', p: 'Ingreso de personal contratista', j: 'Ing. Mario Salas', d: 1, e: 'Póliza de Movitierra' },
  { id: 'turnos', p: 'Régimen de turnos 14 × 7', j: 'Percy · RR.HH.', d: 1, e: 'Sin novedad' },
  { id: 'comunidad', p: 'Empleo local con la comunidad', j: 'Doña Juana · Comunidad', d: 1, e: 'Compromiso de 30 %' },
];

export const FUTURO = {
  comedor_acta: ['Firmaste un acta del comedor con compromisos, responsables y fechas.', 'Wilber, el delegado, la sacará cada vez que algo falle.'],
  comedor_sancion: ['Se sancionó a los 40 operadores que no subieron.', 'El rumor del capítulo 6 encontrará terreno fértil.'],
  comedor_dialogo: ['Los 40 subieron a mina después de hablar contigo.', 'Wilber confiará en ti cuando corra el rumor.'],
  concesionario_revisado: ['Revisaste el servicio del concesionario con datos.', 'Gladys mejorará el turno noche, pero pedirá más presupuesto.'],
  delegado_informado: ['Les escribiste a los operadores qué se acordó y cuándo.', 'El grupo de operadores se calmó antes del turno noche.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  delegado: { n: 'Wilber Mamani', sub: 'Delegado de los operadores de mina', c: '#2F6B3F' },
  gladys: { n: 'Gladys Quispe', sub: 'Administradora del concesionario del comedor', c: '#C05621' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de contratista', who: 'contratista' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
};

export const WSP = [
  { chat: 'grupo', t: '05:40', de: 'Percy', txt: 'Te dije. Bus 3, paradero del campamento. 40 del turno día no quieren subir. Yo estoy en videollamada con Lima hasta las 7. Ve tú y escucha primero 🙏' },
  { chat: 'contratista', t: '08:10', de: 'Ing. Salas', txt: 'Ingeniera, la aseguradora dice que mañana en la tarde sale la póliza. Le mando copia apenas llegue.', si: 'sctr_ok' },
  { chat: 'contratista', t: '08:10', de: 'Ing. Salas', txt: 'Mis 8 ya están en el frente, todo tranquilo. Gracias por la confianza 👍', si: 'sctr_cede' },
  { chat: 'yuri', t: '12:15', de: 'Yuri', txt: 'Ingeniera, yo sí subí hoy. Pero el arroz de anoche estaba crudo, de verdad. Los compañeros no mienten.' },
  { chat: 'gladys', t: '15:20', de: 'Gladys', txt: 'Ingeniera, lo de la cena del turno noche lo puedo arreglar. Pero con lo que me paga la minera por plato, no hago milagros.' },
  { chat: 'delegado', t: '18:30', de: 'Wilber', txt: 'Ya leímos. Vamos a ver si cumplen. El viernes revisamos juntos, ¿ya?', si: 'delegado_informado' },
];

export const CORREOS = [
  { t: '07:05', de: 'Ing. Rodrigo Valdivia · Superintendente de Operaciones Mina', para: 'Percy Huillca; Generalista de RR.HH. · Campo', asunto: 'URGENTE · Paralización turno día', html: '<p>Tengo 40 operadores sin subir y dos palas paradas. Cada hora cuesta. Necesito que RR.HH. resuelva YA o que se apliquen las sanciones del Reglamento Interno a todos.</p><p>R. Valdivia</p>' },
  { t: '17:40', de: 'Percy Huillca', para: 'Generalista de RR.HH. · Campo', asunto: 'RE: Acta del comedor', html: '<p>Buen trabajo hoy. Ojo: mañana te toca Movitierra. Hay rumores de que su gente cobra tarde. Revisa sus boletas.</p><p>Percy</p>' },
];

export const QUIZ = [
  { q: 'Cuarenta operadores no quieren subir a mina por la comida. ¿Qué es lo primero?', ops: ['Sancionarlos a todos', 'Ir al lugar y escuchar a sus delegados', 'Esperar a que se cansen', 'Cambiar de concesionario ese mismo día'], ok: 1, por: 'Escuchar primero permite separar el reclamo real del enojo y negociar el regreso al trabajo.' },
  { q: 'En una operación remota, la comida es…', ops: ['Un detalle', 'Una de las condiciones que más pesa en el clima laboral', 'Responsabilidad solo del concesionario', 'Un beneficio voluntario sin importancia'], ok: 1, por: 'Lejos de la familia y con turnos de 12 horas, la comida es una de las pocas cosas buenas del día.' },
  { q: '¿Qué debe tener un acta de reclamo colectivo?', ops: ['Solo las firmas', 'Los reclamos, los compromisos, quién responde y para cuándo', 'Los nombres de quienes se quejaron para sancionarlos', 'Una disculpa del área de RR.HH.'], ok: 1, por: 'Sin responsables ni fechas, un acta es solo un papel.' },
  { q: 'El D.S. 024-2016-EM, Reglamento de Seguridad y Salud Ocupacional en Minería, alcanza también a…', ops: ['Solo la mina subterránea', 'Actividades conexas como comedores y campamentos', 'Solo a los ingenieros', 'Solo a las comunidades'], ok: 1, por: 'Entre las actividades conexas que alcanza figuran servicios como comedores, hoteles y campamentos.' },
  { q: 'Sancionar a 40 personas a la vez por un reclamo sin escuchar…', ops: ['Resuelve el problema', 'Suele endurecer el conflicto y crear nuevos líderes', 'Es lo que siempre recomienda RR.HH.', 'Mejora la comida'], ok: 1, por: 'La sanción masiva no arregla la causa y une a la gente contra la empresa.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '05:50', ch: 'llamada', who: null, titulo: 'Tres llamadas en el paradero', banner: 'assets/esc/alarma.webp', lugar: 'Paradero del campamento, 2 °C', show: ['tiempo', 'calidad'],
    body: () => `<p>Todavía es de noche. El bus 3 tiene el motor encendido y las ventanas empañadas. Adentro, cuarenta operadores con casco en las rodillas y los brazos cruzados.</p><p>Antes de subir a hablar con ellos, <mark class="clave">haces tres llamadas</mark> para entender qué pasó anoche.</p>`,
    type: 'calls',
    calls: [['Supervisor del turno noche', 'Contesta con voz ronca', '«Anoche la cena llegó a las once, fría. Arroz crudo, pollo con sangre. Tres muchachos fueron al tópico con dolor de estómago. Lo reporté y nadie dijo nada.»'], ['Tópico médico', 'La enfermera revisa el registro', '«Tres atenciones por dolor abdominal entre la medianoche y las dos. Leves. Les dimos sales y descanso. Uno no durmió.»'], ['Gladys Quispe · concesionario', 'Contesta desde la cocina, con ruido de ollas', '«Ingeniera, se me malogró la marmita grande y el cocinero del turno noche renunció la semana pasada. Avisé por correo a Logística. Nadie me respondió.»']],
    prompt: 'Ya sabes qué pasó. ¿Con qué te subes al bus?',
    choices: [
      { id: 'a', label: 'Con lo que averiguaste: reconoces que hubo un problema real, y vienes a escuchar qué necesitan para subir.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { percy: 1 },
          out: 'Subes al bus. Cuarenta cascos se giran a mirarte. Dices: «Sé lo de la cena y lo del tópico. Vengo a escuchar». Se hace silencio. Alguien dice: «Que hable Wilber».',
          pro: { ok: 'Llegar sabiendo los hechos te da credibilidad: no los haces repetir lo que ya pasó.', info: 'Antes de hablar con un grupo molesto, averigua qué pasó desde varias fuentes.' },
          kusi: ['animo', 'Llegaste sabiendo. Eso se nota.'] } },
      { id: 'b', label: 'Con el mensaje de Operaciones: primero suben a mina y después se conversa lo del comedor.',
        res: { q: 'riesgosa', fx: { confianza: -4, tiempo: 1 },
          out: 'Un silbido largo recorre el bus. «¿Y quién come esa comida? ¿Usted?». Nadie se mueve. Pierdes los primeros cinco minutos, que son los más importantes.',
          pro: { ok: 'Quieres que la operación siga.', risk: 'Pedir que trabajen antes de escuchar se lee como desprecio por lo que pasó.' },
          kusi: ['preocupado', 'Así no se abre una conversación…'] } },
    ],
    mirada: {
      ve: 'Un reclamo colectivo casi nunca nace el día que estalla. La cena fría, el cocinero que renunció y el correo sin respuesta ya estaban ahí. Escuchar varias fuentes antes de hablar es la diferencia entre llegar a negociar y llegar a apagar un incendio con gasolina.',
      visual: { tipo: 'linea', titulo: 'Cómo se armó el reclamo', hitos: [['Hace una semana', 'Renuncia el cocinero del turno noche'], ['Hace tres días', 'Se malogra la marmita'], ['Anoche', 'Cena fría y tres atenciones en el tópico'], ['Hoy, 5:40', '40 operadores no suben']] },
    },
  },
  {
    id: 'c2', t: '06:20', ch: 'presencial', who: null, titulo: 'Wilber, el delegado', banner: 'assets/foto2/tension.webp', lugar: 'Dentro del bus 3', show: ['personas', 'confianza'],
    body: () => `<p>Wilber Mamani tiene 48 años, es de Juliaca y lleva once años manejando palas. Habla bajito, pero todos callan cuando habla.</p><p>«Ingeniera, no es solo el arroz. <mark class="clave">Es que avisamos y nadie hace caso</mark>. ¿Qué quiere saber?»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Wilber.',
    opts: [
      { id: 'que', label: '«¿Qué necesitan para subir hoy?»', info: '«Que alguien de la minera revise hoy mismo la cocina con nosotros. Y que la cena del turno noche llegue caliente. No pedimos langosta.»' },
      { id: 'antes', label: '«¿Desde cuándo pasa y a quién avisaron?»', info: '«Hace tres semanas. Le dijimos al supervisor, él a Operaciones. Pusimos el reclamo en el buzón. El buzón está lleno de papeles que nadie lee.»' },
      { id: 'otros', label: '«¿Hay algo más que les moleste aquí arriba?»', info: '«El bus de bajada sale tarde y perdemos la conexión a Cusco. Y hay rumores de que van a recortar gente. Pero eso otro día.»' },
      { id: 'quien', label: '«¿Quién organizó que no suban?»', info: 'Wilber te mira serio. «Nadie organizó nada, ingeniera. Estamos hartos, nomás.» Detrás de él, alguien murmura: «Ya viene a buscar culpables».' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('quien') ? -3 : 3, confianza: picks.includes('quien') ? -3 : 2 },
      out: picks.includes('quien') ? 'La conversación se enfría. Wilber contesta lo justo. Sacas algo en limpio, pero el bus te mira con desconfianza.' : 'Wilber asiente. «Si revisan la cocina hoy, subimos. Palabra.» Anotas en tu libreta lo del bus de bajada y lo del rumor.',
      kusi: picks.includes('quien') ? ['preocupado', 'Buscar culpables cierra puertas.'] : ['curioso', 'Ojo con lo del rumor…'],
    }),
    rules: [[BP, 'En un reclamo colectivo, pregunta qué necesitan y qué ya intentaron. No busques culpables.']],
    mirada: {
      ve: 'Wilber no es un agitador: es la persona a la que sus compañeros le confían la voz. Tratarlo como interlocutor, y no como sospechoso, es lo que permite que el grupo vuelva a trabajar.',
      visual: { tipo: 'balanza', a: { t: 'Buscar al organizador', items: ['El grupo se cierra', 'Nace un nuevo conflicto'] }, b: { t: 'Preguntar qué necesitan', items: ['Una condición concreta para subir', 'Información de otros problemas'] } },
    },
  },
  {
    id: 'c3', t: '07:10', ch: 'llamada', who: null, titulo: 'Operaciones quiere sanciones', banner: 'assets/3d/scenes/mineria.webp', lugar: 'Paradero del campamento', show: ['etica', 'confianza', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Te llama el Ing. Rodrigo Valdivia, superintendente de Operaciones. Se nota que no ha dormido. «Dos palas paradas. Cada hora son toneladas que no salen. <mark class="clave">Que les apliquen el Reglamento Interno a los cuarenta</mark>, o mañana se paran ochenta.»</p><p>${F.has('sctr_ok') ? 'Ayer ya le retrasaste el frente de Movitierra. Hoy no tiene paciencia contigo.' : 'Tiene razón en algo: si no se resuelve, el reclamo se puede contagiar.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un trato: los 40 suben ahora, a las 12 revisas la cocina con Wilber y el concesionario, y las sanciones quedan en suspenso mientras se cumple el acuerdo.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, tiempo: -1, etica: 2 }, rel: { percy: 1 }, flags: ['comedor_dialogo'], cartera: { comedor: 'Los 40 subieron · revisión a las 12' },
          out: 'Valdivia gruñe: «Si a las 8 no están arriba, lo hago yo». A las 7:35 el bus arranca. Wilber te levanta el pulgar desde la ventana.',
          pro: { ok: 'Recuperas la operación sin castigar un reclamo que tenía fundamento.', risk: 'Si a las 12 no cumples, pierdes a los 40 y a Valdivia.', info: 'Lo que prometes en un bus, cúmplelo antes de que termine el día.' },
          kusi: ['celebra', '¡El bus arrancó! Ahora a cumplir.'] } },
      { id: 'b', label: 'Darle la razón: el Reglamento Interno es claro y un precedente así no se puede dejar pasar. Que se notifique a los 40.',
        res: { q: 'riesgosa', fx: { personas: -6, confianza: -4, cumplimiento: 1 }, rel: { yuri: -1 }, flags: ['comedor_sancion'], cartera: { comedor: '40 notificados · el reclamo sigue' },
          out: 'Los 40 suben a las 9, con la carta en el bolsillo y la mandíbula apretada. En la cena, otras dos mesas ya hablan de «hacer lo mismo».',
          pro: { ok: 'Aplicas una norma interna.', risk: 'Sancionar un reclamo con fundamento, sin escuchar, convierte un problema de comida en un problema de confianza.' },
          kusi: ['triste', 'La comida sigue igual… y ahora hay rabia.'] } },
      { id: 'c', label: 'Pedirle una hora para pensarlo y esperar a que Percy salga de su videollamada.',
        res: { q: 'aceptable', fx: { tiempo: -3, confianza: -1 }, flags: ['comedor_dialogo'], cartera: { comedor: 'Esperando a Percy' },
          out: 'A las 7:20 Percy sale de su llamada y hace exactamente lo que tú pudiste proponer. El bus sube a las 8:10. Valdivia anota la demora.',
          pro: { ok: 'Consultas antes de decidir algo grande.', risk: 'En campo, la hora que esperas la paga la operación.' },
          kusi: ['pensando', 'A veces hay que decidir con lo que tienes.'] } },
    ],
    rules: [[POL, 'Las sanciones del Reglamento Interno se aplican caso por caso, con descargos.'], [BP, 'Un reclamo con fundamento se resuelve; no se castiga en bloque.']],
    mirada: {
      ve: 'Valdivia no es el villano: responde por la producción y sabe que un precedente se contagia. Tu trabajo es ofrecerle una salida que recupere la operación hoy sin enterrar un reclamo justo bajo cuarenta cartas.',
      visual: { tipo: 'matriz', x: 'Rapidez para recuperar la operación', y: 'Confianza que queda', cuadrantes: ['Rápido y con confianza', 'Lento, pero con confianza', 'Lento y sin confianza', 'Rápido, pero sin confianza'], items: [['Subir ahora + revisión a las 12', .8, .85], ['Esperar a Percy', .35, .6], ['Sanción a los 40', .55, .1]] },
    },
  },
  {
    id: 'c4', t: '12:00', ch: 'documento', who: null, titulo: 'La cocina, con lupa', banner: 'assets/foto/supervisa.webp', lugar: 'Cocina del comedor central', show: ['calidad', 'cumplimiento'],
    body: () => `<p>A mediodía entras a la cocina con Wilber y Gladys. Hace calor, huele a ajo y a cloro. Gladys te pasa su hoja de control del servicio.</p><p>Revisas con ella <mark class="clave">qué está fallando y qué está bien</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir en el servicio.',
    doc: { t: 'Control del servicio de alimentación', sub: 'Concesionario Sabores Andinos · semana en curso' },
    lines: [
      { id: 'cena', t: 'Cena del turno noche: se despacha a las 18:00 y se sirve a las 23:00 en el comedor de mina.', bad: BP, why: 'Cinco horas sin cadena de calor explican la comida fría y los dolores de estómago.' },
      { id: 'cocinero', t: 'Cocinero del turno noche: puesto vacante desde hace 8 días; lo cubre un ayudante.', bad: BP, why: 'Una vacante crítica sin cubrir es el origen del problema.' },
      { id: 'marmita', t: 'Marmita grande: malograda, pedido de repuesto enviado a Logística sin respuesta.', bad: BP, why: 'El correo sin respuesta es justo lo que indignó a los operadores.' },
      { id: 'menu', t: 'Menú semanal publicado en la puerta del comedor, con opción vegetariana.' },
      { id: 'agua', t: 'Agua caliente y mates disponibles las 24 horas.' },
      { id: 'buzon', t: 'Buzón de sugerencias: 63 papeles sin leer desde el mes pasado.', bad: BP, why: 'Un buzón que nadie lee le enseña a la gente que reclamar no sirve.' },
    ],
    res: ({ hitsBp = 0, falsos = 0 }) => ({
      q: hitsBp >= 3 && !falsos ? 'buena' : hitsBp >= 2 ? 'aceptable' : 'riesgosa',
      out: hitsBp >= 3 ? `Le señalas ${hitsBp} problemas a Gladys, con Wilber delante. Ella no se defiende: «Eso mismo le escribí a Logística». Wilber, por primera vez, sonríe.` : 'Encuentras parte de los problemas. Wilber, en voz baja, te muestra la hora de despacho de la cena.',
      flags: hitsBp >= 2 ? ['concesionario_revisado'] : [], rel: { yuri: hitsBp >= 3 ? 1 : 0 },
      cartera: { comedor: hitsBp >= 3 ? 'Cocina revisada: 4 fallas identificadas' : 'Cocina revisada a medias' },
      pro: { ok: 'Mirar el servicio con datos convierte la queja en un plan.', info: 'El concesionario también es parte de la solución: muchas fallas vienen de la propia minera.' },
      kusi: hitsBp >= 3 ? ['feliz', '¡Ahora sí sabemos por qué!'] : ['pensando', 'Mira la hora de la cena…'],
    }),
    rules: [[LEY, 'El Reglamento de Seguridad y Salud Ocupacional en Minería (D.S. 024-2016-EM) alcanza también actividades conexas como comedores y campamentos.'], [BP, 'Un buzón que nadie lee es peor que no tener buzón.']],
    mirada: {
      ve: 'Gladys no es la culpable: su cocinero renunció, su marmita se rompió y la minera no le respondió. Mirar el servicio completo te muestra que la mitad de la solución está dentro de tu propia empresa.',
      visual: { tipo: 'cambio', titulo: 'Del reclamo al plan', pares: [['Cena a las 23:00, despachada a las 18:00', 'Cena en termos, despachada a las 21:30'], ['Sin cocinero noche', 'Reemplazo en 48 horas'], ['Buzón sin leer', 'Revisión semanal con el delegado']] },
      normas: [{ ley: 'D.S. 024-2016-EM, Reglamento de Seguridad y Salud Ocupacional en Minería', dice: 'Su alcance incluye actividades conexas a la minería, entre ellas servicios como comedores, hoteles y campamentos.', practica: 'La cocina del campamento también es parte de la seguridad y salud de la operación.' }],
    },
  },
  {
    id: 'c5', t: '14:30', ch: 'documento', who: null, titulo: 'El acta del comedor', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>Almuerzas un caldo de cordero mientras escribes. Wilber, Gladys y un representante de Logística esperan para firmar.</p><p>Es tu primer entregable aquí arriba: <mark class="clave">el acta del comedor</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del acta.', boton: 'Pasar el acta a firma',
    bloques: [
      { id: 'rec', t: 'Reclamos', n: 2, ops: [
        { id: 'r1', t: 'Cena del turno noche fría y mal cocida; tres atenciones en el tópico la noche del lunes.', ok: true },
        { id: 'r2', t: 'Reclamos anteriores sin respuesta: buzón y avisos al supervisor.', ok: true, por: 'Reconocer que se avisó antes repara confianza.' },
        { id: 'r3', t: 'Lista de los 40 operadores que no subieron.', ok: false, por: 'Un acta de reclamo no es un registro de faltas.' },
      ] },
      { id: 'comp', t: 'Compromisos', n: 2, ops: [
        { id: 'c1', t: 'Concesionario: cena en termos, despachada a las 21:30, desde hoy.', ok: true },
        { id: 'c2', t: 'Logística: repuesto de la marmita y cocinero de reemplazo, en 48 horas.', ok: true },
        { id: 'c3', t: 'La minera mejorará la comida «en lo posible».', ok: false, por: 'Sin qué, quién ni cuándo, no es un compromiso.' },
      ] },
      { id: 'seg', t: 'Seguimiento', n: 2, ops: [
        { id: 's1', t: 'Revisión conjunta con el delegado el viernes a las 12.', ok: true },
        { id: 's2', t: 'RR.HH. lee el buzón cada lunes y responde en el mural.', ok: true },
        { id: 's3', t: 'Si se repite, se aplica el Reglamento Interno a los operadores.', ok: false, por: 'Amenazar en el acta deshace lo que se ganó en el bus.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 4 : 0, cumplimiento: 2 },
        flags: q === 'riesgosa' ? [] : ['comedor_acta'], cartera: { comedor: q === 'riesgosa' ? 'Acta sin compromisos claros' : 'Acta firmada · revisión el viernes' },
        out: q === 'buena' ? 'Wilber lee el acta dos veces y firma. «Es la primera vez que hay fechas.» Logística firma con cara de pocos amigos.' : 'Se firma un acta, pero Wilber la dobla sin mucho entusiasmo: «A ver si se cumple».',
        pro: { ok: 'Un acta con responsables y fechas es una herramienta, no un trámite.', risk: 'Un acta vaga o con amenazas se vuelve el próximo motivo de reclamo.', info: 'Manda copia del acta a todos los que firmaron el mismo día.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Qué bacán! Fechas y responsables.' : 'Le faltan fechas o le sobran amenazas.'],
      };
    },
    rules: [[BP, 'Toda acta lleva qué se hará, quién responde y para cuándo.']],
    mirada: {
      ve: 'El acta es lo que queda cuando todos bajan del bus. Si dice quién hace qué y cuándo, el viernes habrá algo concreto que revisar. Si no, el próximo reclamo empezará con «ya firmamos y no cumplieron».',
      visual: { tipo: 'flujo', titulo: 'El acta del comedor', pasos: ['Reclamos reconocidos', 'Compromisos con responsable', 'Fechas', 'Revisión conjunta'], aqui: 1 },
    },
  },
  {
    id: 'c6', t: '17:15', ch: 'whatsapp', who: null, titulo: 'Avisar antes del turno noche', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Contenedor de RR.HH.', show: ['confianza', 'personas'],
    body: () => `<p>A las 18:00 entra el turno noche, los mismos que comieron arroz crudo ayer. Si no saben lo que se acordó, el reclamo empieza otra vez.</p><p>Le escribes a Wilber para que lo comparta en el grupo de operadores. <mark class="clave">Corto y concreto</mark>.</p>`,
    type: 'compose', enviaA: 'delegado', para: 'Para: Wilber Mamani · Delegado', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'rec', t: 'El reconocimiento', ops: [
        { id: 'r1', t: 'Wilber, gracias por hoy. Tenían razón con la cena: lo revisamos juntos en la cocina.', ok: true, por: 'Reconoces el reclamo sin rodeos.' },
        { id: 'r2', t: 'Wilber, ya está todo solucionado 😊', ok: false, por: 'Todavía no lo está: la marmita llega en 48 horas.' },
      ] },
      { id: 'que', t: 'Lo que cambia', ops: [
        { id: 'q1', t: 'Desde hoy la cena del turno noche sale a las 21:30 en termos. Cocinero y marmita, en 48 horas.', ok: true, por: 'Fechas y cambios concretos.' },
        { id: 'q2', t: 'Se va a mejorar la comida poco a poco.', ok: null, por: 'Bien intencionado, pero no dice qué ni cuándo.' },
      ] },
      { id: 'seg', t: 'El seguimiento', ops: [
        { id: 's1', t: 'El viernes a las 12 revisamos juntos si se cumplió. Si algo falla antes, escríbeme a mí.', ok: true, por: 'Le das un canal y una fecha.' },
        { id: 's2', t: 'Y por favor que no se repita lo del bus, ¿ya?', ok: false, por: 'Reclamar no fue el problema; la comida sí.' },
      ] },
    ],
    res: sel => {
      const mal = sel.rec === 'r2' || sel.seg === 's2', buenas = ['r1', 'q1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['delegado_informado'] : [],
        out: q === 'buena' ? 'Wilber reenvía tu mensaje al grupo «Operadores Puquio». En diez minutos hay veinte pulgares y un «a ver, pues».' : mal ? 'Wilber responde con un escueto «ok». En el grupo alguien escribe: «¿Y nos están amenazando?».' : 'Wilber lo reenvía. Preguntan: «¿Y cuándo?». No tienes respuesta en el mensaje.',
        pro: { ok: 'Informar a tiempo y con fechas evita que el turno noche empiece el reclamo de nuevo.', risk: 'Prometer de más o advertir de menos desarma lo que lograste.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Claro y con fecha. ¡Dale!' : 'Revisa qué dice y qué no.'],
      };
    },
    rules: [[BP, 'Después de un acuerdo, comunícalo a todos los turnos antes de que empiecen.']],
    mirada: {
      ve: 'En un campamento, los turnos casi no se cruzan. Si el turno noche no se entera de lo que se acordó a mediodía, para ellos nada cambió. La comunicación también se hace por turnos.',
      visual: { tipo: 'mensaje', titulo: 'Reconocer, concretar, seguir', txt: 'Tenían razón con la cena. Desde hoy sale a las 21:30 en termos. El viernes a las 12 revisamos juntos si se cumplió.' },
    },
  },
  {
    id: 'c7', t: '19:20', ch: 'presencial', who: 'percy', titulo: 'La cena del martes', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del campamento', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Percy te alcanza un mate de coca. ${F.has('comedor_sancion') ? 'Mira las mesas tensas a su alrededor: «Las cartas no arreglaron el arroz».' : 'El comedor está tranquilo. «Valdivia me llamó. Dice que eres terca. Viniendo de él, es un elogio.»'}</p><p>«Wilber me contó otra cosa: <mark class="clave">dicen que vamos a recortar gente</mark>. No es verdad. ¿Qué hacemos con eso?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Anotarlo como alerta y proponer averiguar de dónde sale el rumor antes de que crezca.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 2 }, rel: { percy: 1 },
          out: 'Percy asiente. «Los rumores aquí arriba corren más rápido que los volquetes. Pero mañana te toca Movitierra. Una cosa a la vez.»',
          pro: { ok: 'Registrar señales tempranas es parte del trabajo en campo.', info: 'Un rumor que nadie aclara se vuelve verdad en una semana.' },
          kusi: ['curioso', 'Ese rumor va a volver…'] } },
      { id: 'b', label: 'Dejarlo pasar: si no es verdad, ya se apagará solo.',
        res: { q: 'aceptable', fx: { tiempo: 1 },
          out: 'Percy se encoge de hombros. «Ojalá.» En la mesa de al lado, alguien dice «recorte» en voz alta.',
          pro: { ok: 'Priorizas lo urgente.', risk: 'Los rumores no se apagan solos en un campamento.' },
          kusi: ['pensando', 'Los rumores no se cansan.'] } },
    ],
    mirada: { ve: 'Hoy apagaste un reclamo, pero escuchaste el próximo. En campo, la generalista aprende a llevar una libreta de señales: cosas pequeñas que, si nadie atiende, se vuelven el conflicto de la semana siguiente.' },
  },
];
