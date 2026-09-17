/* Lógica compartida por index.html, producto.html y contacto.html */

const IVA = 0.21;
const IVA_KEY = "blizztherm_iva_incluido";
const LANG_KEY = "blizztherm_lang";

/* ---------- Estado: IVA e idioma ---------- */

function ivaActivo() {
  return sessionStorage.getItem(IVA_KEY) === "1";
}
function setIvaActivo(activo) {
  sessionStorage.setItem(IVA_KEY, activo ? "1" : "0");
}
function lang() {
  return localStorage.getItem(LANG_KEY) === "en" ? "en" : "es";
}
function setLang(l) {
  localStorage.setItem(LANG_KEY, l);
}

/* ---------- Textos de interfaz ---------- */

const STR = {
  es: {
    navInicio: "Inicio", navCatalogo: "Catálogo", navContacto: "Contacto",
    heroTitle: "Equipos de calefacción industrial para naves, talleres, obras y eventos.",
    heroSubtitle: "Calefactores eléctricos, infrarrojos, de gas y gasóleo para espacios industriales y profesionales. Un catálogo, una ficha técnica por equipo.",
    statTotal: "Equipos en catálogo", statCategorias: "Familias de producto",
    statFotos: "Hasta 40 °C en calefacción directa", statPrecios: "Portátiles: sin instalación fija",
    ctaBandTitle: "¿No encuentras el calefactor adecuado para tu espacio?",
    ctaBandText: "Cuéntanos tu superficie, tu entorno de trabajo y tu necesidad de calefacción. Te ayudamos a elegir la solución correcta.",
    ctaBandBtn: "Solicitar asesoramiento",
    ctaProductTitle: "¿Quieres presupuesto para este equipo?",
    ctaProductText: "Indícanos cantidad, ubicación y plazo. Te respondemos con la propuesta ajustada a tu caso.",
    ctaProductBtn: "Pedir presupuesto",
    fichaTecnicaLink: "Ver producto",
    precioConsultar: "Precio a consultar",
    ivaInclNote: "IVA incl.", sinIvaNote: "sin IVA",
    ivaInclNoteBig: "· IVA incluido (21%)", sinIvaNoteBig: "· precio sin IVA",
    ivaToggleOn: "Precios con IVA (21%)", ivaToggleOff: "Precios sin IVA",
    ivaLabel: "IVA",
    desdeLabel: "Desde", hastaLabel: "hasta",
    elegirModeloTitle: "Elige tu modelo",
    casosDeUsoTitle: "Casos de uso",
    verFichaPdf: "Ver ficha técnica (PDF)",
    verManualPdf: "Ver manual de uso (PDF)",
    comprarBlizzcool: "Ver producto",
    equiposEnCatalogo: (n) => `${n} equipo${n > 1 ? "s" : ""} en catálogo`,
    breadcrumbCatalogo: "Catálogo",
    descripcionTitle: "Descripción", fichaTecnicaTitle: "Ficha técnica", aplicacionesTitle: "Aplicaciones",
    variantesTitle: "Variantes disponibles",
    variantesText: "Mismo precio de referencia para todas las variantes. Código interno (Sage Tools) de cada una:",
    variante: "Variante", codigoInterno: "Código interno",
    referenciaInterna: "Referencia interna", sageToolsLabel: "Referencia",
    otrosEquipos: "Otros equipos de la gama",
    solicitarPresupuesto: "Solicitar presupuesto", verMasEquipos: "Ver más equipos de esta gama",
    equipoNoEncontrado: "Equipo no encontrado",
    noExiste: (id) => `No existe ningún equipo con el identificador "${id}" en el catálogo.`,
    volverCatalogo: "Volver al catálogo",
    footerLine: "© BlizzTherm (Toolsplace, S.L.)",
    footerRight: "+34 617 879 087 · blizztherm.es",
    contactoTitle: "Contacto",
    contactoSubtitle: "¿Tienes dudas sobre qué equipo necesitas? Escríbenos, llámanos o pasa a vernos.",
    contactoEmailLabel: "Email", contactoTelLabel: "Teléfono", contactoWhatsappLabel: "WhatsApp",
    contactoDireccionLabel: "Dirección", contactoEmpresaLabel: "Empresa",
    contactoComoLlegar: "Cómo llegar",
    contactoFormTitle: "Escríbenos directamente",
    contactoFormText: "Este botón abre tu programa de correo con el destinatario ya rellenado.",
    contactoEscribirEmail: "Escribir un email",
    contactoAbrirWhatsapp: "Abrir WhatsApp",
    drawerMenu: "Menú",
    temaOscuro: "Modo oscuro",
    drawerWhatsapp: "Escríbenos por WhatsApp",
    verGamaBlizzcool: "Ver gama de refrigeración en Blizzcool",
    idioma: "Idioma",
    ivaFloatOn: "incl.", ivaFloatOff: "excl.",
    compartir: "Compartir / código QR", compartirTitulo: "Compartir esta página",
    compartirTexto: "Escanea el código con la cámara del móvil o copia el enlace.",
    copiarEnlace: "Copiar enlace", enlaceCopiado: "Enlace copiado", compartirNativo: "Compartir…",
    descargarQR: "Descargar QR", cerrar: "Cerrar",
    verEnGrande: "Ver foto en grande",
    fotoAnterior: "Foto anterior", fotoSiguiente: "Foto siguiente",
  },
  en: {
    navInicio: "Home", navCatalogo: "Catalog", navContacto: "Contact",
    heroTitle: "Industrial heating equipment for factories, workshops, construction sites and events.",
    heroSubtitle: "Electric, infrared, gas and diesel heaters for industrial and professional spaces. One catalog, one datasheet per unit.",
    statTotal: "Products in catalog", statCategorias: "Product families",
    statFotos: "Up to 40 °C with direct heating", statPrecios: "Portable: no fixed installation",
    ctaBandTitle: "Can't find the right heater for your space?",
    ctaBandText: "Tell us your floor area, your work environment and your heating needs. We'll help you pick the right solution.",
    ctaBandBtn: "Request advice",
    ctaProductTitle: "Want a quote for this unit?",
    ctaProductText: "Tell us the quantity, location and timeframe. We'll get back to you with a proposal tailored to your case.",
    ctaProductBtn: "Request a quote",
    fichaTecnicaLink: "View product",
    precioConsultar: "Price on request",
    ivaInclNote: "VAT incl.", sinIvaNote: "excl. VAT",
    ivaInclNoteBig: "· VAT included (21%)", sinIvaNoteBig: "· price excl. VAT",
    ivaToggleOn: "Prices incl. VAT (21%)", ivaToggleOff: "Prices excl. VAT",
    ivaLabel: "VAT",
    desdeLabel: "From", hastaLabel: "to",
    elegirModeloTitle: "Choose your model",
    casosDeUsoTitle: "Use cases",
    verFichaPdf: "View datasheet (PDF)",
    verManualPdf: "View user manual (PDF)",
    comprarBlizzcool: "View product",
    equiposEnCatalogo: (n) => `${n} product${n > 1 ? "s" : ""} in catalog`,
    breadcrumbCatalogo: "Catalog",
    descripcionTitle: "Description", fichaTecnicaTitle: "Datasheet", aplicacionesTitle: "Applications",
    variantesTitle: "Available variants",
    variantesText: "Same reference price for every variant. Internal code (Sage Tools) for each one:",
    variante: "Variant", codigoInterno: "Internal code",
    referenciaInterna: "Internal reference", sageToolsLabel: "Reference",
    otrosEquipos: "Other equipment in this range",
    solicitarPresupuesto: "Request a quote", verMasEquipos: "See more equipment in this range",
    equipoNoEncontrado: "Product not found",
    noExiste: (id) => `There's no product with the identifier "${id}" in the catalog.`,
    volverCatalogo: "Back to catalog",
    footerLine: "© BlizzTherm (Toolsplace, S.L.)",
    footerRight: "+34 617 879 087 · blizztherm.es",
    contactoTitle: "Contact",
    contactoSubtitle: "Not sure which unit you need? Write to us, call us, or come and see us.",
    contactoEmailLabel: "Email", contactoTelLabel: "Phone", contactoWhatsappLabel: "WhatsApp",
    contactoDireccionLabel: "Address", contactoEmpresaLabel: "Company",
    contactoComoLlegar: "Get directions",
    contactoFormTitle: "Write to us directly",
    contactoFormText: "This button opens your email app with the recipient already filled in.",
    contactoEscribirEmail: "Write an email",
    contactoAbrirWhatsapp: "Open WhatsApp",
    drawerMenu: "Menu",
    temaOscuro: "Dark mode",
    drawerWhatsapp: "Message us on WhatsApp",
    verGamaBlizzcool: "See our cooling range at Blizzcool",
    idioma: "Language",
    ivaFloatOn: "incl.", ivaFloatOff: "excl.",
    compartir: "Share / QR code", compartirTitulo: "Share this page",
    compartirTexto: "Scan the code with your phone camera or copy the link.",
    copiarEnlace: "Copy link", enlaceCopiado: "Link copied", compartirNativo: "Share…",
    descargarQR: "Download QR", cerrar: "Close",
    verEnGrande: "View full-size photo",
    fotoAnterior: "Previous photo", fotoSiguiente: "Next photo",
  },
};
function t(key) {
  return STR[lang()][key];
}

