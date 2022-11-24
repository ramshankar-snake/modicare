<template>
    
    <SideMenu></SideMenu>
    
    <main class="main-container">
        <section class="event">
            <div class="event-container modi-container">
        
                <div class="modi-search-bar">
                    <div class="modi-search-bar-form">
                        <div class="modi-search-bar-input-container">
                            <div class="modi-search-bar-icon-container">
                                <img src="@/assets/images/icons/icon-search-dark.svg" alt="Search" class="modi-search-bar-icon" />
                            </div>
                            <div class="modi-search-bar-btn-cancel">
                                <img src="@/assets/images/icons/icon-close-dark.svg" alt="Cancel Search"
                                    class="modi-search-bar-btn-cancel-icon" />
                            </div>
                            <input type="text" class="modi-search-bar-input modi-search-bar-input__gray" name="modi-search-bar-input" placeholder="Search events & programs" />
                        </div>
                    </div>
                </div>
                
                <div class="modi-filters event-modi-filters-container">
                    <ul class="modi-filters-types">
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">All</a></li>
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link">Training Programs</a></li>
                        <li class="modi-filters-type"><a href="javascript:;" class="modi-filters-type-link active">Events</a></li>
                    </ul>
                </div>
        
                <div class="modi-search-links-container event-page-link">
                    <router-link to="/event-gallery" class="icon-after icon-chevronright">Event Gallery</router-link>
                </div>
                
                <div class="separator-gray"></div>
        
                <div class="event-section event-section__first">
                    <h1 class="event-section-title">Up Next</h1>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container">
                            <h1 class="event-section-card-date-number">28</h1>
                            <h3 class="event-section-card-date-text">MON</h3>
                        </div>
                        <div class="event-section-card-details-container">
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini">
                                    <h1 class="event-section-card-date-number-mini">28</h1>
                                    <h3 class="event-section-card-date-text-mini">MON</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Mighty Monday</h3>
                                    <p class="event-section-card-details-header-date">Monday, 28 Sep 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A session on the Mighty Guard mobile application covering all features and
                                demos. We will be sharing state of the art tech that goes into the leading mobile defender and how to get the best
                                of it.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
                        </div>
                    </div>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container">
                            <h1 class="event-section-card-date-number">29</h1>
                            <h3 class="event-section-card-date-text">TUE</h3>
                        </div>
                        <div class="event-section-card-details-container">
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini">
                                    <h1 class="event-section-card-date-number-mini">29</h1>
                                    <h3 class="event-section-card-date-text-mini">TUE</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Modi Way Training</h3>
                                    <p class="event-section-card-details-header-date">Tuesday, 29 Sep 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A glimpse of the Modicare journey so far. Stories that shaped lives the Modi
                                way. Embark on a journey with us. With Modicare, success is just a milestone away. We believe in complete customer
                                satisfaction, and empower our consultants to serve with 100% confidence in delivering our products and smiles.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
                        </div>
                    </div>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container">
                            <h1 class="event-section-card-date-number">01</h1>
                            <h3 class="event-section-card-date-text">FRI</h3>
                        </div>
                        <div class="event-section-card-details-container">
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini">
                                    <h1 class="event-section-card-date-number-mini">01</h1>
                                    <h3 class="event-section-card-date-text-mini">FRI</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">All Hands On Deck</h3>
                                    <p class="event-section-card-details-header-date">Friday, 01 Oct 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A glimpse of the Modicare journey so far. Stories that shaped lives the Modi
                                way. Embark on a journey with us. With Modicare, success is just a milestone away. We believe in complete customer
                                satisfaction, and empower our consultants to serve with 100% confidence in delivering our products and smiles.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="event-section">
                    <h1 class="event-section-title">This Month</h1>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container  reverse-color">
                            <h1 class="event-section-card-date-number">01</h1>
                            <h3 class="event-section-card-date-text">FRI</h3>
                        </div>
                        <div class="event-section-card-details-container">
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini  reverse-color">
                                    <h1 class="event-section-card-date-number-mini">01</h1>
                                    <h3 class="event-section-card-date-text-mini">FRI</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Farmers Friday</h3>
                                    <p class="event-section-card-details-header-date">Friday, 01 Oct 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A session on the Mighty Guard mobile application covering all features and
                                demos. We will be sharing state of the art tech that goes into the leading mobile defender and how to get the best
                                of it.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
                        </div>
                    </div>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container  reverse-color">
                            <h1 class="event-section-card-date-number">08</h1>
                            <h3 class="event-section-card-date-text">MON</h3>
                        </div>
                        <div class="event-section-card-details-container">
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini  reverse-color">
                                    <h1 class="event-section-card-date-number-mini">08</h1>
                                    <h3 class="event-section-card-date-text-mini">MON</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Leadership Training</h3>
                                    <p class="event-section-card-details-header-date">Friday, 01 Oct 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A session on the Mighty Guard mobile application covering all features and
                                demos. We will be sharing state of the art tech that goes into the leading mobile defender and how to get the best
                                of it.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
                        </div>
                    </div>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container  reverse-color">
                            <h1 class="event-section-card-date-number">11</h1>
                            <h3 class="event-section-card-date-text">WED</h3>
                        </div>
                        <div class="event-section-card-details-container">
        
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini  reverse-color">
                                    <h1 class="event-section-card-date-number-mini">11</h1>
                                    <h3 class="event-section-card-date-text-mini">WED</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Rising Stars Address</h3>
                                    <p class="event-section-card-details-header-date">Friday, 01 Oct 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A session on the Mighty Guard mobile application covering all features and
                                demos. We will be sharing state of the art tech that goes into the leading mobile defender and how to get the best
                                of it.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
        
                        </div>
                    </div>
                  
                </div>
        
                <div class="event-section">
                    <h1 class="event-section-title">All Programs & Events</h1>
              
                    <div class="event-section-card">
                        <div class="event-section-card-date-container  reverse-color">
                            <h1 class="event-section-card-date-number">01</h1>
                            <h3 class="event-section-card-date-text">FRI</h3>
                        </div>
                        <div class="event-section-card-details-container">
        
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini  reverse-color">
                                    <h1 class="event-section-card-date-number-mini">01</h1>
                                    <h3 class="event-section-card-date-text-mini">FRI</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Farmers Friday</h3>
                                    <p class="event-section-card-details-header-date">Friday, 01 Oct 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A session on the Mighty Guard mobile application covering all features and
                                demos. We will be sharing state of the art tech that goes into the leading mobile defender and how to get the best
                                of it.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
                        </div>
                    </div>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container  reverse-color">
                            <h1 class="event-section-card-date-number">08</h1>
                            <h3 class="event-section-card-date-text">MON</h3>
                        </div>
                        <div class="event-section-card-details-container">
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini  reverse-color">
                                    <h1 class="event-section-card-date-number-mini">08</h1>
                                    <h3 class="event-section-card-date-text-mini">MON</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Leadership Training</h3>
                                    <p class="event-section-card-details-header-date">Friday, 01 Oct 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A session on the Mighty Guard mobile application covering all features and
                                demos. We will be sharing state of the art tech that goes into the leading mobile defender and how to get the best
                                of it.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
                            </div>
                        </div>
                    </div>
        
                    <div class="event-section-card">
                        <div class="event-section-card-date-container  reverse-color">
                            <h1 class="event-section-card-date-number">11</h1>
                            <h3 class="event-section-card-date-text">WED</h3>
                        </div>
                        <div class="event-section-card-details-container">
                            <div class="event-section-card-details-header-container">
                                <div class="event-section-card-date-container-mini  reverse-color">
                                    <h1 class="event-section-card-date-number-mini">11</h1>
                                    <h3 class="event-section-card-date-text-mini">WED</h3>
                                </div>
                                <div class="event-section-card-details-header-text-container">
                                    <h3 class="event-section-card-details-header-title">Rising Stars Address</h3>
                                    <p class="event-section-card-details-header-date">Friday, 01 Oct 2020</p>
                                </div>
                            </div>
        
                            <p class="event-section-card-details-text">A session on the Mighty Guard mobile application covering all features and
                                demos. We will be sharing state of the art tech that goes into the leading mobile defender and how to get the best
                                of it.</p>
                            <div class="event-section-card-details-links-container">
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link">Block Calendar</a>
                                <a href="javascript:;" class="icon-after icon-chevronright event-section-card-details-link copy-to-clipboard" data-text="https://www.modicare.com/" data-alert="link copied, please paste it in your browser to access the event">Get Link</a>
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
export default {
   
    name: 'EventsPage',
    components: {
      
       
        SideMenu,
      },
}
</script>