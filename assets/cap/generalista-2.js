// Generalista de RR.HH. · Capítulo 2 · «Contratos de temporada» · Semana 1, martes.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas (TUO del D.Leg. 728, Ley de Productividad y Competitividad Laboral, D.S. 003-97-TR):
//   Guía LP Derecho que transcribe el régimen de contratos modales (arts. 53 a 83):
//   https://img.lpderecho.pe/wp-content/uploads/2024/03/Guia-Contratos-de-trabajo-sujetos-a-modalidad-en-la-actividad-privada-LPDerecho.pdf
//   https://lpderecho.pe/jurisprudencia-articulo-67-tuo-decreto-legislativo-728-contrato-trabajo-temporada/
//   Modelo de contrato de temporada del MTPE: https://cdn.www.gob.pe/uploads/document/file/7780022/6570958-contrato_de_temporada.pdf
// - Art. 67: el contrato de temporada atiende necesidades propias del giro que se cumplen solo en determinadas
//   épocas del año y se repiten en cada ciclo.
// - Arts. 69 y 70: quien fue contratado por el mismo empleador dos temporadas consecutivas o tres alternadas tiene
//   derecho a ser contratado en las siguientes; debe presentarse dentro de los 15 días anteriores al inicio de la temporada.
// - Art. 58: la necesidad de mercado excluye las variaciones cíclicas o de temporada.
// - Art. 72: el contrato modal consta por escrito, con su duración y la causa objetiva.
// - Art. 10: periodo de prueba de tres meses (ampliable por escrito solo para calificados, de confianza o dirección).
// - Primacía de la realidad y RMV de S/ 1,230 (D.S. 015-2026-TR), ya citadas en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'Contratos de temporada', dia: 'Semana 1, martes', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Oficina de RR.HH. · Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Cusco, martes. Amaneció despejado, pero a las tres de la tarde, como todos los días de noviembre, va a llover. Tu oficina es un antiguo depósito de lencería junto a la lavandería: huele a jabón y a vapor.', boton: 'Abrir la carpeta de contratos',
  kusi: 'Un contrato no es un papel: es la promesa que le haces a alguien. ¡Dale!',
  lead: 'Corregiste un modelo de contrato que no resistía una inspección, le explicaste a Verónica qué modalidad corresponde a la temporada, armaste la matriz de contratos, decidiste qué hacer con los tres trabajadores escondidos en recibos y llamaste a tus primeras contrataciones.',
  reflexion: '¿Qué le dirías a alguien que te pide trabajar «por recibo» para que no le descuenten nada?',
  siguiente: { n: 3, titulo: 'La cocina', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'modelo', p: 'Modelo de contrato del hotel', j: 'Carpeta del contador anterior', d: 0, e: 'Hoy' },
  { id: 'modalidad', p: 'Modalidad para las 18 vacantes', j: 'Verónica · Gerencia', d: 0, e: 'Hoy' },
  { id: 'honorarios', p: 'Tres trabajadores con recibos por honorarios', j: 'Iván · Contabilidad', d: 0, e: 'Reunión a las 11:30' },
  { id: 'vacantes', p: 'Primeras ofertas a candidatos', j: 'Instituto y referidos', d: 0, e: 'Esta tarde' },
];

