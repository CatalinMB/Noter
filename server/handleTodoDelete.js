// var Todo = require('./models/Todo.js');
// var session = require('express-session');
// var mongoose = require('mongoose');

// function getTodos(res) {
//     Todo.find(function (err, todos) {

//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err) {
//             res.send(err);
//         }

//         res.json(todos); // return all todos in JSON format
//     });
// };


// function handleTodoDelete(req, res){


//     Model.remove({ _id: req.body.id }, function(err) {
//         if (!err) {
//                 message.type = 'OK';
//         }
//         else {
//                 message.type = 'error';
//         }
//         getTodos(res);
//     });

// }
// module.exports = handleTodoDelete;