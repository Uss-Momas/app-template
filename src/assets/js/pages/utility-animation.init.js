//initializing
(function ($) {
  "use strict";
  $('.triggerAnimation').click(function (e) {
    e.preventDefault();
    var anim = $('.animation-control').val();
    animate(anim);
  });

  $('.animation-control').change(function () {
    var anim = $(this).val();
    animate(anim);
  });
} (jQuery));

function animate(classname) {
  $("#codeclass").text("." + classname);
  $('#animationSandbox').removeClass().addClass(classname + ' animated d-block').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass().addClass("d-block");
  });
};