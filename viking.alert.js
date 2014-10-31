Viking.Alert = Viking.Dialog.extend({

    events: {
        'click .viking-alert-btn-positive': 'confirm',
        'click .viking-alert-btn-negative': 'cancel'
    },
    
    type: 'confirmation',
    confirmButtonText: 'Okay',
    cancelButtonText:  'Cancel',

    // Events
    onShow: function() {},
    onClose: function() {},
    onConfirmation: function() {},
    onCancel: function() {},

    // options:
    //  - type: the type of Dialog to display (alert || confirmation)
    //  - title: the title of the alert (optional)
    //  - message: message to display
    //  - confirmButtonText: Text to use on the "Confirm"-button. Defaults to "Okay"
    //  - cancelButtonText: Text to use on the "Confirm"-button. Defaults to "Cancel"
    //  - clickOff: Allow the person to click off of the dialog (defaults to false). Calls cancel when clicked off
    //  - onConfirmation: The callback to call when the user hits the confirmButton
    //  - onCancel:  The callback to call when the user hits the cancelButton
    //  - Other see Viking.Dialog
    initialize : function(options) {
        if (!options) {
            options = {};
        }

        _.each(_.pick(options, 'type', 'title', 'message', 'confirmButtonText', 'cancelButtonText', 'onConfirmation', 'onCancel', 'onShow', 'onClose'), _.bind(function(value, key) {
            this[key] = value;
        }, this));

        Viking.Dialog.prototype.initialize.call(this, _.defaults(options, {
            clickOff : false,
        }));

        this.on('show', this.onShow);
        this.on('close', this.onClose);
    },

    render : function() {
        this.$el.addClass('viking-alert');

        this.$el.html(Viking.View.templates['alert-view']({
            view: this
        }));

        return this;
    },

    "confirm": function() {
        this.onConfirmation();
        this.close();
    },

    "cancel": function() {
        this.onCancel();
        this.close();
    }

});
Viking.Alert.templates["alert-view"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');  if (view.title) { ; __p.push('\n    <h1>',  view.title ,'</h1>\n');  } ; __p.push('\n\n<p>\n    ',  _.result(view, 'message') ,'\n</p>\n\n');  if (view.type == 'confirmation') { ; __p.push('\n    <button class="viking-alert-btn-negative">',  view.cancelButtonText ,'</button>\n');  } ; __p.push('\n\n<button class="viking-alert-btn-positive primary">',  view.confirmButtonText ,'</button>\n');}return __p.join('');};