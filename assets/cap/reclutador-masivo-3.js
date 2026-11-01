// Reclutador/a de selección masiva · Capítulo 3 · «El día de evaluación» · Semana 1, viernes.
// Hilo del mes: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú.
// Normas citadas:
// - Ley 29973, Ley General de la Persona con Discapacidad, art. 50 (modificado por el D.Leg. 1417): derecho a ajustes razonables
//   en los procesos de selección y en el centro de trabajo; los empleadores públicos y privados deben realizarlos, salvo carga desproporcionada.
//   https://lpderecho.pe/decreto-legislativo-1417-promueve-inclusion-personas-discapacidad/
//   Reglamento (D.S. 002-2014-MIMP, modificado por el D.S. 013-2019-MIMP): las fichas de postulación incluyen un campo para pedir ajustes.
//   https://lpderecho.pe/modifican-reglamento-de-la-ley-29973-ley-general-de-la-persona-con-discapacidad/
// - Ley 26772, modificada por la Ley 27270 (oferta de empleo sin requisitos discriminatorios): https://faolex.fao.org/docs/pdf/per201903.pdf
// - Ley 29733, Ley de Protección de Datos Personales (principios de finalidad y seguridad), ya citada en el capítulo 1.

export const CAP = {
  n: 3, titulo: 'El día de evaluación', dia: 'Semana 1, viernes', foto: 'assets/foto/taller.webp',
  lugar: 'Contacta Perú · Cercado de Lima',
  inicio: '07:45', fin: '19:00', cierreHora: '18:50',
  apertura: 'Viernes, 7:45 a. m. Ochenta personas citadas a las 9:00. El ascensor del edificio tiene un papel pegado: «Malogrado».', boton: 'Preparar la sala de evaluación',
  kusi: 'Hoy conoces en persona a la gente que hasta ayer era una fila de Excel. ¡Dale!',
  lead: 'Corregiste la guía de evaluación, averiguaste por qué no llegó la gente, hiciste un ajuste razonable, elegiste con evidencia y le explicaste a Bruno el número del día.',
  reflexion: '¿Qué razón de inasistencia te sorprendió más?',
  siguiente: { n: 4, titulo: 'El rol de llamada', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'guia', p: 'Guía de evaluación grupal', j: 'Jessica · Reclutamiento', d: 0, e: 'Versión de 2024' },
  { id: 'asistencia', p: 'Asistencia del viernes', j: 'Jessica · Reclutamiento', d: 0, e: '80 citados' },
  { id: 'ajustes', p: 'Ajustes para postulantes', j: 'Jessica · Reclutamiento', d: 0, e: 'Sin protocolo' },
  { id: 'aprobados', p: 'Aprobados de tu mesa', j: 'Jessica · Reclutamiento', d: 0, e: 'Por decidir' },
  { id: 'bruno', p: 'Explicación a Bruno', j: 'Bruno · Operaciones', d: 0, e: 'Pendiente' },
];

export const FUTURO = {
  guia_ajustes: ['La guía nueva pregunta por ajustes y no pide datos que no sirven.', 'En el capítulo 4 la usarás para la simulación de llamada.'],
  guia_vieja: ['La guía siguió pidiendo datos personales y sin ajustes.', 'Alguien se quejará del trato en el capítulo 4.'],
  causas_inasistencia: ['Llamaste a quienes no llegaron y supiste por qué.', 'La citación nueva incluirá «el proceso es gratuito». Capítulo 4.'],
  mateo_evaluado: ['Evaluaste a Mateo en el primer piso, con la misma prueba.', 'Mateo volverá en el capítulo 4 para la simulación de llamada.'],
  mateo_reprogramado: ['Reprogramaste a Mateo con movilidad pagada.', 'Volverá el martes, si el ascensor funciona. Capítulo 4.'],
  mateo_perdido: ['Mateo esperó tres horas y se fue.', 'No volverás a saber de él… o sí, en una reseña.'],
  alexandra_pasa: ['Alexandra pasó la evaluación grupal.', 'En el capítulo 4 descubrirás que no tiene secundaria completa.'],
  eleccion_evidencia: ['Elegiste con lo que observaste en el role-play.', 'Los aprobados de tu mesa rendirán mejor en la capacitación. Capítulo 6.'],
  eleccion_simpatia: ['Elegiste a alguien por simpatía y no por la prueba.', 'Se notará en la simulación de llamada. Capítulo 4.'],
  oferta_rapida: ['Propusiste evaluar dos veces por semana y avisar el mismo día.', 'Bruno lo aprobó a medias. Capítulo 4.'],
  sobrecita: ['Decidiste sobrecitar sin atacar las causas.', 'Tu base de postulantes se gastará más rápido. Capítulo 5.'],
  pide_pasajes: ['Pediste pasajes para los citados.', 'Finanzas responderá en el capítulo 4.'],
  promesa_200: ['Le prometiste a Bruno que el próximo viernes llegarían 80.', 'Te lo cobrará en el capítulo 7.'],
  rechazo_cuidado: ['Les avisaste a los no seleccionados con respeto y con una razón.', 'Fiorella te recomendará con su prima. Capítulo 5.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: 'Postulante', who: 'alexandra' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Postulante · no seleccionada', c: '#C2185B' },
  mateo: { n: 'Mateo Huanca', sub: 'Postulante', c: '#1565C0' },
};

