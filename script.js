// Mobil menu
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Luk menu når man klikker et link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
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
