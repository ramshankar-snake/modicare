$(document).ready(function() {
    var formDOB = $('#form-coapp-dob');

    formDOB.daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10) + 1
    });

    formDOB.on('apply.daterangepicker', function(ev, picker) {
        var input = $(this);
        input.val(picker.startDate.format('MM/DD/YYYY'));
        input.trigger('change');
    });

    formDOB.on('cancel.daterangepicker', function(ev, picker) {
        var input = $(this);
        input.val('');
        input.trigger('change');
    });
});