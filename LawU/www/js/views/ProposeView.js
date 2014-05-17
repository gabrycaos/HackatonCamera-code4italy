define(["jquery", "underscore", "backbone", "handlebars", "text!templates/propose.html"],
    function ($, _, Backbone, Handlebars, template) {

    var ProposeView = Backbone.View.extend({

        tagName: "a",

        events: {
          "themePropose": "themePropose",
          "pointPropose": "pointPropose"
        },

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
        },

        render: function (eventName) {
          var propose = this.model.toJSON();
          $(this.el).html(this.template(propose));
          return this;
        },

        themePropose: function () {
          Backbone.history.navigate("propose", {trigger: true});
        },

        pointPropose: function () {
          Backbone.history.navigate("themelist", {trigger: true});
        }    

      });

    return ProposeView;

  });