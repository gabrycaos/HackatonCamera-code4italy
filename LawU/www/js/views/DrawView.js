define(["jquery", "underscore", "parse", "handlebars", "text!templates/draw.html"],
    function($, _, Parse, Handlebars, template) {

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
                "touchend #main": "disengage"
            },

            template: Handlebars.compile(template),

            initialize: function() {
            this.render();
            alert("initialize!");
            },

            //Render the contents
            render: function() {
                alert("O");
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
                context = canvas.getContext("2d");
                context.lineWidth = radius * 2;
            },

         /*   updateStatus: function() {
                this.$("#divStatusbar").html("Canvas Loaded");
            },*/

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
            }
        });
        return DrawView;
    });