var User = require('./models/User.js')

function handleRegister(req, res) {

    console.log(req);
    console.log("signup",req.body);

    var userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
        if (err) {
            return res.send(err)
        } else {
            return res.send({ redirect: '/login'});
        }
    });
}


module.exports = handleRegister;