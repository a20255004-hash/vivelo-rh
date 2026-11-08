// Especialista en RR.HH. de entidad pública · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Final abierto: la historia sigue en la Semana 3 (capítulo 11, en escritura).
// Normas citadas (todas ya verificadas en capítulos anteriores):
// - D.Leg. 1057, art. 1 (principios de méritos y capacidad e igualdad de oportunidades; de ahí el concurso público), capítulo 1.
// - D.S. 003-2018-TR (difusión mínima de diez días hábiles en Talento Perú), capítulo 9.
// - Ley 29248, art. 61 (bonificación a licenciados de las FF.AA.), capítulo 8.
// - TUO de la Ley 27444, art. 99 (abstención por parentesco), capítulo 6.

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '08:00', fin: '17:30', cierreHora: '17:15',
  apertura: 'Viernes. Diez días hábiles desde que entraste a la ORH. En la plaza ya pusieron el nacimiento gigante y los niños se toman fotos con las ovejas de yeso. Hoy la comisión de control se despide, y el concurso lleva un día publicado.', boton: 'Empezar el último día',
  kusi: 'Dos semanas. No cambiaste el Estado, pero un concurso salió más limpio por ti. ¡Eso no es poco!',
  lead: 'Cerraste la auditoría con preguntas útiles, ordenaste lo que queda para la Semana 3, tomaste una decisión delicada sobre a quién informar y cuándo, agradeciste a tu equipo y miraste atrás.',
  reflexion: 'Después de dos semanas en la ORH de una municipalidad, ¿te ves en este puesto? ¿Qué te atrae y qué te pesa?',
  siguiente: { n: 11, titulo: 'La segunda del orden de mérito', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'concurso', p: 'CAS 005-2026: postulación abierta', j: 'Marisol · ORH', d: 0, e: 'Cierra el viernes 18' },
  { id: 'oci', p: 'Comisión de control', j: 'CPC Rocío Alcántara', d: 0, e: 'Reunión de salida hoy' },
  { id: 'bonif', p: 'Bonificación del CAS 004', j: 'Asesoría Legal', d: 0, e: 'En evaluación' },
  { id: 'serenos', p: 'Segundo concurso: 3 serenos', j: 'Gerencia Municipal', d: 0, e: 'Por certificar' },
];

