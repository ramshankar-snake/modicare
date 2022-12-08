
<template>
 <!-- <ScriptComponent></ScriptComponent> -->
    <component :is="layout"></component>

</template>

<script>
import PostLayout from './layouts/PostLayout'
import PreLayout from './layouts/PreLayout'
// import $ from "jquery";
// import all from './assets/js/app.js'
// import ScriptComponent from './components/ScriptComponent.vue'

export default {
  components: {
    PostLayout,
    PreLayout,
    // ScriptComponent
    // define as many layouts you want for the application
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "PreLayout";
      }
    },
  },
  
 
}
</script>
view rawApp.vue hosted with ❤ by GitHub
