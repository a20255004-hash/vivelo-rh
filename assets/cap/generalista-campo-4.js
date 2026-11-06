// Generalista de RR.HH. en operación minera · Capítulo 4 · «La lista de la comunidad» · Semana 1, jueves.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas:
// - Ley 26772 (modificada por la Ley 27270): las ofertas de empleo no pueden contener requisitos que anulen o alteren
//   la igualdad de oportunidades o de trato. Reglamento: D.S. 002-98-TR.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
//   https://natlex.ilo.org/dyn/natlex2/r/natlex/fe/details?p3_isn=48674
// - El compromiso de 30 % de empleo local es un acuerdo de la empresa con la comunidad (ficticio), no una norma.

export const CAP = {
  n: 4, titulo: 'La lista de la comunidad', dia: 'Semana 1, jueves', foto: 'assets/3d/scenes/cooperativa.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '06:30', fin: '20:00', cierreHora: '19:45',
  apertura: 'Tu día 4 de 14. Graniza a las seis de la mañana y el techo del contenedor suena como un tambor. A las nueve sube Doña Juana, presidenta de la comunidad, con una lista de 30 nombres.', boton: 'Preparar la reunión',
  kusi: 'Hoy hablas con la comunidad. Escucha, cuenta bien y no prometas lo que no puedes cumplir.',
  lead: 'Limpiaste el perfil de puesto de requisitos discriminatorios, escuchaste a Doña Juana, propusiste contar el empleo local con reglas claras y armaste un plan de contratación local.',
  reflexion: '¿Qué significa «cumplir» un acuerdo con una comunidad?',
  siguiente: { n: 5, titulo: 'La evaluación local', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'comunidad', p: 'Empleo local con la comunidad', j: 'Doña Juana · Comunidad', d: 0, e: 'Lista de 30 comuneros' },
  { id: 'vacantes', p: '24 vacantes de Operaciones', j: 'Ing. Valdivia', d: 0, e: 'Perfil por revisar' },
  { id: 'contratistas', p: 'Control de Movitierra', j: 'Ing. Mario Salas', d: 1, e: 'Saldo el viernes' },
  { id: 'comedor', p: 'Acta del comedor', j: 'Gladys · Wilber', d: 1, e: 'Revisión mañana' },
];

export const FUTURO = {
  perfil_corregido: ['Quitaste del perfil «varón» y «máximo 35 años».', 'Dos mujeres de la comunidad podrán postular.'],
  conteo_transparente: ['Propusiste contar el empleo local con dos cifras y reglas claras.', 'Doña Juana aceptó revisar el conteo cada mes.'],
  lista_aceptada: ['Prometiste contratar a los 30 de la lista sin evaluación.', 'Mañana, cuando la mitad no pase el examen médico, la promesa se romperá.'],
  conteo_duro: ['Mantuviste que solo cuentan los trabajadores propios.', 'La comunidad lo llevará a su asamblea.'],
  plan_local: ['Armaste el plan de contratación local con evaluación y formación.', 'Se pondrá a prueba mañana en el tópico.'],
  juana_informada: ['Le escribiste a Doña Juana qué pasará mañana y cómo.', 'Llegará a la evaluación sabiendo qué esperar.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de Movitierra', who: 'contratista' },
  valdivia: { n: 'Ing. Rodrigo Valdivia', sub: 'Superintendente de Operaciones Mina', c: '#4A5A8A' },
};

