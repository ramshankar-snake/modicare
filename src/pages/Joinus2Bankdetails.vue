<template>
<SideMenu></SideMenu>

<main class="main-container">
    <section class="join-us">
        <div class="join-us-bank-account-container modi-container">
            <h1 class="join-us-title">Become a Consultant</h1>

            <div class="modi-form">
                <div class="modi-form-section">
                    <h3 class="modi-form-section-title">Bank details</h3>

                    <div class="md-form">
                        <input type="text" id="form-bank-name" name="form-bank-name" class="form-control" />
                        <label for="form-bank-name">Bank name</label>
                    </div>

                    <div class="modi-sort-code-container">
                        <div class="modi-sort-code-title">Enter SORT Code</div>

                        <div class="modi-sort-code-inputs">
                            <div class="md-form md-form__inline-block md-form__no-label">
                                <input type="number" id="form-sort-code-1" name="form-sort-code-1" class="form-control modi-sort-code-input jump-to-next-on-maxlength" data-jump-to="#form-sort-code-2" min="0" max="99" data-max-length="2" />
                            </div>
                            -
                            <div class="md-form md-form__inline-block md-form__no-label">
                                <input type="number" id="form-sort-code-2" name="form-sort-code-2" class="form-control modi-sort-code-input jump-to-next-on-maxlength" data-jump-to="#form-sort-code-3" min="0" max="99" data-max-length="2" />
                            </div>
                            -
                            <div class="md-form md-form__inline-block md-form__no-label">
                                <input type="number" id="form-sort-code-3" name="form-sort-code-3" class="form-control modi-sort-code-input" min="0" max="99" data-max-length="2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modi-form-section">
                    <h3 class="modi-form-section-title">Account details</h3>

                    <div class="md-form">
                        <input type="text" id="form-name" name="form-name" class="form-control" />
                        <label for="form-name">Name as on account</label>
                    </div>

                    <div class="md-form">
                        <input type="text" id="form-account-number" name="form-account-number" class="form-control" />
                        <label for="form-account-number">Account number</label>
                    </div>

                    <div class="md-form">
                        <input type="text" id="form-re-account-number" name="form-re-account-number" class="form-control" />
                        <label for="form-re-account-number">Re-enter number</label>
                    </div>
                </div>

                <router-link to="/join-us-2-confirmation" class="btn-submit btn modi-btn modi-btn__primary px-5">Submit</router-link>

                <div class="mt-3">
                    <router-link to="/join-us-2-address-contact" class="btn-back icon-after icon-chevronright">Back</router-link>
                </div>
            </div>
        </div>
    </section>

    <div class="text-center mb-4">
        *Modicare would not be responsible for any wrong entry by the user
    </div>
</main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'Joinus2BankDetails',
    components: {
         SideMenu,
      },
}
</script>