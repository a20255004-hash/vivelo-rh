// Analista de Capacitación y Desarrollo · Capítulo 8 · «¿Sirvió?» · Semana 2, miércoles.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Ley 29571, Código de Protección y Defensa del Consumidor, art. 62: gestiones de cobranza con personas ajenas a la deuda.
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29571.pdf
// Los cuatro niveles de evaluación (reacción, aprendizaje, aplicación y resultados) se presentan como buena práctica.
// Todas las cifras de Chimú son ficticias.

export const CAP = {
  n: 8, titulo: '¿Sirvió?', dia: 'Semana 2, miércoles', foto: 'assets/foto/supervisa.webp',
  lugar: 'Financiera Chimú · Agencia El Porvenir y sede central',
  inicio: '07:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Miércoles. Hoy no te sirve la opinión de nadie: sales a ver qué pasa en la calle y abres los números.', boton: 'Salir a campo',
  kusi: 'Medir duele un poco. Pero mirar para otro lado duele más.',
  lead: 'Elegiste a quién observar, viste lo que se aplica y lo que no, y encontraste un número que no querías: la colocación bajó. Luego le diste la cara a Víctor y armaste el informe.',
  reflexion: '¿Qué número te incomodó más hoy? ¿Qué hiciste con él?',
  siguiente: { n: 9, titulo: 'El comité', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'muestra', p: 'Asesores por observar', j: 'Tú · Desarrollo', d: 0, e: 'Hay tiempo para 3 de 20' },
  { id: 'aplicacion', p: 'Aplicación en campo', j: 'Sandra y Don Aurelio', d: 0, e: 'Lista de 5 conductas' },
  { id: 'numeros', p: 'Números después del taller', j: 'Tú · Desarrollo', d: 0, e: 'Por abrir' },
  { id: 'victor', p: 'Colocación del grupo del taller', j: 'Víctor · Negocios', d: 0, e: 'Sin explicar' },
  { id: 'informe', p: 'Informe de impacto', j: 'Lorena · Desarrollo', d: 0, e: 'Para mañana' },
];

