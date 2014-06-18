define(["jquery", "underscore", "parse", "handlebars", "views/LawListItemView", "text!templates/law-list.html"],
    function ($, _, Parse, Handlebars, LawListItemView, template) {

    var LawListView = Parse.View.extend({

        tagName: "ul",
        id: "list",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (law) {
            $(this.el).append(new LawListItemView({
              model: law
            }).render().el);
          }, this);
          return this;
        }
      });

    return LawListView;

  });