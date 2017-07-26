//  PACKAGE DEFINITIONS
var express = require('express');
var router  = express.Router();
var config  = require('../config');

// CONTROLLER DEFINITIONS
var movieController = require('../controllers/movieController');


router.get('/',function(req, res) {

  console.log('home');

});

router.get('/movies', movieController.get);
router.get('/movie', movieController.getOne);

module.exports = router;
