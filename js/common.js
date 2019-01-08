// Custom JS

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

$('.burger').click(function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$('.mask_header_menu').toggleClass('active');
	if ($('.header').hasClass('who_are_we_test')) {
		$('#up').click();
		$('body').toggleClass('fix');
	}
});

$('.burger.services').click(function (e) {
	e.preventDefault();
	$('body').toggleClass('fix');
});

$('.burger.portfolio_burger').click(function (e) {
	e.preventDefault();
	$('.header.portfolio').toggleClass('active_burger');
});

$(function () {
	var window_width = $(window).width();
	var talk_bg_margin_right = $('.form_header input').width() + (($('.form_header').outerWidth(true) - $('.form_header').width()) * 2);
	var talk_bg_width = window_width - $('.form_header input').width() - (($('.form_header').outerWidth(true) - $('.form_header').width()) * 2);
	if (window_width > 576) {
		$('.talk_bg').css({
			'margin-right': talk_bg_margin_right,
			'width': talk_bg_width
		});
		var talk_bg_height = $('.talk_bg').height();
		if ($(window).height() > talk_bg_height) {
			$('.talk_bg').css({
				'margin-right': talk_bg_margin_right,
				'width': 'auto',
				'height': $(window).height()
			});
		}
	} else {
		$('.talk_bg').css({
			'margin-right': '0px',
			'margin-left': talk_bg_margin_right + 80,
			'width': 'auto',
			'right': 'auto',
			'left': '0px',
			'height': $(window).height()
		});
	}
	$(window).resize(function () {
		var window_width = $(window).width();
		var talk_bg_margin_right = $('.form_header input').width() + (($('.form_header').outerWidth(true) - $('.form_header').width()) * 2);
		var talk_bg_width = window_width - $('.form_header input').width() - (($('.form_header').outerWidth(true) - $('.form_header').width()) * 2);
		$('.talk_bg').css({
			'margin-right': talk_bg_margin_right,
			'width': talk_bg_width
		});
		var talk_bg_height = $('.talk_bg').height();
		if ($(window).height() > talk_bg_height) {
			$('.talk_bg').css({
				'margin-right': talk_bg_margin_right,
				'width': 'auto',
				'height': $(window).height()
			});
		}
	});
});

$('.talk').click(function (e) {
	e.preventDefault();
	$('.header').toggleClass('active_talk');
	$('.form_header').toggleClass('active_talk');
	$('.bg_header').toggleClass('active_talk');
	$('.row_services').toggleClass('active_talk');
	$('.talk_bg').toggleClass('active');
	$('.main_bg').toggleClass('hidden');
	$('.main_bg90').toggleClass('hidden');
	$('body').toggleClass('menu__talking');
});

$(function () {
	var chek_r = $('.talk').attr('id');
	if (chek_r == 'talk_ready') {
		$('.header').toggleClass('active_talk');
		$('.form_header').toggleClass('active_talk');
		$('.bg_header').toggleClass('active_talk');
		$('.row_services').toggleClass('active_talk');
	}
});

$('.talk.services').click(function (e) {
	e.preventDefault();
	$('body').toggleClass('fix');
});

$('.main_menu li').mouseover(function () {
	$(this).find('span.main_menu_mask').css('transform', 'translate(-40%, 0%)');
});

$('.main_menu li').mouseout(function () {
	$(this).find('span.main_menu_mask').css('transform', 'translate(103%, 0%)');
});

// Portfolio start
$(function () {
	var top = $(this).scrollTop();
	var w_w = $(window).width();
	var p_l2 = $('.section_main').css('padding-left');

	var top_ind_max = $('.section_main').position().top;
	if (top > top_ind_max) {
		$('.section_main').css('padding-left', '0');
	}

	var ekr = 1;
	if (w_w < 768) {
		ekr = 2;
	}

	$(window).scroll(function () {
		top = $(this).scrollTop();

		if (top < (20 / ekr)) {
			$('.section_main').css('padding-left', p_l2);
		} else if (top > 20) {
			$('.section_main').css('padding-left', 0);
		}
		if (top < (200 / ekr)) {
			$('.menu_bottom.portfolio_menu_bottom').removeClass('hidden');
		} else if (top > (200 / ekr)) {
			$('.menu_bottom.portfolio_menu_bottom').addClass('hidden');
		}
		if (top < (100 / ekr)) {
			$('.tabs').css({
				'visibility': 'visible',
				'opacity': 1
			})
		} else if (top > (100 / ekr)) {
			$('.tabs').css({
				'visibility': 'hidden',
				'opacity': 0
			})
		}
		if (top < (100 / ekr)) {
			$('body').css('background-color', '#000')
			$('.menu_bottom li:last-child a').css('color', 'rgba(255,255,255,.65)');
			$('.burger').removeClass('black');
		} else if (top > (100 / ekr)) {
			$('body').css('background-color', '#fff')
			$('.menu_bottom li:last-child a').css('color', 'rgba(0,0,0,.8)');
			$('.burger').addClass('black');
		}

	});

});
// Portfolio end

