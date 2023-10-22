(function ($) {
  //Store step data
  var count = 0;
  var obj = {
    "step1": {
      data: {},
      valid: false
    },
    "step2": {
      data: {},
      valid: false
    },
    "step3": {
      data: {},
      valid: true
    }
  }
  //Select 2
  
	$('[data-select = "select2"]').select2().on('change', function () {
    if ($(this).val() !== '') {
      $(this).siblings(".validation-error").addClass("d-none")
    }
  });

  //Validate step 1 form
  $("#sw-default-step-1-button").on("click", function () {
    validateStep1(obj);
  })

  //Validate step 2 form
  $("#sw-default-step-2-button").on("click", function () {
    validateStep2(obj);
  })

  //Initialize smartwizard fn call
  initiliazeSmartWizard(obj)

  // $("#cardnumberInput").inputmask();
  $("[name= 'validation-phone']").mask("000-00-0000");
  $("[name= 'validation-pin']").mask("000000");
  $('#cardnumberInput').mask('0000 0000 0000 0000');
  $('#expirydateInput').mask('00/00', {
    onChange: function(val){
      var id= $('#expirydateInput').attr("data-id");
      $('[data-id*="'+ id +'"]').text(val)
    }
  });
  $('#cvvcodeInput').mask('000');
  $('#savedcvv').mask('000');
  $('#cardnumberInput').on("focusout", function(){
    var str = $(this).val();
    var arr = str.split(" ");
    $(arr).each(function(index, item){
      $("#card-number [data-id='num"+(index+1)+"']").text(item)
    })
  })
  $("#cardnameInput").on("change", function(){
    var id= $(this).attr("data-id");
    $('[data-id*="'+ id +'"]').text($(this).val())
  });
}(jQuery))

/**
* ----------------------------------------------
* Initialize smartwizard fn
* ----------------------------------------------
*/
function initiliazeSmartWizard(obj) {
  $('#smartwizard-default').smartWizard({
    useURLhash: false,
    showStepURLhash: false,
    transitionEffect: 'slide',
    lang: {  // Language variables
      next: 'Next Step',
      previous: 'Previous'
    },
    toolbarSettings: {
      toolbarExtraButtons: [
        $('<button></button>').text('Confirm Order')
          .addClass('btn btn-primary d-none').attr("id", "submit-form")
          .on('click', function () {
            alert('Data Submitted... See Console log');
          })
      ]
    }
  });

  $(".sw-btn-prev").removeClass("btn-secondary").addClass("btn-light");
  $(".sw-btn-next").removeClass("btn-secondary").addClass("btn-primary");
  $(".sw-btn-next").parent().removeClass("btn-group me-2").addClass("d-flex justify-content-between w-100");
  $("#smartwizard-default").on("leaveStep", function (e, anchorObject, stepNumber, stepDirection) {
    var href = $(anchorObject).attr("href");
    if (stepDirection === 'forward' && stepNumber === 0) {
      $(href + "-button").trigger("click");
      if (obj['step' + (stepNumber + 1)].valid) {
        console.log("step1", obj);
        return true
      }
      return false
    }
    if (stepDirection === 'forward' && stepNumber === 1) {
      $(href + "-button").trigger("click");
      if (obj['step' + (stepNumber + 1)].valid) {
        console.log("step2", obj);
        return true
      }
      return false
    }
  });
  $("#smartwizard-default").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
    
    $("#order-summery").removeClass("d-none");
    setTimeout(function () {
      $(".sw-container").css({
        'min-height': $("#sw-default-step-" + (stepNumber + 1)).outerHeight()
      })
    }, 500)
    if (stepDirection === 'forward' && stepNumber === 2) {
      $("#shipping-details-review").html("");
      $(".sw-btn-next").addClass("d-none");
      $("#order-summery").addClass("d-none");
      $(".sw-btn-next").parent().removeClass("d-flex justify-content-between w-100").addClass("btn-group me-2");
      $(".sw-btn-next").parents(".btn-toolbar").removeClass("justify-content-end").addClass("justify-content-between");
      $("#submit-form").removeClass("d-none");
      $("#smartwizard-default").removeClass("col-md-8 col-xl-9").addClass("col-12")
      if(obj['step1'].valid){
        var addressHTML = '', nameHTML="", phoneHTML="";
        var shippingDetails = '<h5 class="fw-semibold mb-3">Shipping Details</h5>';
        var data = obj['step1']['data'];
        for (var key in data) {
          if(key === 'validation-fullname'){
            nameHTML += '<h6 class="fs-15 fw-semibold">'+ data[key] +'</h6>';
          }
          if(key === 'validation-address'){
            addressHTML += '<address class="d-flex"> <i class="bx bxs-map align-middle fs-sm text-primary"></i><span class="align-middle">'+ data[key]+' '+data['validation-state']+' '+data['validation-country'] +'</span></address>';
          }
          if(key === 'validation-phone'){
            phoneHTML += '<p> <i class="bx bx-mobile-alt align-middle fs-sm text-primary"></i><span class="align-middle">'+ data[key] +'</span></p>';
          }
        }
        shippingDetails += nameHTML + addressHTML + phoneHTML;
        shippingDetails = $.parseHTML(shippingDetails);
        $("#shipping-details-review").html(shippingDetails);
      }
    }
    else {
      $(".sw-btn-next").removeClass("d-none");
      $(".sw-btn-next").parent().addClass("d-flex justify-content-between w-100").removeClass("btn-group me-2");
      $(".sw-btn-next").parents(".btn-toolbar").addClass("justify-content-end").removeClass("justify-content-between");
      $("#submit-form").addClass("d-none");
    }
  });
}

/**
* ----------------------------------------------
* Validate Step 1 fn
* ----------------------------------------------
*/
function validateStep1(obj) {
  $('#shipping-details').validate({
    ignore: [".select2-hidden-accessible"],
    focusInvalid: false,
    rules: {
      'validation-fullname': {
        required: true
      },
      'validation-email': {
        required: true,
        email: true
      },
      'validation-phone': {
        required: true
      },
      'validation-pin': {
        required: true
      },
      'validation-address': {
        required: true,
      },
      'validation-locality': {
        required: true,
      },
      'validation-country': {
        required: true,
      },
      'validation-state': {
        required: true,
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none")
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
      obj['step1'].valid = false;
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      $(element).siblings(".validation-error").addClass("d-none")
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
}

/**
* ----------------------------------------------
* Validate Step 2 fn
* ----------------------------------------------
*/
function validateStep2(obj) {
  
  $('#card-details').validate({
    focusInvalid: false,
    rules: {
      'validation-cardnumber': {
        required: true
      },
      'validation-cardname': {
        required: true,
      },
      'validation-cardexp': {
        required: true
      },
      'validation-cardcvv': {
        required: true
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none")
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
      obj['step2'].valid = false;
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field")
      $(element).siblings(".validation-error").addClass("d-none")
    },
    submitHandler: function (form) {
      obj['step2'].valid = true;
      var formdata = $(form).serializeArray();
      var data = {};
      $(formdata).each(function (index, obj) {
        data[obj.name] = obj.value;
      });
      obj['step2'].data = data;
    }
  });
}