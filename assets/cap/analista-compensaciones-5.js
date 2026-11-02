// Analista de Compensaciones y Beneficios · Capítulo 5 · «Los números de Claudia» · Semana 2, jueves.
// Hilo: verificas los criterios objetivos del caso de Claudia (experiencia, desempeño, fecha de ingreso) y propones cómo corregir.
// Normas citadas:
// - Ley 30709 y D.S. 002-2018-TR: dentro de una misma categoría, la diferencia solo se justifica con criterios objetivos
//   que el empleador debe acreditar como verificables y aplicados de forma consistente. El Peruano:
//   https://elperuano.pe/noticia/305005-igualdad-salarial-estas-son-las-reglas-que-deben-considerar-las-empresas-al-determinar-las-remuneraciones
// - Resolución 0047-2025-SUNAFIL/TFL-Primera Sala: no basta enumerar factores; hay que explicar cómo justifican la diferencia.
//   https://lpderecho.pe/discriminacion-salarial-basta-enunciar-criterios-salariales-explicados-justificados-correctamente-resolucion-0047-2025-sunafil-tfl-primera-sala/
// - Ley 30709, Primera Disposición Complementaria Modificatoria: modificó el literal b) del art. 30 del TUO del D. Leg. 728
//   (D.S. 003-97-TR), sobre la reducción de remuneración o de categoría como acto de hostilidad.
//   Referencia: https://core.ac.uk/download/489428393.pdf
// - Ley 29733 (datos personales), ya citada en capítulos anteriores.

export const CAP = {
  n: 5, titulo: 'Los números de Claudia', dia: 'Semana 2, jueves', foto: 'assets/foto2/revisan.webp',
  lugar: 'AndesTel · San Isidro, Lima',
  inicio: '08:00', fin: '19:15', cierreHora: '18:55',
  apertura: 'Jueves. Hoy vence el plazo que le diste a Claudia. Llegas temprano: a las 8:00 el piso 9 todavía huele a limpiador de pino y el aire acondicionado no arranca.', boton: 'Revisar los números',
  kusi: 'Hoy cada criterio tiene que demostrar lo que dice. ¡Cero adivinanzas!',
  lead: 'Verificaste antigüedad, experiencia, certificaciones y desempeño, calculaste cuánto de la brecha se explicaba, elegiste cómo corregir, limpiaste una carta y decidiste qué hacer con las demás analistas.',
  reflexion: '¿Corregir solo a quien se atrevió a preguntar es justo con quienes no preguntaron?',
  siguiente: { n: 6, titulo: 'La excepción', dia: 'Semana 3, martes' },
};

export const CARTERA = [
  { id: 'criterios', p: 'Verificación de criterios', j: 'Selección y Capacitación', d: 0, e: 'Por pedir' },
  { id: 'brecha', p: 'Cálculo de la brecha explicada', j: 'Gustavo · Compensaciones', d: 0, e: 'Por calcular' },
  { id: 'correccion', p: 'Propuesta de corrección', j: 'Fiorella · Gestión Humana', d: 0, e: 'Por definir' },
  { id: 'carta', p: 'Respuesta escrita a Claudia', j: 'Claudia · Redes', d: 0, e: 'Vence hoy' },
  { id: 'analistas', p: 'Las otras analistas de redes', j: 'Compensaciones', d: 0, e: '10 casos sin revisar' },
];

export const FUTURO = {
  brecha_sin_justificar: ['Demostraste que casi toda la brecha de Claudia no tenía criterio objetivo.', 'Será el centro de la presentación al comité.'],
  correccion_plan: ['Propusiste corregir la categoría y cerrar la brecha con incrementos de equidad.', 'El simulador del capítulo 7 tendrá que hacerle espacio.'],
  correccion_bono: ['Propusiste un bono único en lugar de corregir el sueldo.', 'La brecha volverá a aparecer el próximo año.'],
  carta_clara: ['Le entregaste a Claudia una respuesta escrita, con criterios y sin amenazas.', 'Claudia la guardará.'],
  carta_amenaza: ['La carta a Claudia salió con un párrafo que sonaba a advertencia.', 'Claudia la mostrará a alguien fuera de la empresa.'],
  analistas_todas: ['Decidiste revisar a todas las analistas con la misma brecha, no solo a Claudia.', 'El costo crecerá y Renzo lo usará en «La excepción».'],
  solo_claudia: ['Corregiste solo a Claudia.', 'Lucía y las demás se enterarán.'],
  karina_alerta: ['Escalaste el caso de la ingeniera excluida del incremento por su licencia.', 'Fiorella tendrá que corregir la política.'],
};

