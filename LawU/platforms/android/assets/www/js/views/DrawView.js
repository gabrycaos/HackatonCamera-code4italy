define(["jquery", "underscore", "parse", "handlebars", "text!templates/draw.html"],
    function($, _, Parse, Handlebars, template) {

        var LawView = Parse.View.extend({


            tagName: "canvas",
            id: "pdfCont",

            events: {
                "touchstart #main": "start",
                "touchmove #main": "move",
                "touchend #clear": "clear",
                "touchend #lawubtn": "vote"
            },
            initialize: function() {
                var canvas = document.getElementById('main');
                var canvastop = canvas.offsetTop;
                var context = canvas.getContext("2d");
                var lastx;
                var lasty;
                context.strokeStyle = "#000000";
                context.lineCap = 'round';
                context.lineJoin = 'round';
                context.lineWidth = 3;
            },
            vote: function() {

            },

            start: function() {
                event.preventDefault();
                lastx = event.touches[0].clientX;
                lasty = event.touches[0].clientY - canvastop;
                dot(lastx, lasty);
            },

            move: function() {
                event.preventDefault();
                var newx = event.touches[0].clientX;
                var newy = event.touches[0].clientY - canvastop;
                line(lastx, lasty, newx, newy);
                lastx = newx;
                lasty = newy;
            },

            line: function(fromx, fromy, tox, toy) {
                context.beginPath();
                context.moveTo(fromx, fromy);
                context.lineTo(tox, toy);
                context.stroke();
                context.closePath();
            },

            dot: function(x, y) {
                context.beginPath();
                context.fillStyle = "#000000";
                context.arc(x, y, 1, 0, Math.PI * 2, true);
                context.fill();
                context.stroke();
                context.closePath();
            },

            clear: function() {
                context.fillStyle = "#ffffff";
                context.rect(0, 0, 450, 800);
                context.fill();
            },

            template: Handlebars.compile(template),

            render: function(eventName) {

                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return LawView;
    });