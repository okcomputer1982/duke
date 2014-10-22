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
	"guest":"guest"
};

DukeApp.utils.Attributes = [
		{name:"Accuracy", desc:"The ability to be precise and avoid errors"},
		{name:"Analysis", desc:"The examination of something in detail in order to understand it better or draw"},
		{name:"Application", desc:"The ability to understand a concept and apply it to a real world example"},
		{name:"Comprehension", desc:"The capacity for understanding information fully"},
		{name:"Exploration", desc:"Process of learning something: the fact or process of finding out about"},
		{name:"Intercultural Comp", desc:"The examination of something in detail in order to understand it better or draw"},
		{name:"Introspection", desc:"Is the ability to communicate effectively and appropriately"},
		{name:"Knowledge", desc:"General awareness or possession of information, facts, ideas"},
		{name:"Reflection", desc:"Careful thought, especially the process of reconsidering previous actions"},
		{name:"Thoroughness", desc:"Extremely attentive to accuracy and detail"},
];


DukeApp.utils.AttributeTotals = {
	0:{
		week:{
			0:4,
			1:0,
			2:10,
			3:3,
			"total":17
		}
	},
	1:{
		week:{
			0:6,
			1:5,
			2:8,
			3:10,
			"total":27
		}
	},
	2:{
		week:{
			0:2,
			1:19,
			2:9,
			3:4,
			"total":7
		}
	},
	3:{
		week:{
			0:10,
			1:27,
			2:17,
			3:17,
			"total":71
		}
	},
	4:{
		week:{
			0:4,
			1:0,
			2:5,
			3:3,
			"total":13
		}
	},
	5:{
		week:{
			0:0,
			1:22,
			2:0,
			3:0,
			"total":22
		}
	},
	6:{
		week:{
			0:12,
			1:3,
			2:19,
			3:11,
			"total":45
		}
	},
	7:{
		week:{
			0:7,
			1:26,
			2:17,
			3:15,
			"total":65
		}
	},
	8:{
		week:{
			0:5,
			1:23,
			2:13,
			3:5,
			"total":46
		}
	},
	9:{
		week:{
			0:6,
			1:25,
			2:11,
			3:4,
			"total":46
		}
	}
};


DukeApp.utils.AttributeWeekTotals = [56,148,109,72];
DukeApp.utils.AttributeTotal = 358;

DukeApp.utils.QuizWeekTotals = [3, 10, 5, 5];
DukeApp.utils.QuizTotals = 96;

DukeApp.utils.initUserSettings = function() {
	localStorage.setItem("isGuest", "false");
	localStorage.setItem("isLoggedIn", "false");
};

DukeApp.utils.isGuest = function() {
	return(localStorage.isGuest === "true");
};

DukeApp.utils.isStudent = function() {
	return(DukeApp.utils.getCurrentAdminType() === "student");
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

DukeApp.utils.getCurrentUsername = function() {
	return((DukeApp.utils.isGuest())?"Guest User":Parse.User.current().get('firstName') + ' ' + Parse.User.current().get('lastName') );
};

DukeApp.utils.getCurrentUserID = function() {
	return((DukeApp.utils.isGuest())?false:Parse.User.current().id);
};

DukeApp.utils.getCurrentAdminType = function() {
	return((DukeApp.utils.isGuest())?false:Parse.User.current().get('type'));
};

DukeApp.utils.getCurrentAccount = function() {
	if (DukeApp.utils.isGuest()) {
		return(DukeApp.utils.getCurrentGuestAccount());
	} else {
		switch(DukeApp.utils.getCurrentAdminType()) {
			case("teacher"):
				return(DukeApp.utils.getCurrentTeacherAccount());
				
			case("admin"):
				return(DukeApp.utils.getCurrentAdminAccount());
				
			case("student"):
				return(DukeApp.utils.getCurrentStudentAccount());
				
		}
	}
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

DukeApp.utils.getCurrentTeacherAccount = function() {
	var def = $.Deferred();
	//if we are a student
	if (DukeApp.utils.getCurrentAdminType() === DukeApp.utils.AdminTypes.teacher) {

		var teacherAccount = Parse.User.current().get('teacherAccount');
		teacherAccount.fetch({
			success:function(teacher){
				def.resolve(teacher);
			}
		});
	} else {
		def.resolve(false);
	}

	return(def.promise());
};

DukeApp.utils.getCurrentAdminAccount = function() {
	var def = $.Deferred();
	//if we are a student
	if (DukeApp.utils.getCurrentAdminType() === DukeApp.utils.AdminTypes.admin) {

		var adminAccount = Parse.User.current().get('adminAccount');
		adminAccount.fetch({
			success:function(admin){
				def.resolve(admin);
			}
		});

	} else {
		def.resolve(false);
	}

	return(def.promise());
};


DukeApp.utils.getCurrentGuestAccount = function() {
	var def = $.Deferred();

	if (!DukeApp.utils.getCurrentAdminType()) {
		var guestAccount = Parse.User.current().get('guestAccount');
		guestAccount.fetch({
			success:function(guest){
				def.resolve(guest);
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
			if (user.get('type') !== "guest") {
				DukeApp.utils.setIsGuest(false);
				DukeApp.utils.setIsLoggedIn(true);
				def.resolve(true);
			} else {
				def.resolve(false);
			}
			
		},
		error: function(user, error) {
			def.resolve(false);
		}
	});

	return(def);
};

DukeApp.utils.loginAsGuest = function(obj) {
	var def = $.Deferred();

	Parse.User.logIn(obj.username, obj.password, {
		success: function(user) {
			if (user.get('type') === "guest") {
				DukeApp.utils.setIsGuest(true);
				DukeApp.utils.setIsLoggedIn(true);
				def.resolve(true);
			} else {
				def.resolve(false);
			}

		},
		error: function(user, error) {
			def.resolve(false);
		}
	});

	return(def);
};

DukeApp.utils.passwordReset = function(email) {
	var def = $.Deferred();

	Parse.User.requestPasswordReset(email, {
  		success: function() {
    		def.resolve({status:true});
  		},
  		error: function(error) {
    		def.resolve({status:true, e:e});
  		}
	});

	return(def.promise());
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

DukeApp.utils.findNextIndex = function(tableName) {
	var Table = Parse.Object.extend(tableName),
		query = new Parse.Query(Table),
		def = $.Deferred();
		
	query.descending("index");
	query.first({
		success: function(result){
			if (result === undefined) {
				def.resolve(0);	
			} else {
				def.resolve(result.get('index') + 1);
			}
		}
	});

	return(def.promise());
};