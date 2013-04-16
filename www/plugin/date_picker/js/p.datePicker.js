/*
 (c) Copyright 2013 babakhani reza. All Rights Reserved.
 */

(function($) {
	$.fn.pDatepicker = function(options) {
		if (!this) {
			$.error("Invalid selector");
		}
		rootElement = this[0];
		$(this).each(function(){
			this.pDatePicker = new pDatepicker(options, this);
		});
		return this.pDatePicker;
	};
})(jQuery);

var Class_pDatepicker = {
	cssClass : 'datepicker-container',
	// Default Configuration
	viewFormat : "YYYY-MM-DD",
	sendOption : "g", //"p  as Persian Date" "g  as Garagurian Date" " u as Unix Date"
	position: "auto" ,// [x,y]
	daysTitleFormat: "YYYY MMMM",
	autoclose : false,
	
	state : {
		unixDate : new persianDate().valueOf(),
		selectedYear : 0,
		selectedMonth : 0,
		selectedDay : 0,
		viewYear : 0,
		viewMonth : 0,
		viewDay : 0
	},
	// Public Methud
	show:function(){
		this.element.main.show();
		return this;
	},
	hide:function(){
		this.element.main.hide();
		return this;
	},
	init : function() {
		var self = this;
		this.inputElem.addClass(self.cssClass);
		// Add Visual Input
		var inputName = this.inputElem.attr("name");
		self.visualInput = this.inputElem.clone().attr({
			"type" : "hidden",
			"name" : inputName
		}).removeAttr("class");
		this.inputElem.after(self.visualInput);
		return this
	},
	_updateState : function(key, val) {
		var self = this;
		if (key == "year") {
			this.state.selectedYear = val;
			this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
		} else if (key == "unix") {
			this.state.unixDate = val;
			var pd = new persianDate(this.state.unixDate);
			this.state.selectedYear = pd.year();
			this.state.selectedMonth = pd.month();
			this.state.selectedDay = pd.date();

		} else if ( key = "month") {
			this.state.selectedMonth = val;
			this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
		}
		self._updateInputElement();
		return this;
	},
	_updateInputElement : function() {
		var self = this;
		switch(self.sendOption) {
			case("g"):
				self.visualInput.val(new Date(self.state.unixDate));
				break;
			case("u"):
				self.visualInput.val(self.state.unixDate);
				break;
			default:
				self.visualInput.val(self.state.unixDate);
		}
		// Update Visual Input
		var pdate = new persianDate(self.state.unixDate);
		this.inputElem.val(pdate.format(self.viewFormat));
		return this;
	},
	// one time run
	defineCurrentState : function() {
		if (this.inputElem.val() && new Date(this.inputElem.val()) != "Invalid Date" && new Date(this.inputElem.val()) != "undefined" ) {
				this.state.unixDate = new Date(this.inputElem.val()).valueOf();
		}	
		else{
			this.state.unixDate = new Date().valueOf();
		}
		var pd = new persianDate(this.state.unixDate);
		this.state.selectedYear = this.state.viewYear = pd.year();
		this.state.selectedMonth = this.state.viewMonth = pd.month();
		this.state.selectedDay = this.state.viewDay = pd.date();
		this._updateInputElement();
		return this;
	}
};

var pDatepicker = function(options, mainElem) {
	inherit(this, [Class_Sprite, Class_pDatepicker, Views_pDatePicker, options, {
		inputElem : $(mainElem)
	}]);
	this.defineCurrentState();
	var viewName = 'default';
	this.raiseEvent('render');
	this.view = this.views[viewName];
	return this.view.render(this);
	return this;
};
