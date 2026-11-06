// Asistente de Planillas · Capítulo 6 · «El sistema» · Semana 2, lunes.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 27735, art. 5 y D.S. 005-2002-TR: la gratificación se paga en la primera quincena de diciembre; plazo indisponible.
//   https://lpderecho.pe/ley-gratificaciones-fiestas-patrias-navidad-ley-27735/
// - Ley 30334: la gratificación no está afecta a aportes de seguridad social.
//   https://andina.pe/agencia/noticia-gratificacion-fiestas-patrias-sera-un-sueldo-mas-9-adicional-851640.aspx
// - Ley 29733 (protección de datos personales): los datos del personal se tratan por canales controlados por la empresa.
//   Principio general.
// Empresas, personas, sistemas y montos son ficticios.

export const CAP = {
  n: 6, titulo: 'El sistema', dia: 'Semana 2, lunes', foto: 'assets/3d/scenes/oficina.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '07:45', fin: '20:00', cierreHora: '19:45',
  apertura: 'Lunes de la segunda semana. La gratificación se paga el jueves. Hoy toca la corrida 2 de PlanMax, con todas las correcciones de la semana pasada. Hugo te escribió a las 6:50: «Llego tarde, hay choque en la Vía Expresa. Arranca tú».', boton: 'Lanzar la corrida 2',
  kusi: 'Los sistemas fallan. Lo que no puede fallar es el plan B.',
  lead: 'PlanMax se colgó en plena corrida. Pediste ayuda, elegiste un plan B, ordenaste la contingencia, calmaste a los locales y revisaste la corrida antes de aprobarla.',
  reflexion: 'Si mañana el sistema no existiera, ¿podrías pagar a 700 personas? ¿Qué te faltaría?',
  siguiente: { n: 7, titulo: 'La consulta', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'corrida', p: 'Corrida 2 de la gratificación', j: 'Tú · PlanMax', d: 0, e: 'Lanzada a las 8:00' },
  { id: 'soporte', p: 'Soporte de PlanMax', j: 'Marco · proveedor', d: 0, e: 'Sin ticket' },
  { id: 'locales', p: 'Comunicación a los locales', j: 'Tú', d: 0, e: 'Rumores en los grupos' },
  { id: 'banco', p: 'Archivo para el banco', j: 'Tesorería', d: 0, e: 'Se envía el miércoles' },
];

