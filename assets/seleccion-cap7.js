// Capítulo 7 · «La oferta» · Semana 2, martes.
// La persona elegida depende del capítulo 6: elegido_marco (por defecto), elegido_lucia o elegido_patricia.
//
// Normas citadas y fuentes consultadas:
// - Ley 30709, que prohíbe la discriminación remunerativa entre varones y mujeres, y su reglamento, D.S. 002-2018-TR:
//   cuadro de categorías y funciones y criterios objetivos que pueden justificar diferencias (antigüedad, desempeño,
//   negociación colectiva, escasez de oferta de mano de obra calificada, costo de vida, experiencia laboral).
//   https://www.leyes.congreso.gob.pe/Documentos/2016_2021/ADLP/Texto_Consolidado/30709-TXM.pdf
//   https://cdn.www.gob.pe/uploads/document/file/154890/2018-03-08_002-2018-TR__6353.pdf
//   https://gestion.pe/opinion/diferencias-salariales-son-validas-entre-trabajadores-que-realizan-las-mismas-funciones-noticia/
// - D.S. 003-97-TR (TUO del D.Leg. 728): art. 10, periodo de prueba de tres meses, ampliable de común acuerdo hasta seis
//   en trabajadores calificados o de confianza; art. 18, preaviso de 30 días exonerable por el empleador.
//   https://lacamara.pe/en-que-consiste-el-periodo-de-prueba-laboral/
// - Reglamento de la Ley 26772, art. 4-A (D.S. 002-2018-TR): no se puede exigir prueba de embarazo en la selección.
//   https://elperuano.pe/suplementosflipping/juridica/699/web/index.html
// - Constitución Política del Perú, art. 26: irrenunciabilidad de los derechos laborales.

export const CAP = {
  n: 7, titulo: 'La oferta', dia: 'Semana 2, martes', foto: 'assets/foto/acuerdo.webp',
  lugar: 'Oficina de RR.HH. · Distribuidora Pacífico Sur',
  inicio: '07:30', fin: '20:00', cierreHora: '19:40',
  apertura: 'Hoy se hace la oferta. La persona elegida pide más de lo que la banda permite.', boton: 'Preparar la oferta',
  kusi: 'Negociar no es ganarle a nadie. Es que los dos digan que sí y lo sigan diciendo en seis meses. ¡Dale!',
  lead: 'Sustentaste una oferta con criterios objetivos, resististe una guerra de sueldos y cerraste un sí que no rompe la equidad de la empresa.',
  reflexion: '¿Qué pesó más en la decisión de la persona elegida: el sueldo o algo más?',
  siguiente: { n: 8, titulo: 'El ingreso', dia: 'Semana 2, miércoles' },
};

// Datos de la persona elegida, según el capítulo 6.
const E = F => F?.has('elegido_lucia')
  ? { n: 'Lucía', chat: 'lucia', ella: true, hoy: 'jefa de turno en un supermercado de Tacna', gana: 'S/ 2,900 más comisiones', pide: 'S/ 4,000', contra: 'su cadena le ofrece ser jefa de tienda interina, con S/ 3,600 y un bono de campaña', motivo: 'crecer en algo que no sea una tienda donde el único puesto de arriba tiene dueña desde hace veinte años', extra: 'capacitación certificada en WMS desde el primer día' }
  : F?.has('elegido_patricia')
    ? { n: 'Patricia', chat: 'patricia', ella: true, hoy: 'supervisora en una agroexportadora de Ica', gana: 'S/ 3,800', pide: 'S/ 4,100 y apoyo para la mudanza', contra: 'su empresa le ofrece S/ 4,000 y la jefatura del almacén en la próxima campaña', motivo: 'estar cerca de su mamá, que vive en Tacna y está delicada de salud', extra: 'apoyo con el traslado y dos días para instalarse' }
    : { n: 'Marco', chat: 'marco', ella: false, hoy: 'supervisor en un operador logístico minero de Moquegua', gana: 'S/ 4,200 más bonos', pide: 'S/ 4,400', contra: 'su empresa le ofrece S/ 4,500 y pasar de catorce días seguidos a diez', motivo: 'dormir en su casa todas las noches y ver crecer a sus hijos', extra: 'un horario de turnos rotativos que le permite volver a casa cada día' };

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 30, e: 'Hoy: oferta' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 17, e: '4 aprobados · ingresan mañana' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 23, e: 'Ofertas aceptadas · ingresan mañana' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 48, e: 'Terna enviada a Gina' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 13, e: 'Ingresó la semana pasada' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 11, e: 'Entrevistas la próxima semana' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 68, e: 'Entrevistas el jueves' },
];
export const CARTERA = (F, prev) => BASE.map(c => {
  const antes = prev?.cartera?.find(x => x.id === c.id);
  return antes && !['supervisor', 'operarios', 'vendedores', 'chofer'].includes(c.id) && antes.e !== c.e ? { ...c, e: antes.e } : c;
});

