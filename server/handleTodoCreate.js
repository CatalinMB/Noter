var Todo = require('./models/Todo.js');
var session = require('express-session')
var mongoose = require('mongoose');

function handleTodoCreate(req, res) {

    // Creates object from the reqest body
    var todoData = {
        id: req.body.id,
        title: req.body.title,
        complete: req.body.complete
    }

   // Creates the element in the database and returns it as an object
    Todo.create(todoData, function (err, todo) {
        if (err) {
           return res.send(err);
        } else {
           return res.send(todo);
            console.log("todo that needs to be sent: " , todo);
        }
    });
    
}

module.exports = handleTodoCreate;