$(function() {

	 $(".s-filter-nav button").click(function() {
        $('button.mixitup-control-active').removeClass('mixitup-control-active')
        $(this).addClass('mixitup-control-active')
    });

	$('.goods-images__main').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  vertical: true,
		  verticalSwiping: true,
		  rows: false,
		  asNavFor: '.goods-images__preview'
		});
		$('.goods-images__preview').slick({
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  asNavFor: '.goods-images__main',
			  // centerMode: true,
			  focusOnSelect: true,
			  arrows: false,
			  rows: false,
		});

	$('.main-sidebar-goods a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});

	$('.main-sidebar-goods a').click(function(){

		$('.main-sidebar-goods a.active').removeClass('active');
		$(this).addClass('active');

	});

	if($('.filter-content__wrap--first .filter-content__row').length > 10) {

		$('.filter-content__wrap--first').next().fadeIn();
	}

	if($('.filter-content__wrap--second .filter-content__row').length > 10) {

		$('.filter-content__wrap--second').next().fadeIn();
	}

	$(".filter-content__wrap .filter-content__row").slice(0, 10).show();
    $(".filter-more--first").on('click', function (e) {
        e.preventDefault();
        $(".filter-content__wrap .filter-content__row:hidden").slice(0, 10).fadeIn();
        if ($(".filter-content__wrap .filter-content__row:hidden").length == 0) {
            $(".filter-more--first").hide();
        }
       
    });

    $(".filter-content__wrap--second .filter-content__row").slice(0, 10).show();
    $(".filter-more--second").on('click', function (e) {
        e.preventDefault();
        $(".filter-content__wrap--second .filter-content__row:hidden").slice(0, 10).fadeIn();
        if ($(".filter-content__wrap--second .filter-content__row:hidden").length == 0) {
            $(".filter-more--second").fadeOut('slow');
        }
       
    });

	$(".tab_item").not(":first").hide();
	$(".wrappers .tab").click(function() {
		$(".wrappers .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

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

	$('.selectize4').selectize({
	    placeholder: 'Сортировать: по цене',
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

	$('.lk-slide').slick({
		rows: false,
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: true,
  		responsive: [
		    {
		      breakpoint: 991,
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

	$('.interest-slider').slick({
		rows: false,
		slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: true,
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
		      }
		    },
		    {
		      breakpoint: 1025,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		  ]
	})

	$('.drop-slider').slick({
		rows: false,
		slidesToShow: 5,
  		slidesToScroll: 1,
  		dots: true,
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
		        slidesToShow: 5,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 1025,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        variableWidth: true
		      }
		    },
		    {
		      breakpoint: 479,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        variableWidth: true
		      }
		    },
		    {
		      breakpoint: 374,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    },
		  ]
	})

	// $('.drop-slider .slick-dots').wrapAll('<div class="slick-dots__wrap"></div>')

	// $('.drop-slider .slick-dots__wrap').append('<img class="next" src="img/arrow.svg">');
	// $('.drop-slider .slick-dots__wrap').prepend('<img class="prev" src="img/arrow.svg">');

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
   		 menu: '.main-sidebar__list',
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
