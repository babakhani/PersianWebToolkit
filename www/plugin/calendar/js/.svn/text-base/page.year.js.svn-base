var Class_YearPage = {
    // Html Element List of container's staff
    container : {},
    monthGrid : [],
    animateSpeed : 800,
    state : {
        year : null,
        unixDate : null,
        today : new persianDate()
    },
    events : {
        init : null,
        render : null,
        changePage : function() {
            this.goToDate(this.stage.state.selectedDate);
        },
        updateView : function() {
            this.view.update(this);
            var selectedDate = this.stage.state.selectedDate;
            this.anyoneDo(this.monthGrid, 'goToYear', this.state.year);
            if(new persianDate(selectedDate).year() == this.state.year) {
                this.monthGrid[new persianDate(selectedDate).month() - 1].selectDate(selectedDate);
            }
            return this;
        }
    },
    goToDate : function(input, animate) {
        switch(input) {
            case "today":
                if(this.state.year == this.state.today.year())
                    return false;
                this.state.year = this.state.today.year();
                break;
            case "next":
                this.state.year += 1;
                break;
            case "prev":
                this.state.year -= 1;
                break;
            default:
                this.state.year = new persianDate(input).year();
                this.monthGrid[new persianDate(input).month() - 1].selectDate(input);
        }
        if(!(this.isUndefined(animate)) && animate == true)this.view.changeYear(this);
        this.raiseEvent("updateView");
        return this;
    },
    applyStory : function() {
        for(i in this.monthGrid) {
            this.monthGrid[i].applyStory();
        }
        return this;
    }
};
var YearPage = function(stage) {
    inherit(this, [Class_Sprite, Class_YearPage, Views_PageYear, {
        stage : stage,
        pcal : stage.pcal
    }]);
    return this;
};
