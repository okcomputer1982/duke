DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _) {
	var API = {
		
		getQuizes: function(userID){
			var def = $.Deferred();

			var QuizTable = Parse.Object.extend("Quizes"),
				query = new Parse.Query(QuizTable);

			query.equalTo("userID", userID);

			query.find(function(results) {
				var quizes = [];
				_.map(results, function(obj, id) {
					quizes.push({
						"frameIndex":obj.get('frameIndex'),
						"response":obj.get('response'),
						"classIndex":obj.get('classIndex')
					});
				});

				def.resolve(quizes);
			});

			return(def.promise());
		},

		setQuiz:function(quizObj) {
			var def = $.Deferred(),
				QuizTable = Parse.Object.extend("Quizes"),
				query = new Parse.Query(QuizTable);

			query.equalTo("frameIndex", quizObj.frameIndex);
			query.equalTo("classIndex", quizObj.classIndex);
			query.equalTo("userID", 	quizObj.userID);

			query.find(function(results){
				var quiz;
				
				if (results.length === 0) {
					quiz = new QuizTable();

					quiz.save(quizObj,{
						success:function(journal) {
							def.resolve({success:true});
						},
						error:function(journal, error) {
							def.resolve({success:false, error:error});
						}
					});
				} else {
					alert("Quiz already submitted.");
					def.response({success:false});
				}
			});

			return(def.promise());
		}
	};

	DukeApp.reqres.setHandler("quizes:entities", function(userID) {
		return API.getQuizes(userID);
	});

	DukeApp.reqres.setHandler("save:quizes:entities", function(quizObj) {
		return API.setQuiz(quizObj);
	});
});