define(["jquery", "underscore", "backbone", "handlebars", "text!templates/cat-details.html"],
    function ($, _, Backbone,  Handlebars, template) {

    var CatView = Backbone.View.extend({

                tagName: "div",
                id: "pdfCont",
        
        events: {
          "touchend #submitbutton": "submit"
        },

        submit: function () {
          var comm = $('#description').val();
          $('#description').val("");
          $('#comments').append('<a id="comment">'+comm+'</a>');
        },

        template: Handlebars.compile(template),

        render: function (eventName) {
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
      });

    return CatView;

  });