Class_Toolbox = {
    events : {
        init : function() {
        },
        render : function() {
        }
    },
    syncUi:function(calendarView){
       this.view.syncUi(this,calendarView);
    }
};
Toolbox = function(pcal) {
    var self;
    this.pcal = pcal;
    inherit(this, [Class_Sprite, Class_Toolbox, Views_Toolbox]);
    self = this;
    return this;
};
