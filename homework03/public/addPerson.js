$(document).ready(function () {
    function createDialog(text) {
        return $("<div class='dialog' title='Result'><p>" + text + "</p></div>")
        .dialog();
    }
    $("#start_date").datepicker();
    $('form').submit(function (event) {
        event.preventDefault();

        var form = $(this);

        $.ajax({
            type: 'POST',
            url: '/people',
            data: form.serialize(),
        }).done(function (res) {
            createDialog("Person has been added!");
            }).fail(function() {
                createDialog("An error has occurred")
            });
    });
});