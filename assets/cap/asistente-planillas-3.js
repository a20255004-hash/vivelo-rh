// Asistente de Planillas · Capítulo 3 · «La gratificación» · Semana 1, miércoles.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - Ley 27735 y su reglamento (D.S. 005-2002-TR): gratificación de Navidad equivalente a una remuneración si se laboró el
//   semestre completo; proporcional por meses calendario completos si no; los conceptos variables entran en la base si son
//   regulares; los descansos subsidiados (como la licencia por maternidad) se consideran tiempo laborado (Ley 27735, art. 6).
//   https://lpderecho.pe/gratificaciones-laborales-concepto-calculo
//   https://lpderecho.pe/reglamento-ley-gratificiaciones-fiestas-patrias-navidad-decreto-supremo-005-2002-tr/
// - Ley 30334: la gratificación no está afecta a aportes ni descuentos de seguridad social; lo que se aportaría a EsSalud
//   se paga al trabajador como bonificación extraordinaria (9 %, o 6.75 % si está afiliado a una EPS).
//   https://andina.pe/agencia/noticia-gratificacion-fiestas-patrias-sera-un-sueldo-mas-9-adicional-851640.aspx
//   https://noticierocontable.com/ley-30334-4-casos-practicos-de-bonificacion-extraordinaria
// Empresas, personas y montos son ficticios. RMV vigente: S/ 1,230 (D.S. 015-2026-TR).

export const CAP = {
  n: 3, titulo: 'La gratificación', dia: 'Semana 1, miércoles', foto: 'assets/3d/scenes/boleta.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '08:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Miércoles. En la cocina del local de abajo ya pelan papas para el almuerzo y en Planillas empieza el cálculo de la gratificación: 700 filas, una por persona.', boton: 'Prender la computadora',
  kusi: 'Hoy cada fila del Excel es una cena de Navidad. ¡A calcular con cariño y con ley!',
  lead: 'Elegiste qué entra en la base de la gratificación, calculaste los casos difíciles, decidiste qué hacer con las horas extra regulares y revisaste el cálculo del sistema.',
  reflexion: '«Siempre se calculó así» es una frase muy común en Planillas. ¿Cuándo es una tradición y cuándo es un error repetido?',
  siguiente: { n: 4, titulo: 'El error', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'grati', p: 'Gratificación de diciembre · 700 personas', j: 'Hugo · Planillas', d: 0, e: 'Cálculo en curso' },
  { id: 'horas', p: 'Horas extra de fin de noviembre', j: 'Tú', d: 0, e: 'Consolidado listo' },
  { id: 'kevin', p: 'Adelanto de Kevin', j: 'Gaby · San Miguel', d: 0, e: 'Por descontar' },
  { id: 'ceses', p: 'Cierre del local de Miraflores', j: 'Fiorella · Administración', d: 0, e: 'Contratos vencen el viernes' },
];

