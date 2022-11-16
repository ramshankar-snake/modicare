$(document).ready(function() {

    $(document).on('change', '[name=sponsor-mca]', function() {
        var optionSelected = $('[name=sponsor-mca]:checked');
        var sponsorYesContainer = $('.sponsor-yes-container');

        if (optionSelected.val() === 'Yes') {
            sponsorYesContainer.slideDown(300);
        } else {
            sponsorYesContainer.slideUp(300);
        }
    });
});