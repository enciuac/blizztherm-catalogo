/* ───────────────────────────────────────────────
   BlizzTherm · Motor de renderizado del catálogo
   v1.0 — septiembre 2026
   ─────────────────────────────────────────────── */

/* ── Estado global ── */
let lang = localStorage.getItem("bt-lang") || "es";
let ivaOn = localStorage.getItem("bt-iva") !== "false";

/* ── Helpers ── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function t(es, en) { return lang === "en" ? en : es; }

function calcularPrecio(pvp) {
  if (pvp == null) return { texto: t("Consultar", "On request"), pendiente: true, conIva: false };
  const precio = ivaOn ? pvp * 1.21 : pvp;
  const texto = precio.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
  return { texto, pendiente: false, conIva: ivaOn };
}

function slugify(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

function tieneVariantesConPrecio(p) { return p.variantes?.some(v => v.pvp != null); }

function rangoPrecios(p) {
  const precios = [p.pvp, ...(p.variantes || []).map(v => v.pvp)].filter(x => x != null);
  if (!precios.length) return null;
  return { min: Math.min(...precios), max: Math.max(...precios) };
}

/* ── Tarjeta de producto ── */
function cardHTML(p) {
  const rango = rangoPrecios(p);
  let precioLabel;
  if (!rango) {
    precioLabel = `<span class="price pending">${t("Consultar", "On request")}</span>`;
  } else if (rango.min === rango.max) {
    const pr = calcularPrecio(rango.min);
    precioLabel = `<span class="price">${pr.texto}</span>`;
  } else {
    const lo = calcularPrecio(rango.min), hi = calcularPrecio(rango.max);
    precioLabel = `<span class="price" data-is-range>${lo.texto} – ${hi.texto}</span>`;
  }
  const ivaNote = ivaOn ? t("IVA incluido", "VAT included") : t("Sin IVA", "Excl. VAT");
  const resumen = lang === "en" ? (p.resumenEn || p.resumen || "") : (p.resumen || "");

  return `
    <a href="producto.html?id=${p.id}" class="card" data-id="${p.id}">
      <div class="card-img"><img src="${p.imagen}" alt="${p.nombre}" loading="lazy"></div>
      <div class="card-body">
        <span class="card-model">${p.id.toUpperCase()}</span>
        <h3 class="card-title">${lang === "en" ? (p.nombreEn || p.nombre) : p.nombre}</h3>
        <p class="card-summary">${resumen}</p>
        <div class="card-price">
          ${precioLabel}
          <small class="iva-note">${ivaNote}</small>
        </div>
        <span class="card-cta">${t("Ver producto", "View product")} &rarr;</span>
      </div>
    </a>`;
}

