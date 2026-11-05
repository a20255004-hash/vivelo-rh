// Analista de Administración de Personal · Capítulo 2 · «Altas en masa» · Semana 1, martes.
// Hilo de las dos semanas: la campaña de uva lleva la planilla de 300 a 1,200 personas. Hoy entran los primeros 200.
// Normas citadas:
// - D.S. 018-2007-TR y modificatorias (planilla electrónica y T-Registro): alta dentro del día de ingreso.
//   https://www.gob.pe/institucion/sunat/informes-publicaciones (orientación SUNAT sobre T-Registro)
// - Ley 28991, art. 16 (entrega del Boletín Informativo SPP/SNP) y R.M. 239-2019-TR (boletín vigente):
//   10 días calendario para elegir desde que se recibe el boletín; si no elige, se le afilia a una AFP.
//   https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-n-0046-2024-ugel-06dir-arh-1726171963.pdf
//   https://andina.pe/ingles/noticia-empleadores-deben-informar-a-trabajadores-para-libre-eleccion-afp-u-onp-769189.aspx
// - Ley 25129 (asignación familiar). Ley 27337, Código de los Niños y Adolescentes (autorización para el trabajo adolescente).
// - Ley 31110 (régimen laboral agrario). D.S. 015-2026-TR (RMV S/ 1,230).

export const CAP = {
  n: 2, titulo: 'Altas en masa', dia: 'Semana 1, martes', foto: 'assets/3d/scenes/agro.webp',
  lugar: 'Agrícola Valle Verde · Fundo 2, Valle de Ica',
  inicio: '05:30', fin: '18:45', cierreHora: '18:20',
  apertura: 'Son las 5:30 y todavía está oscuro en el valle. Hoy llegan los primeros 200 de la campaña, y la mitad no tiene sus datos completos.', boton: 'Subir a la camioneta al fundo 2',
  kusi: 'Hoy se mide en altas por hora. ¡Abrígate, que la madrugada en Ica es fría!',
  lead: 'Armaste una mesa de registro en pleno campo, revisaste fichas de ingreso, llamaste a quien faltaba, decidiste qué fecha de ingreso es la verdadera y explicaste el boletín de pensiones en palabras simples.',
  reflexion: '¿Qué alta de hoy te costó más, y por qué no era solo un dato?',
  siguiente: { n: 3, titulo: 'Las marcaciones', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'altas', p: 'Altas de campaña', j: 'Mónica · Planillas', d: 2, e: '200 ingresos hoy' },
  { id: 'fichas', p: 'Fichas de ingreso', j: 'Wendy · Planillas', d: 0, e: '96 incompletas' },
  { id: 'pensiones', p: 'Elección AFP/ONP', j: 'Mónica · Planillas', d: 0, e: 'Boletín sin entregar' },
  { id: 'fecha', p: 'Ingresos sin pasar por la mesa', j: 'Gerencia de Operaciones', d: 0, e: 'Por definir' },
  { id: 'marcacion', p: 'Relojes de marcación', j: 'Joel · TI', d: 2, e: 'Fundo 3 con fallas' },
];

