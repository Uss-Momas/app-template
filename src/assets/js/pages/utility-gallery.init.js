//initializing
(function ($) {
  "use strict";
  //photo gallery
  photoswipe();
  //Our work filteration
  ourWorkDataFilteration();
  var slider = $('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    thumbItem: 5,
    slideMargin: 0,
    speed: 500,
    auto: true,
    loop: true,
  });
}(jQuery));

/**
    * ----------------------------------------------
    * Portfolio photoswipe image slider
    * ----------------------------------------------
    */
function photoswipe() {
  if ($("#gallery").length) {
    var items = [],
      $pswp = $('.pswp')[0],
      $folioItems = $('.filtr-item');

    // get items
    $folioItems.each(function (i) {

      var $folio = $(this),
        $thumbLink = $folio.find('.gallery-item'),
        $title = $folio.find('.gallery-item h3'),
        $caption = $folio.find('.pswp-caption'),
        $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
        $captionText = $.trim($caption.html()),
        $href = $thumbLink.attr('href'),
        $width = 1920,
        $height = 700;

      var item = {
        src: $href,
        w: $width,
        h: $height
      }

      if ($caption.length > 0) {
        item.title = $.trim($titleText + $captionText);
      }

      items.push(item);
    });

    $('.filtr-item').on('click', function (e) {
      e.preventDefault();
      var options = {
        index: parseInt($(this).attr("data-index")) - 1,
        showHideOpacity: true
      }
      // initialize PhotoSwipe
      var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
      lightBox.init();
    });
  }
}
/**
* ----------------------------------------------
* our work filteration data
* ----------------------------------------------
*/
function ourWorkDataFilteration() {
  if (window.Shuffle && $('.filtr-container').length) {
    var Shuffle = window.Shuffle;
    var shuffleInstance = new Shuffle(document.querySelector('.filtr-container'), {
      itemSelector: '.filtr-item',
      sizer: '.gallery-nav',
    });

    $(".gallery-nav .control").on("click", function () {
      shuffleInstance.filter($(this).attr('data-filter'));
      $('.gallery-nav .control').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });
  }
}