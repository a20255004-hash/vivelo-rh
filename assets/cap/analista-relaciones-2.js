// Analista de Relaciones Laborales · Capítulo 2 · «La falta» · Semana 1, martes.
// Hilo de las dos semanas: la negociación colectiva con el sindicato y, desde hoy, el caso disciplinario de Marcos Huamán.
// Normas citadas:
// - TUO del D. Leg. 728, Ley de Productividad y Competitividad Laboral (D.S. 003-97-TR), art. 25 (falta grave),
//   art. 31 (plazo no menor de seis días naturales para defenderse, principio de inmediatez y exoneración de asistir
//   con pago de la remuneración) y art. 32 (despido por escrito). Texto transcrito en
//   https://lpderecho.pe/jurisprudencia-articulo-31-tuo-decreto-legislativo-728-procedimiento-despido/
// - Constitución Política del Perú, art. 2, inc. 7 (honor, intimidad, voz e imagen propias).
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): libertad sindical (ya citada en el cap. 1).

export const CAP = {
  n: 2, titulo: 'La falta', dia: 'Semana 1, martes', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Conservas del Pacífico · Planta de envasado',
  inicio: '07:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes. La semana pasada entró caballa sin parar y la planta trabajó corrido. A las 4:10 de la madrugada, un supervisor encontró a un operario dormido junto a la autoclave 3.', boton: 'Ir al cambio de turno',
  kusi: 'Hoy toca investigar antes de juzgar. ¡Con calma, que el apuro también se paga!',
  lead: 'Escuchaste antes de sancionar, cuidaste la prueba, separaste los hechos de las opiniones y armaste un plan de investigación que respeta el procedimiento.',
  reflexion: '¿Qué te costó más hoy: frenar a Gladys o no juzgar a Marcos?',
  siguiente: { n: 3, titulo: 'La carta de preaviso', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'caso', p: 'Caso Marcos Huamán · autoclave 3', j: 'Gladys · Planta', d: 0, e: 'Abierto hoy, 04:10' },
  { id: 'prueba', p: 'Pruebas: video, informe y marcaciones', j: 'Renzo · Supervisión noche', d: 0, e: 'Sin reunir' },
  { id: 'plan', p: 'Plan de investigación', j: 'Arturo · Relaciones Laborales', d: 0, e: 'Sin empezar' },
  { id: 'trato', p: 'Inicio del trato directo', j: 'Lucho · Sindicato', d: 0, e: 'Esperando respuesta de la junta' },
  { id: 'constancia', p: 'Constancia de trabajo de Rosa Ipanaqué', j: 'Rosa · Envasado', d: 0, e: 'Pedida «para ayer»' },
];

