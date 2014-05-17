define(["jquery", "underscore", "backbone", "handlebars", "text!templates/point-list-item.html"],
    function ($, _, Backbone, Handlebars, template) {

    var PointListItemView = Backbone.View.extend({

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
          var point = this.model.toJSON();
          point.cid = this.model.cid;
          $(this.el).html(this.template(point));
          return this;
        },

        goToDetails: function () {
          Backbone.history.navigate("points/" + this.model.cid, {trigger: true});
        }
      });

    return PointListItemView;

  });