<template>
    <SideMenu></SideMenu>
    
    <main class="main-container bg-light-blue">
        <section class="registration-page py-5">
            <div class="modi-container modi-container__md">
                <h1 class="text-center mb-md-7 mb-5">Sign in to your Account</h1>
    
                <div class="registration-types">
                    <a href="javascript:;" class="" data-toggle="modal" data-target="#modi-customer-login-modal">
                    <div class="registration-type">
                        <div class="font-semibold">Sign In as Customer</div>
    
                        <div class="mt-1">
                            <!-- <a href="./register-form-1.html" class="icon-after icon-chevronright sub-heading">Customer Registration</a> -->
                        </div>
                        <!-- <div class="mt-4">
                            <img src="@/assets/images/icons/icon-register-customer.svg" alt="Customer Registration" />
                        </div> -->
                    </div>
                    </a>
                    <a href="javascript:;" class="" data-toggle="modal" data-target="#modi-consultant-login-modal">
                    <div class="registration-type">
                        <div class="font-semibold">Sign In as Consultant</div>
    
                        <div class="mt-1">
                            <!-- <a href="./register-form-1.html" class="icon-after icon-chevronright sub-heading">Customer Registration</a> -->
                        </div>
                        <!-- <div class="mt-4">
                            <img src="@/assets/images/icons/icon-register-customer.svg" alt="Customer Registration" />
                        </div> -->
                    </div>
                    </a>
                </div>
            </div>
        </section>
        <section class="sign-in guarantee">
            <div class="sign-in-container modi-container">
                <div class="sign-in-footer">
                    <router-link class="sign-in-footer-forgot-password" to="/forgot-password">Forgot Password</router-link>
                    <div class="sign-in-footer-text">Not a consultant yet?</div>
                    <div class="sign-in-footer-text"><a href="javscript:;">Register now</a> to enter the world of Modicare!</div>
                    <div class="sign-in-footer-text">Trouble logging in? Feel free to <a href="javscript:;">contact us</a> anytime.</div>
                </div>
    
            </div>
        </section>
    </main>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
export default {
    name: 'SignIn',
    components: {
         SideMenu,
      },
}
</script>