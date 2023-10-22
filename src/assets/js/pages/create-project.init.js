(function ($) {
  Dropzone.autoDiscover = false;
  //Store step data
  var obj = {
    "step0": {
      data: {},
      valid: false
    },
    "step1": {
      data: {},
      valid: false
    },
    "step2": {
      data: {},
      valid: true
    }
  }

  //Key to text mapping fn call
  var mappingObj = keyToText();

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
  //Initialize tags input
  if ($('#projectTags').length) {
    $('#projectTags').tagsinput({
      trimValue: true
    });
  }

  //Initialize Select 2
  if ($('#projectTeam').length) {
    $("#projectTeam").select2();
  }

  //Initialize CK Editor fn call
  initializeCKEditor()

  // Initialize Compony Logo Dropzone fn call 
  var companyLogoDropzone = initializeCompanyLogoDropzone()

  //Initialize Project Files Dropzone fn call
  var projectFileDropzone = initializeProjectFilesDropzone()


  //Validate step 1 form
  $("#step-0").on("click", function () {
    validateStep0(obj);
  })

  //Validate step 2 form
  $("#step-1").on("click", function () {
    validateStep1(obj);
  })
  initiliazeSmartWizard(mappingObj, obj, companyLogoDropzone, projectFileDropzone);
}(jQuery))

/**
* ----------------------------------------------
* Key to text mapping fn
* ----------------------------------------------
*/
function keyToText() {
  return {
    'step0': "Project Details Review",
    'step1': "Client Details Review",
    'step2': "Documents Review",
    "validation-projectname": "Project Name",
    "validation-projectowner": "Project Owner",
    "validation-start": "Project Start Date",
    "validation-end": "Project End Date",
    "validation-budget": "Project Budget",
    "validation-member": "Project Team",
    "validation-tags": "PRoject Tags",
    "validation-desc": "Project Description",
    "validation-clientname": "Client Name",
    "validation-clientaddress": "Client Address",
    "validation-email": "Client Email",
    "validation-personname": "Client Contact Person",
    "validation-company": "Client Description",
    "validation-logo": "Client Logo",
    "validation-documents": "Documents"
  }
}

function initiliazeSmartWizard(mappingObj, obj, companyLogoDropzone, projectFileDropzone) {
  var index = 0;
  const triggerEl = document.querySelectorAll('#project-tabs [data-bs-toggle="tab"]')
  $(".wizard .previous").children(".btn").attr("disabled", "true");
  $(".wizard .next").on("click", function () {
    if(index === 3) {
      alert("see console logs");
      console.log("Form Data ==>", obj);
      return;
    }
    if ($("#step-" + index).length) {
      $("#step-" + index).trigger("click");
    }
    if (index === 0) {
      obj['step0']['data']['validation-desc'] = CKEDITOR.instances['project-desc'].getData();
    } else if (index === 1) {
      obj['step1']['data']['validation-company'] = CKEDITOR.instances['company-desc'].getData();
      var logos = [];
      if (companyLogoDropzone && companyLogoDropzone.files.length) {
        companyLogoDropzone.files.forEach(function (item, index) {
          logos.push(item.name)
        });
        obj['step1']['data']['validation-logo'] = logos.join(", ");
      }
    }
    else if (index === 2) {
      var documents = [];
      if (projectFileDropzone && projectFileDropzone.files.length) {
        projectFileDropzone.files.forEach(function (item, index) {
          documents.push(item.name)
        });
        obj['step2']['data']['validation-documents'] = documents.join(", ");
      }
      else {
        obj['step2']['data']['validation-documents'] = []
      }
      generateHTML(obj, mappingObj)
    }
    
    if(obj['step'+index].valid) {
      index = index + 1;
      var triggerFirstTabEl = triggerEl[index];
      if (triggerFirstTabEl) {
        triggerFirstTabEl.click();
      }
      if (index === 3) {
        $(this).children('.btn').text("Finish").removeClass("btn-primary").addClass("btn-success");
      }
    }
    if (index > 0) {
      $(".wizard .previous").children(".btn").removeAttr("disabled");
    }
  })
  $(".wizard .previous").on("click", function () {
    index = index - 1;
    var triggerFirstTabEl = triggerEl[index];
    triggerFirstTabEl.click();
    if (index < 3) {
      $(".wizard .next").children('.btn').text("Next").addClass("btn-primary").removeClass("btn-success");
    }
    if (index < 1) {
      $(this).children(".btn").attr("disabled", "true");
    }
  })
}


