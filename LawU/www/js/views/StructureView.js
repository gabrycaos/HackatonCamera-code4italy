define(["jquery", "underscore", "parse", "handlebars", "text!templates/structure.html"],
    function ($, _, Parse, Handlebars, template) {

        var StructureView = Parse   .View.extend({

            tagName: "div",
            id: "mainContainer",

            events: {
                "lawlist": "lawlist",
                "catgrid": "catgrid",
                "propose": "propose"
            },

            lawlist: function() {
                Parse.history.navigate("lawlist", {trigger: true});
            },

            catgrid: function() {
                Parse.history.navigate("catgrid", {trigger: true});
            },

            propose: function() {
                Parse.history.navigate("propose", {trigger: true});
            },

            template: Handlebars.compile(template),


            render: function () {
                $(this.el).html(this.template());
                $('body').append($(this.el));
                return this;
            },


            setActiveTabBarElement: function(elementId) {
                // here we assume that at any time at least one tab bar element is active
                document.getElementsByClassName("active")[0].classList.remove("active");
                document.getElementById(elementId).classList.add("active");
            }

        });
        return StructureView;

    });