// Analista de Gestión del Desempeño · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Final abierto: el lunes de la Semana 3 llega un pedido de Gerencia General sobre los «necesita mejorar».
// Normas citadas (texto oficial en docs/normas/txt/1_DECRETO_SUPREMO_003_27_03_1997.txt; SPIJ: https://spij.minjus.gob.pe):
// - D.S. 003-97-TR, art. 23 b): rendimiento deficiente frente a la capacidad y al promedio en condiciones similares (ya citado).
// - D.S. 003-97-TR, art. 31: plazo escrito no menor de treinta días naturales para demostrar capacidad (ya citado).
// - Ley 29733: uso de los datos solo para la finalidad para la que se recogieron (ya citada).

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-brazos.webp',
  lugar: 'Alimentos Lima S.A. · Talento, Ate',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. Hoy se cierra la planilla de bonos. Hace dos semanas, la curva de resultados no se parecía a ninguna curva. Hoy tiene forma. Y el día todavía no termina.', boton: 'Abrir la bandeja',
  kusi: 'Último día de tus dos semanas. Mira atrás… pero no cierres la laptop todavía.',
  lead: 'Cerraste la planilla de bonos sin sorpresas, recibiste tu propia retroalimentación, escribiste un balance honesto y, a última hora, recibiste el pedido que abrirá la Semana 3.',
  reflexion: 'Después de estas dos semanas, ¿te ves en este puesto? ¿Qué parte de ti se encendió y qué parte se cansó?',
  siguiente: { n: 11, titulo: 'La lista', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'bonos', p: 'Planilla de bonos', j: 'Mónica · Planillas', d: 0, e: 'Cierra hoy 15:00' },
  { id: 'acta', p: 'Acta y expedientes', j: 'Talento', d: 0, e: 'Por archivar' },
  { id: 'formato', p: 'Formato nuevo', j: 'Talento', d: 0, e: 'Enero' },
  { id: 'balance', p: 'Balance del ciclo', j: 'Paola · Gerencia General', d: 0, e: 'Hoy' },
  { id: 'lista', p: 'Pedido de Gerencia General', j: 'Carmen Lozada', d: 0, e: 'Sin llegar' },
];

