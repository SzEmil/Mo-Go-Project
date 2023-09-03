(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

const listItems = document.querySelectorAll('.mobile-nav-list__link');
console.log(listItems);
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    return;
  } else {
    mobileMenu.classList.remove('is-open');
  }
});

listItems.forEach(item => {
  item.addEventListener('click', () => {
    setTimeout(() => {
      mobileMenu.classList.remove('is-open');
    }, 100);
  });
});
