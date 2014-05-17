define(["jquery", "underscore", "backbone", "pdf", "handlebars", "text!templates/cat-details.html"],
    function ($, _, Backbone, Pdf, Handlebars, template) {

    var CatView = Backbone.View.extend({

                tagName: "div",
                id: "grid",
        
        events: {
          "touchend #lawubtn": "vote"
        },

        vote: function () {
          
        },

        template: Handlebars.compile(template),

        render: function (eventName) {

          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
      });

    return CatView;

  });