export const CHATS = {
  grupo: { n: 'Compensaciones AndesTel', sub: 'Gustavo y tú', c: '#7CC6EA' },
  gustavo: { n: 'Gustavo Herrera', sub: 'Jefe de Compensaciones', who: 'gustavo' },
  fiorella: { n: 'Fiorella Gamarra', sub: 'Gerenta de Gestión Humana', who: 'fiorella' },
  claudia: { n: 'Claudia Puma', sub: 'Ingeniera de redes', who: 'claudia' },
  renzo: { n: 'Renzo Pacheco', sub: 'Gerente de Tecnología', who: 'renzo' },
};

export const WSP = [
  { chat: 'grupo', t: '08:05', de: 'Gustavo', txt: 'Hoy es el día de Claudia. Cualquier número que no tenga fuente, no va.' },
  { chat: 'claudia', t: '08:30', de: 'Claudia', txt: 'Buenos días. ¿Sigue en pie lo de hoy? 🙂', si: 'claudia_escuchada' },
  { chat: 'claudia', t: '08:30', de: 'Claudia', txt: 'Renzo me llamó ayer a su oficina a preguntarme «qué estaba haciendo». ¿Le contaste?', si: 'claudia_expuesta' },
  { chat: 'claudia', t: '08:30', de: 'Claudia', txt: 'Ayer me escribieron tres personas del chat de guardias preguntándome por el sueldo de Diego. Yo no dije nada.', si: 'claudia_dato_revelado' },
  { chat: 'renzo', t: '12:40', de: 'Renzo', txt: 'Ojo con lo de Claudia: si le subes a ella, me van a pedir lo mismo todos. Avísame antes de que salga algo.' },
  { chat: 'fiorella', t: '18:40', de: 'Fiorella', txt: 'Leí tu resumen. El martes Renzo trae otro pedido. Prepárate.' },
];

export const CORREOS = [
  { t: '08:15', de: 'Rocío Benavides · Selección', para: 'Analista de Compensaciones', asunto: 'RE: Datos de ingreso · redes', html: '<p>Te adjunto lo que encontré en los legajos: fechas de ingreso, experiencia previa declarada y CV de ingreso de las 20 personas de redes. Dos legajos están incompletos; los de CableSur llegaron escaneados de lado 😅</p><p>Rocío</p>' },
  { t: '11:05', de: 'Gustavo Herrera', para: 'Analista de Compensaciones', asunto: 'La política dice', html: '<p>Te recuerdo lo que dice nuestra política para diferenciar dentro de una categoría: hasta 2 % por año de antigüedad en el puesto, un adicional por la certificación senior y la posición en la matriz según desempeño. Nada más.</p><p>Si no entra ahí, no es criterio.</p><p>G.</p>' },
];

