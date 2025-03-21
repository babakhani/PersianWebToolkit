$(document).ready(function () {

    $('.normal-example').persianDatepicker({
      calendar:{
        persian: {
          leapYearMode: 'astronomical'
        }
      }
    });

    $('.inline-example').persianDatepicker({
        inline: true,
        calendar:{
          persian: {
            leapYearMode: 'astronomical'
          }
        },
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
        initialValueType: 'persian',
        calendar:{
          persian: {
            leapYearMode: 'astronomical'
          }
        },
    });

    $('.initial-value-type-gregorian-example').persianDatepicker({
        initialValueType: 'gregorian',
        calendar:{
          persian: {
            leapYearMode: 'astronomical'
          }
        },
    });

    $('.gregorian-example').persianDatepicker({
        inline: true,
        altField: '#gregorianExampleAlt',
        altFormat: 'LLLL',
        calendarType: 'gregorian',
        calendar:{
          persian: {
            leapYearMode: 'astronomical'
          }
        },
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
        initialValue: false,
        calendar:{
          persian: {
            leapYearMode: 'astronomical'
          }
        },
    });

    $('.leapyear-algorithmic').persianDatepicker({
        inline: true,
        calendar:{
          persian: {
            leapYearMode: 'astronomical'
          }
        },
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
        calendar:{
          persian: {
            leapYearMode: 'astronomical'
          }
        },
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
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.format-example').persianDatepicker({
        format: 'LLLL',
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.formatter-example').persianDatepicker({
        formatter: function (unix) {
            return 'selected unix: ' + unix;
        },
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.alt-field-example').persianDatepicker({
        altField: '.alt-field-example-alt-field',
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.persian-digit-example').persianDatepicker({
        persianDigit: false,
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.view-mode-example').persianDatepicker({
        viewMode: 'year',
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.min-date-example').persianDatepicker({
        minDate: new persianDate().valueOf(),
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.max-date-example').persianDatepicker({
        maxDate: new persianDate().valueOf(),
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.check-date-example').persianDatepicker({
        checkDate: function (unix) {
            return new persianDate(unix).day() != 4;
        },
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.check-month-example').persianDatepicker({
        checkMonth: function (month) {
            return month < 6;
        },
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.check-year-example').persianDatepicker({
        checkYear: function (year) {
            return year >= 1391;
        },
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.only-timepicker-example').persianDatepicker({
        onlyTimePicker: true,
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.auto-close-example').persianDatepicker({
        autoClose: true,
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.on-select-example').persianDatepicker({
        onSelect: function (unix) {
            console.log('datepicker select : ' + unix);
        },
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });

    $('.observer-example').persianDatepicker({
        observer: true,
        format: 'YYYY/MM/DD',
        altField: '.observer-example-alt',
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        }
    });


    var to, from;
    to = $(".range-to-example").persianDatepicker({
        inline: true,
        altField: '.range-to-example-alt',
        altFormat: 'LLLL',
        initialValue: false,
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        },
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
        calendar: {
            persian: {
                leapYearMode: 'astronomical'
            }
        },
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
