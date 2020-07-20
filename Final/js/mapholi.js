function initialize() {

  var center = new google.maps.LatLng(28.1440076,77.3245524); // center your map here!!!

  var mapOptions = {
    zoom: 8,   // <-- change the zoom factor here, from 10 to 19, try it!!!
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(27.499245, 77.684908),
      map: map,
      title: 'Mathura (Holi Gate)'  // <-- change the title here!!!!
  });

  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(27.5648154,77.6593709),
      map: map,
      title: 'Vrindavan'  // <-- change the title here!!!!
  });
  
var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(28.6469655,77.0932634),
      map: map,
      title: 'Dehli'  // <-- change the title here!!!!
  });



}

google.maps.event.addDomListener(window, 'load', initialize);

