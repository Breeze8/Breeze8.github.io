$(window).on('load', function () {

	  var $grid = $('#masonry-grid').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
	    itemSelector: '.grid-item',
	  	// percentPosition: true,
	  	columnWidth: 10,
	  	// singleMode: false,
 		horizontalOrder: true
	  });
	  $('.lazy').Lazy({
	  	effect: 'fadeIn',
        effectTime: 2000,
        threshold: 0
	  });
	});

	$("#grid-filter li").click(function() {
	    var group = $(this).data('category');
		var group_class = "." + group;
		$('li.btn-gradient').removeClass('btn-gradient')
        $(this).addClass('btn-gradient')
	    if(group == "*"){
	        $(".grid-item").show();
		    $('#masonry-grid').masonry('layout');
	       }
	    else if(group != "") {
			$(".grid-item").hide();
			$(group_class).show();
			$('#masonry-grid').masonry('layout');
		} else {
			$(".grid-item").show();
			$('#masonry-grid').masonry('layout');
		}
	});

});
