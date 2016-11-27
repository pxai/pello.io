/**
 * Created by PELLO_ALTADILL on 27/11/2016.
 */
var mongoose = require('mongoose');
var config = require('config');

mongoose.connect(config.backend.mongoUrl);

// optionally:
//mongoose.set('debug', true);

exports.User = require('./user');
