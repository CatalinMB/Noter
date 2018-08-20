var mongoose = require('mongoose');

var ReminderSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required:true
    },
    
    user: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
      },

    time: {
        hours : Number,
        minutes : Number
    }

  });

var Reminder = mongoose.model('Reminder', ReminderSchema);
module.exports = Reminder;