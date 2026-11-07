// Analista de Planillas · Capítulo 3 · «En paralelo» · Semana 1, miércoles.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas (ya verificadas en capítulos anteriores):
// - D.S. 007-2002-TR, art. 8: piso de la remuneración nocturna (RMV + 35 % = S/ 1,660.50 con la RMV de S/ 1,230).
//   https://cdn.www.gob.pe/uploads/document/file/5674322/5035689-informe-tecnico-0947-2021-servir-gpgsc.pdf
// - Ley 25129: asignación familiar del 10 % de la RMV.
// Este capítulo no cita normas nuevas: trata de método de prueba y conciliación.

export const CAP = {
  n: 3, titulo: 'En paralelo', dia: 'Semana 1, miércoles', foto: 'assets/3d/scenes/boleta.webp',
  lugar: 'Andes Logística · Oficina de Compensaciones, Callao',
  inicio: '07:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Miércoles, siete de la mañana. Llegaste antes que el sol se asome entre las nubes del Callao. Diego corrió octubre en Nómina360 durante la madrugada y ahora hay dos planillas del mismo mes sobre tu escritorio. No coinciden.', boton: 'Ver los resultados',
  kusi: 'Dos sistemas, un mismo mes. Cada sol de diferencia tiene una historia. ¡A buscarla!',
  lead: 'Elegiste cómo mirar los resultados, priorizaste las diferencias, te negaste (o no) a cuadrar a la fuerza, ordenaste el método de conciliación y abriste el papel de Teodoro.',
  reflexion: 'Si los dos sistemas dieran exactamente lo mismo, ¿significaría que los dos están bien?',
  siguiente: { n: 4, titulo: 'El error antiguo', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'paralelo', p: 'Prueba en paralelo de octubre', j: 'Tú · Diego', d: 0, e: 'Diferencia total: S/ 6,835' },
  { id: 'diferencias', p: 'Cuadro de diferencias', j: 'Tú', d: 0, e: 'Por armar' },
  { id: 'conceptos', p: 'Mapa de conceptos', j: 'Diego · Consultor', d: 0, e: 'Configuración cerrada' },
  { id: 'datos', p: 'Datos maestros', j: 'Mili · Sistemas', d: 0, e: 'Carga mañana' },
  { id: 'consultas', p: 'Consultas del personal', j: 'Sindicato · Teodoro', d: 0, e: 'CTS baja: respuesta el viernes' },
];

