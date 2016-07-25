var db = require("./models");
var eventsList =[
              {
                eventName: 'General Assembly Dirty 30',
                description: 'Start Date',
                location: '225 Bush Street 5th floor',
                time: '9:17pm',
                date: 'June 27 2016',
              },
              {
                eventName: 'General Assembly Dirty 30',
                description: 'End Date',
                location: '225 Bush Street 5th floor',
                time: '5:00pm',
                date: 'September 16th 2016'
              },

];

var usersList = [
              {
                firstName: 'General',
                lastName: 'Assembly',
                email: 'GeneralAssembly',
                username: 'Assembly',
                password: 'General'
              },
              {
                firstName: 'Test',
                lastName: 'Test',
                email: 'Test',
                username: 'Test',
                password: 'Test'
              },
];

db.Event.remove({},function EventsAreGone(err, succ) {
  console.log("Removed events...");
});

db.Event.create(eventsList, function(err, createdEvents) {
  if(err){return console.log("ERROR: ", err);}
  console.log(createdEvents);
});

db.User.remove({},function UsersAreGone(err, succ) {
  console.log("Removed users...");
});

db.User.create(usersList, function(err, createdUsers) {
  if(err){return console.log("ERROR: ", err);}
  console.log(createdUsers);
});
