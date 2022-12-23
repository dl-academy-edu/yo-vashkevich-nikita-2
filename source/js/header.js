//HEADER BURGER MENU

const menu = document.querySelector('.section-menu');
const buttonMenu = document.querySelector('.button-menu');
const buttonMenuClose = document.querySelector('.button-menu-close');
const body = document.querySelector('body');

//const emailInput = document.getElementById('name');
//OPEN MENU
buttonMenu.addEventListener('click', function() {
	menu.classList.add('section-menu-open');
})

//BUTTON MENU NONE
buttonMenu.addEventListener('click', function() {
   buttonMenu.classList.add('button-menu-none');
})

//BUTTON-CLOSE VISIBLE
buttonMenu.addEventListener('click', function() {
   buttonMenuClose.classList.add('button-menu-close-open');
})

// CLOSE-MENU
buttonMenuClose.addEventListener('click', function() {
   menu.classList.remove('section-menu-open');
})


//BUTTON-CLOSE NONE
buttonMenuClose.addEventListener('click', function() {
   buttonMenuClose.classList.remove('button-menu-close-open');
   buttonMenu.classList.remove('button-menu-none');
	body.classList.remove('body-scroll-none');
})


//BODY SCROLL NONE
buttonMenu.addEventListener('click', function() {
	body.classList.add('body-scroll-none');
})