export const FUTURO = {
  base_ok: ['Sabes qué conceptos entran en la base de la gratificación.', 'Te servirá para explicarle a Wilder su boleta.'],
  grati_he_incluida: ['Las horas extra regulares entran en la gratificación de 120 personas.', 'Wilder lo notará en su boleta. Capítulo 7.'],
  grati_solo_basico: ['La gratificación se calcula solo con el básico, «como siempre».', 'Las horas extra regulares quedan fuera. Capítulo 7.'],
  grati_escalada: ['Hugo llevará a gerencia el costo de incluir las horas extra regulares.', 'La respuesta llegará antes del pago.'],
  kevin_claro: ['El adelanto de Kevin se descuenta con su autorización firmada.', 'Su boleta será clara.'],
  kevin_turbio: ['El adelanto de Kevin se descontará sin papel que lo respalde.', 'Kevin preguntará por qué. Capítulo 9.'],
  muestra_revisada: ['Encontraste errores del sistema en la muestra antes de pagar.', 'Hugo corregirá la configuración. Capítulo 6.'],
  muestra_sin_ver: ['Se te pasaron errores del sistema en la muestra.', 'Reaparecerán el día del cálculo final. Capítulo 6.'],
  yesenia_completa: ['Yesenia cobrará su gratificación completa: la licencia por maternidad cuenta como tiempo laborado.', 'Yesenia vuelve a aparecer mañana.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
};

export const WSP = [
  { chat: 'admins', t: '08:12', de: 'Fiorella (Miraflores)', txt: 'Planillas, ¿mañana me pueden mandar las liquidaciones para revisarlas? Mi gente se va el viernes y quiero que se vayan tranquilos 🙏' },
  { chat: 'admins', t: '09:30', de: 'Ítalo (Surco)', txt: '¿Este año la grati viene con el 9 %? Mis chicos preguntan todo el día.' },
  { chat: 'wilder', t: '10:05', de: 'Wilder', txt: 'Buenos días. ¿Lo de mis horas va a salir en la grati o aparte? Mi esposa ya está haciendo cuentas para el colegio de la niña.', si: 'wilder_verdad' },
  { chat: 'gaby', t: '13:05', de: 'Gaby', txt: '🎤 Audio · 0:48' },
  { chat: 'grupo', t: '16:50', de: 'Hugo', txt: 'Gerencia me dio cita mañana a las 9 para ver lo de las horas extra en la grati. Prepárame el número exacto 🙏', si: 'grati_escalada' },
  { chat: 'grupo', t: '19:05', de: 'Hugo', txt: 'Ya, váyanse, que mañana hay más. Gracias por quedarte.' },
];

export const CORREOS = [
  { t: '08:05', de: 'Hugo Salazar', para: 'Asistente de Planillas', asunto: 'Gratificación: casos para hoy', html: '<p>Te dejo tres casos para que los calcules a mano antes de correr el sistema: Jhoan (entró el 1 de agosto), Yesenia (volvió de su licencia por maternidad en octubre) y Kevin (con adelanto). Si el sistema no da lo mismo que tú, uno de los dos está mal.</p><p>Hugo</p>' },
  { t: '11:30', de: 'Gerencia de Operaciones', para: 'Planillas', asunto: 'Presupuesto de gratificación', html: '<p>Recordamos que el presupuesto aprobado para la gratificación de diciembre se calculó con la remuneración básica, como todos los años. Cualquier diferencia debe ser sustentada.</p><p>Operaciones</p>' },
];

export const QUIZ = [
  { q: 'Jhoan ingresó el 1 de agosto. Su gratificación de diciembre es…', ops: ['Completa', 'Proporcional: 5 de 6 meses', 'Cero: no trabajó el semestre completo', 'La mitad'], ok: 1, por: 'Quien no laboró el semestre completo recibe la gratificación en proporción a los meses calendario completos laborados.' },
  { q: 'La bonificación extraordinaria de la Ley 30334 equivale…', ops: ['A lo que se aportaría a EsSalud por la gratificación', 'A un sueldo más', 'A la CTS', 'A las horas extra'], ok: 0, por: 'Como la gratificación no está afecta a EsSalud, ese monto (9 %, o 6.75 % si hay EPS) se le paga al trabajador.' },
  { q: '¿Se descuenta AFP u ONP de la gratificación?', ops: ['Sí, como cualquier sueldo', 'No: la gratificación no está afecta a aportes de seguridad social', 'Solo AFP', 'Solo si el trabajador lo pide'], ok: 1, por: 'La gratificación está inafecta a aportes y descuentos de seguridad social; sí puede tener la retención del impuesto que corresponda.' },
  { q: 'Yesenia estuvo de licencia por maternidad en julio y agosto. Para su gratificación, esos meses…', ops: ['No cuentan', 'Cuentan como tiempo laborado', 'Cuentan a la mitad', 'Depende del administrador'], ok: 1, por: 'La Ley 27735 considera tiempo laborado los descansos que originan subsidios de la seguridad social, como la maternidad.' },
  { q: 'Las horas extra entran en la base de la gratificación cuando…', ops: ['Nunca', 'Son regulares en el semestre', 'Las pide el trabajador', 'Son de diciembre'], ok: 1, por: 'Los conceptos variables entran en la base si se perciben con regularidad en el semestre.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:30', ch: 'presencial', who: 'hugo', titulo: '¿Qué entra en la base?', banner: 'assets/foto/revisa.webp', lugar: 'Escritorio de Hugo', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Hugo abre la boleta de un cocinero en la pantalla del medio. «La gratificación es una remuneración, pero ¿cuál? <mark class="clave">Lo que metas en la base lo multiplicas por 700</mark>.»</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres conceptos que entran en la base de la gratificación de un trabajador típico.', boton: 'Armar la base', resumen: 'Pusiste en la base',
    cols: ['Concepto', 'Lo que sabes'],
    rows: [
      { id: 'basico', cells: ['Remuneración básica', 'Todos los meses'] },
      { id: 'asig', cells: ['Asignación familiar', 'Todos los meses, si tiene hijos que dan derecho'] },
      { id: 'he', cells: ['Horas extra', 'Las cobró en agosto, septiembre, octubre y noviembre'] },
      { id: 'bono', cells: ['Bono por el aniversario del local', 'Una sola vez, en septiembre'] },
      { id: 'movil', cells: ['Movilidad para la cena de empresa', 'Taxi pagado para regresar de madrugada'] },
      { id: 'uniforme', cells: ['Uniforme y mandil', 'Lo entrega la empresa para trabajar'] },
    ],
    score: { basico: 3, asig: 3, he: 3, bono: -2, movil: -2, uniforme: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['base_ok'] : [], cartera: { grati: q === 'buena' ? 'Base: básico + asignación + variables regulares' : 'Base dudosa' },
        out: q === 'buena' ? 'Hugo asiente: «Y las horas extra entran porque son regulares: las cobró en varios meses del semestre. Un bono de una sola vez, no».' : 'Hugo corrige: «Lo que se da para trabajar, como el uniforme o la movilidad, no es remuneración. Y lo de una sola vez no es regular».',
        pro: { ok: 'Distinguir lo regular de lo ocasional es la clave de la base.', risk: 'Una base mal armada se multiplica por cientos de personas.', info: 'Pide a Hugo el criterio exacto de regularidad que usa la empresa y su sustento.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Base de acero!' : 'Lo ocasional no es regular…'],
      };
    },
    rules: [[LEY, 'La base es la remuneración regular; los conceptos variables entran si son regulares en el semestre (Ley 27735 y D.S. 005-2002-TR).']],
    mirada: {
      ve: 'La pregunta «qué entra en la base» parece técnica, pero decide cuánto recibe cada persona. En una cadena donde casi todos hacen horas extra en diciembre, dejar fuera lo variable regular puede ser el error más caro… para el trabajador.',
      visual: { tipo: 'balanza', a: { t: 'Entra en la base', items: ['Básico', 'Asignación familiar', 'Variables regulares'] }, b: { t: 'No entra', items: ['Bono de una sola vez', 'Movilidad para trabajar', 'Uniforme'] } },
    },
  },
  {
    id: 'c2', t: '10:00', ch: 'documento', who: null, titulo: 'Tres casos a mano', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio, con calculadora', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Hugo quiere que calcules a mano tres casos antes de correr PlanMax. Sacas la calculadora que te regaló tu tío contador y abres una hoja nueva: <mark class="clave">si el sistema no da lo mismo, uno de los dos está mal</mark>.</p>`,
    type: 'builder', prompt: 'Elige el cálculo correcto de cada caso.', boton: 'Guardar los cálculos',
    bloques: [
      { id: 'jhoan', t: 'Jhoan · mozo · S/ 1,230 · entró el 1 de agosto', n: 1, ops: [
        { id: 'j1', t: '1,230 × 5/6 = S/ 1,025.00 de gratificación + 9 % de bonificación (S/ 92.25)', ok: true, por: 'Agosto a diciembre: cinco meses completos.' },
        { id: 'j2', t: 'S/ 0: no trabajó el semestre completo', ok: false, por: 'Le corresponde la parte proporcional.' },
        { id: 'j3', t: '1,230 completo + 9 %', ok: false, por: 'Le faltó julio.' },
      ] },
      { id: 'yes', t: 'Yesenia · moza · S/ 1,300 · licencia por maternidad en julio y agosto', n: 1, ops: [
        { id: 'y1', t: '1,300 completo + 9 % (S/ 117.00): la licencia cuenta como tiempo laborado', ok: true, por: 'Los descansos subsidiados se consideran laborados para la gratificación.' },
        { id: 'y2', t: '1,300 × 4/6, porque dos meses estuvo de licencia', ok: false, por: 'Quitarle esos meses es castigarla por la maternidad.' },
      ] },
      { id: 'kevin', t: 'Kevin · mozo · S/ 1,400 · adelanto de S/ 400', n: 2, ops: [
        { id: 'k1', t: 'Gratificación S/ 1,400 + 9 % de bonificación (S/ 126.00)', ok: true },
        { id: 'k2', t: 'Descontar los S/ 400 solo si hay autorización firmada', ok: true, por: 'El descuento autorizado por el trabajador se puede aplicar.' },
        { id: 'k3', t: 'Descontar también AFP de la gratificación', ok: false, por: 'La gratificación no está afecta a aportes de pensiones.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, cumplimiento: q === 'buena' ? 4 : -2 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['yesenia_completa'], cartera: { grati: q === 'buena' ? 'Tres casos calculados a mano' : 'Casos con dudas' },
        out: q === 'buena' ? 'Hugo compara tus números con los del sistema: Jhoan y Kevin cuadran. Yesenia no: PlanMax le puso 4/6. «Ahí está. Bien visto.»' : 'Hugo revisa tu hoja: «Yesenia no puede perder dos meses por haber sido mamá. Y a la grati no se le descuenta AFP».',
        pro: { ok: 'El cálculo a mano es tu control de calidad del sistema.', risk: 'Si confías ciegamente en el sistema, repites sus errores.', info: 'Elige siempre casos raros para probar: ingresos a mitad, licencias, adelantos.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Le ganaste al sistema!' : 'Yesenia merece su grati completa.'],
      };
    },
    rules: [[LEY, 'Proporcional por meses calendario completos si no se laboró el semestre completo (Ley 27735).'], [LEY, 'Los descansos subsidiados, como la maternidad, cuentan como tiempo laborado (Ley 27735, art. 6).'], [LEY, 'Bonificación extraordinaria: 9 %, o 6.75 % con EPS (Ley 30334).']],
    mirada: {
      ve: 'El sistema calcula bien lo que alguien configuró bien. Por eso Planillas prueba siempre con casos difíciles: los «normales» casi nunca fallan.',
      visual: { tipo: 'flujo', titulo: 'La gratificación de Jhoan', pasos: ['S/ 1,230', '× 5/6', 'S/ 1,025.00', '+ 9 % = S/ 92.25', 'S/ 1,117.25'] },
      normas: [{ ley: 'Ley 30334', dice: 'La gratificación no está afecta a aportes de seguridad social, y el empleador paga al trabajador como bonificación extraordinaria lo que aportaría a EsSalud.', practica: 'Por eso la boleta de la gratificación dice «un sueldo más 9 %».' }],
    },
  },
  {
    id: 'c3', t: '11:45', ch: 'sistema', who: null, titulo: 'La casilla apagada', banner: 'assets/foto/oficina-abierta.webp', lugar: 'PlanMax · Configuración de conceptos', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Revisando la configuración de PlanMax con Hugo, encuentras la casilla «Incluir variables regulares en gratificación» apagada. Lleva así desde que se instaló el sistema.</p><p>Si la prendes, 120 personas que hacen horas extra todos los meses cobrarán más: unos S/ 18,000 en total. Operaciones acaba de recordar que el presupuesto se hizo «con el básico, como todos los años». Hugo suspira: <mark class="clave">«¿Qué hacemos?»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Prender la casilla ahora y calcular bien: la base incluye lo regular, haya o no presupuesto.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, confianza: -1 }, flags: ['grati_he_incluida'], cartera: { grati: 'Variables regulares incluidas · 120 personas' },
          out: 'Hugo prende la casilla y escribe a Operaciones con el sustento. A la hora, responden: «Entendido». Nadie celebra, pero nadie lo discute.',
          pro: { ok: 'Calculas lo que corresponde.', risk: 'Operaciones puede sentir que Planillas decidió un gasto sin avisar.', info: 'Acompaña siempre un cambio de costo con el sustento normativo y el detalle por persona.' },
          kusi: ['celebra', 'Ciento veinte gratis bien calculadas.'] } },
      { id: 'b', label: 'Proponer que Hugo lleve hoy a gerencia el costo exacto y el sustento, para pagar todo correcto el jueves de la próxima semana.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: 3, tiempo: -2 }, rel: { hugo: 1 }, flags: ['grati_escalada'], cartera: { grati: 'Costo de variables regulares en gerencia' },
          out: 'Hugo arma contigo un cuadro con las 120 personas. Gerencia lo atiende mañana a las 9. Todavía hay tiempo antes del pago.',
          pro: { ok: 'Decides con quien tiene que aprobar el gasto, y con números.', risk: 'Si gerencia dice que no, igual tendrás que pagar lo que la ley pide.' },
          kusi: ['pensando', 'Bien… pero la ley no espera reuniones.'] } },
      { id: 'c', label: 'Dejarla apagada: siempre se pagó así y nadie reclamó. Cambiarlo ahora abre una puerta a reclamos de años anteriores.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -4 }, flags: ['grati_solo_basico'], cartera: { grati: 'Solo básico, «como siempre»' },
          out: 'La casilla sigue apagada. Hugo no dice nada, pero tampoco cierra la pantalla de configuración. En Barranco, Wilder hace cuentas para el colegio de su hija.',
          pro: { ok: 'Cumples el presupuesto.', risk: 'Que nadie haya reclamado no hace correcto el cálculo. El error crece cada semestre.' },
          kusi: ['indignado', '«Nadie reclamó» no es lo mismo que «está bien».'] } },
    ],
    rules: [[LEY, 'La base de la gratificación incluye las remuneraciones regulares, también las variables que lo sean (Ley 27735 y D.S. 005-2002-TR).']],
    mirada: {
      ve: 'Descubrir un error que viene de años es incómodo: arreglarlo hoy cuesta plata y expone a quien lo dejó pasar. Pero cada semestre que se repite, la deuda con los trabajadores crece. Una asistente no decide el presupuesto, pero sí puede decidir no callarse.',
      visual: { tipo: 'rango', titulo: 'Gratificación de un cocinero con horas extra regulares', min: 1600, max: 2100, banda: [1800, 1950], marcas: [['Solo básico', 1800], ['Con variables regulares', 1940]] },
    },
  },
  {
    id: 'c4', t: '13:10', ch: 'whatsapp', who: 'gaby', titulo: 'El descuento de Kevin', banner: 'assets/foto/cafe.webp', lugar: 'Comedor de la oficina', show: ['personas', 'cumplimiento'],
    body: (n, F) => `<p>Calientas tu almuerzo en el microondas (hay cola: cuatro tápers delante). Entra el audio de Gaby.</p><p>${F.has('adelanto_informal') ? '«Amiga, lo de los 400 de Kevin… <mark class="clave">descuéntaselo de la grati</mark>, ¿ya? Que me falta en caja y el contador del local me está preguntando. Él sabe, ya le dije.»' : '«Amiga, Kevin pregunta cuánto le va a llegar de grati con el descuento del adelanto. <mark class="clave">¿Se lo puedes explicar tú?</mark> Yo me enredo con los números.»'}</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedir la autorización firmada de Kevin (si no la hay, que la firme hoy) y explicarle a Kevin, por escrito, cuánto recibirá y por qué.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 3, tiempo: -1 }, rel: { gaby: 1 }, flags: ['kevin_claro'], cartera: { kevin: 'Autorizado · S/ 1,526 − 400 = S/ 1,126' },
          envia: [['gaby', 'Gaby, para descontar los 400 necesito la autorización firmada de Kevin (te mando el formato si falta). A Kevin le llegarían S/ 1,526 de grati y bonificación, menos 400 del adelanto: S/ 1,126. Si quiere, lo llamo y se lo explico.']],
          out: 'Gaby responde: «Ya, amiga, hoy mismo lo firma». Kevin te escribe en la tarde: «Gracias, ahora sí entiendo».',
          pro: { ok: 'El descuento queda autorizado y la persona sabe cuánto recibirá.', info: 'Una cifra explicada antes del pago evita una consulta después.' },
          kusi: ['feliz', 'Número claro, Kevin tranquilo.'] } },
      { id: 'b', label: 'Descontarlo nomás: Gaby dice que Kevin ya sabe.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: -1 }, flags: ['kevin_turbio'], cartera: { kevin: 'Descuento sin autorización escrita' },
          out: 'Pones el descuento en PlanMax. En el campo «sustento» escribes: «indicación de la administradora».',
          pro: { ok: 'Le resuelves la caja a Gaby.', risk: 'Sin autorización escrita del trabajador, un descuento puede ser indebido.' },
          kusi: ['preocupado', '«Él sabe» no es una firma.'] } },
    ],
    mirada: {
      ve: 'Lo que ayer fue un favor, hoy es un descuento en una boleta. Planillas es el lugar donde las buenas intenciones de otros se vuelven números, y donde hay que pedir el papel que nadie pidió a tiempo.',
    },
  },
  {
    id: 'c5', t: '15:40', ch: 'documento', who: null, titulo: 'La muestra del sistema', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>PlanMax terminó la primera corrida. Hugo te pide revisar una muestra de filas antes de aprobar: <mark class="clave">«Busca lo que no tenga sentido»</mark>. El aire acondicionado sopla directo a tu nuca.</p>`,
    type: 'flag', prompt: 'Marca las filas de la muestra que están mal calculadas.',
    doc: { t: 'Gratificación de diciembre · muestra de la corrida 1', sub: 'PlanMax · 12 de 700 filas' },
    lines: [
      { id: 'yes', t: 'Yesenia Huamán: 4/6 de gratificación («licencia julio-agosto»).', bad: LEY, why: 'La licencia por maternidad cuenta como tiempo laborado para la gratificación.' },
      { id: 'afp', t: 'Descuento AFP sobre la gratificación de 85 personas.', bad: LEY, why: 'La gratificación no está afecta a aportes de pensiones.' },
      { id: 'eps', t: 'Bonificación de 9 % para 6 personas afiliadas a una EPS.', bad: LEY, why: 'Con EPS, la bonificación extraordinaria es de 6.75 %.' },
      { id: 'cesado', t: 'Rocío Paz (cesó el 30 de septiembre): gratificación completa en esta planilla.', bad: BP, why: 'Quien ya cesó recibió su parte en la liquidación. Pagarle aquí es un doble pago difícil de recuperar.' },
      { id: 'jhoan', t: 'Jhoan Rivas: 5/6 de gratificación + 9 %.' },
      { id: 'quinta', t: 'Retención del impuesto a la renta en la gratificación del jefe de cocina.', duda: 'La gratificación puede tener retención de impuesto: se revisa con Contabilidad, pero no es un error por sí misma.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 4 }, rel: { hugo: missLey ? 0 : 1 },
      flags: [missLey ? 'muestra_sin_ver' : 'muestra_revisada'], cartera: { grati: missLey ? 'Corrida 1 aprobada con errores' : `Corrida 1 observada · ${hitsLey} errores de configuración` },
      out: missLey ? 'Apruebas la muestra. Hugo, más tarde, ve el descuento de AFP: «Esto va a salir en 85 boletas…».' : 'Hugo anota tus observaciones en un post-it amarillo y lo pega en el monitor: «El lunes reconfiguramos y corremos de nuevo».',
      pro: { ok: 'Revisar una muestra con casos distintos detecta errores de configuración, no solo de digitación.', risk: 'Un error de configuración aparece en decenas de boletas a la vez.', info: 'Incluye siempre en la muestra un cesado, un ingreso nuevo, alguien con EPS y alguien con licencia.' },
      kusi: missLey ? ['preocupado', 'Ochenta y cinco boletas con AFP…'] : ['celebra', '¡Auditora de sistemas!'],
    }),
    rules: [[LEY, 'La gratificación no está afecta a aportes de seguridad social (Ley 30334).'], [LEY, 'Con EPS, la bonificación extraordinaria es de 6.75 % (Ley 30334).']],
    mirada: {
      ve: 'Una muestra bien elegida vale más que revisar 700 filas cansada. La clave está en buscar los casos raros, porque es ahí donde se esconden los errores de configuración.',
      visual: { tipo: 'embudo', titulo: 'Corrida 1 de PlanMax', niveles: [['Filas', 700], ['Muestra revisada', 12], ['Errores de configuración', 4]] },
    },
  },
  {
    id: 'c6', t: '18:30', ch: 'whatsapp', who: null, titulo: 'El resumen para Hugo', banner: 'assets/esc/meta.webp', lugar: 'Tu escritorio, ya casi sola', show: ['confianza', 'calidad'],
    body: () => `<p>La oficina se vacía. Abajo, en el local, empieza el turno de la noche y suena una salsa de Grupo 5. Hugo se fue a una reunión y te pide por WhatsApp <mark class="clave">un resumen del día</mark> para leerlo en el taxi.</p>`,
    type: 'compose', enviaA: 'hugo', para: 'Para: Hugo Salazar', boton: 'Enviar el resumen',
    prompt: 'Arma el resumen eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Qué se hizo', ops: [
        { id: 'h1', t: 'Hugo: los tres casos a mano están listos; Jhoan y Kevin cuadran con PlanMax, Yesenia no.', ok: true, por: 'Hechos concretos.' },
        { id: 'h2', t: 'Hugo: avancé bastante con la grati.', ok: false, por: '«Bastante» no le dice nada.' },
      ] },
      { id: 'riesgo', t: 'Qué riesgo ves', ops: [
        { id: 'r1', t: 'La corrida 1 tiene errores de configuración (AFP, EPS, cesados, licencias): no la aprobemos hasta corregir.', ok: true, por: 'Un riesgo con acción.' },
        { id: 'r2', t: 'Creo que el sistema tiene algunos detallitos.', ok: false, por: 'Minimiza lo que encontraste.' },
      ] },
      { id: 'pide', t: 'Qué necesitas', ops: [
        { id: 'p1', t: 'Mañana necesito tu ayuda para las liquidaciones de Miraflores: Fiorella las quiere revisar antes del viernes.', ok: true, por: 'Anticipas lo que viene.' },
        { id: 'p2', t: 'Nada, todo bien 😊', ok: null, por: 'Amable, pero no anticipa nada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -2, calidad: q === 'buena' ? 2 : 0 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        cartera: { ceses: sel.pide === 'p1' ? 'Liquidaciones: mañana con Hugo' : 'Liquidaciones sin agendar' },
        out: q === 'buena' ? 'Hugo responde desde el taxi: «Perfecto. Mañana a las 8 vemos Miraflores. Y descansa».' : 'Hugo responde con un pulgar. Mañana te preguntará los detalles en persona.',
        pro: { ok: 'Un resumen con hechos, riesgo y pedido se lee en un minuto.', risk: 'Un «todo bien» esconde lo que tu jefe necesita saber.', info: 'Escribe pensando en quien lo leerá en un celular, en movimiento.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Resumen de taxi: corto y completo.' : 'Le faltó algo al resumen.'],
      };
    },
    mirada: {
      ve: 'Un buen resumen no cuenta todo lo que hiciste: cuenta lo que tu jefe necesita para decidir. En Planillas, eso casi siempre es: qué cuadra, qué no y qué viene.',
    },
  },
];
