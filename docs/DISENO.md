# VÍVELO RH · Dirección de arte «Galería del Trabajo»

> Minimalismo editorial cinematográfico: la sobriedad de una casa de moda, la luz de un hotel boutique, el ritmo de una revista impresa.

## 1. Concepto

**Galería del Trabajo.** Cada puesto de Recursos Humanos se presenta como una obra en exhibición: fondo de lino, tipografía de alto contraste, luz lateral que entra por persianas y mucho aire alrededor.

### Por qué encaja con VÍVELO RH

- **Hace visible el valor del oficio.** Recursos Humanos suele verse como trámite. La estética editorial dice lo contrario: decidir sobre personas es delicado, serio y valioso.
- **Separa la marca de los LMS y dashboards genéricos.** No hay degradados de colores, no hay íconos por todas partes y no hay tarjetas idénticas en serie. Hay jerarquía, silencio y foco.
- **El lujo bien entendido es calma.** El contenido ya es intenso: hostigamiento, despidos, planillas con errores. Una interfaz serena ayuda a pensar, como pide «cómo lo piensa una profesional».
- **Mantiene la calidez.** Coco, el ronsoco, se queda: es el gesto humano dentro de una galería sobria, como el detalle artesanal en una pieza de alta gama.

## 2. Sistema de diseño

### 2.1 Color: regla estricta 60 · 30 · 10

| Rol | Nombre | Claro | Oscuro | Uso |
|---|---|---|---|---|
| **60 % · dominante** | Lino / Obsidiana | `#F5F0E8` | `#0E0D0C` | Fondo de página. |
| 60 % · superficie | Marfil | `#FBF8F3` | `#171513` | Tarjetas y paneles. |
| **30 % · soporte** | Tinta | `#14110F` | `#F2ECE2` | Texto principal y bloques oscuros. |
| 30 % · soporte | Grafito | `#4A443D` | `#B9B0A3` | Texto secundario. |
| 30 % · soporte | Piedra | `#CFC5B6` | `#3A352F` | Filetes y bordes. |
| 30 % · soporte | Arena | `#ECE5DA` | `#161412` | Fondos alternos. |
| **10 % · acento** | **Carmín cochinilla** | `#8E1B2C` | `#E0798A` | Una sola acción principal por pantalla, foco, cursiva destacada y cifras clave. |
| Ornamento | Latón | `#A7834E` | `#C9A46A` | Solo filetes y ornamentos (✦). **Nunca texto sobre fondo claro** (contraste 3.1). |

El carmín viene de la **cochinilla**, el tinte que los textiles Paracas usaban hace dos mil años. Es un lujo peruano, no importado.

**Contraste verificado (WCAG AA ≥ 4.5:1):**

| Par | Contraste |
|---|---|
| Tinta sobre lino | 16.6 |
| Grafito sobre lino | 8.5 |
| Gris de apoyo (`#6B645B`) sobre lino | 5.1 |
| Carmín sobre lino | 7.9 |
| Marfil sobre obsidiana | 16.5 |
| Carmín claro sobre obsidiana | 6.7 |
| Latón sobre obsidiana | 8.3 |

**Las familias de RR.HH.** tienen colores de joya apagados (pizarra, latón oscuro, salvia, vino, ciruela). Distinguen los gráficos sin romper la paleta.

### 2.2 Tipografía coreográfica

| Papel | Fuente | Ajustes |
|---|---|---|
| Display | **Bodoni Moda** (didona de alto contraste, eje óptico 6–96) | Peso 400–500, interletrado −0.02 a −0.035 em, interlínea 0.96–1.06. Cursiva solo para la palabra emocional del título: *«antes de elegirlo»*. |
| Lectura e interfaz | **Jost** (geométrica, heredera de Futura) | 17 px, interlínea 1.68, peso 400. Etiquetas en versalitas: 0.66–0.76 rem, interletrado 0.16–0.26 em. |
| Datos | **JetBrains Mono** | Solo horas, expedientes y montos. Cifras tabulares. |

**Coreografía:** un solo titular gigante por pantalla (hasta 8 rem). Debajo, un párrafo guía de 56 caracteres por línea como máximo. El resto en tamaño de lectura. El contraste de escala entre titular y texto es lo que hace que se sienta caro.

### 2.3 Espacio en blanco

- **Escala de 8 pt con saltos áureos:** 8 · 16 · 24 · 40 · 64 · 104 · 168 px (`--s-1` a `--s-7`).
- **Margen lateral fluido:** `--gutter: clamp(16px, 4.2vw, 72px)`. Nunca menos de 16 px en celular.
- **Entre secciones de portada:** `--section: clamp(72px, 11vw, 168px)`. La página respira.
- **Ancho de lectura:** 56–62 caracteres. Los párrafos nunca cruzan toda la pantalla.
- **Composición asimétrica:** el titular ocupa 1.5 fracciones y el apoyo 1 fracción. Las secciones se encabezan con «título a la izquierda, contexto a la derecha».
- **Filetes de 1 px en lugar de sombras.** La profundidad se reserva a dos o tres elementos flotantes, con sombra larga y muy difusa.

