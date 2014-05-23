define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Law = Parse.Object.extend( "Law", {
      defaults: {
        title: undefined,
        description: undefined,
        votes: 0
      
      }
      });

    return Law;

  });