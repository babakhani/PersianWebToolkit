(function($) {
      $.fn.pDatePicker = function(options) {
            if(!this) {
                  $.error("Invalid selector");
            }
            rootElement = this[0];
            if(!options && rootElement.pDatePicker) {
                  return rootElement.pDatePicker;
            } else if(!rootElement.pDatePicker) {
                  rootElement.pDatePicker = new pDatePicker(options, this[0]);
            } else if( typeof options == "object") {
                  if(!rootElement['timeline']) {
                        rootElement.pDatePicker = new pDatePicker(options, this[0]);
                  } else {
                        rootElement.pDatePicker.reconfigure(options);
                  }
                  return rootElement.pDatePicker;
            } else if( typeof options == "string") {
                  return rootElement.pDatePicker[options](arguments);
            }
            return rootElement.pDatePicker;
      };
})(jQuery);

var Class_pDatePicker = {
      cssClass : 'datepicker-container',
      format : "YYYY-MM-DD",
      state : {
            unixDate : new persianDate().valueOf(),
            selectedYear : 0,
            selectedMonth : 0,
            selectedDay : 0,
            
            viewYear : 0,
            viewMonth : 0,
            viewDay : 0
      },
      init : function() {
            var self = this;
            this.inputElem.addClass(self.cssClass);
      },
      events : {
            render : function() {
                  var self = this;
                  this.inputElem.focus(function() {
                        self.element.main.show();
                  });
            }
      },
      _updateViewState :  function(){
            
            
            
      },
      _updateState : function(key, val) {
            var self = this;
            if(key == "year") {
                  this.state.selectedYear = val;
                  this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
            } else if(key == "unix") {
                  this.state.unixDate = val;
                  var pd = new persianDate(this.state.unixDate);
                  this.state.selectedYear = pd.year();
                  this.state.selectedMonth = pd.month();
                  this.state.selectedDay = pd.date();

            } else if( key = "month") {
                  this.state.selectedMonth = val;
                  this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
            }
            /*
             print("------------------------------");
             print(this.state.selectedYear)
             print(this.state.selectedMonth)
             print(this.state.selectedDay)
             print("------------------------------");
             */

            self._updateInputElement();
            return this;
      },
      _updateInputElement : function() {
            var self = this;
            var pdate = new persianDate(self.state.unixDate);
            this.inputElem.val(pdate.format(self.format));
            return this;
      },
      // one time run
      defineCurrentState : function() {
            if(this.inputElem.val()) {
                  var inputDefaultDate = new Date(this.inputElem.val())
            }
            
            if(inputDefaultDate) {
                  this.state.unixDate = inputDefaultDate.valueOf();
                  var pd = new persianDate(inputDefaultDate);
                  this.inputElem.val(pd.format("YYYY-MM-DD"));
            }
            else {
                  this.state.unixDate = new Date().valueOf();
            }
            var self = this;
            var pd = new persianDate(self.state.unixDate);
            this.state.selectedYear = pd.year();
            this.state.selectedMonth = pd.month();
            this.state.selectedDay = pd.date();
            
            this.state.viewYear = pd.year();
            this.state.viewMonth = pd.month();
            this.state.viewDay = pd.date();

            return this;
      }
};

var pDatePicker = function(options, mainElem) {
      inherit(this, [Class_Sprite, Class_pDatePicker, Views_pDatePicker, options, {
            inputElem : $(mainElem)
      }]);
      this.defineCurrentState();
      var viewName = 'default';
      this.raiseEvent('render');
      this.view = this.views[viewName];
      return this.view.render(this);
      return this;
};
