var db = require('../models');

function index(req, res) {
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}

function create(req, res) {
db.User.create(req.body, function(err, user) {
    if (err) { console.log('error', err); }
    console.log(user);
    res.json(user);
  });
}

function show(req, res) {
db.user.findById(req.params.eventId, function(err, foundUser) {
    if(err) { console.log('eventsController.show error', err); }
    console.log('eventsController.show responding with', foundUser);
    res.json(foundUser);
   });
 }


function destroy(req, res) {
db.User.findOneAndRemove({ _id: req.params.eventId }, function(err, foundUser){
      res.json(foundUser);
    });
}

function update(req, res) {
// console.log('updating with data', req.body);
// db.Event.findById(req.params.EventId, function(err, foundEvent) {
//    if(err) { console.log('eventsController.update error', err); }
//    foundEvent.eventName = req.body.eventName;
//    foundEvent.description = req.body.description;
//    foundEvent.location = req.body.location;
//    foundEvent.time = req.body.time;
//    foundEvent.save(function(err, savedEvent) {
//      if(err) { console.log('saving altered event failed'); }
//      res.json(savedEvent);
//    });
//  });
//
}



module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
