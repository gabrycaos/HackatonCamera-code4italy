define(["jquery", "underscore", "backbone", "handlebars", "views/PointListItemView", "text!templates/point-list.html"],
    function ($, _, Backbone, Handlebars, PointListItemView, template) {

    var PointListView = Backbone.View.extend({

        tagName: "ul",
        id: "list",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (point) {
            $(this.el).append(new PointListItemView({
              model: point
            }).render().el);
          }, this);
          return this;
        }
      });

    return PointListView;

  });