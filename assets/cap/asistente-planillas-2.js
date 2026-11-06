// Asistente de Planillas · Capítulo 2 · «Las horas extra» · Semana 1, martes.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - D.S. 007-2002-TR (TUO de la Ley de Jornada de Trabajo), art. 10: el sobretiempo se paga con un recargo no menor
//   al 25 % por hora en las dos primeras horas y al 35 % a partir de la tercera; puede compensarse con descanso por acuerdo.
//   art. 9: el trabajo en sobretiempo es voluntario.
//   https://lpderecho.pe/horas-extras-derecho-laboral
//   https://lpderecho.pe/tuo-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-007-2002-tr
// - D.S. 008-2002-TR (reglamento), art. 26: la compensación con descanso requiere acuerdo escrito y se otorga dentro del
//   mes calendario siguiente, salvo pacto distinto.
//   https://modelo.pe/convenio-de-compensacion-de-horas-extras-por-descanso/
// Empresas, personas y montos son ficticios. El valor hora se calcula como ejemplo: remuneración mensual / 30 / 8.

export const CAP = {
  n: 2, titulo: 'Las horas extra', dia: 'Semana 1, martes', foto: 'assets/esc/planilla.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Llegas en el Metropolitano, apretada entre mochilas y un señor que vende chifles. Hoy vence a las 12 el plazo que les diste a los locales para mandar sus horas extra.', boton: 'Abrir el correo',
  kusi: 'Cada hora extra es una noche que alguien no llegó temprano a su casa. ¡Que ninguna se pierda!',
  lead: 'Aprendiste a calcular una hora extra, persiguiste a los locales que no mandaron nada, cruzaste el reporte de Barranco con el reloj y le contaste a Wilder lo que encontraste.',
  reflexion: 'Si un administrador «compensa» horas extra sin acuerdo escrito, ¿quién pierde y quién se entera?',
  siguiente: { n: 3, titulo: 'La gratificación', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'horas', p: 'Horas extra de fin de noviembre', j: 'Administradores', d: 0, e: 'Vence hoy, 12:00' },
  { id: 'barranco', p: 'Reporte de Barranco', j: 'Lucho Carrasco · Barranco', d: 0, e: 'Sin revisar' },
  { id: 'grati', p: 'Gratificación de diciembre', j: 'Hugo · Planillas', d: 0, e: 'Cálculo empieza mañana' },
  { id: 'consultas', p: 'Consulta de Wilder', j: 'Tú', d: 0, e: 'Llamada a las 3' },
];

