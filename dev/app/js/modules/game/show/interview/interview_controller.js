DukeApp.module("Game.Show.Interview", function(Interview, DukeApp, Backbone, Marionette, $, _) {
	Interview.Controller = {
		init:function(){
			var gameData = DukeApp.request("game:entities", 1).get("data");
			Interview.Controller.gameData = gameData;
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
						{id:"type_area", src:baseDir + "/interview/screen1/type_area.png"}						
				]

			_.each(_.range(1), function(idx){
				queueValues.push({id:"avatar" + idx, src:"../images/avatars/avatar" + idx + ".png"});
			});

			Interview.Controller.gameResources = queue;
				
			// queue.loadManifest(queueValues);
			// queue.addEventListener("complete", this.loadGame);
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
			//var resources = Interview.Controller.gameResources,
			// 	stage = Interview.Controller.game;

			// var background = new createjs.Bitmap(resources.getResult("map")),
			// 	side_menu = new createjs.Bitmap(resources.getResult("side_menu")),
			// 	sidebarDisplay = {
			// 		avatar:{	image:new createjs.Bitmap(resources.getResult("avatar0"))},
			// 		climate:{	label:new createjs.Text("Desired Climate:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
			// 		major:{		label:new createjs.Text("Desired Major:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
			// 		cost:{		label:new createjs.Text("Desired Cost:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
			// 		extraCur:{	label:new createjs.Text("Desired Extracurriculars:", "bold 15px Helvetica", "#000000"), 	text:new createjs.Text("----", "14px Helvetica", "#000000")},
			// 		size:{		label:new createjs.Text("Desired Size:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
			// 		rep:{		label:new createjs.Text("Desired Reputations:", "bold 15px Helvetica", "#000000"), 			text:new createjs.Text("----", "14px Helvetica", "#000000")},
			// 		job:{		label:new createjs.Text("Desired Job Placement:", "bold 15px Helvetica", "#000000"), 		text:new createjs.Text("----", "14px Helvetica", "#000000")},
			// 		grad:{		label:new createjs.Text("Desired Graduate School:", "bold 15px Helvetica", "#000000"), 		text:new createjs.Text("----", "14px Helvetica", "#000000")}
			// 	},

			// 	button = new createjs.Bitmap(resources.getResult("button")),
			// 	button_text_1 = new createjs.Text("SELECT", "15px Arial", "#ffffff"),
			// 	button_text_2 = new createjs.Text("School Name", "22px Arial", "#000000"),
				
			// 	selectionButton = new createjs.Container(),
			// 	sidebarContainer = new createjs.Container(),
			// 	universityContainer = new createjs.Container(),
			// 	popupContainer = new createjs.Container(),

			// 	popupBkg = new createjs.Bitmap(resources.getResult("popup_correct")),
			// 	popupButton = new createjs.Bitmap(resources.getResult("popup_button_next")),
			// 	popupCorrectText = new createjs.Text("School 1 is correct because it met 7 out of 9 criteria.", "15px Helvetica", "#000000"),
			// 	popupScoreText = new createjs.Text("Current  Score: 1 / 5", "25px Helvetica", "#000000");
			// 	popupShade = new createjs.Shape();

			// //sidebar
			// sidebarContainer.addChild(side_menu);
			// sidebarContainer.addChild(sidebarDisplay.avatar.image);

			// sidebarDisplay.avatar.image.x = 30;
			// sidebarDisplay.avatar.image.y = 5;
			// sidebarDisplay.avatar.image.scaleX = 0.8;
			// sidebarDisplay.avatar.image.scaleY = 0.8;

			// side_menu.x = 0;
			// side_menu.y = 0;

			// var textStartX = 210,
			// 	textStartY = 223,
			// 	index = 0;

			// _.each(sidebarDisplay, function(obj, idx){
			// 	if (idx === "avatar")
			// 		return;

			// 	obj.label.x = obj.text.x = textStartX;

			// 	obj.label.y = textStartY;
			// 	obj.text.y = textStartY + 13;

			// 	obj.label.textAlign = obj.text.textAlign = "right";

			// 	textStartY += 39 - index*0.3;
			// 	index += 1;

			// 	sidebarContainer.addChild(obj.label);
			// 	sidebarContainer.addChild(obj.text);
			// });

			// //university layer
			// selectionButton.addChild(button);
			// selectionButton.addChild(button_text_1);
			// selectionButton.addChild(button_text_2);

			// button.x = 0;
			// button.y = 0;

			// button_text_1.x = button.getBounds().width/2 - button_text_1.getBounds().width/2;
			// button_text_1.y = 10;

			// button_text_2.x = button.getBounds().width/2 - button_text_2.getBounds().width/2;
			// button_text_2.y = 30;
			
			// selectionButton.x = 466;
			// selectionButton.y = 490;
			// selectionButton.alpha = 0;
			// selectionButton.visible = false;

			// universityContainer.addChild(selectionButton);

			// universityContainer.x = 224;
			// universityContainer.y = 0;

			// //popup
			// popupContainer.addChild(popupShade);
			// popupContainer.addChild(popupBkg);
			// popupContainer.addChild(popupCorrectText);
			// popupContainer.addChild(popupScoreText);
			// popupContainer.addChild(popupButton);

			// popupButton.x = 125;
			// popupButton.y = 200;

			// popupCorrectText.x = 20;
			// popupCorrectText.y = 130;

			// popupScoreText.x = 20;
			// popupScoreText.y = 150;

			// popupShade.graphics.beginFill("#00")
			// 	.drawRect(0,0, 960, 565);
			
			// popupShade.alpha = 0.5;
			// popupShade.x = -300;
			// popupShade.y = -130;

			// popupContainer.x = 300;
			// popupContainer.y = 130;
			// popupContainer.visible = false;
			// popupContainer.alpha = 0;

			// //add to stage
			// stage.addChild(background);
			// stage.addChild(sidebarContainer);
			// stage.addChild(universityContainer);
			// stage.addChild(popupContainer);

			// stage.enableMouseOver(30);
			// stage.update();

			// //set ticker for animations
			// createjs.Ticker.addEventListener("tick", stage);

			// //set globals
			// Interview.Controller.stage = stage;
			// Interview.Controller.selectionButton = {selection:-1, container:selectionButton, bkg:button, schoolText:button_text_2};
			// Interview.Controller.popup = {type:"next", container:popupContainer, shade:popupShade, button:popupButton, correctText:popupCorrectText, scoreText:popupScoreText, bkg:popupBkg};

			// Interview.Controller.sidebarDisplay = sidebarDisplay;
			// Interview.Controller.universityContainer = universityContainer;
			// Interview.Controller.maxLevels  = Interview.Controller.gameData.levels.length;
			// Interview.Controller.totalCorrect  = 0;
			// Interview.Controller.setLevel(0);

			// //set selection button events
			// selectionButton.addEventListener("mouseover", function(e){
			// 	button.image = resources.getResult("button_selected");
			// });

			// selectionButton.addEventListener("mouseout", function(e){
			// 	button.image = resources.getResult("button");
			// });

			// selectionButton.addEventListener("click", function(e){
			// 	that = Interview.Controller;
			// 	popup = that.popup;

			// 	that.setPopup();

			// 	createjs.Tween.get(popup.container)
			// 		.to({alpha:1}, 200, createjs.Ease.cubicIn);
			// });

			// //set popup button events
			// popupButton.addEventListener("mouseover", function(e){
			// 	that = Interview.Controller;
			// 	popup = that.popup;

			// 	popup.button.image = resources.getResult("popup_button_rollover_" + popup.type);
			// });

			// popupButton.addEventListener("mouseout", function(e){
			// 	that = Interview.Controller;
			// 	popup = that.popup;

			// 	popup.button.image = resources.getResult("popup_button_" + popup.type);
			// });

			// popupButton.addEventListener("click", function(e){
			// 	var that = Interview.Controller,
			// 		popup = that.popup;

			// 	if (popup.type === "next") {
			// 		createjs.Tween.get(popup.container)
			// 			.to({alpha:0}, 200, createjs.Ease.cubicOut)
			// 			.call(function(){
			// 				popup.container.visible = false;
			// 				that.destroyLevel();
			// 				that.setLevel(that.currentLevel + 1);
			// 			});
			// 	} else {
			// 		createjs.Tween.get(popup.container)
			// 			.to({alpha:0}, 0, createjs.Ease.cubicOut)
			// 			.call(function(){
			// 				that.destroy();
			// 			});
			// 	}
				
			// });
		},

		setLevel:function(curLevel) {
			// var that = Interview.Controller,
			// 	popup = that.popup,
			// 	levelData = Interview.Controller.gameData.levels[curLevel],
			// 	student = levelData.student,
			// 	schools = levelData.schools,
			// 	stage = Interview.Controller.stage;

			// //set correctness
			// _.each(levelData.schools, function(obj, idx) {
			// 	obj.correct = (idx === 0);
			// });

			// levelData.schools = _.shuffle(levelData.schools);

			// _.each(levelData.schools, function(obj, idx) {
			// 	obj.index = idx;
			// 	obj.name = "School " + (idx + 1);

			// 	if (obj.correct) {
			// 		levelData.correct.index = idx;
			// 		levelData.correct.updatedfeedback = "";
			// 		levelData.correct.updatedfeedback = "School " + (idx + 1) + " is correct because it met " + levelData.correct.feedback;
			// 	}
			// });

			// //set school position
			// var positionMap = {
			// 	"northeast": 	{x:600,y:100, width:50, height:100},
			// 	"midwest":		{x:100,y:150, width:300, height:100},
			// 	"west coast": 	{x:30,y:21, width:80, height:300},
			// 	"southeast": 	{x:400,y:222, width:200, height:150},
			// 	"southwest": 	{x:80,y:200, width:220, height:120}
			// };

			// _.each(levelData.schools, function(obj, idx) {

			// 	var pMap = positionMap[obj.location],
			// 		horPos, verPos, color;
				
			// 	do {
			// 		obj.x = _.random(pMap.x, pMap.x + pMap.width);
			// 		obj.y = _.random(pMap.y, pMap.y + pMap.height);
			// 		color = DukeApp.utils.getColor(stage, obj.x, obj.y);
			// 	} while(!(color.red === color.blue && color.green < 200));

			// 	horPos = (obj.x < 480)?"left":"right";

			// 	if (obj.y < 188)
			// 		verPos = "top";
			// 	else if (obj.y > 188 && obj.y < 360)
			// 		verPos = "middle";
			// 	else
			// 		verPos = "bottom";

			// 	obj.sidebarType = horPos + verPos;
			// });
			

			// that.setSidePanel(student);
			// that.setUniversityElements(schools);
			// Interview.Controller.stage.update();

			// that.selectionButton.container.visible = true;
			// that.selectionButton.container.alpha = 0;
			// that.selectionButton.selection = 0;

			// that.currentLevel = curLevel;
		},

		// setSidePanel:function(student) {
		// 	var that = Interview.Controller,
		// 		display = that.sidebarDisplay,
		// 		resources = Interview.Controller.gameResources;

		// 	_.each(display, function(obj, idx) {
		// 		if (idx === "avatar") {
		// 			var id = Math.round(Math.random(0,5));
		// 			obj.image.image = resources.getResult("avatar"+ id);
		// 			return;
		// 		}

		// 		obj.text.text = student[idx];
		// 	});
		// },

		// setUniversityElements:function(schools) {
		// 	var that = Interview.Controller,
		// 		schoolDisplay = [],
		// 		stage = Interview.Controller.stage,
		// 		resources = Interview.Controller.gameResources,
		// 		universityContainer = Interview.Controller.universityContainer,
		// 		sidebarPositionMap = {
		// 			righttop: 	{x:-248,y:-55},
		// 			rightmiddle:{x:-248,y:-183},
		// 			rightbottom:{x:-248,y:-290},
		// 			lefttop: 	{x:27,y:-55},
		// 			leftmiddle: {x:27,y:-180},
		// 			leftbottom: {x:27,y:-285}
		// 		};

		// 	_.each(schools, function(obj, idx){
		// 		schoolDisplay.push({
		// 				data:obj,
		// 				dot: new createjs.Bitmap(resources.getResult('dot')),
		// 				panel: that.createPanel(obj)
		// 			});

		// 		schoolDisplay[idx].dot.x = obj.x;
		// 		schoolDisplay[idx].dot.y = obj.y;
		// 		schoolDisplay[idx].dot.index = idx;

		// 		schoolDisplay[idx].panel.container.x = obj.x + sidebarPositionMap[obj.sidebarType].x;
		// 		schoolDisplay[idx].panel.container.y = obj.y + sidebarPositionMap[obj.sidebarType].y;
		// 		schoolDisplay[idx].panel.container.index = idx;
		// 		schoolDisplay[idx].panel.container.visible = false;

		// 		//mouseover event
		// 		schoolDisplay[idx].dot.addEventListener("mouseover", function(e){
		// 			var index = e.currentTarget.index,
		// 				stage = Interview.Controller.stage;

		// 			universityContainer.setChildIndex(schoolDisplay[index].dot, universityContainer.getNumChildren()-1);
		// 			universityContainer.setChildIndex(schoolDisplay[index].panel.container, universityContainer.getNumChildren()-1);
		// 			schoolDisplay[index].panel.container.visible = true;

		// 			createjs.Tween.get(schoolDisplay[index].panel.container)
		// 				.set({alpha:0})
		// 				.to({alpha:0.9},300, createjs.Ease.cubicIn());

		// 			that.setButton(obj);
		// 		});

		// 		//mouseout event
		// 		schoolDisplay[idx].dot.addEventListener("mouseout", function(e){
		// 			var index = e.currentTarget.index,
		// 				stage = Interview.Controller.stage;

					
		// 			createjs.Tween.get(schoolDisplay[index].panel.container)
		// 				.to({alpha: 0},200, createjs.Ease.cubicOut())
		// 				.call(function(){
		// 					schoolDisplay[index].panel.container.visible = false;		
		// 				});
					
		// 			stage.update();
		// 		});

		// 		universityContainer.addChild(schoolDisplay[idx].dot);
		// 		universityContainer.addChild(schoolDisplay[idx].panel.container);
		// 	});

		// 	that.universityElements = schoolDisplay;
		// },

		// setPopup:function(){
		// 	var that = Interview.Controller,
		// 		popup = that.popup,
		// 		selectionButton = that.selectionButton,
		// 		popupType = "",
		// 		resources = that.gameResources,
		// 		currentQuestion = that.gameData.levels[that.currentLevel];

		// 	popup.type = ((that.currentLevel >= that.maxLevels - 1)?"return":"next");
		// 	that.totalCorrect += (selectionButton.selection === currentQuestion.correct.index)?1:0;

		// 	popup.correctText.text = currentQuestion.correct.updatedfeedback;
		// 	popup.scoreText.text = "Correct Score: " + that.totalCorrect + "/" + that.maxLevels;

		// 	if (selectionButton.selection === currentQuestion.correct.index) {
		// 		popupType = "correct";
		// 	} else {
		// 		popupType = "incorrect";
		// 	}

		// 	popup.bkg.image = resources.getResult("popup_" + popupType);
		// 	popup.button.image = resources.getResult("popup_button_" + popup.type);
		// 	popup.container.visible = true;
		// },

		// createPanel:function(obj) {
		// 	var resources = Interview.Controller.gameResources,
		// 		panelContainer = new createjs.Container(),
		// 		panelBkg = new createjs.Bitmap(resources.getResult('rollover_menu_' + obj.sidebarType)),
		// 		universityIcon = new createjs.Bitmap(resources.getResult('university')),
		// 		universityHeading = new createjs.Text(obj.name, "28px Arial", "#0");
		// 		universityHeadingOutline = new createjs.Text(obj.name, "28px Arial", "#ffffff");

		// 	panelContainer.addChild(panelBkg);

		// 	//heading
		// 	universityIcon.x = 25;
		// 	universityIcon.y = 10;

		// 	universityHeading.x = universityHeadingOutline.x =95;
		// 	universityHeading.y = universityHeadingOutline.y =20;
		// 	universityHeadingOutline.outline = 5;

		// 	panelContainer.addChild(universityIcon);
		// 	panelContainer.addChild(universityHeadingOutline);
		// 	panelContainer.addChild(universityHeading);
			
		// 	//items
		// 	var nameMap = {
		// 			"climate":"Climate",
		// 			"major":"Major",
		// 			"cost":"Cost",
		// 			"extraCur":"Extracurriculars",
		// 			"size":"School Size",
		// 			"rep":"Reputations",
		// 			"job":"Job Placement",
		// 			"grad": "Graduate School"
		// 		},
		// 		textStartX = 215,
		// 		textStartY = 62,
		// 		index = 0;
			
		// 	_.each(obj, function(item, idx){
		// 		if (["x", "y", "name", "sidebarType", "index", "correct", "location"].indexOf(idx) !== -1 )
		// 			return;

		// 		var label = new createjs.Text(nameMap[idx] + ":", "bold 15px Helvetica", "#000000");
		// 		var text = new createjs.Text(item, "14px Helvetica", "#000000", "#000000");
			
		// 		label.x = text.x = textStartX;

		// 		label.y = textStartY;
		// 		text.y = textStartY + 15;

		// 		label.textAlign = text.textAlign = "right";

		// 		textStartY += 39 - index*0.17;
		// 		index += 1;

				
		// 		panelContainer.addChild(label);
		// 		panelContainer.addChild(text);
		// 	});

		// 	panelContainer.alpha = 0;
		// 	return({container:panelContainer});
		// },

		// setButton:function(school) {
		// 	var that = Interview.Controller,
		// 		selectionButton = that.selectionButton;

		// 	selectionButton.container.visible = true;
		// 	selectionButton.schoolText.text = school.name;
		// 	selectionButton.selection = school.index;

		// 	var centerx = selectionButton.bkg.getBounds().width/2 - selectionButton.schoolText.getBounds().width/2;

		// 	createjs.Tween.get(selectionButton.container)
		// 		.to({alpha:1}, 500);
			
		// 	createjs.Tween.get(selectionButton.schoolText)
		// 		.to({x:centerx}, 200);
		// },

		destroyLevel:function(){
			var that = Interview.Controller,
				universityContainer = Interview.Controller.universityContainer,
				uElements = that.universityElements;

			_.each(uElements, function(obj, idx){
				universityContainer.removeChild(obj.dot);
				universityContainer.removeChild(obj.panel);

				obj.dot.removeAllEventListeners();
			});
		},

		destroy:function() {
			var that = Interview.Controller,
				stage = that.stage;

			that.destroyLevel();
			stage.removeChild(that.sidebarDisplay);
			stage.removeChild(that.universityContainer);

			$("#game_modal").modal('hide');
		}
	};
});