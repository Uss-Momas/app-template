(function ($) {
  if ($("#inline-datepicker-m").length) {
    $("#inline-datepicker-m").flatpickr({
      convertModelValue: true,
      mode: "range",
      dateFormat: 'd-m-y'
    });
  }
  if ($("#inline-datepicker").length) {
    $("#inline-datepicker").flatpickr({
      convertModelValue: true,
      mode: "range",
      dateFormat: 'd-m-y',
      inline: true,
      onReady: function () {
        $("#inline-datepicker").hide();
      }
    });
  }
  $(".member-desc .show-more").on('click', function () {
    if ($(this).text().toLowerCase() === 'read more') $(this).text("read less");
    else $(this).text("read more");
    $(this).parents(".member-desc").toggleClass('show');
  })
  if ($("#chat-conversation-scrollbar").length) {
    Scrollbar.init(document.getElementById("chat-conversation-scrollbar"));
  }
  $("#close-chat").on("click", function () {
    $(".chatbox-wrapper").fadeOut();
  })

  $("#msg-btn").on("click", function () {
    $(".chatbox-wrapper").fadeIn();
  })

  $("#minimize-chat").on("click", function () {
    $(".chatbox-wrapper").toggleClass("minimize")
  });

  if ($('#citizenship').length) {
    $("#citizenship").select2();
  }
  if ($('#skillstags').length) {
    $('#skillstags').tagsinput({
      trimValue: true
    });
    $("#skillstags").on('itemAdded itemRemoved', function () {
      $("#skillstags").siblings(".validation-error").addClass("d-none");
    });
  }
  $("#reset-profile-form").on("click", function () {
    $("#skillstags").tagsinput('removeAll');
    $("#addprofileform")[0].reset();
    $('#citizenship').trigger('change.select2');
    CKEDITOR.instances['profile-desc'].setData("Member Description...")
  })
  if ($("#profile-desc").length) {
    CKEDITOR.replace("profile-desc");
  }
  $("[name= 'validation-phone']").mask("000-00-0000");
  $('#addprofileform').validate({
    focusInvalid: false,
    ignore: [],
    rules: {
      'validation-firstname': {
        required: true
      },
      'validation-lastname': {
        required: true
      },
      'validation-email': {
        required: true,
        email: true
      },
      'validation-skills': {
        required: true
      },
      'validation-designation': {
        required: true
      },
      'validation-phone': {
        required: true
      },
      "validation-editor": {
        required: function () {
          return CKEDITOR.instances['profile-desc'].updateElement();
        }
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none");
      if ($("#skillstags").val() === "") {
        $("#skillstags").siblings(".validation-error").removeClass("d-none");
      }
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
      if ($("#skillstags").val() !== "") {
        $("#skillstags").parents(".form-group").addClass("invalid-field");
      }
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      $(element).siblings(".validation-error").addClass("d-none")
      if ($("#skillstags").val() !== "") {
        $("#skillstags").siblings(".validation-error").addClass("d-none");
      }
    },
    submitHandler: function (form) {
      var formdata = $(form).serializeArray();
      var data = {};
      $(formdata).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      data['validation-desc'] = CKEDITOR.instances['profile-desc'].getData();
      alert("Data Saved... See logs")
      console.log("profile form submitted data ===>", data);
      var formType = $(form).attr("data-type");
      if(formType !== 'edit') $("#skillstags").tagsinput('removeAll');
      $(form)[0].reset();
      $('#citizenship').trigger('change.select2');
      CKEDITOR.instances['profile-desc'].setData("Member Description...")
    }
  });
}(jQuery))
