$(function () {
	var salesOrderState;
	/**
	* ----------------------------------------------
	* Stats Revenue Chart fn call
	* ----------------------------------------------
	*/
	statsChart();
	/**
	* ----------------------------------------------
	* Stats Orders Chart fn call
	* ----------------------------------------------
	*/
	statsChart2();
	/**
	* ----------------------------------------------
	* Stats Users Chart fn call
	* ----------------------------------------------
	*/
	statsChart3();
	/**
	* ----------------------------------------------
	* Stats Visitors Chart fn call
	* ----------------------------------------------
	*/
	statsChart4();


	/**
	* ----------------------------------------------
	* Statistic Chart fn Call
	* ----------------------------------------------
	*/
	statisticChart();

	/**
	* ----------------------------------------------
	* Quarterly Chart fn call
	* ----------------------------------------------
	*/
	quarterlyChart();

	/**
	* ----------------------------------------------
	* Today Sale Chart fn call
	* ----------------------------------------------
	*/
	todaySaleChart();

	/**
	* ----------------------------------------------
	* Stats Per Week Chart fn call
	* ----------------------------------------------
	*/
	salesOrderState = statsPerWeekChart("weekly", false, salesOrderState);

	/**
	* ----------------------------------------------
	* Today Sale Chart fn call
	* ----------------------------------------------
	*/
	todayRevenue()
	$(".earningTabs button").on("click", function(){
		$(this).addClass("btn-primary").removeClass("btn-outline-primary");
		$(this).siblings().removeClass("btn-primary").addClass("btn-outline-primary");
		var type = 	$(this).attr("data-type");
		statsPerWeekChart(type, true, salesOrderState);
	})
}(jQuery));


/**
* ----------------------------------------------
* Stats Revenue Chart fn
* ----------------------------------------------
*/
function statsChart() {
	var options = {
		"chart": {
			"type": "area",
			"height": 45,
			"width": 90,
			"sparkline": {
				"enabled": true
			},
			"parentHeightOffset": 0,
			"toolbar": {
				"show": false
			}
		},
		"colors": [colors.primary],
		"markers": {
			"size": 0
		},
		"tooltip": {
			"theme": "dark",
			"fixed": {
				"enabled": false
			},
			"x": {
				"show": false
			},
			"y": {
				"title": {
					"formatter": function(seriesName) {
						return "";
					}
				}
			},
			"marker": {
				"show": false
			}
		},
		"fill": {
			"type": "gradient",
			"gradient": {
				"type": "vertical",
				"shadeIntensity": 1,
				"inverseColors": false,
				"opacityFrom": 0.45,
				"opacityTo": 0.05,
				"stops": [45, 100]
			},
		},
		"stroke": {
			"width": 2,
			"curve": "smooth"
		},
		"series": [
			{
				"data": [
					25,
					66,
					41,
					85,
					63,
					25,
					44,
					12,
					36,
					9,
					54
				]
			}
		]
	}
	new ApexCharts(document.querySelector("#t-rev"), options).render();
}

/**
* ----------------------------------------------
* Stats Order Chart fn
* ----------------------------------------------
*/
function statsChart2() {
	var options = {
		"chart": {
			"type": "area",
			"height": 45,
			"width": 90,
			"sparkline": {
				"enabled": true
			},
			"parentHeightOffset": 0,
			"toolbar": {
				"show": false
			}
		},
		"colors": [colors.orange],
		"markers": {
			"size": 0
		},
		"tooltip": {
			"theme": "dark",
			"fixed": {
				"enabled": false
			},
			"x": {
				"show": false
			},
			"y": {
				"title": {
					"formatter": function(seriesName) {
						return "";
					}
				}
			},
			"marker": {
				"show": false
			}
		},
		"fill": {
			"type": "gradient",
			"gradient": {
				"type": "vertical",
				"shadeIntensity": 1,
				"inverseColors": false,
				"opacityFrom": 0.45,
				"opacityTo": 0.05,
				"stops": [45, 100]
			},
		},
		"stroke": {
			"width": 2,
			"curve": "smooth"
		},
		"series": [
			{
				"data": [
					25,
					66,
					41,
					85,
					63,
					25,
					44,
					12,
					36,
					9,
					54
				]
			}
		]
	}
	new ApexCharts(document.querySelector("#t-order"), options).render()
}


