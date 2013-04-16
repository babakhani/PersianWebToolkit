var Class_DayPage = {
    events : {
        init : function() {
            var self = this;
            this.monthGrid.attachEvent("selectDay", function(x) {
                self.goToDate(x);
                self.raiseEvent("changeState");
            });
        },
        render : function() {
            this.syncState();
        },
        stateChanged : function() {
            this.parent.syncState(this.state);
            this.view.updateUiInfo(this);
            this.monthGrid.selectDate(this.state.unixDate);
            var storyList = this.stage.pcal.dataService.getDayStory(this.state.unixDate);
            this.view.updateStoryListBox.apply(this, [storyList]);
            
            this.hoursGrid.applyStory();
        },
        // Called From View
        changeState :function(X){
            this.stage.raiseEvent("selectDate",[this.state.unixDate])
        }
    },
    hide : function() {
        this.element.main.hide();
    },
    show : function() {
        this.element.main.show();
    },
    state : {
        unixDate : 000
    },
    syncState : function(state) {
        // Custome State apply
        if(state) {
        }
        // Give From Parent
        else {
            this.state.unixDate = this.parent.state.unixDate;
        }
    },
    applyStory : function() {
        this.view.updateUiInfo(this);
        this.hoursGrid.applyStory();
        
        var storyList = this.stage.pcal.dataService.getDayStory(this.state.unixDate);
            this.view.updateStoryListBox.apply(this, [storyList]);
    },
    // Dictionary of element who can contain other object's
    container : {},
    goToDate : function(x) {
        this.view.goToDay.apply(this, [x]);
        return this;
    }
};
var DayPage = function(stage) {
    inherit(this, [Class_Sprite, Class_DayPage, Views_PageDay, {
        // TODO: Remove this
        stage : stage,
        pcal : stage.pcal,
        parent : stage
    }]);
    return this;
};
