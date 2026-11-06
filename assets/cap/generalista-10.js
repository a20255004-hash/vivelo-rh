// Generalista de RR.HH. · Capítulo 10 · «Dos semanas después» · Semana 2, viernes.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Final abierto: balance de las dos semanas, «¿te ves en este puesto?» y gancho para la Semana 3.
// Normas: no se citan normas nuevas. Se retoman las de los capítulos anteriores (D.S. 003-97-TR, D.Leg. 713,
// D.S. 007-2002-TR, Ley 29783, Ley 26790 y Ley 31152), sin cifras nuevas.

export const CAP = {
  n: 10, titulo: 'Dos semanas después', dia: 'Semana 2, viernes', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Cusco, viernes. Hace dos semanas Verónica te recibió con un mate de coca y una lista escrita a mano: «cocina 4, housekeeping 7, recepción 3, mozos 4». Hoy esa lista está pegada en tu pared, con casi todas las líneas tachadas. La temporada arranca el lunes.', boton: 'Mirar atrás',
  kusi: 'Dos semanas siendo todo RR.HH. a la vez. ¡Mira todo lo que cambió!',
  lead: 'Elegiste qué pendientes pasan a la Semana 3, le pediste retroalimentación a Verónica, revisaste tu balance sin inflarlo, compartiste un almuerzo con el equipo, dejaste ordenado el puesto y te preguntaste si te ves aquí. Y el lunes llega una inspección.',
  reflexion: '¿Te ves en este puesto? ¿Qué parte de ser generalista te gustó más y cuál te costó?',
  siguiente: { n: 11, titulo: 'La orden de inspección', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'balance', p: 'Balance de las dos semanas', j: 'Verónica · Gerencia', d: 0, e: 'Hoy' },
  { id: 'pendientes', p: 'Pendientes para la Semana 3', j: 'RR.HH.', d: 0, e: 'Lunes' },
  { id: 'inspeccion', p: 'Notificación de la SUNAFIL', j: 'Verónica · Gerencia', d: 0, e: 'Lunes, 9:00' },
];

