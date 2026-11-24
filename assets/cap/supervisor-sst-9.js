// Supervisor/a de SST · Capítulo 9 · «La fiscalización» · Semana 2, jueves.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 019-2006-TR (Reglamento de la Ley General de Inspección del Trabajo): art. 12 a) visita de inspección sin previo
//   aviso; art. 12 b) comparecencia para aportar documentación; art. 18.3 paralización ante riesgo grave e inminente;
//   art. 20.3 medidas de requerimiento; art. 27.2, 27.6 y 27.8 infracciones graves de SST; art. 46.1 (impedir la entrada o
//   permanencia de inspectores), 46.3 (negarse a facilitar documentación), 46.5 (obstaculizar la participación de los
//   trabajadores), 46.7 (no cumplir los requerimientos) y 46.10 (no asistir a la comparecencia): infracciones muy graves a la
//   labor inspectiva.
// - D.S. 005-2012-TR: art. 32 (documentación del sistema de gestión que se exhibe: política, reglamento interno, IPERC,
//   mapa de riesgos, planificación y programa anual); art. 33 (registros obligatorios); art. 35 (archivo activo de 12 meses).

export const CAP = {
  n: 9, titulo: 'La fiscalización', dia: 'Semana 2, jueves', foto: 'assets/3d/scenes/municipalidad.webp',
  lugar: 'Productos Mar de Piura · Planta de Paita',
  inicio: '08:00', fin: '18:30', cierreHora: '18:10',
  apertura: 'Jueves, 8:10 de la mañana. Llaman de la garita: «Inge, hay una señora de SUNAFIL con una orden de inspección. Dice que viene por una denuncia».', boton: 'Bajar a la garita',
  kusi: 'Una inspección no es un examen sorpresa: es la prueba de si lo que hiciste es de verdad. ¡Respira y di la verdad!',
  lead: 'Recibiste a la inspectora, le mostraste los documentos, reconociste lo que aún no está, respondiste por la cinta de la cortadora, entendiste qué viene y preparaste la comparecencia del lunes.',
  reflexion: '¿Qué diferencia hay entre prepararse para una inspección y prepararse para que nadie se lastime?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'inspeccion', p: 'Visita de SUNAFIL', j: 'Inspectora Patricia Vargas', d: 0, e: 'Hoy · por denuncia' },
  { id: 'documentos', p: 'Documentos del sistema de gestión', j: 'Yesenia · SST', d: 0, e: 'Varios corregidos esta semana' },
  { id: 'monitoreo', p: 'Monitoreo de agentes (frío, ruido, amoníaco)', j: 'SST', d: 0, e: 'Último informe: ruido, hace 2 años' },
  { id: 'comparecencia', p: 'Comparecencia', j: 'Ing. Julio Zapata', d: 0, e: 'Por definir' },
];

