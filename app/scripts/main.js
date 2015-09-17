/* global $ */

var $main = $('#main'),
    $menuBtn = $('#menu-chapters-btn'),
    $menuChapters = $('#menu-chapters'),
    $startBtn = $('#start-video'),
    $videoCover = $('#video-cover-wrapper');

function menuAccordion(e) {
  e.preventDefault();
  $menuChapters.slideToggle(250);
}

function startVideo(e) {
  e.preventDefault();
  $videoCover.hide();
}

function videoSize() {
  // $('.video-wrapper').height($(window).height() * 0.8);
  $('.video-frame').css('padding', $(window).height() * .1);
}

function resize() {
  videoSize();
}

$(document).ready(function() {
  'use strict';
  videoSize();

  $startBtn.click(startVideo);
  $menuBtn.click(menuAccordion);

  $main.click(function() {
    if($('#menu-chapters').is(':visible')) {
      $('#menu-chapters').slideToggle(250);
    }
  });

});

$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('#extra-footage').fadeOut();
  }
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