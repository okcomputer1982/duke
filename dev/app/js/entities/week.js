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

	Entities.ClassTempalteCollection = Backbone.Collection.extend({
		model:Entities.ClassTemplate
	});

	Entities.Class = Backbone.Model.extend({});

	Entities.ClassCollection = Backbone.Collection.extend({
		model:Entities.Class
	});

	var frameTemplates, frames, weeks, classes, classTemplates;

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

	var initializeClassTemplates = function() {
		var def = $.Deferred();

		if (classTemplates === undefined) {
			var ClassTemplateTable = Parse.Object.extend("ClassTemplates");

			var query = new Parse.Query(ClassTemplateTable);
			query.find(function(results) {
				var ctObjectList = [];

				results.map(function(obj, id){
					ctObjectList.push({
						"index": obj.get('index'),
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
		query.find(function(results) {
			var frameObjectList = [],
				frameCollection;
			
			results.map(function(obj, id){
				frameObjectList.push({
					"id": 			obj.id,
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
			query.ascending("index");
		query.get(id, {
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
				
		if (weeks === undefined){
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
						var template = classTemplates.models[result.get('template')];

						var classModel = new Entities.Class({
							index: 		result.get('index'),
							template: 	result.get('template'),
							weeks: 		template.get('weeks')
						});

						def.resolve(classModel);
					}
				});
			});
			
			return def.promise();
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

	DukeApp.reqres.setHandler("class:entities", function(id){
		return API.getClassModel(id);
	});
});