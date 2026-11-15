// Analista de Gestión del Desempeño · Capítulo 5 · «La calibración» · Semana 1, viernes.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (textos oficiales en docs/normas/txt; SPIJ: https://spij.minjus.gob.pe):
// - Constitución, art. 26 inc. 1: igualdad de oportunidades sin discriminación (ya citada).
// - Ley 30709, art. 6: protección por embarazo y lactancia (ya citada).
// - Ley 29733: reserva y uso de datos personales solo para su finalidad (ya citada).
// - D.S. 003-97-TR, arts. 23 b) y 31 (ya citados en el capítulo 4).

export const CAP = {
  n: 5, titulo: 'La calibración', dia: 'Semana 1, viernes', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'Alimentos Lima S.A. · Sala del segundo piso',
  inicio: '07:45', fin: '19:00', cierreHora: '18:40',
  apertura: 'Viernes. Siete gerentes, un proyector que tarda en prender, empanadas de carne de la panadería de la esquina y tres horas para que 1,500 notas digan la verdad.', boton: 'Entrar a la sala',
  kusi: 'Hoy no gana quien habla más fuerte. Gana el dato. ¡Dale!',
  lead: 'Cerraste los últimos pendientes, moderaste a siete gerentes, presentaste el caso de Andrés con evidencia y dejaste un acta que se puede defender.',
  reflexion: '¿Qué hace que un grupo de gerentes acepte cambiar las notas de su propia gente?',
  siguiente: { n: 6, titulo: 'La retroalimentación', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'pendientes', p: 'Evaluaciones pendientes', j: 'Evaluadores', d: 0, e: '6 al empezar el día' },
  { id: 'calibracion', p: 'Comité de calibración', j: 'Gerentes', d: 0, e: '9:00 a 12:00' },
  { id: 'andres', p: 'Caso Andrés Huerta', j: 'Comité', d: 0, e: 'En agenda' },
  { id: 'licencias', p: 'Madres que volvieron de licencia', j: 'Comité · Legal', d: 0, e: 'En agenda' },
  { id: 'acta', p: 'Acta de calibración', j: 'Talento', d: 0, e: 'Sin redactar' },
];

