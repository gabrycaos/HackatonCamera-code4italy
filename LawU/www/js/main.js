require.config({
  paths: {
    jquery: '../lib/jquery/jquery',
    underscore: '../lib/underscore/underscore-min',
    backbone: '../lib/backbone/backbone',
    text: '../lib/require/text-1.0.6',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    pdf: '../lib/pdf/pdf',
    templates: '../templates'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'pdf': {
        exports: 'Pdf'
    }
  }
});

// We launch the App
require(['underscore', 'backbone', 'router'],
    function (_, Backbone, AppRouter) {

      document.addEventListener("deviceready", run, false);

      function run() {
        new AppRouter();
        Backbone.history.start();
      }
  });