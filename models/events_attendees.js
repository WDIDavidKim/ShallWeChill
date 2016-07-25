var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Event = require('./event');
var User = require('./user');


var Events_UsersSchema = new Schemas({
  _event: {type: Schema.Types.ObjectId, ref: "Event"},
  _user: {type: Schema.Types.ObjectId, ref: "User"}

});

var Events_Users = mongoose.model('Events_Users', Events_UsersSchema);

module.exports = Events_Users;
