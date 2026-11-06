// Asistente de Planillas · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Último capítulo escrito de la temporada: balance de las dos semanas, pregunta «¿te ves en este puesto?» y final abierto.
// Normas repasadas (ya verificadas en capítulos anteriores):
// - Ley 27735 y D.S. 005-2002-TR: gratificación en la primera quincena de diciembre; base con remuneraciones regulares.
//   https://lpderecho.pe/ley-gratificaciones-fiestas-patrias-navidad-ley-27735/
// - Ley 30334: bonificación extraordinaria e inafectación de la gratificación.
//   https://andina.pe/agencia/noticia-gratificacion-fiestas-patrias-sera-un-sueldo-mas-9-adicional-851640.aspx
// - D.S. 007-2002-TR, art. 10 y D.S. 008-2002-TR, art. 26: sobretiempo y compensación con descanso por acuerdo escrito.
//   https://lpderecho.pe/horas-extras-derecho-laboral
// - Ley 27240 y Ley 27403: hora de lactancia, efectivamente laborada.
//   https://lpderecho.pe/permiso-por-lactancia-materna-y-lactario-institucional-son-derechos-irrenunciables-e-independientes-informe-tecnico-000092-2023-servir-gpgsc/
// - PLAME: declaración mensual según el cronograma de SUNAT. https://orientacion.sunat.gob.pe/pdt-plame-0
// - SUNAFIL fiscaliza el cumplimiento de las normas laborales; el detalle de la inspección se verá en la Semana 3.
// Empresas, personas y montos son ficticios.

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto/cafe.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '08:00', fin: '18:30', cierreHora: '18:15',
  apertura: 'Viernes. Se terminan tus dos primeras semanas en Planillas. Hugo te espera con dos cafés pasados del local de abajo y, por primera vez, una sola pantalla prendida.', boton: 'Sentarte con Hugo',
  kusi: 'Setecientas boletas, una PLAME, dieciocho liquidaciones… ¡y tú aquí! Mira todo lo que pasó.',
  lead: 'Escuchaste tu evaluación, hiciste tu balance, opinaste sobre una deuda de años, dejaste ordenado el cierre de diciembre y respondiste la pregunta de fondo. Y justo a las 5:40, llegó una carta.',
  reflexion: 'Si el lunes empezaras de nuevo en Planillas, ¿qué harías distinto desde la primera hora?',
  siguiente: { n: 11, titulo: 'La orden de inspección', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'evaluacion', p: 'Tu evaluación de las dos semanas', j: 'Hugo · Planillas', d: 0, e: 'Hoy, 8:00' },
  { id: 'balance', p: 'Tu balance', j: 'Tú', d: 0, e: 'Por escribir' },
  { id: 'anteriores', p: 'Variables regulares de semestres anteriores', j: 'Hugo · Gerencia', d: 0, e: 'Sin decidir' },
  { id: 'diciembre', p: 'Cierre de la planilla de diciembre', j: 'Hugo · Inés', d: 0, e: 'Empieza el lunes' },
  { id: 'sunafil', p: 'Correo sin abrir', j: 'Gerencia', d: 0, e: '¿?' },
];

