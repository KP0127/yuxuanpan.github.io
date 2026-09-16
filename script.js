const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation?.classList.toggle('is-open', !expanded);
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