/* ---------- Datos de contacto (fuente: blizztherm.es) ---------- */

const CONTACTO = {
  empresa: "Toolsplace, S.L. (marca BlizzTherm)",
  email: "info@blizztherm.es",
  telefono: "+34 617 879 087",
  telefonoDisplay: "+34 617 879 087",
  whatsapp: "https://wa.me/34617879087",
  direccion: "C/ Segorbe 45, P.I. Carrús, 03206 Elche (Alicante)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("C/ Segorbe 45, 03206 Elche, Alicante"),
};

const BLIZZCOOL_URL = "https://www.catalogo.blizzcool.es";

/* Mapeo de fichas técnicas y manuales PDF */
const FICHAS_MAP = {
  "bte-50":  "Ficha BTE 50.pdf",
  "bte-90":  "Ficha BTE 90.pdf",
  "bte-150": "Ficha BTE 150.pdf",
  "bte-150r":"Ficha BTE 150R.pdf",
  "bti-20":  "Ficha BTI 20.pdf",
  "bti-45":  "Ficha BTI 45.pdf",
  "btc-13":  "Ficha ténica BTC 13.pdf",
  "btc-18":  "Ficha BTC18.pdf",
  "btg-15":  "Ficha Técnica BTG 15.pdf",
  "btg-30":  "Ficha Técnica BTG 30.pdf",
  "btd-20":  "Ficha BTD 20.pdf",
  "btd-30":  "Ficha BTD 30.pdf",
  "btd-50":  "Ficha BTD 50.pdf",
  "bth-30":  "Ficha BTH 30.pdf",
  "bth-50":  "Ficha BTH 50.pdf",
};
const MANUALES_MAP = {
  "bte-50":  "MANUAL BTE 50.pdf",
  "bte-90":  "MANUAL BTE 90.pdf",
  "bte-150": "MANUAL BTE 150.pdf",
  "bte-150r":"Manual BTE 150R.pdf",
  "bti-20":  "MANUAL BTI 20.pdf",
  "bti-45":  "MANUAL BTI 45.pdf",
  "btc-13":  "MANUAL BTC 13.pdf",
  "btc-18":  "Manual BTC 18.pdf",
  "btg-15":  "MANUAL BTG 15.pdf",
  "btg-30":  "MANUAL BGT 30.pdf",
  "btd-20":  "MANUAL BTD 20.pdf",
  "btd-30":  "MANUAL BTD 30.pdf",
  "btd-50":  "MANUAL BTD 50.pdf",
  "bth-30":  "MANUAL BTH 30.pdf",
  "bth-50":  "MANUAL BTH 50.pdf",
};

function fichaTecnicaUrl(p) {
  const f = FICHAS_MAP[p.id];
  return f ? "fichas/" + encodeURIComponent(f) : null;
}
function manualUrl(p) {
  const m = MANUALES_MAP[p.id];
  return m ? "fichas/" + encodeURIComponent(m) : null;
}

