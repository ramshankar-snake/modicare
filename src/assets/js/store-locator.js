$(document).ready(function() {
    updateSearchByText();
    $('.locator-search').css('visibility', 'visible');

    $(window).resize(function() {
        updateSearchByText();
    });

    $(document).on('keyup', '#locator-search-input', function() {
        onSearch();
    });
});

function onSearch() {
    var input = $('#locator-search-input');
    var searchResults = $('#locator-search-results');
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

function updateSearchByText() {
    var searchInput = $('#locator-search-input');
    searchInput[0].placeholder = window.innerWidth >= 768 ? "Search by state, city, zone or pin code" : "Search by area";
}