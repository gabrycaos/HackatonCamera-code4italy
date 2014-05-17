define(["jquery", "underscore", "backbone"],
  function ($, _, Backbone) {
    var Propose = Backbone.Model.extend({
      defaults: {
                title: undefined
      }

      });

    return Propose;

  });