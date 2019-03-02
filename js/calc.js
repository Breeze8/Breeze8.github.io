$(function() {

	// calc switcher
	$('.calc-main-switcher a').click(function(){
		var dataCalcType = $(this).data('calc-type');
		$('.calc-main-item').removeClass('active');
		$(".calc-main-item[data-calc-type="+dataCalcType+"]").addClass('active');
		usdCalc();
		btcCalc();
		return false;
	});
	
	// usd calc logic
	function usdCalc(){
		var percentPerMonthOutput = $('.calc-main-usd .percent-output span');
		var totalProfitOutput = $('.calc-main-usd .profit-output span');
		var totalBruttoOutput = $('.calc-main-usd .brutto-output span');
		var currentAmount = $('.calc-main-usd .amount-slider').val();
		var currentTerm = $('.calc-main-usd .term-slider').val();
		var percentPerMonth = $('.calc-main-usd .percent-output span').val();
		var totalPercent = percentPerMonth;
		var totalProfit = $('.calc-main-usd .profit-output span').val();
		var totalBrutto = $('.calc-main-usd .brutto-output span').val();

		var usdAmountData = {
			"25"     : 4,
			"100"     : 5,
			"1000"     : 6,
			"5000"     : 7,
			"10000"    : 9,
			"50000"    : 11,
			"100000"   : 13,
			"250000"   : 15,
		}

		var usdTermData = [1, 3, 6, 12, 24, 36, 48, 60];

		function updateAmount(value){
			currentAmount = value;
		}

		function updateTerm(value){
			currentTerm = parseInt(value);
		}

		function updatePercent(value){
			for(var amount in usdAmountData){
				if(currentAmount <= amount){
					var initialPercent = usdAmountData[amount];
					for(var i = 0; i < usdTermData.length; i++){
						if(currentTerm >= usdTermData[i]){
							percentPerMonth = initialPercent + i;
							totalPercent = percentPerMonth * usdTermData[i] + 100;
							totalProfit = currentAmount * totalPercent / 100 - currentAmount;
							totalBrutto = currentAmount * totalPercent / 100;
						}
					}
					percentPerMonthOutput.text(percentPerMonth);
					totalProfit = numberWithSpaces(totalProfit);
					totalBrutto = numberWithSpaces(totalBrutto);
					totalProfitOutput.text(totalProfit);
					totalBruttoOutput.text(totalBrutto);
					break;
				}
			}
		}

		function changeSensitivity(data){
			if(data == 100000){
				$('.calc-main-usd .range-labels-more').addClass('active');
			}
			else if(!$('.range-labels-more').hasClass('clicked')){
				$('.calc-main-usd .range-labels-more').removeClass('active');
			}
		};

		$('.calc-main-usd .range-labels-more').click(function(){
			amountSliderInstanceUSD.update({
				from: 100000,
				max: 250000
			});
			$('.calc-main-usd .range-labels-max').text("250 000 ₽");
			$(this).addClass('clicked');
			return false;
		});

		// amount slider
		var $amountSlider = $(".calc-main-usd .amount-slider"),
		    $amountOutput = $(".calc-main-usd .amount-output"),
		    amountSliderInstanceUSD;

		$amountSlider.ionRangeSlider({
		    min: 25,
		    max: 100000,
		    step: 1,
		    hide_min_max: true,
		    onStart: function (data) {
		      updateAmount(data.from);
	 				updatePercent(data.from);
		    	changeSensitivity(data.from);
		      $amountOutput.prop("value", data.from_value);
		    },
		    onChange: function (data) {
		    	updateAmount(data.from);
	 				updatePercent(data.from);
		    	changeSensitivity(data.from);
		      $amountOutput.prop("value", data.from_value);
		    }
		});
		amountSliderInstanceUSD = $amountSlider.data("ionRangeSlider");

		// term slider
		var $termSlider = $(".calc-main-usd .term-slider"),
		    $termOutput = $(".calc-main-usd .term-output"),
		    values = ['1 месяц', '3 месяца', '6 месяцев', '12 месяцев', '24 месяца', '36 месяцев', '48 месяцев', '60 месяцев'],
		    termSliderInstanceUSD;

		$termSlider.ionRangeSlider({
		    values: values,
		    hide_min_max: true,
		    onStart: function (data) {
		      updateTerm(data.from_value);
	 				updatePercent(data.from_value);
		      $termOutput.prop("value", data.from_value);
		    },
		    onChange: function (data) {
		    	updateTerm(data.from_value);
	 				updatePercent(data.from_value);
		      $termOutput.prop("value", data.from_value);
		    }
		});
	}	
	
	usdCalc();

	// btc calc logic
	function btcCalc(){
		var percentPerMonthOutput = $('.calc-main-btc .percent-output span');
		var totalProfitOutput = $('.calc-main-btc .profit-output span');
		var totalBruttoOutput = $('.calc-main-btc .brutto-output span');
		var currentAmount = $('.calc-main-btc .amount-slider').val();
		var currentTerm = $('.calc-main-btc .term-slider').val();
		var percentPerMonth = $('.calc-main-btc .percent-output span').val();
		var totalPercent = percentPerMonth;
		var totalProfit = $('.calc-main-btc .profit-output span').val();
		var totalBrutto = $('.calc-main-btc .brutto-output span').val();

		var btcAmountData = {
			"1.00"    : 7,
			"2.00"    : 9,
			"10.00"   : 11,
			"20.00"   : 13,
			"50.00"   : 15,
			"100.00"  : 17,
			"200.00"  : 19,
		}

		var btcTermData = [1, 3, 6, 12, 24, 36, 48, 60];

		function updateAmount(value){
			currentAmount = value;
		}

		function updateTerm(value){
			currentTerm = parseInt(value);
		}

		function updatePercent(value){
			for(var amount in btcAmountData){
				if(currentAmount <= amount){
					var initialPercent = btcAmountData[amount];
					for(var i = 0; i < btcTermData.length; i++){
						if(currentTerm >= btcTermData[i]){
							percentPerMonth = initialPercent + i;
							totalPercent = percentPerMonth * btcTermData[i] + 100;
							totalProfit = currentAmount * totalPercent / 100 - currentAmount;
							totalBrutto = currentAmount * totalPercent / 100;
						}
					}
					totalProfit = Math.round(totalProfit * 1000) / 1000;
					totalProfit = numberWithSpaces(totalProfit);
					totalBrutto = Math.round(totalBrutto * 1000) / 1000;
					totalBrutto = numberWithSpaces(totalBrutto);
					percentPerMonthOutput.text(percentPerMonth);
					totalProfitOutput.text(totalProfit);
					totalBruttoOutput.text(totalBrutto);
					break;
				}
			}
		}

		function changeSensitivity(data){
			if(data == 20.00){
				$('.calc-main-btc .range-labels-more').addClass('active');
			}
			else if(!$('.calc-main-btc .range-labels-more').hasClass('clicked')){
				$('.calc-main-btc .range-labels-more').removeClass('active');
			}
		};

		$('.calc-main-btc .range-labels-more').click(function(){
			amountSliderInstanceBTC.update({
				from: 20.00,
				max: 200.00
			});
			$('.calc-main-btc .range-labels-max').text("200 BTC");
			$(this).addClass('clicked');
			return false;
		});

		// amount slider
		var $amountSlider = $(".calc-main-btc .amount-slider"),
		    $amountOutput = $(".calc-main-btc .amount-output"),
		    amountSliderInstanceBTC;

		$amountSlider.ionRangeSlider({
		    min: 0.1,
		    max: 20.00,
		    step: 0.1,
		    hide_min_max: true,
		    onStart: function (data) {
		      updateAmount(data.from);
	 				updatePercent(data.from);
		    	changeSensitivity(data.from);
		      $amountOutput.prop("value", data.from_value);
		    },
		    onChange: function (data) {
		    	updateAmount(data.from);
	 				updatePercent(data.from);
		    	changeSensitivity(data.from);
		      $amountOutput.prop("value", data.from_value);
		    }
		});
		amountSliderInstanceBTC = $amountSlider.data("ionRangeSlider");

		// term slider
		var $termSlider = $(".calc-main-btc .term-slider"),
		    $termOutput = $(".calc-main-btc .term-output"),
		    values = ['1 месяц', '3 месяца', '6 месяцев', '12 месяцев', '24 месяца', '36 месяцев', '48 месяцев', '60 месяцев'],
		    termSliderInstanceBTC;

		$termSlider.ionRangeSlider({
		    values: values,
		    hide_min_max: true,
		    onStart: function (data) {
		      updateTerm(data.from_value);
	 				updatePercent(data.from_value);
		      $termOutput.prop("value", data.from_value);
		    },
		    onChange: function (data) {
		    	updateTerm(data.from_value);
	 				updatePercent(data.from_value);
		      $termOutput.prop("value", data.from_value);
		    }
		});
	}	

	function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

});

	function term_corrector(term) {
		if (term<=19) {
			var term_informer = document.getElementById("term_informer");
			term_informer.style.width = "80px";
			term_informer.style.marginLeft = "0px";
		}		
		if (term>=20) {
			var term_informer = document.getElementById("term_informer");
			term_informer.style.width = "100px";
			var term_informer = document.getElementById("term_informer");
			term_informer.style.marginLeft = "-10px";			
		}
		
		if (term>=1 && term<10) {
			termx = 1;
			$("#val_term").val(1);
			document.getElementById("show_mon_text").innerHTML="1 месяц";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#d7d8d8';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#d7d8d8';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#d7d8d8';	
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#d7d8d8';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#d7d8d8';
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#d7d8d8';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#d7d8d8';
			
			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '-3px';		
		}				
		if (term >= 10 && term <20) {
			termx = 3;
			$("#val_term").val(11);
			$('#val_term').css({'background':'red'});
			document.getElementById("show_mon_text").innerHTML="3 месяца";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#FF8A00';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#d7d8d8';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#d7d8d8';	
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#d7d8d8';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#d7d8d8';
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#d7d8d8';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#d7d8d8';	
			
			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '12%';			
		}	
		if (term >= 20 && term<30) {
			termx = 6;
			$("#val_term").val(23);
			document.getElementById("show_mon_text").innerHTML="6 месяцев";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#FF8A00';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#FF8A00';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#d7d8d8';	
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#d7d8d8';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#d7d8d8';
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#d7d8d8';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#d7d8d8';	
			
			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '26.3%';			
		}		
		if (term >= 30 && term<40) {
			termx = 12;
			$("#val_term").val(34);
			document.getElementById("show_mon_text").innerHTML="12 месяцев";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#FF8A00';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#FF8A00';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#FF8A00';	
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#d7d8d8';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#d7d8d8';
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#d7d8d8';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#d7d8d8';	
			
			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '40.5%';			
		}		
		if (term >= 40 && term<50) {
			termx = 24;
			$("#val_term").val(46);
			document.getElementById("show_mon_text").innerHTML="24 месяца";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#FF8A00';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#FF8A00';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#FF8A00';
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#FF8A00';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#d7d8d8';
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#d7d8d8';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#d7d8d8';	

			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '55%';			
		}
		if (term >= 50 && term<60) {
			termx = 36;
			$("#val_term").val(58);
			document.getElementById("show_mon_text").innerHTML="36 месяцев";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#FF8A00';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#FF8A00';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#FF8A00';
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#FF8A00';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#FF8A00';
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#d7d8d8';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#d7d8d8';	

			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '69%';			
		}		
		if (term >= 60 && term<75) {
			$("#val_term").val(70);
			termx = 48;
			document.getElementById("show_mon_text").innerHTML="48 месяцев";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#FF8A00';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#FF8A00';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#FF8A00';
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#FF8A00';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#FF8A00';	
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#FF8A00';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#d7d8d8';	

			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '83.2%';			
		}		
		if (term >= 75 && term<=80) {
			$("#val_term").val(80);
			termx = 60;
			document.getElementById("show_mon_text").innerHTML="60 месяцев";
			var one_del = document.getElementById("one_del");
			one_del.style.background = '#FF8A00';
			var two_del = document.getElementById("two_del");
			two_del.style.background = '#FF8A00';
			var three_del = document.getElementById("three_del");
			three_del.style.background = '#FF8A00';
			var fo_del = document.getElementById("fo_del");
			fo_del.style.background = '#FF8A00';
			var five_del = document.getElementById("five_del");
			five_del.style.background = '#FF8A00';	
			var six_del = document.getElementById("six_del");
			six_del.style.background = '#FF8A00';
			var seven_del = document.getElementById("seven_del");
			seven_del.style.background = '#FF8A00';	
			
			var range_rule = document.getElementById("range_rule");
			range_rule.style.left = '97.5%';			
		}		
		
		return termx;
	}

	function usd_procent (sum,term) {
		
		if (sum>=25 && sum<=99) {	
			if (term == 1) {
				$("#procent").html('4');
				$("#procent_go").val('4');
			}				
			if (term == 3) {
				$("#procent").html('5');
				$("#procent_go").val('5');
			}	
			if (term == 6) {
				$("#procent").html('6');
				$("#procent_go").val('6');
			}		
			if (term == 12) {
				$("#procent").html('7');
				$("#procent_go").val('7');
			}			
			if (term == 24) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}		
			if (term == 36) {
				$("#procent").html('9');
				$("#procent_go").val('0');
			}		
			if (term == 48) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}			
			if (term == 60) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}					
		}			
			
		if (sum>=100 && sum<=999) {	
			if (term == 1) {
				$("#procent").html('5');
				$("#procent_go").val('5');
			}				
			if (term == 3) {
				$("#procent").html('7');
				$("#procent_go").val('7');
			}	
			if (term == 6) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}		
			if (term == 12) {
				$("#procent").html('9');
				$("#procent_go").val('9');
			}			
			if (term == 24) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}		
			if (term == 36) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}		
			if (term == 48) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}			
			if (term == 60) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}					
		}

		if (sum>=1000 && sum<=4999) {
			if (term == 1) {
				$("#procent").html('6');
				$("#procent_go").val('6');
			}
			if (term == 3) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}	
			if (term == 6) {
				$("#procent").html('9');
				$("#procent_go").val('9');
			}		
			if (term == 12) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}			
			if (term == 24) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}		
			if (term == 36) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}		
			if (term == 48) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}			
			if (term == 60) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}					
		}			

		if (sum>=5000 && sum<=9999) {
			if (term == 1) {
				$("#procent").html('7');
				$("#procent_go").val('7');
			}
			if (term == 3) {
				$("#procent").html('9');
				$("#procent_go").val('9');
			}	
			if (term == 6) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}		
			if (term == 12) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}			
			if (term == 24) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}		
			if (term == 36) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}		
			if (term == 48) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}			
			if (term == 60) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}					
		}

		if (sum>=10000 && sum<=49999) {
			if (term == 1) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}
			if (term == 3) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}	
			if (term == 6) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}		
			if (term == 12) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}			
			if (term == 24) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}		
			if (term == 36) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}		
			if (term == 48) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}			
			if (term == 60) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}					
		}			

		if (sum>=50000 && sum<=99999) {
			if (term == 1) {
				term = 3;
				$("#val_term").val(11);
				$('#val_term').css({'background':'red'});
				document.getElementById("show_mon_text").innerHTML="3 месяца";
				var one_del = document.getElementById("one_del");
				one_del.style.background = '#ffd417';
				var two_del = document.getElementById("two_del");
				two_del.style.background = '#d7d8d8';
				var three_del = document.getElementById("three_del");
				three_del.style.background = '#d7d8d8';	
				var fo_del = document.getElementById("fo_del");
				fo_del.style.background = '#d7d8d8';
				var five_del = document.getElementById("five_del");
				five_del.style.background = '#d7d8d8';
				var six_del = document.getElementById("six_del");
				six_del.style.background = '#d7d8d8';
				var seven_del = document.getElementById("seven_del");
				seven_del.style.background = '#d7d8d8';	
				
				var range_rule = document.getElementById("range_rule");
				range_rule.style.left = '12%';				
			}
			if (term == 3) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}	
			if (term == 6) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}		
			if (term == 12) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}			
			if (term == 24) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}		
			if (term == 36) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}		
			if (term == 48) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}			
			if (term == 60) {
				$("#procent").html('17');
				$("#procent_go").val('17');
			}					
		}

		if (sum>=100000 && sum<=249999) {
			if (term == 1) {
				term = 3;
				$('#val_term').val(2);
				document.getElementById("show_mon_text").innerHTML="3 месяца";
			}
			if (term == 3) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}	
			if (term == 6) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}		
			if (term == 12) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}			
			if (term == 24) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}		
			if (term == 36) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}		
			if (term == 48) {
				$("#procent").html('17');
				$("#procent_go").val('17');
			}			
			if (term == 60) {
				$("#procent").html('18');
				$("#procent_go").val('18');
			}					
		}

		if (sum>=250000 && sum<=499999) {
			if (term == 1) {
				term = 3;
				$('#val_term').val(2);
				document.getElementById("show_mon_text").innerHTML="3 месяца";
			}
			if (term == 3) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}	
			if (term == 6) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}		
			if (term == 12) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}			
			if (term == 24) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}		
			if (term == 36) {
				$("#procent").html('17');
				$("#procent_go").val('17');
			}		
			if (term == 48) {
				$("#procent").html('18');
				$("#procent_go").val('18');
			}			
			if (term == 60) {
				$("#procent").html('19');
				$("#procent_go").val('19');
			}					
		}

		if (sum>=500000) {
		if (term == 1) {
			term = 3;
			$('#val_term').val(2);
			document.getElementById("show_mon_text").innerHTML="3 месяца";
		}
		if (term == 3) {
			$("#procent").html('14');
			$("#procent_go").val('14');
		}	
		if (term == 6) {
			$("#procent").html('15');
			$("#procent_go").val('15');
		}		
		if (term == 12) {
			$("#procent").html('16');
			$("#procent_go").val('16');
		}			
		if (term == 24) {
			$("#procent").html('17');
			$("#procent_go").val('17');
		}		
		if (term == 36) {
			$("#procent").html('18');
			$("#procent_go").val('18');
		}		
		if (term == 48) {
			$("#procent").html('19');
			$("#procent_go").val('19');
		}			
		if (term == 60) {
			$("#procent").html('20');
			$("#procent_go").val('20');
		}					
	}

		$("#show_sum").val(number_format(sum, 0, '.', ' '));
		$("#sum_go").val(sum);
		$("#term_go").val(term);	
		$("#show_term").val(term);
		
	}

	function usd_procent_month (sum,term) {
		if (sum>=1000 && sum<=4999) {	
			$("#procent").html('7');
			$("#procent_go").val('7');
		}			
		if (sum>=5000 && sum<=9999) {	
			$("#procent").html('8');
			$("#procent_go").val('8');
		}		
		if (sum>=10000 && sum<=49999) {	
			$("#procent").html('9');
			$("#procent_go").val('9');
		}		
		if (sum>=50000 && sum<=99999) {	
			$("#procent").html('10');
			$("#procent_go").val('10');
		}
		//Вывод данных в input
		$("#show_sum").val(sum);
		$("#sum_go").val(sum);
		$("#term_go").val(term);	
		$("#show_term").val(term);
		if (sum<1000) {
			$("#show_sum").val(1000);
			$("#sum_go").val(1000);
			$("#procent").html('7');
			$("#procent_go").val('7');		
		}
		if (sum>99999) {
			$("#show_sum").val(99999);
			$("#sum_go").val(99999);
			$("#procent").html('10');
			$("#procent_go").val('10');		
		}	
	}

	function btc_procent (sum,term) {
		if (sum>=0.01 && sum<=0.09) {
			if (term == 1) {
				$("#procent").html('4');
				$("#procent_go").val('4');
			}				
			if (term == 3) {
				$("#procent").html('5');
				$("#procent_go").val('5');
			}	
			if (term == 6) {
				$("#procent").html('6');
				$("#procent_go").val('6');
			}		
			if (term == 12) {
				$("#procent").html('7');
				$("#procent_go").val('7');
			}			
			if (term == 24) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}		
			if (term == 36) {
				$("#procent").html('9');
				$("#procent_go").val('9');
			}		
			if (term == 48) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}			
			if (term == 60) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}					
		}

		if (sum>=0.10 && sum<=0.99) {
			if (term == 1) {
				$("#procent").html('5');
				$("#procent_go").val('5');
			}				
			if (term == 3) {
				$("#procent").html('7');
				$("#procent_go").val('7');
			}	
			if (term == 6) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}		
			if (term == 12) {
				$("#procent").html('9');
				$("#procent_go").val('9');
			}			
			if (term == 24) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}		
			if (term == 36) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}		
			if (term == 48) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}			
			if (term == 60) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}					
		}

		if (sum>=1 && sum<=1.99) {
			if (term == 1) {
				$("#procent").html('6');
				$("#procent_go").val('6');
			}
			if (term == 3) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}	
			if (term == 6) {
				$("#procent").html('9');
				$("#procent_go").val('9');
			}		
			if (term == 12) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}			
			if (term == 24) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}		
			if (term == 36) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}		
			if (term == 48) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}			
			if (term == 60) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}					
		}			
				
		if (sum>=2 && sum<=9.99) {
			if (term == 1) {
				$("#procent").html('7');
				$("#procent_go").val('7');
			}
			if (term == 3) {
				$("#procent").html('9');
				$("#procent_go").val('9');
			}	
			if (term == 6) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}		
			if (term == 12) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}			
			if (term == 24) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}		
			if (term == 36) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}		
			if (term == 48) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}			
			if (term == 60) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}					
		}

		if (sum>=10 && sum<=19.99) {
			if (term == 1) {
				$("#procent").html('8');
				$("#procent_go").val('8');
			}
			if (term == 3) {
				$("#procent").html('10');
				$("#procent_go").val('10');
			}	
			if (term == 6) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}		
			if (term == 12) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}			
			if (term == 24) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}		
			if (term == 36) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}		
			if (term == 48) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}			
			if (term == 60) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}					
		}			

		if (sum>=20 && sum<=49.99) {
			if (term == 1) {
				term = 3;
				$('#val_term').val(11);
				document.getElementById("show_mon_text").innerHTML="3 месяца";	
				var one_del = document.getElementById("one_del");
				one_del.style.background = '#ffd417';
				var two_del = document.getElementById("two_del");
				two_del.style.background = '#d7d8d8';
				var three_del = document.getElementById("three_del");
				three_del.style.background = '#d7d8d8';	
				var fo_del = document.getElementById("fo_del");
				fo_del.style.background = '#d7d8d8';
				var five_del = document.getElementById("five_del");
				five_del.style.background = '#d7d8d8';
				var six_del = document.getElementById("six_del");
				six_del.style.background = '#d7d8d8';
				var seven_del = document.getElementById("seven_del");
				seven_del.style.background = '#d7d8d8';	
				
				var range_rule = document.getElementById("range_rule");
				range_rule.style.left = '12%';				
			}
			if (term == 3) {
				$("#procent").html('11');
				$("#procent_go").val('11');
			}	
			if (term == 6) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}		
			if (term == 12) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}			
			if (term == 24) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}		
			if (term == 36) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}		
			if (term == 48) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}			
			if (term == 60) {
				$("#procent").html('17');
				$("#procent_go").val('17');
			}					
		}

		if (sum>=50 && sum<=99.99) {
			if (term == 1) {
				term = 3;
				$('#val_term').val(3);
				document.getElementById("show_mon_text").innerHTML="3 месяца";
			}
			if (term == 3) {
				$("#procent").html('12');
				$("#procent_go").val('12');
			}	
			if (term == 6) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}		
			if (term == 12) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}			
			if (term == 24) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}		
			if (term == 36) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}		
			if (term == 48) {
				$("#procent").html('17');
				$("#procent_go").val('17');
			}			
			if (term == 60) {
				$("#procent").html('18');
				$("#procent_go").val('18');
			}					
		}

		if (sum>=100 && sum<=199.99) {
			if (term == 1) {
				term = 3;
				$('#val_term').val(3);
				document.getElementById("show_mon_text").innerHTML="3 месяца";					
			}
			if (term == 3) {
				$("#procent").html('13');
				$("#procent_go").val('13');
			}	
			if (term == 6) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}		
			if (term == 12) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}			
			if (term == 24) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}		
			if (term == 36) {
				$("#procent").html('17');
				$("#procent_go").val('17');
			}		
			if (term == 48) {
				$("#procent").html('18');
				$("#procent_go").val('18');
			}			
			if (term == 60) {
				$("#procent").html('19');
				$("#procent_go").val('19');
			}					
		}

		if (sum>=200 && sum<=499.99) {
			if (term == 1) {
				term = 3;
				$('#val_term').val(3);
				document.getElementById("show_mon_text").innerHTML="3 месяца";					
			}
			if (term == 3) {
				$("#procent").html('14');
				$("#procent_go").val('14');
			}	
			if (term == 6) {
				$("#procent").html('15');
				$("#procent_go").val('15');
			}		
			if (term == 12) {
				$("#procent").html('16');
				$("#procent_go").val('16');
			}			
			if (term == 24) {
				$("#procent").html('17');
				$("#procent_go").val('17');
			}		
			if (term == 36) {
				$("#procent").html('18');
				$("#procent_go").val('18');
			}		
			if (term == 48) {
				$("#procent").html('19');
				$("#procent_go").val('19');
			}			
			if (term == 60) {
				$("#procent").html('20');
				$("#procent_go").val('20');
			}					
		}	

		$("#show_sum").val(number_format(sum, 4, '.', ' '));
		$("#sum_go").val(sum);
		$("#term_go").val(term);	
		$("#show_term").val(term);
	}

	function btc_check (){
		$('#sum').fadeOut(0);
		$("#sum_btc").fadeIn(0);
		$('#pod_usd').fadeOut(0);
		$("#pod_btc").fadeIn(0);	
		
		$('#BTC_check').prop('checked', true);
		$('#USD_check').prop('checked', false);
		new_sum();
		var elem = document.getElementById("btc_style");
		elem.style.color = '#ffd417';
		elem.style.textDecoration = 'underline';
		var elem2 = document.getElementById("usd_style");
		elem2.style.color = '#adaeaf';
		elem2.style.textDecoration = 'none';
		var elem3 = document.getElementById("pod_btc");
		elem3.style.display = 'flex';
	}

	function usd_check (){
		$('#sum').fadeIn(0);
		$("#sum_btc").fadeOut(0);
		$('#pod_usd').fadeIn(0);
		$("#pod_btc").fadeOut(0);	
		
		$('#BTC_check').prop('checked', false);
		$('#USD_check').prop('checked', true);
		new_sum();
		var elem = document.getElementById("usd_style");
		elem.style.color = '#ffd417';
		elem.style.textDecoration = 'underline';
		var elem2 = document.getElementById("btc_style");
		elem2.style.color = '#adaeaf';	
		elem2.style.textDecoration = 'none';	
	}

	$(document).ready(function(){
		$("#show_sum").keypress(function (i) {	
			var sums = $("#show_sum").val();
			$("#sum_go").val(sums);
			$('#sum').val(sums);		
		});
	});

	//Движение плашки ползунка
	function sum_move_rule(sum){
		
		if (document.getElementById("USD_check").checked == true) {
			var elem_sum = document.getElementById("speak");	
			elem_sum.style.left = sum/2680+2+'%';
			var elem_inp = document.getElementById("show_sum");
			var elem_inp_ab = document.getElementById("show_sum_ab");		
			
			if (sum<99999) {
				elem_inp_ab.style.marginLeft = '-37px';	
				elem_sum.style.width = 'auto';
			}
			
			if (sum>199999) {
				elem_sum.style.width = '44px';
				elem_inp_ab.style.marginLeft = '-41px';
			}
			
			sum = number_format(sum, 0, '.', ' ');
			document.getElementById("show_sum_text").innerHTML=sum+' $';		
		}else {
			var elem_sum = document.getElementById("speak");	
			elem_sum.style.left = sum/2680*500+2+'%';
			var elem_inp = document.getElementById("show_sum");
			var elem_inp_ab = document.getElementById("show_sum_ab");
			if (sum<99) {
				elem_inp_ab.style.marginLeft = '-36px';	
				elem_sum.style.width = 'auto';
			}

			if (sum>300) {
				elem_sum.style.width = '60px';
				elem_inp_ab.style.marginLeft = '-56px';	
			}
			sum = number_format(sum, 4, '.', ' ');
			document.getElementById("show_sum_text").innerHTML=sum+' BTC';
			
		}
			
		
	}

	function new_sum(check_out_money){
		
		if (check_out_money == 2) {
			$('#out_end').prop('checked', true);
			$('#out_month').prop('checked', false);
			$('#out_end').addClass('check_out_money_act');
			$('#out_end').addClass('check_out_money');
			$('#out_month').removeClass('check_out_money_act');
			$('#out_month').addClass('check_out_money');
			$('#term_out_money_title_1').addClass('term_out_money_title');
			$('#term_out_money_title_1').removeClass('term_out_money_title_act');
			$('#term_out_money_title_2').addClass('term_out_money_title_act');
			$('#term_out_money_title_2').removeClass('term_out_money_title');
		}else {
			if (check_out_money == 1) {
				$('#out_month').prop('checked', true);
				$('#out_end').prop('checked', false);
				$('#out_month').addClass('check_out_money_act');
				$('#out_end').addClass('check_out_money');
				$('#out_end').removeClass('check_out_money_act');
				$('#term_out_money_title_2').addClass('term_out_money_title');
				$('#term_out_money_title_2').removeClass('term_out_money_title_act');
				$('#term_out_money_title_1').addClass('term_out_money_title_act');
				$('#term_out_money_title_1').removeClass('term_out_money_title');			
			}else {
				if (check_out_money == 0) {
					$('#out_end').prop('checked', true);
					$('#out_month').prop('checked', false);
					$('#out_end').addClass('check_out_money_act');
					$('#out_end').addClass('check_out_money');
					$('#out_month').removeClass('check_out_money_act');
					$('#out_month').addClass('check_out_money');
				$('#term_out_money_title_1').addClass('term_out_money_title');
				$('#term_out_money_title_2').addClass('term_out_money_title_act');	
				$('#term_out_money_title_2').removeClass('term_out_money_title');
				}
			}
		}
		var sum = $("#sum").val();
		var term = $("#val_term").val();
		
		//term коррекция
		term = term_corrector(term);
		//Выбран доллар
		if (document.getElementById("USD_check").checked == true) {
			//Длина закрывающей желтой полосы слева от плашки ползунка
			var cover_sum_range = document.getElementById("cover_sum_range");
			cover_sum_range.style.width = sum/2500+'%';
			//Индикатор выбранной валюты
			var doit = 1;
			//Вывод в поле ввода суммы
			//$("#input_sum").val(sum);
			//движение плашки суммы
			sum_move_rule(sum);		
			//Если выбран вывод в конце или каждый месяц?
			if (document.getElementById("out_month").checked == true) {
				//Проценты для доллара если вывод каждый месяц
				usd_procent_month (sum,term);					
			}else {
				//Проценты для доллара если вывод в конце
				usd_procent (sum,term);				
			}			
		}	
		//Выбран биткойн
		if (document.getElementById("BTC_check").checked == true) {
			var doit = 2;
			var sum = $("#sum_btc").val();
			//Вывод в поле ввода суммы
			//$("#input_sum").val(sum);
			//движение плашки суммы
			sum_move_rule(sum);		
			//Длина закрывающей желтой полосы слева от плашки ползунка
			var cover_sum_range = document.getElementById("cover_sum_range");
			cover_sum_range.style.width = sum/5+'%';		
			
			btc_procent (sum,term);	
		}
		

		
		if (doit == 1) {
			var profit = sum/100;
			var procents = $("#procent_go").val();
			profit = profit*procents*term;
			//document.getElementById("profit").innerHTML=profit.toFixed(0);
			document.getElementById("profit").innerHTML=number_format(profit, 0, '.', ' ');
			var profit_full = parseInt(sum)+parseInt(profit);
			//document.getElementById("profit_full").innerHTML=profit_full.toFixed(0);
			document.getElementById("profit_full").innerHTML=number_format(profit_full, 0, '.', ' ');
			document.getElementById("profit_sign").innerHTML=' ₽';
			document.getElementById("profit_sign2").innerHTML=' ₽';
		}
		if (doit == 2) {
			sum = sum*100000;
			var profit = sum/100;		
			var procents = $("#procent_go").val();
			profit = profit*procents*term;
			pro = profit;
			profit = profit/100000;
			//document.getElementById("profit").innerHTML=profit.toFixed(4);
			document.getElementById("profit").innerHTML=number_format(profit, 4, '.', ' ');
			var profit_full = parseInt(sum)+parseInt(pro);
			profit_full = profit_full/100000;
			//document.getElementById("profit_full").innerHTML=profit_full.toFixed(4);
			document.getElementById("profit_full").innerHTML=number_format(profit_full, 4, '.', ' ');
			document.getElementById("profit_sign").innerHTML='';	
			document.getElementById("profit_sign2").innerHTML='';			
		}
		

		
		
	}

		$('#input_sum').keyup(function(){
			this.value = this.value.replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
			var sum = $("#input_sum").val();
			$("#sum").val(sum);
			$("#sum_btc").val(sum);
			new_sum();
			
		});
		
		function number_format(number, decimals, dec_point, thousands_sep) {
			number = (number + '').replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '');
			var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			s = '',
			toFixedFix = function(n, prec) {
			  var k = Math.pow(10, prec);
			  return '' + (Math.round(n * k) / k)
				.toFixed(prec);
			};
			// Fix for IE parseFloat(0.55).toFixed(0) = 0;
			s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
			.split('.');
			if (s[0].length > 3) {
			s[0] = s[0].replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '', sep);
			}
			if ((s[1] || '')
			.length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1)
			  .join('0');
			}
			return s.join(dec);
		}	
