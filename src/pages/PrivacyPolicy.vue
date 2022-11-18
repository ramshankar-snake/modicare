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
        <section class="tnc">
            <div class="tnc-container modi-container">
                <div class="tnc-section">
                    <h1 class="tnc-section-header" style="text-align: center;">Privacy Policy</h1>
                    <p>At Modicare, we respect every individual's right to privacy. Our relationship with you is our most valuable asset and is
                    the very basis of our name and reputation.</p>
                    <p>We understand the importance you place on the privacy and security of
                    information that personally identifies you or your account information. We refer to and treat this information as
                    "personal information".</p>
                    <p>We do reserve the right to disclose or report personal information in limited circumstances
                    where we believe in good faith that disclosure is required under law, to cooperate with regulators or law enforcement
                    authorities, or to protect our rights or property.</p>
                    <p>We use personal information in ways that are compatible with the
                    purposes for which we originally requested it. For example, we will use the information you give us to process your
                    requests and transactions, to provide you with additional information about products and services, or to evaluate your
                    financial needs. To do so, we may share personal information with an agent or affiliate.</p>
                    <p>We limit the collection and use
                    of personal information to what is necessary to administer our business and to deliver superior service to you. This may
                    include advising you about our products or services, those of our affiliates, and other opportunities that we believe
                    may interest you. To serve you better, we may combine information you give us on the Web or through other channels.</p>
                    <p>When
                    we share personal information with an agent or affiliate, we protect that personal information with a strict
                    confidentiality agreement. Companies that we hire to provide support services or act as our agent must conform to our
                    privacy standards.</p>
                    <p>Modicare corporate policies require that employees with access to confidential customer information
                    may not use or disclose the information except for business use. All employees are required to safeguard such
                    information, as specified in their confidentiality agreements with Modicare.</p>
                    <p>On occasions we may assist a company that
                    is not affiliated with Modicare in providing or offering a product or service to you. In such circumstances, marketing
                    materials will include instructions on how you can request not to receive those communications in the future. In all
                    cases your personal information is protected by a strict confidentiality agreement. We do not allow any non-affiliated
                    company to retain your personal information longer than necessary to provide the product, service, or information,
                    unless you affirmatively grant us permission to do so.</p>
                    <p>We continue to evaluate our efforts to protect personal
                    information and make every effort to keep your personal information accurate and up to date.</p>
                    <p>If you identify any error
                    in your personal information or need to make a change to that information, please contact us and we will promptly update
                    our records.</p>
                    <p>If you have any questions or concerns, please contact us by e-mail at support-modicare@modicare.com or call
                    us at Modicare HO.</p>
    
                    <h3>Cookies</h3>
                    <p>To personalize your experience on our Web site or with one of our promotions, we may assign your computer
                    browser a unique random number, called a "cookie." Cookies enhance the Modicare web site performance in several
                    important ways: they personalize your experience.</p>
                    
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'PrivacyPolicy',
    components:{
        SideMenu
    }
}
</script>
