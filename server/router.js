var express = require('express');
var router = express.Router();
var handleRegister = require('./handleSignUp');
var handleLogIn = require('./handleLogIn');
var handleTodoCreate = require('./handleTodoCreate');
var handleTodoUpdate = require('./handleTodoUpdate');
var handleTodoGet = require('./handleTodoGet');
var handleNoteCreate = require('./handleNoteCreate');
var handleNoteGet = require('./handleNoteGet');
var handleReminderCreate = require('./handleReminderCreate');
var handleReminderGet = require('./handleReminderGet');
var handleTodoDelete = require('./handleTodoDelete');
var handleNoteDelete = require('./handleNoteDelete');
var handleReminderDelete = require('./handleReminderDelete');
var path = require ('path');
var session = require('express-session');



// GET route for loading the data from the build angular index.html file
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

// User  
router.get('/profile', function(req, res, next){
  return res.send(req.session.user);
})

router.post('/signup', handleRegister);
router.post('/login', handleLogIn);
//Todo
router.get('/todo-route', handleTodoGet);
router.post('/todo', handleTodoCreate);
router.put('/todo/:id', handleTodoUpdate);
router.delete('/todo/:id', handleTodoDelete);

//Note
router.get('/note-route', handleNoteGet);
router.post('/note', handleNoteCreate);
router.delete('/note/:id', handleNoteDelete);

//Reminder
router.get('/reminder-route', handleReminderGet);
router.post('/reminder', handleReminderCreate);
router.delete('/reminder/:id', handleReminderDelete);

module.exports = router;