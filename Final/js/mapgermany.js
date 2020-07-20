function initialize() {

  var center = new google.maps.LatLng(48.132172,11.548103); // center your map here!!!

  var mapOptions = {
    zoom: 15,   // <-- change the zoom factor here, from 10 to 19, try it!!!
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(48.132172,11.548103),
      map: map,
      title: 'Schottenhamel Tent'  // <-- change the title here!!!!
  });


}

google.maps.event.addDomListener(window, 'load', initialize);

