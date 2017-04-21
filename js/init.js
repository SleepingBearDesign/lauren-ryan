$(document).ready(function() {	
	$('#photo-gallery ul').innerfade({
		animationtype: 'fade',
		speed: 1000,
		timeout: 7000,
		containerheight: '600px'
	});
});

function initMap() {
    var customMapType = new google.maps.StyledMapType([
        {
          stylers: [
            {saturation: '-100'},
            {visibility: 'simplified'},
            {weight: 0.5}
          ]
        },
        {
          elementType: 'labels',
          stylers: [{visibility: 'on'}]
        }
      ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: 42.961408, lng: -85.6700113},
      scrollwheel:  false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
      }
    });
    
    var heartIcon = {
        path: 'M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z',
        fillColor: '#43ABBF',
        fillOpacity: 0.8,
        scale: .015,
        strokeColor: '#0488A1',
        strokeWeight: 1
      };
    
    var cutleryIcon = {
        path: 'M832 64v640q0 61-35.5 111t-92.5 70v779q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-779q-57-20-92.5-70t-35.5-111v-640q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45v416q0 26 19 45t45 19 45-19 19-45v-416q0-26 19-45t45-19 45 19 19 45zm768 0v1600q0 52-38 90t-90 38h-128q-52 0-90-38t-38-90v-512h-224q-13 0-22.5-9.5t-9.5-22.5v-800q0-132 94-226t226-94h256q26 0 45 19t19 45z',
        fillColor: '#43ABBF',
        fillOpacity: 0.8,
        scale: .015,
        strokeColor: '#0488A1',
        strokeWeight: 1
      };
    
    // var churchContentString = '<div id="content">'+
    //   '<div id="siteNotice">'+
    //   '</div>'+
    //   '<h4>Cook-Dewitt Center at Grand Valley State University</h4>'+
    //   '<div id="bodyContent">'+
    //   '<p>The lovely couple will be married at Cook-Dewitt Center at 3:30pm.</p>'+
    //   '<a target="_blank" href="https://goo.gl/maps/AocZ1NjKev12">'+
    //   'Directions</a> '+
    //   '</div>'+
    //   '</div>';

    //   var churchInfoWindow = new google.maps.InfoWindow({
    //     content: churchContentString
    //   });
    //   var churchPosition = {lat: 42.9637676, lng: -85.8892679};

    //   var churchMarker = new google.maps.Marker({
    //     position: churchPosition,
    //     map: map,
    //     title: 'Cook-Dewitt Center'
    //   });
      // churchMarker.addListener('click', function() {
      //   churchInfoWindow.open(map, churchMarker);
      // });
    
    var barContentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4>The Loft @ Luna</h4>'+
      '<div id="bodyContent">'+
      '<p>Dinner and Reception will be served at The Loft @ Luna which is located at 64 Ionia Ave SW, Grand Rapids, MI.</p>'+
      '<a target="_blank" href="https://goo.gl/maps/RUBVytrtAe62">'+
      'Directions</a> '+
      '</div>'+
      '</div>';

      var barInfoWindow = new google.maps.InfoWindow({
        content: barContentString
      });
      var barPosition = {lat: 42.961408, lng: -85.6700113};

      var barMarker = new google.maps.Marker({
        position: barPosition,
        map: map,
        title: 'The Loft @ Luna'
      });
      barMarker.addListener('click', function() {
        barInfoWindow.open(map, barMarker);
      });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}
