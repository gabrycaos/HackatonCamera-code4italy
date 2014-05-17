define(["jquery", "underscore", "backbone", "collections/LawCollection", "models/Law", "views/LawView", "views/LawListView", "collections/ThemeCollection", "models/Theme", "views/ThemeView", "views/ThemeListView", "collections/PointCollection", "models/Point", "views/PointView", "views/PointListView", "collections/CatCollection", "models/Cat", "views/CatGridView", "views/CatGridSelView", "models/Propose", "views/ProposeView"],
    function ($, _, Backbone, LawCollection, Law, LawView, LawListView, ThemeCollection, Theme, ThemeView, ThemeListView, PointCollection, Point, PointView, PointListView, CatCollection, Cat, CatGridView, CatGridSelView, Propose, ProposeView) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        "": "lawlist",
        "lawlist": "lawlist",
        "laws/:id": "lawDetails",
        "themelist": "themelist",
        "themes/:id": "themeDetails",
        "pointlist": "pointlist",
        "points/:id": "pointDetails",
        "catgridsel": "catgridsel",
        "catgrid": "catgrid",
        "propose": "propose"
      },

      initialize: function () {
        this.currentView = undefined;

        /*// Query the database
        //
        function getCat(tx) {
            tx.executeSql('SELECT * FROM CATEGORIA', [], querySuccess, errorCB);
        }

        // Query the success callback
        //
        function querySuccess(tx, results) {
            var len = results.rows.length;
            this.result = [];
            for (var i=0; i<len; i++){
            var cat = new Cat({
            name: results.rows.item(i).nome,
            picture: "./res/icon/ios/icon-57.png"
            });
alert("Row = " + i + " ID = " + results.rows.item(i).id.nome);
            result.push(cat);
            }
            return this.result;
        }

        function errorCB(tx, results) {alert("errore");}*/

        var cat1 = new Cat({
          name: "Categoria 1",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat2 = new Cat({
          name: "Categoria 2",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat3 = new Cat({
          name: "Categoria 3",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat4 = new Cat({
          name: "Categoria 4",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat5 = new Cat({
          name: "Categoria 5",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat6 = new Cat({
          name: "Categoria 6",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat7 = new Cat({
          name: "Categoria 7",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat8 = new Cat({
          name: "Categoria 8",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat9 = new Cat({
          name: "Categoria 9",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat10 = new Cat({
          name: "Categoria 10",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat11 = new Cat({
          name: "Categoria 11",
          picture: "./res/icon/ios/icon-57.png"
        });
        var cat12 = new Cat({
          name: "Categoria 12",
          picture: "./res/icon/ios/icon-57.png"
        });
        var law1 = new Law({
          title: "Legge 1",
          theme: "Tema A",
          description: "Breve edscrizione della legge in oggetto.......................",
          votes: "1000"
        });
        var law2 = new Law({
          title: "Legge 2",
          theme: "Tema B",
          description: "Breve edscrizione della legge in oggetto.......................",
          votes: "5000"
        });
        var theme1 = new Theme({
          title: "Tema A",
          description: "Breve edscrizione del tema in oggetto.......................",
          votes: "1000"
        });
        var theme2 = new Theme({
          title: "Tema B",
          description: "Breve edscrizione del tema in oggetto.......................",
          votes: "5000" 
        });
        var point1 = new Point({
          title: "Punto 1",
          theme: "Tema A",
          description: "Breve edscrizione della legge in oggetto.......................",
          votes: "1000"
        });
        var point2 = new Point({
          title: "Punto 2",
          theme: "Tema A",
          description: "Breve edscrizione della legge in oggetto.......................",
          votes: "5000" 
        });
        this.cats1 = new CatCollection([cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12]);
        this.cats2 = new CatCollection([cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12]);
        this.laws = new LawCollection([law1, law2]);
        this.themes = new ThemeCollection([theme1, theme2]);
        this.points = new PointCollection([point1, point2]); 
        this.propose = new Propose();       
      },

      lawlist: function () {
        var page = new LawListView({
          model: this.laws
        });
        this.changePage(page);
      },

      themelist: function () {
        var page = new ThemeListView({
          model: this.themes
        });
        this.changePage(page);
      },

      pointlist: function () {
        var page = new PointListView({
          model: this.points
        });
        this.changePage(page);
      },

      catgrid: function () {
        var page = new CatGridView({
          model: this.cats1
        });
        this.changePage(page);
      },

      catgridsel: function () {
        var page = new CatGridSelView({
          model: this.cats2
        });
        this.changePage(page);
      },

      lawDetails: function (id) {
        var law = this.laws.get(id);
        this.changePage(new LawView({
          model: law
        }));
      },

      themeDetails: function (id) {
        var theme = this.themes.get(id);
        this.changePage(new ThemeView({
          model: theme
        }));
      },

      pointDetails: function (id) {
        var point = this.points.get(id);
        this.changePage(new PointView({
          model: point
        }));
      },

      propose: function () {
        var page = new ProposeView({
          model: this.propose
        });
        this.changePage(page); 
      },

      changePage: function (page) {
        if(this.currentView) {
           this.currentView.remove();
         }

        this.currentView = page;
        page.render();
        $('body').append($(page.el));
      }

    });

    return AppRouter;

  });