/* ── Render: índice ── */
function renderIndex() {
  const main = $("#catalogo");
  const nav = $(".cat-nav");
  if (!main) return;

  // Stats
  const statsEl = $(".hero-stats");
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat"><strong>${PRODUCTOS.length}</strong> ${t("equipos", "products")}</div>
      <div class="stat"><strong>${CATEGORIAS.length}</strong> ${t("categorías", "categories")}</div>
      <div class="stat"><strong>${PRODUCTOS.filter(p => p.imagen).length}</strong> ${t("fotos", "photos")}</div>
      <div class="stat"><strong>${PRODUCTOS.filter(p => p.pvp != null).length}</strong> ${t("precios", "prices")}</div>
    `;
  }

  // Category nav
  if (nav) {
    nav.innerHTML = CATEGORIAS.map(c =>
      `<a href="#cat-${c.id}" class="cat-link">${lang === "en" ? c.nombreEn : c.nombre}</a>`
    ).join("");
  }

  // Product grid by category
  let html = "";
  for (const cat of CATEGORIAS) {
    const prods = PRODUCTOS.filter(p => p.categoria === cat.id);
    if (!prods.length) continue;
    html += `
      <section class="cat-section" id="cat-${cat.id}">
        <h2 class="cat-title">${lang === "en" ? cat.nombreEn : cat.nombre}</h2>
        <div class="card-grid">${prods.map(cardHTML).join("")}</div>
      </section>`;
  }
  main.innerHTML = html;

  initCatNavScrollSpy();
}

/* ── Render: ficha de producto ── */
function renderProducto() {
  const main = $("#producto-detalle");
  if (!main) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const p = PRODUCTOS.find(x => x.id === id);

  if (!p) {
    main.innerHTML = `<p class="not-found">${t("Producto no encontrado.", "Product not found.")}</p>`;
    return;
  }

  // Page title
  document.title = `${p.nombre} · BlizzTherm`;

  const cat = CATEGORIAS.find(c => c.id === p.categoria);
  const catName = cat ? (lang === "en" ? cat.nombreEn : cat.nombre) : "";
  const desc = lang === "en" ? (p.descripcionEn || p.descripcion) : p.descripcion;
  const specs = lang === "en" ? (p.specsEn || p.specs || []) : (p.specs || []);
  const apps = lang === "en" ? (p.aplicacionesEn || p.aplicaciones || []) : (p.aplicaciones || []);
  const pr = calcularPrecio(p.pvp);
  const ivaNote = ivaOn ? t("IVA incluido", "VAT included") : t("Sin IVA", "Excl. VAT");

  // Gallery
  const imgs = p.imagenes?.length ? p.imagenes : [p.imagen];
  const galleryHTML = `
    <div class="gallery">
      <div class="gallery-main"><img src="${imgs[0]}" alt="${p.nombre}" id="gallery-main-img"></div>
      ${imgs.length > 1 ? `<div class="gallery-thumbs">${imgs.map((src, i) =>
        `<img src="${src}" alt="" class="thumb${i === 0 ? " active" : ""}" data-idx="${i}">`
      ).join("")}</div>` : ""}
    </div>`;

  // Specs table
  const specsHTML = specs.length ? `
    <div class="specs-section">
      <h3>${t("Especificaciones técnicas", "Technical specifications")}</h3>
      <table class="specs-table">
        ${specs.map(s => `<tr><td class="spec-label">${s.label}</td><td class="spec-value">${s.value}</td></tr>`).join("")}
      </table>
    </div>` : "";

  // Applications
  const appsHTML = apps.length ? `
    <div class="apps-section">
      <h3>${t("Aplicaciones", "Applications")}</h3>
      <div class="app-tags">${apps.map(a => `<span class="app-tag">${a}</span>`).join("")}</div>
    </div>` : "";

  // Related products
  const related = PRODUCTOS.filter(x => x.categoria === p.categoria && x.id !== p.id);
  const relatedHTML = related.length ? `
    <section class="related-section">
      <h3>${t("Productos relacionados", "Related products")}</h3>
      <div class="card-grid">${related.map(cardHTML).join("")}</div>
    </section>` : "";

  main.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">${t("Catálogo", "Catalog")}</a>
      <span class="sep">/</span>
      <a href="index.html#cat-${p.categoria}">${catName}</a>
      <span class="sep">/</span>
      <span class="current">${p.id.toUpperCase()}</span>
    </nav>

    <div class="product-layout">
      ${galleryHTML}
      <div class="product-info">
        <span class="product-model">${p.id.toUpperCase()}</span>
        <h1 class="product-title">${lang === "en" ? (p.nombreEn || p.nombre) : p.nombre}</h1>
        <div class="product-price">
          <span class="price-big">${pr.texto}</span>
          <small class="iva-note">${ivaNote}</small>
        </div>
        <div class="product-actions">
          <a href="mailto:info@blizztherm.es?subject=${encodeURIComponent(t("Consulta sobre ", "Inquiry about ") + p.nombre)}" class="btn btn-primary">
            ${t("Solicitar presupuesto", "Request quote")}
          </a>
          <a href="https://wa.me/34617879087?text=${encodeURIComponent(t("Hola, me interesa el ", "Hi, I'm interested in the ") + p.nombre)}" class="btn btn-whatsapp" target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
        <p class="product-desc">${desc}</p>
      </div>
    </div>

    ${specsHTML}
    ${appsHTML}
    ${relatedHTML}
  `;

  // Gallery thumb clicks
  $$(".thumb", main).forEach(th => {
    th.addEventListener("click", () => {
      $$(".thumb", main).forEach(t => t.classList.remove("active"));
      th.classList.add("active");
      $("#gallery-main-img").src = th.src;
    });
  });
}

