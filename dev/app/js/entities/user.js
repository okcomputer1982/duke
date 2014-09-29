DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.UserModel = Backbone.Model.extend({});

	Entities.StudentModel = Backbone.Model.extend({});
	Entities.TeacherModel = Backbone.Model.extend({});
	Entities.AdminModel = Backbone.Model.extend({});
	Entities.GuestModel = Backbone.Model.extend({});

	Entities.StudentCollection = Backbone.Collection.extend({
		model:Entities.StudentModel
	});

	Entities.TeacherCollection = Backbone.Collection.extend({
		model:Entities.TeacherModel
	});

	Entities.GuestCollection = Backbone.Collection.extend({
		model:Entities.GuestModel
	});

	var API = {
		getStudentObject: function() {
			var def = $.Deferred(), studentObject;
			
			if (DukeApp.utils.isGuest()) {
				studentObject = {
					"classes": [0],
					"first": "guest",
					"last": "",
					"currentWeek": 0,
					"currentClass": 0,
					"currentFrame": 0,
					"mb": "",
					"attributes": [0,0,0,0,0,0,0,0,0,0],
					"profileImage": 0
				};

				def.resolve(studentObject);
			} else {
				DukeApp.utils.getCurrentStudentAccount().done(function(student) {
					var curUser = DukeApp.utils.getCurrentUser();
					var diffms = moment().diff(moment(curUser.createdAt));
					var days = Math.floor(moment.duration(diffms).asDays());

					studentObject = {
						"classes": 		student.get('classes'),
						"first": 		curUser.get('firstName'),
						"last": 		curUser.get('lastName'),
						"currentClass": student.get('currentClass'),
						"currentWeek": 	student.get('currentWeek'),
						"currentFrame": student.get('currentFrame'),
						"mb": 			student.get('myersBriggs'),
						"attributes": 	student.get('attributes'),
						"profileImage": curUser.get('profileImage'),
						"createdAt": 	moment(curUser.createdAt),
						"daysCreated": 	days + ((days === 1)?" day":" days")
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
					"class": 		student.get('class'),
					"first": 		curUser.get('firstName'),
					"last": 		curUser.get('lastName'),
					"currentClass": student.get('currentClass'),
					"currentWeek": 	student.get('currentWeek'),
					"currentFrame": student.get('currentFrame'),
					"lastLesson": 	student.get('lastLesson'),
					"mb": 			student.get('myersBriggs'),
					"attributes": 	student.get('attributes'),
					"profileImage": curUser.get('profileImage')
				});

				def.resolve(studentModel);
			});

			return(def.promise());
		},

		getTeacherModel: function() {
			var def = $.Deferred();
			DukeApp.utils.getCurrentTeacherAccount().done(function(teacher) {

				var curUser = DukeApp.utils.getCurrentUser(),
					teacherModel = new Entities.TeacherModel({
						"classes": teacher.get('classes'),
						"first": curUser.get('firstName'),
						"last": curUser.get('lastName')
					});

				def.resolve(teacherModel);
			});

			return(def.promise());
		},
		
		getAllTeacherModel: function() {
			var def = $.Deferred(),
				TeacherTable = Parse.Object.extend("Teacher"),
				query = new Parse.Query(TeacherTable);

			query.ascending("lastName");
			query.find({
				success:function(results) {
					var tObjectList = [],
						tpromises = [];

					results.map(function(obj, idx) {
						var p = $.Deferred();
						obj.get('user').fetch({
							success:function(user) {
								tObjectList.push({
									"classes": obj.get('classes'),
									"first": user.get("firstName"),
									"last": user.get("lastName"),
									"email": user.get("email"),
									"currentClass": obj.get('currentClass'),
									"index": idx,
									"id": obj.id,
									"userId": user.id,
									"profileImage": user.get("profileImage")
								});

								p.resolve();
							}
						});

						tpromises.push(p);
					});
					
					$.when.apply($, tpromises).done(function(){
						def.resolve(tObjectList);
					});
				}
			
			});
			
			return(def.promise());
		},

		getAllStudentModel: function() {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				query = new Parse.Query(StudentTable);

			query.ascending("lastName");
			query.find({
				success:function(results) {
					var sObjectList = [],
						spromises = [];

					results.map(function(obj, idx) {
						var p = $.Deferred();
						obj.get('user').fetch({
							success:function(user) {
								sObjectList.push({
									"classes": obj.get('classes'),
									"first": user.get("firstName"),
									"last": user.get("lastName"),
									"email": user.get("email"),
									"index": idx,
									"id": obj.id,
									"userId": user.id,
									"profileImage": user.get("profileImage"),
									"currentClass": obj.get('currentClass'),
									"currentWeek": obj.get('currentWeek'),
									"currentFrame": obj.get('currentFrame')
								});

								p.resolve();
							}
						});

						spromises.push(p);
					});
					
					$.when.apply($, spromises).done(function(){
						def.resolve(sObjectList);
					});
				}
			
			});
			
			return(def.promise());
		},

		getAllGuestModel: function() {
			var def = $.Deferred(),
				GuestTable = Parse.Object.extend("Guests"),
				query = new Parse.Query(GuestTable);

			query.ascending("username");
			query.find({
				success:function(results) {
					var gObjectList = [],
						gpromises = [];

					results.map(function(obj, idx) {
						var p = $.Deferred();
						obj.get('user').fetch({
							success:function(user) {
								gObjectList.push({
									"class": obj.get('class'),
									"username": user.get("username"),
									"first": user.get("firstName"),
									"last": user.get("lastName"),
									"email": user.get("email"),
									"index": idx,
									"id": obj.id,
									"userId": user.id,
									"profileImage": user.get("profileImage")
								});

								p.resolve();
							}
						});

						gpromises.push(p);
					});
					
					$.when.apply($, gpromises).done(function(){
						def.resolve(gObjectList);
					});
				}
			
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
		},

		getStudentFromId:function(id) {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				query = new Parse.Query(StudentTable);

			query.equalTo("index", id);
			query.first(function(result){
				var user = result.get('user').fetch({
					success:function(user) {
						
						var studentModel = {
							currentClass: 	result.get('currentClass'),
							currentWeek: 	result.get('currentWeek'),
							currentFrame: 	result.get('currentFrame'),
							lastLesson: 	result.get('lastLesson'),
							first: 			result.get('user').get('firstName'),
							last: 			result.get('user').get('lastName'),
							profileImage: 	result.get('user').get('profileImage'),
							username: 		result.get('user').get('username'),
							email: 			result.get('user').get('email')
						};
						def.resolve(studentModel);
					}
				});
			});

			return(def.promise());
		}
	};

	DukeApp.reqres.setHandler("user:userModel:entities", function(){
		return API.getUserModel();
	});

	DukeApp.reqres.setHandler("user:teacherModel:entities", function(){
		return API.getTeacherModel();
	});

	DukeApp.reqres.setHandler("user:teacherModel:entities", function(){
		return API.getTeacherModel();
	});

	DukeApp.reqres.setHandler("all:user:teacherModel:entities", function(){
		return API.getAllTeacherModel();
	});

	DukeApp.reqres.setHandler("all:user:studentModel:entities", function(){
		return API.getAllStudentModel();
	});

	DukeApp.reqres.setHandler("all:user:guestModel:entities", function(){
		return API.getAllGuestModel();
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

	DukeApp.reqres.setHandler("user:getStudentFromId:entities", function(id){
		return API.getStudentFromId(id);
	});
});