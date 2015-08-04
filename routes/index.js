var express = require('express')
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

/*router.get('/pizza/:topping/:qty', function (req, res) {
  var obj = req.params;
  obj.title = 'Pizza Shop';
  res.render('templates/pizza', obj); //object that represents your route params
});*/


router.get(/hello/, function (req, res) {
  res.send('Hello!');
});

//need to fix this; returns a server error

router.get('/awesomethings', function (req, res) {
  setTimeout(function () {
    var awesomeThings = [
    'Pizza',
    'Bacon',
    '2nd Amendment',
    'Pluto',
    'Space Jam'
  ];
    res.render('templates/world', {
      //title: 'Awesomesite.com', //use instead app.locals.title in app.js; creates a global variable
      welcome: 'Thanks for coming!',
      awesomeThings: awesomeThings
    });
  }, 5000);
});


router.get('/', function (req, res) {
  res.send('this is the root!'); //first one gets response like in if/else chain
});
//app can be chained, including the .listen
//need to remove the semicolons for this to work

router.get('/test', function (req, res, next) { //will only see this one because of order
  res.write('Test 1!');
  next();
});
router.get('/test', function (req, res) {
  res.end('Test 2!');
});

router.get('/json', function (req, res) {
  res.send({
    'an': 'Object'
  });
});

router.get('/thisshoulderror', function (req, res) {
  res.send(badVariable);
});

module.exports = router;
