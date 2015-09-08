'use strict';

var $menuBtn = $('#menu-chapters-btn'),
    $menuChapters = $('#menu-chapters'),
    $video = $('#video'),
    video = $video[0],
    $fullScreenBtn = $('#full-screen'),
    $playBtn = $('#play-pause'),
    seekBar = $('#progress-bar');


function menuAccordion(e) {
  e.preventDefault();
  $menuChapters.slideToggle(250);
}

function playPause(e) {
  e.preventDefault();
  if (video.paused == true) {
    video.play();
    $('.icon-TT-god_play').hide();
    $('.icon-TT-god_pause').show();
  } else {
    video.pause();
    $('.icon-TT-god_pause').hide();
    $('.icon-TT-god_play').show();
  }
}

function fullScreen(e) {
  e.preventDefault();

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
}

function resize() {
  $('.video-wrapper').height($(window).height() * .75);
}

$(document).ready(function() {
  $('.video-wrapper').height($(window).height() * .75);

  $menuBtn.click(menuAccordion);
  $playBtn.click(playPause);
  $fullScreenBtn.click(fullScreen);

  // Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    $('#video-progress').width(value + '%');
    // Update the slider value
    // seekBar.value = value;
  });

});

// RESIZE EVENTS
window.onresize = resize;

// Check orientation and call resize on Android
var supportsOrientationChange = 'onorientationchange' in window,
    orientationEvent = supportsOrientationChange ? 'orientationchange' : 'resize';

window.addEventListener(orientationEvent, function() {
  resize();
}, false);

// Check orientation & call resize on iPhone/iPad, etc.
window.onorientationchange = function(){
  var orientation = window.orientation;

  if (orientation === 0){
    resize();
  }
  else if (orientation === 90){
    resize();
  }
  else if (orientation === -90){
    resize();
  }
};