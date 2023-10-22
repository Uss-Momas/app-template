//initializing
(function ($) {
  "use strict";
  $('[data-plugin="counterup"]').each(function (idx, obj) {
    $(this).counterUp({
      delay: 50,
      time: 1200
    });
  });
  var scrollBarArr = ["comment-scrollbar", "attac-file"]
  scrollBarArr.forEach(function (id) {
    Scrollbar.init(document.getElementById(id));
  })
  statisticChart();
}(jQuery));

/**
* ----------------------------------------------
* Stats Chart fn
* ----------------------------------------------
*/
function statisticChart() {
  var options = {
    "chart": {
      "height": 300,
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
      'x': {
        formatter: function (val) {
          return 'Week ' + val
        }
      },
      "y": {
        formatter: function (val, index) {
          return val
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
        "name": "Dec 2019 - Feb 2020",
        "data": [
          100, 150, 180, 50, 170, 160, 82, 60, 125, 250, 220
        ]
      }
    ],
    "xaxis": {
      "categories": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11"
      ]
    },
    "legend": {
      "fontFamily": "Nunito Sans, sans-serif",
      "labels": {
        "colors": [
          colors.primary
        ]
      }
    },
    "colors": [
      colors.success
    ],
    "fill": {
      "opacity": 1
    }
  }
  new ApexCharts(document.querySelector("#stats-chart"), options).render()
}