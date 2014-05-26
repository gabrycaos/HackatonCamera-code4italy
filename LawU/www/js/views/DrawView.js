define(["jquery", "underscore", "parse", "handlebars", "models/Sign", "text!templates/draw.html"],
    function($, _, Parse, Handlebars, Sign, template) {

        var canvas;
        var context;
        var radius = 2;
        var dragging = false;
        var targetTouch;
        var rect;

        var DrawView = Parse.View.extend({


            events: {
                "touchstart #main": "engage",
                "touchmove #main": "putPoint",
                "touchend #main": "disengage",
                "touchend #clear": "clear",
                "touchend #lawubtn": "saveImage"
            },

            template: Handlebars.compile(template),

            initialize: function() {},

            //Render the contents
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                this.delegateEvents();
                var that = this;
                setTimeout(function() {
                    that.prepSignPad()
                }, 0);
                return this;
            },

            prepSignPad: function() {
                canvas = document.getElementById("main");
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                context = canvas.getContext("2d");
                context.lineWidth = radius * 2;
            },

            putPoint: function(e) {
                e.preventDefault();
                targetTouch = e.originalEvent.targetTouches[0];

                rect = canvas.getBoundingClientRect();

                var x = targetTouch.pageX - rect.left;
                var y = targetTouch.pageY - rect.top;

                if (dragging) {
                    context.lineTo(x, y);
                    context.stroke();
                    context.fillStyle = "black";
                    context.beginPath();
                    context.arc(x, y, radius, 0, Math.PI * 2);
                    context.fill();
                    context.beginPath();
                    context.moveTo(x, y);
                }
            },

            engage: function(e) {
                dragging = true;
                this.putPoint(e);
            },

            disengage: function() {
                dragging = false;
                context.beginPath();
            },
            clear: function() {
                context.fillStyle = "#ffffff";
                context.rect(0, 0, window.innerWidth, window.innerHeight);
                context.fill();
            },
            saveImage: function() {
                var title = this.model.get("title");
                var img = canvas.toDataURL("image/png");
                var imageTitle = this.model.get("title") + "-" + Parse.User.current().getUsername() + ".png";
                // var file = new File(img, imageTitle);
                var parseFile = new Parse.File(imageTitle, {
                    "base64": img
                });
                parseFile.save();
                var sign = new Sign({
                    user: Parse.User.current().getUsername(),
                    riferitoA: this.model.get("title"),
                    file: parseFile
                });
                sign.save();
                Parse.history.navigate("lawlist", {
                    trigger: true
                });
            }
        });
        return DrawView;
    });