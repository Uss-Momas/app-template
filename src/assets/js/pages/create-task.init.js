(function($){
  //Initialize flatpicket start date
  if ($("#startdate").length) {
    $("#startdate").flatpickr({
      disableMobile: true
    });
  }

  //Initialize flatpicket end date
  if ($("#enddate").length) {
    $("#enddate").flatpickr({
      disableMobile: true
    });
  }
  //Initialize Select 2
  if ($('#taskTeam').length) {
    $("#taskTeam").select2();
  }
  if ($("#task-desc").length) {
    CKEDITOR.replace("task-desc");
  }
  //Initialize tags input
  if ($('#taskTags').length) {
    $('#taskTags').tagsinput({
      trimValue: true
    });
  }

  //Initialize validation task
  validateStep1();
}(jQuery))


/**
* ----------------------------------------------
* Validate Step 1 fn
* ----------------------------------------------
*/
function validateStep1() {
  $('#task-details').validate({
    focusInvalid: false,
    rules: {
      'validation-taskname': {
        required: true
      },
      'validation-taskowner': {
        required: true,
      },
      'validation-start': {
        required: true,
      },
      'validation-end': {
        required: true,
      },
      'validation-budget': {
        required: true,
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      if (!$(element).parents(".ckeditor").length) {
        $(element).siblings(".validation-error").removeClass("d-none")
      };
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      if (!$(element).parents(".ckeditor").length) {
        $parent.addClass("invalid-field")
      }
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      if (!$(element).parents(".ckeditor").length) {
        $(element).siblings(".validation-error").addClass("d-none")
      }
    },
    submitHandler: function (form) {
      var formdata = $(form).serializeArray();
      var data = {};
      $(formdata).each(function (index, obj) {
        if(obj.name === "validation-member"){
          data[obj.name] = ($("#taskTeam").val()).join(", ");
        }
        else{
          data[obj.name] = obj.value;
        }
      });
      data["validation-desc"] = CKEDITOR.instances['task-desc'].getData();
      alert("See console log");
      console.log("Create Task Data ===>", data)
      $(form)[0].reset();
      $("#taskTeam").select2("");
      $("#taskTags").tagsinput('removeAll');
      CKEDITOR.instances['task-desc'].setData("Enter Task Description")
    }
  });
}