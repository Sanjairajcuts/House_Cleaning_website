const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('hamburger--open');
})

const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3, 
    spaceBetween: 20, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3, 
        },
        768: {
            slidesPerView: 2, 
        },
        480: {
            slidesPerView: 1, 
        },
    },
});

