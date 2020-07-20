function initialize() {

  var center = new google.maps.LatLng(46.069446,11.122578); // center your map here!!!

  var mapOptions = {
    zoom: 15,   // <-- change the zoom factor here, from 10 to 19, try it!!!
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(46.069446,11.122578),
      map: map,
      title: 'Gran Ballo delle Maschere'  // <-- change the title here!!!!
  });


}

google.maps.event.addDomListener(window, 'load', initialize);

