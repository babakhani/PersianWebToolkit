var Class_HoursGrid = {
	hoursList : [],
	storyList:[],
	container:{},
	overlapGroups : {},
	state:{
		year: null,
		month:null,
		date: null	
	},
	events : {
		init : function() {
		},
		render : null
	},
	scroll : function() {
		var paneElement = $('.day-grid-hour-box').jScrollPane();
		panelScroll = paneElement.data("jsp");
	},
	events : {
		click : null, //e
		mouseOver : null, // e
		mouseOut : null,//e
		init: null,
		render: null
	},
	applyStory:function(){
	    this.view.applyStory(this);
	}
};

var HoursGrid = function(options) {
	inherit(this, [Class_Sprite, Class_DateRange, Class_HoursGrid, View_HoursGrid, {
		page : options.parent,
		container : options.container
	}]);
	return this;
};
