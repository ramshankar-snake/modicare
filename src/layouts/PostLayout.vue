<template>
  
    <PostHeadbar></PostHeadbar>
    <router-view />
    <FooterBar></FooterBar>



  
   

 
</template>

<script>

import PostHeadbar from '../components/PostHeadbar.vue'
import FooterBar from '../components/FooterBar.vue'


export default {
  name: 'App',
  components: {
    PostHeadbar,
    FooterBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

