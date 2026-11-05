// Asistente de RR.HH. · Capítulo 3 · «Los contratos» · Semana 1, miércoles.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas:
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 57: contrato por inicio de nueva actividad, que incluye la apertura de
//   nuevos establecimientos; duración máxima de tres años. Transcrito en:
//   https://lpderecho.pe/contratos-trabajo-sujetos-modalidad
//   https://lpderecho.pe/jurisprudencia-articulo-57-tuo-decreto-legislativo-728-contrato-inicio-incremento-actividad/
//   Modelo oficial en gob.pe: https://cdn.www.gob.pe/uploads/document/file/7780081/6570990-contrato_de_trabajo_por_inicio_de_nueva_actividad.pdf
// - D.S. 003-97-TR, art. 72: los contratos sujetos a modalidad constan por escrito y por triplicado, con su duración
//   y la causa objetiva. Art. 73: se presentan a la Autoridad Administrativa de Trabajo para su conocimiento y registro.
// - Ley 29783, art. 35 c): adjuntar al contrato las recomendaciones de seguridad y salud en el trabajo.
//   https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - RMV: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR), según la guía del proyecto.
// - Constitución Política del Perú, art. 26: carácter irrenunciable de los derechos reconocidos por la Constitución y la ley.

export const CAP = {
  n: 3, titulo: 'Los contratos', dia: 'Semana 1, miércoles', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Supermercados Norte · Oficina central de Piura',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles en la oficina central. A las 10:00 vienen 15 personas a firmar su contrato, y la impresora del segundo piso ya hace ese ruido raro de cuando se va a atascar.', boton: 'Prender la computadora',
  kusi: 'Un contrato es la primera promesa que la empresa le hace a alguien. ¡Que diga la verdad!',
  lead: 'Encontraste los errores de la plantilla, cruzaste contratos contra fichas, decidiste qué hacer con los que estaban mal y armaste tu propio checklist de contratos.',
  reflexion: '¿Qué le dirías a alguien que firma su primer contrato sin leerlo?',
  siguiente: { n: 4, titulo: 'Uniformes y credenciales', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Faltan 7 días' },
  { id: 'examenes', p: 'Exámenes médicos de ingreso', j: 'Clínica San Miguel', d: 0, e: 'Grupo 2 hoy' },
  { id: 'contratos', p: 'Contratos', j: 'Betty · Legal', d: 0, e: '15 firman hoy' },
  { id: 'uniformes', p: 'Uniformes y credenciales', j: 'Logística', d: 0, e: 'Tallas sin pedir' },
  { id: 'induccion', p: 'Inducción', j: 'Betty · RR.HH.', d: 0, e: 'Este viernes' },
];

export const FUTURO = {
  plantilla_corregida: ['Corregiste la plantilla: sueldo vigente, causa objetiva y sin cláusulas ilegales.', 'Los 30 contratos que faltan saldrán limpios.'],
  plantilla_vieja: ['La plantilla vieja sigue en la carpeta compartida.', 'Alguien la volverá a usar la próxima semana.'],
  contratos_limpios: ['Ningún contrato se firmó con errores.', 'César dará de alta sin rebotes el día de la apertura.'],
  firma_en_blanco: ['Hiciste firmar hojas que después ibas a cambiar.', 'Eso saldrá a la luz en el capítulo 6.'],
  copias_entregadas: ['Cada persona se llevó su copia del contrato.', 'Las dudas sobre el sueldo llegarán menos a tu WhatsApp.'],
  vacante_proceso: ['El puesto de Jorge se cubre con la terna de selección.', 'Wilmer quería otra cosa.'],
  vacante_recomendado: ['El puesto de Jorge lo cubre un recomendado de Wilmer.', 'Otra vez sin proceso.'],
  checklist_contratos: ['Tienes tu checklist de contratos.', 'Te servirá para los 30 que faltan.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera nueva', who: 'karina' },
  jorge: { n: 'Jorge Ramos', sub: 'Reponedor seleccionado', c: '#8A5A2B' },
};

export const WSP = [
  { chat: 'grupo', t: '07:20', de: 'Betty', txt: 'Hoy firman los primeros 15 💼 Usa la plantilla de la carpeta «Contratos T12». Yo estoy en la tienda 4 hasta el mediodía.' },
  { chat: 'grupo', t: '07:26', de: 'César', txt: 'Ojo que la plantilla de la T12 es de antes del aumento de la RMV. Yo solo aviso 🙃' },
  { chat: 'cesar', t: '07:40', de: 'César', txt: 'Gracias por la ficha con DNI verificado. Hoy no te devuelvo nada… todavía 😏', si: 'checklist_bueno' },
  { chat: 'cesar', t: '07:40', de: 'César', txt: 'Te devolví 12 fichas: DNI incompletos y fechas al revés. Antes de imprimir contratos, revísalas, porfa.', si: 'checklist_flojo' },
  { chat: 'karina', t: '08:05', de: 'Karina', txt: 'Ya me sacaron la sangre en ayunas, señorita 💪 ¿A qué hora es la firma?', si: 'karina_cuidada' },
  { chat: 'karina', t: '08:05', de: 'Karina', txt: 'Buenos días. El jueves voy a la clínica. ¿Igual puedo firmar hoy?', no: 'karina_cuidada' },
  { chat: 'wilmer', t: '11:50', de: 'Wilmer', txt: 'Ya vi el turno de panadería con dos maestros. No me gusta, pero ya. Que don Teodoro firme hoy.', si: 'teodoro_ajuste' },
  { chat: 'wilmer', t: '11:50', de: 'Wilmer', txt: '¿Ya conseguiste otro panadero? El horno no se prende solo.', si: 'teodoro_fuera' },
  { chat: 'jorge', t: '14:58', de: 'Jorge', txt: 'Señorita, disculpe. Recién prendí el celular. ¿Me puede llamar?' },
];

export const CORREOS = [
  { t: '07:35', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Firma de contratos · tienda 13', html: '<p>Los 15 de hoy firman contrato por inicio de nueva actividad, por la apertura de la tienda 13. Revisa cada contrato contra su ficha antes de imprimir. Si algo no cuadra, no se firma: prefiero un día de atraso que un contrato mal hecho.</p><p>Betty</p>' },
  { t: '13:20', de: 'Clínica San Miguel · Salud Ocupacional', para: 'RR.HH. Supermercados Norte', asunto: 'Grupo 2 · aptitud', html: '<p>Adjuntamos el resultado de aptitud del grupo 2, en el formato acordado: solo aptitud y restricciones.</p>' },
];

export const QUIZ = [
  { q: 'Un contrato por inicio de nueva actividad debe indicar…', ops: ['Solo el sueldo', 'Su duración y la causa objetiva que justifica que sea temporal', 'Que la persona renuncia a reclamar', 'Nada especial: basta con la firma'], ok: 1, por: 'El art. 72 del D.S. 003-97-TR pide que conste por escrito, con su duración y la causa objetiva.' },
  { q: 'La plantilla dice un sueldo de S/ 1,150 para una cajera a tiempo completo. ¿Qué haces?', ops: ['Lo dejas: así estaba', 'Lo corriges: no puede ser menor que la RMV vigente de S/ 1,230', 'Lo pagas con un bono aparte', 'Le preguntas a la cajera si está de acuerdo'], ok: 1, por: 'Desde el 1 de octubre de 2026 la RMV es S/ 1,230 (D.S. 015-2026-TR).' },
  { q: 'Una cláusula dice que la trabajadora «renuncia a reclamar horas extras». Esa cláusula…', ops: ['Es válida si la firma', 'No vale: los derechos laborales son irrenunciables', 'Vale solo durante el periodo de prueba', 'Vale si lo aprueba el jefe de tienda'], ok: 1, por: 'La Constitución reconoce el carácter irrenunciable de los derechos laborales (art. 26).' },
  { q: '¿Qué documento de seguridad debe ir adjunto al contrato?', ops: ['El mapa de riesgos', 'Las recomendaciones de seguridad y salud en el trabajo del puesto', 'El certificado médico completo', 'Ninguno'], ok: 1, por: 'La Ley 29783, art. 35 c), pide adjuntar al contrato las recomendaciones de SST.' },
  { q: 'Encuentras un error en un contrato 10 minutos antes de la firma. Lo mejor es…', ops: ['Que firme la última hoja y luego cambias la del error', 'Corregirlo y firmar ese contrato después, aunque se atrase', 'Firmarlo así y olvidarlo', 'Corregirlo a mano con lapicero sin avisar'], ok: 1, por: 'Un contrato se firma completo y correcto. Cambiar hojas después de la firma es falsear el documento.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '07:50', ch: 'documento', who: null, titulo: 'La plantilla de la tienda 12', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Abres la carpeta «Contratos T12» y sale la plantilla que usaron en la última apertura. Para probarla, la llenas con los datos de Karina, cajera.</p><p>César ya avisó que es vieja. Antes de imprimir 15 copias, <mark class="clave">la lees entera, línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la ley o lo que debería corregirse en la plantilla.',
    doc: { t: 'Contrato de trabajo sujeto a modalidad', sub: 'Plantilla «Contratos T12» · llenada con los datos de Karina Zapata' },
    lines: [
      { id: 'mod', t: 'Modalidad: contrato por inicio de nueva actividad (art. 57 del D.S. 003-97-TR).' },
      { id: 'causa', t: 'Causa objetiva: «por necesidades del negocio».', bad: LEY, why: 'La causa debe ser concreta: aquí, la apertura de la tienda 13 en Castilla. Una frase genérica no justifica un contrato temporal.' },
      { id: 'tienda', t: 'Lugar de trabajo: tienda 12, Av. Sánchez Cerro.', bad: BP, why: 'Copiado de la apertura anterior. Karina trabajará en la tienda 13.' },
      { id: 'sueldo', t: 'Remuneración mensual: S/ 1,150.', bad: LEY, why: 'Es el monto de la plantilla vieja. Con jornada completa, no puede ser menor que la RMV vigente: S/ 1,230.' },
      { id: 'jornada', t: 'Jornada: 48 horas semanales, en turnos que fija la tienda.' },
      { id: 'extras', t: '«La trabajadora renuncia a reclamar el pago de horas extras.»', bad: LEY, why: 'Los derechos laborales son irrenunciables: esa cláusula no vale aunque se firme.' },
      { id: 'sst', t: 'Anexo: recomendaciones de seguridad y salud para el puesto de cajera.', duda: 'Está bien: la Ley 29783 pide adjuntarlas al contrato.' },
      { id: 'copia', t: '«Se firma en un solo ejemplar, que conserva la empresa.»', bad: LEY, why: 'Se firma por triplicado. Una copia es para la trabajadora.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 4 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 6, calidad: missLey ? -2 : 3 },
      flags: [missLey ? 'plantilla_vieja' : 'plantilla_corregida'], cartera: { contratos: missLey ? 'Plantilla con errores' : 'Plantilla corregida' },
      out: missLey ? 'Imprimes con la plantilla casi como estaba. La impresora se atasca en la copia 9 y nadie se da cuenta de lo que dice la hoja.' : 'Guardas una plantilla nueva, «Contratos T13», con el sueldo vigente, la causa concreta y sin la cláusula de horas extras. Borras la vieja de la carpeta para que nadie la vuelva a usar.',
      pro: { ok: 'Leer la plantilla antes de usarla evita repetir 45 veces el mismo error.', risk: 'Un contrato temporal sin causa objetiva concreta puede ser cuestionado y tratado como indeterminado.', info: 'Cada vez que cambia la RMV, revisa todas las plantillas.' },
      kusi: missLey ? ['preocupado', 'Esa plantilla tenía trampas viejas…'] : ['celebra', '¡Plantilla nueva para tienda nueva!'],
    }),
    rules: [[LEY, 'El contrato sujeto a modalidad consta por escrito y por triplicado, con su duración y su causa objetiva (D.S. 003-97-TR, art. 72).'], [LEY, 'La RMV es S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).'], [LEY, 'Los derechos laborales son irrenunciables (Constitución, art. 26).']],
    mirada: {
      ve: 'Las plantillas envejecen: cambia la RMV, cambian las tiendas, cambian las normas. Quien prepara contratos no llena huecos: revisa que lo que la empresa promete por escrito sea verdad y sea legal.',
      visual: { tipo: 'cambio', titulo: 'De la plantilla T12 a la plantilla T13', pares: [['«Por necesidades del negocio»', 'Apertura de la tienda 13 en Castilla'], ['S/ 1,150', 'S/ 1,230 (RMV vigente)'], ['Renuncia a horas extras', 'Cláusula eliminada'], ['Un solo ejemplar', 'Por triplicado, una copia para ella']] },
      normas: [
        { ley: 'D.S. 003-97-TR (Ley de Productividad y Competitividad Laboral), art. 57', dice: 'El contrato por inicio de nueva actividad incluye la apertura de nuevos establecimientos. Dura como máximo tres años.', practica: 'La apertura de la tienda 13 es la causa: hay que escribirla tal cual, no con una frase genérica.' },
        { ley: 'D.S. 003-97-TR, art. 72', dice: 'Los contratos sujetos a modalidad constan por escrito y por triplicado, con su duración, su causa objetiva y las demás condiciones.', practica: 'Una copia firmada se la lleva la trabajadora.' },
      ],
    },
  },
  {
    id: 'k2', t: '09:00', ch: 'sistema', who: null, titulo: 'Contrato contra ficha', banner: 'assets/esc/planilla.webp', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('checklist_flojo') ? 'César te devolvió 12 fichas ayer. Algunas ya las corregiste; otras no.' : 'Las fichas que enviaste a César están limpias. Ahora toca que los contratos digan lo mismo.'} Pones en dos pantallas el Excel de ingresos y los contratos generados.</p><p>Faltan 60 minutos para la firma. <mark class="clave">Cuatro de estos siete contratos tienen un error</mark>.</p>`,
    type: 'pick', n: 4, prompt: 'Elige los cuatro contratos que no coinciden con la ficha.', boton: 'Separar estos contratos', resumen: 'Separaste',
    cols: ['Contrato', 'Lo que dice', 'Lo que dice la ficha'],
    rows: [
      { id: 'milagros', cells: ['Milagros Peña · cajera', 'Inicio: el día de la apertura de la tienda 12', 'Inicio: primer día de inducción'] },
      { id: 'luis', cells: ['Luis Yarlequé · reponedor', 'Sueldo de maestro panadero', 'Sueldo de reponedor'] },
      { id: 'teo', cells: ['Teodoro Huamán · maestro panadero', 'Turno rotativo de panadería', 'Turno rotativo de panadería'] },
      { id: 'yorgelis', cells: ['Yorgelis Pérez · cajera', 'Carné de extranjería con un dígito de menos', 'Carné de extranjería completo'] },
      { id: 'karina', cells: ['Karina Zapata · cajera', 'Sueldo S/ 1,230 · tienda 13', 'Sueldo S/ 1,230 · tienda 13'] },
      { id: 'jhon', cells: ['Jhonatan Ipanaqué · reponedor', 'Inicio: un mes antes de la apertura', 'Inicio: primer día de inducción'] },
      { id: 'rosa', cells: ['Rosa Chiroque · panadera', 'Puesto y sueldo de panadera', 'Puesto y sueldo de panadera'] },
    ],
    score: { milagros: 2, luis: 2, yorgelis: 2, jhon: 2, teo: -2, karina: -2, rosa: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 1 : -4, tiempo: -1 },
        out: q === 'buena' ? 'Separas los cuatro. Tres tienen la fecha equivocada o el documento mal escrito, y uno, el sueldo de otro puesto: el de Luis habría cobrado como maestro panadero sin serlo.' : 'Separaste algunos, pero otros contratos con errores siguen en la pila de firma.',
        pro: { ok: 'Comparar el contrato con la ficha, campo por campo, es la única forma de no firmar errores.', risk: 'Un contrato con la fecha o el sueldo equivocados se convierte en un reclamo, o en un pago que no corresponde.', info: 'Revisa siempre cuatro campos: documento, puesto, sueldo y fecha de inicio.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cuatro de cuatro! Ojo de halcón.' : 'Algo se te pasó en la pila.'],
      };
    },
    rules: [[BP, 'Revisa documento, puesto, sueldo y fecha de inicio en cada contrato antes de imprimirlo.']],
    mirada: {
      ve: 'Los errores de un contrato casi nunca son grandes: es una fecha copiada, un dígito menos, una fila corrida en el Excel. Por eso se revisan contra la ficha, uno por uno, aunque haya prisa.',
      visual: { tipo: 'embudo', titulo: 'Tu revisión de esta mañana', niveles: [['Contratos generados', 15], ['Revisados contra la ficha', 15], ['Con errores', 4]] },
    },
  },
  {
    id: 'k3', t: '09:45', ch: 'presencial', who: 'betty', titulo: 'Quince minutos', banner: 'assets/foto2/tension.webp', lugar: 'Sala de capacitación', show: ['etica', 'cumplimiento', 'tiempo', 'confianza'],
    body: () => `<p>Ya llegaron casi todos: algunos pidieron permiso en otro trabajo para venir. La impresora se trabó otra vez. Betty te llama desde la tienda 4: «¿Todo listo para las diez?».</p><p>Le cuentas lo de los cuatro contratos. Hay silencio en la línea. <mark class="clave">«Tú estás ahí. ¿Qué propones?»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Firmar hoy los 11 correctos y citar a los cuatro mañana temprano, con el contrato corregido y revisado por César.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, personas: -1, confianza: 2 }, rel: { betty: 1 }, flags: ['contratos_limpios'], cartera: { contratos: '11 firmados · 4 mañana' },
          out: 'Les explicas a los cuatro qué pasó y que no es su culpa. Jhonatan se ríe: «Mejor, así no firmo que empecé hace un mes». Milagros tuerce la boca: mañana tendrá que pedir permiso otra vez.',
          pro: { ok: 'Nada se firma con errores y la mayoría sale hoy con su contrato.', risk: 'Cuatro personas vuelven otro día y una ya pidió dos permisos esta semana.', info: 'Ofrece a quienes vuelven un horario que no choque con su otro trabajo.' },
          kusi: ['animo', 'Un día de atraso, cero errores firmados.'] } },
      { id: 'b', label: 'Corregir los cuatro ahora mismo e imprimirlos en la impresora del primer piso, aunque la firma empiece a las 11.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, tiempo: -4, personas: -2 }, flags: ['contratos_limpios'], cartera: { contratos: '15 firmados con una hora de atraso' },
          out: 'Corriges a la carrera mientras 15 personas esperan en sillas de plástico. Todos firman, pero dos se van antes de la explicación porque entraban a trabajar a las 12.',
          pro: { ok: 'Todos firman hoy.', risk: 'Con prisa se cuelan errores nuevos, y la explicación del contrato se acorta.' },
          kusi: ['pensando', 'Firmaron todos… ¿entendieron lo que firmaron?'] } },
      { id: 'c', label: 'Que los cuatro firmen hoy la última hoja y, en la tarde, cambiar las hojas con errores por las correctas.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6, tiempo: 3 }, flags: ['firma_en_blanco'], cartera: { contratos: '15 firmados (4 con hojas cambiadas)' },
          out: 'Todos firman a las 10:05. Esa tarde cambias cuatro hojas. Nadie lo sabe, salvo tú… y Milagros, que le tomó foto a su contrato antes de firmar.',
          pro: { ok: 'Cumples la hora.', risk: 'Cambiar hojas después de la firma es alterar un documento que la persona aceptó. Si sale a la luz, nadie volverá a confiar en RR.HH.' },
          kusi: ['indignado', '¡Eso no se hace con una firma!'] } },
    ],
    rules: [[POL, 'Betty: «Si algo no cuadra, no se firma».'], [BP, 'Explica el contrato antes de firmar. La prisa no es excusa.']],
    mirada: {
      ve: 'La presión de la hora existe y es real: gente que pidió permiso, una jefa al teléfono, una impresora trabada. Justo ahí se decide si un contrato es un compromiso serio o un trámite que se arregla después.',
      visual: { tipo: 'balanza', a: { t: 'Firmar todo hoy', items: ['Se cumple la hora', 'Nadie vuelve otro día'] }, b: { t: 'Firmar solo lo correcto', items: ['Cero errores firmados', 'Explicación completa', 'Confianza en RR.HH.'] } },
    },
  },
  {
    id: 'k4', t: '10:30', ch: 'presencial', who: null, titulo: 'Las preguntas de la mesa', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala de capacitación', show: ['personas', 'confianza'],
    body: () => `<p>En la mesa larga, cada persona lee su contrato. Jhonatan, de 19 años, ya firmó sin leer. Yorgelis, cajera venezolana y mamá de dos, lee cada línea con el dedo. Don Teodoro se puso los lentes.</p><p>Te llueven preguntas. <mark class="clave">Tienes tiempo de responder dos con calma</mark> antes de la siguiente tanda.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que vas a responder primero, para toda la mesa.',
    opts: [
      { id: 'plazo', label: 'Yorgelis: «¿Por qué dice plazo fijo? ¿Me van a botar en seis meses?»', info: 'Le explicas que es un contrato por inicio de nueva actividad: la apertura de la tienda 13 es la causa. Puede renovarse mientras siga esa causa y tiene un tope legal. «No es un aviso de despido: es la forma legal de contratar en una apertura.»' },
      { id: 'copia', label: 'Don Teodoro: «¿Me puedo llevar una copia para que la lea mi hija?»', info: '«Claro, una de las tres copias es suya.» Toda la mesa levanta la cabeza: varios no sabían que tenían derecho a llevarse la suya.' },
      { id: 'pago', label: 'Jhonatan: «¿Cuándo me pagan? ¿Y en qué banco?»', info: 'Fin de mes, en cuenta sueldo, con boleta. Lo anotas para pedirle a César que les explique la boleta en la inducción.' },
      { id: 'unif', label: 'Una cajera: «¿El uniforme me lo descuentan del sueldo?»', info: '«No. El uniforme lo entrega la empresa. Mañana vemos las tallas.» Haces una nota mental: las tallas todavía no se piden.' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('copia') ? 3 : 1, confianza: picks.includes('plazo') ? 3 : 1, tiempo: -1 },
      flags: picks.includes('copia') ? ['copias_entregadas'] : [], cartera: { uniformes: picks.includes('unif') ? 'Prometiste tallas para mañana' : 'Tallas sin pedir' },
      out: picks.includes('copia') ? 'Cada persona se va con su copia en un sobre manila. Yorgelis le toma foto a la página del sueldo para mandársela a su mamá en Maracaibo.' : 'Las respuestas calman a la mesa. Algunos se van sin su copia y te escribirán la próxima semana preguntando cuánto ganan.',
      kusi: ['curioso', 'Las preguntas de la mesa son las dudas de todos.'],
    }),
    mirada: {
      ve: 'Para muchas personas este es su primer contrato formal, o el primero en un país nuevo. Explicar el plazo, entregar la copia y decir la verdad sobre el sueldo no es cortesía: es lo que hace que confíen en RR.HH. después.',
      visual: { tipo: 'flujo', titulo: 'La firma bien hecha', pasos: ['Leer juntos', 'Responder dudas', 'Firmar las tres copias', 'Entregar su copia'], aqui: 1 },
    },
  },
  {
    id: 'k5', t: '15:00', ch: 'llamada', who: null, titulo: 'Los que no vinieron', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'etica'],
    body: () => `<p>Almorzaste un seco de chabelo frío frente a la computadora. Dos personas no vinieron a firmar y Jorge Ramos por fin escribió. Llamas.</p>`,
    type: 'calls',
    calls: [['Jorge Ramos', 'Contesta: aceptó otro trabajo', 'Señorita, disculpe… me salió algo en una agroexportadora de Sullana, con movilidad. Ya no voy a ir. Perdón por no avisar.'], ['Rosa Chiroque', 'Contesta: viene el lunes', 'Ay, sí, el lunes después de la clínica paso a firmar, ¿ya?'], ['Brayan Sosa', 'Contesta', 'Mi tío dice que si falta un reponedor, él tiene un amigo que puede entrar el lunes.']],
    prompt: 'Jorge no vendrá. El puesto de reponedor queda libre. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Pedirle a Betty los finalistas que quedaron en la selección para reponedor y llamar al siguiente.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3, tiempo: -2 }, rel: { wilmer: -1 }, flags: ['vacante_proceso'], cartera: { ingresos: 'Vacante de Jorge: siguiente finalista' },
          out: 'Betty te pasa la terna. El segundo finalista, Kevin Chunga (sin parentesco con César, aclara él), acepta. Wilmer se queja: «Mi amigo era de confianza».',
          pro: { ok: 'La vacante se cubre con quien ya pasó el proceso.', info: 'Agradécele a Jorge que avisó: hoy no viene, pero podría volver a postular.' },
          kusi: ['feliz', 'La terna existe para esto.'] } },
      { id: 'b', label: 'Aceptar al amigo de Wilmer: entra el lunes y no hay que esperar.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3, tiempo: 3 }, rel: { wilmer: 1 }, flags: ['vacante_recomendado'], cartera: { ingresos: 'Vacante de Jorge: amigo de Wilmer' },
          out: 'El amigo de Wilmer llega el lunes sin examen médico ni entrevista. Los finalistas que quedaron afuera nunca reciben una llamada.',
          pro: { ok: 'La vacante se cubre rápido.', risk: 'Otra vez un ingreso sin proceso, y el equipo empieza a notarlo.' },
          kusi: ['preocupado', '¿Otra vez por la puerta de atrás?'] } },
      { id: 'c', label: 'Dejar el puesto vacío por ahora: con 44 personas también se puede abrir.',
        res: { q: 'aceptable', fx: { tiempo: 1, calidad: -2 }, cartera: { ingresos: 'Vacante de Jorge sin cubrir' },
          out: 'El cuadro de turnos queda con un hueco en reposición del turno noche. Nadie lo nota… por ahora.',
          pro: { ok: 'No metes a nadie sin proceso.', risk: 'Una vacante que no se cubre hoy se vuelve una urgencia la semana de la apertura.' },
          kusi: ['pensando', 'Ese hueco va a doler más adelante.'] } },
    ],
    rules: [[BP, 'Cuando una persona desiste, recurre primero a los finalistas del mismo proceso.']],
    mirada: {
      ve: 'En una apertura masiva siempre hay desistimientos: la gente consigue algo mejor, cerca o con movilidad. Por eso una buena selección deja finalistas de reserva. Cubrir con un recomendado sin proceso parece rápido, pero repite el atajo que ya frenaste.',
      visual: { tipo: 'embudo', titulo: 'Firmas de hoy', niveles: [['Citados', 15], ['Vinieron', 13], ['Desistió', 1]] },
    },
  },
  {
    id: 'k6', t: '16:40', ch: 'documento', who: null, titulo: 'Tu checklist de contratos', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Faltan 30 contratos. Para no depender de la memoria ni de la plantilla, armas tu propio checklist: <mark class="clave">antes, durante y después de la firma</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del checklist.', boton: 'Guardar el checklist',
    bloques: [
      { id: 'antes', t: 'Antes de imprimir', n: 2, ops: [
        { id: 'a1', t: 'Cruzar documento, puesto, sueldo y fecha de inicio con la ficha.', ok: true, por: 'Los cuatro campos donde nacen los errores.' },
        { id: 'a2', t: 'Usar la plantilla T13, con la RMV vigente y la causa objetiva concreta.', ok: true },
        { id: 'a3', t: 'Dejar la fecha en blanco para llenarla después.', ok: false, por: 'Un contrato con espacios en blanco se presta a cambios sin acuerdo.' },
      ] },
      { id: 'durante', t: 'En la firma', n: 2, ops: [
        { id: 'd1', t: 'Leer las condiciones principales con la persona y responder dudas.', ok: true },
        { id: 'd2', t: 'Firmar las tres copias y entregarle la suya, con el anexo de seguridad.', ok: true, por: 'Triplicado y recomendaciones de SST adjuntas.' },
        { id: 'd3', t: 'Mandarle a Wilmer una foto de cada contrato firmado por WhatsApp.', ok: false, por: 'El contrato tiene datos personales y el sueldo: no viaja por WhatsApp.' },
      ] },
      { id: 'despues', t: 'Después de la firma', n: 2, ops: [
        { id: 'p1', t: 'Preparar la presentación de los contratos a la Autoridad Administrativa de Trabajo para su registro.', ok: true, por: 'El art. 73 del D.S. 003-97-TR lo exige para los contratos sujetos a modalidad.' },
        { id: 'p2', t: 'Dejar la copia de la empresa en el legajo y avisar a César que puede preparar el alta.', ok: true },
        { id: 'p3', t: 'Guardar todas las copias en RR.HH. «por si acaso».', ok: false, por: 'Una copia es de la persona.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -2 },
        flags: q === 'riesgosa' ? [] : ['checklist_contratos'], cartera: { contratos: q === 'buena' ? 'Checklist de contratos listo' : 'Checklist con huecos' },
        out: q === 'buena' ? 'Pegas el checklist en tu escritorio, al lado del de ingreso. César pasa, lo lee y te pide una copia «para cuando me toque a mí».' : 'Tu checklist ayuda, pero incluye pasos que traerán problemas con los 30 contratos que faltan.',
        pro: { ok: 'Un checklist convierte lo que aprendiste hoy en algo que no depende de tu memoria.', risk: 'Fechas en blanco y contratos por WhatsApp son los dos atajos que más problemas traen.', info: 'Pregúntale a Betty cómo hace la empresa la presentación de contratos ante la Autoridad de Trabajo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Antes, durante y después. ¡Qué divino!' : 'Algunas piezas sobraban…'],
      };
    },
    rules: [[LEY, 'Los contratos sujetos a modalidad se presentan a la Autoridad Administrativa de Trabajo para su registro (D.S. 003-97-TR, art. 73).'], [LEY, 'Al contrato se adjuntan las recomendaciones de seguridad y salud del puesto (Ley 29783, art. 35 c).']],
    mirada: {
      ve: 'El contrato no termina cuando se firma: hay una copia que entregar, un legajo que armar, un alta que preparar y un registro ante la Autoridad de Trabajo. Un checklist pone en orden lo que pasa antes, durante y después.',
      visual: { tipo: 'flujo', titulo: 'La vida de un contrato', pasos: ['Revisar contra la ficha', 'Explicar y firmar', 'Entregar su copia', 'Registro ante la Autoridad', 'Legajo y alta'] },
    },
  },
  {
    id: 'k7', t: '18:20', ch: 'correo', who: null, titulo: 'El cierre del día', banner: 'assets/foto/reunion-jefa.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Betty Seminario', to: 'Asistente de RR.HH.', asunto: 'Cierre de hoy' },
    body: (n, F) => `<p>Ya estoy de vuelta de la tienda 4. ${F.has('teodoro_fuera') ? 'Revisé la pila de contratos y no encuentro el del maestro panadero. ¿Qué pasó con don Teodoro? ' : ''}Mándame cómo cerramos hoy: <mark class="clave">lo firmado, lo pendiente y lo que te preocupa</mark>.</p><p>Betty</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Lo firmado y lo pendiente en números, los errores que encontraste y la vacante de Jorge.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { betty: 1 }, responde: 'Betty: firmaron 11 de 15. Cuatro contratos tenían errores (tres fechas o documentos y un sueldo de otro puesto): se corrigen y firman mañana. Corregí la plantilla con la RMV vigente. Jorge desistió; propongo llamar al siguiente finalista. Me preocupa que las tallas de uniforme aún no se piden.',
          out: 'Betty responde en cinco minutos: «Excelente día. Mañana vemos uniformes a primera hora». Sales a la avenida y el calor por fin afloja. El bus a casa va lleno, pero hoy no te importa.',
          kusi: ['celebra', 'Día cerrado. ¡Qué bacán!'] } },
      { id: 'b', label: 'Que firmaron casi todos y que mañana terminas.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Betty: firmaron casi todos, mañana termino con el resto 👍',
          out: 'Betty se queda sin saber de la plantilla vieja ni de la vacante. Mañana te preguntará por qué Wilmer le dice que «falta un reponedor».',
          kusi: ['pensando', '¿Y lo que te preocupa?'] } },
    ],
    mirada: { ve: 'Cerrar el día por escrito sirve para dos cosas: que tu jefa sepa dónde está parada y que tú veas lo que viene. Hoy, lo que viene son los uniformes.' },
  },
];
