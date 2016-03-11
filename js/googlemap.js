
		var map;
		var locat = new google.maps.LatLng(45.430817,12.331516);
		var map2;
		var locat2 = new google.maps.LatLng(25.046566, 121.515956);
		var map3;
		var locat3 = new google.maps.LatLng(45.430817,10.331516);
	
		function mapInit(){
			var mapOptions = {
				center:locat,
				zoom:14,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			var mapOptions2 = {
				center:locat2,
				zoom:14,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			var mapOptions3 = {
				center:locat3,
				zoom:14,
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
