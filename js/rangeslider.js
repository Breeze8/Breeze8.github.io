$(function() {
    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');
    var slider3 = document.getElementById('slider3');
    var slider4 = document.getElementById('slider4');

    var slider1Value = document.getElementById('slider1-span');
	var slider2Value = document.getElementById('slider2-span');
    var slider3Value = document.getElementById('slider3-span');
    var slider4Value = document.getElementById('slider4-span');

    noUiSlider.create(slider1, {
        start: 1000000,
        animate: false,
        step: 1000,
        connect: [true, false],
        range: {
            min: 1000000,
            max: 30000000
        },
        format: wNumb({
	        decimals: 0,
	    })
    });

    noUiSlider.create(slider2, {
        start: 1,
        animate: false,
        connect: [true, false],
        step: 1,
        range: {
            min: 1,
            max: 10
        },
        format: wNumb({
	        decimals: 0,
	    })
    });

    noUiSlider.create(slider3, {
        start: 1000000,
        animate: false,
         connect: [true, false],
        step: 1000,
        range: {
            min: 1000000,
            max: 30000000
        },
        format: wNumb({
            decimals: 0,
        })
    });

    noUiSlider.create(slider4, {
        start: 1,
        step: 1,
        animate: false,
         connect: [true, false],
        range: {
            min: 1,
            max: 10
        },
        format: wNumb({
            decimals: 0,
        })
    });

    slider1.noUiSlider.on('update', function(values, handle) {
        slider1Value.innerHTML = values[handle];
    });

    slider2.noUiSlider.on('update', function(values, handle) {
        slider2Value.innerHTML = values[handle];
    });

    slider3.noUiSlider.on('update', function(values, handle) {
        slider3Value.innerHTML = values[handle];
    });

    slider4.noUiSlider.on('update', function(values, handle) {
        slider4Value.innerHTML = values[handle];
    });
})