export const FUTURO = {
  mirada_trabajador: ['Pediste las diferencias por trabajador y por concepto.', 'Encontrarás los errores donde se esconden.'],
  doble_noche: ['Descubriste que el piso nocturno y el «Reint. noche» se pagaban dos veces en Nómina360.', 'Diego desactiva el X22 y el cálculo cuadra.'],
  causa_raiz: ['Corregiste cada diferencia en su origen.', 'El acta de salida en vivo tendrá sustento.'],
  cuadre_forzado: ['Aceptaste un concepto de «cuadre» para igualar sistemas.', 'Un día alguien preguntará qué es.'],
  tolerancia: ['Aceptaste diferencias menores a S/ 5 sin explicarlas.', 'Una de ellas era el tipo de comisión de la AFP.'],
  metodo_conciliacion: ['Tienes un método de conciliación en siete pasos.', 'Lo usarás de nuevo en el cierre.'],
  constancia_ok: ['Le diste a Julio su constancia con una hora clara de entrega.', 'Su préstamo para el techo sigue en pie.'],
  papel_abierto: ['Abriste el papel de Teodoro: los tres casos tienen bono de productividad desde noviembre de 2024.', 'Mañana empiezas por ahí.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  mili: { n: 'Mili Sotelo', sub: 'Asistente de Planillas', c: '#C05621' },
  proyecto: { n: 'Proyecto Nómina360', sub: 'Diego, Patricia, Sistemas y tú', c: '#2B6CB0' },
};

export const WSP = [
  { chat: 'proyecto', t: '06:52', de: 'Diego', txt: 'Paralelo de octubre corrido ✅ Diferencia total de 0.24 %. Prácticamente igual 🎉' },
  { chat: 'proyecto', t: '06:53', de: 'Diego', txt: 'Prueba con 20 boletas lista ✅. Patricia pide igual el paralelo completo, lo corro hoy 😓', si: 'paralelo_saltado' },
  { chat: 'equipo', t: '07:30', de: 'Patricia', txt: '0.24 % de 2.8 millones son casi 7 mil soles. «Prácticamente igual» no existe en planillas.' },
  { chat: 'mili', t: '14:45', de: 'Mili', txt: 'Julio Huamán, operario, pide una constancia de haberes para un préstamo de la caja. Dice que es para ayer 😬 ¿Se la hago?' },
  { chat: 'diego', t: '16:10', de: 'Diego', txt: 'Desactivé el X22 en noviembre para los que ya tienen el piso nocturno. Ahora cuadra 👌', si: 'doble_noche' },
  { chat: 'equipo', t: '19:05', de: 'Mili', txt: '¿Sigues ahí? El vigilante dice que cierra el portón a las 7:30 🏃🏽‍♀️' },
];

export const CORREOS = [
  { t: '07:05', de: 'Nómina360 · Notificaciones', para: 'Proyecto Nómina360', asunto: 'Proceso PARALELO-OCT finalizado', html: '<p>Proceso finalizado con 1,100 boletas.</p><p>Neto total sistema anterior: S/ 2,846,310.00<br>Neto total Nómina360: S/ 2,853,145.00<br>Diferencia: S/ 6,835.00 (0.55 %)</p>' },
];

export const QUIZ = [
  { q: 'Una diferencia de 0.24 % en una planilla de S/ 2.8 millones es…', ops: ['Despreciable', 'Unos S/ 7,000 que alguien cobrará de más o de menos', 'Un redondeo', 'Normal en todo cambio'], ok: 1, por: 'En planillas no existen las diferencias «pequeñas» en total: cada sol es de una persona concreta.' },
  { q: '¿Por qué no conviene crear un concepto de «cuadre» para igualar los dos sistemas?', ops: ['Porque es lento', 'Porque esconde el error en vez de corregirlo y nadie podrá explicarlo después', 'Porque SUNAT lo prohíbe expresamente', 'Porque cuesta más'], ok: 1, por: 'El cuadre iguala los totales, pero deja vivo el error de fondo.' },
  { q: 'Si los dos sistemas calculan exactamente lo mismo, eso prueba que…', ops: ['Los dos están bien', 'El sistema nuevo replica al viejo, incluidos sus errores', 'No hay que revisar nada más', 'El consultor hizo un buen trabajo y basta'], ok: 1, por: 'Un paralelo compara sistemas, no contra la ley. Un error antiguo puede pasar intacto al sistema nuevo.' },
  { q: '¿Por dónde empiezas a explicar una diferencia?', ops: ['Por el total general', 'Por un trabajador concreto, concepto por concepto', 'Por la impresora', 'Por la gerencia'], ok: 1, por: 'Aislar un caso y compararlo concepto por concepto lleva a la causa raíz.' },
  { q: 'Un operario y el piso nocturno: el sistema le paga el piso y además un «reintegro de noche». Pasa que…', ops: ['Está bien, es un beneficio', 'Se le está pagando dos veces lo mismo', 'Es un error del banco', 'Es una gratificación'], ok: 1, por: 'El reintegro manual existía para completar el piso; si el sistema ya aplica el piso, el reintegro sobra.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '07:15', ch: 'sistema', who: null, titulo: 'Dos planillas del mismo mes', banner: 'assets/esc/planilla.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Nómina360 terminó a las 6:48. ${F.has('paralelo_saltado') ? 'Patricia exigió el paralelo completo igual, y Diego lo corrió con ojeras.' : 'Defendiste esta prueba el lunes y aquí está.'} Diferencia total: <b>S/ 6,835</b>.</p><p>Diego puede sacarte cualquier reporte, pero cada uno le toma media hora. <mark class="clave">¿Cómo quieres mirar los resultados?</mark></p>`,
    type: 'ask', max: 2, prompt: 'Elige los dos reportes que pides primero.',
    opts: [
      { id: 'trab', label: 'Diferencias por trabajador, ordenadas de mayor a menor', info: '412 trabajadores con alguna diferencia. La más grande: S/ 160.50 en un operario del turno noche. 600 diferencias son de un centavo.' },
      { id: 'conc', label: 'Diferencias por concepto', info: 'Sueldo básico: S/ 6,099 de más en Nómina360 (turno noche). X22 «Reint. noche»: igual en los dos. Quinta categoría: S/ 420 de diferencia en 12 empleados. AFP: S/ 310 en 7 personas. Redondeo: S/ 6.' },
      { id: 'tot', label: 'Totales por planilla: empleados, operarios, practicantes', info: 'Empleados: −S/ 730. Operarios: +S/ 7,565. Practicantes: S/ 0. Te dice dónde mirar, pero no qué pasó.' },
      { id: 'gra', label: 'Un gráfico para la gerencia', info: 'Diego arma un gráfico de barras precioso. No explica nada todavía.' },
    ],
    res: picks => ({
      q: picks.includes('trab') && picks.includes('conc') ? 'buena' : picks.includes('gra') ? 'riesgosa' : 'aceptable',
      fx: { calidad: picks.includes('conc') ? 3 : 0, tiempo: picks.includes('gra') ? -2 : 0 },
      flags: picks.includes('trab') && picks.includes('conc') ? ['mirada_trabajador'] : [], cartera: { diferencias: 'Diferencias por ' + picks.map(p => ({ trab: 'trabajador', conc: 'concepto', tot: 'planilla', gra: 'gráfico' })[p]).join(' y ') },
      out: picks.includes('conc') ? 'El patrón salta a la vista: casi toda la diferencia está en los operarios del turno noche. Y el X22 «Reint. noche» se paga igual en los dos sistemas.' : 'Tienes números, pero todavía no sabes dónde se esconde la diferencia.',
      kusi: ['curioso', picks.includes('conc') ? 'Turno noche + X22… ¿te suena?' : 'Busca el concepto, no el total.'],
    }),
    mirada: {
      ve: 'El total engaña: diferencias positivas y negativas se compensan. Mirar por trabajador y por concepto es lo que convierte un número en una explicación.',
      visual: { tipo: 'embudo', titulo: 'Del total al caso', niveles: [['Boletas', 1100], ['Con diferencia', 412], ['Más de S/ 1', 57], ['Más de S/ 100', 38]] },
    },
  },
  {
    id: 'p2', t: '08:40', ch: 'documento', who: null, titulo: 'El cuadro de diferencias', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Armaste el cuadro de diferencias. ${F.has('config_floja') ? 'Ayer se te pasaron errores en la configuración, y algunos aparecen aquí.' : 'Lo que corregiste ayer ya no aparece, y eso confirma que estaba mal.'} Antes del almuerzo puedes explicar <mark class="clave">tres</mark> líneas a fondo.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres diferencias que explicas primero.', boton: 'Explicar estas', resumen: 'Explicaste',
    cols: ['Diferencia', 'Personas', 'Monto'],
    rows: [
      { id: 'noche', cells: ['Sueldo básico del turno noche', '38 operarios', '+S/ 6,099'] },
      { id: 'x22', cells: ['X22 «Reint. noche» igual en los dos sistemas', '38 operarios', 'S/ 0, pero raro'] },
      { id: 'afp', cells: ['Comisión de AFP distinta', '7 personas', 'S/ 310'] },
      { id: 'quinta', cells: ['Retención de quinta categoría', '12 empleados', 'S/ 420'] },
      { id: 'cent', cells: ['Redondeo de un centavo', '600 personas', 'S/ 6'] },
      { id: 'bono', cells: ['Bono de productividad', '412 operarios', 'S/ 0: igual en los dos'] },
    ],
    score: { noche: 3, x22: 3, afp: 2, quinta: 1, cent: -1, bono: 1 },
    res: (picks, sc) => {
      const doble = picks.includes('noche') && picks.includes('x22');
      const q = doble && sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: doble ? 6 : 1, cumplimiento: picks.includes('afp') ? 2 : 0 },
        flags: doble ? ['doble_noche'] : [], cartera: { diferencias: doble ? 'Turno noche explicado: piso + X22 se pagaban dos veces' : 'Cuadro con diferencias sin explicar' },
        out: doble ? 'Lo encuentras: el sistema viejo pagaba S/ 1,500 y completaba con el X22 «Reint. noche» hasta el piso de S/ 1,660.50. Nómina360 ya aplica el piso… y además migró el X22. Pagaba dos veces lo mismo.' : picks.includes('bono') ? 'El bono es igual en los dos sistemas. Eso no prueba que esté bien: solo que se calcula igual.' : 'Explicas lo que eliges, pero la diferencia grande sigue viva.',
        pro: { ok: 'Atacas primero lo que más gente y más plata mueve, y miras con sospecha lo que coincide demasiado.', risk: 'El redondeo de un centavo es real, pero no es urgente.', info: 'Lo que coincide entre sistemas también puede estar mal en los dos.' },
        kusi: [doble ? 'celebra' : 'pensando', doble ? '¡Doble pago encontrado! Eso era casi el 90 %.' : '¿Por qué el X22 sigue ahí?'],
      };
    },
    rules: [[LEY, 'El trabajo nocturno no se paga por debajo de la RMV más 35 % (D.S. 007-2002-TR, art. 8).']],
    mirada: {
      ve: 'Muchos sistemas viejos completan mínimos legales con conceptos manuales de «reintegro». Al migrar, si el sistema nuevo ya aplica el mínimo y además se copia el reintegro, el error es pagar de más. Y pagar de más también es un error.',
      visual: { tipo: 'cambio', titulo: 'El turno noche en cada sistema', pares: [['Viejo: S/ 1,500 + X22 S/ 160.50', 'Nuevo: S/ 1,660.50 + X22 S/ 160.50'], ['Total: S/ 1,660.50', 'Total: S/ 1,821.00'], ['Remedio manual', 'Piso automático, sin X22']] },
    },
  },
  {
    id: 'p3', t: '10:30', ch: 'presencial', who: 'consultor', titulo: 'El concepto de cuadre', banner: 'assets/foto2/tension.webp', lugar: 'Sala de vidrio', show: ['calidad', 'etica', 'tiempo'],
    body: () => `<p>Diego entra con dos cafés y una idea: «Para las diferencias que quedan, creo un concepto CUADRE-OCT y listo, los totales coinciden. Así firmamos hoy y nos sobra un día».</p><p>Quedan S/ 736 por explicar entre AFP, quinta y redondeos. <mark class="clave">Es poca plata. Y es de 619 personas.</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No crear el cuadre: explicar y corregir cada diferencia en su origen, aunque tome toda la tarde.',
        res: { q: 'buena', fx: { calidad: 5, etica: 3, tiempo: -3 }, rel: { consultor: -1, 'patricia-g': 1 }, flags: ['causa_raiz'], cartera: { paralelo: 'Diferencias corregidas en su origen' },
          out: 'A las cinco tienes todo: 7 trabajadores migrados con comisión de AFP equivocada, 12 empleados con la proyección de quinta sin el sueldo de octubre, y un redondeo configurado al céntimo hacia arriba. Diego refunfuña, pero corrige.',
          pro: { ok: 'Cada diferencia explicada es un error que no llegará a una boleta.', risk: 'Pierdes la tarde y Diego se frustra.', info: 'Lo que hoy corriges en la configuración, ya no tendrás que explicarlo en un reclamo.' },
          kusi: ['animo', 'Lento, pero cada sol tiene nombre.'] } },
      { id: 'b', label: 'Aceptar el cuadre: los totales coinciden y la diferencia es menor al 0.03 %.',
        res: { q: 'riesgosa', fx: { calidad: -4, etica: -2, tiempo: 3 }, rel: { consultor: 1 }, flags: ['cuadre_forzado'], cartera: { paralelo: 'Totales cuadrados con CUADRE-OCT' },
          out: 'Los totales coinciden al céntimo. Los siete con la comisión de AFP equivocada seguirán con ella en noviembre.',
          pro: { ok: 'Ganas un día.', risk: 'Un concepto de cuadre esconde errores vivos y nadie podrá explicarlo en una auditoría.' },
          kusi: ['preocupado', 'Cuadrar no es corregir…'] } },
      { id: 'c', label: 'Fijar una tolerancia: explicar las diferencias mayores a S/ 5 por persona y aceptar el resto.',
        res: { q: 'aceptable', fx: { calidad: 2, tiempo: 1 }, flags: ['tolerancia'], cartera: { paralelo: 'Tolerancia de S/ 5 por persona' },
          out: 'Explicas lo grande. Pero entre lo chico estaba la comisión de AFP de siete personas: S/ 4.40 al mes que se acumulan.',
          pro: { ok: 'Una tolerancia ordena el trabajo.', risk: 'Una diferencia chica y repetida suele ser un parámetro mal migrado, no un redondeo.' },
          kusi: ['pensando', 'Chico y repetido… sospechoso.'] } },
    ],
    rules: [[BP, 'Nunca se cuadra con un concepto artificial: se corrige la causa.']],
    mirada: {
      ve: 'El «cuadre» es la tentación clásica de toda conciliación: iguala totales y esconde las causas. En planillas, cada céntimo pertenece a una persona, y una diferencia pequeña repetida casi siempre es un parámetro mal migrado.',
      visual: { tipo: 'balanza', a: { t: 'Concepto de cuadre', items: ['Totales iguales hoy', 'Un día ganado'] }, b: { t: 'Causa raíz', items: ['AFP corregida a 7', 'Quinta bien proyectada', 'Acta con sustento'] } },
    },
  },
  {
    id: 'p4', t: '13:30', ch: 'documento', who: null, titulo: 'Tu método de conciliación', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Almuerzas un menú de doce soles en el comedor: sopa de quinua y arroz con pollo. Patricia te pide que dejes escrito <mark class="clave">cómo explicas una diferencia</mark>, para repetirlo en el cierre y en cada mes que venga.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del método de conciliación. Usa las flechas.', boton: 'Guardar el método',
    items: [
      { id: 'tot', t: 'Comparar totales por planilla para ver dónde está la diferencia', por: 'Te dice dónde mirar.' },
      { id: 'conc', t: 'Bajar al detalle por concepto', por: 'Te dice qué mirar.' },
      { id: 'caso', t: 'Elegir un trabajador concreto y comparar su boleta línea por línea', por: 'Un caso real vale más que un promedio.' },
      { id: 'causa', t: 'Encontrar la causa: dato, parámetro o fórmula', por: 'Las tres causas típicas.' },
      { id: 'corr', t: 'Corregir en el origen, nunca con un ajuste', por: 'Sin cuadres.' },
      { id: 'rec', t: 'Volver a calcular y confirmar que la diferencia desapareció', por: 'Probar la corrección.' },
      { id: 'doc', t: 'Documentarlo en el cuadro de diferencias', por: 'Para el acta y para el próximo mes.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: 1 },
        flags: q === 'riesgosa' ? [] : ['metodo_conciliacion'], cartera: { diferencias: q === 'riesgosa' ? 'Método por ordenar' : 'Método de conciliación en 7 pasos' },
        out: q === 'buena' ? 'Patricia lo lee de pie, con su taper en la mano: «Esto va al manual del área. Y el paso cinco lo subrayo dos veces».' : 'Patricia cambia el orden de dos pasos: «Primero confirmas la causa, después corriges».',
        pro: { ok: 'Un método repetible convierte la intuición en control.', risk: 'Corregir sin confirmar la causa crea errores nuevos.', info: 'Las causas casi siempre son tres: dato, parámetro o fórmula.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Método al manual!' : 'El orden importa.'],
      };
    },
    mirada: {
      ve: 'Conciliar es bajar del total al caso y volver con una explicación. Hacerlo con método permite que otra persona repita tu trabajo y llegue a lo mismo. Eso es lo que hace confiable a un área de planillas.',
      visual: { tipo: 'flujo', titulo: 'Conciliar', pasos: ['Totales', 'Concepto', 'Caso', 'Causa', 'Corregir', 'Recalcular', 'Documentar'] },
    },
  },
  {
    id: 'p5', t: '14:50', ch: 'whatsapp', who: null, titulo: 'La constancia de Julio', banner: 'assets/foto/cv-mano.webp', show: ['personas', 'tiempo', 'cumplimiento'],
    body: () => `<p>Mili te escribe: Julio Huamán, operario de 41 años, necesita una constancia de haberes para un préstamo de una caja municipal: quiere techar el segundo piso de su casa en Ventanilla antes de las lluvias de su tierra, adonde manda plata. <mark class="clave">«Es para ayer.»</mark> Tú estás en medio del paralelo.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle a Mili que la prepare con la boleta de octubre del sistema viejo, la revisas en cinco minutos y la firma Patricia antes de las seis.',
        res: { q: 'buena', fx: { personas: 4, tiempo: -1 }, flags: ['constancia_ok'],
          envia: [['mili', 'Mili, prepárala con la boleta de octubre del sistema viejo, que es la que ya se pagó. La reviso a las 5 y la firma Patricia antes de las 6. Dile a Julio que la recoge mañana a las 7 en portería.']],
          out: 'Julio recoge la constancia a las siete de la mañana siguiente, antes de su turno. Le deja a Mili una bolsa de pan de la panadería de su barrio.',
          pro: { ok: 'Una tarea chica, con hora clara, no se come tu día.', info: 'Usa siempre datos ya pagados para una constancia, no los de una prueba.' },
          kusi: ['feliz', '¡Techo en camino!'] } },
      { id: 'b', label: 'Decirle que espere a la próxima semana: el paralelo es prioridad.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 1 },
          out: 'Julio pierde la cita con la caja y la reprograma para dentro de dos semanas.',
          pro: { ok: 'Proteges tu foco.', risk: 'Para Julio, su constancia también es prioridad. Cinco minutos de revisión no rompían tu día.' },
          kusi: ['pensando', '¿Cinco minutos no alcanzaban?'] } },
    ],
    mirada: { ve: 'En planillas, las tareas grandes conviven con pedidos pequeños que para otra persona son enormes. Delegar con instrucciones precisas y una hora de entrega es la forma de no fallarle a nadie.' },
  },
  {
    id: 'p6', t: '17:20', ch: 'whatsapp', who: 'patricia-g', titulo: 'El estado del paralelo', banner: 'assets/foto2/celebra-laptop.webp', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Patricia está en una reunión con Finanzas y te pide un resumen del paralelo por el grupo. ${F.has('cuadre_forzado') ? 'Los totales coinciden gracias al cuadre de Diego.' : 'Te quedan pocas diferencias por cerrar.'} <mark class="clave">Lo leerá en el celular, entre dos diapositivas.</mark></p>`,
    type: 'compose', enviaA: 'equipo', para: 'Para: grupo Compensaciones Andes Log', boton: 'Enviar el resumen',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato principal', ops: [
        { id: 'd1', t: 'Paralelo de octubre: la diferencia de S/ 6,835 está explicada en casi un 90 %.', ok: true, por: 'Un número y su estado.' },
        { id: 'd2', t: 'Paralelo: casi todo bien 👍', ok: false, por: '«Casi todo» no le sirve a nadie para decidir.' },
      ] },
      { id: 'hall', t: 'El hallazgo', ops: [
        { id: 'h1', t: 'La mayor parte era un doble pago al turno noche: piso nocturno + X22. Diego ya lo corrige.', ok: true, por: 'Qué pasó y qué se hace.' },
        { id: 'h2', t: 'Hubo varios temas de configuración.', ok: false, por: 'Demasiado vago.' },
      ] },
      { id: 'ojo', t: 'Lo que te preocupa', ops: [
        { id: 'o1', t: 'Ojo: el paralelo compara sistemas, no prueba que estén bien. El bono de productividad sale igual en los dos y quiero revisarlo contra la ley.', ok: true, por: 'Adelantas el riesgo sin alarmar.' },
        { id: 'o2', t: 'Nada más, todo controlado.', ok: false, por: 'Cierra una puerta que deberías dejar abierta.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'h1', 'o1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -2, calidad: sel.ojo === 'o1' ? 2 : 0 }, rel: { 'patricia-g': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Patricia responde: «Perfecto. Lo del bono, mañana a primera hora. Finanzas ya preguntó por la CTS y no supe qué decir».' : 'Patricia responde con un «ok». No sabe qué preguntarte.',
        pro: { ok: 'Un dato, un hallazgo y un riesgo. Se lee en diez segundos.', risk: 'Un «todo bien» por WhatsApp se convierte en «nadie me avisó» después.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Diez segundos, todo claro.' : 'Más dato, menos «casi».'],
      };
    },
    mirada: { ve: 'Un paralelo exitoso prueba que el sistema nuevo replica al viejo. Si el viejo tenía un error, el nuevo lo heredará con la misma precisión. Decirlo a tiempo es parte del trabajo.' },
  },
  {
    id: 'p7', t: '18:45', ch: 'documento', who: null, titulo: 'El papel de Teodoro', banner: 'assets/esc/alarma.webp', lugar: 'Tu escritorio, con la oficina vacía', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>La oficina está vacía y el aire acondicionado ya se apagó. Sacas el papel doblado de Teodoro: tres operarios. Abres sus boletas de CTS de noviembre.</p><p>Los tres cobran bono de productividad todos los meses desde noviembre de 2024. En la remuneración computable de su CTS figuran sueldo básico y asignación familiar. <mark class="clave">El bono no aparece.</mark> El vigilante cierra el portón a las 7:30.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Tomar nota de lo que viste, guardar los tres casos en la carpeta y empezar mañana a primera hora con la cabeza fresca.',
        res: { q: 'buena', fx: { calidad: 2, tiempo: 1, personas: 1 }, flags: ['papel_abierto'], cartera: { consultas: 'CTS baja: el bono no entra a la base. Revisar mañana' },
          out: 'Escribes en un pósit amarillo: «¿Bono regular = computable?». Lo pegas en tu pantalla y alcanzas la combi de la Faucett con las luces del aeropuerto encendidas.',
          pro: { ok: 'Registras el hallazgo y cuidas tu energía para analizarlo bien.', info: 'Las conclusiones apuradas a las siete de la noche suelen ser malas conclusiones.' },
          kusi: ['curioso', 'Mañana será un día largo. Descansa.'] } },
      { id: 'b', label: 'Quedarte hasta resolverlo: pedirle al vigilante media hora más y empezar a calcular el reintegro.',
        res: { q: 'aceptable', fx: { calidad: 1, tiempo: -2, personas: -1 }, flags: ['papel_abierto'], cartera: { consultas: 'CTS baja: cálculo empezado de noche' },
          out: 'A las ocho y cuarto tienes una hoja con números a medias y dolor de cabeza. Todavía no sabes si el bono debía entrar.',
          pro: { ok: 'Te importa y se nota.', risk: 'Calcular un reintegro antes de confirmar el criterio es empezar por el final.' },
          kusi: ['preocupado', 'Primero el criterio, después la calculadora.'] } },
    ],
    mirada: { ve: 'Un reclamo concreto, revisado con calma, puede abrir un problema mucho mayor que el reclamo mismo. El buen hallazgo no es el que se resuelve de noche: es el que se registra bien para analizarlo con criterio.' },
  },
];
