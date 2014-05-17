define(["jquery", "underscore", "backbone"],
  function ($, _, Backbone) {
    var Theme = Backbone.Model.extend({
      defaults: {
      	title: undefined,
      	description: undefined,
        votes: 0
      }

      });

    return Theme;

  });