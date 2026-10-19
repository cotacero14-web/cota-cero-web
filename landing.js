// Reveal una sola vez al entrar en pantalla; header sólido tras el hero
const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('in');
    reveal.unobserve(e.target);
  }
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.rv, .fase .im, .card').forEach((el) => reveal.observe(el));

const header = document.getElementById('top');
const onScroll = () => header.classList.toggle('solid', window.scrollY > 40);
onScroll();
addEventListener('scroll', onScroll, { passive: true });
