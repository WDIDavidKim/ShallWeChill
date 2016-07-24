var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Event = require('./event');


var EventSchema = new Schema({
  eventName: String,
  description: String,
  location: String,
  time: String,
  date: String
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
