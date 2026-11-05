// Reclutador/a de selección masiva · Capítulo 4 · «El rol de llamada» · Semana 2, martes.
// Hilo del mes: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú.
// Normas citadas:
// - Ley 29571, Código de Protección y Defensa del Consumidor, art. 62 (métodos abusivos de cobranza: gestiones con personas
//   ajenas a la deuda; llamadas o visitas entre las 20:00 y las 07:00).
//   Texto: https://www.leyes.congreso.gob.pe/Documentos/Leyes/29571.pdf
//   Aplicación por Indecopi: https://img.lpderecho.pe/wp-content/uploads/2023/09/Resolucion-0410-2021-SPC-Indecopi-LPDerecho.pdf
// - Ley 29733, Ley de Protección de Datos Personales (principios de finalidad y proporcionalidad), ya citada en el capítulo 1.
// - Ley 26772, modificada por la Ley 27270 (requisitos de la oferta de empleo): https://faolex.fao.org/docs/pdf/per201903.pdf

export const CAP = {
  n: 4, titulo: 'El rol de llamada', dia: 'Semana 1, jueves', foto: 'assets/foto/llamada.webp',
  lugar: 'Contacta Perú · Cercado de Lima',
  inicio: '08:15', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves. El ascensor ya funciona. Hoy los aprobados de ayer hacen una llamada simulada… y tú haces de cliente.', boton: 'Ponerte la vincha',
  kusi: 'Hoy escuchas cómo suena cada persona cuando el cliente se molesta. ¡Dale!',
  lead: 'Diseñaste una simulación de llamada con criterios claros, escuchaste a tres postulantes, conociste la historia de Alexandra y decidiste qué hacer con un requisito que deja fuera a tu mejor candidata.',
  reflexion: '¿Un requisito formal siempre dice algo sobre cómo hará alguien su trabajo?',
  siguiente: { n: 5, titulo: 'Los referidos', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'simulacion', p: 'Simulación de llamada', j: 'Jessica · Reclutamiento', d: 0, e: 'Por diseñar' },
  { id: 'aprobados', p: 'Aprobados de la simulación', j: 'Jessica · Reclutamiento', d: 0, e: '15 por evaluar' },
  { id: 'alexandra', p: 'Caso de Alexandra Rivas', j: 'Jessica · Reclutamiento', d: 0, e: 'Secundaria incompleta' },
  { id: 'banco', p: 'Pedido de Banco Sur', j: 'Banco Sur · Proveedores', d: 0, e: 'Sin responder' },
  { id: 'ingreso', p: 'Paso a la capacitación', j: 'Personal · Contratos', d: 2, e: 'Capacitación del lunes' },
];

