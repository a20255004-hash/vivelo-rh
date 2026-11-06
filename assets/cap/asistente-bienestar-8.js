// Asistente de Bienestar Social · Capítulo 8 · «El retorno» · Semana 2, miércoles.
// Hilo: Don Héctor vuelve después de su descanso médico, pero no puede hacer el mismo trabajo en molienda.
// Normas citadas:
// - Ley 29783, de Seguridad y Salud en el Trabajo, art. 76 (modificado por Ley 30222): en caso de accidente de
//   trabajo o enfermedad ocupacional, el trabajador tiene derecho a ser transferido a otro puesto de menor riesgo,
//   sin menoscabo de sus derechos remunerativos y de categoría.
//   https://nagoconsultores.com/pdf/Ley30222.pdf
//   https://lpderecho.pe/reubicacion-trabajador-accidentado-enfermo-reduccion-sueldo-categoria-informe-57-2019-mtpe/
// - SUNAFIL, Res. 11-2024-SUNAFIL/TFL-Primera Sala: la modificación de funciones por el art. 76 no puede implicar
//   una reducción unilateral de la remuneración.
//   https://blog.prcp.com.pe/wp-content/uploads/2024/02/La-modificacion-de-funciones-en-virtud-del-articulo-76-de-la-Ley-29783-no-puede-implicar-una-reduccion-unilateral-de-la-remuneracion.pdf
// - Ley 29733: los datos de salud son sensibles; al jefe se le comunican restricciones, no diagnósticos.

export const CAP = {
  n: 8, titulo: 'El retorno', dia: 'Semana 2, miércoles', foto: 'assets/foto/taller.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '07:30', fin: '18:45', cierreHora: '18:30',
  apertura: 'Miércoles. Don Héctor llega a su evaluación con camisa planchada y los informes en una mica. Hoy se decide en qué trabajo vuelve.', boton: 'Ir a Salud Ocupacional',
  kusi: 'Volver no siempre es volver al mismo sitio. ¡Hoy buscamos el lugar donde pueda estar bien!',
  lead: 'Revisaste la propuesta de retorno, buscaste con el médico un puesto que aproveche lo que Don Héctor sabe, cuidaste su sueldo y su orgullo, y dejaste todo por escrito.',
  reflexion: '¿Qué crees que sintió Don Héctor al cruzar la puerta de molienda sin entrar?',
  siguiente: { n: 9, titulo: 'El lactario abre', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'hector', p: 'Retorno de Don Héctor', j: 'Médico ocupacional · Fábrica', d: 0, e: 'Evaluación hoy' },
  { id: 'puesto', p: 'Puesto compatible', j: 'Ing. Sampén · Fábrica', d: 0, e: 'Por definir' },
  { id: 'sueldo', p: 'Remuneración en el nuevo puesto', j: 'Planillas · RR.HH.', d: 0, e: 'En duda' },
  { id: 'queja', p: 'Caso de Milagros', j: 'Comité de intervención', d: 0, e: 'En investigación' },
  { id: 'lactario', p: 'Lactario', j: 'Logística', d: 0, e: 'Abre mañana' },
];

