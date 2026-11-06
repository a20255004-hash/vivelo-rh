// Asistente de Selección · Capítulo 4 · «La agenda imposible» · Semana 1, jueves · Clínica del Misti, Arequipa.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 29733 (protección de datos personales): compartir solo los datos necesarios y por canales controlados; los de salud son sensibles.
//   (Norma ya citada en el capítulo 1.)
// - Ley 26772: igualdad de trato en el acceso al empleo, ya citada en el capítulo 2.

export const CAP = {
  n: 4, titulo: 'La agenda imposible', dia: 'Semana 1, jueves', foto: 'assets/esc/reloj.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '06:00', fin: '18:30', cierreHora: '18:15',
  apertura: 'Jueves, seis de la mañana. Todavía está oscuro, hace frío y el cambio de turno de Enfermería llena los pasillos. Hoy tienes que armar la agenda de entrevistas de la próxima semana con evaluadoras que no tienen tiempo.', boton: 'Entrar con el cambio de turno',
  kusi: 'Coordinar es la mitad del trabajo de Selección. La otra mitad es volver a coordinar. ¡Dale!',
  lead: 'Entendiste cómo quiere entrevistar Sor Elena, armaste una agenda que respeta su horario y el de las postulantes, cuidaste los datos que pidió el proveedor y confirmaste a tiempo.',
  reflexion: '¿A quién se le hace difícil llegar a las seis de la mañana?',
  siguiente: { n: 5, titulo: 'La prueba', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Selección en 7 días hábiles' },
  { id: 'agenda', p: 'Agenda de entrevistas', j: 'Tú', d: 0, e: 'Semana 2, por armar' },
  { id: 'prov', p: 'Evaluaciones con Psicomet Sur', j: 'Tú', d: 0, e: 'Mañana viernes' },
  { id: 'jhon', p: 'Caso Jhon Ccori', j: 'Milena', d: 0, e: 'Pendiente GRE Puno' },
];

export const FUTURO = {
  sor_formato: ['Sabes cómo quiere entrevistar Sor Elena.', 'Lo usarás en las entrevistas del lunes.'],
  agenda_6am: ['La agenda tiene bloques de 6 a 7 con Sor Elena y bloques de tarde con las supervisoras.', 'El lunes empiezan las entrevistas.'],
  agenda_rigida: ['La agenda solo funciona si todas llegan a las 6.', 'Habrá ausencias el lunes.'],
  rosario_aliada: ['La Lic. Rosario entrevistará en el cambio de turno de la tarde.', 'Ahora es parte del proceso.'],
  datos_prov_min: ['A Psicomet Sur le mandaste solo lo necesario.', 'Nadie tendrá datos que no debe.'],
  datos_prov_todo: ['A Psicomet Sur le mandaste los CV completos.', 'Ya circulan fuera de la clínica.'],
  confirmadas: ['Confirmaste a tiempo y por escrito a las postulantes de mañana.', 'Menos ausencias en la prueba.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  sup: { n: 'Supervisoras de piso', sub: 'Grupo de Enfermería', c: '#7CC6EA' },
  psico: { n: 'Karen Valdivia', sub: 'Psicomet Sur · evaluaciones', c: '#9B6FB0' },
  angel: { n: 'Ángel Mamani', sub: 'Postulante', who: 'angel' },
};

export const WSP = [
  { chat: 'sor', t: '05:52', de: 'Sor Elena', txt: 'Ya estoy en la estación del 3. Si vienes, ven ahora, hija. A las 7 empieza la visita médica.' },
  { chat: 'milena', t: '07:20', de: 'Milena', txt: 'La GRE Puno respondió que necesitan una solicitud formal. Ya la mandé. Puede tardar 🙃', si: 'jhon_verificado' },
  { chat: 'milena', t: '07:20', de: 'Milena', txt: 'Sor Elena me preguntó por el chico de Juliaca. Le dije que lo descartamos y se quedó callada…', si: 'jhon_descartado' },
  { chat: 'sup', t: '10:35', de: 'Lic. Rosario', txt: 'Chicas, ¿alguien puede entrevistar? Selección necesita manos 🙋‍♀️' },
  { chat: 'psico', t: '12:20', de: 'Karen', txt: 'Hola 👋 Para mañana necesito la lista de evaluadas. Mándame los CV completos, así las conozco antes.' },
  { chat: 'angel', t: '16:40', de: 'Ángel', txt: 'Confirmado, señorita. Mañana 8:00 en el auditorio. Llevo mi DNI 👍', si: 'confirmadas' },
];

export const CORREOS = [
  { t: '07:30', de: 'Dr. Fernando Linares', para: 'Selección', asunto: 'Entrevistas', html: '<p>Todas las entrevistas tienen que estar cerradas el miércoles de la próxima semana. El jueves quiero la lista final. Sin excusas de agenda.</p><p>F. Linares</p>' },
  { t: '14:10', de: 'Karen Valdivia · Psicomet Sur', para: 'Selección', asunto: 'Datos recibidos', html: '<p>Recibimos la lista con nombres, DNI y horario. Gracias por mandarla ordenada. Mañana llegamos a las 7:30.</p>', si: 'datos_prov_min' },
];

export const QUIZ = [
  { q: 'La jefa de Enfermería solo puede entrevistar de 6 a 7. ¿Qué haces?', ops: ['Le exiges más tiempo', 'Armas bloques cortos en su horario y sumas otras evaluadoras en otros horarios con el mismo formato', 'Entrevistas tú sola', 'Pospones todo'], ok: 1, por: 'La agenda se adapta a quien evalúa y se reparte con un formato común.' },
  { q: 'El proveedor de evaluaciones pide los CV completos. ¿Qué le mandas?', ops: ['Todo, es un proveedor', 'Solo los datos necesarios para evaluar: nombre, DNI y horario', 'Nada', 'Los CV por WhatsApp'], ok: 1, por: 'Ley 29733: solo los datos necesarios para la finalidad.' },
  { q: '¿Por qué confirmar por escrito a cada postulante?', ops: ['Por costumbre', 'Para que tenga hora, lugar y qué llevar, y reducir ausencias', 'Para tener su número', 'No hace falta'], ok: 1, por: 'Una confirmación clara reduce ausencias y confusión.' },
  { q: 'Si varias personas entrevistan, lo más importante es que…', ops: ['Cada una pregunte lo que quiera', 'Usen las mismas preguntas y criterios', 'Sean todas de la misma edad', 'Entrevisten por WhatsApp'], ok: 1, por: 'Mismas preguntas, mismos criterios: así el proceso es comparable y justo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '06:05', ch: 'presencial', who: 'sor', titulo: 'Cinco minutos a las seis', banner: 'assets/3d/scenes/hospital.webp', lugar: 'Estación de Enfermería, piso 3', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Sor Elena revisa el kárdex con una lámpara pequeña. ${F.has('sor_escuchada') ? '«Ah, la que pregunta. Pasa.»' : '«¿Selección? Rápido, hija.»'} Solo puede entrevistar de 6 a 7, antes de la visita médica.</p><p>Tienes tiempo para <mark class="clave">dos preguntas</mark> sobre cómo quiere entrevistar.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'que', label: '¿Qué tiene que ver usted en una entrevista para decir que sí?', info: '«Que me cuente un caso real de un paciente que empeoró y qué hizo. Si solo me recita el manual, no.»' },
      { id: 'cuantas', label: '¿Cuántas entrevistas por mañana puede hacer sin apurarse?', info: '«Tres. De veinte minutos. Si me pones cinco, las últimas dos las voy a hacer mal.»' },
      { id: 'otras', label: '¿Confía en que otras supervisoras entrevisten con su mismo formato?', info: '«En Rosario sí. Es joven, pero sabe mirar. Que use mis preguntas.»' },
      { id: 'jhon', label: '¿Usted conoce a Jhon Ccori, el de Juliaca?', info: '«No lo conozco. Me lo nombraron. Si tiene título y sabe, que venga. Si no tiene título, ni me lo traigas.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, calidad: picks.includes('jhon') ? 0 : 3 }, rel: { sor: 1 },
      flags: picks.includes('jhon') ? [] : ['sor_formato'],
      out: picks.includes('jhon') ? 'Sor Elena te despide cuando entra el médico. Sabes lo que piensa de Jhon, pero no cómo armar sus mañanas.' : 'Anotas en tu libreta: «3 por mañana, 20 minutos, un caso real». La visita médica entra al pasillo y Sor Elena se va con ellos.',
      kusi: ['curioso', picks.includes('jhon') ? 'Interesante, pero no era lo urgente.' : '¡Ya tienes las reglas de su agenda!'],
    }),
    mirada: { ve: 'Antes de armar una agenda, pregunta a quien evalúa cómo evalúa. Tres entrevistas bien hechas valen más que cinco apuradas.' },
  },
  {
    id: 'd2', t: '08:30', ch: 'documento', who: null, titulo: 'La agenda', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de Selección', show: ['tiempo', 'calidad', 'personas'],
    body: (n, F) => `<p>Linares quiere todas las entrevistas cerradas el miércoles. ${F.has('sor_formato') ? 'Sor Elena puede tres por mañana.' : 'No sabes bien cuántas puede Sor Elena.'} Hay 64 verificadas y varias postulantes vienen de Mollendo, Juliaca o trabajan noches en otras clínicas.</p><p><mark class="clave">Arma la agenda por bloques</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la agenda.', boton: 'Guardar la agenda',
    bloques: [
      { id: 'quien', t: 'Quién entrevista', n: 2, ops: [
        { id: 'q1', t: 'Sor Elena de 6:00 a 7:00, tres entrevistas de 20 minutos.', ok: true, por: 'Su horario, su ritmo.' },
        { id: 'q2', t: 'La Lic. Rosario y otra supervisora en el cambio de turno de la tarde, con el formato de Sor Elena.', ok: true, por: 'Más manos, mismo criterio.' },
        { id: 'q3', t: 'Tú sola, para avanzar rápido.', ok: false, por: 'La decisión técnica es de Enfermería.' },
      ] },
      { id: 'cand', t: 'Para las postulantes', n: 2, ops: [
        { id: 'c1', t: 'Ofrecer dos horarios a elegir, de mañana o de tarde.', ok: true, por: 'Quien sale de una guardia de noche no llega a las 6.' },
        { id: 'c2', t: 'Entrevista por videollamada para quienes viven fuera de Arequipa, como primera etapa.', ok: true, por: 'Un pasaje de Juliaca no debería decidir quién pasa.' },
        { id: 'c3', t: 'Todas a las 6:00: si no llegan, no les interesa.', ok: false, por: 'Mides quién vive cerca, no quién cuida bien.' },
      ] },
      { id: 'form', t: 'Formato', n: 1, ops: [
        { id: 'f1', t: 'Las mismas cuatro preguntas para todas, incluida la del caso real.', ok: true, por: 'Así se puede comparar.' },
        { id: 'f2', t: 'Que cada evaluadora pregunte lo que crea.', ok: false, por: 'Sin formato común no hay comparación justa.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 4 : 1, personas: q === 'riesgosa' ? -3 : 3 },
        flags: q === 'riesgosa' ? ['agenda_rigida'] : ['agenda_6am'], cartera: { agenda: q === 'riesgosa' ? 'Agenda rígida: todo a las 6' : '64 entrevistas en 3 días, mañana y tarde' },
        out: q === 'buena' ? 'Las cuentas cierran: 9 por mañana con Sor Elena y otras supervisoras, 12 por tarde, videollamadas para las de fuera. El miércoles terminas.' : q === 'aceptable' ? 'La agenda casi cierra, aunque alguna pieza va a fallar el lunes.' : 'La agenda se ve ordenada en el Excel. El lunes será otra cosa.',
        pro: { ok: 'Una agenda realista respeta a quien evalúa y a quien postula.', risk: 'Una agenda que solo funciona si todos llegan a las 6 deja fuera a quienes trabajan de noche: justo la experiencia que buscas.', info: 'Deja dos espacios libres por día para reprogramar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Agenda posible!' : 'Algo va a romperse.'],
      };
    },
    mirada: { ve: 'La agenda «imposible» se vuelve posible cuando dejas de pedirle a una sola persona que lo haga todo. Repartir con un formato común mantiene el criterio de Sor Elena sin quemarla.', visual: { tipo: 'linea', titulo: 'Semana de entrevistas', hitos: [['Lunes', '6:00 Sor Elena · 15:00 supervisoras'], ['Martes', 'Igual + videollamadas'], ['Miércoles', 'Últimas y reprogramadas'], ['Jueves', 'Lista final para Linares']] } },
  },
  {
    id: 'd3', t: '10:40', ch: 'whatsapp', who: null, titulo: 'Manos en el grupo', banner: 'assets/foto2/mesa-mujeres.webp', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>La Lic. Rosario se ofrece en el grupo de supervisoras para entrevistar. Otras dos responden con emojis de risa: «¿Y quién cubre el piso?».</p><p><mark class="clave">Escribe al grupo</mark> para sumar evaluadoras sin que suene a carga extra.</p>`,
    type: 'compose', enviaA: 'sup', para: 'Para: Supervisoras de piso', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'pide', t: 'El pedido', ops: [
        { id: 'p1', t: 'Necesitamos dos supervisoras para entrevistar en el cambio de turno de la tarde, lunes a miércoles, 3:00 a 4:00.', ok: true, por: 'Concreto: quién, cuándo, cuánto.' },
        { id: 'p2', t: '¿Alguien que tenga tiempo para ayudar con entrevistas?', ok: false, por: 'Nadie en un piso de hospitalización tiene «tiempo».' },
      ] },
      { id: 'apoyo', t: 'Lo que les das', ops: [
        { id: 'a1', t: 'Llevan las preguntas de Sor Elena impresas y yo tomo las notas.', ok: true, por: 'Les quitas trabajo.' },
        { id: 'a2', t: 'Pueden preguntar lo que quieran, confío en ustedes 😊', ok: false, por: 'Amable, pero sin formato común.' },
      ] },
      { id: 'gracias', t: 'Cierre', ops: [
        { id: 'g1', t: 'Rosario, gracias por ofrecerte primero 🙌', ok: true, por: 'Reconoces a quien dio el paso.' },
        { id: 'g2', t: 'Es pedido de gerencia, así que porfa colaboren.', ok: null, por: 'Cierto, pero suena a orden.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'a1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, calidad: sel.apoyo === 'a1' ? 3 : -2 }, flags: q === 'riesgosa' ? [] : ['rosario_aliada'],
        out: q === 'buena' ? 'Rosario responde «¡Yo!» y la Lic. Pilar, del segundo piso, se suma: «Si tú tomas las notas, voy».' : q === 'aceptable' ? 'Rosario se suma. Las demás dejan el mensaje en visto.' : 'El mensaje se pierde entre fotos de un cumpleaños.',
        pro: { ok: 'Un pedido concreto, con apoyo real, consigue manos.', info: 'Agradece en público a quien da el primer paso: anima a las demás.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Equipo armado!' : 'Faltó algo concreto.'],
      };
    },
    mirada: { ve: 'Las supervisoras no rechazan la tarea por flojera: rechazan la incertidumbre. Cuando saben cuánto dura, qué preguntar y que alguien toma las notas, el «no tengo tiempo» se vuelve «yo puedo una hora».' },
  },
  {
    id: 'd4', t: '12:30', ch: 'whatsapp', who: null, titulo: '«Mándame los CV completos»', banner: 'assets/foto2/revisan.webp', show: ['cumplimiento', 'etica', 'tiempo'],
    body: (n, F) => `<p>Karen, de Psicomet Sur, la empresa que tomará las pruebas mañana, pide «los CV completos, así las conozco antes». Los CV tienen DNI, dirección, estado civil y, algunos, datos de salud.</p><p>${F.has('dni_grupo') ? 'Recuerdas la cara de Milena el martes.' : 'Ya pasaste por algo parecido el lunes.'} <mark class="clave">¿Qué le mandas?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Una lista con nombre, DNI y horario de cada evaluada, por el correo de la clínica. Los CV no salen.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, tiempo: -1 }, flags: ['datos_prov_min'], cartera: { prov: 'Lista mínima enviada por correo' },
          envia: ['psico', 'Hola Karen. Te mando por correo la lista con nombre, DNI y horario. Para la prueba no necesitan los CV: así evaluamos a todas sin ideas previas 🙂'],
          out: 'Karen responde «perfecto, así es mejor, sin sesgos». Te sorprende: el argumento le gustó.',
          pro: { ok: 'Un proveedor recibe solo lo que necesita para su tarea.', info: 'Pregunta a Milena si el contrato con Psicomet tiene una cláusula de confidencialidad.' },
          kusi: ['celebra', 'Datos justos, y encima menos sesgo.'] } },
      { id: 'b', label: 'Mandarle los CV completos por WhatsApp: es un proveedor contratado por la clínica.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -4, tiempo: 2 }, flags: ['datos_prov_todo'], cartera: { prov: 'CV completos enviados por WhatsApp' },
          envia: ['psico', '📎 64 CV_verificadas.pdf'],
          out: 'Karen responde con un pulgar. Ahora 64 CV con datos de salud están en el celular de alguien que no trabaja en la clínica.',
          pro: { ok: 'Rápido.', risk: 'Que sea proveedor no le da derecho a todos los datos. Y WhatsApp no es un canal controlado.' },
          kusi: ['preocupado', 'Otra vez los datos por WhatsApp…'] } },
      { id: 'c', label: 'Decirle que no puedes mandar nada y que traiga ella su propia lista.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, tiempo: -3 },
          out: 'Karen llama a Milena, confundida: «¿Entonces cómo sé a quién evalúo?». Milena le manda la lista ella misma.',
          pro: { ok: 'No expones datos.', risk: 'Sin la lista mínima, el proveedor no puede hacer su trabajo.' },
          kusi: ['pensando', 'Ni todo ni nada: lo necesario.'] } },
    ],
    rules: [[LEY, 'Ley 29733: se comparten solo los datos necesarios para la finalidad, por canales controlados.']],
    mirada: { ve: 'El principio es el mismo con supervisoras, proveedores o gerentes: cada uno recibe lo que necesita para su parte. Mandar menos datos, además, hace la evaluación más justa: nadie llega con ideas previas.', visual: { tipo: 'balanza', a: { t: 'CV completo', items: ['DNI y dirección', 'Estado civil', 'Datos de salud', 'Foto'] }, b: { t: 'Lista para la prueba', items: ['Nombre', 'DNI', 'Horario'] } } },
  },
  {
    id: 'd5', t: '15:40', ch: 'llamada', who: null, titulo: 'Confirmar mañana', banner: 'assets/foto2/callcenter.webp', show: ['tiempo', 'personas', 'calidad'],
    body: () => `<p>Mañana viernes, 40 postulantes dan la prueba escrita y la práctica de signos vitales. Llamas para confirmar a quienes no respondieron el correo.</p><p>Tres llamadas. <mark class="clave">Decide cómo cierras cada confirmación</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Yesenia Apaza · 27 años', 'No contesta la llamada; a los dos minutos llega un SMS', '«Disculpe, tengo hipoacusia y no escucho bien por teléfono. ¿Me puede escribir? ¿La prueba tiene parte oral?»'],
      ['Doris Quispe · madre de dos', 'Contesta con un bebé llorando', '«Sí voy, señorita, pero ¿a qué hora termina? Tengo que recoger a mi hijo del nido a la una.»'],
      ['Ángel Mamani', 'Contesta al primer timbre', '«¡Sí, señorita! ¿Qué tengo que llevar? ¿Hay que ir con uniforme? ¿Y si llego antes?»'],
    ],
    prompt: '¿Cómo cierras las tres confirmaciones?',
    choices: [
      { id: 'a', label: 'A las tres, por escrito: hora, lugar, qué llevar y hora de término. A Yesenia, además, le preguntas qué ajuste necesita y se lo avisas a Psicomet.',
        res: { q: 'buena', fx: { personas: 5, calidad: 3, tiempo: -2 }, rel: { angel: 1 }, flags: ['confirmadas'],
          envia: ['angel', 'Ángel: mañana 8:00, auditorio del primer piso. Trae DNI y lapicero. No hace falta uniforme. Terminamos a las 12:30.'],
          out: 'Yesenia responde: «Que me den las instrucciones por escrito y que me miren cuando hablen. Gracias por preguntar». Lo anotas para Karen.',
          pro: { ok: 'Lo mismo para todas, y un ajuste para quien lo necesita.', info: 'Preguntar «¿qué necesitas?» es mejor que suponer.' },
          kusi: ['celebra', '¡Nadie llega con dudas!'] } },
      { id: 'b', label: 'Confirmar a Doris y a Ángel por teléfono. A Yesenia decirle por SMS que la prueba es igual para todas.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -3 },
          out: 'Yesenia responde «ok». Mañana llegará sin saber si podrá seguir las instrucciones habladas.',
          pro: { ok: 'Rápido.', risk: '«Igual para todas» no es justo cuando una persona no puede escuchar las instrucciones.' },
          kusi: ['preocupado', 'Igual no siempre es justo.'] } },
    ],
    rules: [[BP, 'Confirma por escrito: hora, lugar, qué llevar y hora de término. Pregunta si alguien necesita un ajuste.']],
    mirada: { ve: 'Una buena confirmación responde las preguntas antes de que te las hagan. Y cuando alguien te dice lo que necesita, la mejor respuesta es avisarlo a quien organiza la prueba.' },
  },
  {
    id: 'd6', t: '17:50', ch: 'presencial', who: 'milena', titulo: 'Fin del jueves', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería de la clínica', show: ['confianza', 'tiempo'],
    body: (n, F) => `<p>Milena te invita un queso helado en la cafetería, la del ventanal que da al Misti. ${F.has('agenda_6am') ? '«Vi la agenda. Linares no va a poder decir nada.»' : '«La agenda me preocupa un poco, ¿la revisamos el lunes temprano?»'}</p><p>«Mañana es la prueba. <mark class="clave">¿Qué te preocupa?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Contarle que Yesenia necesita un ajuste y preguntarle cómo lo maneja la clínica.',
        res: { q: 'buena', fx: { confianza: 3, personas: 2 }, rel: { milena: 1 },
          out: '«Bien que lo preguntes. Mañana revisamos con Karen la prueba. Ojo que la batería de Psicomet es vieja, hay que leerla antes de que la tomen.»', kusi: ['curioso', 'Mañana hay que leer la prueba.'] } },
      { id: 'b', label: 'Decirle que nada, que todo está bajo control.',
        res: { q: 'aceptable', fx: { confianza: 0 }, out: 'Milena sonríe: «Ojalá». Terminan el queso helado hablando de otra cosa.', kusi: ['pensando', 'Algo sí te preocupaba…'] } },
    ],
    mirada: { ve: 'Contar lo que te preocupa a tiempo no es debilidad: es lo que evita sorpresas el día de la prueba.' },
  },
];
