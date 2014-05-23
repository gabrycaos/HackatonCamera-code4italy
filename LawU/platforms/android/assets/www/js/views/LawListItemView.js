define(["jquery", "underscore", "parse", "handlebars", "text!templates/law-list-item.html"],
    function ($, _, Parse, Handlebars, template) {

    var LawListItemView = Parse.View.extend({

        tagName: "li",

        events: {
          "touchend": "goToDetails"
        },

        template: Handlebars.compile(template),

   /*     initialize: function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
        },
*/
        render: function (eventName) {
          var law = this.model.toJSON();
          law.cid = this.model.cid;
          $(this.el).html(this.template(law));
          return this;
        },

        goToDetails: function () {
          Parse.history.navigate("laws/" + this.model.cid, {trigger: true});
        }
      });

    return LawListItemView;

  });