export const WSP = [
  { chat: 'percy', t: '06:45', de: 'Percy', txt: 'Te mandé el reporte de empleo local. Ojo: 22 % si cuentas solo propios, 34 % si cuentas contratistas. Ahí está todo el pleito.' },
  { chat: 'contratista', t: '08:00', de: 'Ing. Salas', txt: 'Ingeniera, Lima ya liberó la valorización. Mañana pago el saldo a mi gente. Le mando constancias.', si: 'salas_aliado' },
  { chat: 'contratista', t: '08:00', de: 'Ing. Salas', txt: 'Ingeniera, mi gente ya está hablando de SUNAFIL. ¿Usted les dijo eso?', si: 'movitierra_sunafil' },
  { chat: 'valdivia', t: '08:20', de: 'Valdivia', txt: 'El perfil de las 24 vacantes es el de siempre. No me lo cambien, que funciona.' },
  { chat: 'yuri', t: '13:10', de: 'Yuri', txt: 'Doña Juana salió contenta, ingeniera. Dijo que usted «sí cuenta bien».', si: 'conteo_transparente' },
  { chat: 'presidenta', t: '18:40', de: 'Doña Juana', txt: 'Mañana a las 7 subimos los 30. Ya les dije que traigan su DNI y que desayunen.', si: 'juana_informada' },
];

export const CORREOS = [
  { t: '06:40', de: 'Percy Huillca', para: 'Generalista de RR.HH. · Campo', asunto: 'Reporte de empleo local · mes en curso', html: '<p>Adjunto el reporte. Propios: 400, de los cuales 88 son de la comunidad (22 %). Si sumas los 500 de contratistas, hay 306 locales entre 900 (34 %). El convenio dice «30 % de la fuerza laboral de la unidad», sin aclarar más.</p><p>Percy</p>' },
];

