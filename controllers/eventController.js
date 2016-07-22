var db = require('../models');

function index(req, res) {
  db.event.find({}, function(err, allEvents) {
    res.json(allEvents);
  });
}

function create(req, res) {
  var newEvent = new db.Event({
    eventName: req.body.name,
    description: req.body.name,
    location: req.body.name,
    // time: integer,
    // attendees: [ user.schema ]

  });
  console.log(newEvent);
  newEvent.save(function newEventSaved(err, saveEvent){
    if (err) {
      console.log(err);
    }
    res.json(saveEvent);
  });
}

function show(req, res) {

}

function destroy(req, res) {

}

function update(req, res) {

}



module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
