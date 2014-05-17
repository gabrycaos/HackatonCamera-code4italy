define(["jquery", "underscore", "backbone", "models/Theme"],
    function ($, _, Backbone, Theme) {

    var ThemeCollection = Backbone.Collection.extend({
        model: Theme
      });

    return ThemeCollection;

  });