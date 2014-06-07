require.config({
  paths: {
    jquery: '../lib/jquery/jquery',
    underscore: '../lib/underscore/underscore-min',
    parse: '../lib/backbone/parse',
    text: '../lib/require/text-1.0.6',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    templates: '../templates'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'parse': {
      deps: ['jquery', 'underscore'],
      exports: 'Parse'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

// We launch the App
require(['underscore', 'parse', 'router'],
    function (_, Parse, AppRouter) {

      document.addEventListener("deviceready", run, false);

      function run() {
  Parse.initialize("gEV6sbITrgr6L6tFmck4PTYsPHjtbLscUEkN4jEo", "Js1z5NN3yl9FeuTtDpkGabCZM7cSV69dov2iMvzw");
          new AppRouter();
        Parse.history.start();
      }
  });

