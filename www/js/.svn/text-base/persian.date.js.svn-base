// Persian Date
// Version 0.1.5
// Author Reza Babakhani
// written under the GPL version 2.0
// All Unit test passed , work on  Chrome / Opera / FF / IE 7,8,9

String.prototype.toPersianDigit = function(a) {
    return this.replace(/\d+/g, function(digit) {
        var enDigitArr = [], peDigitArr = [];
        for(var i = 0; i < digit.length; i++) {
            enDigitArr.push(digit.charCodeAt(i));
        }
        for(var j = 0; j < enDigitArr.length; j++) {
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!a && a == true) ? 1584 : 1728)));
        }
        return peDigitArr.join('');
    });
};
var Class_DateRange = {
    monthRange : {
        1 : {
            name : {
                fa : "فروردین"
            },
            abbr : {
                fa : "فرو"
            }
        },
        2 : {
            name : {
                fa : "اردیبهشت"
            },
            abbr : {
                fa : "ارد"
            }
        },
        3 : {
            name : {
                fa : "خرداد"
            },
            abbr : {
                fa : "خرد"
            }
        },
        4 : {
            name : {
                fa : "تیر"
            },
            abbr : {
                fa : "تیر"
            }
        },
        5 : {
            name : {
                fa : "مرداد"
            },
            abbr : {
                fa : "مرد"
            }
        },
        6 : {
            name : {
                fa : "شهریور"
            },
            abbr : {
                fa : "شهر"
            }
        },
        7 : {
            name : {
                fa : "مهر"
            },
            abbr : {
                fa : "مهر"
            }
        },
        8 : {
            name : {
                fa : "آبان"
            },
            abbr : {
                fa : "آبا"
            }

        },
        9 : {
            name : {
                fa : "آذر"
            },
            abbr : {
                fa : "آذر"
            }
        },
        10 : {
            name : {
                fa : "دی"
            },
            abbr : {
                fa : "دی"
            }
        },
        11 : {
            name : {
                fa : "بهمن"
            },
            abbr : {
                fa : "بهم"
            }
        },
        12 : {
            name : {
                fa : "اسفند"
            },
            abbr : {
                fa : "اسف"
            }
        }
    },
    weekRange : {
        0 : {
            name : {
                fa : "شنبه"
            },
            abbr : {
                fa : "ش"
            }
        },
        1 : {
            name : {
                fa : "یکشنبه"
            },
            abbr : {
                fa : "ی"
            }
        },
        2 : {
            name : {
                fa : "دوشنبه"
            },
            abbr : {
                fa : "د"
            }
        },
        3 : {
            name : {
                fa : "سه شنبه"
            },
            abbr : {
                fa : "س"
            }
        },
        4 : {
            name : {
                fa : "چهار شنبه"
            },
            abbr : {
                fa : "چ"
            }
        },
        5 : {
            name : {
                fa : "پنج شنبه"
            },
            abbr : {
                fa : "پ"
            }
        },
        6 : {
            name : {
                fa : "جمعه"
            },
            abbr : {
                fa : "ج"
            }
        }
    },
    persianDaysName : ["اورمزد", "بهمن", "اوردیبهشت", "شهریور", "سپندارمذ", "خورداد", "امرداد", "دی به آذز", "آذز", "آبان", "خورشید", "ماه", "تیر", "گوش", "دی به مهر", "مهر", "سروش", "رشن", "فروردین", "بهرام", "رام", "باد", "دی به دین", "دین", "ارد", "اشتاد", "آسمان", "زامیاد", "مانتره سپند", "انارام", "زیادی"]
};

