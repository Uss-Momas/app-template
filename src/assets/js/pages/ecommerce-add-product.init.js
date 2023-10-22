(function($){
  
  Dropzone.autoDiscover = false;
  $(".select2").select2().on('change', function () {
     if ($(this).val() !== '') {
        $(this).siblings(".validation-error").addClass("d-none")
     }
  });

  if ($("#product-desc").length) {
     CKEDITOR.replace("product-desc");
  }
  if ($('#colors').length) {
     $('#colors').tagsinput({
        trimValue: true
     });
     $("#colors").on('itemAdded itemRemoved', function () {
        $("#colors").siblings(".validation-error").addClass("d-none");
     });
  }
  /**
   * ----------------------------------------------
   * Initialize Project Files Dropzone 
   * ----------------------------------------------
   */
  var productFileDropzone = new Dropzone(document.getElementById("productImages"), {
    url: "http://matrrdigital.com/themes/dropzone",
    previewsContainer: "#file-previews",
    previewTemplate: $("#uploadPreviewTemplate").html(),
    success: function (file, response) {
       var imgName = response;
       file.previewElement.classList.add("dz-success");
       $(productFileDropzone.element).siblings(".validation-error").addClass("d-none");
       console.log("Successfully uploaded :" + imgName);
    },
    error: function (file, response) {
       console.log("response", response);
       file.previewElement.classList.add("dz-error");
       $(productFileDropzone.element).siblings(".validation-error").addClass("d-none");
    }
 })

  $('#addProductForm').validate({
     ignore: [".select2-hidden-accessible"],
     focusInvalid: false,
     rules: {
        'validation-productname': {
           required: true
        },
        'validation-brandname': {
           required: true
        },
        'validation-price': {
           required: true
        },
        'validation-productcat': {
           required: true
        },
        'validation-budget': {
           required: true
        },
        'validation-colors': {
           required: true
        },
        'validation-currency': {
           required: true
        },
        'validation-qty': {
           required: true
        },
        "validation-editor": {
           required: function () {
              return CKEDITOR.instances['product-desc'].updateElement();
           }
        }
     },
     errorPlacement: function errorPlacement(error, element) {
        $(element).siblings(".validation-error").removeClass("d-none");
        if(!productFileDropzone.files.length) {
           $(productFileDropzone.element).siblings(".validation-error").removeClass("d-none");
        }
        return true
     },
     highlight: function (element) {
        var $el = $(element);
        var $parent = $el.parents('.form-group floating-label enable-floating-label show-label');
        $parent.addClass("invalid-field")
     },
     unhighlight: function (element) {
        var $el = $(element);
        var $parent = $el.parents('.form-group floating-label enable-floating-label show-label');
        $parent.removeClass("invalid-field");
        $(element).siblings(".validation-error").addClass("d-none")
     },
     submitHandler: function (form) {
        if(!productFileDropzone.files.length) {
           $(productFileDropzone.element).siblings(".validation-error").removeClass("d-none");
          return;
        }
        var formdata = $(form).serializeArray();
        var data = {}, files = [];
        $(formdata).each(function (index, obj) {
           data[obj.name] = obj.value;
        });
        if (productFileDropzone && productFileDropzone.files.length) {
           productFileDropzone.files.forEach(function (item, index) {
              files.push(item.name)
           });
        }
        data['validation-files'] = files.join(", ");
        alert("see console log for data submission");
        console.log("product has been added ===>", data)
        $(form)[0].reset();
        $(".select2").select2("");
        $("#colors").tagsinput('removeAll');
        productFileDropzone.removeAllFiles(true)
        CKEDITOR.instances['product-desc'].setData("")
     }
  });
}(jQuery))