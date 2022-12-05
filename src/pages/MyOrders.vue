<template>
<SideMenu></SideMenu>


<main class="main-container">
    <div class="order-details bg-light-blue">
        <div class="modi-container modi-container__md">
            <h1 class="text-center mb-2">Order Details</h1>
            <div class="text-center order-details-sub-heading mb-md-7 mb-5">DEL90995-64560-665</div>

            <div class="order-details-card">
                <div class="order-details-card-grid">
                        <div class="order-item-detail">
                            <div class="order-item-detail-title">
                                Order #
                            </div>
                            <div class="order-item-detail-value">
                                DEL90995-64560-665
                            </div>
                        </div>
                        <div class="order-item-detail">
                            <div class="order-item-detail-title">
                                Date
                            </div>
                            <div class="order-item-detail-value">
                                24.11.2020
                            </div>
                        </div>
                        <div class="order-item-detail">
                            <div class="order-item-detail-title">
                                Order by
                            </div>
                            <div class="order-item-detail-value">
                                Ranveer Singh Chaudhary
                            </div>
                        </div>
                        <div class="order-item-detail">
                            <div class="order-item-detail-title">
                                Status
                            </div>
                            <div class="order-item-detail-value">
                                <span class="icon-after icon-success">Shipped</span>
                            </div>
                        </div>
                        <div class="order-item-detail">
                            <div class="order-item-detail-title">
                                Amount Paid
                            </div>
                            <div class="order-item-detail-value">
                                ₹ 1,800
                            </div>
                        </div>
                        <div class="order-item-detail">
                            <div class="order-item-detail-title">
                                Points earned
                            </div>
                            <div class="order-item-detail-value">
                                33
                            </div>
                        </div>
                    </div>

                <div class="order-details-card-footer">

                    <div class="order-details-card-steps-container mobile-view-hide">
                        <div class="modi-steps">
                            <div class="step completed">
                                <div class="step-title">Processing</div>
                                <div class="step-icon-wrap">
                                    <div class="step-icon"></div>
                                </div>
                            </div>
                            <div class="step completed">
                                <div class="step-title">Shipped</div>
                                <div class="step-icon-wrap">
                                    <div class="step-icon"></div>
                                </div>
                            </div>
                            <div class="step">
                                <div class="step-title">Delivered</div>
                                <div class="step-icon-wrap">
                                    <div class="step-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-2 pb-4 text-center d-md-none">
                        <a href="javascript:;" class="toggle-mobile-view-more">Track +</a>
                    </div>

                    <div class="order-details-card-links">
                        <a href="javascript:;" class="order-details-card-link">Need Help?</a>
                        <a href="javascript:;" class="btn modi-btn modi-btn__sm modi-btn__primary order-details-card-link-button">Re-order</a>
                    </div>
                </div>
            </div>

            <div class="shopping-summary-table">
                <div class="shopping-summary-table-container modi-container">
                    <div class="shopping-summary-table-title">Your Products</div>
                        <div class="shopping-summary-table-row ">
                            <div class="shopping-summary-table-row-image-container">
                                <img src="@/assets/images/products/products-lips-1.png" class="shopping-summary-table-row-image"/>
                            </div>
                            <div class="shopping-summary-table-row-description-container">
                                <div class="shopping-summary-table-row-description-model-container">
                                    <div class="shopping-summary-table-row-description-model">WAT101</div>
                                </div>
                                <p class="shopping-summary-table-row-description-brand">Urban Color</p>
                                <p class="shopping-summary-table-row-description-title">Timber Lipstick Premium Range</p>
                                <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-row-description-link">Details</a>
                            </div>
                            <div class="shopping-summary-table-row-quantity-container">
                                01
                            </div>
                            <div class="shopping-summary-table-row-weight-container">
                                <p class="shopping-summary-table-row-weight">220g</p>
                            </div>
                            <div class="shopping-summary-table-row-price-container">
                                <p class="shopping-summary-table-row-price">₹450</p>
                            </div>
                        </div>
                        <div class="shopping-summary-table-row ">
                            <div class="shopping-summary-table-row-image-container">
                                <img src="@/assets/images/products/products-lips-2.png" class="shopping-summary-table-row-image"/>
                            </div>
                            <div class="shopping-summary-table-row-description-container">
                                <div class="shopping-summary-table-row-description-model-container">
                                    <div class="shopping-summary-table-row-description-model">WAT101</div>
                                </div>
                                <p class="shopping-summary-table-row-description-brand">Urban Color</p>
                                <p class="shopping-summary-table-row-description-title">Timber Lipstick Premium Range</p>
                                <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-row-description-link">Details</a>
                            </div>
                            <div class="shopping-summary-table-row-quantity-container">
                                01
                            </div>
                            <div class="shopping-summary-table-row-weight-container">
                                <p class="shopping-summary-table-row-weight">220g</p>
                            </div>
                            <div class="shopping-summary-table-row-price-container">
                                <p class="shopping-summary-table-row-price">₹450</p>
                            </div>
                        </div>
                        <div class="shopping-summary-table-row ">
                            <div class="shopping-summary-table-row-image-container">
                                <img src="@/assets/images/products/products-lips-3.png" class="shopping-summary-table-row-image"/>
                            </div>
                            <div class="shopping-summary-table-row-description-container">
                                <div class="shopping-summary-table-row-description-model-container">
                                    <div class="shopping-summary-table-row-description-model">WAT101</div>
                                </div>
                                <p class="shopping-summary-table-row-description-brand">Urban Color</p>
                                <p class="shopping-summary-table-row-description-title">Timber Lipstick Premium Range</p>
                                <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-row-description-link">Details</a>
                            </div>
                            <div class="shopping-summary-table-row-quantity-container">
                                01
                            </div>
                            <div class="shopping-summary-table-row-weight-container">
                                <p class="shopping-summary-table-row-weight">220g</p>
                            </div>
                            <div class="shopping-summary-table-row-price-container">
                                <p class="shopping-summary-table-row-price">₹450</p>
                            </div>
                        </div>
                        <div class="shopping-summary-table-row  shopping-summary-table-row__final">
                            <div class="shopping-summary-table-row-image-container">
                                <img src="@/assets/images/products/products-lips-4.png" class="shopping-summary-table-row-image"/>
                            </div>
                            <div class="shopping-summary-table-row-description-container">
                                <div class="shopping-summary-table-row-description-model-container">
                                    <div class="shopping-summary-table-row-description-model">WAT101</div>
                                </div>
                                <p class="shopping-summary-table-row-description-brand">Urban Color</p>
                                <p class="shopping-summary-table-row-description-title">Timber Lipstick Premium Range</p>
                                <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-row-description-link">Details</a>
                            </div>
                            <div class="shopping-summary-table-row-quantity-container">
                                01
                            </div>
                            <div class="shopping-summary-table-row-weight-container">
                                <p class="shopping-summary-table-row-weight">220g</p>
                            </div>
                            <div class="shopping-summary-table-row-price-container">
                                <p class="shopping-summary-table-row-price">₹450</p>
                            </div>
                        </div>

                    <div class="shopping-summary-table-row shopping-summary-payment-row shopping-summary-payment-row__first">
                        <div class="shopping-summary-payment-table-title">Total</div>
                        <div class="shopping-summary-payment-table-value">₹ 1,200</div>
                    </div>
                    <div class="shopping-summary-table-row shopping-summary-payment-row">
                        <div class="shopping-summary-payment-table-title">MRP Total</div>
                        <div class="shopping-summary-payment-table-value">₹ 1,200</div>
                    </div>
                    <div class="shopping-summary-table-row shopping-summary-payment-row">
                        <div class="shopping-summary-payment-table-title">You Saved</div>
                        <div class="shopping-summary-payment-table-value">₹ 120</div>
                    </div>
                    <div class="shopping-summary-table-row shopping-summary-payment-row">
                        <div class="shopping-summary-payment-table-title">Shipping charges</div>
                        <div class="shopping-summary-payment-table-value">₹ 55</div>
                    </div>

                    <div class="shopping-summary-table-row shopping-summary-payment-row__final">
                        <div class="shopping-summary-payment-table-title">Paid</div>
                        <div class="shopping-summary-payment-table-value">₹ 1,255</div>
                    </div>
                </div>
            </div>

            <section class="shopping-summary-table-mobile">
                <div class="shopping-summary-table-mobile-container modi-container">
                    <div class="shopping-summary-table-title">Your Products</div>
                        <div class="shopping-summary-table-mobile-row">
                            <div class="shopping-summary-table-mobile-row-description-container">
                                <div class="shopping-summary-table-mobile-row-image-container">
                                    <img src="@/assets/images/products/products-lips-1.png" class="shopping-summary-table-mobile-row-image" />
                                </div>
                                <div class="shopping-summary-table-mobile-row-description-model">WAT101</div>
                                <div class="shopping-summary-table-mobile-row-description-quantity">01</div>

                                <div class="shopping-summary-table-mobile-row-description-title">Urban Color Timber Lipstick Premium Range</div>

                                <div class="shopping-summary-table-mobile-row-description-link-container">
                                    <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-mobile-row-description-link">Details</a>
                                </div>

                                <div></div>

                                <div class="shopping-summary-table-row-mobile-weight">
                                    220g
                                </div>
                                <div class="shopping-summary-table-row-mobile-price">
                                    ₹450
                                </div>
                            </div>
                        </div>
                        <div class="shopping-summary-table-mobile-row">
                            <div class="shopping-summary-table-mobile-row-description-container">
                                <div class="shopping-summary-table-mobile-row-image-container">
                                    <img src="@/assets/images/products/products-lips-2.png" class="shopping-summary-table-mobile-row-image" />
                                </div>
                                <div class="shopping-summary-table-mobile-row-description-model">WAT101</div>
                                <div class="shopping-summary-table-mobile-row-description-quantity">01</div>

                                <div class="shopping-summary-table-mobile-row-description-title">Urban Color Timber Lipstick Premium Range</div>

                                <div class="shopping-summary-table-mobile-row-description-link-container">
                                    <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-mobile-row-description-link">Details</a>
                                </div>

                                <div></div>

                                <div class="shopping-summary-table-row-mobile-weight">
                                    220g
                                </div>
                                <div class="shopping-summary-table-row-mobile-price">
                                    ₹450
                                </div>
                            </div>
                        </div>
                        <div class="shopping-summary-table-mobile-row">
                            <div class="shopping-summary-table-mobile-row-description-container">
                                <div class="shopping-summary-table-mobile-row-image-container">
                                    <img src="@/assets/images/products/products-lips-3.png" class="shopping-summary-table-mobile-row-image" />
                                </div>
                                <div class="shopping-summary-table-mobile-row-description-model">WAT101</div>
                                <div class="shopping-summary-table-mobile-row-description-quantity">01</div>

                                <div class="shopping-summary-table-mobile-row-description-title">Urban Color Timber Lipstick Premium Range</div>

                                <div class="shopping-summary-table-mobile-row-description-link-container">
                                    <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-mobile-row-description-link">Details</a>
                                </div>

                                <div></div>

                                <div class="shopping-summary-table-row-mobile-weight">
                                    220g
                                </div>
                                <div class="shopping-summary-table-row-mobile-price">
                                    ₹450
                                </div>
                            </div>
                        </div>
                        <div class="shopping-summary-table-mobile-row">
                            <div class="shopping-summary-table-mobile-row-description-container">
                                <div class="shopping-summary-table-mobile-row-image-container">
                                    <img src="@/assets/images/products/products-lips-4.png" class="shopping-summary-table-mobile-row-image" />
                                </div>
                                <div class="shopping-summary-table-mobile-row-description-model">WAT101</div>
                                <div class="shopping-summary-table-mobile-row-description-quantity">01</div>

                                <div class="shopping-summary-table-mobile-row-description-title">Urban Color Timber Lipstick Premium Range</div>

                                <div class="shopping-summary-table-mobile-row-description-link-container">
                                    <a href="javascript:;" class="icon-after icon-chevronright shopping-summary-table-mobile-row-description-link">Details</a>
                                </div>

                                <div></div>

                                <div class="shopping-summary-table-row-mobile-weight">
                                    220g
                                </div>
                                <div class="shopping-summary-table-row-mobile-price">
                                    ₹450
                                </div>
                            </div>
                        </div>

                    <div class="shopping-summary-payment-mobile-container">
                        <div class="shopping-summary-payment-mobile-item">
                            <div class="shopping-summary-payment-mobile-item-title">Total</div>
                            <div class="shopping-summary-payment-mobile-item-value">₹ 1,200</div>
                        </div>
                        <div class="shopping-summary-payment-mobile-item">
                            <div class="shopping-summary-payment-mobile-item-title">MRP Total</div>
                            <div class="shopping-summary-payment-mobile-item-value">₹ 1,200</div>
                        </div>
                        <div class="shopping-summary-payment-mobile-item">
                            <div class="shopping-summary-payment-mobile-item-title">You Saved</div>
                            <div class="shopping-summary-payment-mobile-item-value">₹ 120</div>
                        </div>
                        <div class="shopping-summary-payment-mobile-item">
                            <div class="shopping-summary-payment-mobile-item-title">Shipping charges</div>
                            <div class="shopping-summary-payment-mobile-item-value">₹ 55</div>
                        </div>
                    </div>

                    <div class="shopping-summary-payment-footer-mobile-container">
                        <div class="shopping-summary-payment-mobile-item">
                            <div class="shopping-summary-payment-footer-mobile-item-title">Paid</div>
                            <div class="shopping-summary-payment-footer-mobile-item-value">₹ 1,255</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</main>
</template>
<script>
import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'StopShop',
    components: {
SideMenu
    },
    methods: function(){


$(document).on('click', '.toggle-mobile-view-more', function(e) {
    e.preventDefault();
    var link = $(this);
    var mobileViewHide = $('.mobile-view-hide');
    if (link.html() === "Track +") {
        mobileViewHide.slideDown();
        link.html('Minimize -');
    } else {
        mobileViewHide.slideUp();
        link.html('Track +');
    }
})



    }
}
</script>