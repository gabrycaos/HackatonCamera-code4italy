define(["jquery", "underscore", "backbone", "handlebars", "text!templates/point-details.html"],
    function ($, _, Backbone, Handlebars, template) {

    var PointView = Backbone.View.extend({

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

    return PointView;

  });