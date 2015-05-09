/*
  persian-calheatmap - v0.1.0 
  Author: reza babakhani 
 http://babakhani.github.io/PersianWebToolkit/heatchart 
 */
( function () {(function (e) {
    e.Zebra_Tooltips = function (k, p) {
        var q = {animation_speed: 250, animation_offset: 20, background_color: "#000", close_on_click: !0, color: "#FFF", content: !1, default_position: "above", hide_delay: 100, keep_visible: !0, max_width: 250, opacity: ".95", position: "center", prerender: !1, show_delay: 100, vertical_offset: 0, onBeforeHide: null, onHide: null, onBeforeShow: null, onShow: null}, b = this, l, u, h, r;
        b.settings = {};
        b.hide = function (b, a) {
            b.each(function () {
                var b = e(this), c = b.data("Zebra_Tooltip");
                c && (c.sticky = !1, a && (c.destroy = !0), b.data("Zebra_Tooltip", c), m(b))
            })
        };
        b.show = function (b, a) {
            b.each(function () {
                var b = e(this), c = b.data("Zebra_Tooltip");
                c && (c.sticky = !0, c.muted = !1, a && (c.destroy = !0), b.data("Zebra_Tooltip", c), s(b))
            })
        };
        var n = function (c) {
            var a = c.data("Zebra_Tooltip");
            if (!a.tooltip) {
                var d = jQuery("<div>", {"class": "Zebra_Tooltip", css: {opacity: 0, display: "block"}}), g = jQuery("<div>", {"class": "Zebra_Tooltip_Message", css: {"max-width": b.settings.max_width, "background-color": b.settings.background_color, color: b.settings.color}}).html(b.settings.content ? b.settings.content : a.content).appendTo(d), a = jQuery("<div>", {"class": "Zebra_Tooltip_Arrow"}).appendTo(d), t = jQuery("<div>").appendTo(a);
                b.settings.keep_visible && (d.bind("mouseleave" + (b.settings.close_on_click ? " click" : ""), function () {
                    m(c)
                }), d.bind("mouseenter", function () {
                    s(c)
                }));
                d.appendTo("body");
                var k = d.outerWidth(), n = d.outerHeight(), p = t.outerWidth(), v = t.outerHeight(), f = g.outerWidth(), q = g.outerHeight(), a = {tooltip: d, tooltip_width: k, tooltip_height: n + v / 2, message: g, arrow_container: a, arrow_width: p, arrow_height: v, arrow: t};
                d.css({width: a.tooltip_width, height: a.tooltip_height});
                a.tooltip_width += g.outerWidth() - f;
                a.tooltip_height += g.outerHeight() - q;
                d.css({width: a.tooltip_width, height: a.tooltip_height, display: "none"});
                a = e.extend(c.data("Zebra_Tooltip"), a);
                c.data("Zebra_Tooltip", a)
            }
            a.sticky && !a.close && (jQuery("<a>", {"class": "Zebra_Tooltip_Close", href: "javascript:void(0)"}).html("x").bind("click",function (a) {
                a.preventDefault();
                a = c.data("Zebra_Tooltip");
                a.sticky = !1;
                c.data("Zebra_Tooltip", a);
                m(c)
            }).appendTo(a.message), a.close = !0, a = e.extend(c.data("Zebra_Tooltip"), a), c.data("Zebra_Tooltip", a));
            if (a.window_resized || a.window_scrolled)d = e(window), a.window_resized && (l = d.width(), u = d.height(), g = c.offset(), e.extend(a, {element_left: g.left, element_top: g.top, element_width: c.outerWidth(), element_height: c.outerHeight()})), r = d.scrollTop(), h = d.scrollLeft(), d = "left" == b.settings.position ? a.element_left - a.tooltip_width + a.arrow_width : "right" == b.settings.position ? a.element_left + a.element_width - a.arrow_width : a.element_left + (a.element_width - a.tooltip_width) / 2, g = a.element_top - a.tooltip_height, f = "left" == b.settings.position ? a.tooltip_width - a.arrow_width - a.arrow_width / 2 : "right" == b.settings.position ? a.arrow_width / 2 : (a.tooltip_width - a.arrow_width) / 2, d + a.tooltip_width > l + h && (f -= l + h - (d + a.tooltip_width) - 6, d = l + h - a.tooltip_width - 6, f + a.arrow_width > a.tooltip_width - 6 && (f = a.tooltip_width - 6 - a.arrow_width), d + f + a.arrow_width / 2 < a.element_left && (f = -1E4)), d < h && (f -= h - d, d = h + 2, 0 > f && (f = a.arrow_width / 2), d + f + a.arrow_width / 2 > a.element_left + a.element_width && (f = -1E4)), a.arrow_container.removeClass("Zebra_Tooltip_Arrow_Top"), a.arrow_container.addClass("Zebra_Tooltip_Arrow_Bottom"), a.message.css("margin-top", ""), a.arrow.css("borderColor", b.settings.background_color + " transparent transparent"), g < r || "below" == b.settings.default_position && a.element_top + a.element_height + b.settings.vertical_offset + a.tooltip_height + a.animation_offset < u + r ? (g = a.element_top + a.element_height - b.settings.vertical_offset, a.animation_offset = Math.abs(a.animation_offset), a.message.css("margin-top", a.arrow_height / 2), a.arrow_container.removeClass("Zebra_Tooltip_Arrow_Bottom"), a.arrow_container.addClass("Zebra_Tooltip_Arrow_Top"), a.arrow.css("borderColor", "transparent transparent " + b.settings.background_color)) : (a.animation_offset = -Math.abs(a.animation_offset), g += b.settings.vertical_offset), a.arrow_container.css("left", f), a.tooltip.css({left: d, top: g}), e.extend(a, {tooltip_left: d, tooltip_top: g, arrow_left: f}), a.window_resized = !1, a.window_scrolled = !1, a = e.extend(c.data("Zebra_Tooltip"), a), c.data("Zebra_Tooltip", a);
            return a
        }, m = function (c) {
            var a = c.data("Zebra_Tooltip");
            clearTimeout(a.hide_timeout);
            a.sticky || (clearTimeout(a.show_timeout), a.hide_timeout = setTimeout(function () {
                if (a.tooltip) {
                    if (b.settings.onBeforeHide && "function" == typeof b.settings.onBeforeHide)b.settings.onBeforeHide(c, a.tooltip);
                    a.close = !1;
                    a.destroy && (a.muted = !0);
                    c.data("Zebra_Tooltip", a);
                    e("a.Zebra_Tooltip_Close", a.tooltip).remove();
                    a.tooltip.stop();
                    a.tooltip.animate({opacity: 0, top: a.tooltip_top + a.animation_offset}, b.settings.animation_speed, function () {
                        e(this).css("display", "none");
                        if (b.settings.onHide && "function" == typeof b.settings.onHide)b.settings.onHide(c, a.tooltip)
                    })
                }
            }, b.settings.hide_delay))
        }, s = function (c) {
            var a = c.data("Zebra_Tooltip");
            clearTimeout(a.show_timeout);
            a.muted || (clearTimeout(a.hide_timeout), a.show_timeout = setTimeout(function () {
                a = n(c);
                if (b.settings.onBeforeShow && "function" == typeof b.settings.onBeforeShow)b.settings.onBeforeShow(c, a.tooltip);
                "block" != a.tooltip.css("display") && a.tooltip.css({top: a.tooltip_top + a.animation_offset});
                a.tooltip.css("display", "block");
                a.tooltip.stop();
                a.tooltip.animate({top: a.tooltip_top, opacity: b.settings.opacity}, b.settings.animation_speed, function () {
                    if (b.settings.onShow && "function" == typeof b.settings.onShow)b.settings.onShow(c, a.tooltip)
                })
            }, b.settings.show_delay))
        };
        (function () {
            b.settings = e.extend({}, q, p);
            k.each(function () {
                var c = e(this), a = c.attr("title"), d = c.data("zebra-tooltip");
                if (a && "" !== a || d && "" !== d || void 0 !== b.settings.content)c.bind({mouseenter: function () {
                    s(c)
                }, mouseleave: function () {
                    m(c)
                }}), c.data("Zebra_Tooltip", {tooltip: null, content: d || a || "", window_resized: !0, window_scrolled: !0, show_timeout: null, hide_timeout: null, animation_offset: b.settings.animation_offset, sticky: !1, destroy: !1, muted: !1}), c.attr("title", ""), b.settings.prerender && n(c)
            });
            e(window).bind("scroll resize", function (b) {
                k.each(function () {
                    var a = e(this).data("Zebra_Tooltip");
                    a && ("scroll" == b.type ? a.window_scrolled = !0 : a.window_resized = !0, e(this).data("Zebra_Tooltip", a))
                })
            })
        })()
    }
})(jQuery);
/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
$.mustache = function(input,dict) {
    // Micro Mustache Template engine
    String.prototype.format = function string_format(arrayInput) {
            function replacer(key){
                  var keyArr =key.slice(2,-2).split("."),firstKey = keyArr[0], SecondKey = keyArr[1];
                   if (arrayInput[firstKey] instanceof Object){
                         return arrayInput[firstKey][SecondKey];
                   }
                   else{
                         return arrayInput[firstKey];
                   }
            }
            return this.replace(/{{\s*[\w\.]+\s*}}/g,replacer);
      };
     return $(input.format(dict));
};
/**
 *
 * @param i
 */
var log = function(i){
    console.log(i);
}
var Class_Config = {
    /**
     * @desc monthTitleFormat
     */
    monthTitleFormat: "MMMM",

    /**
     * @desc startDate
     */
    startDate: new pDate([new pDate().year(), 1, 1, 1, 1, 1, 1]),


    /**
     * @desc  endDate
     */
    endDate: new pDate().endOf('year'),


    /**
     * @desc weekDayTitle
     */
    weekDayTitle: ["شنبه", "", "دوشنبه", "", "چهارشنبه", "", "جمعه"],


    /**
     * @desc dayWidth
     */
    dayWidth: "30",


    /**
     * @desc dayHeight
     */
    dayHeight: "30",


    /**
     * @desc data
     */
    data: {
        label: {
            enabled: true,
            format: "DD",
            formatter: function (Obj, date) {
                return date.format("DD");
            }
        },
        tooltip: {
            enabled: true,
            formatter: function (Obj, date) {

            }
        }
    },


    /**
     * @desc days
     */
    days: {
        /**
         * @desc render data function()
         * @type function
         */
        renderData: function ($day, data) {
        }

    }
}

var Class_Days = {
        /**
         * @desc monthTitleFormat
         */
        monthTitleFormat: "MMMM",


        /**
         * #desc label config dixt
         */
        label: {
            enabled: true,
            format: "D",
            formatter: function (self, date) {
                return self.underRenderDate.format(self.label.format);
            }
        },


        /**
         * @desc tooltip
         */
        tooltip: {
            enabled: false
        },


        /**
         * @desc startDate
         */
        startDate: "",


        /**
         * @desc endDate
         */
        endDate: "",


        /**
         * @desc underRenderDate
         */
        underRenderDate: false,


        /**
         * @desc data
         */
        data: "",


        /**
         *
         * @returns {Class_Days}
         * @private
         */
        _basicRender: function () {
            var self = this;
            var weekLength = self.endDate.diff(self.startDate, 'week') + 1
            var i = 0;
            while (i < weekLength) {
                var $weekBox = $.mustache(TEMPLATE.weekBox, {});
                $weekBox.appendTo(self.$container);
                i++;
            }
            return this;
        },


        /**
         *
         * @param i
         * @returns {*}
         */
        getPersianDayOfweekIndex: function (i) {
            if (i == 7) {
                return 1;
            } else {
                return i + 1;
            }
        },


        /**
         *
         * @returns {Class_Days}
         * @private
         */
        _renderDaysContent: function () {
            var self = this, monthChange = "alternat", todayDate = new pDate();
            if (self.underRenderDate == false) {
                self.underRenderDate = self.startDate;
            }
            self.$container.find(".week-box").each(function () {
                var $weekBox = $(this);
                $(this).find("li").each(function (index) {
                    var weekDay = self.getPersianDayOfweekIndex(self.underRenderDate.days());
                    var monthDay = self.underRenderDate.date();
                    if (weekDay == index + 1 && self.underRenderDate.unix() < self.endDate.unix()) {
                        var dateKey = self.underRenderDate.years()
                            + "" + self.leftZeroFill(self.underRenderDate.month(), 2)
                            + "" + self.leftZeroFill(self.underRenderDate.dates(), 2);
                        var dateUnix = self.underRenderDate.valueOf();
                        $(this).attr({
                            "dateKey": dateKey,
                            "dateUnix": dateUnix
                        }).addClass("have-day").addClass(monthChange);

                        if (self.label.enabled) {
                            $(this).html(self.label.formatter(self, self.underRenderDate));
                        }

                        if (self.underRenderDate.years() == todayDate.years() &&
                            self.underRenderDate.date() == todayDate.date() &&
                            self.underRenderDate.month() == todayDate.month()) {
                            $(this).addClass("today")
                        }
                        self.underRenderDate = self.underRenderDate.add("days", 1);
                    }

                    if (monthDay == 1 && $(this).is("[dateunix]")) {
                        if (monthChange == "alternat") {
                            monthChange = "";
                        } else {
                            monthChange = "alternat";
                        }
                        var monthTitle = $('<div class="month-title" ></div>').text(self.underRenderDate.format(self.monthTitleFormat));
                        $weekBox.append(monthTitle);
                    }

                });
            });
            return this;
        },


        /**
         *
         * @param number
         * @param targetLength
         * @returns {string}
         */
        leftZeroFill: function (number, targetLength) {
            var output = number + '';
            while (output.length < targetLength) {
                output = '0' + output;
            }
            return output;
        },


        /**
         *
         * @private
         */
        _applyTooltip: function () {
            var self = this;
            //log("_applyTooltip");
            //log(self.data);
            $(self.$container).find(".week-box li.have-day").each(function () {
                var tooltipElem = this;
                var datyaKey = $(this).attr("dateKey");
                if (self.data[datyaKey]) {
                    new $.Zebra_Tooltips($(tooltipElem), {
                        //'position': 'top',
                        'max_width': 200,
                        //'animation_speed': 100,
                        //'animation_offset': 10,
                        'content': self.data[datyaKey].data
                    });
                }
            });
            return this;
        },


        /**
         *
         * @param $day
         * @param dayData
         */
        render: function ($day, dayData) {
            $day.css({
                background: dayData.color
            });
            return this;
        },


        /**
         *
         * @param data
         */
        applyData: function (data) {
            var self = this;
            $.each(data, function (key, dayData) {
                var $day = self.$container.find(".week-box li[datekey=" + key + "]");
                self.render($day, dayData);
            });
            return this;
        },


        /**
         *
         * @returns {Class_Days}
         * @private
         */
        _init: function () {
            var self = this;
            this._basicRender();
            this._renderDaysContent();
            if (self.tooltip.enabled) {
                this._applyTooltip();
            }
            this.applyData(self.data);
            return this;
        }
    },


    /**
     *
     * @param container
     * @param config
     * @param userConfig
     * @returns {Class_Days|Class_Persian_Hit_Chart|*}
     * @constructor
     */
    Days = function (container, config, userConfig) {
        $.extend(true, this, Class_Days, config, userConfig, {
            $container: container
        });
        this.startDate = config.startDate
        this.endDate = config.endDate
        return this._init();
    };
var Class_Persian_Hit_Chart = {
        /**
         *
         * @returns {Class_Persian_Hit_Chart}
         * @private
         */
        _bootstrap: function () {
            var self = this;
            this.elem = $.mustache(TEMPLATE.basic, {});
            this.elem.appendTo(self.$container);
            this.startDate = new pDate(self.startDate);
            this.endDate = new pDate(self.endDate);
            return this;
        },


        /**
         *
         * @returns {Class_Persian_Hit_Chart}
         * @private
         */
        _renderDays: function () {
            var self = this;
            var conatiner = this.elem.find(".days-container > div");
            this._days = new Days(conatiner, {
                startDate: self.startDate,
                endDate: self.endDate,
                data: self.data,
                tooltipFormatter: self.tooltipFormatter,
                monthTitleFormat: self.monthTitleFormat
            }, self.days);
            return this;
        },


        /**
         *
         * @private
         */
        _setWeekDayTitle: function () {
            var self = this;
            self.$container.find(".week-box-title li").each(function (index) {
                if (self.weekDayTitle[index]) {
                    $(this).html(self.weekDayTitle[index])
                }
            });
            return this;
        },


        /**
         *
         * @private
         */
        _setLayoutSize: function () {
            var self = this;
            self.$container.find(".week-box-title li").height(self.dayHeight);//.width(self.dayWidth)
            self.$container.find(".week-box li").height(self.dayHeight).width(self.dayWidth).css({
                'line-height': self.dayHeight + 'px'
            });

            var weekBoxHight = self.$container.find(".week-box").height();
            var monthTitle = self.$container.find(".month-title").height();
            var $weekBox = self.$container.find(".week-box");
            var weekBoxWidth = $weekBox.outerWidth() * $weekBox.length;
            self.$container.find(".days-container > div").width(weekBoxWidth);
            var weekBoxContainerWidth = self.$container.find(".persian-hit-chart").width();
            var weekContainerHeight = weekBoxHight + monthTitle;
            if (weekBoxContainerWidth < weekBoxWidth) {
                // Have Scroll and add scroll height
                weekContainerHeight += 20;
            }
            self.$container.find(".days-container").height(weekContainerHeight);
            self.$container.find(".persian-heat-map-chart").height(weekContainerHeight);
            return this;
        },


        /**
         *
         */
        _attachEvents: function () {
            var self = this;
            var $scrollContainer = self.$container.find(".days-container");
            var $scrollElem = self.$container.find(".days-container >  div");
            var widthDelta = $scrollElem.width() - $scrollContainer.width();
            this.$container.on('mousewheel', function (event, delta) {
                val = this.scrollLeft - (delta * 50);
                jQuery(this).stop().animate({scrollLeft: val}, 500);
                //event.preventDefault();
            });
            return this;
        },


        /**
         *
         * @returns {Class_Persian_Hit_Chart}
         * @private
         */
        _init: function () {
            return this._bootstrap()
                ._setWeekDayTitle()
                ._renderDays()
                ._attachEvents()
                ._setLayoutSize();
        }
    },

    /**
     *
     * @param container
     * @param config
     * @returns {Class_Persian_Hit_Chart|*}
     * @constructor
     */
    PersianHitChart = function (container, config) {
        $.extend(true, this, Class_Persian_Hit_Chart, Class_Config, config, {
            $container: $(container)
        });
        return this._init();
    };
var TEMPLATE = {
    /**
     * @desc basic template
     */
    basic: '<div class="persian-heat-map-chart" ><ul class="week-box-title" >' +
        '<li></li><li></li><li></li><li></li><li></li><li></li><li></li>' +
        '</ul>' +
        '<div class="days-container" ><div></div>',


    /**
     * @desc weekBox
     */
    weekBox: '<ul class="week-box" ><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>'
}
$.fn.persianHitChart = $.fn.persianHitChart = function (options) {
    var args = Array.prototype.slice.call(arguments), output = this;
    if (!this) {
        $.error("Invalid selector");
    }
    $(this).each(function () {
        // encapsulation Args
        var emptyArr = new Array, tempArg = args.concat(emptyArr), dp = $(this).data("persianHitChart");
        if (dp && typeof tempArg[0] == "string") {
            var funcName = tempArg[0], funcArgs = tempArg.splice(0, 1);
            output = dp[funcName](tempArg);
        } else {
            this.persianHitChart = new PersianHitChart(this, options);
        }
    });
    return output;
};}());