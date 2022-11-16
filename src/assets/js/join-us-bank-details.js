$(document).ready(function() {

    $(document).on('input', '.modi-sort-code-input', function() {
        var input = $(this);
        if (input.val().length > input.data('maxLength')) {
            input.val(input.val().slice(0, input.data('maxLength')));
        }
    });
});