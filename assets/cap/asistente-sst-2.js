// Asistente de SST · Capítulo 2 · «La matriz» · Semana 1, miércoles.
// Hilo del mes: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - Ley 29783, de Seguridad y Salud en el Trabajo, art. 57: el empleador actualiza la evaluación de riesgos una vez al año
//   como mínimo o cuando cambien las condiciones de trabajo o se hayan producido daños a la salud y seguridad.
//   Citado en la R.D. 055-2025-DG-INMP-MINSA: https://cdn.www.gob.pe/uploads/document/file/7770326/6564251-rd-n-055-2025-dg-inmp-minsa.pdf
// - Ley 29783, art. 21: orden de prioridad de las medidas de prevención (eliminar el peligro, controlarlo en su origen,
//   minimizarlo con sistemas de trabajo seguro, sustituir y, en último caso, equipos de protección personal).
//   Texto de la ley: https://www.leyes.congreso.gob.pe/Documentos/Leyes/29783.pdf
// - Norma G.050, Seguridad durante la construcción: protecciones colectivas en bordes con riesgo de caída.

export const CAP = {
  n: 2, titulo: 'La matriz', dia: 'Semana 1, martes', foto: 'assets/foto/revisa.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '06:50', fin: '18:40', cierreHora: '18:20',
  apertura: 'Martes. La matriz IPERC de la obra tiene cinco meses y el edificio creció cinco pisos desde entonces.', boton: 'Abrir la matriz',
  kusi: 'Una matriz es un mapa de lo que puede salir mal. ¡Que el mapa se parezca al terreno!',
  lead: 'Diste tu segunda charla, auditaste la matriz IPERC, preguntaste cómo se hará el piso 12, aguantaste la presión del residente y ordenaste los controles para los bordes.',
  reflexion: '¿Qué diferencia hay entre una matriz que se firma y una matriz que se usa?',
  siguiente: { n: 3, titulo: 'El arnés', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'charlas', p: 'Charlas de 5 minutos', j: 'Ingrid · SSOMA', d: 0, e: 'Hoy: caídas de altura' },
  { id: 'iperc', p: 'Matriz IPERC', j: 'Ingrid · SSOMA', d: 0, e: 'Auditoría del cliente mañana a las 9:00' },
  { id: 'piso12', p: 'Vaciado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Encofrado empieza el jueves' },
  { id: 'epp', p: 'Equipos de protección', j: 'Almacén', d: 0, e: 'Pedido de lentes en curso' },
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Sin reunión desde junio' },
];

