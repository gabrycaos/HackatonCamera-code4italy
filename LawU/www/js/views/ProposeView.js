define(["jquery", "underscore", "parse", "handlebars", "text!templates/propose.html"],
    function ($, _, Parse, Handlebars, template) {

    var ProposeView = Parse.View.extend({

        tagName: "a",

        events: {
          "submitbutton": "submit"
        },

        submit: function () {
          var title = $('#title').val();
          alert(title);
          var description = $('#description').val();
          alert(description);
         // Backbone.history.navigate("propose", {trigger: true});
        },
        
        template: Handlebars.compile(template),

        initialize: function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
        },

        render: function (eventName) {
          var propose = this.model.toJSON();
          $(this.el).html(this.template(propose));
          return this;
        },

      });

    return ProposeView;

  });