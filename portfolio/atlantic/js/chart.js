Chart.defaults.global.defaultFontFamily = "MontserratMedium";
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = "#222";

function legendClickCallback(event) {
  event = event || window.event;

  var target = event.target || event.srcElement;
  while (target.nodeName !== 'LI') {
      target = target.parentElement;
  }
  var parent = target.parentElement;
  var chartId = parseInt(parent.classList[0].split("-")[0], 10);
  var chart = Chart.instances[chartId];
  var index = Array.prototype.slice.call(parent.children).indexOf(target);
  var meta = chart.getDatasetMeta(index);

  if (meta.hidden === null) {
    meta.hidden = !chart.data.datasets[index].hidden;
    target.classList.add('hidden');
  } else {
    target.classList.remove('hidden');
    meta.hidden = null;
  }
  chart.update();
}

var ctx = document.getElementById("myChart");
var myLegendContainer = document.getElementById("myChartLegend");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['20.10.18', '', '20.11.18', '', '20.12.18', '', '20.01.19', '', '20.02.19', '', '20.03.19', '', '20.04.19', '', '20.05.19', '', '20.06.19', '', '20.07.19', '', '20.08.19', '', '20.09.19', '', '20.10.19', '', '20.11.19', '', '20.12.19', '', '20.01.20'],
    datasets: [{ 
        data: [10000,20000,17000,30000,25000,28000,20000,26000,50000,55000,60001,12001,15001,7001,18001,24001,32001,28001,36001,44001,60001],
        label: "Объем в первой линии",
        borderColor: "#009432",
        pointBackgroundColor: "#009432",
        backgroundColor: "rgba(0, 148, 50, .05)",
        lineTension: 0,
        borderWidth: '1',
        fill: true,
      }, { 
        data: [0, ,5000, ,10000, ,15000, , 20000, ,25000, ,30000, ,35000, ,40000, ,45000, ,50000, , , ,],
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
        data: [0, ,5000, ,10000, ,15000, , 20000, ,25000, ,30000, ,35000, ,40000, ,45000, ,50000, ,55000, ,60000],
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
  },

});
myLegendContainer.innerHTML = myChart.generateLegend();

var legendItems = myLegendContainer.getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i += 1) {
  legendItems[i].addEventListener("click", legendClickCallback, false);
}


var ctxM = document.getElementById("myChartMonth");
var myLegendContainer1 = document.getElementById("myChartLegend2");

var myChartMonth = new Chart(ctxM, {
  type: 'line',
  data: {
    labels: ['01.10.18', '03.10.18', '05.10.18', '07.10.18', '09.10.18', '11.10.18', '13.10.18', '15.10.18', '17.10.18', '19.10.18', '21.10.18', '23.10.18', '25.10.18', '27.10.18', '29.10.18', '31.10.18'],
    datasets: [{ 
        data: [10000,12000,7000,1000,5000,3000,3500,3800,4600,5700,4800,5200,5500,6000,10000,4000],
        label: "Объем в первой линии",
        borderColor: "#009432",
        pointBackgroundColor: "#009432",
        backgroundColor: "rgba(0, 148, 50, .05)",
        lineTension: 0,
        borderWidth: '1',
        fill: true,
      }, { 
        data: [0, ,5000, ,10000, ,15000, , 20000, ,25000, ,30000, , , ,],
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
        data: [0, ,5000, ,10000, ,15000, , 20000, ,25000, ,30000, ,35000, ,40000, ,45000],
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
                }
            }
        }]
    }
  },

});

var ctxC = document.getElementById("myChart3Month");
var myLegendContainer2 = document.getElementById("myChartLegend3");

var myChart3Month = new Chart(ctxC, {
  type: 'line',
  data: {
    labels: ['01.10.18','05.10.18','10.10.18','15.10.18','20.10.18','25.10.18', '30.10.18', '05.11.18', '10.11.18', '15.11.18', '20.11.18', '25.11.18', '30.11.18', '05.12.18', '10.12.18', '15.12.18', '20.12.18', '25.12.18', '30.12.18'],
    datasets: [{ 
        data: [10000,12000,17000,10000,15000,30000,35000,38000,46000,57000,48000,52000,55000,60000,40000,45000,3500,70000,72000,60000,50000,45000,40000,35000,37000,32000,38000,50000,40000,44000,42000,31000,36000,29000],
        label: "Объем в первой линии",
        borderColor: "#009432",
        pointBackgroundColor: "#009432",
        backgroundColor: "rgba(0, 148, 50, .05)",
        lineTension: 0,
        borderWidth: '1',
        fill: true,
      }, { 
        data: [0, ,2500, ,5000, ,7500, ,10000, , 12500, ,15000, ,17500, ],
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
        data: [0, ,2500, ,5000, ,7500, ,10000, , 12500, ,15000, ,17500, ,20000, ,22500],
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
  },

});



myLegendContainer1.innerHTML = myChartMonth.generateLegend();

var legendItems1 = myLegendContainer1.getElementsByTagName('li');
for (var i = 0; i < legendItems1.length; i += 1) {
  legendItems1[i].addEventListener("click", legendClickCallback, false);
}

myLegendContainer2.innerHTML = myChart3Month.generateLegend();

var legendItems2 = myLegendContainer2.getElementsByTagName('li');
for (var i = 0; i < legendItems2.length; i += 1) {
  legendItems2[i].addEventListener("click", legendClickCallback, false);
}

$('.myChartLegend ul li:first-child').prepend('<span class="icon-chart1 green"></span>');
$('.myChartLegend ul li:nth-child(2)').prepend('<span class="icon-chart1 blue"></span>');
