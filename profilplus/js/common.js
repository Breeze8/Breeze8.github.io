$(function() {


    // SEARCH

     $(".search-wrap input").focus(function() { // задаем функцию при получении фокуса элементом <input>
        $('.search-dropdown').addClass('active')
    });

    $(".search-wrap input").blur(function() { // задаем функцию при получении фокуса элементом <input>
       $('.search-dropdown').removeClass('active')
    });

    // WISH CARD

    $(".card__wish").click(function(){
        $(this).toggleClass('active')
        $(this).closest('.card').find('.card__alert').toggleClass('active')
    })

    $( ".card" ).mouseleave(function() {
      $('.card__wish').removeClass('active')
        $('.card__alert').removeClass('active')
    });

    // LK

    $('#types-2').change(function(){
       if($('#types-2').is(':checked')) {
            $('.lawyer').removeClass('hidden')
        }
    })
    $('#types-1').change(function(){
       if($('#types-1').is(':checked')) {
            $('.lawyer').addClass('hidden')
        }
    })

    // NUM ANIM

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(function($, win) {
        $.fn.inViewport = function(cb) {
            return this.each(function(i, el) {
                function visPx() {
                    var H = $(this).height(),
                        r = el.getBoundingClientRect(),
                        t = r.top,
                        b = r.bottom;
                    return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
                }
                visPx();
                $(win).on("resize scroll", visPx);
            });
        };
    }(jQuery, window));

    $(window).on('resize scroll', function() {
         if ($('#nums').length) {
        if ($('#nums').isInViewport()) {

            if ($('#num-anim-1').length) {
                var currentNumber1 = $('#num-anim-1').text();

                $({ numberValue1: currentNumber1 }).animate({ numberValue1: 34193 }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $('#num-anim-1').text(now.toFixed(0));
                    }
                });
            }

            if ($('#num-anim-2').length) {
                var currentNumber2 = $('#num-anim-2').text();

                $({ numberValue2: currentNumber2 }).animate({ numberValue2: 2539 }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $('#num-anim-2').text(now.toFixed(0));
                    }
                });
            }

            if ($('#num-anim-3').length) {
                var currentNumber3 = $('#num-anim-3').text();

                $({ numberValue3: currentNumber3 }).animate({ numberValue3: 67080 }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $('#num-anim-3').text(now.toFixed(0));
                    }
                });
            }

            if ($('#num-anim-4').length) {
                var currentNumber4 = $('#num-anim-4').text();

                $({ numberValue4: currentNumber4 }).animate({ numberValue4: 9862 }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $('#num-anim-4').text(now.toFixed(0));
                    }
                });
            }

            if ($('#num-anim-5').length) {
                var currentNumber4 = $('#num-anim-5').text();

                $({ numberValue4: currentNumber4 }).animate({ numberValue4: 171412 }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $('#num-anim-5').text(now.toFixed(0));
                    }
                });

                // .replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
            }


        }
    }
    });


    // TOOLTIP

    $('[data-toggle="popover"]').popover({
        trigger: 'click',
        container: 'body',
        html: true,
        content: function() {
            return $('#popover-content').html();
        }
    });
    var checkboxes = $('.filter').find("input[type=checkbox]");
    checkboxes.change(function() {
        if ($(checkboxes).is(':checked')) {
            $(this).parent().popover('toggle')
        }

    })

    // RANGE SLIDER

    if ($('#steps-slider').length) {
        var stepsSlider = document.getElementById('steps-slider');
        var input0 = document.getElementById('input-with-keypress-0');
        var input1 = document.getElementById('input-with-keypress-1');
        var inputs = [input0, input1];

        noUiSlider.create(stepsSlider, {
            start: [0, 99999],
            connect: true,
            range: {
                'min': [0],
                'max': 99999
            },
            format: wNumb({
                decimals: 0,
                thousand: ' ',
                suffix: ' ₽'
            })
        });

        stepsSlider.noUiSlider.on('update', function(values, handle) {
            inputs[handle].value = values[handle];
        });

        inputs.forEach(function(input, handle) {

            input.addEventListener('change', function() {
                stepsSlider.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function(e) {

                var values = stepsSlider.noUiSlider.get();
                var value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = stepsSlider.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];

                var position;

                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {

                    case 13:
                        stepsSlider.noUiSlider.setHandle(handle, this.value);
                        break;

                    case 38:

                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }

                        // null = edge of slider
                        if (position !== null) {
                            stepsSlider.noUiSlider.setHandle(handle, value + position);
                        }

                        break;

                    case 40:

                        position = step[0];

                        if (position === false) {
                            position = 1;
                        }

                        if (position !== null) {
                            stepsSlider.noUiSlider.setHandle(handle, value - position);
                        }

                        break;
                }
            });
        });
    }


    // QUANTITY

    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // CART DELETE ROW

    $('.table-cart .table-cart__delete').click(function() {
        $(this).closest('tr').remove()
    });

    $('.cart-disabled .table-cart__delete').click(function() {
        $(this).closest('.cart-disabled__row').remove()
    });


    // HIDE CITY WINDOW

    $('.dropdown-toggler').click(function() {
        $(this).next().addClass('open')
    });

    $('.dropdown-close, .dropdown-body .nav button:first-child').click(function() {
        $(this).closest('.dropdown-body').removeClass('open')
    });

    // COMMENTS

    $('.comments-link').click(function() {
        $(this).next().slideToggle()
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $(this).text('Убрать комментарий к заказу')
        } else {
            $(this).text('Добавить комментарий к заказу')
        }
    });

    // DELIVERY

    $("#delivery-way-4 + label").click(function() {

        $('.order-address-first').addClass('hide')
        $('.order-address-second').removeClass('hide')

    })

    $("#delivery-way-1 + label, #delivery-way-2 + label, #delivery-way-3 + label").click(function() {

        $('.order-address-first').removeClass('hide')
        $('.order-address-second').addClass('hide')

    })

    // FILE VAL


    $(".form__file input").change(function() {
        var fileVal = $(".form__file input").val();
        $(this).next().find('.form__file-val').text(fileVal)
    })

    // ACCORDION

    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.accordion-hidden');

        $(this).closest('.accordion').find('.accordion-hidden').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });


    // CATALOG FILTER

    $('.filter-item__head').click(function() {
        $(this).next().slideToggle()
        $(this).parent().toggleClass('open')
    });

    // FILTER MARK

    $('.c-filter-mark svg').click(function() {
        $(this).parent().remove()
    });

    // COOKIES CLOSE

    $('.cookies-close').click(function() {
        $(this).parent().remove()
    });

    $('.lk-delete').click(function() {
        $(this).closest('tr').remove()
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 250) {
            $('.header').addClass('fixed');
            $('.c-menu').addClass('fixed');
            $('.filter').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
            $('.c-menu').removeClass('fixed');
            $('.filter').removeClass('fixed');
        }
    });


    // FILTER MOBILE

    $('.c-filter-selects-mobile').click(function() {
        $('.filter').addClass('open')
    })

    $('.filter-main__header svg').click(function() {
        $('.filter').removeClass('open')
    })

    // CUSTOM SELECT

    $(".js-count").select2();
    $(".js-select").select2();
    $(".js-filter").select2({
        dropdownCssClass: "select2-dropdown--filter"
    });

    // ADAPTIVE MENU

    $('.header-catalog').click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.c-menu').toggleClass('open');
    });

    

    if ($(window).width() < 1023) {
        $('.main-list > li > a').click(function() {
            $(this).next().slideToggle()
            $(this).toggleClass('active')
        })
        $('.header-bottom__left .hamburger').click(function() {
            $('.hamburger').toggleClass('is-active');
            $('.c-menu').toggleClass('open');
        });
    }

    if ($(window).width() > 1023) {
        $(document).mouseup(function (e) {
        var container = $(".c-menu");
        if ($('.c-menu, .header-catalog').has(e.target).length === 0){
            container.removeClass('open');
            $('.hamburger').removeClass('is-active')
        }
    });
    }


    // SCROLL TO ANY SECTION

    $('.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // TABS JQUERY 

    $(".tabs .tabs-content__item").not(":first").hide();
    $(".tabs .tabs-nav__item").click(function() {
        $(".tabs .tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs .tabs-content__item").hide().eq($(this).index()).fadeIn()
        if ($('.order-steps').length) {
            $(".order-steps").slick('refresh')
        }
    }).eq(0).addClass("active");

    $(".c-card-tabs-2 .tabs-content__item").not(":first").hide();
    $(".c-card-tabs-2 .tabs-nav__item").click(function() {
        $(".c-card-tabs-2 .tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".c-card-tabs-2 .tabs-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".c-card-tabs-1 .tabs-content__item").not(":first").hide();
    $(".c-card-tabs-1 .tabs-nav__item").click(function() {
        $(".c-card-tabs-1 .tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".c-card-tabs-1 .tabs-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // MODAL MAGNIFIC POPUP INIT

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

    $('.modal-card-init').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function() {
                $('.mfp-wrap').addClass('active')
            },
            close: function() {
                $('.mfp-wrap').removeClass('active')
            },
        },
        midClick: true
    });

    // SLICK SLIDER INIT

    if ($('.seotext-slider-1').length) {

        $('.seotext-slider-1').slick({
            rows: false,
            slidesToShow: 1,
            autoplay: true,
            fade: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            pauseOnFocus: false,
            swipe: false,
            arrows: false,
            speed: 800,
            responsive: [{
                breakpoint: 600,
                settings: {
                    // variableWidth: true,
                }
            }, ]

        })
    }

    if ($('.seotext-slider-2').length) {

        $('.seotext-slider-2').slick({
            rows: false,
            slidesToShow: 1,
            autoplay: true,
            fade: true,
            swipe: false,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: false,
             speed: 800,
            responsive: [{
                breakpoint: 600,
                settings: {
                    // variableWidth: true,
                }
            }, ]

        })
    }


    if ($('.brands-slider-1').length) {

        var prev = $('.brands-slider-1').closest('.init-slider').find('.slider-nav__prev');
        var next = $('.brands-slider-1').closest('.init-slider').find('.slider-nav__next');

        $('.brands-slider-1').slick({
            rows: false,
            slidesToShow: 6,
            prevArrow: prev,
            nextArrow: next,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [{
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: true,
                    }
                },
            ]

        })
    }

    if ($('.brands-slider-2').length) {

        var prev = $('.brands-slider-2').closest('.init-slider').find('.slider-nav__prev');
        var next = $('.brands-slider-2').closest('.init-slider').find('.slider-nav__next');

        $('.brands-slider-2').slick({
            rows: false,
            slidesToShow: 6,
            prevArrow: prev,
            nextArrow: next,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [{
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: true,
                    }
                },
            ]

        })
    }

    if ($('.sales-slider').length) {

        var prev = $('.sales-slider').closest('.init-slider').find('.slider-nav__prev');
        var next = $('.sales-slider').closest('.init-slider').find('.slider-nav__next');

        $('.sales-slider').slick({
            rows: false,
            slidesToShow: 4,
            prevArrow: prev,
            nextArrow: next,
            responsive: [{
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        })
    }

    if ($('.blog-slider').length) {

        var prev = $('.blog-slider').closest('.init-slider').find('.slider-nav__prev');
        var next = $('.blog-slider').closest('.init-slider').find('.slider-nav__next');

        $('.blog-slider').slick({
            rows: false,
            slidesToShow: 1,
            prevArrow: prev,
            nextArrow: next,
            responsive: [{
                breakpoint: 1023,
                settings: "unslick"
            }, ]
        })
    }

    if ($('.main-slider').length) {

        $('.main-slider').slick({
            rows: false,
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            responsive: [{
                breakpoint: 600,
                settings: {

                }
            }, ]
        })
    }

    if ($('.order-steps-1').length) {

        var prev = $('.order-steps-1').closest('.init-slider').find('.order-nav__prev');
        var next = $('.order-steps-1').closest('.init-slider').find('.order-nav__next');

        $('.order-steps-1').slick({
            rows: false,
            slidesToShow: 1,
            infinite: false,
            adaptiveHeight: true,
            prevArrow: prev,
            draggable: false,
            nextArrow: next,
            responsive: [{
                breakpoint: 600,
                settings: {

                }
            }, ]
        })

    }

    if ($('.order-steps-2').length) {

        var prev = $('.order-steps-2').closest('.init-slider').find('.order-nav__prev');
        var next = $('.order-steps-2').closest('.init-slider').find('.order-nav__next');

        $('.order-steps-2').slick({
            rows: false,
            slidesToShow: 1,
            infinite: false,
             adaptiveHeight: true,
            prevArrow: prev,
            draggable: false,
            nextArrow: next,
            responsive: [{
                breakpoint: 600,
                settings: {

                }
            }, ]
        })

    }

    if ($('.works-slider').length) {

        var prev = $('.works-slider').closest('.init-slider').find('.slider-nav__prev');
        var next = $('.works-slider').closest('.init-slider').find('.slider-nav__next');

        $('.works-slider').slick({
            rows: false,
            slidesToShow: 3,
            prevArrow: prev,
            nextArrow: next,
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }, ]
        })
    }


    if ($('.card-slider-1').length) {

        var prev = $('.card-slider').closest('.init-slider').find('.slider-nav__prev');
        var next = $('.card-slider').closest('.init-slider').find('.slider-nav__next');

        $('.card-slider-1').slick({
            rows: false,
            slidesToShow: 4,
            prevArrow: prev,
            nextArrow: next,
            responsive: [{
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        })
    }


    if ($('.card-slider-2').length) {

        var prev = $('.card-slider-2').closest('.init-slider').find('.slider-nav__prev');
        var next = $('.card-slider-2').closest('.init-slider').find('.slider-nav__next');

        $('.card-slider-2').slick({
            rows: false,
            slidesToShow: 4,
            prevArrow: prev,
            nextArrow: next,
            responsive: [{
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        })
    }

    if ($('.modal-cart-slider').length) {

        $('.modal-init-cart').click(function() {
            $('.modal-cart-slider').slick({
                rows: false,
                slidesToShow: 4,
                responsive: [{
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            })
        })


    }

    if ($('.c-card-main').length) {

        $('.c-card-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            rows: false,
            asNavFor: '.c-card-nav',
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: true,
                }
            }, ]
        });
        $('.c-card-nav').slick({
            slidesToShow: 5,
            vertical: true,
            arrows: false,
            rows: false,
            verticalSwiping: true,
            slidesToScroll: 1,
            asNavFor: '.c-card-main',
            focusOnSelect: true,
            responsive: [{
                breakpoint: 767,
                settings: 'unslick'
            }, ]
        });

    }

    if ($('.modal-card-main').length) {

        $('.c-card-main__slide a').click(function() {

            $('.modal-card-main').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: false,
                asNavFor: '.modal-card-nav',
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        dots: true,
                    }
                }, ]
            });
            $('.modal-card-nav').slick({
                slidesToShow: 5,
                arrows: false,
                rows: false,
                slidesToScroll: 1,
                asNavFor: '.modal-card-main',
                focusOnSelect: true,
                responsive: [{
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    },
                ]
            });

        })

    }

});