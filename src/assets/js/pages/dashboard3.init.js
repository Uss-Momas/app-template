
$(function () {
	/**
	* ----------------------------------------------
	* Stat Chart 1 fn call
	* ----------------------------------------------
	*/
	statChart1("statistics-chart-1")
	/**
	* ----------------------------------------------
	* Stat Chart 2 fn call
	* ----------------------------------------------
	*/
	statChart2("statistics-chart-2")
	/**
	* ----------------------------------------------
	* Stat Chart 3 fn call
	* ----------------------------------------------
	*/
	statChart3("statistics-chart-3")
	/**
	* ----------------------------------------------
	* Stat Chart 4 fn call
	* ----------------------------------------------
	*/
	statChart4("statistics-chart-4")
	/**
	* ----------------------------------------------
	* Live Data Chart fn call
	* ----------------------------------------------
	*/
	liveGraph("#realtime-server-load");
	/**
	* ----------------------------------------------
	* Memory Chart fn call
	* ----------------------------------------------
	*/
	memoryChart("#memory-usage");
	/**
	* ----------------------------------------------
	* Stats Revenue Chart fn call
	* ----------------------------------------------
	*/
	viewChart();
	/**
	* ----------------------------------------------
	* Stats Revenue Chart fn call
	* ----------------------------------------------
	*/
	depthChart();
	/**
	* ----------------------------------------------
	* Monthly Stats Chart fn call
	* ----------------------------------------------
	*/
	monthlyStats();
	/**
	* ----------------------------------------------
	* Device Type Chart fn call
	* ----------------------------------------------
	*/
	deviceType();
}(jQuery));

/**
* ----------------------------------------------
* Stat Chart 1 fn
* ----------------------------------------------
*/
function statChart1(id) {
	var options = {
		type: "doughnut",
		data: {
			datasets: [{
				data: [600, 1400],
				backgroundColor: [colors.success, colors.gray300],
				hoverBackgroundColor: [colors.success, colors.gray300],
				borderWidth: 0
			}]
		},
		options: {
			cutoutPercentage: 85,
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 2500
			},
			scales: {
				xAxes: [{
					display: false,
				}],
				yAxes: [{
					display: false
				}]
			},
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			}
		}
	}
	new Chart(document.getElementById(id).getContext("2d"), options);
}

/**
* ----------------------------------------------
* Stat Chart 2 fn
* ----------------------------------------------
*/
function statChart2(id) {
	var options = {
		type: "doughnut",
		data: {
			datasets: [{
				data: [450, 50],
				backgroundColor: [colors.info, colors.gray300],
				hoverBackgroundColor: [colors.info, colors.gray300],
				borderWidth: 0
			}]
		},
		options: {
			cutoutPercentage: 85,
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 2500
			},
			scales: {
				xAxes: [{
					display: false,
				}],
				yAxes: [{
					display: false
				}]
			},
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			}
		}
	}
	new Chart(document.getElementById(id).getContext("2d"), options);
}

/**
* ----------------------------------------------
* Stat Chart 3 fn
* ----------------------------------------------
*/
function statChart3(id) {
	var options = {
		type: "doughnut",
		data: {
			datasets: [{
				data: [32, 8],
				backgroundColor: [colors.warning, colors.gray300],
				hoverBackgroundColor: [colors.warning, colors.gray300],
				borderWidth: 0
			}]
		},
		options: {
			cutoutPercentage: 85,
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 2500
			},
			scales: {
				xAxes: [{
					display: false,
				}],
				yAxes: [{
					display: false
				}]
			},
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			}
		}
	}
	new Chart(document.getElementById(id).getContext("2d"), options);
}

/**
* ----------------------------------------------
* Stat Chart 4 fn
* ----------------------------------------------
*/
function statChart4(id) {
	var options = {
		type: "doughnut",
		data: {
			datasets: [{
				data: [240, 10],
				backgroundColor: [colors.pink, colors.gray300],
				hoverBackgroundColor: [colors.pink, colors.gray300],
				borderWidth: 0
			}]
		},
		options: {
			cutoutPercentage: 85,
			responsive: true,
			maintainAspectRatio: false,
			animation: {
				duration: 2500
			},
			scales: {
				xAxes: [{
					display: false,
				}],
				yAxes: [{
					display: false
				}]
			},
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			}
		}
	}
	new Chart(document.getElementById(id).getContext("2d"), options);
}

