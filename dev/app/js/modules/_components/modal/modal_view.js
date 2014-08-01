DukeApp.module("Components.Modal", function(Modal, DukeApp, Backbone, Marionette, $, _) {
    Modal.ModalRegion = Marionette.Region.extend({
        constructor: function() {
            Marionette.Region.prototype.constructor.apply(this, arguments);
     
            this.ensureEl();
            this.$el.on('hidden', {region:this}, function(event) {
                event.data.region.close();
            });
        },
     
        onShow: function() {
            this.$el.modal('show');
            console.log("opening");
        },
     
        onClose: function() {
            this.$el.modal('hide');
            console.log("closing");
        }
    });
});