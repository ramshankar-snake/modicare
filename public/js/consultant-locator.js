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

$(document).ready(function() {
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