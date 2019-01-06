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

})