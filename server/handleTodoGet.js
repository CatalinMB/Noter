var Todo = require('./models/Todo.js');
var session = require('express-session');
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


function handleTodoGet(req, res){
    Todo.find({},function(err,data){
        console.log(res, 'let us see the messages');
        res.send(data);
        // get and return all the todos after you create another
        getTodos(res);
    });

}
module.exports = handleTodoGet;