/* ── Scroll-spy de categorías ── */
function initCatNavScrollSpy() {
  const links = $$(".cat-link");
  if (!links.length) return;
  const sections = $$(".cat-section");
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        const link = $(`.cat-link[href="#${entry.target.id}"]`);
        if (link) { link.classList.add("active"); link.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" }); }
      }
    }
  }, { rootMargin: "-20% 0px -70% 0px" });
  sections.forEach(s => observer.observe(s));
}

/* ── Toggle IVA ── */
function toggleIva() {
  ivaOn = !ivaOn;
  try { localStorage.setItem("bt-iva", ivaOn); } catch {}
  actualizarPreciosEnPagina();
  actualizarBotonIva();
}

function actualizarPreciosEnPagina() {
  if ($("#catalogo")) renderIndex();
  if ($("#producto-detalle")) renderProducto();
}

function actualizarBotonIva() {
  const btn = $(".iva-toggle");
  if (btn) btn.textContent = ivaOn ? t("Precio sin IVA", "Price excl. VAT") : t("Precio con IVA", "Price incl. VAT");
}

/* ── Toggle idioma ── */
function toggleLang() {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("bt-lang", lang); } catch {}
  actualizarUI();
}

function actualizarUI() {
  document.documentElement.lang = lang;
  // Update lang toggle
  const langBtn = $(".lang-toggle");
  if (langBtn) langBtn.textContent = lang === "es" ? "EN" : "ES";
  // Re-render
  if ($("#catalogo")) renderIndex();
  if ($("#producto-detalle")) renderProducto();
  actualizarBotonIva();
  // Update static texts
  $$("[data-es]").forEach(el => {
    el.textContent = lang === "en" ? el.dataset.en : el.dataset.es;
  });
}

/* ── Tema oscuro/claro ── */
function initTheme() {
  let tema;
  try { tema = localStorage.getItem("bt-theme"); } catch {}
  if (!tema) {
    tema = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", tema);
  updateThemeBtn(tema);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("bt-theme", next); } catch {}
  updateThemeBtn(next);
}

function updateThemeBtn(tema) {
  const btn = $(".theme-toggle");
  if (btn) btn.textContent = tema === "dark" ? "☀️" : "🌙";
}

/* ── Menú móvil ── */
function initMobileMenu() {
  const toggle = $(".menu-toggle");
  const nav = $(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
}

/* ── Footer dinámico ── */
function renderFooter() {
  const footer = $(".site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="wrap footer-inner">
      <div class="footer-brand">
        <strong>BlizzTherm</strong> &mdash; ${t("Calefacción Industrial", "Industrial Heating")}
        <br><small>Toolsplace, S.L. &middot; CIF B42669192</small>
        <br><small>C/ Segorbe 45, P.I. Carrús, Elche (Alicante)</small>
      </div>
      <div class="footer-links">
        <a href="mailto:info@blizztherm.es">info@blizztherm.es</a>
        <a href="tel:+34617879087">+34 617 879 087</a>
        <a href="https://blizztherm.es" target="_blank" rel="noopener">blizztherm.es</a>
      </div>
      <div class="footer-social">
        <a href="https://www.instagram.com/blizztherm" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
        <a href="https://www.facebook.com/blizztherm" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
        <a href="https://www.linkedin.com/company/blizztherm/" target="_blank" rel="noopener" aria-label="LinkedIn">LI</a>
      </div>
    </div>
  `;
}

/* ── Arranque ── */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  renderFooter();
  actualizarBotonIva();

  // Lang toggle
  const langBtn = $(".lang-toggle");
  if (langBtn) { langBtn.textContent = lang === "es" ? "EN" : "ES"; langBtn.addEventListener("click", toggleLang); }

  // Theme toggle
  const themeBtn = $(".theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // IVA toggle
  const ivaBtn = $(".iva-toggle");
  if (ivaBtn) ivaBtn.addEventListener("click", toggleIva);

  // Render
  if ($("#catalogo")) renderIndex();
  if ($("#producto-detalle")) renderProducto();

  // Update static translated elements
  $$("[data-es]").forEach(el => {
    el.textContent = lang === "en" ? el.dataset.en : el.dataset.es;
  });
});
