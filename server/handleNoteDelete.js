var Note = require('./models/Note.js');
var session = require('express-session');
var mongoose = require('mongoose');

function handleNoteDelete(req, res){

    // Removes the object in the database based on the id
    Note.remove({ id : req.params.id }, function(err) {
        if (!err) {
                console.log(req.params.id);
                res.send("ok");
        }
        else {
                res.send(err);
        }
        
    });

}
module.exports = handleNoteDelete;