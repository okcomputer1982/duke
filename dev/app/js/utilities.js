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

DukeApp.utils.Attributes = [
		{name:"Accuracy", desc:"The ability to be precise and avoid errors"},
		{name:"Analysis", desc:"The examination of something in detail in order to understand it better or draw"},
		{name:"Application", desc:"The ability to understand a concept and apply it to a real world example"},
		{name:"Comprehension", desc:"The capacity for understanding information fully"},
		{name:"Exploration", desc:"Process of learning something: the fact or process of finding out about"},
		{name:"Intercultural competence", desc:"The examination of something in detail in order to understand it better or draw"},
		{name:"Introspection", desc:"Is the ability to communicate effectively and appropriately"},
		{name:"Knowledge", desc:"General awareness or possession of information, facts, ideas"},
		{name:"Reflection", desc:"Careful thought, especially the process of reconsidering previous actions"},
		{name:"Thoroughness", desc:"Extremely attentive to accuracy and detail"},
];




DukeApp.utils.initUserSettings = function() {
	localStorage.setItem("isGuest", "false");
	localStorage.setItem("isLoggedIn", "false");
};

DukeApp.utils.isGuest = function() {
	return(localStorage.isGuest === "true");
};

DukeApp.utils.isLoggedIn = function() {
	return(localStorage.isLoggedIn === "false");
};

DukeApp.utils.setIsGuest = function(b) {
	localStorage.setItem("isGuest", String(b));
};

DukeApp.utils.setIsLoggedIn = function(b) {
	localStorage.setItem("isLoggedIn", String(b));
};


DukeApp.utils.getCurrentUser = function() {
	return((DukeApp.utils.isGuest())?false:Parse.User.current());
};

DukeApp.utils.getCurrentUserID = function() {
	return((DukeApp.utils.isGuest())?false:Parse.User.current().id);
};

DukeApp.utils.getCurrentAdminType = function() {
	return((DukeApp.utils.isGuest())?false:Parse.User.current().get('type'));
};

DukeApp.utils.getCurrentAdminID = function() {
	return((DukeApp.utils.isGuest())?DukeApp.utils.AdminTypes.guest:Parse.User.current().get('typeID'));
};

DukeApp.utils.getCurrentStudentAccount = function() {
	var def = $.Deferred();
	//if we are a student
	if (DukeApp.utils.getCurrentAdminType() === DukeApp.utils.AdminTypes.student) {

		var studentAccount = Parse.User.current().get('studentAccount');
		studentAccount.fetch({
			success:function(student){
				def.resolve(student);
			}
		});

	} else {
		def.resolve(false);
	}

	return(def.promise());
};

DukeApp.utils.login = function(obj) {
	var def = $.Deferred();
	Parse.User.logIn(obj.username, obj.password, {
		success: function(user) {
			DukeApp.utils.setIsGuest(false);
			DukeApp.utils.setIsLoggedIn(true);

			def.resolve(true);
		},
		error: function(user, error) {
			def.resolve(false);
		}
	});

	return(def);
};

DukeApp.utils.loginAsGuest = function() {
	DukeApp.utils.setIsGuest(true);
	DukeApp.utils.setIsLoggedIn(true);
};


DukeApp.utils.logout = function() {
	if (!DukeApp.utils.isGuest()) {
		Parse.User.logOut();
	}

	DukeApp.utils.setIsGuest(false);
	DukeApp.utils.setIsLoggedIn(false);
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