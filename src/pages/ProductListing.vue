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
                                    <router-link :to="'/product/details/' + item.productId" class="listing-item-image-container">
                                        <img class="listing-item-image" :src="item.productImage" loading="lazy" />
                                    </router-link>
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
                                        
                                    </select>
                                </div>
                                <div class="listing-item-add-to-bag">
                                    <a href="javascript:;" class="listing-item-add-to-bag-link btn modi-btn modi-btn__sm px-3 modi-btn__primary toggle-shopping-bag-notification">Add to cart</a>
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
       
    if (body.hasClass('side-menu-open')) {
            alert('g');
            body.removeClass("side-menu-open");
        }

  
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