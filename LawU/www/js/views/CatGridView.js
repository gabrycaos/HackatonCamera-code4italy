define(["jquery", "underscore", "parse", "handlebars", "views/CatGridItemView", "text!templates/cat-grid.html"],
    function ($, _, Parse, Handlebars, CatGridItemView, template) {

    var CatGridView = Parse.View.extend({

        tagName: "ul",
        id: "list",

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