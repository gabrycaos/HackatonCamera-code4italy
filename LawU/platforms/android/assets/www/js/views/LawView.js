define(["jquery", "underscore", "backbone", "handlebars", "text!templates/law-details.html"],
    function ($, _, Backbone, Handlebars, template) {

    var LawView = Backbone.View.extend({

        events: {
          "touchend #lawubtn": "vote"
        },

        vote: function () {
          
        },

        template: Handlebars.compile(template),

        render: function (eventName) {
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
      });

    return LawView;

  });