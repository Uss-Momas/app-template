(function($){
  $(".touchspin-qty").TouchSpin({
    verticalbuttons: !0
  });
  $(".touchspin-qty").on("change", function () {
    var basePrice = $(this).closest("td").siblings(".base-price").attr("data-price")
    var totalPrice = Math.floor($(this).val() * parseInt(basePrice));
    $(this).closest("td").siblings(".total-price").html('<b>$' + totalPrice + '</b>')
  });
  $(".remove-cart-item").on("click", function () {
    var id = $(this).closest("td").attr("data-id");
    alert(id)
    $(this).parents("tr").remove();
  });
  $("#apply-coupon").on("click", function(){
    $("#dis-coupon").hide()
    $("#coupon-applied").fadeIn()
  })
}(jQuery))