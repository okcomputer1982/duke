DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.FrameTemplate = Backbone.Model.extend({});

	var frameTemplates;

	var makeTemplateObjectById = function(id) {
		var m = frameTemplates.at(id);
		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var saveEventLog = function(data, def) {
		var EventLogTable = Parse.Object.extend("EventLog"),
			eventLog = new EventLogTable();

		eventLog.save(data, {
			success:function(eventLog){
				def.resolve({success:true});
			},
			error:function(eventLog, error){
				def.resolve({success:false});
			}
		});
	};

	var API = {
		setEventLog: function(data) {
			var def = $.Deferred();
				EventLogTable = Parse.Object.extend("EventLog");

			if (!data.allowRepeat) {
				var query = new Parse.Query(EventLogTable);

				query.equalTo("contentIndex", 	data.contentIndex);
				query.equalTo("contentStatus", 	data.contentStatus);
				query.equalTo("studentId", 		data.studentId);
				query.equalTo("eventType", 		data.eventType);
				query.equalTo("classIndex", 	data.classIndex);

				query.find(function(results) {

					if (results.length > 0) {
						def.resolve({success:false, warning:"noRepeat"});
						return;
					} else {
						saveEventLog(data, def);
					}
				});
			} else {
				saveEventLog(data, def);
			}

			return def.promise();
		},

		getEventLogs:function(obj) {
			var def = $.Deferred(),
				EventLogTable = Parse.Object.extend("EventLog"),
				query = new Parse.Query(EventLogTable);

			query.equalTo("studentId", obj.studentId);
			query.equalTo("classIndex", obj.classIndex);
			query.equalTo("eventType", obj.eventType);
			
			query.find({
				success:function(logs) {
					var logObjList  = [];
					_.each(logs, function(obj, idx){
						var eObj = {
							"frameIndex": 	obj.get('contentIndex'),
							"status": 		obj.get('contentStatus'),
							"eventType": 	obj.get('eventType'),
							"classIndex": 	obj.get('classIndex'),
							"studentId": 	obj.get('studentId'),
							"data": 		obj.get('contentData')
						};
						logObjList.push(eObj);
					});

					def.resolve(logObjList);
				}
			});

			return def.promise();
		}
	};

	DukeApp.reqres.setHandler("eventLogs:entities", function(obj){
		return API.getEventLogs(obj);
	});

	DukeApp.reqres.setHandler("set:eventLog:entities", function(data){
		return API.setEventLog(data);
	});
});