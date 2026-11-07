// Analista de Clima y Cultura · Capítulo 2 · «Los comentarios» · Semana 1, martes.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales, arts. 6 y 7 (finalidad y proporcionalidad), ya citada en el capítulo 1.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
// - Ley 27942, Ley de Prevención y Sanción del Hostigamiento Sexual, y su Reglamento (D.S. 014-2019-MIMP): cuando se
//   presenta una queja, RR.HH. dicta medidas de protección en un plazo no mayor de tres días hábiles.
//   https://andina.pe/AGENCIA/noticia-acoso-sexual-laboral-rotaran-o-suspenderan-su-puestos-a-hostigadores-770524.aspx
//   https://elperuano.pe/noticia/302759-hostigamiento-sexual-que-deben-hacer-las-empresas-para-prevenir-y-atender-estos-casos-en-el-trabajo
//   https://www.minedu.gob.pe/reforma-magisterial/pdf/disciplinario/2024/ley27942_ley_de_prevencion_y_sancion_del_hostigamiento_sexual.pdf

export const CAP = {
  n: 2, titulo: 'Los comentarios', dia: 'Semana 1, martes', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'AseguraPlus · Oficina central, San Isidro',
  inicio: '08:20', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes. Llegas en el Metropolitano, apretada entre mochilas, y subes al piso 9 con un café de la carretilla de la esquina. En tu pantalla te esperan 214 comentarios abiertos del área de Siniestros.', boton: 'Empezar a leer',
  kusi: 'Los números te dijeron dónde duele. Hoy las palabras te van a decir cómo duele.',
  lead: 'Leíste 214 comentarios sin saltarte los incómodos, armaste un mapa de temas sin nombres propios, frenaste una herramienta que sacaba los datos de la empresa y encontraste un comentario que no podías archivar.',
  reflexion: '¿Qué haces con algo grave que alguien escribió sin firmar?',
  siguiente: { n: 3, titulo: 'El gerente', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'informe', p: 'Informe de resultados de clima', j: 'Sofía · Cultura', d: 0, e: 'Datos analizados' },
  { id: 'comentarios', p: 'Comentarios abiertos', j: 'Cultura', d: 0, e: '214 sin codificar' },
  { id: 'siniestros', p: 'Área de Siniestros', j: 'Gonzalo Ferreyra', d: 0, e: 'Reunión el miércoles' },
  { id: 'alerta', p: 'Comentario sobre posible hostigamiento', j: 'Sofía · Cultura', d: 0, e: 'Sin revisar' },
];

export const FUTURO = {
  mapa_temas: ['Tienes un mapa de temas con frecuencias y citas sin nombres.', 'Será la columna de tu presentación a Gonzalo.'],
  mapa_flojo: ['Tu mapa de temas mezcla opiniones tuyas con lo que dijeron.', 'Gonzalo encontrará por dónde atacarlo.'],
  ia_bloqueada: ['Los comentarios no salieron de los sistemas de la empresa.', 'Renzo aprendió algo que no estaba en su curso.'],
  ia_externa: ['Los 214 comentarios se subieron a una herramienta gratuita externa.', 'Nadie sabe dónde quedaron.'],
  alerta_sofia: ['Le llevaste a Sofía el comentario sobre posible hostigamiento.', 'Ella activará el canal de la empresa; tú quedas atenta.'],
  alerta_archivada: ['Archivaste el comentario sobre posible hostigamiento por ser anónimo.', 'Lo que dice no desaparece por eso.'],
  alerta_detective: ['Intentaste averiguar quién escribió el comentario.', 'Rompiste la regla que ayer defendiste.'],
  gonzalo_citas: ['Le prometiste a Gonzalo temas y citas anonimizadas para el miércoles.', 'Llegará esperando ver «lo que dicen de él».'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'equipo', t: '08:25', de: 'Sofía', txt: 'Hoy toca leer. Todo. Hasta los que dicen «para qué respondo si nunca hacen nada». Esos también son datos.' },
  { chat: 'renzo', t: '08:40', de: 'Renzo', txt: 'Ya corregí el informe con tus comentarios de ayer. Lo de Reembolsos lo junté con Atención 👍', si: 'umbral_cuidado' },
  { chat: 'renzo', t: '08:40', de: 'Renzo', txt: 'Sofía me jaló las orejas por el anexo de la base 😬 Ya lo saqué. ¿Me ayudas con los comentarios?', si: 'umbral_roto' },
  { chat: 'gonzalo', t: '09:15', de: 'Gonzalo', txt: 'Buenos días. Sofía me confirmó la reunión para mañana a las 3. Espero que vengan con algo más que porcentajes.', si: 'gonzalo_agregado' },
  { chat: 'gonzalo', t: '09:15', de: 'Gonzalo', txt: 'Buenos días. Ya revisé la base. Mañana quiero ver los comentarios de Reembolsos completos.', si: 'gonzalo_base' },
  { chat: 'lucia', t: '13:05', de: 'Lucía', txt: 'Hoy Hernán, el supervisor, preguntó en voz alta quién había escrito «eso del miedo». Nadie dijo nada.', si: 'lucia_confia' },
  { chat: 'sofia', t: '16:20', de: 'Sofía', txt: 'Gracias por traerme ese comentario. Hiciste lo correcto. Déjalo conmigo; mañana te cuento cómo lo movemos.', si: 'alerta_sofia' },
];

