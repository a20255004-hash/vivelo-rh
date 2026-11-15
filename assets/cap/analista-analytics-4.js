// Analista de People Analytics · Capítulo 4 · «El hallazgo» · Semana 1, jueves.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 2 num. 5 (datos sensibles), art. 7 (proporcionalidad), art. 17 (confidencialidad).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 003-97-TR (TUO del D.Leg. 728), art. 30 literal e): el faltamiento grave de palabra es acto de hostilidad.
// Las cifras del análisis son ficticias y propias de la historia.

export const CAP = {
  n: 4, titulo: 'El hallazgo', dia: 'Semana 1, jueves', foto: 'assets/esc/lupa.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo',
  inicio: '08:15', fin: '19:10', cierreHora: '18:55',
  apertura: 'Jueves. La base está limpia y las pistas apuntan a los supervisores. Hoy toca ponerlas a prueba.', boton: 'Abrir Power BI',
  kusi: 'Encontrar algo es fácil. Que sea verdad es otra cosa. ¡Con calma!',
  lead: 'Cruzaste las variables correctas, desconfiaste de tu propio gráfico, probaste que el patrón aguanta y supiste cómo nombrarlo sin señalar a una sola persona.',
  reflexion: '¿Qué harías si el dato señala a alguien que todos admiran?',
  siguiente: { n: 5, titulo: 'La privacidad', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'analisis', p: 'Análisis de rotación', j: 'Tú', d: 3, e: 'Por empezar' },
  { id: 'supervisores', p: 'Rotación por supervisor', j: 'Tú', d: 3, e: 'Hipótesis de Lucía' },
  { id: 'sueldo', p: 'Hipótesis del sueldo', j: 'Mónica', d: 3, e: 'Sin probar' },
  { id: 'comite', p: 'Comité de gerencia', j: 'Mónica', d: 3, e: 'En 6 días hábiles' },
];

