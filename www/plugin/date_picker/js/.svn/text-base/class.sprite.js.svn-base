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
		main: null,// Root Element Of Sprite
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
