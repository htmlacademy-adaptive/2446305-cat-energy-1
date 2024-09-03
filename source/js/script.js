const nav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const sliderHandle = document.querySelector('.slider__handle');
const slider = document.querySelector('.slider');

nav.classList.add('main-nav--closed');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('main-nav--closed');
    nav.classList.toggle('main-nav--opened');
});

if (sliderHandle) {
    let flag = false;
    sliderHandle.addEventListener('click', () => {
        if (!flag) {
            slider.classList.add('slider--after');
            flag = true;
        } else {
            slider.classList.toggle('slider--after');
            slider.classList.toggle('slider--before');
        }

    })
}
