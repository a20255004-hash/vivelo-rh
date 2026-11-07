// Analista de Clima y Cultura · Capítulo 3 · «El gerente» · Semana 1, miércoles.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales, arts. 6 y 7, ya citada en el capítulo 1.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
// - El resto del capítulo trabaja con buenas prácticas de devolución de resultados y de focus groups, no con normas.

export const CAP = {
  n: 3, titulo: 'El gerente', dia: 'Semana 1, miércoles', foto: 'assets/foto2/presentacion.webp',
  lugar: 'AseguraPlus · Sala de directorio, piso 11',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles. A las tres de la tarde le presentas los resultados al gerente de Siniestros. Sofía llegó antes que tú y ya tiene la sala reservada, el proyector probado y una botella de agua que no ha tocado.', boton: 'Preparar la reunión',
  kusi: 'Nadie quiere escuchar que su área salió mal. Hoy tu trabajo es que lo escuche igual.',
  lead: 'Preparaste las respuestas al «la encuesta está mal hecha», ordenaste una presentación que no empieza por el golpe, sostuviste los datos frente a un gerente herido y armaste un focus group donde la gente pueda hablar.',
  reflexion: '¿Cómo le das una mala noticia a alguien sin que deje de escucharte?',
  siguiente: { n: 4, titulo: 'El focus group', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'informe', p: 'Informe de resultados de clima', j: 'Sofía · Cultura', d: 0, e: 'Presentación hoy' },
  { id: 'siniestros', p: 'Área de Siniestros', j: 'Gonzalo Ferreyra', d: 0, e: 'Reunión a las 3 p. m.' },
  { id: 'focus', p: 'Focus group de Siniestros', j: 'Cultura', d: 0, e: 'Sin convocar' },
  { id: 'alerta', p: 'Comentario sobre posible hostigamiento', j: 'Sofía · Cultura', d: 0, e: 'En otro carril' },
];

