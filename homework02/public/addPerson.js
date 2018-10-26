$(document).ready(function () {
    $("#start_date").datepicker();
    $('form').submit(function (event) {
        event.preventDefault();

        var form = $(this);

        $.ajax({
            type: 'POST',
            url: '/people',
            data: form.serialize(),
        })
    });
});