export const FUTURO = {
  variables_sensibles: ['Cruzaste rotación con variables que no necesitabas.', 'Diego te pedirá retirarlas del tablero.'],
  analisis_cuidado: ['Corregiste tu propio gráfico antes de que alguien lo viera.', 'Tus números aguantarán preguntas en el comité.'],
  hallazgo_patron: ['Nombraste el hallazgo como un patrón: supervisores nuevos sin formación.', 'Renzo será un caso, no un culpable.'],
  hallazgo_renzo: ['Nombraste el hallazgo como «el problema es Renzo».', 'Mónica pedirá su cabeza o defenderá a su estrella.'],
  hallazgo_oculto: ['Bajaste el tono del hallazgo para no incomodar.', 'El comité no sabrá lo más importante.'],
  robustez_ok: ['Probaste que el patrón se mantiene en tiendas comparables.', 'Nadie podrá decir «es porque la tienda es nueva».'],
  lucia_espera: ['Le pediste a Lucía esperar antes de ir a hablar con Renzo.', 'Iremos juntas el martes.'],
  lucia_avisada: ['Le diste a Lucía el nombre de Renzo antes de validar.', 'Renzo se enterará por el pasillo.'],
  monica_honesta: ['Le dijiste a Mónica que el sueldo pesa menos de lo que cree.', 'Llega preparada a la sorpresa.'],
  monica_sueldo_ok: ['Le confirmaste a Mónica que «sí, influye el sueldo».', 'Es verdad a medias.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
  rocio: { n: 'Rocío Quispe', sub: 'Analista de Planillas', c: '#8A5A2B' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Exvendedora · tienda Santa Anita', c: '#C0572B' },
};

export const WSP = [
  { chat: 'yesenia', t: '07:50', de: 'Yesenia', txt: 'Buenos días, señorita. Anoche me escribió una amiga que sigue en Santa Anita: dice que ayer renunciaron dos más 😔', si: 'yesenia_confia' },
  { chat: 'rocio', t: '09:30', de: 'Rocío', txt: 'Te dejé la tablita con las fechas de ascenso de cada supervisor. La armé de memoria y con las adendas, revisa por si acaso 🙏', si: 'rocio_aliada' },
  { chat: 'lucia', t: '15:20', de: 'Lucía', txt: 'Ya. Espero tu señal. Pero no me hagas esperar mucho, que la gente sigue yéndose.', si: 'lucia_espera' },
  { chat: 'monica', t: '17:40', de: 'Mónica', txt: '¿Supervisores? Mis supervisores son mis mejores vendedores. Mañana me explicas eso con calma.', si: 'monica_honesta' },
  { chat: 'equipo', t: '18:50', de: 'Diego', txt: 'Hoy hiciste el trabajo más difícil: dudar de lo que encontraste. Descansa.' },
];

export const CORREOS = [
  { t: '08:20', de: 'Diego Paz', para: 'Analista de People Analytics', asunto: 'Hoy: probar, no confirmar', html: '<p>Hoy cruzas rotación con supervisores. Una regla de la casa: cuando algo salte a la vista, intenta matarlo. Si sobrevive a tus intentos, recién es un hallazgo.</p><p>Diego</p>' },
  { t: '12:05', de: 'Finanzas · Control de Gestión', para: 'Analista de People Analytics; Diego Paz', asunto: 'Costo de reemplazo por vendedor', html: '<p>Según nuestro último cálculo interno, reemplazar a un vendedor (reclutamiento, inducción y curva de ventas) cuesta a la empresa alrededor de tres sueldos mensuales. Con las cifras de rotación, el costo anual es significativo.</p>' },
];

export const QUIZ = [
  { q: 'El equipo de un supervisor tiene 150 % de rotación. Antes de concluir algo, revisas…', ops: ['Nada: el número es clarísimo', 'Si su tienda, turno o antigüedad son comparables con otras', 'Su vida personal', 'Su sueldo'], ok: 1, por: 'Comparar con casos parecidos descarta otras explicaciones.' },
  { q: 'Que dos cosas ocurran juntas en los datos significa que…', ops: ['Una causa la otra', 'Están relacionadas y hay que investigar por qué', 'No significa nada', 'Hay un error'], ok: 1, por: 'Correlación no es causalidad: es una pista.' },
  { q: 'Un porcentaje calculado sobre 4 personas…', ops: ['Es tan confiable como uno sobre 400', 'Puede cambiar muchísimo con un solo caso', 'Es mejor porque es más preciso', 'Debe redondearse'], ok: 1, por: 'Con bases chicas, una persona mueve el porcentaje 25 puntos.' },
  { q: 'Encuentras que los supervisores ascendidos hace menos de seis meses tienen más rotación. ¿Cómo lo nombras?', ops: ['Los nuevos son malos', 'Un patrón: supervisores nuevos sin formación pierden más gente', 'Hay que despedirlos', 'Mejor no decirlo'], ok: 1, por: 'Un patrón apunta a un sistema que se puede cambiar, no a culpables.' },
  { q: 'Para analizar rotación, cruzar con la religión o afiliación sindical de los vendedores…', ops: ['Da más contexto', 'No es necesario y son datos sensibles', 'Es obligatorio', 'Solo si son anónimos'], ok: 1, por: 'Son datos sensibles (Ley 29733, art. 2, num. 5) y no responden tu pregunta.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:35', ch: 'documento', who: null, titulo: 'Qué cruzar primero', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'etica', 'tiempo'],
    body: () => `<p>Power BI tarda en abrir, como siempre. Tienes la base limpia: 1,240 vendedores en promedio, 720 salidas, y decenas de columnas.</p><p>Si cruzas todo con todo, mañana seguirás aquí. Eliges <mark class="clave">tres cruces</mark> para la mañana.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres cruces que haces primero.', boton: 'Cruzar estos', resumen: 'Cruzaste',
    cols: ['Cruce', 'Por qué'],
    rows: [
      { id: 'sup', cells: ['Rotación por supervisor y por su antigüedad en el puesto', 'La pista de las entrevistas y de Lucía'] },
      { id: 'perm', cells: ['Renuncias según meses de permanencia', 'Casi la mitad se va antes del tercer mes'] },
      { id: 'comis', cells: ['Comisiones de quienes se fueron vs. quienes se quedaron', 'La hipótesis de Mónica'] },
      { id: 'tienda', cells: ['Rotación por tienda', 'Útil, pero mezcla muchos supervisores'] },
      { id: 'sind', cells: ['Rotación según afiliación sindical', 'Alguien dijo que «los del sindicato se van menos»'] },
      { id: 'edad', cells: ['Rotación por edad y estado civil', 'Por curiosidad'] },
    ],
    score: { sup: 3, perm: 3, comis: 3, tienda: 1, sind: -4, edad: -2 },
    res: (picks, sc) => {
      const sens = picks.includes('sind') || picks.includes('edad');
      const q = sens ? 'riesgosa' : sc >= 9 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: sens ? -4 : 2, tiempo: q === 'buena' ? 1 : -1 },
        flags: sens ? ['variables_sensibles'] : [], cartera: { analisis: picks.length + ' cruces hechos' },
        out: q === 'buena' ? 'A media mañana tienes tres gráficos. Uno te hace dejar el café: la rotación del equipo de Renzo Villanueva, supervisor en Santa Anita, es de 150 %.' : sens ? 'Diego ve el gráfico de afiliación sindical y lo cierra él mismo: «Esto no responde nuestra pregunta y no lo vamos a tener ni en borrador».' : 'Avanzas, pero sin el cruce más importante tardas más en ver el patrón.',
        pro: { ok: 'Cada cruce prueba una hipótesis concreta.', risk: 'La afiliación sindical es un dato sensible. Cruzarla con rotación puede leerse como seguimiento a sindicalizados.' },
        kusi: [sens ? 'indignado' : q === 'buena' ? 'sorpresa' : 'pensando', sens ? '¡El sindicato no es una variable de curiosidad!' : q === 'buena' ? '¡150 %!' : 'Falta el cruce clave.'],
      };
    },
    rules: [[LEY, 'La afiliación sindical y las convicciones son datos sensibles (Ley 29733, art. 2, num. 5).'], [LEY, 'Solo se trata lo adecuado, relevante y no excesivo (Ley 29733, art. 7).']],
    mirada: {
      ve: 'Las hipótesis ordenan el análisis: cada cruce existe porque alguien propuso una explicación. «Cruzar por curiosidad» con datos sensibles no es exploración: es riesgo sin propósito.',
      visual: { tipo: 'balanza', a: { t: 'Cruzar todo con todo', items: ['Muchos gráficos', 'Datos sensibles expuestos', 'Hallazgos por azar'] }, b: { t: 'Cruzar por hipótesis', items: ['Supervisor', 'Permanencia', 'Sueldo'] } },
    },
  },
  {
    id: 'd2', t: '10:20', ch: 'documento', who: null, titulo: 'Tu propio gráfico', banner: 'assets/foto/revisa.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Antes de mostrarle nada a Diego, haces lo que él pidió: <mark class="clave">intentar matar tu hallazgo</mark>. Relees las notas que escribiste junto a tus gráficos.</p>`,
    type: 'flag', prompt: 'Marca las afirmaciones de tu borrador que tienen un error de análisis.',
    doc: { t: 'Borrador de hallazgos · jueves', sub: 'Notas junto a los gráficos de Power BI' },
    lines: [
      { id: 'n4', t: '«El supervisor de la tienda de Chiclayo tiene 100 % de rotación: lo peor del país.»', bad: BP, why: 'Su equipo tiene 4 vendedores. Una sola salida mueve 25 puntos. Con bases tan chicas no se ordena a nadie.' },
      { id: 'causa', t: '«Renzo causa las renuncias.»', bad: BP, why: 'Los datos muestran que van juntos, no por qué. Puede haber otra explicación: la tienda, el turno, la sección.' },
      { id: 'nueva', t: '«Santa Anita tiene el doble de rotación que San Isidro.»', bad: BP, why: 'Santa Anita abrió hace un año y tiene patio constructor y turno noche. Compárala con tiendas parecidas.' },
      { id: 'perm', t: '«El 47 % de las renuncias ocurre antes del tercer mes de trabajo.»' },
      { id: 'sueldo', t: '«Las comisiones de quienes renunciaron son 4 % más bajas que las de quienes se quedan.»' },
      { id: 'todos', t: '«Todos los que se van tienen el mismo supervisor.»', bad: BP, why: 'El equipo de Renzo explica 21 de 720 salidas. Es el caso más visible, no la explicación de todo.' },
    ],
    res: ({ hitsBp, falsos }) => ({
      q: hitsBp >= 3 && !falsos ? 'buena' : hitsBp >= 2 ? 'aceptable' : 'riesgosa',
      out: hitsBp >= 3 ? 'Tachas cuatro frases. Lo que queda es menos espectacular, y mucho más sólido.' : 'Corriges algunas frases, pero en tu borrador todavía hay conclusiones que los datos no sostienen.',
      flags: hitsBp >= 3 ? ['analisis_cuidado'] : [],
      fx: { calidad: hitsBp >= 3 ? 5 : 0, confianza: hitsBp >= 3 ? 2 : 0 },
      cartera: { analisis: hitsBp >= 3 ? 'Borrador depurado: 2 hallazgos sólidos' : 'Borrador con afirmaciones débiles' },
      pro: { ok: 'El primer escéptico de tu análisis tienes que ser tú.', risk: 'Un solo error de bulto en el comité basta para que descarten todo lo demás.' },
      kusi: hitsBp >= 3 ? ['celebra', '¡Lo que sobrevive es lo que vale!'] : ['pensando', 'Aún hay frases que no aguantan.'],
    }),
    rules: [[BP, 'No ordenes ni compares porcentajes de grupos muy pequeños.'], [BP, 'Que dos cosas vayan juntas no prueba que una cause la otra.']],
    mirada: {
      ve: 'Los errores de análisis más comunes no son de fórmula: son de lectura. Porcentajes sobre cuatro personas, causas que son solo coincidencias y comparaciones entre cosas que no se parecen. El buen analista los busca en su propio trabajo antes que nadie.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al hallazgo', pares: [['«Chiclayo es lo peor»', 'Grupos de menos de 5: no se ordenan'], ['«Renzo causa las renuncias»', 'Van juntos: hay que entender por qué'], ['«Todos tienen el mismo supervisor»', 'Renzo explica 21 de 720 salidas']] },
    },
  },
  {
    id: 'd3', t: '12:00', ch: 'documento', who: null, titulo: 'Intentar matarlo', banner: 'assets/esc/pendulo.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Si el hallazgo es «los supervisores nuevos pierden más gente», alguien dirá que es por la tienda, por el turno o por la sección. Ordenas <mark class="clave">cómo vas a ponerlo a prueba</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la prueba. Usa las flechas.', boton: 'Correr la prueba',
    items: [
      { id: 'def', t: 'Definir «supervisor nuevo»: menos de seis meses en el puesto', por: 'Sin definición, cada quien mide otra cosa.' },
      { id: 'min', t: 'Dejar fuera equipos de menos de 5 vendedores', por: 'Así una sola salida no distorsiona.' },
      { id: 'comp', t: 'Comparar nuevos vs. antiguos dentro de tiendas parecidas (tamaño, antigüedad, turno)', por: 'Lo que compara peras con peras.' },
      { id: 'tipo', t: 'Repetir solo con renuncias, sin despidos ni fines de contrato', por: 'Es lo que la persona decidió.' },
      { id: 'dudas', t: 'Anotar lo que la prueba no puede descartar', por: 'Las limitaciones también se reportan.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -2, tiempo: -1 },
        flags: q === 'riesgosa' ? [] : ['robustez_ok'], cartera: { supervisores: q === 'riesgosa' ? 'Patrón sin probar' : 'Patrón probado en tiendas comparables' },
        out: q === 'riesgosa' ? 'Corres la comparación antes de definir qué es «nuevo». Los resultados cambian cada vez que mueves el corte.' : 'El patrón sobrevive: en tiendas comparables, los equipos con supervisor nuevo tienen 92 % de rotación; con supervisor de más de un año, 41 %. De los 8 supervisores con más rotación, 6 fueron ascendidos hace menos de seis meses sin ninguna formación.',
        pro: { ok: 'Definir, filtrar, comparar lo comparable y anotar las dudas.', risk: 'Sin una prueba ordenada, cualquiera puede deshacer tu hallazgo con una pregunta.', info: 'Lo que no puedes descartar (por ejemplo, que a los nuevos les den los peores turnos) se dice en voz alta.' },
        kusi: [q === 'riesgosa' ? 'preocupado' : 'celebra', q === 'riesgosa' ? 'El orden de la prueba importa.' : '¡Sobrevivió! Ahora sí es un hallazgo.'],
      };
    },
    mirada: {
      ve: 'Lo que parecía «un supervisor» resultó ser «una forma de ascender»: al mejor vendedor lo hacen jefe sin enseñarle a serlo. Es un hallazgo más incómodo para la empresa, y mucho más útil.',
      visual: { tipo: 'rango', titulo: 'Rotación según antigüedad del supervisor', min: 0, max: 160, banda: [41, 92], marcas: [['Más de un año', 41], ['Promedio empresa', 58], ['Menos de seis meses', 92], ['Equipo de Renzo', 150]] },
    },
  },
  {
    id: 'd4', t: '14:30', ch: 'presencial', who: 'diego-pa', titulo: 'Cómo se nombra', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala pequeña del piso 3', show: ['etica', 'calidad', 'confianza'],
    body: () => `<p>Diego mira tu gráfico en silencio. Renzo Villanueva es el supervisor que Mónica pone de ejemplo: tercer mejor vendedor del país antes de su ascenso, con foto en el mural del aniversario.</p><p>«El dato está. Ahora viene lo difícil: <mark class="clave">cómo lo vas a nombrar</mark> frente a Mónica.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Como un patrón: «Los supervisores ascendidos sin formación pierden el doble de gente». Santa Anita es el caso más visible, sin exponer a Renzo por su nombre.',
        res: { q: 'buena', fx: { etica: 5, calidad: 3, confianza: 2 }, rel: { 'diego-pa': 1 }, flags: ['hallazgo_patron'],
          out: 'Diego asiente: «Eso se puede cambiar. Y no convierte a Renzo en el villano de una historia que lo excede».',
          pro: { ok: 'Apuntas al sistema que produce el problema.', risk: 'Mónica puede preguntar «¿quién?». Prepárate para no responder con un nombre en el comité.', info: 'Antes de presentarlo, alguien tiene que escuchar a Renzo.' },
          kusi: ['celebra', 'El problema es cómo ascienden, no una persona.'] } },
      { id: 'b', label: 'Directo: «El equipo de Renzo Villanueva tiene 150 % de rotación». Los datos son los datos y la gerencia debe saberlo.',
        res: { q: 'riesgosa', fx: { calidad: 1, etica: -3, personas: -3 }, flags: ['hallazgo_renzo'],
          out: 'El dato es exacto. Pero la historia que cuenta es otra: un culpable, en lugar de una forma de ascender que repite el problema en seis tiendas más.',
          pro: { ok: 'Es transparente.', risk: 'Poner un nombre convierte un problema de sistema en un juicio a una persona, que no ha sido escuchada.' },
          kusi: ['preocupado', '¿Y los otros cinco?'] } },
      { id: 'c', label: 'Suavizarlo: «Hay variaciones de rotación entre equipos». Renzo es la estrella de Mónica y aún falta mucho por saber.',
        res: { q: 'aceptable', fx: { confianza: 1, calidad: -3, etica: -2 }, flags: ['hallazgo_oculto'],
          out: 'Nadie se molestará con esa frase. Tampoco nadie hará nada con ella.',
          pro: { ok: 'Evitas un conflicto temprano.', risk: 'Un hallazgo que no se entiende no cambia nada. Las renuncias seguirán.' },
          kusi: ['pensando', '«Variaciones»… ¿y las personas que se van?'] } },
    ],
    rules: [[BP, 'Presenta los hallazgos como patrones que se pueden cambiar, no como culpables.'], [LEY, 'Los gritos o el faltamiento grave de palabra a un trabajador son actos de hostilidad (D.S. 003-97-TR, art. 30, e).']],
    mirada: {
      ve: 'Los relatos de gritos y maltrato no son menores: la ley laboral considera el faltamiento grave de palabra un acto de hostilidad. Pero tu análisis no es una investigación disciplinaria. Nombrar el patrón permite actuar sobre todos los supervisores; señalar a uno solo, sin escucharlo, solo cambia de villano.',
      visual: { tipo: 'balanza', a: { t: 'Nombrar a Renzo', items: ['Fácil de entender', 'Un culpable', 'Seis casos más invisibles'] }, b: { t: 'Nombrar el patrón', items: ['Ascensos sin formación', 'Siete equipos afectados', 'Una acción posible'] } },
      normas: [{ ley: 'D.S. 003-97-TR, art. 30, e)', dice: 'Son actos de hostilidad equiparables al despido, entre otros, el acto de violencia o el faltamiento grave de palabra en agravio del trabajador.', practica: 'Lo que Yesenia contó tiene un nombre en la ley. Por eso también importa canalizarlo bien.' }],
    },
  },
  {
    id: 'd5', t: '15:10', ch: 'llamada', who: null, titulo: 'Lucía quiere ir hoy', banner: 'assets/foto2/caminan.webp', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Lucía te llama desde un taxi en la Carretera Central. Vio de reojo tu gráfico en la mañana.</p><p>«Es Renzo, ¿no? Dime nomás y <mark class="clave">voy hoy mismo a Santa Anita</mark> a hablar con él. Ya renunciaron dos más.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle que espere al martes: el patrón es de siete equipos, tú todavía no hablaste con Renzo, y puedes ir con ella a escucharlo.',
        res: { q: 'buena', fx: { etica: 4, personas: 2, confianza: 2 }, flags: ['lucia_espera'],
          out: '«Ya, el martes vamos juntas», dice Lucía, no muy convencida. Cuelga para atender otra llamada.',
          pro: { ok: 'Proteges el análisis y a Renzo hasta escucharlo.', risk: 'Lucía tiene prisa por las personas que siguen yéndose. Tiene razón en parte.', info: 'Si hay un caso concreto de maltrato hoy, ese sí va por el canal de RR.HH., sin esperar el análisis.' },
          kusi: ['animo', 'Escuchar antes de juzgar. ¡Así!'] } },
      { id: 'b', label: 'Confirmarle que es Renzo: ella es la HRBP de esa tienda y tiene derecho a saberlo para actuar.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -2, confianza: 1 }, flags: ['lucia_avisada'],
          out: 'Lucía llega a Santa Anita a las 5. A las 6, el chat de supervisores de Lima Este ya sabe que «los de analítica están detrás de Renzo».',
          pro: { ok: 'Lucía puede actuar hoy.', risk: 'Un nombre que sale de un análisis sin validar se vuelve un rumor, y el rumor llega antes que tú.' },
          kusi: ['preocupado', 'El rumor llegó antes que el análisis.'] } },
    ],
    mirada: {
      ve: 'Lucía no está equivocada: hay gente pasándola mal ahora. La tensión entre actuar rápido y actuar bien es diaria en People Analytics. Separar lo urgente (un caso concreto de maltrato) de lo que es un análisis (un patrón por validar) ayuda a no traicionar a ninguno.',
    },
  },
  {
    id: 'd6', t: '17:20', ch: 'whatsapp', who: null, titulo: '«¿Es el sueldo, no?»', banner: 'assets/esc/dudas.webp', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>Mónica te escribe desde su carro, atrapada en Javier Prado. ${F.has('monica_sueldo') ? '«Como quedamos el lunes: ¿ya está confirmado lo del sueldo?»' : '«¿Algún adelanto? ¿Es el sueldo, no?»'}</p><p>Las comisiones de quienes se van son solo 4 % más bajas. El sueldo pesa, pero <mark class="clave">mucho menos que el supervisor y los primeros meses</mark>.</p>`,
    type: 'compose', enviaA: 'monica', para: 'Para: Mónica Larrea', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'sueldo', t: 'Sobre el sueldo', ops: [
        { id: 's1', t: 'El sueldo influye, pero menos de lo que pensábamos: quienes se van ganan apenas 4 % menos que quienes se quedan.', ok: true, por: 'Honesto con su hipótesis, sin descartarla.' },
        { id: 's2', t: 'Sí, influye el sueldo.', ok: false, por: 'Cierto a medias: ella escuchará «tenía razón».' },
      ] },
      { id: 'otro', t: 'Lo que encontraste', ops: [
        { id: 'o1', t: 'Hay dos cosas que pesan más: los primeros tres meses y cómo ascendemos a los supervisores.', ok: true, por: 'Adelantas el patrón sin nombres.' },
        { id: 'o2', t: 'El problema principal está en Santa Anita.', ok: false, por: 'Un mensaje de WhatsApp no es lugar para señalar una tienda.' },
      ] },
      { id: 'cita', t: 'Cómo sigues', ops: [
        { id: 'c1', t: '¿Te puedo mostrar los gráficos mañana? Quince minutos bastan.', ok: true, por: 'Lo importante se explica cara a cara.' },
        { id: 'c2', t: 'Te mando todo el Excel ahora.', ok: false, por: 'Sin explicación, el Excel se lee como cada quien quiere.' },
      ] },
    ],
    res: sel => {
      const buenas = ['s1', 'o1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : sel.otro === 'o2' ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'riesgosa' ? -2 : 1, etica: sel.otro === 'o2' ? -3 : 2, calidad: q === 'buena' ? 2 : 0 }, rel: { gerente: q === 'buena' ? 1 : 0 },
        flags: [sel.sueldo === 's2' ? 'monica_sueldo_ok' : 'monica_honesta'], cartera: { sueldo: 'Influye poco: 4 % menos de comisión en quienes se van' },
        out: q === 'buena' ? 'Mónica tarda en responder. Luego: un mensaje corto, a la defensiva.' : sel.otro === 'o2' ? 'Mónica llama de inmediato al jefe de Santa Anita. Antes de que tú termines el día, ya hay una tensión que no existía.' : 'Mónica responde con un emoji de pulgar. Mañana se sorprenderá.',
        pro: { ok: 'Le adelantas lo esencial sin nombres y sin que la sorpresa sea en el comité.', risk: 'Confirmarle «sí, el sueldo» por quedar bien te obligará a desdecirte frente a todos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Verdad dicha a tiempo.' : 'Cuidado con lo que se lee entre líneas.'],
      };
    },
    mirada: {
      ve: 'Las malas noticias para un directivo nunca deben llegar por primera vez en una reunión con sus pares. Adelantarlas en privado, con datos y sin nombres, le da tiempo para procesarlas y lo convierte en aliado en vez de rival.',
      visual: { tipo: 'embudo', titulo: 'Lo que pesa en las renuncias (orden aproximado)', niveles: [['Primeros tres meses', 47], ['Supervisor nuevo sin formación', 34], ['Turnos y horarios', 19], ['Sueldo y comisiones', 13]] },
    },
  },
];
