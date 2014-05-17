define(["jquery", "underscore", "backbone"],
  function ($, _, Backbone) {
    var Law = Backbone.Model.extend({
      defaults: {
      	title: undefined,
      	theme: undefined,
      	description: undefined,
        votes: 0
      }

      });

    return Law;

  });