// Analista de Administración de Personal · Capítulo 4 · «El cierre» · Semana 1, jueves.
// Hilo de las dos semanas: primer cierre de quincena de la campaña, con 900 personas, horas extra, faltas y un cambio de turno que nadie avisó.
// Normas citadas:
// - D.S. 007-2002-TR (TUO de jornada, horario y sobretiempo): art. 8, trabajo nocturno (22:00 a 06:00) con remuneración no menor
//   a la RMV más 35 %; arts. 9 y 10, sobretiempo voluntario, registrado y pagado con sobretasa (25 % las dos primeras horas, 35 % las siguientes).
//   https://larepublica.pe/economia/2025/04/28/horario-diurno-y-nocturno-en-peru-cuales-son-y-como-calcular-el-pago-si-trabajo-en-un-turno-que-abarca-ambas-jornadas-sunafil-lo-aclara-atmp-1027068
//   https://lpderecho.pe/cas-lab-14239-2015-lima-sobretasa-trabajo-nocturno-aplica-perciban-remuneracion-minima-vital
// - D.S. 004-2006-TR (registro de control de asistencia). D.S. 001-98-TR (boletas de pago).
// - Ley 31110 y D.S. 005-2021-MIDAGRI (régimen agrario). D.S. 015-2026-TR: RMV S/ 1,230; mínimo nocturno S/ 1,660.50 al mes.

export const CAP = {
  n: 4, titulo: 'El cierre', dia: 'Semana 1, jueves', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Agrícola Valle Verde · Oficina de Planillas, fundo 1',
  inicio: '05:45', fin: '20:15', cierreHora: '19:50',
  apertura: 'Jueves de cierre. Hoy se calcula la primera quincena de 900 personas y el archivo tiene que llegar al banco antes de las 18:00. Nadie se va temprano.', boton: 'Pegar el calendario de cierre',
  kusi: 'Día de cierre: respira, ordena y no le creas a la primera cifra. ¡Dale!',
  lead: 'Ordenaste el día de cierre, elegiste qué variaciones revisar, descubriste un turno de noche que nadie avisó, le respondiste a un gerente sobre cómo pagar las horas extra y decidiste qué hacer con el banco a minutos del corte.',
  reflexion: '¿Qué cifra de hoy habrías dejado pasar si no la revisabas dos veces?',
  siguiente: { n: 5, titulo: 'El descuento', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'cierre', p: 'Cierre de quincena', j: 'Mónica · Planillas', d: 0, e: '900 personas · banco 18:00' },
  { id: 'nocturno', p: 'Turno noche de packing', j: 'Lucía · Packing', d: 5, e: 'Nadie avisó a Planillas' },
  { id: 'he', p: 'Horas extra de la semana 1', j: 'Mónica · Planillas', d: 4, e: 'Cuadrilla 12 y packing' },
  { id: 'reclamos', p: 'Vacaciones truncas de marzo', j: 'Mónica · Planillas', d: 8, e: '14 casos en esta quincena' },
  { id: 'aprob', p: 'Aprobación de gerencia', j: 'Ricardo · Operaciones', d: 0, e: 'Pendiente' },
];

