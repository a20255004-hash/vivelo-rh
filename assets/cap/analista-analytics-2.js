// Analista de People Analytics · Capítulo 2 · «Los datos sucios» · Semana 1, martes.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 2 num. 5 (datos sensibles: información de salud), art. 2 num. 15 (disociación), art. 6 (finalidad y excepción estadística
//   con disociación o anonimización), art. 8 (calidad: datos veraces y exactos), art. 17 (confidencialidad).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS (El Peruano, 30/11/2024): art. 41 (procedimiento de disociación, reversible).

export const CAP = {
  n: 2, titulo: 'Los datos sucios', dia: 'Semana 1, martes', foto: 'assets/esc/planilla.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo',
  inicio: '08:15', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Llegan las tres bases: la planilla de ceses de Rocío, las ventas de Pedro y la encuesta de clima. Tres formatos, ninguna llave común.', boton: 'Abrir los archivos',
  kusi: 'El 80 % del análisis es limpieza. Hoy lo vives. ¡Ánimo!',
  lead: 'Encontraste los errores de la base, ordenaste la limpieza, cuidaste la promesa de anonimato y llegaste a tu propio número.',
  reflexion: '¿Cuánto de lo que «sabe» una empresa sobre su gente depende de una celda mal escrita?',
  siguiente: { n: 3, titulo: 'Las entrevistas de salida', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'ceses', p: 'Planilla de ceses', j: 'Rocío · Planillas', d: 1, e: '768 filas sin revisar' },
  { id: 'ventas', p: 'Base de ventas y comisiones', j: 'Pedro · TI', d: 1, e: 'Recibida' },
  { id: 'clima', p: 'Encuesta de clima', j: 'Lucía · HRBP', d: 1, e: 'Recibida con una columna de más' },
  { id: 'rotacion', p: 'Rotación de vendedores', j: 'Tú', d: 1, e: 'Por recalcular' },
];

