<template>
    <SideMenu></SideMenu>
    <main class="main-container">
        <section class="pdt-main" style="padding-top: 60px;">
            <div class="modi-container-flex pdt-main-container">
                <div class="pdt-main-images col-12 col-md-6">
                    <div class="pdt-main-gallery-top swiper-container">
                        <div v-if="(products.productImages != 0)" class="swiper-wrapper">
                            <div v-for="image in products.productImages" class="swiper-slide pdt-main-gallery-top-item">
                                <img :src="image.zoomImagePath" alt="" />
                            </div>

                        </div>
                        <div v-if="(products.productImages == 0)" >
                            <img :src="productDetail.productImage" style="width:100%;">
                        </div>
                    </div>

                    <div class="pdt-main-gallery-thumbs swiper-container">
                        <div class="swiper-wrapper">
                            <div v-for="product in products.productImages"
                                class="swiper-slide pdt-main-gallery-thumbs-item">
                                <img :src="product.imagePath" alt="" />
                            </div>
                        </div>
                        <div class="swiper-button-prev">
                            <img src="@/assets/images/btn-arrow-left.svg" alt="Previous" />
                        </div>
                        <div class="swiper-button-next">
                            <img src="@/assets/images/btn-arrow-right.svg" alt="Previous" />
                        </div>
                    </div>
                </div>
                <div class="pdt-main-info col-12 col-md-6">
                    <div class="pdt-main-info-model-container">
                        <p class="pdt-main-info-model">{{ productDetail.productCode }}</p>
                        <img class="pdt-main-info-icon" src="@/assets/images/share.svg" />
                    </div>

                    <div class="pdt-main-info-title-container">
                        <h2 class="pdt-main-info-brand">{{ productDetail.productName }}</h2>
                        <!-- <h2 class="pdt-main-info-title">Arabica Lipstick</h2> -->
                        <p class="pdt-main-info-price-label">Price<span class="pdt-main-info-price-number">Rs. {{
                                productDetail.productMrp
                        }}</span></p>
                        <div class="modi-qty-add-to-cart-container">
                            <div class="modi-qty-dropdown-container">
                                <select name="listing-item-quantity-select" class="selectpicker modi-qty-dropdown"
                                    data-live-search="true" data-size="7" data-style="modi-qty-dropdown-btn"
                                    title="Qty">
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
                                <a href="javascript:;"
                                    class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary toggle-shopping-bag-notification">Add
                                    to cart</a>
                            </div>
                        </div>
                    </div>

                    <div class="pdt-main-gallery-mobile swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-1.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <video controls muted loop>
                                    <source src="@/assets/videos/sample-1080p.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-2.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-3.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-4.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-5.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-6.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-7.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-8.png" alt="" />
                            </div>
                            <div class="swiper-slide pdt-main-gallery-top-item">
                                <img src="@/assets/images/products/products-face-9.png" alt="" />
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="pdt-main-info-color-container" style="margin-top: 30px">
                        <div class="pdt-main-info-color-title">
                            <p>Colors</p>
                        </div>
                        <div class="pdt-main-info-colors-container">
                            <div class="pdt-main-info-color active" style="background-color: #D85980"></div>
                            <div class="pdt-main-info-color" style="background-color: #96699A"></div>
                            <div class="pdt-main-info-color" style="background-color: #913B3B"></div>
                            <div class="pdt-main-info-color" style="background-color: #E09C6A"></div>
                            <div class="pdt-main-info-color" style="background-color: #767676"></div>
                        </div>
                    </div>

                    <div class="pdt-main-variant-container" style="margin-top: 30px">
                        <div class="pdt-main-variant-title">
                            <p>Weight</p>
                        </div>
                        <div class="pdt-main-variant-options-container">
                            <div class="pdt-main-variant-option option-underline active">2.4g</div>
                            <div class="pdt-main-variant-option option-underline ">3.2g</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="information-container modi-container">
            <div class="modi-accordion modi-accordion__equal-spacing">
                <div class="modi-accordion-section">
                    <div class="modi-accordion-section-title-container">
                        <button class="modi-accordion-section-title waves-effect waves-light" data-toggle="collapse"
                            data-target="#modi-accordion-section-1">
                            Product Info
                        </button>
                    </div>
                    <div id="modi-accordion-section-1" class="collapse show">
                        <div class="modi-accordion-section-body">
                           <div v-html="Description"></div>
                            <div class="pdt-main-benefit-items-container">
                                <div class="pdt-main-benefit-item">
                                    <div class="pdt-main-benefit-item-icon-container">
                                        <img class="pdt-main-benefit-item-icon"
                                            src='@/assets/images/products/tree-icon.png'>
                                    </div>
                                    <p class="pdt-main-benefit-item-text">20%<br>less plastic</p>
                                </div>
                                <div class="pdt-main-benefit-item">
                                    <div class="pdt-main-benefit-item-icon-container">
                                        <img class="pdt-main-benefit-item-icon"
                                            src='@/assets/images/products/tested-icon.png'>
                                    </div>
                                    <p class="pdt-main-benefit-item-text">Dermatologically<br>tested</p>
                                </div>
                                <div class="pdt-main-benefit-item">
                                    <div class="pdt-main-benefit-item-icon-container">
                                        <img class="pdt-main-benefit-item-icon"
                                            src='@/assets/images/products/leaves-icon.png'>
                                    </div>
                                    <p class="pdt-main-benefit-item-text">Sulphate<br>free</p>
                                </div>
                                <div class="pdt-main-benefit-item">
                                    <div class="pdt-main-benefit-item-icon-container">
                                        <img class="pdt-main-benefit-item-icon"
                                            src='@/assets/images/products/drop-icon.png'>
                                    </div>
                                    <p class="pdt-main-benefit-item-text">Skin<br>gentle</p>
                                </div>
                                <div class="pdt-main-benefit-item">
                                    <div class="pdt-main-benefit-item-icon-container">
                                        <img class="pdt-main-benefit-item-icon"
                                            src='@/assets/images/products/earth-icon.png'>
                                    </div>
                                    <p class="pdt-main-benefit-item-text">100%<br>natural</p>
                                </div>
                                <div class="pdt-main-benefit-item">
                                    <div class="pdt-main-benefit-item-icon-container">
                                        <img class="pdt-main-benefit-item-icon"
                                            src='@/assets/images/products/windmill-icon.png'>
                                    </div>
                                    <p class="pdt-main-benefit-item-text">Recyclable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-for="(feature , index) in products.features" class="modi-accordion-section" >
                    
                    <div class="modi-accordion-section-title-container">
                        <button class="modi-accordion-section-title waves-effect waves-light collapsed" data-toggle="collapse" :data-target="'#modi-accordion-section' + index">
                            {{ feature.tagname }}
                        </button>
                    </div>
                    <div :id="'modi-accordion-section'+ index" class="collapse">
                        <div class="modi-accordion-section-body" v-html="feature.tagdesc">
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="similar-pdts">
            <div class="modi-container similar-pdts-container">
                <div class="similar-pdts-title-bar">
                    <h1 class="similar-pdts-title">Similar products</h1>
                </div>

                <div class="listing-container">
                    <div class="listing-items-container">
                        <div v-for="product in similarproducts" class="listing-item">
                            <router-link :to="'/product/details/' + product.productId" class="listing-item-link">
                                <div class="listing-item-inner">
                                    <div class="listing-item-image-container">
                                        <img class="listing-item-image" :src="product.productImage" />
                                    </div>
                                    <div class="listing-item-description-container">
                                        <div class="listing-item-description">{{ product.productName }}</div>
                                        <div class="listing-item-size">30ml</div>
                                        <div class="listing-item-price font-medium">₹ {{ product.productMrp }}</div>
                                    </div>
                                </div>
                            </router-link>
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <select
                                        name="listing-item-quantity-select"
                                        class="selectpicker modi-qty-dropdown"
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
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary toggle-shopping-bag-notification">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="guarantee">
            <div class="modi-container guarantee-container">
                <div class="guarantee-items-container justify-content-center">
                    <div class="guarantee-item col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image" src='@/assets/images/home/modicare-premier.png' />
                        </div>
                        <p class="guarantee-item-title">Prime Delivery</p>
                        <p class="guarantee-item-text">Get your order same day or the next day.</p>
                        <a href="./prime-delivery.html" class="icon-after icon-chevronright">Check Eligibility</a>
                    </div>
                    <div class="guarantee-item guarantee-item-special col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image"
                                src='@/assets/images/product-satisfaction-guarantee-with-signature.png' />
                        </div>
                        <p class="guarantee-item-title">Satisfaction Guarantee</p>
                        <p class="guarantee-item-text">I personally guarantee full refund* of your money if you are not
                            100% satisfied with the quality of the product.<br>- Mr. Samir Modi</p>
                        <a href="javascript:;" class="icon-after icon-chevronright">More</a>
                    </div>
                    <div class="guarantee-item col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image" src='@/assets/images/find-a-consultant.svg' />
                        </div>
                        <p class="guarantee-item-title">Stores Near you</p>
                        <p class="guarantee-item-text">Love what you see? Visit the nearest store for a complete
                            shopping experience</p>
                        <a href="javascript:;" class="icon-after icon-chevronright">Consultant locator</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import SideMenu from '../components/SideMenu.vue';
