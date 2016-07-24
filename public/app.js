var template;
var $eventsList;
var allEvents = [];



$(document).ready(function() {
  console.log('app.js loaded!');

  $eventsList = $('#eventTarget');

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
    $.ajax({
      method: 'POST',
      url: '/api/events',
      data: $(this).serialize(),
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

  function render() {
    $eventsList.empty();
    var eventsHtml = template({ events: allEvents });
    $eventsList.append(eventsHtml);
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
        allEvent.splice(i, 1);
        break;
      }
    }
    render();
  }

  function deleteEventError() {
    console.log("Error, the movie wasn't deleted.");
  }


});