export const QUIZ = [
  { q: 'Un perfil de puesto pide «varón, máximo 35 años» para ayudante de mina. Según la Ley 26772…', ops: ['Está bien si es minería', 'Las ofertas de empleo no pueden tener requisitos que alteren la igualdad de oportunidades', 'Solo importa el sueldo', 'Es válido si lo pide Operaciones'], ok: 1, por: 'La Ley 26772 prohíbe requisitos que anulen o alteren la igualdad de oportunidades o de trato en las ofertas de empleo.' },
  { q: 'El convenio dice «30 % de la fuerza laboral». La minera cuenta 22 %, la comunidad 34 %. ¿Qué haces?', ops: ['Usas la cifra que te conviene', 'Muestras las dos cifras y propones reglas claras para contar, juntos', 'Le das la razón a la comunidad para evitar problemas', 'Dejas de reportar'], ok: 1, por: 'Un acuerdo ambiguo se cuida con transparencia y reglas acordadas, no con la cifra que conviene.' },
  { q: 'Prometer contratar a todos los de una lista, sin evaluación…', ops: ['Calma el conflicto para siempre', 'Crea una promesa que se puede romper cuando alguien no pase un requisito de seguridad', 'Es lo que piden las normas', 'No tiene riesgos'], ok: 1, por: 'Los requisitos de seguridad, como la aptitud médica para altura, no se negocian.' },
  { q: 'Un buen plan de contratación local incluye…', ops: ['Solo la lista de nombres', 'Perfiles sin discriminación, evaluación con contexto, formación para quienes no califican aún y conteo transparente', 'Contratar a los familiares de la directiva', 'Solo puestos de limpieza'], ok: 1, por: 'El plan busca que el empleo local sea real y sostenible, no solo una cifra.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:00', ch: 'documento', who: null, titulo: 'El perfil «de siempre»', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Contenedor de RR.HH.', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Operaciones necesita 24 personas: 18 ayudantes de mina y 6 operadores de equipo liviano. Doña Juana espera que salgan de su lista.</p><p>Antes de la reunión, abres el perfil que mandó Valdivia. Es «el de siempre». <mark class="clave">Lo revisas línea por línea</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir en el perfil o hay que corregir.',
    doc: { t: 'Perfil de puesto · Ayudante de mina', sub: 'Operaciones Mina · 18 vacantes' },
    lines: [
      { id: 'sexo', t: 'Sexo: varón.', bad: LEY, why: 'Un requisito de sexo que no se justifica en el puesto altera la igualdad de oportunidades (Ley 26772).' },
      { id: 'edad', t: 'Edad: de 18 a 35 años.', bad: LEY, why: 'El tope de edad sin justificación objetiva también es un requisito discriminatorio (Ley 26772).' },
      { id: 'apto', t: 'Aptitud médica para trabajo en altura, según evaluación ocupacional.' },
      { id: 'sec', t: 'Secundaria completa indispensable, sin excepciones.', bad: BP, why: 'Para un ayudante, quizá baste leer y escribir con soltura. Exigir secundaria completa deja fuera a muchos comuneros mayores sin relación clara con el puesto.' },
      { id: 'induccion', t: 'Inducción de seguridad obligatoria antes de empezar.' },
      { id: 'foto', t: 'Adjuntar foto de cuerpo entero.', bad: BP, why: 'La foto de cuerpo entero no aporta nada al puesto y abre la puerta a decisiones por apariencia.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: !missLey ? 'buena' : hitsLey ? 'aceptable' : 'riesgosa',
      flags: missLey ? [] : ['perfil_corregido'],
      out: missLey ? 'El perfil sale como llegó. En la lista de Doña Juana hay dos mujeres que no podrán postular.' : `Corriges ${hitsLey + (hitsBp || 0)} puntos y se lo mandas a Valdivia con una línea: «Lo ajusté para que no tengamos observaciones». Él responde con un «ok» seco.`,
      cartera: { vacantes: missLey ? 'Perfil sin cambios' : 'Perfil corregido' },
      pro: { ok: 'Un perfil limpio protege a la empresa y abre la puerta a más personas de la comunidad.', risk: '«Siempre fue así» no es una justificación ante la autoridad.', info: 'Pregunta a Operaciones qué exige de verdad el puesto: eso sí va en el perfil.' },
      kusi: missLey ? ['preocupado', 'Ese perfil deja fuera a medio pueblo.'] : ['celebra', '¡Perfil sin trampas!'],
    }),
    rules: [[LEY, 'Las ofertas de empleo no pueden tener requisitos que anulen o alteren la igualdad de oportunidades o de trato (Ley 26772, modificada por la Ley 27270).']],
    mirada: {
      ve: 'Un perfil «de siempre» suele cargar prejuicios que nadie revisa. En una mina, donde el empleo local es un compromiso con la comunidad, cada requisito sin razón real deja fuera a alguien que podría hacer el trabajo.',
      visual: { tipo: 'cambio', titulo: 'Del perfil de siempre al perfil justo', pares: [['Varón', 'Sin requisito de sexo'], ['18 a 35 años', 'Mayor de edad y apto para altura'], ['Foto de cuerpo entero', 'Sin foto']] },
      normas: [{ ley: 'Ley 26772 (modificada por la Ley 27270)', dice: 'La oferta de empleo no puede contener requisitos que constituyan discriminación, anulación o alteración de la igualdad de oportunidades o de trato.', practica: 'Cada requisito del perfil debe tener una razón ligada al puesto.' }],
    },
  },
  {
    id: 'e2', t: '09:10', ch: 'presencial', who: 'presidenta', titulo: 'Doña Juana sube', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de reuniones del campamento', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Doña Juana llega con su lliclla roja, su sombrero y dos dirigentes. Pone la lista sobre la mesa como quien pone una prueba. ${F.has('yuri_cambio') ? 'Antes de sentarse, te mira: «Yuri me contó lo de su turno. Eso estuvo bien».' : F.has('yuri_no') ? 'Antes de sentarse, dice: «Yuri no pudo votar en la asamblea. Eso también lo vamos a hablar».' : ''}</p><p>«Señorita, <mark class="clave">el convenio dice 30 % y ustedes no cumplen</mark>. Aquí están treinta de mis comuneros. ¿Qué me va a decir?»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Doña Juana.',
    opts: [
      { id: 'como', label: '«¿Cómo cuenta la comunidad el 30 %?»', info: '«Todo el que trabaja en la unidad. Si es de contratista igual trabaja aquí, igual come aquí. Ustedes cuentan solo a sus planillas para que salga menos.»' },
      { id: 'lista', label: '«¿Cómo eligieron a los 30 de la lista?»', info: '«En asamblea. Hay jóvenes que se fueron a Lima y volvieron sin trabajo, dos madres solas y algunos mayores. Que no digan que son los familiares de la directiva.»' },
      { id: 'jovenes', label: '«¿Qué es lo que más le preocupa?»', info: '«Que los jóvenes se vayan. Si no hay trabajo aquí, se van y no vuelven. La comunidad se queda con los viejos y la mina.»' },
      { id: 'garantia', label: '«¿Me garantiza que todos cumplen los requisitos?»', info: 'Doña Juana frunce el ceño. «¿Y ustedes me garantizan que cumplen el convenio?» Los dirigentes se miran entre ellos.' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('garantia') ? -3 : 3, personas: picks.includes('jovenes') ? 3 : 1 }, rel: { presidenta: picks.includes('garantia') ? -1 : 1 },
      out: picks.includes('garantia') ? 'La reunión arranca a la defensiva. Doña Juana cruza los brazos y espera.' : 'Doña Juana se acomoda en la silla. Habla un rato en quechua con los dirigentes y luego te dice: «A ver, señorita. ¿Cómo lo arreglamos?».',
      kusi: picks.includes('garantia') ? ['preocupado', 'Exigir antes de escuchar enfría todo.'] : ['curioso', 'Ahora sabes cómo cuenta ella.'],
    }),
    rules: [[BP, 'Antes de defender tu cifra, entiende cómo cuenta la otra parte.']],
    mirada: {
      ve: 'Para Doña Juana, la lista no es un trámite: es el futuro de los jóvenes de su comunidad. Y para ella, quien trabaja en la unidad es de la unidad, tenga el casco de la minera o de una contratista.',
      visual: { tipo: 'balanza', a: { t: 'Cómo cuenta la minera', items: ['Solo propios', '88 de 400', '22 %'] }, b: { t: 'Cómo cuenta la comunidad', items: ['Propios y contratistas', '306 de 900', '34 %'] } },
    },
  },
  {
    id: 'e3', t: '10:20', ch: 'presencial', who: 'presidenta', titulo: '¿22 % o 34 %?', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala de reuniones del campamento', show: ['confianza', 'etica', 'cumplimiento'],
    body: () => `<p>Percy entra y se sienta a tu lado sin decir nada: quiere ver cómo lo manejas. El reporte está sobre la mesa con las dos cifras.</p><p>Doña Juana golpea la lista con el dedo. «<mark class="clave">Contratan a los treinta y quedamos en paz</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrar las dos cifras, proponer acordar por escrito cómo se cuenta, y ofrecer que los 30 entren a la evaluación de mañana para las 24 vacantes, con formación para quienes no califiquen todavía.',
        res: { q: 'buena', fx: { confianza: 5, etica: 3, cumplimiento: 3 }, rel: { presidenta: 1, percy: 1 }, flags: ['conteo_transparente'], cartera: { comunidad: 'Conteo con dos cifras · evaluación mañana' },
          out: 'Doña Juana mira las cifras un largo rato. «Al menos no me esconde los números.» Acepta, con una condición: que un dirigente esté presente mañana en la evaluación.',
          pro: { ok: 'Transparencia, un camino concreto y nada que no puedas cumplir.', risk: 'No todos los 30 entrarán, y eso habrá que explicarlo mañana.', info: 'Lo que el convenio no aclara, acláralo por escrito con la comunidad.' },
          kusi: ['celebra', 'Números claros, camino claro.'] } },
      { id: 'b', label: 'Aceptar: los 30 entran. Ya verás cómo se acomodan en las 24 vacantes y en las contratistas.',
        res: { q: 'riesgosa', fx: { confianza: 3, cumplimiento: -5, etica: -2 }, rel: { presidenta: 1, percy: -1 }, flags: ['lista_aceptada'], cartera: { comunidad: '30 prometidos sin evaluación' },
          out: 'Doña Juana sonríe por primera vez. Percy no. Afuera te dice: «Prometiste algo que no depende de ti. ¿Y si mañana no pasan el examen de altura?».',
          pro: { ok: 'Calmas la reunión.', risk: 'Una promesa así se rompe con el primer requisito de seguridad, y esa ruptura cuesta el doble.' },
          kusi: ['preocupado', '¿Y el examen de altura?'] } },
      { id: 'c', label: 'Sostener que el convenio se refiere a la planilla de la minera: los contratistas no cuentan. Ofrecer evaluar a la lista para las vacantes que haya.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -4 }, rel: { presidenta: -1 }, flags: ['conteo_duro'], cartera: { comunidad: 'Diferencia de conteo sin resolver' },
          out: 'Doña Juana se levanta. «Eso lo va a escuchar la asamblea.» Deja la lista sobre la mesa, igual. Mañana subirán los 30.',
          pro: { ok: 'Defiendes una lectura posible del convenio.', risk: 'Si el texto es ambiguo, imponer tu lectura se vive como una trampa.' },
          kusi: ['pensando', 'Tienes una lectura… ella tiene otra.'] } },
    ],
    rules: [[POL, 'El convenio de Minera Puquio compromete «30 % de la fuerza laboral de la unidad» con la comunidad.'], [BP, 'Nunca prometas contratar sin evaluación: los requisitos de seguridad no se negocian.']],
    mirada: {
      ve: 'El convenio es ambiguo y ninguna de las dos cifras es mentira. Lo que rompe la confianza no es el número, sino usarlo como arma. Proponer reglas claras para contar convierte la pelea por la cifra en un trabajo conjunto.',
      visual: { tipo: 'rango', titulo: 'El 30 % según quién cuente', min: 0, max: 50, banda: [30, 50], marcas: [['Solo propios', 22], ['Propios y contratistas', 34], ['Compromiso', 30]] },
    },
  },
  {
    id: 'e4', t: '13:30', ch: 'documento', who: null, titulo: 'El plan de contratación local', banner: 'assets/esc/escritorio.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>Almuerzas una sopa de quinua frente a la laptop. Percy te pide que el acuerdo de hoy quede en un documento.</p><p>Tercer entregable: <mark class="clave">el plan de contratación local</mark>. Elige las tres medidas que no pueden faltar.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres medidas del plan.', boton: 'Guardar el plan', resumen: 'Tu plan incluye',
    cols: ['Medida', 'Para qué sirve'],
    rows: [
      { id: 'reglas', cells: ['Acta con la comunidad sobre cómo se cuenta el empleo local', 'Que nadie discuta la cifra cada mes'] },
      { id: 'eval', cells: ['Evaluación con dirigente observador y resultados explicados a cada persona', 'Que el proceso sea visible y justo'] },
      { id: 'formacion', cells: ['Ruta de formación para quienes no califican todavía', 'Que «no» signifique «todavía no»'] },
      { id: 'cuota', cells: ['Reservar puestos de limpieza para la comunidad', 'Sube la cifra rápido'] },
      { id: 'directiva', cells: ['Que la directiva elija a quién se contrata', 'Doña Juana lo pediría'] },
      { id: 'contratistas', cells: ['Pedir a las contratistas su propio reporte de empleo local', 'Sumar lo que no se ve'] },
    ],
    score: { reglas: 3, eval: 3, formacion: 3, contratistas: 2, cuota: -1, directiva: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: picks.includes('formacion') ? 3 : 0, etica: picks.includes('directiva') ? -3 : 1 },
        flags: q === 'riesgosa' ? [] : ['plan_local'], cartera: { comunidad: q === 'riesgosa' ? 'Plan local débil' : 'Plan de contratación local listo' },
        out: q === 'buena' ? 'Percy lee el plan y subraya la ruta de formación. «Eso es lo que Doña Juana necesita oír cuando alguien no pase.»' : picks.includes('directiva') ? 'Percy tacha una línea: «Si la directiva elige, mañana nos acusan de favorecer a sus familiares».' : 'Tienes un plan, pero le falta algo para cuando alguien no califique.',
        pro: { ok: 'El empleo local sostenible combina reglas claras, evaluación justa y formación.', risk: 'Subir la cifra con puestos de limpieza o delegar la selección en la directiva resuelve hoy y complica mañana.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«No» puede ser «todavía no». ¡Qué divino!' : 'Piensa en quien no pase mañana.'],
      };
    },
    rules: [[BP, 'Un plan de empleo local incluye qué pasa con quienes no califican todavía.']],
    mirada: {
      ve: 'El empleo local no es una cifra para el reporte: es el puente entre la mina y la comunidad. Un plan que solo cuenta nombres se rompe con el primer «no». Uno que forma a quienes aún no califican construye confianza para años.',
      visual: { tipo: 'flujo', titulo: 'Plan de contratación local', pasos: ['Reglas para contar', 'Perfil sin discriminación', 'Evaluación con observador', 'Formación para «todavía no»', 'Reporte mensual'] },
    },
  },
  {
    id: 'e5', t: '16:00', ch: 'llamada', who: null, titulo: 'Valdivia y el perfil', banner: 'assets/foto/llamada.webp', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Llama Valdivia. ${F.has('perfil_corregido') ? '«Vi que me cambiaste el perfil. ¿Ahora voy a tener mujeres de ayudantes de mina? ¿Y si no aguantan?»' : '«Me dijo Percy que la comunidad sube mañana con 30. Yo necesito gente que rinda, no favores.»'}</p><p>Quiere una respuesta antes de que mañana empiece la evaluación. <mark class="clave">Lo que digas hoy, lo repetirá en el comedor</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle que el filtro será el mismo para todos: aptitud médica para altura, prueba práctica y la inducción. Quien la pase, rinde. Invitarlo a que un supervisor suyo esté en la prueba práctica.',
        res: { q: 'buena', fx: { confianza: 3, cumplimiento: 2 },
          out: 'Valdivia se queda callado. «Mando a Quispe, mi supervisor más exigente.» Para él, eso es casi un sí.',
          pro: { ok: 'Le das un criterio objetivo y lo haces parte del proceso.', info: 'Cuando el jefe teme que bajes la vara, invítalo a sostenerla contigo.' },
          kusi: ['animo', 'Misma vara para todos.'] } },
      { id: 'b', label: 'Decirle que es un compromiso con la comunidad y que no hay discusión.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -2 },
          out: 'Valdivia cuelga con un «ya». Esa noche, en el comedor, dice que RR.HH. «le mete gente a dedo».',
          pro: { ok: 'Defiendes el compromiso.', risk: 'Sin un criterio objetivo, el jefe lo vive como imposición y lo cuenta así.' },
          kusi: ['pensando', 'Razón sin explicación no convence.'] } },
    ],
    rules: [[BP, 'Un mismo filtro objetivo para todos protege a la comunidad y al negocio.']],
    mirada: { ve: 'Valdivia teme perder rendimiento, no que entren mujeres o comuneros. Un criterio igual para todos, que él pueda ver, desarma el prejuicio mejor que cualquier discurso.' },
  },
  {
    id: 'e6', t: '17:40', ch: 'whatsapp', who: 'presidenta', titulo: 'Lo que pasará mañana', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Contenedor de RR.HH.', show: ['confianza', 'personas'],
    body: () => `<p>Doña Juana ya bajó a la comunidad. Mañana suben los 30 a las 7 de la mañana, en el bus de la minera.</p><p>Le escribes para que <mark class="clave">nadie llegue a ciegas</mark>.</p>`,
    type: 'compose', enviaA: 'presidenta', para: 'Para: Doña Juana Huamán · Presidenta comunal', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Cómo será el día', ops: [
        { id: 'q1', t: 'Doña Juana, mañana cada persona tendrá su evaluación médica para altura y una prueba práctica, con un dirigente presente.', ok: true, por: 'Le explicas el proceso.' },
        { id: 'q2', t: 'Doña Juana, mañana se firma todo.', ok: false, por: 'No es verdad: mañana se evalúa.' },
      ] },
      { id: 'traer', t: 'Qué traer', ops: [
        { id: 't1', t: 'Que traigan su DNI, que desayunen y que duerman bien hoy. Si alguien toma alguna medicina, que lo diga al médico.', ok: true, por: 'Consejos prácticos que ayudan en el examen.' },
        { id: 't2', t: 'Que traigan sus papeles.', ok: null, por: 'Muy vago: ¿cuáles?' },
      ] },
      { id: 'no', t: 'Si alguien no pasa', ops: [
        { id: 'n1', t: 'Quien no pase todavía tendrá una ruta de formación y una nueva fecha. Yo le explicaré a cada uno su resultado.', ok: true, por: 'Preparas el «todavía no».' },
        { id: 'n2', t: 'Seguro que todos pasan, no se preocupe.', ok: false, por: 'No puedes prometerlo.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.no === 'n2', buenas = ['q1', 't1', 'n1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1 }, rel: { presidenta: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['juana_informada'] : [],
        out: q === 'buena' ? 'Doña Juana responde con un audio largo. Entiendes la mitad: lo demás es quechua y risas. Al final dice: «Ya, señorita. Mañana».' : mal ? 'Doña Juana responde: «Gracias, señorita. Mañana firmamos». Te quedas mirando la pantalla.' : 'Doña Juana responde: «¿Qué papeles?».',
        pro: { ok: 'Anticipar el proceso y el posible «no» evita sorpresas que se vuelven conflicto.', risk: 'Prometer que todos pasan es preparar una decepción colectiva.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Nadie llegará a ciegas!' : 'Cuidado con lo que prometes.'],
      };
    },
    rules: [[BP, 'Anticipa siempre qué pasará con quienes no califiquen.']],
    mirada: {
      ve: 'Treinta personas suben mañana con la esperanza de un trabajo. Lo que les digas hoy definirá cómo reciben un «todavía no». Explicar el proceso antes es una forma de respeto.',
      visual: { tipo: 'mensaje', titulo: 'Proceso, preparación y «todavía no»', txt: 'Mañana cada persona tendrá su evaluación médica para altura y una prueba práctica, con un dirigente presente. Quien no pase todavía tendrá una ruta de formación y una nueva fecha.' },
    },
  },
  {
    id: 'e7', t: '19:15', ch: 'presencial', who: 'percy', titulo: 'Granizo y mate', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del campamento', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Vuelve a granizar. Percy calienta las manos en su taza. ${F.has('lista_aceptada') ? '«Mañana va a ser un día difícil. Prometiste treinta.»' : '«Hoy lo hiciste bien con Doña Juana. Ella prueba a todos los nuevos.»'}</p><p>«Una cosa: el tópico dice que con la altura, <mark class="clave">muchos de los mayores no pasan el examen</mark>. ¿Qué vas a hacer con eso?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle al médico ocupacional que mañana explique a cada persona su resultado en privado, y preparar qué puestos o qué formación existen para quien no pase.',
        res: { q: 'buena', fx: { calidad: 3, personas: 3 }, rel: { percy: 1 },
          out: 'Percy asiente. «El doctor Ayala es bueno con la gente. Háblale temprano.» Te vas a dormir con la lista de los 30 en la mesa de noche.',
          pro: { ok: 'Preparas el «no» con cuidado y con alternativas.', info: 'Los resultados médicos son información sensible: se explican a la persona, no en público.' },
          kusi: ['animo', 'Mañana es un día de cuidar.'] } },
      { id: 'b', label: 'Ver mañana cómo sale: no sirve preocuparse antes de tiempo.',
        res: { q: 'aceptable', fx: { tiempo: 1 },
          out: 'Percy toma su mate en silencio. Mañana improvisarás frente a treinta personas.',
          pro: { ok: 'Descansas.', risk: 'Un «no» mal dado frente a la comunidad se recuerda por años.' },
          kusi: ['pensando', 'Hay cosas que conviene preparar.'] } },
    ],
    mirada: { ve: 'La altura no perdona: el examen médico protege la vida de quien sube. Pero un resultado médico es también una noticia personal. Preparar cómo se comunica es tan importante como el examen mismo.' },
  },
];
