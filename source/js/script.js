const nav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

nav.classList.add('main-nav--closed');

navToggle.addEventListener('click' , () => {
    nav.classList.toggle('main-nav--closed');
    nav.classList.toggle('main-nav--opened');
});