var User = require('./models/User.js')

function handleLogIn(req, res) {
    var userdata = {
        email: req.body.email,
        password: req.body.password
    }

    User.authenticate(req.body.email,req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        req.session.user = user;
        return res.send({ redirect: '/messages'});
      }
    });
}

module.exports = handleLogIn;