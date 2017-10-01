Vue.component('datepicker', {
    template: '<div>' +
    '<div v-if="options.inline"></div>' +
    '<input class="form-control"  v-else type="text" plcaholder="test" />' +
    '</div>',
    props: ['options'],
    watch: {
        options: {
            handler: function (val, oldVal) {
                console.log(this.options.inline);
                var that = this;
                setTimeout(function () {
                    that.pdatepicker.destroy();
                    that.pdatepicker = $(that.$el).children('*').persianDatepicker(val);
                    that.pdatepicker.show();
                }, 1);
            },
            deep: true
        },
    },
    mounted: function () {
        let that = this,
            eventsOptions = {
                onSelect: function () {
                    that.$emit('eventcalled', "onSelect")
                },
                onShow: function () {
                    that.$emit('eventcalled', "onShow")
                },
                onHide: function () {
                    that.$emit('eventcalled', "onHide")
                },
                onDestroy: function () {
                    that.$emit('eventcalled', "onDestroy")
                },
                dayPicker: {
                    onSelect: function () {
                        that.$emit('eventcalled', "dayPicker.onSelect");
                    }
                },
                monthPicker: {
                    onSelect: function () {
                        that.$emit('eventcalled', "monthPicker.onSelect");
                    }
                },
                yearPicker: {
                    onSelect: function () {
                        that.$emit('eventcalled', "yearPicker.onSelect");
                    }
                },
                navigator: {
                    onSwitch: function () {
                        that.$emit('eventcalled', "navigator.onSwitch");
                    },
                    onNext: function () {
                        that.$emit('eventcalled', " navigator.onNext");
                    },
                    onPrev: function () {
                        that.$emit('eventcalled', "navigator.onPrev");
                    }

                },
                toolbox: {
                    todayButton: {
                        onToday: function () {
                            that.$emit('eventcalled', "toolbox.todayButton.onToday");
                        }
                    },
                    calendarSwitch: {
                        onSwitch: function () {
                            that.$emit('eventcalled', "toolbox.calendarSwitch.onSwitch");
                        }
                    },
                    submitButton: {
                        onSubmit: function () {
                            that.$emit('eventcalled', "toolbox.calendarSwitch.onSwitch");
                        }
                    }
                }
            };

        this.pdatepicker = $(this.$el).children('*').persianDatepicker($.extend(true, this.options, eventsOptions));
    }


});


