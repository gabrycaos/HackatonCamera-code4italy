define(["jquery", "underscore", "parse", "handlebars", "text!templates/login.html"],
  function($, _, Parse, Handlebars, template) {

    var LawListView = Parse.View.extend({

      tagName: "div",
      id: "login",

      events: {
          "touchend #submit": "login",
          "touchend #signup": "signup"
        },

      template: Handlebars.compile(template),

      login: function(){
      var username = this.$("#login-username").val();
      var password = this.$("#login-password").val();
            Parse.User.logIn(username, password, {
        success: function(user) {
          Parse.history.navigate("lawlist", {trigger: true})
        },

        error: function(user, error) {
         alert("wrong username or invalid password");
        }
      });
      },

      signup: function(){
        Parse.history.navigate("signup", {trigger: true})
      },

      render: function(eventName) {
          $(this.el).html(this.template());
          return this;
      }
    });

    return LawListView;

  });