(function ($) {
  var params = {
    invoiceData: [],
    priceMapper: {
      'usd': '$',
      'inr': 'R',
      'ar': 'A',
      'cd': '$',
      'euro': 'U',
    }
  }
  // var invoiceData = [];
  // var priceMapper = {
  //   'usd': '$',
  //   'inr': 'R',
  //   'ar': 'A',
  //   'cd': '$',
  //   'euro': 'U',
  // }
  if ($("#invdate").length) {
    var invDate = $("#invdate").flatpickr({
      disableMobile: true
    });
    params.invDate = invDate;
  }
  $("#upload-logo").click(function () {
    $("#logo").trigger("click")
  })
  $("#logo").on("change", function (e) {
    $("#upload-logo input").val($(this).val());
  })
  $(".select2").select2().on('change', function () {
    if ($(this).val() !== '') {
      $(this).siblings(".validation-error").addClass("d-none")
    }
  });
  //Initialize flatpicket end date
  if ($("#duedate").length) {
    var dueDate = $("#duedate").flatpickr({
      disableMobile: true
    });
    params.dueDate = dueDate;
  }


  $("#reset-invoice-form").on("click", function () {
    $('#invoiceform')[0].reset();
    $(".select2").select2("");
    params.invDate.clear();
    params.dueDate.clear()
    $('#invoiceform').find(".validation-error").addClass("d-none");
  })
  $(document).on("click", ".remove-item", function () {
    var index = $(this).children(".btn").attr("data-id");
    params.invoiceData.splice(index, 1);
    recountPrice(params.invoiceData, params.priceMapper)
    $(this).closest("tr").remove();
  })
  //Add/create new  invoice
  validateInvoice(params);
}(jQuery))

function validateInvoice(params) {
  $('#invoiceform').validate({
    ignore: [],
    focusInvalid: false,
    rules: {
      'validation-fname': {
        required: true
      },
      'validation-email': {
        required: true,
        email: true
      },
      'validation-invnumber': {
        required: true
      },
      'validation-ponumber': {
        required: true
      },
      'validation-invdate': {
        required: true
      },
      'validation-duedate': {
        required: true
      },
      'validation-currency': {
        required: true
      },
      'validation-category': {
        required: true
      },
      'validation-subcategory': {
        required: true
      },
      'validation-price': {
        required: true
      },
      'validation-qty': {
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
      params.invoiceData.push(data)
      recountPrice(params.invoiceData, params.priceMapper);
      if ($("#invoice-table").hasClass("d-none")) {
        $("#invoice-table").removeClass("d-none");
      }
      $("html,body").animate(function () {
        scrollTop: $("#invoice-table").offset().top
      }, 500)
      console.log("profile form submitted data ===>", params.invoiceData)
      $(form)[0].reset();
      $(".select2").select2("");
      params.invDate.clear();
      params.dueDate.clear()
    }
  });
}

function recountPrice(invoiceData, priceMapper) {
  $("#invoice-table tbody").html("");
  var allTotal = 0;
  var currency = '$';
  if (invoiceData.length) {
    var currency = invoiceData[0]["validation-currency"];
  }
  $(invoiceData).each(function (index, item) {
    generateHTML(item, index, priceMapper)
    allTotal += parseInt(item["validation-qty"]) * parseInt(item["validation-price"]);
  });
  var currency = priceMapper[currency.toLowerCase()] ? priceMapper[currency.toLowerCase()] : '';
  var allTotalHTML = '<tr>' +
    '<td colspan="4" class="text-end">Sub Total</td>' +
    '<td class="text-end">' + currency + '' + allTotal + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td colspan="4" class="border-0 text-end">' +
    '<strong>Shipping</strong></td>' +
    '<td class="border-0 text-end">$0</td>' +
    '</tr>' +
    '<tr>' +
    '<td colspan="4" class="border-0 text-end">' +
    '<strong>Total</strong></td>' +
    '<td class="border-0 text-end">' +
    '<h4 class="m-0">' + currency + '' + allTotal + '</h4>' +
    '</td>' +
    '</tr>';
  allTotalHTML = $.parseHTML(allTotalHTML);
  $("#invoice-table tbody").append(allTotalHTML);
  if(allTotal == '0') {
    $("#invoice-table").addClass("d-none");
  }
}

function generateHTML(item, index, priceMapper) {
  var trHTML = '<tr>' +
    '<td class="editorHTML">' + item["validation-fname"] + " " + item["validation-lname"] + '</td>' +
    '<td>' + item["validation-price"] + '</td>' +
    '<td>' + item["validation-qty"] + '</td>' +
    '<td class="text-end">' + priceMapper[item["validation-currency"].toLowerCase()] + '' + (Math.floor(parseInt(item["validation-qty"]) * parseInt(item["validation-price"]))) + '</td>' +
    '<td class="remove-item text-center"><button class="btn avatar avatar-xs bg-soft-danger text-danger me-0" data-effect="wave" data-id="' + index + '"><i class="bx bx-x fs-sm"></i></button></td>';
  trHTML = $.parseHTML(trHTML);
  $(trHTML).find(".editorHTML").find("h1, h2, h3, h4, h5, h6").addClass("fs-16 mb-2");
  $(trHTML).find(".editorHTML").find("p").addClass("text-muted mb-0");
  $("#invoice-table tbody").append(trHTML);
}