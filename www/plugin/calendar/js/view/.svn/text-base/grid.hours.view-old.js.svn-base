var View_HoursGrid = {
	cssClass : {
		main : " day-hours-grid",
		gridHeader : "day-grid-header",
		gridHourBox : "day-grid-hour-box",
		gridHoursItem : "day-grid-hours-item",
		gridHoursTitle : "day-grid-hours-title",
		gridHoursQuarter : "day-grid-hours-quarter",
		storyBox : "day-grid-story-box"
	},
	views : {
		"default" : {
			render : function(self) {
				self.view_data = {
					css : self.cssClass,
				};
				$.template("hours_grid_tmpl", "<div class='${css.main}' ><div  class='${css.gridHeader}' />\
				<div  class='${css.gridHourBox}' ><div class='${css.storyBox}' ></div></div>");
				$.tmpl("hours_grid_tmpl", self.view_data).appendTo(self.container);
				self.container.hours = $('.' + self.cssClass.gridHourBox)
				var applyHourse = function() {
					for (i in self.hoursRange ) {
						self.hoursList.push($("<div class='{0}'><span class='{1}' >{2}</span><div class='{3}' /><div class='{4}' /><div class='{5}' /><div class='{6}' /></div> "
						.format(self.cssClass.gridHoursItem
						,self.cssClass.gridHoursTitle
						,self.hoursRange[i].faName
						,self.cssClass.gridHoursQuarter
						,self.cssClass.gridHoursQuarter
						,self.cssClass.gridHoursQuarter
						,self.cssClass.gridHoursQuarter
						))
						.appendTo(self.container.hours)[0]);
					}
				};
				applyHourse();
				self.scroll();
				$(self.container.hours).click(function(e) {
					self.raiseEvent("click", [e]);
				});
				self.view.addStory(self);
				/////////// render
			},
			addStory : function(self) {
				/*
				 print( "story box position: " + $(".day-grid-story-box").position().top)
				 print($(".day-grid-story-box").height());
				 print(" Hours List Length : "+self.hoursList.length)
				 print(" Quarter Hours List Length  : "+self.hoursList.length*4)
				 */
				$(".day-grid-story-box").mousedown( function(objEvent) {
					//print("clicked")
					var offestToParent = {
						left : objEvent.pageX - $(".day-grid-story-box").offset().left,
						top : objEvent.pageY - $(".day-grid-story-box").offset().top
					}
					//print(offestToParent.top)
					var story = $("<div class='story' />").appendTo($(".day-grid-story-box"))[0];
					self.storyList.push(story);
					$(story).css({
						top : offestToParent.top
					});
					var  elementTop = offestToParent.top;
					$(".day-grid-story-box").mousemove(function(objEvent) {
						var offestToParent = {
							left : objEvent.pageX - $(".day-grid-story-box").offset().left,
							top : objEvent.pageY - $(".day-grid-story-box").offset().top
						}
						if(offestToParent.top - elementTop <= 0){
							var containerHeight = $(".day-grid-story-box").height()
							$(story).css({
								top: offestToParent.top + "px",
							   	height: elementTop - offestToParent.top,
								bottom: containerHeight - elementTop + "px"
							});
						}else{
							$(story).css({
								top: elementTop,
								height : offestToParent.top - elementTop
							});
						}
					});
					$(this).mouseup(function(){
						$(this).unbind("mousemove");
						$(this).unbind("mouseup");
						self.view.fixStoryOverlap(self);
					});
					
				});
			},
			fixStoryOverlap: function(self){
				var $storyContainer = $(".day-grid-story-box");
				self.storyList = self.storyList.sort(function(a,b){return $(a).position().top - $(b).position().top});
				$.each(self.storyList,function(index){
					var beforeObject = self.storyList[index-1]
					if(beforeObject  && $(this).position().top <= $(beforeObject).position().top + $(beforeObject).height()){
						if( $(beforeObject).data("groupId")  && $(this).data("groupId") !=  $(beforeObject).data("groupId")){
							var objGroupId = $(beforeObject).data("groupId");
							print("before element Group ID :" +objGroupId);
							self.overlapGroups[objGroupId].slice += 1;
							self.overlapGroups[objGroupId].element.push(this);
							$(this).data({"groupId":objGroupId});
							self.overlapGroups[objGroupId].element.sort(function(a,b){return $(a).position().top - $(b).position().top});
							$.each(self.overlapGroups[objGroupId].element ,function(index){
								var w = 100 / self.overlapGroups[objGroupId].slice;
								print("width = " + w)
								$(this).css({
									width: w+"%",
									left: w*index +"%" 
								})
							});
							print(self.overlapGroups)
						}else{
							$(this).css({width:"50%",left:"50%"});
							$(beforeObject).css({width:"50%"});
							$(beforeObject).data({"groupId":groupIndex});
							$(this).data({"groupId":groupIndex});
							self.overlapGroups[groupIndex] = {
								slice: 2,
								element: [this,beforeObject]
							};
							groupIndex++;
							print(self.overlapGroups)
						}
					}	
					//////
				});
			},
			applyStory : function() {
			}
		}
	}
};
