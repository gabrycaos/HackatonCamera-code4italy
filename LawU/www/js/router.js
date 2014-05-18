define(["jquery", "underscore", "backbone", "collections/LawCollection", "models/Law", "views/LawView", "views/LawListView", "collections/CatCollection", "models/Cat", "views/CatGridView", "models/Propose", "views/ProposeView", "views/CatView"],
    function ($, _, Backbone, LawCollection, Law, LawView, LawListView, CatCollection, Cat, CatGridView, Propose, ProposeView, CatView) {

    var AppRouter = Backbone.Router.extend({

      routes: {
        "": "lawlist",
        "lawlist": "lawlist",
        "laws/:id": "lawDetails",
        "cats1/:id": "catDetails",
        "catgrid": "catgrid",
        "propose": "propose"
      },

      initialize: function () {
        this.currentView = undefined;


        var law1 = new Law({
          title: "Legge di iniziativa popolare 1",
          theme: "Tema A",
          description: "Breve descrizione della legge in oggetto.......................",
          votes: "1000"
        });
        var law2 = new Law({
          title: "Legge di iniziativa popolare 2",
          theme: "Tema B",
          description: "Breve descrizione della legge in oggetto.......................",
          votes: "5000"
        });
        this.cats1 = new CatCollection([]);
        this.laws = new LawCollection([law1, law2]);
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
      catgrid: function () {
        var page = new CatGridView({
          model: this.cats1
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