/* URLs de producto en blizztherm.es */
const URLS_BLIZZTHERM = {
  "bte-50":  "https://blizztherm.es/calefactor-industrial-electrico/calentador-electrico-bte-50/",
  "bte-90":  "https://blizztherm.es/calefactor-industrial-electrico/calefactor-electrico-bte-90/",
  "bte-150": "https://blizztherm.es/calefactor-industrial-electrico/calefactor-electrico-bte-150/",
  "bte-150r":"https://blizztherm.es/calefactor-industrial-electrico/calefactor-electrico-bte-150r/",
  "bti-20":  "https://blizztherm.es/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-bti-20/",
  "bti-45":  "https://blizztherm.es/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-bti-45/",
  "btc-13":  "https://blizztherm.es/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-btc-13/",
  "btc-18":  "https://blizztherm.es/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-btc-18/",
  "btg-15":  "https://blizztherm.es/canon-de-calor-industrial/gas/canon-de-calor-a-gas-btg-15/",
  "btg-30":  "https://blizztherm.es/canon-de-calor-industrial/gas/canon-de-calor-a-gas-btg-30/",
  "btd-20":  "https://blizztherm.es/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-directo-btd-20/",
  "btd-30":  "https://blizztherm.es/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-directo-btd-30/",
  "btd-50":  "https://blizztherm.es/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-directo-btd-50/",
  "bth-30":  "https://blizztherm.es/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-indirecto-bth-30/",
  "bth-50":  "https://blizztherm.es/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-indirecto-bth-50/",
};
function urlCompraBlizzcool(p) {
  return URLS_BLIZZTHERM[p.id] || null;
}

/* BlizzTherm: sin imágenes de casos de uso por ahora */
const CASOS_USO_POR_CATEGORIA = {};

/* ---------- Precio ---------- */

