// Coordinador/a de Gestión Humana · Capítulo 2 · «Delegar» · Semana 1, martes.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733, art. 2 num. 5 (salud e ingresos económicos son datos sensibles) y art. 17 (confidencialidad de quienes
//   intervienen en el tratamiento). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 019-2006-TR (Reglamento de la Ley General de Inspección del Trabajo), art. 23.4: el incumplimiento de las
//   obligaciones sobre boletas de pago es infracción. https://www.gob.pe/institucion/sunafil/normas-legales/

export const CAP = {
  n: 2, titulo: 'Delegar', dia: 'Semana 1, martes', foto: 'assets/foto2/tablet-equipo.webp',
  lugar: 'Lácteos del Altiplano · Oficina de Gestión Humana, Juliaca',
  inicio: '07:40', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes. Llegas a las 7:40 y ya tienes 23 mensajes. Nely está en la puerta con una carpeta, dos supervisores esperan en el pasillo y Yesenia llama desde Ayaviri.', boton: 'Abrir el celular',
  kusi: 'Si todo pasa por ti, nada avanza. Hoy aprendes a soltar… sin soltar la responsabilidad.',
  lead: 'Repartiste el trabajo, armaste la matriz de responsabilidades, le encargaste a Nely una tarea completa, cuidaste el lugar de Yesenia y le dijiste a Mariela qué sí y qué no.',
  reflexion: '¿Qué tarea te costó más soltar hoy, y qué miedo había detrás?',
  siguiente: { n: 3, titulo: 'El estudio externo', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'equipo', p: 'Reparto de tareas del área', j: 'Tú · Nely · Yesenia', d: 1, e: 'Hoy' },
  { id: 'planilla', p: 'Planilla de noviembre', j: 'Estudio Huanca & Asociados', d: 1, e: 'Preliminar mañana' },
  { id: 'excel', p: 'Excel compartido sin diagnósticos', j: 'Nely', d: 1, e: 'Por corregir' },
  { id: 'ayaviri', p: 'Planta de Ayaviri', j: 'Ing. Freddy Choque · Yesenia', d: 1, e: 'Freddy pidió hablar' },
  { id: 'convocatoria', p: 'Convocatoria de 6 operarios para Ayaviri', j: 'Mariela', d: 1, e: 'Pedido nuevo' },
];

export const FUTURO = {
  delega_bien: ['Delegaste con resultado, fecha y puntos de control.', 'Nely sabe qué se espera de ella.'],
  todo_por_ti: ['Te quedaste con casi todo.', 'Mañana el estudio te encontrará sin tiempo.'],
  matriz_lista: ['El área tiene una matriz de responsabilidades.', 'Cada pendiente tiene dueña o dueño.'],
  nely_tareo: ['Nely es la dueña del tareo de Juliaca ante el estudio.', 'Mañana tendrá que responder ella primero.'],
  yesenia_duena: ['Yesenia sigue siendo la dueña de Ayaviri, ahora con un registro compartido.', 'Te ayudará cuando la planta se mueva.'],
  yesenia_relegada: ['Le dijiste a Yesenia que Nely revisará su trabajo.', 'Yesenia se siente supervisada por «la chiquita de Juliaca».'],
  limite_mariela: ['Le dijiste a Mariela qué entra esta semana y qué no.', 'Ella sabrá que cuando dices sí, es sí.'],
  si_a_todo: ['Aceptaste la convocatoria encima de todo.', 'Algo se va a caer esta semana.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Jefe de la planta de Ayaviri', who: 'jefe' },
  supervisores: { n: 'Supervisores Juliaca', sub: '9 participantes', c: '#1F5E8C' },
};

