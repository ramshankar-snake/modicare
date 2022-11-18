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



import {  Pagination, A11y } from 'swiper';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
 
  
  SwiperCore.use([Navigation]);
  export default {
    name: 'HelloWorld',
   
    components: {
      Swiper,
      SwiperSlide,
      
      'SideMenu'   : SideMenu,
      'MainBanner' : MainBanner,
      'StopShop'   : StopShop,
      'MostLoved'  : MostLoved,
      'JustIn'     : JustIn,
      'TopDeals'   : TopDeals,
      'GuranTee'   : GuranTee,
      'HomeContact': HomeContact,
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
        onSwiper,
        onSlideChange,
        swiper,
        modules: [ Pagination, A11y],
        swiperOptions: {
                    loop: true,
                    
                    centeredSlides: true,
                    // slidesOffsetBefore: '100px',
                    // slidesOffsetAfter: '100px',
                    // slidesPerView: 'auto',
                    // touchRatio: 0.2,
                    // slideToClickedSlide: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
      };
    },
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
