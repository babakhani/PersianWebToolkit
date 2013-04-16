var Views_PageDay = {
    cssClass : {
        main : "day-page-container",
        header : "header-box",
        titleBox : "title-box",
        controlBox : "control-box",
        btnNext : "btn-next",
        btnToday : "btn-today",
        btnPrev : "btn-prev",
        content : "content",
        dayInfoBox : " day-info-box",
        dayInfoBoxDay : "day-info-box-day",
        dayInfoBoxFullDay : "day-info-box-full-day",
        storyListBox : "day-story-list-box",
        monthGrid : "day-month-grid"
    },
    views : {
        "default" : {
            render : function(self) {
                // TODO: Must remove
                self.element = {};
                // Render Html
                self.view_data = {
                    css : self.cssClass
                };
                $.template("page_day_tmpl", "<div class='${css.main}' >" + "<div class='${css.header}' >" + "<span class='${css.titleBox}' />" + "<div class='${css.controlBox}' >" + "<button class='${css.btnNext}' >></button>" + "<button class='${css.btnToday}' >امروز</button>" + "<button class='${css.btnPrev}' ><</button>" + "</div>	" + "</div>	" + "<div class='${css.content}' >" + "<div class='${css.dayInfoBox}' >" + "<div class='${css.dayInfoBoxDay}' ></div>" + "<span class='${css.dayInfoBoxFullDay}' />" + "</div>" + "<div class='${css.monthGrid}' >" + "</div>" + "</div>" + "</div>");
                self.element.main = $.tmpl("page_day_tmpl", self.view_data).appendTo(self.stage.element);
                //print(self.element)
                self.createStaffElement();
                self.container.monthGrid = self.element.monthGrid;
                self.hoursGrid = new HoursGrid({
                    parent : self,
                    container : self.element.main
                });
                //  Control Box Event's
                self.view.applyEvent.apply(self);
                // Append Event LIst Box
                self.element.storyListBox = $("<div></div>").addClass(self.cssClass.storyListBox).appendTo(self.element.main);
                // Append Month Grid
                self.monthGrid = new MonthGrid({
                    parent : self,
                    container : self.container.monthGrid,
                    year : new persianDate().year(),
                    month : new persianDate().month()
                });
                //print('update info in view render');
                self.view.goToDay.apply(self, ["today"]);
                return this;
            },
            applyEvent : function() {
                var self = this;
                self.element.btnNext.click(function() {
                    self.view.goToDay.apply(self, ['next']);
                    self.raiseEvent("changeState");
                });
                self.element.btnToday.click(function() {
                    self.view.goToDay.apply(self, ['today']);
                    self.raiseEvent("changeState");
                });
                self.element.btnPrev.click(function() {
                    self.view.goToDay.apply(self, ['prev']);
                    self.raiseEvent("changeState");
                });
                return this;
            },
            updateStoryListBox : function(storyList) {
                var self = this;
                var storyLength = storyList.length;
                self.element.storyListBox.empty();
                if(storyLength > 0) {
                    for(i in storyList) {
                        self.element.storyListBox.append(self.view.createStory(self, storyList[i]));
                    }
                };
            },
            createStory : function(self, storyItem) {
                self.storyElement = $("<div class='story-item' ><span class='title' >{0}</span><span class='time' >{1}</spna></div>".format(storyItem.title, storyItem.time));
                self.storyElement.data(storyItem);
                
                //print(self.storyElement.data() )
                self.storyElementTooltip = $("<div class='story-tooltip' ></div>");
                self.storyElementTooltip.append($("<span class='title' >{0}</span>".format(storyItem.title)));
                var humanReadableStartDate = new persianDate(storyItem.when.startTime).format("YYYY/MM/DD HH:mm a")
                self.storyElementTooltip.append($("<span class='title' >{0}</span>".format(humanReadableStartDate)));
                var humanReadableEndDate = new persianDate(storyItem.when.endTime).format("YYYY/MM/DD HH:mm a")
                self.storyElementTooltip.append($("<span class='title' >{0}</span>".format(humanReadableEndDate)));
                self.storyElement.append(self.storyElementTooltip);
                self.storyElement.dblclick(function() {
                    $(this).children(".story-tooltip").show();
                    $(document).click(function() {
                        $(".story-tooltip").hide();
                        $(document).unbind("click");
                    });
                });
                return self.storyElement;
            },
            goToDay : function(option) {
                var self = this;
                if(option == 'next') {
                    self.state.unixDate = new persianDate(self.state.unixDate).add('days', 1).valueOf();
                } else if(option == 'prev') {
                    self.state.unixDate = new persianDate(self.state.unixDate).subtract('days', 1).valueOf();
                } else if(option == 'today') {
                    self.state.unixDate = new persianDate().valueOf();
                } else {
                    self.state.unixDate = new persianDate(option).valueOf();
                }
                self.raiseEvent("stateChanged");
                return this;
            },
            updateUiInfo : function(self) {
                var p = new persianDate(self.state.unixDate);
                    self.element.dayInfoBoxDay.text(p.format("D"));
                    self.element.dayInfoBoxFullDay.text(p.format("MMMM , YYYY"));
                return this;
            },
            goToday : function(self) {
                self.state.unixDate = new persianDate().valueOf();
                self.view.updateInfo(self);
                return this;
            }
        }
    }
};
