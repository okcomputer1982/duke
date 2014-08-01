//helper functions
DukeApp.utils = {};

DukeApp.utils.setCurrentView = function(className, controller){
	$('body').removeClass(DukeApp.currentViewName);
	DukeApp.currentViewName = className;
	DukeApp.currentController = controller;

	$('body').addClass(DukeApp.currentViewName);
};

DukeApp.utils.weekView = {};

DukeApp.utils.weekView = {
	scrollPos:[]
};

DukeApp.utils.profileView = {};

DukeApp.utils.profileView = {
	scrollPos:[]
};

DukeApp.utils.loadCommonViews = function() {
	if (DukeApp.commonViews)
		return;
	
	DukeApp.commonViews = {
		header:new DukeApp.Components.Header.HeaderView(),
		footer:new DukeApp.Components.Footer.FooterView()
	};
};