export const CORREOS = [
  { t: '08:30', de: 'Sofía Ledesma', para: 'Analista de Clima y Cultura', asunto: 'Comentarios de Siniestros', html: '<p>Te dejé los 214 comentarios de Siniestros en la carpeta de Cultura. Algunos mencionan nombres, sobre todo de supervisores. Antes de que nadie más los vea, hay que anonimizarlos.</p><p>No busques los más fuertes: busca los que se repiten. Lo que se repite es lo que hay que cambiar.</p><p>Sofía</p>' },
  { t: '11:45', de: 'Mesa de Ayuda TI', para: 'Todos los colaboradores', asunto: 'Recordatorio · herramientas no autorizadas', html: '<p>Recordamos que no está permitido cargar información de clientes ni de colaboradores en aplicaciones o páginas web no aprobadas por la empresa. Ante dudas, consulte las herramientas autorizadas en la intranet.</p>' },
];

export const QUIZ = [
  { q: 'Al analizar comentarios abiertos, lo primero es…', ops: ['Leer solo los más largos', 'Leerlos todos antes de clasificarlos', 'Contar cuántas veces aparece el nombre del jefe', 'Elegir los más duros para la presentación'], ok: 1, por: 'Si clasificas antes de leer todo, terminas encontrando solo lo que ya esperabas.' },
  { q: 'Un comentario dice «Hernán grita en las reuniones». En el informe para el gerente…', ops: ['Va tal cual', 'Se anonimiza: «el supervisor directo levanta la voz en reuniones»', 'Se borra porque tiene un nombre', 'Se pone solo la inicial'], ok: 1, por: 'Se conserva el contenido y se quitan los nombres y detalles que identifican a quien escribe o a quien se menciona.' },
  { q: '¿Qué hace más útil un mapa de temas?', ops: ['Tener muchos colores', 'Mostrar cuántos comentarios hay por tema, con citas representativas', 'Incluir tu opinión sobre cada tema', 'Mostrar solo los temas negativos'], ok: 1, por: 'La frecuencia dice qué es generalizado; las citas dicen cómo se vive.' },
  { q: 'Un comentario anónimo describe una posible situación de hostigamiento sexual. ¿Qué haces?', ops: ['Nada: es anónimo', 'Averiguar quién lo escribió', 'Llevarlo a tu jefatura para que se active el procedimiento de la empresa', 'Publicarlo en el informe general'], ok: 2, por: 'Que sea anónimo no lo vuelve falso. La empresa tiene un procedimiento propio para estos casos (Ley 27942).' },
  { q: 'Subir los comentarios a una herramienta gratuita de internet para clasificarlos…', ops: ['Es eficiente y no tiene riesgos', 'Saca datos de los colaboradores de los sistemas de la empresa', 'Está bien si se borra después', 'Es obligatorio por la Ley 29733'], ok: 1, por: 'Los datos se tratan para su finalidad y con las herramientas que la empresa controla.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '08:45', ch: 'documento', who: null, titulo: 'Doscientos catorce comentarios', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Abres el archivo. Algunos comentarios tienen una palabra («nada»), otros son párrafos enteros escritos a la medianoche. ${F.has('cortes_bien') ? 'Ya sabes dónde mirar: respeto, miedo a hablar, carga.' : 'Todavía no sabes bien qué buscar.'}</p><p>Antes de empezar, <mark class="clave">ordena tu método</mark>. Si lo haces al revés, vas a encontrar solo lo que ya esperabas.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del análisis de comentarios. Usa las flechas.', boton: 'Guardar el método',
    items: [
      { id: 'leer', t: 'Leer todos los comentarios una vez, sin clasificar', por: 'Primero se escucha todo.' },
      { id: 'anon', t: 'Quitar nombres y detalles que identifiquen a alguien', por: 'Antes de que el texto circule, aunque sea dentro del equipo.' },
      { id: 'cod', t: 'Asignar a cada comentario uno o más temas', por: 'Los temas salen de lo que leíste, no de una lista previa.' },
      { id: 'contar', t: 'Contar cuántos comentarios hay por tema', por: 'Lo que se repite pesa más que lo que suena fuerte.' },
      { id: 'citas', t: 'Elegir citas representativas de cada tema', por: 'Las que se parecen a muchas, no las más escandalosas.' },
      { id: 'valid', t: 'Revisar el mapa con otra persona del equipo', por: 'Un segundo par de ojos detecta tus sesgos.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: q === 'riesgosa' ? -2 : 0 },
        cartera: { comentarios: q === 'riesgosa' ? 'Leídos sin método' : 'Método listo · lectura completa' },
        out: q === 'buena' ? 'A las 10:30 terminas la primera lectura. Te arden los ojos. Hay cosas que se repiten tanto que ya las sabes de memoria.' : 'Empiezas a clasificar desde el primer comentario. A la mitad te das cuenta de que tus temas no alcanzan y tienes que volver al inicio.',
        pro: { ok: 'Leer todo antes de clasificar evita que tus prejuicios armen los temas.', risk: 'Anonimizar tarde significa que los nombres ya pasaron por varias manos.', info: 'Usa una columna para el texto original y otra para el texto anonimizado. Solo la segunda sale de tu computadora.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Método de investigadora!' : 'El orden importa: primero escuchar, después clasificar.'],
      };
    },
    mirada: {
      ve: 'El análisis cualitativo tiene fama de ser «lo blando», pero es lo que más rigor necesita: sin método, el analista encuentra su propia opinión en las palabras de otros.',
      visual: { tipo: 'flujo', titulo: 'De 214 comentarios a un mapa', pasos: ['Leer todo', 'Anonimizar', 'Codificar', 'Contar', 'Citar', 'Validar'] },
    },
  },
  {
    id: 'k2', t: '10:50', ch: 'presencial', who: null, titulo: 'La idea de Renzo', banner: 'assets/foto2/celebra-laptop.webp', lugar: 'La mesa de Cultura', show: ['cumplimiento', 'tiempo', 'etica'],
    body: () => `<p>Renzo se acerca con su laptop personal y los ojos brillantes. «Encontré una página gratis que clasifica textos con inteligencia artificial. <mark class="clave">Subimos los 214 comentarios y en cinco minutos tenemos los temas</mark>. ¿Le damos?»</p><p>Son casi las once y todavía no almuerzas.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que no los suba: los comentarios no salen de los sistemas de la empresa. Le propones repartirse la codificación en el Excel compartido y preguntar a TI qué herramienta está aprobada.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, tiempo: -2 }, flags: ['ia_bloqueada'],
          out: 'Renzo se desinfla un poco, pero se sienta a tu lado. A la una ya tienen 120 comentarios codificados. TI responde que hay una herramienta aprobada, pero que necesita un pedido formal.',
          pro: { ok: 'Proteges los datos y no pierdes el día.', risk: 'Te toma más tiempo.', info: 'Lee el correo de TI de las 11:45: ya lo dice.' },
          kusi: ['animo', 'Más lento, pero los datos se quedan en casa.'] } },
      { id: 'b', label: 'Aceptar, pero solo después de borrar los nombres a mano.',
        res: { q: 'aceptable', fx: { tiempo: 2, cumplimiento: -2 }, flags: ['ia_externa'],
          out: 'Borras los nombres, pero quedan frases como «la única chica de Reembolsos que estudia de noche». La página devuelve temas en cinco minutos. Los textos quedan en un servidor que nadie conoce.',
          pro: { ok: 'Quitaste lo más evidente.', risk: 'Sin nombres no siempre es anónimo, y sigue siendo una herramienta no autorizada.' },
          kusi: ['pensando', '¿Y los detalles que igual identifican?'] } },
      { id: 'c', label: 'Aceptar: es solo texto, sin DNI ni datos personales.',
        res: { q: 'riesgosa', fx: { tiempo: 3, cumplimiento: -5, etica: -3 }, flags: ['ia_externa'],
          out: 'En cinco minutos tienen los temas. También tienen 214 comentarios, con nombres de supervisores y detalles de vida, en un servidor de otro país.',
          pro: { ok: 'Rapidez.', risk: 'Un comentario que identifica a quien lo escribe o a quien menciona es un dato personal. Y salió de la empresa.' },
          kusi: ['indignado', '¡Era confidencial hasta hace cinco minutos!'] } },
    ],
    rules: [[LEY, 'Ley 29733, art. 6: los datos se tratan para la finalidad con la que se recopilaron.'], [BP, 'Solo se usan herramientas aprobadas por la empresa para datos de colaboradores.']],
    mirada: {
      ve: 'La tecnología ayuda a analizar comentarios, pero la pregunta previa siempre es dónde quedan los datos. Un comentario de clima puede contener la salud, la familia o el miedo de una persona.',
      visual: { tipo: 'balanza', a: { t: 'Herramienta gratis externa', items: ['Cinco minutos', 'Temas automáticos'] }, b: { t: 'Codificar dentro de la empresa', items: ['Datos bajo control', 'Criterio humano en cada tema', 'Confianza de quien escribió'] } },
    },
  },
  {
    id: 'k3', t: '14:00', ch: 'documento', who: null, titulo: 'El mapa de temas', banner: 'assets/foto/plano-equipo.webp', lugar: 'Tu escritorio', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Almorzaste un menú de la esquina en quince minutos: sopa de morón y ají de gallina. ${F.has('ia_bloqueada') ? 'Con Renzo terminan de codificar a las dos.' : 'Los temas ya están, pero no los revisaste uno por uno.'}</p><p>Ahora toca armar el mapa que vas a mostrar mañana. <mark class="clave">Lo que entra y cómo entra</mark> define si Gonzalo escucha o se defiende.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del mapa de temas.', boton: 'Guardar el mapa',
    bloques: [
      { id: 'temas', t: 'Temas principales', n: 3, ops: [
        { id: 'trato', t: 'Trato del supervisor directo: gritos y burlas en reuniones (61 comentarios).', ok: true, por: 'Es el tema que más se repite.' },
        { id: 'miedo', t: 'Miedo a opinar o a reclamar (48 comentarios).', ok: true, por: 'Coincide con el ítem más bajo de la encuesta.' },
        { id: 'carga', t: 'Carga de trabajo desde el cambio de sistema de siniestros (44 comentarios).', ok: true, por: 'Explica parte del malestar sin culpar a una persona.' },
        { id: 'flojos', t: 'Hay gente que se queja de todo y no trabaja.', ok: false, por: 'Es una opinión, no un tema de los comentarios: solo lo dijeron 3 personas.' },
        { id: 'fiesta', t: 'Falta de integración: no hubo fiesta de fin de año.', ok: false, por: 'Apareció en 6 comentarios. No es lo principal.' },
      ] },
      { id: 'citas', t: 'Cómo citas', n: 2, ops: [
        { id: 'c1', t: '«En las reuniones nos ridiculizan delante de todos cuando un caso se atrasa.»', ok: true, por: 'Representa a muchos y no identifica a nadie.' },
        { id: 'c2', t: '«Desde el sistema nuevo cerramos casos hasta las nueve de la noche.»', ok: true },
        { id: 'c3', t: '«Hernán Díaz le dijo inútil a Pamela delante del equipo el 12 de octubre.»', ok: false, por: 'Nombres, fecha y víctima: identifica a todos. El hecho se cuenta sin esos datos.' },
      ] },
      { id: 'forma', t: 'Qué incluye el mapa', n: 2, ops: [
        { id: 'f1', t: 'Cuántos comentarios hay por tema.', ok: true },
        { id: 'f2', t: 'Lo positivo que también dijeron: compañerismo entre analistas (39 comentarios).', ok: true, por: 'Un mapa solo negativo se lee como ataque.' },
        { id: 'f3', t: 'Tu conclusión: «el área necesita cambiar de supervisor».', ok: false, por: 'Eso no es lo que dijeron: es tu interpretación, y no te toca decidirlo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: [q === 'riesgosa' ? 'mapa_flojo' : 'mapa_temas'], cartera: { comentarios: q === 'buena' ? 'Mapa de temas listo, sin nombres' : 'Mapa de temas con huecos' },
        out: q === 'buena' ? 'Sofía mira el mapa por encima de tu hombro: «Esto Gonzalo no lo puede rebatir. No hay nombres y está lo bueno también».' : 'El mapa tiene los temas, pero también frases que Gonzalo puede usar para decir que «es personal».',
        pro: { ok: 'Un mapa de temas honesto cuenta, cita sin identificar y muestra lo que funciona.', risk: 'Una sola cita con nombre propio basta para que el gerente busque al autor.', info: 'Si un tema aparece en más de la mitad de los comentarios, dilo así, con el número.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un mapa que se defiende solo!' : 'Algunas piezas eran tuyas, no de ellos.'],
      };
    },
    rules: [[BP, 'Los temas salen de los comentarios; las conclusiones van separadas y con cuidado.']],
    mirada: {
      ve: 'En un mapa de temas, el número protege: «61 de 214 comentarios» no es la queja de una persona resentida. Y lo positivo no es adorno: muestra que el análisis no busca culpables.',
      visual: { tipo: 'embudo', titulo: 'Temas en los comentarios de Siniestros', niveles: [['Trato del supervisor', 61], ['Miedo a opinar', 48], ['Carga de trabajo', 44], ['Compañerismo (positivo)', 39], ['Integración', 6]] },
    },
  },
  {
    id: 'k4', t: '15:30', ch: 'documento', who: null, titulo: 'El comentario 187', banner: 'assets/foto2/tension.webp', lugar: 'Tu escritorio', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Al revisar los últimos comentarios, uno te hace dejar el café en la mesa. Dice, sin firma: «Un supervisor le escribe a las practicantes nuevas pasada la medianoche, cosas que no tienen nada que ver con el trabajo, y les dice que no cuenten. <mark class="clave">Todas lo sabemos y nadie hace nada</mark>».</p><p>No tiene nombre. No sabes quién lo escribió.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Separarlo del análisis general y llevárselo hoy mismo a Sofía, para que se active el procedimiento de hostigamiento de la empresa.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, personas: 3 }, rel: { sofia: 1 }, flags: ['alerta_sofia'], cartera: { alerta: 'En manos de Sofía · procedimiento de la empresa' },
          out: 'Sofía lo lee dos veces. «Esto no va en el informe del viernes. Esto va por otro carril, y rápido.» Cierra la puerta de su oficina para hacer una llamada.',
          pro: { ok: 'Que sea anónimo no lo vuelve falso. Lo derivas a quien puede actuar, sin exponerlo.', risk: 'Todavía no hay una queja formal; el canal tendrá que ver cómo llegar a las practicantes sin señalar a nadie.', info: 'Pregunta si la empresa tiene un canal de denuncias que permita reportes reservados.' },
          kusi: ['animo', 'No era tuyo resolverlo, pero sí no dejarlo pasar.'] } },
      { id: 'b', label: 'Dejarlo en el mapa de temas como «comentarios sobre conducta inapropiada»: es anónimo y no se puede verificar.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, flags: ['alerta_archivada'], cartera: { alerta: 'Mezclado en el informe general' },
          out: 'El comentario queda como una línea más del informe. Si alguna practicante lo está viviendo, nadie de la empresa va a buscarla.',
          pro: { ok: 'No expones a nadie.', risk: 'Una posible situación de hostigamiento sexual no es un tema de clima: tiene un procedimiento propio y la empresa no puede ignorarla.' },
          kusi: ['triste', 'Alguien escribió eso pidiendo ayuda…'] } },
      { id: 'c', label: 'Cruzar la sede, la antigüedad y la hora de respuesta para saber quién lo escribió y poder ayudarla.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { sofia: -1 }, flags: ['alerta_detective'],
          out: 'A los veinte minutos tienes tres posibles nombres. Sofía te ve la pantalla: «Para. Ayer le dijiste a todos que esto era confidencial».',
          pro: { ok: 'Quieres ayudar.', risk: 'Identificar a quien respondió es justo lo que le prometiste a la gente que no harías. Hay otras formas de llegar.' },
          kusi: ['preocupado', 'Con buenas intenciones también se rompe la confianza.'] } },
    ],
    rules: [[LEY, 'Ley 27942 y su Reglamento: ante una queja de hostigamiento sexual, RR.HH. dicta medidas de protección en un plazo no mayor de tres días hábiles.'], [LEY, 'Ley 29733, art. 6: la base de la encuesta no se usa para identificar a quien respondió.']],
    mirada: {
      ve: 'Una encuesta de clima no es un canal de denuncias, pero a veces la gente la usa como tal porque no confía en otro. Quien analiza clima no investiga: separa lo grave, lo deriva al canal correcto y protege el anonimato del resto.',
      visual: { tipo: 'flujo', titulo: 'Dos carriles distintos', pasos: ['Comentario grave', 'Se separa del informe', 'Jefatura activa el procedimiento', 'Canal de hostigamiento actúa'], aqui: 1 },
      normas: [{ ley: 'Ley 27942 y su Reglamento (D.S. 014-2019-MIMP)', dice: 'Recibida una queja de hostigamiento sexual, RR.HH. dicta medidas de protección en un plazo no mayor de tres días hábiles.', practica: 'Un comentario anónimo aún no es una queja, pero es una alerta que la empresa debe atender por su canal.' }],
    },
  },
  {
    id: 'k5', t: '17:20', ch: 'whatsapp', who: 'gerente', titulo: 'Lo que quiere ver Gonzalo', banner: 'assets/foto/oficina-abierta.webp', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>Gonzalo te escribe: «${F.has('gonzalo_base') ? 'Ya vi la base. Mañana quiero los comentarios de Reembolsos completos, sin editar.' : 'Mañana quiero ver qué dicen de mi área. Pero lo que dicen de verdad, no un resumen bonito.'}» Y agrega: «<mark class="clave">Si hay acusaciones, tengo derecho a saber quién las hace</mark>.»</p>`,
    type: 'compose', enviaA: 'gonzalo', para: 'Para: Gonzalo Ferreyra · Gerente de Siniestros', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué le ofreces', ops: [
        { id: 'q1', t: 'Gonzalo, mañana le mostraremos los temas de los comentarios con su frecuencia y citas textuales sin nombres.', ok: true, por: 'Es lo que de verdad le sirve.' },
        { id: 'q2', t: 'Gonzalo, mañana le llevo los comentarios tal cual los escribieron.', ok: false, por: 'Incluyen nombres y detalles que identifican.' },
      ] },
      { id: 'porque', t: 'Por qué', ops: [
        { id: 'p1', t: 'Las respuestas son confidenciales para que la gente diga lo que piensa; eso es lo que le permite a usted saber qué pasa.', ok: true, por: 'Le muestras que la confidencialidad también le conviene a él.' },
        { id: 'p2', t: 'Son las reglas de RR.HH. y no puedo hacer nada.', ok: false, por: 'Suena a excusa.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Y también hay cosas buenas: su equipo valora mucho el compañerismo.', ok: true, por: 'Le baja la guardia sin maquillar.' },
        { id: 'c2', t: 'Prepárese, que no es bonito.', ok: false, por: 'Lo pone a la defensiva antes de empezar.' },
      ] },
    ],
    res: sel => {
      const crudo = sel.que === 'q2', buenas = ['q1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = crudo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 3 : 0, etica: crudo ? -4 : 2, calidad: q === 'buena' ? 2 : 0 }, rel: { gerente: q === 'buena' ? 1 : 0 },
        flags: crudo ? [] : ['gonzalo_citas'],
        out: q === 'buena' ? 'Gonzalo tarda en responder. Al final: «Ok. Mañana a las 3». Sin emoji, pero sin pelea.' : crudo ? 'Sofía ve el mensaje en copia y te llama: «No le podemos llevar eso. Mañana temprano lo arreglamos».' : 'Gonzalo responde: «Ya veremos». Llegará armado.',
        pro: { ok: 'Explicar que la confidencialidad es lo que hace útil la encuesta convierte un «no» en un argumento.', risk: 'Prometer los comentarios «tal cual» te obliga a romper la confianza o a incumplir tu palabra.', info: 'A muchos gerentes los calma saber que también hay cosas positivas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Firme y amable a la vez. ¡Dale!' : 'Mañana va a pedir lo que le prometiste.'],
      };
    },
    rules: [[BP, 'Al gerente se le entregan temas, frecuencias y citas anonimizadas; nunca quién dijo qué.']],
    mirada: {
      ve: 'El «derecho a saber quién me acusa» es real en un procedimiento disciplinario, no en una encuesta de clima. Mezclar las dos cosas es lo que hace que la gente deje de responder.',
      visual: { tipo: 'cambio', titulo: 'Lo que pide y lo que recibe', pares: [['Comentarios completos', 'Temas con frecuencia'], ['Quién lo escribió', 'Citas sin nombres'], ['Solo lo malo', 'Lo malo y lo bueno']] },
    },
  },
  {
    id: 'k6', t: '18:40', ch: 'presencial', who: 'sofia', titulo: 'Antes de irte', banner: 'assets/foto2/pasillo.webp', lugar: 'El pasillo del piso 9', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Sofía te alcanza en el ascensor con el abrigo puesto. Afuera ya oscureció y garúa. ${F.has('alerta_sofia') ? '«Lo del comentario ya está en manos de la persona que ve los casos. Tú no tienes que hacer nada más con eso, salvo una cosa: no contárselo a nadie.»' : '«Mañana a las 3 es lo de Gonzalo.»'}</p><p>«Una pregunta antes de que bajes: <mark class="clave">¿qué crees que va a decir Gonzalo cuando vea el mapa?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: '«Que la encuesta está mal hecha. Preparemos qué responder sobre el método.»',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { sofia: 1 },
          out: 'Sofía sonríe por primera vez en el día. «Exacto. Siempre empiezan por ahí. Mañana a las 9 preparamos eso.»',
          kusi: ['celebra', 'Anticipar la defensa es media batalla.'] } },
      { id: 'b', label: '«Que va a aceptar los resultados: los números son claros.»',
        res: { q: 'aceptable', fx: { confianza: 0 },
          out: 'Sofía se ríe bajito. «Ojalá. Llevo ocho años haciendo esto y nadie acepta un 42 % a la primera.»',
          kusi: ['pensando', 'Los datos claros no siempre convencen.'] } },
    ],
    mirada: { ve: 'Casi todos los líderes que reciben malos resultados pasan por la misma secuencia: negar el método, buscar culpables, y solo después preguntar qué hacer. Prepararse para la primera etapa es parte del trabajo.' },
  },
];
