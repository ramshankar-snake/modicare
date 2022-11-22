
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
  // mounted: {

    // $('.toggle-side-menu').hover(function() {
        
    //     $('body').removeClass('side-menu-open');
    //     this.toggleSideMenu();
    // })
    // $('.toggle-side-menu').click(function() {
    //     $('body').removeClass('side-menu-open');
    //     this.toggleSideMenu();
    // })
    // $('.side-menu-overlay, .btn-side-menu-close').click(function() {
    //   this.toggleSideMenu();
    // })

    
  // },
  methods: {
     toggleSideMenu() {
    var body = $('body');
    var sideMenu = $('.side-menu');
    var sideMenuOverlay = $('.side-menu-overlay');
    var isSideMenuOpen = body.hasClass('side-menu-open');
    var sideMenuAnimationSpeed = 500;
    var overlayAnimationSpeed = 500;

    if (!isAnimating) {
        
        isAnimating = true;

        if (isSideMenuOpen) {
            body.toggleClass('side-menu-open');

            sideMenuOverlay.animate({
                "opacity": 0
            }, overlayAnimationSpeed, function() {
                sideMenuOverlay.hide();
            });

            sideMenu.animate({
                "left": "-100%"
            }, sideMenuAnimationSpeed, function() {
                sideMenu.hide();
                isAnimating = false;
            });
        } else {
            body.toggleClass('side-menu-open');

            sideMenuOverlay.show();
            sideMenuOverlay.animate({
                "opacity": 0.75
            }, overlayAnimationSpeed);

            sideMenu.show();
            sideMenu.animate({
                "left": "0"
            }, sideMenuAnimationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}
  }
 

}
</script>
view rawApp.vue hosted with ❤ by GitHub
