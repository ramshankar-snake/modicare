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

<main class="main-container">
    <div class="sticky-social-buttons">
        <div class="sticky-social-buttons-container">
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-facebook.svg" class="sticky-social-button-icon" alt="Modicare Facebook" loading="lazy" /></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-youtube.svg" class="sticky-social-button-icon" alt="Modicare YouTube" loading="lazy" /></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-instagram.svg" class="sticky-social-button-icon" alt="Modicare Instagram " loading="lazy" /></a>
        </div>
    </div>

    <div class="article-container modi-container achievers-container text-center">
        <section class="article-section pt-3">
            <div class="modi-search-bar">
                <div class="modi-search-bar-form">
                    <div class="modi-search-bar-input-container">
                        <div class="modi-search-bar-icon-container">
                            <img src="@/assets/images/icons/icon-search-dark.svg" alt="Search" class="modi-search-bar-icon" />
                        </div>
                        <div class="modi-search-bar-btn-cancel">
                            <img src="@/assets/images/icons/icon-close-dark.svg" alt="Cancel Search" class="modi-search-bar-btn-cancel-icon" />
                        </div>
                        <input type="text" class="modi-search-bar-input modi-search-bar-input__gray" name="modi-search-bar-input" placeholder="Search" />
                    </div>
                </div>
            </div>

            <div class="modi-filters">
                <ul class="modi-filters-types">
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link active">Samir Modi Advisory Council</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Global Black Diamond Director</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Royal Black Diamond Director</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Crown Diamond</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Presidential</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Platinum</a></li>
                </ul>
            </div>
        </section>

        <section class="achievers-listing">
            <div class="achievers-listing-grid">
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-1.png" alt="Gaurav Negi" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Gaurav Negi
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-2.png" alt="Pramilla Nishant Bhargava" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Pramilla Nishant Bhargava
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-3.png" alt="Mahesh Rai" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Mahesh Rai
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-4.png" alt="Dilip Krishnan" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Dilip Krishnan
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-5.png" alt="Suresh Roy" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Suresh Roy
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-6.png" alt="Anita Pandey" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Anita Pandey
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-7.png" alt="Sunil Tyagi" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Sunil Tyagi
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-8.png" alt="Ranjan Mehta" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Ranjan Mehta
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-9.png" alt="Veeresh KB" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Veeresh KB
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-1.png" alt="Gaurav Negi" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Gaurav Negi
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-2.png" alt="Pramilla Nishant Bhargava" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Pramilla Nishant Bhargava
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-3.png" alt="Mahesh Rai" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Mahesh Rai
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-4.png" alt="Dilip Krishnan" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Dilip Krishnan
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-5.png" alt="Suresh Roy" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Suresh Roy
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-6.png" alt="Anita Pandey" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Anita Pandey
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-7.png" alt="Sunil Tyagi" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Sunil Tyagi
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-8.png" alt="Ranjan Mehta" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Ranjan Mehta
                    </div>
                </div>
                <div class="achievers-listing-item">
                    <a href="./achievers-article.html" class="achievers-listing-item-image-link">
                        <img src="@/assets/images/achievers/achievers-9.png" alt="Veeresh KB" class="achievers-listing-item-image" />
                    </a>

                    <div class="achievers-listing-item-text">
                        Veeresh KB
                    </div>
                </div>
            </div>

            <div class="listing-pagination-container">
                <ul class="listing-pagination-list">
                    <li class="listing-pagination-item"><a href="javascript:;" class="listing-pagination-link-prev icon-before icon-chevronleft">Previous</a></li>
                    <li class="listing-pagination-item"><a href="javascript:;" class="listing-pagination-link">1</a></li>
                    <li class="listing-pagination-item"><a href="javascript:;" class="listing-pagination-link active">2</a></li>
                    <li class="listing-pagination-item"><a href="javascript:;" class="listing-pagination-link">3</a></li>
                    <li class="listing-pagination-item"><a href="javascript:;" class="listing-pagination-link-next icon-after icon-chevronright">Next</a></li>
                </ul>
            </div>
        </section>
    </div>
</main>
</template>
<script>
export default {
    name: 'SuccessStories',
}
</script>