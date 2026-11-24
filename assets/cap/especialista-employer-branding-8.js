// Analista de Comunicación Interna y Employer Branding · Capítulo 8 · «La feria» · Semana 2, miércoles.
// Hilo de las dos semanas: lo que dices afuera debe ser verdad adentro. Hoy lo dices frente a cientos de estudiantes.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 5 (consentimiento), art. 6 (finalidad), art. 7 (proporcionalidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - Ley 26772, art. 2, modificado por la Ley 30709: discriminación en los requerimientos de personal por sexo, estado civil, edad, etc.
//   Archivo: LEY-30709.txt
// - RMV vigente: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR), según la guía del proyecto.

export const CAP = {
  n: 8, titulo: 'La feria', dia: 'Semana 2, miércoles', foto: 'assets/foto2/caminan.webp',
  lugar: 'Feria laboral de una universidad · Independencia, Lima Norte',
  inicio: '07:30', fin: '19:00', cierreHora: '18:40',
  apertura: 'Miércoles. El patio de la universidad está lleno de toldos de colores. A tu derecha, el stand de un banco competidor con una ruleta gigante y un influencer. A tu izquierda, una empresa de retail regalando tomatodos. Tu stand tiene una mesa, un banner y tres testimonios reales.', boton: 'Armar el stand',
  kusi: 'Atraer talento joven es decirle la verdad a alguien que todavía no sabe preguntar. ¡A la cancha!',
  lead: 'Armaste un stand con verdad y no con ruleta, respondiste la pregunta incómoda del sueldo y la hora, limpiaste un formulario que pedía demasiado, no prometiste ascensos imposibles y cuidaste los datos de cientos de estudiantes.',
  reflexion: 'Si fueras estudiante, ¿en qué stand te habrías detenido? ¿Y en cuál habrías dejado tu CV?',
  siguiente: { n: 9, titulo: 'El comentario', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'feria', p: 'Stand en la feria laboral', j: 'Tú · Kiara · Selección', d: 7, e: 'Hoy de 9 a 5' },
  { id: 'datos', p: 'Datos de estudiantes interesados', j: 'Tú · Selección', d: 7, e: 'Formulario QR' },
  { id: 'embajadores', p: 'Programa de embajadores', j: 'Tú', d: 7, e: 'Grupo activo' },
  { id: 'medir', p: 'Resultados de la campaña', j: 'Tú · Marco', d: 7, e: 'Viernes' },
];

