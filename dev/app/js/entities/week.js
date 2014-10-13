DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.FrameTemplate = Backbone.Model.extend({});

	Entities.FrameTemplateCollection = Backbone.Collection.extend({
		model: Entities.FrameTemplate
	});

	Entities.FrameModel = Backbone.Model.extend({});
			
	Entities.FrameCollection = Backbone.Collection.extend({
		model: Entities.FrameModel
	});

	Entities.Week = Backbone.Model.extend({});

	Entities.WeekCollection = Backbone.Collection.extend({
		model:Entities.Week
	});

	Entities.ClassTemplate = Backbone.Model.extend({});

	Entities.ClassTemplateCollection = Backbone.Collection.extend({
		model:Entities.ClassTemplate
	});

	Entities.Class = Backbone.Model.extend({});

	Entities.ClassCollection = Backbone.Collection.extend({
		model:Entities.Class
	});

	var frameTemplates, frames, weeks, classTemplates;

	var makeTemplateObjectById = function(id) {
		var m = frameTemplates.at(id);
		return({name: m.get('name'), glyph: m.get('glyph'), attrTarget: m.get('attrTarget')});
	};

	var makeTemplateObjectByName = function(name) {
		var m = frameTemplates.find(function(item) {
			return item.get('name') == name;
		});

		return({name: m.get('name'), glyph: m.get('glyph'), attrTarget: m.get('attrTarget')});
	};

	var makeClassTemplateObjectById = function(id) {
		var template = classTemplates.models[id],
			model = {
				title:template.get('title'),
				index:template.get('index'),
				weeks:template.get('weeks')
			};

			return model;
	};

	var initializeClassTemplates = function() {
		var def = $.Deferred();

		if (classTemplates === undefined) {
			var ClassTemplateTable = Parse.Object.extend("ClassTemplates");

			var query = new Parse.Query(ClassTemplateTable);
			query.ascending("index");

			query.find(function(results) {
				var ctObjectList = [];

				results.map(function(obj, id){
					ctObjectList.push({
						"index": obj.get('index'),
						"title": obj.get('title'),
						"weeks": obj.get('weeks')
					});
				});

				classTemplates = new Entities.FrameTemplateCollection(ctObjectList);

				def.resolve();
			});
		} else {
			def.resolve();
		}

		return(def.promise());
	};

	var initializeFrameTemplates = function() {
		var def = $.Deferred();

		if (frameTemplates === undefined) {
			var FrameTemplateTable = Parse.Object.extend("FrameTemplates");

			var query = new Parse.Query(FrameTemplateTable);
			query.find(function(results) {
				var ftObjectList = [];

				results.map(function(obj, id){
					ftObjectList.push({
						"glyph": obj.get('glyph'),
						"name": obj.get('name'),
						"index": obj.get('index'),
						"attrTarget": obj.get('attrTarget')
					});
				});

				frameTemplates = new Entities.FrameTemplateCollection(ftObjectList);

				def.resolve();
			});
		} else {
			def.resolve();
		}

		return(def.promise());
	};
	var getFramesByWeek = function(id) {
		var def = $.Deferred(),
			FrameTable = Parse.Object.extend("Frames"),
			query = new Parse.Query(FrameTable);

		query.equalTo("week", id);
		query.ascending("index");
		query.find(function(results) {
			var frameObjectList = [],
				frameCollpection;

			results.map(function(obj, id){
				frameObjectList.push({
					"id": 			obj.id,
					"index": 		obj.get('index'),
					"content": 		obj.get('content'),
					"name": 		obj.get('name'),
					"type": 		obj.get('type'),
					"week": 		obj.get('week'),
					"attributes": 	obj.get('attributes'),
					"weekItem": 	id,
					"template": 	makeTemplateObjectByName(obj.get('type'))
				});
			});

			frameCollection = new Entities.FrameCollection(frameObjectList);
			def.resolve(frameCollection);
		});

		return(def.promise());
	};

	var getFrameById = function(id) {
		var def = $.Deferred(),
			FrameTable = Parse.Object.extend("Frames"),
			query = new Parse.Query(FrameTable);
			query.equalTo("index", id);
			
		query.first({
			success:function(frame) {
				def.resolve({
					"id": 			frame.id,
					"index": 		frame.index,
					"content": 		frame.get('content'),
					"name": 		frame.get('name'),
					"type": 		frame.get('type'),
					"week": 		frame.get('week'),
					"attributes": 	frame.get('attributes'),
					"weekItem": 	frame,
					"template": 	makeTemplateObjectByName(frame.get('type'))
				});
			},
			error:function(f, error) {
				console.log(error);
			}
		});

		return(def.promise());
	};

	var getFrameByIndex = function(index) {
		var def = $.Deferred(),
			FrameTable = Parse.Object.extend("Frames"),
			query = new Parse.Query(FrameTable);

		query.equalTo("index", index);
		query.first(function(frame) {
			def.resolve({
				"id": 			frame.id,
				"index": 		frame.get('index'),
				"content": 		frame.get('content'),
				"name": 		frame.get('name'),
				"type": 		frame.get('type'),
				"week": 		frame.get('week'),
				"attributes": 	frame.get('attributes'),
				"weekItem": 	frame,
				"template": 	makeTemplateObjectByName(frame.get('type'))
			});	
		});

		return(def.promise());
	};

	var initializeWeeks = function() {
		var def = $.Deferred(),
			that = this;
				
		if (weeks === undefined) {
			var WeekTable = Parse.Object.extend("Weeks"),
			query = new Parse.Query(WeekTable);
			query.find({
				success:function(results){
					var weekObjectList = [];
					results.map(function(obj, id){
						weekObjectList.push({
							"id": obj.get('index'),
							"frames": obj.get('frames')
						});
					});

					weeks = new Entities.WeekCollection(weekObjectList);
					def.resolve();
				}
			});
		} else {
			def.resolve();
		}

		return(def.promise());
	};

	var API = {
		getFrameByIndex: function(index) {
			var def = $.Deferred();

			initializeFrameTemplates().done(function() {
				getFrameByIndex(index).done(function(frame) {
					def.resolve(frame);
				});
			});

			return def.promise();
		},

		getFrameById: function(id) {
			var def = $.Deferred();

			initializeFrameTemplates().done(function() {
				getFrameById(id).done(function(frame) {
					def.resolve(frame);
				});
			});

			return def.promise();
		},

		getFramesByWeek: function(id) {
			var def = $.Deferred();

			initializeFrameTemplates().done(function() {
				getFramesByWeek(id).done(function(frameCollection) {
					def.resolve(frameCollection);
				});
			});

			return def.promise();
		},

		getWeekModels: function(){
			var def = $.Deferred();

			initializeWeeks().done(function(){
				def.resolve(weeks);
			});
			
			return def.promise();
		},

		getClassModel: function(id) {
			var def = $.Deferred(),
				that = this;

			initializeClassTemplates().done(function(){
				var	ClassTable = Parse.Object.extend("Classes"),
					query = new Parse.Query(ClassTable);

				query.equalTo("index", id);
				query.first({
					success: function(result) {
						//need to convert to a model
						var classModel = new Entities.Class({
							index: 		result.get('index'),
							name: 		result.get('name'),
							students: 	result.get('students'),
							scheduling: result.get('scheduling'),
							template: 	makeClassTemplateObjectById(result.get('template')),
						});

						def.resolve(classModel);
					}
				});
			});
			
			return def.promise();
		},

		getAllClassModel: function() {
			var def = $.Deferred(),
				that = this;

			initializeClassTemplates().done(function(){
				var	ClassTable = Parse.Object.extend("Classes"),
					query = new Parse.Query(ClassTable);

				query.find({
					success: function(results) {
						var cObjectList = [];

						results.map(function(obj, id){
							cObjectList.push({
								index: 		obj.get('index'),
								name: 		obj.get('name'),
								students: 	obj.get('students'),
								scheduling: obj.get('scheduling'),
								template: 	makeClassTemplateObjectById(obj.get('template')),
							});
						});

						def.resolve(cObjectList);
					}
				});
			});
			
			return def.promise();
		},

		getAllClassTemplatesModel: function() {
			var def = $.Deferred();

			initializeClassTemplates().done(function(){
				var ctObjectList = [];
				classTemplates.models.map(function(obj){
					ctObjectList.push({
						index:obj.get('index'),
						title:obj.get('title'),
						weeks:obj.get('weeks')
					});
				});

				def.resolve(ctObjectList);
			});

			return(def.promise());
		},

		createClass:function(data) {
			var def = $.Deferred(),
				ClassTable = Parse.Object.extend("Classes"),
				newClass = new ClassTable();
			
			newClass.set("template", data.classTemplate);
			DukeApp.utils.findNextIndex("Classes").done(function(classId){
				newClass.set("name", data.name);
				newClass.set("index", classId);
				newClass.addUnique("teachers", data.teacherTemplate);
				newClass.save(null, {
					success:function(classObj) {
						var TeacherTable = Parse.Object.extend("Teacher"),
							query = new Parse.Query(TeacherTable);

						query.equalTo("index", data.teacherTemplate);
						query.first({
							success:function(teacher) {
								teacher.addUnique("classes", classId);
								teacher.save(null, {
									success:function(){
										def.resolve({status:true, object:classObj});
									}
								});
							}
						});
					},
					error: function(obj, e) {
						def.resolve({status:false, object:e});
					}
				});
					
			});
		

			return(def.promise());
		},

		deleteClass:function(data) {
			var def = $.Deferred(),
				ClassTable = Parse.Object.extend("Classes"),
				StudentTable = Parse.Object.extend("Student"),
				TeacherTable = Parse.Object.extend("Teacher"),
				cQuery = new Parse.Query(ClassTable);

			//find the class and kill it
			cQuery.equalTo("index", data.classIndex);
			cQuery.first({
				success:function(classObj) {
					classObj.destroy({
						success: function(classObj) {
							//remove all references from all students
							var sQuery = new Parse.Query(StudentTable);
							sQuery.equalTo("classes", data.classIndex);
							sQuery.find({
								success:function(students) {
									_.each(students, function(obj, idx) {
										obj.remove("classes", data.classIndex);
										obj.save();
									});
								}
							});

							//remove all references from all teachers
							var tQuery = new Parse.Query(TeacherTable);
							tQuery.equalTo("classes", data.classIndex);
							tQuery.find({
								success:function(teachers) {
									_.each(teachers, function(obj, idx){
										obj.remove("classes", data.classIndex);
										obj.save();
									});
								}
							});

							def.resolve();
						}
					});
				}
			});
			
			return(def.promise());
		},

		getClassByIndex:function(obj){
			var def = $.Deferred(),
				ClassTable = Parse.Object.extend("Classes"),
				query = new Parse.Query(ClassTable);

			query.equalTo("index", obj.index);
			query.first({
				success:function(c) {
					var classObj = {
						students:c.get('students'),
						teachers:c.get('teachers'),
						index:c.get('index'),
						scheduling:c.get('scheduling'),
						template:c.get('template'),
						createdAt:c.createdAt,
						lastEdited:c.updatedAt
					};

					def.resolve(classObj);
				}
			});

			return(def.promise());
		},

		addStudentToClass:function(obj) {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				ClassTable = Parse.Object.extend("Classes"),
				sQuery = new Parse.Query(StudentTable),
				cQuery = new Parse.Query(ClassTable);

			sQuery.equalTo("index", obj.index);
			cQuery.equalTo("index", obj.classIndex);
			//find student
			sQuery.first({
				success:function(s) {
					//remove class from student
					s.add("classes", obj.classIndex);
					s.save(null, {
						success: function(){
							cQuery.first({
								success:function(c){
									//remove teacher from class	
									c.add("students", obj.index);
									c.save(null, {
										success:function() {
											def.resolve();
										}
									});
								}
							});
						}
					});
				}
			});


			return(def.promise());
		},

		addTeacherToClass:function(obj) {
			var def = $.Deferred(),
				TeacherTable = Parse.Object.extend("Teacher"),
				ClassTable = Parse.Object.extend("Classes"),
				tQuery = new Parse.Query(TeacherTable),
				cQuery = new Parse.Query(ClassTable);

			tQuery.equalTo("index", obj.index);
			cQuery.equalTo("index", obj.classIndex);
			//find teacher
			tQuery.first({
				success:function(t) {
					//remove class from teacher
					t.add("classes", obj.classIndex);
					t.save(null, {
						success: function(){
							cQuery.first({
								success:function(c){
									//remove teacher from class	
									c.add("teachers", obj.index);
									c.save(null, {
										success:function() {
											def.resolve();
										}
									});
								}
							});
						}
					});
				}
			});


			return(def.promise());
		},

		removeStudentFromClass:function(obj) {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				ClassTable = Parse.Object.extend("Classes"),
				sQuery = new Parse.Query(StudentTable),
				cQuery = new Parse.Query(ClassTable);

			sQuery.equalTo("index", obj.index);
			cQuery.equalTo("index", obj.classIndex);
			//find teacher
			sQuery.first({
				success:function(s) {
					//remove class from student
					s.remove("classes", obj.classIndex);
					s.save(null, {
						success: function(){
							cQuery.first({
								success:function(c){
									//remove student from class	
									c.remove("students", obj.index);
									c.save(null, {
										success:function() {
											def.resolve();
										}
									});
								}
							});
						}
					});
				}
			});


			return(def.promise());
		},

		removeTeacherFromClass:function(obj) {
			var def = $.Deferred(),
				TeacherTable = Parse.Object.extend("Teacher"),
				ClassTable = Parse.Object.extend("Classes"),
				tQuery = new Parse.Query(TeacherTable),
				cQuery = new Parse.Query(ClassTable);

			tQuery.equalTo("index", obj.index);
			cQuery.equalTo("index", obj.classIndex);
			//find teacher
			tQuery.first({
				success:function(t) {
					//remove class from teacher
					t.remove("classes", obj.classIndex);
					t.save(null, {
						success: function(){
							cQuery.first({
								success:function(c){
									//remove teacher from class	
									c.remove("teachers", obj.index);
									c.save(null, { 

										success:function() {
											def.resolve();
										}
									});
								}
							});
						}
					});
				}
			});

			
			return(def.promise());
		},

		setTeacherDefaultClass:function(obj) {
			var def = $.Deferred(),
				TeacherTable = Parse.Object.extend("Teacher"),
				query = new Parse.Query(TeacherTable);

			query.equalTo("index", obj.index);
			query.first({
				success:function(teacher){
					teacher.set("currentClass", obj.classIndex);
					teacher.save(null, {
						success:function(obj){
							def.resolve();
						}
					});
				}
			});
			return(def.promise());
		},

		setStudentDefaultClass:function(obj) {
			var def = $.Deferred(),
				StudentTable = Parse.Object.extend("Student"),
				query = new Parse.Query(StudentTable);

			query.equalTo("index", obj.index);
			query.first({
				success:function(student){
					student.set("currentClass", obj.classIndex);
					student.save(null, {
						success:function(obj){
							def.resolve();
						}
					});
				}
			});
			return(def.promise());
		},
		setScheduleDayClass:function(obj) {
			var def = $.Deferred(),
				ClassTable = Parse.Object.extend('Classes'),
				query = new Parse.Query(ClassTable);

			query.equalTo("index", obj.classIdx);
			query.first({
				success:function(c){
					var scheduling = c.get('scheduling');

					scheduling[obj.dayIdx] = obj.status;

					c.set('scheduling', scheduling);

					c.save(null, {
						success:function(){
							def.resolve({status:true});
						},
						error:function(result, e) {
							def.resolve({status:false, error:e});
						}
					});
				}
			});
			
			return(def.resolve());
		}
	};


	DukeApp.reqres.setHandler("frameByIndex:entities", function(index){
		return API.getFrameByIndex(index);
	});

	DukeApp.reqres.setHandler("frameById:entities", function(index){
		return API.getFrameById(index);
	});

	DukeApp.reqres.setHandler("frameByWeek:entities", function(id){
		return API.getFramesByWeek(id);
	});

	DukeApp.reqres.setHandler("week:entities", function(){
		return API.getWeekModels();
	});

	DukeApp.reqres.setHandler("classByIndex:entities", function(id){	
		return API.getClassByIndex({index:id});
	});

	DukeApp.reqres.setHandler("class:entities", function(id){	
		return API.getClassModel(id);
	});

	DukeApp.reqres.setHandler("all:class:entities", function(){
		return API.getAllClassModel();
	});

	DukeApp.reqres.setHandler("all:classTemplates:entities", function(){
		return API.getAllClassTemplatesModel();
	});

	DukeApp.reqres.setHandler("create:class:entities", function(obj) {	
		return API.createClass(obj);
	});

	DukeApp.reqres.setHandler("delete:class:entities", function(obj) {	
		return API.deleteClass(obj);
	});

	DukeApp.reqres.setHandler("add:class:student:entities", function(obj) {	
		return API.addStudentToClass(obj);
	});

	DukeApp.reqres.setHandler("add:class:teacher:entities", function(obj) {	
		return API.addTeacherToClass(obj);
	});

	DukeApp.reqres.setHandler("remove:class:student:entities", function(obj) {	
		return API.removeStudentFromClass(obj);
	});

	DukeApp.reqres.setHandler("remove:class:teacher:entities", function(obj) {	
		return API.removeTeacherFromClass(obj);
	});

	DukeApp.reqres.setHandler("set:defaultclass:teacher:entities", function(obj) {	
		return API.setTeacherDefaultClass(obj);
	});

	DukeApp.reqres.setHandler("set:defaultclass:student:entities", function(obj) {	
		return API.setStudentDefaultClass(obj);
	});

	DukeApp.reqres.setHandler("set:scheduleDay:class:entities", function(obj) {	
		return API.setScheduleDayClass(obj);
	});
});