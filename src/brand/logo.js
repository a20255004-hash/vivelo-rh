/* Identidad VÍVELO RH.
   Símbolo: un sello circular carmín. Dentro, un solo trazo que es a la vez un «check» (vivir el
   trabajo y comprobarlo) y una persona con los brazos en alto (Recursos Humanos son personas).
   La cabeza es un rombo andino, el mismo motivo tejido de la chalina de Kusi. El anillo de latón
   da el acabado de sello, como las casas de alta gama.
   Logotipo: VÍVELO en Fraunces con la tilde convertida en rombo de latón; «RH» en versalitas. */
export const SLOGAN = "Vive el trabajo antes de elegirlo.";
export const DESCRIPTOR = "Laboratorio interactivo de Recursos Humanos";

export const mark = (size = 40, title = true) => `<svg class="logo-mark" width="${size}" height="${size}" viewBox="0 0 64 64" role="img" ${title ? 'aria-label="VÍVELO RH"' : 'aria-hidden="true"'} focusable="false">
  <circle cx="32" cy="32" r="31" fill="var(--logo-seal,#8E1B2C)"/>
  <circle cx="32" cy="32" r="27.2" fill="none" stroke="var(--logo-ring,#C9A46A)" stroke-width="1.1" opacity=".9"/>
  <path d="M17 31 L29.4 46 L47.5 20.5" fill="none" stroke="var(--logo-ink,#FBF8F3)" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30.4 18.2 L35.6 23.4 L30.4 28.6 L25.2 23.4 Z" fill="var(--logo-ring,#C9A46A)"/>
</svg>`;

/* Logotipo en HTML: el texto es real (accesible y nítido) y la tilde es un rombo dibujado. */
export const wordmark = (cls = "") => `<span class="wordmark ${cls}" aria-label="VÍVELO RH"><span aria-hidden="true">V<span class="wm-i">I</span>VELO</span><span class="wm-rh" aria-hidden="true">RH</span></span>`;

export const lockup = (cls = "", withDesc = false) => `<span class="lockup ${cls}">${mark(40, false)}<span class="lockup-txt">${wordmark()}${withDesc ? `<small>${DESCRIPTOR}</small>` : ""}</span></span>`;
