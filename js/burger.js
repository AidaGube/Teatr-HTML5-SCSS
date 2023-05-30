const iconMenus = document.querySelectorAll('.header__burger');

iconMenus.forEach(function(iconMenu) {
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    const menuHeader = document.querySelector('.header__menu');
    menuHeader.classList.toggle('_active');
  });
});