$(document).ready(function () {
    var href = window.location.href;
    $("#pageHeaderMenu li a").each(function () {
        var text = $(this).attr("projectName"),
            self = $(this);
        if (href.indexOf(text) !== -1) {
            self.parent().addClass('current');
        }
    });
    $("pre").addClass("prettyprint");
    prettyPrint();
});