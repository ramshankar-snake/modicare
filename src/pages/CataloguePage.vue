<template>
    
<SideMenu></SideMenu>

<main class="main-container">
    <div class="sticky-social-buttons">
        <div class="sticky-social-buttons-container">
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-facebook.svg" class="sticky-social-button-icon" alt="Modicare Facebook" loading="lazy"></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-youtube.svg" class="sticky-social-button-icon" alt="Modicare YouTube" loading="lazy"></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-instagram.svg" class="sticky-social-button-icon" alt="Modicare Instagram " loading="lazy"></a>
        </div>
    </div>

    <div class="catalogues-container modi-container">
        <section class="catalogues-featured">
            <h1 class="catalogues-featured-heading">Samir Modi Azadi Plan Unlimited</h1>

            <div class="catalogues-featured-banner">
                <a href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-featured-banner-link" target="_blank">
                    <img src="@/assets/images/catalogues/catalogue-banner1.png" alt="" class="catalogues-featured-banner-image">
                </a>
            </div>

            <div class="catalogues-featured-title">
                SMAP Unlimited

                <a href="javascript:;" class="catalogues-featured-share-link">
                    <img src="@/assets/images/icons/icon-share-primary.svg" class="catalogues-featured-share-icon">
                </a>
            </div>
        </section>

        <section class="catalogues-listing">
            <h1 class="catalogues-listing-title">All Catalogues</h1>

            <div class="modi-filters">
                <ul class="modi-filters-types">
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link active">All</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Sapne</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Urban Color</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Amoli</a></li>
                    <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Connect</a></li>
                </ul>
            </div>

            <div class="catalogues-listing-grid">
                <div class="catalogues-listing-item">
                    <a href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-amoli.png" alt="Amoli" class="catalogues-listing-item-image">
                    </a>

                    <div class="catalogues-listing-item-text">
                        Amoli

                        <a href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src="@/assets/images/icons/icon-share-primary.svg" class="catalogues-listing-item-share-icon">
                        </a>
                    </div>
                </div>

                <div class="catalogues-listing-item">
                    <a href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-urban-color.png" alt="Amoli" class="catalogues-listing-item-image">
                    </a>

                    <div class="catalogues-listing-item-text">
                        Urban Color

                        <a href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src="@/assets/images/icons/icon-share-primary.svg" class="catalogues-listing-item-share-icon">
                        </a>
                    </div>
                </div>

                <div class="catalogues-listing-item">
                    <a href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-connect.png" alt="Amoli" class="catalogues-listing-item-image">
                    </a>

                    <div class="catalogues-listing-item-text">
                        Connect

                        <a href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src="@/assets/images/icons/icon-share-primary.svg" class="catalogues-listing-item-share-icon">
                        </a>
                    </div>
                </div>

                <div class="catalogues-listing-item">
                    <a href="https://www.modicare.com/Downloads/SAMIR%20MODI%20AZADI%20PLAN%20-17-12-2015-Ver3-Ind-Pgs-F3.pdf" class="catalogues-listing-item-image-link" target="_blank">
                        <img src="@/assets/images/catalogues/catalogues-sapne.png" alt="Amoli" class="catalogues-listing-item-image">
                    </a>

                    <div class="catalogues-listing-item-text">
                        Sapne

                        <a href="javascript:;" class="catalogues-listing-item-share-link">
                            <img src="@/assets/images/icons/icon-share-primary.svg" class="catalogues-listing-item-share-icon">
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

</template>
<script>
import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'CataloguePage',
    components: {
         SideMenu,
      }
    }

</script>