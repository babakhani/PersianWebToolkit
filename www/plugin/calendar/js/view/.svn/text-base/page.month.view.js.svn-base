var View_MonthPage = {
	cssClass : {
		main : "month-page-container",
		daysBox : "days-box",
		headerBox : "header-box",
		titleBox : "title-box",
		controlBox : "control-box",
		btnNext : "btn-next",
		btnToday : "btn-today",
		btnPrev : "btn-prev",
		fakeObject : "fake-object",
		daysBoxHeaderRow : "days-header-box-row",
		dayBox : "day-box",
		dayBoxHeader : "day-box-header",
		dayBoxContent : "day-box-content",
		today : "today",
		dayStoryBix: "day-story-box"
	},
	views : {
		"default" : {
			render : function(self) {
				self.view_data ={
                    css:self.cssClass,
                };
                $.template("page_month_tmpl", 
                            "<div class='${css.main}' > \
                                <div class='${css.headerBox}' >\
                                    <span class='${css.titleBox}' />\
                                    <div class='${css.controlBox}' >\
                                        <button class='${css.btnNext}' >></button>\
                                        <button class='${css.btnToday}' >امروز</button>\
                                        <button class='${css.btnPrev}' ><</button>\
                                    </div>  \
                                </div>  \
                                <table cellspacing='0' class='${css.daysBoxHeaderRow}' ></table>\
                                <table cellspacing='0' class='${css.daysBox}'  >\
                                    <tbody>\
                                    <tr><td /><td/><td/><td/><td/><td/><td/></tr>\
                                    <tr><td/><td/><td/><td/><td/><td/><td/></tr>\
                                    <tr><td/><td/><td/><td/><td/><td/><td/></tr>\
                                    <tr><td/><td/><td/><td/><td/><td/><td/></tr>\
                                    <tr><td/><td/><td/><td/><td/><td/><td/></tr>\
                                    <tr><td/><td/><td/><td/><td/><td/><td/></tr>\
                                    </tbody>\
                                </table>\
                            </div>");
                $.tmpl("page_month_tmpl", self.view_data).appendTo( self.stage.element );
				// Element Refrences
				self.element = $('.'+self.cssClass.main);
				self.headerBox = self.element.find('.'+ self.cssClass.header);
				self.titleBox = self.element.find('.'+self.cssClass.titleBox);
				self.controlBox = self.element.find('.'+self.cssClass.controlBox );
				self.btnNext = self.element.find('.'+self.cssClass.btnNext ).click($.proxy(self.goToDate,self,"next"));
				self.btnToday = self.element.find('.'+self.cssClass.btnToday ).click( $.proxy(self.goToDate,self,"today"));
				self.btnPrev = self.element.find('.'+self.cssClass.btnPrev ).click( $.proxy(self.goToDate,self,"prev"));
				self.daysBoxHeader = self.element.find('.'+self.cssClass.daysBoxHeaderRow);
				self.daysBox = self.element.find('.'+self.cssClass.daysBox);
				// Render Week Header
				self.daysBoxHeaderRow = $("<tr/>").appendTo(self.daysBoxHeader);
				for(weekDay in self.weekRange) {
					$("<td/>").text(self.weekRange[weekDay].name.fa).appendTo(self.daysBoxHeaderRow);
				};				
				this.renderDays(self);
				return this;
			},
			renderDays : function(self) {
				var t = new persianDate();
				self.daysCount = t.getDaysInMonth(self.currentYear, self.month);
				self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.currentYear, self.month);
				var i = 1;
				$(self.daysBox).find("td").each(function(index) {
					$this = $(this).empty();
					var dayPartUnixTime = new persianDate([self.currentYear, self.month, i]).valueOf();
					var daysInnerElement = $("<div/>").addClass(self.cssClass.dayBox).append($("<span/>").text(self.toPersianDigit(i)).addClass(self.cssClass.dayBoxHeader));
					var pushDay = function(){
					    self.daysList.push( daysInnerElement.data({day : i,unixDate: dayPartUnixTime}).appendTo($this));
                        i++;
					}
					if(self.firstWeekDayOfMonth == 0) {
                        pushDay()
						self.firstWeekDayOfMonth++;
					} else if(index + 1 == self.firstWeekDayOfMonth && i <= self.daysCount) {
						pushDay()
						self.firstWeekDayOfMonth++;
					}
				});
				return this;
			},
			goToMonth : function(self, direction) {
				$(fakeElement).stop().remove();
				var fakeElement = $(self.daysBox).clone()
				    .addClass(self.cssClass.fakeObject)
				    .appendTo(self.element)[0];
				if(direction == "right") {
					var directionParam = "-100%";
				} else {
					var directionParam = "100%";
				}
				$(fakeElement).animate({
					"right" : directionParam,
					"opacity" : 0.4
				}, 500, function() {
					$(fakeElement).remove();
				});
				this.renderDays(self);
				self.updateInfo();
				return this;
			},
			goNextMonth : function(self) {
				if(self.month == 12) {
					self.currentYear++;
					self.month = 1;
				} else {
					self.month++;
				}
				this.goToMonth(self, "right");
				return this;
			},
			goPrevMonth : function(self) {
				if(self.month == 1) {
					self.currentYear--;
					self.month = 12;
				} else {
					self.month--;
				}
				this.goToMonth(self, "left");
				return this;
			},
			markToday : function(self) {
				if(self.month == self.state.today.month() && self.currentYear == self.state.today.year()) {
					self.today = new persianDate();
					$(self.daysBox).children('tbody').children("tr").children("td").children("div").each(function() {
						if($(this).data().day == self.today.date()) {
							$(this).addClass(self.cssClass.today);
						}
					});
				}
				self.view.applyStory(self);
			},
			goToday : function(self) {
				self.currentYear = self.state.today.year();
				self.month = self.state.today.month();
				this.goToMonth(self, "left");
			},
			applyStory : function(self) {
				$(self.daysBox).children('tbody').children("tr").children("td").children("div").each(function() {
					var unixDate = $(this).data("unixDate");
					var storyList = self.stage.pcal.dataService.getDayStory(unixDate);
					var storyLength = storyList.length;
					if(storyLength > 0) {
					      
					    $(this).append( $("<div/>").addClass(self.cssClass.dayStoryBix) );  
					    
						for(i in storyList) {
							$(this).children("."+self.cssClass.dayStoryBix).append(self.view.createStory(self,storyList[i]));
						}
					};
				});
			},
			createStory : function(self,storyItem) {
				self.storyElement =  $("<div class='story-item' ><span class='title' >{0}</span><span class='time' >{1}</spna></div>".format(storyItem.title, storyItem.time));
				self.storyElement.data(storyItem);
				//print(self.storyElement.data() )
				self.storyElementTooltip = $("<div class='story-tooltip' ></div>");
				
				self.storyElementTooltip.append(
					$("<span class='title' >{0}</span>".format(storyItem.title)  )	
				);
				var humanReadableStartDate = new persianDate(storyItem.when.startTime).format("YYYY/MM/DD HH:mm a")
				self.storyElementTooltip.append(
					$("<span class='title' >{0}</span>".format(humanReadableStartDate)  )	
				);
				var humanReadableEndDate = new persianDate(storyItem.when.endTime).format("YYYY/MM/DD HH:mm a")
				self.storyElementTooltip.append(
					$("<span class='title' >{0}</span>".format(humanReadableEndDate)  )	
				);
				self.storyElement .append(self.storyElementTooltip);
				self.storyElement.dblclick(function(){
					$(this).children(".story-tooltip").show();
					$(document).click(function(){
						$(".story-tooltip").hide();
						$(document).unbind("click");
					});
				});
				return self.storyElement;
			}
		}
	}
};
