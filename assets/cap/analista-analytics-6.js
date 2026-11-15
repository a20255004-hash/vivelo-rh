// Analista de People Analytics · Capítulo 6 · «El tablero» · Semana 2, lunes.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 7 (proporcionalidad), art. 9 (seguridad), art. 17 (confidencialidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS (El Peruano, 30/11/2024): art. 46 (control de acceso: altas y bajas de usuarios, privilegios verificados como mínimo
//   cada semestre, registros de trazabilidad), art. 47 (documento de seguridad).
// Las recomendaciones de visualización (eje desde cero, no depender solo del color, grupos mínimos) son buenas prácticas, no normas.

export const CAP = {
  n: 6, titulo: 'El tablero', dia: 'Semana 2, lunes', foto: 'assets/foto2/celebra-laptop.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Semana 2, lunes. Faltan dos días para el comité. Hoy conviertes tu análisis en un tablero que la gerencia entienda en un minuto, sin exponer a nadie.', boton: 'Abrir Power BI',
  kusi: 'Un buen tablero no muestra todo: muestra lo que importa. ¡Dale!',
  lead: 'Armaste un tablero que responde una pregunta, corregiste tus propios gráficos, cuidaste quién ve qué y preparaste la visita a Santa Anita.',
  reflexion: 'Si Mónica solo pudiera mirar tu tablero un minuto, ¿qué tendría que entender?',
  siguiente: { n: 7, titulo: 'La otra versión', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'tablero', p: 'Tablero de rotación', j: 'Tú', d: 5, e: 'Por armar' },
  { id: 'accesos', p: 'Accesos al tablero', j: 'Pedro · TI', d: 5, e: 'Por configurar' },
  { id: 'visita', p: 'Visita a Santa Anita', j: 'Lucía · HRBP', d: 5, e: 'Por coordinar' },
  { id: 'comite', p: 'Comité de gerencia', j: 'Mónica', d: 5, e: 'Este miércoles' },
];