// Services start
$(function () {
	var h_body = $('body').outerHeight(true);
	var h_window = $(window).height();
	var h_work = (h_body - h_window) / 3;

	$(window).resize(function () {
		var h_body = $('body').outerHeight(true);
		var h_window = $(window).height();
		var h_work = (h_body - h_window) / 3;
		var top = $(this).scrollTop();
		if (top > h_work || top < h_work * 2) {
			$('.darkened').removeClass('visible');
			$('.darkened2').addClass('visible');
		}
		if (top < h_work) {
			$('.darkened').removeClass('visible');
			$('.darkened1').addClass('visible');
		}
		if (top > h_work * 2) {
			$('.darkened').removeClass('visible');
			$('.darkened3').addClass('visible');
		}
	});

	$(window).scroll(function () {
		var top = $(this).scrollTop();
		if (top > h_work || top < h_work * 2) {
			$('.darkened').removeClass('visible');
			$('.darkened2').addClass('visible');
		}
		if (top < h_work) {
			$('.darkened').removeClass('visible');
			$('.darkened1').addClass('visible');
		}
		if (top > h_work * 2) {
			$('.darkened').removeClass('visible');
			$('.darkened3').addClass('visible');
		}
	});

});
// Services end

// WHO WE ARE start
$(function () {
	var h_window = $(window).height();

	var w_w = $(window).width();
	if (w_w < 576) {
		var h_block = h_window * 0.9;
		$('.who_are_we_block').css('height', h_block);
	}

	$(window).resize(function () {
		w_w = $(window).width();
		if (w_w < 576) {
			h_window = $(window).height();
			h_block = h_window * 0.9;
			$('.who_are_we_block').css('height', h_block)
		}
	});

});
// WHO WE ARE end

// Scroll start
try {
	$.browserSelector();
	$.smoothScroll();
} catch (err) {

};
// Scroll end

//d’art. start
$(function () {
	var width_d = $(window).width();
	var height_d = $(window).height();
	if (width_d > 1367 && height_d < 700) {
		$('.bg_header').css({
			'top': '-100px',
			'font-size': '480px'
		});
	};
	$(window).resize(function () {
		var width_d = $(window).width();
		var height_d = $(window).height();
		if (width_d > 1367 && height_d < 700) {
			$('.bg_header').css({
				'top': '-100px',
				'font-size': '480px'
			});
		};
	});
});
//d’art. end
$(function () {
	var width_d = $(window).width();
	var height_d = $(window).height();
	if (width_d < 576 && height_d < 580) {
		$('.bg_header').css({
			'top': '-170px',
			'left': '-118px',
			'font-size': '170px'
		});
	};
	$(window).resize(function () {
		var width_d = $(window).width();
		var height_d = $(window).height();
		if (width_d < 576 && height_d < 580) {
			$('.bg_header').css({
				'top': '-170px',
				'left': '-118px',
				'font-size': '170px'
			});
		};
	});
});

$(function () {

	$('.form_header').find('input').addClass('input_text');
	$('.form_header').find('textarea').addClass('input_text');
	var form = $('.form_header');

	setInterval(function () {
		form.find('.input_text').each(function () {
			if ($(this).val() != '') {
				$(this).removeClass('empty_field');
			} else {
				$(this).addClass('empty_field');
			}
		});
		var sizeEmpty = form.find('.empty_field').length;
		if (sizeEmpty == 0) {
			$('.talk').addClass('active_talk');
		} else {
			$('.talk').removeClass('active_talk');
		}
	}, 500);

});

