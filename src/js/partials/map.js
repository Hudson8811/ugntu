


window.addEventListener('load', () => {
	(() => {
		"use strict";

		const hackSetter = (value) => () => {
			window.name = value;
			history.go(0)
		};

		/*const startBtn = document.querySelector('.start-hack');
		const stopBtn = document.querySelector('.stop-hack');

		startBtn.addEventListener('click', hackSetter(), false);
		stopBtn.addEventListener('click', hackSetter('nothacked'), false);

		if (name === 'nothacked') {
		  stopBtn.disabled = true;
		  return;
		}

		startBtn.disabled = true;
	  */
		// Store old reference
		const appendChild = Element.prototype.appendChild;

		// All services to catch
		const urlCatchers = [
			"/AuthenticationService.Authenticate?",
			"/QuotaService.RecordEvent?"
		];

		// Google Map is using JSONP.
		// So we only need to detect the services removing access and disabling them by not
		// inserting them inside the DOM
		Element.prototype.appendChild = function (element) {
			const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
			const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

			if (!isGMapAccessScript) {
				return appendChild.call(this, element);
			}

			// Extract the callback to call it with success data
			// (actually this part is not needed at all but maybe in the future ?)
			//const callback = element.src.split(/.*callback=([^\&]+)/, 2).pop();
			//const [a, b] = callback.split('.');
			//window[a][b]([1, null, 0, null, null, [1]]);

			// Returns the element to be compliant with the appendChild API
			return element;
		};
	})();



	let map;

	function initMap() {
		const options = {
			center: {lat: 54.818543, lng: 56.067408},
			zoom: 14.5,
			disableDefaultUI: true,
			styles: [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#293c6a"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#8a92a7"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#273a69"
						}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#8a92a7"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#293c6a"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#8a92a7"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#273a69"
						}
					]
				},
				{
					"featureType": "landscape.natural",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#293c6a"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#293c6a"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						},
						{
							"color": "#8a92a7"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#3e4f79"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#ff0000"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#8a92a7"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#273a69"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#293c6a"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#293c6a"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#3e4f79"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#3e4f79"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#293c6a"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#293c6a"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#203464"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				}
			]
		};

		const mapEl = document.getElementById('map');

		map = new google.maps.Map(mapEl, options);

		const marker = new markerWithLabel.MarkerWithLabel({
			position: new google.maps.LatLng(54.818543, 56.058408),
			map: map,
			icon: {
				url: './images/marker.png',
				scaledSize: new google.maps.Size(30, 30)
			},
			labelContent: 'ул. Космонавтов 1, <br> г. Уфа, Республика Башкортостан, <br> Россия, 450064',
			labelClass: 'marker-label',
			labelAnchor: new google.maps.Point(30, -28)
		});
	}

	initMap();
});