/**
* ----------------------------------------------
* Live Data Chart fn
* ----------------------------------------------
*/
function liveGraph(id) {
	var data1 = [];
	var totalPoints = 300;
	function GetData() {
		data1.shift();
		while (data1.length < totalPoints) {
			var prev = data1.length > 0 ? data1[data1.length - 1] : 50;
			var y = prev + Math.random() * 10 - 5;
			y = y < 0 ? 0 : (y > 100 ? 100 : y);
			data1.push(y);
		}
		var result = [];
		for (var i = 0; i < data1.length; ++i) {
			result.push([i, data1[i]])
		}
		return result;
	}
	var updateInterval = 200;
	var plot = $.plot($(id), [
		GetData()], {
		series: {
			lines: {
				show: true,
				fill: true,
			},
			shadowSize: 0
		},
		yaxis: {
			min: 0,
			max: 100,
			ticks: 10
		},
		xaxis: {
			show: true
		},
		grid: {
			hoverable: true,
			clickable: true,
			tickColor: colors.gridColor,
			borderWidth: 0,
			borderColor: colors.gridColor
		},
		colors: [colors.orange],
		tooltip: {
			show: true,
			cssClass: "tooltip-flot",
			content: getTooltip
		},
		tooltipOpts: {
			defaultTheme: false
		}
	});
	function getTooltip(label, x, y) {
		return "<span class='me-1'>X: " + parseFloat(x).toFixed(0) + "</span> <span>Y:" + parseFloat(y).toFixed(0) + "</span>";
	}
	function update() {
		plot.setData([GetData()]);
		plot.draw();
		setTimeout(update, updateInterval);
	}
	update();
}


/**
* ----------------------------------------------
* Memory Chart fn
* ----------------------------------------------
*/
function memoryChart(id) {
	var data1 = [];
	var totalPoints = 300;
	function GetData() {
		data1.shift();
		while (data1.length < totalPoints) {
			var prev = data1.length > 0 ? data1[data1.length - 1] : 50;
			var y = prev + Math.random() * 10 - 5;
			y = y < 0 ? 0 : (y > 100 ? 100 : y);
			data1.push(y);
		}
		var result = [];
		for (var i = 0; i < data1.length; ++i) {
			result.push([i, data1[i]])
		}
		return result;
	}
	var updateInterval = 200;
	var plot = $.plot($(id), [
		GetData()], {
		series: {
			lines: {
				show: true,
				fill: true,
			},
			shadowSize: 0
		},
		yaxis: {
			min: 0,
			max: 100,
			ticks: 10
		},
		xaxis: {
			show: true
		},
		grid: {
			hoverable: true,
			clickable: true,
			tickColor: colors.gridColor,
			borderWidth: 0,
			borderColor: colors.gridColor
		},
		colors: [colors.info],
		tooltip: {
			show: true,
			cssClass: "tooltip-flot",
			content: getTooltip
		},
		tooltipOpts: {
			defaultTheme: false
		}
	});
	function getTooltip(label, x, y) {
		return "<span class='me-1'>X: " + parseFloat(x).toFixed(0) + "</span> <span>Y:" + parseFloat(y).toFixed(0) + "</span>";
	}
	function update() {
		plot.setData([GetData()]);
		plot.draw();
		setTimeout(update, updateInterval);
	}
	update();
}

/**
* ----------------------------------------------
* View Chart fn
* ----------------------------------------------
*/
function viewChart() {
	var options = {
		"chart": {
			"type": "line",
			"height": 45,
			"width": 100,
			"sparkline": {
				"enabled": true
			},
			"parentHeightOffset": 0,
			"toolbar": {
				"show": false
			}
		},
		"colors": [colors.white],
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
		"stroke": {
			"width": 2,
			"curve": "smooth"
		},
		"series": [
			{
				"data": [
					24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61, 38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
				]
			}
		]
	}
	new ApexCharts(document.querySelector("#view-chart"), options).render();
}

