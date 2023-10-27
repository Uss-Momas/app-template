$(function () {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    if (!id) {
      window.location.replace("../../../ecommerce-product.html");
    }
    console.log("ID:", id);
    const product_url = "http://127.0.0.1:8000/api/v1/products";
    const $product_detail = $("#product-detail-container");
    $.ajax({
        type: "GET",
        url: `${product_url}/${id}`,
        headers: {
          'Accept': "application/json",
          "Authorization": window.localStorage.getItem("jwt-token"),
       },
        success: (data) => {
            const product = data.data;
            console.log(product);
            $product_detail.append(`
            <div class="card card-body">
              <div class="row">
                <div class="col-xl-6">
                  <div class="product-detail-imgs">
                    <div class="row">
                      <div class="col-md-2 col-sm-3 col-4">
                        <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist"
                          aria-orientation="vertical">
                          <a class="nav-link active" id="product-1-tab" data-bs-toggle="pill" href="#product-1"
                            role="tab" aria-controls="product-1" aria-selected="true">
                            <img src="assets/images/product/headphone.png" alt="Lettstart Admin"
                              class="img-fluid mx-auto d-block rounded">
                          </a>
                          <a class="nav-link" id="product-2-tab" data-bs-toggle="pill" href="#product-2" role="tab"
                            aria-controls="product-2" aria-selected="false">
                            <img src="assets/images/product/headphone2.png" alt="Lettstart Admin"
                              class="img-fluid mx-auto d-block rounded">
                          </a>
                          <a class="nav-link" id="product-3-tab" data-bs-toggle="pill" href="#product-3" role="tab"
                            aria-controls="product-3" aria-selected="false">
                            <img src="assets/images/product/headphone.png" alt="Lettstart Admin"
                              class="img-fluid mx-auto d-block rounded">
                          </a>
                          <a class="nav-link" id="product-4-tab" data-bs-toggle="pill" href="#product-4" role="tab"
                            aria-controls="product-4" aria-selected="false">
                            <img src="assets/images/product/headphone2.png" alt="Lettstart Admin"
                              class="img-fluid mx-auto d-block rounded">
                          </a>
                        </div>
                      </div>
                      <div class="col-md-9 col-sm-9 col-8">
                        <div class="tab-content p-4 border" id="v-pills-tabContent">
                          <div class="tab-pane fade show active" id="product-1" role="tabpanel"
                            aria-labelledby="product-1-tab">
                            <div>
                              <img src="assets/images/product/headphone.png" alt="Lettstart Admin"
                                class="img-fluid mx-auto d-block">
                            </div>
                          </div>
                          <div class="tab-pane fade" id="product-2" role="tabpanel" aria-labelledby="product-2-tab">
                            <div>
                              <img src="assets/images/product/headphone2.png" alt="Lettstart Admin"
                                class="img-fluid mx-auto d-block">
                            </div>
                          </div>
                          <div class="tab-pane fade" id="product-3" role="tabpanel" aria-labelledby="product-3-tab">
                            <div>
                              <img src="assets/images/product/headphone.png" alt="Lettstart Admin"
                                class="img-fluid mx-auto d-block">
                            </div>
                          </div>
                          <div class="tab-pane fade" id="product-4" role="tabpanel" aria-labelledby="product-4-tab">
                            <div>
                              <img src="assets/images/product/headphone2.png" alt="Lettstart Admin"
                                class="img-fluid mx-auto d-block">
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-wrap mt-3">
                          <div class="flex-fill mt-2 me-0 me-sm-2">
                            <button type="button" class="btn btn-primary btn-block" data-effect="wave">
                              <i class="bx bx-cart me-2"></i> Add to cart
                            </button>
                          </div>
                          <div class="flex-fill mt-2 mt-2">
                            <button type="button" class="btn btn-success btn-block waves-effectwaves-light">
                              <i class="bx bx-shopping-bag me-2"></i>Buy now
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="mt-4 mt-xl-3">
                    <a href="#" class="text-primary">${product.name}</a>
                    <h4 class="mt-1 mb-3 fw-semibold">${product.description}</h4>

                    <p class="text-muted float-left me-3">
                      <span class="bx bx-star text-warning"></span>
                      <span class="bx bx-star text-warning"></span>
                      <span class="bx bx-star text-warning"></span>
                      <span class="bx bx-star text-warning"></span>
                      <span class="bx bx-star"></span>
                    </p>
                    <!-- <p class="text-muted mb-4">( 152 Customers Review )</p> -->
                    <div class="mb-4">
                      <h4>
                        <b class="me-1">${product.price} MZN</b> <span class="text-muted me-1 h5"><del>${product.price * 1.2} MZN</del></span>
                        <span class="text-success fs-14 text-uppercase fw-bold">20 % Off</span>
                      </h4>
                    </div>
                    <!--PRODUCT Colors-->
                    <!-- <div class="product-color-options mb-4">
                      <h5 class="fs-15 fw-semibold mb-3">Colors :</h5>
                      <a href="#" class="active">
                        <img src="assets/images/product/headphone.png" alt="Lettstart Admin"
                          class="avatar-lg product-color-item rounded">
                        <p>Black</p>
                      </a>
                      <a href="#">
                        <img src="assets/images/product/headphone.png" alt="Lettstart Admin"
                          class="avatar-lg product-color-item rounded">
                        <p>Blue</p>
                      </a>
                      <a href="#">
                        <img src="assets/images/product/headphone.png" alt="Lettstart Admin"
                          class="avatar-lg product-color-item rounded">
                        <p>Gray</p>
                      </a>
                    </div> -->
                    <!--END PRODUCT Colors-->
                  </div>
                  <div class="row">
                    <!--Hightlights-->
                    <!-- <div class="col-lg-7">
                      <h5 class="fs-15 fw-semibold mb-3">Hightlights :</h5>
                      <ul class="list-unstyled default-list">
                        <li><i class="bx bx-headphone fs-16 align-middle text-primary me-1"></i> With
                          Mic:Yes
                        </li>
                        <li><i class="bx bx-link fs-16 align-middle text-primary me-1"></i> Connector type:
                          3.5 mm
                        </li>
                        <li><i class="bx bxs-music fs-16 align-middle text-primary me-1"></i> Extra bass:
                          Add extra thump to your music
                        </li>
                        <li><i class="bx bx-phone fs-16 align-middle text-primary me-1"></i> One button
                          universal remote to answer and manage your calls
                        </li>
                        <li><i class="bx bx-wifi fs-16 align-middle text-primary me-1"></i> Wireless
                        </li>
                      </ul>
                    </div> -->
                    <!--END Hightlights-->
                    <!--Services-->
                    <!-- <div class="col-lg-5">
                      <h5 class="fs-15 fw-semibold mb-3">Services :</h5>
                      <ul class="list-unstyled default-list">
                        <li><i class="bx bx-shield-alt-2 fs-16 align-middle text-primary me-1"></i> 6
                          Months Warranty
                        </li>
                        <li><i class="bx bx-refresh fs-16 align-middle text-primary me-1"></i> 10 Days
                          Replacement Policy
                        </li>
                        <li><i class="bx bxs-note fs-16 align-middle text-primary me-1"></i> Cash on
                          Delivery available
                        </li>
                      </ul>
                    </div> -->
                    <!--END Services-->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="accordian mt-3" id="accordionExample">
                    <h5 class="fs-16 fw-semibold pt-3 pb-2 mb-3 accordian-plus-minus-header border-bottom">
                      <a href="javascript:void(0)" class="text-default d-block" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Technical Details
                        <i class="bx bx-plus fs-sm plus float-end"></i>
                        <i class="bx bx-minus fs-sm minus float-end"></i>
                      </a>
                    </h5>
                    <div id="collapseOne" class="collapse show" aria-labelledby="collapseOne"
                      data-parent="#accordionExample">
                      <table class="table mb-0 table-bordered table-sm">
                        <tbody>
                          <tr>
                            <td class="bg-light">Category</td>
                            <td>Headphone</td>
                          </tr>
                          <tr>
                            <td class="bg-light">Brand</td>
                            <td>JBL</td>
                          </tr>
                          <tr>
                            <td class="bg-light">Color</td>
                            <td>Black</td>
                          </tr>
                          <tr>
                            <td class="bg-light">Connectivity</td>
                            <td>Bluetooth</td>
                          </tr>
                          <tr>
                            <td class="bg-light">Warranty Summary</td>
                            <td>1 Year</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="accordian mt-3" id="accordionExample2">
                    <!--ADDITIONAL INFORMATION-->
                    <!-- <h5 class="fs-16 fw-semibold pt-3 pb-2 mb-3 accordian-plus-minus-header border-bottom">
                      <a href="javascript:void(0)" class="text-default d-block" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Additional Information
                        <i class="bx bx-plus fs-sm plus float-end"></i>
                        <i class="bx bx-minus fs-sm minus float-end"></i>
                      </a>
                    </h5>
                    <div id="collapseTwo" class="collapse show" aria-labelledby="collapseTwo"
                      data-parent="#accordionExample2">
                      <table class="table table-bordered table-sm">
                        <tbody>
                          <tr>
                            <td class="bg-light">ASIN</td>
                            <td>BD15414Q7</td>
                          </tr>
                          <tr>
                            <td class="bg-light">Bestsellers Rank</td>
                            <td>#578 in Electronics</td>
                          </tr>
                        </tbody>
                      </table> -->
                    <!--END ADDITIONAL INFORMATION-->
                    <h5 class="fs-16 fw-semibold pt-3 pb-2 mb-3 border-bottom">
                      <a href="javascript:void(0)" class="text-default d-block">
                        Warranty & Support
                      </a>
                    </h5>
                    <p>Warranty Details: 1 year warranty on product</p>
                  </div>
                </div>
              </div>
            </div>
            `);
        },
    });
}(jQuery));