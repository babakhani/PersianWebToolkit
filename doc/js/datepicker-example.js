$(document).ready(function () {

    $('.normal-example').persianDatepicker({});

    $('.inline-example').persianDatepicker({
        inline: true,
        altField: '#inlineExampleAlt',
        altFormat: 'LLLL',
        toolbox: {
            calendarSwitch: {
                enabled: true
            }
        },
        navigator: {
            scroll: {
                enabled: false
            }
        },
        maxDate: new persianDate().add('month', 3).valueOf(),
        minDate: new persianDate().subtract('month', 3).valueOf(),
        timePicker: {
            enabled: true,
            meridiem: {
                enabled: true
            }
        }
    });

    $('.initial-value-type-example').persianDatepicker({
        initialValueType: 'persian'
    });

    $('.initial-value-type-gregorian-example').persianDatepicker({
        initialValueType: 'gregorian'
    });

    $('.gregorian-example').persianDatepicker({
        inline: true,
        altField: '#gregorianExampleAlt',
        altFormat: 'LLLL',
        calendarType: 'gregorian',
        toolbox: {
            calendarSwitch: {
                enabled: true
            }
        },
        navigator: {
            scroll: {
                enabled: false
            }
        },
        maxDate: new persianDate().add('month', 3).valueOf(),
        minDate: new persianDate().subtract('month', 3).valueOf(),
        timePicker: {
            enabled: true,
            meridiem: {
                enabled: true
            }
        }
    });

    $('.initial-value-example').persianDatepicker({
        initialValue: false
    });

    $('.leapyear-algorithmic').persianDatepicker({
        inline: true,
        navigator: {
            scroll: {
                enabled: false
            }
        }
    });

    $('.leapyear-astronomical').persianDatepicker({
        inline: true,
        navigator: {
            scroll: {
                enabled: false
            }
        },
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.locale-fa').persianDatepicker({
        inline: true,
        navigator: {
            scroll: {
                enabled: false
            }
        }

    });

    $('.locale-en').persianDatepicker({
        inline: true,
        navigator: {
            scroll: {
                enabled: false
            }
        },
        calendar: {
            persian: {
                locale: 'en'
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


    var to, from;
    to = $(".range-to-example").persianDatepicker({
        inline: true,
        altField: '.range-to-example-alt',
        altFormat: 'LLLL',
        initialValue: false,
        navigator: {
            scroll: {
                enabled: false
            }
        },
        onSelect: function (unix) {
            to.touched = true;
            if (from && from.options && from.options.maxDate != unix) {
                var cachedValue = from.getState().selected.unixDate;
                from.options = {maxDate: unix};
                if (from.touched) {
                    from.setDate(cachedValue);
                }
            }
        }
    });
    from = $(".range-from-example").persianDatepicker({
        inline: true,
        altField: '.range-from-example-alt',
        altFormat: 'LLLL',
        initialValue: false,
        navigator: {
            scroll: {
                enabled: false
            }
        },
        onSelect: function (unix) {
            from.touched = true;
            if (to && to.options && to.options.minDate != unix) {
                var cachedValue = to.getState().selected.unixDate;
                to.options = {minDate: unix};
                if (to.touched) {
                    to.setDate(cachedValue);
                }
            }
        }
    });

});