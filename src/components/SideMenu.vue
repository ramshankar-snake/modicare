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
                    <a href="catalogues.html" class="icon-after icon-chevronright">View Catalogues</a>
                </div>

                <ul class="side-menu-nav-list">
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">Wellness</router-link></li>
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">Skin Care</router-link></li>
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">Color</router-link></li>
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">Home Care</router-link></li>
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">F&B</router-link></li>
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">Watches</router-link></li>
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">Tech</router-link></li>
                    <li class="side-menu-nav-list-item waves-effect"><router-link to="/product-listing">Jewelry</router-link></li>
                </ul>

                <div class="side-menu-links">
                    <router-link to="/catalogues" class="icon-after icon-chevronright side-menu-link">Catalogues</router-link>
                    <router-link to="javascript:;" class="icon-after icon-chevronright side-menu-link">Newly launched</router-link>
                </div>

                <div class="side-menu-buttons">
                    <router-link to="/consultant-locator" class="side-menu-button waves-effect">
                        <img src="@/assets/images/icons/icon-locate-consultant.svg" class="side-menu-button-icon" alt="Locate Consultant" />
                        <div class="side-menu-button-text">
                            Locate<br />Consultant
                        </div>
                    </router-link>
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
                        <li class="mobile-menu-nav-list-item"><a href="https://azadi.modicare.com" target="_blank">Business Opportunity</a></li>
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
                            <a href="./achievers.html">Success Stories</a>
                        </div>

                        <div class="mobile-menu-search-go-to-item">
                            <a href="https://azadi.modicare.com">Business Opportunity</a>
                        </div>
                        <div class="mobile-menu-search-go-to-item">
                            <a href="./quick-pay.html">Credit M-Wallet</a>
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
                            <a href="catalogues.html" class="icon-after icon-chevronright mobile-menu-sub-menu-link">View Catalogues</a>
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
</template>
<script>
export default {
    name: 'SideMenu',
}
</script>