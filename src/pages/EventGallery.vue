<template>
    <SideMenu></SideMenu>
 
    <main class="main-container">
        <section class="gallery">
            <div class="gallery-container modi-container">
                <div class="modi-search-bar">
                    <div class="modi-search-bar-form">
                        <div class="modi-search-bar-input-container">
                            <div class="modi-search-bar-icon-container">
                                <img src="@/assets/images/icons/icon-search-dark.svg" alt="Search" class="modi-search-bar-icon" />
                            </div>
                            <div class="modi-search-bar-btn-cancel">
                                <img src="@/assets/images/icons/icon-close-dark.svg" alt="Cancel Search" class="modi-search-bar-btn-cancel-icon" />
                            </div>
                            <input type="text" class="modi-search-bar-input" name="modi-search-bar-input" placeholder="Search event" />
                        </div>
                    </div>
                </div>
        
                <div class="modi-filters">
                    <ul class="modi-filters-types">
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link active">All</a></li>
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Dil ki baat</a></li>
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Product Launch</a></li>
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Azadi</a></li>
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Training</a></li>
                    </ul>
                </div>
        
                <div class="modi-search-links-container gallery-page-link">
                    <router-link to="/events" class="icon-after icon-chevronright">See upcoming events</router-link>
                </div>
        
                <div class="separator-white"></div>
        
                <div class="gallery-featured-section">
                    <h1>Featured</h1>
                    <div class="listing-container">
                        <div class="listing-items-container">
                            <div class="listing-item ">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-1.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Dil ki baat<br/>Mr Samir Modi</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">23 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item ">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-2.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Urban Colour Launch</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">14 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item d-none d-md-flex">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-3.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Jashn-e-azadi</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">28 Feb 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="gallery-event-section">
                    <div class="gallery-event-header-container">
                        <h1>All Events</h1>
                        <div class="gallery-event-header-sorter-container">
                            <a class="gallery-event-header-sorter-text" href="javascript:;">
                                Date
                                <img class="gallery-event-header-sorter-icon" src="@/assets/images/icons/icon-arrow-up.svg" />
                            </a>
                        </div>
                    </div>
        
                    <div class="listing-container gallery-event-cards-container">
                        <div class="listing-items-container">
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-1.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Dil ki baat</div>
                                            <div class="gallery-event-card-description-sub-title">Mr Samir Modi</div>
                                            <div class="gallery-event-card-description-date">23 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-2.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Urban Colour Launch</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">14 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-3.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Jashn-e-azadi</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">28 Feb 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-1.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Dil ki baat</div>
                                            <div class="gallery-event-card-description-sub-title">Mr Samir Modi</div>
                                            <div class="gallery-event-card-description-date">23 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-2.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Urban Colour Launch</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">14 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-3.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Jashn-e-azadi</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">28 Feb 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-1.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Dil ki baat</div>
                                            <div class="gallery-event-card-description-sub-title">Mr Samir Modi</div>
                                            <div class="gallery-event-card-description-date">23 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-2.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Urban Colour Launch</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">14 Sep 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="listing-item">
                                <a href="event-gallery-album.html" class="listing-item-link">
                                    <div class="listing-item-inner">
                                        <div class="listing-item-image-container">
                                            <img class="listing-item-image" src="@/assets/images/events/event-3.png" />
                                        </div>
                                        <div class="listing-item-description-container">
                                            <div class="gallery-event-card-description-title">Jashn-e-azadi</div>
                                            <div class="gallery-event-card-description-sub-title"></div>
                                            <div class="gallery-event-card-description-date">28 Feb 2020</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import SideMenu from '../components/SideMenu.vue';
 import $ from 'jquery';
export default {
   
    name: 'EventGallery',
    components: {
         SideMenu,
      },
    }
</script>