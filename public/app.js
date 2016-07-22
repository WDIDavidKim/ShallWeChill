$(document).ready(function() {
  console.log('app.js loaded!');
  // $.get('/api/albums').success(function (albums) {
  //   albums.forEach(function(album) {
  //     renderAlbum(album);
  //   });
  });


$('#event-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/events', formData, function(event) {
      console.log('album after POST', event);
      renderEvent(event);
    });
    $(this).trigger("reset");
  });

});
