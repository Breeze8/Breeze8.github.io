$(function() {

	// SCROLL TO AN SECTION 

	$('.s-scroll[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});

	// ALERT CLOSE

	$('.page-alert__close').click(function(){
		$(this).closest('.page-alert').fadeOut()
	})

	// COPY BUFFER

	 function myFunction() {
	   var copyText = document.getElementById("myInput");
	   copyText.select();
	   document.execCommand("Copy");
	 }

	 // INVESTMENT PRICE ADD

	var invest = $('.form-contol--investment');
	var dep = $('.investments-dep').text();
	$('.investments-dep').on('click', function(){
		invest.val(dep)
	})

	$('.custom-control-label__info').click(function(event){
		event.preventDefault();
		$('.wallet-add').slideDown();
	})


	//  AUTOCOMPLETE
	//  LINK TO GITHUB https://github.com/devbridge/jQuery-Autocomplete

	var countries = [
	   { value: 'Andorra', data: 'AD' },
	   { value: 'Zimbabwe', data: 'ZZ' },
	   { value: 'Ukraine', data: 'UK' },
	   { value: 'Russia', data: 'RU' },
	   { value: 'USA', data: 'US' },
	   { value: 'Canada', data: 'CD' },
	   { value: 'Columbia', data: 'CB' },
	   { value: 'Australia', data: 'AU' },
	];

	$('#autocomplete').autocomplete({
	    lookup: countries,
	});

	//  INPUT COUNTRY CODE 
	//  LINK TO GITHUB https://github.com/jackocnr/intl-tel-input

	$("#telephone").intlTelInput({
		// utilsScript: "../libs/intl-tel-input-master/build/js/utils.js",
		nationalMode: false,
		preferredCountries: [ "gb", "us" ],
		autoHideDialCode: false,
		 formatOnDisplay: true,
	});

	// MOBILE IOS HOVER FIX

	(function() {
	  $("*").on( 'touchstart', function() {
	    $(this).trigger('hover') ;
	  } ).on('touchend', function() {
	    $(this).trigger('hover') ;
	  } ) ;
	})() ;

	// FORM PLACEHOLDER

	$('.form-control').on('focus', function(){
		$(this).parent().find('.status--placeholder').css({
			"font-size": '10px',
			"top": "-15px"
		})
	})


	$('.form-control').on('blur', function(){
		var inputValue = $(this).val();
    	if ( inputValue.length < 0 || inputValue.length == 0 ) {
    		$(this).parent().find('.status--placeholder').css({
				"font-size": '14px',
				"top": "15px"
			})
    	}
	})

	if ($(window).width() < 767) {
	   $('.form-control').focus(function(){
			$(this).parent().find('.status--placeholder').css({
				"top": "-8px"
			})
		})
	 //   $('.form-control').on('touchleave touchcancel', function () {
		//     var inputValueMobile = $('.form-control').val();
	 //    	if ( inputValueMobile.length < 0 || inputValueMobile.length == 0 ) {
	 //    		$('.form-control').parent().find('.status--placeholder').css({
		// 			"font-size": '14px',
		// 			"top": "0px"
		// 		})
	 //    	}  
		// });
	}


	// SLICK SLIDER NEWS

	var $status = $('.slider-nav__count--news');
	var $slickElement = $('.content-slider');

	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $status.text(i + ' / ' + slick.slideCount);
	});

	$('.content-slider').slick({
		rows: false,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
	})


	$('.slider-left__news').click(function(){
	  $('.content-slider').slick('slickPrev');
	})
	$('.slider-right__news').click(function(){
	  $('.content-slider').slick('slickNext');
	})

	// SLICK SLIDER ASK

	var $status1 = $('.slider-nav__count--ask');
	var $slickElement1 = $('.ask-slider');

	$slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var a = (currentSlide ? currentSlide : 0) + 1;
	    $status1.text(a + ' / ' + slick.slideCount);
	});

	$('.ask-slider').slick({
		rows: false,
		slidesToScroll: 1,
		arrows: false,
	})

	$('.slider-left__ask').click(function(){
	  $('.ask-slider').slick('slickPrev');
	})
	$('.slider-right__ask').click(function(){
	  $('.ask-slider').slick('slickNext');
	})

	// SLICK SLIDER HISTORY

	$('.history-slider').slick({
		rows: false,
		slidesToShow: 3,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	  ]
	})

	// SLICK SLIDER MAIN

	var $status2 = $('.slider-nav__count--main');
	var $slickElement2 = $('.slider-main');

	$slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var a = (currentSlide ? currentSlide : 0) + 1;
	    $status2.text(a + ' / ' + slick.slideCount);
	});

	$('.slider-main').slick({
		rows: false,
		slidesToScroll: 1,
		arrows: false,
	})

	$('.slider-left__main').click(function(){
	  $('.slider-main').slick('slickPrev');
	})
	$('.slider-right__main').click(function(){
	  $('.slider-main').slick('slickNext');
	})

	// SLICK SLIDER INVEST

	var $status3 = $('.slider-nav__count--invest');
	var $slickElement3 = $('.slider-invest');

	$slickElement3.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var a = (currentSlide ? currentSlide : 0) + 1;
	    $status3.text(a + ' / ' + slick.slideCount);
	});

	$('.slider-invest').slick({
		rows: false,
		slidesToScroll: 1,
		arrows: false,
	})

	$('.slider-left__invest').click(function(){
	  $('.slider-invest').slick('slickPrev');
	})
	$('.slider-right__invest').click(function(){
	  $('.slider-invest').slick('slickNext');
	})


	// ACCORDION CODE

    $('.faq-accordion.start a').click(function(j) {
        var dropDown = $(this).closest('li').find('.faq-accordion__drop');

        $(this).closest('.faq-accordion.start').find('.faq-accordion__drop').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active').parent().removeClass('active');
        } else {
            $(this).closest('.faq-accordion.start').find('a.active').removeClass('active').parent().removeClass('active');
            $(this).addClass('active').parent().addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // PARTNER ACCESS BUTTON CODE

	$('.partners-access .btn').one('click', function(event){

		event.preventDefault();
		$('.partners-access p').addClass('open');
		$(this).text('Я принимаю соглашение');
		$('html, body').animate({
	        scrollTop: $('.partners-access').position().top
	    }, 500);
	});

	// TABS CODE

	$('#myTab a').on('click', function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	// MODAL CODE 

	$('.btn-modal').magnificPopup({
	  type:'inline',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	// LOADMORE CONTENT TO TABLES

	$('.loadMore a').click(function(){

		$('.table-responsive-first tbody').append('<tr><td><div class="centered centered--top"><span class="icon-table1 blue"></span><div class="bold bold--small">Иконки сюда подберём позже для каждого события </div></div></td><td>11 октября 2018</td><td>13:48</td></tr>');

		$('.table-balance tbody').append('<tr><td>11 октября 2018</td><td><span class="bold black">Вывод с основного счёта на кошелек</span></td><td><span class="red">− $156 220</span></td><td><span class="green">Одобрен</span></td></tr>');

		$('.table-investments tbody').append('<tr><td>465144</td><td><span class="bold black">Стоп и перевод тела депозита на баланс</span></td><td>11 октября 2018</td><td>13:48</td><td><span class="red">− $156 220 </span></td></tr>');

	})

});

// COPY BUFFER

new ClipboardJS('#copy');

// MENU ANIMMATION

const menu = new TimelineMax({ paused: true, reversed: true });

menu
  .fromTo('.menu', 1, { y: '-200%', opacity: '1', visibility: "hidden", ease:Power4.easeOut }, 
  	{ y: '0%', opacity: '1', visibility: "visible", ease:Power4.easeOut  })
  .staggerFrom('.menu-list li', .6, { transform: 'translate(0%, -120%)', opacity: '0', ease:Power4.easeOut, delay: .5}, 0.1, 0)
  .from('.menu-content .header-nav', .8, { transform: 'translate(0%, -120%)', opacity: '0', ease:Power3.easeOut, delay: .5}, 0.1, 0)
  .staggerFrom('.menu-content p', .8, { transform: 'translate(0%, -120%)', opacity: '0', ease:Power3.easeOut, delay: .5}, 0.1, 0)

const menuIn = () => menu.reversed() ? menu.play() : menu.reverse();