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
                    <a href="catalogues.html" class="icon-after icon-chevronright side-menu-link">Catalogues</a>
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

<main class="main-container main-container__home">
    <section class="hero-banner-carousel">
        <div class="hero-banner-carousel-container swiper-container">
         
          
       
            <div class="swiper-wrapper">
              <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="0"
              navigation
              :pagination="{ clickable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class=" hero-banner-carousel-slide">
                        <picture>
                            <!-- <source media="(max-width: 375px)" srcset="@/assets/images/home/hero-banner-carousel-w375.png">
                            <source media="(max-width: 768px)" srcset="@/assets/images/home/hero-banner-carousel-w768.png">
                            <source media="(min-width: 769px)" srcset="@/assets/images/home/hero-banner-carousel-w2560.png"> -->
                            <img src="@/assets/images/home/hero-banner-carousel.png" class="hero-banner-carousel-slide-banner" alt="">
                        </picture>
                    </div>
                  </swiper-slide>
                </swiper>
            </div>
    
            <div class="swiper-button-prev">
                <img src="@/assets/images/home/carousel-arrow-left-white.svg" alt="Previous" />
            </div>
            <div class="swiper-button-next"  @click="swiper.slideNext()">
                <img src="@/assets/images/home/carousel-arrow-right-white.svg" alt="Next" />
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <section class="products-showcase">
        <div class="products-showcase-container">
            <div class="products-showcase-introduction">
                <h1 class="products-showcase-title">India's One Stop Shop</h1>
    
                <div class="products-showcase-content">
                    <p>From skin care to technology, choose from a range of products that speak quality. All Modicare products come with a 100% satisfaction guarantee.</p>
                </div>
            </div>
    
            <div class="products-showcase-gallery swiper-container">
                <div class="swiper-wrapper">
                  <swiper
                  
                  :slides-per-view="4"
                  :space-between="0"
                  :autoplay="autoplay"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                >
                <swiper-slide>
                
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-wellness.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-wellness.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-wellness.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Wellness</div>
                        </a>
                    </div>
                  </swiper-slide>
             
                  <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-personal-care.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-personal-care.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-personal-care.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Personal Care</div>
                        </a>
                    </div>
                  </swiper-slide>
    
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-home-care.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-home-care.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-home-care.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Home Care</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-laundry-care.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-laundry-care.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-laundry-care.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Laundry Care</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-tech.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-tech.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-tech.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Tech</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-f-and-b.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-f-and-b.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-f-and-b.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">F&B</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-watches.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-watches.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-watches.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Watches</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-jewellery.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-jewellery.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-jewellery.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Jewellery</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-agriculture.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-agriculture.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-agriculture.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Agriculture</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-skin-care.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-skin-care.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-skin-care.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Skin Care</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-vaping.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-vaping.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-vaping.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Vaping</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-cbd.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-cbd.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-cbd.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">CBD</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-color.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-color.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-color.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Color</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-auto.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-auto.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-auto.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Auto</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-uniform.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-uniform.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-uniform.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Uniform</div>
                        </a>
                    </div>
                  </swiper-slide>
                    <swiper-slide>
                    <div class="products-showcase-gallery-item">
                        <a href="./product-listing.html" class="products-showcase-gallery-item-link">
                            <div class="products-showcase-gallery-item-image-container">
                                <picture>
                                    <source srcset="@/assets/images/gallery-literature.webp" type="image/webp">
                                    <source srcset="@/assets/images/gallery-literature.jpg" type="image/jpeg">
                                    <img src="@/assets/images/gallery-literature.jpg" alt="" />
                                </picture>
                                <div class="products-showcase-gallery-item-btn">Shop now</div>
                            </div>
                            <div class="products-showcase-gallery-item-text">Literature</div>
                        </a>
                    </div>
                  </swiper-slide>
                </swiper>
                </div>
    
                <div class="swiper-button-prev">
                    <img src="@/assets/images/home/carousel-arrow-left-white-primary-bg.svg" alt="Previous" />
                </div>
                <div class="swiper-button-next">
                    <img src="@/assets/images/home/carousel-arrow-right-white-primary-bg.svg" alt="Next" />
                </div>
            </div>
    
            <div class="products-showcase-introduction">
                <h1 class="products-showcase-title">Most Loved</h1>
    
                <div class="products-showcase-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                </div>
    
                <div class="products-showcase-links mt-4">
                    <a href="product-listing.html" class="icon-after icon-chevronright">More</a>
                </div>
            </div>
    
            <div id="most-loved-products-carousel" class="product-listing-carousel-container modi-container">
                <div class="product-listing-carousel swiper-container">
                    <div class="swiper-wrapper">
                        <swiper
                        :slides-per-view="4"
                        :space-between="0"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                      >
                      <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-6.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-6.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-7.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        </swiper>
                    </div>
                </div>
    
                <div class="swiper-button-prev">
                    <img src="@/assets/images/home/carousel-arrow-left-white-primary-bg.svg" alt="Previous" />
                </div>
                <div class="swiper-button-next">
                    <img src="@/assets/images/home/carousel-arrow-right-white-primary-bg.svg" alt="Next" />
                </div>
            </div>
    
            <div class="products-showcase-introduction">
                <h1 class="products-showcase-title">Just in!</h1>
    
                <div class="products-showcase-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                </div>
    
                <div class="products-showcase-links mt-4">
                    <a href="product-listing.html" class="icon-after icon-chevronright">More</a>
                </div>
            </div>
    
            <div id="just-in-products-carousel" class="product-listing-carousel-container modi-container">
               
                <div class="product-listing-carousel swiper-container">
                    <div class="swiper-wrapper">
                        <swiper
                        :slides-per-view="4"
                        :space-between="0"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                      >
                      <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-6.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-6.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-7.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="swiper-button-prev">
                    <img src="@/assets/images/home/carousel-arrow-left-white-primary-bg.svg" alt="Previous" />
                </div>
                <div class="swiper-button-next">
                    <img src="@/assets/images/home/carousel-arrow-right-white-primary-bg.svg" alt="Next" />
                </div>
            </div>
    
            <div class="products-showcase-introduction">
                <h1 class="products-showcase-title">Top Deals</h1>
    
                <div class="products-showcase-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                </div>
    
                <div class="products-showcase-links mt-4">
                    <a href="product-listing.html" class="icon-after icon-chevronright">More</a>
                </div>
            </div>
    
            <div id="top-deals-products-carousel" class="product-listing-carousel-container modi-container mb-5">
                <div class="product-listing-carousel swiper-container">
                    <div class="swiper-wrapper">
                        <swiper
                        :slides-per-view="4"
                        :space-between="0"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                      >
                      <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-6.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-nails-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-3.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-4.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-5.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-6.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-face-7.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-1.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                            <swiper-slide>
                            <div class=" product-listing-carousel-slide">
                                <div class="listing-item">
                                    <div class="listing-item-link">
                                        <div class="listing-item-inner">
                                            <a href="./product-details.html" class="listing-item-image-container">
                                                <img class="listing-item-image" src="@/assets/images/products/products-lips-2.png" />
                                            </a>
                                            <div class="listing-item-description-container">
                                                <a href="./product-details.html" class="listing-item-description">Urban Colour - Instant Radiance Illuminating Lotion with Vitamin C</a>
                                                <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal" data-target="#modi-product-quick-view-modal">Quick view</a>
                                                <div class="listing-item-additional">
                                                    <div class="listing-item-size">30ml</div>
                                                    <div class="listing-item-price">£ 22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listing-item-footer-container">
                                        <div class="listing-item-quantity modi-qty-dropdown-container">
                                            <select
                                                name="listing-item-quantity-select"
                                                class="selectpicker modi-qty-dropdown"
                                                data-container="body"
                                                data-live-search="true"
                                                data-size="7"
                                                data-style="modi-qty-dropdown-btn"
                                                title="Qty"
                                            >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                    <option value="21">21</option>
                                                    <option value="22">22</option>
                                                    <option value="23">23</option>
                                                    <option value="24">24</option>
                                                    <option value="25">25</option>
                                                    <option value="26">26</option>
                                                    <option value="27">27</option>
                                                    <option value="28">28</option>
                                                    <option value="29">29</option>
                                                    <option value="30">30</option>
                                                    <option value="31">31</option>
                                                    <option value="32">32</option>
                                                    <option value="33">33</option>
                                                    <option value="34">34</option>
                                                    <option value="35">35</option>
                                                    <option value="36">36</option>
                                                    <option value="37">37</option>
                                                    <option value="38">38</option>
                                                    <option value="39">39</option>
                                                    <option value="40">40</option>
                                                    <option value="41">41</option>
                                                    <option value="42">42</option>
                                                    <option value="43">43</option>
                                                    <option value="44">44</option>
                                                    <option value="45">45</option>
                                                    <option value="46">46</option>
                                                    <option value="47">47</option>
                                                    <option value="48">48</option>
                                                    <option value="49">49</option>
                                                    <option value="50">50</option>
                                                    <option value="51">51</option>
                                                    <option value="52">52</option>
                                                    <option value="53">53</option>
                                                    <option value="54">54</option>
                                                    <option value="55">55</option>
                                                    <option value="56">56</option>
                                                    <option value="57">57</option>
                                                    <option value="58">58</option>
                                                    <option value="59">59</option>
                                                    <option value="60">60</option>
                                                    <option value="61">61</option>
                                                    <option value="62">62</option>
                                                    <option value="63">63</option>
                                                    <option value="64">64</option>
                                                    <option value="65">65</option>
                                                    <option value="66">66</option>
                                                    <option value="67">67</option>
                                                    <option value="68">68</option>
                                                    <option value="69">69</option>
                                                    <option value="70">70</option>
                                                    <option value="71">71</option>
                                                    <option value="72">72</option>
                                                    <option value="73">73</option>
                                                    <option value="74">74</option>
                                                    <option value="75">75</option>
                                                    <option value="76">76</option>
                                                    <option value="77">77</option>
                                                    <option value="78">78</option>
                                                    <option value="79">79</option>
                                                    <option value="80">80</option>
                                                    <option value="81">81</option>
                                                    <option value="82">82</option>
                                                    <option value="83">83</option>
                                                    <option value="84">84</option>
                                                    <option value="85">85</option>
                                                    <option value="86">86</option>
                                                    <option value="87">87</option>
                                                    <option value="88">88</option>
                                                    <option value="89">89</option>
                                                    <option value="90">90</option>
                                                    <option value="91">91</option>
                                                    <option value="92">92</option>
                                                    <option value="93">93</option>
                                                    <option value="94">94</option>
                                                    <option value="95">95</option>
                                                    <option value="96">96</option>
                                                    <option value="97">97</option>
                                                    <option value="98">98</option>
                                                    <option value="99">99</option>
                                                    <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div class="listing-item-add-to-bag">
                                            <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary" data-toggle="modal" data-target="#modi-item-unavailable-modal">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        </swiper>
                    </div>
                </div>
    
                <div class="swiper-button-prev">
                    <img src="@/assets/images/home/carousel-arrow-left-white-primary-bg.svg" alt="Previous" />
                </div>
                <div class="swiper-button-next">
                    <img src="@/assets/images/home/carousel-arrow-right-white-primary-bg.svg" alt="Next" />
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
                    <a href="satisfaction-guarantee.html" class="icon-after icon-chevronright">More</a>
                </div>
                    <div class="guarantee-item col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image" src='@/assets/images/find-a-consultant.svg' />
                        </div>
                        <p class="guarantee-item-title">Stores Near you</p>
                        <p class="guarantee-item-text">Love what you see? Visit the nearest store for a complete shopping experience</p>
                        <a href="store-locator.html" class="icon-after icon-chevronright">Consultant locator</a>
                    </div>
            </div>
        </div>
    </section>

    <section class="home-contact-us">
        <div class="home-contact-us-container">
            <div class="col-12">
                <div class="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                    <div class="home-contact-us-text-container">
                        <h1 class="mb-4">Drop us a note</h1>
                        <p>Send us your details and we'll help you with your queries and steps to begin a new way of life</p>
                    </div>
                </div>
    
                <div class="home-contact-us-form-container">
                    <div class="modi-form">
                        <div class="home-contact-us-type-toggle-container">
                            <div class="home-contact-us-type active" id="home-contact-us-type-shopping">
                                Shopping
                            </div>
                            <input type="checkbox" name="form-type" id="home-contact-us-type-toggle">
                            <label for="home-contact-us-type-toggle"></label>
                            <div class="home-contact-us-type" id="home-contact-us-type-business-opportunity">
                                Business Opportunity
                            </div>
                        </div>
                        <div class="modi-form-row modi-form-row__1-1">
                            <div class="md-form">
                                <input type="text" id="form-name" name="form-name" class="form-control" />
                                <label for="form-name">Name</label>
                            </div>
    
                            <div class="md-form">
                                <input type="text" id="form-phone" name="form-phone" class="form-control" />
                                <label for="form-phone">Phone</label>
                            </div>
                        </div>
    
                        <div class="modi-form-row modi-form-row__1-1">
                            <div class="md-form">
                                <input type="text" id="form-email" name="form-email" class="form-control" />
                                <label for="form-email">Email</label>
                            </div>
    
                            <div class="md-form">
                                <input type="text" id="form-location" name="form-location" class="form-control" />
                                <label for="form-location">Location</label>
                            </div>
                        </div>
    
                        <input class="home-contact-us-btn btn modi-btn modi-btn__primary px-5" type="submit" value="Send" />
    
                        <div class="modi-form-checkbox-container modi-form-checkbox-container__px mt-4">
                            <label for="form-checkbox-1">
                                <input type="checkbox" id="form-checkbox-1" name="form-checkbox-1" class="" />
                                <div class="modi-form-checkbox"></div>
                                <div class="modi-form-checkbox-title">
                                    I agree to the <a href="./privacy.policy.html" target="_blank">privacy policy</a>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
    
                <div class="home-contact-us-social-container">
                    <div class="home-contact-us-text-container">
                        <h1 class="mb-4">Stay In Touch</h1>
    
                        <div class="home-contact-us-social-links">
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-instagram.png" alt="Modicare Instagram" />
                            </a>
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-facebook.png" alt="Modicare Facebook" />
                            </a>
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-youtube.png" alt="Modicare YouTube" />
                            </a>
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-linkedin.png" alt="Modicare Linkedin" />
                            </a>
                        </div>
    
                        <a href="./contact-us.html" class="join-us-confirmation-button btn modi-btn modi-btn__primary">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

 
<component :is="script" src="/src/assets/js/main.js" ></component>

</template>

<script>
// export default {
  
//   props: {
//     msg: String
//   }
// }
import {  Pagination, A11y } from 'swiper';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
 
  
  SwiperCore.use([Navigation]);
  export default {
    name: 'HelloWorld',
   
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
                    // slidesOffsetBefore: '100px',
                    // slidesOffsetAfter: '100px',
                    // slidesPerView: 'auto',
                    // touchRatio: 0.2,
                    // slideToClickedSlide: true,
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
