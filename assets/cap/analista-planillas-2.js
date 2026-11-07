// Analista de Planillas · Capítulo 2 · «Los conceptos» · Semana 1, martes.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas:
// - Ley 25129: asignación familiar equivalente al 10 % del ingreso mínimo legal (hoy, RMV) para trabajadores con hijos menores
//   de 18 años (o mayores que cursen estudios superiores, hasta los 24). Con la RMV de S/ 1,230 (D.S. 015-2026-TR): S/ 123.
// - D.S. 007-2002-TR (TUO de la Ley de jornada), art. 8: trabajo nocturno de 10 p. m. a 6 a. m.; la remuneración no puede ser
//   menor a la RMV incrementada en 35 % (con RMV S/ 1,230: S/ 1,660.50).
//   https://cdn.www.gob.pe/uploads/document/file/5674322/5035689-informe-tecnico-0947-2021-servir-gpgsc.pdf
//   https://andina.pe/ingles/noticia-trabajas-noche-si-laboras-horario-nocturno-te-toca-pago-adicional-35-947910.aspx
// - D.S. 007-2002-TR, art. 10: sobretasa de horas extras de 25 % las dos primeras horas y 35 % las siguientes.

export const CAP = {
  n: 2, titulo: 'Los conceptos', dia: 'Semana 1, martes', foto: 'assets/esc/planilla.webp',
  lugar: 'Andes Logística · Oficina de Compensaciones, Callao',
  inicio: '08:00', fin: '19:00', cierreHora: '18:50',
  apertura: 'Martes. Diego llegó con su laptop, dos power banks y una lista: 140 conceptos de pago del sistema viejo. Treinta no tienen descripción. Mili trajo «para la moral» el último turrón de doña Pepa que quedaba en la bodega de la esquina.', boton: 'Abrir la lista',
  kusi: 'Cada concepto de la boleta es una promesa a alguien. ¡Hoy toca leer promesas!',
  lead: 'Definiste qué debe tener la ficha de cada concepto, encontraste errores en la configuración, decidiste qué hacer con un pago sin sustento y priorizaste los conceptos misteriosos.',
  reflexion: '¿Cuántos de los conceptos de tu propia boleta podrías explicar?',
  siguiente: { n: 3, titulo: 'En paralelo', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'conceptos', p: 'Mapa de conceptos de pago', j: 'Diego · Consultor', d: 0, e: '140 conceptos, 30 sin descripción' },
  { id: 'migracion', p: 'Migración a Nómina360', j: 'Patricia · Compensaciones', d: 0, e: 'Paralelo de octubre: mañana' },
  { id: 'datos', p: 'Datos maestros', j: 'Mili · Planillas', d: 0, e: 'Carga de Sistemas el jueves' },
  { id: 'ajuste', p: 'Concepto 17 «ajuste»', j: 'Tú', d: 0, e: 'Sin sustento' },
  { id: 'consultas', p: 'Consultas del personal', j: 'Sindicato · Teodoro', d: 0, e: 'CTS baja: respuesta el viernes' },
];