function calcularPrecio(pvp) {
  if (pvp === null || pvp === undefined || pvp === "") {
    return { texto: t("precioConsultar"), pendiente: true };
  }
  const num = Number(pvp);
  if (Number.isNaN(num)) return { texto: String(pvp), pendiente: false };
  const conIva = ivaActivo();
  const total = conIva ? num * (1 + IVA) : num;
  const localeStr = lang() === "en" ? "en-IE" : "de-DE"; // de-DE fuerza el punto de millares (2.189,00 €) también en 4 cifras
  const texto = total.toLocaleString(localeStr, { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return { texto, pendiente: false, conIva };
}

function tieneVariantesConPrecio(p) {
  return Array.isArray(p.variantes) && p.variantes.length > 0 && p.variantes[0].pvp != null;
}
function rangoVariantesPrecio(p) {
  const pvps = p.variantes.map((v) => v.pvp);
  return { min: Math.min(...pvps), max: Math.max(...pvps) };
}

function nombreCategoria(id) {
  const c = CATEGORIAS.find((c) => c.id === id);
  if (!c) return id;
  return lang() === "en" ? c.nombreEn : c.nombre;
}

function textoProducto(p, campo) {
  // campo: "resumen" | "descripcion"
  if (lang() === "en") return p[campo + "En"] || p[campo];
  return p[campo];
}
function specsProducto(p) {
  return lang() === "en" ? p.specsEn : p.specs;
}
function aplicacionesProducto(p) {
  return lang() === "en" ? p.aplicacionesEn : p.aplicaciones;
}

function mediaHTML(producto, alt) {
  if (producto.imagen) {
    return `<img src="${producto.imagen}" alt="${alt}" loading="lazy">`;
  }
  return `<div class="placeholder-photo"><span>${lang() === "en" ? "Photo pending" : "Foto pendiente"}</span></div>`;
}

function galeriaProducto(p) {
  const normalizar = (item) => (typeof item === "string" ? { src: item, fit: "fill" } : item);
  const lista = [p.imagen ? { src: p.imagen, fit: "contain" } : null, ...(p.imagenes || []).map(normalizar)].filter(Boolean);
  const vistos = new Set();
  return lista.filter((f) => (vistos.has(f.src) ? false : (vistos.add(f.src), true)));
}

function productMediaHTML(p) {
  const fotos = galeriaProducto(p);
  if (fotos.length === 0) {
    return `<div class="product-gallery"><div class="product-gallery-main"><div class="placeholder-photo"><span>${lang() === "en" ? "Photo pending" : "Foto pendiente"}</span></div></div></div>`;
  }
  const thumbsHTML = fotos.length > 1
    ? `<div class="product-thumbs">${fotos
        .map(
          (f, i) => `<button type="button" class="product-thumb ${i === 0 ? "active" : ""}" data-src="${f.src}" data-fit="${f.fit}" aria-label="${p.nombre} ${i + 1}"><img src="${f.src}" alt="" loading="lazy"></button>`
        )
        .join("")}</div>`
    : "";
  const navHTML = fotos.length > 1
    ? `<button type="button" class="photo-lightbox-nav photo-lightbox-prev js-lightbox-prev" aria-label="${t("fotoAnterior")}">‹</button>
       <button type="button" class="photo-lightbox-nav photo-lightbox-next js-lightbox-next" aria-label="${t("fotoSiguiente")}">›</button>`
    : "";
  const lightboxThumbsHTML = fotos.length > 1
    ? `<div class="lightbox-thumbs">${fotos
        .map((f, i) => `<button type="button" class="lightbox-thumb ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="${p.nombre} ${i + 1}"><img src="${f.src}" alt="" loading="lazy"></button>`)
        .join("")}</div>`
    : "";
  return `
    <div class="product-gallery">
      <div class="product-gallery-main">
        <img id="product-main-photo" src="${fotos[0].src}" alt="${p.nombre}" tabindex="0" role="button" aria-label="${t("verEnGrande")}">
        <button type="button" class="gallery-expand-btn js-gallery-expand" aria-label="${t("verEnGrande")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
        </button>
      </div>
      ${thumbsHTML}
    </div>
    <div id="photo-lightbox" class="photo-lightbox" hidden>
      <div class="photo-lightbox-backdrop js-lightbox-close"></div>
      <button type="button" class="photo-lightbox-close js-lightbox-close" aria-label="${t("cerrar")}">×</button>
      <div class="photo-lightbox-stage">
        ${navHTML}
        <img id="photo-lightbox-img" src="" alt="">
      </div>
      ${lightboxThumbsHTML}
    </div>`;
}

function initProductGallery() {
  const main = document.getElementById("product-main-photo");
  if (!main) return;

  const thumbs = Array.from(document.querySelectorAll(".product-thumb"));
  const fotos = thumbs.length
    ? thumbs.map((b) => ({ src: b.getAttribute("data-src"), fit: b.getAttribute("data-fit") || "contain" }))
    : [{ src: main.getAttribute("src"), fit: main.classList.contains("is-fill") ? "fill" : "contain" }];
  let current = 0;

  const setMain = (index) => {
    current = (index + fotos.length) % fotos.length;
    main.src = fotos[current].src;
    main.classList.toggle("is-fill", fotos[current].fit === "fill");
    thumbs.forEach((b, i) => b.classList.toggle("active", i === current));
  };

  thumbs.forEach((btn, i) => btn.addEventListener("click", () => setMain(i)));

  const lightbox = document.getElementById("photo-lightbox");
  const lightboxImg = document.getElementById("photo-lightbox-img");
  if (!lightbox || !lightboxImg) return;

  // Se mueve a <body> para escapar del contexto de apilamiento del contenedor sticky de la galería
  document.body.appendChild(lightbox);

  const lightboxThumbs = Array.from(lightbox.querySelectorAll(".lightbox-thumb"));
  const showInLightbox = (index) => {
    setMain(index);
    lightboxImg.src = fotos[current].src;
    lightboxImg.alt = main.alt;
    lightboxThumbs.forEach((b, i) => b.classList.toggle("active", i === current));
  };
  lightboxThumbs.forEach((btn, i) => btn.addEventListener("click", () => showInLightbox(i)));
  const open = () => {
    showInLightbox(current);
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  };
  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
  };
  const prev = () => showInLightbox(current - 1);
  const next = () => showInLightbox(current + 1);

  main.addEventListener("click", open);
  main.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
  const expandBtn = document.querySelector(".js-gallery-expand");
  if (expandBtn) expandBtn.addEventListener("click", (e) => { e.stopPropagation(); open(); });
  lightbox.querySelectorAll(".js-lightbox-close").forEach((el) => el.addEventListener("click", close));
  lightbox.querySelectorAll(".js-lightbox-prev").forEach((el) => el.addEventListener("click", (e) => { e.stopPropagation(); prev(); }));
  lightbox.querySelectorAll(".js-lightbox-next").forEach((el) => el.addEventListener("click", (e) => { e.stopPropagation(); next(); }));
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  });

  let touchStartX = null;
  lightbox.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    touchStartX = null;
  }, { passive: true });
}

function cardHTML(p) {
  const esRango = tieneVariantesConPrecio(p);
  const pvpBase = esRango ? rangoVariantesPrecio(p).min : p.pvp;
  const precio = calcularPrecio(pvpBase);
  const nota = precio.pendiente ? "" : precio.conIva ? ` ${t("ivaInclNote")}` : ` ${t("sinIvaNote")}`;
  const precioTexto = esRango ? `${t("desdeLabel")} ${precio.texto}` : precio.texto;
  return `
    <a class="card" href="producto.html?id=${p.id}">
      <div class="card-media">${mediaHTML(p, p.nombre)}</div>
      <div class="card-body">
        <div class="card-model">${p.id.toUpperCase()}</div>
        <h3 class="card-title">${p.nombre}</h3>
        <p class="card-summary">${textoProducto(p, "resumen")}</p>
      </div>
      <div class="card-foot">
        <span class="price ${precio.pendiente ? "pending" : ""} ${esRango ? "is-range" : ""}" data-pvp="${pvpBase ?? ""}">${precioTexto}<span class="iva-note">${nota}</span></span>
        <span class="card-cta">${t("fichaTecnicaLink")}</span>
      </div>
    </a>`;
}

/* ---------- Cabecera y pie compartidos (con menú hamburguesa) ---------- */

function chromeHTML(activeKey) {
  const L = lang();
  const langSeg = `
    <button type="button" class="lang-seg js-lang-toggle" role="switch" aria-checked="${L === "en"}" aria-label="Idioma / Language">
      <span class="lang-opt ${L === "es" ? "active" : ""}">ES</span>
      <span class="lang-opt ${L === "en" ? "active" : ""}">EN</span>
    </button>`;
  const themeToggle = `
    <button type="button" class="theme-toggle js-theme-toggle" aria-label="${t("temaOscuro")}">
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>`;
  const drawerCatsHTML = CATEGORIAS.map((c) => `<a href="index.html#${c.id}">${nombreCategoria(c.id)}</a>`).join("");
  const mobileNavHTML = `
    <a href="index.html" class="${activeKey === "inicio" ? "active" : ""}">${t("navInicio")}</a>
    <button type="button" id="drawer-cats-toggle" class="drawer-acc" aria-expanded="false" aria-controls="drawer-cats">
      <span>${t("navCatalogo")}</span>
    </button>
    <div id="drawer-cats" class="drawer-cats">${drawerCatsHTML}</div>
    <a href="contacto.html" class="${activeKey === "contacto" ? "active" : ""}">${t("navContacto")}</a>`;

  const catDropdownHTML = CATEGORIAS
    .map((c) => `<a href="index.html#${c.id}">${nombreCategoria(c.id)}</a>`)
    .join("");

  const navDesktopHTML = `
    <a href="index.html" class="${activeKey === "inicio" ? "active" : ""}">${t("navInicio")}</a>
    <div class="nav-item-dropdown">
      <a href="index.html#catalogo-top" class="${activeKey === "catalogo" ? "active" : ""}">${t("navCatalogo")}</a>
      <div class="nav-dropdown-menu">${catDropdownHTML}</div>
    </div>`;

  return `
    <div class="wrap header-bar">
      <a class="wordmark" href="index.html"><img src="img/logo-color.png" alt="BlizzTherm" class="logo-img"></a>

      <nav class="site-nav">${navDesktopHTML}</nav>

      <div class="header-right">
        <a class="btn-nav-contact" href="contacto.html">${t("navContacto")}</a>
        <button type="button" class="btn-nav-share js-share-open">${t("compartir")}</button>
      </div>

      <div class="header-actions">
        ${themeToggle}
        ${langSeg}
        <button type="button" id="menu-toggle" class="menu-toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div id="drawer-backdrop" class="drawer-backdrop"></div>
    <aside id="mobile-menu" class="mobile-menu" aria-label="${t("drawerMenu")}">
      <div class="drawer-head">
        <img src="img/logo-color.png" alt="BlizzTherm" class="logo-img">
        <button type="button" id="drawer-close" class="drawer-close" aria-label="Cerrar">×</button>
      </div>
      <nav class="mobile-nav">
        ${mobileNavHTML}
      </nav>
      <div class="mobile-menu-row">
        <span class="mobile-menu-row-label">${t("idioma")}</span>
        ${langSeg}
      </div>
      <div class="mobile-menu-contact">
        <a href="mailto:${CONTACTO.email}">${CONTACTO.email}</a>
        <a href="tel:${CONTACTO.telefono}">${CONTACTO.telefonoDisplay}</a>
        <span>${CONTACTO.direccion}</span>
        <a class="btn-wa" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${t("drawerWhatsapp")}</a>
        <button type="button" class="btn-share js-share-open">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v3M17 21h4M14 21h.01"/></svg>
          ${t("compartir")}
        </button>
      </div>
    </aside>`;
}



function footerHTML() {
  return `
    <div class="wrap">
      <span>${t("footerLine")}</span>
      <span>${t("footerRight")}</span>
    </div>
    <div id="share-modal" class="share-modal" role="dialog" aria-modal="true" aria-labelledby="share-title" hidden>
      <div class="share-backdrop js-share-close"></div>
      <div class="share-card">
        <button type="button" class="drawer-close js-share-close" aria-label="${t("cerrar")}">×</button>
        <h2 id="share-title">${t("compartirTitulo")}</h2>
        <p>${t("compartirTexto")}</p>
        <div id="share-qr" class="share-qr"></div>
        <div class="share-actions">
          <button type="button" class="btn js-share-copy">${t("copiarEnlace")}</button>
          <button type="button" class="btn btn-outline js-share-native">${t("compartirNativo")}</button>
          <button type="button" class="btn btn-outline js-share-download">${t("descargarQR")}</button>
        </div>
      </div>
    </div>
    <div class="float-stack">
    ${ivaFloatHTML()}
    <a class="wa-float" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp ${CONTACTO.telefonoDisplay}" title="WhatsApp ${CONTACTO.telefonoDisplay}">
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.6.8 5.1 2.2 7.2L3.2 29l6.2-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.9S23.2 3 16 3zm0 23.5c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-3.7 1.2 1.2-3.6-.3-.4A10.6 10.6 0 0 1 5.3 15.8C5.3 10 10.1 5.3 16 5.3S26.7 10 26.7 15.8 21.9 26.5 16 26.5zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-.9-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
    </a>
    </div>
    <a class="blizzcool-float" href="${BLIZZCOOL_URL}" target="_blank" rel="noopener" aria-label="${t("verGamaBlizzcool")}" title="${t("verGamaBlizzcool")}">
      <img src="img/blizzcool-icon.png" alt="Blizzcool" width="30" height="30">
    </a>`;
}

function ivaFloatHTML() {
  const activo = ivaActivo();
  return `
    <button type="button" class="iva-float js-iva-toggle" aria-pressed="${activo}" title="${activo ? t("ivaToggleOn") : t("ivaToggleOff")}">
      <span class="iva-float-top">${t("ivaLabel")}</span>
      <span class="iva-float-state">${activo ? t("ivaFloatOn") : t("ivaFloatOff")}</span>
    </button>`;
}

function actualizarPreciosEnPagina() {
  document.querySelectorAll(".price[data-pvp]").forEach((el) => {
    const pvpRaw = el.getAttribute("data-pvp");
    const pvp = pvpRaw === "" ? null : Number(pvpRaw);
    const precio = calcularPrecio(pvp);
    el.classList.toggle("pending", precio.pendiente);
    const nota = precio.pendiente ? "" : precio.conIva ? ` ${t("ivaInclNote")}` : ` ${t("sinIvaNote")}`;
    const prefijo = el.classList.contains("is-range") ? `${t("desdeLabel")} ` : "";
    el.innerHTML = `${prefijo}${precio.texto}<span class="iva-note">${nota}</span>`;
  });
  document.querySelectorAll(".price-big[data-pvp]").forEach((el) => {
    const pvpRaw = el.getAttribute("data-pvp");
    const pvp = pvpRaw === "" ? null : Number(pvpRaw);
    const pvpMaxRaw = el.getAttribute("data-pvp-max");
    if (pvpMaxRaw !== null) {
      const precioMin = calcularPrecio(pvp);
      const precioMax = calcularPrecio(Number(pvpMaxRaw));
      el.classList.remove("pending");
      const nota = precioMin.conIva ? ` ${t("ivaInclNoteBig")}` : ` ${t("sinIvaNoteBig")}`;
      el.innerHTML = `${t("desdeLabel")} ${precioMin.texto} ${t("hastaLabel")} ${precioMax.texto}<span class="iva-note-big">${nota}</span>`;
      return;
    }
    const precio = calcularPrecio(pvp);
    el.classList.toggle("pending", precio.pendiente);
    const nota = precio.pendiente ? "" : precio.conIva ? ` ${t("ivaInclNoteBig")}` : ` ${t("sinIvaNoteBig")}`;
    el.innerHTML = `${precio.texto}<span class="iva-note-big">${nota}</span>`;
  });
  document.querySelectorAll(".iva-float").forEach((btn) => {
    const activo = ivaActivo();
    btn.setAttribute("aria-pressed", activo);
    btn.setAttribute("title", activo ? t("ivaToggleOn") : t("ivaToggleOff"));
    btn.querySelector(".iva-float-state").textContent = activo ? t("ivaFloatOn") : t("ivaFloatOff");
  });
}

function initChrome(activeKey) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  // La cabecera se reconstruye siempre cerrada (p. ej. al cambiar de idioma):
  // si el body se quedó con la clase que bloquea el scroll, hay que soltarla aquí.
  document.body.classList.remove("menu-open");
  if (header) header.innerHTML = chromeHTML(activeKey);
  if (footer) footer.innerHTML = footerHTML();


  document.querySelectorAll(".js-iva-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      setIvaActivo(!ivaActivo());
      actualizarPreciosEnPagina();
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("drawer-backdrop");
  const closeBtn = document.getElementById("drawer-close");
  if (menuToggle && mobileMenu) {
    const setOpen = (open) => {
      mobileMenu.classList.toggle("open", open);
      if (backdrop) backdrop.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", open);
      menuToggle.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    };
    menuToggle.addEventListener("click", () => setOpen(!mobileMenu.classList.contains("open")));
    if (backdrop) backdrop.addEventListener("click", () => setOpen(false));
    if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    const accBtn = document.getElementById("drawer-cats-toggle");
    const accPanel = document.getElementById("drawer-cats");
    if (accBtn && accPanel) {
      accBtn.addEventListener("click", () => {
        const open = accPanel.classList.toggle("open");
        accBtn.setAttribute("aria-expanded", open);
        accBtn.classList.toggle("open", open);
      });
    }
  }

  initShare();

  document.querySelectorAll(".js-lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(lang() === "es" ? "en" : "es");
      if (typeof window.renderPage === "function") window.renderPage();
    });
  });

  document.querySelectorAll(".js-theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) document.documentElement.removeAttribute("data-theme");
      else document.documentElement.setAttribute("data-theme", "dark");
      try { localStorage.setItem("bt-theme", isDark ? "light" : "dark"); } catch (e) {}
    });
  });

  // El botón de Blizzcool solo aparece tras hacer scroll, para no saturar la carga inicial
  const syncBlizzcoolFloat = () => {
    document.querySelectorAll(".blizzcool-float").forEach((el) => {
      el.classList.toggle("is-visible", window.scrollY > 240);
    });
  };
  syncBlizzcoolFloat();
  if (!window.__blizzcoolScrollBound) {
    window.__blizzcoolScrollBound = true;
    window.addEventListener("scroll", syncBlizzcoolFloat, { passive: true });
  }
}

/* ---------- Página índice ---------- */

function renderIndex() {
  initChrome("catalogo");

  const cont = document.getElementById("catalogo");
  const nav = document.getElementById("cat-nav-list");
  let navHTML = "";
  let bodyHTML = "";

  CATEGORIAS.forEach((cat) => {
    const productos = PRODUCTOS.filter((p) => p.categoria === cat.id);
    if (productos.length === 0) return;
    const nombre = nombreCategoria(cat.id);

    navHTML += `<a href="#${cat.id}">${nombre}</a>`;

    bodyHTML += `
      <section class="cat-section" id="${cat.id}">
        <h2>${nombre}</h2>
        <p class="cat-count">${t("equiposEnCatalogo")(productos.length)}</p>
        <div class="grid">
          ${productos.map(cardHTML).join("")}
        </div>
      </section>`;
  });

  nav.innerHTML = navHTML;
  cont.innerHTML = bodyHTML;

  document.getElementById("hero-title").textContent = t("heroTitle");
  document.getElementById("hero-subtitle").textContent = t("heroSubtitle");
  document.getElementById("stat-total-label").textContent = t("statTotal");
  document.getElementById("stat-categorias-label").textContent = t("statCategorias");
  document.getElementById("stat-fotos-label").textContent = t("statFotos");
  document.getElementById("stat-precios-label").textContent = t("statPrecios");
  document.getElementById("cta-band-title").textContent = t("ctaBandTitle");
  document.getElementById("cta-band-text").textContent = t("ctaBandText");
  document.getElementById("cta-band-btn").textContent = t("ctaBandBtn");

  document.getElementById("stat-total").textContent = PRODUCTOS.length;
  document.getElementById("stat-categorias").textContent = CATEGORIAS.length;
  document.getElementById("stat-fotos").textContent = "+40 °C";
  document.getElementById("stat-precios").textContent = "0 " + (lang() === "en" ? "install" : "obras");

  document.documentElement.lang = lang();

  initCatNavScrollSpy();
}

let catNavObserver = null;

function initCatNavScrollSpy() {
  if (catNavObserver) catNavObserver.disconnect();

  const nav = document.getElementById("cat-nav-list");
  const sections = document.querySelectorAll(".cat-section[id]");
  if (!nav || !sections.length) return;

  const links = Array.from(nav.querySelectorAll("a"));
  const linkById = {};
  links.forEach((a) => { linkById[a.getAttribute("href").slice(1)] = a; });

  // El scroll automático no debe pelear con un arrastre manual del usuario en la barra
  let userInteracting = false;
  let resumeTimer = null;
  const pauseAutoScroll = () => {
    userInteracting = true;
    clearTimeout(resumeTimer);
  };
  const resumeAutoScrollSoon = () => {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { userInteracting = false; }, 1500);
  };
  nav.addEventListener("pointerdown", pauseAutoScroll);
  nav.addEventListener("pointerup", resumeAutoScrollSoon);
  nav.addEventListener("pointercancel", resumeAutoScrollSoon);
  nav.addEventListener("touchstart", pauseAutoScroll, { passive: true });
  nav.addEventListener("touchend", resumeAutoScrollSoon, { passive: true });
  nav.addEventListener("wheel", () => { pauseAutoScroll(); resumeAutoScrollSoon(); }, { passive: true });

  const setActive = (id) => {
    const activeLink = linkById[id];
    if (!activeLink) return;
    links.forEach((a) => a.classList.toggle("active", a === activeLink));
    if (userInteracting) return; // el usuario está desplazando la barra a mano: no interferir
    // Se desplaza solo la barra horizontal de píldoras, nunca el scroll vertical de la página
    const wrapRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const delta = (linkRect.left + linkRect.width / 2) - (wrapRect.left + wrapRect.width / 2);
    nav.scrollTo({ left: nav.scrollLeft + delta, behavior: "smooth" });
  };

  catNavObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-110px 0px -75% 0px", threshold: 0 }
  );
  sections.forEach((sec) => catNavObserver.observe(sec));
}

/* ---------- Página de producto ---------- */

function variantesHTML(p) {
  if (!p.variantes || p.variantes.length === 0) return "";
  if (tieneVariantesConPrecio(p)) return ""; // se muestran como selector interactivo junto al precio
  const filas = p.variantes
    .map((v) => {
      const desc = [v.color, v.talla].filter(Boolean).join(" · ") || "—";
      return `<tr><td>${desc}</td><td>${v.sageTools || "—"}</td></tr>`;
    })
    .join("");
  return `
    <h2>${t("variantesTitle")}</h2>
    <p>${t("variantesText")}</p>
    <table class="specs-table variants-table">
      <thead><tr><td>${t("variante")}</td><td>${t("codigoInterno")}</td></tr></thead>
      <tbody>${filas}</tbody>
    </table>`;
}

function casosDeUsoHTML(p) {
  const casos = CASOS_USO_POR_CATEGORIA[p.categoria];
  if (!casos) return "";
  const items = casos.map(
    (c) => `
      <figure class="caso-uso-item">
        <img src="${c.img}" alt="${lang() === "en" ? c.labelEn : c.label}" loading="lazy">
        <figcaption>${lang() === "en" ? c.labelEn : c.label}</figcaption>
      </figure>`
  ).join("");
  return `<h2>${t("casosDeUsoTitle")}</h2><div class="casos-uso-grid">${items}</div>`;
}

function codigosHTML(p) {
  if (!p.sageTools) return "";
  return `<h2>${t("referenciaInterna")}</h2><table class="specs-table"><tr><td>${t("sageToolsLabel")}</td><td>${p.sageTools}</td></tr></table>`;
}

function selectorVariantesHTML(p) {
  if (!tieneVariantesConPrecio(p)) return "";
  const opciones = p.variantes
    .map(
      (v) => `<button type="button" class="variant-option" data-pvp="${v.pvp}" data-sage="${v.sageTools || ""}">${v.modelo}</button>`
    )
    .join("");
  return `
    <div class="variant-selector">
      <div class="variant-selector-label">${t("elegirModeloTitle")}</div>
      <div class="variant-options">${opciones}</div>
      <div class="variant-ref" id="variant-ref"></div>
    </div>`;
}

function initVariantSelector() {
  const options = document.querySelectorAll(".variant-option");
  if (!options.length) return;
  const priceBigs = document.querySelectorAll(".price-big");
  const refEl = document.getElementById("variant-ref");
  const mailtoBtn = document.getElementById("btn-presupuesto");
  const mailtoBase = mailtoBtn ? mailtoBtn.getAttribute("href") : null;

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      options.forEach((b) => b.classList.toggle("active", b === btn));
      priceBigs.forEach((priceBig) => {
        priceBig.classList.remove("is-range");
        priceBig.removeAttribute("data-pvp-max");
        priceBig.setAttribute("data-pvp", btn.getAttribute("data-pvp"));
      });
      const sage = btn.getAttribute("data-sage");
      if (refEl) refEl.textContent = sage ? `${t("sageToolsLabel")}: ${sage}` : "";
      if (mailtoBtn && mailtoBase) {
        mailtoBtn.setAttribute("href", `${mailtoBase}${encodeURIComponent(" — " + btn.textContent)}`);
      }
      actualizarPreciosEnPagina();
    });
  });
}

function renderProducto() {
  initChrome("catalogo");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PRODUCTOS.find((x) => x.id === id);
  const cont = document.getElementById("producto-cont");

  document.getElementById("cta-product-title").textContent = t("ctaProductTitle");
  document.getElementById("cta-product-text").textContent = t("ctaProductText");
  document.getElementById("cta-product-btn").textContent = t("ctaProductBtn");
  document.documentElement.lang = lang();

  if (!p) {
    cont.innerHTML = `
      <div class="wrap" style="padding:60px 24px;">
        <h1 style="font-family:var(--font-head);">${t("equipoNoEncontrado")}</h1>
        <p>${t("noExiste")(id || "")}</p>
        <p><a class="link-inline" href="index.html">${t("volverCatalogo")}</a></p>
      </div>`;
    document.title = `${t("equipoNoEncontrado")} · BlizzTherm`;
    return;
  }

  document.title = `${p.nombre} · BlizzTherm`;

  const catNombre = nombreCategoria(p.categoria);
  const specs = specsProducto(p);
  const aplicaciones = aplicacionesProducto(p);

  const specsHTML = specs.map((s) => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join("");
  const aplicacionesHTML = (aplicaciones || []).map((a) => `<li>${a}</li>`).join("");

  const relacionados = PRODUCTOS.filter((x) => x.categoria === p.categoria && x.id !== p.id).slice(0, 3);
  const relacionadosHTML = relacionados.map(cardHTML).join("");
  const mailtoPresupuesto = `mailto:${CONTACTO.email}?subject=${encodeURIComponent((lang() === "en" ? "Quote request: " : "Presupuesto ") + p.nombre)}`;
  const fichaUrl = fichaTecnicaUrl(p);
  const manuUrl = manualUrl(p);
  const compraUrl = urlCompraBlizzcool(p);

  const esVariante = tieneVariantesConPrecio(p);
  const rango = esVariante ? rangoVariantesPrecio(p) : null;
  const priceBigAttrs = esVariante
    ? `class="price-big is-range" data-pvp="${rango.min}" data-pvp-max="${rango.max}"`
    : `class="price-big" data-pvp="${p.pvp ?? ""}"`;

  cont.innerHTML = `
    <nav class="breadcrumb wrap">
      <a href="index.html">${t("breadcrumbCatalogo")}</a> &nbsp;/&nbsp;
      <a href="index.html#${p.categoria}">${catNombre}</a> &nbsp;/&nbsp;
      ${p.nombre}
    </nav>

    <div class="wrap product-hero">
      <div class="product-media">${productMediaHTML(p)}</div>
      <div class="product-info">
        <div class="card-model">${p.id.toUpperCase()} · ${catNombre}</div>
        <h1>${p.nombre}</h1>
        <p class="lead">${textoProducto(p, "resumen")}</p>

        <div class="buy-panel">
          <div class="price-row">
            <span ${priceBigAttrs}></span>
          </div>
          ${selectorVariantesHTML(p)}
          ${compraUrl ? `<a class="btn btn-accent" href="${compraUrl}" target="_blank" rel="noopener">${t("comprarBlizzcool")}</a>` : ""}
          ${fichaUrl ? `<a class="btn btn-outline" href="${fichaUrl}" target="_blank" rel="noopener">${t("verFichaPdf")}</a>` : ""}
          ${manuUrl ? `<a class="btn btn-outline" href="${manuUrl}" target="_blank" rel="noopener">${t("verManualPdf")}</a>` : ""}
          <a class="btn btn-outline" href="index.html#${p.categoria}">${t("verMasEquipos")}</a>
        </div>
      </div>
    </div>

    <div class="mobile-buy-bar">
      <span ${priceBigAttrs}></span>
      ${compraUrl ? `<a class="btn btn-accent" href="${compraUrl}" target="_blank" rel="noopener">${t("comprarBlizzcool")}</a>` : ""}
    </div>

    <div class="wrap section-block">
      <h2>${t("descripcionTitle")}</h2>
      <p>${textoProducto(p, "descripcion")}</p>

      <h2>${t("fichaTecnicaTitle")}</h2>
      <table class="specs-table">${specsHTML}</table>

      ${aplicacionesHTML ? `<h2>${t("aplicacionesTitle")}</h2><ul class="tag-list">${aplicacionesHTML}</ul>` : ""}

      ${casosDeUsoHTML(p)}

      ${variantesHTML(p)}

      ${codigosHTML(p)}

      ${relacionadosHTML ? `<h2>${t("otrosEquipos")}</h2><div class="related">${relacionadosHTML}</div>` : ""}
    </div>`;

  actualizarPreciosEnPagina();
  initProductGallery();
  initVariantSelector();
}

/* ---------- Página de contacto ---------- */

function renderContacto() {
  initChrome("contacto");
  document.documentElement.lang = lang();
  document.title = `${t("contactoTitle")} · BlizzTherm`;

  const cont = document.getElementById("contacto-cont");
  cont.innerHTML = `
    <div class="wrap contact-hero">
      <h1>${t("contactoTitle")}</h1>
      <p>${t("contactoSubtitle")}</p>
    </div>

    <div class="wrap contact-grid">
      <div class="contact-card">
        <span class="contact-label">${t("contactoEmpresaLabel")}</span>
        <span class="contact-value">${CONTACTO.empresa}</span>
      </div>
      <div class="contact-card">
        <span class="contact-label">${t("contactoEmailLabel")}</span>
        <a class="contact-value link-inline" href="mailto:${CONTACTO.email}">${CONTACTO.email}</a>
      </div>
      <div class="contact-card">
        <span class="contact-label">${t("contactoTelLabel")}</span>
        <a class="contact-value link-inline" href="tel:${CONTACTO.telefono}">${CONTACTO.telefonoDisplay}</a>
      </div>
      <div class="contact-card">
        <span class="contact-label">${t("contactoWhatsappLabel")}</span>
        <a class="contact-value link-inline" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${CONTACTO.telefonoDisplay}</a>
      </div>
      <div class="contact-card contact-card-wide">
        <span class="contact-label">${t("contactoDireccionLabel")}</span>
        <span class="contact-value">${CONTACTO.direccion}</span>
        <a class="link-inline contact-directions" href="${CONTACTO.mapsUrl}" target="_blank" rel="noopener">${t("contactoComoLlegar")} →</a>
      </div>
    </div>

    <div class="wrap contact-actions">
      <div class="buy-panel contact-panel">
        <h2>${t("contactoFormTitle")}</h2>
        <p>${t("contactoFormText")}</p>
        <a class="btn btn-accent" href="mailto:${CONTACTO.email}">${t("contactoEscribirEmail")}</a>
        <a class="btn btn-outline" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${t("contactoAbrirWhatsapp")}</a>
      </div>
    </div>`;
}


/* ---------- Compartir / QR ---------- */

function urlCompartir() {
  // Siempre la portada del catálogo, independientemente de la página desde la que se comparta
  const u = new URL("index.html", window.location.href);
  return u.href.replace(/index\.html$/, "");
}

function dibujarQR(cont, texto) {
  cont.innerHTML = "";
  if (typeof qrcode !== "function") {
    cont.innerHTML = `<p class="share-qr-fallback">QR no disponible sin conexión.</p>`;
    return null;
  }
  const qr = qrcode(0, "M");
  qr.addData(texto);
  qr.make();
  const n = qr.getModuleCount();
  const size = 6, margin = 3;
  const canvas = document.createElement("canvas");
  const px = (n + margin * 2) * size;
  canvas.width = px; canvas.height = px;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, px, px);
  ctx.fillStyle = "#1b2433";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (qr.isDark(r, c)) ctx.fillRect((c + margin) * size, (r + margin) * size, size, size);
  }
  cont.appendChild(canvas);
  return canvas;
}

function initShare() {
  const modal = document.getElementById("share-modal");
  if (!modal) return;
  let canvas = null;

  const abrir = () => {
    const url = urlCompartir();
    canvas = dibujarQR(document.getElementById("share-qr"), url);
    modal.hidden = false;
    document.body.classList.add("menu-open");
    const drawer = document.getElementById("mobile-menu");
    const backdrop = document.getElementById("drawer-backdrop");
    const mt = document.getElementById("menu-toggle");
    if (drawer) drawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    if (mt) { mt.classList.remove("open"); mt.setAttribute("aria-expanded", "false"); }
  };
  const cerrar = () => { modal.hidden = true; document.body.classList.remove("menu-open"); };

  document.querySelectorAll(".js-share-open").forEach((b) => b.addEventListener("click", abrir));
  modal.querySelectorAll(".js-share-close").forEach((b) => b.addEventListener("click", cerrar));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) cerrar(); });

  modal.querySelector(".js-share-copy").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    try { await navigator.clipboard.writeText(urlCompartir()); } catch (_) {
      const ta = document.createElement("textarea"); ta.value = urlCompartir(); document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
    const orig = btn.textContent; btn.textContent = t("enlaceCopiado");
    setTimeout(() => (btn.textContent = orig), 1800);
  });

  const nativeBtn = modal.querySelector(".js-share-native");
  if (navigator.share) {
    nativeBtn.addEventListener("click", () => navigator.share({ title: "BlizzTherm", url: urlCompartir() }).catch(() => {}));
  } else {
    nativeBtn.style.display = "none";
  }

  modal.querySelector(".js-share-download").addEventListener("click", () => {
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = "blizztherm-qr.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
}
