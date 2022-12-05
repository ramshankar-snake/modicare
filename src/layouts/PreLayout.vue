

<template>
    <Headbar></Headbar>
    <router-view />
    <FooterBar></FooterBar>
</template>

<script>
import Headbar from '../components/HeadBar.vue'
import FooterBar from '../components/FooterBar.vue'

  export default {
    name: 'App',
    components: {
      Headbar,
      FooterBar
    },
    

  }
</script>



