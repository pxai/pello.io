var mongoose = require('mongoose');
var User = mongoose.model('User');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, {}, {sort: {date: -1}, limit: 10},
      function (err, result) {
        if (err) { res.send('{"result":"error"}'); }
        var formatted = { 'result' : 'ok', 'data':[]};
        console.log(result);
        result.forEach(function (elem, i) {
          formatted.data.push(elem);
        });

        res.send(formatted);
      });
});

module.exports = router;
