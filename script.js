// Altid start fra toppen — virker på iOS Safari
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

window.addEventListener('pageshow', function () {
  // Fjern evt. hash fra URL så iOS ikke scroller til anker ved reload
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }
  window.scrollTo(0, 0);
});

// Mobil menu
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');
let savedScroll = 0;

function openMenu() {
  savedScroll = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScroll}px`;
  document.body.style.width = '100%';
  navLinks.classList.add('open');
}

function closeMenu() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, savedScroll);
  navLinks.classList.remove('open');
}

burger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

// Luk menu når man klikker et link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Scroll-ind animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.services__item, .pricelist__item, .portfolio__featured, .about__text, .contact__info-block, .process__step').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Kontaktformular — Formspree Ajax
window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
formspree('initForm', { formElement: '#contactForm', formId: 'xvzygpry' });
