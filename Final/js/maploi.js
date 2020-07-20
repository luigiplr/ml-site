function initialize() {

  var center = new google.maps.LatLng(18.7567705,98.9834041); // center your map here!!!

  var mapOptions = {
    zoom: 10,   // <-- change the zoom factor here, from 10 to 19, try it!!!
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(18.771752,98.9564772),
      map: map,
      title: 'Chiang Mei'  // <-- change the title here!!!!
  });


}

google.maps.event.addDomListener(window, 'load', initialize);

