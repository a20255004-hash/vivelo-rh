// HR Business Partner · Capítulo 9 · «Las metas nuevas» · Semana 2, jueves.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - TUO del D.Leg. 728 (D.S. 003-97-TR), art. 6: constituye remuneración el íntegro de lo que el trabajador recibe por sus
//   servicios, en dinero o en especie, siempre que sea de su libre disposición. Las comisiones son remuneración.
//   https://lpderecho.pe/tipos-remuneracion-ordenamiento-laboral/
//   https://lpderecho.pe/trabajo-comision-derecho-laboral/
// - Remuneración mínima vital: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR). La RMV no puede condicionarse al
//   cumplimiento de metas (criterio aplicado por SUNAFIL):
//   https://lpderecho.pe/remuneracion-minima-condicionada-cumplimiento-metas-resolucion-13-2021-sunafil-ire-ayac/
// - Ley 30709 (política salarial con criterios objetivos), ya citada en el capítulo 4.

export const CAP = {
  n: 9, titulo: 'Las metas nuevas', dia: 'Semana 2, jueves', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:15', cierreHora: '19:00',
  apertura: 'Jueves. El día después del anuncio la oficina está rara: nadie habla fuerte. Mauricio ya tiene su propuesta de metas para el directorio: todas suben 30 %. Los vendedores, desde anoche, hacen cuentas en el grupo.', boton: 'Abrir la propuesta',
  kusi: 'Una meta que nadie cree posible no motiva: espanta. Y un sueldo que depende de lo imposible no es un incentivo. ¡Dale!',
  lead: 'Revisaste un esquema de comisiones con trampas, negociaste con Mauricio unas metas que se puedan cumplir, ordenaste cómo se fijan, armaste un esquema justo, le respondiste a Kenji y escuchaste cómo arrancaron los nuevos jefes.',
  reflexion: '¿Cuándo sentiste hoy que defendías el negocio y cuándo que defendías a Kenji? ¿Eran cosas distintas?',
  siguiente: { n: 10, titulo: 'Dos semanas con Ventas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'metas', p: 'Metas de los vendedores', j: 'Mauricio · Comercial', d: 8, e: '+30 % para todos' },
  { id: 'esquema', p: 'Esquema de comisiones', j: 'Gonzalo · Compensaciones', d: 8, e: 'Borrador de Mauricio' },
  { id: 'kenji', p: 'Kenji Tamashiro', j: 'Ventas · zona Este', d: 8, e: 'Haciendo cuentas' },
  { id: 'jhon', p: 'Jhon Ruiz · jefe de zona SJL', j: 'Mauricio · Comercial', d: 8, e: 'Primer día como jefe' },
];

export const FUTURO = {
  esquema_limpio: ['El básico ya no depende de llegar a la meta.', 'Capítulo 10.'],
  esquema_trampa: ['El esquema condiciona el básico a la meta.', 'Fiorella lo frenará en el capítulo 10.'],
  metas_piloto: ['Las metas nuevas se prueban un mes, distintas por zona y después de arreglar el stock.', 'Semana 3.'],
  metas_30: ['Las metas suben 30 % para todos desde el lunes.', 'Las renuncias empezarán en la semana 3.'],
  metas_metodo: ['Hay un método para fijar metas: historia, potencial, stock y validación con la calle.', 'Capítulo 10.'],
  esquema_justo: ['El esquema premia llegar y retener, y no castiga lo que el vendedor no controla.', 'Capítulo 10.'],
  kenji_se_queda: ['Kenji decidió darle una oportunidad al nuevo esquema.', 'Capítulo 10.'],
  jhon_alerta: ['Supiste que Jhon rompió sus condiciones en su primera formación como jefe.', 'Fiorella cerrará la revisión el lunes. Semana 3.'],
  metas_defendidas: ['Mauricio puede defender las metas ante el directorio con números.', 'Capítulo 10.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  gonzalo: { n: 'Gonzalo Arce', sub: 'Analista de Compensaciones', c: '#2E7D6B' },
  fiorella: { n: 'Fiorella Campos', sub: 'Relaciones Laborales', c: '#8E44AD' },
};

export const WSP = [
  { chat: 'kenji', t: '07:30', de: 'Kenji', txt: 'En el grupo dicen que la meta sube 30 %. Si es así, con lo que gano no me alcanza ni para la gasolina 😩', si: 'faq_promesas' },
  { chat: 'kenji', t: '07:30', de: 'Kenji', txt: 'Mi nuevo jefe dijo que las metas las vemos juntos. Eso nunca había pasado. A ver si es verdad 🤞', si: 'jefes_listos' },
  { chat: 'gonzalo', t: '09:05', de: 'Gonzalo', txt: 'Ya tengo la venta real por zona de los últimos 12 meses y los quiebres de stock del almacén. Te lo paso cuando digas.' },
  { chat: 'fiorella', t: '12:40', de: 'Fiorella', txt: 'Marco aceptó pasar a Formación Comercial cuando se liberó la vacante de Wilfredo, que firmó el convenio. Todo por escrito 🙌', si: 'marco_voluntario' },
  { chat: 'fiorella', t: '12:40', de: 'Fiorella', txt: 'Llegó una carta notarial de Marco: emplaza a la empresa por reducción de categoría. Tenemos seis días.', si: 'marco_impuesto' },
  { chat: 'mauricio', t: '18:55', de: 'Mauricio', txt: 'El directorio no quería un piloto. Les mostré los números de stock y lo aceptaron. Te debo una.', si: 'metas_defendidas' },
];

export const CORREOS = [
  { t: '07:45', de: 'Mauricio Lerner', para: 'HR Business Partner · Comercial; Gonzalo Arce', asunto: 'Esquema de metas y comisiones', html: '<p>Adjunto el nuevo esquema. Lo presento mañana al directorio. Quiero que sea agresivo: el que vende, gana; el que no, que se mueva.</p><p>M.</p>' },
];

export const QUIZ = [
  { q: 'Pagar el básico solo si el vendedor llega al 70 % de la meta…', ops: ['Es un incentivo válido', 'No vale: la remuneración mínima no puede condicionarse a metas', 'Es lo normal en ventas', 'Es legal si está en el contrato'], ok: 1, por: 'La RMV (S/ 1,230 desde octubre de 2026) se paga por la jornada, no por el resultado.' },
  { q: 'Las comisiones de un vendedor…', ops: ['No son remuneración', 'Son remuneración: forman parte de lo que recibe por sus servicios', 'Son un regalo', 'Solo cuentan si son fijas'], ok: 1, por: 'TUO del D.Leg. 728, art. 6.' },
  { q: 'Una buena meta comercial…', ops: ['Sube igual para todas las zonas', 'Parte de la venta real y del potencial de cada zona, descontando lo que el vendedor no controla', 'Es la que pide el directorio', 'Es siempre 30 % más'], ok: 1, por: 'Metas distintas para zonas distintas, validadas con la calle.' },
  { q: 'Si las ventas se pierden por falta de stock, subir la meta al vendedor…', ops: ['Lo motiva', 'Le traslada un problema que no controla', 'Resuelve el stock', 'Es neutral'], ok: 1, por: 'Primero se arregla lo que depende de la empresa.' },
  { q: 'Un jefe de zona que aceptó condiciones de trato las rompe en su primer día. El HRBP…', ops: ['Espera a ver si se repite', 'Lo registra y lo lleva a la revisión formal en curso', 'Lo despide', 'Lo comenta en el grupo'], ok: 1, por: 'Las condiciones sirven si se hacen cumplir.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '08:10', ch: 'documento', who: null, titulo: 'El esquema «agresivo»', banner: 'assets/esc/planilla.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Abres el adjunto de Mauricio con el café recién servido. ${F.has('metas_imposibles') ? 'Te acuerdas de las 36 bodegas que Kenji alcanza de las 48 que le piden.' : 'Es una tabla limpia, con colores.'}</p><p>Mañana lo ve el directorio. <mark class="clave">Marca lo que no puede presentarse así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las reglas del esquema que incumplen la ley o que castigan lo que el vendedor no controla.',
    doc: { t: 'Esquema de metas y comisiones 2027 · vendedores de ruta', sub: 'Propuesta de Mauricio Lerner' },
    lines: [
      { id: 'sube', t: 'Meta mensual: +30 % sobre la meta actual, igual para las 8 zonas.', bad: BP, why: 'Las zonas son distintas: Chosica no es San Juan de Lurigancho. Una subida pareja ignora el potencial real de cada una.' },
      { id: 'basico', t: 'El básico se paga completo solo si el vendedor llega al 70 % de la meta.', bad: LEY, why: 'La remuneración mínima vital (S/ 1,230 desde octubre de 2026) no puede depender del cumplimiento de metas. SUNAFIL lo ha sancionado.' },
      { id: 'escala', t: 'Comisión escalonada: desde el 80 % de la meta, y más alta sobre el 100 %.' },
      { id: 'stock', t: 'La venta perdida por falta de stock cuenta como venta no lograda del vendedor.', bad: BP, why: 'Castiga al vendedor por un problema del almacén. Lo viste en la ruta: dos productos que no llegan.' },
      { id: 'renuncia', t: 'Quien renuncie antes del fin de mes pierde la comisión del mes en curso.', bad: LEY, why: 'La comisión ya ganada es remuneración (TUO del D.Leg. 728, art. 6) y se paga en la liquidación: no se pierde por renunciar.' },
      { id: 'nuevo', t: 'Bono por cada cliente nuevo que compre dos meses seguidos.' },
      { id: 'ranking', t: 'Ranking semanal de vendedores, publicado en el grupo de WhatsApp de cada zona.', bad: BP, why: 'Exponer resultados en público es lo que hacía Jhon en la formación. La nueva ficha pide conversarlos uno a uno.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le devuelves el esquema a Gonzalo con comentarios sobre el stock y el ranking. Una regla que no podía estar sigue ahí.' : `Le marcas a Gonzalo ${hitsLey} reglas ilegales. Él suelta el aire: «Lo del básico al 70 % me tenía mal desde anoche. Menos mal».`,
      flags: [missLey ? 'esquema_trampa' : 'esquema_limpio'], cartera: { esquema: missLey ? 'Esquema con reglas ilegales' : 'Básico sin condición; comisión ganada protegida' },
      pro: { ok: 'Separaste lo que es incentivo de lo que es un castigo ilegal.', risk: 'Un esquema que condiciona el básico o quita comisiones ganadas termina en multas y en renuncias.', info: 'El incentivo va arriba del piso, nunca debajo.' },
      kusi: missLey ? ['preocupado', 'Una regla ilegal sigue en la tabla…'] : ['celebra', '¡El piso no se toca!'],
    }),
    rules: [[LEY, 'TUO del D.Leg. 728, art. 6: las comisiones son remuneración.'], [LEY, 'La RMV (S/ 1,230, D.S. 015-2026-TR) no se condiciona a metas.']],
    mirada: {
      ve: '«Agresivo» suena a ambición, pero en este esquema varias reglas castigan al vendedor por cosas que no controla o le quitan lo que ya ganó. Un buen incentivo empuja hacia arriba desde un piso firme; nunca mueve el piso.',
      visual: { tipo: 'rango', titulo: 'Lo que gana un vendedor (ilustrativo)', min: 0, max: 100, banda: [30, 85], marcas: [['RMV: piso que no se toca', 30], ['Básico de Nutrimás', 40], ['Con comisión al 100 %', 70], ['Con comisión sobre la meta', 85]] },
      normas: [{ ley: 'TUO del D.Leg. 728, art. 6, y D.S. 015-2026-TR', dice: 'Es remuneración el íntegro de lo que el trabajador recibe por sus servicios, de su libre disposición. La RMV es de S/ 1,230 desde el 1 de octubre de 2026.', practica: 'La comisión ganada se paga aunque el vendedor renuncie, y el básico no puede quedar debajo del mínimo por no llegar a la meta.' }],
    },
  },
  {
    id: 'm2', t: '09:30', ch: 'presencial', who: 'mauricio', titulo: '«El directorio quiere 30»', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala de la Gerencia Comercial', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Mauricio escucha tus marcas y acepta lo del básico sin discutir. Pero en la meta no cede. «El directorio aprobó la reestructura porque prometí crecer. <mark class="clave">Si no subo 30 %, para qué hicimos todo esto</mark>.»</p><p>${F.has('informe_ruta') ? 'Tiene abierto tu WhatsApp de la semana pasada: stock, crédito y reportes.' : 'Sobre la mesa está la venta real por zona que mandó Gonzalo.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un piloto de un mes: metas distintas por zona según su potencial, primero resolviendo el stock y el crédito, y medir. Si funciona, el crecimiento se defiende con datos.',
        res: { q: 'buena', fx: { calidad: 5, personas: 4, confianza: 2 }, rel: { mauricio: 1 }, flags: ['metas_piloto'], cartera: { metas: 'Piloto de un mes · metas por zona' },
          out: 'Mauricio hace cuentas en la pizarra: si el analista recupera la venta perdida por stock, la mitad del 30 % aparece sin exprimir a nadie. «Ok. Un mes. Pero si no veo números, subo.»',
          pro: { ok: 'Le das al gerente un camino al crecimiento que no depende de quemar vendedores.', risk: 'Mauricio tendrá que convencer al directorio de esperar un mes.', info: 'La venta perdida por stock es crecimiento que ya existe y nadie está cobrando.' },
          kusi: ['celebra', '¡Crecer arreglando, no exprimiendo!'] } },
      { id: 'b', label: 'Aceptar el 30 % pareja: ya negociaste el básico y no puedes ganar todas.',
        res: { q: 'riesgosa', fx: { personas: -5, calidad: -3, confianza: 2 }, rel: { mauricio: 1 }, flags: ['metas_30'], cartera: { metas: '+30 % para todos desde el lunes' },
          out: 'Mauricio cierra el plumón. «Así me gusta.» A las 11, el grupo de vendedores ya lo sabe.',
          pro: { ok: 'Mauricio llega al directorio con lo que prometió.', risk: 'Una meta que nadie cree posible deshace en una semana lo que ganaste con los jefes y las rutas.' },
          kusi: ['triste', 'Kenji ya hizo las cuentas…'] } },
      { id: 'c', label: 'Decirle que no debe subir ninguna meta este año.',
        res: { q: 'aceptable', fx: { personas: 2, confianza: -4 }, rel: { mauricio: -1 }, cartera: { metas: 'Sin acuerdo' },
          out: '«Entonces tú le explicas al directorio», dice Mauricio. Y decide solo, en la tarde.',
          pro: { ok: 'Proteges a los vendedores hoy.', risk: 'Sin alternativa, el gerente decide sin ti.' },
          kusi: ['pensando', '¿Y el negocio?'] } },
    ],
    rules: [[BP, 'Primero se arregla lo que depende de la empresa; después se sube lo que depende del vendedor.']],
    mirada: {
      ve: 'Mauricio no está equivocado al querer crecer: la empresa lo contrató para eso. El HRBP no discute el crecimiento, discute de dónde sale. Si sale de exprimir a los mismos con las mismas trabas, se va por la puerta de la rotación.',
      visual: { tipo: 'balanza', a: { t: '+30 % para todos', items: ['Promesa cumplida en el papel', 'Metas que nadie cree', 'Renuncias en la semana 3'] }, b: { t: 'Piloto por zona', items: ['Recuperar venta perdida por stock', 'Metas creíbles', 'Números para el directorio en un mes'] } },
    },
  },
  {
    id: 'm3', t: '11:00', ch: 'documento', who: null, titulo: 'Cómo se fija una meta', banner: 'assets/esc/escalera.webp', lugar: 'Sala de Compensaciones, con Gonzalo', show: ['calidad', 'tiempo'],
    body: () => `<p>Gonzalo despliega en la pantalla la venta de los últimos doce meses, zona por zona. Huele a la sopa de su táper.</p><p>Para el piloto necesitan un método que cualquier jefe pueda explicarle a su equipo. <mark class="clave">Ordena los pasos</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para fijar la meta de una zona. Usa las flechas.', boton: 'Guardar el método',
    items: [
      { id: 'hist', t: 'Mirar la venta real de la zona en los últimos doce meses', por: 'El punto de partida es lo que pasó, no lo que se desea.' },
      { id: 'pot', t: 'Estimar el potencial: bodegas, clientes nuevos posibles, temporada', por: 'Cada zona tiene su techo.' },
      { id: 'stock', t: 'Descontar lo que se pierde por stock o crédito, hasta que se resuelva', por: 'Al vendedor no se le cobra lo que no controla.' },
      { id: 'jefe', t: 'Validar la propuesta con el jefe de zona y dos vendedores', por: 'Una meta que la calle reconoce como posible.' },
      { id: 'piloto', t: 'Aplicarla un mes y medir venta y renuncias', por: 'El piloto dice si funciona.' },
      { id: 'ajuste', t: 'Ajustar y comunicar la meta definitiva con sus razones', por: 'Una meta que se puede explicar.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, tiempo: 1 },
        flags: q === 'riesgosa' ? [] : ['metas_metodo'], cartera: { metas: q === 'riesgosa' ? 'Sin método claro' : 'Método: historia → potencial → stock → validación → piloto' },
        out: q === 'buena' ? 'Gonzalo lo convierte en una hoja de cálculo con seis columnas. «Esto lo entiende hasta mi mamá.» Con el método, la meta de Chosica sube 8 % y la de SJL, 22 %.' : 'Gonzalo arma la hoja, pero con un paso fuera de lugar: valida después de aplicar.',
        pro: { ok: 'Un método que parte de la realidad y termina en algo que se puede explicar.', risk: 'Si la meta no se valida con la calle, vuelve a ser un número del escritorio.', info: 'Publica el método, no solo el número.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Metas con razones!' : '¿Primero se valida o se aplica?'],
      };
    },
    rules: [[BP, 'Una meta parte de la venta real, considera el potencial, descuenta lo que el vendedor no controla y se valida con quien la va a cumplir.'], [LEY, 'Ley 30709: la política salarial se basa en criterios objetivos y se informa a los trabajadores.']],
    mirada: {
      ve: 'Las metas de Nutrimás se hacían en una hoja de Excel en el piso 3. Nadie en la calle sabía de dónde salían. Un método simple y público transforma la meta de una orden en un acuerdo.',
      visual: { tipo: 'flujo', titulo: 'Cómo se fija una meta', pasos: ['Venta real', 'Potencial', 'Descontar stock', 'Validar en la calle', 'Piloto', 'Ajustar'], aqui: 0 },
    },
  },
  {
    id: 'm4', t: '13:30', ch: 'documento', who: null, titulo: 'El esquema justo', banner: 'assets/esc/meta.webp', lugar: 'Sala de Compensaciones', show: ['personas', 'cumplimiento', 'calidad'],
    body: () => `<p>Gonzalo y tú reescriben el esquema mientras comen unas papas rellenas de la cafetería. Mauricio pidió algo que «premie al que vende».</p><p><mark class="clave">Arma el esquema bloque por bloque</mark>.</p>`,
    type: 'builder', prompt: 'Arma el nuevo esquema de remuneración variable.', boton: 'Guardar el esquema',
    bloques: [
      { id: 'piso', t: 'El piso', n: 1, ops: [
        { id: 'p1', t: 'Básico fijo, no menor a la RMV, que no depende de la meta.', ok: true, por: 'El piso no se toca.' },
        { id: 'p2', t: 'Básico reducido para financiar comisiones más altas.', ok: false, por: 'Traslada todo el riesgo al vendedor.' },
      ] },
      { id: 'variable', t: 'La comisión', n: 2, ops: [
        { id: 'v1', t: 'Comisión escalonada desde el 80 % de la meta, más alta sobre el 100 %.', ok: true },
        { id: 'v2', t: 'La venta perdida por stock no se descuenta al vendedor.', ok: true, por: 'No se castiga lo que no controla.' },
        { id: 'v3', t: 'Ranking semanal publicado en el grupo de la zona.', ok: false, por: 'Expone y humilla. Los resultados se conversan uno a uno.' },
      ] },
      { id: 'herramienta', t: 'La herramienta de trabajo', n: 1, ops: [
        { id: 'h1', t: 'La empresa asume el mantenimiento de la moto de reparto.', ok: true, por: 'La moto es del negocio. Lo viste en el almacén.' },
        { id: 'h2', t: 'Un bono de gasolina solo para quien llegue a la meta.', ok: false, por: 'Quien no llega es justo quien más gasolina gasta buscando.' },
      ] },
      { id: 'jefes', t: 'Para los jefes de zona', n: 1, ops: [
        { id: 'j1', t: 'Su variable combina la venta de la zona y la retención de su equipo.', ok: true, por: 'Lo que pide la ficha: vender sin quemar gente.' },
        { id: 'j2', t: 'Su variable depende solo de la venta de la zona.', ok: false, por: 'Repite el incentivo que creó al «Tigre».' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['esquema_justo'] : [], cartera: { esquema: q === 'buena' ? 'Piso firme, comisión escalonada, moto a cargo de la empresa' : 'Esquema con piezas que castigan' },
        out: q === 'buena' ? 'Gonzalo calcula el costo de asumir las motos: es menos de lo que cuesta reemplazar a cuatro vendedores al año. Lo pone en una nota al pie, en negrita, para Mauricio.' : 'El esquema queda, aunque con piezas que van a doler en la calle.',
        pro: { ok: 'Un esquema que premia vender y retener, desde un piso firme.', risk: 'Lo que se premia es lo que se repite: si a los jefes solo se les paga por venta, vuelven los gritos.', info: 'Pon el costo de la rotación al lado del costo de cada mejora: es el argumento que el gerente entiende.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Premia vender y retener!' : '¿Qué conducta premia esto?'],
      };
    },
    rules: [[LEY, 'El básico no puede quedar debajo de la RMV por no llegar a la meta.'], [BP, 'Lo que el esquema premia es lo que la gente va a repetir.']],
    mirada: {
      ve: 'Un esquema de comisiones es un mensaje: dice qué le importa a la empresa. El de antes decía «vende como sea». El nuevo dice «vende, cuida a tu gente y no pagues tú lo que es de la empresa».',
      visual: { tipo: 'cambio', titulo: 'Del esquema de antes al nuevo', pares: [['Básico condicionado', 'Piso firme'], ['Venta perdida por stock, culpa del vendedor', 'Se descuenta de la meta'], ['Moto a cargo del vendedor', 'Moto a cargo de la empresa'], ['Jefes pagados solo por venta', 'Venta y retención']] },
    },
  },
  {
    id: 'm5', t: '15:40', ch: 'whatsapp', who: null, titulo: 'Kenji hace cuentas', banner: 'assets/foto2/caminan.webp', lugar: 'Tu escritorio', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Kenji te manda una foto de una hoja de cuaderno llena de números. ${F.has('metas_30') ? '«Con 30 % más no llego ni al 80 %. O sea, sin comisión. Ya me ofrecieron en otra distribuidora.»' : '«Escuché que va a haber un piloto. ¿Es verdad? Porque en otra distribuidora me ofrecieron un puesto.»'} ${F.has('rutas_justas') ? 'Se quedó en el este, con sus bodegas.' : 'Le cambiaron casi todas sus bodegas.'}</p><p><mark class="clave">Le respondes</mark>, sin prometerle lo que no decides.</p>`,
    type: 'compose', enviaA: 'kenji', para: 'Para: Kenji Tamashiro · Vendedor de ruta', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'verdad', t: 'Lo que es verdad hoy', ops: [
        { id: 'v1', t: 'Kenji, las metas nuevas se van a fijar por zona, con un método que tu jefe te va a explicar, y el básico ya no depende de llegar.', ok: true, por: 'Es lo que está decidido y le cambia las cuentas.' },
        { id: 'v2', t: 'Kenji, tranquilo, vas a ganar más.', ok: false, por: 'No lo sabes.' },
      ] },
      { id: 'voz', t: 'Su voz', ops: [
        { id: 'z1', t: 'Tu hoja de cálculo me sirve: ¿me dejas mostrársela a Gonzalo, sin tu nombre?', ok: true, por: 'Convierte su queja en un dato para la decisión.' },
        { id: 'z2', t: 'No le comentes a nadie lo de la otra distribuidora.', ok: false, por: 'Es su decisión y su vida.' },
      ] },
      { id: 'decision', t: 'Su decisión', ops: [
        { id: 'd1', t: 'Si al final decides irte, lo voy a entender. Solo te pido que esperes a ver la meta real.', ok: true, por: 'Respeta su libertad y le da un motivo concreto para esperar.' },
        { id: 'd2', t: 'Si te vas ahora, pierdes la comisión del mes.', ok: false, por: 'Falso: la comisión ganada se paga. Y suena a amenaza.' },
      ] },
    ],
    res: sel => {
      const buenas = ['v1', 'z1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : -1, confianza: q === 'buena' ? 3 : -1, etica: Object.values(sel).includes('d2') ? -4 : 1 }, rel: { kenji: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'buena' ? ['kenji_se_queda'] : [], cartera: { kenji: q === 'buena' ? 'Espera la meta real antes de decidir' : 'Mirando otra oferta' },
        envia: ['kenji', q === 'buena' ? 'Kenji: «Ya, espero. Y sí, muéstrale mi hoja. Hice las cuentas en el almuerzo 😅»' : 'Kenji: «Ok.»'],
        out: q === 'buena' ? 'Kenji te manda la hoja en limpio. Tiene más sentido que la mitad de los Excel del piso 3.' : 'Kenji no responde más. Su estado de WhatsApp cambia a una foto de otra marca de galletas.',
        pro: { ok: 'Le dices lo que es verdad, usas su información y respetas su decisión.', info: 'Las cuentas de un vendedor en un cuaderno suelen ser el mejor control de calidad de una meta.' },
        kusi: [q === 'buena' ? 'celebra' : 'triste', q === 'buena' ? '¡Kenji espera, y su hoja suma!' : 'Kenji está más cerca de la puerta.'],
      };
    },
    rules: [[LEY, 'La comisión ganada es remuneración y se paga aunque el trabajador renuncie (TUO del D.Leg. 728, art. 6).']],
    mirada: { ve: 'Kenji no amenaza con irse: está haciendo lo que haría cualquiera con su sueldo en juego. Retener no es convencerlo de quedarse; es lograr que la empresa le ofrezca algo que tenga sentido quedarse a esperar.' },
  },
  {
    id: 'm6', t: '17:00', ch: 'llamada', who: null, titulo: 'El primer día de los jefes', banner: 'assets/foto/llamada.webp', lugar: 'Llamadas desde tu escritorio', show: ['personas', 'calidad', 'etica'],
    body: () => `<p>Antes de irte, llamas a tres jefes de zona para saber cómo les fue el primer día con sus nuevos equipos. <mark class="clave">Escuchas</mark>.</p>`,
    type: 'calls',
    calls: [['Don Teo · Chosica y Huaycán', 'Contesta desde la combi', '«Bien, señorita. Hice la formación sentado, con café, preguntando qué necesitaban. Dos chicos nuevos de Huaycán me dijeron que nunca nadie les había preguntado eso.»'], ['Lucía Paz · Lima Norte', 'Contesta mientras maneja', '«Todos preguntan por las metas. Les dije lo del método y el piloto. Uno me dijo "a ver si es cierto". Es justo que duden.»'], ['Jhon Ruiz · San Juan de Lurigancho', 'Contesta con ruido de motos de fondo', '«Todo bajo control, jefa. Les dije clarito: con las metas nuevas, el que no llega se va. Y al venezolano nuevo le di la ruta del cerro, que se la gane.»']],
    prompt: 'Escuchaste tres llamadas. ¿Qué haces con la de Jhon?',
    choices: [
      { id: 'a', label: 'Registrar lo que dijo Jhon con sus palabras y enviarlo hoy a Fiorella como parte de la revisión: rompe las condiciones que aceptó y discrimina en la asignación de rutas.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 3, personas: 3 }, rel: { andrea: 1 }, flags: ['jhon_alerta'], cartera: { jhon: 'Condiciones incumplidas · enviado a la revisión' },
          out: 'Fiorella responde en cinco minutos: «Con esto y lo de la formación del otro día, cierro la revisión el lunes. Hay que escucharlo a él primero, pero esto es serio». Andrea te escribe: «Bien hecho. El lunes, Mauricio tiene que decidir».',
          pro: { ok: 'Las condiciones solo valen si alguien las hace cumplir.', risk: 'Mauricio va a tener que elegir entre su mejor vendedor y la nueva cultura.', info: 'Asignar la peor ruta por la nacionalidad es discriminación, aunque se diga «que se la gane».' },
          kusi: ['animo', 'Lo dijo él. Lo anotaste tú.'] } },
      { id: 'b', label: 'Llamar a Jhon de nuevo y advertirle que tenga cuidado, que lo están mirando.',
        res: { q: 'aceptable', fx: { etica: 0, personas: 1 }, cartera: { jhon: 'Advertido de manera informal' },
          out: 'Jhon se ríe: «Tranquila, jefa». Mañana la formación será más suave. La del lunes, quién sabe.',
          pro: { ok: 'Le das una oportunidad de corregir.', risk: 'Una advertencia informal no queda registrada ni protege al vendedor nuevo.' },
          kusi: ['pensando', '¿Y el chico de la ruta del cerro?'] } },
      { id: 'c', label: 'Dejarlo pasar: es su primer día y la presión de las metas es real.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -4 }, cartera: { jhon: 'Sin cambios' },
          out: 'Cuelgas. El vendedor nuevo sube el cerro mañana a las siete.',
          pro: { ok: 'Le das tiempo a Jhon.', risk: 'Lo que dejas pasar el primer día se vuelve la regla.' },
          kusi: ['triste', 'Igual que antes…'] } },
    ],
    rules: [[BP, 'Las condiciones de un nombramiento se hacen cumplir desde el primer día.'], [LEY, 'Asignar rutas peores por la nacionalidad es discriminación.']],
    mirada: {
      ve: 'Tres jefes, tres maneras de empezar. Don Teo pregunta; Lucía explica y acepta la duda; Jhon repite lo que sabe hacer. El cambio de estructura ya está; el cambio de cultura se juega en cada formación de las siete.',
      visual: { tipo: 'matriz', x: 'Escucha a su equipo', y: 'Explica el cambio con claridad', cuadrantes: ['Explica y escucha', 'Explica, no escucha', 'Ni explica ni escucha', 'Escucha, explica poco'], items: [['Don Teo', 90, 70], ['Lucía', 70, 85], ['Jhon', 10, 40]] },
    },
  },
  {
    id: 'm7', t: '18:30', ch: 'correo', who: null, titulo: 'Para el directorio', banner: 'assets/esc/decide.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Mauricio Lerner', to: 'HR Business Partner · Comercial', asunto: 'Mañana, directorio' },
    body: () => `<p>Mañana a las 8 presento las metas. Si llevo el piloto, me van a preguntar por qué no el 30 %. <mark class="clave">Dame el argumento en tres líneas</mark>.</p><p>M.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'El costo de la rotación, la venta perdida por stock que se puede recuperar y una fecha para mostrar resultados.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { mauricio: 1 }, flags: ['metas_defendidas'], responde: 'Mauricio: 1) Cada vendedor que se va cuesta selección, inducción y semanas de venta; con +30 % parejo perderíamos más de los que ganamos. 2) La venta que hoy se pierde por stock y crédito es crecimiento que ya existe: el analista la recupera. 3) En un mes traemos números del piloto, zona por zona.',
          out: 'Mauricio responde: «Esto lo puedo decir sin leer». A las 18:55 te escribe que el directorio aceptó.', kusi: ['celebra', '¡Tres líneas que valen un directorio!'] } },
      { id: 'b', label: 'Que lo pide Gestión Humana para cuidar a los vendedores.',
        res: { q: 'aceptable', fx: { confianza: -2 }, responde: 'Mauricio: puedes decir que Gestión Humana recomienda un piloto para cuidar a los vendedores.',
          out: 'Mauricio responde: «Eso no convence a nadie en ese directorio». Se queda trabajando hasta tarde.', kusi: ['pensando', 'El directorio habla en soles.'] } },
    ],
    mirada: { ve: 'Cuidar a las personas y cuidar el negocio se defienden con el mismo argumento cuando se habla en el idioma de quien decide: costo, venta y plazo. Ese es, quizás, el oficio entero del HRBP.' },
  },
];
