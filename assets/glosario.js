// Glosario de VÍVELO RH. Cada término se muestra con mayúscula inicial.
// cat: Proceso · Ley · Empresa · Documento · Herramienta · Persona
// al: otras formas en que aparece en el texto (para marcarlo).

export const CATS = {
  Proceso: { c: '#F2A900', ink: '#0F2A3D', ico: '<path d="M4 12h4l3-7 4 14 3-7h2"/>' },
  Ley: { c: '#2F6B3F', ink: '#FFFFFF', ico: '<path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0zM17 7l-3 7a3 3 0 0 0 6 0z"/>' },
  Empresa: { c: '#7CC6EA', ink: '#0F2A3D', ico: '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>' },
  Documento: { c: '#E4572E', ink: '#FFFFFF', ico: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>' },
  Herramienta: { c: '#0F2A3D', ink: '#FFFFFF', ico: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>' },
  Persona: { c: '#CFE6D5', ink: '#1E4A2B', ico: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>' },
};

export const TERMINOS = [
  { t: 'Terna', cat: 'Proceso', d: 'Los tres candidatos finalistas que se presentan al jefe para que elija a uno.', ej: 'Walter espera la terna del supervisor antes del inventario.', ver: ['Perfil del puesto', 'Requerimiento'] },
  { t: 'Requerimiento', cat: 'Proceso', d: 'Pedido formal que hace un jefe a RR.HH. para cubrir una vacante.', ej: 'Gina hizo su requerimiento hace 42 días.', ver: ['Perfil del puesto'] },
  { t: 'Perfil del puesto', al: ['perfil de puesto', 'perfil del puesto'], cat: 'Documento', d: 'Describe para qué existe un puesto, qué hace y qué conocimientos, experiencia y competencias necesita quien lo ocupe.', ej: 'El perfil de 2023 pedía «sexo: masculino». Tú lo corriges.', ver: ['Misión del puesto', 'Competencias'] },
  { t: 'Misión del puesto', cat: 'Documento', d: 'Una frase que resume para qué existe el puesto y qué resultado aporta a la empresa.', ej: '«Asegurar que el almacén reciba, guarde y despache a tiempo y sin pérdidas.»' },
  { t: 'Competencias', al: ['competencias', 'competencia'], cat: 'Proceso', d: 'Conocimientos, habilidades y actitudes que se ven en lo que una persona hace, y que se pueden evaluar.', ej: '«Que le hagan caso» se convierte en «liderazgo de equipos operativos».' },
  { t: 'Banda salarial', cat: 'Empresa', d: 'Rango de sueldo, con un mínimo y un máximo, aprobado para un puesto.', ej: 'La banda del supervisor va de S/ 3,200 a S/ 3,900.', ver: ['Equidad interna'] },
  { t: 'Equidad interna', cat: 'Empresa', d: 'Que personas con el mismo trabajo y desempeño ganen de forma coherente dentro de la empresa.', ej: 'Si el nuevo supervisor gana más que los actuales, la equidad interna se rompe.' },
  { t: 'Llamada de filtro', cat: 'Proceso', d: 'Llamada corta para confirmar interés, disponibilidad y datos básicos antes de citar a una entrevista.', ej: 'De cinco llamadas, solo Elmer agenda entrevista.' },
  { t: 'Portal de empleo', cat: 'Herramienta', d: 'Página web donde se publican avisos y llegan las postulaciones.', ej: 'La cuenta del portal estaba a nombre de Milagros.' },
  { t: 'Cliente interno', cat: 'Empresa', d: 'Jefe o área de la misma empresa a la que RR.HH. le presta un servicio, como cubrir una vacante.', ej: 'Walter, Fernando y Gina son tus clientes internos.' },
  { t: 'Referido', al: ['referido', 'referidos'], cat: 'Persona', d: 'Candidato recomendado por alguien de la empresa. Entra al mismo filtro que todos.', ej: 'Kevin, el sobrino de Fernando, es un referido.' },
  { t: 'Nepotismo', cat: 'Ley', d: 'Favorecer a familiares en una contratación. En el sector público está prohibido por ley.', ver: ['Ley 26771'] },
  { t: 'Postulante', al: ['postulante', 'postulantes'], cat: 'Persona', d: 'Persona que se presenta a un proceso de selección.' },
  { t: 'Inducción', cat: 'Proceso', d: 'Proceso para que una persona nueva conozca la empresa, su puesto y sus normas al ingresar.' },
  { t: 'Periodo de prueba', cat: 'Ley', d: 'Primeros meses de un trabajador en que la empresa evalúa si se adapta al puesto. En el régimen general suele ser de tres meses.' },
  { t: 'Preaviso', cat: 'Ley', d: 'Plazo con que un trabajador avisa que renuncia antes de irse. En el régimen general son 30 días, aunque el empleador puede exonerarlo.', ej: 'El mejor candidato podría tardar un mes en llegar por su preaviso.' },
  { t: 'Movilidad interna', cat: 'Proceso', d: 'Cubrir una vacante con alguien que ya trabaja en la empresa, por ascenso o cambio de área.', ej: 'Don Julio conoce el almacén mejor que nadie.' },
  { t: 'Comité', cat: 'Empresa', d: 'Reunión periódica de jefes para revisar los temas de la empresa.' },
  { t: 'Excel de seguimiento', cat: 'Herramienta', d: 'Hoja donde se registra en qué etapa está cada proceso de selección.', ej: 'El Excel de Milagros tenía notas como «¿sigue?».' },
  { t: 'WMS', cat: 'Herramienta', d: 'Sistema de gestión de almacén: controla ingresos, ubicaciones y despachos de la mercadería.' },
  { t: 'Inventario', cat: 'Empresa', d: 'Conteo físico de toda la mercadería del almacén. Suele paralizar buena parte de la operación.' },
  { t: 'Turnos rotativos', cat: 'Empresa', d: 'Horarios que cambian por semanas o por días: mañana, tarde o noche.' },
  { t: 'Montacargas', cat: 'Herramienta', d: 'Vehículo para levantar y mover carga pesada. Para operarlo se necesita capacitación y autorización.' },
  { t: 'Guías de remisión', cat: 'Documento', d: 'Documentos que acompañan el traslado de mercadería y sustentan qué sale del almacén y hacia dónde.' },
  { t: 'Buena presencia', cat: 'Proceso', d: 'Expresión común en avisos antiguos. Es ambigua y suele esconder preferencias por apariencia.' },
  { t: 'Requisito objetivo', cat: 'Ley', d: 'Requisito que se justifica por la naturaleza del puesto y se puede verificar, no por preferencias personales.' },
  { t: 'Planillas', al: ['planillas', 'planilla'], cat: 'Empresa', d: 'Área que calcula y paga sueldos, beneficios y aportes, y registra a los trabajadores ante SUNAT.', ver: ['T-Registro', 'PLAME'] },
  { t: 'T-Registro', cat: 'Herramienta', d: 'Registro de SUNAT donde la empresa da de alta a cada trabajador. Se hace dentro del día en que la persona empieza a trabajar.', ej: 'Kelly pide los datos de ingreso con 48 horas de anticipación.' },
  { t: 'PLAME', cat: 'Documento', d: 'Planilla Mensual de Pagos: declaración mensual a SUNAT con sueldos, aportes y retenciones.', ej: 'Gina necesita una asistente que sepa PLAME.' },
  { t: 'Boleta de pago', al: ['boleta de pago', 'boletas de pago', 'boletas'], cat: 'Documento', d: 'Documento que detalla lo que gana un trabajador en el mes, sus descuentos y aportes.' },
  { t: 'CTS', cat: 'Ley', d: 'Compensación por Tiempo de Servicios: depósito semestral que protege al trabajador cuando deja de trabajar.' },
  { t: 'Liquidación', cat: 'Documento', d: 'Cálculo de lo que se le debe pagar a un trabajador cuando termina su vínculo: vacaciones, gratificación y CTS truncas.' },
  { t: 'Datos personales', cat: 'Ley', d: 'Información que identifica a una persona: nombre, DNI, teléfono o su CV. La Ley 29733 regula cómo se protegen.', ver: ['Ley 29733'] },
  { t: 'Ley 26772', cat: 'Ley', d: 'Prohíbe requisitos discriminatorios en las ofertas de empleo, por ejemplo por sexo, edad o estado civil.' },
  { t: 'Ley 29733', cat: 'Ley', d: 'Ley de Protección de Datos Personales: obliga a cuidar los datos de las personas y usarlos solo para su fin.' },
  { t: 'Ley 26771', cat: 'Ley', d: 'Prohíbe el nepotismo en el sector público.' },
  { t: 'Ley 30709', cat: 'Ley', d: 'Prohíbe la discriminación salarial entre hombres y mujeres y obliga a tener un cuadro de categorías y funciones.' },
  { t: 'Ley 29783', cat: 'Ley', d: 'Ley de Seguridad y Salud en el Trabajo: obliga a prevenir riesgos, capacitar y registrar accidentes.' },
  { t: 'SUNAFIL', cat: 'Empresa', d: 'Superintendencia Nacional de Fiscalización Laboral: la entidad que inspecciona si las empresas cumplen las normas laborales.' },
  { t: 'Sindicato', al: ['sindicato', 'sindicatos'], cat: 'Persona', d: 'Organización de trabajadores que los representa ante la empresa, por ejemplo en una negociación colectiva.' },
  { t: 'Pliego de reclamos', cat: 'Documento', d: 'Documento con el que el sindicato presenta sus pedidos al inicio de una negociación colectiva.' },
  { t: 'Modalidades formativas', cat: 'Ley', d: 'Convenios de prácticas pre y profesionales regulados por la Ley 28518. No son contratos de trabajo, pero dan derechos como subvención y seguro.' },
  { t: 'IPERC', cat: 'Documento', d: 'Matriz de Identificación de Peligros, Evaluación de Riesgos y Controles de cada puesto o tarea.' },
  { t: 'Legajo', al: ['legajo', 'legajos'], cat: 'Documento', d: 'Carpeta con los documentos de cada trabajador: contrato, DNI, certificados, evaluaciones y más.', ej: 'En el archivo de Hilandería Andina hay 300 legajos en cajas.', ver: ['Datos personales'] },
  { t: 'Subvención', cat: 'Ley', d: 'Pago mensual que recibe quien hace prácticas. No es sueldo, pero la ley fija un mínimo.', ver: ['Modalidades formativas'] },
  { t: 'Sistema de pensiones', al: ['sistema de pensiones', 'AFP', 'ONP'], cat: 'Ley', d: 'Donde aporta un trabajador para su jubilación: el sistema público (ONP) o el privado (AFP). Quien ingresa elige, con información previa.', ej: 'Rosa no sabía si firmar AFP u ONP.' },
  { t: 'Clima laboral', cat: 'Empresa', d: 'Cómo perciben las personas su ambiente de trabajo: relaciones, liderazgo, reconocimiento.' },
  { t: 'Rotación', cat: 'Empresa', d: 'Porcentaje de personas que salen de la empresa en un periodo y deben ser reemplazadas.' },
];

// Mapa término → entrada, para buscar desde cualquier forma.
export const ENTRADA = {};
for (const e of TERMINOS) for (const f of [e.t, ...(e.al || [])]) ENTRADA[f.toLowerCase()] = e;
