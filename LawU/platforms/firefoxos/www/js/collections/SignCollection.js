define(["jquery", "underscore", "parse", "models/Sign"],
    function ($, _, Parse, Sign) {

    var SignCollection = Parse.Collection.extend({
        model: Sign
      });
    return SignCollection;
  });