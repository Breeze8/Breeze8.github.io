
// RANGE SLIDER

var skipSlider = document.getElementById('skipstep');

noUiSlider.create(skipSlider, {
	step: 10,
    range: {
        'min': 0,
        'max': 10000
    },
    start: [700, 9000],
	format: wNumb({
	    decimals: 0,
        suffix: ' ₽'
	})
});

var skipValues = [
    document.getElementById('skip-value-lower'),
    document.getElementById('skip-value-upper')
];

skipSlider.noUiSlider.on('update', function (values, handle) {
    skipValues[handle].innerHTML = values[handle];
});