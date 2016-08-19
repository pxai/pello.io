var express = require('express');
var sessions = require('./sessions');

module.exports = function (app) {
  //app.use(express.logger('dev')); // deprecated

  // this is good enough for now but you'll
  // want to use connect-mongo or similar
  // for persistant sessions
//   app.use(express.cookieParser()); // deprecated
    app.use(sessions);
    // app.use(express.bodyParser()); // deprecated

  // expose session to views
  app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
  })
}
