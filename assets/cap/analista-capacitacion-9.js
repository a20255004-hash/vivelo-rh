// Analista de Capacitación y Desarrollo · Capítulo 9 · «El comité» · Semana 2, jueves.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año (capítulos 1 y 7).
// - D.S. 005-2012-TR, art. 28: dentro de la jornada de trabajo (capítulos 3 y 7).
//   https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
// Las personas, cifras, plazos y decisiones del comité son ficticios.

export const CAP = {
  n: 9, titulo: 'El comité', dia: 'Semana 2, jueves', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'Financiera Chimú · Sala de directorio, sede central',
  inicio: '07:30', fin: '19:00', cierreHora: '18:30',
  apertura: 'Jueves, 10:00 a. m., cuarto piso. Diez minutos para explicar lo que hiciste en nueve días.', boton: 'Revisar las láminas',
  kusi: 'Hoy se escucha todo lo que hiciste. ¡Respira y a decir la verdad!',
  lead: 'Corregiste las láminas, respondiste delante de la Gerencia General, dijiste lo que viste en El Porvenir, pediste lo que correspondía y le contaste a la gente del taller qué se decidió.',
  reflexion: '¿Qué dijiste hoy que te costó decir?',
  siguiente: { n: 10, titulo: '¿Te ves aquí?', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'laminas', p: 'Láminas para el comité', j: 'Lorena · Desarrollo', d: 0, e: 'Borrador de anoche' },
  { id: 'comite', p: 'Presentación al comité', j: 'Lorena y tú', d: 0, e: 'Hoy, 10:00' },
  { id: 'metas', p: 'Meta de los asesores nuevos', j: 'Riesgos y Negocios', d: 0, e: 'Sobre la mesa' },
  { id: 'pedido', p: 'Lo que se le pide al comité', j: 'Lorena · Desarrollo', d: 0, e: 'Por definir' },
  { id: 'plan90', p: 'Plan a 90 días', j: 'Tú · Desarrollo', d: 0, e: 'Por armar' },
];

