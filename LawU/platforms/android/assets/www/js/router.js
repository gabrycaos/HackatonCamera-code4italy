define(["jquery", "underscore", "parse", "collections/LawCollection", "collections/CommentCollection", "models/Law", "models/Comment", "views/LogInView", "views/SignUpView", "views/LawView", "views/LawListView", "collections/CatCollection", "models/Cat", "views/CatGridView", "models/Propose", "views/ProposeView", "views/CatView"],
  function($, _, Parse, LawCollection, CommentCollection, Law, Comment, LogInView, SignUpView, LawView, LawListView, CatCollection, Cat, CatGridView, Propose, ProposeView, CatView) {

    var AppRouter = Parse.Router.extend({

      routes: {
        "": "login",
        "loginUser": "login",
        "lawlist": "lawlist",
        "signup": "signup",
        "laws/:id": "lawDetails",
       // "sign/:id": "draw",
        "cats1/:id": "catDetails",
        "catgrid": "catgrid",
        "propose": "propose"
      },

      initialize: function() {
        this.currentView = undefined;
        this.laws = new LawCollection([]); //law1, law2
        this.laws.query = new Parse.Query(Law);
        this.comments = new CommentCollection([]);
        this.cats1 = new CatCollection([]);
        this.propose = new Propose();
        this.getData(this.cats1);
        this.fetchLaw(this.laws);
        this.fetchComm(this.comments);
      },
      login: function() {
        $('#navi').hide();
        var page = new LogInView({});
        this.changePage(page);
      },

      signup: function() {
        $('#navi').hide();
        var page = new SignUpView({});
        this.changePage(page);
      },
      fetchLaw: function(laws) {
        var queryLaws = new Parse.Query(Law);
        queryLaws.find({
          success: function(results) {
            laws.reset(results);
          },
          error: function(error) {
            console.log("error" + error.data)
            // error is an instance of Parse.Error.
          }
        });
      },
      fetchComm: function(comments) {
        var queryComm = new Parse.Query(Comment);
        queryComm.find({
          success: function(results) {
            comments.reset(results);
          },
          error: function(error) {
            console.log("error" + error.data)
            // error is an instance of Parse.Error.
          }
        });
      },
      getData: function(container) {
        var URL = "http://lawu.altervista.org/getData.php";
        $.ajax({
          url: URL,
          dataType: 'json',
          success: function(res, code) {
            entries = [];
            var data = res.rows;
            $.each(data, function(i, v) {
              entry = new Cat({
                title: v.denominazione.value,
                pdf: v.pdf.value,
              });
              entries.push(entry);
            });
            container.reset(entries);
          },
          error: function(jqXHR, status, error) {
            alert("Connessione assente");
          },
        });
      },
      lawlist: function() {
        this.fetchLaw(this.laws);
        $('#navi').show();
        var page = new LawListView({
          model: this.laws
        });
        this.changePage(page);
      },
      catgrid: function() {
        var page = new CatGridView({
          model: this.cats1
        });
        this.changePage(page);
      },
      lawDetails: function(id) {
        var law = this.laws.getByCid(id);
        this.changePage(new LawView({
          model: law
        }));
      },
  /*    draw: function(id) {
        var law = this.laws.getByCid(id);
        this.changePage(new DrawView({
          model: law
        }));
      },*/
      catDetails: function(id) {
        var cat = this.cats1.getByCid(id);
        this.changePage(new CatView({
          model: cat
        }));
      },
      propose: function() {
        var page = new ProposeView({
          model: this.propose
        });
        this.changePage(page);
      },
      changePage: function(page) {
        if (this.currentView) {
          this.currentView.remove();
        }

        this.currentView = page;
        page.render();
        $('body').append($(page.el));
      }
    });
    return AppRouter;
  });