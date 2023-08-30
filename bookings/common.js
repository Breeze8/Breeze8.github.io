$(function() {

    // NEWS STYLES

    // http://localhost:3000/?modalLogin

    if (document.location.href.indexOf('modalLogin') != -1) {
        $.magnificPopup.open({
            items: {
                src: '#modalLogin',
                type: 'inline'
            }
        })
    }

    // http://localhost:3000/?modalRegistr

    if (document.location.href.indexOf('modalRegistr') != -1) {
        $.magnificPopup.open({
            items: {
                src: '#modalRegistr',
                type: 'inline'
            }
        })
    }

    // NEWS STYLES END

    $('.event-main__seotext-wrap').addClass('init')

    $(".book__right-toggler").click(function() {
        $('.book__right-order').slideToggle()
        $(this).toggleClass("active");
        if ($(".book__right-toggler").hasClass('active')) {
            $(this).find('span').text('Спрятать')
        } else {
            $(this).find('span').text('Показать')
        }
    })

    // $('.lazy-main').lazy({
    //     placeholder: "../img/preloader.gif",
    //     delay: 3400,
    //     afterLoad: function(element) {
    //         var imageSrc = element.data('src');
    //         element.removeClass('active')
    //     },
    // });

    // $('.lazy').lazy({
    //     placeholder: "../img/banner-home-1.jpg",
    //     delay: 3400,
    // });

    $('.event-main__social').click(function() {
        $(this).find('.share__socials').toggleClass('open')
    })

    // TIMER

    /*if ($('#header-timer').length > 0) {
        function startTimer(duration, display) {
            var timer = duration,
                minutes, seconds;
            setInterval(function() {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = 0;
                    return;
                }

                if (timer < 10) {
                    $('#header-timer').addClass('active')
                }

                if (timer == 0) {

                    $.magnificPopup.open({
                        items: {
                            src: '#modalTimeOver',
                            type: 'inline'
                        }
                    })
                }


            }, 1000);
        }
        var fiveMinutes = 15 * 60,
            display = document.querySelector('#header-timer');
        startTimer(fiveMinutes, display);

    }*/

    /*$(".btn--send").on('click', function() {
        $(this).hide();
        $('.timer-code').addClass('active');
        if ($('#timer-code').length > 0) {
            function startTimer(duration, display) {
                var timer = duration,
                    minutes, seconds;
                setInterval(function() {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    display.textContent = minutes + ":" + seconds;

                    if (--timer < 0) {
                        timer = 0;
                        return;
                    }


                }, 1000);
            }
            var fiveMinutes = 1 * 30,
                display = document.querySelector('#timer-code');
            startTimer(fiveMinutes, display);

        }
    })*/

    // FORM PASSWORD HIDE / SHOW

    /*$(".toggle-password").click(function() {

        var input = $(this).siblings('input');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
            $(this).addClass('open');
        } else {
            input.attr("type", "password");
            $(this).removeClass('open');
        }
    });*/

    // REMOVE-ITEM

    $('.wishlist__item-close').click(function() {
        $(this).parent().fadeOut()
    })

    $('.p-cart-top__item-close').click(function() {
        $(this).parent().fadeOut()
    })

    $('.p-cart-top__close').click(function() {
        $(this).closest('.p-cart-top__row').fadeOut()
    })

    $('.modal__wishlist-close').click(function() {
        $(this).parent().parent().fadeOut()
    })

    $('.reviews-head .btn').click(function() {
        $('.reviews-form').slideToggle()
        $(this).toggleClass('active')

        if ($('.reviews-head .btn').hasClass('active')) {
            $(this).text('Закрыть')
        } else {
            $(this).text('Оставить отзыв')
        }
    })

    /*$('.book__right-order-close').click(function() {
        $(this).parent().fadeOut()
    })*/

    // ACCORDION JQUERY

    $('.faq-list > li > a').click(function(j) {
        var dropDown = $(this).closest('li').find('.faq-list__hidden');

        $(this).closest('.faq-list').find('.faq-list__hidden').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $(this).closest('.faq-list').find('a.active').removeClass('active');
            $(this).addClass('active');
            $(this).closest('.faq-list').find('li.active').removeClass('active');
            $(this).parent().addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });


    /*$('.history-accordion > div > .history-accordion__toggler').click(function(j) {
        var dropDown = $(this).closest('.history-accordion__item').find('.history-accordion__hidden');

        var $target = $(j.target);

        if (!$target.attr('data-disable')) {
            $(this).closest('.history-accordion').find('.history-accordion__hidden').not(dropDown).slideUp();
            dropDown.stop(false, true).slideToggle();
        }

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.history-accordion').find('.history-accordion__toggler.active').removeClass('active');
            $(this).addClass('active');
        }

        j.preventDefault();
    });*/




    // PHONE CODE


    $(".phone-input").intlTelInput({
         nationalMode: false,
         preferredCountries: ["de", "ua", "ru"],
         autoHideDialCode: false,
         formatOnDisplay: true,
    });

    // EVENTS LOAD MORE

    /*$('.events-more-home').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().hide()
    })*/


    // COOKIES


    /*$('.cookies-close').click(function() {
        $('.cookies').addClass('closed')
    })*/

    // FORM 

    /*$.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $(".subscribe__form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $.magnificPopup.open({
                items: {
                    src: '#modalSubscribe',
                    type: 'inline'
                }
            })
            $(".subscribe__form").trigger("reset");

        });
        return false;
    });*/


    // PREVENT SCROLL

    $('.dropdown-header').bind('mousewheel DOMMouseScroll', function(e) {
        var scrollTo = null;

        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        } else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });


    // HEADER STICKY 


    $(window).resize(function() {

        var c, currentScrollTop = 0,
            sticky = $('.header-top');

        $(window).scroll(function() {
            var a = $(window).scrollTop();
            var b = sticky.height();

            currentScrollTop = a;

            if (c < currentScrollTop && a > b + b && $(window).width() > 767) {
                sticky.removeClass('fixed');
                $('.header-bottom').removeClass('fixed');
            } else if (c > currentScrollTop && !(a <= b) && $(window).width() > 767) {
                sticky.addClass('fixed');
                $('.header-bottom').addClass('fixed');
            } else if (currentScrollTop < 1000) {
                sticky.removeClass('fixed');
                $('.header-bottom').removeClass('fixed');
            }

             sticky1 = $('.header');

            if (c < currentScrollTop && a > b + b && $(window).width() < 767) {
                sticky1.removeClass('fixed');
                $('.dropdown-mobile').removeClass('fixed');
                $('.content').removeClass('fixed');
                $('.mobile-nav').removeClass('fixed');
            } else if (c > currentScrollTop && !(a <= b) && $(window).width() < 767) {
                sticky1.addClass('fixed');
                $('.dropdown-mobile').addClass('fixed');
                $('.content').addClass('fixed');
                $('.mobile-nav').addClass('fixed');
            } else if (currentScrollTop < 1000) {
                sticky1.removeClass('fixed');
                $('.dropdown-mobile').removeClass('fixed');
                $('.content').removeClass('fixed');
                $('.mobile-nav').removeClass('fixed');
            }

            c = currentScrollTop;
        });

        if ($(this).width() > 767) {


            // CUSTOM SCROLL FIXED NAV

            $('.header-filter__scroll').mCustomScrollbar({
                axis: "y",
                live: "on",
                mouseWheel: { preventDefault: true },
                mouseWheelPixels: 120,
                advanced: { updateOnContentResize: true }
            });

            $('html').addClass('js-desktop')
            $('html').removeClass('js-mobile')

        } else {

            $('html').addClass('js-mobile')
            $('html').removeClass('js-desktop')


        }

    }).trigger('resize');




    // HEADER DROPDOWN INIT 


    $('.dropdown-toggler-fixed').click(function(e) {
        $(this).next().next().toggleClass('open');
        $(this).toggleClass('active')
        e.stopPropagation();
    })

    $('.dropdown-toggler-city').click(function(e) {
        $(this).next().toggleClass('open');
        $(this).toggleClass('active')
        e.stopPropagation();
        if ($('.dropdown-date').hasClass('open')) {
            $('.dropdown-date').removeClass('open')
            $('.dropdown-toggler-date').removeClass('active')
        }
    })

    $('.dropdown-toggler-date').click(function(e) {
        $(this).next().toggleClass('open');
        $(this).toggleClass('active')
        e.stopPropagation();
        if ($('.dropdown-city').hasClass('open')) {
            $('.dropdown-city').removeClass('open')
            $('.dropdown-toggler-city').removeClass('active')
        }
    })

    $(document).on('click', function(e) {

        if ($(e.target).closest('.datepicker--nav-action').length) { return; }
        if ($(e.target).closest('.datepicker--nav-title').length) { return; }
        if ($(e.target).closest('.datepicker--cell-day').length) { return; }

        var container = $(".dropdown-header");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('open');
            $('.dropdown-toggler').removeClass('active')
        }
    });

    setTimeout(function() {
        $('.main-nav').css({
            'overflow': 'visible'
        })
        $('.main-nav__item').css({
            'opacity': '1'
        })
    }, 500);


    // HEADER MAIN MENU FILTER 


    $('.p-cart-choose__wrap input:radio[name=delivery_type]').change(function() {
        if ($('.order-email').is(":checked")) {
            $('.p-cart-choose__hidden').slideDown()
        } else {
            $('.p-cart-choose__hidden').slideUp()
        }
    });

    $('.policy-checkbox input:checkbox').change(function() {
        if ($('.policy-checkbox input:checkbox').is(":checked")) {
            $('.btn--total').removeClass('disabled')
        } else {
            $('.btn--total').addClass('disabled')
        }
    });

    $('.main-nav__item input:checkbox').change(function() {
        if ($('.main-nav__item input:checkbox').is(":checked")) {
            $(this).closest('.main-nav').find('.main-nav__item-submit').addClass('open')
        }
    });

    $('.main-nav__item input:checkbox').each(function() {
        $('.main-nav__item input:checkbox').change(function() {
            if (!$('.main-nav__item input:checkbox').is(":checked")) {
                $(this).closest('.main-nav').find('.main-nav__item-submit').removeClass('open')
            }
        });
    })



    $('.header-filter__footer input:checkbox').change(function() {
        if ($('.header-filter__footer input:checkbox').is(":checked")) {
            $(this).closest('.header-filter__footer').find('.main-nav__item-submit').slideDown();
        }
    });

    $('.header-filter__footer input:checkbox').each(function() {
        $('.header-filter__footer input:checkbox').change(function() {
            if (!$('.header-filter__footer input:checkbox').is(":checked")) {
                $(this).closest('.header-filter__footer').find('.main-nav__item-submit').slideUp();
            }
        });
    })


    // CHOOSE CITY FILTER 


    $('.search-city input:checkbox').change(function() {
        if ($(this).is(":checked")) {
            $(this).closest('.search-city').find('.search-city__content > .btn').removeClass('disabled');
        }
    });

    $('.search-city input:checkbox').each(function() {
        $('.search-city input:checkbox').change(function() {
            if (!$('.search-city input:checkbox').is(":checked")) {
                $(this).closest('.search-city').find('.search-city__content > .btn').addClass('disabled');
            }
        });
    })


    // HEADER MAIN MENU DROPDOWN


    $('.main-nav__dropdown-toggler').click(function(e) {
        $(this).next().toggleClass('open')
        e.stopPropagation();
    })

    $(document).on('click', function(e) {
        var container = $(".main-nav__dropdown");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('open');
        }
    });



    // CUSTOM SCROLL

    $('.form__checkbox-wrap').mCustomScrollbar({
        axis: "y",
        live: "on",
        mouseWheelPixels: 120,
        mouseWheel: { preventDefault: true },
    });

    /*$('.search-dropdown__content').mCustomScrollbar({
        axis: "y",
        live: "on",
        mouseWheelPixels: 120,
        mouseWheel: { preventDefault: true },
    });*/

    // READ MORE

    $(".read-more").click(function(e) {
        e.preventDefault()
        $(".seotext-post").toggleClass('active')
        $(this).closest('.reviews-item').find(".reviews-item__content").toggleClass('active')
        $(this).prev().toggleClass('active')
    });

    $(".seotext-post").dReadmore({
        moreText: "Показать весь текст",
        lessText: "Скрыть весь текст",
        duration: 650,
        timing: "ease"
    });

    $(".reviews-item__content").dReadmore({
        moreText: "Показать весь отзыв",
        lessText: "Скрыть весь отзыв",
        duration: 650,
        timing: "ease",
    });


    var heights = 0;

    setTimeout(function() {

        $('.reviews-block .d-readmove_text-wrapp').each(function() {
            heights = $(this).height();
            console.log(heights)
            if (heights < 160) {
                $(this).parent().next().hide();
                $(this).parent().addClass('hidden')
            }
        })

    }, 1000);






    // SCROLL TO ANY SECTION

    $('.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // TABS JQUERY 

    // TABS DELIVERY 

    $(".inner-tabs-item").not(":first").hide();
    $(".inner-tab").click(function() {
        $(".inner-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".inner-tabs-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".delivery-main .delivery-content__item").not(":first").hide();
    $(".delivery-main .delivery-tabs__item").click(function() {
        $(".delivery-main .delivery-tabs__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".delivery-main .delivery-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    // TABS DELIVERY MOBILE

    $('.delivery-tabs-mobile__toggler').click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active')
    })

    $('.delivery-tabs-mobile .delivery-tabs__item').click(function() {
        var text = $(this).find('span').text();
        $('.delivery-tabs-mobile__toggler span').text(text);
        $('.delivery-tabs-mobile__block').slideUp();
        $('.delivery-tabs-mobile__toggler').removeClass('active')
    })

    $('.delivery-tabs-mobile .delivery-tabs__item:first-child').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/delivery-1-active.svg');
    })

    $('.delivery-tabs-mobile .delivery-tabs__item:nth-child(2)').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/delivery-2-active.svg');
    })

    $('.delivery-tabs-mobile .delivery-tabs__item:nth-child(3)').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/delivery-3-active.svg');
    })



    $(".delivery-history .delivery-content__item").not(":first").hide();
    $(".delivery-history .delivery-tabs__item:not(:last-child)").click(function(e) {
        e.preventDefault()
        $(".delivery-history .delivery-tabs__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".delivery-history .delivery-content__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    var loc = window.location.hash;

    if (loc == "#tab2") {
        $(".delivery-history .delivery-content__item:nth-child(2)").show()
        $(".delivery-history .delivery-content__item:nth-child(1)").hide()
        $(".delivery-history .delivery-tabs__item:nth-child(1)").removeClass('active')
        $(".delivery-history .delivery-tabs__item:nth-child(2)").addClass('active')

        $('.delivery-tabs-mobile__toggler span').text('Настройки')
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-2-active.svg');
    }

    if (loc == "#tab3") {
        $(".delivery-history .delivery-content__item:nth-child(3)").show()
        $(".delivery-history .delivery-content__item:nth-child(1)").hide()
        $(".delivery-history .delivery-tabs__item:nth-child(1)").removeClass('active')
        $(".delivery-history .delivery-tabs__item:nth-child(3)").addClass('active')

        $('.delivery-tabs-mobile__toggler span').text('Стать агентом')
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-3-active.svg');
    }

    if (loc == "#tab4") {
        $(".delivery-history .delivery-content__item:nth-child(4)").show()
        $(".delivery-history .delivery-content__item:nth-child(1)").hide()
        $(".delivery-history .delivery-tabs__item:nth-child(1)").removeClass('active')
        $(".delivery-history .delivery-tabs__item:nth-child(4)").addClass('active')

        $('.delivery-tabs-mobile__toggler span').text('Wish list')
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-4-active.svg');
    }



    $('.delivery-history .delivery-tabs-mobile .delivery-tabs__item:first-child').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-1-active.svg');
    })

    $('.delivery-history .delivery-tabs-mobile .delivery-tabs__item:nth-child(2)').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-2-active.svg');
    })

    $('.delivery-history .delivery-tabs-mobile .delivery-tabs__item:nth-child(3)').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-3-active.svg');
    })

    $('.delivery-history .delivery-tabs-mobile .delivery-tabs__item:nth-child(4)').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-4-active.svg');
    })

    $('.delivery-history .delivery-tabs-mobile .delivery-tabs__item:nth-child(5)').click(function() {
        $('.delivery-tabs-mobile__toggler').find('img').attr('src', 'img/history-5-active.svg');
    })

    $('.delivery-history .delivery-tabs-mobile .delivery-tabs__item').click(function() {
        $('.delivery-history .delivery-tabs-mobile .delivery-tabs__item').removeClass('active')
        $(this).addClass('active')
    })

    // TABS FILTER

    $(".tab-item").hide();

    $('.city-init').click(function() {
        $(this).toggleClass('active');
        $('.city-tab').toggle();
        $('.city-tab').toggleClass('active');
        $('.datepicker-init').removeClass('active')
        if ($('.datepicker-tab').hasClass('active')) {
            $('.datepicker-tab').hide();
            $('.datepicker-tab').removeClass('active');
        }
    })

    $('.datepicker-init').click(function() {
        $(this).toggleClass('active');
        $('.datepicker-tab').toggle();
        $('.datepicker-tab').toggleClass('active');
        $('.city-init').removeClass('active')
        if ($('.city-tab').hasClass('active')) {
            $('.city-tab').hide();
            $('.city-tab').removeClass('active');
        }

    })

    // SLICK INIT

    $('.event-slider__for, .event-slider__nav').each(function() {
        $(this).children('*').each(function(i) {
            $(this).attr('data-original-index', i);
        });
    });

    window.$inlineBigSlider = $('.event-sliders__inline .event-slider__for').slick({
        asNavFor: '.event-sliders__inline .event-slider__nav',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        rows: false,
        arrows: false,
        useTransform: true,
        fade: false,
        responsive: [{
            breakpoint: 450,
            settings: {}
        }]
    });

    window.$inlineMinSlider = $('.event-sliders__inline .event-slider__nav').slick({
        asNavFor: '.event-sliders__inline .event-slider__for',
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        rows: false,
        speed: 400,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 450,
            settings: {
                slidesToShow: 3,
            }
        }]
    });

    window.$modalMinSlider = $('.event-sliders__modal .event-slider__nav').slick({
        asNavFor: '.event-sliders__modal .event-slider__for',
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        rows: false,
        speed: 400,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 450,
            settings: {
                slidesToShow: 3,
            }
        }]
    });

    window.$modalBigSlider = $('.event-sliders__modal .event-slider__for').slick({
        asNavFor: '.event-sliders__modal .event-slider__nav',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        rows: false,
        arrows: false,
        useTransform: true,
        fade: false,
        responsive: [{
            breakpoint: 450,
            settings: {}
        }]
    });

    $modalBigSlider.on('afterChange', function(e, slick, currentSlide) {
        $inlineBigSlider.slick('slickGoTo', currentSlide);
    });

    $inlineBigSlider.add($modalBigSlider).on('afterChange', function() {
        $('iframe').each(function() {
            this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        });
    });


    var 
        players = [],
        queue = [];

    var timerId;

    function onPlayerStateChange(event) {

        console.log('ok');

        if (event.data == 1) {
            clearTimeout(timerId);
            $('.c-how__video-wrap').addClass('show');

            $('.event-main__for').addClass('show')
            $('.modal__event-for').addClass('show')
            $('.js-video-button').addClass('show')

            playVideo(event.target);
        }

        if (event.data == 2) {
            timerId = setTimeout(function() {
                $('.c-how__video-wrap').removeClass('show');
                $('.event-main__for').removeClass('show')
                $('.modal__event-for').removeClass('show')
                $('.js-video-button').removeClass('show')
                pauseVideo(event.target);
            }, 100);
        }

        if (event.data == 3) {
            clearTimeout(timerId);
            $('.c-how__video-wrap').addClass('show');
            $('.event-main__for').addClass('show')
            $('.modal__event-for').addClass('show')
            $('.js-video-button').addClass('show')
            playVideo(event.target);

        }

        function pauseVideo(player) {
            player.pauseVideo();
        }

        function playVideo(player) {
            player.playVideo();
        }
    }


    function initVideo() {

        var Videos = function() {

            function Videos() {};

            Videos.prototype.add = function($video) {
                queue.push($video);
            };


            Videos.prototype.loadApi = function() {
                $.getScript("https://www.youtube.com/iframe_api?enablejsapi=1&origin=https://" + location.host, function() {

                    window.onYouTubeIframeAPIReady = function() {
                        queue.forEach(function($video) {
                            var player = new YT.Player($video.get(0), {
                                'width': "100%",
                                'height': "100%",
                                'videoId': $video.data("id"),
                                origin: 'https://' + location.host,
                                widget_referrer: 'https://' + location.host
                            });

                            players.push(player);
                        });
                    };
                });
            };
            return Videos;
        }();

        var videos = new Videos();
        $('.video__player').each(function() {
            videos.add($(this));
        });
        videos.loadApi();
    };

    initVideo();

    $('.js-video-button').on('click', function(event) {
        event.preventDefault();
        $(this).addClass('show')
        $(this).next('iframe').each(function() {
            this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        });
    });

    $('iframe').focus(function() {
        $(this).blur();
    });

    var timeoutMessageID = null;

    window.addEventListener('message', function(e) {
        try {
            var data = JSON.parse(e.data);
        } catch(e) {
            return;
        }

        if(!data.info || !data.info.videoUrl) return;

        clearTimeout(timeoutMessageID);

        if(data.info.playerState === 2) {
            timeoutMessageID = setTimeout(function() {
                $('.js-video-button').removeClass('show');
                $('iframe').blur();
            }, 300);
        }
    });

    // HALL SLIDER

    $('.hall-slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        rows: false,
        arrows: false,
        asNavFor: '.hall-slider__nav',
        responsive: [{
            breakpoint: 450,
            settings: {

            }
        }, ]
    })

    $('.hall-slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.hall-slider__for',
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        rows: false,
        speed: 400,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 450,
            settings: {
                slidesToShow: 3,
            }
        }, ]
    });

    // EVENT SLIDER

    $('.events-slider').slick({
        rows: false,
        slidesToShow: 4,
        infinite: false,
        responsive: [{
                breakpoint: 1200,
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
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    })

    $('.history-slider').slick({
        rows: false,
        slidesToShow: 4,
        infinite: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    var stHeight = $('.history-slider .slick-track').height();
    $('.history-slider .slick-slide').css('height', stHeight + 'px');

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        arrows: false,
        asNavFor: '.slider-nav__slider'
    })

    $('.slider-nav__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        // autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        rows: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    // DATEPICKER

    // $.fn.datepicker.language['ru'] = {
    //     days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    //     daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
    //     daysMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    //     months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    //     monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    //     today: 'Сегодня',
    //     clear: 'Очистить',
    //     dateFormat: 'mm.yyyy',
    //     timeFormat: 'hh:ii',
    //     firstDay: 1
    // };


    // IOS 100vh HEIGHT FIX

    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');

    window.addEventListener('resize', function() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    });


    if ($('.s-delivery__item').length >= 2) {
        $('.s-delivery > a').hide()
    } else {
        $('.s-delivery > a').show()
    }


});