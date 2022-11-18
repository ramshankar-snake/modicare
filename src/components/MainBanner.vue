<template>
    <section class="hero-banner-carousel">
        <div class="hero-banner-carousel-container swiper-container">
         
          
       
            <div class="swiper-wrapper">
              <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="0"
              navigation
              :pagination="{ clickable: true }"
             
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                </swiper>
            </div>
    
            <div class="swiper-button">
                <img src="@/assets/images/home/carousel-arrow-left-white.svg" alt="Previous" @click="swiper.slidePrev()" />
            </div>
            <div class="swiper-button" >
                <img src="@/assets/images/home/carousel-arrow-right-white.svg" alt="Next" @click="swiper.slideNext()" />
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>
<script>
// export default {
//     name: 'MainBanner',
// }


import {  Pagination, A11y } from 'swiper';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
 
  
  SwiperCore.use([Navigation]);
  export default {
    name: 'MainBanner',
   
    components: {
      Swiper,
      SwiperSlide,
      
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const swiper = useSwiper();
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        swiper,
        onSwiper,
        onSlideChange,
       
        modules: [Navigation, Pagination, A11y],
        swiperOptions: {
                    loop: true,
                    
                    centeredSlides: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
      };
    },
  };
</script>