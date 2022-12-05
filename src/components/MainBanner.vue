<template>


        <section class="hero-banner-carousel">
            <div class="hero-banner-carousel-container swiper-container">
                <div class="swiper-wrapper">
                        <div v-for="banner in banners" class="swiper-slide hero-banner-carousel-slide">
                            <picture>
                                <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                                <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                                <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                                <img :src="'https://media.modicare.com/prelogin/banners/' +banner.BannerImage" class="hero-banner-carousel-slide-banner" alt="">
                            </picture>
                        </div>
                        
                </div>
        
                <div class="swiper-button-prev">
                    <img src="@/assets/images/home/carousel-arrow-left-white.svg" alt="Previous" />
                </div>
                <div class="swiper-button-next">
                    <img src="@/assets/images/home/carousel-arrow-right-white.svg" alt="Next" />
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
   
</template>
<script>
import axios from "axios";
export default {
    name: 'MainBanner',
    data(){
                return{
                    banners: []
                }
            },
    async mounted(){
                // let id = this.$route.params.id;
            let result = await axios.get("https://uat-api.modicare.com/api/web/banner");
           
            if(result.status==200) {
                // console.log(result);
                this.banners = result.data;
            }
           
            }
}
</script>