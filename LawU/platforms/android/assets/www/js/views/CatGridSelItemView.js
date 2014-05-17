define(["jquery", "underscore", "backbone", "handlebars", "text!templates/cat-grid-item.html"],
    function ($, _, Backbone, Handlebars, template) {

    var CatGridItemView = Backbone.View.extend({

        tagName: "a",

        events: {
          "touchend": "goToDetails"
        },

        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
        },

        render: function (eventName) {
          var cat = this.model.toJSON();
          cat.cid = this.model.cid;
          $(this.el).html(this.template(cat));
          return this;
        },

        goToDetails: function () {
          Backbone.history.navigate("propose", {trigger: true});
        }
      });

    return CatGridItemView;

  });