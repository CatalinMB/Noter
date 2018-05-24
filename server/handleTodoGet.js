var Todo = require('./models/Todo.js');
var session = require('express-session');
var mongoose = require('mongoose');


function handleTodoGet(req, res){
    Todo.find({},function(err,data){
        console.log(res, 'let us see the messages');
        res.send(data);
    });

}
module.exports = handleTodoGet;