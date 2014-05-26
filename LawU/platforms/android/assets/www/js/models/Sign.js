define(["jquery", "underscore", "parse"],
	function($, _, Parse) {
		var Sign = Parse.Object.extend("Sign", {
			defaults: {
				user: undefined,
				riferitoA: undefined,
				file: undefined
			}
		});
		return Sign;
	});