/**
* ----------------------------------------------
* Depth View Chart fn
* ----------------------------------------------
*/
function depthChart() {
	var options = {
		"chart": {
			"type": "line",
			"height": 45,
			"width": 100,
			"sparkline": {
				"enabled": true
			},
			"parentHeightOffset": 0,
			"toolbar": {
				"show": false
			}
		},
		"colors": [colors.white],
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
		"stroke": {
			"width": 2,
			"curve": "smooth"
		},
		"series": [
			{
				"data": [
					14, 20, 40, 70, 31, 50, 90, 42, 23, 81, 15, 97, 94, 46, 99, 61, 38, 104, 98, 13, 25, 25, 37, 14, 23, 120, 20, 42, 44, 60
				]
			}
		]
	}
	new ApexCharts(document.querySelector("#depth-chart"), options).render();
}

/**
* ----------------------------------------------
* Monthly Stats Chart fn
* ----------------------------------------------
*/
function monthlyStats() {

	var options = {
		"chart": {
			"type": "bar",
			"height": 250,
			"redrawOnParentResize": true,
			"toolbar": {
				"show": false
			}
		},
		"markers": {
			"size": 0
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
			"show": true,
			"xaxis": {
				"lines": {
					"show": true
				}
			},
			"yaxis": {
				"lines": {
					"show": true
				}
			}
		},
		"xaxis": {
			"type": "datetime",
			"categories": [
				"2019-01-01", "2019-02-01", "2019-03-01", "2019-04-01", "2019-05-01", "2019-06-01",
				"2019-07-01", "2019-08-01", "2019-09-01", "2019-10-01", "2019-11-01", "2019-12-01"
			]
		},
		"yaxis": {
			"axisBorder": {
				"show": true,
				"color": colors.gray300
			}
		},
		"series": [{
			"name": "Previous Month",
			"data": [14, 20, 40, 70, 31, 50, 90, 42, 23, 81, 15, 97, 94, 46, 99, 61, 38, 104, 98, 13, 25, -25, -37, -14, -23, -120, 20, 42, 44, 60]
		}, {
			"name": "Current Month",
			"data": [-14, -20, -40, -70, -31, -50, -90, -42, -23, -81, -15, -97, -94, -46, -99, -61, -38, -104, -98, -13, -25, -25, -37, -14, -23, -120, 40, 50, 54, 70]
		}],
		"legend": {
			"fontFamily": "Nunito Sans, sans-serif",
			"labels": {
				"colors": [
					colors.gray700,
					colors.gray700
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
	new ApexCharts(document.querySelector("#month-stats"), options).render();
}

/**
* ----------------------------------------------
* Device Type Chart fn
* ----------------------------------------------
*/
function deviceType() {
	var options = {
		series: [1500, 2000, 5500, 2500],
		chart: {
			height: 240,
			type: "radialBar",
		},
		plotOptions: {
			radialBar: {
				offsetY: 0,
				startAngle: 0,
				endAngle: 270,
				track:{
					background: colors.gray400
				},
				hollow: {
					margin: 0,
					size: "30%",
					background: "transparent",
					image: undefined,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						show: false,
					}
				}
			}
		},
		colors: [colors.primary, colors.purple, colors.orange, colors.teal],
		labels: ["High Resolution", "Smartphones", "Desktop", "Tablet"],
		legend: {
			show: true,
			floating: true,
			fontSize: "13px",
			position: "left",
			offsetX: -10,
			offsetY: -10,
			labels: {
				useSeriesColors: true,
			},
			markers: {
				size: 0
			},
			formatter: function (seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				vertical: 0,
				horixontal: 0
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}]
	};

	var chart = new ApexCharts(document.querySelector("#device-type"), options);
	chart.render();
}