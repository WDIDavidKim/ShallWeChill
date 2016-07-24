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
db.User.findById(req.params.userId, function(err, foundUser) {
    if(err) { console.log('usersController.show error', err); }
    console.log('usersController.show responding with', foundUser);
    res.json(foundUser);
   });
 }


function destroy(req, res) {
db.User.findOneAndRemove({ _id: req.params.userId }, function(err, foundUser){
      res.json(foundUser);
    });
}

function update(req, res) {
console.log('updating with data', req.body);
db.User.findById(req.params.userId, function(err, foundUser) {
   if(err) { console.log('usersController.update error', err); }
   foundUser.firstName = req.body.firstName;
   foundUser.lastName = req.body.lastName;
   foundUser.email = req.body.email;
   foundUser.username = req.body.username;
   foundUser.password = req.body.password;
   foundUser.save(function(err, savedUser) {
     if(err) { console.log('saving altered user failed'); }
     res.json(savedUser);
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
