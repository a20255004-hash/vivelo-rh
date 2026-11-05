// Reclutador/a de selección masiva · Capítulo 10 · «El balance» · Semana 2, viernes. Final abierto: la historia sigue en la Semana 3.
// Hilo: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú. Balance de las dos primeras semanas.
// Normas citadas (todas verificadas en capítulos anteriores):
// - Ley 26772, modificada por la Ley 27270 (sin requisitos discriminatorios): https://faolex.fao.org/docs/pdf/per201903.pdf
// - Ley 29973, art. 50 (ajustes razonables en la selección): https://lpderecho.pe/decreto-legislativo-1417-promueve-inclusion-personas-discapacidad/
// - Ley 29733 (datos personales: finalidad y proporcionalidad).
// - D.S. 018-2007-TR, art. 4-A (alta en T-Registro dentro del día de ingreso): https://orientacion.sunat.gob.pe/03-obligaciones-del-empleador-t-registro

export const CAP = {
  n: 10, titulo: 'El balance', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Contacta Perú · Cercado de Lima',
  inicio: '08:15', fin: '19:00', cierreHora: '18:50',
  apertura: 'Viernes de la segunda semana. Faltan nueve días para el día 21. Jessica te pide un balance de lo que pasó y de lo que viene.', boton: 'Abrir el Excel de la campaña',
  kusi: 'Diez días, cientos de personas y un embudo que ya entiendes por dentro. ¡Qué bacán! Pero esto todavía no termina.',
  lead: 'Armaste el balance de dos semanas, lo defendiste completo frente al banco, escuchaste a quienes se quedaron, ordenaste el proceso de punta a punta y respondiste un pedido nuevo con números. Y te hiciste la pregunta: ¿te ves en este puesto?',
  reflexion: '¿Te ves en este puesto? ¿Qué parte de estas dos semanas te dio más energía y cuál te la quitó?',
  siguiente: { n: 11, titulo: 'Sesenta más', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'balance', p: 'Balance de dos semanas', j: 'Jessica · Reclutamiento', d: 0, e: 'Por armar' },
  { id: 'banco', p: 'Presentación al banco', j: 'Bruno · Operaciones', d: 0, e: 'A las 11:00' },
  { id: 'proceso', p: 'Proceso de punta a punta', j: 'Jessica · Reclutamiento', d: 0, e: 'Para la semana 3' },
  { id: 'pedido', p: 'Pedido nuevo de Banco Sur', j: 'Patricia · Banco Sur', d: 0, e: 'Llega a las 17:00' },
  { id: 'tanda2', p: 'Tanda 2 en capacitación', j: 'Rubén · Capacitación', d: 3, e: 'Empieza el lunes' },
];

