/* global $, $f */

$(function() {
  var iframe = $('#player1')[0],
      player = $f(iframe),
      // playBtn = $('#play'),
      // pauseBtn = $('#pause'),
      status = $('.status');


  // When the player is ready, add listeners for pause, finish, and playProgress
  player.addEvent('ready', function() {
    status.text('ready');

    // player.addEvent('pause', onPause);
    player.addEvent('play', onPlay);
    // player.addEvent('finish', onFinish);
    // player.addEvent('playProgress', onPlayProgress);
  });

  // Call the API when a button is pressed
  $('#start-video').bind('click', function() {
    player.api('play');
  });

});
