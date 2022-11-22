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
