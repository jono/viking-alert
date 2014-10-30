Viking = Viking || {};

Viking.Alert = Viking.Dialog.extend({

    initialize : function(options) {
        var model, viewClass;

        var self = this;

        if (!options) {
            options = {};
        }

        model = {};
        model.title = options.title;
        model.text = options.hasOwnProperty('text') ? options.text : false;
        model.posText = options.hasOwnProperty('positiveButtonText') ? options.positiveButtonText : 'Okay';
        model.negText = options.hasOwnProperty('negativeButtonText') ? options.negativeButtonText : 'Cancel';

        var AlertView = Backbone.View.extend({
            template : _.template(
                '<h1><%= title %></h1>' +
                '<% if (text) { %><p><%= text %></p><% } %>' +
                '<button class="viking-alert-btn-positive primary"><%= posText %></button>'
            ),
            render : function() {
                this.$el.html( this.template(this.model) );

                this.$('.viking-alert-btn-positive').on('click', _.bind(function() {
                    if (self.positiveHandler) {
                        self.positiveHandler.call();
                    }
                    self.close()
                },this));

                return this;
            }
        });

        var ConfirmView = AlertView.extend({
            template : _.template(
                '<h1><%= title %></h1>' +
                '<% if (text) { %><p><%= text %></p><% } %>' +
                '<button class="viking-alert-btn-positive primary"><%= posText %></button>' +
                '<button class="viking-alert-btn-negative"><%= negText %></button>'
            ),
            render : function() {
                this.$el.html( this.template(this.model) );
                this.$('.viking-alert-btn-positive').on('click', _.bind(function() {
                    if (self.positiveHandler) {
                        self.positiveHandler.call();
                    }
                    self.close()
                },this));
                this.$('.viking-alert-btn-negative').on('click', _.bind(function() {
                    if (self.negativeHandler) {
                        self.negativeHandler.call();
                    }
                    self.close()
                },this));
                return this;
            }
        });

        viewClass = options.confirmation ? ConfirmView : AlertView;

        options = _.extend(options, {
            clickOff : false,
            view : new viewClass({ model : model }),
            model : model
        });

        this.$el.addClass('viking-alert');

        this.constructor.__super__.initialize.apply(this, [options]);
    },

    okayed : function(callback) {
        if (callback && typeof callback === 'function') {
            this.positiveHandler = callback;
        }
        return this;
    },

    canceled : function(callback) {
        if (callback && typeof callback === 'function') {
            this.negativeHandler = callback;
        }
        return this;
    }

});