export const FUTURO = {
  nocturno_revisado: ['Comparaste el pago de cada persona del turno noche con el mínimo nocturno y pagaste la diferencia a quien le faltaba.', 'Lucía lo recordará en el capítulo 5.'],
  nocturno_parejo: ['Pagaste un 35 % extra parejo a todo el turno noche.', 'Mónica tendrá que explicar el sobrecosto en el capítulo 5.'],
  nocturno_pendiente: ['Dejaste el turno noche para la siguiente quincena.', 'Alguien lo notará en su boleta en el capítulo 5.'],
  he_horas: ['Las horas extra se pagaron como horas extra, con su sobretasa y su registro.', 'Capítulo 7, frente a la inspectora.'],
  he_bono: ['Las horas extra se pagaron como un «bono de campaña».', 'La inspectora preguntará por ellas en el capítulo 7.'],
  banco_a_tiempo: ['El archivo llegó al banco a tiempo, con la aprobación de Mónica documentada.', 'El viernes todos cobran.'],
  banco_sin_aprob: ['Mandaste el archivo al banco sin ninguna aprobación.', 'Ricardo lo recordará.'],
  banco_tarde: ['El pago de la quincena se corrió al lunes.', 'Capítulo 5: la ventanilla se llena.'],
  ricardo_informado: ['Ricardo ya sabe por ti cómo se registraron las fechas y las horas.', 'Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  lucia: { n: 'Lucía Ñaupari', sub: 'Jefa de Packing', c: '#C2410C' },
  ricardo: { n: 'Ricardo Benavides', sub: 'Gerente de Operaciones', c: '#334155' },
  fidel: { n: 'Fidel Choque', sub: 'Delegado · cuadrilla 12', c: '#7A3E9D' },
};

export const WSP = [
  { chat: 'grupo', t: '05:50', de: 'Mónica', txt: 'Hoy nadie almuerza fuera. Pedí pollada para todos a las 13:00 🍗. Corte de incidencias: 8:00 en punto.' },
  { chat: 'joel', t: '06:20', de: 'Joel', txt: 'Batería nueva en el reloj del fundo 3 ✅ Y la hoja de salida firmada ya está en la caseta.', si: 'reloj_respaldo' },
  { chat: 'joel', t: '06:20', de: 'Joel', txt: 'Ojo: el Excel del fundo 3 llegó otra vez «corregido» por Ángel. Te mando el original del reloj aparte.', si: 'supervisor_mano' },
  { chat: 'fidel', t: '07:05', de: 'Fidel', txt: 'Señorita, ¿nuestras horas del martes salen en esta quincena? La gente me pregunta en el bus.', no: 'he_tareo' },
  { chat: 'fidel', t: '07:05', de: 'Fidel', txt: 'Señorita, la cuadrilla 12 ha decidido ir a SUNAFIL si no nos pagan lo del martes. No es contra usted.', si: 'he_tareo' },
  { chat: 'lucia', t: '08:40', de: 'Lucía', txt: 'Hola, soy Lucía de Packing. Desde el lunes tengo 80 en turno noche, de 22:00 a 6:00. ¿No les avisaron? 😬' },
  { chat: 'yolanda', t: '12:10', de: 'Yolanda', txt: 'Señorita, ¿mañana sale lo de mis vacaciones? Le estoy diciendo a las otras que reclamaron.', si: 'yolanda_verdad' },
  { chat: 'raul', t: '15:30', de: 'Ing. Raúl', txt: 'Vi el reporte de horas de la 12. Con la llanta incluida. Le dije a Logística que eso lo paga su presupuesto, no el mío.', si: 'he_presuncion' },
  { chat: 'ricardo', t: '17:20', de: 'Ricardo', txt: 'Estoy en reunión con exportadores hasta las 19:00. Lo veo después.' },
];

export const CORREOS = [
  { t: '06:00', de: 'Mónica Uribe', para: 'Analista de Administración de Personal', asunto: 'Cierre de hoy', html: '<p>Hoy el archivo al banco sale <b>antes de las 18:00</b> o la gente cobra el lunes. Lo aprueba Ricardo, y en su ausencia, yo con su visto bueno por escrito.</p><p>Revisa variaciones contra lo esperado, no persona por persona: no te va a alcanzar el día.</p><p>Mónica</p>' },
  { t: '10:45', de: 'Ricardo Benavides · Gerente de Operaciones', para: 'Planillas', cc: 'Gerencia General', asunto: 'Horas extra de la semana 1', html: '<p>Equipo: el reporte de horas extra de la semana 1 me preocupa frente a Gerencia General. Propongo pagar a las cuadrillas involucradas un <b>«bono de campaña» de S/ 40 por persona</b>, que es más de lo que les toca, y no registrarlo como horas extra.</p><p>Todos ganan. Quedo atento.<br>R. Benavides</p>' },
  { t: '16:05', de: 'Banco del Valle · Empresas', para: 'Planillas Valle Verde', asunto: 'Recordatorio: corte de abonos', html: '<p>Para abonar mañana viernes, el archivo de haberes debe estar cargado y autorizado <b>antes de las 18:00 de hoy</b>.</p>' },
];

export const QUIZ = [
  { q: '¿Cuál es la remuneración mínima de quien trabaja habitualmente en horario nocturno, con la RMV de S/ 1,230?', ops: ['S/ 1,230', 'S/ 1,537.50', 'S/ 1,660.50, la RMV más 35 %', 'Lo que diga la jefa de packing'], ok: 2, por: 'El art. 8 del TUO de jornada fija para el trabajo nocturno una remuneración no menor a la RMV más 35 %: 1,230 × 1.35 = S/ 1,660.50.' },
  { q: '¿Qué horario se considera nocturno?', ops: ['De 18:00 a 06:00', 'De 22:00 a 06:00', 'De 00:00 a 05:00', 'Depende de la empresa'], ok: 1, por: 'El trabajo nocturno es el que se realiza entre las 22:00 y las 06:00.' },
  { q: 'Las primeras dos horas extra de una jornada se pagan con una sobretasa mínima de…', ops: ['10 %', '25 %', '35 %', '100 %'], ok: 1, por: 'El D.S. 007-2002-TR fija una sobretasa mínima de 25 % para las dos primeras horas y de 35 % para las siguientes.' },
  { q: 'Un gerente propone pagar las horas extra como un «bono» fijo, un poco mayor. ¿Cuál es el problema principal?', ops: ['Ninguno, si es más dinero', 'Se pierde el registro y el sustento del sobretiempo, y la boleta deja de decir qué se paga', 'Que el bono es ilegal en sí mismo', 'Que SUNAT no acepta bonos'], ok: 1, por: 'El sobretiempo debe registrarse y pagarse como tal. Disfrazarlo de bono borra la prueba de lo que pasó y confunde la boleta.' },
  { q: 'En un cierre de 900 personas, ¿qué revisas primero?', ops: ['Cada boleta, una por una', 'Las variaciones contra lo esperado: quién cobra mucho más o mucho menos que la quincena anterior o que su contrato', 'Solo los montos redondos', 'Nada: el sistema ya calcula'], ok: 1, por: 'Con mucha gente, se revisan las variaciones: ahí aparecen los errores.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '06:05', ch: 'presencial', who: 'monica', titulo: 'El calendario del jueves', banner: 'assets/esc/planilla.webp', show: ['tiempo', 'calidad', 'confianza'],
    body: () => `<p>Mónica llega con dos cafés de la tienda del grifo y una cartulina en blanco. «El lunes te enseñé el ciclo de la planilla. Hoy es <mark class="clave">el ciclo de un solo día</mark>. Si una hora se corre, la gente cobra el lunes.»</p><p>Te pasa seis pósits. Afuera, el viento de la tarde todavía no empieza; a las tres levantará polvo hasta la ventana.</p>`,
    type: 'secuencia', prompt: 'Ordena el día de cierre, de la mañana a la tarde.', boton: 'Pegar el calendario',
    items: [
      { id: 'corte', t: '08:00 · Corte de incidencias: faltas, descansos médicos, horas extra y turnos', por: 'Lo que llega después del corte va a la siguiente quincena, con su justificación.' },
      { id: 'carga', t: '09:30 · Cargar al sistema las horas extra, los turnos nocturnos y los conceptos nuevos', por: 'Las vacaciones truncas de marzo también entran hoy.' },
      { id: 'calc', t: '12:00 · Cálculo preliminar de la planilla', por: 'Antes de almorzar, para tener la tarde de revisión.' },
      { id: 'var', t: '13:30 · Revisión de variaciones contra lo esperado', por: 'Quién cobra mucho más o mucho menos de lo normal.' },
      { id: 'aprob', t: '16:00 · Aprobación de la planilla por gerencia', por: 'Con el resumen y las variaciones explicadas.' },
      { id: 'banco', t: '17:30 · Carga del archivo de haberes al banco', por: 'El corte del banco es a las 18:00. No hay margen.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, calidad: q === 'riesgosa' ? -2 : 3 },
        rel: { monica: q === 'buena' ? 1 : 0 },
        cartera: { cierre: q === 'riesgosa' ? 'Calendario corregido por Mónica' : 'Calendario de cierre en la pared' },
        out: q === 'buena' ? 'Mónica pega la cartulina al lado de la puerta: «Este es tu entregable. Lo usamos en cada quincena».' : 'Mónica mueve dos pósits: «Si apruebas antes de revisar variaciones, Ricardo firma errores».',
        pro: { ok: 'El cierre tiene horas fijas porque el banco tiene una hora fija.', risk: 'Revisar después de aprobar es pedir que alguien firme a ciegas.', info: 'Pon en el calendario también la hora límite de cada área: Packing, fundos, Logística.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Calendario de cierre listo! Primer entregable.' : 'El banco no espera: el orden sí importa.'],
      };
    },
    rules: [[BP, 'Fija y comunica la hora de corte de incidencias: es la que más se incumple.']],
    mirada: {
      ve: 'Un cierre de planilla es una carrera contra una hora que no controlas: el corte del banco. Por eso cada paso tiene hora, y la revisión va antes de la aprobación, nunca después.',
      visual: { tipo: 'linea', titulo: 'Jueves de cierre', hitos: [['08:00', 'Corte'], ['09:30', 'Carga de conceptos'], ['12:00', 'Cálculo'], ['13:30', 'Variaciones'], ['16:00', 'Aprobación'], ['17:30', 'Banco']] },
    },
  },
  {
    id: 'e2', t: '12:40', ch: 'sistema', who: null, titulo: 'Las variaciones', banner: 'assets/foto2/tablet-equipo.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>El cálculo preliminar sale a las 12:35. El sistema muestra las alertas de variación en rojo. Con la pollada enfriándose sobre el escritorio, tienes tiempo para revisar a fondo <mark class="clave">tres</mark> antes de las 16:00.</p>${F.has('contrato_viejo') ? '<p>Hay una alerta que te hace tragar saliva: el contrato que aprobaste el lunes de la semana 1.</p>' : ''}`,
    type: 'pick', n: 3, prompt: 'Elige las tres alertas que vas a revisar a fondo.', boton: 'Revisar estas tres', resumen: 'Revisaste',
    cols: ['Alerta', 'Personas', 'Qué dice el sistema'],
    rows: [
      { id: 'noct', cells: ['Packing: 80 personas con horas entre 22:00 y 06:00 y sin concepto nocturno', '80', 'Horario no coincide con el turno registrado'] },
      { id: 'vac', cells: ['Vacaciones truncas de marzo cargadas como «otros ingresos»', '14', 'Concepto sin código'] },
      { id: 'rd49', cells: ['Remuneración diaria de S/ 49.00 en contratos nuevos', '612', 'Debajo del mínimo agrario calculado'], si: 'contrato_viejo' },
      { id: 'he12', cells: ['Cuadrilla 12: horas extra del martes', '32', 'Horas sin marcación en el reloj'] },
      { id: 'redondeo', cells: ['Diferencias de S/ 0.01 por redondeo en la BETA', '403', 'Céntimos'] },
      { id: 'nombre', cells: ['Nombres en mayúsculas y minúsculas mezcladas', '210', 'Formato'] },
    ],
    score: { noct: 3, vac: 2, rd49: 3, he12: 2, redondeo: -1, nombre: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: picks.includes('noct') ? 3 : -2, tiempo: picks.includes('nombre') ? -3 : 1 },
        flags: picks.includes('rd49') ? ['contrato_corregido'] : [],
        cartera: { nocturno: picks.includes('noct') ? 'Detectado en el cálculo' : 'Sin revisar' },
        out: picks.includes('rd49') ? 'Corriges la remuneración diaria de 612 contratos a lo que manda la RMV de S/ 1,230. Te tiemblan un poco las manos. Le avisas a Mónica: «Esto lo dejé pasar yo».' : picks.includes('noct') ? 'Abres la alerta de Packing: 80 personas trabajan de noche desde el lunes. En el sistema, siguen en turno de día.' : 'Revisaste lo que se veía mal, no lo que pesaba más.',
        pro: { ok: 'Revisas lo que afecta a más personas y lo que puede estar por debajo de un mínimo legal.', risk: 'Los céntimos y el formato distraen: no cambian el sueldo de nadie.', info: 'Ordena las alertas por impacto: personas × monto × riesgo legal.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Fuiste directo a lo que pesa!' : '¿Qué alerta toca un mínimo legal?'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR, art. 8: el trabajo nocturno no puede pagarse por debajo de la RMV más 35 %.'], [BP, 'En un cierre masivo, revisa variaciones por impacto, no por orden de aparición.']],
    mirada: {
      ve: 'Con 900 personas no se revisa boleta por boleta: se revisan las variaciones. La habilidad está en distinguir la alerta que molesta de la alerta que pesa. Céntimos de redondeo hay en todas las planillas; un turno no registrado, no.',
      visual: { tipo: 'matriz', x: 'Personas afectadas', y: 'Riesgo legal', cuadrantes: ['Revisa ya', 'Revisa hoy', 'Si hay tiempo', 'Ignora'], items: [['Turno noche', .5, .9], ['Vacaciones de marzo', .2, .7], ['Horas de la 12', .3, .75], ['Redondeo BETA', .8, .1], ['Nombres', .6, .05]] },
    },
  },
  {
    id: 'e3', t: '13:30', ch: 'presencial', who: null, titulo: 'Ochenta personas de noche', banner: 'assets/3d/scenes/planta.webp', lugar: 'Packing · zona de embalaje', show: ['cumplimiento', 'personas', 'calidad'],
    body: (n, F) => `<p>El packing es una nave enorme, fría por las cámaras de frío, con olor a cartón nuevo y a uva. Lucía Ñaupari, jefa de Packing, 34 años, ingeniera de la San Luis Gonzaga, te recibe con el casco en la mano.</p><p>«Desde el lunes tengo 80 de noche, de 22:00 a 6:00, porque el barco a Rotterdam se adelantó. Aceptaron de palabra. Además <mark class="clave">ganan por caja embalada, así que ya ganan más que el mínimo</mark>. ¿Para qué complicarlo?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Cargar el turno noche y comparar, persona por persona, lo que gana cada una con el mínimo nocturno; pagar la diferencia solo a quien no llegue y pedirle a Lucía que comunique los cambios de turno por escrito.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 3, tiempo: -3 }, flags: ['nocturno_revisado'], cartera: { nocturno: '80 revisados · 23 con diferencia pagada' },
          out: 'De las 80 personas, 57 superan el mínimo nocturno gracias a las cajas. 23, las más nuevas y más lentas, no. Les pagas la diferencia. Lucía suspira: «No sabía que eran tantas».',
          pro: { ok: 'Aplicas la norma como es: un piso. Quien ya lo supera no necesita recargo; quien no llega, lo recibe.', risk: 'Te toma una hora que no tenías. Y el cambio de turno de palabra sigue siendo frágil.', info: 'Pide que todo cambio de turno llegue a Planillas antes del corte, con la lista de personas.' },
          kusi: ['celebra', '¡Las 23 que no llegaban ahora sí llegan!'] } },
      { id: 'b', label: 'Pagar un 35 % adicional parejo a las 80 personas, sin revisar caso por caso: es más seguro, más rápido y nadie podrá reclamar.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: 3, calidad: -2, tiempo: 2 }, flags: ['nocturno_parejo'], cartera: { nocturno: '35 % adicional a las 80' },
          out: 'El archivo sale rápido. Mónica ve el total y levanta las cejas: «Eso es más de lo que manda la ley. Si lo pagamos una vez, la gente lo va a esperar todo el turno».',
          pro: { ok: 'Nadie queda por debajo del mínimo.', risk: 'Creas un beneficio que nadie decidió y que costará explicar o mantener. Una planilla no regala por cansancio.' },
          kusi: ['pensando', 'Generoso… pero ¿lo decidió alguien?'] } },
      { id: 'c', label: 'Dejar el turno noche para la siguiente quincena: no llegó antes del corte de incidencias y la regla del corte es para todos.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, personas: -4, tiempo: 3 }, flags: ['nocturno_pendiente'], cartera: { nocturno: 'Pendiente para la quincena 2' },
          out: 'El corte se respeta. El jueves, 23 personas cobrarán menos que el mínimo nocturno. Lucía se encoge de hombros: «Yo avisé».',
          pro: { ok: 'Respetas el calendario.', risk: 'El corte ordena el trabajo de Planillas, pero no está por encima de un mínimo legal. Pagar menos que el mínimo, aunque sea una quincena, es pagar menos que el mínimo.' },
          kusi: ['preocupado', 'El corte no puede ganarle a la ley.'] } },
    ],
    rules: [[LEY, 'D.S. 007-2002-TR, art. 8: el trabajo nocturno (22:00 a 06:00) no se remunera por debajo de la RMV más 35 %: S/ 1,660.50 al mes con la RMV vigente.'], [POL, 'En Valle Verde, los cambios de turno se informan a Planillas por escrito antes del corte.']],
    mirada: {
      ve: 'Lucía no esconde nada: resolvió un barco que se adelantó. Pero un cambio de turno cambia el sueldo mínimo de 80 personas. El recargo nocturno es un piso, no un bono: quien ya lo supera no lo necesita; quien no, lo tiene que recibir.',
      visual: { tipo: 'rango', titulo: 'Turno noche: ¿quién llega al mínimo?', min: 1200, max: 2200, banda: [1660.5, 2200], marcas: [['RMV', 1230], ['Mínimo nocturno', 1660.5], ['Embaladora nueva', 1480], ['Embaladora con experiencia', 1950]] },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 8, trabajo nocturno', dice: 'La remuneración de quien labora en horario nocturno no puede ser menor a la RMV más 35 %.', practica: 'Se compara lo que gana cada persona con ese piso; la Corte Suprema ha entendido que la sobretasa se aplica a quienes perciben el mínimo.' }],
    },
  },
  {
    id: 'e4', t: '14:50', ch: 'correo', who: null, titulo: 'El «bono de campaña»', banner: 'assets/foto2/grito.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Relees el correo de Ricardo, con copia a Gerencia General: pagar las horas extra de la semana como un <mark class="clave">«bono de campaña» de S/ 40</mark>, «que es más de lo que les toca», y no registrarlas como horas extra.</p><p>${F.has('fecha_callada') ? 'Y debajo, un mensaje suyo de hace una hora: «Vi en el T-Registro las fechas de ingreso reales. Usted me dijo que sí. Hablemos». ' : ''}Mónica está en el banco. Le respondes tú.</p>`,
    type: 'compose', enviaA: 'ricardo', para: 'Para: Ricardo Benavides · CC: Mónica Uribe', boton: 'Enviar la respuesta',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'reconoce', t: 'Reconocer', ops: [
        { id: 'r1', t: 'Ricardo, entiendo la preocupación por cómo se ve el sobretiempo frente a Gerencia General.', ok: true, por: 'Nombras su problema real antes de discrepar.' },
        { id: 'r2', t: 'Ricardo, eso no se puede hacer.', ok: false, por: 'Cierras la conversación con un gerente y con copia a la Gerencia General.' },
      ] },
      { id: 'porque', t: 'Por qué no como bono', ops: [
        { id: 'p1', t: 'Si pagamos las horas extra como bono, perdemos el registro y el sustento del sobretiempo; la boleta dejaría de decir lo que realmente se pagó, y eso es lo primero que revisaría una inspección.', ok: true, por: 'Explicas el riesgo concreto, sin sermón.' },
        { id: 'p2', t: 'Porque la ley lo prohíbe y nos van a multar.', ok: null, por: 'Hay un riesgo real, pero dicho así suena a amenaza sin explicación.' },
        { id: 'p3', t: 'Igual a la gente le conviene más el bono.', ok: false, por: 'Aceptas el disfraz. Y no siempre es más: depende de las horas de cada persona.' },
      ] },
      { id: 'alt', t: 'La alternativa', ops: [
        { id: 'a1', t: 'Propongo pagarlas como horas extra, con su sobretasa, y entregarle un resumen de causas (corte de luz, bus tardío, barco adelantado) para Gerencia General.', ok: true, por: 'Le das lo que de verdad necesita: una explicación del costo.' },
        { id: 'a2', t: 'Mejor que Gerencia General decida.', ok: false, por: 'Te lavas las manos en un tema que es tuyo.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Si te parece, a las 16:00 te llevo el resumen con Mónica antes de la aprobación.', ok: true, por: 'Hora concreta y con tu jefa.' },
        { id: 'c2', t: 'Saludos cordiales.', ok: null, por: 'Correcto, pero no mueve nada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'p1', 'a1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      const bono = sel.porque === 'p3';
      return {
        q: bono ? 'riesgosa' : q, fx: { etica: bono ? -5 : 4, cumplimiento: bono ? -5 : 4, confianza: sel.reconoce === 'r2' ? -4 : 2 },
        flags: bono ? ['he_bono'] : ['he_horas', 'ricardo_informado'],
        cartera: { he: bono ? 'Pagadas como «bono de campaña»' : 'Pagadas como horas extra con sobretasa' },
        out: bono ? 'Ricardo responde: «Perfecto, así lo hacemos». Las horas extra desaparecen de la boleta. El viernes, nadie sabrá qué se le pagó ni por qué.' : q === 'buena' ? 'Ricardo contesta en diez minutos: «Ok. Tráiganme el resumen a las 16:00». Gerencia General, en copia, no dice nada. Eso también es una respuesta.' : 'Ricardo responde seco: «Lo vemos». A las 16:00 no está en su oficina.',
        pro: { ok: 'Discrepas con un gerente sin humillarlo, con el riesgo explicado y una alternativa que resuelve su problema.', risk: 'Un «bono» que reemplaza horas extra borra la prueba del sobretiempo. Si un día alguien reclama sus horas, la empresa no podrá mostrar que las pagó.', info: 'Cuando un correo viene con copia a la Gerencia General, responde a la persona, no a la audiencia.' },
        kusi: [bono ? 'triste' : q === 'buena' ? 'feliz' : 'pensando', bono ? 'Más plata hoy, menos prueba mañana…' : q === 'buena' ? '¡Le dijiste que no ofreciendo un sí!' : 'Faltó darle algo que llevar a Gerencia.'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR: el sobretiempo se registra y se paga con sobretasa (25 % las dos primeras horas, 35 % las siguientes).'], [LEY, 'D.S. 001-98-TR: la boleta detalla los conceptos que se pagan.']],
    mirada: {
      ve: 'Ricardo tiene un problema real: explicar costos ante su jefe. Su solución crea otro: borrar el registro de lo que pasó. Una buena analista no defiende la norma contra el gerente; le muestra cómo la norma resuelve mejor su problema.',
      visual: { tipo: 'balanza', a: { t: 'Bono de campaña', items: ['Un número redondo en el reporte', 'Gerencia no ve «horas extra»'] }, b: { t: 'Horas extra con sobretasa', items: ['Registro y sustento del sobretiempo', 'Boleta que dice la verdad', 'Causas explicadas a Gerencia'] } },
    },
  },
  {
    id: 'e5', t: '15:25', ch: 'sistema', who: null, titulo: 'El sistema se cuelga', banner: 'assets/esc/alarma.webp', show: ['tiempo', 'calidad'],
    body: (n, F) => `<p>A las 15:22, con la planilla recalculada, el sistema de planillas se queda en «Procesando…». El círculo gira. Wendy prueba en su máquina: igual. Afuera, el viento levanta polvo contra la ventana del contenedor.</p><p>${F.has('joel_aliado') ? 'Joel ya está en camino: «Dame 10 minutos, no toques nada».' : 'Joel no contesta: está en el fundo 3.'} El banco cierra a las 18:00 y <mark class="clave">todavía no tienes la aprobación</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'No tocar nada, exportar a Excel el último cálculo guardado de las 14:55 y avanzar el resumen para gerencia mientras TI revisa.',
        res: { q: 'buena', fx: { tiempo: 3, calidad: 3 }, rel: { joel: 1 },
          out: 'A las 15:41 el sistema vuelve: alguien de Contabilidad estaba corriendo un reporte anual en el mismo servidor. Tu resumen ya está listo.',
          pro: { ok: 'No pierdes trabajo y usas la espera para avanzar lo que no depende del sistema.', info: 'Pide a TI que nadie corra reportes pesados en días de cierre. Ponlo en el calendario.' },
          kusi: ['feliz', 'Paciencia con plan B. ¡Bien!'] } },
      { id: 'b', label: 'Reiniciar el sistema a la fuerza: no hay tiempo para esperar.',
        res: { q: 'riesgosa', fx: { tiempo: -4, calidad: -3 },
          out: 'El sistema reinicia y pierde el recálculo del turno noche. Lo repites desde cero. Son las 16:20.',
          pro: { ok: 'Actúas rápido.', risk: 'Reiniciar a mitad de un proceso suele costar más tiempo del que ahorra.' },
          kusi: ['preocupado', 'Ay… el recálculo se fue.'] } },
    ],
    rules: [[BP, 'En día de cierre, guarda versiones del cálculo y ten un plan B fuera del sistema.']],
    mirada: {
      ve: 'Todos los sistemas de planillas se cuelgan alguna vez a fin de quincena. La diferencia la hace quien guardó una versión antes y sabe qué puede avanzar mientras espera.',
      visual: { tipo: 'flujo', titulo: 'Cuando el sistema se cuelga', pasos: ['No reiniciar', 'Exportar lo último guardado', 'Avisar a TI', 'Avanzar lo que no depende del sistema'] },
    },
  },
  {
    id: 'e6', t: '16:15', ch: 'documento', who: null, titulo: 'El resumen para aprobar', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Antes de llevar el resumen de la planilla a firma, lo revisas una última vez con un resaltador. <mark class="clave">Lo que se firme aquí es lo que cobrarán 900 personas el jueves</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería aprobarse así.',
    doc: { t: 'Resumen de planilla · 1.ª quincena de campaña', sub: 'Agrícola Valle Verde S.A.C. · 900 trabajadores' },
    lines: [
      { id: 'he25', t: 'Horas extra: sobretasa de 25 % aplicada a todas las horas, incluida la tercera y la cuarta.', bad: LEY, why: 'Desde la tercera hora, la sobretasa mínima es 35 %. Con la cuadrilla 12 hay personas con más de dos horas.' },
      { id: 'beta', t: 'BETA: 30 % de la RMV, proporcional a los días laborados en la quincena.' },
      { id: 'vac', t: 'Vacaciones truncas de marzo (14 personas): concepto «otros ingresos».', bad: BP, why: 'Ponle su nombre real en la boleta: «vacaciones truncas campaña anterior». Si no, nadie sabrá que se corrigió su reclamo.' },
      { id: 'asig', t: 'Asignación familiar: 10 % de la RMV para quienes acreditaron hijos menores de edad.' },
      { id: 'tard', t: 'Descuento por tardanza a la cuadrilla 9 por el retraso del bus 2.', bad: BP, why: 'El bus es de la empresa. Ya lo marcaste ayer: que no reaparezca en el cierre.' },
      { id: 'kevin', t: 'Kevin Huamaní, 17 años: cero días, sin alta, sin pago.', duda: 'Correcto si no trabajó. Pero verifica con Teresa que de verdad no entró al campo.' },
      { id: 'adel', t: 'Adelanto de quincena descontado a 12 personas que firmaron su solicitud.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'El resumen va a firma con la sobretasa al 25 % para todas las horas. Diecinueve personas de la 12 cobrarán menos de lo que manda la norma.' : 'Corriges la sobretasa, renombras el concepto de vacaciones y quitas el descuento del bus. A las 16:40, el resumen está listo para firma.',
      pro: { ok: 'La última revisión es la más barata: después de pagar, cada corrección es un reintegro y una cola.', risk: 'Una sobretasa mal configurada se repite en todas las quincenas.', info: 'Revisa la configuración del concepto en el sistema, no solo el resultado de hoy.' },
      kusi: missLey ? ['preocupado', 'La tercera hora vale más que la primera…'] : ['celebra', '¡Resumen limpio! A firmar.'],
    }),
    rules: [[LEY, 'D.S. 007-2002-TR: 25 % las dos primeras horas extra; 35 % las siguientes.'], [LEY, 'Ley 31110: la BETA equivale al 30 % de la RMV, proporcional a la jornada.']],
    mirada: {
      ve: 'El resumen de planilla es lo único que ve quien aprueba. Si ahí un concepto se llama «otros ingresos» o una sobretasa está mal configurada, nadie lo verá hasta que llegue un reclamo.',
      visual: { tipo: 'cambio', titulo: 'Antes de firmar', pares: [['25 % para todas las horas extra', '25 % las dos primeras, 35 % las siguientes'], ['«Otros ingresos»', '«Vacaciones truncas campaña anterior»'], ['Descuento por el bus de la empresa', 'Sin descuento']] },
    },
  },
  {
    id: 'e7', t: '17:25', ch: 'llamada', who: 'monica', titulo: 'Treinta y cinco minutos', banner: 'assets/foto2/tension.webp', show: ['tiempo', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>17:25. El archivo de haberes está listo. Ricardo sigue en su reunión con exportadores y no contesta. Mónica te llama desde la cola del banco en Ica, con bulla de fondo.</p><p>«Si no carga antes de las 18:00, 900 personas cobran el lunes. Yo puedo aprobar <mark class="clave">si Ricardo me da su visto bueno por escrito</mark>. Así está en el procedimiento.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mandarle a Ricardo un WhatsApp corto con el total, las tres variaciones explicadas y la pregunta «¿visto bueno para que Mónica apruebe?»; si responde, Mónica aprueba y cargas.',
        res: { q: 'buena', fx: { tiempo: 2, cumplimiento: 4, confianza: 4 }, rel: { monica: 1 }, flags: ['banco_a_tiempo'], cartera: { cierre: 'Archivo cargado 17:52 · aprobación documentada', aprob: 'Visto bueno por WhatsApp' },
          envia: ['ricardo', 'Ricardo: planilla de la 1.ª quincena lista. Total y variaciones en el PDF adjunto (turno noche, vacaciones de marzo, horas de la 12). ¿Visto bueno para que Mónica apruebe? El banco cierra a las 18:00.'],
          out: 'A las 17:48 llega un «Ok, aprobado» desde la reunión. Mónica aprueba desde su celular. El archivo carga a las 17:52. Wendy aplaude bajito.',
          pro: { ok: 'Respetas el procedimiento y lo haces fácil para quien tiene que aprobar: un mensaje, un adjunto, una pregunta.', risk: 'Si Ricardo no contestaba, el pago se corría al lunes.', info: 'Propón que el procedimiento tenga un aprobador alterno para días de cierre.' },
          kusi: ['celebra', '¡17:52! Mañana todos cobran.'] } },
      { id: 'b', label: 'Cargar el archivo ya, sin aprobación: la planilla está revisada, el error sería que 900 familias cobren tarde.',
        res: { q: 'riesgosa', fx: { tiempo: 4, cumplimiento: -4, confianza: -3 }, rel: { monica: -1 }, flags: ['banco_sin_aprob'], cartera: { aprob: 'Sin aprobación' },
          out: 'El archivo carga a las 17:31. A las 19:10, Ricardo escribe: «¿Quién aprobó la planilla?». Mónica tiene que responder por algo que no firmó.',
          pro: { ok: 'Nadie cobra tarde.', risk: 'Una planilla de 900 personas pagada sin aprobación es justo lo que un control interno existe para evitar. Si había un error, ya salió del banco.' },
          kusi: ['sorpresa', 'Rápido… pero ¿quién responde si algo estaba mal?'] } },
      { id: 'c', label: 'Esperar a que Ricardo termine su reunión y aprobar como manda el procedimiento, aunque se cobre el lunes.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -4, tiempo: -3 }, flags: ['banco_tarde'], cartera: { cierre: 'Pago corrido al lunes' },
          out: 'Ricardo aprueba a las 19:20. El pago se corre al lunes. A la mañana siguiente, la ventanilla está llena de gente preguntando por qué.',
          pro: { ok: 'El procedimiento se cumple al pie de la letra.', risk: 'Había una vía dentro del procedimiento (el visto bueno escrito) y no la buscaste. Un fin de semana de atraso en campaña es un fin de semana sin plata para pasajes y comida.' },
          kusi: ['triste', 'Mañana la ventanilla va a estar llena…'] } },
    ],
    rules: [[POL, 'En Valle Verde, la planilla la aprueba el gerente de Operaciones; en su ausencia, la jefa de Planillas con su visto bueno escrito.'], [BP, 'Facilita la aprobación: total, variaciones explicadas y una sola pregunta.']],
    mirada: {
      ve: 'El control interno parece un obstáculo a las 17:25, pero existe para que nadie pague 900 sueldos sin que otra persona mire. La salida profesional no es saltarse el control ni esperar con los brazos cruzados: es hacer que aprobar sea fácil y rápido.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje para aprobar en un minuto', txt: 'Ricardo: planilla de la 1.ª quincena lista. Total y variaciones en el PDF (turno noche, vacaciones de marzo, horas de la 12). ¿Visto bueno para que Mónica apruebe? El banco cierra a las 18:00.' },
    },
  },
];
