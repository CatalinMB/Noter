var Todo = require('./models/Todo.js');
var session = require('express-session')
var mongoose = require('mongoose');

function handleTodoCreate(req, res) {

    var todoData = {
        id: req.body.id,
        title: req.body.title,
        complete: req.body.complete
    }

   // console.log(messageData);
    Todo.create(todoData, function (err, todo) {
        if (err) {
            res.send(err);
        } else {
            res.send(todo);
        }
    });
}

module.exports = handleTodoCreate;