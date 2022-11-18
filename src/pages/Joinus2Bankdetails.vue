<template>
<SideMenu></SideMenu>
<div class="mobile-menu">
    <div class="mobile-menu-container">
        <div class="mobile-menu-content">
            <div class="mobile-menu-main">
                <div id="mobile-menu-search-form">
                    <div class="mobile-menu-search-input-container">
                        <input type="text" id="mobile-menu-search-input" class="mobile-menu-search-input" name="mobile-search" placeholder="Search modicare.com" />
                        <img src="@/assets/images/icons/icon-search-dark.svg" class="mobile-menu-search-btn" alt="Search modicare.com" />
                    </div>
                </div>

                <div class="mobile-menu-main-menu">
                    <ul class="mobile-menu-nav-list">
                        <li class="mobile-menu-nav-list-item"><a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-after icon-chevronright" data-target="mobile-menu-products-menu">Shop</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="./index.html">Home</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-after icon-chevronright" data-target="mobile-menu-about-menu">About</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="./careers.html">Offers</a></li>
                        <li class="mobile-menu-nav-list-item"><a href="./business-opportunity.html">Business Opportunity</a></li>
                    </ul>

                    <div class="mobile-menu-social-links">
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-facebook.png" alt="Modicare Facebook" /></a>
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-instagram.png" alt="Modicare Instagram" /></a>
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-linkedin.png" alt="Modicare Linkedin" /></a>
                        <a href="javascript:;" class="mobile-menu-social-link waves-effect"><img src="@/assets/images/btn-youtube.png" alt="Modicare YouTube" /></a>
                    </div>
                </div>

                <div class="mobile-menu-search">
                    <div class="mobile-menu-search-go-to">
                        <div class="mobile-menu-search-go-to-heading">Go to</div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./the-visionary.html">The Vision</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./event.html">Events & Programs</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./event-gallery.html">Event Gallery</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="javascript:;">Success Stories</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="./business-opportunity.html">Business Opportunity</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mobile-menu-sub-menu-container">
                <div class="mobile-menu-sub-menu" id="mobile-menu-products-menu">
                    <div class="mobile-menu-sub-menu-title-section">
                        <div class="mobile-menu-sub-menu-title-link">
                            <a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-before icon-chevronleft">Back</a>
                        </div>
                    </div>

                    <div class="mobile-menu-sub-menu-content-section">
                        <ul class="mobile-menu-sub-menu-nav-list">
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Wellness</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Skin Care</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Color</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Home Care</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">F&B</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Watches</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Tech</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./product-listing.html">Jewelry</a></li>
                        </ul>

                        <div class="mobile-menu-sub-menu-links">
                            <a href="javascript:;" class="icon-after icon-chevronright mobile-menu-sub-menu-link">View Catalogues</a>
                        </div>

                        <div class="mobile-menu-sub-menu-locate-links">
                            <a href="javascript:;" class="locate-link waves-effect">
                                <div class="locate-link-icon-container">
                                    <img src="@/assets/images/icons/icon-locate-store.svg" class="locate-link-icon" alt="Locate Consultant" />
                                </div>
                                <div class="locate-link-text">
                                    Locate<br />Store
                                </div>
                            </a>
                            <a href="javascript:;" class="locate-link waves-effect">
                                <div class="locate-link-icon-container">
                                    <img src="@/assets/images/icons/icon-locate-consultant.svg" class="locate-link-icon" alt="Locate Consultant" />
                                </div>
                                <div class="locate-link-text">
                                    Locate<br />Consultant
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mobile-menu-sub-menu" id="mobile-menu-about-menu">
                    <div class="mobile-menu-sub-menu-title-section">
                        <div class="mobile-menu-sub-menu-title-link">
                            <a href="javascript:;" class="toggle-mobile-menu-sub-menu icon-before icon-chevronleft">Back</a>
                        </div>
                    </div>

                    <div class="mobile-menu-sub-menu-content-section">
                        <ul class="mobile-menu-sub-menu-nav-list">
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./our-story.html">Our Story</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./the-visionary.html">The Visionary</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-separator"></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./achievers.html">Success Stories</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./event.html">Events</a></li>
                            <li class="mobile-menu-sub-menu-nav-list-item"><a href="./careers.html">Careers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

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