// Analista de Capacitación y Desarrollo · Capítulo 1 · «El plan que nadie cumple» · Semana 1, lunes.
// Hilo del mes: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas: Ley 29783, art. 35 b) (no menos de cuatro capacitaciones de SST al año) y su reglamento
// (capacitación dentro de la jornada); normativa SBS de prevención de lavado de activos (capacitación periódica).

export const CAP = {
  n: 1, titulo: 'El plan que nadie cumple', dia: 'Semana 1, lunes', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Financiera Chimú · Sede central de Trujillo',
  inicio: '08:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Trujillo, sede central de Financiera Chimú. Hoy empiezas como analista de Capacitación y Desarrollo.', boton: 'Entrar a la sede',
  kusi: 'Capacitar no es dictar cursos. ¡Vamos a descubrir qué le falta a la gente!',
  lead: 'Leíste el plan con lupa, buscaste los datos que de verdad explican la mora, escuchaste a una asesora de calle y no compraste lo primero que te ofrecieron.',
  reflexion: '¿Qué aprendiste hoy de alguien que no estaba en ningún curso?',
  siguiente: { n: 2, titulo: '¿Qué les falta?', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan anual de capacitación', j: 'Lorena · Desarrollo', d: 0, e: '30 cursos, 8 dictados' },
  { id: 'mora', p: 'Mora de agencias del norte', j: 'Víctor · Negocios', d: 0, e: 'Subió 2 puntos' },
  { id: 'sst', p: 'Capacitaciones de SST', j: 'Lorena · Desarrollo', d: 0, e: 'Sin registro este año' },
  { id: 'proveedor', p: 'Propuesta «Liderazgo 360»', j: 'Ronald · Proveedor', d: 0, e: 'S/ 48,000' },
  { id: 'induccion', p: 'Inducción de asesores nuevos', j: 'Lorena · Desarrollo', d: 0, e: 'Dura 2 horas' },
];

export const FUTURO = {
  plan_leido: ['Detectaste que el plan incumplía la ley de SST y la capacitación en prevención de lavado de activos.', 'Lorena lo llevará al comité. Capítulo 7.'],
  plan_sin_ley: ['No notaste que este año no hubo capacitaciones de SST.', 'Te enterarás de la peor forma en el capítulo 7.'],
  datos_mora: ['Cruzaste la mora con la antigüedad de los asesores.', 'Esa pista te llevará a una agencia el miércoles.'],
  victor_aliado: ['Víctor aceptó probar un taller corto en horario de trabajo.', 'Lo cobrará en el capítulo 6.'],
  victor_noche: ['Aceptaste un curso virtual obligatorio de noche.', 'Sandra te contará cómo les cayó. Capítulo 2.'],
  sandra_escuchada: ['Sandra te contó qué le falta de verdad: cobrar sin perder al cliente.', 'Volverá en el capítulo 5, en tu primer taller.'],
  ronald_firmado: ['Te comprometiste con el programa de Ronald antes de diagnosticar.', 'Finanzas preguntará por qué en el capítulo 4.'],
  ronald_pausa: ['Le pediste a Ronald una propuesta ligada a resultados.', 'Llegará el viernes, en el capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
};

export const WSP = [
  { chat: 'grupo', t: '08:05', de: 'Lorena', txt: '¡Bienvenida! Hoy te toca el plan anual. Prepárate para los tachones 😅' },
  { chat: 'ronald', t: '09:15', de: 'Ronald', txt: 'Buenos días 👋 Lorena me pasó tu número. Te envié por correo nuestro programa estrella. ¿Coordinamos un café?' },
  { chat: 'victor', t: '10:40', de: 'Víctor', txt: 'Paso por tu oficina en 15 min. Tema cursos. Voy con poco tiempo.' },
  { chat: 'sandra', t: '13:05', de: 'Sandra', txt: 'Hola, me dijeron que querías hablar con asesores. Estoy en la agencia de La Esperanza, puedo a la 1:30 por videollamada 📱' },
  { chat: 'victor', t: '16:10', de: 'Víctor', txt: 'Ok, probemos tu taller de 90 min en la agencia de El Porvenir. Pero un jueves, no un lunes.', si: 'victor_aliado' },
  { chat: 'sandra', t: '17:30', de: 'Sandra', txt: 'Gracias por preguntar. Nadie nos pregunta qué necesitamos 🙌', si: 'sandra_escuchada' },
  { chat: 'ronald', t: '18:20', de: 'Ronald', txt: 'Perfecto, el viernes te envío una versión con indicadores. ¡Bacán trabajar así!', si: 'ronald_pausa' },
];

export const CORREOS = [
  { t: '08:10', de: 'Lorena Villanueva', para: 'Analista de Capacitación y Desarrollo', asunto: 'Bienvenida y tu primer encargo', html: '<p>¡Bienvenida al equipo! Te dejo el plan anual impreso. Tenía 30 cursos programados y dictamos 8.</p><p>Este mes quiero que respondamos una pregunta: <b>¿la capacitación puede ayudar a bajar la mora?</b> Si no lo demostramos, el comité nos recorta en enero.</p><p>Lorena</p>' },
  { t: '09:10', de: 'Ronald Mejía · Capacita Pro', para: 'Analista de Capacitación y Desarrollo', asunto: 'Programa «Liderazgo 360» para Financiera Chimú', html: '<p>Estimada: le presento nuestro programa estrella: 8 sesiones, coaching ejecutivo, certificado internacional y un cierre de gala. Inversión: S/ 48,000 + IGV. Si confirmamos esta semana, aplicamos 10 % de descuento.</p><p>Ronald Mejía</p>' },
];

export const QUIZ = [
  { q: '¿Cuántas capacitaciones de SST al año exige como mínimo la Ley 29783?', ops: ['Una', 'Dos', 'No menos de cuatro', 'Las que decida el gerente'], ok: 2, por: 'El artículo 35, literal b), de la Ley 29783 exige no menos de cuatro capacitaciones al año en SST.' },
  { q: 'Las capacitaciones de SST, ¿cuándo deben realizarse?', ops: ['Los sábados libres', 'Dentro de la jornada de trabajo', 'Solo en vacaciones', 'Cuando el trabajador quiera'], ok: 1, por: 'El reglamento de la Ley 29783 dispone que la capacitación se realice dentro de la jornada de trabajo.' },
  { q: '¿Qué es un diagnóstico de necesidades de capacitación?', ops: ['Una lista de cursos de moda', 'Identificar qué brechas de conocimiento o habilidad explican un problema de desempeño', 'La encuesta de satisfacción del curso', 'El presupuesto del área'], ok: 1, por: 'Se parte de un problema real del trabajo y se busca qué parte se resuelve aprendiendo.' },
  { q: 'Que los asistentes digan que un curso «estuvo bonito» prueba…', ops: ['Que aprendieron', 'Que mejoró la mora', 'Solo su reacción ante el curso', 'Que el proveedor es bueno'], ok: 2, por: 'Es el primer nivel de evaluación (reacción). Aprendizaje, aplicación y resultados se miden aparte.' },
  { q: 'Un proveedor ofrece un descuento si firmas esta semana. ¿Qué haces?', ops: ['Firmas para aprovechar', 'Primero defines qué necesitas y comparas', 'Le pides más descuento', 'Lo rechazas sin leer'], ok: 1, por: 'La urgencia comercial no reemplaza el diagnóstico.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '08:20', ch: 'documento', who: null, titulo: 'El plan lleno de tachones', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Lorena te deja el plan anual impreso, con tachones en rojo y notas al margen: «no vino nadie», «se cruzó con el cierre», «¿esto quién lo pidió?».</p><p>«Antes de proponer nada, léelo como si fueras auditora. <mark class="clave">Dime qué está mal, no solo qué no se cumplió</mark>.»</p>`,
    type: 'flag', prompt: 'Marca las líneas del plan que incumplen la ley o que no tienen sentido para el negocio.',
    doc: { t: 'Plan anual de capacitación', sub: 'Financiera Chimú S.A. · versión aprobada en enero' },
    lines: [
      { id: 'excel', t: 'Excel avanzado para los 600 colaboradores (virtual, 20 horas).', bad: BP, why: 'Un curso igual para todos no parte de ninguna necesidad. ¿Una asesora de calle necesita tablas dinámicas?' },
      { id: 'sst', t: 'Seguridad y salud en el trabajo: una charla anual en el aniversario.', bad: LEY, why: 'La Ley 29783 (art. 35, literal b) exige no menos de cuatro capacitaciones al año en SST.' },
      { id: 'sabado', t: 'Las charlas de SST se dictarán los sábados por la tarde, fuera de la jornada.', bad: LEY, why: 'El reglamento de la Ley 29783 dispone que la capacitación se realice dentro de la jornada de trabajo.' },
      { id: 'lavado', t: 'Prevención de lavado de activos: no programado este año.', bad: LEY, why: 'Una financiera supervisada por la SBS debe capacitar periódicamente a su personal en prevención del lavado de activos y del financiamiento del terrorismo.' },
      { id: 'cobranza', t: 'Técnicas de cobranza y negociación para asesores: 2 talleres por agencia.' },
      { id: 'induccion', t: 'Inducción de asesores nuevos: 2 horas el primer día.', bad: BP, why: 'Un asesor nuevo evalúa créditos con dinero de la financiera. Dos horas no alcanzan para aprender la política de créditos.' },
      { id: 'lider', t: 'Liderazgo para gerentes de agencia con proveedor externo.', duda: 'Puede tener sentido, pero el plan no dice qué problema resuelve ni cómo se medirá.' },
      { id: 'enc', t: 'Evaluación: encuesta de satisfacción al final de cada curso.', bad: BP, why: 'Solo mide si gustó. No dice si aprendieron ni si cambió el trabajo.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le devuelves el plan con comentarios sobre Excel y la encuesta. Lorena asiente, pero algo grave se te pasó.' : `Le marcas ${hitsLey} incumplimientos legales. Lorena se queda en silencio: «Lo de SST y lo de lavado de activos nadie lo había visto. Esto va al comité».`,
      flags: [missLey ? 'plan_sin_ley' : 'plan_leido'], rel: { lorena: missLey ? 0 : 1 },
      cartera: { plan: missLey ? 'Revisado a medias' : 'Revisado: 3 incumplimientos legales', sst: missLey ? 'Sin registro este año' : 'Se necesitan 4 capacitaciones antes de diciembre' },
      pro: { ok: 'Separar lo obligatorio de lo opcional es lo primero que se espera de quien maneja un plan.', risk: 'Un plan puede «verse completo» y aun así incumplir la ley.', info: 'Pregunta qué capacitaciones obligatorias tiene tu sector: en finanzas, además de SST, están las de la SBS.' },
      kusi: missLey ? ['preocupado', 'Se te escapó lo que la ley exige…'] : ['celebra', '¡Auditora nivel experta!'],
    }),
    rules: [[LEY, 'Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año, dentro de la jornada.'], [LEY, 'Normativa SBS de LA/FT: capacitación periódica del personal en prevención del lavado de activos.']],
    mirada: {
      ve: 'Un plan de capacitación tiene dos capas: lo que la ley obliga y lo que el negocio necesita. Quien solo cuenta cursos dictados no ve ninguna de las dos.',
      visual: { tipo: 'balanza', a: { t: 'Lo que tenía el plan', items: ['Excel para todos', 'Una charla de SST', 'Encuesta de satisfacción'] }, b: { t: 'Lo que debería tener', items: ['4 capacitaciones de SST en horario', 'Prevención de lavado de activos', 'Cursos ligados a la mora', 'Medición del aprendizaje'] } },
      normas: [{ ley: 'Ley 29783 y su reglamento (D.S. 005-2012-TR)', dice: 'El empleador realiza no menos de cuatro capacitaciones al año en SST, dentro de la jornada de trabajo.', practica: 'Una charla en el aniversario un sábado no cumple ninguna de las dos condiciones.' }],
    },
  },
  {
    id: 'k2', t: '09:50', ch: 'documento', who: null, titulo: '¿Dónde está el problema?', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Lorena te pidió responder si la capacitación puede bajar la mora. Tienes acceso a cinco reportes, pero solo tiempo para revisar <mark class="clave">dos</mark> antes de la reunión con Víctor.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos datos que más te ayudan a diagnosticar.', boton: 'Revisar estos datos', resumen: 'Revisaste',
    cols: ['Dato', 'Qué te podría decir'],
    rows: [
      { id: 'antig', cells: ['Mora por asesor, cruzada con su antigüedad', 'Si la mora se concentra en los nuevos'] },
      { id: 'agencia', cells: ['Mora por agencia en los últimos 12 meses', 'Dónde está el problema'] },
      { id: 'satisf', cells: ['Encuestas de satisfacción de los cursos', 'Si los cursos gustaron'] },
      { id: 'asist', cells: ['Asistencia a los 8 cursos dictados', 'Quién fue y quién no'] },
      { id: 'redes', cells: ['Comentarios sobre la financiera en redes', 'La imagen de la marca'] },
    ],
    score: { antig: 3, agencia: 3, satisf: -1, asist: 1, redes: -1 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: picks.includes('antig') ? 3 : 0 },
        flags: picks.includes('antig') ? ['datos_mora'] : [], cartera: { mora: picks.includes('antig') ? 'La mora se concentra en asesores con menos de 6 meses' : 'Sin pista clara todavía' },
        out: picks.includes('antig') ? 'El cruce es claro: el 70 % de la mora nueva viene de asesores con menos de seis meses. Ya tienes una hipótesis: la inducción de dos horas.' : 'Encuentras datos interesantes, pero no una pista que se pueda resolver aprendiendo.',
        pro: { ok: 'Un buen diagnóstico empieza en un indicador del negocio, no en un catálogo de cursos.', risk: 'La satisfacción con un curso no dice nada sobre la mora.', info: 'Antes de concluir, confírmalo conversando con asesores reales.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Ahí hay una pista!' : 'Busca el dato que conecta aprender con la mora.'],
      };
    },
    rules: [[BP, 'Una necesidad de capacitación es una brecha que explica un problema del trabajo y que se cierra aprendiendo.']],
    mirada: {
      ve: 'No todo problema de desempeño se resuelve con un curso: a veces es un incentivo mal diseñado, una herramienta que falla o un jefe que no acompaña. Por eso se diagnostica con datos del negocio antes de diseñar nada.',
      visual: { tipo: 'embudo', titulo: 'De dónde viene la mora nueva', niveles: [['Mora nueva total', 100], ['Asesores con menos de 6 meses', 70], ['Asesores con más de 2 años', 12]] },
    },
  },
  {
    id: 'k3', t: '11:00', ch: 'presencial', who: 'victor', titulo: '«Primero las metas»', banner: 'assets/foto/reunion-jefa.webp', show: ['confianza', 'personas', 'cumplimiento'],
    body: () => `<p>Víctor entra sin sentarse, con el celular en la mano. Controla 40 agencias y tiene metas de colocación que vencen el viernes.</p><p>«Te voy a ser sincero: los cursos le quitan horas de calle a mi gente. Si quieres capacitar, que sea un curso virtual obligatorio <mark class="clave">de noche, después de su horario</mark>. Así no pierdo ventas.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un piloto: un taller corto, de 90 minutos, en una sola agencia y en horario de trabajo, enfocado en la mora de los nuevos.',
        res: { q: 'buena', fx: { confianza: 4, personas: 3, cumplimiento: 2 }, rel: { victor: 1 }, flags: ['victor_aliado'],
          out: 'Víctor mira el reloj: «¿Noventa minutos y en una sola agencia? Ok. Si baja la mora, lo replicamos. Si no, no me vuelvas a pedir horas».',
          pro: { ok: 'Le hablas en su idioma (la mora) y le pides poco para empezar.', risk: 'Te jugaste la credibilidad del área en un solo piloto.', info: 'Pregúntale qué agencia tiene la peor mora de asesores nuevos.' },
          kusi: ['animo', 'Pequeño, medible y en su idioma. ¡Bien!'] } },
      { id: 'b', label: 'Aceptar el curso virtual de noche: es mejor algo que nada, Víctor queda contento y los asesores pueden verlo desde su casa.',
        res: { q: 'riesgosa', fx: { personas: -5, cumplimiento: -2, confianza: 2 }, rel: { victor: 1 }, flags: ['victor_noche'],
          out: 'Víctor sonríe. Esta noche, 200 asesores que salieron a las 7 recibirán un correo con un curso «obligatorio» de 10 horas.',
          pro: { ok: 'Evitas el conflicto con un gerente con poder.', risk: 'Si un curso es obligatorio, ese tiempo es trabajo. Y aprender cansado y a la fuerza rara vez funciona.' },
          kusi: ['preocupado', '¿Quién aprende algo a las 10 de la noche, cansado?'] } },
      { id: 'c', label: 'Decirle que la capacitación es obligatoria y que debe liberar a su equipo.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -4 }, rel: { victor: -1 },
          out: '«Obligatorio para ti», dice Víctor, y se va. Ahora tienes un enemigo con 40 agencias.',
          pro: { ok: 'Tienes razón en el fondo.', risk: 'Ganar una discusión con un gerente comercial no es lo mismo que conseguir su apoyo.' },
          kusi: ['pensando', 'Razón sí… aliado no.'] } },
    ],
    rules: [[LEY, 'Las capacitaciones obligatorias, en especial las de SST, se realizan dentro de la jornada de trabajo.'], [BP, 'Con un jefe escéptico, empieza con un piloto pequeño y un indicador que a él le importe.']],
    mirada: {
      ve: 'Los jefes no odian aprender: odian perder resultados. Una profesional de desarrollo convierte la capacitación en una apuesta sobre el indicador del jefe, y la prueba primero en pequeño.',
      visual: { tipo: 'linea', titulo: 'Cómo se gana a un jefe escéptico', hitos: [['Hoy', 'Proponer un piloto pequeño'], ['Semana 2', 'Taller en una agencia'], ['Semana 4', 'Medir la mora de esos asesores'], ['Después', 'Replicar si funcionó']] },
    },
  },
  {
    id: 'k4', t: '13:30', ch: 'presencial', who: 'sandra', titulo: 'Sandra, desde la calle', banner: 'assets/foto2/entrevista-cv.webp', lugar: 'Videollamada con la agencia de La Esperanza', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Sandra aparece en la videollamada desde su moto, con el casco en la mano. Lleva cuatro años como asesora y su cartera tiene la mora más baja de la agencia.</p><p>«¿Qué me falta? Mira, el curso de Excel no me sirvió para nada. <mark class="clave">Lo difícil es cobrar sin perder al cliente</mark>: la señora del mercado que se atrasó porque se le enfermó el hijo. A los nuevos nadie les enseña eso.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntarle cómo lo hace ella y si estaría dispuesta a enseñarlo.',
        res: { q: null, fx: { personas: 4, calidad: 3 }, rel: { sandra: 1 }, flags: ['sandra_escuchada'],
          out: 'Sandra se ríe: «¿Yo, enseñar?». Luego te cuenta tres cosas que hace con cada cliente atrasado. Las anotas. Acabas de encontrar a tu primera facilitadora interna.', kusi: ['celebra', 'El mejor curso estaba en una moto. ¡Qué bacán!'] } },
      { id: 'b', label: 'Agradecerle y decirle que lo tendrás en cuenta para el plan.',
        res: { q: null, fx: { personas: 1 },
          out: 'Sandra dice «ya, gracias» y corta. Es la tercera vez que alguien de Lima, o de la sede, le dice lo mismo.', kusi: ['pensando', 'Escuchar es también preguntar más.'] } },
    ],
    mirada: { ve: 'Las personas que mejor hacen un trabajo suelen ser las mejores fuentes de lo que hay que enseñar, y muchas veces las mejores facilitadoras. Un curso diseñado con ellas se parece al trabajo real.' },
  },
  {
    id: 'k5', t: '15:20', ch: 'correo', who: null, titulo: 'El programa estrella', banner: 'assets/foto2/presentacion.webp', show: ['calidad', 'etica', 'tiempo'],
    mail: { from: 'Ronald Mejía · Capacita Pro', to: 'Analista de Capacitación y Desarrollo', asunto: 'RE: Programa «Liderazgo 360» · descuento hasta el viernes' },
    body: () => `<p>Estimada: solo para confirmar. Si firmamos esta semana, le dejamos el programa en S/ 43,200 + IGV. <mark class="clave">Lorena ya conoce nuestro trabajo</mark>. ¿Le envío el contrato hoy?</p><p>Ronald</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder que antes de decidir necesitas terminar el diagnóstico, y pedirle una propuesta con objetivos e indicadores medibles.',
        res: { q: 'buena', fx: { calidad: 4, etica: 3, tiempo: -1 }, flags: ['ronald_pausa'], cartera: { proveedor: 'En pausa hasta terminar el diagnóstico' },
          responde: 'Ronald, gracias por la propuesta. Estamos terminando un diagnóstico de necesidades; antes de decidir, ¿podrías enviarnos una versión que diga qué problema resuelve, cómo se medirá el aprendizaje y su aplicación, y el costo por participante? Así podremos compararla.',
          out: 'Ronald responde con un emoji de pulgar y un «claro que sí». Ya no hay apuro: el apuro era suyo.',
          pro: { ok: 'Pones el diagnóstico antes de la compra y obligas a comparar con criterios.', info: 'Pide siempre al menos tres propuestas para montos importantes.' },
          kusi: ['feliz', 'El apuro era de Ronald, no tuyo.'] } },
      { id: 'b', label: 'Aceptar el descuento: Lorena lo conoce, el programa se ve profesional y si se demora se pierde el precio.',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -2, tiempo: 2 }, flags: ['ronald_firmado'], cartera: { proveedor: 'Contrato en camino: S/ 43,200' },
          responde: 'Ronald, de acuerdo. Envíanos el contrato hoy para aprovechar el descuento.',
          out: 'Comprometiste el 40 % del presupuesto anual en un programa para gerentes, cuando la mora está en los asesores nuevos.',
          pro: { ok: 'Aprovechas un descuento.', risk: 'Un descuento sobre lo que no necesitas sigue siendo un gasto.' },
          kusi: ['preocupado', 'Barato… ¿pero para qué problema?'] } },
    ],
    rules: [[BP, 'Primero el diagnóstico, después la solución. La urgencia de un proveedor no es una necesidad del negocio.'], [POL, 'En Chimú, las compras de capacitación mayores a S/ 10,000 requieren tres cotizaciones.']],
    mirada: {
      ve: 'Los proveedores venden soluciones; tu trabajo es tener claro el problema. Una propuesta seria dice qué cambiará, cómo se medirá y cuánto cuesta por persona.',
      visual: { tipo: 'cambio', titulo: 'De una propuesta bonita a una comparable', pares: [['Certificado internacional', 'Objetivo ligado a un indicador'], ['Cierre de gala', 'Medición del aprendizaje y de la aplicación'], ['Descuento hasta el viernes', 'Costo por participante y tres cotizaciones']] },
    },
  },
  {
    id: 'k6', t: '17:00', ch: 'presencial', who: 'lorena', titulo: 'La pizarra de Lorena', banner: 'assets/foto2/reunion-circulos.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>Lorena te espera frente a una pizarra blanca: «Para el comité de fin de mes necesito que tengamos claro el ciclo completo. Ordénalo como lo haríamos este mes con el piloto de Víctor».</p>`,
    type: 'secuencia', prompt: 'Ordena el ciclo de una capacitación que sí sirve.', boton: 'Mostrarle la pizarra a Lorena',
    items: [
      { id: 'diag', t: 'Diagnosticar la necesidad con datos del negocio', por: 'La mora de los asesores nuevos.' },
      { id: 'obj', t: 'Definir el objetivo y cómo se medirá', por: 'Antes de diseñar, decide qué cambiará.' },
      { id: 'dis', t: 'Diseñar el taller con quien sabe hacerlo', por: 'Con Sandra como facilitadora interna.' },
      { id: 'eje', t: 'Dictarlo en horario de trabajo', por: 'Piloto de 90 minutos en una agencia.' },
      { id: 'apr', t: 'Medir aprendizaje y aplicación en el trabajo', por: 'Prueba al final y acompañamiento en campo.' },
      { id: 'res', t: 'Medir el resultado en el indicador', por: 'La mora de esos asesores un mes después.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Lorena toma foto a la pizarra: «Esto es lo que voy a defender en el comité».' : 'Lorena reordena dos tarjetas: «Si no defines cómo medir antes, después todo parece un éxito».',
        pro: { ok: 'Definir la medición antes de diseñar evita justificar después cualquier resultado.', info: 'Este ciclo se inspira en los cuatro niveles de evaluación: reacción, aprendizaje, aplicación y resultados.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Ciclo completo!' : 'Medir se decide al inicio.'],
      };
    },
    rules: [[BP, 'Define cómo medirás el éxito antes de diseñar la capacitación.']],
    mirada: {
      ve: 'Una capacitación sirve si cambia algo en el trabajo. Por eso el ciclo empieza y termina en el mismo lugar: el indicador del negocio.',
      visual: { tipo: 'flujo', titulo: 'Capacitación que sí sirve', pasos: ['Diagnóstico', 'Objetivo y medición', 'Diseño', 'Dictado', 'Aprendizaje y aplicación', 'Resultado'] },
    },
  },
  {
    id: 'k7', t: '18:35', ch: 'whatsapp', who: null, titulo: 'Antes de irte', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Lorena te escribe mientras sale de la sede.</p>`,
    chat: ['¿Con qué te vas hoy? Dime en una línea lo más importante que encontraste 🙂'],
    type: 'choice',
    choices: [
      { id: 'a', label: 'La pista de los asesores nuevos y el piloto con Víctor.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { lorena: 1 }, envia: ['lorena', 'El 70 % de la mora nueva viene de asesores con menos de 6 meses. Mañana armo el piloto de 90 min con Víctor y Sandra 💪'],
          out: 'Lorena responde: «Eso es oro. Mañana lo conversamos con calma».', kusi: ['feliz', 'Una línea con dato y siguiente paso. ¡Así!'] } },
      { id: 'b', label: 'Que el plan está muy mal y hay que rehacerlo todo.',
        res: { q: 'aceptable', fx: { confianza: -1 }, envia: ['lorena', 'Honestamente el plan está muy mal, hay que rehacer todo 😓'],
          out: 'Lorena responde: «Lo sé. ¿Y por dónde empezamos?». No tienes una respuesta corta.', kusi: ['pensando', 'Criticar es fácil; proponer, un paso más.'] } },
    ],
    mirada: { ve: 'En un primer día lo valioso no es tener todas las respuestas, sino una buena pregunta y un siguiente paso concreto.' },
  },
];
