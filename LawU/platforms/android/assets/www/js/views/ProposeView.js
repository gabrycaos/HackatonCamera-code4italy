define(["jquery", "underscore", "backbone", "handlebars", "text!templates/propose.html"],
    function ($, _, Backbone, Handlebars, template) {

    var ProposeView = Backbone.View.extend({

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

        

        render: function (eventName) {
          var propose = this.model.toJSON();
          $(this.el).html(this.template(propose));
          return this;
        },

      });

    return ProposeView;

  });