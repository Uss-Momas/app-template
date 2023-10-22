(function ($) {

  var forms = document.getElementsByClassName('needs-validation');
  $(".reset-form").on("click", function(){
    var target = $(this).attr("data-target");
    $(target)[0].reset();
    if($(target).find(".floating-label").length){
      $(target).find(".floating-label").removeClass("enable-floating-label");
    }
  })
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      else {
        var fdata = formValue(form);
        alert("form is submitted.. See console logs");
        console.log("form values", fdata);
      }
      form.classList.add('was-validated');
    }, false);
  });
  $('#demo-form').validate({
    ignore: [".select2-hidden-accessible"],
    focusInvalid: false,
    rules: {
      'validation-fname1': {
        required: true
      },
      'validation-email1': {
        required: true,
        email: true
      },
      'validation-gender1': {
        required: true
      },
      'hobbies[]': {
        required: true,
        minlength: 2
      },
      'validation-select': {
        required: true
      },
      'validation-message1': {
        required: true,
        minlength: 20,
        maxlength: 100
      }
    },
    errorPlacement: function errorPlacement(error, element, form) {
      $('#alert-info').addClass("d-none")
      $('#alert-warn').removeClass("d-none")
      if ($(element).attr("name") === "hobbies[]") {
        $(element).parent(".checkbox").siblings(".validation-error").removeClass("d-none");
      }
      if ($(element).attr("name") === "validation-gender1") {
        $(element).parent(".radio").siblings(".validation-error").removeClass("d-none");
      }
      if ($(element).attr("name") === "validation-message1") {
        if ($(error)[0].outerText === "Please enter at least 20 characters.") {
          $(element).siblings(".validation-error").removeClass("d-none").text("Please enter at least 20 characters.");
        }
        if ($(error)[0].outerText === "Please enter no more than 100 characters.") {
          $(element).siblings(".validation-error").removeClass("d-none").text("Character limit range between 20 and 100");
        }
        else {
          $(element).siblings(".validation-error").removeClass("d-none");
        }
      }
      else {
        $(element).siblings(".validation-error").removeClass("d-none");
      }
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field");
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");

      if ($(element).attr("name") === "hobbies[]") {
        $(element).parent(".checkbox").siblings(".validation-error").addClass("d-none");
      }
      if ($(element).attr("name") === "validation-gender1") {
        $(element).parent(".radio").siblings(".validation-error").addClass("d-none");
      }
      else {
        $(element).siblings(".validation-error").addClass("d-none");
      }
    },
    submitHandler: function (form) {
      $('#alert-warn').addClass("d-none")
      $('#alert-info').removeClass("d-none")
      var formdata = $(form).serializeArray();
      var data = {}, files = [];
      $(formdata).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      alert("form is submitted.. See console logs");
      console.log("form values", data);
    }
  });
  $('#signupForm').validate({
    focusInvalid: false,
    rules: {
      'validation-fullname2': {
        required: true,
      },
      'validation-email2': {
        required: true,
        email: true
      },
      'validation-password3': {
        required: true,
      },
      'validation-cpassword4': {
        required: true,
        equalTo: "#password3"
      },
      'validation-checkbox2[]': {
        required: false
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none");
      if (error[0].textContent === "Please enter the same value again.") {
        $(element).siblings(".validation-error").text("Password Mismatch")
      }
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      $(element).siblings(".validation-error").addClass("d-none")
    },
    submitHandler: function (form) {
      var formdata = $(form).serializeArray();
      var data = {};
      $(formdata).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      alert("Data has been submitted. Please see console log");
      console.log("form data ===>", data);
      $(form)[0].reset();
      $(".floating-label").removeClass("enable-floating-label");
    }
  });

  $('#h-form').validate({
    focusInvalid: false,
    rules: {
      'validation-email3': {
        required: true,
        email: true
      },
      'validation-password4': {
        required: true,
      },
      'validation-cpassword5': {
        required: true,
        equalTo: "#password4"
      },
      'validation-website': {
        required: true,
        url: true
      },
      'validation-checkbox3[]': {
        required: false
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none");
      if (error[0].textContent === "Please enter the same value again.") {
        $(element).siblings(".validation-error").text("Password Mismatch")
      }
      if (error[0].textContent === "Please enter a valid URL.") {
        $(element).siblings(".validation-error").text("Please enter a valid URL.")
      }
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      $(element).siblings(".validation-error").addClass("d-none")
    },
    submitHandler: function (form) {
      var formdata = $(form).serializeArray();
      var data = {};
      $(formdata).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      alert("Data has been submitted. Please see console log");
      console.log("form data ===>", data);
      $(form)[0].reset();
      $(".floating-label").removeClass("enable-floating-label");
    }
  });
  // $(".parsley-examples").parsley().on
  $('#test').parsley().on('form:success', function (e) {
    alert("form submitted")
  }).on('form:submit', function () {
    return false; // Don't submit form for this demo
  });
}(jQuery))



function formValue(form) {
  var obj = {}
  $(form).find(".form-control").each(function () {
    var fval = $(this).val();
    var fkey = $(this).attr("id");
    obj[fkey] = fval;
  });
  return obj;
}