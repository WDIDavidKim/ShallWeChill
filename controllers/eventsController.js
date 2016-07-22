var db = require('../models');

function index(req, res) {
  db.Event.find({}, function(err, allEvents) {
    res.json(allEvents);
  });
}

function create(req, res) {
db.Event.create(req.body, function(err, event) {
    if (err) { console.log('error', err); }
    console.log(event);
    res.json(event);
  });
}

function show(req, res) {
db.Event.findById(req.params.eventId, function(err, foundEvent) {
    if(err) { console.log('eventsController.show error', err); }
    console.log('eventsController.show responding with', foundEvent);
    res.json(foundEvent);
   });
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