export const FUTURO = {
  muestra_mixta: ['Observaste una muestra con quien aprobó, quien no aprobó y un agregado de última hora.', 'Tu informe será difícil de discutir. Capítulo 9.'],
  muestra_sesgada: ['Observaste solo a quienes te iban a dar buenas noticias.', 'Alguien lo preguntará en el comité. Capítulo 9.'],
  numeros_honestos: ['Reportaste que la colocación bajó, y separaste lo que se sabe de lo que todavía no.', 'Lo defenderás en el comité. Capítulo 9.'],
  numeros_lindos: ['Dejaste fuera la caída de la colocación.', 'Víctor la pondrá sobre la mesa. Capítulo 9.'],
  metodo_abandonado: ['Propusiste dejar de exigir el cuaderno para recuperar la colocación.', 'La mora de esos créditos llegará después. Capítulo 10.'],
  victor_datos: ['Le explicaste a Víctor la caída de la colocación antes de que la descubriera.', 'Llegará al comité sin sorpresas. Capítulo 9.'],
  victor_molesto: ['Víctor se enteró mal de la caída de la colocación.', 'Llegará al comité con una tabla propia. Capítulo 9.'],
  informe_solido: ['Tu informe de impacto separa reacción, aprendizaje, aplicación y resultados.', 'Lo verás en el comité. Capítulo 9.'],
  informe_flojo: ['Tu informe de impacto mezcla lo que se sabe con lo que se quisiera.', 'Capítulo 9.'],
  mario_preparado: ['Le preguntaste a Mario qué decidirá mañana.', 'Sabes qué necesita para liberar fondos. Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  kevin: { n: 'Kevin Paredes', sub: 'Asesor · El Porvenir', c: '#3D6E8F' },
  mario: { n: 'Mario Ugaz', sub: 'Jefe de Presupuesto · Finanzas', c: '#5B4B8A' },
  julian: { n: 'Julián Vásquez', sub: 'Asesor · Florencia de Mora', c: '#6B8F3D' },
};

export const WSP = [
  { chat: 'sandra', t: '06:50', de: 'Sandra', txt: 'Don Aurelio ya está en La Hermelinda desde las 6, dice que los mercados no esperan 😅 Yo te espero en el paradero.' },
  { chat: 'julian', t: '09:10', de: 'Julián', txt: 'Señorita, gracias por lo de anoche. Ya me dieron descanso médico. ¿Me van a quitar el bono? 😟', si: 'visita_al_herido' },
  { chat: 'kevin', t: '10:20', de: 'Kevin', txt: 'Señorita, disculpe: ¿me puede dar una constancia del taller para mi instituto? Me la piden para hoy 🙏' },
  { chat: 'lorena', t: '10:45', de: 'Lorena', txt: 'Riesgos encontró 3 evaluaciones con ventas infladas en El Porvenir. Lo lleva a Gerencia con datos de varias agencias, sin nombres.', si: 'presion_reportada' },
  { chat: 'victor', t: '12:30', de: 'Víctor', txt: '¿Quién le pasó a Mario que la colocación de El Porvenir bajó? Llámame.', si: 'prueba_maquillada' },
  { chat: 'victor', t: '14:05', de: 'Víctor', txt: 'Ya. Si es porque rechazan créditos malos, lo discutimos mañana con Riesgos. Pero mi meta no se va a mover sola.', si: 'victor_datos' },
  { chat: 'grupo', t: '17:50', de: 'Lorena', txt: 'Mañana a las 10 es el comité. Hoy duerme. En serio 😴' },
];

export const CORREOS = [
  { t: '07:30', de: 'Riesgos · Chimú', para: 'Analista de Capacitación y Desarrollo', asunto: 'Datos del grupo del taller y grupo de comparación', html: '<p>Adjunto los datos de cuatro días hábiles de los 20 asesores del taller y de 20 asesores nuevos de agencias similares que no fueron. Recuerda que en cuatro días no se puede sacar una conclusión sobre mora.</p><p>Área de Riesgos</p>' },
  { t: '15:40', de: 'Mario Ugaz · Finanzas', para: 'Analista de Capacitación y Desarrollo; Lorena Villanueva', asunto: 'Para mañana', html: '<p>Mañana voy a preguntar tres cosas: qué se gastó, qué cambió y qué necesitan. Una hoja, por favor.</p><p>Mario Ugaz</p>' },
];

export const QUIZ = [
  { q: 'Solo hay tiempo para observar a tres asesores. ¿A quiénes?', ops: ['A los tres mejores de la prueba', 'A una muestra variada: quien aprobó, quien no y alguien que llegó sin diagnóstico', 'A quienes el jefe recomiende', 'A los más simpáticos'], ok: 1, por: 'Observar solo a los mejores confirma lo que quieres creer.' },
  { q: 'Cuatro días después del taller, ¿qué puedes decir sobre la mora?', ops: ['Que bajó gracias al taller', 'Todavía nada concluyente: es muy pronto', 'Que el taller no sirvió', 'Que subirá'], ok: 1, por: 'La mora necesita más tiempo. A los cuatro días se puede ver aplicación y primeros indicios.' },
  { q: 'La colocación del grupo del taller bajó porque rechazan créditos mal sustentados. Eso es…', ops: ['Solo una mala noticia', 'Un efecto que hay que explicar: menos colocación hoy, posiblemente menos mora después', 'Algo que conviene ocultar', 'Prueba de que el taller falló'], ok: 1, por: 'Un número solo no dice si algo es bueno o malo. Hay que explicar la cadena y medir más tiempo.' },
  { q: '¿Para qué sirve un grupo de comparación?', ops: ['Para premiar a uno y castigar a otro', 'Para distinguir lo que pudo causar el taller de lo que le pasó a todos', 'Para tener más datos bonitos', 'No sirve'], ok: 1, por: 'Sin comparación, no sabes si el cambio se debe al taller o a otra cosa.' },
  { q: 'En una visita de cobranza, el asesor le deja el acuerdo a la hija del cliente para que se lo entregue y le cuenta lo que debe. ¿Qué problema hay?', ops: ['Ninguno, es su familia', 'Puede ser una gestión de cobranza con una persona ajena a la deuda', 'Solo que no firmó', 'Que debió llamar antes'], ok: 1, por: 'La Ley 29571, art. 62, prohíbe las gestiones de cobranza con personas ajenas a la deuda.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'w1', t: '07:10', ch: 'documento', who: null, titulo: 'A quién ir a ver', banner: 'assets/foto2/caminan.webp', lugar: 'Combi a El Porvenir', show: ['calidad', 'tiempo', 'etica'],
    body: (n, F) => `<p>En la combi, apretada entre dos señoras con baldes para el mercado, abres tu lista de 20 nombres. ${F.has('sin_acompanamiento') ? 'Sin Sandra ni Don Aurelio, solo tú puedes observar.' : 'Sandra y Don Aurelio ya tienen sus rutas.'} Julián no está: sigue con la muñeca enyesada.</p><p>Solo te alcanza la mañana para <mark class="clave">tres asesores</mark>. La lista de quién eliges también es un resultado.</p>`,
    type: 'pick', n: 3, prompt: 'Elige a los tres asesores que observarás.', boton: 'Ir con estos tres', resumen: 'Observarás',
    cols: ['Asesor', 'Por qué'],
    rows: [
      { id: 'kevin', cells: ['Kevin Paredes · nota 9', 'Aprobó alto y ya cerró acuerdos'] },
      { id: 'mila', cells: ['Milagros Chávez · nota 7', 'Aprobó, pero se le fue una clienta'] },
      { id: 'bajo', cells: ['Rocío Ponce · nota 5 · La Esperanza', 'No llegó al 7; era de las agregadas'] },
      { id: 'top', cells: ['Luis Sánchez · nota 10', 'El mejor de la prueba'] },
      { id: 'jefe', cells: ['Quien Nando recomiende', 'Él sabe quién va mejor'] },
    ],
    score: { kevin: 2, mila: 3, bajo: 3, top: 0, jefe: -2 },
    res: (picks, sc) => {
      const q = picks.includes('bajo') && picks.includes('mila') ? 'buena' : picks.includes('jefe') ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: q === 'riesgosa' ? -2 : 1 },
        flags: [q === 'buena' ? 'muestra_mixta' : 'muestra_sesgada'], cartera: { muestra: q === 'buena' ? 'Variada: alta, media y baja' : 'Inclinada a los mejores' },
        out: q === 'buena' ? 'Escribes tres nombres en la libreta. Si algo funciona con Rocío, que sacó 5, vale más que cualquier promedio.' : q === 'aceptable' ? 'Eliges bien en parte. Quienes más te podían enseñar quedan para otro día.' : 'Nando te recomienda a dos de sus mejores. Pasarás una buena mañana, y sabrás muy poco.',
        pro: { ok: 'Mirar también a quien no aprobó te muestra dónde se rompe el aprendizaje.', risk: 'Una muestra elegida para quedar bien le quita valor a todo lo que digas después.', info: 'Anota por qué elegiste a cada uno: te lo preguntarán.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una muestra que no se engaña!' : '¿Y los que no aprobaron?'],
      };
    },
    rules: [[BP, 'Para evaluar, observa también a quienes tuvieron peores resultados, no solo a los mejores.']],
    mirada: {
      ve: 'Con tiempo limitado, elegir a quién observar es decidir qué vas a descubrir. Quien solo mira a los mejores termina con un informe que parece un éxito y no le enseña nada a nadie.',
      visual: { tipo: 'embudo', titulo: 'El grupo del taller', niveles: [['Participaron', 20], ['Aprobaron con 7 o más', 14], ['Observarás hoy', 3]] },
    },
  },
  {
    id: 'w2', t: '09:15', ch: 'documento', who: 'sandra', titulo: 'La lista de cinco conductas', banner: 'assets/foto/taller.webp', lugar: 'Mercado La Hermelinda y calles de El Porvenir', show: ['cumplimiento', 'calidad', 'personas'],
    body: (n, F) => `<p>La Hermelinda huele a pescado y a cilantro, y el sol ya pica. Caminas con Sandra junto a Kevin, Milagros y Rocío. Milagros le pide el cuaderno a una vendedora de verduras: «Señora, para que el crédito no le pese en los meses flojos». La señora lo saca sin problema.${F.has('guion_viejo') ? ' Kevin todavía lleva en la mochila el guion antiguo.' : ''}</p><p>Vuelves con tu lista de observación. <mark class="clave">Lo que escribas es la evidencia de mañana</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que anotaste que está mal o que conviene corregir.',
    doc: { t: 'Lista de observación · acompañamiento en campo', sub: 'Kevin, Milagros y Rocío · miércoles, mañana' },
    lines: [
      { id: 'hija', t: 'Kevin le deja el acuerdo a la hija de don Julio y le cuenta cuánto debe su papá.', bad: LEY, why: 'La Ley 29571 (art. 62) prohíbe las gestiones de cobranza con personas ajenas a la deuda.' },
      { id: 'reporte', t: 'Rocío le promete a un cliente que «no lo reporta» a la central de riesgo si paga hoy.', bad: BP, why: 'No puede ofrecer eso. Está prometiendo algo que no depende de ella.' },
      { id: 'tempo', t: 'Rocío no pregunta por los meses flojos del negocio: pasa directo al monto.', bad: BP, why: 'Es lo que falló en la prueba. Es justo donde necesita acompañamiento.' },
      { id: 'cuaderno', t: 'Milagros pide el cuaderno explicando para qué sirve, y la clienta se lo muestra.' },
      { id: 'escrito', t: 'Kevin cierra otros dos acuerdos por escrito, con monto y fecha.' },
      { id: 'hora', t: 'Sandra acompaña sin intervenir y da su retroalimentación después de cada visita.' },
      { id: 'mas', t: 'Milagros tarda 25 minutos más por visita.', duda: 'No es un error. Pero explica parte de lo que verás en los números.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'Tu lista destaca lo bueno y deja pasar lo de la hija de don Julio. Kevin no se entera de que tiene que corregirlo.' : `Anotas lo de Kevin y ${hitsBp} cosas más. Al salir, Sandra se lo dice a solas. Kevin se agarra la cabeza: «Es que ella siempre me abre». Lo aprendió el viernes; hoy lo está aprendiendo de verdad.`,
      flags: missLey ? [] : ['kevin_corregido'], cartera: { aplicacion: missLey ? 'Observada, con un error sin corregir' : 'Milagros: bien. Kevin: un desliz corregido. Rocío: necesita refuerzo' },
      pro: { ok: 'Observar conductas concretas te da evidencia que nadie puede discutir.', risk: 'Lo que pasa por alto la lista, se repite.', info: 'Rocío no necesita otro curso: necesita otra mañana al lado de Sandra.' },
      kusi: missLey ? ['preocupado', '¿Y lo de la hija de don Julio?'] : ['celebra', 'Aplicación real, con sus tropiezos. ¡Así!'],
    }),
    rules: [[LEY, 'Ley 29571, art. 62: no se gestiona la cobranza con personas ajenas a la deuda.'], [BP, 'Observa conductas concretas, no impresiones.']],
    mirada: {
      ve: 'La aplicación se ve en la calle, no en un formulario. La lista de conductas convierte «le va bien» en «pide el cuaderno, pero no pregunta por temporadas». Con eso sí se puede enseñar.',
      visual: { tipo: 'matriz', x: 'Domina la conducta', y: 'Peso en la mora', cuadrantes: ['Reforzar ya', 'Mantener', 'Puede esperar', 'Bien'], items: [['Rocío: temporadas', .2, .8], ['Kevin: terceros', .45, .75], ['Milagros: cuaderno', .85, .85], ['Kevin: acuerdo escrito', .8, .65]] },
    },
  },
  {
    id: 'w3', t: '11:30', ch: 'sistema', who: null, titulo: 'El número que no querías', banner: 'assets/esc/planilla.webp', lugar: 'Escritorio prestado, agencia El Porvenir', show: ['calidad', 'etica', 'confianza'],
    body: (n, F) => `<p>Sentada en las escaleras del segundo piso, abres el Excel de Riesgos. Los 20 del taller contra 20 nuevos que no fueron, cuatro días hábiles:</p><p>Acuerdos de pago por escrito: <b>27 contra 4</b>. Promesas cumplidas: <b>59 % contra 41 %</b>. Mora: <b>sin cambio</b>, es pronto. Y colocación: <mark class="clave">−18 % contra −3 %</mark>.</p><p>${F.has('presion_callada') && !F.has('presion_reportada_tarde') ? 'Y algo más: en El Porvenir varias evaluaciones siguen con ventas redondas, de mil en mil. No lo dijiste la semana pasada, y ahora no sabes cuánto pesa eso en tus datos.' : 'Parte de la caída tiene una explicación: están rechazando créditos que antes pasaban, y Riesgos ya revisa las evaluaciones infladas.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reportar los cuatro números con lo que se sabe y lo que no: más acuerdos y promesas, colocación más baja, mora todavía sin respuesta. Decir qué hay que medir para saber si fue buena o mala noticia.',
        res: { q: 'buena', fx: { etica: 5, calidad: 5, confianza: 2 }, rel: { lorena: 1 }, flags: ['numeros_honestos'], cartera: { numeros: '4 indicadores, con sus límites' },
          out: 'Lorena lee los números en silencio. «La colocación nos puede hundir mañana.» Luego levanta la vista: «Pero si lo decimos nosotras primero, no nos van a poder decir que lo escondimos».',
          pro: { ok: 'Un resultado incómodo, bien explicado, vale más que un éxito que nadie cree.', risk: 'Te expones a que el comité solo escuche «−18 %».', info: 'Pide a Riesgos revisar esos créditos rechazados en 90 días: esa será la prueba real.' },
          kusi: ['animo', 'Lo incómodo también se muestra.'] } },
      { id: 'b', label: 'Destacar acuerdos y promesas cumplidas, y dejar la colocación para otro momento: es un dato temprano y confunde.',
        res: { q: 'riesgosa', fx: { etica: -5, calidad: -2, confianza: 2 }, flags: ['numeros_lindos'], cartera: { numeros: 'Solo los dos números buenos' },
          out: 'Tu hoja se ve impecable. Pero Víctor maneja la colocación de memoria, y se sienta al frente en el comité.',
          pro: { ok: 'Evitas un dato todavía sin explicar.', risk: 'Lo que escondes te lo pueden mostrar otros, y ahí pierdes todo lo demás.' },
          kusi: ['preocupado', 'Víctor se sabe esa cifra de memoria…'] } },
      { id: 'c', label: 'Recomendar que dejen de pedir el cuaderno por ahora, para que no siga cayendo la colocación mientras se ve qué pasa.',
        res: { q: 'riesgosa', fx: { calidad: -4, confianza: 1 }, flags: ['metodo_abandonado'], cartera: { numeros: 'Se pide aflojar la verificación' },
          out: 'Víctor celebra: «Por fin alguien piensa en la meta». Los asesores vuelven a anotar lo que el cliente dice. Justo lo que tu diagnóstico señaló como causa.',
          pro: { ok: 'Atiendes un problema real del negocio.', risk: 'Cambias el método por un dato de cuatro días y dejas de medir lo que querías probar.' },
          kusi: ['triste', '¿Y el diagnóstico del martes pasado?'] } },
    ],
    rules: [[BP, 'Reporta los indicadores completos, con sus límites. Un dato incómodo se explica; no se esconde.'], [BP, 'Compara con un grupo que no participó antes de atribuirle un cambio a la capacitación.']],
    mirada: {
      ve: 'Una capacitación puede mejorar la calidad de las decisiones y empeorar un indicador en el corto plazo. Aquí, menos colocación puede significar menos mora dentro de unos meses, o puede significar otra cosa. La respuesta honesta es decir qué se sabe y qué falta medir.',
      visual: { tipo: 'balanza', a: { t: 'Lo que mejoró', items: ['Acuerdos por escrito: 27 contra 4', 'Promesas cumplidas: 59 % contra 41 %'] }, b: { t: 'Lo incómodo', items: ['Colocación: −18 % contra −3 %', 'Mora: todavía sin respuesta', 'Cuatro días de datos'] } },
    },
  },
  {
    id: 'w4', t: '13:20', ch: 'whatsapp', who: null, titulo: 'Decírselo a Víctor', banner: 'assets/foto2/tension.webp', lugar: 'Almuerzo en el mercado, de pie', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Un caldo de gallina en un banquito de mercado y el celular en la mano.${F.has('victor_trato') ? ' El trato con Víctor decía: «si la colocación baja, se acaba».' : ''}${F.has('tramos') ? ' Y Mario va a preguntar antes de soltar el primer tramo.' : F.has('promesa_mora') ? ' Y en el cajón de Mario hay un papel con tu firma: la mora, dos puntos en tres meses.' : ''}</p><p>Víctor va a ver el −18 % esta tarde. <mark class="clave">Es mejor que lo sepa por ti</mark>.</p>`,
    type: 'compose', enviaA: 'victor', para: 'Para: Víctor Alvarado · Gerente regional', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'Víctor, quiero que lo veas por mí antes del comité: en cuatro días, la colocación del grupo del taller bajó 18 %, contra 3 % de los otros.', ok: true, por: 'Directo, con la cifra y su comparación.' },
        { id: 'd2', t: 'Víctor, hay buenas noticias del taller, y algún tema menor de colocación.', ok: false, por: 'Minimiza lo que a él más le importa.' },
      ] },
      { id: 'causa', t: 'Lo que sabes', ops: [
        { id: 'c1', t: 'Parte es porque revisan más y rechazan créditos que antes pasaban. No sé todavía si eso bajará la mora: lo sabremos en 90 días.', ok: true, por: 'Separas lo que sabes de lo que no.' },
        { id: 'c2', t: 'Esto demuestra que el taller funciona y que esos créditos eran malos.', ok: false, por: 'Afirmas algo que todavía no puedes probar.' },
      ] },
      { id: 'pedido', t: 'Lo que propones', ops: [
        { id: 'p1', t: '¿Revisamos juntos hoy o mañana a primera hora, con Riesgos, qué créditos se rechazaron y por qué?', ok: true, por: 'Lo invitas a mirarlo contigo.' },
        { id: 'p2', t: 'Te pido que no lo menciones en el comité hasta tener más datos.', ok: false, por: 'Le pides que esconda algo: lo pondrá primero en la mesa.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, etica: q === 'buena' ? 2 : 0 }, rel: { victor: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: [q === 'riesgosa' ? 'victor_molesto' : 'victor_datos'], cartera: { victor: q === 'riesgosa' ? 'Se enteró mal' : 'Avisado, revisión con Riesgos' },
        out: q === 'buena' ? 'Víctor llama en menos de un minuto. Grita un poco. Después dice: «Mándame la lista de los rechazados. Si esos créditos eran malos, quiero verlo con mis ojos».' : q === 'aceptable' ? 'Víctor responde: «Ok. Mañana lo vemos». Hay un punto que no le queda claro, y lo sabes.' : 'Víctor no responde. A las cuatro, Lorena te reenvía una tabla que él mandó a toda la gerencia: «Colocación del piloto: −18 %».',
        pro: { ok: 'Dar la mala noticia tú misma y primero compra más credibilidad que cualquier presentación.', risk: 'Decir «no lo sé todavía» a un gerente apurado incomoda, pero es lo correcto.', info: 'Prepara la lista de créditos rechazados antes de que te la pida.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Gritó, pero ya lo sabe por ti.' : 'Así no se entera bien, y lo vas a notar.'],
      };
    },
    rules: [[BP, 'Una mala noticia se da pronto, con datos, y a quien más le afecta.']],
    mirada: {
      ve: 'Con un jefe comercial, tu credibilidad se juega en cómo das las malas noticias. Darle el dato, la duda y una invitación a revisarlo convierte un posible enemigo en alguien que va a mirar la lista contigo.',
      visual: { tipo: 'cambio', titulo: 'Cómo dar el número', pares: [['«Hay un tema menor»', '«Bajó 18 %, contra 3 %»'], ['«Demuestra que funciona»', '«No lo sé todavía: 90 días»'], ['«No lo menciones»', '«¿Lo revisamos con Riesgos?»']] },
    },
  },
  {
    id: 'w5', t: '15:00', ch: 'documento', who: null, titulo: 'El informe de impacto', banner: 'assets/esc/lupa.webp', lugar: 'Sede central', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>De regreso a la sede, con los pies hechos polvo, firmas la constancia de Kevin y abres el informe. ${F.has('prueba_maquillada') ? 'La pestaña con las seis filas sigue ahí. Mañana alguien va a abrirla: mejor incluirlas hoy.' : F.has('prueba_honesta') ? 'Las seis filas del viernes ya están a la vista.' : 'Tienes los resultados de la prueba del viernes.'}</p><p>Tienes una hoja para contar lo que pasó. <mark class="clave">Cada nivel responde a una pregunta distinta</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu informe de impacto.', boton: 'Enviar el informe a Lorena',
    bloques: [
      { id: 'aprendizaje', t: 'Reacción y aprendizaje', n: 2, ops: [
        { id: 'a1', t: 'Entrada 4,8 y salida 7,6 sobre 10; 14 de 20 llegaron al 7, y cinco de los seis restantes eran agregados.', ok: true, por: 'Completo, con el dato incómodo.' },
        { id: 'a2', t: 'Los asistentes pidieron más talleres como este.', ok: true, por: 'La reacción vale, si no se confunde con el aprendizaje.' },
        { id: 'a3', t: 'Promedio de los que aprobaron: 8,4.', ok: false, por: 'Maquilla el resultado.' },
      ] },
      { id: 'aplicacion', t: 'Aplicación y primeros indicios', n: 2, ops: [
        { id: 'p1', t: 'Acuerdos por escrito: 27 contra 4. Promesas cumplidas: 59 % contra 41 %, frente al grupo de comparación.', ok: true, por: 'Con comparación y en cuatro días.' },
        { id: 'p2', t: 'Colocación: −18 % contra −3 %. La mora aún no se puede evaluar.', ok: true, por: 'Lo decimos antes de que otro lo diga.' },
        { id: 'p3', t: 'El taller bajó la mora.', ok: false, por: 'En cuatro días no se puede afirmar eso.' },
      ] },
      { id: 'sigue', t: 'Qué sigue', n: 2, ops: [
        { id: 's1', t: 'Revisar los créditos rechazados y la mora de ambos grupos a 90 días, con Riesgos.', ok: true, por: 'La medición que falta.' },
        { id: 's2', t: 'Reforzar en campo a los seis que no aprobaron, y revisar la meta de los nuevos con Negocios.', ok: true, por: 'Lo que la capacitación puede hacer, y lo que no.' },
        { id: 's3', t: 'Replicar de inmediato en las 40 agencias.', ok: false, por: 'Es muy pronto: no sabes todavía qué está pasando.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'informe_flojo' : 'informe_solido'], cartera: { informe: q === 'riesgosa' ? 'Mezcla hechos y deseos' : 'Una hoja: 4 niveles y qué falta medir' },
        out: q === 'buena' ? 'Lorena imprime la hoja y le da una vuelta. «No promete nada que no podamos cumplir.» La guarda en el fólder de mañana.' : q === 'aceptable' ? 'Lorena la revisa: «Bien, pero hay una línea que nos puede costar. Quítala».' : 'Lorena la lee dos veces: «Esto vende. Yo necesito algo que explique».',
        pro: { ok: 'Separar los niveles evita decir que un taller «bajó la mora» o que «no sirvió» cuando todavía no se sabe.', risk: 'Una afirmación de más arruina todo lo que sí está probado.', info: 'Deja escrita la fecha en la que medirás de nuevo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que aguanta preguntas!' : '¿Eso ya lo sabemos, o lo queremos?'],
      };
    },
    rules: [[BP, 'En un informe de impacto, separa reacción, aprendizaje, aplicación y resultados, y di qué falta medir.']],
    mirada: {
      ve: '«¿Sirvió?» no tiene una sola respuesta. Sirvió para aprender, se aplicó a medias y todavía no se puede decir nada de la mora. Quien sabe sostener esa frase frente a un comité ya hace el trabajo de verdad.',
      visual: { tipo: 'flujo', titulo: 'Cuatro preguntas', pasos: ['¿Les gustó?', '¿Aprendieron?', '¿Lo aplican?', '¿Bajó la mora? En 90 días'] },
    },
  },
  {
    id: 'w6', t: '17:15', ch: 'presencial', who: null, titulo: 'Cinco minutos con Mario', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Oficina de Finanzas', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Mario guarda su calculadora en la funda: se va a recoger a su nieta. Te da cinco minutos de pie, con el maletín en la mano.${F.has('prueba_maquillada') ? ' «¿Por qué en un Excel el promedio es 8,4 y en otro 7,6?» Le dices que mañana estarán los dos, explicados.' : ''}${F.has('promesa_mora') ? ' Saca el papel que firmaste: «Dos puntos en tres meses. No lo olvidé».' : ''}</p><p>Quieres entrar al comité <mark class="clave">sabiendo qué va a decidir</mark>. Alcanzas a hacerle dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Mario.',
    opts: [
      { id: 'decide', label: '¿Qué va a decidir mañana el comité?', info: '«Dos cosas: si se libera algo de presupuesto y si esto sigue o se acaba. No esperes que decidan sobre la meta. Eso va por otra vía.»' },
      { id: 'tramo', label: '¿Qué necesitas ver para liberar fondos?', info: '«Qué se gastó, en qué, y qué cambió. Si me dices “no lo sé todavía”, me sirve, pero con fecha. Sin fecha, no libero nada.»' },
      { id: 'victor', label: '¿Víctor va a pelear por la colocación?', info: '«Va a pelear por todo. Es su trabajo. Pero cuando alguien le responde con datos, se calma. Le he visto hacerlo.»' },
      { id: 'sunafil', label: '¿Qué van a preguntar por SUNAFIL?', info: '«Si se va a sancionar y a quién. Y si la firma de Lorena está en algo que no debía estar. No me toca decirte más.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('tramo') ? 3 : 1, confianza: 2 }, flags: ['mario_preparado'],
      cartera: { informe: picks.includes('tramo') ? 'Con fechas para Finanzas' : 'Listo para el comité' },
      out: 'Mario se va por las escaleras. En la mesa queda el recibo de su taxi: lo guardarás mañana en su bandeja. Le mandas a Lorena lo que te dijo. «Duerme», te responde.',
      kusi: ['curioso', 'Ahora sabes qué se juega mañana.'],
    }),
    mirada: {
      ve: 'Antes de una reunión importante, conviene saber qué se decidirá, con qué criterio y quién trae qué preocupación. Eso no es política de pasillo: es preparar bien una presentación.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Mario', txt: 'Mañana se decide si se libera algo y si esto sigue. Qué se gastó, qué cambió y qué falta, con fecha. La meta va por otra vía.' },
    },
  },
];
