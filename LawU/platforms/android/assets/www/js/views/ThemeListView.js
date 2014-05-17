define(["jquery", "underscore", "backbone", "handlebars", "views/ThemeListItemView", "text!templates/theme-list.html"],
    function ($, _, Backbone, Handlebars, ThemeListItemView, template) {

    var ThemeListView = Backbone.View.extend({

        tagName: "ul",
        id: "list",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (theme) {
            $(this.el).append(new ThemeListItemView({
              model: theme
            }).render().el);
          }, this);
          return this;
        }
      });

    return ThemeListView;

  });