export const FUTURO = {
  salida_preguntada: ['Preguntaste a la auditora qué riesgos ve para el concurso nuevo.', 'Sus respuestas guiarán la evaluación curricular de la Semana 3.'],
  nilda_espera: ['Decidiste esperar el acto formal para informar a Nilda Cueva, con la notificación lista.', 'Nilda será citada el lunes, en el capítulo 11.'],
  nilda_llamada: ['Llamaste a Nilda Cueva antes de que hubiera una decisión formal.', 'Llegará el lunes a la ORH con muchas preguntas, en el capítulo 11.'],
  nilda_callada: ['Decidiste no informar a Nilda hasta que ella preguntara.', 'Se enterará por otra vía en el capítulo 11.'],
  equipo_agradecido: ['Le agradeciste al equipo de la ORH con nombre y apellido.', 'Don Segundo te cubrirá la espalda en la Semana 3.'],
  informe_semanas: ['Le entregaste a Marisol un informe de tus dos semanas con logros, pendientes y riesgos.', 'Será la agenda del lunes.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
  regidor: { n: 'Regidor Manuel Tello', sub: 'Regidor municipal', who: 'regidor' },
  mama: { n: 'Mamá', sub: 'Familia', c: '#B5462C' },
};

export const WSP = [
  { chat: 'grupo', t: '08:05', de: 'Don Segundo', txt: 'Ya van 37 expedientes entre mesa de partes y el correo. ¡Y recién es el primer día! 📂' },
  { chat: 'eder', t: '10:20', de: 'Eder', txt: 'Señorita, ya presenté mi expediente. Esta vez con todas las fechas. Gracias por explicarme lo que nadie me explicó.', si: 'eder_informado' },
  { chat: 'regidor', t: '12:30', de: 'Regidor Tello', txt: 'Señorita, ya vi la convocatoria. Mis chicos van a postular como todos. Usted ganó esta vez.', si: 'lista_rechazada' },
  { chat: 'marisol', t: '16:00', de: 'Marisol', txt: 'Legal me adelantó que el lunes cita a la señora Nilda Cueva. Prepárate: va a ser un día largo.' },
  { chat: 'mama', t: '17:25', de: 'Mamá', txt: 'Hijita, ¿te quedas para la chocolatada del barrio? Tu tía trajo panetón de Celendín 🎄' },
];

export const CORREOS = [
  { t: '08:10', de: 'CPC Rocío Alcántara · Comisión de control', para: 'ORH', asunto: 'Reunión de salida', html: '<p>Se convoca a la ORH a la reunión de salida de la comisión, hoy a las 9:00. La comisión comunicará sus observaciones preliminares; la ORH podrá presentar sus comentarios en el plazo que se indique por escrito.</p>' },
  { t: '15:30', de: 'Asesoría Legal', para: 'ORH', asunto: 'CAS 004-2026: citación a la Sra. Nilda Cueva', html: '<p>En relación con la bonificación aplicada en el CAS 004-2026, esta oficina citará el lunes a la Sra. Nilda Cueva, segunda en el orden de mérito, y al Sr. Wílder Chuquiruna para que presente sus descargos. Se solicita a la ORH tener a disposición el expediente completo.</p><p>Dr. Ronald Chilón</p>', si: 'resultado_revisar' },
  { t: '15:30', de: 'Asesoría Legal', para: 'ORH', asunto: 'CAS 004-2026: pedido de la comisión de control', html: '<p>La comisión de control solicita que esta oficina evalúe la bonificación aplicada en el CAS 004-2026. Se citará el lunes a la Sra. Nilda Cueva, segunda en el orden de mérito. Se solicita a la ORH el expediente completo.</p><p>Dr. Ronald Chilón</p>', no: 'resultado_revisar' },
];

export const QUIZ = [
  { q: '¿Qué aprendiste que distingue contratar en el Estado de hacerlo en una empresa?', ops: ['Que en el Estado no hay presión', 'Que todo se publica, se documenta y puede ser revisado por cualquiera', 'Que el jefe decide a quién contratar', 'Que no hay plazos'], ok: 1, por: 'En el Estado, el procedimiento escrito y público es la garantía del mérito.' },
  { q: '¿Cuál de estas fue una herramienta clave para resistir la presión política?', ops: ['Ignorar al regidor', 'La nota informativa fechada y la regla repetida con respeto', 'Pedir ayuda al alcalde', 'Cambiar de número'], ok: 1, por: 'Lo escrito a tiempo protege a la institución y a quien la sirve.' },
  { q: 'Si encuentras un error que cambió un resultado, ¿qué es lo más responsable?', ops: ['Callarlo', 'Informarlo y proponer que se evalúe cómo corregirlo, cuidando a todas las personas involucradas', 'Culpar a la gestión anterior en redes', 'Despedir a quien ganó'], ok: 1, por: 'Corregir sin esconder y sin humillar a nadie.' },
  { q: '¿Qué significa que el concurso esté publicado «diez días hábiles»?', ops: ['Diez días calendario', 'Al menos diez días hábiles de difusión en Talento Perú y en el portal, sin contar feriados ni fines de semana', 'Dos semanas exactas', 'Hasta que el alcalde diga'], ok: 1, por: 'El D.S. 003-2018-TR fija la difusión mínima en días hábiles.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '09:00', ch: 'presencial', who: 'auditora', titulo: 'La reunión de salida', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de reuniones del tercer piso', show: ['confianza', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>La auditora lee sus observaciones preliminares sin levantar la voz: el acta faltante del CAS 003, la bonificación del CAS 004, la verificación sin firma. ${F.has('acta_rehecha') ? 'Y una más: «un acta cuyo papel y sello no corresponden a la fecha que indica». Marisol baja la mirada.' : ''} ${F.has('terrones_abstencion') ? 'Al final, menciona como buena práctica la abstención registrada en el comité del CAS 005.' : ''}</p><p>«¿Alguna pregunta?» <mark class="clave">Tienes tiempo para dos</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a la auditora.',
    opts: [
      { id: 'riesgo', label: '«¿Qué riesgos ve para el concurso que acabamos de publicar?»', info: '«La evaluación curricular. Con 200 expedientes y poco personal, ahí es donde se cometen los errores. Usen una matriz con criterios escritos y que dos personas revisen cada puntaje.»' },
      { id: 'plazo', label: '«¿Cuándo y cómo podemos presentar nuestros comentarios?»', info: '«Les llegará un documento con el plazo. Respondan cada observación con evidencia, no con explicaciones generales.»' },
      { id: 'yo', label: '«¿Hay algo que yo debí hacer distinto?»', info: 'Te mira por encima de los lentes. «Usted llegó hace dos semanas y entregó una lista de faltantes. Siga haciendo eso. Lo que la gente esconde siempre aparece.»' },
      { id: 'jr', label: '«¿Qué va a pasar con el jefe anterior?»', info: '«Eso no le corresponde a la ORH, ni lo voy a comentar. Su trabajo es que el próximo concurso no tenga las mismas observaciones.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, calidad: picks.includes('riesgo') ? 3 : 1, cumplimiento: 2 }, rel: { auditora: picks.includes('jr') ? 0 : 1 },
      flags: picks.includes('riesgo') ? ['salida_preguntada'] : [],
      out: picks.includes('riesgo') ? 'Anotas en tu libreta: «Curricular: matriz con criterios escritos, doble revisión». Es lo primero que harás el lunes.' : 'La auditora se despide con un apretón de manos breve. Te quedas pensando en lo que dijo.',
      kusi: picks.includes('riesgo') ? ['feliz', '¡Una auditora que te deja tarea útil!'] : ['pensando', 'Lo que se esconde siempre aparece.'],
    }),
    mirada: {
      ve: 'La reunión de salida no es el final de la auditoría, sino el comienzo de la respuesta. Las mejores preguntas son las que miran hacia adelante: qué riesgos vienen y cómo evitarlos.',
      visual: { tipo: 'linea', titulo: 'La comisión en la ORH', hitos: [['Viernes, semana 1', 'Llega el oficio'], ['Martes', 'Reunión de inicio'], ['Miércoles', 'El hallazgo'], ['Hoy', 'Observaciones preliminares']] },
    },
  },
  {
    id: 'j2', t: '10:30', ch: 'documento', who: null, titulo: 'Lo que viene', banner: 'assets/esc/meta.webp', lugar: 'Tu escritorio, con la pizarra llena', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>La pizarra de la ORH ya no tiene espacio. El concurso está abierto, la comisión se va, Asesoría Legal tiene el caso del CAS 004 y el gerente pregunta por sus tres serenos.</p><p><mark class="clave">Elige las tres prioridades de la Semana 3</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres prioridades que dejas escritas para el lunes.', boton: 'Fijar prioridades', resumen: 'Priorizaste',
    cols: ['Prioridad', 'Por qué'],
    rows: [
      { id: 'matriz', cells: ['Matriz de evaluación curricular con criterios escritos y doble revisión', 'Es donde la auditora ve más riesgo'] },
      { id: 'cas004', cells: ['Expediente completo del CAS 004 para Asesoría Legal', 'Citan a Nilda y a Wílder el lunes'] },
      { id: 'serenos', cells: ['Pedido de certificación para los 3 serenos del segundo concurso', 'Diciembre ya llegó'] },
      { id: 'faceb', cells: ['Responder uno por uno los comentarios de Facebook', 'Hay 300 comentarios'] },
      { id: 'archivo', cells: ['Reordenar el archivo del sótano por colores', 'Se ve mejor'] },
    ],
    score: { matriz: 3, cas004: 3, serenos: 2, faceb: -1, archivo: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, cumplimiento: q === 'buena' ? 4 : 1 },
        cartera: { concurso: picks.includes('matriz') ? 'Matriz curricular: primera tarea del lunes' : 'Postulación abierta' },
        out: q === 'buena' ? 'Escribes las tres prioridades en la parte de arriba de la pizarra, con plumón rojo. Don Segundo les pone una estrella.' : 'Fijas tus prioridades, aunque una de ellas puede esperar más que las otras.',
        pro: { ok: 'Lo que protege el concurso y lo que tiene fecha va primero.', info: 'Los comentarios de Facebook se responden con el documento de consultas, no uno por uno.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Semana 3, con brújula.' : '¿Qué tenía fecha?'],
      };
    },
    mirada: {
      ve: 'Terminar una etapa en el Estado casi nunca es terminar el trabajo. Es dejar escrito lo que sigue, para que el lunes no empiece desde cero.',
      visual: { tipo: 'embudo', titulo: 'La pizarra de la ORH', niveles: [['Pendientes anotados', 14], ['Con fecha', 7], ['Prioridades del lunes', 3]] },
    },
  },
  {
    id: 'j3', t: '12:00', ch: 'presencial', who: 'marisol', titulo: '¿Y Nilda?', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de Marisol', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Marisol tiene el número de Nilda Cueva en un pósit. Nilda es técnica en informática, vive en San Marcos y trabaja en una cabina de internet. ${F.has('resultado_revisar') ? 'Si Asesoría Legal corrige el resultado, la plaza podría ser suya.' : 'La comisión pidió que Legal revise el resultado.'} Ella todavía no sabe nada.</p><p>«¿La llamamos hoy? <mark class="clave">Es viernes y el lunes la citan</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No llamarla hoy. Esperar a que Asesoría Legal la cite formalmente el lunes, y dejar lista la notificación con todo lo que tiene derecho a ver.',
        res: { q: 'buena', fx: { cumplimiento: 4, etica: 3, personas: -1 }, flags: ['nilda_espera'],
          out: 'Marisol asiente. Preparas la carpeta: puntajes, bases y el cálculo, con los datos de terceros protegidos. El pósit con el número queda pegado en el monitor de Marisol, esperando el lunes.',
          pro: { ok: 'Respetas el procedimiento: la información llega completa y por el canal formal.', risk: 'Nilda pasará el fin de semana sin saber algo que le importa.', info: 'Que la citación le llegue con tiempo suficiente para viajar desde San Marcos.' },
          kusi: ['pensando', 'Esperar también puede ser cuidar.'] } },
      { id: 'b', label: 'Llamarla hoy para avisarle que el lunes la citarán y por qué, sin adelantar decisiones.',
        res: { q: 'aceptable', fx: { personas: 4, cumplimiento: -1 }, flags: ['nilda_llamada'],
          out: 'Nilda no entiende al principio. Luego se queda callada. «¿O sea que yo gané?» Le dices que no hay nada decidido. Escuchas que llora del otro lado. «Ahí estaré el lunes, señorita.»',
          pro: { ok: 'Le das tiempo para organizarse y la tratas como persona.', risk: 'Una llamada informal antes del acto formal genera expectativas que tal vez no se cumplan.' },
          kusi: ['sorpresa', 'Ahora ella va a pasar el fin de semana pensando en eso.'] } },
      { id: 'c', label: 'No informarle nada hasta que haya una decisión final. Si pregunta, se le responde.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -3 }, flags: ['nilda_callada'],
          out: 'Marisol arruga el pósit. Pero en Cajamarca todo se sabe: alguien ya le escribió a Nilda por Facebook que «le robaron la plaza».',
          pro: { ok: 'Evitas crear expectativas.', risk: 'Nilda tiene interés directo en el caso y derecho a participar. No informarle es dejarla fuera de algo que la afecta.' },
          kusi: ['triste', 'Ella es la más afectada… y la última en saberlo.'] } },
    ],
    rules: [[BP, 'Quien tiene interés directo en una decisión debe ser informado formalmente y a tiempo para participar.']],
    mirada: {
      ve: 'Nilda perdió una plaza hace meses sin saberlo. Cómo y cuándo se entera también es parte de la justicia que le debe la institución.',
      visual: { tipo: 'balanza', a: { t: 'Llamarla hoy', items: ['Tiempo para organizarse', 'Trato humano', 'Expectativas antes de decidir'] }, b: { t: 'Citación formal el lunes', items: ['Información completa', 'Canal oficial', 'Un fin de semana sin saber'] } },
    },
  },
  {
    id: 'j4', t: '14:00', ch: 'documento', who: null, titulo: 'Tu informe de dos semanas', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, con un café que ya no está caliente', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => {
      const hechos = [
        F.has('bases_limpias') ? 'bases sin requisitos discriminatorios' : 'bases con un requisito que se corrigió tarde',
        F.has('plazas_12') ? 'solo plazas certificadas' : F.has('plazas_15_sin_cert') ? 'tres plazas sin certificación' : 'un concurso que esperó su certificación',
        F.has('terrones_abstencion') ? 'una abstención bien registrada' : 'un comité con un conflicto sin resolver',
        F.has('publicado_hoy') ? 'publicación en la fecha prometida' : 'una publicación que se corrió',
      ];
      return `<p>Marisol te pide un informe corto de tus dos semanas para el lunes. Repasas: ${hechos.join(', ')}.</p><p><mark class="clave">Arma tu informe pieza por pieza</mark>. Lo leerá alguien que necesita saber qué sigue.</p>`;
    },
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu informe.', boton: 'Entregar el informe',
    bloques: [
      { id: 'logros', t: 'Lo que se logró', n: 2, ops: [
        { id: 'l1', t: 'CAS 005-2026 publicado en Talento Perú y en el portal, con bases revisadas por Asesoría Legal.', ok: true },
        { id: 'l2', t: 'Procedimiento escrito para verificar bonificaciones, incluido en las bases.', ok: true },
        { id: 'l3', t: 'Se resolvieron todos los problemas de la ORH.', ok: false, por: 'Exagerar los logros quita credibilidad a todo lo demás.' },
      ] },
      { id: 'pend', t: 'Lo que sigue', n: 2, ops: [
        { id: 'p1', t: 'Matriz de evaluación curricular con doble revisión, antes del cierre de la postulación.', ok: true },
        { id: 'p2', t: 'Expediente del CAS 004 para la citación del lunes.', ok: true },
        { id: 'p3', t: 'Esperar a ver qué dice la Contraloría.', ok: false, por: 'Esperar no es un pendiente: es aplazar.' },
      ] },
      { id: 'riesgos', t: 'Riesgos', n: 2, ops: [
        { id: 'r1', t: 'La presión política puede volver en la evaluación curricular y en las entrevistas.', ok: true },
        { id: 'r2', t: 'El volumen de expedientes con poco personal puede generar errores de puntaje.', ok: true },
        { id: 'r3', t: 'El regidor Tello es corrupto.', ok: false, por: 'Por escrito, hechos. No calificativos que no puedes probar.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0, cumplimiento: q === 'riesgosa' ? -2 : 2 }, rel: { marisol: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['informe_semanas'],
        out: q === 'buena' ? 'Tu informe cabe en una página. Marisol lo lee de pie y dice: «Esto es lo que voy a llevar a la reunión con el gerente el lunes».' : 'El informe sirve, aunque una frase va a requerir explicación.',
        pro: { ok: 'Logros sin exagerar, pendientes con fecha y riesgos con hechos.', info: 'Guarda una copia: dentro de un año te servirá para ver cuánto aprendiste.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un informe que se lee de pie!' : 'Hechos, no adjetivos.'],
      };
    },
    mirada: {
      ve: 'Un informe de cierre no es para lucirse: es para que quien lo lea sepa qué está firme, qué sigue abierto y dónde puede romperse.',
      visual: { tipo: 'flujo', titulo: 'Tu informe', pasos: ['Lo logrado', 'Lo que sigue', 'Los riesgos'] },
    },
  },
  {
    id: 'j5', t: '16:15', ch: 'whatsapp', who: null, titulo: 'Para el equipo', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Tu escritorio', show: ['personas', 'confianza'],
    body: () => `<p>Don Segundo trajo panetón y lo cortó con la regla metálica de la ORH. Marisol está en una llamada. El grupo de WhatsApp de la oficina está en silencio.</p><p>Quieres escribir algo antes de irte. <mark class="clave">Corto y de verdad</mark>.</p>`,
    type: 'compose', enviaA: 'grupo', para: 'Para: ORH Municipalidad · grupo del equipo', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'grac', t: 'El agradecimiento', ops: [
        { id: 'g1', t: 'Gracias a Marisol por enseñarme que lo que no está escrito no existe, y a Don Segundo por la memoria (y el café).', ok: true, por: 'Agradeces con nombre y con algo concreto.' },
        { id: 'g2', t: 'Gracias a todos por todo 🙏', ok: null, por: 'Amable, pero nadie se siente nombrado.' },
      ] },
      { id: 'logro', t: 'Lo que lograron', ops: [
        { id: 'l1', t: 'El CAS 005 salió publicado y limpio. Es de todos.', ok: true, por: 'Compartes el logro.' },
        { id: 'l2', t: 'Al fin salió el concurso, a pesar de todo lo que encontré.', ok: false, por: 'Suena a que el mérito es tuyo y el desorden, de los demás.' },
      ] },
      { id: 'sigue', t: 'Lo que sigue', ops: [
        { id: 's1', t: 'El lunes nos esperan 200 expedientes. Llego temprano con café para todos ☕', ok: true, por: 'Cierras mirando hacia adelante, juntos.' },
        { id: 's2', t: 'El lunes ya veremos.', ok: null, por: 'Neutro.' },
      ] },
    ],
    res: sel => {
      const mal = sel.logro === 'l2', buenas = ['g1', 'l1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : mal ? -2 : 2, confianza: q === 'buena' ? 3 : 0 }, rel: { marisol: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['equipo_agradecido'] : [],
        out: q === 'buena' ? 'Don Segundo responde con un audio de un minuto que termina con «¡viva la ORH, carajo!». Marisol manda un corazón verde. La practicante de Imagen pregunta si puede ir el lunes a ayudar.' : mal ? 'El grupo queda en silencio. Don Segundo deja de cortar panetón.' : 'Llegan pulgares y un «igualmente». Bien, sin más.',
        pro: { ok: 'Nombrar a cada persona y compartir el logro construye equipo.', risk: 'Atribuirse el mérito frente al equipo que te enseñó resta confianza.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Qué bacán ese equipo!' : 'El logro era de todos.'],
      };
    },
    mirada: { ve: 'En una oficina pública con pocos recursos, el equipo es lo único que sostiene el trabajo cuando todo aprieta. Reconocerlo en voz alta es parte del oficio.' },
  },
  {
    id: 'j6', t: '17:10', ch: 'presencial', who: 'marisol', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/caminan.webp', lugar: 'Escaleras de la municipalidad, hacia la plaza', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Bajan juntas las escaleras. Afuera ya encendieron las luces del nacimiento y huele a canela de los puestos de ponche. Marisol se acomoda la chalina.</p><p>«Dos semanas. ${F.has('acta_no_existe') ? 'Me dijiste que no cuando yo me asusté. ' : ''}${F.has('presion_contada') ? 'Contaste lo del regidor a la Contraloría. ' : ''}${F.has('bonif_detectada') ? 'Encontraste lo que nadie vio en un año. ' : ''}Y el lunes es peor: 200 expedientes, la señora Cueva y Wílder en la misma sala.» Se detiene en el último escalón. <mark class="clave">«¿Te ves en este puesto?»</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Sí. Me cansa, pero me gusta que lo que hago se pueda revisar. Siento que sirve.»',
        res: { q: null, fx: { personas: 2, confianza: 2 },
          out: 'Marisol sonríe. «Eso es lo que te va a sostener cuando venga el próximo regidor.» Se despide en la esquina del jirón Del Comercio. El lunes, a las 7:30.',
          kusi: ['celebra', '¡Te ves! Y se nota.'] } },
      { id: 'b', label: '«No lo sé todavía. Me pesa la presión y que todo dependa de un papel. Quiero ver la Semana 3.»',
        res: { q: null, fx: { personas: 2, etica: 1 },
          out: 'Marisol asiente. «A mí me tomó un año saberlo. Que dudes es buena señal: los que nunca dudan son los que firman cualquier cosa.» Te acompaña hasta el paradero.',
          kusi: ['pensando', 'Dudar también es mirar en serio.'] } },
      { id: 'c', label: '«Creo que no. Prefiero un lugar donde la presión política no sea parte del trabajo.»',
        res: { q: null, fx: { personas: 1, confianza: 1 },
          out: 'Marisol no se ofende. «Es honesto. Pero espera a la próxima semana antes de decidir. A veces lo mejor viene después de lo peor.» Te da la mano.',
          kusi: ['curioso', 'Saber lo que no quieres también es saber.'] } },
    ],
    mirada: {
      ve: 'Trabajar en la ORH de una entidad pública es sostener el mérito en medio de la presión, con procedimientos estrictos, poco personal y una ciudad que mira. No es para todos, y no tiene por qué serlo. Lo que viviste en dos semanas es una muestra real; la Semana 3 traerá la evaluación de 200 expedientes y una decisión que cambiará la vida de dos personas.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas en la ORH', hitos: [['Lunes 1', 'Doce plazas y un regidor'], ['Martes a jueves', 'Bases, certificación y la lista'], ['Viernes 1', 'El reclamo y el oficio'], ['Semana 2', 'El pariente, la Contraloría, el hallazgo'], ['Jueves 2', 'Publicación'], ['Lunes 3', 'Nilda, Wílder y 200 expedientes']] },
    },
  },
];
