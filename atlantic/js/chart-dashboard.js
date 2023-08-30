var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top + 300;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#myLineChart')) {
        if ($('#myLineChart').data("generated")) { return; }
        $('#myLineChart').data("generated", true);
        var ctx = document.getElementById("myLineChart");
        Chart.defaults.global.defaultFontFamily = "MontserratMedium";
        Chart.defaults.global.defaultFontSize = 12;
        Chart.defaults.global.defaultFontColor = "#222";
        Chart.defaults.global.animation.duration = 3000

        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['20.10.18', '', '20.11.18', '', '20.12.18'],
            datasets: [{ 
                data: [10000,20000,15000,30000, 25000],
                label: "Объем в первой линии",
                borderColor: "#009432",
                pointBackgroundColor: "#009432",
                backgroundColor: "rgba(0, 148, 50, .05)",
                lineTension: 0,
                borderWidth: '1',
                fill: true
              }, { 
                data: [0, ,9000, ,18000, ,21000],
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
            responsive:true,
            // maintainAspectRatio: false,
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
                        stepSize: 10000
                    }
                }]
            },
          }
        });
        
    } else {
        inView = false;  
    }
});