export const FUTURO = {
  investigacion_abierta: ['Abriste una investigación antes de sancionar.', 'Mañana redactarás la carta con hechos, no con rabia. Capítulo 3.'],
  despido_express: ['Aceptaste preparar el despido de Marcos el mismo día.', 'Valeria retuvo la carta en la noche. Te lo recordará en el capítulo 3.'],
  marcos_exonerado: ['Marcos se fue a casa exonerado de asistir, con su sueldo.', 'Llegará a su descargo descansado y sin rencor. Capítulo 5.'],
  marcos_sin_pago: ['Mandaste a Marcos a su casa sin goce de haber antes de investigar.', 'Lucho lo llevará a la mesa en el capítulo 4.'],
  video_resguardado: ['Pediste el video original y que se borrara del grupo.', 'La prueba se mantiene limpia. Capítulo 3.'],
  video_circula: ['El video de Marcos dormido siguió circulando.', 'Llegará a un TikTok de Chimbote. Capítulo 4.'],
  marcaciones_linea: ['Pediste las marcaciones de toda la línea 2.', 'Ahí aparecerán horas extra sin pagar. Capítulo 6.'],
  marcaciones_vistas: ['Viste las marcaciones de Marcos: llevaba más de un turno en planta.', 'Su descargo no te tomará por sorpresa. Capítulo 5.'],
  marcos_escuchado: ['Escuchaste a Marcos y le explicaste el proceso.', 'Confiará en el procedimiento. Capítulo 5.'],
  acta_forzada: ['Le hiciste firmar a Marcos un acta reconociendo la falta, sin asesoría.', 'Valeria la considerará inservible y Lucho, un abuso. Capítulos 3 y 4.'],
  gladys_entiende: ['Gladys recibió un plan claro con fechas.', 'Te dará los roles de turno sin pelear. Capítulo 5.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  renzo: { n: 'Renzo Távara', sub: 'Supervisor del turno noche', c: '#7A4A2E' },
  milagros: { n: 'Milagros Chero', sub: 'Asistente de RR.HH. · asistencia y planillas', c: '#2F6B3F' },
  rosa: { n: 'Rosa Ipanaqué', sub: 'Operaria de envasado', c: '#B0563A' },
};

export const WSP = [
  { chat: 'gladys', t: '06:40', de: 'Gladys', txt: 'Ven antes de las 7. Tenemos un operario dormido en la autoclave. Esto no lo vas a frenar.', si: 'turno_frenado' },
  { chat: 'gladys', t: '06:40', de: 'Gladys', txt: 'Ven antes de las 7. Tenemos un problema serio en la autoclave 3.', no: 'turno_frenado' },
  { chat: 'rosa', t: '07:50', de: 'Rosa', txt: 'Señorita buenos días 🙏 necesito mi constancia de trabajo para la Caja, me citaron hoy a las 12. Disculpe la molestia.' },
  { chat: 'lucho', t: '09:05', de: 'Lucho', txt: 'Buenos días. La junta confirma el trato directo para el jueves 10:00, dentro del plazo. Y aparte: Marcos Huamán es afiliado. Estamos atentos.', si: 'lucho_respeto' },
  { chat: 'lucho', t: '09:05', de: 'Lucho', txt: 'Jueves 10:00 para el trato directo. El plazo lo tenemos contado. Y Marcos Huamán es afiliado: cuidado con lo que hacen.', no: 'lucho_respeto' },
  { chat: 'grupo', t: '12:30', de: 'Valeria', txt: 'Me contó Arturo lo del operario. Antes de cualquier carta, quiero ver los hechos ordenados. Nada de «se le despide» todavía.' },
  { chat: 'grupo', t: '13:10', de: 'Arturo', txt: 'Ojo: en el comedor alguien tapó el comunicado con un papelógrafo. Dice «¿Imposibles? Paguen las horas».', si: 'comunicado_ataque' },
  { chat: 'renzo', t: '15:20', de: 'Renzo', txt: 'Listo, borré el video del grupo de supervisores. Le mandé el original a su correo. Pero ya lo habían reenviado, señorita.', si: 'video_resguardado' },
  { chat: 'milagros', t: '17:30', de: 'Milagros', txt: 'Ya saqué el reporte del reloj de la línea 2, dos semanas. Hay cosas raras, mejor lo vemos el lunes con calma.', si: 'marcaciones_linea' },
  { chat: 'arturo', t: '18:55', de: 'Arturo', txt: 'Gladys me llamó dos veces. Igual hiciste bien. Mañana sale la carta, revisada por Valeria.', si: 'investigacion_abierta' },
];

export const CORREOS = [
  { t: '07:05', de: 'Renzo Távara · Supervisión turno noche', para: 'Gladys Ruiz; Relaciones Laborales', asunto: 'Operario dormido en autoclave 3', html: '<p>Buenos días. A las 04:10 encontré al operario Marcos Huamán dormido junto a la autoclave 3. Adjunto video. Recomiendo el despido.</p><p>Renzo Távara</p>' },
  { t: '12:40', de: 'Valeria Castro · Abogada laboralista', para: 'Analista de Relaciones Laborales', asunto: 'Caso autoclave: cómo proceder', html: '<p>Te recuerdo lo básico del TUO del D. Leg. 728 (D.S. 003-97-TR): no se puede despedir por conducta sin antes dar al trabajador, por escrito, un plazo no menor de seis días naturales para defenderse de los cargos (art. 31). Mientras dure ese trámite, la empresa puede exonerarlo de asistir, siempre que no afecte su defensa y se le pague su remuneración.</p><p>Y no olvides el principio de inmediatez: investigar no es lo mismo que dejar dormir el caso.</p><p>Valeria</p>' },
];

export const QUIZ = [
  { q: 'Antes de despedir a un trabajador por una falta de conducta, la empresa debe…', ops: ['Comunicarle el despido por WhatsApp', 'Darle por escrito un plazo no menor de seis días naturales para defenderse', 'Esperar a que el sindicato lo autorice', 'Pedirle su renuncia'], ok: 1, por: 'El art. 31 del TUO del D. Leg. 728 exige el preaviso escrito con un plazo no menor de seis días naturales para el descargo.' },
  { q: 'Mientras se tramita el procedimiento, la empresa puede exonerar al trabajador de asistir…', ops: ['Sin pagarle', 'Pagándole su remuneración y sin perjudicar su defensa', 'Solo si renuncia al descargo', 'Nunca'], ok: 1, por: 'La exoneración es posible si no perjudica su derecho de defensa y se le abona la remuneración y demás derechos.' },
  { q: 'El principio de inmediatez significa que…', ops: ['El despido debe ser el mismo día de la falta', 'La empresa debe reaccionar en un tiempo razonable desde que conoce la falta y la investiga', 'El trabajador debe responder en 24 horas', 'Solo vale el primer testigo'], ok: 1, por: 'La reacción debe ser oportuna: investigar es parte del tiempo razonable, pero dejar dormir el caso puede interpretarse como perdón.' },
  { q: 'En un informe de supervisión, «es flojo y vive quejándose con el sindicato» es…', ops: ['Un hecho comprobado', 'Una opinión, y la mención al sindicato puede leerse como discriminación', 'Una prueba suficiente', 'Un requisito del informe'], ok: 1, por: 'El informe debe describir hechos: hora, lugar, quién vio qué. Las opiniones y la afiliación sindical no son hechos imputables.' },
  { q: 'Compartir en grupos de WhatsApp el video de un trabajador dormido…', ops: ['Sirve de ejemplo y no tiene riesgo', 'Puede afectar su honor e imagen, y además contamina la prueba', 'Es obligatorio para que quede constancia', 'Es responsabilidad del sindicato'], ok: 1, por: 'La Constitución protege el honor y la imagen propia. La prueba se resguarda: original, quién la tomó y cuándo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '07:05', ch: 'presencial', who: 'gladys', titulo: 'Cambio de turno', banner: 'assets/foto/supervisa.webp', lugar: 'Pasillo de autoclaves · planta de envasado', show: ['calidad', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Sale el turno noche con las caras grises; entra el de día con el café en vaso de plástico. Huele a vapor y a aceite de caballa. ${F.has('turno_frenado') ? 'Gladys te mira como ayer, cuando le frenaste lo de Lucho.' : 'Gladys te saluda con un gesto seco.'}</p><p>«Marcos Huamán. Seis años en la línea 2. Lo encontraron dormido a las 4:10, sentado en una caja, con la autoclave 3 en ciclo.» Mira su reloj: <mark class="clave">tienes tiempo para dos preguntas</mark> antes de que arranque la línea.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Gladys.',
    opts: [
      { id: 'quien', label: '¿Quién lo vio y qué quedó registrado?', info: '«Renzo, el supervisor de noche. Lo grabó con su celular y me mandó un correo. Quispe, el otro operario, estaba al lado.»' },
      { id: 'hora', label: '¿Desde qué hora estaba Marcos en la planta?', info: 'Gladys duda por primera vez. «Él es del turno tarde… aunque creo que ayer entró desde la mañana porque faltó gente, y se quedó de noche. Con la caballa nadie ha descansado.»' },
      { id: 'riesgo', label: '¿Pasó algo con el lote o con alguien?', info: '«Gracias a Dios no. Quispe controló la temperatura. Pero una autoclave sin vigilar puede reventar una tapa. Eso no es broma.»' },
      { id: 'antes', label: '¿Tiene faltas o sanciones antes?', info: '«No… Marcos es callado, cumplidor. Por eso me da más cólera. Si lo dejo pasar a él, mañana duerme media línea.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('hora') ? 4 : 2, confianza: 1, tiempo: -1 },
      flags: picks.includes('hora') ? ['pista_turnos'] : [],
      cartera: { caso: picks.includes('hora') ? 'Ojo: ¿cuántas horas llevaba en planta?' : 'Encontrado dormido 04:10, autoclave 3' },
      out: picks.includes('hora') ? 'Anotas en tu libreta, subrayado dos veces: «¿Se quedó del turno de día?». Gladys ya se fue a gritar «¡línea 2, arrancamos!».' : 'Anotas lo que te dijo. Suena la sirena del cambio de turno y Gladys se va sin despedirse.',
      kusi: ['curioso', picks.includes('hora') ? 'Esa duda de Gladys vale oro…' : 'Cada respuesta abre otra pregunta.'],
    }),
    mirada: {
      ve: 'La primera versión de una falta casi siempre viene de quien está molesto. Las preguntas que más revelan no son «¿qué hizo?», sino «¿en qué condiciones lo hizo?».',
      visual: { tipo: 'mensaje', titulo: 'Tu libreta, 07:10', txt: 'Marcos Huamán, 6 años, sin sanciones. Dormido 04:10, autoclave 3 en ciclo. Testigos: Renzo (grabó) y Quispe. ¿Cuántas horas llevaba en planta?' },
    },
  },
  {
    id: 'f2', t: '08:20', ch: 'presencial', who: 'gladys', titulo: '«Lo quiero fuera hoy»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de la jefa de planta', show: ['cumplimiento', 'etica', 'personas'],
    body: (n, F) => `<p>La oficina de Gladys tiene una ventana al piso de producción y un calendario de una ferretería de Nuevo Chimbote. Te enseña el video en su celular: Marcos con la cabeza contra la pared, el casco ladeado.</p><p>«Esto es falta grave. Seguridad, producción, todo. ${F.has('turno_frenado') ? 'Ayer me pediste paciencia con Lucho. Hoy no.' : 'Tú dijiste que RR.HH. me iba a apoyar.'} <mark class="clave">Quiero la carta de despido hoy</mark>, y que no regrese.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que antes de despedir hay que imputarle los hechos por escrito y darle al menos seis días naturales para defenderse; mientras, exonerarlo de asistir, con su sueldo, y abrir hoy la investigación.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 3, confianza: -2 }, rel: { gladys: -1 }, flags: ['investigacion_abierta', 'marcos_exonerado'], cartera: { caso: 'Investigación abierta; exonerado con goce', plan: 'Por armar hoy' },
          out: '«¿Y le voy a pagar por dormir?», dice Gladys. Le explicas que es para que no vuelva a la autoclave cansado ni contamine a los testigos. Gruñe, pero firma la exoneración.',
          pro: { ok: 'Sacas el riesgo de la línea sin sancionar antes de tiempo y sin saltarte el procedimiento.', risk: 'Gladys siente otra vez que RR.HH. «protege» al trabajador.', info: 'La exoneración debe constar por escrito y no puede impedirle preparar su defensa.' },
          kusi: ['animo', 'Firme con el proceso, sin humillar a nadie.'] } },
      { id: 'b', label: 'Preparar la carta de despido hoy: hay video, hay un testigo y el riesgo de seguridad es real. Gladys es la jefa de planta y si RR.HH. la vuelve a frenar, pierde autoridad frente a la línea.',
        res: { q: 'riesgosa', fx: { cumplimiento: -7, etica: -3 }, rel: { gladys: 1 }, flags: ['despido_express'], cartera: { caso: 'Carta de despido en borrador' },
          out: 'Gladys te da la mano por primera vez. A las 21:00, Valeria ve el borrador en la carpeta compartida y te escribe en mayúsculas: «NO SALE. ¿Y el preaviso?».',
          pro: { ok: 'Respaldas a la jefa de planta frente a un riesgo de seguridad.', risk: 'Un despido por conducta sin preaviso ni plazo de descargo no se sostiene, aunque la falta sea real. Y Marcos es afiliado, en plena negociación.' },
          kusi: ['preocupado', 'Con video y todo… pero sin procedimiento se cae.'] } },
      { id: 'c', label: 'Mandarlo a su casa tres días sin goce de haber «para que piense», mientras investigas con calma.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -2, personas: -2 }, rel: { gladys: 1 }, flags: ['investigacion_abierta', 'marcos_sin_pago'], cartera: { caso: 'Suspendido sin goce; investigación abierta' },
          out: 'Gladys queda conforme. Marcos firma la suspensión sin decir nada. A mediodía, Lucho ya sabe que «suspendieron a un afiliado sin escucharlo».',
          pro: { ok: 'Sacas a Marcos de la línea y te das tiempo.', risk: 'Una suspensión sin goce ya es una sanción: la impones antes de investigar, y si luego despides, estarías sancionando dos veces el mismo hecho.' },
          kusi: ['pensando', 'Eso suena a castigo antes del juicio…'] } },
    ],
    rules: [[LEY, 'TUO del D. Leg. 728, art. 31: no se despide por conducta sin dar antes, por escrito, un plazo no menor de seis días naturales para defenderse; durante el trámite se puede exonerar de asistir, pagando la remuneración.'], [POL, 'En Conservas del Pacífico, toda sanción la firma Relaciones Laborales, no la jefatura de planta.']],
    mirada: {
      ve: 'Una falta grave real puede terminar en un despido nulo o improcedente si se salta el procedimiento. El procedimiento no protege al flojo: protege a la empresa de equivocarse y al trabajador de ser juzgado sin defensa.',
      visual: { tipo: 'flujo', titulo: 'Del hecho a la decisión', pasos: ['Hecho: 04:10', 'Investigación', 'Carta de preaviso', 'Descargo (6+ días)', 'Decisión por escrito'], aqui: 1 },
      normas: [{ ley: 'TUO del D. Leg. 728 (D.S. 003-97-TR), arts. 31 y 32', dice: 'El empleador no puede despedir por causa relacionada con la conducta sin otorgar antes, por escrito, un plazo razonable no menor de seis días naturales para que el trabajador se defienda. El despido se comunica por escrito, indicando la causa y la fecha del cese.', practica: 'Hoy no se despide a nadie: hoy se ordenan los hechos.' }],
    },
  },
  {
    id: 'f3', t: '09:40', ch: 'llamada', who: null, titulo: 'Tres llamadas', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>En tu escritorio, el anexo suena y el celular vibra a la vez. Rosa, de envasado, te escribió por su constancia; la imprimirás a la hora del almuerzo, si la impresora coopera.</p><p>Antes, haces tres llamadas para <mark class="clave">saber qué pruebas existen y dónde están</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Renzo Távara · supervisor del turno noche', 'Contesta desde la combi, con ruido de la Panamericana', '«Sí, yo lo grabé. Lo subí al grupo de supervisores para que vean cómo está la disciplina. Ya debe estar en todos lados, ¿no? A veces es bueno que la gente vea.»'],
      ['Milagros Chero · asistencia y planillas', 'Contesta con el teclado sonando', '«El reloj dice que Marcos marcó entrada ayer lunes a las 07:02 y salida hoy a las 06:55. Pero el sistema se cuelga cuando hay tanta gente… Si quiere le saco el reporte. ¿Solo de él o de toda la línea?»'],
      ['Lucho Paredes · sindicato', 'Contesta al primer timbre', '«Ya sé todo, señorita. Marcos es afiliado. Si lo botan sin proceso, este caso llega a la mesa del jueves. Y mire bien las horas que han estado haciendo en la línea 2.»'],
    ],
    prompt: 'Ya sabes dónde están las pruebas. ¿Qué pides?',
    choices: [
      { id: 'a', label: 'Pedirle a Renzo el video original y un informe escrito, y que lo borre del grupo; pedirle a Milagros el reporte de marcaciones de toda la línea 2, de las dos últimas semanas.',
        res: { q: 'buena', fx: { calidad: 5, etica: 3, cumplimiento: 3 }, flags: ['video_resguardado', 'marcaciones_linea'], cartera: { prueba: 'Video original + informe + reloj de la línea 2' },
          out: 'Renzo se queda callado: «¿Borrarlo? Ya, ya». Milagros suspira: «Toda la línea son como cien personas. Se lo tengo en la tarde».',
          pro: { ok: 'Resguardas la prueba y proteges la imagen de Marcos. Y miras el contexto, no solo a la persona.', info: 'Lucho te dio una pista: si las horas de la línea 2 están mal, el problema es más grande que Marcos.' },
          kusi: ['celebra', '¡Prueba limpia y mirada amplia!'] } },
      { id: 'b', label: 'Pedir solo las marcaciones de Marcos: es su caso, no el de la línea. El video ya circuló; pedir que lo borren ahora no cambia nada.',
        res: { q: 'aceptable', fx: { calidad: 2, etica: -2 }, flags: ['marcaciones_vistas', 'video_circula'], cartera: { prueba: 'Marcaciones de Marcos; video sin resguardar' },
          out: 'Milagros te manda el reporte en diez minutos: Marcos llevaba casi 24 horas en planta. El video, mientras tanto, sigue pasando de celular en celular.',
          pro: { ok: 'Confirmas un dato clave del caso.', risk: 'El video circulando expone a Marcos y le da al sindicato un argumento: «lo humillaron antes de escucharlo».' },
          kusi: ['pensando', 'Un dato clave… y un video suelto.'] } },
      { id: 'c', label: 'No pedir nada más: hay video y testigo. Buscar más datos solo demora el caso y le da argumentos al sindicato.',
        res: { q: 'riesgosa', fx: { calidad: -4, cumplimiento: -3 }, flags: ['video_circula'], cartera: { prueba: 'Solo el video del celular' },
          out: 'Cuelgas rápido. A las 11, el video ya tiene un sticker y está en el grupo «Chimbote al día».',
          pro: { ok: 'Avanzas rápido.', risk: 'Sin contexto ni prueba resguardada, el caso queda débil justo donde el sindicato va a mirar: las horas trabajadas.' },
          kusi: ['preocupado', 'Rápido… y a ciegas.'] } },
    ],
    rules: [[LEY, 'Constitución, art. 2, inc. 7: toda persona tiene derecho al honor, a la intimidad y a su voz e imagen propias.'], [BP, 'Una prueba digital se guarda original, con quién la tomó y cuándo; no se reenvía «para que sirva de ejemplo».']],
    mirada: {
      ve: 'Investigar no es buscar pruebas contra alguien: es reconstruir qué pasó. Por eso se pide también lo que podría explicar la falta, como las horas que la persona llevaba trabajando.',
      visual: { tipo: 'balanza', a: { t: 'Lo que ya tienes', items: ['Un video de celular', 'Un correo de Renzo'] }, b: { t: 'Lo que falta saber', items: ['¿Cuántas horas llevaba?', '¿Quién le pidió quedarse?', '¿Es solo él o toda la línea?'] } },
    },
  },
  {
    id: 'f4', t: '11:30', ch: 'documento', who: null, titulo: 'El informe de Renzo', banner: 'assets/esc/lupa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Llega el informe escrito de Renzo. Lo lees con un plumón amarillo y el café ya frío. Valeria siempre dice que <mark class="clave">un informe sirve si describe hechos</mark>: quién, qué, cuándo y dónde.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería quedar así en el informe.',
    doc: { t: 'Informe de incidencia · Turno noche', sub: 'Supervisión de planta · Conservas del Pacífico S.A.C.' },
    lines: [
      { id: 'hecho', t: 'A las 04:10 encontré al operario Marcos Huamán sentado sobre una caja, junto a la autoclave 3, con los ojos cerrados y sin responder a mi llamado.' },
      { id: 'quispe', t: 'La autoclave 3 estaba en ciclo de esterilización. El control de temperatura lo realizó el operario Jesús Quispe.' },
      { id: 'flojo', t: 'Es conocido por todos que el trabajador es flojo.', bad: BP, why: 'Es una opinión. Un informe disciplinario describe hechos que se puedan probar.' },
      { id: 'sindicato', t: 'Además pertenece al sindicato y siempre está quejándose de los turnos.', bad: LEY, why: 'La afiliación sindical no es un hecho imputable. Mencionarla en un informe disciplinario puede leerse como discriminación antisindical (D.S. 010-2003-TR).' },
      { id: 'ingreso', t: 'Hora de ingreso del trabajador: 23:00 del lunes.', bad: BP, why: 'No coincide con el reloj: Milagros dice que Marcos marcó entrada el lunes a las 07:02. Un dato equivocado debilita todo el informe.' },
      { id: 'grupo', t: 'Se le grabó con el celular y se compartió en el grupo de supervisores para que sirva de ejemplo.', bad: BP, why: 'La grabación puede ser prueba, pero compartirla expone su imagen y contamina la investigación.' },
      { id: 'despido', t: 'Recomiendo el despido inmediato, sin más trámite.', bad: LEY, why: 'Sin preaviso escrito ni plazo de descargo no hay despido válido por conducta (art. 31 del TUO del D. Leg. 728).' },
      { id: 'firma', t: 'Firma: Renzo Távara, supervisor del turno noche. Testigo: Jesús Quispe.', duda: 'Está bien: identifica a quien informa y al testigo.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: missLey ? -2 : 3 },
        flags: missLey ? ['informe_sucio'] : ['informe_limpio'],
        cartera: { prueba: missLey ? 'Informe de Renzo tal cual' : 'Informe devuelto para corregir' },
        out: missLey ? 'Archivas el informe como llegó. Cuando Lucho lo lea en el expediente, va a subrayar la palabra «sindicato».' : `Le devuelves el informe a Renzo con ${hitsLey + hitsBp} observaciones. Te responde «¿tanto?», pero a las 14:00 manda una versión con solo hechos.`,
        pro: { ok: 'Un informe con hechos verificables es la base de la carta de mañana.', risk: 'Una sola mención a la afiliación sindical convierte un caso disciplinario en un caso de discriminación.', info: 'Pídele a Quispe su propia versión escrita: dos testigos que dicen lo mismo valen más que un video.' },
        kusi: missLey ? ['preocupado', 'Ese informe huele a prejuicio…'] : ['celebra', '¡Solo hechos! Así se arma un caso.'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT (D.S. 010-2003-TR): protege a los trabajadores frente a actos que los perjudiquen por su afiliación sindical.'], [BP, 'Un informe disciplinario dice quién, qué, cuándo y dónde. Las opiniones van aparte, o mejor, no van.']],
    mirada: {
      ve: 'El informe del supervisor es la primera pieza del expediente. Si mezcla hechos con prejuicios, todo lo que se construya encima se tambalea, aunque la falta sea real.',
      visual: { tipo: 'cambio', titulo: 'De la opinión al hecho', pares: [['«Es flojo»', '«04:10, ojos cerrados, no respondió»'], ['«Es del sindicato»', '(no va)'], ['«Ingresó 23:00 del lunes»', '«Marcó entrada el lunes 07:02»']] },
    },
  },
  {
    id: 'f5', t: '13:45', ch: 'documento', who: 'arturo', titulo: 'El plan de investigación', banner: 'assets/esc/mesa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'tiempo', 'etica'],
    body: () => `<p>El almuerzo fue un arroz con mariscos del comedor, comido en doce minutos. La constancia de Rosa salió a la tercera, con la impresora atascada; Rosa se fue corriendo a la Caja.</p><p>El Dr. Benavides se sienta en tu escritorio: «Mañana sale la carta. Hasta entonces, <mark class="clave">¿qué diligencias haces?</mark> Elige tres; no da para más».</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres diligencias de tu plan.', boton: 'Presentar el plan', resumen: 'Tu plan incluye',
    cols: ['Diligencia', 'Para qué sirve'],
    rows: [
      { id: 'quispe', cells: ['Tomar la versión escrita de Jesús Quispe, el testigo', 'Confirmar los hechos con otra persona'] },
      { id: 'rol', cells: ['Revisar el rol de turnos de la semana y quién pidió que Marcos se quedara', 'Saber si la falta tiene una causa en la organización'] },
      { id: 'legajo', cells: ['Revisar el legajo de Marcos: sanciones, capacitaciones de seguridad', 'Conocer sus antecedentes'] },
      { id: 'iperc', cells: ['Revisar qué dice el procedimiento de seguridad de la autoclave sobre relevos y fatiga', 'Saber qué regla se incumplió y si alguien podía cumplirla'] },
      { id: 'facebook', cells: ['Revisar el Facebook de Marcos para ver si estuvo de fiesta', 'Buscar otra explicación del sueño'] },
      { id: 'afiliado', cells: ['Preguntar en la línea quiénes son «los amigos sindicalistas» de Marcos', 'Saber quién lo va a defender'] },
    ],
    score: { quispe: 3, rol: 3, legajo: 2, iperc: 2, facebook: -3, afiliado: -4 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      const malas = picks.some(p => ['facebook', 'afiliado'].includes(p));
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: malas ? -5 : 2, tiempo: -1 }, rel: { arturo: q === 'buena' ? 1 : 0 },
        flags: picks.includes('rol') ? ['rol_pedido'] : [],
        cartera: { plan: q === 'buena' ? 'Plan: testigo, turnos y antecedentes' : 'Plan con vacíos' },
        out: malas ? 'El doctor tacha una línea con el lapicero: «Esto no. Si el sindicato se entera de que averiguamos quiénes son sus amigos, nos comemos una denuncia».' : picks.includes('rol') ? 'El doctor asiente despacio: «Si resulta que lo hicimos quedarse 24 horas, el problema no es solo de Marcos». Se queda pensando.' : 'El doctor firma el plan: «Ordenado. Que mañana no nos falte nada».',
        pro: { ok: 'Un buen plan confirma los hechos y busca su contexto, sin espiar la vida privada ni la actividad sindical.', risk: 'Revisar redes o «quién es amigo de quién» convierte la investigación en persecución.', info: 'Lo que encuentres en el rol de turnos puede ser más importante que el video.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Plan con cabeza!' : '¿Eso investiga el hecho o a la persona?'],
      };
    },
    rules: [[LEY, 'El art. 31 del TUO del D. Leg. 728 exige observar el principio de inmediatez: la investigación debe hacerse en un tiempo razonable.'], [BP, 'Investiga el hecho y sus causas, no la vida privada ni la afiliación de la persona.']],
    mirada: {
      ve: 'Investigar bien es rápido y acotado: quién vio, qué regla había, qué antecedentes tiene y en qué condiciones trabajaba. Todo lo demás es ruido o, peor, persecución.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Valor para el caso', cuadrantes: ['Hazlo hoy', 'Planifícalo', 'Si sobra tiempo', 'No lo hagas'], items: [['Testigo Quispe', .25, .85], ['Rol de turnos', .45, .9], ['Legajo', .2, .55], ['Procedimiento de autoclave', .5, .6], ['Facebook', .3, .05], ['Amigos sindicalistas', .35, .02]] },
    },
  },
  {
    id: 'f6', t: '16:10', ch: 'presencial', who: null, titulo: 'Marcos en la puerta', banner: 'assets/foto/entrevista.webp', lugar: 'Puerta de la oficina de Relaciones Laborales', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Alguien toca la puerta sin cita. Es Marcos Huamán: 34 años, de Caraz, con el uniforme todavía puesto y los ojos rojos. ${F.has('marcos_sin_pago') ? 'Trae en la mano la hoja de su suspensión.' : F.has('marcos_exonerado') ? 'Trae en la mano la carta de exoneración, doblada en cuatro.' : 'Nadie le ha dicho nada todavía.'}</p><p>«Señorita, yo no soy flojo. Mi mamá ya vio el video en el Facebook y me llamó llorando desde Caraz.» Se le quiebra la voz. «<mark class="clave">Déjeme explicarle ahorita</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escucharlo sin tomarle declaración, explicarle que recibirá una carta con los hechos y al menos seis días naturales para responder por escrito, que puede pedir ayuda al sindicato, y decirle que vaya a descansar.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 3 }, flags: ['marcos_escuchado'],
          out: 'Marcos se seca la cara con la manga. «¿Seis días?». Le confirmas. «Entonces lo voy a escribir bien.» Antes de irse dice: «Ayer me pidieron entrar temprano y quedarme de noche. No fue idea mía». No lo anotas como declaración: lo anotas como pista.',
          pro: { ok: 'Le das información clara y lo tratas con dignidad, sin adelantar ninguna decisión.', risk: 'Si Gladys se entera de que «lo atendiste», dirá que RR.HH. ya tomó partido.', info: 'Lo que contó Marcos no reemplaza su descargo: es una pista para tu plan.' },
          kusi: ['animo', 'Escuchar no es absolver. ¡Bien hecho!'] } },
      { id: 'b', label: 'Aprovechar que está aquí: tomarle la declaración en un acta y que firme que se quedó dormido. Así el caso queda claro y se ahorran semanas.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -3, personas: -3 }, flags: ['acta_forzada'],
          out: 'Marcos firma sin leer, cansado y con prisa por irse. Cuando Valeria vea el acta mañana, la apartará con dos dedos: «Esto no sirve. Y si Lucho lo ve, menos».',
          pro: { ok: 'Obtienes un reconocimiento por escrito.', risk: 'Un acta firmada por alguien agotado, angustiado y sin asesoría parece una confesión arrancada, y no reemplaza el descargo que la ley le garantiza.' },
          kusi: ['indignado', '¿Firmar llorando y sin leer? Eso no vale.'] } },
      { id: 'c', label: 'Decirle con amabilidad que no puedes hablar del caso hasta que reciba la carta y que, por favor, se vaya a su casa.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -2 },
          out: 'Marcos asiente y se va sin levantar la mirada. Desde la ventana lo ves esperar la combi en la avenida, con el casco en la mano.',
          pro: { ok: 'No contaminas el procedimiento.', risk: 'Neutral no es lo mismo que frío. Explicar cómo sigue el proceso no adelanta ninguna decisión.' },
          kusi: ['triste', 'Correcto… pero se fue más asustado que como llegó.'] } },
    ],
    rules: [[LEY, 'El descargo es un derecho del trabajador: se hace dentro del plazo que fija la carta de preaviso, no menor de seis días naturales (art. 31 del TUO del D. Leg. 728).'], [BP, 'Informar el procedimiento a la persona investigada no es tomar partido: es darle certeza.']],
    mirada: {
      ve: 'La persona investigada también es un trabajador con miedo, familia y reputación. Tratarla con dignidad y explicarle sus derechos no debilita el caso: lo hace más sólido.',
      visual: { tipo: 'balanza', a: { t: 'Acta firmada hoy', items: ['Rápida', 'Parece confesión', 'Sin asesoría'] }, b: { t: 'Descargo por escrito', items: ['Seis días o más para preparar', 'Puede pedir apoyo', 'Vale ante un juez'] } },
    },
  },
  {
    id: 'f7', t: '18:20', ch: 'whatsapp', who: null, titulo: 'Explicarle a Gladys', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo de salida, con el bus de la empresa esperando', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>El bus de la empresa sale a las 18:40 hacia Nuevo Chimbote. Antes de subir, le debes un mensaje a Gladys. ${F.has('despido_express') ? 'Ella cree que la carta de despido sale mañana.' : 'Ella sigue creyendo que «RR.HH. lo protege».'}</p><p><mark class="clave">Un mensaje que respete su problema y explique el tuyo</mark>.</p>`,
    type: 'compose', enviaA: 'gladys', para: 'Para: Gladys Ruiz · Jefa de planta', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'reconoce', t: 'Reconocer', ops: [
        { id: 'r1', t: 'Gladys, tienes razón en que lo de la autoclave es serio y no se puede repetir.', ok: true, por: 'Validas lo que a ella le importa: la seguridad y la disciplina.' },
        { id: 'r2', t: 'Gladys, entiendo que estés molesta, pero hay que calmarse.', ok: false, por: '«Calmarse» suena a que su preocupación no es legítima.' },
      ] },
      { id: 'proceso', t: 'El proceso', ops: [
        { id: 'p1', t: 'Mañana sale la carta de preaviso con los hechos; Marcos tendrá al menos seis días naturales para responder y después decidimos.', ok: true, por: 'Fechas concretas: Gladys sabe cuándo habrá respuesta.' },
        { id: 'p2', t: 'Vamos a ver cómo evoluciona el caso y te aviso.', ok: false, por: 'Sin fecha, suena a que no harás nada.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'k1', t: 'Necesito el rol de turnos de esta semana y saber quién le pidió que doblara turno ayer.', ok: true, por: 'Le pides un dato que solo ella tiene, sin acusarla.' },
        { id: 'k2', t: 'Y ojo, que si lo hicieron doblar turno, la culpa también es de planta.', ok: false, por: 'Adelantas una conclusión y la pones a la defensiva.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Mañana paso por la línea a las 7 para verlo contigo.', ok: true, por: 'Presencia: que no sienta que decides desde la oficina.' },
        { id: 'c2', t: 'Cualquier cosa, escríbele al Dr. Benavides.', ok: null, por: 'La derivas: puede sentirse como un portazo.' },
      ] },
    ],
    res: sel => {
      const malo = sel.proceso === 'p2' || sel.pide === 'k2';
      const buenas = ['r1', 'p1', 'k1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : -2, personas: q === 'buena' ? 3 : -1, cumplimiento: sel.proceso === 'p1' ? 3 : -2 },
        rel: { gladys: q === 'buena' ? 1 : malo ? -1 : 0 }, flags: q === 'buena' ? ['gladys_entiende'] : [],
        cartera: { caso: sel.proceso === 'p1' ? 'Carta de preaviso: mañana' : 'Sin fecha comunicada' },
        out: q === 'buena' ? 'Gladys responde cuando el bus ya pasa por el óvalo: «Ok. Te espero a las 7. El rol lo tiene Renzo, pero te lo consigo». No es un abrazo, pero es una tregua.' : malo ? 'Gladys deja el mensaje en visto. A las 20:00 le escribe al Dr. Benavides: «Tu analista ya decidió que la culpa es mía».' : 'Gladys responde con un pulgar. Mañana sabrás si era de acuerdo o de cansancio.',
        pro: { ok: 'Reconoces su problema, das fechas y pides el dato sin acusar.', risk: 'Con una jefa de planta enojada, una frase de más rompe la colaboración que necesitas para investigar.', info: 'El rol de turnos puede cambiar todo el caso.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Tregua conseguida!' : 'Ese mensaje no ayudó…'],
      };
    },
    rules: [[BP, 'Con las jefaturas, explica el procedimiento en fechas concretas y pide datos sin adelantar culpables.']],
    mirada: {
      ve: 'Relaciones Laborales necesita a las jefaturas tanto como al sindicato. Explicar por qué no se despide hoy, con fechas y sin sermones, convierte a una jefa enojada en una aliada de la investigación.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje que abre la puerta', txt: 'Gladys, tienes razón en que lo de la autoclave es serio. Mañana sale la carta de preaviso; Marcos tendrá al menos seis días naturales para responder y después decidimos. Necesito el rol de turnos de esta semana. Mañana paso por la línea a las 7.' },
    },
  },
];
