var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray"],
    datasets: [{
      backgroundColor: [
        "#51BFF7",
        "#6DF0FF",
        "#3BED93",
      ],
      borderWidth: 0,
      data: [60, 20, 20]
    }]
  },
  options: {
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
          return 'Доход: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        },
        },
        intersect: false,
        backgroundColor: '#fff',
        titleFontColor: '#222',
        bodyFontColor: '#00CCA3',
        titleMarginBottom: 8,
        xPadding: 15,
        yPadding: 15,
        cornerRadius: 0,
        borderColor: "#c8c8c8",
        borderWidth: 0,
        displayColors: false
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false, 
    }
  }
});

// SECOND 

var ctx = document.getElementById("myChart2").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray"],
    datasets: [{
      backgroundColor: [
        "#51BFF7",
        "#6DF0FF",
        "#3BED93",
      ],
      borderWidth: 0,
      data: [50, 20, 30]
    }]
  },
  options: {
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
          return 'Доход: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        },
        },
        intersect: false,
        backgroundColor: '#fff',
        titleFontColor: '#222',
        bodyFontColor: '#00CCA3',
        titleMarginBottom: 8,
        xPadding: 15,
        yPadding: 15,
        cornerRadius: 0,
        borderColor: "#c8c8c8",
        borderWidth: 0,
        displayColors: false
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false, 
    }
  }
});

// THIRD

var ctx = document.getElementById("myChart3").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray"],
    datasets: [{
      backgroundColor: [
        "#51BFF7",
        "#6DF0FF",
        "#3BED93",
      ],
      borderWidth: 0,
      data: [40, 30, 30]
    }]
  },
  options: {
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
          return 'Доход: ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
        },
        },
        intersect: false,
        backgroundColor: '#fff',
        titleFontColor: '#222',
        bodyFontColor: '#00CCA3',
        titleMarginBottom: 8,
        xPadding: 15,
        yPadding: 15,
        cornerRadius: 0,
        borderColor: "#c8c8c8",
        borderWidth: 0,
        displayColors: false
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false, 
    }
  }
});