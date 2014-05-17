define(["jquery", "underscore", "backbone", "handlebars", "text!templates/theme-details.html"],
    function ($, _, Backbone, Handlebars, template) {

    var ThemeView = Backbone.View.extend({

        events: {
          "touchend #lawubtn": "vote",
          "touchend #pntbtn": "evaluate"
        },

        vote: function () {
          
        },

        evaluate: function () {
          Backbone.history.navigate("pointlist", {trigger: true});
        },

        template: Handlebars.compile(template),

        render: function (eventName) {
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
      });

    return ThemeView;

  });