export const FUTURO = {
  fecha_real: ['Registraste en T-Registro la fecha de ingreso real, aunque llegó tarde.', 'Mónica lo usará como ejemplo en el capítulo 7, frente a la inspectora.'],
  fecha_maquillada: ['Pusiste en T-Registro una fecha de ingreso posterior a la real.', 'Las marcaciones del reloj dirán otra cosa en el capítulo 3.'],
  fecha_callada: ['Registraste la fecha real, pero no se lo dijiste a gerencia.', 'Ricardo se enterará por otro lado en el capítulo 4.'],
  pension_informada: ['Entregaste el boletín de pensiones y explicaste el plazo para elegir.', 'Se nota en la planilla del capítulo 4.'],
  pension_defecto: ['Dejaste el sistema de pensiones «por defecto» en las fichas.', 'Aparecerá como descuento extraño en el capítulo 5.'],
  teresa_aliada: ['Teresa, la caporala, confía en ti y explica las cosas a su cuadrilla en quechua.', 'Te ayudará en el capítulo 3.'],
  menor_detectado: ['Detectaste a un adolescente de 17 años sin autorización y no lo diste de alta como adulto.', 'Volverá en el capítulo 7.'],
  menor_pasado: ['Un adolescente de 17 años quedó registrado como adulto.', 'Capítulo 7.'],
  mesa_rapida: ['La mesa de registro funcionó a cinco minutos por persona.', 'Raúl lo recordará en el capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  teresa: { n: 'Teresa Huamaní', sub: 'Caporala · cuadrilla 7', c: '#B5651D' },
  wendy: { n: 'Wendy Paredes', sub: 'Practicante de Planillas', c: '#5B6FB5' },
};

export const WSP = [
  { chat: 'grupo', t: '05:35', de: 'Mónica', txt: 'Buenos días. Hoy entran 200. Wendy los acompaña en la mesa: ella lee los labios, háblenle de frente 🙂' },
  { chat: 'grupo', t: '05:38', de: 'Wendy', txt: 'Ya estoy en el paradero de la Panamericana con los formatos. Llevo 300 impresos por si acaso 📄' },
  { chat: 'raul', t: '05:50', de: 'Ing. Raúl', txt: 'Ya bajaron los buses. 60 en su mesa. Cinco minutos por persona, como dijo.', si: 'alta_dia_uno' },
  { chat: 'raul', t: '05:50', de: 'Ing. Raúl', txt: 'Gerencia dijo que le haga caso a Planillas. Ahí le mando a mi gente. Que no se demore.', si: 'raul_molesto' },
  { chat: 'raul', t: '05:50', de: 'Ing. Raúl', txt: 'Mis 60 ya están en el surco. No tengo tiempo para mesas. Mañana le mando 140 más.', si: 'sin_alta' },
  { chat: 'joel', t: '06:02', de: 'Joel', txt: 'Te dejé un chip con datos en la caja de la impresora. La señal del fundo 2 es de una rayita 📶', si: 'joel_aliado' },
  { chat: 'yolanda', t: '12:40', de: 'Yolanda', txt: 'Señorita, ¿sigue en pie lo de mañana? Mi hija me pregunta.', si: 'yolanda_escuchada' },
  { chat: 'yolanda', t: '12:40', de: 'Yolanda', txt: 'Señorita, ya le dije a mi esposo que mañana me pagan. Gracias otra vez 🙏', si: 'yolanda_promesa' },
  { chat: 'teresa', t: '17:10', de: 'Teresa', txt: 'Ya les expliqué a mis chicas lo del papel de la AFP. Mañana le traen sus hojas firmadas. Allinmi, señorita.', si: 'teresa_aliada' },
  { chat: 'wendy', t: '18:30', de: 'Wendy', txt: 'Me voy en el último bus. Las fichas quedaron en la caja azul, ordenadas por cuadrilla 📦' },
];

export const CORREOS = [
  { t: '06:15', de: 'Banco del Valle · Empresas', para: 'Planillas Valle Verde', asunto: 'Lote 1: 200 cuentas · 31 observadas', html: '<p>Del lote enviado el lunes, <b>169 cuentas</b> se abrieron. <b>31 están observadas</b>: 22 por DNI con dígitos faltantes y 9 por nombre distinto al de RENIEC.</p><p>Envíenos las correcciones antes de las 15:00 para incluirlas en el ciclo de hoy.</p>' },
  { t: '10:50', de: 'Ricardo Benavides · Gerente de Operaciones', para: 'Mónica Uribe; Planillas', asunto: 'Altas de campaña', html: '<p>Equipo: esta semana no podemos tener observaciones de ninguna autoridad. Prefiero que las fechas en el sistema estén «limpias». Planillas, coordine conmigo cualquier alta tardía antes de registrarla.</p><p>R. Benavides</p>' },
  { t: '15:40', de: 'Mónica Uribe', para: 'Analista de Administración de Personal', asunto: 'Gracias por hoy', html: '<p>Vi el avance en el T-Registro. Mañana repetimos con 140 más. <b>Duerme</b>, que mañana toca revisar el reloj.</p><p>Mónica</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador entró a cosechar ayer pero recién hoy lo das de alta. ¿Qué fecha de ingreso registras en T-Registro?', ops: ['La de hoy, porque hoy firmó', 'La de ayer, que es cuando empezó a trabajar', 'La del primer pago', 'La que diga el gerente'], ok: 1, por: 'El T-Registro debe reflejar la fecha real en que empezó la prestación de servicios. Registrarla tarde es una infracción; cambiarla, además, es falsear el registro.' },
  { q: 'Según la Ley 28991, ¿cuánto tiempo tiene un trabajador nuevo para elegir entre AFP y ONP?', ops: ['Un día', '10 días calendario desde que recibe el Boletín Informativo', '30 días hábiles', 'Hasta su primera boleta'], ok: 1, por: 'El empleador entrega el Boletín Informativo y el trabajador tiene 10 días calendario para elegir. Si no elige, se le afilia a una AFP.' },
  { q: 'Si un trabajador no elige sistema de pensiones en el plazo, ¿qué pasa?', ops: ['Queda en la ONP por defecto', 'Se le afilia a una AFP', 'No aporta a ningún sistema', 'Lo decide su jefe de fundo'], ok: 1, por: 'Vencido el plazo sin elección, el empleador debe afiliarlo al Sistema Privado de Pensiones (AFP).' },
  { q: 'Llega a la mesa un joven de 17 años con muchas ganas de trabajar. ¿Qué corresponde?', ops: ['Registrarlo como adulto: le falta poco', 'Que trabaje sin contrato', 'Verificar si tiene la autorización para trabajo adolescente; sin ella, no se le da de alta', 'Pagarle menos'], ok: 2, por: 'El Código de los Niños y Adolescentes exige autorización previa para que un adolescente trabaje. Sin ella, no puede ingresar.' },
  { q: 'El banco observa 22 cuentas por «DNI con dígitos faltantes». ¿Cuál es la causa más probable?', ops: ['Gente que dio un DNI falso', 'El Excel convirtió el DNI en número y borró los ceros iniciales', 'El banco se equivocó', 'RENIEC está caído'], ok: 1, por: 'Clásico de planillas: si la columna de DNI no está en formato texto, un 04512378 se vuelve 4512378.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '05:45', ch: 'presencial', who: 'joel', titulo: 'La mesa bajo el toldo', banner: 'assets/3d/scenes/agro.webp', lugar: 'Fundo 2 · al lado de los buses', show: ['tiempo', 'calidad', 'personas'],
    body: (n, F) => `<p>Neblina, olor a tierra mojada por el riego y el motor de los buses que llegan de Ica, Pisco y Los Molinos. Joel arma un toldo azul sobre dos mesas plegables${F.has('joel_aliado') ? ' y te pasa un chip con datos: «La rayita de señal no te va a alcanzar»' : ''}.</p><p>${F.has('sin_alta') ? 'Raúl mandó a sus 60 directo al surco, sin pasar por tu mesa. Hoy llegan 140 más.' : F.has('raul_molesto') ? 'Raúl no saluda, pero manda a su gente a tu mesa: gerencia se lo ordenó.' : 'Raúl cumplió: los primeros 60 bajan del bus y hacen fila frente a tu mesa.'} En la camioneta solo entran <mark class="clave">tres cajas más</mark>. ¿Qué te llevas?</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que van en la camioneta.', boton: 'Cargar la camioneta', resumen: 'Te llevaste',
    cols: ['Qué', 'Para qué'],
    rows: [
      { id: 'bol', cells: ['200 copias del Boletín Informativo de pensiones', 'Cada ingreso nuevo debe recibirlo para elegir AFP u ONP'] },
      { id: 'imp', cells: ['Impresora portátil y batería', 'Imprimir contrato y credencial ahí mismo'] },
      { id: 'lap', cells: ['Laptop con el Excel de altas y plantilla de T-Registro', 'Registrar sin esperar a volver a la oficina'] },
      { id: 'cafe', cells: ['Termos de café y pan con camote para la fila', 'Muchos salieron de su casa a las 3:30'] },
      { id: 'sello', cells: ['El sello de «Recibido» de mesa de partes', 'Se ve oficial'] },
      { id: 'parlante', cells: ['Un parlante para poner música', 'Ambiente'] },
    ],
    score: { bol: 3, imp: 2, lap: 3, cafe: 1, sello: -1, parlante: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: picks.includes('lap') ? 4 : -3, cumplimiento: picks.includes('bol') ? 3 : -2, personas: picks.includes('cafe') ? 3 : 0, calidad: picks.includes('imp') ? 2 : 0 },
        flags: picks.includes('lap') && picks.includes('imp') ? ['mesa_rapida'] : [],
        cartera: { altas: picks.includes('lap') ? 'Mesa con registro en línea' : 'Registro en papel, se digita en la tarde' },
        out: picks.includes('lap') ? 'A las 6:10 registras la primera alta. A las 6:16, la segunda. Wendy pone el ritmo: DNI, ficha, foto, firma, siguiente.' : 'Registras todo en papel. Esta tarde tocará digitar 200 fichas con letra de madrugada.',
        pro: { ok: 'Llevas lo que te permite registrar el alta el mismo día y cumplir con el boletín.', risk: 'Lo que no se registra en el campo se registra a las 8 de la noche, con errores.', info: 'El café no es un lujo: gente con hambre a las 6 de la mañana tiene menos paciencia en la fila.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mesa lista! Que empiece la fila.' : '¿Qué te hace falta para registrar aquí mismo?'],
      };
    },
    rules: [[LEY, 'El alta en T-Registro se registra dentro del día de ingreso del trabajador.'], [LEY, 'Ley 28991: el empleador entrega el Boletín Informativo a quien ingresa por primera vez a un centro laboral sin estar afiliado.']],
    mirada: {
      ve: 'Un alta masiva se gana o se pierde en la logística: dónde está la mesa, qué señal hay, qué se imprime ahí mismo. En el campo, Planillas trabaja donde está la gente, no donde está el aire acondicionado.',
      visual: { tipo: 'flujo', titulo: 'Cinco minutos por persona', pasos: ['DNI', 'Ficha', 'Boletín de pensiones', 'Contrato y firma', 'Alta en T-Registro', 'Credencial'], aqui: 0 },
    },
  },
  {
    id: 'c2', t: '07:20', ch: 'documento', who: null, titulo: 'Las fichas de la cuadrilla 7', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Mesa de registro · fundo 2', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Wendy te pasa el resumen de las fichas de la cuadrilla 7, la de Teresa Huamaní. Las llenaron anoche en el bus, con lapicero prestado y sobre las rodillas.</p><p>Antes de subirlas al T-Registro, <mark class="clave">marca lo que no puede pasar así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las fichas o campos que no deben registrarse como están.',
    doc: { t: 'Resumen de fichas de ingreso · cuadrilla 7', sub: 'Llenadas anoche en el bus · 18 personas' },
    lines: [
      { id: 'fecha', t: 'Fecha de ingreso de toda la cuadrilla: 1 del próximo mes, «para que cuadre con la quincena».', bad: LEY, why: 'La fecha de ingreso es el día en que empiezan a trabajar: hoy. El T-Registro no se acomoda a la quincena.' },
      { id: 'onp', t: 'Sistema de pensiones: «ONP» marcado por defecto en las 18 fichas, con la misma letra.', bad: LEY, why: 'Cada persona elige, con el Boletín Informativo en la mano, en 10 días calendario. Si no elige, va a una AFP, no a la ONP. Que alguien marque por todos no es una elección.' },
      { id: 'menor', t: 'Kevin Huamaní, 17 años, sobrino de Teresa, registrado como cosechador sin observaciones.', bad: LEY, why: 'El trabajo de adolescentes requiere autorización previa (Código de los Niños y Adolescentes, Ley 27337). Sin ella, no puede ingresar ni darse de alta como adulto.' },
      { id: 'asig', t: 'Josué Mendoza declara dos hijos de 4 y 7 años, pero en «asignación familiar» dice «No».', bad: LEY, why: 'Si tiene hijos menores de edad, le corresponde la asignación familiar (Ley 25129). Pide el DNI o la partida de los niños y márcala.' },
      { id: 'cpp', t: 'Josué Mendoza, venezolano, se identifica con su Carné de Permiso Temporal de Permanencia vigente.', duda: 'Es un documento válido para trabajar. Verifica que esté vigente y regístralo con el tipo de documento correcto en T-Registro.' },
      { id: 'cuenta', t: 'Rosa Ccahuana pide que su sueldo se deposite en la cuenta de su esposo.', bad: BP, why: 'El sueldo es de la trabajadora. Lo sano es abrirle su propia cuenta sueldo; si insiste, que quede su autorización escrita y firmada por ella.' },
      { id: 'dir', t: 'Dirección: «Pueblo Joven Señor de Luren, a espaldas del grifo».' },
      { id: 'tel', t: 'Tres personas comparten el mismo número de celular: el de Teresa.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Las fichas suben al sistema así. En unas semanas, alguien preguntará por qué Kevin trabaja de noche o por qué nadie eligió su AFP.' : `Separas ${hitsLey + hitsBp} fichas en una bandeja roja. Teresa se acerca: «¿Qué pasó con mi sobrino?». Le explicas que sin autorización no puede entrar. Se queda callada, pero asiente.`,
      flags: [missLey ? 'pension_defecto' : 'pension_informada', ...(missLey ? ['menor_pasado'] : ['menor_detectado'])],
      cartera: { fichas: missLey ? 'Fichas subidas sin corregir' : 'Cuadrilla 7 corregida · Kevin sin alta' },
      pro: { ok: 'Revisar una cuadrilla completa te enseña los errores que se repetirán en las otras diez.', risk: 'Una ficha mal llenada en el bus se vuelve un registro oficial en T-Registro.', info: 'Pregunta quién llenó las fichas: si fue una sola persona, revisa todas las de esa letra.' },
      kusi: missLey ? ['preocupado', 'Ese «ONP por defecto» no lo eligió nadie…'] : ['celebra', '¡Bandeja roja salvadora!'],
    }),
    rules: [[LEY, 'Ley 28991: el trabajador tiene 10 días calendario desde que recibe el Boletín Informativo para elegir entre AFP y ONP.'], [LEY, 'Ley 25129: la asignación familiar corresponde a quien tiene hijos menores de edad (o mayores que siguen estudios superiores, hasta los 24).']],
    mirada: {
      ve: 'Una ficha llenada a las 4 de la mañana en un bus es la puerta de entrada de casi todos los errores de la campaña. Revisar fichas no es desconfiar de la gente: es proteger su pensión, su asignación y su contrato.',
      visual: { tipo: 'cambio', titulo: 'De la ficha del bus a una ficha que sirve', pares: [['Ingreso: el 1 del próximo mes', 'Ingreso: hoy'], ['ONP marcado por todos', 'Cada quien elige con el boletín'], ['Kevin, 17, como adulto', 'Kevin espera su autorización'], ['Asignación familiar: No', 'Asignación familiar: Sí, con DNI de los niños']] },
      normas: [
        { ley: 'Ley 28991, art. 16, y R.M. 239-2019-TR', dice: 'El empleador entrega el Boletín Informativo a quien ingresa por primera vez a un centro laboral. El trabajador tiene 10 días calendario para elegir y, si no lo hace, se le afilia a una AFP.', practica: 'Marcar ONP «por defecto» contradice la ley dos veces: nadie eligió y el defecto legal no es la ONP.' },
        { ley: 'Ley 27337, Código de los Niños y Adolescentes', dice: 'El adolescente necesita autorización previa para trabajar.', practica: 'En campaña aparecen sobrinos, hijos y vecinos de 16 o 17 años. Sin autorización, no entran.' },
      ],
    },
  },
  {
    id: 'c3', t: '09:40', ch: 'llamada', who: null, titulo: 'Treinta y una cuentas observadas', banner: 'assets/foto/llamada.webp', lugar: 'Bajo el toldo, con una rayita de señal', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>El banco observó 31 cuentas del lote del lunes. Si no corriges antes de las 15:00, esa gente cobra su primera quincena en efectivo, bajo un toldo, con fila de dos horas.</p><p>Revisas el Excel: <mark class="clave">a 22 DNI les faltan los ceros iniciales</mark>. Esos los corriges tú. Los otros nueve requieren hablar con cada persona. Empiezas por cuatro.</p>`,
    type: 'calls',
    calls: [['Josué Mendoza · cuadrilla 7', 'Contesta en el surco: su nombre tiene dos apellidos venezolanos', 'Mi nombre completo es Josué David Mendoza Briceño, señorita. En el carné sale todo. ¿Se lo dicto?'], ['Doña Celestina Ramos · cuadrilla 2', 'Contesta su hija: la señora no sabe leer', 'Mi mamá firma con huella, señorita. ¿Eso vale para el banco?'], ['Teresa Huamaní · caporala', 'Contesta en quechua y luego en castellano', '¿Imaynalla? Ay, perdón. Sí, señorita, tres de mis chicas tienen mi número. No tienen celular.'], ['Brayan Soto · cuadrilla 4', 'No contesta: el celular suena dentro de una mochila']],
    prompt: 'Josué te dicta su nombre, Celestina firma con huella, tres personas comparten el celular de Teresa y Brayan no contesta. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Corregir los nombres con el documento en la mano, enviar al banco el formato con huella de Celestina, anotar a Teresa como contacto autorizado y buscar a Brayan en su cuadrilla a la hora del refrigerio.',
        res: { q: 'buena', fx: { personas: 5, calidad: 3, tiempo: -2 }, rel: {}, flags: ['teresa_aliada'], cartera: { altas: '30 de 31 cuentas corregidas antes de las 15:00' },
          envia: ['teresa', 'Teresa, gracias. Te anoto como contacto de tus tres chicas, solo para avisos de Planillas. Cualquier cosa de su sueldo se lo explico a ellas en persona, ¿ya?'],
          out: 'A las 12:30 encuentras a Brayan comiendo bajo un parrón: «Me cambié el apellido materno en RENIEC el año pasado». A las 14:40 sale el lote corregido.',
          pro: { ok: 'Cada observación tenía una persona distinta detrás. Las resolviste una por una, con el documento delante.', risk: 'Usar a Teresa como contacto es práctico, pero el sueldo de cada persona se explica a esa persona.', info: 'Para quienes firman con huella, el banco suele tener un formato propio. Pídelo una sola vez y úsalo toda la campaña.' },
          kusi: ['celebra', '¡Treinta de treinta y una! Brayan comió y tú también… casi.'] } },
      { id: 'b', label: 'Corregir los 22 DNI, mandar los nueve nombres «como suenan» y dejar el resto para la siguiente quincena: no hay tiempo con 140 personas más en la fila.',
        res: { q: 'riesgosa', fx: { personas: -4, tiempo: 3, calidad: -3 },
          out: 'El banco rechaza cinco de los nueve. Josué, Celestina y tres más cobrarán en efectivo. Celestina tendrá que pedirle a su hija que falte al colegio para acompañarla.',
          pro: { ok: 'Atiendes la fila del día.', risk: 'Un nombre «como suena» casi nunca coincide con RENIEC. Y cobrar en efectivo en campaña es fila, riesgo y un día menos de descanso.' },
          kusi: ['preocupado', 'Esos nueve también son personas con nombre propio.'] } },
    ],
    rules: [[BP, 'Corrige los datos con el documento de identidad a la vista, no de oídas.'], [BP, 'Un contacto de referencia no reemplaza la comunicación directa con cada trabajador sobre su sueldo.']],
    mirada: {
      ve: 'Las observaciones del banco parecen errores de digitación, pero detrás hay vidas concretas: alguien que no sabe leer, alguien que no tiene celular, alguien que cambió su apellido. Una buena analista no llena celdas: encuentra a la persona.',
      visual: { tipo: 'embudo', titulo: 'Las 31 cuentas observadas', niveles: [['Observadas', 31], ['Error de ceros en el DNI', 22], ['Necesitaban hablar con la persona', 9], ['Llamadas de esta mañana', 4]] },
    },
  },
  {
    id: 'c4', t: '11:30', ch: 'llamada', who: null, titulo: 'Una fecha «limpia»', banner: 'assets/foto2/tension.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Te llama Ricardo Benavides, gerente de Operaciones. Se oye el aire acondicionado de su oficina en Ica.</p><p>«${F.has('sin_alta') ? 'Los 60 que Raúl mandó directo al surco esta mañana no han firmado contrato. Regístrelos <mark class="clave">con fecha de mañana</mark>, cuando pasen por su mesa' : 'Me dicen que un caporal metió a 12 personas ayer, por la puerta de atrás, sin pasar por su mesa. Regístrelos <mark class="clave">con fecha de hoy</mark>'}. Si ponemos la fecha real, queda a la vista que trabajaron sin pasar por la mesa y SUNAFIL nos multa. Nadie se va a enterar: es un solo día, casi inducción.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Registrar la fecha real, decirle a Ricardo por escrito por qué y proponerle que la regularización quede documentada.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: -2 }, rel: { monica: 1 }, flags: ['fecha_real'], cartera: { fecha: 'Registrados con fecha real y sustento' },
          out: 'Ricardo se queda en silencio. «Usted sabe que esto me llega a mí», dice. Le respondes que también le llegaría una fecha falsa, y peor. A las 12:15 Mónica te escribe: «Bien. Yo hablo con él».',
          pro: { ok: 'Un registro tardío es una infracción; un registro falso es otra cosa. Y sin la fecha real, esas personas pierden días de aportes y de cobertura.', risk: 'Te expones con un gerente en tu primera semana.', info: 'Pon tu sustento por escrito y con copia a tu jefa: protege a la empresa y a ti.' },
          kusi: ['animo', 'Lo que cuenta es lo que pasó de verdad.'] } },
      { id: 'b', label: 'Hacerle caso: es un solo día de diferencia y no quieres pelearte con un gerente en tu primera semana.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -5, confianza: 3 }, flags: ['fecha_maquillada'], cartera: { fecha: 'Registrados con una fecha posterior a la real' },
          out: 'Ricardo te agradece. En el sistema, esas personas empezaron un día después. En el reloj de marcación, en las fotos del grupo de WhatsApp de la cuadrilla y en la memoria de cada una, empezaron antes.',
          pro: { ok: 'Evitas un conflicto hoy.', risk: 'Esas personas pierden días de aportes y de cobertura. Y el reloj, las jabas y los testigos cuentan otra historia.' },
          kusi: ['triste', 'El reloj sí sabe qué día entraron…'] } },
      { id: 'c', label: 'Registrar la fecha real sin decirle nada a Ricardo: es lo correcto y él no tiene por qué revisar el T-Registro.',
        res: { q: 'aceptable', fx: { etica: 3, cumplimiento: 3, confianza: -3 }, flags: ['fecha_callada'], cartera: { fecha: 'Registrados con fecha real · gerencia no informada' },
          out: 'Haces lo correcto en el sistema. Ricardo cree que le hiciste caso. Tarde o temprano verá la fecha.',
          pro: { ok: 'El registro es verdadero.', risk: 'Evitar la conversación hoy la vuelve más difícil mañana, cuando Ricardo se sienta engañado.', info: 'Lo correcto también se comunica.' },
          kusi: ['pensando', 'Bien hecho… pero ¿y cuando se entere?'] } },
    ],
    rules: [[LEY, 'El T-Registro debe consignar la fecha real de inicio de la prestación de servicios.'], [POL, 'En Valle Verde, las altas tardías se informan a la jefa de Planillas el mismo día.']],
    mirada: {
      ve: 'El gerente no pide un fraude por maldad: tiene miedo de una multa. Pero corregir un atraso con una fecha falsa cambia un error administrativo por un registro falso, y quien pierde días de aportes es el trabajador.',
      visual: { tipo: 'balanza', a: { t: 'Fecha «limpia»', items: ['Sin alta tardía en el sistema', 'Ricardo tranquilo hoy'] }, b: { t: 'Fecha real', items: ['Aportes y cobertura completos', 'Coincide con el reloj y los testigos', 'Una infracción que se reconoce y se corrige'] } },
      normas: [{ ley: 'D.S. 018-2007-TR y normas del T-Registro (SUNAT)', dice: 'El alta se registra dentro del día de ingreso, con la fecha de inicio real.', practica: 'Cuando el alta se hizo tarde, se registra igual con la fecha verdadera.' }],
    },
  },
  {
    id: 'c5', t: '14:10', ch: 'sistema', who: null, titulo: 'La carga masiva', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de Planillas · fundo 1', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>De vuelta en el contenedor de Planillas, con el almuerzo frío en un táper. Registrar 200 altas una por una en SUNAT Operaciones en Línea son cuatro horas. Con la carga masiva, una.</p><p>Wendy te mira: «Nunca lo he hecho». Tú tampoco, pero Mónica te dejó un pósit: <mark class="clave">«El orden importa. El portal se cuelga a las 3»</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para cargar las altas en T-Registro sin errores.', boton: 'Subir la carga',
    items: [
      { id: 'texto', t: 'Poner la columna de DNI en formato texto y revisar los ceros iniciales', por: 'El error de esta mañana: si no, el archivo sale con DNI de siete dígitos.' },
      { id: 'valid', t: 'Validar en el Excel: tipo de documento, fecha de ingreso, régimen agrario, sistema de pensiones', por: 'El CPP de Josué no es un DNI: tiene su propio tipo de documento.' },
      { id: 'arch', t: 'Generar el archivo de carga con la estructura que pide SUNAT', por: 'Una columna corrida rechaza todo el lote.' },
      { id: 'sol', t: 'Ingresar con la Clave SOL de la empresa y subir el archivo', por: 'Antes de las 3, cuando todo el Perú hace lo mismo.' },
      { id: 'err', t: 'Revisar el reporte de errores y corregir los rechazados', por: 'Nunca sale todo a la primera.' },
      { id: 'const', t: 'Descargar las constancias de alta para entregarlas a cada trabajador', por: 'La constancia es la prueba, para la persona, de que está registrada.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, tiempo: q === 'riesgosa' ? -4 : 3, cumplimiento: q === 'riesgosa' ? -2 : 3 },
        cartera: { altas: q === 'riesgosa' ? 'Carga rechazada · se repite mañana' : '186 altas cargadas · 13 por corregir' },
        out: q === 'buena' ? 'A las 14:52 el portal acepta 186 altas. Rechaza 13: fechas con formato de día y mes al revés. A las 15:20, cuando el portal empieza a tardar, ya terminaste.' : q === 'aceptable' ? 'La carga sale al segundo intento. Pierdes media hora, pero entra antes de las cuatro.' : 'Subes el archivo sin validar. SUNAT rechaza el lote entero y el portal se cuelga. Wendy te mira; tú miras el reloj.',
        pro: { ok: 'Validar antes de subir es más rápido que corregir después.', risk: 'En la carga masiva, un error de formato no afecta a una persona: afecta a doscientas.', info: 'Guarda la plantilla validada: mañana y el jueves llegan 140 y 180 más.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Doscientas personas existen en el sistema!' : 'El orden importaba, como dijo Mónica.'],
      };
    },
    rules: [[LEY, 'El alta en T-Registro se hace dentro del día de ingreso; la carga masiva es una forma permitida de hacerlo.'], [BP, 'Valida el archivo antes de subirlo: un error de formato rechaza el lote entero.']],
    mirada: {
      ve: 'Las herramientas masivas ahorran horas, pero también multiplican los errores. La profesional que domina la carga masiva no es la más rápida apretando botones: es la que valida antes.',
      visual: { tipo: 'linea', titulo: 'Tu tarde en el portal', hitos: [['14:10', 'DNI en texto'], ['14:30', 'Validación'], ['14:45', 'Archivo listo'], ['14:52', 'Carga aceptada'], ['15:20', 'Rechazados corregidos']] },
    },
  },
  {
    id: 'c6', t: '16:20', ch: 'whatsapp', who: null, titulo: 'El papel de la AFP', banner: 'assets/foto2/mesa-mujeres.webp', show: ['personas', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Teresa te escribe: «Señorita, mis chicas tienen miedo de firmar el papel de la AFP. Dicen que les van a quitar plata. ¿Qué les digo?».</p><p>${F.has('teresa_aliada') ? 'Ya la tienes como aliada desde esta mañana. ' : ''}Teresa tiene 58 años, viene de Huancavelica y lleva once campañas. Lo que ella diga en el bus de regreso <mark class="clave">es lo que la cuadrilla va a creer</mark>.</p>`,
    type: 'compose', enviaA: 'teresa', para: 'Para: Teresa Huamaní · Caporala, cuadrilla 7', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué es', ops: [
        { id: 'q1', t: 'Teresa, ese papel es para que cada una elija dónde va su aporte para su jubilación: AFP u ONP.', ok: true, por: 'Claro y sin siglas sueltas.' },
        { id: 'q2', t: 'Es el boletín de la Ley 28991 sobre el SPP y el SNP.', ok: false, por: 'Correcto, pero nadie en el bus lo va a entender.' },
      ] },
      { id: 'plata', t: 'Lo de la plata', ops: [
        { id: 'p1', t: 'El descuento es por ley en los dos sistemas. No es la empresa quitándoles: es su ahorro para cuando ya no trabajen.', ok: true, por: 'Responde al miedo real.' },
        { id: 'p2', t: 'No se preocupen, no les van a descontar nada.', ok: false, por: 'Falso: sí habrá un aporte. Cuando lo vean en la boleta, perderás su confianza.' },
      ] },
      { id: 'plazo', t: 'El plazo', ops: [
        { id: 'z1', t: 'Tienen 10 días para elegir. Si no eligen, por ley las afilian a una AFP.', ok: true, por: 'Exacto y útil.' },
        { id: 'z2', t: 'Fírmenlo hoy nomás, después vemos.', ok: false, por: 'Apurar a firmar es justo lo que les da miedo.' },
        { id: 'z3', t: 'Tienen tiempo, no hay apuro.', ok: null, por: 'Tranquiliza, pero sin plazo nadie decide.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Mañana a la hora del refrigerio paso por su cuadrilla y les explico. Tú me ayudas si alguna prefiere en quechua.', ok: true, por: 'Ofreces tiempo, lugar y respetas su idioma.' },
        { id: 'c2', t: 'Que vengan a la oficina si tienen dudas.', ok: false, por: 'La oficina está a 6 km del fundo 2 y cierran a las 3.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'p1', 'z1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 0, cumplimiento: sel.plazo === 'z1' ? 3 : -1, confianza: sel.plata === 'p2' ? -4 : 2 },
        flags: q === 'buena' ? ['teresa_aliada', 'pension_informada'] : [],
        cartera: { pensiones: q === 'buena' ? 'Charla en el refrigerio de mañana' : 'Boletín entregado, dudas abiertas' },
        out: q === 'buena' ? 'Teresa responde con un audio en quechua para su cuadrilla y uno en castellano para ti: «Ya, señorita. Mañana la esperamos con chicha morada».' : sel.plata === 'p2' ? 'Teresa repite en el bus que no habrá descuento. Dentro de dos semanas, la primera boleta dirá otra cosa.' : 'Teresa contesta «ya, señorita». No sabes si convenció a alguien.',
        pro: { ok: 'Explicar en palabras simples, con verdad y con plazo, es cumplir la ley de verdad, no solo entregar un papel.', risk: 'Un «no les van a descontar nada» se vuelve un reclamo en la primera boleta.', info: 'Las caporalas son el canal más creíble del campo. Cuídalas: no son tus mensajeras, son tus aliadas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Qué divino! Chicha morada mañana.' : '¿Qué es lo que de verdad les daba miedo?'],
      };
    },
    rules: [[LEY, 'Ley 28991: 10 días calendario para elegir; sin elección, se afilia a una AFP.'], [BP, 'Explica los descuentos de ley antes de la primera boleta, no después.']],
    mirada: {
      ve: 'Entregar un boletín cumple la forma de la ley. Que alguien entienda qué elige, cumple su sentido. En el campo, la información viaja de boca en boca: conviene que el primer boca a boca sea verdadero.',
      visual: { tipo: 'mensaje', titulo: 'Un WhatsApp que se va a repetir en el bus', txt: 'Teresa, ese papel es para que cada una elija dónde va su aporte para su jubilación: AFP u ONP. El descuento es por ley en los dos. Tienen 10 días para elegir; si no, las afilian a una AFP. Mañana en el refrigerio paso y les explico. Tú me ayudas en quechua.' },
    },
  },
  {
    id: 'c7', t: '18:00', ch: 'correo', who: null, titulo: 'El reporte del martes', banner: 'assets/esc/escritorio.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>El último bus sale a las 18:30 y tú tienes los pies llenos de tierra. Mónica necesita un reporte corto para decidir cómo va la mesa mañana con 140 personas más.</p><p>Arma el correo con lo que <mark class="clave">sirve para decidir</mark>, no con todo lo que hiciste.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del reporte.', boton: 'Enviar a Mónica',
    bloques: [
      { id: 'avance', t: 'Avance', n: 2, ops: [
        { id: 'a1', t: '186 altas cargadas en T-Registro; 13 rechazadas por formato de fecha, ya corregidas.', ok: true },
        { id: 'a2', t: '30 de 31 cuentas observadas corregidas y enviadas al banco antes de las 15:00.', ok: true },
        { id: 'a3', t: 'Hoy fue un día muy intenso, pero el equipo dio todo.', ok: false, por: 'Cierto, pero no ayuda a decidir.' },
      ] },
      { id: 'riesgo', t: 'Riesgos', n: 2, ops: [
        { id: 'r1', t: 'Las fichas llegan llenadas en el bus por una sola persona: hay que revisarlas antes de cargar.', ok: true },
        { id: 'r2', t: 'Un adolescente de 17 años sin autorización intentó ingresar: necesitamos una regla para caporales.', ok: true },
        { id: 'r3', t: 'Wendy es lenta porque no escucha bien.', ok: false, por: 'Falso e injusto: Wendy sostuvo la fila. Su discapacidad no es un riesgo; la mala señal sí.' },
        { id: 'r4', t: 'La señal del fundo 2 no sostiene el portal de SUNAT.', ok: true, por: 'Un riesgo real para mañana.' },
      ] },
      { id: 'pedido', t: 'Lo que necesito', n: 1, ops: [
        { id: 'p1', t: 'Que Legal y Raúl avisen a los caporales: nadie entra sin pasar por la mesa, ni menores sin autorización.', ok: true },
        { id: 'p2', t: 'Nada por ahora, gracias.', ok: false, por: 'Mañana llegan 140 más. Siempre hay algo que pedir.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, calidad: q === 'riesgosa' ? -2 : 2 },
        rel: { monica: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Mónica responde desde el carro: «Mañana a las 5:45 hablo yo con los caporales. Y Wendy se queda contigo toda la campaña».' : 'Mónica responde «ok». Mañana tendrás que contarle lo demás en persona.',
        pro: { ok: 'Un reporte con avance medible, riesgos concretos y un pedido claro le permite a tu jefa actuar esa misma noche.', risk: 'Describir a una compañera por su discapacidad, en lugar de por su trabajo, es injusto y te resta credibilidad.', info: 'Si un riesgo depende de otra área (caporales, señal), dilo con nombre y apellido del área.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Día largo y bien contado!' : '¿Qué necesitaba saber Mónica para mañana?'],
      };
    },
    rules: [[BP, 'Un reporte diario sirve si permite decidir: avance, riesgo y pedido.']],
    mirada: {
      ve: 'Al final de un día de altas masivas, el cansancio empuja a contar todo o no contar nada. Lo profesional es contar lo que cambia el día siguiente.',
      visual: { tipo: 'embudo', titulo: 'Tu miércoles en números', niveles: [['Llegaron a la mesa', 200], ['Altas cargadas', 186], ['Corregidas en la tarde', 13], ['Sin alta por falta de autorización', 1]] },
    },
  },
];
