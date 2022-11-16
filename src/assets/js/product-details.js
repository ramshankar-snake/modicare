$(window).on("load", function() {
    var galleryThumbs = new Swiper('.pdt-main-gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        on: {
            init: function(swiper) {
                var jqSwiper = $(swiper.el);
                jqSwiper.find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
                jqSwiper.fadeIn(500);
            },
            resize: function(swiper) {
                $(swiper.el).find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
            }
        }
    });
    var galleryTop = new Swiper('.pdt-main-gallery-top', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        on: {
            init: function(swiper) {
                var jqSwiper = $(swiper.el)
                jqSwiper.find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
                jqSwiper.fadeIn(500);
            },
            resize: function(swiper) {
                $(swiper.el).find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
            },
            slideChange: function (swiper) {
                var jqSwiper = $(swiper.el);
                jqSwiper.find('video').each(function() {
                    $(this)[0].pause();
                });
                var jqActiveSlideVideo = jqSwiper.find('.swiper-slide:nth-of-type(' + (swiper.activeIndex + 1) + ') video');
                if (jqActiveSlideVideo.length) {
                    jqActiveSlideVideo[0].play();
                }
            },
        }
    });
    var galleryMobile = new Swiper('.pdt-main-gallery-mobile', {
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChange: function (swiper) {
                var jqSwiper = $(swiper.el);
                jqSwiper.find('video').each(function() {
                    $(this)[0].pause();
                });
                var jqActiveSlideVideo = jqSwiper.find('.swiper-slide:nth-of-type(' + (swiper.activeIndex + 1) + ') video');
                if (jqActiveSlideVideo.length) {
                    jqActiveSlideVideo[0].play();
                }
            },
        }
    });
});