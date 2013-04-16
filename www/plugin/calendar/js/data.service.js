var Class_EventDataService = {
	storyList : [],
	story : {
		id : "",
		author : [],
		category : [],
		content : {},
		title : {},
		eventStatus : {},
		when : {
			startTime : "",
			endTime : ""
		}
	},
	createSyncItem : function(resource) {
		var self = this;
		$.ajax({
			url : resource.url,
			dataType : "jsonp",
			success : function(data) {
				var events = data.feed.entry;
				for (i in events) {
					var st = self.fromgCal(events[i]);
					self.storyList.push(st);
				}
				self.updateViews();
			}
		});
	},
	// This is story model
	fromgCal : function(gcalStoryObject) {
		var self = this;
		var storyTime = new persianDate(self.getUnix(gcalStoryObject.gd$when[0].startTime)).format("HH:mm a");
		var story = {
			id : gcalStoryObject.id.$t,
			category : gcalStoryObject.category,
			content : gcalStoryObject.content,
			title : gcalStoryObject.title.$t,
			eventStatus : gcalStoryObject.gd$eventStatus,
			when : {
				startTime : self.getUnix(gcalStoryObject.gd$when[0].startTime),
				endTime : self.getUnix(gcalStoryObject.gd$when[0].endTime)
			},
			time : storyTime
		}
		return story;
	},
	getUnix : function(dateString) {
		var date = new Date(dateString);
		return date.valueOf();
	},
	getDayUnixTimeSpan : function() {
		return (24 * 3600 * 1000);
	},
	updateViews : function() {
		//print("data service update views")
		this.pcal.stage.applyStory();
		return this;
	},
	// Get Data Functions
	getDayStory : function(dayUnixTime) {

		var stories = this.storyList;
		var dayUnixTimeSpan = this.getDayUnixTimeSpan();
		dayUnixTime = new persianDate(dayUnixTime).startOf("day").valueOf();

		var queryStoryList = [];
		for (i in stories) {
			if (stories[i].when.startTime >= dayUnixTime && stories[i].when.startTime <= dayUnixTime + dayUnixTimeSpan) {
				/*				 print("day start time 	 :  " 	+ dayUnixTime);
				 print("story start time : " + stories[i].when.startTime);
				 var endUnix = dayUnixTime+dayUnixTimeSpan;
				 print("end start time   : " + endUnix);
				 */
				queryStoryList.push(stories[i]);
			}

		}
		// Sort By Story.startTime :)
		function compare(a, b) {
			if (a.when.startTime < b.when.startTime)
				return -1;
			if (a.when.startTime > b.when.startTime)
				return 1;
			return 0;
		}

		var queryStorySortedList = queryStoryList.sort(compare);
		return queryStorySortedList;
	}
};

var StoryDataService = function(pcal) {
	$.extend(true, this, Class_EventDataService);
	this.pcal = pcal;
	this.resource = this.pcal.resource;
	for (i in this.resource) {
		this.createSyncItem(this.resource[i]);
	}
	return this;
};
