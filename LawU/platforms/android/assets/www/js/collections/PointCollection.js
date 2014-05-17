define(["jquery", "underscore", "backbone", "models/Point"],
    function ($, _, Backbone, Point) {

    var PointCollection = Backbone.Collection.extend({
        model: Point
      });

    return PointCollection;

  });