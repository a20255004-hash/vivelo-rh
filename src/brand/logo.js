/* Identidad VÍVELO RH.
   Símbolo: un fotocheck (el carné que todo trabajador peruano lleva colgado) cuya "V" es también
   un check: vivir el trabajo y comprobarlo. La chispa coral es la tilde de la Í: la curiosidad. */
export const SLOGAN = "Vive el trabajo antes de elegirlo.";
export const DESCRIPTOR = "Laboratorio interactivo de Recursos Humanos";

export const mark = (size = 40, title = true) => `<svg class="logo-mark" width="${size}" height="${size}" viewBox="0 0 64 64" role="img" ${title ? 'aria-label="VÍVELO RH"' : 'aria-hidden="true"'}>
  <path d="M22 4 L32 14 L42 4" fill="none" stroke="var(--spark)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="9" y="12" width="46" height="49" rx="12" fill="var(--brand)"/>
  <rect x="9" y="12" width="46" height="49" rx="12" fill="url(#lgShade)" opacity=".35"/>
  <rect x="26" y="17" width="12" height="4" rx="2" fill="var(--paper)" opacity=".9"/>
  <path d="M20.5 31.5 L30 47 L44.5 27" fill="none" stroke="var(--on-brand)" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M48 20.5c.5 3.1 1.4 4 4.5 4.5-3.1.5-4 1.4-4.5 4.5-.5-3.1-1.4-4-4.5-4.5 3.1-.5 4-1.4 4.5-4.5z" fill="var(--sun)"/>
  <defs><linearGradient id="lgShade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient></defs>
</svg>`;

/* Logotipo en HTML: el texto es real (accesible y nítido) y la tilde es una chispa dibujada. */
export const wordmark = (cls = "") => `<span class="wordmark ${cls}" aria-label="VÍVELO RH"><span aria-hidden="true">V<span class="wm-i">I</span>VELO</span><span class="wm-rh" aria-hidden="true">RH</span></span>`;

export const lockup = (cls = "", withDesc = false) => `<span class="lockup ${cls}">${mark(38, false)}<span class="lockup-txt">${wordmark()}${withDesc ? `<small>${DESCRIPTOR}</small>` : ""}</span></span>`;
