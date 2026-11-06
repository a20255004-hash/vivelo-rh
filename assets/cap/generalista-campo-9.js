// Generalista de RR.HH. en operación minera · Capítulo 9 · «La mesa de diálogo» · Semana 2, jueves.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 26772 (modificada por la Ley 27270): las ofertas de empleo no pueden contener requisitos que alteren la igualdad
//   de oportunidades o de trato. https://faolex.fao.org/docs/pdf/per201903.pdf
// - D.S. 024-2016-EM, art. 118: exámenes médicos ocupacionales a cargo del titular minero.
//   https://sinia.minam.gob.pe/normas/aprueban-reglamento-seguridad-salud-ocupacional-mineria
// - Ley 29245 (tercerización), ya citada.
// La mesa de diálogo es un espacio voluntario entre empresa y comunidad; no se presenta como un procedimiento legal.

export const CAP = {
  n: 9, titulo: 'La mesa de diálogo', dia: 'Semana 2, jueves', foto: 'assets/3d/scenes/municipalidad.webp',
  lugar: 'Local comunal · Apurímac, 3,850 m s. n. m.',
  inicio: '07:00', fin: '21:00', cierreHora: '20:45',
  apertura: 'Tu día 11 de 14. A las 7:30 aterriza el helicóptero con la doctora Garro. A las 8:40 cruzas el km 42 a pie, con tu carpeta azul, entre las piedras y la fogata apagada. El local comunal huele a eucalipto y a pan wawa.', boton: 'Entrar al local comunal',
  kusi: 'Hoy no se gana ni se pierde: se construye. Escucha, cuida las palabras y que todo quede por escrito.',
  lead: 'Preparaste a Lima con lo que viste en campo, propusiste una regla justa para contar el empleo local, limpiaste el acta de cláusulas que discriminaban, sostuviste la seguridad frente a los jóvenes y dejaste un acta con fechas.',
  reflexion: '¿Qué hace que un acuerdo con una comunidad se cumpla?',
  siguiente: { n: 10, titulo: 'Dos semanas arriba', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'mesa', p: 'Mesa de diálogo', j: 'Dra. Garro · Doña Juana', d: 0, e: 'Hoy a las 9' },
  { id: 'bloqueo', p: 'Bloqueo de la carretera', j: 'Comunidad', d: 2, e: 'Tercer día' },
  { id: 'comunidad', p: 'Empleo local con la comunidad', j: 'Doña Juana · Comunidad', d: 0, e: 'Conteo en discusión' },
  { id: 'acta', p: 'Acta de la mesa de diálogo', j: 'RR.HH. · Relaciones Comunitarias', d: 0, e: 'Por redactar' },
];

export const FUTURO = {
  conteo_acordado: ['La mesa acordó contar el empleo local con dos cifras: propios y contratistas.', 'El comité de monitoreo revisará el primer reporte en la semana 3.'],
  conteo_impuesto: ['Lima impuso contar solo a los propios.', 'La comunidad firmó, pero con desconfianza.'],
  acta_limpia: ['Sacaste del acta cláusulas que discriminaban o castigaban.', 'Nadie podrá impugnar el acta por eso.'],
  jovenes_ruta: ['Sostuviste la reevaluación médica para los jóvenes, con apoyo de la minera.', 'Brayan se reevaluará el lunes de la semana 3.'],
  jovenes_sin_examen: ['Se aceptó contratar jóvenes observados sin reevaluación.', 'Seguridad lo objetará en la semana 3.'],
  acta_mesa: ['Redactaste el acta con compromisos, responsables y fechas.', 'El comité de monitoreo se instala el lunes.'],
  carretera_abierta: ['La carretera se abrió a las 7 de la noche.', 'Mañana baja la guardia B.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de Movitierra', who: 'contratista' },
  garro: { n: 'Dra. Inés Garro', sub: 'Gerente de Relaciones Comunitarias · Lima', c: '#4A5A8A' },
  familias: { n: 'Familias Minera Puquio', sub: 'Grupo informativo · 612 participantes', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'garro', t: '07:45', de: 'Dra. Garro', txt: 'Ya aterricé. Antes de entrar quiero diez minutos contigo, a solas.' },
  { chat: 'percy', t: '08:10', de: 'Percy', txt: 'Yo me quedo con el campamento. Tú estás mejor allá. Confío en ti 💪' },
  { chat: 'contratista', t: '12:30', de: 'Ing. Salas', txt: 'Ingeniera, si en la licitación piden 30 % de local, Movitierra ya cumple: 21 de 46 son comuneros. Que lo sepan.', si: 'salas_aliado' },
  { chat: 'yuri', t: '19:10', de: 'Yuri', txt: '¡Están sacando las piedras, ingeniera! Mi mamá dice que el lunes la invita a almorzar cuy.', si: 'carretera_abierta' },
];