export const FUTURO = {
  planilla_limpia: ['La planilla de bonos salió con las notas calibradas y los 14 ajustes.', 'Nadie cobrará por error.'],
  balance_honesto: ['Tu balance dice lo que se logró y lo que no.', 'Paola lo usará para defender tu puesto.'],
  balance_inflado: ['Tu balance se atribuyó más de lo que pasó.', 'Alguien en el comité lo notará.'],
  lista_pausa: ['Le pediste a Carmen conversar el lunes antes de entregar una lista de nombres.', 'La Semana 3 empieza con esa reunión.'],
  lista_enviada: ['Le mandaste a Carmen la lista de los «necesita mejorar» el mismo viernes.', 'El lunes, esa lista ya estará circulando.'],
  lista_negada: ['Le dijiste a Carmen que no entregarás ninguna lista.', 'El lunes tendrás que explicar por qué, sin propuesta.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  wendy: { n: 'Wendy Rangel', sub: 'Practicante de Talento', c: '#C05621' },
  rafael: { n: 'Rafael Tapia', sub: 'Jefe de Producción · Planta', c: '#6B4F2F' },
  carmen: { n: 'Carmen Lozada', sub: 'Gerenta General', c: '#1A365D' },
};

export const WSP = [
  { chat: 'talento', t: '08:05', de: 'Mónica', txt: 'Hoy cierra la planilla de bonos 🙏 Si ven un error, griten antes de las 3.' },
  { chat: 'rafael', t: '09:30', de: 'Rafael', txt: 'Mis operarios preguntan si el año que viene también vienen ustedes a la planta. Les dije que sí. No me haga quedar mal 😄' },
  { chat: 'andres', t: '12:40', de: 'Andrés', txt: 'Me eligieron para probar el formato nuevo. Nunca pensé que diría esto, pero gracias por estas dos semanas.', si: 'formato_aprobado' },
  { chat: 'andres', t: '12:40', de: 'Andrés', txt: 'Ya cobré el bono. No es por la plata. Es que alguien miró lo que hice. Gracias.', no: 'formato_aprobado' },
  { chat: 'alberto', t: '16:15', de: 'Alberto', txt: 'Oye. Lo de esta semana… no fue fácil para mí. Pero fue justo. Buen fin de semana.', si: 'alberto_limite' },
  { chat: 'paola', t: '18:20', de: 'Paola', txt: 'Vi el correo de Carmen. No le respondas nada más hoy. Lunes 8:00 en mi oficina. Y gracias por estas dos semanas, en serio.' },
];

export const CORREOS = [
  { t: '08:00', de: 'Mónica Quispe', para: 'Talento', asunto: 'Planilla de bonos · versión final', html: '<p>Adjunto la versión final: 1,500 trabajadores, distribución calibrada y 14 ajustes por licencia. Por favor, revisen antes de las 15:00.</p>' },
  { t: '17:40', de: 'Carmen Lozada · Gerencia General', para: 'Paola Ríos; Analista de Gestión del Desempeño', asunto: 'Reservado · plan de eficiencia', html: '<p>Felicitaciones por el ciclo. El directorio aprobó un plan de eficiencia para el primer trimestre. Necesito para el lunes la lista de los trabajadores con «necesita mejorar», por área, para evaluar desvinculaciones. Por fin tenemos notas en las que se puede confiar.</p><p>Carmen</p>' },
];

export const QUIZ = [
  { q: '¿Puede una nota «necesita mejorar» por sí sola justificar un despido por rendimiento?', ops: ['Sí, automáticamente', 'No: el rendimiento deficiente se mide frente a la capacidad y al promedio, y hay que dar por escrito un plazo de treinta días naturales', 'Sí, si lo aprueba el directorio', 'Solo en Ventas'], ok: 1, por: 'El D.S. 003-97-TR exige comparar con la capacidad y el promedio (art. 23 b) y otorgar ese plazo (art. 31).' },
  { q: 'Las notas se recogieron para el bono y el desarrollo. Usarlas para despedir…', ops: ['No requiere pensarlo', 'Cambia su finalidad y exige revisar cómo y con qué garantías', 'Está prohibido siempre', 'Es lo que siempre se hace'], ok: 1, por: 'La Ley 29733 pide usar los datos para la finalidad para la que se recogieron. Cambiarla exige revisarlo con cuidado.' },
  { q: 'Un buen balance de tu propio trabajo…', ops: ['Solo cuenta los logros', 'Cuenta logros con datos, lo que no salió y lo que aprendiste', 'Culpa a los gerentes', 'Es mejor no hacerlo'], ok: 1, por: 'Un balance honesto es más creíble y más útil.' },
  { q: 'En estas dos semanas, ¿qué hizo creíble la evaluación?', ops: ['La cuota del 20 %', 'La evidencia, las anclas y la calibración', 'El bono', 'El sistema'], ok: 1, por: 'La credibilidad vino de decidir con evidencia y con reglas iguales para todos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:20', ch: 'documento', who: null, titulo: 'La planilla de bonos', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>El archivo de Mónica tiene 1,500 filas y una pestaña que, por fin, se llama «FINAL de verdad». ${F.has('finanzas_recorte') ? 'Tiene aplicado el recorte del 8 %.' : 'Los bonos salen completos.'} Antes de las 15:00 puedes revisar <mark class="clave">tres cosas</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres revisiones que haces antes del cierre.', boton: 'Revisar estas', resumen: 'Revisaste',
    cols: ['Revisión', 'Por qué'],
    rows: [
      { id: 'calib', cells: ['Que la nota de cada persona sea la calibrada y no la propuesta', 'El sistema guardó las dos'] },
      { id: 'madres', cells: ['Que los ajustes por licencia estén aplicados', 'Lo corregido no puede perderse en el Excel'] },
      { id: 'andres', cells: ['Que la nota de Andrés sea la del comité', 'Es la más discutida del ciclo'] },
      { id: 'formato', cells: ['Que las celdas tengan el mismo tipo de letra', 'Para que se vea ordenado'] },
      { id: 'sueldos', cells: ['Comparar los sueldos de los gerentes entre sí', 'Por curiosidad'] },
    ],
    score: { calib: 3, madres: 3, andres: 2, formato: -1, sueldos: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, cumplimiento: q === 'buena' ? 3 : -1, etica: picks.includes('sueldos') ? -3 : 0 },
        flags: q === 'buena' ? ['planilla_limpia'] : [], cartera: { bonos: q === 'buena' ? 'Planilla revisada y cerrada' : 'Planilla cerrada con revisiones a medias' },
        out: q === 'buena' ? 'Encuentras 23 filas con la nota propuesta en lugar de la calibrada, todas de Logística. Mónica las corrige a las 14:20. A las 15:00, la planilla se cierra limpia.' : picks.includes('sueldos') ? 'Los sueldos de los gerentes no eran tu revisión. Mientras tanto, 23 filas con la nota equivocada pasan al pago.' : 'Revisas algo, pero no lo que podía fallar.',
        pro: { ok: 'Lo que se decidió en el comité tiene que llegar intacto a la boleta.', risk: 'Mirar datos que no necesitas es un mal uso de tu acceso.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Veintitrés errores atrapados a tiempo!' : 'Lo importante era otra cosa.'],
      };
    },
    rules: [[LEY, 'Ley 29733: accede solo a los datos que necesitas para tu tarea.']],
    mirada: { ve: 'Todo el trabajo de una calibración puede perderse en un Excel. La última revisión no es un trámite: es el momento en que las decisiones se vuelven dinero.' },
  },
  {
    id: 'j2', t: '10:30', ch: 'presencial', who: null, titulo: 'Wendy pide su retroalimentación', banner: 'assets/foto/mentora.webp', lugar: 'Cafetería del primer piso', show: ['personas', 'calidad'],
    body: () => `<p>Wendy te invita un café de máquina. «Me enseñaste a preparar a los jefes para la retroalimentación. ¿Me das la mía? <mark class="clave">Quiero saber qué tengo que mejorar</mark>.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Usar la misma estructura del taller: preguntarle cómo ve sus dos semanas, darle un ejemplo bueno y uno por mejorar, y acordar un foco.',
        res: { q: 'buena', fx: { personas: 4, calidad: 2 },
          out: 'Wendy dice que su punto débil es hablar en reuniones. Le das un ejemplo: el martes, en el comedor, detectó antes que nadie los 90 «cumple» idénticos y no lo dijo. Acuerdan que en enero ella presenta un bloque del taller.',
          pro: { ok: 'Practicas lo que enseñas: estructura, ejemplos y un foco.' },
          kusi: ['feliz', 'Lo que enseñaste, lo hiciste. ¡Qué bacán!'] } },
      { id: 'b', label: 'Decirle que lo hizo todo bien y que siga así.',
        res: { q: 'aceptable', fx: { personas: 1 },
          out: 'Wendy sonríe, pero se va sin saber qué mejorar. Era justo lo que había pedido.',
          pro: { ok: 'La animas.', risk: 'Un «todo bien» no ayuda a crecer a quien pidió saber qué mejorar.' },
          kusi: ['pensando', 'Ella pidió algo más.'] } },
    ],
    rules: [[BP, 'La retroalimentación sirve si tiene ejemplos y un foco acordado.']],
    mirada: { ve: 'Quien enseña a dar retroalimentación también tiene que darla bien a su propio equipo. Es la prueba más honesta de lo que enseñaste.' },
  },
  {
    id: 'j3', t: '12:00', ch: 'presencial', who: 'paola', titulo: 'Tu propia conversación', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Paola', show: ['confianza', 'personas'],
    body: () => `<p>Paola cierra la puerta y saca su cuaderno. «Ahora te toca a ti. Dos semanas, y quiero que sepas cómo te vi.» Sonríe: «Empiezo como enseñaste: <mark class="clave">¿cómo ves tú tus dos semanas?</mark>». Después, te deja hacerle dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Paola.',
    opts: [
      { id: 'mejor', label: '¿Qué fue lo que mejor hice?', info: '«Que no te dejaste llevar ni por la simpatía de Alberto ni por la pena por Andrés. Fuiste a los datos. Eso es lo más difícil de este puesto.»' },
      { id: 'mejorar', label: '¿Qué tengo que mejorar?', info: '«A veces llegas con la conclusión antes de la evidencia. Ese impulso de justicia es bueno, pero en este puesto hay que esperar a tener los hechos. Y delega más en Wendy.»' },
      { id: 'futuro', label: '¿Qué viene para el puesto?', info: '«El formato nuevo, las conversaciones de junio y, si Finanzas cumple, un presupuesto que no nos haga pelear cada año. Ah, y algo que todavía no te puedo contar.»' },
      { id: 'nota', label: '¿Qué nota me pondrías?', info: '«Con el formato nuevo, tendría que mostrarte ejemplos. Así que no te voy a dar un número. Te di los ejemplos.» Se ríe.' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, personas: 1 }, rel: { paola: 1 },
      out: picks.includes('mejorar') ? 'Te llevas una frase anotada en la palma de la mano: «primero hechos, después conclusión».' : 'Sales de la oficina más liviana. Paola te deja una pregunta: «¿Te quedarías otro ciclo?».',
      kusi: ['feliz', 'Ahora sabes cómo te ven. Eso también se aprende.'],
    }),
    mirada: {
      ve: 'Recibir retroalimentación es tan difícil como darla. Preguntar «¿qué tengo que mejorar?» y escuchar sin defenderse es lo que esperas de los demás.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Paola', txt: 'Fuiste a los datos. Ahora aprende a esperar los hechos antes de la conclusión. Y delega.' },
    },
  },
  {
    id: 'j4', t: '14:00', ch: 'documento', who: null, titulo: 'El balance del ciclo', banner: 'assets/foto/revisa.webp', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Paola presentará el balance en el directorio. Escribes un borrador rápido. ${F.has('ventas_calibrada') ? 'Los números ayudan: del 80 % al 38 % de sobresalientes.' : 'Ventas siguió alta, y el balance tiene que decirlo.'}</p><p>Lo relees <mark class="clave">como lo leería Alberto</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que exagera, culpa o expone a alguien.',
    doc: { t: 'Balance del ciclo de desempeño', sub: 'Talento · borrador' },
    lines: [
      { id: 'cierre', t: 'Las 1,500 evaluaciones se cerraron dentro del plazo.' },
      { id: 'dist', t: 'La distribución pasó de 80 % a 38 % de sobresalientes, con evidencia, caso por caso.' },
      { id: 'yo', t: 'Gracias al trabajo de la analista, la empresa evitó una demanda segura.', bad: BP, why: 'Exagera y se atribuye un resultado que no puede probarse.' },
      { id: 'ventas', t: 'Ventas fue el área que más infló sus notas por decisión de su gerente.', bad: BP, why: 'Culpa a una persona en un documento del directorio. El dato basta: el área más inflada.' },
      { id: 'madres', t: 'Se corrigieron las notas de 14 trabajadoras afectadas por el descuento por licencia, y el formato se cambió.' },
      { id: 'andres', t: 'El caso de A. Huerta mostró represalias de su jefe.', bad: LEY, why: 'Nombra a dos personas y afirma una represalia que Auditoría todavía revisa. Es un dato personal sensible para ambos y una acusación sin conclusión.' },
      { id: 'pend', t: 'Pendiente: la conversación de mitad de año todavía no existe y los jefes de planta necesitan apoyo.', duda: 'Bien que lo digas: un balance honesto incluye lo que falta.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'El balance sale con el nombre de Andrés y la palabra «represalias». Paola lo detiene a tiempo: «Esto no puede ir al directorio».' : `Marcas ${hitsLey} frase con riesgo y quitas las que culpan o exageran. El balance queda en una página, con logros, errores y pendientes.`,
      flags: [missLey ? 'balance_inflado' : 'balance_honesto'],
      cartera: { balance: missLey ? 'Balance devuelto por Paola' : 'Balance honesto, listo para el directorio' },
      pro: { ok: 'Un balance creíble cuenta lo logrado con datos y lo pendiente sin miedo.', risk: 'Nombrar casos individuales ante el directorio expone a personas y debilita lo demás.' },
      kusi: missLey ? ['preocupado', 'Ese nombre no iba ahí.'] : ['celebra', '¡Un balance que se puede firmar!'],
    }),
    rules: [[LEY, 'Ley 29733: los casos individuales no van, con nombre, en un informe general.']],
    mirada: {
      ve: 'El balance de un proceso es también el balance de quien lo condujo. La tentación es contarlo como una victoria. Un balance honesto cuenta lo que mejoró, lo que no y lo que falta, sin héroes ni villanos.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes 1', 'El 80 %'], ['Martes 1', 'Los rezagados'], ['Viernes 1', 'La calibración'], ['Martes 2', 'El reclamo'], ['Jueves 2', 'El formato'], ['Viernes 2', 'El balance']] },
    },
  },
  {
    id: 'j5', t: '16:00', ch: 'llamada', who: null, titulo: 'Las últimas llamadas', banner: 'assets/foto2/callcenter.webp', show: ['personas', 'confianza'],
    body: () => `<p>La planilla se cerró. Antes de irte, haces tres llamadas que no están en ninguna lista de tareas.</p>`,
    type: 'calls',
    calls: [['Rafael Tapia · Planta', 'Contesta en el cambio de turno', 'Joven, en enero la espero con el papel y el lapicero. Y con el queque de mi señora.'], ['Lucía Paredes · Marketing', 'Contesta', 'Ya vi mi bono. Y me escribieron dos compañeras de otras áreas: a ellas también les corrigieron la nota.'], ['Mónica Quispe · Compensaciones', 'Contesta con la boca llena', 'Estoy comiendo los turrones que sobraron. Gracias por no dejarme sola con Finanzas.']],
    prompt: 'Lucía te cuenta que otras madres ya saben que fue por su reclamo. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Agradecerle: su reclamo cambió la evaluación para todas, y en enero se lo contarán a los jefes, sin su nombre.',
        res: { q: 'buena', fx: { personas: 3, confianza: 2 },
          out: 'Lucía se queda callada un momento. «Casi no lo mando, ¿sabe? Lo escribí a las once de la noche y lo borré dos veces.»',
          pro: { ok: 'Reconocer a quien reclamó anima a otros a hablar cuando algo está mal.' },
          kusi: ['feliz', 'Lo borró dos veces… y lo mandó.'] } },
      { id: 'b', label: 'Pedirle que no lo comente: es mejor que no se sepa que el cambio vino de un reclamo.',
        res: { q: 'aceptable', fx: { personas: -2 },
          out: 'Lucía dice «ok», pero su voz cambia. Lo que hizo bien ahora parece algo que debe esconder.',
          pro: { ok: 'Cuidas la reserva.', risk: 'Pedir silencio sobre un reclamo legítimo le dice a todos que reclamar es mal visto.' },
          kusi: ['pensando', '¿Por qué esconderlo?'] } },
    ],
    mirada: { ve: 'Las llamadas que nadie te pide son las que construyen la confianza que necesitarás el próximo ciclo: el jefe de planta, la persona que reclamó, la colega que cargó contigo los números.' },
  },
  {
    id: 'j6', t: '17:45', ch: 'correo', who: null, titulo: '«Por fin tenemos notas en las que se puede confiar»', banner: 'assets/esc/alarma.webp', show: ['etica', 'cumplimiento', 'confianza'],
    mail: { from: 'Carmen Lozada · Gerencia General', to: 'Paola Ríos; Analista de Gestión del Desempeño', asunto: 'Reservado · plan de eficiencia' },
    body: () => `<p>El directorio aprobó un plan de eficiencia para el primer trimestre. Necesito para el lunes <mark class="clave">la lista de los trabajadores con «necesita mejorar»</mark>, por área, para evaluar desvinculaciones. Por fin tenemos notas en las que se puede confiar.</p><p>Carmen</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder con respeto que la preparas, y pedir conversar el lunes antes de entregarla: una nota no basta, por sí sola, para despedir por rendimiento.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, confianza: 1 }, rel: { paola: 1 }, flags: ['lista_pausa'], cartera: { lista: 'Reunión lunes 8:00 antes de entregar' },
          responde: 'Carmen: gracias por la confianza en el proceso. Preparo la información por área. Antes de entregar nombres, ¿podemos conversar el lunes con Paola? La evaluación se hizo para el bono y el desarrollo, y para usarla en desvinculaciones hay que revisar cada caso: el rendimiento deficiente se mide frente a la capacidad y al promedio, y la ley exige dar por escrito un plazo para demostrar la capacidad. Quiero que la decisión sea sólida.',
          out: 'Carmen responde a las 18:10: «De acuerdo. Lunes a las 9:00, con Legal». Paola te escribe: «No respondas nada más hoy».',
          pro: { ok: 'No niegas la información ni la entregas sin contexto. Pides la conversación que la decisión necesita.', risk: 'Carmen puede sentir que frenas un plan del directorio.', info: 'El lunes lleva el art. 23 b) y el art. 31 del D.S. 003-97-TR, y qué notas se calibraron con más evidencia.' },
          kusi: ['pensando', 'La evaluación se volvió creíble… y ahora todos la quieren usar.'] } },
      { id: 'b', label: 'Mandarle la lista hoy: es la gerenta general y los datos son de la empresa.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4 }, flags: ['lista_enviada'], cartera: { lista: 'Lista enviada sin contexto' },
          responde: 'Carmen: adjunto la lista de los 150 trabajadores con «necesita mejorar», por área.',
          out: 'Carmen responde con un «gracias». El lunes, la lista ya está en manos de siete gerentes. Y alguien la reenvía a quien no debía.',
          pro: { ok: 'Cumples rápido el pedido.', risk: 'Usar notas pensadas para el bono como lista de despidos, sin revisión ni plazos, expone a la empresa y destruye la confianza en el proceso.' },
          kusi: ['preocupado', 'Esa lista ya no es tuya…'] } },
      { id: 'c', label: 'Responderle que la evaluación no se hizo para despedir y que no vas a entregar ninguna lista.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -4 }, flags: ['lista_negada'], cartera: { lista: 'Negada, sin propuesta' },
          responde: 'Carmen: la evaluación de desempeño no se hizo para despedir. No voy a entregar ninguna lista.',
          out: 'Carmen te cita el lunes a las 8:00, sola. Tienes razón en el fondo, pero no le diste ningún camino.',
          pro: { ok: 'Defiendes la finalidad del proceso.', risk: 'Negarte sin propuesta te deja fuera de una decisión que se tomará igual.' },
          kusi: ['pensando', 'Razón sí… ¿y el camino?'] } },
    ],
    rules: [[LEY, 'D.S. 003-97-TR, art. 23 b): el rendimiento deficiente se mide frente a la capacidad y al promedio en condiciones similares.'], [LEY, 'D.S. 003-97-TR, art. 31: plazo escrito no menor de treinta días naturales para demostrar la capacidad o corregir.'], [LEY, 'Ley 29733: los datos se usan para la finalidad para la que se recogieron.']],
    mirada: {
      ve: 'Es la paradoja de tu puesto: mientras la evaluación no era creíble, nadie la quería usar para nada serio. Ahora que lo es, todos la quieren usar para todo. Lo que pase el lunes decidirá si sigue siendo una herramienta para crecer o se vuelve una lista para salir.',
      visual: { tipo: 'balanza', a: { t: 'Entregar la lista', items: ['Rápido', 'Cumple el pedido'] }, b: { t: 'Conversar antes', items: ['Revisar caso por caso', 'Cumplir los plazos de la ley', 'Que la evaluación siga siendo creíble'] } },
      normas: [{ ley: 'D.S. 003-97-TR, art. 31', dice: 'Antes de despedir por una causa relacionada con la capacidad, el empleador otorga por escrito un plazo no menor de treinta días naturales para que el trabajador demuestre su capacidad o corrija su deficiencia.', practica: 'Una lista de «necesita mejorar» no reemplaza ese procedimiento.' }],
    },
  },
  {
    id: 'j7', t: '18:35', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la Carretera Central', show: ['confianza', 'personas'],
    body: (n, F) => `<p>La garúa vuelve con la noche y la Carretera Central se llena de luces rojas. En dos semanas cerraste 1,500 evaluaciones, ${F.has('andres_recalificado') ? 'viste a Andrés pasar de «necesita mejorar» a «sobresaliente» por sus propios números' : 'acompañaste el caso de Andrés hasta donde pudiste'}, ${F.has('criterio_todas') ? 'corregiste las notas de catorce madres' : 'corregiste la nota de Lucía'} y escribiste un formato que empieza en enero.</p><p>Y el lunes, a las 8:00, una lista te espera. Mientras llega la combi, te preguntas: <mark class="clave">¿te ves en este puesto?</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Sí: me gusta cuidar que los números digan la verdad, aunque incomode.',
        res: { q: null, fx: { confianza: 2 }, out: 'La combi llega llena. Te toca ir parada hasta Santa Anita, pensando en lo que dirás el lunes. No sientes miedo: sientes ganas.', kusi: ['celebra', '¡Te ves! Y el lunes empieza la Semana 3.'] } },
      { id: 'b', label: 'No estoy segura: el trabajo me gusta, pero la presión de los gerentes me cansa.',
        res: { q: null, fx: { personas: 1 }, out: 'Es una respuesta honesta. Este puesto se trata de sostener esa presión sin volverse duro. Quizás eso también se aprende.', kusi: ['pensando', 'La duda también es una respuesta.'] } },
      { id: 'c', label: 'Me veo en Gestión del Talento, pero más cerca de las personas que de los números.',
        res: { q: null, fx: { personas: 2 }, out: 'Lo que más recuerdas no es la curva: es la voz de Lucía y la carpeta de Andrés. Quizás tu lugar está en acompañar más que en calibrar.', kusi: ['curioso', 'Eso también dice mucho de ti.'] } },
    ],
    mirada: {
      ve: 'Dos semanas bastan para conocer el corazón de un puesto. Gestión del Desempeño pide paciencia con los datos, firmeza con los gerentes y cuidado con las personas. Y casi nunca termina el viernes: el lunes llega el pedido que pone a prueba todo lo que construiste.',
      visual: { tipo: 'flujo', titulo: 'Lo que viene', pasos: ['Viernes: el correo de Carmen', 'Lunes 8:00: Paola', 'Lunes 9:00: Gerencia y Legal', 'Semana 3: la lista'], aqui: 0 },
    },
  },
];
