// Asistente de Planillas · Capítulo 4 · «El error» · Semana 1, jueves.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - Ley 27240 (modificada por la Ley 28731): al término del posnatal, la madre trabajadora tiene derecho a una hora diaria de
//   permiso por lactancia hasta que su hijo tenga un año. Ley 27403: esa hora se considera efectivamente laborada para todo
//   efecto legal, incluido el goce de la remuneración. Es un derecho irrenunciable.
//   https://lpderecho.pe/permiso-por-lactancia-materna-y-lactario-institucional-son-derechos-irrenunciables-e-independientes-informe-tecnico-000092-2023-servir-gpgsc/
//   https://lpderecho.pe/trabajadora-tiempo-parcial-goce-permiso-lactancia-proporcional-horas-trabajo-informe-0091-2018-mtpe-2-14-1/
// Empresas, personas y montos son ficticios. Valor hora de ejemplo: remuneración mensual / 30 / 8.

export const CAP = {
  n: 4, titulo: 'El error', dia: 'Semana 1, jueves', foto: 'assets/foto2/tension.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. Una garúa finita moja las lunas de la oficina, aunque ya es diciembre. Antes de que prendas la computadora, la recepcionista te avisa: «Hay una señora que te busca. Dice que es de San Miguel».', boton: 'Bajar a recepción',
  kusi: 'Hoy toca mirar un error de frente. Lo que más importa no es quién se equivocó, sino qué haces ahora.',
  lead: 'Escuchaste a Yesenia, encontraste por qué le descontaban, decidiste cómo devolverle lo suyo, ordenaste la corrección y hablaste con Gaby sin buscar culpables.',
  reflexion: '¿Cuántas personas en una planilla de 700 tienen un error que nunca reclamaron?',
  siguiente: { n: 5, titulo: 'Los ceses', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'yesenia', p: 'Caso de Yesenia Huamán', j: 'Tú · Hugo', d: 0, e: 'Recién llegado' },
  { id: 'grati', p: 'Gratificación de diciembre', j: 'Hugo · Planillas', d: 0, e: 'Corrida 2 el lunes' },
  { id: 'reloj', p: 'Configuración del reloj de asistencia', j: 'Sistemas · Locales', d: 0, e: 'Sin revisar' },
  { id: 'ceses', p: 'Cierre del local de Miraflores', j: 'Fiorella · Administración', d: 0, e: 'Contratos vencen mañana' },
];

