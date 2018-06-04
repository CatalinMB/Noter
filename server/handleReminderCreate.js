var Reminder = require('./models/Reminder.js');
var session = require('express-session')
var mongoose = require('mongoose');

function handleReminderCreate(req, res) {

    // Creates object from the reqest body
    var reminderData = {
        id: req.body.id,
        title: req.body.title,
        time: req.body.time
    }

   // Creates the element in the database and returns it as an object
    Reminder.create(reminderData, function (err, reminder) {
        if (err) {
           return res.send(err);
        } else {
           return res.send(reminder);
            console.log("reminder that needs to be sent: " , reminder);
        }
    });
    
}

module.exports = handleReminderCreate;