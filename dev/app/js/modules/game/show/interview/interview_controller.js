DukeApp.module("Game.Show.Interview", function(Interview, DukeApp, Backbone, Marionette, $, _) {
	Interview.Controller = {
		init:function(){
			var gameData = DukeApp.request("game:entities", 1).get("data");
			Interview.Controller.gameData = gameData;
			Interview.Controller.gameData.questions = _.shuffle(gameData.questions);
			Interview.Controller.loadingScreen();
		},

		loadingScreen:function() {
			var stage = new createjs.Stage("game_container"),
				loadScreenCon = new createjs.Container(),
				loadBkg = new createjs.Shape(),
				loadText =  new createjs.Text("Loading...", "bold 20px Helvetica", "#000000");

			loadBkg.graphics.beginFill("#97d5e8").drawRect(0,0,960,565);
			loadScreenCon.addChild(loadBkg);
			loadScreenCon.addChild(loadText);

			loadText.x = 950/2 - loadText.getMeasuredWidth()/2;
			loadText.y = 565/2;

			stage.addChild(loadScreenCon);
			stage.update();

			Interview.Controller.stage = stage;
			this.loadResourses();
		},

		loadResourses:function() {
			var baseDir =  "../images/game",
				queue = new createjs.LoadQueue(),
				queueValues = [
						{id:"screen1_bg", src:baseDir + "/interview/screen1/bg.png"},
						{id:"screen2_bg", src:baseDir + "/interview/screen2/bg.png"},
						{id:"screen1_talk_bubble", src:baseDir + "/interview/screen1/talk_bubble.png"},
						{id:"talk_bubble", src:baseDir + "/interview/screen1/talk_bubble.png"},
						{id:"type_area", src:baseDir + "/interview/screen1/type_area.png"},
						{id:"button", src:baseDir + "/interview/general/button.png"},
						{id:"button_selected", src:baseDir + "/interview/general/selected_button.png"}
				];

			_.each(_.range(4), function(idx){
				queueValues.push({id:"avatar" + idx, src:baseDir + "/interview/avatars/avatar" + idx + ".png"});
			});

			Interview.Controller.gameResources = queue;
				
			queue.loadManifest(queueValues);
			queue.addEventListener("complete", this.loadGame);
		},

		loadScreen:function(){
			var stage = Interview.Controller.game;
			var loadScreen = createjs.Container();

			var loadBkg = new createjs.Shape();
			loadBkg.graphics.beginFill("#ff0000").drawRect(0,0,200, 200);

			loadScreen.addChild(loadBkg);
			stage.addChild(loadScreen);
			stage.update();
		},

		loadGame:function(e) {
			var that = Interview.Controller,
				resources = Interview.Controller.gameResources,
				stage = Interview.Controller.stage;

			var buttonContainer = new createjs.Container(),
				questionContainer = new createjs.Container(),
				background1 = new createjs.Bitmap(resources.getResult("screen1_bg")),
				talkBubble = new createjs.Bitmap(resources.getResult("screen1_talk_bubble")),
				type_area = new createjs.Bitmap(resources.getResult("type_area")),
				button = new createjs.Bitmap(resources.getResult("button")),
				selected_button = new createjs.Bitmap(resources.getResult("selected_button")),
				questionText = new createjs.Text("", "bold 20px Helvetica", "#000000"),
				buttonText = new createjs.Text("SAY", "bold 30px Helvetica", "#ffffff"),
				avatar = new createjs.Bitmap(resources.getResult("avatar0")),
				textInputElement = new createjs.DOMElement(document.getElementById("answer_input"));
				

			avatar.x = 25;
			avatar.y = 25;

			//say button
			questionContainer.addChild(talkBubble);
			questionContainer.addChild(questionText);

			questionText.x = 365;
			questionText.y = 190/2 - questionText.getMeasuredHeight()/2;
			questionText.lineWidth = 650;
			questionText.lineHeight = 25;
			questionText.textAlign = "center";

			questionContainer.x = 220;
			questionContainer.y = 25;

			//say button
			buttonContainer.addChild(button);
			buttonContainer.addChild(buttonText);

			buttonText.x = buttonContainer.getBounds().width/2 - buttonText.getMeasuredWidth()/2;
			buttonText.y = 15;
			
			buttonContainer.x = 960/2 - buttonContainer.getBounds().width/2;
			buttonContainer.y = 480;
			
			textInputElement.x = 25;
			textInputElement.y = 250;

			$("#answer_input").show();
			

			//add to stage
			stage.addChild(background1);
			stage.addChild(avatar);
			stage.addChild(questionContainer);
			stage.addChild(buttonContainer);
			stage.addChild(textInputElement);

			stage.update();

			//set ticker for animations
			stage.enableMouseOver(30);
			createjs.Ticker.addEventListener("tick", stage);

			//set globals
			Interview.Controller.sayButton = {container:buttonContainer, bkg:button, text:buttonText};
			Interview.Controller.questionBox = {container:questionContainer, text:questionText};
			Interview.Controller.answerBox = {container:questionContainer, text:questionText};
			Interview.Controller.background1 = background1;
			Interview.Controller.avatar = avatar;

			Interview.Controller.maxQuestions  = Interview.Controller.gameData.questions.length;
			Interview.Controller.totalQuestions  = 10;
			Interview.Controller.answerLog  = [];
			Interview.Controller.currentLevel = 0;
			Interview.Controller.state = "questions";
			Interview.Controller.setLevel(0);

			//set selection button events
			buttonContainer.addEventListener("mouseover", function(e){
				button.image = resources.getResult("button_selected");
			});

			buttonContainer.addEventListener("mouseout", function(e){
				button.image = resources.getResult("button");
			});

			buttonContainer.addEventListener("click", that.nextQuestionEvent);

			//this.document.onkeydown = that.keyboardHandler;
		},

		// keyboardHandler:function(event){
		// 	var that = Interview.Container;

		// 	if (event.keyCode === 13) {
		// 		switch(that.state){
		// 			case("questions"):
		// 				that.nextQuestionEvent();
		// 				break;
		// 			case("answers"):
		// 				that.downloadEvent();
		// 				break;
		// 		}
		// 	}
		// },

		nextQuestionEvent: function(){
			var that = Interview.Controller,
				answer = $("#answer_input").val();

			if (answer === "") {
				alert("Please provide an answer the question.");
			} else {
				that.answerLog.push({question:that.gameData.questions[that.currentLevel].text, answer:answer});
				that.setLevel(that.currentLevel + 1);
			}
		},

		downloadEvent: function(){
			var that = Interview.Controller,
				answerLog = that.answerLog,
				result = "Interview Game Results for \"A Student's Journey\"";
			
			result += "\nCompleted: " + moment().format('MMMM Do YYYY, h:mm:ss a');
			result += "\nCompleted by: " + DukeApp.utils.getCurrentUsername();
			result += "\n_________________________________________________________";

			_.each(answerLog, function(obj, idx){
				result += "\n\nQuestion " + (idx + 1) + ":";
				result += "\n Prompt: " + obj.question;
				result += "\n Answer: " + obj.answer;
			});

			console.log(result);

			var blob = new Blob([result], {type: "text/plain;charset=utf-8"});
			saveAs(blob, "InterviewGame.txt");

			that.destroy();
		},

		setLevel:function(curLevel) {
			var that = Interview.Controller,
				currentQuestion = Interview.Controller.gameData.questions[curLevel],
				stage = Interview.Controller.stage,
				answerLog = Interview.Controller.answerLog;

			//if the level is equal to the end, go the completion screen
			if (curLevel === that.totalQuestions)
				that.createEndScreen();
			else {
				that.questionBox.text.text = currentQuestion.text;
				$("#answer_input").val("");
				stage.update();
			}

			that.currentLevel = curLevel;
		},

		createEndScreen:function(){
			var that = Interview.Controller,
				stage = Interview.Controller.stage,
				resources = Interview.Controller.gameResources;

			//set state
			Interview.Controller.state = "answers";

			//remove the old
			var removeList = [	
								that.avatar, that.background1, 								
								that.questionBox.text, that.questionBox.container,
								that.answerBox.text, that.answerBox.container
							];

			$("#answer_input").hide();

			_.each(removeList, function(obj){
				stage.removeChild(obj);
			});

			delete that.questionBox;
			delete that.answerBox;

			//add in the new
			var background2 = new createjs.Bitmap(resources.getResult("screen2_bg")),
				reviewTitle = new createjs.Text("REVIEW", "bold 40px Helvetica", "#000000");
				reviewOutline = new createjs.Text("REVIEW", "bold 40px Helvetica", "#97d5e8");

			reviewTitle.x = reviewOutline.x = 960/2 - reviewTitle.getMeasuredWidth()/2;
			reviewTitle.y = reviewOutline.y = 10;
			reviewOutline.outline = 1;

			that.sayButton.text.text = "DOWNLOAD";
			that.sayButton.text.x = that.sayButton.container.getBounds().width/2 - that.sayButton.text.getMeasuredWidth()/2 - 10;

			that.sayButton.container.removeEventListener("click", that.nextQuestionEvent);
			that.sayButton.container.addEventListener("click", that.downloadEvent);

			stage.addChild(background2);
			stage.addChild(reviewTitle);
			stage.addChild(reviewOutline);
			stage.setChildIndex(that.sayButton.container, stage.getNumChildren()-1)

			stage.update();
		},

		destroy:function() {
			var that = Interview.Controller,
				stage = that.stage;

			stage.removeChild(that.sidebarDisplay);
			stage.removeChild(that.universityContainer);

			$("#game_modal").modal('hide');
		}
	};
});