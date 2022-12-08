<template>
  <SideMenu></SideMenu>

<main class="main-container">
    <section class="join-us">
        <div class="join-us-pd-container modi-container">
            <div class="join-us-pd-header">
                <h1 class="join-us-pd-header-title">Become a Consultant</h1>
            </div>

            <div class="join-us-pd-main">
                <div class="join-us-pd-left">
                    <img class="join-us-pd-left-image" src="@/assets/images/join-us/personal-detail-left.png" alt="join us image" />
                    <div class="join-us-pd-left-title">Just one step away from greater success</div>
                    <div class="join-us-pd-left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo.</div>
                    <a href="javascript:;" class="icon-after icon-chevronright join-us-pd-left-link">Business Oppurtunity</a>
                </div>

                <div class="join-us-pd-right">
                    <div class="modi-form pd-form">
                        <h3 class="pd-form-header">Do you know any existing Modicare consultant?</h3>

                        <div class="sponsor-mca-options">
                            <div class="sponsor-mca-option">
                                <input type="radio" id="sponsor-yes" name="sponsor-mca" value="Yes" />
                                <label for="sponsor-yes" class="sponsor-mca-option-label">
                                    <div class="sponsor-mca-option-content">
                                        <div class="sponsor-mca-option-title">YES</div>

                                        <div class="sponsor-mca-option-text">I have consultant MCA number</div>
                                    </div>
                                </label>
                            </div>

                            <div class="sponsor-mca-option">
                                <input type="radio" id="sponsor-no" name="sponsor-mca" value="No" />
                                <label for="sponsor-no" class="sponsor-mca-option-label">
                                    <div class="sponsor-mca-option-content">
                                        <div class="sponsor-mca-option-title">NO</div>

                                        <div class="sponsor-mca-option-text">I do not have consultant MCA number</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div class="sponsor-yes-container">
                            <h3 class="pd-form-header">Please enter sponsor MCA</h3>

                            <div class="md-form">
                                <input type="text" id="form-mca" name="form-mca" class="form-control is-invalid" />
                                <label for="form-mca">MCA number</label>
                                <div class="invalid-feedback">Invalid MCA number. Please re-enter or select NO above.</div>
                            </div>
                        </div>

                        <router-link to="/join-us-2-personal-details" class="next-btn btn modi-btn modi-btn__primary px-5 pd-form-btn">Proceed</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="need-help">
        <div class="need-help-container modi-container">
            <div class="need-help-header">Need help?</div>

            <div class="need-help-text">
                <a href="javascript:;">Fill up this form</a> and we'll connect with you
            </div>

            <div class="need-help-text">
                You may also <a href="javascript:;">contact us</a> at anytime!
            </div>
        </div>
    </section>
</main>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
 import $ from 'jquery';
export default {
    name: 'JoinUs',
    components: {
        SideMenu
    },
    mounted(){
        $(function() {

$(document).on('change', '[name=sponsor-mca]', function() {
    var optionSelected = $('[name=sponsor-mca]:checked');
    var sponsorYesContainer = $('.sponsor-yes-container');

    if (optionSelected.val() === 'Yes') {
        sponsorYesContainer.slideDown(300);
    } else {
        sponsorYesContainer.slideUp(300);
    }
});
});
    }
}
</script>