// Analista de Compensaciones y Beneficios · Capítulo 4 · «La pregunta de Claudia» · Semana 2, martes.
// Hilo: Claudia Puma pregunta por qué gana 18 % menos que sus pares. Escucharla, cuidar la confidencialidad y planificar el análisis.
// Normas citadas:
// - Ley 30709 (art. 2: cuadros de categorías y funciones) y su reglamento, D.S. 002-2018-TR: dentro de una misma categoría, la diferencia de remuneración
//   solo se admite por criterios objetivos (por ejemplo, antigüedad, desempeño, negociación colectiva, escasez de mano
//   de obra calificada, experiencia); el empleador debe demostrar que el criterio es objetivo, verificable y se aplica
//   de forma consistente. El Peruano: https://elperuano.pe/noticia/305005-igualdad-salarial-estas-son-las-reglas-que-deben-considerar-las-empresas-al-determinar-las-remuneraciones
// - Ley 30709, obligación de informar la política salarial (El Peruano):
//   https://elperuano.pe/noticia/246869-sunafil-fiscaliza-normas-sobre-politica-salarial-atiende-estos-consejos-para-evitar-riesgos
// - Ley 29733, Ley de Protección de Datos Personales (confidencialidad de datos de terceros):
//   https://www.gob.pe/institucion/anpd/normas-legales/2018346-29733-2011
// - Resolución 0047-2025-SUNAFIL/TFL-Primera Sala: no basta enumerar factores en la política salarial; hay que explicar
//   cómo justifican la diferencia. https://lpderecho.pe/discriminacion-salarial-basta-enunciar-criterios-salariales-explicados-justificados-correctamente-resolucion-0047-2025-sunafil-tfl-primera-sala/

export const CAP = {
  n: 4, titulo: 'La pregunta de Claudia', dia: 'Semana 1, jueves', foto: 'assets/foto/frente-a-frente.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:10', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. Anoche, a las 11:48 p. m., llegó un correo de Claudia Puma con un asunto corto: «Consulta sobre mi remuneración». Lo leíste en el bus y no pudiste dejar de pensar en él.', boton: 'Responder a Claudia',
  kusi: 'Hoy un número tiene voz propia. ¡A escuchar antes de calcular!',
  lead: 'Recibiste una consulta salarial, preparaste los datos correctos, escuchaste a Claudia, protegiste la información de otros, frenaste una presión y separaste criterios objetivos de prejuicios.',
  reflexion: '¿Qué te costaría más: decirle a alguien que gana menos de lo que debería, o decirle que no puedes contarle cuánto gana su compañero?',
  siguiente: { n: 5, titulo: 'Los números de Claudia', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'claudia', p: 'Consulta de Claudia Puma', j: 'Claudia · Redes', d: 0, e: 'Correo de anoche' },
  { id: 'datos', p: 'Datos para la reunión', j: 'Gustavo · Compensaciones', d: 0, e: 'Por preparar' },
  { id: 'argumentos', p: 'Argumentos de Tecnología', j: 'Renzo · Tecnología', d: 0, e: 'Por revisar' },
  { id: 'plan', p: 'Plan del informe de brecha', j: 'Fiorella · Gestión Humana', d: 0, e: 'Por armar' },
];

