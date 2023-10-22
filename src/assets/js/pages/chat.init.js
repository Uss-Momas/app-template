(function($){
  var scrollBarArr = ["usermsg-scrollbar", "chat", "group", "contact"]
  scrollBarArr.forEach(function(id){
    Scrollbar.init(document.getElementById(id));
  })

  $("#profile .dropdown-item").click(function () {
    var status = $(this).attr("data-status");
    $(this).parents(".dropdown").find(".avatar").removeClass().addClass("avatar avatar-sm me-0 "+ status);
  });

  function newMessage() {
    message = $(".message-input .form-control").val();
    if ($.trim(message) == '') {
      return false;
    }
    var date = new Date()
    var time = date.getHours() + ':' + date.getMinutes()
    var conversationStr = '<li class="sent"><div class="conversation">'+
      '<div class="dropdown">'+
        '<a href="javascript:void(0)" data-toggle="dropdown" class="dropdown-toggle">'+
          '<i class="bx bx-dots-vertical-rounded fs-sm"></i>'+
        '</a>'+
        '<div class="dropdown-menu">'+
          '<a href="javascript:void(0)" class="dropdown-item">Attachments</a>'+
          '<a href="javascript:void(0)" class="dropdown-item">Status</a>'+
          '<a href="javascript:void(0)" class="dropdown-item">Forward</a>'+
          '<a href="javascript:void(0)" class="dropdown-item">Copy</a>'+
        '</div>'+
      '</div>'+
      '<div class="profile-img">'+
        '<img src="assets/images/users/avatar-1.jpg" alt="Header Avatar" class="online avatar avatar-xs me-0">'+
      '</div>'+
      '<div class="text-msg">'+
        '<p>'+ message +'</p>'+
        '<span class="time-stamp">'+time+'</span>'+
      '</div>'+
    '</div>'; 
    $('<li class="sent">'+ conversationStr +'</li>').appendTo($('.user-messages ul'));
    $('.chat-input .form-control').val(null);
    $('.chat-list .active .media-body p').html('<span class="text-dark">You: </span>' + message);
  };

  $('.chat-send-btn').click(function () {
    newMessage();
    $(".message-input .form-control").val(null)
  });

  $(window).on('keydown', function (e) {
    if (e.which == 13) {
      newMessage();
      $(".message-input .form-control").val(null);
      return false;
    }
  });
}(jQuery));