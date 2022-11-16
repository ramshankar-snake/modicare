$(document).ready(function() {

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
    });

});
