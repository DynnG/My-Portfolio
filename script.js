const content = window.portfolio;
document.querySelectorAll('[data-name]').forEach(el => el.textContent = content.name);
document.querySelector('#bio').textContent = content.bio;
document.querySelector('#year').textContent = new Date().getFullYear();
document.title = `${content.name} · Personal portfolio`;
if (content.photo) {
  const img = document.createElement('img');
  img.src = content.photo; img.alt = content.photoAlt;
  img.addEventListener('load', () => document.querySelector('#portrait').replaceChildren(img));
}
const contact = document.querySelector('#contact-link');
contact.href = content.contactUrl;
contact.firstChild.textContent = `${content.contactLabel} `;
const grid = document.querySelector('#skill-grid');
function renderSkills(filter) {
  grid.replaceChildren();
  content.skills.filter(skill => filter === 'All' || skill.category === filter).forEach(skill => {
    const card = document.createElement('article'); card.className = 'skill-card';
    const icon = document.createElement('span'); icon.className = 'skill-icon'; icon.textContent = skill.icon;
    const heading = document.createElement('h3'); heading.textContent = skill.name;
    const note = document.createElement('p'); note.textContent = skill.note;
    card.append(icon, heading, note); grid.append(card);
  });
}
renderSkills('All');
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(other => {
    other.classList.toggle('active', other === button);
    other.setAttribute('aria-pressed', String(other === button));
  });
  renderSkills(button.dataset.filter);
}));
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const profileCard = document.querySelector('.portrait-card');
function flipProfile() {
  const flipped = profileCard.classList.toggle('is-flipped');
  profileCard.setAttribute('aria-pressed', String(flipped));
  profileCard.setAttribute('aria-label', flipped ? 'Show portrait' : 'Flip portrait to show QR code');
  profileCard.querySelector('.portrait-front').setAttribute('aria-hidden', String(flipped));
  profileCard.querySelector('.portrait-back').setAttribute('aria-hidden', String(!flipped));
}
profileCard.addEventListener('click', flipProfile);
profileCard.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flipProfile(); }
});
if (!reducedMotion.matches) {
  let frame;
  document.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      document.body.classList.add('cursor-active');
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    });
  });
  document.addEventListener('pointerleave', () => document.body.classList.remove('cursor-active'));
  window.addEventListener('blur', () => document.body.classList.remove('cursor-active'));
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    card.addEventListener('pointerleave', () => card.style.transform = '');
  });
}
const navLinks = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('current', link.hash === `#${entry.target.id}`));
}), { rootMargin: '-20% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