export const CORREOS = [
  { t: '07:00', de: 'Gerencia General · Lima', para: 'Dra. Inés Garro; Percy Huillca; Generalista de RR.HH. · Campo', asunto: 'Mandato para la mesa', html: '<p>Autorizado: incluir el empleo local como criterio en la próxima licitación de contratistas; ruta de formación para jóvenes; comité de monitoreo. No autorizado: puestos sin evaluación, compromisos de no despido indefinidos.</p>' },
];

export const QUIZ = [
  { q: 'Un acta con una comunidad debe tener…', ops: ['Solo buenas intenciones', 'Compromisos de ambas partes, responsables, fechas y cómo se hará seguimiento', 'La promesa de no bloquear nunca más', 'Solo la firma de Lima'], ok: 1, por: 'Sin responsables, fechas ni seguimiento, el acta se convierte en el próximo reclamo.' },
  { q: 'Una cláusula dice «se dará preferencia a varones de la comunidad». ¿Qué haces?', ops: ['La dejas: así es la mina', 'La sacas: es un requisito que altera la igualdad de oportunidades', 'La cambias por «jóvenes varones»', 'La pones en letra pequeña'], ok: 1, por: 'La Ley 26772 prohíbe requisitos discriminatorios en el acceso al empleo.' },
  { q: 'Los jóvenes piden entrar a trabajar sin reevaluación médica. ¿Qué respondes?', ops: ['Que sí, para abrir la carretera', 'Que la evaluación médica no se negocia, pero la minera puede apoyar para que la pasen', 'Que no hay trabajo para ellos', 'Que firmen una carta de responsabilidad'], ok: 1, por: 'El examen médico ocupacional es una medida de seguridad a cargo del titular minero (D.S. 024-2016-EM, art. 118).' },
  { q: 'En la mesa, ¿cuándo se pide la apertura de la carretera?', ops: ['Al inicio', 'Al final, junto con los compromisos', 'Nunca', 'Por radio'], ok: 1, por: 'Pedirla primero suena a que solo importa la operación.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '07:50', ch: 'presencial', who: null, titulo: 'Diez minutos con Garro', banner: 'assets/3d/scenes/brujula.webp', lugar: 'Helipuerto del campamento', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>La doctora Garro baja del helicóptero con una casaca roja de la empresa que se quita apenas te ve. «En la comunidad, esta casaca es un uniforme de guerra.»</p><p>${F.has('promesa_sin_respaldo') ? '«Ya sé lo del papel que firmaste. Lo vamos a arreglar. Pero ahora dime lo demás.»' : '«Dime lo que yo no sé desde Lima.»'} <mark class="clave">Tienes diez minutos</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos cosas que le cuentas a Garro.',
    opts: [
      { id: 'cifras', label: 'Las dos cifras del 30 %: 22 % solo propios, 34 % con contratistas.', info: 'Garro silba bajito. «O sea que con contratistas cumplimos. El problema es que nunca lo explicamos así.»' },
      { id: 'jovenes', label: 'Que los jóvenes, como Brayan, son los que sostienen el bloqueo.', info: '«Entonces la formación no es un adorno: es el centro del acuerdo.» Lo anota en su libreta con una estrella.' },
      { id: 'historia', label: 'Lo que pasó estas dos semanas: el comedor, Movitierra, el examen médico, el rumor.', info: 'Garro te escucha sin interrumpir. «Esto no empezó el martes. Empezó con una cena fría.»' },
      { id: 'valdivia', label: 'Que Valdivia quería pedir a la policía.', info: 'Garro asiente. «Lo sé. Eso me lo dejas a mí.» No aporta mucho a la mesa, pero ya sabe con quién lidiar.' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('valdivia') ? 1 : 3, confianza: 3 },
      out: 'Garro se guarda la libreta. «Vas a estar a mi lado. Si me equivoco con un nombre o con un dato, me tocas el brazo.»',
      kusi: ['curioso', 'Lima ahora sabe lo que viste.'],
    }),
    rules: [[BP, 'Antes de una mesa, cuenta a quien negocia lo que solo se ve desde el campo.']],
    mirada: {
      ve: 'Garro sabe negociar; tú sabes lo que pasó. En una mesa de diálogo, la generalista de campo es quien conecta la estrategia de Lima con la historia real de la unidad.',
      visual: { tipo: 'linea', titulo: 'Lo que llega a la mesa', hitos: [['Martes 1', 'La cena fría'], ['Miércoles 1', 'Movitierra paga tarde'], ['Viernes 1', 'Examen médico'], ['Lunes 2', 'El rumor'], ['Martes 2', 'El bloqueo']] },
    },
  },
  {
    id: 'j2', t: '09:40', ch: 'presencial', who: 'presidenta', titulo: '¿Cómo se cuenta el 30 %?', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Local comunal', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Doce dirigentes de un lado, cuatro de la empresa del otro, y en medio una mesa de madera con pan wawa y una tetera. Doña Juana abre en quechua. ${F.has('conteo_transparente') ? 'Luego dice en castellano: «La señorita ya nos mostró las dos cifras. Eso queremos en papel».' : 'Luego, en castellano: «Ustedes cuentan como les conviene».'}</p><p>Garro te mira: <mark class="clave">«Propón tú cómo contarlo»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer reportar siempre dos cifras, propios y propios más contratistas, con un comité mixto que las revise cada mes, y pedir a las contratistas su propio reporte.',
        res: { q: 'buena', fx: { confianza: 5, cumplimiento: 3, calidad: 3 }, rel: { presidenta: 1 }, flags: ['conteo_acordado'], cartera: { comunidad: 'Dos cifras y comité mixto' },
          out: 'Los dirigentes hablan entre ellos un largo rato. Brayan pregunta: «¿Y si una contratista miente?». Respondes: «Por eso el comité ve las planillas». Doña Juana asiente.',
          pro: { ok: 'Una regla transparente desarma la pelea por la cifra.', info: 'Lo que se cuenta junto se discute menos.' },
          kusi: ['celebra', '¡Una regla para todos!'] } },
      { id: 'b', label: 'Proponer que solo cuenten los propios, como dice la lectura de la empresa, pero subir la meta al 25 % en un año.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -3 }, rel: { presidenta: -1 }, flags: ['conteo_impuesto'], cartera: { comunidad: 'Solo propios, meta 25 %' },
          out: 'Doña Juana te mira con decepción. «Usted nos mostró que con contratistas somos más. ¿Ahora no cuentan?» La mesa se enfría veinte minutos.',
          pro: { ok: 'Propones una meta concreta.', risk: 'Esconder una cifra que ya conocen se vive como trampa.' },
          kusi: ['pensando', 'Ya conocían el 34 %…'] } },
    ],
    rules: [[POL, 'Lima autorizó incluir el empleo local como criterio en la próxima licitación de contratistas.'], [BP, 'Lo que se cuenta junto se discute menos.']],
    mirada: {
      ve: 'Las dos cifras eran verdad desde el primer día. El conflicto no era de números: era de confianza. Contar juntos, con reglas que ambos entienden, convierte a la comunidad en socia del dato en lugar de su auditora enojada.',
      visual: { tipo: 'rango', titulo: 'Empleo local con regla clara', min: 0, max: 50, banda: [30, 50], marcas: [['Propios', 22], ['Propios y contratistas', 34], ['Compromiso', 30]] },
    },
  },
  {
    id: 'j3', t: '11:30', ch: 'documento', who: null, titulo: 'El borrador del acta', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Local comunal · cuarto de al lado', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>En un cuarto contiguo, con una laptop prestada y un tomacorriente flojo, Garro y el asesor de la comunidad escriben el borrador del acta. Te lo pasan para revisar antes de leerlo en la mesa.</p><p>Lo lees en voz baja, <mark class="clave">cláusula por cláusula</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede quedar así en el acta.',
    doc: { t: 'Borrador de acta · Mesa de diálogo', sub: 'Minera Puquio y Comunidad Campesina · Apurímac' },
    lines: [
      { id: 'varones', t: '«En la licitación se dará preferencia a varones de la comunidad.»', bad: LEY, why: 'Un requisito de sexo en el acceso al empleo altera la igualdad de oportunidades (Ley 26772).' },
      { id: 'lic', t: '«La empresa incluirá el empleo local como criterio de evaluación en la próxima licitación de contratistas.»' },
      { id: 'bloqueadores', t: '«No se contratará a quienes participaron en el bloqueo.»', bad: BP, why: 'Una represalia así rompe el acuerdo antes de firmarlo y deja fuera justo a los jóvenes que se quiere formar.' },
      { id: 'nunca', t: '«La comunidad se compromete a no realizar ninguna medida de protesta en el futuro.»', bad: BP, why: 'Un compromiso imposible de cumplir. Mejor: acudir primero al comité de monitoreo.' },
      { id: 'medico', t: '«Todo ingreso cumple la evaluación médica ocupacional; la empresa apoya la corrección de observaciones.»' },
      { id: 'fecha', t: '«Las partes se reunirán cuando sea necesario.»', bad: BP, why: 'Sin fecha fija, el seguimiento no existe.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa',
      flags: missLey ? [] : ['acta_limpia'],
      out: missLey ? 'El borrador pasa con «preferencia a varones». Rosa Huamán, que entra a la mesa con café, lo lee por encima del hombro de un dirigente y se queda callada.' : `Le marcas ${hitsLey + (hitsBp || 0)} cláusulas a Garro. El asesor de la comunidad defiende lo de «varones»: «Es trabajo pesado». Le recuerdas a Rosa, que pasó la prueba práctica el viernes. Se borra.`,
      cartera: { acta: missLey ? 'Borrador con cláusulas riesgosas' : 'Borrador limpio' },
      pro: { ok: 'Un acta con cláusulas discriminatorias o imposibles se cae sola.', info: 'Cambia «no protestar nunca» por «acudir primero al comité».' },
      kusi: missLey ? ['preocupado', 'Rosa también es de la comunidad…'] : ['celebra', '¡Acta sin trampas!'],
    }),
    rules: [[LEY, 'Las ofertas de empleo no pueden tener requisitos que alteren la igualdad de oportunidades (Ley 26772).']],
    mirada: {
      ve: 'Las dos partes metieron en el borrador lo que les daba miedo: la empresa, nuevas protestas; algunos dirigentes, la competencia de las mujeres. Revisar el acta con calma es cuidar que el acuerdo no nazca con una herida.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al acta', pares: [['Preferencia a varones', 'Empleo local sin distinción de sexo'], ['No contratar a quienes bloquearon', 'Formación para los jóvenes'], ['No protestar nunca', 'Acudir primero al comité'], ['Cuando sea necesario', 'Cada primer lunes del mes']] },
      normas: [{ ley: 'Ley 26772 (modificada por la Ley 27270)', dice: 'La oferta de empleo y el acceso a formación no pueden contener requisitos que anulen o alteren la igualdad de oportunidades o de trato.', practica: 'Un acta con la comunidad también puede discriminar, aunque nadie lo quiera.' }],
    },
  },
  {
    id: 'j4', t: '13:20', ch: 'presencial', who: null, titulo: 'Lo que pide Brayan', banner: 'assets/foto2/tension.webp', lugar: 'Local comunal', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Después de una sopa de chuño, Brayan se pone de pie. ${F.has('ruta_todavia') ? 'Tiene en la mano la hoja de la ruta del «todavía no».' : 'No tiene ningún papel en la mano.'}</p><p>«Los seis que salimos observados queremos entrar ya. Lo de los lentes es una tontería. <mark class="clave">Que nos contraten sin volver al examen</mark> y abrimos la carretera hoy.» Varios jóvenes aplauden.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicar que el examen médico no se negocia porque protege su vida, y proponer que la minera pague lentes y tratamiento, con reevaluación el lunes y prioridad de ingreso si pasan.',
        res: { q: 'buena', fx: { etica: 5, personas: 4, confianza: 2 }, rel: { presidenta: 1 }, flags: ['jovenes_ruta'], cartera: { comunidad: 'Reevaluación el lunes con apoyo de la minera' },
          out: 'Brayan se queda en silencio. Doña Juana le habla en quechua, despacio. Él se sienta. «El lunes, entonces. Pero con lentes buenos, no de feria.» La mesa se ríe por primera vez.',
          pro: { ok: 'Sostienes la seguridad y conviertes el «no» en un camino con fecha.', info: 'Lo que no se negocia se explica; lo que se puede apoyar, se ofrece.' },
          kusi: ['celebra', '¡Lentes buenos y examen el lunes!'] } },
      { id: 'b', label: 'Aceptar: son seis personas, lo de los lentes es menor y la carretera se abre hoy.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -5, confianza: 2 }, flags: ['jovenes_sin_examen'], cartera: { comunidad: 'Seis ingresos sin reevaluación' },
          out: 'Los jóvenes celebran. Garro te mira de reojo y anota algo. El doctor Ayala, cuando se entere, te escribirá un correo con copia a Seguridad.',
          pro: { ok: 'La carretera se acerca a abrirse.', risk: 'Un operador que no ve bien en una mina es un accidente esperando ocurrir, para él y para otros.' },
          kusi: ['preocupado', 'El examen protege su vida…'] } },
    ],
    rules: [[LEY, 'Los exámenes médicos ocupacionales en minería están a cargo del titular minero (D.S. 024-2016-EM, art. 118).'], [BP, 'Lo que protege la vida no se negocia; se explica y se acompaña.']],
    mirada: {
      ve: 'Brayan no pide un privilegio: pide no quedarse fuera otra vez. Decirle que no al atajo sin cerrarle la puerta es lo que distingue a una empresa que cuida de una que solo filtra.',
      visual: { tipo: 'balanza', a: { t: 'Entrar sin examen', items: ['Carretera abierta hoy', 'Riesgo en mina', 'Seguridad lo objeta'] }, b: { t: 'Lentes y reevaluación', items: ['Examen el lunes', 'Apoyo de la minera', 'Ingreso seguro'] } },
    },
  },
  {
    id: 'j5', t: '15:30', ch: 'documento', who: null, titulo: 'El acta final', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Local comunal', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>Garro te pasa la laptop. «Tú lo redactas. Tú sabes cómo hablan aquí.» Afuera empieza a granizar sobre el techo de calamina.</p><p>Tu sexto entregable: <mark class="clave">el acta de la mesa de diálogo</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del acta.', boton: 'Leer el acta en voz alta',
    bloques: [
      { id: 'emp', t: 'Compromisos de la empresa', n: 2, ops: [
        { id: 'e1', t: 'Empleo local como criterio en la licitación de contratistas, con reporte de dos cifras cada mes.', ok: true },
        { id: 'e2', t: 'Ruta de formación y apoyo para corregir observaciones médicas, con reevaluación el lunes.', ok: true },
        { id: 'e3', t: 'Ningún trabajador de la comunidad será despedido nunca.', ok: false, por: 'Lima no lo autorizó y nadie lo puede garantizar.' },
      ] },
      { id: 'com', t: 'Compromisos de la comunidad', n: 2, ops: [
        { id: 'c1', t: 'Liberar la carretera hoy a las 19:00.', ok: true },
        { id: 'c2', t: 'Acudir primero al comité de monitoreo ante cualquier reclamo.', ok: true },
        { id: 'c3', t: 'Pagar los costos del bloqueo.', ok: false, por: 'Una exigencia que rompe la mesa.' },
      ] },
      { id: 'seg', t: 'Seguimiento', n: 2, ops: [
        { id: 's1', t: 'Comité de monitoreo mixto que se instala el lunes y se reúne cada primer lunes del mes.', ok: true },
        { id: 's2', t: 'Acta leída en quechua y castellano, con copia para cada dirigente.', ok: true, por: 'Que todos entiendan lo que firman.' },
        { id: 's3', t: 'El acta queda en Lima para su custodia.', ok: false, por: 'La comunidad debe tener su copia.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 5 : 0, cumplimiento: 2 }, rel: { presidenta: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['acta_mesa', 'carretera_abierta'], cartera: { acta: q === 'riesgosa' ? 'Acta débil' : 'Acta firmada', bloqueo: q === 'riesgosa' ? 'Bloqueo hasta mañana' : 'Carretera libre a las 19:00' },
        out: q === 'buena' ? 'Un dirigente lee el acta en quechua; tú, en castellano. Firman los doce, Garro y tú como testigo. Doña Juana te da la mano con las dos manos.' : 'El acta se firma, pero con cláusulas que alguien va a reclamar. La carretera se abrirá mañana temprano.',
        pro: { ok: 'Compromisos de ambas partes, con fecha y seguimiento.', risk: 'Las promesas imposibles y las exigencias de castigo rompen el acuerdo después.', info: 'El acta se lee en voz alta en los dos idiomas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Qué bacán! ¡Acta firmada!' : 'Hay cláusulas que van a doler.'],
      };
    },
    rules: [[POL, 'No autorizado por Lima: compromisos de no despido indefinidos ni puestos sin evaluación.'], [BP, 'Toda acta lleva compromisos de ambas partes, responsables, fechas y seguimiento.']],
    mirada: {
      ve: 'El acta del comedor del primer martes y el acta de hoy son el mismo aprendizaje en grande: lo que no tiene fecha, responsable y seguimiento, no existe. Lo que sí lo tiene, construye confianza mes a mes.',
      visual: { tipo: 'flujo', titulo: 'El acta de la mesa', pasos: ['Compromisos de la empresa', 'Compromisos de la comunidad', 'Comité de monitoreo', 'Lectura en dos idiomas', 'Carretera libre'] },
    },
  },
  {
    id: 'j6', t: '17:30', ch: 'whatsapp', who: null, titulo: 'La noticia para las familias', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Local comunal', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('carretera_abierta') ? 'A las 19:00 se abre la carretera.' : 'La carretera se abrirá mañana temprano.'} En el grupo de familias hay 200 mensajes desde el mediodía.</p><p>Escribes el último mensaje de crisis. <mark class="clave">Claro, sin fiesta antes de tiempo</mark>.</p>`,
    type: 'compose', enviaA: 'familias', para: 'Para: Familias Minera Puquio · 612 participantes', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'nov', t: 'La noticia', ops: [
        { id: 'n1', t: 'Hubo acuerdo con la comunidad y la carretera se libera. Todas las personas de la unidad están bien.', ok: true, por: 'Lo esencial, primero.' },
        { id: 'n2', t: '¡Ganamos! La comunidad cedió 🎉', ok: false, por: 'Nadie ganó ni perdió; y el grupo lo leen comuneros.' },
      ] },
      { id: 'baj', t: 'Cuándo bajan', ops: [
        { id: 'b1', t: 'La guardia B baja mañana viernes en los buses de las 6 y de las 8. Cada trabajador confirmará su bus.', ok: true, por: 'Fecha, hora y cómo saberlo.' },
        { id: 'b2', t: 'Ya van bajando poco a poco.', ok: null, por: 'Sin fecha ni hora.' },
      ] },
      { id: 'gra', t: 'El cierre', ops: [
        { id: 'g1', t: 'Gracias por la paciencia estos días. Este grupo seguirá abierto para cualquier emergencia.', ok: true },
        { id: 'g2', t: 'Este grupo se cerrará hoy.', ok: false, por: 'Mejor dejar el canal para la próxima.' },
      ] },
    ],
    res: sel => {
      const mal = sel.nov === 'n2' || sel.gra === 'g2', buenas = ['n1', 'b1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -3 : 1, confianza: q === 'buena' ? 3 : mal ? -3 : 0 }, rel: { presidenta: sel.nov === 'n2' ? -1 : 0 },
        out: q === 'buena' ? 'El grupo se llena de corazones, fotos de niños y un «¡Gracias, señorita!» de la señora Marleny. Alguien manda un audio de una banda tocando en una fiesta.' : mal ? 'Un sobrino de Doña Juana, que está en el grupo, hace captura de «la comunidad cedió». A la media hora la tiene medio pueblo.' : 'Las familias celebran, pero preguntan a qué hora es el bus.',
        pro: { ok: 'Una buena noticia también se comunica con cuidado.', risk: 'Celebrar como victoria en un grupo donde está la comunidad puede reabrir el conflicto.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Qué divino! A casa mañana.' : 'Cuidado con las palabras.'],
      };
    },
    rules: [[BP, 'Una buena noticia en un conflicto se comunica sin ganadores ni perdedores.']],
    mirada: {
      ve: 'El mensaje de la buena noticia también tiene riesgos: en un grupo de 612 personas siempre hay alguien de la comunidad. Comunicar sin triunfalismo es cuidar el acuerdo que acaba de nacer.',
      visual: { tipo: 'mensaje', titulo: 'La última noticia de la crisis', txt: 'Hubo acuerdo con la comunidad y la carretera se libera. Todas las personas están bien. La guardia B baja mañana viernes en los buses de las 6 y de las 8. Gracias por la paciencia.' },
    },
  },
  {
    id: 'j7', t: '19:15', ch: 'presencial', who: 'yuri', titulo: 'Las piedras', banner: 'assets/esc/camino.webp', lugar: 'Carretera de acceso · km 42', show: ['confianza', 'personas'],
    body: (n, F) => `<p>${F.has('carretera_abierta') ? 'Jóvenes y operadores sacan juntos las piedras de la carretera, con linternas.' : 'Todavía hay piedras. Mañana a las 5 se liberará.'} Yuri, con casco y chompa, carga un tronco con Brayan.</p><p>Se acerca, sudando a pesar del frío. «Ingeniera, <mark class="clave">¿y ahora qué viene?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Contarle lo que viene: el lunes se instala el comité, Brayan se reevalúa y tú tendrás que cumplir cada fecha del acta.',
        res: { q: 'buena', fx: { confianza: 3, personas: 2 }, rel: { yuri: 1 },
          out: 'Yuri asiente. «Entonces ahora empieza lo difícil.» Se ríe. Brayan, desde atrás, grita: «¡El lunes con lentes!».',
          pro: { ok: 'Un acuerdo se gana en la mesa y se sostiene en el calendario.', info: 'Anota todas las fechas del acta en tu agenda esta misma noche.' },
          kusi: ['animo', 'Ahora toca cumplir.'] } },
      { id: 'b', label: 'Decirle que ya pasó lo peor y que ahora toca descansar.',
        res: { q: 'aceptable', fx: { confianza: 1 },
          out: 'Yuri sonríe, pero no muy convencido. «Ojalá, ingeniera. Aquí lo peor siempre vuelve si nadie cumple.»',
          pro: { ok: 'Mereces descansar.', risk: 'El trabajo que viene después del acta es el más importante.' },
          kusi: ['pensando', 'Lo peor vuelve si nadie cumple.'] } },
    ],
    mirada: { ve: 'Abrir la carretera es el final de la crisis, no el final del conflicto. Lo que hagas en las próximas semanas, cumpliendo cada fecha del acta, decidirá si el próximo reclamo llega al comité o vuelve al km 42.' },
  },
];
