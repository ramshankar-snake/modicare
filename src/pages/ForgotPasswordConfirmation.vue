<template>
   
    <SideMenu></SideMenu>

    
    <main class="main-container">
        <section class="join-us">
            <div class="join-us-confirmation-container modi-container">
                <h1 class="mb-3">Thank you!</h1>
    
                <h3 class="mb-5">A new password has been generated</h3>
    
                <div class="join-us-confirmation-icon-container">
                    <img src="@/assets/images/icons/icon-check-circle.svg" class="join-us-confirmation-icon" alt="Order placed!" />
                </div>
    
                <div class="join-us-confirmation-text">
                    The password would be sent to your registered mobile number. Please remember to change to a desired password after signing in.
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
    name: 'ForgotPasswordConfirmation',
    components: {
    
        SideMenu
    }
}
</script>