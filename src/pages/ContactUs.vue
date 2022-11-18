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

    <div class="sticky-social-buttons">
        <div class="sticky-social-buttons-container">
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-facebook.svg" class="sticky-social-button-icon" alt="Modicare Facebook" loading="lazy" /></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-youtube.svg" class="sticky-social-button-icon" alt="Modicare YouTube" loading="lazy" /></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-instagram.svg" class="sticky-social-button-icon" alt="Modicare Instagram " loading="lazy" /></a>
        </div>
    </div>

    <section class="contact-us">
        <div class="contact-us-container modi-container">
            <div class="contact-us-help" style="padding: 70px 0;margin-top: 0px;">
                <h1 class="contact-us-help-title">How may we help you?</h1>
                <h3 class="contact-us-help-sub-title">Always here to help</h3>
                <div class="contact-us-cards-container">
                    <div class="contact-us-card">
                        <a href="javascript:;" class="contact-us-card-link">
                            <img src='@/assets/images/icons/icon-chat-primary.svg' class="contact-us-card-icon" style="width: 80px;height: 80px;margin: auto;" />
                            <div class="contact-us-card-text">Chat with Roshini</div>
                        </a>
                    </div>
                    <div class="contact-us-card">
                         <a href="tel:180030012999" class="contact-us-card-link">
                            <img src='@/assets/images/icons/icon-telephone-primary.svg' class="contact-us-card-icon" style="width: 80px;height: 80px;margin: auto;"/>
                            <div class="contact-us-card-text">Talk to us</div>
                         </a>
                    </div>
                    <div class="contact-us-card">
                         <a href="mailto:support-modicare@modi.com" class="contact-us-card-link">
                            <img src='@/assets/images/icons/icon-envelope-primary.svg' class="contact-us-card-icon" style="width: 80px;height: 80px;margin: auto;"/>
                            <div class="contact-us-card-text">Write to us</div>
                         </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-us-container">
            <div class="contact-us-form">
                <div class="contact-us-form-inner modi-container">

                    <div class="contact-us-form-left">
                        <h2 class="contact-us-form-left-title">Want to know more about the opportunity?</h2>
                        <div class="contact-us-form-left-text">Send us your details and we'll help you with your queries and steps to begin a new way of life.</div>
                        <a href="javascript:;" class="icon-after icon-chevronright">Business oppurtunity</a>
                    </div>
                    <div class="contact-us-form-right">
                        <div class="contact-us-form-container">
                            <div class="modi-form modi-form__secondary">
                                <div class="md-form">
                                    <input type="text" id="form-name" name="form-name" class="form-control" />
                                    <label for="form-name">Name</label>
                                </div>
                    
                                <div class="md-form">
                                    <input type="text" id="form-email" name="form-email" class="form-control" />
                                    <label for="form-email">Email</label>
                                </div>
                    
                                <div class="md-form">
                                    <input type="text" id="form-phone" name="form-phone" class="form-control" />
                                    <label for="form-phone">Phone</label>
                                </div>
                    
                                <div class="md-form">
                                    <input type="text" id="form-location" name="form-location" class="form-control" />
                                    <label for="form-location">Location</label>
                                </div>
                    
                                <input class="contact-us-form-btn btn modi-btn modi-btn__primary px-5" type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-us-container">
            <div class="contact-us-footer">
                <div class="contact-us-footer-inner modi-container">
                    <div class="contact-us-footer-left">
                        <div class="contact-us-footer-left-title">Head Office, India</div>
                        <div class="contact-us-footer-left-text">Modicare Limited 5,<br>Community Center,<br> New Friends Colony,<br> New Delhi, Pin - 110025</div>
                    </div>
                    <div class="contact-us-footer-right">
                        <div class="contact-us-footer-right-title">All-India Toll Free Number</div>
                        <div class="contact-us-footer-right-text">
                            <a href="tel:180030012999" class="font-regular text-black text-decoration-none">180030012999</a><br>
                            (10AM-10PM)<br>
                        </div>
                        <div class="contact-us-footer-right-title">Email</div>
                        <div class="contact-us-footer-right-text">
                            <a href="mailto:support-modicare@modi.com" class="font-regular text-black text-decoration-none">support-modicare@modi.com</a><br>
                            <a href="mailto:grievance-modicare@modi.com" class="font-regular text-black text-decoration-none">grievance-modicare@modi.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</template>

<script>
 
    import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'ContactUs',
    components: {
      
        SideMenu,
      },
}
</script>