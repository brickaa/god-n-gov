/* global $, $f */

var $extraFootage = $('#extra-footage'),
    $main = $('#main'),
    extraHeight = $('.masthead').height() + $('#menu-bar').height(),
    $menuBtn = $('#menu-chapters-btn'),
    $menuChapters = $('#menu-chapters'),
    $relatedVids = $('#lawmakers-related'),
    $startBtn = $('#start-video'),
    $videoCover = $('#video-cover-wrapper'),
    $videoWrapper = $('.video-wrapper'),
    iframe = $('#player1')[0],
    player = $f(iframe);

function menuAccordion(e) {
  e.preventDefault();
  $menuChapters.slideToggle(250);
}

function startVideo(e) {
  e.preventDefault();
  $videoCover.hide();
  videoSize();
  $main.fitVids();
  $videoWrapper.css('visibility', 'visible');
  $relatedVids.show();
  $extraFootage.show();
  player.api('play');
  console.log('click');
}

function videoSize() {
  $('.video-wrapper').css('min-height', $(window).height() - extraHeight);
}

function resize() {
  videoSize();
}

$(document).ready(function() {
  'use strict';

  player.addEvent('ready', function() {

    // player.addEvent('pause', onPause);
    player.addEvent('play', onPlay);
    // player.addEvent('finish', onFinish);
    // player.addEvent('playProgress', onPlayProgress);
  });

  $main.fitVids();
  videoSize();
  $videoWrapper.css('visibility', 'visible');

  $startBtn.click(startVideo, function() {
    $videoCover.hide();
    $relatedVids.show();
    $extraFootage.show();
    player.api('play');
  });

  $menuBtn.click(menuAccordion);


  $main.click(function() {
    if($('#menu-chapters').is(':visible')) {
      $('#menu-chapters').slideToggle(250);
    }
  });

  //lightboxes
  $('#lawmaker-list').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
        delegate: 'a',
        type:'iframe',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
          enabled: true
        }
     });
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