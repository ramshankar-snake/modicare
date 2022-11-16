$(document).ready(function() {

    $(document).on('click', '.toggle-mobile-view-more', function(e) {
        e.preventDefault();
        var link = $(this);
        var mobileViewHide = $('.mobile-view-hide');
        if (link.html() === "More +") {
            mobileViewHide.slideDown();
            link.html('Less -');
        } else {
            mobileViewHide.slideUp();
            link.html('More +');
        }
    });

});
