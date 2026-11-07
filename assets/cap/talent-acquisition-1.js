// Talent Acquisition Partner · Capítulo 1 · «Doce en dos semanas» · Semana 1, lunes.
// Hilo de las dos semanas: Código Andino (San Isidro, Lima) debe cerrar 12 ofertas de desarrolladores para el
// proyecto con Cóndor Pay, una fintech de Bogotá (ficticia), compitiendo con empresas que pagan en dólares.
// Normas citadas:
// - Ley 26772 (modificada por la Ley 27270): las ofertas de empleo no pueden contener requisitos que constituyan
//   discriminación o anulen la igualdad de oportunidades o de trato. Reglamento: D.S. 002-98-TR.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
//   https://natlex.ilo.org/dyn/natlex2/r/natlex/fe/details?p3_isn=46908

export const CAP = {
  n: 1, titulo: 'Doce en dos semanas', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'San Isidro, lunes. La garúa todavía no se decide a irse y el piso 9 de Código Andino huele a café de máquina. En la pantalla grande de la sala dice: «Cóndor Pay · kickoff en 6 semanas». Debajo, alguien escribió con plumón: «¿y la gente?».', boton: 'Entrar al piso 9',
  kusi: 'Hoy no vas a contratar a nadie. Hoy vas a entender qué hay que contratar. ¡Que no es poco!',
  lead: 'Entendiste el negocio detrás de las 12 vacantes, frenaste un filtro que no debía estar, elegiste por dónde empezar, armaste un plan de atracción y le dijiste a Valeria la verdad sobre los plazos.',
  reflexion: '¿Qué te dice más de una vacante: el pedido del jefe o el problema que esa persona va a resolver?',
  siguiente: { n: 2, titulo: 'El perfil técnico', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '0 de 12 ofertas' },
  { id: 'perfiles', p: 'Perfiles de puesto', j: 'Leonardo · Tecnología', d: 0, e: 'Sin escribir' },
  { id: 'plan', p: 'Plan de atracción', j: 'Talent', d: 0, e: 'Por armar' },
  { id: 'bandas', p: 'Bandas salariales', j: 'Compensaciones', d: 0, e: 'Desactualizadas' },
  { id: 'pipeline', p: 'Pipeline en el ATS', j: 'Talent', d: 0, e: 'Vacío' },
];

