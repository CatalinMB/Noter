var Note = require('./models/Note.js');
var session = require('express-session');
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


function handleNoteGet(req, res){
    Note.find({},function(err,data){
        console.log(res, 'let us see the messages');
        res.send(data);
        // get and return all the notes after you create another
        getNotes(res);
    });

}
module.exports = handleNoteGet;