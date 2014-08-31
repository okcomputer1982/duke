DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.FrameTemplate = Backbone.Model.extend({});

	var frameTemplates;

	var makeTemplateObjectById = function(id) {
		var m = frameTemplates.at(id);
		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var API = {
		setEventLog: function(data) {
			var def = $.Deferred(),
				EventLogTable = Parse.Object.extend("EventLog"),
				eventLog = new EventLogTable();

			eventLog.save(data,{
				success:function(eventLog){
					def.resolve({success:true});
				},
				error:function(eventLog, error){
					def.resolve({success:false});
				}
			});

			def.resolve();
			
			return def.promise();
		}
	};

	DukeApp.reqres.setHandler("eventLog:entities", function(data){
		return API.setEventLog(data);
	});
});