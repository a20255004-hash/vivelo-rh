// Asistente de Selección · Capítulo 3 · «El título» · Semana 1, miércoles · Clínica del Misti, Arequipa.
// Normas y fuentes:
// - Consulta pública de títulos de institutos tecnológicos y pedagógicos (Minedu). Para títulos emitidos antes de 2016,
//   la guía indica consultar a la DRE o GRE de la jurisdicción del instituto.
//   https://www.gob.pe/941-consultar-titulos-de-instituciones-tecnologicas-y-pedagogicas
//   https://www.minedu.gob.pe/superiortecnologica/sistema-informacion.php
// - Ley 30512 (Ley de Institutos y Escuelas de Educación Superior) y D.S. 010-2017-MINEDU: marco del registro de títulos de institutos.
// - Ley 29733 (datos personales), ya citada en el capítulo 1.

export const CAP = {
  n: 3, titulo: 'El título', dia: 'Semana 1, miércoles', foto: 'assets/foto/revisa.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '07:30', fin: '18:30', cierreHora: '18:20',
  apertura: 'Miércoles. 412 postulaciones en el portal. Milena te enseña a verificar títulos y a las nueve ya tienes la primera sorpresa: el mejor CV de todos no aparece en el registro.', boton: 'Abrir la bandeja',
  kusi: 'Verificar no es desconfiar: es cuidar a los pacientes que vendrán. ¡Dale!',
  lead: 'Ordenaste la verificación, no condenaste a nadie por un dato que faltaba, atendiste a quien llegó sin cita y detectaste una constancia que no cuadraba.',
  reflexion: '¿Qué diferencia hay entre «no aparece» y «es falso»?',
  siguiente: { n: 4, titulo: 'La agenda imposible', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Selección en 8 días hábiles' },
  { id: 'verif', p: 'Verificación de títulos', j: 'Tú', d: 0, e: '96 preseleccionados' },
  { id: 'jhon', p: 'Caso Jhon Ccori', j: 'Tú', d: 0, e: 'Título no aparece' },
  { id: 'constancias', p: 'Constancias de trabajo', j: 'Tú', d: 0, e: 'Por revisar' },
];

export const FUTURO = {
  verif_ordenada: ['Tienes un orden claro para verificar.', 'Lo usarás con cada nuevo preseleccionado.'],
  jhon_verificado: ['Pediste confirmación a la GRE Puno antes de decidir sobre Jhon.', 'La respuesta llegará en la semana 2.'],
  jhon_descartado: ['Descartaste a Jhon porque su título no apareció en la consulta.', 'Quizá era un error del registro.'],
  jhon_pasa: ['Dejaste pasar a Jhon sin verificar su título.', 'Si algo sale mal, la firma es de Selección.'],
  angel_atendido: ['Atendiste a Ángel cuando llegó sin cita y le explicaste el proceso.', 'Llegará más tranquilo a la evaluación.'],
  constancia_dudosa: ['Detectaste una constancia de trabajo que no cuadra.', 'Habrá que preguntar con cuidado.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  sup: { n: 'Supervisoras de piso', sub: 'Grupo de Enfermería', c: '#7CC6EA' },
  jhon: { n: 'Jhon Ccori', sub: 'Postulante · Juliaca', c: '#5B7A99' },
  angel: { n: 'Ángel Mamani', sub: 'Postulante', who: 'angel' },
};

export const WSP = [
  { chat: 'milena', t: '07:35', de: 'Milena', txt: 'Hoy toca verificar 🔍 Regla de oro: lo que no se verifica, no pasa. Y lo que no aparece, se pregunta.' },
  { chat: 'sup', t: '08:20', de: 'Lic. Rosario', txt: 'Vi en el Facebook que hay hombres molestos por el aviso 😬 ¿Qué pasó?', si: 'aviso_mujeres' },
  { chat: 'sup', t: '08:20', de: 'Lic. Rosario', txt: 'Mi prima postuló anoche. Dice que el aviso es el primero que dice la verdad del turno noche 😂', si: 'aviso_claro' },
  { chat: 'sor', t: '10:30', de: 'Sor Elena', txt: 'Me dicen que hay un muchacho de Juliaca con mucha experiencia. Ojalá sea cierto, hija. Necesitamos gente que sepa.' },
  { chat: 'angel', t: '16:05', de: 'Ángel', txt: 'Gracias por atenderme hoy, señorita. Ya entendí. Voy a estudiar para la prueba 🙏', si: 'angel_atendido' },
];

export const CORREOS = [
  { t: '07:45', de: 'Portal de empleo', para: 'seleccion@clinicamisti.pe', asunto: 'Su aviso tiene 412 postulaciones', html: '<p>Su aviso «Técnico(a) de enfermería · Hospitalización» recibió 412 postulaciones. 96 cumplen las preguntas filtro.</p>' },
  { t: '17:30', de: 'Jhon Ccori', para: 'Selección', asunto: 'Mi título', html: '<p>Buenas tardes. Me titulé en 2014 en un instituto de Juliaca. Adjunto foto del diploma. Si necesitan algo más, viajo mañana mismo.</p><p>Jhon</p>', no: 'jhon_descartado' },
];

export const QUIZ = [
  { q: 'El título de un técnico egresado de un instituto en 2020 no aparece en la consulta del Minedu. ¿Qué haces?', ops: ['Lo descartas', 'Le pides el documento y consultas al instituto o al Minedu antes de decidir', 'Lo das por bueno', 'Lo publicas en el grupo'], ok: 1, por: 'Que no aparezca no prueba que sea falso: se verifica antes de decidir.' },
  { q: 'Para títulos de institutos emitidos antes de 2016, la guía de gob.pe sugiere consultar…', ops: ['A la Sunedu', 'A la DRE o GRE de la jurisdicción del instituto', 'Al colegio profesional', 'A la Policía'], ok: 1, por: 'La guía de consulta de títulos indica que los títulos anteriores a 2016 se consultan en la DRE o GRE correspondiente.' },
  { q: 'Una constancia de trabajo dice «técnico de enfermería» pero la empresa es una farmacia. ¿Qué haces?', ops: ['La aceptas', 'La descartas', 'Preguntas al postulante y verificas con la empresa qué funciones tenía', 'Lo acusas de mentir'], ok: 2, por: 'Una inconsistencia se pregunta y se verifica. No es una acusación.' },
  { q: 'Alguien llega sin cita a preguntar por su postulación. ¿Qué es lo mejor?', ops: ['No atenderlo', 'Atenderlo unos minutos, explicar el proceso igual que a todos y no adelantar resultados', 'Prometerle que pasa', 'Pedirle que espere todo el día'], ok: 1, por: 'Información igual para todos, sin promesas.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:50', ch: 'documento', who: 'milena', titulo: 'Cómo se verifica', banner: 'assets/foto/cv-mano.webp', lugar: 'Oficina de Selección', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>${F.has('filtro_criterio') ? 'De tus 71 CV del lunes y los nuevos del portal salen 96 preseleccionados.' : 'Entre lo del lunes y lo del portal hay 96 preseleccionados.'} Milena acerca su silla, con un termo de mate de coca.</p><p>«Antes de que alguien de Enfermería pierda su tiempo entrevistando, <mark class="clave">verificamos en orden</mark>. ¿Cómo lo harías tú?»</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la verificación. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'dni', t: 'Confirmar que el nombre del CV coincide con el DNI', por: 'Todo lo demás se busca con ese nombre.' },
      { id: 'tit', t: 'Buscar el título en la consulta pública de títulos del Minedu', por: 'Es el requisito indispensable.' },
      { id: 'falta', t: 'Si no aparece, pedir el documento y consultar al instituto o a la DRE/GRE', por: 'No aparecer no es lo mismo que ser falso.' },
      { id: 'exp', t: 'Revisar constancias de experiencia y sus fechas', por: 'Lo deseable, después de lo indispensable.' },
      { id: 'reg', t: 'Anotar el resultado y la fuente en la matriz, sin opiniones', por: 'Que otra persona pueda revisarlo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'buena' ? 2 : 0 }, rel: { milena: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['verif_ordenada'], cartera: { verif: q === 'riesgosa' ? 'Sin orden claro' : 'Orden de verificación definido' },
        out: q === 'buena' ? 'Milena pega tu orden en el borde del monitor con cinta: «Esto le sirve a cualquiera que venga después».' : 'Milena cambia un par de pasos de lugar: «Primero lo indispensable. Lo deseable, después».',
        pro: { ok: 'Un orden fijo evita saltarse pasos cuando hay apuro.', info: 'Guarda la captura de cada consulta: es tu prueba de que verificaste.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Paso a paso, sin atajos!' : 'El orden importa.'],
      };
    },
    mirada: { ve: 'Verificar en el mismo orden con todos es justo y rápido. Lo indispensable va primero; lo que no aparece se pregunta antes de decidir.', visual: { tipo: 'flujo', titulo: 'La verificación', pasos: ['DNI', 'Título en el Minedu', 'Si falta, preguntar', 'Experiencia', 'Anotar con fuente'], aqui: 1 } },
  },
  {
    id: 'c2', t: '09:20', ch: 'sistema', who: null, titulo: 'No aparece', banner: 'assets/esc/lupa.webp', lugar: 'Consulta pública de títulos', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Jhon Ccori, 34 años, de Juliaca: ocho años en hospitalización en una clínica de Puno, cartas de felicitación, un CV impecable. Es el mejor de los 96.</p><p>Pones su DNI en la consulta de títulos del Minedu. <mark class="clave">«No se encontraron resultados.»</mark> Sor Elena ya preguntó por él.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Dejarlo en «pendiente de verificación»: pedirle una copia del diploma y escribir a la GRE Puno, porque se tituló en 2014.',
        res: { q: 'buena', fx: { cumplimiento: 4, calidad: 3, tiempo: -2 }, flags: ['jhon_verificado'], cartera: { jhon: 'Pendiente: consulta enviada a la GRE Puno' },
          out: 'Milena asiente: «Los títulos antiguos de institutos a veces no están en la consulta en línea». Jhon sigue en el proceso, con una condición clara.',
          pro: { ok: 'No condenas a nadie por una búsqueda vacía y tampoco lo das por bueno.', risk: 'La respuesta de la GRE puede tardar y el reloj corre.', info: 'Anota la fecha en que pediste la confirmación.' },
          kusi: ['animo', 'Ni culpable ni aprobado: pendiente.'] } },
      { id: 'b', label: 'Descartarlo: si no está en el registro, no cumple el requisito indispensable.',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -2, tiempo: 2 }, flags: ['jhon_descartado'], cartera: { jhon: 'Descartado por no aparecer' },
          out: 'Lo marcas como «no cumple». A las 10:30, Sor Elena pregunta por él en el WhatsApp. No sabes qué responderle.',
          pro: { ok: 'Eres estricta con lo indispensable.', risk: 'Una consulta vacía puede ser un vacío del registro y no un título falso.' },
          kusi: ['preocupado', '¿Y si el error era del registro?'] } },
      { id: 'c', label: 'Dejarlo pasar: con ocho años de experiencia es obvio que tiene título y Sor Elena lo quiere.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, calidad: -1 }, flags: ['jhon_pasa'], cartera: { jhon: 'Pasa sin verificar' },
          out: 'Jhon pasa a la agenda de entrevistas. En la matriz, su casilla de «título verificado» queda en blanco.',
          pro: { ok: 'No pierdes a un buen candidato.', risk: 'En salud, un título no verificado es un riesgo para pacientes y para la clínica.' },
          kusi: ['indignado', '¡Lo indispensable no se supone!'] } },
    ],
    rules: [[BP, 'Lo que no aparece en un registro se pregunta y se verifica antes de decidir.']],
    mirada: {
      ve: 'Una búsqueda vacía tiene muchas explicaciones: un título antiguo, un nombre mal escrito, un registro incompleto… o un título falso. Tu trabajo no es adivinar cuál es: es averiguarlo antes de que alguien atienda pacientes.',
      visual: { tipo: 'balanza', a: { t: 'Descartar o aprobar ya', items: ['Rápido', 'Puede ser injusto', 'Puede ser peligroso'] }, b: { t: 'Pendiente de verificación', items: ['Pide el documento', 'Consulta a la GRE', 'Decide con la respuesta'] } },
      normas: [{ ley: 'Consulta de títulos de institutos (Minedu, gob.pe)', dice: 'Los títulos de institutos tecnológicos se pueden consultar en línea; para los emitidos antes de 2016, la guía indica acudir a la DRE o GRE de la jurisdicción del instituto.', practica: 'Un técnico titulado en 2014 en Juliaca puede no aparecer en la consulta en línea sin que su título sea falso.' }],
    },
  },
  {
    id: 'c3', t: '11:15', ch: 'llamada', who: null, titulo: 'Tres llamadas para verificar', banner: 'assets/foto/llamada.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>Para avanzar con la verificación de experiencia, haces tres llamadas a empleadores que figuran en los CV.</p><p>Escuchas lo que te dicen y <mark class="clave">decides qué anotas</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Clínica de Puno · RR.HH.', 'Contesta una asistente con prisa', '«Sí, el señor Ccori trabajó con nosotros de 2016 a 2024 en hospitalización. Más no le puedo decir por teléfono, mándenos un correo.»'],
      ['Botica en Cerro Colorado', 'Contesta el dueño', '«¿Técnica de enfermería? No, señorita, ella era cajera. A veces ponía inyecciones, pero era cajera.»'],
      ['Instituto de Juliaca · Secretaría', 'Música de espera, luego una señora amable', '«Los títulos de esa época se registraban en la GRE Puno. Escriba a la GRE, ellos le confirman.»'],
    ],
    prompt: '¿Qué anotas en la matriz?',
    choices: [
      { id: 'a', label: 'Lo que cada fuente confirmó, con fecha y nombre de quien atendió, y lo que queda pendiente (correo a Puno, consulta a la GRE, pregunta a la cajera).',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 2 }, flags: ['constancia_dudosa'], cartera: { constancias: '1 constancia no cuadra: cajera, no técnica' },
          out: 'La matriz queda con tres columnas nuevas: «confirmado», «fuente» y «pendiente». Milena la mira: «Esto ya parece un proceso».',
          pro: { ok: 'Anotas hechos y fuentes, y separas lo confirmado de lo pendiente.', info: 'Lo que te dicen por teléfono también es un dato: anota quién lo dijo y cuándo.' },
          kusi: ['celebra', '¡Hechos con fuente!'] } },
      { id: 'b', label: 'Anotar «Ccori OK», «cajera: mintió» e «instituto: no sabe».',
        res: { q: 'riesgosa', fx: { calidad: -3, etica: -3 }, flags: ['constancia_dudosa'],
          out: 'Tu matriz tiene tres juicios y ninguna fuente. Si alguien la lee mañana, «mintió» será lo primero que vea.',
          pro: { ok: 'Rápido.', risk: 'Una etiqueta como «mintió» en un registro puede perseguir a alguien sin que tenga oportunidad de explicar.' },
          kusi: ['preocupado', '«Mintió» no es un hecho todavía.'] } },
    ],
    rules: [[BP, 'Anota qué se confirmó, quién lo confirmó y cuándo. Los juicios no van en la matriz.']],
    mirada: { ve: 'La dueña de la botica dio un dato importante, pero no te dijo que la postulante mintió: quizás llamó «técnica» a lo que hacía, o quizás sí exageró. Eso se pregunta. La matriz guarda hechos.', visual: { tipo: 'cambio', titulo: 'De juicio a hecho', pares: [['«Ccori OK»', 'Puno confirma 2016-2024 por teléfono; pide correo'], ['«Mintió»', 'Botica dice: cargo de cajera'], ['«No sabe»', 'Instituto deriva a la GRE Puno']] } },
  },
  {
    id: 'c4', t: '13:10', ch: 'presencial', who: 'angel', titulo: 'Sin cita', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo de Selección', show: ['personas', 'tiempo'],
    body: (n, F) => `<p>Vuelves del almuerzo y encuentras a un muchacho sentado en el pasillo con un fólder manila en las rodillas. Es Ángel Mamani. ${F.has('angel_animado') ? '«Usted me dijo que postule, señorita…»' : '«Postulé anoche, pero no sé si me llegó…»'}</p><p>Vino en dos combis desde Cerro Colorado. <mark class="clave">Trajo todos sus papeles</mark>, en orden, con una foto carné engrapada.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Atenderlo diez minutos: confirmar que su postulación llegó, explicarle las etapas y decirle que le escribirán por el mismo canal que a todos.',
        res: { q: 'buena', fx: { personas: 4, tiempo: -2 }, rel: { angel: 1 }, flags: ['angel_atendido'],
          out: 'Ángel respira por primera vez. «¿Entonces el viernes hay prueba? Ya.» Se va sin dejarte el fólder: le dijiste que no hace falta.',
          pro: { ok: 'Le das la misma información que a todos, en persona.', info: 'No recibas documentos fuera del proceso: luego nadie sabe dónde quedaron.' },
          kusi: ['feliz', 'Diez minutos que valen mucho.'] } },
      { id: 'b', label: 'Recibirle el fólder y decirle que lo vas a recomendar.',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -3 }, rel: { angel: 1 },
          out: 'Ángel se va feliz. Tú te quedas con un fólder que no está en ninguna parte del proceso y una promesa que no te toca hacer.',
          pro: { ok: 'Lo calmas.', risk: 'Una promesa así no es justa para los otros 95.' },
          kusi: ['pensando', '¿Y los demás que no vinieron?'] } },
      { id: 'c', label: 'Decirle que no atiendes sin cita y que espere el correo.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -3 },
          out: 'Ángel se va con el fólder bajo el brazo. Desde la ventana lo ves esperar la combi bajo el sol.',
          pro: { ok: 'Cuidas tu tiempo.', risk: 'Para alguien tan nervioso, el portazo pesa más que la información.' },
          kusi: ['triste', 'Vino de tan lejos…'] } },
    ],
    mirada: { ve: 'Las postulantes nerviosas no son débiles: muchas veces son las que más se toman en serio el trabajo. Atender sin prometer es la manera de ser amable y justa a la vez.' },
  },
  {
    id: 'c5', t: '15:30', ch: 'documento', who: null, titulo: 'La constancia', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Revisas la constancia de trabajo que adjuntó una de las postulantes. Algo no te cierra desde la primera lectura.</p><p><mark class="clave">Marca lo que tendrías que preguntar o verificar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que no cuadran o que no deberían estar en el expediente.',
    doc: { t: 'Constancia de trabajo', sub: 'Botica Santa Rosa · Cerro Colorado' },
    lines: [
      { id: 'nombre', t: 'Se deja constancia que la Srta. Elvira Huanca Ticona laboró en nuestra empresa…' },
      { id: 'cargo', t: '…en el cargo de Técnica de Enfermería…', bad: BP, why: 'El dueño dijo por teléfono que era cajera. Hay que preguntarle a ella qué funciones tenía.' },
      { id: 'fechas', t: '…desde el 1 de marzo de 2019 hasta el 15 de febrero de 2018.', bad: BP, why: 'La fecha de salida es anterior a la de ingreso. Puede ser un error de tipeo: se pregunta.' },
      { id: 'salud', t: 'Se retiró por motivos de salud (gastritis crónica).', bad: LEY, why: 'Un dato de salud no debería estar en una constancia ni usarse para decidir. Ley 29733: dato sensible.' },
      { id: 'firma', t: 'Firma y sello del gerente.', duda: 'Hay firma y sello, pero el gerente que firma es el mismo dueño que dijo «cajera».' },
      { id: 'uso', t: 'Se expide a solicitud de la interesada para los fines que estime conveniente.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp >= 2 ? 'buena' : 'aceptable',
      fx: { calidad: hitsBp >= 2 ? 4 : 1, cumplimiento: missLey ? -4 : 3 },
      flags: ['constancia_dudosa'], cartera: { constancias: missLey ? 'Constancia con dato de salud usado en la matriz' : 'Constancia de Elvira: preguntar funciones y fechas' },
      out: missLey ? 'Anotas las dudas de cargo y fechas, pero copias «gastritis crónica» en la matriz. Ese dato no debía viajar.' : 'Anotas dos preguntas para Elvira y dejas el dato de salud fuera de la matriz. Nadie más necesita saberlo.',
      pro: { ok: 'Las inconsistencias se preguntan; los datos de salud no se usan para elegir.', risk: 'Un dato de salud en la matriz puede terminar descartando a alguien sin que nadie lo diga.', info: 'Llama a Elvira y pregúntale qué hacía. Su respuesta también es información.' },
      kusi: missLey ? ['preocupado', 'Ese dato de salud no tenía que viajar.'] : ['celebra', '¡Ojo de verificadora!'],
    }),
    rules: [[LEY, 'Ley 29733: los datos de salud son sensibles y no se usan para decidir en una selección.']],
    mirada: { ve: 'Una constancia con errores no siempre es falsa: las boticas pequeñas no tienen RR.HH. y escriben como pueden. Pero tampoco se acepta sin preguntar. Y lo que no es tuyo saber, como la gastritis de Elvira, no entra al expediente.' },
  },
  {
    id: 'c6', t: '17:50', ch: 'correo', who: null, titulo: 'Reporte del día', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Milena Cáceres', to: 'Asistente de Selección', asunto: '¿Cómo va la verificación?' },
    body: () => `<p>Mañana armamos la agenda con Enfermería. Necesito saber <mark class="clave">cuántos tienen todo verificado</mark> y qué casos están en duda.</p><p>Milena</p>`,
    type: 'compose', enviaA: 'milena', para: 'Para: Milena Cáceres', boton: 'Enviar el reporte',
    prompt: 'Arma tu reporte eligiendo una frase de cada parte.',
    slots: [
      { id: 'num', t: 'El número', ops: [
        { id: 'n1', t: 'De 96 preseleccionados, 64 tienen título y DNI verificados; 32 siguen pendientes.', ok: true, por: 'Cifra clara.' },
        { id: 'n2', t: 'Ya revisé la mayoría.', ok: false, por: '¿Cuántos?' },
      ] },
      { id: 'caso', t: 'Los casos en duda', ops: [
        { id: 'k1', t: 'Jhon Ccori: título de 2014, no aparece en línea; consulté al instituto y toca escribir a la GRE Puno. Elvira Huanca: la constancia dice técnica y el empleador dice cajera; le voy a preguntar.', ok: true, por: 'Hechos y siguiente paso.' },
        { id: 'k2', t: 'Hay uno que no tiene título y una que mintió en su constancia.', ok: false, por: 'Juicios que todavía no están probados.' },
      ] },
      { id: 'pide', t: 'Lo que necesitas', ops: [
        { id: 'p1', t: '¿Me ayudas a pedir la confirmación a la GRE con el correo de la clínica?', ok: true, por: 'Pides lo que te falta.' },
        { id: 'p2', t: 'Mañana sigo.', ok: null, por: 'Correcto, pero no pides ayuda donde la necesitas.' },
      ] },
    ],
    res: sel => {
      const malas = ['n2', 'k2'].filter(x => Object.values(sel).includes(x)).length, buenas = ['n1', 'k1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? (malas > 1 ? 'riesgosa' : 'aceptable') : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, calidad: sel.caso === 'k2' ? -2 : 2 }, rel: { milena: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Milena responde en cinco minutos: «Yo escribo a la GRE. Mañana a las 7 te presento a la agenda más difícil de la clínica: la de Sor Elena».' : 'Milena responde: «Ok. Mañana me cuentas mejor».',
        pro: { ok: 'Número, casos con hechos y un pedido concreto.', risk: 'Decir «mintió» por escrito antes de verificar puede perjudicar a alguien que solo cometió un error.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Reporte de verdad!' : 'Le faltó algo.'],
      };
    },
    mirada: { ve: 'Un reporte de verificación separa lo confirmado de lo pendiente, y lo pendiente de lo sospechoso. Esa separación protege a los candidatos y a la clínica.' },
  },
];