export const WSP = [
  { chat: 'grupo', t: '07:46', de: 'Jessica', txt: 'El ascensor murió 😩 Hoy subimos y bajamos los 4 pisos a pie. Traigan zapatillas.' },
  { chat: 'alexandra', t: '08:38', de: 'Alexandra', txt: 'Ya estoy abajo, en la puerta. ¿Subo o espero? 😅', si: 'alexandra_citada' },
  { chat: 'mateo', t: '09:58', de: 'Mateo', txt: 'Buenos días. Estoy en la recepción. Uso silla de ruedas y me dicen que el ascensor no funciona.' },
  { chat: 'bruno', t: '10:30', de: 'Bruno', txt: '¿Cuántos llegaron? Bajo a las 13:30.', si: 'bruno_advertido' },
  { chat: 'bruno', t: '10:30', de: 'Bruno', txt: 'Me dicen que la sala está medio vacía. ¿Qué pasó? Bajo a las 13:30.', si: 'bruno_ilusionado' },
  { chat: 'mateo', t: '12:15', de: 'Mateo', txt: 'Gracias por bajar a evaluarme. Es la primera vez que no me dicen «le llamamos».', si: 'mateo_evaluado' },
  { chat: 'jessica', t: '17:50', de: 'Jessica', txt: 'Llegaron 31 de 80, igual que la campaña pasada. Pero hoy sabemos POR QUÉ. Eso ya es otra cosa 💪', si: 'causas_inasistencia' },
];

export const CORREOS = [
  { t: '07:50', de: 'Administración del edificio', para: 'Inquilinos piso 1 al 9', asunto: 'Ascensor fuera de servicio', html: '<p>Estimados inquilinos: el ascensor principal se encuentra fuera de servicio por mantenimiento correctivo. <b>El técnico llega el lunes.</b> Disculpen las molestias.</p><p>Administración</p>' },
  { t: '16:30', de: 'Jessica Torres', para: 'Equipo de Reclutamiento', asunto: 'Resultados del viernes', html: '<p>Equipo: hoy llegaron <b>31 de 80</b>. Aprobaron la evaluación grupal <b>15</b>. Con eso, la capacitación del martes 2 arranca corta.</p><p>El martes hacemos la simulación de llamada con los aprobados. Buen trabajo con lo que tuvimos.</p><p>Jessica</p>' },
];

