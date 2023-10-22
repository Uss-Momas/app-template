$(document).ready(function () {

    drawSparkline();
    drawMouseSpeed();
    var resizeChart;

    $(window).resize(function (e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function () {
            drawSparkline();
            drawMouseSpeed();
        }, 300);
    });
});

function drawMouseSpeed() {
    var mrefreshinterval = 500; // update display every 500ms
    var lastmousex = -1;
    var lastmousey = -1;
    var lastmousetime;
    var mousetravel = 0;
    var mpoints = [];
    var mpoints_max = 30;
    $('html').mousemove(function (e) {
        var mousex = e.pageX;
        var mousey = e.pageY;
        if (lastmousex > -1) {
            mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
        }
        lastmousex = mousex;
        lastmousey = mousey;
    });
    var mdraw = function () {
        var md = new Date();
        var timenow = md.getTime();
        if (lastmousetime && lastmousetime != timenow) {
            var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
            mpoints.push(pps);
            if (mpoints.length > mpoints_max)
                mpoints.splice(0, 1);
            mousetravel = 0;
            var chartColors = [colors.danger];
            $('#sparkline5').sparkline(mpoints, {
                tooltipSuffix: ' pixels per second',
                type: 'line',
                width: "100%",
                height: '165',
                chartRangeMax: 77,
                maxSpotColor: false,
                minSpotColor: false,
                spotColor: false,
                lineWidth: 1,
                lineColor: chartColors,
                fillColor: hexToRGB(chartColors[0], 0.3),
                highlightLineColor: 'rgba(24,147,126,.1)',
                highlightSpotColor: 'rgba(24,147,126,.2)'
            });
        }
        lastmousetime = timenow;
        setTimeout(mdraw, mrefreshinterval);
    }
    // We could use setInterval instead, but I prefer to do it this way
    setTimeout(mdraw, mrefreshinterval);
}

function line(){
    var chartColors = [colors.primary, colors.success];
    $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
        type: 'line',
        width: "100%",
        height: '165',
        chartRangeMax: 50,
        lineColor: chartColors[0],
        fillColor: hexToRGB(chartColors[0], 0.3),
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
        maxSpotColor: false,
        minSpotColor: false,
        spotColor: false,
        lineWidth: 1
    });

    $('#sparkline1').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
        type: 'line',
        width: "100%",
        height: '165',
        chartRangeMax: 40,
        lineColor: chartColors[1],
        fillColor: hexToRGB(chartColors[1], 0.3),
        composite: true,
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
        maxSpotColor: false,
        minSpotColor: false,
        spotColor: false,
        lineWidth: 1
    });
}

function bar(){
    var chartColors = [colors.primary];
    $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
        type: 'bar',
        height: '165',
        barWidth: '10',
        barSpacing: '3',
        barColor: chartColors
    });
}

function pie(){
    var chartColors = [colors.info, colors.warning, colors.gray400, colors.danger];
    $('#sparkline3').sparkline([20, 40, 30, 10], {
        type: 'pie',
        width: '165',
        height: '165',
        sliceColors: chartColors
    });
}

function combine(){
    var chartColors = [colors.primary, colors.danger];
    $('#sparkline4').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
        type: 'line',
        width: "100%",
        height: '165',
        chartRangeMax: 50,
        lineColor: chartColors[0],
        fillColor: 'transparent',
        lineWidth: 2,
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)',
        maxSpotColor: false,
        minSpotColor: false,
        spotColor: false
    });
    $('#sparkline4').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
        type: 'line',
        width: "100%",
        height: '165',
        chartRangeMax: 40,
        lineColor: chartColors[1],
        fillColor: 'transparent',
        composite: true,
        lineWidth: 2,
        maxSpotColor: false,
        minSpotColor: false,
        spotColor: false,
        highlightLineColor: 'rgba(0,0,0,1)',
        highlightSpotColor: 'rgba(0,0,0,1)'
    });
}

function composite(){
    
    var chartColors = [colors.gray400, colors.gray700];
    $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
        type: 'line',
        width: "100%",
        height: '165',
        lineColor: chartColors[0],
        lineWidth: 2,
        fillColor: 'rgba(227,234,239,0.3)',
        highlightLineColor: 'rgba(0,0,0,.1)',
        highlightSpotColor: 'rgba(0,0,0,.2)'
    });
    $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
        type: 'bar',
        height: '165',
        barWidth: '10',
        barSpacing: '5',
        composite: true,
        barColor: chartColors[1]
    });
}

function discrete(){
    var chartColors = [colors.primary];
    $("#sparkline7").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
        type: 'discrete',
        width: '280',
        height: '165',
        lineColor: chartColors
    });
}

function bullet(){
    var chartColors = [colors.primary, colors.success];
    $('#sparkline8').sparkline([10, 12, 12, 9, 7], {
        type: 'bullet',
        width: '280',
        height: '80',
        targetColor: chartColors[0],
        performanceColor: chartColors[1]
    });
}

function boxplot(){
    var chartColors = [colors.primary, colors.success];
    $('#sparkline9').sparkline([4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100], {
        type: 'box',
        width: '280',
        height: '80',
        boxLineColor: chartColors[0],
        boxFillColor: 'transparent',
        whiskerColor: chartColors[1],
        medianColor: chartColors[1],
        targetColor: chartColors[1]
    });
}

function tristate(){
    var chartColors = [colors.primary, colors.gray400, colors.danger];
    $('#sparkline10').sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        height: '80',
        width: '100%',
        type: 'tristate',
        posBarColor: chartColors[0],
        negBarColor: chartColors[1],
        zeroBarColor: chartColors[2],
        barWidth: 8,
        barSpacing: 3,
        zeroAxis: false
    });
}

function drawSparkline() {
    // Line Chart
    line();

    // Bar Chart
    bar()

    // Pie Chart
    pie();

    // Combine Line Chart
    combine()

    // Composite bar Chart
    composite()

    // Discrete Chart
    discrete()

    // Bullet Chart
    bullet()

    // Box Plot Chart
    boxplot();

    // Tristate Charts
    tristate();
}

/* utility function */

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