import $ from 'jquery';
import Swiper from '../assets/js/swiper-bundle.min.js';
import axios from "axios";


export default {
    name: "ProductDetails",
    components: {
        SideMenu,
    },
    data() {
        return {
            products: [],
            productDetail: [],
            Description: [],
            features:[],
            
        }
    },

   
    mounted() {
        $(function () {

            var galleryThumbs = new Swiper('.pdt-main-gallery-thumbs', {
                observer: true,
        observeParents: true,
                spaceBetween: 10,
                slidesPerView: 3,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                on: {
                    init: function (swiper) {
                        var jqSwiper = $(swiper.el);
                        jqSwiper.find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
                        jqSwiper.fadeIn(500);
                    },
                    resize: function (swiper) {
                        $(swiper.el).find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
                    }
                }
            });
            var galleryTop = new Swiper('.pdt-main-gallery-top', {
                observer: true,
        observeParents: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs
                },
                on: {
                    init: function (swiper) {
                        var jqSwiper = $(swiper.el)
                        jqSwiper.find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
                        jqSwiper.fadeIn(500);
                    },
                    resize: function (swiper) {
                        $(swiper.el).find('.swiper-slide').css('height', swiper.slidesSizesGrid[0] + 'px');
                    },
                    slideChange: function (swiper) {
                        var jqSwiper = $(swiper.el);
                        jqSwiper.find('video').each(function () {
                            $(this)[0].pause();
                        });
                        var jqActiveSlideVideo = jqSwiper.find('.swiper-slide:nth-of-type(' + (swiper.activeIndex + 1) + ') video');
                        if (jqActiveSlideVideo.length) {
                            jqActiveSlideVideo[0].play();
                        }
                    },
                }
            });
            var galleryMobile = new Swiper('.pdt-main-gallery-mobile', {
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                on: {
                    slideChange: function (swiper) {
                        var jqSwiper = $(swiper.el);
                        jqSwiper.find('video').each(function () {
                            $(this)[0].pause();
                        });
                        var jqActiveSlideVideo = jqSwiper.find('.swiper-slide:nth-of-type(' + (swiper.activeIndex + 1) + ') video');
                        if (jqActiveSlideVideo.length) {
                            jqActiveSlideVideo[0].play();
                        }
                    },
                }
            });
        });
    },
    methods: {
        async fetchData(id) {
            
            let result = await axios.get("https://uat-api.modicare.com/api/app/prelogin/product/details/" + id);
            console.log(result);
            if (result.status == 200) {
                this.products = result.data.result;
                this.productDetail = result.data.result.productDetail[0];
                this.Description = result.data.result.productDetail[0].productDescription;
                this.similarproducts = result.data.result.similarProducts;
                this.features = result.data.result.features;
                console.log(this.features);
               

            }
        },

        
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                const { id } = newValue

                this.fetchData(id)
            },
            immediate: true,
        }
    },
};
</script>