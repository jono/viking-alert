Viking.Alert = Viking.Dialog.extend({

    className: 'viking-alert',
    
    events: {
        'click .viking-alert-btn-positive': 'confirm',
        'click .viking-alert-btn-negative': 'cancel'
    },
    
    // options:
    //  - type: the type of Dialog to display (alert || confirmation)
    //  - title: the title of the alert (optional)
    //  - message: message to display
    //  - confirmButtonText: Text to use on the "Confirm"-button. Defaults to "Okay"
    //  - cancelButtonText: Text to use on the "Confirm"-button. Defaults to "Cancel"
    //  - clickOff: Allow the person to click off of the dialog (defaults to false). Calls cancel when clicked off
    //  - confirm: The callback to call when the user hits the confirmButton
    //  - cancel:  The callback to call when the user hits the cancelButton
    //  - Other see Viking.Dialog
    initialize : function(options) {
        if (!options) {
            options = {};
        }
        
        this.options = _.defaults(options, {
            clickOff : false,
            confirmButtonText: "Okay",
            cancelButtonText:  "Cancel"
        });

        this.constructor.__super__.initialize.call(this, options);
    },
    
    render : function() {
        this.$el.html(Viking.View.templates['alert-view']({
            options: this.options
        }));

        return this;
    },


    "confirm": function() {
        this.options.confirm();
    },

    "cancel": function() {
        this.options.cancel();
    }

});
Viking.Alert.templates["alert-view"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h1>',  options.title ,'</h1>\n\n');  if (text) { ; __p.push('<p>',  options.text ,'</p>');  } ; __p.push('\n\n');  if (options.type == 'confirmation') { ; __p.push('\n<button class="viking-alert-btn-negative">',  options.cancelButtonText ,'</button>\n');  } ; __p.push('\n\n<button class="viking-alert-btn-positive primary">',  options.confirmButtonText ,'</button>\n\n');}return __p.join('');};