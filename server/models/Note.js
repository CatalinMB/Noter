var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required:true
    },

    title: {
        type: String,
        required: true
      }

  });

var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;