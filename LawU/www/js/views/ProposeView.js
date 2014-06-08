define(["jquery", "underscore", "parse", "handlebars", "models/Law", "text!templates/propose.html"],
  function($, _, Parse, Handlebars, Law, template) {

    var ProposeView = Parse.View.extend({


      tagName: "div",
      id: "themePropose",

      events: {
        "touchend #submitbutton": "submit"
      },

      submit: function() {
        var title = $('#title').val();
        var description = $('#description').val();
        var user = Parse.User.current();
        var law = new Law({
          title: title,
          description: description,
          autore: user.getUsername(),
        });
        law.save();
        Parse.history.navigate("lawlist", {
          trigger: true
        });
      },

      template: Handlebars.compile(template),

      initialize: function() {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
      },

      render: function(eventName) {
        var propose = this.model.toJSON();
        $(this.el).html(this.template(propose));
        return this;
      },

    });

    return ProposeView;

  });