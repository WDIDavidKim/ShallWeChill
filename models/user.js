var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Event = require('./user');
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});

var User = mongoose.model('User', UserSchema);

// UserSchema.plugin(passportLocalMongoose);


module.exports = User;
