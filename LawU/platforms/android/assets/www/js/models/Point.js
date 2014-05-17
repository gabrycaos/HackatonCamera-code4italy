define(["jquery", "underscore", "backbone"],
  function ($, _, Backbone) {
    var Point = Backbone.Model.extend({
      defaults: {
      	title: undefined,
      	theme: undefined,
      	description: undefined,
        votes: 0
      }

      });

    return Point;

  });