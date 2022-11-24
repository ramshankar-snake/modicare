<template>
<SideMenu></SideMenu>
<main class="main-container">
    <div class="sticky-social-buttons">
        <div class="sticky-social-buttons-container">
            <router-link href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-facebook.svg" class="sticky-social-button-icon" alt="Modicare Facebook" loading="lazy" /></router-link>
            <router-link href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-youtube.svg" class="sticky-social-button-icon" alt="Modicare YouTube" loading="lazy" /></router-link>
            <router-link href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-instagram.svg" class="sticky-social-button-icon" alt="Modicare Instagram " loading="lazy" /></router-link>
        </div>
    </div>

    <div class="catalogues-container modi-container">
        <section class="catalogues-featured">
            <h1 class="catalogues-featured-heading">Samir Modi Azadi Plan Unlimited</h1>

            <div class="catalogues-featured-banner">
                <router-link href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-featured-banner-link" target="_blank">
                    <img src="@/assets/images/catalogues/catalogues-banner.png" alt="" class="catalogues-featured-banner-image" />
                </router-link>
            </div>

            <div class="catalogues-featured-title">
                SMAP Unlimited

                <router-link href="javascript:;" class="catalogues-featured-share-link">
                    <img src='@/assets/images/icons/icon-share-primary.svg' class="catalogues-featured-share-icon"/>
                </router-link>
            </div>
        </section>

        <section class="catalogues-listing">
            <h1 class="catalogues-listing-title">All Catalogues</h1>

            <div class="modi-filters">
                <ul class="modi-filters-types">
                    <li class="modi-filters-type"><router-link href="javascript:;" class="modi-filters-type-link active">All</router-link></li>
                    <li class="modi-filters-type"><router-link href="javascript:;" class="modi-filters-type-link">Sapne</router-link></li>
                    <li class="modi-filters-type"><router-link href="javascript:;" class="modi-filters-type-link">Urban Color</router-link></li>
                    <li class="modi-filters-type"><router-link href="javascript:;" class="modi-filters-type-link">Amoli</router-link></li>
                    <li class="modi-filters-type"><router-link href="javascript:;" class="modi-filters-type-link">Connect</router-link></li>
                </ul>
            </div>

            <div class="catalogues-listing-grid">
                <div class="catalogues-listing-item">
                    <router-link href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-amoli.png" alt="Amoli" class="catalogues-listing-item-image" />
                    </router-link>

                    <div class="catalogues-listing-item-text">
                        Amoli

                        <router-link href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src='@/assets/images/icons/icon-share-primary.svg' class="catalogues-listing-item-share-icon"/>
                        </router-link>
                    </div>
                </div>

                <div class="catalogues-listing-item">
                    <router-link href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-urban-color.png" alt="Amoli" class="catalogues-listing-item-image" />
                    </router-link>

                    <div class="catalogues-listing-item-text">
                        Urban Color

                        <router-link href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src='@/assets/images/icons/icon-share-primary.svg' class="catalogues-listing-item-share-icon"/>
                        </router-link>
                    </div>
                </div>

                <div class="catalogues-listing-item">
                    <router-link href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-connect.png" alt="Amoli" class="catalogues-listing-item-image" />
                    </router-link>

                    <div class="catalogues-listing-item-text">
                        Connect

                        <router-link href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src='@/assets/images/icons/icon-share-primary.svg' class="catalogues-listing-item-share-icon"/>
                        </router-link>
                    </div>
                </div>

                <div class="catalogues-listing-item">
                    <router-link href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-sapne.png" alt="Amoli" class="catalogues-listing-item-image" />
                    </router-link>

                    <div class="catalogues-listing-item-text">
                        Sapne

                        <router-link href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src='@/assets/images/icons/icon-share-primary.svg' class="catalogues-listing-item-share-icon"/>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

</template>
<script>
import SideMenu from '../components/SideMenu.vue';
//  import $ from 'jquery';
export default {
   
    name: 'CataloguePage',
    components: {
         SideMenu,
      },
    }

</script>