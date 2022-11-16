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
    
        <div class="careers-container article-container modi-container">
            <section class="careers-hero-banner">
                <div class="modi-hero-banner">
                    <div class="modi-hero-banner-image-container">
                        <img src="@/assets/images/careers/careers-hero-banner.png" class="modi-hero-banner-image" alt="Life at Modicare" />
                        <img src="@/assets/images/careers/careers-hero-banner-mobile.png" class="modi-hero-banner-image-mobile" alt="Life at Modicare" />
                    </div>
                    <div class="modi-hero-banner-content">
                        <div class="modi-hero-banner-title">Life at Modicare</div>
                        <div class="modi-hero-banner-buttons">
                            <div class="modi-hero-banner-button">
                                <a href="javascript:;" class="btn modi-btn modi-btn__secondary px-3 waves-effect waves-light">See jobs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section class="awards">
                <div class="awards-carousel swiper-container">
                    <div class="swiper-wrapper">
                        <swiper
              :modules="modules"
              :slides-per-view="3"
              :space-between="0"
              navigation
              :pagination="{ clickable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
                        <swiper-slide>
                        <div class=" awards-carousel-slide">
                            <div class="awards-carousel-item">
                                <div class="d-inline-block text-center">
                                    <img src="@/assets/images/awards-2.jpg" alt="" />
                                    <div class="awards-carousel-item-text">
                                        Rank 5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="awards-carousel-slide">
                            <div class="awards-carousel-item">
                                <div class="d-inline-block text-center">
                                    <img src="@/assets/images/awards-1.jpg" alt="" />
                                    <div class="awards-carousel-item-text">
                                        Top 50
                                    </div>
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                        <swiper-slide>
                        <div class="awards-carousel-slide">
                            <div class="awards-carousel-item">
                                <div class="d-inline-block text-center">
                                    <img src="@/assets/images/awards-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                        <swiper-slide>
                        <div class="awards-carousel-slide">
                            <div class="awards-carousel-item">
                                <div class="d-inline-block text-center">
                                    <img src="@/assets/images/awards-4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                        <swiper-slide>
                        <div class="awards-carousel-slide">
                            <div class="awards-carousel-item">
                                <div class="d-inline-block text-center">
                                    <img src="@/assets/images/awards-5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                    </swiper>
                    </div>
                </div>
                <div class="swiper-button-prev">
                    <img src="@/assets/images/btn-arrow-left.svg" alt="Previous" />
                </div>
                <div class="swiper-button-next">
                    <img src="@/assets/images/btn-arrow-right.svg" alt="Previous" />
                </div>
            </section>
    
            <section class="article-section">
                <div class="careers-video-thumbnail-container">
                    <a href="@/assets/videos/sample-1080p.mp4" class="careers-video-thumbnail-link" data-fancybox>
                        <img src="@/assets/images/careers/careers-video-thumbnail-1.png" class="careers-video-thumbnail" alt="Mr. Samir Modi" />
                    </a>
                </div>
    
                <div>Mr. Samir Modi</div>
                <div>Founder & Managing Director, Modicare</div>
    
                <h1 class="mt-4">Samirness</h1>
    
                <p>"To create something beautiful, you have to go against the norm, to create something unique, you have to challenge yourself. To be one of a kind, you think like one of a kind. To make a difference, you have to create a family. A family, what I feel are all of you. To make all of this happen, from words into reality in action, is a word called <span class="font-medium">Meraki</span>.</p>
    
                <p class="mb-3 pb-3">Meraki is a word that means, to do everything that you do, with love and creativity so that it leaves something of you in what you do. But these are only words, unless we exemplify, show, live and act in these words or in the meaning of these words, I would like to term that as a feeling called Samirness.</p>
    
                <div class="modi-accordion modi-accordion__border-top">
                    <div class="modi-accordion-section">
                        <div class="modi-accordion-section-title-container">
                            <button class="modi-accordion-section-title waves-effect waves-light collapsed more-button-collapse" data-toggle="collapse" data-target="#samirness-accordion">
                                More
                            </button>
                        </div>
                        <div id="samirness-accordion" class="collapse">
                            <div class="modi-accordion-section-body">
                                <p>I also want to thank you all, for helping me believe that we can make Meraki and Samirness a living being. And my wish is to help our organisation to think, live, and breathe the essence of the word Meraki. If we are able to do this, then I'm confident that not only we will create a unique organisation but we'll also touch the lives of all those we come in contact with. And therefore help in creating a better world than the world we live in. My endeavour is to make this real, to make this unique and crazy; because it's only those who are crazy can challenge those who are not. As only those who are crazy can think against the norm, and those who are crazy become one of a kind. I'm hoping that this essence of Meraki will become a part of you. I'm hoping that with Meraki you can change yourself, change the world and people around you. I hope and my wish for all of us is to have and live and breathe the Meraki within us.</p>
    
                                <p>There are many things we need to celebrate and many things that we can celebrate, I want to celebrate YOU. Because you are the essence of a new generation, a new concept, a new being, a new theory and I hope with this, a little bit of my belief rubs on to you, a little bit of your belief rubs on to me because together I want to create a feeling called Samirness."</p>
    
                                <div class="mt-4 mb-3">
                                    <img src="@/assets/images/modi-signature.png" alt="Mr. Samir Modi" />
                                </div>
    
                                <p class="font-medium">– Mr. Samir Modi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section class="article-section">
                <div class="article-section-row article-section-row__reverse">
                    <div class="article-section-row-media-container careers-logo-grid-section">
                        <div class="careers-logo-grid-container">
                            <div class="careers-logo-grid">
                                <img src="@/assets/images/careers/careers-logo-colorbar.png" class="careers-logo-grid-logo" alt="Colorbar" />
                                <img src="@/assets/images/careers/careers-logo-modicare.png" class="careers-logo-grid-logo" alt="Modicare" />
                                <img src="@/assets/images/careers/careers-logo-modicare-foundation.png" class="careers-logo-grid-logo" alt="Modicare Foundation" />
                                <img src="@/assets/images/careers/careers-logo-24-seven.png" class="careers-logo-grid-logo" alt="24 Seven" />
                                <img src="@/assets/images/careers/careers-logo-godfrey-phillips.png" class="careers-logo-grid-logo" alt="Godfrey Phillips" />
                                <img src="@/assets/images/careers/careers-logo-indofil.png" class="careers-logo-grid-logo" alt="Indofil" />
                            </div>
                        </div>
                    </div>
    
                    <div class="article-section-row-text">
                        <div class="article-section-row-text-inner text-left">
                            <h1 class="article-section-row-title">The bigger picture</h1>
    
                            <p>An intuitive entrepreneur, constantly striving to bring new and radical ideas to life, Mr. Samir Modi is the Executive Director, K. K. Modi Group - part of the US$ 2.8 billion Modi Enterprises, founded by his grandfather Rai Bahadur Gujarmal Modi in 1933; Director, Godfrey Phillips India Limited; Director, Indofil Industries Limited; Founder & President, 24Seven Convenience Stores and Founder & Managing Director, Colorbar Cosmetics.</p>
    
                            <a href="./about-us.html" class="icon-after icon-chevronright">About us</a>
                        </div>
                    </div>
                </div>
            </section>
    
            <section class="article-section">
                <div class="careers-carousel careers-carousel-1 swiper-container">
                    <div class="swiper-wrapper">
                        <swiper
                        :modules="modules"
                        :slides-per-view="1"
                        :space-between="0"
                       
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                      >
                      <swiper-slide>
                        <div class="">
                            <div class="swiper-slide-inner">
                                <h1 class="mb-4">From the COO's desk</h1>
    
                                <div class="careers-carousel-slide-image-container">
                                    <a href="@/assets/videos/sample-1080p.mp4" class="careers-carousel-image-inner careers-carousel-image-inner__video" data-fancybox>
                                        <img src="@/assets/images/careers/careers-video-thumbnail-2.png" class="careers-carousel-slide-image" alt="From the COO's desk" />
                                    </a>
                                </div>
    
                                <div class="careers-carousel-slide-content">
                                    <div>Mr. Rahul Shankar</div>
                                    <div>Chief Operating Officer, Modicare</div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
    
                        <swiper-slide>
                        <div class="">
                            <div class="swiper-slide-inner">
                                <h1 class="mb-4">A word from the HR head</h1>
    
                                <div class="careers-carousel-slide-image-container">
                                    <a href="@/assets/videos/sample-1080p.mp4" class="careers-carousel-image-inner careers-carousel-image-inner__video" data-fancybox>
                                        <img src="@/assets/images/careers/careers-video-thumbnail-3.png" class="careers-carousel-slide-image" alt="A word from the HR head" />
                                    </a>
                                </div>
    
                                <div class="careers-carousel-slide-content">
                                    <div>Ms. Vimmi Gujral</div>
                                    <div>Head, HR</div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    </swiper>
                    </div>
                    <div class="swiper-button-prev">
                        <img src="@/assets/images/btn-arrow-left.svg" alt="Previous" />
                    </div>
                    <div class="swiper-button-next">
                        <img src="@/assets/images/btn-arrow-right.svg" alt="Previous" />
                    </div>
                </div>
            </section>
    
            <section class="article-section">
                <h1 class="mb-4">Empowering you for greatness</h1>
    
                <div class="careers-carousel careers-carousel-2 swiper-container">
                    <div class="swiper-wrapper">
                        <swiper
                        :modules="modules"
                        :slides-per-view="1"
                        :space-between="0"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                      >
                      <swiper-slide>
                        <div class="">
                            <div class="swiper-slide-inner">
                                <div class="careers-carousel-slide-image-container">
                                    <a href="@/assets/videos/sample-1080p.mp4" class="careers-carousel-image-inner careers-carousel-image-inner__video" data-fancybox>
                                        <img src="@/assets/images/careers/careers-carousel-1.png" class="careers-carousel-slide-image" alt="The best career choice of my life" />
    
                                        <div class="careers-carousel-slide-image-badge-container">
                                            <img src="@/assets/images/awards-1.jpg" class="careers-carousel-slide-image-badge" />
                                        </div>
                                    </a>
                                </div>
    
                                <div class="careers-carousel-slide-content">
                                    <div class="careers-carousel-slide-title">The best career choice of my life</div>
    
                                    <div class="careers-carousel-slide-text">
                                        <p>"With a highly approachable and compassionate management, the needs of the employees are understood at all times. It's place which gives an equal opportunity to all with a number of women centric policies in place!"</p>
    
                                        <p>- Meenakshi Jaitly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                        <swiper-slide>
                        <div class="">
                            <div class="swiper-slide-inner">
                                <div class="careers-carousel-slide-image-container">
                                    <a href="@/assets/videos/sample-1080p.mp4" class="careers-carousel-image-inner careers-carousel-image-inner__video" data-fancybox>
                                        <img src="@/assets/images/careers/careers-carousel-2.png" class="careers-carousel-slide-image" alt="Building state of the art technology" />
    
                                        <div class="careers-carousel-slide-image-badge-container">
                                            <img src="@/assets/images/awards-2.jpg" class="careers-carousel-slide-image-badge" />
                                        </div>
                                    </a>
                                </div>
    
                                <div class="careers-carousel-slide-content">
                                    <div class="careers-carousel-slide-title">Building state of the art technology</div>
    
                                    <div class="careers-carousel-slide-text">
                                        <p>"Good is not good enough when you aim for greatness. My team has set up the most extensive digital platforms to empower the Modicare family. With a strong vision to promote freedom to earn, our state of the art systems silently become an integral part of each individual's success."</p>
    
                                        <p>- Dhiraj Gautam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                        <swiper-slide>
                        <div class="">
                            <div class="swiper-slide-inner">
                                <div class="careers-carousel-slide-image-container">
                                    <a href="@/assets/videos/sample-1080p.mp4" class="careers-carousel-image-inner careers-carousel-image-inner__video" data-fancybox>
                                        <img src="@/assets/images/careers/careers-carousel-3.png" class="careers-carousel-slide-image" alt="Extremely fortunate to be a part" />
    
                                        <div class="careers-carousel-slide-image-badge-container">
                                            <img src="@/assets/images/awards-1.jpg" class="careers-carousel-slide-image-badge" />
                                        </div>
                                    </a>
                                </div>
    
                                <div class="careers-carousel-slide-content">
                                    <div class="careers-carousel-slide-title">Extremely fortunate to be a part</div>
    
                                    <div class="careers-carousel-slide-text">
                                        <p>"The values of Modicare being an employees first organisation trickles down from the top management, right from our founder Mr. Samir Modi who always keeps people first."</p>
    
                                        <p>- Ankita Dhawan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                        <swiper-slide>
                        <div class="">
                            <div class="swiper-slide-inner">
                                <div class="careers-carousel-slide-image-container">
                                    <a href="@/assets/videos/sample-1080p.mp4" class="careers-carousel-image-inner careers-carousel-image-inner__video" data-fancybox>
                                        <img src="@/assets/images/careers/careers-carousel-4.png" class="careers-carousel-slide-image" alt="I create my own world at Modicare" />
    
                                        <div class="careers-carousel-slide-image-badge-container">
                                            <img src="@/assets/images/awards-2.jpg" class="careers-carousel-slide-image-badge" />
                                        </div>
                                    </a>
                                </div>
    
                                <div class="careers-carousel-slide-content">
                                    <div class="careers-carousel-slide-title">I create my own world at Modicare</div>
    
                                    <div class="careers-carousel-slide-text">
                                        <p>"The belief of achievement with consistency and the untiring support from the management prepared me to face any challenges which carved a niche to grow in this organization. I got right mentors & a high voltage team, which makes me feel more proud."</p>
    
                                        <p>- K. Rijil</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                    </div>
                    <div class="swiper-button-prev">
                        <img src="@/assets/images/btn-arrow-left.svg" alt="Previous" />
                    </div>
                    <div class="swiper-button-next">
                        <img src="@/assets/images/btn-arrow-right.svg" alt="Previous" />
                    </div>
                </div>
            </section>
    
            <section class="article-section careers-gallery-container">
                <h1 class="mb-5">Some fun to go along</h1>
    
                <div class="careers-gallery-outer">
                    <div class="careers-gallery swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-wrapper">
                                <swiper
                                :modules="modules"
                                :slides-per-view="3"
                                :space-between="15"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                              >
                              <swiper-slide>
                            <div class="">
                                <div class="careers-gallery-slide-inner">
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-1.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
    
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-2.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            </swiper-slide>
                            <swiper-slide>
                            <div class="">
                                <div class="careers-gallery-slide-inner">
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-3.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
    
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-4.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            </swiper-slide>
                            <swiper-slide>
                            <div class="">
                                <div class="careers-gallery-slide-inner">
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-5.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
    
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-6.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            </swiper-slide>
                            <swiper-slide>
                            <div class="">
                                <div class="careers-gallery-slide-inner">
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-7.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
    
                                    <div class="careers-gallery-slide-image-container">
                                        <img src="@/assets/images/careers/careers-gallery-8.png" class="careers-gallery-slide-image" alt="" />
                                    </div>
                                </div>
                            </div>
                            </swiper-slide>

                        </swiper>
                        </div>
                    </div>
                </div>
                    <div class="swiper-button-prev careers-gallery-prev">
                        <img src="@/assets/images/btn-arrow-left.svg" alt="Previous" />
                    </div>
                    <div class="swiper-button-next careers-gallery-next">
                        <img src="@/assets/images/btn-arrow-right.svg" alt="Previous" />
                    </div>
                </div>
            </section>
    
            <section class="careers-better-tmrw">
                <h1 class="careers-better-tmrw-title">Joy in giving</h1>
    
                <div class="careers-better-tmrw-text">
                    Giving back to the community is one of our core values of SAMIRNESS, as we believe that it helps us to find a purpose and also helps in creating a meaningful life for ourselves and for others too. Modicarians has been involved in various societal enrichment programs like Care to share, voluntary teaching and cleaning at Modicare foundation schools, flood relief donations made during Kerala flood, Donations made for COVID relief fund ,Joy of giving for underprivileged children to name a few.
                </div>
    
                <a href="./modicare-foundation.html" class="icon-after icon-chevronright">Join the movement</a>
    
                <div class="careers-better-tmrw-images">
                    <div class="careers-better-tmrw-image-container">
                        <img src="@/assets/images/careers/careers-joy-in-giving-1.png" class="careers-better-tmrw-image" alt="Making a better tomorrow, together." />
                    </div>
                    <div class="careers-better-tmrw-image-container">
                        <img src="@/assets/images/careers/careers-joy-in-giving-2.png" class="careers-better-tmrw-image" alt="Making a better tomorrow, together." />
                    </div>
                </div>
            </section>
    
            <section class="careers-footer">
                <h1 class="careers-footer-title">Become a part of the Modicare family!</h1>
    
                <a href="javascript:;" class="btn modi-btn modi-btn__secondary px-5 waves-effect waves-light">Explore</a>
            </section>
    
            <section class="article-section careers-faq-section">
                <h1 class="mb-4">Frequently asked</h1>
    
                <div class="modi-filters my-4 pt-4 pb-2">
                    <ul class="nav modi-filters-types modi-filters-types__secondary">
                        <li class="modi-filters-type"><a data-toggle="pill" href="#careers-faq-general" class="modi-filters-type-link active">General</a></li>
                        <li class="modi-filters-type"><a data-toggle="pill" href="#careers-faq-interviews" class="modi-filters-type-link">Interviews</a></li>
                        <li class="modi-filters-type"><a data-toggle="pill" href="#careers-faq-benefits" class="modi-filters-type-link">Benefits</a></li>
                    </ul>
                </div>
    
                <div class="tab-content text-left">
                    <div id="careers-faq-general" class="tab-pane fade show active">
                        <div class="careers-faq-accordion modi-accordion modi-accordion__border-top">
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-general-1">
                                        I have submitted my resume for an open position, what next?
                                    </button>
                                </div>
                                <div id="faq-general-1" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Thanks for your submission, our mailboxes are carefully monitored, and we will be getting in touch with the shortlisted candidates.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-general-2">
                                        Is there someone at Modicare I can speak with for open positions?
                                    </button>
                                </div>
                                <div id="faq-general-2" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>The best way to stay in touch with us is to email us on hr-modicare@modi.com. Leave us a comment or question, and we'll do our best to get back to you.</p>
    
    <p>In case your resume is shortlisted, you will have a dedicated talent management specialist who will guide you through the entire interview process.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-general-3">
                                        I do not see any relevant open position, can I still apply?
                                    </button>
                                </div>
                                <div id="faq-general-3" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Yes, You can. As we will search our database first when the position opens up and we will contact you in case your resume gets shortlisted. For resume tips click on Interviews above</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-general-4">
                                        I&#x27;m a female candidate who took a sabbatical for 2 years due to childbirth, will my candidature be considered?
                                    </button>
                                </div>
                                <div id="faq-general-4" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Modicare is an equal opportunity employer and we have diverse workforce. We hire for skills and values. Talents from all walks of life are welcomed irrespective of Gender.</p>
    
    <p>You can please see here the testimonials of our women employees and refer to our diversity and inclusion initiative</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-general-5">
                                        What is your interview process?
                                    </button>
                                </div>
                                <div id="faq-general-5" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>It depends. For most positions, we begin the process with a telephonic discussion from our talent management team.</p>
    
    <p>And if there's interest on both sides, A Telephonic interview may happen with the hiring manager or we can invite the candidate for a face to face interview, typically with the hiring manager or several teammates.</p>
    
    <p>As each team and requirement is unique, so can expect some variations. Refer to Interviews tab above.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-general-6">
                                        What benefits will I have after joining?
                                    </button>
                                </div>
                                <div id="faq-general-6" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Please refer to the Benefits tab above for information regarding employee benefits at Modicare.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-general-7">
                                        How is my career progression determined at Modicare?
                                    </button>
                                </div>
                                <div id="faq-general-7" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Modicare believes the responsibility for career development rests both with the individual and the organisation. While the organisation provides opportunities for learning and growth, it is the individual's responsibility to ensure he/she enhances his/hers competencies to shoulder higher responsibilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div id="careers-faq-interviews" class="tab-pane fade">
                        <div class="careers-faq-accordion modi-accordion modi-accordion__border-top">
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-1">
                                        Family mediclaim
                                    </button>
                                </div>
                                <div id="faq-interviews-1" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Modicare Mediclaim policy is an insurance cover under which the employees and their families are covered with a certain amount.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-2">
                                        Covid insurance policy
                                    </button>
                                </div>
                                <div id="faq-interviews-2" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>We understand that such pandemic requires specialized isolated treatment and monitoring for a prolonged period. The treatment can be costly if not sufficiently insured; hence we have opted for COVID insurance policy for our employees.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-3">
                                        Parental Insurance
                                    </button>
                                </div>
                                <div id="faq-interviews-3" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>The parents of an employee are also given mediclaim coverage with a certain amount. The organization fully pays the premium.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-4">
                                        Care for your family
                                    </button>
                                </div>
                                <div id="faq-interviews-4" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Group personal accident and Group Term life insurance covers. These covers are taken to protect employees' families in the event of an employee's accident /death.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-5">
                                        Employee discounts
                                    </button>
                                </div>
                                <div id="faq-interviews-5" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Our employees get attractive discounts on product purchases made at Modicare, COLORBAR and 24Seven.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-6">
                                        Loan and advances
                                    </button>
                                </div>
                                <div id="faq-interviews-6" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>To Alleviate financial stress and helping employees achieve their personal milestones we have a vehicle and home loan facility.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-7">
                                        Learning and development
                                    </button>
                                </div>
                                <div id="faq-interviews-7" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Our employee gets ample opportunities to learn and develop their current skills.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-8">
                                        Employee engagement events
                                    </button>
                                </div>
                                <div id="faq-interviews-8" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Our all employees last year went to Thailand and experienced the best class hospitality, we believe in work hard and party harder.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-interviews-9">
                                        Work-life balance
                                    </button>
                                </div>
                                <div id="faq-interviews-9" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Flexible in timings and sumptuous amount of paid leave help our people achieve a healthy work balance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div id="careers-faq-benefits" class="tab-pane fade">
                        <div class="careers-faq-accordion modi-accordion modi-accordion__border-top">
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-1">
                                        What should my resume include?
                                    </button>
                                </div>
                                <div id="faq-benefits-1" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Apart from your qualification and previous job summary, we want to hear about your latest accomplishments, your strengths, and how specific skills you possess can relate to the current open position.</p>
    
    <p>Be sure to highlight your achievements in previous jobs—not just your duties as it will help you to create a winning proposition.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-2">
                                        How long should my resume be?
                                    </button>
                                </div>
                                <div id="faq-benefits-2" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>It's okay to use more than one page. However, be sure to include your outstanding and relevant achievements. A cover letter of resume summary on the first page can give the recruiter and hiring manager a glance about your entire portfolio.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-3">
                                        How should I prepare for the interview?
                                    </button>
                                </div>
                                <div id="faq-benefits-3" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Please help us get to know you by explaining how your prior experience and successes have prepared you for the role you're pursuing at Modicare.Please review the job description and do a bit of research on our products and our company. You can even take the guidance of your recruiter on the number of interviews that will happen and the estimated time.Come with a few examples in mind that demonstrate your strengths, any questions you have about the opportunity, and some thoughtful questions which you have for the role or organization.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-4">
                                        What kind of questions can I expect?
                                    </button>
                                </div>
                                <div id="faq-benefits-4" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>During the interview you will be asked a series of standardized questions about your past experiences achievements highlighted, your roles and responsibilities including your past job summaries to determine the role fitApart from this we also determine cultural and behavioural fit by giving various scenarios and approach followedFor example:</p>
    
    <p>You will also be asked questions about your thought process in work-related situations,</p>
    
    <ul>
    <li>If you were given a difficult project, how would you ensure its success when working with cross functional teams?</li>
    <li>What would you do if you had conflict with a team member?</li>
    <li>Any of your previous failures or slip up and what you learned from it?</li>
    </ul>
    
    <p>For each answer, you will be expected to describe examples of behaviours, which our interviewers will use to as use to assess your proficiency in each of our core competencies.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-5">
                                        What should my answers include?
                                    </button>
                                </div>
                                <div id="faq-benefits-5" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Our panel at Modicare will be looking for a complete response from you to best understand your past roles achievements, skills, and thought process.In order to provide a comprehensive response, be sure to include three key elements in each question asked:</p>
    
    <ul>
    <li><span class="font-medium">Context:</span> Provide the interviewer with enough background information so that they can best understand the situation. In the questions related to your past achievements clary talk about your role and the situation, In case you are not clear please ask the interviewer for clarity</li>
    <li><span class="font-medium">Actions:</span> Be sure to inform the interviewer of all the relevant actions that you took or would take in the situation. Help the interviewer understand WHY you acted, or would behave, in a certain way, talk about the challenges and how you navigated them</li>
    <li><span class="font-medium">Results:</span> let the interviewer know what results came from your actions and how impactful they were. In questions related to your thought process, make sure the interviewer knows what results would come and why. Talk about the learning from the failures and how you plan to avoid them</li>
    </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-6">
                                        How would I be evaluated?
                                    </button>
                                </div>
                                <div id="faq-benefits-6" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>All individuals will be assessed on several factors relevant to the current open position, including domain knowledge, presentation style, conceptual ability, interpersonal skills, motivation, initiative, organization, communication skills, team skills, thought process, behaviours demonstrated in situation based questions and overall integrity.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-7">
                                        Do you look for a cultural fit in a potential candidate?
                                    </button>
                                </div>
                                <div id="faq-benefits-7" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>At Modicare, our culture and values are most important. We look for individuals who are passionate about learning and embracing changes. We work as a family; hence the value of empathy and teamwork, accountability also holds vital importance for us.Our culture is SAMIRNESS and work Philosophy is MERAKI. Our all practices merge into our culture which we call as “SAMIRNESS” and from our founder Mr Samir Modi,</p>
    
    <p>Our work Philosophy which we call as “MERAKI” inspires each and every employee to leave a piece of them in every work we do and we are proud that with the efforts of our employees, Modicare is a market leader in direct selling industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-8">
                                        What should I wear for an interview?
                                    </button>
                                </div>
                                <div id="faq-benefits-8" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Dress to impress us We want our employees to be well-groomed and professionally dressed up all the time, so even for interviews, be it in person on virtual, we expect potential candidates to dress up appropriately. You can wear smart casuals if you want.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-9">
                                        Where and how will my first interview be held?
                                    </button>
                                </div>
                                <div id="faq-benefits-9" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>For most positions, we begin the process with a telephonic discussion from our talent management team.And if there's interest on both sides, A Telephonic interview may happen with the hiring manager or we can invite the candidate for a face to face interview, typically with the hiring manager or several teammates.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="modi-accordion-section">
                                <div class="modi-accordion-section-title-container">
                                    <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" data-target="#faq-benefits-10">
                                        How long will my interview last?
                                    </button>
                                </div>
                                <div id="faq-benefits-10" class="collapse">
                                    <div class="modi-accordion-section-body">
                                        <p>Most interviews last around 45-60 minutes, but there are no strict time limits.During this time you will also have the opportunity to learn more about the roles and responsibilities, Modicare and its key businesses and we would also love to answer all your questions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
  </template>
  
  <script>
//   export default {
//     name: 'CareerPage',
    
    // props: {
    //   msg: String
    // }
//   }
  import {  Pagination, A11y } from 'swiper';
  import SwiperCore, { Navigation } from "swiper";
  import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
   
    
    SwiperCore.use([Navigation]);
    export default {
     name: 'CareerPage',
     
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const swiper = useSwiper();
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          swiper,
          modules: [ Pagination, A11y],
          swiperOptions: {
                      loop: true,
                      centeredSlides: true,
                      navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev'
                      }
                  }
        };
      },
    };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  