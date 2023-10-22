//initializing
(function ($) {
  "use strict";
  if (document.getElementById("scrollbarcontent")) {
    Scrollbar.init(document.getElementById("scrollbarcontent"));
  }
  if (document.getElementById("scrollbarcontainer")) {
    Scrollbar.init(document.getElementById("scrollbarcontainer"));
  }
} (jQuery));