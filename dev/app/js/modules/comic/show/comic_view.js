DukeApp.module("Comic.Show", function(Show, DukeApp, Backbone, Marionette, $, _) {	
    Show.ComicLayout = Marionette.Layout.extend({
    	template:templates['comic/show/layout'],
		regions: {
			comicBook: "#comicBook",
			thumbnail: "#thumbnail",
			responsePanel: "#response_panel"
		},
        events:{
            "click .comic-sliders": "handleComicSlider",
            "click .comic-refresh": "handleComicRefresh"
        },

        handleComicSlider:function(e) {
            e.preventDefault();

            var direction = $(e.currentTarget).attr("data-direction");
            this.trigger("comicView:slideToPanel", {direction:direction});
        },

        handleComicRefresh:function(e) {
            e.preventDefault();
            this.trigger("comicView:refreshPanel");
        },

        handleComicSliderVisiblity:function(pos, panels) {
            var curPanel = panels[pos],
                showRight = false,
                showLeft = false,
                i;

            //find out if there is an active panel before and after this item
            for (i=pos; i >0; i--) {
                if (panels[i].get('display')){
                    showLeft = true;
                }
            }

            for (i=pos+1; i<panels.length; i++) {
                if (panels[i].get('display')){
                    showRight = true;
                }
            }

            $("#slide-left").css('opacity', (showLeft)?1:0.3);
            $("#slide-right").css('opacity', (showRight)?1:0.3);

        }
    });

    Show.ComicPanelView = Marionette.ItemView.extend({
        template:templates['comic/show/comicItem'],
        tagName: 'div',
        className: "comic_panel",
        id:function() {
            return("panel" + this.model.get("seriesId") + this.model.get("panelId"));
        },

        onShow:function() {
            $(this.el).hide();
        }
    });

    Show.ComicBookView = Marionette.CompositeView.extend({
        template:templates['comic/show/comicList'],
        itemViewContainer:"#comic_panels",
        itemView:Show.ComicPanelView,

        scrollToPanel:function(index) {
            var id = "#panel" + Show.Controller.activeSeries + index,
                deferred = $.Deferred();

            $("#comic_panels").scrollTo(id, {
                duration:500,
                onAfter:function(){
                    deferred.resolve();
                }
            });


            return(deferred.promise());
        },

        addPanel:function(index) {
            var model = this.collection.models[index],
                that = this,
                deferred = $.Deferred();

            $('#panel' + model.get('seriesId') + model.get("panelId")).show();

            that.scrollToPanel(index).done(function(){
                $('#panel' + model.get('seriesId') + model.get("panelId")).fadeIn(3000, function() {
                    deferred.resolve();
                });
            });

            return(deferred);
        }
    });
    
    Show.ResponseView = Marionette.ItemView.extend({
        template:templates['comic/show/responseItem'],
        tagName: 'div',
        id: "response",
        events:{
            "click #continue" : "handleContinueButton",
            "click .answer" : "handleQuestionButton"
        },

        onShow:function() {
            this.hide();
        },

        hide:function() {
            $('#response_panel').hide();
            $('#question_panel').hide();
            $('#continue_panel').hide();
            $('#close_panel').hide();
        },

        show:function(model) {
            var deferred = $.Deferred(),
                question = model.get('question');

            this.model = model;
            this.render();

            if (question.show) {
                $('#question_panel').show();
                $('#close_panel').hide();
                $('#continue_panel').hide();
            } else {
                if (question.close) {
                    $('#close_panel').show();
                    $('#question_panel').hide();
                    $('#continue_panel').hide();
                } else {
                    $('#close_panel').hide();
                    $('#question_panel').hide();
                    $('#continue_panel').show();
                }
            }

            _.debounce(function(){
                $('#response_panel').fadeIn(1000, function(){
                    deferred.resolve();
                });
            }, 2000)();
            
            return(deferred.promise());
        },

        handleContinueButton:function(e){
            e.preventDefault();

            if (this.model.get("question").nextSlide) {
                this.trigger("comicView:addPanel", this.model.get('question').nextSlide);
            }
        },

        handleQuestionButton:function(e){
            e.preventDefault();
            var question_index = $(e.currentTarget).attr("data-ansIndex"),
                nextPanel = this.model.get('question')["choice_" + question_index].nextSlide;

            this.trigger("comicView:addPanel", nextPanel);
        }
    });
});