export const QUIZ = [
  { q: 'Un postulante en silla de ruedas llega y el ascensor no funciona. ¿Qué dice la Ley 29973?', ops: ['Que se le puede descartar', 'Que tiene derecho a ajustes razonables en el proceso de selección', 'Que solo aplica al sector público', 'Que debe traer un acompañante'], ok: 1, por: 'El art. 50 de la Ley 29973 reconoce ajustes razonables en la selección; los empleadores públicos y privados deben hacerlos, salvo carga desproporcionada.' },
  { q: 'En una dinámica grupal, preguntar edad, estado civil y número de hijos…', ops: ['Ayuda a conocer al grupo', 'No mide el puesto y abre la puerta a sesgos', 'Es obligatorio', 'Solo vale para mujeres'], ok: 1, por: 'Si un dato no sirve para predecir el desempeño, no se pide: solo puede sesgar la decisión.' },
  { q: '¿Cuál es una causa real y frecuente de inasistencia a una evaluación masiva?', ops: ['Flojera', 'Miedo a una estafa, falta de pasaje u otra oferta más rápida', 'El clima', 'Que el aviso era muy largo'], ok: 1, por: 'Llamar a quienes no llegaron revela causas que se pueden corregir.' },
  { q: 'En un role-play, ¿qué es una buena evidencia para aprobar?', ops: ['Que sea simpático', 'Que acuerde monto y fecha sin amenazar', 'Que hable rápido', 'Que tenga buena presencia'], ok: 1, por: 'Se evalúa lo que se observa y está ligado al puesto.' },
  { q: '¿Cómo se comunica un «no seleccionado» en selección masiva?', ops: ['No se comunica', 'Con respeto, una razón concreta y una puerta abierta si corresponde', 'Con un emoji', 'Bloqueando el número'], ok: 1, por: 'El postulante rechazado también habla de la empresa… y puede referir a otros.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:55', ch: 'documento', who: null, titulo: 'La guía de 2024', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Subiste los cuatro pisos con dos cajas de fichas de postulación. Mientras recuperas el aire, Jessica te da la guía de evaluación grupal: «Es la de la campaña pasada. Tienes una hora. ${F.has('criterio') ? 'Y acuérdate de que le prometiste a Bruno veinte minutos de prueba práctica.' : 'Bruno quiere todo rápido.'}»</p><p><mark class="clave">Lo que esté mal en esta guía hoy lo vivirán 80 personas.</mark></p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir o debe corregirse antes de las 9:00.',
    doc: { t: 'Guía de evaluación grupal · Asesores de cobranza', sub: 'Contacta Perú · versión 2024' },
    lines: [
      { id: 'pres', t: 'Dinámica de inicio: cada uno dice su nombre, edad, estado civil y cuántos hijos tiene.', bad: BP, why: 'Ninguno de esos datos predice si alguien cobrará bien; solo pueden sesgar al evaluador.' },
      { id: 'role', t: 'Role-play en parejas: un cliente molesto que no puede pagar su cuota.' },
      { id: 'escucha', t: 'Se observa si la persona repite bien el monto y la fecha que acuerda.' },
      { id: 'nota', t: 'Cada observador pone una nota de «actitud» del 1 al 10, a su criterio.', bad: BP, why: 'Sin criterios observables, la nota depende de quién evalúa.' },
      { id: 'dni', t: 'El evaluador fotografía el DNI de cada postulante con su celular personal.', bad: LEY, why: 'Los datos personales se tratan solo para su finalidad y con medidas de seguridad (Ley 29733): un celular personal no es un archivo seguro.' },
      { id: 'piso', t: 'La evaluación es en la sala del piso 4. Quien no pueda subir, se reprograma «cuando funcione el ascensor».', bad: LEY, why: 'Las personas con discapacidad tienen derecho a ajustes razonables en la selección (Ley 29973, art. 50).' },
      { id: 'ficha', t: 'La ficha de postulación no pregunta si la persona necesita algún ajuste para la evaluación.', bad: LEY, why: 'El reglamento de la Ley 29973 pide que la ficha incluya un campo para solicitar ajustes.' },
      { id: 'tarde', t: 'Quien llegue más de 15 minutos tarde pasa al grupo de las 11:00.' },
      { id: 'orto', t: 'Prueba escrita de ortografía de 40 minutos.', bad: BP, why: 'El trabajo es hablar por teléfono: 40 minutos de ortografía no miden lo principal y alargan el día.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'La guía queda casi igual. A las 9:00 la dinámica empieza con «¿cuántos hijos tienes?».' : `Corriges ${hitsLey} puntos legales y los que sobraban. Jessica imprime la guía nueva: «Esta ya no nos mete en problemas».`,
      flags: [missLey ? 'guia_vieja' : 'guia_ajustes'], rel: { jessica: missLey ? 0 : 1 },
      cartera: { guia: missLey ? 'Versión 2024, sin cambios de fondo' : 'Guía nueva: criterios observables y ajustes' },
      pro: { ok: 'Una guía buena hace que dos evaluadores distintos lleguen a la misma conclusión.', risk: 'Una guía mala se repite 80 veces en un día.', info: 'Agrega a la citación una línea: «Si necesitas algún ajuste para la evaluación, cuéntanos».' },
      kusi: missLey ? ['preocupado', 'Esa guía va a hacer ruido…'] : ['celebra', '¡Guía de 2026, por fin!'],
    }),
    rules: [[LEY, 'Ley 29973, art. 50: derecho a ajustes razonables en los procesos de selección.'], [LEY, 'Ley 29733: los datos personales se usan para su finalidad y con medidas de seguridad.'], [BP, 'Evalúa con criterios observables que estén ligados al puesto.']],
    mirada: {
      ve: 'Una guía de evaluación grupal es el instrumento más repetido del mes. Cada pregunta innecesaria y cada criterio sin definir se multiplican por cada persona evaluada. Por eso se revisa antes de que entre el primer grupo.',
      visual: { tipo: 'cambio', titulo: 'De la guía 2024 a la de hoy', pares: [['Edad, estado civil, hijos', 'Nombre y por qué postula'], ['«Actitud» del 1 al 10', 'Acuerda monto y fecha: sí o no'], ['Foto del DNI con el celular', 'Registro en la ficha oficial'], ['«Cuando funcione el ascensor»', 'Sala del piso 1 lista']] },
      normas: [{ ley: 'Ley 29973, art. 50 (modificado por el D.Leg. 1417), y su reglamento', dice: 'La persona con discapacidad tiene derecho a ajustes razonables en los procesos de selección y en el centro de trabajo. Los empleadores públicos y privados deben hacerlos, salvo que demuestren que son una carga desproporcionada.', practica: 'Un ascensor malogrado no es una carga desproporcionada: una sala en el primer piso lo resuelve.' }],
    },
  },
  {
    id: 'd2', t: '09:25', ch: 'llamada', who: null, titulo: '31 de 80', banner: 'assets/foto2/callcenter.webp', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>A las 9:20 cuentas las sillas ocupadas: <mark class="clave">31 de 80</mark>. ${F.has('alexandra_citada') ? 'Alexandra está en la primera fila, con su DNI en la mano.' : 'Alexandra llegó aunque nunca confirmó: «Vi el aviso otra vez en Facebook».'}${F.has('recordatorio') ? ' Mandaste el recordatorio anoche y aun así faltan 49.' : ''}</p><p>Mientras Jessica explica la dinámica, tú sales al pasillo y llamas a tres de los que faltan.</p>`,
    type: 'calls',
    calls: [
      ['Luis Paredes · Comas', 'Contesta, desconfiado', '«Disculpe, señorita, pero el mes pasado un "call" de Jesús María me cobró 50 soles por el curso y nunca me contrató. Pensé que era lo mismo.»'],
      ['Rosa Mendoza · Villa María del Triunfo', 'Contesta con voz bajita', '«Me pagan mañana sábado en la chamba de la panadería. Hoy no tenía para los dos pasajes, de ida y de vuelta.»'],
      ['Kevin Sánchez · Breña', 'Contesta, contento', '«Ayer me evaluaron en otro call y me hicieron firmar ahí mismo. Empiezo el lunes. Gracias igual.»'],
    ],
    prompt: 'Tres razones distintas. ¿Qué haces con ellas?',
    choices: [
      { id: 'a', label: 'Cambiar tres cosas para la próxima citación: decir que el proceso es gratuito y que nunca cobran, evaluar también un martes y avisar el resultado el mismo día.',
        res: { q: 'buena', fx: { calidad: 5, personas: 3, tiempo: -1 }, rel: { jessica: 1 }, flags: ['causas_inasistencia'], cartera: { asistencia: '31 de 80 · causas: estafa, pasaje, otra oferta' },
          out: 'Jessica anota las tres en la pizarra: «Desconfianza, plata y velocidad. Eso sí se puede atacar».',
          pro: { ok: 'Cada cambio responde a una causa que escuchaste.', risk: 'Avisar el mismo día exige que los evaluadores decidan rápido y con criterio.', info: 'Lleva la cuenta de las causas: con veinte llamadas tendrás un patrón.' },
          kusi: ['celebra', '¡Las inasistencias también hablan!'] } },
      { id: 'b', label: 'Citar a 200 la próxima vez: si llega el 40 %, tendrás 80. Las causas son de cada persona y no las puedes controlar.',
        res: { q: 'aceptable', fx: { calidad: -1, tiempo: 2 }, flags: ['sobrecita'], cartera: { asistencia: '31 de 80 · se sobrecitará' },
          out: 'La cuenta cierra en el papel. Pero quemas 200 postulaciones para llenar 80 sillas, y Luis seguirá creyendo que es una estafa.',
          pro: { ok: 'Sobrecitar es una herramienta real del reclutamiento masivo.', risk: 'Si solo sobrecitas, gastas tu base de postulantes más rápido y no subes la tasa.' },
          kusi: ['pensando', 'Más gente, mismo embudo.'] } },
      { id: 'c', label: 'Anotarlos como «no interesados» y seguir con el grupo: ya hay 31 personas esperando.',
        res: { q: 'riesgosa', fx: { calidad: -3, personas: -2 }, cartera: { asistencia: '31 de 80 · sin causas' },
          out: 'El Excel dice «no interesado» en 49 filas. Rosa sí estaba interesada: solo le faltaban seis soles.',
          pro: { ok: 'Atiendes a quienes llegaron.', risk: 'Si no sabes por qué falta la gente, la próxima vez faltará igual.' },
          kusi: ['triste', 'Rosa no era «no interesada»…'] } },
    ],
    rules: [[BP, 'Llama a una muestra de quienes no llegaron: las causas de la inasistencia se pueden corregir.']],
    mirada: {
      ve: 'La tasa de asistencia no es un dato del clima: tiene causas. En Lima, muchos postulantes ya sufrieron falsas ofertas que cobran «el curso», viven al día con el pasaje y reciben ofertas de otros centros de contacto que contratan en el acto.',
      visual: { tipo: 'embudo', titulo: 'El viernes', niveles: [['Citados', 80], ['Confirmaron', 58], ['Llegaron', 31], ['Aprobaron', 15]] },
    },
  },
  {
    id: 'd3', t: '10:05', ch: 'presencial', who: null, titulo: 'Mateo en la recepción', banner: 'assets/foto2/pasillo.webp', lugar: 'Recepción del edificio · piso 1', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>Bajas los cuatro pisos. Mateo Huanca, de 27 años, está en su silla de ruedas junto al ascensor malogrado. Vino desde Comas en el Metropolitano y sabe de cobranzas: trabajó dos años en una cooperativa.</p><p>«No pasa nada, señorita, ya estoy acostumbrado.» Pero sí pasa: <mark class="clave">la evaluación es arriba y él está abajo</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Evaluarlo hoy en la sala de capacitación del primer piso: bajas con un compañero para el role-play y usas la misma guía. Jessica cubre tu grupo media hora.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, tiempo: -3 }, rel: { jessica: 1 }, flags: ['mateo_evaluado'], cartera: { ajustes: 'Sala del piso 1 como ajuste razonable' },
          out: 'Mateo hace el mejor role-play de la mañana: acuerda S/ 150 para el sábado sin levantar la voz. Jessica sube con la guía: «Desde hoy, toda evaluación tiene una sala abajo».',
          pro: { ok: 'Haces el ajuste en el momento, con la misma prueba que a los demás.', risk: 'Tu grupo de arriba espera media hora: avísales y dales agua.', info: 'Pregunta también cómo es el acceso al piso de operaciones: el ajuste no termina en la evaluación.' },
          kusi: ['celebra', '¡Eso es un ajuste razonable!'] } },
      { id: 'b', label: 'Reprogramarlo para el martes, cuando el ascensor ya funcione, y pagarle la movilidad para que no le cueste venir dos veces.',
        res: { q: 'aceptable', fx: { etica: 2, cumplimiento: 1, tiempo: 2 }, flags: ['mateo_reprogramado'], cartera: { ajustes: 'Reprogramado con movilidad' },
          out: 'Mateo acepta, cortés. Pero el martes otro centro de contacto ya lo habrá evaluado, y él vino hoy porque hoy podía.',
          pro: { ok: 'Le ofreces una alternativa y cubres el costo.', risk: 'Reprogramar cuando puedes evaluar hoy lo pone en desventaja frente a los demás.' },
          kusi: ['pensando', 'Bienintencionado… ¿pero por qué no hoy?'] } },
      { id: 'c', label: 'Pedirle que espere en la recepción hasta el último grupo, por si el técnico llega antes y arreglan el ascensor.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, personas: -3 }, flags: ['mateo_perdido'], cartera: { ajustes: 'Sin ajuste' },
          out: 'El técnico no llega. A las 13:10, Mateo se va. En la ficha queda: «no se presentó a la prueba».',
          pro: { ok: 'Esperabas una solución sin cambiar la logística.', risk: 'Hacerlo esperar sin un ajuste es negarle la evaluación en la práctica.' },
          kusi: ['indignado', 'Tres horas en la recepción…'] } },
    ],
    rules: [[LEY, 'Ley 29973, art. 50: ajustes razonables en la selección, salvo carga desproporcionada.']],
    mirada: {
      ve: 'Un ajuste razonable no es un favor: es lo que permite que una persona compita en igualdad. Muchas veces cuesta muy poco, como una sala en el primer piso, y lo que más lo impide es la costumbre de «reprogramar».',
      visual: { tipo: 'balanza', a: { t: 'Esperar o reprogramar', items: ['No cambia la logística', 'Mateo pierde su oportunidad'] }, b: { t: 'Ajustar hoy', items: ['Media hora de reorganización', 'Misma prueba para todos', 'Cumple la Ley 29973'] } },
    },
  },
  {
    id: 'd4', t: '11:40', ch: 'presencial', who: 'alexandra', titulo: 'Tu mesa de siete', banner: 'assets/foto2/reunion-circulos.webp', show: ['calidad', 'etica', 'personas'],
    body: () => `<p>Terminó el role-play. En tu mesa observaste a siete personas, y por los cupos del martes <mark class="clave">solo pueden pasar cuatro</mark>.</p><p>Tienes tus notas en la guía, con un poco de café derramado encima.</p>`,
    type: 'pick', n: 4, prompt: 'Elige a las cuatro personas que pasan a la simulación de llamada del martes.', boton: 'Pasar a estas cuatro', resumen: 'Pasaron',
    cols: ['Postulante', 'Lo que observaste'],
    rows: [
      { id: 'alexandra', cells: ['Alexandra Rivas, 19', 'Calmó al «cliente», le ofreció dos fechas y repitió el monto sin errores.'] },
      { id: 'gladys', cells: ['Gladys Quispe, 51', 'Mucha paciencia y voz firme; tardó en usar la pantalla de prueba.'] },
      { id: 'yeny', cells: ['Yeny Huamán, 23', 'Nerviosa al inicio; luego clara y rápida. Acordó fecha.'] },
      { id: 'jhon', cells: ['Jhon Castillo, 30', 'Habló poco en la dinámica; en su turno resolvió bien el caso.'] },
      { id: 'fiorella', cells: ['Fiorella Gamarra, 22', 'Muy simpática, cayó bien a todos; en el role-play se quedó en blanco.'] },
      { id: 'diego', cells: ['Diego Ponce, 26', 'Seguro y rápido; amenazó con «reportarlo a la central de riesgo».'] },
      { id: 'brayan', cells: ['Brayan Soto, 20', 'Llegó 20 minutos tarde y casi no participó.'] },
    ],
    score: { alexandra: 3, gladys: 2, yeny: 2, jhon: 2, fiorella: -2, diego: -1, brayan: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      const fl = [sc >= 8 ? 'eleccion_evidencia' : picks.includes('fiorella') ? 'eleccion_simpatia' : null, picks.includes('alexandra') ? 'alexandra_pasa' : null].filter(Boolean);
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: picks.includes('fiorella') ? -1 : 2 },
        rel: { alexandra: picks.includes('alexandra') ? 1 : 0 }, flags: fl,
        cartera: { aprobados: picks.map(p => ({ alexandra: 'Alexandra', gladys: 'Gladys', yeny: 'Yeny', jhon: 'Jhon', fiorella: 'Fiorella', diego: 'Diego', brayan: 'Brayan' })[p]).join(', ') },
        out: q === 'buena' ? 'Tus cuatro tienen algo en común: hicieron bien lo que hace un asesor de cobranza. Gladys sale secándose los ojos: «Hace años que nadie me decía que sí».' : picks.includes('fiorella') ? 'Pasa Fiorella, que cayó bien a todos. El martes tendrá que hacer sola una llamada, sin el grupo.' : 'Pasa alguien que amenazó al cliente. Eso se puede entrenar, pero también se puede repetir con un cliente de verdad.',
        pro: { ok: 'Elegir con la evidencia del role-play hace que tu decisión se pueda explicar.', risk: 'La simpatía en grupo no es lo mismo que resolver una llamada difícil.', info: 'Anota por qué pasó cada uno: el martes lo vas a necesitar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Elegiste con evidencia!' : '¿Qué viste en el role-play?'],
      };
    },
    rules: [[BP, 'Elige con lo que observaste en la prueba y en relación con el puesto, no con la impresión general.']],
    mirada: {
      ve: 'En una evaluación grupal es fácil premiar a quien cae bien o habla más. Pero el asesor estará solo frente a un cliente molesto. Las notas de lo que cada persona hizo en el role-play protegen la decisión de la simpatía y de los prejuicios por edad.',
      visual: { tipo: 'matriz', x: 'Simpatía en el grupo', y: 'Resultado en el role-play', cuadrantes: ['Pasa', 'Pasa', 'No pasa', 'Cuidado: cae bien, no resuelve'], items: [['Alexandra', .7, .9], ['Gladys', .4, .7], ['Yeny', .35, .65], ['Jhon', .15, .7], ['Fiorella', .9, .15], ['Diego', .75, .35], ['Brayan', .2, .1]] },
    },
  },
  {
    id: 'd5', t: '13:35', ch: 'presencial', who: 'bruno', titulo: '«¿Por qué 31?»', banner: 'assets/foto2/tension.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => F.has('bruno_advertido')
      ? `<p>Bruno sube los cuatro pisos y llega sin aire. Tiene un sanguche de pollo a medio comer. «Me dijiste 32 y llegaron 31. Bien que me avisaste. Ahora, <mark class="clave">¿cómo hacemos para que lleguen más?</mark>»</p>`
      : `<p>Bruno sube los cuatro pisos y llega sin aire, con el celular en la mano. «Me dijiste que el aviso funcionó. Novecientos postulantes y llegan 31. <mark class="clave">¿Por qué?</mark> El banco me pregunta el lunes.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrarle las tres causas que escuchaste y proponer cambios con su costo: evaluar martes y viernes, citar a las 10:00 para evitar la hora punta y avisar el resultado el mismo día.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3, tiempo: -2 }, rel: { bruno: 1 }, flags: ['oferta_rapida'], cartera: { bruno: 'Causas y tres cambios' },
          out: 'Bruno mastica en silencio. «¿Avisar el mismo día? Eso hacen los calls de Jesús María, y por eso nos ganan.» Aprueba dos evaluaciones por semana. Lo de las 10:00, «vemos».',
          pro: { ok: 'Le das causas y soluciones, no excusas.', risk: 'Comprometes más evaluaciones con el mismo equipo: el martes será largo.', info: 'Lleva los números de la próxima evaluación para mostrarle si los cambios funcionaron.' },
          kusi: ['feliz', 'Causa, propuesta y costo. ¡Así se habla con un gerente!'] } },
      { id: 'b', label: 'Pedirle presupuesto para pagar el pasaje a los citados: diez soles por persona que llegue es menos que la penalidad del banco.',
        res: { q: 'aceptable', fx: { confianza: 1, personas: 2, calidad: 1 }, flags: ['pide_pasajes'], cartera: { bruno: 'Pidió pasajes para citados' },
          out: 'Bruno levanta una ceja: «¿Y si vienen solo por los diez soles?». Lo va a consultar con finanzas. Atacas una causa real, pero solo una.',
          pro: { ok: 'Rosa habría llegado con ese pasaje.', risk: 'No resuelve la desconfianza ni la velocidad de la competencia.' },
          kusi: ['pensando', 'Buena idea… ¿y las otras causas?'] } },
      { id: 'c', label: 'Asegurarle que el próximo viernes citarás a 200 y llegarán al menos 80: así lo calma y gana tiempo para mejorar el proceso.',
        res: { q: 'riesgosa', fx: { confianza: 2, calidad: -3 }, rel: { bruno: 1 }, flags: ['promesa_200'], cartera: { bruno: 'Prometiste 80 el próximo viernes' },
          out: 'Bruno sonríe por primera vez en la semana: «Eso quiero escuchar». Acabas de prometer un número que no depende de ti.',
          pro: { ok: 'Bruno se va tranquilo.', risk: 'Una promesa sin base se convierte en la vara con la que te medirán.' },
          kusi: ['preocupado', '¿Y si llegan 60?'] } },
    ],
    rules: [[BP, 'Frente a la gerencia, explica la causa y propone un cambio con su costo.']],
    mirada: {
      ve: 'El gerente de campaña necesita una explicación que pueda repetirle al cliente. Una reclutadora que trae causas, propuestas y costos se convierte en socia de la operación; una que trae excusas o promesas, en la culpable del siguiente número.',
    },
  },
  {
    id: 'd6', t: '15:45', ch: 'whatsapp', who: null, titulo: 'El mensaje para Fiorella', banner: 'assets/foto/cv-mano.webp', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Tienes que avisar a los 16 que no pasaron. Empiezas por Fiorella, que te escribió dos veces: «¿Ya saben algo? 🙏». La plantilla de siempre decía: «Su perfil no se ajusta». <mark class="clave">Decides escribirle mejor</mark>.</p>`,
    type: 'compose', enviaA: 'fiorella', para: 'Para: Fiorella Gamarra · Postulante', boton: 'Enviar el mensaje',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Saludo', ops: [
        { id: 's1', t: 'Hola, Fiorella. Gracias por venir hoy a Contacta Perú y por tu paciencia con las escaleras.', ok: true, por: 'Reconoce el esfuerzo de haber venido.' },
        { id: 's2', t: 'Estimada postulante:', ok: false, por: 'Frío: ella tiene nombre.' },
      ] },
      { id: 'resultado', t: 'Resultado', ops: [
        { id: 'r1', t: 'Esta vez no pasaste a la siguiente etapa.', ok: true, por: 'Claro, sin rodeos.' },
        { id: 'r2', t: 'Por el momento estamos evaluando otras opciones y te contactaremos.', ok: false, por: 'Ambiguo: la deja esperando algo que no llegará.' },
      ] },
      { id: 'razon', t: 'La razón', ops: [
        { id: 'z1', t: 'En el role-play te costó proponer una fecha de pago al cliente, y eso es lo principal del puesto.', ok: true, por: 'Una razón concreta y ligada a la prueba.' },
        { id: 'z2', t: 'Tu perfil no se ajusta a lo que buscamos.', ok: false, por: 'No le dice nada que pueda mejorar.' },
      ] },
      { id: 'puerta', t: 'Cierre', ops: [
        { id: 'p1', t: 'Caíste muy bien al grupo. Si practicas ese paso, puedes postular a la próxima campaña. ¡Éxitos!', ok: true, por: 'Deja una puerta abierta real.' },
        { id: 'p2', t: 'Por favor, no vuelvas a escribir a este número.', ok: false, por: 'Innecesario y hiriente.' },
      ] },
    ],
    res: sel => {
      const buenas = ['s1', 'r1', 'z1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, etica: q === 'buena' ? 3 : -1, tiempo: -1 },
        flags: q === 'buena' ? ['rechazo_cuidado'] : [],
        out: q === 'buena' ? 'Fiorella responde: «Gracias por decirme por qué. Nadie me lo había dicho nunca. Voy a practicar». Usas la estructura para los otros 15.' : 'Fiorella deja el mensaje en visto. En la noche publica: «Otro call que ni te dice por qué».',
        pro: { ok: 'Un rechazo con razón concreta es una devolución útil y cuida la reputación de la empresa.', info: 'En masivo no puedes escribir 16 mensajes desde cero: arma una plantilla con un espacio para la razón de cada persona.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Un «no» que también ayuda.' : 'Ese «no» va a doler más de lo necesario.'],
      };
    },
    rules: [[BP, 'Avisa a los no seleccionados con claridad, una razón ligada a la prueba y respeto.']],
    mirada: {
      ve: 'En selección masiva, la mayoría de las personas que conoces escuchará un «no». Cómo lo dices define lo que cuentan de la empresa en su barrio, en su familia y en el grupo de Facebook, y si alguna vez volverán a postular o te recomendarán a alguien.',
      visual: { tipo: 'mensaje', titulo: 'Un «no» con respeto', txt: 'Hola, Fiorella. Gracias por venir hoy a Contacta Perú y por tu paciencia con las escaleras. Esta vez no pasaste a la siguiente etapa. En el role-play te costó proponer una fecha de pago al cliente, y eso es lo principal del puesto. Caíste muy bien al grupo. Si practicas ese paso, puedes postular a la próxima campaña. ¡Éxitos!' },
    },
  },
  {
    id: 'd7', t: '18:20', ch: 'whatsapp', who: 'jessica', titulo: 'El número del viernes', banner: 'assets/esc/reloj.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Te duelen las piernas de tanto subir y bajar. Jessica escribe desde el paradero de la avenida Abancay.</p>`,
    chat: ['¿Qué aprendimos hoy? En una línea, que se me acaba la batería 🔋'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'La tasa del día, la causa principal y el primer cambio para el martes.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { jessica: 1 },
          envia: ['jessica', 'Llegó el 39 % y aprobó la mitad: 15. La causa que más se repite es la desconfianza. El martes la citación dirá «proceso gratuito» y avisaremos el resultado el mismo día.'],
          out: 'Jessica responde con un audio de diez segundos. Se escucha el bus: «Eso. El martes medimos si funcionó».', kusi: ['celebra', '¡Dato, causa y cambio!'] } },
      { id: 'b', label: 'Que fue un día pesado pero salió bien.',
        res: { q: 'aceptable', fx: { confianza: 1 },
          envia: ['jessica', 'Día pesado, pero salió 💪'],
          out: 'Jessica responde «sí, bacán». Cierto, pero el martes empezarán sin saber qué cambiar.', kusi: ['pensando', '¿Y qué cambia el martes?'] } },
    ],
    mirada: { ve: 'Cada evaluación masiva es un experimento: se mide la tasa, se busca la causa y se cambia una cosa. Así, semana a semana, el embudo se vuelve menos ancho.' },
  },
];