export const FUTURO = {
  comite_claro: ['Le dijiste al comité qué sirvió, qué no se sabe y cuándo se sabrá.', 'Lorena lo recordará en tu evaluación. Capítulo 10.'],
  comite_triunfo: ['Le dijiste al comité que el taller funcionó, sin matices.', 'En 90 días te lo van a preguntar. Capítulo 10.'],
  comite_pelea: ['En el comité culpaste a la meta de Víctor.', 'Capítulo 10.'],
  presion_dicha: ['Le dijiste al comité, sin nombres, que hay presión para inflar ventas, y se abrió una revisión de la meta.', 'Milagros lo sabrá el viernes. Capítulo 10.'],
  presion_negada: ['Dijiste en el comité que no viste nada en El Porvenir.', 'Milagros se entera. Capítulo 10.'],
  presion_con_nombre: ['Dijiste en el comité el nombre de la agencia y del administrador.', 'Capítulo 10.'],
  pedido_ajustado: ['Pediste poco, con fecha y medible: refuerzo, medición a 90 días y cinco agencias.', 'Capítulo 10.'],
  pedido_grande: ['Pediste más de lo que los datos sostenían.', 'Capítulo 10.'],
  plan90_listo: ['Armaste el plan a 90 días con fechas y responsables.', 'Capítulo 10.'],
  taller_informado: ['Les contaste a los asesores del taller lo que se decidió, incluida la parte incómoda.', 'Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  rosario: { n: 'Rosario Ccahua', sub: 'Supervisora de SST', c: '#8A3B3B' },
  gonzalo: { n: 'Gonzalo Pinillos', sub: 'Abogado · Legal', c: '#46546B' },
  taller: { n: 'Taller · Evaluar y cobrar', sub: '20 asesores, Sandra y Don Aurelio', c: '#7A5C2E' },
};

export const WSP = [
  { chat: 'lorena', t: '07:20', de: 'Lorena', txt: 'Anoche hice las láminas a las 12. Revísalas, por favor, que ya no veo nada 🙈' },
  { chat: 'sandra', t: '08:00', de: 'Sandra', txt: 'Fuerza hoy. Si te preguntan algo que no sabes, di que no sabes. Don Aurelio dice lo mismo, pero con más groserías 😂' },
  { chat: 'rosario', t: '09:00', de: 'Rosario', txt: 'El comité de SST aprobó ayer el programa. Lleva el acta impresa.', si: 'programa_sst_listo' },
  { chat: 'rosario', t: '09:00', de: 'Rosario', txt: 'El comité de SST devolvió el programa: falta quién responde en cada agencia. Lo corregimos el lunes.', si: 'programa_sst_flojo' },
  { chat: 'victor', t: '09:40', de: 'Víctor', txt: 'Vi la lista de rechazados con Riesgos. De 31, hay 12 que yo también habría rechazado. Hay otros que no. Nos vemos adentro.', si: 'victor_datos' },
  { chat: 'gonzalo', t: '14:30', de: 'Gonzalo', txt: 'Llegó un reclamo al canal de ética: una asesora de Chepén dice que le hicieron firmar una charla de marzo. Hablemos con Lorena hoy.', si: 'registro_reconstruido' },
  { chat: 'gonzalo', t: '14:30', de: 'Gonzalo', txt: 'SUNAFIL acusó recibo. Hay que seguir el plan correctivo al pie de la letra: el mismo programa será la mejor defensa.', si: 'evidencia_real' },
  { chat: 'ronald', t: '16:15', de: 'Ronald', txt: 'Me enteré de que les fue bien en el comité 👏 Cuando quieran ver lo de gerentes, ya le puse indicadores de aplicación.', si: 'ronald_puerta' },
];

export const CORREOS = [
  { t: '08:30', de: 'Asistente de Gerencia General', para: 'Comité de Gestión', asunto: 'Agenda · 10:00', html: '<p>1. Desarrollo: piloto en El Porvenir y plan priorizado (10 minutos). 2. Riesgos: evaluación de créditos de asesores nuevos. 3. Legal: requerimiento de SUNAFIL.</p><p>Se ruega puntualidad.</p>' },
  { t: '12:40', de: 'Gerencia General', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'Acuerdos del comité', html: '<p>Se libera el primer tramo para continuar con el refuerzo en campo y la medición a 90 días. Riesgos y Negocios presentan una revisión de la meta de los asesores nuevos en 15 días.</p><p>Elvira Cabanillas · Gerente General</p>' },
];

export const QUIZ = [
  { q: 'En un comité te preguntan «¿sirvió o no sirvió?». ¿Cuál es la mejor respuesta?', ops: ['«Sí» sin más', 'Decir qué se sabe, qué no se sabe y cuándo se sabrá', '«No lo sé» y callar', 'Echarle la culpa a otra área'], ok: 1, por: 'Es una respuesta corta, honesta y con una fecha para saber más.' },
  { q: '¿Por qué conviene decir qué falta medir?', ops: ['Para ganar tiempo', 'Porque evita prometer resultados y deja claro cuándo se sabrá', 'Para parecer humilde', 'No conviene'], ok: 1, por: 'Prometer resultados que no se pueden sostener cuesta credibilidad.' },
  { q: 'Te preguntan en el comité si viste algo irregular en una agencia. ¿Qué haces?', ops: ['Dices que no viste nada', 'Dices lo que sabes, sin exponer a quien te lo contó, y propones revisar', 'Das el nombre de quien te contó', 'Cambias de tema'], ok: 1, por: 'La verdad se puede decir sin poner en riesgo a quien confió en ti.' },
  { q: '¿Qué es lo más razonable pedir tras un piloto con pocos datos?', ops: ['Replicar en las 40 agencias', 'Reforzar, medir a 90 días y ampliar a pocas agencias', 'Cancelar todo', 'Un programa para gerentes'], ok: 1, por: 'Se escala en la medida en que se aprende.' },
  { q: '¿Cuántas capacitaciones de SST al año exige la Ley 29783 como mínimo?', ops: ['Dos', 'Tres', 'No menos de cuatro', 'Las que apruebe el comité'], ok: 2, por: 'El artículo 35, literal b), de la Ley 29783 exige no menos de cuatro al año.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'x1', t: '07:45', ch: 'documento', who: 'lorena', titulo: 'Las láminas de medianoche', banner: 'assets/foto2/presentacion.webp', lugar: 'Oficina de Lorena', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Lorena tiene los ojos rojos y dos cafés encima. Hizo las láminas a medianoche${F.has('plan_priorizado') ? ', siguiendo el orden de tus tarjetas' : ''}. Quiere salvar el área, y se nota.</p><p>«Revísalas sin piedad. <mark class="clave">Mejor que me lo digas tú a que me lo diga Mario</mark>.»</p>`,
    type: 'flag', prompt: 'Marca lo que no se puede decir así delante del comité.',
    doc: { t: 'Capacitación que cambia resultados', sub: 'Láminas para el Comité de Gestión · borrador de Lorena' },
    lines: [
      { id: 'mora', t: 'El taller bajó la mora de los asesores nuevos.', bad: BP, why: 'Con cuatro días de datos no se puede afirmar eso. La mora no ha cambiado.' },
      { id: 'sst', t: 'Chimú cumple con todas las capacitaciones de SST del año.', bad: LEY, why: 'Solo se hizo una y faltan tres. La Ley 29783 (art. 35 b) exige no menos de cuatro al año.' },
      { id: 'exito', t: 'Satisfacción con el taller: éxito total.', bad: BP, why: 'La satisfacción es solo reacción. No prueba resultados.' },
      { id: 'prueba', t: 'Prueba: entrada 4,8 y salida 7,6; 14 de 20 llegaron al 7.' },
      { id: 'acuerdos', t: 'Acuerdos por escrito: 27 contra 4 del grupo de comparación.' },
      { id: 'costo', t: 'El piloto costó muy poco frente a los S/ 43,200 de «Liderazgo 360».', duda: 'Es cierto, pero suena a pelea con un proveedor. Mejor dar el costo por participante.' },
      { id: 'sigue', t: 'Próxima medición de mora: en 90 días, con Riesgos.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'Corriges varias láminas, pero queda la línea de SST. A las 10:20, Gonzalo la va a mirar raro.' : `Le marcas ${hitsBp} frases y la de SST. Lorena tacha, sin discutir, las tres. «Duele menos a las 8 que a las 10», dice.`,
      flags: [], cartera: { laminas: missLey ? 'Quedó una frase de SST' : 'Corregidas: nada que no se pueda sostener' },
      pro: { ok: 'Revisarle las láminas a tu jefa también es cuidarla.', risk: 'Una afirmación falsa en un comité arrastra todo lo que sí es cierto.', info: 'Lleva un papel con los cuatro números. Te los van a pedir.' },
      kusi: missLey ? ['preocupado', '¿Cumple con todas…? ¿Segura?'] : ['celebra', 'Láminas que aguantan preguntas.'],
    }),
    rules: [[LEY, 'Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año.'], [BP, 'En una presentación, separa lo probado de lo que se espera.']],
    mirada: {
      ve: 'Cuando el área está en juego, hasta una jefa seria exagera. Un buen equipo se revisa antes de entrar. Corregirle algo a tu jefa a las ocho de la mañana es de los trabajos menos visibles y más valiosos.',
      visual: { tipo: 'cambio', titulo: 'De la lámina a lo que se sostiene', pares: [['«Bajó la mora»', '«Más acuerdos; la mora, en 90 días»'], ['«Cumplimos con SST»', '«Una hecha, tres programadas»'], ['«Éxito total»', '«Entrada 4,8 y salida 7,6»']] },
    },
  },
  {
    id: 'x2', t: '10:10', ch: 'presencial', who: 'victor', titulo: '«¿Sirvió o no sirvió?»', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala de directorio, cuarto piso', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>Mesa larga, aire acondicionado helado, café en tazas con el logo. Elvira Cabanillas, gerente general, 62 años, otuzcana, escucha con los lentes en la mano. Víctor pone una tabla sobre la mesa.${F.has('numeros_lindos') ? ' «Se olvidaron de un número: la colocación bajó 18 %.» Lorena te mira.' : F.has('victor_molesto') ? ' «La colocación bajó 18 %, y me enteré por un Excel.»' : ' «La colocación de ese grupo bajó 18 %. Ya lo hablamos, y aun así quiero que lo escuchen todos.»'}</p><p>Elvira te mira a ti, no a Lorena: «Señorita, usted estuvo en la calle. Sin vueltas: <mark class="clave">¿sirvió o no sirvió?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: '«Aprendieron y lo están aplicando a medias. La colocación bajó, en parte porque rechazan más. La mora todavía no la sé: en 90 días le doy la respuesta, con Riesgos.»',
        res: { q: 'buena', fx: { confianza: 5, etica: 4, calidad: 3 }, rel: { lorena: 1, victor: 0 }, flags: ['comite_claro'], cartera: { comite: 'Respuesta directa, con fecha' },
          out: 'Elvira se pone los lentes: «Por fin alguien me dice “no sé” con una fecha». Víctor pide los 31 créditos rechazados para revisarlos en 15 días. Mario anota algo y no dice nada, lo que en él ya es bueno.',
          pro: { ok: 'Respondes corto, con lo que sabes y lo que no, y una fecha.', risk: 'Te comprometes a volver en 90 días con un número que puede no gustar.', info: 'Escríbelo como compromiso apenas salgas.' },
          kusi: ['celebra', '¡Con fecha y sin adornos!'] } },
      { id: 'b', label: '«Sí, sirvió. Los acuerdos se multiplicaron por seis y las promesas cumplidas subieron. La colocación se recuperará.»',
        res: { q: 'riesgosa', fx: { confianza: 3, etica: -3, calidad: -3 }, flags: ['comite_triunfo'], cartera: { comite: 'Respuesta triunfal' },
          out: 'Elvira asiente. Mario levanta la vista: «¿Se recuperará cuándo?». No tienes cómo responder. Lorena mira su cuaderno.',
          pro: { ok: 'Das seguridad y ganas apoyo por hoy.', risk: 'Prometes lo que no sabes. Dentro de 90 días, esa frase volverá.' },
          kusi: ['preocupado', '¿Se recuperará…? ¿Quién lo dijo?'] } },
      { id: 'c', label: '«Sirvió, pero no va a funcionar mientras la meta de los nuevos siga en 30 créditos. Eso depende de Víctor.»',
        res: { q: 'aceptable', fx: { etica: 1, confianza: -3 }, rel: { victor: -1 }, flags: ['comite_pelea'], cartera: { comite: 'Discusión sobre la meta' },
          out: 'Víctor se endereza: «Esa meta no es mía: me la pusieron en esta misma sala». Elvira levanta la mano para frenarlos. Tienes un punto, pero la conversación ya no es sobre capacitación.',
          pro: { ok: 'Señalas un problema real.', risk: 'Hacerlo como acusación, delante de la gerencia, le quita fuerza y te cierra a tu mejor aliado posible.' },
          kusi: ['pensando', 'Razón sí… ¿pero así?'] } },
    ],
    rules: [[BP, 'Frente a la pregunta directa de un directivo: qué se sabe, qué no y cuándo se sabrá.']],
    mirada: {
      ve: 'La mejor respuesta de la evaluación de capacitación cabe en tres frases: aprendieron, se aplica a medias y el resultado todavía no se puede afirmar. Las gerencias lo aceptan más de lo que uno cree, cuando viene con una fecha.',
      visual: { tipo: 'linea', titulo: 'Los tiempos de la evaluación', hitos: [['Día 0', 'Reacción y aprendizaje'], ['Días 1 a 5', 'Primeros acuerdos'], ['Semanas', 'Aplicación en campo'], ['90 días', 'Mora, comparada']] },
    },
  },
  {
    id: 'x3', t: '10:35', ch: 'presencial', who: null, titulo: '«¿Usted vio algo?»', banner: 'assets/foto2/tension.webp', lugar: 'Sala de directorio', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Patricia Chu, jefa de Riesgos, abre su informe. ${F.has('presion_reportada') || F.has('presion_reportada_tarde') ? '«Encontramos evaluaciones con ventas infladas en varias agencias. No es una sola persona: es un patrón.»' : '«Nos llamó la atención que varias evaluaciones de asesores nuevos tienen ventas en cifras redondas. Es temprano para decir por qué.»'}</p><p>Elvira gira hacia ti: «Usted estuvo en El Porvenir. <mark class="clave">¿Vio algo que debamos saber?</mark>». ${F.has('presion_confrontada') ? 'Nando ya le dijo a Víctor lo que pasó esa tarde.' : 'En la mesa nadie sabe lo que te contó Milagros.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decir lo que sabes, sin agencia ni nombres: los nuevos sienten presión por llegar a los 30 créditos, y algunos dicen que les piden «redondear». Pedir que se revise la meta.',
        res: { q: 'buena', fx: { etica: 6, personas: 3, confianza: 2 }, flags: ['presion_dicha'], cartera: { metas: 'Revisión en 15 días: Riesgos y Negocios' },
          out: 'Víctor no dice nada por un largo rato. Luego: «Esa meta se fijó para asesores con un año. Yo mismo la hice valer para los nuevos». Elvira pide una revisión en 15 días.',
          pro: { ok: 'Dices la verdad y cuidas a quien te la contó.', risk: 'Podrían preguntarte de dónde lo sabes, y tendrás que sostener el silencio sobre los nombres.', info: 'Avísale a Milagros que el tema llegó a donde tenía que llegar, sin más detalles.' },
          kusi: ['animo', 'Lo dijiste sin exponer a nadie. Qué difícil, y qué bien.'] } },
      { id: 'b', label: 'Responder que no viste nada irregular: no te corresponde, y no quieres exponer a nadie.',
        res: { q: 'riesgosa', fx: { etica: -6, personas: -3 }, flags: ['presion_negada'], cartera: { metas: 'Riesgos continúa, sin tu aporte' },
          out: 'Elvira asiente y pasa al siguiente punto. Riesgos sigue revisando, solo que más lento. Esta noche te vas a acordar de cómo te bajó la voz Milagros en el mercado.',
          pro: { ok: 'Proteges a Milagros de una pregunta incómoda.', risk: 'Negar lo que sabes frente a la Gerencia General no la protege a ella: protege la meta que la presiona.' },
          kusi: ['triste', '«¿Vio algo?» «No.» Y sí viste…'] } },
      { id: 'c', label: 'Contarlo todo con detalle: El Porvenir, Nando, y que él les pide que redondeen.',
        res: { q: 'riesgosa', fx: { etica: 1, personas: -5, confianza: -2 }, rel: { victor: -1 }, flags: ['presion_con_nombre'], cartera: { metas: 'Señalado un administrador' },
          out: 'Todos miran a Víctor. El problema ahora se llama Nando. Por la tarde, en El Porvenir solo se habla de quién habrá sido. Y en la agencia, una sola asesora almorzó contigo.',
          pro: { ok: 'Eres transparente.', risk: 'Das un nombre sobre algo que oíste de una sola persona, y dejas expuesta a quien confió en ti. Nando repite una presión que viene de más arriba.' },
          kusi: ['preocupado', 'Un nombre tapa un patrón… y delata a Milagros.'] } },
    ],
    rules: [[BP, 'Puedes decir lo que sabes sin exponer a quien te lo contó. Lo que se oye de una persona no se presenta como un hecho comprobado sobre otra.']],
    mirada: {
      ve: 'Este es el momento que define a un profesional de RR.HH.: la gerencia pregunta y la respuesta tiene costos. No se trata de callar ni de delatar. Se trata de decir lo que se sabe, con el cuidado de no destruir a quien confió en ti, y llevar la pregunta al sistema: la meta.',
      visual: { tipo: 'balanza', a: { t: 'Lo que protege callar', items: ['Tu tranquilidad hoy', 'Evitar una mala cara', 'La meta como está'] }, b: { t: 'Lo que protege hablar con cuidado', items: ['A Milagros y a otras', 'La calidad de los créditos', 'Tu credibilidad'] } },
    },
  },
  {
    id: 'x4', t: '11:05', ch: 'presencial', who: 'lorena', titulo: 'Qué pedir', banner: 'assets/foto/acuerdo.webp', lugar: 'Sala de directorio', show: ['calidad', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Faltan dos minutos. Lorena te pasa una nota por debajo de la mesa: «Pide tú. Tres cosas».${F.has('tramos') ? ' Mario ya tiene el papel de los tramos delante.' : F.has('promesa_mora') ? ' Mario ya tiene delante tu papel firmado.' : ''}${F.has('replica_frenada') ? ' Víctor quiere el calendario de cinco agencias.' : F.has('replica_nocturna') ? ' Víctor ya mandó el curso nocturno a la lista de las 40 agencias.' : ''}</p><p>Elvira mira el reloj. <mark class="clave">Te quedan tres pedidos</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pedidos que le haces al comité.', boton: 'Hacer estos tres pedidos', resumen: 'Pediste',
    cols: ['Pedido', 'Qué sostiene'],
    rows: [
      { id: 'refuerzo', cells: ['Refuerzo en campo a los seis que no llegaron al 7', 'Lo que viste con Rocío'] },
      { id: 'medicion', cells: ['Medición de mora y de los rechazados a 90 días, con Riesgos', 'Tu promesa de hoy'] },
      { id: 'cinco', cells: ['Llevarlo a cinco agencias, en horario, en enero', 'Escalar por etapas'] },
      { id: 'cuarenta', cells: ['Llevarlo ya a las 40 agencias', 'El entusiasmo de hoy'] },
      { id: 'todo', cells: ['Recuperar el presupuesto completo, S/ 110,000', 'Que ya se probó'] },
    ],
    score: { refuerzo: 3, medicion: 3, cinco: 3, cuarenta: -2, todo: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, calidad: q === 'buena' ? 3 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'pedido_grande' : 'pedido_ajustado'], cartera: { pedido: q === 'buena' ? 'Refuerzo, 90 días y 5 agencias: aprobados' : 'Aprobado en parte' },
        out: q === 'buena' ? 'Elvira le pregunta a Mario: «¿Cuánto cuesta?». Mario dice la cifra, y agrega: «Va en tramos». Elvira: «Aprobado. Y que vengan en 90 días».' : q === 'aceptable' ? 'Se aprueba una parte. «Lo otro, cuando tengamos los 90 días», dice Elvira.' : 'Mario deja de escribir. Elvira: «Con cuatro días de datos, no. Vuelvan cuando tengan algo más».',
        pro: { ok: 'Pedir poco, con fecha y ligado a lo que mostraste, es más fácil de aprobar.', risk: 'Un buen día no justifica pedirlo todo.', info: 'Haz que los acuerdos queden por correo el mismo día.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Aprobado! Qué bacán.' : 'Los datos daban para menos…'],
      };
    },
    rules: [[BP, 'Pide lo que tus datos pueden sostener, con fecha y responsable.']],
    mirada: {
      ve: 'Un comité no aprueba entusiasmo: aprueba el siguiente paso razonable. Lo que se pide después de un piloto debe ser proporcional a lo que el piloto mostró.',
      visual: { tipo: 'embudo', titulo: 'De lo pedido a lo sostenido', niveles: [['Pedidos posibles', 5], ['Sostenidos por los datos', 3], ['Con fecha y responsable', 3]] },
    },
  },
  {
    id: 'x5', t: '15:00', ch: 'documento', who: null, titulo: 'El plan a 90 días', banner: 'assets/esc/meta.webp', lugar: 'Tu escritorio, con un sánguche de pollo', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Después del comité te tiemblan un poco las piernas. Comes un sánguche de pollo en el escritorio y abres un calendario en blanco.${F.has('registro_reconstruido') ? ' Gonzalo y Lorena están encerrados por el reclamo de Chepén, y no pinta bien.' : ''}</p><p>Lo que acabas de prometer tiene <mark class="clave">fechas que no se cumplen solas</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las acciones del plan a 90 días.', boton: 'Guardar el plan',
    items: [
      { id: 'ref', t: 'Refuerzo en campo a los seis asesores que no llegaron al 7', por: 'Primero lo urgente.' },
      { id: 'sst1', t: 'Primera de las tres capacitaciones de SST, en la jornada, con registro', por: 'La ley no espera al piloto.' },
      { id: 'rev', t: 'Revisión de la meta de los nuevos con Riesgos y Negocios, a los 15 días', por: 'Lo que pidió el comité.' },
      { id: 'sel', t: 'Elegir y preparar a facilitadores para cinco agencias', por: 'Antes de escalar.' },
      { id: 'med', t: 'Medición de mora y de los rechazados a 90 días, con Riesgos', por: 'Lo que prometiste.' },
      { id: 'dec', t: 'Volver al comité con la decisión de si se amplía', por: 'Cierra el ciclo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 1 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan90_listo'], cartera: { plan90: q === 'riesgosa' ? 'Calendario por reordenar' : 'Con fechas y responsables' },
        out: q === 'buena' ? 'Tu calendario tiene seis líneas y seis nombres. Se lo mandas a Lorena, Víctor y Mario. Nadie responde con objeciones, lo que aquí es casi un aplauso.' : 'Lorena mueve dos líneas: «Lo legal primero, y no escalamos antes de tener facilitadores».',
        pro: { ok: 'Un plan claro convierte lo aprobado en algo que se puede cumplir.', info: 'Pon una alerta en tu calendario para cada fecha. Nadie te lo va a recordar.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? 'Promesas con fecha. ¡Así!' : 'Lo legal y lo urgente van antes.'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 35 b): las capacitaciones de SST pendientes no dependen del piloto.'], [BP, 'Un acuerdo sin fecha ni responsable no es un acuerdo.']],
    mirada: {
      ve: 'Después de la reunión empieza lo que nadie aplaude: convertir acuerdos en un calendario. Si esa hoja no sale el mismo día, en dos semanas nadie recordará qué se aprobó.',
      visual: { tipo: 'flujo', titulo: 'Los próximos 90 días', pasos: ['Refuerzo en campo', 'SST en la jornada', 'Revisar la meta', 'Preparar facilitadores', 'Medir a 90 días', 'Volver al comité'] },
    },
  },
  {
    id: 'x6', t: '17:30', ch: 'whatsapp', who: null, titulo: 'Contarles a ellos', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Grupo del taller', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>En el grupo «Taller · Evaluar y cobrar» alguien pregunta: «¿Qué dijeron arriba?». Kevin manda una carita asustada. Sandra manda un sticker de ojos muy abiertos.</p><p>Ellos pusieron la cara y también pusieron los errores. <mark class="clave">Merecen saberlo por ti, no por el pasillo</mark>.</p>`,
    type: 'compose', enviaA: 'taller', para: 'Para: Taller · Evaluar y cobrar', boton: 'Enviar el mensaje',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pasó', ops: [
        { id: 'q1', t: 'Equipo: hoy mostramos en el comité lo que ustedes hicieron en la calle: 27 acuerdos por escrito y más promesas cumplidas. Se aprobó seguir con el refuerzo en campo.', ok: true, por: 'Les devuelves el mérito, con datos.' },
        { id: 'q2', t: 'Equipo: el comité quedó feliz con Desarrollo.', ok: false, por: 'El logro es de ellos, no del área.' },
      ] },
      { id: 'incomodo', t: 'Lo incómodo', ops: [
        { id: 'i1', t: 'También dijimos que la colocación bajó, y que todavía no sabemos cuánto ayudará a la mora. Lo vamos a medir en 90 días.', ok: true, por: 'Les dices lo mismo que le dijiste a la gerencia.' },
        { id: 'i2', t: 'Tienen que recuperar la colocación cuanto antes, si no esto se cae.', ok: false, por: 'Les devuelves la presión justo cuando empiezan a verificar mejor.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'La meta de los nuevos se va a revisar en 15 días. Mientras tanto, sigan verificando: nadie tiene que poner en una evaluación algo que no es cierto.', ok: true, por: 'Claro y firme, sin prometer el resultado de la revisión.' },
        { id: 'c2', t: 'Ya pronto les bajan la meta, tranquilos 😉', ok: false, por: 'Prometes algo que nadie decidió.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'i1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: q === 'buena' ? 3 : 0 }, rel: { sandra: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['taller_informado'],
        out: q === 'buena' ? 'Kevin manda un aplauso. Milagros escribe solo: «Gracias». Rocío pregunta: «¿Cuándo me acompañan otra vez?». Sandra te manda un audio de cuatro segundos: «Bien, oe».' : q === 'aceptable' ? 'Hay emojis, y dos preguntas que tendrás que contestar mañana.' : 'Se arma un hilo de 40 mensajes sobre la meta. Víctor te escribe: «¿Quién dijo eso?».',
        pro: { ok: 'Decirle lo mismo a la gerencia que a la gente es la base de la confianza.', risk: 'Lo que se promete sin decidirse vuelve como reclamo.', info: 'Reconoce por nombre a Sandra y a Don Aurelio en el correo oficial.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡La misma verdad arriba y abajo!' : '¿Dijiste lo mismo que dijiste arriba?'],
      };
    },
    rules: [[BP, 'Cierra el ciclo con la gente: cuéntale qué se decidió con lo que ella aportó.']],
    mirada: {
      ve: 'La gente que participa en un piloto suele enterarse de los resultados por rumores. Contarles lo mismo que se dijo arriba, con sus méritos y sus dudas, es lo que hace que quieran volver a intentarlo.',
      visual: { tipo: 'mensaje', titulo: 'Lo mismo arriba y abajo', txt: 'Mostramos sus 27 acuerdos. También dijimos que la colocación bajó y que la mora se sabrá en 90 días. La meta se revisa en 15 días. Mientras tanto, nadie pone en una evaluación algo que no es cierto.' },
    },
  },
];
