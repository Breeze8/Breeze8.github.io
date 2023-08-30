Chart.defaults.global.defaultFontFamily = "MontserratMedium";
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = "#222";

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
   draw: function(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);

      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
         var activePoint = this.chart.tooltip._active[0],
             ctx = this.chart.ctx,
             x = activePoint.tooltipPosition().x,
             topY = this.chart.scales['y-axis-0'].top,
             bottomY = this.chart.scales['y-axis-0'].bottom;

         // draw line
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, bottomY);
         ctx.lineWidth = 1;
         ctx.strokeStyle = '#0939A8';
         ctx.stroke();
         ctx.restore();
      }
   }
});

ctx.height = 400;
ctx.width = 100 + "%";

var myCharts = new Chart(ctx, {
  type: 'LineWithLine',
  data: {
    labels: ['28 янв - 3 фев', '', '4 фев - 10 фев', '', '11 фев - 17 фев', '', '18 фев - 24 фев', '', '25 фев - 3 мар', '', '4 мар - 17 мар', '', '18 мар - 24 мар', '', '25 мар - 31 мар', '', '1 апр - 7 апр', '', '8 апр - 14 апр', '', '15 апр - 21 апр' , '', '22 апр - 28 апр' , '', '29 апр - 5 май' , '', '6 май - 12 май' , '', '13 май - 19 май' , '', '20 май - 26 май' , '', '27 май - 2 июня' , '', '3 июня - 9 июня' , '', '10 июня - 16 июня' , '', '17 июня - 23 июня' , '', '24 июня - 30 июня', '', '1 июля - 7 июля', '', '8 июля - 14 июля' , '', '15 июля - 21 июля' , '', '22 июля - 28 июля', '', '29 июля - 4 авг', '', '5 авг - 11 авг', '', '12 авг - 18 авг', '', '19 авг - 25 авг', '', '26 авг - 1 сен', '', '2 сен - 8 сен', '', '2 сен - 8 сен', '', '9 сен - 15 сен', '', '16 сен - 22 сен', '', '23 сен - 29 сен', '', '30 сен - 6 окт', '', '7 окт - 13 окт', '', '14 окт - 20 окт' , '', '21 окт - 27 окт' , '', '28 окт - 3 ноя', '', '4 ноя - 10 ноя', '', '11 ноя - 17 ноя' , '', '18 ноя - 24 ноя', '', '26 ноя - 1 дек', '', '2 дек - 8 дек', '', '9 дек - 15 дек', '', '16 дек - 22 дек', '', '23 дек - 29 дек', '', '30 дек - 5 янв'       ],
    datasets: [
     { 
        data: [0, ,1000, ,2000, ,3000, , 4000, ,5000, ,6000, ,7000, ,8000, ,9000, ,10000, ,11000, ,12000, ,13000, ,14000, ,15000, ,16000, ,17000, ,18000, ,19000, ,20000, ,21000, ,22000, ,23000, ,24000, ,25000, ,26000, ,27000, ,28000, ,29000, ,30000, ,31000, ,32000, ,33000, ,34000, ,35000, ,36000, ,37000, ,38000, ,39000, ,40000, ,41000, ,42000,],
        label: "Объем общей структуры",
        borderColor: "#0939A8",
        borderWidth: '1',
        pointBackgroundColor: "#0939A8",
        fill: true,
        backgroundColor: "rgba(9, 57, 168, .05)",
        lineTension: 0,
        spanGaps: true,
      },
        //DASHED LINE
       {
        data: [0, ,1000, ,2000, ,3000, , 4000, ,5000, ,6000, ,7000, ,8000, ,9000, ,10000, ,11000, ,12000, ,13000, ,14000, ,15000, ,16000, ,17000, ,18000, ,19000, ,20000, ,21000, ,22000, ,23000, ,24000, ,25000, ,26000, ,27000, ,28000, ,29000, ,30000, ,31000, ,32000, ,33000, ,34000, ,35000, ,36000, ,37000, ,38000, ,39000, ,40000, ,41000, ,42000, ,43000, ,44000, ,45000, ,46000, ,47000, ,48000, ,49000, ,45000],
        label: "",
        borderDash: [5, 5],
        borderColor: "#999",
        borderWidth: '1',
        pointBackgroundColor: "#999",
        fill: true,
        backgroundColor: "rgba(9, 57, 168, .05)",
        lineTension: 0,
        spanGaps: true,
      }
    ]
  },
  
  options: {

  responsive:true,
	maintainAspectRatio: false,
  tooltips: {
        callbacks: {
            label: function(tooltipItem) {
                return "Доход +$" + Number(tooltipItem.yLabel);
            },

        },
        intersect: false,
        backgroundColor: '#fff',
        titleFontColor: '#222',
        bodyFontColor: '#009432',
        titleMarginBottom: 8,
        xPadding: 15,
        yPadding: 15,
        cornerRadius: 0,
        borderColor: "#c8c8c8",
        borderWidth: 1,
        displayColors: false
    },
  legend: {
      display: false,
  },
	scales: {
		xAxes: [{
			display: true,

			scaleLabel: {
	          display: true
	        },
			gridLines: {
		        tickMarkLength: 20,
		      },
		}],
        yAxes: [{

        	display: true,
        	scaleLabel: {
				display: true,
			},
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return '€' + value;
                },
                beginAtZero:true
            }
        }]
    },
  }
});
