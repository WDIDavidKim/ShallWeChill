$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/events').success(function (events) {
    events.forEach(function(event) {
      renderEvent(event);
    });
  });
});
