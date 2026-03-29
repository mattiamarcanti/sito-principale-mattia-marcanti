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
document.getElementById('downloadCV')?.addEventListener('click', () => {
  window.open('source/pdf/CVMattiaMarcanti.pdf', '_blank');
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
const GALLERY = [
  'source/image/gallery0.jpg',
  'source/image/gallery1.jpg',
  'source/image/gallery2.jpg',
  'source/image/gallery3.jpg',
  'source/image/gallery4.jpg',
  'source/image/gallery5.jpg',
  'source/image/gallery6.jpg',
  'source/image/gallery7.jpg',
  'source/image/gallery8.jpg',
  'source/image/gallery9.jpg',
  'source/image/gallery10.jpg',
  'source/image/gallery11.jpg',
  'source/image/galleryNew1.jpg',
  'source/image/galleryNew2.jpg',
  'source/image/galleryNew3.png',
  'source/image/galleryNew4.jpg',
  'source/image/galleryNew5.jpg',
  'source/image/galleryNew6.jpg',
  'source/image/galleryNew7.jpg',
  'source/image/galleryNew8.jpg',
  'source/image/galleryNew9.jpg',
  'source/image/galleryNew10.jpg',
  'source/image/galleryNew11.jpg',
  'source/image/galleryNew12.jpg',
  'source/image/galleryNew13.jpg',
  'source/image/galleryNew14.jpg',
  'source/image/galleryNew15.jpg',
  'source/image/galleryNew16.jpg',
  'source/image/galleryNew17.jpg',
  'source/image/galleryNew18.jpg',
  'source/image/galleryNew19.jpg',
  'source/image/galleryNew20.jpg',
  'source/image/galleryNew21.jpg',
  'source/image/galleryNew22.jpg',
  'source/image/galleryNew23.jpg',
  'source/image/galleryNew24.jpg',
];

const PER_SLIDE = 3;
const track     = document.getElementById('carouselTrack');
const dotsEl    = document.getElementById('carouselDots');

let cur = 0;
let timer = null;
let touchX = 0;

function buildCarousel() {
  if (!track) return 0;

  const slides = [];
  for (let i = 0; i < GALLERY.length; i += PER_SLIDE) {
    slides.push(GALLERY.slice(i, i + PER_SLIDE));
  }

  track.innerHTML = slides.map((slide, si) =>
    `<div class="carousel-slide" aria-label="Slide ${si + 1}">
      ${slide.map(src =>
        `<img src="${src}" alt="Foto gallery" class="carousel-img" loading="lazy">`
      ).join('')}
    </div>`
  ).join('');

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
  timer = setInterval(() => goTo(cur + 1), 5000);
}

const totalSlides = buildCarousel();
if (totalSlides > 0) {
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
