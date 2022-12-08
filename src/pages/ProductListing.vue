<template>
    <SideMenu></SideMenu>

    <main class="main-container">
        <section class="product-listing">
            <div class="modi-container product-listing-container">
                <div class="modi-search-bar">
                    <div class="modi-search-bar-form">
                        <div class="modi-search-bar-input-container">
                            <div class="modi-search-bar-icon-container">
                                <img src="@/assets/images/icons/icon-search-dark.svg" alt="Search"
                                    class="modi-search-bar-icon" />
                            </div>
                            <div class="modi-search-bar-btn-cancel">
                                <img src="@/assets/images/icons/icon-close-dark.svg" alt="Cancel Search"
                                    class="modi-search-bar-btn-cancel-icon" />
                            </div>
                            <input type="text" class="modi-search-bar-input" name="modi-search-bar-input"
                                placeholder="Search" />
                        </div>
                    </div>
                </div>

                <div class="modi-filters">
                    <ul class="modi-filters-types">
                        <li class="modi-filters-type"><a href="javascript:;"
                                class="modi-filters-type-link active">Category</a></li>
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Brand</a>
                        </li>
                    </ul>

                    <ul class="modi-filters-categories">
                        <li class="modi-filters-category" v-for="item in items.subCategory" v-bind:key="item.productId">
                            <a href="javascript:;" class="modi-filters-category-link">{{ item.SCategoryName }}</a>
                        </li>
                    </ul>
                </div>

                <div class="separator-white"></div>

                <div class="listing-container">
                    <div class="listing-sorting-container">
                        <select class="listing-sorting-select" name="product-listing-sorting">
                            <option value="Featured">Featured</option>
                            <option value="Featured">Price: Low to High</option>
                            <option value="Featured">Price: High to Low</option>
                        </select>
                    </div>

                    <div class="listing-items-container">
                        <div v-for="item in items.products" :key="item.productId" class="listing-item">
                            <div class="listing-item-link">
                                <div class="listing-item-inner">
                                    <a href="./b2c-product-details.html" class="listing-item-image-container">
                                        <img class="listing-item-image" :src="item.productImage" loading="lazy" />
                                    </a>
                                    <div class="listing-item-description-container">
                                        <a href="./b2c-product-details.html" class="listing-item-description">{{
                                                item.productName
                                        }}</a>
                                        <a href="javascript:;" class="listing-item-quick-view-link" data-toggle="modal"
                                            data-target="#modi-product-quick-view-modal">Quick view</a>
                                        <div class="listing-item-additional">
                                            <div class="listing-item-size">{{ item.pack }}</div>
                                            <div class="listing-item-price">₹ {{ item.mrp }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="listing-item-footer-container">
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
                                       
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary toggle-shopping-bag-notification">Add to cart</a>
                                </div>
                            </div> -->
                            <div class="listing-item-footer-container">
                                <div class="listing-item-quantity modi-qty-dropdown-container">
                                    <div class="dropdown bootstrap-select modi-qty-dropdown"><select
                                            name="listing-item-quantity-select" class="selectpicker modi-qty-dropdown"
                                            data-live-search="true" data-size="7" data-style="modi-qty-dropdown-btn"
                                            title="Qty" tabindex="-98">
                                            <option class="bs-title-option" value=""></option>
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
                                        <!-- <button type="button"
                                            class="btn dropdown-toggle modi-qty-dropdown-btn bs-placeholder"
                                            data-toggle="dropdown" role="combobox" aria-owns="bs-select-25"
                                            aria-haspopup="listbox" aria-expanded="false" title="Qty">
                                            <div class="filter-option">
                                                <div class="filter-option-inner">
                                                    <div class="filter-option-inner-inner">Qty</div>
                                                </div>
                                            </div>
                                        </button> -->
                                        <div class="dropdown-menu ">
                                            <div class="bs-searchbox"><input type="search" class="form-control"
                                                    autocomplete="off" role="combobox" aria-label="Search"
                                                    aria-controls="bs-select-25" aria-autocomplete="list"></div>
                                            <div class="inner show" role="listbox" id="bs-select-25" tabindex="-1">
                                                <ul class="dropdown-menu inner show" role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;"
                                        class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary toggle-shopping-bag-notification waves-effect waves-light">
                                        Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="listing-pagination-container">
                        <ul class="listing-pagination-list">
                            <li class="listing-pagination-item"><a href="javascript:;"
                                    class="listing-pagination-link-prev icon-before icon-chevronleft">Previous</a></li>
                            <li class="listing-pagination-item"><a href="javascript:;"
                                    class="listing-pagination-link">1</a></li>
                            <li class="listing-pagination-item"><a href="javascript:;"
                                    class="listing-pagination-link active">2</a></li>
                            <li class="listing-pagination-item"><a href="javascript:;"
                                    class="listing-pagination-link">3</a></li>
                            <li class="listing-pagination-item"><a href="javascript:;"
                                    class="listing-pagination-link-next icon-after icon-chevronright">Next</a></li>
                        </ul>
                    </div>

                    <div class="py-7">
                    </div>
                </div>
            </div>
        </section>
        <section class="guarantee">
            <div class="modi-container guarantee-container">
                <div class="guarantee-items-container justify-content-center">
                    <div class="guarantee-item col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image" src='@/assets/images/home/get-certified.png' />
                        </div>
                        <p class="guarantee-item-title">Get Certified</p>
                        <p class="guarantee-item-text"> Access 'Certification Program for Direct Sellers' under the
                            aegis of Skill India & NSDC.</p>
                        <a href="https://www.kedskills.com/ra/ralp.php" target="_blank"
                            class="icon-after icon-chevronright">More</a>
                    </div>
                    <div class="guarantee-item guarantee-item-special col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image"
                                src='@/assets/images/product-satisfaction-guarantee-with-signature.png' />
                        </div>
                        <p class="guarantee-item-title">Satisfaction Guarantee</p>
                        <p class="guarantee-item-text">I personally guarantee full refund* of your money if you are not
                            100% satisfied with the quality of the product.<br>- Mr. Samir Modi</p>
                        <a href="satisfaction-guarantee.html" class="icon-after icon-chevronright">More</a>
                    </div>
                    <div class="guarantee-item col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image" src='@/assets/images/find-a-consultant.svg' />
                        </div>
                        <p class="guarantee-item-title">Stores Near you</p>
                        <p class="guarantee-item-text">Love what you see? Visit the nearest store for a complete
                            shopping experience</p>
                        <a href="store-locator.html" class="icon-after icon-chevronright">Consultant locator</a>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>
<script>
import SideMenu from '../components/SideMenu.vue'
import axios from "axios";
//import json from '../assets/product.json'
export default {
    name: 'ProductListing',
    data() {
        return {
            items: [],
            category: '',
            brands: [],
            productCategories: []

        }
    },
    components: {
        SideMenu,
    },
    mounted: function () {
        $(function () {
            $("body").removeClass("side-menu-open");
        })
    },
    async mounted() {
        let result = await axios.get(`https://uat-api.modicare.com/api/app/prelogin/categories/${this.$route.params.category}`);

        if (result.status == 200) {
            // console.log(result.data);
            this.items = result.data.result;
            // console.log(this.products);
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.loadProducts()
            },
            this.loadProducts()
        );
    },
    methods: {
        async loadProducts() {
            this.category = this.$route.params.category;
            let result = await axios.get(`https://uat-api.modicare.com/api/app/prelogin/categories/${this.$route.params.category}`);
            if (result.status == 200) {
                // console.log(result.data);
                this.items = result.data.result;
                // console.log(this.products);
            }
        },
        handleSelectItem(items){
            this.selectedItem = item.name;
       // you can also handle toggle action here manually to open and close dropdown
     }
    }
}
</script>