export const FUTURO = {
  inspeccion_transparente: ['Recibiste a la inspectora de inmediato y la acompañaste sin esconder nada.', 'Ella lo anota. Capítulo 10.'],
  verdad_sensor: ['Le dijiste a la inspectora que la cortadora operó con cinta en el sensor el viernes y qué se hizo después.', 'Pesará en la comparecencia. Semana 3.'],
  sensor_negado: ['Le dijiste a la inspectora que la cortadora nunca operó sin sensor.', 'Kevin le contó otra cosa. Semana 3.'],
  requerimiento: ['La inspectora dejó un requerimiento: monitoreo de agentes y programa anual aprobado, con plazo.', 'El plazo corre desde el lunes. Capítulo 10.'],
  comparecencia_lista: ['Armaste la carpeta para la comparecencia del lunes con lo que existe y lo que está en marcha.', 'Semana 3, lunes.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  yesenia: { n: 'Yesenia Távara', sub: 'Asistente de SST', c: '#2E7D6B' },
  abogado: { n: 'Dr. Ernesto Llosa', sub: 'Asesor legal externo · Lima', c: '#555B66' },
};

export const WSP = [
  { chat: 'yesenia', t: '08:20', de: 'Yesenia', txt: 'Inge, ya bajé los archivadores a la sala. Todos. Hasta el de la humedad 💪', si: 'yesenia_aliada' },
  { chat: 'yesenia', t: '08:20', de: 'Yesenia', txt: 'Inge, ¿qué archivadores bajo? Estoy nerviosa 😬', no: 'yesenia_aliada' },
  { chat: 'abogado', t: '08:25', de: 'Dr. Llosa', txt: 'No le entreguen nada hasta que yo me conecte. Que espere.' },
  { chat: 'flor', t: '10:50', de: 'Flor', txt: 'La inspectora quiere hablar con el comité. Estoy lista. Voy a decir lo que es, inge. Lo bueno y lo malo.' },
  { chat: 'carlos', t: '12:40', de: 'Carlos', txt: 'Le dije la verdad sobre la cinta. Si te preguntan, no lo niegues.', si: 'carlos_coautor' },
  { chat: 'julio', t: '16:30', de: 'Julio', txt: 'Ya estoy aquí. Qué día. Gracias por recibirla bien.', si: 'inspeccion_transparente' },
];

export const CORREOS = [
  { t: '08:15', de: 'Garita · Mar de Piura', para: 'Supervisor/a de SST', asunto: 'Visita SUNAFIL', html: '<p>Se presentó la Inspectora de Trabajo Patricia Vargas, con orden de inspección y credencial. Indica que la visita se origina en una denuncia sobre condiciones de seguridad en la línea de anillas y el funcionamiento del comité de SST. Espera en la garita.</p>' },
];

export const QUIZ = [
  { q: '¿Las visitas de inspección de SUNAFIL requieren aviso previo?', ops: ['Sí, con una semana', 'No: pueden realizarse sin previo aviso', 'Solo si el empleador acepta', 'Solo en horario de oficina'], ok: 1, por: 'D.S. 019-2006-TR, art. 12 a).' },
  { q: 'Impedir sin justificación la entrada de la inspectora o hacerla esperar para que no vea algo es…', ops: ['Un derecho del empleador', 'Una infracción muy grave a la labor inspectiva', 'Una falta leve', 'Normal'], ok: 1, por: 'D.S. 019-2006-TR, art. 46.1 y 46.6.' },
  { q: 'Si la inspectora cita a la empresa a una comparecencia y nadie va…', ops: ['No pasa nada', 'Es una infracción muy grave a la labor inspectiva', 'Se reprograma solo', 'Se archiva el caso'], ok: 1, por: 'D.S. 019-2006-TR, art. 46.10.' },
  { q: 'Corregiste el registro de accidentes esta semana. ¿Eso borra que antes estuviera incompleto?', ops: ['Sí, totalmente', 'No: muestra voluntad de corregir, pero lo que pasó antes también se evalúa', 'Solo si nadie lo nota', 'Depende del cliente'], ok: 1, por: 'Corregir es lo correcto y suele pesar a favor, pero no cambia los hechos anteriores.' },
  { q: 'La inspectora quiere hablar a solas con los trabajadores. ¿Qué haces?', ops: ['Te quedas al lado', 'Lo facilitas: obstaculizar la participación de los trabajadores es infracción muy grave', 'Le pides que no lo haga', 'Eliges tú a quién entrevista'], ok: 1, por: 'D.S. 019-2006-TR, art. 46.5.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:20', ch: 'llamada', who: null, titulo: 'La garita', banner: 'assets/foto/llamada.webp', lugar: 'Camino a la garita', show: ['cumplimiento', 'confianza', 'etica'],
    body: (n, F) => `<p>Bajas las escaleras con el celular en la oreja. Recuerdas el mensaje de Flor anoche: Marco puso una denuncia por la cortadora y el comité. No pensaste que llegaría tan pronto.${F.has('sensor_puenteado') ? ' Y piensas en la cinta del viernes.' : ''}</p><p>La inspectora espera en la garita. Julio está en Piura, a una hora. <mark class="clave">Tienes un minuto para tres llamadas</mark>.</p>`,
    type: 'calls',
    calls: [['Ing. Julio Zapata · gerente', 'Contesta manejando', '«¿SUNAFIL? Estoy en la Panamericana, llego en una hora. Atiéndela tú, que sabes. Dile la verdad, ya no tenemos nada que esconder… ¿o sí?»'], ['Dr. Ernesto Llosa · asesor legal en Lima', 'Contesta con apuro', '«Que espere hasta que yo me conecte por videollamada. No le entreguen ningún documento sin mi visto bueno. Media hora, una hora, lo que sea.»'], ['Yesenia · asistente de SST', 'Contesta en la oficina', '«Inge, ¿bajo los archivadores? Todo lo que corregimos esta semana está ahí. Lo que no está, no está.»']],
    prompt: '¿Cómo recibes a la inspectora?',
    choices: [
      { id: 'a', label: 'Recibirla de inmediato, verificar su credencial y la orden, acompañarla y darle lo que pida. Avisarle que el gerente llega en una hora y que el asesor puede conectarse, sin que eso detenga la visita.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 4, etica: 3 }, rel: { 'julio-sst': 1 }, flags: ['inspeccion_transparente'], cartera: { inspeccion: 'Recibida a las 8:25 · acompañada por SST' },
          out: 'La inspectora Patricia Vargas, unos cincuenta años, acento de Sullana, te da la mano: «Gracias por no hacerme esperar. No es lo común». Pide empezar por la línea de anillas.',
          pro: { ok: 'Recibir de inmediato y facilitar la información es tu obligación y la mejor estrategia.', info: 'El asesor puede acompañar, pero no puede condicionar la entrada ni la entrega de documentos.' },
          kusi: ['animo', '¡Puertas abiertas!'] } },
      { id: 'b', label: 'Hacerle caso al abogado: pedirle a la inspectora que espere en la garita una hora, hasta que lleguen Julio y el asesor.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, confianza: -3, etica: -2 }, cartera: { inspeccion: 'Inspectora esperó 50 minutos en la garita' },
          out: 'La inspectora mira su reloj y anota algo. A los cincuenta minutos te dice, tranquila: «Voy a dejar constancia del tiempo de espera». Cuando entra, va directo a la línea de anillas sin pedir permiso.',
          pro: { ok: 'Sigues la instrucción del asesor.', risk: 'Impedir sin justificación la entrada o permanencia de los inspectores es infracción muy grave (art. 46.1 del D.S. 019-2006-TR).' },
          kusi: ['preocupado', 'Esperar una hora se ve como esconder…'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 12 a): la visita de inspección se realiza sin necesidad de aviso previo.'], [LEY, 'Art. 46.1 y 46.3: impedir la entrada o negarse a facilitar documentación son infracciones muy graves a la labor inspectiva.']],
    mirada: {
      ve: 'Las primeras decisiones ante una inspección revelan más que cualquier documento. Hacer esperar, esconder carpetas o «esperar al abogado» suelen empeorar lo que había. Recibir con orden y franqueza es lo que corresponde.',
      visual: { tipo: 'balanza', a: { t: 'Que espere', items: ['Tiempo para ordenar', 'Constancia de la espera', 'Desconfianza desde el inicio'] }, b: { t: 'Recibir y acompañar', items: ['Cumple la norma', 'Muestra lo que se corrigió', 'Conversación franca'] } },
    },
  },
  {
    id: 'i2', t: '09:10', ch: 'documento', who: null, titulo: 'Lo primero que pide', banner: 'assets/foto/revisa.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Después de ver la línea de anillas, la inspectora se sienta en la sala con su tablet. «Empecemos por lo que dice la denuncia: la cortadora y el comité.» ${F.has('tablero_maquillado') ? 'Al pasar por la entrada, miró la pizarra de los días sin accidentes y la fotografió.' : ''}</p><p>Yesenia tiene los archivadores en la mesa. <mark class="clave">Elige los tres documentos que le muestras primero</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres documentos que mostrarás primero.', boton: 'Mostrar estos tres', resumen: 'Mostraste',
    cols: ['Documento', 'Qué muestra'],
    rows: [
      { id: 'registro', cells: ['Registro de accidentes e incidentes (con lo corregido esta semana)', 'Hugo, Rosa, la fuga, la contrata y Teresa, con investigaciones'] },
      { id: 'actas', cells: ['Libro de actas del comité', 'Junio… y las dos sesiones de esta semana'] },
      { id: 'bloqueo', cells: ['Registro de mantenimiento y de capacitación de bloqueo', 'Cambio de sensor probado y práctica de ayer'] },
      { id: 'politica', cells: ['Política de SST enmarcada en la entrada', 'Firmada hace tres años'] },
      { id: 'folleto', cells: ['Folleto corporativo «Cero accidentes»', 'Fotos bonitas'] },
      { id: 'iperc', cells: ['IPERC de cámaras de frío', 'Hecha con los operarios la semana pasada'] },
    ],
    score: { registro: 3, actas: 3, bloqueo: 3, iperc: 2, politica: 1, folleto: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 },
        cartera: { documentos: 'Mostrado: ' + picks.join(', ') },
        out: q === 'buena' ? 'La inspectora hojea el libro de actas: junio, y luego nada hasta la semana pasada. Levanta la vista. «Cuatro meses sin sesionar. Y esta semana, dos sesiones.» No es una pregunta. Toma fotos de todo.' : 'La inspectora mira el folleto un segundo y lo deja a un lado. «Lo que pidió la denuncia es la cortadora y el comité.»',
        pro: { ok: 'Responder primero a lo que motivó la inspección muestra orden y franqueza.', info: 'El archivo activo de los últimos doce meses es lo que debe estar a mano (art. 35 del D.S. 005-2012-TR).' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lo que pidió, primero!' : 'El folleto no responde la denuncia.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, arts. 32 y 33: documentación que se exhibe y registros obligatorios; art. 35: archivo activo de 12 meses.']],
    mirada: {
      ve: 'Una inspectora con experiencia no se impresiona con folletos. Busca coherencia entre lo que dice la denuncia, lo que muestran los documentos y lo que ve en el piso.',
      visual: { tipo: 'embudo', titulo: 'La documentación de hoy', niveles: [['Registros obligatorios', 8], ['Al día esta semana', 5], ['Al día hace dos semanas', 3]] },
    },
  },
  {
    id: 'i3', t: '10:30', ch: 'documento', who: null, titulo: 'Lo que todavía falta', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Mientras la inspectora entrevista a Flor y al comité a solas, como pidió, tú y Yesenia hacen su propia lista: lo que ella verá que todavía no está bien. ${F.has('accidente_oculto') ? 'Te pica una línea: la caída de Teresa registrada como incidente, con un certificado médico de descanso en la misma carpeta.' : ''}</p><p><mark class="clave">Marca lo que es un incumplimiento</mark>, aunque ya se esté corrigiendo.</p>`,
    type: 'flag', prompt: 'Marca lo que la inspectora puede observar como incumplimiento.',
    doc: { t: 'Autodiagnóstico rápido · antes del cierre de la inspección', sub: 'SST · Mar de Piura' },
    lines: [
      { id: 'monitoreo', t: 'Monitoreo de agentes: solo uno de ruido de hace dos años; nada de frío ni amoníaco.', bad: LEY, why: 'El registro del monitoreo de agentes físicos y químicos es obligatorio (art. 33 c del D.S. 005-2012-TR).' },
      { id: 'fuga', t: 'Fuga de amoníaco notificada ocho días después.', bad: LEY, why: 'Se regularizó, pero el plazo de 24 horas no se cumplió. No notificar a tiempo un incidente peligroso es infracción grave (D.S. 019-2006-TR, art. 27.2).' },
      { id: 'comite', t: 'Comité sin sesionar de junio a la semana pasada.', bad: LEY, why: 'El comité se reúne una vez al mes (art. 68 del reglamento). Las sesiones de esta semana no borran los cuatro meses.' },
      { id: 'camara', t: 'Cámara 3 con apertura interior y pulsador de alarma desde el jueves pasado.' },
      { id: 'programa', t: 'Programa anual de SST: no aprobado por el comité este año.', bad: LEY, why: 'El comité aprueba el programa anual (art. 42 c) y su falta es parte de la planificación exigida (D.S. 019-2006-TR, art. 27.7).' },
      { id: 'botas', t: 'Botas de mujer: compradas esta semana tras cinco meses de espera.', duda: 'Ya se corrigió. La inspectora puede preguntar por qué tardó tanto.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Tu lista se queda corta. Cuando la inspectora te pregunta por el monitoreo de frío, te toma por sorpresa.' : `Marcaste ${hitsLey} incumplimientos. Cuando la inspectora vuelve, se los mencionas tú antes de que pregunte. Ella levanta una ceja: «Es la primera vez que una empresa me dice sus faltas antes que yo».`,
      cartera: { monitoreo: 'Sin monitoreo de frío ni amoníaco: falta reconocida', documentos: missLey ? 'Faltas no identificadas' : 'Faltas reconocidas con plan' },
      pro: { ok: 'Reconocer lo que falta, con un plan, da credibilidad a todo lo demás.', risk: 'Reconocer no evita las consecuencias de lo que ya pasó.', info: 'La inspección puede dictar medidas de requerimiento con plazo para corregir (D.S. 019-2006-TR, art. 20.3).' },
      kusi: missLey ? ['sorpresa', '¿Monitoreo de frío? Se te pasó…'] : ['animo', 'Decir tus faltas primero también es SST.'],
    }),
    rules: [[LEY, 'D.S. 019-2006-TR, art. 27: infracciones graves de SST (registros, notificación, planificación, formación).']],
    mirada: {
      ve: 'Dos semanas no alcanzan para arreglar años de abandono. Lo que sí alcanzan es para saber exactamente qué falta y tener un plan. Eso, dicho con franqueza, es lo que distingue a un sistema que empieza a funcionar.',
      visual: { tipo: 'cambio', titulo: 'Antes y después de dos semanas', pares: [['Registro con 3 sucesos ocultos', 'Registro completo e investigado'], ['Comité dormido', 'Dos sesiones con acuerdos'], ['Sin monitoreo de frío', 'Sin monitoreo de frío (pendiente)']] },
    },
  },
  {
    id: 'i4', t: '12:20', ch: 'presencial', who: null, titulo: 'La pregunta', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Línea de anillas', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>La inspectora vuelve a la cortadora. Pide ver el sensor sellado, que Segundo le muestra. Luego te mira directo.${F.has('bloqueo_practicado') ? ' Antes vio a Kevin bloquear y probar la máquina solo, sin que nadie se lo pidiera.' : ''}</p><p>«Supervisor/a: <mark class="clave">¿esta máquina ha operado con el sensor de la guarda anulado en el último mes?</mark>» Detrás de ella, Kevin baja la mirada.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decir la verdad: el viernes pasado operó media hora con cinta en el sensor; se detuvo, se cambió el sensor, se probó y se capacitó a la línea. Mostrar el registro.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 3, confianza: 4 }, rel: { produccion: 0 }, flags: ['verdad_sensor'], cartera: { inspeccion: 'Reconocido el puente del viernes y las medidas tomadas' },
          out: 'La inspectora anota durante un rato largo. «Kevin me dijo lo mismo hace una hora.» Cierra la tablet. «Lo que me importa es que no vuelva a pasar, y que se pueda demostrar.»',
          pro: { ok: 'La verdad, con las medidas tomadas y la evidencia, es lo único que se sostiene.', risk: 'Lo reconocido puede ser parte de lo que la inspección evalúe.', info: 'Los trabajadores ya habían hablado. Mentir habría convertido un problema corregido en uno nuevo.' },
          kusi: ['animo', 'Kevin dijo lo mismo. La verdad coincide.'] } },
      { id: 'b', label: 'Decir que no, que el sensor siempre funcionó, para no complicar más la inspección.',
        res: { q: 'riesgosa', fx: { etica: -7, confianza: -5, cumplimiento: -3 }, flags: ['sensor_negado'], cartera: { inspeccion: 'Negado el puente del sensor' },
          out: 'La inspectora asiente sin expresión. «Entiendo.» Una hora antes, Kevin le había contado lo de la cinta, con detalle. Anota algo más que no alcanzas a ver.',
          pro: { ok: 'Nada a tu favor.', risk: 'Lo que dicen los trabajadores y lo que dice la empresa ya no coincide. Esa diferencia pesa más que la falta original.' },
          kusi: ['triste', 'Kevin ya había hablado…'] } },
      { id: 'c', label: 'Decir que eso tendría que consultarlo con Producción.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: -2 }, cartera: { inspeccion: 'Pregunta derivada a Producción' },
          out: 'La inspectora llama a Carlos. Carlos lo cuenta todo, con fecha y hora. Luego te mira: «Supervisor/a, usted estaba ese día en la línea, ¿no?».',
          pro: { ok: 'No mientes.', risk: 'Evitar una respuesta que conoces se ve como esconderla.' },
          kusi: ['pensando', 'Tú lo sabías…'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 46.3: negarse a facilitar la información necesaria es infracción muy grave a la labor inspectiva.']],
    mirada: {
      ve: 'En una inspección, la pregunta más difícil suele ser sobre algo que ya se corrigió. La tentación es negarlo «porque ya pasó». Pero lo que importa es que la empresa y los trabajadores cuenten la misma historia.',
      visual: { tipo: 'flujo', titulo: 'Cómo responder lo que pasó', pasos: ['Qué pasó', 'Qué se hizo', 'Evidencia', 'Qué cambió', 'Cómo se evita'] },
    },
  },
  {
    id: 'i5', t: '14:30', ch: 'presencial', who: null, titulo: 'La inspectora', banner: 'assets/foto/mentora.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'calidad', 'confianza'],
    body: () => `<p>La inspectora Vargas toma un vaso de agua. Está terminando. Antes de cerrar el acta de la visita, acepta responder algunas dudas.</p><p><mark class="clave">Le haces dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para la inspectora.',
    opts: [
      { id: 'que', label: '¿Qué viene ahora?', info: '«Voy a dejar un requerimiento con plazo: monitoreo de agentes en cámaras y sala de compresores, y el programa anual aprobado por el comité. Y los cito a una comparecencia el lunes a las 9:00 en nuestra oficina de Piura, con documentos.»' },
      { id: 'pesa', label: '¿Pesa lo que corregimos esta semana?', info: '«Pesa que exista y que se pueda demostrar. Pero lo que pasó antes también se evalúa. Ustedes no empezaron hace dos semanas: empezaron hace años y se detuvieron.»' },
      { id: 'denuncia', label: '¿La denuncia fue de un trabajador?', info: '«No puedo decirle quién denunció. Y le recomiendo que nadie en esta empresa intente averiguarlo.» Te sostiene la mirada.' },
      { id: 'comite', label: '¿Qué le dijo el comité?', info: '«Me dijeron que hace dos semanas no servía y que ahora empieza a servir. La señora Flor fue muy clara. Y la señora Teresa me mostró las botas nuevas.» Casi sonríe.' },
    ],
    res: picks => ({
      q: null, fx: { calidad: 3, cumplimiento: 3, confianza: 2 }, flags: ['requerimiento'],
      cartera: { comparecencia: 'Lunes 09:00 · oficina de SUNAFIL en Piura', monitoreo: 'Requerimiento: monitoreo de frío y amoníaco con plazo' },
      out: picks.includes('denuncia') ? 'Entiendes lo que te dijo sin decirlo: buscar al denunciante sería el peor error posible. Anotas en tu cuaderno: «Nadie pregunta por Marco».' : 'Anotas cada palabra. El lunes a las 9:00, en Piura. Con documentos.',
      kusi: ['pensando', 'El lunes, comparecencia. ¡A preparar la carpeta!'],
    }),
    rules: [[LEY, 'D.S. 019-2006-TR, art. 12 b): la comparecencia exige presentarse ante el inspector con la documentación requerida.'], [LEY, 'Art. 20.3: las medidas de requerimiento son órdenes para cumplir la normativa de SST.']],
    mirada: {
      ve: 'Una inspección no termina cuando el inspector se va. Las medidas de requerimiento y la comparecencia son la segunda parte, y suelen ser las más importantes.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Hoy', 'Visita y acta'], ['Lunes 9:00', 'Comparecencia en Piura'], ['Plazo del requerimiento', 'Monitoreo y programa aprobado'], ['Después', 'Evaluación de la inspección']] },
    },
  },
  {
    id: 'i6', t: '15:40', ch: 'documento', who: null, titulo: 'La carpeta del lunes', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de SST', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>La inspectora se fue a las 15:10. La oficina queda en silencio. Yesenia se sienta en el piso, entre archivadores, y se ríe nerviosa: «Sobrevivimos».</p><p>Ahora hay que armar la carpeta para la comparecencia. <mark class="clave">Elige qué entra</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la carpeta para la comparecencia.', boton: 'Cerrar la carpeta',
    bloques: [
      { id: 'existe', t: 'Lo que existe', n: 2, ops: [
        { id: 'e1', t: 'Registro de accidentes completo, con las investigaciones de Rosa, la fuga y Teresa.', ok: true, por: 'Evidencia de lo corregido.' },
        { id: 'e2', t: 'Actas del comité de esta semana, con acuerdos y su avance.', ok: true, por: 'El comité funcionando.' },
        { id: 'e3', t: 'Fotos del folleto «Cero accidentes».', ok: false, por: 'No es evidencia de nada.' },
      ] },
      { id: 'falta', t: 'Lo que falta', n: 1, ops: [
        { id: 'f1', t: 'Plan con fechas y responsables para el monitoreo de frío y amoníaco, con cotización de un laboratorio.', ok: true, por: 'Muestra cómo se cumplirá el requerimiento.' },
        { id: 'f2', t: 'Nada: mejor no mencionar lo que falta.', ok: false, por: 'La inspectora ya lo sabe.' },
      ] },
      { id: 'quien', t: 'Quién va', n: 1, ops: [
        { id: 'q1', t: 'Julio como representante del empleador y tú como responsable de SST.', ok: true, por: 'Quien decide y quien sabe.' },
        { id: 'q2', t: 'Solo el abogado de Lima, por videollamada.', ok: false, por: 'La comparecencia exige presentarse con la documentación.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 }, flags: q === 'buena' ? ['comparecencia_lista'] : [],
        cartera: { comparecencia: q === 'buena' ? 'Carpeta lista: registros, actas, plan de monitoreo; van Julio y SST' : 'Carpeta incompleta' },
        out: q === 'buena' ? 'La carpeta tiene tres separadores: «Lo corregido», «El comité» y «Lo que falta, con fecha». Yesenia le pega una etiqueta en el lomo con su mejor letra.' : 'La carpeta pesa mucho y dice poco.',
        pro: { ok: 'En una comparecencia, mostrar con orden lo hecho y lo que falta, con plan, es lo que más ayuda.', risk: 'No asistir a una comparecencia es infracción muy grave (art. 46.10 del D.S. 019-2006-TR).' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tres separadores y la verdad!' : 'Menos folleto, más plan.'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 46.7 y 46.10: no cumplir los requerimientos o no asistir a la comparecencia son infracciones muy graves.']],
    mirada: {
      ve: 'Una carpeta para la inspección cuenta una historia: qué estaba mal, qué se corrigió y qué falta con fecha. Una carpeta que solo muestra lo bueno cuenta una historia que nadie cree.',
      visual: { tipo: 'flujo', titulo: 'La carpeta', pasos: ['Lo corregido', 'El comité', 'Lo que falta, con fecha', 'Quién va'] },
    },
  },
  {
    id: 'i7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'Para Julio', banner: 'assets/esc/meta.webp', lugar: 'Oficina de SST', show: ['confianza', 'cumplimiento'],
    body: (n, F) => `<p>Julio llegó a las 16:20, cuando la inspectora ya se había ido. Leyó el acta de la visita en su camioneta. ${F.has('inspeccion_transparente') ? 'Te escribió: «Gracias por recibirla bien».' : 'No te ha dicho nada todavía.'}</p><p>Mañana es viernes y el lunes es la comparecencia. <mark class="clave">Le escribes antes de irte</mark>.</p>`,
    type: 'compose', enviaA: 'julio', para: 'Para: Ing. Julio Zapata · Gerente de Operaciones', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'resumen', t: 'El resumen', ops: [
        { id: 'r1', t: 'Ingeniero: requerimiento de monitoreo y programa anual, y comparecencia el lunes 9:00 en Piura.', ok: true, por: 'Lo que viene, en una línea.' },
        { id: 'r2', t: 'Ingeniero: fue tranquilo, nada grave.', ok: false, por: 'No es verdad y él lo leerá en el acta.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: 'Necesito que usted vaya conmigo y que mañana aprobemos la cotización del laboratorio.', ok: true, por: 'Lo que solo él puede decidir.' },
        { id: 'p2', t: 'Yo voy sola/o, no se preocupe.', ok: false, por: 'Quien representa al empleador debe estar.' },
      ] },
      { id: 'cuida', t: 'Lo que cuidas', ops: [
        { id: 'c1', t: 'Y algo importante: nadie debe tratar de averiguar quién hizo la denuncia.', ok: true, por: 'Proteges a quien denunció y a la empresa.' },
        { id: 'c2', t: 'Ya sabemos quién fue, ¿no?', ok: false, por: 'Buscar al denunciante es el peor error posible.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0, etica: q === 'buena' ? 2 : 0 }, rel: { 'julio-sst': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Julio responde con un audio: «Voy contigo el lunes. La cotización la apruebo mañana a primera hora. Y lo de la denuncia… tienes razón. Si alguien pregunta, yo mismo lo paro». Pausa. «Mañana conversamos de estas dos semanas.»' : q === 'aceptable' ? 'Julio responde: «Ok. Mañana vemos».' : 'Julio responde: «Hablamos mañana». Nada más.',
        pro: { ok: 'Después de una inspección, la gerencia necesita saber qué viene, qué debe decidir y qué no debe hacer.', info: 'Las represalias contra quien denuncia o contra miembros del comité agravan cualquier situación.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Julio va contigo!' : 'Mañana, la conversación.'],
      };
    },
    mirada: { ve: 'El día de la inspección se gana o se pierde en las horas siguientes: qué se le dice a la gerencia, qué se decide y qué se evita hacer.' },
  },
];