export const FUTURO = {
  sustento_solido: ['El sueldo ofrecido se sustenta en criterios objetivos que constan por escrito.', 'Capítulo 9.'],
  sustento_flojo: ['El sueldo ofrecido se apoya en argumentos que no resisten una revisión.', 'Capítulo 9.'],
  oferta_banda: ['Ofreciste dentro de la banda y sumaste beneficios que no son sueldo.', 'Capítulo 8.'],
  oferta_excepcion: ['Pediste una excepción sobre la banda, con revisión del sueldo de Silvia Coaquira.', 'Gerencia lo verá. Capítulo 9.'],
  oferta_tope: ['Ofreciste el tope de la banda sin dejar margen.', 'Capítulo 8.'],
  contra_valor: ['Respondiste la contraoferta hablando de lo que de verdad le importa a la persona.', 'Capítulo 8.'],
  contra_puja: ['Entraste a una subasta de sueldo con el empleador actual.', 'Los demás supervisores se enterarán. Capítulo 9.'],
  contra_ultimatum: ['Presionaste con un ultimátum para que aceptara hoy.', 'Empezará con un mal sabor. Capítulo 8.'],
  carta_limpia: ['La carta oferta salió sin cláusulas ilegales.', 'Kelly la usará para el contrato. Capítulo 8.'],
  carta_errores: ['La carta oferta salió con cláusulas que no se pueden pedir.', 'Kelly las encontrará en el capítulo 8.'],
  oferta_aceptada: ['La persona elegida aceptó. Su empresa la exoneró del preaviso.', 'Ingresa mañana. Capítulo 8.'],
  finalistas_cerradas: ['Las otras finalistas recibieron una respuesta clara y a tiempo.', 'Capítulo 9.'],
  kelly_viernes: ['Kelly tiene los datos del ingreso desde la noche anterior.', 'El alta saldrá a tiempo. Capítulo 8.'],
  kelly_lunes: ['Kelly recibirá los datos la misma mañana del ingreso.', 'Correrá. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  kelly: { n: 'Kelly Ramos', sub: 'Planillas', who: 'kelly' },
  marco: { n: 'Marco Ticona', sub: 'Finalista', who: 'marco' },
  lucia: { n: 'Lucía Flores', sub: 'Finalista', who: 'lucia' },
  patricia: { n: 'Patricia Huanca', sub: 'Finalista', who: 'patricia' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
};

export const CORREOS = [
  { t: '07:50', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Banda del supervisor', html: '<p>Te recuerdo: banda de S/ 3,200 a S/ 3,900. Raúl Condori, supervisor de Distribución, gana S/ 3,400 con dos años. Silvia Coaquira, supervisora de Transporte, gana S/ 3,700 con siete años. Cualquier cifra que propongas tiene que poder explicarse frente a ellos.</p>' },
  { t: '11:40', de: 'Ing. Ricardo Zegarra · Gerente General', para: 'Rocío Mamani', cc: 'Analista de Selección', asunto: 'RE: Excepción de banda', html: '<p>Aprobado como excepción, con dos condiciones: que el sustento quede en el expediente y que se revise el sueldo de Silvia Coaquira en el próximo trimestre. No quiero una diferencia que no podamos explicar.</p>', si: 'oferta_excepcion' },
  { t: '12:35', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Oferta del supervisor', html: '<p>Sabía que no ibas a dejar que esto se volviera una subasta. Bien.</p>', si: 'contra_valor' },
];

export const WSP = [
  { chat: 'walter', t: '08:15', de: 'Walter', txt: 'El lunes pasado me prometió supervisor para el viernes. Ya me tocaría, ¿no? 😄', si: 'promesa_corregida' },
  { chat: 'walter', t: '08:15', de: 'Walter', txt: 'EL LUNES PASADO ME DIJO QUE EL VIERNES TENÍA SUPERVISOR. Que hoy no se caiga.', si: 'promesa', no: 'promesa_corregida' },
  { chat: 'walter', t: '08:15', de: 'Walter', txt: 'Hoy cerramos, ¿no? Julio ya está cansado de cubrir.', si: 'encargo_julio', no: 'promesa' },
  { chat: 'grupo', t: '09:30', de: 'Kelly', txt: 'Recuerden: los ingresos de mañana, datos completos hoy 🙏 si no, me da un infarto' },
  { chat: 'fernando', t: '14:10', de: 'Fernando', txt: 'Colega, mis tres vendedores ya aceptaron 🙌 Kevin dice que ya se compró su moto, ¿lo tienes en cuenta para la próxima? 😄', si: 'kevin_igual' },
  { chat: 'fernando', t: '14:10', de: 'Fernando', txt: 'Colega, ¿Rosa se quejó? Kevin dice que lo miran raro en la capacitación 😅', si: 'kevin_final' },
  { chat: 'walter', t: '17:20', de: 'Walter', txt: '¿Aceptó? 👀', si: 'oferta_aceptada' },
  { chat: 'walter', t: '17:24', de: 'Walter', txt: 'Bien. Mañana a las 7 en el portón 3. Que traiga casco.', si: 'oferta_aceptada' },
];

export const QUIZ = [
  { q: '¿Cuál de estos criterios puede justificar que dos supervisores ganen distinto, según el reglamento de la Ley 30709?', ops: ['Que uno sea amigo del jefe', 'La experiencia laboral o la escasez de oferta calificada para el puesto', 'Que uno mantenga a su familia', 'Que uno sea varón'], ok: 1, por: 'El D.S. 002-2018-TR menciona criterios como antigüedad, desempeño, negociación colectiva, escasez de oferta calificada, costo de vida y experiencia laboral, aplicados al caso concreto.' },
  { q: 'El empleador actual del elegido le hace una contraoferta. ¿Qué es lo más profesional?', ops: ['Subir la oferta hasta ganarle', 'Recordarle qué lo motivó a cambiar y mostrar lo que la empresa ofrece además del sueldo', 'Darle un ultimátum', 'Retirar la oferta'], ok: 1, por: 'Si solo compites en sueldo, la persona se irá con la siguiente oferta más alta. El motivo del cambio suele estar en otra parte.' },
  { q: '¿Cuánto dura, como regla general, el periodo de prueba en el régimen general?', ops: ['Un mes', 'Tres meses', 'Seis meses para todos', 'No existe'], ok: 1, por: 'El art. 10 del D.S. 003-97-TR fija tres meses; puede ampliarse de común acuerdo hasta seis en trabajadores calificados o de confianza.' },
  { q: '¿Cuál de estas líneas no puede ir en una carta oferta?', ops: ['Sueldo bruto mensual y fecha de ingreso', 'Examen médico de ingreso con prueba de embarazo para mujeres', 'Plazo para responder', 'Tipo de contrato'], ok: 1, por: 'El reglamento de la Ley 26772 prohíbe exigir pruebas de embarazo en la selección.' },
  { q: 'El candidato acepta hoy y entra mañana. ¿Cuándo le pasas los datos a Planillas?', ops: ['El mismo martes', 'Hoy, para que haya margen antes del ingreso', 'Al terminar el periodo de prueba', 'Cuando llegue la primera boleta'], ok: 1, por: 'El alta en T-Registro se hace dentro del día de ingreso. Con datos a tiempo, Planillas puede prepararla.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '07:55', ch: 'documento', who: null, titulo: 'El sustento de la oferta', banner: 'assets/3d/scenes/balanza.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => { const e = E(F); return `<p>Antes de hablar de cifras con Rocío, armas el sustento. ${e.n} hoy es ${e.hoy}, gana ${e.gana} y pide <mark class="clave">${e.pide}</mark>. La banda llega a S/ 3,900.</p><p>${F.has('banda_tope') ? 'Tu aviso ya ofreció S/ 3,900: no hay mucho margen que defender.' : F.has('banda_oculta') ? 'Tu aviso decía «sueldo a tratar», así que la cifra que pide no te sorprende.' : 'Tu aviso publicó el rango, así que sabía desde el principio dónde está el techo.'} Rocío quiere tres argumentos que se puedan defender ante cualquier supervisor de la empresa.</p>`; },
    type: 'pick', n: 3, prompt: 'Elige los tres argumentos que pondrás en el sustento.', boton: 'Guardar el sustento', resumen: 'Tu sustento',
    cols: ['Argumento', 'Qué lo respalda'],
    rows: [
      { id: 'exp', cells: ['Experiencia laboral verificable en el puesto', 'CV, entrevista y referencias'] },
      { id: 'escasez', cells: ['Pocos postulantes con experiencia en WMS e inventarios', 'Solo 12 de 140 sumaron en ese criterio'] },
      { id: 'evidencia', cells: ['Puntaje en las competencias del perfil', 'Informe de terna'] },
      { id: 'urgencia', cells: ['El inventario empieza el 28', 'Calendario de Operaciones'] },
      { id: 'familia', cells: ['Tiene familia que mantener', 'Lo contó en la entrevista'] },
      { id: 'jefe', cells: ['Walter lo quiere así', 'WhatsApp de Walter'] },
      { id: 'pide', cells: ['Es lo que pidió la persona', 'Su mensaje de ayer'] },
    ],
    score: { exp: 3, escasez: 3, evidencia: 2, urgencia: 1, familia: -4, jefe: -2, pide: -1 },
    res: (picks, sc) => {
      const q = picks.includes('familia') ? 'riesgosa' : sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -5, calidad: q === 'buena' ? 3 : 0, etica: picks.includes('familia') ? -5 : 1 },
        flags: [q === 'buena' ? 'sustento_solido' : 'sustento_flojo'],
        out: q === 'buena' ? 'Tu sustento cabe en un párrafo: experiencia, escasez del perfil y evidencia. Silvia o Raúl podrían leerlo sin sentirse estafados.' : picks.includes('familia') ? 'Pusiste «tiene familia que mantener» como argumento. Si eso justifica ganar más, ¿Silvia, que también mantiene a su familia, debería ganar más?' : 'El sustento funciona a medias: «lo quiere Walter» o «es lo que pidió» no explican por qué ganaría distinto de otro supervisor.',
        pro: { ok: 'Un sustento con criterios objetivos es lo que pide el reglamento de la Ley 30709 cuando dos personas del mismo nivel ganan distinto.', risk: 'Los criterios deben aplicarse al caso concreto: enunciarlos sin datos no basta.', info: 'La urgencia del inventario es real para el negocio, pero no explica una diferencia de sueldo que durará años.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Sustento blindado!' : 'Pregúntate: ¿esto lo podría leer Silvia?'],
      };
    },
    rules: [[LEY, 'Las diferencias de sueldo dentro de una misma categoría deben explicarse con criterios objetivos aplicados al caso (Ley 30709 y D.S. 002-2018-TR).'], [BP, 'Escribe el sustento como si lo fueran a leer los demás supervisores.']],
    mirada: {
      ve: 'Una oferta no es un número: es una decisión que los demás supervisores van a descubrir tarde o temprano. Una profesional la sustenta con criterios que podría explicar en voz alta frente a Raúl y frente a Silvia, que lleva siete años ganando S/ 3,700.',
      visual: { tipo: 'rango', titulo: 'Dónde caería cada sueldo (S/ mensuales)', min: 3000, max: 4700, banda: [3200, 3900], marcas: [['Raúl', 3400], ['Silvia', 3700], ['Tope de la banda', 3900], ['Lo que pide Marco', 4400]] },
      normas: [{ ley: 'Ley 30709 y su reglamento (D.S. 002-2018-TR)', dice: 'Las empresas deben tener un cuadro de categorías y funciones y una política salarial. Las diferencias dentro de una categoría solo se justifican con criterios objetivos, como antigüedad, desempeño, negociación colectiva, escasez de oferta de mano de obra calificada, costo de vida o experiencia laboral.', practica: 'Si el nuevo supervisor gana más que Silvia, la empresa debe poder explicar con datos qué criterio lo justifica.' }],
    },
  },
  {
    id: 'g2', t: '09:00', ch: 'presencial', who: 'rocio', titulo: 'La cifra', banner: 'assets/foto/reunion-jefa.webp', show: ['cumplimiento', 'confianza', 'etica'],
    body: (n, F) => { const e = E(F); return `<p>Rocío lee tu sustento con el lapicero en la boca. ${F.has('sustento_solido') ? 'Asiente.' : 'Tacha una línea.'} «Bien. Ahora la cifra. ${e.n} pide ${e.pide}. ¿Qué le ofrecemos?»</p><p>En la pizarra todavía está el rango: Raúl S/ 3,400, Silvia S/ 3,700, tope S/ 3,900. <mark class="clave">Lo que decidas hoy lo vas a tener que explicar dentro de un año.</mark></p>`; },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Ofrecer S/ 3,800, dentro de la banda, y sumar lo que la persona valora además del sueldo.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: 2 }, rel: { rocio: 1 }, flags: ['oferta_banda'],
          out: 'Rocío anota: «S/ 3,800 y lo demás que le importa. Si dice que no, hablamos». Te queda un margen de S/ 100 y varios argumentos que no son plata.',
          pro: { ok: 'Respetas la banda y la equidad interna, y negocias con lo que la persona dijo que le importa.', risk: 'Quizás no alcance. Prepárate para escuchar un no.', info: 'Lo que contó en la entrevista sobre por qué quiere cambiar es tu mejor argumento.' },
          kusi: ['feliz', 'Dentro de la banda y con argumentos.'] } },
      { id: 'b', label: 'Pedir a Gerencia una excepción para pagar lo que pide, con el sustento por escrito y una revisión del sueldo de Silvia.', no: 'banda_tope',
        res: { q: 'aceptable', fx: { cumplimiento: 2, tiempo: -3, etica: 2 }, flags: ['oferta_excepcion'],
          out: 'Rocío escribe a Zegarra. A las 11:40 llega la respuesta: aprobado como excepción, si el sustento queda en el expediente y se revisa el sueldo de Silvia el próximo trimestre.',
          pro: { ok: 'Si pagas por encima, lo haces con sustento, con aprobación y corrigiendo la inequidad que generas.', risk: 'Cada excepción debilita la banda. Si se vuelve costumbre, la banda deja de existir.', info: 'Revisar el sueldo de Silvia no es un favor: es lo que evita una diferencia que la ley podría cuestionar.' },
          kusi: ['pensando', 'Excepción con sustento… y con Silvia en la mesa.'] } },
      { id: 'c', label: 'Ofrecer directamente el tope, S/ 3,900, para no perder tiempo negociando.',
        res: { q: 'aceptable', fx: { tiempo: 3, cumplimiento: 1, calidad: -2 }, flags: ['oferta_tope'],
          out: 'Rocío levanta una ceja: «¿Y si pide más? Ya no tienes con qué». Lo apruebas igual. Si hay contraoferta, solo te quedan argumentos que no son sueldo.',
          pro: { ok: 'Rápido y dentro de la banda.', risk: 'Empezar en el tope te deja sin margen para la contraoferta.' },
          kusi: ['sorpresa', 'Tope de entrada… sin red de seguridad.'] } },
      { id: 'd', label: 'Pagar lo que pide sin pedir excepción: es una sola persona y nadie tiene por qué enterarse.',
        res: { q: 'riesgosa', fx: { cumplimiento: -7, etica: -5 }, rel: { rocio: -1 }, flags: ['oferta_oculta'],
          out: 'Rocío deja el lapicero: «En Planillas todo se sabe. Y si Silvia reclama, ¿qué le decimos?». No firma.',
          pro: { ok: 'Cierras rápido.', risk: 'Los sueldos se terminan sabiendo. Una diferencia escondida y sin sustento es exactamente lo que la Ley 30709 sanciona.' },
          kusi: ['indignado', '¡En Planillas todo se sabe!'] } },
    ],
    rules: [[LEY, 'La empresa debe poder explicar con criterios objetivos las diferencias de sueldo dentro de una categoría (Ley 30709).'], [POL, 'En esta empresa, una oferta sobre la banda requiere aprobación de Gerencia General.']],
    mirada: {
      ve: 'La banda no es un capricho de RR.HH.: es la promesa de que personas con el mismo trabajo ganan de forma coherente. Una profesional la defiende, y cuando decide romperla, lo hace con sustento, con aprobación y corrigiendo lo que rompe.',
      visual: { tipo: 'balanza', a: { t: 'Pagar lo que pide', items: ['Cierras más rápido', 'El candidato se siente valorado'] }, b: { t: 'Cuidar la banda', items: ['Silvia y Raúl no se sienten estafados', 'La diferencia se puede explicar', 'La próxima oferta no empieza más arriba'] } },
    },
  },
  {
    id: 'g3', t: '10:20', ch: 'llamada', who: null, titulo: 'La llamada de la oferta', banner: 'assets/foto/llamada.webp', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => { const e = E(F); return `<p>Cierras la puerta de la oficina y pones el celular en altavoz. Del otro lado, ${e.n} contesta al segundo timbre: «${e.ella ? 'Hola, sí, dígame' : 'Aló, sí, buenos días'}».</p><p>Tienes en una hoja todo lo que vas a decir. Pero <mark class="clave">el orden importa tanto como las cifras</mark>.</p>`; },
    type: 'secuencia', prompt: 'Ordena cómo vas a hacer la llamada.', boton: 'Hacer la llamada',
    items: [
      { id: 'felicita', t: 'Felicitar y contar que fue la persona elegida', por: 'Empieza por lo que la persona quiere escuchar.' },
      { id: 'completa', t: 'Presentar la oferta completa: sueldo, beneficios, horario, tipo de contrato y fecha de ingreso', por: 'Todo junto, para que pueda comparar con lo que tiene.' },
      { id: 'escucha', t: 'Escuchar su reacción sin interrumpir', por: 'Lo primero que dice es lo que más le importa.' },
      { id: 'dudas', t: 'Resolver sus dudas, incluido el preaviso', por: 'El preaviso decide la fecha real de ingreso.' },
      { id: 'plazo', t: 'Acordar hasta cuándo puede responder', por: 'Un plazo razonable, ni un ultimátum ni una espera eterna.' },
      { id: 'escrito', t: 'Enviarle la carta oferta por escrito', por: 'Lo hablado se confirma por escrito el mismo día.' },
    ],
    res: (bien, total, F) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa', e = E(F);
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 3 : 0 }, rel: { [e.chat]: 1 },
        flags: [q === 'riesgosa' ? 'llamada_desordenada' : 'llamada_ordenada'],
        out: `${e.n} escucha todo. Al final dice: «Gracias. Me encanta. Pero tengo que contarle algo: ${e.contra}. ¿Me da hasta el mediodía?».`,
        pro: { ok: 'Una oferta bien presentada se compara completa, no solo por el sueldo.', risk: 'Si empiezas por la cifra, la conversación se queda ahí.', info: 'Cuando alguien te cuenta una contraoferta, te está diciendo que quiere que le des razones para irse.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Oferta completa, bien contada.' : 'El orden también negocia.'],
      };
    },
    rules: [[BP, 'Presenta la oferta completa y confírmala por escrito el mismo día.'], [LEY, 'Quien renuncia debe dar 30 días de preaviso, salvo que su empleador lo exonere (D.S. 003-97-TR, art. 18).']],
    mirada: {
      ve: 'La llamada de la oferta es el momento más emocionante del proceso para el candidato y el más frágil para la empresa. Una profesional deja hablar a la persona, porque en su primera reacción está lo que de verdad pesa en la decisión.',
      visual: { tipo: 'flujo', titulo: 'La llamada de la oferta', pasos: ['Felicitar', 'Oferta completa', 'Escuchar', 'Dudas y preaviso', 'Plazo', 'Por escrito'] },
    },
  },
  {
    id: 'g4', t: '12:00', ch: 'whatsapp', who: null, titulo: 'La contraoferta', banner: 'assets/foto2/tension.webp', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => { const e = E(F); return `<p>A las 12:00 en punto llega el mensaje de ${e.n}.</p><p>«Lo pensé mucho. Su oferta me gusta, pero ${e.contra}. <mark class="clave">Si ustedes igualan, acepto hoy.</mark>» ${F.has('oferta_tope') ? 'Ya ofreciste el tope de la banda.' : F.has('oferta_excepcion') ? 'Ya tienes la excepción aprobada por Gerencia.' : ''}</p>`; },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Llamarle y recordarle por qué quería cambiar, mostrarle lo que la empresa ofrece además del sueldo y no entrar a una subasta.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4, confianza: 3 }, flags: ['contra_valor'],
          out: 'Le preguntas qué cambió desde la entrevista. Hay un silencio. «Nada. Sigo queriendo lo mismo.» Le recuerdas lo que contó entonces y lo que tu oferta resuelve. «Déjeme hablar con mi jefe. Le escribo a las cuatro.»',
          pro: { ok: 'Una contraoferta casi nunca cambia el motivo de fondo por el que alguien quiere irse.', risk: 'Puede decir que no. Es parte del juego, y tienes a las otras finalistas informadas.', info: 'Muchas personas que aceptan una contraoferta vuelven a buscar trabajo en pocos meses, porque el motivo sigue ahí.' },
          kusi: ['celebra', '¡Qué bacán! Hablaste de lo que importa, no de cifras.'] } },
      { id: 'b', label: 'Igualar la contraoferta: perderla ahora, a tres días del inventario, saldría más caro.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -3, tiempo: 3 }, flags: ['contra_puja'],
          out: 'Igualas sin consultar. Ahora la persona ganará más que Silvia y Raúl, sin un criterio que lo explique y sin aprobación de Gerencia.',
          pro: { ok: 'Probablemente acepte.', risk: 'Una subasta de sueldo deja a la persona sintiendo que la compraron, y a tus supervisores, que no valen lo mismo.' },
          kusi: ['preocupado', 'Subasta ganada, equidad perdida.'] } },
      { id: 'c', label: 'Decirle que la oferta vence hoy a las 15:00: si no acepta, pasan a la siguiente finalista.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -4 }, flags: ['contra_ultimatum'],
          out: 'A las 14:50 escribe: «Acepto». Pero la palabra que usa con su familia esa noche es «me apuraron».',
          pro: { ok: 'Pones un límite claro.', risk: 'Un ultimátum consigue un sí apurado, no un compromiso.', info: 'Un plazo razonable no es lo mismo que una amenaza.' },
          kusi: ['pensando', 'Sí… pero apurado.'] } },
    ],
    rules: [[BP, 'Ante una contraoferta, vuelve al motivo del cambio; no compitas solo con sueldo.'], [LEY, 'Igualar por encima de la banda sin un criterio objetivo puede generar una diferencia que la empresa no pueda justificar (Ley 30709).']],
    mirada: {
      ve: 'La contraoferta llega cuando el empleador actual se entera de que va a perder a alguien valioso. Casi nunca resuelve el motivo por el que esa persona quería irse. Una profesional no puja: ayuda al candidato a recordar por qué empezó a buscar.',
      visual: { tipo: 'balanza', a: { t: 'Quedarse con la contraoferta', items: ['Más sueldo hoy', 'Nada que aprender de nuevo'] }, b: { t: 'Aceptar el cambio', items: ['El motivo que lo hizo buscar', 'Un puesto que eligió', 'Un lugar que no lo compró'] } },
    },
  },
  {
    id: 'g5', t: '14:00', ch: 'documento', who: null, titulo: 'La carta oferta', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Mientras esperas la respuesta, preparas la carta oferta. Usas la plantilla que dejó Milagros, «carta_oferta_v3_ESTA.docx». ${F.has('checklist_kelly') ? 'Kelly te la marcó con un post-it: «revísala, tiene cosas viejas».' : ''}</p><p>Lo que firme la persona hoy <mark class="clave">será la base de su contrato</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir en la carta. Si alguna línea te hace dudar, márcala también.',
    doc: { t: 'Carta oferta · Supervisor/a de almacén', sub: 'Plantilla carta_oferta_v3_ESTA.docx' },
    lines: [
      { id: 'puesto', t: 'Puesto: Supervisor/a de almacén. Reporta a: Jefe de Operaciones.' },
      { id: 'sueldo', t: 'Remuneración bruta mensual, más gratificaciones, CTS y demás beneficios de ley.' },
      { id: 'contrato', t: 'Contrato a plazo indeterminado, en el régimen laboral general.' },
      { id: 'prueba', t: 'Periodo de prueba: seis meses.', duda: 'La regla general son tres meses. Solo puede ampliarse, de común acuerdo, hasta seis si el puesto es calificado o de confianza, y conviene que el contrato diga por qué.' },
      { id: 'embarazo', t: 'Examen médico de ingreso; en el caso de mujeres, incluye prueba de embarazo.', bad: LEY, why: 'El reglamento de la Ley 26772 prohíbe exigir pruebas de embarazo en la selección.' },
      { id: 'extras', t: 'El trabajador renuncia al pago de horas extra durante el inventario.', bad: LEY, why: 'Los derechos laborales son irrenunciables (Constitución, art. 26). Una línea así no vale aunque se firme.' },
      { id: 'secreto', t: 'Esta oferta es confidencial: no la comente con nadie, ni con su familia.', bad: BP, why: 'Pedir reserva sobre el sueldo frente a terceros es común; pedirle que no lo hable con su familia es excesivo y genera desconfianza.' },
      { id: 'ingreso', t: 'Fecha de ingreso: mañana miércoles, 7:00 a. m.' },
      { id: 'plazo', t: 'Esta oferta es válida hasta hoy a las 18:00.' },
    ],
    res: v => ({
      flags: [v.missLey ? 'carta_errores' : 'carta_limpia'],
      out: v.missLey ? 'La carta sale con líneas que no se pueden pedir. Kelly las encontrará esta noche, cuando prepare el contrato, si tienes suerte.' : 'Borras lo que no va y actualizas la plantilla para que nadie más la use así. La guardas como «carta_oferta_2026.docx», sin «ESTA».',
      pro: { ok: 'Una carta oferta limpia evita que el contrato herede errores y que la persona empiece desconfiando.', risk: 'Las plantillas viejas son una de las fuentes más comunes de incumplimientos.', info: 'Si el puesto es de confianza, el periodo de prueba ampliado se pacta y se justifica; no se impone.' },
      kusi: v.missLey ? ['indignado', '¡Esa plantilla tenía cosas de otro siglo!'] : ['celebra', '¡Plantilla limpia y renombrada!'],
    }),
    rules: [[LEY, 'Los derechos laborales son irrenunciables (Constitución, art. 26).'], [LEY, 'No se puede exigir prueba de embarazo en la selección (reglamento de la Ley 26772, art. 4-A).'], [LEY, 'El periodo de prueba es de tres meses; hasta seis por acuerdo en puestos calificados o de confianza (D.S. 003-97-TR, art. 10).']],
    mirada: {
      ve: 'La carta oferta es lo primero que la empresa pone por escrito a su nuevo supervisor. Una profesional la lee como la leería esa persona en la mesa de su casa, con su familia al lado: ¿hay algo aquí que me haga desconfiar?',
      visual: { tipo: 'cambio', titulo: 'De la plantilla vieja a la carta de hoy', pares: [['Prueba de embarazo para mujeres', 'Examen médico de ingreso, igual para todos'], ['Renuncia a horas extra', 'Horas extra pagadas o compensadas según ley'], ['Periodo de prueba de seis meses', 'Tres meses, o seis por acuerdo justificado'], ['No lo comente con su familia', 'Reserva sobre condiciones frente a terceros']] },
      normas: [{ ley: 'D.S. 003-97-TR (TUO del D.Leg. 728), art. 10', dice: 'El periodo de prueba es de tres meses, a cuyo término el trabajador alcanza protección contra el despido arbitrario. En trabajadores calificados o de confianza, las partes pueden pactar un término mayor, hasta seis meses en total.', practica: 'Un supervisor puede ser un trabajador de confianza, pero ampliar la prueba requiere acuerdo y debe quedar justificado en el contrato.' }],
    },
  },
  {
    id: 'g6', t: '16:05', ch: 'llamada', who: null, titulo: 'La respuesta', banner: 'assets/foto2/celebra-papel.webp', show: ['personas', 'confianza', 'tiempo'],
    body: (n, F) => { const e = E(F); return `<p>${F.has('contra_ultimatum') ? `${e.n} aceptó a las 14:50, apurado por tu plazo.` : `A las 16:00 te llama ${e.n}.`} «Hablé con mi jefe. ${F.has('contra_valor') ? 'Le dije que no era por la plata.' : 'Le dije que ya había decidido.'} Me exonera del preaviso: <mark class="clave">mañana puedo empezar</mark>.»</p><p>${e.ella ? 'Se le quiebra un poco la voz' : 'Se ríe, nervioso'}. «Lo que más me convenció fue ${e.extra}.» Ahora tienes que cerrar el proceso con quienes llegaron a la final y no quedaron, como prometiste.</p>`; },
    type: 'compose', para: 'Para: quienes llegaron a la final y no quedaron', boton: 'Enviar los dos mensajes',
    prompt: 'Arma el mensaje para quienes llegaron a la final y no quedaron.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Como te prometí, te escribo hoy con la respuesta.', ok: true, por: 'Cumples la fecha y lo dices.' },
        { id: 'a2', t: 'Lamentamos informarle que…', ok: false, por: 'Frío y de plantilla, para alguien que llegó a la final.' },
      ] },
      { id: 'decision', t: 'La decisión', ops: [
        { id: 'd1', t: 'Elegimos a otra persona por su experiencia en el tipo de almacén que tenemos; fue una decisión muy cerrada.', ok: true, por: 'Una razón real, sin datos de la otra persona.' },
        { id: 'd2', t: 'Elegimos a alguien que pedía menos sueldo.', ok: false, por: 'No es cierto, y deja una idea equivocada.' },
        { id: 'd3', t: 'No puedo darte más detalles.', ok: null, por: 'Es prudente, pero para alguien que llegó a la final, un poco de contexto ayuda.' },
      ] },
      { id: 'valor', t: 'Lo que viste en la persona', ops: [
        { id: 'v1', t: 'Lo que mostraste en la entrevista fue muy valioso y me gustaría mantenerte en nuestra base, si estás de acuerdo.', ok: true, por: 'Reconoces su trabajo y pides su conformidad para guardar sus datos.' },
        { id: 'v2', t: 'Ya te guardé en nuestra base para la próxima.', ok: null, por: 'Bien intencionado, pero sin preguntarle.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Gracias por tu tiempo y tu confianza durante todo el proceso.', ok: true, por: 'Cálido y sin promesas que no puedes cumplir.' },
        { id: 'c2', t: 'Seguro pronto te llamamos para otra cosa.', ok: false, por: 'Una promesa que no depende de ti.' },
      ] },
    ],
    res: (sel, F) => {
      const buenas = ['a1', 'd1', 'v1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = ['a2', 'd2', 'c2'].some(x => Object.values(sel).includes(x)) ? 'aceptable' : buenas >= 3 ? 'buena' : 'aceptable';
      const e = E(F), otras = ['lucia', 'patricia', 'marco'].filter(x => x !== e.chat), txt = 'Como te prometí, te escribo hoy con la respuesta. Elegimos a otra persona por su experiencia en el tipo de almacén que tenemos; fue una decisión muy cerrada. Lo que mostraste fue muy valioso y me gustaría mantenerte en nuestra base, si estás de acuerdo. Gracias por tu tiempo y tu confianza.';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, etica: 2, confianza: 2 }, rel: { [e.chat]: 1 },
        flags: ['oferta_aceptada', ...(q === 'buena' ? ['finalistas_cerradas'] : [])],
        cartera: { supervisor: `Oferta aceptada · ${e.n} ingresa mañana` },
        envia: otras.map(c => [c, txt]),
        out: q === 'buena' ? 'Los dos mensajes tienen respuesta antes de las seis: un agradecimiento por la honestidad y un «sí, guárdenme en la base». Nadie se enteró por un silencio.' : 'El mensaje sale. Cumple, pero no deja la mejor impresión en alguien que llegó a la final.',
        pro: { ok: 'Cerrar bien con quien no quedó cuida la reputación de la empresa en una ciudad donde todos se conocen.', risk: 'Si das una razón falsa, la persona la repetirá.', info: 'Avisa el «no» recién cuando el elegido haya aceptado. Hoy ya aceptó.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Un sí y dos no bien dichos. ¡Bacán!' : 'Cumpliste. Podía ser más cálido.'],
      };
    },
    rules: [[BP, 'Comunica el «no» a los finalistas cuando el elegido haya aceptado, en la fecha prometida.'], [LEY, 'Para conservar sus datos en la base, pide su conformidad (Ley 29733).']],
    mirada: {
      ve: 'En una ciudad como Tacna, quienes llegaron a la final y no quedaron conocen a otros supervisores, a otras jefas de turno, a otros reclutadores. Una profesional cierra el proceso con ellas como si fueran a ser las próximas candidatas. Porque quizás lo sean.',
      visual: { tipo: 'embudo', titulo: 'El proceso del supervisor, hasta hoy', niveles: [['Postulaciones', 140], ['Preseleccionados', 5], ['Terna', 3], ['Oferta aceptada', 1]] },
    },
  },
  {
    id: 'g7', t: '17:30', ch: 'whatsapp', who: 'kelly', titulo: 'Kelly pregunta por mañana', banner: 'assets/esc/planilla.webp', show: ['cumplimiento', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Kelly te escribe desde Planillas. Se oye, en el audio que mandó antes, la impresora atascada de fondo.</p><p>«¿Ya aceptó el supervisor? Necesito DNI, sistema de pensiones, cuenta de sueldo y dirección para el alta de mañana. Mañana también entran los cuatro operarios${F.has('kevin_final') || F.has('kevin_igual') ? ' y los tres vendedores' : ''}. <mark class="clave">Son ocho altas el mismo día</mark>.»</p>`,
    chat: ['¿Ya aceptó el supervisor? Necesito DNI, sistema de pensiones, cuenta de sueldo y dirección para el alta de mañana. Son ocho altas el mismo día 😰'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle hoy los datos a la persona elegida y pasárselos a Kelly antes de irte, aunque salgas tarde.',
        res: { q: 'buena', fx: { cumplimiento: 5, tiempo: -3 }, rel: { kelly: 1 }, flags: ['kelly_viernes'], envia: ['kelly', 'Sí aceptó 🙌 Ya le pedí sus datos; te los paso antes de las 7. Los de operarios y vendedores también van hoy.'],
          out: 'A las 18:50 le reenvías todo a Kelly. Sales a las 19:15, con el sol ya escondido detrás del Arunta. Kelly responde: «Te debo un café. De verdad».',
          pro: { ok: 'Cumples el acuerdo de 48 horas: Planillas puede preparar el alta con calma.', risk: 'Te quedas tarde. Que no se vuelva costumbre: la próxima vez, pide los datos en la llamada de la oferta.' },
          kusi: ['celebra', 'Kelly te debe un café. ¡Eso vale oro!'] } },
      { id: 'b', label: 'Decirle que mañana a las 6:30 le paso todo: ya son las cinco y media.',
        res: { q: 'aceptable', fx: { tiempo: 2, cumplimiento: -3 }, rel: { kelly: -1 }, flags: ['kelly_lunes'], envia: ['kelly', 'Sí aceptó 🙌 Mañana a las 6:30 te paso todo, ¿ya?'],
          out: 'Kelly responde: «Ok…». Mañana tendrá media hora para ocho altas, contratos y cuentas de sueldo.',
          pro: { ok: 'Cuidas tu viernes.', risk: 'Le pasas tu atraso a Planillas, que tiene un plazo legal mañana.' },
          kusi: ['pensando', 'Ese «ok…» tiene puntos suspensivos.'] } },
    ],
    rules: [[LEY, 'El alta en T-Registro se hace dentro del día en que la persona empieza a trabajar (SUNAT).'], [POL, 'Acuerdo interno con Planillas: datos de ingreso con 48 horas de anticipación.']],
    mirada: {
      ve: 'Para Selección, el proceso termina con el sí. Para Planillas, recién empieza. Una profesional sabe que una oferta aceptada hoy con ingreso mañana es una carrera para otra persona, y le pasa la posta a tiempo.',
      visual: { tipo: 'linea', titulo: 'De la oferta al ingreso', hitos: [['Hoy 16:00', 'Oferta aceptada'], ['Hoy en la noche', 'Datos a Planillas'], ['Mañana 6:30', 'Contratos listos'], ['Mañana 7:00', 'Ingreso y alta en T-Registro']] },
    },
  },
];
