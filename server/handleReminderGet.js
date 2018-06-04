var Reminder = require('./models/Reminder.js');
var session = require('express-session');
var mongoose = require('mongoose');

function handleReminderGet(req, res){

    // Finds all the elements in the database and returns them in an array of objects
    Reminder.find(function(err,data){
        console.log(res.reminders, " :let's see the reminders");
        res.send(data);
    });

}
module.exports = handleReminderGet;