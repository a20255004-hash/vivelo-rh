// Analista de Planillas · Capítulo 5 · «La gerencia» · Semana 1, viernes.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas:
// - Ley 30334: las gratificaciones están inafectas a aportes; el empleador paga una bonificación extraordinaria equivalente
//   al aporte a EsSalud (9 %), o 6.75 % si el trabajador está en una EPS.
//   https://andina.pe/agencia/noticia-gratificacion-fiestas-patrias-sera-un-sueldo-mas-9-adicional-851640.aspx
//   https://www.sni.org.pe/wp-content/uploads/2019/12/Nota-de-Interés-Laboral-N°-85.pdf
// - D.S. 001-97-TR (TUO de la Ley de CTS), arts. 9, 16 y 22, ya citados en el capítulo 4. Sobre el depósito incompleto se explica
//   el principio (el empleador responde por el depósito y por los intereses que habría generado), sin citar artículo ni tasa.
//   https://lpderecho.pe/tuo-ley-de-compensacion-por-tiempo-de-servicios-ds-1-97-tr
// - D.S. 018-2007-TR (T-Registro), ya citado en el capítulo 1.

export const CAP = {
  n: 5, titulo: 'La gerencia', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'Andes Logística · Sede administrativa, San Isidro',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. Hoy no vas al Callao: la reunión es en la sede de San Isidro, piso 9, con vista al golf y aire acondicionado de verdad. Llegas en un taxi compartido con Patricia y una carpeta con una sola hoja dentro.', boton: 'Subir al piso 9',
  kusi: 'Explicar un riesgo es como dar una mala noticia en el médico: claro, corto y con un tratamiento.',
  lead: 'Ordenaste tu presentación, sostuviste (o no) que se pague a todas las personas afectadas, le diste a Tesorería los números que necesita, cumpliste tu palabra con Teodoro y revisaste la carga de datos.',
  reflexion: '¿Qué es más difícil: encontrar un error o explicárselo a quien tiene que pagarlo?',
  siguiente: { n: 6, titulo: 'La fiscalización', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'bono', p: 'Reintegro del bono de productividad', j: 'Finanzas · Álvaro', d: 0, e: 'Presentación a las 10:00' },
  { id: 'tesoreria', p: 'Flujo del reintegro', j: 'Rosa · Tesorería', d: 0, e: 'Sin fechas' },
  { id: 'datos', p: 'Carga de datos maestros', j: 'Sistemas · Diego', d: 0, e: 'Cargado con errores' },
  { id: 'consultas', p: 'Respuesta al sindicato', j: 'Teodoro', d: 0, e: 'Prometida para hoy' },
  { id: 'migracion', p: 'Migración a Nómina360', j: 'Patricia', d: 0, e: 'Salida en vivo: viernes próximo' },
];