export const FUTURO = {
  valor_hora_ok: ['Sabes calcular el valor de una hora extra con su recargo.', 'Te servirá para la base de la gratificación.'],
  he_marcaciones: ['Cruzaste el reporte de Barranco con el reloj y encontraste 14 horas de Wilder sin pagar.', 'Wilder lo sabrá. Capítulo 7.'],
  he_reportado: ['Pagaste solo lo que Barranco reportó.', 'Las horas de Wilder siguen sin pagar. Capítulo 7.'],
  he_pagadas: ['Las horas extra de Barranco se pagarán como reintegro, con recargo.', 'Entran en el cálculo de mañana.'],
  he_papel_atrasado: ['Aceptaste un acuerdo de compensación firmado «con fecha de antes».', 'Ese papel puede aparecer en una inspección.'],
  he_descanso_pactado: ['Barranco firmará acuerdos de compensación desde ahora; lo pasado se paga.', 'Lucho deberá cumplir los descansos en enero.'],
  wilder_verdad: ['Le contaste a Wilder lo que encontraste, sin prometer montos.', 'Wilder empieza a confiar en ti.'],
  wilder_evasivo: ['A Wilder le dijiste que «todo estaba en orden».', 'Él sabe que no. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
  lucho: { n: 'Lucho Carrasco', sub: 'Administrador · local Barranco', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'admins', t: '08:40', de: 'Gaby (San Miguel)', txt: 'Listo, plantilla subida con marcaciones 💪 Y Kevin manda a decir gracias, su mamá ya está mejor.', si: 'adelanto_formal' },
  { chat: 'admins', t: '08:40', de: 'Gaby (San Miguel)', txt: 'Listo, plantilla subida 💪 Oigan, ¿quién me ayuda a cuadrar la caja? Me faltan 400 😅', si: 'adelanto_informal' },
  { chat: 'admins', t: '09:15', de: 'Ítalo (Surco)', txt: '📷 Foto · 📷 Foto · 📷 Foto', si: 'formato_libre' },
  { chat: 'admins', t: '11:58', de: 'Lucho (Barranco)', txt: 'Ahí está lo de Barranco. Poquitas horas este mes, la gente se porta 👌' },
  { chat: 'wilder', t: '13:10', de: 'Wilder', txt: 'Señorita, ¿sigue en pie lo de las 3? Salgo a fumar un ratito para hablar tranquilo.', si: 'wilder_cita' },
  { chat: 'wilder', t: '13:10', de: 'Wilder', txt: 'Señorita, ¿y? Ya pasó un día. Voy a llamarla a las 3, contésteme por favor.', si: 'wilder_esperando' },
  { chat: 'grupo', t: '18:20', de: 'Hugo', txt: 'Buen día hoy. Mañana arrancamos con la gratificación: trae tu calculadora y paciencia 😄' },
];

export const CORREOS = [
  { t: '08:10', de: 'Hugo Salazar', para: 'Asistente de Planillas', asunto: 'Valor hora', html: '<p>Antes de que lleguen las horas extra, repasemos el cálculo. En la empresa usamos: remuneración mensual entre 30, entre 8. Y luego el recargo de ley.</p><p>Te espero a las 8:20 con la pizarra.</p><p>Hugo</p>' },
  { t: '17:50', de: 'Lucho Carrasco', para: 'Planillas', asunto: 'RE: Horas extra Barranco', html: '<p>Estimados: aclaro que en Barranco las horas extra se compensan con días libres. Siempre ha sido así y la gente está de acuerdo. No veo por qué pagar dos veces.</p><p>Lucho Carrasco · Administrador</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador hace 4 horas extra en un día. ¿Cómo se pagan?', ops: ['Las 4 con 25 %', 'Las 2 primeras con al menos 25 % y las otras 2 con al menos 35 %', 'Las 4 con 35 %', 'Solo se pagan 2'], ok: 1, por: 'El TUO de la Ley de Jornada (art. 10) fija un recargo no menor al 25 % en las dos primeras horas y al 35 % desde la tercera.' },
  { q: 'Las horas extra se pueden compensar con descanso…', ops: ['Si lo decide el administrador', 'Si hay acuerdo escrito entre empleador y trabajador', 'Nunca', 'Solo en diciembre'], ok: 1, por: 'El reglamento (D.S. 008-2002-TR, art. 26) exige acuerdo escrito, y el descanso se da dentro del mes calendario siguiente salvo otro pacto.' },
  { q: '¿El sobretiempo es obligatorio para el trabajador?', ops: ['Sí, si lo pide el jefe', 'No, es voluntario', 'Solo en restaurantes', 'Solo en campaña de Navidad'], ok: 1, por: 'El art. 9 del TUO dice que el trabajo en sobretiempo es voluntario, tanto para otorgarlo como para prestarlo.' },
  { q: 'El reporte de un local dice 0 horas extra y el reloj marca 14. ¿Qué vale más para revisar?', ops: ['El reporte del administrador', 'El registro de asistencia', 'Lo que diga el trabajador', 'Ninguno'], ok: 1, por: 'El registro de asistencia es el sustento de las horas trabajadas; el reporte debe cuadrar con él.' },
  { q: 'Un sueldo de S/ 1,800 da un valor hora de S/ 7.50 (1,800 / 30 / 8). Una hora extra con 25 % vale…', ops: ['S/ 7.50', 'S/ 9.38', 'S/ 10.13', 'S/ 1.88'], ok: 1, por: '7.50 × 1.25 = 9.375, es decir, unos S/ 9.38.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '08:20', ch: 'presencial', who: 'hugo', titulo: 'La pizarra de Hugo', banner: 'assets/foto/capacitacion.webp', lugar: 'Sala de reuniones', show: ['calidad', 'confianza'],
    body: () => `<p>Hugo dibuja en la pizarra con un plumón que casi no pinta. «Si entiendes esto, entiendes la mitad de los reclamos de diciembre.»</p><p>Te pide armar, con él, <mark class="clave">la ficha de cálculo de una hora extra</mark> para un cocinero que gana S/ 1,800.</p>`,
    type: 'builder', prompt: 'Elige las piezas correctas de cada bloque.', boton: 'Guardar la ficha',
    bloques: [
      { id: 'valor', t: 'Valor hora', n: 1, ops: [
        { id: 'v1', t: 'S/ 1,800 / 30 / 8 = S/ 7.50 por hora', ok: true, por: 'Es el método que usa la empresa para jornadas de 8 horas.' },
        { id: 'v2', t: 'S/ 1,800 / 4 semanas / 48 horas = S/ 9.38 por hora', ok: false, por: 'Mezcla semanas y meses: no es el criterio de la empresa y da otra cifra.' },
      ] },
      { id: 'recargo', t: 'Recargo', n: 2, ops: [
        { id: 'r1', t: 'Primeras dos horas del día: recargo no menor al 25 %.', ok: true },
        { id: 'r2', t: 'Desde la tercera hora del día: recargo no menor al 35 %.', ok: true },
        { id: 'r3', t: 'Todas las horas del mes con el mismo 25 %.', ok: false, por: 'El recargo se cuenta por día: la tercera hora de un día ya va con 35 %.' },
      ] },
      { id: 'sustento', t: 'Sustento', n: 2, ops: [
        { id: 's1', t: 'Marcaciones del reloj del local.', ok: true, por: 'Es el registro de las horas trabajadas.' },
        { id: 's2', t: 'Si se compensa con descanso: acuerdo escrito y descanso dentro del mes siguiente.', ok: true },
        { id: 's3', t: 'El visto bueno verbal del administrador.', ok: false, por: 'Lo verbal no se puede revisar ni defender.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 2 : 0 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['valor_hora_ok'], cartera: { horas: 'Ficha de cálculo lista' },
        out: q === 'buena' ? 'Hugo borra la pizarra con la mano: «Siete cincuenta la hora; con 25 %, nueve con treinta y ocho; con 35 %, diez con trece. Eso es lo que reclamará el que no lo recibe».' : 'Hugo corrige el recargo: «Ojo, se cuenta por día, no por mes».',
        pro: { ok: 'Conocer el cálculo te permite revisar al sistema, no solo usarlo.', risk: 'Un recargo mal aplicado se repite en cientos de boletas.', info: 'Haz una tabla de valor hora para los sueldos más comunes de la empresa.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Calculadora humana activada!' : 'El 35 % se te escapó.'],
      };
    },
    rules: [[LEY, 'Recargo no menor al 25 % las dos primeras horas y al 35 % desde la tercera (D.S. 007-2002-TR, art. 10).'], [LEY, 'Compensar con descanso exige acuerdo escrito (D.S. 008-2002-TR, art. 26).']],
    mirada: {
      ve: 'El sistema calcula, pero alguien tiene que saber si calcula bien. Una asistente de planillas que hace el cálculo a mano una vez puede detectar el error que el sistema repite en cien boletas.',
      visual: { tipo: 'flujo', titulo: 'Una hora extra, paso a paso', pasos: ['Sueldo mensual', '÷ 30 ÷ 8', 'Valor hora', '+ 25 % o 35 %', 'Monto a pagar'] },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 10', dice: 'El sobretiempo se paga con un recargo no menor al 25 % por hora en las dos primeras horas y al 35 % desde la tercera.', practica: 'Se cuenta por día trabajado: quien se queda cuatro horas un viernes tiene dos horas a 25 % y dos a 35 %.' }],
    },
  },
  {
    id: 'b2', t: '12:10', ch: 'llamada', who: null, titulo: 'Los que no mandaron', banner: 'assets/foto2/callcenter.webp', lugar: 'Tu escritorio', show: ['tiempo', 'calidad', 'personas'],
    body: (n, F) => `<p>Son las 12:10. ${F.has('formato_unico') ? 'Once locales mandaron la plantilla; dos la llenaron a medias.' : 'Te llegaron fotos de cuaderno, un audio y tres Excel con columnas distintas.'} Tres locales no mandaron nada. Agarras el fijo y marcas.</p>`,
    type: 'calls',
    calls: [['Fiorella (Miraflores)', 'Contesta, muy nerviosa', 'Ay, perdón, con lo del cierre se me pasó. Mi gente solo pregunta si les van a pagar el viernes.'], ['Local Callao', 'No contesta: suena y suena'], ['Local Los Olivos', 'Contesta el cajero', 'La administradora está de descanso médico. Yo tengo el reporte del reloj, pero no sé si lo puedo mandar.']],
    prompt: 'Miraflores está desbordada, Callao no contesta y en Los Olivos no está la administradora. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Pedirle a Fiorella el reporte del reloj hoy a las 5; escribir a Callao por el grupo con copia a su supervisor; y que el cajero de Los Olivos mande el reporte con el visto bueno del supervisor de zona.',
        res: { q: 'buena', fx: { tiempo: -1, calidad: 4, personas: 2 }, cartera: { horas: '13 de 14 locales con reporte' },
          out: 'A las 5 tienes Miraflores y Los Olivos. Callao responde a las 6: «Disculpe, estábamos sin internet». Solo falta un dato de Callao.',
          pro: { ok: 'Buscas otro camino sin saltarte el control: el reporte llega con un responsable.', info: 'Anota en el calendario quién reemplaza a cada administrador cuando falta.' },
          kusi: ['feliz', 'Tres teléfonos, tres soluciones distintas.'] } },
      { id: 'b', label: 'Darles hasta mañana a todos: no puedes obligar a nadie.',
        res: { q: 'aceptable', fx: { tiempo: -3, calidad: 0 },
          out: 'Mañana empieza el cálculo de la gratificación y todavía faltarán tres locales. Hugo levanta una ceja.',
          pro: { ok: 'Eres amable.', risk: 'El plazo de un local se come el plazo de todos.' },
          kusi: ['pensando', 'Mañana ya no hay mañana…'] } },
      { id: 'c', label: 'Poner cero horas extra a los tres locales: si no mandaron, no hay qué pagar.',
        res: { q: 'riesgosa', fx: { calidad: -4, personas: -4, cumplimiento: -3 },
          out: 'Hugo lo ve en el consolidado: «¿Cero en Miraflores? Ahí se quedaban hasta la una armando cajas».',
          pro: { ok: 'Cierras rápido.', risk: 'Las horas trabajadas se pagan aunque el reporte llegue tarde: la demora de un administrador no la paga el trabajador.' },
          kusi: ['indignado', '¡Las horas existieron aunque nadie las mande!'] } },
    ],
    rules: [[BP, 'Si falta el responsable, busca a su reemplazo; no inventes ceros.']],
    mirada: {
      ve: 'Perseguir datos es la parte menos vistosa del puesto y la que más pesa. Una hora extra que se pierde por un reporte que no llegó es, para el trabajador, plata que la empresa se quedó.',
      visual: { tipo: 'embudo', titulo: 'El reporte de horas extra', niveles: [['Locales', 14], ['Mandaron a tiempo', 11], ['Con marcaciones', 9]] },
    },
  },
  {
    id: 'b3', t: '13:30', ch: 'documento', who: null, titulo: 'El reporte de Barranco', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio, con el almuerzo a medias', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Lucho, de Barranco, mandó «poquitas horas». Te comes la papa a la huancaína mientras abres al lado el reporte del reloj del local. <mark class="clave">Algo no cuadra</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal en el reporte de Barranco, comparándolo con el reloj.',
    doc: { t: 'Horas extra · 21 al 30 de noviembre', sub: 'Local Barranco · reportó Lucho Carrasco' },
    lines: [
      { id: 'wilder', t: 'Wilder Pinto (cocinero): 0 horas. Reloj: 14 horas en 6 días. Nota: «compensadas con días libres».', bad: LEY, why: 'Compensar con descanso exige acuerdo escrito. No hay ninguno: esas horas se pagan.' },
      { id: 'yuli', t: 'Yuli Ccori (ayudante): 4 horas el sábado 28, todas al 25 %.', bad: LEY, why: 'Desde la tercera hora del día el recargo es no menor al 35 %.' },
      { id: 'redondeo', t: 'Marcos Silva (mozo): reloj 7 h 40 min; reporte 7 h.', bad: BP, why: 'Redondear siempre para abajo le quita minutos al trabajador. La regla de redondeo debe ser clara y pareja.' },
      { id: 'ana', t: 'Ana Tito (cajera): 3 horas. Reloj: 3 horas.' },
      { id: 'pide', t: 'Nota de Lucho: «Las horas extra de diciembre ya no se registran en el reloj para no complicar».', bad: LEY, why: 'Las horas trabajadas deben quedar registradas. Dejar de marcar no las borra: solo las esconde.' },
      { id: 'cena', t: 'Cena de empresa del jueves 26: todo el personal hasta la 1 a. m., con taxi pagado.', duda: 'El taxi está bien, pero no reemplaza el pago de las horas.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 4, etica: missLey ? 0 : 2 },
      flags: [missLey ? 'he_reportado' : 'he_marcaciones'], cartera: { barranco: missLey ? 'Pagado lo reportado' : `${hitsLey} problemas · 14 horas de Wilder sin pagar` },
      out: missLey ? 'Pasas el reporte de Barranco al consolidado tal como vino. Al cerrar el archivo, una cifra se te queda dando vueltas: el reloj decía 14.' : 'Lo marcas todo en amarillo. Wilder hizo 14 horas extra que nadie le pagó. Ahora sabes por qué reclama.',
      pro: { ok: 'El reloj es el sustento; el reporte tiene que cuadrar con él.', risk: 'Si pagas lo reportado, te vuelves parte del error del local.', info: 'Guarda el reporte original y el del reloj juntos, con fecha.' },
      kusi: missLey ? ['preocupado', '¿Y las 14 horas del reloj?'] : ['indignado', '¡Catorce horas «compensadas» sin papel!'],
    }),
    rules: [[LEY, 'Compensar horas extra con descanso requiere acuerdo escrito (D.S. 008-2002-TR, art. 26).'], [LEY, 'Recargo no menor al 35 % desde la tercera hora (D.S. 007-2002-TR, art. 10).']],
    mirada: {
      ve: 'Un administrador que «compensa» sin papel suele creer que hace bien: la gente descansa y el local ahorra. Pero sin acuerdo escrito, la ley ve otra cosa: horas trabajadas que no se pagaron.',
      visual: { tipo: 'balanza', a: { t: 'Lo que reportó Barranco', items: ['Wilder: 0 horas', 'Yuli: 4 h al 25 %', 'Redondeos para abajo'] }, b: { t: 'Lo que dice el reloj', items: ['Wilder: 14 horas', 'Yuli: 2 h al 25 % y 2 al 35 %', 'Minutos reales'] } },
    },
  },
  {
    id: 'b4', t: '15:00', ch: 'llamada', who: 'wilder', titulo: 'Wilder, en la puerta de la cocina', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Por teléfono · local Barranco', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Wilder llama puntual. Se escucha el mar a lo lejos y una moto. ${F.has('he_marcaciones') ? 'Tienes delante sus 14 horas en amarillo.' : 'Tienes delante el reporte de Barranco: cero horas extra.'}</p><p>«Señorita, dígame la verdad. <mark class="clave">¿Me están robando o soy yo el que no entiende?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle lo que viste: que en el reloj hay horas extra que no aparecen pagadas, que lo vas a revisar con tu jefe y que el martes que viene le explicas su boleta completa.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, rel: { wilder: 1 }, flags: ['wilder_verdad'],
          out: 'Wilder se queda callado un momento. «Ya. Es la primera vez que alguien de la oficina me dice "lo vi".» Quedan para el martes de la próxima semana.',
          pro: { ok: 'Le dices lo que sabes y lo que falta, sin culpar a nadie.', risk: 'Todavía no sabes si se pagarán: no des montos.', info: 'Lo de su compañero puede tener otras razones: revísalo antes del martes.' },
          kusi: ['feliz', 'La verdad, con calma. ¡Así!'] } },
      { id: 'b', label: 'Decirle que todo está en orden según el reporte del local y que, si tiene dudas, hable con su administrador.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3, etica: -3 }, rel: { wilder: -1 }, flags: ['wilder_evasivo'],
          out: '«¿Con Lucho? Lucho es el que no las pone», dice Wilder, y cuelga. Al rato ves que te bloqueó la foto de perfil.',
          pro: { ok: 'No te comprometes.', risk: 'Lo mandas a reclamarle a la persona que causó el problema.' },
          kusi: ['triste', 'Lo devolviste al mismo lugar…'] } },
      { id: 'c', label: 'Decirle que sí, que le deben 14 horas y que se las pagan con la gratificación.',
        res: { q: 'aceptable', fx: { personas: 3, confianza: -1 }, rel: { wilder: 1 }, flags: ['wilder_verdad'],
          out: 'Wilder se alegra. Ahora tienes que conseguir que se pague justo en la fecha que prometiste, sin haberlo hablado con Hugo.',
          pro: { ok: 'Eres honesta con lo que viste.', risk: 'Prometes una fecha y un monto que no decides tú.' },
          kusi: ['pensando', '¿Y si Hugo dice que no da el tiempo?'] } },
    ],
    mirada: {
      ve: 'Decir «lo vi y lo voy a revisar» no es admitir una culpa: es tratar al trabajador como alguien que merece una explicación. Prometer montos antes de revisar, en cambio, puede convertir una buena noticia en una nueva decepción.',
    },
  },
  {
    id: 'b5', t: '16:15', ch: 'presencial', who: 'hugo', titulo: '«Siempre ha sido así»', banner: 'assets/foto2/tension.webp', lugar: 'Escritorio de Hugo', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Le muestras a Hugo lo de Barranco. Se frota los ojos debajo de los lentes. Lucho acaba de llamarle: dice que en Barranco «siempre se compensa» y que, si se pagan las horas, Operaciones le va a jalar las orejas por el costo.</p><p>Hugo te mira: «Tú lo encontraste. <mark class="clave">¿Qué propones?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pagar las horas de noviembre como reintegro, con su recargo, y que desde ahora Barranco firme acuerdos de compensación si quiere dar descansos.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, confianza: 1 }, rel: { hugo: 1 }, flags: ['he_pagadas', 'he_descanso_pactado'], cartera: { barranco: 'Reintegro de horas extra · acuerdos desde diciembre' },
          out: 'Hugo asiente: «Lo pasado se paga; lo que viene se ordena». Calcula contigo: a Wilder le corresponden unos S/ 133 de reintegro.',
          pro: { ok: 'Corriges lo pasado y ordenas lo que viene, sin prohibir la compensación.', risk: 'Lucho se va a sentir expuesto.', info: 'El descanso pactado se da dentro del mes siguiente, salvo otro acuerdo.' },
          kusi: ['celebra', 'Pasado pagado, futuro ordenado.'] } },
      { id: 'b', label: 'Pedirle a Lucho que haga firmar a su gente acuerdos de compensación con fecha de octubre, y así no se paga nada.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -6 }, rel: { hugo: -1 }, flags: ['he_papel_atrasado'],
          out: 'Hugo te mira serio: «Eso es fabricar un documento. Si un día viene SUNAFIL, ese papel con fecha falsa es peor que no tener nada». Igual Lucho lo hace firmar.',
          pro: { ok: 'Operaciones no paga.', risk: 'Un documento con fecha falsa es un problema mucho mayor que 14 horas extra.' },
          kusi: ['indignado', '¡Eso no es un acuerdo, es un disfraz!'] } },
      { id: 'c', label: 'Dejar que Lucho dé los días libres en enero y no pagar: al final, la gente descansa igual.',
        res: { q: 'aceptable', fx: { cumplimiento: -2, etica: -1, tiempo: 2 }, flags: ['he_descanso_pactado'],
          out: 'Hugo lo duda: «Sin acuerdo escrito antes, eso no es compensación». Lo deja anotado como pendiente con un signo de interrogación.',
          pro: { ok: 'La gente descansa.', risk: 'Sin acuerdo escrito, el descanso dado después no reemplaza el pago.' },
          kusi: ['pensando', '¿Un descanso sin acuerdo es una compensación?'] } },
    ],
    rules: [[LEY, 'El sobretiempo puede compensarse con descanso solo si hay acuerdo escrito (D.S. 008-2002-TR, art. 26).']],
    mirada: {
      ve: 'Hugo no te pide una respuesta legal: te pide una propuesta que se pueda sostener. La buena no es la que castiga a Lucho, sino la que paga lo que se debe y le da una forma correcta de hacer lo que quería hacer.',
      visual: { tipo: 'cambio', titulo: 'De la costumbre a la regla', pares: [['«Siempre se compensa»', 'Acuerdo escrito antes'], ['Cero horas en el reporte', 'Horas del reloj'], ['Días libres cuando se pueda', 'Descanso dentro del mes siguiente']] },
    },
  },
  {
    id: 'b6', t: '18:00', ch: 'whatsapp', who: null, titulo: 'El mensaje a Lucho', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['confianza', 'cumplimiento', 'personas'],
    body: () => `<p>Lucho mandó un correo seco: «No veo por qué pagar dos veces». Hugo te pide que le escribas tú, con copia a nadie: <mark class="clave">que entienda, no que se defienda</mark>.</p>`,
    type: 'compose', enviaA: 'lucho', para: 'Para: Lucho Carrasco · Barranco', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Lucho, gracias por mandar el reporte a tiempo. Lo cruzamos con el reloj, como hacemos con todos los locales.', ok: true, por: 'Reconoces y dejas claro que no es contra él.' },
        { id: 'a2', t: 'Lucho, tu reporte está mal y hay horas sin pagar.', ok: false, por: 'Directo, pero lo pone a la defensiva.' },
      ] },
      { id: 'expl', t: 'Qué explicas', ops: [
        { id: 'e1', t: 'Sin un acuerdo escrito previo, las horas extra no se pueden compensar con días libres: se pagan. Las de noviembre irán como reintegro.', ok: true, por: 'La regla y la consecuencia, en una frase.' },
        { id: 'e2', t: 'La ley es la ley y no hay nada que hablar.', ok: false, por: 'No explica nada.' },
      ] },
      { id: 'ofrece', t: 'Qué ofreces', ops: [
        { id: 'o1', t: 'Si quieres seguir dando descansos, te mando el formato de acuerdo para que lo firme quien esté de acuerdo, desde ahora.', ok: true, por: 'Le das una salida que sí cumple.' },
        { id: 'o2', t: 'Y no lo vuelvas a hacer.', ok: false, por: 'Cierra la conversación.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'e1', 'o1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, cumplimiento: 2 },
        cartera: { barranco: q === 'riesgosa' ? 'Lucho, molesto' : 'Lucho informado · formato de acuerdo enviado' },
        out: q === 'buena' ? 'Lucho responde a las 18:40: «Ya, mándame el formato. Yo pensé que estaba ahorrándole plata a la empresa, nomás».' : q === 'aceptable' ? 'Lucho contesta con un «ok» frío.' : 'Lucho reenvía tu mensaje al gerente de Operaciones con un «¿y esto?».',
        pro: { ok: 'Explicar la regla y ofrecer una forma correcta cambia una pelea por un acuerdo.', risk: 'Un mensaje que acusa termina escalando.', info: 'Cuando escribas a un administrador, piensa que lo va a leer delante de su equipo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Lucho se convirtió en aliado!' : 'El tono también se calcula.'],
      };
    },
    mirada: {
      ve: 'En Planillas no mandas sobre los administradores, pero dependes de ellos. Por eso la manera de corregir pesa tanto como la corrección: el próximo reporte de Lucho dependerá de cómo se sintió hoy.',
      visual: { tipo: 'mensaje', titulo: 'Corregir sin acusar', txt: 'Gracias por el reporte. Lo cruzamos con el reloj, como con todos. Sin acuerdo escrito previo, las horas se pagan. Si quieres dar descansos, aquí tienes el formato.' },
    },
  },
];
