<template>
    <SideMenu></SideMenu>
    
    <main class="main-container">
        <div class="locator-container modi-container" style="padding: 90px 0;margin-top: 30px;">
            <section class="locator-header">
                <h1 class="locator-header-text">Find a consultant near you!</h1>
            </section>
            
            <section class="locator-search">
                <div class="locator-search-container">
    
                    <div class="modi-search-line">
                        <div class="modi-search-line-input-container">
                            <div class="modi-search-line-icon-container">
                                <img src="@/assets/images/icons/icon-search-dark.svg" alt="Search" class="modi-search-line-icon" />
                            </div>
                            <input type="text" class="modi-search-line-input" name="modi-search-line-input"
                                placeholder="Search by state, city, zone or pin code" id="locator-search-input"/>
                        </div>
                    </div>
    
                    <div class="locator-search-results" id="locator-search-results">
                        <div class="locator-search-results-heading">Stores matching your search:</div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Nagar, Jammu</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhipur, Indore, Madhya Pradesh</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghat, Darbhanga, Bihar</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghar, Darbhanga, Bihar</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghar, Darbhanga, Bihar</a>
                        </div>
    
                        <div class="locator-search-results-item">
                            <a href="javascript:;">Gandhi Ghar, Darbhanga, Bihar</a>
                        </div>
                    </div>
                    
                    <a class="locator-search-searchby toggle-search-by">
                        <div class="locator-search-searchby-container" id="locator-search-searchby-container" data-search-by="area">
                            <div class="locator-search-searchby-text" id="locator-search-searchby-text">Search by consultant info</div>
                            <img class="locator-search-searchby-image" src="@/assets/images/icons/icon-refresh.svg" alt="refresh">
                        </div>
                    </a>
    
                </div>
            </section>
    
            <section class="locator-footer">
                <a href="javascript:;" class="icon-after icon-chevronright locator-footer-link">Consultants near me</a>
                <div class="locator-footer-end-container">
                    <div>
                        <div class="locator-footer-text">Want to become a Modicare consultant?</div>
                        <div class="locator-footer-text"><a href="javascript:;">Register</a> now!</div>
                    </div>
                    <img src='@/assets/images/locator/location-gray.svg' class="locator-footer-image" alt="Consultant Locator" />
                </div>
            </section>
    
        </div>
    </main>
</template>
<script>
 import SideMenu from '../components/SideMenu.vue';
 import $ from 'jquery';
export default {
   
    name: 'ConsultantLocator',
    components: {
         SideMenu,
      },
      mounted(){
        var presets = {
    "area" : {
        "placeholder": "Search by state, city, zone or pin code",
        "placeholderMobile": "Search by area",
        "searchby_text": "Search by consultant info"
    },
    "info" : {
        "placeholder": "Search by consultant name, MCA number or phone",
        "placeholderMobile": "Search by MCA or phone",
        "searchby_text": "Search by area"
    }
};

$(function() {
    updateSearchByText();
    $('.locator-search').css('visibility', 'visible');

    $(window).resize(function() {
        updateSearchByText();
    });

    $(document).on('keyup', '#locator-search-input', function() {
        onSearch();
    });

    $(document).on('click', '.toggle-search-by', function() {
        onToggleSearchBy();
    });
});

function onSearch() {
    var input, searchResults;
    input = $('#locator-search-input');
    searchResults = $('#locator-search-results');

    var isSearched = input.val().length > 0;

    if (isSearched) {
        if (searchResults.css('visibility') === 'hidden') {
            searchResults.css({
                visibility: 'visible',
                opacity: 1
            });
        }
    } else {
        if (searchResults.css('visibility') !== 'hidden') {
            searchResults.css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    }
}

function onToggleSearchBy() {
    var searchByDiv = $('#locator-search-searchby-container');
    var newSearchBy;

    if (searchByDiv.data("searchBy") === "area") {
        newSearchBy = "info"
    } else {
        newSearchBy = "area"
    }

    searchByDiv.data("searchBy", newSearchBy);

    updateSearchByText();
}

function updateSearchByText() {
    var searchByDiv = $('#locator-search-searchby-container');
    var searchByInput = $('#locator-search-input');
    var searchByText = $('#locator-search-searchby-text');
    searchByInput[0].placeholder = window.innerWidth >= 768 ? presets[searchByDiv.data("searchBy")].placeholder : presets[searchByDiv.data("searchBy")].placeholderMobile;
    searchByText[0].innerText = presets[searchByDiv.data("searchBy")].searchby_text;
}
      }
}
</script>