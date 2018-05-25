var Reminder = require('./models/Reminder.js');
var session = require('express-session');
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


function handleReminderGet(req, res){
    Reminder.find({},function(err,data){
        console.log(res, 'let us see the messages');
        res.send(data);
        // get and return all the reminders after you create another
        getReminders(res);
    });

}
module.exports = handleReminderGet;