export const FUTURO = {
  feria_verdad: ['En la feria contaste lo bueno y lo que falta, con sueldo y horario.', 'Los postulantes llegarán sabiendo a qué vienen. Capítulo 10.'],
  feria_vaga: ['En la feria evitaste hablar de sueldo y horario.', 'Algunos se sorprenderán al entrar.'],
  feria_datos_ok: ['El formulario de la feria pide solo lo necesario, con consentimiento claro.', 'Selección lo usará en todas las ferias.'],
  feria_datos_mal: ['El formulario pidió datos de más.', 'Alguien lo va a notar. Capítulo 9.'],
  promesa_carrera: ['Prometiste ascensos en 12 meses que no dependen de ti.', 'Algún postulante te lo recordará.'],
  datos_cuidados: ['Los datos de la feria quedaron en un solo lugar, con fecha de borrado.', 'Ningún CV quedó en un celular.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  seleccion: { n: 'Lucía Paz', sub: 'Analista de Selección', c: '#2B6CB0' },
  interesados: { n: 'Interesados · Feria', sub: 'Lista de difusión · estudiantes que aceptaron', c: '#C05621' },
};

export const WSP = [
  { chat: 'seleccion', t: '07:35', de: 'Lucía', txt: 'Llegué. El stand de al lado tiene ruleta y un influencer con 800 mil seguidores 😅 Nosotros tenemos una mesa.' },
  { chat: 'jhoselyn', t: '09:10', de: 'Jhoselyn', txt: 'Me dicen que mi foto está en un banner en una universidad 😳 ¡Mi mamá quiere ir a verla!', si: 'jhoselyn_embajadora' },
  { chat: 'equipo', t: '12:00', de: 'Kiara', txt: 'Ya van 140 registros. Y una chica me dijo que se acercó por el testimonio de la cajera: «se nota que es verdad».', si: 'testimonio_honesto' },
  { chat: 'marco', t: '15:30', de: 'Marco', txt: 'El influencer del otro banco subió 3 historias. ¿Nosotros qué tenemos? 🤔' },
  { chat: 'fiorella', t: '18:45', de: 'Fiorella', txt: 'Lucía dice que fue la mejor feria del año. No por los números: por las preguntas. 💛' },
];

export const CORREOS = [
  { t: '07:40', de: 'Lucía Paz · Selección', para: 'Comunicación Interna', asunto: 'Formulario QR para la feria', html: '<p>Te paso el formulario que usamos el año pasado para registrar estudiantes. ¿Lo revisas antes de imprimir el QR? Tenemos 20 minutos.</p>' },
  { t: '17:50', de: 'Coordinación de la feria', para: 'Banco Andino', asunto: 'Gracias por participar', html: '<p>Les compartimos que 312 estudiantes visitaron su stand según el conteo de la organización. Les recordamos que los datos que recojan son responsabilidad de cada empresa.</p>' },
];

export const QUIZ = [
  { q: 'Un estudiante pregunta cuánto ganaría un cajero y a qué hora sale. Lo mejor es…', ops: ['Decir «es competitivo» y cambiar de tema', 'Dar el rango real y contar honestamente cómo está el horario hoy', 'Inventar un sueldo alto', 'Decirle que eso se ve en la entrevista'], ok: 1, por: 'La verdad desde la feria filtra a quien no le conviene y atrae a quien sí. Y evita renuncias en el primer mes.' },
  { q: 'El formulario de la feria pide estado civil, número de hijos y foto. Eso…', ops: ['Es útil para conocer al postulante', 'Es excesivo para registrar interés y abre la puerta a la discriminación', 'Es obligatorio', 'Solo es problema si se publica'], ok: 1, por: 'Los datos deben ser adecuados y no excesivos (Ley 29733, art. 7) y no se puede discriminar por estado civil (Ley 26772, art. 2).' },
  { q: 'La casilla «Acepto el tratamiento de mis datos» viene marcada por defecto. ¿Qué haces?', ops: ['La dejas: es más rápido', 'La desmarcas: el consentimiento debe ser una decisión de la persona', 'La quitas', 'La escondes al final'], ok: 1, por: 'Para tratar datos debe mediar el consentimiento del titular (Ley 29733, art. 5). Una casilla premarcada no lo demuestra.' },
  { q: 'Al terminar la feria, Kiara tiene 40 fotos de CV en su celular. Lo correcto es…', ops: ['Dejarlas ahí por si acaso', 'Pasarlas al repositorio de Selección y borrarlas del celular', 'Subirlas a un grupo de WhatsApp', 'Imprimirlas'], ok: 1, por: 'Los datos se guardan en un solo lugar controlado, para la finalidad informada.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '08:00', ch: 'presencial', who: null, titulo: 'Una mesa frente a una ruleta', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Patio central de la feria', show: ['calidad', 'etica'],
    body: () => `<p>Abres las cajas que trajo Kiara. El presupuesto alcanzó para un banner y un poco más. Al lado, el influencer se toma selfies con la ruleta.</p><p><mark class="clave">Elige tres cosas para tu stand</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que pones en el stand.', boton: 'Armar con esto', resumen: 'Pusiste',
    cols: ['Qué', 'Para qué'],
    rows: [
      { id: 'testi', cells: ['Los tres testimonios reales en el banner, con la frase de Jhoselyn', 'Que vean gente como ellos'] },
      { id: 'rango', cells: ['Un cartel con el rango salarial de cajero y asesor, y el horario', 'Responder antes de que pregunten'] },
      { id: 'emb', cells: ['Wilson, el embajador de Ate, contando su día en vivo', 'Que hablen con alguien que lo vive'] },
      { id: 'ruleta', cells: ['Una ruleta prestada de Marketing', 'Competir con el stand de al lado'] },
      { id: 'merch', cells: ['Tomatodos con el logo a cambio del CV', 'Más registros'] },
      { id: 'video', cells: ['El video institucional del aniversario, en loop', 'Mostrar la marca'] },
    ],
    score: { testi: 3, rango: 3, emb: 3, ruleta: -1, merch: -2, video: 0 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: picks.includes('merch') ? -2 : 2 },
        flags: picks.includes('rango') ? ['feria_verdad'] : [],
        cartera: { feria: q === 'buena' ? 'Stand: testimonios, sueldo y horario a la vista, un embajador en vivo' : 'Stand con algo de ruido' },
        out: q === 'buena' ? 'A las 10, tu stand tiene menos gente que la ruleta, pero la que se acerca se queda. Wilson ya lleva veinte minutos contando cómo es un cierre de caja.' : 'Tu stand se llena por momentos, pero la gente se va con un regalo y pocas respuestas.',
        pro: { ok: 'El sueldo y el horario a la vista ahorran la pregunta incómoda y filtran desde el principio.', risk: 'Cambiar un CV por un tomatodo atrae a quien quiere el tomatodo.', info: 'Cuenta cuántos se quedan más de cinco minutos: eso vale más que el tráfico.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Menos gente, mejores conversaciones. ¡Bacán!' : '¿Vienen por el banco o por el regalo?'],
      };
    },
    rules: [[BP, 'En una feria, mostrar sueldo y horario reales es la mejor forma de atraer a quien de verdad encaja.']],
    mirada: {
      ve: 'Las ferias laborales premian el ruido: ruletas, regalos, influencers. Pero lo que un estudiante necesita para decidir es otra cosa: saber cuánto ganaría, a qué hora saldría y cómo es un día de verdad. Dar eso es tu ventaja frente a la ruleta.',
      visual: { tipo: 'matriz', x: 'Atrae gente', y: 'Atrae a la gente correcta', cuadrantes: ['Pocos y correctos', 'Muchos y correctos', 'Pocos y al azar', 'Muchos y al azar'], items: [['Testimonios reales', .45, .85], ['Sueldo y horario visibles', .4, .9], ['Embajador en vivo', .55, .8], ['Ruleta', .9, .2], ['Tomatodo por CV', .85, .1]] },
    },
  },
  {
    id: 'h2', t: '08:30', ch: 'documento', who: null, titulo: 'El formulario del QR', banner: 'assets/foto/revisa.webp', show: ['cumplimiento', 'etica'],
    body: () => `<p>Lucía te pasa el formulario de registro que se abrirá con el código QR. Faltan veinte minutos para imprimirlo.</p><p>Es el mismo del año pasado. <mark class="clave">Algunos campos no deberían estar</mark>.</p>`,
    type: 'flag', prompt: 'Marca los campos o textos que son un riesgo o una mala práctica.',
    doc: { t: 'Registro de interesados · Banco Andino', sub: 'Formulario para el QR de la feria' },
    lines: [
      { id: 'nombre', t: 'Nombre, correo, celular y carrera.' },
      { id: 'civil', t: 'Estado civil y número de hijos.', bad: LEY, why: 'Innecesario para registrar interés (Ley 29733, art. 7) y es la puerta a discriminar por estado civil (Ley 26772, art. 2).' },
      { id: 'foto', t: 'Sube una foto de cuerpo entero.', bad: LEY, why: 'No sirve para la finalidad y abre la puerta a decidir por apariencia.' },
      { id: 'casilla', t: 'Casilla «Acepto el tratamiento de mis datos personales», marcada por defecto.', bad: LEY, why: 'Una casilla premarcada no demuestra un consentimiento del titular (Ley 29733, art. 5).' },
      { id: 'otros', t: '«Tus datos podrán ser compartidos con empresas del grupo para ofrecerte productos financieros».', bad: LEY, why: 'Usa datos de postulantes para vender productos: una finalidad distinta, mezclada en el mismo consentimiento (Ley 29733, art. 6).' },
      { id: 'fin', t: '«Usaremos tus datos solo para contactarte sobre procesos de selección del Banco Andino durante los próximos 12 meses».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Se te pasa un campo. A las 11, una estudiante de Derecho te muestra la pantalla de su celular y te pregunta, muy educada, por qué le piden eso.' : `Marcas ${hitsLey} problemas. El formulario queda en cinco campos y una casilla vacía que cada uno decide marcar. Lucía lo imprime a las 8:55.`,
      flags: missLey ? ['feria_datos_mal'] : ['feria_datos_ok'],
      fx: { cumplimiento: missLey ? -4 : 5, etica: missLey ? -2 : 3 },
      cartera: { datos: missLey ? 'Formulario con datos de más' : 'Formulario: solo lo necesario, consentimiento real' },
      pro: { ok: 'Pides lo necesario para lo que dices que harás, y nada más.', risk: 'Un formulario que pide de más deja una prueba de lo que la empresa quería saber.' },
      kusi: missLey ? ['preocupado', 'Una estudiante de Derecho… justo.'] : ['feliz', '¡Cinco campos y una casilla honesta!'],
    }),
    rules: [[LEY, 'Los datos deben ser adecuados, relevantes y no excesivos para su finalidad (Ley 29733, art. 7).'], [LEY, 'Para tratar datos debe mediar el consentimiento del titular (Ley 29733, art. 5).']],
    mirada: {
      ve: 'Un formulario es una lista de lo que una empresa quiere saber de ti. Si pide estado civil, hijos y foto para «registrar tu interés», está diciendo algo que no debería. Recortarlo no es burocracia: es la marca empleadora en su versión más concreta.',
      visual: { tipo: 'cambio', titulo: 'El formulario, antes y después', pares: [['Estado civil, hijos, foto', 'Nombre, correo, celular, carrera'], ['Casilla premarcada', 'Casilla que cada uno decide'], ['Datos para vender productos', 'Solo selección, por 12 meses']] },
      normas: [{ ley: 'Ley 29733, art. 7', dice: 'Todo tratamiento de datos personales debe ser adecuado, relevante y no excesivo a la finalidad para la que estos hubiesen sido recopilados.', practica: 'Para avisarle a alguien de un proceso de selección basta su nombre, su contacto y su carrera.' }],
    },
  },
  {
    id: 'h3', t: '11:00', ch: 'presencial', who: null, titulo: 'La pregunta de Brenda', banner: 'assets/foto/entrevista.webp', lugar: 'Stand del Banco Andino', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Brenda, estudiante de Administración de 22 años, de Carabayllo, lee el banner con calma. ${F.has('feria_verdad') ? 'Mira el cartel del sueldo y luego te mira a ti.' : 'Luego te mira a ti.'}</p><p>«Una pregunta, pero en serio: ¿cuánto gana un cajero y <mark class="clave">a qué hora sale de verdad</mark>? Porque yo estudio de noche.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Darle el rango real y contarle la verdad del horario: en muchas agencias el cierre todavía se alarga, el banco lo está corrigiendo y ya hay agencias donde mejoró. Que lo pregunte en su entrevista para la agencia que le toque.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, personas: 2 }, flags: ['feria_verdad'],
          out: 'Brenda asiente despacio. «Nadie me había dicho eso en ningún stand.» Se registra. Y le cuenta a una amiga que se había quedado en la ruleta.',
          pro: { ok: 'Le das información para decidir, no solo para postular.', risk: 'Puede que decida no postular. Y está bien.', info: 'Lo que dijiste hoy es lo mismo que dice el testimonio de Jhoselyn: coherencia.' },
          kusi: ['celebra', '¡La verdad también atrae!'] } },
      { id: 'b', label: 'Decirle que el sueldo es competitivo y que el horario depende de la agencia: eso lo verá en su entrevista.',
        res: { q: 'aceptable', fx: { confianza: -1 }, flags: ['feria_vaga'],
          out: 'Brenda dice «ah, ya» y se va al stand del retail. Escuchas que le pregunta lo mismo a ellos.',
          pro: { ok: 'No mientes.', risk: '«Competitivo» y «depende» son palabras que los jóvenes ya aprendieron a traducir como «no te va a gustar».' },
          kusi: ['pensando', 'Se fue a preguntar a otro lado.'] } },
      { id: 'c', label: 'Decirle que los cajeros salen a las 6 y que con su horario de estudio no tendría ningún problema.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -2 },
          out: 'Brenda se registra feliz. Wilson, el embajador, te mira de reojo: él salió a las 7:30 ayer.',
          pro: { ok: 'Ganas una postulante.', risk: 'Una promesa falsa en la feria es una renuncia en el primer mes y una reseña de una estrella.' },
          kusi: ['indignado', '¡Esa es la reseña del próximo año!'] } },
    ],
    rules: [[BP, 'Responde la pregunta del sueldo y del horario con datos reales: eso filtra y atrae a la vez.']],
    mirada: {
      ve: 'Hace dos semanas leíste reseñas que decían «nunca salgo a mi hora». Muchas las escribieron personas a quienes, en algún momento, alguien les dijo que sí saldrían. La marca empleadora empieza en respuestas como la que acabas de dar.',
      visual: { tipo: 'balanza', a: { t: 'Promesa bonita', items: ['Un registro más', 'Renuncia al mes', 'Reseña de una estrella'] }, b: { t: 'Verdad con contexto', items: ['Brenda decide informada', 'Llega sabiendo qué preguntar', 'Confía en el banco'] } },
    },
  },
  {
    id: 'h4', t: '13:30', ch: 'presencial', who: 'gerente', titulo: 'La visita de Marco', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Entre el stand y la ruleta', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Marco llega con lentes de sol y mira la ruleta del otro banco con envidia. «Ellos prometen "de practicante a analista en 12 meses". <mark class="clave">Pongamos algo así en un cartel</mark>, ya mismo. Kiara puede imprimirlo en la esquina.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un dato verdadero en vez de una promesa: «El año pasado, 86 cajeros ascendieron a asesores». Lo pides a Analítica por WhatsApp y Kiara lo imprime.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3 }, rel: { gerente: 1 },
          out: 'Analítica responde en diez minutos. El cartel nuevo dice «86 ascensos internos en 2025». Marco lo fotografía: «Esto sí lo puedo poner en LinkedIn».',
          pro: { ok: 'Un dato comprobable compite mejor que una promesa.', info: 'Los ascensos internos son el mejor argumento de una marca empleadora: prueban que hay camino.' },
          kusi: ['feliz', '¡86 ascensos de verdad le ganan a una promesa!'] } },
      { id: 'b', label: 'Hacer el cartel «De cajero a asesor en 12 meses»: hay casos que lo lograron.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -1 }, rel: { gerente: 1 }, flags: ['promesa_carrera'],
          out: 'El cartel atrae gente. Una chica pregunta: «¿Entonces es seguro?». Tienes que decirle que no, que depende. El cartel ya está impreso.',
          pro: { ok: 'Compites con el otro banco.', risk: 'Convertir algunos casos en una promesa general es publicidad que no se puede cumplir.' },
          kusi: ['preocupado', '«Hay casos» no es «a todos».'] } },
      { id: 'c', label: 'Decirle que no, que no vas a competir con promesas, y seguir con lo que tienes.',
        res: { q: 'aceptable', fx: { etica: 2 }, rel: { gerente: -1 },
          out: 'Marco se va molesto: «Siempre "no" contigo». Tienes razón en el fondo, pero perdiste la oportunidad de darle algo mejor.',
          pro: { ok: 'No prometes lo que no se cumple.', risk: 'Un «no» sin alternativa desgasta la relación con alguien que necesitas.' },
          kusi: ['pensando', 'Tenías un dato mejor que su promesa.'] } },
    ],
    rules: [[BP, 'En lugar de promesas, datos comprobables: ascensos reales, formación real, plazos reales.']],
    mirada: {
      ve: 'Marco aprendió algo esta semana y tú también: a él le sirve tener algo para mostrar, y tú puedes darle algo verdadero para mostrar. Un dato de ascensos internos es más fuerte que una promesa, porque nadie lo puede desmentir.',
      visual: { tipo: 'cambio', titulo: 'De la promesa al dato', pares: [['«De cajero a asesor en 12 meses»', '86 ascensos internos en 2025'], ['Algunos casos', 'El dato completo'], ['Cartel que hay que matizar', 'Cartel que se puede defender']] },
    },
  },
  {
    id: 'h5', t: '16:30', ch: 'whatsapp', who: null, titulo: 'El mensaje a los interesados', banner: 'assets/foto2/callcenter.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>La feria termina. 214 estudiantes se registraron y 180 marcaron, ellos mismos, que aceptan recibir mensajes por WhatsApp.</p><p>Les escribes una sola vez, hoy. <mark class="clave">Lo que digas define si te bloquean o te esperan</mark>.</p>`,
    type: 'compose', enviaA: 'interesados', para: 'Para: Interesados · Feria (180 estudiantes que aceptaron)', boton: 'Enviar',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Agradecer', ops: [
        { id: 'g1', t: '¡Gracias por pasar por el stand del Banco Andino hoy! 🙌', ok: true, por: 'Breve y cálido.' },
        { id: 'g2', t: '¡Felicitaciones! Has sido preseleccionado por el Banco Andino.', ok: false, por: 'Falso: nadie fue preseleccionado.' },
      ] },
      { id: 'sig', t: 'Qué sigue', ops: [
        { id: 's1', t: 'En diciembre abrimos convocatoria para cajeros y asesores en Lima Norte. Te avisaremos por aquí con el sueldo, el horario y cómo postular.', ok: true, por: 'Concreto y coherente con lo que dijiste.' },
        { id: 's2', t: 'Pronto te contactaremos.', ok: false, por: 'Vago y probablemente falso para la mayoría.' },
      ] },
      { id: 'salir', t: 'Cómo salir', ops: [
        { id: 'x1', t: 'Si ya no quieres recibir mensajes, responde «BAJA» y te sacamos de la lista.', ok: true, por: 'El consentimiento se puede retirar, y se lo dices.' },
        { id: 'x2', t: '¡Comparte este mensaje con tus amigos!', ok: null, por: 'No es grave, pero no les dices cómo salir.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 's1', 'x1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.gracias === 'g2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, cumplimiento: sel.salir === 'x1' ? 3 : 0, etica: q === 'riesgosa' ? -4 : 1 },
        out: q === 'buena' ? 'En una hora, dos personas responden «BAJA» y treinta responden con un emoji. Brenda escribe: «Gracias, aquí espero».' : q === 'riesgosa' ? 'Recibes 40 respuestas emocionadas: «¿Cuándo es mi entrevista?». Ahora tienes que explicarles que no había ninguna preselección.' : 'El mensaje llega. Algunos preguntan cuándo exactamente.',
        pro: { ok: 'Agradeces, dices qué sigue y cómo salir.', risk: 'Una falsa preselección es una promesa rota a 180 personas a la vez.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«Aquí espero». ¡Eso es confianza!' : 'Ojo con lo que prometes en masa.'],
      };
    },
    rules: [[LEY, 'Solo se escribe a quien dio su consentimiento, y se le dice cómo retirarlo (Ley 29733, art. 5).']],
    mirada: {
      ve: 'La feria no termina en el stand: termina en el primer mensaje. Si ese mensaje es verdadero y respetuoso, los postulantes llegan a la convocatoria de diciembre sabiendo qué esperar.',
      visual: { tipo: 'embudo', titulo: 'La feria en números', niveles: [['Visitas al stand', 312], ['Registros', 214], ['Aceptaron WhatsApp', 180], ['Esperan la convocatoria', 178]] },
    },
  },
  {
    id: 'h6', t: '17:40', ch: 'documento', who: null, titulo: 'Los datos que te llevas', banner: 'assets/esc/planilla.webp', lugar: 'Desarmando el stand', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Mientras enrollas el banner, Kiara te muestra su celular: tiene 40 fotos de CV impresos que algunos estudiantes trajeron. Lucía tiene una hoja con 30 nombres escritos a mano.</p><p><mark class="clave">Ordena qué haces con los datos</mark> antes de irte.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para cuidar los datos de la feria. Usa las flechas.', boton: 'Cerrar la feria',
    items: [
      { id: 'junta', t: 'Juntar todo (formulario, fotos y hoja) en el repositorio de Selección', por: 'Un solo lugar controlado.' },
      { id: 'borra', t: 'Borrar las fotos de CV del celular de Kiara y de la nube de su teléfono', por: 'Ningún dato en dispositivos personales.' },
      { id: 'hoja', t: 'Pasar la hoja a mano al sistema y triturar el papel', por: 'Sin copias sueltas.' },
      { id: 'plazo', t: 'Anotar la fecha de borrado: 12 meses, como dice el formulario', por: 'Se guarda solo el tiempo informado.' },
      { id: 'resp', t: 'Designar quién en Selección responde si alguien pide ver o borrar sus datos', por: 'Las personas pueden ejercer sus derechos.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['datos_cuidados'],
        cartera: { datos: q === 'riesgosa' ? 'Datos de la feria dispersos' : 'Datos de la feria en un solo lugar, con plazo' },
        out: q === 'buena' ? 'Kiara borra las fotos frente a ti y se ríe: «Me siento más liviana». Lucía guarda la regla en su manual de ferias.' : 'Ordenas lo principal, aunque algún paso queda tarde.',
        pro: { ok: 'Un solo lugar, ningún dato en celulares, un plazo y un responsable.', risk: 'Un CV en el celular de alguien es un dato fuera de control.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Feria cerrada y datos cuidados!' : 'Algún dato quedó suelto.'],
      };
    },
    rules: [[LEY, 'Los datos se usan solo para la finalidad informada y no más allá (Ley 29733, art. 6).']],
    mirada: {
      ve: 'La reputación de un empleador también se juega en lo que nadie ve: dónde terminan los CV de una feria. Y mañana vas a ver qué pasa cuando alguien siente que el banco usó lo que sabía de ella.',
      visual: { tipo: 'flujo', titulo: 'Después de la feria', pasos: ['Juntar', 'Borrar de celulares', 'Triturar papel', 'Plazo de 12 meses', 'Responsable'] },
    },
  },
];
