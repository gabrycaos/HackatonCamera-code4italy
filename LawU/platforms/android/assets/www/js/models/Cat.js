define(["jquery", "underscore", "backbone"],
  function ($, _, Backbone) {
    var Cat = Backbone.Model.extend({
      defaults: {
      	title: undefined,
      	figure: undefined
      }

      });

    return Cat;

  });