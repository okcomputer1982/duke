//helper functions
DukeApp.utils = {};

DukeApp.utils.setCurrentView = function(className, controller){
	$('body').removeClass(DukeApp.currentViewName);
	DukeApp.currentViewName = className;
	DukeApp.currentController = controller;

	$('body').addClass(DukeApp.currentViewName);
};

DukeApp.utils.AdminTypes = {
	"teacher":"teacher",
	"admin":"admin",
	"student":"student",
	"guest":"guest",
};


DukeApp.utils.isGuest = false;

DukeApp.utils.getCurrentUser = function() {
	return((DukeApp.utils.isGuest)?false:Parse.User.current());
};

DukeApp.utils.getCurrentAdminType = function() {
	return((DukeApp.utils.isGuest)?false:Parse.User.current().get('type'));
};

DukeApp.utils.getCurrentAdminID = function() {
	return((DukeApp.utils.isGuest)?DukeApp.utils.AdminTypes.guest:Parse.User.current().get('typeID'));
};

DukeApp.utils.login = function(obj) {
	var def = $.Deferred();

	Parse.User.logIn(obj.username, obj.password, {
		success: function(user) {
			DukeApp.utils.isGuest = false;
			def.resolve(true);
		},
		error: function(user, error) {
			def.resolve(false);
		}
	});

	return(def);
};

DukeApp.utils.loginAsGuest = function() {
	DukeApp.utils.isGuest = true;
};

DukeApp.utils.loadCommonViews = function() {
	if (DukeApp.commonViews) {
		return;
	}
		
	DukeApp.commonViews = {
		header:new DukeApp.Components.Header.HeaderView(),
		footer:new DukeApp.Components.Footer.FooterView()
	};
};