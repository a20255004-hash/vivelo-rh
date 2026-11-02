// Capítulo 2 · «El perfil» · Semana 1, miércoles.
// Recibe las decisiones del capítulo 1 a través de F.has(flag).

export const CAP = {
  n: 2, titulo: 'El perfil', dia: 'Semana 1, martes', foto: 'assets/foto/plano-equipo.webp',
  lugar: 'Almacén central · Distribuidora Pacífico Sur',
  inicio: '07:30', fin: '20:00', cierreHora: '19:10',
  apertura: 'Hoy toca dejar la oficina: el puesto que buscas se ve mejor desde el almacén.', boton: 'Ir al almacén',
  kusi: 'Hoy el perfil se arma con los pies en el almacén. ¡Dale!',
  lead: 'Saliste de la oficina, escuchaste a quien hace el trabajo y convertiste un pedido vago en un perfil que se puede defender. Eso es la mitad de una buena contratación.',
  reflexion: '¿Qué aprendiste hoy que no estaba en el perfil de 2023?',
  rel: { julio: 0 },
  siguiente: { n: 3, titulo: 'Salir a buscar', dia: 'Semana 1, miércoles' },
};

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 23, e: 'Hoy: perfil con Walter' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 10, e: '31 postulantes sin revisar' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 16, e: 'Terna enviada hace 13 días, sin respuesta' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 41, e: '¿En pausa? Nadie lo sabe' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 6, e: 'Aviso publicado, 4 postulantes' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 4, e: 'Recién pedido' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 61, e: 'Aceptó la oferta y no llegó' },
];
export const CARTERA = (F, prev) => BASE.map(c => {
  const antes = prev?.cartera?.find(x => x.id === c.id);
  return antes && c.id !== 'supervisor' && antes.e !== c.e ? { ...c, e: antes.e } : c;
});

