var Class_Base = {
	init : function() {
		this.isInstance = true;
		this.raiseEvent('init');
	},
	onInit : function() {
		this.raiseEvent('init');
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

var Class_Sprite = {
	defaultView:"default",
	// Views Interfcae
	events:{
		init:function(){
			this.render();
		},
		render:null
	},
	views : {
		'default' : {
			render : function() {
			}
		}
	},
	element : {
		main: null// Root Element Of Sprite
	},
	createElementByClass:function(className){
		return this.element.find('.'+className);
	},
	createStaffElement:function(){
		var mainElement = this.element.main
		for(c in this.cssClass){
			if(c != 'main'){
				var staffElement = mainElement.find('.'+this.cssClass[c]);
				this.element[c] = staffElement;
			}
		};	
		return this;
	},
	render : function(viewName) {
		if (!viewName) {
			viewName = 'default';
		}
		this.raiseEvent('render');	
		this.view = this.views[viewName];
		return this.view.render(this);
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

