// Asistente de RR.HH. · Capítulo 4 · «Uniformes y credenciales» · Semana 1, jueves.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas:
// - Ley 29783, art. 60 (el empleador proporciona EPP adecuados y verifica su uso), art. 62 (el costo de las medidas de
//   SST no lo asumen los trabajadores). Reglamento D.S. 005-2012-TR, art. 97 (el EPP debe atender a las medidas
//   antropométricas de quien lo usa). Texto en: https://www.ugel02.gob.pe/sites/default/files/PRCCSST/ley29783.pdf
// - Descuentos a la remuneración: solo los autorizados por ley, mandato judicial o el propio trabajador (criterio de
//   SUNAFIL). https://www.elperuano.pe/noticia/232276-sunafil-en-que-casos-un-empleador-puede-realizar-descuentos-en-las-remuneraciones
//   https://lpderecho.pe/pagos-exceso-necesario-autorizacion-trabajador-descontarlo-liquidacion-resolucion-037-2021-sunafil-tfl
// - Ley 29733 (datos personales: solo los necesarios para la finalidad), ya citada en el capítulo 1.

export const CAP = {
  n: 4, titulo: 'Uniformes y credenciales', dia: 'Semana 1, jueves', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'Tienda 13 · Castilla, Piura',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Castilla, tienda 13. Todavía huele a pintura y hay polvo de cemento en las góndolas vacías. En el almacén te esperan doce cajas de uniformes que llegaron anoche de Lima.', boton: 'Abrir las cajas',
  kusi: 'Un polo que no queda también dice algo: «no pensamos en ti». ¡Hoy que a todos les quede!',
  lead: 'Resolviste las tallas que no cuadraban, revisaste el acta de entrega, cuidaste los datos de las credenciales y decidiste qué nombre lleva la credencial de Valentina.',
  reflexion: '¿Qué detalle de un uniforme o una credencial puede hacer que alguien se sienta parte del equipo, o fuera de él?',
  siguiente: { n: 5, titulo: 'La inducción', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Faltan 6 días' },
  { id: 'examenes', p: 'Exámenes médicos de ingreso', j: 'Clínica San Miguel', d: 0, e: 'Grupo 3 hoy' },
  { id: 'contratos', p: 'Contratos', j: 'Betty · Legal', d: 0, e: 'Firmando el resto' },
  { id: 'uniformes', p: 'Uniformes y credenciales', j: 'Logística', d: 0, e: 'Llegaron las cajas' },
  { id: 'induccion', p: 'Inducción', j: 'Betty · RR.HH.', d: 0, e: 'Mañana' },
];

export const FUTURO = {
  tallas_reales: ['Pediste las tallas persona por persona y negociaste el cambio.', 'En la inducción casi nadie tendrá que arremangarse el polo.'],
  tallas_xl: ['Repartiste XL «para que se ajusten».', 'Las fotos de la inducción lo van a mostrar.'],
  acta_corregida: ['El acta de entrega ya no cobra uniformes ni EPP.', 'Nadie firmará un descuento escondido.'],
  acta_descuento: ['El acta de entrega dice que el uniforme se descuenta.', 'En la inducción alguien lo preguntará en voz alta.'],
  epp_talla: ['Rosa tendrá zapatos de seguridad de su talla.', 'Entrará a la panadería segura.'],
  credencial_datos_minimos: ['A la imprenta solo le llegó lo necesario.', 'Los datos del personal siguen bajo control.'],
  credencial_nombre: ['La credencial de Valentina dice el nombre con el que se presenta.', 'Ella lo recordará en el capítulo 6.'],
  descuentos_no: ['Frenaste el descuento de credenciales perdidas.', 'Finanzas pedirá una política escrita.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera nueva', who: 'karina' },
  imprenta: { n: 'Imprenta Grau · Credenciales', sub: 'Proveedor', c: '#6B46C1' },
  nuevos: { n: 'Tienda 13 · Nuevos ingresos', sub: '45 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'grupo', t: '07:15', de: 'Betty', txt: 'Llegaron los uniformes a la T13 👕 Martín de Logística te abre el almacén. Mañana es la inducción: ese día se entregan.' },
  { chat: 'grupo', t: '07:22', de: 'César', txt: 'Las altas de los primeros 11 ya están listas para mañana, que es su día de ingreso.', si: 'contratos_limpios' },
  { chat: 'grupo', t: '07:22', de: 'César', txt: 'Antes de darlos de alta necesito saber qué hojas firmaron exactamente esos cuatro. ¿Hablamos?', si: 'firma_en_blanco' },
  { chat: 'wilmer', t: '08:40', de: 'Wilmer', txt: 'Kevin, el nuevo reponedor, ya vino a conocer la tienda. Parece chambeador. Ya, está bien.', si: 'vacante_proceso' },
  { chat: 'wilmer', t: '08:40', de: 'Wilmer', txt: 'Mi pata Richard ya está viniendo a ayudar a descargar. Dale su uniforme, ¿ya?', si: 'vacante_recomendado' },
  { chat: 'karina', t: '10:15', de: 'Karina', txt: 'Señorita, ¿la talla que le dije es para el polo o para el pantalón? 😅 Soy S en polo y 28 en pantalón.' },
  { chat: 'nuevos', t: '12:30', de: 'Yorgelis', txt: 'Buenas tardes. ¿Mañana hay que llevar algo? ¿El uniforme lo dan ese día?' },
  { chat: 'imprenta', t: '14:10', de: 'Imprenta Grau', txt: 'Señorita, si nos manda hoy antes de las 5 los datos, las credenciales salen mañana a las 7.' },
];

export const CORREOS = [
  { t: '07:50', de: 'Martín Querevalú · Logística', para: 'RR.HH. Supermercados Norte', asunto: 'Guía de remisión · uniformes T13', html: '<p>Llegaron 45 juegos: 2 polos, 1 pantalón y 1 gorra por persona. Tallas recibidas: S 6, M 10, L 9, XL 20. Se pidieron con las tallas de la tienda 12, porque nadie mandó las nuevas.</p><p>También llegaron 6 pares de zapatos de seguridad para panadería, tallas 40 a 44.</p><p>Martín</p>' },
  { t: '11:20', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Acta de entrega', html: '<p>Usa el acta de entrega de uniformes y EPP que te dejé en la carpeta. Es la de Logística: revísala antes de imprimirla, que la hicieron hace años.</p><p>Betty</p>' },
];

export const QUIZ = [
  { q: 'Los zapatos de seguridad de la panadería llegaron en tallas 40 a 44 y Rosa calza 36. ¿Qué dice la norma?', ops: ['Que use la talla más cercana', 'Que el EPP debe atender a las medidas de quien lo usa', 'Que traiga sus propios zapatos', 'Nada: es un tema de Logística'], ok: 1, por: 'El Reglamento de la Ley 29783 (art. 97) pide que el EPP se ajuste a las medidas antropométricas del trabajador.' },
  { q: '¿Quién paga los equipos de protección personal?', ops: ['El trabajador, en cuotas', 'El empleador: el costo de la seguridad no lo asumen los trabajadores', 'Mitad y mitad', 'EsSalud'], ok: 1, por: 'La Ley 29783 señala que el empleador proporciona el EPP (art. 60) y que el costo de las medidas de SST no lo asumen los trabajadores (art. 62).' },
  { q: 'Finanzas quiere descontar del sueldo las credenciales perdidas. ¿Cuándo se puede descontar algo de la remuneración?', ops: ['Cuando lo decide la empresa', 'Cuando lo autoriza la ley, un mandato judicial o el propio trabajador', 'Siempre que sea menos de S/ 20', 'Cuando lo dice el jefe de tienda'], ok: 1, por: 'Es el criterio que aplica SUNAFIL: el empleador no puede descontar de forma unilateral.' },
  { q: 'La imprenta de credenciales pide DNI, dirección, teléfono y fecha de nacimiento. Le envías…', ops: ['Todo, por si acaso', 'Solo lo que va impreso: nombre, puesto, código y foto', 'El Excel de ingresos completo', 'Nada: que lo pida a cada persona'], ok: 1, por: 'Solo se comparten los datos necesarios para la finalidad (Ley 29733).' },
  { q: 'Llegaron 20 polos XL y se necesitan 5. Lo primero que conviene hacer es…', ops: ['Repartirlos igual', 'Confirmar las tallas reales y pedir el cambio con una fecha comprometida', 'Que cada uno compre su polo', 'Postergar la inducción'], ok: 1, por: 'El origen del problema fue pedir con tallas de otra tienda: se corrige con tallas reales.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'u1', t: '07:55', ch: 'presencial', who: null, titulo: 'Sobran las XL', banner: 'assets/3d/scenes/retail.webp', lugar: 'Almacén de la tienda 13', show: ['calidad', 'tiempo', 'personas'],
    body: (n, F) => `<p>Martín Querevalú, de Logística, tiene 61 años y abre las cajas con un cúter que lleva desde que la cadena tenía dos tiendas. «Aquí está tu problema», dice: 20 polos XL y solo 6 S. ${F.has('copias_entregadas') ? 'Varias cajeras ya te preguntaron por WhatsApp si el uniforme se paga.' : ''}</p><p>Los uniformes se pidieron con las tallas de la tienda 12, porque <mark class="clave">nadie mandó las tallas de la gente nueva</mark>. Mañana es la inducción.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres acciones con las que vas a resolver las tallas.', boton: 'Hacer esto', resumen: 'Decidiste',
    cols: ['Acción', 'Lo que implica'],
    rows: [
      { id: 'tallas', cells: ['Pedir a cada persona su talla real por WhatsApp, con la tabla de medidas del proveedor', 'Una tarde de mensajes'] },
      { id: 'cambio', cells: ['Pedir al proveedor el cambio de 15 XL por S y M, con fecha comprometida', 'Una llamada y un correo con la guía de remisión'] },
      { id: 'prioridad', cells: ['Entregar primero a cajeras y panaderos, que tienen práctica en caja y horno la próxima semana', 'Los demás reciben el martes'] },
      { id: 'xl', cells: ['Repartir los XL y que se los ajusten con un nudo', 'Se resuelve hoy'] },
      { id: 'compra', cells: ['Que cada persona compre su polo y luego se le reembolse', 'Sin esperar al proveedor'] },
    ],
    score: { tallas: 3, cambio: 3, prioridad: 2, xl: -3, compra: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, personas: picks.includes('xl') ? -3 : 2, tiempo: -1 },
        flags: [picks.includes('xl') ? 'tallas_xl' : 'tallas_reales'], cartera: { uniformes: picks.includes('cambio') ? 'Cambio de tallas pedido' : 'Tallas sin resolver' },
        envia: picks.includes('tallas') ? [['nuevos', 'Hola a todos 👋 Para su uniforme necesito su talla de polo y de pantalón. Les dejo la tabla de medidas del proveedor. Respóndanme por interno antes de las 4. ¡Gracias!']] : undefined,
        out: q === 'buena' ? 'Martín se ríe: «Por fin alguien que pregunta antes de pedir». A las 4 tienes 38 de 45 tallas confirmadas.' : picks.includes('xl') ? 'Los polos XL salen del almacén. Jhonatan, que es talla S, parece que lleva un vestido.' : 'Avanzas, pero el problema de fondo, las tallas de la gente, sigue sin resolverse.',
        pro: { ok: 'Corriges la causa (no se pidieron tallas) y no solo el síntoma.', risk: 'Un uniforme que no queda incomoda, se ve mal frente al cliente y puede engancharse en una máquina.', info: 'Guarda la tabla de tallas: será la base para la próxima apertura.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tallas reales, polos que quedan!' : 'Un nudo no es una talla…'],
      };
    },
    rules: [[BP, 'Pide las tallas a cada persona antes de comprar, no después.']],
    mirada: {
      ve: 'Un error de logística casi siempre empieza antes: aquí, nadie pidió las tallas a la gente nueva. Una asistente de RR.HH. que conecta ingresos con logística evita que 15 personas empiecen con un polo que no es suyo.',
      visual: { tipo: 'rango', titulo: 'Polos XL: lo que llegó y lo que se necesita', min: 0, max: 25, banda: [4, 6], marcas: [['Llegaron', 20], ['Se necesitan', 5]] },
    },
  },
  {
    id: 'u2', t: '09:30', ch: 'documento', who: null, titulo: 'El acta de entrega', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica'],
    body: () => `<p>Abres el acta de entrega de uniformes y EPP que dejó Betty. La hizo Logística hace años y se usó en todas las aperturas.</p><p>Mañana la firmarán 45 personas. Como hiciste con la plantilla del contrato, <mark class="clave">la lees antes de imprimir</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la ley o lo que debería corregirse en el acta.',
    doc: { t: 'Acta de entrega de uniforme y equipos de protección personal', sub: 'Supermercados Norte · Formato de Logística' },
    lines: [
      { id: 'datos', t: 'Nombre, DNI y puesto del trabajador.' },
      { id: 'prendas', t: 'Prendas entregadas: 2 polos, 1 pantalón y 1 gorra, con su talla.' },
      { id: 'zapatos', t: 'EPP de panadería: zapatos de seguridad «talla estándar 42» para todo el personal.', bad: LEY, why: 'El EPP debe ajustarse a las medidas de quien lo usa. Un zapato que no es de su talla no protege y puede causar una caída.' },
      { id: 'cuotas', t: '«El costo del uniforme se descontará en tres cuotas de la remuneración.»', bad: LEY, why: 'Un descuento impuesto por la empresa no es válido: solo proceden los que autoriza la ley, un mandato judicial o el propio trabajador.' },
      { id: 'repone', t: '«Si el EPP se daña por el uso, el trabajador lo repondrá a su costo.»', bad: LEY, why: 'El costo de las medidas de seguridad no lo asumen los trabajadores (Ley 29783, art. 62).' },
      { id: 'uso', t: 'El trabajador usará el EPP durante su labor en la zona de hornos.', duda: 'Está bien: usar el EPP es una obligación del trabajador, y la empresa verifica que lo use.' },
      { id: 'firma', t: 'Firma del trabajador y fecha de recepción.' },
      { id: 'huella', t: 'Foto del trabajador con su uniforme puesto, para el archivo.', bad: BP, why: 'No hace falta para entregar un uniforme. Es un dato personal más que no tiene finalidad.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 3 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 6, etica: missLey ? -3 : 3 },
      flags: [missLey ? 'acta_descuento' : 'acta_corregida'], cartera: { uniformes: missLey ? 'Acta vieja lista para imprimir' : 'Acta de entrega corregida' },
      out: missLey ? 'Imprimes 45 actas tal como estaban. Martín las engrapa: «Así siempre ha sido».' : 'Le mandas a Betty el acta corregida con tres cambios marcados. Ella responde: «Esto debió corregirse hace tres aperturas. Gracias».',
      pro: { ok: 'Un acta de entrega deja constancia de lo que se entrega, no de lo que se cobra.', risk: 'Un descuento escondido en un formato termina en un reclamo, y en la desconfianza de 45 personas.', info: 'Pide a Logística que el acta corregida sea la única en la carpeta.' },
      kusi: missLey ? ['preocupado', 'Ese formato cobraba lo que no debía…'] : ['celebra', '¡Qué bacán! Ni un sol escondido.'],
    }),
    rules: [[LEY, 'El empleador proporciona el EPP adecuado (Ley 29783, art. 60) y debe ajustarse a las medidas de quien lo usa (Reglamento, art. 97).'], [LEY, 'El costo de las medidas de SST no lo asumen los trabajadores (Ley 29783, art. 62).'], [LEY, 'Solo se descuenta de la remuneración lo que autoriza la ley, un mandato judicial o el propio trabajador (criterio de SUNAFIL).']],
    mirada: {
      ve: 'Los formatos viejos repiten errores viejos. Un acta de entrega es un documento sencillo, pero si esconde un cobro o un EPP de talla única, 45 personas firman algo que las perjudica sin saberlo.',
      visual: { tipo: 'cambio', titulo: 'Del acta de Logística al acta corregida', pares: [['Zapatos «talla estándar 42»', 'Zapatos de la talla de cada persona'], ['Uniforme descontado en tres cuotas', 'Uniforme entregado por la empresa'], ['El EPP dañado lo repone el trabajador', 'La empresa repone el EPP'], ['Foto con uniforme para el archivo', 'Sin datos que no se necesitan']] },
      normas: [
        { ley: 'Ley 29783, arts. 60 y 62', dice: 'El empleador proporciona equipos de protección adecuados y verifica su uso. El costo de las medidas de seguridad no lo asumen los trabajadores.', practica: 'Ni el EPP ni su reposición por desgaste se cobran.' },
        { ley: 'Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 97', dice: 'Los equipos de protección personal deben atender a las medidas antropométricas del trabajador que los usará.', practica: 'Una talla única de zapato de seguridad no cumple.' },
      ],
    },
  },
  {
    id: 'u3', t: '11:30', ch: 'whatsapp', who: null, titulo: 'Lo que pide la imprenta', banner: 'assets/esc/dedos.webp', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: () => `<p>La Imprenta Grau, en el centro de Piura, hará las 45 credenciales. Te escriben: «Mándenos el Excel con DNI, dirección, teléfono, fecha de nacimiento y foto de cada uno, para no equivocarnos».</p><p>La credencial lleva nombre, puesto, código y foto. <mark class="clave">¿Qué les mandas y cómo?</mark></p>`,
    type: 'compose', enviaA: 'imprenta', para: 'Para: Imprenta Grau · Credenciales', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué datos', ops: [
        { id: 'q1', t: 'Les comparto solo lo que va impreso: nombre, puesto, código de trabajador y foto.', ok: true, por: 'Solo lo necesario para la credencial.' },
        { id: 'q2', t: 'Les mando el Excel completo de ingresos, así tienen todo.', ok: false, por: 'Dirección, teléfono y fecha de nacimiento no hacen falta para imprimir una credencial.' },
      ] },
      { id: 'como', t: 'Por dónde', ops: [
        { id: 'c1', t: 'Va en una carpeta de la empresa con acceso solo para ustedes hasta mañana.', ok: true, por: 'Un canal controlado y con fecha de cierre.' },
        { id: 'c2', t: 'Se los paso por aquí en un rato 📎', ok: false, por: 'Las fotos y los datos quedan en un chat que no controlas.' },
      ] },
      { id: 'despues', t: 'Después', ops: [
        { id: 'd1', t: 'Cuando entreguen las credenciales, ¿me confirman que borraron el archivo?', ok: true, por: 'Los datos se usan para una finalidad y luego no se guardan.' },
        { id: 'd2', t: 'Gracias, quedo atenta.', ok: null, por: 'Amable, pero los datos se quedan en la imprenta para siempre.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.como === 'c2', buenas = ['q1', 'c1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { cumplimiento: mal ? -5 : 4, calidad: q === 'buena' ? 3 : 0, tiempo: -1 },
        flags: mal ? [] : ['credencial_datos_minimos'], cartera: { uniformes: mal ? 'Datos completos enviados a la imprenta' : 'Datos de credenciales enviados con acceso limitado' },
        out: q === 'buena' ? 'La imprenta responde: «Perfecto, así es más rápido». Las credenciales salen mañana a las 7.' : mal ? 'La imprenta recibe direcciones, teléfonos y fotos de 45 personas en un chat. Nadie sabe quién más lo ve.' : 'La imprenta recibe lo necesario, pero el archivo se quedará en su computadora sin fecha de borrado.',
        pro: { ok: 'Compartes lo mínimo, por un canal controlado, y pides que se borre.', risk: 'Cada proveedor que recibe datos de más es un riesgo de filtración.', info: 'Pide a Betty si la empresa tiene un acuerdo de confidencialidad con la imprenta.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'preocupado' : 'pensando', q === 'buena' ? 'Lo justo y necesario. ¡Dale!' : mal ? 'Eso es mucha información para una credencial…' : 'Casi: falta pensar en el después.'],
      };
    },
    rules: [[LEY, 'Solo se comparten los datos personales necesarios para la finalidad (Ley 29733).']],
    mirada: {
      ve: 'Un proveedor pide «todo» para no equivocarse, y es humano dárselo para salir del paso. Pero cada dato de más que sale de la empresa es un dato que ya no proteges.',
      visual: { tipo: 'balanza', a: { t: 'El Excel completo', items: ['La imprenta no pregunta nada', 'Se envía en un minuto'] }, b: { t: 'Solo lo que va impreso', items: ['Nombre, puesto, código y foto', 'Carpeta con acceso limitado', 'Archivo borrado al terminar'] } },
    },
  },
  {
    id: 'u4', t: '13:15', ch: 'presencial', who: null, titulo: 'El nombre en la credencial', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Pasadizo de la tienda 13', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Estás comiendo un sánguche de pavo en una caja de cartón cuando se acerca una de las reponedoras nuevas, de Catacaos. Habla rápido, como quien ya practicó la frase.</p><p>«Señorita, en mi DNI todavía figura otro nombre, pero yo soy Valentina. Todos me conocen así. <mark class="clave">¿Mi credencial puede decir Valentina?</mark>» Wilmer, que pasa con unos planos, se queda escuchando.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que sí: la credencial es un documento interno y llevará «Valentina», mientras el contrato, la boleta y el T-Registro van con el nombre del DNI. Avisar a Betty para que quede como criterio.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, confianza: 2 }, rel: { betty: 1, wilmer: -1 }, flags: ['credencial_nombre'], cartera: { uniformes: 'Credencial de Valentina con su nombre' },
          out: 'Valentina sonríe por primera vez en la mañana. Wilmer murmura «puro cuento» y se va. Betty responde tu mensaje: «Bien pensado. Lo ponemos como criterio para toda la cadena».',
          pro: { ok: 'Separas lo legal (DNI en los documentos oficiales) de lo cotidiano (cómo la llaman todos los días).', risk: 'Algún jefe puede no estar de acuerdo y tendrás que explicarlo.', info: 'Pregúntale cómo prefiere que la llamen en la inducción, delante de todos.' },
          kusi: ['celebra', '¡Qué divino! Una credencial que dice quién es.'] } },
      { id: 'b', label: 'Explicarle que el sistema genera las credenciales con el nombre del DNI y que no puedes cambiarlo.',
        res: { q: 'aceptable', fx: { personas: -3, confianza: -1 }, rel: { wilmer: 0 },
          out: 'Valentina asiente y se va en silencio. Después descubres que el campo del nombre en la plantilla de la imprenta se puede escribir a mano.',
          pro: { ok: 'Sigues el procedimiento que conocías.', risk: 'Usar el sistema como excusa, sin preguntar, deja a una persona expuesta cada día frente a clientes y compañeros.' },
          kusi: ['triste', '¿De verdad no se podía?'] } },
      { id: 'c', label: 'Decirle que lo consultarás con Wilmer, porque es su tienda y él verá cómo lo toman los demás.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -3 }, rel: { wilmer: 1 },
          out: 'Wilmer dice que no «para no confundir a los clientes». Esa tarde, dos reponedores ya hacen bromas con el tema en el almacén.',
          pro: { ok: 'Involucras al jefe.', risk: 'Una decisión sobre la identidad de una persona no depende de cómo «lo tomen los demás», y exponerla así la deja más vulnerable.' },
          kusi: ['indignado', 'Su nombre no es un tema de la tienda.'] } },
    ],
    rules: [[BP, 'Los documentos oficiales usan el nombre del DNI. En lo interno, llama a cada persona como se presenta.'], [POL, 'Las decisiones nuevas de RR.HH. se consultan con la jefa del área, no con el jefe de tienda.']],
    mirada: {
      ve: 'Una credencial se usa cada día frente a clientes y compañeros. Para Valentina, el nombre que lleva puede ser la diferencia entre sentirse parte del equipo o tener que explicarse cada mañana. RR.HH. cuida lo legal sin olvidar a la persona.',
      visual: { tipo: 'flujo', titulo: 'Dónde va cada nombre', pasos: ['Contrato: nombre del DNI', 'T-Registro y boleta: nombre del DNI', 'Credencial: Valentina', 'En la tienda: Valentina'] },
    },
  },
  {
    id: 'u5', t: '15:00', ch: 'llamada', who: null, titulo: 'Fechas que no calzan', banner: 'assets/foto/llamada.webp', show: ['tiempo', 'calidad', 'personas'],
    body: (n, F) => `<p>${F.has('tallas_reales') ? 'Ya tienes 38 tallas reales.' : 'Sigues sin todas las tallas.'} Ahora toca saber qué llega para mañana. Llamas a los tres proveedores que necesitas.</p>`,
    type: 'calls',
    calls: [['Confecciones del Norte', 'Contesta: el cambio tarda tres días', 'Señorita, el cambio de XL por S y M se lo tengo en tres días útiles, no antes. Mi costurera está con una campaña de colegios.'], ['Logística · zapatos de seguridad', 'Contesta: hay talla 36 en el almacén de Sullana', 'Martín: «En Sullana hay un par 36 de la tienda 9. Si lo pido hoy, llega mañana en el camión».'], ['Imprenta Grau', 'Contesta: mañana a las 7', 'Si los datos llegan hoy, mañana a las 7 le entrego las 45 credenciales.']],
    prompt: 'Las credenciales llegan a tiempo y los zapatos de Rosa también. Los polos S y M, no. ¿Qué haces para mañana?',
    choices: [
      { id: 'a', label: 'Pedir a Confecciones una entrega parcial urgente de S y M para mañana, y que el resto llegue en tres días. Pedir el par 36 hoy.',
        res: { q: 'buena', fx: { tiempo: 2, calidad: 3, personas: 3 }, flags: ['epp_talla'], cartera: { uniformes: 'Entrega parcial mañana · resto el martes' },
          out: 'La dueña de Confecciones acepta coser 12 polos S y M para hoy en la noche. «Pero me los paga ese día, ¿ya?» Le pasas el pedido a Logística.',
          pro: { ok: 'Negocias lo urgente y aceptas lo que no puede apurarse.', info: 'Deja por escrito, en un correo, la fecha comprometida de cada entrega.' },
          kusi: ['feliz', 'Lo urgente primero, lo demás con fecha.'] } },
      { id: 'b', label: 'Aceptar los tres días y avisar en el grupo que mañana vayan con ropa propia oscura. Pedir el par 36 hoy.',
        res: { q: 'aceptable', fx: { tiempo: 1, personas: -1 }, flags: ['epp_talla'], cartera: { uniformes: 'Uniformes el martes' },
          out: 'Mañana la mitad del grupo irá con su propia ropa. En las fotos de la inducción no parecerá un solo equipo.',
          pro: { ok: 'Resuelves con lo que hay.', risk: 'La primera imagen del equipo es dispareja, y algunos no tienen ropa oscura para trabajar.' },
          kusi: ['pensando', 'Se puede, pero se nota.'] } },
      { id: 'c', label: 'Pasar la inducción a la próxima semana, cuando ya estén todos los uniformes.',
        res: { q: 'riesgosa', fx: { tiempo: -5, cumplimiento: -2 }, rel: { betty: -1 },
          out: 'Betty te llama: «La inducción no depende de los polos. Si la movemos, la tienda abre con gente sin capacitar». La inducción se queda el viernes.',
          pro: { ok: 'Esperas a tener todo.', risk: 'Mueves lo importante (la inducción) por lo accesorio (un polo).' },
          kusi: ['sorpresa', '¿Mover la inducción por un polo?'] } },
    ],
    rules: [[BP, 'Cuando un proveedor no llega, negocia entregas parciales para lo urgente y deja las fechas por escrito.']],
    mirada: {
      ve: 'Coordinar proveedores es aceptar que cada uno tiene su propia campaña, sus costureras y sus camiones. Lo que puedes controlar es qué es urgente, qué puede esperar y que todo quede escrito.',
      visual: { tipo: 'linea', titulo: 'Lo que llega antes de la inducción', hitos: [['Hoy, noche', '12 polos S y M'], ['Mañana, 7:00', '45 credenciales'], ['Mañana, camión', 'Zapatos 36 desde Sullana'], ['Martes', 'Resto de los polos']] },
    },
  },
  {
    id: 'u6', t: '16:30', ch: 'documento', who: null, titulo: 'El control de uniformes', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina provisional de la tienda 13', show: ['calidad', 'cumplimiento'],
    body: () => `<p>En una mesa plegable, al lado de un ventilador que mueve el aire caliente de un lado a otro, armas tu control de uniformes y credenciales.</p><p>Mañana vas a entregar a 45 personas en una hora. <mark class="clave">Ordena cómo va a funcionar la entrega</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la entrega de uniformes y credenciales. Usa las flechas.', boton: 'Guardar el control',
    items: [
      { id: 'tallas', t: 'Cerrar la lista de tallas confirmadas por persona', por: 'Todo parte de saber qué le toca a cada uno.' },
      { id: 'paquete', t: 'Armar un paquete por persona, con su nombre y su talla en la bolsa', por: 'Así no se reparte «a ojo» en la fila.' },
      { id: 'cred', t: 'Recibir las credenciales y revisar nombre y puesto contra la lista', por: 'Un error en la credencial se ve todos los días.' },
      { id: 'entrega', t: 'Entregar paquete y credencial, con firma en el acta corregida', por: 'Queda constancia de lo que se entregó.' },
      { id: 'pend', t: 'Anotar lo que quedó pendiente y su fecha de llegada', por: 'Los polos que faltan no se olvidan.' },
      { id: 'cierre', t: 'Mandar a Betty y a Logística el control con entregados y pendientes', por: 'Lo que no se informa, no existe.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -1 : 2 },
        cartera: { uniformes: q === 'riesgosa' ? 'Control de uniformes desordenado' : 'Control de uniformes listo' },
        out: q === 'buena' ? 'Martín revisa tu control y lo copia para Logística: «Esto lo uso en la tienda 14».' : 'Tu control sirve, aunque mañana vas a tener que volver atrás en un par de pasos.',
        pro: { ok: 'Preparar paquetes por persona convierte una fila caótica en una entrega de minutos.', risk: 'Entregar «a ojo» en la fila es la forma más rápida de que alguien se quede sin su talla.', info: 'Lleva bolsas extra y un plumón: siempre hay algún cambio de último minuto.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡45 paquetes, cero confusiones!' : 'Casi: el orden ahorra carreras.'],
      };
    },
    rules: [[BP, 'Toda entrega a personal deja constancia firmada de qué se entregó y qué quedó pendiente.']],
    mirada: {
      ve: 'El control de uniformes parece la parte menos importante de RR.HH., hasta que alguien dice «a mí no me dieron» y no hay forma de saber si es cierto. Un buen control protege a la persona y a la empresa.',
      visual: { tipo: 'flujo', titulo: 'La entrega de mañana', pasos: ['Tallas', 'Paquetes', 'Credenciales', 'Firma', 'Pendientes', 'Reporte'] },
    },
  },
  {
    id: 'u7', t: '18:00', ch: 'presencial', who: 'cesar', titulo: 'La idea de Finanzas', banner: 'assets/foto/cafe.webp', lugar: 'Oficina central · cocina', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Vuelves a la oficina central a dejar las actas. César está calentando su café en el microondas.</p><p>«Oye, Finanzas me pidió que, desde esta quincena, <mark class="clave">les descontemos S/ 15 del sueldo a los que pierdan la credencial</mark>. Dicen que en la tienda 12 se perdieron veinte. ¿Lo pongo en la planilla de la tienda 13?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que no se puede descontar sin autorización expresa de cada persona, y proponer a Betty una política escrita: primera reposición sin costo y, desde la segunda, un pago que la persona autorice por escrito.',
        res: { q: 'buena', fx: { etica: 3, cumplimiento: 5, confianza: 2 }, rel: { cesar: 1, betty: 1 }, flags: ['descuentos_no'],
          out: 'César asiente: «Eso mismo le dije yo, pero a mí no me hacen caso». Betty lleva la propuesta a Finanzas la próxima semana.',
          pro: { ok: 'Atiendes la preocupación de Finanzas sin un descuento unilateral.', info: 'Pregunta por qué se perdieron veinte credenciales: quizá falta un portacredencial o un casillero.' },
          kusi: ['animo', 'Una regla clara vale más que un descuento sorpresa.'] } },
      { id: 'b', label: 'Decirle que sí: S/ 15 es poco y así la gente cuida su credencial.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -5 }, rel: { cesar: -1 },
          out: 'César levanta una ceja: «¿Y quién firma eso? Yo no descuento nada sin papel». Te deja pensando.',
          pro: { ok: 'Buscas que cuiden la credencial.', risk: 'Un descuento sin base legal ni autorización del trabajador es un descuento indebido, aunque sea pequeño.' },
          kusi: ['preocupado', 'Pequeño no quiere decir permitido.'] } },
      { id: 'c', label: 'Decirle que eso lo ve Finanzas, no RR.HH.',
        res: { q: 'aceptable', fx: { confianza: -1 }, rel: { cesar: 0 },
          out: 'César se encoge de hombros y se va con su café. La idea sigue circulando en los correos de Finanzas.',
          pro: { ok: 'No te comprometes con algo indebido.', risk: 'Lo que se descuenta del sueldo sí es tema de RR.HH., y alguien lo aplicará sin preguntar.' },
          kusi: ['pensando', '¿De verdad no es tu tema?'] } },
    ],
    rules: [[LEY, 'Solo proceden los descuentos autorizados por ley, mandato judicial o el propio trabajador (criterio de SUNAFIL).'], [BP, 'Antes de sancionar una pérdida, pregunta por qué se pierden las cosas.']],
    mirada: {
      ve: 'Finanzas tiene un problema real: credenciales que se pierden y cuestan. Pero la solución no puede ser tocar el sueldo sin permiso. RR.HH. propone una regla clara, escrita y aceptada, y además busca la causa.',
      visual: { tipo: 'cambio', titulo: 'De la idea de Finanzas a una política', pares: [['Descontar S/ 15 a quien la pierda', 'Primera reposición sin costo'], ['Sin aviso', 'Política escrita y comunicada'], ['Sin firma', 'Pago autorizado por escrito desde la segunda'], ['Castigar', 'Preguntar por qué se pierden']] },
      normas: [{ ley: 'Criterio de SUNAFIL sobre descuentos en la remuneración', dice: 'Los descuentos deben estar autorizados por la ley, por un mandato judicial o por el propio trabajador. El empleador no puede descontar de forma unilateral.', practica: 'Una política de reposición debe contar con la autorización escrita de cada persona.' }],
    },
  },
];
