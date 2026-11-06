// Especialista en RR.HH. de entidad pública · Capítulo 1 · «Doce plazas» · Semana 1, lunes.
// Hilo del mes: un concurso CAS de 12 plazas en una municipalidad provincial, con presiones y una auditoría.
// Normas citadas: D.Leg. 1057 (acceso al CAS por concurso público de méritos); D.S. 003-2018-TR (difusión de las ofertas
// laborales del Estado en el portal Talento Perú de SERVIR); Ley 26771 modificada por la Ley 31299 (nepotismo);
// Ley 29973 (bonificación del 15 % a personas con discapacidad) y Ley 29248 (10 % a licenciados de las FF.AA.).

export const CAP = {
  n: 1, titulo: 'Doce plazas', dia: 'Semana 1, lunes', foto: 'assets/foto/plano-equipo.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '08:00', fin: '17:30', cierreHora: '17:20',
  apertura: 'Cajamarca. Hace frío en la plaza de armas. Hoy empiezas como especialista en la Oficina de Recursos Humanos de la municipalidad.', boton: 'Entrar a la ORH',
  kusi: 'En el Estado, cada paso deja huella… y cada huella se audita. ¡Con orden!',
  lead: 'Entendiste las etapas de un concurso CAS, respondiste a la presión de un regidor con la ley, atendiste a un postulante que nadie había escuchado y preparaste lo que sostiene un concurso limpio.',
  reflexion: '¿En qué se parece y en qué se diferencia contratar en el Estado y en una empresa?',
  siguiente: { n: 2, titulo: 'Las bases', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'concurso', p: 'Concurso CAS: 12 plazas', j: 'Marisol · ORH', d: 0, e: 'Publicación en 10 días' },
  { id: 'perfiles', p: 'Perfiles de puesto de las áreas', j: 'Gerencias municipales', d: 0, e: '5 de 12 recibidos' },
  { id: 'presupuesto', p: 'Certificación presupuestal', j: 'Planeamiento y Presupuesto', d: 0, e: 'Pendiente' },
  { id: 'reclamo', p: 'Reclamo de Eder Rojas', j: 'Mesa de partes', d: 0, e: 'Del concurso anterior' },
];