export const FUTURO = {
  te_ves_si: ['Dijiste que te ves en este puesto.', 'Semana 3: lo pondrás a prueba.'],
  te_ves_duda: ['Dijiste que te ves, con reparos sobre la presión de los cierres.', 'Semana 3: Hugo te tomará la palabra.'],
  te_ves_no: ['Dijiste que Planillas quizá no es para ti, y por qué.', 'Semana 3: todavía nadie te pide que decidas.'],
  anteriores_revisar: ['Propusiste revisar los semestres anteriores con cálculo y sustento.', 'Gerencia decidirá el lunes.'],
  anteriores_reclamo: ['Propusiste revisar solo a quien reclame.', 'Muchos nunca reclaman.'],
  cierre_ordenado: ['Dejaste ordenado el cierre de diciembre.', 'El lunes empiezas con un plan.'],
  inspeccion_preparada: ['Ante la orden de inspección, pediste reunir antes los documentos de estas dos semanas.', 'Semana 3, lunes.'],
  inspeccion_nervios: ['Ante la orden de inspección, propusiste revisar «qué conviene mostrar».', 'Semana 3, lunes.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  ines: { n: 'Inés Quiroz', sub: 'Contadora general', who: 'contadora' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
};

export const WSP = [
  { chat: 'gaby', t: '08:30', de: 'Gaby', txt: '🎤 Audio · 0:25 — «Amiga, Kevin y Yesenia te mandan saludos. Dicen que eres la de Planillas que sí contesta.»', si: 'gaby_aliada' },
  { chat: 'wilder', t: '09:10', de: 'Wilder', txt: 'Señorita, el lunes llevo la partida de mi hija. Y no fui a SUNAFIL, por si acaso 😅', si: 'sunafil_respeto' },
  { chat: 'wilder', t: '09:10', de: 'Wilder', txt: 'Señorita, mi cuñado igual quiere que vaya a SUNAFIL. Ya veremos.', si: 'sunafil_presion' },
  { chat: 'ines', t: '12:00', de: 'Inés', txt: 'Ya encontré mis S/ 400: estaban en una caja de Surco. El lunes lo regularizamos. Buen fin de semana.', si: 'caja_asumida' },
  { chat: 'admins', t: '13:40', de: 'Lucho (Barranco)', txt: 'Ya tengo los acuerdos de compensación firmados de diciembre. Y el reloj marcando todo. Para que no digan 😅', si: 'he_descanso_pactado' },
  { chat: 'grupo', t: '17:45', de: 'Hugo', txt: '¿Viste el correo de las 5:40? No lo abras con miedo. El lunes a las 8 lo vemos juntos.' },
];

export const CORREOS = [
  { t: '08:05', de: 'Hugo Salazar', para: 'Asistente de Planillas', asunto: 'Dos semanas', html: '<p>Hoy no hay corridas ni PLAME. Hoy conversamos tú y yo de cómo te fue. Trae tus preguntas, que yo traigo las mías.</p><p>Hugo</p>' },
  { t: '17:40', de: 'Gerencia General', para: 'Planillas; Recursos Humanos; Contabilidad', asunto: 'Orden de inspección SUNAFIL', html: '<p>Estimados: hemos recibido una orden de inspección de SUNAFIL. La primera diligencia es el lunes. Solicitan información sobre registro de asistencia, horas extra y pagos de los últimos meses en algunos locales. Reunión el lunes a las 8:00.</p><p>Gerencia General</p>' },
];

export const QUIZ = [
  { q: 'En estas dos semanas, ¿qué fue lo que más se repitió como causa de errores?', ops: ['La ley mal escrita', 'Datos que no llegaron al sistema o acuerdos que no se registraron', 'Los trabajadores', 'El banco'], ok: 1, por: 'La hora de lactancia, las compensaciones sin papel y las cuentas faltantes nacieron de datos que no se registraron.' },
  { q: '¿Cuál de estas fechas no se mueve por acuerdo de las partes?', ops: ['La reunión con Operaciones', 'El pago de la gratificación en la primera quincena de diciembre', 'La entrega de turrones', 'El chicharrón del jueves'], ok: 1, por: 'El reglamento de la Ley 27735 dice que el plazo de la gratificación es indisponible para las partes.' },
  { q: 'Descubres que un error se repitió en semestres anteriores. Lo más responsable es…', ops: ['Corregir solo hacia adelante y no decir nada', 'Cuantificarlo y llevarlo a quien decide, con sustento', 'Esperar a que alguien reclame', 'Borrarlo'], ok: 1, por: 'Una asistente no decide el gasto, pero sí puede cuantificarlo y ponerlo sobre la mesa.' },
  { q: 'Llega una orden de inspección. Lo correcto es…', ops: ['Decidir qué documentos esconder', 'Reunir los documentos reales y ordenados, y responder con la verdad', 'No contestar', 'Corregir fechas de documentos antiguos'], ok: 1, por: 'En una inspección, lo que protege a la empresa es la documentación real y ordenada.' },
  { q: '¿Qué hace bien una asistente de planillas, además de calcular?', ops: ['Nada más', 'Verificar, explicar y avisar a tiempo', 'Decidir el presupuesto', 'Contratar personal'], ok: 1, por: 'El cálculo es la base; verificar, explicar y avisar es lo que evita reclamos.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:15', ch: 'presencial', who: 'hugo', titulo: 'Tu evaluación', banner: 'assets/foto/mentora.webp', lugar: 'Sala de reuniones', show: ['confianza'],
    body: (n, F) => `<p>Hugo te da el café y una hoja con tres columnas: «Lo que hiciste bien», «Lo que hay que mejorar», «Lo que viene». ${F.has('lactancia_total') ? 'En la primera columna, arriba de todo, dice: «Yesenia».' : 'La hoja tiene cosas en las tres columnas.'}</p><p>«Antes de que la leas, <mark class="clave">pregúntame lo que quieras</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Hugo.',
    opts: [
      { id: 'mejor', label: '¿Qué hice mejor de lo que esperabas?', info: '«Preguntar antes de suponer. Con Wilder, con Inés, con la ley. En Planillas, el que supone paga… o hace pagar a otro.»' },
      { id: 'mejorar', label: '¿Qué tengo que mejorar primero?', info: '«Pedir ayuda antes. Hubo días en que te quedaste sola con cosas que eran para dos. Diciembre no se gana sola.»' },
      { id: 'error', label: '¿Cuál fue el error más caro de estas dos semanas?', info: '«El mío: la configuración del reloj y de la gratificación. Llevaba años. Lo encontraste tú porque miraste lo que yo ya no miraba.»' },
      { id: 'viene', label: '¿Qué viene en enero?', info: '«El cierre de diciembre, las vacaciones de enero, la PLAME… y el semestre empieza otra vez. Planillas es un círculo.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('mejorar') ? 3 : 2 }, rel: { hugo: 1 },
      cartera: { evaluacion: 'Conversada con Hugo' },
      out: picks.includes('error') ? 'Hugo se ríe bajito: «No cualquiera le dice a su jefe que su configuración estaba mal. Pero me lo dijiste con números».' : 'Hugo te pasa la hoja. La lees despacio; en la última columna dice: «Lo que viene: tú».',
      kusi: ['feliz', 'Una evaluación que se conversa vale el doble.'],
    }),
    mirada: {
      ve: 'Pedir una evaluación con preguntas propias es una forma de hacerse cargo de lo que uno aprende. Hugo no solo te evalúa: también reconoce sus errores. Esa es la clase de equipo donde un error se corrige, en vez de esconderse.',
    },
  },
  {
    id: 'j2', t: '09:30', ch: 'documento', who: null, titulo: 'Tu balance', banner: 'assets/esc/logro.webp', lugar: 'Tu escritorio', show: ['calidad', 'confianza'],
    body: () => `<p>Hugo te pide un balance corto para su informe de fin de año. Miras tu libreta: tiene manchas de café, nombres subrayados y una lista que empezó el lunes de la semana pasada. <mark class="clave">Elige lo que de verdad aprendiste</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu balance.', boton: 'Guardar el balance',
    bloques: [
      { id: 'hechos', t: 'Lo que pasó', n: 2, ops: [
        { id: 'h1', t: '700 gratificaciones pagadas en plazo, con variables regulares, reintegros y rechazos resueltos.', ok: true },
        { id: 'h2', t: '18 liquidaciones de Miraflores, una PLAME conciliada y una contingencia del sistema.', ok: true },
        { id: 'h3', t: 'Fue una semana tranquila, sin mayores novedades.', ok: false, por: 'No es cierto, y no le sirve a nadie.' },
      ] },
      { id: 'aprend', t: 'Lo que aprendiste', n: 2, ops: [
        { id: 'a1', t: 'Los errores más graves nacen de datos que no llegan al sistema: acuerdos de palabra, horarios sin cargar, cuentas sin pedir.', ok: true },
        { id: 'a2', t: 'Explicar una boleta por escrito cierra más reclamos que cualquier norma citada.', ok: true },
        { id: 'a3', t: 'El sistema siempre calcula bien.', ok: false, por: 'Calcula bien lo que alguien configuró bien.' },
      ] },
      { id: 'mejora', t: 'Lo que harías distinto', n: 1, ops: [
        { id: 'm1', t: 'Pedir ayuda antes y revisar casos raros desde el primer día.', ok: true },
        { id: 'm2', t: 'Nada: todo salió bien.', ok: false, por: 'Siempre hay algo que mejorar; decirlo es parte del oficio.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : 0 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        cartera: { balance: q === 'riesgosa' ? 'Balance vago' : 'Balance entregado' },
        out: q === 'buena' ? 'Hugo copia tu segunda frase en su informe: «Explicar una boleta por escrito cierra más reclamos que cualquier norma citada». «Esta me la robo.»' : 'Hugo te devuelve el balance: «Le falta lo que harías distinto. Eso es lo que más me interesa».',
        pro: { ok: 'Un balance con hechos, aprendizajes y mejoras se convierte en un plan.', risk: '«Todo salió bien» no deja nada para la próxima vez.', info: 'Guarda tu balance: en julio, con la siguiente gratificación, lo vas a releer.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Dos semanas en un párrafo!' : '¿Qué harías distinto?'],
      };
    },
    mirada: {
      ve: 'Las dos semanas pasaron rápido, pero dejaron un patrón: casi todos los problemas venían de algo que alguien sabía y no registró. Ver ese patrón es el primer paso para que la próxima gratificación sea más fácil.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas en Planillas', hitos: [['Lunes 1', 'El calendario'], ['Martes 1', 'Las horas extra'], ['Miércoles 1', 'La base'], ['Jueves 1', 'Yesenia'], ['Viernes 1', 'Miraflores'], ['Lunes 2', 'PlanMax'], ['Martes 2', 'Wilder'], ['Miércoles 2', 'La PLAME'], ['Jueves 2', 'El pago'], ['Viernes 2', 'Hoy']] },
    },
  },
  {
    id: 'j3', t: '11:00', ch: 'presencial', who: 'hugo', titulo: 'Los semestres anteriores', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Escritorio de Hugo', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('grati_solo_basico') ? 'La gratificación de este semestre salió solo con el básico, como siempre. ' : 'Este semestre las variables regulares entraron en la gratificación. '}Pero la casilla de PlanMax estuvo apagada desde que se instaló el sistema. Hugo tiene que llevar una propuesta a gerencia el lunes.</p><p>«Tú lo viste primero. <mark class="clave">¿Qué propondrías para los semestres anteriores?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Cuantificar persona por persona cuánto se dejó de pagar en los semestres anteriores, con el sustento, y llevarlo a gerencia y al área legal para decidir cómo regularizarlo.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, rel: { hugo: 1 }, flags: ['anteriores_revisar'], cartera: { anteriores: 'Propuesta: cuantificar y llevar a gerencia' },
          out: 'Hugo asiente despacio. «Va a doler. Pero es lo que corresponde. El lunes lo presento con tu cuadro.»',
          pro: { ok: 'No decides el gasto, pero lo pones sobre la mesa con números.', risk: 'Es una cifra grande y alguien preguntará por qué nadie lo vio antes.', info: 'Separa por semestre y por persona: así se puede decidir por partes.' },
          kusi: ['animo', 'Una deuda vista es una deuda que se puede pagar.'] } },
      { id: 'b', label: 'Revisar solo los casos de quienes reclamen, como Wilder: corregir todo hacia atrás es abrir una caja que nadie pidió abrir.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, flags: ['anteriores_reclamo'], cartera: { anteriores: 'Solo quien reclame' },
          out: 'Hugo no responde enseguida. «Wilder reclamó porque se atrevió. ¿Y los otros 119?» Lo anota igual como tu propuesta.',
          pro: { ok: 'Controlas el costo.', risk: 'Pagar solo a quien reclama premia al que se atreve y castiga al que confía.' },
          kusi: ['triste', '¿Y los que nunca reclaman?'] } },
    ],
    rules: [[LEY, 'La base de la gratificación incluye las remuneraciones regulares (Ley 27735 y D.S. 005-2002-TR).']],
    mirada: {
      ve: 'Lo que empezó como una casilla apagada termina siendo una pregunta ética: ¿se corrige solo a quien reclama o a todos los que se afectó? No es una decisión de una asistente, pero la propuesta que lleves pesa.',
      visual: { tipo: 'balanza', a: { t: 'Solo quien reclama', items: ['Menos costo hoy', 'Premia al que se atreve', 'Deuda escondida'] }, b: { t: 'Cuantificar a todos', items: ['Costo visible', 'Trato igual', 'Decisión con sustento'] } },
    },
  },
  {
    id: 'j4', t: '13:20', ch: 'whatsapp', who: null, titulo: 'El mensaje a los locales', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Tu escritorio', show: ['confianza', 'personas'],
    body: () => `<p>Hugo te deja escribir el mensaje de cierre de la gratificación al grupo de los 14 administradores. Estas dos semanas les escribiste para pedir, corregir y calmar. <mark class="clave">Hoy toca cerrar</mark>.</p>`,
    type: 'compose', enviaA: 'admins', para: 'Para: Administradores Sabor del Perú', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Cómo agradeces', ops: [
        { id: 'g1', t: 'Gracias a todos por las plantillas, las marcaciones y las cuentas que nos mandaron estas semanas: sin eso no se paga a 700 personas.', ok: true, por: 'Agradeces algo concreto.' },
        { id: 'g2', t: 'Gracias a todos, ¡son lo máximo! 🎉', ok: null, por: 'Amable, pero no dice qué hicieron bien.' },
      ] },
      { id: 'aprend', t: 'Qué cambia', ops: [
        { id: 'a1', t: 'Desde diciembre: horarios especiales (como la lactancia) y acuerdos de compensación se registran por escrito y en el sistema.', ok: true, por: 'Un cambio concreto, que nace de lo que pasó.' },
        { id: 'a2', t: 'Hubo varios errores en algunos locales, ya saben cuáles.', ok: false, por: 'Señala sin ayudar.' },
      ] },
      { id: 'viene', t: 'Qué viene', ops: [
        { id: 'v1', t: 'La próxima semana empezamos el cierre de diciembre: el lunes les mando la plantilla de horas extra. Felices fiestas a sus equipos.', ok: true, por: 'Fecha y tono cálido.' },
        { id: 'v2', t: 'Nos vemos en julio.', ok: false, por: 'Diciembre todavía no se cierra.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'a1', 'v1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, personas: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['cierre_ordenado'] : [], cartera: { diciembre: q === 'buena' ? 'Locales avisados del cierre' : 'Cierre sin anunciar' },
        out: q === 'buena' ? 'Los catorce responden con stickers navideños. Gaby manda un audio cantando un villancico desafinado. Lucho escribe: «Gracias, Planillas».' : 'El grupo responde con pulgares. Nadie sabe bien qué viene el lunes.',
        pro: { ok: 'Agradecer, nombrar un cambio y anunciar lo que viene deja a todos listos para el siguiente ciclo.', risk: 'Un cierre que señala culpas desanima a quienes te mandan los datos.', info: 'Guarda este mensaje: en julio lo vas a necesitar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Catorce locales de tu lado!' : 'Faltó algo en el cierre.'],
      };
    },
    mirada: {
      ve: 'Planillas depende de catorce administradores que no trabajan para Planillas. Un mensaje de cierre que reconoce lo que hicieron, y que convierte los errores en reglas, es lo que hace que en julio te manden los datos a tiempo.',
    },
  },
  {
    id: 'j5', t: '15:10', ch: 'documento', who: null, titulo: 'El cierre de diciembre', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Hugo te pide dejar listo el orden del cierre de la planilla de diciembre para que el lunes empiecen sin perder tiempo. Esta vez ya sabes cómo se hace. <mark class="clave">Ordena los pasos</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena el cierre de la planilla de diciembre. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'datos', t: 'Pedir horas extra, permisos y altas con la plantilla única y marcaciones', por: 'Los datos primero.' },
      { id: 'casos', t: 'Calcular a mano los casos raros: reintegros, asignaciones nuevas, regularizaciones de caja', por: 'Tu control del sistema.' },
      { id: 'correr', t: 'Correr la planilla en el sistema, con el respaldo a mano', por: 'Con plan B.' },
      { id: 'muestra', t: 'Revisar una muestra y conciliar con Contabilidad', por: 'Antes de pagar.' },
      { id: 'pagar', t: 'Pagar y resolver los rechazos del banco', por: 'El mismo día.' },
      { id: 'boletas', t: 'Entregar boletas y declarar la PLAME de diciembre según el cronograma', por: 'Y archivar las constancias.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['cierre_ordenado'], cartera: { diciembre: q === 'riesgosa' ? 'Plan sin ordenar' : 'Plan de cierre listo' },
        out: q === 'buena' ? 'Hugo compara tu plan con el calendario que hiciste el primer lunes: «Es el mismo, pero ahora cada paso tiene una lección al lado».' : 'Hugo mueve un paso: «La conciliación, antes de pagar. Lo aprendiste el miércoles».',
        pro: { ok: 'Un plan que recoge lo aprendido convierte un mes difícil en uno ordenado.', risk: 'Repetir el orden del primer día sin lo aprendido es empezar de cero.', info: 'Pega el plan junto al calendario de la pared.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡El círculo de Planillas, dominado!' : 'Casi: ¿qué va antes de pagar?'],
      };
    },
    mirada: {
      ve: 'El primer lunes ordenaste un calendario sin saber por qué cada cosa iba donde iba. Hoy cada paso tiene una historia detrás: Barranco, Yesenia, PlanMax, Inés. Eso es experiencia.',
      visual: { tipo: 'flujo', titulo: 'El ciclo de una planilla, otra vez', pasos: ['Datos', 'Casos raros', 'Sistema + respaldo', 'Muestra y conciliación', 'Pago', 'Boletas y PLAME'] },
    },
  },
  {
    id: 'j6', t: '16:30', ch: 'presencial', who: 'hugo', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Ventana de la oficina, sobre la avenida Arequipa', show: ['confianza'],
    body: () => `<p>Hugo se para junto a la ventana. Abajo, el tráfico de la Arequipa y el olor del local, que ya prepara la cena. «Te voy a hacer la misma pregunta que me hicieron a mí hace once años, en mi primer diciembre.»</p><p>«<mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí. Me gusta que cada número sea una persona, y que un error encontrado a tiempo cambie una Navidad.',
        res: { q: null, fx: { confianza: 3 }, rel: { hugo: 1 }, flags: ['te_ves_si'],
          out: 'Hugo sonríe: «Eso mismo dije yo. Y todavía me pasa, cuando veo una boleta bien hecha».',
          kusi: ['celebra', '¡Una planillera nació en diciembre!'] } },
      { id: 'b', label: 'Creo que sí, pero me preocupa la presión de los cierres y los días que terminan de noche.',
        res: { q: null, fx: { confianza: 2 }, rel: { hugo: 1 }, flags: ['te_ves_duda'],
          out: 'Hugo asiente: «Es la respuesta más honesta que he escuchado. La presión no se va, pero se ordena. Eso se aprende».',
          kusi: ['animo', 'Dudar también es saber lo que cuesta.'] } },
      { id: 'c', label: 'No estoy segura. Me gustó más explicar boletas y hablar con la gente que calcular.',
        res: { q: null, fx: { confianza: 1 }, flags: ['te_ves_no'],
          out: 'Hugo no se ofende: «Eso también es saber algo de ti. Hay gente de Planillas que termina en Compensaciones, en Relaciones Laborales o atendiendo personal. Nadie te pide decidir hoy».',
          kusi: ['curioso', 'Saber qué te gusta también es aprender.'] } },
    ],
    mirada: {
      ve: 'Planillas no es solo Excel: es calendario, ley, sistemas, conversaciones difíciles y una responsabilidad muy concreta, que la gente cobre bien. No a todos les gusta la misma parte, y saber cuál te gusta a ti es lo que de verdad te dejaron estas dos semanas.',
    },
  },
  {
    id: 'j7', t: '17:45', ch: 'correo', who: null, titulo: 'El correo de las 5:40', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'etica'],
    mail: { from: 'Gerencia General', to: 'Planillas; Recursos Humanos; Contabilidad', asunto: 'Orden de inspección SUNAFIL' },
    body: () => `<p>Estimados: hemos recibido una orden de inspección de SUNAFIL. La primera diligencia es el lunes. Solicitan información sobre <mark class="clave">registro de asistencia, horas extra y pagos</mark> de los últimos meses en algunos locales. Reunión el lunes a las 8:00.</p><p>Gerencia General</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder a Hugo que el lunes llegas a las 7:30 con todo lo de estas dos semanas ordenado: reportes del reloj, acuerdos de compensación, reintegros, conciliación y constancias.',
        res: { q: 'buena', fx: { cumplimiento: 4, confianza: 3 }, rel: { hugo: 1 }, flags: ['inspeccion_preparada'], cartera: { sunafil: 'Orden de inspección · lunes 8:00' },
          responde: 'Hugo: leí el correo. El lunes llego a las 7:30 con todo lo de estas dos semanas en una carpeta: reportes del reloj de Barranco, acuerdos de compensación, reintegros, informe de conciliación y constancias. Mejor mostrar lo que corregimos que esperar a que lo encuentren.',
          out: 'Hugo responde con un audio corto: «Por eso confío en ti. Descansa, que el lunes empieza otra historia». Afuera ya es de noche, y en la vereda alguien vende panetones de oferta.', kusi: ['animo', 'Lo que corregiste es tu mejor documento.'] } },
      { id: 'b', label: 'Responder a Hugo que habría que revisar el fin de semana «qué conviene mostrar y qué no».',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, flags: ['inspeccion_nervios'], cartera: { sunafil: 'Orden de inspección · lunes 8:00' },
          responde: 'Hugo: ¿no deberíamos ver este fin de semana qué conviene mostrar y qué no?',
          out: 'Hugo tarda en responder. «No. Se muestra lo que hay. Lo que corregimos estas semanas es justo lo que nos va a ayudar. El lunes lo vemos.» Te quedas mirando el correo un rato largo.', kusi: ['preocupado', 'Esconder nunca fue la salida estas dos semanas.'] } },
    ],
    mirada: { ve: 'Las dos semanas terminan con una carta que nadie quería. Pero lo que hiciste (pagar lo que se debía, registrar lo que estaba de palabra, explicar por escrito) es justo lo que una inspección busca ver. La Semana 3 empieza el lunes a las 8:00.' },
  },
];
