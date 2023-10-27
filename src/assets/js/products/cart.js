$(function () {
    const cart_items = JSON.parse(localStorage.getItem('cart-items'));
    const $table_body = $("#cart-items");

    for (const [key, item] of Object.entries(cart_items)) {
        $table_body.append(`
        <tr>
        <td>
            <img src="assets/images/product/chair.jpg" alt="product-img" title="product-img"
                class="avatar-lg">
        </td>
        <td>
            <h6 class="fs-16 mb-1 text-truncate">
                <a href="ecommerce-product-details.html" class="text-dark">${item.name}</a>
            </h6>
            <p class="text-muted mb-2 text-truncate">
                ${item.description}
            </p>
            <div class="d-flex">
            <!--
                <p class="mb-2 mb-lg-0 me-2">Size: <b>M</b></p>
                <p class="mb-0">Color: <b>Maroon</b></p>
            -->
            </div>
        </td>
        <td class="base-price" data-price="${item.price}">
            <b>${item.price} MZN</b>
        </td>
        <td>
            <div class="input-group">
                <input type="text" value="1" name="qty" class="touchspin-qty">
            </div>
        </td>
        <td class="total-price" data-total-price="${item.price}">
            <b>${item.price} MZN</b>
        </td>
        <td data-id="${item.id}">
            <a href="javascript:void(0);"
                class="avatar avatar-sm me-0 bg-soft-danger text-danger remove-cart-item">
                <i class="mdi mdi-close fs-sm"></i></a>
        </td>
    </tr>
        `);
    }

    // $("#cart-order-summary").append(`
    // <tr>
    //     <td>Grand Total :</td>
    //     <td>1,857 MZN</td>
    // </tr>
    // <tr>
    //     <td>Discount : </td>
    //     <td class="text-danger">- 157 MZN</td>
    // </tr>
    // <tr>
    // 	<td>Shipping Charge :</td>
    // 	<td>$25</td>
    // </tr>
    // <tr>
    // 	<td>Estimated Tax : </td>
    // 	<td>19.22</td>
    // </tr>
    // <tr id="cart-total-tr">
    // 	<td class="fw-bold">Total :</td>
    // 	<td class="fw-bold" id="cart-total-td">$1744.22</td>
    // </tr>
    // `)


    $(".touchspin-qty").TouchSpin({
        verticalbuttons: !0
    });
    $(".touchspin-qty").on("change", function () {
        var basePrice = $(this).closest("td").siblings(".base-price").attr("data-price");
        var totalPrice = Math.floor($(this).val() * parseInt(basePrice));
        $(this).closest("td").siblings(".total-price").html('<b>' + totalPrice + ' MZN</b>');
        $(this).closest("td").siblings(".total-price").attr('data-total-price', totalPrice);
        let total = 0;
        $(".total-price").each(function (data) {
            console.log($(this).attr("data-total-price"));
            total += parseFloat($(this).attr("data-total-price"))
            // console.log(total);
        });
        $("#cart-total-td").html('<b>' + total + ' MZN</b>');

    });
    $(".remove-cart-item").on("click", function () {
        var id = $(this).closest("td").attr("data-id");
        alert(id)
        $(this).parents("tr").remove();
    });
    $("#apply-coupon").on("click", function () {
        $("#dis-coupon").hide()
        $("#coupon-applied").fadeIn()
    })

    $("#proceed-check").on("click", function () {
        // const $quantities = $("#cart-items tr td .touchspin-qty");
        const $tbody_row = $("#cart-items tr");

        $tbody_row.each(function (index, value) {
            // .closest("td").attr("data-id")
            const $td_id = $(value).find(".remove-cart-item").closest("td").attr("data-id");
            const $quantity = $(value).find(".touchspin-qty").val();
            const product_object = cart_items[$td_id];
            if (product_object)
                product_object["quantity"] = parseInt($quantity);
            // console.log(index, $td, $quantity);
            // console.log(product_object)

        });
        const url = "http://127.0.0.1:8000/api/v1/carts"
        $.ajax({
            type: "POST", url: url,
            headers: {
                'Accept': "application/json",
                "Authorization": window.localStorage.getItem("jwt-token"),
            },
            data: { "products": cart_items },
            success: (response) => {
                // console.log(response);
                const newCart = response.data;
                window.location.replace(`../../../ecommerce-checkout.html?id=${newCart.id}`);
            },
            error: (err) => {
                alert("Não foi possível proceder com o pagamento!")
            }
        });
    });
});