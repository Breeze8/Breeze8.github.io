$(function() {

	$(".search input").focus(function(){
        $('.search-mobile').css("visibility", "hidden");
    });
    $(".search input").blur(function(){
        $('.search-mobile').css("visibility", "visible");
    });

	$( ".search-mobile" ).click(function() {
	  $('.search').toggleClass('open');
	});


    $('.review-block .review-item .btn--main').click(function(j) {
        var dropDown = $(this).closest('.review-item').find('.review-hidden');

        $(this).closest('.review-block').find('.review-hidden').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.review-block').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

	$('.selectize').selectize({
	    placeholder: 'Август',
	  });

	$('.selectize2').selectize({
	    placeholder: '2018',
	  });

	$('.selectize3').selectize({
	    placeholder: 'US  9',
	  });

	$('.toggler').click(function(){
		$('.dropdown').toggleClass('active')
	})

	$('.header-menu svg').click(function(){
		$('.menu').addClass('open');
		$('body').addClass('body-hidden')
	})

	$('.menu-close').click(function(){
		$('.menu').removeClass('open');
		$('body').removeClass('body-hidden')
	})

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
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 479,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		  ]
	})

	$('.drop-slider .slick-dots').wrap('<div class="slick-dots__wrap"</div>')

	$('.drop-slider .slick-dots__wrap').append('<img class="next" src="img/arrow.svg">');
	$('.drop-slider .slick-dots__wrap').prepend('<img class="prev" src="img/arrow.svg">');

	$('.prev').click(function(){
	  $('.drop-slider').slick('slickPrev');
	})

	$('.next').click(function(){
	  $('.drop-slider').slick('slickNext');
	})

 	$('#fullpage').fullpage({
		sectionsColor: [],
		responsiveWidth: 1010,
		anchors:['firstPage','secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
		// navigation: true,
   		 menu: '.main-sidebar__list'
	});

 	if($('.s-filter-nav button').hasClass("mixitup-control-active")) {
 		$('.s-filter-container').addClass("active");
 	}

 	document.querySelector("html").classList.add('js');

	var fileInput  = document.querySelector( ".input-file" ),  
	    button     = document.querySelector( ".input-file-trigger" ),
	    the_return = document.querySelector(".file-return");
	      
	button.addEventListener( "keydown", function( event ) {  
	    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
	        fileInput.focus();  
	    }  
	});
	button.addEventListener( "click", function( event ) {
	   fileInput.focus();
	   return false;
	});  
	fileInput.addEventListener( "change", function( event ) {  
	    the_return.innerHTML = this.value;  
	});  
 	

});