export const FUTURO = {
  filtro_sexo: ['Aceptaste filtrar a las mujeres «en silencio».', 'Rocío ya lo sabe. Volverá en el capítulo 4.'],
  walter_aliado: ['Walter aceptó describir el puesto por lo que hay que lograr.', 'Lo notarás en las entrevistas del capítulo 5.'],
  walter_choque: ['Walter se quedó con la idea de que RR.HH. «solo pone trabas».', 'Capítulo 3.'],
  julio_interno: ['Don Julio podría postular: veinte años en el almacén y sin secundaria completa.', 'Capítulo 4.'],
  perfil_solido: ['Tu perfil describe el trabajo, no a la persona.', 'Será la base del aviso del capítulo 3.'],
  perfil_flojo: ['Tu perfil tiene piezas que no ayudan a elegir.', 'Lo sufrirás en el filtro del capítulo 4.'],
  gina_actualizada: ['El asistente contable ahora pide PLAME, y Gina se siente escuchada.', 'Capítulo 3.'],
  gina_espera: ['Gina sigue esperando, y ya habló con Gerencia.', 'Capítulo 3.'],
  fernando_criterios: ['Fernando dirá qué le faltó a cada vendedor.', 'Te servirá en el capítulo 4.'],
  terna_nueva: ['Prometiste una terna nueva de vendedores esta semana.', 'Capítulo 3.'],
  banda_publica: ['Tu aviso mostrará el rango de sueldo.', 'Llegarán menos CV, pero más afines. Capítulo 4.'],
  banda_oculta: ['Tu aviso dirá «sueldo a tratar».', 'Prepárate para expectativas desalineadas en el capítulo 5.'],
  banda_tope: ['Ofreciste el tope de la banda desde el aviso.', 'No tendrás margen para negociar en el capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
  yesenia: { n: 'Yesenia Apaza', sub: 'Postulante a operaria', c: '#7CC6EA' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
};

export const CORREOS = [
  { t: '11:25', de: 'Ing. Walter Quispe', para: 'Analista de Selección', cc: 'Rocío Mamani', asunto: 'Perfil supervisor', html: '<p>Lo de hoy está bien. Mándame el perfil para revisarlo antes del viernes.</p><p>W. Quispe</p>', si: 'walter_aliado' },
  { t: '15:40', de: 'Fernando Salas', para: 'Analista de Selección', asunto: 'Lo que le faltó a cada uno', html: '<p>Colega, como pediste:</p><p>1. Carlos: poca experiencia con bodegas.<br>2. Milena: no tiene moto propia.<br>3. Javier: muy tímido para la calle.</p><p>Kevin igual va en la lista, ah. 😄</p>', si: 'fernando_criterios' },
];

export const WSP = [
  { chat: 'grupo', t: '07:35', de: 'Kelly', txt: 'Hoy hay pollo a la brasa en el comedor 🍗 avisen si bajan' },
  { chat: 'rocio', t: '07:41', de: 'Rocío', txt: 'Suerte con Walter. Si se pone difícil, escúchalo primero 😉' },
  { chat: 'walter', t: '07:52', de: 'Walter', txt: 'Ok. Portón 3. Traiga casco.', si: 'preg_logro' },
  { chat: 'walter', t: '07:52', de: 'Walter', txt: '👍', si: 'preg_sexo' },
  { chat: 'walter', t: '07:52', de: 'Walter', txt: 'Ya le mandé el perfil. Publíquelo.', si: 'preg_2023' },
  { chat: 'walter', t: '11:20', de: 'Walter', txt: 'Lo que hablamos está bien. Mándame el perfil para revisarlo.', si: 'walter_aliado' },
  { chat: 'fernando', t: '15:42', de: 'Fernando', txt: 'Te mando por correo lo que me pediste. Kevin igual va en la lista ah 😄', si: 'fernando_criterios' },
  { chat: 'rocio', t: '18:44', de: 'Rocío', txt: 'Walter me dijo que acordaron buscar «varón». ¿Es así? Hablemos mañana a primera hora.', si: 'filtro_sexo' },
  { chat: 'yesenia', t: '18:45', de: 'Yesenia', txt: 'Buenas tardes señorita 🙏 mañana es mi entrevista, ¿a qué hora era? y ¿llevo algo más aparte de mi DNI?', si: 'wsp_operarios', no: 'filtro_sexo' },
  { chat: 'rocio', t: '18:46', de: 'Rocío', txt: 'Walter me escribió: «la nueva sabe». Viniendo de él, es un premio 👏', no: ['filtro_sexo', 'wsp_operarios'] },
];

export const QUIZ = [
  { q: '¿Qué describe mejor la misión de un puesto?', ops: ['Para qué existe el puesto y qué resultado aporta', 'La lista de todas sus tareas', 'Los años de experiencia que pide', 'El sueldo y el horario'], ok: 0, por: 'La misión es una frase que dice para qué existe el puesto. Las tareas, requisitos y sueldo vienen después.' },
  { q: 'Un jefe pide «que sea varón». ¿Cuándo podría pedirse un sexo determinado?', ops: ['Nunca, bajo ninguna circunstancia', 'Cuando el jefe lo prefiera', 'Solo si hay una razón objetiva e indispensable del puesto, que se pueda justificar', 'Cuando el aviso es para turnos de noche'], ok: 2, por: 'La regla es no discriminar. Las excepciones son muy raras: deben ser objetivas, razonables y vinculadas al puesto.' },
  { q: '¿Por qué conviene publicar un rango de sueldo?', ops: ['Para que lleguen más CV de cualquier perfil', 'Porque atrae a quien encaja y evita entrevistas con expectativas que no puedes pagar', 'Porque la ley obliga a ponerlo en todos los avisos', 'Para ofrecer siempre el máximo'], ok: 1, por: 'Publicar el rango filtra desde el inicio. No es obligatorio en el aviso, pero ahorra tiempo a todos.' },
  { q: 'Un trabajador con 20 años en el almacén quiere postular, pero no cumple un requisito formal. ¿Qué haces?', ops: ['Lo descartas: las reglas son las reglas', 'Lo pasas directo a la terna por antigüedad', 'Revisas si ese requisito es realmente indispensable y lo evalúas como a los demás', 'Le dices que espere el próximo proceso'], ok: 2, por: 'La movilidad interna vale oro. A veces el requisito formal no mide lo que el puesto exige.' },
  { q: 'Un gerente dice «ninguno me convence» de tu terna. ¿Qué le pides?', ops: ['Nada: buscas otros tres', 'Que diga qué le faltó a cada uno, con un ejemplo', 'Que entreviste a más personas', 'Que firme que rechaza la terna'], ok: 1, por: 'Sin criterios concretos, la siguiente terna fallará igual.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '07:40', ch: 'whatsapp', who: 'walter', titulo: 'Un mensaje para Walter', banner: 'assets/foto/revisa.webp', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Llegas temprano al parque industrial. Antes de cruzar al almacén, confirmas la reunión con Walter por WhatsApp. ${F.has('visita_almacen') ? 'Él mismo te citó ayer.' : 'Rocío tuvo que conseguirte esta reunión.'}</p><p>Tienes <mark class="clave">treinta minutos con él</mark>: lo que pongas en este mensaje marcará de qué van a hablar.</p>`,
    type: 'compose', enviaA: 'walter', para: 'Para: Walter Quispe', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Saludo', ops: [
        { id: 's1', t: 'Buenos días, ingeniero.', ok: true, por: 'Cordial y respetuoso con un jefe que todavía no te conoce.' },
        { id: 's2', t: 'Hola Walter 👋', ok: null, por: 'Cercano, quizás demasiado para el segundo contacto con un jefe molesto.' },
        { id: 's3', t: 'Estimado Ing. Quispe:', ok: null, por: 'Correcto, aunque suena a correo formal más que a WhatsApp.' },
      ] },
      { id: 'confirma', t: 'Confirmación', ops: [
        { id: 'c1', t: 'Le confirmo nuestra reunión de hoy a las 8:00 en el portón 3.', ok: true, por: 'Hora y lugar exactos: nadie tiene que preguntar nada.' },
        { id: 'c2', t: 'Nos vemos más tarde.', ok: false, por: 'Vago: ¿a qué hora?, ¿dónde?' },
        { id: 'c3', t: 'Voy apenas termine unas cosas en la oficina.', ok: false, por: 'Le dice a Walter que su reunión no es tu prioridad.' },
      ] },
      { id: 'pregunta', t: 'Lo que quieres hablar', ops: [
        { id: 'q1', t: 'Para aprovechar el tiempo, quiero preguntarle qué debe lograr el nuevo supervisor en sus primeros tres meses.', ok: true, por: 'Empiezas por los resultados del puesto: de ahí sale todo el perfil.' },
        { id: 'q2', t: 'Para aprovechar el tiempo, quiero saber si prefiere que sea hombre o mujer y qué edad le parece ideal.', ok: false, por: 'Invita a Walter a poner requisitos discriminatorios en el perfil.' },
        { id: 'q3', t: 'Para aprovechar el tiempo, ¿me reenvía el perfil de 2023 para publicarlo igualito?', ok: false, por: 'El perfil de 2023 tenía requisitos que no se pueden pedir.' },
      ] },
      { id: 'extra', t: 'Un pedido adicional', ops: [
        { id: 'e1', t: 'Si se puede, me gustaría conversar cinco minutos con alguien del equipo que conozca bien el puesto.', ok: true, por: 'Quien hace el trabajo sabe cosas que no están en ningún documento.' },
        { id: 'e2', t: 'Serán solo diez minutos, no le quito más.', ok: null, por: 'Amable, pero te quedas corta: el perfil necesita más tiempo.' },
        { id: 'e3', t: 'Si no puede hoy, lo vemos otro día sin problema.', ok: false, por: 'Le quitas urgencia a un proceso que ya lleva más de tres semanas.' },
      ] },
    ],
    res: sel => {
      const ilegal = sel.pregunta === 'q2', buenas = ['s1', 'c1', 'q1', 'e1'].filter(x => Object.values(sel).includes(x)).length;
      const q = ilegal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -2, cumplimiento: ilegal ? -6 : 2, confianza: sel.confirma === 'c1' ? 2 : -2 },
        flags: [ilegal ? 'preg_sexo' : sel.pregunta === 'q1' ? 'preg_logro' : 'preg_2023', ...(sel.extra === 'e1' ? ['pedir_equipo'] : [])],
        out: ilegal ? 'Walter responde con un pulgar. Acabas de abrirle la puerta para hablar de sexo y edad.' : sel.pregunta === 'q1' ? 'Walter responde: «Ok. Portón 3. Traiga casco». Tu mensaje ya ordenó la reunión alrededor de resultados.' : 'Walter responde: «Ya le mandé el perfil. Publíquelo». La reunión empieza cuesta arriba.',
        pro: { ok: 'Un buen mensaje de coordinación tiene hora, lugar, propósito y un pedido concreto.', risk: 'Lo que escribes antes de una reunión define de qué se va a hablar en ella.', info: 'Pide también cuántas personas supervisa y en qué turnos: dimensiona el puesto.' },
        kusi: [ilegal ? 'preocupado' : 'feliz', ilegal ? 'Uy, esa pregunta abre la puerta equivocada.' : 'Mensaje de profesional. ¡Qué bacán!'],
      };
    },
    rules: [[BP, 'Un levantamiento de perfil empieza por los resultados del puesto, no por el retrato de la persona.'], [BP, 'Al coordinar, envía hora, lugar y propósito en un solo mensaje.']],
    mirada: {
      ve: 'Las preguntas moldean las respuestas. Si preguntas «¿hombre o mujer?», el jefe elegirá uno. Si preguntas «¿qué tiene que lograr?», el jefe describirá un trabajo. Una profesional prepara la reunión desde el primer mensaje.',
      visual: { tipo: 'flujo', titulo: 'Cómo se arma un perfil de puesto', pasos: ['Misión', 'Resultados esperados', 'Funciones', 'Requisitos', 'Competencias', 'Condiciones'], aqui: 1 },
    },
  },
  {
    id: 'p2', t: '08:00', ch: 'presencial', who: 'walter', titulo: '«Que sea varón»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Almacén central · portón 3', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('visita_almacen') ? 'Walter te espera en el portón 3, con casco y chaleco. Mira el reloj: llegaste puntual. Asiente.' : 'Rocío tuvo que pedirle a Walter esta reunión. Te recibe sin levantar la vista de su tablet: «Tengo treinta minutos».'}</p>${F.has('promesa') ? '<p>«Antes que nada: el viernes tengo supervisor, ¿no? Así me dijo.»</p>' : ''}${F.has('elmer_tarde') ? '<p>«Y su postulante de las nueve ya llamó a Jhonatan: no encuentra la entrada del parque. Va a llegar tarde.»</p>' : ''}<p>Caminan entre los racks. Walter responde rápido, hasta que dice: «Y que sea varón. <mark class="clave">Aquí los operarios no le hacen caso a una mujer</mark>, y a veces hay que cargar.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Preguntarle qué tendría que lograr la persona con su equipo.',
        res: { q: 'buena', fx: { etica: 5, confianza: 4, cumplimiento: 4 }, rel: { walter: 1 }, flags: ['walter_aliado'],
          out: 'Walter piensa: «Que el turno no se caiga, que la gente le respete, que el inventario cuadre». Lo anotas como competencias: liderazgo de equipos operativos, organización, manejo de conflictos. Al final dice: «Bueno… si cumple eso, que sea quien sea».',
          pro: { ok: 'Conviertes un prejuicio en criterios que puedes evaluar, sin humillar a Walter.', risk: 'Puede volver a pedirlo en la entrevista. Ten listo el argumento legal.', info: '«¿Hay que cargar?» merece una pregunta: ¿cuánto peso y con qué frecuencia? Si es ocasional, no es un requisito del puesto.' },
          kusi: ['celebra', '¡Qué divino! Sin pelear, cambiaste la conversación.'] } },
      { id: 'b', label: 'Aceptarlo por ahora para no chocar en la primera reunión y, después, publicar el aviso sin mencionar el sexo, pero dejar fuera a las postulantes en el filtro sin decírselo a nadie.',
        res: { q: 'riesgosa', fx: { etica: -9, cumplimiento: -7, confianza: 3 }, rel: { walter: 1 }, flags: ['filtro_sexo'],
          out: 'Walter queda contento. Pero acabas de aceptar discriminar a escondidas, y eso deja rastro: los CV descartados, los correos, tu Excel.',
          pro: { ok: 'Evitas el conflicto hoy.', risk: 'La discriminación oculta sigue siendo discriminación, y ahora depende de ti.', info: 'Si Walter insiste, la decisión no es tuya sola: es momento de involucrar a Rocío.' },
          kusi: ['triste', 'Eso no lo vas a poder defender.'] } },
      { id: 'c', label: 'Decirle que es ilegal.',
        res: { q: 'aceptable', fx: { etica: 4, cumplimiento: 4, confianza: -4 }, rel: { walter: -1 }, flags: ['walter_choque'],
          out: '«Ya, ya. RR.HH. y sus reglas», responde, y el resto de la reunión contesta con monosílabos.',
          pro: { ok: 'Tienes razón y lo dejas claro.', risk: 'Una regla sin explicación suena a traba. Walter sigue creyendo lo mismo.', info: 'Después del «no», pregunta qué necesita que la persona logre: así lo conviertes en criterios.' },
          kusi: ['pensando', 'El qué está bien. El cómo, mejorable.'] } },
    ],
    rules: [[LEY, 'Las ofertas de empleo no pueden exigir un sexo salvo que exista una razón objetiva y razonable vinculada al puesto (Ley 26772).'], [BP, 'Traduce cada preferencia sobre la persona en una competencia que puedas evaluar.']],
    mirada: {
      ve: 'Detrás del «que sea varón» hay un miedo real: que el equipo no respete al nuevo supervisor. Una profesional no discute el miedo, lo convierte en algo medible. El respeto del equipo depende del liderazgo, y el liderazgo se evalúa en una entrevista, no en un DNI.',
      visual: { tipo: 'cambio', titulo: 'De lo que pide el jefe a lo que puedes evaluar', pares: [['Que sea varón', 'Liderazgo con equipos operativos'], ['Que le hagan caso', 'Manejo de conflictos y firmeza'], ['A veces hay que cargar', 'Apoyo ocasional en carga (hasta 25 kg)']] },
      normas: [{ ley: 'Ley 26772 y su reglamento (D.S. 002-98-TR)', dice: 'Se considera discriminatorio pedir requisitos como el sexo, salvo que exista una razón objetiva y razonable, vinculada a la naturaleza del puesto.', practica: '«Los operarios no le hacen caso a una mujer» no es una razón objetiva: es un prejuicio sobre el equipo.' }],
    },
  },
  {
    id: 'p3', t: '09:10', ch: 'presencial', who: 'julio', titulo: 'Don Julio', banner: 'assets/foto/cafe.webp', lugar: 'Almacén central · zona de despacho', show: ['personas', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('pedir_equipo') ? 'Como pediste en tu mensaje, Walter te deja con alguien que conoce el puesto.' : 'Walter se va a una llamada.'} Junto a la zona de despacho, un señor con gorra ordena guías de remisión. Es don Julio Cutipa: veinte años en el almacén.</p><p>«Usted es la de Recursos Humanos, ¿no? Siéntese, hija. Aquí se sabe más que en cualquier perfil.»</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas. ¿Qué quieres saber?',
    opts: [
      { id: 'bien', label: '¿Qué hacía bien Pacheco?', info: '«Conocía a cada uno. Sabía quién tenía hijo enfermo y quién se hacía el vivo. Con él, el turno de noche no faltaba.»' },
      { id: 'porque', label: '¿Por qué cree que se fue?', info: '«Plata, pues. Una minera de Moquegua le ofreció más. Pero también se cansó: hacía de supervisor, de almacenero y de chofer.»' },
      { id: 'falta', label: '¿Qué le falta a este almacén?', info: '«Orden en el sistema. El WMS está, pero nadie lo usa bien. El nuevo tiene que saber de eso, no solo de gritar.»' },
      { id: 'el', label: '¿Usted postularía al puesto?', info: '«¿Yo? Uy… no tengo la secundaria completa, hija. Aunque este almacén lo conozco como mi casa. Pero no, eso es para los que estudiaron.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: picks.includes('el') ? 3 : 1, calidad: picks.includes('falta') || picks.includes('bien') ? 3 : 1 },
      rel: { julio: 1 },
      flags: picks.includes('el') ? ['julio_interno'] : [],
      out: picks.includes('el') ? 'Don Julio se ríe, pero la idea queda en el aire. ¿El requisito de secundaria es realmente indispensable?' : 'Te llevas dos datos que no estaban en ningún documento.',
      kusi: ['curioso', 'Lo que dijo don Julio no estaba en ningún perfil.'],
    }),
    mirada: {
      ve: 'Quien hace el trabajo sabe lo que el puesto necesita. Una profesional siempre habla con alguien del equipo, no solo con el jefe. Y cuando alguien de adentro tiene el conocimiento pero no el requisito formal, se pregunta si el requisito mide lo que importa.',
      visual: { tipo: 'balanza', a: { t: 'Buscar afuera', items: ['Trae experiencia de otras empresas', 'Cumple todos los requisitos formales'] }, b: { t: 'Mirar adentro', items: ['Conoce el almacén y al equipo', 'Motiva a los demás: «aquí se crece»', 'Menor riesgo de que no se adapte'] } },
    },
  },
  {
    id: 'p4', t: '10:30', ch: 'documento', who: null, titulo: 'Armar el perfil', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>De vuelta en la oficina, con tus notas${F.has('walter_aliado') ? ' y el visto bueno de Walter' : ''}${F.has('julio_interno') ? ' y la frase de don Julio dándote vueltas' : ''}, armas el nuevo perfil del puesto.</p><p>Cada bloque tiene piezas buenas y piezas que suenan bien, pero <mark class="clave">no ayudan a elegir</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque. Al final verás cuáles sostienen el perfil.', boton: 'Guardar el perfil',
    bloques: [
      { id: 'mision', t: 'Misión del puesto', n: 1, ops: [
        { id: 'm1', t: 'Asegurar que el almacén reciba, guarde y despache la mercadería a tiempo y sin pérdidas, liderando a los operarios de cada turno.', ok: true, por: 'Dice para qué existe el puesto y cómo se mide.' },
        { id: 'm2', t: 'Supervisar el almacén.', ok: false, por: 'Es el nombre del puesto repetido: no dice qué resultado aporta.' },
        { id: 'm3', t: 'Ser el brazo derecho del jefe de Operaciones, con disponibilidad total y gran compromiso con la empresa.', ok: false, por: 'Suena bien, pero no describe el trabajo. «Disponibilidad total» además es ambiguo.' },
      ] },
      { id: 'funciones', t: 'Funciones principales', n: 3, ops: [
        { id: 'f1', t: 'Planificar y asignar las tareas de cada turno.', ok: true },
        { id: 'f2', t: 'Controlar inventarios y conciliar el WMS con el físico.', ok: true, por: 'Lo que don Julio dijo que falta.' },
        { id: 'f3', t: 'Coordinar con transportistas los despachos del día.', ok: true },
        { id: 'f4', t: 'Otras funciones que le asigne su jefe.', ok: false, por: 'Cabe en todos los perfiles y no orienta a nadie.' },
        { id: 'f5', t: 'Cubrir como chofer cuando falte alguno.', ok: false, por: 'Justo lo que cansó a Pacheco. Si se repite, el nuevo también se irá.' },
      ] },
      { id: 'requisitos', t: 'Requisitos', n: 3, ops: [
        { id: 'r1', t: '3 años supervisando un almacén o centro de distribución.', ok: true },
        { id: 'r2', t: 'Manejo de un sistema de almacén (WMS) y Excel intermedio.', ok: true },
        { id: 'r3', t: 'Disponibilidad para turnos rotativos.', ok: true },
        { id: 'r4', t: 'Licencia de montacargas.', ok: false, por: 'El supervisor no lo maneja: recortaría candidatos sin razón.' },
        { id: 'r5', t: 'Edad entre 25 y 35 años.', ok: false, por: 'Requisito discriminatorio (Ley 26772).' },
        { id: 'r6', t: 'Título universitario en Ingeniería Industrial.', ok: false, por: 'Ni Walter ni Pacheco lo consideraron necesario: deja fuera a gente con experiencia real.' },
      ] },
      { id: 'compet', t: 'Competencias', n: 2, ops: [
        { id: 'c1', t: 'Liderazgo de equipos operativos.', ok: true, por: 'Lo que Walter buscaba con «que le hagan caso».' },
        { id: 'c2', t: 'Organización y control.', ok: true },
        { id: 'c3', t: 'Proactividad.', ok: false, por: 'Está en todos los perfiles. Si no dices cómo se ve en este puesto, no sirve para evaluar.' },
        { id: 'c4', t: 'Buena presencia.', ok: false, por: 'Ambiguo y con riesgo de sesgo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .89 ? 'buena' : k >= .67 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: Math.round((k - .6) * 20), cumplimiento: k >= .67 ? 3 : -3, tiempo: -2 },
        flags: [q === 'riesgosa' ? 'perfil_flojo' : 'perfil_solido'], cartera: { supervisor: q === 'riesgosa' ? 'Perfil listo, con dudas' : 'Perfil listo para revisar con Walter' },
        out: q === 'buena' ? 'Tu perfil se lee en un minuto y cualquier entrevistador sabría qué evaluar. Walter lo aprobará casi sin cambios.' : q === 'aceptable' ? 'El perfil funciona, aunque algunas piezas no ayudan a decidir entre dos candidatos.' : 'El perfil suena completo, pero varias piezas no sirven para elegir, y alguna podría ser discriminatoria.',
        pro: { ok: 'Cada pieza buena responde a algo que viste hoy: lo que dijo Walter, lo que contó don Julio.', risk: 'Las frases que caben en cualquier perfil («proactividad», «otras funciones») no ayudan a elegir.', info: 'Prueba tu perfil así: ¿con él podrías decidir entre dos candidatos finalistas?' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Perfil de lujo!' : 'Casi. Mira qué piezas no te ayudan a elegir.'],
      };
    },
    rules: [[BP, 'Un perfil útil describe misión, funciones, requisitos y competencias que puedas evaluar.'], [LEY, 'Ningún requisito puede ser discriminatorio, ni siquiera en un documento interno (Ley 26772).']],
    mirada: {
      ve: 'Un perfil no es un trámite: es la herramienta con la que vas a escribir el aviso, filtrar CV, preparar la entrevista y decidir. Cada línea que no ayuda a elegir es ruido que pagarás en cada etapa.',
      visual: { tipo: 'flujo', titulo: 'Para qué sirve el perfil en el resto del proceso', pasos: ['Aviso', 'Filtro de CV', 'Guía de entrevista', 'Terna', 'Oferta', 'Inducción'] },
    },
  },
  {
    id: 'p5', t: '12:30', ch: 'correo', who: null, titulo: 'Gina pregunta', banner: 'assets/foto/reunion-jefa.webp', show: ['confianza', 'tiempo', 'calidad'],
    mail: { from: 'Gina Velásquez · Contadora general', to: 'Analista de Selección', cc: 'Rocío Mamani', asunto: 'RE: Asistente contable' },
    body: (n, F) => F.has('foco_contable')
      ? `<p>Hola. Gracias por escribirme el lunes. Sí, el puesto sigue. Pero ahora necesito que sepa <mark class="clave">PLAME y conciliaciones bancarias</mark>: la anterior asistente no sabía y yo terminaba haciéndolo todo.</p><p>¿Cuándo podemos conversar?</p><p>Gina</p>`
      : `<p>Buenas tardes. <mark class="clave">Hace 42 días</mark> pedí un asistente contable y nadie me responde. Ya se lo comenté a Gerencia.</p><p>Además, ahora necesito que sepa PLAME y conciliaciones bancarias.</p><p>Gina</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Pedirle quince minutos hoy para actualizar el requerimiento.',
        res: { q: 'buena', fx: { confianza: 5, tiempo: -3, calidad: 3 }, flags: ['gina_actualizada'], responde: 'Gina, gracias por escribir. ¿Conversamos hoy a las 4:00 p. m. para actualizar el requerimiento con PLAME y conciliaciones? Así publico un aviso que sí te sirva.', cartera: { contable: 'Requerimiento actualizado: pide PLAME' },
          out: 'A las 16:00 se toman un café. Gina se va con una fecha y tú con un perfil nuevo: el viejo ya no servía.',
          pro: { ok: 'Un requerimiento que cambió es un proceso nuevo. Mejor actualizarlo que publicar el aviso viejo.', info: 'Pregunta también qué pasó con la asistente anterior: te dirá qué evaluar.' },
          kusi: ['feliz', 'Quince minutos que te ahorran semanas.'] } },
      { id: 'b', label: 'Responderle que esta semana tienes toda tu atención en el supervisor de almacén, porque es la prioridad que te dio Rocío, y que retomas su pedido apenas cierres ese proceso.',
        res: { q: 'aceptable', fx: { confianza: -4, tiempo: 3 }, flags: ['gina_espera'], responde: 'Gina, esta semana tengo toda mi atención en el supervisor de almacén, que es la prioridad que me dio Rocío. Retomo tu pedido apenas cierre ese proceso.',
          out: 'Gina contesta: «Entendido». Una palabra. Cuarenta y dos días y ahora «cuando se pueda».',
          pro: { ok: 'Es honesto y respeta las prioridades de tu jefa.', risk: 'Para Gina, su vacante nunca es prioridad. Sin una fecha, la paciencia se acaba.', info: 'Aunque no puedas avanzar, siempre puedes dar una fecha concreta para retomarlo.' },
          kusi: ['pensando', 'Prioridad clara, pero sin fecha.'] } },
      { id: 'c', label: 'Volver a publicar el aviso de hace 42 días, tal cual, para que vea movimiento.',
        res: { q: 'riesgosa', fx: { calidad: -5, confianza: 1 }, flags: ['gina_espera'], cartera: { contable: 'Aviso viejo republicado' },
          out: 'Hay movimiento, sí. Pero el aviso no menciona PLAME: llegarán los mismos perfiles que ya no le sirven.',
          pro: { ok: 'Respondes rápido.', risk: 'Publicar un perfil desactualizado multiplica el trabajo después.' },
          kusi: ['preocupado', 'Movimiento no es avance.'] } },
    ],
    rules: [[BP, 'Si el requerimiento cambió, actualiza el perfil antes de publicar.'], [POL, 'En esta empresa, Rocío define las prioridades de Selección, pero cada jefe debe recibir una fecha.']],
    mirada: {
      ve: 'Gina no está molesta por la vacante: está molesta por el silencio. Una profesional sabe que con un cliente interno pesa tanto la comunicación como el resultado. Y nota algo más: el requerimiento cambió, así que el proceso viejo ya no sirve.',
      visual: { tipo: 'linea', titulo: 'Cómo se ve un proceso desde la silla de Gina', hitos: [['Día 1', 'Pide un asistente'], ['Día 15', 'Pregunta. Le dicen «ya sale»'], ['Día 30', 'Se va la analista'], ['Día 42', 'Escribe a Gerencia'], ['Hoy', 'Le respondes tú']] },
    },
  },
  {
    id: 'p6', t: '15:00', ch: 'llamada', who: 'fernando', titulo: '«Ninguno me convence»', banner: 'assets/foto/llamada.webp', show: ['calidad', 'etica', 'confianza'],
    body: (n, F) => `<p>Llamas a Fernando por la terna de vendedores que lleva trece días sin respuesta. Contesta al cuarto timbre, con ruido de calle.</p><p>«¡Colega! Mira, la terna… <mark class="clave">ninguno me convence</mark>. No sé, no tienen chispa.»</p>${F.has('favor_fernando') ? '<p>«Y lo de Kevin, ¿para cuándo la entrevista final? Ya le avisé.»</p>' : F.has('kevin_proceso') ? '<p>«¿Kevin ya entró a tu filtro? Avísame, ah.»</p>' : F.has('fernando_tenso') ? '<p>Su tono es más frío que el lunes.</p>' : ''}`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirle que diga qué le faltó a cada uno, con un ejemplo.',
        res: { q: 'buena', fx: { calidad: 6, confianza: 2, etica: 2 }, rel: { fernando: 0 }, flags: ['fernando_criterios'], cartera: { vendedores: 'Fernando enviará qué faltó a cada uno' },
          out: '«¿Por escrito? Ya, ya, te mando.» A las 15:40 llega: a uno le faltó experiencia en bodegas, otro no tenía moto. Por fin, criterios.',
          pro: { ok: 'Sin criterios, la segunda terna fracasaría igual. Ahora sabes qué buscar.', risk: 'Fernando puede sentir que lo evalúas a él. Hazlo con curiosidad, no como auditoría.', info: '«Chispa» casi siempre es otra cosa: iniciativa comercial, facilidad de palabra. Pregunta cómo la reconocería.' },
          kusi: ['animo', '«Sin chispa» ahora tiene nombre y apellido.'] } },
      { id: 'b', label: 'Decirle que no se preocupe, que buscarás una terna completamente nueva esta misma semana para que tenga más opciones y elija tranquilo.',
        res: { q: 'riesgosa', fx: { tiempo: -6, calidad: -3, confianza: 3 }, rel: { fernando: 1 }, flags: ['terna_nueva'], cartera: { vendedores: 'Terna nueva prometida para esta semana' },
          out: 'Fernando queda feliz. Tú, con un proceso que empieza de cero, sin saber qué buscar, en la semana del supervisor.',
          pro: { ok: 'Complaces al cliente interno.', risk: 'Repetir la búsqueda sin entender el rechazo suele dar el mismo resultado.' },
          kusi: ['preocupado', 'Otra terna… ¿con qué criterio?'] } },
      { id: 'c', label: 'Proponerle entrevistar a Kevin junto con la terna.', si: ['favor_fernando'],
        res: { q: 'aceptable', fx: { etica: -2, tiempo: 2 }, rel: { fernando: 1 }, flags: ['kevin_terna'],
          out: 'Fernando acepta encantado. Kevin pasa a la final sin filtro, aunque «con los demás».',
          pro: { ok: 'Destrabas el proceso.', risk: 'Kevin no pasó el filtro que sí pasaron los demás.', info: 'Lo justo era que Kevin pasara el mismo filtro antes de llegar a la final.' },
          kusi: ['pensando', 'Mezclar no es lo mismo que igualar.'] } },
      { id: 'd', label: 'Explicarle que Kevin está en el filtro y pedirle criterios para la terna.', no: ['favor_fernando'],
        res: { q: 'buena', fx: { calidad: 4, etica: 3 }, flags: ['fernando_criterios'], cartera: { vendedores: 'Fernando enviará qué faltó a cada uno' },
          out: '«Ya, ya, lo justo. Te mando qué les faltó.» Fernando refunfuña, pero cumple.',
          pro: { ok: 'Mantienes una sola puerta para todos y consigues criterios.', info: 'Guarda sus criterios: serán tu guía de filtro.' },
          kusi: ['animo', 'Firme y útil.'] } },
    ],
    rules: [[BP, 'Antes de buscar otra terna, entiende por qué se rechazó la anterior.'], [BP, 'Un referido pasa el mismo filtro que los demás.']],
    mirada: {
      ve: 'Un «ninguno me convence» sin explicación es la causa más común de procesos eternos. Una profesional no lo toma como un juicio sobre su trabajo, sino como un dato incompleto. Su tarea es convertir una impresión en criterios.',
      visual: { tipo: 'embudo', titulo: 'Lo que cuesta rehacer una terna', niveles: [['Postulaciones nuevas', 60], ['Filtradas', 14], ['Entrevistadas', 6], ['Terna', 3]] },
    },
  },
  {
    id: 'p7', t: '17:30', ch: 'documento', who: null, titulo: 'La banda salarial', banner: 'assets/esc/meta.webp', show: ['calidad', 'tiempo', 'etica'],
    body: () => `<p>Para el aviso falta un dato: el sueldo. Rocío te pasa la <mark>banda salarial</mark> aprobada: <b>S/ 3,200 a S/ 3,900</b>.</p><p>Pacheco ganaba S/ 3,600 y se fue por S/ 4,200 a una minera de Moquegua. Los otros dos supervisores de la empresa ganan S/ 3,400 y S/ 3,700. <mark class="clave">¿Qué pones en el aviso?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'El rango: S/ 3,200 a S/ 3,900.',
        res: { q: 'buena', fx: { calidad: 4, tiempo: 3, etica: 2 }, flags: ['banda_publica'],
          out: 'Llegarán menos CV, pero de personas para quienes el sueldo funciona. Y te queda margen para negociar.',
          pro: { ok: 'Transparencia que filtra desde el inicio y respeta la equidad con los otros supervisores.', risk: 'Quien hoy gana más de S/ 3,900 no postulará. Es el precio de ser claros.', info: 'Pregunta a Rocío si la banda se revisó contra el mercado: Pacheco se fue por S/ 600 más.' },
          kusi: ['feliz', 'Claro como el agua.'] } },
      { id: 'b', label: '«Sueldo a tratar».',
        res: { q: 'aceptable', fx: { calidad: -2, tiempo: -3 }, flags: ['banda_oculta'],
          out: 'Llegarán más CV. Algunos pedirán S/ 5,000, y lo sabrás recién en la entrevista.',
          pro: { ok: 'Te deja flexibilidad.', risk: 'Desalinear expectativas cuesta horas de entrevistas que no llegarán a nada.', info: 'Si no puedes publicar el rango, al menos pregunta la expectativa salarial en la llamada de filtro.' },
          kusi: ['pensando', 'A tratar… ¿y si no hay trato?'] } },
      { id: 'c', label: 'Publicar S/ 3,900 fijo, el tope de la banda, para atraer a los supervisores con más experiencia y que Walter no tenga que esperar tanto.',
        res: { q: 'riesgosa', fx: { calidad: 1, etica: -4, tiempo: 2 }, flags: ['banda_tope'],
          out: 'El aviso se ve atractivo. Pero el nuevo ganaría más que los dos supervisores actuales, y te quedas sin margen para negociar.',
          pro: { ok: 'Atraes más candidatos con experiencia.', risk: 'Rompes la equidad interna: los supervisores actuales lo sabrán. Y no te queda margen si el elegido pide más.' },
          kusi: ['sorpresa', 'Los otros supervisores van a hacer cuentas…'] } },
    ],
    rules: [[LEY, 'Las empresas deben tener un cuadro de categorías y funciones, y una política salarial que no discrimine (Ley 30709).'], [BP, 'El sueldo de un ingreso debe ser coherente con el de quienes hacen el mismo trabajo.']],
    mirada: {
      ve: 'El sueldo del aviso no solo atrae candidatos: le dice algo a los que ya trabajan ahí. Una profesional mira tres cosas a la vez: el mercado, la banda aprobada y la equidad interna. Si una se rompe, el problema aparece meses después.',
      visual: { tipo: 'rango', titulo: 'Dónde cae cada sueldo (S/ mensuales)', min: 3000, max: 4400, banda: [3200, 3900], marcas: [['Supervisor A', 3400], ['Pacheco', 3600], ['Supervisor B', 3700], ['Oferta minera', 4200]] },
      normas: [{ ley: 'Ley 30709, de igualdad salarial, y su reglamento (D.S. 002-2018-TR)', dice: 'Prohíbe la discriminación salarial entre hombres y mujeres, y obliga a las empresas a tener un cuadro de categorías y funciones y una política salarial con criterios objetivos.', practica: 'Si el nuevo supervisor gana más que los actuales, necesitas un criterio objetivo para justificarlo, como experiencia o resultados.' }],
    },
  },
  {
    id: 'p8a', t: '18:44', ch: 'whatsapp', who: null, titulo: 'Rocío pregunta', banner: 'assets/esc/alarma.webp', si: 'filtro_sexo', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Recoges tus cosas cuando vibra el celular. Es Rocío.</p>`,
    chat: ['Walter me dijo que acordaron buscar «varón». ¿Es así? Hablemos mañana a primera hora.'],
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Contarle la verdad hoy.',
        res: { q: 'buena', fx: { etica: 6, confianza: 2 }, rel: { rocio: 1 }, flags: ['correccion_rocio'], envia: ['rocio', 'Rocío, te soy sincera: cedí con Walter para no chocar y no está bien. Mañana lo corregimos juntas, ¿sí?'],
          out: 'Le escribes que cediste para no chocar con Walter y que no está bien. Rocío responde: «Gracias por decírmelo. Mañana lo arreglamos juntas».',
          pro: { ok: 'Corregir pronto es lo que separa un error de un problema.', info: 'Lleva mañana una propuesta: las competencias que traducen lo que Walter quería.' },
          kusi: ['animo', 'Decirlo cuesta. Callarlo cuesta más.'] } },
      { id: 'b', label: 'Responderle que fue una idea de Walter, que tú solo la anotaste para no contradecirlo delante de su gente, y que mañana le explicas mejor.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -3 }, rel: { rocio: -1 }, envia: ['rocio', 'Fue idea de Walter, yo solo lo anoté para no contradecirlo. Mañana te explico mejor.'],
          out: 'Rocío contesta con un «ok». Sabe que no es toda la historia.',
          pro: { ok: 'Ganas tiempo.', risk: 'Echarle la culpa al jefe erosiona la confianza de tu propia jefa.' },
          kusi: ['triste', 'Rocío no se lo cree del todo.'] } },
    ],
    rules: [[BP, 'Si te equivocaste en algo que tiene riesgo legal, avisa a tu jefa antes de que se entere por otro lado.']],
    mirada: {
      ve: 'Lo que pesa ahora no es el error de la mañana, sino lo que haces cuando te preguntan por él. Una jefa puede trabajar con una analista que se equivoca; no con una que esconde.',
      visual: { tipo: 'balanza', a: { t: 'Esperar a mañana', items: ['Tienes tiempo de pensar'] }, b: { t: 'Decirlo hoy', items: ['Rocío lo sabe por ti', 'Hay tiempo de corregir el aviso', 'Tu credibilidad se fortalece'] } },
    },
  },
  {
    id: 'p8b', t: '18:45', ch: 'whatsapp', who: null, titulo: 'Un mensaje antes de salir', banner: 'assets/foto/llamada.webp', no: 'filtro_sexo', show: ['personas', 'tiempo', 'confianza'],
    body: (n, F) => F.has('wsp_operarios')
      ? `<p>Yesenia, la postulante a operaria que te respondió ayer, te escribe sobre su entrevista de mañana.</p>${F.has('elmer_tarde') ? '<p>Recuerdas que Elmer llegó tarde esta mañana por no saber la dirección.</p>' : ''}<div class="chat" aria-label="Mensaje de WhatsApp"><p>Buenas tardes señorita 🙏 mañana es mi entrevista, ¿a qué hora era? y ¿llevo algo más aparte de mi DNI?</p></div>`
      : `<p>Antes de salir, te escribe Rocío.</p><div class="chat" aria-label="Mensaje de WhatsApp"><p>Walter me escribió: «la nueva sabe». Viniendo de él, es un premio 👏</p></div>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Enviarle la plantilla completa: hora, portón, a quién preguntar y documentos.', si: 'wsp_operarios',
        res: { q: 'buena', fx: { personas: 4, calidad: 2 }, flags: ['plantilla_uso'], envia: ['yesenia', 'Hola, Yesenia. Te confirmo tu entrevista: mañana miércoles a las 10:00 a. m. en el Parque Industrial de Tacna, portón azul de Distribuidora Pacífico Sur. Pregunta por RR.HH. y trae tu DNI. ¿Me confirmas, por favor?'], out: 'Yesenia responde: «Gracias, muy clarito 🙏». Mañana llegará al portón correcto.', kusi: ['feliz', 'La plantilla de ayer ya está trabajando por ti.'] } },
      { id: 'b', label: 'Responder solo la hora.', si: 'wsp_operarios',
        res: { q: 'aceptable', fx: { personas: 1 }, envia: ['yesenia', '10 a. m.'], out: 'Le respondes «10 a. m.». Mañana te escribirá para preguntar la dirección.', kusi: ['pensando', 'Ahorraste un minuto hoy… y otro mensaje mañana.'] } },
      { id: 'c', label: 'Agradecerle y contarle lo de don Julio.', no: 'wsp_operarios',
        res: { q: null, fx: { confianza: 2 }, rel: { rocio: 1 }, envia: ['rocio', '¡Gracias, Rocío! 😊 Por cierto, don Julio me dejó pensando en la movilidad interna. ¿Lo conversamos mañana?'], out: 'Rocío responde: «Interesante. Conversemos mañana sobre movilidad interna».', kusi: ['feliz', '¡Qué bacán!'] } },
      { id: 'd', label: 'Responder con un emoji y apagar el celular.', no: 'wsp_operarios',
        res: { q: null, fx: { tiempo: 1 }, envia: ['rocio', '🙌'], out: 'Descansas. Mañana también es día.', kusi: ['animo', 'Descansar también es parte del trabajo.'] } },
    ],
    rules: [[BP, 'Confirma siempre por escrito: hora, lugar, a quién preguntar y qué llevar.']],
    mirada: {
      ve: 'Lo que ayer fue una lección, hoy es un hábito. Pequeños detalles, como confirmar por escrito o agradecer un buen día, hacen que los candidatos y los jefes hablen bien de tu trabajo.',
      visual: { tipo: 'mensaje', titulo: 'Tu plantilla de confirmación', txt: 'Hola, Yesenia. Te confirmo tu entrevista: mañana miércoles a las 10:00 a. m. en el Parque Industrial de Tacna, portón azul de Distribuidora Pacífico Sur. Pregunta por RR.HH. y trae tu DNI. ¿Me confirmas, por favor?' },
    },
  },
];
