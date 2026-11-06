// HR Business Partner · Capítulo 2 · «Los datos» · Semana 1, martes.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales: art. 6 (principio de finalidad: los datos se recopilan para una
//   finalidad determinada, explícita y lícita, y no se usan para otra) y art. 8 (calidad: datos necesarios y pertinentes).
//   https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
// - Ley 26772 (no discriminación en el acceso al empleo y en el trato), ya citada en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'Los datos', dia: 'Semana 1, martes', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes en Ate. El Excel de rotación llegó anoche a las 23:14, con el asunto «urgente» y tres pestañas que se llaman «Hoja1», «Hoja1 (2)» y «FINAL». A las 10:30 te sientas con Mauricio.', boton: 'Abrir el Excel',
  kusi: 'Los datos no hablan solos: hay que limpiarlos, cuidarlos y preguntarles bien. ¡Dale!',
  lead: 'Limpiaste un Excel que mezclaba de todo, armaste un diagnóstico de una lámina, escuchaste a quienes se fueron y decidiste qué hacer con lo que te contaron en confianza.',
  reflexion: '¿Qué dato de hoy te cambió la idea que tenías del problema?',
  siguiente: { n: 3, titulo: 'En la ruta', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan «de 12 zonas a 8»', j: 'Mauricio · Comercial', d: 1, e: 'En pausa hasta ver datos' },
  { id: 'rotacion', p: 'Diagnóstico de rotación', j: 'Andrea · Gestión Humana', d: 1, e: 'Excel sin limpiar' },
  { id: 'jhon', p: 'Zona de Jhon Ruiz (SJL)', j: 'Mauricio · Comercial', d: 1, e: 'Mejor venta, peor rotación' },
  { id: 'ruta', p: 'Día de ruta con Kenji', j: 'Kenji · Ventas', d: 1, e: 'Por coordinar' },
];

