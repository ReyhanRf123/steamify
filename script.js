// Script interaktif: smooth scroll, pelacak klik, dan accordion FAQ

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const waButtons = document.querySelectorAll('a[href*="wa.me"]');
waButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Tombol WhatsApp diklik:", btn.href);
  });
});

// Accordion interaktif
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === 'block';

    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');

    if (!isOpen) {
      content.style.display = 'block';
    }
  });
});

document.querySelectorAll('.pricing .card .cta').forEach(button => {
  button.style.marginTop = '1rem';
});