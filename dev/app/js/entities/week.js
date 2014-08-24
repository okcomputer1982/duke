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
	
	Entities.Class = Backbone.Model.extend({});

	Entities.ClassCollection = Backbone.Collection.extend({
		model:Entities.Class
	});

	var frameTemplates, frames, weeks, classes;

	var makeTemplateObjectById = function(id) {
		var m = frameTemplates.at(id);
		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var makeTemplateObjectByName = function(name) {
		var m = frameTemplates.find(function(item) {
			return item.get('name') == name;
		});

		return({name: m.get('name'), glyph: m.get('glyph')});
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
						"index": obj.get('index')
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
					"content": 	obj.get('content'),
					"name": 	obj.get('name'),
					"type": 	obj.get('type'),
					"week": 	obj.get('week'),
					"weekItem": id,
					"template": makeTemplateObjectByName(obj.get('type'))
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

		query.get(id, {
			success:function(frame) {
				def.resolve({
					"content": 	frame.get('content'),
					"name": 	frame.get('name'),
					"type": 	frame.get('type'),
					"week": 	frame.get('week'),
					"weekItem": frame,
					"template": makeTemplateObjectByName(frame.get('type'))
				});
			}
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
							"id": obj.get('index')
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
		getFrameById: function(id) {
			var def = $.Deferred();

			initializeFrameTemplates().done(function() {
				getFrameById(id).done(function(frameCollection) {
					def.resolve(frameCollection);
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
				that = this,
				ClassTable = Parse.Object.extend("Classes"),
				query = new Parse.Query(ClassTable);

			query.equalTo("index", id);
			
			query.find({
				success: function(results) {
					//need to convert to a model
					var classModel = new Entities.Class({
						index:results[0].get('index'),
						weeks:results[0].get('weeks')
					});

					def.resolve(classModel);
				}
			});
			
			return def.promise();
		}
	};


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