$(function(){

	

	$('#form-calculator input').change(function() {

		var month = $('#month');
		var markup = $('#markup');
		var summary = $('#summary');
		var price = +$('#price').val();
		var deposit = +$('#deposit').val();
		var monthResult = 0;

		monthResult = price - deposit;
		monthResult = monthResult / 4;
		month.html(monthResult);


		if( price < 15000 || price == 15000 ) {
			var percent = price / 100 * 16;
		}

		if( price > 15000 ) {
			var percent = price / 100 * 14.5;
		}

		summaryResult = monthResult + percent;
		markup.html(percent);
		summary.html(summaryResult);

		var minPrice = 0;

		minPrice = price / 100 * 30;

		if (deposit < minPrice ) {
			$('.error').show();
		} else if ( deposit == 0 ) {
			$('.error').hide();
		}
		else {
			$('.error').hide();
		}

	})

})