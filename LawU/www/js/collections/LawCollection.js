define(["jquery", "underscore", "backbone", "models/Law"],
    function ($, _, Backbone, Law) {

    var LawCollection = Backbone.Collection.extend({
        model: Law
      });

    return LawCollection;

  });