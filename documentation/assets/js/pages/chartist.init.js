var chart=new Chartist.Line("#smil-animations",{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,9,7,8,5,4,6,2,3,3,4,6],[4,5,3,7,3,5,5,3,4,4,5,5],[5,3,4,5,6,3,3,4,5,6,3,4],[3,4,5,6,7,6,4,5,6,7,6,3]]},{low:0,plugins:[Chartist.plugins.tooltip()]}),seq=0,delays=80,durations=500;chart.on("created",function(){seq=0}),chart.on("draw",function(e){if(seq++,"line"===e.type)e.element.animate({opacity:{begin:seq*delays+1e3,dur:durations,from:0,to:1}});else if("label"===e.type&&"x"===e.axis)e.element.animate({y:{begin:seq*delays,dur:durations,from:e.y+100,to:e.y,easing:"easeOutQuart"}});else if("label"===e.type&&"y"===e.axis)e.element.animate({x:{begin:seq*delays,dur:durations,from:e.x-100,to:e.x,easing:"easeOutQuart"}});else if("point"===e.type)e.element.animate({x1:{begin:seq*delays,dur:durations,from:e.x-10,to:e.x,easing:"easeOutQuart"},x2:{begin:seq*delays,dur:durations,from:e.x-10,to:e.x,easing:"easeOutQuart"},opacity:{begin:seq*delays,dur:durations,from:0,to:1,easing:"easeOutQuart"}});else if("grid"===e.type){var a={begin:seq*delays,dur:durations,from:e[e.axis.units.pos+"1"]-30,to:e[e.axis.units.pos+"1"],easing:"easeOutQuart"},t={begin:seq*delays,dur:durations,from:e[e.axis.units.pos+"2"]-100,to:e[e.axis.units.pos+"2"],easing:"easeOutQuart"},i={};i[e.axis.units.pos+"1"]=a,i[e.axis.units.pos+"2"]=t,i.opacity={begin:seq*delays,dur:durations,from:0,to:1,easing:"easeOutQuart"},e.element.animate(i)}}),chart.on("created",function(){window.__exampleAnimateTimeout&&(clearTimeout(window.__exampleAnimateTimeout),window.__exampleAnimateTimeout=null),window.__exampleAnimateTimeout=setTimeout(chart.update.bind(chart),12e3)});