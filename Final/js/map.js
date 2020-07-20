function initialize() {

  var center = new google.maps.LatLng(21.1311083,82.7792231); https://www.google.ca/maps/place/India/@21.1311083,82.7792231,4z/data=!3m1!4b1!4m2!3m1!1s0x30635ff06b92b791:0xd78c4fa1854213a6// center your map here!!!

  var mapOptions = {
    zoom: 17,   // <-- change the zoom factor here, from 10 to 19, try it!!!
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // we will create two markers
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(48.462704, -123.313741),
      map: map,
      title: 'MacLauren Building'  // <-- change the title here!!!!
  });

  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(48.461957, -123.309052),
      map: map,
      title: 'Bob Wright Center'  // <-- change the title here!!!!
  });
  
var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(48.463905, -123.306506),
      map: map,
      title: 'Cadboro Commons Bldg'  // <-- change the title here!!!!
  });

  // we will make these markers "clickable", i.e., when you click it, it
  // will visit the corresponding website.
  google.maps.event.addListener(marker1, "click", function() {
         window.location = "http://www.uvic.ca/home/about/campus-info/maps/maps/mac.php";}); 

  google.maps.event.addListener(marker2, "click", function() {
         window.location = "http://www.uvic.ca/home/about/campus-info/maps/maps/sci.php";});
  
  google.maps.event.addListener(marker3, "click", function() {
         window.location = "http://www.uvic.ca/home/about/campus-info/maps/maps/com.php";});

}

google.maps.event.addDomListener(window, 'load', initialize);

