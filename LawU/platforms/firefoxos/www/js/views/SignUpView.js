define(["jquery", "underscore", "parse", "handlebars", "text!templates/signup.html"],
  function($, _, Parse, Handlebars, template) {

    var LawListView = Parse.View.extend({

      tagName: "div",
      id: "signup-form",

      events: {
          "touchend #sendData": "register"
        },

        template: Handlebars.compile(template),

      register: function(){
        var username = this.$("#signup-username").val();
        var password = this.$("#signup-password").val();
        var email = this.$("#signup-email").val();
        var name = this.$("#signup-name").val();
        var surname = this.$("#signup-surname").val();
        var birthday = this.$("#birthday").val();
        var birthmonth = this.$("#birthday-month").val();
        var year = this.$("#year").val();
        var birthDate = new Date(year, birthmonth, birthday);
        console.log(birthDate);
        var birthplace = this.$("#signup-birthplace").val();
        var typeDocument = this.$("#signup-document").val();
        console.log(typeDocument);
        var documentNumber = this.$("#signup-document-number").val();
      Parse.User.signUp(username, password, {
       Nome: name,
       Cognome: surname,
       email: email,
       DataNascita: birthDate,
       LuogoNascita: birthplace,
       Documento: typeDocument,
       nDocumento: documentNumber,
       ACL: new Parse.ACL(),
       }, {
        success: function(user) {
         Parse.history.navigate("loginUser", {trigger: true});
        // window.history.back();
        },
        error: function(user, error) {
          console.log(error.code+": "+error.message)
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