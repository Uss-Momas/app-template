$(function () {
   var ckeditorInstance;

   $("#reply-btn").on("click", function () {
     $("#editor-box").removeClass("d-none")
     if (ckeditorInstance) {
       ckeditorInstance.setData("Type something here")
     }
     else {
       ClassicEditor.create(document.querySelector('#editor')).then(function(editor) {
         ckeditorInstance = editor
       })
         .catch(function(error) {
           console.error("error", error);
         });
     }
   })

   $("#fwd-btn").on("click", function () {
     $("#editor-box").removeClass("d-none")
     var msg = $("#msg-content").html();
     var content = "<p><br/></p>\n========================" + msg;
     if (ckeditorInstance) {
       ckeditorInstance.setData(content);
     }
     else {
       ClassicEditor.create(document.querySelector('#editor')).then(function(editor) {
         ckeditorInstance = editor;
         ckeditorInstance.setData(content)
       })
         .catch(function(error) {
           console.error("error", error);
         });
     }
   })

   $("#send-btn").on("click", function () {
     $("#editor-box").addClass("d-none");
     if (ckeditorInstance) {
       ckeditorInstance.setData("Type something here");
     }
   })

   $(".download-btn").click(function (e) { e.stopPropagation() })

   //Initialize photo attachment modal
   photoswipe();
});


/**
* ----------------------------------------------
* Portfolio photoswipe image slider
* ----------------------------------------------
*/
function photoswipe() {
   if ($("#gallery").length) {
      var items = [],
         $pswp = $('.pswp')[0],
         $folioItems = $('.attachment');

      // get items
      $folioItems.each(function (i) {

         var $folio = $(this),
            $thumbLink = $folio.find('img'),
            $title = $folio.find('h6 .title'),
            // $caption = $folio.find('.pswp-caption'),
            $titleText = '<h5>' + $.trim($title.html()) + '</h5>',
            // $captionText = $.trim($caption.html()),
            $href = $thumbLink.attr('src'),
            $width = 400,
            $height = 400;

         var item = {
            src: $href,
            w: $width,
            h: $height
         }

         item.title = $.trim($titleText);

         items.push(item);
      });
      $('.attachment').on('click', function (e) {
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
