const nav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

nav.classList.add('.nav--closed');

navToggle.addEventListener('.click' , () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
});