/**
* ----------------------------------------------
* Stats User Chart fn
* ----------------------------------------------
*/
function statsChart3() {
	var options = {
		"chart": {
			"type": "area",
			"height": 45,
			"width": 90,
			"sparkline": {
				"enabled": true
			},
			"parentHeightOffset": 0,
			"toolbar": {
				"show": false
			}
		},
		"colors": [colors.success],
		"markers": {
			"size": 0
		},
		"tooltip": {
			"theme": "dark",
			"fixed": {
				"enabled": false
			},
			"x": {
				"show": false
			},
			"y": {
				"title": {
					"formatter": function (seriesName) {
						return "";
					}
				}
			},
			"marker": {
				"show": false
			}
		},
		"fill": {
			"type": "gradient",
			"gradient": {
				"type": "vertical",
				"shadeIntensity": 1,
				"inverseColors": false,
				"opacityFrom": 0.45,
				"opacityTo": 0.05,
				"stops": [45, 100]
			},
		},
		"stroke": {
			"width": 2,
			"curve": "smooth"
		},
		"series": [
			{
				"data": [
					25,
					66,
					41,
					85,
					63,
					25,
					44,
					12,
					36,
					9,
					54
				]
			}
		]
	}
	new ApexCharts(document.querySelector("#t-user"), options).render()
}


/**
* ----------------------------------------------
* Stats Visitor Chart fn
* ----------------------------------------------
*/
function statsChart4() {
	var options = {
		"chart": {
			"type": "area",
			"height": 45,
			"width": 90,
			"sparkline": {
				"enabled": true
			},
			"parentHeightOffset": 0,
			"toolbar": {
				"show": false
			}
		},
		"colors": [colors.warning],
		"markers": {
			"size": 0
		},
		"tooltip": {
			"theme": "dark",
			"fixed": {
				"enabled": false
			},
			"x": {
				"show": false
			},
			"y": {
				"title": {
					"formatter": function (seriesName) {
						return "";
					}
				}
			},
			"marker": {
				"show": false
			}
		},
		"fill": {
			"type": "gradient",
			"gradient": {
				"type": "vertical",
				"shadeIntensity": 1,
				"inverseColors": false,
				"opacityFrom": 0.45,
				"opacityTo": 0.05,
				"stops": [45, 100]
			},
		},
		"stroke": {
			"width": 2,
			"curve": "smooth"
		},
		"series": [
			{
				"data": [
					25,
					66,
					41,
					85,
					63,
					25,
					44,
					12,
					36,
					9,
					54
				]
			}
		]
	}
	new ApexCharts(document.querySelector("#t-visitor"), options).render()
}

/**
* ----------------------------------------------
* Revenue Chart fn
* ----------------------------------------------
*/
function statisticChart() {
	var options = {
		"chart": {
			"height": 280,
			"type": "bar",
			"redrawOnParentResize": true,
			"toolbar": {
				"show": false
			}
		},
		"plotOptions": {
			"bar": {
				"horizontal": false,
				"columnWidth": "30%",
				"endingShape": "rounded"
			}
		},
		"tooltip": {
			"y": {
				formatter: function (val) {
					return "$" + val + " K"
				}
			}
		},
		"dataLabels": {
			"enabled": false
		},
		"stroke": {
			"show": false,
			"width": 1,
			"colors": [
				"transparent"
			]
		},
		"grid": {
			"show": true
		},
		"series": [
			{
				"name": "Current Year",
				"data": [
					35,
					44,
					55,
					57,
					56,
					61,
					75,
					108,
					60,
					35,
					98,
					88
				]
			},
			{
				"name": "Previous Year",
				"data": [
					52,
					76,
					85,
					101,
					98,
					87,
					120,
					54,
					40,
					70,
					110,
					65
				]
			}
		],
		"xaxis": {
			"categories": [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"July",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			]
		},
		"legend": {
			"fontFamily": "Nunito Sans, sans-serif",
			"itemMargin": {
				"vertical": 10,
				"horizontal": 10
			},
			"labels": {
				"colors": [
					"#505d69",
					"#505d69"
				]
			}
		},
		"colors": [
			colors.primary,
			colors.success
		],
		"fill": {
			"opacity": 1
		}
	}
	new ApexCharts(document.querySelector("#stats-chart"), options).render()
}


