/* global $, $f, ga */

var $extraFootage = $('#extra-footage'),
    $main = $('#main'),
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

function sendEvent(eventAction, label, value) {
  var eventParams = {
    hitType: 'event',
    eventCategory: 'god-and-governing',
    eventAction: eventAction
  };

  if (label) {
    eventParams.eventLabel = label;
  }

  if (value) {
    eventParams.eventValue = value;
  }

  ga('send', eventParams);
}

function onFinish(playerID) {
  if($('#menu-chapters').is(':hidden')) {
    $('#menu-chapters').slideToggle(250);
  }
}


$(document).ready(function() {
  'use strict';

  // When player ready, add play callback
  player.addEvent('ready', function() {
    player.addEvent('play');
    player.addEvent('pause');
    player.addEvent('finish', onFinish);
  });

  // Call FitVids on main container
  $main.fitVids();

  // Hide cover & start video when user clicks 'Play'
  // Show related vids
  $startBtn.click(function() {
    $('.masthead').css('position', 'relative');
    $videoCover.hide();
    $relatedVids.show();
    $extraFootage.show();
    $videoWrapper.css('visibility', 'visible');
    player.api('play');
    sendEvent('start-button-clk');
    player.api(onFinish);
  });

  // Open/close menu on click. Send GA.
  $menuBtn.click(function(el) {
    menuAccordion(el);
    sendEvent('menu-chpts-btn-clk');
  });

  // Click main area to close menu. Send GA.
  $main.click(function() {
    if($('#menu-chapters').is(':visible')) {
      $('#menu-chapters').slideToggle(250);
    }
  });

  // Video lightboxes
  $('#lawmaker-list').each(function() {
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

      $(this).click(function() {
        player.api('pause');
      });
  });

  $('#support').click(function() {
    sendEvent('support-link-clk');
  });

  $('#twitter-share').click(function() {
    sendEvent('twitter-share-clk');
  });
  
  $('#fb-share').click(function() {
    sendEvent('fb-share-clk');
  });

});

$(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $('#extra-footage').fadeOut();
  }
});
