var Todo = require('./models/Todo.js');
var session = require('express-session');
var mongoose = require('mongoose');

function handleTodoGet(req, res){

    // Finds all the elements in the database and returns them in an array of objects
    Todo.find({user: req.session.user},function(err,data){
        console.log(res.todos, " :let's see the todos");
        res.send(data);
    });

}
module.exports = handleTodoGet;