let $product_card = [];
$(function () {
	const products_url = "http://127.0.0.1:8000/api/v1/products";

	const $products_list = $('.products-list');

	$.ajax({
		url: products_url,
		headers: {
            'Accept': "application/json",
            "Authorization": window.localStorage.getItem("jwt-token"),
         },
		success: function (data) {
			console.log(data);
			const products = data.data.data;
			const cart_products = { ...JSON.parse(window.localStorage.getItem("cart-items")) }
			console.log(cart_products);

			$.each(products, function (i, product) {
				let box_icon_class = "bx-cart";
				let button_color_class = "bg-primary";
				if (cart_products[product.id]) {
					box_icon_class = "bx-check";
					button_color_class = "bg-success"
				}
				$products_list.append(`<div class="col-xl-4 col-sm-6">
				<div class="card product-item" data-id="${product.id}">
				  <div class="card-body position-relative">
					<a href="ecommerce-product-details.html?id=${product.id}" class="d-block " id="product_element"><img src="assets/images/product/chair3.jpg" alt="Lettstart Admin"
						class="img-fluid mx-auto d-block"></a>
					<button class="btn avatar avatar-xs bg-light text-default wishlist-icon me-0" data-effect="wave"
					  data-bs-toggle="tooltip" title="Add to wishlist">
					  <i class="bx bx-heart fs-xs"></i>
					</button>
					<div class="item-description mt-3">
					  <div class="desc">
						<h6 class="fs-16 mb-1 text-truncate">
						  <a href="#" class="text-dark">${product.name}</a>
						</h6>
						<p class="text-muted mb-2 text-truncate">
						  ${product.description}
						</p>
						<h5 class="my-0 fw-bold"><del class="me-1"></del> ${product.price} MZN</h5>
					  </div>
					  <button id="product-btn" class="btn avatar ${button_color_class} text-white me-0" data-effect="wave" data-icon="cart"
						data-bs-toggle="tooltip" title="Add to cart" data-id="${product.id}" onclick="teste(this)">
						<i class="bx ${box_icon_class} fs-sm"></i>
					  </button>
					</div>
				  </div>
				</div>
			  </div>`)
			});

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
		},
		error: (err) => {
			console.log(err);
			if (err.status === 401 || err.responseJSON.message === "Token has expired") {
				alert(err.responseJSON.message);
				window.location.replace("../../../auth-login-basic.html");
			}
		}
	});
}(jQuery));


function teste(self) {
	const product_id = self.dataset.id;

	const productPromise = getProduct(product_id);

	// console.log($(self).children().attr("class"));
	// console.log($(self).children().hasClass("bx-cart"));
	// console.log($(self).children().hasClass("bx-check"))
	if ($(self).children().hasClass("bx-check")) {
		console.log("Checked");
		productPromise.then((resp) => {
			const product = resp.data;
			const product_object = { ...JSON.parse(window.localStorage.getItem("cart-items")) };
			// delete the unchecked item from local storage
			delete product_object[product_id]
			console.log(product_object);
			window.localStorage.setItem("cart-items", JSON.stringify(product_object))
		});
	}
	else {

		productPromise.then((resp) => {
			console.log(resp);
			const product = resp.data;
			const product_object = { ...JSON.parse(window.localStorage.getItem("cart-items")) };
			product_object[product_id] = { id: product_id, name: product.name, description: product.description, price: product.price }
			console.log(product_object);
			// const cart_products = {};
			// cart_products.push(...product_object)
			window.localStorage.setItem("cart-items", JSON.stringify(product_object))
			// const product_data = window.localStorage.getItem(product_id);
			// console.log(JSON.parse(product_data));
		});
		// $.ajax({
		// 	type: "GET",
		// 	url: `${product_url}/${product_id}`,
		// 	success: (data) => {
		// 		const product = data.data;
		// 		const product_object = { ...JSON.parse(window.localStorage.getItem("cart-items")) };
		// 		product_object[product_id] = { id: product_id, name: product.name, description: product.description, price: product.price }
		// 		console.log(product_object);
		// 		// const cart_products = {};
		// 		// cart_products.push(...product_object)
		// 		window.localStorage.setItem("cart-items", JSON.stringify(product_object))
		// 		// const product_data = window.localStorage.getItem(product_id);
		// 		// console.log(JSON.parse(product_data));
		// 	}
		// });

	}
}

async function getProduct(product_id) {
	const product_url = "http://127.0.0.1:8000/api/v1/products";

	return await $.ajax({
		type: "GET",
		url: `${product_url}/${product_id}`,
		headers: {
            'Accept': "application/json",
            "Authorization": window.localStorage.getItem("jwt-token"),
         },
		success: (data) => {
		}
	});
}