// HR Business Partner · Capítulo 4 · «Los nuevos roles» · Semana 1, jueves.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - Ley 30709, Ley que prohíbe la discriminación remunerativa entre varones y mujeres, art. 2: el empleador debe contar
//   con un cuadro de categorías y funciones.
// - Su reglamento (D.S. 002-2018-TR), arts. 4 y 5: contenido mínimo del cuadro y política salarial basada en criterios
//   objetivos, informada a los trabajadores. Guía referencial aprobada por R.M. 243-2018-TR.
//   https://noticierocontable.com/?p=68536
//   https://sni.org.pe/aprueban-la-guia-contiene-las-pautas-referenciales-pueden-utilizadas-la-organizacion-empleadora-evaluar-puestos-trabajo-definir-cuadro-categorias-funciones/
// - D.S. 007-2002-TR, art. 5 (personal de dirección y no fiscalizado fuera de la jornada máxima), ya citado en el capítulo 3.

export const CAP = {
  n: 4, titulo: 'Los nuevos roles', dia: 'Semana 1, jueves', foto: 'assets/foto/plano-equipo.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:15', cierreHora: '19:00',
  apertura: 'Jueves. Te duelen las piernas de la moto y tienes la nariz pelada por el sol de ayer. A las 9 Mauricio te espera con un plumón en la mano y una pizarra en blanco.', boton: 'Entrar a la sala',
  kusi: 'Un puesto bien diseñado responde a una pregunta: ¿qué problema del negocio resuelve esta persona? ¡Dale!',
  lead: 'Ordenaste cómo se diseña un rol, convenciste (o no) a Mauricio sobre los supervisores, escribiste la ficha del jefe de zona y defendiste criterios objetivos para su banda salarial.',
  reflexion: '¿Diseñaste hoy puestos para el negocio o para las personas que ya conoces?',
  siguiente: { n: 5, titulo: 'El talento', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'plan', p: 'Nueva estructura comercial', j: 'Mauricio · Comercial', d: 3, e: 'Diseño de roles' },
  { id: 'ficha', p: 'Ficha del rol «Jefe/a de zona»', j: 'Mauricio · Comercial', d: 3, e: 'Por escribir' },
  { id: 'banda', p: 'Banda salarial de los nuevos roles', j: 'Gonzalo · Compensaciones', d: 3, e: 'Sin criterios' },
  { id: 'jornada', p: 'Jornada de los vendedores de ruta', j: 'Fiorella · Relaciones Laborales', d: 3, e: 'En revisión' },
];

