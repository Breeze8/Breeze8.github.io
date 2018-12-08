$(function() {

	$('.drop-slider').slick({
		rows: false,
		slidesToShow: 4,
  		slidesToScroll: 1,
  		dots: true,
 		nextArrow: $('.next'),
 		prevArrow: $('.prev'),
  		responsive: [
		    {
		      breakpoint: 1921,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1441,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1025,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		  ]
	})

	$('.drop-slider .slick-dots').wrap('<div class="slick-dots__wrap"</div>')

	$('.drop-slider .slick-dots__wrap').append('<img class="next" src="../img/arrow.svg">');
	$('.drop-slider .slick-dots__wrap').prepend('<img class="prev" src="../img/arrow.svg">');

	$('.prev').click(function(){
	  $('.drop-slider').slick('slickPrev');
	})

	$('.next').click(function(){
	  $('.drop-slider').slick('slickNext');
	})

 	$('#fullpage').fullpage({
		sectionsColor: [],
		responsiveWidth: 1010,
		anchors:['firstPage','secondPage', 'thirdPage', 'fourthPage'],
		// navigation: true,
   		 menu: '.main-sidebar__list'
	});

 	if($('.s-filter-nav button').hasClass("mixitup-control-active")) {
 		$('.s-filter-container').addClass("active");
 	}

});
