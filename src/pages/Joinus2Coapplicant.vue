<template>
<SideMenu></SideMenu>

<main class="main-container">
    <section class="join-us">
        <div class="join-us-container modi-container">
            <h1 class="join-us-title">Become a consultant</h1>

            <h3 class="join-us-sub-title">Do you have a co-applicant?</h3>

            <div class="mt-3 mb-4"><a href="javascript:;" class="icon-after icon-chevronright">Add later</a></div>
          
            <div class="modi-form">
                <div class="modi-form-section">
                    <div class="md-form">
                        <input type="text" id="form-coapp-name" name="form-coapp-name" class="form-control" />
                        <label for="form-coapp-name">Co-applicant's full name</label>
                    </div>

                    <div class="md-form md-form__date-picker">
                        <input type="text" id="form-coapp-dob" name="form-coapp-dob" class="form-control" />
                        <label for="form-coapp-dob">Co-applicant's date of birth (MM/DD/YYYY) </label>
                    </div>

                    <router-link to="/join-us-2-address-contact" class="btn-submit btn modi-btn modi-btn__primary px-5">Next</router-link>

                    <div class="modi-form-checkbox-container mt-5">
                        <label for="form-checkbox-2">
                            <input type="checkbox" id="form-checkbox-2" name="form-checkbox-2" class="" />
                            <div class="modi-form-checkbox"></div>
                            <div class="modi-form-checkbox-title">
                                Co-applicant is 18 years old or above
                            </div>
                        </label>
                    </div>

                    <div class="modi-form-section-footer">By clicking proceed, you accept all <router-link to="/terms-and-conditions">terms & conditions</router-link> to becoming a Modicare consultant</div>
                </div>
            </div>
        </div>
    </section>
</main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'Joinus2Coapplicant',
    components: {
         SideMenu,
      },
}
</script>