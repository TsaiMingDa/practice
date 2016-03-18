
		var map;
		var locat = new google.maps.LatLng(43.054226, 141.307788);
		var map2;
		var locat2 = new google.maps.LatLng(23.504207, 120.801288);
		var map3;
		var locat3 = new google.maps.LatLng(43.339261, 142.778416);
	
		function mapInit(){
			var mapOptions = {
				center:locat,
				zoom:14,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			var mapOptions2 = {
				center:locat2,
				zoom:10,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			var mapOptions3 = {
				center:locat3,
				zoom:5,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			
			map = new google.maps.Map(document.getElementById("map"),mapOptions);
			map2 = new google.maps.Map(document.getElementById("map2"),mapOptions2);
			map3 = new google.maps.Map(document.getElementById("map3"),mapOptions3);
			
			var marker = new google.maps.Marker({
            position: locat,
			map:map,
          });
			var marker2 = new google.maps.Marker({
            position: locat2,
			map:map2,
          });
			var marker3 = new google.maps.Marker({
            position: locat3,
			map:map3,
          });
		 	  
		  marker.setMap(map);
		  marker2.setMap(map2);
		  marker3.setMap(map3);
		}
	google.maps.event.addDomListener(window, 'load', mapInit);
	
	$('#myModal').on('shown.bs.modal', function () {
          google.maps.event.trigger(map, "resize");
          map.setCenter(locat);
      });
	$('#myModal2').on('shown.bs.modal', function () {
          google.maps.event.trigger(map2, "resize");
          map2.setCenter(locat2);
      });
	$('#myModal3').on('shown.bs.modal', function () {
          google.maps.event.trigger(map3, "resize");
          map3.setCenter(locat3);
      });
	  
	  // Add smooth scrolling 
$(document).ready(function(){
  
  $("a").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  //(selector).animate({styles},speed,easing,callback)
  $('html, body').animate({scrollTop: $(hash).offset().top}, 900, function(){
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
  
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').fadeOut("fast");
        }
    });
});
