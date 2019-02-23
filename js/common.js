$(function() {

	$('.slider-certeficat__slide').magnificPopup({
	  type:'image',
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});


    $('.main-slider').slick({
    	rows: false,
    	fade: true,
    	 responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        arrows: false,
	        dots: true
	      }
	    }
	  ]
    })

    $('.slider-top').slick({
    	rows: false,
    	responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        arrows: false,
	        dots: true
	      }
	    }
	  ]
    })

    $('.slider-certeficat').slick({
    	rows: false,
    	slidesToShow: 4,
    	 responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        arrows: false,
		        dots: true,
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        arrows: false,
		        dots: true,
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        dots: true,
		        slidesToShow: 1,
		      }
		    },
		  ]
    })

    $('.hamburger').click(function() {
      $(this).toggleClass('is-active');
      $('.main-nav').slideToggle(function() {
          if ($(this).css('display') === 'none') {
              $(this).removeAttr('style');
          }
      });
  });

    $(".tab_item").not(":first").hide();
	$(".tab").click(function() {
		$(".tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	if ($(window).width() < 767) {
	   $('.header .btn').text('Записаться')
	}

});
