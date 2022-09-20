$(function() {

    // MAGAZINE

    $('.contacts__info-item .detailed').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('open');
        $(this).prev().slideToggle()
        if ($(this).hasClass('open')) {
            $(this).find('span').text('Скрыть')
        } else {
            $(this).find('span').text('Развернуть')
        }
    })

    // FILTER

    $('.filter__rating-nav svg').click(function() {
        $(this).closest('.filter__rating-nav').find('svg.active').removeClass('active')
        $(this).toggleClass('active')
    })

    $('.filter__rating-sort button').click(function() {
        $('.filter__rating-sort button.active').removeClass('active')
        $(this).toggleClass('active')
    })

    $('.filter-mobile').click(function() {
        $('.filter__top').slideToggle()
        $(this).toggleClass('active')
    })

    $('.filter__list-toggler').click(function(e) {
        e.stopPropagation();
        $(this).next().toggleClass('open')
        $(this).toggleClass('active')

        $(this).parent().siblings().find('.filter__list-dropdown').removeClass('open')
        $(this).parent().siblings().find('.filter__list-toggler').removeClass('active')
    })

    $(document).on('click', function(e) {
        var container = $(".filter__list-dropdown");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('open')
            $('.filter__list-toggler').removeClass('active')
        }
    });

    // INPUT FILE

    var fileInput = $(".form__file");

    $(fileInput).on('change', function() {
        var val = $(this).val();
        $(this).parent().find('.form__file-text').text(val);
    })

    // MAIN-NAV

    if ($(window).width() < 1199) {
        $('.main-list > li.has-dropdown a').click(function() {
            $(this).next().slideToggle()
            $(this).parent().toggleClass('active')
        })
        $('.search svg').click(function() {
            $('.search__form').toggleClass('open')
            $(this).parent().toggleClass('active')
        })
    }

    // STAR RATING

    $('.bar-rating--1').barrating({
        theme: 'fontawesome-stars'
    });

    // CUSTOM SELECT

    $(".js-select-theme").select2({
        placeholder: "Тема",
        allowClear: true,
    });

    $(".js-select-price").select2({
        placeholder: "Цель приема ",
        allowClear: true,
    });

    $(".js-select-director").select2({
        placeholder: "Оповестить руководство",
        allowClear: true,
    });

    $('.modal-cart__close').click(function() {
        $(this).parent().remove()
    });

    // ADAPTIVE MENU

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('open');
        $('body').toggleClass('hidden');
    });

    // SCROLL TO ANY SECTION

    $('.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // TABS JQUERY 

    $(".sizes__tabs-item").not(":first").hide();
    $(".sizes__tabs-nav-item").click(function() {
        $(".sizes__tabs-nav-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".sizes__tabs-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".tabs__content-item").not(":first").hide();
    $(".tabs__nav-item").click(function() {
        $(".tabs__nav-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content-item").hide().eq($(this).index()).fadeIn()
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

    

    // SLICK SLIDER INIT

    $('.hits-slider').slick({
        rows: false,
        infinite: false,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }, ]
    })

    $('.reviews-slider').slick({
        rows: false,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }, ]
    })

    $('.doctor-slider').slick({
        rows: false,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }, ]
    })

    $('.services-slider').slick({
        rows: false,
        infinite: false,
        slidesToShow: 2,
        responsive: [ {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }, ]
    })

    $('.news-slider').slick({
        rows: false,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }, ]
    })

    $('.map-slider').slick({
        rows: false,
        infinite: false,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 767,
            settings: {

            }
        }, ]
    })

    // $('.document-slider').slick({
    //     rows: false,
    //     infinite: false,
    //     slidesToShow: 4,
    //     responsive: [{
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     }, 
    //     {
    //         breakpoint: 1023,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     }, 
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     }, 
    //     ]
    // })

    // $('.individ-slider').slick({
    //     rows: false,
    //     infinite: false,
    //     slidesToShow: 4,
    //     responsive: [{
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     }, 
    //     {
    //         breakpoint: 1023,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     }, 
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     }, 
    //     ]
    // })

    $('.d-ort-slider').slick({
        rows: false,
        slidesToShow: 5,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, 
        {
            breakpoint: 1023,
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

    $('.popular-slider').slick({
        rows: false,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        }, 
        {
            breakpoint: 1023,
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

    $('.brands-slider').slick({
        rows: false,
        slidesToShow: 6,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        }, 
        {
            breakpoint: 1023,
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

    //  $('.document-slider').each(function() { // the containers for all your galleries
    //     $(this).magnificPopup({
    //         delegate: 'a', // the selector for gallery item
    //         type: 'image',
    //         gallery: {
    //           enabled:true
    //         }
    //     });
    // });

    // $('.main-slider').slick({
    //     rows: false,
    //     arrows: false,
    //     dots: true,
    // })

    // $('.main-slider__nav-item--prev').click(function() {
    //     $('.main-slider').slick('slickPrev');
    // })
    // $('.main-slider__nav-item--next').click(function() {
    //     $('.main-slider').slick('slickNext');
    // })

    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    window.addEventListener('resize', function() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    });

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

    if($('.category-filter').length) {
        var mixer = mixitup('.category-filter');
    }


    

});