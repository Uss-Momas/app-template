$(function () {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    if (!id) {
        window.location.replace("../../../ecommerce-product.html");
    }

    const $step_3 = $("sw-default-step-3");

    const value = getData(id).then((response) => {
        const cart = response.data;
        const cart_products = JSON.parse(cart.products);
        const $tbody = $("#sw-default-step-3 .table-responsive .table tbody")

        console.log(cart);
        Object.entries(cart_products).forEach(([id, product], index) => {
            product["product_id"] = product["id"];
            delete product.id;
            console.log(id, product);
        });

        // console.log(data);
        for (const [key, product] of Object.entries(cart_products)) {
            const price_formated = new Intl.NumberFormat('mz-MZ', { style: 'currency', currency: 'MZN' }).format(product.price);
            $tbody.append(`<tr>
                <td>
                    <img src="assets/images/product/chair.jpg" alt="product-img" title="product-img"
                        class="avatar-lg">
                </td>
                <td>
                    <h6 class="fs-16 mb-1 text-truncate">
                        <a href="ecommerce-product-details.html" class="text-dark">${product.name}</a>
                    </h6>
                    <p class="text-muted mb-2 text-truncate">
                        ${product.description}
                    </p>
                    <div class="d-flex">
                        <p class="mb-2 mb-lg-0 me-2">Size: <b>M</b></p>
                        <p class="mb-0">Color: <b>Maroon</b></p>
                    </div>
                </td>
                <td class="base-price" data-price="${cart.price}">
                    <b>${price_formated}</b>
                </td>
            </tr>`);
        }
        const cart_total_formatted = new Intl.NumberFormat('mz-MZ', { style: 'currency', currency: 'MZN' }).format(cart.total);
        $tbody.append(`
            <tr>
            <td colspan="2" class="text-end">
                Sub Total:
            </td>
            <td>
                <b> ${cart_total_formatted}</b>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="text-end">
                Shipping Charges:
            </td>
            <td>
                <b class="text-danger">0 MZN</b>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="text-end">
                Total Amount:
            </td>
            <td>
                <b class="text-primary">${cart_total_formatted}</b>
            </td>
        </tr>
        <tr>
            <td colspan="2" class="text-end">
                Payment Type:
            </td>
            <td>
                <b class="text-info">Debit Card</b>
            </td>
        </tr>
            `);

        return response.data
    });

    $("#submit-form").on("click", function () {
        console.log("ID: ", id);
        const getCart = getData(id);
        getCart.then((data) => {
            const cart = data.data;
            const cart_products = JSON.parse(cart.products);

            Object.entries(cart_products).forEach(([id, product], index) => {
                product["product_id"] = product["id"];
                delete product.id;
            });
            cart.products = cart_products;
            cart.user_id = 1;
            cart.amount = cart.total;

            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/orders',
                type: 'POST',
                headers: {
                    'Accept': "application/json",
                    "Authorization": window.localStorage.getItem("jwt-token"),
                 },
                data: cart,
                success: (resp) => {
                    console.log(resp);
                    alert("Order Placed");
                    window.location.replace("../../../ecommerce-product.html");
                },
                error: (err) => {
                    alert(err.responseJSON.message);
                    console.log(err.responseJSON);
                },
            });
        })
    });


});

async function getData(id) {
    const resp = await $.ajax({
        url: `http://127.0.0.1:8000/api/v1/carts/${id}`,
        headers: {
            'Accept': "application/json",
            "Authorization": window.localStorage.getItem("jwt-token"),
         },
        success: (response) => {
            const cart = response.data;
            const cart_products = JSON.parse(cart.products);
            return cart;
        },
        error: (err) => {
            console.log(err)
        }
    });
    return resp;
}