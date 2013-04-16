var Views_pDatePicker = {
   cssClass : {
      datePickerPlotArea : "datepicker-plot-area",
      dayView : "datepicker-day-view",
      monthView : "datepicker-month-view",
      yearView : "datepicker-year-view",
      datpickerHeader : "datepicker-header",
      btnNext:"btn-next",
      btnSwitch:"btn-switch",
      btnPrev:"btn-prev",
      monthItem :"month-item",
      selectedMonth : "selected", 
      yearItem : "year-item",
      selectedYear :  "selected"
   },
   container:{},
   views : {
      "default" : {
         render : function(self) {
            self.element = {};
            self.view_data = {
               css : self.cssClass
            };
            $.template("p_datePicker_tmpl", "<div class='${css.datePickerPlotArea}' >\
                           <div class='${css.dayView}' ></div>\
                           <div class='${css.monthView}' ></div>\
                           <div class='${css.yearView}' ></div>\
                        </div>");
            $.template("p_datePicker_header", "<div class='${css.datpickerHeader}' >\
                           <div class='${css.btnNext}' >${btnNextText}</div>\
                           <div class='${css.btnSwitch}' >${btnSwitchText}</div>\
                           <div class='${css.btnPrev}' >${btnPrevText}</div>\
                        </div>");            
                        
            self.element.main = $.tmpl("p_datePicker_tmpl", self.view_data).hide().appendTo($("body"));
            self.container.dayView = $(self.element.main).children('.'+self.cssClass.dayView);
            self.container.monthView = $(self.element.main).children('.'+self.cssClass.monthView).hide();
            self.container.yearView = $(self.element.main).children('.'+self.cssClass.yearView).hide();
            self.view.fixPosition(self);
            
            self.dayPickerView = new self.view.DayPicker(self);
            self.monthPickerView =  new self.view.MonthPicker(self);
            self.yearPickerView  =  new self.view.YearPicker(self);
         	         	
         	         	
		// SHow Hide Picker         
		self.inputElem.focus(function() {self.element.main.show();});
		self.inputElem.click(function(e) {e.stopPropagation();return false;});
		
		self.inputElem.blur(function() {self.element.main.hide();});
		
		$(document).click(function() {self.element.main.hide();});
		self.element.main.mousedown(function(e) {e.stopPropagation();return false;}); 

            return this;
         },
         
            fixPosition : function(self) {	           
			var inputX = self.inputElem.position().top;
			var inputY = self.inputElem.position().left;
			if (self.position == "auto") {
				var inputHeight = self.inputElem.height() + parseInt(self.inputElem.css("padding-top")) + parseInt(self.inputElem.css("padding-bottom")) + parseInt(self.inputElem.css("border-top")) + parseInt(self.inputElem.css("border-bottom")) + 5;
				self.element.main.css({
					top : (inputX + inputHeight) + 'px',
					left : inputY + 'px'
				});
			}else{
				self.element.main.css({
					top : (inputX + self.position[0]) + 'px',
					left : (inputY + self.position[1] ) + 'px'
				});
			}

                  return this;
            },
            // --------------------------------------------------------------------------- Day View
            DayPicker:function(self) {
                  var pd = new persianDate(self.state.unixDate);
                  this.container = self.container.dayView;
                  self.view_data = {
                        css : self.cssClass,
                        btnNextText : "<",
                        btnSwitchText : pd.format(self.daysTitleFormat),
                        btnPrevText : ">"
                  };
                  self.element.dayBox = $.tmpl("p_datePicker_header", self.view_data).appendTo(this.container);
                  self.element.dayBox.children("." + self.cssClass.btnSwitch).click(function() {
                        self.view.changeView(self, "month");
                        
                        return false;
                  });
                  self.element.dayBox.children("." + self.cssClass.btnNext).click(function() {
                        if(self.state.viewMonth == 12) {
                              self.state.viewMonth = 1;
                              self.state.viewYear++;
                        } else {
                              self.state.viewMonth++;
                        }
                        self.dayPickerView.updateView();
                        
                        return false;
                  });
                  self.element.dayBox.children("." + self.cssClass.btnPrev).click(function() {
                        if(self.state.viewMonth == 1) {
                              self.state.viewMonth = 12;
                              self.state.viewYear--;
                        } else {
                              self.state.viewMonth--;
                        }
                        self.dayPickerView.updateView();
                        
                        return false;
                  });
                  this.mGrid = new MonthGrid({
                        container : self.container.dayView,
                        month : 1,
                        year : 1390
                  }).selectDate(self.state.unixDate).attachEvent("selectDay", function(x) {
                        self._updateState("unix", x);
                        self.dayPickerView.updateView();
                        if(self.hideOnSelect){
                        		self.element.main.hide();
                        }
                  });
                  this.updateView = function() {
                        self.dayPickerView.mGrid.updateAs(self.state.viewYear, self.state.viewMonth)
                        if(self.state.viewYear == self.state.selectedYear && self.state.viewMonth == self.state.selectedMonth) {
                              self.dayPickerView.mGrid.selectDate(self.state.unixDate);
                        }
                        var pdate = new persianDate([self.state.viewYear, self.state.viewMonth]);
                        self.element.dayBox.children("." + self.cssClass.btnSwitch).text(pdate.format("YYYY MMMM"))
                  };
                  return this;
            },
            // ---------------------------------------------------------------------------  Month View
            MonthPicker:function(self) {
                  var pd = new persianDate(self.state.unixDate);
                  self.view_data = {
                        css : self.cssClass,
                        btnNextText : "<",
                        btnSwitchText : pd.format("YYYY"),
                        btnPrevText : ">"
                  };
                  self.element.monthBox = $.tmpl("p_datePicker_header", self.view_data).appendTo(self.container.monthView);
                  
                  self.element.monthBox.children("." + self.cssClass.btnSwitch).click(function() {
                        self.view.changeView(self, "year")
                        return false;
                  });
                  var monthRaneg = Class_DateRange.monthRange;
                 
                  for(m in monthRaneg) {
                        $("<div/>").data({ monthIndex : m})
                        .addClass("month" + m)
                        .addClass(self.cssClass.monthItem)
                        .text(monthRaneg[m].name.fa)
                        .appendTo(self.container.monthView)
                        .click(function() {
                              self.state.viewMonth = $(this).data().monthIndex;
                              self._updateState("month", $(this).data().monthIndex);
                              self.view.changeView(self, "day");
                              return false;
                        });
                  };
                  self.element.monthBox.children("." + self.cssClass.btnNext).click(function() {
                        self.state.viewYear++;
                        self.monthPickerView.updateView();
                        return false;
                  });
                  self.element.monthBox.children("." + self.cssClass.btnPrev).click(function() {
                        self.state.viewYear--;
                        self.monthPickerView.updateView();
                        return false;
                  });
                  this.defineSelectedMonth = function() {
                        self.container.monthView.children('.' + self.cssClass.monthItem).removeClass(self.cssClass.selectedMonth);
                        if(self.state.viewYear == self.state.selectedYear) {
                              self.container.monthView.children(".month" + self.state.selectedMonth).addClass(self.cssClass.selectedMonth)
                        }
                        return this;
                  };
                  this.defineSelectedMonth();
                  this.updateView = function() {
                        this.defineSelectedMonth();

                        self.element.monthBox.children("." + self.cssClass.btnSwitch).text( self.state.viewYear.toString().toPersianDigit() )
                  }
                  return this;
            },
            // ---------------------------------------------------------------------------  Year View
            YearPicker:function(self) {
                  var pd = new persianDate(self.state.unixDate);
                  var year = pd.year();
                  var remaining = parseInt(year / 12) * 12;
                  self.view_data = {
                        css : self.cssClass,
                        btnNextText : "<",
                        btnSwitchText : remaining.toString().toPersianDigit() + "-" + (remaining + 11).toString().toPersianDigit(),
                        btnPrevText : ">"
                  };
                  self.element.yearHeaderBox = $.tmpl("p_datePicker_header", self.view_data).appendTo(self.container.yearView);

                  this.applyYearList = function() {
                        var pd = new persianDate(self.state.unixDate);
                        var year = self.state.viewYear;
                        var remaining = parseInt(year / 12) * 12;
                        self.container.yearView.children("." + self.cssClass.yearItem).remove();
                        // Apply Year
                        for(i in range(12)) {
                              var yearItem = $("<div/>").addClass(self.cssClass.yearItem).data({
                                    year : (remaining + parseInt(i))
                              }).text((remaining + parseInt(i)).toString().toPersianDigit()).appendTo(self.container.yearView)
                              if(year == remaining + parseInt(i)) {
                                    yearItem.addClass(self.cssClass.selectedYear)
                              }
                        }
                        self.container.yearView.children("." + self.cssClass.yearItem).click(function() {
                              var y = $(this).data().year;
                              self.state.viewYear = y;
                              self._updateState("year", y);
                              self.view.changeView(self, "month");
                                return false;
                        });
                  };
                  this.applyYearList();
                  self.element.yearHeaderBox.children("." + self.cssClass.btnNext).click(function() {
                        self.state.viewYear = self.state.viewYear+12;
                        self.yearPickerView.applyYearList();
                        self.yearPickerView.updateView();
                          return false;
                        
                  });
                  self.element.yearHeaderBox.children("." + self.cssClass.btnPrev).click(function() {
                        self.state.viewYear = self.state.viewYear-12;
                        self.yearPickerView.applyYearList();
                        self.yearPickerView.updateView();
                          return false;
                  });
                  this.updateView = function() {
                        self.container.yearView.children("." + self.cssClass.yearItem).each(function() {
                              $(this).removeClass(self.cssClass.selectedYear)
                              if($(this).data().year == self.state.selectedYear) {
                                    $(this).addClass(self.cssClass.selectedYear)
                              }
                        });
                        var pd = new persianDate([self.state.viewYear,self.state.viewMonth]);
                        var year = pd.year();
                        var remaining = parseInt(year / 12) * 12;
                        self.element.yearHeaderBox.children("." + self.cssClass.btnSwitch)
                        .text(  remaining.toString().toPersianDigit() + "-" + (remaining + 11).toString().toPersianDigit() );
                  }
                  return this;
                  
            }, changeView: function(self,viewName) {
                  switch(viewName) {
                        case('month'):
                              self.container.yearView.hide();
                              self.container.dayView.hide();

                              self.monthPickerView.updateView();
                              self.container.monthView.show();
                              break;
                        case('year'):
                              self.container.monthView.hide();

                              self.yearPickerView.updateView()
                              self.container.yearView.show();
                              break;
                        case('day'):
                              self.container.yearView.hide();
                              self.container.monthView.hide();

                              self.dayPickerView.updateView();
                              self.container.dayView.show();
                              break;
                  }
                  return this;
            }

      }
   }
};