$(document).ready(function() {
    var careersCarousel1 = new Swiper('.careers-carousel-1', {
        loop: true,
        navigation: {
            nextEl: '.careers-carousel .swiper-button-next',
            prevEl: '.careers-carousel .swiper-button-prev',
        },
        on: {
            resize: function() {
                fixCareersCarousel1NavPositioning();
            },
            imagesReady: function() {
                fixCareersCarousel1NavPositioning();
            },
            slideChangeTransitionEnd: function() {
                fixCareersCarousel1NavPositioning();
            },
        }
    });

    var careersCarousel2 = new Swiper('.careers-carousel-2', {
        loop: true,
        navigation: {
            nextEl: '.careers-carousel .swiper-button-next',
            prevEl: '.careers-carousel .swiper-button-prev',
        },
        on: {
            resize: function() {
                fixCareersCarousel2NavPositioning();
            },
            imagesReady: function() {
                fixCareersCarousel2NavPositioning();
            },
            slideChangeTransitionEnd: function() {
                fixCareersCarousel2NavPositioning();
            },
        }
    });

    var careersGallery = new Swiper('.careers-gallery', {
        loop: true,
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: '.careers-gallery-next',
            prevEl: '.careers-gallery-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });

    var awards = new Swiper('.awards .swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        initialSlide: 1,
        navigation: {
            nextEl: '.awards .swiper-button-next',
            prevEl: '.awards .swiper-button-prev',
        },
        on: {
            resize: function() {
                fixAwardsCarouselNavPositioning();
            },
            imagesReady: function() {
                fixAwardsCarouselNavPositioning();
                setTimeout(function() {
                    $('.awards .awards-carousel-item').css({
                        transition: 'transform 0.2s linear'
                    });
                }, 1000);
            },
            slideChangeTransitionEnd: function() {
                fixAwardsCarouselNavPositioning();
            },
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
            },
        },
    });
});

function fixAwardsCarouselNavPositioning() {
    var swiperSlideActive = $('.awards-carousel .swiper-slide-active');
    var swiperSlideActiveImage = swiperSlideActive.find('img');
    var swiperSlidePrevNext = $('.awards .swiper-button-next, .awards .swiper-button-prev');
    swiperSlidePrevNext.css("top", swiperSlideActiveImage[0].clientHeight / 2);
}

function fixCareersCarousel1NavPositioning() {
    var swiperSlideActive = $('.careers-carousel-1 .swiper-slide-active');
    var swiperSlideActiveImage = swiperSlideActive.find('img');
    var titleOffset = swiperSlideActiveImage.offset().top - swiperSlideActive.offset().top;
    var swiperSlidePrevNext = $('.careers-carousel-1 .swiper-button-next, .careers-carousel-1 .swiper-button-prev');
    swiperSlidePrevNext.css("top", titleOffset + (swiperSlideActiveImage[0].clientHeight / 2));
}

function fixCareersCarousel2NavPositioning() {
    var swiperSlideActive = $('.careers-carousel-2 .swiper-slide-active');
    var swiperSlideActiveImage = swiperSlideActive.find('img');
    var swiperSlidePrevNext = $('.careers-carousel-2 .swiper-button-next, .careers-carousel-2 .swiper-button-prev');
    swiperSlidePrevNext.css("top", swiperSlideActiveImage[0].clientHeight / 2);
}