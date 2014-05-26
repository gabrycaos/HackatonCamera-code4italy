define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var DrawBox = Parse.Object.extend( "DrawBox",	{
      defaults: {
      	title: undefined,
      	pdf: undefined
      }
      });
    return DrawBox;
  });