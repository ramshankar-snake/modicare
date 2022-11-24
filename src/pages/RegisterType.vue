<template>
    <SideMenu></SideMenu>

<main class="main-container bg-light-blue">
    <section class="registration-page py-md-7 py-5">
        <div class="modi-container modi-container__md">
            <h1 class="text-center mb-md-7 mb-5">Welcome To The Modicare Family!</h1>

            <div class="registration-types">
                <div class="registration-type">
                    <div class="font-semibold">Shop At Modicare</div>

                    <div class="mt-1">
                        <router-link to="/register-form" class="icon-after icon-chevronright sub-heading">Customer Registration</router-link>
                    </div>

                    <div class="font-size-sm mt-3">Unmatched quality products at unbeatable prices. Fall in love with the experience and perks of being a Modicare Preferred Customer.</div>

                    <div class="mt-4">
                        <img src="@/assets/images/icons/icon-register-customer.svg" alt="Customer Registration" />
                    </div>
                </div>
                <div class="registration-type">
                    <div class="font-semibold">Start Your Business</div>

                    <div class="mt-1">
                        <router-link to="/join-us-2-sponsoring" class="icon-after icon-chevronright sub-heading">Consultant Registration</router-link>
                    </div>

                    <div class="font-size-sm mt-3">Success is a few taps away. Build your own business and turn it into an empire with Modicare, India’s first direct selling business!</div>

                    <div class="mt-4">
                        <img src="@/assets/images/icons/icon-register-consultant.svg" alt="Consultant Registration" />
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
                    <a href="javascript:;" class="icon-after icon-chevronright">More</a>
                </div>
                    <div class="guarantee-item col-12 col-md-4">
                        <div class="guarantee-item-image-container">
                            <img class="guarantee-item-image" src='@/assets/images/find-a-consultant.svg' />
                        </div>
                        <p class="guarantee-item-title">Stores Near you</p>
                        <p class="guarantee-item-text">Love what you see? Visit the nearest store for a complete shopping experience</p>
                        <a href="javascript:;" class="icon-after icon-chevronright">Consultant locator</a>
                    </div>
            </div>
        </div>
    </section>
</main>
</template>
<script>
import SideMenu from '../components/SideMenu.vue'
export default {
    name: 'RegisterType',
    components: {
         SideMenu,
      },
}
</script>