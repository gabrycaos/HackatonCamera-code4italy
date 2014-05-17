define(["jquery", "underscore", "backbone", "handlebars", "views/CatGridSelItemView", "text!templates/cat-grid.html"],
    function ($, _, Backbone, Handlebars, CatGridSelItemView, template) {

    var CatGridSelView = Backbone.View.extend({

        tagName: "div",
        id: "grid",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (cat) {
            $(this.el).append(new CatGridSelItemView({
              model: cat
            }).render().el);
          }, this);
          return this;
        }
      });

    return CatGridSelView;

  });