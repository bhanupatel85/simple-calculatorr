document.addEventListener('DOMContentLoaded', () => {
  // Calculator
  const form = document.getElementById('add-form');
  const a = document.getElementById('a');
  const b = document.getElementById('b');
  const result = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sum = Number(a.value) + Number(b.value);
    result.textContent = Number.isNaN(sum) ? '—' : sum;
  });

  // Nav toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Contact form (demo - saves to localStorage)
  const contactForm = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        msg: document.getElementById('msg').value,
        time: new Date().toISOString()
      };
      const msgs = JSON.parse(localStorage.getItem('msgs') || '[]');
      msgs.push(data);
      localStorage.setItem('msgs', JSON.stringify(msgs));
      contactForm.reset();
      status.textContent = 'Message saved locally (demo only).';
    });
  }
});
