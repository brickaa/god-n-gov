/* global $ */

var $extraFootage = $('#extra-footage'),
    $main = $('#main'),
    extraHeight = $('.masthead').height() + $('#menu-bar').height(),
    $menuBtn = $('#menu-chapters-btn'),
    $menuChapters = $('#menu-chapters'),
    $relatedVids = $('#lawmakers-related'),
    $startBtn = $('#start-video'),
    $videoCover = $('#video-cover-wrapper'),
    $videoWrapper = $('.video-wrapper');

function menuAccordion(e) {
  e.preventDefault();
  $menuChapters.slideToggle(250);
}

function startVideo(e) {
  e.preventDefault();
  $videoCover.hide();
  $videoWrapper.css('visibility', 'visible');
  $relatedVids.show();
  $extraFootage.show();
}

function videoSize() {
  $('.video-wrapper').css('min-height', $(window).height() - extraHeight);
}

function resize() {
  videoSize();
}

$(document).ready(function() {
  'use strict';
  videoSize();

  $startBtn.click(startVideo);
  $menuBtn.click(menuAccordion);

  $main.fitVids();

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