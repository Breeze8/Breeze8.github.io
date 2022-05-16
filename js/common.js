$(function() {


    if ($(window).width() < 767) {
        $('.settings-header').click(function() {
            $(this).toggleClass('active')
            $('.settings-header__hidden').slideToggle()
        })
    }

    $('.change-filter').click(function() {

        $('.change-box:first-child').toggle()
        $('.change-box:last-child').toggle()

    })

    // MODAL CALC

    $('#dep-input').on('change, keyup', function() {
        var depVal = $(this).val();
        var depPrice = $('.dep-price').data('price');
        depPrice = parseFloat(depPrice);
        var depMoney = depVal / depPrice;
        depMoney = depMoney.toFixed(2)
        var depGet = depMoney * 300 / 100 / 365 * 7;
        depGet = depGet.toFixed(2)

        $('.dep-get').text(depMoney)
        $('.dep-money').text(depGet)
    })

    // SORT TABLE  

    $(".pull-table").stupidtable();

    // COPY

    var clipboard = new ClipboardJS('.copy-btn');

    if ($('#calc-slider-1').length) {
        var tapSlider = document.getElementById('calc-slider-1');

        noUiSlider.create(tapSlider, {
            start: 0,
            behaviour: 'tap',
            connect: [false, true],
            tooltips: [wNumb({ decimals: 0, thousand: ',', })],
            step: 1,
            range: {
                'min': 0,
                'max': 999999
            }
        });
        // MAIN CALC

        var resultToken = 0,
            resultUsdt = 0,
            valueToken = 0,
            valueUsdt = 0;

        tapSlider.noUiSlider.on('slide', function() {

            var sliderValue = tapSlider.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365
            resultUsdt = sliderValue * 300 / 100 / 365

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-1 .calcDay .calc-token').text(resultToken)
            $('#calc-1 .calcDay .calc-usdt').text(resultUsdt)

            // WEEK

            var sliderValue = tapSlider.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 7
            resultUsdt = sliderValue * 300 / 100 / 365 * 7

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-1 .calcWeek .calc-token').text(resultToken)
            $('#calc-1 .calcWeek .calc-usdt').text(resultUsdt)

            // MONTH

            var sliderValue = tapSlider.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 30
            resultUsdt = sliderValue * 300 / 100 / 365 * 30

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-1 .calcMonth .calc-token').text(resultToken)
            $('#calc-1 .calcMonth .calc-usdt').text(resultUsdt)

            // YEAR

            var sliderValue = tapSlider.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 365
            resultUsdt = sliderValue * 300 / 100 / 365 * 365

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-1 .calcYear .calc-token').text(resultToken)
            $('#calc-1 .calcYear .calc-usdt').text(resultUsdt)

        });
    }



    if ($('#calc-slider-2').length) {
        var tapSlider2 = document.getElementById('calc-slider-2');

        noUiSlider.create(tapSlider2, {
            start: 0,
            behaviour: 'tap',
            connect: [false, true],
            tooltips: [wNumb({ decimals: 0, thousand: ',', })],
            step: 1,
            range: {
                'min': 0,
                'max': 999999
            }
        });
        // MAIN CALC

        var resultToken = 0,
            resultUsdt = 0,
            valueToken = 0,
            valueUsdt = 0;

        tapSlider2.noUiSlider.on('slide', function() {

            var sliderValue = tapSlider2.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365
            resultUsdt = sliderValue * 300 / 100 / 365

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-2 .calcDay .calc-token').text(resultToken)
            $('#calc-2 .calcDay .calc-usdt').text(resultUsdt)

            // WEEK

            var sliderValue = tapSlider2.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 7
            resultUsdt = sliderValue * 300 / 100 / 365 * 7

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-2 .calcWeek .calc-token').text(resultToken)
            $('#calc-2 .calcWeek .calc-usdt').text(resultUsdt)

            // MONTH

            var sliderValue = tapSlider2.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 30
            resultUsdt = sliderValue * 300 / 100 / 365 * 30

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-2 .calcMonth .calc-token').text(resultToken)
            $('#calc-2 .calcMonth .calc-usdt').text(resultUsdt)

            // YEAR

            var sliderValue = tapSlider2.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 365
            resultUsdt = sliderValue * 300 / 100 / 365 * 365

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-2 .calcYear .calc-token').text(resultToken)
            $('#calc-2 .calcYear .calc-usdt').text(resultUsdt)

        });
    }




    if ($('#calc-slider-3').length) {
        var tapSlider3 = document.getElementById('calc-slider-3');

        noUiSlider.create(tapSlider3, {
            start: 0,
            behaviour: 'tap',
            connect: [false, true],
            tooltips: [wNumb({ decimals: 0, thousand: ',', })],
            step: 1,
            range: {
                'min': 0,
                'max': 999999
            }
        });
        // MAIN CALC

        var resultToken = 0,
            resultUsdt = 0,
            valueToken = 0,
            valueUsdt = 0;

        tapSlider3.noUiSlider.on('slide', function() {

            var sliderValue = tapSlider3.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365
            resultUsdt = sliderValue * 300 / 100 / 365

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-3 .calcDay .calc-token').text(resultToken)
            $('#calc-3 .calcDay .calc-usdt').text(resultUsdt)

            // WEEK

            var sliderValue = tapSlider3.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 7
            resultUsdt = sliderValue * 300 / 100 / 365 * 7

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-3 .calcWeek .calc-token').text(resultToken)
            $('#calc-3 .calcWeek .calc-usdt').text(resultUsdt)

            // MONTH

            var sliderValue = tapSlider3.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 30
            resultUsdt = sliderValue * 300 / 100 / 365 * 30

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-3 .calcMonth .calc-token').text(resultToken)
            $('#calc-3 .calcMonth .calc-usdt').text(resultUsdt)

            // YEAR

            var sliderValue = tapSlider3.noUiSlider.get();

            resultToken = sliderValue * 300 / 100 / 365 * 365
            resultUsdt = sliderValue * 300 / 100 / 365 * 365

            resultToken = Math.round(resultToken * 100) / 100
            resultToken = resultToken.toLocaleString();

            resultUsdt = resultUsdt * 0.1;
            resultUsdt = Math.round(resultUsdt * 100) / 100
            resultUsdt = resultUsdt.toLocaleString();

            $('#calc-3 .calcYear .calc-token').text(resultToken)
            $('#calc-3 .calcYear .calc-usdt').text(resultUsdt)

        });
    }




    // ACCORDION JQUERY

    $('.history a').click(function(j) {
        var dropDown = $(this).closest('li').find('.history-body');

        $(this).closest('.history').find('.history-body').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.history').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.accordion-body');

        $(this).closest('.accordion').find('.accordion-body').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // CUSTOM SELECT

    $(".js-select").select2();

    $(".select-img").select2({
        templateResult: formatState,
        templateSelection: formatState
    });

    function formatState(opt) {
        if (!opt.id) {
            return opt.text.toUpperCase();
        }

        var optimage = $(opt.element).attr('data-image');
        console.log(optimage)
        if (!optimage) {
            return opt.text.toUpperCase();
        } else {
            var $opt = $(
                '<span><img src="' + optimage + '" width="60px" /> ' + opt.text.toUpperCase() + '</span>'
            );
            return $opt;
        }
    };

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });

    // $('.show-more').click(function() {
    //     $(this).closest('.tabs-content__item').find('.hidden').show()
    //     $(this).hide()
    // });

    // ASTERIKS

    function toggleElementMask(element) {
        //Regex to find *
        let reg = /^\*+$/g;
        //If all * we are masked
        let isMasked = element.innerText.match(reg);
        if (!isMasked) {
            //Store the original text
            element.dataset.original = element.innerText;
            //Replace the contente with the same amount of *
            element.innerText = "*".repeat(element.innerText.length);
        } else {
            //Restore the text
            element.innerText = element.dataset.original;
        }
    }

    //Mask on page load
    $(".lk-nav__vals").each(function() {
        toggleElementMask(this);
    });

    //Click event handler
    $(".lk-nav__as").on("click", function(e) {
        e.preventDefault();
        toggleElementMask($($(this).attr("href"))[0]);
    })

    $(".lk-header .lk-sidebar__nav-toggler").on("click", function(e) {
        $(this).toggleClass('active')
        $(this).next().slideToggle()
    })

    $('.clear-input').on('click', function() {
        $(this).closest('.form__row').find('input').val('')
    })

    $('.js-psw').on('click', function() {
        $(this).toggleClass('active')
        var passInput = $(this).closest('.form__row').find('.psw')
        if (passInput.attr('type') === 'password') {
            passInput.attr('type', 'text');
        } else {
            passInput.attr('type', 'password');
        }
    })

    $('.pull-accordion tr').on('click', function() {
        $(this).toggleClass('active')
        $(this).next('.hids').toggle()
    })

    // SCROLL TO ANY SECTION

    $('.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    $('.lk-show-more').on('click', function(e) {
        $(this).toggleClass('active')
        $(this).closest('.pull-item').find('.pull-item__hids').slideToggle()
    });

    // TABS JQUERY 

    $(".dep-tabs__content-item").not(":first").hide();
    $(".deposit-radio__item").click(function() {
        $(".deposit-radio__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".dep-tabs__content-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".calc-info__item").not(":first").hide();
    $(".calc-tabs__nav").click(function() {
        $(".calc-tabs__nav").removeClass("active").eq($(this).index()).addClass("active");
        $(".calc-info__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".tabs-content__item").not(":first").hide();
    $(".pull-tabs__nav").click(function() {
        $(".pull-tabs__nav").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // MODAL MAGNIFIC POPUP INIT

    $('.modal-close').on("click", function() {
        $.magnificPopup.close();
    });

    $('.modal-deposit').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        midClick: true,
        callbacks: {
            beforeOpen: function() {
                // this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function() {
                $('body').addClass('dep-modal');
                $(".deposit-step").slick("getSlick").refresh();
            },
            close: function() {
                $('body').removeClass('dep-modal')
            }
        },
    });

    $('.modal-init').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        // removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                // this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function() {
                $('body').addClass('full-modal')

            },
            close: function() {
                $('body').removeClass('full-modal')
            }
        },
        midClick: true
    });

    // SLICK SLIDER INIT

    $('.deposit-step').slick({
        rows: false,
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        adaptiveHeight: true,
        swipe: false,
    })

    $('.slider-next').click(function() {
        $(".deposit-step").slick('slickNext');
    });

    $('.slider-prev').click(function() {
        $(".deposit-step").slick('slickPrev');
    });


    $('.result-slider').slick({
        rows: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 900,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.home-info').slick({
        rows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 900,
        responsive: [{
                breakpoint: 1023,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    })


    var slider = $(".lk-label .row");

    slider.not(".slick-initialized").slick({
        slidesToShow: 1,
        arrows: false,
        rows: false,
        draggable: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 800,
        dots: true,
        mobileFirst: true,
        responsive: [{
                breakpoint: 2000,
                settings: 'unslick'
            },
            {
                breakpoint: 1600,
                settings: 'unslick'
            },
            {
                breakpoint: 1399,
                settings: 'unslick'
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    $(window).on('resize', function() {
        slider.slick('resize');
    });

});