export const WSP = [
  { chat: 'supervisores', t: '07:12', de: 'Sup. Lidia Pari', txt: '¿Quién me firma el permiso de Rómulo? Necesita salir a las 10 al hospital.' },
  { chat: 'supervisores', t: '07:20', de: 'Sup. Teodoro Ccama', txt: 'Y la carta del turno noche? Ya van diez días.' },
  { chat: 'equipo', t: '07:31', de: 'Yesenia', txt: 'Ganadero de Umachiri pregunta si su hijo puede entrar de practicante. Le dije que lo veo con usted.' },
  { chat: 'nely', t: '07:38', de: 'Nely', txt: 'Hay tres personas en la puerta pidiendo constancia de trabajo. ¿Las hago yo o usted las firma?' },
  { chat: 'yesenia', t: '12:55', de: 'Yesenia', txt: 'Ya entendí, la dueña de Ayaviri sigo siendo yo 😌 Le voy a mandar el cuaderno escaneado de a poquito.', si: 'yesenia_duena' },
  { chat: 'yesenia', t: '12:55', de: 'Yesenia', txt: 'Ok. Que la señorita Nely me diga qué hago entonces.', si: 'yesenia_relegada' },
  { chat: 'freddy', t: '16:10', de: 'Freddy', txt: 'Mañana en la tarde sigue en pie, ¿no? Necesito hablar antes del jueves.' },
  { chat: 'nely', t: '18:40', de: 'Nely', txt: 'Ya saqué la columna de motivos. Mañana le muestro el tareo 💪', si: 'nely_tareo' },
];

export const CORREOS = [
  { t: '08:05', de: 'Estudio Huanca & Asociados', para: 'Gestión Humana LDA', asunto: 'Recordatorio: tareo de noviembre', html: '<p>Estimados: recordamos que necesitamos el tareo de ambas plantas para emitir la planilla preliminar. A la fecha solo hemos recibido Juliaca, parcial.</p><p>CPC Rubén Huanca</p>' },
  { t: '14:30', de: 'Mariela Quispe', para: 'Coordinación de Gestión Humana', asunto: 'Convocatoria Ayaviri', html: '<p>Freddy pidió seis operarios para la línea de quesos antes de diciembre. ¿Lo puedes llevar tú personalmente? Sé que es tu segundo día.</p><p>Mariela</p>' },
];

