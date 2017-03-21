

$(document).ready(function () {

    $('.normal-example').persianDatepicker({});

    $('.inline-example').persianDatepicker();

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
        minDate: new persianDate().unix()
    });

    $('.max-date-example').persianDatepicker({
        maxDate: new persianDate().unix()
    });

    $('.check-date-example').persianDatepicker({
        checkDate: function (unix) {
            return new persianDate(unix).weekDayNumber != 4;
        }
    });

    $('.check-month-example').persianDatepicker({
        checkMonth: function (month) {
            return month < 6;
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
            // alert('datepicker select : ' + unix);
        }
    });

});