<template>
    <SideMenu></SideMenu>

    
    <main class="main-container bg-light-blue">
        <section class="registration-page py-md-7 py-5">
            <div class="modi-container modi-container__xs">
                <h1 class="text-center mb-5">Verification</h1>
    
                <div class="registration-steps-container">
                    <div class="modi-steps modi-steps__no-responsive">
                        <div class="step completed">
                            <div class="step-title">1</div>
                            <div class="step-icon-wrap">
                                <div class="step-icon"></div>
                            </div>
                        </div>
                        <div class="step completed">
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
                        <div class="font-semibold mb-3">One time password</div>
    
                        <div class="md-form">
                            <input type="text" id="form-otp" name="form-otp" class="form-control" />
                            <label for="form-otp">Enter OTP</label>
                        </div>
    
                        <div class="otp-sent font-size-xs">
                            The OTP has been sent on your registered mobile number
                        </div>
    
                        <div class="d-flex mt-5 mb-7">
                            <router-link to="./register-form-3" class="btn modi-btn modi-btn__primary modi-btn__xs px-5 py-2">Submit</router-link>
                            <div class="otp-resend-container ml-3">
                                <a href="javascript:;" class="btn-resend-otp btn disabled modi-btn modi-btn__white modi-btn__xs px-5 py-2">Re-send</a>
                                <div class="otp-resend-countdown">00:45</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'RegisterForm2',
    components: {
      
       
        SideMenu,
      },
}
</script>