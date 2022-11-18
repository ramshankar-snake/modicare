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
                    <h1 class="tnc-section-header" style="text-align: center;">Policies and Compliances</h1>
                    <h3>Code of Ethics And Rules of Conduct</h3>
                    <p>The Modicare Rules of Conduct define and establish certain principles to be followed in the development and maintenance of a Modicare Distributorship and the rights, duties, and responsibilities of each Modicare Consultant. The Rules are designed to preserve the benefits available to all the Consultants under Modicare Sales and Marketing Plan also known as the Samir Modi Global Plan. To access the Code of Ethics and Rules of Conduct for Modicare Consultants, please click on the link below.</p>
                    <p>Modicare Code of Ethics and Rules of Conduct <a href="https://www.modicare.com/downloads/Global-Code-of-Ethics1.pdf" target="_blank"> click here to for the document</a></p>
    
                    <h3>Top Six Rules</h3>
                    <p>For your ease of reference and understanding, we have picked the most referred six Code of Ethics guidelines for best business practice.<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> click here to for the document</a></p>
    
                    <p>Here is a Video to narrate these Top Six Rules you can use to promote the best practices Click on the desired language option to access; <a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> In Hindi,</a><a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> In English</a></p>
    
                    <p>Download the Frequently asked Questions for better understanding of these six rules<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> click here to for the document</a></p>
    
                    <h3>Other Policies</h3>
                    <p>Click here for<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> Joining as a Modicare Consultant</a></p>
                    <p>Click here for<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> Social Media and Content Guidelines</a></p>
                    <p>Click here for<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> Distribution Point (DP) Agreement</a></p>
                    <p>Click here for<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> Compliance Documents</a></p>
                    <p>Click here for<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> Product Return Form</a></p>
                    <p>Click here for<a href="https://www.modicare.com/downloads/Code_of_Ethics_under_top_rules.pdf" target="_blank"> Customer Order Receipt</a></p>
    
                                    
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'PoliciesCompliance',
    components:{
        SideMenu
    }
}
</script>
