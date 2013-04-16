var Class_MonthPage = {
    daysList : [],
    state : {
        unixDate : null,
        year : null,
        month : null
    },
    events : {
        init : function() {
            this.updateInfo();
        },
        render : null,
        changePage : function() {
            var sDate = new persianDate(this.stage.state.selectedDate)
            if(sDate.year() == this.currentYear && sDate.month() == this.month) {
            }
            else{
                this.goToDate(this.stage.state.selectedDate);
            }
        },
        updateView : function() {
            this.selectDate(this.stage.state.selectedDate);
        }
    },
    goToDate : function(input) {
        switch(input) {
            case "today":
                this.view.goToday(this);
                break;
            case "next":
                this.view.goNextMonth(this);
                break;
            case "prev":
                this.view.goPrevMonth(this);
                break;
            default:
                this.month = new persianDate(input).month();
                this.currentYear = new persianDate(input).year();
                this.view.goToMonth(this);
        }
        this.raiseEvent("updateView");
    },
    updateInfo : function() {
        
        $(this.titleBox).text(this.toPersianDigit(this.currentYear) + "  " + this.monthRange[this.month].name.fa);
        this.view.markToday(this);
        
    },
    selectDate : function(unixDate) {
        var sDate = new persianDate(unixDate);
        if(sDate.year() == this.currentYear && sDate.month() == this.month) {
            $(this.daysBox).find(".day-box").each(function() {
                var dataData = new persianDate($(this).data().unixDate)
                $(this).removeClass("selected")
                if(dataData.date() == sDate.date()) {
                    $(this).addClass("selected");
                }
            });
        }
        return this;
    },
    applyStory : function() {
        this.view.applyStory(this)
    }
};

var MonthPage = function(stage) {
    this.stage = stage;
    this.state = {};
    this.state.today = new persianDate();
    this.currentYear = this.state.today.year();
    this.month = this.state.today.month();
    inherit(this, [Class_Base, Class_Sprite, Class_DateRange, View_MonthPage, Class_MonthPage]);
    return this;
};
