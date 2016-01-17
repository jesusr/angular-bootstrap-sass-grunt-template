var express = require('express'),
  router = express.Router();
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

/* Generic Root */
router
  .get('/', function(req, res) {
    res.json({
      message: 'Api running FTW'
    });
  });

module.exports = router;