export const FUTURO = {
  plantilla_corregida: ['Corregiste el modelo de contrato: causa, prueba, sueldo y beneficios.', 'Los 18 contratos saldrán de ese modelo.'],
  contrato_temporada: ['Los ingresos de la temporada tendrán contrato de temporada con causa clara.', 'Verónica lo recordará cuando llegue la certificadora en el capítulo 7.'],
  contrato_mercado: ['Usaste «necesidad de mercado» para cubrir una temporada que se repite cada año.', 'La certificadora lo marcará en el capítulo 7.'],
  preferencia_oculta: ['No le explicaste a Verónica el derecho preferente de quienes repiten temporada.', 'Se sorprenderá cuando alguien lo reclame.'],
  honorarios_planilla: ['Los tres trabajadores entran a planilla reconociendo su fecha real de ingreso.', 'Yaneth, la recepcionista nocturna, verá su primera boleta en el capítulo 5.'],
  honorarios_temporada: ['Los tres pasaron a planilla «desde hoy», con contrato de temporada.', 'Su antigüedad real quedó sin reconocer.'],
  honorarios_espera: ['Los tres siguen con recibos por honorarios hasta después de la temporada.', 'Trabajarán los meses más duros sin seguro.'],
  milagros_planilla: ['Milagros entra a recepción en planilla, aunque pidió recibo.', 'Cubrirá a Wendy.'],
  milagros_recibo: ['Aceptaste que Milagros trabaje en recepción con recibos por honorarios.', 'Repetiste el problema que viniste a ordenar.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  yaneth: { n: 'Yaneth Huallpa', sub: 'Recepcionista nocturna', c: '#6B5BA8' },
};

export const WSP = [
  { chat: 'chef', t: '06:55', de: 'Chef Rolando', txt: 'Kevin llegó puntual. Pela rápido. Vamos a ver si dura 😤', si: 'chef_formal' },
  { chat: 'chef', t: '06:55', de: 'Chef Rolando', txt: 'Kevin ya está aquí desde las 6. ¿Le pago hoy o el sábado?', si: 'chef_informal' },
  { chat: 'grupo', t: '07:30', de: 'Wendy', txt: 'Buenos días 🌞 Hoy llegan 22 pax de una agencia francesa. Recepción a full.' },
  { chat: 'yaneth', t: '07:45', de: 'Yaneth', txt: 'Buenos días, soy Yaneth, la de la noche. Iván me dijo que usted vería lo de mis recibos. Tengo un hijito, ¿eso afecta en algo? 🙏' },
  { chat: 'veronica', t: '12:40', de: 'Verónica', txt: 'Ok. Prefiero pagar ahora en orden que después con multa. Pero que Iván me dé el número exacto 📊', si: 'honorarios_planilla' },
  { chat: 'yaneth', t: '13:05', de: 'Yaneth', txt: '¿O sea que mis dos años sí cuentan? Gracias 😭 Voy a dormir tranquila hoy.', si: 'honorarios_planilla' },
  { chat: 'yaneth', t: '13:05', de: 'Yaneth', txt: 'Iván me dijo que entro a planilla «desde hoy». ¿Y los dos años que ya trabajé?', si: 'honorarios_temporada' },
  { chat: 'wendy', t: '17:30', de: 'Wendy', txt: 'Milagros habla inglés muy bien. Si la dejan conmigo esta semana, la entreno antes de mis vacaciones 💛', si: 'wendy_acuerdo' },
];

export const CORREOS = [
  { t: '07:20', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Contratos', html: '<p>Para no complicarnos: hagamos contratos por tres meses a los 18, como hace mi amiga Carmen en su hotel de Aguas Calientes. Su abogado los pone como «necesidad de mercado». Si alguien no funciona, no renovamos y listo.</p><p>Conversamos a las 8:15 en mi oficina.</p><p>V.</p>' },
  { t: '09:10', de: 'CPC Iván Mendoza', para: 'Generalista de RR.HH.', asunto: 'Casos de recibos por honorarios', html: '<p>Estimada:</p><p>Adjunto la fecha real en que empezó cada uno: recepcionista nocturna (Yaneth Huallpa), hace dos años; mozo (Edwin Ttito), hace dos años; camarera (Norma Mamani), hace catorce meses. Puedo calcular los beneficios pendientes, pero necesito saber qué decide la gerencia.</p><p>Atentamente,<br>CPC Iván Mendoza</p>' },
  { t: '14:20', de: 'Instituto de Turismo del Cusco', para: 'RR.HH. Hotel Inti Wasi', asunto: 'Postulantes para su convocatoria', html: '<p>Les enviamos los datos de 12 egresados interesados. Tres ya confirmaron que pueden empezar el jueves.</p>', si: 'canales_locales' },
];

export const QUIZ = [
  { q: 'Un hotel del Cusco necesita más personal cada temporada alta, que se repite todos los años. ¿Qué modalidad encaja mejor?', ops: ['Necesidad de mercado', 'Contrato de temporada', 'Locación de servicios', 'Contrato verbal a prueba'], ok: 1, por: 'El contrato de temporada (art. 67 del D.S. 003-97-TR) atiende necesidades del giro que se repiten en determinadas épocas de cada año.' },
  { q: '¿Por qué «necesidad de mercado» no sirve para la temporada alta?', ops: ['Porque es más cara', 'Porque excluye las variaciones cíclicas o de temporada', 'Porque solo es para minería', 'Porque dura un mes'], ok: 1, por: 'La necesidad de mercado cubre incrementos temporales e imprevisibles, no los que se repiten cada año por temporada.' },
  { q: '¿Qué debe decir siempre un contrato sujeto a modalidad?', ops: ['Solo el sueldo', 'Su duración y la causa objetiva que justifica la contratación temporal', 'Que el trabajador renuncia a beneficios', 'Nada: puede ser verbal'], ok: 1, por: 'El contrato modal consta por escrito, con su duración y la causa objetiva (art. 72).' },
  { q: 'Un mozo trabajó con el hotel dos temporadas seguidas. ¿Qué derecho gana?', ops: ['Ninguno', 'Un bono', 'Derecho a ser contratado en las temporadas siguientes', 'Pasar a gerente'], ok: 2, por: 'Quien trabaja dos temporadas consecutivas (o tres alternadas) con el mismo empleador tiene derecho a ser contratado en las siguientes, si se presenta dentro de los 15 días anteriores al inicio de la temporada (D.S. 003-97-TR, arts. 69 y 70).' },
  { q: 'Tres personas trabajan hace años con horario y jefe, pero con recibos por honorarios. Al pasarlas a planilla…', ops: ['Se las trata como nuevas desde hoy', 'Se reconoce su fecha real de ingreso', 'Se les hace contrato de temporada', 'Se espera a que lo pidan'], ok: 1, por: 'Por primacía de la realidad, la relación laboral ya existía: su antigüedad empieza el día en que empezaron a trabajar.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:10', ch: 'documento', who: null, titulo: 'El modelo del contador anterior', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de RR.HH., junto a la lavandería', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>La secadora industrial retumba al otro lado de la pared. En la carpeta de Verónica encuentras el único modelo de contrato que usaba el hotel, en Word, con el logo pixelado.${F.has('chef_informal') ? ' Mientras tanto, Kevin ya está en la cocina sin haber firmado nada.' : F.has('chef_formal') ? ' Con este mismo modelo firmó Kevin esta mañana, en su primer día: hay que revisarlo.' : ''}</p><p>De aquí saldrán los 18 contratos de la temporada. <mark class="clave">Si el modelo está mal, los 18 estarán mal</mark>.</p>`,
    type: 'flag', prompt: 'Marca las cláusulas que no se pueden quedar así.',
    doc: { t: 'CONTRATO DE TRABAJO POR TRES MESES', sub: 'Hotel Inti Wasi S.A.C. · modelo 2021' },
    lines: [
      { id: 'objeto', t: 'Objeto: el trabajador prestará servicios por tres meses, según las necesidades del hotel.', bad: LEY, why: 'Un contrato temporal debe decir por escrito cuál es la causa objetiva que lo justifica. «Según las necesidades» no es una causa.' },
      { id: 'prueba', t: 'Periodo de prueba: seis meses para todos los puestos.', bad: LEY, why: 'El periodo de prueba es de tres meses. Solo se amplía por escrito para personal calificado, de confianza o de dirección.' },
      { id: 'renuncia', t: 'Por ser contrato temporal, el trabajador renuncia a gratificaciones y CTS.', bad: LEY, why: 'Los derechos laborales son irrenunciables, y el personal con contrato modal tiene los mismos beneficios que el resto.' },
      { id: 'sueldo', t: 'Remuneración: S/ 1,130 mensuales.', bad: LEY, why: 'Desde octubre de 2026 la remuneración mínima es de S/ 1,230. El modelo quedó desactualizado.' },
      { id: 'renueva', t: 'El contrato se renovará solo, cada tres meses, mientras el hotel lo requiera.', bad: BP, why: 'Renovar sin revisar la causa cada vez es la forma más rápida de que un contrato temporal termine siendo indefinido sin que nadie lo decida.' },
      { id: 'jornada', t: 'Jornada: 48 horas semanales, con un día de descanso a la semana.' },
      { id: 'uniforme', t: 'El hotel entrega dos juegos de uniforme y la credencial del personal.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Imprimes el modelo casi como estaba. La impresora del pasillo se atasca en la tercera hoja; la destrabas con una regla.' : `Marcas ${hitsLey} cláusulas en rojo y abres un modelo nuevo. Cuando la impresora del pasillo se atasca, ya tienes la versión corregida en el USB.`,
      flags: missLey ? [] : ['plantilla_corregida'], cartera: { modelo: missLey ? 'Sin corregir' : 'Modelo nuevo: causa, prueba, sueldo y beneficios' },
      pro: { ok: 'Corregir el modelo una vez te ahorra corregir 18 contratos después.', risk: 'Una cláusula de renuncia a beneficios no vale, pero sí demuestra en una inspección que alguien lo intentó.', info: 'El Ministerio de Trabajo publica modelos de contratos modales que sirven de punto de partida.' },
      kusi: missLey ? ['preocupado', '¿Seis meses de prueba y sin CTS?'] : ['celebra', '¡Modelo nuevo, temporada nueva!'],
    }),
    rules: [[LEY, 'El contrato modal consta por escrito, con su duración y la causa objetiva (D.S. 003-97-TR, art. 72).'], [LEY, 'El periodo de prueba es de tres meses (art. 10).']],
    mirada: {
      ve: 'En las empresas que nunca tuvieron RR.HH., el modelo de contrato pasa de mano en mano durante años. Revisarlo es lo primero que hace una generalista, porque cada error se multiplica por cada persona que lo firma.',
      visual: { tipo: 'cambio', titulo: 'Del modelo viejo al nuevo', pares: [['«Según las necesidades del hotel»', 'Temporada alta del turismo, que se repite cada año'], ['Seis meses de prueba', 'Tres meses'], ['Renuncia a CTS y gratificaciones', 'Los mismos beneficios que el resto'], ['S/ 1,130', 'Al menos S/ 1,230']] },
    },
  },
  {
    id: 'c2', t: '08:15', ch: 'presencial', who: 'veronica', titulo: '«Por tres meses, como Carmen»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la gerencia', show: ['cumplimiento', 'confianza', 'tiempo'],
    body: () => `<p>Verónica atiende dos llamadas a la vez: una agencia francesa y el proveedor de truchas. Cuelga y te mira.</p><p>«Carmen hace así en Aguas Calientes y nunca tuvo problemas: <mark class="clave">tres meses, necesidad de mercado, y si no sirven, no renuevo</mark>. ¿Por qué lo complicaríamos?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle contrato de temporada: la causa es la temporada alta que se repite cada año. Y advertirle que quien trabaje dos temporadas consecutivas tendrá derecho a ser contratado en las siguientes.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 2, tiempo: -1 }, rel: { veronica: 0 }, flags: ['contrato_temporada'], cartera: { modalidad: 'Contrato de temporada, con causa y derecho preferente explicado' },
          out: 'Verónica frunce el ceño: «¿O sea que si repiten tengo que volver a llamarlos?». Le respondes que sí, y que eso significa empezar cada temporada con gente ya entrenada. Se queda pensando. «Bueno. Pero que el contrato diga bien hasta cuándo.»',
          pro: { ok: 'Eliges la modalidad que corresponde y le cuentas a la gerencia todo lo que implica, también lo incómodo.', risk: 'A Verónica no le gusta sentirse «amarrada». Tendrás que mostrarle la ventaja.', info: 'Para hacerlo valer, el trabajador debe presentarse dentro de los 15 días anteriores al inicio de la temporada.' },
          kusi: ['animo', 'Temporada es temporada. ¡Bien dicho!'] } },
      { id: 'b', label: 'Hacerlo como Carmen: necesidad de mercado por tres meses. Si su abogado lo usa, debe tener sustento.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, confianza: 2, tiempo: 2 }, rel: { veronica: 1 }, flags: ['contrato_mercado'], cartera: { modalidad: 'Necesidad de mercado por tres meses' },
          out: 'Verónica sonríe: «Ya ves, sin complicarnos». Los 18 contratos dirán «incremento imprevisible de la demanda» para una temporada que llega cada año en la misma fecha.',
          pro: { ok: 'Verónica queda contenta y avanzas rápido.', risk: 'La necesidad de mercado excluye las variaciones cíclicas o de temporada. Un contrato con la causa equivocada puede considerarse desnaturalizado.' },
          kusi: ['preocupado', '¿Imprevisible? Si llega todos los años…'] } },
      { id: 'c', label: 'Contrato de temporada, sin mencionar lo del derecho preferente: no hace falta asustarla hoy.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -1 }, flags: ['contrato_temporada', 'preferencia_oculta'], cartera: { modalidad: 'Contrato de temporada' },
          out: 'Verónica acepta sin preguntar mucho. La modalidad es correcta. Lo que no sabe todavía es que, en dos años, varias personas podrán pedir volver.',
          pro: { ok: 'La modalidad es la correcta.', risk: 'Una gerenta que se entera tarde de una consecuencia deja de confiar en tus recomendaciones.' },
          kusi: ['pensando', 'Correcto… pero a medias.'] } },
    ],
    rules: [[LEY, 'Contrato de temporada: necesidades propias del giro que se cumplen solo en determinadas épocas del año y se repiten en cada ciclo (D.S. 003-97-TR, art. 67).'], [LEY, 'La necesidad de mercado excluye las variaciones de carácter cíclico o de temporada (art. 58).']],
    mirada: {
      ve: 'Que «a otro hotel nunca le pasó nada» no prueba que esté bien: prueba que nadie lo revisó. La modalidad de un contrato depende de la causa real, y en hotelería la temporada alta es la causa más clara que existe.',
      visual: { tipo: 'balanza', a: { t: 'Necesidad de mercado', items: ['Incremento temporal e imprevisible', 'Excluye lo cíclico', 'Lo que usa Carmen'] }, b: { t: 'Contrato de temporada', items: ['Necesidad que se repite cada año', 'Duración atada a la temporada', 'Derecho preferente a volver'] } },
      normas: [{ ley: 'D.S. 003-97-TR, arts. 67, 69 y 70', dice: 'El contrato de temporada atiende necesidades propias del giro de la empresa que se cumplen solo en determinadas épocas del año y que se repiten en cada ciclo. Quien es contratado por el mismo empleador dos temporadas consecutivas o tres alternadas tiene derecho a ser contratado en las siguientes.', practica: 'Para un hotel, ese derecho es una ventaja: la gente que vuelve ya conoce el trabajo.' }],
    },
  },
  {
    id: 'c3', t: '09:40', ch: 'documento', who: null, titulo: 'La matriz de contratos', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Abres un Excel nuevo y lo llamas, por fin, con un nombre claro: «Contratos temporada.xlsx». ${F.has('contrato_mercado') ? 'Verónica ya decidió la modalidad de los 18, pero quedan otros casos por ordenar.' : 'Con la modalidad de los 18 decidida, ordenas el resto.'}</p><p>En la matriz, <mark class="clave">cada fila debe tener una causa que puedas explicar</mark>.</p>`,
    type: 'builder', prompt: 'Elige lo que va en cada bloque de la matriz.', boton: 'Guardar la matriz',
    bloques: [
      { id: 'temporada', t: 'Las 18 vacantes de la temporada', n: 1, ops: [
        { id: 't1', t: 'Contrato de temporada: causa, el aumento de huéspedes de la temporada alta, que se repite cada año; dura lo que dura la temporada.', ok: true, por: 'Causa real, duración clara.' },
        { id: 't2', t: 'Contrato de tres meses «según necesidades del hotel».', ok: false, por: 'Sin causa objetiva, no resiste una inspección.' },
        { id: 't3', t: 'Locación de servicios con recibos, para no cargar la planilla.', ok: false, por: 'Mozos y camareras con horario y jefe son trabajadores.' },
      ] },
      { id: 'honorarios', t: 'Yaneth, Edwin y Norma (hoy con recibos)', n: 1, ops: [
        { id: 'h1', t: 'Planilla con contrato indeterminado, reconociendo la fecha en que de verdad empezaron.', ok: true, por: 'Hacen labores permanentes: recepción de noche, salón y habitaciones.' },
        { id: 'h2', t: 'Contrato de temporada desde hoy, como a los nuevos.', ok: false, por: 'Su trabajo no es de temporada: lo hacen todo el año desde hace años.' },
      ] },
      { id: 'requisitos', t: 'Lo que todo contrato de la temporada debe cumplir', n: 2, ops: [
        { id: 'r1', t: 'Firmado por escrito antes del primer día, con la duración y la causa.', ok: true, por: 'Es la base del contrato modal.' },
        { id: 'r2', t: 'Alta en el T-Registro el mismo día de ingreso.', ok: true, por: 'Sin alta no hay seguro.' },
        { id: 'r3', t: 'Se firma al terminar el primer mes, si la persona se queda.', ok: false, por: 'Ese mes la persona trabaja sin contrato y sin la causa escrita.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 3 },
        cartera: { modalidad: q === 'riesgosa' ? 'Matriz con causas débiles' : 'Matriz de modalidades lista' },
        out: q === 'buena' ? 'La matriz cabe en una pantalla: tres bloques, una causa por fila. La imprimes para la reunión de las 11:30.' : q === 'aceptable' ? 'La matriz avanza, aunque una fila no aguantaría una pregunta de Iván.' : 'La matriz está llena, pero varias filas no tienen una causa que puedas defender.',
        pro: { ok: 'Una matriz de modalidades obliga a justificar cada contrato antes de firmarlo.', risk: 'Usar el mismo contrato para todo es la forma más común de que un temporal se vuelva indefinido.', info: 'Guarda la matriz: la certificadora y cualquier inspector te pedirán la causa de cada contrato.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una causa por fila! Así se ordena la casa.' : 'Cada fila debe aguantar un «¿por qué?».'],
      };
    },
    rules: [[BP, 'Antes de firmar, escribe en una línea la causa de cada contrato temporal. Si no puedes, la modalidad está mal.']],
    mirada: {
      ve: 'La matriz de modalidades es uno de los entregables más útiles de una generalista: en una hoja se ve quién es temporal, por qué, y quién nunca debió serlo.',
      visual: { tipo: 'flujo', titulo: '¿Qué contrato le corresponde?', pasos: ['¿La labor es permanente?', 'Sí: indeterminado', 'No: ¿se repite cada año?', 'Sí: temporada', 'Escribe la causa'], aqui: 3 },
    },
  },
  {
    id: 'c4', t: '11:30', ch: 'presencial', who: 'contador', titulo: 'Yaneth, Edwin y Norma', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala de reuniones, con vista al patio colonial', show: ['cumplimiento', 'etica', 'personas'],
    body: (n, F) => `<p>${F.has('honorarios_alerta') ? 'Es la reunión que le propusiste ayer a Verónica.' : 'Ayer no se lo contaste a Verónica; hoy fue Edwin, el mozo, quien le preguntó por su CTS, y ella convocó a esta reunión.'} Iván llega con su laptop y una hoja de cálculo; Verónica, con un café pasado.</p><p>Iván explica: «Si los pasamos a planilla reconociendo desde cuándo trabajan, hay que pagar vacaciones, CTS y gratificaciones pendientes». Verónica suspira: «<mark class="clave">Justo ahora, antes de la temporada</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Planilla desde ya con contrato indeterminado, reconociendo su fecha real de ingreso. Pedirle a Iván el cálculo exacto y conversar con los tres un plan para pagar lo pendiente.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 4, personas: 4, confianza: 1 }, rel: { contador: 1, veronica: 0 }, flags: ['honorarios_planilla'], cartera: { honorarios: 'Planilla con fecha real; Iván calcula lo pendiente' },
          out: 'Verónica se queda callada un buen rato. «Prefiero pagarlo ahora a pagarlo con multa.» Iván cierra la laptop casi con alivio: «Así sí puedo trabajar tranquilo».',
          pro: { ok: 'Reconoces lo que la realidad ya era y conviertes una contingencia en un plan.', risk: 'El costo es real y cae en un mes caro. Hay que acordar el pago por escrito con cada uno.', info: 'Que el plan de pago sea un acuerdo con cada trabajador, no una decisión que se les comunica.' },
          kusi: ['celebra', '¡Dos años que por fin cuentan!'] } },
      { id: 'b', label: 'Ponerlos en planilla desde hoy con contrato de temporada, como a los nuevos. Es formalizarlos sin un gasto que hoy el hotel no puede asumir.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, etica: -4, personas: -2 }, rel: { veronica: 1 }, flags: ['honorarios_temporada'], cartera: { honorarios: 'Planilla desde hoy, contrato de temporada' },
          out: 'Verónica aprueba de inmediato. Iván anota sin levantar la vista. Ahora tienen seguro, pero sus años anteriores desaparecieron del papel, y su contrato dice «temporada» para un trabajo de todo el año.',
          pro: { ok: 'Desde hoy tienen alta y seguro.', risk: 'La antigüedad no se borra con un contrato nuevo. Y un contrato de temporada para una labor permanente puede desnaturalizarse.' },
          kusi: ['triste', '¿Y los dos años que ya trabajaron?'] } },
      { id: 'c', label: 'Esperar a que termine la temporada: hoy la prioridad son las 18 vacantes, y en enero se ordena con calma.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: -3, tiempo: 2 }, flags: ['honorarios_espera'], cartera: { honorarios: 'Postergado hasta después de la temporada' },
          out: 'Verónica respira aliviada. Iván guarda la hoja de cálculo. Yaneth seguirá cubriendo la recepción de noche, sola, sin seguro, en los meses de más trabajo.',
          pro: { ok: 'Te concentras en lo urgente.', risk: 'La contingencia crece cada mes, y los meses de más riesgo son justamente los de la temporada.' },
          kusi: ['preocupado', 'Enero está lejos para quien no tiene seguro.'] } },
    ],
    rules: [[LEY, 'Primacía de la realidad: si la relación laboral ya existía, su antigüedad corre desde que empezó, no desde que se firma.'], [BP, 'Una regularización se acompaña de un cálculo exacto y de un acuerdo de pago con cada persona.']],
    mirada: {
      ve: 'Regularizar cuesta, y la gerencia tiene razón en preocuparse. El trabajo de la generalista es poner el costo sobre la mesa junto con el riesgo de no hacerlo, y proponer una forma de pago que el hotel pueda sostener.',
      visual: { tipo: 'balanza', a: { t: 'Regularizar ahora', items: ['Pago de beneficios pendientes', 'Un mes caro'] }, b: { t: 'Postergar o maquillar', items: ['Antigüedad sin reconocer', 'Contingencia que crece', 'Tres personas sin seguro en temporada'] } },
    },
  },
  {
    id: 'c5', t: '13:30', ch: 'documento', who: null, titulo: 'El primer día de los nuevos', banner: 'assets/esc/reloj.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Almuerzas un caldo de gallina en el comedor del personal, de pie, con el celular en la mano. ${F.has('canales_locales') ? 'Tres egresados del instituto pueden empezar el jueves.' : 'Los primeros candidatos podrían empezar el jueves.'}</p><p>Para que el jueves no sea un caos, <mark class="clave">escribes el orden de lo que debe pasar con cada ingreso</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para cada ingreso de la temporada. Usa las flechas.', boton: 'Guardar el procedimiento',
    items: [
      { id: 'confirma', t: 'Confirmar con el jefe del área el puesto, el turno y el sueldo', por: 'Sin esto, el contrato sale con datos equivocados.' },
      { id: 'firma', t: 'Firmar el contrato por escrito, con la causa y la duración, antes del primer día', por: 'Nadie empieza sin contrato firmado.' },
      { id: 'alta', t: 'Registrar el alta en el T-Registro el mismo día de ingreso', por: 'Desde el primer día, con seguro.' },
      { id: 'induccion', t: 'Inducción: recorrido del hotel, uniforme, credencial y normas de seguridad', por: 'La cocina y la lavandería tienen riesgos desde la primera hora.' },
      { id: 'registro', t: 'Presentar el contrato ante la Autoridad de Trabajo para su registro', por: 'Los contratos modales se registran; anótalo en tu calendario.' },
      { id: 'boleta', t: 'Entregar la primera boleta de pago', por: 'El cierre del ciclo: el trabajador ve lo que se le pagó y por qué.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, tiempo: q === 'riesgosa' ? -3 : 2 },
        out: q === 'buena' ? 'Tu procedimiento cabe en media hoja. Lo pegas con cinta en la pared, al lado de un afiche de Machu Picchu descolorido.' : 'Tienes un procedimiento, aunque algún paso quedó en un orden que te hará correr el jueves.',
        pro: { ok: 'Un procedimiento simple evita que la prisa de la temporada se salte lo esencial.', risk: 'Si la firma o el alta quedan para después, alguien trabajará sin protección.', info: 'Con 18 ingresos en tres semanas, una lista de verificación por persona vale más que tu memoria.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Cada ingreso, paso a paso!' : 'El orden también protege.'],
      };
    },
    rules: [[LEY, 'El alta en el T-Registro se registra el día de ingreso.'], [BP, 'Ningún trabajador empieza sin contrato firmado y sin inducción de seguridad.']],
    mirada: {
      ve: 'En temporada alta todo el mundo tiene prisa por que «el nuevo entre ya». El procedimiento de ingreso es lo que permite ir rápido sin dejar a nadie desprotegido.',
      visual: { tipo: 'linea', titulo: 'Un ingreso de temporada', hitos: [['Miércoles', 'Confirmar puesto y firmar'], ['Jueves, 7:00', 'Alta e inducción'], ['Primera semana', 'Registrar el contrato'], ['Fin de mes', 'Primera boleta']] },
    },
  },
  {
    id: 'c6', t: '15:20', ch: 'llamada', who: null, titulo: 'Tres llamadas bajo la lluvia', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'cumplimiento', 'etica'],
    body: () => `<p>Empieza a llover fuerte; el granizo suena sobre la calamina del patio de servicio. Llamas a tres candidatos para ofrecerles el puesto.</p><p>Cada uno <mark class="clave">te hace una pregunta que no esperabas</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Luz Clarita Apaza · 21 años · egresada de Cocina · Urubamba', 'Contesta desde la combi', '«¿Me van a dar contrato? En mi otro trabajo me tuvieron un mes "a prueba" y la última semana nunca me la pagaron.»'],
      ['Rubén Ccori · 38 años · mozo · Ollantaytambo', 'Contesta con niños de fondo', '«Yo he trabajado tres temporadas en otro hotel. Si vengo este año y el que viene, ¿me vuelven a llamar o empiezo de cero?»'],
      ['Milagros Torres · 26 años · recepcionista · de Pucallpa, vive en Cusco', 'Contesta en inglés y luego se ríe', '«Puedo empezar el jueves. Pero ¿me pueden pagar por recibo? Así no me descuentan la AFP y me alcanza para el cuarto.»'],
    ],
    prompt: 'Escuchaste las tres respuestas. ¿Qué les ofreces?',
    choices: [
      { id: 'a', label: 'A los tres, contrato de temporada en planilla. A Luz Clarita, que la prueba es parte del contrato y pagada. A Rubén, la verdad sobre el derecho preferente. A Milagros, que en recepción no cabe el recibo y qué gana con la planilla.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 4, etica: 2 }, flags: ['milagros_planilla'], cartera: { vacantes: 'Tres ofertas: cocina, salón y recepción' },
          out: 'Luz Clarita dice «¡ya!» antes de que termines. Rubén se ríe: «Entonces vengo dos años seguidos». Milagros duda un rato: «Ya, pero explíqueme bien la boleta cuando llegue». Aceptan los tres.',
          pro: { ok: 'Respondes cada duda con la verdad y sin abrir excepciones que luego tendrías que cerrar.', risk: 'A Milagros el descuento le pesa. Explícale qué cubren la pensión y el seguro.', info: 'Muchas personas jóvenes piden recibo porque nadie les explicó para qué sirven los descuentos.' },
          kusi: ['celebra', '¡Tres sí y ninguna excepción!'] } },
      { id: 'b', label: 'A Luz Clarita y a Rubén, contrato. A Milagros, aceptarle el recibo: es ella quien lo pide y necesitas recepción ya.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3, tiempo: 2 }, flags: ['milagros_recibo'], cartera: { vacantes: 'Dos contratos y una recepcionista con recibo' },
          out: 'Milagros acepta feliz. Esta mañana sacaste a tres personas de los recibos por honorarios; esta tarde metiste a una nueva.',
          pro: { ok: 'Resuelves recepción rápido.', risk: 'Que la trabajadora lo pida no cambia la realidad: tendrá horario, uniforme y jefa. Es una relación laboral.' },
          kusi: ['indignado', '¡Lo mismo que vinimos a arreglar!'] } },
      { id: 'c', label: 'Ofrecer contrato a los tres sin entrar en detalles: si les explicas demasiado, se pueden asustar.',
        res: { q: 'aceptable', fx: { personas: 1, cumplimiento: 2 }, flags: ['milagros_planilla'], cartera: { vacantes: 'Tres ofertas sin explicar' },
          out: 'Aceptan los tres. Rubén se queda con su duda y Milagros, con la idea de que «le van a quitar plata». Dos dudas que volverán.',
          pro: { ok: 'Cierras las tres contrataciones.', risk: 'Las dudas que no respondes hoy vuelven como desconfianza el día de la primera boleta.' },
          kusi: ['pensando', 'Preguntaron por algo… y no les contestaste.'] } },
    ],
    rules: [[LEY, 'Quien es contratado dos temporadas consecutivas o tres alternadas tiene derecho a ser contratado en las siguientes (D.S. 003-97-TR, arts. 69 y 70).'], [LEY, 'Si hay horario, jefe y labor subordinada, es una relación laboral, aunque la persona prefiera el recibo.']],
    mirada: {
      ve: 'Las preguntas de los candidatos dicen mucho del mercado laboral en el Cusco: gente que trabajó «a prueba» sin cobrar, gente que encadena temporadas sin saber sus derechos, gente que prefiere el recibo para que le alcance. Contratar bien también es explicar.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le dirías a Milagros', txt: 'El recibo parece más plata hoy, pero no te da seguro si te enfermas, ni CTS, ni gratificación, ni vacaciones pagadas. En recepción vas a tener horario y jefa: eso es un trabajo en planilla.' },
    },
  },
  {
    id: 'c7', t: '18:20', ch: 'correo', who: 'veronica', titulo: 'El resumen del martes', banner: 'assets/foto/revisa.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>La lluvia paró y la plaza brilla bajo los faroles. ${F.has('milagros_recibo') ? 'Te queda una incomodidad por lo de Milagros.' : 'Tienes tres aceptaciones y una matriz impresa.'}</p><p>Verónica te pidió un resumen antes de las siete. <mark class="clave">Lo leerá en el celular, entre dos reuniones</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'La modalidad decidida, lo que pasa con los tres regularizados, las tres contrataciones y lo que necesitas de ella mañana.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { veronica: 1 }, responde: 'Verónica: los 18 ingresos tendrán contrato con la causa por escrito; el modelo ya está corregido (sueldo, prueba y beneficios). Yaneth, Edwin y Norma: Iván envía el cálculo el viernes. Tres aceptaciones para el jueves: cocina, salón y recepción. Necesito su firma en los contratos mañana a las 9.',
          out: 'Verónica responde a las 18:50: «Clarito. Mañana a las 9». Bajas a recepción a despedirte y Wendy te invita un mate de muña.', kusi: ['feliz', 'Corto, claro y con un pedido. ¡Así!'] } },
      { id: 'b', label: 'Adjuntarle la matriz y el modelo para que los revise ella.',
        res: { q: 'aceptable', fx: { confianza: 0, tiempo: -1 }, responde: 'Verónica: le adjunto la matriz de contratos y el nuevo modelo para su revisión.',
          out: 'Verónica responde a las 22:10: «No puedo abrir Excel en el celular. Mañana me cuentas». La firma de los contratos queda en el aire.', kusi: ['pensando', 'Le mandaste trabajo, no un resumen.'] } },
    ],
    mirada: { ve: 'Una gerenta con poco tiempo necesita tres cosas: qué se decidió, qué riesgo queda y qué necesitas de ella. Lo demás, si lo pide, se lo mandas después.' },
  },
];
