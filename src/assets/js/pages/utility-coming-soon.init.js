//initializing
(function ($) {
  "use strict";
  $('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    var arr = finalDate.split("/"); 
    arr[0] = new Date().getFullYear()+'';
    finalDate = arr.join("/");
    $this.countdown(finalDate, function (event) {
      $(this).html(event.strftime(''
        + '<div class="col-sm-6 col-md-3 mb-3"><div class="coming-box">%D <span>Days</span></div></div> '
        + '<div class="col-sm-6 col-md-3 mb-3"><div class="coming-box">%H <span>Hours</span></div></div> '
        + '<div class="col-sm-6 col-md-3 mb-3"><div class="coming-box">%M <span>Minutes</span></div></div> '
        + '<div class="col-sm-6 col-md-3 mb-3"><div class="coming-box">%S <span>Seconds</span></div></div> '));
    });
  });
} (jQuery));