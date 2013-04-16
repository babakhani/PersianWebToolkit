var View_WeekPage = {
    cssClass : {
        main : "week-page-container",
        headerBox : "header-box",
        titleBox : "title-box",
        controlBox : "control-box",
        btnNext : "btn-next",
        btnToday : "btn-today",
        btnPrev : "btn-prev",
        gridContainer : "grid-container",
        weekGrid : "week-grid",
        weekGridHedaer : "header",
        weekGridHoursColumn : "hours-column",
        weekGridDaysBox : "days-box",
        daysTable : "days-table",
        weekGridTableContainer : "table-container",
        weekGridHoursTbaleBox : "hours-table-box",
        hearderTable : "header-table",
        weekGridTableWarraper : "week-table-warraper"
    },
    views : {
        "default" : {
            render : function(self) {
                self.view_data ={
                    css:self.cssClass,
                };
                $.template("page_week_tmpl", 
                            "<div class='${css.main}' > \
                                <div class='${css.headerBox}' >\
                                    <span class='${css.titleBox}' />\
                                    <div class='${css.controlBox}' >\
                                        <button class='${css.btnNext}' >></button>\
                                        <button class='${css.btnToday}' >امروز</button>\
                                        <button class='${css.btnPrev}' ><</button>\
                                    </div>  \
                                </div>  \
                                <div class='${css.gridContainer}' >\
                                    <div class='${css.weekGrid}' >\
                                        <div class='${css.weekGridDaysBox}' >\
                                             <div class='${css.hearderTable}' >\
                                                 <table cellspacing='0' class='${css.daysTable}' >\
                                                     <thead>\
                                                        <tr><th /><th/><th/><th/><th/><th/><th/></th>\
                                                     </thead>\
                                                 </table>\
                                             </div>\
                                             <div class='${css.weekGridHoursTbaleBox}' >\
                                                <div class='${css.weekGridHoursColumn}' ></div>\
                                                <div class='${css.weekGridTableContainer}' >\
                                                    <div class='${css.weekGridTableWarraper}' >\
                                                    <table cellspacing='0'  class='${css.daysTable}' >\
                                                         <tbody>\
                                                            <tr><td /><td/><td/><td/><td/><td/><td/></td>\
                                                         </tbody>\
                                                     </table>\
                                                     </div>\
                                                </div>\
                                             </div>\
                                        </div>\
                                    </div>\
                                <div/>\
                            </div>");
                $.tmpl("page_week_tmpl", self.view_data).appendTo( self.stage.element );
                self.element = $('.'+self.cssClass.main);
                //self.headerBox = self.element.find('.'+ self.cssClass.header);
                self.titleBox = self.element.find('.'+self.cssClass.titleBox);
                self.controlBox = self.element.find('.'+self.cssClass.controlBox );
                self.btnNext = self.element.find('.'+self.cssClass.btnNext ).click($.proxy(self.goToDate,self,"next"));
                self.btnToday = self.element.find('.'+self.cssClass.btnToday ).click( $.proxy(self.goToDate,self,"today"));
                self.btnPrev = self.element.find('.'+self.cssClass.btnPrev ).click( $.proxy(self.goToDate,self,"prev"));
                //self.gridContainer = self.element.find('.'+self.cssClass.gridContainer );
                self.weekGrid = self.element.find('.'+self.cssClass.weekGrid );
                self.weekGrid.hoursColumn = self.element.find('.'+self.cssClass.weekGridHoursColumn );
                //self.weekGrid.daysBox = self.element.find('.'+self.cssClass.weekGridDaysBox );
                self.weekGrid.daysListHeader = self.element.find('.'+self.cssClass.daysTable );
                self.weekGrid.hoursTableBox = self.element.find('.'+self.cssClass.weekGridHoursTbaleBox );
                //self.weekGrid.tableContainer = self.element.find('.'+self.cssClass.weekGridTableContainer );
                self.weekGrid.daysListHours =  self.element.find('.'+self.cssClass.daysTable );
                // Create Scroll Object
                var paneElement = $(self.weekGrid.hoursTableBox).jScrollPane();
                self.gridScroll = paneElement.data("jsp");
                
                function renderDaysHeader() {
                    self.weekGrid.daysListHeader.children('thead').children('tr').children('th').each(function(index) {
                        var title = self.weekRange[index].name.fa;
                        $(this).append($("<span/>").addClass("day-header").text(title));
                    });
                };
                function renderDaysHours() {
                    $(self.weekGrid.daysListHours).children('tbody').children('tr').children('td').each(function(index) {
                        for(i in range(24)) {
                            $("<div class='{0}'>\
                                <span class='{1}' >{2}</span>\
                                <div class='{4}' /><div class='{5}' />\
                             </div> ".format(
                            self.gridHoursItemCssClass
                            ,self.gridHoursTitleCssClass
                            ,""
                            ,self.gridHoursQuarterCssClass
                            ,self.gridHoursQuarterCssClass
                            ))
                            .appendTo($(this))[0];
                        }
                    });
                };
                function renderHoursColumn() {
                    for(i in range(24)) {
                        $("<div class='{0}'>\
                            <span class='{1}' >{2}</span>\
                         </div>".format(
                        self.gridHoursItemCssClass
                        ,self.gridHoursTitleCssClass
                        ,parseInt(i)+1
                        ,self.gridHoursQuarterCssClass
                        ,self.gridHoursQuarterCssClass
                        ))
                        .appendTo(self.weekGrid.hoursColumn);
                    }
                };
                renderHoursColumn();
                renderDaysHours();
                renderDaysHeader();
            }
        }
    }
}