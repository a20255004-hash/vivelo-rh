// Analista de Capacitación y Desarrollo · Capítulo 4 · «El recorte» · Semana 1, jueves.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año (capítulo 1).
//   Reglamento D.S. 005-2012-TR, art. 28: dentro de la jornada (capítulo 3).
//   https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
// - Ley 29571, Código de Protección y Defensa del Consumidor, art. 62: métodos abusivos de cobranza
//   (gestiones con personas ajenas a la deuda; llamadas o visitas entre las 20:00 y las 07:00;
//   documentos que aparenten ser notificaciones o escritos judiciales).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29571.pdf
//   https://img.lpderecho.pe/wp-content/uploads/2023/09/Resolucion-0410-2021-SPC-Indecopi-LPDerecho.pdf
// - Normativa SBS de prevención de lavado de activos: capacitación periódica del personal (capítulo 1, sin cifra).
// Montos del presupuesto y políticas internas de Chimú: ficticios.

export const CAP = {
  n: 4, titulo: 'El recorte', dia: 'Semana 1, jueves', foto: 'assets/esc/planilla.webp',
  lugar: 'Financiera Chimú · Sede central de Trujillo',
  inicio: '08:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Jueves, sede central. Un correo de Finanzas llegó a las 7:52 con copia a la gerencia general.', boton: 'Abrir el correo',
  kusi: 'Con la mitad de plata se piensa el doble. ¡Vamos a priorizar!',
  lead: 'Respondiste a Finanzas, decidiste qué se queda con la mitad del presupuesto, discutiste una promesa peligrosa, corregiste un guion de cobranza y pediste ajustar la meta de mañana.',
  reflexion: '¿Qué defendiste hoy aunque te costara presupuesto?',
  siguiente: { n: 5, titulo: 'El taller', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'presupuesto', p: 'Presupuesto de capacitación', j: 'Mario · Finanzas', d: 0, e: 'De S/ 110,000 a S/ 55,000' },
  { id: 'obligatorias', p: 'SST y prevención de lavado de activos', j: 'Lorena · Desarrollo', d: 0, e: 'Sin presupuesto asignado' },
  { id: 'guion', p: 'Guion de cobranza de la inducción', j: 'Legal · Chimú', d: 0, e: 'Versión 2019' },
  { id: 'piloto', p: 'Taller piloto del viernes', j: 'Víctor · Negocios', d: 0, e: 'El Porvenir, 8:00' },
  { id: 'plan', p: 'Plan priorizado', j: 'Lorena · Desarrollo', d: 0, e: 'Para el comité' },
];

