<template>
 
  <SideMenu></SideMenu>
<main class="main-container main-container__home">
    <MainBanner></MainBanner>

    <section class="products-showcase">
        <div class="products-showcase-container">
            <StopShop></StopShop>
    
            <MostLoved></MostLoved>
    
            <JustIn></JustIn>

            <TopDeals></TopDeals>
    
            
        </div>
    </section>

    <GuranTee></GuranTee>

    <HomeContact></HomeContact>
</main>

 
<component :is="script" src="/src/assets/js/main.js" ></component>

</template>

<script>
// export default {
  
//   props: {
//     msg: String
//   }
// }

import SideMenu from './SideMenu.vue';
import MainBanner from './MainBanner.vue';
import StopShop from './StopShop.vue';
import MostLoved from './MostLoved.vue';
import JustIn from './JustIn.vue';
import TopDeals from './TopDeals.vue';
import GuranTee from './GuranTee.vue';
import HomeContact from './HomeContact.vue';


import $ from 'jquery';
import Swiper from '../assets/js/swiper-bundle.min.js';



  
  export default {
    name: 'HelloWorld',
   
    components: {
     
      
      'SideMenu'   : SideMenu,
      'MainBanner' : MainBanner,
      'StopShop'   : StopShop,
      'MostLoved'  : MostLoved,
      'JustIn'     : JustIn,
      'TopDeals'   : TopDeals,
      'GuranTee'   : GuranTee,
      'HomeContact': HomeContact,
    },
    mounted() {
      $(function(){
    
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
            nextEl: '#just-in-products-carousel .swiper-button-next',
            prevEl: '#just-in-products-carousel .swiper-button-prev',
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
            nextEl: '#top-deals-products-carousel .swiper-button-next',
            prevEl: '#top-deals-products-carousel .swiper-button-prev',
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
    // swiperSlidePrevNext.css("top", swiperSlideActiveImage[0].clientHeight / 2);
}
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
