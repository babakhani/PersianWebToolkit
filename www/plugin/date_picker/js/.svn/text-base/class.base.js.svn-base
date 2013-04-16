var Class_Base = {
	init : function() {
		this.isInstance = true;
		this.raiseEvent('init');
	},
	visible : function() {
		this.jq().css({
			visibility : 'visible'
		});
		return this;
	},
	invisible : function() {
		this.jq().css({
			visibility : 'hidden'
		});
		return this;
	},
	isVisible : function() {
		return this.jq().css('visibility') == 'visible';
	},
	isHidden : function() {
		return this.jq().css('display') == 'hidden';
	},
	show : function() {
		this.jq().show();
		return this;
	},
	hide : function() {
		this.jq().hide();
		return this;
	},
	fadeIn : function(s) {
		this.jq().fadeIn(s);
	},
	fadeOut : function(s) {
		this.jq().fadeOut(s);
	},
	toggle : function() {
		this.jq().toggle();
		return this;
	},
	width : function(value) {
		if (value) {
			this.jq().width(value);
		}
		return this.jq().width();
	},
	height : function(value) {
		if (value) {
			this.jq().height(value);
		}
		return this.jq().height();
	},
	left : function(value) {
		if (value) {
			this.jq().css('left', value);
		}
		return this.jq().position().left;
	},
	top : function(value) {
		if (value) {
			this.jq().css('top', value);
		}
		return this.jq().position().top;
	},
	bottom : function(value) {
		if (value) {
			return this.jq().css('bottom', value);
		}
		return this.top() + this.height();
	},
	right : function() {
		return this.left() + this.width();
	},
	onInit : function() {
		this.raiseEvent('init');
	},
	// Date Function
	getUnixTime : function(date) {
		return moment(date).valueOf();
	},
	validateUnixTime : function(dateTime) {
		if ( typeof dateTime == 'string') {
			var unixTimeStamp = this.getUnixTime(dateTime);
		} else {
			var unixTimeStamp = dateTime;
		}
		return unixTimeStamp;
	},
	getDateFromUnixTime : function(unixTimeStamp, dateFormatString) {
		if ( typeof dateFormatString == 'undefined') {
			$.error('Base_Class.getDateFromUnixTime say: you must define date format string as second arguments');
			var dateFormatString = 'YYYY/MM/DD'
		}
		return moment(unixTimeStamp).format(dateFormatString);
	},
	getDeltaDate : function(start, end, mode) {
		var a = moment(start);
		var b = moment(end);
		return b.diff(a, mode);
	},
	// Deprecated use 'getAddDate'
	getAdd : function(d, amount, mode) {
		var d = moment(d);
		return d.add(mode, amount);
	},
	getAddDate : function(d, amount, mode) {
		var d = moment(d);
		return d.add(mode, amount);
	},
	jq : function() {
		if (!this._jq) {
			this._jq = $(this.element);
		}
		return this._jq;
	},
	isInt : function(value) {
		if ( typeof (value) == 'number') {
			return true;
		} else {
			return false;
		}
	},
	// Event Management
	attachEvent : function(eventName, func) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		for (f in this.events[eventName]) {
			if (this.events[eventName][f].toString() == func.toString()) {
				$.error("The function {0} was already added to event's chain.".format(func.toString));
			}
		}
		this.events[eventName].push(func)
		
		return this;
	},
	dettachEvent : function(eventName, func) {
		if (!this.events[eventName]) {
			$.error("The event's chain is empty.");
		}
		for (f in this.events[eventName]) {
			if (this.events[eventName][f].toString() == func.toString()) {
				delete this.events[eventName][f];
			}
		}
		return this;
	},
	clearEvent : function(eventName) {
		this.events[eventName] = null;
		return this;
	},
	raiseEvent : function(eventName, args) {
		if (!eventName || !this.events) {
			return;
		}
		var currentObject = this.events[eventName];
		if (!currentObject) {
			return;
		} else if ( typeof currentObject == 'function') {
			currentObject.apply(this, args);
		} else {
			for (e in currentObject) {
				currentObject[e].apply(this, args);
			}
		}
		return this;
	},
	events : {
		init : null // e
	},
	getPercent : function(all, part) {
		return (part * 100) / all;
	},
	toPersianDigit : function(input) {
		return input.toString().toPersianDigit();
	},
	anyoneDo : function(array, func, param) {
		for (i in array) {
			array[i][func](param);
		}
	},isUndefined : function(input) {
        if( typeof input == "undefined") {
            return true;
        } else {
            return false;
        }
    }
};

var inherit = function(self, baseClasses) {
	var args = [true, self, copyObject(Class_Base)];
	var events = [];
	for (index in baseClasses) {
		var cls = copyObject(baseClasses[index]);
		if (!cls) {
			continue;
		}
		if (cls['events'] && Object.keys(cls['events']).length > 0) {
			events.push(cls['events']);
		}
		cls.events = {};
		args.push(cls);
	}
	$.extend.apply(self, args);
	for (index in events) {
		var eventsObject = events[index];
		var eventKeys = Object.keys(eventsObject)
		for (keyIndex in eventKeys) {
			var key = eventKeys[keyIndex]
			var val = eventsObject[key];
			if (key && val) {
				self.attachEvent(key, val);
			}
		}
	}
	self.init();
	return self;
};


var liquideFlot = function(listOfElement,options){
	
	
		
};


