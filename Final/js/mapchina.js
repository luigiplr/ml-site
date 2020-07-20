function initialize() {

  var center = new google.maps.LatLng(45.777663,126.622841); // center your map here!!!

  var mapOptions = {
    zoom: 15,   // <-- change the zoom factor here, from 10 to 19, try it!!!
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(45.777663,126.622841),
      map: map,
      title: 'Ice City of Harbin'  // <-- change the title here!!!!
  });


}

google.maps.event.addDomListener(window, 'load', initialize);

