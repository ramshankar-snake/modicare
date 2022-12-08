<template>
    <SideMenu></SideMenu>
    
    <main class="main-container bg-light-blue">
        <section class="registration-page py-md-7 py-5">
            <div class="modi-container modi-container__sm">
                <h1 class="text-center mb-5">Share Details</h1>
    
                <div class="registration-steps-container">
                    <div class="modi-steps modi-steps__no-responsive">
                        <div class="step completed">
                            <div class="step-title">1</div>
                            <div class="step-icon-wrap">
                                <div class="step-icon"></div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-title">2</div>
                            <div class="step-icon-wrap">
                                <div class="step-icon"></div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-title">3</div>
                            <div class="step-icon-wrap">
                                <div class="step-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="mt-6">
                    <div class="modi-form modi-form__secondary">
                        <div class="title-indent-form font-semibold mb-3">Create Account</div>
    
                        <div class="modi-form-row modi-form-row__1-1">
                            <div class="md-form">
                                <input type="text" id="form-first-name" name="form-first-name" class="form-control" />
                                <label for="form-first-name">Enter first name</label>
                            </div>
    
                            <div class="md-form">
                                <input type="text" id="form-last-name" name="form-last-name" class="form-control" />
                                <label for="form-last-name">Enter last name</label>
                            </div>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-mobile-number" name="form-mobile-number" class="form-control" />
                            <label for="form-mobile-number">Enter mobile number</label>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-email" name="form-email" class="form-control" />
                            <label for="form-email">Enter email (optional)</label>
                        </div>
    
                        <div class="title-indent-form font-semibold mt-5 mb-3">Create Password</div>
    
                        <div class="md-form">
                            <input type="password" id="form-new-password" name="form-new-password" class="form-control" />
                            <label for="form-new-password">Enter new password</label>
                        </div>
    
                        <div class="md-form">
                            <input type="password" id="form-new-password-2" name="form-new-password-2" class="form-control" />
                            <label for="form-new-password-2">Re-enter new password</label>
                        </div>
    
                        <div class="d-flex justify-content-center mt-5">
                            <router-link to="/register-form-2" class="btn modi-btn modi-btn__primary modi-btn__xs px-5 py-2">Proceed</router-link>
                            <a href="javascript:;" class="btn modi-btn modi-btn__white modi-btn__xs px-5 py-2 ml-3">Cancel</a>
                        </div>
    
                        <div class="modi-container modi-container__xxs text-center mt-4">
                            By clicking proceed, you accept all <router-link to="/terms-and-conditions" class="text-underline" >terms & conditions</router-link> to becoming a Modicare Preferred Customer.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import SideMenu from '../components/SideMenu.vue'
export default {
    name: 'RegisterForm',
    components: {
         SideMenu,
      },
}
</script>