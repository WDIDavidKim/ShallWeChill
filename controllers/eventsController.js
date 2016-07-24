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
db.Event.findOneAndRemove({ _id: req.params.eventId }, function(err, foundEvent){
      res.json(foundEvent);
    });
}

function update(req, res) {
console.log('updating with data', req.body);
db.Event.findById(req.params.eventId, function(err, foundEvent) {
   if(err) { console.log('eventsController.update error', err); }
   foundEvent.eventName = req.body.eventName;
   foundEvent.description = req.body.description;
   foundEvent.location = req.body.location;
   foundEvent.time = req.body.time;
   foundEvent.date = req.body.time;
   foundEvent.save(function(err, savedEvent) {
     if(err) { console.log('saving altered event failed'); }
     res.json(savedEvent);
   });
 });

}



module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
