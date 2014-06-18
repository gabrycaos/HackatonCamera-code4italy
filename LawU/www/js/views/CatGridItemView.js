define(["jquery", "underscore", "parse", "handlebars", "text!templates/cat-grid-item.html"],
    function ($, _, Parse, Handlebars, template) {

    var CatGridSelItemView = Parse.View.extend({

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
          var cat = this.model.toJSON();
          cat.cid = this.model.cid;
          $(this.el).html(this.template(cat));
          return this;
        },

        goToDetails: function () {
          Parse.history.navigate("cats1/" + this.model.cid, {trigger: true});
        }
      });

    return CatGridSelItemView;

  });