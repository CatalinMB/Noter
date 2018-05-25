var Todo = require('./models/Todo.js');
var session = require('express-session')
var mongoose = require('mongoose');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

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