export const FUTURO = {
  lactancia_total: ['Yesenia recibirá el reintegro de octubre y noviembre, con una explicación por escrito.', 'Lo verá en la planilla del jueves. Capítulo 9.'],
  lactancia_parcial: ['A Yesenia solo se le devolverá noviembre.', 'Octubre sigue descontado. Yesenia hará la cuenta.'],
  lactancia_caja: ['A Yesenia se le pagó en efectivo de caja chica, fuera de planilla.', 'Contabilidad preguntará por ese egreso. Capítulo 8.'],
  ruta_error: ['Ordenaste la ruta para corregir un error de planilla.', 'Te servirá cuando falle el sistema. Capítulo 6.'],
  reloj_corregido: ['El reloj de San Miguel registra ahora el horario de lactancia de tres madres.', 'Ninguna tendrá «tardanzas» en diciembre.'],
  gaby_aliada: ['Gaby entendió el error sin sentirse acusada.', 'Te avisará cuando algo raro pase en su local.'],
  gaby_dolida: ['Gaby se sintió culpada por el error.', 'Estará más fría contigo unos días.'],
  fiorella_plazo: ['Le dijiste a Fiorella que las liquidaciones no pueden esperar al pago de la gratificación.', 'Mañana se liquida a 18 personas.'],
  fiorella_grati: ['Le dijiste a Fiorella que las liquidaciones podían ir con la gratificación del jueves.', 'Mañana descubrirás el plazo real.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Moza · local San Miguel', c: '#B83280' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
};

export const WSP = [
  { chat: 'grupo', t: '08:05', de: 'Hugo', txt: 'Gerencia aprobó lo de las horas extra en la grati 🙌 El lunes corremos con la casilla prendida.', si: 'grati_escalada' },
  { chat: 'grupo', t: '08:05', de: 'Hugo', txt: 'Ya escribí a Operaciones con el sustento de las variables regulares. Nadie respondió todavía, que es buena señal 😅', si: 'grati_he_incluida' },
  { chat: 'admins', t: '09:40', de: 'Lucho (Barranco)', txt: 'Ya firmaron 9 los acuerdos de compensación para diciembre. ¿Así está bien?', si: 'he_descanso_pactado' },
  { chat: 'wilder', t: '12:20', de: 'Wilder', txt: 'Señorita, ¿cuándo es lo del martes? ¿A qué hora? Para pedir permiso al jefe de cocina.', si: 'wilder_verdad' },
  { chat: 'yesenia', t: '17:30', de: 'Yesenia', txt: 'Señorita, gracias. Le leí su mensaje a mi esposo y se le salió una lágrima, no le diga a nadie 😅🙏', si: 'lactancia_total' },
  { chat: 'gaby', t: '18:10', de: 'Gaby', txt: 'Amiga, ya hablé con Sistemas: desde mañana el reloj de San Miguel tiene el horario de las tres mamás. Gracias por no hacerme quedar mal.', si: 'gaby_aliada' },
];

export const CORREOS = [
  { t: '08:15', de: 'Recepción · Sabor del Perú', para: 'Planillas', asunto: 'Visita sin cita', html: '<p>Hola. Está en recepción la Sra. Yesenia Huamán, moza del local San Miguel. Trae su boleta y dice que entra a trabajar a las 11. ¿La atienden?</p>' },
  { t: '16:20', de: 'Fiorella Ugarte', para: 'Planillas', asunto: 'Liquidaciones Miraflores', html: '<p>Hola. Mañana es el último día de 18 personas por el cierre del local. Operaciones me dijo que, para no hacer dos pagos, les podríamos depositar la liquidación el jueves junto con la gratificación. ¿Se puede? Necesito decirles algo hoy.</p><p>Fiorella · Administradora Miraflores</p>' },
];

export const QUIZ = [
  { q: '¿Hasta cuándo tiene derecho una madre trabajadora a la hora diaria de lactancia?', ops: ['Hasta que su hijo tenga seis meses', 'Hasta que su hijo tenga un año', 'Hasta que termine la licencia', 'Solo si la empresa tiene lactario'], ok: 1, por: 'La Ley 27240 la da al término del posnatal hasta que el hijo tenga un año.' },
  { q: 'La hora de lactancia…', ops: ['Se descuenta del sueldo', 'Se considera efectivamente laborada y se remunera', 'Se recupera al final del turno', 'Se paga a la mitad'], ok: 1, por: 'La Ley 27403 precisa que se considera efectivamente laborada para todo efecto legal, incluida la remuneración.' },
  { q: 'Descubres que a una trabajadora le descontaron dos meses por error. Lo correcto es…', ops: ['Devolver solo el mes que reclamó', 'Devolver todo lo descontado y corregir la causa', 'Esperar a que reclame el otro mes', 'Pagarle en efectivo para que no quede rastro'], ok: 1, por: 'Se corrige todo el error y su causa, y se paga dentro de la planilla, con explicación.' },
  { q: 'El error vino de que el reloj marcó «tardanza» la hora de lactancia. La causa de fondo es…', ops: ['La trabajadora', 'Que el horario acordado nunca se registró en el sistema', 'El banco', 'La ley'], ok: 1, por: 'Un acuerdo verbal que no se registra en el sistema se convierte en un descuento automático.' },
  { q: 'Al comunicar un error de planilla al trabajador, conviene…', ops: ['No decir nada y pagar', 'Explicar qué pasó, cuánto se devuelve y cuándo, y disculparse', 'Culpar al administrador', 'Decir que fue el sistema y ya'], ok: 1, por: 'La transparencia sobre el error, el monto y la fecha devuelve la confianza.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:20', ch: 'presencial', who: null, titulo: 'Yesenia, en recepción', banner: 'assets/foto/entrevista.webp', lugar: 'Recepción de la oficina central', show: ['personas', 'confianza'],
    body: () => `<p>Yesenia Huamán tiene unos treinta años, el uniforme doblado en una bolsa y una boleta subrayada con lapicero rojo. Es de Huancavelica, lleva cuatro años en San Miguel y volvió a trabajar en octubre, después de su licencia por maternidad y sus vacaciones.</p><p>«Disculpe que venga así, señorita. Es que <mark class="clave">me están descontando y no sé por qué</mark>. Con mi bebé, cada sol cuenta.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para entender qué pasó.',
    opts: [
      { id: 'que', label: '¿Qué descuento le aparece?', info: '«Aquí dice "tardanzas: 22 horas". En octubre también hubo, pero menos. Yo nunca llego tarde, señorita.»' },
      { id: 'horario', label: '¿A qué hora entra desde que volvió?', info: '«A las 12, en vez de las 11, por la hora de lactancia. Así quedé con la señora Gaby. Me dijo que no había problema.»' },
      { id: 'papel', label: '¿Firmó algo sobre ese horario?', info: '«No, señorita. Fue de palabra. La señora Gaby es buena, ella me dijo nomás.»' },
      { id: 'otras', label: '¿Hay otras mamás en su local?', info: '«Sí, la Rosmery y la Vanessa, de cocina. Ellas también salen una hora antes. A ellas no sé si les descuentan; no hablamos de plata.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: picks.includes('horario') ? 2 : 0 },
      cartera: { yesenia: picks.includes('horario') ? 'Hora de lactancia marcada como tardanza' : 'Descuento por «tardanzas»' },
      out: picks.includes('otras') ? 'Anotas en tu libreta: «Yesenia + Rosmery + Vanessa · San Miguel · lactancia». El problema podría ser más grande que una boleta.' : 'Le pides su boleta para sacarle copia. «Hoy le doy una respuesta», le dices. Yesenia se va corriendo a su turno.',
      kusi: ['curioso', 'Detrás de cada «tardanza» hay una historia.'],
    }),
    mirada: {
      ve: 'Que una trabajadora venga sin cita, antes de su turno, dice mucho: no confía en que un mensaje baste. Escucharla con preguntas concretas es la mitad de resolver su caso.',
    },
  },
  {
    id: 'd2', t: '09:30', ch: 'documento', who: null, titulo: 'Las «tardanzas» de Yesenia', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Sacas el reporte del reloj de San Miguel y las boletas de octubre y noviembre de Yesenia. Su sueldo es S/ 1,300: cada hora vale unos S/ 5.42. <mark class="clave">Marca lo que no debería estar ahí</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal en el registro y las boletas de Yesenia.',
    doc: { t: 'Yesenia Huamán · octubre y noviembre', sub: 'Reloj del local San Miguel y boletas de PlanMax' },
    lines: [
      { id: 'nov', t: 'Noviembre: «Tardanzas 22 horas» · descuento S/ 119.17.', bad: LEY, why: 'Es la hora de lactancia. Se considera efectivamente laborada y se remunera (Ley 27403).' },
      { id: 'oct', t: 'Octubre: «Tardanzas 20 horas» · descuento S/ 108.33.', bad: LEY, why: 'El mismo error, un mes antes. Yesenia no lo reclamó, pero también se le debe.' },
      { id: 'horario', t: 'Horario en el sistema: 11:00 a 19:00, sin registro de permiso por lactancia.', bad: BP, why: 'El acuerdo con Gaby nunca llegó al sistema: por eso el reloj cuenta «tardanzas».' },
      { id: 'grati', t: 'Gratificación de diciembre: calculada con 6/6 después de la corrección de ayer.' },
      { id: 'bebe', t: 'Fecha de nacimiento del bebé: junio de este año.', duda: 'Es el dato que te dice hasta cuándo dura el derecho: hasta que el bebé tenga un año.' },
      { id: 'marcas', t: 'Marcaciones: entra a las 12:00 y sale a las 19:00, todos los días.', duda: 'Cumple su jornada usando la hora de lactancia al inicio: no hay tardanza.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 4 },
      cartera: { yesenia: missLey ? 'Error encontrado a medias' : `${hitsLey} errores de ley · se le deben S/ 227.50` },
      out: missLey ? 'Te quedas con el descuento de noviembre. Al cerrar el archivo, Hugo pregunta: «¿Y octubre?».' : 'Sumas: S/ 119.17 de noviembre y S/ 108.33 de octubre. A Yesenia le descontaron S/ 227.50 por darle de lactar a su bebé.',
      pro: { ok: 'Revisar más de un mes muestra el tamaño real del error.', risk: 'Corregir solo lo reclamado deja deuda escondida.', info: 'Busca en el reloj a otras trabajadoras con permiso de lactancia.' },
      kusi: missLey ? ['preocupado', 'Octubre también cuenta…'] : ['indignado', '¡Le descontaban por darle de lactar a su bebé!'],
    }),
    rules: [[LEY, 'Hora diaria de lactancia hasta que el hijo tenga un año (Ley 27240, modificada por la Ley 28731).'], [LEY, 'Esa hora se considera efectivamente laborada y se remunera (Ley 27403).']],
    mirada: {
      ve: 'Los errores de planilla más dolorosos casi nunca son de cálculo: son de datos que nunca llegaron al sistema. Un acuerdo de palabra, por bueno que sea, se convierte en un descuento automático si nadie lo registra.',
      visual: { tipo: 'cambio', titulo: 'Lo que el sistema vio y lo que pasaba', pares: [['«Tardanza 1 hora diaria»', 'Hora de lactancia'], ['Descuento S/ 227.50', 'Remuneración que le corresponde'], ['Acuerdo de palabra', 'Permiso registrado']] },
      normas: [{ ley: 'Ley 27240 y Ley 27403', dice: 'La madre tiene una hora diaria de permiso por lactancia hasta que su hijo tenga un año, y esa hora se considera efectivamente laborada, con remuneración.', practica: 'No puede aparecer como tardanza ni descontarse.' }],
    },
  },
  {
    id: 'd3', t: '11:00', ch: 'presencial', who: 'hugo', titulo: '¿Cómo se devuelve?', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Escritorio de Hugo', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Hugo ve tus números y se queda callado. «Esto lo configuré yo hace dos años. El reloj descuenta automático si no hay permiso cargado.» Se quita los lentes. «Ya. <mark class="clave">¿Cómo lo arreglamos?</mark> Ojo: la planilla de la gratificación ya está casi lista y Operaciones odia los pagos fuera de fecha.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reintegrar octubre y noviembre en la planilla del jueves, con una explicación escrita para Yesenia, y revisar hoy a las otras madres del reloj.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, personas: 4, tiempo: -2 }, rel: { hugo: 1 }, flags: ['lactancia_total'], cartera: { yesenia: 'Reintegro S/ 227.50 en la planilla del jueves' },
          out: 'Hugo carga el reintegro. Al revisar el reloj, encuentran a Rosmery y Vanessa con el mismo descuento. Tres reintegros en vez de uno.',
          pro: { ok: 'Corriges todo el error, en planilla y con explicación.', risk: 'Te toma la mañana y Operaciones verá tres conceptos nuevos.', info: 'Deja anotado en el caso qué se corrigió y cuándo.' },
          kusi: ['celebra', 'Todo lo suyo, por la vía correcta.'] } },
      { id: 'b', label: 'Reintegrar solo noviembre, que es lo que Yesenia reclamó, y corregir el reloj desde diciembre.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, etica: -4 }, flags: ['lactancia_parcial'], cartera: { yesenia: 'Reintegro solo de noviembre' },
          out: 'Yesenia recibirá S/ 119.17. Los S/ 108.33 de octubre quedan en el aire. Y Rosmery y Vanessa, sin revisar.',
          pro: { ok: 'Es más rápido.', risk: 'Sabes que hay más deuda y decides no pagarla. Si ella hace la cuenta, perderás su confianza.' },
          kusi: ['triste', 'Octubre también era suyo.'] } },
      { id: 'c', label: 'Darle hoy los S/ 227.50 en efectivo de la caja chica de la oficina, para no esperar al jueves.',
        res: { q: 'aceptable', fx: { personas: 3, cumplimiento: -3 }, flags: ['lactancia_caja'], cartera: { yesenia: 'Pagado en efectivo, fuera de planilla' },
          out: 'Yesenia recibe un sobre. En la boleta no aparece nada: para el sistema, los descuentos siguen ahí.',
          pro: { ok: 'Le llega hoy.', risk: 'Un pago fuera de planilla no corrige la boleta ni las declaraciones, y deja un egreso sin explicar en caja.' },
          kusi: ['pensando', 'Rápido… pero la boleta sigue mal.'] } },
    ],
    rules: [[LEY, 'La hora de lactancia se remunera (Ley 27403).'], [BP, 'Los errores de planilla se corrigen en la planilla, por todo el periodo afectado.']],
    mirada: {
      ve: 'Hugo reconoce que el error fue suyo. Eso no es debilidad: es lo que permite arreglarlo de verdad. En Planillas, corregir con transparencia es devolver todo, en la boleta, y buscar a quién más le pasó.',
      visual: { tipo: 'balanza', a: { t: 'Corregir solo lo reclamado', items: ['Rápido', 'Deuda escondida', 'Otras madres sin revisar'] }, b: { t: 'Corregir el error completo', items: ['Todo el periodo', 'En la planilla', 'Otras afectadas encontradas'] } },
    },
  },
  {
    id: 'd4', t: '12:40', ch: 'documento', who: null, titulo: 'La ruta de una corrección', banner: 'assets/esc/escalera.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Hugo quiere que esto no dependa de la suerte: «Arma la ruta para corregir un error de planilla. La vamos a usar para todo». Almuerzas un pan con chicharrón mientras escribes.</p><p><mark class="clave">Ordena los pasos</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para corregir un error de planilla. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'escuchar', t: 'Escuchar al trabajador y pedir su boleta', por: 'El reclamo es la primera pista.' },
      { id: 'cuantificar', t: 'Revisar todos los meses afectados y calcular el monto', por: 'Para saber el tamaño real del error.' },
      { id: 'causa', t: 'Encontrar la causa y buscar a otras personas afectadas', por: 'Un error de configuración nunca afecta a una sola persona.' },
      { id: 'corregir', t: 'Corregir la causa en el sistema', por: 'Para que no se repita el próximo mes.' },
      { id: 'pagar', t: 'Pagar el reintegro en planilla', por: 'Con su concepto y en su boleta.' },
      { id: 'comunicar', t: 'Explicar por escrito qué pasó, cuánto y cuándo', por: 'Cierra el caso con confianza.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'buena' ? 2 : 0 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['ruta_error'], cartera: { reloj: q === 'riesgosa' ? 'Ruta sin ordenar' : 'Ruta de corrección lista' },
        out: q === 'buena' ? 'Hugo la imprime y la pega al lado del calendario de diciembre. «Esto se lo mando a los 14 administradores.»' : 'Hugo mueve un paso: «Antes de pagar, corrige la causa. Si no, el próximo mes descuenta de nuevo».',
        pro: { ok: 'Una ruta clara convierte un error en una mejora.', risk: 'Pagar sin corregir la causa garantiza el mismo reclamo el mes siguiente.', info: 'Guarda cada caso con la ruta marcada: es tu evidencia de que se corrigió.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Del error a la mejora!' : 'Casi: primero la causa.'],
      };
    },
    mirada: {
      ve: 'Un error corregido una vez es un favor; un error corregido con una ruta es un sistema. La diferencia la notan las próximas Yesenias, que no tendrán que venir antes de su turno a preguntar.',
      visual: { tipo: 'flujo', titulo: 'Ruta para corregir un error', pasos: ['Escuchar', 'Cuantificar', 'Causa', 'Corregir', 'Pagar', 'Explicar'] },
    },
  },
  {
    id: 'd5', t: '14:40', ch: 'whatsapp', who: null, titulo: 'El mensaje a Gaby', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio', show: ['confianza', 'personas'],
    body: () => `<p>Gaby hizo un acuerdo bueno con Yesenia, pero nunca lo registró. Si le escribes mal, se va a sentir culpable; si no le escribes, el reloj seguirá descontando. <mark class="clave">Escríbele para arreglarlo, no para culparla</mark>.</p>`,
    type: 'compose', enviaA: 'gaby', para: 'Para: Gaby Ríos · San Miguel', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Gaby, hiciste bien en darle a Yesenia su hora de lactancia: es su derecho.', ok: true, por: 'Reconoces lo que hizo bien.' },
        { id: 'a2', t: 'Gaby, por tu culpa a Yesenia le descontaron dos meses.', ok: false, por: 'La culpa no arregla el reloj.' },
      ] },
      { id: 'que', t: 'Qué pasó', ops: [
        { id: 'q1', t: 'El horario no estaba cargado en el sistema y el reloj lo contó como tardanza. Ya se lo vamos a devolver, y también a Rosmery y Vanessa.', ok: true, por: 'Causa y solución, sin dramatizar.' },
        { id: 'q2', t: 'Hubo un problemita con el sistema.', ok: false, por: 'No le dice qué tiene que hacer.' },
      ] },
      { id: 'pide', t: 'Qué le pides', ops: [
        { id: 'p1', t: 'Para que no se repita, ¿me ayudas a que Sistemas cargue hoy el horario de las tres, con un permiso firmado por cada una?', ok: true, por: 'Un pedido concreto, con plazo.' },
        { id: 'p2', t: 'De ahora en adelante, avísame de todo.', ok: false, por: '«De todo» no es un pedido.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'q1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, personas: q === 'buena' ? 2 : 0 }, rel: { gaby: q === 'riesgosa' ? -1 : q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'gaby_dolida' : 'gaby_aliada', ...(q === 'buena' ? ['reloj_corregido'] : [])], cartera: { reloj: q === 'buena' ? 'Horario de 3 madres cargado' : 'Pendiente con Gaby' },
        out: q === 'buena' ? 'Gaby te manda un audio: «Ay, amiga, qué vergüenza. Ahorita mismo llamo a Sistemas».' : q === 'riesgosa' ? 'Gaby responde con un «ok» seco. Su siguiente audio, horas después, empieza con «señorita».' : 'Gaby responde: «Ya, veo qué hago».',
        pro: { ok: 'Reconocer, explicar y pedir algo concreto suma a la persona que tiene que corregir.', risk: 'Culpar al administrador lo vuelve tu adversario.', info: 'Los acuerdos de horario se registran por escrito y en el sistema.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Gaby sigue en tu equipo.' : 'El tono también se registra.'],
      };
    },
    mirada: {
      ve: 'Gaby hizo lo correcto con Yesenia y lo incorrecto con el sistema. Las dos cosas son ciertas. Cuando el mensaje lo reconoce, la persona corrige rápido; cuando la acusa, se defiende.',
    },
  },
  {
    id: 'd6', t: '16:30', ch: 'correo', who: null, titulo: 'La pregunta de Fiorella', banner: 'assets/foto2/pasillo.webp', show: ['cumplimiento', 'personas'],
    mail: { from: 'Fiorella Ugarte', to: 'Planillas', asunto: 'Liquidaciones Miraflores' },
    body: () => `<p>Mañana es el último día de 18 personas por el cierre del local. Operaciones dice que podríamos depositarles la liquidación el jueves, con la gratificación, para hacer un solo pago. <mark class="clave">¿Se puede?</mark> Necesito decirles algo hoy.</p><p>Fiorella</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder que no conviene esperar: los beneficios del cese tienen su propio plazo y mañana lo revisas con Hugo para pagar a tiempo.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 2 }, flags: ['fiorella_plazo'], cartera: { ceses: 'Liquidaciones: se calculan mañana, plazo propio' },
          responde: 'Fiorella: la liquidación no debería esperar a la gratificación, porque los beneficios del cese tienen un plazo propio. Mañana a primera hora lo veo con Hugo y te confirmo fechas exactas. Diles que su pago está en marcha.',
          out: 'Fiorella responde: «Gracias, eso les voy a decir». Hugo, al leer la copia, levanta el pulgar: «Mañana te explico el plazo».', kusi: ['animo', 'Mejor «lo confirmo» que «sí se puede».'] } },
      { id: 'b', label: 'Responder que sí: es más simple para todos hacer un solo pago el jueves.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4 }, flags: ['fiorella_grati'], cartera: { ceses: 'Prometido: liquidación con la grati' },
          responde: 'Fiorella: sí, se puede pagar todo junto el jueves 👍',
          out: 'Fiorella les avisa a sus 18 trabajadores. Mañana Hugo leerá ese correo con cara de preocupación.', kusi: ['preocupado', '¿Y si el plazo es otro?'] } },
    ],
    mirada: { ve: 'Cuando no sabes un plazo, lo peor es inventarlo para quedar bien. Decir «lo confirmo mañana» protege a la administradora, a los trabajadores y a ti.' },
  },
];
