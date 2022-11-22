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
  
  import SideMenu from '../../components/SideMenu.vue';
  import MainBanner from '../../components/MainBanner.vue';
  import StopShop from '../../components/StopShop.vue';
  import MostLoved from '../../components/MostLoved.vue';
  import JustIn from '../../components/JustIn.vue';
  import TopDeals from '../../components/TopDeals.vue';
  import GuranTee from '../../components/GuranTee.vue';
  import HomeContact from '../../components/HomeContact.vue';
  
  
  
 
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
  