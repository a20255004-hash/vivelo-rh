// Generalista de RR.HH. · Capítulo 4 · «Los turnos» · Semana 1, jueves.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas:
// - D.Leg. 713 (descansos remunerados): descanso semanal mínimo de 24 horas consecutivas, que puede fijarse en un
//   día distinto al domingo; si se trabaja el día de descanso sin sustituirlo, se paga la labor más una sobretasa
//   del 100 %.
//   https://lpderecho.pe/consolidan-legislacion-descansos-remunerados-trabajadores-actividad-privada-decreto-legislativo-713/
//   https://lpderecho.pe/descansos-remunerados-ley/
//   Reglamento, D.S. 012-92-TR: https://lpderecho.pe/reglamento-decreto-legislativo-descansos-remunerados-trabajadores-regimen-laboral-actividad-privada-decreto-supremo-012-92-tr/
// - Constitución Política del Perú, art. 25: jornada ordinaria máxima de 8 horas diarias o 48 semanales.
// - Las horas extra son voluntarias y se pagan con sobretasa (se explica el principio; las tasas se ven en el capítulo 5).

export const CAP = {
  n: 4, titulo: 'Los turnos', dia: 'Semana 1, jueves', foto: 'assets/esc/reloj.webp',
  lugar: 'Oficina de housekeeping · Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Cusco, jueves. Hoy empiezan los primeros ingresos de la temporada y el hotel ya está al 80 %. En el panel de corcho de housekeeping hay un cuadro de turnos impreso, con manchas de café y correcciones en lapicero.', boton: 'Mirar el cuadro',
  kusi: 'Un cuadro de turnos es un mapa del cansancio de la gente. ¡A leerlo bien!',
  lead: 'Detectaste los turnos imposibles, decidiste qué hacer con las camareras que querían trabajar siete días, armaste un cuadro legal, repartiste el banquete de la boda, escuchaste a quienes viven los turnos y publicaste el cuadro nuevo.',
  reflexion: '¿Qué harías si alguien te pide trabajar sin descanso porque necesita la plata?',
  siguiente: { n: 5, titulo: 'La planilla externa', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'turnos', p: 'Cuadro de turnos de la temporada', j: 'Haydée · Housekeeping', d: 0, e: 'Publicar hoy' },
  { id: 'noche', p: 'Recepción nocturna', j: 'Yaneth', d: 0, e: 'Sola, 12 horas' },
  { id: 'banquete', p: 'Boda de 120 personas el sábado', j: 'Chef Rolando', d: 0, e: 'Sábado' },
];

