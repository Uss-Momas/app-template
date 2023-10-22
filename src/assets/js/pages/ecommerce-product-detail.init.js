(function ($) {
  $(".wishlist-icon").on("click", function () {
    $(this).toggleClass("bg-light").toggleClass("bg-danger");
    $(this).toggleClass("text-default").toggleClass("text-white");
  })
  $('[data-icon="cart"]').on("click", function () {
    $(this).toggleClass("bg-primary").toggleClass("bg-success");
    $(this).children(".bx").toggleClass("bx-cart").toggleClass("bx-check");
  })
}(jQuery))