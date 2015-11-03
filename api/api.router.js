(function() {
  'use strict';
  var express = require('express'),
    router = express.Router(),
    Users = require('./models/user.model'),
    md5 = require('md5');

  // Api Routes
  /* Middle ware */
  router
    .use(function(req, res, next) {
      console.log('Something is happening.');
      next();
    });

  /* api/say-hello */
  router
    .route('/say-hello')
    .get(function(req, res) {
      res.json({
        message: 'Hello, Im your son!'
      });
    });
  /* api/user */
  router
    .route('/user/:username')
    .get(function(req, res) {
      console.log(req.params);
      Users.find({
        userName: req.params.username
      }, function(err, song) {
        if (err) {
          res.send(err);
        }
        res.json(song);
      });
    });
  router
    .route('/user')
    .get(function(req, res) {
      Users.find(function(err, d) {
        if (err) {
          res.send(err);
        }
        res.json(d);
      });
    })
    .post(function(req, res) {
      var user = new Users(req.body);
      console.log(req.body.password);
      user.salt = md5(req.body.password);
      delete user.password;
      user.dateCreation = new Date();
      user.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({
          message: 'User Created',
          code: '200'
        });
      });
    });
  /* Generic Root */
  router
    .get('/', function(req, res) {
      res.json({
        message: 'Api running FTW'
      });
    });

  module.exports = router;

})();

