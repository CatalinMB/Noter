var express = require("express")
var app = express()
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var server = require('http').Server(app);
const path = require('path');


// Interacting with MongoDB
mongoose.connect('mongodb://localhost:27017/noter');
var db = mongoose.connection;

db.once('open', function () {
  console.log("worksssss!");
});

//use sessions for tracking logins

var sessionMiddleWare = session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  })
  
  app.use(sessionMiddleWare);
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var routes = require('./server/router.js');
app.use('/', routes);


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  // define as the last app.use callback
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });

 
  
  server.listen(3000, () => {
    console.log("Well done, now I am listening...")
  });
  
  app.use(express.static(__dirname));