export const FUTURO = {
  balance_completo: ['Tu balance incluyó las renuncias y sus causas.', 'Patricia lo usará para decidir el pedido nuevo. Semana 3.'],
  balance_maquillado: ['El balance que vio el banco no mostraba las renuncias.', 'La auditoría de la semana 3 encontrará la diferencia.'],
  pedido_con_embudo: ['Respondiste el pedido de 60 asesores más con un embudo y condiciones.', 'El lunes empiezas a planificarlo. Semana 3.'],
  pedido_si_ciego: ['Aceptaste 60 asesores más sin hacer la cuenta.', 'El lunes descubrirás que no cierra. Semana 3.'],
  se_ve: ['Te ves en este puesto.', 'La semana 3 te pondrá a prueba con 60 más.'],
  se_ve_otro: ['Te ves en Gestión Humana, pero quizá en otro puesto.', 'Jessica te mostrará el lunes cómo se conecta la selección con la capacitación.'],
  no_sabe: ['Todavía no sabes si te ves en este puesto.', 'La semana 3 te dará más pistas.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: '19 años', who: 'alexandra' },
  anthony: { n: 'Anthony Ramos', sub: 'Ex asesor del piloto', who: 'anthony' },
  piloto: { n: 'Grupo piloto · Banco Sur', sub: '30 asesores', c: '#00838F' },
};

export const WSP = [
  { chat: 'grupo', t: '08:16', de: 'Jessica', txt: 'Viernes de balance 📊 Hoy llegaron 30 de 30 del piloto. Nadie faltó. NADIE.', si: 'piloto_animado' },
  { chat: 'grupo', t: '08:16', de: 'Jessica', txt: 'Viernes de balance 📊 Del piloto llegaron 27 de 30. Hay que llamar a los otros tres.', no: 'piloto_animado' },
  { chat: 'anthony', t: '09:30', de: 'Anthony', txt: 'Señorita, ya me depositaron lo de los días que fui. Gracias por tratarme bien. Mi primo quiere postular, ¿le paso su número o que le escriba él?', si: 'anthony_legal' },
  { chat: 'alexandra', t: '12:10', de: 'Alexandra', txt: 'Hoy hice 14 compromisos de pago. Karen dice que soy la mejor del piloto 🥹 En diciembre le traigo mi certificado.', si: 'alexandra_excepcion' },
  { chat: 'alexandra', t: '12:10', de: 'Alexandra', txt: 'Hola. Me fue bien en el otro call. Si algún día cambian lo de la secundaria, avíseme. Gracias por la honestidad.', si: 'alexandra_descartada' },
  { chat: 'bruno', t: '18:40', de: 'Bruno', txt: 'Gracias por esta semana. En serio. El lunes te necesito temprano: el banco quiere 60 más.' },
];

export const CORREOS = [
];

export const QUIZ = [
  { q: 'En un balance de reclutamiento masivo, ¿qué indicador dice más sobre la calidad de la selección?', ops: ['Postulaciones recibidas', 'Personas que siguen trabajando después de los primeros días, por canal', 'Avisos publicados', 'Llamadas hechas'], ok: 1, por: 'La selección se mide al final del embudo: quién se queda.' },
  { q: 'Bruno quiere presentar al banco el balance sin las renuncias. ¿Qué haces?', ops: ['Lo quitas', 'Lo presentas completo, con las causas y lo que cambió', 'Lo presentas en otro idioma', 'No presentas nada'], ok: 1, por: 'Un balance que esconde lo malo pierde valor apenas alguien lo compara con la realidad.' },
  { q: 'Te piden 60 asesores más en 15 días. ¿Qué haces primero?', ops: ['Decir que sí', 'Hacer la cuenta del embudo con las tasas reales y decir qué se necesita', 'Decir que es imposible', 'Comprar una base de CV'], ok: 1, por: 'Con las tasas reales sabes cuántas postulaciones, evaluaciones y días necesitas.' },
  { q: '¿Qué norma respalda que una postulante de 51 años y un postulante con audífono compitan en igualdad?', ops: ['Solo la Ley 29733', 'La Ley 26772 y la Ley 29973', 'La Ley 29571', 'Ninguna'], ok: 1, por: 'La Ley 26772 prohíbe requisitos discriminatorios y la Ley 29973 reconoce ajustes razonables en la selección.' },
  { q: 'De todo lo que viste en estas dos semanas, ¿qué define mejor a una reclutadora masiva?', ops: ['Llenar sillas rápido', 'Mover el embudo con números sin perder de vista a cada persona', 'Hablar bonito', 'Decir que sí a todo'], ok: 1, por: 'Los números mandan, pero detrás de cada número hay alguien que necesita trabajar.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'z1', t: '08:30', ch: 'documento', who: null, titulo: 'Dos semanas en una hoja', banner: 'assets/esc/planilla.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Abres el Excel de la campaña. Ya no se llama «FINAL_ahora_si»: lo renombraste «Banco Sur · embudo». ${F.has('mide_retencion') ? 'La pestaña de retención por canal está al día.' : 'La pestaña de retención está a medias.'} ${F.has('causas_desercion') ? 'Tienes anotadas las causas de cada salida.' : ''}</p><p>Jessica quiere el balance a las 10:30. <mark class="clave">Que diga lo que pasó, lo que funcionó y lo que falta</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del balance.', boton: 'Mandarle el balance a Jessica',
    bloques: [
      { id: 'embudo', t: 'El embudo de dos semanas', n: 1, ops: [
        { id: 'e1', t: '1,480 postulaciones → 380 citados → 170 evaluados → 107 aprobados → 40 en el piloto → 30 en piso hoy.', ok: true, por: 'Cada paso con su número: se ve dónde se pierde la gente.' },
        { id: 'e2', t: 'Más de 1,400 postulaciones en dos semanas.', ok: false, por: 'Es solo la boca del embudo.' },
      ] },
      { id: 'funciono', t: 'Lo que funcionó', n: 2, ops: [
        { id: 'f1', t: 'La feria con evaluación en el mismo lugar: 28 aprobados en un día.', ok: true },
        { id: 'f2', t: 'La citación con recordatorio y el «proceso gratuito»: menos desconfianza.', ok: true },
        { id: 'f3', t: 'Que todos trabajamos mucho.', ok: false, por: 'Es verdad, pero no es un resultado.' },
      ] },
      { id: 'fallo', t: 'Lo que falló y su causa', n: 1, ops: [
        { id: 'x1', t: 'Nueve salidas el primer día de capacitación y cuatro en el primer día en piso: la mayoría no sabía que el puesto era tan duro.', ok: true, por: 'El problema con su causa.' },
        { id: 'x2', t: 'Algunos postulantes no tenían compromiso.', ok: false, por: 'Culpa a las personas y no dice qué cambiar.' },
      ] },
      { id: 'retencion', t: 'Retención por canal', n: 1, ops: [
        { id: 'r1', t: 'Referidos y feria: la mayor proporción de aprobados que siguen en piso. Portal pagado: la menor.', ok: true, por: 'Mide el canal por quién se queda.' },
        { id: 'r2', t: 'El portal pagado trajo más gente.', ok: false, por: 'Más gente no es mejor gente.' },
      ] },
      { id: 'falta', t: 'Lo que falta para el día 21', n: 1, ops: [
        { id: 'l1', t: 'Con la tanda 2 del lunes llegamos a unos 87. Faltan 33: una evaluación grande el martes y otra feria el miércoles.', ok: true, por: 'Un número y un plan concreto.' },
        { id: 'l2', t: 'Estamos cerca: llegamos.', ok: false, por: 'Sin número, nadie puede planificar.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .83 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 4 : 0 },
        rel: { jessica: q === 'buena' ? 1 : 0 },
        cartera: { balance: q === 'buena' ? 'Embudo, aciertos, fallas con causa, retención y brecha' : 'Balance con piezas flojas' },
        out: q === 'buena' ? 'Jessica lo lee de pie, con el café en la mano. «Esto ya no es un reporte: es un plan.» Lo imprime para la reunión con el banco.' : 'Jessica te devuelve el balance con una pregunta en rojo: «¿Y cuántos nos faltan?».',
        pro: { ok: 'Un balance honesto muestra el embudo completo, lo que falló con su causa y la brecha que queda.', info: 'Guarda este balance: la próxima campaña empezará con tus tasas reales, no con las de 2024.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Dos semanas en una hoja que se entiende!' : '¿Y la brecha?'],
      };
    },
    rules: [[BP, 'Un balance de reclutamiento muestra el embudo completo, la retención por canal y la brecha con la meta.']],
    mirada: {
      ve: 'Después de dos semanas, el embudo ya no es una suposición: tiene tus tasas reales. Saber dónde se perdió la gente y qué canal trae a quienes se quedan es lo que te permite planificar la siguiente semana con menos miedo.',
      visual: { tipo: 'embudo', titulo: 'Dos semanas de campaña', niveles: [['Postulaciones', 1480], ['Citados', 380], ['Evaluados', 170], ['Aprobados', 107], ['Grupo piloto', 40], ['En piso hoy', 30]] },
    },
  },
  {
    id: 'z2', t: '10:50', ch: 'presencial', who: 'bruno', titulo: '«Quita las renuncias»', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de reuniones del piso 6', show: ['etica', 'confianza', 'calidad'],
    body: (n, F) => `<p>Faltan diez minutos para la videollamada con el banco. Bruno lee tu balance y se detiene en una línea. «¿Para qué ponemos las renuncias? <mark class="clave">Quítalas: que el banco vea lo bueno</mark>.»</p><p>${F.has('auditoria_honesta') ? 'Ayer le dijiste la verdad a Patricia sobre las fichas.' : F.has('auditoria_ocultada') ? 'Ayer le dijiste a Patricia que todas las fichas coincidían.' : 'Patricia ya pidió revisar las fichas.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Dejar las renuncias con su causa y con lo que ya cambió: si el banco las descubre después, pierden valor todos los números buenos.',
        res: { q: 'buena', fx: { etica: 5, confianza: 4 }, rel: { bruno: 1 }, flags: ['balance_completo'], cartera: { banco: 'Balance completo presentado' },
          out: 'En la videollamada, Patricia se detiene justo en esa línea: «Me gusta que nos muestren las renuncias y por qué. Eso es lo que no me mostraba el proveedor anterior». Bruno te mira de reojo y sonríe.',
          pro: { ok: 'Un balance completo te da credibilidad para cuando los números sean malos.', info: 'Lo que más valora un cliente de un proveedor es que no lo sorprendan.' },
          kusi: ['celebra', '¡La verdad completa también vende!'] } },
      { id: 'b', label: 'Quitarlas del balance, pero tenerlas listas en un anexo por si el banco pregunta.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: 1 }, rel: { bruno: 1 }, cartera: { banco: 'Renuncias en un anexo' },
          out: 'Patricia no pregunta. Pero el miércoles, en la auditoría, verá las bajas en el T-Registro y preguntará por qué no estaban en el balance.',
          pro: { ok: 'Le das gusto a Bruno sin borrar la información.', risk: 'Lo que no está en el balance parece escondido, aunque esté en un anexo.' },
          kusi: ['pensando', 'En el anexo… ¿quién lee los anexos?'] } },
      { id: 'c', label: 'Quitarlas: el balance es de Bruno y es él quien negocia con el banco.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -2 }, rel: { bruno: 1 }, flags: ['balance_maquillado'], cartera: { banco: 'Balance sin renuncias' },
          out: 'El balance se ve impecable. El problema es que lo firmaste tú, y las bajas sí están registradas.',
          pro: { ok: 'Respetas que Bruno es quien negocia.', risk: 'Un balance maquillado con tu nombre pone en juego tu credibilidad profesional.' },
          kusi: ['preocupado', 'Impecable… y con tu firma.'] } },
    ],
    rules: [[BP, 'Un reporte para el cliente incluye lo bueno y lo malo, con causas y acciones.']],
    mirada: {
      ve: 'Al final de dos semanas intensas, la tentación es mostrar solo lo bueno. Pero la confianza del cliente se construye cuando el proveedor cuenta lo que salió mal y qué hizo al respecto. Eso es lo que permite pedirle tiempo o recursos cuando hagan falta.',
      visual: { tipo: 'balanza', a: { t: 'Quitar las renuncias', items: ['Balance más bonito hoy', 'Riesgo en la auditoría'] }, b: { t: 'Mostrarlas con su causa', items: ['Credibilidad', 'Se ve lo que cambió', 'El banco confía en tus números'] } },
    },
  },
  {
    id: 'z3', t: '13:10', ch: 'presencial', who: null, titulo: 'Los que se quedaron', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Cocina del piso 3 · refrigerio del piloto', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Bajas al refrigerio del piloto con una bolsa de alfajores de la panadería de la esquina. ${F.has('edad_frenada') || F.has('redes_respondidas') ? 'Gladys te guarda un sitio.' : ''} ${F.has('mateo_evaluado') ? 'Mateo está en la mesa del fondo, la que tiene espacio para su silla.' : ''} ${F.has('jhonatan_vuelve') ? 'Jhonatan, del turno tarde, llegó temprano para saludar.' : ''}</p><p>Tienes quince minutos. <mark class="clave">Pregúntales algo que tu Excel no sabe</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas al grupo.',
    opts: [
      { id: 'quedar', label: '¿Qué hizo que se quedaran después del primer día?', info: '«Que no nos dejaron solos», dice una. «Que el padrino me pasó su número», dice otro. Nadie menciona el bono.' },
      { id: 'aviso', label: '¿Qué los hizo postular?', info: '«Que el aviso decía el sueldo y la estación», dice Yeny. «Que mi supervisor del barrio me contó cómo era», dice un referido de Wálter.' },
      { id: 'cambiar', label: '¿Qué cambiarían de la selección?', info: '«Que la simulación tenga un cliente que grite de verdad», dicen varios. «Y que nos digan antes que hay clientes de 90 días.» Es casi lo mismo que dijo Anthony.' },
      { id: 'casa', label: '¿Qué les dijo su familia del trabajo?', info: '«Mi mamá enmarcó mi primera boleta», se ríe alguien. «Mi hijo me preguntó si ahora soy jefa», dice Rosa. Por primera vez en la semana, te dan ganas de llorar.' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: 4, calidad: picks.includes('cambiar') || picks.includes('quedar') ? 3 : 1 },
      out: picks.includes('cambiar') ? 'Anotas en la última página del balance: «Simulación con un cliente difícil de verdad y presentación realista de la cartera». Empieza el lunes.' : 'Vuelves al piso 4 con los alfajores terminados y una razón más para hacer bien este trabajo.',
      kusi: ['feliz', 'Detrás de cada número, una historia.'],
    }),
    mirada: {
      ve: 'Las personas que se quedan saben qué funcionó mejor que cualquier indicador. Preguntarles cierra el círculo: lo que dicen sobre el aviso, la evaluación y el primer día es el mejor insumo para la siguiente tanda.',
    },
  },
  {
    id: 'z4', t: '15:20', ch: 'documento', who: null, titulo: 'El proceso de punta a punta', banner: 'assets/esc/camino.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Jessica quiere pegar en la pared del piso 4 el proceso completo, para que lo use cualquiera que entre a reclutamiento la próxima campaña. <mark class="clave">Es lo que aprendiste en diez días</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena el proceso de reclutamiento masivo de punta a punta.', boton: 'Pegarlo en la pared',
    items: [
      { id: 'embudo', t: 'Calcular el embudo desde la meta hacia atrás, con tasas reales', por: 'Capítulo 1: sin la cuenta, todo es suposición.' },
      { id: 'aviso', t: 'Aviso legal y realista: «cobranza», sueldo, turno y cómo llegar', por: 'Sin requisitos discriminatorios (Ley 26772).' },
      { id: 'filtro', t: 'Filtro por turno y tiempo de traslado, con consentimiento de los datos', por: 'El distrito no es la distancia.' },
      { id: 'evalua', t: 'Evaluación grupal y simulación con criterios observables y ajustes razonables', por: 'Ley 29973: nadie queda fuera por un ascensor.' },
      { id: 'oferta', t: 'Resultado y oferta el mismo día, con turno y fecha', por: 'Cada día sin respuesta pierde gente.' },
      { id: 'ingreso', t: 'Ingreso en regla: contrato y alta en el T-Registro el primer día', por: 'D.S. 018-2007-TR, art. 4-A.' },
      { id: 'piso', t: 'Acompañar el primer día en piso y medir quién se queda', por: 'La selección se mide al final del embudo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'buena' ? 3 : 0 },
        cartera: { proceso: q === 'buena' ? 'Siete pasos pegados en la pared' : 'Proceso con pasos cruzados' },
        out: q === 'buena' ? 'Jessica lo pega con cinta azul junto a la pizarra donde, hace diez días, escribió «120». Debajo alguien agrega con plumón: «Y no olvidar que son personas».' : 'Jessica cambia dos pasos de lugar: «El ingreso va antes del piso, si no, alguien trabaja sin alta».',
        pro: { ok: 'Un proceso escrito convierte lo que aprendiste en algo que el equipo puede repetir.', info: 'Revísalo al final de cada campaña con las tasas nuevas.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Diez días en siete pasos!' : 'Casi: el orden cuida a las personas.'],
      };
    },
    rules: [[LEY, 'Ley 26772, Ley 29973, Ley 29733 y D.S. 018-2007-TR: las cuatro normas que acompañaron la campaña.']],
    mirada: {
      ve: 'El reclutamiento masivo parece caos, pero tiene un orden: calcular, atraer, filtrar, evaluar, ofrecer, formalizar y acompañar. Cada paso tiene una norma o una buena práctica que lo cuida, y cada uno pierde o retiene gente.',
      visual: { tipo: 'flujo', titulo: 'Reclutamiento masivo de punta a punta', pasos: ['Embudo', 'Aviso', 'Filtro', 'Evaluación', 'Oferta', 'Ingreso', 'Primer día'], aqui: 6 },
    },
  },
  {
    id: 'z5', t: '17:10', ch: 'correo', who: null, titulo: 'Sesenta más', banner: 'assets/esc/alarma.webp', show: ['calidad', 'confianza', 'tiempo'],
    mail: { from: 'Patricia Llosa · Banco Sur', to: 'Bruno Salinas', cc: 'Reclutadora masiva; Jessica Torres', asunto: 'Ampliación de campaña: tarjetas de crédito' },
    body: () => `<p>Bruno: por los resultados del piloto, el banco quiere ampliar la campaña. Necesitamos <mark class="clave">60 asesores más para cobranza de tarjetas, en 15 días</mark>, además de los 120.</p><p>El lunes a las 9:00 les envío el perfil. Y el miércoles hacemos la auditoría completa de las fichas.</p><p>Patricia</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder con la cuenta del embudo con tus tasas reales, lo que necesitarías (otra feria, más evaluadores, más sala de capacitación) y pedir el perfil antes de comprometer una fecha.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 4, tiempo: -1 }, rel: { bruno: 1 }, flags: ['pedido_con_embudo'], cartera: { pedido: 'Respondido con embudo y condiciones' },
          responde: 'Patricia, buenas tardes. Con nuestras tasas reales, para 60 asesores más necesitamos unas 830 postulaciones, dos ferias y un segundo capacitador. Es posible en 15 días si recibimos el perfil el lunes temprano y no cambia a mitad de camino. Le confirmamos la fecha el lunes, con el perfil en la mano. Saludos.',
          out: 'Bruno te reenvía tu propio correo con un solo comentario: «Así se responde». Patricia contesta: «De acuerdo. El lunes a las 9».',
          pro: { ok: 'Respondes un pedido grande con números, condiciones y una fecha para confirmar.', info: 'Tasa real de estas dos semanas: de cada 100 postulaciones, unos 7 llegan al piso. Para 60, unas 830.' },
          kusi: ['celebra', '¡La reclutadora que hace la cuenta antes de decir que sí!'] } },
      { id: 'b', label: 'Responder que sí de inmediato: el banco está contento y es una oportunidad que Bruno no puede perder.',
        res: { q: 'riesgosa', fx: { confianza: 2, calidad: -3 }, rel: { bruno: 1 }, flags: ['pedido_si_ciego'], cartera: { pedido: 'Aceptado sin cuenta' },
          responde: 'Patricia, ¡excelente noticia! Cuenten con los 60 en 15 días. Saludos.',
          out: 'Patricia responde con un «perfecto». El lunes harás la cuenta y verás que necesitas 830 postulaciones en una semana, con los 33 que todavía faltan para los 120.',
          pro: { ok: 'Muestras entusiasmo con el cliente.', risk: 'Una promesa sin la cuenta del embudo se convierte en la próxima penalidad.' },
          kusi: ['sorpresa', '¿Sesenta más… sin la cuenta?'] } },
      { id: 'c', label: 'Responder que es imposible: todavía faltan 33 para los 120 y el equipo está agotado.',
        res: { q: 'aceptable', fx: { confianza: -1, personas: 2 }, rel: { bruno: -1 }, cartera: { pedido: 'Respondido como imposible' },
          responde: 'Patricia, buenas tardes. Con todo respeto, no es posible: aún completamos los 120. Saludos.',
          out: 'Bruno te llama en cinco minutos: «Nunca le digas "imposible" a un banco. Dile qué necesitas». Tiene razón a medias: el cansancio del equipo es real.',
          pro: { ok: 'Cuidas al equipo y eres honesta con el límite.', risk: 'Sin una alternativa con números, el «no» cierra la puerta en lugar de negociar.' },
          kusi: ['pensando', 'Un «no» con números negocia mejor.'] } },
    ],
    rules: [[BP, 'Antes de comprometer una meta, haz la cuenta del embudo con tus tasas reales.']],
    mirada: {
      ve: 'El buen resultado de una campaña suele traer una campaña más grande. La reclutadora que ya conoce sus tasas puede responder en minutos qué se necesita y en cuánto tiempo. Ese es el paso de «llenar sillas» a planificar.',
      visual: { tipo: 'embudo', titulo: 'Para 60 asesores más', niveles: [['Postulaciones', 830], ['Citados', 215], ['Evaluados', 95], ['Aprobados', 60], ['En piso', 60]] },
    },
  },
  {
    id: 'z6', t: '18:30', ch: 'presencial', who: 'jessica', titulo: '¿Te ves en este puesto?', banner: 'assets/esc/carrera.webp', lugar: 'Piso 4 · junto a la pizarra del «120»', show: ['confianza', 'personas'],
    body: (n, F) => `<p>La pizarra todavía tiene el «120» del primer día, ahora con números tachados alrededor: 1,667, 31, 9, 28, 30, 33. ${F.has('pedido_con_embudo') ? 'Abajo, con otro plumón, alguien escribió «+60».' : ''} Jessica apaga su computadora y se sienta en el borde del escritorio.</p><p>«Diez días. Te vi llamar a gente a las siete de la mañana y pelearte con un banco por una señora de 51 años. Ahora dime tú: <mark class="clave">¿te ves en este puesto?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sí: me gusta que el trabajo tenga números y personas a la vez, y que se note lo que hago.',
        res: { q: null, fx: { confianza: 3, personas: 2 }, rel: { jessica: 1 }, flags: ['se_ve'],
          out: 'Jessica sonríe: «Entonces descansa el fin de semana. El lunes son 60 más, una auditoría y la tanda 2. Y esta vez el embudo lo dibujas tú».',
          pro: { info: 'Si te ves aquí, lo que más vas a usar es lo que hiciste estos días: hacer la cuenta antes de prometer y preguntar antes de descartar.' },
          kusi: ['celebra', '¡Qué bacán! La semana 3 te espera.'] } },
      { id: 'b', label: 'Me veo en Gestión Humana, pero quizá en otro lado: lo que más me gustó fue acompañar a la gente después de contratarla.',
        res: { q: null, fx: { personas: 3, confianza: 2 }, rel: { jessica: 1 }, flags: ['se_ve_otro'],
          out: 'Jessica asiente: «Eso es capacitación o bienestar, y también te pegaba. Pero el lunes te necesito aquí: 60 más. Después hablamos de tu siguiente paso».',
          pro: { info: 'Muchos reclutadores masivos pasan luego a capacitación, bienestar o relaciones laborales: el embudo te enseña a conocer a la gente.' },
          kusi: ['feliz', 'Saber lo que te mueve también es un logro.'] } },
      { id: 'c', label: 'Todavía no sé: me gustó, pero el ritmo y la presión me cansaron más de lo que esperaba.',
        res: { q: null, fx: { personas: 2, confianza: 1 }, rel: { jessica: 1 }, flags: ['no_sabe'],
          out: 'Jessica se ríe bajito: «Esa es la respuesta más honesta que he escuchado en años. A mí me tomó tres campañas saberlo. El lunes empieza la cuarta para ti, y la más grande».',
          pro: { info: 'El cansancio de una campaña masiva es real: aprender a pedir ayuda y a cortar a tiempo es parte del puesto.' },
          kusi: ['animo', 'Dudar también es parte de elegir.'] } },
    ],
    mirada: {
      ve: 'Una reclutadora masiva vive de metas diarias, rota de campaña en campaña y habla con decenas de personas cada día. Quien disfruta este puesto disfruta de algo particular: ver cómo un número enorme se convierte, una por una, en personas que consiguen trabajo. La campaña sigue el lunes.',
      visual: { tipo: 'linea', titulo: 'Lo que viene en la semana 3', hitos: [['Lunes 9:00', 'Llega el perfil de los 60'], ['Lunes', 'Empieza la tanda 2'], ['Miércoles', 'Auditoría completa del banco'], ['Domingo', 'Día 21: ¿120?']] },
    },
  },
];
