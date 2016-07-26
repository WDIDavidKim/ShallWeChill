var template;
var $eventsList;
var allEvents = [];



$(document).ready(function() {
  var user = window.user;
  console.log(user);
  console.log('app.js loaded!');

  $eventsList = $('#eventTarget');

  // TODO: If user != null, append id as data-id to events.

  var source = $('#events-template').html();
  template = Handlebars.compile(source);

  $.ajax ({
    method: 'GET',
    url: '/api/events',
    success: handleSuccess,
    error: handleError
  });

  $('#newEventForm').on('submit', function(e) {
    e.preventDefault();
    var newEvent = $(this).serialize();
    console.log(newEvent);
    $.ajax({
      method: 'POST',
      url: '/api/events',
      data: newEvent,
      success: newEventSuccess,
      error: newEventError
    });
  });

  $eventsList.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/events/'+$(this).attr('data-id'),
      success: deleteEventSuccess,
      error: deleteEventError,
    });
  });

  $eventsList.on('click', '.update', function() {
    console.log("You clicked update!");
    var eventId = $(this).attr('data-id');
    console.log(eventId);
    // $.ajax({
    //   method: 'DELETE',
    //   url: '/api/events/'+$(this).attr('data-id'),
    //   success: deleteEventSuccess,
    //   error: deleteEventError,
    // });
  });


});
  function render() {
    $eventsList.empty();
    var eventsHtml = template({ events: allEvents });
    $eventsList.prepend(eventsHtml);
  }

  function handleSuccess(json) {
    allEvents = json;
    render();
  }

  function handleError(e) {
    console.log ("Error!");
    $('#eventTarget').text("Failed to load events. Something went wrong with the server.");
  }

  function newEventSuccess(json) {
    $('#newEventForm input').val('');
    allEvents.push(json);
    render();
  }

  function newEventError() {
    console.log("The event was not created successfully.");
  }

  function deleteEventSuccess(json) {
    var event = json;
    console.log(json);
    var eventId = event._id;
    console.log('delete this event:', eventId);
    for(var i = 0; i < allEvents.length; i++) {
      if(allEvents[i]._id === eventId) {
        allEvents.splice(i, 1);
        break;
      }
    }
    render();
  }

  function deleteEventError() {
    console.log("Error, the movie wasn't deleted.");
  }
