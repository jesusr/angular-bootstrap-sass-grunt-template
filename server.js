(function() {
  'use strict';
  var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    api = require('./api/api.router.js'),
    port = process.env.PORT || 4443;

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use(express.static(__dirname + '/dist'));
  app.use('/api', api);
  app.use('/api/*', api);

  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
  });

  app.listen(port);
  console.log('Listening at ' + port);
})();
