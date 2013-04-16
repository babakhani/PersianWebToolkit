var Class_Stage = {
    defaultView : "year",
    state : {
        unixDate : null,
        selectedDate : null,
    },
    syncState : function(state) {
        this.state.unixDate = state.unixDate;
    },
    events : {
        init : function() {
            this.defaultView = this.pcal.defaultView;
            this.state.unixDate = new persianDate().valueOf();
            this.state.selectedDate = this.state.unixDate;
            this.element = $('<div/>').addClass('stage-main-box').appendTo(this.pcal.element)[0];
            this.yearPage = new YearPage(this);
            this.monthPage = new MonthPage(this);
            this.dayPage = new DayPage(this);
            this.weekPage = new WeekPage(this);
            this.changePage(this.defaultView);
            // Calendar Selected date
            this.selectedDate = this.state.unixDate;
            this.raiseEvent("selectDate", [this.selectedDate])
        },
        // Use By Pages Object
        // After Select ,Every things Sync From here
        selectDate : function(unixDate, pageView) {
            this.state.selectedDate = unixDate;
            if(pageView)this.changePage(pageView);
            if(this.dayPage)this.dayPage.goToDate(unixDate);
            if(this.monthPage)this.monthPage.goToDate(unixDate);
            if(this.yearPage)this.yearPage.goToDate(unixDate);
            return this;
        },
        changePage : function() {
            if(this.yearPage)this.yearPage.raiseEvent("changePage")
            if(this.monthPage)this.monthPage.raiseEvent("changePage")
            if(this.dayPage)this.dayPage.raiseEvent("changePage")
            return this;
        }
    },

    changePage : function(page) {
        var self = this;
        if(self.yearPage)self.yearPage.hide();
        if(self.dayPage)self.dayPage.hide();
        if(self.weekPage)self.weekPage.hide();
        if(self.monthPage)self.monthPage.hide();
        
        this.defaultView = page;
        self.pcal.toolbox.syncUi(this.defaultView);
        switch(page) {
            case("year"):
                {
                    self.yearPage.show();
                }
                break;
            case("day"):
                {
                    self.dayPage.show();
                }
                break;
            case("month"):
                {
                    self.monthPage.show();
                }
                break;
            case("week"):
                {
                    self.weekPage.show();
                }
                break;
        }
        self.raiseEvent("changePage");
        return this;
    },
    applyStory:function(){
        if(this.yearPage)this.yearPage.applyStory();
        if(this.monthPage)this.monthPage.applyStory();
        if(this.dayPage)this.dayPage.applyStory();
        return this;
    }
};

var Stage = function(pcal) {
    this.pcal = pcal;
    inherit(this, [Class_Sprite, Class_Stage]);
    return this;
};