export const FUTURO = {
  ticket_ok: ['Abriste un ticket con evidencias y prioridad.', 'Marco atendió primero tu caso.'],
  plan_b_excel: ['Corriste la gratificación en un Excel de respaldo mientras PlanMax volvía.', 'Tendrás con qué cruzar el resultado. Capítulo 8.'],
  plan_b_corrida1: ['Usaste la corrida 1, con sus errores conocidos, como respaldo.', 'Algunos errores pueden colarse en el pago. Capítulo 9.'],
  plan_b_esperar: ['Esperaste a que PlanMax volviera, sin respaldo.', 'Se perdió medio día de trabajo.'],
  contingencia_ok: ['Ordenaste un plan de contingencia para fallas del sistema.', 'Hugo lo usará en cada cierre.'],
  locales_calmados: ['Los locales saben que la gratificación se paga el jueves, como estaba previsto.', 'No hubo rumores.'],
  rumor_suelto: ['El rumor de que «la grati se atrasa» corrió por los locales.', 'Wilder llegará más tenso mañana. Capítulo 7.'],
  corrida2_revisada: ['Revisaste la corrida 2 antes de aprobarla.', 'El archivo del banco saldrá limpio. Capítulo 9.'],
  corrida2_aprobada_rapido: ['Aprobaste la corrida 2 sin revisarla a fondo.', 'Un error llegará al banco. Capítulo 9.'],
  datos_seguros: ['No sacaste la planilla de los canales de la empresa.', 'Contabilidad no tendrá nada que observar.'],
  datos_gmail: ['Enviaste la planilla a un correo personal para trabajar de noche.', 'Ese correo existe para siempre.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
  marco: { n: 'Marco Tello', sub: 'Soporte PlanMax · proveedor', c: '#4A5568' },
};

export const WSP = [
  { chat: 'grupo', t: '06:50', de: 'Hugo', txt: 'Llego tarde, hay choque en la Vía Expresa 😩 Arranca tú la corrida 2. La configuración ya está corregida.' },
  { chat: 'admins', t: '10:20', de: 'Ítalo (Surco)', txt: 'Oigan, me dicen que se cayó el sistema y que la grati se atrasa. ¿Es cierto? Mis chicos están preguntando 😟' },
  { chat: 'gaby', t: '10:25', de: 'Gaby', txt: '🎤 Audio · 0:35 — «Amiga, ¿qué le digo a mi gente? Ya están armando cadena en el grupo del local.»', si: 'gaby_aliada' },
  { chat: 'gaby', t: '10:25', de: 'Gaby', txt: 'Señorita, ¿se atrasa la grati o no?', si: 'gaby_dolida' },
  { chat: 'wilder', t: '13:40', de: 'Wilder', txt: 'Dicen que la grati no sale el jueves. Mañana conversamos, ¿no? Porque ya es demasiado.', si: 'rumor_suelto' },
  { chat: 'admins', t: '13:30', de: 'Fiorella (Miraflores)', txt: 'Mi gente de Miraflores ya cobró su liquidación el sábado. Gracias, Planillas 🙏', si: 'liq_48h' },
  { chat: 'admins', t: '13:30', de: 'Fiorella (Miraflores)', txt: 'Mi gente de Miraflores pregunta por qué todavía no le llega su liquidación completa. ¿Qué les digo?', no: 'liq_48h' },
  { chat: 'grupo', t: '19:40', de: 'Hugo', txt: 'Corrida 2 lista. Mañana te dejo a Wilder solita, confío en ti 😄 Vete a dormir.' },
];

export const CORREOS = [
  { t: '08:42', de: 'PlanMax · Notificaciones', para: 'Planillas Sabor del Perú', asunto: 'Proceso interrumpido', html: '<p>El proceso «GRATIFICACIÓN DIC — CORRIDA 2» se detuvo al 63 %. Código de error: TMO-504 (tiempo de espera agotado). Intente nuevamente más tarde.</p>' },
  { t: '11:05', de: 'Marco Tello · Soporte PlanMax', para: 'Planillas Sabor del Perú', asunto: 'RE: Ticket', html: '<p>Hola. Estamos con alta demanda: varios clientes procesando gratificaciones a la vez. Su servidor se saturó. Estimamos restablecerlo después del almuerzo. Les recomendamos no relanzar el proceso hasta que les confirmemos.</p><p>Marco</p>' },
];

export const QUIZ = [
  { q: 'El sistema de planillas se cae tres días antes del pago. Lo primero es…', ops: ['Relanzar el proceso hasta que funcione', 'Reportar el error con evidencias y activar un respaldo', 'Avisar a todos que el pago se atrasa', 'Esperar sin hacer nada'], ok: 1, por: 'Reportar bien y tener un respaldo permite seguir trabajando sin depender de cuándo vuelva el sistema.' },
  { q: 'Un buen ticket de soporte incluye…', ops: ['«No funciona, urgente»', 'Qué proceso, qué error, a qué hora, qué se intentó y qué fecha está en riesgo', 'Solo una captura', 'El nombre del jefe'], ok: 1, por: 'Con datos concretos, el soporte puede priorizar y diagnosticar.' },
  { q: 'Hay rumores de que la gratificación se atrasa. ¿Qué conviene?', ops: ['No decir nada', 'Un mensaje oficial y breve: qué pasó, qué no cambia y cuándo se paga', 'Desmentir sin saber', 'Pedir que borren los mensajes'], ok: 1, por: 'Un mensaje claro y oportuno corta el rumor mejor que el silencio.' },
  { q: 'Para terminar de noche, un compañero propone enviar la planilla a un Gmail personal. ¿Qué haces?', ops: ['Aceptar, es solo una noche', 'No: los datos del personal se quedan en los canales de la empresa', 'Enviarla por WhatsApp', 'Imprimirla y llevarla a casa'], ok: 1, por: 'Los datos personales del personal se tratan por canales controlados por la empresa (Ley 29733).' },
  { q: '¿Por qué no se puede «correr el pago al lunes siguiente» si el sistema no vuelve?', ops: ['Porque el banco no abre', 'Porque la gratificación tiene plazo legal en la primera quincena de diciembre', 'Porque lo dice el proveedor', 'Sí se puede'], ok: 1, por: 'La Ley 27735 fija la primera quincena de diciembre, y ese plazo es indisponible.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:45', ch: 'sistema', who: null, titulo: 'Detenido al 63 %', banner: 'assets/esc/alarma.webp', lugar: 'PlanMax · Proceso de gratificación', show: ['tiempo', 'calidad'],
    body: () => `<p>La barra de PlanMax se quedó en 63 % hace cuarenta minutos. Luego, la pantalla gris: «Proceso interrumpido. Error TMO-504». Hugo sigue atrapado en la Vía Expresa.</p><p><mark class="clave">Agarras el teléfono</mark>.</p>`,
    type: 'calls',
    calls: [['Soporte PlanMax', 'Contesta una grabación', 'Su llamada es importante para nosotros. Tiempo de espera estimado: 45 minutos.'], ['Sistemas (interno)', 'Contesta Ronald', 'El servidor está bien de nuestro lado. Debe ser el proveedor. ¿Abriste ticket?'], ['Hugo', 'Contesta en altavoz, con bocinas de fondo', 'No lo relances, que se duplica. Abre ticket con todo y saca respaldo. Llego en una hora.']],
    prompt: 'Soporte tiene 45 minutos de espera, Sistemas dice que es el proveedor y Hugo te pide un ticket. ¿Cómo lo abres?',
    choices: [
      { id: 'a', label: 'Ticket por el portal y por correo con: proceso, código de error, hora, que no se relanzó, 700 trabajadores y pago el jueves por plazo legal.',
        res: { q: 'buena', fx: { tiempo: 2, calidad: 4, confianza: 2 }, flags: ['ticket_ok'], cartera: { soporte: 'Ticket con prioridad alta' },
          out: 'A las 9:20, Marco, de soporte, te escribe directo: «Vi tu ticket. Con esos datos lo subo a prioridad alta».',
          pro: { ok: 'Un ticket con datos concretos se atiende antes.', info: 'Guarda la captura del error con la hora visible.' },
          kusi: ['feliz', 'Ticket perfecto: el soporte ya sabe qué pasa.'] } },
      { id: 'b', label: 'Relanzar el proceso un par de veces: a veces se destraba solo.',
        res: { q: 'riesgosa', fx: { calidad: -4, tiempo: -3 },
          out: 'La segunda vez llega al 12 % y se cuelga de nuevo. Ahora hay dos procesos a medias. Hugo, por teléfono: «¿Lo relanzaste? Ay, no».',
          pro: { ok: 'Lo intentas.', risk: 'Relanzar un proceso a medias puede duplicar cálculos y empeorar la falla.' },
          kusi: ['preocupado', 'Dos procesos colgados son peor que uno.'] } },
      { id: 'c', label: 'Mandar un correo corto a soporte: «Se cayó el sistema, es urgente».',
        res: { q: 'aceptable', fx: { tiempo: -1, calidad: 0 },
          out: 'Soporte responde a las 10:30: «¿Qué proceso? ¿Qué error?». Pierdes una hora en idas y vueltas.',
          pro: { ok: 'Avisas.', risk: '«Urgente» sin datos es lo que escriben todos en diciembre.' },
          kusi: ['pensando', '¿Urgente qué, exactamente?'] } },
    ],
    rules: [[BP, 'Antes de relanzar un proceso a medias, consulta: puede duplicar resultados.']],
    mirada: {
      ve: 'En diciembre, todos los clientes de un sistema de planillas procesan la gratificación la misma semana. Que se sature no es raro. Lo que distingue a un buen equipo es cómo reporta y qué hace mientras espera.',
      visual: { tipo: 'flujo', titulo: 'Cuando el sistema se cae', pasos: ['No relanzar', 'Captura del error', 'Ticket con datos', 'Avisar al jefe', 'Activar respaldo'], aqui: 2 },
    },
  },
  {
    id: 'f2', t: '09:50', ch: 'presencial', who: 'hugo', titulo: 'El plan B', banner: 'assets/foto2/revisan.webp', lugar: 'Escritorio de Hugo', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Hugo llega con la camisa arrugada y un jugo de papaya del carrito de la esquina. Soporte dice «después del almuerzo». El banco necesita el archivo el miércoles para pagar el jueves.</p><p>${F.has('muestra_sin_ver') ? 'Recuerda que la corrida 1 tiene errores que no viste el miércoles. ' : 'La corrida 1 tiene los errores que encontraste el miércoles. '}«No podemos quedarnos mirando la pantalla. <mark class="clave">¿Qué hacemos mientras?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Armar un Excel de respaldo con la base de cada persona (exportada de la corrida 1 y corregida a mano con los cambios de la semana) para cruzarlo con PlanMax cuando vuelva.',
        res: { q: 'buena', fx: { calidad: 4, tiempo: -3, cumplimiento: 3 }, rel: { hugo: 1 }, flags: ['plan_b_excel'], cartera: { corrida: 'Excel de respaldo en marcha' },
          out: 'A la 1, tu Excel tiene 700 filas con las correcciones: Yesenia, las madres, las variables regulares, los cesados. Si PlanMax no vuelve, hay con qué pagar.',
          pro: { ok: 'El respaldo te da un control y una salida si el sistema no vuelve.', risk: 'Es mucho trabajo manual: hay que revisarlo con cuidado.', info: 'Nombra el archivo con fecha y versión, no «grati final 3».' },
          kusi: ['celebra', '¡Plan B con 700 filas!'] } },
      { id: 'b', label: 'Usar la corrida 1, que sí terminó, y corregir después lo que salga mal con reintegros.',
        res: { q: 'riesgosa', fx: { tiempo: 3, calidad: -4, cumplimiento: -3 }, flags: ['plan_b_corrida1'], cartera: { corrida: 'Respaldo: corrida 1 con errores conocidos' },
          out: 'Hugo duda: «Ahí estaba lo de AFP y lo de Yesenia». Lo deja como respaldo, pero con un post-it rojo encima.',
          pro: { ok: 'Ahorras horas.', risk: 'Pagar con errores conocidos para corregirlos después multiplica las consultas y los reintegros.' },
          kusi: ['preocupado', 'Errores conocidos son errores igual.'] } },
      { id: 'c', label: 'Esperar a que soporte lo restablezca: hacer todo dos veces es perder el tiempo.',
        res: { q: 'aceptable', fx: { tiempo: -2, calidad: 0 }, flags: ['plan_b_esperar'], cartera: { corrida: 'Esperando a soporte' },
          out: 'Avanzan con otras cosas. PlanMax vuelve a las 3:40. Si no hubiera vuelto, no habría con qué pagar el jueves.',
          pro: { ok: 'No duplicas trabajo.', risk: 'Dependes por completo de un proveedor saturado, a tres días de un plazo legal.' },
          kusi: ['pensando', '¿Y si no volvía?'] } },
    ],
    rules: [[LEY, 'La gratificación se paga en la primera quincena de diciembre; el plazo es indisponible (Ley 27735; D.S. 005-2002-TR).']],
    mirada: {
      ve: 'El plan B no se arma cuando el sistema ya se cayó: se arma con lo que ya sabes. Cada corrección de la semana pasada, bien anotada, hoy vale oro.',
      visual: { tipo: 'balanza', a: { t: 'Esperar al sistema', items: ['Menos trabajo hoy', 'Todo depende del proveedor'] }, b: { t: 'Respaldo propio', items: ['Más trabajo hoy', 'Control para cruzar', 'Salida si no vuelve'] } },
    },
  },
  {
    id: 'f3', t: '10:15', ch: 'documento', who: null, titulo: 'El plan de contingencia', banner: 'assets/esc/escalera.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Hugo te pide que, mientras esperan, dejes por escrito qué hacer la próxima vez que PlanMax se caiga en un cierre. <mark class="clave">Ordena los pasos</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena el plan de contingencia. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'parar', t: 'No relanzar y capturar el error con la hora', por: 'Para no duplicar ni perder evidencia.' },
      { id: 'ticket', t: 'Abrir un ticket con datos y fecha en riesgo', por: 'Para que soporte priorice.' },
      { id: 'jefe', t: 'Avisar a la jefatura y a Tesorería', por: 'El banco tiene sus propios horarios.' },
      { id: 'respaldo', t: 'Activar el respaldo con la base corregida', por: 'Para no depender del proveedor.' },
      { id: 'comunicar', t: 'Comunicar a los locales qué cambia y qué no', por: 'Antes de que llegue el rumor.' },
      { id: 'cruzar', t: 'Cuando vuelva, cruzar el sistema con el respaldo', por: 'Si no coinciden, uno de los dos está mal.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'buena' ? 2 : 0 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['contingencia_ok'], cartera: { corrida: q === 'riesgosa' ? 'Sin plan de contingencia' : 'Plan de contingencia escrito' },
        out: q === 'buena' ? 'Hugo lo lee dos veces: «Esto lo pongo como anexo del contrato con el proveedor. Que sepan que tenemos plan».' : 'Hugo ajusta el orden: «Primero no empeorar: no relanzar. Lo demás viene después».',
        pro: { ok: 'Un plan escrito saca la improvisación del peor día.', risk: 'Sin plan, cada caída depende del humor y la memoria de quien esté.', info: 'Revisa el plan después de cada cierre.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡La próxima caída ya tiene manual!' : 'Primero, no empeorar.'],
      };
    },
    rules: [[BP, 'Cada cierre de planilla necesita un plan de contingencia escrito y probado.']],
    mirada: {
      ve: 'Lo que la semana pasada fue la ruta para corregir un error, hoy es la ruta para sobrevivir a una caída. En Planillas, el trabajo invisible es convertir cada susto en un procedimiento.',
      visual: { tipo: 'flujo', titulo: 'Contingencia de cierre', pasos: ['No relanzar', 'Ticket', 'Avisar', 'Respaldo', 'Comunicar', 'Cruzar'] },
    },
  },
  {
    id: 'f4', t: '10:40', ch: 'whatsapp', who: null, titulo: '«¿La grati se atrasa?»', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['confianza', 'personas'],
    body: () => `<p>En el grupo de administradores ya corre el rumor: «se cayó el sistema y la grati se atrasa». Gaby te cuenta que en su local ya hay cadena de audios. Hugo te pide: «Escribe tú al grupo. <mark class="clave">Corto, claro y sin prometer de más</mark>».</p>`,
    type: 'compose', enviaA: 'admins', para: 'Para: Administradores Sabor del Perú', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pasó', ops: [
        { id: 'q1', t: 'Buenos días. El sistema de planillas tuvo una falla del proveedor esta mañana y ya está en revisión.', ok: true, por: 'Reconoces el hecho sin dramatizar.' },
        { id: 'q2', t: 'Buenos días. Todo está perfecto, no hay ninguna falla.', ok: false, por: 'Negar lo que todos saben destruye la confianza.' },
      ] },
      { id: 'nocambia', t: 'Qué no cambia', ops: [
        { id: 'n1', t: 'La gratificación se paga el jueves, como estaba previsto. Tenemos respaldo.', ok: true, por: 'La fecha es lo que la gente necesita saber.' },
        { id: 'n2', t: 'Creemos que se paga el jueves, si todo sale bien 🙏', ok: false, por: 'Una duda escrita es un nuevo rumor.' },
      ] },
      { id: 'pide', t: 'Qué les pides', ops: [
        { id: 'p1', t: 'Por favor, compartan este mensaje con su personal. Si alguien tiene una consulta puntual, que me escriba aquí.', ok: true, por: 'Un solo canal oficial.' },
        { id: 'p2', t: 'No hagan caso a los audios.', ok: null, por: 'Bien, pero no da un canal.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'n1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, personas: q === 'buena' ? 3 : 0 },
        flags: [q === 'buena' ? 'locales_calmados' : 'rumor_suelto'], cartera: { locales: q === 'buena' ? 'Mensaje oficial enviado' : 'Rumor sigue corriendo' },
        out: q === 'buena' ? 'En media hora, los 14 administradores reenvían tu mensaje. Gaby: «Listo, amiga, ya se calmaron».' : q === 'riesgosa' ? 'Ítalo responde: «¿Cómo que no hay falla? Si lo dijo Sistemas». El rumor se hace más grande.' : 'Algunos reenvían, otros no. En Barranco el rumor sigue.',
        pro: { ok: 'Hecho, fecha y canal: con eso se apaga un rumor.', risk: 'Negar la falla o sonar inseguro alimenta la desconfianza.', info: 'Comunica antes de que te pregunten.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Rumor apagado.' : 'El rumor sigue vivo…'],
      };
    },
    mirada: {
      ve: 'Para 700 personas que ya tienen planeada su Navidad, «la grati se atrasa» es una noticia terrible. Un mensaje oficial temprano no evita la falla, pero evita el miedo.',
      visual: { tipo: 'mensaje', titulo: 'Corto, claro y sin prometer de más', txt: 'Hubo una falla del proveedor y está en revisión. La gratificación se paga el jueves, como estaba previsto. Consultas puntuales, por aquí.' },
    },
  },
  {
    id: 'f5', t: '16:10', ch: 'documento', who: null, titulo: 'La corrida 2', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>A las 3:40 Marco confirma: «Servidor restablecido». La corrida 2 termina a las 4:05. ${F.has('plan_b_excel') ? 'Pones tu Excel al lado y cruzas.' : 'No tienes respaldo para cruzar: revisas fila por fila lo que puedes.'}</p><p>Hugo: «Si lo apruebas, mañana va al banco. <mark class="clave">Mira bien</mark>».</p>`,
    type: 'flag', prompt: 'Marca lo que todavía está mal en la corrida 2.',
    doc: { t: 'Gratificación de diciembre · corrida 2', sub: 'PlanMax · diferencias con el respaldo' },
    lines: [
      { id: 'yes', t: 'Yesenia Huamán: gratificación 6/6 y reintegro de lactancia de octubre y noviembre.' },
      { id: 'afp', t: 'Tres trabajadores todavía con descuento de AFP sobre la gratificación.', bad: LEY, why: 'La gratificación no está afecta a aportes de pensiones. La corrección no alcanzó a todos.' },
      { id: 'dup', t: 'Jhoan Rivas aparece dos veces (una por cada intento de proceso).', bad: BP, why: 'Un registro duplicado es un doble pago en el archivo del banco.' },
      { id: 'cesados', t: 'Las 18 personas de Miraflores ya no aparecen: se liquidaron aparte.' },
      { id: 'cuenta', t: 'Doce personas sin número de cuenta sueldo.', bad: BP, why: 'Sin cuenta, el banco rechazará el abono. Hay que resolverlo antes del miércoles.' },
      { id: 'kevin', t: 'Kevin: descuento de S/ 400 por adelanto.', duda: 'Correcto si hay autorización firmada; revisa que esté en su legajo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 4 }, rel: { hugo: missLey ? 0 : 1 },
      flags: [missLey ? 'corrida2_aprobada_rapido' : 'corrida2_revisada'], cartera: { corrida: missLey ? 'Corrida 2 aprobada con errores' : `Corrida 2 corregida · ${hitsLey} errores de ley`, banco: 'Doce cuentas por resolver' },
      out: missLey ? 'Apruebas. A las 7, Hugo ve el descuento de AFP en tres boletas: «Mañana lo corregimos, pero ya va a ir al banco así».' : 'Corriges los tres de AFP, borras el duplicado de Jhoan y armas la lista de las doce cuentas que faltan. A las 7:30, Hugo aprueba.',
      pro: { ok: 'Cruzar con un respaldo encuentra lo que una revisión rápida no ve.', risk: 'Un duplicado o una cuenta vacía se vuelven problemas el día del pago.', info: 'Mañana pide las cuentas a los administradores, con plazo.' },
      kusi: missLey ? ['preocupado', 'Tres boletas con AFP…'] : ['celebra', '¡Corrida 2 limpia!'],
    }),
    rules: [[LEY, 'La gratificación no está afecta a aportes de seguridad social (Ley 30334).']],
    mirada: {
      ve: 'Cuando un sistema vuelve después de una caída, el riesgo no termina: los procesos a medias dejan duplicados y las correcciones pueden no haberse aplicado a todos. El cruce con el respaldo es lo que convierte «volvió» en «está bien».',
      visual: { tipo: 'embudo', titulo: 'Corrida 2', niveles: [['Filas', 700], ['Diferencias con el respaldo', 17], ['Errores reales', 16]] },
    },
  },
  {
    id: 'f6', t: '19:15', ch: 'whatsapp', who: null, titulo: 'Terminar en casa', banner: 'assets/esc/reloj.webp', lugar: 'Tu escritorio, con el último jugo de Hugo', show: ['etica', 'cumplimiento'],
    body: () => `<p>Ya es de noche. Te falta cruzar las doce cuentas y estás muerta de hambre. Ronald, de Sistemas, se ofrece por WhatsApp: «Mándate la planilla a tu Gmail y la terminas en tu casa, nadie se va a enterar. <mark class="clave">Yo lo hago siempre</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que no: la planilla tiene datos de 700 personas y se queda en los equipos de la empresa. Mañana a las 7:30 la terminas aquí.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3, tiempo: -1 }, flags: ['datos_seguros'],
          out: 'Cierras sesión, apagas la pantalla y bajas al local de Lince. El mozo de turno te regala un pan con pollo: «Para la de Planillas».',
          pro: { ok: 'Los datos del personal no salen de los canales de la empresa.', info: 'Si necesitas trabajar fuera, pide el acceso remoto oficial.' },
          kusi: ['feliz', 'Datos seguros y tú a cenar.'] } },
      { id: 'b', label: 'Mandártela al Gmail: es solo una noche y así llegas mañana con todo listo.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -4, tiempo: 2 }, flags: ['datos_gmail'],
          out: 'El archivo con nombres, DNI, sueldos y cuentas de 700 personas ya está en tu correo personal. Para siempre.',
          pro: { ok: 'Avanzas en casa.', risk: 'Sacar datos personales del personal a un correo personal los expone y te expone (Ley 29733).' },
          kusi: ['preocupado', 'Setecientos sueldos en un Gmail…'] } },
    ],
    rules: [[LEY, 'Los datos personales del personal se tratan por canales controlados por la empresa (Ley 29733).']],
    mirada: {
      ve: 'Trabajar de más en diciembre es casi una tradición en Planillas. Pero el cansancio no cambia una regla básica: los datos de 700 personas no viajan por correos personales.',
    },
  },
];
