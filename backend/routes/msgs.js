var loggedIn = require('../middleware/loggedIn');
var mongoose = require('mongoose')
var GuestBook = mongoose.model('GuestBook');

module.exports = function (app) {
  // create
  app.get("/msg/create", loggedIn, function (req, res) {
    res.render('post/create.jade');
  })

  app.post("/msg/create", loggedIn, function (req, res, next) {
    var title = req.param('title');
    var message = req.param('message');
    var who = req.session.user;

    GuestBook.create({
        title: title
      , message: message
      , who: user
     }, function (err, msg) {
       if (err) return next(err);
       res.redirect('/msg/' + msg.id);
    });

    // notify twitter that we published a new post using model hook

  })


  // read
  app.get("/msg/:id", function (req, res, next) {
    var id = req.param('id');



    var query = GuestBook.findById(id).populate('who');
    query.exec(function (err, msg) {
      if (err) return next(err);

      if (!msg) return next(); // 404

      res.render('msg/view.jade', { msg: msg});
    })
  })



}
