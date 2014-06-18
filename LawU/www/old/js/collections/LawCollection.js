define(["jquery", "underscore", "parse", "models/Law"],
    function ($, _, Parse, Law) {

    var LawCollection = Parse.Collection.extend({
        model: Law
      });

    return LawCollection;

  });