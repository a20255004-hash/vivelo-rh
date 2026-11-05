// Reclutador/a de selección masiva · Capítulo 2 · «El aviso» · Semana 1, miércoles.
// Hilo del mes: 120 asesores para la campaña «Cobranzas Banco Sur» de Contacta Perú.
// Normas citadas:
// - Ley 26772, modificada por la Ley 27270, y su reglamento D.S. 002-98-TR: la oferta de empleo no puede contener requisitos discriminatorios.
//   Texto: https://faolex.fao.org/docs/pdf/per201903.pdf · Reglamento: https://leap.unep.org/en/countries/pe/national-legislation/decreto-supremo-no-002-98-tr-reglamenta-la-ley-no-26772-que
// - D.S. 015-2026-TR: RMV de S/ 1,230 desde el 1 de octubre de 2026.

export const CAP = {
  n: 2, titulo: 'El aviso', dia: 'Semana 1, martes', foto: 'assets/foto/oficina-abierta.webp',
  lugar: 'Contacta Perú · Cercado de Lima',
  inicio: '08:15', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes. Jessica publicó el aviso anoche a las 7 y, catorce horas después, el portal ya muestra un número que asusta: 900 postulaciones.', boton: 'Abrir el portal de empleos',
  kusi: '900 suena a fiesta… hasta que miras de dónde viene cada uno. ¡Dale!',
  lead: 'Filtraste 900 postulaciones sin perder a la gente valiosa, llamaste a postulantes lejanos, respondiste en redes y armaste un aviso segmentado por zona y turno.',
  reflexion: '¿Qué pesa más para que alguien llegue a su trabajo: el distrito donde vive o el tiempo que tarda en llegar?',
  siguiente: { n: 3, titulo: 'El día de evaluación', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'postulaciones', p: 'Postulaciones del aviso', j: 'Jessica · Reclutamiento', d: 0, e: '900 en una noche' },
  { id: 'lejanos', p: 'Postulantes de distritos lejanos', j: 'Jessica · Reclutamiento', d: 0, e: 'Unos 450 sin revisar' },
  { id: 'redes', p: 'El aviso en redes', j: 'Jessica · Reclutamiento', d: 0, e: 'Comentarios sin responder' },
  { id: 'segmentado', p: 'Aviso segmentado por zona', j: 'Jessica · Reclutamiento', d: 1, e: 'Por hacer' },
  { id: 'viernes', p: 'Citación de mañana', j: 'Jessica · Reclutamiento', d: 2, e: '80 cupos' },
];

