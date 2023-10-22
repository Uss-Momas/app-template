//initializing
(function ($) {
  "use strict";
  var ckeditorInstance;
  if ($("#compose-comment").length) {
    ClassicEditor.create(document.querySelector('#compose-comment')).then(function (editor) {
      ckeditorInstance = editor
    })
      .catch(function (error) {
        console.error("error", error);
      });
  }
  $("#comment-btn").on("click", function () {
    $(this).fadeOut();
    $("#comment-form").removeClass("d-none").addClass("d-block");
  })
  $("#comment-submit-btn").on("click", function () {
    var data = ckeditorInstance.getData();
    alert(data);
  })
  $("#discard-btn").on("click", function () {
    $("#comment-btn").fadeIn();
    $("#comment-form").addClass("d-none").removeClass("d-block");
    ckeditorInstance.setData("Please Enter Comment");
  })
}(jQuery));