function generateHTML(obj, mappingObj) {
  $("#review-data").html("");
  var elem = $("#review-data");
  for (var key in obj) {
    var divElem = document.createElement("div");
    divElem.classList.add("project-review-list");
    var h5Elem = document.createElement("h5")
    h5Elem.classList.add('fs-16', 'mb-4', 'fw-semibold');
    h5Elem.innerHTML = mappingObj[key]
    $(divElem).append(h5Elem);
    var innerContainer = '';
    for (var innerkey in obj[key].data) {
      innerContainer += '<div class="row">' +
        '<div class="col-md-4 col-lg-3 col-xl-2"> <h6>' + mappingObj[innerkey] + '</h6></div>' +
        '<div class="col-md-8 col-lg-9 col-xl-10"> <div class="html">' + obj[key]['data'][innerkey] + '</div></div>' +
        '</div>';
    }
    var html = $.parseHTML(innerContainer);
    $(divElem).append(html);
    $(elem).append(divElem)
  }
}

/**
* ----------------------------------------------
* Validate Step 1 fn
* ----------------------------------------------
*/
function validateStep0(obj) {
  $('#project-details').validate({
    focusInvalid: false,
    rules: {
      'validation-projectname': {
        required: true
      },
      'validation-projectowner': {
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
      obj['step0'].valid = false;
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
      obj['step0'].valid = true;
      var formdata = $(form).serializeArray();
      var data = {};
      $(formdata).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      obj['step0'].data = data;
    }
  });
  if (!$('#project-details').valid()) {
    //form is invalid
    return false;
  }
  return true;
}

/**
* ----------------------------------------------
* Validate Step 2 fn
* ----------------------------------------------
*/
function validateStep1(obj, companyLogoDropzone, stepNumber) {
  $('#client-details').validate({
    focusInvalid: false,
    rules: {
      'validation-clientname': {
        required: true
      },
      'validation-clientaddress': {
        required: true,
      },
      'validation-email': {
        required: true,
        email: true
      },
      'validation-personname': {
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
      obj['step1'].valid = false;
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field")
      if (!$(element).parents(".ckeditor").length) {
        $(element).siblings(".validation-error").addClass("d-none")
      }
    },
    submitHandler: function (form) {
      obj['step1'].valid = true;
      var formdata = $(form).serializeArray();
      var data = {};
      $(formdata).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      obj['step1'].data = data;
    }
  });

  if (!$('#client-details').valid()) {
    //form is invalid
    return false;
  }
  return true;
}


/**
 * ----------------------------------------------
 * Initialize Ck editor
 * ----------------------------------------------
 */
function initializeCKEditor() {
  if ($("#project-desc").length) {
    CKEDITOR.replace("project-desc");
  }

  if ($("#company-desc").length) {
    CKEDITOR.replace("company-desc");
  }
}


/**
 * ----------------------------------------------
 * Initialize Compony Logo Dropzone 
 * ----------------------------------------------
 */
function initializeCompanyLogoDropzone() {
  return new Dropzone(document.getElementById("companylogo"), {
    url: "http://matrrdigital.com/themes/dropzone",
    previewsContainer: "#client-file-previews",
    previewTemplate: $("#clientPreviewTemplate").html(),
    success: function (file, response) {
      var imgName = response;
      file.previewElement.classList.add("dz-success");
      console.log("Successfully uploaded :" + imgName);
    },
    error: function (file, response) {
      console.log("response", response)
      file.previewElement.classList.add("dz-error");
    }
  })
}

/**
 * ----------------------------------------------
 * Initialize Project Files Dropzone 
 * ----------------------------------------------
 */
function initializeProjectFilesDropzone() {
  return new Dropzone(document.getElementById("projectfiles"), {
    url: "http://matrrdigital.com/themes/dropzone",
    previewsContainer: "#project-file-previews",
    previewTemplate: $("#projectPreviewTemplate").html(),
    success: function (file, response) {
      var imgName = response;
      file.previewElement.classList.add("dz-success");
      console.log("Successfully uploaded :" + imgName);
    },
    error: function (file, response) {
      console.log("response", response)
      file.previewElement.classList.add("dz-error");
    }
  })
}