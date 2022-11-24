<template>
    <SideMenu></SideMenu>

    
    <main class="main-container">
        <section class="join-us">
            <div class="join-us-address-contact-container modi-container">
                <h1 class="join-us-title">Become a Consultant</h1>
    
                <div class="modi-form">
                    <div class="modi-form-section">
                        <h3 class="modi-form-section-title">Address</h3>
    
                        <div class="md-form">
                            <input type="text" id="form-house-flat" name="form-house-flat" class="form-control" />
                            <label for="form-house-flat">House or flat number.</label>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-address" name="form-address" class="form-control" />
                            <label for="form-address">Address</label>
                        </div>
    
                        <div class="modi-form-row modi-form-row__1-1">
                            <div class="md-form">
                                <input type="text" id="form-city" name="form-city" class="form-control" />
                                <label for="form-city">City</label>
                            </div>
                            <div class="md-form">
                                <input type="text" id="form-pin-code" name="form-pin-code" class="form-control" />
                                <label for="form-pin-code">Postal code</label>
                            </div>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-county" name="form-county" class="form-control" />
                            <label for="form-county">County</label>
                        </div>
                    </div>
    
                    <div class="modi-form-section mt-5 pt-3 pb-3">
                        <div class="modi-form-checkbox-container px-3 text-left">
                            <label for="form-checkbox-1">
                                <input type="checkbox" id="form-checkbox-1" name="form-checkbox-1" class="" />
                                <div class="modi-form-checkbox"></div>
                                <div class="modi-form-checkbox-title">
                                    Skip address proof
                                </div>
                            </label>
                        </div>
    
                        <div class="md-form">
                            <select name="form-address-proof" id="form-address-proof" class="form-control">
                                <option selected disabled>Address Proof</option>
                                <option value="option-1">Address Proof 1</option>
                                <option value="option-2">Address Proof 2</option>
                                <option value="option-3">Address Proof 3</option>
                                <option value="option-4">Address Proof 4</option>
                            </select>
                        </div>
    
                        <div class="modi-form-row modi-form-row__input_file">
                            <div class="md-form">
                                <input type="text" id="form-document-number-1" name="form-document-number-1" class="form-control" />
                                <label for="form-document-number-1">Document number</label>
                            </div>
    
                            <div class="md-form modi-form-file-container">
                                <label for="form-file-1" class="modi-form-file-label">
                                    <input type="file" id="form-file-1" name="form-file-1" class="form-control" />
                                    <div class="modi-form-file-label-icon-container">
                                        <img src="@/assets/images/icons/icon-upload.svg" class="modi-form-file-label-icon" alt="Upload" />
                                    </div>
                                </label>
                            </div>
                        </div>
    
                        <div class="modi-form-file-list">
                            <div class="modi-form-file-item">
                                <span class="modi-form-file-item-name">Phone-Bill.pdf</span>
                                <a href="javascript:;" class="modi-form-file-item-remove-btn">
                                    <img src="@/assets/images/icons/icon-close-dark.svg" class="modi-form-file-item-remove-icon" alt="Remove File" />
                                </a>
                            </div>
                        </div>
                    </div>
    
                    <div class="modi-form-section">
                        <h3 class="modi-form-section-title">Contact details</h3>
    
                        <div class="md-form">
                            <input type="text" id="form-mobile-number" name="form-mobile-number" class="form-control" />
                            <label for="form-mobile-number">Mobile number</label>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-alternate-phone" name="form-alternate-phone" class="form-control" />
                            <label for="form-alternate-phone">Alternate Phone</label>
                        </div>
    
                        <div class="md-form">
                            <input type="text" id="form-email" name="form-email" class="form-control" />
                            <label for="form-email">Email</label>
                        </div>
                    </div>
    
                    <router-link to="/join-us-2-bank-details" class="btn-next btn modi-btn modi-btn__primary px-5">Next</router-link>
    
                    <div class="mt-3">
                        <router-link to="/join-us-2-co-applicant" class="btn-back icon-after icon-chevronright">Back</router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'Joinus2Adresscontact',
    components: {
         SideMenu,
      },
}
</script>