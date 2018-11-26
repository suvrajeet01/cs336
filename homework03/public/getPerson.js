
$(document).ready(function () {
    function createDialog(text) {
        return $("<div class='dialog' title='Result'><p>" + text + "</p></div>")
        .dialog();
    }
    $('form').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        console.log('/person' + `/${(form.serializeArray())[0].value}`);
        $.ajax({
            type: 'GET',
            url: '/person' + `/${(form.serializeArray())[0].value}`,
        }).done(function (res) {
            createDialog(`
                <div>First: ${res.first_name}</div>
                <div>Last: ${res.last_name}</div>
                <div>Login ID: ${res.id}</div>
                <div>Start Date: ${res.start_date}</div>`);
        }).fail(function() {
            createDialog("No person with that ID exists, or an error occured")
        });
    });
});