export const QUIZ = [
  { q: 'Si una brecha de 18 % solo se explica en 1 punto por antigüedad, el resto…', ops: ['Se considera justificado', 'No tiene un criterio objetivo que la respalde', 'Se explica por el mercado', 'Desaparece sola'], ok: 1, por: 'La parte que ningún criterio explica es la que hay que corregir.' },
  { q: 'Para cerrar una brecha salarial sin justificación, lo más sólido es…', ops: ['Un bono único', 'Ajustar el sueldo base, en una o varias revisiones', 'Bajarle el sueldo al que gana más', 'Esperar a que la persona renuncie'], ok: 1, por: 'Un bono no cambia la base: la brecha reaparece el mes siguiente.' },
  { q: 'Reducir sin motivo la remuneración de alguien para «igualar»…', ops: ['Es la forma más barata de corregir', 'Puede constituir un acto de hostilidad según el art. 30 de la ley laboral', 'Es obligatorio', 'Solo requiere avisar'], ok: 1, por: 'La reducción inmotivada de remuneración o categoría está prevista como acto de hostilidad.' },
  { q: 'Una carta de respuesta a una consulta salarial NO debería…', ops: ['Explicar los criterios revisados', 'Indicar qué se corregirá y cuándo', 'Advertir que difundir información salarial podría ser sancionado', 'Ofrecer un espacio para nuevas preguntas'], ok: 2, por: 'Una advertencia así suena a represalia y desalienta futuras consultas.' },
  { q: 'Si diez personas tienen la misma brecha que la persona que consultó…', ops: ['Se corrige solo a quien preguntó', 'Se revisa a todas con los mismos criterios', 'Se espera a que cada una reclame', 'Se corrige a quien tenga mejor relación con el jefe'], ok: 1, por: 'La equidad no puede depender de quién se atreve a preguntar.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'n1', t: '08:30', ch: 'llamada', who: null, titulo: 'Verificar cada criterio', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio, con audífonos', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('plan_brecha') ? 'Tu plan dice tres criterios: antigüedad, certificaciones y desempeño.' : 'Necesitas los datos de antigüedad, certificaciones y desempeño.'} Los legajos de Rocío ayudan, pero hay huecos.</p><p>Haces tres llamadas rápidas. <mark class="clave">Cada respuesta tiene que venir con su fuente</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Rocío Benavides · Selección', 'Contesta mientras imprime algo', '«Claudia ingresó en marzo de 2020 con tres años de experiencia en una operadora de Arequipa. Los ingenieros de redes tienen, en promedio, seis años y medio en el puesto. La experiencia previa de ellos va de uno a cuatro años.»'],
      ['Milagros Quispe · Capacitación', 'Contesta con un taller de fondo', '«¿Certificación senior de redes? Claudia la tiene desde 2023: la pagó ella misma y luego le reembolsamos la mitad. De los ingenieros, solo cuatro de nueve la tienen.»'],
      ['Sistema de desempeño · reporte automático', 'Descarga del portal de evaluación', 'Claudia: «Supera expectativas» en 2023, 2024 y 2025. Promedio de los ingenieros de redes: «Cumple expectativas». Comentario de Renzo en 2024: «Referente técnica del equipo».'],
    ],
    prompt: 'Con los tres datos, ¿qué concluyes sobre los criterios?',
    choices: [
      { id: 'a', label: 'Solo la antigüedad favorece un poco a los pares. La certificación y el desempeño favorecen a Claudia: deberían empujar su sueldo hacia arriba, no hacia abajo.',
        res: { q: 'buena', fx: { calidad: 5, etica: 2 }, cartera: { criterios: 'Antigüedad: leve a favor de pares. Certificación y desempeño: a favor de Claudia' },
          out: 'Haces una tabla de tres filas. Dos flechas apuntan a favor de Claudia. Una, pequeña, en contra.',
          pro: { ok: 'Revisas cada criterio en las dos direcciones: lo que justifica la brecha y lo que la agrava.', info: 'Guarda la fuente de cada dato: legajo, registro de Capacitación, reporte de desempeño.' },
          kusi: ['sorpresa', '¡Los criterios juegan a favor de Claudia!'] } },
      { id: 'b', label: 'Los ingenieros tienen más años en el puesto: eso explica la brecha.',
        res: { q: 'riesgosa', fx: { calidad: -4 }, cartera: { criterios: 'Brecha atribuida a la antigüedad' },
          out: 'Escribes «antigüedad» y cierras. Te olvidaste de que son seis meses de diferencia promedio y de que ella supera en todo lo demás.',
          pro: { ok: 'La antigüedad es un criterio válido.', risk: 'Un criterio válido no justifica cualquier tamaño de brecha.' },
          kusi: ['pensando', '¿Seis meses explican 18 %?'] } },
      { id: 'c', label: 'Con dos legajos incompletos, no se puede concluir nada todavía.',
        res: { q: 'aceptable', fx: { calidad: 1, tiempo: -3 }, cartera: { criterios: 'En espera de legajos' },
          out: 'Los legajos incompletos son de dos ingenieros de CableSur. Ninguno es el de Claudia. El plazo vence hoy.',
          pro: { ok: 'Cuidas la calidad del dato.', risk: 'Los datos que faltan no cambian el caso de Claudia, y el plazo es tu palabra.' },
          kusi: ['preocupado', 'El plazo es hoy…'] } },
    ],
    rules: [[LEY, 'Ley 30709: el empleador debe acreditar que el criterio que justifica la diferencia es objetivo, verificable y se aplica de forma consistente.']],
    mirada: {
      ve: 'Verificar criterios no es buscar algo que justifique la brecha: es revisar con honestidad hacia dónde apunta cada dato. A veces los criterios, bien mirados, agravan el caso.',
      visual: { tipo: 'balanza', a: { t: 'A favor de los pares', items: ['Antigüedad: 6.5 años vs. 6'] }, b: { t: 'A favor de Claudia', items: ['Certificación senior (solo 4 de 9 pares)', 'Desempeño: supera, tres años seguidos', '«Referente técnica»'] } },
    },
  },
  {
    id: 'n2', t: '10:10', ch: 'documento', who: null, titulo: '¿Cuánto se explica?', banner: 'assets/esc/cerebro.webp', lugar: 'Excel · pestaña «BRECHA_CP»', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Claudia gana S/ 6,000; el promedio de sus pares es S/ 7,320: <mark class="clave">18 % menos</mark>. La política permite hasta 2 % por año de antigüedad en el puesto.</p><p>Los pares tienen, en promedio, medio año más que ella. Ella tiene la certificación y mejor desempeño.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Medio año explica, como mucho, 1 punto. Casi 17 puntos de la brecha no tienen un criterio objetivo detrás.',
        res: { q: 'buena', fx: { calidad: 5, cumplimiento: 3 }, flags: ['brecha_sin_justificar'], cartera: { brecha: '~17 de 18 puntos sin justificar' },
          out: 'Gustavo revisa tu fórmula dos veces. «Diecisiete puntos sin explicación. Eso, frente a un inspector, no se defiende.»',
          pro: { ok: 'Cuantificas cuánto explica cada criterio y dejas a la vista lo que no explica ninguno.', info: 'Haz el mismo cálculo para las otras diez analistas.' },
          kusi: ['celebra', '¡Número con fundamento!'] } },
      { id: 'b', label: 'Medio año de antigüedad por 2 % da 12 puntos: se explica más de la mitad.',
        res: { q: 'riesgosa', fx: { calidad: -4 },
          out: 'Gustavo te detiene: «0.5 por 2 % es 1 %, no 12. Revisa la fórmula antes de que esto llegue a Fiorella».',
          pro: { risk: 'Un error de cálculo en un caso de equidad puede justificar una discriminación.' }, kusi: ['sorpresa', '¡Revisa esa multiplicación!'] } },
      { id: 'c', label: 'No se puede cuantificar: cada criterio es distinto. Mejor describirlo en palabras.',
        res: { q: 'aceptable', fx: { calidad: 1 }, cartera: { brecha: 'Descripción cualitativa' },
          out: 'Tu informe dice «la brecha parece no justificarse». Fiorella pregunta: «¿Cuánto?». No tienes la cifra.',
          pro: { ok: 'Eres prudente.', risk: 'Sin cifra, el comité no sabe cuánto corregir.' }, kusi: ['pensando', '¿Cuánto, exactamente?'] } },
    ],
    rules: [[BP, 'Cuantifica cuánto de una brecha explica cada criterio; lo que queda sin explicar es lo que hay que corregir.']],
    mirada: {
      ve: 'Un análisis de brecha serio separa la parte explicada de la no explicada. La primera se puede defender; la segunda, no.',
      visual: { tipo: 'embudo', titulo: 'La brecha de Claudia (puntos porcentuales)', niveles: [['Brecha total', 18], ['Explicada por antigüedad', 1], ['Sin criterio objetivo', 17]] },
      normas: [{ ley: 'Resolución 0047-2025-SUNAFIL/TFL-Primera Sala', dice: 'No basta con consignar factores objetivos en la política salarial: hay que explicar cómo justifican la diferencia concreta.', practica: 'Por eso cuantificas cuánto explica cada criterio en el caso de Claudia.' }],
    },
  },
  {
    id: 'n3', t: '11:30', ch: 'presencial', who: 'gustavo', titulo: 'Cómo se corrige', banner: 'assets/3d/scenes/oficina.webp', lugar: 'Oficina de Gustavo, con la puerta cerrada', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Gustavo pone dos tazas de café pasado de Chanchamayo sobre la mesa. «Ya sabemos que hay que corregir. Ahora, <mark class="clave">cómo</mark>. El 4 % es el mismo para todos.»</p><p>Elige las dos medidas que propondrías.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos medidas para corregir la brecha.', boton: 'Proponérselas a Gustavo', resumen: 'Propusiste',
    cols: ['Medida', 'Efecto'],
    rows: [
      { id: 'cat', cells: ['Pasar su puesto a la categoría correcta desde enero', 'Corrige la causa: el nombre del cargo'] },
      { id: 'eq', cells: ['Incremento de equidad en dos revisiones (2027 y 2028)', 'Cierra la brecha en el sueldo base, sin romper el presupuesto'] },
      { id: 'bono', cells: ['Un bono único equivalente a la brecha de un año', 'Calma hoy, la base no cambia'] },
      { id: 'bajar', cells: ['Bajar el sueldo de los ingenieros que más ganan', 'Iguala por abajo'] },
      { id: 'esperar', cells: ['Esperar a la próxima evaluación de desempeño', 'Gana tiempo'] },
    ],
    score: { cat: 3, eq: 3, bono: 0, bajar: -5, esperar: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: picks.includes('bajar') ? -5 : 3, etica: q === 'buena' ? 3 : 0 },
        flags: [picks.includes('bono') && !picks.includes('eq') ? 'correccion_bono' : q === 'buena' ? 'correccion_plan' : 'correccion_bono'].filter(f => f !== 'correccion_bono' || picks.includes('bono')),
        cartera: { correccion: q === 'buena' ? 'Categoría correcta + equidad en dos revisiones' : picks.includes('bajar') ? 'Propuesta de bajar sueldos (descartada)' : 'Corrección parcial' },
        out: q === 'buena' ? 'Gustavo saca la calculadora: «Para Claudia son unos S/ 1,200 al mes en dos años. Cabe, si lo priorizamos en la matriz».' : picks.includes('bajar') ? 'Gustavo niega con la cabeza: «Bajar sueldos sin motivo es un acto de hostilidad. Y además, ¿quién se queda después de eso?».' : 'Gustavo asiente a medias: «Eso calma, pero el próximo año estamos igual».',
        pro: { ok: 'Corriges la causa (categoría) y la consecuencia (sueldo base), con un ritmo que el presupuesto aguanta.', risk: 'Un bono único no cambia la base: la brecha vuelve en enero.', info: 'Deja escrito el compromiso de la segunda revisión para que no dependa de quién esté en el puesto.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Causa y consecuencia corregidas!' : 'Eso no cambia la base.'],
      };
    },
    rules: [[LEY, 'TUO del D. Leg. 728 (D.S. 003-97-TR), art. 30 b), modificado por la Ley 30709: la reducción inmotivada de la remuneración o de la categoría es un acto de hostilidad.'], [BP, 'Una brecha se cierra en el sueldo base; un bono no la corrige.']],
    mirada: {
      ve: 'Corregir una brecha no significa hacerlo todo de golpe ni igualar por abajo. Significa corregir la causa, fijar un plan para el sueldo y cumplirlo.',
      visual: { tipo: 'linea', titulo: 'El plan para Claudia', hitos: [['Enero 2027', 'Categoría correcta + primer incremento de equidad'], ['Enero 2028', 'Segundo incremento: brecha cerrada'], ['Siempre', 'Diferencias solo por criterios objetivos']] },
    },
  },
  {
    id: 'n4', t: '13:05', ch: 'whatsapp', who: 'claudia', titulo: 'Un mensaje a la hora del almuerzo', banner: 'assets/esc/dudas.webp', lugar: 'Comedor del piso 3, con un ceviche de la concesionaria', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Estás en el comedor con un ceviche de la concesionaria cuando llega un mensaje de Claudia.</p><p>${F.has('renzo_cede') ? '«Me acabo de enterar de que a Diego le dieron un 20 % hace dos semanas porque “tenía una oferta”. ¿Eso también es un criterio objetivo?»' : F.has('politica_sucia') ? '«Mi compañera Karina volvió de su licencia de maternidad en marzo y le dijeron que este año no entra al incremento por desempeño. ¿Eso es legal?»' : '«En el chat de guardias dicen que “Compensaciones ya está revisando a las analistas”. ¿Es verdad? No le he contado a nadie.»'}</p><p><mark class="clave">Faltan cuatro horas para tu reunión con ella</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle que lo recibiste, que lo verán hoy a las 5 en la reunión, y escribirle de inmediato a Gustavo y a Fiorella con lo que te contó.',
        res: { q: 'buena', fx: { personas: 3, confianza: 3, cumplimiento: 2 }, rel: { claudia: 1, fiorella: 1 }, flags: ['karina_alerta'], envia: ['claudia', 'Gracias por contármelo, Claudia. Lo vemos hoy a las 5 en la sala 9B. Ya lo estoy revisando con Gustavo.'],
          out: 'Fiorella responde a Gustavo con copia a ti en menos de diez minutos: «Esto lo vemos hoy mismo». Terminas el ceviche de pie.',
          pro: { ok: 'Respondes rápido, sin improvisar una respuesta por WhatsApp, y escalas lo que supera tu rol.', info: 'Anota la hora y el contenido del mensaje: es parte del caso.' },
          kusi: ['animo', 'Rápida, sin improvisar.'] } },
      { id: 'b', label: 'Responderle por WhatsApp con todo lo que sabes del tema, para que no se quede con la angustia.',
        res: { q: 'aceptable', fx: { personas: 2, cumplimiento: -3 }, rel: { claudia: 1 },
          out: 'Le escribes cuatro mensajes largos. Ella responde: «Ok… ¿entonces la empresa lo hizo mal?». Tus mensajes ya son una captura de pantalla.',
          pro: { ok: 'Eres empática.', risk: 'Un WhatsApp improvisado sobre un tema legal queda como posición de la empresa.' },
          kusi: ['preocupado', 'Eso merecía una conversación, no un chat.'] } },
      { id: 'c', label: 'Dejarlo en visto y responder todo a las 5.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -3 }, rel: { claudia: -1 },
          out: 'Claudia ve el doble check azul. A las 5 llega a la reunión con los brazos cruzados.',
          pro: { ok: 'No improvisas.', risk: 'El silencio, después de la confianza que construiste, se lee como evasión.' },
          kusi: ['triste', 'El visto también habla.'] } },
    ],
    rules: [[BP, 'Acusa recibo rápido, no improvises posiciones legales por chat y escala lo que supera tu rol.']],
    mirada: {
      ve: 'Las consultas salariales nunca llegan solas: aparece un compañero, una excepción, una regla vieja. Lo que hagas con cada mensaje, incluso a la hora del almuerzo, también construye o destruye la confianza.',
    },
  },
  {
    id: 'n5', t: '15:20', ch: 'documento', who: null, titulo: 'La carta para Claudia', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Plantilla de Legal · «Respuesta a consulta remunerativa»', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Legal te manda una plantilla para la respuesta escrita. Te dicen que «es la que siempre usamos».</p><p>Antes de llenarla, la lees completa. <mark class="clave">Algunas frases no deberían llegar a Claudia</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que hay que quitar o cambiar.',
    doc: { t: 'Respuesta a consulta remunerativa', sub: 'AndesTel S.A. · plantilla de Legal' },
    lines: [
      { id: 'vaga', t: 'Su remuneración se ajusta a la política salarial vigente de la empresa.', bad: BP, why: 'No responde lo que preguntó. Si hay criterios revisados, hay que nombrarlos.' },
      { id: 'crit', t: 'Revisamos su antigüedad, certificaciones y evaluaciones de desempeño frente a quienes realizan el mismo trabajo.' },
      { id: 'amenaza', t: 'Le recordamos que la información salarial es confidencial y que su difusión podría ser sancionada.', bad: LEY, why: 'Dirigido a quien consultó por una posible discriminación, suena a advertencia. Una represalia o intimidación por ejercer su derecho es justo lo que la ley busca evitar.' },
      { id: 'cat', t: 'Su puesto será incorporado a la categoría que corresponde a sus funciones a partir de enero.' },
      { id: 'plan', t: 'Se aplicará un incremento de equidad en las revisiones salariales de 2027 y 2028.' },
      { id: 'dispon', t: 'Parte de la diferencia responde a su menor disponibilidad horaria.', bad: LEY, why: 'Es falso (hace guardias) y se basa en un prejuicio sobre su maternidad. No es un criterio objetivo.' },
      { id: 'puerta', t: 'Puede volver a escribirnos si tiene más preguntas.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'La carta sale con una frase que no debía estar. Claudia la lee dos veces y la guarda en una carpeta que se llama «Por si acaso».' : `Quitas ${hitsLey + hitsBp} frases y la carta queda en una página clara: qué se revisó, qué se encontró y qué se hará.`,
      flags: [missLey ? 'carta_amenaza' : 'carta_clara'],
      cartera: { carta: missLey ? 'Enviada con frases problemáticas' : 'Carta clara: criterios, corrección y plazo' },
      pro: { ok: 'Una respuesta escrita con criterios y compromisos protege a la trabajadora y a la empresa.', risk: 'Una frase intimidante en una carta oficial es una prueba de represalia.', info: 'Pide a Legal actualizar la plantilla para los próximos casos.' },
      kusi: missLey ? ['indignado', '¡Esa frase suena a amenaza!'] : ['celebra', '¡Carta que responde de verdad!'],
    }),
    rules: [[LEY, 'Ley 30709: la diferencia salarial solo se justifica con criterios objetivos; la respuesta no puede apoyarse en prejuicios ni intimidar a quien consultó.']],
    mirada: {
      ve: 'Las plantillas legales se escriben para proteger a la empresa, pero a veces lo hacen de la peor forma: con frases que intimidan. Una buena respuesta explica, corrige y deja la puerta abierta.',
      visual: { tipo: 'cambio', titulo: 'De la plantilla a una respuesta real', pares: [['«Se ajusta a la política»', 'Criterios revisados, uno por uno'], ['«Su difusión podría ser sancionada»', '«Puede volver a escribirnos»'], ['«Menor disponibilidad»', 'Categoría correcta y plan de equidad']] },
    },
  },
  {
    id: 'n6', t: '17:05', ch: 'presencial', who: 'claudia', titulo: '«¿Y Lucía?»', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala 9B, con la garúa pegada en la ventana', show: ['etica', 'personas', 'calidad'],
    body: (n, F) => `<p>Claudia lee la carta en silencio. ${F.has('carta_clara') ? 'Al terminar, respira hondo.' : 'Se detiene en un párrafo y frunce el ceño.'} «Gracias. De verdad.»</p><p>Luego levanta la vista. «Pero no soy la única. Lucía, las chicas de CableSur… somos once. <mark class="clave">¿Ellas también?</mark>»</p><p>Corregir a las once cuesta unas ocho veces lo de Claudia. Y Renzo ya te escribió que «todos van a pedir lo mismo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que revisarás a las once con los mismos criterios, y que quien tenga una brecha sin justificar entrará en el mismo plan de dos años, aunque eso apriete el 4 %.',
        res: { q: 'buena', fx: { etica: 5, personas: 4, calidad: 2, confianza: -1 }, rel: { claudia: 1, renzo: -1 }, flags: ['analistas_todas'], cartera: { analistas: 'Revisión de las 11 analistas en curso' },
          out: 'Claudia sonríe por primera vez en dos semanas. «Eso es lo que quería escuchar.» Al día siguiente, Gustavo te dirá que hay que rehacer la mitad del simulador.',
          pro: { ok: 'La equidad no depende de quién se atrevió a preguntar.', risk: 'El costo es mayor y Renzo lo usará en tu contra.', info: 'Calcula el costo total antes del martes: lo vas a necesitar.' },
          kusi: ['celebra', '¡Equidad para las once, no solo para una!'] } },
      { id: 'b', label: 'Corregir solo a Claudia, que es la que presentó la consulta. Las demás pueden escribir si lo consideran.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -3 }, rel: { claudia: -1 }, flags: ['solo_claudia'], cartera: { analistas: 'Solo se corrige a Claudia' },
          out: 'Claudia asiente despacio. «Entiendo.» Al salir, la ves escribiendo en su celular. Esa noche, en el chat de guardias, alguien pregunta: «¿A cuál de nosotras le toca escribir primero?».',
          pro: { ok: 'Controlas el costo.', risk: 'Si sabes que la brecha existe para otras, esperar a que reclamen mantiene la discriminación.' },
          kusi: ['triste', '¿Y las otras diez?'] } },
      { id: 'c', label: 'Decirle que lo de las demás lo verá el próximo año, cuando se revise todo el cuadro con más tiempo.',
        res: { q: 'aceptable', fx: { etica: -1, tiempo: 2 }, cartera: { analistas: 'Revisión de las 10 restantes postergada a 2028' },
          out: 'Claudia no discute. «Un año más», dice. Guarda la carta en su mochila.',
          pro: { ok: 'Reconoces el problema y das una fecha.', risk: 'Ya tienes los datos: postergar es elegir que la brecha siga un año.' },
          kusi: ['pensando', 'Ya sabes que existe…'] } },
    ],
    rules: [[BP, 'Cuando una consulta revela un patrón, se revisa a todas las personas en la misma situación con los mismos criterios.']],
    mirada: {
      ve: 'Una consulta individual suele destapar un problema colectivo. Corregir solo a quien preguntó parece prudente, pero premia a quien se atreve y castiga a quien teme. Por eso la ley mira categorías, no casos sueltos.',
      visual: { tipo: 'balanza', a: { t: 'Solo Claudia', items: ['Costo bajo', 'Renzo más tranquilo'] }, b: { t: 'Las once', items: ['Mismos criterios para todas', 'La brecha se cierra en serio', 'Nadie depende de atreverse'] } },
    },
  },
  {
    id: 'n7', t: '18:35', ch: 'whatsapp', who: 'fiorella', titulo: 'Para Fiorella', banner: 'assets/esc/logro.webp', lugar: 'Tu escritorio, con la ciudad encendida', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>El piso está vacío salvo por el señor de la limpieza, que escucha cumbia bajito. ${F.has('analistas_todas') ? 'Prometiste revisar a las once.' : 'Le diste una respuesta a Claudia.'}</p><p>Fiorella quiere el resumen del día antes de las siete. <mark class="clave">Que lo pueda contar en el comité sin ti al lado</mark>.</p>`,
    type: 'compose', enviaA: 'fiorella', para: 'Para: Fiorella Gamarra', boton: 'Enviar el WhatsApp',
    prompt: 'Elige una frase de cada parte.',
    slots: [
      { id: 'hallazgo', t: 'Hallazgo', ops: [
        { id: 'h1', t: 'La brecha de Claudia es de 18 %; solo 1 punto se explica por antigüedad.', ok: true, por: 'Cifra y criterio en una línea.' },
        { id: 'h2', t: 'Claudia tenía razón.', ok: null, por: 'Cierto, pero no dice cuánto ni por qué.' },
      ] },
      { id: 'causa', t: 'Causa', ops: [
        { id: 'c1', t: 'La causa es el nombre del cargo: «analista» es el mismo puesto que «ingeniero».', ok: true, por: 'Nombras la causa que hay que corregir.' },
        { id: 'c2', t: 'Renzo no la valoró.', ok: false, por: 'Personaliza el problema y no explica la brecha de las otras analistas.' },
      ] },
      { id: 'pedido', t: 'Lo que necesitas', ops: [
        { id: 'p1', t: 'Necesito tu respaldo para reservar parte del 4 % para equidad en redes.', ok: true, por: 'Un pedido concreto a quien puede darlo.' },
        { id: 'p2', t: 'Lo vemos en el comité.', ok: false, por: 'Llegarías al comité sin el apoyo de la gerenta.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 2 : 0 }, rel: { fiorella: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Fiorella responde: «Tienes mi respaldo. Y prepárate: el martes Renzo viene con una “excepción”».' : 'Fiorella responde: «¿Y qué necesitas de mí?». Le explicas de nuevo, ya en el bus.',
        pro: { ok: 'Hallazgo, causa y pedido: un mensaje que una gerenta puede usar tal cual.', info: 'Guarda la tabla de criterios: será tu anexo para el comité.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Semana 2 cerrada con respaldo!' : 'Faltó el pedido concreto.'],
      };
    },
    mirada: { ve: 'Una buena analista no solo encuentra la brecha: consigue el respaldo para corregirla. Pedir apoyo con datos es parte del trabajo.' },
  },
];
