$(function () {
	var salesOrderState, customerAcquisitionState;
	$(".wishlist-icon").on("click", function(){
		$(this).toggleClass("bg-light").toggleClass("bg-danger");
		$(this).toggleClass("text-default").toggleClass("text-white");
	})
	$('[data-icon="cart"]').on("click", function(){
		$(this).toggleClass("bg-primary").toggleClass("bg-success");
		$(this).children(".bx").toggleClass("bx-cart").toggleClass("bx-check");
	})
	/**
	* ----------------------------------------------
	* Stats Per Week Chart fn call
	* ----------------------------------------------
	*/
	salesOrderState = statsPerWeekChart("weekly", false, salesOrderState);
	$(".earningTabs button").on("click", function(){
		$(this).addClass("btn-primary").removeClass("btn-outline-primary");
		$(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
		var type = 	$(this).attr("data-type");
		statsPerWeekChart(type, true, salesOrderState);
  });
  
  /**
  * ----------------------------------------------
  * Product carousel fn call
  * ----------------------------------------------
  */
  productCarousel();
  
  /**
  * ----------------------------------------------
  * Revenue by category fn call
  * ----------------------------------------------
  */
	revenueCat();

  /**
  * ----------------------------------------------
  * Customer Acquisition Chart fn
  * ----------------------------------------------
  */
  customerAcquisitionState = customerAcquisitionChart("weekly", false, customerAcquisitionState);
  $(".stats-dropdown .dropdown-item").on('click', function(){
    var type = $(this).attr('data-type');
    var text = $(this).text();
    $(this).parents('.dropdown').find('.update-text').text(text);
    customerAcquisitionChart(type, true, customerAcquisitionState);
  })
});
/**
* ----------------------------------------------
* Stats Per Week Chart fn
* ----------------------------------------------
*/
function statsPerWeekChart(type, refresh, salesOrderState) {
	var monthly = [{
		"name": "Monthly",
		"data": [
			5000,
			3500,
			7000,
			10000,
			7500,
			8000,
			12000,
			15000,
			14000,
			17500,
			22000,
			18000
		]
	}];
	var yearly = [{
		"name": "Yearly",
		"data": [
			20000,
			50000,
			60000,
			25000,
			35000,
      60000,
      70000,
      35000
		]
	}];
  var series = [];
  var newUpdatedOptions = {
    "xaxis": {
      "categories": [
        "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
      ]
    },
    "colors": [
      colors.info
    ]
  }
	if(type === "yearly"){
    series = yearly;
    newUpdatedOptions["colors"] = [
      colors.info
    ];
    newUpdatedOptions["xaxis"] = {
      "categories": [
        "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
      ]
    }
	}
	else{
    newUpdatedOptions["colors"] = [
      colors.primary
    ];
    newUpdatedOptions["xaxis"] = {
      "categories": [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
      ]
    }
		series = monthly;
	}
	var options;
	if (!refresh) {
		options = {
			"chart": {
				"height": 415,
				"type": "area",
				"toolbar": {
					"show": false
				}
			},
			"dataLabels": {
				"enabled": false
			},
			"stroke": {
				"width": 2,
				"curve": "smooth"
			},
			"series": series,
			"xaxis": {
				"categories": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
				"tooltip": {
					"enabled": false,
					"offsetX": 0
				}
			},
			"colors": [
				colors.primary
			],
			"fill": {
				"type": "gradient",
				"gradient": {
					"type": "vertical",
					"shadeIntensity": 1,
					"inverseColors": false,
					"opacityFrom": 0.45,
					"opacityTo": 0.05,
					"stops": [
						45,
						100
					]
				}
			},
			"tooltip": {
				"theme": "dark",
				"x": {
					"show": false
				},
				"marker": {
					"show": false
				}
			}
		}
		salesOrderState = new ApexCharts(document.querySelector("#sales-order"), options);
		salesOrderState.render();
		return salesOrderState
	}
	else{
    salesOrderState.updateOptions(newUpdatedOptions)
		salesOrderState.updateSeries(series)
	}
}

/**
* ----------------------------------------------
* Product carousel fn
* ----------------------------------------------
*/
function productCarousel(){
  var productCarousel = $(".product-owl").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5500,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('.carousel-right-trigger').click(function() {
    productCarousel.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.carousel-left-trigger').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    productCarousel.trigger('prev.owl.carousel', [300]);
  })  
}

/**
* ----------------------------------------------
* Revenue by category fn
* ----------------------------------------------
*/
function revenueCat(){
  var options = {
		"type": "doughnut",
		"data": {
			"labels": [
				"Men",
				"Women",
				"Accessories",
        "Children",
        "Apperal"
			],
			"datasets": [
				{
					"label": "Doughnut chart",
					"data": [
						20000,
						40000,
						55000,
            10000,
            30000
					],
					"backgroundColor": [
						colors.primary,
						colors.warning,
						colors.info,
            colors.orange,
            colors.teal
					],
					"borderWidth": 0
				}
			]
		},
		"options": {
			"responsive": true,
			"maintainAspectRatio": false,
			"legend": {
				"position": "bottom"
			},
			"cutoutPercentage": 60
		}
	};
  new Chart(document.getElementById("cat-sale"), options);
}

/**
* ----------------------------------------------
* Customer Acquisition Chart fn
* ----------------------------------------------
*/
function customerAcquisitionChart(type, refresh, customerAcquisitionState) {
	var weekly = [{
		"name": "Previous Week",
		"data": [
			500,
			200,
			1000,
			700,
			650,
			1500,
			1800
		]
	},{
		"name": "Current Week",
		"data": [
			1000,
			500,
			1500,
			2000,
			700,
			750,
			0
		]
	}];
	var monthly = [{
		"name": "Previous Month",
		"data": [
			3000,
			2500,
			6000,
			8000,
			9500,
			10000,
			5000,
			4000,
			10000,
			16500,
			16000,
			14000
		]
	},{
		"name": "Current Month",
		"data": [
			6000,
			4000,
			6500,
			9000,
			8500,
			10000,
			13000,
			12000,
			16000,
			18500,
			0,
			0
		]
	}];
	var yearly = [{
		"name": "Previous Year",
		"data": [
			5000,
			25000,
			50000,
			15000,
			20000,
      30000,
      50000,
      35000
		]
	},{
		"name": "Current Year",
		"data": [
			30000,
			45000,
			9000,
			30000,
			45000,
      50000,
      0,
      0
		]
	}];
  var series = [];
  var newUpdatedOptions = {
    "xaxis": {
      "categories": [
        "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
      ]
    }
  }
	if(type === "yearly"){
    series = yearly;
    newUpdatedOptions["xaxis"] = {
      "categories": [
        "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"
      ]
    }
	}
	else if(type === "monthly"){
    newUpdatedOptions["xaxis"] = {
      "categories": [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
      ]
    }
		series = monthly;
  }
  else {
    newUpdatedOptions["xaxis"] = {
      "categories": [
        "Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"
      ]
    }
		series = weekly;
  }
	var options;
	if (!refresh) {
		options = {
			"chart": {
				"height": 335,
				"type": "area",
				"toolbar": {
					"show": false
				}
			},
			"dataLabels": {
				"enabled": false
			},
			"stroke": {
				"width": 2,
				"curve": "smooth"
			},
			"series": series,
			"xaxis": {
				"categories": [ "Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun" ],
				"tooltip": {
					"enabled": false,
					"offsetX": 0
				}
			},
			"colors": [
        colors.orange,
        colors.warning
			],
			"fill": {
				"type": "gradient",
				"gradient": {
					"type": "vertical",
					"shadeIntensity": 1,
					"inverseColors": false,
					"opacityFrom": 0.45,
					"opacityTo": 0.05,
					"stops": [
						45,
						100
					]
				}
			},
			"legend": {
				"fontFamily": "Nunito Sans, sans-serif",
				"itemMargin": {
					"vertical": 10,
					"horizontal": 10
				},
			},
			"tooltip": {
				"theme": "dark",
				"x": {
					"show": false
				},
				"marker": {
					"show": false
				}
			}
		}
		customerAcquisitionState = new ApexCharts(document.querySelector("#customer-aqu"), options);
		customerAcquisitionState.render();
		return customerAcquisitionState
	}
	else{
    customerAcquisitionState.updateOptions(newUpdatedOptions)
		customerAcquisitionState.updateSeries(series)
	}
}