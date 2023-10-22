//initializing
(function ($) {
  "use strict";
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 300,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: (-100)          // offste (in px) for fixed top navigation
  });
  $(".stickyside").stick_in_parent({
    offset_top: 100
  });
}(jQuery));