define(["jquery", "underscore", "parse", "handlebars", "text!templates/law-details.html"],
  function($, _, Parse, Handlebars, template) {

    var LawView = Parse.View.extend({

      events: {
        "touchend #lawubtn": "vote"
      },

      vote: function() {
        Parse.history.navigate("sign/" + this.model.cid, {
          trigger: true
        });
      },

      template: Handlebars.compile(template),
     
      render: function(eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
      }
    });

    return LawView;

  });