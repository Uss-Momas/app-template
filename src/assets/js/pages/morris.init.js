(function($){
    //Create stacked graph
    createStacked();
    //Create area graph
    createArea();
    //Create line graph
    createLine();
    //Create bar graph
    createBar();
    //Create area dotted graph
    createAreaDotted();
    //Create donut graph
    createDonut()
}(jQuery));

function createStacked(){
    //creating Stacked chart
    var $stckedData  = [
        { y: '2007', a: 45, b: 180, c: 100 },
        { y: '2008', a: 75,  b: 65, c: 80 },
        { y: '2009', a: 100, b: 90, c: 56 },
        { y: '2010', a: 75,  b: 65, c: 89 },
        { y: '2011', a: 100, b: 90, c: 120 },
        { y: '2012', a: 75,  b: 65, c: 110 },
        { y: '2013', a: 50,  b: 40, c: 85 },
        { y: '2014', a: 75,  b: 65, c: 52 },
        { y: '2015', a: 50,  b: 40, c: 77 },
        { y: '2016', a: 75,  b: 65, c: 90 },
        { y: '2017', a: 100, b: 90, c: 130 },
        { y: '2018', a: 80, b: 65, c: 95 }
    ];
    var chartColors = [colors.primary, colors.success, colors.gray];
    createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b', 'c'], ["Bitcoin", "Ethereum", "Litecoin"], chartColors);
}
function createStackedChart(element, data, xkey, ykeys, labels, lineColors) {
    Morris.Bar({
        element: element,
        data: data,
        xkey: xkey,
        ykeys: ykeys,
        stacked: true,
        labels: labels,
        hideHover: 'auto',
        dataLabels: false,
        resize: true, //defaulted to true
        gridLineColor: 'rgba(65, 80, 95, 0.07)',
        barColors: lineColors
    });
}

function createArea(){
    var $areaData = [
        { y: '2012', a: 10, b: 20 },
        { y: '2013', a: 75,  b: 65 },
        { y: '2014', a: 50,  b: 40 },
        { y: '2015', a: 75,  b: 65 },
        { y: '2016', a: 50,  b: 40 },
        { y: '2017', a: 75,  b: 65 },
        { y: '2018', a: 90, b: 60 }
    ];
    var chartColors = [colors.primary, colors.gray];
    createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b'], ["Bitcoin", "Ethereum"],['1'], chartColors);
}
function createAreaChart(element, pointSize, lineWidth, data, xkey, ykeys, labels, opacity,lineColors) {
    Morris.Area({
        element: element,
        pointSize: pointSize,
        lineWidth: lineWidth,
        data: data,
        xkey: xkey,
        dataLabels: false,
        ykeys: ykeys,
        labels: labels,
        fillOpacity: opacity,
        hideHover: 'auto',
        resize: true,
        gridLineColor: 'rgba(65, 80, 95, 0.07)',
        lineColors: lineColors
    });
}

function createLine(){
    
    var $data  = [
        { y: '2010', a: 50, b: 0 },
        { y: '2011', a: 75, b: 50 },
        { y: '2012', a: 30, b: 80 },
        { y: '2013', a: 50, b: 50 },
        { y: '2014', a: 75, b: 10 },
        { y: '2015', a: 50, b: 40 },
        { y: '2016', a: 75, b: 50 },
        { y: '2017', a: 100, b: 70 }
    ];
    var chartColors = [colors.primary, colors.success];
    this.createLineChart('morris-line-example', $data, 'y', ['a', 'b'], ["Bitcoin", "Ethereum"],['0.1'],['#ffffff'],['#999999'], chartColors);
}
function createLineChart(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
    Morris.Line({
      element: element,
      data: data,
      dataLabels: false,
      xkey: xkey,
      ykeys: ykeys,
      labels: labels,
      fillOpacity: opacity,
      pointFillColors: Pfillcolor,
      pointStrokeColors: Pstockcolor,
      behaveLikeLine: true,
      gridLineColor: 'rgba(65, 80, 95, 0.07)',
      hideHover: 'auto',
      lineWidth: '3px',
      pointSize: 0,
      preUnits: '$',
      resize: true, //defaulted to true
      lineColors: lineColors
    });
}

function createBar(){
    var $barData  = [
        { y: '2012', a: 100, b: 90 , c: 40 },
        { y: '2013', a: 75,  b: 65 , c: 20 },
        { y: '2014', a: 50,  b: 40 , c: 50 },
        { y: '2015', a: 75,  b: 65 , c: 95 },
        { y: '2016', a: 50,  b: 40 , c: 22 },
        { y: '2017', a: 75,  b: 65 , c: 56 },
        { y: '2018', a: 100, b: 90 , c: 60 }
    ];
    var chartColors = [colors.success, colors.info, colors.warning];
    createBarChart('morris-bar-example', $barData, 'y', ['a', 'b', 'c'], ["Bitcoin", "Ethereum", "Litecoin"], chartColors);
}
function createBarChart(element, data, xkey, ykeys, labels, lineColors) {
    Morris.Bar({
        element: element,
        data: data,
        dataLabels: false,
        xkey: xkey,
        ykeys: ykeys,
        labels: labels,
        hideHover: 'auto',
        resize: true, //defaulted to true
        gridLineColor: 'rgba(65, 80, 95, 0.07)',
        barSizeRatio: 0.4,
        xLabelAngle: 35,
        barColors: lineColors
    });
}

function createAreaDotted(){
    var $areaDotData = [
        { y: '2012', a: 10, b: 20 },
        { y: '2013', a: 75,  b: 65 },
        { y: '2014', a: 50,  b: 40 },
        { y: '2015', a: 75,  b: 65 },
        { y: '2016', a: 50,  b: 40 },
        { y: '2017', a: 75,  b: 65 },
        { y: '2018', a: 90, b: 60 }
    ];
    var chartColors = [colors.info, colors.gray400];
    createAreaChartDotted('morris-area-with-dotted', 0, 0, $areaDotData, 'y', ['a', 'b'], ["Bitcoin","Litecoin"],['#ffffff'],['#999999'], chartColors);

}
function createAreaChartDotted(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
    Morris.Area({
        element: element,
        pointSize: 3,
        lineWidth: 1,
        data: data,
        dataLabels: false,
        xkey: xkey,
        ykeys: ykeys,
        labels: labels,
        hideHover: 'auto',
        pointFillColors: Pfillcolor,
        pointStrokeColors: Pstockcolor,
        resize: true,
        smooth: false,
        behaveLikeLine: true,
        fillOpacity: 0.4,
        gridLineColor: 'rgba(65, 80, 95, 0.07)',
        lineColors: lineColors
    });
}

function createDonut(){
    var $donutData = [
        {label: "Ethereum", value: 12},
        {label: "Bitcoin", value: 30},
        {label: "Litecoin", value: 20}
    ];
    var chartColors = [colors.primary, colors.danger, colors.gray];
    this.createDonutChart('morris-donut-example', $donutData, chartColors);
}
function createDonutChart(element, data, colors) {
    Morris.Donut({
        element: element,
        data: data,
        barSize: 0.2,
        resize: true, //defaulted to true
        colors: colors,
        backgroundColor: 'transparent'
    });
}