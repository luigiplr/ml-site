function initialize() {

  var center = new google.maps.LatLng(29.960267,-90.09293); // center your map here!!!

  var mapOptions = {
    zoom: 13,   // <-- change the zoom factor here, from 10 to 19, try it!!!
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(29.957603,-90.0644031),
      map: map,
      title: 'French Quarter'  // <-- change the title here!!!!
  });

  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(29.944581,-90.116995),
      map: map,
      title: 'Uptown'  // <-- change the title here!!!!
  });
  
var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(29.9706375,-90.0990281),
      map: map,
      title: 'Mid-City'  // <-- change the title here!!!!
  });



}

google.maps.event.addDomListener(window, 'load', initialize);