var Class_PersianDateUtility = {
    arrayFromDate : function(date) {
        return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]
    },
    toPersianDigit : function(digit) {
        return digit.toString().toPersianDigit();
    },
    // check if is an array
    isArray : function(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    },
    isString : function(input) {
        return typeof input == "string" ? true : false;
    },
    isNumber : function(input) {
        return typeof input == "number" ? true : false;
    },
    // for typechecking Date objects
    isDate : function(input) {
        return input instanceof Date;
    },
    // for typechecking Duration objects
    isDuration : function(obj) {
        return obj instanceof Duration;
    },
    isUndefined : function(input) {
        if( typeof input == "undefined") {
            return true;
        } else {
            return false;
        }
    },
    leftZeroFill : function(number, targetLength) {
        var output = number + '';
        while(output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    },
    absRound : function(number) {
        if(number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    },
    mod : function(a, b) {
        return a - (b * Math.floor(a / b));
    },
    traceNodesToPersianDigit : function(Node) {
        if(Node.nodeType == 3)//TextNode
            Node.nodeValue = Node.nodeValue.toPersianDigit();
        else
            for(var i = 0; i < Node.childNodes.length; i++)TraceNodesToPersianDigit(Node.childNodes[i]);
    }
};

var Class_DateConvertor = {
    GREGORIAN_EPOCH : 1721425.5,
    PERSIAN_EPOCH : 1948320.5,
    jwday : function jwday(j) {
        return this.mod(Math.floor((j + 1.5)), 7);
    },
    //  LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
    isLeapGregorian : function(year) {
        return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));
    },
    isLeapPersian : function(year) {
        return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    },
    //  GREGORIAN_TO_JD  --  Determine Julian day number from Gregorian calendar date
    gregorianToJd : function(year, month, day) {
        return (this.GREGORIAN_EPOCH - 1) + (365 * (year - 1)) + Math.floor((year - 1) / 4) + (-Math.floor((year - 1) / 100)) + Math.floor((year - 1) / 400) + Math.floor((((367 * month) - 362) / 12) + ((month <= 2) ? 0 : (this.isLeapGregorian(year) ? -1 : -2)
        ) + day);
    },
    //  JD_TO_GREGORIAN  --  Calculate Gregorian calendar date from Julian day
    jdToGregorian : function(jd) {
        var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, dyindex, year, yearday, leapadj;
        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - this.GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = this.mod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = this.mod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = this.mod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if(!((cent == 4) || (yindex == 4))) {
            year++;
        }
        yearday = wjd - this.gregorianToJd(year, 1, 1);
        leapadj = ((wjd < this.gregorianToJd(year, 3, 1)) ? 0 : (this.isLeapGregorian(year) ? 1 : 2)
        );
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - this.gregorianToJd(year, month, 1)) + 1;
        return new Array(year, month, day);
    },
    //  PERSIAN_TO_JD  --  Determine Julian day from Persian date
    persianToJd : function(year, month, day) {
        this.mod = function(a, b) {
            return a - (b * Math.floor(a / b));
        };
        
        var epbase, epyear;
        epbase = year - ((year >= 0) ? 474 : 473);
        epyear = 474 + this.mod(epbase, 2820);
        return day + ((month <= 7) ? ((month - 1) * 31) : (((month - 1) * 30) + 6)
        ) + Math.floor(((epyear * 682) - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (this.PERSIAN_EPOCH - 1);
    },
    //  JD_TO_PERSIAN  --  Calculate Persian date from Julian day
    jdToPersian : function(jd) {
        var year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
        jd = Math.floor(jd) + 0.5;
        depoch = jd - this.persianToJd(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = this.mod(depoch, 1029983);
        if(cyear == 1029982) {
            ycycle = 2820;
        } else {
            aux1 = Math.floor(cyear / 366);
            aux2 = this.mod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) + aux1 + 1;
        }
        year = ycycle + (2820 * cycle) + 474;
        if(year <= 0) {
            year--;
        }
        yday = (jd - this.persianToJd(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - this.persianToJd(year, month, 1)) + 1;
        return new Array(year, month, day);
    },
    calcPersian : function(year, month, day) {
        var date, j;
        var j = this.persianToJd(year, month, day);
        var date = this.jdToGregorian(j);
        return new Array(date[0], date[1] - 1, date[2]);
    },
    //  calcGregorian  --  Perform calculation starting with a Gregorian date
    calcGregorian : function(year, month, day) {
        var j;
        //  Update Julian day
        var j = this.gregorianToJd(year, month + 1, day) + (Math.floor(0 + 60 * (0 + 60 * 0) + 0.5) / 86400.0);
        //  Update Persian Calendar
        var perscal = this.jdToPersian(j);
        var weekday = this.jwday(j);
        return new Array(perscal[0], perscal[1], perscal[2], weekday);
    },
    //Converts a gregorian date to Jalali date for different formats
    toPersianDate : function(gd) {
        var pa = this.calcGregorian(gd.getFullYear(), gd.getMonth(), gd.getDate());
        var output = {};
        output.monthDayNumber = pa[2] - 1;
        // TODO: simplify this code
        // Sync Gregorian Week Index Width Persian  week Index
        if(pa[3] == 6) {
            output.weekDayNumber = 0;
        } else {
            output.weekDayNumber = pa[3] + 1;
        }
        output.year = pa[0];
        output.month = pa[1];
        output.day = pa[3];
        output.date = pa[2];
        output.hours = gd.getHours();
        output.minutes = ((gd.getMinutes() < 10) ? ('0' + gd.getMinutes()) : (gd.getMinutes()));
        output.seconds = gd.getSeconds();
        output.milliseconds = gd.getMilliseconds();
        output.timeZoneOffset = gd.getTimezoneOffset();
        return output;
    },
    persianArrayToGregorianDate : function(parray) {
        // Howha : javascript Cant Parse this array truly 2011,2,20
        var pd = this.calcPersian(parray[0] ? parray[0] : 0, parray[1] ? parray[1] : 1, parray[2] ? parray[2] : 1);
        var gDate = new Date(pd[0], pd[1], pd[2]);
        gDate.setYear(pd[0]);
        gDate.setMonth(pd[1]);
        gDate.setDate(pd[2]);
        // TODO:
        
        gDate.setHours(parray[3] ? parray[3] : 0);
        gDate.setMinutes(parray[4] ? parray[4] : 0);
        gDate.setSeconds(parray[5] ? parray[5] : 0);
        return gDate;
    },
    getPersianArrayFromPDate : function(pDate) {
        return [pDate.year, pDate.month, pDate.date, pDate.hours, pDate.minutes, pDate.seconds, pDate.milliseconds];
    }
};

var Duration = function(duration) {
    var absRound = function(number) {
        if(number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    };
    var data = this._data = {}, years = duration.years || duration.y || 0, months = duration.months || duration.M || 0, weeks = duration.weeks || duration.w || 0, days = duration.days || duration.d || 0, hours = duration.hours || duration.h || 0, minutes = duration.minutes || duration.m || 0, seconds = duration.seconds || duration.s || 0, milliseconds = duration.milliseconds || duration.ms || 0;
    // representation for dateAddRemove
    this._milliseconds = milliseconds + seconds * (1e3) + minutes * (6e4) + hours * (36e5);
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = days + weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = months + years * 12;
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    seconds += absRound(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes += absRound(seconds / 60);
    data.minutes = minutes % 60;
    hours += absRound(minutes / 60);
    data.hours = hours % 24;
    days += absRound(hours / 24);
    days += weeks * 7;
    data.days = days % 30;
    months += absRound(days / 30);
    data.months = months % 12;
    years += absRound(months / 12);
    data.years = years;
    return this;

};

Duration.prototype = {
    weeks : function() {
        return "Must Implement";
    },
    valueOf : function() {
        return this._milliseconds + this._days * (864e5) + this._months * (2592e6);
    },
    humanize : function(withSuffix) {
        return "Must Implement";
    }
};

var Class_Duration = {
    duration : function(input, key) {
        var isDuration = this.isDuration(input), isNumber = ( typeof input === 'number'), duration = ( isDuration ? input._data : ( isNumber ? {} : input)), ret;
        if(isNumber) {
            if(key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        }
        return new Duration(duration);
    },
    isDuration : function(obj) {
        return obj instanceof Duration;
    },humanize:function(){
        return "Must Implement";
    }
}

var Class_PersianDate = {
    //.add('days', 7);
    add : function(key, input) {
        var d = this.duration(input, key).valueOf();
        var newUnixDate = this.gDate.valueOf() + d;
        return new persianDate(newUnixDate);
    },
    subtract : function(key, input) {
        var d = this.duration(input, key).valueOf()
        var newUnixDate = this.gDate.valueOf() - d;
        return new persianDate(newUnixDate);
    },
    format : function(inputString) {
        var self = this;
        var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|LT|LL?L?L?)/g;
        var info = {
            year : self.year(),
            month : self.month(),
            hour : self.hours(),
            minute : self.minutes(),
            second : self.seconds(),
            date : self.date(),
            timezone : self.zone()
        };
        function replaceFunction(input) {
            switch(input) {
                // AM/PM
                case("a"): {
                    return ((info.hour >= 12) ? 'ب ظ' : 'ق ظ');
                }
                // Hours (Int)
                case("H"): {
                    return self.toPersianDigit(info.hour);
                }
                case("HH"): {
                    return self.toPersianDigit(self.leftZeroFill(info.hour, 2))
                }
                // Minutes
                case("m"): {
                    return self.toPersianDigit(info.minute);
                }
                // Two Digit Minutes
                case("mm"): {
                    return self.toPersianDigit(self.leftZeroFill(info.minute, 2));
                }
                // Second
                case("s"): {
                    return self.toPersianDigit(info.second);
                }
                case("ss"): {
                    return self.toPersianDigit(self.leftZeroFill(info.second, 2))
                }
                // Day (Int)
                case("D"): {
                    return self.toPersianDigit(self.leftZeroFill(info.date));
                }
                // Two Digit (Str)
                case("DD"): {
                    return self.toPersianDigit(self.leftZeroFill(info.date, 2));
                }
                // Two Digit (Str)
                case("DDD"): {
                    return self.weekRange[self.pDate.weekDayNumber].abbr.fa;
                }
                // Two Digit (Str)
                case("DDDD"): {
                    return self.weekRange[self.pDate.weekDayNumber].name.fa;
                }
                // Two Digit (Str)
                case("dddd"): {
                    //return self.pDate.dayName;
                    return self.persianDaysName[self.pDate.monthDayNumber]
                }
                // Month  (Int)
                case("M"): {
                    return self.toPersianDigit(info.month);
                }
                // Two Digit Month (Str)
                case("MM"): {
                    return self.toPersianDigit(self.leftZeroFill(info.month, 2));
                }
                // Abbr String of Month (Str)
                case("MMM"): {
                    return self.monthRange[info.month].abbr.fa;
                }
                // Full String name of Month (Str)
                case("MMMM"): {
                    return self.monthRange[info.month].name.fa;
                }
                // Year
                // Two Digit Year (Str)
                case("YY"): {
                    var yearDigitArray = info.year.toString().split("");
                    return self.toPersianDigit(yearDigitArray[2] + yearDigitArray[3]);
                }
                // Full Year (Int)
                case("YYYY"): {
                    return self.toPersianDigit(info.year);
                }
                case("Z"): {
                    return self.toPersianDigit(info.timezone);
                }
                case("ZZ"): {
                    return self.toPersianDigit(info.timezone);
                }
                case("L"): {
                    return self.format("YYYY/MM/DD");
                }
                case("LL"): {
                    return self.format(" MMM DD YYYY");
                }
                case("LLL"): {
                    return self.format(" MMM DD YYYY -- HH:m:ss - a");
                }
                case("LLLL"): {
                    return self.format(" MMM DDDD YYYY -- HH:m:ss - a");
                }
                default:
                    return info._d;
            }
        }

        if(inputString) {
            return inputString.replace(formattingTokens, replaceFunction);
        } else {
            var inputString = "YYYY-MM-DD HH:mm:ss a"
            return inputString.replace(formattingTokens, replaceFunction);
        }
    },
    // Humanize
    from : function() {
        return "Must Implement";
    },
    fromNow : function() {
        return "Must Implement";
    },
    humanizeDuration : function() {
        return "Must Implement";
    },
    _d : function() {
        return this.gDate._d;
    },
    diff : function(input, val, asFloat) {
        var self = new persianDate(this);
        var inputMoment = input;
        //this._isUTC ? moment(input).utc() : moment(input).local();
        var zoneDiff = 0;
        //(this.zone() - inputMoment.zone()) * 6e4;
        var diff = self.gDate - inputMoment.gDate - zoneDiff;
        var year = self.year() - inputMoment.year();
        var month = self.month() - inputMoment.month();
        var date = (self.date() - inputMoment.date()) * -1;
        var output;
        if(val === 'months') {
            output = year * 12 + month + date / 30;
        } else if(val === 'years') {
            output = year + (month + date / 30) / 12;
        } else {
            output = val === 'seconds' ? diff / 1e3 : // 1000
            val === 'minutes' ? diff / 6e4 : // 1000 * 60
            val === 'hours' ? diff / 36e5 : // 1000 * 60 * 60
            val === 'days' ? diff / 864e5 : // 1000 * 60 * 60 * 24
            val === 'weeks' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
            diff;
        }
        if(output < 0)
            output *= -1;
        return asFloat ? output : Math.round(output);
    },
    startOf : function(key) {
        // Simplify this
        switch(key) {
            case "year":
                return new persianDate([this.year(), 1, 1]);
            case "month":
                return new persianDate([this.year(), this.month(), 1]);
            case "day" :
                return new persianDate([this.year(), this.month(), this.date(), 0, 0, 0]);
            case "hour" :
                return new persianDate([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
            case "minute":
                return new persianDate([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
            case "second":
                return new persianDate([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case "week":
                var weekDayNumber = this.pDate.weekDayNumber;
                if(weekDayNumber == 0) {
                    return new persianDate([this.year(), this.month(), this.date()]);
                } else {
                    return new persianDate([this.year(), this.month(), this.date()]).subtract("days", weekDayNumber);
                }
            default:
                return this;
        }
    },
    endOf : function(key) {
        // Simplify this
        switch(key) {
            case "year":
                var days = this.isLeapYear() ? 30 : 29;
                return new persianDate([this.year(), 12, days, 23, 59, 59]);
            case "month":
                var monthDays = this.daysInMonth(this.year(), this.month());
                return new persianDate([this.year(), this.month(), monthDays, 23, 59, 59]);
            case "day" :
                return new persianDate([this.year(), this.month(), this.date(), 23, 59, 59]);
            case "hour" :
                return new persianDate([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
            case "minute":
                return new persianDate([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
            case "second":
                return new persianDate([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
            case "week":
                var weekDayNumber = this.pDate.weekDayNumber;
                if(6 - weekDayNumber == 0) {
                    weekDayNumber = 7;
                } else {
                    weekDayNumber = 6 - weekDayNumber;
                }
                return new persianDate([this.year(), this.month(), this.date()]).add("days", weekDayNumber);
            default:
                return this;
        }
    },
    sod : function() {
        return this.startOf("day");
    },
    eod : function() {
        return this.endOf("day");
    },
    // Get the timezone offset in minutes.
    zone : function() {
        return this.pDate.timeZoneOffset;
    },
    _utcMode:false,
    local : function() {
        if(!this._utcMode){
            return this;
        }
        else{
            var offsetMils = this.pDate.timeZoneOffset*60*1000;
            if(this.pDate.timeZoneOffset <  0){
                var utcStamp = this.valueOf() - offsetMils;
            }else{
                var utcStamp = this.valueOf() + offsetMils;
            }
            this.gDate = new Date(utcStamp);
            this._updatePDate();
            this._utcMode = false;
            return this;
        }
    },
    // current date/time in UTC mode
    utc: function(){
        if(this._utcMode){
            return this;
        }
        else{
            var offsetMils = this.pDate.timeZoneOffset*60*1000;
            if(this.pDate.timeZoneOffset <  0){
                var utcStamp = this.valueOf() + offsetMils;
            }else{
                var utcStamp = this.valueOf() - offsetMils;
            }
            this.gDate = new Date(utcStamp);
            this._updatePDate();
            this._utcMode = true;
            return this;
        }
    },
    isUtc: function(){
        return this._utcMode;
    },
    // version 0.0.1
    isDST : function() {
        // Just Iran Day light saving time
        var output = false;
        if (this.month() >= 1 && this.month() <= 6){
            output = true;
            switch(this.month()){
                case(1):
                    if(this.date() < 2){output = false};
                break;
                case(6):
                    if(this.date() > 30){output = false};
                break;
            }
        };
        return output;
    },
    isLeapYear : function() {
        return this.isLeapPersian(this.year());
    },
    daysInMonth : function(year, month) {
        if(month < 1 || month > 12)
            return 0;
        if(month < 7)
            return 31;
        if(month < 12)
            return 30;
        if(this.isLeapPersian(year))
            return 30;
        return 29;
        return "Must Implement";
    },
    // return Native Javascript Date
    toDate : function() {
        return this.gDate;
    },
    // Return Milliseconds since the Unix Epoch (1318874398806)
    _valueOf : function() {
        return this.gDate.valueOf();
    },
    // Return Unix Timestamp (1318874398)
    unix : function() {
        var str = this.gDate.valueOf().toString();
        output = str.substring(0, str.length - 3);
        return parseInt(output);
    },
    isPersianDate : function(obj) {
        return obj instanceof persianDate;
    },
    // -------------------------------------- Getter Setter
    milliseconds : function(input) {
        if(input) {
            this.gDate.setMilliseconds(input);
            this._updatePDate();
            return this;
        } else {
            return this.pDate.milliseconds;
        }
    },
    seconds : function(input) {
        if(input) {
            this.gDate.setSeconds(input);
            this._updatePDate();
        } else {
            return this.pDate.seconds;
        }
    },
    minutes : function(input) {
        if(input) {
            this.gDate.setMinutes(input);
            this._updatePDate();
        } else {
            return this.pDate.minutes;
        }
    },
    hours : function(input) {
        if(input) {
            this.gDate.setHours(input);
            this._updatePDate();
        } else {
            return this.pDate.hours;
        }
    },
    // Day of Months
    date : function(input) {
        if(input) {
            var pDateArray = this.getPersianArrayFromPDate(this.pDate);
            pDateArray[2] = input;
            this.gDate = this.persianArrayToGregorianDate(pDateArray);
            this._updatePDate();
        } else {
            return this.pDate.date;
        }
    },
    // DAy of week
    day : function() {
        return this.pDate.day + 2;
    },
    month : function(input) {
        if(input) {
            var pDateArray = this.getPersianArrayFromPDate(this.pDate);
            pDateArray[1] = input;
            this.gDate = this.persianArrayToGregorianDate(pDateArray);
            this._updatePDate();
        } else {
            return this.pDate.month;
        }
    },
    year : function(input) {
        if(input) {
            var pDateArray = this.getPersianArrayFromPDate(this.pDate);
            pDateArray[0] = input;
            this.gDate = this.persianArrayToGregorianDate(pDateArray);
            this._updatePDate();
        } else {
            return this.pDate.year;
        }
    },
    // Calendar Function's
    getDaysInMonth : function(year, month) {
        if(month < 1 || month > 12)
            return 0;
        if(month < 7)
            return 31;
        if(month < 12)
            return 30;
        if(this.isLeapPersian(year))
            return 30;
        return 29;
    },
    getFirstWeekDayOfMonth : function(year, month) {
        var dateArray = Class_DateConvertor.calcPersian(year, month, 1);
        var pdate = Class_DateConvertor.calcGregorian(dateArray[0], dateArray[1], dateArray[2]);
        if(pdate[3] + 2 == 8) {
            return 1;
        } else if(pdate[3] + 2 == 7) {
            return 7;
        } else {
            return pdate[3] + 2;
        }
    },
    clone : function() {
        var self = this;
        return new persianDate(self.gDate);
    },
    version : 0.1,
    _updatePDate : function() {
        this.pDate = this.toPersianDate(this.gDate);
    }
};

//##########################################
// ***************************** Constructor
//##########################################
persianDate = function(input) {
    this.inherit = function(obj1) {
        var self = this;
        for(var attrname in obj1) {
            self[attrname] = obj1[attrname];
        };
        return self;
    };
    this.inherit(Class_PersianDate)
    .inherit(Class_DateConvertor)
    .inherit(Class_DateRange)
    .inherit(Class_PersianDateUtility)
    .inherit(Class_Duration);
    // Convert Any thing to Gregorian Date
    if(this.isUndefined(input)) {
        this.gDate = new Date();
    } else if(this.isDate(input)) {
        this.gDate = input;
    } else if(this.isArray(input)) {
        //  Encapsulate Input Array
        var arrayInput = input.slice();
        this.gDate = this.persianArrayToGregorianDate(arrayInput);
    } else if(this.isNumber(input)) {
        this.gDate = new Date(input);
    } else if( input instanceof persianDate) {
        this.gDate = input.gDate;
    }
    this.pDate = this.toPersianDate(this.gDate);
    // Fix IE 8
    // Some issue appear when valuOf is extended function
    this.valueOf = function() {
        return this._valueOf();
    };
    return this;
};

