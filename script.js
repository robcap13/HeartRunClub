// Menu mobile
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

// Anno nel footer
document.getElementById('year').textContent = new Date().getFullYear();

// Eventi: "Prossimo" / "Già fatto" in base alla data (data-date="AAAA-MM-GG")
// e riordino: prima i prossimi (dal più vicino), poi i passati (dal più recente).
(function () {
  const wrap = document.querySelector('.posters');
  if (!wrap) return;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const cards = [...wrap.querySelectorAll('.poster')].map(el => {
    const d = new Date(el.dataset.date + 'T23:59:59');
    const past = d < today;
    el.classList.toggle('past', past);
    el.querySelector('.tag').textContent = past ? 'Già fatto' : 'Prossimo';
    return { el, d, past };
  });
  const upcoming = cards.filter(c => !c.past).sort((a, b) => a.d - b.d);
  const done = cards.filter(c => c.past).sort((a, b) => b.d - a.d);
  [...upcoming, ...done].forEach(c => wrap.appendChild(c.el));
})();

// Animazioni allo scroll
const targets = document.querySelectorAll('.section .container > *:not(.posters), .poster, .value');
targets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
targets.forEach(el => io.observe(el));

// Modulo: apre l'app email (nessun backend necessario su GitHub Pages)
document.getElementById('joinForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent('Voglio unirmi a Heart Run Club');
  const body = encodeURIComponent(`Ciao! Sono ${f.get('nome')} (${f.get('email')}) e vorrei correre con voi.`);
  window.location.href = `mailto:ciao@heartrunclub.it?subject=${subject}&body=${body}`;
});
