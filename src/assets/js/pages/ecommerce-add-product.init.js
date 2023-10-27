(function ($) {

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

   $("#addProductForm").on("submit", function (event) {
      event.preventDefault();
      const products_url = "http://127.0.0.1:8000/api/v1/products";
      const newProduct = {
         name: $("#productname").val(),
         description: $("#brandname").val(),
         price: $("#projectbudget").val()
      };
      $.ajax({
         type: "POST",
         url: products_url,
         headers: {
            'Accept': "application/json",
            "Authorization": window.localStorage.getItem("jwt-token"),
         },
         data: newProduct,
         success: function (data) {
            alert(data.message);
            window.location.replace("../../../ecommerce-product.html");
         },
         error: function (data) {
            alert(data.responseJSON.message);
         }
      });
   })
   // $("#add-product-btn").on("click", function(event) {
   //    event.preventDefault();
   //    const products_url = "http://127.0.0.1:8000/api/v1/products";
   //    const newProduct = {
   //       name: $("#productname").val(),
   //       description: $("#brandname").val(),
   //       price: $("#projectbudget").val()
   //    };
   //    $.ajax({
   //       type: "POST",
   //       url: products_url,
   //       headers: {'Accept': "application/json"},
   //       data: newProduct,
   //       success: function (data) {
   //          alert(data.message);
   //       },
   //       error: function (data) {
   //          alert(data.responseJSON.message);
   //       }
   //    });
   // });
   // data['validation-files'] = files.join(", ");
   // const $newProduct = {
   //    name: data["validation-productname"],
   //    price: data["validation-budget"],
   //    description: data["validation-brandname"]
   // };
   // console.log($newProduct);
   // const products_url = "http://127.0.0.1:8000/api/v1/products";
   // $.ajax({
   //    type: 'POST',
   //    url: products_url,
   //    success: function (data) {
   //       console.log(data);
   //    }
   // });
   // console.log("product has been added ===>", data)

   //   $('#addProductForm').validate({
   //      ignore: [".select2-hidden-accessible"],
   //      focusInvalid: false,
   //      rules: {
   //         'validation-productname': {
   //            required: true
   //         },
   //         'validation-brandname': {
   //            required: true
   //         },
   //         'validation-price': {
   //            required: true
   //         },
   //         'validation-productcat': {
   //            required: true
   //         },
   //         'validation-budget': {
   //            required: true
   //         },
   //         'validation-colors': {
   //            required: false
   //         },
   //         'validation-currency': {
   //            required: true
   //         },
   //         'validation-qty': {
   //            required: true
   //         },
   //         "validation-editor": {
   //            required: function () {
   //               return CKEDITOR.instances['product-desc'].updateElement();
   //            }
   //         }
   //      },
   //      errorPlacement: function errorPlacement(error, element) {
   //         $(element).siblings(".validation-error").removeClass("d-none");
   //         if(!productFileDropzone.files.length) {
   //            $(productFileDropzone.element).siblings(".validation-error").removeClass("d-none");
   //         }
   //         return true
   //      },
   //      highlight: function (element) {
   //         var $el = $(element);
   //         var $parent = $el.parents('.form-group floating-label enable-floating-label show-label');
   //         $parent.addClass("invalid-field")
   //      },
   //      unhighlight: function (element) {
   //         var $el = $(element);
   //         var $parent = $el.parents('.form-group floating-label enable-floating-label show-label');
   //         $parent.removeClass("invalid-field");
   //         $(element).siblings(".validation-error").addClass("d-none")
   //      },
   //      submitHandler: function (form) {
   //         if(!productFileDropzone.files.length) {
   //            $(productFileDropzone.element).siblings(".validation-error").removeClass("d-none");
   //           return;
   //         }
   //         var formdata = $(form).serializeArray();
   //         var data = {}, files = [];
   //         $(formdata).each(function (index, obj) {
   //            data[obj.name] = obj.value;
   //         });
   //         if (productFileDropzone && productFileDropzone.files.length) {
   //            productFileDropzone.files.forEach(function (item, index) {
   //               files.push(item.name)
   //            });
   //         }
   //         data['validation-files'] = files.join(", ");
   //         const $newProduct = {
   //          name: data["validation-productname"],
   //          price: data["validation-budget"],
   //          description: data["validation-brandname"]
   //         };
   //         console.log($newProduct);
   //         const products_url = "http://127.0.0.1:8000/api/v1/products";
   //         $.ajax({
   //          type: 'POST',
   //          url: products_url,
   //          success: function (data) {
   //             console.log(data);
   //          }
   //         });
   //         console.log("product has been added ===>", data)
   //         alert("see console log for data submission");
   //         $(form)[0].reset();
   //         $(".select2").select2("");
   //         $("#colors").tagsinput('removeAll');
   //         productFileDropzone.removeAllFiles(true)
   //         CKEDITOR.instances['product-desc'].setData("")
   //      }
   //   });
}(jQuery))