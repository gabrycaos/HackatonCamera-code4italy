define(["jquery", "underscore", "parse", "handlebars", "views/CommentListItemView", "text!templates/comment-list.html"],
    function ($, _, Parse, Handlebars, CommentListItemView, template) {

    var CommentListView = Parse.View.extend({

        tagName: "ul",
        id: "list",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("reset", this.render, this);
        },

        render: function (eventName) {
          $(this.el).empty();
          _.each(this.model.models, function (comment) {
            $(this.el).append(new CommentListItemView({
              model: comment
            }).render().el);
          }, this);
          return this;
        }
      });

    return CommentListView;

  });