define(["jquery", "underscore", "parse", "handlebars", "text!templates/comment-list-item.html"],
    function ($, _, Parse, Handlebars, template) {

    var CommentListItemView = Parse.View.extend({

        tagName: "li",

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
        },

        render: function (eventName) {
          var comment = this.model.toJSON();
          $(this.el).html(this.template(comment));
          return this;
        },

      
      });

    return CommentListItemView;

  });