$(document).ready(function() {
    var testimonialCarousel = new Swiper('.prime-delivery-testimonials-carousel', {
        loop: true,
        navigation: {
            nextEl: '.prime-delivery-testimonials-carousel .swiper-button-next',
            prevEl: '.prime-delivery-testimonials-carousel .swiper-button-prev',
        },
        on: {
            resize: function() {
                fixTestimonialNavPositioning();
            },
            imagesReady: function() {
                fixTestimonialNavPositioning();
            },
            slideChangeTransitionEnd: function() {
                fixTestimonialNavPositioning();
            },
        }
    });

    var locationCarousel = new Swiper('.prime-delivery-locations-carousel', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.prime-delivery-locations .swiper-button-next',
            prevEl: '.prime-delivery-locations .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});

function fixTestimonialNavPositioning() {
    var swiperSlideActive = $('.prime-delivery-testimonials-carousel .swiper-slide-active');
    var swiperSlideActiveImage = swiperSlideActive.find('img');
    var swiperSlidePrevNext = $('.prime-delivery-testimonials-carousel .swiper-button-next, .prime-delivery-testimonials-carousel .swiper-button-prev');
    swiperSlidePrevNext.css("top", swiperSlideActiveImage[0].clientHeight / 2);
}