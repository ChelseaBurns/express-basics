var express = require('express');
var router = express.Router();

router.get('/:topping/:qty', function (req, res) {
  var obj = req.params;
  //obj.title = 'Pizza Shop'; //use instead app.locals.title in app.js; creates a global variable
  res.render('templates/pizza', obj); //object that represents your route params
});

module.exports =  router;
