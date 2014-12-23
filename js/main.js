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


    $('select.theme-roller').change(function () {
        var theme = $(this).val();
        if (theme == 'dark') {
            loadResource("http://rawgithub.com/babakhani/pwt.datepicker/Develop/dist/css/theme/persian-datepicker-dark.css", 'css')
        }
        if (theme == 'blue') {
            loadResource("http://rawgithub.com/babakhani/pwt.datepicker/Develop/dist/css/theme/persian-datepicker-blue.css", 'css')
        }
        if (theme == 'default') {
            loadResource("http://rawgithub.com/babakhani/pwt.datepicker/Develop/dist/css/persian-datepicker-0.3.5.min.css", 'css')
        }
    });

});