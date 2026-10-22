// Galería de ilustraciones 3D originales (dioramas "clay" renderizados con three.js).
// Fuente: scripts/3d/scenes/*.js · Re-render: node scripts/serve.mjs 8094 & node scripts/3d/scenes/render-all.mjs [nombre]
const T = "Ilustración 3D original";
const img = (name, alt) => ({ src: `assets/3d/scenes/${name}.webp`, sq: `assets/3d/scenes/${name}-sq.webp`, alt, tag: T });

export const gallery = {
  oficina: img("oficina", "Diorama 3D de una oficina de Recursos Humanos: una colaboradora trabaja en su escritorio frente a un monitor con gráficos, junto a archivadores, plantas, una taza y un tablero con notas adhesivas."),
  reunion: img("reunion", "Diorama 3D de una sala de reuniones: cuatro personas sentadas alrededor de una mesa con laptops mientras una facilitadora presenta un diagrama en la pizarra."),
  almacen: img("almacen", "Diorama 3D de un almacén con racks de cajas, una parihuela y un montacargas; los operarios usan casco y chaleco de seguridad."),
  municipalidad: img("municipalidad", "Diorama 3D de una municipalidad de estilo colonial con arcos y balcones de madera; una fila de ciudadanos espera frente a la atención al ciudadano, junto a un asta con bandera bicolor."),
  planta: img("planta", "Diorama 3D de una planta de consumo masivo: línea de envasado con frascos y cajas sin marca, operarias con cofia y mandil, y un supervisor con chaleco."),
  agro: img("agro", "Diorama 3D de un fundo agroexportador en Ica: parrales de uva, camellones de espárrago, jabas de cosecha y trabajadores con sombrero, con dunas al fondo."),
  hospital: img("hospital", "Diorama 3D de la admisión de un hospital público: mostrador con personal administrativo, sala de espera con pacientes y una médica con bata."),
  retail: img("retail", "Diorama 3D de una tienda de ropa en campaña navideña: percheros, mesas de prendas dobladas, un árbol de Navidad y personal de temporada con gorro rojo."),
  cooperativa: img("cooperativa", "Diorama 3D de una agencia de cooperativa de ahorro y crédito: ventanillas de atención al socio y un pequeño grupo en capacitación frente a una pantalla."),
  corporativo: img("corporativo", "Diorama 3D de un piso corporativo en Lima con muros de vidrio y vista a la ciudad: estaciones de trabajo abiertas, una zona lounge y colegas conversando."),
  academia: img("academia", "Diorama 3D de un aula de capacitación: participantes en carpetas atienden a un capacitador junto a una pantalla con proyector."),
  mineria: img("mineria", "Diorama 3D de un campamento minero en los Andes: módulos de vivienda, un camión, conos y un letrero de seguridad; los trabajadores usan casco y chaleco."),
  brujula: img("brujula", "Ilustración 3D conceptual de una brújula de latón sobre una pila de documentos y un lápiz, símbolo de orientación profesional."),
  balanza: img("balanza", "Ilustración 3D conceptual de una balanza que equilibra un documento y un corazón, símbolo de relaciones laborales justas y equidad."),
  boleta: img("boleta", "Ilustración 3D conceptual de una boleta de pago con montos en soles, monedas apiladas y una calculadora."),
};

export default gallery;