export const FUTURO = {
  presupuesto_obligatorias: ['En el recorte protegiste primero lo que exige la ley: SST y prevención de lavado de activos.', 'Lo agradecerás en el capítulo 7.'],
  presupuesto_vanidad: ['En el recorte se quedaron partidas sin diagnóstico y salió algo obligatorio.', 'Lo pagarás en el capítulo 7.'],
  promesa_mora: ['Firmaste que la mora de los nuevos bajará 2 puntos en tres meses a cambio de más presupuesto.', 'Finanzas te lo recordará en el capítulo 8.'],
  tramos: ['Acordaste con Finanzas liberar fondos por tramos, según los resultados del piloto.', 'El primer tramo depende del capítulo 8.'],
  guion_corregido: ['Corregiste el guion de cobranza de la inducción y Legal lo aprobó.', 'Lo usarás en tu taller. Capítulo 5.'],
  guion_viejo: ['El guion de cobranza quedó con métodos que la ley prohíbe.', 'Aparecerá en tu taller. Capítulo 5.'],
  meta_ajustada: ['Víctor ajustó la meta del viernes para quienes van al taller.', 'Los asesores llegarán sin mirar el reloj. Capítulo 5.'],
  meta_intacta: ['La meta del viernes quedó igual.', 'Los asesores llegarán apurados al taller. Capítulo 5.'],
  plan_priorizado: ['Lorena llevará al comité un plan priorizado que empieza por la ley y sigue con el piloto.', 'Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  mario: { n: 'Mario Ugaz', sub: 'Jefe de Presupuesto · Finanzas', c: '#5B4B8A' },
  kevin: { n: 'Kevin Paredes', sub: 'Asesor · El Porvenir', c: '#3D6E8F' },
};

export const WSP = [
  { chat: 'grupo', t: '07:58', de: 'Lorena', txt: 'Ya viste el correo, ¿no? 😩 Respira. Es en todas las áreas, no solo la nuestra. A las 10 nos ve Mario.' },
  { chat: 'mario', t: '08:30', de: 'Mario', txt: 'Buen día. Traiga su lista de partidas con costo por persona. Tengo 30 minutos, después entro a otra área.' },
  { chat: 'ronald', t: '09:40', de: 'Ronald', txt: 'Me enteré del recorte 😕 Si quieren, partimos el programa en dos años. Igual el descuento lo mantengo.', si: 'ronald_firmado' },
  { chat: 'ronald', t: '09:40', de: 'Ronald', txt: 'Me enteré del recorte 😕 Ánimo. Cuando quieran ver lo de gerentes, aquí estoy.', si: 'ronald_puerta' },
  { chat: 'kevin', t: '11:30', de: 'Kevin', txt: 'Señorita, me llamó Legal por lo de don Julio 😰 Les dije que el guion de la inducción decía que llamáramos cuando el cliente está en casa.', si: 'kevin_llamo_noche' },
  { chat: 'kevin', t: '11:30', de: 'Kevin', txt: 'Señorita, una consulta para mañana: ¿podemos ver cómo se hace un acuerdo de pago por escrito? Lo de la señora Rosa me funcionó 🙏', si: 'kevin_confia' },
  { chat: 'sandra', t: '13:20', de: 'Sandra', txt: 'Estoy armando mis casos para mañana. ¿Lo de mi meta ya lo vieron? 😬' },
  { chat: 'victor', t: '15:05', de: 'Víctor', txt: 'Ok. Mañana la meta de esos 11 y de Sandra baja en proporción a las horas del taller. Una sola vez.', si: 'meta_ajustada' },
  { chat: 'lorena', t: '18:30', de: 'Lorena', txt: 'Hoy defendiste el área mejor que yo hace un año. Descansa, que mañana es tu día 💪', si: 'plan_priorizado' },
];

export const CORREOS = [
  { t: '07:52', de: 'Mario Ugaz · Finanzas', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'Ajuste de presupuesto 2027 · Desarrollo (cc: Gerencia General)', html: '<p>Estimadas: por el aumento de provisiones por mora, la Gerencia General dispuso recortes en todas las áreas. El presupuesto de capacitación pasa de S/ 110,000 a <b>S/ 55,000</b>.</p><p>Les pido una lista priorizada de partidas, con costo por persona, antes del mediodía.</p><p>Mario Ugaz · Jefe de Presupuesto</p>' },
  { t: '11:15', de: 'Legal · Chimú', para: 'Analista de Capacitación y Desarrollo', asunto: 'Reclamo por cobranza · revisión del guion de inducción', html: '<p>Recibimos un reclamo en el Libro de Reclamaciones por métodos de cobranza en una agencia. Al revisar, el asesor dijo que siguió el «guion de cobranza» de la inducción.</p><p>Por favor revisen el guion adjunto y devuélvanlo corregido hoy. Lo usaremos para responder.</p><p>Área Legal</p>' },
];

export const QUIZ = [
  { q: 'Te recortan el presupuesto a la mitad. ¿Qué proteges primero?', ops: ['El curso más popular', 'Lo que exige la ley y lo que ataca el problema del diagnóstico', 'El evento del aniversario', 'El programa más caro'], ok: 1, por: 'Lo obligatorio no se negocia; lo demás se prioriza según el diagnóstico.' },
  { q: 'Según la Ley 29571, ¿cuál de estos es un método abusivo de cobranza?', ops: ['Pedir un acuerdo de pago por escrito', 'Enviar una carta que aparenta ser una notificación judicial', 'Ofrecer reprogramar', 'Llamar a las 10 a. m. al deudor'], ok: 1, por: 'El artículo 62 prohíbe enviar documentos que aparenten ser notificaciones o escritos judiciales.' },
  { q: 'Finanzas te ofrece más presupuesto si firmas que la mora bajará 2 puntos. ¿Qué riesgo tiene?', ops: ['Ninguno', 'La mora depende también de metas, cartera y economía: prometes algo que no controlas', 'Que te paguen menos', 'Que Víctor se moleste'], ok: 1, por: 'La capacitación influye en la mora, pero no la controla sola. Mejor indicadores escalonados y fondos por tramos.' },
  { q: '¿Qué es el costo por participante?', ops: ['El precio total del curso', 'El costo total dividido entre las personas que se capacitan', 'El sueldo del facilitador', 'El IGV del curso'], ok: 1, por: 'Permite comparar opciones de distinto tamaño y es la cifra que Finanzas entiende primero.' },
  { q: 'Un asesor cometió una falta siguiendo el guion oficial de la inducción. ¿Dónde está el problema principal?', ops: ['Solo en el asesor', 'En el material de capacitación, que hay que corregir', 'En el cliente', 'En Legal'], ok: 1, por: 'Si el material enseña algo prohibido, corregirlo es responsabilidad del área de capacitación.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 's1', t: '08:05', ch: 'correo', who: null, titulo: 'El correo de las 7:52', banner: 'assets/foto2/tension.webp', show: ['confianza', 'tiempo', 'calidad'],
    mail: { from: 'Mario Ugaz · Finanzas', to: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'Ajuste de presupuesto 2027 · Desarrollo (cc: Gerencia General)' },
    body: (n, F) => `<p>El café de la máquina del piso todavía está hirviendo cuando lees el correo: de S/ 110,000 a S/ 55,000. Con copia a la Gerencia General.${F.has('ronald_firmado') ? ' Al final, una línea más: «Además, solicito sustento del contrato de S/ 43,200 con Capacita Pro, enviado antes del diagnóstico».' : ''}</p><p>Lorena está en el ascensor. <mark class="clave">La primera respuesta la escribes tú</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder solo a Mario: acusar recibo, confirmar la reunión de las 10 y decir que llevarán la lista priorizada con costo por persona.',
        res: { q: 'buena', fx: { confianza: 3, tiempo: 1 }, rel: { lorena: 1 },
          responde: 'Mario, buenos días. Recibido. A las 10 te llevamos la lista de partidas priorizada, con costo por participante y lo que exige la ley. Gracias.',
          out: 'Mario responde con un «Ok, gracias» seco. Lorena llega y lee tu respuesta en tu pantalla: «Corta, sin quejarte y con fecha. Bien».',
          pro: { ok: 'Respondes rápido, sin drama y sin copiar a nadie más.', info: 'Las discusiones de presupuesto se ganan en la reunión, no en el correo.' },
          kusi: ['feliz', 'Cabeza fría y respuesta corta.'] } },
      { id: 'b', label: 'Responder a todos, con copia a la Gerencia General, explicando que recortar capacitación aumentará la mora.',
        res: { q: 'riesgosa', fx: { confianza: -4, calidad: -1 }, rel: { lorena: -1 },
          responde: 'Estimados: con todo respeto, recortar capacitación en plena alza de la mora es un error que se pagará caro. Solicitamos reconsiderar.',
          out: 'Mario no responde. A los diez minutos, Lorena te llama: «La gerencia general leyó que somos un área que se queja. Hoy tenemos que remar el doble».',
          pro: { ok: 'Defiendes tu área con convicción.', risk: 'Un reclamo con copia a la gerencia, sin datos, convierte una negociación en una pelea pública.' },
          kusi: ['preocupado', 'Con copia a la gerencia… y sin un solo número.'] } },
      { id: 'c', label: 'No responder hasta hablar con Lorena: es su presupuesto, no el tuyo.',
        res: { q: 'aceptable', fx: { tiempo: -2 },
          out: 'Lorena llega a las 8:40, entre reuniones. Responden a las 9:15. Mario ya les dejó un WhatsApp algo seco.',
          pro: { ok: 'Respetas la jerarquía.', risk: 'Un acuse de recibo no compromete nada, y el silencio también comunica.' },
          kusi: ['pensando', 'A veces un «recibido» basta.'] } },
    ],
    mirada: { ve: 'Un recorte de presupuesto no es un ataque personal: en una financiera con la mora en alza, todas las áreas pierden. Lo profesional es responder rápido, con calma, y llevar la discusión a donde se gana: una lista priorizada con números.' },
  },
  {
    id: 's2', t: '09:00', ch: 'sistema', who: null, titulo: 'Qué se queda', banner: 'assets/3d/scenes/balanza.webp', lugar: 'Excel «Presupuesto_DES_2027_v4.xlsx»', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Abres el Excel compartido. La pestaña de partidas se llama «NO TOCAR» y alguien la tocó: hay fórmulas rotas en la columna de totales. Las arreglas a mano.</p><p>Con S/ 55,000 solo entran <mark class="clave">cuatro partidas</mark>. ${F.has('proveedor_mixto') ? 'Tu matriz de ayer ya tiene los costos por participante.' : 'Tendrás que calcular los costos por participante sobre la marcha.'}</p>`,
    type: 'pick', n: 4, prompt: 'Elige las cuatro partidas que se quedan en el presupuesto.', boton: 'Guardar las cuatro partidas', resumen: 'Se quedan',
    cols: ['Partida', 'Costo', 'Por qué está'],
    rows: [
      { id: 'sst', cells: ['4 capacitaciones de SST, dentro de la jornada', 'S/ 6,000', 'La exige la Ley 29783'] },
      { id: 'laft', cells: ['Prevención de lavado de activos', 'S/ 4,000', 'La exige la normativa SBS'] },
      { id: 'cefin', cells: ['«Evaluar y cobrar» · CEFIN Norte, 60 asesores', 'S/ 12,000', 'Ataca la mora de los nuevos'] },
      { id: 'facil', cells: ['Formación de facilitadores internos', 'S/ 3,000', 'Sandra y Don Aurelio'] },
      { id: 'excel', cells: ['Excel avanzado para todos', 'S/ 18,000', 'Estaba en el plan anual'] },
      { id: 'conf', cells: ['Conferencista motivacional en el aniversario', 'S/ 9,000', 'Lo pidió la Gerencia General'] },
      { id: 'lider', cells: ['«Liderazgo 360» para gerentes', 'S/ 43,200', 'Propuesta de Capacita Pro'] },
    ],
    score: { sst: 3, laft: 3, cefin: 3, facil: 2, excel: -2, conf: -1, lider: -3 },
    res: (picks, sc) => {
      const ley = picks.includes('sst') && picks.includes('laft');
      const q = sc >= 10 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: ley ? 5 : -5, calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3 },
        flags: [ley ? 'presupuesto_obligatorias' : 'presupuesto_vanidad'],
        cartera: { presupuesto: q === 'buena' ? 'S/ 25,000 asignados; S/ 30,000 de reserva' : 'Partidas mezcladas', obligatorias: ley ? 'SST y LA/FT protegidas' : 'Una obligatoria quedó fuera' },
        out: q === 'buena' ? 'Las cuatro partidas suman S/ 25,000. Te sobran S/ 30,000 que no vas a gastar a ciegas: quedan en reserva hasta ver el piloto.' : ley ? 'Lo obligatorio está, pero se coló una partida que ningún diagnóstico respalda.' : 'Tu lista se ve atractiva, pero dejaste fuera algo que la ley exige. Mario lo va a notar… o peor, un inspector.',
        pro: { ok: 'Primero lo obligatorio, después lo que ataca el problema, y lo demás espera.', risk: 'Lo que «pidió la gerencia» o «estaba en el plan» no es una razón por sí sola.', info: 'Dejar reserva atada a resultados es más fácil de defender que gastarlo todo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Menos plata, mejor plan!' : '¿Qué exige la ley y qué ataca la mora?'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 35 b): no menos de cuatro capacitaciones de SST al año.'], [LEY, 'Normativa SBS: capacitación periódica en prevención del lavado de activos.'], [BP, 'Con poco presupuesto: primero lo obligatorio, luego lo que responde al diagnóstico.']],
    mirada: {
      ve: 'Priorizar no es repartir el recorte en partes iguales. Hay capas: lo que la ley exige no se negocia; lo que responde al diagnóstico va después; lo que solo «se ve bien» espera.',
      visual: { tipo: 'embudo', titulo: 'Del plan al presupuesto', niveles: [['Partidas del plan', 7], ['Obligatorias', 2], ['Responden al diagnóstico', 2], ['Pueden esperar', 3]] },
    },
  },
  {
    id: 's3', t: '10:00', ch: 'presencial', who: null, titulo: 'La oferta de Mario', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Finanzas, tercer piso', show: ['confianza', 'etica', 'calidad'],
    body: (n, F) => `<p>Mario Ugaz, contador chiclayano de 54 años, tiene la calculadora a un lado y una foto de su nieta en el escritorio. Escucha a Lorena sin interrumpir.${F.has('regalo_aceptado') ? ' Antes de empezar, comenta como al paso: «Me contaron que Capacita Pro regala diplomados. Qué generosos».' : F.has('regalo_rechazado') ? ' «Me dijo Lorena que le devolviste un regalo a un proveedor. Eso no se ve seguido», dice.' : ''}</p><p>Luego se inclina hacia ti: «Te propongo algo. Te devuelvo S/ 15,000 si me firmas que <mark class="clave">la mora de los nuevos baja dos puntos en tres meses</mark>. Si no baja, el próximo año empiezan en cero».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No firmar esa promesa. Proponer otra cosa: medir aprendizaje y aplicación, observar la mora, y liberar los S/ 30,000 de reserva por tramos según los resultados del piloto.',
        res: { q: 'buena', fx: { confianza: 3, etica: 3, calidad: 3 }, flags: ['tramos'], cartera: { presupuesto: 'Reserva por tramos, atada al piloto' },
          out: 'Mario te mira un rato largo. «O sea, me pides que confíe en tramos. Ya. Primer tramo, si la prueba de salida y el acompañamiento en campo salen bien. La mora la vemos juntos.»',
          pro: { ok: 'Te comprometes con lo que tu trabajo controla y no con lo que depende también de metas, cartera y economía.', risk: 'Te quedas con menos dinero hoy.', info: 'Lo que aprendiste de Cajamarca: si cambia la meta al mismo tiempo, no sabrás qué bajó la mora.' },
          kusi: ['animo', 'Prometiste lo que puedes cumplir.'] } },
      { id: 'b', label: 'Firmar: es plata para el área, y si el taller funciona la mora tiene que bajar.',
        res: { q: 'riesgosa', fx: { confianza: 2, calidad: -2, etica: -1 }, flags: ['promesa_mora'], cartera: { presupuesto: 'S/ 70,000 con promesa de mora' },
          out: 'Mario saca un papel, escribe la condición y lo firman. Lorena sale callada. En el ascensor dice: «Acabamos de apostar el área a algo que no controlamos solos».',
          pro: { ok: 'Consigues más presupuesto y muestras confianza.', risk: 'La mora depende también de la meta de 30 créditos, la cartera heredada y la economía. Prometer un número que no controlas es la forma más rápida de perder credibilidad.' },
          kusi: ['preocupado', '¿Y si la meta no cambia? ¿Y si la economía se complica?'] } },
      { id: 'c', label: 'Agradecer y no pedir nada más: S/ 55,000 alcanzan si se gastan bien.',
        res: { q: 'aceptable', fx: { confianza: 1, calidad: 1 }, cartera: { presupuesto: 'S/ 55,000, sin condiciones' },
          out: 'Mario asiente, casi aliviado. Te quedas con lo que hay. Nadie sabrá si con más presupuesto el piloto podía llegar a otras agencias.',
          pro: { ok: 'Evitas una promesa riesgosa.', risk: 'Dejas pasar la oportunidad de atar fondos a resultados que sí puedes mostrar.' },
          kusi: ['pensando', 'Seguro… pero sin ambición.'] } },
    ],
    rules: [[BP, 'Comprométete con indicadores que la capacitación controla (aprendizaje, aplicación) y observa los del negocio sin prometerlos solos.']],
    mirada: {
      ve: 'Finanzas no odia la capacitación: necesita saber qué compra. La tentación es prometer un número del negocio para conseguir dinero. Lo sólido es ofrecer indicadores en cadena y liberar fondos a medida que se cumplen.',
      visual: { tipo: 'linea', titulo: 'Fondos por tramos', hitos: [['Hoy', 'S/ 25,000 asignados'], ['Tras el piloto', 'Prueba de salida aprobada'], ['Un mes después', 'Aplicación observada en campo'], ['Tres meses', 'Mora de los nuevos, comparada']] },
    },
  },
  {
    id: 's4', t: '11:45', ch: 'documento', who: null, titulo: 'El guion de 2019', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'etica', 'personas'],
    body: (n, F) => `<p>Legal te manda el «Guion de cobranza para asesores nuevos», versión 2019, con el logo antiguo de Chimú. Es lo que se reparte impreso en la inducción de dos horas.${F.has('cobranza_vista') ? ' Ahora entiendes por qué Kevin hablaba como si recitara.' : ''}</p><p>Lo tienes que devolver corregido hoy. <mark class="clave">Lo que está mal aquí, se enseñó a todos los nuevos</mark>.</p>`,
    type: 'flag', prompt: 'Marca las indicaciones que la ley prohíbe o que conviene cambiar.',
    doc: { t: 'Guion de cobranza para asesores nuevos', sub: 'Financiera Chimú · versión 2019 · material de inducción' },
    lines: [
      { id: 'vecino', t: 'Si el cliente no contesta, deje el recado con un familiar o un vecino para que le avise de la deuda.', bad: LEY, why: 'La Ley 29571 (art. 62) prohíbe las gestiones de cobranza con personas ajenas a la deuda.' },
      { id: 'noche', t: 'Llame cuando el cliente esté en su casa, aunque sea de noche.', bad: LEY, why: 'La Ley 29571 (art. 62) prohíbe las llamadas y visitas de cobranza entre las 20:00 y las 07:00.' },
      { id: 'carta', t: 'Entregue la «Carta prejudicial» con el sello «Expediente judicial» para que el cliente se asuste.', bad: LEY, why: 'La Ley 29571 (art. 62) prohíbe enviar documentos que aparenten ser notificaciones o escritos judiciales.' },
      { id: 'nunca', t: 'Dígale al cliente que si no paga hoy, nunca más le prestará ningún banco.', bad: BP, why: 'Es una amenaza exagerada que no produce pagos y rompe la relación.' },
      { id: 'cuanto', t: 'Pregunte cuánto puede pagar y en qué fecha, y deje el acuerdo por escrito.' },
      { id: 'causa', t: 'Si el atraso tiene una causa temporal, evalúe la reprogramación según la política de créditos.' },
      { id: 'recordar', t: 'Envíe un recordatorio amable dos días antes de la fecha de pago.', duda: 'Puede ser útil, siempre que se envíe al cliente y en horario permitido.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Devuelves el guion con varios cambios, pero se te pasó una indicación prohibida. Legal la marca en rojo y te lo devuelve.' : 'Devuelves el guion con tres indicaciones tachadas por ilegales y una reescrita. Legal responde: «Esto nos sirve para el reclamo y para que no se repita».',
      flags: [missLey ? 'guion_viejo' : 'guion_corregido'],
      cartera: { guion: missLey ? 'Corregido a medias' : 'Corregido y aprobado por Legal' },
      pro: { ok: 'Corregir el material es corregir la causa: el asesor repetía lo que le enseñaron.', risk: 'Un material de capacitación con errores multiplica el error en cada grupo nuevo.', info: 'Usa el guion corregido como base de la práctica de mañana.' },
      kusi: missLey ? ['preocupado', 'Se quedó algo que la ley prohíbe…'] : ['celebra', '¡Guion limpio! Ahora a enseñarlo.'],
    }),
    rules: [[LEY, 'Ley 29571, art. 62: son métodos abusivos las gestiones con personas ajenas a la deuda, las llamadas o visitas entre las 20:00 y las 07:00 y los documentos que aparenten ser notificaciones judiciales.']],
    mirada: {
      ve: 'Cuando un trabajador comete una falta siguiendo el material oficial, el problema no es solo suyo. Revisar los materiales que ya existen es parte del trabajo de capacitación, tanto como diseñar cursos nuevos.',
      visual: { tipo: 'cambio', titulo: 'El guion, antes y después', pares: [['Recado con el vecino', 'Hablar solo con el cliente o su garante'], ['Llamar de noche', 'Llamar entre las 07:00 y las 20:00'], ['Carta con sello «judicial»', 'Carta clara, sin aparentar un juicio'], ['«Nunca más le prestarán»', '«¿Cuánto puede pagar y cuándo?»']] },
      normas: [{ ley: 'Ley 29571, Código de Protección y Defensa del Consumidor, art. 62', dice: 'Prohíbe, entre otros, comunicar o llamar a terceros ajenos a la deuda para informarles de la morosidad, llamar o visitar entre las 20:00 y las 07:00 o los sábados, domingos y feriados, y enviar documentos que aparenten ser notificaciones o escritos judiciales.', practica: 'Un guion que lo ordena convierte a cada asesor nuevo en un reclamo en potencia.' }],
    },
  },
  {
    id: 's5', t: '14:10', ch: 'whatsapp', who: null, titulo: 'La meta de mañana', banner: 'assets/foto2/pasillo.webp', lugar: 'Pasillo de la sede, con un plátano de almuerzo', show: ['personas', 'confianza', 'tiempo'],
    body: (n, F) => `<p>El almuerzo se redujo a un plátano en el pasillo: la reunión con Mario se alargó y Legal te esperaba. Sandra te pregunta otra vez por su meta.${F.has('sandra_dudosa') ? ' Ayer no supiste qué decirle.' : ''}</p><p>Si mañana los asesores pierden tres horas de calle y la meta sigue igual, <mark class="clave">van a estar en el taller mirando el reloj</mark>.</p>`,
    type: 'compose', enviaA: 'victor', para: 'Para: Víctor Alvarado · Gerente regional', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'pedido', t: 'Lo que pides', ops: [
        { id: 'p1', t: 'Víctor, para mañana: ¿podemos bajar la meta de ese día de los 11 asesores y de Sandra, en proporción a la hora y media del taller?', ok: true, por: 'Concreto y acotado a un día.' },
        { id: 'p2', t: 'Víctor, los asesores necesitan menos presión con las metas.', ok: false, por: 'Suena a crítica general a su forma de gestionar.' },
      ] },
      { id: 'porque', t: 'Por qué', ops: [
        { id: 'w1', t: 'Si llegan pensando en la meta, no aprenden, y el piloto que vas a evaluar sale mal por una razón que no es el taller.', ok: true, por: 'Le muestras que protege su propia apuesta.' },
        { id: 'w2', t: 'Porque la ley dice que la capacitación es dentro de la jornada.', ok: false, por: 'El taller no es de SST: citar mal la ley te resta credibilidad.' },
      ] },
      { id: 'cierre', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Es una sola vez. Mañana mismo te mando los resultados de la prueba de salida.', ok: true, por: 'Acotas y ofreces algo a cambio.' },
        { id: 'c2', t: 'Si no, mejor lo dejamos para otro mes.', ok: false, por: 'Amenazas con cancelar algo que tú misma necesitas.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'w1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, confianza: q === 'buena' ? 3 : 0 }, rel: { victor: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0, sandra: q === 'buena' ? 1 : 0 },
        flags: [q === 'buena' ? 'meta_ajustada' : 'meta_intacta'], cartera: { piloto: q === 'buena' ? 'Jueves 8:00 · meta ajustada ese día' : 'Jueves 8:00 · meta igual' },
        envia: q === 'buena' ? ['sandra', 'Sandra, Víctor aceptó: mañana tu meta baja en proporción a las horas del taller 🙌'] : undefined,
        out: q === 'buena' ? 'Víctor tarda una hora, pero responde: sí, una sola vez. Le reenvías la noticia a Sandra, que manda tres emojis de manos juntas.' : q === 'aceptable' ? 'Víctor responde: «Lo veo». No es un sí. Mañana sabrás.' : 'Víctor responde: «La meta es la meta». Y te deja en visto.',
        pro: { ok: 'Quitar la presión de la meta ese día es parte del diseño del taller, no un favor.', risk: 'Si la meta sigue igual, el taller compite con el bono, y pierde.', info: 'Pídelo por escrito: mañana alguien preguntará si de verdad se ajustó.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Meta ajustada! Llegarán tranquilos.' : 'Sin ajuste, llegarán mirando el reloj…'],
      };
    },
    rules: [[BP, 'Si la capacitación quita horas de trabajo con meta, ajusta la meta de ese día o el aprendizaje compite con el bono.']],
    mirada: {
      ve: 'Las condiciones de una capacitación se negocian antes: quién libera a la gente, qué pasa con su meta y qué gana el jefe. Un taller bien diseñado puede fallar porque los asistentes llegan pensando en su bono.',
      visual: { tipo: 'mensaje', titulo: 'Un pedido acotado', txt: 'Bajar la meta de mañana de los 11 asesores y de Sandra, en proporción a la hora y media del taller. Una sola vez. Ese mismo día, la prueba de salida.' },
    },
  },
  {
    id: 's6', t: '16:30', ch: 'presencial', who: 'lorena', titulo: 'La hoja para el comité', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Oficina de Lorena', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Lorena cierra la puerta y pone dos tazas de anís. «El jueves de la próxima semana presento al comité. ${F.has('promesa_mora') ? 'Con la promesa que firmamos, tiene que quedar muy claro qué controlamos y qué no.' : F.has('tramos') ? 'Con lo de los tramos, Mario nos va a estar mirando.' : 'Mario nos va a estar mirando.'}»</p><p>Te pasa seis tarjetas: «Ordénalas como las contaríamos. <mark class="clave">El comité tiene diez minutos y poca paciencia</mark>».</p>`,
    type: 'secuencia', prompt: 'Ordena el plan priorizado como lo presentarían al comité.', boton: 'Mostrarle el orden a Lorena',
    items: [
      { id: 'ley', t: 'Lo que exige la ley y ya está cubierto: SST y lavado de activos', por: 'Primero se cierra el riesgo legal.' },
      { id: 'prob', t: 'El problema del negocio: la mora de los asesores nuevos', por: 'El dato que le importa al comité.' },
      { id: 'diag', t: 'Lo que encontramos: evaluar sin verificar y cobrar amenazando', por: 'El diagnóstico de campo.' },
      { id: 'pilot', t: 'Qué haremos: piloto en El Porvenir con CEFIN y facilitadores internos', por: 'Pequeño y medible.' },
      { id: 'mide', t: 'Cómo lo mediremos: prueba de salida, aplicación en campo y mora observada', por: 'La cadena de indicadores.' },
      { id: 'pide', t: 'Qué pedimos: liberar la reserva por tramos y revisar la meta de los nuevos', por: 'Cierra con un pedido concreto.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { lorena: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan_priorizado'],
        cartera: { plan: q === 'riesgosa' ? 'Borrador por reordenar' : 'Listo para el comité del próximo jueves' },
        out: q === 'buena' ? 'Lorena pega las tarjetas en la pared con cinta masking: «Ley, problema, diagnóstico, piloto, medición, pedido. Así se entiende en diez minutos».' : 'Lorena mueve dos tarjetas: «Si empezamos pidiendo, nos cortan antes de llegar al piloto».',
        pro: { ok: 'Cerrar el riesgo legal primero calma al comité; terminar con un pedido concreto le da algo que decidir.', info: 'Este orden es el borrador de tu informe del capítulo 9.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Diez minutos bien usados!' : 'El pedido va al final.'],
      };
    },
    rules: [[BP, 'Presenta un plan de capacitación como una respuesta a un problema del negocio, con medición y un pedido claro.']],
    mirada: {
      ve: 'El plan priorizado es la historia de estas dos semanas en una hoja: qué cumplimos por ley, qué problema atacamos, qué haremos, cómo sabremos si funcionó y qué necesitamos. Si esa historia no se entiende en diez minutos, el comité recorta.',
      visual: { tipo: 'flujo', titulo: 'El plan priorizado', pasos: ['Ley cubierta', 'Problema', 'Diagnóstico', 'Piloto', 'Medición', 'Pedido'] },
    },
  },
  {
    id: 's7', t: '18:35', ch: 'whatsapp', who: null, titulo: 'Picarones en la Plaza', banner: 'assets/foto2/caminan.webp', lugar: 'Salida de la sede', show: ['personas', 'confianza'],
    body: () => `<p>Sales de la sede con la espalda dura y la cabeza llena de números. En la Plaza de Armas ya prendieron las luces y huele a picarones con miel de chancaca.</p><p>Lorena te escribe: «¿Unos picarones? Invito yo». Y tú tienes un taller mañana que <mark class="clave">todavía no terminas de diseñar</mark>.</p>`,
    chat: ['¿Unos picarones? Invito yo 🍩'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Aceptar, media hora: el día fue duro y conversar con tu jefa fuera de la oficina también suma.',
        res: { q: null, fx: { personas: 2, confianza: 3 }, rel: { lorena: 1 }, envia: ['lorena', '¡Media horita y me voy a diseñar el taller! 🍩'],
          out: 'Entre picarón y picarón, Lorena te cuenta que hace tres años el comité cerró el área de Desarrollo en otra financiera donde trabajaba. «Por eso me importa tanto este mes.» Ahora entiendes un poco más su prisa.', kusi: ['feliz', 'Descansar también es parte del trabajo.'] } },
      { id: 'b', label: 'Agradecer y tomar la combi a casa: quieres avanzar el diseño del taller esta noche.',
        res: { q: null, fx: { tiempo: 2, personas: -1 }, envia: ['lorena', 'Gracias, Lorena 🙏 Hoy me voy a avanzar el taller. ¡La próxima sí!'],
          out: 'En la combi, entre una señora con bolsas del mercado y un escolar dormido, abres tus apuntes. Llegas a casa con el taller a medio armar y el café ya frío.', kusi: ['animo', 'Avanzaste… pero no te olvides de descansar.'] } },
    ],
    mirada: { ve: 'En capacitación, buena parte del trabajo ocurre fuera del horario visible: diseñar, preparar casos, pensar en la gente. Cuidar el propio descanso y la relación con el equipo también sostiene estas semanas.' },
  },
];
