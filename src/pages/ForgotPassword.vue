<template>
   
    <SideMenu></SideMenu>
    
    
    <main class="main-container">
        <section class="sign-in">
            <div class="sign-in-container modi-container">
                <h1 class="sign-in-title">Forgot Password</h1>
    
                <h3 class="mt-3">Please fill in the details below</h3>
    
                <div class="sign-in-form modi-form">
                    <div class="sign-in-form-section">
                        <div class="md-form">
                            <input type="text" id="form-mca" name="form-mca" class="form-control" />
                            <label for="form-mca">Enter MCA</label>
                        </div>
    
                        <div class="mt-4">
                            <img src="@/assets/images/captcha_placeholder.png" alt="CAPTCHA" />
                        </div>
                
                        <router-link to="/forgot-password-confirmation" class="next-btn btn modi-btn modi-btn__primary px-5 sign-in-form-button">Submit</router-link>
    
                        <div class="md-form">
                            <div class="invalid-feedback d-block text-center">Please click on the checkbox above</div>
                        </div>
                    </div>
                </div>
    
                <div class="sign-in-footer">
                    <div class="sign-in-footer-text">Not a consultant yet?</div>
                    <div class="sign-in-footer-text"><a href="javscript:;">Register now</a> to enter the world of Modicare!</div>
                    <div class="sign-in-footer-text">Trouble logging in? Feel free to <a href="javscript:;">contact us</a> anytime.</div>
                </div>
    
            </div>
        </section>
    </main>
</template>
<script>
 
    import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'ForgotPassword',
    components: {
      
        SideMenu
    }
}
</script>