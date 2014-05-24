define(["jquery", "underscore", "parse", "models/Comment"],
    function($, _, Parse, Comment) {

        var CommentCollection = Parse.Collection.extend({
            model: Comment,
            byId: function(id) {
                filtered = this.filter(function(box) {
                    return box.get("riferitoA") === id;
                });
                return new CommentCollection(filtered);
            }
        });
        return CommentCollection;
    });