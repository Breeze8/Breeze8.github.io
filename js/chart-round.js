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
    if (isScrolledIntoView('#doughnut-chart')) {
        if ($('#doughnut-chart').data("generated")) { return; }
        $('#doughnut-chart').data("generated", true);
        var ct = document.getElementById("doughnut-chart");
        Chart.defaults.global.animation.duration = 3000
        ct.width = 84;
        ct.height = 84;

        var myRoundChart = new Chart(ct, {
            type: 'doughnut',
            data: {
              labels: ["Остаток", "Получили",],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#C8C8C8", "#009432"],
                  data: [25,75],
                  borderWidth: 0
                }
              ]
            },
            options: {
              animationEasing: 'linear',
              tooltips: {
                afterLabel: "%"
              },
              title: {
                display: false,
              }, 
               legend: {
                  display: false,
              },
            }
        });
    } else {
        inView = false;  
    }
});