export const FUTURO = {
  filtro_tiempo: ['Filtraste por tiempo de traslado y turno, no por distrito.', 'En el capítulo 3 llegará gente de San Juan de Lurigancho que vino en la Línea 1.'],
  filtro_rigido: ['Filtraste con requisitos que el puesto no necesita.', 'En el capítulo 3 tendrás menos gente de la que esperabas.'],
  llamada_filtro: ['Llamaste para preguntar el tiempo de traslado y el turno.', 'Esos postulantes llegarán con más frecuencia mañana. Capítulo 3.'],
  descarte_distrito: ['Descartaste por distrito.', 'Perdiste gente que vive lejos en el mapa, pero cerca en el Metropolitano.'],
  redes_respondidas: ['Respondiste en redes con datos concretos.', 'Una postulante de 51 años llegará mañana por ese comentario. Capítulo 3.'],
  redes_borradas: ['Borraste o ignoraste los comentarios.', 'Alguien guardó la captura. Volverá a aparecer.'],
  aviso_zonas: ['Armaste un aviso por zona y turno.', 'Los referidos del capítulo 5 tendrán con qué compararse.'],
  bruno_advertido: ['Le explicaste a Bruno que 900 postulaciones no son 900 asesores.', 'Mañana entenderá más rápido por qué llegan 31. Capítulo 3.'],
  sabe_referidos: ['Jessica te contó que el bono de referidos se pagaba al firmar.', 'En el capítulo 5 diseñarás reglas para que no se repita.'],
  recordatorio: ['Armaste la citación con recordatorio y lista de espera.', 'Mañana sabrás cuánto ayudó. Capítulo 3.'],
  bruno_ilusionado: ['Bruno cree que 900 postulaciones resuelven la campaña.', 'Mañana se va a enojar. Capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'Reclutamiento Contacta', sub: 'Jessica, el equipo y tú', c: '#E4572E' },
  jessica: { n: 'Jessica Torres', sub: 'Coordinadora de Reclutamiento', who: 'jessica' },
  bruno: { n: 'Bruno Salinas', sub: 'Gerente de la campaña', who: 'bruno' },
  alexandra: { n: 'Alexandra Rivas', sub: 'Postulante', who: 'alexandra' },
  gladys: { n: 'Gladys Quispe', sub: 'Postulante · 51 años', c: '#7A4E9C' },
  kenyi: { n: 'Kenyi · Marketing', sub: 'Redes de Contacta Perú', c: '#1F8A70' },
};

export const WSP = [
  { chat: 'grupo', t: '08:16', de: 'Jessica', txt: '900 postulaciones 😱 ¡Buenos días! Hoy toca separar el trigo de la paja. Hay pan con chicharrón en la cocina, lo trajo Kenyi.' },
  { chat: 'alexandra', t: '08:40', de: 'Alexandra', txt: 'Buenos días 😊 Solo para confirmar: mañana miércoles a las 9 en Nicolás de Piérola, ¿cierto? Ya vi la ruta.', si: 'alexandra_citada' },
  { chat: 'kenyi', t: '09:35', de: 'Kenyi', txt: 'Oye, el aviso está en el grupo «Chamba Lima Centro» y está lleno de comentarios. ¿Respondo yo o tú?' },
  { chat: 'bruno', t: '12:50', de: 'Bruno', txt: 'Vi en el portal 900 postulantes. ¡Eso es! Ya estamos, ¿no?' },
  { chat: 'gladys', t: '16:10', de: 'Gladys', txt: 'Señorita, leí su respuesta en el grupo. Tengo 51 años y vendí 20 años en el mercado Central. ¿Me puedo presentar?', si: 'redes_respondidas' },
  { chat: 'jessica', t: '18:05', de: 'Jessica', txt: 'Ojo: la última campaña el turno tarde tuvo el doble de faltas que el de mañana. Lo vemos mañana.' },
];

export const CORREOS = [
  { t: '08:20', de: 'Portal de empleos', para: 'reclutamiento@contactaperu.pe', asunto: 'Tu aviso «Asesores de cobranza telefónica» tiene 900 postulaciones', html: '<p>Tu aviso recibió <b>900 postulaciones</b> en 14 horas. Descarga el reporte en Excel desde tu panel.</p><p>Recuerda: tu plan incluye 30 días de publicación.</p>' },
  { t: '11:45', de: 'Jessica Torres', para: 'Reclutadora masiva', asunto: 'RV: Captura del aviso', html: '<p>Te reenvío lo que mandó Kenyi. <b>Hay que responder hoy.</b> Lo que se dice en ese grupo lo leen los mismos postulantes que queremos citar.</p><p>Jessica</p>' },
];

export const QUIZ = [
  { q: 'Para predecir si alguien llegará a su turno, ¿qué dato sirve más?', ops: ['El distrito donde vive', 'El tiempo de traslado y el transporte que usa', 'Su edad', 'Su estado civil'], ok: 1, por: 'Dos distritos lejanos en el mapa pueden estar a 40 minutos en el Metropolitano o la Línea 1. El tiempo real es el mejor predictor.' },
  { q: 'Un aviso para todas las personas, ¿qué norma lo respalda?', ops: ['Ley 26772, modificada por la Ley 27270', 'Ley 29783', 'Ley 30036', 'D.Leg. 728'], ok: 0, por: 'La Ley 26772 prohíbe que la oferta de empleo contenga requisitos discriminatorios.' },
  { q: 'En el grupo de Facebook alguien critica el aviso. ¿Qué hace una buena reclutadora?', ops: ['Borra la publicación', 'Responde con datos concretos y corrige lo que esté mal', 'No responde nunca', 'Bloquea a la persona'], ok: 1, por: 'Los comentarios los leen los mismos postulantes que quieres atraer. Responder con hechos genera confianza.' },
  { q: '¿Qué es un aviso segmentado?', ops: ['Un aviso más largo', 'Un aviso adaptado a una zona, un turno o un público concreto', 'Un aviso pagado', 'Un aviso solo para referidos'], ok: 1, por: 'Segmentar ayuda a que llegue gente que puede cumplir el turno.' },
  { q: 'Bruno ve 900 postulaciones y cree que ya llegó a la meta. ¿Qué le dices?', ops: ['Que sí', 'Cuántas son útiles y cuántas personas se espera que lleguen al final', 'Nada', 'Que pida más presupuesto'], ok: 1, por: 'Las postulaciones son la boca del embudo: lo que cuenta son las personas que terminan la capacitación.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'v1', t: '08:30', ch: 'sistema', who: null, titulo: '900 filas', banner: 'assets/foto2/tablet-equipo.webp', show: ['calidad', 'tiempo', 'etica'],
    body: (n, F) => `<p>Descargas el reporte. El Excel se llama «postulantes_FINAL_ahora_si.xlsx» y tiene tres pestañas: «Hoja1», «Hoja1 (2)» y «NO TOCAR». Café en mano, ordenas por distrito: <mark class="clave">casi la mitad vive en Carabayllo, Ventanilla, Villa El Salvador, San Juan de Lurigancho o Lurín</mark>.</p><p>${F.has('embudo_bien') ? 'Recuerdas tu cuenta de ayer: necesitas unas 1,700. Con 900 no alcanza, así que no puedes botar a nadie a la ligera.' : 'Jessica te recuerda que el embudo es más ancho de lo que parece.'} Antes de llamar, tienes que aplicar tres filtros.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres filtros que vas a aplicar a las 900 postulaciones.', boton: 'Aplicar los filtros', resumen: 'Filtraste por',
    cols: ['Filtro', 'Qué hace'],
    rows: [
      { id: 'tiempo', cells: ['Tiempo de traslado de hasta una hora', 'Pregunta cuánto tarda y en qué transporte'] },
      { id: 'turno', cells: ['Disponibilidad para el turno que se ofrece', 'Mañana (8 a 14) o tarde (14 a 20)'] },
      { id: 'dup', cells: ['Quitar postulaciones duplicadas', 'Hay gente que postuló tres veces'] },
      { id: 'exp', cells: ['Un año de experiencia en cobranzas', 'Solo gente que ya cobró'] },
      { id: 'distrito', cells: ['Solo Cercado y distritos colindantes', 'Descarta por dirección'] },
      { id: 'edad', cells: ['Ordenar por edad y priorizar menores de 30', '«Aprenden más rápido»'] },
    ],
    score: { tiempo: 3, turno: 3, dup: 2, exp: -2, distrito: -2, edad: -5 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      const rigido = picks.includes('exp') || picks.includes('distrito') || picks.includes('edad');
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: picks.includes('edad') ? -6 : 1, tiempo: 2 },
        flags: [rigido ? 'filtro_rigido' : 'filtro_tiempo'],
        cartera: { postulaciones: rigido ? 'Filtradas con requisitos de más' : 'Filtradas por traslado, turno y duplicados' },
        out: picks.includes('edad') ? 'El filtro de edad borra a 210 personas. El aviso decía «sin límite de edad»: lo que publicaste y lo que haces ya no coinciden.' : rigido ? 'Te quedan 260 postulaciones. Un año de experiencia en cobranzas no lo tiene casi nadie que busca su primer trabajo formal.' : 'Te quedan 610 postulaciones útiles. Los duplicados eran 74. Ahora sí sabes con quién hablar.',
        pro: { ok: 'El tiempo de traslado y el turno predicen la asistencia mejor que la dirección.', risk: 'Un filtro que el aviso no mencionaba (edad, experiencia) contradice lo que publicaste y achica el embudo.', info: 'Guarda una copia del Excel original antes de filtrar: «NO TOCAR» existe por algo.' },
        kusi: [q === 'buena' ? 'celebra' : q === 'aceptable' ? 'pensando' : 'indignado', q === 'buena' ? '¡Filtro con cabeza!' : picks.includes('edad') ? '¿Y el «sin límite de edad» del aviso?' : 'Te quedaste con poca gente…'],
      };
    },
    rules: [[LEY, 'Ley 26772: lo que no puede ir en el aviso tampoco puede usarse como filtro escondido.'], [BP, 'Filtra por lo que predice el desempeño y la asistencia: tiempo de traslado y turno.']],
    mirada: {
      ve: 'Un filtro es un requisito que nadie ve. Si en el aviso dijiste «sin límite de edad» y luego ordenas por edad, discriminas igual, solo que en silencio. Los buenos filtros miran lo que hace que alguien llegue y se quede.',
      visual: { tipo: 'embudo', titulo: 'Las 900 después de filtrar bien', niveles: [['Postulaciones', 900], ['Sin duplicados', 826], ['Con turno compatible', 700], ['Con traslado de hasta 1 hora', 610]] },
    },
  },
  {
    id: 'v2', t: '09:50', ch: 'llamada', who: null, titulo: 'Tres llamadas lejos', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Jessica te reta: «Antes de decidir qué hacemos con los lejanos, llama a tres y pregúntales cómo llegarían». Te pones la vincha, marcas desde la central y <mark class="clave">escuchas lo que el Excel no dice</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Yeny Huamán · San Juan de Lurigancho', 'Contesta al primer timbre', '«Tomo la Línea 1 en Bayóvar y bajo en Grau. Son 45 minutos, señorita. Más rápido que mi prima que vive en La Victoria.»'],
      ['Jhonatan Arévalo · Ventanilla', 'Contesta con ruido de mototaxi', '«Una hora cuarenta, dos combis y el Metropolitano. Pero el turno tarde me queda bien: en la mañana llevo a mi hermanito al colegio.»'],
      ['Milagros Cueva · Lurín', 'Contesta su mamá', '«Está trabajando en el mercado, joven. Dice que sí quiere, pero que el pasaje le sale casi diez soles diarios.»'],
    ],
    prompt: 'Hiciste tres llamadas. ¿Qué haces con los 450 de distritos lejanos?',
    choices: [
      { id: 'a', label: 'Llamarlos uno por uno con dos preguntas: cuánto tardan y qué turno pueden cumplir. Citar a quienes llegan en una hora o tienen un turno que les calza.',
        res: { q: 'buena', fx: { calidad: 4, personas: 4, tiempo: -3 }, rel: { jessica: 1 }, flags: ['llamada_filtro'], cartera: { lejanos: 'Llamada de filtro: tiempo y turno' },
          out: 'Te toma la tarde entera y te duele la oreja. Pero de 450 «lejanos», 190 llegan en menos de una hora. Yeny vive más cerca, en minutos, que muchos de La Victoria.',
          pro: { ok: 'Decides con el dato real de cada persona, no con un mapa.', risk: 'Te costó horas: tendrás que reorganizar la agenda de la tarde.', info: 'Pregunta también cuánto gasta en pasaje: es una causa frecuente de deserción en el primer mes.' },
          kusi: ['celebra', 'El mapa engaña, el reloj no.'] } },
      { id: 'b', label: 'Descartarlos a todos: la distancia es la primera causa de deserción en centros de contacto y no hay tiempo para llamar a 450.',
        res: { q: 'riesgosa', fx: { calidad: -3, personas: -3, tiempo: 3 }, flags: ['descarte_distrito'], cartera: { lejanos: 'Descartados por distrito' },
          out: 'Ganas una tarde. Yeny, a 45 minutos en la Línea 1, queda fuera junto con otros 189 que sí podían llegar.',
          pro: { ok: 'Partes de un dato cierto: la distancia hace que la gente renuncie.', risk: 'Distrito no es lo mismo que distancia: el transporte cambia todo.' },
          kusi: ['triste', 'Yeny llegaba más rápido que muchos…'] } },
      { id: 'c', label: 'Citarlos a todos mañana: que cada uno decida si puede venir; así no le cierras la puerta a nadie.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: -2, tiempo: 1 }, flags: ['llamada_filtro'], cartera: { lejanos: 'Citados sin filtrar' },
          out: 'No le cierras la puerta a nadie, pero mañana tendrás 80 cupos y muchos de ellos los ocupará gente que no podrá cumplir el turno.',
          pro: { ok: 'Eres inclusiva con quien vive lejos.', risk: 'Un cupo usado por alguien que no podrá llegar en marzo es un cupo que pierde otra persona.' },
          kusi: ['pensando', 'Abrir la puerta está bien… ¿y el turno?'] } },
    ],
    rules: [[BP, 'Pregunta el tiempo de traslado y el medio de transporte: el distrito solo es una pista.']],
    mirada: {
      ve: 'En Lima, la distancia se mide en minutos y en combis. Alguien de San Juan de Lurigancho junto a la Línea 1 puede llegar antes que alguien de un distrito «cercano» sin transporte directo. Y el turno puede convertir una distancia imposible en una posible.',
      visual: { tipo: 'balanza', a: { t: 'Filtrar por distrito', items: ['Rápido', 'Pierde gente que llega en poco tiempo'] }, b: { t: 'Filtrar por tiempo y turno', items: ['Toma horas de llamadas', 'Predice la asistencia', 'Rescata a postulantes valiosos'] } },
    },
  },
  {
    id: 'v3', t: '11:50', ch: 'whatsapp', who: null, titulo: 'Los comentarios', banner: 'assets/foto2/collage.webp', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => F.has('aviso_sucio')
      ? `<p>Kenyi te manda la captura. Alguien publicó tu aviso en el grupo «Chamba Lima Centro» (48 mil miembros) con un texto: «2026 y todavía piden de 18 a 28, varones y buena presencia 🙄». Tiene 300 reacciones.</p><p>Los comentarios los están leyendo <mark class="clave">las mismas personas que necesitas citar</mark>.</p>`
      : `<p>Kenyi te manda la captura. Tu aviso está en el grupo «Chamba Lima Centro» (48 mil miembros). Hay un comentario con 80 reacciones: «Dicen "sin límite de edad", pero seguro igual escogen solo chibolos con buena pinta».</p><p>Debajo, una señora pregunta si a los 51 la reciben. Los comentarios los están leyendo <mark class="clave">las mismas personas que necesitas citar</mark>.</p>`,
    chat: ['¿Qué respondo? ¿O lo dejo así nomás? 👀'],
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder en el grupo con hechos: qué pide el puesto, cuánto se paga desde el inicio, que la convocatoria es para todas las personas y que, si el aviso tenía algo mal, ya está corregido.',
        res: { q: 'buena', fx: { etica: 5, confianza: 3, tiempo: -2 }, rel: { jessica: 1 }, flags: ['redes_respondidas'], cartera: { redes: 'Respuesta pública con datos' },
          envia: ['kenyi', 'Respondamos así: «Hola a todos. El puesto es para cualquier persona mayor de edad, sin límite de edad, sexo ni apariencia. Pagamos desde S/ 1,230 más bonos y la capacitación es pagada. Si alguna versión anterior decía otra cosa, ya está corregida. ¿Dudas? Escríbannos».'],
          out: 'Kenyi publica la respuesta. En una hora tiene más reacciones que la crítica, y la señora de 51 años te escribe al privado.',
          pro: { ok: 'Respondes donde está la conversación y con datos que se pueden comprobar.', risk: 'Si dices que está corregido, tiene que estarlo de verdad en todas las versiones publicadas.', info: 'Revisa que el portal, Facebook y la bolsa de trabajo tengan el mismo texto.' },
          kusi: ['feliz', '¡Transparencia que atrae gente!'] } },
      { id: 'b', label: 'No responder: cualquier respuesta alimenta la discusión y en dos días el post se pierde entre otros avisos.',
        res: { q: 'riesgosa', fx: { confianza: -2, etica: -2, tiempo: 1 }, flags: ['redes_borradas'], cartera: { redes: 'Sin respuesta' },
          envia: ['kenyi', 'Mejor no respondamos. Ya pasará.'],
          out: 'El post sigue subiendo. Nadie de Contacta dice nada, y el silencio se lee como «es verdad».',
          pro: { ok: 'Evitas una discusión pública.', risk: 'En reclutamiento masivo, la reputación del aviso es parte del embudo: si la gente desconfía, no postula o no viene.' },
          kusi: ['preocupado', 'El silencio también comunica…'] } },
      { id: 'c', label: 'Pedirle a Kenyi que reporte la publicación al grupo para que la bajen y que suba el aviso de nuevo, limpio y sin comentarios.',
        res: { q: 'riesgosa', fx: { etica: -3, confianza: -1 }, flags: ['redes_borradas'], cartera: { redes: 'Se pidió bajar la publicación' },
          envia: ['kenyi', 'Repórtala para que la bajen y subimos el aviso de nuevo, limpio.'],
          out: 'El administrador del grupo no la baja. Alguien comenta: «Contacta quiere borrar las críticas». Ya hay tres capturas más.',
          pro: { ok: 'Quieres empezar de cero.', risk: 'Intentar borrar una crítica suele multiplicarla.' },
          kusi: ['sorpresa', 'Borrar no borra: multiplica.'] } },
    ],
    rules: [[LEY, 'Ley 26772, modificada por la Ley 27270: la oferta de empleo no puede contener requisitos discriminatorios.'], [BP, 'Responde en el mismo canal donde está la conversación, con datos verificables.']],
    mirada: {
      ve: 'En selección masiva, los comentarios de un aviso funcionan como la reputación de la empresa en la calle. Las personas que leen ese grupo deciden ahí si vale la pena postular o ir a la evaluación. Responder con hechos convierte una crítica en una invitación.',
      visual: { tipo: 'mensaje', titulo: 'Una respuesta que suma', txt: 'Hola a todos. El puesto es para cualquier persona mayor de edad, sin límite de edad, sexo ni apariencia. Pagamos desde S/ 1,230 más bonos y la capacitación es pagada. Si alguna versión anterior decía otra cosa, ya está corregida. ¿Dudas? Escríbannos.' },
      normas: [{ ley: 'Ley 26772, modificada por la Ley 27270, y D.S. 002-98-TR', dice: 'La oferta de empleo no puede contener requisitos que constituyan discriminación o anulen la igualdad de oportunidades o de trato. Alcanza al empleador y a las agencias o intermediarios que publican.', practica: 'Una captura de un aviso discriminatorio es una prueba escrita: corregirlo y decirlo es la mejor defensa.' }],
    },
  },
  {
    id: 'v4', t: '13:20', ch: 'presencial', who: 'jessica', titulo: 'El menú de la esquina', banner: 'assets/foto/cafe.webp', lugar: 'Menú de la esquina de Piérola · S/ 13', show: ['confianza', 'calidad'],
    body: () => `<p>Jessica te arrastra al menú de la esquina: sopa de morón y ají de gallina. Tiene el celular boca abajo, señal de que <mark class="clave">por quince minutos puedes preguntarle lo que quieras</mark>.</p><p>En la mesa del costado, dos asesoras de otra campaña hablan de renunciar.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas antes de que suene su celular.',
    opts: [
      { id: 'pasada', label: '¿Por qué no se llegó a la meta en la campaña pasada?', info: '«Porque contratamos a todos en la última semana, a la desesperada. El 30 % se fue antes del primer sueldo. Bruno todavía se acuerda.»' },
      { id: 'tarde', label: '¿Por qué el turno tarde falta más?', info: '«Sale a las 8 de la noche y el regreso a Ventanilla o Carabayllo es de noche y en hora punta. Muchas son mamás que no tienen quién recoja a los chicos.»' },
      { id: 'bruno', label: '¿Qué le preocupa de verdad a Bruno?', info: '«La penalidad, sí. Pero más que eso, que el banco nos quite la campaña. Si eso pasa, Bruno se va. Él no es malo: está asustado.»' },
      { id: 'referidos', label: '¿Hubo antes un programa de referidos?', info: '«Una vez, y salió mal: pagábamos el bono el día que firmaban. Llegaron primos, vecinos, de todo. La mitad no duró ni una semana.»' },
    ],
    res: picks => ({
      q: null,
      fx: { confianza: 2, calidad: picks.includes('tarde') || picks.includes('referidos') ? 3 : 1, personas: picks.includes('bruno') ? 2 : 0 },
      rel: { jessica: 1 },
      flags: picks.includes('referidos') ? ['sabe_referidos'] : [],
      out: picks.includes('bruno') ? 'Te quedas pensando en Bruno: el gerente que grita también tiene miedo de perder su puesto.' : 'Te llevas dos datos que no estaban en ningún reporte.',
      kusi: ['curioso', 'El ají de gallina vino con información de regalo.'],
    }),
    mirada: {
      ve: 'Las tasas del embudo tienen historia: detrás del 30 % que se fue hay una contratación desesperada; detrás de las faltas del turno tarde hay mamás que vuelven de noche. Preguntar por qué falló lo anterior evita repetirlo.',
    },
  },
  {
    id: 'v5', t: '15:00', ch: 'documento', who: null, titulo: 'El aviso por zonas', banner: 'assets/foto/revisa.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Jessica te encarga una segunda versión del aviso para dos públicos: el turno mañana, para la gente del Cono Norte, y el turno tarde, para quienes viven cerca de la Línea 1. ${F.has('llamada_filtro') ? 'Usas lo que escuchaste en las llamadas.' : ''}</p><p>Un aviso segmentado no cambia los requisitos: <mark class="clave">cambia a quién le habla y qué le aclara</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del aviso segmentado.', boton: 'Guardar el aviso segmentado',
    bloques: [
      { id: 'titulo', t: 'Título', n: 1, ops: [
        { id: 't1', t: 'Asesor/a de cobranza telefónica · turno mañana · a 2 cuadras de la estación Colmena', ok: true, por: 'Puesto, turno y una referencia de transporte en una línea.' },
        { id: 't2', t: '¡¡¡GRAN OPORTUNIDAD!!! Trabaja con nosotros', ok: false, por: 'Suena a estafa y no dice qué puesto es.' },
        { id: 't3', t: 'Asesores jóvenes y dinámicos', ok: false, por: '«Jóvenes» vuelve a meter un requisito de edad por la ventana.' },
      ] },
      { id: 'condiciones', t: 'Condiciones', n: 2, ops: [
        { id: 'c1', t: 'Desde S/ 1,230 más bonos por metas, en planilla desde el primer día.', ok: true, por: 'Sueldo legal y claro.' },
        { id: 'c2', t: 'Turno de 8:00 a 14:00 o de 14:00 a 20:00, de lunes a sábado.', ok: true, por: 'El horario exacto deja que cada persona calcule si puede llegar.' },
        { id: 'c3', t: 'Sueldo atractivo y crecimiento ilimitado.', ok: false, por: 'Promesa vacía: no dice cuánto ni cómo.' },
        { id: 'c4', t: 'Gana hasta S/ 3,000.', ok: false, por: 'Si eso solo lo gana uno de cada cien con todos los bonos, es una promesa que causa renuncias.' },
      ] },
      { id: 'llegar', t: 'Cómo llegar', n: 1, ops: [
        { id: 'l1', t: 'Av. Nicolás de Piérola 860, Cercado. Metropolitano: estación Colmena. Línea 1: estación Grau y diez minutos a pie.', ok: true, por: 'Quien vive lejos calcula su tiempo antes de postular.' },
        { id: 'l2', t: 'Centro de Lima.', ok: false, por: 'Demasiado vago: el Centro es enorme.' },
      ] },
      { id: 'quien', t: 'A quién buscamos', n: 2, ops: [
        { id: 'q1', t: 'Personas mayores de edad que se comuniquen con claridad y paciencia.', ok: true },
        { id: 'q2', t: 'No necesitas experiencia: te capacitamos con sueldo.', ok: true, por: 'Abre la puerta a quien busca su primer trabajo formal.' },
        { id: 'q3', t: 'Que vivan en distritos cercanos.', ok: false, por: 'El distrito no es la distancia, y excluye sin necesidad.' },
        { id: 'q4', t: 'Buena presencia y excelente actitud.', ok: false, por: 'Ambiguo y con riesgo de sesgo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .83 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'riesgosa' ? -3 : 2, personas: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['aviso_zonas'], rel: { jessica: q === 'buena' ? 1 : 0 },
        cartera: { segmentado: q === 'buena' ? 'Dos versiones: mañana y tarde' : q === 'aceptable' ? 'Listo, con detalles por pulir' : 'Con frases que hay que quitar' },
        out: q === 'buena' ? 'Jessica lo lee en el celular mientras sube por la escalera: «Este se publica hoy en la bolsa de trabajo y en el grupo de Kenyi».' : q === 'aceptable' ? 'Jessica tacha una frase y te lo devuelve: «Casi. Que nadie tenga que adivinar».' : 'Jessica frunce el ceño: «Esto nos vuelve a meter en el grupo de Facebook».',
        pro: { ok: 'Un aviso que dice horario, sueldo y cómo llegar deja que la gente se autoseleccione.', info: 'Mide luego cuántos citados llegan de cada versión: así sabrás cuál funciona.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Aviso con GPS incluido!' : 'Que nadie tenga que adivinar.'],
      };
    },
    rules: [[LEY, 'RMV de S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).'], [BP, 'Segmenta el mensaje (turno, zona, transporte), no los requisitos.']],
    mirada: {
      ve: 'Quien lee un aviso con horario exacto y la estación más cercana decide sola si puede llegar. Eso es autoselección: menos postulaciones inútiles y más gente que llega el día de la evaluación.',
      visual: { tipo: 'cambio', titulo: 'De aviso genérico a aviso segmentado', pares: [['Centro de Lima', 'Estación Colmena o Grau'], ['Turnos rotativos', '8 a 14 o 14 a 20'], ['Sueldo atractivo', 'Desde S/ 1,230 más bonos'], ['Jóvenes dinámicos', 'Personas que se comuniquen con claridad']] },
    },
  },
  {
    id: 'v6', t: '16:40', ch: 'documento', who: null, titulo: 'La lista de mañana', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>Ya tienes candidatos para llenar los 80 cupos de mañana. La impresora del piso 4 se atasca dos veces mientras imprimes la lista. Entre atasco y atasco, Jessica te pide que <mark class="clave">ordenes los pasos para que mañana llegue la mayor cantidad posible</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la citación, del primero al último. Usa las flechas.', boton: 'Mostrarle la lista a Jessica',
    items: [
      { id: 'dep', t: 'Depurar la lista: duplicados y números errados', por: 'Si no, llamas dos veces a la misma persona.' },
      { id: 'filtro', t: 'Llamada corta: traslado y turno', por: 'Confirma que puede cumplir antes de ocupar un cupo.' },
      { id: 'cita', t: 'Enviar la citación por WhatsApp con dirección y referencia', por: 'La plantilla que probaste con Alexandra.' },
      { id: 'conf', t: 'Pedir confirmación y anotarla en el Excel', por: 'Te dice cuántos esperar.' },
      { id: 'reco', t: 'Recordatorio la noche anterior, a las 7', por: 'Es lo que más reduce las inasistencias.' },
      { id: 'libera', t: 'Liberar cupos de quien no confirma y llamar a la lista de espera', por: 'Un cupo vacío es un cupo perdido.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 2 : -2, tiempo: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['recordatorio'] : [],
        cartera: { viernes: q === 'buena' ? '80 citados, con recordatorio y lista de espera' : '80 citados' },
        out: q === 'buena' ? 'Jessica pega tu lista en la pared: «Esto es lo que vamos a hacer cada semana».' : 'Jessica cambia dos pasos: «Si recuerdas antes de confirmar, no sabes a quién recordar».',
        pro: { ok: 'Cada paso protege un cupo.', info: 'Anota quién no contesta: es una señal de lo que pasará el viernes.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Lista de campeona!' : 'Casi: el orden importa.'],
      };
    },
    rules: [[BP, 'Confirmar, recordar y liberar cupos son tres pasos distintos.']],
    mirada: {
      ve: 'Una citación masiva es logística: cada paso evita que un cupo se pierda. El recordatorio de la noche anterior y la lista de espera son las dos herramientas más baratas para subir la asistencia.',
      visual: { tipo: 'flujo', titulo: 'De la lista a la evaluación', pasos: ['Depurar', 'Llamada corta', 'Citación', 'Confirmación', 'Recordatorio', 'Lista de espera'] },
    },
  },
  {
    id: 'v7', t: '18:30', ch: 'whatsapp', who: 'bruno', titulo: '«Ya estamos, ¿no?»', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Ya con la mochila puesta, rumbo al Metropolitano, vuelves a ver el mensaje de Bruno de mediodía. Lo dejaste en visto.</p>`,
    chat: ['Vi en el portal 900 postulantes. ¡Eso es! Ya estamos, ¿no?'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle con números: cuántas son útiles, cuántas personas citas mañana y cuántas se espera que lleguen.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 2 }, rel: { bruno: 1 }, flags: ['bruno_advertido'],
          envia: ['bruno', 'Buenas noches, Bruno. De 900, unas 610 son útiles. Mañana citamos 80 y, con las tasas de la última campaña, llegarían unos 32. Estamos mejorando la citación para subir eso. Necesitamos varias evaluaciones más.'],
          out: 'Bruno tarda en responder. Luego: «32 de 80. Ok. Gracias por decírmelo antes». Nadie le había mostrado el embudo.', kusi: ['celebra', 'Mejor un número feo hoy que una sorpresa el viernes.'] } },
      { id: 'b', label: 'Darle la buena noticia corta: que el aviso funcionó y que el viernes hay evaluación.',
        res: { q: 'aceptable', fx: { confianza: 1 }, rel: { bruno: 0 }, flags: ['bruno_ilusionado'],
          envia: ['bruno', '¡Sí! El aviso funcionó 💪 Mañana evaluamos.'],
          out: 'Bruno responde con un pulgar. Mañana esperará ver 80 personas en la sala.', kusi: ['pensando', '¿Y cuando lleguen 31?'] } },
    ],
    mirada: { ve: 'Las postulaciones son la boca del embudo. Si el gerente cree que 900 postulaciones son 900 asesores, cualquier número de mañana le parecerá un fracaso. Explicar el embudo antes es cuidar la relación.' },
  },
];
