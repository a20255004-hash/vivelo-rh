// Talent Acquisition Partner · Capítulo 10 · «Diez días» · Semana 2, viernes. Final abierto: continúa en la Semana 3.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas (ya citadas en capítulos anteriores, sin normas nuevas):
// - Ley 26772 (requisitos no discriminatorios en ofertas de empleo), capítulo 1.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
// - Ley 29973, art. 50 (ajustes razonables en la selección), capítulo 4.
//   https://lpderecho.pe/modifican-reglamento-de-la-ley-29973-ley-general-de-la-persona-con-discapacidad/
// - Ley 30709 (igualdad remunerativa), capítulo 5.
//   https://lpderecho.pe/reglamento-ley-30709-ley-prohibe-discriminacion-remunerativa-varones-mujeres
// - Ley 31572, art. 8.4 (equipos y compensaciones en teletrabajo), capítulo 8.
//   https://lpderecho.pe/ley-teletrabajo-ley-31572-actualizada-2026/
// - D.S. 003-97-TR, art. 18 (preaviso de renuncia), capítulo 8.
//   https://lpderecho.pe/jurisprudencia-articulo-18-tuo-decreto-legislativo-728-renuncia-retiro-voluntario/

export const CAP = {
  n: 10, titulo: 'Diez días', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'Viernes. Hace diez días hábiles, en la pantalla de la sala decía «Cóndor Pay · kickoff en 6 semanas» y alguien había escrito con plumón «¿y la gente?». Hoy la pantalla muestra tu tablero. La columna «Aceptó» ya no cabe en una sola fila. Y todavía hay celdas en rojo.', boton: 'Entrar al piso 9',
  kusi: 'Hoy toca mirar atrás… y prepararte para lo que viene. Porque en atracción de talento siempre viene alguien más.',
  lead: 'Cerraste las últimas llamadas de la semana, dejaste todo en orden, le diste las gracias a Renzo, armaste el plan de la Semana 3 y te sentaste con Valeria a mirar tus dos semanas. Y a las seis sonó el celular.',
  reflexion: '¿Te ves en este puesto?',
  siguiente: { n: 11, titulo: 'La oferta de Renzo', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: 'Faltan QA, data y DevOps' },
  { id: 'ingresos', p: 'Ingresos escalonados', j: 'Talent · Planillas · TI', d: 0, e: 'Tres entran el lunes' },
  { id: 'tablero', p: 'Tablero semanal', j: 'Talent', d: 0, e: 'Para Gerencia, cada viernes' },
  { id: 'semana3', p: 'Plan de la Semana 3', j: 'Talent', d: 0, e: 'Por armar' },
  { id: 'retencion', p: 'Equipo actual de backend', j: 'Tecnología', d: 0, e: 'Sin revisar' },
];