export const FUTURO = {
  rol_jefe_zona: ['Los supervisores pasan a ser 8 jefes de zona que forman y retienen, más un analista de abastecimiento y crédito.', 'Mañana se elige quién ocupa cada rol. Capítulo 5.'],
  sin_supervisores: ['Aceptaste eliminar a los supervisores: 30 vendedores por coordinador.', 'La rotación lo cobrará en el capítulo 9.'],
  ficha_clara: ['La ficha del jefe de zona incluye la rotación de su equipo como indicador.', 'Será la vara para elegir a las personas. Capítulo 5.'],
  banda_objetiva: ['La banda de los nuevos roles se fijó con criterios del puesto, no de la persona.', 'Gonzalo la defenderá en el capítulo 9.'],
  banda_por_nombre: ['Aceptaste pagar distinto el mismo rol según quién lo ocupe.', 'Saltará cuando dos jefes de zona comparen sueldos. Capítulo 8.'],
  confianza_disfraz: ['Aceptaste llamar «de confianza» a todos los jefes de zona para no pagar horas extras.', 'Fiorella lo observará en el capítulo 6.'],
  confianza_honesta: ['Propusiste definir la jornada de los jefes de zona según lo que de verdad hacen.', 'Capítulo 6.'],
  teo_escuchado: ['Don Teo te contó cómo retiene a su gente y aceptó ser evaluado como todos.', 'Capítulo 5.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  gonzalo: { n: 'Gonzalo Arce', sub: 'Analista de Compensaciones', c: '#2E7D6B' },
  fiorella: { n: 'Fiorella Campos', sub: 'Relaciones Laborales', c: '#8E44AD' },
};

export const WSP = [
  { chat: 'kenji', t: '07:30', de: 'Kenji', txt: 'Hoy Jhon hizo la formación sin gritar. Raro raro 👀', si: 'formacion_frenada' },
  { chat: 'kenji', t: '07:30', de: 'Kenji', txt: 'Hoy en la formación me dijo «japonesito» otra vez. Ya fue, ya me acostumbré.', si: 'formacion_callada' },
  { chat: 'mauricio', t: '08:10', de: 'Mauricio', txt: 'Me quedé pensando en lo del stock. Hoy quiero hablar de roles, pero también de eso.', si: 'informe_ruta' },
  { chat: 'gonzalo', t: '12:20', de: 'Gonzalo', txt: '¿Tienes 15 min? Mauricio me pidió una banda para los jefes de zona y me dio nombres en vez de funciones 😬' },
  { chat: 'fiorella', t: '14:50', de: 'Fiorella', txt: 'Sobre la cláusula séptima: Andrea me dio luz verde para revisar todos los contratos de ruta. Hablamos el lunes.', si: 'jornada_riesgo' },
  { chat: 'andrea', t: '18:55', de: 'Andrea', txt: 'Recibido. Mañana es el día más delicado: nombres. Llega descansada.' },
];

export const CORREOS = [
  { t: '07:50', de: 'Mauricio Lerner', para: 'HR Business Partner · Comercial', asunto: 'Agenda 9:00', html: '<p>Hoy cerramos la nueva estructura. Mi propuesta: elimino a los 12 supervisores y creo 4 coordinadores comerciales con unos 60 vendedores cada uno. Menos capas, más velocidad.</p><p>M.</p>' },
];

export const QUIZ = [
  { q: 'Lo primero al diseñar un puesto nuevo es…', ops: ['Ponerle un nombre atractivo', 'Definir qué problema del negocio resuelve', 'Pensar en quién lo va a ocupar', 'Fijar el sueldo'], ok: 1, por: 'El propósito ordena todo lo demás: funciones, indicadores, perfil y banda.' },
  { q: 'Según la Ley 30709, el empleador debe tener…', ops: ['Un organigrama en la intranet', 'Un cuadro de categorías y funciones con criterios objetivos', 'Un sueldo igual para todos', 'Un comité de sueldos'], ok: 1, por: 'La Ley 30709 y el D.S. 002-2018-TR exigen el cuadro de categorías y funciones y una política salarial.' },
  { q: 'La banda salarial de un rol se fija según…', ops: ['Lo que ganaba antes quien lo ocupe', 'El valor del puesto: responsabilidad, complejidad y condiciones', 'Lo que el gerente prefiera', 'El sexo de la persona'], ok: 1, por: 'Se valora el puesto, no a la persona.' },
  { q: 'Llamar «de confianza» a todos los jefes de zona para no pagar horas extras…', ops: ['Es una buena práctica', 'Es un riesgo: la calificación depende de lo que de verdad hacen', 'Es obligatorio', 'Solo lo decide el jefe'], ok: 1, por: 'La exclusión de la jornada máxima depende de la realidad del puesto, no de la etiqueta.' },
  { q: 'Si cada coordinador tiene 60 vendedores…', ops: ['Podrá formarlos mejor', 'Difícilmente podrá acompañarlos y la rotación puede subir', 'No cambia nada', 'Se eliminan los conflictos'], ok: 1, por: 'Un tramo de control muy amplio reduce el acompañamiento, que es lo que retiene.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'n1', t: '08:15', ch: 'documento', who: null, titulo: 'Antes de la pizarra', banner: 'assets/esc/escalera.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo'],
    body: () => `<p>Lees el correo de Mauricio dos veces: doce supervisores fuera, cuatro coordinadores con sesenta vendedores cada uno. Tienes 45 minutos.</p><p>Antes de discutir cuántas cajas tiene el organigrama, <mark class="clave">ordena cómo se diseña un rol</mark>. Es lo que vas a proponerle.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para diseñar un rol nuevo. Usa las flechas.', boton: 'Llevar este orden',
    items: [
      { id: 'prop', t: 'Definir qué problema del negocio resuelve el rol', por: 'Sin propósito, el rol es una caja en un organigrama.' },
      { id: 'func', t: 'Listar sus funciones principales y lo que deja de hacer otro puesto', por: 'Evita duplicar o dejar huecos.' },
      { id: 'ind', t: 'Fijar cómo se medirá: dos o tres indicadores', por: 'Lo que no se mide, no se gestiona.' },
      { id: 'perfil', t: 'Definir el perfil: conocimientos y competencias necesarias', por: 'El perfil sale de las funciones, no al revés.' },
      { id: 'cat', t: 'Ubicarlo en el cuadro de categorías y fijar su banda', por: 'Con criterios objetivos, como pide la Ley 30709.' },
      { id: 'nombres', t: 'Recién entonces, evaluar quién puede ocuparlo', por: 'Los nombres van al final.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: 1 },
        out: q === 'buena' ? 'Imprimes el orden en una hoja y lo llevas doblado en la libreta. Los nombres quedaron al final, a propósito.' : 'Tienes un orden, aunque algunos pasos se cruzan. Lo ajustas mientras subes la escalera.',
        pro: { ok: 'Diseñar el rol antes de pensar en las personas evita armar puestos a la medida de alguien.', risk: 'Si los nombres van primero, el rol se diseña para premiar o para excluir.', info: 'Lleva este orden impreso: ayuda a frenar al gerente cuando salta a los nombres.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Los nombres, al final!' : 'Casi: primero el para qué.'],
      };
    },
    rules: [[BP, 'Diseña el rol y su medición antes de pensar en quién lo ocupará.'], [LEY, 'Ley 30709: todo empleador debe contar con un cuadro de categorías y funciones.']],
    mirada: {
      ve: 'Las reorganizaciones se tuercen cuando se empieza por los nombres: el puesto termina diseñado para premiar a alguien o para sacar a otro. Empezar por el problema del negocio protege a la empresa y a las personas.',
      visual: { tipo: 'flujo', titulo: 'Cómo se diseña un rol', pasos: ['Propósito', 'Funciones', 'Indicadores', 'Perfil', 'Categoría y banda', 'Personas'], aqui: 0 },
    },
  },
  {
    id: 'n2', t: '09:05', ch: 'presencial', who: 'mauricio', titulo: '«Sin supervisores»', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de la Gerencia Comercial', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => `<p>Mauricio dibuja cuatro cajas grandes en la pizarra. ${F.has('datos_limpios') ? '«Tus números del martes me sirvieron. Por eso te escucho.»' : '«Tus números del martes eran un desorden, pero bueno.»'} ${F.has('informe_ruta') ? 'Luego, más bajo: «Lo del stock me dejó pensando».' : ''}</p><p>«Cuatro coordinadores, sesenta vendedores cada uno. <mark class="clave">Los supervisores son una capa que no vende</mark>. ¿Me ayudas a cerrarlo hoy?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle 8 jefes de zona con unos 30 vendedores, medidos por venta y por rotación de su equipo, y un analista que resuelva stock y crédito.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3, personas: 3 }, rel: { mauricio: 1 }, flags: ['rol_jefe_zona'], cartera: { plan: '8 jefes de zona + 1 analista de abastecimiento y crédito' },
          out: 'Mauricio borra dos cajas y dibuja ocho. «Ocho zonas, como quería. Pero con jefes que formen gente.» Se queda mirando: «Y el analista de stock… eso nadie lo hace hoy». Sin decirlo, cuatro de los doce supervisores y dos asistentes comerciales quedan sin un rol claro.',
          pro: { ok: 'Mauricio consigue sus ocho zonas y menos capas, pero con un rol que ataca la causa de la rotación.', risk: 'Seis personas quedarán sin lugar en la estructura: hay que planificar sus salidas con cuidado.', info: 'Un jefe con 30 vendedores todavía puede acompañarlos en ruta; con 60, solo puede leerles reportes.' },
          kusi: ['celebra', '¡Ocho zonas y una causa atacada!'] } },
      { id: 'b', label: 'Aceptar los cuatro coordinadores: es su área, tiene el mandato del directorio y menos capas es más rápido.',
        res: { q: 'riesgosa', fx: { calidad: -4, personas: -4, confianza: 2 }, rel: { mauricio: 1 }, flags: ['sin_supervisores'], cartera: { plan: '4 coordinadores · 60 vendedores cada uno' },
          out: 'Mauricio cierra el plumón: «Listo. Rápido y simple». En la pizarra quedan cuatro cajas y una línea con «240 vendedores». Doce supervisores quedarán fuera.',
          pro: { ok: 'Mauricio siente que tiene una socia rápida.', risk: 'Nadie podrá acompañar a 60 vendedores en la calle. Lo que viste ayer en la ruta empeorará.' },
          kusi: ['preocupado', 'Sesenta vendedores… ¿quién los forma?'] } },
      { id: 'c', label: 'Pedirle que mantenga los 12 supervisores y que solo cambie las metas.',
        res: { q: 'aceptable', fx: { personas: 2, confianza: -4 }, rel: { mauricio: -1 }, cartera: { plan: 'Mauricio insiste en reducir' },
          out: '«Entonces no cambio nada», dice Mauricio, y te devuelve el plumón. Andrea, que entra en ese momento, te mira como diciendo «así no».',
          pro: { ok: 'Proteges a los supervisores.', risk: 'Sin alternativa, pierdes el lugar en la mesa y Mauricio decidirá solo.' },
          kusi: ['pensando', 'Cuidar a todos… ¿y el negocio?'] } },
    ],
    rules: [[BP, 'Un tramo de control tiene que permitir acompañar: el jefe que no puede ver a su gente en la calle solo puede leer reportes.']],
    mirada: {
      ve: 'Mauricio tiene razón en algo: los supervisores de hoy controlan más de lo que forman. El HRBP no defiende el puesto tal como está; propone uno que sirva al negocio y a las personas. Y asume que alguien no tendrá lugar.',
      visual: { tipo: 'cambio', titulo: 'Del supervisor que controla al jefe que forma', pares: [['12 supervisores', '8 jefes de zona'], ['Mide solo ventas', 'Mide ventas y rotación de su equipo'], ['Fotos cada hora', 'Acompañamiento en ruta'], ['Nadie resuelve el stock', 'Un analista de abastecimiento y crédito']] },
    },
  },
  {
    id: 'n3', t: '10:40', ch: 'documento', who: null, titulo: 'La ficha del jefe de zona', banner: 'assets/esc/idea.webp', lugar: 'Sala de la Gerencia Comercial', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('sin_supervisores') ? 'Aunque Mauricio eligió los coordinadores, Andrea te pide igual una ficha para un rol de jefe de equipo: «Por si esto se cae, que se va a caer».' : 'Mauricio te pide la ficha para el mediodía: «Una página. Si no cabe en una página, no la entiendo».'}</p><p><mark class="clave">Elige las piezas de cada bloque</mark>.</p>`,
    type: 'builder', prompt: 'Arma la ficha del rol «Jefe/a de zona».', boton: 'Guardar la ficha',
    bloques: [
      { id: 'prop', t: 'Propósito', n: 1, ops: [
        { id: 'p1', t: 'Lograr la venta de su zona formando y reteniendo a un equipo de unos 30 vendedores.', ok: true, por: 'Pone venta y personas en la misma frase.' },
        { id: 'p2', t: 'Controlar que los vendedores cumplan sus rutas.', ok: false, por: 'Es lo que ya hacen los supervisores y no funciona.' },
      ] },
      { id: 'func', t: 'Funciones', n: 2, ops: [
        { id: 'f1', t: 'Acompañar en ruta a cada vendedor al menos una vez al mes.', ok: true, por: 'Lo que viste ayer: el acompañamiento es lo que falta.' },
        { id: 'f2', t: 'Coordinar con el analista de abastecimiento los quiebres de stock de su zona.', ok: true },
        { id: 'f3', t: 'Leer los resultados de cada vendedor en la formación diaria.', ok: false, por: 'Exponer resultados en público no forma: humilla.' },
      ] },
      { id: 'ind', t: 'Indicadores', n: 2, ops: [
        { id: 'i1', t: 'Venta de la zona frente a la meta.', ok: true },
        { id: 'i2', t: 'Renuncias voluntarias de su equipo en el año.', ok: true, por: 'El indicador que hoy nadie mide y que más cuesta.' },
        { id: 'i3', t: 'Número de fotos de exhibición enviadas al grupo.', ok: false, por: 'Mide actividad, no resultado.' },
      ] },
      { id: 'perfil', t: 'Perfil', n: 1, ops: [
        { id: 'pe1', t: 'Experiencia en ventas de ruta y en formar equipos; trato respetuoso demostrado.', ok: true },
        { id: 'pe2', t: 'Menor de 45 años, con energía para la calle.', ok: false, por: 'Un límite de edad es discriminatorio (Ley 26772) y no dice nada del desempeño.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .83 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 2 },
        flags: q === 'buena' ? ['ficha_clara'] : [], cartera: { ficha: q === 'buena' ? 'Ficha lista: venta + rotación como indicadores' : 'Ficha con huecos' },
        out: q === 'buena' ? 'La ficha cabe en una página. Mauricio lee el indicador de rotación y levanta la ceja: «Con esto, Jhon no la tiene fácil». No es una pregunta.' : 'La ficha queda, pero algunas piezas no ayudan a elegir bien mañana.',
        pro: { ok: 'Una ficha que mide venta y rotación hace visible lo que antes no costaba.', risk: 'Un perfil con edad o funciones de control repite el problema con otro nombre.', info: 'Mañana, esta ficha será la vara para elegir a las personas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una página que cambia la vara!' : 'Revisa qué mide de verdad.'],
      };
    },
    rules: [[LEY, 'Un perfil no puede excluir por edad (Ley 26772).'], [BP, 'Mide al jefe por lo que logra con su gente, no solo por lo que vende.']],
    mirada: {
      ve: 'Lo que se mide define cómo se comporta un jefe. Durante años, Nutrimás premió a quien vendía aunque quemara a su gente. Poner la rotación en la ficha es cambiar las reglas del juego sin despedir a nadie.',
      visual: { tipo: 'balanza', a: { t: 'Lo que se medía', items: ['Venta', 'Fotos enviadas'] }, b: { t: 'Lo que se medirá', items: ['Venta frente a la meta', 'Renuncias de su equipo', 'Acompañamiento en ruta'] } },
    },
  },
  {
    id: 'n4', t: '12:30', ch: 'llamada', who: null, titulo: 'La banda', banner: 'assets/3d/scenes/balanza.webp', lugar: 'Llamada con Gonzalo, Compensaciones', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Gonzalo te llama comiendo un tamal en su escritorio. «Mauricio quiere que Jhon gane más que los otros jefes "porque vende más", y que a los que vengan de afuera se les pague "lo que pidan".»</p><p>Tienes que proponerle a Gonzalo <mark class="clave">tres criterios para valorar el puesto</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres criterios con los que se fijará la banda del jefe de zona.', boton: 'Usar estos criterios', resumen: 'Elegiste',
    cols: ['Criterio', 'Qué mide'],
    rows: [
      { id: 'resp', cells: ['Responsabilidad sobre personas y resultados', 'Cuántas personas y cuánta venta depende del rol'] },
      { id: 'compl', cells: ['Complejidad de las decisiones', 'Qué tan difíciles son los problemas que resuelve'] },
      { id: 'cond', cells: ['Condiciones de trabajo', 'Calle, horarios, riesgo de moto'] },
      { id: 'quien', cells: ['Lo que ganaba antes la persona que lo ocupe', 'Su historia salarial'] },
      { id: 'pide', cells: ['Lo que pida el candidato externo', 'Su capacidad de negociar'] },
    ],
    score: { resp: 3, compl: 3, cond: 2, quien: -3, pide: -3 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, etica: q === 'buena' ? 3 : -2 }, rel: { mauricio: q === 'buena' ? -1 : 0 },
        flags: [q === 'buena' ? 'banda_objetiva' : 'banda_por_nombre'], cartera: { banda: q === 'buena' ? 'Una banda para el puesto; el desempeño se premia con la variable' : 'Banda según quién ocupe el rol' },
        out: q === 'buena' ? 'Gonzalo arma una sola banda para el jefe de zona. «Si Jhon vende más, que gane más comisión, no otro sueldo por el mismo puesto.» Mauricio refunfuña, pero firma.' : 'Gonzalo arma la banda como le pidieron. «Esto no lo defiendo ante un inspector», murmura.',
        pro: { ok: 'Se valora el puesto, no a la persona: el desempeño se premia con la parte variable.', risk: 'Pagar distinto el mismo puesto según quién lo ocupe abre la puerta a la discriminación y a reclamos.', info: 'La política salarial se informa a los trabajadores junto con el cuadro de categorías (D.S. 002-2018-TR).' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Criterios que se pueden explicar!' : '¿Cómo le explicas esto a un inspector?'],
      };
    },
    rules: [[LEY, 'Ley 30709 y D.S. 002-2018-TR: cuadro de categorías y funciones y política salarial con criterios objetivos.']],
    mirada: {
      ve: 'Un sueldo que nadie puede explicar genera desconfianza aunque sea legal. La banda se fija por lo que el puesto exige; lo que la persona aporta de más se reconoce en su variable y en su carrera.',
      visual: { tipo: 'rango', titulo: 'Banda del jefe de zona (ilustrativa)', min: 0, max: 100, banda: [40, 70], marcas: [['Ingreso al rol', 40], ['Jefe con experiencia', 60], ['Pedido de Mauricio para Jhon', 85]] },
      normas: [{ ley: 'Ley 30709 y D.S. 002-2018-TR', dice: 'El empleador debe contar con un cuadro de categorías y funciones y con una política salarial basada en criterios objetivos, que informa a los trabajadores.', practica: 'Dos jefes de zona con las mismas funciones están en la misma categoría y en la misma banda.' }],
    },
  },
  {
    id: 'n5', t: '15:10', ch: 'presencial', who: 'andrea', titulo: '«Que sean de confianza»', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de Andrea, con Fiorella', show: ['cumplimiento', 'etica', 'confianza'],
    body: (n, F) => `<p>Fiorella, de Relaciones Laborales, llega con su laptop y su termo de mate de coca. ${F.has('jornada_riesgo') ? '«Lo de la cláusula séptima era real. Si un vendedor reclama horas extras, perdemos.»' : '«Revisé los contratos de ruta. Hay cosas que no me gustan.»'}</p><p>Andrea lee un mensaje de Mauricio en voz alta: «Que los jefes de zona sean de confianza, así no hay horas extras». <mark class="clave">Te miran a ti</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Proponer que la jornada de los jefes de zona se defina según lo que de verdad harán, y que Fiorella revise caso por caso si alguno es personal de dirección o de confianza.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3 }, rel: { andrea: 1 }, flags: ['confianza_honesta'], cartera: { jornada: 'Jornada definida según la realidad del puesto' },
          out: 'Fiorella asiente: «Así sí lo puedo defender». Andrea le responde a Mauricio: «Lo vemos con Legal, te damos una propuesta el lunes».',
          pro: { ok: 'La calificación se apoya en lo que el puesto es, no en lo que conviene.', info: 'Un jefe con horario fijo de formación y control desde la gerencia difícilmente queda fuera de la jornada máxima.' },
          kusi: ['feliz', 'Etiqueta honesta, riesgo menor.'] } },
      { id: 'b', label: 'Aceptar: si ganan más, es razonable que no tengan horario.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -2 }, flags: ['confianza_disfraz'], cartera: { jornada: 'Todos «de confianza»: riesgo de horas extras' },
          out: 'Fiorella cierra la laptop. «Lo dejo anotado: no estoy de acuerdo.» Andrea no dice nada, pero tampoco lo firma.',
          pro: { ok: 'Mauricio queda contento.', risk: 'Una etiqueta que no se corresponde con la realidad repite el problema de la cláusula séptima, ahora con los jefes.' },
          kusi: ['preocupado', 'Otra etiqueta que no aguanta un día de calle…'] } },
    ],
    rules: [[LEY, 'D.S. 007-2002-TR, art. 5, y D.S. 008-2002-TR, arts. 10 y 11: quedan fuera de la jornada máxima el personal de dirección, de confianza, no fiscalizado o intermitente; la calificación depende de lo que el puesto realmente es.']],
    mirada: { ve: 'Las etiquetas laborales no se eligen por conveniencia. Ayer viste que el papel y la calle no coincidían; hoy tienes la oportunidad de que el nuevo rol nazca sin esa trampa.' },
  },
  {
    id: 'n6', t: '17:20', ch: 'llamada', who: null, titulo: 'Don Teo', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Llamada desde Chosica', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Te llama Teodoro Quispe, el supervisor de Chosica. ${F.has('teo_conocido') ? 'Te acuerdas de lo que dijo Andrea: la zona con menos rotación de Lima.' : 'En el Excel aparecía como el supervisor de más edad.'} Te saluda con un «allillanchu» y se ríe.</p><p>«Señorita, tengo 61 años. Dicen que los supervisores se acaban y que los viejos primero. <mark class="clave">¿Me voy preparando?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que la edad no es un criterio, que todos serán evaluados con la misma ficha y preguntarle cómo hace para que su gente no se vaya.',
        res: { q: 'buena', fx: { personas: 4, etica: 3, calidad: 2 }, flags: ['teo_escuchado'],
          out: 'Don Teo habla veinte minutos: acompaña a cada vendedor nuevo dos semanas, conoce a sus familias y les cambia la ruta cuando alguien se enferma. «No es magia, es estar.» Anotas todo.',
          pro: { ok: 'No le prometes el puesto, pero le aseguras un proceso justo. Y aprendes de quien mejor retiene.', info: 'Lo que hace don Teo es justo lo que pide la ficha del jefe de zona.' },
          kusi: ['celebra', '«No es magia, es estar.» ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle que no se preocupe, que con su experiencia seguro se queda.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: 1 },
          out: 'Don Teo se despide aliviado. Tú no sabes si eso es verdad.',
          pro: { ok: 'Le das calma.', risk: 'Prometes un resultado que no depende de ti, como el lunes con Susana.' },
          kusi: ['preocupado', 'Otra promesa que no es tuya…'] } },
    ],
    rules: [[LEY, 'La edad no es un criterio de selección ni de salida (Ley 26772).']],
    mirada: { ve: 'Don Teo tiene la rotación más baja de Lima y la edad más alta. Si el criterio hubiera sido «los más antiguos primero», la empresa habría perdido a quien mejor sabe retener vendedores.' },
  },
  {
    id: 'n7', t: '18:30', ch: 'correo', who: null, titulo: 'Para mañana', banner: 'assets/esc/reloj.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>Andrea te pide un correo corto para Mauricio y para ella, con la propuesta de mañana: cómo se elige a las personas. <mark class="clave">Mauricio ya tiene «sus nombres»</mark>, y lo sabes.</p>`,
    type: 'compose', enviaA: 'andrea', para: 'Para: Andrea Salazar, con copia a Mauricio Lerner', boton: 'Enviar el correo',
    prompt: 'Arma el correo eligiendo una frase de cada parte.',
    slots: [
      { id: 'metodo', t: 'Cómo elegimos', ops: [
        { id: 'm1', t: 'Mañana evaluamos a los 12 supervisores con la ficha del jefe de zona: venta, rotación de su equipo y acompañamiento.', ok: true, por: 'La misma vara para todos.' },
        { id: 'm2', t: 'Mañana Mauricio nos dice a quiénes quiere y lo formalizamos.', ok: false, por: 'Los nombres antes que los criterios.' },
      ] },
      { id: 'quien', t: 'Quiénes evalúan', ops: [
        { id: 'q1', t: 'Lo hacemos entre Mauricio, Andrea y yo, con datos a la vista.', ok: true, por: 'Más de una mirada reduce los sesgos.' },
        { id: 'q2', t: 'Lo hago yo sola para que sea rápido.', ok: false, por: 'Una sola mirada es más fácil de cuestionar.' },
      ] },
      { id: 'despues', t: 'Lo que viene', ops: [
        { id: 'd1', t: 'Y el lunes vemos con cuidado qué pasa con quienes no entren.', ok: true, por: 'Nadie queda en el aire.' },
        { id: 'd2', t: 'Los que no entren, que se acomoden.', ok: false, por: 'Así empiezan los juicios.' },
      ] },
    ],
    res: sel => {
      const buenas = ['m1', 'q1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : -1, tiempo: 1 }, rel: { andrea: q === 'buena' ? 1 : 0 },
        envia: ['andrea', q === 'buena' ? 'Andrea: «Bien. Mauricio contestó con un "ok, pero mis nombres van a salir igual". Ya veremos.»' : 'Andrea: «Recibido.»'],
        out: q === 'buena' ? 'Mauricio responde en un minuto: «Ok. Pero mis nombres van a salir igual». Mañana se verá.' : 'El correo sale. Nadie responde.',
        pro: { ok: 'Fijas las reglas antes del partido.', info: 'Lleva mañana los datos de rotación de cada supervisor impresos.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Reglas claras antes de los nombres.' : 'Mañana te van a hacer falta reglas.'],
      };
    },
    rules: [[BP, 'Acuerda los criterios y quiénes evalúan antes de hablar de nombres.']],
    mirada: { ve: 'Mañana es el día en que la reorganización se vuelve personal. Lo que acuerdes hoy por escrito es lo que te va a sostener cuando Mauricio llegue con su lista.' },
  },
];
