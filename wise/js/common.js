$(function() {


    

    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.landing-header');
    var headerHeight = $header.outerHeight();

    $window.scroll(function() {

        var windowTop = $window.scrollTop();

        if (windowTop >= headerHeight) {
            $header.addClass('gescout-sticky');
        } else {
            $header.removeClass('gescout-sticky');
            $header.removeClass('gescout-show');
        }

        if ($header.hasClass('gescout-sticky')) {
            if (windowTop < lastScrollTop) {
                $header.addClass('gescout-show');
            } else {
                $header.removeClass('gescout-show');
            }
        }

        lastScrollTop = windowTop;
    });

    if ($(window).width() < 1202) {
        $(".sidebar").sticky({ topSpacing: 0 });
    }

    if ($(window).width() < 767) {
        $(".cat-list > li > a").click(function() {
            $(this).parent().removeClass('active');
            $(this).next().addClass('open')
        });
        $(".cat-submenu__item .blue-link").click(function() {
            $(this).closest('.cat-submenu').removeClass('open')
            $(this).closest('li').removeClass('active')
        });
    }

    // MAIN CATALOG

    $(".cat-list > li").mouseleave(function() {
        $(this).removeClass('active');
        $(this).find('.cat-submenu').removeClass('open')
    });



    $(document).on('click', function(e) {
        const
            $toggler = $(e.target).closest('.drop-toggler'),
            $block = $(e.target).closest('.drop').find('.drop-box');
        $block2 = $(e.target).closest('.drop').find('.drop-toggler');

        if ($toggler.length) {
            $block.toggleClass('open');
            $block2.toggleClass('active is-active')
        }

        $('.drop-box').not($block).removeClass('open');
        $('.drop-toggler').not($block2).removeClass('active is-active')
    });

    $(".drop-close").click(function() {
        $('.hamburger').removeClass('is-active')
        $(this).closest('.drop').find('.drop-box').removeClass('open')
    });

    // TOOLTIP

    $('.tooltip').tooltipster({
        content: $('#tooltip_content1'),
        theme: 'tooltipster-shadow',
        contentCloning: false,
        trigger: ('ontouchstart' in window) ? 'click' : 'hover'
    });

    // CLIPBOARD

    new ClipboardJS('.btn');

    // READ MORE

    function myFunction() {
        var dots = document.getElementById("moreDots");
        var moreText = document.getElementById("moreRead");
        var btnText = document.getElementById("moreBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    $("#moreBtn").click(function() {
        myFunction()
    })

    // SIDEBAR

    $(".search-toggler").click(function() {
        $('.search').toggleClass('open')
    })

    $(".sidebar-close").click(function() {
        $(this).toggleClass('active')
        $('.sidebar').toggleClass('open')
        $('.content-box').toggleClass('open')
        $(".partner-bank__slider").slick("refresh")
        $(".c-download-slider").slick("refresh")
    })

    // COUNTDOWN

    function makeTimer() {

        var endTime = new Date("20 October 2023 11:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }

    setInterval(function() { makeTimer(); }, 1000);

    // CUSTOM FLAGS COUNTRIES

    if ($('#phone').length) {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            excludeCountries: ['ru'],
            initialCountry: "ua",
            preferredCountries: ["ua"],
            separateDialCode: true,
        })

        $('.form__phone button').click(function(){
            var test1, test2, test3; 

            test1 = $('#phone').val()
            test2 = $('.iti__selected-dial-code').text()
            test3 = test2 + test1
            console.log(test3)
        }) 
    }

    $(".form__code-item input").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).parent().next().find('input').focus();
        }
    });



    $(".form__input, .form__textarea").mouseenter(function() {
        $(this).closest('.form__row').find('.form__phone button').addClass('active')
    });

    $(".form__input, .form__textarea").mouseleave(function() {
        $(this).closest('.form__row').find('.form__phone button').removeClass('active')
    });

    // DROPDOWN

    $('.js-dropdown-text').on('click', function() {
        $(this).find('.dropdown-toggler').toggleClass('active')
    })

    $('.js-dropdown-text .dropdown-body__item').on('click', function() {
        var text = $(this).text()
        $(this).closest('.dropdown').find('.dropdown-toggler span').text(text)
        $('.js-dropdown-text .dropdown-body__item.active').removeClass('active')
        $(this).addClass('active')
    })



    // SHOW HIDE PASSWORD




    $('.js-psw').on('click', function() {
        $(this).toggleClass('active')
        var passInput = $(this).closest('.form__row').find('input')
        if (passInput.attr('type') === 'password') {
            passInput.attr('type', 'text');
        } else {
            passInput.attr('type', 'password');
        }
    })

    // CUSTOM SELECT

    $(".js-select").select2();

    // ADAPTIVE MENU

    $('.hamburger--landing').click(function() {
        $(this).toggleClass('is-active');
        $('.landing-header__mob').toggleClass('open');
    });

    $('.landing-header__close').click(function() {
        $('.hamburger--landing').removeClass('is-active');
        $('.landing-header__mob').removeClass('open');
    });

    // SCROLL TO ANY SECTION

    $('.landing-header__list a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $(".landing-header__mob").removeClass('open')
        $(".hamburger").removeClass('is-active')

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 800, 'linear');
    });

    // TABS JQUERY 

    $(".tabs-content__item").not(":first").hide();
    $(".tabs-nav__item").click(function() {
        $(".tabs-nav__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // MODAL MAGNIFIC POPUP INIT

    $('.modal-init-video').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            },
        });
    });

    $('.modal-init').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });

    $('.modal-close, .js-close').on("click", function() {
        $.magnificPopup.close();
    });

    // SLICK SLIDER INIT

    if ($(".news-slider").length) {
        $(".news-slider").each(function() {
            var nextArrow = $(this).closest('.slider-block').find('.slider-arrow--next');
            var prevArrow = $(this).closest('.slider-block').find('.slider-arrow--prev');

            $(this).slick({
                slidesToShow: 5,
                rows: false,
                dots: true,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    }, ,
                    {
                        breakpoint: 890,
                        settings: {
                            slidesToShow: 2,
                        }
                    }, ,
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

    if ($(".blogger-slider").length) {
        $(".blogger-slider").each(function() {
            var dots = $(this).closest('.slider-block').find('.slider-dots');
            var nextArrow = $(this).closest('.slider-block').find('.slider-arrow--next');
            var prevArrow = $(this).closest('.slider-block').find('.slider-arrow--prev');

            $(this).slick({
                slidesToShow: 1,
                rows: false,
                dots: true,
                vertical: true,
                verticalSwiping: true,
                prevArrow: prevArrow,
                speed: 800,
                infinite: false,
                nextArrow: nextArrow,
                appendDots: '.blogger-dots',
                responsive: [{
                    breakpoint: 1023,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                    }
                }, ]
            })
        })
    }


    if ($(".partner-bank__slider").length) {
        $(".partner-bank__slider").each(function() {
            var dots = $(this).closest('.slider-block').find('.slider-dots');
            var nextArrow = $(this).closest('.slider-block').find('.slider-arrow--next');
            var prevArrow = $(this).closest('.slider-block').find('.slider-arrow--prev');

            $(this).slick({
                rows: false,
                dots: true,
                prevArrow: prevArrow,
                nextArrow: nextArrow,
                responsive: [{
                    breakpoint: 767,
                    settings: {

                    }
                }, ]
            })
        })
    }



    if ($(".c-download-slider").length) {
        $(".c-download-slider").each(function() {
            $(".c-download-slider").slick({
                rows: 3,
                slidesToShow: 4,
                dots: true,
                arrows: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                }, 
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        rows: 2,
                    }
                }, 
                , 
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        rows: 2,
                    }
                }, 
                ]
            })
        })
    }


    $('.c-download-item__hidden-toggler').click(function(){
        $(this).closest('.c-download-item__hidden').toggleClass('active')
    })


    $('.login-step').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        rows: false,
        infinite: false,
        adaptiveHeight: true,
        asNavFor: '.login-nav'
    });
    $('.login-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: false,
        asNavFor: '.login-step',
        focusOnSelect: false,
        swipe: false,
        infinite: false,
    });

    $('.login-next').click(function() {
        $(this).closest('.login-nav__item').addClass('activated')
        $(".login-step").slick('slickNext');
        $('.login-nav').on('beforeChange', function(e, s, currentSlideIndex) {
            if ($('.login-nav .slick-current').data('slick-index') == 0) {
                $('.login-nav .slick-slide:nth-child(1)').addClass('active')
            }
            if ($('.login-nav .slick-current').data('slick-index') == 1) {
                $('.login-nav .slick-slide:nth-child(2)').addClass('active')
            }
            if ($('.login-nav .slick-current').data('slick-index') == 2) {
                $('.login-nav .slick-slide:nth-child(3)').addClass('active')
            }
            if ($('.login-nav .slick-current').data('slick-index') == 3) {
                $('.login-nav .slick-slide:nth-child(4)').addClass('active')
            }
        });
    });

    $('.login-prev').click(function() {
        $(".login-step").slick('slickPrev');
        $('.login-nav').on('beforeChange', function(e, s, currentSlideIndex) {
            if ($('.login-nav .slick-current').data('slick-index') == 1) {
                $('.login-nav .slick-slide:nth-child(2)').removeClass('active')
            }
            if ($('.login-nav .slick-current').data('slick-index') == 2) {
                $('.login-nav .slick-slide:nth-child(3)').removeClass('active')
            }
            if ($('.login-nav .slick-current').data('slick-index') == 3) {
                $('.login-nav .slick-slide:nth-child(4)').removeClass('active')
            }
        });
    });


    $(".reward-row").not(".slick-initialized").slick({
        slidesToShow: 1,
        arrows: false,
        rows: false,
        speed: 900,
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
                breakpoint: 1200,
                settings: 'unslick'
            },
            {
                breakpoint: 1024,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    settings: 'unslick'
                }
            },
            {
                breakpoint: 767,
                settings: 'unslick'
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".prices-row").not(".slick-initialized").slick({
        slidesToShow: 3,
        arrows: false,
        rows: false,
        speed: 900,
        mobileFirst: true,
        responsive: [{
                breakpoint: 2000,
                settings: 'unslick'
            },
            {
                breakpoint: 1600,
                settings: 'unslick'
            }, ,
            {
                breakpoint: 1201,
                settings: 'unslick'
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".c-card-slider").not(".slick-initialized").slick({
        slidesToShow: 1,
        arrows: false,
        rows: false,
        speed: 900,
        mobileFirst: true,
        responsive: [{
                breakpoint: 2000,
                settings: 'unslick'
            },
            {
                breakpoint: 1600,
                settings: 'unslick'
            }, ,
            {
                breakpoint: 1201,
                settings: 'unslick'
            },
            {
                breakpoint: 1200,
                settings: 'unslick'
            },
            {
                breakpoint: 1023,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: 'unslick'
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(window).on('resize', function() {
        $(".reward-row").slick('resize');
        $(".prices-row").slick('resize');
        $(".c-card-slider").slick('resize');
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H9V0H7V7H0V9H7V16H9V9H16V7Z" fill="url(#paint0_linear_403_86805)"/><defs><linearGradient id="paint0_linear_403_86805" x1="0" y1="8" x2="16" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#1DA1F2"/><stop offset="1" stop-color="#009FFC"/></linearGradient></defs></svg></div><div class="quantity-button quantity-down"><svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="2" fill="url(#paint0_linear_403_86800)"/><defs><linearGradient id="paint0_linear_403_86800" x1="0" y1="1" x2="16" y2="1" gradientUnits="userSpaceOnUse"><stop stop-color="#1DA1F2"/><stop offset="1" stop-color="#009FFC"/></linearGradient></defs></svg></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = jQuery(this),
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

});