$(function() {

    $(".js-select").select2({

    });

    $('.expert-slider1').slick({
        rows: false,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }]
    })

    $('.expert-prev-1').click(function() {
        $('.expert-slider1').slick('slickPrev');
    })
    $('.expert-next-1').click(function() {
        $('.expert-slider1').slick('slickNext');
    })

    $('.expert-slider2').slick({
        rows: false,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }]
    })

    $('.expert-prev-2').click(function() {
        $('.expert-slider2').slick('slickPrev');
    })
    $('.expert-next-2').click(function() {
        $('.expert-slider2').slick('slickNext');
    })


    $('.expert-slider3').slick({
        rows: false,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }]
    })

    $('.expert-prev-3').click(function() {
        $('.expert-slider3').slick('slickPrev');
    })
    $('.expert-next-3').click(function() {
        $('.expert-slider3').slick('slickNext');
    })

    var activeClass = 'slick-active',
        ariaAttribute = 'aria-hidden';

    $('.c-banner').on('init', function() {
        $('.c-banner .slick-dots li:first-of-type').addClass(activeClass).attr(ariaAttribute, false);
    }).on('afterChange', function(event, slick, currentSlide) {
        var $dots = $('.slick-dots');
        $('li', $dots).removeClass(activeClass).attr(ariaAttribute, true);
        $dots.each(function() {
            $('li', $(this)).eq(currentSlide).addClass(activeClass).attr(ariaAttribute, false);
        });
    });

    $('.c-banner').slick({
        rows: false,
        slidesToShow: 1,
        dots: true,
        appendDots: '.c-banner__content .flex',
    })

    $('.c-banner--prev').click(function() {
        $('.c-banner').slick('slickPrev');
    })
    $('.c-banner--next').click(function() {
        $('.c-banner').slick('slickNext');
    })


    $('.survey-init').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');

            },
        },
        midClick: true
    });


    $(".js-validate").each(function() {
        $(this).validate({
            ignore: [],
            rules: {
                email: {
                    required: true,
                },
                kind: {
                    required: true,
                },
                often: {
                    required: true,
                },
                shoes: {
                    required: true,
                },
                shoes2: {
                    required: true,
                },
            },
            messages: {
                email: {
                    required: "Пожалуйста, заполните это поле",
                    email: "Пожалуйста, введите корректную почту"
                },
                kind: {
                    required: "Пожалуйста, заполните это поле",
                },
                often: {
                    required: "Пожалуйста, заполните это поле",
                    email: "Пожалуйста, введите корректную почту"
                },
                shoes: {
                    required: "Пожалуйста, заполните это поле",
                },
                shoes2: {
                    required: "Пожалуйста, заполните это поле",
                },
            },
        });

    })


    $(".js-survey").click(function() {
        if ($(this).closest('.form').valid()) {
            $('.survey-wrap').addClass('open')
            var magnificPopup = $.magnificPopup.instance;
            // save instance in magnificPopup variable
            magnificPopup.close();
        }
    });

    $('.js-close').on("click", function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $(".survey-close").click(function() {
        $('.survey-wrap').removeClass('open')
    });

    $(document).on('click', function(e) {
        var container = $(".modal-survey");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.closest('.survey-wrap').removeClass('open')
        }
    });


});