export const FUTURO = {
  presentacion_clara: ['Presentaste el riesgo con el dato primero y una recomendación al final.', 'Álvaro te llamará por tu nombre el martes.'],
  reintegro_todos: ['Se aprobó pagar a las 412 personas, incluidos los 61 cesados.', 'El inspector verá que la empresa ya decidió regularizar.'],
  reintegro_activos: ['Se aprobó pagar solo a los activos; los cesados, «si reclaman».', 'El inspector preguntará por los 61.'],
  reintegro_reclamantes: ['Se aprobó pagar solo a quienes reclamaron.', 'El sindicato no tardará en saberlo.'],
  numeros_tesoreria: ['Rosa tiene el monto por mes y por concepto.', 'El martes podrá armar un flujo con números reales.'],
  numeros_vagos: ['Rosa se quedó solo con un total.', 'El martes te pedirá todo de nuevo, de mal humor.'],
  teodoro_informado: ['Le dijiste a Teodoro que hay un hallazgo y que la empresa lo está cuantificando.', 'El sindicato espera; pero su escrito en SUNAFIL ya está en marcha.'],
  teodoro_sin_respuesta: ['No le respondiste a Teodoro el viernes, como prometiste.', 'Se enterará del hallazgo por otro lado.'],
  carga_limpia: ['Corregiste los errores de la carga de datos antes del fin de semana.', 'El cierre del miércoles tendrá menos sorpresas.'],
  carga_pendiente: ['Quedaron errores en la carga de datos.', 'Aparecerán en el cierre del miércoles.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  rosa: { n: 'Rosa Chumpitaz', sub: 'Jefa de Tesorería', who: 'tesoreria' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  teodoro: { n: 'Teodoro Quispe', sub: 'Secretario general del sindicato', c: '#975A16' },
  alvaro: { n: 'Álvaro Benavides', sub: 'Gerente de Administración y Finanzas', c: '#1A365D' },
};

export const WSP = [
  { chat: 'equipo', t: '07:40', de: 'Mili', txt: 'Suerte en San Isidro!! 🍀 Yo me quedo con Diego viendo la carga. Hay errores 😬' },
  { chat: 'alvaro', t: '08:55', de: 'Álvaro', txt: 'Tengo 20 minutos. Que sea al grano, por favor.' },
  { chat: 'rosa', t: '11:20', de: 'Rosa', txt: 'Necesito el monto por mes. Un total no me sirve para nada.', no: 'numeros_tesoreria' },
  { chat: 'rosa', t: '11:20', de: 'Rosa', txt: 'Recibido el detalle. El martes te digo qué puedo pagar y cuándo.', si: 'numeros_tesoreria' },
  { chat: 'teodoro', t: '13:05', de: 'Teodoro', txt: 'Gracias por cumplir, señorita. Esperaremos el comunicado. Pero el escrito a SUNAFIL ya lo presentamos hace tres semanas, eso no se puede retirar.', si: 'teodoro_informado' },
  { chat: 'teodoro', t: '17:30', de: 'Teodoro', txt: 'Señorita, hoy era viernes. Nadie nos dijo nada.', si: 'teodoro_sin_respuesta' },
  { chat: 'equipo', t: '18:30', de: 'Patricia', txt: 'Gracias por hoy. Desconéctate el fin de semana, de verdad. El lunes empieza la semana del pago.' },
];

export const CORREOS = [
  { t: '12:40', de: 'Álvaro Benavides', para: 'Patricia Gómez; Analista de Planillas; Rosa Chumpitaz', asunto: 'Acuerdo · regularización bono de productividad', html: '<p>Según lo conversado: 1) Compensaciones valida el monto final al cierre del miércoles. 2) Tesorería propone el martes un cronograma de pago. 3) Legal prepara el comunicado al personal. 4) Contabilidad provisiona en noviembre.</p><p>Gracias por traerlo con números. Álvaro</p>', si: 'presentacion_clara' },
];

export const QUIZ = [
  { q: 'Al presentar un riesgo a la gerencia, ¿qué va primero?', ops: ['La historia completa del sistema viejo', 'El dato que importa: qué pasó, a cuántos y cuánto cuesta', 'Las disculpas', 'La fórmula de la CTS'], ok: 1, por: 'La gerencia decide con el dato y la recomendación. El detalle, si lo pide.' },
  { q: '¿Por qué incluir a los trabajadores cesados en el reintegro?', ops: ['Por imagen', 'Porque a ellos también se les calculó mal y también se les debe', 'Porque lo exige el banco', 'No hay que incluirlos'], ok: 1, por: 'El error afectó sus liquidaciones igual que a los activos.' },
  { q: 'Sobre la gratificación, el empleador paga además una bonificación extraordinaria de…', ops: ['5 %', '9 % (o 6.75 % si el trabajador está en una EPS)', '13 %', 'Nada'], ok: 1, por: 'Es el equivalente al aporte a EsSalud que la Ley 30334 dejó de cobrar sobre las gratificaciones.' },
  { q: 'Si la CTS se depositó incompleta, la empresa…', ops: ['Ya no debe nada', 'Debe depositar la diferencia y responder por los intereses que se habrían generado', 'Paga solo si el trabajador cesa', 'Lo descuenta del sueldo'], ok: 1, por: 'La CTS mal depositada se regulariza con sus intereses.' },
  { q: 'Prometiste responderle al sindicato hoy y todavía no tienes la decisión final. ¿Qué haces?', ops: ['No respondes hasta tener todo', 'Respondes: hay un hallazgo, se está cuantificando y cuándo habrá comunicado', 'Le das el monto estimado', 'Le dices que no hay nada'], ok: 1, por: 'Cumplir la fecha con lo que sí puedes decir mantiene la confianza.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '08:15', ch: 'documento', who: null, titulo: 'Veinte minutos', banner: 'assets/foto2/presentacion.webp', lugar: 'Cafetería del piso 9', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Álvaro Benavides, gerente de Administración y Finanzas, tiene 20 minutos. Es ingeniero industrial, hincha de Cristal, y tiene fama de cortar las presentaciones que «dan vueltas». ${F.has('informe_claro') ? 'Tu informe de una página es tu base.' : 'Tu informe de ayer tiene huecos: lo ordenas en el camino.'}</p><p><mark class="clave">¿En qué orden lo cuentas?</mark></p>`,
    type: 'secuencia', prompt: 'Ordena tu presentación. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'dato', t: 'El dato: 412 personas, unos S/ 404,000 más intereses de CTS', por: 'Lo primero que necesita saber.' },
      { id: 'que', t: 'Qué pasó: el bono quedó fuera de la CTS y las gratificaciones desde 2024', por: 'En una frase.' },
      { id: 'crit', t: 'Por qué está mal: criterio de regularidad, confirmado por Legal', por: 'El respaldo.' },
      { id: 'hoy', t: 'Qué ya se corrigió: Nómina360 calcula bien desde diciembre', por: 'El sangrado se detuvo.' },
      { id: 'ops', t: 'Opciones de regularización, con su riesgo', por: 'Para que decida.' },
      { id: 'rec', t: 'Tu recomendación', por: 'No lo dejes sin opinión.' },
      { id: 'pide', t: 'Lo que necesitas de Finanzas y Tesorería, con fechas', por: 'Cierra con acción.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['presentacion_clara'], cartera: { bono: q === 'riesgosa' ? 'Presentación desordenada' : 'Presentación en 7 pasos' },
        out: q === 'buena' ? 'Patricia lee tu orden en la cafetería y sonríe: «Si empiezas por el número, Álvaro no te interrumpe».' : 'Patricia mueve el número al inicio: «Álvaro corta a la segunda diapositiva si no sabe de cuánto hablamos».',
        pro: { ok: 'Número, causa, respaldo, lo ya hecho, opciones, recomendación y pedido.', risk: 'Empezar por la historia hace que la gerencia se pierda antes de llegar al monto.', info: 'Prepara tres preguntas que seguro te harán: ¿desde cuándo?, ¿quién más sabe?, ¿hay multa?' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Al grano, como pidió!' : 'El número, primero.'],
      };
    },
    mirada: {
      ve: 'Una presentación de riesgo a la gerencia se parece más a un parte médico que a una exposición: qué tiene, qué tan grave es, qué ya se hizo y qué se recomienda. Lo técnico, solo si lo piden.',
      visual: { tipo: 'flujo', titulo: 'Explicar un riesgo', pasos: ['Dato', 'Qué pasó', 'Por qué', 'Ya corregido', 'Opciones', 'Recomendación', 'Pedido'] },
    },
  },
  {
    id: 'g2', t: '10:05', ch: 'presencial', who: null, titulo: '«¿Y si pagamos solo a los activos?»', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de directorio, piso 9', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Álvaro escucha sin interrumpir, con los brazos cruzados. Cuando terminas, pregunta: «De los 412, 61 ya no están. ¿Cuántos van a reclamar? Propongo pagar a los activos con la gratificación de diciembre y <mark class="clave">a los cesados, si reclaman</mark>. Este año la caja está ajustada».</p><p>Patricia te mira: es tu turno.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recomendar pagar a los 412, incluidos los cesados, con un cronograma que Tesorería pueda sostener.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: 2 }, rel: { tesoreria: -1, 'patricia-g': 1 }, flags: ['reintegro_todos'], cartera: { bono: 'Aprobado: reintegro a 412 personas' },
          out: 'Explicas que los 61 tienen el mismo derecho y que el sindicato ya tiene los nombres. Álvaro lo piensa: «Ok. A todos. Pero el cómo y el cuándo lo define Rosa». Rosa, al fondo, anota algo sin levantar la vista.',
          pro: { ok: 'El derecho no depende de que la persona siga en la empresa ni de que reclame.', risk: 'Presionas una caja ajustada. Por eso propones un cronograma, no un pago de golpe.', info: 'A los cesados hay que ubicarlos: necesitarás datos actualizados.' },
          kusi: ['animo', 'A todos. Con calendario.'] } },
      { id: 'b', label: 'Aceptar la propuesta de Álvaro: priorizar a los activos y atender a los cesados si se acercan.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4 }, rel: { tesoreria: 1 }, flags: ['reintegro_activos'], cartera: { bono: 'Aprobado solo para activos' },
          out: 'La reunión termina rápido. 61 personas a las que se les calculó mal no recibirán nada salvo que se enteren y reclamen.',
          pro: { ok: 'Alivias la caja.', risk: 'Pagar solo a quien reclama una deuda conocida es una decisión difícil de defender ante un inspector o un juez.' },
          kusi: ['preocupado', '¿Y si los 61 se enteran por el sindicato?'] } },
      { id: 'c', label: 'Proponer pagar primero a los tres casos del sindicato y, después de la salida en vivo, evaluar el resto.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -2, tiempo: 1 }, flags: ['reintegro_reclamantes'], cartera: { bono: 'Aprobado solo para 3 reclamantes' },
          out: 'Álvaro acepta encantado: tres reintegros cuestan casi nada. Pero el error es de 412 personas, no de tres.',
          pro: { ok: 'Respondes al reclamo concreto.', risk: 'Pagar solo a quien reclamó puede leerse como un trato desigual y un reconocimiento parcial del problema.' },
          kusi: ['indignado', '¿Tres de cuatrocientos doce?'] } },
    ],
    rules: [[BP, 'Un reintegro se paga a todas las personas afectadas, activas o cesadas.']],
    mirada: {
      ve: 'Álvaro no es el villano: cuida una caja real. Pero en planillas, una deuda conocida no se vuelve opcional porque la persona se fue. La salida no es «sí o no», sino «a todos, con un plan de pago».',
      visual: { tipo: 'balanza', a: { t: 'Solo activos', items: ['Caja más holgada', 'Reunión corta'] }, b: { t: 'Los 412', items: ['Mismo derecho para todos', 'Defensa ante SUNAFIL', 'Sindicato sin argumento de trato desigual'] } },
    },
  },
  {
    id: 'g3', t: '10:40', ch: 'presencial', who: 'tesoreria', titulo: '«Cuánto y cuándo»', banner: 'assets/esc/reloj.webp', lugar: 'Pasillo del piso 9', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Al salir, Rosa Chumpitaz te alcanza en el pasillo. No saluda. «El total no me sirve. Necesito saber <mark class="clave">cuánto y cuándo</mark>. Dame tres cosas para armar mi flujo.»</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres datos que le das a Rosa.', boton: 'Dárselos', resumen: 'Le diste',
    cols: ['Dato', 'Qué le permite a Rosa'],
    rows: [
      { id: 'cts', cells: ['Reintegro de CTS por depósito, con intereses estimados', 'Sabe cuánto va a cuentas CTS de los activos'] },
      { id: 'grati', cells: ['Reintegro de gratificaciones más la bonificación del 9 %', 'Puede sumarlo a la gratificación de diciembre'] },
      { id: 'ces', cells: ['Monto de los 61 cesados, aparte', 'Es pago directo, no depósito CTS'] },
      { id: 'formula', cells: ['La fórmula del art. 16', 'Nada que pueda usar'] },
      { id: 'hist', cells: ['La historia de cómo se configuró el bono', 'Nada que pueda usar'] },
      { id: 'exacto', cells: ['Un monto «exacto al céntimo» hoy', 'No es posible hasta el cierre del miércoles'] },
    ],
    score: { cts: 3, grati: 3, ces: 3, formula: -1, hist: -2, exacto: -1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : -1 }, rel: { tesoreria: q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'numeros_tesoreria' : 'numeros_vagos'], cartera: { tesoreria: q === 'buena' ? 'Montos por concepto entregados: CTS, gratificación, cesados' : 'Rosa solo tiene un total' },
        out: q === 'buena' ? 'Rosa mira tu tabla de tres filas y, por primera vez, casi sonríe: «Esto sí. El martes te digo qué puedo pagar y qué no».' : picks.includes('exacto') ? 'Le prometes un monto exacto hoy. Rosa: «¿Exacto? ¿Y el cierre del miércoles?». Te pilló.' : 'Rosa se va con lo que le diste y un «ya veré».',
        pro: { ok: 'Le das los montos según cómo se pagan: depósito CTS, planilla y pago a cesados.', risk: 'Prometer exactitud antes del cierre te obliga a corregir después.', info: 'Tesorería piensa en fechas y cuentas, no en fórmulas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Rosa casi sonrió!' : 'Piensa como Tesorería.'],
      };
    },
    rules: [[LEY, 'La gratificación lleva una bonificación extraordinaria del 9 %, o 6.75 % con EPS (Ley 30334).']],
    mirada: {
      ve: 'Cada área entiende el mismo problema en su idioma: Legal en criterios, Contabilidad en provisiones, Tesorería en fechas. Darle a cada una el número que necesita es la mitad de una buena coordinación.',
      visual: { tipo: 'cambio', titulo: 'Del total al flujo', pares: [['S/ 404,000', 'CTS + gratificaciones + cesados'], ['«Cuando se pueda»', 'Por mes y por forma de pago'], ['Exacto hoy', 'Estimado hoy, exacto el miércoles']] },
    },
  },
  {
    id: 'g4', t: '12:50', ch: 'whatsapp', who: null, titulo: 'Lo que prometiste a Teodoro', banner: 'assets/esc/camino.webp', lugar: 'Taxi de regreso al Callao, por la Javier Prado', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>En el taxi de vuelta, atrapada en la Javier Prado, recuerdas que ${F.has('teodoro_escuchado') ? 'el lunes le prometiste a Teodoro una respuesta para hoy' : 'Teodoro sigue esperando que alguien le diga algo sobre la CTS'}. Legal todavía no tiene listo el comunicado oficial. <mark class="clave">¿Qué le escribes?</mark></p>`,
    type: 'compose', enviaA: 'teodoro', para: 'Para: Teodoro Quispe · Sindicato', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hall', t: 'Lo que encontraste', ops: [
        { id: 'h1', t: 'Don Teodoro, revisé los tres casos. Encontramos que el bono de productividad no se incluyó como correspondía en la CTS.', ok: true, por: 'Le dices la verdad, sin rodeos.' },
        { id: 'h2', t: 'Don Teodoro, estamos revisando, todavía no hay nada.', ok: false, por: 'Ya encontraste algo: decir «nada» es mentir.' },
      ] },
      { id: 'monto', t: 'Sobre el monto', ops: [
        { id: 'm1', t: 'La empresa ya decidió regularizarlo y está calculando montos persona por persona.', ok: true, por: 'Solo lo que ya está decidido.' },
        { id: 'm2', t: 'Son unos 400 mil soles en total, unos mil por persona.', ok: false, por: 'Un estimado que no te toca comunicar y que puede cambiar.' },
      ] },
      { id: 'cuando', t: 'Qué viene', ops: [
        { id: 'c1', t: 'La próxima semana la empresa enviará un comunicado oficial. Gracias por traer los casos: sin ellos no lo habríamos visto tan rápido.', ok: true, por: 'Fecha y reconocimiento.' },
        { id: 'c2', t: 'Le aviso cuando sepa algo.', ok: null, por: 'Sin fecha, se parece a lo de siempre.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'm1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.hall === 'h2' ? 'riesgosa' : sel.monto === 'm2' ? 'aceptable' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 1, confianza: q === 'buena' ? 3 : 0, etica: sel.hall === 'h1' ? 2 : -3, cumplimiento: sel.monto === 'm2' ? -3 : 1 },
        flags: [sel.hall === 'h2' ? 'teodoro_sin_respuesta' : 'teodoro_informado'],
        out: q === 'buena' ? 'Teodoro responde a la hora: agradece y te cuenta que el escrito a SUNAFIL se presentó hace tres semanas y «ya no se puede retirar».' : sel.monto === 'm2' ? 'Teodoro reenvía tu mensaje al grupo del sindicato. En diez minutos, 400 personas creen que cobrarán mil soles cada una.' : 'Teodoro lee «todavía no hay nada» y no responde.',
        pro: { ok: 'Cumples la fecha con lo que sí puedes decir.', risk: 'Dar cifras estimadas o negar lo encontrado rompe la confianza, de un lado o del otro.', info: 'Lo que escribes a un dirigente puede terminar en un grupo de 400 personas.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Palabra cumplida.' : 'Cuidado con lo que viaja por WhatsApp.'],
      };
    },
    mirada: { ve: 'Cumplir una fecha con un dirigente sindical vale más que tener todas las respuestas. La clave está en separar lo que ya está decidido, que se puede contar, de lo que todavía es estimado, que no.' },
  },
  {
    id: 'g5', t: '15:10', ch: 'sistema', who: null, titulo: 'El log de la carga', banner: 'assets/3d/scenes/oficina.webp', lugar: 'Oficina de Compensaciones, Callao', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>De vuelta en el Callao, Mili y Diego te esperan con el log de la carga de datos maestros. ${F.has('datos_clave') ? 'Lo que limpiaste el lunes se nota: casi no hay errores de DNI.' : 'Hay más errores de los que esperabas.'} <mark class="clave">Marca lo que no puede quedar así</mark> antes del cierre del miércoles.</p>`,
    type: 'flag', prompt: 'Marca las líneas del log que deben corregirse antes del cierre.',
    doc: { t: 'Nómina360 · Log de carga de datos maestros', sub: 'Viernes 14:52 · 1,100 registros · 27 advertencias' },
    lines: [
      { id: 'ce', t: '9 trabajadores venezolanos cargados con tipo de documento «DNI» y número de carné de extranjería.', bad: BP, why: 'El tipo de documento equivocado rompe el cruce con el T-Registro y el banco.' },
      { id: 'cci', t: '6 cuentas interbancarias con 18 dígitos.', bad: BP, why: 'Un CCI tiene 20 dígitos: esos abonos serán rechazados.' },
      { id: 'alta', t: '2 operarios en planilla de noviembre sin alta en el T-Registro.', bad: LEY, why: 'Todo trabajador en planilla debe estar registrado en el T-Registro, que forma parte de la Planilla Electrónica (D.S. 018-2007-TR).' },
      { id: 'fecha', t: '1 fecha de ingreso «31/02/2019».', bad: BP, why: 'Una fecha imposible: el sistema calculará mal su tiempo de servicios.' },
      { id: 'dir', t: '140 direcciones sin distrito.', duda: 'Conviene completarlas, pero no cambian el pago.' },
      { id: 'tel', t: '35 trabajadores sin celular registrado.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp >= 2 ? 'buena' : 'aceptable',
      out: missLey ? 'Corriges cuentas y documentos, pero dos operarios siguen trabajando sin alta. Nadie lo notará… hasta que alguien lo pida.' : 'Mili toma los carnés y los CCI; tú llamas a Sistemas por las dos altas. A las seis, el log baja de 27 a 3 advertencias, todas de direcciones.',
      flags: [missLey ? 'carga_pendiente' : 'carga_limpia'], cartera: { datos: missLey ? 'Carga con altas pendientes' : 'Carga corregida: 3 advertencias menores' },
      pro: { ok: 'Separas lo que bloquea el pago o incumple la ley de lo que solo está incompleto.', risk: 'Una persona sin alta en el T-Registro es un incumplimiento, aunque cobre bien.', info: 'Los documentos de extranjería deben ir con su tipo correcto: es una de las fallas más comunes con el banco.' },
      kusi: missLey ? ['preocupado', '¿Y esas dos altas?'] : ['celebra', '¡De 27 a 3!'],
    }),
    rules: [[LEY, 'La Planilla Electrónica se compone del T-Registro y la PLAME (D.S. 018-2007-TR).']],
    mirada: {
      ve: 'El log de una carga de datos es aburrido y decisivo. En él aparecen las personas que no cobrarán, las que cobrarán mal y las que están trabajando sin registro. Leerlo con calma un viernes salva el miércoles.',
      visual: { tipo: 'embudo', titulo: 'Advertencias de la carga', niveles: [['Registros', 1100], ['Advertencias', 27], ['Bloquean pago o ley', 18], ['Pendientes al cierre', 3]] },
    },
  },
  {
    id: 'g6', t: '18:20', ch: 'presencial', who: 'patricia-g', titulo: 'Viernes por la tarde', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería del almacén', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Patricia te invita un café de máquina. Afuera, el turno noche ya está entrando. «${F.has('reintegro_todos') ? 'Hoy hiciste que una gerencia pague a gente que ya no está. Eso no se ve todos los días.' : 'Hoy aprendiste cómo se decide en el piso 9. No siempre como una quisiera.'}»</p><p>«La próxima semana es la del pago. ¿Te llevas la laptop el fin de semana?» <mark class="clave">Te lo pregunta en serio.</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'No: dejar una lista de pendientes para el lunes y desconectarte.',
        res: { q: 'buena', fx: { personas: 3, tiempo: 1 },
          out: 'Dejas en tu escritorio una hoja con cinco pendientes para el lunes. El sábado vas a la playa de La Punta con tu familia y comes un ceviche frente al mar.',
          pro: { ok: 'Llegarás al lunes con energía para la semana más dura.', info: 'Una lista para el lunes descansa la cabeza mejor que una laptop abierta.' },
          kusi: ['feliz', '¡Ceviche en La Punta! Merecido.'] } },
      { id: 'b', label: 'Sí: avanzar el cálculo persona por persona del reintegro el sábado.',
        res: { q: 'aceptable', fx: { personas: -2, calidad: 2 },
          out: 'El sábado avanzas 200 de los 412 casos. El domingo en la noche ya estás cansada, y el lunes empieza fuerte.',
          pro: { ok: 'Avanzas.', risk: 'El cansancio acumulado es una fuente clásica de errores en la semana de cierre.' },
          kusi: ['pensando', 'El lunes te va a pedir energía…'] } },
    ],
    mirada: { ve: 'En planillas, el ritmo tiene picos: la semana del cierre y del pago es intensa. Saber descansar antes del pico también es parte del oficio.' },
  },
];
