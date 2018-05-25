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


function handleTodoDelete(req, res){

    Todo.remove({ id : req.params.id }, function(err) {
        if (!err) {
                console.log(req.params.id);
                res.send("ok");
        }
        else {
                res.send(err);
        }
        
    });

}
module.exports = handleTodoDelete;