/**
* ----------------------------------------------
* Quarterly Chart fn
* ----------------------------------------------
*/
function quarterlyChart() {
	var options = {
		"chart": {
			"height": 275,
			"type": "bar",
			"stacked": true,
			"toolbar": {
				"show": false
			}
		},
		"dataLabels": {
			"enabled": false
		},
		"stroke": {
			"show": false,
			"width": 1,
			"colors": [
				"transparent"
			]
		},
		"grid": {
			"show": true
		},
		"legend": {
			"fontFamily": "Nunito Sans, sans-serif",
			"itemMargin": {
				"vertical": 10,
				"horizontal": 10
			},
		},
		"series": [{
			"name": "Quarter 1",
			"data": [30, 50, 60, 20]
		}, {
			"name": "Quarter 2",
			"data": [40, 30, 40, 40]
		}, {
			"name": "Quarter 3",
			"data": [50, 80, 60, 50]
		}, {
			"name": "Quarter 4",
			"data": [60, 90, 70, 60]
		}],
		"xaxis": {
			"categories": [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			]
		},
		"colors": [
			colors.primary,
			colors.info,
			colors.warning,
			colors.teal
		],
		"fill": {
			"opacity": 1
		}
	}
	new ApexCharts(document.querySelector("#quartly-sale"), options).render()
}

/**
* ----------------------------------------------
* Today Sale Chart fn
* ----------------------------------------------
*/
function todaySaleChart() {
	var options = {
		"type": "doughnut",
		"data": {
			"labels": [
				"Direct sales",
				"Referral sales",
				"Afilliate sales",
				"Indirect sales"
			],
			"datasets": [
				{
					"label": "Doughnut chart",
					"data": [
						50,
						40,
						30,
						10
					],
					"backgroundColor": [
						colors.primary,
						colors.warning,
						colors.info,
						colors.orange
					],
					"borderWidth": 0
				}
			]
		},
		"options": {
			"responsive": true,
			"maintainAspectRatio": false,
			"legend": {
				"position": "top",
				"display": false
			},
			"cutoutPercentage": 70
		}
	};
	new Chart(document.getElementById("total-sale"), options);
}

/**
* ----------------------------------------------
* Stats Per Week Chart fn
* ----------------------------------------------
*/
function statsPerWeekChart(type, refresh, salesOrderState) {
	var weekly = [{
		"name": "Weekly",
		"data": [
			20,
			15,
			60,
			21,
			40,
			23,
			35,
			50,
			80,
			70,
			55,
			70
		]
	}];
	var monthly = [{
		"name": "Monthly",
		"data": [
			210,
			200,
			100,
			50,
			40,
			150,
			700,
			650,
			400,
			300,
			250,
			200
		]
	}];
	var series = [];
	if(type === 'monthly'){
		series = monthly;
	}
	else{
		series = weekly;
	}
	var options;
	if (!refresh) {
		options = {
			"chart": {
				"height": 238,
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
				"categories": [
					"1st",
					"2nd",
					"3rd",
					"4th",
					"5th",
					"6th",
					"7th",
					"8th",
					"9th",
					"10th",
					"11th",
					"12th"
				],
				"tooltip": {
					"enabled": false,
					"offsetX": 0
				}
			},
			"colors": [
				colors.success
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
		salesOrderState.updateSeries(series)
	}
}

/**
* ----------------------------------------------
* Today Sale Chart fn
* ----------------------------------------------
*/
function todayRevenue() {
	var options = {
		"type": "doughnut",
		"data": {
			"datasets": [{
				"data": [600, 1400],
				"backgroundColor": [colors.white, "rgba(255,255,255,0.3)"],
				"hoverBackgroundColor": [colors.white, "rgba(255,255,255,0.3)"],
				"borderWidth": 0
			}]
		},
		"options": {
			"cutoutPercentage": 94,
			"responsive": true,
			"maintainAspectRatio": false,
			"scales": {
				"xAxes": [{
					"display": false
				}],
				"yAxes": [{
					"display": false
				}]
			},
			"legend": {
				"display": false
			},
			"tooltips": {
				"enabled": false
			}
		}
	}
	new Chart(document.getElementById("today-revenue"), options);
}
