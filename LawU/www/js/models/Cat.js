define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Cat = Parse.Object.extend( "Cat",	{
      defaults: {
      	title: undefined,
      	pdf: undefined
      }
      });
    return Cat;
  });