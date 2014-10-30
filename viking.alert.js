Viking.Alert = Viking.Dialog.extend({

    className: 'viking-alert',
    
    events: {
        'click .viking-alert-btn-positive': 'confirm',
        'click .viking-alert-btn-negative': 'cancel'
    },
    
    type: 'confirmation',
    confirmButtonText: 'Okay',
    cancelButtonText:  'Cancel',

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
        
        _.each(_.pick(options, 'type', 'title', 'message', 'confirmButtonText', 'cancelButtonText', 'onConfirmation', 'onCancel'), function(value, key) {
            this[key] = value;
        });

        Viking.Dialog.prototype.initialize.call(this, _.defaults(options, {
            clickOff : false,
        }));
    },
    
    render : function() {
        this.$el.html(Viking.View.templates['alert-view']({
            view: this
        }));

        return this;
    },

    "confirm": function() {
        this.onConfirmation();
    },

    "cancel": function() {
        this.onCancel();
    }

});
Viking.Alert.templates["alert-view"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');  if (view.title) { ; __p.push('\n    <h1>',  view.title ,'</h1>\n');  } ; __p.push('\n\n<p>\n    ',  _.result(view, 'message') ,'\n</p>\n\n');  if (view.type == 'confirmation') { ; __p.push('\n    <button class="viking-alert-btn-negative">',  view.cancelButtonText ,'</button>\n');  } ; __p.push('\n\n<button class="viking-alert-btn-positive primary">',  view.confirmButtonText ,'</button>\n');}return __p.join('');};