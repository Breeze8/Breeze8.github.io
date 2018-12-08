$(function() {

 	$('#fullpage').fullpage({
		sectionsColor: [],
		anchors:['firstPage','secondPage', 'thirdPage'],
		// navigation: true,
   		 menu: '.main-sidebar__list'
	});

 	if($('.s-filter-nav button').hasClass("mixitup-control-active")) {
 		$('.s-filter-container').addClass("active");
 	}

});
