var db = require("./models");
var eventsList =[
              {
                eventName: 'General Assembly Dirty 30',
                description: 'WE ARE THE BEST COHORT!',
                location: '225 Bush Street 5th floor',
                time: '9:17',
                attendees: 'Instructors'
              },
              {
                eventName: 'General Assembly Dirty 30',
                description: 'WE ARE THE BEST COHORT!',
                location: '225 Bush Street 5th floor',
                time: '9:18',
                attendees: 'Students'
              },

];

db.Event.remove({},function EventsAreGone(err, succ) {
  console.log("Removed events...");
});

db.Event.create(eventsList, function(err, createdEvents) {
  if(err){return console.log("ERROR: ", err);}
  console.log(createdEvents);
});