export const FUTURO = {
  retorno_adecuado: ['Don Héctor vuelve con restricciones claras y un puesto compatible.', 'Lo verás en su primer día completo.'],
  retorno_riesgoso: ['Don Héctor vuelve a molienda firmando que asume el riesgo.', 'Su rodilla no aguantará mucho.'],
  puesto_balanza: ['Don Héctor trabajará en el control de caña de la balanza.', 'Conoce cada camión y cada cañero.'],
  puesto_inductor: ['Don Héctor enseñará a los nuevos operarios de molienda.', 'Veintidós años de oficio, ahora para otros.'],
  origen_evaluado: ['Pediste que se evalúe si la lesión de Don Héctor tiene origen ocupacional.', 'La respuesta llegará la próxima semana.'],
  acuerdo_escrito: ['El acuerdo de reincorporación está por escrito: funciones, restricciones, sueldo y reevaluación.', 'Nadie podrá cambiarlo de palabra.'],
  sueldo_reducido: ['Don Héctor vuelve con un sueldo menor en el nuevo puesto.', 'Planillas lo notará en la próxima boleta.'],
  gladys_atendida: ['Atendiste a la esposa del supervisor denunciado sin hablar del caso.', 'Ella sabe adónde pedir apoyo.'],
  gladys_expuesta: ['Le contaste a la esposa del supervisor detalles del caso.', 'El comité se enterará.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  wilmer: { n: 'Wilmer Sandoval', sub: 'Analista de Planillas', c: '#5B6C8F' },
  rosa: { n: 'Rosa Ñiquén', sub: 'Esposa de Don Héctor', c: '#B5651D' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Operaria de envasado · turno noche', c: '#9B4F96' },
};

export const WSP = [
  { chat: 'grupo', t: '07:20', de: 'Nelly', txt: 'Hoy te toca Don Héctor solita: yo estoy con la Dra. Vera en las entrevistas del comité. Confío en ti 💛' },
  { chat: 'rosa', t: '07:35', de: 'Rosa', txt: 'Señorita Héctor no ha comido nada de los nervios. Cuídemelo 🙏' },
  { chat: 'hector', t: '07:40', de: 'Don Héctor', txt: 'Ya llegué señorita. Traje todo.', si: 'hector_preparado' },
  { chat: 'augusto', t: '11:10', de: 'Augusto', txt: 'Ya coordiné con Bances. Que el comité termine rápido, eso sí.', si: 'gerencia_informada' },
  { chat: 'yesenia', t: '16:40', de: 'Yesenia', txt: 'Señorita ¿es verdad que mañana abre el lactario? ¿Y de noche quién tiene la llave?' },
  { chat: 'maribel', t: '17:15', de: 'Maribel', txt: 'Ya pusieron la cortina y el seguro 😍 Mañana a las 7 cortamos la cinta (sin globos, prometido).', si: 'lactario_propuesta' },
];

export const CORREOS = [
  { t: '07:30', de: 'Dr. Martín Salazar · Salud Ocupacional', para: 'Bienestar Social; Ing. Julio Sampén (Jefe de Fábrica)', asunto: 'Evaluación de retorno · Sr. H. Llontop (reservado)', html: '<p>Evaluación a las 9:00. Bienestar, por favor traer el informe social. Ing. Sampén, por favor traer la descripción de exigencias físicas del puesto de molienda y de dos o tres puestos alternativos.</p><p>Al jefe se le comunicarán las restricciones; el diagnóstico queda en la historia clínica ocupacional.</p>' },
];

export const QUIZ = [
  { q: 'Si una lesión es de origen ocupacional, el art. 76 de la Ley 29783 da derecho a…', ops: ['Ser despedido con indemnización', 'Ser transferido a un puesto de menor riesgo sin perder remuneración ni categoría', 'Volver al mismo puesto sin restricciones', 'Una licencia sin goce'], ok: 1, por: 'El art. 76 (modificado por la Ley 30222) garantiza la transferencia sin menoscabo de derechos remunerativos ni de categoría.' },
  { q: '¿Qué se le comunica al jefe del nuevo puesto?', ops: ['El diagnóstico completo', 'Las restricciones y lo que el trabajador puede y no puede hacer', 'Nada', 'La historia clínica'], ok: 1, por: 'El diagnóstico es dato sensible (Ley 29733); al jefe le basta conocer las restricciones.' },
  { q: 'Don Héctor quiere firmar que asume el riesgo para volver a molienda. ¿Qué haces?', ops: ['Lo dejas: es su decisión', 'Le explicas que una firma no quita el riesgo ni la responsabilidad de la empresa, y buscas una alternativa', 'Llamas a su supervisor', 'Le das vacaciones'], ok: 1, por: 'La seguridad en el trabajo no se renuncia con una firma: las restricciones médicas se respetan.' },
  { q: 'Un buen plan de reincorporación termina con…', ops: ['La firma del acuerdo', 'Un seguimiento y una reevaluación médica', 'Una fiesta', 'El alta de EsSalud'], ok: 1, por: 'La reincorporación se acompaña: a las pocas semanas se revisa cómo va y se reevalúa.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '07:45', ch: 'documento', who: null, titulo: 'La propuesta de Fábrica', banner: 'assets/3d/scenes/hospital-sq.webp', lugar: 'Sala de espera de Salud Ocupacional', show: ['cumplimiento', 'etica', 'personas'],
    body: (n, F) => `<p>Mientras Don Héctor espera en la banca, mirando sus zapatos, el Ing. Julio Sampén, jefe de Fábrica, te pasa su propuesta impresa: «Para adelantar». ${F.has('informe_juicios') ? 'Lleva grapado tu informe social, con la frase de los «trabajos ocultos» subrayada.' : F.has('informe_respetuoso') ? 'El Dr. Salazar ya leyó tu informe social y lo tiene marcado con un clip.' : ''}</p><p>La lees antes de entrar. <mark class="clave">Hay cosas que no deberían llegar así a la evaluación</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal en la propuesta de retorno.',
    doc: { t: 'Propuesta de retorno · Sr. Llontop', sub: 'Jefatura de Fábrica · borrador' },
    lines: [
      { id: 'restr', t: 'Restricciones a confirmar por el médico: no cargar peso, no subir escaleras de forma repetida, alternar de pie y sentado.' },
      { id: 'vigilante', t: 'Propuesta: pasar a vigilante de garita nocturno, con la remuneración que corresponde a vigilancia.', bad: BP, why: 'Recorta su sueldo y lo aísla de noche. Si la lesión fuera ocupacional, la ley prohíbe bajarle la remuneración y la categoría.' },
      { id: 'termino', t: 'Si no hay puesto compatible, evaluar el término del vínculo laboral.', bad: BP, why: 'Una restricción médica no es motivo para despedir: primero se busca cómo adecuar el puesto.' },
      { id: 'firma', t: 'Alternativa: volver a molienda si firma una declaración de que asume el riesgo.', bad: LEY, why: 'La seguridad y salud en el trabajo no se renuncian con una firma: si el médico restringe, la restricción se respeta.' },
      { id: 'diag', t: 'Copiar el diagnóstico completo al jefe de turno «para que sepa cómo tratarlo».', bad: LEY, why: 'El diagnóstico es un dato sensible. Al jefe de turno le bastan las restricciones.' },
      { id: 'segui', t: 'Seguimiento con Salud Ocupacional al mes del retorno.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Entras a la evaluación con la propuesta tal cual. Sampén la pone sobre la mesa como punto de partida.' : 'Le dices a Sampén, con respeto, qué no puede quedar. Él se rasca la nuca: «Lo armó mi asistente con un formato viejo. Ya, lo vemos adentro».',
      flags: missLey ? [] : ['propuesta_revisada'],
      cartera: { puesto: missLey ? 'Propuesta con vigilancia, firma de riesgo y diagnóstico al jefe' : 'Propuesta depurada; por definir con el médico' },
      pro: { ok: 'Llegas a la evaluación sin opciones que bajen el sueldo, expongan el diagnóstico o trasladen el riesgo al trabajador.', risk: 'Lo que entra escrito a una reunión suele salir aprobado.', info: 'Pide al médico que la decisión se base en las exigencias reales de cada puesto.' },
      kusi: missLey ? ['preocupado', '¿Vigilante y con menos sueldo?'] : ['celebra', 'Limpiaste la mesa antes de sentarte.'],
    }),
    rules: [[LEY, 'Ley 29783, art. 76: ante accidente de trabajo o enfermedad ocupacional, transferencia a un puesto de menor riesgo sin menoscabo de remuneración ni categoría.'], [LEY, 'Ley 29733: el diagnóstico es dato sensible.']],
    mirada: {
      ve: 'Cuando alguien vuelve con limitaciones, las primeras propuestas suelen ser las más cómodas para el área: un puesto cualquiera, un sueldo menor o una firma que «libera» a la empresa. Bienestar revisa que el retorno no se convierta en un castigo.',
      visual: { tipo: 'cambio', titulo: 'De la propuesta al retorno', pares: [['Vigilante nocturno con menos sueldo', 'Un puesto compatible, sin perder lo que gana'], ['«Que firme que asume el riesgo»', 'Restricciones médicas respetadas'], ['Diagnóstico al jefe de turno', 'Solo las restricciones']] },
      normas: [{ ley: 'Ley 29783, art. 76 (modificado por la Ley 30222)', dice: 'En caso de accidente de trabajo o enfermedad ocupacional, el trabajador tiene derecho a ser transferido a otro puesto de menor riesgo, sin menoscabo de sus derechos remunerativos y de categoría.', practica: 'Veintidós años cargando sacos en molienda: vale la pena preguntar si la rodilla de Don Héctor tiene que ver con su trabajo.' }],
    },
  },
  {
    id: 'r2', t: '09:10', ch: 'presencial', who: 'hector', titulo: 'La evaluación', banner: 'assets/3d/scenes/balanza-sq.webp', lugar: 'Consultorio de Salud Ocupacional', show: ['personas', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>El Dr. Salazar revisa la rodilla, los informes de la terapia y las exigencias de cada puesto. Confirma las restricciones por seis meses, con reevaluación. Don Héctor escucha muy derecho en la silla. ${F.has('hector_orientado') ? '«Ya no agarro motores, doctor», dice de pronto, y el médico sonríe.' : ''}</p><p>Sampén pone sobre la mesa los puestos con vacantes. <mark class="clave">Pueden proponer dos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos puestos que propondrán a Don Héctor.', boton: 'Proponer estos dos', resumen: 'Propusieron',
    cols: ['Puesto', 'Lo que exige y lo que aprovecha'],
    rows: [
      { id: 'balanza', cells: ['Control de caña en la balanza de ingreso', 'Sentado y de pie; conoce la caña, los camiones y a los cañeros'] },
      { id: 'inductor', cells: ['Instructor de nuevos operarios de molienda, en el aula y a pie de máquina', 'Explica sin cargar; veintidós años de oficio'] },
      { id: 'almacen', cells: ['Ayudante de almacén de repuestos', 'Carga cajas y sube a estantes altos'] },
      { id: 'vigilancia', cells: ['Vigilante de garita nocturno', 'Sentado, pero de noche, solo y con otro sueldo'] },
      { id: 'limpieza', cells: ['Limpieza de áreas de fábrica', 'Agacharse, cargar baldes y estar de pie todo el turno'] },
    ],
    score: { balanza: 3, inductor: 3, almacen: -2, vigilancia: 0, limpieza: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 4 : 0, cumplimiento: q === 'riesgosa' ? -4 : 2 },
        flags: [...(picks.includes('balanza') ? ['puesto_balanza'] : []), ...(picks.includes('inductor') ? ['puesto_inductor'] : [])],
        cartera: { puesto: q === 'buena' ? 'Balanza o instructor: compatibles y con oficio' : q === 'aceptable' ? 'Una opción compatible y otra dudosa' : 'Puestos que contradicen las restricciones' },
        out: q === 'buena' ? 'El Dr. Salazar asiente: «Los dos respetan las restricciones». Sampén agrega: «Y a los nuevos les falta alguien como él». Don Héctor levanta un poco la mirada.' : picks.includes('almacen') || picks.includes('limpieza') ? 'El Dr. Salazar tacha la opción: «Eso es cargar y agacharse. No». Pierden diez minutos rehaciendo la lista.' : 'Una opción sirve. La otra lo deja solo de noche, con menos sueldo.',
        pro: { ok: 'Buscan un puesto que respete las restricciones y aproveche lo que él sabe.', risk: 'Un puesto «sentado» no basta: importa el sueldo, el turno y si la persona se siente útil.', info: 'El oficio de veinte años es un recurso. Enseñarlo puede ser el mejor uso.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Veintidós años que siguen sirviendo!' : '¿Ese puesto respeta su rodilla?'],
      };
    },
    rules: [[POL, 'En Sipán, el médico ocupacional fija las restricciones y la jefatura propone puestos compatibles con Bienestar.']],
    mirada: {
      ve: 'Adecuar un puesto no es esconder a alguien en un rincón. Es cruzar dos listas —lo que el cuerpo puede hoy y lo que el puesto exige— y sumar una tercera: lo que la persona sabe hacer.',
      visual: { tipo: 'matriz', x: 'Respeta las restricciones', y: 'Aprovecha su oficio', cuadrantes: ['Útil pero arriesgado', 'Ideal', 'Descartar', 'Seguro pero lo apaga'], items: [['Balanza', .8, .75], ['Instructor', .85, .9], ['Almacén', .15, .3], ['Vigilancia', .7, .1], ['Limpieza', .1, .1]] },
    },
  },
  {
    id: 'r3', t: '10:20', ch: 'presencial', who: 'hector', titulo: '«Yo soy de molienda»', banner: 'assets/esc/dudas.webp', lugar: 'Pasillo de Salud Ocupacional', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Al salir, Don Héctor se detiene en el pasillo. «Señorita, yo soy de molienda. Si me ven en otro sitio, los compañeros van a decir que ya no sirvo. Y en balanza no hay bono de molienda. ¿Con qué pago la cooperativa?»</p><p>Saca un papel doblado: una declaración que le pasó un compañero, «para volver a molienda bajo mi responsabilidad». <mark class="clave">Te pide que lo ayudes a presentarla</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que esa firma no le quita el riesgo, conversar de lo que de verdad le preocupa —el orgullo y el bono— y llevar a RR.HH. dos pedidos: que se evalúe si la lesión es ocupacional y que no pierda ingresos en el cambio.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 5, tiempo: -2 }, rel: { hector: 1 }, flags: ['retorno_adecuado', 'origen_evaluado'], cartera: { hector: 'Acepta probar el nuevo puesto por seis meses', sueldo: 'Pedido a RR.HH.: mantener ingresos y evaluar origen ocupacional' },
          out: 'Don Héctor rompe el papel en dos, despacio. «Si me dejan enseñar a los chiquillos, ya no es lo mismo que me boten a un rincón.» RR.HH. acepta revisar el bono con el Dr. Salazar.',
          pro: { ok: 'Atiendes lo que hay debajo del pedido: el orgullo y la plata. Y abres la pregunta del origen ocupacional, que cambia sus derechos.', risk: 'Si RR.HH. no mantiene sus ingresos, Don Héctor sentirá que lo castigaron por enfermarse.', info: 'El art. 76 de la Ley 29783 protege la remuneración y la categoría si la lesión es ocupacional.' },
          kusi: ['celebra', 'Rompió el papel él mismo.'] } },
      { id: 'b', label: 'Respetar su decisión y ayudarlo a presentar la declaración: es un adulto y conoce su cuerpo mejor que nadie.',
        res: { q: 'riesgosa', fx: { personas: 2, cumplimiento: -6, etica: -3 }, flags: ['retorno_riesgoso'], cartera: { hector: 'Vuelve a molienda contra la restricción médica' },
          out: 'El Dr. Salazar se niega a firmar el retorno a molienda: «Una declaración no cambia una rodilla». Sampén no se atreve a contradecirlo. Don Héctor sale furioso contigo y con todos.',
          pro: { ok: 'Respetas su autonomía.', risk: 'La seguridad no se renuncia con una firma, y la empresa sigue siendo responsable si se lesiona.' },
          kusi: ['preocupado', 'Una firma no protege una rodilla.'] } },
      { id: 'c', label: 'Decirle que la decisión es del médico, que no hay nada que hacer y que lo importante es que conserva el trabajo.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -3 }, flags: ['retorno_adecuado'], cartera: { hector: 'Acepta en silencio', sueldo: 'Bono de molienda perdido, sin revisión' },
          out: 'Don Héctor dice «ya» y guarda el papel en el bolsillo. Acepta el puesto. Pero el bono se pierde, y en la próxima boleta sentirá que enfermarse le costó plata.',
          pro: { ok: 'Respetas la restricción médica.', risk: 'Dejaste sin atender lo que le preocupa: el orgullo y el ingreso.' },
          kusi: ['pensando', 'Conserva el trabajo… ¿y el ánimo?'] } },
    ],
    rules: [[LEY, 'Ley 29783, art. 76: transferencia sin menoscabo de la remuneración si hay accidente de trabajo o enfermedad ocupacional.'], [BP, 'Detrás de un «quiero volver igual» suele haber orgullo y miedo a perder ingresos.']],
    mirada: {
      ve: 'Don Héctor no pide volver a molienda por terquedad: pide no perder lo que es —un hombre de molienda— y lo que gana. Un retorno bien acompañado responde a esas dos cosas, no solo a la rodilla.',
      visual: { tipo: 'balanza', a: { t: 'Lo que teme perder', items: ['Ser «de molienda»', 'El bono', 'El respeto de sus compañeros'] }, b: { t: 'Lo que puede ganar', items: ['Una rodilla que se recupera', 'Enseñar su oficio', 'Seis meses para reevaluar'] } },
    },
  },
  {
    id: 'r4', t: '12:00', ch: 'documento', who: null, titulo: 'El plan de reincorporación', banner: 'assets/esc/idea.webp', lugar: 'Oficina de Bienestar', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Almuerzas un seco de cabrito frente a la computadora. ${F.has('planillas_dolida') ? 'Wilmer te manda la boleta de Don Héctor sin una palabra.' : 'Wilmer pasa con la boleta de Don Héctor: «Para que veas qué conceptos tiene».'}</p><p>Nelly quiere que el caso de Don Héctor sirva de modelo. <mark class="clave">Un retorno no se improvisa el primer día</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena el plan de reincorporación.', boton: 'Guardar el plan',
    items: [
      { id: 'eval', t: 'Evaluación del médico ocupacional', por: 'Con los informes del tratamiento.' },
      { id: 'restr', t: 'Definir restricciones y su duración', por: 'Seis meses, con reevaluación.' },
      { id: 'puesto', t: 'Elegir con el trabajador un puesto compatible', por: 'Balanza o instructor.' },
      { id: 'acuerdo', t: 'Acordar por escrito funciones, horario y remuneración', por: 'Para que nadie lo cambie de palabra.' },
      { id: 'equipo', t: 'Presentarlo al nuevo equipo, sin contar el diagnóstico', por: 'Solo lo que hará y lo que no.' },
      { id: 'segui', t: 'Seguimiento a las dos semanas y reevaluación médica', por: 'Para ajustar si algo no funciona.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 1 : -1 },
        out: q === 'buena' ? 'Nelly responde desde las entrevistas del comité: «Este plan lo uso para los otros seis de descanso largo». Te sale una sonrisa con la boca llena.' : 'Nelly te corrige: «Si lo presentas al equipo antes de tener el acuerdo escrito, cada uno le va a decir algo distinto».',
        pro: { ok: 'Primero lo médico, luego el puesto con él, luego el papel y al final el equipo y el seguimiento.', info: 'El seguimiento es lo que más se olvida: agéndalo hoy en tu calendario.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Plan completo!' : 'Primero el acuerdo, después el equipo.'],
      };
    },
    rules: [[BP, 'La reincorporación se planifica y se acompaña: evaluación, restricciones, puesto, acuerdo escrito, presentación y seguimiento.']],
    mirada: {
      ve: 'Muchos retornos fracasan en la primera semana: el jefe nuevo no sabe qué puede pedir, los compañeros preguntan de más y nadie revisa cómo va. Un plan simple lo evita.',
      visual: { tipo: 'flujo', titulo: 'Reincorporación', pasos: ['Evaluación', 'Restricciones', 'Puesto con él', 'Acuerdo escrito', 'Nuevo equipo', 'Seguimiento'] },
    },
  },
  {
    id: 'r5', t: '14:30', ch: 'documento', who: null, titulo: 'El acuerdo', banner: 'assets/foto/cv-mano.webp', lugar: 'Oficina de Recursos Humanos', show: ['cumplimiento', 'calidad', 'confianza'],
    body: (n, F) => `<p>La jefa de RR.HH. te pide redactar el acuerdo de reincorporación para firmarlo a las 4 con Don Héctor y el Ing. Sampén. ${F.has('origen_evaluado') ? 'Ya aceptó que el Dr. Salazar evalúe si la lesión es ocupacional.' : ''}</p><p>Es una página. <mark class="clave">Lo que no esté escrito, en tres meses nadie lo recordará</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del acuerdo.', boton: 'Pasar el acuerdo a RR.HH.',
    bloques: [
      { id: 'funciones', t: 'Puesto y funciones', n: 1, ops: [
        { id: 'f1', t: 'Instructor de nuevos operarios de molienda y apoyo en el control de caña de la balanza, en turno día.', ok: true, por: 'Concreto y compatible.' },
        { id: 'f2', t: 'Funciones varias según necesidad del área.', ok: false, por: 'Así termina cargando sacos «solo un ratito».' },
      ] },
      { id: 'restricciones', t: 'Restricciones', n: 1, ops: [
        { id: 'r1', t: 'No cargar peso ni subir escaleras de forma repetida; alternar de pie y sentado. Vigencia: seis meses.', ok: true, por: 'Restricciones sin diagnóstico.' },
        { id: 'r2', t: 'Lesión de menisco con secuelas; evitar esfuerzos.', ok: false, por: 'El diagnóstico no va en un documento que verá su jefe.' },
      ] },
      { id: 'sueldo', t: 'Remuneración', n: 1, ops: [
        { id: 's1', t: 'Mantiene su remuneración y categoría; el concepto del bono de molienda se revisa con el resultado de la evaluación de origen.', ok: true, por: 'Protege su ingreso mientras se define lo ocupacional.' },
        { id: 's2', t: 'Percibirá la remuneración del nuevo puesto.', ok: false, por: 'Recorta su sueldo sin saber si la ley lo prohíbe en su caso.' },
      ] },
      { id: 'seguimiento', t: 'Seguimiento', n: 2, ops: [
        { id: 'g1', t: 'Bienestar revisa con él y su jefe cómo va a las dos semanas.', ok: true, por: 'Con fecha y responsable.' },
        { id: 'g2', t: 'Reevaluación del médico ocupacional al terminar los seis meses.', ok: true, por: 'La puerta a molienda no se cierra para siempre.' },
        { id: 'g3', t: 'Si no se adapta, se evaluará su continuidad.', ok: false, por: 'Suena a amenaza y no es la lógica de la adecuación.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -4, calidad: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 }, rel: { hector: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['acuerdo_escrito'] : q === 'riesgosa' ? ['sueldo_reducido'] : [],
        cartera: { sueldo: q === 'riesgosa' ? 'Sueldo del nuevo puesto' : 'Mantiene remuneración y categoría', puesto: q === 'riesgosa' ? 'Funciones vagas' : 'Instructor y balanza, turno día' },
        out: q === 'buena' ? 'A las 4:10 Don Héctor firma despacio, con su letra grande. Sampén le da la mano: «Mañana te presento a los chiquillos». Don Héctor se pone la credencial nueva sin decir nada.' : q === 'aceptable' ? 'RR.HH. lo firma, pero alguien tendrá que aclarar después lo que quedó vago.' : 'Don Héctor lee «remuneración del nuevo puesto» dos veces y firma callado. Esa noche Rosa te escribe: «¿Le bajaron el sueldo?».',
        pro: { ok: 'Funciones concretas, restricciones sin diagnóstico, ingreso protegido y fechas de seguimiento.', risk: 'Un «funciones varias» o un sueldo recortado deshacen todo lo que se cuidó en la mañana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Firmado y claro!' : '¿Qué quedó en el aire?'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 76; SUNAFIL: la modificación de funciones por adecuación no puede reducir unilateralmente la remuneración.'], [LEY, 'Ley 29733: el diagnóstico no va en documentos de gestión.']],
    mirada: {
      ve: 'El acuerdo de reincorporación protege a todos: al trabajador, frente a cambios de palabra; al jefe, que sabe qué puede pedir; y a la empresa, frente a una inspección.',
      visual: { tipo: 'flujo', titulo: 'El acuerdo en una página', pasos: ['Funciones concretas', 'Restricciones sin diagnóstico', 'Remuneración protegida', 'Seguimiento', 'Reevaluación'] },
    },
  },
  {
    id: 'r6', t: '16:40', ch: 'presencial', who: null, titulo: 'La señora Gladys', banner: 'assets/foto2/tension.webp', lugar: 'Puerta de Bienestar', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Una mujer de unos cuarenta años espera en la banca con un niño de uniforme escolar. Es Gladys, la esposa del Ing. Mío. ${F.has('medidas_dictadas') ? 'Desde ayer su esposo está en otro fundo y casi no habla.' : 'Su esposo llega a la casa de mal humor desde el lunes.'}</p><p>«Señorita, ustedes son Bienestar, ¿no? Bienestar es para todos. A mi esposo lo quieren botar por una chica. Tenemos tres hijos. <mark class="clave">¿Qué dice la denuncia? ¿Usted me puede ayudar?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escucharla con calma, decirle que no puedes hablar de ningún caso, que hay un procedimiento con derecho de defensa para su esposo, y ofrecerle apoyo para ella y sus hijos por otra vía, como la orientación psicológica de EsSalud.',
        res: { q: 'buena', fx: { etica: 5, personas: 3, confianza: 1 }, flags: ['gladys_atendida'], cartera: { queja: 'Reserva mantenida frente a la familia del denunciado' },
          out: 'Gladys llora un rato. «No me va a decir nada, ¿no?» No. Le das el número de orientación y le recuerdas que su esposo puede presentar su descargo. Se va con el niño de la mano.',
          pro: { ok: 'Bienestar es para todos, pero no puede ser parte en un caso: la atiendes como persona sin tocar el expediente.', risk: 'Puede salir pensando que Bienestar está «del lado de la chica». Es el costo de la reserva.', info: 'Avísale al comité que la familia del denunciado vino a preguntar: es un dato del caso.' },
          kusi: ['animo', 'Atendiste a la persona y cuidaste el caso.'] } },
      { id: 'b', label: 'Contarle con cuidado lo que se denunció, para que entienda que no es «por una chica» y deje de culpar a la empresa.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, flags: ['gladys_expuesta'], cartera: { queja: 'Detalles del caso revelados a la familia del denunciado' },
          out: 'Gladys se queda helada. Esa noche hay una pelea en la casa de los Mío. A la mañana siguiente, la mamá de Gladys espera a Milagros en el paradero del campamento.',
          pro: { ok: 'Quieres que entienda.', risk: 'Revelaste un expediente reservado a la familia del denunciado y expusiste a la víctima.' },
          kusi: ['indignado', '¡Milagros quedó expuesta!'] } },
      { id: 'c', label: 'Decirle que Bienestar no puede atenderla porque su esposo está en un proceso, y pedirle que se retire.',
        res: { q: 'aceptable', fx: { etica: 2, personas: -4 }, cartera: { queja: 'Reserva mantenida; familia sin orientación' },
          out: 'Gladys se va sin mirarte, con el niño llorando. En el pueblo dirán que Bienestar «le cerró la puerta» a una madre.',
          pro: { ok: 'Mantienes la reserva.', risk: 'Se puede cuidar el caso sin tratar a alguien como enemiga: ella no es la denunciada.' },
          kusi: ['pensando', 'La reserva no está peleada con la amabilidad.'] } },
    ],
    rules: [[LEY, 'El procedimiento por hostigamiento es reservado; el denunciado tiene derecho a presentar su descargo (D.S. 014-2019-MIMP).'], [BP, 'Bienestar atiende a todas las personas, pero no revela ni opina sobre un caso en curso.']],
    mirada: {
      ve: 'Los casos de hostigamiento afectan también a la familia del denunciado. Bienestar puede atenderla como a cualquier persona en un mal momento, pero sin convertirse en canal del expediente.',
      visual: { tipo: 'embudo', titulo: 'Qué puede recibir Gladys', niveles: [['Escucha y trato digno', 3], ['Orientación para ella y sus hijos', 2], ['Información del caso', 0]] },
    },
  },
  {
    id: 'r7', t: '18:00', ch: 'whatsapp', who: null, titulo: 'La llave del lactario', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Oficina de Bienestar, con la luz del pasillo apagada', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Yesenia pregunta quién tendrá la llave de noche. ${F.has('lactario_propuesta') ? 'Tu propuesta decía «en el tópico», pero Augusto no quiere la llave ahí.' : 'Nadie lo ha decidido todavía.'} Mañana abre el lactario.</p><p>Antes de irte tienes que dejarlo resuelto. <mark class="clave">Un lactario que no se puede abrir de noche no existe para el turno noche</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Proponer un candado de clave, que la clave la tengan las usuarias registradas y el tópico, y que se cambie cada mes.',
        res: { q: null, fx: { personas: 4, calidad: 3 }, flags: ['lactario_clave'], cartera: { lactario: 'Candado de clave para usuarias y tópico' },
          out: 'Logística tiene un candado de clave en el almacén. Augusto responde con un «ok» seco: ya no hay llave que se pierda. Yesenia te manda un corazón morado.', kusi: ['celebra', 'Ni llaves perdidas ni puertas cerradas.'] } },
      { id: 'b', label: 'Dejar la llave con el vigilante de la garita principal, que está toda la noche.',
        res: { q: null, fx: { personas: -1, tiempo: 2 }, cartera: { lactario: 'Llave en la garita principal' },
          out: 'Resuelto en un minuto. Pero la garita queda a diez minutos de envasado, y Yesenia tendrá que pedirle la llave a un vigilante hombre a las dos de la mañana.', kusi: ['pensando', '¿Diez minutos para pedir una llave?'] } },
    ],
    mirada: { ve: 'Los detalles operativos —una llave, un horario, una distancia— deciden si un servicio se usa o no. Bienestar piensa en la persona que lo usará a las dos de la mañana.' },
  },
];
