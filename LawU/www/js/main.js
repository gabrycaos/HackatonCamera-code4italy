require.config({
  paths: {
    jquery: '../lib/jquery/jquery-1.9.1.min',
    underscore: '../lib/underscore/underscore-min',
    backbone: '../lib/backbone/backbone',
    text: '../lib/require/text-1.0.6',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
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


        /*function onDeviceReady() {
            var db = window.openDatabase("lawu", "1.0", "LawU", 5242880);
                db.transaction(populateDB, errorCB, successCB);
        }
            function populateDB(tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS utenti (nome VARCHAR( 20 ) NOT NULL , cognome  VARCHAR( 20 ) NOT NULL ,documentoric VARCHAR( 10 ) NOT NULL , email VARCHAR( 20 ) NOT NULL , pass VARCHAR( 20 ) NOT NULL , PRIMARY KEY ( email )');
                tx.executeSql('CREATE TABLE IF NOT EXISTS CATEGORIA (nome  VARCHAR( 20 ) NOT NULL , immagineid int(11) auto_increment,PRIMARY KEY ( immagineid )');
                tx.executeSql('CREATE TABLE IF NOT EXISTS CREATE TABLE punti (tema  VARCHAR( 20 ) NOT NULL ,titolo  VARCHAR( 20 ) NOT NULL, descrizione  VARCHAR(100) NOT NULL , voti int (10) NOT NULL, PRIMARY KEY (tema)');
                tx.executeSql('CREATE TABLE IF NOT EXISTS CREATE TABLE LEGGI (tema  VARCHAR( 20 ) NOT NULL ,titolo  VARCHAR( 20 ) NOT NULL, descrizione  VARCHAR(100) NOT NULL , voti int (10) NOT NULL, PRIMARY KEY (tema)');
                tx.executeSql('INSERT INTO utenti values( "mary80', 'xxyy", "1234567890", "Rossi@gmail.com","xxyy")');
                tx.executeSql('INSERT INTO utenti values( "prova", "prova", "0123456789", "prova@gmail.com","prova")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Giustizia","1")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Ambiente","2")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Economia e Finanze","3")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Salute","4")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Beni e attività culturali","5")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Difesa","6")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Infrastrutture e trasporti","7")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Istruzione, Università e ricerca","8")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Coesione Territoriale","9")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Immigrazione","10")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Politica","11")');
                tx.executeSql('INSERT INTO CATEGORIA (nome, immagineid) values( "Riforme Costituzionali","12")');
                tx.executeSql('INSERT INTO LEGGI values("Articolo 1","L’ Italia è una Repubblica democratica, fondata sul lavoro. La sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione.","20")');
                tx.executeSql('INSERT INTO LEGGI values("Articolo 2","La Repubblica riconosce e garantisce i diritti inviolabili dell uomo, sia come singolo sia nelle formazioni sociali ove si svolge la sua personalità, e richiede l adempimento dei doveri inderogabili di solidarietà politica, economica e sociale.","30")');
                tx.executeSql('INSERT INTO LEGGI values("Articolo 3","Tutti i cittadini hanno pari dignità sociale e sono eguali davanti alla legge, senza distinzione di sesso, di razza, di lingua, di religione, di opinioni politiche, di condizioni personali e sociali.È compito della Repubblica rimuovere gli ostacoli di ordine economico e sociale, che, limitando di fatto la libertà e l eguaglianza dei cittadini, impediscono il pieno sviluppo della persona umana e l effettiva partecipazione di tutti i lavoratori all organizzazione politica, economica e sociale del Paese.","40)');
                tx.executeSql('INSERT INTO temi values("Abrogazione legge 1000", "abroghiamo la legge 1000/99","100")');
                tx.executeSql('INSERT INTO temi values("Proposta legge utile", "utilizziamo la proposta di legge","2")');
                tx.executeSql('INSERT INTO punti values ("Abrogazione legge 1000","proposta di eliminazione tasse","la tassa XXX penalizza troppo i commercianti","34")');
                tx.executeSql('INSERT INTO punti values ("Abrogazione legge 1000","proposta di modifica","la tassa XXX penalizza troppo i commercianti","34")');
                tx.executeSql('INSERT INTO punti values ("Proposta legge utile","blablabla","0")');
            }
            function errorCB(err) {
                console.log("!!! Error processing SQL: "+err.code + ' - ' + err.message );
            }
            function successCB() {
            }
            function queryDB(tx) {
                tx.executeSql('SELECT * FROM leggi', [], querySuccess, errorCB);
            }*/