var User = require('./models/User.js')
var nodemailer = require('nodemailer');
var cred = require('./models/data')

function handleLogIn(req, res) {
  
  var userdata = {
    email: req.body.email,
    password: req.body.password
  }
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: cred.email,
      pass: cred.password
    }
  });
                
  const mailOptions = {
    from: cred.email, // sender address
    to: userdata.email, // list of receivers
    subject: 'Welcome', // Subject line
    html: '<p>Welcome to Noter!</p>'// plain text body
  };

  User.authenticate(req.body.email,req.body.password, function (error, user) {
    console.log('user is: ', user);
    if (error || !user) {
      
      var err = new Error('Wrong email or password.');
      err.status = 401;
      return (err);
    } else {
      req.session.userId = user._id;
      req.session.user = user;
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          return info = alert("Mail sent!");
     });
      return res.send({ redirect: '/messages', user: {email: req.body.email }});
    }
  });


}

module.exports = handleLogIn;