export const FUTURO = {
  claudia_escuchada: ['Claudia sintió que su consulta fue tomada en serio y supo cuándo tendría respuesta.', 'Llegará al viernes con confianza.'],
  claudia_dato_revelado: ['Le contaste a Claudia el sueldo de un compañero.', 'Ese dato saldrá de la sala, y no será por ti.'],
  claudia_apurada: ['Le adelantaste a Claudia una conclusión antes de analizar.', 'Ella espera esa respuesta por escrito.'],
  renzo_frenado: ['Le pusiste límites a Renzo: la consulta de Claudia no se comenta ni tiene represalias.', 'Renzo lo recordará en «La excepción».'],
  claudia_expuesta: ['Le contaste a Renzo lo que Claudia te dijo.', 'Claudia lo sentirá en su trabajo.'],
  argumentos_limpios: ['Descartaste los argumentos que no eran criterios objetivos, como la maternidad.', 'El análisis del viernes partirá de criterios verificables.'],
  argumento_maternidad: ['Dejaste pasar «es mamá» como explicación de la brecha.', 'Ese papel puede aparecer en una inspección.'],
  plan_brecha: ['Armaste un plan de análisis con criterios y plazo.', 'Mañana harás los números con él.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  claudia: { n: 'Claudia Puma', sub: 'Ingeniera de redes', who: 'claudia' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
  wilber: { n: 'Wilber Ccori', sub: 'Jefe de Operaciones de Campo', c: '#F2A900' },
};

export const WSP = [
  { chat: 'gustavo', t: '08:12', de: 'Gustavo', txt: 'Vi el correo de Claudia. Tú llevas la reunión; yo te respaldo. Escucha más de lo que hablas.' },
  { chat: 'fiorella', t: '08:40', de: 'Fiorella', txt: 'El directorio aprobó revisar la categoría de redes. Buen trabajo ayer.', si: 'cuadro_unificado' },
  { chat: 'fiorella', t: '08:40', de: 'Fiorella', txt: 'En el directorio preguntaron por qué redes tiene dos categorías. No supe qué decir.', si: 'cuadro_sesgado' },
  { chat: 'wilber', t: '09:10', de: 'Wilber', txt: 'Esta semana renunciaron dos más. Ya no sé qué decirles a los chicos.', si: 'tecnicos_promesa' },
  { chat: 'renzo', t: '13:05', de: 'Renzo', txt: 'Me dicen que Claudia estuvo en tu sala toda la mañana. ¿Qué quería? Llámame.' },
  { chat: 'claudia', t: '18:30', de: 'Claudia', txt: 'Gracias por escucharme hoy. Espero mañana.', si: 'claudia_escuchada' },
];

export const CORREOS = [
  { t: '08:10', de: 'Claudia Puma', para: 'compensaciones@andestel.pe', asunto: 'Consulta sobre mi remuneración', html: '<p>Buenas noches:</p><p>Llevo seis años en AndesTel. Hago guardias, configuro la red core y capacito a los nuevos. Según mis cálculos, gano alrededor de un 18 % menos que mis compañeros que hacen el mismo trabajo.</p><p>No quiero problemas. Solo quiero entender cómo se fija mi sueldo y si hay un criterio que yo no conozca.</p><p>Claudia Puma</p>' },
  { t: '14:30', de: 'Renzo Pacheco', para: 'Analista de Compensaciones', asunto: 'Caso Puma · contexto', html: '<p>Te paso los puntos que me preparó mi equipo para explicar la diferencia. Con esto debería quedar cerrado.</p><p>Renzo</p>' },
];

export const QUIZ = [
  { q: 'Dos personas de la misma categoría pueden ganar distinto si…', ops: ['El gerente lo decide', 'Hay un criterio objetivo, verificable y aplicado igual a todos (antigüedad, desempeño, experiencia, etc.)', 'Una de ellas negoció mejor', 'Una tiene hijos'], ok: 1, por: 'La Ley 30709 y su reglamento (D.S. 002-2018-TR) admiten diferencias por criterios objetivos, y el empleador debe poder demostrarlos.' },
  { q: 'Una trabajadora te pregunta cuánto gana un compañero. Lo correcto es…', ops: ['Decírselo, para ser transparente', 'No revelar sueldos individuales, pero explicarle su posición, su banda y los criterios', 'Negarse a hablar del tema', 'Mandarle la planilla'], ok: 1, por: 'La transparencia es sobre criterios y sobre su propio caso, no sobre los datos de otros.' },
  { q: '¿Cuál de estas NO es una explicación válida para una brecha salarial?', ops: ['Mayor antigüedad en el puesto', 'Mejor desempeño evaluado', 'Que ella es mamá y «tiene menos disponibilidad»', 'Una certificación exigida para el puesto'], ok: 2, por: 'La maternidad no es un criterio objetivo; usarla es discriminatorio.' },
  { q: 'Un gerente te pregunta qué te dijo la trabajadora que consultó por su sueldo. Lo adecuado es…', ops: ['Contarle todo, es su jefe', 'Decirle que es una consulta en análisis, pedirle solo los datos que se necesiten y recordarle que no puede haber represalias', 'Negar que hubo reunión', 'Pedirle que la convenza de no seguir'], ok: 1, por: 'La consulta es confidencial y la trabajadora no debe sufrir consecuencias por hacerla.' },
  { q: 'Según el Tribunal de Fiscalización Laboral de SUNAFIL, en una política salarial…', ops: ['Basta con listar los factores de diferenciación', 'Hay que explicar cómo cada factor justifica la diferencia concreta', 'No hace falta ningún factor', 'Solo vale la antigüedad'], ok: 1, por: 'La Resolución 0047-2025-SUNAFIL/TFL señaló que no basta enumerar factores: hay que explicar cómo justifican la diferencia.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:20', ch: 'whatsapp', who: 'claudia', titulo: 'La respuesta a Claudia', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, con el café recién servido', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Claudia escribió a medianoche. ${F.has('cuadro_unificado') ? 'Tú ya sabes que su puesto estaba mal categorizado, pero ella todavía no.' : 'Tú sabes algo de su puesto que ella no sabe.'}</p><p>Gustavo te pide responderle por WhatsApp y citarla hoy. <mark class="clave">Lo primero que lea dirá si la tomas en serio</mark>.</p>`,
    type: 'compose', enviaA: 'claudia', para: 'Para: Claudia Puma', boton: 'Enviar el WhatsApp',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'recibo', t: 'Acuse', ops: [
        { id: 'r1', t: 'Hola Claudia, recibí tu correo y gracias por escribirnos.', ok: true, por: 'Reconoces que escribir no es fácil.' },
        { id: 'r2', t: 'Hola Claudia, ¿qué pasó?', ok: false, por: 'Suena a que hizo algo malo.' },
      ] },
      { id: 'cita', t: 'La cita', ops: [
        { id: 'c1', t: '¿Te parece hoy a las 10:30 en la sala 9B? Es cerrada y nadie nos interrumpe.', ok: true, por: 'Hora concreta y un lugar privado.' },
        { id: 'c2', t: 'Pásate por mi sitio cuando puedas.', ok: false, por: 'En un piso abierto, todos sabrán a qué fue.' },
        { id: 'c3', t: 'Si quieres lo vemos la próxima semana con calma.', ok: null, por: 'Amable, pero aplaza una consulta que ya le quitó el sueño.' },
      ] },
      { id: 'reserva', t: 'Confidencialidad', ops: [
        { id: 'k1', t: 'Lo que conversemos queda en Compensaciones.', ok: true, por: 'Le quitas el miedo a «ser la problemática».' },
        { id: 'k2', t: 'Le voy a avisar a tu jefe para que también venga.', ok: false, por: 'Nadie te pidió meter a Renzo, y Claudia no lo eligió.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'c1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : -1 }, rel: { claudia: q === 'buena' ? 1 : 0 },
        cartera: { claudia: q === 'buena' ? 'Reunión hoy 10:30, sala 9B' : 'Cita confusa' },
        out: q === 'buena' ? 'Claudia responde a los dos minutos: «Ahí estaré. Gracias por responder tan rápido». Se nota que no durmió mucho.' : 'Claudia responde «ok». Solo eso.',
        pro: { ok: 'Rapidez, privacidad y reserva: tres señales de que su consulta importa.', info: 'Confirma por correo la hora y el lugar: deja constancia de que respondiste.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Se sintió escuchada antes de llegar!' : 'Ese «ok» suena a desconfianza.'],
      };
    },
    mirada: { ve: 'Alguien que pregunta por su sueldo suele tener miedo de parecer conflictivo. La primera respuesta de Compensaciones decide si esa conversación será abierta o defensiva.' },
  },
  {
    id: 'd2', t: '09:10', ch: 'documento', who: null, titulo: 'Qué llevar a la reunión', banner: 'assets/esc/mesa.webp', lugar: 'Tu escritorio', show: ['calidad', 'etica'],
    body: () => `<p>Tienes una hora para preparar la reunión. El sistema de planillas tarda en cargar: ruedita girando, como todos los jueves de cierre.</p><p>Elige <mark class="clave">los tres datos</mark> que llevarías impresos.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres datos para preparar la reunión.', boton: 'Imprimir', resumen: 'Llevaste',
    cols: ['Dato', 'Para qué sirve'],
    rows: [
      { id: 'banda', cells: ['Su sueldo, su banda y su compa-ratio', 'Ubicar su caso con la regla de la empresa'] },
      { id: 'prom', cells: ['Promedio y rango de su categoría, sin nombres', 'Ver la brecha sin exponer a nadie'] },
      { id: 'hist', cells: ['Su historia: ingreso, cambios de puesto y evaluaciones', 'Buscar criterios objetivos'] },
      { id: 'diego', cells: ['La boleta de Diego, para comparar', 'Mostrarle el caso más parecido'] },
      { id: 'fam', cells: ['Su ficha familiar: hijos y estado civil', 'Entender su disponibilidad'] },
      { id: 'renzo', cells: ['La opinión de Renzo sobre su actitud', 'Saber cómo la ve su jefe'] },
    ],
    score: { banda: 3, prom: 3, hist: 3, diego: -3, fam: -4, renzo: -1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.includes('fam') || picks.includes('diego') ? -4 : 2 },
        cartera: { datos: q === 'buena' ? 'Banda, promedio de categoría e historia' : 'Datos mezclados con información que no corresponde' },
        out: q === 'buena' ? 'La impresora del piso atasca la segunda hoja, como siempre. Le das dos golpecitos y sale. Tres hojas, ningún nombre ajeno.' : picks.includes('fam') ? 'Gustavo ve la ficha familiar en la bandeja de la impresora y la retira en silencio: «Esto no tiene nada que ver con su sueldo».' : 'Llevas datos útiles, pero también algo que no deberías mostrar.',
        pro: { ok: 'Llevas lo que explica su caso sin exponer a terceros ni mirar su vida personal.', info: 'Revisa también si tuvo ascensos o cambios de nombre de puesto desde que ingresó.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Datos justos, ni uno más!' : 'Ese papel no debía ir.'],
      };
    },
    rules: [[LEY, 'Ley 29733: los sueldos y datos familiares de las personas son datos personales; usa solo los necesarios para la finalidad.']],
    mirada: {
      ve: 'Prepararse bien para una consulta salarial es llevar lo que explica el caso con reglas, sin datos de otros con nombre y sin entrar en la vida personal de la trabajadora.',
      visual: { tipo: 'rango', titulo: 'Categoría de redes (S/ mensuales)', min: 5500, max: 9500, banda: [6000, 9000], marcas: [['Claudia', 6000], ['Promedio de pares', 7320], ['Punto medio', 7500]] },
    },
  },
  {
    id: 'd3', t: '10:35', ch: 'presencial', who: 'claudia', titulo: 'En la sala 9B', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala 9B, con la persiana baja', show: ['personas', 'calidad'],
    body: () => `<p>Claudia llega puntual, con su laptop cerrada contra el pecho y la credencial de AndesTel colgando. Es de Juliaca; dice que el frío de Lima en la mañana «no es frío, es humedad».</p><p>Habla claro y rápido, como en una reunión técnica. <mark class="clave">Tienes tiempo para dos preguntas</mark> antes de que te pregunte algo a ti.</p>`,
    type: 'ask', max: 2, prompt: '¿Qué le preguntas a Claudia?',
    opts: [
      { id: 'como', label: '¿Cómo calculaste el 18 %?', info: '«En el chat de guardias alguien comentó cuánto ganaba y otros dijeron “yo igual”. Hice el promedio. Puede que no sea exacto, pero sé restar.»' },
      { id: 'quiere', label: '¿Qué esperas de esta conversación?', info: '«Entender. Si hay un criterio, quiero conocerlo y trabajar para cumplirlo. Si no lo hay, quiero que se corrija. No vengo a pelear.»' },
      { id: 'antes', label: '¿Lo habías preguntado antes?', info: '«En 2022, a Renzo. Me dijo que “así entré” y que no era buen momento. No volví a preguntar hasta ahora.»' },
      { id: 'puesto', label: '¿Con qué puesto entraste a AndesTel?', info: '«Me contrataron como “analista de redes” en 2020. Me dijeron que era el nombre que había en el sistema. Desde el primer mes hago guardias como cualquier ingeniero.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: 3, calidad: picks.includes('puesto') || picks.includes('antes') ? 4 : 2 },
      rel: { claudia: 1 },
      cartera: { claudia: picks.includes('puesto') ? 'Entró como «analista» por el nombre del sistema' : 'Consulta escuchada' },
      out: picks.includes('puesto') ? 'Claudia confirma lo que encontraste ayer: el nombre del puesto vino del sistema, no de su trabajo. Lo anotas sin decir nada todavía.' : 'Claudia habla más tranquila. Ya no aprieta la laptop.',
      kusi: ['curioso', 'Escuchar también es analizar.'],
    }),
    rules: [[BP, 'En una consulta salarial, primero entiende qué sabe y qué espera la persona; después explica.']],
    mirada: {
      ve: 'La gente casi siempre se entera de los sueldos de otros por el pasillo o por un chat. Lo que no sabe son los criterios. Ahí está tu trabajo.',
      visual: { tipo: 'linea', titulo: 'La historia de Claudia', hitos: [['2020', 'Ingresa como «analista de redes»'], ['2022', 'Pregunta a Renzo; «no es buen momento»'], ['Hoy', 'Escribe a Compensaciones']] },
    },
  },
  {
    id: 'd4', t: '11:10', ch: 'presencial', who: 'claudia', titulo: '«¿Cuánto gana Diego?»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala 9B', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>Claudia abre la laptop. «Una sola cosa, directa: <mark class="clave">¿cuánto gana Diego?</mark> Hacemos lo mismo. Si me lo dices, entiendo todo.»</p><p>Tienes la cifra en tu hoja. También sabes, por el cuadro, por qué su puesto quedó en otra categoría. Pero el análisis completo todavía no está hecho.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No darle el sueldo de Diego. Mostrarle su compa-ratio, su banda y el promedio de su categoría, y comprometerte a una respuesta por escrito mañana con los criterios.',
        res: { q: 'buena', fx: { etica: 4, personas: 3, cumplimiento: 3 }, rel: { claudia: 1 }, flags: ['claudia_escuchada'], cartera: { claudia: 'Respuesta escrita comprometida para mañana' },
          out: 'Claudia mira el gráfico de la banda un buen rato. «Estoy en el mínimo.» Respira. «Está bien. Mañana.» Al salir te da la mano.',
          pro: { ok: 'Eres transparente con su caso y con las reglas, y proteges los datos de otro.', risk: 'Puede sentir que le escondes algo.', info: 'Cumple el plazo: si mañana no hay respuesta, pierdes todo lo ganado hoy.' },
          kusi: ['animo', 'Transparente con ella, reservada con los demás.'] } },
      { id: 'b', label: 'Decirle que sí, que su brecha existe y se debe a que su puesto quedó mal categorizado, aunque falte terminar el análisis.',
        res: { q: 'aceptable', fx: { personas: 4, cumplimiento: -2, calidad: -2 }, rel: { claudia: 1 }, flags: ['claudia_apurada'], cartera: { claudia: 'Conclusión adelantada sin análisis' },
          out: 'A Claudia se le humedecen los ojos. «Lo sabía.» Sale aliviada. Tú te quedas pensando: ¿y si mañana aparece otro factor?',
          pro: { ok: 'Eres honesta con lo que ya encontraste.', risk: 'Una conclusión antes del análisis compromete a la empresa y a ti si luego hay matices.' },
          kusi: ['sorpresa', '¿No era mañana la respuesta?'] } },
      { id: 'c', label: 'Decirle la cifra de Diego: ella ya la intuye, y la transparencia genera confianza.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -5 }, flags: ['claudia_dato_revelado'], cartera: { claudia: 'Sueldo de un tercero revelado' },
          out: 'Claudia anota la cifra. «Gracias por ser sincera.» Esa tarde, en el chat de guardias, alguien escribe: «¿Es cierto que Diego gana…?».',
          pro: { ok: 'Buscas ser transparente.', risk: 'El sueldo de Diego es un dato personal que no te corresponde revelar.' },
          kusi: ['preocupado', 'Ese número ya no es tuyo.'] } },
    ],
    rules: [[LEY, 'Ley 29733: el sueldo de una persona es un dato personal; no se revela a terceros.'], [BP, 'La transparencia salarial se hace con criterios, bandas y promedios, no con sueldos ajenos.']],
    mirada: {
      ve: 'Claudia no necesita el sueldo de Diego: necesita saber si su sueldo responde a reglas. Puedes ser muy transparente con lo suyo y con los criterios, y a la vez cuidar los datos de otros.',
      visual: { tipo: 'balanza', a: { t: 'Lo que sí puedes contar', items: ['Su banda y su compa-ratio', 'Promedio de su categoría', 'Los criterios y el plazo'] }, b: { t: 'Lo que no', items: ['El sueldo de Diego', 'Conclusiones sin análisis'] } },
    },
  },
  {
    id: 'd5', t: '13:10', ch: 'llamada', who: 'renzo', titulo: '«¿Qué quería?»', banner: 'assets/foto2/grito.webp', lugar: 'Escalera de emergencia, con el menú enfriándose arriba', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Bajaste a comer un lomo saltado en táper y no alcanzas ni el segundo bocado: Renzo llama. Contestas en la escalera de emergencia.</p><p>${F.has('cuadro_sesgado') ? '«Pensé que el tema de redes estaba cerrado.» ' : ''}«Me dicen que Claudia estuvo contigo toda la mañana. <mark class="clave">¿Qué te dijo?</mark> Es mi equipo, tengo derecho a saber.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que es una consulta de compensaciones en análisis, que le pedirás datos de desempeño si hacen falta y que nada de esto puede afectar el trato a Claudia.',
        res: { q: 'buena', fx: { etica: 4, personas: 3, confianza: -1 }, rel: { renzo: -1 }, flags: ['renzo_frenado'], cartera: { argumentos: 'Renzo enviará su versión por escrito' },
          out: 'Silencio largo. «Entendido. Te mando por correo cómo lo vemos nosotros.» Cuelga. Tu lomo saltado ya está frío.',
          pro: { ok: 'Proteges la consulta y adviertes contra represalias sin acusar a nadie.', info: 'Avisa a Gustavo de la llamada: si luego hay un cambio de trato, ya hay registro.' },
          kusi: ['animo', 'Límite claro, sin pelear.'] } },
      { id: 'b', label: 'Contarle lo que te dijo Claudia: es su jefe y puede ayudar a resolverlo.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -4 }, rel: { renzo: 1, claudia: -1 }, flags: ['claudia_expuesta'], cartera: { claudia: 'Consulta contada al jefe' },
          out: 'Renzo escucha y dice: «Ya, yo hablo con ella». A las 4 p. m., Claudia te escribe: «¿Le contaste a Renzo?».',
          pro: { ok: 'Involucras al jefe.', risk: 'Rompes la reserva que le ofreciste y la expones justo a quien le dijo «no es buen momento».' },
          kusi: ['triste', 'Le prometiste reserva…'] } },
      { id: 'c', label: 'Decirle que no puedes hablar del tema y colgar rápido.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -2 }, rel: { renzo: -1 },
          out: 'Renzo se queda con la duda, y la duda en un gerente impaciente suele convertirse en suposición.',
          pro: { ok: 'No revelas nada.', risk: 'Sin explicarle el proceso ni marcar el límite, Renzo puede actuar por su cuenta.' },
          kusi: ['pensando', 'Reservada, pero sin marcar el límite.'] } },
    ],
    rules: [[BP, 'Una consulta salarial es confidencial. El jefe puede aportar datos, pero no debe haber consecuencias para quien consultó.']],
    mirada: {
      ve: 'El miedo de Claudia a «parecer problemática» no viene de la nada: muchas personas no preguntan por su sueldo porque temen represalias. Proteger la consulta es proteger que otros también se atrevan a preguntar.',
    },
  },
  {
    id: 'd6', t: '14:40', ch: 'correo', who: null, titulo: 'Los argumentos de Tecnología', banner: 'assets/esc/pendulo.webp', lugar: 'Tu bandeja de entrada', show: ['cumplimiento', 'etica', 'calidad'],
    mail: { from: 'Renzo Pacheco', to: 'Analista de Compensaciones', asunto: 'Caso Puma · contexto' },
    body: () => `<p>Llega el correo de Renzo con un adjunto: «Explicación diferencia salarial C. Puma». Lo escribió alguien de su equipo.</p><p>Algunos puntos podrían ser criterios objetivos. Otros, no. <mark class="clave">Sepáralos</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no es un criterio objetivo o no debe usarse.',
    doc: { t: 'Explicación de la diferencia salarial · C. Puma', sub: 'Tecnología · documento interno' },
    lines: [
      { id: 'mama', t: 'Tiene una hija pequeña y por eso menos disponibilidad para emergencias.', bad: LEY, why: 'La maternidad no es un criterio objetivo, y el dato ni siquiera es cierto: Claudia hace guardias. Usarlo es discriminatorio.' },
      { id: 'neg', t: 'Al ingresar aceptó el sueldo ofrecido sin negociar.', bad: BP, why: 'Lo que alguien aceptó al entrar no explica por qué hoy gana menos por el mismo trabajo. Arrastrar el sueldo de ingreso perpetúa brechas.' },
      { id: 'cert', t: 'Algunos ingenieros tienen una certificación avanzada de redes que exige el puesto de nivel senior.' },
      { id: 'ant', t: 'Diferencias de antigüedad en el puesto de uno a tres años entre los ingenieros.' },
      { id: 'callada', t: 'Es callada en las reuniones y no «se vende» bien.', bad: BP, why: 'Es una percepción subjetiva, no un criterio medible. Además, castiga estilos de comunicación.' },
      { id: 'nombre', t: 'Su puesto es «analista», no «ingeniero».', bad: LEY, why: 'Ya confirmaste que es el mismo trabajo con otro nombre. El nombre del cargo no es un criterio objetivo.' },
      { id: 'desemp', t: 'Las evaluaciones de desempeño de los últimos tres años.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Dejas pasar uno de los argumentos que no son criterios objetivos. En el informe quedará escrito, con tu nombre al lado.' : `Separas ${hitsLey + hitsBp} argumentos que no se sostienen. Quedan tres criterios por verificar con datos: certificación, antigüedad y desempeño.`,
      flags: [missLey ? 'argumento_maternidad' : 'argumentos_limpios'],
      cartera: { argumentos: missLey ? 'Argumentos aceptados sin filtrar' : 'Quedan 3 criterios por verificar' },
      pro: { ok: 'Un criterio objetivo se puede medir y se aplica igual a todos.', risk: 'Un argumento como «es mamá», escrito en un documento, es una prueba de discriminación.', info: 'Para cada criterio que quedó, pide el dato que lo prueba.' },
      kusi: missLey ? ['indignado', '¿«Tiene una hija»? ¡Eso no es un criterio!'] : ['celebra', '¡Criterios, no prejuicios!'],
    }),
    rules: [[LEY, 'Ley 30709 y su reglamento (D.S. 002-2018-TR): dentro de una misma categoría, la diferencia se justifica solo con criterios objetivos, como antigüedad, desempeño, negociación colectiva, escasez de mano de obra calificada o experiencia. El empleador debe poder demostrarlos.']],
    mirada: {
      ve: 'Los prejuicios suelen llegar disfrazados de «contexto». La prueba es simple: ¿se puede medir?, ¿se aplica igual a todos?, ¿tiene que ver con el trabajo? Si falla una, no es un criterio objetivo.',
      visual: { tipo: 'matriz', x: '¿Se puede medir?', y: '¿Tiene que ver con el trabajo?', cuadrantes: ['Del trabajo, pero no medible', 'Criterio objetivo', 'Ni medible ni del trabajo', 'Medible, pero ajeno al trabajo'], items: [['Desempeño', .85, .85], ['Certificación', .8, .8], ['Antigüedad', .9, .7], ['«Se vende bien»', .15, .45], ['Tiene una hija', .7, .1], ['Nombre del cargo', .6, .3]] },
      normas: [{ ley: 'Ley 30709 y D.S. 002-2018-TR', dice: 'Los trabajadores de una misma categoría pueden ganar distinto solo por criterios objetivos, que el empleador debe acreditar como verificables y aplicados de forma consistente.', practica: 'La maternidad, el estilo de comunicación o el nombre heredado del cargo no lo son.' }],
    },
  },
  {
    id: 'd7', t: '17:30', ch: 'documento', who: null, titulo: 'El plan para mañana', banner: 'assets/esc/meta.webp', lugar: 'Tu escritorio, con la oficina vaciándose', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Prometiste ${F.has('claudia_escuchada') ? 'una respuesta escrita para mañana' : 'darle una respuesta a Claudia'}. Fiorella quiere ver el plan del informe esta noche, antes de que hagas los números.</p><p>Arma la estructura. <mark class="clave">Cada pieza tiene que poder probarse</mark>.</p>`,
    type: 'builder', prompt: 'Arma el plan del informe de brecha.', boton: 'Enviar el plan a Fiorella',
    bloques: [
      { id: 'preg', t: 'Pregunta que respondes', n: 1, ops: [
        { id: 'p1', t: '¿La diferencia entre Claudia y sus pares de la misma categoría se explica por criterios objetivos?', ok: true, por: 'Una pregunta que se responde con datos.' },
        { id: 'p2', t: '¿Claudia tiene razón en quejarse?', ok: false, por: 'Pone el foco en ella, no en las reglas.' },
      ] },
      { id: 'crit', t: 'Criterios por verificar', n: 3, ops: [
        { id: 'c1', t: 'Antigüedad en el puesto', ok: true },
        { id: 'c2', t: 'Evaluaciones de desempeño de tres años', ok: true },
        { id: 'c3', t: 'Certificaciones exigidas por el puesto', ok: true },
        { id: 'c4', t: 'Disponibilidad según su situación familiar', ok: false, por: 'No es un criterio objetivo: ya lo descartaste.' },
        { id: 'c5', t: 'Opinión de su jefe sobre su actitud', ok: false, por: 'Subjetivo y sin forma de medirlo.' },
      ] },
      { id: 'comp', t: 'Con quién se compara', n: 1, ops: [
        { id: 'k1', t: 'Todas las personas que hacen el mismo trabajo, con cualquier nombre de cargo.', ok: true, por: 'Incluye a analistas e ingenieros: el grupo correcto.' },
        { id: 'k2', t: 'Solo con Diego.', ok: false, por: 'Un solo caso no muestra si hay un patrón.' },
      ] },
      { id: 'plazo', t: 'Plazo y salida', n: 1, ops: [
        { id: 'z1', t: 'Respuesta escrita a Claudia mañana, y propuesta de corrección para la revisión salarial si la brecha no se justifica.', ok: true, por: 'Cumples tu palabra y conectas el caso con el presupuesto del 4 %.' },
        { id: 'z2', t: 'Respuesta cuando termine la revisión salarial.', ok: false, por: 'Rompe el plazo que le diste.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0, tiempo: q === 'buena' ? 2 : -1 },
        rel: { fiorella: q === 'buena' ? 1 : 0 }, flags: q === 'buena' ? ['plan_brecha'] : [],
        cartera: { plan: q === 'buena' ? 'Plan con pregunta, criterios, grupo y plazo' : 'Plan con huecos' },
        out: q === 'buena' ? 'Fiorella lo aprueba desde su celular, camino a su casa en La Molina: «Así. Y que mañana cada número tenga su fuente».' : 'Fiorella responde: «¿Contra quién comparas? ¿Y cuándo le respondemos?».',
        pro: { ok: 'Pregunta clara, criterios verificables, grupo correcto y plazo cumplido.', info: 'Pide hoy los datos de antigüedad y certificaciones: mañana Selección y Capacitación estarán en otra cosa.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Plan listo para mañana!' : 'Le faltan piezas al plan.'],
      };
    },
    rules: [[BP, 'Un análisis de brecha compara a todas las personas que hacen el mismo trabajo y verifica cada criterio con datos.']],
    mirada: {
      ve: 'Un informe de brecha no busca culpables: responde si la diferencia tiene una razón que se pueda probar. Si la tiene, se explica. Si no, se corrige.',
      visual: { tipo: 'flujo', titulo: 'El informe de brecha', pasos: ['Pregunta', 'Grupo de comparación', 'Criterios', 'Datos', 'Respuesta'] },
    },
  },
];
