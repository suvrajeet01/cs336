$(document).ready(function () {
    $("a").click(function (event) {
        alert("The link will no longer take you to jquery.com");
        event.preventDefault();
    });
});
$("a").addClass("test");
$(function () {
    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").click(function (event) {
        event.preventDefault();
    });
});
$('#button').live('click', function(){
    $('#information').hide();
    $('#variants').show();
    $("<em>", {html: "no data yet..."}).appendTo("body")
    return false;
});