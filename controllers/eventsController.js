var db = require('../models');

function index(req, res) {
  db.Event.find({}, function(err, allEvents) {
    res.json(allEvents);
  });
}

db.Event.create(req.body, function(err, album) {
   if (err) { console.log('error', err); }
   console.log(Event);
   res.json(event);
});

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
