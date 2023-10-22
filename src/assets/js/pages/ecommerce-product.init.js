(function ($) {
  $(".wishlist-icon").on("click", function () {
    $(this).toggleClass("bg-light").toggleClass("bg-danger");
    $(this).toggleClass("text-default").toggleClass("text-white");
  })
  $('[data-icon="cart"]').on("click", function () {
    $(this).toggleClass("bg-primary").toggleClass("bg-success");
    $(this).children(".bx").toggleClass("bx-cart").toggleClass("bx-check");
  })
  $("#pricerange").ionRangeSlider({
    skin: "square",
    type: "double",
    grid: !0,
    min: 0,
    max: 1e3,
    from: 200,
    to: 800,
    prefix: "$",
    extra_classes: "custom-slider"
  })
}(jQuery))