export const FUTURO = {
  simulacion_clara: ['Tu simulación mide lo que hace un asesor y respeta la Ley 29571.', 'En el capítulo 6, quienes la pasaron desertarán menos.'],
  simulacion_debil: ['Tu simulación dejó criterios a juicio de cada evaluador.', 'En el capítulo 7 Bruno dirá que «igual da».'],
  yeny_pasa: ['Pasaste a Yeny sabiendo que su error se entrena.', 'Llegará a la capacitación. Capítulo 6.'],
  pasan_todos: ['Pasaste también a quien amenazó al cliente.', 'Kiara tendrá un reclamo en su primer día en piso. Capítulo 9.'],
  sabe_ceba: ['Supiste que Alexandra termina la secundaria en un CEBA en diciembre.', 'Ese dato pesará en la respuesta del banco. Capítulo 5.'],
  alexandra_excepcion: ['Pediste a Banco Sur una excepción documentada para Alexandra.', 'La respuesta llegará en el capítulo 5.'],
  alexandra_descartada: ['Descartaste a Alexandra por el requisito del contrato.', 'Alexandra escribirá en el capítulo 5: otro call la contrató.'],
  alexandra_falseada: ['Registraste a Alexandra como si tuviera secundaria completa.', 'Banco Sur auditará las fichas en el capítulo 7.'],
  datos_proporcionales: ['Le enviaste a Banco Sur solo los datos necesarios.', 'Patricia confiará en tu criterio. Capítulo 7.'],
  datos_excesivos: ['Enviaste a Banco Sur foto, edad y distrito de todos.', 'Patricia pedirá «solo los de menos de 30». Capítulo 7.'],
  ingreso_ordenado: ['Ordenaste el paso del «sí» al primer día de capacitación.', 'Menos gente se perderá en el camino. Capítulo 6.'],
  alexandra_honesta: ['Le dijiste a Alexandra la verdad sobre su caso.', 'Ella confiará en ti, pase lo que pase. Capítulo 5.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: 'Postulante', who: 'alexandra' },
  mateo: { n: 'Mateo Huanca', sub: 'Postulante', c: '#1565C0' },
};

export const WSP = [
  { chat: 'grupo', t: '08:16', de: 'Jessica', txt: '¡Ascensor resucitado! 🙌 Hoy simulación de llamada. Los 15 del viernes llegan a las 10:00.' },
  { chat: 'mateo', t: '09:30', de: 'Mateo', txt: 'Buenos días. Ya estoy en el Metropolitano, llego 9:55. ¿Es en el mismo piso?', si: 'mateo_evaluado' },
  { chat: 'mateo', t: '09:30', de: 'Mateo', txt: 'Buenos días. Hoy sí vengo, como quedamos. Gracias por la movilidad.', si: 'mateo_reprogramado' },
  { chat: 'bruno', t: '11:00', de: 'Bruno', txt: 'Finanzas dice que pasajes no. Pero si la asistencia sube, lo vuelvo a pedir.', si: 'pide_pasajes' },
  { chat: 'bruno', t: '11:05', de: 'Bruno', txt: 'Dos evaluaciones por semana: ok. ¿Cuántos tienes hoy?', si: 'oferta_rapida' },
  { chat: 'jessica', t: '14:40', de: 'Jessica', txt: 'Ojo con la guía: una postulante de ayer se quejó en el libro de reclamaciones porque le preguntaron cuántos hijos tiene 😬', si: 'guia_vieja' },
];

export const CORREOS = [
  { t: '08:30', de: 'Jessica Torres', para: 'Reclutadora masiva', asunto: 'Anexo 3 del contrato con Banco Sur', html: '<p>Te adjunto el anexo del contrato. Lo importante: <b>«Perfil mínimo del asesor: secundaria completa, disponibilidad de turno y aprobación de la evaluación del proveedor»</b>.</p><p>Recuerda que la simulación tiene que caber en 20 minutos.</p><p>Jessica</p>' },
];

export const QUIZ = [
  { q: 'Según la Ley 29571, ¿cuál de estas prácticas de cobranza está prohibida?', ops: ['Llamar al titular a las 10 de la mañana', 'Llamar entre las 20:00 y las 07:00 o cobrarle a personas ajenas a la deuda', 'Ofrecer dos fechas de pago', 'Confirmar el monto'], ok: 1, por: 'El art. 62 de la Ley 29571 considera métodos abusivos, entre otros, las gestiones con personas ajenas a la deuda y las llamadas entre las 20:00 y las 07:00.' },
  { q: '¿Qué hace que una simulación de llamada sea una buena prueba?', ops: ['Que sea larga', 'Un caso realista y criterios observables iguales para todos', 'Que el cliente insulte mucho', 'Que tenga una nota general del 1 al 20'], ok: 1, por: 'Dos evaluadores deberían llegar a la misma conclusión con la misma llamada.' },
  { q: 'El contrato del cliente pide secundaria completa y tu mejor candidata no la tiene. ¿Qué es lo correcto?', ops: ['Registrarla como si la tuviera', 'Preguntar el porqué del requisito y pedir una excepción documentada, o respetarlo', 'Ignorar el contrato', 'Descartarla sin decirle nada'], ok: 1, por: 'Un requisito se puede cuestionar, pero no se falsea un dato.' },
  { q: 'El cliente pide la foto y la edad de todos los aprobados. ¿Qué principio de la Ley 29733 se aplica?', ops: ['El de proporcionalidad: solo los datos necesarios para la finalidad', 'Ninguno', 'El de publicidad', 'El de libre circulación'], ok: 0, por: 'Los datos tienen que ser adecuados, relevantes y no excesivos para su finalidad.' },
  { q: '¿Qué hace un CEBA en el Perú?', ops: ['Da títulos universitarios', 'Ofrece Educación Básica Alternativa para jóvenes y adultos que no terminaron el colegio', 'Es un instituto técnico', 'Es un centro de idiomas'], ok: 1, por: 'Los Centros de Educación Básica Alternativa permiten terminar la primaria o la secundaria en horarios flexibles.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '08:40', ch: 'documento', who: null, titulo: 'Diseñar la llamada', banner: 'assets/esc/idea.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Tienes hora y media para diseñar la simulación de llamada. ${F.has('criterio') ? 'Le prometiste a Bruno veinte minutos: ni uno más.' : 'Bruno no quería evaluación, así que tiene que ser corta y convincente.'} ${F.has('guia_ajustes') ? 'Partes de la guía que corregiste ayer.' : ''}</p><p>Una buena simulación hace que <mark class="clave">dos evaluadores distintos lleguen a la misma conclusión</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la simulación.', boton: 'Guardar la simulación',
    bloques: [
      { id: 'caso', t: 'El caso', n: 1, ops: [
        { id: 'k1', t: 'Cliente con 20 días de atraso en su préstamo: le recortaron horas en el trabajo y está molesto.', ok: true, por: 'Es el caso más común de la campaña.' },
        { id: 'k2', t: 'Cliente que insulta durante diez minutos sin parar.', ok: false, por: 'Es un caso extremo: mide aguante, no cobranza.' },
        { id: 'k3', t: 'El titular no contesta y el asesor llama a su hermana para que «le avise».', ok: false, por: 'Cobrar a personas ajenas a la deuda es un método abusivo (Ley 29571, art. 62).' },
      ] },
      { id: 'criterios', t: 'Qué se observa', n: 3, ops: [
        { id: 'o1', t: 'Se identifica y verifica que habla con el titular.', ok: true },
        { id: 'o2', t: 'Escucha y repite sin errores el monto y la fecha.', ok: true },
        { id: 'o3', t: 'Ofrece opciones y cierra un compromiso de pago.', ok: true },
        { id: 'o4', t: 'Menciona la central de riesgo para presionar.', ok: false, por: 'Premiaría la amenaza.' },
        { id: 'o5', t: 'Habla rápido y con seguridad.', ok: false, por: 'Hablar rápido no es cobrar bien.' },
      ] },
      { id: 'escala', t: 'Cómo se califica', n: 1, ops: [
        { id: 'e1', t: 'Cada criterio: lo hizo, lo hizo a medias o no lo hizo, con un ejemplo de la llamada.', ok: true, por: 'Es observable y se puede explicar.' },
        { id: 'e2', t: 'Una nota general del 1 al 20.', ok: false, por: 'Depende del ánimo del evaluador.' },
      ] },
      { id: 'tiempo', t: 'Duración', n: 1, ops: [
        { id: 'd1', t: '20 minutos: 5 de instrucciones, 8 de llamada y 7 de devolución.', ok: true, por: 'Cabe en lo que prometiste y deja tiempo para decirle cómo le fue.' },
        { id: 'd2', t: '45 minutos, con una prueba escrita al final.', ok: false, por: 'Rompe el acuerdo con Bruno y no mide más.' },
      ] },
      { id: 'trampa', t: 'Una prueba de criterio', n: 1, ops: [
        { id: 't1', t: 'El «cliente» pide que lo llamen a las 9 de la noche; el postulante debe proponer otra hora.', ok: true, por: 'Mide si respeta el horario que la ley permite.' },
        { id: 't2', t: 'Vale cualquier táctica si cierra el pago.', ok: false, por: 'Enseña desde el primer día que el fin justifica los medios.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 3 },
        flags: [q === 'buena' ? 'simulacion_clara' : 'simulacion_debil'], rel: { jessica: q === 'buena' ? 1 : 0 },
        cartera: { simulacion: q === 'buena' ? '20 min, 5 criterios observables' : 'Con criterios por afinar' },
        out: q === 'buena' ? 'Jessica la imprime en hoja bond y la plastifica con cinta de embalaje: «Esta se queda para todas las campañas».' : 'Jessica la revisa: «Funciona, pero cada evaluador va a entender algo distinto».',
        pro: { ok: 'Una simulación con criterios observables es justa y defendible.', risk: 'Si premias la presión, contratas a quien luego genera reclamos ante Indecopi.', info: 'Prueba la simulación con un asesor veterano antes de usarla con postulantes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Prueba de profesional!' : 'Casi: que no dependa de quién evalúa.'],
      };
    },
    rules: [[LEY, 'Ley 29571, art. 62: son métodos abusivos las gestiones con personas ajenas a la deuda y las llamadas entre las 20:00 y las 07:00.'], [BP, 'Una prueba práctica reproduce el trabajo real y se califica con criterios observables.']],
    mirada: {
      ve: 'Una simulación es una muestra del trabajo: si es realista y tiene criterios claros, predice mejor que una entrevista. Y si incluye una pequeña prueba de criterio, como la llamada a las 9 de la noche, también te dice quién cobrará dentro de la ley.',
      visual: { tipo: 'flujo', titulo: 'Simulación de 20 minutos', pasos: ['Instrucciones (5)', 'Llamada (8)', 'Devolución (7)'] },
      normas: [{ ley: 'Ley 29571, Código de Protección y Defensa del Consumidor, art. 62', dice: 'Considera métodos abusivos de cobranza, entre otros, las gestiones con personas ajenas a la deuda y las visitas o llamadas entre las 20:00 y las 07:00.', practica: 'Un asesor que no lo sabe expone al banco y al centro de contacto a sanciones de Indecopi.' }],
    },
  },
  {
    id: 'r2', t: '10:15', ch: 'llamada', who: null, titulo: 'Tú eres el cliente', banner: 'assets/foto2/callcenter.webp', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>Te sientas en la cabina del fondo, la que tiene el audífono que chilla. Haces de «señor Cárdenas», molesto porque le recortaron horas. Al final de cada llamada pides: «Llámame a las 9 de la noche, que a esa hora estoy». <mark class="clave">Escuchas a tres postulantes seguidos</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Alexandra Rivas · 19 años', 'Contesta con voz tranquila', '«Señor Cárdenas, entiendo, eso le pasa a mucha gente. ¿Le serviría pagar S/ 120 el viernes y el resto el 15?… A las 9 no puedo llamarlo, señor, pero puedo hacerlo mañana a las 7 de la mañana o mañana mismo a mediodía.»'],
      ['Yeny Huamán · 23 años', 'Arranca nerviosa', '«Buenos días, ¿con el señor…? Perdón. Señor, lo llamo por su préstamo.» No verifica que habla con el titular. Luego escucha bien, ofrece una fecha y se niega a llamar de noche.'],
      ['Kiara Llanos · 25 años', 'Habla rápido y fuerte', '«Señor, si no paga hoy lo reportamos a la central de riesgo y no va a sacar ni un celular en cuotas.» Acepta llamar a las 9: «Claro, a esa hora lo llamo».'],
    ],
    prompt: 'Escuchaste tres llamadas. ¿Quiénes pasan?',
    choices: [
      { id: 'a', label: 'Alexandra y Yeny: el error de Yeny se corrige en la capacitación. Kiara no pasa: amenazó y aceptó llamar fuera del horario permitido.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 4 }, rel: { alexandra: 1 }, flags: ['yeny_pasa'], cartera: { aprobados: 'Pasan Alexandra y Yeny; Kiara no' },
          out: 'En la devolución, Yeny anota en su mano: «verificar titular». Kiara se molesta: «En el otro call me dijeron que así se cobra».',
          pro: { ok: 'Distingues un error que se entrena de una forma de trabajar que expone a la empresa.', info: 'Lo que dijo Kiara sobre «el otro call» es una pista: muchos postulantes aprendieron a cobrar amenazando.' },
          kusi: ['celebra', 'Se entrena el olvido; la amenaza, cuesta más.'] } },
      { id: 'b', label: 'Solo Alexandra: es la única que hizo todo bien. Si dejas pasar errores ahora, la valla se cae.',
        res: { q: 'aceptable', fx: { calidad: 2, tiempo: -2 }, rel: { alexandra: 1 }, cartera: { aprobados: 'Solo Alexandra' },
          out: 'Tu valla queda altísima. Yeny se va triste por olvidar una frase. A este ritmo, el día 21 tendrás veinte asesores impecables.',
          pro: { ok: 'Eres exigente con lo que de verdad importa.', risk: 'Una prueba de ingreso no busca gente perfecta: busca gente que pueda aprender lo que le falta en la capacitación.' },
          kusi: ['pensando', '¿Perfecta o entrenable?'] } },
      { id: 'c', label: 'Las tres: Kiara cierra pagos y tiene energía; en la capacitación aprenderá a no amenazar. La meta necesita volumen.',
        res: { q: 'riesgosa', fx: { calidad: -4, cumplimiento: -4, tiempo: 2 }, flags: ['pasan_todos', 'yeny_pasa'], cartera: { aprobados: 'Pasan las tres' },
          out: 'Kiara sonríe: «Ya sabía». En su primera semana en piso volverá a hacer lo mismo, ahora con clientes reales del banco.',
          pro: { ok: 'Sumas una persona más a la meta.', risk: 'Contratar a quien amenaza es contratar un reclamo ante Indecopi.' },
          kusi: ['preocupado', 'Esa energía puede salir cara…'] } },
    ],
    rules: [[LEY, 'Ley 29571, art. 62: no se llama entre las 20:00 y las 07:00.']],
    mirada: {
      ve: 'En la simulación ves dos tipos de error: los que se corrigen con práctica (olvidar verificar al titular) y los que muestran una forma de trabajar (amenazar, aceptar llamar de noche). La capacitación puede con los primeros; los segundos suelen repetirse.',
      visual: { tipo: 'matriz', x: 'Cierra el compromiso', y: 'Respeta la ley y al cliente', cuadrantes: ['Entrenable', 'Pasa', 'No pasa', 'Riesgo: cierra presionando'], items: [['Alexandra', .9, .92], ['Yeny', .6, .75], ['Kiara', .8, .1]] },
    },
  },
  {
    id: 'r3', t: '12:05', ch: 'presencial', who: 'alexandra', titulo: 'La ficha de Alexandra', banner: 'assets/foto/entrevista.webp', lugar: 'Sala pequeña del piso 4', show: ['personas', 'calidad'],
    body: () => `<p>Al pasar sus datos al sistema, ves una línea en la ficha de Alexandra: «Secundaria: 4.º año, incompleta». Y el anexo del contrato dice «secundaria completa».</p><p>Le pides cinco minutos antes de que se vaya. Ella se sienta derecha, con la mochila en las rodillas: <mark class="clave">sabe por qué la llamaste</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas.',
    opts: [
      { id: 'porque', label: '¿Por qué dejaste el colegio?', info: '«Mi mamá se enfermó cuando yo estaba en cuarto. Me puse a trabajar en un puesto de ropa en Gamarra. Tres años, de lunes a domingo.»' },
      { id: 'ceba', label: '¿Estás estudiando ahora?', info: '«Sí, en un CEBA de La Victoria, en la noche. Termino la secundaria en diciembre. Tengo mi constancia de matrícula en el celular.»' },
      { id: 'cobranza', label: '¿Por qué cobranzas?', info: '«Porque pagan en planilla y el turno de la mañana me deja ir al CEBA. Después quiero estudiar Enfermería Técnica.»' },
      { id: 'clientes', label: '¿Cómo tratabas a los clientes difíciles en Gamarra?', info: '«Les dejaba hablar primero. La gente grita cuando siente que no la escuchan. Después les ofrecía dos opciones, nunca una.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: 3, calidad: picks.includes('ceba') || picks.includes('clientes') ? 3 : 1 },
      rel: { alexandra: 1 },
      flags: picks.includes('ceba') ? ['sabe_ceba'] : [],
      out: picks.includes('ceba') ? 'En diciembre tendrá su certificado. Faltan siete semanas. El día 21 de la campaña, no.' : 'Te quedas con la imagen de Alexandra en Gamarra, calmando clientes a los 15 años.',
      kusi: ['curioso', 'Lo que hizo en Gamarra no está en ninguna ficha.'],
    }),
    mirada: {
      ve: 'Un requisito formal resume una historia en una línea. Preguntar qué hay detrás no significa saltarse el requisito: significa tener la información completa antes de decidir.',
    },
  },
  {
    id: 'r4', t: '13:20', ch: 'presencial', who: 'jessica', titulo: 'El anexo 3', banner: 'assets/foto/reunion-jefa.webp', show: ['etica', 'calidad', 'confianza'],
    body: (n, F) => `<p>Jessica come un tamal frente a la computadora. «No lo puse yo: está en el contrato con Banco Sur. ${F.has('sabe_ceba') ? 'Que termine en diciembre no cambia el contrato de hoy.' : ''} Pero tampoco quiero perderla. <mark class="clave">Tú la evaluaste: ¿qué hacemos?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escribirle hoy a Banco Sur: preguntar para qué piden secundaria completa y proponer una excepción documentada con su simulación y su constancia del CEBA. Si dicen que no, se respeta.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3, tiempo: -3 }, rel: { jessica: 1, alexandra: 1 }, flags: ['alexandra_excepcion'], cartera: { alexandra: 'Excepción pedida a Banco Sur' },
          out: 'Jessica firma el correo contigo. «Puede que digan que no. Pero si dicen que sí, cambiamos el requisito para todos los que estudian en un CEBA.»',
          pro: { ok: 'Cuestionas el requisito por el canal correcto y con evidencia, sin saltarte el contrato.', risk: 'La respuesta puede tardar y Alexandra puede perder la capacitación del lunes.', info: 'Pregunta también cuántos postulantes más están en la misma situación: quizá el caso no sea solo de Alexandra.' },
          kusi: ['animo', 'Preguntar el porqué también es criterio.'] } },
      { id: 'b', label: 'Descartarla con una explicación honesta: el requisito está en el contrato con el cliente y Contacta no puede incumplirlo. Que postule en enero, con su certificado.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -2, calidad: -1 }, rel: { alexandra: -1 }, flags: ['alexandra_descartada'], cartera: { alexandra: 'Descartada por requisito contractual' },
          out: 'Alexandra escucha sin llorar. «Gracias por decírmelo de frente.» Se va por la escalera, aunque el ascensor ya funciona.',
          pro: { ok: 'Cumples el contrato y eres honesta con ella.', risk: 'Aceptas un requisito sin saber si mide algo del puesto, y pierdes a tu mejor candidata.' },
          kusi: ['triste', 'Cumpliste… y perdiste a la mejor.'] } },
      { id: 'c', label: 'Registrarla como «secundaria completa»: termina en siete semanas y su simulación demuestra más que el certificado. Nadie revisa ese campo.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -5 }, rel: { alexandra: 0 }, flags: ['alexandra_falseada'], cartera: { alexandra: 'Ficha con un dato falso' },
          out: 'El sistema acepta el cambio en un clic. Alexandra no lo sabe. Si alguien audita las fichas, la que queda expuesta es ella… y tú.',
          pro: { ok: 'Quieres protegerla.', risk: 'Falsear un dato pone en riesgo a la postulante, al contrato y tu credibilidad.' },
          kusi: ['indignado', 'Protegerla no es mentir por ella.'] } },
    ],
    rules: [[BP, 'Un requisito se cuestiona con evidencia y por el canal correcto; nunca se falsea.'], [BP, 'Pregúntate si el requisito es necesario para hacer el trabajo.']],
    mirada: {
      ve: 'Muchos requisitos se copian de contrato en contrato sin que nadie recuerde por qué están ahí. Una reclutadora puede preguntar y proponer un cambio, pero lo hace por escrito y con pruebas. Lo que nunca hace es esconder el requisito ni el dato.',
      visual: { tipo: 'balanza', a: { t: 'El requisito', items: ['Está en el contrato', 'Es fácil de verificar', 'Se aplica a todos por igual'] }, b: { t: 'La evidencia', items: ['Mejor simulación del día', 'Termina la secundaria en diciembre', 'Tres años atendiendo público'] } },
    },
  },
  {
    id: 'r5', t: '15:10', ch: 'correo', who: null, titulo: 'Banco Sur pide datos', banner: 'assets/foto2/revisan.webp', show: ['cumplimiento', 'etica', 'confianza'],
    mail: { from: 'Patricia Llosa · Gestión de Proveedores, Banco Sur', to: 'Reclutadora masiva', cc: 'Bruno Salinas', asunto: 'Relación de aprobados' },
    body: (n, F) => `<p>Buenas tardes. Para nuestra validación, envíenme hoy la relación de aprobados con <mark class="clave">foto, edad, distrito y DNI</mark>.</p>${F.has('alexandra_excepcion') ? '<p>Sobre la excepción que piden: la reviso con mi gerente esta semana.</p>' : ''}<p>Saludos,<br>Patricia Llosa</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Enviar nombre, DNI, resultado de la simulación y estado de documentos; preguntar para qué necesita la foto, la edad y el distrito.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: 2 }, flags: ['datos_proporcionales'], cartera: { banco: 'Datos necesarios enviados; se preguntó la finalidad' },
          responde: 'Patricia, buenas tardes. Adjunto la relación de aprobados con nombre, DNI, resultado de la simulación de llamada y estado de documentos. ¿Nos cuenta para qué necesitan la foto, la edad y el distrito? Así enviamos solo lo que sirva para esa finalidad. Saludos.',
          out: 'Patricia responde a la hora: «La foto era para las credenciales, pero eso lo ve Seguridad recién en el ingreso. Con esto basta».',
          pro: { ok: 'Envías lo necesario y preguntas la finalidad del resto.', info: 'Si piden edad o foto para decidir quién entra, el riesgo ya no es solo de datos: es de discriminación.' },
          kusi: ['celebra', 'Datos justos, para lo justo.'] } },
      { id: 'b', label: 'Enviar todo lo que pide: es el cliente, firmó un contrato y Bruno está en copia.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -3, confianza: 1 }, rel: { bruno: 1 }, flags: ['datos_excesivos'], cartera: { banco: 'Foto, edad y distrito de todos' },
          responde: 'Patricia, adjunto la relación de aprobados con foto, edad, distrito y DNI. Saludos.',
          out: 'Bruno te responde con un pulgar. Ahora el banco tiene la foto y la edad de quince personas que no saben que las enviaste.',
          pro: { ok: 'Respondes rápido al cliente.', risk: 'Los datos personales se tratan solo para su finalidad y en la medida necesaria (Ley 29733).' },
          kusi: ['preocupado', '¿Para qué querrá la edad?'] } },
      { id: 'c', label: 'No responder hasta que Jessica vuelva de su reunión: es un tema del contrato y no te toca decidirlo sola.',
        res: { q: 'aceptable', fx: { tiempo: -2, confianza: -1 }, cartera: { banco: 'En espera de Jessica' },
          responde: 'Patricia, buenas tardes. Recibido; le respondemos mañana temprano con mi coordinadora. Saludos.',
          out: 'Jessica vuelve a las 18:00 y responde lo mismo que tú habrías podido proponer. Patricia esperó un día.',
          pro: { ok: 'Consultas antes de compartir datos.', risk: 'Podías proponer una respuesta y consultarla en cinco minutos.' },
          kusi: ['pensando', 'Consultar está bien… con una propuesta en la mano.'] } },
    ],
    rules: [[LEY, 'Ley 29733: los datos personales se tratan solo para su finalidad y deben ser adecuados, relevantes y no excesivos.']],
    mirada: {
      ve: 'Que el cliente pida un dato no lo vuelve necesario. Preguntar la finalidad protege a los postulantes y también al centro de contacto: la foto y la edad, en manos de quien decide, son la puerta de entrada a la discriminación.',
    },
  },
  {
    id: 'r6', t: '16:50', ch: 'documento', who: null, titulo: 'Del «sí» a la capacitación', banner: 'assets/esc/camino.webp', show: ['calidad', 'tiempo', 'personas'],
    body: (n, F) => `<p>${F.has('oferta_rapida') ? 'Como acordaste con Bruno, hoy avisas el resultado el mismo día.' : 'Hoy decides cómo avisas a los aprobados.'} Pero entre el «sí» y el primer día de capacitación hay un fin de semana de por medio, y en la campaña pasada <mark class="clave">uno de cada cinco se perdió en ese camino</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos desde que alguien aprueba hasta su primer día de capacitación.', boton: 'Mandárselo a Personal',
    items: [
      { id: 'aviso', t: 'Avisarle el resultado el mismo día', por: 'Antes de que otro centro de contacto lo contrate.' },
      { id: 'docs', t: 'Enviarle la lista de documentos y la fecha límite', por: 'Clara y en un solo mensaje.' },
      { id: 'verif', t: 'Recibir y revisar los documentos', por: 'Lo que falta hoy se arregla; mañana es un ingreso que se cae.' },
      { id: 'personal', t: 'Pasar el expediente a Personal para el contrato', por: 'El reclutamiento entrega; Personal formaliza.' },
      { id: 'reco', t: 'Recordatorio el día anterior: hora, piso y qué traer', por: 'Lo mismo que funcionó con la citación.' },
      { id: 'recibe', t: 'Recibirlo en la puerta el primer día de capacitación', por: 'Ver una cara conocida baja los nervios.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['ingreso_ordenado'] : [],
        cartera: { ingreso: q === 'buena' ? 'Ruta del «sí» al primer día, con responsables' : 'Ruta por ordenar' },
        out: q === 'buena' ? 'Hugo, de Personal, responde: «Por fin alguien me manda los expedientes completos antes del lunes».' : 'Personal te devuelve dos expedientes incompletos: «¿Y la copia del DNI? ¿Y el número de cuenta sueldo?».',
        pro: { ok: 'Cada paso tiene un responsable y una fecha.', info: 'Mide cuántos aprobados llegan al primer día: es una tasa del embudo que casi nadie mira.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Nadie se pierde en el camino!' : 'Ojo con el orden.'],
      };
    },
    rules: [[BP, 'El reclutamiento no termina con el «sí»: termina cuando la persona llega a su primer día.']],
    mirada: {
      ve: 'Entre la aprobación y el primer día hay un vacío peligroso: la persona sigue buscando, otro le ofrece algo, se pierde un documento. Acompañar ese tramo es parte del trabajo de una reclutadora masiva.',
      visual: { tipo: 'linea', titulo: 'Del «sí» al lunes', hitos: [['Jueves', 'Aviso y lista de documentos'], ['Viernes mañana', 'Documentos revisados'], ['Viernes tarde', 'Expediente en Personal'], ['Domingo', 'Recordatorio'], ['Lunes', 'Primer día de capacitación']] },
    },
  },
  {
    id: 'r7', t: '18:35', ch: 'whatsapp', who: 'alexandra', titulo: '«¿Cómo me fue?»', banner: 'assets/esc/dudas.webp', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>Estás bajando por la avenida Abancay, entre ambulantes de choclo con queso, cuando vibra el celular.</p>`,
    chat: ['¿Cómo me fue? 🙏 No he podido almorzar de los nervios.'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad: que su simulación fue de las mejores, en qué está su caso y cuándo le darás una respuesta.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { alexandra: 1 }, flags: ['alexandra_honesta'],
          envia: ['alexandra', 'Alexandra, tu simulación fue de las mejores del día. Lo de la secundaria lo estamos viendo con el cliente y mañana te digo exactamente cómo queda. Gracias por contarme tu historia. Ahora sí, ¡almuerza! 😊'],
          out: 'Alexandra responde con un audio: se escucha que sonríe. «Pase lo que pase, gracias por decirme las cosas claras.»', kusi: ['feliz', 'La verdad con cariño también se agradece.'] } },
      { id: 'b', label: 'Mandarle un «¡Te fue increíble! 🎉» para que pueda comer tranquila; los detalles se los cuentas mañana.',
        res: { q: 'aceptable', fx: { personas: 1, confianza: -1 }, rel: { alexandra: 1 },
          envia: ['alexandra', '¡Te fue increíble! 🎉 Mañana te cuento todo.'],
          out: 'Alexandra le cuenta a su mamá que entró. Todavía no ha entrado.', kusi: ['pensando', '¿Y si mañana no son buenas noticias?'] } },
    ],
    mirada: { ve: 'Una postulante que espera una respuesta lee cada palabra. Decir la verdad con fecha y con cuidado sostiene su confianza, incluso si al final la respuesta es un no.' },
  },
];