export const FUTURO = {
  negocio_claro: ['Sabes qué necesita de verdad el proyecto de Cóndor Pay.', 'Lo usarás para escribir los perfiles mañana.'],
  criterios_objetivos: ['Cambiaste «menores de 30 de la UNI» por criterios de desempeño.', 'Leonardo todavía no está convencido. Capítulo 2.'],
  filtro_edad: ['Aceptaste filtrar por edad y universidad.', 'Ese filtro va a aparecer en el aviso. Capítulo 2.'],
  backend_primero: ['Empezaste por los perfiles más difíciles: backend senior y DevOps.', 'Ganarás días donde más cuesta.'],
  plan_medible: ['Tu plan de atracción tiene fuentes, mensaje y números.', 'Valeria lo mostrará en el comité del viernes.'],
  plan_flojo: ['Tu plan de atracción es una lista de portales.', 'Te costará saber qué funciona.'],
  plazo_honesto: ['Le dijiste a Valeria que 12 en dos semanas es de alto riesgo y por qué.', 'Ella lo llevará a gerencia.'],
  plazo_optimista: ['Prometiste las 12 ofertas en dos semanas sin matices.', 'Esa promesa volverá el viernes de la Semana 2.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  rocio: { n: 'Rocío Paredes', sub: 'Analista de Compensaciones', c: '#C05621' },
};

export const WSP = [
  { chat: 'talent', t: '08:32', de: 'Valeria', txt: 'Welcome! 🎉 Tu laptop está en el locker 14. Kickoff con Leo a las 9:30, sharp. Él no espera.' },
  { chat: 'talent', t: '08:40', de: 'Rocío', txt: 'Bienvenid@ 😊 Te aviso de una: las bandas salariales de Tecnología son de 2024. Ya sé, ya sé.' },
  { chat: 'leonardo', t: '10:15', de: 'Leonardo', txt: '¿Cuándo tengo los primeros CV? Hoy sería ideal.' },
  { chat: 'renzo', t: '12:20', de: 'Renzo', txt: 'Hola. Me dijo Leo que mañana te explico qué es un backend senior. Llevo tres meses sin tiempo ni para almorzar, así que serán 30 min 🙃' },
  { chat: 'leonardo', t: '14:05', de: 'Leonardo', txt: 'Ok. Igual piénsalo: los chicos jóvenes aprenden más rápido. Hablamos mañana.', si: 'criterios_objetivos' },
  { chat: 'leonardo', t: '14:05', de: 'Leonardo', txt: 'Perfecto. Así filtramos rápido 👌', si: 'filtro_edad' },
  { chat: 'valeria', t: '18:10', de: 'Valeria', txt: 'Gracias por no venderme humo el primer día. Lo llevo al comité.', si: 'plazo_honesto' },
];

export const CORREOS = [
  { t: '08:35', de: 'Valeria Núñez', para: 'Talent Acquisition Partner', asunto: 'Cóndor Pay · the big one', html: '<p>¡Hola! Cerramos un contrato con Cóndor Pay, una fintech de Bogotá: su nueva app de pagos para comercios. El equipo arranca en seis semanas y necesitamos 12 desarrolladores nuevos.</p><p>Como la mayoría de buenos perfiles ya trabaja y tiene que avisar su renuncia con tiempo, <b>las ofertas tienen que estar firmadas en dos semanas</b>. Competimos con empresas de afuera que pagan en dólares y contratan remoto desde Lima.</p><p>Hoy entiende el negocio. Mañana empieza la carrera.</p><p>Valeria</p>' },
  { t: '11:40', de: 'Leonardo Vega', para: 'Talent', asunto: 'Headcount Cóndor Pay', html: '<p>4 backend (Java o Node), 3 frontend (React), 2 mobile (Flutter), 1 QA automation, 1 DevOps, 1 data engineer. Buenos y ya.</p><p>L.</p>' },
];

export const QUIZ = [
  { q: 'Antes de buscar candidatos para una vacante técnica, lo primero es…', ops: ['Publicar el aviso en todos los portales', 'Entender qué problema del negocio va a resolver esa persona', 'Pedir CV a los amigos', 'Copiar el aviso de otra empresa'], ok: 1, por: 'Sin entender el proyecto, el perfil se vuelve una lista de tecnologías sin prioridad.' },
  { q: 'El CTO pide candidatos «menores de 30 y de universidades top». Según la Ley 26772…', ops: ['Es válido si lo pide el CTO', 'Las ofertas de empleo no pueden contener requisitos discriminatorios', 'Solo es un problema si se publica', 'Aplica solo al Estado'], ok: 1, por: 'La Ley 26772 prohíbe requisitos que anulen o alteren la igualdad de oportunidades o de trato en las ofertas de empleo.' },
  { q: '¿Cuál de estos es un criterio de selección objetivo para un backend senior?', ops: ['Tener menos de 30 años', 'Haber diseñado y mantenido servicios en producción con usuarios reales', 'Ser de Lima', 'Tener buena presencia'], ok: 1, por: 'Describe lo que la persona sabe hacer, no quién es.' },
  { q: 'Con 12 vacantes y poco tiempo, ¿por dónde conviene empezar?', ops: ['Por las más fáciles, para mostrar avance', 'Por las más difíciles de cubrir, porque toman más tiempo', 'Por orden alfabético', 'Por las que pida el jefe más fuerte'], ok: 1, por: 'Los perfiles escasos (senior, DevOps) marcan la ruta crítica del plazo.' },
  { q: 'Un buen plan de atracción incluye…', ops: ['Solo la lista de portales', 'Fuentes, mensaje de la empresa e indicadores para saber qué funciona', 'Un aviso con muchos emojis', 'Solo referidos'], ok: 1, por: 'Sin indicadores no sabes qué fuente te trae a quién.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '08:50', ch: 'presencial', who: 'valeria-ta', titulo: 'Diez minutos con Valeria', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala Huascarán · piso 9', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Valeria te recibe con dos cafés y la laptop abierta en un tablero de vacantes que, por ahora, solo tiene títulos. Habla rápido y mezcla idiomas sin darse cuenta.</p><p>«Qué bueno que llegaste${n ? ', ' + n : ''}. Antes del kickoff con Leo, <mark class="clave">pregúntame lo que necesites saber del negocio</mark>. Tengo diez minutos, máximo.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Lo que no preguntes hoy, lo descubrirás después.',
    opts: [
      { id: 'proyecto', label: '¿Qué va a construir el equipo para Cóndor Pay?', info: '«Una app para que pequeños comercios cobren con QR y reciban pagos al toque. Tiene que aguantar picos en las quincenas y no caerse nunca. Por eso Leo está obsesionado con el backend y con DevOps.»' },
      { id: 'perdimos', label: '¿Por qué perdimos candidatos la última vez?', info: '«Tres cosas: tardamos tres semanas en dar respuesta, la prueba técnica es eterna y las ofertas llegaban por debajo de lo que pagan las de afuera. Los buenos tienen tres propuestas a la vez.»' },
      { id: 'exito', label: '¿Qué es éxito en dos semanas?', info: '«Doce ofertas firmadas sería un milagro. Lo que de verdad importa es que los que entren se queden: el año pasado contratamos rápido y la mitad se fue antes de los seis meses.»' },
      { id: 'jefe', label: '¿Cómo trabajar con Leonardo?', info: '«Es brillante y desconfía de RR.HH. Si le hablas con datos, te escucha. Si le hablas de “cultura” sin números, te pierde en un minuto.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('perdimos') ? 2 : 0, tiempo: -1 }, rel: { 'valeria-ta': picks.includes('exito') ? 1 : 0 },
      flags: picks.includes('proyecto') ? ['negocio_claro'] : [],
      out: 'Valeria mira el reloj, se para y te pasa su café: «El tuyo se enfrió. Vamos, que Leo ya está en la sala».',
      kusi: ['curioso', 'Ya sabes por qué se fueron los de antes. Eso vale oro.'],
    }),
    mirada: {
      ve: 'Una vacante es la respuesta a un problema del negocio. Quien entiende el problema (una app de pagos que no puede caerse) sabe qué buscar y qué contar a los candidatos; quien solo recibe la lista de puestos, busca palabras clave.',
      visual: { tipo: 'flujo', titulo: 'De dónde salen las 12 vacantes', pasos: ['Contrato con Cóndor Pay', 'Equipo de 12 en 6 semanas', 'Renuncias con preaviso', 'Ofertas en 2 semanas'], aqui: 3 },
    },
  },
  {
    id: 'a2', t: '09:35', ch: 'presencial', who: 'cto', titulo: '«Buenos y ya»', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala Huascarán · piso 9', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Leonardo entra con la laptop bajo el brazo y no se sienta. Proyecta un diagrama lleno de cajitas y flechas.</p><p>«Lo simple: necesito gente que rinda desde el día uno. <mark class="clave">Menores de 30, de la UNI, la PUCP o UTEC</mark>. Que aguanten el ritmo. Los de 40 ya no quieren aprender nada nuevo. ¿Puedes filtrar así?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle cambiar edad y universidad por lo que de verdad predice el desempeño: experiencia en producción, prueba técnica y ganas de aprender, medidas igual para todos.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 1 }, rel: { cto: 0 }, flags: ['criterios_objetivos'], cartera: { perfiles: 'Criterios por desempeño, no por edad' },
          out: 'Leonardo cruza los brazos. «¿Y cómo mido “ganas de aprender”?» Le respondes que mañana, con Renzo, lo traducen en preguntas concretas. Acepta a regañadientes.',
          pro: { ok: 'Cambias un prejuicio por un criterio que se puede medir.', risk: 'Leonardo puede sentir que RR.HH. le «complica» el proceso.', info: 'Lleva datos: varios de los mejores del equipo actual tienen más de 35.' },
          kusi: ['animo', '¡Eso! Lo que haces, no los años que tienes.'] } },
      { id: 'b', label: 'Filtrar por edad y universidad sin escribirlo en el aviso: así nadie se entera y Leonardo queda contento.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -4 }, rel: { cto: 1 }, flags: ['filtro_edad'], cartera: { perfiles: 'Filtro oculto por edad y universidad' },
          out: 'Leonardo sonríe por primera vez. En el ATS creas un filtro que nadie más ve. Y descartas, sin leerlos, a 15 postulantes que ya estaban en la base.',
          pro: { ok: 'Rapidez y un CTO satisfecho.', risk: 'Esconder el filtro no lo hace legal: sigue siendo discriminación en el acceso al empleo, y deja fuera a gente con mucha experiencia.' },
          kusi: ['preocupado', 'Que no se vea no significa que no exista…'] } },
      { id: 'c', label: 'Decirle delante de todos que eso es ilegal y que no lo vas a hacer.',
        res: { q: 'aceptable', fx: { etica: 3, confianza: -3 }, rel: { cto: -1 }, flags: ['criterios_objetivos'],
          out: 'Se hace un silencio largo. Leonardo dice «ok» y pasa a la siguiente lámina. Tienes razón, pero no ganaste un aliado.',
          pro: { ok: 'Pones el límite legal con claridad.', risk: 'Sin una alternativa, el límite suena a obstáculo y Leonardo te lo cobrará.' },
          kusi: ['pensando', 'Tenías razón… ¿podías dársela de otra forma?'] } },
    ],
    rules: [[LEY, 'Las ofertas de empleo no pueden contener requisitos que anulen o alteren la igualdad de oportunidades o de trato (Ley 26772, modificada por la Ley 27270).'], [BP, 'Cada criterio de selección debe poder explicarse con el trabajo que la persona hará.']],
    mirada: {
      ve: 'La edad o la universidad son atajos que parecen eficientes, pero no predicen cómo programa alguien. En selección técnica, lo que mejor predice el desempeño es evaluar el trabajo real con el mismo criterio para todos. Además, el filtro por edad deja fuera a la gente con más años en producción.',
      visual: { tipo: 'cambio', titulo: 'Del pedido al criterio', pares: [['Menor de 30', 'Experiencia en servicios en producción'], ['De la UNI, la PUCP o UTEC', 'Prueba técnica igual para todos'], ['Que aguante el ritmo', 'Capacidad de priorizar y pedir ayuda']] },
      normas: [{ ley: 'Ley 26772, modificada por la Ley 27270 · Reglamento: D.S. 002-98-TR', dice: 'Las ofertas de empleo y el acceso a medios de formación no pueden contener requisitos que constituyan discriminación o anulen la igualdad de oportunidades o de trato.', practica: 'Un filtro por edad en el ATS es un requisito discriminatorio, aunque no se publique.' }],
    },
  },
  {
    id: 'a3', t: '11:50', ch: 'documento', who: null, titulo: '¿Por dónde empiezas?', banner: 'assets/esc/decide.webp', show: ['tiempo', 'calidad'],
    body: () => `<p>Con la lista de Leonardo en una mano y el ATS vacío en la otra, abres un Google Sheets que se llama «Pipeline_CondorPay_v1». Doce filas. No puedes abrir todo a la vez con la misma fuerza.</p><p>Revisas el mercado: <mark class="clave">no todos los perfiles cuestan lo mismo de encontrar</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes que empiezas esta semana.', boton: 'Empezar por estos', resumen: 'Empezaste por',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'back', cells: ['4 backend senior', 'Los más pedidos por las empresas de afuera. Suelen tardar más en cubrirse.'] },
      { id: 'devops', cells: ['1 DevOps', 'Hay pocos en Lima y casi todos tienen trabajo. Sin él, la app no sale.'] },
      { id: 'bandas', cells: ['Actualizar las bandas con Rocío', 'Son de 2024. Sin eso, cualquier oferta llegará tarde o baja.'] },
      { id: 'front', cells: ['3 frontend React', 'Hay más oferta de perfiles y postulan solos a los avisos.'] },
      { id: 'logo', cells: ['Rediseñar la página de empleos', 'Marketing dice que se ve «del 2015».'] },
      { id: 'qa', cells: ['1 QA automation', 'Leonardo dice que «eso puede esperar».'] },
    ],
    score: { back: 3, devops: 3, bandas: 3, front: 1, logo: -1, qa: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 0, calidad: q === 'riesgosa' ? -3 : 2 },
        flags: picks.includes('back') && picks.includes('devops') ? ['backend_primero'] : [],
        cartera: { pipeline: q === 'buena' ? 'Ruta crítica: backend, DevOps y bandas' : 'Empezaste por lo más visible', bandas: picks.includes('bandas') ? 'Rocío las revisa esta semana' : 'Desactualizadas' },
        envia: picks.includes('bandas') ? ['rocio', 'Rocío, ¿podemos revisar las bandas de backend y DevOps esta semana? Sin eso, las ofertas van a llegar tarde.'] : undefined,
        out: q === 'buena' ? 'Rocío te responde con un audio de dos minutos y un «por fin alguien me lo pide». Abres las búsquedas de backend y DevOps antes del almuerzo.' : picks.includes('logo') ? 'Marketing se pone feliz. Los backend senior siguen sin que nadie los busque.' : 'Avanzas, pero dejas para después lo que más tiempo va a tomar.',
        pro: { ok: 'Empezar por lo escaso y por lo que bloquea las ofertas protege el plazo.', risk: 'Abrir primero lo fácil da una sensación de avance que no dura.', info: 'Pregunta a Leonardo si un QA puede entrar dos semanas después sin frenar el proyecto.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ruta crítica a la vista!' : '¿Qué es lo que más tarda?'],
      };
    },
    mirada: {
      ve: 'En reclutamiento técnico no todas las vacantes pesan igual: un DevOps puede tardar mucho más que un frontend. Quien ordena por escasez y por lo que bloquea (las bandas salariales) gana días; quien ordena por lo visible, los pierde.',
      visual: { tipo: 'matriz', x: 'Dificultad para encontrar', y: 'Impacto en el proyecto', cuadrantes: ['Empieza ya', 'Planifica', 'Delega', 'Después'], items: [['Backend senior', .85, .9], ['DevOps', .95, .85], ['Bandas', .4, .9], ['Frontend', .35, .6], ['QA', .5, .4], ['Página de empleos', .2, .15]] },
    },
  },
  {
    id: 'a4', t: '13:20', ch: 'whatsapp', who: null, titulo: 'Lo que Leonardo quiere hoy', banner: 'assets/foto/cafe.webp', lugar: 'Menú del día en la calle Las Begonias', show: ['confianza', 'tiempo'],
    body: () => `<p>Estás en un menú de la calle Las Begonias, entre el ají de gallina y la gelatina, cuando vuelves a leer el mensaje de Leonardo: <mark class="clave">«¿Cuándo tengo los primeros CV? Hoy sería ideal»</mark>.</p><p>No los vas a tener hoy. Le respondes.</p>`,
    type: 'compose', enviaA: 'leonardo', para: 'Para: Leonardo Vega · CTO', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cuando', t: 'Cuándo', ops: [
        { id: 'c1', t: 'Leonardo, el jueves te mando los primeros 5 perfiles de backend ya conversados.', ok: true, por: 'Una fecha y un número concretos.' },
        { id: 'c2', t: 'Leonardo, apenas tenga algo te aviso.', ok: false, por: 'No le das ninguna fecha para planificar.' },
        { id: 'c3', t: 'Leonardo, hoy en la noche te mando 30 CV de LinkedIn.', ok: false, por: 'CV sin conversar le harán perder tiempo a él.' },
      ] },
      { id: 'pido', t: 'Qué le pides', ops: [
        { id: 'p1', t: 'Para eso necesito 30 minutos con Renzo mañana para cerrar el perfil.', ok: true, por: 'Le muestras qué depende de su equipo.' },
        { id: 'p2', t: 'Mientras tanto, revisa tú los CV del portal.', ok: false, por: 'Le devuelves el trabajo.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'k1', t: 'Te dejo el avance diario en el tablero del ATS.', ok: true, por: 'Le das visibilidad sin que tenga que preguntar.' },
        { id: 'k2', t: '¡Tranquilo, todo bajo control! 💪', ok: null, por: 'Amable, pero no le dice nada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'p1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'riesgosa' ? -2 : 1, tiempo: sel.cuando === 'c3' ? -3 : 1 }, rel: { cto: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Leonardo responde con un pulgar. Diez minutos después, Renzo te manda una invitación para mañana a las 10.' : sel.cuando === 'c3' ? 'Leonardo responde: «Ok, espero los 30». Acabas de convertir tu primer día en una noche larga.' : 'Leonardo deja el mensaje en visto. A las 4 pregunta otra vez.',
        pro: { ok: 'Fecha, condición y visibilidad: así se gestiona a un hiring manager impaciente.', risk: 'Prometer CV sin filtrar es prometer trabajo para él.', info: 'Un «hiring manager» confía cuando ve avance sin tener que pedirlo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Claro y con fecha. ¡Bacán!' : '¿Qué puede planificar él con eso?'],
      };
    },
    mirada: { ve: 'El hiring manager (el jefe que pide la vacante) es tu cliente principal. Con un CTO impaciente, lo que más calma no es la promesa de rapidez sino la previsibilidad: qué recibirá, cuándo y qué necesitas de él.' },
  },
  {
    id: 'a5', t: '15:10', ch: 'documento', who: null, titulo: 'El plan de atracción', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Valeria te pide un plan de atracción en una sola página para el comité del viernes. Lo armas en el escritorio junto a la ventana, con la Vía Expresa llenándose de autos abajo.</p><p>La regla de Valeria: <mark class="clave">«Si no se puede medir, no va en el plan»</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan.', boton: 'Guardar el plan',
    bloques: [
      { id: 'fuentes', t: 'Dónde buscar', n: 3, ops: [
        { id: 'f1', t: 'Búsqueda directa en LinkedIn de perfiles que no están postulando.', ok: true, por: 'Los mejores backend suelen tener trabajo.' },
        { id: 'f2', t: 'Comunidades técnicas y meetups de Lima.', ok: true, por: 'Ahí está quien aprende por su cuenta.' },
        { id: 'f3', t: 'Programa de referidos del equipo actual, con reglas claras.', ok: true },
        { id: 'f4', t: 'Comprar una base de datos de CV a un proveedor sin preguntar de dónde salió.', ok: false, por: 'Datos personales sin consentimiento conocido.' },
      ] },
      { id: 'mensaje', t: 'Qué contar', n: 2, ops: [
        { id: 'm1', t: 'El reto real: una app de pagos que no puede caerse.', ok: true, por: 'A un buen desarrollador le atrae el problema.' },
        { id: 'm2', t: 'Rango salarial y modalidad de trabajo desde la primera conversación.', ok: true, por: 'Ahorra tiempo a los dos.' },
        { id: 'm3', t: '«Somos como una familia».', ok: false, por: 'Frase gastada que no dice nada.' },
      ] },
      { id: 'medir', t: 'Qué medir', n: 2, ops: [
        { id: 'i1', t: 'Candidatos que avanzan, por fuente.', ok: true },
        { id: 'i2', t: 'Días desde la apertura hasta la oferta aceptada.', ok: true },
        { id: 'i3', t: 'Cantidad de likes del post de la vacante.', ok: false, por: 'Mide alcance, no contrataciones.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: [q === 'buena' ? 'plan_medible' : 'plan_flojo'], cartera: { plan: q === 'buena' ? 'Plan de una página, con indicadores' : 'Plan con huecos' },
        out: q === 'buena' ? 'Valeria lo lee en el celular entre dos reuniones: «This is it. Una página y se entiende todo».' : 'Valeria lo devuelve con un comentario: «¿Cómo vamos a saber qué funcionó?».',
        pro: { ok: 'Fuentes variadas, un mensaje honesto y números para corregir a tiempo.', risk: 'Un plan sin indicadores no te avisa cuando una fuente no sirve.', info: 'Revisa el plan cada viernes con los números de la semana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Plan en una página! Qué divino.' : 'Algunas piezas no ayudan a medir.'],
      };
    },
    rules: [[BP, 'Incluye el rango salarial desde el inicio: evita procesos largos que terminan en un «no» por dinero.']],
    mirada: {
      ve: 'Un plan de atracción responde tres preguntas: dónde está la gente que buscas, qué la haría escucharte y cómo sabrás si funciona. Para perfiles técnicos escasos, esperar que postulen no basta: hay que ir a buscarlos.',
      visual: { tipo: 'embudo', titulo: 'Lo que vas a medir', niveles: [['Contactados', 120], ['Conversaron', 40], ['Prueba técnica', 25], ['Finalistas', 18], ['Ofertas', 12]] },
    },
  },
  {
    id: 'a6', t: '17:45', ch: 'correo', who: null, titulo: '¿Llegamos?', banner: 'assets/esc/reloj.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Valeria Núñez', to: 'Talent Acquisition Partner', asunto: 'Para el comité: ¿llegamos a las 12?' },
    body: () => `<p>Gerencia me pregunta si llegamos a las 12 ofertas firmadas en dos semanas. Dime qué le respondo, <mark class="clave">con la verdad</mark>.</p><p>V.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Que es de alto riesgo, dar el porqué y proponer qué hacer.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { 'valeria-ta': 1 }, flags: ['plazo_honesto'], responde: 'Valeria: 12 en dos semanas es de alto riesgo. Frontend y mobile son viables; backend senior y DevOps son escasos y competimos con ofertas en dólares. Propongo: bandas actualizadas esta semana, prueba técnica más corta y respuesta en 48 horas. Te mando el avance cada día.',
          out: 'Valeria responde: «Eso es lo que necesitaba para pedir presupuesto». A las 6:30 bajas por el ascensor con la sensación de haber dicho algo incómodo y correcto.', kusi: ['celebra', 'La verdad con propuesta. ¡Así!'] } },
      { id: 'b', label: 'Que sí llegamos: con buena actitud todo se puede.',
        res: { q: 'riesgosa', fx: { confianza: -2 }, flags: ['plazo_optimista'], responde: 'Valeria: ¡Sí llegamos! 💪',
          out: 'Valeria se lo dice al comité tal cual. Desde hoy, «12 en dos semanas» ya no es una meta: es una promesa con tu nombre.', kusi: ['preocupado', 'Las promesas también se cobran…'] } },
      { id: 'c', label: 'Que no se puede y que mejor pidan más plazo a Cóndor Pay.',
        res: { q: 'aceptable', fx: { confianza: 0 }, flags: ['plazo_honesto'], responde: 'Valeria: no llegamos. Hay que pedir más plazo.',
          out: 'Valeria te escribe: «Ok, pero el cliente no va a mover la fecha. ¿Qué sí podemos hacer?». Mañana tendrás que traer una respuesta.', kusi: ['pensando', 'Decir que no es fácil; lo difícil es el plan B.'] } },
    ],
    mirada: { ve: 'Gestionar expectativas es parte del trabajo de un Talent Acquisition Partner. Decir «de alto riesgo» con datos y una propuesta protege a la empresa de una mala sorpresa y a ti de una promesa imposible.' },
  },
];
