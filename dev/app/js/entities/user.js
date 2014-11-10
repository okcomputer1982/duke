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

		deleteUser:function(id) {
			var def = $.Deferred();

			Parse.Cloud.run('deleteUser', { id: id }, {
				success: function(results) {
					console.log(results);
				    def.resolve();
			  	},
				  error: function(error) {
				  	def.resolve();
				}
			});
			
			return(def.promise());
		},
		
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
					"profileImage": 0,
					"index": 0

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
						"username": 	curUser.get("username"),
						"currentClass": student.get('currentClass'),
						"currentWeek": 	student.get('currentWeek'),
						"currentFrame": student.get('currentFrame'),
						"mb": 			student.get('myersBriggs'),
						"attributes": 	student.get('attributes'),
						"profileImage": student.get('profileImage'),
						"createdAt": 	moment(curUser.createdAt),
						"daysCreated": 	days + ((days === 1)?" day":" days"),
						"index": 		student.get('index')
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
					"username": 	curUser.get("username"),
					"currentClass": student.get('currentClass'),
					"currentWeek": 	student.get('currentWeek'),
					"currentFrame": student.get('currentFrame'),
					"lastLesson": 	student.get('lastLesson'),
					"mb": 			student.get('myersBriggs'),
					"attributes": 	student.get('attributes'),
					"profileImage": student.get('profileImage')
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

						if (obj.get('user')) {
							obj.get('user').fetch({
								success:function(user) {
									tObjectList.push({
										"classes": 		obj.get('classes'),
										"first": 		user.get("firstName"),
										"last": 		user.get("lastName"),
										"username": 	user.get("username"),
										"email": 		user.get("email"),
										"currentClass": obj.get('currentClass'),
										"index": 		obj.get("index"),
										"id": 			obj.id,
										"userId": 		user.id,
										"profileImage": user.get("profileImage")
									});

									p.resolve();
								}
							});

							tpromises.push(p);
						}
					});
					
					$.when.apply($, tpromises).done(function(){
						def.resolve(tObjectList);
					});
				}
			
			});
			
			return(def.promise());
		},

		getAllStudentModel: function(queryObj) {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				query = new Parse.Query(StudentTable);

			query.limit(500);
			query.ascending("currentClass");
			if (queryObj) {
				_.each(queryObj, function(value, key) {
					query.equalTo(key, value);
				});
			}

			query.find({
				success:function(results) {
					var sObjectList = [],
						spromises = [];

					results.map(function(obj, idx) {
						var p = $.Deferred();
						
						if (obj.get('user')) {
							obj.get('user').fetch({
								success:function(user) {
									sObjectList.push({
										"classes": 		obj.get('classes'),
										"first": 		user.get("firstName"),
										"last": 		user.get("lastName"),
										"username": 	user.get("username"),
										"email": 		user.get("email"),
										"index": 		obj.get("index"),
										"mb": 			obj.get("myersBriggs"),
										"id": 			obj.id,
										"userId": 		user.id,
										"profileImage": obj.get("profileImage"),
										"currentClass": obj.get('currentClass'),
										"currentWeek": 	obj.get('currentWeek'),
										"currentFrame": obj.get('currentFrame'),
										"attributes": 	obj.get('attributes')
									});

									p.resolve();
								}
							});

							spromises.push(p);
						}
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
						if (obj.get('user')) {
							obj.get('user').fetch({
								success:function(user) {
									gObjectList.push({
										"class": 		obj.get('class'),
										"username": 	user.get("username"),
										"first": 		user.get("firstName"),
										"last": 		user.get("lastName"),
										"email": 		user.get("email"),
										"password": 	user.get("password"),
										"index": 		obj.get("index"),
										"id": 			obj.id,
										"userId": 		user.id,
										"profileImage": user.get("profileImage")
									});

									p.resolve();
								}
							});

							gpromises.push(p);
						}
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
				"username": user.get('username'),
				"first": 	user.get('firstName'),
				"last": 	user.get('lastName'),
				"email": 	user.get('email'),
				"password": user.get('password'),
				"type": 	user.get('type')
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
							index: 			result.get('index'),
							mb: 			result.get('myersBriggs'),
							first: 			result.get('user').get('firstName'),
							last: 			result.get('user').get('lastName'),
							profileImage: 	result.get('profileImage'),
							username: 		result.get('user').get('username'),
							email: 			result.get('user').get('email'),
							attributes: 	result.get('attributes'),
							userID: 		user.id
						};
						def.resolve(studentModel);
					}
				});
			});

			return(def.promise());
		},

		createTeacher:function(obj) {
			var def = $.Deferred(),
				TeacherTable = Parse.Object.extend("Teacher"),
				teacher = new TeacherTable(),
				user = new Parse.User();

			DukeApp.utils.findNextIndex("Teacher").done(function(idx) {
				user.set("username", obj.username);

				user.set("firstName", obj.firstname);
				user.set("lastName", obj.lastname);
				
				user.set("password", obj.password);
				user.set("email", obj.email);
				user.set("profileImage", 0);
				user.set("type", "teacher");
				user.set("teacherAccount", teacher);

				user.save(null, {
					success:function(){
						
						teacher.set("user", 		user);						
						teacher.set("index", 		idx);
						teacher.add("classes", 		obj.classIndex);
						teacher.set("currentClass", obj.classIndex);

						teacher.save();
						
						var ClassTable = Parse.Object.extend("Classes"),
							cQuery = new Parse.Query(ClassTable);
							
						cQuery.equalTo("index", obj.classIndex);

						cQuery.first(function(classObj){
							classObj.add("teachers", idx);
							classObj.save(null, {
								success:function(){
									def.resolve(true);
								}
							});

						});
					},
					error: function(obj, e) {
						def.resolve(false, e);
					}
				});
				
			});
			
			return(def.promise());
		},

		deleteTeacher:function(obj){
			var def = $.Deferred(),
				TeacherTable = Parse.Object.extend("Teacher"),
				ClassTable = Parse.Object.extend("Classes"),
				tQuery = new Parse.Query(TeacherTable);

			tQuery.equalTo("index", obj.index);
			tQuery.first(function(teacherObj){
				teacherObj.get('user').fetch({
					success:function(user) {
						teacherObj.destroy({
							success:function() {
								//remove all class references to teacher
								var cQuery = new Parse.Query(ClassTable);
								cQuery.equalTo("teachers", obj.index);
								cQuery.find({
									success:function(classes) {
										_.each(classes, function(cObj, idx) {
											cObj.remove('teachers', obj.index);
											cObj.save();
										});
										def.resolve();
									}
								});
							}
						});
					}
				});
			});
			
			return(def.promise());
		},

		editTeacher:function(obj) {
			var def = $.Deferred(),
				TeacherTable = Parse.Object.extend("Teacher"),
				tQuery = new Parse.Query(TeacherTable);

			tQuery.equalTo("index", obj.teacherIndex);
			tQuery.first(function(teacher) {
				teacher.get("user").fetch({
					success:function(user){
						def.resolve();
					}
				});
			});

			return(def.promise());
		},


		createStudent:function(obj) {
			var that = this,
				def = $.Deferred();
			
			if (!obj.hasOwnProperty("index")) {
				DukeApp.utils.findNextIndex("Student").done(function(idx) {
					that.createStudentLeaf(obj, idx).done(function(obj){
						def.resolve(obj);
					});
				});

				return def.promise();
			} else {
				var idx = obj.index;
				delete obj.index;
				return this.createStudentLeaf(obj, idx);

			}
		},

		createStudentLeaf:function(obj, idx) {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				student = new StudentTable(),
				user = new Parse.User();

			user.set("username", obj.username);

			user.set("firstName", obj.firstname);
			user.set("lastName", obj.lastname);
			
			user.set("password", obj.password);
			user.set("email", obj.email);
			user.set("profileImage", 0);
			user.set("type", "student");
			user.set("studentAccount", student);

			user.save(null, {
				success:function() {
					student.set("user", user);						
					student.set("index", idx);
					student.set("mb", "----");
					student.add("classes", obj.classIndex);
					student.set("currentClass", obj.classIndex);
					student.set("currentWeek", 0);
					student.set("attributes", [1,1,1,1,1,1,1,1,1,1]);
					student.save();
					

					var ClassTable = Parse.Object.extend("Classes"),
						cQuery = new Parse.Query(ClassTable);
					
					cQuery.equalTo("index", obj.classIndex);
					cQuery.first(function(classObj){
						classObj.add("students", idx);
						classObj.save(null, {
							success:function(){
								def.resolve(true);
							}
						});

					});
				},
				error: function(obj, e) {
					def.resolve(false, e);
				}
			});
			return(def.promise());
		},

		deleteStudent:function(obj){
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				ClassTable = Parse.Object.extend("Classes"),
				sQuery = new Parse.Query(StudentTable),
				that = this;

			sQuery.equalTo("index", obj.index);
			sQuery.first(function(studentObj){
				studentObj.get('user').fetch({
					success:function(user) {
						//delete user object	
						that.deleteUser(user.id).done(function() {
							//delete student object
							studentObj.destroy({
								success:function() {
									var cQuery = new Parse.Query(ClassTable);
									cQuery.equalTo("students", obj.index);
									cQuery.find({
										success:function(classes) {
											//delete student from classes
											_.each(classes, function(cObj, idx) {
												cObj.remove('students', obj.index);
												cObj.save();
											});

											def.resolve();
										}
									});
								}
							});
						});
					}
				});
			});
			
			return(def.promise());
		},

		editStudent:function(obj) {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				sQuery = new Parse.Query(StudentTable);

			sQuery.equalTo("index", obj.studentIndex);
			sQuery.first({
				success:function(student) {
					var save = false;
					if (obj.hasOwnProperty("classIndex") && obj.classIndex !== -99) {
						student.set('currentClass', obj.classIndex);
						save  = true;
					}

					if (obj.hasOwnProperty("mb") && obj.mb !== "") {
						student.set('myersBriggs', obj.mb);
						save  = true;
					}
					
					if (obj.hasOwnProperty("profileImage")) {
						student.set('profileImage', obj.profileImage);
						save  = true;
					}

					if (save) {
						student.save({
							success:function(){
								def.resolve();
							}
						});
					} else {
						def.resolve();
					}
				}
			});

			return(def.promise());
		},

		createGuest:function(obj) {
			var def = $.Deferred(),
				GuestTable = Parse.Object.extend("Guests"),
				guest = new GuestTable(),
				user = new Parse.User();

			DukeApp.utils.findNextIndex("Guests").done(function(idx){
				user.set("username", obj.username);
				user.set("firstName", "guest");
				user.set("lastName", idx);
				user.set("password", obj.password);
				user.set("lastName", String(idx));
				user.set("email", obj.email);
				user.set("profileImage", 0);
				user.set("type", "guest");
				user.set("guestAccount", guest);

				user.save(null, {
					success:function(){
						
						guest.set("user", user);						
						guest.set("index", idx);
						guest.set("class", obj.classIndex);
						guest.save();
						def.resolve(true);
					},
					error: function(obj, e) {
						def.resolve(false, e);
					}
				});
			});
			
			return(def.promise());
		},

		deleteGuest:function(obj){
			var def = $.Deferred(),
				GuestTable = Parse.Object.extend("Guests"),
				gQuery = new Parse.Query(GuestTable);

			gQuery.equalTo("index", obj.index);
			gQuery.first({
				success:function(guestObj){
					guestObj.destroy({
						success:function(){
							def.resolve();
						}
					});
				}
			});
			
			return(def.promise());
		},

		editGuest:function(obj) {
			var def = $.Deferred(),
				GuestTable = Parse.Object.extend("Guests"),
				gQuery = new Parse.Query(GuestTable);

			gQuery.equalTo("index", obj.guestIndex);
			gQuery.first({
				success:function(guest) {
					if (obj.classIndex !== -99) {
						guest.set('class', obj.classIndex);
						guest.save({
							success:function() {
								def.resolve();
							}
						});
					}
				}
			});

			return(def.promise());
		},

		getCurrentClass:function(obj){
			//so we will need to know the index and the account type
			//depending on the account type, we will have a different field name and table name
			//then we just run on that generic table and field, get the value and return it.
			var def = $.Deferred(),
				accountMap = {
				"student":{
					"table": "Student",
					"field": "currentClass"
				},
				"guest":{
					"table": "Guests",
					"field": "class"
				},
				"teacher":{
					"table": "Teacher",
					"field": "currentClass"
				}
			};

			var Table = Parse.Object.extend(accountMap[obj.type]),
				query = new Parse.Query(Table);

			query.equalTo("index", obj.index);
			query.find({
				success:function(field){
					var currentVal = field.get(accountMap[obj.type]);
					def.resolve({status:true, currentClass:currentVal});
				},
				error:function(field, e){
					def.resolve({status:false, msg:e.message});	
				}
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

	DukeApp.reqres.setHandler("all:user:studentModel:entities", function(obj){
		return API.getAllStudentModel(obj);
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

	DukeApp.reqres.setHandler("create:user:teacher:entities", function(obj){
		return API.createTeacher(obj);
	});

	DukeApp.reqres.setHandler("delete:user:teacher:entities", function(obj){
		return API.deleteTeacher(obj);
	});

	DukeApp.reqres.setHandler("edit:user:teacher:entities", function(obj){
		return API.editTeacher(obj);
	});

	DukeApp.reqres.setHandler("create:user:student:entities", function(obj){
		return API.createStudent(obj);
	});

	DukeApp.reqres.setHandler("delete:user:student:entities", function(obj){
		return API.deleteStudent(obj);
	});

	DukeApp.reqres.setHandler("edit:user:student:entities", function(obj){
		return API.editStudent(obj);
	});

	DukeApp.reqres.setHandler("create:user:guest:entities", function(obj){
		return API.createGuest(obj);
	});

	DukeApp.reqres.setHandler("delete:user:guest:entities", function(obj){
		return API.deleteGuest(obj);
	});

	DukeApp.reqres.setHandler("edit:user:guest:entities", function(obj){
		return API.editGuest(obj);
	});

	DukeApp.reqres.setHandler("user:getCurrentClass:entities", function(obj){
		return API.getCurrentClass(obj);
	});
});