// Analista de Gestión del Desempeño · Capítulo 1 · «El 80 %» · Semana 1, lunes.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (textos oficiales en docs/normas/txt; SPIJ: https://spij.minjus.gob.pe):
// - Constitución Política del Perú, art. 26 inc. 1: igualdad de oportunidades sin discriminación en la relación laboral.
// - Ley 30709, art. 6: prohíbe despedir o no renovar por embarazo o lactancia; art. 1: igual remuneración por igual trabajo.
// - Ley 29733, art. 19: derecho de acceso del titular a sus datos personales.

export const CAP = {
  n: 1, titulo: 'El 80 %', dia: 'Semana 1, lunes', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Alimentos Lima S.A. · Oficina de Talento, Ate',
  inicio: '08:30', fin: '18:45', cierreHora: '18:30',
  apertura: 'Ate, Carretera Central. La garúa de la mañana moja los techos de la planta de galletas y el olor a vainilla llega hasta la oficina de Talento. Es tu primer día como analista de Gestión del Desempeño.', boton: 'Entrar a Talento',
  kusi: 'Hoy te toca leer números… pero detrás de cada número hay alguien esperando su bono.',
  lead: 'Leíste la curva más rara del año, encontraste dónde se esconde el 80 %, revisaste el formato con lupa y le dijiste a un gerente lo que no quería oír.',
  reflexion: 'Si casi todos son «sobresalientes», ¿qué le dice la evaluación a quien de verdad lo es?',
  siguiente: { n: 2, titulo: 'Los rezagados', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'distribucion', p: 'Informe de distribución', j: 'Paola · Talento', d: 0, e: 'Sin empezar' },
  { id: 'pendientes', p: '300 evaluaciones pendientes', j: 'Evaluadores', d: 0, e: 'Plazo: viernes' },
  { id: 'calibracion', p: 'Comité de calibración', j: 'Gerentes', d: 0, e: 'Viernes 9:00' },
  { id: 'bonos', p: 'Presupuesto de bonos', j: 'Finanzas · Compensaciones', d: 0, e: 'Sin cruzar' },
  { id: 'formato', p: 'Formato de evaluación', j: 'Talento', d: 0, e: 'Sin revisar' },
];

