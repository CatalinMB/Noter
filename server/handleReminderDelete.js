var Reminder = require('./models/Reminder.js');
var session = require('express-session');
var mongoose = require('mongoose');

function handleReminderDelete(req, res){

    // Removes the object in the database based on the id
    Reminder.remove({ id : req.params.id }, function(err) {
        if (!err) {
                console.log(req.params.id);
                res.send("ok");
        }
        else {
                res.send(err);
        }
        
    });

}
module.exports = handleReminderDelete;