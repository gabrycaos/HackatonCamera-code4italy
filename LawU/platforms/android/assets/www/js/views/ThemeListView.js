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
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
      });

    return ThemeListView;

  });