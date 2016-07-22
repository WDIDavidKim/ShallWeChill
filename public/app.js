$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/events').success(function (events) {
    events.forEach(function(event) {
      renderEvent(event);
    });
  });


$('#event-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/events', formData, function(event) {
      console.log('event after POST', event);
      renderEvent(event);
    });
    $(this).trigger("reset");
  });

});