export const FUTURO = {
  metodo_listo: ['Llegaste con respuestas sobre el método de la encuesta.', 'Gonzalo dejó de discutir el instrumento a los diez minutos.'],
  gonzalo_escucha: ['Gonzalo aceptó que el resultado es real, aunque no le guste.', 'Aprobó el focus group del jueves.'],
  gonzalo_herido: ['Gonzalo salió de la reunión sintiéndose acusado.', 'Lo vas a sentir en el plan de acción.'],
  sin_supervisores: ['Acordaron que ningún supervisor estará en el focus group.', 'Hernán no está contento con eso.'],
  hernan_invitado: ['Aceptaste que Hernán, el supervisor, participe en el focus group.', 'Lo vas a lamentar el jueves.'],
  grupo_voluntario: ['Tu focus group es voluntario, en horario de trabajo y con gente de distintos equipos.', 'Lucía irá.'],
  grupo_elegido: ['Elegiste para el focus group a quienes «más se quejan».', 'Todo Siniestros sabe por qué los eligieron.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'equipo', t: '08:35', de: 'Sofía', txt: 'Hoy no se defiende a nadie ni se ataca a nadie. Se muestra lo que la gente dijo. Nada más y nada menos.' },
  { chat: 'renzo', t: '09:10', de: 'Renzo', txt: 'Imprimí el mapa de temas en A3. Huele a tinta nueva 😄', si: 'mapa_temas' },
  { chat: 'lucia', t: '12:50', de: 'Lucía', txt: 'Dicen que hoy le presentan los resultados al gerente. Aquí hay mucha tensión. Hernán anda preguntando quién escribió «lo del miedo».', si: 'lucia_confia' },
  { chat: 'gonzalo', t: '16:10', de: 'Gonzalo', txt: 'Gracias por la reunión. No fue fácil. Procedan con el focus group.', si: 'gonzalo_escucha' },
  { chat: 'gonzalo', t: '16:10', de: 'Gonzalo', txt: 'Hagan su focus group. Pero que conste que no estoy de acuerdo con cómo se ha llevado esto.', si: 'gonzalo_herido' },
  { chat: 'lucia', t: '17:30', de: 'Lucía', txt: 'Sí voy mañana. Pero si llega Hernán, me quedo callada. Te aviso desde ya.', si: 'grupo_voluntario' },
];

export const CORREOS = [
  { t: '08:40', de: 'Pulso Consultores · Soporte', para: 'Cultura AseguraPlus', asunto: 'Ficha técnica de la encuesta 2026', html: '<p>Adjuntamos la ficha técnica: cuestionario de 46 ítems, el mismo aplicado en 2025 y en todas las áreas; escala de 5 puntos; favorabilidad = porcentaje de respuestas 4 y 5; aplicación en línea del 6 al 20 de octubre; tasa de respuesta general 78 %.</p>' },
  { t: '13:30', de: 'Gonzalo Ferreyra', para: 'Sofía Ledesma; Analista de Clima y Cultura', asunto: 'RE: Reunión de resultados', html: '<p>Llevaré a la reunión mis indicadores: este año cerramos 18 % más siniestros que el anterior, con la misma gente. Les pido que lo tengan en cuenta antes de sacar conclusiones.</p><p>Gonzalo</p>' },
];

export const QUIZ = [
  { q: 'Un gerente dice que la encuesta «está mal hecha». ¿Qué responde mejor a eso?', ops: ['Que él está en negación', 'La ficha técnica: mismo instrumento, misma escala y tasa de respuesta alta', 'Repetir la encuesta', 'Cambiar de tema'], ok: 1, por: 'Si el instrumento es el mismo para todos, el resultado no se explica por el método.' },
  { q: '¿Con qué conviene empezar una presentación de malos resultados?', ops: ['Con el número más bajo', 'Con el propósito de la reunión y lo que funciona', 'Con los comentarios más duros', 'Con un chiste'], ok: 1, por: 'Quien se siente atacado en el primer minuto deja de escuchar el resto.' },
  { q: 'El gerente cerró 18 % más siniestros con la misma gente. Eso…', ops: ['Demuestra que el clima está bien', 'Puede convivir con un mal clima, y hasta explicarlo', 'No tiene relación con nada', 'Invalida la encuesta'], ok: 1, por: 'Más productividad con la misma gente puede ser logro y también carga. No se excluyen.' },
  { q: '¿Quién debería estar en un focus group sobre el clima de un equipo?', ops: ['El supervisor, para que escuche', 'Personas voluntarias del equipo, sin sus jefes', 'Solo quienes más se quejan', 'El gerente y RR.HH.'], ok: 1, por: 'Con un jefe en la sala, la gente cuida lo que dice.' },
  { q: 'Invitas a alguien al focus group y te pregunta si es en su tiempo libre. Lo correcto es…', ops: ['Sí, a la salida', 'Es dentro de la jornada y es voluntario', 'Es obligatorio', 'Que lo decida su supervisor'], ok: 1, por: 'Una actividad que pide la empresa se hace en horario de trabajo, y participar en un focus group es voluntario.' },
];

const BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '09:00', ch: 'presencial', who: 'sofia', titulo: '«La encuesta está mal hecha»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'La oficina de Sofía', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Sofía escribe en una pizarra blanca, con plumón azul: «La encuesta está mal hecha». «Es lo primero que va a decir. Siempre es lo primero.» ${F.has('sofia_informada') ? 'Ya leyó tu resumen del lunes y lo tiene impreso al lado.' : ''}</p><p>«Solo podemos mostrarle tres cosas antes de que se aburra. <mark class="clave">¿Cuáles llevamos para responder a eso?</mark>»</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres evidencias que mejor responden a «la encuesta está mal hecha».', boton: 'Llevar estas', resumen: 'Llevas',
    cols: ['Evidencia', 'Qué responde'],
    rows: [
      { id: 'tasa', cells: ['Tasa de respuesta de Siniestros: 81 %', 'Que no respondieron solo los molestos'] },
      { id: 'ficha', cells: ['Ficha técnica: mismo cuestionario en 2025 y en todas las áreas', 'Que no se le midió con otra vara'] },
      { id: 'otras', cells: ['Otras áreas con el mismo instrumento sacaron entre 65 % y 82 %', 'Que la encuesta sí distingue áreas'] },
      { id: 'citas', cells: ['Las cinco citas más duras de los comentarios', 'Que la gente está muy molesta'] },
      { id: 'lista', cells: ['La lista de quiénes respondieron y quiénes no', 'Que respondió la mayoría'] },
      { id: 'sueldo', cells: ['El ítem de sueldo de Siniestros, igual al promedio', 'Que no es un problema de plata'] },
    ],
    score: { tasa: 3, ficha: 3, otras: 2, sueldo: 1, citas: -2, lista: -4 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: picks.includes('lista') ? -4 : 1 },
        flags: q === 'buena' ? ['metodo_listo'] : [], cartera: { informe: q === 'buena' ? 'Respuestas sobre el método listas' : 'Presentación sin defensa del método' },
        out: q === 'buena' ? 'Sofía tacha la frase de la pizarra. «Con esto, el método no se discute. Discutiremos lo que importa.»' : picks.includes('lista') ? 'Sofía te mira: «¿La lista de quién respondió? Eso no existe para nadie fuera de nosotras, y ni siquiera nosotras la necesitamos».' : 'Llevas datos que impactan, pero no los que responden la objeción.',
        pro: { ok: 'Contra «está mal hecha», la mejor respuesta es mostrar que el instrumento fue el mismo para todos y que respondió casi toda el área.', risk: 'Las citas duras al inicio confirman su idea de que es «personal».', info: 'Ten la ficha técnica impresa: a los gerentes les da seguridad ver el método en papel.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Objeción desarmada antes de empezar!' : 'Responde la objeción, no la emoción.'],
      };
    },
    mirada: {
      ve: 'La objeción al método es casi siempre una defensa emocional con ropa técnica. Se responde con datos técnicos simples y sin ironía: así la conversación puede pasar a lo que importa.',
      visual: { tipo: 'rango', titulo: 'Mismo instrumento, distintas áreas', min: 0, max: 100, banda: [65, 82], marcas: [['Siniestros', 42], ['Comercial', 65], ['Promedio', 71], ['Finanzas', 82]] },
    },
  },
  {
    id: 'g2', t: '11:00', ch: 'documento', who: null, titulo: 'El orden de la presentación', banner: 'assets/foto2/revisan.webp', lugar: 'Sala de directorio, piso 11', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Tienes once diapositivas y cuarenta minutos. ${F.has('mapa_temas') ? 'El mapa de temas quedó claro, y eso ayuda.' : 'El mapa de temas todavía tiene frases que Gonzalo puede atacar.'} Lo que cambia todo no es qué muestras, sino <mark class="clave">en qué orden</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las partes de la presentación. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'prop', t: 'Para qué estamos aquí: entender, no buscar culpables', por: 'Baja la guardia desde el inicio.' },
      { id: 'metodo', t: 'Cómo se hizo la encuesta y cuántos respondieron', por: 'Responde la objeción antes de que aparezca.' },
      { id: 'bueno', t: 'Lo que funciona: compañerismo y sentido del trabajo', por: 'No es adorno: es real y es base para cambiar.' },
      { id: 'caida', t: 'Dónde está la caída: respeto, miedo a opinar y carga', por: 'El centro de la reunión.' },
      { id: 'voces', t: 'Qué dicen los comentarios, con frecuencias y citas sin nombres', por: 'Le da rostro al número.' },
      { id: 'paso', t: 'El siguiente paso: escuchar al equipo en un focus group', por: 'Se cierra con una acción, no con un veredicto.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 2 : -2, personas: q === 'buena' ? 2 : 0 },
        cartera: { informe: q === 'riesgosa' ? 'Presentación que empieza por el golpe' : 'Presentación ordenada' },
        out: q === 'buena' ? 'Sofía la ensaya contigo dos veces. «Así entra. Si empezamos por el 42 %, sale en el minuto tres.»' : 'Sofía cambia un par de diapositivas de lugar: «El número malo no puede ser lo primero que vea».',
        pro: { ok: 'Propósito, método, lo bueno, lo difícil, las voces y un siguiente paso: es la secuencia que mantiene a alguien escuchando.', risk: 'Abrir con el número más bajo o con citas duras convierte la reunión en un juicio.', info: 'Termina siempre con algo que el gerente pueda hacer, no con algo que hizo mal.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Un orden que cuida y no maquilla.' : 'El orden también comunica.'],
      };
    },
    mirada: {
      ve: 'Presentar malas noticias no es suavizarlas: es ordenarlas para que puedan ser escuchadas. Lo positivo va antes que lo negativo no para endulzar, sino porque también es verdad y da desde dónde construir.',
      visual: { tipo: 'flujo', titulo: 'La presentación', pasos: ['Propósito', 'Método', 'Lo que funciona', 'La caída', 'Las voces', 'Siguiente paso'] },
    },
  },
  {
    id: 'g3', t: '15:05', ch: 'presencial', who: 'gerente', titulo: 'Gonzalo', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de directorio, piso 11', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>Gonzalo llega cinco minutos tarde, con un fólder de indicadores bajo el brazo. Escucha en silencio hasta la diapositiva de la caída. Entonces cierra la laptop de un golpe suave.</p><p>«Este año cerramos 18 % más siniestros con la misma gente. ¿Y me dicen que estamos mal? ${F.has('metodo_listo') ? 'Ya sé que el cuestionario es el mismo, pero la gente respondió molesta por el sistema nuevo.' : 'Esta encuesta está mal hecha.'} <mark class="clave">Lo que mide es el mal humor de una semana</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer su logro y decirle que las dos cosas pueden ser ciertas: más casos cerrados y un equipo que siente poco respeto y mucha carga. La encuesta no dice por qué: eso es lo que proponen escuchar en el focus group.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3, personas: 2 }, rel: { gerente: 1 }, flags: ['gonzalo_escucha'],
          out: 'Gonzalo se queda callado un rato largo. «Mi papá decía que el que no grita no manda.» Y luego: «Ya. Hagan su focus group».',
          pro: { ok: 'No niegas su logro ni lo usas contra él. Separas resultado de causa y propones escuchar.', risk: 'Puede quedarse con la idea de que el problema es solo el sistema nuevo.', info: 'Cuando un gerente cuenta algo personal, no lo comentes: anótalo. Te dice cómo piensa.' },
          kusi: ['animo', 'Lo escuchaste y no soltaste el dato.'] } },
      { id: 'b', label: 'Mostrarle las citas más duras de los comentarios, para que vea que no es mal humor.',
        res: { q: 'riesgosa', fx: { confianza: -4, personas: -2 }, rel: { gerente: -1 }, flags: ['gonzalo_herido'],
          out: 'Gonzalo lee la cita de las reuniones y se pone rojo. «¿Quién escribió esto?» Sofía tiene que parar la reunión.',
          pro: { ok: 'Los comentarios son reales.', risk: 'Usados como golpe, convierten la reunión en una búsqueda del culpable.' },
          kusi: ['preocupado', 'Las voces no son munición.'] } },
      { id: 'c', label: 'Decirle que tiene razón en que el sistema nuevo afectó, y proponer repetir la encuesta en tres meses.',
        res: { q: 'aceptable', fx: { confianza: 2, calidad: -3 }, rel: { gerente: 1 },
          out: 'Gonzalo respira aliviado. Sofía no: «Si la repetimos sin hacer nada, la gente va a responder peor. Hagamos primero el focus group».',
          pro: { ok: 'Bajas la tensión.', risk: 'Repetir la encuesta sin actuar le dice al equipo que no se le creyó.' },
          kusi: ['pensando', 'Postergar no es escuchar.'] } },
    ],
    rules: [[BP, 'La encuesta dice qué perciben las personas; el porqué se explora escuchando, no se adivina.']],
    mirada: {
      ve: 'La productividad y el mal clima conviven más de lo que parece: un equipo puede cerrar más casos justamente porque se le exige más, y pagar ese esfuerzo con miedo y cansancio. Decirlo sin negar el logro es lo que permite que el gerente siga en la conversación.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Gonzalo ve', items: ['18 % más siniestros cerrados', 'Misma gente', 'Metas cumplidas'] }, b: { t: 'Lo que el equipo dice', items: ['Poco respeto en reuniones', 'Miedo a opinar', 'Cierres hasta las nueve'] } },
    },
  },
  {
    id: 'g4', t: '15:40', ch: 'presencial', who: 'gerente', titulo: '¿Y si va Hernán?', banner: 'assets/foto2/tension.webp', lugar: 'Sala de directorio, piso 11', show: ['etica', 'confianza'],
    body: () => `<p>Antes de levantarse, Gonzalo agrega: «Una condición. Que en el focus group esté Hernán Díaz, el supervisor de Atención. Conoce a la gente mejor que nadie. <mark class="clave">Así ve que no tenemos nada que ocultar</mark>.»</p><p>Sofía te mira. Te toca responder.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que con un jefe en la sala la gente cuida lo que dice, y proponerle que Hernán y los demás supervisores tengan su propia conversación aparte.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3, confianza: -1 }, flags: ['sin_supervisores'],
          out: '«Ya. Pero que Hernán tenga su espacio.» Lo anotas. Por la tarde, Hernán le escribe a Sofía: «Me enteré de que no estoy invitado».',
          pro: { ok: 'Proteges la sinceridad del grupo sin excluir a los supervisores del proceso.', risk: 'Hernán puede sentirse señalado.', info: 'Separar niveles jerárquicos en grupos distintos es una regla básica de los focus groups de clima.' },
          kusi: ['animo', 'Cada voz en su espacio.'] } },
      { id: 'b', label: 'Aceptar: si Gonzalo no aprueba, no hay focus group, y Hernán puede ayudar a que la gente hable.',
        res: { q: 'riesgosa', fx: { etica: -3, calidad: -4 }, rel: { gerente: 1 }, flags: ['hernan_invitado'],
          out: 'Gonzalo sonríe por primera vez. Sofía no dice nada, pero aprieta el lapicero.',
          pro: { ok: 'Consigues la aprobación.', risk: 'Un focus group con el supervisor presente casi siempre termina en silencio o en frases de compromiso.' },
          kusi: ['preocupado', '¿Quién va a hablar con él ahí?'] } },
    ],
    rules: [[BP, 'En un focus group de clima no participan los jefes directos de quienes hablan.']],
    mirada: {
      ve: 'La presencia de un jefe cambia lo que se dice, aunque el jefe sea simpático y no diga nada. No es desconfianza hacia la persona: es cómo funcionan los grupos.',
      visual: { tipo: 'cambio', titulo: 'Quién habla en cada grupo', pares: [['Analistas con su supervisor', 'Analistas solos'], ['Supervisores con el gerente', 'Supervisores solos'], ['Un solo grupo para todos', 'Un grupo por nivel']] },
    },
  },
  {
    id: 'g5', t: '16:30', ch: 'llamada', who: null, titulo: 'La convocatoria', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>El focus group es mañana a las 10. Necesitas entre seis y ocho personas de Siniestros. Llamas a anexos al azar de la lista de los equipos, para que nadie sienta que fue «elegido».</p>`,
    type: 'calls',
    calls: [['Lucía Ramos', 'Contesta: acepta, con miedo', 'Sí voy. Pero ¿quién más va a estar?'], ['Wálter Condori', 'Contesta: pregunta si es fuera de horario', 'Yo salgo a las seis pero me quedo cerrando hasta las ocho. ¿Esto es a la salida o en horario?'], ['Pamela Rojas', 'No contesta'], ['Joel Ccama', 'Contesta: Hernán ya le dijo que irá', 'Ah, ¿lo del focus? Hernán nos dijo que iba a estar él también.'], ['Milagros Tello', 'Contesta: acepta con ganas', '¡Por fin alguien pregunta! Ahí estaré.']],
    prompt: 'Ya tienes tres que aceptan. Wálter pregunta por el horario y Joel cree que Hernán estará. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Confirmarle a Wálter que es en horario de trabajo y voluntario, aclararle a Joel que no habrá supervisores, y completar el grupo con gente de las dos sedes.',
        res: { q: 'buena', fx: { personas: 4, calidad: 3, tiempo: -1 }, flags: ['grupo_voluntario'], cartera: { focus: 'Convocados 7 voluntarios de las dos sedes' },
          out: 'A las 5:45 tienes siete personas confirmadas: analistas de San Isidro y de Surquillo, nuevos y antiguos. Wálter dice: «Si es en horario, voy».',
          pro: { ok: 'Voluntario, en horario y diverso: así el grupo representa al área.', info: 'Aclara siempre quién estará en la sala: es lo primero que preguntan.' },
          kusi: ['feliz', 'Grupo armado sin que nadie se sienta marcado.'] } },
      { id: 'b', label: 'Para ir más rápido, invitar a quienes escribieron los comentarios más largos en la encuesta, que son los que más tienen que decir.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -3 }, flags: ['grupo_elegido'], cartera: { focus: 'Grupo armado con «los que más se quejan»' },
          out: 'Para saber quiénes son, tienes que cruzar la base. Y cuando el grupo se forma, en Siniestros todos entienden por qué los eligieron.',
          pro: { ok: 'Rapidez.', risk: 'Usar la encuesta para elegir participantes rompe la confidencialidad y marca a las personas.' },
          kusi: ['indignado', '¡Eso es usar la encuesta para señalar!'] } },
    ],
    rules: [[BP, 'La participación en el focus group es voluntaria, en horario de trabajo y sin jefes directos.'], [BP, 'Nunca se usa la base de la encuesta para elegir participantes.']],
    mirada: {
      ve: 'La convocatoria ya es parte del mensaje: si la gente siente que fue elegida por lo que respondió, el focus group nace muerto. Al azar, voluntario y en horario dice «queremos escuchar», no «sabemos quién eres».',
      visual: { tipo: 'embudo', titulo: 'La convocatoria', niveles: [['Llamadas', 5], ['Contestaron', 4], ['Aceptaron hoy', 3]] },
    },
  },
  {
    id: 'g6', t: '18:20', ch: 'correo', who: null, titulo: 'El acta de la reunión', banner: 'assets/esc/meta.webp', show: ['confianza', 'cumplimiento'],
    mail: { from: 'Sofía Ledesma', to: 'Analista de Clima y Cultura', asunto: 'Acta para Gonzalo' },
    body: () => `<p>¿Le mandas tú el acta a Gonzalo? Corta, por favor, y <mark class="clave">que no suene a sentencia</mark>. Con copia a mí.</p><p>Sofía</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Lo conversado, lo acordado, el siguiente paso y una línea de agradecimiento.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 2 }, rel: { gerente: 1, sofia: 1 },
          responde: 'Gonzalo: gracias por su tiempo hoy. Revisamos los resultados de Siniestros (81 % de respuesta, 42 % de favorabilidad) y su contexto: más casos cerrados con el mismo equipo y el cambio de sistema. Acordamos escuchar al equipo en un focus group voluntario este jueves a las 10, sin supervisores, y conversar aparte con los supervisores. El viernes le contamos qué salió, sin nombres.',
          out: 'Gonzalo responde con un «Recibido. Gracias». Sofía te reenvía el correo con una sola palabra: «Perfecto».', kusi: ['celebra', 'Un acta que deja todo claro y a nadie herido.'] } },
      { id: 'b', label: 'El resultado, la lista de problemas del área y lo que Gonzalo tiene que cambiar.',
        res: { q: 'riesgosa', fx: { confianza: -3 }, rel: { gerente: -1 },
          responde: 'Gonzalo: según la encuesta, Siniestros tiene problemas de trato, miedo y carga. Es importante que se tomen medidas.',
          out: 'Gonzalo reenvía tu correo a su jefe con un comentario: «Esto es lo que manda Cultura». Sofía tiene que llamar para aclarar.', kusi: ['preocupado', 'Un acta no es una sentencia.'] } },
    ],
    mirada: { ve: 'El acta es el documento que queda cuando la emoción de la reunión pasa. Debe registrar hechos y acuerdos, no juicios: la va a leer gente que no estuvo en la sala.' },
  },
];
