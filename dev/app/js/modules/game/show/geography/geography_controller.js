DukeApp.module("Game.Show.Geography", function(Geography, DukeApp, Backbone, Marionette, $, _) {
	Geography.Controller = {
		init:function(){
			var gameData = DukeApp.request("game:entities", 0).get("data");
			Geography.Controller.gameData = gameData;
			Geography.Controller.loadResourses();
			
		},

		loadResourses:function() {
			var baseDir =  "../images/game",
				queue = new createjs.LoadQueue(),
				queueValues = [
						{id:"map", src:baseDir + "/geography/map.png"},
						{id:"university", src:baseDir + "/geography/university_icon.png"},
						{id:"side_menu", src:baseDir + "/geography/side_menu.png"},
						{id:"dot", src:baseDir + "/geography/dot.png"},
						{id:"dot_selected", src:baseDir + "/geography/selected_dot.png"},
						{id:"button", src:baseDir + "/geography/button.png"},
						{id:"button_selected", src:baseDir + "/geography/selected_button.png"},
						{id:"rollover_menu_righttop", src:baseDir + "/geography/rollover_menu.png"},
						{id:"rollover_menu_rightmiddle", src:baseDir + "/geography/rollover_menu.png"},
						{id:"rollover_menu_rightbottom", src:baseDir + "/geography/rollover_menu.png"},
						{id:"rollover_menu_lefttop", src:baseDir + "/geography/rollover_menu.png"},
						{id:"rollover_menu_leftmiddle", src:baseDir + "/geography/rollover_menu.png"},
						{id:"rollover_menu_leftbottom", src:baseDir + "/geography/rollover_menu.png"}
				];

			_.each(_.range(6), function(idx){
				queueValues.push({id:"avatar" + idx, src:"../images/avatars/avatar" + idx + ".png"});
			});

			Geography.Controller.gameResources = queue;

			queue.loadManifest(queueValues);
			queue.addEventListener("complete", this.loadGame);
		},

		loadGame:function(e) {
			var stage = new createjs.Stage("game_container"),
				resources = Geography.Controller.gameResources;
			
			var background = new createjs.Bitmap(resources.getResult("map")),
				side_menu = new createjs.Bitmap(resources.getResult("side_menu")),
				sidebarDisplay = {
					avatar:{	image:new createjs.Bitmap(resources.getResult("avatar0"))},
					climate:{	label:new createjs.Text("Desired Climate:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
					major:{		label:new createjs.Text("Desired Major:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
					cost:{		label:new createjs.Text("Desired Cost:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
					extraCur:{	label:new createjs.Text("Desired Extracurriculars:", "bold 15px Helvetica", "#000000"), 	text:new createjs.Text("----", "14px Helvetica", "#000000")},
					size:{		label:new createjs.Text("Desired Size:", "bold 15px Helvetica", "#000000"), 				text:new createjs.Text("----", "14px Helvetica", "#000000")},
					athletics:{	label:new createjs.Text("Desired Athletic Programs:", "bold 15px Helvetica", "#000000"), 	text:new createjs.Text("----", "14px Helvetica", "#000000")},
					rep:{		label:new createjs.Text("Desired Reputations:", "bold 15px Helvetica", "#000000"), 			text:new createjs.Text("----", "14px Helvetica", "#000000")},
					job:{		label:new createjs.Text("Desired Job Placement:", "bold 15px Helvetica", "#000000"), 		text:new createjs.Text("----", "14px Helvetica", "#000000")},
					grad:{		label:new createjs.Text("Desired Graduate School:", "bold 15px Helvetica", "#000000"), 		text:new createjs.Text("----", "14px Helvetica", "#000000")}
				},

				button = new createjs.Bitmap(resources.getResult("button")),
				button_text_1 = new createjs.Text("SELECT", "15px Arial", "#ffffff"),
				button_text_2 = new createjs.Text("School Name", "22px Arial", "#000000"),
				
				selectionButton = new createjs.Container(),
				sidebarContainer = new createjs.Container(),
				universityContainer = new createjs.Container();

			//sidebar
			sidebarContainer.addChild(side_menu);
			sidebarContainer.addChild(sidebarDisplay.avatar.image);

			sidebarDisplay.avatar.image.x = 30;
			sidebarDisplay.avatar.image.y = 5;
			sidebarDisplay.avatar.image.scaleX = 0.8;
			sidebarDisplay.avatar.image.scaleY = 0.8;

			side_menu.x = 0;
			side_menu.y = 0;

			var textStartX = 210,
				textStartY = 223,
				index = 0;

			_.each(sidebarDisplay, function(obj, idx){
				if (idx === "avatar")
					return;

				obj.label.x = obj.text.x = textStartX;

				obj.label.y = textStartY;
				obj.text.y = textStartY + 13;

				obj.label.textAlign = obj.text.textAlign = "right";

				textStartY += 39 - index*0.3;
				index += 1;

				sidebarContainer.addChild(obj.label);
				sidebarContainer.addChild(obj.text);
			});

			//university layer
			selectionButton.addChild(button);
			selectionButton.addChild(button_text_1);
			selectionButton.addChild(button_text_2);

			button.x = 0;
			button.y = 0;

			button_text_1.x = button.getBounds().width/2 - button_text_1.getBounds().width/2;
			button_text_1.y = 10;

			button_text_2.x = button.getBounds().width/2 - button_text_2.getBounds().width/2;
			button_text_2.y = 30;
			
			selectionButton.x = 466;
			selectionButton.y = 490;

			universityContainer.addChild(selectionButton);

			universityContainer.x = 224;
			universityContainer.y = 0;

			//add to stage
			stage.addChild(background);
			stage.addChild(sidebarContainer);
			stage.addChild(universityContainer);

			stage.enableMouseOver(30);
			stage.update();

			//set globals
			Geography.Controller.stage = stage;
			Geography.Controller.sidebarDisplay = sidebarDisplay;
			Geography.Controller.universityContainer = universityContainer;
			Geography.Controller.setLevel(0);
		},

		setLevel:function(curLevel) {
			var that = Geography.Controller,
				levelData = Geography.Controller.gameData.levels[curLevel],
				student = levelData.student,
				schools = levelData.schools;

			that.setSidePanel(student);
			that.setUniversityElements(schools);
			Geography.Controller.stage.update();

			that.currentLevel = curLevel;
		},

		setSidePanel:function(student) {
			var that = Geography.Controller,
				display = that.sidebarDisplay,
				resources = Geography.Controller.gameResources;

			_.each(display, function(obj, idx) {
				if (idx === "avatar") {
					obj.image.image = resources.getResult("avatar"+ student.avatar);
					return;
				}

				obj.text.text = student[idx];
			});
		},

		setUniversityElements:function(schools) {
			var that = Geography.Controller,
				schoolDisplay = [],
				stage = Geography.Controller.stage,
				resources = Geography.Controller.gameResources,
				universityContainer = Geography.Controller.universityContainer,
				sidebarPositionMap = {
					righttop: 	{x:24,y:-55},
					rightmiddle:{x:0,y:0},
					rightbottom:{x:0,y:0},
					lefttop: 	{x:0,y:0},
					leftmiddle: {x:0,y:0},
					leftbottom: {x:0,y:0}
				};

			_.each(schools, function(obj, idx){
				schoolDisplay.push({
						data:obj,
						dot: new createjs.Bitmap(resources.getResult('dot')),
						panel: that.createPanel(obj)
					});

				schoolDisplay[idx].dot.x = obj.x;
				schoolDisplay[idx].dot.y = obj.y;
				schoolDisplay[idx].dot.index = idx;

				schoolDisplay[idx].panel.container.x = obj.x + sidebarPositionMap[obj.sidebarType].x;
				schoolDisplay[idx].panel.container.y = obj.y + sidebarPositionMap[obj.sidebarType].y;
				schoolDisplay[idx].panel.container.index = idx;
				schoolDisplay[idx].panel.container.visible = false;

				schoolDisplay[idx].dot.addEventListener("mouseover", function(e){
					var index = e.currentTarget.index,
						stage = Geography.Controller.stage;

					schoolDisplay[index].panel.container.visible = true;
					stage.update();
				});

				schoolDisplay[idx].dot.addEventListener("mouseout", function(e){
					var index = e.currentTarget.index,
						stage = Geography.Controller.stage;

					schoolDisplay[index].panel.container.visible = false;
					stage.update();
				});

				universityContainer.addChild(schoolDisplay[idx].dot);
				universityContainer.addChild(schoolDisplay[idx].panel.container);
			});
		},

		createPanel:function(obj) {
			var resources = Geography.Controller.gameResources,
				panelContainer = new createjs.Container(),
				panelBkg = new createjs.Bitmap(resources.getResult('rollover_menu_' + obj.sidebarType));

			panelContainer.addChild(panelBkg);

			return({container:panelContainer});
		}
	};
});