export const FUTURO = {
  tablero_claro: ['Tu tablero responde una pregunta en la primera pantalla.', 'Mónica lo entenderá en el comité.'],
  tablero_recargado: ['Tu tablero tiene de todo y no dice nada.', 'El comité se perderá en los filtros.'],
  nombres_restringidos: ['Los nombres de supervisores solo están en una página restringida.', 'Nadie verá un ranking público.'],
  ranking_publico: ['Publicaste un ranking de supervisores para los 34 jefes.', 'Renzo lo verá antes que tú lo visites.'],
  graficos_honestos: ['Corregiste ejes, colores y grupos pequeños.', 'Nadie podrá acusarte de exagerar.'],
  accesos_roles: ['Configuraste accesos por rol, con vencimiento y revisión.', 'Pedro te pondrá de ejemplo.'],
  visita_escucha: ['Planteaste la visita a Renzo como una conversación para escucharlo.', 'Renzo llegará dispuesto a hablar.'],
  visita_auditoria: ['Planteaste la visita como una revisión de su equipo.', 'Renzo llegará a la defensiva.'],
  prueba_minuto: ['Probaste el tablero con alguien que no lo conocía.', 'Encontraste lo que no se entendía.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  pedro: { n: 'Pedro Caycho', sub: 'Analista de TI', who: 'ti' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
  rocio: { n: 'Rocío Quispe', sub: 'Analista de Planillas', c: '#8A5A2B' },
};

export const WSP = [
  { chat: 'monica', t: '08:10', de: 'Mónica', txt: 'Leí tu propuesta. Hay cosas que no me convencen, pero el tablero quiero verlo hoy a las 5.', si: 'alternativa_lista' },
  { chat: 'lucia', t: '08:30', de: 'Lucía', txt: 'Mala noticia: en Santa Anita no renovaron a Milagros y a Jairo. A Milagros le dijeron «el sistema dice que igual te ibas». Vino llorando a verme 😞', si: 'lista_entregada' },
  { chat: 'lucia', t: '08:30', de: 'Lucía', txt: 'En Santa Anita están preguntando por qué a unos les dieron bono y a otros no. Se armó un grupo paralelo de WhatsApp 😬', si: 'lista_retencion' },
  { chat: 'lucia', t: '08:40', de: 'Lucía', txt: 'Renzo ya sabe que «analítica lo está investigando». Está furioso. Igual acepta vernos mañana.', si: 'lucia_avisada' },
  { chat: 'pedro', t: '14:20', de: 'Pedro', txt: 'Así da gusto. Roles, vencimiento y revisión. Lo pongo de ejemplo en el documento de seguridad 🙌', si: 'accesos_roles' },
  { chat: 'rocio', t: '17:55', de: 'Rocío', txt: 'Yo de gráficos no sé nada, hijita, pero lo de los primeros tres meses sí lo entendí al toque.', si: 'prueba_minuto' },
];

export const CORREOS = [
  { t: '08:35', de: 'Diego Paz', para: 'Analista de People Analytics', asunto: 'El tablero', html: '<p>Regla de la casa para tableros: una pregunta, una respuesta en la primera pantalla y el detalle para quien lo necesite. Si Mónica tiene que preguntar «¿y esto qué significa?», el tablero falló.</p><p>Diego</p>' },
  { t: '09:15', de: 'Oficial de Datos Personales · HogarPlus', para: 'Analista de People Analytics; Diego Paz', asunto: 'Seguimiento del incidente del viernes', html: '<p>Cerramos la evaluación del enlace del viernes. Para el tablero nuevo, les pido: sin DNI ni nombres de vendedores, accesos por rol y registro de quién entra. Quedo atento para revisarlo antes del miércoles.</p>', si: 'incidente_ordenado' },
  { t: '09:15', de: 'Oficial de Datos Personales · HogarPlus', para: 'Analista de People Analytics; Diego Paz', asunto: 'Enlace de Power BI del viernes', html: '<p>Pedro me informó hoy de un enlace con DNI que estuvo visible para jefes de tienda el viernes. Necesito que me expliquen por qué no se me informó ese mismo día. Hay plazos que corren desde que se conoce un incidente.</p>', si: 'incidente_tapado' },
];

export const QUIZ = [
  { q: 'La primera pantalla de un tablero de rotación debe…', ops: ['Mostrar todos los filtros posibles', 'Responder la pregunta principal con pocas cifras', 'Tener la lista de todos los vendedores', 'Tener muchos colores'], ok: 1, por: 'Una pregunta, una respuesta; el detalle va después.' },
  { q: 'Un gráfico de barras con el eje empezando en 50 %…', ops: ['Es más preciso', 'Exagera diferencias pequeñas', 'Es obligatorio', 'Ahorra espacio sin problemas'], ok: 1, por: 'En barras, el eje desde cero evita que una diferencia chica parezca enorme.' },
  { q: 'Semáforos solo en rojo y verde…', ops: ['Los entiende todo el mundo', 'Pueden no distinguirse para personas con daltonismo', 'Son la norma internacional', 'No tienen ningún problema'], ok: 1, por: 'No dependas solo del color: añade texto o íconos.' },
  { q: 'Según el reglamento de la Ley 29733, los privilegios de acceso a sistemas con datos personales se verifican…', ops: ['Nunca', 'Periódicamente, como mínimo cada semestre', 'Cada diez años', 'Solo si hay un incidente'], ok: 1, por: 'D.S. 016-2024-JUS, art. 46, num. 1, c).' },
  { q: 'Mostrar a los 34 jefes un ranking con el nombre de cada supervisor y su rotación…', ops: ['Motiva a mejorar', 'Expone a personas sin contexto y difunde datos más allá de quien los necesita', 'Es obligatorio por transparencia', 'No tiene ningún efecto'], ok: 1, por: 'Quien necesita ver nombres para actuar es poca gente: la gerenta y las HRBP.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:45', ch: 'documento', who: null, titulo: 'La primera pantalla', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('lista_entregada') ? 'Llegas con el mensaje de Lucía todavía en la cabeza. Milagros y Jairo ya no trabajan en HogarPlus. Respiras y abres Power BI.' : 'Café de la máquina del piso 3, tibio y sin azúcar. Abres un lienzo en blanco en Power BI.'}</p><p>Diego fue claro: <mark class="clave">la primera pantalla responde la pregunta</mark>. Todo lo demás, después.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la primera pantalla.', boton: 'Guardar el diseño',
    bloques: [
      { id: 'arriba', t: 'Arriba', n: 1, ops: [
        { id: 'u1', t: 'La pregunta en una línea y la respuesta: «58 % de rotación; casi la mitad de las renuncias ocurre antes del tercer mes».', ok: true, por: 'Quien lee sabe en cinco segundos de qué se trata.' },
        { id: 'u2', t: 'El logo grande de HogarPlus y la fecha.', ok: false, por: 'Ocupa el mejor lugar de la pantalla sin decir nada.' },
      ] },
      { id: 'medio', t: 'Al centro', n: 2, ops: [
        { id: 'm1', t: 'Rotación según antigüedad del supervisor: 41 % vs. 92 %.', ok: true },
        { id: 'm2', t: 'Renuncias por mes de permanencia: el pico de los primeros 90 días.', ok: true },
        { id: 'm3', t: 'Tabla con las 720 salidas, una por fila.', ok: false, por: 'El detalle va en otra página, y sin nombres.' },
      ] },
      { id: 'abajo', t: 'Abajo', n: 1, ops: [
        { id: 'a1', t: 'Tres acciones propuestas, cada una con el número que debería mover.', ok: true, por: 'El tablero termina en una decisión.' },
        { id: 'a2', t: 'Doce filtros: tienda, mes, edad, sección, turno, distrito…', ok: false, por: 'Tantos filtros convierten el tablero en un juego.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: [q === 'buena' ? 'tablero_claro' : 'tablero_recargado'], cartera: { tablero: q === 'buena' ? 'Primera pantalla: pregunta, respuesta y acciones' : 'Primera pantalla recargada' },
        out: q === 'buena' ? 'Cuatro piezas en una pantalla. Diego la mira de lejos, desde su escritorio: «Hasta desde aquí se entiende».' : 'La pantalla tiene de todo. Diego entrecierra los ojos: «¿Qué quieres que vea primero?».',
        pro: { ok: 'Menos piezas, mejor elegidas.', risk: 'Un tablero que muestra todo obliga a cada quien a buscar su propia conclusión.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Se entiende en un minuto!' : 'Sobra ruido.'],
      };
    },
    mirada: {
      ve: 'Un tablero es una respuesta, no un almacén de datos. La jerarquía es la misma de un titular de periódico: lo más importante arriba, el contexto al medio y la acción al final.',
      visual: { tipo: 'flujo', titulo: 'La primera pantalla', pasos: ['Pregunta', 'Respuesta', 'Dos gráficos clave', 'Tres acciones'] },
    },
  },
  {
    id: 'f2', t: '10:00', ch: 'presencial', who: 'diego-pa', titulo: '¿Con nombres o sin nombres?', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala pequeña del piso 3', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Gino pidió un filtro para ver «el equipo de cada supervisor, con su nombre». Diego te pasa la pregunta: los supervisores también son personas, pero <mark class="clave">gestionar equipos es su trabajo</mark> y la gerenta tiene que poder actuar.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'El tablero general muestra tiendas y antigüedad del supervisor; los nombres de supervisores van en una página restringida a Mónica y a las HRBP, con contexto. Vendedores, nunca.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3, confianza: 2 }, rel: { 'diego-pa': 1 }, flags: ['nombres_restringidos'], cartera: { tablero: 'Nombres de supervisores solo en página restringida' },
          out: 'Diego asiente: «Quien tiene que actuar, ve. Quien no, no». Gino refunfuña un poco, pero acepta.',
          pro: { ok: 'Das acceso al detalle solo a quien lo necesita para actuar.', risk: 'Mónica podría usar la página para buscar culpables.', info: 'Pon en esa página el contexto: antigüedad, formación recibida y tamaño del equipo.' },
          kusi: ['celebra', 'Ver lo justo para actuar. ¡Así!'] } },
      { id: 'b', label: 'Sin nombres en ninguna página: solo tiendas y antigüedad. Que nadie pueda señalar a un supervisor.',
        res: { q: 'aceptable', fx: { etica: 3, calidad: -2, confianza: -2 },
          out: 'El tablero es impecable. Pero Mónica tendrá que preguntarte por teléfono quién es quién, y lo hará fuera de cualquier control.',
          pro: { ok: 'Nadie queda expuesto en el tablero.', risk: 'La información que se necesita para actuar se pedirá igual, por canales menos cuidados.' },
          kusi: ['pensando', 'Proteger también es dar el dato a quien debe.'] } },
      { id: 'c', label: 'Un ranking de supervisores con nombre y rotación, visible para los 34 jefes: la transparencia motiva a mejorar.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -4, calidad: 1 }, flags: ['ranking_publico'], cartera: { tablero: 'Ranking público de supervisores' },
          out: 'A las 11, el ranking ya circula en capturas por WhatsApp. Renzo aparece último. Sin contexto, sin conversación.',
          pro: { ok: 'Todos saben dónde están.', risk: 'Expones a personas ante sus pares, sin contexto y sin haberlas escuchado. Y difundes datos más allá de quien los necesita.' },
          kusi: ['indignado', '¡Un ranking no es una conversación!'] } },
    ],
    rules: [[LEY, 'El tratamiento de datos debe ser adecuado, relevante y no excesivo (Ley 29733, art. 7).'], [BP, 'Cada nivel de detalle, para quien lo necesita para decidir.']],
    mirada: {
      ve: 'No hay una respuesta perfecta: esconder todo deja a la gerencia sin poder actuar, y mostrarlo todo convierte el dato en vitrina. La salida habitual son niveles de acceso: lo general para muchos, el detalle para pocos, y siempre con contexto.',
      visual: { tipo: 'matriz', x: 'Detalle', y: 'Cuántos lo ven', cuadrantes: ['Resumen general', 'Riesgo de exposición', 'Poco útil', 'Detalle restringido'], items: [['Rotación por tienda', .2, .85], ['Ranking para 34 jefes', .85, .9], ['Página para Mónica y HRBP', .8, .15], ['Datos de vendedores', .95, .02]] },
    },
  },
  {
    id: 'f3', t: '11:30', ch: 'documento', who: null, titulo: 'Tus gráficos, con lupa', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Antes de mostrar nada, revisas el borrador como si fueras la persona más escéptica del comité. <mark class="clave">¿Qué te podrían cuestionar?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir en el borrador del tablero.',
    doc: { t: 'Borrador del tablero de rotación', sub: 'Power BI · versión 0.3' },
    lines: [
      { id: 'eje', t: 'Barras de rotación por tienda con el eje vertical empezando en 50 %.', bad: BP, why: 'Una diferencia de 8 puntos parece el doble. En barras, el eje empieza en cero.' },
      { id: 'color', t: 'Semáforo de riesgo solo en rojo y verde, sin texto.', bad: BP, why: 'Una persona con daltonismo no distingue los colores. Agrega la palabra o un ícono.' },
      { id: 'dni', t: 'Al pasar el cursor sobre una salida, aparece el DNI y el comentario.', bad: LEY, why: 'El tablero no necesita identificar a nadie. Es un dato que se expone sin necesidad.' },
      { id: 'chico', t: 'Se muestran tiendas con 3 o 4 vendedores en su equipo.', bad: BP, why: 'Con grupos tan chicos se reconoce a las personas y una sola salida mueve el porcentaje.' },
      { id: 'n', t: 'Cada porcentaje lleva al lado su base: «92 % (n = 96)».' },
      { id: 'torta', t: 'Gráfico circular con 12 motivos de salida.', bad: BP, why: 'Con tantas porciones no se compara nada. Usa barras ordenadas.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'Corriges ejes y colores, pero el DNI sigue apareciendo al pasar el cursor.' : 'Corriges el eje, el semáforo, la torta y los grupos chicos, y sacas el DNI. El tablero pierde dramatismo y gana credibilidad.',
      flags: missLey ? [] : ['graficos_honestos'],
      fx: { calidad: missLey ? 1 : 5, cumplimiento: missLey ? -4 : 3 },
      cartera: { tablero: missLey ? 'Versión 0.4 con DNI expuesto' : 'Versión 0.4 depurada' },
      pro: { ok: 'Un gráfico honesto no exagera ni identifica.', risk: 'Un eje truncado basta para que alguien diga «nos están manipulando».' },
      kusi: missLey ? ['preocupado', '¡El DNI en el cursor!'] : ['celebra', 'Menos drama, más verdad.'],
    }),
    rules: [[LEY, 'Quien trata datos debe adoptar medidas de seguridad acordes al tipo de dato (Ley 29733, art. 9).'], [BP, 'Eje desde cero en barras, base al lado de cada porcentaje y nunca solo color.']],
    mirada: {
      ve: 'Los gráficos también pueden mentir sin querer: un eje que no empieza en cero, una torta ilegible, un color que no todos ven. Y un tablero de personas tiene un riesgo extra: el detalle que aparece al pasar el cursor.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al tablero', pares: [['Eje desde 50 %', 'Eje desde 0'], ['Rojo y verde', 'Color + palabra'], ['DNI en el cursor', 'Sin identificadores'], ['Torta de 12', 'Barras ordenadas']] },
    },
  },
  {
    id: 'f4', t: '13:40', ch: 'whatsapp', who: 'ti', titulo: 'Quién ve qué', banner: 'assets/esc/dedos.webp', show: ['cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('incidente_tapado') ? 'Después del correo del Oficial de Datos, Pedro no está para bromas.' : 'Pedro quedó con ganas de que lo del viernes no se repita.'} Le escribes para configurar los accesos del tablero.</p><p><mark class="clave">Que el control no dependa de la buena voluntad</mark>.</p>`,
    type: 'compose', enviaA: 'pedro', para: 'Para: Pedro Caycho · TI', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'rol', t: 'Roles', ops: [
        { id: 'r1', t: 'Pedro, propongo tres roles: general (gerencia y jefes), detalle de supervisores (Mónica y HRBP) y datos fuente (solo People Analytics).', ok: true, por: 'Cada nivel con su público.' },
        { id: 'r2', t: 'Pedro, dales acceso a todos los gerentes, que son de confianza.', ok: false, por: 'La confianza no es un control de acceso.' },
      ] },
      { id: 'vida', t: 'Vigencia', ops: [
        { id: 'v1', t: 'Que los accesos venzan y se revisen cada semestre, y que se den de baja cuando alguien cambie de puesto.', ok: true, por: 'Altas, bajas y revisión periódica.' },
        { id: 'v2', t: 'Una vez que tengan acceso, que se quede así.', ok: false, por: 'Los accesos olvidados son la puerta de muchos incidentes.' },
      ] },
      { id: 'reg', t: 'Registro', ops: [
        { id: 'g1', t: 'Y que quede registrado quién entra a la página de detalle.', ok: true, por: 'Trazabilidad.' },
        { id: 'g2', t: 'No hace falta registrar nada.', ok: false, por: 'Sin registro, no sabrás quién vio qué si algo pasa.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'v1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -4, confianza: q === 'buena' ? 2 : 0 }, rel: { ti: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['accesos_roles'] : [], cartera: { accesos: q === 'buena' ? '3 roles, vencimiento, revisión semestral y registro' : 'Accesos configurados a medias' },
        out: q === 'buena' ? 'Pedro configura los tres roles antes del almuerzo y te manda captura.' : 'Pedro configura lo que pediste, pero te advierte: «Esto no pasa la revisión del Oficial».',
        pro: { ok: 'Roles, vencimiento y registro: el control queda en el sistema, no en la memoria de alguien.', risk: 'Un acceso que no vence es un acceso que nadie recuerda.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Seguridad sin drama.' : 'Faltan piezas de control.'],
      };
    },
    rules: [[LEY, 'Los sistemas con datos personales deben gestionar altas y bajas de usuarios, privilegios verificados como mínimo cada semestre y registros de trazabilidad (D.S. 016-2024-JUS, art. 46).']],
    mirada: {
      ve: 'El incidente del viernes enseñó que un enlace basta. Los roles, el vencimiento y el registro no son burocracia de TI: son lo que hace que la protección de las personas no dependa de que todos recuerden las reglas.',
      visual: { tipo: 'flujo', titulo: 'Tres niveles de acceso', pasos: ['General: gerencia y jefes', 'Detalle de supervisores: Mónica y HRBP', 'Datos fuente: People Analytics'] },
      normas: [{ ley: 'D.S. 016-2024-JUS, art. 46', dice: 'Los sistemas que tratan datos personales deben documentar e implementar la gestión de accesos y privilegios, con verificación periódica como mínimo semestral, y mantener registros que permitan la trazabilidad.', practica: 'Cada rol del tablero, con su fecha de vencimiento y su registro de ingresos.' }],
    },
  },
  {
    id: 'f5', t: '15:00', ch: 'documento', who: null, titulo: 'Tres números para el comité', banner: 'assets/esc/meta.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>En el comité, Mónica tendrá diez minutos. Diego te pide <mark class="clave">tres indicadores</mark> que se repetirán cada mes para ver si las acciones funcionan.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres indicadores de seguimiento.', boton: 'Usar estos', resumen: 'Elegiste',
    cols: ['Indicador', 'Qué muestra'],
    rows: [
      { id: 'r90', cells: ['Renuncias antes de los 90 días / ingresos del periodo', 'Si la inducción y los primeros meses mejoran'] },
      { id: 'sup', cells: ['Rotación de equipos con supervisor nuevo vs. antiguo', 'Si el acompañamiento a supervisores funciona'] },
      { id: 'rot', cells: ['Rotación de vendedores (salidas / plantilla promedio)', 'El indicador general que mira el directorio'] },
      { id: 'enc', cells: ['Satisfacción con la inducción (encuesta al final del video)', 'Si el video gustó'] },
      { id: 'horas', cells: ['Horas de capacitación dictadas', 'Cuánto se capacitó'] },
    ],
    score: { r90: 3, sup: 3, rot: 3, enc: 0, horas: -1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: 1 },
        cartera: { tablero: q === 'buena' ? 'Tres indicadores ligados a las acciones' : 'Indicadores de actividad, no de resultado' },
        out: q === 'buena' ? 'Tres números, uno por cada acción y uno general. Si en tres meses no se mueven, sabrás que algo no funcionó.' : 'Uno de tus indicadores mide si se hizo algo, no si sirvió.',
        pro: { ok: 'Un indicador de seguimiento mide el efecto, no la actividad.', risk: 'Contar horas dictadas o «me gustó» no dice si alguien se quedó.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Números que dirán si funcionó!' : 'Actividad no es resultado.'],
      };
    },
    mirada: {
      ve: 'Un tablero que solo describe el problema se mira una vez. Uno que mide si las acciones funcionan se vuelve una herramienta de gestión. La diferencia está en elegir indicadores de resultado, no de actividad.',
      visual: { tipo: 'embudo', titulo: 'De la acción al resultado', niveles: [['Horas de capacitación', 100], ['Supervisores acompañados', 70], ['Equipos con menos renuncias', 40]] },
    },
  },
  {
    id: 'f6', t: '16:20', ch: 'llamada', who: null, titulo: 'Preparar la visita', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Mañana vas con Lucía a Santa Anita. ${F.has('ranking_publico') ? 'El ranking ya circuló. Renzo lo vio.' : F.has('lucia_avisada') ? 'Renzo ya escuchó rumores.' : 'Renzo todavía no sabe nada del análisis.'} Antes, haces dos llamadas.</p>`,
    type: 'calls',
    calls: [['Lucía Ccori · HRBP', 'Contesta: confirma la visita', 'Mañana a las 10, antes de que abran caja. Renzo pidió que no sea delante de su equipo.'], ['Tienda Santa Anita · anexo de supervisión', 'Contesta Renzo', 'Aló… ¿de analítica? ¿Qué es lo que quieren conmigo?']],
    prompt: 'Renzo pregunta qué quieren con él. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que estás entendiendo por qué se van los vendedores en todo Lima, que su tienda es parte de eso y que quieres escuchar su versión: qué necesita, qué le falta.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, flags: ['visita_escucha'], cartera: { visita: 'Mañana 10:00, conversación para escuchar' },
          out: 'Renzo se queda callado unos segundos. «Ya. Las 10 está bien. Les tengo cosas que contar.»',
          pro: { ok: 'Le dices la verdad sin acusarlo y lo invitas a aportar.', info: 'No le muestres el ranking ni números de otras tiendas.' },
          kusi: ['feliz', 'Lo invitaste a contar, no a defenderse.'] } },
      { id: 'b', label: 'Que es una revisión de la rotación de su equipo y que lleve los horarios de los últimos tres meses.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -2, calidad: 1 }, flags: ['visita_auditoria'], cartera: { visita: 'Mañana 10:00, «revisión» del equipo' },
          out: '«¿Revisión? Ya entendí», dice Renzo, y cuelga. Llamará a su jefe de tienda y a Mónica antes de las cinco.',
          pro: { ok: 'Pides información útil.', risk: 'Planteada así, es una auditoría. Llegará a defenderse, no a contarte nada.' },
          kusi: ['preocupado', 'Así suena a juicio.'] } },
    ],
    mirada: { ve: 'Las personas que aparecen en los datos merecen ser escuchadas antes de que su caso se presente. Además, son quienes mejor pueden explicar lo que el número no dice. Cómo planteas la conversación decide si te dan información o excusas.' },
  },
  {
    id: 'f7', t: '17:30', ch: 'presencial', who: null, titulo: 'La prueba del minuto', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Escritorio de Rocío', show: ['calidad', 'confianza'],
    body: () => `<p>Mónica ya vio el tablero a las cinco y dijo «ya, el miércoles lo vemos». Antes de irte, Diego te propone algo: <mark class="clave">mostrárselo un minuto a alguien que nunca lo vio</mark>, y preguntarle qué entendió.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Mostrárselo a Rocío, que no sabe de gráficos, y anotar lo que no entienda.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 2 }, flags: ['prueba_minuto'],
          out: 'Rocío entiende lo de los tres meses al toque, pero pregunta: «¿Qué es "antigüedad del supervisor"?». Cambias la etiqueta a «Meses como supervisor».',
          pro: { ok: 'Quien no conoce el tablero ve lo que tú ya no ves.', info: 'Si tiene que preguntar, la etiqueta está mal, no la persona.' },
          kusi: ['celebra', '¡Rocío, la mejor usuaria de prueba!'] } },
      { id: 'b', label: 'No hace falta: Mónica ya lo vio y no preguntó nada.',
        res: { q: 'aceptable', fx: { tiempo: 2 },
          out: 'Te vas temprano. El miércoles, un gerente preguntará qué significa «antigüedad del supervisor».',
          pro: { ok: 'Ganas una hora.', risk: 'Que alguien no pregunte no significa que haya entendido.' },
          kusi: ['pensando', 'Silencio no es comprensión.'] } },
    ],
    mirada: { ve: 'Quien construye un tablero ya no puede verlo con ojos nuevos. Probarlo con alguien ajeno durante un minuto (¿qué entendiste?, ¿qué harías?) es la forma más barata de evitar confusiones frente a la gerencia.' },
  },
];
