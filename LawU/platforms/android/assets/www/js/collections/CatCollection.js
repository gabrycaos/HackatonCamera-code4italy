define(["jquery", "underscore", "parse", "models/Cat"],
    function ($, _, Parse, Cat) {

    var CatCollection = Parse.Collection.extend({
        model: Cat
      });

    return CatCollection;

  });