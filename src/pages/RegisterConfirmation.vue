<template>
    <SideMenu></SideMenu>
    
    <main class="main-container bg-light-blue">
        <section class="modi-confirmation py-md-7 py-5">
            <div class="modi-container modi-container__xxs text-center">
                <h1 class="mb-6">Happy shopping!</h1>
    
                <div class="confirmation-icon-container">
                    <img src="@/assets/images/icons/icon-check-circle.svg" class="confirmation-icon" alt="" />
                </div>
    
                <div class="mt-6">
                    You are now a Modicare preferred customer. A world of quality products at unbeatable prices await you!
                </div>
    
                <div class="mt-6">
                    <a href="javascript:;" class="btn modi-btn modi-btn__primary px-4">Start Shopping</a>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'RegisterConfirmation',
    components: {
      
       
        SideMenu,
      },
}
</script>