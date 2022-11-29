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

