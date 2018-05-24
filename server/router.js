var express = require('express');
var router = express.Router();
var handleRegister = require('./handleSignUp');
var handleLogIn = require('./handleLogIn');
// var handleMessageCreate = require('./handleMessageCreate');
// var handleMessageGet = require('./handleMessageGet');
var path = require ('path');
var session = require('express-session');

// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

// function requiresLogin(req, res, next) {
//   if (req.session && req.session.userId) {
//     console.log(req.session.userId);
//     return next();
//   } else {
//     var err = new Error('You must be logged in to view this page.');
//     err.status = 401;
//     return next(err);
//   }
// }

// router.get('/messages', /*requireslLogin*/ function (req, res, next){
//   return res.sendFile(path.join(__dirname + '/../dist/messages.html'));
// });

router.get('/profile', function(req, res, next){
  return res.send(req.session.user);
})

router.post('/signup', handleRegister);
router.post('/login', handleLogIn);


// router.post('/messages', handleMessageCreate);
// router.get('/messagesGet', requiresLogin, handleMessageGet);

module.exports = router;