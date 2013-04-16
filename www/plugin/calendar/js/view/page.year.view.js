var Views_PageYear = {
	cssClass : {
		main : "year-page-container",
			headerBox : "header-box",
				titleBox : "title-box",
				controlBox : "control-box",
					btnNext : "btn-next",
					btnToday : "btn-today",
					btnPrev : "btn-prev",
			gridBox : "grid-box",
			fakeObject : "fake-object"
	},
	views : {
		"default" : {
			render : function(self) {
				///////
				self.view_data ={
					css:self.cssClass,
				};
				$.template("page_year_tmpl", 
							"<div class='${css.main}' > \
								<div class='${css.headerBox}' >\
									<span class='${css.titleBox}' />\
									<div class='${css.controlBox}' >\
										<button class='${css.btnNext}' >></button>\
										<button class='${css.btnToday}' >امروز</button>\
										<button class='${css.btnPrev}' ><</button>\
									</div>	\
								</div>	\
								<div class='${css.gridBox}' />\
							</div>");
				$.tmpl("page_year_tmpl", self.view_data).appendTo( self.stage.element );
				// Element Refrences
				self.element = $('.'+self.cssClass.main);
				self.container.grid = $('.'+self.cssClass.gridBox);
				self.state.year = self.state.today.year();
				// Apply Children And Makeup :)
				this.appendMonthGrid(self);
				this.pageTitle = $('.'+self.cssClass.titleBox);
				this.btnNextYear = $('.'+self.cssClass.btnNext).click($.proxy(self.goToDate, self , "next",true ));
				this.btnPrevYear = $('.'+self.cssClass.btnPrev).click($.proxy(self.goToDate, self , "prev",true));
				this.btnTodayYear = $('.'+self.cssClass.btnToday).click($.proxy(self.goToDate, self , "today",true ));
				this.update(self);
				return this;
			},
			update : function(self) {
					this.pageTitle.text( self.toPersianDigit(self.state.year) );
					return this;
			},
			changeYear : function(self) {
				$(fakeElement).stop().remove();
				var fakeElement = self.container.grid.clone().addClass(self.cssClass.fakeObject).appendTo(self.element);
				$(fakeElement).animate({
					"top":"100%",
					'width':"90%",
					"right":"5%"
				},self.animateSpeed,function(){
					$(fakeElement).remove();	
				});
				return this;
			},
            appendMonthGrid: function(self) {
                for(m in range(12) ) {
                    var mgrid = new MonthGrid({
                        parent : self,
                        container : self.container.grid,
                        year : new persianDate().year(),
                        month : parseInt(m) + 1
                    })
                    self.monthGrid.push(mgrid);
                    mgrid.attachEvent("selectDay", function(x) {
                        self.stage.raiseEvent("selectDate", [x, "day"])
                    });
                };
                return this;
            }
		}
	}
}