var Todo = require('./models/Todo.js');
var session = require('express-session');
var mongoose = require('mongoose');

function handleTodoDelete(req, res){

    // Removes the object in the database based on the id
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