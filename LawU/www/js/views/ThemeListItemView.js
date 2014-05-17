define(["jquery", "underscore", "backbone", "handlebars", "text!templates/theme-list-item.html"],
    function ($, _, Backbone, Handlebars, template) {

    var ThemeListItemView = Backbone.View.extend({

        tagName: "li",

        events: {
          "touchend": "goToDetails"
        },

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
        },

        render: function (eventName) {
          var theme = this.model.toJSON();
          theme.cid = this.model.cid;
          $(this.el).html(this.template(theme));
          return this;
        },

        goToDetails: function () {
          Backbone.history.navigate("themes/" + this.model.cid, {trigger: true});
        }
      });

    return ThemeListItemView;

  });