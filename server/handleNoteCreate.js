var Note = require('./models/Note.js');
var session = require('express-session')
var mongoose = require('mongoose');

function handleNoteCreate(req, res) {

    // Creates object from the reqest body
    var noteData = {
        id: req.body.id,
        title: req.body.title,
    }

   // Creates the element in the database and returns it as an object
    Note.create(noteData, function (err, note) {
        if (err) {
           return res.send(err);
        } else {
           return res.send(note);
            console.log("note that needs to be sent: " , note);
        }
    });
    
}

module.exports = handleNoteCreate;