export const FUTURO = {
  ficha_completa: ['Cada concepto tiene una ficha con naturaleza, afectaciones y sustento.', 'Mañana podrás explicar cada diferencia.'],
  ficha_corta: ['La ficha de conceptos no dice si cada uno entra a la CTS y a las gratificaciones.', 'Te costará explicar diferencias mañana.'],
  config_revisada: ['Encontraste la asignación familiar desactualizada y el piso nocturno mal configurado.', 'Diego los corrige antes del paralelo.'],
  config_floja: ['Se te pasaron errores de la configuración.', 'Saldrán como diferencias en el paralelo de mañana.'],
  bono_marcado: ['Marcaste como dudoso que el bono de productividad no entre a la CTS ni a la gratificación.', 'Esa duda crecerá el jueves.'],
  ajuste_respetado: ['Mantuviste el concepto 17 mientras Legal revisa su origen.', '30 operarios no verán un descuento sorpresa.'],
  ajuste_eliminado: ['Eliminaste el concepto 17 por no tener sustento.', '30 operarios cobrarán S/ 40 menos el viernes de la próxima semana.'],
  diego_aliado: ['Le pediste a Diego fichas sin culparlo.', 'Diego te avisará primero cuando algo falle.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  mili: { n: 'Mili Sotelo', sub: 'Asistente de Planillas', c: '#C05621' },
  yesenia: { n: 'Yesenia Vargas', sub: 'Supervisora del turno noche', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'equipo', t: '07:50', de: 'Mili', txt: 'Traje turrón 🍬 y la pestaña de cambios ya tiene 31 filas', si: 'mili_ordenada' },
  { chat: 'equipo', t: '07:51', de: 'Mili', txt: 'Buenos días! Traje turrón 🍬' , no: 'mili_ordenada' },
  { chat: 'diego', t: '08:02', de: 'Diego', txt: 'Te mandé la lista de los 140. Los que no tienen descripción los podemos migrar tal cual, ¿no? Así no nos atrasamos 🙏' },
  { chat: 'yesenia', t: '16:30', de: 'Yesenia', txt: 'Buenas tardes, soy Yesenia, del turno noche. ¿Me puede llamar? Es sobre las horas extras de mi gente.' },
  { chat: 'diego', t: '17:55', de: 'Diego', txt: 'Corregí asignación familiar y el piso nocturno. Gracias por el ojo, eso me iba a explotar 😅', si: 'config_revisada' },
  { chat: 'equipo', t: '18:40', de: 'Patricia', txt: 'Mañana a las 7 corre el paralelo. Duerman.' },
];

export const CORREOS = [
  { t: '09:10', de: 'Diego Arana', para: 'Analista de Planillas', asunto: 'Parámetros cargados en Nómina360', html: '<p>Te adjunto el extracto del mapa de conceptos con los parámetros que cargué desde nuestra plantilla estándar y desde el sistema viejo. Si me das tu visto bueno hoy, mañana temprano corro el paralelo.</p><p>Diego</p>' },
  { t: '14:20', de: 'Legal · Andes Logística', para: 'Analista de Planillas', asunto: 'RE: Concepto 17', html: '<p>Recibido. Revisamos actas y correos de 2018. Mientras tanto, no modifiquen pagos que los trabajadores vienen recibiendo de forma constante sin consultarnos.</p>', si: 'ajuste_respetado' },
];

export const QUIZ = [
  { q: 'Con la RMV de S/ 1,230, ¿cuánto es la asignación familiar?', ops: ['S/ 113', 'S/ 123', 'S/ 102.50', 'Depende del número de hijos'], ok: 1, por: 'La Ley 25129 fija la asignación familiar en el 10 % de la RMV, sin importar cuántos hijos tenga el trabajador.' },
  { q: 'Un operario del turno noche gana S/ 1,500 al mes. ¿Qué pasa?', ops: ['Nada', 'Está por debajo del mínimo nocturno de S/ 1,660.50 y hay que ajustar', 'Se le paga 35 % sobre S/ 1,500', 'Solo aplica si trabaja sábados'], ok: 1, por: 'El TUO de la Ley de jornada (art. 8) dice que el trabajo nocturno no se paga por debajo de la RMV más 35 %.' },
  { q: '¿Qué debe decir la ficha de un concepto de pago?', ops: ['Solo el monto', 'Qué es, si es remunerativo, qué aportes lo afectan, si entra a CTS y gratificación y cuál es su sustento', 'Quién lo creó', 'El color con que aparece en la boleta'], ok: 1, por: 'Sin esas definiciones, el sistema calcula, pero nadie puede explicar por qué.' },
  { q: 'Un pago fijo se viene dando hace años y nadie sabe por qué. Lo prudente es…', ops: ['Eliminarlo', 'Mantenerlo y pedir a Legal que revise su origen antes de cambiarlo', 'Duplicarlo', 'Pagarlo en efectivo'], ok: 1, por: 'Un pago constante puede haberse convertido en un derecho. Quitarlo sin revisar puede ser una rebaja indebida.' },
  { q: 'Las horas extras se pagan con una sobretasa de…', ops: ['10 % siempre', '25 % las dos primeras horas y 35 % las siguientes', '50 %', 'Lo que acuerde el supervisor'], ok: 1, por: 'Es el mínimo del art. 10 del TUO de la Ley de jornada.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:20', ch: 'documento', who: null, titulo: 'La ficha de cada concepto', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Diego quiere migrar los 140 conceptos «tal cual». Tú propones que ninguno entre a Nómina360 sin una ficha. Primero hay que decidir <mark class="clave">qué preguntas responde esa ficha</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la ficha de concepto.', boton: 'Guardar la ficha',
    bloques: [
      { id: 'nat', t: 'Naturaleza', n: 2, ops: [
        { id: 'n1', t: '¿Es remunerativo o no remunerativo? ¿Por qué?', ok: true, por: 'Define todo lo demás.' },
        { id: 'n2', t: '¿Es fijo, variable o eventual? ¿Cada cuánto se paga?', ok: true, por: 'La regularidad importa para la CTS y la gratificación.' },
        { id: 'n3', t: '¿Quién lo pidió en su momento?', ok: false, por: 'Dato curioso, pero no define cómo se calcula.' },
      ] },
      { id: 'afe', t: 'Afectaciones', n: 2, ops: [
        { id: 'a1', t: 'Aportes y retenciones: EsSalud, ONP o AFP, renta de quinta categoría.', ok: true },
        { id: 'a2', t: '¿Entra a la base de CTS, gratificaciones y vacaciones?', ok: true, por: 'Es la pregunta que más plata mueve.' },
        { id: 'a3', t: 'Color y orden en la boleta.', ok: false, por: 'Cosmético.' },
      ] },
      { id: 'sus', t: 'Sustento', n: 2, ops: [
        { id: 's1', t: 'Norma, contrato, convenio o política que lo origina.', ok: true, por: 'Sin sustento no hay forma de defenderlo en una inspección.' },
        { id: 's2', t: 'Fórmula y ejemplo con un caso real.', ok: true, por: 'Para probar que el sistema lo hace bien.' },
        { id: 's3', t: '«Viene del sistema viejo».', ok: false, por: 'Eso no es un sustento: es una herencia.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: [q === 'riesgosa' ? 'ficha_corta' : 'ficha_completa'], cartera: { conceptos: q === 'riesgosa' ? 'Ficha de concepto incompleta' : 'Ficha de concepto en 6 preguntas' },
        out: q === 'buena' ? 'La ficha cabe en media hoja. Mili la convierte en una plantilla y la pega en la carpeta del proyecto.' : 'La ficha tiene huecos: no queda claro si cada concepto entra a la CTS.',
        pro: { ok: 'Una ficha corta, con las preguntas correctas, documenta quince años de decisiones.', risk: '«Viene del sistema viejo» es exactamente lo que no se puede defender.', info: 'Pide un caso real por concepto: es la prueba más barata.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Media hoja que vale oro!' : 'Le faltan preguntas a esa ficha.'],
      };
    },
    mirada: {
      ve: 'Un sistema de planillas no sabe derecho laboral: solo aplica lo que alguien configuró. La ficha de concepto obliga a responder, para cada pago, qué es y por qué se calcula así.',
      visual: { tipo: 'flujo', titulo: 'La vida de un concepto', pasos: ['Origen', 'Naturaleza', 'Afectaciones', 'Fórmula', 'Prueba', 'Boleta'] },
    },
  },
  {
    id: 'c2', t: '09:40', ch: 'documento', who: null, titulo: 'El extracto de Diego', banner: 'assets/foto/revisa.webp', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>Abres el extracto de parámetros que Diego cargó en Nómina360. Lo lees con el mismo cuidado con que leerías tu propia boleta. <mark class="clave">Algo de aquí haría cobrar mal a alguien</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que no deberían migrarse así.',
    doc: { t: 'Nómina360 · Parámetros y conceptos (extracto)', sub: 'Andes Logística · cargado por D. Arana' },
    lines: [
      { id: 'af', t: 'AF01 Asignación familiar: monto fijo S/ 113.00 (plantilla estándar).', bad: LEY, why: 'La Ley 25129 la fija en el 10 % de la RMV. Con la RMV de S/ 1,230 vigente desde octubre, son S/ 123.' },
      { id: 'noc', t: 'NOC Turno noche (22:00 a 06:00): sueldo básico mínimo de operario S/ 1,500, sin recargo.', bad: LEY, why: 'El art. 8 del TUO de la Ley de jornada: el trabajo nocturno no se paga por debajo de la RMV más 35 % (S/ 1,660.50).' },
      { id: 'he', t: 'HE25 / HE35 Horas extras: 25 % las dos primeras horas, 35 % las siguientes.' },
      { id: 'mov', t: 'MOV Movilidad supeditada a la asistencia: no remunerativa, sin aportes.' },
      { id: 'prod', t: 'PROD Bono de productividad mensual (operarios): no computable para CTS ni gratificación, igual que en el sistema viejo.', duda: 'Se paga todos los meses hace dos años. Si es regular, ¿por qué no entraría a la base? Vale la pena revisarlo.' },
      { id: 'x17', t: 'X17 «Ajuste»: S/ 40 fijos a 30 operarios. Sin descripción.', bad: BP, why: 'No se puede migrar un pago que nadie sabe explicar: hay que averiguar su origen.' },
      { id: 'grat', t: 'GRAT Gratificación: base = sueldo básico + asignación familiar.', duda: '¿Y los demás pagos regulares? Anota la pregunta.' },
    ],
    res: ({ missLey, hitsLey, marcadas = [] }) => {
      const bono = marcadas.includes('prod');
      return {
        q: missLey ? 'riesgosa' : 'buena',
        out: missLey ? 'Le das el visto bueno a Diego con un par de comentarios. Algo que la ley exige se te pasó y saldrá en el paralelo.' : `Le devuelves el extracto con ${hitsLey} errores legales marcados en rojo${bono ? ' y una nota amarilla junto al bono de productividad: «¿por qué no computable?»' : ''}. Diego se rasca la cabeza: «La plantilla era de 2025».`,
        flags: [missLey ? 'config_floja' : 'config_revisada', ...(bono ? ['bono_marcado'] : [])], rel: { consultor: missLey ? 0 : 1 },
        cartera: { conceptos: missLey ? 'Visto bueno con errores' : 'Asignación familiar y piso nocturno corregidos' },
        pro: { ok: 'Lees los parámetros contra la norma vigente, no contra la costumbre.', risk: 'Una plantilla estándar suele traer montos de otro año.', info: 'Cada vez que cambia la RMV, revisa todo lo que depende de ella: asignación familiar, piso nocturno, topes.' },
        kusi: missLey ? ['preocupado', 'Algo de la ley se escapó…'] : ['celebra', bono ? '¡Y esa nota amarilla del bono!' : '¡Ojo de auditora!'],
      };
    },
    rules: [[LEY, 'Asignación familiar: 10 % de la RMV (Ley 25129).'], [LEY, 'Trabajo nocturno: no menos de la RMV más 35 % (D.S. 007-2002-TR, art. 8).']],
    mirada: {
      ve: 'Cuando cambia la RMV, cambian también la asignación familiar y el mínimo nocturno. Un parámetro viejo en una plantilla de consultor puede hacer cobrar mal a cientos de personas sin que nadie lo note.',
      visual: { tipo: 'cambio', titulo: 'Lo que cambió con la RMV de S/ 1,230', pares: [['Asignación familiar S/ 113', 'S/ 123'], ['Mínimo nocturno S/ 1,525.50', 'S/ 1,660.50'], ['Plantilla de 2025', 'Parámetros de hoy']] },
      normas: [{ ley: 'Ley 25129', dice: 'Los trabajadores con hijos menores de 18 años (o que estudien después, hasta los 24) perciben una asignación familiar del 10 % del ingreso mínimo legal.', practica: 'Se actualiza cada vez que sube la RMV.' }, { ley: 'D.S. 007-2002-TR, art. 8', dice: 'El trabajo nocturno, de 10 p. m. a 6 a. m., no puede pagarse por debajo de la RMV incrementada en 35 %.', practica: 'Con la RMV de S/ 1,230, el piso nocturno es S/ 1,660.50.' }],
    },
  },
  {
    id: 'c3', t: '11:20', ch: 'whatsapp', who: 'consultor', titulo: 'Los treinta sin nombre', banner: 'assets/foto2/revisan.webp', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Diego insiste: «Los 30 sin descripción migrémoslos tal cual, después vemos». Está apurado y, en el fondo, tiene miedo de que lo culpen si el viernes de la próxima semana algo sale mal.</p><p>Le respondes por WhatsApp. <mark class="clave">Necesitas su ayuda, no su culpa.</mark></p>`,
    type: 'compose', enviaA: 'diego', para: 'Para: Diego Arana · Consultor', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'pos', t: 'Tu posición', ops: [
        { id: 'p1', t: 'Diego, prefiero no migrar conceptos que no sabemos explicar: si algo sale mal, nadie podrá defenderlo.', ok: true, por: 'Razón clara y compartida.' },
        { id: 'p2', t: 'Diego, tu plantilla venía con errores, así que ahora revisamos todo.', ok: false, por: 'Verdad, pero lo pone a la defensiva.' },
      ] },
      { id: 'prop', t: 'Tu propuesta', ops: [
        { id: 'r1', t: 'Ordenemos los 30 por gente y monto: los que pagan a más personas, primero. Los que no se movieron en un año, los dejamos inactivos.', ok: true, por: 'Prioriza y reduce el trabajo.' },
        { id: 'r2', t: 'Investiguemos los 30 a fondo antes de seguir.', ok: false, por: 'Ideal, pero no alcanza el tiempo.' },
      ] },
      { id: 'ayuda', t: 'Lo que le pides', ops: [
        { id: 'h1', t: '¿Me ayudas sacando del sistema viejo cuántas personas y cuánto suma cada uno en los últimos 12 meses?', ok: true, por: 'Le das un rol concreto.' },
        { id: 'h2', t: 'Avísame cuando termines.', ok: null, por: 'Correcto, pero no le dices qué necesitas.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'r1', 'h1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.pos === 'p2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: sel.prop === 'r1' ? 2 : -2, confianza: q === 'buena' ? 2 : 0 }, rel: { consultor: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'buena' ? ['diego_aliado'] : [],
        out: q === 'buena' ? 'Diego responde en veinte minutos con una tabla: 19 de los 30 no se pagaron en el último año. Quedan 11 por entender.' : q === 'riesgosa' ? 'Diego responde: «La plantilla la aprobó tu área». Pasan la siguiente hora discutiendo quién tenía la culpa.' : 'Diego acepta, pero no sabe bien qué entregarte.',
        pro: { ok: 'Le das una razón, un método y un rol.', risk: 'Buscar culpables en medio de una migración solo atrasa.', info: 'Lo que no se movió en un año puede quedar inactivo, no borrado.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'De 30 a 11. ¡Así se trabaja!' : 'Más método, menos culpa.'],
      };
    },
    mirada: {
      ve: 'El consultor y la analista quieren lo mismo: que el pago salga bien. Cuando el plazo aprieta, la tentación es buscar culpables. Repartir el trabajo con datos rinde mucho más.',
      visual: { tipo: 'embudo', titulo: 'Los conceptos sin descripción', niveles: [['Sin descripción', 30], ['Con pagos en el último año', 11], ['Por investigar hoy', 3]] },
    },
  },
  {
    id: 'c4', t: '13:10', ch: 'presencial', who: 'patricia-g', titulo: 'El concepto 17', banner: 'assets/foto/mentora.webp', lugar: 'Sala de vidrio', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Mili encontró el origen del concepto 17: en 2018, un gerente de operaciones prometió S/ 40 al mes a los montacarguistas que «se quedaran cuando cerraron el otro almacén». No hay acta, solo un correo. Desde entonces, 30 personas lo cobran cada mes.</p><p>Diego propone eliminarlo: «Sin sustento, no migra». Patricia te mira: «<mark class="clave">Tú decides qué recomendamos</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mantenerlo en Nómina360 con su nombre real, documentar el correo de 2018 y pedir a Legal que defina si ya es un derecho.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, tiempo: -1 }, rel: { 'patricia-g': 1 }, flags: ['ajuste_respetado'], cartera: { ajuste: 'Se mantiene: «Bono de permanencia 2018», en revisión de Legal' },
          out: 'Patricia firma el correo a Legal. Mili cambia el nombre del concepto a «Bono de permanencia 2018». Treinta personas no notarán nada, y eso es bueno.',
          pro: { ok: 'No cambias un pago constante sin saber si ya es un derecho.', risk: 'Mantienes un concepto raro unas semanas más.', info: 'Un pago regular, durante años, puede haberse incorporado a la remuneración del trabajador.' },
          kusi: ['animo', 'Primero entender, después cambiar.'] } },
      { id: 'b', label: 'Eliminarlo: no hay acta, el gerente ya no está y la migración es la oportunidad de limpiar.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4, tiempo: 2, personas: -4 }, rel: { consultor: 1 }, flags: ['ajuste_eliminado'], cartera: { ajuste: 'Eliminado en Nómina360' },
          out: 'Diego borra el concepto. Treinta montacarguistas cobrarán S/ 40 menos el viernes de la próxima semana, sin aviso. Tienen sindicato.',
          pro: { ok: 'Limpias un concepto sin papeles.', risk: 'Quitar unilateralmente un pago que se viene dando por años puede ser una rebaja indebida y un conflicto colectivo.' },
          kusi: ['preocupado', '¿Y si ese correo vale como acuerdo?'] } },
      { id: 'c', label: 'Mantenerlo solo para los 30 actuales y no otorgarlo a nadie nuevo, sin consultar a Legal.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: 1 }, flags: ['ajuste_respetado'], cartera: { ajuste: 'Se mantiene para 30; cerrado a nuevos' },
          out: 'El pago sigue. La decisión de cerrarlo a nuevos tiene sentido, pero nadie con firma la tomó.',
          pro: { ok: 'Proteges a quienes ya lo cobran.', risk: 'Decidir políticas de pago sin Legal ni la jefatura te expone a ti.' },
          kusi: ['pensando', 'Buena idea, ¿pero quién la firma?'] } },
    ],
    rules: [[BP, 'Ningún pago constante se elimina en una migración sin revisión legal y sin aviso.']],
    mirada: {
      ve: 'Las migraciones invitan a «limpiar». Pero en planillas, limpiar puede significar quitarle plata a alguien que la cobra hace años de buena fe. Lo que no tiene papeles no es necesariamente ilegal: puede ser un derecho mal documentado.',
      visual: { tipo: 'balanza', a: { t: 'Eliminar el 17', items: ['Sistema más limpio', 'S/ 1,200 menos al mes'] }, b: { t: 'Revisar antes', items: ['30 personas sin sorpresa', 'Sustento para una inspección', 'Sindicato tranquilo'] } },
    },
  },
  {
    id: 'c5', t: '15:00', ch: 'documento', who: null, titulo: 'Los once que quedan', banner: 'assets/esc/piensa.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>De los conceptos sin descripción, once se pagaron en el último año. Hoy solo alcanzas a investigar <mark class="clave">tres</mark> antes de que Diego cierre la configuración.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres conceptos que investigas hoy.', boton: 'Investigar estos', resumen: 'Investigaste',
    cols: ['Concepto', 'Personas y monto (12 meses)'],
    rows: [
      { id: 'x22', cells: ['X22 «Reint. noche»', '210 operarios · S/ 96,000'] },
      { id: 'x08', cells: ['X08 «Dscto. varios»', '380 trabajadores · descuento de S/ 38,000'] },
      { id: 'x31', cells: ['X31 «Adelanto»', '45 personas · S/ 22,000'] },
      { id: 'x03', cells: ['X03 «Navidad»', '1,050 personas · S/ 52,000 (una vez al año)'] },
      { id: 'x40', cells: ['X40 «Cumple»', '120 personas · S/ 6,000'] },
      { id: 'x12', cells: ['X12 «Uniforme»', '2 personas · S/ 300'] },
    ],
    score: { x22: 3, x08: 3, x31: 2, x03: 1, x40: 0, x12: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, cumplimiento: picks.includes('x08') ? 3 : -1 },
        cartera: { conceptos: q === 'buena' ? '11 por entender: 3 resueltos hoy' : 'Conceptos misteriosos sin priorizar' },
        out: picks.includes('x08') ? 'El «Dscto. varios» resulta ser un descuento por comedor que nadie autorizó por escrito en 2024. Lo marcas para Legal: todo descuento necesita sustento.' : 'Avanzas, pero el descuento que toca a 380 personas sigue sin explicación.',
        pro: { ok: 'Priorizas por personas y monto, y das peso a los descuentos.', risk: 'Un descuento sin autorización afecta el sueldo neto y es lo primero que mira un inspector.', info: 'X03 se paga en diciembre: puedes revisarlo la próxima semana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Los descuentos, siempre bajo la lupa.' : '¿Cuál toca a más gente?'],
      };
    },
    mirada: {
      ve: 'No todo se puede investigar a la vez. El criterio de un analista de planillas: primero lo que toca a más personas, lo que mueve más plata y lo que se descuenta del sueldo.',
      visual: { tipo: 'matriz', x: 'Monto', y: 'Personas', cuadrantes: ['Ya', 'Hoy', 'Esta semana', 'Después'], items: [['X22', .8, .5], ['X08', .5, .8], ['X31', .3, .2], ['X03', .55, .95], ['X40', .1, .3], ['X12', .05, .05]] },
    },
  },
  {
    id: 'c6', t: '16:40', ch: 'llamada', who: null, titulo: 'Las horas de Yesenia', banner: 'assets/foto/llamada.webp', show: ['personas', 'cumplimiento', 'confianza'],
    body: () => `<p>Llamas a Yesenia Vargas, supervisora del turno noche. Es de Pucallpa, lleva ocho años en el almacén y habla rápido, con el ruido de los montacargas de fondo.</p><p>«Señorita, el reloj marca la salida de mi gente a las 6, pero cuando hay barco se quedan hasta las 8 descargando. <mark class="clave">Esas dos horas yo las anoto en un cuaderno</mark> y a fin de mes se las paso a Mili. ¿Con el sistema nuevo eso va a seguir?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que sí se pagarán, y pedirle que desde este mes las horas extras se aprueben en un formato firmado por día, no en un cuaderno.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 3 }, envia: [['yesenia', 'Yesenia, las horas extras se siguen pagando con Nómina360. Para que no se pierda ninguna, desde hoy te dejo un formato diario: nombre, hora de salida real y tu firma. Me lo mandas cada mañana por correo.']],
          out: 'Yesenia suspira aliviada: «Ese cuaderno ya se me mojó dos veces». Esa noche te manda una foto del formato lleno.',
          pro: { ok: 'Aseguras el pago y mejoras la prueba.', info: 'El registro de horas extras es una de las primeras cosas que pide una inspección.' },
          kusi: ['feliz', 'Del cuaderno mojado al formato firmado.'] } },
      { id: 'b', label: 'Decirle que solo se pagarán las horas que marque el reloj.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -2 },
          out: 'Yesenia se queda callada. «Entonces mi gente va a trabajar gratis cuando haya barco.»',
          pro: { ok: 'Simplificas el cálculo.', risk: 'Si el trabajo se hizo, se paga. Ignorar horas reales es un incumplimiento, aunque el reloj no las marque.' },
          kusi: ['indignado', 'Si se trabajó, se paga.'] } },
    ],
    rules: [[LEY, 'Horas extras: 25 % las dos primeras horas y 35 % las siguientes (D.S. 007-2002-TR, art. 10).']],
    mirada: { ve: 'Detrás de cada concepto hay una práctica real: un barco que llega tarde, un cuaderno, una supervisora que cuida a su gente. Configurar bien no es solo poner fórmulas: es asegurar que lo trabajado llegue a la planilla.' },
  },
];
