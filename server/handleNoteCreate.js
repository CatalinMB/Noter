var Note = require('./models/Note.js');
var session = require('express-session')
var mongoose = require('mongoose');

function getNotes(res) {
    Note.find(function (err, notes) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(notes); // return all notes in JSON format
    });
};

function handleNoteCreate(req, res) {

    var noteData = {
        id: req.body.id,
        title: req.body.title,
    }

   // console.log(messageData);
    Note.create(noteData, function (err, note) {
        if (err) {
            res.send(err);
        } else {
            res.send(note);
        }
        getNotes(res);
    });
    
}

module.exports = handleNoteCreate;