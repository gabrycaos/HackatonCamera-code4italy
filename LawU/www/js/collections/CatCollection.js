define(["jquery", "underscore", "backbone", "models/Cat"],
    function ($, _, Backbone, Cat) {

    var CatCollection = Backbone.Collection.extend({
        model: Cat
      });

    return CatCollection;

  });