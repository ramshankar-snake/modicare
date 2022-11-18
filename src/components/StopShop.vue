<template>
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
</template>
<script>
// export default {
//     name: 'MainBanner',
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
    name: 'StopShop',
   
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