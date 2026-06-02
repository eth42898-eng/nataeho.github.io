
document.getElementById('year').textContent = new Date().getFullYear();


const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
});


const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  toggle.classList.remove('active');
  navLinks.classList.remove('open');
}));


const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target);} });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