export const FUTURO = {
  descanso_rotativo: ['Las camareras tienen su descanso semanal rotativo; trabajar el día libre es excepcional, voluntario y con sobretasa.', 'Iván deberá pagarlo bien en el capítulo 5.'],
  siete_dias: ['Dejaste a cuatro camareras trabajando siete días por semana durante la temporada.', 'El cansancio se notará en el capítulo 8.'],
  sin_extras: ['Prohibiste cualquier trabajo extra o en día libre.', 'Algunas camareras buscarán un segundo trabajo.'],
  cuadro_revisado: ['Detectaste en el cuadro los siete días seguidos y las 72 horas de Yaneth.', 'Haydée sabe que revisas.'],
  cuadro_legal: ['Armaste un cuadro con descansos, dos turnos de noche y horas extra autorizadas por escrito.', 'Es tu entregable de la semana.'],
  banquete_repartido: ['El banquete se cubre repartiendo turnos, sin dobles jornadas.', 'El chef lo agradecerá a regañadientes.'],
  kevin_regularizado: ['Si Kevin seguía sin contrato, hoy firmó y tiene alta.', 'Tendrá seguro si algo le pasa en el capítulo 5.'],
  kevin_doble: ['Aceptaste que Kevin haga 16 horas el sábado.', 'El cansancio en la cocina tiene consecuencias.'],
  equipo_escuchado: ['Ajustaste el cuadro con lo que te contaron Fortunata, Yaneth y Rubén.', 'Confían más en RR.HH.'],
  cuadro_publicado: ['El cuadro nuevo está publicado con anticipación.', 'Todos saben cuándo descansan.'],
  horas_a_ivan: ['Le enviaste a Iván las horas extra y los descansos trabajados.', 'Si se equivoca en el capítulo 5, no será por falta de información.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción, housekeeping y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  haydee: { n: 'Haydée Mamani', sub: 'Gobernanta de housekeeping', c: '#9C2F5B' },
  yaneth: { n: 'Yaneth Huallpa', sub: 'Recepcionista nocturna', c: '#6B5BA8' },
};

export const WSP = [
  { chat: 'yaneth', t: '06:58', de: 'Yaneth', txt: 'Buenos días. Noche pesada: llegaron dos grupos del aeropuerto a las 3 y estaba sola. Ya me voy a dormir 😴' },
  { chat: 'chef', t: '07:40', de: 'Chef Rolando', txt: 'Hoy hay revisión con Marleny a las 3, ¿no? Ahí estaré.', si: 'mediacion_acuerdo' },
  { chat: 'chef', t: '07:40', de: 'Chef Rolando', txt: 'Necesito hablar del sábado. Hay boda.', no: 'mediacion_acuerdo' },
  { chat: 'grupo', t: '09:15', de: 'Wendy', txt: 'Milagros ya hace check-in sola 🙌 Habla inglés mejor que yo jajaja', si: 'milagros_planilla' },
  { chat: 'haydee', t: '15:10', de: 'Haydée', txt: 'Ya les expliqué a las chicas. Fortunata se puso a llorar, pero de alivio. Gracias, hija.', si: 'descanso_rotativo' },
  { chat: 'contador', t: '17:55', de: 'Iván', txt: 'Recibido el cuadro con las horas. Así da gusto trabajar.', si: 'horas_a_ivan' },
];

export const CORREOS = [
  { t: '08:05', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Ocupación', html: '<p>Estamos al 80 % y el sábado tenemos la boda de los Pacheco: 120 invitados en el salón colonial. No quiero ni una queja. Revisa los turnos con Haydée y el chef.</p><p>V.</p>' },
  { t: '11:00', de: 'Instituto de Turismo del Cusco · bolsa de egresados', para: 'RR.HH. Hotel Inti Wasi', asunto: 'Recepcionista con experiencia nocturna', html: '<p>Tenemos a una egresada, Sonia Quispe, con experiencia en turnos de noche en un hostal de San Blas. Puede empezar esta semana.</p>' },
];

export const QUIZ = [
  { q: '¿Cuál es el descanso semanal mínimo en el régimen general?', ops: ['12 horas', '24 horas consecutivas', 'Solo los domingos', 'No hay mínimo'], ok: 1, por: 'El D.Leg. 713 reconoce un descanso de 24 horas consecutivas por semana, que puede fijarse en un día distinto al domingo.' },
  { q: 'Si una camarera trabaja su día de descanso y no se lo sustituyen por otro en la semana…', ops: ['No se le paga', 'Se le paga simple', 'Se le paga la labor más una sobretasa del 100 %', 'Pierde sus vacaciones'], ok: 2, por: 'El D.Leg. 713 dispone el pago de la labor del día más una sobretasa del 100 %.' },
  { q: 'Una recepcionista trabaja de 19:00 a 07:00, seis noches por semana. ¿Cuántas horas suma?', ops: ['48', '60', '72', '36'], ok: 2, por: 'Son 72 horas: muy por encima del máximo de 48 semanales (Constitución, art. 25).' },
  { q: 'En temporada alta, ¿las horas extra pueden ser obligatorias?', ops: ['Sí, siempre', 'No: son voluntarias y se pagan con sobretasa', 'Solo para los nuevos', 'Sí, si lo dice el chef'], ok: 1, por: 'El trabajo en sobretiempo es voluntario y se paga con sobretasa.' },
  { q: '¿Por qué publicar el cuadro de turnos con anticipación?', ops: ['Por estética', 'Para que la gente organice su vida y no haya cambios a última hora', 'Porque lo pide el chef', 'No hace falta'], ok: 1, por: 'Quien cuida hijos o viaja desde lejos necesita saber sus turnos con tiempo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 't1', t: '07:15', ch: 'documento', who: null, titulo: 'El cuadro del corcho', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de housekeeping, junto a los carritos de limpieza', show: ['cumplimiento', 'personas', 'calidad'],
    body: (n, F) => `<p>Huele a lavanda industrial y a sábanas recién planchadas. El archivo se llama «Turnos HK y recepción temporada FINAL (2).xlsx». ${F.has('wendy_no') ? 'Wendy aparece trabajando seis días por semana hasta diciembre, sin vacaciones a la vista.' : F.has('wendy_acuerdo') ? 'Las vacaciones de Wendy están marcadas en verde; Milagros la cubrirá.' : ''}</p><p>Antes de que llegue Haydée, lo revisas fila por fila. <mark class="clave">Algunas filas no son un turno: son un riesgo</mark>.</p>`,
    type: 'flag', prompt: 'Marca las filas del cuadro que no se pueden quedar así.',
    doc: { t: 'TURNOS · Próximas semanas · Housekeeping, recepción y cocina', sub: 'Hotel Inti Wasi · versión de Haydée' },
    lines: [
      { id: 'hk7', t: 'Camareras Norma, Fortunata, Rocío y Elsa: lunes a domingo, de 7:00 a 15:00, sin día libre, durante las tres semanas de temporada.', bad: LEY, why: 'Cada trabajador tiene derecho a un descanso semanal de 24 horas consecutivas. Y siete días de 8 horas son 56 horas: más de 48.' },
      { id: 'noche', t: 'Recepción nocturna: Yaneth, de 19:00 a 07:00, seis noches por semana, sola.', bad: LEY, why: 'Son 72 horas semanales, muy por encima del máximo de 48. Y sola en la madrugada, con grupos llegando del aeropuerto.' },
      { id: 'partido', t: 'Mozos: turno partido, de 7:00 a 11:00 y de 18:00 a 22:00.', duda: 'Son 8 horas y el turno partido es posible. Pero conviene preguntar si quienes viven lejos pueden descansar en el hotel entre turnos.' },
      { id: 'kevin', t: 'Cocina: Kevin, doble turno el sábado de la boda, de 7:00 a 23:00.', bad: BP, why: 'Dieciséis horas entre cuchillos y fuego. Aunque las horas extra fueran voluntarias, es una jornada que multiplica el riesgo de accidentes.' },
      { id: 'lavanderia', t: 'Lavandería: descanso semanal el miércoles, en lugar del domingo.' },
      { id: 'registro', t: 'Asistencia: no hay registro; Haydée anota de memoria quién vino.', bad: BP, why: 'Sin registro de asistencia no puedes probar las horas trabajadas ni pagarlas bien. Iván calcula con lo que tú le das.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le das el visto bueno al cuadro. Haydée lo vuelve a clavar en el corcho con la misma chinche.' : `Marcas ${hitsLey} filas en rojo. Cuando Haydée llega, ve el cuadro lleno de círculos y se queda callada.`,
      flags: missLey ? [] : ['cuadro_revisado'], cartera: { turnos: missLey ? 'Sin cambios' : 'Cuadro con filas por corregir' },
      pro: { ok: 'Revisar el cuadro antes de que empiece la semana evita pagar después horas que nadie registró.', risk: 'Un cuadro con siete días seguidos es una prueba escrita de que el hotel no dio descanso.', info: 'Suma las horas por persona y por semana: los errores saltan solos.' },
      kusi: missLey ? ['preocupado', '¿Setenta y dos horas en una semana?'] : ['curioso', '¡Cuántos círculos rojos!'],
    }),
    rules: [[LEY, 'Descanso semanal mínimo de 24 horas consecutivas (D.Leg. 713).'], [LEY, 'Jornada máxima de 8 horas diarias o 48 semanales (Constitución, art. 25).']],
    mirada: {
      ve: 'En temporada alta, los cuadros de turnos se arman con lo que hay, no con lo que se debe. La generalista los mira con dos lentes a la vez: la ley y el cansancio de cada persona.',
      visual: { tipo: 'rango', titulo: 'Horas semanales en el cuadro', min: 0, max: 80, banda: [0, 48], marcas: [['Lavandería', 48], ['Camareras', 56], ['Yaneth', 72]] },
    },
  },
  {
    id: 't2', t: '08:30', ch: 'presencial', who: null, titulo: '«Ellas me lo pidieron»', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de housekeeping', show: ['personas', 'cumplimiento', 'etica'],
    body: () => `<p>Haydée Mamani es la gobernanta: 55 años, de Puno, habla aimara con su hermana por teléfono y lleva 20 años doblando sábanas en hoteles del Cusco.</p><p>«No es que yo las explote, hija. Ellas me pidieron trabajar los siete días para que les paguen más. Fortunata manda plata a su mamá en Juliaca; Rocío está pagando su mototaxi. <mark class="clave">Si les quito el domingo, se me van al hotel de enfrente</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Darles a todas su descanso semanal rotativo con los nuevos ingresos. Quien quiera trabajar algún día libre, que sea excepcional, por escrito y pagado con la sobretasa.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 5, tiempo: -2 }, flags: ['descanso_rotativo'], cartera: { turnos: 'Descanso rotativo; día libre trabajado solo por excepción' },
          out: 'Haydée duda: «¿Y si me falta gente el domingo?». Le muestras que con dos camareras nuevas el domingo queda cubierto. Saca su lapicero y empieza a rehacer las columnas.',
          pro: { ok: 'Respetas el descanso y dejas una puerta abierta para quien necesita ganar más, sin convertirla en la regla.', risk: 'Si la excepción se repite cada semana, vuelves al punto de partida.', info: 'Cuenta cuántos días libres trabajados lleva cada persona al mes.' },
          kusi: ['celebra', 'Descanso para todas, y plata extra cuando de verdad se elige.'] } },
      { id: 'b', label: 'Dejarlo así: lo pidieron ellas, y cada día de descanso trabajado se les pagará con la sobretasa del 100 %.',
        res: { q: 'riesgosa', fx: { personas: -3, cumplimiento: -2, tiempo: 3 }, rel: {}, flags: ['siete_dias'], cartera: { turnos: 'Siete días por semana, pagados con sobretasa' },
          out: 'Haydée sonríe aliviada. Las cuatro camareras trabajarán 21 días seguidos limpiando 14 habitaciones diarias cada una, a 3,400 metros de altura.',
          pro: { ok: 'Respetas lo que piden y se les pagará más.', risk: 'Que la ley prevea un pago por trabajar el descanso no lo convierte en el plan normal de la temporada. Tres semanas sin descanso son una receta para lesiones y errores.' },
          kusi: ['preocupado', 'Veintiún días seguidos… ¿y el cuerpo?'] } },
      { id: 'c', label: 'Prohibir cualquier trabajo en día de descanso, aunque lo pidan.',
        res: { q: 'aceptable', fx: { cumplimiento: 4, personas: -1 }, flags: ['sin_extras'], cartera: { turnos: 'Cero trabajo en día libre' },
          out: 'Haydée se lo comunica a las chicas. Fortunata no dice nada, pero en la tarde le pregunta a Wendy si sabe de algún hostal que necesite limpieza los domingos.',
          pro: { ok: 'Nadie trabajará sin descanso.', risk: 'Si ignoras por qué lo pedían, la necesidad no desaparece: se va a otro lado.' },
          kusi: ['pensando', 'Legal… pero Fortunata igual necesita la plata.'] } },
    ],
    rules: [[LEY, 'Si se trabaja el día de descanso sin sustituirlo por otro, se paga la labor más una sobretasa del 100 % (D.Leg. 713).'], [BP, 'Trabajar el día de descanso debe ser la excepción, no el diseño del cuadro.']],
    mirada: {
      ve: 'Que el trabajador lo pida no cierra la discusión. Muchas personas aceptan jornadas agotadoras porque necesitan el dinero. La generalista escucha esa necesidad y busca cómo atenderla sin que el cuerpo pague la cuenta.',
      visual: { tipo: 'balanza', a: { t: 'Siete días por semana', items: ['Más ingreso', 'Haydée tranquila', 'Lo piden ellas'] }, b: { t: 'Descanso rotativo', items: ['24 horas de descanso', 'Menos lesiones', 'Día extra solo si se elige'] } },
      normas: [{ ley: 'D.Leg. 713, descansos remunerados', dice: 'El trabajador tiene derecho como mínimo a 24 horas consecutivas de descanso en cada semana. Si trabaja su día de descanso sin sustituirlo por otro día, se le paga la labor más una sobretasa del 100 %.', practica: 'La sobretasa existe para que trabajar el descanso sea caro y excepcional, no para planificar la temporada sin días libres.' }],
    },
  },
  {
    id: 't3', t: '10:00', ch: 'documento', who: null, titulo: 'El cuadro nuevo', banner: 'assets/3d/scenes/oficina.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Haydée te presta su escritorio y se va a revisar habitaciones. ${F.has('canales_locales') ? 'Con los egresados del instituto que empiezan hoy, por fin tienes gente para rotar.' : 'Tienes menos gente nueva de la que quisieras, pero alcanza para rotar.'}</p><p>Armas el cuadro de la temporada. <mark class="clave">Cada decisión del cuadro es una decisión sobre el cansancio de alguien</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada parte del cuadro de turnos.', boton: 'Guardar el cuadro',
    bloques: [
      { id: 'hk', t: 'Housekeeping', n: 1, ops: [
        { id: 'hk1', t: 'Seis camareras en rotación: cada una con un día libre fijo a la semana, avisado con anticipación.', ok: true, por: 'Descanso para todas y domingos cubiertos.' },
        { id: 'hk2', t: 'Las cuatro de siempre, siete días, y las nuevas como apoyo.', ok: false, por: 'Mantiene el problema.' },
      ] },
      { id: 'noche', t: 'Recepción nocturna', n: 1, ops: [
        { id: 'n1', t: 'Dos turnos de 8 horas, de 15:00 a 23:00 y de 23:00 a 07:00, sumando a Sonia, la egresada con experiencia nocturna.', ok: true, por: 'Nadie pasa de 48 horas y la madrugada tiene una persona descansada.' },
        { id: 'n2', t: 'Yaneth sigue de 19:00 a 07:00, pero se le pagan las horas extra.', ok: false, por: 'Pagar no hace legal una jornada de 72 horas impuesta.' },
      ] },
      { id: 'extras', t: 'Horas extra', n: 1, ops: [
        { id: 'e1', t: 'Voluntarias, autorizadas por escrito antes de hacerlas y registradas el mismo día.', ok: true, por: 'Así se pagan bien y nadie las hace a la fuerza.' },
        { id: 'e2', t: 'Obligatorias para todos en temporada.', ok: false, por: 'El sobretiempo es voluntario.' },
      ] },
      { id: 'registro', t: 'Registro', n: 1, ops: [
        { id: 'r1', t: 'Registro de asistencia diario, con hora de entrada y salida, firmado por cada trabajador.', ok: true, por: 'Es la base para pagar bien.' },
        { id: 'r2', t: 'Haydée sigue anotando de memoria: es de confianza.', ok: false, por: 'La confianza no reemplaza un registro.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 4, personas: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['cuadro_legal'], cartera: { turnos: q === 'riesgosa' ? 'Cuadro con huecos' : 'Cuadro legal armado', noche: q === 'riesgosa' ? 'Sigue sola' : 'Dos turnos de noche' },
        out: q === 'buena' ? 'Sumas las horas: nadie pasa de 48, todos tienen un día libre y la madrugada ya no está sola. Llamas a Sonia: puede empezar esta misma noche.' : q === 'aceptable' ? 'El cuadro mejora, aunque una parte todavía no aguantaría una inspección.' : 'El cuadro se ve más ordenado, pero repite los mismos problemas con otros colores.',
        pro: { ok: 'Un cuadro legal no es un cuadro perfecto: es uno donde nadie se queda sin descanso ni pasa del máximo.', risk: 'Si las horas extra no se registran, Iván no podrá pagarlas.', info: 'Guarda una versión por semana: si alguien reclama, sabrás qué turno tenía.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cuarenta y ocho para todos!' : 'Suma las horas otra vez.'],
      };
    },
    rules: [[BP, 'Arma el cuadro sumando horas por persona y por semana, no solo cubriendo puestos.']],
    mirada: {
      ve: 'El cuadro de turnos legal es uno de los entregables de las dos semanas. Detrás de cada casilla hay alguien que cuida a un hijo, estudia de noche o viaja una hora en combi.',
      visual: { tipo: 'cambio', titulo: 'Antes y después', pares: [['Cuatro camareras, siete días', 'Seis camareras, un día libre cada una'], ['Yaneth sola, 12 horas', 'Dos turnos de 8 horas'], ['Horas «de favor»', 'Horas extra autorizadas y registradas'], ['Asistencia de memoria', 'Registro firmado']] },
    },
  },
  {
    id: 't4', t: '11:45', ch: 'presencial', who: 'chef', titulo: 'La boda de los Pacheco', banner: 'assets/foto/supervisa.webp', lugar: 'Cocina, entre el desayuno y el almuerzo', show: ['personas', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('chef_escuchado') ? 'El chef te recibe con un café: «Usted me escuchó ayer. Ahora ayúdeme con esto».' : F.has('chef_a_la_defensiva') ? 'El chef te recibe sin mirarte: «Ya sé que usted no me tiene simpatía, pero necesito resolver el sábado».' : 'El chef te espera con la lista del banquete en la mano.'} ${F.has('chef_formal') ? '«Kevin salió bueno; usted lo hizo entrar rápido y bien.' : '«Kevin salió bueno.'} Quiero que el sábado haga doble: de siete a once de la noche. Él dice que sí.»</p>${F.has('chef_informal') ? '<p>Mientras habla, te das cuenta de algo: <mark class="clave">Kevin sigue sin contrato y sin alta</mark>. Lleva tres días trabajando «a prueba».</p>' : '<p>Son 120 invitados. <mark class="clave">El chef necesita manos, y Kevin quiere la plata</mark>.</p>'}`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Aceptar el doble turno de Kevin: es joven, lo pide él y es un solo sábado.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, personas: -3, tiempo: 3 }, rel: { chef: 1 }, flags: ['kevin_doble'], cartera: { banquete: 'Kevin, 16 horas el sábado' },
          out: 'El chef te da la mano: «Así se trabaja». Kevin estará 16 horas de pie entre cuchillos, ollas y una freidora que no tiene tapa.',
          pro: { ok: 'Resuelves el banquete rápido y Kevin gana más.', risk: 'Dieciséis horas en una cocina caliente es una jornada que multiplica el riesgo de un accidente.' },
          kusi: ['preocupado', 'Dieciséis horas con cuchillos…'] } },
      { id: 'b', label: 'Repartir el banquete: Kevin hace su turno y, si quiere, dos horas extra autorizadas; la noche la cubren Luz Clarita y Marleny moviendo su turno. Si a alguien le falta contrato o alta, se firma hoy.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 3, tiempo: -2 }, rel: { chef: 0 }, flags: ['banquete_repartido', 'kevin_regularizado'], cartera: { banquete: 'Turnos repartidos, sin dobles' },
          out: 'El chef refunfuña: «Usted complica todo». Pero mira la lista y ve que tiene más gente que con Kevin solo. En la tarde, Kevin firma su contrato en tu oficina; tiembla un poco al poner su nombre.',
          pro: { ok: 'Cubres el banquete sin dobles jornadas y aprovechas para cerrar cualquier hueco de formalidad.', risk: 'Mover turnos a última hora incomoda a Luz Clarita y a Marleny: pregúntales antes.', info: 'Un banquete es un pico previsible: se planifica con el cuadro, no con dobles turnos.' },
          kusi: ['animo', '¡Más manos, menos cansancio!'] } },
      { id: 'c', label: 'Decirle al chef que en la cocina no habrá horas extra esta temporada.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -1, confianza: -2 }, rel: { chef: -1 }, flags: ['sin_extras'], cartera: { banquete: 'Sin extras; el chef, molesto' },
          out: 'El chef tira el trapo sobre la mesa: «¿Y con qué gente hago la boda?». No tienes respuesta todavía.',
          pro: { ok: 'Evitas jornadas excesivas.', risk: 'Una regla absoluta sin alternativa deja al chef sin solución y te quita credibilidad.' },
          kusi: ['pensando', 'No sin un plan B…'] } },
    ],
    rules: [[LEY, 'El trabajo en sobretiempo es voluntario y se paga con sobretasa.'], [BP, 'Los picos previsibles, como un banquete, se cubren con el cuadro de turnos, no con jornadas dobles.']],
    mirada: {
      ve: 'El chef no pide algo malo: pide manos para un evento que pone en juego la reputación del hotel. El trabajo de RR.HH. es darle esas manos sin que una sola persona cargue con todo.',
      visual: { tipo: 'flujo', titulo: 'Cubrir un pico previsible', pasos: ['Contar los puestos que faltan', 'Mover turnos con acuerdo', 'Horas extra voluntarias y cortas', 'Revisar contratos y altas'], aqui: 1 },
    },
  },
  {
    id: 't5', t: '14:30', ch: 'llamada', who: null, titulo: 'Las voces del cuadro', banner: 'assets/foto2/callcenter.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'calidad'],
    body: () => `<p>Antes de publicar el cuadro, llamas a tres personas a quienes les cambia la vida. Afuera empieza a llover; en el patio, alguien corre a recoger los manteles del tendedero.</p><p><mark class="clave">Cada uno te cuenta algo que no estaba en el Excel</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Fortunata Mamani · camarera · de Juliaca', 'Contesta mezclando aimara y castellano', '«Señorita, si me dan el domingo libre, ¿cómo le mando a mi mamá? Ella está enferma. Yo quiero trabajar, aunque sea algunos domingos.»'],
      ['Yaneth Huallpa · recepcionista nocturna', 'Contesta dormida: la despertaste', '«¿Un segundo turno de noche? ¡Ojalá! A las tres llegan los grupos del aeropuerto y estoy sola. Pero ¿me van a bajar el sueldo si trabajo menos horas?»'],
      ['Rubén Ccori · mozo · vive en San Jerónimo', 'Contesta desde el paradero', '«El turno partido, de 7 a 11 y de 6 a 10… vivo a 40 minutos en combi. Entre turno y turno no me alcanza para ir a mi casa y volver.»'],
    ],
    prompt: 'Escuchaste las tres llamadas. ¿Qué haces con el cuadro?',
    choices: [
      { id: 'a', label: 'Ajustarlo: a Fortunata, algunos domingos voluntarios y pagados con sobretasa; a Yaneth, la tranquilidad de que su sueldo no baja; a Rubén, un lugar para descansar y comer en el hotel entre turnos.',
        res: { q: 'buena', fx: { personas: 5, calidad: 2 }, flags: ['equipo_escuchado'], cartera: { turnos: 'Cuadro ajustado con lo que dijo el equipo' },
          out: 'Fortunata dice «yuspagara», gracias en aimara, y cuelga riéndose. Yaneth se vuelve a dormir tranquila. Rubén pregunta si en el cuarto de descanso hay enchufe para cargar el celular. Hay.',
          pro: { ok: 'Un cuadro que la gente puede cumplir vale más que uno perfecto en el papel.', risk: 'Lo de Fortunata debe seguir siendo excepcional: lleva la cuenta.', info: 'Reducir la jornada a la legal no autoriza a bajar el sueldo pactado.' },
          kusi: ['celebra', '¡Un cuadro con cara de personas!'] } },
      { id: 'b', label: 'Publicar el cuadro tal como está: si se cambia por cada pedido, nunca se termina.',
        res: { q: 'aceptable', fx: { calidad: 1, personas: -2, tiempo: 2 }, cartera: { turnos: 'Cuadro publicado sin ajustes' },
          out: 'El cuadro queda en el corcho. Rubén pasará cuatro horas en la Plaza de Armas cada tarde, bajo la lluvia, esperando su segundo turno.',
          pro: { ok: 'Mantienes el orden del cuadro.', risk: 'Si no escuchas, la gente cumple el cuadro a medias y sin decírtelo.' },
          kusi: ['pensando', 'Escuchaste… pero no cambiaste nada.'] } },
      { id: 'c', label: 'Para no perder a Fortunata, dejarla trabajar los siete días como pedía.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, personas: -1 }, flags: ['siete_dias'], cartera: { turnos: 'Una excepción que se vuelve regla' },
          out: 'Fortunata está feliz. Mañana, Rocío y Elsa te preguntan por qué a ella sí y a ellas no.',
          pro: { ok: 'Atiendes la necesidad de Fortunata.', risk: 'Una excepción sin límite rompe el cuadro y abre reclamos entre compañeras.' },
          kusi: ['preocupado', 'La excepción ya es la regla…'] } },
    ],
    rules: [[BP, 'Antes de publicar un cuadro, consulta a quienes cambia más la vida.']],
    mirada: {
      ve: 'Los turnos no se viven en el Excel: se viven en la combi, en el paradero y en la casa de una mamá enferma en Juliaca. Escuchar antes de publicar evita que la gente busque sus propias soluciones a escondidas.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le dirías a Yaneth', txt: 'Trabajar ocho horas en vez de doce no te baja el sueldo. Lo que cambia es que vas a tener una compañera en la madrugada y vas a dormir más.' },
    },
  },
  {
    id: 't6', t: '16:30', ch: 'documento', who: null, titulo: 'Publicar el cuadro', banner: 'assets/esc/escalera.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>${F.has('mediacion_acuerdo') ? 'A las tres revisaste con el chef y Marleny sus acuerdos: el chef avisó de un cambio de receta antes de servir. Pequeño, pero real.' : 'La cocina sigue tensa, pero hoy el foco son los turnos.'}</p><p>El cuadro está listo. Ahora falta lo más difícil: <mark class="clave">que se cumpla y que se pague bien</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena cómo pones en marcha el cuadro nuevo. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'valida', t: 'Validar el cuadro con Haydée y con el chef', por: 'Los jefes de área deben sentirlo suyo.' },
      { id: 'suma', t: 'Revisar que nadie pase de 48 horas ni se quede sin día libre', por: 'La última verificación antes de publicar.' },
      { id: 'explica', t: 'Explicarlo al equipo en el cambio de turno de las 15:00', por: 'Un cuadro explicado se discute menos.' },
      { id: 'publica', t: 'Publicarlo con una semana de anticipación en el corcho y en el grupo', por: 'La gente organiza su vida con tiempo.' },
      { id: 'registra', t: 'Registrar cada día la asistencia y las horas extra autorizadas', por: 'Sin registro, no hay pago correcto.' },
      { id: 'ivan', t: 'Enviarle a Iván las horas extra y los días libres trabajados antes del cierre de planilla', por: 'Iván calcula con lo que le das.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, cumplimiento: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'buena' ? ['cuadro_publicado', 'horas_a_ivan'] : ['cuadro_publicado'], cartera: { turnos: 'Cuadro publicado' },
        out: q === 'buena' ? 'Clavas el cuadro en el corcho, lo mandas al grupo y le envías a Iván una pestaña nueva: «Horas extra y descansos trabajados».' : 'El cuadro queda publicado, aunque el camino hasta la planilla quedó con huecos.',
        pro: { ok: 'Un cuadro termina de verdad cuando sus horas llegan bien a la boleta.', risk: 'Si Iván no recibe las horas a tiempo, pagará con lo que tenga, y el error será de los dos.', info: 'Acuerda con Iván una fecha fija de corte para recibir las horas cada mes.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Del corcho a la boleta!' : '¿Y cómo llegan las horas a la planilla?'],
      };
    },
    rules: [[BP, 'El cuadro de turnos alimenta la planilla: envía las horas al responsable antes del cierre.']],
    mirada: {
      ve: 'Muchos errores de planilla nacen en un cuadro de turnos que nunca llegó al contador. La generalista conecta las dos puntas.',
      visual: { tipo: 'linea', titulo: 'Del cuadro a la boleta', hitos: [['Martes', 'Cuadro publicado'], ['Cada día', 'Registro de asistencia'], ['Corte de mes', 'Horas a Iván'], ['Pago', 'Boleta correcta']] },
    },
  },
  {
    id: 't7', t: '18:40', ch: 'correo', who: 'veronica', titulo: 'Los turnos, para Verónica', banner: 'assets/foto/revisa.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Kevin ${F.has('kevin_doble') ? 'pasa por tu puerta y te dice, contento, que el sábado hará doble.' : 'pasa por tu puerta y te enseña una foto del rocoto relleno que le salió.'} La lluvia se ha convertido en garúa.</p><p>Verónica quiere saber cómo quedan los turnos de la boda y de la temporada. <mark class="clave">Le preocupa cuánto va a costar</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Qué cambió, cuánta gente más necesitas, qué riesgo evitaste y qué decisión le toca a ella.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { veronica: 1 }, responde: 'Verónica: el cuadro nuevo da un día libre a cada persona y nadie pasa de 48 horas. Para lograrlo sumamos a Sonia en la noche y dos camareras de la temporada. La boda queda cubierta sin dobles turnos. Decisión para usted: aprobar que Sonia empiece esta noche.',
          out: 'Verónica responde: «Aprobado lo de Sonia. ¿Y Yaneth estaba sola de noche todo este tiempo?». Le dices que sí. «No lo sabía.»', kusi: ['feliz', 'Ahora la gerencia ve lo que antes no veía.'] } },
      { id: 'b', label: 'Que todo está bajo control y que la boda saldrá perfecta.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Verónica: todo bajo control con los turnos y la boda 👍',
          out: 'Verónica responde con un corazón. Mañana pregunta por qué hay una recepcionista nueva en la noche que ella no aprobó.', kusi: ['pensando', 'Bajo control… ¿pero ella lo sabe?'] } },
    ],
    mirada: { ve: 'Cuando el cambio cuesta, la gerencia necesita ver el riesgo que se evita. Que Yaneth estaba sola de noche, 72 horas por semana, es el argumento que ningún número reemplaza.' },
  },
];
