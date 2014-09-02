DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.UserModel = Backbone.Model.extend({});

	Entities.StudentModel = Backbone.Model.extend({});


	var API = {
		getStudentObject: function() {
			var def = $.Deferred(), studentObject;

			if (DukeApp.utils.isGuest()) {
				studentObject = {
					"class": 0,
					"first": "guest",
					"last": "",
					"currentWeek": 1,
					"lastLesson": 1,
					"mb": "",
					"attributes": [0,0,0,0,0,0,0,0,0,0],
					"profileImage": 0
				};

				def.resolve(studentObject);
			} else {
				DukeApp.utils.getCurrentStudentAccount().done(function(student) {
					var curUser = DukeApp.utils.getCurrentUser();
					
					studentObject = {
						"class": student.get('class'),
						"first": curUser.get('firstName'),
						"last": curUser.get('lastName'),
						"currentWeek": student.get('currentWeek'),
						"lastLesson": student.get('lastLesson'),
						"mb": student.get('myersBriggs'),
						"attributes": student.get('attributes'),
						"profileImage": curUser.get('profileImage')
					};

					def.resolve(studentObject);
				});
			}

			return(def.promise());
		},

		getStudentModel: function() {
			var def = $.Deferred();
			DukeApp.utils.getCurrentStudentAccount().done(function(student) {
				var curUser = DukeApp.utils.getCurrentUser(),
					studentModel = new Entities.StudentModel({
					"class": student.get('class'),
					"first": curUser.get('firstName'),
					"last": curUser.get('lastName'),
					"currentWeek": student.get('currentWeek'),
					"lastLesson": student.get('lastLesson'),
					"mb": student.get('myersBriggs'),
					"attributes": student.get('attributes'),
					"profileImage": curUser.get('profileImage')
				});

				def.resolve(studentModel);
			});

			return(def.promise());
		},

		getUserModel: function(){
			var user = DukeApp.utils.getCurrentUser();

			var userModel = new Entities.UserModel({
				"name":user.get('username'),
				"first": user.get('firstName'),
				"last": user.get('lastName'),
				"email":user.get('email'),
				"type":user.get('type')
			});
			
			return(userModel);
		},

		setStudentAttributes: function(attrs) {
			var def = $.Deferred();

			DukeApp.utils.getCurrentStudentAccount().done(function(student){
				var currentAttributes = student.get('attributes');

				_.each(attrs, function(val){
					currentAttributes[val] += 1;
				});

				student.set("attributes", currentAttributes);
				
				student.save(null, {
					success:function(s) {
						def.resolve({success:true});
					},
					error:function(s, e) {
						def.resolve({success:false});
					}
				});
			});

			return(def.promise());
		}
	};

	DukeApp.reqres.setHandler("user:userModel:entities", function(){
		return API.getUserModel();
	});

	DukeApp.reqres.setHandler("user:studentModel:entities", function(){
		return API.getStudentModel();
	});

	DukeApp.reqres.setHandler("user:studentObject:entities", function(){
		return API.getStudentObject();
	});

	DukeApp.reqres.setHandler("user:saveAttributes:entities", function(attrs){
		return API.setStudentAttributes(attrs);
	});
});