export const FUTURO = {
  salud_retirada: ['Sacaste de tu base la columna de diagnósticos médicos.', 'Diego lo mencionará como buena práctica.'],
  limpieza_documentada: ['Tu limpieza tiene copia del original y bitácora.', 'Podrás defender cada número en el comité.'],
  limpieza_sin_rastro: ['Limpiaste sobre el archivo original, sin bitácora.', 'No podrás explicar de dónde salió una cifra.'],
  encuesta_anonima: ['Usaste la encuesta de clima solo por tienda, sin identificar a nadie.', 'Lucía podrá seguir prometiendo anonimato.'],
  encuesta_seudonimo: ['Uniste la encuesta con un código seudónimo.', 'Es legal discutirlo, pero rompe lo que se prometió.'],
  encuesta_rota: ['Uniste la encuesta «anónima» con los nombres.', 'Si se sabe, nadie volverá a responder con sinceridad.'],
  rocio_aliada: ['Rocío te explicó la historia de sus formatos.', 'Será tu aliada cuando falte un dato.'],
  codigos_resueltos: ['Detectaste que TI reasigna los códigos de vendedor.', 'Tu cruce con ventas será confiable.'],
  numero_58: ['Defiendes un 58 % con su fórmula.', 'Tendrás que explicarlo frente a Finanzas.'],
  numero_60: ['Dejaste el 60 % para no complicarte.', 'Tu base dice otra cosa.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  pedro: { n: 'Pedro Caycho', sub: 'Analista de TI', who: 'ti' },
  rocio: { n: 'Rocío Quispe', sub: 'Analista de Planillas', c: '#8A5A2B' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
};

export const WSP = [
  { chat: 'rocio', t: '08:10', de: 'Rocío', txt: 'Ya te subí los ceses a la carpeta, hijita. Te advierto: hasta 2023 el supervisor se escribía a mano 🙈' },
  { chat: 'pedro', t: '08:40', de: 'Pedro', txt: 'Te habilité ventas recién hoy. Para la próxima, campos y finalidad desde el inicio, ¿ya?', si: 'acceso_todo' },
  { chat: 'lucia', t: '10:20', de: 'Lucía', txt: 'Hola 🙋🏽‍♀️ Soy Lucía, la HRBP de Lima Este. Te pasé la encuesta de clima. Ojo, que a la gente le dijimos que era anónima.' },
  { chat: 'rocio', t: '13:15', de: 'Rocío', txt: 'El cambio de formato fue en julio de 2023, cuando entró el sistema nuevo. Antes, todo en Excel. Gracias por preguntar, nadie pregunta 😊', si: 'rocio_aliada' },
  { chat: 'lucia', t: '13:40', de: 'Lucía', txt: 'Gracias por cuidar la encuesta. Si se rompe la confianza, el próximo año nadie responde.', si: 'encuesta_anonima' },
  { chat: 'equipo', t: '18:50', de: 'Diego', txt: 'Mañana empiezas con las entrevistas de salida. Lleva paciencia y audífonos.' },
];

export const CORREOS = [
  { t: '08:20', de: 'Pedro Caycho', para: 'Analista de People Analytics', asunto: 'Acceso a base de ventas', html: '<p>Acceso habilitado a la vista «ventas_vendedor_12m» (código, tienda, mes, venta, comisión). Vence en 30 días. Cualquier campo adicional, por correo con el visto de Diego.</p><p>Pedro · TI</p>' },
  { t: '09:05', de: 'Finanzas · Control de Gestión', para: 'Analista de People Analytics', asunto: 'RE: ¿Cómo calcularon el 60 %?', html: '<p>Hola. Tomamos las filas del reporte de ceses de los últimos 12 meses (720, luego de que Planillas quitara duplicados) y las dividimos entre la plantilla de vendedores a diciembre (1,200). Saludos.</p>' },
];

export const QUIZ = [
  { q: 'Antes de limpiar una base, lo primero es…', ops: ['Borrar las filas raras', 'Guardar una copia intacta del original', 'Ordenar por nombre', 'Enviarla a la gerencia'], ok: 1, por: 'Sin el original no puedes rehacer ni explicar lo que cambiaste.' },
  { q: 'Una encuesta de clima se aplicó prometiendo anonimato. Para tu análisis…', ops: ['La unes con los nombres: es para un buen fin', 'La usas agregada por tienda, sin identificar a nadie', 'La descartas porque es anónima', 'Pides a TI los correos de quienes respondieron'], ok: 1, por: 'Lo prometido define la finalidad. Agregada por grupo sigue siendo muy útil.' },
  { q: 'La columna «diagnóstico del descanso médico» en tu base de rotación…', ops: ['Sirve para controlar el ausentismo', 'Es un dato sensible que no necesitas: la retiras', 'Se queda si nadie la ve', 'Se convierte en texto libre'], ok: 1, por: 'La información de salud es un dato sensible (Ley 29733, art. 2, num. 5) y no es necesaria para tu finalidad.' },
  { q: 'Según la Ley 29733, la disociación…', ops: ['Es irreversible', 'Impide identificar al titular, pero es reversible', 'Es lo mismo que borrar', 'Solo la hace el Poder Judicial'], ok: 1, por: 'Art. 2, num. 15: la disociación es reversible; la anonimización, irreversible.' },
  { q: 'Finanzas dice 60 % y tu base dice 58 %. ¿Qué haces?', ops: ['Usas 60 % para no generar ruido', 'Presentas 58 % y explicas la fórmula y la diferencia', 'Promedias: 59 %', 'No presentas la rotación'], ok: 1, por: 'Un número vale lo que vale su definición. Explicar la diferencia evita que el comité desconfíe de ambos.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '08:30', ch: 'documento', who: null, titulo: 'La planilla de ceses', banner: 'assets/foto/revisa.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>El archivo se llama <i>ceses_FINAL_v3_ahora_si.xlsx</i>. Tiene 768 filas, once pestañas y una de ellas se llama «NO TOCAR».</p><p>Antes de calcular nada, lo revisas como un auditor. <mark class="clave">Marca lo que está mal</mark>.</p>`,
    type: 'flag', prompt: 'Marca las filas o columnas que tienen un problema legal o de calidad.',
    doc: { t: 'ceses_FINAL_v3_ahora_si.xlsx', sub: 'Pestaña «Vendedores» · 768 filas · últimos 12 meses' },
    lines: [
      { id: 'dni', t: 'DNI: 4 % de los registros tiene 7 dígitos (por ejemplo, 7451238).', bad: 'bp', why: 'Excel se comió el cero inicial. Sin el DNI completo, la fila no cruza con nada.' },
      { id: 'fecha', t: 'Fecha de cese: hasta junio de 2023 en formato mes/día; después, día/mes.', bad: 'bp', why: 'El 03/07 puede ser 3 de julio o 7 de marzo. Cambia el mes de salida.' },
      { id: 'dup', t: 'Andrea Ríos aparece dos veces: cesó en marzo, reingresó en mayo y cesó en agosto.', duda: 'Son dos salidas reales, pero también puede ser un duplicado de carga. Hay que revisar caso por caso.' },
      { id: 'salud', t: 'Columna «Diagnóstico del último descanso médico».', bad: 'ley', why: 'Es información de salud, un dato sensible, y no hace falta para entender la rotación.' },
      { id: 'tienda', t: 'Tienda: «Santa Anita», «STA ANITA» y «Sta. Anita» como si fueran tres tiendas.', bad: 'bp', why: 'Sin estandarizar, una tienda se parte en tres y sus números se diluyen.' },
      { id: 'traslado', t: 'Motivo de cese: «Traslado a otra tienda» (17 filas).', bad: 'bp', why: 'Un traslado no es una salida de la empresa: infla la rotación.' },
      { id: 'cod', t: 'Código de tienda (T01 a T34), completo en todas las filas.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges formatos y duplicados, pero la columna de diagnósticos médicos sigue en tu base.' : 'Sacas la columna de diagnósticos a un archivo aparte que devuelves a Rocío, y anotas los demás problemas.',
      flags: missLey ? [] : ['salud_retirada'],
      cartera: { ceses: 'Revisada: DNI, fechas, tiendas y traslados por corregir' },
      pro: { ok: 'Revisar antes de calcular evita conclusiones sobre datos rotos.', risk: 'Un dato de salud en una base de análisis expone a las personas sin ninguna necesidad.', info: 'Los traslados entre tiendas no son rotación de la empresa, aunque sí de la tienda.' },
      kusi: missLey ? ['preocupado', 'Los diagnósticos médicos se te pasaron…'] : ['celebra', '¡Ojo de auditora!'],
    }),
    rules: [[LEY, 'La información de salud es un dato sensible (Ley 29733, art. 2, num. 5).'], [LEY, 'Los datos deben ser veraces y exactos (Ley 29733, art. 8).']],
    mirada: {
      ve: 'Ninguna base de RR.HH. llega limpia. Las fechas cambian de formato cuando cambia el sistema, los nombres de tienda dependen de quién los escribió y siempre aparece una columna que nadie debería tener.',
      visual: { tipo: 'embudo', titulo: 'De las filas a las salidas reales', niveles: [['Filas del archivo', 768], ['Sin duplicados de carga', 737], ['Sin traslados', 720]] },
      normas: [{ ley: 'Ley 29733, art. 8 (calidad)', dice: 'Los datos personales deben ser veraces, exactos y, en la medida de lo posible, actualizados, necesarios y pertinentes.', practica: 'Un DNI sin su cero o una fecha invertida no es un detalle: es un dato inexacto sobre una persona.' }],
    },
  },
  {
    id: 'b2', t: '09:40', ch: 'documento', who: null, titulo: 'El orden de la limpieza', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Diego pasa con su café: «Si mañana te pregunto por qué un número cambió, <mark class="clave">tienes que poder mostrarme cada paso</mark>».</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la limpieza. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'copia', t: 'Guardar una copia intacta del archivo original', por: 'Sin original no hay vuelta atrás.' },
      { id: 'bita', t: 'Abrir una bitácora: qué cambias, por qué y cuántas filas', por: 'La memoria de tu limpieza.' },
      { id: 'forma', t: 'Estandarizar formatos: DNI con 8 dígitos, fechas y nombres de tienda', por: 'Primero que todo hable el mismo idioma.' },
      { id: 'dedup', t: 'Quitar duplicados de carga y sacar los traslados', por: 'Recién ahí sabes cuántas salidas hay.' },
      { id: 'cruce', t: 'Unir con ventas por la llave común', por: 'Cruzar datos sucios multiplica errores.' },
      { id: 'tot', t: 'Verificar totales contra Planillas', por: 'Si no cuadra con la fuente, algo se rompió.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: q === 'riesgosa' ? -2 : 1 },
        flags: [q === 'riesgosa' ? 'limpieza_sin_rastro' : 'limpieza_documentada'],
        out: q === 'buena' ? 'A las 11 tienes una bitácora de 14 líneas y una base que Diego podría auditar con los ojos cerrados.' : q === 'aceptable' ? 'Tu orden funciona, aunque Diego te mueve un paso: «Nunca cruces antes de limpiar».' : 'Empiezas a corregir sobre el archivo original. A media mañana ya no sabes qué filas borraste.',
        pro: { ok: 'Copia, bitácora, limpieza y recién cruce: así cada número tiene historia.', risk: 'Limpiar sin rastro hace que nadie pueda verificar tu trabajo, ni tú misma.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una limpieza que se puede auditar!' : 'El orden también es calidad.'],
      };
    },
    rules: [[BP, 'Nunca limpies sobre el original. Documenta cada cambio.']],
    mirada: {
      ve: 'La limpieza no se ve en el tablero final, pero sostiene cada número. Una bitácora sencilla («quité 17 traslados, motivo X») es lo que te salva cuando alguien en el comité pregunta «¿y esto de dónde sale?».',
      visual: { tipo: 'flujo', titulo: 'Limpiar con rastro', pasos: ['Copia', 'Bitácora', 'Formatos', 'Duplicados', 'Cruce', 'Totales'] },
    },
  },
  {
    id: 'b3', t: '11:15', ch: 'presencial', who: 'diego-pa', titulo: 'La columna de más', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala pequeña del piso 3', show: ['etica', 'calidad', 'confianza'],
    body: () => `<p>La encuesta de clima del año pasado se aplicó como «anónima». Pero al exportarla, el sistema incluyó una columna con el correo corporativo de cada persona que respondió.</p><p>Diego cierra la puerta. «Con ese correo podrías unir clima con ceses persona por persona. Sería el mejor análisis del año. <mark class="clave">¿Qué hacemos?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Borrar la columna, avisar a Lucía y usar la encuesta solo agregada por tienda, en grupos de cinco o más personas.',
        res: { q: 'buena', fx: { etica: 6, confianza: 3, calidad: -1 }, rel: { 'diego-pa': 1 }, flags: ['encuesta_anonima'],
          out: 'Pierdes detalle, pero no la confianza de 1,200 personas. Diego asiente despacio: «Era una prueba. Y también era real».',
          pro: { ok: 'Respetas lo que se prometió al recoger el dato.', risk: 'Tu análisis de clima será menos fino.', info: 'Grupos de cinco o más evitan que alguien sea reconocible por descarte.' },
          kusi: ['celebra', 'Una promesa es una promesa. ¡Así!'] } },
      { id: 'b', label: 'Pedir a TI que reemplace cada correo por un código y unir con ese código: nadie verá nombres.',
        res: { q: 'aceptable', fx: { etica: 1, calidad: 3 }, flags: ['encuesta_seudonimo'],
          out: 'Pedro hace el cambio, pero pregunta: «¿Y quién guarda la tabla que une el código con el correo?». Nadie responde.',
          pro: { ok: 'Nadie ve nombres en tu base.', risk: 'Es un procedimiento reversible: alguien puede volver a identificar a las personas. Y a ellas se les dijo «anónima».', info: 'La ley distingue la disociación (reversible) de la anonimización (irreversible).' },
          kusi: ['pensando', 'Sin nombres… pero no anónimo.'] } },
      { id: 'c', label: 'Unir con el correo: es para entender por qué se van y mejorar sus condiciones, no para sancionar a nadie.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -4, calidad: 4 }, rel: { 'diego-pa': -1 }, flags: ['encuesta_rota'],
          out: 'El cruce queda precioso. Y en tu base, al lado de cada nombre, está lo que esa persona dijo de su jefe creyendo que nadie lo sabría.',
          pro: { ok: 'Análisis más detallado.', risk: 'Usas el dato para una finalidad distinta a la prometida. Si se filtra, se acaba la confianza en cualquier encuesta.' },
          kusi: ['indignado', '¡Les dijimos que era anónima!'] } },
    ],
    rules: [[LEY, 'El tratamiento no debe extenderse a una finalidad distinta a la establecida al recopilar el dato (Ley 29733, art. 6).'], [LEY, 'La disociación impide identificar al titular, pero es reversible (Ley 29733, art. 2, num. 15; D.S. 016-2024-JUS, art. 41).']],
    mirada: {
      ve: 'La Ley 29733 permite usos estadísticos con disociación o anonimización, así que la opción del código no es ilegal a simple vista. Pero la pregunta de fondo es otra: a las personas se les dijo «anónima». Romper esa promesa, aunque sea con buena intención, destruye la fuente para siempre.',
      visual: { tipo: 'balanza', a: { t: 'Unir persona por persona', items: ['Más detalle', 'Mejor modelo'] }, b: { t: 'Agregar por tienda', items: ['Promesa cumplida', 'Encuestas sinceras el próximo año', 'Sin riesgo de reidentificar'] } },
      normas: [{ ley: 'Ley 29733, art. 6', dice: 'El tratamiento no debe extenderse a otra finalidad distinta a la establecida al recopilar el dato, salvo actividades estadísticas con disociación o anonimización.', practica: 'Que algo sea defendible legalmente no significa que respete lo que le prometiste a la gente.' }],
    },
  },
  {
    id: 'b4', t: '12:40', ch: 'whatsapp', who: null, titulo: 'Preguntarle a Rocío', banner: 'assets/foto2/mesa-mujeres.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Rocío lleva 26 años en Planillas. Llegó de Huancayo con una calculadora Casio que todavía usa. Su archivo tiene errores, pero también tiene historia.</p><p>Le escribes para entender lo que viste. <mark class="clave">Que no se sienta acusada</mark>.</p>`,
    type: 'compose', enviaA: 'rocio', para: 'Para: Rocío Quispe · Planillas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo abres', ops: [
        { id: 'a1', t: 'Rocío, gracias por el archivo: sin tus ceses desde 2019 no habría análisis.', ok: true, por: 'Reconoces su trabajo antes de pedir.' },
        { id: 'a2', t: 'Rocío, tu archivo tiene varios errores.', ok: false, por: 'Cierto, pero la pones a la defensiva.' },
      ] },
      { id: 'pide', t: 'Qué preguntas', ops: [
        { id: 'p1', t: '¿Sabes desde cuándo cambió el formato de las fechas? Quiero corregirlas bien.', ok: true, por: 'Pregunta concreta, que solo ella puede responder.' },
        { id: 'p2', t: '¿Me puedes corregir todo antes del jueves?', ok: false, por: 'Le pasas tu trabajo.' },
      ] },
      { id: 'salud', t: 'Sobre la columna médica', ops: [
        { id: 's1', t: 'Te devolví aparte la columna de diagnósticos; para rotación no la necesito y mejor que no circule.', ok: true, por: 'Le explicas el porqué sin sermonear.' },
        { id: 's2', t: 'No digo nada: ya la borré.', ok: null, por: 'Resuelves, pero ella seguirá enviándola a otros.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'p1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : sel.abre === 'a2' || sel.pide === 'p2' ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'riesgosa' ? -2 : 1, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['rocio_aliada'] : [],
        cartera: { ceses: q === 'buena' ? 'Fechas corregidas con ayuda de Rocío' : 'Fechas corregidas por deducción' },
        out: q === 'buena' ? 'Rocío te manda un audio de dos minutos con la historia de cada formato. Te ahorra la tarde.' : q === 'riesgosa' ? 'Rocío responde con un «ok» seco. No te cuenta nada que no le preguntes.' : 'Rocío te responde lo justo.',
        pro: { ok: 'Quien carga los datos sabe por qué están como están.', risk: 'Si la fuente se siente juzgada, deja de explicarte sus atajos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Rocío es tu mejor diccionario de datos.' : 'La fuente también es una persona.'],
      };
    },
    mirada: {
      ve: 'Detrás de cada base hay alguien que la mantiene con lo que tiene. Rocío no tenía un sistema hasta 2023: tenía un Excel y su memoria. Tratarla como aliada te da algo que ninguna fórmula da: el contexto de los datos.',
      visual: { tipo: 'mensaje', titulo: 'Preguntar sin acusar', txt: 'Gracias por el archivo. ¿Desde cuándo cambió el formato de fechas? Te devolví la columna médica: para rotación no la necesito.' },
    },
  },
  {
    id: 'b5', t: '15:00', ch: 'llamada', who: 'ti', titulo: 'Los códigos que se repiten', banner: 'assets/foto/llamada.webp', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Al cruzar ventas con ceses aparece algo raro: el vendedor V0457 vendió en enero en Callao y en julio en Arequipa. Llamas para entender.</p>`,
    type: 'calls',
    calls: [['Pedro Caycho · TI', 'Contesta: los códigos se reciclan', 'Ah, sí. Cuando alguien se va, su código queda libre y lo toma el siguiente que entra. Siempre ha sido así.'], ['Rocío Quispe · Planillas', 'Contesta: tiene el DNI de cada código por fecha', 'Yo tengo una tablita con qué DNI tuvo cada código y desde cuándo. Te la paso.'], ['Lucía Ccori · HRBP', 'No contesta: está en tienda']],
    prompt: 'Los códigos de vendedor se reasignan. ¿Cómo haces el cruce?',
    choices: [
      { id: 'a', label: 'Unir por código y fecha usando la tabla de Rocío, de modo que cada venta caiga en el DNI que tenía el código en ese mes.',
        res: { q: 'buena', fx: { calidad: 6, tiempo: -2 }, flags: ['codigos_resueltos'], cartera: { ventas: 'Cruzada por código y fecha: confiable' },
          out: 'Te toma dos horas. Descubres que 61 vendedores «estrella» eran en realidad dos o tres personas distintas con el mismo código.',
          pro: { ok: 'La llave correcta es código más periodo.', info: 'Pide a TI que deje de reciclar códigos: el problema seguirá con cada salida.' },
          kusi: ['celebra', '¡Ahora sí cada venta tiene dueño!'] } },
      { id: 'b', label: 'Unir solo por código: los casos reciclados serán pocos y no cambian la conclusión.',
        res: { q: 'riesgosa', fx: { calidad: -5, tiempo: 2 },
          out: 'El cruce sale en 10 minutos. Algunos vendedores que renunciaron aparecen con ventas de meses en que ya no trabajaban.',
          pro: { ok: 'Rápido.', risk: 'En una empresa con 60 % de rotación, los códigos reciclados no son pocos: son justamente los casos que estudias.' },
          kusi: ['preocupado', 'Justo los que se van son los reciclados…'] } },
    ],
    rules: [[BP, 'Una llave sirve si identifica a una sola persona en un periodo dado.']],
    mirada: {
      ve: 'Reciclar códigos tiene sentido para el sistema de ventas, pero rompe cualquier análisis de personas. Lo irónico: el error se concentra precisamente en quienes se van, que son lo que quieres entender.',
      visual: { tipo: 'linea', titulo: 'La vida del código V0457', hitos: [['Ene', 'Callao · vendedor A'], ['Abr', 'A renuncia'], ['May', 'Arequipa · vendedora B'], ['Jul', 'B sigue']] },
    },
  },
  {
    id: 'b6', t: '17:00', ch: 'documento', who: null, titulo: 'Lo que alcanza antes de las siete', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'calidad'],
    body: () => `<p>Afuera ya oscureció y el tráfico de Angamos suena hasta el piso 3. Te quedan unas dos horas. <mark class="clave">Tres tareas</mark> y el resto mañana.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres tareas que cierras hoy.', boton: 'Hacer estas', resumen: 'Cerraste',
    cols: ['Tarea', 'Por qué importa'],
    rows: [
      { id: 'tot', cells: ['Verificar que tus 720 salidas cuadren con el total de Planillas', 'Si no cuadra, todo lo demás está en duda'] },
      { id: 'tipo', cells: ['Separar renuncias, despidos y fin de contrato', 'Tu pregunta lo pide'] },
      { id: 'formula', cells: ['Recalcular la rotación con plantilla promedio', 'Es tu número para el comité'] },
      { id: 'colores', cells: ['Ponerle colores HogarPlus a las tablas', 'Se verá bonito'] },
      { id: 'modelo', cells: ['Probar un modelo predictivo con todas las columnas', 'Suena impresionante'] },
    ],
    score: { tot: 3, tipo: 3, formula: 3, colores: -1, modelo: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, tiempo: q === 'buena' ? 2 : -1 },
        cartera: { rotacion: picks.includes('formula') ? '58 % (720 / 1,240 de plantilla promedio)' : 'Por recalcular' },
        out: q === 'buena' ? 'Cuadra: 720 salidas. 540 renuncias, 130 fines de contrato y 50 despidos. Con plantilla promedio de 1,240, la rotación es 58 %, no 60 %.' : picks.includes('modelo') ? 'El modelo «predice» con 91 % de acierto… porque una de las columnas era la fecha de cese.' : 'Avanzas, pero algo esencial queda para mañana.',
        pro: { ok: 'Primero lo que sostiene el número; después, lo bonito y lo sofisticado.', risk: 'Un modelo con datos sin verificar solo produce errores con decimales.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tu propio número, con fórmula!' : 'Lo esencial primero.'],
      };
    },
    mirada: {
      ve: 'Finanzas dividió 720 entre la plantilla de diciembre (1,200): 60 %. Tú, entre la plantilla promedio del año (1,240): 58 %. Ninguno está «mal», pero en el comité solo puede haber una definición, y alguien tiene que explicarla.',
      visual: { tipo: 'rango', titulo: 'Dos maneras de contar la misma rotación', min: 50, max: 65, banda: [58, 60], marcas: [['Tu cálculo', 58], ['Finanzas', 60]] },
    },
  },
  {
    id: 'b7', t: '18:35', ch: 'correo', who: null, titulo: '58 o 60', banner: 'assets/esc/decide.webp', show: ['confianza', 'calidad', 'etica'],
    mail: { from: 'Diego Paz', to: 'Analista de People Analytics', asunto: '¿Cuánto es la rotación?' },
    body: () => `<p>Mónica me preguntó en el ascensor si «ya está el 60 %». ¿Qué le digo? <mark class="clave">Necesito una sola cifra</mark>.</p><p>Diego</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Proponer 58 %, con la fórmula y una línea que explique por qué Finanzas tiene 60 %.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3, etica: 2 }, rel: { 'diego-pa': 1 }, flags: ['numero_58'], responde: 'Diego: 58 % (720 salidas / plantilla promedio de 1,240). Finanzas dividió entre la plantilla de diciembre (1,200), por eso tiene 60 %. Propongo usar la plantilla promedio y avisarle a Finanzas antes del comité para que nadie se sorprenda.',
          out: 'Diego responde: «Perfecto. Yo hablo con Finanzas. Que el número sea nuestro y explicado».', kusi: ['feliz', 'Número con fórmula y sin sorpresas.'] } },
      { id: 'b', label: 'Decirle que use 60 %: la diferencia es chica y discutirla solo genera ruido con Finanzas.',
        res: { q: 'aceptable', fx: { confianza: 1, calidad: -2 }, flags: ['numero_60'], responde: 'Diego: digamos 60 %, como Finanzas. La diferencia es mínima.',
          out: 'Diego acepta, aunque te escribe: «Ojo, que tu base dice 58. Si alguien la abre, tendremos que explicarlo igual».', kusi: ['pensando', '¿Y si alguien abre tu base?'] } },
    ],
    mirada: { ve: 'Dos puntos parecen poco, pero un comité que ve dos cifras distintas para lo mismo deja de creer en ambas. Elegir una definición y avisar a tiempo a quien usa otra es parte del trabajo, no un trámite.' },
  },
];
