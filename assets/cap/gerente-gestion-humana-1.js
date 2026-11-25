// Gerente/a de Gestión Humana · Capítulo 1 · «El diez por ciento» · Semana 1, lunes.
// Hilo de las dos semanas: el directorio de Grupo Vida pide recortar costos un 10 % y la propuesta se presenta
// el jueves de la Semana 2. En medio: un equipo dividido, el sindicato de enfermería y una denuncia.
// Normas citadas (textos oficiales en docs/normas/txt):
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 30 b): la reducción inmotivada de la remuneración es acto de hostilidad.
// - D.S. 003-97-TR, arts. 46 b) y 48: el cese colectivo por motivos económicos procede solo si comprende no menos
//   del 10 % del personal y sigue un procedimiento con el sindicato y la Autoridad Administrativa de Trabajo.
// - Ley 27735, arts. 1 y 5: dos gratificaciones al año; la de Navidad se abona en la primera quincena de diciembre.
// - D.S. 007-2002-TR (TUO de la Ley de jornada), art. 9: el trabajo en sobretiempo es voluntario.

export const CAP = {
  n: 1, titulo: 'El diez por ciento', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'Grupo Vida · Oficina corporativa de San Isidro',
  inicio: '06:40', fin: '19:30', cierreHora: '19:15',
  apertura: 'Lima, finales de noviembre. La garúa todavía moja la avenida Javier Prado cuando abres el correo en el taxi. Llevas cuatro meses como gerente de Gestión Humana de Grupo Vida: cinco clínicas, 3,000 personas. El correo del directorio llegó a las 6:12.', boton: 'Abrir el correo',
  kusi: 'Hoy no te piden que hagas algo: te piden que decidas cómo pensar. ¡Dale, con calma!',
  lead: 'Leíste la estrategia detrás del pedido, pusiste condiciones a una cifra, elegiste dónde mirar primero, avisaste a tu equipo antes de que hablara el rumor y frenaste un borrador que habría terminado en SUNAFIL.',
  reflexion: '¿Qué diferencia hay entre decirle «sí» a un directorio y decirle «sí, y así»?',
  siguiente: { n: 2, titulo: 'Tu equipo', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Reducción de costos del 10 %', j: 'Directorio', d: 0, e: 'Propuesta para el jueves de la próxima semana' },
  { id: 'equipo', p: 'Tus jefaturas', j: 'Gestión Humana', d: 0, e: 'Aún no saben nada' },
  { id: 'datos', p: 'Costos laborales', j: 'Jorge Lazo · Compensaciones', d: 0, e: 'Sin análisis' },
  { id: 'sindicato', p: 'Sindicato de enfermería', j: 'Silvia Quispe · Relaciones Laborales', d: 0, e: 'Pliego en trato directo' },
  { id: 'borrador', p: 'Medidas inmediatas de Finanzas', j: 'Rodrigo Benavides', d: 0, e: 'Borrador circulando' },
];

export const FUTURO = {
  plazo_datos: ['Le dijiste a la Dra. Rossi que llevarías una propuesta con datos, no una cifra improvisada.', 'Ella lo recordará el jueves de la próxima semana.'],
  si_ciego: ['Aceptaste que el 10 % saldría completo de la planilla.', 'Tu equipo y el sindicato lo sabrán pronto.'],
  palancas_bien: ['Empezaste por horas extra, rotación y ausentismo.', 'Jorge tendrá el análisis el miércoles.'],
  palancas_faciles: ['Empezaste por lo más rápido de cortar.', 'Lo caro va a seguir escondido.'],
  equipo_avisado: ['Tus jefaturas supieron el pedido por ti, con reserva y una cita para mañana.', 'Llegarán a la reunión sabiendo a qué van.'],
  equipo_a_oscuras: ['Tus jefaturas no supieron nada por ti.', 'Mañana lo sabrán por otro lado.'],
  borrador_frenado: ['Frenaste las medidas ilegales del borrador de Finanzas.', 'Rodrigo te mira distinto: con respeto y con fastidio.'],
  borrador_suelto: ['El borrador de Finanzas siguió circulando.', 'Alguien lo va a reenviar.'],
  doris_cuidada: ['Doris salió a tiempo a la terapia de su hijo.', 'Mañana llega a las 7 con todo impreso.'],
};

export const CHATS = {
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
  carmen: { n: 'Dra. Carmen Rossi', sub: 'Presidenta del directorio', who: 'directorio' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  rodrigo: { n: 'Rodrigo Benavides', sub: 'Gerente de Finanzas', c: '#C05621' },
  doris: { n: 'Doris Ccahuana', sub: 'Asistente de gerencia', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'gg', t: '06:55', de: 'Fernando', txt: '¿Viste el correo de la doctora? Te espero a las 8 en mi oficina. Trae café, va para largo.' },
  { chat: 'doris', t: '07:30', de: 'Doris', txt: 'Buenos días. Ya le imprimí el correo y la planilla consolidada de octubre. Están en su escritorio 📎' },
  { chat: 'rodrigo', t: '11:05', de: 'Rodrigo', txt: 'Te mandé mi borrador de medidas. Es rápido y suma. Revísalo antes de las 4, que Fernando lo quiere ver.' },
  { chat: 'jefaturas', t: '13:10', de: 'Silvia', txt: 'Recibido. Mañana a las 8 estoy. Y ya sé que hay que guardar reserva: treinta años aquí, jefa.', si: 'equipo_avisado' },
  { chat: 'jefaturas', t: '13:12', de: 'Mariela', txt: 'Ok 🙏 ¿Llevo algo?', si: 'equipo_avisado' },
  { chat: 'jorge', t: '13:20', de: 'Jorge', txt: 'Gracias por avisar primero. Empiezo a cruzar horas extra por clínica esta tarde.', si: 'equipo_avisado' },
  { chat: 'jorge', t: '17:40', de: 'Jorge', txt: 'Oye, en el ascensor alguien de Finanzas hablaba de «recorte de enfermeras». ¿Es verdad? Nadie nos ha dicho nada.', si: 'equipo_a_oscuras' },
  { chat: 'carmen', t: '18:50', de: 'Carmen Rossi', txt: 'Recibí su correo. Datos el jueves de la próxima semana. No me haga esperar más.', si: 'plazo_datos' },
  { chat: 'carmen', t: '18:50', de: 'Carmen Rossi', txt: 'Anotado: el 10 % sale de personal. Gracias por la claridad.', si: 'si_ciego' },
];

export const CORREOS = [
  { t: '06:12', de: 'Dra. Carmen Rossi · Presidencia del Directorio', para: 'Gerencia General; Gerencia de Finanzas; Gerencia de Gestión Humana', asunto: 'Reducción de costos — urgente', html: '<p>Estimados:</p><p>El cierre de octubre confirma lo que anticipamos: los ingresos de las aseguradoras cayeron y el banco revisará nuestros indicadores de deuda en enero. El directorio acordó que el presupuesto 2027 refleje una <b>reducción de costos del 10 %</b>.</p><p>Cada gerencia presentará su propuesta en la sesión del jueves de la próxima semana. Gestión Humana administra el rubro más grande. Espero claridad.</p><p>C. Rossi</p>' },
  { t: '11:02', de: 'Rodrigo Benavides · Finanzas', para: 'Gerencia de Gestión Humana; Gerencia General', asunto: 'Borrador · medidas inmediatas de personal', html: '<p>Adjunto un borrador de medidas que podríamos aplicar desde diciembre. Con eso cubrimos buena parte del 10 % sin esperar a la sesión.</p><p>Rodrigo</p>' },
];

export const QUIZ = [
  { q: 'El directorio pide recortar costos un 10 %. ¿Qué es lo primero que debe hacer la gerencia de Gestión Humana?', ops: ['Recortar 10 % de cada partida de personal', 'Entender de dónde viene el pedido y qué costos lo explican antes de comprometer una cifra', 'Negarse: las personas no se recortan', 'Esperar a que Finanzas decida'], ok: 1, por: 'Leer la estrategia (por qué, para cuándo, qué indicadores) permite proponer en lugar de solo obedecer.' },
  { q: 'Según el D.S. 003-97-TR, art. 30 b), la reducción inmotivada de la remuneración es…', ops: ['Una facultad del empleador', 'Un acto de hostilidad equiparable al despido', 'Legal si se avisa por correo', 'Una falta del trabajador'], ok: 1, por: 'El art. 30 b) la incluye entre los actos de hostilidad equiparables al despido.' },
  { q: 'El cese colectivo por motivos económicos (art. 48 del D.S. 003-97-TR) procede…', ops: ['Con cualquier número de trabajadores', 'Solo si comprende no menos del 10 % del personal y sigue un procedimiento con el sindicato y la Autoridad de Trabajo', 'Con una carta individual', 'Solo en el sector público'], ok: 1, por: 'El art. 48 exige un número no menor al 10 % del personal y un procedimiento que empieza informando al sindicato.' },
  { q: '¿Se puede dejar de pagar la gratificación de Navidad para ahorrar?', ops: ['Sí, si la empresa tiene pérdidas', 'No: es un derecho por ley y se abona en la primera quincena de diciembre', 'Sí, si el directorio lo aprueba', 'Solo a los contratados a plazo fijo'], ok: 1, por: 'La Ley 27735 reconoce dos gratificaciones al año; la de Navidad se paga en la primera quincena de diciembre (art. 5).' },
  { q: 'Un jefe de servicio «programa» horas extra obligatorias para cubrir turnos. Eso…', ops: ['Es normal en salud', 'Contradice que el sobretiempo es voluntario (D.S. 007-2002-TR, art. 9)', 'Es legal si se pagan', 'Solo importa si hay sindicato'], ok: 1, por: 'El art. 9 establece que el trabajo en sobretiempo es voluntario, salvo casos excepcionales de fuerza mayor.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '08:00', ch: 'presencial', who: null, titulo: 'La oficina del gerente general', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Piso 9 · Gerencia General', show: ['confianza', 'tiempo'],
    body: (n) => `<p>Fernando Prado, el gerente general, tiene el correo impreso y subrayado con plumón verde. Fue gerente de Finanzas antes de este cargo y piensa en hojas de cálculo, pero te contrató porque «aquí falta alguien que piense en la gente».</p><p>«${n ? n + ', ' : ''}la doctora no pide permiso, pide resultados. Tengo quince minutos antes de la reunión con la aseguradora. <mark class="clave">Pregúntame lo que necesites saber para no equivocarte</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Lo que no preguntes hoy, lo descubrirás tarde.',
    opts: [
      { id: 'porque', label: '«¿Qué hay detrás del 10 %? ¿De dónde sale la cifra?»', info: '«El banco mira el ratio de deuda sobre EBITDA en enero. Si lo pasamos, sube la tasa y nos complica la clínica de Los Olivos. El 10 % es la cifra que Rodrigo calculó para quedar con aire. No es mágica, pero es la que hay.»' },
      { id: 'base', label: '«¿El 10 % es de los costos totales o solo de personal?»', info: 'Fernando duda. «El correo dice "costos". Rodrigo lo está leyendo como 10 % de planilla, porque es lo más grande: unos 19 millones al mes. Pero el directorio no dijo eso. Buena pregunta.»' },
      { id: 'rossi', label: '«¿Cómo piensa la doctora Rossi?»', info: '«Es médica, fundó la primera clínica con su padre. Fría, pero no tonta: odia las sorpresas y respeta a quien le trae números. Ah, y es muy amiga del doctor Ugaz, el director médico. Desde el colegio.»' },
      { id: 'yo', label: '«¿Qué espera usted de mí en esto?»', info: '«Que no me traigas solo un "no se puede". Y que no me traigas una lista de despidos. Si encuentras el camino del medio, te debo una.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('base') ? 3 : 1, tiempo: -1 },
      flags: picks.includes('base') ? ['base_aclarada'] : [],
      out: picks.includes('base') ? 'Sales con un dato que nadie había mirado: el directorio pidió reducir costos, no recortar la planilla. Esa diferencia puede valer millones.' : 'Sales con contexto. Fernando ya está al teléfono con la aseguradora.',
      kusi: ['curioso', 'Entender el pedido es la mitad de la respuesta.'],
    }),
    mirada: {
      ve: 'Una gerencia de personas no empieza obedeciendo ni resistiendo: empieza entendiendo. Saber qué indicador preocupa al directorio, sobre qué base se calcula la cifra y quién influye en la decisión te permite proponer, no solo cumplir.',
      visual: { tipo: 'flujo', titulo: 'De dónde sale el 10 %', pasos: ['Caen ingresos de aseguradoras', 'El banco revisa la deuda en enero', 'Finanzas calcula el 10 %', 'El directorio lo pide', 'Gestión Humana: el rubro más grande'], aqui: 4 },
    },
  },
  {
    id: 'a2', t: '09:20', ch: 'llamada', who: 'directorio', titulo: 'La llamada de la doctora', banner: 'assets/foto/llamada.webp', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>La doctora Rossi llama directo a tu celular. No saluda.</p><p>«Usted maneja el 60 % de los costos de este grupo. ${F.has('base_aclarada') ? 'Ya sé que el correo dice "costos", no "planilla", no me lo explique.' : ''} Necesito saber hoy, no el jueves: <mark class="clave">¿Gestión Humana puede poner el 10 % sí o no?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: '«Puedo comprometerme a traerle el jueves una propuesta con números: cuánto se ahorra, en cuánto tiempo y qué riesgo tiene cada medida. Hoy no le doy una cifra que no he verificado.»',
        res: { q: 'buena', fx: { confianza: 2, etica: 3, personas: 2 }, rel: { directorio: 0 }, flags: ['plazo_datos'], cartera: { recorte: 'Compromiso: propuesta con datos el jueves de la próxima semana' },
          out: 'Silencio de tres segundos. «Datos. El jueves. Y no me traiga poesía.» Cuelga. Te tiemblan un poco las manos, pero tienes diez días hábiles para trabajar en serio.',
          pro: { ok: 'Te comprometes con un resultado verificable, no con una cifra a ciegas.', risk: 'La doctora queda impaciente: el jueves tendrás que cumplir.', info: 'Escríbele un correo corto que confirme lo que acordaron.' },
          kusi: ['animo', 'Un «sí, y así» vale más que un «sí» a ciegas.'] } },
      { id: 'b', label: '«Sí, doctora. Gestión Humana pone el 10 %. Personal es el rubro más grande y lo vamos a lograr.»',
        res: { q: 'riesgosa', fx: { confianza: 3, etica: -2, personas: -4 }, rel: { directorio: 1 }, flags: ['si_ciego'], cartera: { recorte: 'Comprometido: 10 % de la planilla (S/ 1.9 millones al mes)' },
          out: '«Eso quería escuchar.» Cuelgas y haces la cuenta: 10 % de la planilla son S/ 1.9 millones al mes. Equivale a unas 300 personas. O a sueldos que la ley no te deja tocar.',
          pro: { ok: 'La doctora queda tranquila hoy.', risk: 'Te comprometiste con una cifra que no sabes cómo lograr sin despedir o sin romper la ley.' },
          kusi: ['preocupado', '¿Y de dónde sale eso?'] } },
      { id: 'c', label: '«No, doctora. En una clínica las personas no se recortan. Que el ahorro salga de proveedores y equipos.»',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -4 }, rel: { directorio: -1 }, flags: ['rossi_cerrada'], cartera: { recorte: 'La doctora espera una propuesta… y desconfía' },
          out: '«Entonces el jueves que presente Finanzas por usted.» Cuelga. Tenías razón en algo, pero ahora quien hará los números de tu área será otra persona.',
          pro: { ok: 'Defiendes a las personas.', risk: 'Un «no» sin alternativa te saca de la mesa donde se decide.' },
          kusi: ['pensando', 'Un «no» sin propuesta no protege a nadie.'] } },
    ],
    rules: [[BP, 'Comprométete con un entregable y una fecha; no con una cifra que no has verificado.']],
    mirada: {
      ve: 'En la gerencia, la presión llega en forma de pregunta cerrada: «¿sí o no?». Responder con un compromiso claro de método y fecha no es evadir: es negarse a decidir a ciegas sobre la vida de 3,000 personas.',
      visual: { tipo: 'balanza', a: { t: 'Sí a ciegas', items: ['Calma hoy', 'Una cifra imposible', 'Despidos o ilegalidades después'] }, b: { t: 'Sí, con datos y fecha', items: ['Impaciencia hoy', 'Diez días para analizar', 'Una propuesta que se puede defender'] } },
    },
  },
  {
    id: 'a3', t: '10:40', ch: 'documento', who: null, titulo: 'Dónde mirar primero', banner: 'assets/esc/planilla.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>Doris te dejó la planilla consolidada de octubre: 3,012 personas, S/ 19.2 millones en costo laboral del mes. Al costado, una lista de «palancas» que el gerente anterior dejó en un post-it amarillo.</p><p>Jorge y su equipo pueden analizar a fondo <mark class="clave">solo tres</mark> antes del miércoles.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres palancas que Compensaciones analizará primero.', boton: 'Encargar el análisis', resumen: 'Elegiste',
    cols: ['Palanca', 'Lo que sabes hoy'],
    rows: [
      { id: 'he', cells: ['Horas extra', 'S/ 620 mil en octubre. Nadie sabe bien por qué tanto.'] },
      { id: 'rot', cells: ['Rotación de enfermería', 'Se fueron 61 enfermeras este año. Cada reemplazo tarda meses.'] },
      { id: 'aus', cells: ['Ausentismo y descansos médicos', 'Suben en las clínicas con más turnos de noche.'] },
      { id: 'cap', cells: ['Presupuesto de capacitación', 'S/ 1.4 millones al año. Fácil de cortar.'] },
      { id: 'aum', cells: ['Aumentos de 2027', 'Congelarlos ahorra rápido.'] },
      { id: 'bien', cells: ['Bienestar: aniversario, fiesta de fin de año, canasta', 'Se ve mucho, pesa poco.'] },
    ],
    score: { he: 3, rot: 3, aus: 2, cap: -1, aum: 0, bien: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, personas: q === 'buena' ? 3 : -1, tiempo: -1 },
        flags: [q === 'buena' ? 'palancas_bien' : 'palancas_faciles'], cartera: { datos: q === 'buena' ? 'Análisis: horas extra, rotación y ausentismo' : 'Análisis de lo más fácil de cortar' },
        out: q === 'buena' ? 'Le pasas la lista a Jorge. Él levanta una ceja: «Esto no es cortar, es buscar por dónde se nos va la plata». Exacto.' : 'Jorge anota sin preguntar. Lo que se corta rápido rara vez es lo que más cuesta.',
        pro: { ok: 'Miras primero lo que cuesta mucho y nadie entiende: ahí suele estar el ahorro que no duele.', risk: 'Cortar lo visible (capacitación, bienestar) ahorra poco y comunica mucho.', info: 'Pide que los datos vengan por clínica y por turno.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡A buscar dónde se escapa la plata!' : 'Lo fácil no siempre es lo que pesa.'],
      };
    },
    mirada: {
      ve: 'Las horas extra, la rotación y el ausentismo son costos escondidos: no aparecen como una línea en el presupuesto, pero se pagan cada mes. Un gerente de personas que los mide encuentra ahorros que no requieren despedir a nadie.',
      visual: { tipo: 'matriz', x: 'Facilidad de cortar', y: 'Peso en el costo', cuadrantes: ['Analizar a fondo', 'Cortar con cuidado', 'Ignorar', 'Tentador pero pequeño'], items: [['Horas extra', .4, .85], ['Rotación', .2, .75], ['Ausentismo', .3, .6], ['Aumentos 2027', .8, .55], ['Capacitación', .9, .2], ['Bienestar', .85, .1]] },
    },
  },
  {
    id: 'a4', t: '12:45', ch: 'whatsapp', who: null, titulo: 'Antes de que hable el rumor', banner: 'assets/foto2/tablet-equipo.webp', show: ['confianza', 'personas', 'etica'],
    body: () => `<p>Tus tres jefaturas todavía no saben nada. Pero el correo de la doctora fue con copia a tres gerencias, y en el piso 9 ya se habla bajito. En una clínica, los rumores viajan más rápido que las ambulancias.</p><p>Escribes en el grupo de tus jefaturas. <mark class="clave">Lo que digas hoy marca cómo llegan mañana</mark>.</p>`,
    type: 'compose', enviaA: 'jefaturas', para: 'Para: GH · Jefaturas', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué cuentas', ops: [
        { id: 'q1', t: 'El directorio pidió reducir costos 10 % para 2027. Hay que llevar una propuesta el jueves de la próxima semana.', ok: true, por: 'Lo que es, sin adornos ni dramatismo.' },
        { id: 'q2', t: 'Se vienen recortes fuertes, prepárense.', ok: false, por: 'Genera miedo sin información. Es la semilla del rumor.' },
      ] },
      { id: 'res', t: 'Reserva', ops: [
        { id: 'r1', t: 'Todavía no hay ninguna decisión. Les pido reserva hasta que tengamos datos: un rumor puede hacer mucho daño en las clínicas.', ok: true, por: 'Explicas por qué pides reserva.' },
        { id: 'r2', t: 'Que no salga de aquí o habrá consecuencias.', ok: false, por: 'Amenazar a tus jefaturas el primer día rompe la confianza que necesitas.' },
      ] },
      { id: 'cita', t: 'Siguiente paso', ops: [
        { id: 'c1', t: 'Mañana a las 8, en mi oficina, quiero escuchar qué ve cada uno desde su área.', ok: true, por: 'Los convocas a pensar, no a recibir órdenes.' },
        { id: 'c2', t: 'Mañana les reparto lo que le toca recortar a cada área.', ok: null, por: 'Claro, pero decides sin escucharlos.' },
      ] },
    ],
    res: sel => {
      const malas = ['q2', 'r2'].filter(x => Object.values(sel).includes(x)).length;
      const buenas = ['q1', 'r1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 1, personas: q === 'riesgosa' ? -2 : 2 }, rel: { equipo: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: [q === 'riesgosa' ? 'equipo_a_oscuras' : 'equipo_avisado'], cartera: { equipo: q === 'riesgosa' ? 'Jefaturas inquietas' : 'Jefaturas avisadas · reunión mañana 8:00' },
        out: q === 'buena' ? 'Tres «visto» en un minuto. Silvia responde primero; Jorge te escribe aparte. Tu equipo sabe por ti, no por el ascensor.' : q === 'riesgosa' ? 'Nadie responde en el grupo. Mariela le escribe a Silvia por privado: «¿Nos van a botar?».' : 'Tu equipo responde con «ok». Mañana llegarán con su propia lista de recortes defensivos.',
        pro: { ok: 'Tu equipo se entera por ti, con hechos y con una razón para guardar reserva.', risk: 'El silencio o el miedo dejan el espacio libre al rumor.', info: 'Cuando hay que pedir reserva, explica el porqué.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Llegaste antes que el chisme. ¡Bacán!' : 'El tono también comunica.'],
      };
    },
    rules: [[BP, 'En una crisis, tu equipo debe enterarse por ti y antes que el resto.']],
    mirada: {
      ve: 'Liderar líderes empieza por no dejarlos a oscuras. Una jefatura que se entera de una crisis por un rumor llega a defender su área; una que se entera por su gerente llega a pensar con ella.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje al grupo', txt: 'El directorio pidió reducir costos 10 % para 2027. Todavía no hay decisiones. Les pido reserva hasta tener datos. Mañana a las 8 quiero escuchar qué ve cada uno desde su área.' },
    },
  },
  {
    id: 'a5', t: '15:30', ch: 'documento', who: null, titulo: 'El borrador de Finanzas', banner: 'assets/esc/lupa.webp', lugar: 'Tu oficina · piso 7', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Rodrigo Benavides es el gerente de Finanzas más joven que ha tenido el grupo: 38 años, maestría en el extranjero y fama de no dormir. Su borrador tiene la lógica de una hoja de cálculo: todo suma.</p><p>Fernando lo quiere ver a las 4. Lo lees <mark class="clave">línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la ley o lo que debería corregirse antes de que llegue a Fernando.',
    doc: { t: 'Medidas inmediatas de personal · borrador', sub: 'Gerencia de Finanzas · para aplicar desde diciembre' },
    lines: [
      { id: 'sueldo', t: 'Reducir 8 % la remuneración de todo el personal administrativo desde el 1 de diciembre, comunicándolo por correo.', bad: LEY, why: 'La reducción inmotivada de la remuneración es un acto de hostilidad equiparable al despido (D.S. 003-97-TR, art. 30 b).' },
      { id: 'grati', t: 'Postergar la gratificación de Navidad a marzo, «por la coyuntura».', bad: LEY, why: 'La gratificación de Navidad se abona en la primera quincena de diciembre (Ley 27735, art. 5).' },
      { id: 'cese', t: 'Cese colectivo por motivos económicos de 150 trabajadores, notificado el 15 de diciembre.', bad: LEY, why: 'El cese colectivo por motivos económicos solo procede si comprende no menos del 10 % del personal y con un procedimiento que empieza informando al sindicato (D.S. 003-97-TR, art. 48). 150 de 3,012 no llega.' },
      { id: 'vac', t: 'Congelar las nuevas plazas administrativas no críticas hasta marzo.' },
      { id: 'prov', t: 'Renegociar los contratos de lavandería y alimentación con proveedores.' },
      { id: 'he', t: 'Que los jefes de servicio asignen horas extra solo «a quien no se queje», para bajar reclamos.', bad: BP, why: 'Además de ser arbitrario, el sobretiempo es voluntario (D.S. 007-2002-TR, art. 9): no se reparte como premio ni se impone como castigo.' },
      { id: 'viajes', t: 'Suspender viajes y congresos internacionales de gerencia en 2027.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -6 : 6, etica: missLey ? -2 : 3, confianza: missLey ? 0 : 2 },
      flags: [missLey ? 'borrador_suelto' : 'borrador_frenado'], cartera: { borrador: missLey ? 'Borrador llega a Fernando con medidas ilegales' : 'Borrador corregido: quedan 3 medidas viables' },
      out: missLey ? 'El borrador llega a Fernando con tus iniciales de «revisado». Lo que se te pasó ahora también es tuyo.' : 'Devuelves el borrador con tres medidas que sí se pueden aplicar y cuatro tachadas con su norma al costado. Rodrigo te escribe: «Ok. Pensé que solo iban a mirar el monto». Y luego: «Gracias, supongo».',
      pro: { ok: 'Un recorte ilegal no ahorra: se convierte en demandas, inspecciones y huelgas.', risk: 'Si firmas como revisado algo ilegal, la responsabilidad también es tuya.', info: 'Rodrigo no es el enemigo: necesita que le digas qué sí se puede.' },
      kusi: missLey ? ['preocupado', 'Eso iba a terminar en SUNAFIL.'] : ['celebra', '¡Tres palancas legales y cuatro bombas desactivadas!'],
    }),
    rules: [[LEY, 'La reducción inmotivada de la remuneración es acto de hostilidad (D.S. 003-97-TR, art. 30 b).'], [LEY, 'La gratificación de Navidad se paga en la primera quincena de diciembre (Ley 27735, art. 5).'], [LEY, 'El cese colectivo por motivos económicos exige no menos del 10 % del personal y un procedimiento (D.S. 003-97-TR, art. 48).']],
    mirada: {
      ve: 'Finanzas mira montos; Gestión Humana mira montos, personas y ley a la vez. Tu valor en esta mesa no es decir «no»: es separar lo que se puede hacer de lo que solo traslada el costo a un juzgado.',
      visual: { tipo: 'cambio', titulo: 'El borrador, antes y después', pares: [['Bajar sueldos por correo', 'Congelar plazas no críticas'], ['Postergar la gratificación', 'Renegociar proveedores'], ['Cese de 150 personas', 'Suspender viajes de gerencia']] },
      normas: [{ ley: 'D.S. 003-97-TR, art. 48', dice: 'La extinción colectiva por motivos económicos solo procede si comprende no menos del 10 % del personal y sigue un procedimiento que empieza informando al sindicato y a la Autoridad Administrativa de Trabajo.', practica: 'Un despido masivo no es una decisión de Excel: tiene requisitos, plazos y una mesa con el sindicato.' }],
    },
  },
  {
    id: 'a6', t: '18:20', ch: 'presencial', who: null, titulo: 'Doris y la terapia', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Antesala de tu oficina', show: ['personas', 'tiempo', 'confianza'],
    body: () => `<p>Doris Ccahuana lleva doce años como asistente de la gerencia. Sabe dónde está cada papel y quién le debe un favor a quién. Su hijo Mateo tiene autismo y los lunes a las siete tiene terapia en Breña.</p><p>Te mira con la cartera ya en el hombro: «Si quiere, me quedo a preparar las carpetas para mañana. <mark class="clave">Puedo llevar a Mateo más tarde</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Vete tranquila. Mañana a las 7 las armamos juntas; yo imprimo hoy lo urgente.»',
        res: { q: 'buena', fx: { personas: 4, tiempo: -2, confianza: 2 }, flags: ['doris_cuidada'],
          out: 'Doris sonríe con alivio. Te quedas imprimiendo tú misma, peleando con la impresora del piso 7 que atasca cada diez hojas. A las 7:15 sale el último juego.',
          pro: { ok: 'Lo que decides en lo pequeño es lo que tu equipo cree de ti en lo grande.', info: 'Una gerencia que pide cuidar a las personas empieza por su propia antesala.' },
          kusi: ['feliz', 'Así se predica con el ejemplo.'] } },
      { id: 'b', label: '«Te lo agradezco. Quédate una hora: mañana a las 8 empieza todo.»',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -3 },
          out: 'Doris se queda. A las 7:40 la escuchas llamar a la terapeuta para disculparse. Las carpetas quedan perfectas.',
          pro: { ok: 'Ganas una hora de trabajo.', risk: 'Tu equipo toma nota de que la urgencia está por encima de todo.' },
          kusi: ['pensando', 'Las carpetas quedaron. ¿Y Mateo?'] } },
    ],
    mirada: {
      ve: 'En las semanas de crisis, la gerencia de personas es observada con lupa por su propio equipo. Cuidar el tiempo de quien cuida a otro no es un favor: es la cultura que después vas a pedirle al resto del grupo.',
    },
  },
  {
    id: 'a7', t: '19:00', ch: 'correo', who: null, titulo: 'El correo de cierre', banner: 'assets/esc/reloj.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Fernando Prado · Gerencia General', to: 'Gerencia de Gestión Humana', asunto: 'Para cerrar el día' },
    body: (n, F) => `<p>${F.has('borrador_frenado') ? 'Vi tus correcciones al borrador de Rodrigo. Bien.' : 'Rodrigo me pasó su borrador.'} Antes de irte, mándame en tres líneas <mark class="clave">tu plan para los próximos diez días</mark>. Lo voy a reenviar a la doctora.</p><p>F.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Plan por etapas: datos de costos ocultos el miércoles, escucha a jefaturas y sindicato esta semana, propuesta con escenarios el miércoles de la próxima.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3 }, flags: ['plan_etapas'], cartera: { recorte: 'Plan de diez días enviado' }, responde: 'Fernando: 1) Miércoles: costos de horas extra, rotación y ausentismo por clínica. 2) Esta semana: escuchar a jefaturas, operaciones y sindicato antes de proponer. 3) Miércoles de la próxima: propuesta con tres escenarios, ahorro, plazo y riesgo de cada uno. Jueves: directorio.',
          out: 'Fernando responde con un pulgar. Diez minutos después reenvía tu correo a la doctora sin cambiar una coma.', kusi: ['celebra', 'Diez días con mapa. ¡Así!'] } },
      { id: 'b', label: 'Que lo estás trabajando con tu equipo y que el jueves habrá propuesta.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Fernando: lo estoy trabajando con mi equipo. El jueves de la próxima semana tendremos la propuesta.',
          out: 'Fernando responde: «Eso no lo puedo reenviar». Te vas sin saber si la doctora se enteró de algo.', kusi: ['pensando', 'Sin etapas, no hay plan.'] } },
    ],
    mirada: { ve: 'Un plan de diez días en tres líneas tranquiliza más que cualquier promesa. Le dice al directorio qué vas a saber, cuándo y qué vas a decidir con eso.' },
  },
];
