// Talent Acquisition Partner · Capítulo 2 · «El perfil técnico» · Semana 1, martes.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - Ley 26772 (modificada por la Ley 27270) y su Reglamento, D.S. 002-98-TR: las ofertas de empleo no pueden
//   contener requisitos discriminatorios. Ya citada en el capítulo 1.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
//   https://natlex.ilo.org/dyn/natlex2/r/natlex/fe/details?p3_isn=46908

export const CAP = {
  n: 2, titulo: 'El perfil técnico', dia: 'Semana 1, martes', foto: 'assets/foto2/tablet-equipo.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Llegas en el Metropolitano con la mochila apretada contra el pecho y una pregunta que no te dejó dormir: ¿qué es, exactamente, un backend senior? Hoy Renzo te lo explica en 30 minutos. Ni uno más.', boton: 'Subir al piso 9',
  kusi: 'No necesitas programar. Necesitas entender lo suficiente para no buscar a ciegas. ¡Dale!',
  lead: 'Limpiaste un aviso viejo, le sacaste a Renzo lo que de verdad importa, tradujiste el perfil, discutiste con Leonardo sobre títulos y ordenaste un proceso que responde rápido.',
  reflexion: '¿Cuántos requisitos de un aviso son de verdad imprescindibles?',
  siguiente: { n: 3, titulo: 'Buscar sin aviso', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '0 de 12 ofertas' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Leonardo · Tecnología', d: 0, e: 'Backend en revisión' },
  { id: 'aviso', p: 'Aviso de backend senior', j: 'Talent', d: 0, e: 'Versión 2024' },
  { id: 'proceso', p: 'Etapas del proceso', j: 'Talent · Tecnología', d: 0, e: 'Sin tiempos definidos' },
  { id: 'bandas', p: 'Bandas salariales', j: 'Compensaciones', d: 0, e: 'Rocío las revisa' },
];

export const FUTURO = {
  aviso_limpio: ['Tu aviso de backend pide lo que el trabajo necesita, con rango y modalidad.', 'Mañana lo usarás para escribir mensajes de búsqueda.'],
  aviso_sesgado: ['El aviso salió con requisitos que no debía tener.', 'Alguien lo va a notar en el capítulo 3.'],
  perfil_traducido: ['Tienes el perfil traducido: imprescindibles, deseables y lo que no importa.', 'Leonardo lo firmó.'],
  titulo_flexible: ['El título universitario quedó como deseable, no como filtro.', 'Abre la puerta a gente de institutos y bootcamps.'],
  titulo_obligatorio: ['El título universitario quedó como requisito excluyente.', 'Renzo, que estudió en un instituto, lo leyó.'],
  proceso_48h: ['El proceso tiene cuatro etapas y respuesta en 48 horas.', 'La prueba técnica sigue siendo un problema. Capítulo 4.'],
  renzo_aliado: ['Renzo siente que lo escuchaste.', 'Te ayudará a revisar la prueba técnica.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  rocio: { n: 'Rocío Paredes', sub: 'Analista de Compensaciones', c: '#C05621' },
};

export const WSP = [
  { chat: 'talent', t: '08:25', de: 'Valeria', txt: 'El comité aprobó revisar bandas 🙌 gracias a tu correo de ayer.', si: 'plazo_honesto' },
  { chat: 'talent', t: '08:25', de: 'Valeria', txt: 'Gerencia ya anunció «12 en dos semanas» al cliente. No pressure 😬', si: 'plazo_optimista' },
  { chat: 'rocio', t: '09:10', de: 'Rocío', txt: 'Te adelanto: la banda de backend senior está casi 20 % por debajo de lo que vi en tres encuestas salariales. El viernes te doy la nueva.' },
  { chat: 'renzo', t: '09:55', de: 'Renzo', txt: 'Bajo en 5. Traigo café de la máquina, no esperes que sea bueno ☕' },
  { chat: 'leonardo', t: '16:30', de: 'Leonardo', txt: 'Leí el perfil. Ok. Más claro que el del año pasado, lo reconozco.', si: 'perfil_traducido' },
  { chat: 'renzo', t: '18:20', de: 'Renzo', txt: 'El jueves revisamos la prueba técnica. Te aviso: yo la hice y me da pena cambiarla 😅', si: 'renzo_aliado' },
];

export const CORREOS = [
  { t: '08:40', de: 'ATS · Código Andino', para: 'Talent Acquisition Partner', asunto: 'Aviso «Backend Senior» reactivado', html: '<p>Se reactivó el aviso «Backend Senior Developer» publicado el 14/03/2024. Revise el contenido antes de difundirlo en portales externos.</p>' },
  { t: '14:10', de: 'Valeria Núñez', para: 'Talent Acquisition Partner', asunto: 'RE: Perfil backend', html: '<p>Ojo con algo: un buen perfil no es una lista de 20 tecnologías. Si un candidato ve 20 requisitos y cumple 15, no postula. Y las mujeres, según todo lo que he leído, postulan menos todavía cuando no cumplen todo.</p><p>Menos es más.</p><p>V.</p>' },
];

export const QUIZ = [
  { q: 'En un perfil técnico, ¿qué diferencia lo imprescindible de lo deseable?', ops: ['Lo imprescindible es todo lo que el jefe pidió', 'Lo imprescindible es lo que la persona necesita para hacer el trabajo desde el inicio; lo deseable se puede aprender', 'No hay diferencia', 'Lo deseable es lo más caro'], ok: 1, por: 'Pocos imprescindibles y bien elegidos abren el embudo sin bajar la valla.' },
  { q: 'Un aviso pide «10 años de experiencia en Flutter». ¿Cuál es el problema?', ops: ['Ninguno', 'Pide más años de los que la tecnología lleva en el mercado', 'Flutter no existe', 'Debería pedir 15'], ok: 1, por: 'Flutter salió en versión estable a fines de 2018: nadie puede tener 10 años con él.' },
  { q: '«Buena presencia» en un aviso de desarrollador es…', ops: ['Un requisito razonable', 'Un requisito que no tiene relación con el puesto y puede ser discriminatorio', 'Obligatorio en San Isidro', 'Una forma de pedir experiencia'], ok: 1, por: 'La Ley 26772 prohíbe requisitos discriminatorios en las ofertas de empleo.' },
  { q: '¿Por qué conviene publicar el rango salarial en el aviso?', ops: ['Porque lo exige la ley en todos los casos', 'Porque evita procesos largos que terminan en un «no» por dinero', 'Para pagar menos', 'No conviene nunca'], ok: 1, por: 'Es una buena práctica que ahorra tiempo a candidatos y empresa.' },
  { q: 'Un backend senior, en palabras simples, es quien…', ops: ['Diseña la parte visual de la app', 'Construye y mantiene la lógica y los datos que funcionan detrás de la app, y toma decisiones de diseño', 'Solo prueba la app', 'Atiende a los clientes'], ok: 1, por: 'El backend es lo que no se ve: servicios, bases de datos e integraciones.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '08:45', ch: 'documento', who: null, titulo: 'El aviso de 2024', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>El ATS reactivó solo el aviso de backend del año pasado. Antes de publicarlo en LinkedIn, Get on Board y Computrabajo, lo lees con lupa. ${F.has('filtro_edad') ? 'Al final alguien agregó, con otra letra, lo que Leonardo te pidió ayer.' : 'Lo escribió alguien que ya no trabaja aquí.'}</p><p><mark class="clave">Hay líneas que no deberían salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que es ilegal o lo que conviene corregir en el aviso.',
    doc: { t: 'Backend Senior Developer · Código Andino', sub: 'Aviso publicado el 14/03/2024 · reactivado hoy' },
    lines: [
      { id: 'mision', t: 'Diseñarás y mantendrás servicios que procesan pagos de miles de comercios.' },
      { id: 'edad', t: 'Edad: entre 23 y 30 años.', bad: LEY, why: 'La edad no tiene relación con el puesto: es un requisito discriminatorio en una oferta de empleo.' },
      { id: 'presencia', t: 'Buena presencia.', bad: LEY, why: 'Nada en el trabajo de un backend depende de su apariencia. Es un requisito discriminatorio.' },
      { id: 'flutter', t: 'Mínimo 10 años de experiencia en Flutter.', bad: BP, why: 'Es un perfil de backend y, además, Flutter no lleva diez años en el mercado. Espanta a quien sí sabe.' },
      { id: 'stack', t: 'Experiencia construyendo APIs en Java o Node.js y trabajando con bases de datos relacionales.' },
      { id: 'disp', t: 'Disponibilidad 24/7 y para trabajar fines de semana sin restricción.', bad: BP, why: 'Promete un trabajo sin límites de jornada. Si hay guardias, se explican con horario y pago.' },
      { id: 'sueldo', t: 'Sueldo: muy competitivo.', bad: BP, why: 'No dice nada. Un rango ahorra semanas de procesos que terminan en «no» por dinero.' },
      { id: 'modal', t: 'Modalidad: híbrida, dos días a la semana en San Isidro.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -6 : 5, etica: missLey ? -3 : 3, calidad: hitsBp >= 2 ? 3 : 0 },
      flags: [missLey ? 'aviso_sesgado' : 'aviso_limpio'], cartera: { aviso: missLey ? 'Publicado con requisitos discriminatorios' : 'Aviso limpio: rango, modalidad y misión' },
      out: missLey ? 'El aviso sale a tres portales con la edad y la «buena presencia» intactas. En una hora tiene 60 postulaciones… y un comentario en LinkedIn que dice: «¿En 2026 todavía piden edad?».' : 'Borras la edad y la «buena presencia», cambias Flutter por lo que de verdad usa el equipo y le pides a Rocío el rango para ponerlo. El aviso queda más corto y mucho más claro.',
      pro: { ok: 'Un aviso limpio atrae a más gente que sí puede hacer el trabajo.', risk: 'Un requisito discriminatorio publicado es una prueba escrita, a la vista de todos.', info: 'Revisa todos los avisos que el ATS reactiva solo.' },
      kusi: missLey ? ['indignado', '¡Ese aviso discrimina en público!'] : ['celebra', 'Aviso limpio. ¡Qué bacán!'],
    }),
    rules: [[LEY, 'Las ofertas de empleo no pueden contener requisitos discriminatorios (Ley 26772).'], [BP, 'Pide solo lo que el trabajo necesita y di cuánto paga y dónde se trabaja.']],
    mirada: {
      ve: 'Un aviso es la primera conversación con un candidato. Los requisitos que no tienen relación con el trabajo, como la edad o la apariencia, no solo son ilegales: también le dicen al candidato qué tipo de empresa eres.',
      visual: { tipo: 'cambio', titulo: 'El aviso, antes y después', pares: [['Entre 23 y 30 años', '(se elimina)'], ['Buena presencia', '(se elimina)'], ['10 años en Flutter', 'APIs en Java o Node.js en producción'], ['Sueldo muy competitivo', 'Rango salarial publicado']] },
      normas: [{ ley: 'Ley 26772, modificada por la Ley 27270', dice: 'Las ofertas de empleo no pueden contener requisitos que constituyan discriminación o anulen la igualdad de oportunidades o de trato.', practica: 'Edad y apariencia fuera del aviso, y fuera de cualquier filtro del ATS.' }],
    },
  },
  {
    id: 'b2', t: '10:00', ch: 'presencial', who: null, titulo: 'Treinta minutos con Renzo', banner: 'assets/foto/mentora.webp', lugar: 'Cocina del piso 9', show: ['calidad', 'confianza'],
    body: () => `<p>Renzo Huanca llega con dos vasos de café de máquina y unas ojeras que hablan solas. Es de Huancayo, tiene 34 años y es tech lead de backend desde hace dos. Dibuja cajitas en una servilleta.</p><p>«Te explico en simple: el frontend es lo que ves; <mark class="clave">el backend es todo lo que pasa cuando aprietas “pagar”</mark>. ¿Qué quieres saber?»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Renzo.',
    opts: [
      { id: 'senior', label: '¿Qué hace que alguien sea senior, más allá de los años?', info: '«Que ya rompió producción y aprendió. Que sabe decir “esto no escala” antes de que pase. Que ayuda a los juniors sin hacerlos sentir tontos. Hay gente con 8 años que no es senior, y gente con 4 que sí.»' },
      { id: 'filtro', label: '¿Qué es lo primero que miras en un CV?', info: '«Que haya mantenido algo en producción con usuarios reales. Si solo hizo proyectos de curso, no es senior. El nombre de la universidad no lo miro: yo estudié en un instituto en Huancayo.»' },
      { id: 'dia', label: '¿Cómo es un día del equipo que vamos a armar?', info: '«Daily a las 9:30 con Bogotá, que tiene la misma hora que nosotros. Revisión de código, mucho trabajo con la base de datos y guardias rotativas una semana al mes. Eso hay que contarlo desde el principio.»' },
      { id: 'tec', label: '¿Qué tecnologías son imprescindibles?', info: '«Java o Node, bases de datos relacionales y saber hacer pruebas. Lo demás se aprende. Kafka, Kubernetes, lo que sea: si es bueno, lo aprende en un mes.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('senior') || picks.includes('tec') ? 3 : 1, confianza: 1 },
      flags: picks.includes('dia') || picks.includes('filtro') ? ['renzo_aliado'] : [],
      out: 'Renzo mira el reloj, se le enfría el café y se queda diez minutos más. «Nadie de RR.HH. me había preguntado esto antes.» La servilleta se queda contigo.',
      kusi: ['curioso', '¡Ahora sabes qué es un senior! No son los años.'],
    }),
    mirada: {
      ve: 'Un Talent Acquisition Partner no necesita programar, pero sí entender el trabajo lo suficiente para separar lo esencial de lo accesorio. La mejor fuente es quien hace el trabajo todos los días, no la descripción del año pasado.',
      visual: { tipo: 'flujo', titulo: 'Lo que pasa cuando aprietas «pagar»', pasos: ['App (frontend)', 'API (backend)', 'Base de datos', 'Banco o billetera', 'Confirmación'], aqui: 1 },
    },
  },
  {
    id: 'b3', t: '11:30', ch: 'documento', who: null, titulo: 'El perfil traducido', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Con la servilleta de Renzo al lado, escribes el perfil de backend senior. ${F.has('criterios_objetivos') ? 'Ayer le prometiste a Leonardo traducir «ganas de aprender» en algo concreto. Hoy toca cumplir.' : 'Leonardo quiere verlo antes de las 4.'}</p><p>Valeria te dejó una regla: <mark class="clave">pocos imprescindibles, y que cada uno se pueda evaluar</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del perfil.', boton: 'Guardar el perfil',
    bloques: [
      { id: 'imp', t: 'Imprescindible', n: 3, ops: [
        { id: 'i1', t: 'Haber construido y mantenido APIs en Java o Node.js en producción.', ok: true, por: 'Lo primero que mira Renzo.' },
        { id: 'i2', t: 'Trabajar con bases de datos relacionales y escribir pruebas.', ok: true },
        { id: 'i3', t: 'Haber resuelto al menos un incidente en producción y contar qué aprendió.', ok: true, por: 'Así se mide la experiencia real, no los años.' },
        { id: 'i4', t: 'Dominar Kafka, Kubernetes, Redis, GraphQL y AWS.', ok: false, por: 'Renzo dijo que eso se aprende en un mes.' },
      ] },
      { id: 'des', t: 'Deseable', n: 2, ops: [
        { id: 'd1', t: 'Experiencia en pagos o banca.', ok: true },
        { id: 'd2', t: 'Haber acompañado a desarrolladores junior.', ok: true },
        { id: 'd3', t: 'Ser egresado de una universidad del top 5.', ok: false, por: 'No predice cómo programa alguien.' },
      ] },
      { id: 'cuenta', t: 'Lo que hay que contar', n: 2, ops: [
        { id: 'c1', t: 'Guardias rotativas una semana al mes, con horario y compensación.', ok: true, por: 'Si no lo cuentas, lo descubrirán en el primer mes.' },
        { id: 'c2', t: 'Daily a las 9:30 con el equipo de Bogotá.', ok: true },
        { id: 'c3', t: 'Ambiente joven y dinámico.', ok: false, por: 'Frase gastada y, además, sugiere un filtro por edad.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: q === 'riesgosa' ? [] : ['perfil_traducido'], cartera: { perfiles: q === 'riesgosa' ? 'Perfil largo y confuso' : 'Backend senior traducido y claro' },
        out: q === 'buena' ? 'El perfil cabe en media página. Renzo lo lee y te escribe: «Yo postularía a esto».' : q === 'aceptable' ? 'El perfil está bien, pero hay cosas que sobran. Renzo marca dos con amarillo.' : 'El perfil pide tanto que ni Renzo cumpliría todo.',
        pro: { ok: 'Un perfil con pocos imprescindibles medibles ensancha el embudo sin bajar la valla.', risk: 'Cada requisito de más deja fuera a gente que habría hecho bien el trabajo.', info: 'Haz lo mismo para DevOps: es el perfil más escaso.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Media página! Qué divino.' : 'Menos es más.'],
      };
    },
    mirada: {
      ve: 'Traducir un perfil técnico es separar tres cosas: lo que la persona necesita desde el primer día, lo que puede aprender y lo que debe saber antes de aceptar (guardias, horarios). Lo último es honestidad, y evita renuncias tempranas.',
      visual: { tipo: 'balanza', a: { t: 'Perfil de 20 requisitos', items: ['Parece exigente', 'Pocos postulan', 'Las mujeres postulan aún menos'] }, b: { t: 'Perfil de 3 imprescindibles', items: ['Se puede evaluar', 'Más candidatos que sí sirven', 'La valla sigue alta'] } },
    },
  },
  {
    id: 'b4', t: '13:40', ch: 'llamada', who: 'cto', titulo: 'El título', banner: 'assets/foto/llamada.webp', show: ['etica', 'confianza', 'calidad'],
    body: (n, F) => `<p>Leonardo te llama mientras camina por el Óvalo Gutiérrez. Se escucha el tráfico. ${F.has('perfil_traducido') ? 'Leyó el perfil.' : 'Leyó el borrador.'}</p><p>«Está bien, pero falta lo básico: <mark class="clave">título universitario como requisito</mark>. No quiero gente de bootcamps de tres meses. Cóndor Pay nos va a auditar y quiero CV que se vean serios.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer el título como deseable y evaluar a todos con la misma prueba: si un egresado de instituto o de bootcamp la pasa, sabe.',
        res: { q: 'buena', fx: { calidad: 3, etica: 3, confianza: -1 }, rel: { cto: 0 }, flags: ['titulo_flexible'], cartera: { perfiles: 'Título deseable; prueba igual para todos' },
          out: '«¿Y si Cóndor Pay pregunta?» Le recuerdas que su mejor tech lead estudió en un instituto. Silencio. «Ok. Pero la prueba no se negocia.»',
          pro: { ok: 'No bajas la valla: cambias un indicador indirecto por uno directo.', risk: 'Si el cliente pide títulos por contrato, tendrás que revisarlo.', info: 'Pregunta a Valeria si el contrato con Cóndor Pay exige algún requisito formal.' },
          kusi: ['animo', '¡La prueba dice más que el cartón!'] } },
      { id: 'b', label: 'Ponerlo como requisito excluyente: es razonable que una empresa pida título y el CTO tiene argumentos.',
        res: { q: 'aceptable', fx: { calidad: -2, tiempo: -2 }, rel: { cto: 1 }, flags: ['titulo_obligatorio'],
          out: 'Leonardo cuelga satisfecho. El filtro deja fuera a un tercio de los candidatos de Get on Board. Y Renzo, cuando ve el perfil publicado, no dice nada.',
          pro: { ok: 'Pedir formación no es ilegal y el CTO queda tranquilo.', risk: 'En tecnología, mucha gente buena aprendió en institutos, bootcamps o sola. El embudo se achica justo donde menos sobra.' },
          kusi: ['pensando', 'Legal sí… ¿pero necesario?'] } },
      { id: 'c', label: 'Decirle que sí y no ponerlo: total, nadie revisa el perfil una vez publicado.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -3 }, rel: { cto: -1 },
          out: 'El jueves Leonardo ve el aviso publicado. «¿No habíamos quedado en otra cosa?» Ahora el problema no es el título: es que no cumples lo que dices.',
          pro: { ok: 'Evitas una discusión hoy.', risk: 'Decir que sí y hacer otra cosa destruye la confianza del hiring manager.' },
          kusi: ['preocupado', 'Eso se iba a notar…'] } },
    ],
    rules: [[BP, 'Un requisito formal solo se vuelve excluyente si el trabajo o un contrato lo exige.']],
    mirada: {
      ve: 'Pedir título universitario no es ilegal, pero en tecnología es un filtro que deja fuera a mucha gente capaz. La pregunta útil no es «¿qué estudió?» sino «¿cómo sabemos que puede hacer el trabajo?». La prueba técnica responde eso mejor.',
      visual: { tipo: 'embudo', titulo: 'Postulantes en Get on Board', niveles: [['Postularon', 90], ['Cumplen imprescindibles', 34], ['Con título universitario', 22]] },
    },
  },
  {
    id: 'b5', t: '15:30', ch: 'sistema', who: null, titulo: 'Las etapas del proceso', banner: 'assets/esc/escalera.webp', lugar: 'ATS · configuración de la vacante', show: ['tiempo', 'calidad'],
    body: () => `<p>En el ATS tienes que configurar las etapas de la vacante. Valeria te recordó que el año pasado <mark class="clave">perdieron candidatos por tardar tres semanas en responder</mark>.</p><p>Ordenas las etapas como deberían ir.</p>`,
    type: 'secuencia', prompt: 'Ordena las etapas del proceso. Usa las flechas.', boton: 'Guardar las etapas',
    items: [
      { id: 'filtro', t: 'Revisión del CV contra los imprescindibles (respuesta en 48 horas)', por: 'Nadie espera una semana para saber si sigue.' },
      { id: 'conv', t: 'Conversación de 30 minutos con Talent: expectativas, rango y modalidad', por: 'Si no hay acuerdo en lo básico, no tiene sentido seguir.' },
      { id: 'prueba', t: 'Prueba técnica', por: 'Después de saber que hay interés mutuo.' },
      { id: 'tecnica', t: 'Entrevista técnica con Renzo y otra persona del equipo', por: 'Dos evaluadores reducen el sesgo de uno.' },
      { id: 'cto', t: 'Conversación final con Leonardo', por: 'El cierre con el hiring manager.' },
      { id: 'oferta', t: 'Oferta por escrito en 48 horas', por: 'Los buenos tienen otras propuestas esperando.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 1 },
        flags: q === 'riesgosa' ? [] : ['proceso_48h'], cartera: { proceso: q === 'riesgosa' ? 'Etapas desordenadas' : 'Seis etapas, respuestas en 48 horas' },
        out: q === 'buena' ? 'El ATS muestra seis columnas limpias. Valeria comenta: «Ahora solo falta que la prueba técnica no dure una eternidad». Lo anotas para el jueves.' : 'Valeria mueve un par de etapas: «Ojo: primero sabemos si hay acuerdo en sueldo y luego pedimos la prueba. Si no, le haces perder un sábado a alguien».',
        pro: { ok: 'Un orden lógico y tiempos de respuesta claros evitan perder a los mejores.', risk: 'Pedir la prueba antes de hablar de dinero hace perder horas a candidatos que no van a aceptar.', info: 'Configura recordatorios automáticos en el ATS a las 48 horas.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Proceso con reloj!' : 'Casi: el orden ahorra tiempo.'],
      };
    },
    mirada: {
      ve: 'En reclutamiento técnico, la velocidad es parte de la experiencia del candidato. Un proceso bien ordenado filtra lo básico primero (expectativas, rango) y deja para después lo que más le cuesta al candidato (la prueba).',
      visual: { tipo: 'linea', titulo: 'Un proceso en dos semanas', hitos: [['Día 1-2', 'Filtro del CV'], ['Día 3', 'Conversación'], ['Día 4-6', 'Prueba técnica'], ['Día 7-8', 'Entrevista técnica'], ['Día 9', 'Leonardo'], ['Día 10', 'Oferta']] },
    },
  },
  {
    id: 'b6', t: '17:50', ch: 'whatsapp', who: null, titulo: 'Gracias, Renzo', banner: 'assets/foto2/caminan.webp', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Antes de irte, le escribes a Renzo. ${F.has('titulo_obligatorio') ? 'Sabes que vio el requisito del título en el perfil.' : 'Su servilleta sigue pegada en tu monitor.'}</p><p>El jueves vas a necesitarlo para revisar la prueba técnica, <mark class="clave">esa que él mismo diseñó</mark>.</p>`,
    type: 'compose', enviaA: 'renzo', para: 'Para: Renzo Huanca · Tech Lead Backend', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Agradecimiento', ops: [
        { id: 'g1', t: 'Renzo, gracias por los 40 minutos: el perfil salió de tu servilleta.', ok: true, por: 'Concreto: le dices qué hizo su aporte.' },
        { id: 'g2', t: 'Renzo, gracias por todo 🙏', ok: null, por: 'Amable, pero genérico.' },
      ] },
      { id: 'pedido', t: 'Lo del jueves', ops: [
        { id: 'p1', t: 'El jueves me gustaría revisar contigo la prueba técnica: quiero entender qué mide cada parte.', ok: true, por: 'Le pides ayuda sin atacar su trabajo.' },
        { id: 'p2', t: 'El jueves hay que acortar tu prueba porque nadie la termina.', ok: false, por: 'Llega como un juicio antes de conversar.' },
      ] },
      { id: 'cuidado', t: 'Algo más', ops: [
        { id: 'c1', t: 'Y si estás con mucha carga, dime un horario que te acomode.', ok: true, por: 'Reconoces que está saturado.' },
        { id: 'c2', t: 'Es prioridad de Leonardo, así que bloquéate la mañana.', ok: false, por: 'Usas la jerarquía en vez de la relación.' },
      ] },
    ],
    res: sel => {
      const buenas = ['g1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'riesgosa' ? -2 : 1, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['renzo_aliado'] : [],
        out: q === 'buena' ? 'Renzo responde con un audio: «Jueves a las 9, antes de la daily. Y gracias por preguntar, en serio». Bajas en el ascensor con la sensación de tener un aliado.' : q === 'riesgosa' ? 'Renzo responde: «Ok». Solo eso. El jueves va a llegar a la defensiva.' : 'Renzo responde con un pulgar y una hora: jueves a las 9.',
        pro: { ok: 'Pedir ayuda reconociendo el trabajo del otro abre conversaciones difíciles.', risk: 'Criticar la prueba antes de entenderla pone a su autor a la defensiva.', info: 'El jueves, lleva datos: cuántos la empezaron y cuántos la terminaron.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Aliado ganado. ¡Bacán!' : '¿Cómo lo leerá él?'],
      };
    },
    mirada: { ve: 'Los tech leads son evaluadores clave y casi siempre están saturados. Cuidar esa relación (agradecer en concreto, pedir sin atacar, respetar su tiempo) es lo que hace que el proceso avance cuando más se necesita.' },
  },
];