export const QUIZ = [
  { q: '¿Qué es delegar bien?', ops: ['Pasar la tarea y olvidarte', 'Acordar resultado, fecha, criterios y puntos de control, y dar autonomía para el cómo', 'Hacerlo tú porque sale más rápido', 'Pedir que te consulten cada paso'], ok: 1, por: 'Delegas el trabajo, no la responsabilidad: por eso acuerdas qué se espera y cuándo revisas.' },
  { q: 'Una constancia de trabajo la puede preparar…', ops: ['Solo la coordinación', 'La asistente, con la firma de quien tenga la facultad', 'Cualquier supervisor', 'El estudio contable'], ok: 1, por: 'Preparar y firmar pueden ser roles distintos. Lo importante es que esté claro quién hace qué.' },
  { q: 'El sueldo de cada trabajador, para la Ley 29733, es…', ops: ['Información pública de la empresa', 'Un dato sensible (ingresos económicos)', 'Un dato sin protección', 'Solo un número'], ok: 1, por: 'La Ley 29733, art. 2 num. 5, incluye los ingresos económicos entre los datos sensibles.' },
  { q: 'Tu jefa te pide algo más en una semana ya llena. ¿Qué haces?', ops: ['Dices que sí a todo', 'Dices que no sin explicar', 'Le muestras tus prioridades y le pides decidir qué se mueve', 'Lo haces de noche'], ok: 2, por: 'Negociar prioridades con datos protege los resultados y tu credibilidad.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '07:45', ch: 'whatsapp', who: null, titulo: 'Veintitrés mensajes', banner: 'assets/foto2/callcenter.webp', show: ['tiempo', 'personas', 'calidad'],
    body: () => `<p>Te sientas con el celular en una mano y el café en la otra. Permisos, constancias, un practicante recomendado, la carta del turno noche, el estudio pidiendo tareo.</p><p>Te prometes algo: <mark class="clave">hoy solo haces tú lo que solo tú puedes hacer</mark>. Lo demás tiene otra dueña.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que haces tú personalmente. El resto lo delegas.', boton: 'Quedarme con estas', resumen: 'Te quedaste con',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'carta', cells: ['Fijar fecha para escuchar al turno noche', 'Es un conflicto entre equipos; necesita a alguien con autoridad'] },
      { id: 'reparto', cells: ['Definir quién hace qué en el área', 'Nadie lo ha hecho nunca'] },
      { id: 'freddy', cells: ['Preparar la conversación con Freddy', 'Es sobre su sueldo: confidencial'] },
      { id: 'const', cells: ['Hacer las tres constancias de trabajo', 'Nely las ha hecho cien veces'] },
      { id: 'tareo', cells: ['Juntar el tareo de Juliaca para el estudio', 'Nely conoce el sistema de marcación'] },
      { id: 'permiso', cells: ['Firmar el permiso de Rómulo para el hospital', 'Lidia, su supervisora, puede autorizarlo'] },
    ],
    score: { carta: 3, reparto: 3, freddy: 3, const: -1, tareo: -1, permiso: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : -2, calidad: q === 'buena' ? 2 : 0, personas: picks.includes('carta') ? 2 : 0 },
        flags: q === 'buena' ? ['delega_bien'] : ['todo_por_ti'],
        out: q === 'buena' ? 'Respondes en el grupo: «Lidia, el permiso de Rómulo lo autorizas tú. Nely, constancias y tareo son tuyos; a las 9 lo vemos». A las 8:10 el celular se calma.' : 'Te quedas con constancias, permisos y tareo. A las 11 todavía no has empezado lo que solo tú podías hacer.',
        pro: { ok: 'Te quedas con lo que necesita tu autoridad o tu criterio.', risk: 'Hacer lo operativo porque «sale más rápido» deja sin hacer lo que nadie más puede hacer.', info: 'Si una tarea la puede hacer otra persona al 80 %, delégala y acompáñala.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Soltaste lo que no era tuyo!' : 'Tu agenda se llenó de cosas ajenas…'],
      };
    },
    rules: [[BP, 'Haz tú lo que necesita tu autoridad o tu criterio; delega lo que otra persona puede hacer bien.']],
    mirada: {
      ve: 'El error más común de una coordinación nueva es seguir haciendo el trabajo de asistente porque lo hace bien y rápido. El costo no se ve hoy: se ve cuando la carta del turno noche cumple dos semanas sin respuesta.',
      visual: { tipo: 'matriz', x: '¿Otra persona puede hacerlo?', y: '¿Necesita tu autoridad?', cuadrantes: ['Tuyo', 'Tuyo, con apoyo', 'Delega', 'Delega y no mires'], items: [['Turno noche', .2, .9], ['Reparto del área', .1, .85], ['Freddy', .15, .8], ['Constancias', .85, .25], ['Tareo', .75, .35], ['Permiso de Rómulo', .9, .1]] },
    },
  },
  {
    id: 'b2', t: '09:00', ch: 'documento', who: null, titulo: 'La matriz de responsabilidades', banner: 'assets/esc/mesa.webp', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>En una hoja A3 dibujas una tabla: tareas en las filas, personas en las columnas. Nely mira de reojo desde su escritorio.</p><p>La idea es simple: <mark class="clave">cada tarea, una sola dueña o dueño</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada bloque de la matriz.', boton: 'Guardar la matriz',
    bloques: [
      { id: 'nely', t: 'Nely (Juliaca)', n: 2, ops: [
        { id: 'n1', t: 'Tareo de Juliaca: consolidar y enviar al estudio.', ok: true },
        { id: 'n2', t: 'Constancias y certificados: preparar para firma.', ok: true },
        { id: 'n3', t: 'Revisar el tareo de Ayaviri que hace Yesenia.', ok: false, por: 'Pone a la asistente nueva a «supervisar» a la de 22 años. Cada una es dueña de su planta.' },
      ] },
      { id: 'yes', t: 'Yesenia (Ayaviri)', n: 2, ops: [
        { id: 'y1', t: 'Tareo de Ayaviri: consolidar y enviar al estudio.', ok: true },
        { id: 'y2', t: 'Registro de Ayaviri en el archivo compartido, a partir de su cuaderno.', ok: true },
        { id: 'y3', t: 'Ninguna tarea nueva: que siga como está.', ok: false, por: 'Ayaviri seguiría invisible para el área.' },
      ] },
      { id: 'tu', t: 'Tú', n: 2, ops: [
        { id: 't1', t: 'Revisar la planilla preliminar antes de que la apruebe Mariela.', ok: true },
        { id: 't2', t: 'Relaciones laborales: turnos, jefaturas y conflictos.', ok: true },
        { id: 't3', t: 'Digitar las marcaciones de Juliaca.', ok: false, por: 'Es operativo y ya tiene dueña.' },
      ] },
      { id: 'est', t: 'Estudio Huanca', n: 1, ops: [
        { id: 'e1', t: 'Calcular planilla, boletas y declaraciones con lo que le enviamos.', ok: true },
        { id: 'e2', t: 'Decidir los descuentos y bonos de cada trabajador.', ok: false, por: 'El estudio calcula; las decisiones sobre la remuneración son de la empresa.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['matriz_lista'] : [], cartera: { equipo: q === 'buena' ? 'Matriz de responsabilidades lista' : 'Matriz con cruces' },
        out: q === 'buena' ? 'La matriz cabe en una hoja. La pegas al lado de la puerta. Nely la lee dos veces y dice bajito: «Entonces el tareo es mío».' : 'La matriz se ve completa, pero deja tareas con dos dueñas y otras sin ninguna.',
        pro: { ok: 'Una sola dueña por tarea evita que las cosas caigan en el medio.', risk: 'Poner a una asistente a revisar a la otra sin acuerdo previo enciende un conflicto que no existía.', info: 'Muestra la matriz a cada una por separado antes de pegarla.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cada cosa con su dueña!' : 'Hay tareas con dos dueñas…'],
      };
    },
    rules: [[BP, 'Cada tarea tiene una sola persona responsable del resultado.'], [BP, 'El estudio externo calcula; la empresa decide.']],
    mirada: {
      ve: 'Una matriz de responsabilidades parece burocracia, pero resuelve lo que más desgasta a un equipo pequeño: el «yo pensé que lo hacías tú». Además protege a las personas, porque deja claro qué se le puede exigir a cada una.',
      visual: { tipo: 'flujo', titulo: 'Quién hace qué en la planilla', pasos: ['Nely: tareo Juliaca', 'Yesenia: tareo Ayaviri', 'Estudio: cálculo', 'Tú: revisión', 'Mariela: aprobación'], aqui: 3 },
    },
  },
  {
    id: 'b3', t: '10:15', ch: 'whatsapp', who: 'asistente', titulo: 'Un encargo para Nely', banner: 'assets/foto/mentora.webp', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Nely se acerca con su libreta. Quieres encargarle algo completo: sacar los motivos de salud del Excel compartido y dejar ordenado el tareo de Juliaca. ${F.has('salud_detectada') ? 'Ayer viste la columna de diagnósticos y no quieres que pase otra semana.' : 'Ayer no le prestaste mucha atención al Excel, pero Mariela insistió.'}</p><p>Le escribes para que quede por escrito. <mark class="clave">Un buen encargo dice qué, para qué, para cuándo y cómo se revisa</mark>.</p>`,
    type: 'compose', enviaA: 'nely', para: 'Para: Nely Mamani · Asistente de RR.HH.', boton: 'Enviar el encargo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué y para qué', ops: [
        { id: 'q1', t: 'Nely, te encargo dejar el Excel compartido sin motivos médicos: los supervisores solo necesitan saber si la falta está justificada.', ok: true, por: 'Le das el porqué: así podrá decidir casos que no previste.' },
        { id: 'q2', t: 'Nely, borra la columna de motivos del Excel.', ok: null, por: 'Claro, pero sin el porqué la volverá a crear cuando un supervisor la pida.' },
      ] },
      { id: 'cuando', t: 'Para cuándo y cómo se revisa', ops: [
        { id: 'c1', t: 'Para hoy a las 6. A las 4 vemos juntas/os cómo vas, diez minutos.', ok: true, por: 'Fecha y un punto de control antes de la entrega.' },
        { id: 'c2', t: 'Cuando puedas, sin apuro.', ok: false, por: 'Nueve supervisores siguen viendo diagnósticos mientras tanto.' },
      ] },
      { id: 'autonomia', t: 'Autonomía', ops: [
        { id: 'a1', t: 'Cómo avisas a los supervisores lo decides tú. Si te trabas, me buscas.', ok: true, por: 'Le delegas el cómo y le das permiso de pedir ayuda.' },
        { id: 'a2', t: 'Antes de cada paso, consúltame.', ok: false, por: 'Eso no es delegar: es dictar en cámara lenta.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'c1', 'a1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 1, cumplimiento: sel.cuando === 'c1' ? 3 : -2 }, rel: { asistente: q === 'buena' ? 1 : 0 },
        flags: q !== 'riesgosa' ? ['nely_tareo'] : [], cartera: { excel: sel.cuando === 'c1' ? 'Nely: sin diagnósticos hoy a las 6' : 'Sin fecha' },
        out: q === 'buena' ? 'Nely responde con un «¡sí!» y tres signos de admiración. A las 4 te muestra un borrador del mensaje para los supervisores: está mejor de lo que tú lo habrías escrito.' : q === 'aceptable' ? 'Nely lo hace, pero te escribe cuatro veces para confirmar detalles.' : 'Nely no sabe para cuándo es ni si puede decidir algo. Lo deja para «cuando pueda».',
        pro: { ok: 'Qué, para qué, para cuándo y cómo se revisa: lo mínimo de un buen encargo.', risk: 'Delegar sin fecha ni porqué es dejar la tarea a la suerte.', info: 'El porqué es lo que le permitirá a Nely decidir sola la próxima vez.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Encargo completo!' : 'Algo le faltó a ese encargo.'],
      };
    },
    rules: [[LEY, 'La información de salud es dato sensible (Ley 29733, art. 2 num. 5).'], [BP, 'Delegar es acordar resultado, fecha y control, y soltar el cómo.']],
    mirada: {
      ve: 'Nely es tímida y tiene miedo de equivocarse. Un encargo claro le da algo más valioso que instrucciones: le da permiso para decidir. Y el punto de control a las 4 no es desconfianza: es la red para que se atreva.',
      visual: { tipo: 'flujo', titulo: 'Un buen encargo', pasos: ['Qué', 'Para qué', 'Para cuándo', 'Cómo se revisa', 'Qué decides tú'] },
    },
  },
  {
    id: 'b4', t: '11:40', ch: 'llamada', who: null, titulo: '«¿Ahora me van a revisar?»', banner: 'assets/esc/dudas.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Llamas a Yesenia para contarle la matriz. ${F.has('yesenia_respeto') ? 'Desde ayer te manda fotos del cuaderno, pero hoy suena distinta.' : 'Desde ayer contesta con monosílabos.'}</p><p>«Me dicen que ahora la señorita Nely va a ver todo. <mark class="clave">¿Ahora la chiquita de Juliaca me va a revisar a mí?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que Ayaviri sigue siendo suya; lo único nuevo es que su registro estará en el archivo compartido, y que tú revisas a las dos por igual.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, flags: ['yesenia_duena'], cartera: { ayaviri: 'Yesenia: dueña de Ayaviri y de su registro' },
          out: 'Yesenia se ríe por primera vez: «Ya. Entonces que la chiquita me enseñe el Excel y yo le enseño a los ganaderos». Es una tregua.',
          pro: { ok: 'Cuidas su lugar y su experiencia, sin renunciar al registro común.', info: 'El rumor salió de un supervisor que vio la matriz a medio hacer.' },
          kusi: ['feliz', 'Cuidaste su lugar. ¡Bacán!'] } },
      { id: 'b', label: 'Decirle que sí: Nely maneja mejor el Excel y por eso revisará los datos de Ayaviri.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3, calidad: 1 }, flags: ['yesenia_relegada'],
          out: 'Yesenia dice «ok» y cuelga. Nely, que no pidió revisar a nadie, queda en medio de un conflicto que no buscó.',
          pro: { ok: 'Los datos de Ayaviri tendrán una segunda mirada.', risk: 'Pones a la asistente más joven por encima de la más antigua sin preguntar a ninguna. Las dos pierden.' },
          kusi: ['triste', 'Dos personas incómodas por una decisión que nadie pidió.'] } },
      { id: 'c', label: 'Decirle que no crea en rumores y que se enfoque en su tareo.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 1 },
          out: 'Yesenia se calla. El rumor sigue corriendo en Ayaviri, porque nadie lo desmintió con hechos.',
          pro: { ok: 'Evitas una discusión larga.', risk: 'Un rumor que no se responde con hechos se vuelve verdad.' },
          kusi: ['pensando', '¿Y qué le respondiste de verdad?'] } },
    ],
    rules: [[BP, 'Los cambios de rol se explican a cada persona antes de que circulen como rumor.']],
    mirada: {
      ve: 'En equipos pequeños, cada cambio se lee como un mensaje sobre el valor de las personas. Yesenia no discute el Excel: discute si sus 22 años todavía cuentan. La coordinación que entiende eso evita una guerra fría entre sus dos asistentes.',
      visual: { tipo: 'balanza', a: { t: 'Lo que teme Yesenia', items: ['Que la revise alguien de 24 años', 'Que su cuaderno no valga', 'Que Ayaviri importe menos'] }, b: { t: 'Lo que propones', items: ['Ayaviri sigue siendo suya', 'Un archivo común para las dos', 'Revisas a las dos por igual'] } },
    },
  },
  {
    id: 'b5', t: '14:45', ch: 'presencial', who: 'mariela', titulo: 'Un pedido más', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de Mariela', show: ['tiempo', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Mariela te llama a su oficina. Leíste su correo: quiere que lleves tú la convocatoria de seis operarios para Ayaviri. ${F.has('todo_por_ti') ? 'Tu agenda de hoy ya está desbordada.' : 'Tu semana tiene tres frentes y apenas es martes.'}</p><p>«Sé que es mucho. <mark class="clave">¿Puedes?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrarle tus tres frentes y proponer que la convocatoria la lleve Yesenia con tu revisión, empezando el lunes.',
        res: { q: 'buena', fx: { confianza: 4, tiempo: 3 }, rel: { mariela: 1 }, flags: ['limite_mariela'], cartera: { convocatoria: 'Yesenia la lleva desde el lunes, con tu revisión' },
          out: 'Mariela mira tu lista y asiente. «Me gusta que me digas qué se mueve. Pero que el lunes empiece de verdad.»',
          pro: { ok: 'No dices solo «no»: muestras prioridades y ofreces una alternativa.', info: 'Yesenia conoce a cada familia de Melgar: nadie recluta mejor allá.' },
          kusi: ['celebra', 'Un sí con condiciones vale más que un sí a todo.'] } },
      { id: 'b', label: 'Decirle que sí: es tu jefa y es tu segundo día.',
        res: { q: 'riesgosa', fx: { tiempo: -4, confianza: 1 }, flags: ['si_a_todo'], cartera: { convocatoria: 'Tú, encima de todo' },
          out: 'Mariela sonríe aliviada. Tú abres el portal de empleos a las 7 de la noche, con el diagnóstico, la planilla y Freddy esperando.',
          pro: { ok: 'Quedas bien hoy.', risk: 'Decir que sí a todo es la forma más rápida de fallar en algo importante.' },
          kusi: ['preocupado', '¿Qué se va a caer primero?'] } },
      { id: 'c', label: 'Decirle que no puedes: ya tienes demasiado.',
        res: { q: 'aceptable', fx: { tiempo: 2, confianza: -2 }, rel: { mariela: -1 },
          out: 'Mariela se queda callada. «Entonces la veo yo», dice. Vuelve a cargar con lo que te contrataron para quitarle.',
          pro: { ok: 'Proteges tu semana.', risk: 'Un «no» sin alternativa le devuelve el problema a tu jefa.' },
          kusi: ['pensando', 'Un «no» solo… ¿y entonces quién?'] } },
    ],
    rules: [[BP, 'Ante un pedido nuevo, muestra tus prioridades y negocia qué se mueve.']],
    mirada: {
      ve: 'Decir que sí a todo parece compromiso; en realidad es trasladar el riesgo al futuro. Negociar con la jefatura no es desobedecer: es darle la información para que decida qué es más importante.',
      visual: { tipo: 'cambio', titulo: 'Del sí a todo al sí con condiciones', pares: [['«Sí, yo lo veo»', '«Esto entra si esto se mueve»'], ['Todo por ti', 'Yesenia lidera, tú revisas'], ['Esta semana', 'Desde el lunes']] },
    },
  },
  {
    id: 'b6', t: '16:30', ch: 'documento', who: null, titulo: 'Cómo delegar sin perder el control', banner: 'assets/esc/escalera.webp', show: ['calidad', 'personas'],
    body: () => `<p>Para no volver a improvisar, te armas una guía corta para cada encargo del área. Nely la va a usar cuando le toque delegar a los practicantes.</p><p>Lo importante es <mark class="clave">el orden</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para delegar. Usa las flechas.', boton: 'Guardar la guía',
    items: [
      { id: 'elige', t: 'Elegir a la persona según lo que sabe y lo que quiere aprender', por: 'No a quien está libre, sino a quien puede o quiere crecer.' },
      { id: 'expl', t: 'Explicar el resultado esperado y para qué sirve', por: 'El porqué permite decidir sin preguntar todo.' },
      { id: 'fecha', t: 'Acordar fecha de entrega y un punto de control intermedio', por: 'La red de seguridad.' },
      { id: 'suelta', t: 'Dejar que decida el cómo y estar disponible', por: 'Delegar no es dictar.' },
      { id: 'rev', t: 'Revisar el resultado contra lo acordado', por: 'No contra cómo lo habrías hecho tú.' },
      { id: 'recon', t: 'Reconocer lo logrado y conversar qué mejorar', por: 'Para que la próxima vez sea mejor.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, personas: q === 'buena' ? 2 : 0 },
        cartera: { equipo: q === 'riesgosa' ? 'Guía de delegación desordenada' : 'Guía de delegación lista' },
        out: q === 'buena' ? 'La guía queda en seis líneas. Nely la copia a mano en su libreta, con letra chiquita.' : 'La guía tiene los pasos, pero en un orden que te hará revisar antes de explicar.',
        pro: { ok: 'Explicar antes, revisar contra lo acordado, reconocer después.', risk: 'Revisar «como yo lo haría» desanima a quien hizo bien el trabajo a su manera.', info: 'El punto de control intermedio es lo que más errores evita.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Seis pasos que sirven para siempre!' : 'Casi: el orden importa.'],
      };
    },
    rules: [[BP, 'Revisa el resultado contra lo acordado, no contra tu manera de hacerlo.']],
    mirada: {
      ve: 'Delegar bien es una habilidad que se aprende, y se nota en el equipo: las asistentes crecen, la coordinación respira y los errores se detectan en el punto de control, no el día del pago.',
      visual: { tipo: 'flujo', titulo: 'Delegar en seis pasos', pasos: ['Elegir', 'Explicar', 'Fecha y control', 'Soltar el cómo', 'Revisar', 'Reconocer'] },
    },
  },
  {
    id: 'b7', t: '18:20', ch: 'presencial', who: 'asistente', titulo: '«¿Lo hago así?»', banner: 'assets/foto/oficina-abierta.webp', show: ['personas', 'calidad'],
    body: () => `<p>Ya casi todos se fueron. Nely te muestra el mensaje para los supervisores: «Desde hoy, el Excel solo dirá si la falta está justificada o no. El detalle lo guarda Gestión Humana».</p><p>Hay una coma de más y tú lo habrías escrito distinto. <mark class="clave">Pero dice lo que tiene que decir.</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que está bien, que lo mande ella, y comentarle solo la coma.',
        res: { q: 'buena', fx: { personas: 4, calidad: 1 }, rel: { asistente: 1 },
          out: 'Nely lo manda. Lidia responde en el grupo: «Gracias, Nely, mucho más claro». Nely se va con una sonrisa que no le habías visto.',
          pro: { ok: 'Revisas contra lo acordado y dejas que el mérito sea suyo.', info: 'Que el mensaje salga con su nombre le da autoridad frente a los supervisores.' },
          kusi: ['feliz', 'El mérito es de ella. ¡Qué divino!'] } },
      { id: 'b', label: 'Reescribirlo con tus palabras y mandarlo tú: es un tema sensible.',
        res: { q: 'aceptable', fx: { calidad: 2, personas: -3 }, rel: { asistente: -1 },
          out: 'Tu mensaje queda impecable. Nely recoge su mochila en silencio. Mañana te traerá todo para que lo corrijas antes.',
          pro: { ok: 'El mensaje queda perfecto.', risk: 'Si rehaces lo que estaba bien, Nely aprende que su trabajo siempre será corregido.' },
          kusi: ['pensando', 'Perfecto… y Nely, ¿qué aprendió?'] } },
    ],
    mirada: { ve: 'El momento de revisar lo delegado es una prueba para la coordinación, no para la asistente. Si el resultado cumple lo acordado, lo correcto es soltarlo, aunque tú lo hubieras hecho distinto.' },
  },
];
