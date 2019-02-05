$(function() {

	// PREVENT SCROLL ON MAP

	 $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#canvas1').on('click', function () {
            $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map_canvas1").mouseleave(function () {
            $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });

	// ACCRODION

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.drop');

        $(this).closest('.accordion').find('.drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // TABS

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	const visible = $('.new-count').length;
	const count = visible - 9;
	$('#loadMore span').text(count);

	$(".new-count").slice(0, 9).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".new-count:hidden").slice(0, 9).fadeIn();
        if ($(".new-count:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });

    // VIEWPORT CHECKER

	$('.ready').viewportChecker({
        classToAdd: 'visible',
        // offset: '300',
     });

	// SLICK SLIDER

	$('.view-slider').slick({
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  rows: false,
	});

	if($(window).width() <= 992) {
          
		$('.team-block').slick({
		  speed: 300,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  rows: false,
		  arrows: false,
		  // useTransform: false,
		  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]
		});

      }

	$('.reviews-slider').slick({
	  dots: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  rows: false,
	  centerMode: true,
	  centerPadding: '490px',
	  responsive: [
	    {
	      breakpoint: 1601,
	      settings: {
	        centerPadding: '390px',
	      }
	    },
	    {
	      breakpoint: 1441,
	      settings: {
	        centerPadding: '290px',
	      }
	    },
	    {
	      breakpoint: 993,
	      settings: {
	        centerPadding: '0',
	        adaptiveHeight: true,
	      }
	    },
	  ]
	});
	

	$('.news-slider').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  rows: false,
	  responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]
	});

	// NAVIGATION CODE

	$('.form-nav a').click(function(){
		$('.form-nav a.active').removeClass('active')
		$(this).addClass('active');
	})

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
    	$('.main-list').toggleClass('open');
    	$('body').toggleClass('body-hidden');
    })

    $('.main-list li').click(function(){
    	$('.dropdown', this).slideToggle();
    })

});

// ANIMATION START

AOS.init({
  offset: 100,
  duration: 1000,
  easing: 'ease',
  delay: 100,
  once: true,
});