$(function () {
	var window_width = $(window).width();
	if (window_width < 576) {
		var window_height = $(window).height();
		$('#full_screen').css('height', window_height);
		$(window).resize(function () {
			var window_height = $(window).height();
			$('#full_screen').css('height', window_height);
		});
	}
});

$('.tabs a').click(function (e) {
	e.preventDefault();
	$('.tabs a').removeClass('active_tab');
	$(this).addClass('active_tab');
	var avtive_block = $(this).attr('href');
	$('.section_main_block').removeClass('active');
	$(avtive_block).addClass('active');
});

$('.who_are_we_tabs li a').click(function (e) {
	e.preventDefault();
	$('.who_are_we_tabs li a').removeClass('active');
	$(this).addClass('active');
	var avtive_block = $(this).attr('href');
	$('.who_are_we_tab').removeClass('active');
	$(avtive_block).addClass('active');
});

$(function () {
	$('.who_are_we_tab1 .who_are_we_slider div.item:last').find('.who_are_we_slider_block').addClass('right');
	$('.who_are_we_tab1 .who_are_we_slider div.item:last').find('div.row .col-4:first').addClass('order-last');
	$('.who_are_we_tab1 .who_are_we_slider div.item:last').find('div.row .col-4:last').addClass('order-first');
	$('.who_are_we_tab1 .who_are_we_slider div.item:last').find('.slider_block_info:last div span').css('margin-right', 0);

	var indent_slider_one = 315;
	var indent_slider_two = 150;

	$('.who_are_we_tab1 .slider_next').click(function () {
		for (var i = 0; i < $('.who_are_we_tab1 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab1 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab1 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i + 1;
				if (active_item < $('.who_are_we_tab1 .who_are_we_slider div.item').length) {
					$('.who_are_we_tab1 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab1 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					progress_line_width = progress_line_width * 25;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab1 .who_are_we_progress_line div div').css('width', progress_line_width);
				}

				if ($('.who_are_we_tab1 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab1 .slider_prev').addClass('hidden');
					$('.who_are_we_tab1 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab1 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab1 .slider_next').addClass('hidden');
					$('.who_are_we_tab1 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab1 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}

				break;
			}
		}
	});

	$('.who_are_we_tab1 .slider_prev').click(function () {
		for (var i = 0; i < $('.who_are_we_tab1 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab1 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab1 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i - 1;
				if (active_item > 0) {
					$('.who_are_we_tab1 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab1 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					var progress_line_width = 25 * progress_line_width;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab1 .who_are_we_progress_line div div').css('width', progress_line_width);
				} else {
					$('.who_are_we_tab1 .who_are_we_slider .item:eq(0)').addClass('active');
					$('.who_are_we_tab1 .who_are_we_progress_line div div').css('width', '25%');
					$('.who_are_we_tab1 .who_are_we_progress_nuber span span:first-child').html('01');
				}

				if ($('.who_are_we_tab1 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab1 .slider_prev').addClass('hidden');
					$('.who_are_we_tab1 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab1 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab1 .slider_next').addClass('hidden');
					$('.who_are_we_tab1 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab1 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}
				break;
			}
		}
	});

	for (var i = 0; i < $('.who_are_we_tab1 .who_are_we_slider div.item').length; i++) {
		if ($('.who_are_we_tab1 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
			var progress_line_width = 25 * (i + 1);
			progress_line_width = progress_line_width + '%';
			$('.who_are_we_tab1 .who_are_we_progress_line div div').css('width', progress_line_width);
			break;
		}
	}

	if ($('.who_are_we_tab1 .who_are_we_slider .item:first').hasClass('active')) {
		$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab1 .slider_prev').addClass('hidden');
		$('.who_are_we_tab1 .who_are_we_slider_block').css({
			'padding-right': indent_slider_one,
			'padding-left': 0
		});
	} else if ($('.who_are_we_tab1 .who_are_we_slider .item:last').hasClass('active')) {
		$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab1 .slider_next').addClass('hidden');
		$('.who_are_we_tab1 .who_are_we_slider_block').css({
			'padding-right': 0,
			'padding-left': indent_slider_one
		});
	} else {
		$('.who_are_we_tab1 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab1 .who_are_we_slider_block').css({
			'padding-right': indent_slider_two,
			'padding-left': indent_slider_two
		});
	}

});

$(function () {
	$('.who_are_we_tab2 .who_are_we_slider div.item:last').find('.who_are_we_slider_block').addClass('right');
	$('.who_are_we_tab2 .who_are_we_slider div.item:last').find('div.row .col-4:first').addClass('order-last');
	$('.who_are_we_tab2 .who_are_we_slider div.item:last').find('div.row .col-4:last').addClass('order-first');
	$('.who_are_we_tab2 .who_are_we_slider div.item:last').find('.slider_block_info:last div span').css('margin-right', 0);

	var indent_slider_one = 315;
	var indent_slider_two = 150;

	$('.who_are_we_tab2 .slider_next').click(function () {
		for (var i = 0; i < $('.who_are_we_tab2 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab2 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab2 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i + 1;
				if (active_item < $('.who_are_we_tab2 .who_are_we_slider div.item').length) {
					$('.who_are_we_tab2 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab2 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					progress_line_width = progress_line_width * 25;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab2 .who_are_we_progress_line div div').css('width', progress_line_width);
				}

				if ($('.who_are_we_tab2 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab2 .slider_prev').addClass('hidden');
					$('.who_are_we_tab2 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab2 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab2 .slider_next').addClass('hidden');
					$('.who_are_we_tab2 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab2 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}

				break;
			}
		}
	});

	$('.who_are_we_tab2 .slider_prev').click(function () {
		for (var i = 0; i < $('.who_are_we_tab2 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab2 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab2 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i - 1;
				if (active_item > 0) {
					$('.who_are_we_tab2 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab2 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					var progress_line_width = 25 * progress_line_width;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab2 .who_are_we_progress_line div div').css('width', progress_line_width);
				} else {
					$('.who_are_we_tab2 .who_are_we_slider .item:eq(0)').addClass('active');
					$('.who_are_we_tab2 .who_are_we_progress_line div div').css('width', '25%');
					$('.who_are_we_tab2 .who_are_we_progress_nuber span span:first-child').html('01');
				}

				if ($('.who_are_we_tab2 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab2 .slider_prev').addClass('hidden');
					$('.who_are_we_tab2 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab2 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab2 .slider_next').addClass('hidden');
					$('.who_are_we_tab2 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab2 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}
				break;
			}
		}
	});

	for (var i = 0; i < $('.who_are_we_tab2 .who_are_we_slider div.item').length; i++) {
		if ($('.who_are_we_tab2 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
			var progress_line_width = 25 * (i + 1);
			progress_line_width = progress_line_width + '%';
			$('.who_are_we_tab2 .who_are_we_progress_line div div').css('width', progress_line_width);
			break;
		}
	}

	if ($('.who_are_we_tab2 .who_are_we_slider .item:first').hasClass('active')) {
		$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab2 .slider_prev').addClass('hidden');
		$('.who_are_we_tab2 .who_are_we_slider_block').css({
			'padding-right': indent_slider_one,
			'padding-left': 0
		});
	} else if ($('.who_are_we_tab2 .who_are_we_slider .item:last').hasClass('active')) {
		$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab2 .slider_next').addClass('hidden');
		$('.who_are_we_tab2 .who_are_we_slider_block').css({
			'padding-right': 0,
			'padding-left': indent_slider_one
		});
	} else {
		$('.who_are_we_tab2 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab2 .who_are_we_slider_block').css({
			'padding-right': indent_slider_two,
			'padding-left': indent_slider_two
		});
	}

});

$(function () {
	$('.who_are_we_tab3 .who_are_we_slider div.item:last').find('.who_are_we_slider_block').addClass('right');
	$('.who_are_we_tab3 .who_are_we_slider div.item:last').find('div.row .col-4:first').addClass('order-last');
	$('.who_are_we_tab3 .who_are_we_slider div.item:last').find('div.row .col-4:last').addClass('order-first');
	$('.who_are_we_tab3 .who_are_we_slider div.item:last').find('.slider_block_info:last div span').css('margin-right', 0);

	var indent_slider_one = 315;
	var indent_slider_two = 150;

	$('.who_are_we_tab3 .slider_next').click(function () {
		for (var i = 0; i < $('.who_are_we_tab3 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab3 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab3 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i + 1;
				if (active_item < $('.who_are_we_tab3 .who_are_we_slider div.item').length) {
					$('.who_are_we_tab3 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab3 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					progress_line_width = progress_line_width * 25;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab3 .who_are_we_progress_line div div').css('width', progress_line_width);
				}

				if ($('.who_are_we_tab3 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab3 .slider_prev').addClass('hidden');
					$('.who_are_we_tab3 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab3 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab3 .slider_next').addClass('hidden');
					$('.who_are_we_tab3 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab3 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}

				break;
			}
		}
	});

	$('.who_are_we_tab3 .slider_prev').click(function () {
		for (var i = 0; i < $('.who_are_we_tab3 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab3 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab3 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i - 1;
				if (active_item > 0) {
					$('.who_are_we_tab3 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab3 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					var progress_line_width = 25 * progress_line_width;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab3 .who_are_we_progress_line div div').css('width', progress_line_width);
				} else {
					$('.who_are_we_tab3 .who_are_we_slider .item:eq(0)').addClass('active');
					$('.who_are_we_tab3 .who_are_we_progress_line div div').css('width', '25%');
					$('.who_are_we_tab3 .who_are_we_progress_nuber span span:first-child').html('01');
				}

				if ($('.who_are_we_tab3 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab3 .slider_prev').addClass('hidden');
					$('.who_are_we_tab3 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab3 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab3 .slider_next').addClass('hidden');
					$('.who_are_we_tab3 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab3 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}
				break;
			}
		}
	});

	for (var i = 0; i < $('.who_are_we_tab3 .who_are_we_slider div.item').length; i++) {
		if ($('.who_are_we_tab3 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
			var progress_line_width = 25 * (i + 1);
			progress_line_width = progress_line_width + '%';
			$('.who_are_we_tab3 .who_are_we_progress_line div div').css('width', progress_line_width);
			break;
		}
	}

	if ($('.who_are_we_tab3 .who_are_we_slider .item:first').hasClass('active')) {
		$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab3 .slider_prev').addClass('hidden');
		$('.who_are_we_tab3 .who_are_we_slider_block').css({
			'padding-right': indent_slider_one,
			'padding-left': 0
		});
	} else if ($('.who_are_we_tab3 .who_are_we_slider .item:last').hasClass('active')) {
		$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab3 .slider_next').addClass('hidden');
		$('.who_are_we_tab3 .who_are_we_slider_block').css({
			'padding-right': 0,
			'padding-left': indent_slider_one
		});
	} else {
		$('.who_are_we_tab3 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab3 .who_are_we_slider_block').css({
			'padding-right': indent_slider_two,
			'padding-left': indent_slider_two
		});
	}

});

$(function () {
	$('.who_are_we_tab4 .who_are_we_slider div.item:last').find('.who_are_we_slider_block').addClass('right');
	$('.who_are_we_tab4 .who_are_we_slider div.item:last').find('div.row .col-4:first').addClass('order-last');
	$('.who_are_we_tab4 .who_are_we_slider div.item:last').find('div.row .col-4:last').addClass('order-first');
	$('.who_are_we_tab4 .who_are_we_slider div.item:last').find('.slider_block_info:last div span').css('margin-right', 0);

	var indent_slider_one = 315;
	var indent_slider_two = 150;

	$('.who_are_we_tab4 .slider_next').click(function () {
		for (var i = 0; i < $('.who_are_we_tab4 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab4 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab4 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i + 1;
				if (active_item < $('.who_are_we_tab4 .who_are_we_slider div.item').length) {
					$('.who_are_we_tab4 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab4 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					progress_line_width = progress_line_width * 25;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab4 .who_are_we_progress_line div div').css('width', progress_line_width);
				}

				if ($('.who_are_we_tab4 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab4 .slider_prev').addClass('hidden');
					$('.who_are_we_tab4 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab4 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab4 .slider_next').addClass('hidden');
					$('.who_are_we_tab4 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab4 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}

				break;
			}
		}
	});

	$('.who_are_we_tab4 .slider_prev').click(function () {
		for (var i = 0; i < $('.who_are_we_tab4 .who_are_we_slider div.item').length; i++) {
			if ($('.who_are_we_tab4 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
				$('.who_are_we_tab4 .who_are_we_slider .item:eq(' + i + ')').removeClass('active');
				var active_item = i - 1;
				if (active_item > 0) {
					$('.who_are_we_tab4 .who_are_we_slider .item:eq(' + active_item + ')').addClass('active');
					var progress_line_width = active_item + 1;
					$('.who_are_we_tab4 .who_are_we_progress_nuber span span:first-child').html('0' + progress_line_width);
					var progress_line_width = 25 * progress_line_width;
					progress_line_width = progress_line_width + '%';
					$('.who_are_we_tab4 .who_are_we_progress_line div div').css('width', progress_line_width);
				} else {
					$('.who_are_we_tab4 .who_are_we_slider .item:eq(0)').addClass('active');
					$('.who_are_we_tab4 .who_are_we_progress_line div div').css('width', '25%');
					$('.who_are_we_tab4 .who_are_we_progress_nuber span span:first-child').html('01');
				}

				if ($('.who_are_we_tab4 .who_are_we_slider .item:first').hasClass('active')) {
					$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab4 .slider_prev').addClass('hidden');
					$('.who_are_we_tab4 .who_are_we_slider_block').css({
						'padding-right': indent_slider_one,
						'padding-left': 0
					});
				} else if ($('.who_are_we_tab4 .who_are_we_slider .item:last').hasClass('active')) {
					$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab4 .slider_next').addClass('hidden');
					$('.who_are_we_tab4 .who_are_we_slider_block').css({
						'padding-right': 0,
						'padding-left': indent_slider_one
					});
				} else {
					$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
					$('.who_are_we_tab4 .who_are_we_slider_block').css({
						'padding-right': indent_slider_two,
						'padding-left': indent_slider_two
					});
				}
				break;
			}
		}
	});

	for (var i = 0; i < $('.who_are_we_tab4 .who_are_we_slider div.item').length; i++) {
		if ($('.who_are_we_tab4 .who_are_we_slider .item:eq(' + i + ')').hasClass('active')) {
			var progress_line_width = 25 * (i + 1);
			progress_line_width = progress_line_width + '%';
			$('.who_are_we_tab4 .who_are_we_progress_line div div').css('width', progress_line_width);
			break;
		}
	}

	if ($('.who_are_we_tab4 .who_are_we_slider .item:first').hasClass('active')) {
		$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab4 .slider_prev').addClass('hidden');
		$('.who_are_we_tab4 .who_are_we_slider_block').css({
			'padding-right': indent_slider_one,
			'padding-left': 0
		});
	} else if ($('.who_are_we_tab4 .who_are_we_slider .item:last').hasClass('active')) {
		$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab4 .slider_next').addClass('hidden');
		$('.who_are_we_tab4 .who_are_we_slider_block').css({
			'padding-right': 0,
			'padding-left': indent_slider_one
		});
	} else {
		$('.who_are_we_tab4 .slider_arrow div').removeClass('hidden');
		$('.who_are_we_tab4 .who_are_we_slider_block').css({
			'padding-right': indent_slider_two,
			'padding-left': indent_slider_two
		});
	}

});

$(window).scroll(function () {
	var top = $(this).scrollTop();
	if (top > 20) {
		$('.who_are_we_title').css('color', 'rgba(255,255,255,.1)')
		$('.who_are_we_subheader').css('color', 'rgba(255,255,255,.1)')
	} else {
		$('.who_are_we_title').css('color', 'rgba(255,255,255,.75)')
		$('.who_are_we_subheader').css('color', 'rgba(255,255,255,.85)')
	}
});

(function ($) {
	$(function () {

		$('#up').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			return false;
		})

	})
})(jQuery)

$('.carousel_wellness_1').owlCarousel({
	loop: true,
	margin: 20,
	dots: false,
	nav: false,
	center: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		750: {
			items: 3
		}
	}
})

$('.carousel_scuters_1').owlCarousel({
	loop: true,
	margin: 20,
	dots: false,
	nav: false,
	center: true,
	responsive: {
		0: {
			items: 1
		},
		576: {
			items: 2
		},
		750: {
			items: 3
		}
	}
})

window.onload = function () {
	$('.loading').addClass('hidden');
	$('.bg_header').removeClass('load');
};