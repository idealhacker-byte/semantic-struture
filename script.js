// Simple mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('is-open');
});

// Close mobile menu when a link is clicked
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('is-open');
  });
});