export const FUTURO = {
  cortes_buenos: ['Cruzaste los resultados por gerencia, por evaluador y por licencias.', 'Ya sabes dónde mirar en la calibración.'],
  cortes_flojos: ['Te quedaste con el promedio general.', 'En la calibración te faltarán datos para responder.'],
  formato_leido: ['Viste que el formato castiga la licencia de maternidad.', 'Eso volverá en el capítulo 7.'],
  formato_sin_ley: ['No viste que el formato descuenta puntos por licencia de maternidad.', 'Alguien lo reclamará.'],
  alberto_sin_promesa: ['A Alberto no le prometiste nada antes del comité.', 'No le gustó, pero no puede decir que lo engañaste.'],
  alberto_promesa: ['Le prometiste a Alberto que su equipo conservaría el «sobresaliente».', 'Te lo cobrará el viernes.'],
  andres_respetado: ['Le explicaste a Andrés cómo sigue el proceso, sin adelantar resultados.', 'Andrés confía en ti.'],
  andres_filtrado: ['Le contaste a Andrés lo que dice el sistema antes de calibrar.', 'La noticia ya corre en Ventas.'],
  informe_claro: ['Tu informe tiene números, riesgos y una propuesta.', 'Paola lo llevará a gerencia.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  monica: { n: 'Mónica Quispe', sub: 'Analista de Compensaciones', c: '#7B4B94' },
};

export const WSP = [
  { chat: 'talento', t: '08:32', de: 'Paola', txt: 'Bienvenida 🙌 Te dejé la curva impresa en tu escritorio. No te asustes.' },
  { chat: 'talento', t: '08:40', de: 'Wendy', txt: 'Hola, soy Wendy, la practicante 😊 Si el sistema se cuelga, F5 y paciencia. Siempre se cuelga los lunes.' },
  { chat: 'talento', t: '09:05', de: 'Mónica', txt: 'Cuando tengas la distribución, pásamela. El bono «sobresaliente» es el 100 % del bono objetivo y ya no me alcanza ni en sueños 😬' },
  { chat: 'alberto', t: '12:20', de: 'Alberto', txt: 'Hola, bienvenida. ¿Tienes un minuto? Te llamo.' },
  { chat: 'andres', t: '14:10', de: 'Andrés', txt: 'Buenas tardes. Soy Andrés Huerta, de Ventas. ¿Podría pasar un ratito por su oficina?' },
  { chat: 'alberto', t: '15:30', de: 'Alberto', txt: 'Perfecto. Sabía que nos íbamos a entender 👍', si: 'alberto_promesa' },
  { chat: 'paola', t: '18:40', de: 'Paola', txt: 'Leí tu resumen. Mañana lo afinamos y lo subo el jueves a gerencia. Buen primer día.', si: 'informe_claro' },
];

export const CORREOS = [
  { t: '08:35', de: 'Paola Ríos', para: 'Analista de Gestión del Desempeño', asunto: 'Ciclo de desempeño · cierre', html: '<p>¡Bienvenida! Te tocó entrar en la semana más movida del año.</p><p>Tenemos 1,200 evaluaciones cerradas de 1,500. Faltan 300 y el plazo vence este viernes, el mismo día del comité de calibración. Del total cerrado, el 80 % salió «sobresaliente». El bono depende de esa nota y el presupuesto se armó pensando en un 20 %.</p><p>Necesito entender qué está pasando antes del viernes. Paola</p>' },
  { t: '11:50', de: 'Sistema de Desempeño', para: 'Talento', asunto: 'Reporte automático · avance del ciclo', html: '<p>Evaluaciones cerradas: 1,200 (80 %). Pendientes: 300. Gerencia con más pendientes: Operaciones (planta), 214.</p>' },
];

export const QUIZ = [
  { q: 'El 80 % de la empresa salió «sobresaliente». Lo primero que haces es…', ops: ['Bajar a todos un nivel', 'Cruzar los resultados por gerencia, evaluador y otras variables', 'Aceptarlo: la empresa va bien', 'Pedir que se repita la evaluación'], ok: 1, por: 'Un promedio esconde dónde está la inflación. Los cortes por gerencia y por evaluador la muestran.' },
  { q: 'Un formato que descuenta puntos por la licencia de maternidad…', ops: ['Es normal: estuvo ausente', 'Discrimina por una condición protegida', 'Solo importa si la persona reclama', 'Se compensa con el bono'], ok: 1, por: 'La Constitución (art. 26) protege la igualdad de oportunidades sin discriminación, y la Ley 30709 protege a las trabajadoras por embarazo y lactancia.' },
  { q: 'Un gerente te pide que le asegures que su equipo mantiene la nota antes de la calibración. ¿Qué respondes?', ops: ['Que sí, para empezar bien', 'Que la nota se define en la calibración con evidencia, y que lleve sus datos', 'Que su equipo está inflado', 'Que lo decide Paola y cuelgas'], ok: 1, por: 'No prometes lo que aún no se decide, y le dices qué necesita llevar.' },
  { q: 'Un trabajador te pide ver su nota antes de que su jefe se la comunique. ¿Qué haces?', ops: ['Se la das: son sus datos', 'Le explicas el proceso y cuándo y cómo la recibirá', 'Le dices que no puedes hablar con él', 'Le das una pista'], ok: 1, por: 'La nota aún no es final. Tiene derecho a acceder a sus datos (Ley 29733, art. 19), pero lo correcto es entregarle la nota calibrada, con su jefe y por el canal previsto.' },
  { q: 'Una escala de 1 a 5 sin descripción de cada nivel provoca…', ops: ['Más objetividad', 'Que cada jefe la interprete a su manera', 'Menos trabajo para Talento', 'Que nadie salga sobresaliente'], ok: 1, por: 'Sin anclas, «5» significa cosas distintas para cada evaluador: el terreno ideal para la inflación.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '08:45', ch: 'presencial', who: 'paola', titulo: 'Una curva que no es curva', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de Talento', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Paola pone sobre la mesa una hoja impresa: una barra gigante en «sobresaliente», dos barritas tímidas y casi nada en «necesita mejorar». A su lado, un vaso de emoliente que ya se enfrió.</p><p>«Bienvenida${n ? ', ' + n : ''}. Esto no le cree nadie, ni gerencia ni la gente. <mark class="clave">Tengo quince minutos: pregúntame lo que necesites</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Decide qué te sirve más esta semana.',
    opts: [
      { id: 'bono', label: '¿Cómo se conecta la nota con el bono?', info: '«Sobresaliente cobra el 100 % del bono objetivo; cumple, el 70 %; necesita mejorar, nada. El presupuesto se armó con un 20 % de sobresalientes. Con 80 %, Finanzas me va a matar.»' },
      { id: 'antes', label: '¿Qué pasó el año pasado?', info: '«Hubo 72 % de sobresalientes y nadie dijo nada. Este año el directorio pidió una evaluación creíble. Por eso existe tu puesto.»' },
      { id: 'quien', label: '¿Quién decide la nota final?', info: '«El jefe propone, pero la nota final sale del comité de calibración del viernes, con los gerentes. Ahí se compara a la gente con evidencia.»' },
      { id: 'miedo', label: '¿Qué es lo que más te preocupa?', info: '«Que la gente buena se vaya porque ve que da igual esforzarse. Y que algún gerente use la evaluación para premiar o castigar a quien le cae bien o mal.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('quien') ? 2 : 1, tiempo: -1 }, rel: { paola: picks.includes('miedo') ? 1 : 0 },
      out: 'Paola se va a otra reunión. Te deja la base del sistema exportada a Excel: 1,200 filas y una pestaña que se llama «Hoja3 (2) FINAL».',
      kusi: ['curioso', 'Ya sabes quién decide y qué está en juego.'],
    }),
    mirada: {
      ve: 'En casi todas las empresas la nota de desempeño se conecta con algo que importa: bonos, ascensos, aumentos. Por eso la presión para «inflar» es enorme, y por eso el proceso necesita a alguien que lo cuide.',
      visual: { tipo: 'flujo', titulo: 'El ciclo que te toca cerrar', pasos: ['Autoevaluación', 'Evaluación del jefe', 'Calibración', 'Retroalimentación', 'Bono'], aqui: 1 },
    },
  },
  {
    id: 'a2', t: '09:40', ch: 'documento', who: null, titulo: '¿Dónde está el 80 %?', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo'],
    body: () => `<p>El Excel tarda en abrir. Tienes la mañana para cruzar los datos y <mark class="clave">tres cortes</mark> antes de que el sistema se cuelgue otra vez.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres cortes que vas a analizar.', boton: 'Cruzar estos datos', resumen: 'Analizaste',
    cols: ['Corte', 'Qué te podría decir'],
    rows: [
      { id: 'gerencia', cells: ['Distribución por gerencia', 'Si la inflación está en todas partes o en algunas'] },
      { id: 'evaluador', cells: ['Distribución por evaluador', 'Si hay jefes que ponen a todos lo mismo'] },
      { id: 'licencia', cells: ['Notas de quienes tuvieron licencias largas', 'Si alguien fue castigado por ausencias protegidas'] },
      { id: 'fecha', cells: ['Fecha y hora en que se cerró cada evaluación', 'Si las del último minuto son distintas'] },
      { id: 'edad', cells: ['Notas por edad de cada trabajador', 'Curiosidad'] },
      { id: 'promedio', cells: ['Promedio general de la empresa', 'Un solo número para el informe'] },
    ],
    score: { gerencia: 3, evaluador: 3, licencia: 3, fecha: 2, edad: -1, promedio: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: -1 },
        flags: [q === 'riesgosa' ? 'cortes_flojos' : 'cortes_buenos'],
        cartera: { distribucion: q === 'riesgosa' ? 'Solo el promedio' : 'Cortes listos: Ventas 96 % sobresaliente' },
        out: q === 'riesgosa' ? 'Tu número dice «80 %». Lo sabías desde las 8:45.' : `Aparecen los patrones: Ventas tiene 96 % de sobresalientes; Planta, 58 %. Seis evaluadores pusieron a todo su equipo la misma nota, sin un solo comentario.${picks.includes('licencia') ? ' Y de las 14 mujeres que volvieron de licencia de maternidad, 9 salieron «necesita mejorar».' : ''}`,
        pro: { ok: 'Los cortes por gerencia y evaluador muestran dónde está la inflación.', risk: 'El promedio general no le dice a nadie qué hacer.', info: 'Cruzar por edad sin una hipótesis puede leerse como discriminación.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Encontraste dónde se esconde el 80 %!' : 'El número solo no habla…'],
      };
    },
    mirada: {
      ve: 'La inflación de notas casi nunca está repartida por igual: se concentra en algunas áreas y en algunos evaluadores. Encontrarla es el primer paso para calibrar sin castigar a toda la empresa.',
      visual: { tipo: 'embudo', titulo: 'Sobresalientes por gerencia', niveles: [['Ventas', 96], ['Administración', 84], ['Marketing', 81], ['Planta', 58]] },
    },
  },
  {
    id: 'a3', t: '11:15', ch: 'documento', who: null, titulo: 'El formato de siempre', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Para entender las notas, abres el formato con el que evaluaron. Wendy te lo imprime y te advierte: «Es el mismo desde 2019. <mark class="clave">Nadie lo ha leído completo</mark>».</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que favorecen notas poco confiables.',
    doc: { t: 'Formato de evaluación anual de desempeño', sub: 'Alimentos Lima S.A. · versión 2019' },
    lines: [
      { id: 'escala', t: 'Escala de 1 a 5 en cada factor. No requiere descripción de los niveles.', bad: BP, why: 'Sin anclas, cada jefe interpreta «5» a su manera.' },
      { id: 'metas', t: 'Metas del año: el jefe las registra al momento de evaluar.', bad: BP, why: 'Metas fijadas al final del año no orientaron el trabajo de nadie.' },
      { id: 'licencia', t: 'Asistencia: se descuenta un punto por cada mes de ausencia, incluida la licencia de maternidad.', bad: LEY, why: 'Castiga una ausencia protegida. La Constitución (art. 26) protege la igualdad sin discriminación y la Ley 30709 protege a las trabajadoras por embarazo y lactancia.' },
      { id: 'vacas', t: 'Compromiso: suma puntos si el trabajador no usó todas sus vacaciones.', bad: BP, why: 'Premia renunciar a un derecho al descanso.' },
      { id: 'coment', t: 'Comentarios del evaluador: opcionales.', bad: BP, why: 'Una nota sin comentarios no se puede revisar ni explicar.' },
      { id: 'ventas', t: 'Resultados: porcentaje de cumplimiento de la meta de ventas o producción.' },
      { id: 'actitud', t: 'Actitud positiva y buena disposición con el jefe.', duda: 'Puede medir algo real, pero así escrito premia caerle bien al jefe.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Anotas que la escala es vaga y que faltan comentarios. Pero la línea de la licencia de maternidad se te pasa.' : `Marcas ${hitsLey} problema legal grave. Wendy lee la línea de la licencia en voz baja: «Mi prima salió mal por eso el año pasado».`,
      flags: [missLey ? 'formato_sin_ley' : 'formato_leido'],
      cartera: { formato: missLey ? 'Revisado a medias' : 'Formato con 1 problema legal y 4 de diseño' },
      pro: { ok: 'Leer el formato explica muchas notas: el instrumento empuja el resultado.', risk: 'Un formato puede verse «de siempre» y aun así discriminar.', info: 'Anota la línea de la licencia: puede haber personas ya afectadas.' },
      kusi: missLey ? ['preocupado', 'Se te escapó lo de la licencia…'] : ['indignado', '¡Un punto menos por ser mamá! Eso no va.'],
    }),
    rules: [[LEY, 'Constitución, art. 26: igualdad de oportunidades sin discriminación en la relación laboral.'], [LEY, 'Ley 30709, art. 6: prohibido despedir o no renovar por embarazo o lactancia.']],
    mirada: {
      ve: 'Muchas notas injustas no nacen de jefes malos, sino de formatos mal hechos. Una línea escrita hace años puede castigar a todas las madres de la empresa sin que nadie lo note.',
      visual: { tipo: 'cambio', titulo: 'Lo que el formato premia… y lo que debería', pares: [['No usar vacaciones', 'Cumplir metas acordadas'], ['Caerle bien al jefe', 'Comportamientos observables'], ['Menos puntos por licencia', 'Metas ajustadas al tiempo trabajado']] },
      normas: [{ ley: 'Constitución Política del Perú, art. 26', dice: 'En la relación laboral se respeta la igualdad de oportunidades sin discriminación.', practica: 'Descontar puntos por la licencia de maternidad pone en desventaja a las mujeres por ser madres.' }],
    },
  },
  {
    id: 'a4', t: '12:25', ch: 'llamada', who: 'gerente', titulo: 'La llamada de Alberto', banner: 'assets/foto/llamada.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Alberto llama desde su camioneta, en el tráfico de Javier Prado. Habla rápido y con una simpatía que llena la línea.</p><p>«Bienvenida, ah. Mira, mi equipo reventó la meta este año. Mis 48 son sobresalientes y se lo ganaron. <mark class="clave">Solo dime que el viernes nadie me los toca</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que la nota final sale del comité del viernes y pedirle que lleve la evidencia de cada caso.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3, confianza: -1 }, rel: { gerente: -1 }, flags: ['alberto_sin_promesa'],
          out: '«Ya, ya, burocracia», se ríe, pero anota. Antes de colgar dice: «Tú vas a ver que mis números hablan solos».',
          pro: { ok: 'No prometes lo que aún no se decide y le dices qué necesita llevar.', risk: 'Alberto te verá como un obstáculo.', info: 'Si sus números son buenos, la evidencia lo favorece.' },
          kusi: ['animo', 'Ni promesa ni pelea. Evidencia.'] } },
      { id: 'b', label: 'Tranquilizarlo: si reventaron la meta, seguro que se mantienen. Ya lo verán el viernes.',
        res: { q: 'riesgosa', fx: { etica: -3, confianza: 2 }, rel: { gerente: 1 }, flags: ['alberto_promesa'],
          out: 'Alberto cuelga feliz. Media hora después, en el grupo de Ventas ya se comenta que «Talento confirmó los bonos».',
          pro: { ok: 'Empiezas bien con un gerente poderoso.', risk: 'Una frase tuya ya se usa como promesa, y el comité aún no se reúne.' },
          kusi: ['preocupado', '«Seguro» es una palabra muy grande…'] } },
      { id: 'c', label: 'Decirle que Ventas tiene 96 % de sobresalientes y que eso no es creíble.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -3 }, rel: { gerente: -1 }, flags: ['alberto_sin_promesa'],
          out: '«¿Me estás diciendo que mi gente miente?». Te corta. Tenías razón en el dato, pero se lo diste antes de tiempo y sin contexto.',
          pro: { ok: 'Dices la verdad.', risk: 'Compartir datos sin calibrar pone a la defensiva a quien más necesitas que coopere.' },
          kusi: ['pensando', 'Verdad, sí… ¿pero hoy y por teléfono?'] } },
    ],
    rules: [[POL, 'En Alimentos Lima, la nota final es la que aprueba el comité de calibración.']],
    mirada: {
      ve: 'Alberto no es un villano: su equipo vendió más que nunca y quiere protegerlo. Pero una nota no se negocia por teléfono. Lo que sí puedes hacer es decirle cómo se defiende un caso.',
      visual: { tipo: 'balanza', a: { t: 'Prometer hoy', items: ['Alberto contento', 'Lunes tranquilo'] }, b: { t: 'Decidir con evidencia', items: ['Notas que se pueden explicar', 'Mismo trato a todas las gerencias', 'Nadie cobra una promesa'] } },
    },
  },
  {
    id: 'a5', t: '14:30', ch: 'presencial', who: 'evaluado', titulo: 'Andrés pregunta', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Puerta de Talento', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Andrés Huerta, supervisor de ventas, se asoma con la camisa planchada y una carpeta bajo el brazo. Lleva doce años en la empresa y habla bajito.</p><p>«Disculpe. Mi jefe cerró mi evaluación el viernes y no me ha llamado. Mis compañeros ya saben su nota. <mark class="clave">¿Usted podría decirme la mía?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle que la nota aún no es final, que pasa por el comité del viernes y que la recibirá de su jefe en una reunión.',
        res: { q: 'buena', fx: { personas: 3, etica: 3 }, rel: { evaluado: 1 }, flags: ['andres_respetado'],
          out: 'Andrés asiente despacio. «Entiendo. Es que con mi jefe las cosas no han estado bien este año.» No dice más. Tú anotas su nombre.',
          pro: { ok: 'No adelantas una nota sin calibrar y le dices qué viene y cuándo.', info: 'Cuando alguien dice «las cosas no han estado bien», vale la pena mirar su caso con atención.' },
          kusi: ['pensando', 'Algo le preocupa. Guárdalo.'] } },
      { id: 'b', label: 'Buscarla en el sistema y decírsela: son sus datos y tiene derecho a saberlos.',
        res: { q: 'riesgosa', fx: { personas: 1, etica: -3, cumplimiento: -2 }, rel: { evaluado: 1 }, flags: ['andres_filtrado'],
          out: 'En la pantalla aparece «necesita mejorar», sin comentarios. Andrés se pone pálido. Esa tarde, medio Ventas sabe que Talento «está pasando notas».',
          pro: { ok: 'Tiene derecho a sus datos.', risk: 'Le diste una nota que todavía puede cambiar, sin el contexto de su jefe, y saltaste el proceso.' },
          kusi: ['triste', 'Esa noticia necesitaba otro momento.'] } },
      { id: 'c', label: 'Decirle que no puedes hablar de evaluaciones y que le pregunte a su jefe.',
        res: { q: 'aceptable', fx: { personas: -2 }, rel: { evaluado: -1 },
          out: 'Andrés se va sin decir nada. No era una respuesta falsa, pero sí una puerta cerrada.',
          pro: { ok: 'No filtras la nota.', risk: 'No le explicas el proceso, y él se queda con más dudas que antes.' },
          kusi: ['pensando', 'Se fue más preocupado que como llegó.'] } },
    ],
    rules: [[LEY, 'Ley 29733, art. 19: el titular tiene derecho de acceso a sus datos personales.'], [POL, 'La nota calibrada la comunica el jefe en una reunión de retroalimentación.']],
    mirada: {
      ve: 'El derecho de acceso a los datos existe, pero una nota sin calibrar todavía no es «el dato». Explicar el camino y la fecha respeta a la persona sin desordenar el proceso.',
      visual: { tipo: 'linea', titulo: 'Cuándo sabrá Andrés su nota', hitos: [['Lunes', 'Pregunta en Talento'], ['Viernes', 'Comité de calibración'], ['Semana 2', 'Reunión con su jefe']] },
    },
  },
  {
    id: 'a6', t: '16:10', ch: 'documento', who: null, titulo: 'El informe para Paola', banner: 'assets/esc/planilla.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Afuera ya salió el sol de la tarde y la planta cambia de turno: suenan las sirenas y la Carretera Central se llena de buses. Te sientas a armar el <mark class="clave">informe de distribución</mark> que Paola llevará a gerencia.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del informe.', boton: 'Guardar el informe',
    bloques: [
      { id: 'datos', t: 'Qué muestras', n: 2, ops: [
        { id: 'd1', t: 'Distribución por gerencia y por evaluador.', ok: true, por: 'Muestra dónde está la inflación.' },
        { id: 'd2', t: 'Los seis evaluadores que pusieron la misma nota a todos, sin comentarios.', ok: true },
        { id: 'd3', t: 'Ranking de los 20 trabajadores con peor nota, con nombre.', ok: false, por: 'Expone personas con notas aún sin calibrar.' },
      ] },
      { id: 'riesgo', t: 'Qué riesgo señalas', n: 2, ops: [
        { id: 'r1', t: 'Con 80 % de sobresalientes, el bono supera el presupuesto.', ok: true },
        { id: 'r2', t: 'El formato descuenta puntos por licencia de maternidad.', ok: true, por: 'Es un riesgo legal y humano.' },
        { id: 'r3', t: 'Ventas miente en sus notas.', ok: false, por: 'Es una acusación, no un dato.' },
      ] },
      { id: 'prop', t: 'Qué propones', n: 2, ops: [
        { id: 'p1', t: 'Calibrar el viernes con evidencia, empezando por las áreas más infladas.', ok: true },
        { id: 'p2', t: 'Revisar las notas de las madres que volvieron de licencia.', ok: true },
        { id: 'p3', t: 'Bajar a todos un nivel para cuadrar el presupuesto.', ok: false, por: 'Castiga por igual a quien evaluó bien y a quien infló.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['informe_claro'] : [], cartera: { distribucion: q === 'buena' ? 'Informe listo: datos, riesgos y propuesta' : 'Informe con piezas que sobran' },
        out: q === 'buena' ? 'El informe cabe en dos páginas. Mónica lo ve por encima de tu hombro: «Por fin alguien que no me manda un solo número».' : 'El informe está, pero mezcla datos con acusaciones o soluciones que castigan a todos.',
        pro: { ok: 'Un buen informe muestra el dato, el riesgo y una propuesta que se pueda ejecutar.', risk: 'Nombres sin calibrar o recortes parejos generan más problemas que los que resuelven.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Dos páginas que dicen la verdad. ¡Qué bacán!' : 'Algunas piezas no iban…'],
      };
    },
    mirada: {
      ve: 'Un informe de distribución no busca culpables: busca que quien decide vea el problema completo. La propuesta tiene que ser tan concreta como el dato.',
      visual: { tipo: 'rango', titulo: 'Sobresalientes: lo presupuestado y lo real', min: 0, max: 100, banda: [15, 25], marcas: [['Presupuesto', 20], ['Año pasado', 72], ['Este año', 80]] },
    },
  },
  {
    id: 'a7', t: '18:10', ch: 'whatsapp', who: null, titulo: 'El resumen del día', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la Carretera Central', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Esperas la combi a Santa Anita con el celular en la mano. ${F.has('alberto_promesa') ? 'En el grupo de Ventas alguien ya escribió «bonos confirmados 🎉».' : 'Alberto te dejó un «ok» seco.'}</p><p>Paola te pidió un resumen corto <mark class="clave">antes de que se acabe el día</mark>.</p>`,
    type: 'compose', enviaA: 'paola', para: 'Para: Paola Ríos · Jefa de Talento', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El hallazgo', ops: [
        { id: 'h1', t: 'Paola, el 80 % no está parejo: Ventas tiene 96 % y seis evaluadores pusieron a todos la misma nota.', ok: true, por: 'Dato concreto y accionable.' },
        { id: 'h2', t: 'Paola, todo está inflado, como pensabas.', ok: false, por: 'No le dice nada nuevo.' },
      ] },
      { id: 'alerta', t: 'La alerta', ops: [
        { id: 'a1', t: 'Ojo: el formato descuenta puntos por licencia de maternidad. Hay que revisarlo antes del viernes.', ok: true },
        { id: 'a2', t: 'También hay cosas raras en el formato, te cuento mañana.', ok: null, por: 'Correcto, pero deja lo urgente para después.' },
      ] },
      { id: 'pide', t: 'Lo que pides', ops: [
        { id: 'p1', t: '¿Me ayudas mañana a priorizar a qué evaluadores perseguimos primero?', ok: true },
        { id: 'p2', t: 'Mañana sigo, avísame cualquier cosa.', ok: false, por: 'No pide nada concreto.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'a1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 2 : 0 }, rel: { paola: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Paola responde con un audio de diez segundos: «Lo de la licencia es gravísimo. Mañana a las ocho lo vemos».' : 'Paola responde: «Ok, mañana conversamos».',
        pro: { ok: 'Un buen resumen dice qué encontraste, qué preocupa y qué necesitas.', risk: 'Un «todo bien, mañana sigo» deja a tu jefa sin elementos para decidir.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Primer día y ya diste en el blanco!' : 'Mañana lo afinas.'],
      };
    },
    mirada: { ve: 'El último mensaje del día ordena el siguiente. Quien termina con un hallazgo, una alerta y un pedido llega al martes con el camino claro.' },
  },
];
