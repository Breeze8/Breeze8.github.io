Chart.defaults.global.defaultFontFamily = "MontserratMedium";
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = "#222";

var ctx = document.getElementById("myLineChart");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['20.10.18', '', '20.11.18', '', '20.12.18', '', '20.01.19', '', '20.02.19', '', '20.03.19', '', '20.04.19', '', '20.05.19'],
    datasets: [{ 
        data: [10000,20000,17000,30000,25000,28000,20000,26000,50000,55000,60001],
        label: "Объем в первой линии",
        borderColor: "#009432",
        pointBackgroundColor: "#009432",
        backgroundColor: "rgba(0, 148, 50, .05)",
        lineTension: 0,
        borderWidth: '1',
        fill: true
      }, { 
        data: [0, ,10000, ,18000, ,25000, , 35000, ,45000],
        label: "Объем общей структуры",
        borderColor: "#0939A8",
        borderWidth: '1',
        pointBackgroundColor: "#0939A8",
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
                }
            }
        }]
    },
  }
});