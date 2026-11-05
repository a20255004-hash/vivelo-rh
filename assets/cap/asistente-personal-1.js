// Analista de Administración de Personal · Capítulo 1 · «De 300 a 1,200» · Semana 1, lunes.
// Hilo de las dos semanas: la campaña de uva lleva la planilla de 300 a 1,200 personas en tres semanas.
// Normas citadas: Ley 31110 (régimen laboral agrario) y D.S. 005-2021-MIDAGRI; D.S. 018-2007-TR (planilla
// electrónica y T-Registro); D.S. 001-98-TR (boletas); D.S. 007-2002-TR (sobretiempo); D.S. 015-2026-TR (RMV S/ 1,230).

export const CAP = {
  n: 1, titulo: 'De 300 a 1,200', dia: 'Semana 1, lunes', foto: 'assets/foto2/revisan.webp',
  lugar: 'Agrícola Valle Verde · Valle de Ica',
  inicio: '06:40', fin: '19:30', cierreHora: '19:10',
  apertura: 'Valle de Ica, plena campaña de uva. Hoy empiezas como analista de Administración de Personal en Agrícola Valle Verde.', boton: 'Entrar a la oficina de Planillas',
  kusi: 'En el campo se empieza temprano. ¡Café en mano y dale!',
  lead: 'Entendiste el ciclo de la planilla, revisaste el contrato de campaña con la ley en la mano, defendiste el alta del primer día y escuchaste a Yolanda antes de prometerle nada.',
  reflexion: '¿Qué número de hoy te hizo pensar en una persona concreta?',
  siguiente: { n: 2, titulo: 'Altas en masa', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'altas', p: 'Altas de campaña', j: 'Mónica · Planillas', d: 0, e: '900 ingresos en 3 semanas' },
  { id: 'contrato', p: 'Contrato de campaña', j: 'Mónica · Legal', d: 0, e: 'Plantilla de 2025' },
  { id: 'marcacion', p: 'Relojes de marcación', j: 'Joel · TI', d: 0, e: 'Fundo 3 con fallas' },
  { id: 'reclamos', p: 'Reclamos de la campaña pasada', j: 'Mónica · Planillas', d: 0, e: '14 sin responder' },
  { id: 'cierre', p: 'Cierre de quincena', j: 'Mónica · Planillas', d: 0, e: 'Jueves de esta semana' },
];

