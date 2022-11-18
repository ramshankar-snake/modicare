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
    
                    <a href="./join-us-2-bank-details.html" class="btn-next btn modi-btn modi-btn__primary px-5">Next</a>
    
                    <div class="mt-3">
                        <a href="./join-us-2-co-applicant.html" class="btn-back icon-after icon-chevronright">Back</a>
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