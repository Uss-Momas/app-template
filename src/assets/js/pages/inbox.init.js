$(function () {
  $(".toolbar .checkbox-wrapper-mail > input").on("change", function () {
    $(".email-message-list .checkbox-wrapper-mail > input").prop("checked", $(this).prop("checked"));
  })

  $("#close-chat").on("click", function () {
    $(".chatbox-wrapper").fadeOut();
  })

  $(".chat-list li a").on("click", function () {
    $(".chatbox-wrapper").fadeIn();
  })

  $("#minimize-chat").on("click", function () {
    $(".chatbox-wrapper").toggleClass("minimize")
  })
  
  Scrollbar.init(document.getElementById("chat-conversation-scrollbar"));
});
