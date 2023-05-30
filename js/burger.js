const iconMenu = document.querySelectorAll('.header__burger');

if (iconMenu) {

	const menuHeader = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
	menuHeader.classList.toggle('_active');
	});

}