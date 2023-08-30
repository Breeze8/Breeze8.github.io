$(function() {

   
      var map;
      var InforObj = [];

      var centerCords = {
         lat: 51.3123199,
         lng: 37.8126152
      };

      var markersOnMap = [
         {
            placeName: "Москва",
            address: "г. Москва, м. Октябрьское поле, ул. Маршала Бирюзова, 1. к.3, офис 20",
            LatLng: [
               {
                  lat: 55.789667,
                  lng: 37.499040
               }
            ]
         },
         {
            placeName: "Киев",
            address: "г. Киев, ул. Рыбальская 11/11, офис 33",
            LatLng: [
               {
                  lat: 50.433874,
                  lng: 30.541995
               }
            ]
         },
         {
            placeName: "Астрахань",
            address: "г. Астрахань, ул. Савушкина 6Д, подъезд 1, 11 этаж, офис 49",
            LatLng: [
               {
                  lat: 46.374748,
                  lng: 48.048455
               }
            ]
         }
      ];

      window.onload = function () {
         initMap();
      };

      function addMarker() {
         var image = {
            url:
               "img/pin.svg",
         };

         for (var i = 0; i < markersOnMap.length; i++) {

            // var contentString =
            //    '<div id="content"><h6>' +
            //    markersOnMap[i].placeName +
            //    "</h6><p>" +
            //    markersOnMap[i].address +
            //    "</p>";

            var contentString =
               '<div id="content">' + markersOnMap[i].address;

            /* B. generate markers position and label */
            const marker = new google.maps.Marker({
               position: markersOnMap[i].LatLng[0],
               map: map,

               icon: image
            });

            const infowindow = new google.maps.InfoWindow({
               content: contentString
            });

            marker.addListener("click", function () {
               closeOtherInfo();
               infowindow.open(marker.get("map"), marker);
               InforObj[0] = infowindow;
            });

            google.maps.event.addListener(map, "click", function (event) {
               infowindow.close();
            });
         }/* end marker loop */
      }

      function closeOtherInfo() {
         if (InforObj.length > 0) {
            /* detach the info-window from the marker ... undocumented in the API docs */
            InforObj[0].set("marker", null);
            /* and close it */
            InforObj[0].close();
            /* blank the array */
            InforObj.length = 0;
         }
      }

      function initMap() {
         var mapOptions = {
            zoom: 5,
            //scrollwheel: false,
            gestureHandling: 'cooperative',
            //disableDefaultUI: false, // a way to quickly hide all controls
            center: centerCords,
            styles: [{
               "stylers": [{ "hue": "#ff1a00" }, { "invert_lightness": true }, { "saturation": -100 }, { "lightness": 33 }, { "gamma": 0.5 }]
            }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "lightness": -60 }] }]
         };


         map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

         addMarker();
      }

   

})