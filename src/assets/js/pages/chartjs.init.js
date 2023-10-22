(function ($) {
	//Line graph
	line();
	//Bar graph
	bar();
	//Multi graph
	multiChart()
	//Pie graph
	pie();
	//Donut graph
	donut();
	//Polar graph
	polar();
	//Radar graph
	radar();
}(jQuery))

function hexToRGB(hex, alpha) {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
	} else {
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}

function line() {
	var chartColors = [colors.primary, colors.danger];
	var data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [{
			label: "Current Week",
			backgroundColor: hexToRGB(chartColors[0], 0.3),
			borderColor: chartColors[0],
			data: [32, 42, 42, 62, 52, 75, 62]
		}, {
			label: "Previous Week",
			fill: true,
			backgroundColor: 'transparent',
			borderColor: chartColors[1],
			borderDash: [5, 5],
			data: [42, 58, 66, 93, 82, 105, 92]
		}]
	};

	var options = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		tooltips: {
			intersect: false
		},
		hover: {
			intersect: true
		},
		plugins: {
			filler: {
				propagate: false
			}
		},
		scales: {
			xAxes: [{
				reverse: true,
				gridLines: {
					color: "rgba(0,0,0,0.05)"
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
					stepSize: 20
				},
				display: true,
				borderDash: [5, 5],
				gridLines: {
					color: "rgba(0,0,0,0.05)",
					fontColor: '#fff'
				}
			}]
		}
	};
	var ctx = $("#line-chart-example").get(0).getContext("2d");
	new Chart(ctx, { type: 'line', data: data, options: options });
}

function bar() {
	var chartColors = [colors.primary, colors.info];

	var data = {
		// labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Sales Analytics",
				backgroundColor: chartColors[0],
				borderColor: chartColors[0],
				hoverBackgroundColor: chartColors[0],
				hoverBorderColor: chartColors[0],
				data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
			},
			{
				label: "Dollar Rate",
				backgroundColor: chartColors[1],
				borderColor: chartColors[1],
				hoverBackgroundColor: chartColors[1],
				hoverBorderColor: chartColors[1],
				data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
			}
		]
	};
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				gridLines: {
					display: false
				},
				stacked: false,
				ticks: {
					beginAtZero: true,
					stepSize: 20
				},
				beginAtZero: true
			}],
			xAxes: [{
				stacked: false,
				barPercentage: 0.75,
				categoryPercentage: 0.75,
				gridLines: {
					color: "rgba(0,0,0,0.01)"
				},
			}]
		}
	};
	var ctx = $("#bar-chart-example").get(0).getContext("2d");
	new Chart(ctx, { type: 'bar', data: data, options: options });
}

function pie() {
	var chartColors = [colors.primary, colors.info, colors.gray400, colors.danger];
	//pie chart
	var data = {
		labels: [
			"Direct",
			"Affilliate",
			"Sponsored",
			"E-mail"
		],
		datasets: [
			{
				data: [300, 135, 48, 154],
				backgroundColor: chartColors,
				borderColor: "transparent",
			}
		]
	};
	var options = {
		maintainAspectRatio: false,
		legend: {
			display: false
		}
	};
	var ctx = $("#pie-chart-example").get(0).getContext("2d");
	new Chart(ctx, { type: 'pie', data: data, options: options });
}

function donut() {
	var chartColors = [colors.primary, colors.info, colors.gray400];
	var data = {
		labels: [
			"Direct",
			"Affilliate",
			"Sponsored"
		],
		datasets: [
			{
				data: [128, 78, 48],
				backgroundColor: chartColors,
				borderColor: "transparent",
				borderWidth: "3",
			}]
	};
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		cutoutPercentage: 60,
		legend: {
			display: false
		}
	};
	var ctx = $("#donut-chart-example").get(0).getContext("2d");
	new Chart(ctx, { type: 'doughnut', data: data, options: options });
}

function polar() {
	//Ploar chart
	var chartColors = [colors.primary, colors.info, colors.gray400];
	var data = {
		labels: [
			"Direct",
			"Affilliate",
			"Sponsored",
			"E-mail"
		],
		datasets: [
			{
				data: [251, 135, 48, 154],
				backgroundColor: chartColors,
				borderColor: "transparent",
			}
		]
	};
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: "top"
		}
	}
	var ctx = $("#polar-chart-example").get(0).getContext("2d");
	new Chart(ctx, { type: 'polarArea', data: data, options: options });
}

function radar() {
	var chartColors = [colors.primary, colors.danger];
	//radar chart
	var data = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
			{
				label: "Desktops",
				backgroundColor: hexToRGB(chartColors[0], 0.3),
				borderColor: chartColors[0],
				pointBackgroundColor: chartColors[0],
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: chartColors[0],
				data: [65, 59, 90, 81, 56, 55, 40]
			},
			{
				label: "Tablets",
				backgroundColor: hexToRGB(chartColors[1], 0.3),
				borderColor: chartColors[1],
				pointBackgroundColor: chartColors[1],
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: chartColors[1],
				data: [28, 48, 40, 19, 96, 27, 100]
			}
		]
	};
	var options = {
		responsive: true,
		maintainAspectRatio: false
	};
	var ctx = $("#radar-chart-example").get(0).getContext("2d");
	new Chart(ctx, { type: 'radar', data: data, options: options });
}

function multiChart() {
	var chartColors = [colors.info, colors.danger];
	var data = {
		labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "bar chart",
				data: [50, 100, 150, 200, 250, 300, 400],
				backgroundColor: chartColors[0],
				borderColor: chartColors[0],
				borderWidth: 1
			},
			{
				label: "line chart",
				data: [250, 250, 250, 300, 350, 400, 500],
				type: "line",
				backgroundColor: chartColors[1],
				borderColor: chartColors[1],
				borderWidth: 1,
				fill: false
			}
		]
	}
	var options = {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			position: "bottom"
		},
		scales: {
			xAxes: [{
				barPercentage: 0.75,
				categoryPercentage: 0.75,
				gridLines: {
					color: "rgba(0,0,0,0.03)"
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true,
					stepSize: 50
				},
				gridLines: {
					color: "rgba(0,0,0,0.03)"
				}
			}]
		}
	}
	var ctx = $("#multi-chart-example").get(0).getContext("2d");
	new Chart(ctx, { type: 'bar', data: data, options: options });
}


