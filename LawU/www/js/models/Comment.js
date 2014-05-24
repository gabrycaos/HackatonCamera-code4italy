define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Comment = Parse.Object.extend( "Comment", {
      defaults: {
        inseritoDa: undefined,
        description: undefined,
        riferitoA: undefined
      }
      });

    return Comment;

  });