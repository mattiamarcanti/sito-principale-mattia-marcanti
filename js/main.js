'use strict';

/* ─── Loader ──────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader')?.classList.add('done'), 600);
});

/* ─── Navbar scroll + back-to-top ────────────── */
const navbar  = document.getElementById('navbar');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar?.classList.toggle('scrolled', y > 50);
  backTop?.classList.toggle('show', y > 300);
}, { passive: true });

document.getElementById('backTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Mobile menu ─────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function closeMenu() {
  navLinks?.classList.remove('open');
  hamburger?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
  navOverlay?.classList.remove('show');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  navOverlay?.classList.toggle('show', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Close on overlay click */
navOverlay?.addEventListener('click', closeMenu);

/* Close button inside drawer */
document.getElementById('navClose')?.addEventListener('click', closeMenu);

/* Close when a nav link is clicked */
navLinks?.querySelectorAll('a, button:not(#navClose)').forEach(el => {
  el.addEventListener('click', closeMenu);
});

/* ─── CV Download ─────────────────────────────── */
const cvByLang = {
  it: 'source/pdf/CVMattiaMarcanti.pdf',
  en: 'source/pdf/CVMattiaMarcantiEN.pdf',
  fr: 'source/pdf/CVMattiaMarcantiFR.pdf',
  es: 'source/pdf/CVMattiaMarcantiES.pdf',
  zh: 'source/pdf/CVMattiaMarcantiCH.pdf',
  ar: 'source/pdf/CVMattiaMarcantiAR.pdf',
};
document.getElementById('downloadCV')?.addEventListener('click', () => {
  const lang = localStorage.getItem('mm-lang') || 'it';
  window.open(cvByLang[lang] || cvByLang.it, '_blank');
});

/* ─── PDF helper ──────────────────────────────── */
function openPDF(path) {
  window.open(path, '_blank');
}
window.openPDF = openPDF;

/* ─── Scroll Reveal ───────────────────────────── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = Number(entry.target.dataset.revealDelay) || 0;
    setTimeout(() => entry.target.classList.add('visible'), delay);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

// Stagger siblings inside the same parent
document.querySelectorAll('.reveal').forEach(el => {
  const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
  el.dataset.revealDelay = siblings.indexOf(el) * 80;
  revealObs.observe(el);
});

/* ─── Carousel (Gallery) ──────────────────────── */
const GALLERY_DIR = 'gallery/';
const GALLERY_JSON = 'gallery/gallery.json';

const PER_SLIDE = 7;

/* Mosaic layout patterns — each is an array of 8 grid-area strings
   using row-start / col-start / row-end / col-end on a 2-row × 6-col grid.
   All 12 column-slots (6 per row) must be filled exactly. */
const MOSAIC_PATTERNS = [
  // Pattern A: row1=[2,3,1] row2=[2,2,1,1]
  ['1/1/2/3','1/3/2/6','1/6/2/7', '2/1/3/3','2/3/3/5','2/5/3/6','2/6/3/7'],
  // Pattern B: row1=[1,3,2] row2=[2,1,1,2]
  ['1/1/2/2','1/2/2/5','1/5/2/7', '2/1/3/3','2/3/3/4','2/4/3/5','2/5/3/7'],
  // Pattern C: row1=[3,1,2] row2=[1,2,1,2]
  ['1/1/2/4','1/4/2/5','1/5/2/7', '2/1/3/2','2/2/3/4','2/4/3/5','2/5/3/7']
];

const track  = document.getElementById('carouselTrack');
const dotsEl = document.getElementById('carouselDots');

let cur = 0;
let timer = null;
let touchX = 0;

function buildCarousel(images) {
  if (!track || !images.length) return 0;

  const slides = [];
  for (let i = 0; i < images.length; i += PER_SLIDE) {
    slides.push(images.slice(i, i + PER_SLIDE));
  }

  track.innerHTML = slides.map((slide, si) => {
    const pattern = MOSAIC_PATTERNS[si % MOSAIC_PATTERNS.length];
    const items = slide.map((src, idx) => {
      const area = pattern[idx] || '1/1/2/2';
      return `<div class="mosaic-item" style="grid-area:${area}">
        <img src="${src}" alt="Foto gallery" class="carousel-img" loading="lazy">
      </div>`;
    }).join('');
    return `<div class="carousel-slide" aria-label="Slide ${si + 1}">${items}</div>`;
  }).join('');

  if (dotsEl) {
    dotsEl.innerHTML = slides.map((_, i) =>
      `<button class="c-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="Vai alla slide ${i + 1}"></button>`
    ).join('');
    dotsEl.querySelectorAll('.c-dot').forEach(d => {
      d.addEventListener('click', () => goTo(+d.dataset.i));
    });
  }

  return slides.length;
}

function render(total) {
  if (!track) return;
  track.style.transform = `translateX(-${cur * 100}%)`;
  dotsEl?.querySelectorAll('.c-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
}

function goTo(idx) {
  const total = track?.children.length || 0;
  cur = ((idx % total) + total) % total;
  render(total);
  restartTimer(total);
}

function restartTimer(total) {
  clearInterval(timer);
  timer = setInterval(() => goTo(cur + 1), 6000);
}

function initCarouselEvents(totalSlides) {
  restartTimer(totalSlides);

  document.getElementById('carouselPrev')?.addEventListener('click', () => goTo(cur - 1));
  document.getElementById('carouselNext')?.addEventListener('click', () => goTo(cur + 1));

  const wrap = document.getElementById('carousel');
  wrap?.addEventListener('mouseenter', () => clearInterval(timer));
  wrap?.addEventListener('mouseleave', () => restartTimer(totalSlides));

  // Touch swipe
  wrap?.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  wrap?.addEventListener('touchend',   e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(cur + (diff > 0 ? 1 : -1));
  });
}

/* ─── Lightbox ───────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) {
  if (!lightbox) return;
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  clearInterval(timer);
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightboxImg.src = '';
  document.body.style.overflow = '';
  restartTimer(track?.children.length || 0);
}

lightbox?.addEventListener('click', e => {
  if (e.target === lightboxImg) return;
  closeLightbox();
});
document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ─── Init Gallery ───────────────────────────────── */
fetch(GALLERY_JSON)
  .then(r => r.json())
  .then(names => {
    const images = names.map(name => GALLERY_DIR + name);
    const totalSlides = buildCarousel(images);
    if (totalSlides > 0) initCarouselEvents(totalSlides);

    // Attach lightbox click to all gallery images
    track?.querySelectorAll('.carousel-img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openLightbox(img.src));
    });
  })
  .catch(err => console.error('Gallery: impossibile caricare gallery.json', err));

/* ─── Contact Form ────────────────────────────── */
document.getElementById('contactForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const form      = e.target;
  const submitBtn = document.getElementById('submitBtn');
  const btnText   = document.getElementById('btnText');
  const btnLoad   = document.getElementById('btnLoad');
  const success   = document.getElementById('formSuccess');

  const nome     = form.nome.value.trim();
  const cognome  = form.cognome.value.trim();
  const email    = form.email.value.trim();
  const msg      = form.messaggio.value.trim();

  if (!nome || !cognome || !email || !msg) return;

  // Loading state
  btnText.style.display = 'none';
  btnLoad.style.display = 'inline-flex';
  submitBtn.disabled = true;

  try {
    const qs = new URLSearchParams({ name: nome, surname: cognome, email, message: msg });
    const res = await fetch(`action/salvaMessaggio.php?${qs}`);
    if (res.ok) {
      form.querySelectorAll('.form-group, .form-row, button').forEach(el => el.style.display = 'none');
      success.style.display = 'block';
    }
  } catch {
    // silent fail — show success anyway (good UX for offline/errors)
    form.querySelectorAll('.form-group, .form-row, button').forEach(el => el.style.display = 'none');
    success.style.display = 'block';
  }
});
