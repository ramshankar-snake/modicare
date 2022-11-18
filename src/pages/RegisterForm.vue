<template>
    <div class="side-menu-overlay"></div>

    <div class="side-menu">
        <div class="side-menu-container">
            <div class="side-menu-inner-container">
                <div class="side-menu-content">
                    <div class="side-menu-close">
                        <a href="javascript:;" class="btn-side-menu-close"><img src="@/assets/images/icons/icon-close-dark.svg" alt="Close Side Menu" class="btn-side-menu-close-icon" /></a>
                    </div>
    
                    <div class="side-menu-title">All Products</div>
                    <div class="side-menu-title-link">
                        <a href="javascript:;" class="icon-after icon-chevronright">View Catalogues</a>
                    </div>
    
                    <ul class="side-menu-nav-list">
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Wellness</a></li>
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Skin Care</a></li>
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Color</a></li>
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Home Care</a></li>
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">F&B</a></li>
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Watches</a></li>
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Tech</a></li>
                        <li class="side-menu-nav-list-item waves-effect"><a href="./product-listing.html">Jewelry</a></li>
                    </ul>
    
                    <div class="side-menu-links">
                        <a href="javascript:;" class="icon-after icon-chevronright side-menu-link">Catalogues</a>
                        <a href="javascript:;" class="icon-after icon-chevronright side-menu-link">Newly launched</a>
                    </div>
    
                    <div class="side-menu-buttons">
                        <a href="javascript:;" class="side-menu-button waves-effect">
                            <img src="@/assets/images/icons/icon-locate-consultant.svg" class="side-menu-button-icon" alt="Locate Consultant" />
                            <div class="side-menu-button-text">
                                Locate<br />Consultant
                            </div>
                        </a>
                        <a href="javascript:;" class="side-menu-button waves-effect">
                            <img src="@/assets/images/icons/icon-locate-store.svg" class="side-menu-button-icon" alt="Locate Consultant" />
                            <div class="side-menu-button-text">
                                Locate<br />Store
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
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
    
    <main class="main-container bg-light-blue">
        <section class="registration-page py-md-7 py-5">
            <div class="modi-container modi-container__sm">
                <h1 class="text-center mb-5">Customer Registration</h1>
    
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
export default {
    name: 'RegisterForm',
}
</script>