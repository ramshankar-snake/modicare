<template>
    <SideMenu></SideMenu>

    
    <main class="main-container">
        <section class="join-us">
            <div class="join-us-pd-container modi-container">
                <div class="join-us-pd-header mb-5">
                    <h1 class="join-us-pd-header-title">Become a Consultant</h1>
                </div>
    
                <div class="modi-form pd-form pt-4">
                    <h3 class="pd-form-header text-center mb-4">Personal Details</h3>
    
                    <div class="md-form">
                        <input type="text" id="form-name" name="form-name" class="form-control" />
                        <label for="form-name">Enter full name</label>
                    </div>
    
                    <div class="md-form md-form__date-picker">
                        <input type="text" id="form-dob" name="form-dob" class="form-control" />
                        <label for="form-dob">Date of birth (MM/DD/YYYY)</label>
                    </div>
    
                    <div class="modi-form-checkbox-container modi-form-checkbox-container__px">
                        <label for="form-checkbox-1">
                            <input type="checkbox" id="form-checkbox-1" name="form-checkbox-1" class="" />
                            <div class="modi-form-checkbox"></div>
                            <div class="modi-form-checkbox-title">
                                I have a co-applicant
                            </div>
                        </label>
                    </div>
    
                    <router-link to="/join-us-2-co-applicant" class="next-btn btn modi-btn modi-btn__primary px-5 pd-form-btn">Proceed</router-link>
                    <div class="pd-form-btn-error">Please verify age below</div>
    
                    <div class="modi-form-checkbox-container text-center mt-3">
                        <label for="form-checkbox-2">
                            <input type="checkbox" id="form-checkbox-2" name="form-checkbox-2" class="" />
                            <div class="modi-form-checkbox"></div>
                            <div class="modi-form-checkbox-title">
                                I'm 18 years old or above
                            </div>
                        </label>
                    </div>
    
                    <div class="join-us-pd-right-footer">By clicking proceed, you accept all <router-link to="/terms-and-conditions">terms & conditions</router-link> to becoming a Modicare consultant</div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'Joinus2Personaldetails',
    components: {
         SideMenu,
      },
}
</script>