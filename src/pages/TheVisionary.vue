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

    <div class="article-container modi-container visionary-container text-center">
        <div class="modi-hero-banner">
            <div class="modi-hero-banner-image-container">
                <img src="@/assets/images/the-visionary/the-visionary-hero-banner.png" class="modi-hero-banner-image" alt="Mr. Samir Modi" />
                <img src="@/assets/images/the-visionary/the-visionary-hero-banner-mobile.png" class="modi-hero-banner-image-mobile" alt="Mr. Samir Modi" />
            </div>
            <div class="modi-hero-banner-content">
                <div class="modi-hero-banner-title">Mr. Samir Modi</div>
                <div class="modi-hero-banner-subtitle">Founder & Managing Director, Modicare</div>
            </div>
        </div>

        <section class="article-section">
            <h1 class="mb-4">The Visionary</h1>

            <p>In 1996, the concept of freedom was reinvented by a young man who came in with innovative thinking & power packed passion. An intuitive entrepreneur, Mr. Samir Modi is the revolutionary who not only taught people how to dream but also helped them achieve those dreams.</p>

            <p>Before starting Modicare, he enrolled himself as a consultant with many direct selling companies abroad to understand their market and bring back learning from his experience, hence giving him a·first-mover advantage. Samir Modi strongly believes that the only way to succeed in a developing nation like India is through economic independence. Following this belief, he launched India's first Direct Selling Company, Modicare, at the age of 25, with the vision of giving 'Freedom' to every Indian - Freedom to go beyond expectations, freedom to chase your dreams and freedom to empower the world around you.</p>

            <p>Modicare has become one of the fastest growing Direct Selling companies in India with Samirness and Meraki as the cornerstones while following the guiding principles of Samir Modi - "Soch Badlo, Khudko Badlo, Duniya Badlo" ("Change your thoughts, change your ways and the world around you will change too"). We believe that change begins with you and we help you change for the better.</p>

            <p>Today, Modicare is one of the fastest growing direct selling companies in India and is a part of the US$ 1.5 billion Modi Enterprises. It has, and continues to change the lives of millions of Indians through the Modicare Freedom Movement.</p>

            <a href="javascript:;" class="icon-after icon-chevronright">Modi Enterprise</a>

            <div class="article-logo-grid-container mt-4">
                <div class="article-logo-grid">
                    <img src="@/assets/images/careers/careers-logo-modicare.png" class="article-logo-item" alt="Modicare" />
                    <img src="@/assets/images/careers/careers-logo-modicare-foundation.png" class="article-logo-item" alt="Modicare Foundation" />
                    <img src="@/assets/images/careers/careers-logo-godfrey-phillips.png" class="article-logo-item" alt="Godfrey Phillips" />
                    <img src="@/assets/images/careers/careers-logo-colorbar.png" class="article-logo-item" alt="Colorbar" />
                    <img src="@/assets/images/careers/careers-logo-24-seven.png" class="article-logo-item" alt="24 Seven" />
                    <img src="@/assets/images/careers/careers-logo-indofil.png" class="article-logo-item" alt="Indofil" />
                </div>
            </div>
        </section>

        <section class="article-section">
            <h1 class="mb-4">A Pioneer's Journey</h1>

            <div class="mb-4">
                <a href="@/assets/videos/sample-1080p.mp4" class="article-video-thumbnail-link" data-fancybox>
                    <img src="@/assets/images/the-visionary/the-visionary-video-banner.png" class="article-video-thumbnail" alt="" />
                </a>
            </div>

            <p>An alumnus of the famed Harvard Business School, Mr. Samir Modi's stint in the US gave him a global perspective and a multicultural approach to work. During his tenure there, the success of Indians worldwide amazed him. He began to understand that the only way to replicate success in India was through economic independence. Today, Modicare is changing the lives of lakhs of Indians by providing international quality products at Indian prices and making it accessible for them through 9000+ distributors, over 4 million direct sellers and more than 300K new direct sellers each month.</p>

            <p>Understanding the contemporary consumer behavior and trends in the Indian cosmetic product offerings, Samir Modi established Colorbar Cosmetics in 2004 to match steps with international brands. Today, it is the third largest cosmetics brand in the country, in an industry dominated by international giants. It was recently honored for breaking two Guinness World Records™ for having the most people to get their nails filed & varnished and the largest nail polish pattern mosaic respectively.</p>

            <p>Another brainchild of Samir Modi is the 24Seven Convenience Stores; India's first of its kind round-the-clock convenience retail chain, launched in 2005. It now has over 90 stores in Delhi-NCR and Chandigarh. In November 2018, he took over as President of the Confederation of Asia Pacific Chambers of Commerce and Industry (CACCI). He is also a member of the FICCI Executive Committee and serves as Director, Godfrey Phillips India Limited; Director, Indofil Industries Limited; Founder & Managing Director, Colorbar Cosmetics and Founder & President, 24Seven Convenience Stores.</p>

            <p>Samir Modi took the onus of continuing the philanthropic tradition of his family and set up the Modicare Foundation in 1996. The Foundation has done extensive work in the field of HIV/AIDS Awareness, gender related issues and works proactively for children's education.</p>

            <p>In the leadership of Samir Modi, Modicare is giving people the ability to take charge of their destiny and unlock their full potential. With more than 250+ products to cover all needs, we have opened doors to endless possibilities.</p>
        </section>

        <section class="article-section mb-5">
            <h1 class="mb-4">Connect with him</h1>

            <div class="article-social-links mb-5">
                <a href="javascript:;" class="article-social-link waves-effect"><img src="@/assets/images/icons/icon-twitter.svg" alt="Twitter" class="article-social-icon article-social-icon__twitter" /></a>
                <a href="javascript:;" class="article-social-link waves-effect"><img src="@/assets/images/icons/icon-linkedin.svg" alt="LinkedIn" class="article-social-icon article-social-icon__linkedin" /></a>
            </div>
        </section>
    </div>
</main>

</template>

<script>
export default {
    name: 'TheVisionary',
}
</script>