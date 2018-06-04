var Note = require('./models/Note.js');
var session = require('express-session');
var mongoose = require('mongoose');

function handleNoteGet(req, res){

    // Finds all the elements in the database and returns them in an array of objects
    Note.find(function(err,data){
        res.send(data);
    });

}
module.exports = handleNoteGet;