export const FUTURO = {
  matriz_real: ['Actualizaste la IPERC con el trabajo en altura del piso 12 y con lo que dijo la cuadrilla.', 'Ingrid la usará para exigir arneses en buen estado en el capítulo 3.'],
  matriz_fecha: ['Solo cambiaste la fecha de la matriz para la auditoría.', 'El papel dirá una cosa y la obra otra. Capítulo 4.'],
  arneses_alerta: ['Wilmer, del almacén, te avisó que hay arneses «viejitos».', 'Mañana los inspeccionarás. Capítulo 3.'],
  controles_colectivos: ['Propusiste baranda y línea de vida antes que confiar todo al arnés.', 'Esa propuesta pesará el jueves, cuando se firme el permiso de altura. Capítulo 4.'],
  teodoro_aliado: ['Teodoro contó su historia otra vez y ahora te ayuda con las charlas.', 'Su voz te servirá cuando la cuadrilla dude.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  marleny: { n: 'Marleny Flores', sub: 'Representante en el comité', who: 'marleny' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
};

export const WSP = [
  { chat: 'grupo', t: '06:35', de: 'Ingrid', txt: 'Hoy la charla es sobre caídas de altura. Y después, la matriz IPERC: mañana viene la auditoría del cliente 📋' },
  { chat: 'grupo', t: '06:37', de: 'Ingrid', txt: 'Llegaron los 40 lentes. Gracias por avisar ayer 👓', si: 'tarea_parada' },
  { chat: 'renzo', t: '12:50', de: 'Renzo', txt: 'Ingeniera, ¿podemos hablar a la 1:30 en la oficina de obra? Es sobre la matriz para mañana.' },
  { chat: 'marleny', t: '11:20', de: 'Marleny', txt: 'Ya pregunté a los de encofrado como me pidió. Le cuento en persona 👍', si: 'marleny_aliada' },
  { chat: 'segundo', t: '16:10', de: 'Don Segundo', txt: 'La baranda del 11 ya está. Para el 12 vamos a necesitar más tablones, avise a almacén.', si: 'borde_reportado' },
];

export const CORREOS = [
  { t: '07:40', de: 'Ing. Ingrid Delgado', para: 'Asistente SSOMA', asunto: 'Matriz IPERC · revisión antes de la auditoría', html: '<p>Te adjunto la matriz IPERC vigente. La hizo una consultora de Lima en mayo, cuando íbamos en el piso 6. Revísala como si fueras la auditora del cliente.</p><p>Lo que más me preocupa es el piso 12: encofrado, vaciado y bordes abiertos. Pregúntale a Segundo cómo lo piensan hacer. Él lo sabe mejor que nadie, aunque no le guste el papeleo.</p><p>Ingrid</p>' },
  { t: '14:05', de: 'Ing. Renzo Cáceres', para: 'Asistente SSOMA', asunto: 'RE: Matriz para auditoría', html: '<p>Ingeniera, como conversamos: el cliente revisa documentos mañana a las 9:00. Necesito la matriz firmada mañana a primera hora.</p><p>Renzo Cáceres · Residente de obra</p>' },
];

export const QUIZ = [
  { q: '¿Cada cuánto debe actualizarse como mínimo la evaluación de riesgos?', ops: ['Cada cinco años', 'Una vez al año, o antes si cambian las condiciones de trabajo', 'Solo cuando hay un accidente mortal', 'Cuando la pida SUNAFIL'], ok: 1, por: 'La Ley 29783 (art. 57) pide actualizarla una vez al año como mínimo, o cuando cambien las condiciones o haya daños.' },
  { q: 'En la jerarquía de controles, el equipo de protección personal es…', ops: ['La primera medida', 'La medida más eficaz', 'El último recurso, después de eliminar o controlar el peligro', 'Opcional'], ok: 2, por: 'La Ley 29783 (art. 21) ordena las medidas: primero eliminar o controlar el peligro en su origen; el EPP va en último caso.' },
  { q: '¿Qué significa IPERC?', ops: ['Inspección Periódica de Equipos y Registros de Campo', 'Identificación de Peligros, Evaluación de Riesgos y medidas de Control', 'Informe de Prevención de Riesgos Críticos', 'Índice de Peligro en Construcción'], ok: 1, por: 'Identifica qué puede hacer daño, cuán probable y grave es, y qué controles se aplican.' },
  { q: 'Para un borde de losa en el piso 12, ¿qué control es colectivo?', ops: ['El arnés de cada trabajador', 'La baranda perimétrica con rodapié', 'La charla de cinco minutos', 'Los guantes'], ok: 1, por: 'Una baranda protege a todos a la vez y no depende de que cada uno se acuerde de engancharse.' },
  { q: 'El residente te pide cambiar solo la fecha de la matriz para la auditoría. ¿Qué problema hay?', ops: ['Ninguno, es un trámite', 'Que el documento ya no refleja los peligros reales de la obra', 'Que la fecha está mal escrita', 'Que el cliente se moleste'], ok: 1, por: 'Una matriz sirve si describe lo que pasa en la obra; con otra fecha, sigue describiendo el piso 6.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '06:55', ch: 'presencial', who: null, titulo: 'Caídas de altura', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Patio de la obra', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Amanece nublado en Chiclayo, pero a las diez el sol va a pegar fuerte. Sesenta cascos otra vez en semicírculo.${F.has('charla_viva') ? ' Teodoro, el operario que contó lo del disco, te saluda con la cabeza desde la primera fila.' : ' Algunos ya tienen el celular en la mano antes de que empieces: el lunes aprendieron que tu charla era para firmar.'}</p><p>Hoy hablas de caídas de altura. Detrás de ti, el esqueleto del edificio: once pisos y <mark class="clave">el 12, que empieza el jueves</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Señalar el borde del piso 11 y preguntar: «¿Quién de ustedes va a trabajar allá arriba desde el jueves?». Que levanten la mano y pedirle a uno que diga qué le da miedo.',
        res: { q: null, fx: { confianza: 4, personas: 3 }, flags: ['teodoro_aliado'], cartera: { charlas: 'Charla 2: caídas, 58 asistentes, con preguntas' },
          out: 'Se levantan catorce manos, casi todas de encofrado. Un joven de Ferreñafe dice: «El viento, ingeniera. En la tarde sopla fuerte allá arriba». Teodoro remata: «Y los tablones sueltos». Ya tienes dos peligros para la matriz que no estaban en el papel.',
          kusi: ['celebra', '¡Te dieron datos para la matriz sin darse cuenta!'] } },
      { id: 'b', label: 'Contar cifras de accidentes por caídas en construcción y recordar el uso obligatorio del arnés.',
        res: { q: null, fx: { confianza: 1, calidad: 1 }, cartera: { charlas: 'Charla 2: caídas, 60 asistentes' },
          out: 'Escuchan con respeto, pero en silencio. Firman la lista. Al irse, uno comenta: «Arnés sí hay… lo que no hay es dónde engancharlo».',
          kusi: ['pensando', 'Esa última frase vale oro. ¿La anotaste?'] } },
    ],
    rules: [[BP, 'Quienes hacen el trabajo conocen peligros que no aparecen en ningún documento. Pregúntales.']],
    mirada: { ve: 'La charla de la mañana también es una fuente de información. Si preguntas bien, la cuadrilla te dice dónde están los peligros antes de que tú los encuentres.' },
  },
  {
    id: 'm2', t: '08:20', ch: 'documento', who: null, titulo: 'La matriz de mayo', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Caseta de SSOMA', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Imprimes la matriz en la caseta. La impresora se traba en la hoja 3 y la sacas a mano, arrugada. Son 14 páginas en letra 8, con el logo de una consultora de Lima.${F.has('borde_reportado') ? ' En tu libreta tienes subrayado el borde del piso 11 que reportaste el lunes.' : ''}</p><p>Ingrid te pidió leerla como auditora. <mark class="clave">Busca lo que falta, no solo lo que está mal escrito</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas de la matriz que incumplen la ley o que conviene corregir.',
    doc: { t: 'Matriz IPERC · Edificio Los Algarrobos', sub: 'Constructora Lambayeque S.A.C. · versión de mayo (obra en piso 6)' },
    lines: [
      { id: 'fecha', t: 'Última actualización: mayo. Sin revisiones posteriores.', bad: LEY, why: 'La obra pasó del piso 6 al 11. La Ley 29783 (art. 57) pide actualizar la evaluación de riesgos cuando cambian las condiciones de trabajo, además de una vez al año como mínimo.' },
      { id: 'piso12', t: 'Actividades evaluadas: excavación, cimentación, estructuras hasta el piso 8.', bad: LEY, why: 'No aparece el encofrado ni el vaciado de los pisos altos. Una tarea que no está en la matriz no tiene controles definidos.' },
      { id: 'epp', t: 'Caída de altura · Control: «uso de EPP (arnés)».', bad: LEY, why: 'La Ley 29783 (art. 21) pone el EPP en último lugar. Primero van las protecciones que eliminan o controlan el peligro, como barandas y líneas de vida.' },
      { id: 'amoladora', t: 'Corte con amoladora · Controles: guarda, disco adecuado, lentes, careta y guantes.' },
      { id: 'consulta', t: 'Elaborada por: consultora externa. Participantes de obra: ninguno.', bad: BP, why: 'Una matriz hecha sin la cuadrilla no conoce el viento de la tarde ni los tablones sueltos.' },
      { id: 'objetos', t: 'Caída de objetos sobre el patio · Nivel de riesgo: bajo.', duda: 'Con once pisos encima del patio, ese nivel debería reevaluarse.' },
      { id: 'electrico', t: 'Riesgo eléctrico · Control: tableros con interruptor diferencial.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le pasas a Ingrid tus comentarios sobre la consultora. Ella frunce el ceño: «¿Y lo del piso 12? Eso es lo que nos puede matar».' : `Marcaste ${hitsLey} problemas legales. Ingrid te mira por encima de los lentes: «Así de simple: la matriz describe una obra que ya no existe».`,
      flags: missLey ? [] : ['iperc_auditada'], rel: { ingrid: missLey ? 0 : 1 },
      cartera: { iperc: missLey ? 'Revisada a medias' : 'Desactualizada: falta altura del piso 12 y controles colectivos' },
      pro: { ok: 'Revisar qué actividades faltan es tan importante como revisar las que están.', risk: 'Una matriz puede tener buen formato y no proteger a nadie.', info: 'Anota los peligros que te dio la cuadrilla en la charla: van directo a la matriz.' },
      kusi: missLey ? ['preocupado', 'Lo más grave era lo que no estaba escrito…'] : ['celebra', '¡Ojo de auditora!'],
    }),
    rules: [[LEY, 'Ley 29783, art. 57: la evaluación de riesgos se actualiza una vez al año como mínimo o cuando cambian las condiciones de trabajo.'], [LEY, 'Ley 29783, art. 21: el EPP es la última medida, no la primera.']],
    mirada: {
      ve: 'La IPERC es el documento base de la prevención: dice qué puede hacer daño, cuán grave es y qué se hará para evitarlo. Si se queda en el piso 6 mientras la obra va en el 11, protege al papel y no a la gente.',
      visual: { tipo: 'cambio', titulo: 'Lo que dice la matriz y lo que hay en la obra', pares: [['Estructuras hasta el piso 8', 'Encofrado del piso 12 desde el jueves'], ['Control: «uso de arnés»', 'No hay dónde engancharlo'], ['Hecha en Lima', 'Viento fuerte en las tardes de Chiclayo']] },
      normas: [{ ley: 'Ley 29783, art. 57', dice: 'El empleador actualiza la evaluación de riesgos una vez al año como mínimo, o cuando cambien las condiciones de trabajo o se hayan producido daños.', practica: 'Subir cinco pisos es un cambio de condiciones: la matriz de mayo ya no alcanza.' }],
    },
  },
  {
    id: 'm3', t: '09:45', ch: 'presencial', who: 'segundo', titulo: 'Cómo se hará el 12', banner: 'assets/foto/plano-equipo.webp', lugar: 'Oficina de obra, frente al plano', show: ['calidad', 'confianza', 'personas'],
    body: (n, F) => `<p>Don Segundo tiene el plano estructural extendido sobre dos cilindros de cemento. Huele a tinta y a sudor. ${F.has('tarea_parada') ? 'Todavía te mira con algo de recelo por lo del lunes, pero te deja acercarte.' : 'Te recibe con un «a ver, ingeniera, rapidito».'}</p><p>«¿Qué quiere saber del 12?» Tiene una llamada del proveedor de concreto en diez minutos: <mark class="clave">solo alcanzas a hacerle dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Don Segundo.',
    opts: [
      { id: 'bordes', label: '¿Cómo van a proteger los bordes mientras encofran?', info: '«Como siempre: con el arnés. Aunque la verdad, en el 12 no hay columnas todavía donde amarrar la línea. Los muchachos se enganchan al fierro, nomás.»' },
      { id: 'cuantos', label: '¿Cuánta gente va a estar arriba y cuántos días?', info: '«Catorce de encofrado, cuatro días. El vaciado es un solo día, con bomba, unas veinte personas. El cliente lo quiere el jueves de la otra semana, sí o sí.»' },
      { id: 'viento', label: '¿A qué hora sopla más fuerte el viento allá arriba?', info: '«Después de las dos. En setiembre se nos voló una plancha de triplay del 9. Gracias a Dios cayó en el techo de la caseta.»' },
      { id: 'antes', label: '¿Cómo lo hacían en las otras obras?', info: '«Toda la vida igual, ingeniera. Treinta años y nunca se me ha caído nadie.» Hace una pausa. «Bueno… en Piura, un muchacho. Pero no era mi cuadrilla.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('bordes') || picks.includes('viento') ? 3 : 1, confianza: 1, tiempo: -1 }, rel: { segundo: picks.includes('antes') ? 1 : 0 },
      cartera: { piso12: picks.includes('bordes') ? 'Sin punto de anclaje en el 12: se enganchan al fierro' : 'Encofrado: 14 personas, 4 días' },
      out: picks.includes('bordes') ? 'Anotas: «Sin punto de anclaje. Enganchan al fierro». Don Segundo ve tu libreta y se ríe sin ganas: «Ahí me va a poner en la matriz, ¿no?».' : picks.includes('antes') ? 'Don Segundo se queda callado un segundo más de lo normal. Luego contesta el celular y se aleja.' : 'Suena el celular del proveedor de concreto. Don Segundo enrolla el plano y se va.',
      kusi: ['curioso', 'Cada respuesta abre otra fila de la matriz…'],
    }),
    mirada: {
      ve: 'El maestro de obra sabe cómo se hará el trabajo, aunque no lo escriba. Preguntarle es la manera más rápida de llenar una matriz que se parezca a la realidad, y también de que la sienta como suya.',
      visual: { tipo: 'mensaje', titulo: 'Lo que anotaste', txt: 'Encofrado del 12: 14 personas, 4 días. Vaciado con bomba, unas 20. Sin columnas para la línea de vida. Viento fuerte después de las 2. «En Piura, un muchacho.»' },
    },
  },
  {
    id: 'm4', t: '11:00', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del almuerzo', banner: 'assets/foto/llamada.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Para completar la matriz necesitas confirmar qué hay y qué no hay. El celular está al 20 % y el cargador se quedó en la combi.${F.has('marleny_aliada') ? ' Marleny te escribió que ya preguntó a los de encofrado.' : ''}</p><p><mark class="clave">Escucha bien: cada respuesta es una fila de la matriz</mark>.</p>`,
    type: 'calls',
    calls: [['Wilmer Tantaleán · almacenero', 'Contesta con ruido de carretilla', '«¿Arneses? Hay catorce. Unos están nuevos y otros viejitos, ingeniera; tienen las cintas peladitas. Líneas de vida no tenemos, se usaron en la obra de Lambayeque y no regresaron.»'], ['Elmer Chapoñán · capataz de Encofrados del Norte (subcontrata)', 'Contesta desde el piso 10', '«Nosotros traemos a nuestra gente, pero los arneses los pone la constructora, así quedamos en el contrato. Y mi gente no ha llevado curso de altura este año.»'], ['Marleny Flores · representante en el comité', 'Contesta en el descanso', '«Los de encofrado dicen que el triplay se vuela en la tarde y que nadie revisa los tablones. Y que si reclaman, el capataz les dice que hay otros esperando trabajo.»']],
    prompt: 'Con lo que escuchaste, ¿cómo completas la matriz?',
    choices: [
      { id: 'a', label: 'Agregar las filas del piso 12 con lo que dijeron la cuadrilla, Wilmer, Elmer y Marleny, y proponer a Ingrid revisar el borrador con Don Segundo y dos encofradores antes de firmar.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 3, personas: 3, tiempo: -2 }, rel: { marleny: 1 }, flags: ['arneses_alerta', 'matriz_con_cuadrilla'], cartera: { epp: '14 arneses, varios dañados; sin líneas de vida', iperc: 'Borrador con 6 filas nuevas del piso 12' },
          out: 'Sumas seis filas: borde sin anclaje, viento de la tarde, triplay suelto, arneses dañados, falta de líneas de vida y subcontrata sin capacitación de altura. Ingrid te responde con un audio: «Eso es una matriz. Hoy a las 6:30 la revisamos con ellos».',
          pro: { ok: 'Construyes la matriz con quienes conocen el trabajo y con datos verificados.', risk: 'Consultar toma tiempo, y el residente quiere el documento ya.', info: 'Lo que dijo Marleny sobre el capataz es un tema para el comité, no para la matriz.' },
          kusi: ['celebra', '¡Una matriz con olor a obra!'] } },
      { id: 'b', label: 'Copiar las filas de trabajo en altura de una plantilla que encontraste en internet y ajustarlas a la obra.',
        res: { q: 'aceptable', fx: { calidad: 1, tiempo: 2 }, flags: ['arneses_alerta'], cartera: { iperc: 'Filas de altura copiadas de una plantilla' },
          out: 'La plantilla es ordenada y completa… para una obra de Arequipa. No dice nada del viento de la tarde ni de que no hay líneas de vida.',
          pro: { ok: 'Avanzas rápido y la matriz se ve completa.', risk: 'Lo que escuchaste en las llamadas no quedó escrito en ninguna parte.' },
          kusi: ['pensando', '¿Y lo que te dijo Wilmer de los arneses?'] } },
    ],
    rules: [[BP, 'La identificación de peligros se hace con quienes ejecutan el trabajo y se verifica en campo.'], [BP, 'La gente de una subcontrata enfrenta los mismos peligros que la tuya: inclúyela en la matriz y en las capacitaciones.']],
    mirada: {
      ve: 'Una obra tiene muchas voces: el almacén sabe qué equipos hay, la subcontrata sabe qué capacitación tiene su gente y la representante del comité sabe lo que nadie se atreve a decir en voz alta. La matriz las junta.',
      visual: { tipo: 'embudo', titulo: 'De dónde salen las filas nuevas', niveles: [['Peligros escuchados hoy', 8], ['Verificados en campo o con el almacén', 6], ['En la matriz de mayo', 0]] },
    },
  },
  {
    id: 'm5', t: '13:30', ch: 'presencial', who: null, titulo: '«Solo cambia la fecha»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de obra', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>No terminaste tu arroz con pato: lo dejaste tapado en la caseta. El ingeniero Renzo Cáceres, residente de obra, 34 años, limeño, con la camisa ya sudada a esta hora, te espera con la matriz de mayo en la mano.</p><p>«Mira, el cliente revisa documentos mañana. Si ve una matriz en borrador, nos observa y se retrasa el pago de la valorización. <mark class="clave">Cámbiale la fecha, la firmamos y el 12 lo agregamos después</mark>. Nadie va a subir al 12 antes del jueves.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no vas a firmar una matriz que no incluye el piso 12, pero ofrecerle tener la versión actualizada mañana a las 7:30, antes de la auditoría, revisada hoy con la cuadrilla, para que llegue completa a la auditoría.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, tiempo: -3, confianza: 2 }, flags: ['matriz_real'], cartera: { iperc: 'Versión real comprometida para mañana 7:30' },
          out: 'Renzo suspira y se pasa la mano por la cara. «Siete y media. Si a las siete y treinta y uno no está, la firmo yo como está.» Sales con el compromiso y con una noche larga por delante.',
          pro: { ok: 'No firmas algo falso y le das al residente una salida concreta.', risk: 'Te comprometiste a un plazo muy corto: si no lo cumples, él tendrá razón.', info: 'Avísale a Ingrid hoy mismo del acuerdo, para que no te contradigan.' },
          kusi: ['animo', 'Firme en el qué, flexible en el cómo.'] } },
      { id: 'b', label: 'Cambiar la fecha como pide: él es el residente, y es verdad que nadie sube al 12 hasta el jueves.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, tiempo: 3 }, flags: ['matriz_fecha'], cartera: { iperc: 'Firmada con fecha nueva, contenido de mayo' },
          out: 'Renzo te da una palmada en el hombro: «Así se trabaja en equipo». La matriz dice «octubre» arriba y «piso 8» adentro. Las filas del piso 12 se quedan en tu libreta.',
          pro: { ok: 'Evitas un conflicto con el residente y la valorización no se retrasa.', risk: 'Firmaste un documento que no describe la obra. Si pasa algo en el 12, esa firma será lo primero que revisen.' },
          kusi: ['preocupado', 'La fecha cambió… la obra también.'] } },
      { id: 'c', label: 'Pedirle que lo decida Ingrid: ella es la supervisora y tú recién llevas dos días.',
        res: { q: 'aceptable', fx: { etica: 1, confianza: -2 }, flags: ['matriz_real'], cartera: { iperc: 'Escalado a Ingrid' },
          out: 'Renzo llama a Ingrid delante de ti. Ella contesta: «No se firma así. Mañana a las 7:30 la tenemos actualizada». Renzo cuelga, serio. A la salida comenta: «Pensé que tú tenías criterio propio».',
          pro: { ok: 'Escalar a tu jefa es válido cuando la presión viene de más arriba.', risk: 'Renzo ahora te ve como alguien que no decide. La próxima vez irá directo a Ingrid.' },
          kusi: ['pensando', 'Tenías razón… pero no la dijiste tú.'] } },
    ],
    rules: [[LEY, 'Ley 29783, art. 57: la evaluación de riesgos se actualiza cuando cambian las condiciones de trabajo.'], [BP, 'Un documento de SST firmado con datos que no son reales expone a quien lo firma y no protege a nadie.']],
    mirada: {
      ve: 'La presión de la valorización y del cliente es real: un retraso afecta los pagos de toda la obra. El trabajo de Seguridad no es negarse a todo, sino ofrecer una salida que no requiera mentir en un documento.',
      visual: { tipo: 'balanza', a: { t: 'Cambiar la fecha', items: ['Auditoría sin observación', 'Valorización a tiempo', 'Cero conflicto hoy'] }, b: { t: 'Actualizar de verdad', items: ['El piso 12 tiene controles', 'La firma dice la verdad', 'Una noche larga'] } },
    },
  },
  {
    id: 'm6', t: '15:50', ch: 'documento', who: null, titulo: 'El borde del 12', banner: 'assets/esc/escalera.webp', lugar: 'Piso 11, mirando hacia el 12', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Subes por la escalera hasta el 11. El viento te empuja el casco y tienes que sujetar la libreta con las dos manos: Don Segundo tenía razón con lo de las dos de la tarde.${F.has('borde_reportado') ? ' La baranda que pediste el lunes ya está; huele a madera recién cortada.' : ' El borde sigue abierto. Te pegas a la columna.'}</p><p>Ahora tienes que escribir los controles para el borde del 12. <mark class="clave">El orden importa: lo primero que pongas es lo primero que se hace</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los controles del borde del piso 12 de más a menos eficaz.', boton: 'Pasar los controles a la matriz',
    items: [
      { id: 'elim', t: 'Armar el encofrado del borde desde el piso de abajo, para que nadie trabaje asomado', por: 'Si nadie se asoma, el peligro desaparece para esa tarea.' },
      { id: 'baranda', t: 'Baranda perimétrica con rodapié antes de que suba la cuadrilla', por: 'Protección colectiva: cuida a todos a la vez.' },
      { id: 'linea', t: 'Línea de vida anclada a un punto certificado, no al fierro', por: 'Reduce la caída para quien deba trabajar en el borde.' },
      { id: 'admin', t: 'Permiso de trabajo en altura, horario sin viento fuerte y charla previa', por: 'Controles de organización: quién, cuándo y cómo.' },
      { id: 'arnes', t: 'Arnés de cuerpo entero inspeccionado para cada trabajador', por: 'El EPP va al final: protege si todo lo demás falla.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { ingrid: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['controles_colectivos'], cartera: { piso12: q === 'riesgosa' ? 'Controles: solo arnés' : 'Baranda, línea de vida y permiso antes del arnés' },
        out: q === 'buena' ? 'Ingrid lee tu fila y escribe al margen: «Pedir tablones y dos líneas de vida certificadas hoy». Lo que ordenaste se convirtió en una compra.' : q === 'aceptable' ? 'Ingrid mueve una tarjeta: «La baranda va antes que el arnés, siempre. Si no, el arnés carga con todo».' : 'Ingrid te devuelve la hoja: «Pusiste el arnés primero. Así estaba la matriz de mayo».',
        pro: { ok: 'Primero se elimina o se controla el peligro; el EPP es la última barrera.', risk: 'Si el arnés es el único control, todo depende de que esté bueno y de que haya dónde engancharlo.', info: 'Wilmer dijo que hay arneses «viejitos». Esa última barrera también hay que revisarla.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Primero la baranda, al final el arnés!' : 'El EPP es la última línea, no la primera.'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 21: prioridad de las medidas de prevención; el EPP en último caso.'], [LEY, 'Norma G.050: protecciones colectivas, como barandas, en bordes con riesgo de caída.']],
    mirada: {
      ve: 'La jerarquía de controles es la idea más poderosa de la prevención. Un arnés depende de que cada persona se lo ponga bien, lo enganche y de que el equipo esté sano. Una baranda protege aunque alguien esté cansado o distraído.',
      visual: { tipo: 'flujo', titulo: 'Jerarquía de controles en el borde', pasos: ['Eliminar: trabajar desde abajo', 'Colectivo: baranda', 'Línea de vida', 'Permiso y horario', 'Arnés'], aqui: 1 },
      normas: [{ ley: 'Ley 29783, art. 21', dice: 'Las medidas de prevención se aplican en orden de prioridad: eliminar los peligros, controlarlos en su origen, minimizarlos con sistemas de trabajo seguro, sustituir y, en último caso, proporcionar equipos de protección personal.', practica: 'En el piso 12, la baranda y la línea de vida van antes que el arnés.' }],
    },
  },
  {
    id: 'm7', t: '17:55', ch: 'whatsapp', who: null, titulo: 'Para Ingrid', banner: 'assets/esc/meta.webp', lugar: 'Paradero de la avenida Bolognesi', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Esperas la combi en la avenida Bolognesi con el polvo del día en la ropa. Un señor vende King Kong de manjar en una carretilla y el olor te recuerda que no almorzaste.${F.has('matriz_fecha') ? ' En tu mochila va una matriz firmada que no dice la verdad.' : ' A las 6:30 revisas la matriz con la cuadrilla y mañana a las 7:30 tiene que estar firmada.'}</p><p>Ingrid está en otra obra. <mark class="clave">Necesita saber en un mensaje lo que pasó hoy</mark>.</p>`,
    type: 'compose', enviaA: 'ingrid', para: 'Para: Ing. Ingrid Delgado · Supervisora SSOMA', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hallazgo', t: 'Lo más grave', ops: [
        { id: 'h1', t: 'Ingrid: en el 12 no hay punto de anclaje, no tenemos líneas de vida y hay arneses con cintas peladas.', ok: true, por: 'Tres datos concretos que pueden matar a alguien.' },
        { id: 'h2', t: 'Ingrid: la matriz está bastante mal.', ok: false, por: 'No dice qué, ni qué hacer.' },
      ] },
      { id: 'renzo', t: 'Lo de Renzo', ops: [
        { id: 'r1', t: 'Renzo quería firmar la matriz de mayo con otra fecha. Quedamos en entregar la actualizada mañana a las 7:30.', ok: true, por: 'Le cuentas la presión y el acuerdo, sin acusar.' },
        { id: 'r2', t: 'Renzo es un irresponsable, quiere falsificar la matriz.', ok: false, por: 'Etiquetar al residente no ayuda a Ingrid a negociar con él.' },
      ] },
      { id: 'pedido', t: 'Lo que necesitas', ops: [
        { id: 'p1', t: '¿Me ayudas a pedir dos líneas de vida certificadas y hacemos la revisión del borrador con Segundo y dos encofradores hoy a las 6:30?', ok: true, por: 'Un pedido concreto, con hora y participantes.' },
        { id: 'p2', t: 'Mañana te cuento mejor.', ok: false, por: 'Mañana es un día menos para conseguir los equipos.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, calidad: q === 'buena' ? 2 : 0 }, rel: { ingrid: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['lineas_pedidas'], cartera: { epp: q === 'riesgosa' ? 'Sin pedido de líneas de vida' : 'Pedido: 2 líneas de vida certificadas' },
        out: q === 'buena' ? 'Ingrid responde antes de que llegue la combi: «Pido las líneas ahora. A las 6:30 con Segundo. Y bien parada con Renzo 💪».' : q === 'aceptable' ? 'Ingrid responde: «Ok. Mañana temprano me explicas qué necesitas exactamente».' : 'Ingrid deja el mensaje en visto. Está en otra emergencia.',
        pro: { ok: 'Un buen reporte dice qué es grave, qué presión hay y qué necesitas, en ese orden.', risk: 'Un mensaje vago hace que lo urgente espere un día más.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mensaje claro y con pedido!' : 'Dato, contexto y pedido.'],
      };
    },
    rules: [[BP, 'Reporta el mismo día lo que puede causar un accidente grave, con un pedido concreto.']],
    mirada: {
      ve: 'La asistente de SST pasa mucho tiempo comunicando: a la cuadrilla, al almacén, al residente y a su jefa. Un mensaje claro convierte un hallazgo en una compra o en un cambio antes de que alguien suba al piso 12.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje', txt: 'Sin anclaje en el 12, sin líneas de vida, arneses con cintas peladas. Renzo quería cambiar la fecha: quedamos mañana a las 7:30. ¿Pedimos dos líneas de vida y revisamos con Segundo hoy a las 6:30?' },
    },
  },
];
