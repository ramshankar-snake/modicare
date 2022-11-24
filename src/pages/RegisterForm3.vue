<template>
    <SideMenu></SideMenu>
    
    <main class="main-container bg-light-blue">
        <section class="registration-page py-md-7 py-5">
            <div class="modi-container modi-container__sm">
                <h1 class="text-center mb-5">Register Address</h1>
    
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
                        <div class="step completed">
                            <div class="step-title">3</div>
                            <div class="step-icon-wrap">
                                <div class="step-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="mt-6">
                    <div class="modi-form modi-form__secondary">
                        <div class="title-indent-form font-semibold mb-3">Enter Address Details</div>
    
                        <div class="md-form">
                            <input type="text" id="form-name" name="form-name" class="form-control" />
                            <label for="form-name">Name</label>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-house-flat" name="form-house-flat" class="form-control" />
                            <label for="form-house-flat">House or flat number</label>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-address" name="form-address" class="form-control" />
                            <label for="form-address">Address</label>
                        </div>
    
                        <div class="modi-form-row modi-form-row__1-1">
                            <div class="md-form">
                                <input type="text" id="form-city-district" name="form-city-district" class="form-control" />
                                <label for="form-city-district">City or district</label>
                            </div>
                            <div class="md-form">
                                <input type="text" id="form-pin-code" name="form-pin-code" class="form-control" />
                                <label for="form-pin-code">Pin code</label>
                            </div>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-state" name="form-state" class="form-control" />
                            <label for="form-state">State</label>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-landmark" name="form-landmark" class="form-control is-invalid" />
                            <label for="form-landmark">Landmark</label>
                            <div class="invalid-feedback b2c-shipping-payment-form-feedback">Invalid landmark, please re-enter</div>
                        </div>
    
                        <div class="d-flex mt-5 mb-5">
                            <router-link to="/register-confirmation" class="btn modi-btn modi-btn__primary modi-btn__xs px-5 py-2">Submit</router-link>
                            <a href="javascript:;" class="btn modi-btn modi-btn__white modi-btn__xs px-5 py-2 ml-3">Cancel</a>
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
   
    name: 'RegisterForm3',
    components: {
      
       
        SideMenu,
      },
}
</script>