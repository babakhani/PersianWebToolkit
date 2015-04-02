$(document).ready(function () {
    $(document).trigger('loadInclude');
})


$(document).on('loadInclude', function () {
    $("pre").addClass("prettyprint");
    prettyPrint();
    var href = window.location.href;

    $(".navbar-nav li a").each(function () {
        var text = $(this).attr("projectName"),
            self = $(this);
        if (href.indexOf(text) !== -1) {
            self.parent().addClass('current');
        }
    });

    function loadResource(filename, filetype) {
        if (filetype == "js") {
            var fileref = document.createElement('script')
            fileref.setAttribute("type", "text/javascript")
            fileref.setAttribute("src", filename)
        } else if (filetype == "css") { //if filename is an external CSS file
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }

        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    }

    function removefile(filename, filetype) {
        var targetElement = "link";
        var targetAttr = "href";

        var allCtrl = document.getElementsByTagName(targetElement);
        for (var i = allCtrl.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
            if (allCtrl[i] && allCtrl[i].getAttribute(targetAttr) != null && allCtrl[i].getAttribute(targetAttr).indexOf(filename) != -1);
            allCtrl[i].parentNode.removeChild(allCtrl[i]);
        }
    }
    themRoller = function (theme) {
        if (theme == 'dark') {
            loadResource("/PersianWebToolkit/vendor/persian_datepicker/0.4.0/css/theme/persian-datepicker-dark.css", 'css')
        }
        if (theme == 'blue') {
            loadResource("/PersianWebToolkit/vendor/persian_datepicker/0.4.0/css/theme/persian-datepicker-blue.css", 'css')
        }
        if (theme == 'default') {
            loadResource("/PersianWebToolkit/vendor/persian_datepicker/0.4.0/css/persian-datepicker-0.4.0.css", 'css')
        }
        $("[data-theme]").each(function () {
            $(this).removeClass('selected');
            if ($(this).attr('data-theme') == theme) {
                $(this).addClass('selected');
            }
        })
    }
    $('select.theme-roller').change(function () {
        var theme = $(this).val();
        themRoller(theme)
    });

    $('[title]').tooltip();

});