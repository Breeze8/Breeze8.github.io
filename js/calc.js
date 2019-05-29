$(function(){

	$('#price').change(function() {

		var minPrice = 0;

		minPrice = +$(this).val() / 100 * 30;
		$('#deposit').val(minPrice);
	})

	

	$('#form-calculator input').change(function() {

		var month = $('#month');
		var markup = $('#markup');
		var summary = $('#summary');
		var price = +$('#price').val();
		var deposit = +$('#deposit').val();
		var monthResult = 0;

		var minPrice = 0;
		minPrice = price / 100 * 30;

		if( price < 15000 || price == 15000 ) {
			var percent = price / 100 * 16;
		}

		if( price > 15000 ) {
			var percent = price / 100 * 14.5;
		}

		monthResult = price + percent - deposit;
		monthResult = monthResult / 4;
		month.html(monthResult);

		summaryResult = price + percent;
		markup.html(percent);
		summary.html(summaryResult);

		
		if (deposit < minPrice ) {
			$('.error').show();
			markup.html('')
			summary.html('')
		} else if ( deposit == 0 ) {
			$('.error').hide();
		}
		else {
			$('.error').hide();
		}

		

	})


})