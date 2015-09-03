'use strict';

var $menuBtn = $('#menu-chapters-btn'),
    $menuChapters = $('#menu-chapters');


function menuAccordion(e) {
  $menuChapters.slideToggle(250);
  e.preventDefault();
}

$(document).ready(function() {
  $menuBtn.click(menuAccordion);
});