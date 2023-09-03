const listItems = document.querySelectorAll('.navigation__link');
const menuItems = document.querySelectorAll('.mobile-nav-list__link');
const homeLinks = document.querySelectorAll('#home');

homeLinks.forEach(link => {
  link.classList.add('activeLink');
});

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(li => {
      li.classList.remove('activeLink');
    });

    item.classList.add('activeLink');
  });
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(li => {
      li.classList.remove('activeLink');
    });

    item.classList.add('activeLink');
  });
});
