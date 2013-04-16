(function($) {
	$.fn.pCal = function(options) {
		if(!this) {
			$.error("Invalid selector");
		}
		rootElement = this[0];
		if(!options && rootElement.pcal) {
			return rootElement.pcal;
		} else if(!rootElement.pcal) {
			rootElement.pcal = new pcal(options, this[0]);
		} else if( typeof options == "object") {
			if(!rootElement['timeline']) {
				rootElement.pcal = new pcal(options, this[0]);
			} else {
				rootElement.pcal.reconfigure(options);
			}
			return rootElement.pcal;
		} else if( typeof options == "string") {
			return rootElement.pcal[options](arguments);
		}
		return rootElement.pcal;
	};
})(jQuery);

var Class_Pcal = {
	cssClass : 'pcal-main-container',
	init : function() {
		this.dataService = new StoryDataService(this);

		this.stage = null;
		this.toolbox = new Toolbox(this);
		this.stage = new Stage(this);
	}
};

var pcal = function(options, mainElem) {
	$.extend(true, this, Class_Base, Class_Pcal, options);
	this.container = mainElem;
	this.element = $('<div/>').addClass(this.cssClass).appendTo('#'+this.container.id)[0];
	this.init();
	return this;
};
