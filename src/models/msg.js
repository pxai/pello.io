
var mongoose = require('mongoose');
var createdDate = require('../plugins/createdDate');
var validEmail = require('../helpers/validate/email');

// define the schema
var schema = mongoose.Schema({
    who: { type: String, trim: true }    
  , email: { type: String, lowercase: true, trim: true,validate: validEmail }
  , title: { type: String, trim: true }
  , message: String
},{collection:'msg'});


// add created date property
schema.plugin(createdDate);


// compile the model

module.exports = mongoose.model('GuestBook', schema);