<template>
    <sideMenu></sideMenu>


    
    <main class="main-container">
        <section class="join-us">
            <h1 class="join-us-confirmation-heading px-3">Welcome to the world of Modicare</h1>
    
            <div class="join-us-confirmation-container modi-container">
                <div class="join-us-confirmation-icon-container my-5">
                    <img src="@/assets/images/icons/icon-check-circle.svg" class="join-us-confirmation-icon" alt="Order placed!" />
                </div>
    
                <div class="join-us-confirmation-text">
                    You have successfully registered. We shall be sending your unique ID through email / SMS.
                </div>
    
                <div class="join-us-confirmation-button-container">
                    <a href="javascript:;" class="join-us-confirmation-button btn modi-btn modi-btn__primary">Okay</a>
                </div>
            </div>
        </section>
    
        <section class="need-help">
            <div class="need-help-container modi-container">
                <div class="need-help-header">Need help?</div>
    
                <div class="need-help-text">
                    You may <a href="javascript:;">contact us</a> at anytime!
                </div>
            </div>
        </section>
    </main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'Joinus2Confirmation',
    components: {
         SideMenu,
      },
}
</script>