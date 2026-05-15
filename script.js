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

document.querySelectorAll('.services__item, .pricelist__item, .portfolio-card, .about__text, .contact__info-block, .process__step, .location__layout').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Kontaktformular — vis tak-besked
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action');
    if (action.includes('XXXXXXXX')) {
      // Formspree ikke sat op endnu — vis vejledning
      e.preventDefault();
      alert('Formularen er ikke konfigureret endnu.\n\nGå til formspree.io, opret en konto, og erstat XXXXXXXX i index.html med dit form-id.');
    }
    // Hvis action er korrekt konfigureret, sendes formularen normalt
  });
}
