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
        <div class="modi-container modi-container__md">
            <h1 class="text-center mb-md-7 mb-5">Welcome To The Modicare Family!</h1>

            <div class="registration-types">
                <div class="registration-type">
                    <div class="font-semibold">Shop At Modicare</div>

                    <div class="mt-1">
                        <router-link to="/register-form" class="icon-after icon-chevronright sub-heading">Customer Registration</router-link>
                    </div>

                    <div class="font-size-sm mt-3">Unmatched quality products at unbeatable prices. Fall in love with the experience and perks of being a Modicare Preferred Customer.</div>

                    <div class="mt-4">
                        <img src="@/assets/images/icons/icon-register-customer.svg" alt="Customer Registration" />
                    </div>
                </div>
                <div class="registration-type">
                    <div class="font-semibold">Start Your Business</div>

                    <div class="mt-1">
                        <router-link to="/join-us-2-sponsoring" class="icon-after icon-chevronright sub-heading">Consultant Registration</router-link>
                    </div>

                    <div class="font-size-sm mt-3">Success is a few taps away. Build your own business and turn it into an empire with Modicare, India’s first direct selling business!</div>

                    <div class="mt-4">
                        <img src="@/assets/images/icons/icon-register-consultant.svg" alt="Consultant Registration" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="guarantee">
        <div class="modi-container guarantee-container">
            <div class="guarantee-items-container justify-content-center">
                <div class="guarantee-item col-12 col-md-4">
                    <div class="guarantee-item-image-container">
                        <img class="guarantee-item-image" src='@/assets/images/home/get-certified.png'/>
                    </div>
                    <p class="guarantee-item-title">Get Certified</p>
                    <p class="guarantee-item-text"> Access 'Certification Program for Direct Sellers' under the aegis of Skill India & NSDC.</p>
                    <a href="https://www.kedskills.com/ra/ralp.php" target="_blank" class="icon-after icon-chevronright">More</a>
                </div>
                <div class="guarantee-item guarantee-item-special col-12 col-md-4">
                    <div class="guarantee-item-image-container">
                        <img class="guarantee-item-image" src='@/assets/images/product-satisfaction-guarantee-with-signature.png' />
                    </div>
                    <p class="guarantee-item-title">Satisfaction Guarantee</p>
                    <p class="guarantee-item-text">I personally guarantee full refund* of your money if you are not 100% satisfied with the quality of the product.<br>- Mr. Samir Modi</p>
                    <a href="javascript:;" class="icon-after icon-chevronright">More</a>
                </div>
                    <div class="guarantee-item col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image" src='@/assets/images/find-a-consultant.svg' />
                        </div>
                        <p class="guarantee-item-title">Stores Near you</p>
                        <p class="guarantee-item-text">Love what you see? Visit the nearest store for a complete shopping experience</p>
                        <a href="javascript:;" class="icon-after icon-chevronright">Consultant locator</a>
                    </div>
            </div>
        </div>
    </section>
</main>
</template>
<script>
export default {
    name: 'RegisterType',
}
</script>