## 3. Héroe (primer pantallazo)

1. **Lienzo:** pantalla completa (hasta 940 px de alto), a sangre, en obsidiana. La barra de navegación flota encima en marfil.
2. **Imagen dominante:** la escena ilustrada de oficina, tratada como **grabado monocromo** (escala de grises, sepia leve, brillo 34 %). Tiene un **Ken Burns** muy lento (28 s, escala 1 → 1.08). Encima, **luz de persianas** que se desplaza en diagonal en modo *soft light*. Es luz de mañana entrando a la oficina, la metáfora de «tu primer día».
3. **Profundidad:** viñeta inferior hacia negro y degradado lateral para que el texto viva sobre la zona más oscura. Un halo de latón muy tenue sigue al cursor.
4. **Titular:** marfil sobre obsidiana, contraste 16.5:1, en Bodoni a gran escala. La palabra emocional va en cursiva latón claro (`#D7B98A`). Entra palabra por palabra con máscara de línea.
5. **Llamadas a la acción:**
   - Una principal, sólida marfil: «Hacer el viaje».
   - Una secundaria de filete fino: «Probar un puesto».
   - En la bienvenida, el **fotocheck de invitado** de vidrio esmerilado reemplaza a la secundaria.
6. **Pie del héroe:** cifras editoriales (jornadas, cargos, especialidades) en Bodoni, separadas por un filete, y un indicador vertical «Explorar» con línea animada.

**¿Por qué no un video?** Hoy la plataforma no tiene material filmado propio, y usar video de stock rompería la regla de no presentar como real lo que no lo es. El tratamiento de grabado y luz consigue el efecto cinematográfico con recursos propios. Cuando haya rodaje real, el contenedor `.lux-hero .media` admite un `<video muted loop playsinline>` sin cambiar nada más.

## 4. Micro-interacciones

Todas están en `src/core/motion.js` y `styles/luxe.css`. Se desactivan con `prefers-reduced-motion` y con `forced-colors`.

| Detalle | Comportamiento | Duración / curva |
|---|---|---|
| Revelado al scroll | Los bloques suben 28 px y aparecen. Las imágenes se abren con `clip-path`. | 1.1–1.4 s · `cubic-bezier(.16,1,.3,1)` |
| Titulares por líneas | Cada palabra sube desde una máscara, con 70 ms de desfase. El texto completo queda en `aria-label`. | 1.2 s |
| Botones | Relleno que **barre de abajo hacia arriba** (tinta → carmín) y flecha que avanza 4 px. | 0.6 s |
| Botones grandes | **Magnéticos**: siguen al cursor hasta 8 px. Solo con puntero fino. | continuo |
| Enlaces de texto | Subrayado que **se dibuja de izquierda a derecha** sobre un filete base. | 0.7 s |
| Navegación | Subrayado carmín que crece al pasar. La barra se vuelve vidrio al bajar, **se oculta al hacer scroll hacia abajo** y vuelve al subir o al enfocarla con teclado. | 0.5–0.6 s |
| Índice de puertas | Al pasar, el título se desplaza, el círculo gira −45° y aparece una **vista previa flotante** de la escena. | 0.6–0.9 s |
| Marquesina de cargos | Los 36 cargos desfilan muy lento (80 s). Se pausa al pasar el cursor o al enfocar; al pasar, el nombre cambia a cursiva carmín. | 80 s lineal |
| Cifras | Cuentan hasta su valor al entrar en pantalla. | 1.6 s · ease-out cuártica |
| Cambio de página | Fundido con desenfoque de 6 px (View Transitions API). | 0.42 s salida / 0.62 s entrada |
| Progreso de lectura | Filete carmín de 1 px en el borde superior. | continuo |
| Textura | Grano de película al 4.5 % sobre toda la página, para dar calidez analógica. | estático |

**Regla de oro:** nada rebota, nada parpadea, nada dura menos de 0.35 s. El lujo se mueve lento y llega suave.

## 5. Accesibilidad primero

- Todos los pares de color cumplen AA y el foco visible es un contorno carmín de 2 px.
- Los titulares divididos conservan su texto completo para lectores de pantalla.
- La marquesina se pausa al enfocar. Su copia duplicada sale del orden de tabulación.
- Sin JavaScript o con movimiento reducido, todo el contenido aparece completo y estático.
- Las áreas táctiles miden 40 px como mínimo (52–60 px en las acciones principales).
