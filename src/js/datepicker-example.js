$(document).ready(function () {

    $('.normal-example').persianDatepicker({});

    $('.inline-example').persianDatepicker({
        inline: true,
        altField: '#inlineExampleAlt',
        altFormat: 'LLLL',
        maxDate: new persianDate().add('month', 3).valueOf(),
        minDate: new persianDate().subtract('month', 3).valueOf(),
        timePicker: {
            enabled: true,
            meridiem: {
                enabled: true
            }
        }
    });

    $('.format-example').persianDatepicker({
        format: 'LLLL'
    });

    $('.formatter-example').persianDatepicker({
        formatter: function (unix) {
            return 'selected unix: ' + unix;
        }
    });

    $('.alt-field-example').persianDatepicker({
        altField: '.alt-field-example-alt-field'
    });

    $('.persian-digit-example').persianDatepicker({
        persianDigit: false
    });

    $('.view-mode-example').persianDatepicker({
        viewMode: 'year'
    });

    $('.min-date-example').persianDatepicker({
        minDate: new persianDate().valueOf()
    });

    $('.max-date-example').persianDatepicker({
        maxDate: new persianDate().valueOf()
    });

    $('.check-date-example').persianDatepicker({
        checkDate: function (unix) {
            return new persianDate(unix).day() != 4;
        }
    });

    $('.check-month-example').persianDatepicker({
        checkMonth: function (month) {
            return month < 6;
        }
    });

    $('.check-year-example').persianDatepicker({
        checkYear: function (year) {
            return year >= 1391;
        }
    });

    $('.only-timepicker-example').persianDatepicker({
        onlyTimePicker: true
    });

    $('.auto-close-example').persianDatepicker({
        autoClose: true
    });

    $('.on-select-example').persianDatepicker({
        onSelect: function (unix) {
            console.log('datepicker select : ' + unix);
        }
    });

    $('.observer-example').persianDatepicker({
        observer: true,
        format: 'YYYY/MM/DD',
        altField: '.observer-example-alt'
    });

});