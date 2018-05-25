var express = require('express');
var router = express.Router();
var handleRegister = require('./handleSignUp');
var handleLogIn = require('./handleLogIn');
var handleTodoCreate = require('./handleTodoCreate');
var handleTodoGet = require('./handleTodoGet');
var handleNoteCreate = require('./handleNoteCreate');
var handleNoteGet = require('./handleNoteGet');
var handleReminderCreate = require('./handleReminderCreate');
var handleReminderGet = require('./handleReminderGet');
var handleTodoDelete = require('./handleTodoDelete');
var path = require ('path');
var session = require('express-session');



// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/../dist/index.html'));
});


router.get('/profile', function(req, res, next){
  return res.send(req.session.user);
})

router.post('/signup', handleRegister);
router.post('/login', handleLogIn);

router.get('/todo', handleTodoGet);
router.post('/todo', handleTodoCreate);
router.get('/note', handleNoteGet);
router.post('/note', handleNoteCreate);
router.get('/reminder', handleReminderGet);
router.post('/reminder', handleReminderCreate);

router.delete('/todo/:id', handleTodoDelete);
// CONTINUE FROM HERE


module.exports = router;