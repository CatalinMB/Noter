var Todo = require('./models/Todo');

function handleTodoUpdate(req, res) {

  var todoData = {
    id: req.body.id,

    complete: req.body.complete
  }

  // console.log(messageData);
  Todo.findOne({ id: todoData.id }, function (err, todo) {
    if (err) {
      return res.send(err);
    } else {
      todo.complete = todoData.complete;
      todo.save(function (err, updatedTodo) {
        if (err) return res.send(err);
        res.send(updatedTodo);
      });
    }
  });
}

module.exports = handleTodoUpdate;
