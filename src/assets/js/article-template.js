$(document).ready(function() {
    new Swiper('.article-gallery-carousel', {
        loop: true,
        navigation: {
            nextEl: '.article-gallery-carousel .swiper-button-next',
            prevEl: '.article-gallery-carousel .swiper-button-prev',
        },
    });
});