export const FUTURO = {
  contrato_corregido: ['El contrato de campaña se corrigió antes de imprimir 900 copias.', 'Lo verás en el capítulo 2, cuando lleguen las altas en masa.'],
  contrato_viejo: ['Se imprimieron contratos con una remuneración diaria por debajo del mínimo.', 'Volverá en el capítulo 5, cuando alguien lo note en su boleta.'],
  alta_dia_uno: ['Acordaste con Raúl que nadie entra al campo sin alta.', 'Raúl lo recordará en el capítulo 2.'],
  sin_alta: ['Dejaste que 60 personas trabajen sin alta en T-Registro.', 'Una inspectora preguntará por esto en el capítulo 7.'],
  raul_molesto: ['Raúl se quedó con la idea de que Planillas «frena la cosecha».', 'Capítulo 3.'],
  yolanda_escuchada: ['Yolanda sabe que revisaste su caso y cuándo tendrá respuesta.', 'Te buscará en el capítulo 5.'],
  yolanda_promesa: ['Le prometiste a Yolanda un pago que no habías verificado.', 'Capítulo 5.'],
  joel_aliado: ['Joel te mandará la exportación del reloj cada mañana.', 'Te salvará en el capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
};

export const WSP = [
  { chat: 'grupo', t: '06:45', de: 'Mónica', txt: 'Bienvenida al equipo 🍇 Hoy empieza la temporada alta de verdad.' },
  { chat: 'grupo', t: '06:52', de: 'Joel', txt: 'Buenos días. Aviso desde ya: el reloj del fundo 3 está en «modo misterio» otra vez 🙃' },
  { chat: 'raul', t: '10:58', de: 'Ing. Raúl', txt: 'Planillas, mañana necesito 60 cosechadores más en el fundo 2. Voy a su oficina.' },
  { chat: 'monica', t: '14:20', de: 'Mónica', txt: 'Bien con el contrato. Legal ya lo está corrigiendo 👌', si: 'contrato_corregido' },
  { chat: 'raul', t: '15:05', de: 'Ing. Raúl', txt: 'Ok. Mañana a las 6:00 mando a los 60 a su mesa en el fundo 2. Que sea rápido.', si: 'alta_dia_uno' },
  { chat: 'raul', t: '15:05', de: 'Ing. Raúl', txt: 'Planillas siempre frenando la cosecha. Ya hablé con gerencia.', si: 'raul_molesto' },
  { chat: 'yolanda', t: '17:40', de: 'Yolanda', txt: 'Señorita, gracias por anotar mi caso. Espero su llamada el miércoles 🙏', si: 'yolanda_escuchada' },
  { chat: 'joel', t: '18:15', de: 'Joel', txt: 'Listo, te dejé la exportación del reloj en la carpeta. Mañana a las 5:30 llega sola 💪', si: 'joel_aliado' },
];

export const CORREOS = [
  { t: '06:50', de: 'Mónica Uribe', para: 'Analista de Administración de Personal', asunto: 'Tu primera semana', html: '<p>¡Bienvenida! Te cuento estas dos semanas en una línea: <b>empezamos a pasar de 300 a 1,200 personas</b>.</p><p>Semana 1: altas, marcaciones y el primer cierre de quincena.<br>Semana 2: liquidaciones, boletas digitales, la PLAME y, si tenemos mala suerte, SUNAFIL.</p><p>Aquí un error no es un número: es el sueldo de una familia.<br>Mónica</p>' },
  { t: '12:30', de: 'Banco del Valle · Empresas', para: 'Planillas Valle Verde', asunto: 'Apertura masiva de cuentas sueldo', html: '<p>Podemos abrir cuentas sueldo en lote si nos envían DNI, nombres completos y fecha de nacimiento en el formato adjunto. Plazo de apertura: 72 horas.</p>' },
];

export const QUIZ = [
  { q: '¿Qué ley regula hoy el régimen laboral agrario en el Perú?', ops: ['Ley 31110', 'Ley 27360, sin cambios', 'D.Leg. 728, sin excepciones', 'Ley 28518'], ok: 0, por: 'La Ley 31110 (2020) y su reglamento, el D.S. 005-2021-MIDAGRI, regulan el régimen laboral agrario.' },
  { q: '¿Cuándo se registra el alta de un trabajador en el T-Registro?', ops: ['Al final del mes', 'Dentro del día en que empieza a trabajar', 'Cuando pasa el periodo de prueba', 'Cuando se presenta la PLAME'], ok: 1, por: 'SUNAT indica que el alta se registra dentro del día de ingreso del trabajador.' },
  { q: 'En el régimen agrario, la BETA es…', ops: ['Un bono por meta de jabas', 'Una bonificación no remunerativa equivalente al 30 % de la RMV', 'Un descuento por faltas', 'Lo mismo que la gratificación'], ok: 1, por: 'La Bonificación Especial por Trabajo Agrario es no remunerativa y equivale al 30 % de la RMV (proporcional si la jornada es menor).' },
  { q: 'Las horas extra trabajadas, ¿se pueden compensar con descanso?', ops: ['Sí, si lo decide el jefe', 'Sí, solo si el trabajador y el empleador lo acuerdan', 'No, nunca', 'Solo en campaña'], ok: 1, por: 'El D.S. 007-2002-TR permite compensar el sobretiempo con descanso solo por acuerdo entre las partes.' },
  { q: 'Una trabajadora reclama un pago de la campaña pasada. ¿Qué haces primero?', ops: ['Le prometes pagarle el viernes', 'Revisas su liquidación y le das una fecha para responder', 'Le dices que ya prescribió', 'La mandas a SUNAFIL'], ok: 1, por: 'Verifica antes de prometer, y dale a la persona una fecha concreta de respuesta.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '06:55', ch: 'presencial', who: 'monica', titulo: 'El calendario de la campaña', banner: 'assets/esc/planilla.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n) => `<p>La oficina de Planillas es un contenedor con aire acondicionado al borde del fundo 1. Afuera se oye el motor de los buses que traen a las cuadrillas desde Ica y Pisco.</p><p>Mónica pega un calendario en la pared con plumón rojo: «Bienvenida${n ? ', ' + n : ''}. En tres semanas pasamos de 300 a <mark class="clave">1,200 personas</mark>. Si no entiendes el ciclo completo, te va a comer la campaña».</p><p>Te da seis tarjetas: «Ordénalas. Así trabaja cualquier planilla del Perú, sea de 10 o de 10 mil personas».</p>`,
    type: 'secuencia', prompt: 'Ordena el ciclo de la planilla de un mes. Usa las flechas.', boton: 'Mostrarle el calendario a Mónica',
    items: [
      { id: 'alta', t: 'Alta en T-Registro el día que la persona empieza', por: 'Sin alta, la persona trabaja «en negro» aunque tenga contrato.' },
      { id: 'asis', t: 'Registro diario de asistencia en el reloj', por: 'Es la base de faltas, tardanzas y horas extra.' },
      { id: 'inc', t: 'Cierre de incidencias: faltas, horas extra, descansos médicos', por: 'Se cierra con fecha de corte para poder calcular.' },
      { id: 'calc', t: 'Cálculo de la planilla y revisión', por: 'Remuneración, BETA, aportes y descuentos.' },
      { id: 'pago', t: 'Pago en cuenta sueldo', por: 'En la fecha pactada, sin excusas.' },
      { id: 'bol', t: 'Entrega de boletas y declaración en la PLAME', por: 'La boleta va hasta el tercer día hábil del pago; la PLAME se declara al mes siguiente.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 },
        rel: { monica: q === 'buena' ? 1 : 0 }, flags: [q === 'buena' ? 'ciclo_claro' : 'ciclo_dudas'],
        out: q === 'buena' ? 'Mónica marca el calendario: «Exacto. Y en campaña todo eso pasa cada quince días, con cuatro veces más gente».' : 'Mónica mueve dos tarjetas. «Fíjate: si el cierre de incidencias va tarde, todo lo que viene después se corre.»',
        pro: { ok: 'Ver el ciclo completo te permite saber qué atraso pega en el sueldo de alguien.', risk: 'Una falla en la asistencia no se ve hasta el cálculo… y ahí ya es tarde.', info: 'Pregunta cuál es la fecha de corte de incidencias: es la que más se incumple.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Ya tienes el mapa del mes!' : 'Casi. El cierre manda.'],
      };
    },
    rules: [[LEY, 'El alta en T-Registro se registra dentro del día de ingreso del trabajador (SUNAT, D.S. 018-2007-TR).'], [LEY, 'La boleta de pago se entrega a más tardar el tercer día hábil siguiente al pago (D.S. 001-98-TR).']],
    mirada: {
      ve: 'Una planilla no es un cálculo de fin de mes: es una cadena que empieza el día en que alguien entra al fundo. Quien entiende la cadena sabe dónde mirar cuando algo falla.',
      visual: { tipo: 'flujo', titulo: 'El ciclo de la planilla', pasos: ['Alta', 'Asistencia', 'Incidencias', 'Cálculo', 'Pago', 'Boleta y PLAME'] },
    },
  },
  {
    id: 'b2', t: '08:10', ch: 'documento', who: null, titulo: 'El contrato de campaña', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Mónica te pasa la plantilla del contrato de campaña: «Es la del año pasado. Imprimimos 900 copias mañana. <mark class="clave">Revísala con la RMV nueva</mark>, que subió en octubre».</p><p>Sabes que la remuneración mínima vital es S/ 1,230 desde el 1 de octubre de 2026.</p>`,
    type: 'flag', prompt: 'Marca las cláusulas que no cumplen la ley o que deberían corregirse antes de imprimir.',
    doc: { t: 'Contrato de trabajo de campaña · régimen agrario', sub: 'Plantilla 2025 · Agrícola Valle Verde S.A.C.' },
    lines: [
      { id: 'reg', t: 'El trabajador se sujeta al régimen laboral agrario de la Ley 31110.' },
      { id: 'rd', t: 'Remuneración diaria: S/ 49.00, que incluye la parte proporcional de CTS y gratificaciones.', bad: LEY, why: 'Con la RMV de S/ 1,230, la remuneración básica diaria es S/ 41.00; sumando CTS (9.72 %) y gratificaciones (16.66 %) la remuneración diaria mínima ronda S/ 51.82. S/ 49 queda por debajo.' },
      { id: 'beta', t: 'La BETA se pagará solo a quienes cumplan la meta diaria de jabas.', bad: LEY, why: 'La BETA es una bonificación legal equivalente al 30 % de la RMV. No depende de metas de productividad; solo es proporcional si la jornada es menor.' },
      { id: 'he', t: 'Las horas extra se compensarán con descanso, a criterio del jefe de fundo.', bad: LEY, why: 'El sobretiempo se paga con sobretasa o se compensa con descanso solo si trabajador y empleador lo acuerdan (D.S. 007-2002-TR).' },
      { id: 'pens', t: 'El trabajador elegirá entre AFP y ONP según el boletín informativo entregado.' },
      { id: 'pago', t: 'El pago se realizará quincenalmente mediante abono en cuenta sueldo.' },
      { id: 'exam', t: 'El examen médico de ingreso será descontado de la primera quincena.', bad: LEY, why: 'Los exámenes médicos ocupacionales los asume el empleador (Ley 29783 y su reglamento).' },
      { id: 'opc', t: 'El trabajador puede pedir, dentro de los primeros días del vínculo, que CTS y gratificaciones se le paguen en sus fechas semestrales.', duda: 'Es correcto: la norma agraria permite esta opción si se comunica al inicio.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Firmas el visto bueno. El miércoles se imprimen 900 contratos con cláusulas que no se sostienen.' : `Le marcas a Mónica ${hitsLey} cláusulas. Ella resopla: «Eso venía de antes de la RMV nueva». Llama a Legal y paran la impresión.`,
      flags: [missLey ? 'contrato_viejo' : 'contrato_corregido'], rel: { monica: missLey ? 0 : 1 },
      cartera: { contrato: missLey ? 'Plantilla aprobada sin cambios' : 'Plantilla en corrección por Legal' },
      pro: { ok: 'Revisar una plantilla antes de imprimir 900 copias es la tarea más rentable del día.', risk: 'Una cláusula ilegal multiplicada por 900 contratos es un problema masivo.', info: 'Cada vez que sube la RMV, revisa todos los montos que dependen de ella: remuneración diaria, BETA y asignación familiar.' },
      kusi: missLey ? ['preocupado', 'Uy… ese contrato tenía números viejos.'] : ['celebra', '¡Qué bacán! Salvaste 900 contratos.'],
    }),
    rules: [[LEY, 'Ley 31110 y D.S. 005-2021-MIDAGRI: la remuneración diaria agraria incluye CTS y gratificaciones, y existe la BETA (30 % de la RMV).'], [LEY, 'La RMV es S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).']],
    mirada: {
      ve: 'En planillas, las normas se vuelven fórmulas. Cuando la RMV cambia, cambian en cadena la remuneración diaria agraria, la BETA y la asignación familiar. Una plantilla vieja es una multa esperando su turno.',
      visual: { tipo: 'cambio', titulo: 'De la plantilla 2025 a una plantilla correcta', pares: [['S/ 49.00 diarios', 'Al menos S/ 51.82 con la RMV de S/ 1,230'], ['BETA según meta', 'BETA legal: 30 % de la RMV'], ['Horas extra a criterio del jefe', 'Sobretasa o descanso pactado'], ['Examen médico descontado', 'Examen médico a cargo de la empresa']] },
      normas: [
        { ley: 'Ley 31110, régimen laboral agrario, y D.S. 005-2021-MIDAGRI', dice: 'La remuneración diaria se calcula sobre la RMV e incluye la proporción de CTS (9.72 %) y gratificaciones (16.66 %). Además existe la BETA, no remunerativa, del 30 % de la RMV.', practica: 'Si el contrato fija un monto menor al mínimo, cada boleta de la campaña sale mal.' },
        { ley: 'D.S. 007-2002-TR, jornada y sobretiempo', dice: 'El trabajo en sobretiempo se paga con sobretasa; solo puede compensarse con descanso si ambas partes lo acuerdan.', practica: '«A criterio del jefe» no es un acuerdo.' },
      ],
    },
  },
  {
    id: 'b3', t: '09:40', ch: 'documento', who: null, titulo: '900 personas, una mesa', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Oficina de Planillas', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: () => `<p>En tu bandeja hay cinco frentes abiertos. Hoy solo te da el tiempo para <mark class="clave">dos</mark>, y el primer grupo grande de ingresos llega mañana.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos frentes con los que vas a empezar.', boton: 'Empezar por aquí', resumen: 'Empezaste por',
    cols: ['Frente', 'Por qué importa'],
    rows: [
      { id: 'check', cells: ['Un checklist de datos por ingreso: DNI, dirección, sistema de pensiones, cuenta', 'Sin datos completos no hay alta ni pago'] },
      { id: 'banco', cells: ['Mandar al banco el lote de cuentas sueldo de los primeros 200', 'El banco demora 72 horas'] },
      { id: 'bajas', cells: ['Revisar 40 bajas de la campaña pasada que siguen activas en T-Registro', 'Gente que figura trabajando sin estarlo'] },
      { id: 'afiche', cells: ['Diseñar un afiche de bienvenida para el comedor', 'Se ve bonito'] },
      { id: 'excel', cells: ['Rehacer el Excel de Mónica con colores nuevos', 'Lo tuyo se ve más moderno'] },
    ],
    score: { check: 3, banco: 3, bajas: 2, afiche: -1, excel: -2 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: picks.includes('banco') ? 4 : -2, calidad: picks.includes('check') ? 4 : 0, cumplimiento: picks.includes('bajas') ? 3 : 0 },
        cartera: { altas: picks.includes('check') ? 'Checklist de ingreso listo' : 'Sin checklist todavía' },
        out: picks.includes('banco') ? 'A las 11:00 el lote sale al banco. Si todo va bien, el primer pago no será en efectivo bajo un toldo.' : 'Avanzas, pero el banco necesita 72 horas y ya es lunes.',
        pro: { ok: 'Atacas primero lo que tiene plazo externo (el banco) y lo que evita errores en cadena (los datos).', risk: 'Rehacer herramientas que funcionan es tentador cuando uno es nuevo.', info: 'Pregunta a Mónica qué falló la campaña pasada: suele repetirse.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Lo que tiene plazo, primero. ¡Bien!' : '¿Qué tenía fecha límite?'],
      };
    },
    rules: [[BP, 'En campaña, prioriza lo que depende de terceros con plazo y lo que evita errores masivos.']],
    mirada: {
      ve: 'Con 900 ingresos, cada minuto que ahorras en el diseño del proceso se multiplica por 900. Por eso una profesional de planillas empieza por los datos y por los plazos que no controla.',
      visual: { tipo: 'matriz', x: 'Esfuerzo hoy', y: 'Impacto en el primer pago', cuadrantes: ['Hazlo hoy', 'Empieza hoy', 'Si sobra tiempo', 'Para después'], items: [['Checklist de datos', .35, .9], ['Lote al banco', .25, .85], ['Bajas pendientes', .5, .55], ['Afiche', .4, .1], ['Excel nuevo', .85, .12]] },
    },
  },
  {
    id: 'b4', t: '11:05', ch: 'presencial', who: 'raul', titulo: '«Los papeles después»', banner: 'assets/foto/supervisa.webp', show: ['cumplimiento', 'personas', 'confianza'],
    body: () => `<p>El ingeniero Raúl entra con la radio en la mano y tierra hasta las rodillas. Afuera, una camioneta lo espera con el motor prendido.</p><p>«Mañana necesito 60 cosechadores más en el fundo 2. La uva no espera. <mark class="clave">Que entren a cosechar y los papeles los ven después</mark>, en la semana.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle una mesa de registro a las 6:00 en el fundo 2: quien tenga DNI y datos completos entra con alta ese mismo día.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 3, tiempo: -2 }, rel: { raul: 0 }, flags: ['alta_dia_uno'], cartera: { altas: 'Mesa de registro en el fundo 2' },
          envia: ['raul', 'Ingeniero, mañana a las 6:00 estaremos con una mesa en el fundo 2. Quien llegue con DNI entra con alta el mismo día. Así nadie trabaja sin seguro. 👍'],
          out: 'Raúl calcula en voz alta: «Veinte minutos por persona es mucho». Le dices que con el checklist serán cinco. Acepta, de mala gana.',
          pro: { ok: 'Resuelves la necesidad de Raúl sin que nadie trabaje sin alta ni seguro.', risk: 'Te comprometiste a una velocidad: si la mesa se demora, perderás credibilidad.', info: 'Lleva una impresora portátil y un plan B si se cae la señal.' },
          kusi: ['animo', '¡Cosecha y ley al mismo tiempo! Se puede.'] } },
      { id: 'b', label: 'Aceptar: la uva es la prioridad, la gente está necesitada y en una semana igual se regulariza a todos con fecha de ingreso correcta.',
        res: { q: 'riesgosa', fx: { cumplimiento: -7, etica: -3, tiempo: 3 }, rel: { raul: 1 }, flags: ['sin_alta'],
          out: 'Raúl sonríe por primera vez. Mañana 60 personas cosecharán sin alta, sin EsSalud y sin seguro complementario de trabajo de riesgo.',
          pro: { ok: 'Raúl queda contento y la uva se cosecha.', risk: 'Si alguien se accidenta mañana, no tiene cobertura. Y registrar el alta tarde es una infracción.' },
          kusi: ['preocupado', '¿Y si alguien se lastima mañana?'] } },
      { id: 'c', label: 'Decirle que no se puede contratar tan rápido.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -2, confianza: -3 }, rel: { raul: -1 }, flags: ['raul_molesto'],
          out: '«Entonces dígale usted a gerencia por qué se pudrió la uva», responde, y se va dando un portazo.',
          pro: { ok: 'Proteges el cumplimiento.', risk: 'Un «no» sin alternativa convierte a Planillas en el enemigo de la cosecha.', info: 'La alternativa era acelerar el registro, no frenar el ingreso.' },
          kusi: ['pensando', 'Bien el fondo, pero faltó el «cómo sí».'] } },
    ],
    rules: [[LEY, 'El alta se registra dentro del día de ingreso; trabajar sin alta deja a la persona sin cobertura de salud.'], [POL, 'En Valle Verde nadie ingresa al fundo sin credencial de campaña emitida por Planillas.']],
    mirada: {
      ve: 'El jefe de fundo no está contra la ley: está contra el tiempo. Una profesional de planillas convierte la obligación (el alta del primer día) en un proceso rápido, y así deja de ser «la que frena».',
      visual: { tipo: 'balanza', a: { t: 'Papeles después', items: ['La uva se cosecha mañana', 'Raúl contento'] }, b: { t: 'Mesa de registro a las 6:00', items: ['Alta el mismo día', 'Seguro desde la primera hora', 'Cero multas por alta tardía'] } },
      normas: [{ ley: 'D.S. 018-2007-TR y normas del T-Registro (SUNAT)', dice: 'El empleador registra el alta del trabajador dentro del día en que empieza a prestar servicios.', practica: 'Una semana de «papeles después» son 60 personas sin cobertura durante siete días.' }],
    },
  },
  {
    id: 'b5', t: '13:15', ch: 'presencial', who: 'yolanda', titulo: 'Yolanda y su boleta', banner: 'assets/esc/dudas.webp', lugar: 'Ventanilla de Planillas', show: ['personas', 'etica', 'calidad'],
    body: () => `<p>A la hora del almuerzo se forma una fila en la ventanilla. Yolanda Quispe, en su tercera campaña, pone sobre el mostrador una boleta doblada en cuatro.</p><p>«Señorita, en la campaña pasada <mark class="clave">no me pagaron mis vacaciones truncas</mark>. Ya vine tres veces. Si esta vez reclamo, ¿me van a volver a llamar el próximo año?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Anotar su caso con su DNI, buscar su liquidación y comprometerte a darle una respuesta el viernes.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, tiempo: -2 }, rel: { yolanda: 1 }, flags: ['yolanda_escuchada'], cartera: { reclamos: '15 reclamos registrados con fecha de respuesta' },
          out: 'Buscas en el sistema: su liquidación de marzo no incluye vacaciones truncas. Le dices que lo revisarás con Mónica y le darás respuesta el miércoles. Yolanda dobla su boleta otra vez, ahora más despacio.',
          pro: { ok: 'Registras, verificas y das una fecha. Y le dejas claro que reclamar no afecta su próxima contratación.', risk: 'Ahora tienes que cumplir el miércoles.', info: 'Si una liquidación falló, revisa si es un caso aislado o un error de todas las liquidaciones de marzo.' },
          kusi: ['celebra', 'Yolanda se fue con una fecha y sin miedo. ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle que no se preocupe, que el miércoles se le paga sin falta, porque se nota que tiene razón y ya vino tres veces.',
        res: { q: 'riesgosa', fx: { personas: 2, etica: -3, calidad: -4 }, rel: { yolanda: 1 }, flags: ['yolanda_promesa'],
          out: 'Yolanda se va aliviada. Tú todavía no sabes cuánto se le debe, si se le debe, ni quién tiene que aprobar el pago.',
          pro: { ok: 'Yolanda se siente escuchada hoy.', risk: 'Una promesa sin verificar, si no se cumple, destruye la confianza que querías construir.' },
          kusi: ['preocupado', 'Prometiste algo que no depende solo de ti…'] } },
      { id: 'c', label: 'Pedirle que deje su reclamo por escrito en mesa de partes.',
        res: { q: 'aceptable', fx: { personas: -1, cumplimiento: 2 },
          out: 'Yolanda mira la fila detrás de ella y se va sin escribir nada. Es la cuarta vez que viene.',
          pro: { ok: 'Dejar constancia es correcto.', risk: 'Para alguien que trabaja de 6 a 3 en el campo, «por escrito» puede ser otra forma de decir «no».', info: 'Podías llenar tú el registro con ella en dos minutos.' },
          kusi: ['triste', 'El canal formal también tiene que ser fácil.'] } },
    ],
    rules: [[BP, 'Verifica antes de prometer y da siempre una fecha concreta de respuesta.'], [LEY, 'Tomar represalias contra quien reclama sus derechos laborales es ilegal.']],
    mirada: {
      ve: 'Detrás de la pregunta de Yolanda hay otra: «¿reclamar me va a costar el trabajo?». En campañas agrícolas ese miedo es real. Una profesional de planillas responde las dos preguntas: la del dinero y la del miedo.',
      visual: { tipo: 'linea', titulo: 'Cómo se atiende un reclamo de pago', hitos: [['Hoy', 'Registrar con DNI y detalle'], ['Mañana', 'Revisar la liquidación'], ['Miércoles, 11:00', 'Validar con la jefa'], ['Miércoles, tarde', 'Responder, con o sin pago']] },
    },
  },
  {
    id: 'b6', t: '16:10', ch: 'whatsapp', who: null, titulo: 'El reloj del fundo 3', banner: 'assets/esc/reloj.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>El reloj de marcación del fundo 3 solo se descarga los viernes. Si falla un martes, nadie se entera hasta el cierre. Joel es el único que sabe cómo sacar los datos.</p><p>Le escribes para pedirle algo que te va a salvar el mes.</p>`,
    type: 'compose', enviaA: 'joel', para: 'Para: Joel Ramírez · Soporte de TI', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Saludo', ops: [
        { id: 's1', t: 'Hola Joel, soy la nueva analista de Planillas.', ok: true, por: 'Te presentas: Joel todavía no te conoce.' },
        { id: 's2', t: 'Joel, urgente:', ok: false, por: 'Todo le llega a Joel como urgente. Así no se distingue.' },
      ] },
      { id: 'pedido', t: 'El pedido', ops: [
        { id: 'p1', t: '¿Se podría programar que el reloj del fundo 3 exporte las marcaciones cada mañana a la carpeta de Planillas?', ok: true, por: 'Pides un cambio de proceso, no un favor diario.' },
        { id: 'p2', t: '¿Me mandas las marcaciones del fundo 3 todos los días?', ok: null, por: 'Funciona, pero depende de que Joel se acuerde cada día.' },
        { id: 'p3', t: 'Ese reloj siempre falla, ¿no lo pueden cambiar?', ok: false, por: 'Suena a queja y no resuelve nada esta semana.' },
      ] },
      { id: 'porque', t: 'El porqué', ops: [
        { id: 'r1', t: 'Así detectamos fallas el mismo día y no a fin de quincena, cuando ya afectan el pago.', ok: true, por: 'Explicas el impacto: Joel entiende para qué sirve su trabajo.' },
        { id: 'r2', t: 'Mónica me lo pidió.', ok: false, por: 'Usar a la jefa como escudo no construye relación.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Si te sirve, mañana a las 8:00 paso por tu oficina y lo vemos juntos.', ok: true, por: 'Ofreces tu tiempo y una hora concreta.' },
        { id: 'c2', t: 'Gracias 🙏', ok: null, por: 'Amable, pero deja todo en manos de Joel.' },
      ] },
    ],
    res: sel => {
      const buenas = ['s1', 'p1', 'r1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 4 : 0, tiempo: sel.pedido === 'p1' ? 3 : 0 },
        rel: { joel: q === 'buena' ? 1 : 0 }, flags: q === 'buena' ? ['joel_aliado'] : [],
        cartera: { marcacion: q === 'buena' ? 'Exportación diaria acordada con TI' : 'Descarga semanal, como siempre' },
        out: q === 'buena' ? 'Joel responde: «Nadie me lo había pedido así. Hoy lo programo». Un problema de cada quincena acaba de cambiar.' : 'Joel responde: «Ok, veo qué puedo hacer». Probablemente lo olvide pasado mañana.',
        pro: { ok: 'Pedir un cambio de proceso, con el porqué, suele lograr más que un favor.', risk: 'Si TI no entiende para qué sirve el dato, lo prioriza como cualquier pedido.', info: 'Pregunta también si el reloj guarda las marcaciones cuando se va la luz.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Te ganaste un aliado en TI!' : 'Joel necesitaba saber para qué.'],
      };
    },
    rules: [[LEY, 'El empleador debe llevar un registro de control de asistencia (D.S. 004-2006-TR).'], [BP, 'Pide cambios de proceso explicando su impacto, no favores sueltos.']],
    mirada: {
      ve: 'Muchos errores de planilla nacen lejos de Planillas: en un reloj, en un supervisor, en un Excel. Una profesional construye alianzas con quienes generan los datos antes de que fallen.',
      visual: { tipo: 'mensaje', titulo: 'Un pedido que cambia un proceso', txt: 'Hola Joel, soy la nueva analista de Planillas. ¿Se podría programar que el reloj del fundo 3 exporte las marcaciones cada mañana a la carpeta de Planillas? Así detectamos fallas el mismo día y no a fin de quincena. Si te sirve, mañana a las 8:00 paso y lo vemos juntos.' },
    },
  },
  {
    id: 'b7', t: '18:40', ch: 'correo', who: null, titulo: 'Lo que le dices a Mónica', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad', 'etica'],
    mail: { from: 'Mónica Uribe · Jefa de Planillas', to: 'Analista de Administración de Personal', asunto: '¿Cómo te fue?' },
    body: () => `<p>Antes de irte, cuéntame en corto cómo quedó el día y <mark class="clave">qué te preocupa para mañana</mark>. Llegan 200.</p><p>Mónica</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Avances, un riesgo para mañana y lo que necesitas de ella.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { monica: 1 }, responde: 'Mónica: hoy salió el lote de cuentas al banco y armé el checklist de ingreso. Riesgo para mañana: el 40 % de los 200 aún no tiene datos completos. Necesito: dos personas para la mesa de registro en el fundo 2 a las 6:00.',
          out: 'Mónica responde en cinco minutos: «Te doy a Joel y a mí misma. Buen reporte».', pro: { ok: 'Un riesgo dicho hoy es un problema resuelto mañana.' }, kusi: ['feliz', 'Avisar a tiempo también es trabajar.'] } },
      { id: 'b', label: 'Que todo salió bien y que mañana sigues.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Mónica: todo bien por aquí, mañana seguimos 💪',
          out: 'Mónica responde con un pulgar. Mañana descubrirá que faltaban datos de 80 personas.', pro: { ok: 'Transmites calma.', risk: 'Esconder un riesgo para no preocupar a la jefa la deja sin tiempo para ayudarte.' }, kusi: ['pensando', '¿De verdad todo salió bien?'] } },
    ],
    rules: [[BP, 'En un reporte diario, el riesgo vale más que el avance.']],
    mirada: {
      ve: 'Las jefas de planillas viven anticipando el cierre. Lo más útil que puedes darles no es tranquilidad: es información a tiempo para decidir.',
      visual: { tipo: 'mensaje', titulo: 'Un reporte con riesgo y pedido', txt: 'Hoy: lote de cuentas al banco y checklist de ingreso. Riesgo: el 40 % de los 200 de mañana no tiene datos completos. Necesito: dos personas para la mesa de registro a las 6:00.' },
    },
  },
];
