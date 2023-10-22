$(function () {
	/**
	 * ----------------------------------------------
	 * Vector Map fn call
	 * ----------------------------------------------
	*/
	vectorMapInit('#vmap');
}(jQuery));
/**
 * ----------------------------------------------
 * Vector Map fn
 * ----------------------------------------------
*/
function vectorMapInit(id) {
	if ($(document).find(id).length > 0) {
		$(document).find(id).vectorMap({
			map: 'world_mill',
			backgroundColor: '#fff',
			borderColor: '#fff',
			borderOpacity: 0.25,
			borderWidth: 0,
			regionStyle: {
				initial: {
					"fill": colors.gridColor,
				},
			},

			markerStyle: {
				initial: {
					r: 3,
					'fill': colors.danger,
					'fill-opacity': 1,
					'stroke': colors.danger,
					'stroke-width': 0,
				},
				hover: {
				   "stroke": colors.danger,
				   "stroke-width": 5,
				   "cursor": "pointer",
				   "stroke-opacity": 0.6
				},
			},

			markers: [{
				latLng: [21.00, 78.00],
				name: 'INDIA : 350',
			}, {
				latLng: [-33.00, 151.00],
				name: 'Australia : 250',
			}, {
				latLng: [36.77, -119.41],
				name: 'USA : 250',
			}, {
				latLng: [55.37, -3.41],
				name: 'UK   : 250',
			}, {
				latLng: [25.20, 55.27],
				name: 'UAE : 250',
			}],
			series: {
				regions: [{
					values: {
						'US': 298,
						'SA': 200,
						'AU': 760,
						'IN': 200,
						'GB': 120,
					},
					scale: [colors.primary],
					normalizeFunction: 'polynomial',
				}],
			},
			hoverOpacity: null,
			normalizeFunction: 'linear',
			zoomOnScroll: true,
			selectedRegions: [],
			enableZoom: true,
			hoverColor: false,
			hoverOpacity: 0.7,
		});
	}
};