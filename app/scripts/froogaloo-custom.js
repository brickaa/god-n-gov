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

  // function onPause(id) {
  //   status.text('paused');
  //   pauseBtn.hide();
  //   playBtn.show();
  //   console.log('pause');
  // }

  function onPlay(id) {
    // playBtn.hide();
    // pauseBtn.show();
    console.log('play');
  }

  // function onFinish(id) {
  //   status.text('finished');
  // }

  // function onPlayProgress(data, id) {
  //   status.text(data.seconds + 's played');
  // }

});