$(document).ready(function () {
    $('#configTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
})


new Vue({
    deep: true,
    el: '#app',
    methods: {
        eventcalled: function (eventMessage) {
            let logtime = new persianDate().toCalendar('gregorian').toLocale('en').format('YYYY/MM/DD HH:mm:ss');
            this.eventsLog = logtime + ':  ' + eventMessage + '\n' + this.eventsLog;
        }
    },
    data: {
        eventsLog: '',
        datepickerOptions: {
            inline: true,
            format: 'l',
            viewMode: 'day',
            persianDigit: true,
            initialValue: true,
            minDate: 1504713660730,
            maxDate: 1604713660730,
            autoClose: false,
            position: 'auto',
            altFormat: 'lll',
            altField: '#altfieldExample',
            onlyTimePicker: false,
            onlySelectOnDate: false,
            calendarType: 'persian',
            inputDelay: 800,
            observer: false,
            calendar: {
                persian: {
                    locale: 'fa',
                    showHint: true,
                    leapYearMode: 'algorithmic'
                },
                gregorian: {
                    locale: 'en',
                    showHint: true
                }
            },
            navigator: {
                enabled: true,
                scroll: {
                    enabled: true
                },
                text: {
                    btnNextText: '<',
                    btnPrevText: '>'
                }
            },
            toolbox: {
                enabled: true,
                calendarSwitch: {
                    enabled: true,
                    format: 'MMMM'
                },
                todayButton: {
                    enabled: true,
                    text: {
                        fa: 'امروز',
                        en: 'Today',
                    }
                },
                submitButton: {
                    enabled: true,
                    text: {
                        fa: 'تایید',
                        en: 'Submit',
                    }
                },
                text: {
                    btnToday: 'امروز'
                }
            },
            timePicker: {
                enabled: true,
                step: 1,
                hour: {
                    enabled: true,
                    step: null
                },
                minute: {
                    enabled: true,
                    step: null
                },
                second: {
                    enabled: true,
                    step: null
                },
                meridian: {
                    enabled: true
                }
            },
            dayPicker: {
                enabled: true,
                titleFormat: 'YYYY MMMM'
            },
            monthPicker: {
                enabled: true,
                titleFormat: 'YYYY'
            },
            yearPicker: {
                enabled: true,
                titleFormat: 'YYYY'
            },
            template: `
<div id="plotId" class="datepicker-plot-area {{cssClass}}">
    {{#navigator.enabled}}
        <div data-navigator class="datepicker-navigator">
            <div class="pwt-btn pwt-btn-next">{{navigator.text.btnNextText}}</div>
            <div class="pwt-btn pwt-btn-switch">{{navigator.switch.text}}</div>
            <div class="pwt-btn pwt-btn-prev">{{navigator.text.btnPrevText}}</div>
        </div>
    {{/navigator.enabled}}
    <div class="datepicker-grid-view" >
    {{#days.enabled}}
        {{#days.viewMode}}
        <div class="datepicker-day-view" >    
            <div class="month-grid-box">
                <div class="header">
                    <div class="title"></div>
                    <div class="header-row">
                        {{#weekdays.list}}
                            <div class="header-row-cell">{{.}}</div>
                        {{/weekdays.list}}
                    </div>
                </div>    
                <table cellspacing="0" class="table-days">
                    <tbody>
                        {{#days.list}}
                           
                            <tr>
                                {{#.}}
                                    {{#enabled}}
                                        <td data-date="{{dataDate}}" data-unix="{{dataUnix}}" >
                                            <span  class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span>
                                            {{#altCalendarShowHint}}
                                            <i  class="alter-calendar-day">{{alterCalTitle}}</i>
                                            {{/altCalendarShowHint}}
                                        </td>
                                    {{/enabled}}
                                    {{^enabled}}
                                        <td data-date="{{dataDate}}" data-unix="{{dataUnix}}" class="disabled">
                                            <span class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span>
                                            {{#altCalendarShowHint}}
                                            <i  class="alter-calendar-day">{{alterCalTitle}}</i>
                                            {{/altCalendarShowHint}}
                                        </td>
                                    {{/enabled}}
                                    
                                {{/.}}
                            </tr>
                        {{/days.list}}
                    </tbody>
                </table>
            </div>
        </div>
        {{/days.viewMode}}
    {{/days.enabled}}
    
    {{#month.enabled}}
        {{#month.viewMode}}
            <div class="datepicker-month-view">
                {{#month.list}}
                    {{#enabled}}               
                        <div data-month="{{dataMonth}}" class="month-item {{#selected}}selected{{/selected}}">{{title}}</small></div>
                    {{/enabled}}
                    {{^enabled}}               
                        <div data-month="{{dataMonth}}" class="month-item month-item-disable {{#selected}}selected{{/selected}}">{{title}}</small></div>
                    {{/enabled}}
                {{/month.list}}
            </div>
        {{/month.viewMode}}
    {{/month.enabled}}
    
    {{#year.enabled }}
        {{#year.viewMode }}
            <div class="datepicker-year-view" >
                {{#year.list}}
                    {{#enabled}}
                        <div data-year="{{dataYear}}" class="year-item {{#selected}}selected{{/selected}}">{{title}}</div>
                    {{/enabled}}
                    {{^enabled}}
                        <div data-year="{{dataYear}}" class="year-item year-item-disable {{#selected}}selected{{/selected}}">{{title}}</div>
                    {{/enabled}}                    
                {{/year.list}}
            </div>
        {{/year.viewMode }}
    {{/year.enabled }}
    
    </div>
    {{#time}}
    {{#enabled}}
    <div class="datepicker-time-view">
        {{#hour.enabled}}
            <div class="hour time-segment" data-time-key="hour">
                <div class="up-btn" data-time-key="hour">▲</div>
                <input value="{{hour.title}}" type="text" placeholder="hour" class="hour-input">
                <div class="down-btn" data-time-key="hour">▼</div>                    
            </div>       
            <div class="divider">
                <span>:</span>
            </div>
        {{/hour.enabled}}
        {{#minute.enabled}}
            <div class="minute time-segment" data-time-key="minute" >
                <div class="up-btn" data-time-key="minute">▲</div>
                <input disabled value="{{minute.title}}" type="text" placeholder="minute" class="minute-input">
                <div class="down-btn" data-time-key="minute">▼</div>
            </div>        
            <div class="divider second-divider">
                <span>:</span>
            </div>
        {{/minute.enabled}}
        {{#second.enabled}}
            <div class="second time-segment" data-time-key="second"  >
                <div class="up-btn" data-time-key="second" >▲</div>
                <input disabled value="{{second.title}}"  type="text" placeholder="second" class="second-input">
                <div class="down-btn" data-time-key="second" >▼</div>
            </div>
            <div class="divider meridian-divider"></div>
            <div class="divider meridian-divider"></div>
        {{/second.enabled}}
        {{#meridian.enabled}}
            <div class="meridian time-segment" data-time-key="meridian" >
                <div class="up-btn" data-time-key="meridian">▲</div>
                <input disabled value="{{meridian.title}}" type="text" class="meridian-input">
                <div class="down-btn" data-time-key="meridian">▼</div>
            </div>
        {{/meridian.enabled}}
    </div>
    {{/enabled}}
    {{/time}}
    
    {{#toolbox}}
    {{#enabled}}
    <div class="toolbox">
        {{#toolbox.submitButton.enabled}}
            <div class="pwt-btn-submit">{{submitButtonText}}</div>
        {{/toolbox.submitButton.enabled}}        
        {{#toolbox.todayButton.enabled}}
            <div class="pwt-btn-today">{{todayButtonText}}</div>
        {{/toolbox.todayButton.enabled}}        
        {{#toolbox.calendarSwitch.enabled}}
            <div class="pwt-btn-calendar">{{calendarSwitchText}}</div>
        {{/toolbox.calendarSwitch.enabled}}
    </div>
    {{/enabled}}
    {{^enabled}}
        {{#onlyTimePicker}}
        <div class="toolbox">
            <div class="pwt-btn-exit">{{text.btnExit}}</div>
        </div>
        {{/onlyTimePicker}}
    {{/enabled}}
    {{/toolbox}}
</div>
`
        },
        render: h => h('#App')
    }

})