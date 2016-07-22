var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Event = require('./event');
var User = require('./user');


var Events_UsersSchema = new Schemas({
  _event: {type: Schema.Types.ObjectId, ref: "Event"},
  _user: {type: Schema.Types.ObjectId, ref: "User"}

});

var User = mongoose.model('User', UserSchema);

module.exports = Events_UsersSchema;
