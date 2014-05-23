define(["jquery", "underscore", "parse", "pdfjs", "handlebars", "text!templates/cat-details.html"],
    function ($, _, Parse, PDFJS, Handlebars, template) {

    var CatView = Parse.View.extend({

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
          var pdf = this.model.get('url');
          console.log(pdf);
          $(this.el).html(this.template(this.model.toJSON()));
          return this;
        }
      });

    return CatView;

  });