export const FUTURO = {
  kevin_criterio: ['Llevaste el pedido de trabajo remoto de Kevin a Valeria con un criterio que sirva para otros.', 'Valeria responde el lunes.'],
  kevin_promesa: ['Le prometiste a Kevin trabajo 100 % remoto sin consultar.', 'La política sigue diciendo híbrido.'],
  viernes_cerrado: ['Cerraste la semana con retroalimentación enviada y el tablero actualizado.', 'El lunes empiezas sin deudas.'],
  renzo_gracias: ['Le agradeciste a Renzo y le preguntaste cómo está.', 'Te contó más de lo que esperabas. Capítulo 11.'],
  plan_semana3: ['El plan de la Semana 3 empieza por lo escaso: DevOps, QA y data.', 'Y por mirar el embudo otra vez.'],
  renzo_escuchado: ['Renzo te contó que tiene una oferta en dólares y lo escuchaste sin apurar nada.', 'Capítulo 11, Semana 3.'],
  renzo_expuesto: ['Le contaste a Leonardo lo de Renzo sin su permiso.', 'Capítulo 11, Semana 3.'],
  te_ves_si: ['Te ves en este puesto.', 'La Semana 3 te espera.'],
  te_ves_otro: ['Te ves en RR.HH., pero en otra parte del proceso.', 'Valeria ya lo anotó.'],
  te_ves_duda: ['Todavía no sabes si te ves en este puesto.', 'Está bien: dos semanas es poco.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · nueva ingresante', who: 'dev' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  kevin: { n: 'Kevin Ríos', sub: 'DevOps · candidato', c: '#7A5C2E' },
  gabriela: { n: 'Gabriela Ruiz', sub: 'Frontend · entra el lunes', c: '#8E3B5E' },
};

export const WSP = [
  { chat: 'camila', t: '08:20', de: 'Camila', txt: 'Acepto 💚 Mi abuela lloró. Mañana presento mi renuncia y pido que me exoneren de parte del preaviso.', si: 'camila_oferta' },
  { chat: 'camila', t: '08:20', de: 'Camila', txt: 'Lo pensé mucho. Acepto, pero con algunas dudas que quiero conversar en mi primera semana.', no: 'camila_oferta' },
  { chat: 'talent', t: '08:40', de: 'Rocío', txt: 'Para que conste: Planillas ya revisó las horas de agosto. Se pagan o compensan este mes 🙌', si: 'sobretiempo_corregido' },
  { chat: 'gabriela', t: '11:30', de: 'Gabriela', txt: '¡Ya firmé el contrato! Brenda me escribió para el almuerzo del lunes 🥹', si: 'preingreso_plan' },
  { chat: 'leonardo', t: '13:00', de: 'Leonardo', txt: 'Cóndor Pay leyó el reporte. Dijeron que es el primero que entienden sin llamarme. Bien.', si: 'reporte_limpio' },
  { chat: 'leonardo', t: '13:00', de: 'Leonardo', txt: 'Cóndor Pay preguntó por qué les mandamos sueldos pedidos de candidatos. Tenemos que hablar.', si: 'reporte_expuesto' },
  { chat: 'renzo', t: '17:20', de: 'Renzo', txt: '¿Tienes 10 minutos? Prefiero llamarte que escribirlo.' },
];

export const CORREOS = [
  { t: '09:00', de: 'Mónica Arévalo · Gerencia General', para: 'Talent', asunto: 'Gracias', html: '<p>Gracias por el tablero de ayer. Es la primera vez que entiendo en cinco minutos dónde estamos con una contratación. Quiero verlo cada viernes.</p><p>Mónica</p>', si: 'comite_verdad' },
  { t: '18:05', de: 'Cóndor Pay · Dirección de Producto', para: 'Leonardo Vega; Talent', asunto: 'Ampliación del alcance', html: '<p>Buenas noticias: el piloto con comercios en Medellín se adelanta. Necesitaremos ampliar el equipo con seis personas más y un tech lead para enero. Conversemos la próxima semana.</p>' },
];

export const QUIZ = [
  { q: 'Un candidato DevOps aceptaría solo con trabajo 100 % remoto y la política es híbrida. Lo mejor es…', ops: ['Prometérselo para no perderlo', 'Llevar el caso a quien decide, con un criterio que sirva para otros casos parecidos', 'Rechazarlo sin consultar', 'Decirle que mienta sobre su distrito'], ok: 1, por: 'Una excepción sin criterio se vuelve un problema de equidad; una con criterio puede volverse política.' },
  { q: 'De las dos semanas, ¿qué cambio tuvo más efecto en cuántos candidatos llegaron al final?', ops: ['Más mensajes en LinkedIn', 'Una prueba técnica justa, un filtro de CV sin sesgos y respuestas rápidas', 'Más avisos en Facebook', 'Las reseñas de cinco estrellas'], ok: 1, por: 'Lo que más mueve el embudo es cómo se diseña el proceso, no cuánto volumen se genera.' },
  { q: 'Un tech lead clave te cuenta, en confianza, que tiene otra oferta. Lo primero es…', ops: ['Contárselo a su jefe de inmediato', 'Escucharlo, entender qué le pesa y preguntarle qué puedes hacer con lo que te contó', 'Ofrecerle más dinero sin consultar', 'Ignorarlo: no es tu vacante'], ok: 1, por: 'La retención empieza escuchando. Lo que te cuenta en confianza no se comparte sin su permiso.' },
  { q: 'Una oferta aceptada se convierte en un buen ingreso cuando…', ops: ['La persona firma la carta', 'Hay contrato, alta, equipo, accesos y alguien que la recibe el primer día', 'El CTO lo aprueba', 'Pasa un año'], ok: 1, por: 'El preingreso es la parte menos visible y una de las más importantes del trabajo.' },
  { q: 'Atraer talento con honestidad significa…', ops: ['Contar solo lo bueno de la empresa', 'Contar el reto, las condiciones reales y lo que la empresa está mejorando', 'Decir lo que el candidato quiere oír', 'No hablar de sueldo'], ok: 1, por: 'Prometer de más termina en renuncias rápidas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:50', ch: 'llamada', who: null, titulo: 'Las llamadas del viernes', banner: 'assets/foto/llamada.webp', lugar: 'Cabina de llamadas del piso 9', show: ['personas', 'confianza', 'tiempo'],
    body: (n, F) => `<p>La cabina de la luz que parpadea ya es tuya. Antes de las 10 tienes cuatro llamadas. ${F.has('camila_oferta') ? 'Camila aceptó a primera hora y todavía estás sonriendo.' : 'Camila aceptó, aunque con dudas.'}</p>`,
    type: 'calls',
    calls: [['Ximena Flores', 'Mobile · oferta', '¿En serio? ¡Sí, acepto! Gracias por haberme dicho la verdad el miércoles.'], ['Martín Ccori', 'Backend · oferta', 'Acepto. Y gracias por el ajuste: es la primera prueba en la que sentí que me evaluaban a mí y no a mis ojos.'], ['Lucía Huamaní', 'DevOps · resultado de la prueba', 'Diez de doce, ¿no? Bacán. ¿Qué sigue?'], ['Kevin Ríos', 'DevOps · vuelve a llamar', 'Lo pensé. Acepto si es 100 % remoto. Lo de Chosica no cambia: son tres horas al día.']],
    prompt: 'La política de Código Andino es híbrida, dos días en San Isidro. Kevin es DevOps, el perfil más escaso. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Decirle que no puedes prometérselo hoy, que llevarás su caso a Valeria con una propuesta de criterio (por ejemplo, por distancia o tipo de rol) y que le respondes el lunes.',
        res: { q: 'buena', fx: { confianza: 3, etica: 2, personas: 2 }, flags: ['kevin_criterio'],
          out: 'Kevin dice: «Me parece justo. Si dicen que no, igual gracias por pelearla». Valeria lee tu propuesta y la pone en la agenda del lunes: «Esto le puede servir a más gente».',
          pro: { ok: 'No prometes lo que no puedes firmar y conviertes un caso en un posible criterio para todos.', risk: 'Puede que diga que no. Pero no habrá una excepción sin reglas.', info: 'Revisa cuántos del equipo actual viven a más de hora y media de San Isidro.' },
          kusi: ['animo', 'Una excepción con criterio puede volverse una regla mejor.'] } },
      { id: 'b', label: 'Prometérselo: es DevOps, no hay otro, y ya se verá cómo se arregla.',
        res: { q: 'riesgosa', fx: { confianza: -2, etica: -2 }, rel: { 'valeria-ta': -1 }, flags: ['kevin_promesa'],
          out: 'Kevin acepta feliz. Cuando se lo cuentas a Valeria, se queda en silencio. «¿Y qué le digo a Brenda, que vive en Ate y viene dos días?»',
          pro: { ok: 'Aseguras un DevOps.', risk: 'Una excepción prometida sin consultar rompe la equidad del equipo y tu credibilidad.' },
          kusi: ['preocupado', 'Otra promesa sin firma…'] } },
    ],
    mirada: {
      ve: 'Al final de una búsqueda aparecen pedidos de excepción: más sueldo, otra modalidad, otra fecha. Un Talent Acquisition Partner no los resuelve solo ni los promete: los lleva a quien decide, con un criterio que sirva para el siguiente caso.',
      visual: { tipo: 'embudo', titulo: 'Dos semanas de Cóndor Pay', niveles: [['Contactados', 230], ['Conversaron', 70], ['Pruebas entregadas', 36], ['Ofertas', 12], ['Aceptadas', 9]] },
    },
  },
  {
    id: 'j2', t: '10:30', ch: 'sistema', who: null, titulo: 'Dejar todo en orden', banner: 'assets/esc/reloj.webp', lugar: 'ATS · tablero de la vacante', show: ['tiempo', 'personas', 'calidad'],
    body: () => `<p>Es el último día de tus dos semanas de búsqueda intensa, pero no el último del trabajo. Lo que dejes ordenado hoy <mark class="clave">es lo que el lunes te va a salvar</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes que cierras antes del almuerzo.', boton: 'Cerrar estos', resumen: 'Cerraste',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'feedback', cells: ['Mandar retroalimentación a los 9 que no siguieron esta semana', 'Lo prometiste a todos'] },
      { id: 'ingresos', cells: ['Confirmar con Planillas y TI los tres ingresos del lunes', 'Alta, laptop y buddy'] },
      { id: 'tablero', cells: ['Actualizar el tablero para Gerencia', 'Mónica lo quiere cada viernes'] },
      { id: 'post', cells: ['Publicar en LinkedIn «¡Contratamos 9 desarrolladores!»', 'Joaquín lo quiere hoy'] },
      { id: 'excel', cells: ['Borrar las pestañas viejas del Excel de pipeline', 'Nadie las usa'] },
      { id: 'brenda', cells: ['Pagar los bonos de referidos de Brenda', 'Se pagan cuando los referidos cumplan su periodo de prueba'] },
    ],
    score: { feedback: 3, ingresos: 3, tablero: 2, post: 0, excel: 0, brenda: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: picks.includes('feedback') ? 4 : -2, cumplimiento: picks.includes('ingresos') ? 3 : -3, tiempo: 2 },
        flags: q === 'buena' ? ['viernes_cerrado'] : [], cartera: { ingresos: picks.includes('ingresos') ? 'Lunes confirmado con Planillas y TI' : 'Lunes sin confirmar', tablero: picks.includes('tablero') ? 'Actualizado para Mónica' : 'Pendiente' },
        out: q === 'buena' ? 'A la 1, nueve personas tienen su retroalimentación, Planillas tiene las tres altas del lunes agendadas y el tablero está listo. Bajas a almorzar un lomo saltado con la sensación rara de no deberle nada a nadie.' : picks.includes('brenda') ? 'Rocío te detiene: «El bono se paga cuando cumplan su periodo de prueba. Lo dicen tus propias reglas».' : 'Cierras algunas cosas. Algo prometido queda para el lunes.',
        pro: { ok: 'Lo prometido a personas y lo que tiene fecha legal va primero.', risk: 'Un post que celebra «9 contratados» antes de que empiecen puede quedar mal si alguno se retira.', info: 'Celebra cuando entren, no cuando acepten.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Viernes sin deudas!' : '¿Qué prometiste esta semana?'],
      };
    },
    mirada: {
      ve: 'Una búsqueda no termina con la aceptación: termina cuando cada persona que no siguió sabe por qué, cada persona que entra tiene su primer día listo y la gerencia sabe dónde estamos. Ahí se nota quién trabaja con un proceso y quién solo con prisa.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Compromiso con alguien', cuadrantes: ['Hazlo hoy', 'Hazlo hoy', 'Puede esperar', 'No ahora'], items: [['Retroalimentación', .5, .95], ['Ingresos del lunes', .35, .9], ['Tablero', .3, .7], ['Post de LinkedIn', .15, .25], ['Pestañas del Excel', .2, .1], ['Bonos antes de tiempo', .1, .05]] },
    },
  },
  {
    id: 'j3', t: '12:00', ch: 'whatsapp', who: null, titulo: 'Gracias, Renzo', banner: 'assets/foto/cafe.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Renzo estuvo en casi todo: la servilleta, la prueba, el meetup, las entrevistas. ${F.has('valla_mantenida') ? 'Y le agradeció a Talent no meterle gente que no pasó.' : 'Y ahora tendrá que enseñar lo básico a tres personas en pleno kickoff.'} Hace días que lo ves llegar más tarde y con más ojeras.</p><p>Le escribes. <mark class="clave">No solo para agradecer</mark>.</p>`,
    type: 'compose', enviaA: 'renzo', para: 'Para: Renzo Huanca · Tech Lead Backend', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Agradecimiento', ops: [
        { id: 'g1', t: 'Renzo, gracias por estas dos semanas: la prueba nueva y las entrevistas fueron tuyas tanto como mías.', ok: true, por: 'Concreto y justo.' },
        { id: 'g2', t: 'Renzo, ¡lo logramos! 🎉', ok: null, por: 'Alegre, pero no dice qué hizo él.' },
      ] },
      { id: 'como', t: 'Pregunta', ops: [
        { id: 'c1', t: 'Te he visto muy cargado. ¿Cómo estás tú, más allá del proyecto?', ok: true, por: 'Le abres una puerta.' },
        { id: 'c2', t: 'El lunes entran tres a tu equipo, ¿ya tienes listo su plan?', ok: false, por: 'Otra tarea más.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'k1', t: 'Si quieres, el lunes tomamos un café de verdad, no de la máquina.', ok: true },
        { id: 'k2', t: 'Buen fin de semana.', ok: null, por: 'Correcto, pero cierra la conversación.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'c1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : 0 },
        flags: sel.como === 'c1' ? ['renzo_gracias'] : [],
        out: q === 'buena' ? 'Renzo tarda en responder. Cuando lo hace, escribe: «Gracias. La verdad, no muy bien. Te cuento luego». Se te queda la frase en la cabeza toda la tarde.' : q === 'riesgosa' ? 'Renzo responde con un pulgar. Nada más.' : 'Renzo responde: «Gracias, igual. Fue bacán trabajar así».',
        pro: { ok: 'Agradecer en concreto y preguntar por la persona abre conversaciones que importan.', risk: 'Tratar al tech lead solo como evaluador lo agota sin que nadie lo note.', info: 'Retener a quien ya está cuesta menos que reemplazarlo.' },
        kusi: [q === 'buena' ? 'pensando' : 'curioso', q === 'buena' ? '«No muy bien»… algo pasa.' : 'A veces la pregunta importa más que el gracias.'],
      };
    },
    mirada: { ve: 'Atraer talento y retenerlo son dos caras del mismo trabajo. Los tech leads que evalúan, entrevistan y acompañan a los nuevos son los primeros en saturarse, y los más buscados por otras empresas. Preguntarles cómo están es parte del trabajo de Talent.' },
  },
  {
    id: 'j4', t: '14:30', ch: 'documento', who: null, titulo: 'El plan de la Semana 3', banner: 'assets/esc/camino.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('comite_verdad') ? 'Gerencia aprobó ayer el plan para cubrir lo que falta.' : 'Gerencia cree que casi está todo cerrado. No lo está.'} Faltan QA, data y, si Kevin no entra, DevOps. Y el kickoff es en cuatro semanas.</p><p>Ordenas <mark class="clave">la Semana 3</mark> antes de irte.</p>`,
    type: 'secuencia', prompt: 'Ordena el plan de la Semana 3. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'devops', t: 'Lunes: decisión sobre Kevin y oferta a Lucía para DevOps', por: 'Lo más escaso va primero.' },
      { id: 'ingresos', t: 'Lunes: recibir a los tres que entran y revisar su primer día', por: 'Que nadie espere.' },
      { id: 'perfiles', t: 'Martes: cerrar los perfiles de QA y data con sus líderes', por: 'Lo que aprendiste con Renzo, otra vez.' },
      { id: 'busqueda', t: 'Miércoles: búsqueda directa y comunidades para QA y data', por: 'Con el mensaje que funcionó.' },
      { id: 'embudo', t: 'Jueves: volver a mirar el embudo por etapa y por género', por: 'Para saber si los cambios funcionaron.' },
      { id: 'tablero', t: 'Viernes: tablero para Gerencia', por: 'Como cada viernes.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan_semana3'], cartera: { semana3: q === 'riesgosa' ? 'Plan desordenado' : 'De lo escaso a lo medible, día por día' },
        out: q === 'buena' ? 'Pegas el plan en el tablero de corcho junto a tu escritorio, al lado de la servilleta de Renzo. Valeria pasa, lo lee y asiente sin decir nada. Eso, viniendo de ella, es mucho.' : 'Valeria mueve un par de tarjetas: «DevOps primero. Si se nos va Lucía, no hay kickoff».',
        pro: { ok: 'Empezar por lo escaso y terminar midiendo es la lección de estas dos semanas.', risk: 'Dejar DevOps para el final repite el error que casi te cuesta el plazo.', info: 'El jueves compara el embudo con el del lunes de esta semana.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Semana 3 con mapa!' : 'Lo escaso, primero.'],
      };
    },
    mirada: {
      ve: 'Planificar la semana siguiente con lo aprendido es lo que convierte la experiencia en método: empezar por lo escaso, traducir bien cada perfil, buscar donde está la gente y medir si los cambios funcionan.',
      visual: { tipo: 'linea', titulo: 'Semana 3', hitos: [['Lunes', 'DevOps y nuevos ingresos'], ['Martes', 'Perfiles de QA y data'], ['Miércoles', 'Búsqueda'], ['Jueves', 'Embudo'], ['Viernes', 'Tablero']] },
    },
  },
  {
    id: 'j5', t: '16:00', ch: 'presencial', who: 'valeria-ta', titulo: 'Diez días con Valeria', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Terraza del piso 9', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Valeria te invita a la terraza con dos cafés de la cafetería de abajo, no de la máquina. Desde ahí se ve el Golf y, a lo lejos, la Vía Expresa llena de autos de viernes.</p><p>«${F.has('plazo_honesto') ? 'El primer día me dijiste que 12 en dos semanas era de alto riesgo. Tenías razón.' : 'El primer día me dijiste que llegábamos a 12. No llegamos.'} Hoy es tu turno: <mark class="clave">pregúntame lo que quieras sobre estas dos semanas</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Valeria.',
    opts: [
      { id: 'bien', label: '¿Qué hice bien?', info: '«Entendiste el negocio antes de buscar. Y aprendiste rápido que los buenos no se convencen con frases: se convencen con el reto, el rango y la verdad.»' },
      { id: 'mejorar', label: '¿Qué tengo que mejorar?', info: '«Prometer menos y medir antes. Y algo más difícil: decirle que no a Leo sin que sienta que le quitas algo. Lo vas a necesitar mucho.»' },
      { id: 'puesto', label: '¿Qué es lo más difícil de este puesto, de verdad?', info: '«Que trabajas para tres clientes a la vez: el jefe que pide, el candidato que decide y la empresa que paga. Si solo atiendes a uno, los otros dos te lo cobran.»' },
      { id: 'futuro', label: '¿Qué viene ahora?', info: '«Lo de siempre: más gente, menos tiempo y alguien del equipo actual pensando en irse. Atraer es la mitad del trabajo; la otra mitad es que no se vayan.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, calidad: picks.includes('mejorar') ? 2 : 1 }, rel: { 'valeria-ta': 1 },
      out: 'Valeria termina su café. «Doce desarrolladores. Pensé que lo difícil iba a ser encontrarlos. Lo difícil fue hacerlo bien.»',
      kusi: ['feliz', 'Dos semanas, y ya hablas el idioma.'],
    }),
    mirada: {
      ve: 'Un Talent Acquisition Partner atiende a tres clientes a la vez: el hiring manager, el candidato y la empresa. En estas dos semanas viviste a los tres: un CTO impaciente, candidatos con otras ofertas y una gerencia que pedía números. Equilibrar a los tres, con honestidad, es el corazón del puesto.',
      visual: { tipo: 'balanza', a: { t: 'Lo que cuesta', items: ['Todos quieren todo para ayer', 'Compites con ofertas en dólares', 'Las promesas se cobran'] }, b: { t: 'Lo que da', items: ['Cambias la vida de alguien con una llamada', 'Ves el negocio desde adentro', 'Construyes equipos'] } },
    },
  },
  {
    id: 'j6', t: '17:25', ch: 'llamada', who: null, titulo: 'Lo que Renzo no escribió', banner: 'assets/foto2/tension.webp', lugar: 'Escalera de emergencia del piso 9', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Renzo te llama. Se escucha el viento: está en la escalera de emergencia, donde la gente va a hablar sin que la escuchen. ${F.has('renzo_gracias') ? '«Me preguntaste cómo estaba. Te cuento.»' : '«Prefiero decírtelo a ti antes que a Leo.»'}</p><p>«<mark class="clave">La misma empresa de Miami que quería a Diego me ofreció ser tech lead</mark>. En dólares, remoto. No he dicho que sí. Pero estoy cansado. Muy cansado.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escucharlo, preguntarle qué le pesa más y qué tendría que cambiar para quedarse, y acordar con él qué hacer con lo que te contó.',
        res: { q: 'buena', fx: { personas: 5, confianza: 4, etica: 3 }, flags: ['renzo_escuchado'],
          out: 'Renzo habla diez minutos sin parar: las noches de agosto, las entrevistas, la carga. «No es solo la plata.» Al final te dice: «Si quieres, cuéntale a Valeria. A Leo todavía no». Quedan en verse el lunes.',
          pro: { ok: 'Escuchas, entiendes y respetas lo que te contó en confianza.', risk: 'Puede irse igual. Pero si se queda, será porque algo cambió.', info: 'El lunes, antes de hablar de dinero, pregunta por su carga de trabajo.' },
          kusi: ['pensando', 'Atraer es la mitad. La otra mitad empieza el lunes.'] } },
      { id: 'b', label: 'Avisarle a Leonardo de inmediato para que le hagan una contraoferta antes de que sea tarde.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -4, etica: -3 }, flags: ['renzo_expuesto'],
          out: 'Leonardo llama a Renzo esa misma noche. Renzo te escribe a las 9: «Te lo conté a ti. Solo a ti».',
          pro: { ok: 'Leonardo reacciona rápido.', risk: 'Compartir lo que te contaron en confianza, sin permiso, rompe la relación justo cuando más importa.' },
          kusi: ['triste', 'Eso te lo contó a ti…'] } },
      { id: 'c', label: 'Decirle que lo piense bien el fin de semana y que el lunes lo conversan.',
        res: { q: 'aceptable', fx: { personas: 1 }, flags: ['renzo_escuchado'],
          out: 'Renzo dice «ya». La conversación dura dos minutos. Te quedas con la sensación de que quería decir más.',
          pro: { ok: 'No lo presionas.', risk: 'Cerrar rápido una conversación difícil puede sonar a que no te importa.' },
          kusi: ['pensando', 'Quizás necesitaba diez minutos más.'] } },
    ],
    rules: [[BP, 'Lo que una persona te cuenta en confianza sobre otra oferta no se comparte sin su permiso.']],
    mirada: {
      ve: 'Las mismas empresas que compiten por tus candidatos compiten por tu equipo actual. La retención empieza por escuchar qué le pesa a la persona, que muchas veces no es solo el sueldo. Y la confianza que alguien deposita en Talent no se usa sin su permiso, ni siquiera para «salvarlo».',
    },
  },
  {
    id: 'j7', t: '18:40', ch: 'presencial', who: 'valeria-ta', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/caminan.webp', lugar: 'Ascensor del piso 9', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Valeria baja contigo en el ascensor. Acaba de leer el correo de Cóndor Pay: seis personas más y un tech lead para enero. ${F.has('renzo_escuchado') ? 'Sabe que el lunes hay una conversación pendiente con Renzo.' : 'No sabe todavía lo de Renzo.'}</p><p>Se ríe sola. «Seis más. Te doy la bienvenida al club${n ? ', ' + n : ''}.» Luego se pone seria. «Diez días buscando a gente que no estaba buscando, negociando con dólares, peleando con Leo y defendiendo la verdad. <mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'si', label: 'Sí. Me gusta encontrar a la persona correcta y contarle la empresa sin mentirle.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves_si'],
          out: 'Valeria sonríe. «Entonces el lunes a las 9. Trae tu tablero y tu servilleta: seis más y un tech lead no se buscan solos.»',
          kusi: ['celebra', '¡Qué bacán! La Semana 3 te espera.'] } },
      { id: 'otro', label: 'Me gusta RR.HH., pero creo que me veo más en compensaciones o en cultura.',
        res: { q: null, fx: { confianza: 1 }, flags: ['te_ves_otro'],
          out: 'Valeria asiente. «Pasa mucho: aquí ves todas las piezas y descubres cuál te gusta. Habla con Rocío. Pero el lunes te necesito aquí.»',
          kusi: ['curioso', 'Este puesto es una gran ventana. ¡Dale!'] } },
      { id: 'duda', label: 'Todavía no lo sé. Fueron diez días muy intensos.',
        res: { q: null, fx: { personas: 1 }, flags: ['te_ves_duda'],
          out: 'Valeria se ríe. «Es la respuesta más honesta que me han dado en este ascensor. Nadie sabe en diez días. Ven el lunes y lo seguimos viendo.»',
          kusi: ['pensando', 'Dudar también es una respuesta.'] } },
    ],
    mirada: {
      ve: 'El puesto de Talent Acquisition Partner mezcla negocio, ventas, análisis de datos y ética: entender qué necesita la empresa, convencer a quien no estaba buscando, medir y decir la verdad cuando no gusta. Algunos se quedan porque les apasiona el encuentro entre una persona y un trabajo; otros descubren aquí qué parte de RR.HH. quieren hacer. Y esta historia todavía no termina: el lunes hay un tech lead que quiere irse y seis vacantes nuevas.',
      visual: { tipo: 'mensaje', titulo: 'Lo que viene el lunes', txt: 'Renzo tiene una oferta en dólares. Cóndor Pay pide seis personas más y un tech lead. La Semana 3 empieza a las 9.' },
    },
  },
];
