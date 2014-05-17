define(["jquery", "underscore", "backbone", "handlebars", "views/CatGridItemView", "text!templates/cat-grid.html"],
    function ($, _, Backbone, Handlebars, CatGridItemView, template) {

    var CatGridView = Backbone.View.extend({

        tagName: "div",
        id: "grid",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (cat) {
            $(this.el).append(new CatGridItemView({
              model: cat
            }).render().el);
          }, this);
          return this;
        }
      });

    return CatGridView;

  });