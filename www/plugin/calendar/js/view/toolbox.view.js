Views_Toolbox = {
    cssClass : {
        main : 'toolbox-main-box',
        pageNavigatorBox : 'page-navigator',
        btnYearPage : "btn-year-page",
        btnMonthPage : "btn-month-page",
        btnWeekPage : "btn-week-page",
        btnDayPage : "btn-day-page",
        navigatorBtnSpacer : "navigator-btn-spacer"
    },
    btnText : {
        btnYearPage : "سال",
        btnMonthPage : "ماه",
        btnWeekPage : "هفته",
        btnDayPage : "روز"
    },
    views : {
        "default" : {
            render : function(self) {
                self.view_data = {
                    css : self.cssClass,
                    btnText : self.btnText
                };
                $.template("toolbox_tmpl", "<div class='${css.main}' >" + "<div class=' ${css.pageNavigatorBox}'>" + "<button value='year' class='${css.btnYearPage}' >${btnText.btnYearPage}</button>" + "<div class='${css.navigatorBtnSpacer}'></div>" + "<button value='month' class='${css.btnMonthPage}' >${btnText.btnMonthPage}</button>" + "<div class='${css.navigatorBtnSpacer}'></div>" + "<button value='week' class='${css.btnWeekPage}' >${btnText.btnWeekPage}</button>" + "<div class='${css.navigatorBtnSpacer}'></div>" + "<button value='day' class='${css.btnDayPage}' >${btnText.btnDayPage}</button>" + "</div>" + "</div>");
                $.tmpl("toolbox_tmpl", self.view_data).appendTo(self.pcal.element);
                self.element = $("." + self.cssClass.main);
                self.btnList = $("." + self.cssClass.main + " button").click(function() {
                    self.btnList.removeClass("focused");
                    $(this).addClass("focused");
                    self.pcal.stage.changePage($(this).val());
                    return this;
                });
                return self;
            },
            syncUi : function(self, calendarView) {
                self.btnList.removeClass("focused");
                self.btnList.each(function() {
                    if($(this).val() == calendarView) {
                        $(this).addClass("focused");
                    }
                });
            }
        }

    }

};
