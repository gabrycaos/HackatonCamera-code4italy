define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Propose = Parse.Object.extend("Propose", {
      defaults: { 
                title: undefined
      }

      });

    return Propose;

  });