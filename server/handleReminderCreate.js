var Reminder = require('./models/Reminder.js');
var session = require('express-session')
var mongoose = require('mongoose');

function getReminders(res) {
    Reminder.find(function (err, reminders) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(reminders); // return all reminders in JSON format
    });
};

function handleReminderCreate(req, res) {

    var reminderData = {
        id: req.body.id,
        title: req.body.title,
        time: req.body.time
    }

    Reminder.create(reminderData, function (err, reminder) {
        if (err) {
            res.send(err);
        } else {
            res.send(reminder);
        }
        getReminders(res);
    });
    
}

module.exports = handleReminderCreate;