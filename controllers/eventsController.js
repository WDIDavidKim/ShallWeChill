var db = require('../models');

function index(req, res) {
  db.Event.find({}, function(err, allEvents) {
    res.json(allEvents);
  });
}

function create(req, res) {
  var user = req.user;
  console.log("USER: " , user);
  db.Event.create(req.body, function(err, event) {
    if (err) { console.log('error', err); }
    console.log("EVENT:  ",event);
    // event is created, sweet
    var joinData = {_event: event._id, _host: req.user._id};
    db.Events_Users.create(joinData, function(err,succ){
      if (err) { console.log('error', err); }
      console.log("EVENT_USER: ", succ);
      res.json(event);
    });
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

function attendEvent(req,res){
  console.log("Looking up attendees for an event");
  var userId = req.params.eventId;
  console.log(eventId);
  // db.User.find({})
//   // set this person as a user for an event, not a host
}


function allEventsByUser(req, res) {
  console.log("Looking up all events made by user. ");
  var userId = req.params.userId;
  db.Events_Users.find({ _user: userId}, function allEventsByUser(err,succ){
    if(err) { console.log('eventsController.allEventsByUser error', err); }
    console.log(succ);
    res.json(succ);
  });
}


module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
  allEventsByUser: allEventsByUser
};
