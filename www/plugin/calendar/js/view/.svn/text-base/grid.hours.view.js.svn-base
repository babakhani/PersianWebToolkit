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
                $.template("hours_grid_tmpl", 
                    "<div class='${css.main}' >\
                        <div  class='${css.gridHeader}' />\
                        <div  class='${css.gridHourBox}' >\
                        <div class='${css.storyBox}' ></div>\
                    </div>");
                $.tmpl("hours_grid_tmpl", self.view_data).appendTo(self.container);
                
                self.element = $('.'+self.cssClass.main);
                self.container.hours = $('.' + self.cssClass.gridHourBox);
                self.container.storyBox = $('.' + self.cssClass.storyBox);
                
                var applyHourse = function() {
                    self.hoursRange = range(24);
                    for (i in self.hoursRange ) {
                        self.hoursList.push($("<div class='{0}'><span class='{1}' >{2}</span><div class='{3}' /><div class='{4}' /><div class='{5}' /><div class='{6}' /></div> "
                        .format(self.cssClass.gridHoursItem
                        ,self.cssClass.gridHoursTitle
                        ,self.hoursRange[i]+1
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
                //self.view.addStory(self);
                self.view.applyStory(self);
                
                return this;
                
            },
            addStory : function(self) {
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
            applyStory : function(self) {
                $(self.container.storyBox).empty();
                var unixDate = self.page.state.unixDate;
                var storyList = self.page.stage.pcal.dataService.getDayStory(unixDate);
                var storyLength = storyList.length;
                if(storyLength > 0) {
                    $(self.element).append($("<div/>").addClass(self.cssClass.dayStoryBix));
                    for(i in storyList) {
                        self.container.storyBox.append(self.view.createStory(self, storyList[i]));
                    }
                };
                print(self.cssClass.dayStoryBix)
                
                $(self.element).children("."+self.cssClass.dayStoryBox); 
                
                
                
                self.view.fixOverlap(self);
                
           },createStory : function(self,storyItem) {
                self.story_data = {
                    title : storyItem.title,
                    time : storyItem.time,
                    startTime : new persianDate(storyItem.when.startTime).format("HH:mm a"),
                    endTime : new persianDate(storyItem.when.endTime).format("HH:mm a")
                };
                $.template("story_tmpl", "<div class='story-item' >\
                            <span class='title' >${title}</span>\
                            <span class='time' >${startTime}</spna>\
                            <span class='time' >${endTime}</spna></div>");
                var storyElement = $.tmpl("story_tmpl", self.story_data);
                storyElement.data({
                    startTime : storyItem.when.startTime,
                    endTime : storyItem.when.endTime,
                })
                return storyElement;
            },
            fixOverlap: function(self){
                  var containerHeight = self.container.storyBox.height();
                  var startDayUnix  = new persianDate(self.page.state.unixDate).sod().valueOf();
                  var endDayUnix  = new persianDate(self.page.state.unixDate).eod().valueOf();
                  var dayUnixSpan = endDayUnix-startDayUnix;
                  $(self.container.storyBox).children().each(function(index){
                   // print( $(this) );
                    var relativeStartUnix = $(this).data().startTime - startDayUnix;
                    var relativeEndUnix = $(this).data().endTime - startDayUnix;
                    var storyUnixSpan = relativeEndUnix - relativeStartUnix;
                    var calculatedTop = containerHeight * relativeStartUnix / dayUnixSpan;
                    var calculatedHeight = containerHeight * storyUnixSpan / dayUnixSpan; 
                    print(calculatedHeight)
                    $(this).css({
                       top: calculatedTop+"px",
                       height: calculatedHeight+"px",
                       left:index*10+"px"
                    });
                  });
            }
        }
    }
};
