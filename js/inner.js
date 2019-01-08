$(function(){
	$(".tab_item").not(":first").hide();
	$(".choice-tab").click(function() {
		$(".choice-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.choice-tabs').click(function(){
		$(this).toggleClass('active')
	})

	$('.back__link').click(function(e) { // без мерцания
	    e.preventDefault();
	    $('html, body').animate({
	        scrollTop: $('#tops').position().top
	    }, 500);
	});

	$('.choice-tab').click(function(){
		var choice = $('.choice-tab.active').text();
		$('.choice-tabs__mobile span').text(choice);
		$('.choice-tabs').removeClass('open');
		$('.choice-tabs__mobile').removeClass('active');
	})

	$('.choice-tabs__mobile').click(function(){

		$('.choice-tabs').toggleClass('open');
		$(this).toggleClass('active')

	})

	$('.mask_header_menu__bottom__talk .talk').click(function(){
		$('body').toggleClass('body__talkings')
	})

	

	

})