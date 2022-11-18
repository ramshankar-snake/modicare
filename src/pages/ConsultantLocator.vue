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
        <div class="locator-container modi-container" style="padding: 90px 0;margin-top: 30px;">
            <section class="locator-header">
                <h1 class="locator-header-text">Find a consultant near you!</h1>
            </section>
            
            <section class="locator-search">
                <div class="locator-search-container">
    
                    <div class="modi-search-line">
                        <div class="modi-search-line-input-container">
                            <div class="modi-search-line-icon-container">
                                <img src="@/assets/images/icons/icon-search-dark.svg" alt="Search" class="modi-search-line-icon" />
                            </div>
                            <input type="text" class="modi-search-line-input" name="modi-search-line-input"
                                placeholder="Search by state, city, zone or pin code" id="locator-search-input"/>
                        </div>
                    </div>
    
                    <div class="locator-search-results" id="locator-search-results">
                        <div class="locator-search-results-heading">Stores matching your search:</div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Nagar, Jammu</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhipur, Indore, Madhya Pradesh</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghat, Darbhanga, Bihar</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghar, Darbhanga, Bihar</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghar, Darbhanga, Bihar</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghar, Darbhanga, Bihar</a>
                        </div>
                    </div>
                    
                    <a class="locator-search-searchby toggle-search-by">
                        <div class="locator-search-searchby-container" id="locator-search-searchby-container" data-search-by="area">
                            <div class="locator-search-searchby-text" id="locator-search-searchby-text">Search by consultant info</div>
                            <img class="locator-search-searchby-image" src="@/assets/images/icons/icon-refresh.svg" alt="refresh">
                        </div>
                    </a>
    
                </div>
            </section>
    
            <section class="locator-footer">
                <a href="javascript:;" class="icon-after icon-chevronright locator-footer-link">Consultants near me</a>
                <div class="locator-footer-end-container">
                    <div>
                        <div class="locator-footer-text">Want to become a Modicare consultant?</div>
                        <div class="locator-footer-text"><a href="javascript:;">Register</a> now!</div>
                    </div>
                    <img src='@/assets/images/locator/location-gray.svg' class="locator-footer-image" alt="Consultant Locator" />
                </div>
            </section>
    
        </div>
    </main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
export default {
   
    name: 'ConsultantLocator',
    components: {
         SideMenu,
      },
}
</script>