export const FUTURO = {
  pendientes_claros: ['Elegiste los pendientes que más riesgo tienen para la Semana 3.', 'El lunes empiezas por ahí.'],
  feedback_pedido: ['Le pediste a Verónica retroalimentación sobre tu trabajo.', 'Sabes qué esperar de ella.'],
  balance_honesto: ['Tu balance dice lo que lograste y lo que falta, sin inflarlo.', 'Verónica lo usará con la inspección.'],
  balance_inflado: ['Tu balance prometió más de lo que se hizo.', 'La inspección del lunes lo pondrá a prueba.'],
  almuerzo_equipo: ['Compartiste el almuerzo del viernes con el equipo.', 'El equipo te siente parte.'],
  puesto_ordenado: ['Dejaste el puesto ordenado para el lunes.', 'Cualquiera podría seguir tu trabajo.'],
  te_ves: ['Dijiste que te ves en este puesto.', 'La Semana 3 te espera.'],
  te_ves_otro: ['Descubriste que te atrae una parte de RR.HH. más que el resto.', 'Lo tendrás en cuenta en la Semana 3.'],
  inspeccion_preparada: ['Respondiste a la notificación de la SUNAFIL con un plan para el lunes.', 'Capítulo 11: la orden de inspección.'],
  inspeccion_panico: ['La notificación de la SUNAFIL te tomó por sorpresa.', 'El lunes llegas sin plan.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción, housekeeping y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  yaneth: { n: 'Yaneth Huallpa', sub: 'Recepcionista nocturna', c: '#6B5BA8' },
  luz: { n: 'Luz Clarita Apaza', sub: 'Ayudante de cocina de la temporada', c: '#B45309' },
};

export const WSP = [
  { chat: 'grupo', t: '07:10', de: 'Chef Rolando', txt: 'Hoy almuerzo de jefaturas: pachamanca en el patio. La generalista invitada. Sin discursos 😤' },
  { chat: 'wendy', t: '08:20', de: 'Wendy', txt: 'Hoy cumplí una semana sin contestar WhatsApp después de mi turno. ¡Récord! 😄', si: 'wendy_descansa' },
  { chat: 'wendy', t: '08:20', de: 'Wendy', txt: 'Estoy un poco cansada, pero bien. ¿Cuándo hablamos de lo de supervisora?', no: 'wendy_descansa' },
  { chat: 'yaneth', t: '09:30', de: 'Yaneth', txt: 'Ya llegó mi boleta con la noche bien pagada. Primera vez en dos años 🙏', si: 'errores_detectados' },
  { chat: 'luz', t: '12:00', de: 'Luz Clarita', txt: 'Le dejé en su escritorio el certificado de la posta y un suspiro limeño 🍮', si: 'luz_protegida' },
  { chat: 'contador', t: '16:00', de: 'Iván', txt: 'Le confirmo el calendario de cierre para el próximo mes: día 20 novedades, día 24 pre-planilla.', si: 'calendario_cierre' },
];

export const CORREOS = [
  { t: '07:30', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Balance', html: '<p>Hoy cumples dos semanas. Mándame un balance corto antes de las 12: qué se hizo, qué falta y qué necesitas para la temporada. A las 9 conversamos.</p><p>V.</p>' },
  { t: '17:45', de: 'SUNAFIL · Casilla electrónica', para: 'Hotel Inti Wasi S.A.C.', asunto: 'Notificación de orden de inspección', html: '<p>Se comunica que el lunes, a las 9:00, se realizará una visita de inspección en el centro de trabajo. Las materias a verificar y la documentación a exhibir se detallan en la orden adjunta.</p>' },
];

export const QUIZ = [
  { q: '¿Qué hace distinta a una generalista de RR.HH.?', ops: ['Solo hace planillas', 'Atiende a la vez selección, contratos, planilla, jornadas, bienestar y conflictos', 'Solo recluta', 'Solo hace capacitaciones'], ok: 1, por: 'Es todo el departamento a la vez: por eso prioriza y se apoya en proveedores.' },
  { q: 'Un buen balance de gestión…', ops: ['Solo muestra logros', 'Muestra lo logrado, lo pendiente y lo que se necesita, con datos', 'Es largo', 'Culpa a otros de lo que falta'], ok: 1, por: 'Un balance honesto es útil para decidir y genera confianza.' },
  { q: 'Al terminar una etapa, dejar el puesto ordenado significa…', ops: ['Limpiar el escritorio', 'Que otra persona pueda seguir tu trabajo con lo que dejaste escrito', 'Borrar los correos', 'Llevarte los archivos'], ok: 1, por: 'Un puesto que depende de la memoria de una persona es un riesgo para la empresa.' },
  { q: 'Te notifican una inspección para el lunes. ¿Qué haces primero?', ops: ['Esconder documentos', 'Leer la orden, ver las materias y preparar la documentación real', 'Pedir que la cancelen', 'Esperar al lunes'], ok: 1, por: 'La orden dice qué se va a revisar: prepárate con la evidencia real.' },
];

const BP = 'bp';

export const ESCENAS = [
  {
    id: 'z1', t: '07:20', ch: 'documento', who: null, titulo: 'La lista en la pared', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'tiempo'],
    body: (n, F) => {
      const ok = [], falta = [];
      (F.has('canales_locales') ? ok : falta).push('las vacantes con canales locales');
      (F.has('honorarios_planilla') ? ok : falta).push('los tres trabajadores de los recibos por honorarios');
      (F.has('cuadro_legal') ? ok : falta).push('un cuadro de turnos legal');
      (F.has('planilla_corregida') ? ok : falta).push('los pagos del turno de noche');
      (F.has('plan_correctivo') ? ok : falta).push('el plan de la certificación');
      return `<p>Tu café de máquina humea junto a la lista de Verónica. Resuelto: ${ok.length ? ok.join(', ') : 'menos de lo que quisieras'}. Abierto: ${falta.length ? falta.join(', ') : 'casi nada de lo grande'}.</p><p>El lunes empieza la temporada. <mark class="clave">Eliges los tres pendientes que pasan primero a la Semana 3</mark>.</p>`;
    },
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que atacarás primero la próxima semana.', boton: 'Pasar estos tres', resumen: 'Pasaste',
    cols: ['Pendiente', 'Por qué importa'],
    rows: [
      { id: 'formal', cells: ['Cerrar cualquier caso de trabajo sin planilla o sin alta', 'Es el mayor riesgo para las personas y el hotel'] },
      { id: 'plan', cells: ['Cumplir el plan de acción de la certificación', 'Tiene plazo de 30 días'] },
      { id: 'horas', cells: ['Revisar cada viernes horas extra y días libres trabajados', 'Para que la temporada no queme al equipo'] },
      { id: 'logo', cells: ['Rediseñar el logo de RR.HH. para las circulares', 'Se vería más profesional'] },
      { id: 'reglamento', cells: ['Actualizar el reglamento interno de 2015', 'Importante, pero puede ir por partes'] },
      { id: 'fiesta', cells: ['Organizar la fiesta de fin de temporada', 'Falta mucho'] },
    ],
    score: { formal: 3, plan: 3, horas: 3, reglamento: 1, logo: 0, fiesta: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2 },
        flags: q === 'buena' ? ['pendientes_claros'] : [], cartera: { pendientes: q === 'buena' ? 'Formalidad, plan de la certificación y horas' : 'Pendientes mezclados' },
        out: q === 'buena' ? 'Escribes los tres en un post-it nuevo y lo pegas encima de la lista vieja.' : 'Tienes una lista para el lunes, aunque algo urgente quedó abajo.',
        pro: { ok: 'Lo primero es lo que pone en riesgo a las personas y lo que tiene plazo.', info: 'Revisa la lista cada lunes: en temporada, las prioridades cambian rápido.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lo primero, primero!' : '¿Eso es lo más urgente?'],
      };
    },
    mirada: { ve: 'Una generalista nunca termina: pasa de un frente a otro. Saber qué queda abierto y en qué orden es tan importante como lo que se cerró.' },
  },
  {
    id: 'z2', t: '09:00', ch: 'presencial', who: 'veronica', titulo: 'La conversación con Verónica', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del hotel, con vista a la plaza', show: ['confianza', 'personas'],
    body: () => `<p>Verónica te invita otra vez un mate de coca en el comedor, en la misma mesa del primer día. Esta vez no mira el reloj.</p><p>«Dos semanas. ¿Qué quieres preguntarme?» <mark class="clave">Elige dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Verónica.',
    opts: [
      { id: 'bien', label: '¿Qué hice bien?', info: '«Me dijiste cosas que no quería oír, pero con una salida. Antes, los problemas de personal me llegaban cuando ya eran incendios.»' },
      { id: 'mejor', label: '¿Qué debería hacer distinto?', info: '«A veces me mandas demasiado. Yo leo en el celular, entre reunión y reunión. Tres líneas y lo que necesitas de mí.»' },
      { id: 'temporada', label: '¿Qué le preocupa de la temporada?', info: '«Que el equipo se canse a mitad de camino. Y que lo que ordenamos se desordene cuando haya prisa.»' },
      { id: 'futuro', label: '¿Qué espera de RR.HH. en un año?', info: '«Que la gente venga a ti antes que a mí. Y que el próximo año no tengamos que contratar a 18 personas en dos semanas.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3 }, rel: { veronica: 1 }, flags: picks.includes('mejor') ? ['feedback_pedido'] : [],
      out: picks.includes('mejor') ? 'Te llevas un consejo concreto: tres líneas y un pedido. Verónica se ríe: «Nadie me había preguntado eso».' : 'Te llevas una mirada de la gerencia sobre tu trabajo y sobre lo que viene.',
      kusi: ['curioso', 'Preguntar «¿qué hago distinto?» también es oficio.'],
    }),
    mirada: { ve: 'Pedir retroalimentación a la gerencia, cuando eres la única persona de RR.HH., es la forma más rápida de saber si tu trabajo se está viendo como quieres.' },
  },
  {
    id: 'z3', t: '11:00', ch: 'documento', who: null, titulo: 'El borrador del balance', banner: 'assets/esc/lupa.webp', show: ['calidad', 'etica', 'confianza'],
    body: () => `<p>Escribes el balance de las dos semanas. Lo relees antes de mandarlo: con el cansancio, es fácil que se cuelen frases demasiado bonitas.</p><p><mark class="clave">Un balance sirve si dice la verdad</mark>.</p>`,
    type: 'flag', prompt: 'Marca las frases que no deberían ir así en el balance.',
    doc: { t: 'Balance de las dos semanas · RR.HH.', sub: 'Hotel Inti Wasi · borrador' },
    lines: [
      { id: 'cero', t: 'El hotel ya no tiene ningún riesgo laboral.', bad: BP, why: 'Ninguna empresa está libre de riesgos. Di qué riesgos bajaron y cuáles siguen abiertos.' },
      { id: 'vacantes', t: 'Ingresos de la temporada: contratos firmados por escrito, con su causa, y alta el día de ingreso.' },
      { id: 'todos', t: 'Todo el personal está feliz.', bad: BP, why: 'No lo mediste. Mejor: qué señales viste y qué vas a medir.' },
      { id: 'abiertos', t: 'Pendientes: plan de acción de la certificación (30 días), reglamento interno y revisión semanal de horas.' },
      { id: 'culpa', t: 'Los errores de planilla fueron culpa del contador.', bad: BP, why: 'Parte del error fue información que RR.HH. no le había dado. Un balance que culpa a otros resta confianza.' },
      { id: 'pedido', t: 'Necesito para la temporada: aprobar el protocolo de días críticos y mantener cuatro candidatos de reserva.' },
    ],
    res: ({ hitsBp, falsos }) => {
      const ok = hitsBp >= 2 && !falsos;
      return {
        out: ok ? 'Borras las frases bonitas y dejas las que puedes sostener con datos. El balance queda más corto y más fuerte.' : 'Mandas el balance casi como estaba. Suena muy bien. Quizá demasiado.',
        flags: [ok ? 'balance_honesto' : 'balance_inflado'], cartera: { balance: ok ? 'Balance con logros, pendientes y pedidos' : 'Balance optimista' },
        pro: { ok: 'Un balance honesto es el que la gerencia puede usar para decidir.', risk: 'Un balance inflado se cae con la primera revisión externa.', info: 'Por cada logro, una evidencia; por cada pendiente, una fecha.' },
        kusi: ok ? ['celebra', '¡Corto, honesto y fuerte!'] : ['preocupado', '¿«Ningún riesgo»? Mmm…'],
      };
    },
    rules: [[BP, 'Un balance de gestión dice lo logrado con evidencias, lo pendiente con fechas y lo que se necesita.']],
    mirada: { ve: 'Cerrar una etapa con un balance honesto es lo que permite empezar la siguiente con credibilidad.', visual: { tipo: 'cambio', titulo: 'Del borrador al balance', pares: [['«Ningún riesgo laboral»', 'Riesgos que bajaron y los que siguen'], ['«Todos felices»', 'Señales vistas y qué se medirá'], ['«Culpa del contador»', 'Calendario de cierre acordado']] } },
  },
  {
    id: 'z4', t: '13:30', ch: 'presencial', who: 'chef', titulo: 'Pachamanca en el patio', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Patio de servicio del hotel', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Del hoyo de tierra sale el humo de las piedras calientes: papa, camote, habas, cordero y chancho envueltos en hojas. ${F.has('mediacion_acuerdo') ? 'Marleny y el chef destapan la pachamanca juntos, sin hablarse mucho, pero sin pelear.' : 'El chef destapa la pachamanca; Marleny mira desde la puerta de la cocina.'} ${F.has('fortunata_protegida') ? 'Fortunata te guarda un choclo.' : ''}</p><p>Alguien grita: «¡Que hable la de RR.HH.!». El chef dijo «sin discursos». <mark class="clave">¿Qué haces?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decir una sola frase: gracias por estas dos semanas, y que el lunes empieza lo bueno.',
        res: { q: 'buena', fx: { personas: 3, confianza: 2 }, rel: { chef: 1 }, flags: ['almuerzo_equipo'],
          out: 'Te aplauden. El chef levanta su vaso de chicha: «Corta, como debe ser». Te sirve el mejor pedazo de cordero.', kusi: ['celebra', '¡Una frase y a comer!'] } },
      { id: 'b', label: 'Aprovechar para recordar las reglas de horas extra y descansos de la temporada.',
        res: { q: 'aceptable', fx: { calidad: 1, personas: -1 }, flags: ['almuerzo_equipo'],
          out: 'Te escuchan con cortesía. Kevin bosteza. Las reglas son importantes, pero no era el momento.', kusi: ['pensando', 'Tenía razón, pero no era la hora.'] } },
      { id: 'c', label: 'Excusarte: tienes trabajo y prefieres comer en tu escritorio.',
        res: { q: 'riesgosa', fx: { personas: -2, confianza: -1 },
          out: 'Comes un pan con palta frente a la computadora. Desde el patio llegan las risas.', kusi: ['triste', 'El equipo también se construye comiendo juntos.'] } },
    ],
    mirada: { ve: 'Una generalista es la persona de RR.HH. y también parte del equipo. Compartir los momentos buenos ayuda a sostener los difíciles.' },
  },
  {
    id: 'z5', t: '15:30', ch: 'documento', who: null, titulo: 'Dejar el puesto ordenado', banner: 'assets/esc/escalera.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Cae la lluvia de la tarde. Antes del fin de semana, ordenas tu trabajo para que el lunes, aunque te enfermes, alguien pueda seguirlo.</p><p><mark class="clave">Lo que no está escrito, se pierde</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena cómo dejas el puesto listo para el lunes. Usa las flechas.', boton: 'Guardar',
    items: [
      { id: 'lista', t: 'Actualizar la lista de pendientes con prioridad y fecha', por: 'Lo primero que verá quien siga.' },
      { id: 'carpetas', t: 'Guardar contratos, matriz, actas y registros en carpetas con nombre claro', por: 'Nada de «final (2)».' },
      { id: 'contactos', t: 'Dejar los contactos clave: Iván, la clínica, el instituto y la certificadora', por: 'Para no depender de tu celular.' },
      { id: 'calendario', t: 'Anotar en el calendario las fechas que vienen: cierre de planilla y plan de la certificación', por: 'Lo que tiene plazo.' },
      { id: 'avisa', t: 'Avisarle a Verónica dónde está todo', por: 'Si tú no estás, ella sabe dónde buscar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1 },
        flags: q === 'riesgosa' ? [] : ['puesto_ordenado'], cartera: { pendientes: q === 'riesgosa' ? 'Puesto desordenado' : 'Puesto ordenado para el lunes' },
        out: q === 'buena' ? 'Por primera vez en dos semanas, tu escritorio tiene espacio para el teclado.' : 'Ordenaste lo principal, aunque algo quedó solo en tu cabeza.',
        pro: { ok: 'Un puesto ordenado no depende de la memoria de una sola persona.', info: 'Haz esto cada viernes: diez minutos te ahorran horas el lunes.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Espacio para el teclado!' : 'Casi listo.'],
      };
    },
    mirada: { ve: 'Cuando eres la única persona de RR.HH., ordenar tu trabajo es una forma de proteger a la empresa de tu propia ausencia.' },
  },
  {
    id: 'z6', t: '17:15', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/caminan.webp', lugar: 'Ventana de tu oficina, con vista a la plaza', show: ['confianza'],
    body: (n, F) => `<p>Desde la ventana ves la plaza mojada y los primeros turistas de la temporada. En dos semanas reclutaste, contrataste, mediaste, armaste turnos, controlaste una planilla, cuidaste a Wendy, ${F.has('luz_protegida') ? 'protegiste a Luz Clarita, ' : ''}atendiste una auditoría y sobreviviste a un hotel lleno.</p><p>Kusi te hace la pregunta de siempre: <mark class="clave">¿te ves en este puesto?</mark></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Sí: me gusta hacer de todo y estar cerca de la gente y de la operación.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves'], out: 'Sonríes. Ser generalista es cansado, pero cada día es distinto, y la gente del hotel ya te busca a ti.', kusi: ['celebra', '¡Generalista de corazón!'] } },
      { id: 'b', label: 'Me gustó, pero descubrí que me atrae más una parte: los conflictos y las personas, o la planilla y los contratos.',
        res: { q: null, fx: { confianza: 1 }, flags: ['te_ves_otro'], out: 'Para eso sirve ser generalista: para descubrir qué parte de RR.HH. te gusta más. Anotas en tu libreta cuál fue.', kusi: ['curioso', '¡Qué bacán descubrir eso!'] } },
      { id: 'c', label: 'Todavía no lo sé: necesito ver cómo es la temporada.',
        res: { q: null, fx: { confianza: 1 }, flags: ['te_ves'], out: 'Es una respuesta honesta. La Semana 3 empieza el lunes, y con ella la temporada de verdad.', kusi: ['pensando', 'La temporada te va a responder.'] } },
    ],
    mirada: { ve: 'No hay respuesta correcta. El puesto de generalista es una gran escuela: muchas personas descubren aquí si quieren especializarse o seguir haciendo un poco de todo.' },
  },
  {
    id: 'z7', t: '18:00', ch: 'correo', who: 'veronica', titulo: 'La casilla de la SUNAFIL', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Estás apagando la computadora cuando Verónica te reenvía un correo con tres signos de exclamación. Es una notificación de la casilla electrónica de la SUNAFIL: <mark class="clave">inspección el lunes a las 9:00</mark>.</p><p>${F.has('balance_honesto') ? 'Tienes un balance honesto y carpetas ordenadas.' : 'Tu balance de hoy prometía más de lo que hay en las carpetas.'}${F.has('honorarios_espera') || F.has('efectivo_por_dia') || F.has('accidente_ocultado') ? ' Y sabes que hay cosas que todavía no están en orden.' : ''}</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responderle con calma: leer la orden, ver qué materias revisarán, y reunir el lunes a las 7:30 la documentación real.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 2 }, rel: { veronica: 1 }, flags: ['inspeccion_preparada'], responde: 'Verónica: leí la orden. Mañana le mando la lista de materias y la documentación que corresponde a cada una. El lunes a las 7:30 la revisamos juntas. No escondemos nada: mostramos lo que hay y el plan de lo que falta.',
          out: 'Verónica responde: «Ok. Respira. Yo también». Apagas la luz. Afuera, la plaza se llena de turistas. El lunes empieza la temporada… y la inspección.', kusi: ['animo', 'Lo que ordenaste estas dos semanas, el lunes se pone a prueba.'] } },
      { id: 'b', label: 'Responderle que no se preocupe y verlo el lunes temprano.',
        res: { q: 'aceptable', fx: { confianza: -1 }, flags: ['inspeccion_panico'], responde: 'Verónica: tranquila, lo vemos el lunes temprano.',
          out: 'Verónica responde: «¿El lunes? ¿Y si piden algo que no tenemos?». Te vas a tu casa con la pregunta dando vueltas.', kusi: ['preocupado', 'El fin de semana va a ser largo…'] } },
    ],
    mirada: { ve: 'El trabajo de una generalista no termina en dos semanas. La inspección del lunes revisará lo que se hizo bien, lo que se hizo a medias y lo que todavía falta.' },
  },
];
