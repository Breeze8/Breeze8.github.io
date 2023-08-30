// MODAL MAGNIFIC POPUP INIT
/*jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Латиницей");

$('.form-modal').each(function() {
    $(this).validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            name: {
                required: true,
                lettersonly: true
            },
            street: {
                required: true,
                lettersonly: true
            },
            city: {
                required: true,
                lettersonly: true
            },
            subname: {
                required: true,
                lettersonly: true
            },
            theme: {
                required: true,
            },
            textarea: {
                required: true,
            },
            house: {
                required: true,
            },
            index: {
                required: true,
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 16
            },
            password_confirm: {
                minlength: 6,
                maxlength: 16,
                equalTo: "#password"
            }
        },
        onfocusout: function(element) {
            this.element(element);
        },
    });
});*/

var validMark = $('.form__input.valid').parent();
validMark.addClass('valid')

$('.modal-init').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    removalDelay: 500,
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});

$('.modal-event').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    removalDelay: 500,
    callbacks: {
        open: function() {
            $modalBigSlider.slick('refresh');
            $modalMinSlider.slick('refresh');

            $('.hall-slider__nav').slick('setPosition');
            $('.hall-slider__for').slick('setPosition');
        },
        beforeOpen: function() {
            var currentSlide = $inlineBigSlider.slick('slickCurrentSlide');

            this.st.mainClass = this.st.el.attr('data-effect');

            $modalBigSlider.slick('slickGoTo', currentSlide);
        }

    },
    midClick: true
});

$('.close-modal').click(function() {
    $.magnificPopup.close();
});

$('.modal__close').click(function() {
    $.magnificPopup.close();
});