export const FUTURO = {
  datos_limpios: ['Separaste renuncias de ceses y sacaste del Excel los datos que no debían estar.', 'Mauricio confiará en tus números en el capítulo 4.'],
  datos_sucios: ['El Excel siguió circulando con datos sensibles y un promedio engañoso.', 'Volverá a aparecer en el capítulo 6.'],
  diagnostico_lamina: ['Le llevaste a Mauricio una lámina con hallazgo, causa y propuesta.', 'Pedirá ver la calle antes de mover zonas. Capítulo 3.'],
  jhon_patron: ['Tres exvendedores describieron el mismo trato de Jhon Ruiz.', 'Pesará cuando se elija a los jefes de zona. Capítulo 5.'],
  fuentes_protegidas: ['No le diste a Mauricio los nombres de quienes hablaron de Jhon.', 'La gente volverá a contarte cosas. Capítulo 8.'],
  nombres_entregados: ['Le pasaste a Mauricio los nombres de quienes se quejaron.', 'Jhon se enterará. Capítulo 5.'],
  ruta_acordada: ['Quedaste con Kenji a las 6:30 en el almacén.', 'Capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'Gestión Humana · HRBP', sub: 'Andrea y los HRBP', c: '#6B5BA8' },
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  gonzalo: { n: 'Gonzalo Arce', sub: 'Analista de Compensaciones', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'gonzalo', t: '07:35', de: 'Gonzalo', txt: 'Perdón por la hora del correo 🙈 El sistema de planillas se colgó y saqué la data a mano. Revísalo antes de pasárselo a nadie, porfa.' },
  { chat: 'kenji', t: '08:05', de: 'Kenji', txt: 'El mensaje de Mauricio ayudó, ya no hablan de los 100. Ahora dicen 50 😅', si: 'rumor_calmado' },
  { chat: 'kenji', t: '08:05', de: 'Kenji', txt: 'El audio de los 100 ya llegó hasta los almaceneros. Nadie sabe nada y todos opinan.', no: 'rumor_calmado' },
  { chat: 'andrea', t: '09:55', de: 'Andrea', txt: 'Estoy en el piso 3. Bajo a la sala de Mauricio a las 10:25. Lleva poco y bueno.' },
  { chat: 'mauricio', t: '13:20', de: 'Mauricio', txt: 'Buena lámina. No estoy convencido, pero quiero ver eso en la calle.', si: 'diagnostico_lamina' },
  { chat: 'grupo', t: '18:40', de: 'Andrea', txt: 'Recordatorio: nada de datos de trabajadores por WhatsApp. Para eso está la carpeta compartida con acceso restringido.' },
];

export const CORREOS = [
  { t: '23:14', de: 'Gonzalo Arce', para: 'HR Business Partner · Comercial', asunto: 'URGENTE rotación comercial 12m', html: '<p>Hola, te adjunto lo que pediste: rotación de los últimos 12 meses por zona y supervisor, ventas por zona y las entrevistas de salida que encontré. La pestaña buena es «FINAL».</p><p>Ojo: lo armé rápido y le copié a Mauricio porque él lo pidió directo.</p><p>Gonzalo</p>' },
  { t: '18:10', de: 'Andrea Salazar', para: 'HR Business Partner · Comercial', asunto: 'Mañana en la ruta', html: '<p>Bien que mañana salgas a la calle. Ponte zapatillas, lleva bloqueador y no te hagas la supervisora: vas a mirar y a escuchar.</p><p>Andrea</p>' },
];

export const QUIZ = [
  { q: 'Para medir rotación con sentido, conviene…', ops: ['Sumar todas las bajas juntas', 'Separar renuncias voluntarias de ceses decididos por la empresa', 'Contar solo a los que se fueron enojados', 'Mirar solo el promedio de la empresa'], ok: 1, por: 'Una renuncia y un fin de contrato cuentan historias distintas.' },
  { q: 'Según la Ley 29733, los datos de una entrevista de salida…', ops: ['Pueden usarse para cualquier fin interno', 'Se usan para la finalidad para la que se recopilaron', 'Son públicos dentro de la empresa', 'Pueden compartirse si los pide un gerente'], ok: 1, por: 'Principio de finalidad: no se usan para otra cosa que la informada al recogerlos.' },
  { q: 'Una buena lámina de diagnóstico para un gerente tiene…', ops: ['Todas las tablas del Excel', 'Hallazgo, causa probable y propuesta', 'Solo una opinión fuerte', 'La lista de personas a despedir'], ok: 1, por: 'Poco y bueno: qué vimos, por qué creemos que pasa y qué proponemos.' },
  { q: 'Tres exvendedores describen el mismo trato de un supervisor. Eso es…', ops: ['Un chisme', 'Un patrón que merece revisarse con cuidado', 'Una prueba suficiente para despedirlo', 'Algo que no le compete a RR.HH.'], ok: 1, por: 'Es una señal fuerte, pero se investiga antes de concluir.' },
  { q: 'El gerente te pide los nombres de quienes se quejaron de un supervisor. Lo mejor es…', ops: ['Dárselos para que lo resuelva', 'Proteger a las fuentes y proponerle cómo abordar el patrón', 'Negarte sin explicar', 'Pedirle que se los pregunte a Jhon'], ok: 1, por: 'Si las fuentes quedan expuestas, nadie vuelve a hablar.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:45', ch: 'documento', who: null, titulo: 'La pestaña «FINAL»', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio, segundo piso', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>El café de la máquina sabe a cartón, pero está caliente. Abres la pestaña «FINAL». Mauricio ya la tiene: Gonzalo le puso copia.</p><p>${F.has('antiguos_fuera') ? 'Ves una columna nueva que alguien agregó anoche: «Prioridad de salida». Te acuerdas de lo que le prometiste ayer a Mauricio.' : 'Alguien agregó anoche una columna que no pediste.'} <mark class="clave">Marca lo que no puede quedarse así</mark> antes de la reunión.</p>`,
    type: 'flag', prompt: 'Marca las líneas del Excel que incumplen la ley o que engañan sobre el problema.',
    doc: { t: 'Rotación Comercial · últimos 12 meses', sub: 'Pestaña «FINAL» · enviado por Gonzalo Arce a las 23:14' },
    lines: [
      { id: 'total', t: 'Bajas del año: 135 sobre una plantilla promedio de 300 personas (45 %).' },
      { id: 'mezcla', t: 'La columna «bajas» suma renuncias, fines de contrato y despidos en un solo número.', bad: BP, why: 'Una renuncia habla de por qué la gente se va; un fin de contrato, de una decisión de la empresa. Mezclados no explican nada.' },
      { id: 'parejo', t: 'Conclusión en celda amarilla: «La rotación es pareja en todas las zonas».', bad: BP, why: 'Es un promedio. Abierto por supervisor, tres zonas concentran la mayoría de las renuncias.' },
      { id: 'salud', t: 'Columna «Motivo real»: diagnósticos médicos de quienes renunciaron por salud.', bad: LEY, why: 'Los datos de salud son datos sensibles. No hacen falta para medir rotación y no pueden circular en un Excel copiado a la gerencia (Ley 29733).' },
      { id: 'citas', t: 'Pestaña «Salidas»: nombre, DNI y frase literal de cada entrevista de salida, con copia a la Gerencia Comercial.', bad: LEY, why: 'Las entrevistas se hicieron para mejorar la gestión, no para que el área identifique a quién dijo qué. Usarlas para otra finalidad va contra el principio de finalidad (Ley 29733, art. 6).' },
      { id: 'prioridad', t: 'Columna «Prioridad de salida», ordenada de mayor a menor edad.', bad: LEY, why: 'Ordenar salidas por edad es un criterio discriminatorio (Ley 26772) y no es causa justa de despido.' },
      { id: 'costo', t: 'Costo estimado de reemplazar a un vendedor: selección, curso de inducción y seis semanas vendiendo menos.', duda: 'Es una estimación de Gonzalo. Útil para la conversación con Mauricio, aunque habría que validarla.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges la conclusión amarilla, pero la pestaña sigue con datos que no deberían estar ahí. Mauricio ya la descargó.' : `Separas renuncias de ceses, anonimizas las entrevistas, borras los diagnósticos y la columna de edad, y le pides a Gonzalo que retire la versión anterior del correo. Marcaste ${hitsLey} problemas legales.`,
      flags: [missLey ? 'datos_sucios' : 'datos_limpios'], cartera: { rotacion: missLey ? 'Excel con datos sensibles en circulación' : 'Renuncias: 96 · ceses: 39 · datos protegidos' },
      pro: { ok: 'Un dato limpio y bien cuidado vale más que diez tablas.', risk: 'Un Excel copiado a la gerencia con diagnósticos y frases con nombre puede terminar en una denuncia y en que nadie vuelva a hablar en una entrevista de salida.', info: 'Pídele a Gonzalo que la próxima vez te mande primero la data a ti y con acceso restringido.' },
      kusi: missLey ? ['preocupado', 'Se quedaron datos que no eran para ese Excel…'] : ['celebra', '¡Excel limpio y gente protegida!'],
    }),
    rules: [[LEY, 'Ley 29733, art. 6: los datos se usan solo para la finalidad para la que se recopilaron.'], [LEY, 'Los datos de salud son datos sensibles: requieren un cuidado mayor.'], [BP, 'Separa siempre renuncias voluntarias de ceses: son dos problemas distintos.']],
    mirada: {
      ve: 'El 45 % asusta, pero no dice nada. Cuando separas las renuncias de los ceses y las abres por supervisor, el problema cambia de forma. Y cuando cuidas los datos, cuidas también que la gente siga hablando contigo.',
      visual: { tipo: 'embudo', titulo: 'Lo que había dentro del 45 %', niveles: [['Bajas del año', 135], ['Renuncias voluntarias', 96], ['Renuncias en 3 zonas', 58]] },
      normas: [{ ley: 'Ley 29733, Ley de Protección de Datos Personales, arts. 6 y 8', dice: 'Los datos personales se recopilan para una finalidad determinada, explícita y lícita, y no se tratan para otra. Deben ser necesarios, pertinentes y adecuados para esa finalidad.', practica: 'Para medir rotación no necesitas nombres ni diagnósticos: necesitas cifras y motivos agrupados.' }],
    },
  },
  {
    id: 'd2', t: '09:40', ch: 'presencial', who: 'andrea', titulo: 'Antes de entrar', banner: 'assets/foto/mentora.webp', lugar: 'Pasillo del piso 3, junto al dispensador de agua', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Andrea baja antes de lo previsto. ${F.has('antiguos_fuera') ? '«Mauricio me contó que le ibas a armar la lista de los más antiguos. <mark class="clave">¿Por qué no lo frenaste?</mark> Eso nos cuesta un juicio.» Le explicas que ya lo sacaste del Excel. Te escucha seria.' : '«Mauricio me dijo que lo hiciste pensar. Eso es raro en él», sonríe.'}</p><p>Tienes diez minutos con ella antes de la reunión. Ella conoce a los supervisores desde hace años.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Andrea.',
    opts: [
      { id: 'jhon', label: '«¿Qué sabes de Jhon Ruiz, el supervisor de San Juan de Lurigancho?»', info: '«El Tigre. Su zona es la que más vende hace tres años. Hubo dos quejas por trato el año pasado, pero nunca se formalizaron. Los vendedores le tienen miedo… y lo admiran.»' },
      { id: 'mauri', label: '«¿Qué necesita Mauricio para sentir que avanza?»', info: '«Que el directorio vea un cambio en su primer trimestre. No le digas que espere: dale algo que pueda mostrar.»' },
      { id: 'teo', label: '«¿Y Teodoro Quispe? En el Excel aparece como el supervisor de más edad.»', info: '«Don Teo, 61 años, de Jauja. Su zona en Chosica tiene la rotación más baja de toda Lima. Habla quechua con medio mercado. Si alguien sabe retener vendedores, es él.»' },
      { id: 'lista', label: '«¿Me ayudas a armar rápido una lista de los que podrían salir?»', info: 'Andrea te mira por encima de los lentes. «Todavía no sabemos ni qué problema tenemos. No me pidas eso.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('lista') ? -2 : 3, confianza: picks.includes('lista') ? -2 : 2, tiempo: -1 }, rel: { andrea: picks.includes('lista') ? -1 : 1 },
      flags: picks.includes('teo') ? ['teo_conocido'] : [],
      out: picks.includes('lista') ? 'Andrea se va hacia la sala sin esperarte. Entras con ella, pero sin la conversación que necesitabas.' : 'Entras a la sala con dos datos que no estaban en ningún Excel.',
      kusi: picks.includes('lista') ? ['triste', 'Otra vez la lista…'] : ['curioso', 'Lo que no dice el Excel lo sabe la gente.'],
    }),
    rules: [[BP, 'Antes de una reunión difícil, pregunta lo que los datos no muestran: historia, contexto y lo que necesita el otro.']],
    mirada: {
      ve: 'Los números te dicen dónde mirar; la gente que conoce la empresa te dice qué estás mirando. Un supervisor que más vende y más rota no es un dato raro: es una tensión que el negocio ha preferido no ver.',
      visual: { tipo: 'matriz', x: 'Rotación de su equipo', y: 'Ventas de la zona', cuadrantes: ['Vende y retiene', 'Vende y quema gente', 'Ni vende ni retiene', 'Retiene, vende poco'], items: [['Jhon (SJL)', 85, 90], ['Teodoro (Chosica)', 15, 55], ['Patricia (Callao)', 80, 40], ['Susana (Los Olivos)', 30, 80]] },
    },
  },
  {
    id: 'd3', t: '10:30', ch: 'presencial', who: 'mauricio', titulo: 'Una lámina', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala de la Gerencia Comercial', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Mauricio tiene veinte minutos antes de una llamada con el directorio. ${F.has('datos_limpios') ? 'Ya vio que el Excel cambió: «¿Por qué borraste la pestaña de salidas?». Le explicas en una frase. Asiente.' : 'Tiene abierta la pestaña «FINAL» que le llegó anoche.'}</p><p>«No me muestres el Excel. <mark class="clave">Dime en una lámina qué está pasando</mark>.» Proyectas mientras Andrea toma notas.</p>`,
    type: 'builder', prompt: 'Arma la lámina eligiendo las piezas de cada bloque.', boton: 'Proyectar la lámina',
    bloques: [
      { id: 'hallazgo', t: 'Lo que vimos', n: 2, ops: [
        { id: 'h1', t: '96 de las 135 bajas fueron renuncias; 58 de ellas en tres zonas.', ok: true, por: 'El dato que cambia la conversación.' },
        { id: 'h2', t: 'Reemplazar a un vendedor cuesta selección, inducción y semanas vendiendo menos.', ok: true, por: 'Pone la rotación en el idioma del negocio.' },
        { id: 'h3', t: 'La rotación es de 45 % y eso es altísimo.', ok: false, por: 'Mauricio ya lo sabe. No agrega nada.' },
      ] },
      { id: 'causa', t: 'Por qué creemos que pasa', n: 1, ops: [
        { id: 'c1', t: 'En las entrevistas de esas zonas se repiten «trato del supervisor» y «metas imposibles».', ok: true, por: 'Una hipótesis con evidencia, sin nombres.' },
        { id: 'c2', t: 'Los vendedores de ahora no aguantan nada.', ok: false, por: 'Es una opinión, y culpa a quien se fue.' },
      ] },
      { id: 'propuesta', t: 'Qué proponemos', n: 2, ops: [
        { id: 'p1', t: 'Antes de cerrar zonas, ver la ruta un día y validar las metas con vendedores reales.', ok: true, por: 'Le da un paso concreto para esta misma semana.' },
        { id: 'p2', t: 'Diseñar los nuevos roles el jueves con criterios, no con nombres.', ok: true, por: 'Mauricio sigue avanzando, pero con orden.' },
        { id: 'p3', t: 'Suspender la reorganización hasta el próximo año.', ok: false, por: 'Mauricio dejará de escucharte: necesita mostrar avance.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .55 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, tiempo: 2 }, rel: { mauricio: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['diagnostico_lamina'], cartera: { plan: q === 'riesgosa' ? 'Mauricio quiere cortar zonas igual' : 'Validar en la calle antes de cortar zonas', jhon: 'SJL: mejor venta, mayor rotación' },
        out: q === 'buena' ? 'Mauricio se queda mirando la lámina. «O sea que el problema no es el mapa… o no solo el mapa.» Le pide a su asistente que te mande el detalle de metas por zona.' : q === 'aceptable' ? 'Mauricio pregunta mucho y anota poco. «Ok. Sigue.»' : '«Esto no me sirve», dice, y abre su laptop para la llamada.',
        pro: { ok: 'Hablaste el idioma del negocio: costo, ventas y un paso para esta semana.', risk: 'Una lámina con opiniones o con un «esperemos» saca a RR.HH. de la mesa.', info: 'Termina siempre con algo que el gerente pueda hacer esta semana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una lámina que cambió la pregunta!' : 'Menos es más, pero tiene que decir algo.'],
      };
    },
    rules: [[BP, 'Una lámina para un gerente: hallazgo, causa probable y propuesta. Poco y bueno.']],
    mirada: {
      ve: 'Mauricio no necesita entender de RR.HH.: necesita decidir. Tu trabajo es traducir rotación en costo, en ventas perdidas y en un paso que él pueda dar esta semana.',
      visual: { tipo: 'flujo', titulo: 'De los datos a la decisión', pasos: ['Limpiar', 'Abrir por supervisor', 'Buscar la causa', 'Traducir a costo', 'Proponer un paso'], aqui: 4 },
    },
  },
  {
    id: 'd4', t: '12:40', ch: 'llamada', who: null, titulo: 'Los que se fueron', banner: 'assets/foto/llamada.webp', lugar: 'Sala pequeña sin ventanas', show: ['calidad', 'personas', 'etica'],
    body: () => `<p>Te saltas el almuerzo y te llevas un pan con chicharrón a la sala pequeña. Llamas a tres exvendedores de San Juan de Lurigancho que aceptaron, en su entrevista de salida, que los volvieran a contactar.</p><p>Les explicas para qué llamas y que nadie sabrá quién dijo qué. <mark class="clave">Solo escuchas</mark>.</p>`,
    type: 'calls',
    calls: [['Brayan · 24 años · renunció en junio', 'Contesta desde una obra en Huachipa', '«Las metas eran imposibles, pero eso no era lo peor. Jhon te gritaba en la formación de las siete, delante de todos. Al que no llegaba le decía "parásito". Ahora gano menos, pero duermo.»'], ['Yolanda · 41 años · renunció en abril', 'Contesta mientras atiende su bodega', '«Yo era la que más vendía de mi grupo. Pedí cambiar de ruta porque mi hijo se enfermó y me dijo que si no podía, había cola para mi puesto. Jhon vende, pero quema a la gente, señorita.»'], ['Alexis · 30 años · venezolano · renunció en agosto', 'Contesta por WhatsApp, con mala señal', '«A los extranjeros nos daba las rutas más lejos. Yo no quiero problemas con nadie. Si usan lo que le digo, que no sepan que fui yo.»']],
    prompt: 'Escuchaste tres llamadas. ¿Qué haces con lo que oíste?',
    choices: [
      { id: 'a', label: 'Registrar los relatos sin nombres, como patrón, y proponerle a Andrea abrir una revisión formal sobre el trato en esa zona.',
        res: { q: 'buena', fx: { calidad: 4, etica: 4, personas: 3 }, rel: { andrea: 1 }, flags: ['jhon_patron'], cartera: { jhon: 'Patrón de trato en revisión con Andrea' },
          out: 'Andrea lee tu nota y te llama: «Esto no puede quedar en un Excel. Lo vemos con Relaciones Laborales, con cuidado».',
          pro: { ok: 'Conviertes tres historias en un patrón y lo llevas a quien puede revisarlo sin exponer a nadie.', risk: 'Todavía no has escuchado a Jhon: un patrón no es una sanción.', info: 'Tres relatos coincidentes son una señal fuerte, no una prueba.' },
          kusi: ['animo', 'Escuchaste y cuidaste a quienes hablaron.'] } },
      { id: 'b', label: 'Guardarlo para ti: Jhon es el supervisor que más vende y Mauricio lo necesita para su trimestre.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -3, confianza: 1 }, cartera: { jhon: 'Sin revisión' },
          out: 'Cierras la libreta. Los relatos se quedan contigo y Jhon sigue haciendo la formación de las siete.',
          pro: { ok: 'Evitas un conflicto con el gerente esta semana.', risk: 'Callar un patrón de maltrato no lo detiene; solo te hace parte de él.' },
          kusi: ['triste', 'Ellos hablaron… y no pasó nada.'] } },
      { id: 'c', label: 'Llamar a Jhon esta tarde para contarle lo que dicen de él y que tenga cuidado.',
        res: { q: 'riesgosa', fx: { etica: -3, calidad: -3 }, cartera: { jhon: 'Jhon advertido antes de cualquier revisión' },
          out: 'Jhon se ríe al teléfono: «¿Quién dijo eso? ¿Yolanda? Seguro Yolanda». Alexis tenía razón en tener miedo.',
          pro: { ok: 'Le das a Jhon la oportunidad de cambiar.', risk: 'Advertir al supervisor antes de revisar expone a las fuentes y contamina cualquier investigación.' },
          kusi: ['sorpresa', '¡Uy! Ahora sabe por dónde buscar.'] } },
    ],
    rules: [[BP, 'Tres relatos coincidentes son un patrón: se registran sin nombres y se llevan a quien puede revisarlos con imparcialidad.'], [LEY, 'Usa la información para la finalidad que explicaste al pedirla (Ley 29733).']],
    mirada: {
      ve: 'Jhon es el mejor vendedor de Mauricio y, a la vez, la razón por la que se fueron muchos. Las dos cosas son verdad. El HRBP no elige una: hace visible el costo que el negocio no estaba contando.',
      visual: { tipo: 'balanza', a: { t: 'Lo que aporta Jhon', items: ['La zona que más vende', 'Tres años de resultados'] }, b: { t: 'Lo que cuesta Jhon', items: ['La mayor rotación de Lima', 'Relatos de gritos y humillación', 'Rutas peores para extranjeros'] } },
    },
  },
  {
    id: 'd5', t: '15:15', ch: 'presencial', who: 'mauricio', titulo: '«Dame los nombres»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Mauricio, puerta cerrada', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>${F.has('jhon_patron') ? 'Andrea le comentó a Mauricio lo de San Juan de Lurigancho, sin detalles.' : 'Mauricio vio tu libreta abierta en la sala.'} Te llama a su oficina y cierra la puerta.</p><p>«Jhon es mi mejor supervisor. Si alguien lo está acusando, quiero saber quién. <mark class="clave">Dame los nombres y yo hablo con Jhon</mark>, de hombre a hombre.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No darle los nombres. Explicarle que hablaron en confianza y proponerle que lo revise Relaciones Laborales, escuchando también a Jhon.',
        res: { q: 'buena', fx: { etica: 5, personas: 3, confianza: -1 }, rel: { mauricio: -1 }, flags: ['fuentes_protegidas'],
          out: 'Mauricio se cruza de brazos. «O sea que no confías en mí.» Le respondes que confías en él, y que justamente por eso no quieres que la conversación con Jhon empiece con una pelea por nombres. Se queda callado. «Ok. Pero rápido.»',
          pro: { ok: 'Proteges a las fuentes y le das al gerente un camino serio.', risk: 'Mauricio sale molesto hoy.', info: 'Una revisión justa escucha a todas las partes, también a Jhon.' },
          kusi: ['animo', 'Molesto hoy, pero el camino es el correcto.'] } },
      { id: 'b', label: 'Darle los nombres: es el gerente del área y tiene derecho a saber qué pasa en su equipo.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -4, confianza: 3 }, rel: { mauricio: 1 }, flags: ['nombres_entregados'],
          out: 'Mauricio anota tres nombres en un post-it. «Gracias. Así se trabaja.» Lo ves pegar el post-it en su monitor.',
          pro: { ok: 'Mauricio siente que eres de su equipo.', risk: 'Quienes hablaron confiando en la reserva quedaron expuestos. La próxima vez, nadie hablará.' },
          kusi: ['indignado', 'Ellos confiaron en ti…'] } },
      { id: 'c', label: 'Darle solo el nombre de Brayan, que ya trabaja en otro lado y no corre riesgo.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -2, confianza: 1 }, flags: ['nombres_entregados'],
          out: 'Mauricio anota el nombre. A la semana, Brayan te escribe: un amigo de Jhon lo buscó en Facebook.',
          pro: { ok: 'Intentas un punto medio.', risk: 'La reserva no se negocia por partes.' },
          kusi: ['preocupado', 'Medio secreto sigue siendo un secreto roto.'] } },
    ],
    rules: [[BP, 'Quien habla en confianza no puede quedar expuesto. Sin reserva, nadie vuelve a hablar.']],
    mirada: {
      ve: 'Mauricio no pide los nombres por maldad: quiere resolver rápido y a su manera. Pero un HRBP que entrega a sus fuentes pierde lo único que lo hace útil: que la gente le cuente la verdad.',
      visual: { tipo: 'cambio', titulo: 'De «quién lo acusa» a «qué está pasando»', pares: [['Dame los nombres', 'Hay un patrón que revisar'], ['De hombre a hombre', 'Una revisión imparcial'], ['Resolverlo hoy', 'Resolverlo bien y pronto']] },
    },
  },
  {
    id: 'd6', t: '17:40', ch: 'whatsapp', who: null, titulo: 'Mañana, a la calle', banner: 'assets/foto2/caminan.webp', show: ['personas', 'confianza', 'tiempo'],
    body: () => `<p>Kenji te escribe: «Me dijeron que mañana sales conmigo. ¿Es verdad o es para vigilarme? 😅». Su ruta empieza en el almacén de Santa Anita.</p><p>Le respondes para coordinar. <mark class="clave">Que no sienta que va con una inspectora</mark>.</p>`,
    type: 'compose', enviaA: 'kenji', para: 'Para: Kenji Tamashiro · Vendedor de ruta', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'para', t: 'Para qué voy', ops: [
        { id: 'a1', t: 'Sí 😄 Voy a aprender cómo es un día de ruta de verdad. No voy a evaluarte.', ok: true, por: 'Le quitas el miedo y dices la verdad.' },
        { id: 'a2', t: 'Sí, Mauricio quiere saber cuánto venden de verdad.', ok: false, por: 'Confirma que vas a vigilarlo.' },
      ] },
      { id: 'logistica', t: 'Lo práctico', ops: [
        { id: 'b1', t: '¿A qué hora y dónde te encuentro? Llego con ropa cómoda y no te atraso.', ok: true, por: 'Respetas su ritmo y su ruta.' },
        { id: 'b2', t: 'Pásame a buscar por la oficina a las 9.', ok: false, por: 'Le rompes la ruta: a las 9 ya debería estar en la segunda bodega.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Y cuéntame todo lo que te parezca que la empresa no ve. Para eso voy.', ok: true, por: 'Le abres la puerta a hablar.' },
        { id: 'c2', t: 'Tranquilo, no le cuento nada a nadie.', ok: false, por: 'No puedes prometer eso si ves algo grave.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'b1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : -1 }, rel: { kenji: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['ruta_acordada'], cartera: { ruta: q === 'riesgosa' ? 'Kenji desconfiado' : 'Mañana 6:30 · almacén de Santa Anita' },
        envia: ['kenji', q === 'buena' ? 'Kenji: «6:30 en el almacén de Santa Anita. Trae agua, que en la ruta no hay baño 😂»' : 'Kenji: «Ya… ok.»'],
        out: q === 'buena' ? 'Kenji responde con un audio largo y riéndose: que a las 6:30 en Santa Anita y que se prepare para subir a la moto.' : 'Kenji responde con un «ok» seco.',
        pro: { ok: 'Si la gente sabe para qué vas, te deja ver el trabajo real.', info: 'Lo que prometas a Kenji tendrás que cumplirlo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mañana a la calle!' : 'Kenji va a ir con guardia alta.'],
      };
    },
    rules: [[BP, 'Cuando acompañas el trabajo de alguien, dile para qué vas. Si cree que lo evalúas, verás una función de teatro.']],
    mirada: { ve: 'El trabajo real no se ve desde la oficina ni desde un Excel. Pero tampoco se ve si el vendedor cree que lo están evaluando: actuará para ti. La confianza empieza en el mensaje de la víspera.' },
  },
  {
    id: 'd7', t: '18:30', ch: 'correo', who: null, titulo: 'Para Andrea', banner: 'assets/esc/escritorio.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Andrea Salazar', to: 'HR Business Partner · Comercial', asunto: 'Resumen de hoy' },
    body: () => `<p>Mándame en tres líneas lo de hoy. Mañana temprano tengo comité con Gerencia General y van a preguntar por Comercial.</p><p>Andrea</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Hallazgo, riesgo y próximo paso, en tres líneas.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { andrea: 1 }, responde: 'Andrea: 1) El 60 % de las renuncias está en tres zonas; la causa probable es el trato del supervisor y las metas. 2) Riesgo: hay un patrón sobre Jhon Ruiz que debe revisarse con cuidado. 3) Mañana salgo a la ruta con Kenji para validar metas antes de diseñar roles.',
          out: 'Andrea responde: «Perfecto. Esto es lo que voy a decir mañana».', kusi: ['feliz', 'Tres líneas que valen un comité.'] } },
      { id: 'b', label: 'Adjuntarle el Excel completo para que vea todo.',
        res: { q: 'aceptable', fx: { confianza: -1, calidad: -1 }, responde: 'Andrea: Te adjunto el Excel con todo el detalle.',
          out: 'Andrea responde a las 22:40: «No voy a abrir un Excel antes de un comité. ¿Qué es lo importante?».', kusi: ['pensando', 'Ella pidió tres líneas.'] } },
    ],
    mirada: { ve: 'Tu jefa también tiene un jefe. Cuando le das un resumen claro, le das la posibilidad de defender a Comercial y a su gente en la mesa donde se decide.' },
  },
];
