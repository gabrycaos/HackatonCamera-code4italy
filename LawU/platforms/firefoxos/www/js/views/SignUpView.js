define(["jquery", "underscore", "parse", "handlebars", "text!templates/signup.html"],
  function($, _, Parse, Handlebars, template) {

    var LawListView = Parse.View.extend({

      tagName: "form",
      id: "signup-form",

      events: {
          "touchend #sendData": "register"
        },

        template: Handlebars.compile(template),

      register: function(){
        var username = this.$("#signup-username").val();
        var password = this.$("#signup-password").val();
      Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
        success: function(user) {
         Parse.history.navigate("loginUser", {trigger: true});
        },
        error: function(user, error) {
          alert("NOOO!!!")
        }
      });
      },

      render: function(eventName) {
          $(this.el).html(this.template());
          return this;
      }
    });

    return LawListView;

  });