DukeApp.module("Comic.Show", function(Show, DukeApp, Backbone, Marionette, $, _) {
	Show.Controller = {
		init:function() {
			var comicModel = DukeApp.request("comic:entities", 0);
			var panels = DukeApp.request("panel:entities");

			Show.Controller.activeSeries = comicModel.get('seriesId');
	    	Show.Controller.activePanel = 0; //panel with last discision point
	    	Show.Controller.onPanel = 0; //panel current viewing

			var layoutView = new Show.ComicLayout({
					model: comicModel
				}),
				comicBookView = new Show.ComicBookView({
					collection:panels
	    		});
	    		responseView = new Show.ResponseView();

	    	Show.Controller.comicModel = comicModel;
	    	Show.Controller.comicPanels = panels;
	    	Show.Controller.comicBookView = comicBookView;
	    	Show.Controller.responseView = responseView;
	    	Show.Controller.layoutView = layoutView;

	    	DukeApp.modal.show(layoutView);
	    	layoutView.comicBook.show(comicBookView);
	    	layoutView.responsePanel.show(responseView);

	    	$("#comic_modal").modal({
	    		backdrop: "static",
	    		show:true
	    	});

	    	layoutView.on("comicView:slideToPanel", Show.Controller.slideToPanel);
	    	layoutView.on("comicView:refreshPanel", Show.Controller.refreshPanel);
	    	responseView.on("comicView:addPanel", Show.Controller.addPanel);

	    	this.restart(true);
		},

		restart:function(init) {
			var panels = Show.Controller.comicPanels.models;
			Show.Controller.activePanel = 0; //panel with last discision point
	    	Show.Controller.onPanel = 0; //panel current viewing

	    	var panelItems = $(".comic_panel");

	    	_.map(panelItems, function(pi) {
	    		$(pi).css('display', 'none');
	    	});

	    	_.map(panels, function(p) {
	    		p.set('display',false);
	    	});

	    	responseView.hide();
			
	    	_.delay(function(){
	    		Show.Controller.addPanel(Show.Controller.activePanel);
	    	}, ((init)?2000:500));
		},

		slideToPanel:function(data) {
			var newPanel = Show.Controller.onPanel,
				panels = Show.Controller.comicPanels.models,
				i;

			if (data.direction === "right") {
				for (i=newPanel+1; i<panels.length && !panels[i].get('display'); i++);
			} else {
				for (i=newPanel-1; i>0 && !panels[i].get('display'); i--);
			}
			
			if (panels[i].get('display')) {
				Show.Controller.scrollToPanel(i);
			}
		},

		scrollToPanel:function(index) {
			var comicBookView = Show.Controller.comicBookView,
				layoutView = Show.Controller.layoutView,
				comicBookModel = Show.Controller.comicModel,
				panels = Show.Controller.comicPanels.models,
				model = panels[index];

			if (index < comicBookModel.get('numPanels') && panels[index].get('display')) {
				Show.Controller.onPanel = index;
				layoutView.handleComicSliderVisiblity(index, panels);
				comicBookView.scrollToPanel(Show.Controller.onPanel, index);
				this.handleResponseDisplay();
			}
		},

		handleResponseDisplay:function() {
			var model = Show.Controller.comicPanels.models[Show.Controller.onPanel];

			if (Show.Controller.onPanel === Show.Controller.activePanel) {
				responseView.show(model);
			} else {
				responseView.hide();
			}
		},

		addPanel:function(index) {
			var comicBookView = Show.Controller.comicBookView,
				responseView = Show.Controller.responseView,
				layoutView = Show.Controller.layoutView,
				panels = Show.Controller.comicPanels.models,
				model = panels[index];

				responseView.hide();

			if (!model.get('display')) {
				model.set('display', true);
				Show.Controller.activePanel = index;
				Show.Controller.onPanel = index;

				comicBookView.addPanel(index).done(function() {

					responseView.show(model);
					layoutView.handleComicSliderVisiblity(index, panels);
				});
			}
		},

		refreshPanel:function() {
			Show.Controller.restart();
		}

	};
});