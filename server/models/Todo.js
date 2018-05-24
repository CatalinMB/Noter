var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required:true
    },

    title: {
        type: String,
        required: true
      },

    complete: {
        type : Boolean
    }

  });

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;