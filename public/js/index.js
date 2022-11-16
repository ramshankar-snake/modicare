$(document).ready(function() {
    var heroBannerCarousel = new Swiper('.hero-banner-carousel-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.hero-banner-carousel-container .swiper-button-next',
            prevEl: '.hero-banner-carousel-container .swiper-button-prev',
        },
        pagination: {
            el: '.hero-banner-carousel-container .swiper-pagination',
        },
        on: {
            resize: function(swiper) {
                fixCarouselNavPositioning(swiper);
            },
            imagesReady: function(swiper) {
                fixCarouselNavPositioning(swiper);
            },
            slideChangeTransitionEnd: function(swiper) {
                fixCarouselNavPositioning(swiper);
            },
        }
    });

    var mostLovedProductsCarousel = new Swiper('#most-loved-products-carousel .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '#most-loved-products-carousel .swiper-button-next',
            prevEl: '#most-loved-products-carousel .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });

    var justInProductsCarousel = new Swiper('#just-in-products-carousel .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '#most-loved-products-carousel .swiper-button-next',
            prevEl: '#most-loved-products-carousel .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });

    var topDealsProductsCarousel = new Swiper('#top-deals-products-carousel .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '#most-loved-products-carousel .swiper-button-next',
            prevEl: '#most-loved-products-carousel .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });

    var gallery = new Swiper('.products-showcase-gallery', {
        slidesPerView: 'auto',
        freeMode: true,
        grabCursor: true,
        navigation: {
            nextEl: '.products-showcase-gallery .swiper-button-next',
            prevEl: '.products-showcase-gallery .swiper-button-prev',
        },
        on: {
            imagesReady: function() {
                fixGalleryNavPositioning();
            },
            slideChangeTransitionEnd: function() {
                fixGalleryNavPositioning();
            },
        }
    });
});

$(document).on('change', '#home-contact-us-type-toggle', function(e) {
    $('.home-contact-us-type').toggleClass('active');
});

$(window).resize(function() {
    fixGalleryNavPositioning();
});

function fixGalleryNavPositioning() {
    var swiperSlideActive = $('.products-showcase-gallery .swiper-slide-active');
    var swiperSlideActiveImage = swiperSlideActive.find('img');
    var swiperSlidePrevNext = $('.products-showcase-gallery .swiper-button-next, .products-showcase-gallery .swiper-button-prev');
    swiperSlidePrevNext.css("top", swiperSlideActiveImage[0].clientHeight / 2);
}