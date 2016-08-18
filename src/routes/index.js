var errors = require('./errors');
var login = require('./login');
var posts = require('./posts');
var msgs = require('./msgs');
var mongoose = require('mongoose');
var GuestBook = mongoose.model('GuestBook');
//var BlogPost = mongoose.model('BlogPost');

module.exports = function (app) {

  // home page
  app.get('/', function (req, res, next) {
    GuestBook.find().sort('when').limit(10).exec(function (err, msgs) {
      if (err) return next(err);
      res.render('home.jade', { msgs: msgs });
    })
  })

  // login / logout routes
  login(app);

  // blog post crud
  //posts(app);

  // blog post crud
  msgs(app);

  // error handlers
  errors(app);
}
