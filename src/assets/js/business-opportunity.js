$(document).ready(function() {
    new Swiper('.success-stories-carousel', {
        loop: true,
		centeredSlides: false,
        navigation: {
            nextEl: '.success-stories-carousel .swiper-button-next',
            prevEl: '.success-stories-carousel .swiper-button-prev',
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
});