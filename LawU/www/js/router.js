define(["jquery", "underscore", "backbone", "collections/LawCollection", "models/Law", "views/LawView", "views/LawListView", "collections/ThemeCollection", "models/Theme", "views/ThemeView", "views/ThemeListView", "collections/PointCollection", "models/Point", "views/PointView", "views/PointListView", "collections/CatCollection", "models/Cat", "views/CatGridView", "views/CatGridSelView", "models/Propose", "views/ProposeView", "views/CatView"],
    function ($, _, Backbone, LawCollection, Law, LawView, LawListView, ThemeCollection, Theme, ThemeView, ThemeListView, PointCollection, Point, PointView, PointListView, CatCollection, Cat, CatGridView, CatGridSelView, Propose, ProposeView, CatView) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        "": "lawlist",
        "lawlist": "lawlist",
        "laws/:id": "lawDetails",
        "themelist": "themelist",
        "themes/:id": "themeDetails",
        "pointlist": "pointlist",
        "points/:id": "pointDetails",
        "cats1/:id": "catDetails",
        "catgridsel": "catgridsel",
        "catgrid": "catgrid",
        "propose": "propose"
      },

      initialize: function () {
        this.currentView = undefined;


        var law1 = new Law({
          title: "Legge di iniziativa popolare 1",
          theme: "Tema A",
          description: "Breve edscrizione della legge in oggetto.......................",
          votes: "1000"
        });
        var law2 = new Law({
          title: "Legge di iniziativa popolare 2",
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
        this.cats1 = new CatCollection([]);
        this.laws = new LawCollection([law1, law2]);
        this.themes = new ThemeCollection([theme1, theme2]);
        this.points = new PointCollection([point1, point2]); 
        this.propose = new Propose();
        this.getData(this.cats1);       
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
                          console.log(entry.get("pdf"));
                        });
                        container.reset(entries);
                        console.log(entries);
                    },
                    error: function(jqXHR, status, error) {
                            alert("Connessione assente");
                },
           });
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
        catDetails: function (id) {
        var cat = this.cats1.get(id);
        this.changePage(new CatView({
          model: cat
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