export const FUTURO = {
  regidor_ley: ['Le recordaste al regidor que su sobrino no puede ser contratado por injerencia suya.', 'El regidor buscará otra forma en el capítulo 4.'],
  regidor_cede: ['Prometiste «ver» la plaza del sobrino del regidor.', 'La auditora de la Contraloría lo encontrará en el capítulo 7.'],
  eder_atendido: ['Eder recibió una explicación y acceso a su evaluación.', 'Volverá a postular, y lo verás en el capítulo 5.'],
  eder_ignorado: ['Eder se fue sin respuesta.', 'Presentará una queja formal en el capítulo 5.'],
  presupuesto_primero: ['Pediste la certificación presupuestal antes de publicar.', 'Te salvará en el capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  regidor: { n: 'Regidor Manuel Tello', sub: 'Regidor municipal', who: 'regidor' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
};

export const WSP = [
  { chat: 'grupo', t: '08:05', de: 'Marisol', txt: 'Bienvenida al equipo ORH. Hoy arrancamos con el concurso CAS. Te dejé el cronograma impreso 📋' },
  { chat: 'regidor', t: '10:50', de: 'Regidor Tello', txt: 'Buenos días, señorita. Soy el regidor Tello. ¿Podría pasar un momento por mi oficina? Es breve.' },
  { chat: 'marisol', t: '12:30', de: 'Marisol', txt: 'Me contaron lo del regidor. Bien hecho. Eso queda por escrito en un correo, por si acaso.', si: 'regidor_ley' },
  { chat: 'eder', t: '16:00', de: 'Eder', txt: 'Gracias por atenderme, señorita. Es la primera vez que alguien me explica.', si: 'eder_atendido' },
];

export const CORREOS = [
  { t: '08:10', de: 'Marisol Chávez', para: 'Especialista de la ORH', asunto: 'El concurso CAS', html: '<p>Bienvenida. En estas dos semanas sacamos el concurso CAS para 12 plazas: asistentes administrativos, un ingeniero civil, dos fiscalizadores y personal de serenazgo.</p><p>En el Estado todo se publica, todo se documenta y todo puede ser auditado. Si un paso no está escrito, es como si no hubiera ocurrido.</p><p>Marisol</p>' },
  { t: '15:00', de: 'Mesa de partes', para: 'ORH', asunto: 'Documento ingresado: reclamo de Eder Rojas', html: '<p>Se adjunta el escrito del Sr. Eder Rojas, postulante del concurso CAS 004-2026, quien solicita conocer los motivos de su descalificación en la evaluación curricular.</p>' },
];

export const QUIZ = [
  { q: '¿Cómo se accede a un puesto CAS?', ops: ['Por invitación del alcalde', 'Por concurso público de méritos', 'Por sorteo', 'Por recomendación de un regidor'], ok: 1, por: 'El D.Leg. 1057 establece el acceso mediante concurso público.' },
  { q: '¿Dónde deben difundirse las ofertas laborales del Estado?', ops: ['Solo en el periódico mural', 'En el portal Talento Perú de SERVIR, además del portal institucional', 'En Facebook del alcalde', 'No es necesario difundirlas'], ok: 1, por: 'El D.S. 003-2018-TR dispone su registro y difusión en Talento Perú.' },
  { q: 'Un regidor pide contratar a su sobrino. Según la Ley 26771 y la Ley 31299…', ops: ['Se puede, si es por CAS', 'Está prohibido cuando el funcionario tiene injerencia en la contratación', 'Se puede si el sobrino es bueno', 'Solo está prohibido para hijos'], ok: 1, por: 'La ley prohíbe el nepotismo hasta el cuarto grado de consanguinidad cuando hay injerencia directa o indirecta.' },
  { q: '¿Qué bonificación recibe una persona con discapacidad acreditada en un concurso público?', ops: ['5 %', '10 %', '15 %', 'Ninguna'], ok: 2, por: 'La Ley 29973 otorga una bonificación del 15 % en concursos públicos.' },
  { q: 'Un postulante descalificado pide saber por qué. ¿Qué haces?', ops: ['No le respondes', 'Le explicas los criterios y le das acceso a su evaluación', 'Le dices que postule otra vez', 'Lo mandas al alcalde'], ok: 1, por: 'La transparencia de los criterios y resultados es parte de un concurso legítimo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'o1', t: '08:20', ch: 'presencial', who: 'marisol', titulo: 'El cronograma del concurso', banner: 'assets/foto2/reunion-circulos.webp', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Marisol tiene sobre la mesa un expediente atado con pabilo: el concurso CAS del año pasado. Tiene sellos, firmas y foliación en cada hoja.</p><p>«Lo primero: <mark class="clave">que tengas claro el orden</mark>. En el Estado, si haces un paso antes que otro, todo el concurso se puede caer.»</p>`,
    type: 'secuencia', prompt: 'Ordena las etapas de un concurso CAS.', boton: 'Mostrarle el orden a Marisol',
    items: [
      { id: 'req', t: 'Requerimiento del área con su perfil de puesto', por: 'El área explica qué necesita y por qué.' },
      { id: 'pres', t: 'Certificación presupuestal', por: 'Sin presupuesto certificado no se puede convocar.' },
      { id: 'bases', t: 'Aprobación de las bases del concurso', por: 'Reglas, requisitos, puntajes y cronograma.' },
      { id: 'pub', t: 'Publicación en Talento Perú y en el portal institucional', por: 'Para que cualquiera pueda postular.' },
      { id: 'eval', t: 'Evaluación curricular y entrevista', por: 'Con puntajes y actas de cada etapa.' },
      { id: 'res', t: 'Resultados finales con bonificaciones de ley y firma del contrato', por: 'Se publican y luego se suscribe el contrato.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { marisol: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Marisol asiente: «Exacto. Y nota que solo tenemos 5 de los 12 perfiles. Sin perfiles, no hay bases».' : 'Marisol mueve una tarjeta: «Si publicas sin presupuesto certificado, te pueden observar todo el proceso».',
        pro: { ok: 'Cada etapa depende de la anterior y debe quedar documentada.', info: 'Pregunta cuánto demora Presupuesto en certificar: suele ser el cuello de botella.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Orden de funcionaria!' : 'El presupuesto va primero.'],
      };
    },
    rules: [[LEY, 'El acceso al CAS es por concurso público de méritos (D.Leg. 1057).'], [LEY, 'Las ofertas laborales del Estado se difunden en el portal Talento Perú (D.S. 003-2018-TR).']],
    mirada: {
      ve: 'En el sector público, el procedimiento es la garantía de que el puesto es de quien lo merece y no de quien conoce a alguien. Por eso el orden importa tanto.',
      visual: { tipo: 'flujo', titulo: 'Un concurso CAS', pasos: ['Requerimiento', 'Presupuesto', 'Bases', 'Publicación', 'Evaluación', 'Resultados y contrato'] },
    },
  },
  {
    id: 'o2', t: '11:00', ch: 'presencial', who: 'regidor', titulo: 'La oficina del regidor', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de regidores', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>El regidor Tello te recibe con amabilidad, te ofrece café y te pregunta por tu familia. Luego, sin cambiar el tono:</p><p>«Mi sobrino Julián es ingeniero civil, muy capaz. <mark class="clave">Hay una plaza de ingeniero en el concurso, ¿no?</mark> Usted sabrá cómo ayudarlo. Yo siempre apoyo a la ORH en el concejo.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle con respeto que la ley de nepotismo impide contratar a su sobrino si él tiene injerencia, y que el concurso es público para todos.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: -1 }, rel: { regidor: -1 }, flags: ['regidor_ley'],
          out: 'El regidor deja de sonreír: «Yo no tengo injerencia en nada, señorita». Le dices que, aun así, el concurso es igual para todos y no puedes ayudar a nadie en particular. Te despide con frialdad.',
          pro: { ok: 'Respondes con la ley, sin acusar y sin prometer nada.', risk: 'Un regidor molesto puede complicarte la vida en el concejo.', info: 'Cuéntaselo a Marisol y déjalo por escrito: protege a la ORH y a ti.' },
          kusi: ['animo', 'Firme y respetuosa. ¡Bien!'] } },
      { id: 'b', label: 'Decirle que lo vas a ver, que mande el CV de su sobrino: no prometes nada, pero tampoco te cierras con un regidor.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { regidor: 1 }, flags: ['regidor_cede'],
          out: 'El regidor sonríe y te reenvía el CV en ese momento. Acabas de abrir una puerta que una auditoría sabría encontrar.',
          pro: { ok: 'Evitas un conflicto hoy.', risk: '«Lo voy a ver» suena a compromiso. En el Estado, recibir un CV por esa vía ya es un problema.' },
          kusi: ['preocupado', 'Ese «lo voy a ver» puede costar caro…'] } },
    ],
    rules: [[LEY, 'Ley 26771, modificada por la Ley 31299: prohibición de nepotismo hasta el cuarto grado de consanguinidad cuando hay injerencia directa o indirecta.']],
    mirada: {
      ve: 'En el Estado, la presión rara vez llega como una orden: llega como un favor amable, con un «usted sabrá». Una especialista de ORH responde con la ley, sin acusar, y deja constancia.',
      visual: { tipo: 'balanza', a: { t: '«Lo voy a ver»', items: ['El regidor queda contento', 'Evitas un roce'] }, b: { t: 'La ley, con respeto', items: ['Concurso igual para todos', 'La ORH protegida', 'Nada que esconder ante la Contraloría'] } },
      normas: [{ ley: 'Ley 26771, modificada por la Ley 31299', dice: 'Prohíbe a funcionarios con facultad de nombramiento o contratación, o con injerencia directa o indirecta, contratar a parientes hasta el cuarto grado de consanguinidad, segundo de afinidad y por matrimonio o unión de hecho.', practica: 'Un sobrino está en tercer grado de consanguinidad.' }],
    },
  },
  {
    id: 'o3', t: '14:30', ch: 'presencial', who: 'eder', titulo: 'Eder pide explicaciones', banner: 'assets/esc/dudas.webp', lugar: 'Ventanilla de la ORH', show: ['personas', 'cumplimiento', 'etica'],
    body: () => `<p>Eder Rojas, técnico en computación, espera en la ventanilla con una carpeta plastificada. Postuló al concurso anterior y fue descalificado en la evaluación curricular.</p><p>«Señorita, presenté todo. <mark class="clave">Nadie me dijo por qué me sacaron</mark>. ¿Es que ya tenían a alguien?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Buscar su expediente, mostrarle la matriz de evaluación y explicarle qué requisito no acreditó.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4, tiempo: -2 }, rel: { eder: 1 }, flags: ['eder_atendido'], cartera: { reclamo: 'Atendido: se le mostró su evaluación' },
          out: 'Encuentras el motivo: su constancia de experiencia no tenía fecha de término. Eder lo mira en silencio: «Era eso…». Le dices cómo presentarla en el nuevo concurso.',
          pro: { ok: 'Transparencia: le muestras el criterio y su aplicación.', info: 'Anota este caso: si muchos se caen por lo mismo, las bases deben explicarlo mejor.' },
          kusi: ['celebra', '¡La transparencia también calma!'] } },
      { id: 'b', label: 'Decirle que el concurso ya terminó y que puede presentarse al nuevo.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -2 }, flags: ['eder_ignorado'],
          out: 'Eder guarda su carpeta. Afuera, le cuenta a otro postulante que «todo está arreglado».',
          pro: { ok: 'Le das una salida.', risk: 'Sin explicación, la sospecha de que todo está arreglado crece, y se vuelve queja formal.' },
          kusi: ['triste', 'Sin respuesta, la desconfianza crece.'] } },
    ],
    rules: [[BP, 'Los criterios y resultados de un concurso público deben poder explicarse a cada postulante.']],
    mirada: {
      ve: 'La pregunta de Eder es la sospecha de mucha gente frente a los concursos públicos. Cada explicación clara, con la matriz en la mano, es una forma de devolver confianza en el Estado.',
      visual: { tipo: 'embudo', titulo: 'Concurso CAS 004-2026', niveles: [['Postulantes', 84], ['Pasan la evaluación curricular', 31], ['Entrevistados', 12], ['Ganadores', 3]] },
    },
  },
  {
    id: 'o4', t: '15:40', ch: 'documento', who: null, titulo: 'Lo que sostiene el concurso', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: () => `<p>Faltan 10 días para publicar. Hoy solo te alcanza para <mark class="clave">dos encargos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos encargos con los que empiezas.', boton: 'Empezar por aquí', resumen: 'Empezaste por',
    cols: ['Encargo', 'Por qué importa'],
    rows: [
      { id: 'pres', cells: ['Pedir la certificación presupuestal de las 12 plazas', 'Sin ella no se puede convocar'] },
      { id: 'perfiles', cells: ['Pedir a las gerencias los 7 perfiles que faltan', 'Sin perfiles no hay bases'] },
      { id: 'bonif', cells: ['Preparar la tabla de bonificaciones de ley', 'Discapacidad y licenciados de las FF.AA.'] },
      { id: 'afiche', cells: ['Diseñar un afiche para Facebook', 'Difusión'] },
      { id: 'archivo', cells: ['Ordenar el archivo de concursos de 2019', 'Orden'] },
    ],
    score: { pres: 3, perfiles: 3, bonif: 2, afiche: 0, archivo: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 3 : -1 },
        flags: picks.includes('pres') ? ['presupuesto_primero'] : [], cartera: { presupuesto: picks.includes('pres') ? 'Solicitud enviada hoy' : 'Pendiente', perfiles: picks.includes('perfiles') ? 'Memorando a las gerencias' : '5 de 12 recibidos' },
        out: picks.includes('pres') ? 'Presupuesto te responde que certificar 12 plazas toma cinco días hábiles. Si no lo pedías hoy, no llegabas.' : 'Avanzas, pero el presupuesto puede atrasar todo.',
        pro: { ok: 'Atiendes primero lo que depende de otras oficinas y tiene plazos propios.', info: 'Las bonificaciones se aplican sobre el puntaje final y deben estar en las bases.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Lo que depende de otros, primero.' : '¿Qué podía atrasar todo?'],
      };
    },
    rules: [[LEY, 'Bonificaciones en concursos públicos: 15 % para personas con discapacidad (Ley 29973) y 10 % para licenciados de las FF.AA. (Ley 29248).']],
    mirada: {
      ve: 'En el Estado, muchos plazos dependen de otras oficinas. Una especialista de ORH empieza por lo que está fuera de su control, para que el cronograma no se caiga.',
      visual: { tipo: 'linea', titulo: 'Diez días antes de publicar', hitos: [['Hoy', 'Presupuesto y perfiles'], ['Día 5', 'Certificación recibida'], ['Día 7', 'Bases aprobadas'], ['Día 10', 'Publicación en Talento Perú']] },
    },
  },
  {
    id: 'o5', t: '17:00', ch: 'correo', who: null, titulo: 'Dejarlo por escrito', banner: 'assets/esc/meta.webp', show: ['confianza', 'cumplimiento'],
    mail: { from: 'Marisol Chávez · Jefa de la ORH', to: 'Especialista de la ORH', asunto: 'Resumen del día' },
    body: () => `<p>Antes de irte, mándame un resumen de lo que pasó hoy. <mark class="clave">Si hubo algo delicado, también</mark>.</p><p>Marisol</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Avances del concurso, la visita al regidor tal como fue y el caso de Eder.',
        res: { q: 'buena', fx: { confianza: 5, cumplimiento: 4 }, rel: { marisol: 1 }, responde: 'Marisol: 1) Pedí la certificación presupuestal de las 12 plazas y los 7 perfiles faltantes. 2) El regidor Tello me pidió apoyar a su sobrino en la plaza de ingeniero; le expliqué la ley de nepotismo y que el concurso es igual para todos. 3) Atendí a Eder Rojas: fue descalificado porque su constancia no tenía fecha de término; se le mostró su evaluación.',
          out: 'Marisol responde: «Esto es exactamente lo que hay que dejar escrito. Gracias».', kusi: ['feliz', 'Lo escrito también te protege.'] } },
      { id: 'b', label: 'Solo los avances del concurso; lo del regidor mejor no ponerlo por escrito.',
        res: { q: 'aceptable', fx: { confianza: 1, cumplimiento: -2 }, responde: 'Marisol: pedí presupuesto y perfiles. Atendí a un postulante del concurso anterior.',
          out: 'Marisol no sabe lo del regidor. Si mañana él dice otra cosa, no habrá registro de lo que pasó.', kusi: ['pensando', 'Lo que no se escribe, no pasó…'] } },
    ],
    mirada: { ve: 'En el sector público, dejar constancia escrita de las presiones no es chisme: es protección para la institución y para quien la sirve.' },
  },
];
