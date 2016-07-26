var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/shallwechill");

module.exports.Event = require('./event.js');
module.exports.User = require('./user.js');
module.exports.Events_Users = require('./events_attendees.js');