export const FUTURO = {
  cierre_completo: ['El ciclo cerró con las 1,500 evaluaciones.', 'Nadie se quedó sin nota ni sin bono por un jefe atrasado.'],
  ventas_calibrada: ['Ventas pasó de 96 % a 54 % de sobresalientes, caso por caso, con evidencia.', 'Algunos vendedores no lo entenderán: los jefes tendrán que explicarlo.'],
  ventas_intacta: ['Ventas mantuvo su 96 %.', 'Finanzas preguntará por qué.'],
  andres_recalificado: ['El comité subió a Andrés a «sobresaliente» con la evidencia.', 'Alberto tendrá que darle la retroalimentación.'],
  andres_cumple: ['Andrés quedó en «cumple» como punto medio.', 'Ni la evidencia ni Alberto quedaron contentos.'],
  andres_igual: ['Andrés se quedó en «necesita mejorar».', 'Sin bono, y con una nota que no explica nadie.'],
  licencias_corregidas: ['El comité corrigió las notas de las madres afectadas por el formato.', 'Una de ellas igual pedirá revisar la suya.'],
  acta_ok: ['El acta registra decisiones y razones, sin chismes ni datos de más.', 'Te servirá ante cualquier reclamo.'],
  acta_floja: ['El acta quedó con frases que no debían estar.', 'Si alguien la pide, será un problema.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  gerentes: { n: 'Comité de calibración', sub: '7 gerentes, Paola y tú', c: '#1F5C99' },
};

export const WSP = [
  { chat: 'talento', t: '07:50', de: 'Wendy', txt: 'Quedan 6 pendientes. Hugo Lazo sigue sin aparecer 👻', si: 'licencias_revisadas' },
  { chat: 'talento', t: '07:50', de: 'Wendy', txt: 'Quedan 40 pendientes 😰 Ayer no llegamos a llamar a todos.', no: 'licencias_revisadas' },
  { chat: 'alberto', t: '08:40', de: 'Alberto', txt: 'Nos vemos en la sala. Espero que lo de ayer quede entre nosotros.', si: 'alberto_trato' },
  { chat: 'gerentes', t: '12:10', de: 'Giancarlo (Finanzas)', txt: 'Primera calibración en la que entiendo por qué se mueve cada nota. Gracias.', si: 'ventas_calibrada' },
  { chat: 'andres', t: '16:30', de: 'Andrés', txt: 'Buenas tardes. ¿Ya terminó el comité? No me diga nada si no puede, solo quiero saber si terminó.' },
  { chat: 'paola', t: '18:45', de: 'Paola', txt: 'Semana uno: cerrada 🙌 Descansa. El lunes empieza lo difícil: que los jefes sepan explicar estas notas.' },
];

export const CORREOS = [
  { t: '08:00', de: 'Sistema de Desempeño', para: 'Talento', asunto: 'Avance del ciclo · viernes', html: '<p>Cerradas: 1,494. Pendientes: 6. El plazo vence hoy a las 18:00.</p>', si: 'licencias_revisadas' },
  { t: '08:00', de: 'Sistema de Desempeño', para: 'Talento', asunto: 'Avance del ciclo · viernes', html: '<p>Cerradas: 1,460. Pendientes: 40. El plazo vence hoy a las 18:00.</p>', no: 'licencias_revisadas' },
  { t: '17:30', de: 'Mónica Quispe', para: 'Analista de Gestión del Desempeño', asunto: 'Distribución calibrada', html: '<p>Con la distribución que salió del comité, ya puedo correr la simulación de bonos. El miércoles la ve Finanzas. Te aviso si no cuadra.</p><p>Mónica</p>' },
];

export const QUIZ = [
  { q: 'Un gerente dice «mi equipo es excelente, todos son sobresalientes». En la calibración lo mejor es…', ops: ['Aceptarlo para no pelear', 'Revisar caso por caso con las anclas y la evidencia', 'Bajar a la mitad de su equipo', 'Votar entre los gerentes'], ok: 1, por: 'Las anclas y la evidencia permiten mover notas sin que sea una pelea de opiniones.' },
  { q: 'En un caso de posible sesgo, ¿qué evidencia muestras primero?', ops: ['Rumores del pasillo', 'Los indicadores medibles del año y el historial', 'Lo que te contó el evaluado en confianza', 'Su perfil de redes'], ok: 1, por: 'Lo medible es lo más difícil de discutir.' },
  { q: '¿Qué debe registrar el acta de calibración?', ops: ['Todo lo que dijeron los gerentes, palabra por palabra', 'Las decisiones, sus razones y quién las aprobó', 'Las opiniones personales sobre cada trabajador', 'Nada: es reservado'], ok: 1, por: 'Decisiones y razones: lo que se necesita para explicar o defender una nota.' },
  { q: 'Las notas de madres que volvieron de licencia y fueron castigadas por el formato deben…', ops: ['Quedarse como están', 'Corregirse con base en su desempeño en el tiempo trabajado', 'Subirse todas a sobresaliente', 'Revisarse solo si reclaman'], ok: 1, por: 'Se corrige el castigo por la licencia y se evalúa lo que hicieron en el tiempo trabajado.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:55', ch: 'llamada', who: null, titulo: 'Los últimos rezagados', banner: 'assets/foto/llamada.webp', lugar: 'Pasillo del segundo piso', show: ['tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Llegas antes que nadie. El de seguridad te abre la sala y prendes el proyector, que tarda cinco minutos en calentar. ${F.has('licencias_revisadas') ? 'Quedan seis evaluaciones pendientes.' : 'Quedan cuarenta pendientes: ayer no alcanzó la tarde.'}</p><p>Tienes una hora antes del comité para <mark class="clave">las últimas llamadas</mark>.</p>`,
    type: 'calls',
    calls: [['Hugo Lazo · Logística', 'Contesta por fin', 'Disculpa, estuve en el almacén de Lurín toda la semana. ¿Me ayudas a entrar al sistema?'], ['Diego Ramos · Mantenimiento', 'Contesta: terminó anoche', 'Ya están las mías. Con comentarios, como pediste.'], ['Patricia Inga · Administración', 'Su asistente contesta', 'Ya cerré las de la señora Patricia con lo que ella me dictó por teléfono.'], ['Carla Bustos · Marketing', 'No contesta: está en el tráfico']],
    prompt: 'Hugo necesita ayuda y la asistente de Patricia evaluó por ella. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Guiar a Hugo por teléfono ahora y pedirle a Patricia que revise y apruebe con su usuario lo que dictó.',
        res: { q: 'buena', fx: { cumplimiento: 4, calidad: 2, tiempo: -1 }, flags: ['cierre_completo'], cartera: { pendientes: '0 pendientes a las 17:40' },
          out: 'Hugo cierra en veinte minutos. Patricia aprueba desde su celular en la playa de Asia. A las 17:40, el contador del sistema marca cero.',
          pro: { ok: 'Quien evalúa es el jefe: la asistente puede digitar, pero la jefa aprueba.', info: 'Anota lo de Hugo: los jefes de Lurín necesitan otro canal.' },
          kusi: ['celebra', '¡Mil quinientas de mil quinientas!'] } },
      { id: 'b', label: 'Dar por buenas las de Patricia y dejar a Hugo para la tarde: ahora el comité es lo primero.',
        res: { q: 'aceptable', fx: { tiempo: 2, cumplimiento: -2 },
          out: 'El comité empieza a tiempo. Hugo cierra a las 17:55, con prisa. Las de Patricia quedan firmadas por alguien que no es su evaluadora.',
          pro: { ok: 'Llegas puntual al comité.', risk: 'Una evaluación cerrada por quien no es el evaluador no se puede defender si alguien reclama.' },
          kusi: ['pensando', '¿Quién evaluó de verdad a ese equipo?'] } },
    ],
    rules: [[POL, 'La evaluación la registra y aprueba el jefe directo con su propio usuario.']],
    mirada: { ve: 'El último día de un plazo siempre trae soluciones creativas. Algunas ayudan a cerrar; otras cambian quién evaluó. La diferencia importa cuando alguien reclama.' },
  },
  {
    id: 'e2', t: '09:20', ch: 'presencial', who: 'gerente', titulo: 'Ventas al 96 %', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala del segundo piso', show: ['calidad', 'confianza', 'etica'],
    body: (n, F) => `<p>Paola abre con las reglas y te pasa la palabra. En la pantalla, la barra de Ventas: 96 % de sobresalientes. ${F.has('cuota_forzada') ? 'Mónica recuerda en voz alta la cuota del 20 %.' : 'La referencia de la empresa, en gris, marca 20 %.'}</p><p>Alberto se adelanta: «Mi equipo superó la meta en 108 %. <mark class="clave">Si eso no es sobresaliente, ¿qué es?</mark>». Tres gerentes asienten. Dos miran el celular.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer el resultado del equipo y proponer revisar a cada persona con el ancla: superar su propia meta y ser referente para otros.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 3, etica: 3 }, rel: { gerente: -1, paola: 1 }, flags: ['ventas_calibrada'], cartera: { calibracion: 'Ventas: de 96 % a 54 %, caso por caso' },
          out: 'Revisan nombre por nombre. Diecinueve vendedores no superaron su meta individual: el equipo llegó por cinco estrellas. Alberto acepta 26 sobresalientes de 48. «Pero que conste que mi equipo vendió.» Consta.',
          pro: { ok: 'Separas el logro del equipo del aporte de cada persona, sin negar el logro.', risk: 'Es lento: Ventas se come una hora.', info: 'El resultado del equipo puede premiarse por otra vía, no inflando notas individuales.' },
          kusi: ['celebra', '¡Persona por persona, con el ancla en la mano!'] } },
      { id: 'b', label: 'Aplicar la referencia del 20 % y pedir a Alberto que elija a sus diez sobresalientes.',
        res: { q: 'aceptable', fx: { calidad: 1, confianza: -2 }, rel: { gerente: -1 }, flags: ['ventas_calibrada'],
          out: 'Alberto elige a diez, entre ellos a sus más cercanos. Nadie revisa la evidencia: solo se cuadró el número.',
          pro: { ok: 'Bajas la inflación rápido.', risk: 'Usar la referencia como cuota deja que el gerente elija por afinidad.' },
          kusi: ['pensando', 'Cuadró el número… ¿y la justicia?'] } },
      { id: 'c', label: 'Dejar a Ventas como está: superaron la meta y no vale la pena pelear la primera hora.',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -3 }, rel: { gerente: 1 }, flags: ['ventas_intacta'],
          out: 'Alberto sonríe. Rafael, de Planta, levanta la mano: «Entonces mis operarios que cumplieron también son sobresalientes». El comité se desordena.',
          pro: { ok: 'Evitas el conflicto.', risk: 'Si la gerencia más inflada no se toca, las demás no aceptarán ajustes.' },
          kusi: ['preocupado', 'Si Ventas no se toca, nadie se deja tocar.'] } },
    ],
    rules: [[POL, 'Sobresaliente: supera su meta individual y es referente para otros (anclas del comité).']],
    mirada: {
      ve: 'Un equipo puede ser excelente sin que todos sus miembros lo sean. La calibración no niega el logro colectivo: pregunta qué aportó cada persona.',
      visual: { tipo: 'embudo', titulo: 'Ventas: de la propuesta a la calibración', niveles: [['Evaluados', 48], ['Propuestos sobresaliente', 46], ['Superaron su meta', 29], ['Calibrados sobresaliente', 26]] },
    },
  },
  {
    id: 'e3', t: '10:25', ch: 'presencial', who: null, titulo: 'Cinco minutos para Andrés', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala del segundo piso', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Llega el bloque de «notas que contradicen los indicadores». El primer nombre es Andrés Huerta. ${F.has('caso_hechos') ? 'Paola te mira: «Adelante».' : 'Paola carraspea: «A ver qué tenemos».'}</p><p>Tienes cinco minutos y <mark class="clave">tres láminas</mark>. Alberto cruza los brazos.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres láminas que vas a mostrar.', boton: 'Presentar', resumen: 'Mostraste',
    cols: ['Lámina', 'Qué muestra'],
    rows: [
      { id: 'meta', cells: ['Meta, cobranza y morosidad del año', '112 % de la meta y la menor morosidad de Lima Este'] },
      { id: 'hist', cells: ['Historial de tres años', 'Sobresaliente con su jefe anterior'] },
      { id: 'sust', cells: ['El sustento de la nota, línea por línea, frente a las anclas', 'Qué es desempeño y qué no'] },
      { id: 'version', cells: ['Lo que Andrés te contó en confianza sobre Alberto', 'Su versión del conflicto'] },
      { id: 'marzo', cells: ['El pedido de marzo como prueba de mala fe de Alberto', 'Tu interpretación de lo que pasó'] },
      { id: 'cliente', cells: ['Encuesta a clientes', 'Cero quejas; bodegueros que lo nombran'] },
    ],
    score: { meta: 3, hist: 2, sust: 3, cliente: 2, version: -3, marzo: -3 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, etica: picks.includes('version') ? -3 : 2, confianza: q === 'buena' ? 3 : -2 },
        cartera: { andres: q === 'buena' ? 'Presentado con evidencia' : 'Presentado con opiniones' },
        out: q === 'buena' ? 'Giancarlo, de Finanzas, es el primero en hablar: «Con esos números, yo no puedo votar “necesita mejorar”». Alberto no responde.' : picks.includes('version') || picks.includes('marzo') ? 'Alberto se levanta: «¿Ahora Talento investiga a los gerentes con chismes?». La discusión deja de ser sobre Andrés.' : 'Muestras datos, pero falta lo que conecta la nota con las anclas.',
        pro: { ok: 'Lo medible y el contraste con las anclas hablan por sí solos.', risk: 'Lo que el evaluado te contó en confianza o tu interpretación del conflicto no son evidencia de desempeño.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? 'Cinco minutos, cero adjetivos. ¡Qué bacán!' : 'Eso no era desempeño…'],
      };
    },
    mirada: {
      ve: 'En un comité, la evidencia más fuerte es la que nadie puede discutir. Las interpretaciones sobre motivos, aunque sean ciertas, convierten el caso en una pelea entre personas.',
      visual: { tipo: 'balanza', a: { t: 'Lo que convence', items: ['Meta 112 %', 'Historial', 'Sustento frente a anclas'] }, b: { t: 'Lo que enciende', items: ['Lo que te contó en confianza', 'Tu teoría del pedido de marzo'] } },
    },
  },
  {
    id: 'e4', t: '10:40', ch: 'presencial', who: 'gerente', titulo: 'La propuesta del punto medio', banner: 'assets/foto2/tension.webp', lugar: 'Sala del segundo piso', show: ['etica', 'confianza', 'calidad'],
    body: (n, F) => `<p>Alberto descruza los brazos. ${F.has('alberto_trato') ? 'Te busca con la mirada, como recordándote algo.' : 'Habla hacia Paola, no hacia ti.'}</p><p>«Ya, ok. No es “necesita mejorar”. <mark class="clave">Pongámosle “cumple” y pasemos al siguiente</mark>, que se nos va la mañana.» Dos gerentes asienten, aliviados.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recordar el ancla: superó su meta y es referente para su zona. Proponer «sobresaliente» y pedir que el comité vote con la evidencia.',
        res: { q: 'buena', fx: { etica: 5, calidad: 3 }, rel: { gerente: -1, evaluado: 1 }, flags: ['andres_recalificado'], cartera: { andres: 'Recalificado: sobresaliente' },
          out: 'Votan cinco contra dos. Andrés queda «sobresaliente». Paola agrega al acta: «Revisar aparte el registro del pedido de marzo».',
          pro: { ok: 'El punto medio no es justo cuando la evidencia apunta a un extremo.', risk: 'Alberto perdió delante de sus pares. No lo olvidará.' },
          kusi: ['celebra', 'La evidencia ganó la votación.'] } },
      { id: 'b', label: 'Aceptar el «cumple»: es una mejora y evita que Alberto quede mal delante de todos.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: 2 }, rel: { gerente: 1 }, flags: ['andres_cumple'], cartera: { andres: '«Cumple» por transacción' },
          out: 'Pasan al siguiente caso. Andrés cobrará el 70 % del bono. Según las anclas, le correspondía el 100 %.',
          pro: { ok: 'Mejoras la nota sin tensión.', risk: 'Un «cumple» negociado no se explica con las anclas. Andrés lo notará.' },
          kusi: ['pensando', 'Mejor que antes… pero ¿justo?'] } },
      { id: 'c', label: 'Dejar la nota original: Alberto es el jefe y ya cedió en Ventas.',
        res: { q: 'riesgosa', fx: { etica: -5, calidad: -3 }, rel: { gerente: 1, evaluado: -1 }, flags: ['andres_igual'], cartera: { andres: 'Necesita mejorar, sin evidencia' },
          out: 'Andrés queda sin bono y con una nota que, el próximo año, puede ser el primer paso de un despido sin sustento.',
          pro: { ok: 'Alberto queda contento.', risk: 'La nota contradice los datos y el comité lo sabe.' },
          kusi: ['triste', 'Todos vieron los números…'] } },
    ],
    rules: [[BP, 'El punto medio es justo cuando la evidencia está en el medio.']],
    mirada: {
      ve: 'Los comités tienden al «punto medio» para cerrar rápido y que nadie pierda. Pero cuando la evidencia es clara, partir la diferencia castiga a la persona para proteger el orgullo de otra.',
      visual: { tipo: 'rango', titulo: 'Dónde cae Andrés según las anclas', min: 1, max: 3, banda: [2.6, 3], marcas: [['Propuesta de Alberto', 1], ['Punto medio', 2], ['Evidencia', 2.9]] },
    },
  },
  {
    id: 'e5', t: '12:30', ch: 'documento', who: null, titulo: 'El acta', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Los gerentes se van al almuerzo. Quedan migas de empanada y un plumón sin tapa. ${F.has('licencias_revisadas') ? 'El comité corrigió las notas de nueve madres afectadas por la línea de la licencia.' : 'No hubo tiempo para revisar las notas de las madres que volvieron de licencia.'}</p><p>Wendy tomó notas durante la reunión y te pasa un borrador del acta. <mark class="clave">Lo que quede escrito puede leerlo un juez</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debe ir en el acta o lo que expone a la empresa.',
    doc: { t: 'Acta del comité de calibración · borrador', sub: 'Alimentos Lima S.A. · Talento' },
    lines: [
      { id: 'dist', t: 'Distribución final: 38 % sobresaliente, 52 % cumple, 10 % necesita mejorar.' },
      { id: 'andres', t: 'Caso A. Huerta: se revisó con indicadores y anclas; decisión y votación registradas.' },
      { id: 'chisme', t: 'Se comentó que A. Sáenz «la tiene contra Huerta desde lo del pedido».', bad: BP, why: 'Es una opinión de pasillo, no una decisión ni una razón. Expone a dos personas.' },
      { id: 'embar', t: 'Se acordó no proponer sobresaliente a trabajadoras embarazadas «porque igual se van de licencia».', bad: LEY, why: 'Es discriminación por embarazo. La Constitución (art. 26) y la Ley 30709 la prohíben. Si alguien lo dijo, hay que corregirlo, no registrarlo como acuerdo.' },
      { id: 'licen', t: 'Se corrigieron las notas afectadas por el descuento por licencia de maternidad.' },
      { id: 'salud', t: 'J. Ccori: nota baja por su diagnóstico de depresión.', bad: LEY, why: 'Un diagnóstico es un dato sensible de salud. No va en un acta de desempeño (Ley 29733) y no puede ser razón de una nota.' },
      { id: 'pedido', t: 'Se derivará a Auditoría la revisión del registro del pedido de marzo en Ventas.', duda: 'Es una decisión real, pero conviene redactarla sin nombres hasta que Auditoría revise.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges el comentario de pasillo. Pero una frase grave se queda en el acta y Paola la firma sin leerla completa.' : `Marcas ${hitsLey} frases con riesgo legal. Paola lee la de las embarazadas y se queda fría: «Eso lo dijo alguien en broma. Hoy mismo lo hablo con ese gerente».`,
      flags: [missLey ? 'acta_floja' : 'acta_ok', ...(missLey ? [] : ['licencias_corregidas'])],
      cartera: { acta: missLey ? 'Acta con frases de riesgo' : 'Acta con decisiones y razones' },
      pro: { ok: 'Un acta registra decisiones y razones. Lo demás se queda en la sala.', risk: 'Una broma registrada como acuerdo se vuelve una prueba de discriminación.', info: 'Lo que se dijo sobre las embarazadas hay que corregirlo con quien lo dijo, no solo borrarlo.' },
      kusi: missLey ? ['preocupado', 'Esa frase no podía quedarse…'] : ['indignado', '¡«Igual se van de licencia»! Eso se corrige ya.'],
    }),
    rules: [[LEY, 'Ley 30709 y Constitución, art. 26: no se discrimina por embarazo.'], [LEY, 'Ley 29733: los datos de salud son sensibles.']],
    mirada: {
      ve: 'En las reuniones se dicen cosas que nadie se atrevería a escribir. El acta no es una grabación: es el registro de lo que se decidió y por qué. Y si alguien dijo algo discriminatorio, el problema no es el acta, es la idea.',
      normas: [{ ley: 'Ley 30709, art. 6', dice: 'Prohíbe despedir o no renovar el contrato por motivos vinculados con el embarazo o la lactancia.', practica: 'Negar una nota por «porque igual se va de licencia» apunta al mismo trato desigual que la ley busca impedir.' }],
    },
  },
  {
    id: 'e6', t: '16:35', ch: 'whatsapp', who: 'evaluado', titulo: '«¿Ya terminó?»', banner: 'assets/esc/dudas.webp', show: ['personas', 'etica'],
    body: (n, F) => `<p>Andrés te escribe: «¿Ya terminó el comité? No me diga nada si no puede». ${F.has('andres_recalificado') ? 'Sabes que su nota subió.' : F.has('andres_cumple') ? 'Sabes que quedó en «cumple».' : 'Sabes que su nota no cambió.'}</p><p>La regla es que la nota la comunica el jefe. <mark class="clave">Pero el silencio también comunica</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que sí terminó, que su caso se revisó con cuidado y que su jefe le dará la nota en la reunión de la próxima semana.',
        res: { q: 'buena', fx: { personas: 3, etica: 3 }, rel: { evaluado: 1 },
          envia: [['andres', 'Hola, Andrés. Sí, el comité terminó hoy y tu caso se revisó con cuidado, con tus resultados. La nota te la dará tu jefe en la reunión de la próxima semana. Si después tienes dudas, puedes escribirme.']],
          out: 'Andrés responde con un «gracias, de verdad». No sabe su nota, pero sabe que alguien miró sus números.',
          pro: { ok: 'Respondes lo que puedes sin saltarte el proceso.', info: 'Avisa a Paola que Andrés está esperando: la reunión con Alberto necesitará preparación.' },
          kusi: ['feliz', 'Ni filtro ni silencio.'] } },
      { id: 'b', label: 'Contarle su nota: el comité ya decidió y él ha esperado toda la semana.',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -3, cumplimiento: -2 }, rel: { evaluado: 1, gerente: -1 },
          out: 'Andrés lo sabe antes que Alberto. El lunes, Alberto se entera de que Talento «le pasó la nota» y llega a la reunión de retroalimentación furioso.',
          pro: { ok: 'Le quitas la angustia.', risk: 'Saltas al jefe, y la conversación más importante empieza rota.' },
          kusi: ['preocupado', 'Esa conversación le tocaba a otro.'] } },
    ],
    rules: [[POL, 'La nota calibrada la comunica el jefe directo en una reunión de retroalimentación.']],
    mirada: { ve: 'Entre filtrar una nota y dejar a alguien en visto hay un camino: decir lo que sí se puede decir, con fechas. Eso calma sin romper el proceso.' },
  },
  {
    id: 'e7', t: '18:15', ch: 'whatsapp', who: null, titulo: 'Fin de la primera semana', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Paradero de la Carretera Central', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Es viernes y la Carretera Central huele a anticuchos. Paola te pidió el resumen de la semana para Gerencia General. ${F.has('cierre_completo') ? 'El sistema marca 1,500 de 1,500.' : 'El sistema marca 1,500, con algunas cerradas a última hora.'}</p><p>Lo escribes en el paradero, <mark class="clave">antes de que llegue la combi</mark>.</p>`,
    type: 'compose', enviaA: 'paola', para: 'Para: Paola Ríos · Jefa de Talento', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'logro', t: 'El resultado', ops: [
        { id: 'l1', t: 'Paola: 1,500 evaluaciones cerradas y calibradas. Sobresalientes: del 80 % al 38 %, caso por caso.', ok: true },
        { id: 'l2', t: 'Paola: ¡lo logramos! Semana durísima pero salió 💪', ok: false, por: 'Celebra, pero no informa.' },
      ] },
      { id: 'riesgo', t: 'Lo que viene', ops: [
        { id: 'r1', t: 'Riesgo: varios jefes tendrán que explicar notas que bajaron. Propongo entrenarlos el lunes antes de las reuniones.', ok: true },
        { id: 'r2', t: 'El lunes seguimos con lo que falte.', ok: false, por: 'No anticipa nada.' },
      ] },
      { id: 'pend', t: 'Pendiente', ops: [
        { id: 'p1', t: 'Pendiente: revisar con Mónica el impacto en bonos antes del miércoles.', ok: true },
        { id: 'p2', t: 'Pendiente: ver lo de Alberto.', ok: null, por: 'Ambiguo: ¿qué de Alberto?' },
      ] },
    ],
    res: sel => {
      const buenas = ['l1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 2 : 0 }, rel: { paola: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Paola lo reenvía a Gerencia General tal cual. Te responde con un sticker de una llama bailando.' : 'Paola responde con un pulgar. El lunes tendrá que preguntarte los detalles.',
        pro: { ok: 'Resultado, riesgo y pendiente: el resumen que deja lista la semana siguiente.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Primera semana, misión cumplida!' : 'Buen cierre; el lunes lo completas.'],
      };
    },
    mirada: { ve: 'La calibración termina un viernes, pero su efecto empieza el lunes: cada nota que bajó tendrá que explicarse cara a cara. Ver eso venir es parte del trabajo.' },
  },
];
