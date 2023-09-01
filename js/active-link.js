const listItems = document.querySelectorAll('.nav-list__link');
const homeLink = document.querySelector('#home');

homeLink.classList.add('activeLink');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(li => {
      li.classList.remove('activeLink');
    });

    item.classList.add('activeLink');
  });
});
