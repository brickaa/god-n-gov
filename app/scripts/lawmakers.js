/* global $ */

var $main = $('#main'),
    $menuBtn = $('#menu-chapters-btn'),
    $menuChapters = $('#menu-chapters');

function menuAccordion(e) {
  e.preventDefault();
  $menuChapters.slideToggle(250);
}

$(document).ready(function() {
  'use strict';
  var currentID;

  $('#lawmaker-list li').click(function() {
    var currentID = $(this).attr('id'),
        source = $(this).attr('src'),
        fileExt = source.split('.')[1];

    $('#video source').each(function () {
      $(this).attr('src', currentID + '.' + fileExt);
    });

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

function resize() {
}

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