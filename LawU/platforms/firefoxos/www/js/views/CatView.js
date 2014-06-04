define(["jquery", "underscore", "parse", "pdfjs", "handlebars", "collections/CommentCollection", "models/Comment", "views/CommentListView", "text!templates/cat-view.html"],
  function($, _, Parse, PDFJS, Handlebars, CommentCollection, Comment, CommentListView, template) {

    var CatView = Parse.View.extend({

      tagName: "div",
      id: "pdfCont",

      events: {
        "touchend #submitbutton": "submit"
      },



      submit: function() {
        var comm = $('#description').val();
        var user = Parse.User.current();
        var rif = this.model.get('pdf');
        console.log(rif);
        var Comme = new Comment({
          inseritoDa: user.getUsername(),
          description: comm,
          riferitoA: rif,
        });
        Comme.save();
        console.log(Comme);
        $('#description').val("");
        this.render();
      },

      fetchComm: function(comments) {
        var rif = this.model.get('pdf');
        var queryComm = new Parse.Query(Comment);
        queryComm.equalTo("riferitoA", rif);
        queryComm.find({
          success: function(results) {
            console.log(results);
            comments.reset(results);
          },
          error: function(error) {
            console.log("error" + error.data);
            // error is an instance of Parse.Error.
          }
        });
      },

      template: Handlebars.compile(template),

      render: function(eventName) {
        this.Comments = new CommentCollection([]);
        this.fetchComm(this.Comments);
        console.log(this.Comments);
        $(this.el).html(this.template(this.model.toJSON()));
        $(this.el).append(new CommentListView({
          model: this.Comments
        }).render().el
        );
        return this;
      }
    });

    return CatView;

  });